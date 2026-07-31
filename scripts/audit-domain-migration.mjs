import fs from 'node:fs';
import path from 'node:path';

const canonicalOrigin = new URL(process.env.MIGRATION_CANONICAL_ORIGIN || 'https://shienseido-navi.jp').origin;
const legacyOrigin = new URL(process.env.MIGRATION_LEGACY_ORIGIN || 'https://joseikin-navi-site.vercel.app').origin;
const inputPath = path.resolve(process.env.MIGRATION_URL_LIST || 'artifacts/migration-20260716/old-sitemap-urls.txt');
const concurrency = Math.max(1, Number(process.env.MIGRATION_AUDIT_CONCURRENCY || 24));
const retries = Math.max(1, Number(process.env.MIGRATION_AUDIT_RETRIES || 3));

async function assertLegacyOriginCanRedirect() {
  const legacyUrl = `${legacyOrigin}/`;
  const expectedLocation = `${canonicalOrigin}/`;
  const response = await fetch(legacyUrl, {
    method: 'HEAD',
    redirect: 'manual',
    headers: { 'user-agent': 'JoseikinMigrationAudit/1.0' },
  });
  const location = response.headers.get('location');
  const resolvedLocation = location ? new URL(location, legacyUrl).href : null;

  if (![301, 308].includes(response.status) || resolvedLocation !== expectedLocation) {
    const providerError = response.headers.get('x-vercel-error');
    throw new Error([
      `移行元ホストが正規URLへ転送できません: ${legacyUrl}`,
      `status=${response.status}`,
      `location=${location ?? 'なし'}`,
      providerError ? `providerError=${providerError}` : null,
      '全URL監査は中止しました。先に移行元の301/308転送を復旧してください。',
    ].filter(Boolean).join(' / '));
  }
}

async function loadCanonicalUrls() {
  if (fs.existsSync(inputPath)) {
    return [...new Set(fs.readFileSync(inputPath, 'utf8').split(/\r?\n/).filter(Boolean))];
  }

  const sitemapUrl = `${canonicalOrigin}/sitemap.xml`;
  console.warn(`移行前URL一覧がありません。現行sitemapから監査URLを取得します: ${sitemapUrl}`);

  const response = await fetch(sitemapUrl, {
    headers: { 'user-agent': 'JoseikinMigrationAudit/1.0' },
  });
  if (!response.ok) {
    throw new Error(`sitemapを取得できません: ${sitemapUrl} (${response.status})`);
  }

  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).filter(Boolean);
  if (urls.length === 0) {
    throw new Error(`sitemapからURLを抽出できません: ${sitemapUrl}`);
  }
  return [...new Set(urls)];
}

await assertLegacyOriginCanRedirect();
const canonicalUrls = await loadCanonicalUrls();
const failures = [];
let nextIndex = 0;
let completed = 0;

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function inspectRedirect(canonicalUrl) {
  const canonical = new URL(canonicalUrl);
  if (canonical.origin !== canonicalOrigin) {
    failures.push({ canonicalUrl, error: `正規URLのoriginが不一致: ${canonical.origin}` });
    return;
  }

  const legacyUrl = `${legacyOrigin}${canonical.pathname}${canonical.search}`;
  let lastResult = null;

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(legacyUrl, {
        method: 'HEAD',
        redirect: 'manual',
        headers: { 'user-agent': 'JoseikinMigrationAudit/1.0' },
      });
      const location = response.headers.get('location');
      lastResult = { status: response.status, location };

      if ([301, 308].includes(response.status) && location === canonicalUrl) return;
      if (response.status !== 429 && response.status < 500) break;
    } catch (error) {
      lastResult = { error: error instanceof Error ? error.message : String(error) };
    }

    await sleep(150 * attempt);
  }

  failures.push({ canonicalUrl, legacyUrl, ...lastResult });
}

async function worker() {
  while (true) {
    const index = nextIndex;
    nextIndex += 1;
    if (index >= canonicalUrls.length) return;

    await inspectRedirect(canonicalUrls[index]);
    completed += 1;
    if (completed % 500 === 0 || completed === canonicalUrls.length) {
      console.log(`進捗 ${completed}/${canonicalUrls.length}、不一致 ${failures.length}`);
    }
  }
}

const startedAt = Date.now();
await Promise.all(Array.from({ length: Math.min(concurrency, canonicalUrls.length) }, worker));

const summary = {
  checked: canonicalUrls.length,
  failures: failures.length,
  elapsedSeconds: Math.round((Date.now() - startedAt) / 100) / 10,
  legacyOrigin,
  canonicalOrigin,
};

console.log(JSON.stringify(summary, null, 2));
if (failures.length > 0) {
  console.log(JSON.stringify(failures.slice(0, 100), null, 2));
  process.exitCode = 1;
}
