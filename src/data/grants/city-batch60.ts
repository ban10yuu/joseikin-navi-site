import { Grant } from '@/lib/types';

export const cityGrantsBatch60: Grant[] = [
  // ────────────────────────────────────────────────
  // 寝屋川市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'neyagawa-childcare-subsidy',
    title: '寝屋川市 保育料軽減補助金',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['寝屋川市', '保育料軽減', '補助金'],
    eligibility: '寝屋川市に住所を有し、認可外保育施設等を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '寝屋川市が実施する保育料軽減補助金です。認可外保育施設や一時預かり事業の利用料を月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 保育料軽減補助金は、<span class="marker">認可外保育施設や一時預かり事業を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>寝屋川市は大阪市の北東に位置するベッドタウンで、京阪電車沿線を中心に住宅地が広がっています。共働き世帯が多い地域性を踏まえ、認可保育所に入所できなかった世帯への支援として本制度を設けています。</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の所得に応じて補助額が決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>寝屋川市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>世帯の課税証明書</p><p>保護者の本人確認書類</p></div><p>寝屋川市役所こども部保育課の窓口または郵送で申請できます。<span class="marker">四半期ごとの申請が必要</span>で、利用月の翌月以降に領収書を添えて提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は世帯の市民税所得割額に応じて決まり、<strong>月額最大3万円</strong>が支給されます。第2子以降はさらに加算がある場合があります。</p><p><span class="marker">企業主導型保育事業を利用している場合は対象外</span>となる場合があります。事前に保育課へ確認してください。</p><div class="note-box">幼児教育・保育の無償化制度と併用する場合は、無償化の給付額を差し引いた残額が補助の対象となります。認可保育所の待機児童解消にも取り組んでおり、年度途中の入所も随時受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-birth-bonus',
    title: '寝屋川市 出産祝い金',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['寝屋川市', '出産祝い金', '給付金'],
    eligibility: '寝屋川市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '寝屋川市が実施する出産祝い金です。市内在住の方が出産した際に最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>寝屋川市は大阪府北河内地域に位置し、寝屋川公園や打上川治水緑地など緑豊かな住環境が特徴です。少子化対策の一環として、出産にかかる経済的負担を軽減し、安心して子どもを産み育てられる環境づくりを目指しています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限はなく、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で寝屋川市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>寝屋川市役所こども部こども政策課の窓口で申請します。出生届の提出時にあわせて手続きすることをおすすめします。</p><p><span class="marker">申請には母子健康手帳と振込先口座情報が必要</span>です。郵送での申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子は5万円、第2子以降は10万円</strong>が支給されます。多胎児の場合はそれぞれの子に対して支給されます。</p><p><span class="marker">申請期限は出産後6か月以内</span>です。期限を過ぎると受給できなくなりますのでご注意ください。</p><div class="highlight-box">国の出産育児一時金（50万円）や大阪府の出産・子育て応援給付金とは別に受給できます。寝屋川市では妊娠届出時の面談で各種支援制度の案内も行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-housing-purchase',
    title: '寝屋川市 住宅取得補助金',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['寝屋川市', '住宅取得', '補助金'],
    eligibility: '寝屋川市内に新たに住宅を取得する子育て世帯・若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '寝屋川市が実施する住宅取得補助金です。市内に新たに住宅を取得する子育て・若年世帯に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 住宅取得補助金は、<span class="marker">市内に新たに住宅を取得する子育て世帯や若年世帯</span>に対して取得費用の一部を補助する制度です。</p><p>寝屋川市は京阪電鉄沿線のベッドタウンとして発展し、大阪市中心部へのアクセスが良好です。人口減少対策として定住促進を図るため、住宅取得を支援しています。</p><p>補助額は<strong>最大30万円</strong>で、<span class="marker-green">市外からの転入世帯には加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>中学生以下の子どもがいる世帯、または夫婦ともに40歳未満の世帯</p><p>新築・中古住宅の取得（マンション含む）</p><p>取得後1年以内に申請すること</p><p>市税を滞納していないこと</p></div><p>寝屋川市役所まちづくり推進課に申請書と必要書類を提出します。売買契約書や登記事項証明書が必要です。</p><p><span class="marker">住宅取得前の事前相談をおすすめします</span>。要件に該当するか確認のうえ申請に進むのがスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>で、市外からの転入の場合は<strong>10万円加算され最大30万円</strong>となります。</p><p><span class="marker">住宅の床面積や築年数に関する要件</span>がありますので、詳細は窓口でご確認ください。</p><div class="note-box">すまい給付金や住宅ローン減税など国の制度と併用可能です。寝屋川市では空き家バンク制度も実施しており、中古住宅の情報も提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-infertility',
    title: '寝屋川市 不妊治療費助成制度',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['寝屋川市', '不妊治療', '助成金'],
    eligibility: '寝屋川市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '寝屋川市が実施する不妊治療費助成制度です。体外受精や顕微授精などの特定不妊治療にかかる費用を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 不妊治療費助成制度は、<span class="marker">体外受精・顕微授精などの特定不妊治療</span>にかかる費用の一部を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、保険適用外の先進医療や自己負担分はなお高額です。寝屋川市では、子どもを望む夫婦の経済的負担を軽減するため、独自の上乗せ助成を行っています。</p><p>助成額は<strong>1回の治療につき最大30万円</strong>です。<span class="marker-green">保険適用後の自己負担分と先進医療費が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>申請日時点で寝屋川市に住民登録がある法律上の婚姻関係にある夫婦（事実婚を含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行する治療証明書</p><p>医療費の領収書（原本）</p><p>夫婦の住民票・戸籍謄本</p></div><p>寝屋川市保健所健康増進課に申請します。<span class="marker">治療が終了した日の翌日から3か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分と先進医療費を合わせた額のうち、<strong>1回の治療あたり最大30万円</strong>を助成します。</p><p><span class="marker">年間の助成回数に制限がある場合があります</span>。詳細は保健所窓口にお問い合わせください。</p><div class="note-box">大阪府の不妊治療費助成制度と併用できます（重複部分は調整）。寝屋川市では不妊・不育症に関する相談窓口も設置しており、専門の相談員が対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-scholarship',
    title: '寝屋川市 奨学金制度',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '大阪府',
    tags: ['寝屋川市', '奨学金', '教育支援'],
    eligibility: '寝屋川市に住所を有する世帯の高校生・大学生',
    applicationPeriod: '毎年4月〜5月',
    description: '寝屋川市が実施する奨学金制度です。経済的理由で修学が困難な高校生・大学生に月額最大3万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生</span>に対し、奨学金を貸与する制度です。</p><p>寝屋川市は教育熱心な家庭が多い地域として知られ、市内には複数の高等学校があります。すべての若者に学びの機会を保障するため、独自の奨学金制度を運営しています。</p><p>貸与額は<strong>高校生月額1万円、大学生月額3万円</strong>です。<span class="marker-green">無利子での貸与</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が寝屋川市に住所を有すること</p><p>高等学校・大学等に在学中であること</p><p>学業成績が一定基準以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月にかけて募集が行われます。寝屋川市教育委員会教育政策総務課に申請書と必要書類を提出してください。</p><p><span class="marker">募集人数に限りがあるため、選考が行われます</span>。成績と家計状況を総合的に判断して決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>高校生月額1万円、大学生月額3万円</strong>です。返還は卒業後1年据置きのうえ、10年以内に返還します。</p><p><span class="marker">無利子貸与のため、借入総額と返還総額は同じ</span>です。返還が困難な場合は減額や猶予の制度もあります。</p><div class="highlight-box">日本学生支援機構の奨学金や大阪府の奨学金との併用が可能です。寝屋川市では進路相談や学習支援事業も実施していますので、あわせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-sme-support',
    title: '寝屋川市 中小企業支援補助金',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['寝屋川市', '中小企業支援', '補助金'],
    eligibility: '寝屋川市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '寝屋川市が実施する中小企業支援補助金です。設備投資や販路開拓にかかる経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 中小企業支援補助金は、<span class="marker">市内の中小企業が行う設備投資や販路開拓</span>にかかる経費を補助する制度です。</p><p>寝屋川市は製造業や小売業など多様な中小企業が集積する地域です。企業の競争力強化と経営基盤の安定化を支援するため、設備導入やIT化、展示会出展費用などを対象に補助を行っています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">DX推進関連の投資は補助率が引き上げられる場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>寝屋川市内に事業所を有する中小企業であること</p><p>市税を滞納していないこと</p><p>暴力団等の反社会的勢力に該当しないこと</p><p>同一事業での他の市補助金を受けていないこと</p></div><p>寝屋川市役所産業振興室に事業計画書と申請書を提出します。審査では事業の効果性や実現可能性が評価されます。</p><p><span class="marker">事前に寝屋川市産業振興センターでの相談をおすすめします</span>。申請書の書き方もアドバイスを受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備購入費、展示会出展費、広告宣伝費、専門家謝金などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定後に事業を開始してください。</p><div class="note-box">国や大阪府の類似補助金との併用はできない場合があります。人件費や家賃など経常的な経費は補助対象外です。年間予算に限りがありますので早めの申請を心がけてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-nursing-equipment',
    title: '寝屋川市 介護用品支給事業',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大年間10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['寝屋川市', '介護用品', '支給事業'],
    eligibility: '寝屋川市に住所を有し、要介護4・5の認定を受けた方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '寝屋川市が実施する介護用品支給事業です。在宅で重度の要介護者を介護する家族に、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護する家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>寝屋川市は高齢化率が上昇傾向にあり、在宅介護を支える施策の充実が求められています。介護用品の購入は家計への負担が大きいため、市が現物支給することで介護者の経済的負担を軽減しています。</p><p>支給額は<strong>年間最大10万円相当</strong>の介護用品です。<span class="marker-green">紙おむつ、尿取りパッド、清拭剤、使い捨て手袋など</span>が対象品目です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>寝屋川市に住民登録があり、要介護4または5の認定を受けた方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定結果通知書の写し</p><p>介護者の本人確認書類</p></div><p>寝屋川市役所高齢介護室の窓口で申請します。<span class="marker">申請後、カタログから希望の介護用品を選択</span>し、定期的に自宅へ配送されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大10万円相当</strong>の介護用品が支給されます。月ごとに一定額分の用品を選んで注文する方式です。</p><p><span class="marker">要介護者が入院中や施設入所中の場合は支給対象外</span>となります。在宅での介護が条件です。</p><div class="note-box">介護保険で福祉用具のレンタルや購入補助も利用できます。寝屋川市では家族介護者向けの相談窓口やリフレッシュ事業も実施していますのであわせてご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-elderly-support',
    title: '寝屋川市 高齢者生活支援事業',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助等',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '大阪府',
    tags: ['寝屋川市', '高齢者支援', '生活支援'],
    eligibility: '寝屋川市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '寝屋川市が実施する高齢者生活支援事業です。配食サービスや緊急通報装置の貸与など、ひとり暮らし高齢者の日常生活を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、日常生活を支援する複数のサービスを提供する制度です。</p><p>寝屋川市では高齢者が住み慣れた地域で安心して暮らし続けられるよう、配食サービス、緊急通報装置の貸与、外出支援などの施策を組み合わせた包括的な支援を行っています。</p><p><span class="marker-green">配食サービスは安否確認を兼ねており、見守りの役割</span>も果たしています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>配食サービス（1食あたり約400円の補助）</p><p>緊急通報装置の貸与（月額負担あり）</p><p>軽度生活援助（ゴミ出し、電球交換等）</p></div><p>寝屋川市役所高齢介護室または地域包括支援センターで申請できます。<span class="marker">ケアマネジャーを通じての申請も可能</span>です。</p><p>利用にあたっては、介護認定の有無や世帯状況の確認が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり約400円の補助</strong>があり、利用者負担は数百円程度です。週に利用できる回数に上限があります。</p><p><span class="marker">緊急通報装置は月額数百円の利用料で貸与</span>され、ボタン一つで消防や協力員につながります。</p><div class="highlight-box">寝屋川市では地域見守りネットワーク事業も推進しており、自治会や民生委員と連携した見守り体制を構築しています。支援が必要な方はまず地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-seismic-diagnosis',
    title: '寝屋川市 耐震診断費用補助制度',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['寝屋川市', '耐震診断', '補助金'],
    eligibility: '寝屋川市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '寝屋川市が実施する耐震診断費用補助制度です。旧耐震基準の木造住宅の耐震診断費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 耐震診断費用補助制度は、<span class="marker">1981年5月31日以前に建築された木造住宅</span>の耐震診断にかかる費用を補助する制度です。</p><p>2018年の大阪府北部地震では寝屋川市でも震度5強を観測し、住宅被害が発生しました。この経験を踏まえ、旧耐震基準の住宅の耐震性能を把握し、必要な補強につなげるための支援を行っています。</p><p>補助額は<strong>診断費用の2分の1以内、上限5万円</strong>です。<span class="marker-green">耐震改修工事の補助制度も別途あります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の要件"><p>寝屋川市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下であること</p><p>申請者が当該住宅を所有していること</p></div><p>寝屋川市役所まちづくり推進課に申請書を提出します。耐震診断を行う事業者の見積書が必要です。</p><p><span class="marker">診断実施前に申請し、交付決定を受けてから診断を依頼</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震診断費用の2分の1以内で、<strong>上限5万円</strong>です。一般的な木造住宅の耐震診断費用は10万円前後です。</p><p><span class="marker">診断の結果、耐震性が不足していた場合は耐震改修補助</span>（別制度）も利用できます。</p><div class="note-box">大阪府の「安心・安全のまちづくり」推進事業とも連携しています。寝屋川市では地域防災計画に基づく啓発活動も行っており、耐震に関する無料相談会も定期的に開催しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 岸和田市（大阪府）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kishiwada-childcare-subsidy',
    title: '岸和田市 保育料軽減補助金',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['岸和田市', '保育料軽減', '補助金'],
    eligibility: '岸和田市に住所を有し、認可外保育施設等を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '岸和田市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>岸和田市は勇壮なだんじり祭りで全国的に知られる大阪南部の都市です。城下町としての歴史を持ちながら、子育て支援にも力を入れています。認可保育所に入れなかった世帯への経済的支援として、本制度を運営しています。</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の市民税所得割額に応じて補助額が決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岸和田市に住民登録があり、認可保育所に入所できず認可外保育施設を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>世帯の課税証明書</p><p>保護者の本人確認書類</p></div><p>岸和田市役所子育て施設課の窓口で申請できます。<span class="marker">四半期ごとの申請</span>が必要で、利用した月の翌四半期末までに領収書を添えて提出します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は世帯の所得に応じ、<strong>月額最大3万円</strong>が支給されます。第2子以降は加算がある場合があります。</p><p><span class="marker">企業主導型保育事業を利用している場合は対象外</span>となることがあります。事前に窓口へ確認してください。</p><div class="note-box">幼児教育・保育の無償化制度と併用する場合、無償化給付額を差し引いた残額が補助対象です。岸和田市ではだんじり祭りの時期に一時保育の需要が高まるため、臨時保育の情報も提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kishiwada-birth-bonus',
    title: '岸和田市 出産祝い金',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['岸和田市', '出産祝い金', '給付金'],
    eligibility: '岸和田市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '岸和田市が実施する出産祝い金です。市内在住の方が出産した際に最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>岸和田城を中心とした城下町の風情が残る岸和田市は、地域の結びつきが強い街です。だんじり祭りに象徴される地域コミュニティの力を活かしながら、次世代を担う子どもたちの誕生を市をあげて祝福する制度として設けられました。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限なしですべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で岸和田市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>岸和田市役所子育て支援課の窓口で申請します。出生届の手続きとあわせて行うのがスムーズです。</p><p><span class="marker">母子健康手帳と振込先口座情報が必要</span>です。郵送での申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子は5万円、第2子以降は10万円</strong>が支給されます。多胎児の場合はそれぞれの子に対して支給されます。</p><p><span class="marker">申請期限の出産後6か月を過ぎると受給できません</span>のでご注意ください。</p><div class="highlight-box">国の出産育児一時金や大阪府の出産・子育て応援給付金と併せて受給できます。岸和田市では産前産後ケア事業も充実しており、助産師による訪問相談なども利用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kishiwada-newlywed-rent',
    title: '岸和田市 新婚世帯家賃補助',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '最大月額3万円（最長3年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['岸和田市', '新婚世帯', '家賃補助'],
    eligibility: '岸和田市内に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '岸和田市が実施する新婚世帯家賃補助です。新婚世帯の家賃負担を最長3年間、月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 新婚世帯家賃補助は、<span class="marker">婚姻届の提出から3年以内の新婚世帯</span>が市内の賃貸住宅に居住する場合に、家賃の一部を補助する制度です。</p><p>岸和田市は大阪府南部の泉州地域に位置し、関西国際空港へのアクセスも良好です。若い世代の定住を促進するため、新婚世帯の住居費負担を軽減する施策を実施しています。</p><p>補助額は<strong>月額最大3万円、最長3年間</strong>です。<span class="marker-green">夫婦の合計所得が一定基準以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出後3年以内であること</p><p>夫婦の合計所得が400万円未満であること</p><p>夫婦ともに39歳以下であること</p><p>岸和田市内の民間賃貸住宅に居住していること</p></div><p>岸和田市役所まちづくり推進部住宅政策課に申請書と必要書類を提出します。賃貸借契約書と婚姻届受理証明書が必要です。</p><p><span class="marker">年度ごとの更新手続き</span>が必要です。毎年度、引き続き要件を満たしていることを確認します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた額のうち、<strong>月額最大3万円</strong>が補助されます。支給は最長3年間です。</p><p><span class="marker">公営住宅や社宅に居住している場合は対象外</span>です。また、親族が所有する住宅の家賃も対象外となります。</p><div class="note-box">国の「結婚新生活支援事業」とは別の市独自制度です。引っ越し費用の補助は含まれません。岸和田市では新婚世帯向けの住宅情報も提供していますので、住まい探しの際にもご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kishiwada-disability-medical',
    title: '岸和田市 障がい者医療費助成制度',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['岸和田市', '障がい者医療', '助成金'],
    eligibility: '岸和田市に住所を有する身体障害者手帳1級・2級、療育手帳A等の所持者',
    applicationPeriod: '通年',
    description: '岸和田市が実施する障がい者医療費助成制度です。重度障がい者の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 障がい者医療費助成制度は、<span class="marker">重度の障がいのある方の医療費自己負担分</span>を助成する制度です。</p><p>岸和田市は大阪府の福祉医療費助成制度に基づき、重度障がい者が安心して医療を受けられるよう支援しています。身体障害者手帳1級・2級、療育手帳Aなどの所持者が対象で、通院・入院の保険診療自己負担分が助成されます。</p><p><span class="marker-green">1医療機関あたり1日500円、月2日限度の自己負担で医療が受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岸和田市に住民登録があり、以下の手帳等を所持する方が対象です。</p><div class="summary-box" data-title="対象者"><p>身体障害者手帳1級または2級の方</p><p>療育手帳Aの方</p><p>精神障害者保健福祉手帳1級の方</p><p>特定疾患医療受給者証の所持者</p></div><p>岸和田市役所障害者支援課の窓口で申請します。<span class="marker">障害者手帳と健康保険証を持参</span>してください。申請後「医療証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1医療機関あたり<strong>1日500円、月2日を限度とした自己負担</strong>で医療が受けられます。3日目以降の自己負担はありません。</p><p><span class="marker">所得が一定以上の場合は助成対象外</span>となります（本人・配偶者・扶養義務者の所得で判定）。</p><div class="note-box">大阪府内の医療機関では医療証を提示するだけで助成が適用されます。府外の医療機関で受診した場合は、後日償還払いの手続きが必要です。訪問看護や補装具の医療も対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kishiwada-school-lunch',
    title: '岸和田市 学校給食費補助制度',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '給食費の全額補助（第3子以降）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '大阪府',
    tags: ['岸和田市', '学校給食費', '補助金'],
    eligibility: '岸和田市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中も可）',
    description: '岸和田市が実施する学校給食費補助制度です。第3子以降の給食費を全額補助するほか、多子世帯の負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 学校給食費補助制度は、<span class="marker">市立小中学校に通う児童生徒の給食費負担を軽減</span>する制度です。</p><p>岸和田市はだんじり祭りに代表される「まちぢから」を活かし、子育て環境の充実に取り組んでいます。多子世帯への経済的支援として、第3子以降の学校給食費を全額補助しています。</p><p><span class="marker-green">第3子以降の給食費が完全無料</span>となります。第1子・第2子も一部補助の対象となる場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の内容"><p>第3子以降：給食費全額補助</p><p>就学援助認定世帯：給食費全額支給</p><p>その他の世帯：条件により一部補助あり</p></div><p>毎年4月に学校を通じて案内が配布されます。第3子以降の補助は岸和田市教育委員会学務課に申請書を提出してください。</p><p><span class="marker">就学援助制度の認定を受けている世帯は別途申請不要</span>で、給食費が自動的に支給されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は<strong>月額約4,500円</strong>、中学校は<strong>月額約5,000円</strong>が目安です。第3子以降はこの全額が補助されます。</p><p><span class="marker">「第3子」の数え方は、保護者が扶養する子のうち上から3番目</span>です（年齢制限あり）。</p><div class="note-box">アレルギー対応食を利用している場合も補助の対象です。岸和田市では地産地消を推進しており、泉州産の食材を積極的に使った栄養バランスの良い給食を提供しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kishiwada-telework-bonus',
    title: '岸和田市 テレワーク導入補助金',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['岸和田市', 'テレワーク', '補助金'],
    eligibility: '岸和田市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '岸和田市が実施するテレワーク導入補助金です。中小企業のテレワーク環境整備にかかる経費を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 テレワーク導入補助金は、<span class="marker">市内の中小企業がテレワーク環境を整備する際</span>の経費を補助する制度です。</p><p>岸和田市は泉州地域の商業・工業の中心地として発展してきましたが、多様な働き方への対応も重要な課題です。テレワークの導入により、従業員のワークライフバランス向上と事業の生産性向上を同時に実現することを支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">テレワーク用の通信機器やクラウドサービス導入が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>岸和田市内に事業所を有する中小企業であること</p><p>新たにテレワーク環境を整備する事業であること</p><p>市税を滞納していないこと</p><p>テレワーク実施計画書を提出できること</p></div><p>岸和田市役所産業政策課に申請書とテレワーク実施計画書を提出します。</p><p><span class="marker">導入前に申請し、交付決定後に機器等の購入を行ってください</span>。すでに導入済みの機器は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。パソコン、通信機器、セキュリティソフト、クラウドサービス利用料（初年度分）が対象です。</p><p><span class="marker">1事業者あたり1回限り</span>の利用です。従業員の自宅のインターネット通信費は対象外となります。</p><div class="note-box">国の「IT導入補助金」や大阪府の働き方改革関連補助金との併用はできない場合があります。岸和田市商工会議所でもテレワーク導入に関する相談を受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kishiwada-nursing-home-reform',
    title: '岸和田市 介護リフォーム補助金',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '大阪府',
    tags: ['岸和田市', '介護リフォーム', '補助金'],
    eligibility: '岸和田市に住所を有する要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年',
    description: '岸和田市が実施する介護リフォーム補助金です。要介護者の在宅生活を支えるためのバリアフリー改修工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 介護リフォーム補助金は、<span class="marker">要介護・要支援認定を受けた方の在宅生活を支えるためのバリアフリー改修工事</span>に対して費用の一部を補助する制度です。</p><p>岸和田市では高齢者が住み慣れた自宅で安全に暮らし続けられるよう、手すりの設置、段差解消、浴室・トイレの改修などの工事費用を支援しています。介護保険の住宅改修費とあわせて利用することで、より充実した改修が可能になります。</p><p>補助額は<strong>最大20万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）とは別枠</span>での支給です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの取り付け</p><p>段差の解消（スロープ設置等）</p><p>滑りにくい床材への変更</p><p>引き戸への扉の取り替え</p><p>浴室・トイレの改修</p></div><p>岸和田市役所高齢介護課に申請します。ケアマネジャーが作成する「住宅改修が必要な理由書」と、工事見積書が必要です。</p><p><span class="marker">必ず工事着手前に申請</span>し、交付決定を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の一部で、<strong>上限20万円</strong>です。介護保険の住宅改修費と合わせると最大40万円の支援が受けられます。</p><p><span class="marker">世帯の所得状況によっては自己負担割合が異なる</span>場合があります。詳細は窓口でご確認ください。</p><div class="highlight-box">賃貸住宅の場合は家主の承諾書が必要です。岸和田市では福祉用具の展示コーナーも設けており、実物を見ながら改修計画を立てることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kishiwada-energy-support',
    title: '岸和田市 省エネ家電買替補助金',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '大阪府',
    tags: ['岸和田市', '省エネ家電', '補助金'],
    eligibility: '岸和田市に住所を有する世帯',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '岸和田市が実施する省エネ家電買替補助金です。省エネ性能の高い家電への買い替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 省エネ家電買替補助金は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買い替え</span>に対して費用の一部を補助する制度です。</p><p>岸和田市はゼロカーボンシティ宣言に基づき、家庭部門のCO2排出削減に取り組んでいます。省エネ家電への買い替えを促進することで、家庭のエネルギーコスト削減と環境負荷低減の両立を目指しています。</p><p>補助額は<strong>1台あたり最大3万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p></div><p>岸和田市役所環境課に申請書を提出します。購入した家電の保証書、領収書、設置写真が必要です。</p><p><span class="marker">購入後3か月以内に申請</span>してください。市内の販売店で購入した場合は申請手続きが簡略化される場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>エアコンは購入額の10%（<strong>上限2万円</strong>）、冷蔵庫は購入額の10%（<strong>上限3万円</strong>）が補助されます。</p><p><span class="marker">1世帯あたり各1台まで</span>の利用です。法人名義での購入は対象外となります。</p><div class="note-box">既存家電の適正処分（家電リサイクル法に基づく処理）が条件です。岸和田市ではこのほかにも太陽光発電システムや蓄電池の設置補助も実施していますので、あわせてご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kishiwada-bousai-equipment',
    title: '岸和田市 防災用品購入補助金',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'disaster',
    prefecture: '大阪府',
    tags: ['岸和田市', '防災用品', '補助金'],
    eligibility: '岸和田市に住所を有する世帯または自主防災組織',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '岸和田市が実施する防災用品購入補助金です。家庭用の防災用品購入に最大2万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岸和田市 防災用品購入補助金は、<span class="marker">家庭での災害への備えを支援するため</span>、防災用品の購入費用を補助する制度です。</p><p>岸和田市は南海トラフ巨大地震の被害想定エリアに含まれており、津波浸水の危険がある沿岸部も抱えています。各家庭での自助の取り組みを促進するため、防災用品の購入補助を実施しています。</p><p>補助額は購入費用の2分の1以内、<strong>上限2万円</strong>です。<span class="marker-green">家具転倒防止器具、非常用持ち出し袋、簡易トイレなど</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象品目の例"><p>家具転倒防止器具（L字金具、突っ張り棒等）</p><p>非常用持ち出し袋・防災リュック</p><p>簡易トイレ・携帯トイレ</p><p>飲料水保存タンク</p><p>感震ブレーカー</p></div><p>岸和田市役所危機管理課に申請書と領収書を提出します。購入品の写真も添付してください。</p><p><span class="marker">購入後2か月以内に申請</span>してください。ネット通販での購入も対象ですが、領収書（または購入証明）が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限2万円</strong>です。複数品目の合算での申請が可能です。</p><p><span class="marker">1世帯あたり年度内1回限り</span>の利用です。自主防災組織が購入する場合は別途上限が設けられています。</p><div class="note-box">食料や飲料水などの消耗品は対象外です。岸和田市では地域の防災訓練や防災士養成講座も実施しており、ハード・ソフト両面での防災力向上を推進しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kishiwada.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 明石市（兵庫県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'akashi-childcare-subsidy',
    title: '明石市 保育料完全無料化制度',
    organization: '明石市',
    type: 'local',
    maxAmount: '第2子以降完全無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['明石市', '保育料無料', '子育て支援'],
    eligibility: '明石市に住所を有し、認可保育所等を利用する第2子以降の児童の保護者',
    applicationPeriod: '通年',
    description: '明石市が実施する保育料完全無料化制度です。第2子以降の保育料が所得制限なしで完全無料になります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 保育料完全無料化制度は、<span class="marker">第2子以降の0〜2歳児の保育料を完全無料化</span>する全国でも先進的な制度です。</p><p>明石市は「こどもを核としたまちづくり」を掲げ、人口増加を実現した自治体として全国的に注目されています。明石海峡大橋を望む温暖な気候と、充実した子育て支援が若い世代の転入を後押ししています。</p><p><span class="marker-green">所得制限なし・第2子以降の保育料が完全無料</span>という全国でもトップクラスの手厚さです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>明石市に住民登録があり、認可保育所・認定こども園・小規模保育事業所等を利用する第2子以降の0〜2歳児の保護者が対象です。</p><div class="summary-box" data-title="制度のポイント"><p>第2子以降の0〜2歳児の保育料が無料</p><p>所得制限なし</p><p>きょうだいの年齢制限なし（第1子が何歳でもカウント）</p></div><p>入園申込時に自動的に適用されるため、<span class="marker">別途の申請手続きは原則不要</span>です。きょうだい関係の確認のため、世帯状況の届出が必要な場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第2子以降の0〜2歳児の保育料が<strong>全額免除</strong>されます。第1子の保育料は国の幼児教育・保育無償化制度の範囲で軽減されます。</p><p><span class="marker">3〜5歳児は国の無償化制度により全員無料</span>ですので、明石市では実質的にすべての子どもの保育料が無料または大幅軽減されています。</p><div class="highlight-box">明石市は保育料無料化のほかにも、こども食堂の支援、0歳児への紙おむつ定期便、中学校給食の無償化など、包括的な子育て支援策を展開しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akashi-birth-bonus',
    title: '明石市 出産祝い金',
    organization: '明石市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['明石市', '出産祝い金', '給付金'],
    eligibility: '明石市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '明石市が実施する出産祝い金です。市内在住の方が出産した際に最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>明石市は東経135度の日本標準時子午線が通る街として知られ、明石焼き（玉子焼）や明石鯛など食文化も豊かです。「こどもを核としたまちづくり」の一環として、出産時の経済的支援を手厚く行っています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限なしですべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で明石市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>明石市役所こども育成室の窓口で申請します。出生届の提出時に案内を受けられます。</p><p><span class="marker">母子健康手帳と振込先口座情報が必要</span>です。妊娠届出時の面談で事前に制度の説明を受けることもできます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子は5万円、第2子以降は10万円</strong>が支給されます。多胎児の場合はそれぞれの子に対して支給されます。</p><p><span class="marker">申請期限は出産後6か月以内</span>です。期限を過ぎると受給できませんのでお早めに。</p><div class="highlight-box">明石市では出産祝い金のほかにも、0歳児への紙おむつ宅配事業（毎月届く見守り訪問を兼ねたサービス）や産後ケア事業など、出産前後の支援が充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akashi-housing-purchase',
    title: '明石市 住宅取得補助金',
    organization: '明石市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['明石市', '住宅取得', '補助金'],
    eligibility: '明石市内に新たに住宅を取得する子育て世帯・若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '明石市が実施する住宅取得補助金です。市内に新たに住宅を取得する子育て・若年世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 住宅取得補助金は、<span class="marker">市内に新たに住宅を取得する子育て世帯や若年世帯</span>に対して取得費用の一部を補助する制度です。</p><p>明石市は神戸市と姫路市の中間に位置し、JR・山陽電鉄で大阪・神戸への通勤も便利です。子育て支援の充実により人口が増加しており、住宅需要も高まっています。定住促進をさらに後押しするため、住宅取得支援を行っています。</p><p>補助額は<strong>最大50万円</strong>で、<span class="marker-green">市外からの転入世帯や三世代同居世帯には加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>中学生以下の子どもがいる世帯、または夫婦ともに40歳未満の世帯</p><p>市内に新築・中古住宅を取得すること</p><p>取得後1年以内に申請すること</p><p>市税を滞納していないこと</p></div><p>明石市役所住宅・建築室に申請書と必要書類を提出します。売買契約書、登記事項証明書、住民票等が必要です。</p><p><span class="marker">事前相談を行い、対象要件を確認してから申請に進む</span>ことをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、市外からの転入で10万円加算、三世代同居・近居で10万円加算、<strong>最大50万円</strong>となります。</p><p><span class="marker">住宅の床面積や耐震性能に関する要件</span>がありますので、事前にご確認ください。</p><div class="note-box">住宅ローン減税やすまい給付金など国の制度と併用可能です。明石市は「住みたい街ランキング」でも上位に入る人気エリアで、新築マンションの供給も増えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akashi-infertility',
    title: '明石市 不妊治療費助成制度',
    organization: '明石市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['明石市', '不妊治療', '助成金'],
    eligibility: '明石市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '明石市が実施する不妊治療費助成制度です。特定不妊治療の自己負担分と先進医療費を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 不妊治療費助成制度は、<span class="marker">体外受精・顕微授精などの特定不妊治療</span>にかかる費用の一部を助成する制度です。</p><p>明石市は「こどもを核としたまちづくり」の理念のもと、子どもを望む夫婦への支援にも力を入れています。2022年の保険適用後もなお高額となる先進医療費や自己負担分を市独自に助成し、治療への経済的ハードルを下げています。</p><p>助成額は<strong>1回の治療につき最大30万円</strong>です。<span class="marker-green">保険適用治療の自己負担分と保険適用外の先進医療費が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>申請日時点で明石市に住民登録がある法律上の婚姻関係にある夫婦（事実婚を含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>医療費の領収書（原本）</p><p>夫婦の住民票</p></div><p>明石市保健所健康推進課に申請します。<span class="marker">治療が終了した日の翌日から3か月以内に申請</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分と先進医療費を合わせた額のうち、<strong>1回あたり最大30万円</strong>が助成されます。</p><p><span class="marker">兵庫県の助成制度と併用可能</span>ですが、重複する部分は調整されます。</p><div class="highlight-box">明石市では不妊・不育症の専門相談窓口を設置しており、臨床心理士によるカウンセリングも無料で受けられます。治療と仕事の両立に悩む方への相談支援も行っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akashi-scholarship',
    title: '明石市 給付型奨学金制度',
    organization: '明石市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['明石市', '給付型奨学金', '教育支援'],
    eligibility: '明石市に住所を有する世帯の高校生・大学生',
    applicationPeriod: '毎年4月〜5月',
    description: '明石市が実施する給付型奨学金制度です。経済的理由で修学が困難な学生に返済不要の奨学金を月額最大3万円給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 給付型奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生</span>に対し、返済不要の奨学金を給付する制度です。</p><p>明石市は教育にも力を入れており、すべての若者の学ぶ権利を保障するため、返済が不要な給付型奨学金制度を独自に運営しています。子どもの貧困対策としても重要な役割を担っています。</p><p>給付額は<strong>高校生月額1万円、大学生月額3万円</strong>です。<span class="marker-green">返済不要の給付型</span>であることが最大の特長です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が明石市に住所を有すること</p><p>高等学校・大学等に在学中であること</p><p>学業成績が一定基準以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月にかけて募集が行われます。明石市教育委員会学校教育課に申請書と必要書類を提出してください。</p><p><span class="marker">選考があるため、すべての応募者が採用されるわけではありません</span>。成績と家計の両面から総合的に判断されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>高校生月額1万円、大学生月額3万円</strong>です。年額に換算すると高校生12万円、大学生36万円となります。</p><p><span class="marker">返済は一切不要</span>です。他の奨学金制度との併給も可能です。</p><div class="note-box">明石市では市独自の就学援助制度も充実しており、小中学生の給食費無償化なども実施しています。教育費の負担軽減に多角的に取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akashi-sme-support',
    title: '明石市 中小企業支援補助金',
    organization: '明石市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['明石市', '中小企業支援', '補助金'],
    eligibility: '明石市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '明石市が実施する中小企業支援補助金です。販路開拓や生産性向上のための設備投資を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 中小企業支援補助金は、<span class="marker">市内の中小企業が行う販路開拓や生産性向上のための投資</span>にかかる経費を補助する制度です。</p><p>明石市は明石海峡に面した立地を活かした水産加工業をはじめ、製造業やサービス業など多様な中小企業が集積しています。地域経済の活性化と企業の競争力強化を目的に、設備投資や販路開拓を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">展示会出展費用やECサイト構築費用も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>明石市内に事業所を有する中小企業であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p></div><p>明石市役所産業振興室に事業計画書と申請書を提出します。書類審査が行われ、事業の効果性が評価されます。</p><p><span class="marker">明石商工会議所での事前相談を推奨</span>しています。申請書の書き方や事業計画のブラッシュアップのアドバイスが受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備購入費、展示会出展費、広告費、IT導入費用などが対象です。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>です。必ず交付決定を受けてから事業を開始してください。</p><div class="note-box">人件費や家賃などの経常的経費は対象外です。明石市では中小企業向けの経営相談や融資制度も充実しており、商工会議所と連携した支援体制を構築しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akashi-nursing-equipment',
    title: '明石市 介護用品支給事業',
    organization: '明石市',
    type: 'local',
    maxAmount: '最大年間10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '兵庫県',
    tags: ['明石市', '介護用品', '支給事業'],
    eligibility: '明石市に住所を有し、要介護4・5の認定を受けた方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '明石市が実施する介護用品支給事業です。在宅で重度要介護者を介護する家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護する家族</span>に対し、介護に必要な用品を支給する制度です。</p><p>明石市は高齢者福祉にも力を入れており、在宅介護を続ける家族への経済的支援として本制度を運営しています。海辺の温暖な気候は高齢者にも暮らしやすく、地域全体で介護を支える仕組みづくりを進めています。</p><p>支給額は<strong>年間最大10万円相当</strong>の介護用品です。<span class="marker-green">紙おむつ、尿取りパッド、清拭剤、使い捨て手袋</span>などが対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>明石市に住民登録があり、要介護4または5の認定を受けた方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定結果通知書の写し</p><p>介護者の本人確認書類</p></div><p>明石市役所高年介護室または地域総合支援センターで申請できます。<span class="marker">申請後、カタログから介護用品を選択して配送</span>される方式です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大10万円相当</strong>の介護用品が支給されます。月ごとに定額分の用品を注文します。</p><p><span class="marker">要介護者が入院中や施設入所中の場合は対象外</span>です。在宅介護が条件となります。</p><div class="highlight-box">明石市では介護者のリフレッシュ事業や介護者同士の交流会も開催しています。介護疲れを感じたら、地域総合支援センターに気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akashi-elderly-support',
    title: '明石市 高齢者見守り支援事業',
    organization: '明石市',
    type: 'local',
    maxAmount: '無料（市の事業）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '兵庫県',
    tags: ['明石市', '高齢者見守り', '生活支援'],
    eligibility: '明石市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '明石市が実施する高齢者見守り支援事業です。ひとり暮らし高齢者への配食サービスや緊急通報装置の貸与を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 高齢者見守り支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、日常の見守りと生活支援を行う事業です。</p><p>明石市は人口増加とともに高齢者人口も増えており、ひとり暮らし高齢者の安全確保が重要な課題となっています。配食サービスによる安否確認や、緊急通報装置の貸与など、ICT技術も活用した見守り体制を構築しています。</p><p><span class="marker-green">配食サービスは安否確認を兼ねており、異変があれば速やかに対応</span>する仕組みです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス（見守り付き・1食あたり自己負担数百円）</p><p>緊急通報装置の貸与</p><p>見守りカメラの設置支援</p><p>地域ボランティアによる定期訪問</p></div><p>明石市役所高年介護室または地域総合支援センターに相談・申請します。<span class="marker">民生委員やケアマネジャーを通じた申し込みも可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置は<strong>月額数百円の低負担で貸与</strong>されます。配食サービスは1食あたりの自己負担額が低く抑えられています。</p><p><span class="marker">生活保護世帯や市民税非課税世帯は自己負担が免除</span>される場合があります。</p><div class="note-box">明石市では認知症の方の見守りネットワーク（SOSネットワーク）も運営しており、行方不明時の早期発見に役立っています。地域の見守り力を高める取り組みとして、協力事業者（新聞配達、宅配など）との連携も進めています。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akashi-seismic-diagnosis',
    title: '明石市 耐震診断費用補助制度',
    organization: '明石市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '兵庫県',
    tags: ['明石市', '耐震診断', '補助金'],
    eligibility: '明石市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '明石市が実施する耐震診断費用補助制度です。旧耐震基準の木造住宅の耐震診断費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>明石市 耐震診断費用補助制度は、<span class="marker">1981年5月31日以前に建築された木造住宅</span>の耐震診断にかかる費用を補助する制度です。</p><p>明石市は1995年の阪神・淡路大震災で甚大な被害を受けた経験を持ちます。その教訓を活かし、旧耐震基準の住宅の耐震化を積極的に推進しています。まずは住宅の耐震性能を把握することが重要であり、診断費用の補助を通じてその第一歩を支援しています。</p><p>補助額は<strong>診断費用の2分の1以内、上限5万円</strong>です。<span class="marker-green">耐震改修工事の補助制度（別制度）も充実</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の要件"><p>明石市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下であること</p><p>申請者が当該住宅の所有者であること</p></div><p>明石市役所住宅・建築室に申請します。耐震診断を行う事業者の見積書等が必要です。</p><p><span class="marker">診断実施前に申請し、交付決定を受けてから診断を依頼</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震診断費用の2分の1以内で、<strong>上限5万円</strong>です。専門家による一般診断法での診断が対象です。</p><p><span class="marker">診断の結果、耐震性が不足していた場合は耐震改修補助</span>（上限100万円程度）も利用できます。</p><div class="highlight-box">明石市は阪神・淡路大震災の被災地として、防災・減災に関する豊富な知見を持っています。耐震に関する無料相談会も定期的に開催されていますので、まずはお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 加古川市（兵庫県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kakogawa-childcare-subsidy',
    title: '加古川市 保育料軽減補助金',
    organization: '加古川市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['加古川市', '保育料軽減', '補助金'],
    eligibility: '加古川市に住所を有し、認可外保育施設等を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '加古川市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料を軽減する制度です。</p><p>加古川市は加古川の流域に広がる播磨地域の中核都市で、靴下やワイヤロープの生産で知られるものづくりの街です。共働き世帯が増加するなか、認可保育所に入れなかった世帯への支援として本制度を実施しています。</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の所得に応じて補助額が決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>加古川市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>世帯の課税証明書</p><p>保護者の本人確認書類</p></div><p>加古川市役所こども部幼児保育課の窓口で申請できます。<span class="marker">四半期ごとに領収書を添えて申請</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は世帯の所得に応じて決まり、<strong>月額最大3万円</strong>が支給されます。多子世帯は加算がある場合があります。</p><p><span class="marker">幼児教育・保育無償化との併用時は、無償化給付額を差し引いた残額が対象</span>です。</p><div class="note-box">加古川市では待機児童解消に向けて保育所の増設も進めています。年度途中の入所相談も随時受け付けていますので、保育課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kakogawa-birth-bonus',
    title: '加古川市 出産祝い金',
    organization: '加古川市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['加古川市', '出産祝い金', '給付金'],
    eligibility: '加古川市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '加古川市が実施する出産祝い金です。市内在住の方が出産した際に最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>加古川市は兵庫県南部の播磨平野に位置し、加古川の清流と日岡山の緑に囲まれた暮らしやすい街です。少子化対策として出産時の経済的支援を充実させ、子育て世帯が安心して暮らせる環境を整備しています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限なしで、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で加古川市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>加古川市役所こども部こども政策課の窓口で申請します。出生届の提出時にあわせて手続きするのが便利です。</p><p><span class="marker">母子健康手帳と振込先口座情報が必要</span>です。郵送申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子は5万円、第2子以降は10万円</strong>が支給されます。多胎児の場合はそれぞれに支給されます。</p><p><span class="marker">申請期限の出産後6か月を過ぎると受給不可</span>となりますのでご注意ください。</p><div class="highlight-box">国の出産育児一時金や兵庫県の子育て応援給付金と併せて受給できます。加古川市では妊婦健診費用の助成や産後ケア事業も充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kakogawa-newlywed-rent',
    title: '加古川市 新婚世帯家賃補助',
    organization: '加古川市',
    type: 'local',
    maxAmount: '最大月額3万円（最長3年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['加古川市', '新婚世帯', '家賃補助'],
    eligibility: '加古川市内に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '加古川市が実施する新婚世帯家賃補助です。新婚世帯の家賃を最長3年間、月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 新婚世帯家賃補助は、<span class="marker">婚姻届提出から3年以内の新婚世帯</span>が市内賃貸住宅に居住する場合に家賃を補助する制度です。</p><p>加古川市はJR加古川駅を中心に商業施設が充実し、大阪・神戸へのアクセスも良好な暮らしやすい街です。若い世代の定住促進のため、新婚期の住居費負担を軽減する施策を実施しています。</p><p>補助額は<strong>月額最大3万円、最長3年間</strong>です。<span class="marker-green">夫婦の合計所得が一定基準以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出後3年以内であること</p><p>夫婦の合計所得が400万円未満であること</p><p>夫婦ともに39歳以下であること</p><p>加古川市内の民間賃貸住宅に居住していること</p></div><p>加古川市役所都市計画部住宅政策課に申請書と必要書類を提出します。賃貸借契約書と婚姻届受理証明書が必要です。</p><p><span class="marker">毎年度の更新手続き</span>が必要で、引き続き要件を満たしていることが確認されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた額のうち、<strong>月額最大3万円</strong>を補助します。最長3年間の支給です。</p><p><span class="marker">公営住宅や社宅、親族所有の住宅に居住する場合は対象外</span>です。</p><div class="note-box">引っ越し費用は補助の対象に含まれません。加古川市では新婚世帯向けの住宅情報も発信しており、住まい探しの支援も行っています。市のウェブサイトで空き家物件情報も確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kakogawa-disability-medical',
    title: '加古川市 障がい者医療費助成制度',
    organization: '加古川市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['加古川市', '障がい者医療', '助成金'],
    eligibility: '加古川市に住所を有する身体障害者手帳1級・2級、療育手帳A等の所持者',
    applicationPeriod: '通年',
    description: '加古川市が実施する障がい者医療費助成制度です。重度障がい者の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 障がい者医療費助成制度は、<span class="marker">重度の障がいのある方の医療費自己負担分</span>を助成する制度です。</p><p>加古川市は兵庫県の福祉医療費助成制度を基盤に、重度障がい者が安心して医療を受けられる環境を整備しています。身体障害者手帳1級・2級、療育手帳Aなどの所持者が対象で、通院・入院の保険診療自己負担分が助成されます。</p><p><span class="marker-green">自己負担は1医療機関あたり1日600円（2割負担）、月額上限2,400円</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>加古川市に住民登録があり、以下の手帳等を所持する方が対象です。</p><div class="summary-box" data-title="対象者"><p>身体障害者手帳1級または2級の方</p><p>療育手帳Aの方</p><p>精神障害者保健福祉手帳1級の方</p></div><p>加古川市役所障がい者支援課の窓口で申請します。<span class="marker">障害者手帳と健康保険証を持参</span>してください。申請後「福祉医療費受給者証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1医療機関あたり<strong>1日600円（2割負担）、月額上限2,400円</strong>の自己負担で医療が受けられます。超過分は助成されます。</p><p><span class="marker">所得が一定以上の場合は助成対象外</span>となります。本人・配偶者・扶養義務者の所得で判定されます。</p><div class="note-box">兵庫県内の医療機関では受給者証を提示するだけで助成が適用されます。県外受診の場合は後日償還払いとなります。加古川市では障がい者向けの各種相談支援事業も実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kakogawa-school-lunch',
    title: '加古川市 学校給食費補助制度',
    organization: '加古川市',
    type: 'local',
    maxAmount: '給食費の一部補助（第3子以降無料）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['加古川市', '学校給食費', '補助金'],
    eligibility: '加古川市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中も可）',
    description: '加古川市が実施する学校給食費補助制度です。第3子以降の給食費を全額補助し、多子世帯の教育費負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 学校給食費補助制度は、<span class="marker">市立小中学校に通う児童生徒の給食費負担を軽減</span>する制度です。</p><p>加古川市は播磨地域の中核都市として教育環境の整備に力を入れています。多子世帯の経済的負担を軽減するため、第3子以降の学校給食費を全額補助しています。地場産の食材を活用した安全で栄養バランスの良い給食を全員に届けることを目指しています。</p><p><span class="marker-green">第3子以降の給食費が無料</span>です。就学援助認定世帯も給食費全額が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の内容"><p>第3子以降：給食費全額補助</p><p>就学援助認定世帯：給食費全額支給</p></div><p>毎年4月に学校を通じて案内が配布されます。第3子以降の補助は加古川市教育委員会学務課に申請書を提出してください。</p><p><span class="marker">就学援助を受けている世帯は別途申請不要</span>で、自動的に給食費が支給されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は<strong>月額約4,500円</strong>、中学校は<strong>月額約5,200円</strong>が目安です。第3子以降はこの全額が補助されます。</p><p><span class="marker">「第3子」の数え方は、保護者が扶養する子のうち上から3番目</span>です。上の子が就職している場合のカウント方法は窓口でご確認ください。</p><div class="note-box">加古川市ではアレルギー対応食にも配慮した給食を提供しています。食物アレルギーのある児童生徒は、入学・転入時に学校へ申し出てください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kakogawa-telework-bonus',
    title: '加古川市 テレワーク導入補助金',
    organization: '加古川市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['加古川市', 'テレワーク', '補助金'],
    eligibility: '加古川市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '加古川市が実施するテレワーク導入補助金です。中小企業のテレワーク環境整備を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 テレワーク導入補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する際</span>の経費を補助する制度です。</p><p>加古川市はものづくり産業が盛んな地域ですが、事務部門や営業部門でのテレワーク導入も進んでいます。多様な働き方を推進し、人材確保と生産性向上を支援するための補助金です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">通信機器やセキュリティ対策費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>加古川市内に事業所を有する中小企業であること</p><p>新たにテレワーク環境を整備すること</p><p>市税を滞納していないこと</p><p>テレワーク実施計画書を提出すること</p></div><p>加古川市役所産業振興課に申請書とテレワーク実施計画書を提出します。</p><p><span class="marker">機器購入前に申請し、交付決定後に導入を進めてください</span>。事前購入分は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。パソコン、VPN機器、セキュリティソフト、クラウドサービス初年度利用料が対象です。</p><p><span class="marker">1事業者あたり1回限りの利用</span>です。個人事業主も申請可能です。</p><div class="note-box">国のIT導入補助金との併用は不可の場合があります。加古川市商工会議所でもテレワーク導入のアドバイスを受けられます。テレワーク就業規則の整備も忘れずに行いましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kakogawa-nursing-home-reform',
    title: '加古川市 介護リフォーム補助金',
    organization: '加古川市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '兵庫県',
    tags: ['加古川市', '介護リフォーム', '補助金'],
    eligibility: '加古川市に住所を有する要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年',
    description: '加古川市が実施する介護リフォーム補助金です。バリアフリー改修工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 介護リフォーム補助金は、<span class="marker">要介護・要支援認定を受けた方が在宅で安全に暮らすためのバリアフリー改修</span>を支援する制度です。</p><p>加古川市では高齢者が住み慣れた自宅で安心して生活を続けられるよう、手すりの設置や段差解消、浴室・トイレの改修などの費用を補助しています。介護保険の住宅改修費とは別枠で利用できます。</p><p>補助額は<strong>最大20万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）と合わせて最大40万円</span>の支援が可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの取り付け</p><p>段差の解消</p><p>滑りにくい床材への変更</p><p>扉の引き戸への取り替え</p><p>洋式便器への取り替え</p></div><p>加古川市役所高齢者・地域福祉課に申請します。ケアマネジャーの意見書と工事見積書が必要です。</p><p><span class="marker">工事着手前に申請し、交付決定を受けてから着工</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の一部で、<strong>上限20万円</strong>です。所得に応じて自己負担割合が異なります。</p><p><span class="marker">賃貸住宅の場合は家主の承諾書が必要</span>です。原状回復義務についても確認しておきましょう。</p><div class="highlight-box">加古川市では福祉用具の展示・体験コーナーを設けており、実際に試してから改修計画を立てることができます。地域包括支援センターでの相談も無料で利用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kakogawa-energy-support',
    title: '加古川市 省エネ家電買替補助金',
    organization: '加古川市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '兵庫県',
    tags: ['加古川市', '省エネ家電', '補助金'],
    eligibility: '加古川市に住所を有する世帯',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '加古川市が実施する省エネ家電買替補助金です。省エネ性能の高い家電への買い替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 省エネ家電買替補助金は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買い替え</span>に対して費用の一部を補助する制度です。</p><p>加古川市は2050年カーボンニュートラルの実現に向け、家庭部門のエネルギー消費削減に取り組んでいます。古い家電を省エネ性能の高い製品に買い替えることで、電気代の節約と温室効果ガスの削減を同時に実現できます。</p><p>補助額は<strong>1台あたり最大3万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p></div><p>加古川市役所環境政策課に申請書を提出します。購入した家電の保証書、領収書、設置写真が必要です。</p><p><span class="marker">購入後3か月以内に申請</span>してください。市内の指定店舗での購入は手続きが簡略化される場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>エアコンは購入額の10%（<strong>上限2万円</strong>）、冷蔵庫は購入額の10%（<strong>上限3万円</strong>）が補助されます。</p><p><span class="marker">1世帯あたり各1台まで</span>の利用です。法人や事業用途の購入は対象外です。</p><div class="note-box">既存家電の家電リサイクル法に基づく適正処分が条件です。加古川市では太陽光パネルや蓄電池の設置補助、住宅の断熱改修補助も実施していますので、あわせてご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kakogawa-bousai-equipment',
    title: '加古川市 防災用品購入補助金',
    organization: '加古川市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'disaster',
    prefecture: '兵庫県',
    tags: ['加古川市', '防災用品', '補助金'],
    eligibility: '加古川市に住所を有する世帯または自主防災組織',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '加古川市が実施する防災用品購入補助金です。家庭用の防災用品購入に最大2万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>加古川市 防災用品購入補助金は、<span class="marker">家庭での災害への備えを促進するため</span>、防災用品の購入費用を補助する制度です。</p><p>加古川市は加古川の氾濫リスクや南海トラフ地震の備えが求められる地域です。過去にも水害被害が発生しており、各家庭での防災意識の向上と備蓄の充実が重要な課題となっています。</p><p>補助額は購入費用の2分の1以内、<strong>上限2万円</strong>です。<span class="marker-green">家具転倒防止器具、非常用持ち出し袋、感震ブレーカーなど</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象品目の例"><p>家具転倒防止器具（L字金具、突っ張り棒等）</p><p>非常用持ち出し袋・防災セット</p><p>簡易トイレ・携帯トイレ</p><p>感震ブレーカー</p><p>止水板・水のう</p></div><p>加古川市役所危機管理室に申請書と領収書を提出します。購入品の写真の添付も必要です。</p><p><span class="marker">購入後2か月以内に申請</span>してください。インターネットでの購入も対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限2万円</strong>です。複数品目を合算して申請できます。</p><p><span class="marker">1世帯あたり年度内1回限りの利用</span>です。食料や飲料水などの消耗品は対象外です。</p><div class="note-box">加古川市は水害ハザードマップを公開しています。自宅の浸水リスクを確認し、必要な防災用品を揃えましょう。地域の防災訓練にもぜひご参加ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 宝塚市（兵庫県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'takarazuka-childcare-subsidy',
    title: '宝塚市 保育料軽減補助金',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['宝塚市', '保育料軽減', '補助金'],
    eligibility: '宝塚市に住所を有し、認可外保育施設等を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '宝塚市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>宝塚市は宝塚歌劇団の本拠地として世界的に知られ、武庫川の清流と六甲山系の緑に囲まれた美しい住宅都市です。文化的な環境と利便性を兼ね備えた街で、子育て世帯に人気のエリアです。認可保育所に入所できなかった世帯への支援として本制度を運営しています。</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の所得に応じて補助額が決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宝塚市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用する児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>世帯の課税証明書</p><p>保護者の本人確認書類</p></div><p>宝塚市役所子ども未来部保育企画課の窓口で申請できます。<span class="marker">四半期ごとに領収書を添えて申請</span>する方式です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は世帯の所得に応じて決まり、<strong>月額最大3万円</strong>が支給されます。多子世帯は加算がある場合があります。</p><p><span class="marker">幼児教育・保育無償化との併用時は、無償化給付額を差し引いた残額が対象</span>です。</p><div class="note-box">宝塚市では公立・私立あわせた保育所の定員拡充を進めています。年度途中の入所相談も随時受け付けていますので、保育企画課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takarazuka-birth-bonus',
    title: '宝塚市 出産祝い金',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['宝塚市', '出産祝い金', '給付金'],
    eligibility: '宝塚市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '宝塚市が実施する出産祝い金です。市内在住の方が出産した際に最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>宝塚市は手塚治虫記念館や宝塚大劇場など文化施設が集まる芸術の街として知られています。大阪・神戸へのアクセスの良さもあり、子育て世帯が多く暮らす住宅都市です。安心して出産・子育てができるよう経済的支援を行っています。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限なしですべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で宝塚市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>宝塚市役所子ども未来部子ども政策課の窓口で申請します。出生届の提出時にあわせて手続きすることをおすすめします。</p><p><span class="marker">母子健康手帳と振込先口座情報が必要</span>です。郵送での申請も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子は5万円、第2子以降は10万円</strong>が支給されます。多胎児の場合はそれぞれに支給されます。</p><p><span class="marker">申請期限は出産後6か月以内</span>です。期限を過ぎると受給できませんのでお早めに。</p><div class="highlight-box">国の出産育児一時金や兵庫県の子育て応援給付金と併せて受給可能です。宝塚市では産後ケア事業（宿泊型・日帰り型）も実施しており、出産後のサポート体制が充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takarazuka-housing-purchase',
    title: '宝塚市 住宅取得補助金',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['宝塚市', '住宅取得', '補助金'],
    eligibility: '宝塚市内に新たに住宅を取得する子育て世帯・若年世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '宝塚市が実施する住宅取得補助金です。市内に住宅を取得する子育て・若年世帯に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 住宅取得補助金は、<span class="marker">市内に新たに住宅を取得する子育て世帯や若年世帯</span>に対して取得費用の一部を補助する制度です。</p><p>宝塚市は阪急電鉄宝塚線・今津線のターミナル駅を擁し、大阪梅田まで約30分というアクセスの良さが魅力です。閑静な住宅街が広がり、「住みたい街」として高い人気を誇っています。人口維持のため定住促進施策に取り組んでいます。</p><p>補助額は<strong>最大40万円</strong>で、<span class="marker-green">市外からの転入や三世代同居には加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>中学生以下の子どもがいる世帯、または夫婦ともに40歳未満の世帯</p><p>市内に新築・中古住宅を取得すること</p><p>取得後1年以内に申請すること</p><p>市税を滞納していないこと</p></div><p>宝塚市役所都市整備部住まい政策課に申請書と必要書類を提出します。売買契約書、登記事項証明書等が必要です。</p><p><span class="marker">事前相談をおすすめします</span>。要件や加算条件について確認のうえ申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>で、市外転入で10万円加算、三世代同居・近居で10万円加算、<strong>最大40万円</strong>です。</p><p><span class="marker">住宅の面積や耐震性能の基準</span>がありますので、事前にご確認ください。</p><div class="note-box">住宅ローン減税など国の制度と併用可能です。宝塚市は自然災害リスクの低い地域が多く、住宅取得にあたって安心感があるエリアです。空き家バンク制度も活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takarazuka-infertility',
    title: '宝塚市 不妊治療費助成制度',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['宝塚市', '不妊治療', '助成金'],
    eligibility: '宝塚市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了後3か月以内',
    description: '宝塚市が実施する不妊治療費助成制度です。特定不妊治療の費用を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 不妊治療費助成制度は、<span class="marker">体外受精・顕微授精などの特定不妊治療</span>にかかる費用の一部を助成する制度です。</p><p>宝塚市は文化と自然が調和した住みやすい街で、子どもを望む世帯への支援にも力を入れています。保険適用後もなお高額となる先進医療費や自己負担分について、市独自の上乗せ助成を行っています。</p><p>助成額は<strong>1回の治療につき最大30万円</strong>です。<span class="marker-green">保険適用治療の自己負担分と先進医療費が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>申請日時点で宝塚市に住民登録がある法律上の婚姻関係にある夫婦（事実婚含む）が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関発行の治療証明書</p><p>医療費の領収書（原本）</p><p>夫婦の住民票</p></div><p>宝塚市立健康センターに申請します。<span class="marker">治療終了日の翌日から3か月以内に申請</span>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分と先進医療費を合わせ、<strong>1回あたり最大30万円</strong>が助成されます。</p><p><span class="marker">兵庫県の助成制度と併用可能</span>ですが、重複する部分は調整されます。</p><div class="highlight-box">宝塚市では不妊・不育症に関する専門相談を実施しています。治療の悩みや精神的な負担についても、保健師が丁寧に対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takarazuka-scholarship',
    title: '宝塚市 奨学金制度',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['宝塚市', '奨学金', '教育支援'],
    eligibility: '宝塚市に住所を有する世帯の高校生・大学生',
    applicationPeriod: '毎年4月〜5月',
    description: '宝塚市が実施する奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生</span>に対し、無利子で奨学金を貸与する制度です。</p><p>宝塚市は教育環境が充実した文教都市として知られ、手塚治虫をはじめ多くの文化人を輩出してきました。すべての若者に学びの機会を保障するため、市独自の奨学金制度を運営しています。</p><p>貸与額は<strong>高校生月額1万円、大学生月額3万円</strong>です。<span class="marker-green">無利子での貸与</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が宝塚市に住所を有すること</p><p>高等学校・大学等に在学中であること</p><p>学業成績が一定基準以上であること</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月から5月にかけて募集されます。宝塚市教育委員会管理部に申請書と必要書類を提出してください。</p><p><span class="marker">募集人数に限りがあり、選考が行われます</span>。成績と家計状況を総合的に判断して決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与額は<strong>高校生月額1万円、大学生月額3万円</strong>です。返還は卒業後1年据置きのうえ、10年以内に返還します。</p><p><span class="marker">無利子のため、借入総額と返還総額は同額</span>です。返還困難時は猶予・減額制度があります。</p><div class="note-box">日本学生支援機構の奨学金や兵庫県の奨学金との併用が可能です。宝塚市では高校生向けの学習支援事業も実施しており、進路相談にも対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takarazuka-sme-support',
    title: '宝塚市 中小企業支援補助金',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['宝塚市', '中小企業支援', '補助金'],
    eligibility: '宝塚市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '宝塚市が実施する中小企業支援補助金です。販路開拓や設備投資にかかる経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 中小企業支援補助金は、<span class="marker">市内の中小企業が行う販路開拓や生産性向上のための投資</span>にかかる経費を補助する制度です。</p><p>宝塚市は観光・サービス業を中心に、製造業や小売業など多様な中小企業が活動しています。宝塚歌劇のブランド力を活かした観光関連ビジネスや、住宅都市ならではの生活関連サービス業の振興を支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">観光関連事業は補助率の優遇措置</span>がある場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>宝塚市内に事業所を有する中小企業であること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p></div><p>宝塚市役所産業文化部商工勤労課に事業計画書と申請書を提出します。</p><p><span class="marker">宝塚商工会議所での事前相談をおすすめ</span>しています。申請書類の作成支援も受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。設備購入費、展示会出展費、広告費、IT導入費用が対象です。</p><p><span class="marker">交付決定前の支出は対象外</span>です。人件費や家賃等の経常的経費も対象外となります。</p><div class="note-box">宝塚市では「宝塚ブランド」の発信に取り組んでおり、市の名前を冠した商品やサービスの開発には特に手厚い支援が期待できます。商工会議所の経営相談も無料で利用可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takarazuka-nursing-equipment',
    title: '宝塚市 介護用品支給事業',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '最大年間10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '兵庫県',
    tags: ['宝塚市', '介護用品', '支給事業'],
    eligibility: '宝塚市に住所を有し、要介護4・5の認定を受けた方を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '宝塚市が実施する介護用品支給事業です。在宅で重度要介護者を介護する家族に介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の方を介護する家族</span>に対し、介護に必要な用品を支給する制度です。</p><p>宝塚市は高齢化が進む住宅都市であり、在宅介護を支える施策の充実が求められています。介護用品の購入費用は家計の大きな負担となるため、市が現物支給することで介護者の経済的負担を軽減しています。</p><p>支給額は<strong>年間最大10万円相当</strong>です。<span class="marker-green">紙おむつ、尿取りパッド、清拭剤、使い捨て手袋など</span>が対象品目です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宝塚市に住民登録があり、要介護4または5の認定を受けた方を在宅で介護している家族が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>介護用品支給申請書</p><p>要介護認定結果通知書の写し</p><p>介護者の本人確認書類</p></div><p>宝塚市役所高齢福祉課または地域包括支援センターで申請できます。<span class="marker">申請後、カタログから用品を選んで定期配送</span>される仕組みです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間<strong>最大10万円相当</strong>の介護用品が支給されます。月ごとに一定額分の用品を選択します。</p><p><span class="marker">要介護者が入院中や施設入所中の場合は対象外</span>です。在宅介護が前提となります。</p><div class="highlight-box">宝塚市では家族介護者の会（介護者カフェ）も定期的に開催しています。介護の悩みを共有し合える場として好評です。地域包括支援センターにお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takarazuka-elderly-support',
    title: '宝塚市 高齢者生活支援事業',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '配食サービス1食400円補助等',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '兵庫県',
    tags: ['宝塚市', '高齢者支援', '生活支援'],
    eligibility: '宝塚市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '宝塚市が実施する高齢者生活支援事業です。配食サービスや緊急通報装置の貸与でひとり暮らし高齢者の生活を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、日常生活を支援する事業です。</p><p>宝塚市は坂道の多い住宅地が特徴で、高齢者の外出や買い物に困難を伴うエリアもあります。配食サービスによる栄養管理と安否確認、緊急通報装置の貸与、外出支援などを組み合わせて、住み慣れた地域での安心した生活を支えています。</p><p><span class="marker-green">配食サービスは見守りを兼ねた重要な安否確認手段</span>でもあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス（1食あたり約400円の補助）</p><p>緊急通報装置の貸与</p><p>軽度生活援助（ゴミ出し、買い物代行等）</p></div><p>宝塚市役所高齢福祉課または地域包括支援センターで相談・申請します。<span class="marker">ケアマネジャーを通じた申し込みも可能</span>です。</p><p>利用前に介護認定の有無や世帯状況の確認が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり約400円の補助</strong>があり、利用者負担は数百円です。週の利用回数に上限があります。</p><p><span class="marker">緊急通報装置は月額数百円の低負担で利用可能</span>です。ボタンひとつで消防や見守り協力員に通報できます。</p><div class="note-box">宝塚市は坂道が多い地域特性を踏まえ、外出支援サービスにも力を入れています。地域のボランティアや民生委員との連携で、きめ細かな見守り体制を構築しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takarazuka-seismic-diagnosis',
    title: '宝塚市 耐震診断費用補助制度',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '兵庫県',
    tags: ['宝塚市', '耐震診断', '補助金'],
    eligibility: '宝塚市内に旧耐震基準で建築された木造住宅を所有する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '宝塚市が実施する耐震診断費用補助制度です。旧耐震基準の木造住宅の耐震診断費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宝塚市 耐震診断費用補助制度は、<span class="marker">1981年5月31日以前に建築された木造住宅</span>の耐震診断にかかる費用を補助する制度です。</p><p>宝塚市は1995年の阪神・淡路大震災で大きな被害を受けた地域のひとつです。特に傾斜地の住宅は地盤被害も深刻でした。この経験を教訓に、旧耐震基準の住宅の耐震化を積極的に推進しています。</p><p>補助額は<strong>診断費用の2分の1以内、上限5万円</strong>です。<span class="marker-green">耐震改修工事の補助制度も別途用意</span>されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の要件"><p>宝塚市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下であること</p><p>申請者が住宅の所有者であること</p></div><p>宝塚市役所都市整備部建築住宅室に申請します。診断事業者の見積書が必要です。</p><p><span class="marker">診断実施前に申請し、交付決定を受けてから診断を依頼</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震診断費用の2分の1以内で、<strong>上限5万円</strong>です。専門家による一般診断法の診断が対象です。</p><p><span class="marker">診断結果で耐震性不足が判明した場合は耐震改修補助</span>（別制度）も利用できます。</p><div class="highlight-box">宝塚市は阪神・淡路大震災の被災自治体として、防災教育と住宅耐震化に力を入れています。毎年1月には防災に関する市民向けイベントも開催されており、耐震無料相談も定期的に実施しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 周南市（山口県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'shunan-childcare-subsidy',
    title: '周南市 保育料軽減補助金',
    organization: '周南市',
    type: 'local',
    maxAmount: '最大月額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['周南市', '保育料軽減', '補助金'],
    eligibility: '周南市に住所を有し、認可外保育施設等を利用する児童の保護者',
    applicationPeriod: '通年',
    description: '周南市が実施する保育料軽減補助金です。認可外保育施設の利用料を月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 保育料軽減補助金は、<span class="marker">認可外保育施設を利用する世帯</span>の保育料負担を軽減する制度です。</p><p>周南市は瀬戸内海に面した山口県東部の中核都市で、石油化学コンビナートの工場夜景が美しい産業都市として知られています。企業城下町として共働き世帯が多く、保育需要の高い地域です。認可保育所に入れなかった世帯への支援として本制度を実施しています。</p><p>補助額は<strong>月額最大3万円</strong>で、<span class="marker-green">世帯の所得に応じて補助額が決定</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>周南市に住民登録があり、認可保育所に入所できず認可外保育施設等を利用している児童の保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>保育施設利用証明書</p><p>保育料の領収書</p><p>世帯の課税証明書</p><p>保護者の本人確認書類</p></div><p>周南市役所こども・福祉部保育幼稚園課の窓口で申請できます。<span class="marker">四半期ごとに領収書を添えて申請</span>する方式です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は世帯所得に応じて決まり、<strong>月額最大3万円</strong>が支給されます。多子世帯は加算がある場合があります。</p><p><span class="marker">幼児教育・保育無償化との併用時は、無償化給付額を差し引いた残額が対象</span>です。</p><div class="note-box">周南市では企業と連携した事業所内保育の充実も進めています。コンビナート企業の福利厚生施設も活用しながら、地域全体で保育の受け皿確保に取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shunan-birth-bonus',
    title: '周南市 出産祝い金',
    organization: '周南市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['周南市', '出産祝い金', '給付金'],
    eligibility: '周南市に住所を有し、出産した方',
    applicationPeriod: '出産後6か月以内',
    description: '周南市が実施する出産祝い金です。市内在住の方が出産した際に最大10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 出産祝い金は、<span class="marker">市内に住所を有する方が出産した際</span>に祝い金を支給する制度です。</p><p>周南市は徳山港を中心に石油化学コンビナートが立地する工業都市です。コンビナートの夜景は「日本夜景遺産」に認定されるなど観光資源としても注目されています。少子化対策として、出産時の経済的負担を軽減し、安心して子どもを産み育てられる環境づくりに取り組んでいます。</p><p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。<span class="marker-green">所得制限なしで、すべての出産世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で周南市に住民登録があること</p><p>出産後6か月以内に申請すること</p><p>市税を滞納していないこと</p></div><p>周南市役所こども・福祉部こども政策課の窓口で申請します。出生届の提出時に案内を受けられます。</p><p><span class="marker">母子健康手帳と振込先口座情報が必要</span>です。郵送での申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第1子は5万円、第2子以降は10万円</strong>が支給されます。多胎児はそれぞれに支給されます。</p><p><span class="marker">申請期限の出産後6か月を過ぎると受給不可</span>です。お早めに手続きしてください。</p><div class="highlight-box">国の出産育児一時金や山口県の子育て支援給付金と併せて受給できます。周南市では産後ケア事業や新生児訪問事業も実施しており、出産後のサポート体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shunan-newlywed-rent',
    title: '周南市 新婚世帯家賃補助',
    organization: '周南市',
    type: 'local',
    maxAmount: '最大月額3万円（最長3年間）',
    maxAmountNum: 3,
    category: 'housing',
    prefecture: '山口県',
    tags: ['周南市', '新婚世帯', '家賃補助'],
    eligibility: '周南市内に居住する婚姻届提出後3年以内の新婚世帯',
    applicationPeriod: '通年',
    description: '周南市が実施する新婚世帯家賃補助です。新婚世帯の家賃を最長3年間、月額最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 新婚世帯家賃補助は、<span class="marker">婚姻届提出から3年以内の新婚世帯</span>が市内の賃貸住宅に居住する場合に家賃を補助する制度です。</p><p>周南市は山口県東部の中核的な都市で、JR徳山駅周辺の再開発が進むなど、都市の活力が高まっています。若い世代の定住促進と人口流出の抑制を目指し、新婚期の住居費負担を軽減する施策を実施しています。</p><p>補助額は<strong>月額最大3万円、最長3年間</strong>です。<span class="marker-green">夫婦の合計所得が一定基準以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届提出後3年以内であること</p><p>夫婦の合計所得が400万円未満であること</p><p>夫婦ともに39歳以下であること</p><p>周南市内の民間賃貸住宅に居住していること</p></div><p>周南市役所都市整備部住宅課に申請書と必要書類を提出します。賃貸借契約書と婚姻届受理証明書が必要です。</p><p><span class="marker">年度ごとの更新手続き</span>が必要で、毎年度要件の継続確認が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた額のうち、<strong>月額最大3万円</strong>が補助されます。最長3年間です。</p><p><span class="marker">公営住宅や社宅、親族所有物件は対象外</span>です。</p><div class="note-box">周南市では結婚新生活支援事業として引っ越し費用の一部補助も別途実施している場合があります。JR徳山駅周辺には新しい賃貸マンションも増えており、利便性の高い住まいが見つかりやすいエリアです。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shunan-disability-medical',
    title: '周南市 障がい者医療費助成制度',
    organization: '周南市',
    type: 'local',
    maxAmount: '自己負担分の助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '山口県',
    tags: ['周南市', '障がい者医療', '助成金'],
    eligibility: '周南市に住所を有する身体障害者手帳1級・2級、療育手帳A等の所持者',
    applicationPeriod: '通年',
    description: '周南市が実施する障がい者医療費助成制度です。重度障がい者の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 障がい者医療費助成制度は、<span class="marker">重度の障がいのある方の医療費自己負担分</span>を助成する制度です。</p><p>周南市は山口県の福祉医療費助成制度に基づき、重度障がい者が安心して医療を受けられるよう支援しています。身体障害者手帳1級・2級、療育手帳Aなどの所持者が対象で、保険診療の自己負担分が助成されます。</p><p><span class="marker-green">通院・入院ともに保険診療の自己負担分が助成</span>されます。一部自己負担が残る場合もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>周南市に住民登録があり、以下の手帳等を所持する方が対象です。</p><div class="summary-box" data-title="対象者"><p>身体障害者手帳1級または2級の方</p><p>療育手帳Aの方</p><p>精神障害者保健福祉手帳1級の方</p></div><p>周南市役所福祉部障害者支援課の窓口で申請します。<span class="marker">障害者手帳と健康保険証を持参</span>してください。申請後「福祉医療費受給者証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が助成されます。<strong>通院・入院ともに対象</strong>で、薬剤費も含まれます。</p><p><span class="marker">所得が一定以上の場合は助成対象外</span>となります。本人・配偶者・扶養義務者の所得で判定されます。</p><div class="note-box">山口県内の医療機関では受給者証を提示するだけで助成が適用されます。県外受診の場合は後日償還払いとなります。周南市では障がい者の就労支援や社会参加支援にも力を入れています。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shunan-school-lunch',
    title: '周南市 学校給食費補助制度',
    organization: '周南市',
    type: 'local',
    maxAmount: '給食費の一部補助（第3子以降無料）',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '山口県',
    tags: ['周南市', '学校給食費', '補助金'],
    eligibility: '周南市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中も可）',
    description: '周南市が実施する学校給食費補助制度です。第3子以降の給食費を全額補助し、多子世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 学校給食費補助制度は、<span class="marker">市立小中学校に通う児童生徒の給食費負担を軽減</span>する制度です。</p><p>周南市は瀬戸内海の海の幸に恵まれた地域で、地元の新鮮な食材を活用した学校給食を提供しています。多子世帯の教育費負担を軽減するため、第3子以降の給食費を全額補助する制度を実施しています。</p><p><span class="marker-green">第3子以降の給食費が完全無料</span>です。就学援助認定世帯も給食費全額が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の内容"><p>第3子以降：給食費全額補助</p><p>就学援助認定世帯：給食費全額支給</p></div><p>毎年4月に学校を通じて案内されます。第3子以降の補助は周南市教育委員会学校教育課に申請書を提出してください。</p><p><span class="marker">就学援助を受けている世帯は別途申請不要</span>で、自動的に給食費が支給されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は<strong>月額約4,300円</strong>、中学校は<strong>月額約4,800円</strong>が目安です。第3子以降はこの全額が補助されます。</p><p><span class="marker">「第3子」の数え方は、保護者が扶養する子のうち上から3番目</span>です。</p><div class="note-box">周南市では地産地消を推進し、瀬戸内海産の魚介類や地元農家の野菜を積極的に使った給食メニューを提供しています。食育にも力を入れており、子どもたちの健やかな成長を食から支えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shunan-telework-bonus',
    title: '周南市 テレワーク導入補助金',
    organization: '周南市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '山口県',
    tags: ['周南市', 'テレワーク', '補助金'],
    eligibility: '周南市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '周南市が実施するテレワーク導入補助金です。中小企業のテレワーク環境整備を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 テレワーク導入補助金は、<span class="marker">市内の中小企業がテレワーク環境を新たに整備する際</span>の経費を補助する制度です。</p><p>周南市はコンビナート関連の大企業とそのサプライチェーンを担う中小企業が集積する産業都市です。製造現場は現地作業が中心ですが、事務・管理部門のテレワーク導入は人材確保やBCP対策の観点から重要性が高まっています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限20万円</strong>です。<span class="marker-green">通信機器やクラウドサービスの導入費用が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>周南市内に事業所を有する中小企業であること</p><p>新たにテレワーク環境を整備する事業であること</p><p>市税を滞納していないこと</p><p>テレワーク実施計画書を提出できること</p></div><p>周南市役所経済産業部商工振興課に申請書を提出します。</p><p><span class="marker">導入前に申請し、交付決定後に機器等を購入</span>してください。事前購入分は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。パソコン、VPN機器、セキュリティソフト、クラウドサービス初年度利用料が対象です。</p><p><span class="marker">1事業者あたり1回限り</span>の利用です。個人事業主も対象となります。</p><div class="note-box">周南市商工会議所でもテレワーク導入に関する相談を受け付けています。コンビナート関連企業では災害時のBCP対策としてもテレワーク環境の整備が推奨されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shunan-nursing-home-reform',
    title: '周南市 介護リフォーム補助金',
    organization: '周南市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '山口県',
    tags: ['周南市', '介護リフォーム', '補助金'],
    eligibility: '周南市に住所を有する要介護・要支援認定を受けた方がいる世帯',
    applicationPeriod: '通年',
    description: '周南市が実施する介護リフォーム補助金です。バリアフリー改修工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 介護リフォーム補助金は、<span class="marker">要介護・要支援認定を受けた方が安全に在宅生活を続けるためのバリアフリー改修</span>を支援する制度です。</p><p>周南市では高齢化率が上昇傾向にあり、在宅で安全に暮らすための住環境整備が重要な課題となっています。手すりの設置や段差解消、浴室・トイレの改修など、要介護者の生活に必要な改修工事の費用を補助しています。</p><p>補助額は<strong>最大20万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）とは別枠で利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの取り付け</p><p>段差の解消（スロープ設置等）</p><p>滑りにくい床材への変更</p><p>引き戸への扉の取り替え</p><p>浴室・トイレのバリアフリー化</p></div><p>周南市役所福祉部高齢者支援課に申請します。ケアマネジャーの意見書と工事見積書が必要です。</p><p><span class="marker">工事着手前に申請し、交付決定を受けてから着工</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の一部で、<strong>上限20万円</strong>です。介護保険と合わせて最大40万円の支援が受けられます。</p><p><span class="marker">賃貸住宅の場合は家主の承諾が必要</span>です。原状回復義務についても確認しましょう。</p><div class="highlight-box">周南市では地域包括支援センターを通じた住環境の相談にも対応しています。福祉用具のレンタルや購入補助（介護保険）とあわせて総合的に改修計画を立てることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shunan-energy-support',
    title: '周南市 省エネ家電買替補助金',
    organization: '周南市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '山口県',
    tags: ['周南市', '省エネ家電', '補助金'],
    eligibility: '周南市に住所を有する世帯',
    applicationPeriod: '毎年6月〜翌年2月（予算に達し次第終了）',
    description: '周南市が実施する省エネ家電買替補助金です。省エネ性能の高い家電への買い替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 省エネ家電買替補助金は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買い替え</span>に対して費用の一部を補助する制度です。</p><p>周南市は石油化学コンビナートを擁する産業都市として、環境と経済の両立を重要課題と位置づけています。市民の省エネ行動を促進し、家庭部門のCO2排出削減と電気代の節約を同時に実現するための補助制度です。</p><p>補助額は<strong>1台あたり最大3万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象家電"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p></div><p>周南市役所環境政策課に申請書を提出します。購入した家電の保証書、領収書、設置写真が必要です。</p><p><span class="marker">購入後3か月以内に申請</span>してください。市内の協力販売店で購入すると手続きが簡略化される場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>エアコンは購入額の10%（<strong>上限2万円</strong>）、冷蔵庫は購入額の10%（<strong>上限3万円</strong>）が補助されます。</p><p><span class="marker">1世帯あたり各1台まで</span>の利用です。事業用途の購入は対象外です。</p><div class="note-box">家電リサイクル法に基づく既存家電の適正処分が条件です。周南市ではコンビナート企業と連携した環境啓発活動も行っており、省エネ意識の向上に地域をあげて取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shunan-bousai-equipment',
    title: '周南市 防災用品購入補助金',
    organization: '周南市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'disaster',
    prefecture: '山口県',
    tags: ['周南市', '防災用品', '補助金'],
    eligibility: '周南市に住所を有する世帯または自主防災組織',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '周南市が実施する防災用品購入補助金です。家庭用の防災用品購入に最大2万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>周南市 防災用品購入補助金は、<span class="marker">家庭での災害への備えを支援するため</span>、防災用品の購入費用を補助する制度です。</p><p>周南市は瀬戸内海沿岸に位置し、台風や豪雨による風水害のリスクがあります。また、コンビナート地域特有の防災対策も求められています。各家庭での「自助」の取り組みを促進するため、防災用品の購入補助を実施しています。</p><p>補助額は購入費用の2分の1以内、<strong>上限2万円</strong>です。<span class="marker-green">家具転倒防止器具、非常用持ち出し袋、感震ブレーカーなど</span>が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象品目の例"><p>家具転倒防止器具（L字金具、突っ張り棒等）</p><p>非常用持ち出し袋・防災リュック</p><p>簡易トイレ・携帯トイレ</p><p>感震ブレーカー</p><p>防災ラジオ</p></div><p>周南市役所防災危機管理課に申請書と領収書を提出します。購入品の写真も添付してください。</p><p><span class="marker">購入後2か月以内に申請</span>してください。インターネットでの購入も対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1以内で、<strong>上限2万円</strong>です。複数品目を合算して申請可能です。</p><p><span class="marker">1世帯あたり年度内1回限りの利用</span>です。食料・飲料水などの消耗品は対象外です。</p><div class="note-box">周南市はコンビナート防災計画を策定しており、工場との合同防災訓練も実施しています。地域の防災マップを確認し、避難場所や避難経路を家族で共有しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
