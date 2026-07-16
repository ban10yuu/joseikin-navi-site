import fs from 'node:fs';

const input = JSON.parse(fs.readFileSync('tasks/discovery/shimane-official-coverage-003-candidates.json', 'utf8'));
const seeds = new Map();
for (const result of input.results) {
  const urls = new Set([result.officialBaseUrl]);
  for (const candidate of result.candidates) {
    if (candidate.candidateScore >= 10 || candidate.candidatePriority === 'strong') urls.add(candidate.sourceUrl);
  }
  for (const url of urls) seeds.set(url, result);
}

const extraSeeds = [
  ['川本町', '32441', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_taikei/r_taikei_07_01.html'],
  ['川本町', '32441', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_taikei/r_taikei_07_01_02.html'],
  ['美郷町', '32448', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_taikei/r_taikei_08_01.html'],
  ['美郷町', '32448', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_taikei/r_taikei_08_01_02.html'],
  ['邑南町', '32449', 'https://www.town.ohnan.lg.jp/site/kosodate/list24.html'],
  ['邑南町', '32449', 'https://www.town.ohnan.lg.jp/site/kosodate/list24-102.html'],
  ['邑南町', '32449', 'https://www.town.ohnan.lg.jp/soshiki/5/'],
  ['津和野町', '32501', 'https://www.town.tsuwano.lg.jp/www/contents/1681362095333/index.html'],
  ['津和野町', '32501', 'https://www.town.tsuwano.lg.jp/www/contents/1684975426783/index.html'],
  ['津和野町', '32501', 'https://www.town.tsuwano.lg.jp/www/contents/1681367497484/index.html'],
  ['吉賀町', '32505', 'https://www.town.yoshika.lg.jp/sitemap.html'],
  ['吉賀町', '32505', 'https://www.town.yoshika.lg.jp/kurashi/fukushi/iryouhi/iryouhi.html'],
  ['吉賀町', '32505', 'https://www.town.yoshika.lg.jp/kurashi/fukushi/shougaishafukushi/shogaisyafukushi.html'],
];
for (const [name, code, url] of extraSeeds) {
  seeds.set(url, { name, code, officialBaseUrl: url });
}

const keyword = /(補助金|助成金|給付金|支援金|奨励金|手当|貸付|減免|免除|医療費|奨学|就学援助|移住|空き家|住宅|不妊|妊婦|子育て|児童|福祉|障害|障がい|創業|起業|就農|農業|林業|通学|交通)/;

function absolute(href, base) {
  try {
    const url = new URL(href, base);
    if (!/^https?:$/.test(url.protocol)) return '';
    url.hash = '';
    return url.href;
  } catch {
    return '';
  }
}

function strip(s) {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const leads = [];
for (const [seedUrl, result] of seeds) {
  const response = await fetch(seedUrl, { redirect: 'follow' }).catch(() => null);
  if (!response) continue;
  const html = await response.text();
  const re = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(re)) {
    const label = strip(match[2]);
    const url = absolute(match[1], response.url);
    if (!url || !label || !keyword.test(`${label} ${url}`)) continue;
    leads.push({
      municipalityCode: result.code,
      municipalityName: result.name,
      label,
      url,
      seedUrl,
      score: (label.match(keyword) ? 10 : 0) + (/(補助金|助成金|給付金|支援金|手当|医療費|奨学)/.test(label) ? 10 : 0),
    });
  }
}

const unique = [];
const seen = new Set();
for (const lead of leads.sort((a, b) => b.score - a.score)) {
  const key = `${lead.municipalityName}\t${lead.url}`;
  if (seen.has(key)) continue;
  seen.add(key);
  unique.push(lead);
}

fs.writeFileSync('tasks/discovery/shimane-official-coverage-003-link-leads.json', JSON.stringify(unique, null, 2));
fs.writeFileSync('tasks/discovery/shimane-official-coverage-003-link-leads.tsv', unique.map((lead) => `${lead.municipalityCode}\t${lead.municipalityName}\t${lead.score}\t${lead.label}\t${lead.url}\t${lead.seedUrl}`).join('\n') + '\n');
console.log(JSON.stringify({ seeds: seeds.size, leads: leads.length, unique: unique.length }, null, 2));
