import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-26';

export const verifiedNationalEmploymentSupportGrants2026: Grant[] = [
  {
    slug: 'jinzai-kaihatsu-shien-joseikin',
    title: '人材開発支援助成金',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '訓練経費・賃金の一部を助成（コースごとに異なる）',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['人材育成', '職業訓練', '事業主向け', '厚生労働省'],
    eligibility: '労働者に対して職務に関連した専門的な知識・技能を習得させるための訓練等を実施する事業主が対象です。コースごとに対象訓練、対象労働者、支給要件が異なります。',
    targetOccupation: '事業主',
    applicationPeriod: '訓練計画届・支給申請の期限はコースごとに異なる',
    description: '事業主が労働者の職業能力開発を行う場合に、訓練経費や訓練期間中の賃金の一部を助成する制度です。人材育成支援、教育訓練休暇等付与、人への投資促進など複数のコースがあります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>人材開発支援助成金は、事業主が従業員の職務に関連した訓練や職業能力開発を行う場合に、訓練経費や賃金の一部を助成する制度です。</p>'
      },
      {
        heading: '主なコース',
        content: '<p>人材育成支援コース、教育訓練休暇等付与コース、人への投資促進コース、事業展開等リスキリング支援コースなどがあります。年度によりコース名や要件が変わる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>通常は訓練開始前に計画届を提出し、訓練実施後に支給申請を行います。申請先、期限、必要書類はコースごとのパンフレット・申請様式を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html',
    sourceName: '厚生労働省 人材開発支援助成金',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/index.html'
    ],
    sourceNote: '制度ページと雇用関係助成金一覧で、事業主向けの人材育成助成金であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'career-up-joseikin',
    title: 'キャリアアップ助成金',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: 'コース・企業規模・転換内容ごとに異なる',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['非正規雇用', '正社員化', '処遇改善', '厚生労働省'],
    eligibility: '有期雇用労働者、短時間労働者、派遣労働者などの企業内でのキャリアアップを促進する取り組みを行う事業主が対象です。',
    targetOccupation: '事業主',
    applicationPeriod: 'キャリアアップ計画の提出、転換・取組後の支給申請期限に従う',
    description: '非正規雇用労働者の正社員化、処遇改善、賃金規定の整備などを行う事業主を支援する助成金です。コースごとに支給額、対象労働者、申請期限が異なります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>キャリアアップ助成金は、非正規雇用労働者の正社員化や処遇改善に取り組む事業主を支援する制度です。</p>'
      },
      {
        heading: '主なコース',
        content: '<p>正社員化コース、障害者正社員化コース、賃金規定等改定コース、賃金規定等共通化コース、賞与・退職金制度導入コース、社会保険適用時処遇改善コースなどがあります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>対象となる取り組みの実施前にキャリアアップ計画を作成・提出し、要件を満たした後に支給申請します。最新の支給要件と申請様式は厚生労働省公式ページを確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html',
    sourceName: '厚生労働省 キャリアアップ助成金',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/index.html'
    ],
    sourceNote: '制度ページと雇用関係助成金一覧で、非正規雇用労働者のキャリアアップ支援制度であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ryouritsu-shien-joseikin',
    title: '両立支援等助成金',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: 'コースごとに異なる',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['育児介護両立', '事業主向け', '職場環境整備', '厚生労働省'],
    eligibility: '育児・介護・不妊治療等と仕事を両立できる職場環境の整備や、対象労働者の休業取得・復帰支援等に取り組む事業主が対象です。',
    targetOccupation: '事業主',
    applicationPeriod: '各コースの支給要件を満たした後、定められた期限内に申請',
    description: '従業員が育児や介護等と仕事を両立できるよう、休業取得、職場復帰、業務代替、柔軟な働き方などの支援に取り組む事業主向けの助成金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>両立支援等助成金は、仕事と家庭の両立支援に取り組む事業主を支援する制度です。育児休業、介護離職防止、業務代替、柔軟な働き方など複数のコースがあります。</p>'
      },
      {
        heading: '2026年度情報',
        content: '<p>厚生労働省は2026年度版のリーフレット、支給申請の手引き、各コースの申請様式を公開しています。コースや様式は年度途中に差し替えられる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>支給申請は、各コースの要件を満たした後に、都道府県労働局雇用環境・均等部（室）等へ行います。電子申請の対象コースもあります。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/shokuba_kosodate/ryouritsu01/index.html',
    sourceName: '厚生労働省 両立支援等助成金のご案内',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/shokuba_kosodate/ryouritsu01/index.html',
      'https://www.mhlw.go.jp/content/001707242.pdf',
      'https://www.mhlw.go.jp/content/001687926.pdf'
    ],
    sourceNote: '2026年度リーフレット、支給申請の手引き、コース一覧を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'trial-koyou-joseikin',
    title: 'トライアル雇用助成金（一般トライアルコース）',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '対象者・コースごとに月額支給',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['トライアル雇用', '就職困難者', '事業主向け', '厚生労働省'],
    eligibility: 'ハローワーク等の紹介により、安定した職業に就くことが困難な求職者を一定期間試行雇用する事業主が対象です。',
    targetOccupation: '事業主',
    applicationPeriod: 'トライアル雇用開始後・終了後の申請期限に従う',
    description: '就職が困難な求職者を原則3か月間試行雇用し、常用雇用への移行を促す事業主向け助成金です。対象者やコースにより支給額・要件が異なります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>トライアル雇用助成金は、職業経験や技能等から安定就職が困難な求職者を試行的に雇い入れる事業主を支援する制度です。</p>'
      },
      {
        heading: '一般トライアルコース',
        content: '<p>一般トライアルコースは、ハローワーク等の紹介を通じて対象者を一定期間トライアル雇用し、適性や能力を見極めながら常用雇用への移行を目指す仕組みです。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>求人提出、対象者の紹介、雇入れ、実施計画書の提出、トライアル期間終了後の支給申請という流れで手続きします。最新様式と期限は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/trial_koyou.html',
    sourceName: '厚生労働省 トライアル雇用助成金（一般トライアルコース）',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/trial_koyou.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/index.html'
    ],
    sourceNote: '一般トライアルコースの制度ページと雇用関係助成金一覧を厚生労働省公式サイトで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokutei-kyuushokusha-koyou-kaihatsu-joseikin',
    title: '特定求職者雇用開発助成金（特定就職困難者コース）',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '対象労働者・企業規模等で異なる',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['就職困難者', '雇用開発', '事業主向け', '厚生労働省'],
    eligibility: '高年齢者、障害者、母子家庭の母など就職が特に困難な方を、ハローワーク等の紹介により継続して雇い入れる事業主が対象です。',
    targetOccupation: '事業主',
    applicationPeriod: '対象労働者の雇入れ後、支給対象期ごとの期限に従う',
    description: '就職困難者を継続して雇い入れる事業主に対して助成する制度です。対象者の区分、企業規模、雇用形態により支給額や支給対象期間が異なります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>特定求職者雇用開発助成金は、就職が特に困難な方をハローワーク等の紹介で雇い入れる事業主を支援する制度です。</p>'
      },
      {
        heading: '特定就職困難者コース',
        content: '<p>特定就職困難者コースでは、高年齢者、障害者、母子家庭の母など、就職に特に支援を必要とする方の継続雇用を促進します。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>対象者の雇入れ後、支給対象期ごとに申請します。支給対象者、支給額、添付書類、期限は厚生労働省の最新パンフレット・申請様式を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/tokutei_konnan.html',
    sourceName: '厚生労働省 特定求職者雇用開発助成金（特定就職困難者コース）',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/tokutei_konnan.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/index.html'
    ],
    sourceNote: '特定就職困難者コースの制度ページと雇用関係助成金一覧を厚生労働省公式サイトで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shokugyou-kunren-ukekou-kyuufukin',
    title: '職業訓練受講給付金（求職者支援制度）',
    organization: '厚生労働省・ハローワーク',
    type: 'national',
    maxAmount: '月額10万円＋通所手当等',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '全国',
    tags: ['求職者支援制度', '職業訓練', '月10万円', 'ハローワーク'],
    eligibility: '雇用保険を受給できない離職者、一定額以下の収入で働く在職者などで、ハローワークが職業訓練の受講を必要と認めた方が対象です。',
    targetIncome: '本人収入月8万円以下、世帯収入月30万円以下等の給付要件あり',
    applicationPeriod: '訓練コースの募集・開講時期に合わせてハローワークで相談',
    description: '求職者支援制度は、再就職・転職・スキルアップを目指す方が無料の職業訓練を受講でき、要件を満たす場合に月10万円の職業訓練受講給付金などを受けられる制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>求職者支援制度は、雇用保険を受給できない方などが、ハローワークの支援を受けながら無料の職業訓練を受講する制度です。</p>'
      },
      {
        heading: '給付金の内容',
        content: '<p>要件を満たす場合、職業訓練受講手当として月10万円、通所手当、必要に応じて寄宿手当が支給されます。給付要件を満たさない場合でも無料訓練のみ利用できる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>ハローワークで求職申込みを行い、訓練受講の必要性について相談します。訓練コースの選定、受講申込み、給付金申請はハローワークの案内に従います。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html',
    sourceName: '厚生労働省 求職者支援制度のご案内',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html',
      'https://www.mhlw.go.jp/content/001073991.pdf'
    ],
    sourceNote: '制度概要、給付金月10万円、主な要件、給付内容を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'senmon-jissen-kyouiku-kunren',
    title: '専門実践教育訓練給付金',
    organization: '厚生労働省・ハローワーク',
    type: 'national',
    maxAmount: '受講費用の一定割合を支給（講座・要件で異なる）',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '全国',
    tags: ['教育訓練給付', 'リスキリング', '資格取得', 'ハローワーク'],
    eligibility: '雇用保険の被保険者または離職者で、支給要件期間などの要件を満たし、厚生労働大臣指定の専門実践教育訓練を受講する方が対象です。',
    targetOccupation: '雇用保険の被保険者・離職者',
    applicationPeriod: '受講開始前にハローワークで訓練前キャリアコンサルティング等を実施',
    description: '教育訓練給付金のうち、中長期的なキャリア形成に資する専門実践教育訓練を受講した場合に、受講費用の一定割合を支給する雇用保険の給付制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>専門実践教育訓練給付金は、雇用保険制度の教育訓練給付の一つです。専門的・実践的な教育訓練を受ける方の費用負担を軽減します。</p>'
      },
      {
        heading: '対象講座',
        content: '<p>厚生労働大臣が指定する専門実践教育訓練が対象です。看護師、介護福祉士、専門職大学院、第四次産業革命スキル習得講座など、対象講座は指定講座検索システムで確認します。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>受講開始前にハローワークで訓練前キャリアコンサルティングや受給資格確認を行います。受講中・修了後の支給申請期限も公式案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html',
    sourceName: '厚生労働省 教育訓練給付金',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html'
    ],
    sourceNote: '教育訓練給付金の制度ページで、専門実践教育訓練を含む教育訓練給付の概要を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shitsugyou-kyuufu',
    title: '失業給付（雇用保険基本手当）',
    organization: '厚生労働省・ハローワーク',
    type: 'national',
    maxAmount: '離職前賃金・年齢・被保険者期間等で異なる',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['雇用保険', '基本手当', '失業中の生活', 'ハローワーク'],
    eligibility: '雇用保険の被保険者だった方が離職し、就職する意思と能力があり、求職活動をしているにもかかわらず職業に就けない状態で、被保険者期間等の要件を満たす場合に対象です。',
    targetOccupation: '離職者',
    applicationPeriod: '離職後、住所地を管轄するハローワークで求職申込みと受給手続き',
    description: '雇用保険の基本手当は、離職した方が失業中の生活を心配せず、再就職活動を行えるよう支給される求職者給付です。所定給付日数は年齢、被保険者期間、離職理由などで決まります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>基本手当は、雇用保険の被保険者だった方が離職し、失業状態にあるときに、再就職までの生活を支えるために支給される給付です。</p>'
      },
      {
        heading: '受給要件',
        content: '<p>ハローワークで求職の申込みを行い、就職する意思と能力があり、本人やハローワークの努力によっても職業に就けない状態にあることなどが必要です。被保険者期間の要件もあります。</p>'
      },
      {
        heading: '給付日数',
        content: '<p>所定給付日数は、離職時の年齢、雇用保険の被保険者であった期間、離職理由などにより90日から360日の範囲で決まります。</p>'
      }
    ],
    officialUrl: 'https://www.hellowork.mhlw.go.jp/insurance/insurance_basicbenefit.html',
    sourceName: 'ハローワークインターネットサービス 基本手当について',
    sourceUrls: [
      'https://www.hellowork.mhlw.go.jp/insurance/insurance_basicbenefit.html',
      'https://www.hellowork.mhlw.go.jp/insurance/insurance_benefitdays.html'
    ],
    sourceNote: '基本手当の目的、受給要件、所定給付日数をハローワーク公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koyou-chousei-joseikin',
    title: '雇用調整助成金',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '休業手当等の一部を助成（要件・時期で異なる）',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['雇用維持', '休業', '事業主向け', '厚生労働省'],
    eligibility: '経済上の理由により事業活動の縮小を余儀なくされ、雇用維持のために休業・教育訓練・出向等を実施する事業主が対象です。',
    targetOccupation: '事業主',
    applicationPeriod: '休業等の実施計画・支給申請の期限に従う',
    description: '雇用調整助成金は、経済上の理由により事業活動が縮小した事業主が、労働者の雇用を維持するために休業等を実施した場合、休業手当等の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>雇用調整助成金は、事業活動の縮小を余儀なくされた事業主が、休業、教育訓練、出向などにより労働者の雇用を維持する場合に活用できる制度です。</p>'
      },
      {
        heading: '通常制度ページ',
        content: '<p>新型コロナウイルス感染症の特例ページとは別に、厚生労働省は通常の雇用調整助成金ページを案内しています。2026年時点の通常制度は通常ページで確認します。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>休業等の計画、労使協定、休業手当の支払い、支給申請など、必要な手続きは公式ページの申請様式・マニュアルに従います。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/pageL07_20200515.html',
    sourceName: '厚生労働省 雇用調整助成金',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/pageL07_20200515.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/pageL07.html'
    ],
    sourceNote: '通常の雇用調整助成金ページと、コロナ特例ページから通常ページへの案内を厚生労働省公式サイトで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
];
