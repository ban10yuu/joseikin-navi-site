import fs from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const { selections } = JSON.parse(fs.readFileSync('tasks/discovery/kagoshima-official-coverage-004-selections.json', 'utf8'));
const outBase = 'tasks/discovery/kagoshima-official-coverage-004';

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function category(title) {
  if (/医療|不妊|不育|妊婦|未熟児|ドナー|税|減免|補聴器|ワクチン|健診/.test(title)) return 'medical';
  if (/児童|子ども|こども|子育て|母子|父子|ひとり親|養育|保育|給食/.test(title)) return 'childcare';
  if (/住宅|空き家|空家|住居|定住|移住|リフォーム|耐震|浄化槽|新婚/.test(title)) return 'housing';
  if (/奨学|就学|教育|学校|通学/.test(title)) return 'education';
  if (/障害|障がい|福祉|介護|高齢|タクシー|施術料/.test(title)) return 'nursing';
  if (/創業|事業|中小|商業|店舗|雇用|就労|産業|融資|農業|職場|企業|DX|設備|承継|インターン/.test(title)) return 'employment';
  return 'living';
}

function related(title, cat) {
  const items = [];
  const add = (value) => { if (value !== cat && !items.includes(value)) items.push(value); };
  if (/児童|子ども|こども|子育て|妊婦|母子|父子|ひとり親|養育|保育|給食/.test(title)) add('childcare');
  if (/医療|健康|不妊|不育|ドナー|未熟児|税|減免|補聴器|健診/.test(title)) add('medical');
  if (/住宅|空き家|空家|住居|定住|移住|リフォーム|耐震|浄化槽|新婚/.test(title)) add('housing');
  if (/奨学|就学|教育|学校|通学/.test(title)) add('education');
  if (/商業|事業|雇用|就労|創業|企業|店舗|融資|農業|職場|DX|設備|承継/.test(title)) add('employment');
  if (/障害|障がい|介護|福祉|高齢|タクシー|施術料/.test(title)) add('nursing');
  add('living');
  return items.slice(0, 3);
}

function normalizeNumber(value) {
  return Number.parseFloat(value.replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)).replace(/[，,]/g, ''));
}

function maxAmount(title, text) {
  const hay = `${title} ${text}`;
  const m = hay.match(/(?:上限|最大|限度額|月額|年額|1世帯(?:あたり)?|1人(?:あたり)?|支給額|助成額|補助額|補助金額|補助金上限額)[^。．\n]{0,100}?([0-9０-９,，.]+)\s*(万円|円)/);
  if (m) {
    const n = normalizeNumber(m[1]);
    return { text: m[0].replace(/\s+/g, ''), num: Number.isFinite(n) ? Math.round(n * (m[2] === '万円' ? 10000 : 1)) : 0 };
  }
  const d = hay.match(/([0-9０-９,，.]+)\s*(万円|円)(?:を|の)?(?:支給|助成|補助|交付|給付|限度|まで)/);
  if (d) {
    const n = normalizeNumber(d[1]);
    return { text: d[0].replace(/\s+/g, ''), num: Number.isFinite(n) ? Math.round(n * (d[2] === '万円' ? 10000 : 1)) : 0 };
  }
  if (/医療費|公費負担|無償化/.test(title)) return { text: '医療費・利用料等の自己負担分を助成または無償化', num: 0 };
  if (/手当|年金|給付金/.test(title)) return { text: '所得・対象区分に応じて手当・給付金等を支給', num: 0 };
  if (/貸付|融資|利子補給/.test(title)) return { text: '公式ページ記載の貸付額・利子補給額・貸付条件に従う', num: 0 };
  if (/支援金|奨励金/.test(title)) return { text: '公式ページ記載の支援額・奨励金額に従う', num: 0 };
  return { text: '公式ページ記載の補助率・上限額または支援内容に従う', num: 0 };
}

function eligibility(org, title, cat) {
  if (cat === 'childcare') return `${org}内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方`;
  if (cat === 'medical') return `${org}内で医療・健康支援、税減免等の公式対象要件を満たす方`;
  if (cat === 'housing') return `${org}内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方`;
  if (cat === 'education') return `${org}内の児童生徒・学生・保護者等で公式要件を満たす方`;
  if (cat === 'employment') return `${org}内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方`;
  if (cat === 'nursing') return `${org}内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方`;
  return `${org}内の対象者・世帯・団体等で公式要件を満たす方`;
}

function focusText(text, title) {
  const hits = [];
  let index = text.indexOf(title);
  while (index >= 0) {
    hits.push(index);
    index = text.indexOf(title, index + title.length);
  }
  const start = hits.length > 1 ? hits[1] : hits[0];
  if (start >= 0) return text.slice(start, start + 3200);
  return text.slice(0, 3200);
}

function application(text, title) {
  const body = focusText(text, title);
  const date = body.match(/20\d{2}年\d{1,2}月\d{1,2}日|令和[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/)?.[0];
  let phrase = body.match(/(?:申請|募集|受付|締切|期限|交付|支給|請求|提出)[^。．]{0,120}/)?.[0] || body.slice(0, 120);
  phrase = phrase.split(/[｜|/]/)[0].trim();
  if (/本文へ|Foreign|フッターメニュー|緊急情報|メインメニュー|ページの先頭|ヘッダー|文字サイズ/.test(phrase)) phrase = '公式ページで申請・受付状況を確認';
  return `${date ? `${date} ` : ''}${phrase.slice(0, 150)}`;
}

async function fetchPage(url) {
  try {
    const { stdout } = await execFileAsync('curl', [
      '-L',
      '--connect-timeout',
      '5',
      '--max-time',
      '18',
      '-A',
      'Mozilla/5.0 official-coverage-check',
      '-s',
      '-w',
      '\n__STATUS__%{http_code}__URL__%{url_effective}',
      url,
    ], { timeout: 22000, maxBuffer: 1024 * 1024 * 5 });
    const marker = stdout.lastIndexOf('\n__STATUS__');
    const html = marker >= 0 ? stdout.slice(0, marker) : stdout;
    const meta = marker >= 0 ? stdout.slice(marker).match(/__STATUS__(\d+)__URL__(.+)$/s) : null;
    return { status: meta ? Number(meta[1]) : 0, url: meta ? meta[2].trim() : url, text: stripHtml(html) };
  } catch (error) {
    return { status: 0, url, text: String(error?.message || error) };
  }
}

const adopted = [];
const non200 = [];
for (let i = 0; i < selections.length; i++) {
  const [org, name, url] = selections[i];
  const page = await fetchPage(url);
  if (page.status !== 200) non200.push({ org, name, url, status: page.status, final: page.url });
  const cat = category(name);
  const focused = focusText(page.text, name);
  const amount = maxAmount(name, focused);
  adopted.push({
    slug: `kagoshima-official-004-${String(i + 1).padStart(3, '0')}-2026`,
    title: `${org} ${name}`,
    organization: org,
    maxAmount: amount.text,
    maxAmountNum: amount.num,
    category: cat,
    relatedCategories: related(name, cat),
    eligibility: eligibility(org, name, cat),
    applicationPeriod: application(focused, name),
    officialUrl: page.url || url,
    sourceName: name,
    status: page.status,
    evidence: focused.slice(0, 220),
  });
}

const counts = adopted.reduce((acc, grant) => {
  acc[grant.organization] = (acc[grant.organization] || 0) + 1;
  return acc;
}, {});

fs.writeFileSync(`${outBase}-adopted.json`, JSON.stringify({ generatedAt: new Date().toISOString(), adopted, non200, counts }, null, 2));
fs.writeFileSync(`${outBase}-adopted.tsv`, [
  'slug\torganization\ttitle\tmaxAmount\turl\tevidence',
  ...adopted.map((grant) => [grant.slug, grant.organization, grant.title, grant.maxAmount, grant.officialUrl, grant.evidence.replace(/\t/g, ' ').trim()].join('\t')),
].join('\n') + '\n');
fs.writeFileSync(`${outBase}-ts-snippet.ts`, `const kagoshimaOfficial004Grants: Array<{
  slug: string;
  title: string;
  organization: string;
  maxAmount: string;
  maxAmountNum: number;
  category: Grant['category'];
  relatedCategories?: Grant['relatedCategories'];
  eligibility: string;
  applicationPeriod: string;
  officialUrl: string;
  sourceName: string;
}> = ${JSON.stringify(adopted.map(({ status, evidence, ...grant }) => grant), null, 2)};
`);

console.log(JSON.stringify({ adopted: adopted.length, counts, non200 }, null, 2));
