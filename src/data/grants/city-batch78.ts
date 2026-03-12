import { Grant } from '@/lib/types';

const cities = [
  { name: '豊橋市', pref: '愛知県', prefix: 'toyohashi-', desc: '豊橋市は東三河の中心都市で、路面電車が走る温暖な港町です。手筒花火の伝統と豊橋カレーうどんで知られ、農業産出額は愛知県内トップクラスです。' },
  { name: '岡崎市', pref: '愛知県', prefix: 'okazaki-', desc: '岡崎市は徳川家康公の生誕地で、岡崎城と八丁味噌で有名な歴史都市です。乙川沿いの桜並木は東海有数の花見スポットで、自動車産業も盛んです。' },
  { name: '一宮市', pref: '愛知県', prefix: 'ichinomiya-', desc: '一宮市は繊維産業で栄えた尾張の中核都市で、真清田神社の門前町として発展しました。138タワーパークやモーニング文化の発祥地として知られています。' },
  { name: '瀬戸市', pref: '愛知県', prefix: 'seto-', desc: '瀬戸市は1000年以上の歴史を持つ「せともの」の産地で、やきものの文化が息づくまちです。瀬戸染付や赤津焼など多彩な陶磁器文化とせと陶祖まつりが有名です。' },
  { name: '半田市', pref: '愛知県', prefix: 'handa-', desc: '半田市は知多半島の中核都市で、ミツカン酢や赤レンガ建物（カブトビール工場）など醸造文化が息づいています。新美南吉の故郷でもあり、ごんぎつねの里として親しまれています。' },
  { name: '春日井市', pref: '愛知県', prefix: 'kasugai-', desc: '春日井市は名古屋市の北東に隣接するベッドタウンで、日本一のサボテン生産地として知られます。書道の聖地・道風記念館やグリーンピア春日井が人気のまちです。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}childcare-leave-bonus`, title: `${c.name} 育児休業取得奨励金`, amount: '最大20万円', amountNum: 20, elig: `${c.name}内の中小企業で育児休業を取得した従業員`, period: '育休取得後3か月以内', descr: `${c.name}が実施する育児休業取得奨励金です。中小企業の従業員が育休を取得した場合、最大20万円を支給します。`, tags: [c.name, '育児休業', '奨励金', '愛知県', 'ワークライフバランス'],
      s1: `<p>${c.name}育児休業取得奨励金は、<span class="marker">市内中小企業の従業員が育児休業を取得</span>した場合に奨励金を支給する制度です。</p><p>${c.desc}</p><p>男性の育休取得促進にも力を入れており、<strong>女性10万円、男性は14日以上の取得で20万円</strong>です。<span class="marker-green">事業主への奨励金</span>も別途用意しています。</p>`,
      s2: `<p>${c.name}内に事業所を有する中小企業の従業員が対象です。</p><div class="summary-box" data-title="支給要件"><p>連続1か月以上の育児休業を取得</p><p>育休終了後に職場復帰すること</p><p>復帰後6か月以上就労すること</p><p>雇用保険に加入していること</p></div><p>${c.name}産業政策課に<span class="marker">育休終了後3か月以内</span>に申請してください。</p>`,
      s3: `<p>女性<strong>10万円</strong>、男性14日以上の取得で<strong>20万円</strong>。事業主にも奨励金10万円。</p><p><span class="marker">復帰後6か月未満で退職</span>した場合は返還対象です。</p><div class="highlight-box">愛知県の「あいちイクメン応援企業」認定を受けている企業は5万円加算されます。</div>` },
    { cat: 'housing', slug: `${c.prefix}newlywed-housing`, title: `${c.name} 結婚新生活支援補助金`, amount: '最大60万円', amountNum: 60, elig: `${c.name}に住所を有する婚姻届を提出した夫婦（夫婦の所得合計500万円未満）`, period: '毎年4月〜翌年3月', descr: `${c.name}が実施する結婚新生活支援補助金です。新婚世帯の住居費・引越費を最大60万円補助します。`, tags: [c.name, '結婚新生活', '補助金', '愛知県', '新婚支援'],
      s1: `<p>${c.name}結婚新生活支援補助金は、<span class="marker">新たに婚姻届を提出した夫婦</span>の住居費や引越費用を補助する制度です。</p><p>結婚に伴う経済的負担を軽減し、若者の結婚を後押しします。国の「結婚新生活支援事業」を活用した制度で、${c.name}の上乗せ分も含まれています。</p><p>補助額は<strong>夫婦ともに29歳以下で最大60万円、39歳以下で最大30万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象経費"><p>住宅の購入費（ローン含む）</p><p>家賃・敷金・礼金・共益費</p><p>引越業者への支払い</p><p>リフォーム費用</p></div><p>${c.name}市民課に<span class="marker">婚姻届提出と同時に案内</span>を受けられます。年度末までに申請してください。</p>`,
      s3: `<p>29歳以下夫婦は<strong>最大60万円</strong>、30〜39歳は<strong>最大30万円</strong>。夫婦の所得合計500万円未満が条件。</p><p><span class="marker">再婚も対象</span>（初回利用に限る）。</p><div class="note-box">国の制度を活用しているため、予算枠に限りがあります。早めの申請をおすすめします。</div>` },
    { cat: 'medical', slug: `${c.prefix}mental-health`, title: `${c.name} こころの健康相談・治療費助成`, amount: '最大年間6万円', amountNum: 6, elig: `${c.name}に住所を有するうつ病等の精神疾患で通院中の方（市民税非課税世帯）`, period: '通年', descr: `${c.name}が実施するこころの健康支援制度です。精神疾患の通院治療費自己負担分を年間最大6万円助成します。`, tags: [c.name, 'メンタルヘルス', '治療費助成', '愛知県', '精神保健'],
      s1: `<p>${c.name}こころの健康相談・治療費助成は、<span class="marker">うつ病・不安障害等の精神疾患で通院治療中の方</span>の医療費自己負担を助成する制度です。</p><p>自立支援医療（精神通院医療）の自己負担1割分をさらに軽減します。経済的理由で治療を中断しないよう、市民税非課税世帯を重点的に支援します。</p><p>助成額は<strong>自己負担分の全額、年間最大6万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>自立支援医療（精神通院医療）の受給者証を持つ方</p><p>市民税非課税世帯</p><p>${c.name}に6か月以上居住</p></div><p>${c.name}保健所精神保健福祉課に<span class="marker">受給者証の写しを添えて申請</span>してください。3か月ごとにまとめて申請も可能です。</p>`,
      s3: `<p>自立支援医療の自己負担分で<strong>年間最大6万円</strong>。通院費・薬剤費が対象。</p><p><span class="marker">入院費用は対象外</span>です。</p><div class="note-box">${c.name}では無料の「こころの健康相談」を毎月開催しています。精神科医・保健師が対応します。一人で悩まずご相談を。</div>` },
    { cat: 'education', slug: `${c.prefix}preschool-free`, title: `${c.name} 第2子以降保育料無償化`, amount: '保育料全額免除', amountNum: 0, elig: `${c.name}に住所を有し第2子以降の子どもが認可保育施設に通う世帯`, period: '通年（自動適用）', descr: `${c.name}が実施する第2子以降保育料無償化です。所得制限なしで第2子以降の保育料を全額免除します。`, tags: [c.name, '保育料無償化', '第2子', '愛知県', '少子化対策'],
      s1: `<p>${c.name}第2子以降保育料無償化は、<span class="marker">第2子以降の0〜2歳児の保育料</span>を全額免除する制度です。</p><p>国の制度では3〜5歳児が無償化対象ですが、${c.name}では独自に0〜2歳児の第2子以降も無償化。多子世帯の保育料負担を大幅に軽減します。</p><p><span class="marker-green">所得制限なし</span>で全世帯が対象です。</p>`,
      s2: `<div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>家庭的保育事業</p></div><p>原則として<span class="marker">自動適用</span>されます。世帯構成に変更があった場合は${c.name}保育課に届け出てください。</p>`,
      s3: `<p>第2子以降の0〜2歳児の<strong>保育料が全額免除</strong>。年間で30〜60万円相当の支援。</p><p><span class="marker">きょうだいの年齢制限なし</span>（第1子が成人していてもカウント）。</p><div class="highlight-box">愛知県は子育て支援に積極的な自治体が多く、${c.name}の無償化は近隣市町村のモデルケースとなっています。</div>` },
    { cat: 'employment', slug: `${c.prefix}factory-iot`, title: `${c.name} 中小製造業IoT導入補助金`, amount: '最大200万円', amountNum: 200, elig: `${c.name}内に工場を有する中小製造業者`, period: '毎年5月〜9月', descr: `${c.name}が実施するIoT導入補助金です。中小製造業のIoT・デジタル化投資を最大200万円補助します。`, tags: [c.name, 'IoT', '製造業', '愛知県', 'DX推進'],
      s1: `<p>${c.name}中小製造業IoT導入補助金は、<span class="marker">市内中小製造業のIoT・DX投資</span>を支援する制度です。</p><p>愛知県はものづくり産業の集積地であり、デジタル技術の活用による生産性向上が不可欠です。センサー導入やデータ分析基盤の構築を通じて、中小企業の競争力強化を図ります。</p><p>補助額は<strong>導入費用の2/3以内、最大200万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象設備・サービス"><p>IoTセンサー・計測機器</p><p>生産管理システム（MES）</p><p>クラウドサービス利用料（初年度分）</p><p>導入コンサルティング費用</p></div><p>${c.name}産業振興課に<span class="marker">導入前に事業計画書を提出</span>。専門家による審査があります。</p>`,
      s3: `<p>導入費の2/3以内で<strong>最大200万円</strong>。複数工程への導入は300万円に増額。</p><p><span class="marker">導入後2年間の効果測定</span>と報告が求められます。</p><div class="note-box">愛知県の「あいちロボット産業クラスター推進協議会」のサポートも受けられます。まずは無料のIoT診断をご利用ください。</div>` },
    { cat: 'nursing', slug: `${c.prefix}care-robot`, title: `${c.name} 介護ロボット導入補助金`, amount: '最大30万円', amountNum: 30, elig: `${c.name}内の介護事業所`, period: '毎年4月〜8月', descr: `${c.name}が実施する介護ロボット導入補助金です。介護現場の負担軽減のため介護ロボット導入を最大30万円補助します。`, tags: [c.name, '介護ロボット', '補助金', '愛知県', '介護人材'],
      s1: `<p>${c.name}介護ロボット導入補助金は、<span class="marker">介護事業所への介護ロボット・ICT機器の導入</span>を支援する制度です。</p><p>介護人材の不足が深刻化する中、テクノロジーの活用で介護職員の身体的負担を軽減し、ケアの質を向上させることが求められています。</p><p>補助額は<strong>導入費用の1/2以内、最大30万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象機器"><p>移乗支援ロボット（装着型・非装着型）</p><p>見守りセンサー</p><p>排泄予測デバイス</p><p>介護記録ICTシステム</p></div><p>${c.name}介護保険課に<span class="marker">導入前に申請</span>。機器選定の相談も受け付けています。</p>`,
      s3: `<p>導入費の1/2以内で<strong>最大30万円</strong>。複数機器の導入も可（合算で上限内）。</p><p><span class="marker">導入後1年間の活用報告</span>が必要です。</p><div class="highlight-box">国の「介護ロボット導入支援事業」と併用可能な場合があります。県の介護ロボット体験センターで試用もできます。</div>` },
    { cat: 'living', slug: `${c.prefix}community-bus`, title: `${c.name} コミュニティバス高齢者無料乗車証`, amount: '年間無料パス（実質約3万円相当）', amountNum: 3, elig: `${c.name}に住所を有する70歳以上の方`, period: '毎年3月〜4月（年度更新）', descr: `${c.name}が実施するコミュニティバス高齢者無料乗車制度です。70歳以上の方にコミュニティバスの年間無料パスを交付します。`, tags: [c.name, 'コミュニティバス', '高齢者無料', '愛知県', '公共交通'],
      s1: `<p>${c.name}コミュニティバス高齢者無料乗車証は、<span class="marker">70歳以上の市民</span>にコミュニティバスの年間無料パスを交付する制度です。</p><p>高齢者の外出促進と社会参加、フレイル予防を目的としています。買い物や通院など日常の移動をサポートし、免許返納後の生活の足を確保します。</p><p><span class="marker-green">申請すれば無料</span>でパスが交付されます。</p>`,
      s2: `<div class="summary-box" data-title="利用方法"><p>70歳以上で${c.name}に住民登録がある方</p><p>申請時に本人確認書類を持参</p><p>写真付きの無料乗車証を発行</p></div><p>${c.name}交通政策課または各支所窓口で<span class="marker">いつでも申請可能</span>。翌年度への更新は3月〜4月。</p>`,
      s3: `<p>コミュニティバス全路線が<strong>年間無料</strong>で乗り放題。通常運賃の年間約3万円相当。</p><p><span class="marker">市内路線バスの割引</span>（半額）も併せて適用されます。</p><div class="note-box">運転免許を自主返納した65〜69歳の方も申請可能です。${c.name}は公共交通の充実に力を入れています。</div>` },
    { cat: 'disaster', slug: `${c.prefix}earthquake-shelter-reform`, title: `${c.name} 耐震シェルター設置補助金`, amount: '最大30万円', amountNum: 30, elig: `${c.name}内の旧耐震基準住宅に居住する高齢者・障害者世帯`, period: '毎年4月〜12月', descr: `${c.name}が実施する耐震シェルター設置補助金です。耐震改修が困難な世帯の室内シェルター設置を最大30万円補助します。`, tags: [c.name, '耐震シェルター', '補助金', '愛知県', '地震対策'],
      s1: `<p>${c.name}耐震シェルター設置補助金は、<span class="marker">旧耐震基準住宅に居住する高齢者・障害者世帯</span>に耐震シェルターの設置費用を補助する制度です。</p><p>住宅全体の耐震改修が経済的に困難な場合でも、居室の一部をシェルター化することで地震時の安全を確保できます。南海トラフ地震への備えとして重要です。</p><p>補助額は<strong>設置費用の9/10以内、最大30万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>昭和56年5月以前建築の木造住宅</p><p>65歳以上のみの世帯または障害者世帯</p><p>市の耐震診断を受けていること</p><p>市認定の耐震シェルター製品を設置</p></div><p>${c.name}建築指導課に<span class="marker">設置前に申請</span>。耐震診断がまだの方は無料診断から。</p>`,
      s3: `<p>設置費の9/10以内で<strong>最大30万円</strong>。防災ベッド型も対象。</p><p><span class="marker">設置工事は通常1〜2日</span>で完了し、住みながら対策可能です。</p><div class="highlight-box">耐震シェルターは寝室やリビングに設置でき、大規模な工事なしに命を守れます。まずは無料耐震診断をお申し込みください。</div>` },
    { cat: 'education', slug: `${c.prefix}gifted-support`, title: `${c.name} 子ども才能開花支援補助金`, amount: '最大年間10万円', amountNum: 10, elig: `${c.name}に住所を有する小中学生で文化・スポーツ分野の全国大会等に出場する児童生徒`, period: '通年', descr: `${c.name}が実施する才能開花支援補助金です。全国大会等に出場する子どもの遠征費・参加費を年間最大10万円補助します。`, tags: [c.name, '才能開花', '全国大会', '愛知県', '子ども支援'],
      s1: `<p>${c.name}子ども才能開花支援補助金は、<span class="marker">全国規模の大会やコンクールに出場する子どもたち</span>の遠征費用を支援する制度です。</p><p>スポーツ・文化・芸術・科学等の分野で優秀な成績を収めた児童生徒が、経済的理由で全国大会への挑戦を諦めることのないよう支援します。</p><p>補助額は<strong>遠征費・参加費の実費、年間最大10万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象大会"><p>都道府県大会以上の公認大会</p><p>全国規模のコンクール・コンテスト</p><p>科学オリンピック等の学術大会</p><p>国際大会の日本代表選考会</p></div><p>${c.name}教育委員会に<span class="marker">大会出場決定後に申請</span>。出場証明書または推薦書が必要です。</p>`,
      s3: `<p>交通費・宿泊費・参加費の実費で<strong>年間最大10万円</strong>。複数大会の合算も可。</p><p><span class="marker">個人・団体いずれも対象</span>（団体の場合は1人あたりの金額）。</p><div class="note-box">${c.name}の子どもたちの活躍を応援します。大会結果は${c.name}広報紙でも紹介させていただきます。</div>` },
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

export const cityGrantsBatch78: Grant[] = cities.flatMap(c => genGrants(c));
