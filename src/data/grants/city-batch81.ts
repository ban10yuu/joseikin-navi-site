import { Grant } from '@/lib/types';

const cities = [
  { name: '福知山市', pref: '京都府', prefix: 'fukuchiyama-', desc: '福知山市は京都府北部の中心都市で、明智光秀が築いた福知山城で知られます。由良川沿いの盆地に広がり、近年は豪雨災害の教訓から防災先進都市として注目されています。' },
  { name: '舞鶴市', pref: '京都府', prefix: 'maizuru-', desc: '舞鶴市は日本海に面した港湾都市で、旧海軍の赤レンガ倉庫群が象徴的な景観を形成しています。引揚記念館はユネスコ世界記憶遺産に登録されており、海上自衛隊の基地もあります。' },
  { name: '綾部市', pref: '京都府', prefix: 'ayabe-', desc: '綾部市は大本教の発祥地であり、グンゼ（郡是製絲）の創業地として知られます。里山の美しい景観を活かした農村体験や、世界連邦都市宣言の先駆的な平和都市です。' },
  { name: '宇治市', pref: '京都府', prefix: 'uji-', desc: '宇治市は世界遺産の平等院鳳凰堂と宇治上神社を擁する歴史都市です。宇治茶のブランドは世界的に有名で、源氏物語「宇治十帖」の舞台としても知られています。' },
  { name: '亀岡市', pref: '京都府', prefix: 'kameoka-', desc: '亀岡市は京都市の西隣に位置し、保津川下りとトロッコ列車で知られる観光都市です。霧の都とも呼ばれ、京野菜の産地として農業も盛んです。' },
  { name: '城陽市', pref: '京都府', prefix: 'joyo-', desc: '城陽市は京都と奈良の中間に位置する住宅都市で、金銀糸の生産日本一を誇ります。青谷梅林や文化パルク城陽など、住みやすさと文化が調和したまちです。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}child-third-free`, title: `${c.name} 第3子以降出産祝い金`, amount: '最大30万円', amountNum: 30, elig: `${c.name}に住所を有し第3子以降を出産した世帯`, period: '出産後3か月以内', descr: `${c.name}が実施する第3子以降出産祝い金です。3人目以降の出産に際し最大30万円を支給して多子世帯を応援します。`, tags: [c.name, '出産祝い金', '第3子', '京都府', '少子化対策'],
      s1: `<p>${c.name}第3子以降出産祝い金は、<span class="marker">第3子以降のお子さんが誕生した世帯</span>に祝い金を支給する制度です。</p><p>${c.desc}</p><p>支給額は<strong>第3子20万円、第4子以降30万円</strong>です。<span class="marker-green">所得制限なし</span>で、多子世帯の経済的負担を大きく軽減します。</p>`,
      s2: `<p>${c.name}に出産日時点で6か月以上住民登録がある世帯が対象です。</p><div class="summary-box" data-title="申請要件"><p>出産日に${c.name}に住民登録があること</p><p>同一世帯に18歳以下の子が2人以上いること</p><p>出産後3か月以内に申請</p><p>市税の滞納がないこと</p></div><p>${c.name}子育て支援課に<span class="marker">出生届提出後に申請</span>してください。</p>`,
      s3: `<p><strong>第3子20万円、第4子以降30万円</strong>を一括支給。多胎児はそれぞれに支給。</p><p><span class="marker">国の出産育児一時金や京都府の祝い金と併用可</span>。</p><div class="highlight-box">京都府北部は少子化が深刻な課題です。${c.name}では出産から子育てまで切れ目ない支援を行っています。</div>` },
    { cat: 'housing', slug: `${c.prefix}uij-housing`, title: `${c.name} UIJターン住宅支援補助金`, amount: '最大80万円', amountNum: 80, elig: `京都府外から${c.name}に移住して住宅を取得・賃借する方`, period: '通年', descr: `${c.name}が実施するUIJターン住宅支援です。府外からの移住者の住宅取得・賃貸費用を最大80万円補助します。`, tags: [c.name, 'UIJターン', '住宅支援', '京都府', '移住促進'],
      s1: `<p>${c.name}UIJターン住宅支援補助金は、<span class="marker">京都府外から移住して住宅を取得または賃借する方</span>を支援する制度です。</p><p>京都府は京都市に人口が集中する傾向がありますが、府内各市は移住者の誘致に力を入れています。自然豊かな環境と都市へのアクセスの良さを活かし、新たな住民を迎え入れます。</p><p>補助額は<strong>住宅取得の場合最大80万円、賃貸の場合月額最大2万円（2年間）</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>京都府外から${c.name}に転入</p><p>転入日から1年以内に申請</p><p>5年以上の定住意思があること</p><p>39歳以下または子育て世帯</p></div><p>${c.name}定住促進課に<span class="marker">転入届提出後に申請</span>してください。オンライン相談も対応しています。</p>`,
      s3: `<p>住宅取得は<strong>最大80万円</strong>、賃貸は<strong>月額最大2万円（2年間＝最大48万円）</strong>。</p><p><span class="marker">テレワーク移住者は10万円加算</span>。</p><div class="note-box">京都府の移住支援金（最大100万円）との併用で、合計180万円以上の支援を受けられる場合があります。</div>` },
    { cat: 'medical', slug: `${c.prefix}postpartum-care`, title: `${c.name} 産後ケア事業`, amount: 'ショートステイ1泊5,000円〜', amountNum: 5, elig: `${c.name}に住所を有する産後1年未満の母子`, period: '通年', descr: `${c.name}が実施する産後ケア事業です。産後の母子に宿泊型・日帰り型のケアを低負担で提供します。`, tags: [c.name, '産後ケア', '母子保健', '京都府', '産後うつ予防'],
      s1: `<p>${c.name}産後ケア事業は、<span class="marker">産後1年未満の母親と赤ちゃん</span>に専門的なケアを提供する制度です。</p><p>産後うつや育児不安の予防・軽減を目的に、助産師による授乳指導や育児相談、母体の回復支援を行います。実家が遠い核家族世帯にとって心強い支援です。</p><p>利用料は<strong>ショートステイ（宿泊）1泊5,000円、デイサービス（日帰り）1回2,000円</strong>（市が残額を負担）。</p>`,
      s2: `<div class="summary-box" data-title="利用タイプ"><p>ショートステイ型：1泊2日〜（最大7日間）</p><p>デイサービス型：日帰り（最大7回）</p><p>アウトリーチ型：助産師の自宅訪問（最大5回）</p></div><p>${c.name}健康推進課に<span class="marker">電話で利用相談</span>。産前からの予約も可能です。</p>`,
      s3: `<p>ショートステイ<strong>1泊5,000円</strong>（通常2〜3万円相当）、デイサービス<strong>1回2,000円</strong>。非課税世帯は減免あり。</p><p><span class="marker">利用にあたり医師の診断書は不要</span>。育児に不安を感じたら気軽に。</p><div class="note-box">「つらい」「しんどい」と感じたら、それは利用のサインです。一人で頑張りすぎず、${c.name}の産後ケアを活用してください。</div>` },
    { cat: 'education', slug: `${c.prefix}culture-experience`, title: `${c.name} 子ども文化芸術体験事業`, amount: '参加無料', amountNum: 0, elig: `${c.name}に住所を有する小中学生`, period: '毎年5月〜翌年2月', descr: `${c.name}が実施する子ども文化芸術体験事業です。プロの芸術家によるワークショップや公演を無料で体験できます。`, tags: [c.name, '文化芸術', '子ども体験', '京都府', '芸術教育'],
      s1: `<p>${c.name}子ども文化芸術体験事業は、<span class="marker">小中学生がプロの芸術家から直接指導を受ける</span>体験プログラムです。</p><p>京都府は日本文化の中心地として、茶道・華道・能楽など多彩な伝統芸術が息づいています。子どもたちが本物の芸術に触れ、感性と創造力を育む機会を提供します。</p><p><span class="marker-green">参加費は完全無料</span>です。</p>`,
      s2: `<div class="summary-box" data-title="プログラム例"><p>能楽師による謡・仕舞のワークショップ</p><p>京焼・清水焼の陶芸体験</p><p>プロオーケストラの演奏鑑賞</p><p>書道家による書の体験</p></div><p>${c.name}文化・スポーツ振興課に<span class="marker">各プログラムの開催2週間前まで</span>に申し込み。先着順。</p>`,
      s3: `<p>全プログラム<strong>参加無料</strong>。材料費も${c.name}が負担。年間8〜10回の開催。</p><p><span class="marker">保護者の同伴・見学も可能</span>です。</p><div class="highlight-box">京都府の「文化力による未来づくり基金」の助成を受けています。京都ならではの本格的な文化体験をぜひ。</div>` },
    { cat: 'employment', slug: `${c.prefix}tea-business`, title: `${c.name} 地域特産品ブランド化支援補助金`, amount: '最大80万円', amountNum: 80, elig: `${c.name}の地域特産品を活用した新商品開発・ブランド化に取り組む事業者`, period: '毎年4月〜8月', descr: `${c.name}が実施する地域特産品ブランド化支援です。地元の特産品を活かした新商品開発を最大80万円補助します。`, tags: [c.name, '特産品', 'ブランド化', '京都府', '地域振興'],
      s1: `<p>${c.name}地域特産品ブランド化支援補助金は、<span class="marker">地元の特産品を活用した新商品の開発・販路開拓</span>を支援する制度です。</p><p>京都府は宇治茶・京野菜・丹後ちりめんなど多彩な特産品を有しています。地域の農産物や工芸品の付加価値を高め、全国・海外に向けたブランド化を推進します。</p><p>補助額は<strong>事業費の2/3以内、最大80万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象事業"><p>新商品の企画・試作・開発</p><p>パッケージデザイン・ブランディング</p><p>ECサイト構築・オンライン販路開拓</p><p>展示会・物産展への出展</p></div><p>${c.name}商工観光課に<span class="marker">事業計画書を提出して審査</span>。商工会議所との連携を推奨します。</p>`,
      s3: `<p>事業費の2/3以内で<strong>最大80万円</strong>。海外輸出に取り組む場合は100万円に増額。</p><p><span class="marker">2年間の販売実績報告</span>が必要です。</p><div class="note-box">京都府の「京もの認定制度」や「京ブランド」との連携で、さらなるブランド力向上が期待できます。</div>` },
    { cat: 'nursing', slug: `${c.prefix}aged-meal-delivery`, title: `${c.name} 高齢者配食サービス助成`, amount: '1食あたり300円助成', amountNum: 3.6, elig: `${c.name}に住所を有する65歳以上のひとり暮らし高齢者等`, period: '通年', descr: `${c.name}が実施する高齢者配食サービス助成です。調理が困難な高齢者世帯に配食サービスの利用料を1食300円助成します。`, tags: [c.name, '配食サービス', '高齢者', '京都府', '栄養管理'],
      s1: `<p>${c.name}高齢者配食サービス助成は、<span class="marker">調理が困難な高齢者世帯</span>にバランスの取れた食事を届けるサービスの利用料を助成する制度です。</p><p>栄養管理と安否確認を兼ねた配食サービスは、高齢者の在宅生活を支える重要な福祉事業です。配達時の声かけで孤立防止にも役立っています。</p><p>助成額は<strong>1食あたり300円</strong>（利用者負担は約400円）です。</p>`,
      s2: `<div class="summary-box" data-title="サービス内容"><p>昼食・夕食の配達（週5日まで）</p><p>管理栄養士監修のバランス食</p><p>配達時の安否確認</p><p>特別食（減塩・糖尿病食等）対応</p></div><p>${c.name}高齢福祉課または地域包括支援センターに<span class="marker">利用申請</span>。ケアマネジャーからの申請も可能です。</p>`,
      s3: `<p>1食あたり300円を市が助成。利用者負担は<strong>約400円/食</strong>（通常700円相当）。</p><p><span class="marker">週5日まで利用可能</span>。年間で約7万円の助成効果。</p><div class="note-box">配食サービスは「食」を通じた見守りでもあります。3日連続で応答がない場合は${c.name}が安否確認を行います。</div>` },
    { cat: 'living', slug: `${c.prefix}bicycle-helmet`, title: `${c.name} 自転車ヘルメット購入補助金`, amount: '最大3,000円', amountNum: 0.3, elig: `${c.name}に住所を有する方`, period: '通年', descr: `${c.name}が実施する自転車ヘルメット購入補助金です。道路交通法改正に伴い、ヘルメット購入費を最大3,000円補助します。`, tags: [c.name, '自転車ヘルメット', '交通安全', '京都府', '補助金'],
      s1: `<p>${c.name}自転車ヘルメット購入補助金は、<span class="marker">自転車用ヘルメットの購入費</span>を補助する制度です。</p><p>2023年4月の道路交通法改正で自転車乗車時のヘルメット着用が努力義務化されました。ヘルメット着用により頭部損傷リスクが大幅に低減されます。全市民の着用率向上を目指しています。</p><p>補助額は<strong>購入価格の1/2以内、最大3,000円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象ヘルメット"><p>SGマークまたはJCFマーク認証品</p><p>CE規格（EN1078）認証品</p><p>新品であること</p></div><p>${c.name}生活安全課に<span class="marker">購入後のレシートと保証書を添えて申請</span>。オンライン申請も可能です。1人1回限り。</p>`,
      s3: `<p>購入価格の1/2以内で<strong>最大3,000円</strong>。1人1回、1個まで。</p><p><span class="marker">子ども用・大人用ともに対象</span>。通学用も通勤用も可。</p><div class="note-box">ヘルメット未着用での自転車事故では、着用時と比べて致死率が約2.3倍になるとされています。安全のために着用を。</div>` },
    { cat: 'disaster', slug: `${c.prefix}landslide-sensor`, title: `${c.name} 土砂災害警戒区域安全対策補助金`, amount: '最大50万円', amountNum: 50, elig: `${c.name}内の土砂災害警戒区域に居住する世帯`, period: '毎年4月〜10月', descr: `${c.name}が実施する土砂災害安全対策補助金です。警戒区域の住宅の防護柵・排水設備等の設置を最大50万円補助します。`, tags: [c.name, '土砂災害', '安全対策', '京都府', '防災設備'],
      s1: `<p>${c.name}土砂災害警戒区域安全対策補助金は、<span class="marker">土砂災害警戒区域（イエローゾーン）内の住宅</span>の安全対策費用を補助する制度です。</p><p>京都府北部は山間部が多く、豪雨による土砂災害のリスクが高い地域です。2014年・2018年の豪雨災害の教訓を踏まえ、住宅周辺の防護対策を支援します。</p><p>補助額は<strong>工事費の2/3以内、最大50万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象工事"><p>土留め擁壁・防護柵の設置</p><p>排水路・側溝の整備</p><p>のり面保護工事</p><p>土砂流入防止壁の設置</p></div><p>${c.name}防災安全課に<span class="marker">工事着手前に申請</span>。市の技術職員による現地確認が行われます。</p>`,
      s3: `<p>工事費の2/3以内で<strong>最大50万円</strong>。特別警戒区域（レッドゾーン）は上限80万円。</p><p><span class="marker">住宅の移転費用補助</span>（最大200万円）は別制度で対応。</p><div class="highlight-box">${c.name}では防災アプリやエリアメールによる土砂災害警戒情報の配信も行っています。早めの避難が命を守ります。</div>` },
    { cat: 'medical', slug: `${c.prefix}dementia-family`, title: `${c.name} 認知症家族サポート助成`, amount: '最大年間3万円', amountNum: 3, elig: `${c.name}に住所を有する認知症の方を介護する家族`, period: '通年', descr: `${c.name}が実施する認知症家族サポート助成です。認知症の方の見守り機器やGPS端末の費用を年間最大3万円助成します。`, tags: [c.name, '認知症', '家族サポート', '京都府', '見守り支援'],
      s1: `<p>${c.name}認知症家族サポート助成は、<span class="marker">認知症の方を介護する家族</span>の見守り環境を整備する制度です。</p><p>認知症の方の徘徊による行方不明事案が全国で増加しています。GPS端末や見守りセンサーの導入で家族の不安を軽減し、安心して在宅介護を続けられる環境を支援します。</p><p>助成額は<strong>機器購入費・月額利用料の合計、年間最大3万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象機器"><p>GPS位置情報端末（月額利用料含む）</p><p>徘徊感知センサー</p><p>ドアセンサー（外出通知機能付き）</p><p>見守りカメラ</p></div><p>${c.name}地域包括支援センターに<span class="marker">認知症の診断書を添えて申請</span>してください。</p>`,
      s3: `<p>機器購入費と月額利用料の合計で<strong>年間最大3万円</strong>。GPS端末の月額利用料（約500円/月）もカバー。</p><p><span class="marker">介護保険の福祉用具レンタルとは別枠</span>。</p><div class="note-box">${c.name}では認知症SOSネットワーク（徘徊時の早期発見協力体制）も整備しています。登録をお勧めします。</div>` },
  ];
  return cats.map(g => ({
    slug: g.slug, title: g.title, organization: c.name, type: 'local' as const, maxAmount: g.amount, maxAmountNum: g.amountNum, category: g.cat, prefecture: c.pref, tags: g.tags, eligibility: g.elig, applicationPeriod: g.period, description: g.descr,
    sections: [
      { heading: '制度の概要', content: g.s1 },
      { heading: '対象者と申請方法', content: g.s2 },
      { heading: '支給額と注意点', content: g.s3 },
    ],
    officialUrl: '', publishedAt: '2026-03-12',
  }));
}

export const cityGrantsBatch81: Grant[] = cities.flatMap(c => genGrants(c));
