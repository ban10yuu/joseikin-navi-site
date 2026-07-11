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

const STRONG_KEYWORDS = [
  '補助金',
  '助成金',
  '給付金',
  '一時金',
  '支援金',
  '奨励金',
  '手当',
  '医療費助成',
  '奨学金',
  '貸付',
];

const AMOUNT_PATTERNS = [
  /[0-9０-９,，]+(?:万)?円/,
  /上限/,
  /月額/,
  /年額/,
  /補助率/,
  /[0-9０-９]+\/[0-9０-９]+/,
];

const TARGET_PATTERNS = [
  /対象(?:者|世帯|経費|事業|住宅|児童|となる方)?/,
  /要件/,
  /世帯/,
  /事業者/,
  /町民/,
  /村民/,
  /保護者/,
];

const DEADLINE_PATTERNS = [
  /申請/,
  /募集/,
  /受付/,
  /締切/,
  /期限/,
  /令和[0-9０-９元]+年度/,
];

const ASSET_EXTENSIONS = /\.(?:jpe?g|png|gif|webp|svg|ico|css|js|mjs|map|mp4|mov|mp3|wav|zip|lzh|exe)(?:$|\?)/i;
const DOCUMENT_EXTENSIONS = /\.(?:pdf|doc|docx|xls|xlsx)(?:$|\?)/i;

function parseArgs(argv) {
  const args = {
    cacheDir: '.cache/official-discovery',
    concurrency: 8,
    deepLimitPerMunicipality: 300,
    initialLimitPerMunicipality: 100,
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
    } else if (arg === '--initial-limit-per-municipality') {
      args.initialLimitPerMunicipality = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    } else if (arg === '--deep-limit-per-municipality') {
      args.deepLimitPerMunicipality = Number.parseInt(argv[index + 1] || '', 10);
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
  if (!Number.isFinite(args.initialLimitPerMunicipality) || args.initialLimitPerMunicipality < 20) args.initialLimitPerMunicipality = 100;
  if (!Number.isFinite(args.deepLimitPerMunicipality) || args.deepLimitPerMunicipality < args.initialLimitPerMunicipality) {
    args.deepLimitPerMunicipality = Math.min(args.limitPerMunicipality, 300);
  }
  args.limitPerMunicipality = Math.min(args.limitPerMunicipality, args.deepLimitPerMunicipality);
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

function shouldCrawlUrl(url) {
  if (ASSET_EXTENSIONS.test(url)) return false;
  return true;
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
  for (const match of html.matchAll(/\bhref=["']([^"']+)["']/gi)) {
    const url = normalizeUrl(match[1], baseUrl);
    if (url && sameSite(url, baseUrl) && shouldCrawlUrl(url)) links.add(url);
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

function h1Of(html) {
  return (html.match(/<h1[^>]*>(.*?)<\/h1>/is)?.[1] || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function relevantBodyOf(html) {
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
  const main = cleaned.match(/<(main|article)[^>]*>([\s\S]*?)<\/\1>/i)?.[2] || cleaned;
  return main.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
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

function scoreCandidate({ url, title, h1, body, hits }) {
  const titleAndH1 = `${title}\n${h1}`;
  const primaryText = `${titleAndH1}\n${body}\n${url}`;
  let score = 0;
  for (const keyword of STRONG_KEYWORDS) {
    if (titleAndH1.includes(keyword)) score += 5;
    if (body.includes(keyword)) score += 3;
    if (url.includes(keyword)) score += 1;
  }
  if (AMOUNT_PATTERNS.some((pattern) => pattern.test(primaryText))) score += 3;
  if (TARGET_PATTERNS.some((pattern) => pattern.test(primaryText))) score += 2;
  if (DEADLINE_PATTERNS.some((pattern) => pattern.test(primaryText))) score += 2;
  if (
    AMOUNT_PATTERNS.some((pattern) => pattern.test(primaryText))
    && TARGET_PATTERNS.some((pattern) => pattern.test(primaryText))
    && DEADLINE_PATTERNS.some((pattern) => pattern.test(primaryText))
  ) {
    score += 4;
  }
  if (/\/detail\.html\?/i.test(url)) score += 2;
  if (DOCUMENT_EXTENSIONS.test(url)) score += 2;
  if ((hits || []).length >= 3) score += 1;
  return score;
}

function hasStrongTitleSignal(title, h1) {
  const titleAndH1 = `${title}\n${h1}`;
  return STRONG_KEYWORDS.some((keyword) => titleAndH1.includes(keyword));
}

function isIndexLikeUrl(url) {
  return /\/(?:category|purpose)\/|\?(?:category|purpose)=|\/sitemap\/?$/i.test(url);
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

  async function crawlUntil(limit) {
    while (queue.length > 0 && seen.size < limit) {
    const url = queue.shift();
    if (!url || seen.has(url) || !sameSite(url, baseUrl) || !shouldCrawlUrl(url)) continue;
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

    const title = titleOf(text);
    const h1 = h1Of(text);
    const body = relevantBodyOf(text);
    const hits = keywordHits(`${title}\n${h1}\n${body}`, url);
    if (hits.length > 0 || DOCUMENT_EXTENSIONS.test(url)) {
      const score = scoreCandidate({ url, title, h1, body, hits });
      const titleSignal = hasStrongTitleSignal(title, h1);
      const documentSignal = DOCUMENT_EXTENSIONS.test(url);
      const strong = score >= 4 && !isIndexLikeUrl(url) && (titleSignal || documentSignal);
      candidates.push({
        municipalityCode: municipality.code,
        municipalityName: municipality.name,
        sourceUrl: fetched.finalUrl || url,
        status: fetched.status,
        title,
        h1,
        updatedAt: updatedAtOf(text),
        keywordHits: hits,
        candidateScore: score,
        candidatePriority: strong ? 'strong' : 'low',
        contentType,
        stage: 'discovery',
        verificationStatus: 'unverified',
      });
    }
  }
  }

  await crawlUntil(Math.min(args.initialLimitPerMunicipality, args.limitPerMunicipality));
  const strongAfterInitial = candidates.filter((candidate) => candidate.candidatePriority === 'strong').length;
  if (strongAfterInitial < 10 && seen.size < args.limitPerMunicipality && queue.length > 0) {
    await crawlUntil(args.limitPerMunicipality);
  }

  return {
    ...municipality,
    discoveredUrlCount: seen.size,
    candidateCount: candidates.length,
    strongCandidateCount: candidates.filter((candidate) => candidate.candidatePriority === 'strong').length,
    lowPriorityCandidateCount: candidates.filter((candidate) => candidate.candidatePriority === 'low').length,
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
