import fs from 'node:fs';

const outBase = 'tasks/discovery/shimane-official-coverage-002';

const selections = [
  ['安来市', '母子家庭等自立支援給付金', 'https://www.city.yasugi.shimane.jp/kurashi/kyoiku/teate/boshikatei.html'],
  ['安来市', '子ども医療費助成制度', 'https://www.city.yasugi.shimane.jp/kurashi/kyoiku/shien/nyu-yo-iryo.html'],
  ['安来市', '児童扶養手当', 'https://www.city.yasugi.shimane.jp/kurashi/kyoiku/teate/jido-fuyo.html'],
  ['安来市', '児童手当', 'https://www.city.yasugi.shimane.jp/kurashi/kyoiku/teate/jido-teate.html'],
  ['安来市', '母子父子寡婦福祉資金貸付制度', 'https://www.city.yasugi.shimane.jp/kurashi/kyoiku/teate/boshi-fushi-kafu.html'],
  ['安来市', '自主防災組織育成事業補助金', 'https://www.city.yasugi.shimane.jp/kurashi/anzen/bousai/jishubousai.html'],
  ['安来市', '福祉医療費助成制度', 'https://www.city.yasugi.shimane.jp/kurashi/kenko/shogaisha/fukushiiryo/'],
  ['安来市', '空き家改修事業補助金制度', 'https://www.city.yasugi.shimane.jp/kurashi/shushoku/teiju/akiya-kaishu-hojokin.html'],
  ['安来市', '市民支援制度（補助金・助成金等）', 'https://www.city.yasugi.shimane.jp/kurashi/shiminkatsudo/chiikizukuri/shimin-shien-h29.html'],
  ['安来市', '就学援助制度', 'https://www.city.yasugi.shimane.jp/kurashi/kyoiku/shugakuenjo.html'],

  ['江津市', '令和8年度就学援助制度', 'https://www.city.gotsu.lg.jp/soshiki/28/7249.html'],
  ['江津市', '江津市奨学金', 'https://www.city.gotsu.lg.jp/soshiki/28/3635.html'],
  ['江津市', '障がいのある人が対象となる手当制度や共済制度', 'https://www.city.gotsu.lg.jp/soshiki/9/27265.html'],
  ['江津市', 'U・Iターンのための空き家改修費補助金', 'https://www.city.gotsu.lg.jp/soshiki/3/1545.html'],
  ['江津市', '空き家バンク登録支援補助金', 'https://www.city.gotsu.lg.jp/soshiki/3/36296.html'],
  ['江津市', '児童扶養手当', 'https://www.city.gotsu.lg.jp/soshiki/11/2268.html'],
  ['江津市', '生殖補助医療費助成制度', 'https://www.city.gotsu.lg.jp/soshiki/11/25808.html'],
  ['江津市', '妊婦のための支援給付金', 'https://www.city.gotsu.lg.jp/soshiki/11/36215.html'],
  ['江津市', '児童手当', 'https://www.city.gotsu.lg.jp/soshiki/11/28779.html'],
  ['江津市', 'ポリテクカレッジ島根の奨学金制度', 'https://www.city.gotsu.lg.jp/soshiki/16/1720.html'],
  ['江津市', '江津市地方創生移住支援金', 'https://www.city.gotsu.lg.jp/soshiki/3/28765.html'],
  ['江津市', '障害児福祉手当', 'https://www.city.gotsu.lg.jp/soshiki/9/27262.html'],
  ['江津市', '特別児童扶養手当', 'https://www.city.gotsu.lg.jp/soshiki/9/27263.html'],
  ['江津市', '母子家庭自立支援給付金および父子家庭自立支援給付金事業', 'https://www.city.gotsu.lg.jp/soshiki/11/12323.html'],
  ['江津市', '江津市立中学校英語検定料補助金', 'https://www.city.gotsu.lg.jp/soshiki/28/37690.html'],
  ['江津市', '合併処理浄化槽設置補助金', 'https://www.city.gotsu.lg.jp/soshiki/22/2149.html'],
  ['江津市', '低所得世帯緊急支援給付金', 'https://www.city.gotsu.lg.jp/soshiki/9/40793.html'],
  ['江津市', '防犯灯設置費補助金', 'https://www.city.gotsu.lg.jp/soshiki/4/3143.html'],
  ['江津市', '特別障害者手当', 'https://www.city.gotsu.lg.jp/soshiki/9/27260.html'],
  ['江津市', '保育士就労奨励金', 'https://www.city.gotsu.lg.jp/soshiki/11/3113.html'],
  ['江津市', '新卒者等就労促進家賃補助金', 'https://www.city.gotsu.lg.jp/soshiki/16/37613.html'],
  ['江津市', '中小企業者等物価高騰対策信用保証料補助金', 'https://www.city.gotsu.lg.jp/soshiki/16/29911.html'],
  ['江津市', 'まち・ひと結び事業費補助金', 'https://www.city.gotsu.lg.jp/site/comunity/28851.html'],
  ['江津市', '女性のプチ起業支援補助金', 'https://www.city.gotsu.lg.jp/soshiki/3/28776.html'],

  ['雲南市', '母子父子寡婦福祉資金の予約貸付', 'https://www.city.unnan.shimane.jp/unnan/kosodate/soudan/yoyakukasitukeR8.html'],
  ['雲南市', '協働で叶える市民活動促進事業補助金', 'https://www.city.unnan.shimane.jp/unnan/kurashi/machidukuri/kyoudoudekanaeru.html'],
  ['雲南市', '農作物鳥獣被害防止対策事業補助金', 'https://www.city.unnan.shimane.jp/unnan/sangyou/nougyou/2026-0324-1641-139.html'],
  ['雲南市', '住宅除却に係る住宅用地固定資産税減免', 'https://www.city.unnan.shimane.jp/unnan/kurashi/zeikin/juutakujokyaku.html'],
  ['雲南市', '児童扶養手当', 'https://www.city.unnan.shimane.jp/unnan/kosodate/teate/serv01.html'],
  ['雲南市', '子ども医療費助成制度', 'https://www.city.unnan.shimane.jp/unnan/kosodate/iryou/kodomonobyouki.html'],
  ['雲南市', '児童手当', 'https://www.city.unnan.shimane.jp/unnan/kosodate/teate/jidouteate20220601.html'],
  ['雲南市', '生殖補助医療費助成制度', 'https://www.city.unnan.shimane.jp/unnan/kosodate/teate/2022-0707-0913-49.html'],
  ['雲南市', '福祉医療費助成制度', 'https://www.city.unnan.shimane.jp/unnan/kenkou/iryou/josei/fukushiiryou.html'],
  ['雲南市', '母子父子寡婦福祉資金の貸付', 'https://www.city.unnan.shimane.jp/unnan/kosodate/soudan/consult05.html'],
  ['雲南市', '定額減税補足給付金（不足額給付）', 'https://www.city.unnan.shimane.jp/unnan/kurashi/zeikin/2025-0729-1305-42.html'],
  ['雲南市', '結婚活動支援団体支援事業補助金', 'https://www.city.unnan.shimane.jp/unnan/kurashi/seikatsu/2025-0618-1926-28.html'],
  ['雲南市', '地域の担い手育成事業補助金', 'https://www.city.unnan.shimane.jp/unnan/kurashi/machidukuri/2022-0310-1431-27.html'],
  ['雲南市', '重度障がい者等介護手当', 'https://www.city.unnan.shimane.jp/unnan/kenkou/syougai/2026-0316-1144-46.html'],
  ['雲南市', '出産・子育て応援給付金', 'https://www.city.unnan.shimane.jp/unnan/kosodate/ninshinsyussan/shussankosodate.html'],
  ['雲南市', '森林バイオマス推進事業補助金', 'https://www.city.unnan.shimane.jp/unnan/sangyou/ringyou/2021-0427-1051-139.html'],
  ['雲南市', '事業継続緊急支援事業補助金', 'https://www.city.unnan.shimane.jp/unnan/sangyou/syoukou/kigyou/zigyoukeizoku.html'],
  ['雲南市', '運転免許取得支援事業補助金', 'https://www.city.unnan.shimane.jp/unnan/sangyou/syoukou/kigyou/untenmenkyo.html'],
  ['雲南市', '省力化・生産性向上農業機械等物価高騰対策支援事業', 'https://www.city.unnan.shimane.jp/unnan/sangyou/nougyou/bukakoutounougyoukikai.html'],

  ['奥出雲町', '空き家バンク登録促進補助金', 'https://www.town.okuizumo.shimane.jp/kurashi/1771229615481.html'],
  ['奥出雲町', '住宅整備支援事業補助金', 'https://www.town.okuizumo.shimane.jp/kurashi/hikkoshi-sumai/sumai/1743385609148.html'],
  ['奥出雲町', '児童手当・子ども等医療費助成', 'https://www.town.okuizumo.shimane.jp/kosodate-kyoiku/shussan-kosodate/kosodateshien/kosodateshien_tetsuduki-shinsei/1001000000420.html'],
  ['奥出雲町', '未来のたねまきプロジェクト補助金', 'https://www.town.okuizumo.shimane.jp/kurashi/tanemaki.html'],
  ['奥出雲町', '子育て応援事業所サポート事業補助金', 'https://www.town.okuizumo.shimane.jp/kosodate-kyoiku/shussan-kosodate/kosodateshien/page_19.html'],
  ['奥出雲町', '電気自動車普及促進事業奨励金', 'https://www.town.okuizumo.shimane.jp/kurashi/kankyo/dattanso/1743497184720.html'],
  ['奥出雲町', 'ごみ縮減機器等普及促進事業奨励金', 'https://www.town.okuizumo.shimane.jp/kurashi/kankyo/dattanso/1743497184720_1.html'],
  ['奥出雲町', '児童手当制度', 'https://www.town.okuizumo.shimane.jp/kurashi/1723102202984.html'],
  ['奥出雲町', '老朽危険空き家除却支援事業補助金', 'https://www.town.okuizumo.shimane.jp/kurashi/hikkoshi-sumai/sumai/1716874611843.html'],
  ['奥出雲町', '子ども等医療費助成', 'https://www.town.okuizumo.shimane.jp/kosodate-kyoiku/shussan-kosodate/1734075233870.html'],
  ['奥出雲町', '起業・創業等中小企業制度融資信用保証料補助金', 'https://www.town.okuizumo.shimane.jp/jigyosha/kigyoshien/1707459738390.html'],
  ['奥出雲町', '児童扶養手当', 'https://www.town.okuizumo.shimane.jp/kenko-fukushi/hitorioyafukushi/1611562052718.html'],
  ['奥出雲町', '特別児童扶養手当', 'https://www.town.okuizumo.shimane.jp/kenko-fukushi/shogaishafukushi/1594619420035.html'],
  ['奥出雲町', '障害児福祉手当', 'https://www.town.okuizumo.shimane.jp/kenko-fukushi/shogaishafukushi/1594684129704.html'],
  ['奥出雲町', '地域商業等支援事業費補助金', 'https://www.town.okuizumo.shimane.jp/jigyosha/1707457795337.html'],
  ['奥出雲町', '地域商業重点支援事業費補助金', 'https://www.town.okuizumo.shimane.jp/jigyosha/1707460117885.html'],
  ['奥出雲町', '小型除雪機購入費補助金交付事業', 'https://www.town.okuizumo.shimane.jp/information/entry_22.html'],
  ['奥出雲町', '小規模事業者事業継続支援補助金', 'https://www.town.okuizumo.shimane.jp/jigyosha/kigyoshien/1707456255065.html'],
  ['奥出雲町', '先端設備等導入計画に係る固定資産税特例', 'https://www.town.okuizumo.shimane.jp/jigyosha/kigyoshien/1737419014756.html'],
  ['奥出雲町', '商工事業者向け補助金', 'https://www.town.okuizumo.shimane.jp/jigyosha/kigyoshien/1624348257755.html'],
  ['奥出雲町', 'ひとり親家庭自立支援給付金事業', 'https://www.town.okuizumo.shimane.jp/kenko-fukushi/hitorioyafukushi/1671669647039.html'],
  ['奥出雲町', '結婚新生活支援事業補助金', 'https://www.town.okuizumo.shimane.jp/kurashi/kekkon/page_36.html'],
  ['奥出雲町', '町産材利用促進事業費補助金', 'https://www.town.okuizumo.shimane.jp/kurashi/kankyo/dattanso/1748578260103.html'],
  ['奥出雲町', '特別障害者手当', 'https://www.town.okuizumo.shimane.jp/kenko-fukushi/shogaishafukushi/1594625639918.html'],

  ['飯南町', '障害児福祉手当', 'https://www.iinan.jp/soshiki/13/10794.html'],
  ['飯南町', '特別児童扶養手当', 'https://www.iinan.jp/soshiki/13/10792.html'],
  ['飯南町', '児童扶養手当', 'https://www.iinan.jp/soshiki/13/10624.html'],
  ['飯南町', '地域商業等支援事業補助金', 'https://www.iinan.jp/soshiki/7/11024.html'],
  ['飯南町', '低所得世帯緊急支援給付金', 'https://www.iinan.jp/soshiki/13/10616.html'],
  ['飯南町', '特別障害者手当', 'https://www.iinan.jp/soshiki/13/10795.html'],
  ['飯南町', '定住のための助成金制度', 'https://www.iinan.jp/site/ijyuu/1360.html'],
  ['飯南町', '住宅整備助成金（利子補給）', 'https://www.iinan.jp/site/hojyokin/6552.html'],
  ['飯南町', '空き家購入支援事業費補助金', 'https://www.iinan.jp/soshiki/6/3627.html'],
  ['飯南町', '住宅増改築支援事業費補助金', 'https://www.iinan.jp/soshiki/6/3626.html'],
  ['飯南町', '住宅新築支援事業費補助金', 'https://www.iinan.jp/soshiki/6/3567.html'],
  ['飯南町', '町産材住宅活用促進事業費補助金', 'https://www.iinan.jp/soshiki/7/3679.html'],
  ['飯南町', '不妊治療費補助金', 'https://www.iinan.jp/soshiki/12/1297.html'],
  ['飯南町', '子ども等医療費助成事業', 'https://www.iinan.jp/soshiki/12/4392.html'],
  ['飯南町', '母子父子寡婦福祉資金貸付制度', 'https://www.iinan.jp/soshiki/13/1268.html'],
  ['飯南町', '福祉医療費助成制度', 'https://www.iinan.jp/soshiki/13/1265.html'],
  ['飯南町', '新エネルギー設備導入促進事業補助金', 'https://www.iinan.jp/site/hojyokin/9488.html'],
  ['飯南町', '林業就業者確保対策補助金', 'https://www.iinan.jp/soshiki/7/6400.html'],
  ['飯南町', '有害鳥獣対策後継者確保対策補助金', 'https://www.iinan.jp/soshiki/7/10934.html'],
  ['飯南町', '国民スポーツ大会ソフトボール競技補助金', 'https://www.iinan.jp/soshiki/11/3712.html'],
  ['飯南町', '母子家庭自立支援給付金・父子家庭自立支援給付金', 'https://www.iinan.jp/soshiki/13/1269.html'],
  ['飯南町', '中小企業等人材確保対策事業補助金', 'https://www.iinan.jp/soshiki/7/4047.html'],
  ['飯南町', '農業省力化投資支援事業', 'https://www.iinan.jp/soshiki/7/10895.html'],
];

const cityDefaults = {
  '安来市': { code: '32206' },
  '江津市': { code: '32207' },
  '雲南市': { code: '32209' },
  '奥出雲町': { code: '32343' },
  '飯南町': { code: '32386' },
};

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function category(title) {
  if (/医療|不妊|生殖|妊婦|出産/.test(title)) return 'medical';
  if (/児童|子ども|子育て|母子|父子|ひとり親|保育/.test(title)) return 'childcare';
  if (/住宅|空き家|定住|移住|家賃|町産材/.test(title)) return 'housing';
  if (/奨学|就学|英語検定/.test(title)) return 'education';
  if (/障害|障がい|福祉|介護|高齢/.test(title)) return 'nursing';
  if (/災|防災|防犯|除雪|浄化槽|新エネルギー|ごみ|電気自動車/.test(title)) return 'living';
  if (/商業|中小|起業|創業|事業|農|林業|就労|就業|人材|機械|バイオマス|信用保証|運転免許/.test(title)) return 'employment';
  return 'living';
}

function related(title, cat) {
  const set = new Set();
  if (/児童|子ども|子育て|妊婦|出産|母子|父子|ひとり親|保育/.test(title) && cat !== 'childcare') set.add('childcare');
  if (/医療|不妊|生殖|福祉/.test(title) && cat !== 'medical') set.add('medical');
  if (/住宅|空き家|定住|移住|家賃/.test(title) && cat !== 'housing') set.add('housing');
  if (/奨学|就学|検定/.test(title) && cat !== 'education') set.add('education');
  if (/商業|中小|起業|創業|事業|就業|就労|農|林業/.test(title) && cat !== 'employment') set.add('employment');
  if (/障害|障がい|介護|福祉/.test(title) && cat !== 'nursing') set.add('nursing');
  if (/給付|手当|支援|補助|助成|減免/.test(title) && cat !== 'living') set.add('living');
  return Array.from(set).slice(0, 3);
}

function maxAmount(title, text) {
  const localText = `${title} ${text}`;
  if (/医療費|福祉医療/.test(title)) return { text: '医療費の自己負担分等を助成', num: 0 };
  const amountMatch = localText.match(/(?:上限|最大|限度額|月額|年額|1世帯(?:あたり)?|一世帯(?:あたり)?|1人(?:あたり)?|一人(?:あたり)?)[^。．\n]{0,40}?([0-9０-９,，.]+)\s*(万円|円)/);
  if (amountMatch) {
    const raw = amountMatch[1].replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)).replace(/[，,]/g, '');
    const num = Number.parseFloat(raw);
    const unit = amountMatch[2];
    const yen = Number.isFinite(num) ? Math.round(num * (unit === '万円' ? 10000 : 1)) : 0;
    return { text: `${amountMatch[0].replace(/\s+/g, '')}`, num: yen };
  }
  if (/児童手当|扶養手当|障害.*手当|障がい.*手当|特別障害者手当/.test(title)) return { text: '所得・対象区分に応じて手当を支給', num: 0 };
  if (/奨学|貸付/.test(title)) return { text: '公式ページ記載の奨学金・貸付額', num: 0 };
  if (/減免|固定資産税特例/.test(title)) return { text: '公式ページ記載の税額軽減・減免', num: 0 };
  if (/給付金|支援金/.test(title)) return { text: '公式ページ記載の給付額・支援額', num: 0 };
  return { text: '公式ページ記載の補助率・上限額または支援内容に従う', num: 0 };
}

function eligibility(org, title, cat) {
  if (cat === 'childcare') return `${org}内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方`;
  if (cat === 'medical') return `${org}内で医療・健康支援の公式対象要件を満たす方`;
  if (cat === 'housing') return `${org}内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方`;
  if (cat === 'education') return `${org}内の児童生徒・学生・保護者等で公式要件を満たす方`;
  if (cat === 'employment') return `${org}内の事業者・就労者・農林業者・団体等で公式の補助対象要件を満たす方`;
  if (cat === 'nursing') return `${org}内の障がい者・児童・福祉サービス対象者等で公式要件を満たす方`;
  return `${org}内の対象者・世帯・団体等で公式要件を満たす方`;
}

function application(text, title) {
  const titleHead = title.replace(/[（(].*$/, '').slice(0, 12);
  const start = Math.max(0, text.indexOf(titleHead));
  const body = start > 0 ? text.slice(start) : text;
  const date = body.match(/20\d{2}年\d{1,2}月\d{1,2}日|令和[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/g)?.[0];
  const deadline = body.match(/(?:締切|期限|受付期間|申請期間|募集期間|申請|募集|受付)[^。．]{0,90}/)?.[0];
  const sentence = deadline || body.slice(0, 110);
  return `${date ? `${date} ` : ''}${sentence}`.slice(0, 140);
}

async function fetchText(url) {
  const res = await fetch(url, { redirect: 'follow' });
  const html = await res.text();
  return { status: res.status, finalUrl: res.url, text: stripHtml(html) };
}

const entries = [];
let index = 1;
for (const [org, rawTitle, url] of selections) {
  const fetched = await fetchText(url).catch((error) => ({ status: 0, finalUrl: url, text: String(error) }));
  const cat = category(rawTitle);
  const amount = maxAmount(rawTitle, fetched.text);
  const cleanTitle = rawTitle.replace(/^令和[0-9０-９]+年度\s*/, '');
  entries.push({
    slug: `shimane-official-002-${String(index).padStart(3, '0')}-2026`,
    title: `${org} ${cleanTitle}`,
    organization: org,
    maxAmount: amount.text,
    maxAmountNum: amount.num,
    category: cat,
    relatedCategories: related(rawTitle, cat),
    eligibility: eligibility(org, rawTitle, cat),
    applicationPeriod: application(fetched.text, rawTitle),
    officialUrl: url,
    sourceName: rawTitle,
    officialStatus: fetched.status,
    finalUrl: fetched.finalUrl,
    snippet: fetched.text.slice(0, 240),
    municipalityCode: cityDefaults[org].code,
  });
  index += 1;
}

const dataEntries = entries.map(({ officialStatus, finalUrl, snippet, municipalityCode, ...entry }) => entry);
const ts = `const shimaneOfficial002Grants: Array<{\n  slug: string;\n  title: string;\n  organization: string;\n  maxAmount: string;\n  maxAmountNum: number;\n  category: Grant['category'];\n  relatedCategories?: Grant['relatedCategories'];\n  eligibility: string;\n  applicationPeriod: string;\n  officialUrl: string;\n  sourceName: string;\n}> = ${JSON.stringify(dataEntries, null, 2)};\n`;

fs.writeFileSync(`${outBase}-adopted.json`, JSON.stringify(entries, null, 2));
fs.writeFileSync(`${outBase}-adopted.tsv`, ['code\torganization\tslug\ttitle\tcategory\tstatus\tofficialUrl\tsnippet', ...entries.map((entry) => `${entry.municipalityCode}\t${entry.organization}\t${entry.slug}\t${entry.title}\t${entry.category}\t${entry.officialStatus}\t${entry.officialUrl}\t${entry.snippet.replace(/\t/g, ' ').slice(0, 180)}`)].join('\n'));
fs.writeFileSync(`${outBase}-ts-snippet.ts`, ts);

const counts = entries.reduce((acc, entry) => {
  acc[entry.organization] = (acc[entry.organization] || 0) + 1;
  return acc;
}, {});
console.log(JSON.stringify({ adopted: entries.length, counts, non200: entries.filter((entry) => entry.officialStatus < 200 || entry.officialStatus >= 400).map((entry) => [entry.slug, entry.officialStatus, entry.officialUrl]) }, null, 2));
