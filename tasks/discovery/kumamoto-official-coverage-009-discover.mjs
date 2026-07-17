import fs from 'node:fs';

const batch = 'kumamoto-official-coverage-009';
const keywords = ['補助金', '助成金', '給付金', '支援金', '手当', '医療費助成', '就学援助', '奨学金', '貸付', '減免', '移住', '空き家', '耐震', '無償化'];
const cmsKeep = /\/(?:kiji\d+\/index\.html|list\d+\.html|classset\d+\.html|default\.html|index\.html|bousai\/default\.html|kankou\/default\.html|ijuu\/default\.html|teijuu\/default\.html|furusato\/default\.html|dynamic\/hpkiji\/pub\/shinsei\.aspx\?[^"'<> ]+)/i;
const cmsCrawl = /\/(?:list\d+\.html|classset\d+\.html|default\.html|index\.html|bousai\/default\.html|kankou\/default\.html|ijuu\/default\.html|teijuu\/default\.html|furusato\/default\.html|dynamic\/hpkiji\/pub\/shinsei\.aspx\?[^"'<> ]+)/i;

const orgs = [
  {
    org: '五木村',
    base: 'https://www.vill.itsuki.lg.jp',
    searches: keywords.map((q) => `https://www.vill.itsuki.lg.jp/dynamic/search/pub/Default.aspx?c_id=3&q=${encodeURIComponent(q)}`),
    seeds: ['/', '/default.html', '/index.html', '/teijuu/default.html', '/kankou/default.html', '/bousai/default.html', '/classset002.html'],
    keep: cmsKeep,
    crawl: cmsCrawl,
  },
  {
    org: '山江村',
    base: 'https://www.vill.yamae.lg.jp',
    searches: keywords.map((q) => `https://www.vill.yamae.lg.jp/dynamic/search/pub/Default.aspx?c_id=3&q=${encodeURIComponent(q)}`),
    seeds: ['/', '/default.html', '/index.html', '/ijuu/default.html', '/furusato/default.html', '/kankou/default.html', '/bousai/default.html', '/classset002.html'],
    keep: cmsKeep,
    crawl: cmsCrawl,
  },
  {
    org: '球磨村',
    base: 'https://www.kumamura.com',
    searches: keywords.map((q) => `https://www.kumamura.com/dynamic/search/pub/Default.aspx?c_id=3&q=${encodeURIComponent(q)}`),
    seeds: ['/', '/default.html', '/index.html', '/list00001.html', '/list00002.html', '/list00003.html', '/list00004.html', '/list00005.html', '/list00006.html', '/list00007.html', '/list00008.html', '/list00009.html'],
    keep: cmsKeep,
    crawl: cmsCrawl,
  },
  {
    org: 'あさぎり町',
    base: 'https://www.town.asagiri.lg.jp',
    searches: keywords.map((q) => `https://www.town.asagiri.lg.jp/dynamic/search/pub/Default.aspx?c_id=3&q=${encodeURIComponent(q)}`),
    seeds: ['/', '/default.html', '/index.html', '/classset002.html', '/list00101.html', '/list00102.html', '/list00103.html', '/list00104.html', '/list00105.html', '/list00106.html', '/list00107.html', '/list00108.html', '/list00109.html', '/list00110.html', '/list00111.html', '/list00112.html', '/list00113.html', '/list00114.html', '/list00115.html'],
    keep: cmsKeep,
    crawl: cmsCrawl,
  },
  {
    org: '苓北町',
    base: 'https://reihoku-kumamoto.jp',
    searches: keywords.map((q) => `https://reihoku-kumamoto.jp/dynamic/search/pub/Default.aspx?c_id=3&q=${encodeURIComponent(q)}`),
    seeds: ['/', '/default.html', '/index.html', '/bousai/default.html', '/list00001.html', '/list00002.html', '/list00003.html', '/list00004.html', '/list00005.html', '/list00006.html', '/list00007.html', '/list00008.html', '/list00009.html'],
    keep: cmsKeep,
    crawl: cmsCrawl,
  },
];

const strong = /(補助金|助成金|給付金|支援金|奨学金|手当|貸付|無償化|医療費助成|就学援助|減免|補助|助成|給付|支援制度|交付金|奨励金|融資|優遇制度|無料化|助成制度|補助制度|助成事業|支援事業|給付制度)/;
const amount = /(上限|最大|限度|月額|年額|円|万円|補助率|支給額|助成額|補助額|自己負担|無料|全額|半額|免除|減免|定額)/;
const target = /(対象|要件|町内|村内|住民|世帯|児童|妊婦|高齢者|障害|障がい|事業者|所有者|保護者|申請者|所得|町民|村民|若者|中小企業|移住者|農業者)/;
const period = /(申請|受付|募集|締切|期限|提出|交付|請求|公開日|更新日|令和|20\d{2}年)/;
const bad = /(議会|入札|発注|プロポーザル|職員採用|広報|統計|計画|報告|実績|審議|選挙|監査|個人情報|会議|パブリックコメント|予算|決算|求人|公告|工事|委託|指定管理|アンケート|審査結果|採択事業者|アクセス|施設予約|町長の日程|村長の日程|ごみ分別)/;

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
  const titleTag = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const h1Text = h1 && !/<img/i.test(h1) ? h1 : '';
  return stripHtml(h1Text || titleTag || fallback).replace(/\s*[|｜／/].*$/, '').trim();
}

async function fetchPage(url, timeoutMs = 6500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 official-coverage-check' },
    });
    const buf = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get('content-type') || '';
    const charset = contentType.match(/charset=([^;]+)/i)?.[1]?.toLowerCase();
    const html = new TextDecoder(charset || 'utf-8').decode(buf);
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

function scoreCandidate(title, text, url) {
  const hay = `${title} ${text.slice(0, 4500)} ${url}`;
  let score = 0;
  if (strong.test(hay)) score += 12;
  if (amount.test(hay)) score += 5;
  if (target.test(hay)) score += 4;
  if (period.test(hay)) score += 3;
  const strongHits = hay.match(new RegExp(strong.source, 'g'))?.length || 0;
  score += Math.min(strongHits, 8) * 2;
  if (/kiji|20\d{2}|\/\d+\.html/.test(url)) score += 2;
  if (bad.test(hay)) score -= 12;
  if (/一覧|カテゴリ|トップページ|サイトマップ|検索結果|予約|新着情報|申請書一覧/.test(title)) score -= 8;
  return score;
}

const candidates = [];
for (const org of orgs) {
  console.error(`start ${org.org}`);
  const urls = new Set();
  const startUrls = [...org.seeds.map((seed) => absolute(org.base, seed)), ...org.searches].filter(Boolean);
  const queue = [...startUrls];
  const seen = new Set();
  while (queue.length && seen.size < 150) {
    const batchUrls = queue.splice(0, 14).filter((url) => !seen.has(url));
    batchUrls.forEach((url) => seen.add(url));
    const pages = await mapLimit(batchUrls, 7, (url) => fetchPage(url));
    for (const page of pages) {
      if (page.status !== 200) continue;
      for (const link of linksFrom(page.html, page.url, org)) {
        urls.add(link);
        if (org.crawl.test(link) && !seen.has(link) && queue.length < 440) queue.push(link);
      }
    }
  }

  console.error(`score ${org.org}: urls=${urls.size} seen=${seen.size}`);
  const pages = await mapLimit([...urls].slice(0, 560), 10, async (url) => {
    const page = await fetchPage(url);
    if (page.status !== 200) return null;
    const title = titleOf(page.html, url);
    const score = scoreCandidate(title, page.text, page.url);
    if (score < 16) return null;
    if (/\/list\d+\.html/.test(page.url) && !/(補助金|助成金|給付金|支援|手当|医療|子育て|福祉|移住|空き家|住宅|教育|就学|奨学)/.test(title)) return null;
    return { org: org.org, title, url: page.url, status: page.status, score, evidence: page.text.slice(0, 340) };
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
