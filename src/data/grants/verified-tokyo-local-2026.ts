import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-26';

export const verifiedTokyoLocalGrants2026: Grant[] = [
  {
    slug: 'edogawa-sme-support',
    title: '江戸川区 中小企業向けあっせん融資制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '融資限度額 最大8,000万円',
    maxAmountNum: 8000,
    category: 'employment',
    prefecture: '東京都',
    tags: ['江戸川区', '中小企業', '融資あっせん'],
    eligibility: '江戸川区内で事業を営む中小企業者・個人事業主が対象です。資金メニューごとに事業継続年数、税の滞納がないこと、信用保証協会の保証対象であることなどの要件があります。',
    targetOccupation: '中小企業者・個人事業主',
    applicationPeriod: '通年。資金メニュー、予算、金融機関・信用保証協会の審査状況により利用可否が変わります',
    description: '江戸川区が、区内中小企業者の運転資金・設備資金などについて金融機関への融資あっせんを行い、利子や信用保証料の負担軽減を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内事業者が必要な事業資金を調達しやすくするため、江戸川区が金融機関に融資をあっせんする制度です。資金メニューにより融資限度額、返済期間、本人負担利率などが異なります。</p>'
      },
      {
        heading: '主な支援内容',
        content: '<p>公式ページでは、設備・運転資金等の各メニュー、融資限度額、利子補給、信用保証料補助などが案内されています。利用前に区の制度概要と申込書類を確認し、金融機関や信用保証協会の審査を受けます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>資金使途や事業状況により利用できるメニューが変わります。締切日が固定された公募型補助金ではないため、申込前に江戸川区の最新様式と相談窓口を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e093/shigotosangyo/jigyosha_oen/sangyo_jigyosya/yushi_nintei/seidogaiyo.html',
    sourceName: '江戸川区 中小企業向けあっせん融資制度',
    sourceUrls: ['https://www.city.edogawa.tokyo.jp/e093/shigotosangyo/jigyosha_oen/sangyo_jigyosya/yushi_nintei/seidogaiyo.html'],
    sourceNote: '江戸川区公式ページで制度概要、資金メニュー、融資限度額、申込書類を確認。固定締切は確認できないため期限日は設定していない。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-nursing-home-reform',
    title: '世田谷区 地域介護・福祉空間整備等施設整備交付金（令和8年度協議受付終了）',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '対象事業により833万円・1,660万円等',
    maxAmountNum: 1660,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['世田谷区', '介護施設', '受付終了'],
    eligibility: '世田谷区内で対象となる高齢者施設等の防災・減災、非常用自家発電設備、水害対策、換気設備等の整備を行う法人等が対象です。',
    targetOccupation: '介護サービス事業者・社会福祉法人等',
    applicationPeriod: '令和8年度協議受付は2026年4月10日17:00必着で終了',
    deadlineDate: '2026-04-10',
    description: '世田谷区が国の地域介護・福祉空間整備等施設整備交付金について協議受付を行っていた制度です。令和8年度分は公式ページで受付終了が案内されているため、通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者施設等の防災・減災、非常用自家発電設備、給水設備、水害対策、換気設備などの整備を支援する国交付金の協議受付です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>対象事業により、施設あたり833万円、1,660万円、面積あたり4,310円など複数の基準額が設定されています。詳細は整理表と協議資料で確認します。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度分の提出期限は2026年4月10日17時必着で終了しています。新規に検討する場合は次回募集や区の最新案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02082/2328.html',
    sourceName: '世田谷区 地域介護・福祉空間整備等施設整備交付金',
    sourceUrls: [
      'https://www.city.setagaya.lg.jp/02082/2328.html',
      'https://www.city.setagaya.lg.jp/documents/2328/seirihyou1.pdf'
    ],
    sourceNote: '世田谷区公式ページで令和8年度協議受付終了、提出期限2026年4月10日17時、対象事業別の基準額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-nursing-home-reform',
    title: '杉並区 認知症高齢者グループホーム整備（令和8年度新規指定なし）',
    organization: '杉並区',
    type: 'local',
    maxAmount: '令和8年度は新規指定なし',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['杉並区', 'グループホーム', '募集なし'],
    eligibility: '認知症高齢者グループホームの整備を検討する事業者向けの情報ですが、令和8年度は新規指定がない旨が公式ページで案内されています。',
    targetOccupation: '介護サービス事業者・社会福祉法人等',
    applicationPeriod: '令和8年度は新規指定なし。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '旧データでは杉並区の認知症高齢者グループホーム整備補助として掲載されていましたが、公式ページで令和8年度中の新規指定なしと確認したため、通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>杉並区公式ページで、令和8年度中は認知症高齢者グループホームの新規指定がない旨を確認しました。現時点で申請できる助成募集としては掲載しません。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>補助額、募集期限、申請要件を現行募集として確認できないため、誤申請を避ける目的で期限切れ扱いにしています。</p>'
      },
      {
        heading: '次に確認すること',
        content: '<p>次年度以降の整備方針や公募が出た場合は、杉並区の介護サービス事業者向け案内で最新の指定予定を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s038/1962.html',
    sourceName: '杉並区 地域密着型サービス事業者の公募・指定予定',
    sourceUrls: ['https://www.city.suginami.tokyo.jp/s038/1962.html'],
    sourceNote: '杉並区公式ページで令和8年度中の認知症高齢者グループホーム新規指定なしを確認。現行助成募集として確認できないため掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'minato-housing-seismic',
    title: '港区 戸建て住宅等耐震化支援事業',
    organization: '港区',
    type: 'local',
    maxAmount: '耐震改修等 最大400万円',
    maxAmountNum: 400,
    category: 'housing',
    prefecture: '東京都',
    tags: ['港区', '耐震化', '住宅'],
    eligibility: '港区内の旧耐震基準の戸建て住宅等の所有者が対象です。対象建築物、工事内容、住民税課税状況等により助成内容が異なります。',
    applicationPeriod: '通年。ただし予算に達し次第終了する場合あり',
    description: '港区が実施する戸建て住宅等の耐震化支援です。無料耐震診断・アドバイザー派遣に加え、木造住宅等の耐震改修、建替え、除却などに対する助成制度が用意されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地震による建物倒壊被害を減らすため、港区が旧耐震基準の戸建て住宅等を対象に、耐震診断や耐震改修等を支援する制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>戸建て住宅等では無料耐震診断やアドバイザー派遣を利用できます。民間建築物耐震化促進事業では、建物種別に応じて耐震改修等の助成が案内され、木造住宅では最大400万円の支援が確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>工事契約や着手前に区へ相談し、対象建築物・工事内容・助成区分を確認してください。予算状況により受付が変わる場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/jutakushien/kankyo-machi/sumai/jutaku/muryoutaisinsindan.html',
    sourceName: '港区 戸建て住宅等耐震化支援事業',
    sourceUrls: [
      'https://www.city.minato.tokyo.jp/jutakushien/kankyo-machi/sumai/jutaku/muryoutaisinsindan.html',
      'https://www.city.minato.tokyo.jp/jutakushien/kankyo-machi/sumai/jutaku/minkantaishinka.html'
    ],
    sourceNote: '港区公式ページで無料診断・アドバイザー派遣、民間建築物耐震化促進事業の助成対象と木造住宅最大400万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koto-housing-seismic',
    title: '江東区 木造住宅の耐震化助成',
    organization: '江東区',
    type: 'local',
    maxAmount: '補強計画15万円、補強工事 最大300万円',
    maxAmountNum: 300,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江東区', '耐震改修', '木造住宅'],
    eligibility: '江東区内の対象木造住宅の所有者等が対象です。昭和56年5月31日以前に着工された住宅など、対象建物の要件があります。',
    applicationPeriod: '完了報告は2027年1月29日まで。予算状況により受付終了あり',
    deadlineDate: '2027-01-29',
    description: '江東区が、木造住宅の無料耐震診断、耐震補強計画作成、耐震補強工事等を支援する制度です。補強工事は条件により最大300万円まで助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旧耐震基準の木造住宅を対象に、耐震診断から補強計画、補強工事まで段階的に支援する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>補強計画作成は上限15万円、耐震補強工事は上限300万円と案内されています。対象建物や世帯要件により助成率・上限が異なります。</p>'
      },
      {
        heading: '期限',
        content: '<p>令和8年度内に助成を受ける場合、完了報告書の提出期限は2027年1月29日です。工事前に必ず区へ相談してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/396201/kurashi/sumai/iji/taishin/16052.html',
    sourceName: '江東区 木造住宅の耐震化',
    sourceUrls: ['https://www.city.koto.lg.jp/396201/kurashi/sumai/iji/taishin/16052.html'],
    sourceNote: '江東区公式ページで無料耐震診断、補強計画15万円、補強工事最大300万円、完了報告期限2027年1月29日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-seismic-retrofit',
    title: '大田区 木造住宅の耐震診断・改修・除却の費用助成',
    organization: '大田区',
    type: 'local',
    maxAmount: '改修設計15万円、改修工事 最大350万円',
    maxAmountNum: 350,
    category: 'housing',
    prefecture: '東京都',
    tags: ['大田区', '耐震改修', '木造住宅'],
    eligibility: '大田区内の旧耐震基準の木造住宅等を所有する方が対象です。建物の構造、用途、耐震診断結果などの要件があります。',
    applicationPeriod: '木造建築物改修工事の令和8年度申請期限は2027年1月15日',
    deadlineDate: '2027-01-15',
    description: '大田区が、木造住宅等の耐震診断、改修設計、耐震改修工事、除却工事などを支援する制度です。耐震改修工事は条件により最大350万円まで助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>震災時の建物倒壊や延焼リスクを下げるため、大田区が旧耐震基準の木造住宅等の耐震化を支援しています。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>公式ページでは、耐震診断、改修設計、耐震改修工事、除却工事などの助成が案内されています。改修設計は上限15万円、改修工事は条件により最大350万円です。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>令和8年度の木造建築物改修工事申請期限は2027年1月15日です。工事前に申請し、交付決定後に着手する必要があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/bousai_machidukuri/mokudou.html',
    sourceName: '大田区 木造住宅の耐震診断・改修・除却の費用助成',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/bousai_machidukuri/mokudou.html',
      'https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/bousai_machidukuri/taishin-ka-josei_r05_shimekiri.html'
    ],
    sourceNote: '大田区公式ページで耐震改修等の助成内容、改修設計上限15万円、改修工事最大350万円、令和8年度申請期限2027年1月15日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fuchu-housing-earthquake',
    title: '府中市 木造住宅耐震診断・耐震改修等助成事業',
    organization: '府中市',
    type: 'local',
    maxAmount: '耐震改修 最大170万円',
    maxAmountNum: 170,
    category: 'housing',
    prefecture: '東京都',
    tags: ['府中市', '耐震改修', '木造住宅'],
    eligibility: '府中市内の旧耐震基準の木造住宅等の所有者が対象です。耐震診断の結果や市税の滞納がないことなど、各助成の要件を満たす必要があります。',
    applicationPeriod: '予算の範囲内で受付。申請前に市へ相談',
    description: '府中市が木造住宅の耐震診断、耐震改修、除却などを支援する制度です。耐震改修は条件により最大170万円の助成が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地震に強い住宅づくりを進めるため、府中市が旧耐震基準の木造住宅の耐震診断や耐震改修等を支援しています。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>公式ページでは、耐震診断、耐震改修、除却等の助成が案内されています。耐震改修は最大170万円まで助成されます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>固定の締切日は公式ページで確認できません。予算の範囲内での受付となるため、事前相談と工事前申請が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.fuchu.tokyo.jp/kurashi/machi/jutaku/mokuzotaishin.html',
    sourceName: '府中市 木造住宅耐震診断・耐震改修等助成事業',
    sourceUrls: ['https://www.city.fuchu.tokyo.jp/kurashi/machi/jutaku/mokuzotaishin.html'],
    sourceNote: '府中市公式ページで対象建物、耐震診断・耐震改修等の助成、耐震改修最大170万円、予算内受付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hachioji-scholarship-repayment',
    title: '八王子市 定住促進奨学金返還支援事業（令和7年度受付終了）',
    organization: '八王子市',
    type: 'local',
    maxAmount: '最大10万円/年（5年間対象）',
    maxAmountNum: 50,
    category: 'education',
    prefecture: '東京都',
    tags: ['八王子市', '奨学金返還', '受付終了'],
    eligibility: '八王子市に定住し、市内企業等への就職など一定の要件を満たす方を対象とした奨学金返還支援事業です。',
    targetOccupation: '若年就業者・奨学金返還者',
    applicationPeriod: '令和7年度認定申請は2025年10月31日で受付終了',
    deadlineDate: '2025-10-31',
    description: '八王子市が実施していた定住促進のための奨学金返還支援事業です。令和7年度分の認定申請は公式ページで受付終了が確認できるため、通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>若者の定住促進を目的に、一定要件を満たす奨学金返還者を支援する制度です。</p>'
      },
      {
        heading: '支援額',
        content: '<p>公式ページでは、対象年度により最大10万円/年、5年間対象の支援として案内されています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和7年度分の認定申請受付は2025年10月31日で終了しています。次回募集がある場合は八王子市の最新案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/kurashi/shimin/002/a951649/002/p032523.html',
    sourceName: '八王子市 定住促進奨学金返還支援事業',
    sourceUrls: ['https://www.city.hachioji.tokyo.jp/kurashi/shimin/002/a951649/002/p032523.html'],
    sourceNote: '八王子市公式ページで令和7年度認定申請受付終了、2025年10月31日締切、最大10万円/年を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'machida-scholarship-repayment',
    title: '東京都 技術系職員向け奨学金返還支援事業（町田市採用案内掲載）',
    organization: '東京都',
    type: 'local',
    maxAmount: '最大225万円',
    maxAmountNum: 225,
    category: 'education',
    prefecture: '東京都',
    tags: ['東京都', '奨学金返還', '技術系職員'],
    eligibility: '東京都の対象技術系職種に採用され、奨学金返還など制度要件を満たす職員が対象です。町田市独自制度ではなく、町田市採用案内から東京都制度が案内されています。',
    targetOccupation: '東京都技術系職員',
    applicationPeriod: '採用後に制度要件を確認。固定締切は公式ページで確認できません',
    description: '町田市職員採用ページで案内されている奨学金返還支援は、町田市独自の補助金ではなく東京都の技術系職員向け支援です。対象職種や申請時期は東京都採用ページで確認します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東京都が技術系職員の確保を目的に、対象職種の職員に対して奨学金返還を支援する制度です。</p>'
      },
      {
        heading: '支援額',
        content: '<p>公式採用ページでは最大225万円の支援が案内されています。対象職種、返還中の奨学金、勤務要件などにより適用可否が変わります。</p>'
      },
      {
        heading: '掲載上の注意',
        content: '<p>旧候補slugは町田市名ですが、公式確認の結果、町田市独自制度ではなく東京都制度への案内です。申請前に東京都の採用案内で対象職種と手続き確認が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.saiyou2.metro.tokyo.lg.jp/pc/training/support-scholorship-tech.html',
    sourceName: '東京都 技術系職員向け奨学金返還支援事業',
    sourceUrls: [
      'https://www.city.machida.tokyo.jp/shisei/syokuin/bosyu01/sixyokuinsaiyousikenzixyouhou.html',
      'https://www.saiyou2.metro.tokyo.lg.jp/pc/training/support-scholorship-tech.html'
    ],
    sourceNote: '町田市採用ページから東京都制度への案内を確認し、東京都公式採用ページで最大225万円、対象が技術系職員向けであることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nerima-housing-seismic',
    title: '練馬区 住宅の耐震改修工事等の助成',
    organization: '練馬区',
    type: 'local',
    maxAmount: '耐震改修工事 最大310万円',
    maxAmountNum: 310,
    category: 'housing',
    prefecture: '東京都',
    tags: ['練馬区', '耐震改修', '住宅'],
    eligibility: '練馬区内の対象住宅の所有者が対象です。建物の建築時期、構造、耐震診断結果、世帯要件などにより助成内容が異なります。',
    applicationPeriod: '通年。予算・事前相談の状況により受付終了あり',
    description: '練馬区が住宅の耐震改修工事等を支援する制度です。一般世帯は最大170万円、条件により最大310万円まで助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅の耐震性を高め、地震時の倒壊被害を減らすため、練馬区が耐震改修工事等の費用を助成しています。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>公式ページでは、耐震改修工事の助成上限として一般は最大170万円、条件により最大310万円が案内されています。建物種別や世帯状況により対象が変わります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>固定締切日は確認できません。事前相談と工事前申請が必要で、予算状況により受付が終了する場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/kurashi/sumai/takuchi/taishin/kodate.html',
    sourceName: '練馬区 住宅の耐震改修工事等の助成',
    sourceUrls: ['https://www.city.nerima.tokyo.jp/kurashi/sumai/takuchi/taishin/kodate.html'],
    sourceNote: '練馬区公式ページで住宅の耐震改修工事等の助成、一般最大170万円、条件により最大310万円を確認。固定締切は確認できない。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shibuya-housing-subsidy',
    title: '渋谷区 住宅簡易改修支援事業',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '東京都',
    tags: ['渋谷区', '住宅改修', 'リフォーム'],
    eligibility: '渋谷区内の住宅に居住し、区の協定事業者による簡易改修工事を行う方が対象です。対象工事、申請者、住宅の要件があります。',
    applicationPeriod: '申請は2027年1月31日まで。工事完了は2027年3月15日まで',
    deadlineDate: '2027-01-31',
    description: '渋谷区が、区民の住環境改善を目的に、住宅の簡易改修工事費の一部を助成する制度です。助成額は工事費の20%で上限10万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区内の住宅で行う簡易改修工事について、区の協定事業者を利用した場合に費用の一部を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>助成額は対象工事費の20%で、上限は10万円です。対象となる工事内容や施工事業者の条件を公式ページで確認します。</p>'
      },
      {
        heading: '期限',
        content: '<p>申請は2027年1月31日まで、工事完了は2027年3月15日までと案内されています。工事前に申請が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kankyo/kenchiku/kenchiku-yushi/zyutakukanikaishusien.html',
    sourceName: '渋谷区 住宅簡易改修支援事業',
    sourceUrls: ['https://www.city.shibuya.tokyo.jp/kankyo/kenchiku/kenchiku-yushi/zyutakukanikaishusien.html'],
    sourceNote: '渋谷区公式ページで住宅簡易改修支援事業、工事費20%、上限10万円、申請期限2027年1月31日、完了期限2027年3月15日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokyo-disaster-preparedness',
    title: '東京都 東京とどまるマンション普及促進事業',
    organization: '東京都',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['東京都', '防災備蓄', 'マンション'],
    eligibility: '東京都の「東京とどまるマンション」に登録したマンション管理組合等が、防災備蓄資器材を購入する場合に対象です。',
    applicationPeriod: '通常分は2026年12月25日まで。地域連携分は2026年12月15日まで。予算到達で終了',
    deadlineDate: '2026-12-25',
    description: '東京都が、災害時に自宅で生活を継続しやすいマンションを増やすため、防災備蓄資器材の購入を支援する事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>「東京とどまるマンション」に登録したマンションを対象に、防災備蓄資器材の購入費を補助し、災害時の在宅避難力を高める事業です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>防災備蓄資器材の購入に対し、通常分は最大150万円の支援が案内されています。地域連携分など、申請区分により期限や条件が異なります。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>通常分の申請期限は2026年12月25日、地域連携分は2026年12月15日です。予算に達した場合は期限前に終了します。</p>'
      }
    ],
    officialUrl: 'https://www.mansion-tokyo.metro.tokyo.lg.jp/bousai/02lcp-shien/02fukyusokushin/',
    sourceName: '東京都 東京とどまるマンション普及促進事業',
    sourceUrls: [
      'https://www.mansion-tokyo.metro.tokyo.lg.jp/bousai/02lcp-shien/02fukyusokushin/',
      'https://www.metro.tokyo.lg.jp/information/press/2026/06/2026060505'
    ],
    sourceNote: '東京都マンションポータルと都報道発表で登録マンションの防災備蓄資器材補助、通常分2026年12月25日、地域連携分2026年12月15日、予算到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tachikawa-housing-earthquake',
    title: '立川市 木造住宅の耐震化助成制度',
    organization: '立川市',
    type: 'local',
    maxAmount: '耐震改修工事 最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['立川市', '耐震改修', '木造住宅'],
    eligibility: '立川市内の対象木造住宅の所有者が対象です。昭和56年5月31日以前に建築された住宅など、対象建物の要件があります。',
    applicationPeriod: '完了届出は2027年2月26日まで。予算到達で終了する場合あり',
    deadlineDate: '2027-02-26',
    description: '立川市が、旧耐震基準の木造住宅を対象に耐震診断、耐震改修設計・監理、耐震改修工事などを支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>木造住宅の耐震化を進めるため、立川市が耐震診断、改修設計・監理、改修工事を支援しています。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>耐震改修工事は上限100万円、耐震改修設計・監理は別途上限10万円と案内されています。申請前に対象住宅と工事内容を確認してください。</p>'
      },
      {
        heading: '期限',
        content: '<p>令和8年度の完了届出期限は2027年2月26日です。予算状況により受付が変わる可能性があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/kurashi/sumai/1002092/1002114.html',
    sourceName: '立川市 木造住宅の耐震化助成制度',
    sourceUrls: ['https://www.city.tachikawa.lg.jp/kurashi/sumai/1002092/1002114.html'],
    sourceNote: '立川市公式ページで木造住宅耐震化助成、耐震改修工事上限100万円、設計・監理上限10万円、完了届出期限2027年2月26日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toshima-small-business',
    title: '豊島区 中小企業支援事業補助金（経営安定コース）',
    organization: '豊島区',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'employment',
    prefecture: '東京都',
    tags: ['豊島区', '中小企業', '経営安定'],
    eligibility: '豊島区内の中小企業者等が対象です。事業PR、専門家活用、人材育成など、経営安定に資する取組の一部経費を補助します。',
    targetOccupation: '中小企業者・個人事業主',
    applicationPeriod: '事前申請は2026年11月27日まで。交付申請は2027年1月22日まで',
    deadlineDate: '2026-11-27',
    description: '豊島区が、区内中小企業の経営安定を目的に、事業PR、専門家活用、人材育成などの取組を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内中小企業が経営課題に対応するための取組について、対象経費の一部を補助する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>経営安定コースでは、事業PR、専門家活用、人材育成等にかかる経費が対象で、補助上限は15万円です。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>事前申請は2026年11月27日まで、交付申請は2027年1月22日までです。補助対象経費の支出前に公式ページの手順を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/584/machizukuri/sangyo/kigyo/019174.html',
    sourceName: '豊島区 中小企業支援事業補助金',
    sourceUrls: ['https://www.city.toshima.lg.jp/584/machizukuri/sangyo/kigyo/019174.html'],
    sourceNote: '豊島区公式ページで中小企業支援事業補助金、経営安定コース上限15万円、事前申請2026年11月27日、交付申請2027年1月22日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-housing-seismic',
    title: '昭島市 木造住宅耐震改修等補助制度',
    organization: '昭島市',
    type: 'local',
    maxAmount: '最大60万円＋加算36万円',
    maxAmountNum: 96,
    category: 'housing',
    prefecture: '東京都',
    tags: ['昭島市', '耐震改修', '木造住宅'],
    eligibility: '昭島市内の旧耐震基準の木造住宅等を所有する方が対象です。耐震診断結果、工事内容、世帯要件などにより補助内容が異なります。',
    applicationPeriod: '2026年11月30日までを目安に相談。予算到達で終了する場合あり',
    deadlineDate: '2026-11-30',
    description: '昭島市が木造住宅の耐震改修、建替え、除却などを支援する補助制度です。耐震改修は最大60万円に加算36万円の支援が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>昭島市内の旧耐震基準の木造住宅を対象に、耐震改修、建替え、除却等の費用を補助する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>公式ページでは、耐震改修等の補助として最大60万円と、条件に応じた加算36万円が案内されています。対象工事や建物要件を確認してから申請します。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>受付は事前相談が必要で、予算の状況により早期終了する場合があります。令和8年度は2026年11月30日までを目安に相談してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/kurashi/sumai/1001640/1001651/1001653.html',
    sourceName: '昭島市 木造住宅耐震改修等補助制度',
    sourceUrls: ['https://www.city.akishima.lg.jp/kurashi/sumai/1001640/1001651/1001653.html'],
    sourceNote: '昭島市公式ページで木造住宅耐震改修等補助、最大60万円と加算36万円、相談・予算到達時終了の注意を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kokubunji-housing-seismic',
    title: '国分寺市 木造住宅の耐震診断・耐震改修等助成金',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '耐震改修 最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['国分寺市', '耐震改修', '木造住宅'],
    eligibility: '国分寺市内の対象木造住宅の所有者が対象です。耐震診断、工事内容、市税納付状況などの要件があります。',
    applicationPeriod: '2027年1月29日まで。予算到達で終了する場合あり',
    deadlineDate: '2027-01-29',
    description: '国分寺市が、木造住宅の無料耐震診断士派遣と耐震改修等の費用助成を行う制度です。耐震改修は対象工事費の10分の8、上限100万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旧耐震基準の木造住宅の安全性を高めるため、国分寺市が耐震診断士派遣と耐震改修等の助成を実施しています。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>耐震診断士派遣は無料で利用できます。耐震改修は対象工事費の10分の8、上限100万円と案内されています。</p>'
      },
      {
        heading: '期限',
        content: '<p>令和8年度の申請期限は2027年1月29日です。予算に達した場合は受付が終了するため、早めに市へ相談してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/kurashi/sumai/jutaku/1027860.html',
    sourceName: '国分寺市 木造住宅の耐震診断・耐震改修等助成金',
    sourceUrls: ['https://www.city.kokubunji.tokyo.jp/kurashi/sumai/jutaku/1027860.html'],
    sourceNote: '国分寺市公式ページで無料耐震診断士派遣、耐震改修10分の8・上限100万円、申請期限2027年1月29日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-housing-purchase',
    title: '千代田区 次世代育成住宅助成（マイホーム取得も対象）',
    organization: '千代田区',
    type: 'local',
    maxAmount: '月額最大8万円＋転居費10万円',
    maxAmountNum: 490,
    category: 'housing',
    prefecture: '東京都',
    tags: ['千代田区', '子育て世帯', '住宅助成'],
    eligibility: '千代田区内で住み替える新婚世帯・子育て世帯などが対象です。マイホーム取得も対象に含まれますが、契約前の仮申請など要件があります。',
    applicationPeriod: '通年。契約前の仮申請が原則',
    description: '千代田区が、次世代育成を目的に新婚・子育て世帯等の区内居住を支援する住宅助成です。賃貸だけでなくマイホーム取得も対象に含まれます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子育て世帯等の区内定住を支援するため、住み替え後の家賃・住宅ローン負担や転居費の一部を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>月額助成は最大8万円、転居費助成は最大10万円と案内されています。世帯構成、住戸面積、所得、契約時期などの要件があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>住宅購入専用制度ではなく、次世代育成住宅助成の対象にマイホーム取得が含まれる形です。原則として契約前の仮申請が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/machizukuri/sumai/jose/jisedai.html',
    sourceName: '千代田区 次世代育成住宅助成',
    sourceUrls: ['https://www.city.chiyoda.lg.jp/koho/machizukuri/sumai/jose/jisedai.html'],
    sourceNote: '千代田区公式ページで次世代育成住宅助成、マイホーム取得も対象、月額最大8万円、転居費10万円、契約前仮申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chuo-vacant-house',
    title: '中央区 密集街区環境改善まちづくり事業（老朽空き家除却支援）',
    organization: '中央区',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'housing',
    prefecture: '東京都',
    tags: ['中央区', '老朽空き家', '除却'],
    eligibility: '中央区の密集街区環境改善まちづくり事業の対象区域等で、老朽空き家がある無接道敷地等の土地買取に伴う除却など、公式要件を満たす場合が対象です。',
    applicationPeriod: '通年。事前相談が必要',
    description: '中央区が、密集街区の防災性向上を目的に、老朽空き家がある無接道敷地等の土地買取と除却支援を行う制度です。旧データの空き住戸リフォーム助成ではなく、公式確認できる現行制度に置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>密集街区の住環境と防災性を改善するため、老朽空き家がある無接道敷地等について、土地買取や除却費補助などを行う事業です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>公式ページでは、老朽空き家の除却に関する支援として最大150万円が案内されています。対象区域や敷地条件などを満たす必要があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>旧候補の「空き住戸活用支援事業」と一致する公式助成は確認できなかったため、中央区公式で確認できる老朽空き家除却支援に内容を改めています。利用前に区へ事前相談してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/a0041/machizukuri/toshikeikaku/machi/missyugaiku.html',
    sourceName: '中央区 密集街区環境改善まちづくり事業',
    sourceUrls: ['https://www.city.chuo.lg.jp/a0041/machizukuri/toshikeikaku/machi/missyugaiku.html'],
    sourceNote: '中央区公式ページで密集街区環境改善まちづくり事業、老朽空き家がある無接道敷地等の土地買取に伴う除却補助、最大150万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'minato-housing-eco',
    title: '港区 地球温暖化対策助成制度',
    organization: '港区',
    type: 'local',
    maxAmount: '最大1,000万円',
    maxAmountNum: 1000,
    category: 'housing',
    prefecture: '東京都',
    tags: ['港区', '省エネ', '住宅設備'],
    eligibility: '港区民、管理組合、区内事業者等が対象です。対象設備や助成上限は申請者区分・設備種別により異なります。',
    applicationPeriod: '2027年1月29日まで。予算到達で終了する場合あり',
    deadlineDate: '2027-01-29',
    description: '港区が、住宅・マンション管理組合・事業者等の省エネ設備導入や断熱化を支援する制度です。最大額は管理組合向けの高断熱サッシ助成等で1,000万円が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>温室効果ガス削減を目的に、港区が太陽光発電、蓄電池、LED、高断熱サッシ、充電設備などの導入を支援する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>対象者と設備により助成額が異なります。管理組合向け高断熱サッシ助成では最大1,000万円、区民向け設備にも各種上限額が設定されています。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>令和8年度の申請期限は2027年1月29日です。予算に達した場合は期限前に終了する場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/chikyukankyou/joseikin/r5.html',
    sourceName: '港区 地球温暖化対策助成制度',
    sourceUrls: [
      'https://www.city.minato.tokyo.jp/chikyukankyou/joseikin/r5.html',
      'https://www.city.minato.tokyo.jp/chikyukankyou/kankyo-machi/kankyo/hojo/'
    ],
    sourceNote: '港区公式ページで令和8年度地球温暖化対策助成制度、対象設備、申請期限2027年1月29日、管理組合向け高断熱サッシ最大1,000万円等を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'minato-sme-support',
    title: '港区 中小企業人材確保支援事業補助金',
    organization: '港区・港区立産業振興センター',
    type: 'local',
    maxAmount: '最大125万円',
    maxAmountNum: 125,
    category: 'employment',
    prefecture: '東京都',
    tags: ['港区', '中小企業', '人材確保'],
    eligibility: '港区内の中小企業者等が対象です。人材紹介手数料、求人広告費、採用広報、インターンシップ関連経費など、人材確保に係る対象経費を支援します。',
    targetOccupation: '中小企業者・個人事業主',
    applicationPeriod: '2027年1月31日まで。予算到達で終了する場合あり',
    deadlineDate: '2027-01-31',
    description: '港区内中小企業の人材確保を支援する補助金です。通常上限100万円、ワーク・ライフ・バランス推進企業認定等の条件により最大125万円まで補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>港区内中小企業の採用力向上と人材確保を支援するため、人材紹介手数料や求人広告費等の対象経費を補助する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>通常の補助上限は100万円です。港区ワーク・ライフ・バランス推進企業認定等の要件を満たす場合は最大125万円まで支援されます。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>申請期限は2027年1月31日です。予算到達で終了する場合があるため、事業着手前に公式ページで最新の受付状況を確認してください。</p>'
      }
    ],
    officialUrl: 'https://minato-sansin.com/jinzaikakuhosien/',
    sourceName: '港区立産業振興センター 中小企業人材確保支援事業補助金',
    sourceUrls: [
      'https://minato-sansin.com/jinzaikakuhosien/',
      'https://www.city.minato.tokyo.jp/sangyousinkou/sangyo/chushokigyo/hanrokakudai.html'
    ],
    sourceNote: '港区立産業振興センター公式ページと港区公式補助金案内で、人材確保支援事業補助金、通常上限100万円、認定企業等最大125万円、申請期限2027年1月31日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
];
