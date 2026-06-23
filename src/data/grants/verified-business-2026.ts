import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-23';

export const verifiedBusinessGrants2026: Grant[] = [
  {
    slug: 'digital-ai-hojo-2026-normal',
    title: 'デジタル化・AI導入補助金2026（通常枠）',
    organization: '中小企業庁・中小機構',
    type: 'national',
    maxAmount: '最大450万円',
    maxAmountNum: 450,
    category: 'employment',
    prefecture: '全国',
    tags: ['DX', 'AI導入', '中小企業', 'ITツール'],
    eligibility: '中小企業・小規模事業者等で、自社の課題に合うITツールを導入し、生産性向上に取り組む事業者が対象です。',
    targetOccupation: '中小企業・小規模事業者・個人事業主',
    applicationPeriod: '募集回ごとに設定（公式サイトで最新スケジュールを確認）',
    description: '会計・受発注・決済・業務管理・AI活用など、事業課題に合うITツール導入を支援する補助金です。通常枠では導入する業務プロセス数に応じて5万円以上450万円以下の補助額が設定されています。',
    sections: [
      {
        heading: '制度の要点',
        content: '<p>デジタル化・AI導入補助金2026は、中小企業・小規模事業者がITツールを導入して労働生産性を高める取り組みを支援する制度です。</p><div class="summary-box" data-title="通常枠"><p>補助額：1プロセス以上は5万円以上150万円未満</p><p>補助額：4プロセス以上は150万円以上450万円以下</p><p>補助率：原則1/2以内、一部事業者は2/3以内</p></div>'
      },
      {
        heading: '対象になる取り組み',
        content: '<p>公式に登録されたIT導入支援事業者とITツールを使う申請が基本です。会計、受発注、決済、顧客管理、予約、在庫管理、セキュリティ、AI活用など、自社課題と導入効果を結び付けて整理する必要があります。</p>'
      },
      {
        heading: '申請前に確認すること',
        content: '<p>申請枠ごとに補助額・補助率・対象経費が異なります。インボイス対応類型やセキュリティ対策推進枠を使う場合は、通常枠とは条件が変わるため、公式サイトの公募要領と登録ITツールを必ず確認してください。</p>'
      }
    ],
    officialUrl: 'https://it-shien.smrj.go.jp/applicant/subsidy/normal/',
    sourceName: 'デジタル化・AI導入補助金2026 公式サイト',
    sourceUrls: [
      'https://it-shien.smrj.go.jp/',
      'https://it-shien.smrj.go.jp/applicant/subsidy/normal/'
    ],
    sourceNote: '通常枠の補助額・補助率は公式サイトの通常枠ページを基準に確認。',
    verifiedAt,
    publishedAt: '2026-06-23',
  },
  {
    slug: 'shoryokuka-catalog-2026',
    title: '中小企業省力化投資補助金（カタログ注文型）',
    organization: '中小企業庁・中小機構',
    type: 'national',
    maxAmount: '最大1,500万円',
    maxAmountNum: 1500,
    category: 'employment',
    prefecture: '全国',
    tags: ['省力化', '設備投資', '人手不足', 'カタログ注文型'],
    eligibility: '人手不足の状態にある中小企業等が対象です。補助対象としてカタログに登録された製品等を導入する場合に利用できます。',
    targetOccupation: '中小企業・小規模事業者',
    applicationPeriod: '制度改定後は2027年3月末頃まで受付予定（公式サイトで確認）',
    description: '人手不足の中小企業が、公式カタログに登録された省力化製品を導入する費用の一部を補助する制度です。従業員数と賃上げ要件の達成状況により補助上限額が変わります。',
    sections: [
      {
        heading: '補助上限額',
        content: '<p>2026年3月19日の制度改定後は、従業員数に応じて補助上限額が設定されています。</p><div class="summary-box" data-title="改定後の補助上限"><p>5名以下：200万円、賃上げ要件達成時300万円</p><p>6〜20名：500万円、賃上げ要件達成時750万円</p><p>21名以上：1,000万円、賃上げ要件達成時1,500万円</p></div>'
      },
      {
        heading: '対象経費',
        content: '<p>補助対象はカタログに登録された省力化製品等です。製品カテゴリや販売事業者は公式の製品カタログ検索で確認します。カタログ外の独自設備投資は対象にならないため注意が必要です。</p>'
      },
      {
        heading: '申請時の注意点',
        content: '<p>販売事業者が申請をサポートする仕組みです。購入前に補助対象製品か、販売事業者が登録済みか、賃上げ要件を満たす計画かを確認してください。</p>'
      }
    ],
    officialUrl: 'https://shoryokuka.smrj.go.jp/catalog/',
    sourceName: '中小企業省力化投資補助金 公式サイト',
    sourceUrls: [
      'https://shoryokuka.smrj.go.jp/catalog/',
      'https://shoryokuka.smrj.go.jp/catalog/revision_260319/'
    ],
    sourceNote: '補助上限額と受付予定は公式サイトのカタログ注文型・制度改定ページを基準に確認。',
    verifiedAt,
    publishedAt: '2026-06-23',
  },
  {
    slug: 'shinjigyou-shinshutsu-2026',
    title: '新事業進出補助金',
    organization: '中小企業庁',
    type: 'national',
    maxAmount: '最大9,000万円',
    maxAmountNum: 9000,
    category: 'employment',
    prefecture: '全国',
    tags: ['新規事業', '事業転換', '設備投資', '賃上げ'],
    eligibility: '既存事業とは異なる新製品・新市場への進出など、新たな事業への挑戦に取り組む中小企業等が対象です。',
    targetOccupation: '中小企業・中堅企業',
    applicationPeriod: '公募開始時期・締切は公式ページで確認',
    description: '既存事業の枠を超えた新製品開発や新市場進出を支援する補助金です。建物費、機械装置、システム構築費など幅広い経費が対象になり得ます。',
    sections: [
      {
        heading: '制度の目的',
        content: '<p>新事業進出補助金は、中小企業等が今までとは異なる新しい事業に挑戦し、生産性向上や賃上げにつなげる取り組みを支援する制度です。</p>'
      },
      {
        heading: '補助率・補助上限',
        content: '<div class="summary-box" data-title="公式ページ掲載の概要"><p>補助率：1/2〜2/3</p><p>補助上限額：最大9,000万円</p><p>対象経費：建物費、機械装置、システム構築費など</p></div><p>大幅な賃上げにより補助上限額が引き上げられる設計です。</p>'
      },
      {
        heading: '向いている事業者',
        content: '<p>既存事業の延長ではなく、新製品、新サービス、新市場への進出を具体的に計画している事業者に向いています。採択を狙う場合は、既存事業との違い、市場性、収益化計画、賃上げへのつながりを明確にする必要があります。</p>'
      }
    ],
    officialUrl: 'https://mirasapo-plus.go.jp/subsidy/shinjigyou/',
    sourceName: 'ミラサポPlus 新事業進出補助金ページ',
    sourceUrls: ['https://mirasapo-plus.go.jp/subsidy/shinjigyou/'],
    sourceNote: '補助率・上限額はミラサポPlus掲載の公式概要を基準に確認。',
    verifiedAt,
    publishedAt: '2026-06-23',
  },
  {
    slug: 'jizokuka-ippan-2026-20th',
    title: '小規模事業者持続化補助金（一般型・通常枠 第20回）',
    organization: '全国商工会連合会・日本商工会議所',
    type: 'national',
    maxAmount: '最大250万円',
    maxAmountNum: 250,
    category: 'employment',
    prefecture: '全国',
    tags: ['販路開拓', '小規模事業者', '商工会', '第20回'],
    eligibility: '小規模事業者が、経営計画に基づいて販路開拓や業務効率化に取り組む場合に対象となります。',
    targetOccupation: '小規模事業者・個人事業主',
    applicationPeriod: '申請受付開始 2026年11月5日、申請締切 2026年12月15日 17:00',
    deadlineDate: '2026-12-15',
    description: '小規模事業者が商工会・商工会議所の支援を受けながら、販路開拓や業務効率化に取り組む費用を補助する制度です。第20回公募のスケジュールが公開されています。',
    sections: [
      {
        heading: '第20回公募スケジュール',
        content: '<div class="summary-box" data-title="第20回"><p>公募要領公開：2026年5月27日</p><p>申請受付開始：2026年11月5日</p><p>様式4発行受付締切：2026年12月4日</p><p>申請受付締切：2026年12月15日 17:00</p></div>'
      },
      {
        heading: '補助上限の考え方',
        content: '<p>通常枠の基本上限は50万円です。インボイス特例と賃金引上げ特例の対象になる場合は上乗せがあり、両特例を組み合わせると最大250万円となります。補助率は原則2/3です。</p>'
      },
      {
        heading: '申請の注意点',
        content: '<p>申請には事業支援計画書（様式4）が必要です。締切直前は発行が間に合わないリスクがあるため、商工会・商工会議所への相談を早めに進める必要があります。</p>'
      }
    ],
    officialUrl: 'https://official.jizokukanb.com/shinsei',
    sourceName: '小規模事業者持続化補助金 公式サイト',
    sourceUrls: [
      'https://official.jizokukanb.com/shinsei',
      'https://official.jizokukanb.com/',
      'https://r6.jizokukahojokin.info/'
    ],
    sourceNote: '第20回日程、様式4発行締切、電子申請の注意点は公式申請ページで確認。商工会議所地区の情報は該当事務局サイトも参照。',
    verifiedAt,
    publishedAt: '2026-06-23',
  },
  {
    slug: 'shoukei-ma-2026-15th',
    title: '事業承継・M&A補助金（十五次公募）',
    organization: '中小企業庁',
    type: 'national',
    maxAmount: '最大2,000万円',
    maxAmountNum: 2000,
    category: 'employment',
    prefecture: '全国',
    tags: ['事業承継', 'M&A', 'PMI', '廃業費'],
    eligibility: '事業承継やM&Aによる経営資源の引継ぎ、M&A後のPMI、関連する廃業等に取り組む中小企業者等が対象です。',
    targetOccupation: '中小企業・個人事業主・事業承継予定者',
    applicationPeriod: '2026年6月19日〜2026年7月24日 17:00予定',
    deadlineDate: '2026-07-24',
    description: '親族内承継・従業員承継、M&A専門家の活用、M&A後のPMI、廃業・再チャレンジなど、事業承継と経営資源の引継ぎを支援する補助金です。',
    sections: [
      {
        heading: '十五次公募の受付期間',
        content: '<p>十五次公募の申請受付期間は、2026年6月19日から2026年7月24日17時までの予定です。申請は電子申請（Jグランツ）のみです。</p>'
      },
      {
        heading: '主な支援枠',
        content: '<div class="summary-box" data-title="支援枠"><p>事業承継促進枠：800〜1,000万円</p><p>専門家活用枠：600〜800万円、要件により2,000万円</p><p>PMI推進枠：150万円、または800〜1,000万円</p><p>廃業・再チャレンジ枠：最大300万円</p></div>'
      },
      {
        heading: '申請前の準備',
        content: '<p>GビズIDプライムアカウントの取得、承継・M&A計画、専門家費用や設備投資費用の整理が必要です。締切直前のGビズID取得は間に合わないことがあるため、早めに準備してください。</p>'
      }
    ],
    officialUrl: 'https://shoukei-mahojokin.go.jp/',
    sourceName: '事業承継・M&A補助金 公式サイト',
    sourceUrls: [
      'https://shoukei-mahojokin.go.jp/',
      'https://shoukei-mahojokin.go.jp/r7h/15-succession_download/',
      'https://shoukei-mahojokin.go.jp/r7h/15-experts_download/',
      'https://shoukei-mahojokin.go.jp/r7h/15-pmi_download/',
      'https://shoukei-mahojokin.go.jp/r7h/15-challenge_download/'
    ],
    sourceNote: '十五次公募の各枠、公募要領、申請手続き、FAQは事業承継・M&A補助金公式サイトの15次公募ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-23',
  },
  {
    slug: 'chukentou-seichotoushi-2026-5th',
    title: '中堅・中小・スタートアップ企業の大規模成長投資補助金（5次公募）',
    organization: '中堅・中小・スタートアップ成長投資補助金事務局',
    type: 'national',
    maxAmount: '最大50億円',
    maxAmountNum: 500000,
    category: 'employment',
    prefecture: '全国',
    tags: ['大規模投資', '賃上げ', '設備投資', 'スタートアップ'],
    eligibility: '常時使用する従業員数が2,000人以下の中堅・中小・スタートアップ企業等で、大規模投資と賃上げ要件を満たす事業者が対象です。',
    targetOccupation: '中堅企業・中小企業・スタートアップ',
    applicationPeriod: '5次公募時点の公式ページで確認',
    description: '人手不足対応、省力化、拠点新設、大規模設備投資などを通じて、持続的な賃上げと事業規模拡大を目指す企業を支援する大型補助金です。',
    sections: [
      {
        heading: '募集概要',
        content: '<div class="summary-box" data-title="5次公募時点"><p>予算額：2,000億円</p><p>補助上限額：50億円</p><p>補助率：1/3以下</p><p>補助対象者：従業員数2,000人以下の会社等</p></div>'
      },
      {
        heading: '主な要件',
        content: '<p>一般企業向けでは、投資額20億円以上の大規模投資が前提です。また、補助事業終了後3年間の対象事業に関わる従業員等1人当たり給与支給総額について、年平均5.0%以上の賃上げ要件があります。</p>'
      },
      {
        heading: '利用を検討すべき企業',
        content: '<p>工場・物流拠点・生産設備など、数十億円規模の投資計画があり、賃上げと事業成長を同時に実行できる企業向けです。小規模な設備更新には向きません。</p>'
      }
    ],
    officialUrl: 'https://chukentou-seichotoushi-hojo.jp/',
    sourceName: '中堅・中小・スタートアップ成長投資補助金 公式サイト',
    sourceUrls: [
      'https://chukentou-seichotoushi-hojo.jp/',
      'https://chukentou-seichotoushi-hojo.jp/assets/lp/documents/000058242.pdf'
    ],
    sourceNote: '補助上限・補助率・対象者・投資額要件は公式サイトの5次公募時点の募集概要を基準に確認。',
    verifiedAt,
    publishedAt: '2026-06-23',
  },
  {
    slug: 'gyomu-kaizen-2026',
    title: '業務改善助成金（令和8年度）',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '最大600万円',
    maxAmountNum: 600,
    category: 'employment',
    prefecture: '全国',
    tags: ['賃上げ', '設備投資', '生産性向上', '中小企業'],
    eligibility: '事業場内最低賃金を引き上げ、生産性向上に資する設備投資等を行う中小企業・小規模事業者が対象です。',
    targetOccupation: '中小企業・小規模事業者',
    applicationPeriod: '令和8年度の申請受付・事業完了期限は公式ページで確認',
    description: '事業場内最低賃金の引上げと、機械設備導入・コンサルティングなどの生産性向上投資を組み合わせて実施する中小企業向けの助成金です。',
    sections: [
      {
        heading: '制度の仕組み',
        content: '<p>業務改善助成金は、事業場内最低賃金を50円以上引き上げる計画と、設備投資等の計画を立てて申請し、交付決定後に計画通り実施した場合に費用の一部が助成される制度です。</p>'
      },
      {
        heading: '補助上限と対象経費',
        content: '<div class="summary-box" data-title="令和8年度"><p>助成額：最大600万円</p><p>対象経費：機械設備導入、コンサルティングなど</p><p>対象者：中小企業・小規模事業者</p></div>'
      },
      {
        heading: '注意点',
        content: '<p>申請前の賃金引上げや、交付決定前に実施した設備投資は対象外になる場合があります。賃上げ計画と設備投資計画の順序を間違えないよう、公式資料と労働局窓口で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/zigyonushi/shienjigyou/03.html',
    sourceName: '厚生労働省 業務改善助成金ページ',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/zigyonushi/shienjigyou/03.html',
      'https://www.mhlw.go.jp/content/11200000/001693416.pdf'
    ],
    sourceNote: '制度概要と最大600万円は厚生労働省の令和8年度案内資料を基準に確認。',
    verifiedAt,
    publishedAt: '2026-06-23',
  },
  {
    slug: 'career-up-joseikin-2026',
    title: 'キャリアアップ助成金（令和8年度）',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '1人あたり最大80万円（正社員化コース）',
    maxAmountNum: 80,
    category: 'employment',
    prefecture: '全国',
    tags: ['正社員化', '非正規雇用', '賃上げ', '雇用助成金'],
    eligibility: '有期雇用労働者、短時間労働者、派遣労働者等の正社員化や処遇改善に取り組む事業主が対象です。',
    targetOccupation: '事業主・中小企業',
    applicationPeriod: '取組前にキャリアアップ計画書を提出。各コースの申請期限は公式資料で確認',
    description: '非正規雇用労働者の正社員化、賃金規定改定、労働時間延長など、企業内でのキャリアアップを促進するための事業主向け助成金です。',
    sections: [
      {
        heading: '令和8年度版のポイント',
        content: '<p>厚生労働省は令和8年度版のパンフレット、リーフレット、Q&Aを公開しています。短時間労働者労働時間延長支援コースも新設されています。</p>'
      },
      {
        heading: '正社員化コースの助成額',
        content: '<div class="summary-box" data-title="正社員化コース"><p>有期雇用から正規雇用：中小企業は1人あたり最大80万円</p><p>無期雇用から正規雇用：中小企業は1人あたり最大40万円</p><p>重点支援対象者かどうかで助成額が変わります</p></div>'
      },
      {
        heading: '申請前の注意点',
        content: '<p>原則として、対象となる取組の前日までにキャリアアップ計画書を都道府県労働局へ提出する必要があります。転換後の賃金支払い期間や申請期限もコースごとに定められているため、公式パンフレットで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html',
    sourceName: '厚生労働省 キャリアアップ助成金ページ',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html',
      'https://www.mhlw.go.jp/content/11910500/001687993.pdf'
    ],
    sourceNote: '令和8年度版の公開状況と正社員化コース助成額は厚生労働省ページ・令和8年度資料を基準に確認。',
    verifiedAt,
    publishedAt: '2026-06-23',
  },
];
