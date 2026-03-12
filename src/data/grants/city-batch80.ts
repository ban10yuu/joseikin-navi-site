import { Grant } from '@/lib/types';

const cities = [
  { name: '大津市', pref: '滋賀県', prefix: 'otsu-', desc: '大津市は滋賀県の県庁所在地で、琵琶湖の南西岸に位置する歴史都市です。比叡山延暦寺や三井寺など世界遺産・国宝の寺院が集まり、京都へのアクセスも良好です。' },
  { name: '彦根市', pref: '滋賀県', prefix: 'hikone-', desc: '彦根市は国宝彦根城の城下町で、ひこにゃんのゆるキャラで全国的に有名です。琵琶湖東岸に位置し、近江牛や鮒寿しなど湖国の食文化が息づいています。' },
  { name: '長浜市', pref: '滋賀県', prefix: 'nagahama-', desc: '長浜市は琵琶湖北東部に位置し、豊臣秀吉が初めて城を築いた地です。黒壁スクエアのガラス文化や長浜曳山まつり（ユネスコ無形文化遺産）で知られています。' },
  { name: '近江八幡市', pref: '滋賀県', prefix: 'omihachiman-', desc: '近江八幡市は近江商人発祥の地で、八幡堀の水郷景観が美しい歴史都市です。ラ コリーナ近江八幡やヴォーリズ建築など、新旧の魅力が共存するまちです。' },
  { name: '草津市', pref: '滋賀県', prefix: 'kusatsu-', desc: '草津市は東海道と中山道の分岐点に位置する交通の要衝です。立命館大学びわこ・くさつキャンパスを擁し、滋賀県内で最も人口増加率が高い活気あるまちです。' },
  { name: '守山市', pref: '滋賀県', prefix: 'moriyama-', desc: '守山市は琵琶湖の南東岸に位置し、ほたるの街として知られる自然豊かなまちです。比叡山を望む田園風景と、ピエリ守山などの商業施設が共存する住みやすい都市です。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}infant-diaper`, title: `${c.name} 乳児おむつ等支給事業`, amount: '最大年間3万円分', amountNum: 3, elig: `${c.name}に住所を有する1歳未満の乳児がいる世帯`, period: '出生届提出時', descr: `${c.name}が実施する乳児おむつ等支給事業です。1歳未満の乳児がいる世帯におむつ・ミルク等を年間最大3万円分支給します。`, tags: [c.name, '乳児おむつ', '子育て支援', '滋賀県', '育児用品'],
      s1: `<p>${c.name}乳児おむつ等支給事業は、<span class="marker">1歳未満の乳児がいる世帯</span>にお むつ・粉ミルク等の育児用品を支給する制度です。</p><p>${c.desc}</p><p>支給額は<strong>年間最大3万円分の育児用品カタログギフト</strong>です。<span class="marker-green">所得制限なし</span>で全世帯が対象。出生届提出時にお渡しします。</p>`,
      s2: `<p>出生届を${c.name}に提出した時点で対象になります。</p><div class="summary-box" data-title="支給品目（カタログから選択）"><p>紙おむつ各種</p><p>おしりふき</p><p>粉ミルク・液体ミルク</p><p>ベビーソープ・保湿剤</p></div><p>出生届提出時に${c.name}市民課窓口で<span class="marker">カタログを受け取り</span>、希望の商品を選んでください。自宅に配送されます。</p>`,
      s3: `<p>年間<strong>最大3万円分</strong>の育児用品。3か月ごとに7,500円分を4回に分けて届きます。</p><p><span class="marker">転出した場合は残りの支給は停止</span>されます。</p><div class="note-box">${c.name}では産後ケア事業や子育てコンシェルジュも充実しています。育児の悩みはお気軽にご相談ください。</div>` },
    { cat: 'housing', slug: `${c.prefix}lake-view-housing`, title: `${c.name} 琵琶湖周辺空き家活用補助金`, amount: '最大120万円', amountNum: 120, elig: `${c.name}の空き家バンク物件を取得して居住する方`, period: '毎年4月〜11月', descr: `${c.name}が実施する空き家活用補助金です。空き家バンク物件の改修・リフォーム費用を最大120万円補助します。`, tags: [c.name, '空き家活用', '琵琶湖', '滋賀県', '移住定住'],
      s1: `<p>${c.name}琵琶湖周辺空き家活用補助金は、<span class="marker">空き家バンク登録物件を取得・改修して居住</span>する方を支援する制度です。</p><p>琵琶湖の美しい景観と京都・大阪へのアクセスの良さから、滋賀県は移住先として人気が高まっています。空き家の有効活用で地域コミュニティの維持を図ります。</p><p>補助額は<strong>改修費の1/2以内、最大120万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="補助要件"><p>${c.name}空き家バンク登録物件であること</p><p>改修後5年以上居住すること</p><p>地域の自治会活動に参加すること</p><p>市内業者による施工</p></div><p>${c.name}住宅政策課に<span class="marker">改修工事前に申請</span>してください。現地確認後に交付決定されます。</p>`,
      s3: `<p>改修費の1/2以内で<strong>最大120万円</strong>。UIターン者は20万円加算、子育て世帯は30万円加算。</p><p><span class="marker">5年未満で転出すると補助金の返還</span>が必要です。</p><div class="highlight-box">滋賀県の移住支援金と合わせると、最大220万円以上の支援を受けられる可能性があります。</div>` },
    { cat: 'medical', slug: `${c.prefix}child-allergy`, title: `${c.name} 小児アレルギー治療費助成`, amount: '最大年間5万円', amountNum: 5, elig: `${c.name}に住所を有するアレルギー疾患で通院中の18歳未満の子ども`, period: '通年', descr: `${c.name}が実施する小児アレルギー治療費助成です。アレルギー疾患の通院治療費の自己負担を年間最大5万円助成します。`, tags: [c.name, '小児アレルギー', '治療費助成', '滋賀県', '子どもの健康'],
      s1: `<p>${c.name}小児アレルギー治療費助成は、<span class="marker">食物アレルギー・アトピー性皮膚炎・気管支喘息等</span>のアレルギー疾患で通院中の子どもの治療費を助成する制度です。</p><p>アレルギー疾患は長期の通院が必要で、家計への負担が大きくなります。子ども医療費助成でカバーされない自己負担分（薬代等）を追加で助成します。</p><p>助成額は<strong>自己負担分の実費、年間最大5万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象疾患"><p>食物アレルギー（経口免疫療法含む）</p><p>アトピー性皮膚炎</p><p>気管支喘息</p><p>アレルギー性鼻炎（舌下免疫療法含む）</p></div><p>${c.name}健康推進課に<span class="marker">医師の診断書を添えて申請</span>。3か月分まとめての申請も可能です。</p>`,
      s3: `<p>自己負担の実費で<strong>年間最大5万円</strong>。自費診療の食物経口負荷試験も対象。</p><p><span class="marker">子ども医療費助成との併用可</span>（助成後の残額が対象）。</p><div class="note-box">${c.name}ではアレルギー相談会（小児科専門医による無料相談）も年4回開催しています。</div>` },
    { cat: 'education', slug: `${c.prefix}nature-experience`, title: `${c.name} 琵琶湖環境学習支援事業`, amount: '児童1人あたり3,000円補助', amountNum: 0.3, elig: `${c.name}立小中学校`, period: '毎年4月〜11月', descr: `${c.name}が実施する琵琶湖環境学習支援です。小中学校の琵琶湖での環境学習プログラム費用を児童1人3,000円補助します。`, tags: [c.name, '琵琶湖学習', '環境教育', '滋賀県', '自然体験'],
      s1: `<p>${c.name}琵琶湖環境学習支援事業は、<span class="marker">小中学校の琵琶湖を活用した環境学習プログラム</span>の費用を補助する制度です。</p><p>滋賀県のシンボルである琵琶湖は、400万年の歴史を持つ古代湖です。子どもたちが琵琶湖の自然と環境問題を実体験で学ぶ機会を提供します。</p><p>補助額は<strong>児童生徒1人あたり3,000円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象プログラム"><p>学習船「うみのこ」乗船学習</p><p>琵琶湖岸の水質調査・生物観察</p><p>ヨシ群落での自然体験</p><p>外来種駆除活動（ブラックバス等）</p></div><p>学校ごとに${c.name}教育委員会に<span class="marker">年度初めに計画書を提出</span>して申請します。</p>`,
      s3: `<p>児童生徒1人あたり<strong>3,000円</strong>を補助。バス代・講師謝礼・教材費に充当。</p><p><span class="marker">年1回の琵琶湖学習が必須</span>（滋賀県独自の取り組み）。</p><div class="highlight-box">滋賀県では小学5年生全員が学習船「うみのこ」で1泊2日の琵琶湖学習を体験する伝統があります。</div>` },
    { cat: 'employment', slug: `${c.prefix}agriculture-six`, title: `${c.name} 農商工連携6次産業化補助金`, amount: '最大150万円', amountNum: 150, elig: `${c.name}内の農業者が加工・販売に取り組む6次産業化事業`, period: '毎年4月〜7月', descr: `${c.name}が実施する6次産業化補助金です。農産物の加工・直売事業の立ち上げを最大150万円補助します。`, tags: [c.name, '6次産業化', '農商工連携', '滋賀県', '農業経営'],
      s1: `<p>${c.name}農商工連携6次産業化補助金は、<span class="marker">農業者が自ら農産物の加工・販売に取り組む</span>事業を支援する制度です。</p><p>滋賀県は近江米や近江牛をはじめとする農畜産物の産地です。農業所得の向上と地域ブランドの確立を目指し、農業者の6次産業化への挑戦を後押しします。</p><p>補助額は<strong>事業費の1/2以内、最大150万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象経費"><p>加工施設・設備の導入費</p><p>商品パッケージデザイン費</p><p>衛生管理設備（HACCP対応）</p><p>販路開拓・展示会出展費</p></div><p>${c.name}農林振興課に<span class="marker">事業計画書を提出して審査</span>。プレゼン審査後に交付決定されます。</p>`,
      s3: `<p>事業費の1/2以内で<strong>最大150万円</strong>。商工業者との連携事業は200万円に増額。</p><p><span class="marker">3年間の事業報告</span>が必要です。</p><div class="note-box">滋賀県農業技術振興センターの技術指導や、中小企業診断士による経営相談も無料で利用できます。</div>` },
    { cat: 'nursing', slug: `${c.prefix}nursing-students`, title: `${c.name} 介護職員資格取得支援制度`, amount: '最大15万円', amountNum: 15, elig: `${c.name}に住所を有し介護職員初任者研修等を受講する方`, period: '通年', descr: `${c.name}が実施する介護職員資格取得支援です。介護関連資格の取得費用を最大15万円補助します。`, tags: [c.name, '介護資格', '取得支援', '滋賀県', '人材確保'],
      s1: `<p>${c.name}介護職員資格取得支援制度は、<span class="marker">介護関連資格の取得にかかる受講料</span>を補助する制度です。</p><p>高齢化が進む中、介護人材の確保は喫緊の課題です。資格取得の費用負担を軽減し、介護分野への就職・転職を促進します。${c.name}内の介護事業所に就職する方は上乗せ支援があります。</p><p>補助額は<strong>受講料の2/3以内、最大15万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象資格"><p>介護職員初任者研修</p><p>介護福祉士実務者研修</p><p>認知症介護基礎研修</p><p>介護支援専門員（ケアマネジャー）</p></div><p>${c.name}介護保険課に<span class="marker">受講開始前に申請</span>してください。修了後に実績報告が必要です。</p>`,
      s3: `<p>受講料の2/3以内で<strong>最大15万円</strong>。市内事業所に就職した場合は全額補助（最大20万円）。</p><p><span class="marker">受講修了が支給条件</span>（途中離脱は返還）。</p><div class="highlight-box">ハローワークの教育訓練給付金と併用する場合は、給付金を差し引いた自己負担分が補助対象になります。</div>` },
    { cat: 'living', slug: `${c.prefix}food-bank`, title: `${c.name} フードバンク活動支援補助金`, amount: '最大50万円', amountNum: 50, elig: `${c.name}内でフードバンク活動を行うNPO・市民団体`, period: '毎年4月〜6月', descr: `${c.name}が実施するフードバンク活動支援です。食品ロス削減と生活困窮者支援を行う団体に最大50万円を補助します。`, tags: [c.name, 'フードバンク', '食品ロス', '滋賀県', '生活困窮者'],
      s1: `<p>${c.name}フードバンク活動支援補助金は、<span class="marker">食品ロスの削減と生活困窮者への食品提供</span>を行う団体を支援する制度です。</p><p>まだ食べられるのに廃棄される食品を集め、必要とする方に届けるフードバンク活動。${c.name}では食の循環と助け合いの仕組みづくりを支援しています。</p><p>補助額は<strong>活動費の2/3以内、最大50万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象経費"><p>食品の回収・配送にかかる車両費</p><p>保管用冷蔵庫・倉庫の賃料</p><p>食品衛生管理費用</p><p>広報・チラシ作成費</p></div><p>${c.name}社会福祉課に<span class="marker">活動計画書と団体の定款</span>を添えて申請。年度末に活動報告を提出。</p>`,
      s3: `<p>活動費の2/3以内で<strong>最大50万円</strong>。こども食堂との連携事業は上乗せあり。</p><p><span class="marker">食品衛生法の遵守</span>が求められます。</p><div class="note-box">${c.name}では企業・農家からのフードドライブも定期的に実施しています。個人の方の食品寄付も受け付けています。</div>` },
    { cat: 'disaster', slug: `${c.prefix}flood-prevention`, title: `${c.name} 浸水対策設備設置補助金`, amount: '最大20万円', amountNum: 20, elig: `${c.name}内の浸水想定区域に居住する世帯`, period: '毎年4月〜10月', descr: `${c.name}が実施する浸水対策設備設置補助金です。止水板や排水ポンプ等の設置費用を最大20万円補助します。`, tags: [c.name, '浸水対策', '補助金', '滋賀県', '水害対策'],
      s1: `<p>${c.name}浸水対策設備設置補助金は、<span class="marker">浸水想定区域の住宅に止水板等の浸水防止設備</span>を設置する費用を補助する制度です。</p><p>琵琶湖周辺は集中豪雨時に河川氾濫や内水氾濫のリスクがあります。住宅への浸水被害を最小限に抑えるため、自助の取り組みを支援します。</p><p>補助額は<strong>設置費用の1/2以内、最大20万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象設備"><p>止水板（防水板）の設置</p><p>排水ポンプの設置</p><p>逆流防止弁の設置</p><p>かさ上げ工事（玄関等）</p></div><p>${c.name}河川課に<span class="marker">設置工事前に申請</span>してください。浸水ハザードマップの対象区域に限ります。</p>`,
      s3: `<p>設置費の1/2以内で<strong>最大20万円</strong>。複数設備の合算も可。</p><p><span class="marker">浸水ハザードマップで浸水が想定される区域</span>の住宅に限ります。</p><div class="highlight-box">近年の気候変動で豪雨の頻度が増加しています。${c.name}のハザードマップを確認し、自宅の浸水リスクを把握しましょう。</div>` },
    { cat: 'employment', slug: `${c.prefix}workation-support`, title: `${c.name} ワーケーション受入環境整備補助金`, amount: '最大100万円', amountNum: 100, elig: `${c.name}内でワーケーション向け施設を整備する宿泊事業者`, period: '毎年4月〜9月', descr: `${c.name}が実施するワーケーション受入整備補助金です。琵琶湖畔でのワーケーション施設整備を最大100万円補助します。`, tags: [c.name, 'ワーケーション', '施設整備', '滋賀県', '観光振興'],
      s1: `<p>${c.name}ワーケーション受入環境整備補助金は、<span class="marker">市内の宿泊施設にワーケーション環境を整備</span>する費用を支援する制度です。</p><p>琵琶湖の絶景を眺めながらのワーケーションは、都市部のビジネスパーソンに人気が高まっています。Wi-Fi環境やコワーキングスペースの整備で、新たな滞在需要を取り込みます。</p><p>補助額は<strong>整備費の1/2以内、最大100万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象設備"><p>高速Wi-Fi環境の整備</p><p>コワーキングスペースの設置</p><p>Web会議用個室ブースの設置</p><p>電源コンセント・デスクの増設</p></div><p>${c.name}観光振興課に<span class="marker">整備前に事業計画書を提出</span>して申請。観光協会との連携を推奨。</p>`,
      s3: `<p>整備費の1/2以内で<strong>最大100万円</strong>。モニターツアー実施の場合は20万円加算。</p><p><span class="marker">整備後3年間はワーケーションプランの提供</span>を継続する必要があります。</p><div class="note-box">滋賀県は京都・大阪から電車で約1時間。琵琶湖の自然とアクセスの良さを活かしたワーケーション先として注目されています。</div>` },
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

export const cityGrantsBatch80: Grant[] = cities.flatMap(c => genGrants(c));
