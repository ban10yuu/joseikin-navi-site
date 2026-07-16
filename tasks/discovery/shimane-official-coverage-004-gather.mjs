import fs from 'node:fs';

const outBase = 'tasks/discovery/shimane-official-coverage-004';

const municipalities = [
  {
    code: '32525',
    name: '海士町',
    base: 'https://www.town.ama.shimane.jp/',
    sitemap: 'https://www.town.ama.shimane.jp/sitemap.xml',
    seeds: [
      'https://www.town.ama.shimane.jp/kurashi',
      'https://www.town.ama.shimane.jp/kosodate',
      'https://www.town.ama.shimane.jp/iryo-fukushi',
      'https://www.town.ama.shimane.jp/sangyo',
    ],
  },
  {
    code: '32526',
    name: '西ノ島町',
    base: 'https://www.town.nishinoshima.shimane.jp/',
    seeds: [
      'https://www.town.nishinoshima.shimane.jp/josei/',
      'https://www.town.nishinoshima.shimane.jp/teiju/lifestyle/izyu-shien/1264',
      'https://www.town.nishinoshima.shimane.jp/sitemap',
      'https://www.town.nishinoshima.shimane.jp/kurashi-tetsuzuki/',
      'https://www.town.nishinoshima.shimane.jp/kosodate-kyoiku/',
      'https://www.town.nishinoshima.shimane.jp/kenkou-iryou-fukushi/',
      'https://www.town.nishinoshima.shimane.jp/sangyou/',
    ],
  },
  {
    code: '32527',
    name: '知夫村',
    base: 'https://www.vill.chibu.lg.jp/',
    seeds: [
      'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs03/485',
      'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs01/',
      'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs03/',
      'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs04/',
      'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs07/',
    ],
  },
  {
    code: '32528',
    name: '隠岐の島町',
    base: 'https://www.town.okinoshima.shimane.jp/',
    sitemap: 'https://www.town.okinoshima.shimane.jp/sitemap.xml',
    seeds: [
      'https://www.town.okinoshima.shimane.jp/soshiki/chikishinko/gyomu/3/2/2/index.html',
      'https://www.town.okinoshima.shimane.jp/soshiki/kenko/gyomu/1/1/',
      'https://www.town.okinoshima.shimane.jp/soshiki/fukushi/gyomu/',
      'https://www.town.okinoshima.shimane.jp/soshiki/norinsuisan/gyomu/',
      'https://www.town.okinoshima.shimane.jp/soshiki/kyoiku/gyomu/',
    ],
  },
];

const keyword = /(補助金|助成金|給付金|支援金|奨励金|手当|貸付|減免|免除|医療費|奨学|就学援助|移住|定住|空き家|空家|住宅|不妊|妊婦|子育て|児童|福祉|障害|障がい|創業|起業|就農|農業|林業|水産|通学|交通|健診|予防接種|出産)/;
const strong = /(補助金|助成金|給付金|支援金|奨励金|手当|医療費|奨学|貸付|減免)/;
const usefulPath = /(kurashi|kosodate|kenko|iryou|fukushi|sangyo|norin|kyoiku|teiju|chikishinko|gyomu|josei|life|needs|soshiki)/i;

async function fetchText(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 official-coverage-check',
        accept: 'text/html,application/xhtml+xml,application/xml,text/xml,*/*',
      },
    });
    const text = await response.text();
    return { url: response.url, status: response.status, text };
  } catch (error) {
    return { url, status: 0, text: '', error: String(error?.message || error) };
  } finally {
    clearTimeout(timeout);
  }
}

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

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function links(html, base) {
  const out = [];
  const re = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(re)) {
    const label = strip(match[2]);
    const url = absolute(match[1], base);
    if (url && label) out.push({ label, url });
  }
  return out;
}

function sitemapLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((m) => m[1].trim());
}

const allLeads = [];
for (const municipality of municipalities) {
  const seedUrls = new Set(municipality.seeds);
  if (municipality.sitemap) {
    const sitemap = await fetchText(municipality.sitemap);
    const locs = sitemapLocs(sitemap.text).filter((loc) => keyword.test(loc) || usefulPath.test(loc)).slice(0, 220);
    for (const loc of locs) {
      if (loc.endsWith('.xml')) {
        const nested = await fetchText(loc);
        for (const nestedLoc of sitemapLocs(nested.text).filter((url) => keyword.test(url) || usefulPath.test(url)).slice(0, 80)) seedUrls.add(nestedLoc);
      } else if (keyword.test(loc)) {
        seedUrls.add(loc);
      } else if (usefulPath.test(loc) && seedUrls.size < 120) {
        seedUrls.add(loc);
      }
    }
  }

  const firstPass = [];
  for (const seedUrl of seedUrls) {
    const page = await fetchText(seedUrl);
    if (page.status >= 200 && page.status < 400) {
      const text = strip(page.text);
      if (keyword.test(`${seedUrl} ${text.slice(0, 400)}`)) {
        firstPass.push({ label: text.match(/^\s*([^\s]{2,50})/)?.[1] || seedUrl, url: page.url, seedUrl, score: 10 });
      }
      for (const link of links(page.text, page.url)) {
        if (!link.url.startsWith(municipality.base)) continue;
        if (!keyword.test(`${link.label} ${link.url}`)) continue;
        firstPass.push({ ...link, seedUrl, score: (strong.test(link.label) ? 20 : 0) + (keyword.test(link.label) ? 10 : 0) });
      }
    } else {
      firstPass.push({ label: `FETCH_FAILED_${page.status}`, url: page.url, seedUrl, score: -1, error: page.error || '' });
    }
  }

  const unique = [];
  const seen = new Set();
  for (const lead of firstPass.sort((a, b) => b.score - a.score || a.url.localeCompare(b.url))) {
    if (seen.has(lead.url)) continue;
    seen.add(lead.url);
    unique.push({
      municipalityCode: municipality.code,
      municipalityName: municipality.name,
      ...lead,
    });
  }
  allLeads.push(...unique);
}

fs.writeFileSync(`${outBase}-link-leads.json`, JSON.stringify(allLeads, null, 2));
fs.writeFileSync(`${outBase}-link-leads.tsv`, allLeads.map((lead) => `${lead.municipalityCode}\t${lead.municipalityName}\t${lead.score}\t${lead.label}\t${lead.url}\t${lead.seedUrl}`).join('\n') + '\n');
console.log(JSON.stringify({
  leads: allLeads.length,
  counts: allLeads.reduce((acc, lead) => {
    acc[lead.municipalityName] = (acc[lead.municipalityName] || 0) + 1;
    return acc;
  }, {}),
}, null, 2));
