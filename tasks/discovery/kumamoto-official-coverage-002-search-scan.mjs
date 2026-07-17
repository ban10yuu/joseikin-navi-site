import fs from 'node:fs';

const batch = 'kumamoto-official-coverage-002';
const keywords = ['補助金', '助成金', '給付金', '支援金', '手当', '医療費助成', '就学援助', '奨学金', '貸付', '減免', '移住', '空き家', '耐震'];
const orgs = [
  {
    org: '玉名市',
    base: 'https://www.city.tamana.lg.jp',
    search: (q) => `https://www.city.tamana.lg.jp/q/list.html?key=${encodeURIComponent(q)}`,
    seeds: ['/q/list/1.html', '/q/list/2.html', '/q/list/3.html', '/q/list/4.html', '/q/list/5.html'],
    keep: /\/q\/aview\/\d+\/\d+\.html|\/q\/list\/\d+\.html/i,
  },
  {
    org: '山鹿市',
    base: 'https://www.city.yamaga.kumamoto.jp',
    search: (q) => `https://www.city.yamaga.kumamoto.jp/search?q=${encodeURIComponent(q)}`,
    seeds: ['/kurashi/', '/kosodate/', '/fukushi/', '/shigoto/', '/ijyu/'],
    keep: /\/(?:kurashi|kosodate|fukushi|shigoto|ijyu|kiji)\/.*(?:\.html|\/\d+)|\/kiji\d+\/index\.html/i,
  },
  {
    org: '菊池市',
    base: 'https://www.city.kikuchi.lg.jp',
    search: (q) => `https://www.city.kikuchi.lg.jp/q/list.html?key=${encodeURIComponent(q)}`,
    seeds: ['/q/list/1.html', '/q/list/2.html', '/q/list/3.html', '/q/list/4.html', '/q/list/5.html'],
    keep: /\/q\/aview\/\d+\/\d+\.html|\/q\/list\/\d+\.html/i,
  },
  {
    org: '宇土市',
    base: 'https://www.city.uto.lg.jp',
    search: (q) => `https://www.city.uto.lg.jp/q/list.html?key=${encodeURIComponent(q)}`,
    seeds: ['/q/list/1.html', '/q/list/2.html', '/q/list/3.html', '/q/list/4.html'],
    keep: /\/q\/aview\/\d+\/\d+\.html|\/q\/list\/\d+\.html/i,
  },
  {
    org: '上天草市',
    base: 'https://www.city.kamiamakusa.kumamoto.jp',
    search: (q) => `https://www.city.kamiamakusa.kumamoto.jp/q/list.html?key=${encodeURIComponent(q)}`,
    seeds: ['/q/list/1.html', '/q/list/2.html', '/q/list/3.html', '/q/list/4.html'],
    keep: /\/q\/aview\/\d+\/\d+\.html|\/q\/list\/\d+\.html/i,
  },
];

const strong = /(補助金|助成金|給付金|支援金|奨学金|手当|貸付|無償化|医療費助成|就学援助|減免|補助|助成|給付|支援制度|交付金|奨励金|支援事業|無料化|給付制度|資金)/;
const amount = /(上限|最大|限度|月額|年額|円|万円|補助率|支給額|助成額|補助額|自己負担|無料|全額|半額|免除|減免)/;
const target = /(対象|要件|市内|住民|世帯|児童|妊婦|高齢者|障害|障がい|事業者|所有者|保護者|申請者|所得|市民|若者|中小企業)/;
const period = /(申請|受付|募集|締切|期限|提出|交付|請求|公開日|更新日|令和|20\d{2}年)/;
const bad = /(議会|入札|発注|プロポーザル|職員採用|広報|統計|計画|報告|実績|審議|選挙|監査|例規|個人情報|会議|パブリックコメント|予算|決算|求人|公告|工事|委託|指定管理|アンケート|審査結果|採択事業者)/;

function absolute(base, href) {
  try {
    return new URL(href.replaceAll('&amp;', '&'), base).href.replace(/#.*$/, '').trim();
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
    .replace(/&#[0-9]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleOf(html, fallback) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const title = h1 || html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || fallback;
  return stripHtml(title).replace(/\s*[|-].*$/, '').trim();
}

async function fetchPage(url, timeoutMs = 5000) {
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

function scoreCandidate(title, text, url) {
  const hay = `${title} ${text.slice(0, 2600)} ${url}`;
  let score = 0;
  if (strong.test(hay)) score += 12;
  if (amount.test(hay)) score += 5;
  if (target.test(hay)) score += 4;
  if (period.test(hay)) score += 3;
  const strongHits = hay.match(new RegExp(strong.source, 'g'))?.length || 0;
  score += Math.min(strongHits, 6) * 2;
  if (/kiji|Detail|reiki/.test(url)) score += 2;
  if (bad.test(hay)) score -= 12;
  if (/一覧|カテゴリ|トップページ|サイトマップ|検索結果/.test(title)) score -= 8;
  return score;
}

const candidates = [];
for (const org of orgs) {
  const urls = new Set();
  if (org.search) {
    const searchPages = await mapLimit(keywords.map((q) => org.search(q)), 5, (url) => fetchPage(url));
    for (const page of searchPages) {
      if (page.status !== 200) continue;
      for (const link of linksFrom(page.html, page.url, org)) urls.add(link);
    }
  }
  if (org.seeds) {
    const pages = await mapLimit(org.seeds.map((seed) => absolute(org.base, seed)), 5, (url) => fetchPage(url));
    for (const page of pages) {
      if (page.status !== 200) continue;
      for (const link of linksFrom(page.html, page.url, org)) urls.add(link);
    }
  }

  const pages = await mapLimit([...urls].slice(0, 140), 8, async (url) => {
    const page = await fetchPage(url);
    if (page.status !== 200) return null;
    const title = titleOf(page.html, url);
    const score = scoreCandidate(title, page.text, page.url);
    if (score < 15) return null;
    return { org: org.org, title, url: page.url, status: page.status, score, evidence: page.text.slice(0, 260) };
  });
  for (const page of pages.filter(Boolean)) candidates.push(page);
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

fs.writeFileSync(`tasks/discovery/${batch}-search-candidates.json`, JSON.stringify({
  generatedAt: new Date().toISOString(),
  batch,
  candidateCount: finalCandidates.length,
  byOrg,
  candidates: finalCandidates,
}, null, 2));

fs.writeFileSync(`tasks/discovery/${batch}-search-candidates.tsv`, [
  'score\torganization\ttitle\turl\tevidence',
  ...finalCandidates.map((c) => [c.score, c.org, c.title, c.url, c.evidence.replace(/\t/g, ' ')].join('\t')),
].join('\n') + '\n');

console.log(JSON.stringify({ candidateCount: finalCandidates.length, byOrg }, null, 2));
