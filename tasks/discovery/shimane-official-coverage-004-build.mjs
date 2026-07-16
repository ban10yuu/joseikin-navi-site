import fs from 'node:fs';

const outBase = 'tasks/discovery/shimane-official-coverage-004';

const selections = [
  ['海士町', '断熱DIY促進支援事業補助金', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/kurashi/jutaku/v3o5t461az'],
  ['海士町', '再生可能エネルギー設備等設置費補助金', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/kurashi/jutaku/comh7nlptu'],
  ['海士町', '使用済自動車等海上輸送費補助金', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/kurashi/jutaku/lpu9tc1zm4'],
  ['海士町', 'しゃばらんかい補助金', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/kurashi/machidukuri/76s3bydfzk'],
  ['海士町', '令和7年度しゃばらんかい補助金', 'https://www.town.ama.shimane.jp/information/784'],
  ['海士町', '海士町高齢者等交通費助成事業', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/iryo-kenko-fukushi/fukushi/qdpi5rdnoe'],
  ['海士町', '特別障害者手当・特別児童扶養手当・障害児福祉手当', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/iryo-kenko-fukushi/fukushi/f73jud4wml'],
  ['海士町', '新生児聴覚検査費用助成', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/kosodate-kyoiku/kosodate/f2nn956owd'],
  ['海士町', '児童手当', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/kosodate-kyoiku/jido-teate/tpvsq6ekkq'],
  ['海士町', '児童扶養手当', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/kosodate-kyoiku/jido-teate/so9d5b82q7'],
  ['海士町', '風しん予防接種費用助成', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/iryo-kenko-fukushi/kenko/lllgu04dnd'],
  ['海士町', '福祉医療及び更生医療', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/iryo-kenko-fukushi/fukushi/v3itmkol1b'],
  ['海士町', '海士町雇用機会拡充事業補助金', 'https://www.town.ama.shimane.jp/kurashi-tetsuduki/sangyo-jigyosha/kanko-shoko/w7xnfpc5d1'],
  ['海士町', '令和8年度海士町雇用機会拡充事業補助金', 'https://www.town.ama.shimane.jp/information/787'],

  ['西ノ島町', '妊婦・産婦・乳児健康診査', 'https://www.town.nishinoshima.shimane.jp/josei/25'],
  ['西ノ島町', '西ノ島町土砂災害被災者支援補助金', 'https://www.town.nishinoshima.shimane.jp/josei/1118'],
  ['西ノ島町', '使用済自動車の海上輸送補助金', 'https://www.town.nishinoshima.shimane.jp/josei/405'],
  ['西ノ島町', '生ごみ処理機購入補助', 'https://www.town.nishinoshima.shimane.jp/josei/404'],
  ['西ノ島町', '障がい者の福祉サービス', 'https://www.town.nishinoshima.shimane.jp/josei/52'],
  ['西ノ島町', '子育て支援対策', 'https://www.town.nishinoshima.shimane.jp/josei/32'],
  ['西ノ島町', '町営住宅の高額家賃に対する助成', 'https://www.town.nishinoshima.shimane.jp/josei/15'],
  ['西ノ島町', 'チャイルドシート助成', 'https://www.town.nishinoshima.shimane.jp/josei/13'],
  ['西ノ島町', 'U・Iターン者就業支援金', 'https://www.town.nishinoshima.shimane.jp/teiju/lifestyle/izyu-shien/1264'],
  ['西ノ島町', 'わくわく西ノ島生活実現支援事業', 'https://www.town.nishinoshima.shimane.jp/teiju/lifestyle/izyu-shien/1271'],
  ['西ノ島町', '企業進出補助制度', 'https://www.town.nishinoshima.shimane.jp/kigyoushinshutu/'],

  ['知夫村', '子育て支援助成制度一覧', 'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs03/485'],
  ['知夫村', '通院のための交通費助成一覧', 'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs06/412'],
  ['知夫村', '雇用機会拡充事業補助金', 'https://www.vill.chibu.lg.jp/gyosei/organization/soshiki/org-kanko/237'],
  ['知夫村', '保育料軽減・保育料無償化', 'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs03/135'],
  ['知夫村', '各種手続き 医療費助成', 'https://www.vill.chibu.lg.jp/gyosei/life/lifestage/ls06/88'],
  ['知夫村', '物価高対応子育て応援手当', 'https://www.vill.chibu.lg.jp/gyosei/info-all/info-oshirase/503'],
  ['知夫村', '臨時福祉給付金', 'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs06/44'],
  ['知夫村', '子育て世帯臨時特例給付金', 'https://www.vill.chibu.lg.jp/gyosei/life/needs/needs03/43'],

  ['隠岐の島町', '旧村地域Uターン同居・近居移住支援金', 'https://www.town.okinoshima.shimane.jp/soshiki/chikishinko/gyomu/3/2/2/101.html'],
  ['隠岐の島町', '空家等改修・再生事業補助金', 'https://www.town.okinoshima.shimane.jp/soshiki/chikishinko/gyomu/3/2/2/224.html'],
  ['隠岐の島町', 'ふるさと定住奨励金', 'https://www.town.okinoshima.shimane.jp/soshiki/chikishinko/gyomu/3/2/2/680.html'],
  ['隠岐の島町', '空家クリーニング事業補助金', 'https://www.town.okinoshima.shimane.jp/soshiki/chikishinko/gyomu/3/2/2/1271.html'],
  ['隠岐の島町', 'わくわく島根生活実現支援事業移住支援金', 'https://www.town.okinoshima.shimane.jp/soshiki/chikishinko/gyomu/3/2/2/1066.html'],
  ['隠岐の島町', 'UIターン支援制度', 'https://www.town.okinoshima.shimane.jp/kurashi/iju-teiju/ui_turn/4790.html'],
  ['隠岐の島町', 'UIターン促進事業補助金', 'https://www.town.okinoshima.shimane.jp/kurashi/iju-teiju/ui_turn/5184.html'],
  ['隠岐の島町', '空家活用助成制度', 'https://www.town.okinoshima.shimane.jp/ijyu/joseiseido/index.html'],
  ['隠岐の島町', '子育て支援制度', 'https://www.town.okinoshima.shimane.jp/soshiki/chikishinko/gyomu/3/2/465.html'],
  ['隠岐の島町', '子ども等医療費助成制度', 'https://www.town.okinoshima.shimane.jp/iryo-kenko-fukushi/iryo/5193.html'],
  ['隠岐の島町', '隠岐の島町福祉医療助成制度', 'https://www.town.okinoshima.shimane.jp/iryo-kenko-fukushi/iryo/6309.html'],
  ['隠岐の島町', '低所得世帯緊急支援給付金', 'https://www.town.okinoshima.shimane.jp/iryo-kenko-fukushi/chiiki_fukushi/8586.html'],
  ['隠岐の島町', '児童手当', 'https://www.town.okinoshima.shimane.jp/iryo-kenko-fukushi/kodomo_fukushi/jido_teate/index.html'],
  ['隠岐の島町', '児童手当について', 'https://www.town.okinoshima.shimane.jp/soshiki/hokenfukushi/gyomu/7/1/403.html'],
  ['隠岐の島町', '児童扶養手当', 'https://www.town.okinoshima.shimane.jp/iryo-kenko-fukushi/kodomo_fukushi/jido_fuyo_teate/index.html'],
  ['隠岐の島町', '特別児童扶養手当', 'https://www.town.okinoshima.shimane.jp/soshiki/hokenfukushi_juminfukushi/gyomu/8/4/98.html'],
  ['隠岐の島町', '国民健康保険で受けられる給付', 'https://www.town.okinoshima.shimane.jp/iryo-kenko-fukushi/kokumin_kenko_hoken/4835.html'],
  ['隠岐の島町', '外医療機関等人間ドック特定健診分費用助成', 'https://www.town.okinoshima.shimane.jp/iryo-kenko-fukushi/kokumin_kenko_hoken/4854.html'],
  ['隠岐の島町', '小・中学校の特別支援教育就学奨励費', 'https://www.town.okinoshima.shimane.jp/kosodate-kyoiku/gakko/6196.html'],
  ['隠岐の島町', '店舗等魅力化向上支援事業費補助金', 'https://www.town.okinoshima.shimane.jp/sangyo-business/kigyo_shinko/4458.html'],
  ['隠岐の島町', '企業の採用活動支援事業', 'https://www.town.okinoshima.shimane.jp/sangyo-business/koyo/5178.html'],
  ['隠岐の島町', '自治体ポイント物価高騰対策電子マネー交付事業', 'https://www.town.okinoshima.shimane.jp/soshiki/shokokanko/gyomu/16/7302.html'],
  ['隠岐の島町', '生ごみ処理機導入補助制度', 'https://www.town.okinoshima.shimane.jp/soshiki/kankyo/gyomu/1/1/599.html'],
  ['隠岐の島町', '太陽光発電システム等導入補助金', 'https://www.town.okinoshima.shimane.jp/soshiki/energytaisaku/gyomu/4/2839.html'],
  ['隠岐の島町', '全国大会等出場支援補助金', 'https://www.town.okinoshima.shimane.jp/soshiki/shakaikyoiku/gyomu/1/1537.html'],
  ['隠岐の島町', '福祉施設職員就労支援助成金', 'https://www.town.okinoshima.shimane.jp/soshiki/hokenfukushi_juminfukushi/gyomu/2/1/1117.html'],
  ['隠岐の島町', '定住奨学資金貸与条例', 'https://www.town.okinoshima.shimane.jp/section/reiki_int/reiki_honbun/r074RG00000076.html'],
];

const codes = {
  '海士町': '32525',
  '西ノ島町': '32526',
  '知夫村': '32527',
  '隠岐の島町': '32528',
};

const fallbackEvidence = {
  '知夫村 子育て支援助成制度一覧': '知夫村には、出産宿泊費、出産一時金、18歳までの医療費など様々な子育て支援助成制度がある。',
  '知夫村 通院のための交通費助成一覧': '子育て家庭や島前以外の医療機関で治療が必要な方の経済的負担を軽減するため交通費を助成。',
  '知夫村 雇用機会拡充事業補助金': '雇用増を伴う創業または事業拡大を行う民間事業者に補助金を交付。',
  '知夫村 保育料軽減・保育料無償化': '母子・父子世帯、在宅障害者のいる世帯などの減免制度と保育料無償化を案内。',
  '知夫村 各種手続き 医療費助成': '小児・ひとり親・障害者医療費助成の手続き窓口を公式に掲載。',
  '知夫村 物価高対応子育て応援手当': '物価高対応の子育て応援手当給付を公式お知らせで案内。',
  '知夫村 臨時福祉給付金': '臨時福祉給付金の支給対象・申請を公式ページで案内。',
  '知夫村 子育て世帯臨時特例給付金': '児童手当受給者等を対象に子育て世帯臨時特例給付金を公式ページで案内。',
};

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

async function fetchPage(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 official-coverage-check' },
    });
    return { status: response.status, url: response.url, text: stripHtml(await response.text()) };
  } catch (error) {
    return { status: 0, url, text: '', error: String(error?.message || error) };
  } finally {
    clearTimeout(timeout);
  }
}

function category(title) {
  if (/医療|不妊|妊婦|産婦|乳児|健診|予防接種|健康|人間ドック/.test(title)) return 'medical';
  if (/児童|子ども|子育て|母子|父子|保育|チャイルド|新生児/.test(title)) return 'childcare';
  if (/住宅|空き家|空家|住居|定住|移住|賃貸|断熱|再生可能|太陽光/.test(title)) return 'housing';
  if (/奨学|通学|就学|教育|大会/.test(title)) return 'education';
  if (/障害|障がい|福祉|介護|高齢/.test(title)) return 'nursing';
  if (/創業|起業|商業|中小|事業者|雇用|就労|就業|採用|農業|林業|水産|店舗|企業/.test(title)) return 'employment';
  return 'living';
}

function related(title, cat) {
  const values = [];
  const add = (value) => { if (value !== cat && !values.includes(value)) values.push(value); };
  if (/児童|子ども|子育て|妊婦|母子|父子|保育|新生児/.test(title)) add('childcare');
  if (/医療|健康|不妊|福祉|健診/.test(title)) add('medical');
  if (/住宅|空き家|空家|定住|移住|断熱|太陽光/.test(title)) add('housing');
  if (/奨学|通学|教育|大会/.test(title)) add('education');
  if (/商業|事業|雇用|就労|就業|採用|創業|企業/.test(title)) add('employment');
  if (/障害|障がい|介護|福祉|高齢/.test(title)) add('nursing');
  add('living');
  return values.slice(0, 3);
}

function maxAmount(title, text) {
  const haystack = `${title} ${text}`;
  const m = haystack.match(/(?:上限|最大|限度額|月額|年額|1世帯(?:あたり)?|1人(?:あたり)?|基本額|助成額)[^。．]{0,45}?([0-9０-９,，.]+)\s*(万円|円)/);
  if (m) {
    const num = Number.parseFloat(m[1].replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)).replace(/[，,]/g, ''));
    return { text: m[0].replace(/\s+/g, ''), num: Number.isFinite(num) ? Math.round(num * (m[2] === '万円' ? 10000 : 1)) : 0 };
  }
  if (/医療費/.test(title)) return { text: '医療費の自己負担分等を助成', num: 0 };
  if (/手当/.test(title)) return { text: '所得・対象区分に応じて手当を支給', num: 0 };
  if (/奨学|貸与|貸付/.test(title)) return { text: '公式ページ記載の奨学金・貸付額', num: 0 };
  if (/減免/.test(title)) return { text: '公式ページ記載の軽減・減免', num: 0 };
  if (/給付金|支援金|奨励金/.test(title)) return { text: '公式ページ記載の給付額・支援額', num: 0 };
  return { text: '公式ページ記載の補助率・上限額または支援内容に従う', num: 0 };
}

function eligibility(org, title, cat) {
  if (cat === 'childcare') return `${org}内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方`;
  if (cat === 'medical') return `${org}内で医療・健康支援の公式対象要件を満たす方`;
  if (cat === 'housing') return `${org}内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方`;
  if (cat === 'education') return `${org}内の児童生徒・学生・保護者・文化体育活動者等で公式要件を満たす方`;
  if (cat === 'employment') return `${org}内の事業者・就労者・農林水産業者・団体等で公式の補助対象要件を満たす方`;
  if (cat === 'nursing') return `${org}内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方`;
  return `${org}内の対象者・世帯・団体等で公式要件を満たす方`;
}

function application(text, title) {
  const body = text || title;
  const date = body.match(/20\d{2}年\d{1,2}月\d{1,2}日|令和[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/)?.[0];
  const phrase = body.match(/(?:申請|募集|受付|締切|期限|交付|支給|請求)[^。．]{0,95}/)?.[0] || body.slice(0, 110);
  return `${date ? `${date} ` : ''}${phrase}`.slice(0, 140);
}

const entries = [];
let index = 1;
for (const [org, rawTitle, url] of selections) {
  const page = await fetchPage(url);
  const fallback = fallbackEvidence[`${org} ${rawTitle}`] || '';
  const evidenceText = page.text || fallback;
  const cat = category(rawTitle);
  const amount = maxAmount(rawTitle, evidenceText);
  entries.push({
    slug: `shimane-official-004-${String(index).padStart(3, '0')}-2026`,
    title: `${org} ${rawTitle}`,
    organization: org,
    maxAmount: amount.text,
    maxAmountNum: amount.num,
    category: cat,
    relatedCategories: related(rawTitle, cat),
    eligibility: eligibility(org, rawTitle, cat),
    applicationPeriod: application(evidenceText, rawTitle),
    officialUrl: page.url,
    sourceName: rawTitle,
    officialStatus: page.status,
    snippet: evidenceText.slice(0, 240),
    municipalityCode: codes[org],
  });
  index += 1;
}

const dataEntries = entries.map(({ officialStatus, snippet, municipalityCode, ...entry }) => entry);
fs.writeFileSync(`${outBase}-adopted.json`, JSON.stringify(entries, null, 2));
fs.writeFileSync(`${outBase}-adopted.tsv`, ['code\torganization\tslug\ttitle\tcategory\tstatus\tofficialUrl\tsnippet', ...entries.map((entry) => `${entry.municipalityCode}\t${entry.organization}\t${entry.slug}\t${entry.title}\t${entry.category}\t${entry.officialStatus}\t${entry.officialUrl}\t${entry.snippet.replace(/\t/g, ' ').trim()}`)].join('\n') + '\n');
fs.writeFileSync(`${outBase}-ts-snippet.ts`, `const shimaneOfficial004Grants: Array<{\\n  slug: string;\\n  title: string;\\n  organization: string;\\n  maxAmount: string;\\n  maxAmountNum: number;\\n  category: Grant['category'];\\n  relatedCategories?: Grant['relatedCategories'];\\n  eligibility: string;\\n  applicationPeriod: string;\\n  officialUrl: string;\\n  sourceName: string;\\n}> = ${JSON.stringify(dataEntries, null, 2)};\\n`.replace(/\\n/g, '\n'));

console.log(JSON.stringify({
  adopted: entries.length,
  counts: entries.reduce((acc, entry) => (acc[entry.organization] = (acc[entry.organization] || 0) + 1, acc), {}),
  non200: entries.filter((entry) => entry.officialStatus < 200 || entry.officialStatus >= 400).map((entry) => [entry.slug, entry.organization, entry.officialStatus, entry.officialUrl]),
}, null, 2));
