import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

function parseArgs(argv) {
  const args = {
    cacheDir: '.cache/official-discovery',
    input: '',
    output: '',
    concurrency: 8,
    maxCacheAgeHours: 24,
    timeoutMs: 30000,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--cache-dir') {
      args.cacheDir = argv[index + 1] || args.cacheDir;
      index += 1;
    } else if (arg === '--input') {
      args.input = argv[index + 1] || '';
      index += 1;
    } else if (arg === '--output') {
      args.output = argv[index + 1] || '';
      index += 1;
    } else if (arg === '--concurrency') {
      args.concurrency = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    } else if (arg === '--max-cache-age-hours') {
      args.maxCacheAgeHours = Number.parseFloat(argv[index + 1] || '');
      index += 1;
    } else if (arg === '--timeout-ms') {
      args.timeoutMs = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    }
  }
  if (!args.input || !args.output) {
    console.error('Usage: node scripts/validate-official-candidate-urls.mjs --input candidates.json --output urls-validated.json');
    process.exit(2);
  }
  if (!Number.isFinite(args.concurrency) || args.concurrency < 1) args.concurrency = 8;
  if (!Number.isFinite(args.maxCacheAgeHours) || args.maxCacheAgeHours < 0) args.maxCacheAgeHours = 24;
  return args;
}

function flattenCandidates(discovery) {
  const candidates = [];
  for (const result of discovery.results || []) {
    for (const candidate of result.candidates || []) {
      candidates.push(candidate);
    }
  }
  const byUrl = new Map();
  for (const candidate of candidates) {
    if (!candidate.sourceUrl) continue;
    const existing = byUrl.get(candidate.sourceUrl);
    if (!existing || (candidate.keywordHits || []).length > (existing.keywordHits || []).length) {
      byUrl.set(candidate.sourceUrl, candidate);
    }
  }
  return [...byUrl.values()];
}

function sameOfficialDomain(url, baseUrl) {
  try {
    const target = new URL(url);
    const base = new URL(baseUrl);
    return target.hostname === base.hostname || target.hostname.endsWith(`.${base.hostname}`);
  } catch {
    return false;
  }
}

function cachePath(cacheDir, url) {
  const hash = crypto.createHash('sha256').update(url).digest('hex');
  return path.join(cacheDir, `${hash}.json`);
}

function freshSuccessfulCache(candidate, args) {
  const file = cachePath(args.cacheDir, candidate.sourceUrl);
  if (!fs.existsSync(file)) return null;
  try {
    const cached = JSON.parse(fs.readFileSync(file, 'utf8'));
    const fetchedAt = Date.parse(cached.fetchedAt || '');
    const maxAgeMs = args.maxCacheAgeHours * 60 * 60 * 1000;
    const fresh = Number.isFinite(fetchedAt) && Date.now() - fetchedAt <= maxAgeMs;
    if (!fresh || !cached.ok || !cached.finalUrl) return null;
    return cached;
  } catch {
    return null;
  }
}

function validationResultFromFetched(candidate, fetched, cacheStatus) {
  const text = fetched.text || '';
  return {
    ...candidate,
    finalUrl: fetched.finalUrl || candidate.sourceUrl,
    httpStatus: fetched.status || 0,
    reachable: (fetched.status || 0) >= 200 && (fetched.status || 0) < 400,
    officialDomain: sameOfficialDomain(fetched.finalUrl || candidate.sourceUrl, candidate.sourceUrl),
    titleContainsMunicipality: text.includes(candidate.municipalityName),
    titleOrBodyContainsKeyword: (candidate.keywordHits || []).some((keyword) => text.includes(keyword)),
    validationCache: cacheStatus,
  };
}

async function check(candidate, args) {
  const cached = freshSuccessfulCache(candidate, args);
  if (cached) {
    return validationResultFromFetched(candidate, cached, 'hit');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), args.timeoutMs);
  try {
    const response = await fetch(candidate.sourceUrl, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 joseikin-navi official validation' },
    });
    const contentType = response.headers.get('content-type') || '';
    const text = contentType.includes('html') || contentType.includes('text') ? await response.text() : '';
    return validationResultFromFetched(candidate, {
      finalUrl: response.url,
      ok: response.status >= 200 && response.status < 400,
      status: response.status,
      text,
    }, 'refetched');
  } catch (error) {
    return {
      ...candidate,
      error: error instanceof Error ? error.message : String(error),
      httpStatus: 0,
      reachable: false,
      officialDomain: false,
      titleContainsMunicipality: false,
      titleOrBodyContainsKeyword: false,
      validationCache: 'miss-error',
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runLimited(items, concurrency, worker) {
  const results = [];
  let nextIndex = 0;
  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runWorker));
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const discovery = JSON.parse(fs.readFileSync(args.input, 'utf8'));
  const candidates = flattenCandidates(discovery);
  const results = await runLimited(candidates, args.concurrency, (candidate) => check(candidate, args));
  const output = {
    batchId: discovery.batchId,
    generatedAt: new Date().toISOString(),
    checked: results.length,
    cacheHits: results.filter((result) => result.validationCache === 'hit').length,
    refetched: results.filter((result) => result.validationCache !== 'hit').length,
    reachable: results.filter((result) => result.reachable).length,
    failures: results.filter((result) => !result.reachable).length,
    results,
  };
  fs.writeFileSync(args.output, `${JSON.stringify(output, null, 2)}\n`);
  console.log(JSON.stringify({
    batchId: output.batchId,
    checked: output.checked,
    cacheHits: output.cacheHits,
    refetched: output.refetched,
    reachable: output.reachable,
    failures: output.failures,
    output: args.output,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
