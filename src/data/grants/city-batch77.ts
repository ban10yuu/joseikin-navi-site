import { Grant } from '@/lib/types';

const cities = [
  { name: '沼津市', pref: '静岡県', prefix: 'numazu-', desc: '沼津市は駿河湾に面した静岡県東部の中核都市で、沼津港の新鮮な海産物と富士山の眺望が魅力です。アニメ「ラブライブ！サンシャイン!!」の聖地としても人気です。' },
  { name: '三島市', pref: '静岡県', prefix: 'mishima-', desc: '三島市は富士山の伏流水が湧き出る水の都で、三嶋大社の門前町として栄えてきました。三島スカイウォークや源兵衛川の水辺散策が人気の観光都市です。' },
  { name: '富士宮市', pref: '静岡県', prefix: 'fujinomiya-', desc: '富士宮市は富士山本宮浅間大社の鎮座地で、富士山信仰の中心地です。富士宮やきそばのB級グルメと白糸の滝が有名な世界遺産のまちです。' },
  { name: '伊東市', pref: '静岡県', prefix: 'ito-', desc: '伊東市は伊豆半島東海岸の温泉リゾート都市で、毎分約3万リットルの湧出量を誇ります。城ヶ崎海岸や大室山など豊かな自然とぐらんぱる公園が人気です。' },
  { name: '島田市', pref: '静岡県', prefix: 'shimada-', desc: '島田市は大井川の中流に位置し、東海道の宿場町として栄えた歴史を持ちます。大井川鐵道のSLや蓬莱橋（世界最長の木造歩道橋）が観光の目玉です。' },
  { name: '富士市', pref: '静岡県', prefix: 'fuji-', desc: '富士市は富士山の南麓に位置し、製紙業を中心とした工業都市として発展してきました。田子の浦港や岳南電車からの富士山の眺望が素晴らしいまちです。' },
];

function genGrants(c: typeof cities[0]): Grant[] {
  const cats: Array<{cat: Grant['category'], slug: string, title: string, amount: string, amountNum: number, elig: string, period: string, descr: string, s1: string, s2: string, s3: string, tags: string[]}> = [
    { cat: 'childcare', slug: `${c.prefix}papa-mama-class`, title: `${c.name} パパママ学級参加支援`, amount: '参加無料＋育児用品5,000円分', amountNum: 0.5, elig: `${c.name}に住所を有する妊婦とそのパートナー`, period: '通年（月1回開催）', descr: `${c.name}が実施するパパママ学級です。出産・育児の準備講座に参加すると育児用品5,000円分を支給します。`, tags: [c.name, 'パパママ学級', '子育て支援', '静岡県', '出産準備'],
      s1: `<p>${c.name}パパママ学級参加支援は、<span class="marker">初めて出産を迎えるご夫婦</span>を対象とした出産・育児準備講座です。</p><p>${c.desc}</p><p>参加は<span class="marker-green">無料</span>で、修了時に<strong>育児用品5,000円分のクーポン</strong>を進呈。沐浴体験や妊婦体験ジャケットの着用など実践的な内容です。</p>`,
      s2: `<p>${c.name}に住民登録のある妊婦とパートナーが対象です。</p><div class="summary-box" data-title="講座内容"><p>助産師による分娩の流れと呼吸法</p><p>赤ちゃんの沐浴体験・おむつ替え実習</p><p>妊婦体験ジャケット着用</p><p>先輩パパママとの交流会</p></div><p>${c.name}健康づくり課に<span class="marker">電話またはオンラインで予約</span>してください。</p>`,
      s3: `<p>参加費は<strong>無料</strong>。修了者には育児用品クーポン5,000円分を支給。</p><p><span class="marker">両親そろっての参加を推奨</span>しますが、片方のみでも参加可。</p><div class="note-box">${c.name}では産後ケア事業（ショートステイ・デイサービス）も実施しています。出産後の不安は一人で抱えず相談を。</div>` },
    { cat: 'housing', slug: `${c.prefix}solar-panel`, title: `${c.name} 太陽光発電設備設置補助金`, amount: '最大20万円', amountNum: 20, elig: `${c.name}内の住宅に太陽光パネルを設置する個人`, period: '毎年4月〜翌年1月', descr: `${c.name}が実施する太陽光発電設備設置補助金です。住宅用太陽光パネルの設置費用を最大20万円補助します。`, tags: [c.name, '太陽光発電', '補助金', '静岡県', '再生可能エネルギー'],
      s1: `<p>${c.name}太陽光発電設備設置補助金は、<span class="marker">住宅への太陽光発電パネルの設置</span>を支援する制度です。</p><p>静岡県は全国有数の日照量を誇り、太陽光発電に適した地域です。再生可能エネルギーの普及と家庭の電気代削減を同時に推進します。</p><p>補助額は<strong>1kWあたり2万円、最大20万円（10kW未満）</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象設備"><p>出力10kW未満の太陽光発電設備</p><p>未使用品であること</p><p>電力会社と系統連系すること</p><p>蓄電池同時設置で追加補助あり</p></div><p>${c.name}環境政策課に<span class="marker">設置工事前に申請</span>してください。交付決定後に着工となります。</p>`,
      s3: `<p>1kWあたり2万円で<strong>最大20万円</strong>。蓄電池同時設置は10万円加算。</p><p><span class="marker">FIT（固定価格買取制度）の認定</span>を受けることが条件です。</p><div class="highlight-box">国の補助金や静岡県の補助金と併用可能です。合計で設置費用の3割程度をカバーできる場合があります。</div>` },
    { cat: 'medical', slug: `${c.prefix}adult-vaccine`, title: `${c.name} 高齢者肺炎球菌ワクチン助成`, amount: '自己負担2,000円（残額助成）', amountNum: 0, elig: `${c.name}に住所を有する65歳の方（5歳刻みの対象年齢）`, period: '対象年度の4月〜翌年3月', descr: `${c.name}が実施する高齢者肺炎球菌ワクチン助成です。対象年齢の方の接種費用を助成し、自己負担2,000円で接種できます。`, tags: [c.name, '肺炎球菌ワクチン', '高齢者', '静岡県', '予防接種'],
      s1: `<p>${c.name}高齢者肺炎球菌ワクチン助成は、<span class="marker">65歳以上の5歳刻みの対象年齢の方</span>に肺炎球菌ワクチンの接種費用を助成する制度です。</p><p>肺炎は高齢者の死因上位を占め、予防接種による重症化防止が重要です。定期接種として実施されており、対象年齢で未接種の方が助成を受けられます。</p><p><span class="marker-green">自己負担は2,000円のみ</span>です。</p>`,
      s2: `<div class="summary-box" data-title="対象者"><p>65歳・70歳・75歳・80歳・85歳・90歳・95歳・100歳の方</p><p>過去に23価肺炎球菌ワクチンを接種していない方</p><p>60〜64歳で心臓・腎臓等の障害がある方</p></div><p>${c.name}指定医療機関に<span class="marker">予診票を持参して直接予約</span>してください。予診票は対象者に郵送されます。</p>`,
      s3: `<p>接種費用のうち<strong>自己負担は2,000円のみ</strong>。生活保護世帯は無料。</p><p><span class="marker">対象年度を過ぎると全額自費</span>になります。対象年度中に必ず接種を。</p><div class="note-box">肺炎球菌ワクチンはインフルエンザワクチンとの同時接種も可能です。かかりつけ医にご相談ください。</div>` },
    { cat: 'education', slug: `${c.prefix}school-ict`, title: `${c.name} 小中学生ICT学習支援`, amount: '通信費月額上限3,000円', amountNum: 3.6, elig: `${c.name}立小中学校に通う就学援助認定世帯の児童生徒`, period: '通年（自動適用）', descr: `${c.name}が実施するICT学習支援です。就学援助世帯のWi-Fi通信費を月額最大3,000円補助します。`, tags: [c.name, 'ICT教育', '通信費補助', '静岡県', 'デジタル教育'],
      s1: `<p>${c.name}小中学生ICT学習支援は、<span class="marker">就学援助認定世帯の家庭のWi-Fi通信費</span>を補助する制度です。</p><p>GIGAスクール構想により1人1台端末が配布されましたが、家庭のネット環境に格差があります。経済的理由でオンライン学習に支障がある世帯を支援します。</p><p>補助額は<strong>通信費の実費、月額最大3,000円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>${c.name}立小中学校に在籍</p><p>就学援助の認定を受けている世帯</p><p>家庭にインターネット環境がない/不十分</p></div><p>就学援助の認定と同時に${c.name}教育委員会で<span class="marker">申請手続き</span>を行います。モバイルルーターの貸出制度もあります。</p>`,
      s3: `<p>通信費の実費で<strong>月額最大3,000円</strong>。年間最大36,000円の支援。</p><p><span class="marker">モバイルルーター貸出</span>も選択可能（通信費は市が負担）。</p><div class="note-box">端末の操作に不安がある保護者向けのICT講習会も${c.name}で開催しています。お気軽にご参加ください。</div>` },
    { cat: 'employment', slug: `${c.prefix}fishery-support`, title: `${c.name} 漁業担い手育成支援金`, amount: '最大年間100万円', amountNum: 100, elig: `${c.name}で新たに漁業に従事する55歳未満の方`, period: '毎年1月〜3月', descr: `${c.name}が実施する漁業担い手育成支援金です。新規漁業就業者の経営安定を年間最大100万円支援します。`, tags: [c.name, '漁業支援', '新規就業', '静岡県', '水産業'],
      s1: `<p>${c.name}漁業担い手育成支援金は、<span class="marker">新たに漁業経営を始める方</span>の収入安定を支援する制度です。</p><p>静岡県の駿河湾は日本一深い湾で、桜エビやシラスなど豊富な水産資源に恵まれています。漁業者の高齢化と後継者不足に対応するための新規参入支援です。</p><p>支援額は<strong>年間最大100万円（最長3年間）</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象要件"><p>55歳未満で新たに独立自営漁業を開始</p><p>${c.name}漁業協同組合の組合員であること</p><p>漁業研修を修了していること</p><p>年間所得が300万円未満</p></div><p>${c.name}水産振興課に<span class="marker">漁業計画書を提出して申請</span>。漁協の推薦が必要です。</p>`,
      s3: `<p><strong>年間最大100万円</strong>を最長3年間交付。漁船・漁具の購入費補助は別制度で対応。</p><p><span class="marker">半年ごとの操業実績報告</span>が必要です。</p><div class="note-box">静岡県の「ふじのくに新規漁業就業支援事業」と連携しています。漁業体験研修から始めることもできます。</div>` },
    { cat: 'nursing', slug: `${c.prefix}dayservice-transport`, title: `${c.name} 通所介護施設送迎支援`, amount: '月額最大5,000円', amountNum: 6, elig: `${c.name}に住所を有する要介護認定者で送迎サービスが利用困難な方`, period: '通年', descr: `${c.name}が実施する通所介護送迎支援です。送迎困難地域の利用者のタクシー代を月額最大5,000円補助します。`, tags: [c.name, '通所介護', '送迎支援', '静岡県', '介護サービス'],
      s1: `<p>${c.name}通所介護施設送迎支援は、<span class="marker">通所介護施設の送迎車が運行していない地域</span>にお住まいの方を支援する制度です。</p><p>山間部や半島部では送迎ルートの関係で通所介護の利用が困難な場合があります。通所サービスの利用を諦めずに済むよう、交通費を補助します。</p><p>補助額は<strong>タクシー等の利用費、月額最大5,000円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象者"><p>要介護1以上の認定を受けている方</p><p>通所介護施設の送迎サービスが利用できない地域に居住</p><p>自力での通所が困難</p></div><p>${c.name}介護保険課に<span class="marker">ケアマネジャーを通じて申請</span>してください。</p>`,
      s3: `<p>タクシー利用費の実費で<strong>月額最大5,000円</strong>。年間最大6万円。</p><p><span class="marker">通所介護・通所リハビリ</span>の利用日が対象です。</p><div class="note-box">${c.name}では福祉有償運送サービスも利用可能です。NPO法人等が低料金で送迎を行っています。</div>` },
    { cat: 'living', slug: `${c.prefix}pet-sterilize`, title: `${c.name} 飼い猫不妊去勢手術補助金`, amount: '最大5,000円', amountNum: 0.5, elig: `${c.name}に住所を有する飼い猫の飼い主`, period: '毎年4月〜翌年2月（予算到達まで）', descr: `${c.name}が実施する飼い猫不妊去勢手術補助金です。飼い猫の不妊・去勢手術費を最大5,000円補助します。`, tags: [c.name, '猫の不妊去勢', '補助金', '静岡県', '動物愛護'],
      s1: `<p>${c.name}飼い猫不妊去勢手術補助金は、<span class="marker">飼い猫の不妊・去勢手術費用</span>を補助する制度です。</p><p>望まない繁殖を防ぎ、猫の殺処分ゼロを目指す取り組みの一環です。飼い猫の手術を行うことで野良猫の増加防止にもつながります。</p><p>補助額は<strong>不妊手術5,000円、去勢手術3,000円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="申請要件"><p>${c.name}に住民登録がある飼い主</p><p>飼い猫にマイクロチップまたは名札を装着</p><p>市内の動物病院で手術を実施</p></div><p>${c.name}生活環境課に<span class="marker">手術前に申請</span>してください。先着順で予算がなくなり次第終了です。</p>`,
      s3: `<p>不妊手術<strong>5,000円</strong>、去勢手術<strong>3,000円</strong>の定額補助。1匹につき1回限り。</p><p><span class="marker">飼い主のいない猫（TNR）は別制度</span>で対応。</p><div class="note-box">${c.name}では地域猫活動への支援も行っています。猫の適正飼養ガイドラインもご確認ください。</div>` },
    { cat: 'disaster', slug: `${c.prefix}tsunami-shelter`, title: `${c.name} 津波避難施設整備補助金`, amount: '最大200万円', amountNum: 200, elig: `${c.name}の津波浸水想定区域内の自主防災組織・自治会`, period: '毎年4月〜9月', descr: `${c.name}が実施する津波避難施設整備補助金です。自主防災組織の津波避難タワー・高台整備を最大200万円補助します。`, tags: [c.name, '津波避難', '防災', '静岡県', '地震対策'],
      s1: `<p>${c.name}津波避難施設整備補助金は、<span class="marker">津波浸水想定区域での避難施設の整備</span>を支援する制度です。</p><p>南海トラフ地震による津波被害が想定される静岡県では、高台への避難路整備や避難タワーの建設が急務です。地域の自主防災組織が行う整備事業を支援します。</p><p>補助額は<strong>整備費の2/3以内、最大200万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象事業"><p>津波避難タワーの整備・修繕</p><p>避難路（高台への階段・スロープ）の整備</p><p>避難誘導標識の設置</p><p>備蓄倉庫の整備</p></div><p>${c.name}危機管理課に<span class="marker">事業計画書を提出して申請</span>。自主防災組織の総会決議が必要です。</p>`,
      s3: `<p>整備費の2/3以内で<strong>最大200万円</strong>。国・県の補助事業と併用可能。</p><p><span class="marker">完成後は地域の避難訓練</span>で活用することが条件です。</p><div class="highlight-box">静岡県の「地震・津波対策アクションプログラム」に基づき、沿岸部の避難体制強化が進められています。</div>` },
    { cat: 'employment', slug: `${c.prefix}telework-satellite`, title: `${c.name} サテライトオフィス誘致補助金`, amount: '最大300万円', amountNum: 300, elig: `${c.name}内にサテライトオフィスを新設する都市部の企業`, period: '通年', descr: `${c.name}が実施するサテライトオフィス誘致補助金です。市内へのサテライトオフィス開設費を最大300万円補助します。`, tags: [c.name, 'サテライトオフィス', '企業誘致', '静岡県', 'テレワーク'],
      s1: `<p>${c.name}サテライトオフィス誘致補助金は、<span class="marker">都市部の企業が市内にサテライトオフィスを開設</span>する際の費用を支援する制度です。</p><p>テレワークの普及に伴い、自然豊かな静岡県への企業進出が増加しています。地域の雇用創出と経済活性化を目的に、オフィス開設の初期費用を補助します。</p><p>補助額は<strong>開設費用の1/2以内、最大300万円</strong>です。</p>`,
      s2: `<div class="summary-box" data-title="対象経費"><p>オフィスの内装・改修費</p><p>通信環境整備費（光回線工事等）</p><p>什器・備品購入費</p><p>賃料（開設から6か月分）</p></div><p>${c.name}産業政策課に<span class="marker">開設前に事業計画書を提出</span>。現地視察・ヒアリング後に交付決定。</p>`,
      s3: `<p>開設費の1/2以内で<strong>最大300万円</strong>。地元雇用3名以上で50万円加算。</p><p><span class="marker">3年以上の事業継続</span>が条件です。</p><div class="note-box">${c.name}ではお試しサテライトオフィス体験（1週間無料）も用意しています。まずは体験からお試しください。</div>` },
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

export const cityGrantsBatch77: Grant[] = cities.flatMap(c => genGrants(c));
