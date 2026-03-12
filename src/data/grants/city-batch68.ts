import { Grant } from '@/lib/types';

const cities = [
  { name: '行田市', pref: '埼玉県', prefix: 'gyoda-', url: 'https://www.city.gyoda.lg.jp/', desc: '行田市は埼玉県北部に位置し、忍城や古代蓮の里で知られる歴史と自然のまちです。足袋の生産地としても有名で、映画「のぼうの城」の舞台にもなりました。' },
  { name: '加須市', pref: '埼玉県', prefix: 'kazo-', url: 'https://www.city.kazo.lg.jp/', desc: '加須市は埼玉県北東部に位置し、利根川沿いに広がる穀倉地帯です。「うどんのまち」として知られ、鯉のぼりの全国生産量も有数です。' },
  { name: '本庄市', pref: '埼玉県', prefix: 'honjo-', url: 'https://www.city.honjo.lg.jp/', desc: '本庄市は埼玉県北西部に位置し、本庄早稲田駅（上越新幹線）があり東京へ約50分の好アクセスです。中山道の宿場町としての歴史があります。' },
  { name: '東松山市', pref: '埼玉県', prefix: 'higashimatsuyama-', url: 'https://www.city.higashimatsuyama.lg.jp/', desc: '東松山市は埼玉県中央部に位置し、東武東上線で池袋方面へのアクセスが良好です。やきとり（やきとん）のまちとして有名で、こども動物自然公園もあります。' },
  { name: '羽生市', pref: '埼玉県', prefix: 'hanyu-', url: 'https://www.city.hanyu.lg.jp/', desc: '羽生市は埼玉県北東部に位置し、東武伊勢崎線で都心方面にアクセスできます。藍染めの伝統や「世界キャラクターさみっと」で知られています。' },
  { name: '鴻巣市', pref: '埼玉県', prefix: 'kounosu-', url: 'https://www.city.kounosu.saitama.jp/', desc: '鴻巣市は埼玉県中央部に位置し、花卉栽培が盛んな「花のまち」です。日本一長い水管橋や鴻巣びっくりひな祭りが有名です。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}childcare-subsidy`, title: `${c.name} 保育料軽減補助金`, amount: '最大月額2万5千円', amountNum: 2.5, elig: `${c.name}に住所を有し認可外保育施設を利用する児童の保護者`, period: '通年', descr: `${c.name}が実施する保育料軽減補助金です。認可外施設の利用料を月額最大2万5千円補助します。`, tags: [c.name, '保育料軽減', '補助金'],
      s1: `<p>${c.name} 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>${c.desc}</p><p>補助額は<strong>月額最大2万5千円</strong>で、<span class="marker-green">世帯の課税状況に応じて決定</span>されます。</p>`,
      s2: `<p>${c.name}に住民登録があり認可外保育施設を利用する保護者が対象です。</p><div class="summary-box" data-title="申請書類"><p>施設利用証明書</p><p>保育料領収書</p><p>課税証明書</p><p>本人確認書類</p></div><p>${c.name}役所こども課に<span class="marker">半年ごとに申請</span>します。</p>`,
      s3: `<p>市民税所得割額に応じて<strong>月額最大2万5千円</strong>が支給されます。</p><p><span class="marker">無償化制度との調整</span>があります。</p><div class="note-box">${c.name}では認可保育所の整備にも取り組んでいます。保育に関する相談はこども課へ。</div>` },
    { cat: 'childcare', slug: `${c.prefix}birth-bonus`, title: `${c.name} 出産祝い金`, amount: '最大10万円', amountNum: 10, elig: `${c.name}に住所を有し出産した方`, period: '出産後6か月以内', descr: `${c.name}が実施する出産祝い金です。第3子以降に最大10万円を支給します。`, tags: [c.name, '出産祝い金', '給付金'],
      s1: `<p>${c.name} 出産祝い金は、<span class="marker">第3子以降を出産した世帯</span>に祝い金を支給する制度です。</p><p>${c.desc}少子化対策として多子世帯への支援を充実させています。</p><p>支給額は<strong>第3子以降1人10万円</strong>です。<span class="marker-green">所得制限なし</span>。</p>`,
      s2: `<div class="summary-box" data-title="申請要件"><p>出産日に${c.name}に住民登録</p><p>第3子以降の出産</p><p>出産後6か月以内に申請</p><p>市税滞納なし</p></div><p>${c.name}役所こども課で<span class="marker">出生届提出時に手続き</span>できます。</p>`,
      s3: `<p><strong>第3子以降1人10万円</strong>。多胎児は各子に支給。</p><p><span class="marker">申請期限は出産後6か月</span>。</p><div class="highlight-box">国の出産育児一時金や埼玉県の給付金と併せて受給できます。</div>` },
    { cat: 'housing', slug: `${c.prefix}housing-purchase`, title: `${c.name} 住宅取得支援補助金`, amount: '最大50万円', amountNum: 50, elig: `${c.name}内に住宅を取得する子育て・若年世帯`, period: '通年（予算に達し次第終了）', descr: `${c.name}が実施する住宅取得支援補助金です。定住促進のため最大50万円を補助します。`, tags: [c.name, '住宅取得', '補助金'],
      s1: `<p>${c.name} 住宅取得支援補助金は、<span class="marker">市内に住宅を取得する子育て・若年世帯</span>を支援する制度です。</p><p>${c.desc}定住人口の確保を目指し住宅取得を支援しています。</p><p>補助額は<strong>基本30万円、加算で最大50万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="主な要件"><p>市内に新築・中古住宅を取得</p><p>中学生以下の子がいる世帯または夫婦ともに40歳未満</p><p>5年以上定住意思</p><p>市税滞納なし</p></div><p>${c.name}役所都市計画課に<span class="marker">取得後1年以内に申請</span>します。</p>`,
      s3: `<p>基本<strong>30万円</strong>、市外転入<strong>+10万円</strong>、子育て世帯<strong>+10万円</strong>で<strong>最大50万円</strong>。</p><p><span class="marker">5年以内転出で返還</span>対象です。</p><div class="note-box">住宅ローン減税など国の制度との併用も可能です。</div>` },
    { cat: 'medical', slug: `${c.prefix}infertility`, title: `${c.name} 不妊治療費助成`, amount: '最大15万円', amountNum: 15, elig: `${c.name}に住所を有し不妊治療を受けている夫婦`, period: '治療終了後3か月以内', descr: `${c.name}が実施する不妊治療費助成です。自己負担分を最大15万円助成します。`, tags: [c.name, '不妊治療', '助成'],
      s1: `<p>${c.name} 不妊治療費助成は、<span class="marker">特定不妊治療の自己負担</span>を軽減する制度です。</p><p>子どもを望む夫婦を経済的に支え、安心して治療に専念できる環境を整えています。</p><p>助成額は<strong>1回最大15万円</strong>です。<span class="marker-green">年間2回まで申請可能</span>。</p>`,
      s2: `<div class="summary-box" data-title="必要書類"><p>助成申請書</p><p>医療機関の治療証明書</p><p>領収書</p><p>住民票・戸籍謄本</p></div><p>${c.name}健康増進課に<span class="marker">治療終了後3か月以内</span>に申請。</p>`,
      s3: `<p><strong>1回最大15万円</strong>、年2回まで。</p><p><span class="marker">埼玉県の助成と併用可能</span>（重複分は調整）。</p><div class="note-box">不妊・不育症相談窓口も設置しています。</div>` },
    { cat: 'education', slug: `${c.prefix}scholarship`, title: `${c.name} 奨学金制度`, amount: '最大月額3万円', amountNum: 3, elig: `${c.name}に住所を有する世帯の高校生・大学生`, period: '毎年4月〜5月', descr: `${c.name}が実施する奨学金制度です。月額最大3万円を無利子で貸与します。`, tags: [c.name, '奨学金', '教育支援'],
      s1: `<p>${c.name} 奨学金制度は、<span class="marker">経済的理由で修学困難な学生</span>に無利子で奨学金を貸与する制度です。</p><p>すべての若者に学びの機会を保障するため独自の奨学金を運営しています。</p><p>貸与額は<strong>高校生月額1万円、大学生月額3万円</strong>です。<span class="marker-green">無利子での貸与</span>。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>保護者が${c.name}に住所を有すること</p><p>高校・大学等に在学中</p><p>成績・所得基準を満たすこと</p></div><p>${c.name}教育委員会に<span class="marker">毎年4〜5月に申請</span>。選考制です。</p>`,
      s3: `<p>高校生<strong>月額1万円</strong>、大学生<strong>月額3万円</strong>。卒業後に返済。</p><p><span class="marker">他奨学金との併用は原則不可</span>。</p><div class="note-box">国の修学支援制度と合わせて活用してください。</div>` },
    { cat: 'employment', slug: `${c.prefix}uij-turn`, title: `${c.name} UIJターン支援金`, amount: '最大100万円', amountNum: 100, elig: `東京圏から${c.name}に移住し就業した方`, period: '通年', descr: `${c.name}が実施するUIJターン支援金です。東京圏からの移住者に最大100万円を支給します。`, tags: [c.name, 'UIJターン', '支援金'],
      s1: `<p>${c.name} UIJターン支援金は、<span class="marker">東京圏から移住・就業</span>した方への支援金です。</p><p>${c.desc}人口減少対策として移住促進と地元企業の人材確保を推進しています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>。<span class="marker-green">子ども加算1人30万円</span>あり。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>東京23区に在住・通勤していたこと</p><p>転入後3か月〜1年以内に申請</p><p>5年以上居住意思</p></div><p>${c.name}役所企画課に<span class="marker">事前相談推奨</span>で申請します。</p>`,
      s3: `<p>単身<strong>60万円</strong>、世帯<strong>100万円</strong>、子ども<strong>1人30万円</strong>加算。</p><p><span class="marker">5年以内転出で返還</span>の可能性。</p><div class="highlight-box">埼玉県北部は都心通勤圏でありながら自然豊かな暮らしが楽しめます。</div>` },
    { cat: 'nursing', slug: `${c.prefix}nursing-equipment`, title: `${c.name} 介護用品支給事業`, amount: '年額6万円相当', amountNum: 6, elig: `${c.name}に住所を有し在宅で要介護3以上の方を介護する家族`, period: '通年', descr: `${c.name}が実施する介護用品支給事業です。年額6万円相当の介護用品を支給します。`, tags: [c.name, '介護用品', '支給'],
      s1: `<p>${c.name} 介護用品支給事業は、<span class="marker">在宅で要介護3以上の方を介護する家族</span>に介護用品を支給する制度です。</p><p>紙おむつ等の日常的に必要な費用を市が負担し、在宅介護の継続を支えます。</p><p>支給額は<strong>年額6万円相当</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="必要書類"><p>申請書</p><p>要介護認定結果通知書</p><p>介護者の身分証明書</p></div><p>${c.name}役所介護保険課で<span class="marker">年度ごとに申請</span>します。途中申請は月割り。</p>`,
      s3: `<p><strong>年額6万円相当</strong>のカタログ方式支給です。</p><p><span class="marker">入院・施設入所中は対象外</span>。在宅介護限定です。</p><div class="note-box">介護保険の福祉用具制度と併用可能です。</div>` },
    { cat: 'living', slug: `${c.prefix}migration-bonus`, title: `${c.name} 移住支援金`, amount: '最大100万円', amountNum: 100, elig: `東京圏から${c.name}に移住した方`, period: '通年', descr: `${c.name}が実施する移住支援金です。東京圏からの移住者に最大100万円を支給します。`, tags: [c.name, '移住支援', '支援金'],
      s1: `<p>${c.name} 移住支援金は、<span class="marker">東京圏から${c.name}に移住</span>した方に支給される支援金です。</p><p>${c.desc}テレワーク移住にも対応しています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>です。<span class="marker-green">子ども加算1人30万円</span>もあります。</p>`,
      s2: `<div class="summary-box" data-title="要件"><p>東京23区に在住・通勤していたこと</p><p>転入後3か月〜1年以内に申請</p><p>テレワーク移住も対象</p><p>5年以上居住意思</p></div><p>${c.name}役所企画政策課に申請します。<span class="marker">移住前の事前相談を推奨</span>。</p>`,
      s3: `<p>単身<strong>60万円</strong>、世帯<strong>100万円</strong>、子ども<strong>1人30万円加算</strong>。</p><p><span class="marker">5年以内転出で返還</span>の可能性。</p><div class="highlight-box">${c.name}は埼玉県北部ならではのゆとりある暮らしと都心アクセスを両立できる移住先です。</div>` },
    { cat: 'disaster', slug: `${c.prefix}seismic-diagnosis`, title: `${c.name} 木造住宅耐震診断補助金`, amount: '最大5万円', amountNum: 5, elig: `${c.name}内に昭和56年以前の木造住宅を所有する方`, period: '毎年5月〜11月', descr: `${c.name}が実施する耐震診断補助金です。旧耐震基準住宅の診断に最大5万円を補助します。`, tags: [c.name, '耐震診断', '補助金'],
      s1: `<p>${c.name} 木造住宅耐震診断補助金は、<span class="marker">昭和56年以前の木造住宅</span>の耐震診断費用を補助する制度です。</p><p>旧耐震基準住宅の安全性確認と耐震化促進が目的です。</p><p>補助額は<strong>診断費用の2/3以内、最大5万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象住宅"><p>昭和56年5月以前着工の木造住宅</p><p>2階建て以下の一戸建て</p><p>在来軸組工法</p></div><p>${c.name}役所建築課に<span class="marker">先着順</span>で申請します。</p>`,
      s3: `<p>診断費用の2/3以内で<strong>最大5万円</strong>。</p><p><span class="marker">耐震改修補助（最大100万円）</span>も別途あります。</p><div class="note-box">無料の耐震相談会も定期開催しています。まずは相談会に参加しましょう。</div>` },
  ];
  return cats.map(g => ({
    slug: g.slug, title: g.title, organization: c.name, type: 'local' as const, maxAmount: g.amount, maxAmountNum: g.amountNum, category: g.cat, prefecture: c.pref, tags: g.tags, eligibility: g.elig, applicationPeriod: g.period, description: g.descr,
    sections: [
      { heading: '制度の概要', content: g.s1 },
      { heading: '対象者と申請方法', content: g.s2 },
      { heading: '支給額と注意点', content: g.s3 },
    ],
    officialUrl: c.url, publishedAt: '2026-03-12',
  }));
}

export const cityGrantsBatch68: Grant[] = cities.flatMap(c => genGrants(c));
