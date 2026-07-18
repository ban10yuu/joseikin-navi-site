import fs from 'node:fs';

const batch = 'okinawa-official-coverage-008';

const orgs = [
  {
    org: '伊平屋村',
    base: 'https://www.vill.iheya.okinawa.jp',
    sitemaps: [],
    seeds: ['/', '/life/', '/life/1/', '/life/2/', '/life/3/', '/life/4/', '/life/5/', '/soshiki/', '/site/bosyuu/', '/site/sanngyou/'],
    keep: new RegExp(String.raw`/(?:life|soshiki|site|news|pickup|bosyuu|sanngyou|uploaded|download|files|documents)[^"'<> ]*(?:\.html|\.php|\.pdf|/)(?:$|\?)|sitemap(?:\.dir)?\.xml`, 'i'),
    crawl: new RegExp(String.raw`/(?:life|soshiki|site|news|pickup|bosyuu|sanngyou|uploaded|download)[^"'<> ]*(?:/|\.html|\.xml)|sitemap(?:\.dir)?\.xml`, 'i'),
    limit: 850,
  },
  {
    org: '伊是名村',
    base: 'https://vill.izena.okinawa.jp',
    sitemaps: ['https://vill.izena.okinawa.jp/sitemap.xml'],
    seeds: ['/', '/guide/', '/information/', '/lifeevent/ninshin/', '/lifeevent/kosodate/', '/lifeevent/admission/', '/lifeevent/marriage/', '/lifeevent/shushoku/', '/lifeevent/residence/', '/lifeevent/fukushi/', '/topics/', '/topics/cat:%e3%82%b3%e3%83%ad%e3%83%8a%e6%94%af%e6%8f%b4/'],
    keep: new RegExp(String.raw`/(?:guide|information|lifeevent|topics|soshiki|userfiles|autoupload|data|download|files|documents)[^"'<> ]*(?:\.html|\.php|\.pdf|/)(?:$|\?)|sitemap(?:\.dir)?\.xml`, 'i'),
    crawl: new RegExp(String.raw`/(?:guide|information|lifeevent|topics|soshiki|userfiles|autoupload|data|download)[^"'<> ]*(?:/|\.html|\.xml)|sitemap(?:\.dir)?\.xml`, 'i'),
    limit: 750,
  },
  {
    org: '久米島町',
    base: 'https://www.town.kumejima.okinawa.jp',
    sitemaps: ['https://www.town.kumejima.okinawa.jp/sitemap.xml'],
    seeds: ['/', '/categories/kurashi/', '/categories/iryo/', '/categories/kyoiku/', '/categories/sangyo/', '/categories/lifestage/ninshin/', '/categories/lifestage/kosodate/', '/categories/lifestage/byoki/', '/categories/lifestage/korei/', '/categories/kubun/boshu/more@recent-docs.html', '/docs/'],
    keep: new RegExp(String.raw`/(?:docs|categories|_files|file_contents|library|download|files|documents)[^"'<> ]*(?:\.html|\.php|\.pdf|/)(?:$|\?)|sitemap(?:\.dir)?\.xml`, 'i'),
    crawl: new RegExp(String.raw`/(?:docs|categories|_files|file_contents|library|download)[^"'<> ]*(?:/|\.html|\.xml)|sitemap(?:\.dir)?\.xml|more@recent-docs\.html`, 'i'),
    limit: 750,
  },
  {
    org: '八重瀬町',
    base: 'https://www.town.yaese.lg.jp',
    sitemaps: [],
    seeds: ['/', '/category/bunya/kurashi/', '/category/bunya/business/', '/category/bunya/gyosei/', '/docs/', '/docs/index.rss', '/docs/index.atom'],
    keep: new RegExp(String.raw`/(?:docs|category|file_contents|_files|kurashi|business|gyosei|download|files|documents)[^"'<> ]*(?:\.html|\.php|\.pdf|/)(?:$|\?)|sitemap(?:\.dir)?\.xml|index\.(?:rss|atom)`, 'i'),
    crawl: new RegExp(String.raw`/(?:docs|category|file_contents|kurashi|business|gyosei|download)[^"'<> ]*(?:/|\.html|\.xml)|sitemap(?:\.dir)?\.xml|index\.(?:rss|atom)`, 'i'),
    limit: 750,
  },
  {
    org: '多良間村',
    base: 'https://www.vill.tarama.okinawa.jp',
    sitemaps: [],
    seeds: ['/', '/kurashi/', '/kurashi/kosodate/', '/kurashi/lifestage/ninshin_syussan/', '/kurashi/lifestage/kosodate/', '/kurashi/lifestage/kyouiku/', '/kurashi/lifestage/syusyoku_taishoku/', '/kurashi/lifestage/hikkoshi_sumai/', '/kurashi/lifestage/koureisya_kaigo/', '/gyousei/', '/gyousei/kurasou/', '/news/'],
    keep: new RegExp(String.raw`/(?:kurashi|gyousei|kyouiku_gakkou|news|important|event|common/uploads|download|files|documents)[^"'<> ]*(?:\.html|\.php|\.pdf|/)(?:$|\?)|sitemap(?:\.dir)?\.xml`, 'i'),
    crawl: new RegExp(String.raw`/(?:kurashi|gyousei|kyouiku_gakkou|news|important|event|common/uploads|download)[^"'<> ]*(?:/|\.html|\.xml)|sitemap(?:\.dir)?\.xml`, 'i'),
    limit: 750,
  },
];

const strong = /(補助金|助成金|給付金|支援金|奨学金|手当|貸付|無償化|医療費助成|就学援助|減免|補助|助成|給付|支援制度|交付金|奨励金|融資|優遇制度|無料化|助成制度|補助制度|助成事業|支援事業|給付制度|給付事業)/;
const amount = /(上限|最大|限度|月額|年額|円|万円|補助率|支給額|助成額|補助額|自己負担|無料|全額|半額|免除|減免|定額)/;
const target = /(対象|要件|市内|住民|世帯|児童|妊婦|高齢者|障害|障がい|事業者|所有者|保護者|申請者|所得|市民|若者|中小企業|移住者|農業者|漁業者)/;
const period = /(申請|受付|募集|締切|期限|提出|交付|請求|公開日|更新日|令和|20\d{2}年)/;
const bad = /(議会|入札|発注|プロポーザル|職員採用|広報|統計|計画|報告|実績|審議|選挙|監査|個人情報|会議|パブリックコメント|予算|決算|求人|公告|工事|委託|指定管理|アンケート|審査結果|採択事業者|アクセス|施設予約|市長の日程|ごみ分別|イベント|講座|セミナー)/;

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
  const h1Raw = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const titleRaw = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  const title = stripHtml(h1Raw || '') || stripHtml(titleRaw || '') || fallback;
  return title.replace(/\s*[|｜／/].*$/, '').trim();
}

async function fetchPage(url, timeoutMs = 7000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 official-coverage-check' },
    });
    const html = await res.text();
    return { status: res.status, url: res.url, html, text: stripHtml(html), contentType: res.headers.get('content-type') || '' };
  } catch (error) {
    return { status: 0, url, html: '', text: String(error?.message || error), contentType: '' };
  } finally {
    clearTimeout(timer);
  }
}

function linksFrom(page, pageUrl, org) {
  const urls = [];
  if (/xml/i.test(page.contentType) || /\.xml(?:$|\?)/i.test(pageUrl)) {
    for (const m of page.html.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)) {
      const loc = stripHtml(m[1]).replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
      const url = absolute(pageUrl, loc);
      if (url?.startsWith(org.base) && (/\.xml(?:$|\?)/i.test(url) || org.keep.test(url) || org.crawl.test(url))) urls.push(url);
    }
  }
  for (const m of page.html.matchAll(/href\s*=\s*["']([^"']+)["']/gi)) {
    const url = absolute(pageUrl, m[1]);
    if (url?.startsWith(org.base) && (org.keep.test(url) || org.crawl.test(url))) urls.push(url);
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

function scoreCandidate(title, text, url) {
  const hay = `${title} ${text.slice(0, 5000)} ${url}`;
  let score = 0;
  if (strong.test(hay)) score += 12;
  if (amount.test(hay)) score += 5;
  if (target.test(hay)) score += 4;
  if (period.test(hay)) score += 3;
  const strongHits = hay.match(new RegExp(strong.source, 'g'))?.length || 0;
  score += Math.min(strongHits, 8) * 2;
  if (/\/(?:soshiki|organization|kurashi|kenko|kosodate|sangyo|display\.php|main|contents|life|jigyosha|kenko_iryo_fukushi|docs|detail\.jsp|list_typeB\.jsp)\/?|20\d{2}|\/\d+\.html|cont=\d+|id=\d+/.test(url)) score += 2;
  if (bad.test(hay)) score -= 12;
  if (/一覧|カテゴリ|トップページ|サイトマップ|検索結果|予約|新着情報|組織一覧/.test(title)) score -= 8;
  return score;
}

const candidates = [];
for (const org of orgs) {
  console.error(`start ${org.org}`);
  const urls = new Set();
  const startUrls = [
    ...org.sitemaps,
    ...org.seeds.map((seed) => absolute(org.base, seed)),
  ].filter(Boolean);
  const queue = [...startUrls];
  const seen = new Set();
  while (queue.length && seen.size < 190) {
    const batchUrls = queue.splice(0, 14).filter((url) => !seen.has(url));
    batchUrls.forEach((url) => seen.add(url));
    const pages = await mapLimit(batchUrls, 7, (url) => fetchPage(url));
    for (const page of pages) {
      if (page.status !== 200) continue;
      for (const link of linksFrom(page, page.url, org)) {
        if (org.keep.test(link) && !/\.xml(?:$|\?)/i.test(link)) urls.add(link);
        if ((org.crawl.test(link) || /\.xml(?:$|\?)/i.test(link)) && !seen.has(link) && queue.length < org.limit) queue.push(link);
      }
    }
  }

  console.error(`score ${org.org}: urls=${urls.size} seen=${seen.size}`);
  const pages = await mapLimit([...urls].slice(0, org.limit), 10, async (url) => {
    const page = await fetchPage(url);
    if (page.status !== 200) return null;
    const title = titleOf(page.html, url);
    const score = scoreCandidate(title, page.text, page.url);
    if (score < 16) return null;
    if (/\/(?:category|kurashi|life|site|soshiki|organization|main)\/?$|\/search/.test(page.url) && !/(補助金|助成金|給付金|支援|手当|医療|子育て|福祉|移住|空き家|住宅|教育|就学|奨学|減免)/.test(title)) return null;
    return { org: org.org, title, url: page.url, status: page.status, score, evidence: page.text.slice(0, 360) };
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

const strongShortlist = finalCandidates.filter((c) => /(補助金|助成金|給付金|支援金|手当|医療費助成|就学援助|奨学金|貸付|減免|無償化)/.test(`${c.title} ${c.url}`));
fs.writeFileSync(`tasks/discovery/${batch}-title-strong-shortlist.tsv`, [
  'score\torganization\ttitle\turl\tevidence',
  ...strongShortlist.map((c) => [c.score, c.org, c.title, c.url, c.evidence.replace(/\t/g, ' ').trim()].join('\t')),
].join('\n') + '\n');

console.log(JSON.stringify({ candidateCount: finalCandidates.length, byOrg, titleStrong: strongShortlist.length }, null, 2));
