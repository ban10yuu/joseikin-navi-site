import { Grant } from '@/lib/types';

const cities = [
  { name: '燕市', pref: '新潟県', prefix: 'tsubame-', url: 'https://www.city.tsubame.niigata.jp/', desc: '燕市は新潟県中央部に位置し、洋食器・金属加工で世界的に知られる「ものづくりのまち」です。ステンレス製品や銅器の生産で日本一のシェアを誇ります。' },
  { name: '五泉市', pref: '新潟県', prefix: 'gosen-', url: 'https://www.city.gosen.lg.jp/', desc: '五泉市は新潟県中部に位置し、チューリップとぼたんの名所として知られています。ニットの産地でもあり、阿賀野川沿いの温泉地も人気です。' },
  { name: '阿賀野市', pref: '新潟県', prefix: 'agano-', url: 'https://www.city.agano.niigata.jp/', desc: '阿賀野市は新潟県北東部に位置し、白鳥の飛来地・瓢湖が有名です。安田瓦の産地であり、五頭連峰の温泉郷など自然と文化が調和したまちです。' },
  { name: '佐渡市', pref: '新潟県', prefix: 'sado-', url: 'https://www.city.sado.niigata.jp/', desc: '佐渡市は日本海に浮かぶ佐渡島全域を市域とし、金銀山の歴史とトキの保護で知られています。2024年に佐渡島の金山が世界文化遺産に登録されました。' },
  { name: '村上市', pref: '新潟県', prefix: 'murakami-', url: 'https://www.city.murakami.lg.jp/', desc: '村上市は新潟県最北端に位置し、鮭のまちとして有名です。村上牛や瀬波温泉、城下町の風情ある街並みが魅力で、人面魚のいる寺としても知られています。' },
  { name: '魚沼市', pref: '新潟県', prefix: 'uonuma-', url: 'https://www.city.uonuma.lg.jp/', desc: '魚沼市は新潟県南東部の山間部に位置し、日本一のブランド米「魚沼産コシヒカリ」の産地です。豪雪地帯でもあり、冬はスキーリゾートとして賑わいます。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}childcare-subsidy`, title: `${c.name} 保育料軽減補助金`, amount: '最大月額2万5千円', amountNum: 2.5, elig: `${c.name}に住所を有し認可外保育施設を利用する保護者`, period: '通年', descr: `${c.name}が実施する保育料軽減補助金です。認可外施設の利用料を月額最大2万5千円補助します。`, tags: [c.name, '保育料軽減', '補助金'],
      s1: `<p>${c.name} 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>${c.desc}</p><p>補助額は<strong>月額最大2万5千円</strong>で、<span class="marker-green">世帯の課税状況に応じて決定</span>されます。</p>`,
      s2: `<p>${c.name}に住民登録がある保護者が対象です。</p><div class="summary-box" data-title="申請書類"><p>施設利用証明書</p><p>保育料領収書</p><p>課税証明書</p><p>本人確認書類</p></div><p>${c.name}役所こども課に<span class="marker">半年ごとに申請</span>します。</p>`,
      s3: `<p>市民税所得割額に応じて<strong>月額最大2万5千円</strong>が支給。</p><p><span class="marker">無償化制度との調整</span>あり。</p><div class="note-box">${c.name}では保育環境の充実に取り組んでいます。</div>` },
    { cat: 'childcare', slug: `${c.prefix}birth-bonus`, title: `${c.name} 出産祝い金`, amount: '最大10万円', amountNum: 10, elig: `${c.name}に住所を有し出産した方`, period: '出産後6か月以内', descr: `${c.name}が実施する出産祝い金です。出産に最大10万円を支給します。`, tags: [c.name, '出産祝い金', '給付金'],
      s1: `<p>${c.name} 出産祝い金は、<span class="marker">市内在住の方が出産した際</span>に祝い金を支給する制度です。</p><p>少子化対策として出産世帯への支援を充実させています。</p><p>支給額は<strong>第1子5万円、第2子7万円、第3子以降10万円</strong>です。<span class="marker-green">所得制限なし</span>。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>出産日に${c.name}に住民登録</p><p>出産後6か月以内に申請</p><p>市税滞納なし</p></div><p>${c.name}こども課で<span class="marker">出生届提出時に手続き</span>できます。</p>`,
      s3: `<p><strong>第1子5万円、第2子7万円、第3子以降10万円</strong>。</p><p><span class="marker">申請期限は出産後6か月</span>。</p><div class="highlight-box">国・県の給付金と併せて受給できます。</div>` },
    { cat: 'housing', slug: `${c.prefix}housing-purchase`, title: `${c.name} 住宅取得支援補助金`, amount: '最大80万円', amountNum: 80, elig: `${c.name}内に住宅を取得する世帯`, period: '通年（予算に達し次第終了）', descr: `${c.name}が実施する住宅取得支援補助金です。定住促進のため最大80万円を補助します。`, tags: [c.name, '住宅取得', '補助金'],
      s1: `<p>${c.name} 住宅取得支援補助金は、<span class="marker">市内に住宅を取得する世帯</span>を支援する制度です。</p><p>新潟県内でも人口減少が課題となる中、定住促進のため手厚い住宅取得支援を行っています。</p><p>補助額は<strong>基本50万円、加算で最大80万円</strong>です。<span class="marker-green">新潟県の中でもトップクラスの補助額</span>です。</p>`,
      s2: `<div class="summary-box" data-title="主な要件"><p>市内に新築・中古住宅を取得</p><p>5年以上定住意思</p><p>市税滞納なし</p></div><p>${c.name}役所建設課に<span class="marker">取得後1年以内に申請</span>。</p>`,
      s3: `<p>基本<strong>50万円</strong>、市外転入<strong>+15万円</strong>、子育て<strong>+15万円</strong>で<strong>最大80万円</strong>。</p><p><span class="marker">5年以内転出で返還</span>。</p><div class="note-box">新潟県は住宅価格が手頃で、手厚い補助と合わせて住宅取得しやすい環境です。</div>` },
    { cat: 'medical', slug: `${c.prefix}infertility`, title: `${c.name} 不妊治療費助成`, amount: '最大15万円', amountNum: 15, elig: `${c.name}に住所を有し不妊治療を受けている夫婦`, period: '治療終了後3か月以内', descr: `${c.name}の不妊治療費助成です。自己負担分を最大15万円助成します。`, tags: [c.name, '不妊治療', '助成'],
      s1: `<p>${c.name} 不妊治療費助成は、<span class="marker">特定不妊治療の自己負担</span>を軽減する制度です。</p><p>新潟県の助成に上乗せする形で市独自の助成を行っています。</p><p>助成額は<strong>1回最大15万円</strong>。<span class="marker-green">年2回まで</span>。</p>`,
      s2: `<div class="summary-box" data-title="書類"><p>申請書</p><p>治療証明書</p><p>領収書</p><p>住民票</p></div><p>${c.name}健康課に<span class="marker">治療終了後3か月以内</span>に申請。</p>`,
      s3: `<p><strong>1回最大15万円</strong>、年2回まで。</p><p><span class="marker">県助成と併用可能</span>。</p><div class="note-box">不妊相談窓口も設置しています。</div>` },
    { cat: 'education', slug: `${c.prefix}scholarship`, title: `${c.name} 奨学金制度`, amount: '最大月額4万円', amountNum: 4, elig: `${c.name}に住所を有する世帯の学生`, period: '毎年4月〜5月', descr: `${c.name}の奨学金制度です。月額最大4万円を無利子で貸与します。`, tags: [c.name, '奨学金', '教育支援'],
      s1: `<p>${c.name} 奨学金制度は、<span class="marker">経済的理由で修学困難な学生</span>に無利子で貸与する制度です。</p><p>若者の就学を支援し、将来の地域を担う人材育成に貢献しています。</p><p>貸与額は<strong>高校生月額1万5千円、大学生月額4万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>保護者が${c.name}に住所</p><p>成績・所得基準あり</p></div><p>教育委員会に<span class="marker">毎年4〜5月に申請</span>。選考制。</p>`,
      s3: `<p>高校生<strong>月1万5千円</strong>、大学生<strong>月4万円</strong>。</p><p><span class="marker">他奨学金との併用は原則不可</span>。</p><div class="note-box">Uターン就職した場合の返還免除制度がある場合もあります。</div>` },
    { cat: 'employment', slug: `${c.prefix}uij-turn`, title: `${c.name} UIJターン支援金`, amount: '最大100万円', amountNum: 100, elig: `東京圏から${c.name}に移住し就業した方`, period: '通年', descr: `${c.name}のUIJターン支援金です。最大100万円を支給します。`, tags: [c.name, 'UIJターン', '支援金'],
      s1: `<p>${c.name} UIJターン支援金は、<span class="marker">東京圏から移住・就業</span>した方への支援金です。</p><p>新潟県は「にいがた暮らし」を推進しており、${c.name}独自の加算も含めた充実した支援を行っています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>。<span class="marker-green">子ども加算1人30万円</span>。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>東京23区に在住・通勤</p><p>転入後3か月〜1年以内</p><p>5年以上居住意思</p></div><p>${c.name}企画課に<span class="marker">事前相談推奨</span>で申請。</p>`,
      s3: `<p>単身<strong>60万円</strong>、世帯<strong>100万円</strong>、子ども<strong>1人30万円</strong>。</p><p><span class="marker">5年以内転出で返還</span>の可能性。</p><div class="highlight-box">新潟県は食・自然・温泉が充実した暮らしやすい地域です。「にいがた暮らし」ポータルサイトもご参照ください。</div>` },
    { cat: 'nursing', slug: `${c.prefix}nursing-equipment`, title: `${c.name} 介護用品支給事業`, amount: '年額6万円相当', amountNum: 6, elig: `${c.name}で在宅要介護3以上の方を介護する家族`, period: '通年', descr: `${c.name}の介護用品支給事業です。年額6万円相当を支給します。`, tags: [c.name, '介護用品', '支給'],
      s1: `<p>${c.name} 介護用品支給事業は、<span class="marker">在宅で要介護3以上の方を介護する家族</span>に介護用品を支給します。</p><p>紙おむつ等の費用を市が負担し在宅介護を支えます。</p><p>支給額は<strong>年額6万円相当</strong>。</p>`,
      s2: `<div class="summary-box" data-title="書類"><p>申請書</p><p>要介護認定結果</p><p>身分証</p></div><p>${c.name}介護保険課で<span class="marker">年度ごと申請</span>。</p>`,
      s3: `<p><strong>年額6万円相当</strong>のカタログ方式。</p><p><span class="marker">入院・施設入所中は対象外</span>。</p><div class="note-box">介護保険の福祉用具と併用可能です。</div>` },
    { cat: 'living', slug: `${c.prefix}energy-support`, title: `${c.name} 住宅用太陽光発電補助金`, amount: '最大15万円', amountNum: 15, elig: `${c.name}内の住宅に太陽光発電を設置する方`, period: '毎年4月〜翌年2月', descr: `${c.name}の太陽光発電補助金です。蓄電池との同時設置で最大15万円を補助します。`, tags: [c.name, '太陽光発電', '補助金'],
      s1: `<p>${c.name} 住宅用太陽光発電補助金は、<span class="marker">太陽光パネルの設置</span>を支援する制度です。</p><p>再エネ普及と光熱費削減を目的としています。豪雪地帯ならではのエネルギー事情も考慮し、蓄電池との同時設置を推奨しています。</p><p>補助額は<strong>太陽光1kWあたり2万円（最大10万円）、蓄電池同時設置で+5万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>${c.name}在住の住宅所有者</p><p>出力10kW未満</p><p>市税滞納なし</p></div><p>${c.name}環境課に<span class="marker">設置前に申請</span>が必要です。</p>`,
      s3: `<p>太陽光<strong>最大10万円</strong>+蓄電池<strong>5万円</strong>=<strong>最大15万円</strong>。</p><p><span class="marker">設置後に実績報告</span>提出。</p><div class="note-box">新潟県や国の補助と併用可能な場合があります。</div>` },
    { cat: 'disaster', slug: `${c.prefix}bousai-equipment`, title: `${c.name} 防災資機材整備補助金`, amount: '最大15万円', amountNum: 15, elig: `${c.name}内の自主防災組織`, period: '毎年4月〜翌年2月', descr: `${c.name}の防災資機材補助金です。最大15万円を補助します。`, tags: [c.name, '防災資機材', '補助金'],
      s1: `<p>${c.name} 防災資機材整備補助金は、<span class="marker">自主防災組織の資機材整備</span>を支援します。</p><p>新潟県は地震・豪雪・水害のリスクがある地域です。地域の防災力強化のため、発電機・除雪機・備蓄品等の購入を補助しています。</p><p>補助額は<strong>最大15万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象"><p>防災訓練実施費</p><p>防災資機材購入</p><p>除雪機購入費</p></div><p>${c.name}危機管理課に<span class="marker">活動前に申請</span>。</p>`,
      s3: `<p><strong>最大15万円</strong>。</p><p><span class="marker">実績報告書の提出</span>必要。</p><div class="note-box">新潟県は中越地震の経験から防災意識が高い地域です。日頃からの備えを大切にしましょう。</div>` },
  ];
  return cats.map(g => ({
    slug: g.slug, title: g.title, organization: c.name, type: 'local' as const, maxAmount: g.amount, maxAmountNum: g.amountNum, category: g.cat, prefecture: c.pref, tags: g.tags, eligibility: g.elig, applicationPeriod: g.period, description: g.descr,
    sections: [{ heading: '制度の概要', content: g.s1 }, { heading: '対象者と申請方法', content: g.s2 }, { heading: '支給額と注意点', content: g.s3 }],
    officialUrl: c.url, publishedAt: '2026-03-12',
  }));
}

export const cityGrantsBatch72: Grant[] = cities.flatMap(c => genGrants(c));
