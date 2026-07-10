import fs from 'node:fs';

function parseArgs(argv) {
  const args = {
    input: '',
    output: '',
    concurrency: 8,
    timeoutMs: 30000,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--input') {
      args.input = argv[index + 1] || '';
      index += 1;
    } else if (arg === '--output') {
      args.output = argv[index + 1] || '';
      index += 1;
    } else if (arg === '--concurrency') {
      args.concurrency = Number.parseInt(argv[index + 1] || '', 10);
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

async function check(candidate, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(candidate.sourceUrl, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 joseikin-navi official validation' },
    });
    const contentType = response.headers.get('content-type') || '';
    const text = contentType.includes('html') || contentType.includes('text') ? await response.text() : '';
    return {
      ...candidate,
      finalUrl: response.url,
      httpStatus: response.status,
      reachable: response.status >= 200 && response.status < 400,
      officialDomain: sameOfficialDomain(response.url, candidate.sourceUrl),
      titleContainsMunicipality: text.includes(candidate.municipalityName),
      titleOrBodyContainsKeyword: (candidate.keywordHits || []).some((keyword) => text.includes(keyword)),
    };
  } catch (error) {
    return {
      ...candidate,
      error: error instanceof Error ? error.message : String(error),
      httpStatus: 0,
      reachable: false,
      officialDomain: false,
      titleContainsMunicipality: false,
      titleOrBodyContainsKeyword: false,
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
  const results = await runLimited(candidates, args.concurrency, (candidate) => check(candidate, args.timeoutMs));
  const output = {
    batchId: discovery.batchId,
    generatedAt: new Date().toISOString(),
    checked: results.length,
    reachable: results.filter((result) => result.reachable).length,
    failures: results.filter((result) => !result.reachable).length,
    results,
  };
  fs.writeFileSync(args.output, `${JSON.stringify(output, null, 2)}\n`);
  console.log(JSON.stringify({
    batchId: output.batchId,
    checked: output.checked,
    reachable: output.reachable,
    failures: output.failures,
    output: args.output,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
