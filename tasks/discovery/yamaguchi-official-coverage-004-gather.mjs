import fs from 'node:fs';

const outBase = 'tasks/discovery/yamaguchi-official-coverage-004';

const municipalities = [
  {
    code: '35341',
    name: '上関町',
    host: 'www.town.kaminoseki.lg.jp',
    base: 'https://www.town.kaminoseki.lg.jp',
    sitemaps: ['https://www.town.kaminoseki.lg.jp/sitemap.xml', 'https://www.town.kaminoseki.lg.jp/sitemap01.xml'],
    seeds: [
      'https://www.town.kaminoseki.lg.jp/life/',
      'https://www.town.kaminoseki.lg.jp/soshiki/',
      'https://www.town.kaminoseki.lg.jp/kurashi/',
      'https://www.town.kaminoseki.lg.jp/kosodate/',
      'https://www.town.kaminoseki.lg.jp/sangyo/',
    ],
    maxUrls: 2200,
  },
  {
    code: '35343',
    name: '田布施町',
    host: 'www.town.tabuse.lg.jp',
    base: 'https://www.town.tabuse.lg.jp',
    sitemaps: ['https://www.town.tabuse.lg.jp/sitemap.xml', 'https://www.town.tabuse.lg.jp/sitemap01.xml'],
    seeds: [
      'https://www.town.tabuse.lg.jp/life/',
      'https://www.town.tabuse.lg.jp/soshiki/',
      'https://www.town.tabuse.lg.jp/kurashi/',
      'https://www.town.tabuse.lg.jp/kosodate/',
      'https://www.town.tabuse.lg.jp/sangyo/',
    ],
    maxUrls: 2400,
  },
  {
    code: '35344',
    name: '平生町',
    host: 'www.town.hirao.lg.jp',
    base: 'https://www.town.hirao.lg.jp',
    sitemaps: ['https://www.town.hirao.lg.jp/sitemap.xml', 'https://www.town.hirao.lg.jp/sitemap01.xml'],
    seeds: [
      'https://www.town.hirao.lg.jp/life/',
      'https://www.town.hirao.lg.jp/soshiki/',
      'https://www.town.hirao.lg.jp/kurashi/',
      'https://www.town.hirao.lg.jp/kosodate/',
      'https://www.town.hirao.lg.jp/sangyo/',
    ],
    maxUrls: 2200,
  },
  {
    code: '35502',
    name: '阿武町',
    host: 'www.town.abu.lg.jp',
    base: 'https://www.town.abu.lg.jp',
    sitemaps: ['https://www.town.abu.lg.jp/sitemap.xml', 'https://www.town.abu.lg.jp/sitemap01.xml'],
    seeds: [
      'https://www.town.abu.lg.jp/life/',
      'https://www.town.abu.lg.jp/soshiki/',
      'https://www.town.abu.lg.jp/kurashi/',
      'https://www.town.abu.lg.jp/kosodate/',
      'https://www.town.abu.lg.jp/sangyo/',
    ],
    maxUrls: 2200,
  },
];

const strongRe = /補助金|助成金|給付金|支援金|交付金|奨励金|手当|扶助|貸付|減免|無償化|支援制度|補助|助成|給付/;
const moneyRe = /[0-9０-９,，.]+\s*(万円|円)|上限|限度額|補助率|助成額|月額|年額|無償|無料|自己負担|全額/;
const targetRe = /対象|要件|条件|世帯|市民|事業者|申請者|児童|子ども|高齢|障害|農業|中小|創業|移住|住宅/;
const applyRe = /申請|募集|受付|期限|締切|交付|支給|請求|必要書類|申込/;
const excludeRe = /職員募集|採用試験|入札|契約|結果|議事録|統計|予算|決算|広報紙|市長|職員手当|職員の給与|例規集トップ|ランキング|アクセス|イベント|観光|寄附|ふるさと納税/;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;|&#160;/g, ' ');
}

function stripHtml(html) {
  return decodeEntities(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleOf(html) {
  return stripHtml(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '').replace(/\s*\|.*$/, '').trim();
}

function normalizeUrl(raw, base, host) {
  if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) return null;
  try {
    const url = new URL(decodeEntities(raw), base);
    if (url.hostname !== host) return null;
    url.hash = '';
    if (/\.(jpg|jpeg|png|gif|svg|css|js|ico|zip|docx?|xlsx?|pptx?)$/i.test(url.pathname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function extractLinks(html, pageUrl, host) {
  const links = [];
  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const url = normalizeUrl(match[1], pageUrl, host);
    if (!url) continue;
    const anchor = stripHtml(match[2]).slice(0, 120);
    links.push({ url, anchor });
  }
  return links;
}

async function fetchText(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 official-coverage-check' },
    });
    const contentType = response.headers.get('content-type') || '';
    const text = contentType.includes('pdf') ? '' : await response.text();
    return { ok: response.ok, status: response.status, url: response.url, html: text, text: stripHtml(text) };
  } catch (error) {
    return { ok: false, status: 0, url, html: '', text: '', error: String(error?.message || error) };
  } finally {
    clearTimeout(timeout);
  }
}

async function mapLimit(items, limit, fn) {
  const results = [];
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next;
      next += 1;
      results[index] = await fn(items[index], index);
      await sleep(20);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

async function sitemapUrls(sitemaps, host) {
  const urls = new Set();
  for (const sitemap of sitemaps || []) {
    const page = await fetchText(sitemap);
    for (const loc of page.html.matchAll(/<loc>([^<]+)<\/loc>/gi)) {
      const url = normalizeUrl(loc[1], sitemap, host);
      if (url) urls.add(url);
    }
  }
  return [...urls];
}

async function crawlSeeds(muni) {
  const seen = new Set();
  const queue = muni.seeds.map((url) => ({ url, depth: 0, anchor: '' }));
  const leads = new Map();
  while (queue.length > 0 && seen.size < muni.maxUrls) {
    const batch = queue.splice(0, 8).filter(({ url }) => !seen.has(url));
    if (batch.length === 0) continue;
    const pages = await mapLimit(batch, 4, ({ url }) => fetchText(url));
    for (let i = 0; i < batch.length; i += 1) {
      const { url, depth, anchor } = batch[i];
      const page = pages[i];
      seen.add(url);
      const title = titleOf(page.html);
      if (strongRe.test(`${title} ${anchor} ${url}`)) {
        leads.set(url, { url: page.url || url, anchor, seedTitle: title });
      }
      if (depth >= 2 || !page.html) continue;
      for (const link of extractLinks(page.html, page.url || url, muni.host)) {
        if (seen.has(link.url)) continue;
        const signal = `${link.anchor} ${link.url}`;
        if (depth === 0 || strongRe.test(signal) || /category|kurashi|kosodate|fukushi|business|jigyosha|life|soshiki|sumai|industry|agriculture|hoken|shogai|school|hoikuen/.test(link.url)) {
          queue.push({ url: link.url, depth: depth + 1, anchor: link.anchor });
        }
        if (strongRe.test(signal)) {
          leads.set(link.url, { url: link.url, anchor: link.anchor, seedTitle: '' });
        }
      }
    }
  }
  return [...leads.values()];
}

function scoreCandidate({ title, text, url, anchor }) {
  const haystack = `${title} ${anchor || ''} ${url} ${text.slice(0, 3000)}`;
  if (excludeRe.test(haystack)) return -50;
  let score = 0;
  if (strongRe.test(title)) score += 20;
  if (strongRe.test(anchor || '')) score += 10;
  if (strongRe.test(haystack)) score += 15;
  if (moneyRe.test(haystack)) score += 10;
  if (targetRe.test(haystack)) score += 8;
  if (applyRe.test(haystack)) score += 8;
  if (/\.html|article\?articleId=/.test(url)) score += 3;
  if (/index\.html$|\/life\/\d+\/?$|\/soshiki\/?$|\/category\//.test(url)) score -= 8;
  if (/令和[7８8]|2026|2025|申請受付中|募集/.test(haystack)) score += 4;
  return score;
}

async function gatherMunicipality(muni) {
  const fromSitemap = (await sitemapUrls(muni.sitemaps, muni.host)).map((url) => ({ url, anchor: '' }));
  const filteredSitemap = fromSitemap.filter(({ url }) => !/\/(image|css|js|_res)\//.test(url)).slice(0, muni.maxUrls);
  const fromCrawl = await crawlSeeds(muni);
  const leads = new Map();
  for (const lead of [...filteredSitemap, ...fromCrawl]) {
    leads.set(lead.url, lead);
  }
  const leadList = [...leads.values()].slice(0, muni.maxUrls);
  const pages = await mapLimit(leadList, 8, async (lead) => {
    const page = await fetchText(lead.url);
    const title = titleOf(page.html);
    const score = scoreCandidate({ title, text: page.text, url: page.url || lead.url, anchor: lead.anchor });
    return {
      code: muni.code,
      municipality: muni.name,
      url: page.url || lead.url,
      status: page.status,
      title,
      anchor: lead.anchor,
      score,
      snippet: page.text.slice(0, 360),
    };
  });
  return pages
    .filter((page) => page.status >= 200 && page.status < 400 && page.score >= 25)
    .sort((a, b) => b.score - a.score || a.url.localeCompare(b.url));
}

const results = [];
for (const muni of municipalities) {
  const candidates = await gatherMunicipality(muni);
  console.log(JSON.stringify({ municipality: muni.name, candidates: candidates.length, top: candidates.slice(0, 5).map((c) => [c.score, c.title, c.url]) }));
  results.push({ ...muni, candidates });
}

const all = results.flatMap((result) => result.candidates);
fs.writeFileSync(`${outBase}-rescored-candidates.json`, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
fs.writeFileSync(`${outBase}-rescored-candidates.tsv`, [
  'code\tmunicipality\tscore\ttitle\turl\tsnippet',
  ...all.map((entry) => [entry.code, entry.municipality, entry.score, entry.title, entry.url, entry.snippet.replace(/\t/g, ' ')].join('\t')),
].join('\n') + '\n');
console.log(JSON.stringify({
  total: all.length,
  counts: results.reduce((acc, result) => ({ ...acc, [result.name]: result.candidates.length }), {}),
}, null, 2));
