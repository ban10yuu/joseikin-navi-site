import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outRoot = path.join(root, 'out');
const dataRoot = path.join(root, 'src', 'data', 'grants');
const baseUrl = 'https://joseikin-navi-site.vercel.app';
const expiredBannerText = 'これは期限が切れています';
const expiredDescriptionText = '掲載している申請期限は過ぎています';
const auditNow = process.env.DEADLINE_AUDIT_NOW
  ? new Date(process.env.DEADLINE_AUDIT_NOW)
  : new Date();

function walk(dir, pattern) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(absolutePath, pattern));
    } else if (pattern.test(entry.name)) {
      results.push(absolutePath);
    }
  }
  return results;
}

function getDeadlineDateEnd(deadlineDate) {
  return new Date(`${deadlineDate}T23:59:59+09:00`);
}

function isExpired(deadlineDate) {
  return getDeadlineDateEnd(deadlineDate).getTime() < auditNow.getTime();
}

function collectDeadlineCandidates() {
  if (!fs.existsSync(dataRoot)) {
    throw new Error(`Data directory does not exist: ${dataRoot}`);
  }

  const candidates = [];
  const files = walk(dataRoot, /\.ts$/);

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const grantBlocks = [];
    let currentBlock = null;

    for (const line of content.split(/\r?\n/)) {
      if (!currentBlock && /^  \{\s*$/.test(line)) {
        currentBlock = [line];
        continue;
      }

      if (!currentBlock) continue;

      currentBlock.push(line);
      if (/^  \},?\s*$/.test(line)) {
        grantBlocks.push(currentBlock.join('\n'));
        currentBlock = null;
      }
    }

    for (const block of grantBlocks) {
      const slug = block.match(/slug:\s*['"]([^'"]+)['"]/)?.[1];
      const deadlineDate = block.match(/deadlineDate:\s*['"](\d{4}-\d{2}-\d{2})['"]/)?.[1];
      const officialUrl = block.match(/officialUrl:\s*['"]([^'"]*)['"]/)?.[1] || '';

      if (!slug || !deadlineDate) continue;

      candidates.push({
        slug,
        deadlineDate,
        expired: isExpired(deadlineDate),
        hasOfficialSource: /^https?:\/\/(?!([^/]+\.)?example\.com(?:\/|$)|localhost(?:[:/]|$))/.test(officialUrl),
        file: path.relative(root, file),
      });
    }
  }

  return candidates;
}

function readOutput(relativePath) {
  const absolutePath = path.join(outRoot, relativePath);
  if (!fs.existsSync(absolutePath)) return null;
  return fs.readFileSync(absolutePath, 'utf8');
}

function hasNoindexFollow(html) {
  const robotsMeta = html.match(/<meta\s+[^>]*name=["']robots["'][^>]*>/i)?.[0] || '';
  const content = robotsMeta.match(/\bcontent=["']([^"']+)["']/i)?.[1]?.toLowerCase() || '';
  return content.includes('noindex') && content.includes('follow');
}

function collectPublicLinksToGrant(slug) {
  const htmlFiles = walk(outRoot, /\.html$/);
  const localHref = `/grant/${slug}/`;
  const absoluteHref = `${baseUrl}/grant/${slug}/`;
  const ownDetailPage = path.join(outRoot, 'grant', slug, 'index.html');

  return htmlFiles
    .filter((file) => file !== ownDetailPage)
    .filter((file) => {
      const html = fs.readFileSync(file, 'utf8');
      return html.includes(`href="${localHref}"`) ||
        html.includes(`href='${localHref}'`) ||
        html.includes(`href="${absoluteHref}"`) ||
        html.includes(`href='${absoluteHref}'`);
    })
    .map((file) => path.relative(outRoot, file));
}

function main() {
  if (!fs.existsSync(outRoot)) {
    throw new Error('out/ does not exist. Run `npm run build` before `npm run audit:deadlines`.');
  }

  const candidates = collectDeadlineCandidates();
  const expiredCandidates = candidates.filter((candidate) => candidate.expired);
  const sitemap = readOutput('sitemap.xml') || '';
  const failures = [];

  if (expiredCandidates.length === 0 && process.env.ALLOW_NO_EXPIRED_GRANTS !== '1') {
    failures.push({
      check: 'expired-fixture',
      message: '期限切れ判定を検証できる deadlineDate 過去日データが見つかりません。',
    });
  }

  for (const candidate of expiredCandidates) {
    const publicLinks = collectPublicLinksToGrant(candidate.slug);
    if (publicLinks.length > 0) {
      failures.push({
        check: 'expired-public-list-exclusion',
        slug: candidate.slug,
        message: '期限切れ制度への公開一覧リンクが残っています。',
        files: publicLinks.slice(0, 20),
      });
    }

    if (!candidate.hasOfficialSource) {
      continue;
    }

    const detailPath = `grant/${candidate.slug}/index.html`;
    const detailHtml = readOutput(detailPath);

    if (!detailHtml) {
      failures.push({
        check: 'expired-detail-exists',
        slug: candidate.slug,
        message: `期限切れ制度の詳細ページが生成されていません: ${detailPath}`,
      });
      continue;
    }

    if (!detailHtml.includes(expiredBannerText) || !detailHtml.includes(expiredDescriptionText)) {
      failures.push({
        check: 'expired-detail-banner',
        slug: candidate.slug,
        message: '期限切れ詳細ページに警告文がありません。',
      });
    }

    if (!hasNoindexFollow(detailHtml)) {
      failures.push({
        check: 'expired-detail-noindex',
        slug: candidate.slug,
        message: '期限切れ詳細ページに noindex, follow がありません。',
      });
    }

    if (sitemap.includes(`/grant/${candidate.slug}/`)) {
      failures.push({
        check: 'expired-sitemap-exclusion',
        slug: candidate.slug,
        message: '期限切れ制度が sitemap.xml に残っています。',
      });
    }

  }

  const summary = {
    now: auditNow.toISOString(),
    deadlineCandidates: candidates.length,
    expired: expiredCandidates.length,
    expiredWithOfficialSource: expiredCandidates.filter((candidate) => candidate.hasOfficialSource).length,
    activeWithDeadline: candidates.length - expiredCandidates.length,
    checkedExpiredSlugs: expiredCandidates.map((candidate) => candidate.slug),
    failures: failures.length,
  };

  console.log(JSON.stringify(summary, null, 2));

  if (failures.length > 0) {
    console.log(JSON.stringify(failures, null, 2));
    process.exitCode = 1;
  }
}

main();
