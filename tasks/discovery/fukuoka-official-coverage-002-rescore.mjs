import fs from 'node:fs';

const batch = 'fukuoka-official-coverage-002';
const outFile = `tasks/discovery/${batch}-rescored-candidates.json`;

const municipalities = [
  { org: '飯塚市', base: 'https://www.city.iizuka.lg.jp', seeds: ['/', '/kurashi/', '/kosodate/', '/kenko/', '/sangyo/', '/kyoiku/', '/shise/', '/soshiki/'], mode: 'cms', max: 260 },
  { org: '田川市', base: 'https://www.joho.tagawa.fukuoka.jp', seeds: ['/', '/kiji003', '/kurashi/', '/kenko/', '/kosodate/', '/shigoto/', '/soshiki/', '/list'], mode: 'cms', max: 260 },
  { org: '柳川市', base: 'https://www.city.yanagawa.fukuoka.jp', seeds: ['/', '/kurashi/', '/kosodate/', '/kenko/', '/sangyo/', '/kyoiku/', '/shisei/', '/life/'], mode: 'cms', max: 260 },
  { org: '八女市', base: 'https://www.city.yame.fukuoka.jp', seeds: ['/', '/kurashi/', '/kosodate/', '/kenko/', '/sangyo/', '/shisei/', '/soshiki/', '/category/'], mode: 'cms', max: 260 },
  { org: '筑後市', base: 'https://www.city.chikugo.lg.jp', seeds: ['/', '/kurashi/', '/kosodate/', '/kenko/', '/sangyo/', '/kyoiku/', '/shisei/', '/life/'], mode: 'cms', max: 260 },
];

const strong = /(補助金|助成金|給付金|支援金|奨学金|手当|貸付|無償化|医療費助成|就学援助|減免|補助|助成|給付|支援制度|商品券|交付金|奨励金|支援事業|無料化|給付制度)/;
const amount = /(上限|最大|限度|月額|年額|円|万円|補助率|支給額|助成額|補助額|自己負担|無料|全額|半額)/;
const target = /(対象|要件|市内|住民|世帯|児童|妊婦|高齢者|障害|障がい|事業者|所有者|保護者|申請者|所得|町内|市民)/;
const period = /(申請|受付|募集|締切|期限|提出|交付|請求|公開日|更新日|令和|20\d{2}年)/;
const pathHint = /(hojo|josei|kyufu|teate|shien|shogaku|mushou|nintei|kosodate|kenkou|fukushi|sumai|sangyo|kurashi|kyoiku|iryo|kodomo|ikuji|teiju|ijyu|akiya|jyutaku|syogai|kaigo|koureisha|sougyou|kigyou|shotoku|zeikin|genmen|jidou)/i;
const bad = /(議会|入札|発注|プロポーザル|職員採用|広報|統計|計画|報告|実績|審議|選挙|監査|例規|個人情報|会議|パブリックコメント|調達方針|予算|決算|求人|公告|工事|委託|指定管理|アンケート|市長|教育委員会会議|審査結果)/;

function absolute(base, href) {
  try {
    return new URL(href, base).href.replace(/#.*$/, '');
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
  return stripHtml(title).replace(/\s*\|.*$/, '').trim();
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
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

function linksFrom(base, html) {
  const links = [];
  const re = /href\s*=\s*["']([^"']+)["']/gi;
  for (const m of html.matchAll(re)) {
    const u = absolute(base, m[1]);
    if (u) links.push(u);
  }
  return links;
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function usefulUrl(orgBase, url) {
  if (!url.startsWith(orgBase)) return false;
  if (/\.(jpg|jpeg|png|gif|css|js|ico|zip|docx?|xlsx?|pptx?)($|\?)/i.test(url)) return false;
  if (/\/(calendar|photo|kouhou|gikai|reiki|rss|search|sitemap)\//i.test(url)) return false;
  const decoded = safeDecode(url);
  return pathHint.test(decoded) || /\/(soshiki|site|page|docs|kurashi|life|gyosei|gyousei|contents|article|detail|news|category|living|health|welfare|child|business)\//.test(url) || /\.php\?/.test(url);
}

async function collectUrls(m) {
  const urls = new Set();
  if (m.mode === 'sitemap') {
    const queue = [...m.seeds];
    const seenSitemaps = new Set();
    while (queue.length && urls.size < m.max * 4) {
      const seed = queue.shift();
      if (seenSitemaps.has(seed)) continue;
      seenSitemaps.add(seed);
      const page = await fetchText(seed);
      for (const match of page.html.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)) {
        const url = stripHtml(match[1]);
        if (/sitemap.*\.xml$/i.test(url)) {
          queue.push(url);
          continue;
        }
        if (usefulUrl(m.base.replace('https:', 'http:'), url) || usefulUrl(m.base, url)) urls.add(url);
      }
    }
    return [...urls].slice(0, m.max);
  }

  const queue = m.seeds.map((s) => absolute(m.base, s)).filter(Boolean);
  const seen = new Set(queue);
  while (queue.length && urls.size < m.max) {
    const url = queue.shift();
    const page = await fetchText(url);
    if (page.status !== 200) continue;
    for (const link of linksFrom(url, page.html)) {
      if (!link.startsWith(m.base) || seen.has(link)) continue;
      seen.add(link);
      if (usefulUrl(m.base, link)) urls.add(link);
      if ((/\/(life|soshiki|site|kurashi|gyosei|gyousei|contents|category|article|detail|news)\//.test(link) || pathHint.test(safeDecode(link))) && queue.length < 1100) queue.push(link);
    }
  }
  return [...urls].slice(0, m.max);
}

function scoreCandidate(title, text, url) {
  const hay = `${title} ${text.slice(0, 3000)} ${safeDecode(url)}`;
  let score = 0;
  if (strong.test(hay)) score += 12;
  if (amount.test(hay)) score += 5;
  if (target.test(hay)) score += 4;
  if (period.test(hay)) score += 3;
  const strongHits = hay.match(new RegExp(strong.source, 'g'))?.length || 0;
  score += Math.min(strongHits, 5) * 2;
  if (pathHint.test(safeDecode(url))) score += 3;
  if (bad.test(hay)) score -= 12;
  if (/一覧|カテゴリ|トップページ|サイトマップ|くらしの情報|便利ナビ/.test(title)) score -= 8;
  return score;
}

const candidates = [];
for (const m of municipalities) {
  const urls = await collectUrls(m);
  let done = 0;
  for (const url of urls) {
    const page = await fetchText(url);
    done += 1;
    if (page.status !== 200) continue;
    const title = titleOf(page.html, url);
    const score = scoreCandidate(title, page.text, page.url);
    if (score >= 13) {
      candidates.push({
        org: m.org,
        title,
        url: page.url,
        score,
        evidence: page.text.slice(0, 260),
      });
    }
    if (done % 100 === 0) process.stderr.write(`${m.org}: ${done}/${urls.length}\n`);
  }
}

const uniq = new Map();
for (const c of candidates.sort((a, b) => b.score - a.score)) {
  const key = `${c.org}\t${c.url}`;
  if (!uniq.has(key)) uniq.set(key, c);
}
const finalCandidates = [...uniq.values()].sort((a, b) => a.org.localeCompare(b.org, 'ja') || b.score - a.score);
const byOrg = finalCandidates.reduce((acc, c) => {
  acc[c.org] = (acc[c.org] || 0) + 1;
  return acc;
}, {});

fs.writeFileSync(outFile, JSON.stringify({
  generatedAt: new Date().toISOString(),
  batch,
  candidateCount: finalCandidates.length,
  byOrg,
  candidates: finalCandidates,
}, null, 2));
console.log(JSON.stringify({ candidateCount: finalCandidates.length, byOrg, output: outFile }, null, 2));
