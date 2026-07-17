import fs from 'node:fs';

const batch = 'nagasaki-official-coverage-002';
const municipalities = [
  { org: '平戸市', base: 'https://www.city.hirado.nagasaki.jp', seeds: ['/', '/kurashi/', '/kurashi/life/sumai/ijuteiju/index.html', '/kurashi/life/kosodate/', '/kurashi/life/kenko/', '/kurashi/life/fukushi/', '/kurashi/life/sangyo/'], max: 300 },
  { org: '松浦市', base: 'https://www.city-matsuura.jp', seeds: ['/', '/index.html', '/top/index.html', '/top/sangyo_business/index.html', '/top/kurashi/index.html', '/top/kosodate_kyoiku/index.html', '/top/kenko_fukushi/index.html', '/top/soshikikarasagasu/'], max: 300 },
  { org: '対馬市', base: 'https://www.city.tsushima.nagasaki.jp', seeds: ['/', '/index.html', '/gyousei/index.html', '/ijyu/index.html', '/gyousei/soshiki/index.html', '/gyousei/soshiki/soumu/', '/gyousei/soshiki/shiminkyoudou/'], max: 300 },
  { org: '壱岐市', base: 'https://www.city.iki.nagasaki.jp', seeds: ['/', '/index.html', '/kurashi/index.html', '/kosodate/index.html', '/kenkou/index.html', '/jigyousha/index.html', '/mokuteki/hojokin/index.html', '/mokuteki/ninshin_shussan/index.html', '/mokuteki/kaigokourei/index.html'], max: 300 },
  { org: '五島市', base: 'https://www.city.goto.nagasaki.jp', seeds: ['/', '/index.html', '/li/kurashi/index.html', '/li/kurashi/150/030/010/index.html', '/li/kurashi/150/020/index.html', '/li/kurashi/150/010/index.html', '/li/kurashi/080/040/010/index.html', '/li/shisei/index.html', '/bosyu.html'], max: 300 },
];

const strong = /(補助金|助成金|給付金|支援金|奨励金|交付金|手当|医療費助成|奨学金|貸付|減免|免除|無償化|補助|助成|給付|支援制度|助成制度|商品券|一時金)/;
const amount = /(上限|最大|限度|月額|年額|円|万円|補助率|助成額|補助額|支給額|自己負担|無料|全額|半額|給付額)/;
const target = /(対象|要件|市内|市民|世帯|児童|子ども|妊婦|高齢者|障害|障がい|事業者|所有者|保護者|申請者|所得|住民)/;
const period = /(申請|受付|募集|締切|期限|提出|交付|請求|令和|20\d{2}年)/;
const pathHint = /(hojo|josei|kyufu|teate|shien|shogaku|mushou|kosodate|kenko|fukushi|sumai|sangyo|kurashi|kyoiku|iryo|kodomo|ikuji|teiju|ijyu|akiya|jutaku|shogai|kaigo|koureisha|sougyou|kigyou|genmen|jidou|ninshin|yobou)/i;
const bad = /(議会|入札|発注|プロポーザル|職員採用|広報|統計|計画|報告|実績|審議|選挙|監査|例規|会議|パブリックコメント|予算|決算|求人|公告|工事|委託|指定管理|アンケート|市長|教育委員会|契約|公募型)/;

function absolute(base, href) {
  try {
    const url = new URL(href, base);
    url.hash = '';
    return url.href;
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
    .replace(/\s+/g, ' ')
    .trim();
}

function titleOf(html, fallback) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const title = h1 || html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || fallback;
  return stripHtml(title).replace(/\s*[|｜].*$/, '').trim();
}

async function fetchPage(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 official-coverage-check' },
    });
    const type = res.headers.get('content-type') || '';
    const html = type.includes('html') || type.includes('text') || type.includes('xml') ? await res.text() : '';
    return { status: res.status, url: res.url, html, text: stripHtml(html) };
  } catch (error) {
    return { status: 0, url, html: '', text: String(error?.message || error) };
  } finally {
    clearTimeout(timer);
  }
}

function linksFrom(base, html) {
  const out = [];
  for (const m of html.matchAll(/href\s*=\s*["']([^"']+)["']/gi)) {
    const url = absolute(base, m[1]);
    if (url) out.push(url);
  }
  return out;
}

function usefulUrl(base, url) {
  if (!url.startsWith(base)) return false;
  if (/\.(jpg|jpeg|png|gif|css|js|ico|zip|docx?|xlsx?|pptx?)($|\?)/i.test(url)) return false;
  if (/\/(calendar|photo|kouhou|gikai|reiki|rss|search)\//i.test(url)) return false;
  const decoded = decodeURIComponentSafe(url);
  return pathHint.test(decoded) || /(soshiki|site|page|docs|main|kurashi|life|gyosei|article|detail|news|category|contents|html|php)/.test(url);
}

function decodeURIComponentSafe(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function score(title, text, url) {
  const hay = `${title} ${text.slice(0, 4000)} ${decodeURIComponentSafe(url)}`;
  let s = 0;
  if (strong.test(hay)) s += 13;
  if (amount.test(hay)) s += 5;
  if (target.test(hay)) s += 4;
  if (period.test(hay)) s += 3;
  s += Math.min(hay.match(new RegExp(strong.source, 'g'))?.length || 0, 5) * 2;
  if (pathHint.test(decodeURIComponentSafe(url))) s += 3;
  if (bad.test(hay)) s -= 12;
  if (/一覧|カテゴリ|トップページ|サイトマップ|くらしの情報|便利ナビ|検索結果/.test(title)) s -= 8;
  return s;
}

const scanned = [];
for (const m of municipalities) {
  const queue = m.seeds.map((s) => absolute(m.base, s)).filter(Boolean);
  const seen = new Set(queue);
  const urls = new Set();
  while (queue.length && urls.size < m.max) {
    const current = queue.shift();
    const page = await fetchPage(current);
    if (page.status !== 200) continue;
    urls.add(page.url);
    for (const link of linksFrom(page.url, page.html)) {
      if (!link.startsWith(m.base) || seen.has(link) || !usefulUrl(m.base, link)) continue;
      seen.add(link);
      if (strong.test(decodeURIComponentSafe(link)) || pathHint.test(link) || /(main|soshiki|site|page|docs|kurashi|life|article|contents)/.test(link)) {
        queue.push(link);
      }
    }
  }
  let done = 0;
  for (const url of urls) {
    const page = await fetchPage(url);
    done += 1;
    if (page.status !== 200) continue;
    const title = titleOf(page.html, url);
    const pageScore = score(title, page.text, page.url);
    scanned.push({ org: m.org, title, url: page.url, status: page.status, score: pageScore, evidence: page.text.slice(0, 260) });
    if (done % 100 === 0) process.stderr.write(`${m.org}: ${done}/${urls.size}\n`);
  }
}

const unique = [...new Map(scanned.map((item) => [`${item.org}\t${item.url}`, item])).values()];
const shortlist = unique.filter((item) => item.score >= 13).sort((a, b) => a.org.localeCompare(b.org, 'ja') || b.score - a.score);
const allTsv = ['organization\ttitle\turl\tstatus\tscore\tevidence', ...unique.map((item) => [item.org, item.title, item.url, item.status, item.score, item.evidence.replace(/\t/g, ' ')].join('\t'))].join('\n') + '\n';
const shortlistTsv = ['organization\ttitle\turl\tstatus\tscore\tevidence', ...shortlist.map((item) => [item.org, item.title, item.url, item.status, item.score, item.evidence.replace(/\t/g, ' ')].join('\t'))].join('\n') + '\n';
const counts = unique.reduce((acc, item) => { acc[item.org] = (acc[item.org] || 0) + 1; return acc; }, {});
const shortlistCounts = shortlist.reduce((acc, item) => { acc[item.org] = (acc[item.org] || 0) + 1; return acc; }, {});
fs.writeFileSync(`tasks/discovery/${batch}-targeted-scan.tsv`, allTsv);
fs.writeFileSync(`tasks/discovery/${batch}-focused-link-scan.json`, JSON.stringify({ generatedAt: new Date().toISOString(), count: unique.length, counts, shortlistCount: shortlist.length, shortlistCounts, items: unique }, null, 2));
fs.writeFileSync(`tasks/discovery/${batch}-focused-link-scan.tsv`, allTsv);
fs.writeFileSync(`tasks/discovery/${batch}-shortlist.tsv`, shortlistTsv);
console.log(JSON.stringify({ count: unique.length, counts, shortlist: shortlist.length, shortlistCounts }, null, 2));
