import fs from 'node:fs';

const outBase = 'tasks/discovery/okayama-official-coverage-001';

const selections = [
  ['岡山市', '岡山市移住支援補助金', 'https://www.city.okayama.jp/kurashi/0000080956.html'],
  ['岡山市', '令和7年度岡山市物価高騰対応定額給付金', 'https://www.city.okayama.jp/kurashi/0000077415.html'],
  ['岡山市', '令和7年度物価高対応子育て応援手当', 'https://www.city.okayama.jp/kurashi/0000077146.html'],
  ['岡山市', '児童手当', 'https://www.city.okayama.jp/kurashi/0000011381.html'],
  ['岡山市', '児童扶養手当', 'https://www.city.okayama.jp/kurashi/0000011272.html'],
  ['岡山市', '子ども医療費助成制度', 'https://www.city.okayama.jp/kurashi/0000004319.html'],
  ['岡山市', 'ひとり親家庭等医療費助成制度', 'https://www.city.okayama.jp/kurashi/0000004310.html'],
  ['岡山市', '不妊治療費助成事業', 'https://www.city.okayama.jp/kurashi/0000072220.html'],
  ['岡山市', '不育症治療費助成事業', 'https://www.city.okayama.jp/kurashi/0000023658.html'],
  ['岡山市', '小児医療助成制度', 'https://www.city.okayama.jp/kurashi/0000067843.html'],
  ['岡山市', '自立支援医療（育成医療）', 'https://www.city.okayama.jp/kurashi/0000015207.html'],
  ['岡山市', '生活困窮世帯受験料等支援金ひとり親家庭分給付事業', 'https://www.city.okayama.jp/kurashi/0000059666.html'],
  ['岡山市', '養育費履行確保支援', 'https://www.city.okayama.jp/kurashi/0000029999.html'],
  ['岡山市', 'ひとり親家庭高等学校卒業程度認定試験合格支援事業', 'https://www.city.okayama.jp/kurashi/0000056202.html'],
  ['岡山市', '母子及び父子家庭高等職業訓練促進給付金', 'https://www.city.okayama.jp/kurashi/0000010966.html'],
  ['岡山市', '母子・父子・寡婦福祉資金貸付金', 'https://www.city.okayama.jp/kurashi/0000010949.html'],
  ['岡山市', '母子及び父子家庭自立支援教育訓練給付金', 'https://www.city.okayama.jp/kurashi/0000011367.html'],
  ['岡山市', '岡山市事業承継支援補助金', 'https://www.city.okayama.jp/jigyosha/0000081398.html'],
  ['岡山市', 'ＩｏＴ・ＡＩ等先端技術導入支援補助金（事前検証事業）', 'https://www.city.okayama.jp/jigyosha/0000081277.html'],
  ['岡山市', 'ＩｏＴ・ＡＩ等先端技術導入支援補助金（検証済み先端技術導入事業）', 'https://www.city.okayama.jp/jigyosha/0000081279.html'],
  ['岡山市', '岡山市製造業等販路拡張支援事業（見本市出展補助）', 'https://www.city.okayama.jp/jigyosha/0000077981.html'],
  ['岡山市', '岡山市省エネ機器更新緊急支援補助金', 'https://www.city.okayama.jp/jigyosha/0000078177.html'],
  ['岡山市', '岡山市地域商業グループ活動支援事業', 'https://www.city.okayama.jp/jigyosha/0000035883.html'],
  ['岡山市', '岡山市産農産物ブランド力向上チャレンジ事業補助金', 'https://www.city.okayama.jp/jigyosha/0000009532.html'],

  ['倉敷市', '物価高対策臨時給付金', 'https://www.city.kurashiki.okayama.jp/fukushi/welfare/1023219/1023220.html'],
  ['倉敷市', '物価高対応子育て応援手当', 'https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1023030/index.html'],
  ['倉敷市', '児童手当', 'https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1004160/index.html'],
  ['倉敷市', '児童扶養手当', 'https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1004166/index.html'],
  ['倉敷市', '特別児童扶養手当', 'https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1004171.html'],
  ['倉敷市', '児童福祉年金', 'https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1004172.html'],
  ['倉敷市', '妊婦支援給付金', 'https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1016624.html'],
  ['倉敷市', '子ども医療費の助成', 'https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004720.html'],
  ['倉敷市', 'ひとり親家庭等医療費の助成', 'https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004721.html'],
  ['倉敷市', '重度障がい者医療費の助成', 'https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004722.html'],
  ['倉敷市', '特定医療費（指定難病）', 'https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004832/1011398.html'],
  ['倉敷市', '移住支援金', 'https://www.city.kurashiki.okayama.jp/culture/tourism/1002101/1011818/1010764.html'],
  ['倉敷市', '移住等希望者支援交通費補助金', 'https://www.city.kurashiki.okayama.jp/culture/tourism/1002101/1011818/1002114.html'],
  ['倉敷市', '社会福祉施設等整備助成事業', 'https://www.city.kurashiki.okayama.jp/fukushi/welfare/1004016/index.html'],

  ['津山市', '令和8年度津山市家計応援給付金', 'https://www.city.tsuyama.lg.jp/article?articleId=695ded7adf10bd4effb59d77'],
  ['津山市', '手当・助成（日常生活用具、補装具ほか）', 'https://www.city.tsuyama.lg.jp/article?articleId=65cc692b972b0a1c8091e480'],
  ['津山市', '津山市多子世帯応援給付金', 'https://www.city.tsuyama.lg.jp/article?articleId=65b39de6dd20c401ef318ba7'],
  ['津山市', '移住支援金', 'https://www.city.tsuyama.lg.jp/article?articleId=65b398d1f6ce953f748ccc84'],
  ['津山市', '児童手当', 'https://www.city.tsuyama.lg.jp/article?articleId=65b38e515677ea07dd03ad00'],
  ['津山市', '児童扶養手当', 'https://www.city.tsuyama.lg.jp/article?articleId=65b3965c319ffe392a80697c'],
  ['津山市', '子ども医療費公費負担制度', 'https://www.city.tsuyama.lg.jp/article?articleId=65b394ff319ffe392a8067d0'],
  ['津山市', 'ひとり親家庭等医療', 'https://www.city.tsuyama.lg.jp/article?articleId=65b38ffb5677ea07dd03af3a'],
  ['津山市', '母子家庭等自立支援教育訓練給付金', 'https://www.city.tsuyama.lg.jp/article?articleId=65b3965f319ffe392a806980'],
  ['津山市', '高等職業訓練促進給付金等事業', 'https://www.city.tsuyama.lg.jp/article?articleId=65b38f9b5677ea07dd03aeba'],
  ['津山市', '養育費確保支援事業（公正証書等作成補助事業）', 'https://www.city.tsuyama.lg.jp/article?articleId=65b39d4edd20c401ef318af5'],
  ['津山市', '養育費確保支援事業（弁護士費用一部補助事業）', 'https://www.city.tsuyama.lg.jp/article?articleId=65b3970e319ffe392a806a58'],
  ['津山市', '就学援助・特別支援教育就学奨励費', 'https://www.city.tsuyama.lg.jp/article?articleId=65b39583319ffe392a80686c'],
  ['津山市', '空き家活用定住促進事業補助金', 'https://www.city.tsuyama.lg.jp/article?articleId=65b395ba319ffe392a8068ae'],
  ['津山市', '令和8年度津山市地域材利用促進事業補助金', 'https://www.city.tsuyama.lg.jp/article?articleId=67e641f947c0d315cfe764cf'],

  ['玉野市', '物価高騰対応給付金', 'https://www.city.tamano.lg.jp/soshiki/5/53486.html'],
  ['玉野市', '妊婦のための支援給付', 'https://www.city.tamano.lg.jp/soshiki/42/32361.html'],
  ['玉野市', '結婚新生活支援事業補助金', 'https://www.city.tamano.lg.jp/soshiki/42/27442.html'],
  ['玉野市', '不妊・不育治療費助成', 'https://www.city.tamano.lg.jp/soshiki/42/16073.html'],
  ['玉野市', '初回産科受診料助成', 'https://www.city.tamano.lg.jp/soshiki/42/36236.html'],
  ['玉野市', 'こども医療費助成制度', 'https://www.city.tamano.lg.jp/soshiki/42/2027.html'],
  ['玉野市', '未熟児養育医療費給付制度', 'https://www.city.tamano.lg.jp/soshiki/42/2025.html'],
  ['玉野市', '特別児童扶養手当', 'https://www.city.tamano.lg.jp/soshiki/42/2024.html'],
  ['玉野市', '児童手当', 'https://www.city.tamano.lg.jp/soshiki/42/2028.html'],
  ['玉野市', '在宅育児手当', 'https://www.city.tamano.lg.jp/soshiki/42/39850.html'],
  ['玉野市', '児童扶養手当', 'https://www.city.tamano.lg.jp/soshiki/42/2157.html'],
  ['玉野市', '養育費確保支援事業', 'https://www.city.tamano.lg.jp/soshiki/42/46217.html'],
  ['玉野市', '高等職業訓練促進給付金', 'https://www.city.tamano.lg.jp/soshiki/42/1234.html'],
  ['玉野市', '自立支援教育訓練給付金', 'https://www.city.tamano.lg.jp/soshiki/42/1271.html'],
  ['玉野市', 'ひとり親家庭等医療費助成', 'https://www.city.tamano.lg.jp/soshiki/42/1858.html'],
  ['玉野市', '令和8年度玉野市脱炭素推進補助金', 'https://www.city.tamano.lg.jp/soshiki/12/39837.html'],
  ['玉野市', '玉野市省エネ投資促進事業補助金', 'https://www.city.tamano.lg.jp/soshiki/43/56928.html'],
  ['玉野市', '中小企業人材確保支援事業補助金', 'https://www.city.tamano.lg.jp/soshiki/43/1901.html'],
  ['玉野市', '高齢者の補聴器購入費用助成', 'https://www.city.tamano.lg.jp/site/cyoju/54565.html'],
  ['玉野市', '空き家家財処分支援事業補助金', 'https://www.city.tamano.lg.jp/soshiki/20/33163.html'],
  ['玉野市', '空き家改修事業補助制度', 'https://www.city.tamano.lg.jp/soshiki/20/1688.html'],
  ['玉野市', '空家等除却事業補助制度', 'https://www.city.tamano.lg.jp/soshiki/20/1820.html'],
  ['玉野市', '移住支援金', 'https://www.city.tamano.lg.jp/site/lifeoftamano/9010.html'],

  ['笠岡市', '笠岡市住宅リフォーム助成金', 'https://www.city.kasaoka.okayama.jp/soshiki/28/44807.html'],
  ['笠岡市', '笠岡市空き店舗等活用事業費補助金', 'https://www.city.kasaoka.okayama.jp/soshiki/30/43091.html'],
  ['笠岡市', '笠岡市不妊治療支援事業', 'https://www.city.kasaoka.okayama.jp/soshiki/24/73280.html'],
  ['笠岡市', '妊産婦医療費助成制度', 'https://www.city.kasaoka.okayama.jp/soshiki/24/43447.html'],
  ['笠岡市', '不育治療支援事業', 'https://www.city.kasaoka.okayama.jp/soshiki/24/1982.html'],
  ['笠岡市', '低所得妊婦初回産科受診料支援事業', 'https://www.city.kasaoka.okayama.jp/soshiki/24/52825.html'],
  ['笠岡市', '妊婦のための出産時交通費等支援事業', 'https://www.city.kasaoka.okayama.jp/soshiki/24/73234.html'],
  ['笠岡市', '妊婦のための支援給付', 'https://www.city.kasaoka.okayama.jp/soshiki/24/65917.html'],
  ['笠岡市', '高等職業訓練促進給付金等事業', 'https://www.city.kasaoka.okayama.jp/soshiki/24/1997.html'],
  ['笠岡市', '自立支援教育訓練給付金事業', 'https://www.city.kasaoka.okayama.jp/soshiki/24/1996.html'],
  ['笠岡市', 'ひとり親家庭自立支援事業', 'https://www.city.kasaoka.okayama.jp/soshiki/24/27471.html'],
  ['笠岡市', '児童手当', 'https://www.city.kasaoka.okayama.jp/soshiki/16/1707.html'],
  ['笠岡市', '児童扶養手当', 'https://www.city.kasaoka.okayama.jp/soshiki/24/1971.html'],
  ['笠岡市', '物価高対応子育て応援手当', 'https://www.city.kasaoka.okayama.jp/soshiki/16/71440.html'],
  ['笠岡市', '笠岡市民生活応援商品券事業', 'https://www.city.kasaoka.okayama.jp/soshiki/30/72230.html'],
  ['笠岡市', '住居確保給付金', 'https://www.city.kasaoka.okayama.jp/soshiki/20/47482.html'],
  ['笠岡市', '笠岡市スマートエネルギー導入補助金', 'https://www.city.kasaoka.okayama.jp/soshiki/18/54792.html'],
  ['笠岡市', '生ごみ処理容器購入補助金制度', 'https://www.city.kasaoka.okayama.jp/soshiki/18/1781.html'],
  ['笠岡市', '令和8年度まちなみづくり支援事業補助金', 'https://www.city.kasaoka.okayama.jp/soshiki/28/74370.html'],
  ['笠岡市', '既存建築物の安全対策（耐震関連、各種補助）', 'https://www.city.kasaoka.okayama.jp/soshiki/28/42545.html'],
  ['笠岡市', '高齢者タクシー利用助成制度', 'https://www.city.kasaoka.okayama.jp/soshiki/19/55546.html'],
  ['笠岡市', '骨髄・末梢血幹細胞ドナー等助成金', 'https://www.city.kasaoka.okayama.jp/soshiki/22/1957.html'],
  ['笠岡市', '精神障がい者入院医療費助成金', 'https://www.city.kasaoka.okayama.jp/soshiki/20/53393.html'],
  ['笠岡市', '難聴児補聴器購入費等助成', 'https://www.city.kasaoka.okayama.jp/soshiki/20/8813.html'],
];

const codes = {
  岡山市: '33100',
  倉敷市: '33202',
  津山市: '33203',
  玉野市: '33204',
  笠岡市: '33205',
};

const tsuyamaEvidence = {
  '令和8年度津山市家計応援給付金': '家計応援給付金として1人あたり5千円を支給。給付金は市が支給確認書兼申請書で案内。',
  '手当・助成（日常生活用具、補装具ほか）': '日常生活用具、補装具、特別児童扶養手当・特別障害者手当等の支給、医療費負担軽減を案内。',
  '津山市多子世帯応援給付金': '子育て世帯を対象に多子世帯応援給付金を案内。令和8年3月事業終了の受付状況を公式に掲載。',
  '移住支援金': '東京圏からの移住・就業等の要件を満たす方に移住支援金を支給。',
  '児童手当': '児童手当は偶数月に前月分までを支給し、申請・認定請求を公式に案内。',
  '児童扶養手当': '児童扶養手当は申請の翌月分から支給され、所得制限等の要件を公式に案内。',
  '子ども医療費公費負担制度': '18歳到達後最初の3月31日まで医療費助成対象を拡大した子ども医療費公費負担制度。',
  'ひとり親家庭等医療': 'ひとり親家庭の養育者と児童が保険診療を受ける際の医療費助成を案内。',
  '母子家庭等自立支援教育訓練給付金': 'ひとり親家庭の父または母が指定教育訓練講座を受講した場合、修了後に受講料の一部を支給。',
  '高等職業訓練促進給付金等事業': '20歳未満の児童を扶養するひとり親家庭の父または母を対象に、資格取得中の給付を案内。',
  '養育費確保支援事業（公正証書等作成補助事業）': 'ひとり親家庭が養育費の取り決めに係る公正証書等を作成した場合に費用の一部を助成。',
  '養育費確保支援事業（弁護士費用一部補助事業）': '養育費の請求等で弁護士事務所等を利用した場合に支払った弁護士費用の一部を助成。',
  '就学援助・特別支援教育就学奨励費': '経済的理由で小中学校への就学が困難な児童生徒に就学に必要な経費を援助。',
  '空き家活用定住促進事業補助金': '住まい情報バンク等登録空き家を購入した移住者へ購入費補助金30万円、改修費補助金60万円を限度に交付。',
  '令和8年度津山市地域材利用促進事業補助金': '市内建築関連業者等が地域材を利用する新築・改修を行う場合の補助対象者・要件を案内。',
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

function category(title) {
  if (/医療|不妊|不育|妊婦|産婦|産科|養育医療|予防接種|ドナー|人間ドック|補聴器/.test(title)) return 'medical';
  if (/児童|子ども|こども|子育て|母子|父子|ひとり親|保育|在宅育児|養育費|妊婦/.test(title)) return 'childcare';
  if (/住宅|空き家|空家|住居|定住|移住|リフォーム|耐震|まちなみ|浄化槽/.test(title)) return 'housing';
  if (/奨学|就学|教育|受験|高等学校|訓練/.test(title)) return 'education';
  if (/障害|障がい|福祉|介護|高齢|認知症/.test(title)) return 'nursing';
  if (/創業|起業|商業|中小|事業者|雇用|就労|就業|人材|設備|販路|DX|AI|IoT|農産物|店舗|承継/.test(title)) return 'employment';
  return 'living';
}

function related(title, cat) {
  const values = [];
  const add = (value) => { if (value !== cat && !values.includes(value)) values.push(value); };
  if (/児童|子ども|こども|子育て|妊婦|母子|父子|ひとり親|保育|養育/.test(title)) add('childcare');
  if (/医療|健康|不妊|福祉|補聴器|ドナー/.test(title)) add('medical');
  if (/住宅|空き家|空家|住居|定住|移住|リフォーム|耐震|浄化槽/.test(title)) add('housing');
  if (/奨学|就学|教育|訓練|受験/.test(title)) add('education');
  if (/商業|事業|雇用|就労|就業|採用|創業|企業|設備|販路|農業/.test(title)) add('employment');
  if (/障害|障がい|介護|福祉|高齢|認知症/.test(title)) add('nursing');
  add('living');
  return values.slice(0, 3);
}

function normalizeNumber(value) {
  return Number.parseFloat(value.replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)).replace(/[，,]/g, ''));
}

function maxAmount(title, text) {
  const haystack = `${title} ${text}`;
  const m = haystack.match(/(?:上限|最大|限度額|月額|年額|1世帯(?:あたり)?|1人(?:あたり)?|支給額|助成額|補助金上限額)[^。．\n]{0,70}?([0-9０-９,，.]+)\s*(万円|円)/);
  if (m) {
    const num = normalizeNumber(m[1]);
    return { text: m[0].replace(/\s+/g, ''), num: Number.isFinite(num) ? Math.round(num * (m[2] === '万円' ? 10000 : 1)) : 0 };
  }
  const direct = haystack.match(/([0-9０-９,，.]+)\s*(万円|円)(?:を|の)?(?:支給|助成|補助|交付|給付)/);
  if (direct) {
    const num = normalizeNumber(direct[1]);
    return { text: direct[0].replace(/\s+/g, ''), num: Number.isFinite(num) ? Math.round(num * (direct[2] === '万円' ? 10000 : 1)) : 0 };
  }
  if (/医療費|公費負担/.test(title)) return { text: '医療費の自己負担分等を助成', num: 0 };
  if (/手当|年金/.test(title)) return { text: '所得・対象区分に応じて手当等を支給', num: 0 };
  if (/貸付/.test(title)) return { text: '公式ページ記載の貸付額・貸付条件に従う', num: 0 };
  if (/給付金|支援金|奨励金|商品券/.test(title)) return { text: '公式ページ記載の給付額・支援額に従う', num: 0 };
  return { text: '公式ページ記載の補助率・上限額または支援内容に従う', num: 0 };
}

function eligibility(org, title, cat) {
  if (cat === 'childcare') return `${org}内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方`;
  if (cat === 'medical') return `${org}内で医療・健康支援の公式対象要件を満たす方`;
  if (cat === 'housing') return `${org}内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方`;
  if (cat === 'education') return `${org}内の児童生徒・学生・保護者・ひとり親家庭等で公式要件を満たす方`;
  if (cat === 'employment') return `${org}内の事業者・就労者・農林水産業者・団体等で公式の補助対象要件を満たす方`;
  if (cat === 'nursing') return `${org}内の高齢者・障がい者・福祉サービス対象者・福祉団体等で公式要件を満たす方`;
  return `${org}内の対象者・世帯・団体等で公式要件を満たす方`;
}

function application(text, title) {
  const body = text || title;
  const date = body.match(/20\d{2}年\d{1,2}月\d{1,2}日|令和[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/)?.[0];
  const phrase = body.match(/(?:申請|募集|受付|締切|期限|交付|支給|請求|提出)[^。．]{0,100}/)?.[0] || body.slice(0, 120);
  return `${date ? `${date} ` : ''}${phrase}`.slice(0, 150);
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
    const html = await response.text();
    const text = stripHtml(html);
    return { status: response.status, url: response.url, text };
  } catch (error) {
    return { status: 0, url, text: '', error: String(error?.message || error) };
  } finally {
    clearTimeout(timeout);
  }
}

const entries = [];
let index = 1;
for (const [org, rawTitle, url] of selections) {
  const page = await fetchPage(url);
  const fallback = org === '津山市' ? tsuyamaEvidence[rawTitle] || '' : '';
  const evidenceText = page.text && !/^津山市公式サイト/.test(page.text.slice(0, 50)) ? page.text : fallback;
  const cat = category(rawTitle);
  const amount = maxAmount(rawTitle, evidenceText);
  entries.push({
    slug: `okayama-official-001-${String(index).padStart(3, '0')}-2026`,
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
    snippet: evidenceText.slice(0, 260),
    municipalityCode: codes[org],
  });
  index += 1;
}

const dataEntries = entries.map(({ officialStatus, snippet, municipalityCode, ...entry }) => entry);
fs.writeFileSync(`${outBase}-adopted.json`, JSON.stringify(entries, null, 2));
fs.writeFileSync(`${outBase}-adopted.tsv`, ['code\torganization\tslug\ttitle\tcategory\tstatus\tofficialUrl\tsnippet', ...entries.map((entry) => `${entry.municipalityCode}\t${entry.organization}\t${entry.slug}\t${entry.title}\t${entry.category}\t${entry.officialStatus}\t${entry.officialUrl}\t${entry.snippet.replace(/\t/g, ' ').trim()}`)].join('\n') + '\n');
fs.writeFileSync(`${outBase}-ts-snippet.ts`, `const okayamaOfficial001Grants: Array<{\\n  slug: string;\\n  title: string;\\n  organization: string;\\n  maxAmount: string;\\n  maxAmountNum: number;\\n  category: Grant['category'];\\n  relatedCategories?: Grant['relatedCategories'];\\n  eligibility: string;\\n  applicationPeriod: string;\\n  officialUrl: string;\\n  sourceName: string;\\n}> = ${JSON.stringify(dataEntries, null, 2)};\\n`.replace(/\\n/g, '\n'));

console.log(JSON.stringify({
  adopted: entries.length,
  counts: entries.reduce((acc, entry) => (acc[entry.organization] = (acc[entry.organization] || 0) + 1, acc), {}),
  non200: entries.filter((entry) => entry.officialStatus < 200 || entry.officialStatus >= 400).map((entry) => [entry.slug, entry.organization, entry.officialStatus, entry.officialUrl]),
}, null, 2));
