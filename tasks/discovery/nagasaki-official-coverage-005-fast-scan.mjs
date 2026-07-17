import fs from 'node:fs';

const batch = 'nagasaki-official-coverage-005';
const base = 'https://official.shinkamigoto.net/';
const seeds = [
  '/',
  '/goto_kurashi.php?alllist=on',
  '/goto_culture.php?alllist=on',
  '/goto_business.php?alllist=on',
  '/goto_chosei.php?alllist=on',
  '/goto_kurashi.php?wcid=i00002',
  '/goto_kurashi.php?wcid=i00003',
  '/goto_kurashi.php?wcid=i00004',
  '/goto_kurashi.php?wcid=i00005',
  '/goto_business.php?wcid=k00001',
  '/goto_business.php?wcid=k00002',
  '/goto_business.php?wcid=k00003',
  '/goto_business.php?wcid=k00006',
];

const strong = /(補助金|助成金|給付金|支援金|奨学金|手当|貸付|無償化|医療費助成|就学援助|減免|補助|助成|給付|支援制度|交付金|奨励金|支援事業|給付制度|資金|無料|負担軽減)/;
const amount = /(上限|最大|限度|月額|年額|円|万円|補助率|支給額|助成額|補助額|自己負担|無料|全額|半額|一部)/;
const target = /(対象|要件|住民|町民|世帯|児童|妊婦|高齢者|障害|障がい|事業者|所有者|保護者|申請者|所得|町内|中小企業|漁業者|農業者)/;
const period = /(申請|受付|募集|締切|期限|提出|交付|請求|公開日|更新日|令和|20\d{2}年)/;
const bad = /(入札|発注|プロポーザル|職員採用|広報|統計|計画|報告|実績|審議|選挙|監査|例規|個人情報|会議|パブリックコメント|予算|決算|求人|公告|工事|委託|指定管理|アンケート|議会|市長|町長)/;

function absolute(href, pageUrl = base) {
  try {
    return new URL(href.replaceAll('&amp;', '&'), pageUrl).href.replace(/#.*$/, '');
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
  return stripHtml(title).replace(/\s*\|.*$/, '').trim();
}

async function fetchPage(url, timeoutMs = 6000) {
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

function linksFrom(html, pageUrl) {
  const links = [];
  for (const match of html.matchAll(/href\s*=\s*["']([^"']+)["']/gi)) {
    const url = absolute(match[1], pageUrl);
    if (url?.startsWith(base)) links.push(url);
  }
  return links;
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
  if (/goto_(kurashi|business|culture)_full\.php/.test(url)) score += 4;
  if (bad.test(hay)) score -= 12;
  if (/一覧|カテゴリ|トップページ|サイトマップ|くらしの情報/.test(title)) score -= 8;
  return score;
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

const seedPages = await mapLimit(seeds.map((seed) => absolute(seed)), 6, (url) => fetchPage(url));
const urls = new Set();
for (const page of seedPages) {
  if (page.status !== 200) continue;
  for (const link of linksFrom(page.html, page.url)) {
    if (/goto_(kurashi|business|culture)_full\.php\?eid=/.test(link)) urls.add(link);
  }
}

const pages = await mapLimit([...urls], 8, async (url) => {
  const page = await fetchPage(url);
  if (page.status !== 200) return null;
  const title = titleOf(page.html, url);
  const score = scoreCandidate(title, page.text, page.url);
  return {
    org: '新上五島町',
    title,
    url: page.url,
    status: page.status,
    score,
    evidence: page.text.slice(0, 260),
  };
});

const candidates = pages
  .filter(Boolean)
  .filter((page) => page.score >= 15)
  .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'ja'));

fs.writeFileSync(`tasks/discovery/${batch}-fast-candidates.json`, JSON.stringify({
  generatedAt: new Date().toISOString(),
  batch,
  candidateCount: candidates.length,
  byOrg: { '新上五島町': candidates.length },
  candidates,
}, null, 2));

fs.writeFileSync(`tasks/discovery/${batch}-fast-candidates.tsv`, [
  'score\torganization\ttitle\turl\tevidence',
  ...candidates.map((c) => [c.score, c.org, c.title, c.url, c.evidence.replace(/\t/g, ' ')].join('\t')),
].join('\n') + '\n');

console.log(JSON.stringify({
  seedPages: seedPages.filter((page) => page.status === 200).length,
  fetchedUrls: urls.size,
  candidates: candidates.length,
}, null, 2));
