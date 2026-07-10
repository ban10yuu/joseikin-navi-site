import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const DEFAULT_KEYWORDS = [
  '補助金',
  '助成金',
  '給付金',
  '一時金',
  '支援金',
  '奨励金',
  '貸付',
  '減免',
  '免除',
  '医療費助成',
  '移住',
  '住宅',
  '空き家',
  '空家',
  '創業',
  '起業',
  '事業者',
  '農業',
  '林業',
  '水産',
  '福祉',
  '子育て',
  '就学',
  '奨学金',
  '耐震',
  '省エネ',
  '予防接種',
  '不妊',
  '妊婦',
  '通学',
];

function parseArgs(argv) {
  const args = {
    cacheDir: '.cache/official-discovery',
    concurrency: 8,
    input: '',
    limitPerMunicipality: 800,
    output: '',
    timeoutMs: 30000,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--cache-dir') {
      args.cacheDir = argv[index + 1] || args.cacheDir;
      index += 1;
    } else if (arg === '--concurrency') {
      args.concurrency = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    } else if (arg === '--input') {
      args.input = argv[index + 1] || '';
      index += 1;
    } else if (arg === '--limit-per-municipality') {
      args.limitPerMunicipality = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    } else if (arg === '--output') {
      args.output = argv[index + 1] || '';
      index += 1;
    } else if (arg === '--timeout-ms') {
      args.timeoutMs = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    }
  }

  if (!args.input || !args.output) {
    console.error('Usage: node scripts/discover-official-candidates.mjs --input tasks/discovery/batch.json --output tasks/discovery/candidates.json');
    process.exit(2);
  }

  if (!Number.isFinite(args.concurrency) || args.concurrency < 1) args.concurrency = 8;
  if (!Number.isFinite(args.limitPerMunicipality) || args.limitPerMunicipality < 50) args.limitPerMunicipality = 800;
  if (!Number.isFinite(args.timeoutMs) || args.timeoutMs < 1000) args.timeoutMs = 30000;
  return args;
}

function normalizeUrl(url, baseUrl) {
  try {
    const parsed = new URL(url, baseUrl);
    parsed.hash = '';
    return parsed.toString();
  } catch {
    return '';
  }
}

function sameSite(url, baseUrl) {
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

async function fetchCached(url, args) {
  fs.mkdirSync(args.cacheDir, { recursive: true });
  const file = cachePath(args.cacheDir, url);
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), args.timeoutMs);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 joseikin-navi official discovery',
      },
    });
    const contentType = response.headers.get('content-type') || '';
    const text = contentType.includes('text') || contentType.includes('xml') || contentType.includes('html')
      ? await response.text()
      : '';
    const result = {
      contentType,
      fetchedAt: new Date().toISOString(),
      finalUrl: response.url,
      ok: response.status >= 200 && response.status < 400,
      status: response.status,
      text,
      url,
    };
    fs.writeFileSync(file, JSON.stringify(result));
    return result;
  } catch (error) {
    const result = {
      error: error instanceof Error ? error.message : String(error),
      fetchedAt: new Date().toISOString(),
      ok: false,
      status: 0,
      text: '',
      url,
    };
    fs.writeFileSync(file, JSON.stringify(result));
    return result;
  } finally {
    clearTimeout(timeout);
  }
}

function extractLinks(html, baseUrl) {
  const links = new Set();
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const url = normalizeUrl(match[1], baseUrl);
    if (url && sameSite(url, baseUrl)) links.add(url);
  }
  return [...links];
}

function extractSitemapLocs(xml, baseUrl) {
  const locs = new Set();
  for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)) {
    const url = normalizeUrl(match[1].trim(), baseUrl);
    if (url && sameSite(url, baseUrl)) locs.add(url);
  }
  return [...locs];
}

function titleOf(html) {
  const h1 = html.match(/<h1[^>]*>(.*?)<\/h1>/is)?.[1] || '';
  const title = html.match(/<title[^>]*>(.*?)<\/title>/is)?.[1] || '';
  return (h1 || title).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function updatedAtOf(html) {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
  return text.match(/(?:更新日|掲載日|公開日)[:： ]*([0-9]{4}年[0-9]{1,2}月[0-9]{1,2}日)/)?.[1]
    || text.match(/([令平成][和成][0-9元]{1,2}年[0-9]{1,2}月[0-9]{1,2}日)/)?.[1]
    || '';
}

function keywordHits(text, url) {
  const haystack = `${url}\n${text}`;
  return DEFAULT_KEYWORDS.filter((keyword) => haystack.includes(keyword));
}

async function discoverMunicipality(municipality, args) {
  const baseUrl = municipality.officialBaseUrl;
  const seeds = [
    baseUrl,
    normalizeUrl('/sitemap.xml', baseUrl),
    normalizeUrl('/sitemap_index.xml', baseUrl),
    normalizeUrl('/robots.txt', baseUrl),
  ].filter(Boolean);

  const queue = [...new Set(seeds)];
  const seen = new Set();
  const candidates = [];
  const evidence = [];

  while (queue.length > 0 && seen.size < args.limitPerMunicipality) {
    const url = queue.shift();
    if (!url || seen.has(url) || !sameSite(url, baseUrl)) continue;
    seen.add(url);

    const fetched = await fetchCached(url, args);
    evidence.push({ url, status: fetched.status, finalUrl: fetched.finalUrl || url, ok: fetched.ok });
    const text = fetched.text || '';
    const contentType = fetched.contentType || '';

    if (url.endsWith('.xml') || contentType.includes('xml')) {
      for (const loc of extractSitemapLocs(text, baseUrl)) {
        if (!seen.has(loc)) queue.push(loc);
      }
      continue;
    }

    if (contentType.includes('html') || text.includes('<html')) {
      for (const link of extractLinks(text, baseUrl)) {
        if (!seen.has(link)) queue.push(link);
      }
    }

    const plain = text.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]*>/g, ' ');
    const hits = keywordHits(plain, url);
    if (hits.length > 0 || /\.pdf(?:$|\?)/i.test(url)) {
      candidates.push({
        municipalityCode: municipality.code,
        municipalityName: municipality.name,
        sourceUrl: fetched.finalUrl || url,
        status: fetched.status,
        title: titleOf(text),
        updatedAt: updatedAtOf(text),
        keywordHits: hits,
        contentType,
        stage: 'discovery',
        verificationStatus: 'unverified',
      });
    }
  }

  return {
    ...municipality,
    discoveredUrlCount: seen.size,
    candidateCount: candidates.length,
    candidates,
    evidence,
  };
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
  const batch = JSON.parse(fs.readFileSync(args.input, 'utf8'));
  const municipalities = batch.municipalities || [];
  const results = await runLimited(municipalities, args.concurrency, (municipality) => discoverMunicipality(municipality, args));
  const output = {
    batchId: batch.batchId,
    prefecture: batch.prefecture,
    generatedAt: new Date().toISOString(),
    keywords: DEFAULT_KEYWORDS,
    municipalityCount: results.length,
    candidateCount: results.reduce((sum, result) => sum + result.candidateCount, 0),
    results,
  };
  fs.mkdirSync(path.dirname(args.output), { recursive: true });
  fs.writeFileSync(args.output, `${JSON.stringify(output, null, 2)}\n`);
  console.log(JSON.stringify({
    batchId: output.batchId,
    municipalityCount: output.municipalityCount,
    candidateCount: output.candidateCount,
    output: args.output,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
