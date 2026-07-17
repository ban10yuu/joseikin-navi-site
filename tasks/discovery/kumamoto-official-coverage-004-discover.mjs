import fs from 'node:fs';

const batch = 'kumamoto-official-coverage-004';
const keywords = ['補助金', '助成金', '給付金', '支援金', '手当', '医療費助成', '就学援助', '奨学金', '貸付', '減免', '移住', '空き家', '耐震'];
const orgs = [
  {
    org: '玉東町',
    base: 'https://www.town.gyokuto.kumamoto.jp',
    sitemaps: [],
    searches: keywords.map((q) => `https://www.town.gyokuto.kumamoto.jp/dynamic/search/pub/Default.aspx?c_id=2&q=${encodeURIComponent(q)}`),
    seeds: ['/', '/default.html', '/list00101.html', '/list00102.html', '/list00103.html', '/list00104.html', '/list00105.html', '/list00106.html', '/list00107.html', '/list00108.html'],
    keep: /\/(?:kiji\d+\/index\.html|list\d+\.html|default\.html)/i,
    crawl: /\/(?:list\d+\.html|default\.html)/i,
  },
  {
    org: '南関町',
    base: 'https://www.town.nankan.lg.jp',
    sitemaps: [],
    searches: keywords.map((q) => `https://www.town.nankan.lg.jp/search.php?keyword=${encodeURIComponent(q)}`),
    seeds: ['/', '/tyosei/hojokinjoseikin/', '/kurashi/', '/kenko/', '/kosodate/', '/sangyo/', '/tyosei/shinseisho/', '/mokutekibetsu/kurashinotetsuduki.html', '/mokutekibetsu/1397.html'],
    keep: /\/(?:kurashi|kenko|kosodate|sangyo|tyosei|bosai|mokutekibetsu|bunkakanko|furusatonouzei)\/.*(?:\.html|\/$)|\/(?:kurashi|kenko|kosodate|sangyo|tyosei|bosai|mokutekibetsu)\//i,
    crawl: /\/(?:kurashi|kenko|kosodate|sangyo|tyosei|bosai|mokutekibetsu|bunkakanko|furusatonouzei)\//i,
  },
  {
    org: '長洲町',
    base: 'https://www.town.nagasu.lg.jp',
    sitemaps: [],
    searches: keywords.map((q) => `https://www.town.nagasu.lg.jp/search?keyword=${encodeURIComponent(q)}`),
    seeds: ['/', '/kurashi/', '/kosodate/', '/soshiki/', '/soshiki/machizukuri/teiju/', '/soshiki/machizukuri/shoko/', '/soshiki/kosodate/', '/soshiki/kenkouzukuri/', '/soshiki/nourin/', '/bousai/'],
    keep: /\/(?:kurashi|kosodate|soshiki|bousai|gyosei|news)\/.*(?:kiji\d+|[0-9]{6,}|\/$)|\/(?:kurashi|kosodate|soshiki|bousai|gyosei|news)\//i,
    crawl: /\/(?:kurashi|kosodate|soshiki|bousai|gyosei|news)\//i,
  },
  {
    org: '和水町',
    base: 'https://www.town.nagomi.lg.jp',
    sitemaps: [],
    searches: keywords.map((q) => `https://www.town.nagomi.lg.jp/search?keyword=${encodeURIComponent(q)}`),
    seeds: ['/', '/jinseisagasu/', '/jinseisagasu/dekigoto/kosodate/', '/jinseisagasu/dekigoto/syuugaku/', '/kurashi/kenkoufukushi/', '/iju/teijyuu/ouen/', '/nourin/', '/nourin/shoukougyou/', '/soshiki/', '/news/'],
    keep: /\/(?:jinseisagasu|kurashi|iju|nourin|soshiki|kyoikusportsbunka|bousaikoutsu|chousei|news|kanko)\/.*(?:[0-9]{5,}|\/$)|\/(?:jinseisagasu|kurashi|iju|nourin|soshiki|news)\//i,
    crawl: /\/(?:jinseisagasu|kurashi|iju|nourin|soshiki|kyoikusportsbunka|bousaikoutsu|chousei|news|kanko)\//i,
  },
  {
    org: '大津町',
    base: 'https://www.town.ozu.kumamoto.jp',
    sitemaps: [],
    searches: keywords.map((q) => `https://www.town.ozu.kumamoto.jp/search.html?keyword=${encodeURIComponent(q)}`),
    seeds: ['/', '/life/', '/life/1/', '/life/2/', '/life/3/', '/life/4/', '/life/5/', '/life/6/', '/site/kosodate/', '/site/bousai/', '/soshiki/'],
    keep: /\/(?:life|site|soshiki|page)\/.*(?:\.html|\/$)|\/page\/\d+\.html/i,
    crawl: /\/(?:life|site|soshiki)\//i,
  },
];

const strong = /(補助金|助成金|給付金|支援金|奨学金|手当|貸付|無償化|医療費助成|就学援助|減免|補助|助成|給付|支援制度|交付金|奨励金|融資|優遇制度|無料化|助成制度|補助制度|助成事業|支援事業|給付制度)/;
const amount = /(上限|最大|限度|月額|年額|円|万円|補助率|支給額|助成額|補助額|自己負担|無料|全額|半額|免除|減免|定額)/;
const target = /(対象|要件|市内|町内|住民|世帯|児童|妊婦|高齢者|障害|障がい|事業者|所有者|保護者|申請者|所得|市民|町民|若者|中小企業|移住者|農業者)/;
const period = /(申請|受付|募集|締切|期限|提出|交付|請求|公開日|更新日|令和|20\d{2}年)/;
const bad = /(議会|入札|発注|プロポーザル|職員採用|広報|統計|計画|報告|実績|審議|選挙|監査|個人情報|会議|パブリックコメント|予算|決算|求人|公告|工事|委託|指定管理|アンケート|審査結果|採択事業者|アクセス|施設予約|市長の日程|町長の日程|ごみ分別)/;

function absolute(base, href) {
  try {
    return new URL(String(href).replaceAll('&amp;', '&'), base).href.replace(/#.*$/, '').trim();
  } catch {
    return null;
  }
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#[0-9]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleOf(html, fallback) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const title = h1 || html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || fallback;
  return stripHtml(title).replace(/\s*[|｜／/].*$/, '').trim();
}

async function fetchPage(url, timeoutMs = 4500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 official-coverage-check' },
    });
    const html = await res.text();
    return { status: res.status, url: res.url, html, text: stripHtml(html) };
  } catch (error) {
    return { status: 0, url, html: '', text: String(error?.message || error) };
  } finally {
    clearTimeout(timer);
  }
}

function linksFrom(html, pageUrl, org) {
  const urls = [];
  for (const m of html.matchAll(/href\s*=\s*["']([^"']+)["']/gi)) {
    const url = absolute(pageUrl, m[1]);
    if (url?.startsWith(org.base) && org.keep.test(url)) urls.push(url);
  }
  return urls;
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const current = index++;
      results[current] = await mapper(items[current], current);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

async function sitemapUrls(org, sitemap, seen = new Set()) {
  if (seen.has(sitemap)) return [];
  seen.add(sitemap);
  const page = await fetchPage(sitemap, 10000);
  if (page.status !== 200) return [];
  const locs = [...page.html.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1].replaceAll('&amp;', '&').trim());
  const nested = locs.filter((url) => /sitemap/i.test(url) && !org.keep.test(url));
  const direct = locs.filter((url) => url.startsWith(org.base) && org.keep.test(url));
  for (const child of nested.slice(0, 8)) {
    direct.push(...await sitemapUrls(org, child, seen));
  }
  return direct;
}

function scoreCandidate(title, text, url) {
  const hay = `${title} ${text.slice(0, 3500)} ${url}`;
  let score = 0;
  if (strong.test(hay)) score += 12;
  if (amount.test(hay)) score += 5;
  if (target.test(hay)) score += 4;
  if (period.test(hay)) score += 3;
  const strongHits = hay.match(new RegExp(strong.source, 'g'))?.length || 0;
  score += Math.min(strongHits, 8) * 2;
  if (/kiji|town_news|20\d{2}|\/\d+\.html/.test(url)) score += 2;
  if (bad.test(hay)) score -= 12;
  if (/一覧|カテゴリ|トップページ|サイトマップ|検索結果|予約|新着情報/.test(title)) score -= 8;
  return score;
}

const candidates = [];
for (const org of orgs) {
  console.error(`start ${org.org}`);
  const urls = new Set();
  for (const sitemap of org.sitemaps) {
    for (const url of await sitemapUrls(org, sitemap)) urls.add(url);
  }
  const startUrls = [...org.seeds.map((seed) => absolute(org.base, seed)), ...org.searches].filter(Boolean);
  const queue = [...startUrls];
  const seen = new Set();
  while (queue.length && seen.size < 80) {
    const batchUrls = queue.splice(0, 12).filter((url) => !seen.has(url));
    batchUrls.forEach((url) => seen.add(url));
    const pages = await mapLimit(batchUrls, 6, (url) => fetchPage(url));
    for (const page of pages) {
      if (page.status !== 200) continue;
      for (const link of linksFrom(page.html, page.url, org)) {
        urls.add(link);
        if (org.crawl.test(link) && !seen.has(link) && queue.length < 260) queue.push(link);
      }
    }
  }

  console.error(`score ${org.org}: urls=${urls.size} seen=${seen.size}`);
  const pages = await mapLimit([...urls].slice(0, 300), 10, async (url) => {
    const page = await fetchPage(url);
    if (page.status !== 200) return null;
    const title = titleOf(page.html, url);
    const score = scoreCandidate(title, page.text, page.url);
    if (score < 16) return null;
    if (/\/list\d+\.html/.test(page.url) && !/補助金・助成金$|補助金$/.test(title)) return null;
    return { org: org.org, title, url: page.url, status: page.status, score, evidence: page.text.slice(0, 320) };
  });
  for (const page of pages.filter(Boolean)) candidates.push(page);
  console.error(`done ${org.org}: candidates=${pages.filter(Boolean).length}`);
}

const uniq = new Map();
for (const candidate of candidates.sort((a, b) => b.score - a.score)) {
  const key = `${candidate.org}\t${candidate.url}`;
  if (!uniq.has(key)) uniq.set(key, candidate);
}
const finalCandidates = [...uniq.values()].sort((a, b) => a.org.localeCompare(b.org, 'ja') || b.score - a.score);
const byOrg = finalCandidates.reduce((acc, c) => {
  acc[c.org] = (acc[c.org] || 0) + 1;
  return acc;
}, {});

fs.writeFileSync(`tasks/discovery/${batch}-candidates.json`, JSON.stringify({
  generatedAt: new Date().toISOString(),
  batch,
  candidateCount: finalCandidates.length,
  byOrg,
  candidates: finalCandidates,
}, null, 2));

fs.writeFileSync(`tasks/discovery/${batch}-candidates.tsv`, [
  'score\torganization\ttitle\turl\tevidence',
  ...finalCandidates.map((c) => [c.score, c.org, c.title, c.url, c.evidence.replace(/\t/g, ' ').trim()].join('\t')),
].join('\n') + '\n');

console.log(JSON.stringify({ candidateCount: finalCandidates.length, byOrg }, null, 2));
