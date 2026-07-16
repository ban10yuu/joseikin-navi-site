import fs from 'node:fs';

const outBase = 'tasks/discovery/shimane-official-coverage-003';

const selections = [
  ['川本町', '川本町住まいづくり応援事業（空き家改修助成等）', 'https://www.town.shimane-kawamoto.lg.jp/gyosei/gyosei_environment/housing/2799'],
  ['川本町', '老朽危険空き家除却支援事業補助金', 'https://www.town.shimane-kawamoto.lg.jp/gyosei/gyosei_environment/housing/6783'],
  ['川本町', '川本町結婚支援強化補助金', 'https://www.town.shimane-kawamoto.lg.jp/gyosei/gyosei_search_info/marriage/5477'],
  ['川本町', '妊婦健康診査費用補助', 'https://www.town.shimane-kawamoto.lg.jp/gyosei/gyosei_search_info/giving_birth/2644'],
  ['川本町', '福祉医療費助成条例', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000273.html'],
  ['川本町', '子ども等医療費助成条例', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000306.html'],
  ['川本町', '妊婦支援給付金事業', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00001095.html'],
  ['川本町', '妊婦健診時交通費助成金', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00001101.html'],
  ['川本町', 'チャイルドシート助成金', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000310.html'],
  ['川本町', '高等職業訓練促進給付金等事業', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000315.html'],
  ['川本町', '自立支援教育訓練給付金事業', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000871.html'],
  ['川本町', '不育症治療費等助成金', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000979.html'],
  ['川本町', '子育て支援事業補助金', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00001053.html'],
  ['川本町', '保育所保育士確保対策事業費補助金', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000903.html'],
  ['川本町', '精神障害者通院医療費助成', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000371.html'],
  ['川本町', '身体障害者自動車運転免許取得費補助金', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000369.html'],
  ['川本町', '障がい者福祉協会事業補助金', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000377.html'],
  ['川本町', '生活困窮者住居確保給付金', 'https://www.town.shimane-kawamoto.lg.jp/reiki/reiki_honbun/m137RG00000805.html'],

  ['美郷町', '支援制度', 'https://iju.town.shimane-misato.lg.jp/iju/support/'],
  ['美郷町', '子ども医療費助成', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000327.html'],
  ['美郷町', '福祉医療費助成条例', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000302.html'],
  ['美郷町', '妊婦のための支援給付事業', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00001100.html'],
  ['美郷町', '障害児福祉手当及び特別障害者手当', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000797.html'],
  ['美郷町', '母子家庭高等技能訓練促進給付金', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000755.html'],
  ['美郷町', '母子家庭自立支援教育訓練給付金', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000756.html'],
  ['美郷町', '住宅改修支援事業補助金', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000682.html'],
  ['美郷町', '骨髄バンクドナー支援事業助成金', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000994.html'],
  ['美郷町', '公共交通運賃助成事業', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000309.html'],
  ['美郷町', '就労訓練事業所等通所交通費助成', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000377.html'],
  ['美郷町', '身体障害者自動車運転免許取得・改造費助成', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000784.html'],
  ['美郷町', '重度身体障害者住宅改修費給付事業', 'https://gov.town.shimane-misato.lg.jp/reiki_int/reiki_honbun/r071RG00000676.html'],

  ['邑南町', 'LED化促進事業補助金', 'https://www.town.ohnan.lg.jp/soshiki/4/8284.html'],
  ['邑南町', '福祉医療費助成制度', 'https://www.town.ohnan.lg.jp/soshiki/5/1490.html'],
  ['邑南町', '乳幼児・子どもの医療費助成', 'https://www.town.ohnan.lg.jp/site/kosodate/1188.html'],
  ['邑南町', '民間診療所新規開設及び承継支援事業費補助金', 'https://www.town.ohnan.lg.jp/soshiki/5/1020.html'],
  ['邑南町', '太陽光発電システム等設置事業補助金', 'https://www.town.ohnan.lg.jp/soshiki/4/8569.html'],
  ['邑南町', '中小企業小規模事業者人材確保支援事業支援金', 'https://www.town.ohnan.lg.jp/soshiki/7/8398.html'],
  ['邑南町', '邑南町奨学金', 'https://www.town.ohnan.lg.jp/site/kosodate/1375.html'],
  ['邑南町', '防犯灯設置費補助金', 'https://www.town.ohnan.lg.jp/soshiki/2/1140.html'],
  ['邑南町', 'ブロック塀等安全確保事業補助金', 'https://www.town.ohnan.lg.jp/soshiki/11/1404.html'],
  ['邑南町', '萩・石見空港運賃助成金', 'https://www.town.ohnan.lg.jp/soshiki/7/8696.html'],
  ['邑南町', '除雪に関する資格取得補助金', 'https://www.town.ohnan.lg.jp/soshiki/8/1275.html'],
  ['邑南町', '自治会活動補助金', 'https://www.town.ohnan.lg.jp/soshiki/10/1176.html'],
  ['邑南町', '児童扶養手当', 'https://www.town.ohnan.lg.jp/site/kosodate/1703.html'],
  ['邑南町', '遺児育成特別手当', 'https://www.town.ohnan.lg.jp/site/kosodate/1448.html'],
  ['邑南町', '特別児童扶養手当', 'https://www.town.ohnan.lg.jp/site/kosodate/1260.html'],
  ['邑南町', '特別障害者手当・障害児福祉手当', 'https://www.town.ohnan.lg.jp/site/kosodate/1484.html'],
  ['邑南町', '河川草刈り等助成金', 'https://www.town.ohnan.lg.jp/soshiki/8/1466.html'],
  ['邑南町', '空き家に関する助成制度', 'https://www.town.ohnan.lg.jp/soshiki/11/1251.html'],
  ['邑南町', '不妊・不育症治療費等助成制度', 'https://www.town.ohnan.lg.jp/site/kosodate/list24-102.html'],

  ['津和野町', '低所得世帯緊急支援給付金', 'https://www.town.tsuwano.lg.jp/www/contents/1738215231853/index.html'],
  ['津和野町', '結婚新生活支援事業補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1649637224364/index.html'],
  ['津和野町', '老朽危険空家除却支援事業補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1653959395835/index.html'],
  ['津和野町', '福祉医療費助成制度', 'https://www.town.tsuwano.lg.jp/www/contents/1000000212000/index.html'],
  ['津和野町', '障害児福祉手当', 'https://www.town.tsuwano.lg.jp/www/contents/1668559817344/index.html'],
  ['津和野町', '特別障害者手当', 'https://www.town.tsuwano.lg.jp/www/contents/1668497414719/index.html'],
  ['津和野町', '特別児童扶養手当', 'https://www.town.tsuwano.lg.jp/www/contents/1668491192466/index.html'],
  ['津和野町', '母子家庭自立支援教育訓練給付金事業', 'https://www.town.tsuwano.lg.jp/www/contents/1000000312000/index.html'],
  ['津和野町', '高等職業訓練促進給付金', 'https://www.town.tsuwano.lg.jp/www/contents/1000000313000/index.html'],
  ['津和野町', '農業用機械導入支援価格高騰対策事業補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1743577502425/index.html'],
  ['津和野町', '津和野町商業等支援事業費補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1562569410016/index.html'],
  ['津和野町', 'バス待合所設置費補助金', 'https://www1.g-reiki.net/tsuwano/reiki_honbun/r129RG00000847.html'],
  ['津和野町', '萩・石見空港利用促進助成事業補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1773817071923/index.html'],
  ['津和野町', '津和野高等学校通学費等補助金', 'https://www1.g-reiki.net/tsuwano/reiki_honbun/r129RG00001402.html'],
  ['津和野町', '省エネ家電購入費支援事業補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1772852060441/index.html'],
  ['津和野町', '再生可能エネルギー設備等導入補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1648860056109/index.html'],
  ['津和野町', 'ケーブルテレビ機器設置補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1743642271418/index.html'],
  ['津和野町', '山口線利用促進事業補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1718669550503/index.html'],
  ['津和野町', '未来づくり活動支援事業補助金', 'https://www.town.tsuwano.lg.jp/www/contents/1652841103113/index.html'],
  ['津和野町', '遺児手当', 'https://www.town.tsuwano.lg.jp/www/contents/1000000210000/index.html'],
  ['津和野町', '子ども等医療費助成', 'https://www.town.tsuwano.lg.jp/www/contents/1000000253000/index.html'],
  ['津和野町', '妊婦のための支援給付', 'https://www.town.tsuwano.lg.jp/www/contents/1674191163887/index.html'],
  ['津和野町', '妊婦健診等通院費助成', 'https://www.town.tsuwano.lg.jp/www/contents/1355614661385/index.html'],

  ['吉賀町', '地域農業維持発展支援事業費補助金', 'https://www.town.yoshika.lg.jp/sangyou/nougyou/chiikinougyouijihattennshien.html'],
  ['吉賀町', '空き家関係補助金', 'https://www.town.yoshika.lg.jp/iju/stay/akiyabank/hojokin.html'],
  ['吉賀町', '新規雇用促進助成金', 'https://www.town.yoshika.lg.jp/sangyou/sinkikoyou/sinkikoyou.html'],
  ['吉賀町', '民間賃貸住宅等建設補助金', 'https://www.town.yoshika.lg.jp/sangyou/minkanchintaijyutaku/minkanchintaijyutaku.html'],
  ['吉賀町', '医療費助成制度', 'https://www.town.yoshika.lg.jp/kurashi/fukushi/iryouhi/iryouhi.html'],
  ['吉賀町', '奨学金制度', 'https://www.town.yoshika.lg.jp/kurashi/kyouiku/shougakukin/'],
  ['吉賀町', '商工関係補助金', 'https://www.town.yoshika.lg.jp/sangyou/syoukou/shoukoukannkeihojokinn/'],
  ['吉賀町', '障がい者福祉', 'https://www.town.yoshika.lg.jp/kurashi/fukushi/shougaishafukushi/shogaisyafukushi.html'],
];

const codes = {
  '川本町': '32441',
  '美郷町': '32448',
  '邑南町': '32449',
  '津和野町': '32501',
  '吉賀町': '32505',
};

function stripHtml(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

function category(title) {
  if (/医療|不妊|妊婦|産科|骨髄|健康/.test(title)) return 'medical';
  if (/児童|子ども|子育て|母子|父子|ひとり親|保育|チャイルド/.test(title)) return 'childcare';
  if (/住宅|空き家|空家|住居|定住|移住|賃貸/.test(title)) return 'housing';
  if (/奨学|通学|就学|教育|高校/.test(title)) return 'education';
  if (/障害|障がい|福祉|介護|高齢/.test(title)) return 'nursing';
  if (/創業|起業|商業|中小|事業者|雇用|就労|就農|農業|林業|診療所|保育士/.test(title)) return 'employment';
  if (/災|防災|防犯|交通|エネルギー|LED|太陽光|河川|除雪|空港|山口線|ケーブル/.test(title)) return 'living';
  return 'living';
}

function related(title, cat) {
  const values = [];
  const add = (v) => { if (v !== cat && !values.includes(v)) values.push(v); };
  if (/児童|子ども|子育て|妊婦|母子|父子|保育/.test(title)) add('childcare');
  if (/医療|健康|不妊|福祉/.test(title)) add('medical');
  if (/住宅|空き家|空家|住居|定住|移住/.test(title)) add('housing');
  if (/奨学|通学|教育|高校/.test(title)) add('education');
  if (/商業|事業|雇用|就労|農業|林業|創業|診療所/.test(title)) add('employment');
  if (/障害|障がい|介護|福祉/.test(title)) add('nursing');
  if (/補助|助成|給付|支援|手当|貸付|減免/.test(title)) add('living');
  return values.slice(0, 3);
}

function maxAmount(title, text) {
  if (/医療費|福祉医療/.test(title)) return { text: '医療費の自己負担分等を助成', num: 0 };
  const m = `${title} ${text}`.match(/(?:上限|最大|限度額|月額|年額|1世帯(?:あたり)?|1人(?:あたり)?)[^。．]{0,45}?([0-9０-９,，.]+)\s*(万円|円)/);
  if (m) {
    const num = Number.parseFloat(m[1].replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)).replace(/[，,]/g, ''));
    return { text: m[0].replace(/\s+/g, ''), num: Number.isFinite(num) ? Math.round(num * (m[2] === '万円' ? 10000 : 1)) : 0 };
  }
  if (/手当/.test(title)) return { text: '所得・対象区分に応じて手当を支給', num: 0 };
  if (/奨学|貸付/.test(title)) return { text: '公式ページ記載の奨学金・貸付額', num: 0 };
  if (/減免/.test(title)) return { text: '公式ページ記載の税額軽減・減免', num: 0 };
  if (/給付金|支援金/.test(title)) return { text: '公式ページ記載の給付額・支援額', num: 0 };
  return { text: '公式ページ記載の補助率・上限額または支援内容に従う', num: 0 };
}

function eligibility(org, title, cat) {
  if (cat === 'childcare') return `${org}内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方`;
  if (cat === 'medical') return `${org}内で医療・健康支援の公式対象要件を満たす方`;
  if (cat === 'housing') return `${org}内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方`;
  if (cat === 'education') return `${org}内の児童生徒・学生・保護者等で公式要件を満たす方`;
  if (cat === 'employment') return `${org}内の事業者・就労者・農林業者・団体等で公式の補助対象要件を満たす方`;
  if (cat === 'nursing') return `${org}内の障がい者・福祉サービス対象者・福祉団体等で公式要件を満たす方`;
  return `${org}内の対象者・世帯・団体等で公式要件を満たす方`;
}

function application(text, title) {
  const head = title.replace(/[（(].*$/, '').slice(0, 12);
  const start = Math.max(0, text.indexOf(head));
  const body = start > 0 ? text.slice(start) : text;
  const date = body.match(/20\d{2}年\d{1,2}月\d{1,2}日|令和[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/)?.[0];
  const phrase = body.match(/(?:申請|募集|受付|締切|期限|交付|支給)[^。．]{0,95}/)?.[0] || body.slice(0, 110);
  return `${date ? `${date} ` : ''}${phrase}`.slice(0, 140);
}

const entries = [];
let index = 1;
for (const [org, rawTitle, url] of selections) {
  const response = await fetch(url, { redirect: 'follow' }).catch(() => null);
  const html = response ? await response.text() : '';
  const text = stripHtml(html);
  const cat = category(rawTitle);
  const amount = maxAmount(rawTitle, text);
  entries.push({
    slug: `shimane-official-003-${String(index).padStart(3, '0')}-2026`,
    title: `${org} ${rawTitle.replace(/^川本町|^美郷町|^邑南町|^津和野町|^吉賀町/, '')}`,
    organization: org,
    maxAmount: amount.text,
    maxAmountNum: amount.num,
    category: cat,
    relatedCategories: related(rawTitle, cat),
    eligibility: eligibility(org, rawTitle, cat),
    applicationPeriod: application(text, rawTitle),
    officialUrl: response?.url || url,
    sourceName: rawTitle,
    officialStatus: response?.status || 0,
    snippet: text.slice(0, 240),
    municipalityCode: codes[org],
  });
  index += 1;
}

const dataEntries = entries.map(({ officialStatus, snippet, municipalityCode, ...entry }) => entry);
fs.writeFileSync(`${outBase}-adopted.json`, JSON.stringify(entries, null, 2));
fs.writeFileSync(`${outBase}-adopted.tsv`, ['code\torganization\tslug\ttitle\tcategory\tstatus\tofficialUrl\tsnippet', ...entries.map((entry) => `${entry.municipalityCode}\t${entry.organization}\t${entry.slug}\t${entry.title}\t${entry.category}\t${entry.officialStatus}\t${entry.officialUrl}\t${entry.snippet.replace(/\t/g, ' ').trim()}`)].join('\n') + '\n');
fs.writeFileSync(`${outBase}-ts-snippet.ts`, `const shimaneOfficial003Grants: Array<{\\n  slug: string;\\n  title: string;\\n  organization: string;\\n  maxAmount: string;\\n  maxAmountNum: number;\\n  category: Grant['category'];\\n  relatedCategories?: Grant['relatedCategories'];\\n  eligibility: string;\\n  applicationPeriod: string;\\n  officialUrl: string;\\n  sourceName: string;\\n}> = ${JSON.stringify(dataEntries, null, 2)};\\n`);

console.log(JSON.stringify({
  adopted: entries.length,
  counts: entries.reduce((acc, entry) => (acc[entry.organization] = (acc[entry.organization] || 0) + 1, acc), {}),
  non200: entries.filter((entry) => entry.officialStatus < 200 || entry.officialStatus >= 400).map((entry) => [entry.slug, entry.officialStatus, entry.officialUrl]),
}, null, 2));
