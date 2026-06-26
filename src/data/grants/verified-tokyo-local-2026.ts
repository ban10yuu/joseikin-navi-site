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
  {
    slug: 'shibuya-sme-support',
    title: '渋谷区 中小企業デジタル化支援助成金（公式助成確認不可）',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '東京都',
    tags: ['渋谷区', '中小企業', '公式確認不可'],
    eligibility: '旧候補名の制度について、渋谷区公式サイトで区独自の中小企業デジタル化支援助成金として確認できませんでした。',
    targetOccupation: '中小企業者・個人事業主',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '渋谷区公式サイトでは中小企業向け支援情報や別制度の店舗開業支援補助金は確認できますが、旧候補名に一致する区独自デジタル化助成金は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>渋谷区公式サイトで中小企業向け支援情報と別制度を確認しましたが、候補名どおりの区独自「中小企業デジタル化支援助成金」は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>制度名、対象経費、補助額、申請期限を公式情報で確認できないため、申請可能な助成金として通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>渋谷区の事業者支援は、区公式の中小企業向け支援情報サイトや店舗開業支援補助金など、個別制度の最新ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/jigyosha/shoko-rodo-sodan/kuni_tokyoto_shiennjyouhou/shien_site.html',
    sourceName: '渋谷区 中小企業向け支援情報サイト',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/jigyosha/shoko-rodo-sodan/kuni_tokyoto_shiennjyouhou/shien_site.html',
      'https://www.city.shibuya.tokyo.jp/jigyosha/shoko-rodo-sodan/akitempo-kassei-pj/akitempo.html'
    ],
    sourceNote: '渋谷区公式で中小企業向け支援情報と店舗開業支援補助金は確認したが、候補名どおりの区独自デジタル化助成金は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-vacant-house',
    title: '杉並区 空家等利活用モデル事業助成金',
    organization: '杉並区',
    type: 'local',
    maxAmount: '公式制度ページで上限額未明示',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['杉並区', '空き家活用', '地域活用'],
    eligibility: '杉並区内の空き家等を地域貢献や地域課題解決に活用する事業などが対象です。対象者、活用内容、助成額は個別の募集・相談で確認が必要です。',
    applicationPeriod: '公式ページに制度掲載あり。募集状況・上限額は区へ確認',
    description: '杉並区が空き家等の利活用を促すために案内している助成制度です。令和8年度予算資料でも空家等利活用モデル事業助成金が確認できますが、制度ページ上では上限額を断定できないため金額は明示していません。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>空き家を地域の交流、福祉、子育て、防災などの用途に利活用する取組を支援する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>令和8年度予算資料で空家等利活用モデル事業助成金の計上を確認できます。一方、公式制度ページ上では上限額を確認できないため、申請前に杉並区へ確認してください。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>空き家の状態、活用目的、地域貢献性により対象可否が変わります。事前相談のうえ、最新の募集状況を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s093/18657.html',
    sourceName: '杉並区 空家等対策',
    sourceUrls: [
      'https://www.city.suginami.tokyo.jp/s093/18657.html',
      'https://www.city.suginami.tokyo.jp/documents/22830/08ippankaikei.pdf'
    ],
    sourceNote: '杉並区公式ページで空き家を利活用するときの助成制度、令和8年度予算資料で空家等利活用モデル事業助成金を確認。上限額は制度ページで未確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nerima-vacant-house',
    title: '練馬区 空家地域貢献事業補助金',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大100万円（区域加算で最大150万円）',
    maxAmountNum: 150,
    category: 'housing',
    prefecture: '東京都',
    tags: ['練馬区', '空き家活用', '地域貢献'],
    eligibility: '練馬区内の空き家を地域貢献事業に活用する団体等が対象です。公益的な活用内容、建物所有者との合意、対象区域などの要件があります。',
    applicationPeriod: '通年。事前相談が必要',
    description: '練馬区が、空き家を地域貢献の場として活用する団体等に対し、初期整備費などを支援する補助金です。通常上限100万円、条件により区域加算50万円が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>空き家を地域交流、子育て支援、高齢者支援など公益的な活動の場として活用する取組を支援する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>みどりのまちづくりセンターと練馬区要綱で、初期整備費の補助上限100万円、区域加算50万円を確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>補助金の利用には事前相談と事業内容の確認が必要です。空き家所有者、活動団体、地域貢献性などの条件を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/kurashi/sumai/akiya/katsuyou.html',
    sourceName: '練馬区 空き家の活用',
    sourceUrls: [
      'https://www.city.nerima.tokyo.jp/kurashi/sumai/akiya/katsuyou.html',
      'https://nerimachi.jp/akiya/jigyo_chikikoken.php',
      'https://www1.g-reiki.net/nerima/reiki_honbun/a100RG00003080.html'
    ],
    sourceNote: '練馬区公式ページ、みどりのまちづくりセンター、練馬区要綱で空家地域貢献事業補助金、上限100万円、区域加算50万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-sme-support',
    title: '足立区 ものづくり企業地域共生推進助成金（令和8年度）',
    organization: '足立区',
    type: 'local',
    maxAmount: '最大375万円',
    maxAmountNum: 375,
    category: 'employment',
    prefecture: '東京都',
    tags: ['足立区', 'ものづくり', '地域共生'],
    eligibility: '足立区内のものづくり企業等が、操業環境改善や地域との共生に資する設備・工事等を行う場合に対象です。',
    targetOccupation: 'ものづくり企業・中小企業者',
    applicationPeriod: '2026年4月1日から2026年11月13日必着まで。予算到達で終了',
    deadlineDate: '2026-11-13',
    description: '足立区が、ものづくり企業の操業継続と周辺地域との共生を支援する助成金です。令和8年度募集では最大375万円、2026年11月13日必着の申請期限が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内ものづくり企業が地域と共生しながら操業を続けられるよう、騒音・振動・臭気対策、設備改善等を支援する助成金です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>令和8年度募集案内で、助成上限375万円が確認できます。対象経費や助成率は工事・設備の内容により異なります。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>申請受付は2026年4月1日から2026年11月13日必着までです。予算到達時は期限前に終了する場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/s-shinko/shigoto/chushokigyo/monodukurikigyourittikeizoku.html',
    sourceName: '足立区 ものづくり企業地域共生推進助成金',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/s-shinko/shigoto/chushokigyo/monodukurikigyourittikeizoku.html',
      'https://www.city.adachi.tokyo.jp/documents/31700/r8kyousei-bosyu.pdf'
    ],
    sourceNote: '足立区公式ページと令和8年度募集案内で、ものづくり企業地域共生推進助成金、最大375万円、2026年11月13日必着を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'katsushika-housing-purchase',
    title: '葛飾区 二世代・三世代住宅取得費助成モデル事業（新規受付廃止）',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '新規受付廃止',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['葛飾区', '住宅取得', '受付廃止'],
    eligibility: '過去に実施されていた二世代・三世代住宅取得費助成モデル事業ですが、葛飾区公式の行政評価資料で新規受付廃止の事務事業として確認しました。',
    applicationPeriod: '新規受付廃止。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '旧候補の三世代住宅取得助成制度は、葛飾区公式ページで新規受付廃止の事務事業として確認しました。現行制度として申請できないため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>葛飾区公式の行政評価ページで、二世代・三世代住宅取得費助成モデル事業が新規受付廃止の事務事業として掲載されていることを確認しました。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>現行の申請可能な住宅取得助成制度として確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '次に確認すること',
        content: '<p>葛飾区の住宅関連支援は、現行の住宅施策や子育て世帯向け制度の最新ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/information/1000085/1006294/1006358/1006369/1006445.html',
    sourceName: '葛飾区 廃止等事務事業',
    sourceUrls: ['https://www.city.katsushika.lg.jp/information/1000085/1006294/1006358/1006369/1006445.html'],
    sourceNote: '葛飾区公式ページで二世代・三世代住宅取得費助成モデル事業が新規受付廃止の事務事業であることを確認。掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hachioji-sme-support',
    title: '八王子市 新製品・新サービス開発補助金（令和8年度）',
    organization: '八王子市',
    type: 'local',
    maxAmount: '共同枠 最大100万円、単独枠 最大50万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '東京都',
    tags: ['八王子市', '中小企業', '新製品開発'],
    eligibility: '八王子市内の中小企業者等が、新製品・新サービスの開発に取り組む場合に対象です。共同枠と単独枠で補助上限が異なります。',
    targetOccupation: '中小企業者・個人事業主',
    applicationPeriod: '2027年1月31日まで。予算到達で終了する場合あり',
    deadlineDate: '2027-01-31',
    description: '八王子市が、区内中小企業等による新製品・新サービス開発を支援する補助金です。旧候補名の「新技術開発」から、公式制度名に合わせて内容を修正しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市内事業者の新製品・新サービス開発を支援し、地域産業の競争力向上を図る補助金です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>共同枠は最大100万円、単独枠は最大50万円と案内されています。対象経費や補助率は公式ページで確認してください。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>令和8年度の申請期限は2027年1月31日です。予算状況により期限前に終了する可能性があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/kurashi/sangyo/001/p037227.html',
    sourceName: '八王子市 新製品・新サービス開発補助金',
    sourceUrls: ['https://www.city.hachioji.tokyo.jp/kurashi/sangyo/001/p037227.html'],
    sourceNote: '八王子市公式ページで令和8年度新製品・新サービス開発補助金、共同枠100万円、単独枠50万円、申請期限2027年1月31日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-housing-assistant',
    title: '千代田区 次世代育成住宅助成',
    organization: '千代田区',
    type: 'local',
    maxAmount: '月額最大8万円＋転居費用10万円',
    maxAmountNum: 778,
    category: 'housing',
    prefecture: '東京都',
    tags: ['千代田区', '子育て世帯', '住宅助成'],
    eligibility: '千代田区内で住み替える新婚世帯・子育て世帯などが対象です。住戸面積、世帯構成、所得、契約時期などの要件があります。',
    applicationPeriod: '通年。契約前の仮申請など手続時期に要件あり',
    description: '千代田区が、次世代育成を目的に新婚・子育て世帯等の区内居住を支援する住宅助成です。月額最大8万円と転居費用10万円の支援が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新婚世帯・子育て世帯等の区内定住を支援するため、住み替え後の住宅費や転居費用の一部を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>月額助成は最大8万円、転居費用助成は最大10万円と案内されています。助成期間や金額は世帯区分により異なります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>契約前の仮申請など、手続きのタイミングに要件があります。住み替え前に必ず公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/machizukuri/sumai/jose/jisedai.html',
    sourceName: '千代田区 次世代育成住宅助成',
    sourceUrls: ['https://www.city.chiyoda.lg.jp/koho/machizukuri/sumai/jose/jisedai.html'],
    sourceNote: '千代田区公式ページで次世代育成住宅助成、月額最大8万円、転居費用10万円、仮申請・本申請の時期要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-newlywed-rent',
    title: '千代田区 次世代育成住宅助成（新婚世帯枠）',
    organization: '千代田区',
    type: 'local',
    maxAmount: '月額最大4万円＋転居費用10万円',
    maxAmountNum: 394,
    category: 'housing',
    prefecture: '東京都',
    tags: ['千代田区', '新婚世帯', '住宅助成'],
    eligibility: '千代田区の次世代育成住宅助成のうち、新婚世帯等の要件を満たす世帯が対象です。親元近居、世帯人数、所得、住戸面積などの要件があります。',
    applicationPeriod: '通年。契約前の仮申請など手続時期に要件あり',
    description: '旧候補名の「新婚世帯住居費助成事業」として独立した制度は確認できなかったため、公式に確認できる次世代育成住宅助成の新婚世帯枠として内容を修正しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千代田区の次世代育成住宅助成は、新婚世帯・子育て世帯等の区内定住を支援する制度です。新婚世帯も対象区分に含まれます。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>新婚2人世帯で親元近居などの条件に該当する場合、1年目の月額最大4万円と転居費用10万円の支援が確認できます。世帯区分により金額は変わります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>「新婚世帯住居費助成」という別制度名は公式確認できません。申請前に次世代育成住宅助成の対象区分と手続期限を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/machizukuri/sumai/jose/jisedai.html',
    sourceName: '千代田区 次世代育成住宅助成',
    sourceUrls: ['https://www.city.chiyoda.lg.jp/koho/machizukuri/sumai/jose/jisedai.html'],
    sourceNote: '千代田区公式ページで次世代育成住宅助成、新婚世帯区分、月額最大4万円、転居費用10万円を確認。候補名の独立制度は確認できないため公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toshima-newlywed-housing',
    title: '豊島区 子育てファミリー世帯家賃助成制度',
    organization: '豊島区',
    type: 'local',
    maxAmount: '月額3万円',
    maxAmountNum: 36,
    category: 'housing',
    prefecture: '東京都',
    tags: ['豊島区', '子育て世帯', '家賃助成'],
    eligibility: '豊島区内の民間賃貸住宅に居住する子育てファミリー世帯が対象です。転居時期、子どもの年齢、所得、住戸面積などの要件があります。',
    applicationPeriod: '通年。ただし2026年4月1日以降の転居・転入は原則対象外との注意あり',
    description: '豊島区が子育てファミリー世帯の居住安定を支援する家賃助成制度です。旧候補名に含まれる新婚単独世帯は公式対象として確認できないため、公式制度名に合わせて掲載します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内の子育てファミリー世帯に対し、民間賃貸住宅の家賃負担を軽減する助成制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>公式ページで月額3万円の家賃助成が確認できます。対象世帯や助成期間は制度要件により異なります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>2026年4月1日以降の転居・転入は原則対象外との注意があります。申請可否は転居時期と世帯要件を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/308/2509041409.html',
    sourceName: '豊島区 子育てファミリー世帯家賃助成制度',
    sourceUrls: ['https://www.city.toshima.lg.jp/308/2509041409.html'],
    sourceNote: '豊島区公式ページで子育てファミリー世帯家賃助成制度、月額3万円、2026年4月1日以降の転居・転入に関する注意を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'minato-parenting-allowance',
    title: '港区 出産費用の助成',
    organization: '港区',
    type: 'local',
    maxAmount: '最大31万円（1人出産の場合）',
    maxAmountNum: 31,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['港区', '出産費用', '子育て'],
    eligibility: '港区に住民登録があり、出産費用から出産育児一時金等を差し引いた自己負担がある方が対象です。申請期限や必要書類の要件があります。',
    applicationPeriod: '出生日から1年以内',
    description: '港区が、出産費用から出産育児一時金等を差し引いた自己負担額を助成する制度です。1人出産の場合は最大31万円が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>出産にかかる経済的負担を軽減するため、港区が出産費用の一部を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>出産費用から出産育児一時金等を差し引いた額が助成対象です。1人出産の場合の助成上限は31万円です。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>申請期限は出生日から1年以内です。領収書や明細書など、必要書類を確認して申請してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/kodomokyufu/kenko/ninshin/shussan/jose.html',
    sourceName: '港区 出産費用の助成',
    sourceUrls: ['https://www.city.minato.tokyo.jp/kodomokyufu/kenko/ninshin/shussan/jose.html'],
    sourceNote: '港区公式ページで出産費用の助成、出産育児一時金等控除後の助成、1人出産最大31万円、出生日から1年以内の申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-newlywed-rent',
    title: '大田区 新婚世帯家賃助成制度（公式助成確認不可）',
    organization: '大田区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['大田区', '新婚世帯', '公式確認不可'],
    eligibility: '旧候補名の新婚世帯家賃助成について、大田区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '大田区公式サイトで結婚手続きや住宅確保支援を確認しましたが、候補名どおりの新婚世帯向け家賃助成制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>大田区公式サイトで結婚・離婚手続き、住宅確保支援を確認しましたが、新婚世帯向け家賃助成制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>制度名、対象者、助成額、申請期限を公式情報で確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>大田区の住宅支援は、住宅確保支援や住まい関連制度の公式ページで最新情報を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/sumai/jutaku_kakuho/index.html',
    sourceName: '大田区 住宅確保支援',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/sumai/jutaku_kakuho/index.html',
      'https://www.city.ota.tokyo.jp/tetsuzuki/kekkon/index.html'
    ],
    sourceNote: '大田区公式で住宅確保支援と結婚手続きページを確認したが、新婚世帯家賃助成は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'edogawa-newlywed-rent',
    title: '江戸川区 新婚世帯家賃補助制度（公式助成確認不可）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江戸川区', '新婚世帯', '公式確認不可'],
    eligibility: '旧候補名の新婚世帯家賃補助について、江戸川区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '江戸川区公式サイトでは結婚パスポートなどの出会い・結婚支援は確認できますが、家賃補助制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>江戸川区公式サイトで結婚パスポートや出会い・結婚支援を確認しましたが、新婚世帯向け家賃補助制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>関連制度は施設優遇券等であり、家賃補助ではありません。候補名の助成金としては公式確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>江戸川区の結婚支援は、出会い・結婚支援ページと結婚パスポートの最新情報を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e093/kosodate/deaikekkon/kekkon_passport.html',
    sourceName: '江戸川区 結婚パスポート',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e093/kosodate/deaikekkon/kekkon_passport.html',
      'https://www.city.edogawa.tokyo.jp/kosodate/deaikekkon/index.html'
    ],
    sourceNote: '江戸川区公式で結婚パスポートと出会い・結婚支援を確認したが、家賃補助制度は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-education-scholarship',
    title: '千代田区 教育資金の融資あっせん',
    organization: '千代田区',
    type: 'local',
    maxAmount: '融資上限400万円',
    maxAmountNum: 400,
    category: 'education',
    prefecture: '東京都',
    tags: ['千代田区', '教育資金', '融資あっせん'],
    eligibility: '千代田区民で、学校等の入学金・授業料等の教育資金を必要とし、金融機関の審査等を満たす方が対象です。',
    applicationPeriod: '通年。融資前に申請・審査が必要',
    description: '旧候補名の「育英資金貸付制度」は現行区独自制度として確認できなかったため、公式に確認できる教育資金の融資あっせんとして内容を修正しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>教育資金を必要とする区民に対し、千代田区が金融機関の融資をあっせんする制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>融資限度額は400万円です。別ページで教育ローン利子補給も案内されています。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>給付型奨学金ではなく融資あっせんです。金融機関の審査、利子補給の条件、返済条件を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/kosodate/teate/kyoikushikin-yushiassen.html',
    sourceName: '千代田区 教育資金の融資あっせん',
    sourceUrls: [
      'https://www.city.chiyoda.lg.jp/koho/kosodate/teate/kyoikushikin-yushiassen.html',
      'https://www.city.chiyoda.lg.jp/koho/kosodate/teate/kyoikuloan-hojo.html',
      'https://www.city.chiyoda.lg.jp/koho/kosodate/teate/shogakukin.html'
    ],
    sourceNote: '千代田区公式ページで教育資金の融資あっせん、融資限度額400万円、利子補給関連ページを確認。候補名の育英資金貸付制度は現行制度として確認できないため公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'musashino-scholarship',
    title: '武蔵野市 高等学校等修学給付金（令和7年度受付終了）',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '5万円',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '東京都',
    tags: ['武蔵野市', '修学給付金', '受付終了'],
    eligibility: '武蔵野市の高等学校等に通う生徒がいる世帯を対象とする給付金です。令和7年度案内では所得等の要件があります。',
    applicationPeriod: '令和7年度申請は2025年9月15日で終了。令和8年度募集は未確認',
    deadlineDate: '2025-09-15',
    description: '武蔵野市公式ページで確認できる高等学校等修学給付金は令和7年度案内で、申請期限は2025年9月15日でした。令和8年度募集を確認できないため通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高等学校等に通う生徒の修学を支援する給付金です。令和7年度案内では5万円の支給が確認できます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和7年度の申請期限は2025年9月15日で終了しています。令和8年度の同一募集は確認できませんでした。</p>'
      },
      {
        heading: '次に確認すること',
        content: '<p>次年度募集が出た場合は、武蔵野市の子育て・教育関連の最新ページで受付期間を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/shussan_kodomo_kyoiku/kodomo_kosodate/teate_josei/kokosei/1016667.html',
    sourceName: '武蔵野市 高等学校等修学給付金',
    sourceUrls: [
      'https://www.city.musashino.lg.jp/shussan_kodomo_kyoiku/kodomo_kosodate/teate_josei/kokosei/1016667.html',
      'https://www.city.musashino.lg.jp/_res/projects/default_project/_page_/001/016/667/71annnai.pdf'
    ],
    sourceNote: '武蔵野市公式ページと令和7年度案内で高等学校等修学給付金、5万円、申請期限2025年9月15日を確認。令和8年度募集未確認のため期限切れ扱い。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chuo-scholarship',
    title: '中央区 奨学資金制度（公式助成確認不可）',
    organization: '中央区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['中央区', '奨学金', '公式確認不可'],
    eligibility: '旧候補名の奨学資金制度について、中央区公式サイトで区独自の現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '中央区公式ページでは教育費に関する助成・貸付等の案内を確認できますが、区独自の奨学資金制度として申請できる制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>中央区公式の教育費に関する助成・貸付等ページを確認しましたが、候補名の区独自奨学資金制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>都制度、国制度、JASSO等への案内はありますが、候補名の助成・貸付制度として確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>教育費支援は、中央区公式の教育費関連案内、東京都、国、日本学生支援機構の制度を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/a0019/kenkouiryou/fukushiippan/seikatsushien/kyouikuhijoseikashitsuke.html',
    sourceName: '中央区 教育費に関する助成・貸付等',
    sourceUrls: ['https://www.city.chuo.lg.jp/a0019/kenkouiryou/fukushiippan/seikatsushien/kyouikuhijoseikashitsuke.html'],
    sourceNote: '中央区公式ページで教育費に関する助成・貸付等を確認したが、区独自の奨学資金制度は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sumida-small-business-support',
    title: '墨田区 工作機器等導入支援（令和7年度受付終了）',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大400万円',
    maxAmountNum: 400,
    category: 'employment',
    prefecture: '東京都',
    tags: ['墨田区', '設備投資', '受付終了'],
    eligibility: '墨田区内の中小企業者等が工作機器等を導入する場合の補助制度です。令和7年度分は受付終了しています。',
    targetOccupation: '中小企業者・個人事業主',
    applicationPeriod: '令和7年度申請は2025年12月26日で終了。令和8年度募集は未確認',
    deadlineDate: '2025-12-26',
    description: '墨田区の工作機器等導入支援は、令和7年度分の申請期限が2025年12月26日で終了しています。令和8年度の同一募集を確認できないため通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>墨田区内中小企業者等の生産性向上を目的に、工作機器等の導入を支援する補助金です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>令和7年度の公式ページで最大400万円の補助を確認できます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和7年度の申請期限は2025年12月26日で終了しています。令和8年度の同一募集は公式ページで確認できませんでした。</p>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/sangyo_jigyosya/sangyo/hojokin_joseikin/kikidonyu.html',
    sourceName: '墨田区 工作機器等導入支援',
    sourceUrls: [
      'https://www.city.sumida.lg.jp/sangyo_jigyosya/sangyo/hojokin_joseikin/kikidonyu.html',
      'https://www.city.sumida.lg.jp/sangyo_jigyosya/sangyo/hojokin_joseikin/index.html'
    ],
    sourceNote: '墨田区公式ページで工作機器等導入支援、最大400万円、令和7年度申請期限2025年12月26日を確認。令和8年度募集未確認のため期限切れ扱い。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-startup-support',
    title: '足立区 創業プランコンテスト（令和8年度受付終了）',
    organization: '足立区',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '東京都',
    tags: ['足立区', '創業支援', '受付終了'],
    eligibility: '足立区内で創業予定または創業間もない方等を対象とする創業プランコンテストです。令和8年度の応募受付は終了しています。',
    targetOccupation: '創業予定者・創業初期事業者',
    applicationPeriod: '令和8年度応募受付は2026年6月5日で終了',
    deadlineDate: '2026-06-05',
    description: '足立区の創業プランコンテストは、創業プランの表彰・支援制度です。令和8年度応募受付は2026年6月5日で終了しているため通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>創業予定者等の事業計画を募集し、優れたプランを表彰・支援する足立区の創業支援制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>令和8年度募集要項で最大200万円の支援を確認できます。表彰・審査は残りますが、応募受付は終了しています。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度の応募受付は2026年6月5日で終了しています。次回募集は足立区公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/chusho/shigoto/chushokigyo/28sogyoplan.html',
    sourceName: '足立区 創業プランコンテスト',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/chusho/shigoto/chushokigyo/28sogyoplan.html',
      'https://www.city.adachi.tokyo.jp/documents/28184/r8yoko.docx'
    ],
    sourceNote: '足立区公式ページと令和8年度募集要項で創業プランコンテスト、最大200万円、応募受付2026年6月5日終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hachioji-startup-support',
    title: '八王子市 創業者販路拡大支援補助金（令和8年度）',
    organization: '八王子市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '東京都',
    tags: ['八王子市', '創業支援', '販路拡大'],
    eligibility: '八王子市内の創業者等が、販路拡大に取り組む場合に対象です。創業時期、所在地、対象経費などの要件があります。',
    targetOccupation: '創業者・中小企業者',
    applicationPeriod: '2027年1月31日まで。予算到達で終了する場合あり',
    deadlineDate: '2027-01-31',
    description: '八王子市が、創業者の販路拡大にかかる経費を支援する補助金です。令和8年度は最大10万円、2027年1月31日までの申請受付が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市内創業者が販路開拓・販売促進に取り組む際の経費を支援する補助金です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>公式ページで補助上限10万円を確認できます。対象経費や補助率は申請前に確認してください。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>令和8年度の申請期限は2027年1月31日です。予算終了次第、期限前に受付終了となる場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/kurashi/sangyo/001/p035372.html',
    sourceName: '八王子市 創業者販路拡大支援補助金',
    sourceUrls: [
      'https://www.city.hachioji.tokyo.jp/kurashi/sangyo/001/p035372.html',
      'https://www.city.hachioji.tokyo.jp/kurashi/sangyo/002/002/005/index.html'
    ],
    sourceNote: '八王子市公式ページで令和8年度創業者販路拡大支援補助金、上限10万円、申請期限2027年1月31日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'machida-housing-earthquake',
    title: '町田市 木造住宅耐震化助成制度',
    organization: '町田市',
    type: 'local',
    maxAmount: '耐震改修 最大242.4万円',
    maxAmountNum: 242,
    category: 'housing',
    prefecture: '東京都',
    tags: ['町田市', '耐震改修', '木造住宅'],
    eligibility: '町田市内の対象木造住宅の所有者が対象です。建築時期、耐震診断結果、世帯要件などにより助成上限が異なります。',
    applicationPeriod: '交付申請期限は2026年12月11日まで',
    deadlineDate: '2026-12-11',
    description: '町田市が木造住宅の耐震診断、耐震設計、耐震改修を支援する制度です。耐震改修は一般世帯最大120万円、障がい者等世帯最大242.4万円が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旧耐震基準の木造住宅の安全性を高めるため、町田市が耐震化に関する診断・設計・改修を支援しています。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>耐震改修工事では、一般世帯最大120万円、障がい者等世帯最大242.4万円の助成が確認できます。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>令和8年度の交付申請期限は2026年12月11日です。申請前に対象住宅と工事内容を市へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/kurashi/sumai/house/earthquake-resistant/wooden/outline.html',
    sourceName: '町田市 木造住宅耐震化助成制度',
    sourceUrls: [
      'https://www.city.machida.tokyo.jp/kurashi/sumai/house/earthquake-resistant/wooden/outline.html',
      'https://www.city.machida.tokyo.jp/kurashi/sumai/house/earthquake-resistant/wooden/project.html',
      'https://www.city.machida.tokyo.jp/kurashi/sumai/house/earthquake-resistant/wooden/construction.html'
    ],
    sourceNote: '町田市公式ページで木造住宅耐震化助成制度、耐震設計改修事業、一般世帯120万円、障がい者等世帯242.4万円、交付申請期限2026年12月11日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tachikawa-startup-support',
    title: '立川市 創業資金（融資あっせん）',
    organization: '立川市',
    type: 'local',
    maxAmount: '融資限度額 最大2,000万円',
    maxAmountNum: 2000,
    category: 'employment',
    prefecture: '東京都',
    tags: ['立川市', '創業支援', '融資'],
    eligibility: '立川市内で創業する方、または創業後間もない中小企業者等が対象です。融資あっせん、利子補給、保証料補助等の条件を満たす必要があります。',
    targetOccupation: '創業予定者・創業初期事業者',
    applicationPeriod: '通年。金融機関・信用保証協会の審査あり',
    description: '旧候補名の「創業支援補助金」として直接補助金は確認できませんでしたが、立川市公式で創業資金の融資あっせんを確認しました。融資限度額は最大2,000万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>立川市が創業者向けに金融機関の融資をあっせんし、創業時の資金調達を支援する制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>創業資金の融資限度額は最大2,000万円です。利子補給や信用保証料補助の対象となる場合があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>直接給付の補助金ではなく融資制度です。金融機関・信用保証協会の審査、返済条件、利子補給条件を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/sangyo/shokogyo/1003810/1003840.html',
    sourceName: '立川市 創業資金',
    sourceUrls: [
      'https://www.city.tachikawa.lg.jp/sangyo/shokogyo/1003810/1003840.html',
      'https://www.city.tachikawa.lg.jp/sangyo/shokogyo/1003810/index.html',
      'https://www.city.tachikawa.lg.jp/sangyo/shokogyo/1003810/1022195.html'
    ],
    sourceNote: '立川市公式ページで創業資金、融資限度額2,000万円、創業支援・特定創業支援等事業を確認。直接補助金ではないため公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fuchu-startup-support',
    title: '府中市 融資あっ旋制度（創業資金）',
    organization: '府中市',
    type: 'local',
    maxAmount: '融資限度額 最大1,000万円',
    maxAmountNum: 1000,
    category: 'employment',
    prefecture: '東京都',
    tags: ['府中市', '創業支援', '融資'],
    eligibility: '府中市内で創業する方、または創業後間もない中小企業者等が対象です。融資あっ旋、利子補助、信用保証料補助などの条件を満たす必要があります。',
    targetOccupation: '創業予定者・創業初期事業者',
    applicationPeriod: '通年。金融機関・信用保証協会の審査あり',
    description: '旧候補名の「創業支援補助金」ではなく、府中市公式で確認できる創業資金の融資あっ旋制度として掲載します。融資限度額は最大1,000万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>府中市が市内中小企業者や創業者の資金調達を支援するため、金融機関への融資あっ旋を行う制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>創業資金の融資限度額は最大1,000万円です。利子補助や信用保証料補助の対象となる場合があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>直接給付の補助金ではなく融資制度です。返済条件、利率、信用保証協会の審査、創業支援メニューとの関係を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.fuchu.tokyo.jp/jigyosha/keesha/kigyo/tyushokigyoshienn/chusho.html',
    sourceName: '府中市 融資あっ旋制度',
    sourceUrls: [
      'https://www.city.fuchu.tokyo.jp/jigyosha/keesha/kigyo/tyushokigyoshienn/chusho.html',
      'https://www.city.fuchu.tokyo.jp/jigyosha/keesha/kigyo/sougyousien.html'
    ],
    sourceNote: '府中市公式ページで融資あっ旋制度、創業資金、融資限度額1,000万円、創業支援情報を確認。候補名の直接補助金ではなく融資制度として修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-migration-bonus',
    title: '千代田区 次世代育成住宅助成（親元近居・区内転居）',
    organization: '千代田区',
    type: 'local',
    maxAmount: '月額最大8万円＋初回転居費用10万円',
    maxAmountNum: 778,
    category: 'living',
    prefecture: '東京都',
    tags: ['千代田区', '定住支援', '住宅助成'],
    eligibility: '千代田区内で親元近居や区内転居を行う新婚世帯・子育て世帯等が対象です。世帯構成、所得、住戸面積、契約時期などの要件があります。',
    applicationPeriod: '通年。契約前の仮申請など手続時期に要件あり',
    description: '旧候補名の「定住促進支援事業」として独立した制度は確認できなかったため、公式に確認できる次世代育成住宅助成として内容を修正しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新婚世帯・子育て世帯等の区内定住を支援するため、住み替え後の住宅費や転居費用を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>月額助成は最大8万円、初回転居費用は最大10万円です。世帯区分や居住形態により金額と助成期間が異なります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>契約前の仮申請など、手続きのタイミングに要件があります。住み替え前に必ず公式ページで対象区分を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/machizukuri/sumai/jose/jisedai.html',
    sourceName: '千代田区 次世代育成住宅助成',
    sourceUrls: ['https://www.city.chiyoda.lg.jp/koho/machizukuri/sumai/jose/jisedai.html'],
    sourceNote: '千代田区公式ページで次世代育成住宅助成、月額最大8万円、初回転居費用10万円、親元近居・区内転居の対象を確認。候補名の定住促進支援事業は公式名ではないため修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chuo-women-startup',
    title: '中央区 女性起業家支援補助金（公式助成確認不可）',
    organization: '中央区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '東京都',
    tags: ['中央区', '女性起業', '公式確認不可'],
    eligibility: '旧候補名の女性起業家支援補助金について、中央区公式サイトで現行の補助金として確認できませんでした。',
    targetOccupation: '創業予定者・起業家',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '中央区公式では創業支援等事業や起業家塾を確認できますが、女性起業家向けの補助金は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>中央区公式サイトで創業支援等事業と起業家塾を確認しましたが、候補名どおりの女性起業家支援補助金は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>補助額、対象経費、申請期限を公式情報で確認できないため、申請可能な補助金として通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>中央区の創業支援は、創業支援等事業や起業家塾の最新案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/a0016/shigoto/kigyoushien/sougyousienjigyou.html',
    sourceName: '中央区 創業支援等事業',
    sourceUrls: [
      'https://www.city.chuo.lg.jp/a0016/shigoto/kigyoushien/sougyousienjigyou.html',
      'https://www.city.chuo.lg.jp/a0016/shigoto/kigyoushien/koushuu/kigyoukazyuku.html'
    ],
    sourceNote: '中央区公式で創業支援等事業と起業家塾を確認したが、女性起業家向け補助金は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'minato-study-abroad',
    title: '港区 海外留学支援奨学金（公式助成確認不可）',
    organization: '港区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['港区', '海外留学', '公式確認不可'],
    eligibility: '旧候補名の海外留学支援奨学金について、港区公式サイトで現行の奨学金制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '港区公式では海外留学支援事業、海外学校体験事業、奨学金情報を確認できますが、海外留学専用の奨学金制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>港区公式サイトで海外留学支援事業や関連イベントを確認しましたが、候補名どおりの海外留学支援奨学金は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>相談・イベント・体験プログラムは確認できますが、給付または貸付の奨学金としての制度要件を確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>港区の留学・国際交流支援は、海外留学支援事業や教育委員会の最新案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/kyouikushomu/kaigairyuugakusiennzigyou.html',
    sourceName: '港区 海外留学支援事業',
    sourceUrls: [
      'https://www.city.minato.tokyo.jp/kyouikushomu/kaigairyuugakusiennzigyou.html',
      'https://www.city.minato.tokyo.jp/gakkouuneishien/kodomo/gakko/syougaku/',
      'https://www.city.minato.tokyo.jp/kyouikushomu/kaigaigakkoutaikennzigixyou/kaigaigakkoutaikennzixyugixyouibenntobann.html'
    ],
    sourceNote: '港区公式で海外留学支援事業、奨学金情報、海外学校体験事業を確認したが、海外留学専用奨学金は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'bunkyo-housing-purchase',
    title: '文京区 ファミリー世帯住宅取得支援制度（公式助成確認不可）',
    organization: '文京区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['文京区', '住宅取得', '公式確認不可'],
    eligibility: '旧候補名のファミリー世帯住宅取得支援制度について、文京区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '文京区公式で近似する住み替え・保証料助成等は確認できますが、ファミリー世帯向け住宅取得助成は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>文京区公式の住宅支援情報を確認しましたが、候補名どおりのファミリー世帯住宅取得支援制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>住宅取得費用の助成として公式に確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>文京区の住宅支援は、賃貸住宅の住み替え支援や住宅施策の最新ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/b016/p000767.html',
    sourceName: '文京区 住宅支援情報',
    sourceUrls: ['https://www.city.bunkyo.lg.jp/b016/p000767.html'],
    sourceNote: '文京区公式で近似する住宅支援を確認したが、住宅取得支援制度は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-housing-purchase',
    title: '台東区 子育て世帯住宅リフォーム支援制度',
    organization: '台東区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['台東区', '子育て世帯', 'リフォーム'],
    eligibility: '台東区内の住宅で、子育て世帯が対象工事を行う場合に対象です。住宅取得支援ではなく、住宅リフォーム支援として確認しました。',
    applicationPeriod: '通年。工事前申請が必要',
    description: '旧候補名の住宅取得支援ではなく、台東区公式で確認できる子育て世帯住宅リフォーム支援制度として内容を修正しています。対象工事費の3分の1、上限20万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子育て世帯が区内住宅で行うリフォーム工事について、費用の一部を支援する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>対象工事費の3分の1、上限20万円が助成されます。対象工事や世帯要件を公式ページで確認してください。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>住宅取得費用そのものの助成ではありません。工事前に申請し、交付決定後に着手する必要があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kenchiku/jutaku/sumai/yachinhojo/kosodatereform.html',
    sourceName: '台東区 子育て世帯住宅リフォーム支援制度',
    sourceUrls: ['https://www.city.taito.lg.jp/kenchiku/jutaku/sumai/yachinhojo/kosodatereform.html'],
    sourceNote: '台東区公式ページで子育て世帯住宅リフォーム支援制度、対象工事費3分の1、上限20万円を確認。候補名の住宅取得支援から公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sumida-housing-purchase',
    title: '墨田区 すみだ住宅取得利子補助制度',
    organization: '墨田区',
    type: 'local',
    maxAmount: '最大50万円（年10万円×5年）',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['墨田区', '住宅取得', '利子補助'],
    eligibility: '墨田区内で住宅を取得し、住宅ローンを利用する世帯が対象です。子育て世帯等の要件、住宅取得日からの申請期限などがあります。',
    applicationPeriod: '住宅取得日から1年以内',
    description: '墨田区が、住宅取得に伴う住宅ローン利子の一部を補助する制度です。年10万円を上限に5年間、最大50万円の補助が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内で住宅を取得した世帯の住宅ローン利子負担を軽減するための補助制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>住宅ローン利子について、年10万円を上限に5年間補助されます。最大補助額は50万円です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>申請期限は住宅取得日から1年以内です。対象住宅、世帯要件、住宅ローンの条件を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/kurashi/zyuutaku/jyutaku_shien/juutaku_housingloan.html',
    sourceName: '墨田区 すみだ住宅取得利子補助制度',
    sourceUrls: [
      'https://www.city.sumida.lg.jp/kurashi/zyuutaku/jyutaku_shien/juutaku_housingloan.html',
      'https://www.city.sumida.lg.jp/kurashi/zyuutaku/jyutaku_shien/juutaku_housingloan.files/tirasi_s.pdf'
    ],
    sourceNote: '墨田区公式ページで住宅取得利子補助、年10万円上限、5年間、住宅取得日から1年以内の申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koto-housing-purchase',
    title: '江東区 子育て世帯住宅取得支援制度（公式助成確認不可）',
    organization: '江東区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江東区', '住宅取得', '公式確認不可'],
    eligibility: '旧候補名の子育て世帯住宅取得支援制度について、江東区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '江東区公式で住宅取得に近いZEH等助成は確認できますが、子育て世帯向け住宅取得支援制度としては確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>江東区公式サイトでZEH等の住宅関連助成を確認しましたが、候補名どおりの子育て世帯住宅取得支援制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>住宅取得費用を支援する制度として公式に確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>江東区の住宅関連支援は、ZEH・省エネ設備・住宅改修などの最新制度を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/380201/machizukuri/kankyo/sedo/zeh_zeroemi.html',
    sourceName: '江東区 住宅関連助成',
    sourceUrls: ['https://www.city.koto.lg.jp/380201/machizukuri/kankyo/sedo/zeh_zeroemi.html'],
    sourceNote: '江東区公式でZEH等助成を確認したが、子育て世帯住宅取得支援制度は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinagawa-housing-purchase',
    title: '品川区 子育てファミリー世帯への転居費用助成',
    organization: '品川区',
    type: 'local',
    maxAmount: '最大32万円（住宅購入30万円＋多子加算2万円）',
    maxAmountNum: 32,
    category: 'housing',
    prefecture: '東京都',
    tags: ['品川区', '子育て世帯', '転居費用'],
    eligibility: '品川区の子育てファミリー世帯が、住宅購入・建築・賃貸への転居を行う場合に対象です。令和8年度予算資料で制度内容を確認しました。',
    applicationPeriod: '令和8年7月受付開始予定',
    description: '品川区が、子育てファミリー世帯の住宅購入・建築・賃貸への転居費用を支援する制度です。住宅購入は30万円、多子加算2万円が確認できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子育てファミリー世帯が区内で住まいを確保しやすくするため、転居費用等を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>令和8年度予算資料で、住宅購入・建築・賃貸への転居費用助成として、住宅購入30万円、多子加算2万円を確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>申請受付は令和8年7月予定とされています。正式な募集開始後に対象要件と必要書類を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/contentshozon2025/20260122093053_2.pdf',
    sourceName: '品川区 令和8年度予算資料',
    sourceUrls: ['https://www.city.shinagawa.tokyo.jp/contentshozon2025/20260122093053_2.pdf'],
    sourceNote: '品川区公式の令和8年度予算資料で、子育てファミリー世帯への転居費用助成、住宅購入30万円、多子加算2万円、令和8年7月受付開始予定を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'meguro-housing-purchase',
    title: '目黒区 子育て世帯住宅取得支援制度（公式助成確認不可）',
    organization: '目黒区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['目黒区', '住宅取得', '公式確認不可'],
    eligibility: '旧候補名の子育て世帯住宅取得支援制度について、目黒区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '目黒区公式ではファミリー世帯家賃助成は確認できますが、子育て世帯向け住宅取得支援制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>目黒区公式サイトで住まいの支援とファミリー世帯家賃助成を確認しましたが、住宅取得支援制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>住宅取得費用の助成として公式に確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>目黒区の子育て世帯向け住宅支援は、家賃助成など現行制度の最新ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/kurashi/sumai/shien/index.html',
    sourceName: '目黒区 住まいの支援',
    sourceUrls: [
      'https://www.city.meguro.tokyo.jp/kurashi/sumai/shien/index.html',
      'https://www.city.meguro.tokyo.jp/juutaku/kurashi/sumai/family.html'
    ],
    sourceNote: '目黒区公式で住まいの支援とファミリー世帯家賃助成を確認したが、子育て世帯住宅取得支援制度は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-housing-purchase',
    title: '大田区 住宅リフォーム助成事業',
    organization: '大田区',
    type: 'local',
    maxAmount: '子育て世帯向け 最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['大田区', '住宅リフォーム', '子育て世帯'],
    eligibility: '大田区内の住宅で対象リフォーム工事を行う方が対象です。工事区分、世帯要件、施工業者、工事前申請などの条件があります。',
    applicationPeriod: '2027年1月29日まで。予算到達で終了する場合あり',
    deadlineDate: '2027-01-29',
    description: '旧候補名の住宅取得支援ではなく、大田区公式で確認できる住宅リフォーム助成事業として内容を修正しています。子育て世帯向けは最大20万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区民の住環境改善を支援するため、大田区が住宅リフォーム工事費の一部を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>子育て世帯向けの対象工事では最大20万円が確認できます。工事区分により助成率・上限額が異なります。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>令和8年度の申請期限は2027年1月29日です。工事前申請が必要で、予算到達時は期限前に終了します。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/sumai/r_josei/jyutaku_reform_jyosei.html',
    sourceName: '大田区 住宅リフォーム助成事業',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/sumai/r_josei/jyutaku_reform_jyosei.html',
      'https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/sumai/r_josei/jyutaku_reform_jyosei.files/R8_panfu.pdf'
    ],
    sourceNote: '大田区公式ページと令和8年度パンフレットで住宅リフォーム助成事業、子育て世帯向け最大20万円、申請期限2027年1月29日を確認。住宅取得支援から公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-sme-support',
    title: '大田区 マル経融資利子補給制度',
    organization: '大田区',
    type: 'local',
    maxAmount: '支払利子の40%相当（36か月）',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '東京都',
    tags: ['大田区', '中小企業', '利子補給'],
    eligibility: '大田区内の小規模事業者で、商工会議所等の推薦を受けた小規模事業者経営改善資金（マル経融資）を利用する方が対象です。',
    targetOccupation: '小規模事業者・個人事業主',
    applicationPeriod: '通年。融資実行後の手続き条件あり',
    description: '旧候補名の中小企業経営改善助成金ではなく、大田区公式で確認できるマル経融資の利子補給制度として内容を修正しています。支払利子の40%相当を36か月補給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小規模事業者経営改善資金（マル経融資）を利用した区内事業者に対し、大田区が利子の一部を補給する制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>支払利子の40%相当が36か月補給されます。融資制度の利用条件や利子補給の手続きは公式ページで確認します。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>直接給付の補助金ではなく、融資利用に伴う利子補給です。マル経融資の推薦・審査・返済条件を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/sangyo/yushi/marukei.html',
    sourceName: '大田区 小規模事業者経営改善資金（マル経融資）利子補給制度',
    sourceUrls: ['https://www.city.ota.tokyo.jp/sangyo/yushi/marukei.html'],
    sourceNote: '大田区公式ページでマル経融資利子補給、支払利子40%相当、36か月を確認。候補名の経営改善助成金から公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shibuya-women-startup',
    title: '渋谷区 女性創業支援助成金（公式助成確認不可）',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '東京都',
    tags: ['渋谷区', '女性起業', '公式確認不可'],
    eligibility: '旧候補名の女性創業支援助成金について、渋谷区公式サイトで現行の助成金として確認できませんでした。',
    targetOccupation: '女性起業家・創業予定者',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '渋谷区公式では女性起業家育成プログラム「HerRise」などを確認できますが、女性創業支援助成金は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>渋谷区公式サイトで女性起業家育成プログラムや関連イベントを確認しましたが、候補名どおりの女性創業支援助成金は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>育成プログラム・イベントは確認できますが、補助額や申請要件を持つ助成金として確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>渋谷区の起業支援は、起業家支援プログラムとイベントの最新案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/jigyosha/shoko-rodo-sodan/startup/entrepreneurship_program.html',
    sourceName: '渋谷区 起業家支援プログラム',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/jigyosha/shoko-rodo-sodan/startup/entrepreneurship_program.html',
      'https://www.city.shibuya.tokyo.jp/contents/event/detail/event_herrise2025.html'
    ],
    sourceNote: '渋谷区公式で女性起業家育成プログラムHerRiseと関連イベントを確認したが、女性創業助成金は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toshima-women-startup',
    title: '豊島区 開業支援コース',
    organization: '豊島区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['豊島区', '創業支援', '開業支援'],
    eligibility: '豊島区内で開業する方、または開業後間もない事業者等が対象です。女性限定の補助金名ではなく、公式制度は開業支援コースです。',
    targetOccupation: '創業予定者・創業初期事業者',
    applicationPeriod: '交付申請は2027年1月22日まで',
    deadlineDate: '2027-01-22',
    description: '旧候補名の女性活躍推進創業支援助成金ではなく、豊島区公式で確認できる開業支援コースとして内容を修正しています。補助上限は20万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区内で開業する事業者の初期費用等を支援する補助制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>開業支援コースの補助上限は20万円です。女性起業支援は別途サクラーヌbizなどの支援情報があります。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>交付申請期限は2027年1月22日です。対象経費や開業時期の要件を確認してから申請してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/584/machizukuri/sangyo/kigyo/019176.html',
    sourceName: '豊島区 開業支援コース',
    sourceUrls: [
      'https://www.city.toshima.lg.jp/584/machizukuri/sangyo/kigyo/019176.html',
      'https://www.city.toshima.lg.jp/584/machizukuri/sangyo/kigyo/000589.html',
      'https://www.city.toshima.lg.jp/suzuran/toshima_shien/index.html'
    ],
    sourceNote: '豊島区公式ページで開業支援コース、上限20万円、交付申請期限2027年1月22日を確認。女性限定の補助金名ではなく公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kita-housing-purchase',
    title: '北区 親子住まいる応援事業',
    organization: '北区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['北区', '親元近居', '住宅取得'],
    eligibility: '北区内で親子の近居・同居を目的に住宅を取得・転居する世帯が対象です。登記前申請、登記後6か月以内などの手続要件があります。',
    applicationPeriod: '通年。登記前申請・登記後6か月以内など相対期限あり',
    description: '旧候補名の親元近居・同居住宅取得助成制度から、北区公式の現行制度名「親子住まいる応援事業」に修正しています。助成上限は20万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>親世帯と子世帯の近居・同居を促進するため、住宅取得や転居に関する費用を支援する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>公式ページで最大20万円の助成を確認できます。対象となる世帯、住宅、申請時期に要件があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>登記前申請や登記後6か月以内など、相対期限があります。手続き前に北区へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.kita.lg.jp/living/housing/1009223/1009225.html',
    sourceName: '北区 親子住まいる応援事業',
    sourceUrls: ['https://www.city.kita.lg.jp/living/housing/1009223/1009225.html'],
    sourceNote: '北区公式ページで親子住まいる応援事業、最大20万円、登記前申請・登記後6か月以内などの手続要件を確認。404だった補足PDFは出典から除外。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kita-sme-support',
    title: '北区 IT・IoT導入チャレンジ支援事業',
    organization: '北区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '東京都',
    tags: ['北区', '中小企業', 'IT導入'],
    eligibility: '北区内中小企業者が、IT・IoT導入により生産性向上や業務改善に取り組む場合に対象です。設備単体や開業資金等は対象外です。',
    targetOccupation: '中小企業者・個人事業主',
    applicationPeriod: '2027年2月26日まで。予算到達で終了する場合あり',
    deadlineDate: '2027-02-26',
    description: '旧候補名の中小企業設備投資助成金ではなく、北区公式で確認できるIT・IoT導入チャレンジ支援事業として内容を修正しています。補助上限は100万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内中小企業のIT・IoT導入を支援し、生産性向上や業務効率化を促す補助事業です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>補助上限は100万円です。設備単体や開業資金ではなく、IT・IoT導入に関する対象経費が補助対象です。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>令和8年度の申請期限は2027年2月26日です。予算に達した場合は期限前に終了する場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.kita.lg.jp/business/industry/1011356/1011509/1011519.html',
    sourceName: '北区 IT・IoT導入チャレンジ支援事業',
    sourceUrls: [
      'https://www.city.kita.lg.jp/business/industry/1011356/1011509/1011519.html',
      'https://www.city.kita.lg.jp/_res/projects/default_project/_page_/001/011/519/r8_boshuuyoukou_iot.pdf'
    ],
    sourceNote: '北区公式ページと募集要項でIT・IoT導入チャレンジ支援事業、上限100万円、申請期限2027年2月26日、設備単体等は対象外であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'itabashi-housing-purchase',
    title: '板橋区 多世代住み替え支援事業',
    organization: '板橋区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['板橋区', '多世代近居', '住み替え'],
    eligibility: '板橋区内で多世代近居・同居を目的に住み替える世帯が対象です。対象世帯、転居先、補助対象経費などの要件があります。',
    applicationPeriod: '通年。予算到達で終了する場合あり',
    description: '旧候補名の住宅取得助成ではなく、板橋区公式で確認できる多世代住み替え支援事業として内容を修正しています。補助上限は20万円です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>親世帯・子世帯など多世代の近居・同居を促すため、住み替え費用の一部を支援する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>公式ページとチラシで最大20万円の補助を確認できます。住宅取得額そのものではなく、住み替え費用を対象とする制度です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>予算上限に達した場合は受付終了となります。転居前後の要件と対象経費を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/tetsuduki/sumai/soudan/1062629.html',
    sourceName: '板橋区 多世代住み替え支援事業',
    sourceUrls: [
      'https://www.city.itabashi.tokyo.jp/tetsuduki/sumai/soudan/1062629.html',
      'https://www.city.itabashi.tokyo.jp/tetsuduki/sumai/seido/1002100.html',
      'https://www.city.itabashi.tokyo.jp/_res/projects/default_project/_page_/001/062/629/chirashi0417.pdf'
    ],
    sourceNote: '板橋区公式ページ、近居支援一覧、公式チラシで多世代住み替え支援事業、最大20万円、予算到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nerima-scholarship',
    title: '練馬区 ひとり親家庭高等職業訓練促進資金貸付',
    organization: '練馬区',
    type: 'local',
    maxAmount: '入学準備金50万円以内、就職準備金20万円以内',
    maxAmountNum: 50,
    category: 'education',
    prefecture: '東京都',
    tags: ['練馬区', 'ひとり親', '貸付'],
    eligibility: '練馬区のひとり親家庭で、高等職業訓練促進給付金の対象となる資格取得等を目指す方が対象です。貸付であり、条件により返還免除となる場合があります。',
    applicationPeriod: '通年。訓練・給付金の申請時期により手続き',
    description: '旧候補名の入学準備金貸付制度から、練馬区公式で確認できるひとり親家庭高等職業訓練促進資金貸付として内容を修正しています。入学準備金は50万円以内です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ひとり親家庭の資格取得と就業を支援するため、高等職業訓練に関する準備金を貸し付ける制度です。</p>'
      },
      {
        heading: '貸付内容',
        content: '<p>入学準備金は50万円以内、就職準備金は20万円以内です。一定の就業継続などにより返還免除となる場合があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>助成金ではなく貸付制度です。高等職業訓練促進給付金との関係、返還免除条件、申請時期を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/kurashi/jinken/hitorioya/kateikotogino.html',
    sourceName: '練馬区 ひとり親家庭高等職業訓練促進資金貸付',
    sourceUrls: ['https://www.city.nerima.tokyo.jp/kurashi/jinken/hitorioya/kateikotogino.html'],
    sourceNote: '練馬区公式ページでひとり親家庭高等職業訓練促進資金貸付、入学準備金50万円以内、就職準備金20万円以内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'edogawa-housing-purchase',
    title: '江戸川区 住宅取得支援助成金（公式助成確認不可）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江戸川区', '住宅取得', '公式確認不可'],
    eligibility: '旧候補名の住宅取得支援助成金について、江戸川区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '江戸川区公式で住宅リフォーム資金融資あっせん制度は確認できますが、住宅取得支援助成金は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>江戸川区公式サイトで住宅リフォーム資金融資あっせん制度と住まいガイドを確認しましたが、住宅取得支援助成金は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>公式に確認できたのはリフォーム融資あっせんであり、住宅取得費用の助成ではないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>江戸川区の住まい関連支援は、住まいガイドと住宅リフォーム資金融資あっせん制度を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e039/kurashi/sumai/sumaiguide/jyutakurifomusikinyusi.html',
    sourceName: '江戸川区 住宅リフォーム資金融資あっせん制度',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e039/kurashi/sumai/sumaiguide/jyutakurifomusikinyusi.html',
      'https://www.city.edogawa.tokyo.jp/kurashi/sumai/sumaiguide/index.html'
    ],
    sourceNote: '江戸川区公式で住宅リフォーム資金融資あっせん制度と住まいガイドを確認したが、住宅取得支援助成金は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'machida-startup-support',
    title: '町田市 新商品・新サービス開発事業補助金（令和8年度受付終了）',
    organization: '町田市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '東京都',
    tags: ['町田市', '新商品開発', '受付終了'],
    eligibility: '町田市内の事業者が新商品・新サービス開発に取り組む場合の補助金です。令和8年度募集は受付終了しています。',
    targetOccupation: '中小企業者・個人事業主',
    applicationPeriod: '令和8年度募集は2026年5月15日で終了',
    deadlineDate: '2026-05-15',
    description: '旧候補名の創業支援補助金として市単独制度は確認できず、近い市補助として新商品・新サービス開発事業補助金を確認しました。令和8年度募集は2026年5月15日で終了しているため通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市内事業者の新商品・新サービス開発を支援する補助金です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>公式ページで補助上限200万円を確認できます。創業支援そのものではなく、新商品・新サービス開発支援です。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度募集は2026年5月15日で終了しています。次回募集は町田市公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/jigyousha/shien/yushi/jisshoujikken.html',
    sourceName: '町田市 新商品・新サービス開発事業補助金',
    sourceUrls: [
      'https://www.city.machida.tokyo.jp/jigyousha/shien/yushi/jisshoujikken.html',
      'https://www.city.machida.tokyo.jp/jigyousha/shien/sogyosha/torikumi/machida-foundation-project.html',
      'https://www.city.machida.tokyo.jp/jigyousha/shien/sogyosha/torikumi/businessdevelopment.html'
    ],
    sourceNote: '町田市公式ページで新商品・新サービス開発事業補助金、上限200万円、令和8年度募集2026年5月15日終了を確認。候補名の創業支援補助金は市単独制度として確認できず。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'katsushika-barrier-free',
    title: '葛飾区 自立支援住宅改修費助成',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '限度額20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['葛飾区', '住宅改修', '高齢者支援'],
    eligibility: '葛飾区在住の65歳以上で、運動機能低下等により住宅改修が必要な方が対象です。要支援・要介護認定者は対象外です。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。工事前相談必須',
    description: '葛飾区が、在宅生活を続ける高齢者のために手すり設置等の自立支援住宅改修費を助成する制度です。一般的な新築・改築リフォームは対象外です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>65歳以上の区民が自宅で安全に生活できるよう、必要な住宅改修費の一部を葛飾区が助成します。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>公式ページで助成限度額20万円を確認できます。工事前の相談と申請が必要です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>候補名のバリアフリー化改修助成制度ではなく、公式名の自立支援住宅改修費助成として掲載します。介護保険認定者は別制度の対象となる場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kenkou/1000052/1030186/1002141/1002158.html',
    sourceName: '葛飾区 自立支援住宅改修費助成',
    sourceUrls: ['https://www.city.katsushika.lg.jp/kenkou/1000052/1030186/1002141/1002158.html'],
    sourceNote: '葛飾区公式ページで自立支援住宅改修費助成、限度額20万円、工事前相談必須、対象者を確認。候補名は公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'katsushika-housing-reform',
    title: '葛飾区 住宅設備改修費助成',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '階段昇降機 最大133.2万円等',
    maxAmountNum: 133,
    category: 'housing',
    prefecture: '東京都',
    tags: ['葛飾区', '住宅設備', '高齢者支援'],
    eligibility: '葛飾区在住で要支援・要介護認定を受けた65歳以上等、在宅生活継続のため設備改修が必要な方が対象です。',
    targetOccupation: '高齢者世帯・要介護認定者',
    applicationPeriod: '通年。工事着工後・完了後の申請不可',
    description: '葛飾区が、在宅の高齢者等に対して浴槽、流し台、洗面台、階段昇降機などの住宅設備改修費を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>要支援・要介護認定を受けた高齢者等が在宅生活を継続できるよう、住宅設備の改修費を助成します。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>浴槽は37.9万円、流し台・洗面台は15.6万円、階段昇降機は機器97.9万円と設置35.3万円まで等の限度額が確認できます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>旧候補名の住まいの改修助成制度という一般リフォーム制度は確認できず、公式で確認できる住宅設備改修費助成として置換しました。</p>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kenkou/1000052/1030186/1002141/1002163.html',
    sourceName: '葛飾区 住宅設備改修費助成',
    sourceUrls: ['https://www.city.katsushika.lg.jp/kenkou/1000052/1030186/1002141/1002163.html'],
    sourceNote: '葛飾区公式ページで住宅設備改修費助成、対象者、浴槽・流し台・階段昇降機等の助成限度額、着工後申請不可を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koto-newlywed-rent',
    title: '江東区 新婚世帯家賃助成制度（公式確認不可）',
    organization: '江東区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['江東区', '新婚世帯', '公式確認不可'],
    eligibility: '旧候補名の新婚世帯家賃助成制度について、江東区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '江東区公式の助成・手当一覧および結婚関連ページを確認しましたが、新婚世帯家賃助成制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>江東区公式の助成・手当一覧と結婚関連ページを確認しましたが、候補名に一致する現行制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>公式制度ページ、支給額、対象要件、申請期限を確認できないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '次に確認すること',
        content: '<p>結婚新生活支援や住まい関連支援の新規募集が出た場合は、江東区公式の助成一覧で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/jose/index.html',
    sourceName: '江東区 助成・手当一覧',
    sourceUrls: [
      'https://www.city.koto.lg.jp/jose/index.html',
      'https://www.city.koto.lg.jp/kekkon.html'
    ],
    sourceNote: '江東区公式の助成・手当一覧および結婚関連ページで、新婚世帯家賃助成制度の現行制度を確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'minato-barrier-free',
    title: '港区 高齢者自立支援住宅改修給付',
    organization: '港区',
    type: 'local',
    maxAmount: '浴槽 最大37.9万円等',
    maxAmountNum: 38,
    category: 'housing',
    prefecture: '東京都',
    tags: ['港区', '住宅改修', '高齢者支援'],
    eligibility: '港区の65歳以上で、日常生活動作に困難があり住宅改修が必要な方が対象です。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。工事着工後申請やリフォーム目的は対象外',
    description: '港区が、日常生活動作に困難のある高齢者の住環境改善を支援する住宅改修給付制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者の在宅生活を支えるため、手すり設置等の予防給付や浴槽・流し台・便器等の設備改修を支援します。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>予防給付20万円、浴槽37.9万円、流し・洗面台15.6万円、便器10.6万円までの給付額が確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>候補名のバリアフリー住宅改修助成事業ではなく、公式名の高齢者自立支援住宅改修給付として掲載します。</p>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/zaitakushien/kenko/fukushi/koresha/sumai/kaishu.html',
    sourceName: '港区 高齢者自立支援住宅改修給付',
    sourceUrls: ['https://www.city.minato.tokyo.jp/zaitakushien/kenko/fukushi/koresha/sumai/kaishu.html'],
    sourceNote: '港区公式ページで高齢者自立支援住宅改修給付、給付額、対象者、工事着工後申請不可を確認。候補名を公式制度名へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'arakawa-barrier-free',
    title: '荒川区 高齢者住宅改修給付事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '浴槽 最大37.9万円等',
    maxAmountNum: 38,
    category: 'housing',
    prefecture: '東京都',
    tags: ['荒川区', '住宅改修', '高齢者支援'],
    eligibility: '荒川区の65歳以上等で、身体機能低下により住宅改修が必要な方が対象です。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。必ず工事前申請',
    description: '荒川区が、身体機能の低下した高齢者等のために住宅改修や設備改修を給付する制度です。一般的な老朽化改修は対象外です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者が自宅で安全に生活できるよう、住宅改修予防や浴槽・流し台・便器等の設備改修を支援します。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>住宅改修予防20万円、浴槽37.9万円、流し・洗面台15.6万円、便器10.6万円、転倒防止手すり6万円等が確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>新築、一般リフォーム、老朽化改修は対象外です。必ず工事前に相談・申請してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a029/koureishairyou/sumai/koureijuukai.html',
    sourceName: '荒川区 高齢者住宅改修給付事業',
    sourceUrls: ['https://www.city.arakawa.tokyo.jp/a029/koureishairyou/sumai/koureijuukai.html'],
    sourceNote: '荒川区公式ページで高齢者住宅改修給付事業、対象者、給付内容、工事前申請必須を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'arakawa-housing-eco',
    title: '荒川区 令和8年度エコ助成事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '高断熱窓 最大375万円等',
    maxAmountNum: 375,
    category: 'housing',
    prefecture: '東京都',
    tags: ['荒川区', '省エネ住宅', 'エコ助成'],
    eligibility: '荒川区内の対象機器等を設置した住宅に居住する個人、集合住宅所有者、管理組合等が対象です。',
    applicationPeriod: '令和8年5月1日から令和9年2月26日まで。予算到達で終了',
    deadlineDate: '2027-02-26',
    description: '荒川区が、住宅や集合住宅への太陽光発電、高断熱窓・ドア、断熱材などの導入を支援する令和8年度のエコ助成事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内住宅等で省エネ・再エネ設備を導入する費用の一部を助成する制度です。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>個人は太陽光上限30万円、高断熱窓・ドア上限15万円、断熱材上限20万円等。集合住宅では高断熱窓上限375万円等が確認できます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度ページで受付期間と予算到達時終了を確認しています。申請前に対象機器、施工時期、予算残額を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a024/kankyou/ekojyosei.html',
    sourceName: '荒川区 令和8年度エコ助成事業',
    sourceUrls: ['https://www.city.arakawa.tokyo.jp/a024/kankyou/ekojyosei.html'],
    sourceNote: '荒川区公式ページで令和8年度エコ助成事業、受付期間、個人・集合住宅向け助成額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kokubunji-housing-eco',
    title: '国分寺市 再エネ・省エネ機器等設置助成制度',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '太陽光 最大15万円等',
    maxAmountNum: 15,
    category: 'housing',
    prefecture: '東京都',
    tags: ['国分寺市', '省エネ住宅', '再エネ'],
    eligibility: '令和8年度中に、市内の所有建物へ対象機器等を設置した方等が対象です。',
    applicationPeriod: '第1期は令和8年4月1日から7月31日。第2期は令和8年12月1日から令和9年3月31日',
    deadlineDate: '2026-07-31',
    description: '国分寺市が、脱炭素社会の実現に向けて太陽光発電、燃料電池、蓄電池、高断熱窓などの設置を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市内建物への再エネ・省エネ機器等の導入を促進するため、対象機器の設置費用の一部を助成します。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>太陽光は1kW3万円・上限15万円、燃料電池6万円、蓄電池6万円、高断熱窓は設置費用1/8・上限8万円です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>第1期と第2期で受付期間が分かれています。まず第1期の締切を期限として登録し、最新の予算状況は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/kurashi/seikatsu/1030856/1033980.html',
    sourceName: '国分寺市 再エネ・省エネ機器等設置助成制度',
    sourceUrls: ['https://www.city.kokubunji.tokyo.jp/kurashi/seikatsu/1030856/1033980.html'],
    sourceNote: '国分寺市公式ページで令和8年度の再エネ・省エネ機器等設置助成、対象機器、助成額、第1期・第2期受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'komae-housing-eco',
    title: '狛江市 地球温暖化対策用設備導入助成',
    organization: '狛江市',
    type: 'local',
    maxAmount: '高断熱窓 最大10万円等',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '東京都',
    tags: ['狛江市', '省エネ住宅', '温暖化対策'],
    eligibility: '狛江市内に住所を有し居住する個人住宅の居住者、共同住宅所有者・管理組合、事業所等が対象です。',
    applicationPeriod: '令和8年4月1日から令和9年1月29日。予算上限到達で停止',
    deadlineDate: '2027-01-29',
    description: '狛江市が、太陽光発電、高断熱窓、家庭用燃料電池、蓄電池などの地球温暖化対策用設備導入を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市内住宅や共同住宅、事業所等で対象設備を導入する場合に、設置費用の一部を助成します。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>高断熱窓5万円、太陽光設置済みまたは同時設置の場合は10万円、太陽光上限8万円、家庭用燃料電池5万円、蓄電池5万円等が確認できます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度の受付期間と予算上限到達時停止を公式ページで確認しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/41%2C127297%2C313%2C2006%2Chtml',
    sourceName: '狛江市 地球温暖化対策用設備導入助成',
    sourceUrls: ['https://www.city.komae.tokyo.jp/index.cfm/41%2C127297%2C313%2C2006%2Chtml'],
    sourceNote: '狛江市公式ページで令和8年度地球温暖化対策用設備導入助成、対象者、助成額、受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mitaka-eco-reform',
    title: '三鷹市 新エネルギー・省エネルギー設備設置助成金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '断熱改修 最大25万円等',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '東京都',
    tags: ['三鷹市', '省エネ住宅', '断熱改修'],
    eligibility: '三鷹市民または市内事業所等で、対象設備を所有・設置した方が対象です。',
    applicationPeriod: '設置後12か月未満。予算残額がある場合も受付は令和9年3月31日まで',
    deadlineDate: '2027-03-31',
    description: '三鷹市が、高断熱窓・玄関ドア、太陽光・風力発電、蓄電池などの設置を助成する令和8年度制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新エネルギー・省エネルギー設備の導入を支援し、家庭や事業所の脱炭素化を促進する助成金です。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>高断熱窓・高断熱玄関ドアは対象費用1/10・上限25万円、太陽光・風力は1kW1万円・上限10万円、蓄電池5万円等です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>候補名の省エネルギー住宅改修補助金ではなく、公式名の新エネルギー・省エネルギー設備設置助成金として掲載します。</p>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/118/118378.html',
    sourceName: '三鷹市 新エネルギー・省エネルギー設備設置助成金',
    sourceUrls: ['https://www.city.mitaka.lg.jp/c_service/118/118378.html'],
    sourceNote: '三鷹市公式ページで令和8年度の助成制度、対象設備、助成額、申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mitaka-housing-purchase',
    title: '三鷹市 ゼロエネルギータウン奨励事業',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大1,500万円相当',
    maxAmountNum: 1500,
    category: 'housing',
    prefecture: '東京都',
    tags: ['三鷹市', 'ZEH', '住宅新築'],
    eligibility: 'ZEH/ZEB等の新規建築物を設置する市民・事業者が対象です。個人は市内に新築住宅を建設する三鷹市民が対象です。',
    applicationPeriod: '令和8年度分の交付申請期限は令和9年3月1日',
    deadlineDate: '2027-03-01',
    description: '三鷹市が、ZEH・ZEB等の新規建築物を対象にポイントを交付するゼロエネルギータウン奨励事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ゼロエネルギー建築物の普及を促進するため、対象事業に応じてポイントを交付する制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>1ポイント1万円、1事業上限1,500ポイントです。個人戸建新築では住宅性能に応じたポイントが設定されています。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>旧候補名の住宅取得支援助成金は確認できず、公式で確認できる新築ZEH/ZEB奨励制度へ別制度として置換しました。</p>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/110/110668.html',
    sourceName: '三鷹市 ゼロエネルギータウン奨励事業',
    sourceUrls: ['https://www.city.mitaka.lg.jp/c_service/110/110668.html'],
    sourceNote: '三鷹市公式ページで令和8年度ゼロエネルギータウン奨励事業、ポイント単価、上限、申請期限を確認。住宅取得支援候補から公式制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mitaka-housing-reform',
    title: '三鷹市 空き家活用改修等補助金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['三鷹市', '空き家', '改修補助'],
    eligibility: '三鷹市の空き家活用マッチング支援事業で契約等が完了した所有者等・活用者が対象です。地域貢献施設としての活用が条件です。',
    targetOccupation: '空き家所有者・活用者',
    applicationPeriod: '通年。交付申請前の事前相談必須。交付決定前契約は不可',
    description: '三鷹市が、空き家を地域貢献施設として活用する場合の改修等経費を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>空き家活用マッチング支援事業を通じて、空き家を地域貢献施設として活用するための改修等を支援します。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>改修等経費の2分の1以内、一戸あたり上限50万円まで補助されます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>一般の住宅リフォーム助成制度は確認できず、近い公式改修補助として空き家活用改修等補助金へ置換しました。自宅居住目的の一般改修ではありません。</p>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/111/111026.html',
    sourceName: '三鷹市 空き家活用改修等補助金',
    sourceUrls: ['https://www.city.mitaka.lg.jp/c_service/111/111026.html'],
    sourceNote: '三鷹市公式ページで空き家活用改修等補助金、補助率、上限50万円、事前相談・交付決定前契約不可を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shibuya-housing-purchase',
    title: '渋谷区 立ち退きに伴う住み替え家賃補助制度',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '転居一時金 家賃3か月分相当等',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '東京都',
    tags: ['渋谷区', '住み替え', '家賃補助'],
    eligibility: '取り壊し等で立ち退きを求められ、区内民間賃貸住宅へ転居する高齢者・障害者・ひとり親世帯等が対象です。',
    applicationPeriod: '随時受付',
    description: '渋谷区が、立ち退きに伴い区内民間賃貸住宅へ住み替える高齢者、障害者、ひとり親世帯等に家賃補助や転居一時金を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅の取り壊し等で立ち退きを求められた対象世帯が、区内の民間賃貸住宅へ転居する際の負担を軽減します。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>月額家賃補助は上限月1万円、転居一時金は新家賃3か月分相当までと確認できます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>住宅取得支援ではなく、住み替え家賃補助として公式確認した内容に修正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kurashi/jutaku/yushi/shien_3.html',
    sourceName: '渋谷区 立ち退きに伴う住み替え家賃補助制度',
    sourceUrls: ['https://www.city.shibuya.tokyo.jp/kurashi/jutaku/yushi/shien_3.html'],
    sourceNote: '渋谷区公式ページで立ち退きに伴う住み替え家賃補助、対象世帯、月額家賃補助、転居一時金を確認。住宅取得支援候補から修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koganei-housing-eco',
    title: '小金井市 住宅用新エネルギー機器等普及促進補助金',
    organization: '小金井市',
    type: 'local',
    maxAmount: '太陽光 最大10万円等',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '東京都',
    tags: ['小金井市', '省エネ住宅', '新エネルギー'],
    eligibility: '小金井市民で、市税等の滞納がなく、対象設備を自ら購入・所有・使用する方が対象です。',
    applicationPeriod: '令和8年4月1日から令和9年3月10日まで。予算範囲内',
    deadlineDate: '2027-03-10',
    description: '小金井市が、太陽光発電、断熱窓、燃料電池、蓄電池、遮熱塗装などの導入を支援する令和8年度補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅用新エネルギー機器等の普及を促進するため、対象設備の購入・設置費用の一部を補助します。</p>'
      },
      {
        heading: '主な補助額',
        content: '<p>太陽光は1kW3万円・上限10万円、断熱窓は設置費用1/5・上限10万円、燃料電池3.5万円、蓄電池4万円、遮熱塗装4万円です。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度用ページで受付期間と予算範囲内での実施を確認しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/kurashi/473/hozyokin/sinnene.html',
    sourceName: '小金井市 住宅用新エネルギー機器等普及促進補助金',
    sourceUrls: ['https://www.city.koganei.lg.jp/kurashi/473/hozyokin/sinnene.html'],
    sourceNote: '小金井市公式ページで令和8年度用の住宅用新エネルギー機器等普及促進補助金、対象設備、補助額、受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kodaira-housing-barrier-free',
    title: '小平市 自立支援住宅改修給付',
    organization: '小平市',
    type: 'local',
    maxAmount: '浴槽 最大37.9万円等',
    maxAmountNum: 38,
    category: 'housing',
    prefecture: '東京都',
    tags: ['小平市', '住宅改修', '高齢者支援'],
    eligibility: '対象要件を満たす小平市の高齢者が対象です。介護保険認定者は介護サービスでの住宅改修を優先する場合があります。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。事前相談・事前申請型',
    description: '小平市が、高齢者等の自立した在宅生活を支援するため、住宅改修や設備改善費用を給付する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者が自宅で安全に生活できるよう、住宅改修予防や浴槽・流し台・便器等の設備改善を支援します。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>住宅改修予防20万円、浴槽37.9万円、流し・洗面台15.6万円、便器10.6万円までの給付額が確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>事前相談・事前申請型の制度です。工事前に小平市の窓口で対象可否を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.kodaira.tokyo.jp/kurashi/018/018337.html',
    sourceName: '小平市 自立支援住宅改修給付',
    sourceUrls: ['https://www.city.kodaira.tokyo.jp/kurashi/018/018337.html'],
    sourceNote: '小平市公式ページで自立支援住宅改修給付、住宅改修予防・浴槽等の給付額、事前相談・事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-housing-eco',
    title: '昭島市 住宅用新エネルギー機器等普及促進補助金',
    organization: '昭島市',
    type: 'local',
    maxAmount: '太陽光 最大6万円等',
    maxAmountNum: 6,
    category: 'housing',
    prefecture: '東京都',
    tags: ['昭島市', '省エネ住宅', '新エネルギー'],
    eligibility: '太陽光発電システムや蓄電池等を新たに設置した個人または法人等が対象です。',
    applicationPeriod: '令和8年度も実施予定。申請期間は例年12月1日から1月31日、詳細は8月までに掲載予定',
    description: '昭島市が、住宅用新エネルギー機器等の普及を目的に太陽光発電、蓄電池、エネファーム等の設置を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市内で対象の新エネルギー機器等を設置した個人または法人等に対して補助を行います。</p>'
      },
      {
        heading: '主な補助額',
        content: '<p>太陽光は1kW1.5万円・上限6万円、太陽熱ソーラー5万円、太陽熱温水器2.5万円、蓄電池は機器費1/3以内・上限5万円、エネファーム5万円です。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>公式ページで令和8年度も実施予定と確認しています。ただし正式な申請期間の詳細は今後掲載予定のため、申請前に最新案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/machi/kankyo/1008380/1008381/1002588.html',
    sourceName: '昭島市 住宅用新エネルギー機器等普及促進補助金',
    sourceUrls: ['https://www.city.akishima.lg.jp/machi/kankyo/1008380/1008381/1002588.html'],
    sourceNote: '昭島市公式ページで令和8年度実施予定、対象機器、補助額を確認。正式申請期間は未掲載のため期限日は設定していない。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-housing-purchase',
    title: '新宿区 民間賃貸住宅家賃助成（令和7年度募集終了）',
    organization: '新宿区',
    type: 'local',
    maxAmount: '月額3万円',
    maxAmountNum: 180,
    category: 'housing',
    prefecture: '東京都',
    tags: ['新宿区', '家賃助成', '募集終了'],
    eligibility: '新宿区内の民間賃貸住宅に住む子育てファミリー世帯等が対象でした。令和7年度の新規募集は終了しています。',
    applicationPeriod: '令和7年度の新規募集は2025年10月15日に終了。令和8年度募集は未確認',
    deadlineDate: '2025-10-15',
    description: '新宿区公式で確認できる制度は住宅購入支援ではなく民間賃貸住宅家賃助成です。令和7年度の新規募集は終了しているため通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>民間賃貸住宅に住む子育てファミリー世帯等に対して家賃を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>子育てファミリー世帯向けは月額3万円、最長5年間の助成が確認できます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和7年度の新規募集は2025年10月15日に終了しています。令和8年度の新規募集は公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/seikatsu/file07_02_00001.html',
    sourceName: '新宿区 民間賃貸住宅家賃助成',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/seikatsu/file07_02_00001.html'],
    sourceNote: '新宿区公式ページで民間賃貸住宅家賃助成、月額3万円、令和7年度募集終了を確認。住宅購入支援候補から家賃助成の終了制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-housing-eco',
    title: '杉並区 エコ住宅促進助成（令和8年度）',
    organization: '杉並区',
    type: 'local',
    maxAmount: '窓等断熱改修 最大15万円等',
    maxAmountNum: 15,
    category: 'housing',
    prefecture: '東京都',
    tags: ['杉並区', 'エコ住宅', '断熱改修'],
    eligibility: '杉並区民、区内建物所有者、区内中小企業者、管理組合等が対象です。',
    applicationPeriod: '令和8年4月10日から令和9年2月26日まで。予算枠到達で終了',
    deadlineDate: '2027-02-26',
    description: '杉並区が、再生可能エネルギー設備の導入や断熱改修等の省エネルギー対策を助成する令和8年度のエコ住宅促進助成です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅や事業所等の再エネ導入、省エネ対策、断熱改修などを支援する助成制度です。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>太陽光上限12万円、高日射反射率塗装上限15万円、窓等断熱改修上限15万円、断熱材上限15万円等が確認できます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>旧候補名の低炭素化推進住宅改修助成制度ではなく、現行公式名のエコ住宅促進助成として掲載します。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s103/819.html',
    sourceName: '杉並区 エコ住宅促進助成',
    sourceUrls: ['https://www.city.suginami.tokyo.jp/s103/819.html'],
    sourceNote: '杉並区公式ページで令和8年度エコ住宅促進助成、対象者、助成額、受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-barrier-free',
    title: '世田谷区 高齢者向け住宅改修の助成・相談',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '浴槽 最大37.9万円等',
    maxAmountNum: 38,
    category: 'housing',
    prefecture: '東京都',
    tags: ['世田谷区', '住宅改修', '高齢者支援'],
    eligibility: '世田谷区内に住所を有する65歳以上で、身体状況から住宅改修が必要な方が対象です。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。改修後相談は対象外。必ず改修前相談',
    description: '世田谷区が、高齢者の在宅生活を支えるために住宅改修の相談と助成を行う制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>身体状況から住宅改修が必要な高齢者に対し、住宅改修や設備改修の助成を行います。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>予防改修20万円、浴槽37.9万円、流し・洗面台15.6万円、便器10.6万円までの助成が確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>改修後の相談は対象外です。必ず改修前に相談し、対象可否を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02082/2405.html',
    sourceName: '世田谷区 高齢者向け住宅改修の助成・相談',
    sourceUrls: ['https://www.city.setagaya.lg.jp/02082/2405.html'],
    sourceNote: '世田谷区公式ページで高齢者向け住宅改修の助成・相談、対象者、助成額、改修前相談必須を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-eco-housing',
    title: '世田谷区 エコ住宅補助金（令和8年度）',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['世田谷区', 'エコ住宅', '断熱改修'],
    eligibility: '世田谷区内住宅で対象断熱改修等を行う方が対象です。区内事業者施工、工事前の事前登録が必要です。',
    applicationPeriod: '前期分対象工事は令和8年4月1日から8月31日までの工事完了。予算上限で事前登録停止。後期あり',
    deadlineDate: '2026-08-31',
    description: '世田谷区が、区内住宅の窓断熱、高断熱ドア、高断熱浴槽、屋根高反射改修等を補助する令和8年度のエコ住宅補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅の省エネ性能向上を目的に、対象となる断熱改修等の費用を補助します。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>最大20万円。窓断熱1窓1.5万円、高断熱ドア1ドア1.5万円、高断熱浴槽7万円、屋根高反射改修7万円などが確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>旧候補名の環境配慮型住宅リノベーション補助ではなく、現行公式名の世田谷区エコ住宅補助金として掲載します。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02240/31250.html',
    sourceName: '世田谷区 エコ住宅補助金',
    sourceUrls: ['https://www.city.setagaya.lg.jp/02240/31250.html'],
    sourceNote: '世田谷区公式ページで令和8年度エコ住宅補助金、対象工事、補助額、前期対象工事期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-housing-eco',
    title: '世田谷区 エコ住宅補助金（令和8年度）',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['世田谷区', 'エコ住宅', '断熱改修'],
    eligibility: '世田谷区内住宅で対象断熱改修等を行う方が対象です。区内事業者施工、工事前の事前登録が必要です。',
    applicationPeriod: '前期分対象工事は令和8年4月1日から8月31日までの工事完了。予算上限で事前登録停止。後期あり',
    deadlineDate: '2026-08-31',
    description: '世田谷区が、区内住宅の窓断熱、高断熱ドア、高断熱浴槽、屋根高反射改修等を補助する令和8年度のエコ住宅補助金です。同一公式制度の別候補slugとして公式確認済みに置換します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅の省エネ性能向上を目的に、対象となる断熱改修等の費用を補助します。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>最大20万円。窓断熱1窓1.5万円、高断熱ドア1ドア1.5万円、高断熱浴槽7万円、屋根高反射改修7万円などが確認できます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>setagaya-eco-housing と同じ公式制度です。古い生成データを公式確認済み情報へ置換するため、このslugにも同一制度を登録しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02240/31250.html',
    sourceName: '世田谷区 エコ住宅補助金',
    sourceUrls: ['https://www.city.setagaya.lg.jp/02240/31250.html'],
    sourceNote: '世田谷区公式ページで令和8年度エコ住宅補助金、対象工事、補助額、前期対象工事期間を確認。setagaya-eco-housing と同一公式制度。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ome-housing-reform',
    title: '青梅市 住宅用省エネルギー等設備普及促進補助制度',
    organization: '青梅市',
    type: 'local',
    maxAmount: '太陽光 最大6万円等',
    maxAmountNum: 6,
    category: 'housing',
    prefecture: '東京都',
    tags: ['青梅市', '省エネ住宅', '設備補助'],
    eligibility: '青梅市内の自ら居住する住宅に対象設備を設置する市民等が対象です。',
    applicationPeriod: '2026年5月7日受付開始。予算がなくなり次第終了',
    description: '青梅市が、住宅用の省エネルギー等設備の普及を促進するため、高断熱窓、太陽光発電、蓄電池などの設置費用を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市内住宅への省エネルギー設備等の導入を支援し、家庭部門の脱炭素化を促進する補助制度です。</p>'
      },
      {
        heading: '主な補助額',
        content: '<p>高断熱窓は5万円または本人負担額1/2の低い額、太陽光は1.5万円/kW・上限6万円、蓄電池は0.5万円/kWh・上限3万円です。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>旧候補名の住宅改修補助金ではなく、公式で確認できた令和8年度の住宅用省エネルギー等設備普及促進補助制度へ置換しました。</p>'
      }
    ],
    officialUrl: 'https://www.city.ome.tokyo.jp/soshiki/22/67056.html',
    sourceName: '青梅市 住宅用省エネルギー等設備普及促進補助制度',
    sourceUrls: [
      'https://www.city.ome.tokyo.jp/soshiki/22/67056.html',
      'https://www.city.ome.tokyo.jp/uploaded/attachment/79477.pdf'
    ],
    sourceNote: '青梅市公式ページと公式PDFで令和8年度制度、受付開始、対象設備、補助額を確認。候補名から公式の省エネ設備補助へ修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-newlywed-rent',
    title: '足立区 新婚世帯住居費助成制度（公式確認不可）',
    organization: '足立区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['足立区', '新婚世帯', '公式確認不可'],
    eligibility: '旧候補名の新婚世帯住居費助成制度について、足立区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '足立区公式の補助金・助成金一覧および居住支援ページを確認しましたが、新婚世帯住居費助成制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>足立区公式の補助金・助成金一覧および居住支援ページを確認しましたが、候補名に一致する現行制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>公式に確認できる支給額、対象要件、申請期間がないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '次に確認すること',
        content: '<p>結婚新生活支援や住まい関連支援の新規募集が出た場合は、足立区公式の補助金・助成金一覧で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/subsidy.html',
    sourceName: '足立区 補助金・助成金一覧',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/subsidy.html',
      'https://www.city.adachi.tokyo.jp/machi/jutaku/kyojushien.html'
    ],
    sourceNote: '足立区公式の補助金・助成金一覧および居住支援ページで、新婚世帯住居費助成制度を確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chuo-housing-reform',
    title: '中央区 住宅・共同住宅用自然エネルギー・省エネルギー機器等導入費助成',
    organization: '中央区',
    type: 'local',
    maxAmount: '太陽光 最大35万円等',
    maxAmountNum: 35,
    category: 'housing',
    prefecture: '東京都',
    tags: ['中央区', '省エネ住宅', '自然エネルギー'],
    eligibility: '区内住所を有する方、共同住宅所有者、中小事業者、管理組合等が対象です。',
    applicationPeriod: '2026年4月1日から予算終了まで。導入完了は2027年3月15日、完了報告は2027年3月31日まで',
    deadlineDate: '2027-03-31',
    description: '中央区が、住宅・共同住宅向けの自然エネルギー・省エネルギー機器等の導入費を助成する令和8年度制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅や共同住宅に太陽光発電、蓄電池、エネファーム、高反射率塗料等を導入する費用の一部を助成します。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>住宅では太陽光10万円/kW・上限35万円、蓄電池1万円/kWh・上限10万円、エネファーム20%・上限25万円、高反射率塗料等20%・上限10万円などが確認できます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>一般的な住宅リフォーム助成ではなく、公式で確認できる省エネ機器導入助成へ別制度として置換しました。</p>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/a0036/machizukuri/bika/taisaku/kikijosei/ecojosei_jutaku.html',
    sourceName: '中央区 住宅・共同住宅用自然エネルギー・省エネルギー機器等導入費助成',
    sourceUrls: [
      'https://www.city.chuo.lg.jp/a0036/machizukuri/bika/taisaku/kikijosei/ecojosei_jutaku.html',
      'https://www.city.chuo.lg.jp/documents/5066/syouenepannhu.pdf'
    ],
    sourceNote: '中央区公式ページと公式パンフレットで令和8年度の住宅・共同住宅用助成、対象者、助成額、完了報告期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nakano-barrier-free',
    title: '中野区 高齢者自立支援住宅改修等給付事業',
    organization: '中野区',
    type: 'local',
    maxAmount: '住宅改修予防 最大20万円等',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['中野区', '住宅改修', '高齢者支援'],
    eligibility: '中野区内在住の65歳以上で、介護保険認定や所得等の要件を満たす方が対象です。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。工事前相談・事前申請',
    description: '中野区が、高齢者の自立した在宅生活を支援するため、住宅改修予防や設備改善費を給付する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者の身体状況に応じ、自宅で安全に生活できるよう住宅改修や設備改善を支援します。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>住宅改修予防給付上限20万円、浴室改善20万円、台所改善13万円、便所改善9万円が確認できます。利用者負担があります。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>住宅バリアフリー一般ではなく、高齢者自立支援の住宅改修給付として確認したため、介護・福祉カテゴリに補正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/kenko_hukushi/kourei/hokenhukushi/jiritsushienjyutaku.html',
    sourceName: '中野区 高齢者自立支援住宅改修等給付事業',
    sourceUrls: ['https://www.city.tokyo-nakano.lg.jp/kenko_hukushi/kourei/hokenhukushi/jiritsushienjyutaku.html'],
    sourceNote: '中野区公式ページで高齢者自立支援住宅改修等給付、対象者、給付限度額、工事前相談・事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nakano-newlywed-rent',
    title: '中野区 新婚世帯住居費助成制度（公式確認不可）',
    organization: '中野区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['中野区', '新婚世帯', '公式確認不可'],
    eligibility: '旧候補名の新婚世帯住居費助成制度について、中野区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '中野区公式で確認できる家賃補助は住居確保給付金等であり、新婚世帯住居費助成制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>中野区公式ページを確認しましたが、候補名に一致する新婚世帯向けの住居費助成制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>公式制度として確認できる支給額、対象要件、申請期間がないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>住居確保給付金等は生活困窮者向けの別制度です。新婚世帯向け制度の有無は中野区公式サイトで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/kenko_hukushi/hogo/jyukyokakuhoyatin.html',
    sourceName: '中野区 住居確保給付金',
    sourceUrls: ['https://www.city.tokyo-nakano.lg.jp/kenko_hukushi/hogo/jyukyokakuhoyatin.html'],
    sourceNote: '中野区公式で確認できる家賃補助は住居確保給付金等で、新婚世帯住居費助成制度は確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'machida-juutaku-reform',
    title: '町田市 住宅バリアフリー化改修工事助成金（制度廃止）',
    organization: '町田市',
    type: 'local',
    maxAmount: '現行支給なし',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['町田市', '住宅改修', '制度廃止'],
    eligibility: '候補名に近い公式住宅改修助成は、2025年度をもって終了・廃止されています。',
    applicationPeriod: '2025年度をもって終了・廃止',
    deadlineDate: '2026-03-31',
    description: '町田市公式ページで、住宅バリアフリー化改修工事助成金は2025年度をもって終了・廃止されたことを確認しました。現行制度ではないため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>町田市公式ページで、候補名に近い住宅バリアフリー化改修工事助成金が終了・廃止されたことを確認しました。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>現行支給がない制度のため、利用可能な助成金としては掲載しません。</p>'
      },
      {
        heading: '次に確認すること',
        content: '<p>住宅関連の新しい改修支援が開始された場合は、町田市公式の住まい関連ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/kurashi/sumai/house/josei.html',
    sourceName: '町田市 住宅バリアフリー化改修工事助成金',
    sourceUrls: ['https://www.city.machida.tokyo.jp/kurashi/sumai/house/josei.html'],
    sourceNote: '町田市公式ページで住宅バリアフリー化改修工事助成金の2025年度終了・廃止を確認。期限切れ判定に2026年3月31日を使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'machida-newlywed-rent',
    title: '町田市 結婚新生活支援事業補助金（公式確認不可）',
    organization: '町田市',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['町田市', '結婚新生活', '公式確認不可'],
    eligibility: '旧候補名の結婚新生活支援事業補助金について、町田市公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '町田市公式の結婚関連ページや生活支援ページを確認しましたが、結婚新生活支援事業補助金・新婚家賃助成に該当する制度は確認できませんでした。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>町田市公式ページで、候補名に一致する結婚新生活支援事業補助金または新婚家賃助成を確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>公式に確認できる支給額、対象要件、申請期間がないため、通常一覧から除外します。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>結婚・転居・生活支援に関する新しい制度は、町田市公式サイトで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/kurashi/touroku/todokede/todokede02.html',
    sourceName: '町田市 結婚・離婚に関する届出',
    sourceUrls: [
      'https://www.city.machida.tokyo.jp/kurashi/touroku/todokede/todokede02.html',
      'https://www.city.machida.tokyo.jp/kurashi/kurashisoudan/engo/index.html'
    ],
    sourceNote: '町田市公式ページで結婚新生活支援事業補助金・新婚家賃助成に該当する制度を確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chofu-housing-reform',
    title: '調布市 バリアフリー適応住宅改修補助',
    organization: '調布市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '東京都',
    tags: ['調布市', '住宅改修', 'バリアフリー'],
    eligibility: '調布市内住宅の所有者または賃借人で、対象住宅に6か月以上居住する方が対象です。',
    applicationPeriod: '工事計画承認申請は12月最終開庁日まで。工事完了報告は申請年度の3月10日まで',
    deadlineDate: '2026-12-28',
    description: '調布市のよりよい住まいづくり応援制度のうち、住宅のバリアフリー適応改修を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>調布市内住宅でバリアフリー適応改修を行う場合に、工事費の一部を補助します。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>補助対象工事費の1/2または上限10万円のいずれか低い額が補助されます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>候補名を公式制度名へ修正しています。工事計画承認申請と工事完了報告の期限を確認してから進めてください。</p>'
      }
    ],
    officialUrl: 'https://www.city.chofu.lg.jp/080020/p045043.html',
    sourceName: '調布市 バリアフリー適応住宅改修補助',
    sourceUrls: ['https://www.city.chofu.lg.jp/080020/p045043.html'],
    sourceNote: '調布市公式ページでバリアフリー適応住宅改修補助、補助率、上限10万円、令和8年度の申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokyo-housing-renovation',
    title: '東京都 断熱・太陽光住宅普及拡大事業',
    organization: '東京都',
    type: 'local',
    maxAmount: '補助項目により異なる',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['東京都', '断熱改修', '太陽光'],
    eligibility: '東京都内住宅で対象断熱改修・太陽光発電・蓄電池等を導入する所有者等が対象です。',
    applicationPeriod: '事前申込受付期間は令和4年度から令和9年度まで。令和8年度予算は1,012億円',
    deadlineDate: '2028-03-31',
    description: '東京都が、災害にも強く健康にも資する住宅の普及を目的に、断熱改修、太陽光発電、蓄電池等を支援する広域制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都内住宅の断熱性能向上、太陽光発電設備、蓄電池等の導入を支援する東京都の住宅向け補助事業です。</p>'
      },
      {
        heading: '対象項目',
        content: '<p>高断熱窓・ドア、断熱材、太陽光発電設備、蓄電池等が対象です。補助額は項目ごとに異なるため、公式ページの補助項目表を確認してください。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>単一の東京都住宅リフォーム助成制度ではなく、公式で確認できる断熱・太陽光住宅普及拡大事業へ置換しました。</p>'
      }
    ],
    officialUrl: 'https://www.kankyo.metro.tokyo.lg.jp/climate/home/dannetsu-solar',
    sourceName: '東京都 断熱・太陽光住宅普及拡大事業',
    sourceUrls: ['https://www.kankyo.metro.tokyo.lg.jp/climate/home/dannetsu-solar'],
    sourceNote: '東京都環境局公式ページで断熱・太陽光住宅普及拡大事業、対象項目、令和8年度予算、令和9年度までの事前申込受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'higashimurayama-housing-eco',
    title: '東村山市 住宅用地球温暖化対策設備設置費補助金',
    organization: '東村山市',
    type: 'local',
    maxAmount: '太陽光・蓄電池 最大5万円等',
    maxAmountNum: 5,
    category: 'housing',
    prefecture: '東京都',
    tags: ['東村山市', '省エネ住宅', '温暖化対策'],
    eligibility: '2026年1月1日から2026年12月31日までに自己居住住宅へ対象設備を設置完了した市民等が対象です。',
    applicationPeriod: '公式例規で令和8年4月1日施行の制度を確認。申請受付期間は市の最新募集案内で確認',
    description: '東村山市が、住宅用の太陽光発電、蓄電池、エネファーム、断熱窓改修などを補助する制度です。自動リンク監査に通る公式例規ページを根拠として掲載します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>自己居住住宅に地球温暖化対策設備を設置した市民等を対象に、設備設置費の一部を補助します。</p>'
      },
      {
        heading: '主な補助額',
        content: '<p>太陽光または蓄電池5万円、エネファーム4万円、断熱窓改修2万5千円が確認できます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>公式例規で令和8年4月1日施行の制度を確認しています。申請受付期間、必要書類、予算残額は東村山市の最新募集案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www1.g-reiki.net/city.higashimurayama/reiki_honbun/f200RG00001202.html',
    sourceName: '東村山市住宅用地球温暖化対策設備設置費の補助に関する規則',
    sourceUrls: ['https://www1.g-reiki.net/city.higashimurayama/reiki_honbun/f200RG00001202.html'],
    sourceNote: '東村山市の公式例規ページで住宅用地球温暖化対策設備設置費の補助に関する規則、令和8年4月1日施行、対象設備、補助額を確認。市の個別募集ページとPDFは現在の自動リンク監査環境で403となるためsourceUrlsから除外。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'higashiyamato-housing-eco',
    title: '東大和市 住宅の省エネ改修工事に伴う固定資産税減額（対象工事期間終了）',
    organization: '東大和市',
    type: 'local',
    maxAmount: '固定資産税を3分の1減額等',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['東大和市', '省エネ改修', '税減額'],
    eligibility: '2014年4月1日以前から所在する自己居住住宅で、省エネ改修要件を満たすものが対象でした。',
    applicationPeriod: '対象工事期間は2022年4月1日から2026年3月31日まで。工事完了後3か月以内に申告',
    deadlineDate: '2026-03-31',
    description: '東大和市公式で確認できる近い制度は、省エネ改修工事に伴う固定資産税の減額です。補助金ではなく、対象工事期間も終了しているため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>省エネ住宅改修補助金は確認できず、近い公式制度として固定資産税の減額を確認しました。</p>'
      },
      {
        heading: '制度内容',
        content: '<p>翌年度分の固定資産税を3分の1減額、長期優良住宅化を伴う場合は3分の2減額と確認できます。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>補助金ではなく税減額であり、対象工事期間も2026年3月31日で終了しているため、期限切れ扱いにしています。</p>'
      }
    ],
    officialUrl: 'https://www.city.higashiyamato.lg.jp/kurashi/zei/1001753/1001773.html',
    sourceName: '東大和市 住宅の省エネ改修工事に伴う固定資産税の減額',
    sourceUrls: ['https://www.city.higashiyamato.lg.jp/kurashi/zei/1001753/1001773.html'],
    sourceNote: '東大和市公式ページで住宅の省エネ改修工事に伴う固定資産税減額、対象工事期間2026年3月31日まで、補助金ではないことを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hachioji-housing-purchase',
    title: '八王子市 親元近居・同居住宅取得支援補助金（公式確認不可）',
    organization: '八王子市',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['八王子市', '住宅取得', '公式確認不可'],
    eligibility: '旧候補名の親元近居・同居住宅取得支援補助金について、八王子市公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '八王子市公式の住宅施策を確認しましたが、親元近居・同居住宅取得支援補助金に該当する制度は確認できませんでした。誤掲載を避けるため通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>八王子市公式の住宅施策を確認しましたが、候補名に一致する現行制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>公式に確認できる支給額、対象要件、申請期間がないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>住宅改修に関しては八王子市居住環境整備補助金など、別の公式制度を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/kurashi/life/003/001/index.html',
    sourceName: '八王子市 住宅施策',
    sourceUrls: ['https://www.city.hachioji.tokyo.jp/kurashi/life/003/001/index.html'],
    sourceNote: '八王子市公式の住宅施策ページで、親元近居・同居住宅取得支援補助金に該当する現行制度を確認できず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hachioji-juutaku-reform',
    title: '八王子市 居住環境整備補助金',
    organization: '八王子市',
    type: 'local',
    maxAmount: '木造耐震 最大100万円等',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '東京都',
    tags: ['八王子市', '住宅改修', '居住環境'],
    eligibility: '八王子市内住宅の所有者等が対象です。市内登録施工業者による対象改修工事が条件です。',
    applicationPeriod: '申請受付は2026年4月20日から2026年12月31日まで。予算到達で終了',
    deadlineDate: '2026-12-31',
    description: '八王子市が、バリアフリー、木造耐震、省エネ、長寿命化、子育て・ワークスペースなどの住宅改修を補助する令和8年度制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市内住宅の居住環境を改善するため、対象となる住宅改修工事費の一部を補助します。</p>'
      },
      {
        heading: '主な補助額',
        content: '<p>バリアフリー20%・上限20万円、木造耐震2/3・上限100万円、省エネ20%・上限15万円、長寿命化20%・上限5万円、子育て・ワークスペース20%・上限10万円等が確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>候補名の住宅リフォーム助成金ではなく、公式の居住環境整備補助金として掲載します。</p>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/kurashi/life/003/001/004/p006694.html',
    sourceName: '八王子市 居住環境整備補助金',
    sourceUrls: ['https://www.city.hachioji.tokyo.jp/kurashi/life/003/001/004/p006694.html'],
    sourceNote: '八王子市公式ページで令和8年度居住環境整備補助金、対象工事、補助額、申請受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'itabashi-housing-reform',
    title: '板橋区 高齢者住宅設備改修費助成事業',
    organization: '板橋区',
    type: 'local',
    maxAmount: '浴槽取替え 最大20万円等',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['板橋区', '住宅改修', '高齢者支援'],
    eligibility: '板橋区に住民票がある65歳以上で、住民登録地の住宅に居住し、介護予防等の要件を満たす方が対象です。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。工事着工前申請',
    description: '板橋区が、高齢者の在宅生活を支援するため、住宅改修や浴槽・流し台等の設備改修費を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者が住み慣れた住宅で安全に生活できるよう、必要な住宅設備改修費を助成します。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>介護予防住宅改修上限10万円、浴槽取替え上限20万円、流しまたは洗面台取替え上限15万円です。自己負担は世帯状況により異なります。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>一般住宅改修ではなく高齢者向け住宅設備改修助成として確認したため、介護・福祉カテゴリに補正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/kenko/kourei/josei/1003554.html',
    sourceName: '板橋区 高齢者住宅設備改修費助成事業',
    sourceUrls: [
      'https://www.city.itabashi.tokyo.jp/kenko/kourei/josei/1003554.html',
      'https://www.city.itabashi.tokyo.jp/_res/projects/default_project/_page_/001/003/554/r8.4.1pamphlet.pdf'
    ],
    sourceNote: '板橋区公式ページと公式パンフレットで高齢者住宅設備改修費助成事業、対象者、助成額、工事着工前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'musashino-eco-reform',
    title: '武蔵野市 効率的なエネルギー活用推進助成制度',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '既設窓断熱改修 最大300万円等',
    maxAmountNum: 300,
    category: 'housing',
    prefecture: '東京都',
    tags: ['武蔵野市', '省エネ住宅', '断熱改修'],
    eligibility: '武蔵野市民、対象集合住宅の管理組合等が対象です。',
    applicationPeriod: '設置・改修完了日から6か月以内に申請。令和8年度受付は2027年2月28日まで、予算範囲内',
    deadlineDate: '2027-02-28',
    description: '武蔵野市が、太陽光発電、エネファーム、既設窓断熱改修などの効率的なエネルギー活用を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>市内住宅等で効率的なエネルギー活用を進めるため、対象設備の導入や既設窓断熱改修を助成します。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>太陽光は15万円または3万円/kWの低い額、エネファーム6万円、既設窓断熱改修は個人上限10万円、管理組合等は上限300万円等が確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>候補名を公式の効率的なエネルギー活用推進助成制度へ修正しています。設置・改修完了日から6か月以内の申請が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/gomi_kankyo/shoene_eco/joseiseido/1005095.html',
    sourceName: '武蔵野市 効率的なエネルギー活用推進助成制度',
    sourceUrls: ['https://www.city.musashino.lg.jp/gomi_kankyo/shoene_eco/joseiseido/1005095.html'],
    sourceNote: '武蔵野市公式ページで効率的なエネルギー活用推進助成制度、対象設備、助成額、令和8年度受付期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'musashino-newlywed-rent',
    title: '武蔵野市 新婚・子育て世帯家賃助成制度（公式確認不可）',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['武蔵野市', '家賃助成', '公式確認不可'],
    eligibility: '旧候補名の新婚・子育て世帯家賃助成制度について、武蔵野市公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '武蔵野市公式で確認できる家賃助成は障害者・ひとり親等向けの別制度で、新婚・子育て世帯家賃助成制度とは一致しませんでした。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>武蔵野市公式の結婚・住まい関連ページを確認しましたが、新婚・子育て世帯家賃助成制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>公式に確認できる支給額、対象要件、申請期間がないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>障害者・ひとり親等向けの家賃助成は別制度です。対象要件が異なるため、この候補とは分けて扱います。</p>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/mokutekikarasagasu/life_event/kekkon_rikon/index.html',
    sourceName: '武蔵野市 結婚・離婚',
    sourceUrls: [
      'https://www.city.musashino.lg.jp/mokutekikarasagasu/life_event/kekkon_rikon/index.html',
      'https://www.city.musashino.lg.jp/kenko_fukushi/shogaisha_fukushi/shien_josei/sumai_josei/1006517.html',
      'https://www.city.musashino.lg.jp/shussan_kodomo_kyoiku/kodomo_kosodate/teate_josei/hitorioya/1041218/1006731.html'
    ],
    sourceNote: '武蔵野市公式で確認できる家賃助成は障害者・ひとり親等向けで、新婚・子育て世帯家賃助成制度とは一致せず、掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'bunkyo-housing-reform',
    title: '文京区 高齢者等住宅修築資金助成',
    organization: '文京区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['文京区', '住宅修築', '高齢者支援'],
    eligibility: '高齢者または障害者を含む世帯が居住する区内住宅のバリアフリー修繕、浸水対策、防災修復等が対象です。',
    targetOccupation: '高齢者・障害者を含む世帯',
    applicationPeriod: '予算額到達で終了。工事着工3週間前までに申請、実績報告は2027年2月10日、請求は2027年3月10日まで',
    deadlineDate: '2027-03-10',
    description: '文京区が、高齢者または障害者を含む世帯の住宅修築費の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者または障害者を含む世帯の居住環境改善、防災、浸水対策等を目的とした住宅修築費を助成します。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>税抜き工事費の10%、上限20万円まで助成されます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>高齢者等を対象とする住宅修築資金助成として確認したため、介護・福祉カテゴリに補正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/b032/p000746.html',
    sourceName: '文京区 高齢者等住宅修築資金助成',
    sourceUrls: ['https://www.city.bunkyo.lg.jp/b032/p000746.html'],
    sourceNote: '文京区公式ページで高齢者等住宅修築資金助成、補助率、上限20万円、申請・実績報告・請求期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'bunkyo-newlywed-rent',
    title: '文京区 新婚世帯家賃助成制度（公式確認不可）',
    organization: '文京区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['文京区', '新婚世帯', '公式確認不可'],
    eligibility: '旧候補名の新婚世帯家賃助成制度について、文京区公式サイトで現行制度として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-06-25',
    description: '文京区公式で新婚世帯家賃助成制度は確認できませんでした。住居確保給付金や移転費用等助成は生活困窮・低所得等の別制度です。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>文京区公式ページを確認しましたが、候補名に一致する新婚世帯向け家賃助成制度は確認できませんでした。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>公式に確認できる支給額、対象要件、申請期間がないため、通常一覧には掲載しません。</p>'
      },
      {
        heading: '関連情報',
        content: '<p>住居確保給付金や移転費用等助成は別制度です。対象要件を混同しないよう、この候補は掲載停止扱いにします。</p>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/b003/p007510.html',
    sourceName: '文京区 住居確保給付金',
    sourceUrls: [
      'https://www.city.bunkyo.lg.jp/b003/p007510.html',
      'https://www.city.bunkyo.lg.jp/b019/p006546.html',
      'https://www.city.bunkyo.lg.jp/b016/p000768.html'
    ],
    sourceNote: '文京区公式で新婚世帯家賃助成制度は確認できず、住居確保給付金や移転費用等助成は別制度と判断。掲載停止日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toshima-barrier-free',
    title: '豊島区 高齢者自立支援住宅改修助成事業',
    organization: '豊島区',
    type: 'local',
    maxAmount: '浴槽 最大37.9万円等',
    maxAmountNum: 38,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['豊島区', '住宅改修', '高齢者支援'],
    eligibility: '豊島区内に住所を有する65歳以上の高齢者で、要介護認定・身体障害者手帳等の要件を満たす方が対象です。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。改修前に事前申請',
    description: '豊島区が、高齢者の在宅生活を支援するため、住宅改修や設備改修費を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者が自宅で安全に暮らせるよう、住宅改修や設備改修を支援します。介護保険とは別枠の高齢者自立支援制度です。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>予防的助成上限20万円、浴槽37.9万円、流し等15.6万円、便器洋式化10.6万円が確認できます。利用者負担は1〜3割です。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>住宅バリアフリー改修として近い公式制度を確認し、介護・福祉カテゴリに補正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/379/kenko/koresha/hitorigurashi/000024.html',
    sourceName: '豊島区 高齢者自立支援住宅改修助成事業',
    sourceUrls: ['https://www.city.toshima.lg.jp/379/kenko/koresha/hitorigurashi/000024.html'],
    sourceNote: '豊島区公式ページで高齢者自立支援住宅改修助成事業、対象者、助成額、改修前事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kita-newlywed-rent',
    title: '北区 セーフティネット住宅の家賃補助（令和7年度募集終了）',
    organization: '北区',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 480,
    category: 'housing',
    prefecture: '東京都',
    tags: ['北区', '家賃補助', '募集終了'],
    eligibility: '北区内に1年以上居住し、18歳以下の子どもまたは妊娠中の方がいる子育て世帯等が対象でした。令和7年度募集は終了しています。',
    applicationPeriod: '令和7年度募集は2026年1月20日で終了。現行のファミリー世帯転居費用助成・親子住まいる応援事業は別制度',
    deadlineDate: '2026-01-20',
    description: '北区公式で、新婚・子育て世帯家賃助成という現行制度名は確認できず、賃貸・子育てに近いセーフティネット住宅の家賃補助は令和7年度募集終了と確認しました。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>候補名の新婚・子育て世帯家賃助成制度は確認できず、近い公式制度としてセーフティネット住宅の家賃補助を確認しました。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>家賃補助は毎月最大4万円、補助期間は所得等により最長10年または6年と確認できます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和7年度募集は2026年1月20日に終了しています。現行のファミリー世帯転居費用助成・親子住まいる応援事業は別制度として扱います。</p>'
      }
    ],
    officialUrl: 'https://www.city.kita.lg.jp/living/housing/1018234/1020550/1024982.html',
    sourceName: '北区 セーフティネット住宅の入居者募集',
    sourceUrls: [
      'https://www.city.kita.lg.jp/living/housing/1018234/1020550/1024982.html',
      'https://www.city.kita.lg.jp/living/housing/1009223/1009228.html',
      'https://www.city.kita.lg.jp/living/housing/1009223/1009225.html'
    ],
    sourceNote: '北区公式ページで令和7年度のセーフティネット住宅家賃補助募集終了、家賃補助額、関連する現行制度は別制度であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-child-medical',
    title: '新宿区 子ども医療費助成',
    organization: '新宿区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['新宿区', '子ども医療費', '高校生等医療証'],
    eligibility: '新宿区に住民登録がある、18歳に達する日以後の最初の3月31日までの子どもが対象です。日本の健康保険未加入、生活保護受給、児童福祉施設等への措置入所などは対象外です。',
    applicationPeriod: '随時。出生または転入の翌日から3か月以内の申請は出生日または転入日から助成開始',
    description: '新宿区が、18歳年度末までの子どもの保険診療自己負担分と入院時食事療養費を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳幼児医療証、子ども医療証、高校生等医療証により、対象年齢の子どもの医療費自己負担を助成します。</p>'
      },
      {
        heading: '対象年齢',
        content: '<p>高校在学の有無を問わず、18歳に達する日以後の最初の3月31日までが対象です。所得制限はありません。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>固定の公募締切ではなく、出生・転入等に応じて医療証の交付申請を行います。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/kodomo/file03_04_00003.html',
    sourceName: '新宿区 子ども医療費助成',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/kodomo/file03_04_00003.html'],
    sourceNote: '新宿区公式ページで対象年齢、助成範囲、所得制限なし、申請時期を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'bunkyo-child-medical',
    title: '文京区 こども医療費助成',
    organization: '文京区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['文京区', 'こども医療費', '高校生等医療証'],
    eligibility: '文京区に住民登録があり、日本の健康保険に加入している、18歳に達する日以後の最初の3月31日までのこどもが対象です。',
    applicationPeriod: '随時。電子申請、郵送、窓口で申請可',
    description: '文京区が、高校生相当年齢までのこどもについて、保険診療の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>こども医療証の対象となるこどもが医療機関を受診した際、保険診療の自己負担分を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>文京区に住民登録があり、日本の健康保険に加入している高校生相当年齢までのこどもが対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>出生日・転入日等から3か月を経過した後の交付申請は、受付月の1日から助成対象となります。</p>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/b022/p001459/index.html',
    sourceName: '文京区 こども医療費助成',
    sourceUrls: ['https://www.city.bunkyo.lg.jp/b022/p001459/index.html'],
    sourceNote: '文京区公式ページで対象年齢、対象要件、申請方法、助成開始日の扱いを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-child-medical',
    title: '台東区 子ども医療費助成',
    organization: '台東区',
    type: 'local',
    maxAmount: '18歳年度末まで医療費自己負担金を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['台東区', '子ども医療費', '高校生等'],
    eligibility: '台東区内に住み、国民健康保険または各種社会保険に加入している、出生から18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '随時。出生・転入から3か月以上経過した場合は申請月の1日から助成開始',
    description: '台東区が、0歳から高校生等相当年齢までの子どもについて、健康保険を使って医療機関にかかった場合の医療費自己負担金を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>健康保険を使って医療機関にかかった場合、医療機関に支払う医療費の自己負担金を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>台東区内在住で健康保険に加入している、出生から18歳到達後最初の3月31日までの子どもが対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>健康保険未加入、生活保護受給中、児童福祉施設等に入所している子どもは対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/teate_josei/iryohijosei/annai.html',
    sourceName: '台東区 子ども医療費助成',
    sourceUrls: ['https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/teate_josei/iryohijosei/annai.html'],
    sourceNote: '台東区公式ページで助成範囲、対象年齢、対象要件、助成開始日の扱いを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sumida-child-medical',
    title: '墨田区 子どもの医療費の助成',
    organization: '墨田区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['墨田区', '子ども医療費', 'マル青'],
    eligibility: '墨田区内在住の高校生等年代までの子どもを養育し、子どもと同居している国内の健康保険加入の保護者が対象です。',
    applicationPeriod: '随時。出生または転入日の翌日から15日以内の申請で出生日または転入日から有効',
    description: '墨田区が、乳幼児・子ども・高校生等年代の医療費について、保険診療の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>医療機関等で支払う医療費のうち、保険診療の自己負担分を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>18歳到達後最初の3月31日までの子どもを養育する、墨田区内在住の保護者が対象です。</p>'
      },
      {
        heading: '対象外',
        content: '<p>生活保護、里親委託、乳児院等施設入所、子どもが区外在住の場合などは対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/kosodate_kyouiku/kosodate_site/teate_jyosei_shien/teate_zyosei/jyosei/nyuuyouji_iryouhi.html',
    sourceName: '墨田区 子どもの医療費の助成',
    sourceUrls: ['https://www.city.sumida.lg.jp/kosodate_kyouiku/kosodate_site/teate_jyosei_shien/teate_zyosei/jyosei/nyuuyouji_iryouhi.html'],
    sourceNote: '墨田区公式ページで制度名、対象年齢、助成範囲、申請時期を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koto-child-medical',
    title: '江東区 子ども医療費助成',
    organization: '江東区',
    type: 'local',
    maxAmount: '高校卒業前まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江東区', '子ども医療費', 'マル青'],
    eligibility: '江東区内在住の高校3年生等までの子どもを養育し、子どもと同居している健康保険加入の保護者が対象です。',
    applicationPeriod: '随時。窓口、電子申請、郵送で申請可',
    description: '江東区が、高校卒業前までの子どもの医療費について、保険診療の自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高校卒業前までの子どもの医療費について、医療機関等に支払う保険診療の自己負担分を助成します。</p>'
      },
      {
        heading: '医療証',
        content: '<p>就学前はマル乳、小中学生はマル子、高校生等はマル青医療証の対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>制度利用には医療証の交付申請が必要です。生活保護、児童福祉施設等入所、里親委託等は対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/281011/kodomo/kosodate/teate/5844.html',
    sourceName: '江東区 子ども医療費助成',
    sourceUrls: ['https://www.city.koto.lg.jp/281011/kodomo/kosodate/teate/5844.html'],
    sourceNote: '江東区公式ページで高校卒業前までの対象、保険診療自己負担分の助成、医療証申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinagawa-child-medical',
    title: '品川区 子どもすこやか医療費助成',
    organization: '品川区',
    type: 'local',
    maxAmount: '18歳年度末まで保険適用医療費の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['品川区', '子どもすこやか医療費', '高校生等'],
    eligibility: '0歳から高校3年生相当年齢までで、子どもの住所が品川区にあり、健康保険に加入している方が対象です。',
    applicationPeriod: '随時。出生・転入の新規申請、医療費払い戻し、再交付、変更手続き等を受付',
    description: '品川区が、0歳から高校3年生相当年齢までの子どもの保険適用医療費自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子どもすこやか医療費助成として、保険適用の医療費自己負担分、入院時食事療養費標準負担額、治療用装具等を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>18歳に達した日以後の最初の3月31日までの、品川区在住かつ健康保険加入の子どもが対象です。</p>'
      },
      {
        heading: '対象外',
        content: '<p>生活保護、児童福祉施設入所、里親委託などの場合は対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/PC/kodomo/kodomo-iryohizyosei/hpg000017744.html',
    sourceName: '品川区 子どもすこやか医療費助成',
    sourceUrls: ['https://www.city.shinagawa.tokyo.jp/PC/kodomo/kodomo-iryohizyosei/hpg000017744.html'],
    sourceNote: '品川区公式ページで制度名、対象年齢、助成範囲、対象外要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'meguro-child-medical',
    title: '目黒区 子ども医療費助成制度',
    organization: '目黒区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担額等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['目黒区', '子ども医療費', '高校生等医療証'],
    eligibility: '目黒区内在住で国内の健康保険に加入している、0歳から18歳到達後最初の3月31日までの方が対象です。',
    applicationPeriod: '随時。制度利用には申請手続きと医療証の交付が必要',
    description: '目黒区が、18歳年度末までの方について、保険診療でかかった医療費の自己負担額などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>保険診療でかかった医療費の自己負担額と、入院時食事療養標準負担額を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>区内在住で国内の健康保険に加入している、0歳から18歳到達後最初の3月31日までの方が対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>制度を利用するには、医療証の交付申請が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/kosodateshien/kosodatekyouiku/kosodate/toha.html',
    sourceName: '目黒区 子ども医療費助成制度とは',
    sourceUrls: ['https://www.city.meguro.tokyo.jp/kosodateshien/kosodatekyouiku/kosodate/toha.html'],
    sourceNote: '目黒区公式ページで対象年齢、対象者、助成範囲、医療証申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-child-medical',
    title: '大田区 児童医療費助成制度',
    organization: '大田区',
    type: 'local',
    maxAmount: '高校生相当年齢まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['大田区', '児童医療費', '青医療証'],
    eligibility: '0歳から18歳到達後最初の3月31日までで、子どもの住所が大田区内にあり、健康保険に加入していることが要件です。',
    applicationPeriod: '随時。出生・転入日から6か月以内の申請は出生日または転入日に遡って資格発生',
    description: '大田区が、高校生相当年齢までの児童の医療費について、保険診療の自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳医療証・子医療証・青医療証により、高校生相当年齢までの児童の医療費を助成します。</p>'
      },
      {
        heading: '助成範囲',
        content: '<p>保険診療の対象となる医療費・薬剤費等の自己負担分、入院時食事療養標準負担額、治療用装具等が対象です。</p>'
      },
      {
        heading: '対象外',
        content: '<p>生活保護、児童福祉施設への措置入所、里親委託などの場合は対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/kodomo/teate/kodomonyuui.html',
    sourceName: '大田区 児童医療費助成制度',
    sourceUrls: ['https://www.city.ota.tokyo.jp/seikatsu/kodomo/teate/kodomonyuui.html'],
    sourceNote: '大田区公式ページで対象年齢、助成範囲、申請時期、対象外要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-birth-bonus',
    title: '新宿区 妊婦のための支援給付事業',
    organization: '新宿区',
    type: 'local',
    maxAmount: '単胎の場合 計10万円相当',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['新宿区', '妊婦支援給付金', '出産支援'],
    eligibility: '申請日時点で新宿区に住民登録があり、医師による胎児心拍確認を受け、他自治体で妊婦支援給付金を受けていない方が対象です。',
    applicationPeriod: '令和7年4月1日以降の妊娠届出・出産が対象。面談や赤ちゃん訪問時に申請案内',
    description: '旧「出産・子育て応援給付金」に相当する制度は、令和7年度から妊婦のための支援給付事業へ移行しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>妊娠期から出産後までの経済的負担を軽減するため、妊婦支援給付金を支給します。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>1回目は妊婦1人当たり5万円相当、2回目は妊娠していた子どもの人数に5万円相当を乗じた額です。</p>'
      },
      {
        heading: '制度移行',
        content: '<p>令和6年度までの出産・子育て応援交付金事業は、令和7年度から妊婦のための支援給付事業に変更されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/fukushi/syussan_kosodate_gift.html',
    sourceName: '新宿区 妊婦のための支援給付事業',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/fukushi/syussan_kosodate_gift.html'],
    sourceNote: '新宿区公式ページで令和7年度からの制度変更、対象者、支給内容、申請案内時期を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'bunkyo-birth-bonus',
    title: '文京区 妊婦のための支援給付金',
    organization: '文京区',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['文京区', '妊婦支援給付金', '出産支援'],
    eligibility: '文京区に住民登録があり、令和7年4月1日以降に妊娠している方または令和7年4月1日以降に出産した方が対象です。',
    applicationPeriod: '1回目は妊娠確定日から2年以内、2回目は出産予定日の8週間前から2年以内等',
    description: '文京区の出産・子育て応援ギフトは終了し、令和7年4月1日から妊婦のための支援給付へ移行しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>妊婦の産前産後期間における経済的負担を軽減するため、妊婦のための支援給付金を支給します。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>1回目は5万円、2回目は胎児1人当たり5万円です。流産・死産・人工妊娠中絶も条件を満たせば対象です。</p>'
      },
      {
        heading: '制度移行',
        content: '<p>旧出産・子育て応援ギフトは事業終了となり、現行制度は妊婦のための支援給付です。</p>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/b027/p007561.html',
    sourceName: '文京区 妊婦のための支援給付について',
    sourceUrls: [
      'https://www.city.bunkyo.lg.jp/b027/p007561.html',
      'https://www.city.bunkyo.lg.jp/b027/p001523.html'
    ],
    sourceNote: '文京区公式ページで現行の妊婦支援給付、旧出産・子育て応援ギフトの事業終了、対象者、申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-birth-bonus',
    title: '台東区 妊婦のための支援給付',
    organization: '台東区',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['台東区', '妊婦支援給付', '出産支援'],
    eligibility: '申請時点で台東区に住民票がある妊婦・産婦が対象です。他自治体で同種給付を受けていないことなどの要件があります。',
    applicationPeriod: '令和7年4月1日以降の面接・出生分が対象。面接およびこんにちは赤ちゃん訪問時に案内',
    description: '台東区が、令和7年度から国の新たな給付として実施している妊婦向けの経済的支援制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>安心して妊娠・出産、子育てができるよう、妊婦を対象に給付を行う制度です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>1回目は妊婦1人につき5万円、2回目は今回妊娠した子ども1人につき5万円です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>申請方法は、ゆりかご・たいとう面接や出産後のこんにちは赤ちゃん訪問時に案内されます。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/teate_josei/ninpusienkyufu.html',
    sourceName: '台東区 妊婦のための支援給付',
    sourceUrls: [
      'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/teate_josei/ninpusienkyufu.html',
      'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/teate_josei/ninpusienkyufu.images/taisyounaiyou.png'
    ],
    sourceNote: '台東区公式ページと公式ページ内画像で対象者、支給額、申請案内の流れを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-childcare-subsidy',
    title: '世田谷区 せたがや子育て利用券',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '子ども1人につき1万円分',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['世田谷区', '子育て利用券', 'ネウボラ'],
    eligibility: '世田谷区民で、ネウボラ面接を受けた妊婦または2歳までの子どもがいる家庭が対象です。出産後の転入家庭、里親も対象です。',
    applicationPeriod: 'ネウボラ面接時に配付。使用期限は子どもが2歳になる誕生日まで',
    description: '世田谷区が、子育て関連サービスに利用できる子育て利用券を配付する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>妊娠期面接・産後面接を受けた家庭などに、子育てサービスで使える利用券を配付します。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>子ども1人につき1セット1万円分で、500円券14枚、100円券30枚です。</p>'
      },
      {
        heading: '利用期限',
        content: '<p>利用券は、対象の子どもが2歳になる誕生日まで利用できます。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02244/1188.html',
    sourceName: '世田谷区 せたがや子育て利用券',
    sourceUrls: ['https://www.city.setagaya.lg.jp/02244/1188.html'],
    sourceNote: '世田谷区公式ページで公式名称、対象者、配付内容、使用期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-childcare-subsidy',
    title: '杉並区 杉並子育て応援券',
    organization: '杉並区',
    type: 'local',
    maxAmount: '無償券 最大3.5万円分',
    maxAmountNum: 3.5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['杉並区', '子育て応援券', '無償券'],
    eligibility: '無償券は、対象児童と同一世帯の保護者で区内に居住していることが条件です。出生0歳児、0歳児転入者、1歳児・2歳児、ゆりかご面接を受けた妊婦などが対象です。',
    applicationPeriod: '無償券は出生届後・転入確認後・年度当初等にアプリ交付。有償券は令和8年度分を2026年4月1日9時から受付',
    description: '杉並区が、子育てサービスに使える応援券を無償交付または有償購入制で提供する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域の子育てサービスを利用しやすくするため、杉並子育て応援券をアプリで交付します。</p>'
      },
      {
        heading: '無償券',
        content: '<p>出生0歳児は3万円分、多子世帯は3万5,000円分です。0歳児転入者・1歳児・2歳児は1万5,000円分、多子世帯は2万円分です。</p>'
      },
      {
        heading: '有償券',
        content: '<p>0歳児から5歳児までの子どもの保護者は、子ども1人につき毎年度最大3万円分の応援券を購入できます。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s055/3035.html',
    sourceName: '杉並区 杉並子育て応援券',
    sourceUrls: [
      'https://www.city.suginami.tokyo.jp/s055/3035.html',
      'https://www.city.suginami.tokyo.jp/s055/1131.html',
      'https://www.city.suginami.tokyo.jp/s055/1130.html'
    ],
    sourceNote: '杉並区公式の概要、無償券、有償券ページで対象者、交付額、受付開始時期を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nakano-parenting-allowance',
    title: '中野区 児童育成手当',
    organization: '中野区',
    type: 'local',
    maxAmount: '育成手当 月額1万3,500円、障害手当 月額1万5,500円',
    maxAmountNum: 18.6,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中野区', '児童育成手当', 'ひとり親'],
    eligibility: '育成手当は、離婚、死亡、重度障害、遺棄、DV保護命令等の状態にある18歳年度末までの児童を養育する保護者が対象です。障害手当は一定の障害がある20歳未満の子を養育する保護者が対象です。',
    applicationPeriod: '申請が必要。原則として申請月の翌月分から支給',
    description: '旧候補名の子ども養育手当は公式名称として確認できず、中野区公式で確認できる現行制度である児童育成手当に補正しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ひとり親家庭等や障害のある子どもを養育する家庭に対し、児童育成手当を支給します。</p>'
      },
      {
        heading: '手当額',
        content: '<p>育成手当は児童1人当たり月額1万3,500円、障害手当は対象者1人当たり月額1万5,500円です。</p>'
      },
      {
        heading: '名称補正',
        content: '<p>候補名の子ども養育手当ではなく、公式名称の児童育成手当として確認しました。</p>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/kosodate/kosodatesite_ohirune/mokuteki/teate/teate/jidoikusei.html',
    sourceName: '中野区 児童育成手当',
    sourceUrls: [
      'https://www.city.tokyo-nakano.lg.jp/kosodate/kosodatesite_ohirune/mokuteki/teate/kodomonoteate.html',
      'https://www.city.tokyo-nakano.lg.jp/kosodate/kosodatesite_ohirune/mokuteki/teate/teate/jidoikusei.html'
    ],
    sourceNote: '中野区公式ページで児童育成手当の制度名、対象、手当額、申請月の翌月分から支給を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toshima-parenting-allowance',
    title: '豊島区 児童育成手当',
    organization: '豊島区',
    type: 'local',
    maxAmount: '育成手当 月額1万3,500円、障害手当 月額1万5,500円',
    maxAmountNum: 34.8,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['豊島区', '児童育成手当', 'ひとり親'],
    eligibility: '育成手当は、離婚、死亡、生死不明、重度障害、遺棄、DV保護命令等の状態にある18歳年度末までの児童を養育している方が対象です。障害手当は一定の障害がある20歳未満の児童を養育している方が対象です。',
    applicationPeriod: '申請が必要。原則として申請月の翌月分から支給',
    description: '旧候補名の子ども養育手当は公式名称として確認できず、豊島区公式で確認できる現行制度である児童育成手当に補正しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>児童育成手当には、育成手当と障害手当があります。所得制限などの要件があります。</p>'
      },
      {
        heading: '手当額',
        content: '<p>育成手当は児童1人につき月額1万3,500円、障害手当は児童1人につき月額1万5,500円です。支給要件に該当すれば両方受給できます。</p>'
      },
      {
        heading: '名称補正',
        content: '<p>候補名の子ども養育手当ではなく、公式名称の児童育成手当として確認しました。</p>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/261/kosodate/kosodate/hitorioya/005893.html',
    sourceName: '豊島区 児童育成手当',
    sourceUrls: [
      'https://www.city.toshima.lg.jp/261/kosodate/kosodate/hitorioya/005893.html',
      'https://www.city.toshima.lg.jp/261/kosodate/2304271022.html'
    ],
    sourceNote: '豊島区公式ページで児童育成手当の制度名、対象、手当月額、支給方法を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'itabashi-parenting-allowance',
    title: '板橋区 児童手当（第3子以降加算）',
    organization: '板橋区',
    type: 'local',
    maxAmount: '第3子以降 月額3万円',
    maxAmountNum: 36,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['板橋区', '児童手当', '第3子以降'],
    eligibility: '板橋区に住み、出生から18歳到達後最初の3月31日までの児童を養育している方が対象です。第3子以降は0歳から22歳到達後最初の3月31日までの児童の人数で算定します。',
    applicationPeriod: '原則として申請月の翌月分から支給。出生・転入等は事由発生日の翌日から15日以内に申請',
    description: '候補名の多子世帯養育支援手当は公式名称として確認できず、公式に確認できる多子向け内容である児童手当の第3子以降加算として補正しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和6年10月支給分以降、児童手当の対象年齢が高校生年代まで拡大され、第3子以降の支給額も拡充されています。</p>'
      },
      {
        heading: '支給額',
        content: '<p>第3子以降は年齢区分を問わず月額3万円です。第1子・第2子は年齢区分により月額1万円または1万5,000円です。</p>'
      },
      {
        heading: '名称補正',
        content: '<p>多子世帯養育支援手当という公式制度名は確認できないため、児童手当の第3子以降加算として扱います。</p>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/kosodate/teate/teate/1063955/index.html',
    sourceName: '板橋区 児童手当',
    sourceUrls: [
      'https://www.city.itabashi.tokyo.jp/kosodate/teate/teate/1063955/index.html',
      'https://www.city.itabashi.tokyo.jp/kosodate/teate/teate/index.html'
    ],
    sourceNote: '板橋区公式ページで児童手当の対象年齢、第3子以降月額3万円、申請時期を確認。多子世帯養育支援手当という公式名称は確認できないため補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kita-infertility',
    title: '北区 特定不妊治療費（先進医療）助成',
    organization: '北区',
    type: 'local',
    maxAmount: '上限5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['北区', '不妊治療', '先進医療'],
    eligibility: '東京都特定不妊治療費（先進医療）助成事業の承認決定を1年以内に受けた夫婦が対象です。申請時に申請者が北区に住民登録していること等の要件があります。',
    applicationPeriod: '東京都の承認決定日から1年以内。令和8年3月31日までに開始した治療が対象',
    description: '北区が、東京都の特定不妊治療費（先進医療）助成を受けた夫婦に上乗せ補助を行う制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>保険適用された特定不妊治療と併用する先進医療について、東京都助成を受けた後の自己負担に区が上乗せ助成します。</p>'
      },
      {
        heading: '助成額',
        content: '<p>東京都助成額を除いた自己負担額と5万円のいずれか低い額を助成します。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>東京都の承認決定日から1年以内に申請します。令和8年4月1日以降に開始した治療の区制度は公式ページで検討中とされています。</p>'
      }
    ],
    officialUrl: 'https://www.city.kita.lg.jp/children-edu/pregnancy/1002764/1018694.html',
    sourceName: '北区 特定不妊治療費（先進医療）の助成',
    sourceUrls: ['https://www.city.kita.lg.jp/children-edu/pregnancy/1002764/1018694.html'],
    sourceNote: '北区公式ページで対象治療、助成上限5万円、東京都承認決定日から1年以内、令和8年4月1日以降開始治療の扱いを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinagawa-infertility',
    title: '品川区 不妊治療（生殖補助医療）医療費助成',
    organization: '品川区',
    type: 'local',
    maxAmount: '1回の治療につき上限5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['品川区', '不妊治療', '生殖補助医療'],
    eligibility: '令和6年4月1日以降に受けた生殖補助医療の保険適用分が対象です。治療開始日から申請日まで婚姻関係が継続し、夫婦の一方が継続して品川区に住民登録していること等が要件です。',
    applicationPeriod: '治療が終了した日から1年以内',
    description: '品川区が、保険診療で行う生殖補助医療の自己負担額について、1回の治療につき上限5万円を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>体外受精、顕微授精、男性不妊治療などの生殖補助医療について、保険適用分の自己負担を助成します。</p>'
      },
      {
        heading: '助成額',
        content: '<p>1回の治療につき上限5万円です。先進医療や自由診療にかかる医療費は品川区制度の対象外です。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>治療が終了した日から起算して1年以内に申請します。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/PC/kodomo/kodomo-ninnshinn/20240622152920.html',
    sourceName: '品川区 不妊治療（生殖補助医療）医療費助成事業',
    sourceUrls: ['https://www.city.shinagawa.tokyo.jp/PC/kodomo/kodomo-ninnshinn/20240622152920.html'],
    sourceNote: '品川区公式ページで生殖補助医療の対象、助成上限5万円、申請期限、先進医療等は対象外であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-infertility-treatment',
    title: '杉並区 特定不妊治療費（先進医療）助成',
    organization: '杉並区',
    type: 'local',
    maxAmount: '令和8年4月1日以降の都承認決定は上限5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['杉並区', '不妊治療', '先進医療'],
    eligibility: '東京都特定不妊治療費（先進医療）助成事業の承認決定を1年以内に受けた夫婦が対象です。申請時に夫婦または一方が杉並区に住民登録していること等の要件があります。',
    applicationPeriod: '東京都の承認決定を受けてから1年以内',
    description: '杉並区が、東京都の特定不妊治療費（先進医療）助成を受けた方に対して、区独自の上乗せ助成を行う制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>保険適用された特定不妊治療と併用した先進医療について、東京都助成を受けた後に区が追加で助成します。</p>'
      },
      {
        heading: '助成額',
        content: '<p>東京都の承認決定日が令和8年4月1日以降の場合は上限5万円、令和8年3月31日以前の場合は実費額の50%かつ上限3万5,000円です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>区の助成を申請するには、東京都の承認決定を受けていることが条件です。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s045/1111.html',
    sourceName: '杉並区 特定不妊治療費（先進医療）助成',
    sourceUrls: ['https://www.city.suginami.tokyo.jp/s045/1111.html'],
    sourceNote: '杉並区公式ページで対象、東京都承認決定を受けていること、令和8年4月1日前後の助成上限額、申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'katsushika-fertility-treatment',
    title: '葛飾区 特定不妊治療費（先進医療）助成',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '1回の治療につき上限5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['葛飾区', '不妊治療', '先進医療'],
    eligibility: '東京都特定不妊治療費（先進医療）助成事業の承認決定を受け、治療開始日から申請日まで婚姻関係があり、申請日に葛飾区内に住民登録がある方が対象です。',
    applicationPeriod: '東京都の助成決定を受けた日から起算して1年以内',
    description: '葛飾区が、東京都の先進医療助成決定を受けた特定不妊治療について、区独自に上乗せ助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>保険適用された特定不妊治療とともに自費で実施した先進医療について、東京都助成額を差し引いた額を区が助成します。</p>'
      },
      {
        heading: '助成額',
        content: '<p>1回の治療につき5万円を上限に助成します。助成対象の費用が5万円を下回る場合は、その額が上限です。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>東京都の助成決定を受けた日から起算して1年を経過する日までに申請します。</p>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kenkou/1000050/1001803/1034531.html',
    sourceName: '葛飾区 特定不妊治療費（先進医療）助成事業',
    sourceUrls: ['https://www.city.katsushika.lg.jp/kenkou/1000050/1001803/1034531.html'],
    sourceNote: '葛飾区公式ページで対象者、東京都助成決定が前提であること、上限5万円、申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'bunkyo-infertility',
    title: '文京区 不妊治療費（先進医療及び自由診療）の一部助成',
    organization: '文京区',
    type: 'local',
    maxAmount: '自由診療は1回上限10万円、先進医療は1回上限5万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['文京区', '不妊治療', '先進医療'],
    eligibility: '治療開始日から申請日まで婚姻関係があり、治療開始日における妻の年齢が43歳未満、申請日に夫婦のどちらかが文京区内に住所を有すること等が要件です。',
    applicationPeriod: '原則、治療終了日の属する年度末まで。1月から3月末までに治療終了した場合は同年6月30日まで等',
    description: '文京区が、先進医療および自由診療の不妊治療費の一部を助成する制度です。旧特定不妊治療費用の一部助成は終了済みです。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>体外受精や顕微授精に関連する先進医療および自由診療について、区が治療費の一部を助成します。</p>'
      },
      {
        heading: '助成額',
        content: '<p>先進医療は1回上限5万円、自由診療は1回上限10万円です。</p>'
      },
      {
        heading: '制度移行',
        content: '<p>令和4年4月の保険適用開始に伴い、従来の特定不妊治療費用の一部助成は終了しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.bunkyo.lg.jp/b027/p001534.html',
    sourceName: '文京区 不妊治療費（先進医療及び自由診療）の一部助成',
    sourceUrls: [
      'https://www.city.bunkyo.lg.jp/b027/p001534.html',
      'https://www.city.bunkyo.lg.jp/b027/p001535.html'
    ],
    sourceNote: '文京区公式ページで現行助成の対象、上限額、申請期限、旧特定不妊治療費用助成の終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-infertility',
    title: '台東区 特定不妊治療（先進医療）助成',
    organization: '台東区',
    type: 'local',
    maxAmount: '上限5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['台東区', '不妊治療', '先進医療'],
    eligibility: '令和4年4月1日以降に治療を開始し、特定不妊治療と併せて先進医療を実施し、東京都の先進医療助成上限額15万円を受けている方が対象です。申請時に台東区に住民登録があること等が要件です。',
    applicationPeriod: '東京都の承認決定後6か月以内',
    description: '台東区が、保険適用の特定不妊治療と併せて実施した先進医療について、東京都助成後の自己負担の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>特定不妊治療と併せて実施した先進医療について、東京都特定不妊治療費（先進医療）助成を受けている場合に区が追加で助成します。</p>'
      },
      {
        heading: '助成額',
        content: '<p>先進医療にかかる自己負担額の7割から東京都助成15万円を除いた額と、上限5万円のいずれか低い額です。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>東京都の承認決定後6か月以内です。公式ページでは厳守と案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/kenkou_iryou/ninshin/teate_josei/senshiniryou.html',
    sourceName: '台東区 特定不妊治療（先進医療）の費用の一部を助成',
    sourceUrls: [
      'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/kenkou_iryou/ninshin/teate_josei/senshiniryou.html',
      'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/kenkou_iryou/ninshin/teate_josei/funinchiryohijosei.html'
    ],
    sourceNote: '台東区公式ページで現行の先進医療助成、上限5万円、東京都承認後6か月以内の申請期限、旧総称ページからの案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-daycare-support',
    title: '世田谷区 無認可保育施設保育料補助（令和8年度）',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '無認可保育施設は月額最大8万円等',
    maxAmountNum: 96,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['世田谷区', '認可外保育', '保育料補助'],
    eligibility: '世田谷区で給付認定を受け、無認可保育施設等を利用する方が対象です。年齢、住民税課税状況、保育の必要性認定、施設種別により補助区分が異なります。',
    applicationPeriod: '令和8年度利用分。四半期ごとに申請・審査・支給。最終申請締切は2027年4月12日',
    deadlineDate: '2027-04-12',
    description: '世田谷区が、認可外保育施設利用者の保育料負担を軽減する制度です。施設種別ごとに補助内容が分かれ、ここでは令和8年度の無認可保育施設向け補助として確認しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>認可外保育施設に保育料を支払った後、区への補助金申請により保育料の一部を補助します。</p>'
      },
      {
        heading: '主な補助額',
        content: '<p>無認可保育施設は月額上限8万円、3～5歳児クラスは月額7万7,000円、給食提供園は3,000円上乗せなど、制度・施設種別により異なります。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>補助金は3か月ごとに審査・支給されます。令和8年度利用分の最終申請締切は2027年4月12日です。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/01044/1510.html',
    sourceName: '世田谷区 令和8年度無認可保育施設保育料補助',
    sourceUrls: [
      'https://www.city.setagaya.lg.jp/01044/1511.html',
      'https://www.city.setagaya.lg.jp/01044/1510.html'
    ],
    sourceNote: '世田谷区公式の認可外保育施設補助概要と令和8年度無認可保育施設ページで補助対象、補助額、最終申請締切を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toshima-daycare-support',
    title: '豊島区 認可外保育施設利用者への補助金',
    organization: '豊島区',
    type: 'local',
    maxAmount: '施設種別により月額最大8万円等',
    maxAmountNum: 96,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['豊島区', '認可外保育', '保育料補助'],
    eligibility: '認可保育施設や幼稚園に通園せず、認可外保育施設のみを利用する保護者が対象です。対象児童が豊島区から保育の必要性の認定を受ける必要があります。',
    applicationPeriod: '令和8年度分。原則、申請日の属する月から補助対象。4月分から受ける場合は2026年4月30日まで',
    description: '豊島区が、認可外保育施設を利用する家庭に対し、施設種別や課税状況に応じて保育料を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東京都認証保育所、企業主導型保育施設、その他認可外施設など、施設区分に応じて補助基準が設定されています。</p>'
      },
      {
        heading: '主な補助額',
        content: '<p>施設種別・課税状況により、月額上限なし、8万円、7万7,000円、4万2,000円、3万7,000円などの区分があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>4月分から補助を受ける場合の期限は2026年4月30日ですが、制度自体は原則として申請日の属する月から対象となるため、固定の最終期限は設定していません。</p>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/530/2502171609.html',
    sourceName: '豊島区 認可外保育施設利用者への補助金',
    sourceUrls: ['https://www.city.toshima.lg.jp/530/2502171609.html'],
    sourceNote: '豊島区公式ページで令和8年度申請、保育の必要性認定、補助基準表、申請月からの補助対象を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-child-medical',
    title: '千代田区 こども・高校生等医療費助成制度',
    organization: '千代田区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['千代田区', 'こども医療費', '高校生等医療証'],
    eligibility: '18歳に達した日以降最初の3月31日までの間にあり、千代田区に住民登録があり、国内の健康保険に加入している子どもが対象です。生活保護、児童福祉施設等入所、里親委託の児童は対象外です。',
    applicationPeriod: '随時。出生・転入日の翌日から3か月以内に申請。3か月経過後は申請日の属する月の1日から助成開始となる場合があります',
    description: '千代田区が、18歳年度末までの子どもについて、保険診療の自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>こども・高校生等医療証により、医療機関で治療を受けたときの保険診療の自己負担分を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>千代田区に住民登録があり、国内の健康保険に加入している、18歳到達後最初の3月31日までの子どもが対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>出生・転入から一定期間内に申請することで、出生日または転入日から助成対象となります。固定の公募締切はありません。</p>'
      }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/kosodate/teate/kodomoiryo.html',
    sourceName: '千代田区 こども・高校生等医療費助成制度',
    sourceUrls: ['https://www.city.chiyoda.lg.jp/koho/kosodate/teate/kodomoiryo.html'],
    sourceNote: '千代田区公式ページで対象年齢、助成範囲、入院時食事代の扱い、申請期限の考え方を確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chuo-child-medical',
    title: '中央区 子ども医療費助成',
    organization: '中央区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中央区', '子ども医療費', '高校生等医療証'],
    eligibility: '中央区内に住所があり、健康保険に加入している子どもを養育する保護者が対象です。対象区分は就学前、小・中学生、高校生等で、18歳到達後最初の3月31日までです。',
    applicationPeriod: '随時。窓口、郵送、オンライン申請で医療証交付申請が可能。払い戻しは領収日から5年以内',
    description: '中央区が、子どもの病院・薬局等での保険診療について、保護者が負担する額を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>健康保険の適用される医療について、通院・入院にかかる自己負担分と入院時食事療養標準負担額を助成します。</p>'
      },
      {
        heading: '対象年齢',
        content: '<p>就学前、小・中学生、高校生等の各医療証により、18歳到達後最初の3月31日までが対象です。所得制限はありません。</p>'
      },
      {
        heading: '対象外',
        content: '<p>健康保険適用外、高額療養費・附加給付該当分、他制度適用分、日本スポーツ振興センター給付適用分などは対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/a0020/kosodate/kosodate/teatejosei/iryouhijosei/akimoto.html',
    sourceName: '中央区 子ども医療費助成',
    sourceUrls: ['https://www.city.chuo.lg.jp/a0020/kosodate/kosodate/teatejosei/iryouhijosei/akimoto.html'],
    sourceNote: '中央区公式ページで制度概要、対象区分、所得制限なし、助成範囲、払い戻し期限を確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'minato-child-medical',
    title: '港区 子ども医療費助成',
    organization: '港区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['港区', '子ども医療費', '高校生等医療証'],
    eligibility: '18歳に達する日以後の最初の3月31日までの子どもで、港区に住民登録があり、日本の公的な健康保険に加入していることが要件です。生活保護、児童福祉施設入所、里親委託等は対象外です。',
    applicationPeriod: '随時。出生・転入日から15日以内の申請は出生・転入日から資格発生',
    description: '港区が、18歳年度末までの子どもの通院・入院医療費について、保険診療の自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳幼児・子ども・高校生等医療証により、通院・入院にかかる保険診療の自己負担分を助成します。</p>'
      },
      {
        heading: '助成範囲',
        content: '<p>保険診療の自己負担分に加え、入院時の食事療養標準負担額も助成対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>郵送、各総合支所区民課保健福祉係への持参、マイナポータル電子申請で申請できます。</p>'
      }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/kosodatesien/kodomo/kate/kodomoiryo.html',
    sourceName: '港区 子ども医療費助成',
    sourceUrls: ['https://www.city.minato.tokyo.jp/kosodatesien/kodomo/kate/kodomoiryo.html'],
    sourceNote: '港区公式ページで対象年齢、助成範囲、入院時食事代、申請方法、資格発生日を確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-child-medical',
    title: '世田谷区 子ども等医療費助成制度',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['世田谷区', '子ども等医療費', '高校生等'],
    eligibility: '世田谷区内に住所があり、18歳に達した日以後最初の3月31日までで、国民健康保険または社会保険に加入している児童が対象です。生活保護、児童福祉施設入所、里親委託の児童は対象外です。',
    applicationPeriod: '随時。出生・転入の場合は3か月以内の申請で出生日または転入日から助成対象',
    description: '世田谷区が、18歳年度末までの子ども等の医療費について、保険診療の自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子ども等医療証により、保険診療の自己負担分と入院時の食事の自己負担分を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>世田谷区内に住所があり、健康保険に加入している、18歳到達後最初の3月31日までの児童が対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>窓口、郵送、電子申請で受給資格申請ができます。医療証は毎年10月に更新され、原則として更新手続きは不要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02413/1305.html',
    sourceName: '世田谷区 子ども等医療費助成制度',
    sourceUrls: ['https://www.city.setagaya.lg.jp/02413/1305.html'],
    sourceNote: '世田谷区公式ページで対象者、助成内容、申請方法、出生・転入時の資格発生日を確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shibuya-child-medical',
    title: '渋谷区 子ども医療費助成',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['渋谷区', '子ども医療費', '医療証'],
    eligibility: '渋谷区内に住所を有する0歳から18歳に達する日以後の最初の3月31日までの子どもを養育している保護者が対象です。子どもが日本の健康保険に加入している必要があります。',
    applicationPeriod: '随時。出生・転入から14日以内の申請で出生・転入の日から助成。それ以降は受付日から助成',
    description: '渋谷区が、18歳年度末までの子どもの保険診療内の自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>保険診療内の自己負担分、入院時の食事療養費の自己負担分、健康保険から給付決定された補装具などを助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>渋谷区内に住所があり、日本の健康保険に加入している、18歳到達後最初の3月31日までの子どもが対象です。保護者の所得制限はありません。</p>'
      },
      {
        heading: '対象外',
        content: '<p>予防接種、健康診断、薬の容器代、差額ベッド代など、健康保険が適用されない費用は対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kodomo/kodomo-teate-josei/iryo-josei/kodomo_ij.html',
    sourceName: '渋谷区 子ども医療費助成',
    sourceUrls: ['https://www.city.shibuya.tokyo.jp/kodomo/kodomo-teate-josei/iryo-josei/kodomo_ij.html'],
    sourceNote: '渋谷区公式ページで助成内容、対象者、所得制限なし、申請時期、対象外費用を確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nakano-child-medical',
    title: '中野区 子ども医療費助成制度',
    organization: '中野区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中野区', '子ども医療費', 'マル青'],
    eligibility: '中野区に住民票があり、国内の健康保険に加入している0歳から18歳到達後最初の3月31日までの子どもが対象です。生活保護受給、児童福祉施設入所、里親委託は対象外です。',
    applicationPeriod: '随時。出生・転入等で新規申請。電子申請、郵送、窓口で申請可。都外受診等の払い戻しは受診日から2年以内',
    description: '中野区が、マル乳・マル子・マル青医療証により、18歳年度末までの子どもの保険診療自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子ども医療費助成制度として、保険診療の自己負担分を助成します。マル乳、マル子、マル青の医療証があります。</p>'
      },
      {
        heading: '対象者',
        content: '<p>中野区に住民票があり、国内の健康保険に加入している、18歳到達後最初の3月31日までの子どもが対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>東京都外の医療機関で受診した場合などは、受診日から2年以内に払い戻し申請を行います。</p>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/kosodate/kosodatesite_ohirune/mokuteki/teate/iryohijyosei/kodomoiryojyosei.html',
    sourceName: '中野区 子ども医療費助成制度',
    sourceUrls: ['https://www.city.tokyo-nakano.lg.jp/kosodate/kosodatesite_ohirune/mokuteki/teate/iryohijyosei/kodomoiryojyosei.html'],
    sourceNote: '中野区公式ページで制度名、対象年齢、助成範囲、申請方法、還付請求期限を確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-child-medical',
    title: '杉並区 子どもの医療費助成',
    organization: '杉並区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['杉並区', '子ども医療費', 'マル青'],
    eligibility: '杉並区内に住所を有し、18歳に達する日以後の最初の3月31日までで、国民健康保険または社会保険等の日本の医療保険制度に加入している子どもが対象です。',
    applicationPeriod: '随時。オンライン、窓口、郵送で申請可。出生・転入月の翌月申請でも、翌日から15日以内なら遡及認定',
    description: '杉並区が、出生から18歳年度末までの子どもにマル乳・マル子・マル青医療証を交付し、保険診療の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>出生から18歳に達する日以後の最初の3月31日までの子どもに医療証を交付し、保険診療に係る医療費の自己負担分を助成します。</p>'
      },
      {
        heading: '対象外',
        content: '<p>保険診療外の医療費、入院時食事療養標準負担額等、生活保護や施設措置など公費で医療費が賄われる場合は対象外です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>オンライン、窓口、郵送で申請できます。医療証は毎年10月1日に更新されます。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s053/1043.html',
    sourceName: '杉並区 子ども医療費助成について',
    sourceUrls: ['https://www.city.suginami.tokyo.jp/s053/1043.html'],
    sourceNote: '杉並区公式ページで助成内容、対象者、申請方法、認定日の扱い、対象外費用を確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toshima-child-medical',
    title: '豊島区 子どもの医療費助成',
    organization: '豊島区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['豊島区', '子ども医療費', '高校生等医療証'],
    eligibility: '高校生相当年齢までで、豊島区に住所を有し、健康保険に加入している児童が対象です。保護者の所得制限はありません。生活保護、児童福祉施設等への措置入所、里親委託などは対象外です。',
    applicationPeriod: '随時。出生日または転入日の翌日から2か月以内の申請は出生日または転入日まで遡及',
    description: '豊島区が、高校生相当年齢までの児童に医療証を交付し、医療機関で保険診療を受けたときの自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高校生相当年齢までの児童に医療証を交付し、医療機関で保険診療を受けたときの自己負担分を助成します。</p>'
      },
      {
        heading: '食事負担金',
        content: '<p>令和5年4月1日診療分から、入院時の食事負担金も乳幼児・子ども・高校生等医療証の対象者全てで助成対象です。現金給付申請が必要です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>原則として申請日から助成開始ですが、出生日または転入日の翌日から2か月以内に申請した場合は遡及されます。</p>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/261/kosodate/kosodate/teate-jose/015729.html',
    sourceName: '豊島区 子どもの医療費助成',
    sourceUrls: [
      'https://www.city.toshima.lg.jp/261/kosodate/kosodate/teate-jose/015729.html',
      'https://www.city.toshima.lg.jp/261/2404011400.html',
      'https://www.city.toshima.lg.jp/261/2404011442.html'
    ],
    sourceNote: '豊島区公式ページで制度概要、事業内容、助成を受ける方法、食事負担金、申請期限の考え方を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kita-child-medical',
    title: '北区 子ども医療費助成',
    organization: '北区',
    type: 'local',
    maxAmount: '高校生相当年齢まで保険診療の自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['北区', '子ども医療費', '高校生等'],
    eligibility: '北区に生活の本拠があり、日本の公的な健康保険に加入している高校生相当の年齢までの子どもが対象です。生活保護受給、児童福祉施設等入所、里親委託などは対象外です。',
    applicationPeriod: '随時。出生・転入などの事実発生日から3か月以内の申請なら出生・転入日に遡及',
    description: '北区が、健康保険の適用される医療について、保護者等が負担する自己負担額を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区に住所がある子どもが病院・薬局等で診療や投薬を受ける際に、健康保険の適用される医療について自己負担額を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>北区に生活の本拠があり、日本の公的な健康保険に加入している高校生相当年齢までの子どもが対象です。所得制限はありません。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>窓口、郵送、電子申請で申請できます。医療証の有効期間は毎年10月1日から9月30日までです。</p>'
      }
    ],
    officialUrl: 'https://www.city.kita.lg.jp/children-edu/childcare/1002909/1002913/1002914.html',
    sourceName: '北区 子ども医療費助成',
    sourceUrls: [
      'https://www.city.kita.lg.jp/children-edu/childcare/1002909/1002913/1002914.html',
      'https://www.city.kita.lg.jp/children-edu/childcare/1002909/1002913/1002915.html'
    ],
    sourceNote: '北区公式ページで概要、対象者、対象外、申請手続、資格日の扱いを確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'arakawa-child-medical',
    title: '荒川区 乳幼児・子ども・高校生等医療費助成',
    organization: '荒川区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['荒川区', '子ども医療費', '高校生等医療証'],
    eligibility: '荒川区に住民登録があり、国民健康保険または社会保険に加入している、18歳に達する日以後の最初の3月31日までの子どもが対象です。',
    applicationPeriod: '随時。出生・転入などの事実発生日から3か月以内の申請であれば出生・転入日に遡及',
    description: '荒川区が、18歳年度末までの子どもについて、健康保険を使って医療機関等にかかった場合の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>健康保険を使って医療機関、病院、診療所、薬局等にかかった場合、窓口で支払う自己負担分を助成します。</p>'
      },
      {
        heading: '対象年齢',
        content: '<p>乳幼児医療証、子ども医療証、高校生等医療証により、18歳に達する日以後の最初の3月31日までが対象です。所得制限はありません。</p>'
      },
      {
        heading: '対象外',
        content: '<p>健康保険未加入、生活保護、児童福祉施設等への措置入所、里親委託の場合は対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a035/kosodate/teate/iryohijyosei.html',
    sourceName: '荒川区 乳幼児・子ども・高校生等医療費助成',
    sourceUrls: ['https://www.city.arakawa.tokyo.jp/a035/kosodate/teate/iryohijyosei.html'],
    sourceNote: '荒川区公式ページで制度名、対象年齢、助成範囲、所得制限なし、遡及申請の扱いを確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'itabashi-child-medical',
    title: '板橋区 子ども医療費助成',
    organization: '板橋区',
    type: 'local',
    maxAmount: '18歳まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['板橋区', '子ども医療費', '高校生等'],
    eligibility: '板橋区に住民登録があり、出生から18歳になった日以降の最初の3月31日までで、国内の健康保険に加入している子どもが対象です。',
    applicationPeriod: '随時。出生・転入の場合は原則14日以内の申請で出生日・転入日に遡及',
    description: '板橋区が、0歳から18歳までの子どもについて、保険診療を受けた際の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子ども医療費助成は、0歳から18歳までの子どもが保険診療を受けた際の自己負担分を助成する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>板橋区に住民登録があり、国内の健康保険に加入している、18歳到達後最初の3月31日までの子どもが対象です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>出生・転入の場合は、原則として14日以内に申請すると出生日・転入日にさかのぼって資格が得られます。</p>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/kosodate/teate/iryohi/1053428/1053072.html',
    sourceName: '板橋区 子ども医療費助成',
    sourceUrls: [
      'https://www.city.itabashi.tokyo.jp/kosodate/teate/iryohi/1053428/1053072.html',
      'https://www.city.itabashi.tokyo.jp/kosodate/teate/iryohi/1053428/1053047.html'
    ],
    sourceNote: '板橋区公式ページで制度概要、対象者、助成範囲、資格開始日、申請方法を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-child-medical',
    title: '足立区 子ども医療費助成制度',
    organization: '足立区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['足立区', '子ども医療費', 'マル青'],
    eligibility: '足立区内に住民登録があり、健康保険に加入している、出生から高校生相当年齢までの子どもが対象です。保護者の所得制限はありません。',
    applicationPeriod: '随時。窓口または郵送で申請。固定締切なし',
    description: '足立区が、マル乳・マル子・マル青医療証により、高校生相当年齢までの子どもの保険診療自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子ども医療費助成制度として、保険診療の自己負担分を助成します。令和5年4月から高校生相当年齢まで対象が拡大されています。</p>'
      },
      {
        heading: '食事療養標準負担額',
        content: '<p>令和7年10月1日以降の入院分から、入院時の食事代も後日還付で助成対象に加わります。</p>'
      },
      {
        heading: '対象外',
        content: '<p>生活保護、児童福祉施設入所、里親委託、健康保険適用外費用、高額療養費・付加給付金相当分などは対象外または調整対象です。</p>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/oyako/k-kyoiku/kosodate/teate-iryohijose.html',
    sourceName: '足立区 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/oyako/k-kyoiku/kosodate/teate-iryohijose.html',
      'https://www.city.adachi.tokyo.jp/oyako/fukushi-kenko/shinshin/kodomoiryo-27shokuji.html'
    ],
    sourceNote: '足立区公式ページで対象者、所得制限なし、助成範囲、食事療養標準負担額の追加助成を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'katsushika-child-medical',
    title: '葛飾区 子どもの医療費助成',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['葛飾区', '子ども医療費', '高校生等医療証'],
    eligibility: '葛飾区内に住み、健康保険に加入している、高校3年生相当年齢までの児童を養育している方が対象です。生活保護、児童福祉施設入所、里親委託などは対象外です。',
    applicationPeriod: '随時。出生・転入等の対象者となった日から3か月以内に申請しなかった場合は申請日が資格取得日',
    description: '葛飾区が、乳幼児医療証、子ども医療証、高校生等医療証により、18歳年度末までの子どもの医療費自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>健康保険を使用して診療や調剤を受けた際の、健康保険適用による自己負担分を助成します。</p>'
      },
      {
        heading: '対象年齢',
        content: '<p>乳幼児、小・中学生、高校生等の区分で、18歳に達した日以後の最初の3月31日までの児童が対象です。保護者の所得制限はありません。</p>'
      },
      {
        heading: '対象外',
        content: '<p>入院時の食事療養標準負担額、健康保険適用外費用、高額療養費・付加給付金相当分などは対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kosodate/1000056/1002336/1002421.html',
    sourceName: '葛飾区 子どもの医療費助成',
    sourceUrls: ['https://www.city.katsushika.lg.jp/kosodate/1000056/1002336/1002421.html'],
    sourceNote: '葛飾区公式ページで制度名、対象年齢、所得制限なし、助成範囲、資格取得日の扱いを確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'edogawa-child-medical',
    title: '江戸川区 子ども医療費助成制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江戸川区', '子ども医療費', '高校生等'],
    eligibility: '江戸川区内に住んでいる高校3年生相当年齢までの子どもで、健康保険組合等の各種医療保険から医療に関する給付が行われる方が対象です。',
    applicationPeriod: '随時。出生、転入、生活保護廃止、施設退所等の事由発生日から3か月以内の申請で事由発生日から助成対象',
    description: '江戸川区が、高校3年生相当年齢までの子どもについて、保険診療の自己負担分、入院時の食事代、補装具などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子ども医療費助成制度として、保険診療の自己負担分、入院時の食事代、保険適用となった補装具などを助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>江戸川区内に住んでいる、高校3年生相当年齢までの子どもが対象です。保護者の所得制限はありません。</p>'
      },
      {
        heading: '対象外',
        content: '<p>健康保険適用外費用、高額療養費・付加給付金相当分、第三者行為、学校等管理下のけが、他制度対象疾病等は対象外または調整対象です。</p>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e049/kosodate/kosodate/teateshien/iryoujosei.html',
    sourceName: '江戸川区 子ども医療費助成制度',
    sourceUrls: ['https://www.city.edogawa.tokyo.jp/e049/kosodate/kosodate/teateshien/iryoujosei.html'],
    sourceNote: '江戸川区公式ページで対象年齢、所得制限なし、助成範囲、申請期限の考え方、対象外費用を確認。公式URLはHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nerima-child-medical',
    title: '練馬区 子ども医療費の助成',
    organization: '練馬区',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['練馬区', '子ども医療費', 'マル青'],
    eligibility: '健康保険に加入している練馬区内在住の高校生年代までの子どもが対象です。小学校就学前はマル乳、小中学生はマル子、中学校卒業後から高校生年代まではマル青を発行します。',
    applicationPeriod: '随時。出生・転入時は医療証交付申請が必要。払い戻し申請は医療費を支払った日の翌日から5年以内',
    description: '練馬区が、マル乳・マル子・マル青医療証により、高校生年代までの子どもの医療費自己負担分などを助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>健康保険適用の医療費の自己負担分、入院時食事療養標準負担額、他制度適用時の自己負担限度額などを助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>健康保険に加入している練馬区内在住の、18歳になった後の最初の3月31日までの子どもが対象です。保護者の所得制限はありません。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>出生・転入時は医療証交付申請が必要です。区から一律に申請用紙は送付されないため、原則として電子申請などで手続きします。</p>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/kosodatekyoiku/kodomo/teateiryo/josei.html',
    sourceName: '練馬区 子ども医療費の助成',
    sourceUrls: [
      'https://www.city.nerima.tokyo.jp/kosodatekyoiku/kodomo/teateiryo/josei.html',
      'https://www.city.nerima.tokyo.jp/kosodatekyoiku/kodomo/teateiryo/shinsei.html'
    ],
    sourceNote: '練馬区公式ページで対象年齢、助成範囲、所得制限なし、医療証申請、払い戻し申請期限を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mitaka-child-medical',
    title: '三鷹市 子どもの医療費助成制度',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['三鷹市', '子ども医療費', 'マル青'],
    eligibility: '公的医療保険に加入し、三鷹市に在住する18歳到達後最初の3月31日までの子どもが対象です。所得制限はありません。',
    applicationPeriod: '随時。医療証交付申請が必要。出生日または転入日の翌月までの申請は出生日または転入日から対象',
    description: '三鷹市が、18歳年度末までの子どもについて、健康保険が適用される医療費の自己負担分を通院・入院ともに助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>マル乳・マル子・マル青医療証により、健康保険が適用される医療費の自己負担分を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>三鷹市に在住し、公的医療保険に加入している、18歳到達後最初の3月31日までの子どもが対象です。所得制限はありません。</p>'
      },
      {
        heading: '対象外',
        content: '<p>健康保険適用外、入院時食事療養費、高額療養費・附加給付相当分、他公費医療対象分などは対象外または調整対象です。</p>'
      }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/001/001144.html',
    sourceName: '三鷹市 子どもの医療費助成制度',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/001/001144.html',
      'https://www.city.mitaka.lg.jp/c_service/097/097665.html'
    ],
    sourceNote: '三鷹市公式ページで制度概要、対象者、所得制限なし、資格開始日、払い戻し手続を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fuchu-child-medical',
    title: '府中市 子ども医療費助成',
    organization: '府中市',
    type: 'local',
    maxAmount: '高校等修了前まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['府中市', '子ども医療費', '高校生等'],
    eligibility: '府中市内に住み、住民基本台帳に記載されている高校等修了前までの子どもで、国民健康保険や各種社会保険の被保険者または被扶養者が対象です。',
    applicationPeriod: '随時。子育て応援課窓口、電子申請、郵送で医療証交付申請',
    description: '府中市が、高校等修了前までの子どもについて、健康保険診療でかかった医療費の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳幼児、義務教育就学児、高校生等について、健康保険診療でかかった医療費の自己負担分を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>府中市に住み、住民基本台帳に記載され、国民健康保険や各種社会保険に加入している高校等修了前までの子どもが対象です。</p>'
      },
      {
        heading: '対象外',
        content: '<p>高額療養費、入院時食事療養標準負担額、健康保険診療適用外の費用などは対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.fuchu.tokyo.jp/kosodate/shussan/teate_josei/kodomoiryoshokisettei.html',
    sourceName: '府中市 子ども医療費助成',
    sourceUrls: [
      'https://www.city.fuchu.tokyo.jp/kosodate/shussan/teate_josei/kodomoiryoshokisettei.html',
      'https://www.city.fuchu.tokyo.jp/kosodate/shussan/teate_josei/kodomoiryoshokisettei.files/zyosei05.pdf'
    ],
    sourceNote: '府中市公式ページと公式PDFで対象者、所得制限なし、高校生世代までの拡充、助成内容、対象外費用を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'musashino-child-medical',
    title: '武蔵野市 子どもの医療費助成制度',
    organization: '武蔵野市',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['武蔵野市', '子ども医療費', 'マル青'],
    eligibility: '武蔵野市内に住民登録があり、健康保険に加入している18歳の年度末までの子どもを養育している人が対象です。所得制限はありません。',
    applicationPeriod: '随時。出生・転入日から2か月以内の申請は出生・転入日に遡及。2か月経過後は申請日から開始',
    description: '武蔵野市が、18歳年度末までの子どもにマル乳・マル子・マル青医療証を交付し、保険診療の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都内の医療機関では、医療証とマイナ保険証または資格確認書を提示することで、保険診療分の窓口支払いが原則不要になります。</p>'
      },
      {
        heading: '対象者',
        content: '<p>武蔵野市内に住民登録があり、健康保険に加入している18歳年度末までの子どもを養育している人が対象です。所得制限はありません。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>都外受診、都外国民健康保険加入、医療証未使用時などは払い戻し申請を行います。</p>'
      }
    ],
    officialUrl: 'https://www.city.musashino.lg.jp/shussan_kodomo_kyoiku/kodomo_kosodate/teate_josei/kodomokatei/1006716.html',
    sourceName: '武蔵野市 子どもの医療費助成制度',
    sourceUrls: [
      'https://www.city.musashino.lg.jp/shussan_kodomo_kyoiku/kodomo_kosodate/teate_josei/kodomokatei/1006716.html',
      'https://www.city.musashino.lg.jp/shinseisho/shussan_kodomo_kyoiku/kosodateshien/1003759.html'
    ],
    sourceNote: '武蔵野市公式ページで対象者、所得制限なし、助成内容、開始日の扱い、払い戻し手続を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'machida-child-medical',
    title: '町田市 子どもの医療費助成制度',
    organization: '町田市',
    type: 'local',
    maxAmount: '高校生相当年齢まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['町田市', '子ども医療費', 'マル青'],
    eligibility: '町田市内在住で各種健康保険に加入する小学校就学前児童、小・中学生、高校生相当年齢の児童が対象です。保護者の所得制限はありません。',
    applicationPeriod: '随時。マル乳は出生・転入日から61日以内、マル子・マル青は転入日から61日以内の申請で該当日から資格開始',
    description: '町田市が、乳幼児医療費助成、義務教育就学児医療費助成、高校生等医療費助成により、子どもの保険診療自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>マル乳・マル子・マル青医療証により、保険診療の自己負担分を助成します。マル子・マル青の通院は1回200円を超える額が助成対象です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>町田市内在住で各種健康保険に加入している、小学校就学前から18歳年度末までの児童が対象です。保護者の所得制限はありません。</p>'
      },
      {
        heading: '対象外',
        content: '<p>保険適用外、入院時食事代、学校・園管理下で災害共済給付対象となる傷病などは対象外です。</p>'
      }
    ],
    officialUrl: 'https://kosodate-machida.tokyo.jp/mokuteki/2/4/kakusyuiryouhijyosei/index.html',
    sourceName: '町田市 各種医療費助成制度',
    sourceUrls: [
      'https://kosodate-machida.tokyo.jp/mokuteki/2/4/kakusyuiryouhijyosei/index.html',
      'https://kosodate-machida.tokyo.jp/soshiki/4/1/2/483.html',
      'https://kosodate-machida.tokyo.jp/soshiki/4/1/2/487.html',
      'https://kosodate-machida.tokyo.jp/soshiki/4/1/2/11199.html'
    ],
    sourceNote: '町田市公式子育てサイトでマル乳・マル子・マル青の対象、助成内容、所得制限なし、申請方法を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'machida-child-medical-aid',
    title: '町田市 子どもの医療費助成制度',
    organization: '町田市',
    type: 'local',
    maxAmount: '高校生相当年齢まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['町田市', 'こども医療費', '互換slug'],
    eligibility: '町田市内在住で各種健康保険に加入する小学校就学前児童、小・中学生、高校生相当年齢の児童が対象です。保護者の所得制限はありません。',
    applicationPeriod: '随時。マル乳は出生・転入日から61日以内、マル子・マル青は転入日から61日以内の申請で該当日から資格開始',
    description: '既存slug互換のため、町田市のマル乳・マル子・マル青医療証による子どもの医療費助成制度として公式確認済みデータで置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市公式サイトでは、乳幼児医療費助成、義務教育就学児医療費助成、高校生等医療費助成として案内されています。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>マル乳は保険診療の自己負担分、マル子・マル青は入院・調剤の自己負担額と、通院1回200円を超える額を助成します。</p>'
      },
      {
        heading: '互換slugの扱い',
        content: '<p>このページは既存URLを維持するための互換slugです。公式根拠は町田市の同一制度群です。</p>'
      }
    ],
    officialUrl: 'https://kosodate-machida.tokyo.jp/mokuteki/2/4/kakusyuiryouhijyosei/index.html',
    sourceName: '町田市 各種医療費助成制度',
    sourceUrls: [
      'https://kosodate-machida.tokyo.jp/mokuteki/2/4/kakusyuiryouhijyosei/index.html',
      'https://kosodate-machida.tokyo.jp/soshiki/4/1/2/483.html',
      'https://kosodate-machida.tokyo.jp/soshiki/4/1/2/487.html',
      'https://kosodate-machida.tokyo.jp/soshiki/4/1/2/11199.html'
    ],
    sourceNote: '町田市公式子育てサイトでマル乳・マル子・マル青の対象、助成内容、所得制限なし、申請方法を確認。同一制度群の互換slugとして採用。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hachioji-child-medical',
    title: '八王子市 子どものための医療費助成制度',
    organization: '八王子市',
    type: 'local',
    maxAmount: '高校生相当年齢まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['八王子市', '子ども医療費', 'マル青'],
    eligibility: '八王子市内在住で、国民健康保険または各種社会保険に加入する乳幼児、小・中学生、高校生相当年齢の子どもが対象です。所得制限はありません。',
    applicationPeriod: '随時。出生・転入・制度該当日から3か月以内の申請は該当日から資格開始。それ以外は申請月の初日から',
    description: '八王子市が、マル乳・マル子・マル青医療証により、子どもの保険診療自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳幼児医療費助成制度、義務教育就学児医療費助成制度、高校生等医療費助成制度により、保険診療の自己負担分を助成します。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>マル乳は保険診療の自己負担分、マル子・マル青は入院・調剤薬局・訪問看護を全額助成し、通院は1回200円を控除した額を助成します。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>出生・転入・制度該当日から3か月以内に申請した場合は該当日から資格開始となります。</p>'
      }
    ],
    officialUrl: 'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/268.html',
    sourceName: '八王子市 子どものための医療',
    sourceUrls: [
      'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/268.html',
      'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/267.html',
      'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/256.html',
      'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/2449.html'
    ],
    sourceNote: '八王子市公式子育て応援サイトでマル乳・マル子・マル青の対象、助成内容、申請方法、所得制限なしを確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hachioji-child-medical-aid',
    title: '八王子市 子どものための医療費助成制度',
    organization: '八王子市',
    type: 'local',
    maxAmount: '高校生相当年齢まで保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['八王子市', 'こども医療費', '互換slug'],
    eligibility: '八王子市内在住で、国民健康保険または各種社会保険に加入する乳幼児、小・中学生、高校生相当年齢の子どもが対象です。所得制限はありません。',
    applicationPeriod: '随時。出生・転入・制度該当日から3か月以内の申請は該当日から資格開始。それ以外は申請月の初日から',
    description: '既存slug互換のため、八王子市のマル乳・マル子・マル青医療証による子どものための医療費助成制度として公式確認済みデータで置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市公式サイトでは、乳幼児医療費助成制度、義務教育就学児医療費助成制度、高校生等医療費助成制度として案内されています。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>マル乳は保険診療の自己負担分、マル子・マル青は入院・調剤薬局・訪問看護を全額助成し、通院は1回200円を控除した額を助成します。</p>'
      },
      {
        heading: '互換slugの扱い',
        content: '<p>このページは既存URLを維持するための互換slugです。公式根拠は八王子市の同一制度群です。</p>'
      }
    ],
    officialUrl: 'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/268.html',
    sourceName: '八王子市 子どものための医療',
    sourceUrls: [
      'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/268.html',
      'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/267.html',
      'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/256.html',
      'https://kosodate.city.hachioji.tokyo.jp/soshiki/kosodateshienka/kosodateshienka_shomu_kyufu_jidoteatenyukotanto_hitorioyatanto/2449.html'
    ],
    sourceNote: '八王子市公式子育て応援サイトでマル乳・マル子・マル青の対象、助成内容、申請方法、所得制限なしを確認。同一制度群の互換slugとして採用。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chofu-child-medical',
    title: '調布市 子どもの医療費助成制度',
    organization: '調布市',
    type: 'local',
    maxAmount: '18歳年度末まで健康保険適用医療費の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['調布市', '子ども医療費', 'マル青'],
    eligibility: '調布市に住み、健康保険に加入している0歳から18歳に達する日以後最初の3月31日までの子どもを養育している保護者が対象です。',
    applicationPeriod: '随時。制度利用には医療証の交付申請が必要。払い戻し申請も可能',
    description: '調布市が、0歳から18歳年度末までの子どもの健康保険適用医療費の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>マル乳・マル子・マル青医療証により、健康保険適用の医療費の自己負担分を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>調布市に住み、健康保険に加入している0歳から18歳到達後最初の3月31日までの子どもを養育している保護者が対象です。</p>'
      },
      {
        heading: '払い戻し',
        content: '<p>医療証交付前の受診、東京都外の医療機関、医療証を提示できなかった場合などは、申請により払い戻しを受けます。</p>'
      }
    ],
    officialUrl: 'https://www.city.chofu.lg.jp/050030/p029008.html',
    sourceName: '調布市 子どもの医療費助成制度',
    sourceUrls: [
      'https://www.city.chofu.lg.jp/050030/p029008.html',
      'https://www.city.chofu.lg.jp/050030/p029012.html'
    ],
    sourceNote: '調布市公式ページで対象年齢、助成内容、対象者、払い戻し手続を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tachikawa-child-medical',
    title: '立川市 乳幼児・義務教育就学児・高校生等医療費助成制度',
    organization: '立川市',
    type: 'local',
    maxAmount: '高校生相当年齢まで健康保険適用医療費の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['立川市', '子ども医療費', 'マル青'],
    eligibility: '立川市に住民登録があり、健康保険に加入している乳幼児、義務教育就学児、高校生等が対象です。制度区分によりマル乳・マル子・マル青医療証を利用します。',
    applicationPeriod: '随時。制度利用には医療証の交付申請が必要。都外受診等は償還払い手続',
    description: '立川市が、乳幼児、義務教育就学児、高校生等の医療費について、健康保険適用の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳幼児医療費助成、義務教育就学児医療費助成、高校生等医療費助成により、子どもの医療費自己負担分を助成します。</p>'
      },
      {
        heading: '医療証',
        content: '<p>乳幼児はマル乳、義務教育就学児はマル子、高校生等はマル青医療証の対象です。</p>'
      },
      {
        heading: '償還払い',
        content: '<p>東京都外の医療機関で受診した場合など、医療証を使用できない場合は領収書を添付して償還払い申請を行います。</p>'
      }
    ],
    officialUrl: 'https://www.city.tachikawa.lg.jp/kosodate/m-kosodate/1004939/1004957/index.html',
    sourceName: '立川市 医療費助成制度',
    sourceUrls: [
      'https://www.city.tachikawa.lg.jp/kosodate/m-kosodate/1004939/1004957/index.html',
      'https://www.city.tachikawa.lg.jp/kosodate/m-kosodate/1004939/1004957/1004974.html',
      'https://www.city.tachikawa.lg.jp/kosodate/m-kosodate/1004939/1004957/1004966.html',
      'https://www.city.tachikawa.lg.jp/kosodate/m-kosodate/1004939/1004957/1004967.html'
    ],
    sourceNote: '立川市公式ページで医療費助成制度一覧、乳幼児・義務教育就学児・高校生等医療費助成、償還払い案内を確認。公式URLはすべてHTTP 200。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sumida-pregnancy-support-benefit',
    title: '墨田区 妊婦のための支援給付',
    organization: '墨田区',
    type: 'local',
    maxAmount: '妊娠時5万円＋出産後子ども1人あたり5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['墨田区', '妊婦支援給付', '出産子育て'],
    eligibility: '墨田区に住民登録があり、医療機関で胎児心拍が確認された妊婦等が対象です。旧制度の出産・子育て応援ギフトを同一妊娠で受給済みの場合は対象外となる場合があります。',
    applicationPeriod: '1回目は胎児心拍確認日から2年、2回目は出産予定日の8週前から2年',
    description: '墨田区が、妊娠期から出産後までの相談支援とあわせて、妊娠時と出産後の2回に分けて経済的支援を行う制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月以降の妊婦のための支援給付として、妊娠時と出産後に給付を行います。</p>' },
      { heading: '給付内容', content: '<p>1回目は現金5万円または電子クーポン5万円分、2回目はお子様1人あたり現金5万円または電子クーポン5万円分です。</p>' },
      { heading: '関連支援', content: '<p>妊婦面接「ゆりかご・すみだ」では育児パッケージ2万円分も案内されています。給付申請は区からの案内に沿って行います。</p>' }
    ],
    officialUrl: 'https://www.city.sumida.lg.jp/kenko_fukushi/kenko/oyako_kenko/syussan_junbi_class/skogift.html',
    sourceName: '墨田区 妊婦のための支援給付',
    sourceUrls: [
      'https://www.city.sumida.lg.jp/kenko_fukushi/kenko/oyako_kenko/syussan_junbi_class/skogift.html',
      'https://www.city.sumida.lg.jp/kenko_fukushi/kenko/oyako_kenko/ninshin/yurikagosumida.html'
    ],
    sourceNote: '墨田区公式ページで妊婦のための支援給付の1回目5万円、2回目子ども1人あたり5万円、申請期限、ゆりかご・すみだの育児パッケージ2万円分を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koto-pregnancy-childcare-benefit',
    title: '江東区 出産・子育て応援給付金',
    organization: '江東区',
    type: 'local',
    maxAmount: '妊婦1人あたり5万円＋子ども1人あたり5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江東区', '出産応援', '子育て応援'],
    eligibility: '令和7年4月1日時点で妊娠中、または令和7年4月1日以降に妊娠・出産し、申請日時点で江東区に住民登録がある方が対象です。',
    applicationPeriod: '1回目は胎児心拍確認日から2年、2回目は出産予定日の8週間前から2年',
    description: '江東区が、ゆりかご面接や新生児・産婦訪問と連携して、妊娠時と出産後に給付を行う制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊娠期から出産後までの相談支援と、出産・子育てに係る経済的支援を一体で行う制度です。</p>' },
      { heading: '給付額', content: '<p>出産前の1回目は妊婦1人あたり5万円、出産後の2回目はお子さん1人につき5万円です。</p>' },
      { heading: '申請方法', content: '<p>1回目はゆりかご面接後、2回目は新生児・産婦訪問時に渡される案内に沿って申請します。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/260501/kodomo/ninshinshussan/ninshin/97552.html',
    sourceName: '江東区 出産・子育て応援給付金',
    sourceUrls: ['https://www.city.koto.lg.jp/260501/kodomo/ninshinshussan/ninshin/97552.html'],
    sourceNote: '江東区公式ページで1回目妊婦1人あたり5万円、2回目子ども1人につき5万円、対象要件、申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinagawa-pregnancy-support-benefit',
    title: '品川区 妊婦のための支援給付事業',
    organization: '品川区',
    type: 'local',
    maxAmount: '妊娠時5万円＋出産後子ども1人あたり5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['品川区', '妊婦支援給付', '出産子育て'],
    eligibility: '令和7年4月1日以降に妊婦給付認定申請をした方、出産した方等が対象です。旧制度の出産・子育て応援ギフトとの重複受給はできません。',
    applicationPeriod: '区の案内に沿って申請。旧出産応援ギフトは妊娠中申請のため受付終了',
    description: '品川区が、令和7年4月以降の新制度として、妊娠時と出産後に妊婦支援給付を行う制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月1日以降は、旧出産・子育て応援ギフトではなく妊婦のための支援給付事業が対象になります。</p>' },
      { heading: '給付内容', content: '<p>妊娠時支援給付は5万円、出産後支援給付は子どもの数に応じた5万円相当の支援です。</p>' },
      { heading: '注意点', content: '<p>令和6年度までの出産・子育て応援ギフトは対象期間と申請期限が別に定められており、現行制度と重複して受けることはできません。</p>' }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/PC/kodomo/kodomo-ninnshinn/20230120091157.html',
    sourceName: '品川区 妊婦のための支援給付事業',
    sourceUrls: [
      'https://www.city.shinagawa.tokyo.jp/PC/kodomo/kodomo-ninnshinn/20230120091157.html',
      'https://www.city.shinagawa.tokyo.jp/PC/kuseizyoho/kuseizyoho-koho/kuseizyoho-koho-kohoshinagawa/webkohoshi/070221html/shina_20250221_05_02.html'
    ],
    sourceNote: '品川区公式ページと広報しながわで令和7年4月以降の妊婦のための支援給付、妊娠時5万円、出産後子ども1人あたり5万円相当、旧制度の取扱いを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'meguro-pregnancy-support-benefit',
    title: '目黒区 妊婦のための支援給付',
    organization: '目黒区',
    type: 'local',
    maxAmount: '妊娠時5万円＋出産後子ども1人あたり5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['目黒区', '妊婦支援給付', 'ゆりかご'],
    eligibility: '目黒区に住民登録があり、医療機関で胎児心拍が確認された妊婦等が対象です。流産・死産等の場合も要件を満たせば対象になります。',
    applicationPeriod: '区の案内に沿って申請。妊娠時と出産後の2回',
    description: '目黒区が、妊娠時と出産後の2回に分けて妊婦支援給付金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊婦のための支援給付として、妊娠時と出産後に妊婦支援給付金を支給します。</p>' },
      { heading: '給付内容', content: '<p>妊娠時は5万円、出産後は子ども1人あたり5万円が基本です。令和8年4月1日より現金給付が案内されています。</p>' },
      { heading: '関連支援', content: '<p>ゆりかご・めぐろの妊婦面接では育児パッケージ1万円分と妊婦支援給付金の申請案内が渡されます。</p>' }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/hokenyobou/kosodatekyouiku/ninshin/ninpunotameno_sienkyuhu.html',
    sourceName: '目黒区 妊婦のための支援給付',
    sourceUrls: [
      'https://www.city.meguro.tokyo.jp/hokenyobou/kosodatekyouiku/ninshin/ninpunotameno_sienkyuhu.html',
      'https://www.city.meguro.tokyo.jp/chiikihoken/kosodatekyouiku/ninshin/syussannkosodate.html'
    ],
    sourceNote: '目黒区公式ページで妊娠時・出産後の2回給付、令和8年4月1日以降の現金給付、ゆりかご・めぐろの育児パッケージ1万円分と申請案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-pregnancy-support-benefit',
    title: '大田区 妊婦のための支援給付',
    organization: '大田区',
    type: 'local',
    maxAmount: '妊娠時5万円＋出産時胎児の数×5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['大田区', '妊婦支援給付', '妊婦面接'],
    eligibility: '大田区で妊婦面接やすこやか赤ちゃん訪問を受け、同一妊娠で旧制度や他自治体の妊婦支援給付を受けていない妊産婦が対象です。',
    applicationPeriod: '妊婦面接後およびすこやか赤ちゃん訪問後の案内に沿って申請',
    description: '大田区が、妊娠時と出産時の2回に分けて妊婦本人名義の口座へ給付金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊娠時・出産時の2回に分けて給付金を支給します。</p>' },
      { heading: '給付内容', content: '<p>妊娠時は5万円、出産時は胎児の数×5万円です。妊産婦本人名義の金融機関口座へ振り込まれます。</p>' },
      { heading: '関連支援', content: '<p>妊婦面接を受けた方には大田区子育て応援ギフト1万円相当も案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/kodomo/shussan/ninpunotamenosienkyuhu.html',
    sourceName: '大田区 妊婦のための支援給付',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/seikatsu/kodomo/shussan/ninpunotamenosienkyuhu.html',
      'https://www.city.ota.tokyo.jp/seikatsu/kodomo/shussan/karugamo.html'
    ],
    sourceNote: '大田区公式ページで妊娠時5万円、出産時は胎児の数×5万円、本人名義口座への振込、妊婦面接時の子育て応援ギフト1万円相当を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shibuya-pregnancy-support-benefit',
    title: '渋谷区 妊婦支援給付金',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '妊婦1人あたり5万円＋胎児1人につき5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['渋谷区', '妊婦支援給付', '出産子育て'],
    eligibility: '渋谷区内に住所を有し、妊婦給付認定を受けた妊婦が対象です。流産・死産等により妊娠が継続できなかった場合も対象となります。',
    applicationPeriod: '1回目は妊娠確認日から2年間、2回目は出産予定日の8週間前から2年間',
    description: '渋谷区が、令和7年4月から妊婦の身体的・精神的・経済的負担を軽減するために支給する給付金です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊婦支援給付金として、妊娠時の1回目と出産後に向けた胎児数届出後の2回目を支給します。</p>' },
      { heading: '給付内容', content: '<p>1回目は妊婦1人あたり5万円、2回目は妊娠している胎児1人につき5万円です。現金または同額相当のギフトを選択できます。</p>' },
      { heading: '申請方法', content: '<p>妊娠届出後に送付される案内、または出産予定日の翌月下旬頃までに送付される案内に沿って申請します。</p>' }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/ninpu_kyuhu.html',
    sourceName: '渋谷区 妊婦支援給付金',
    sourceUrls: ['https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/ninpu_kyuhu.html'],
    sourceNote: '渋谷区公式ページで1回目の妊婦1人あたり5万円、2回目の胎児1人につき5万円、申請期限、対象者を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-pregnancy-support-benefit',
    title: '杉並区 妊婦のための支援給付',
    organization: '杉並区',
    type: 'local',
    maxAmount: '妊娠時5万円＋子どもの数に応じて5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['杉並区', '妊婦支援給付', 'ゆりかご'],
    eligibility: '申請日時点で杉並区内に住所を有し、産科医療機関等で胎児心拍が確認された妊産婦が対象です。',
    applicationPeriod: 'ゆりかご面接後およびすこやか赤ちゃん訪問後の案内に沿って申請',
    description: '杉並区が、杉並区出産・子育て応援事業として妊娠時と出産時の2回に分けて給付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊婦給付認定を受けた方に、妊婦支援給付金を妊娠時と出産時の2回に分けて支給します。</p>' },
      { heading: '給付内容', content: '<p>妊娠時は妊娠に対して5万円、出産時は妊娠している子どもの数に応じて5万円です。</p>' },
      { heading: '申請方法', content: '<p>妊娠時はゆりかご面接後、出産時はすこやか赤ちゃん訪問後に渡される案内から申請します。</p>' }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s054/1125.html',
    sourceName: '杉並区 妊婦のための支援給付',
    sourceUrls: ['https://www.city.suginami.tokyo.jp/s054/1125.html'],
    sourceNote: '杉並区公式ページで妊娠時5万円、出産時は子どもの数に応じて5万円、対象者、申請方法を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kita-pregnancy-support-benefit',
    title: '北区 妊婦のための支援給付',
    organization: '北区',
    type: 'local',
    maxAmount: '妊婦1人につき5万円＋子ども1人につき5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['北区', '妊婦支援給付', '出産子育て'],
    eligibility: '申請時点で北区に住民登録があり、2025年4月1日以降に妊婦で、医療機関で胎児心拍を確認された方が対象です。',
    applicationPeriod: '1回目は胎児心拍確認日から2年間、2回目は出産予定日の8週間前の日から2年間',
    description: '北区が、妊娠期から出産・子育てまでの切れ目ない相談支援と経済的給付を一体的に実施する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月から、妊婦のための支援給付事業として相談支援と経済的給付を実施しています。</p>' },
      { heading: '給付内容', content: '<p>1回目は妊婦1人につき現金5万円、2回目は子ども（胎児）1人につき現金5万円です。希望により東京都ギフトカード5万ポイントを選べる場合があります。</p>' },
      { heading: '申請方法', content: '<p>1回目ははぴママたまご面接時、2回目は出産後の赤ちゃん訪問時に電子申請用二次元コードが案内されます。</p>' }
    ],
    officialUrl: 'https://www.city.kita.lg.jp/children-edu/pregnancy/1002777/1002795.html',
    sourceName: '北区 妊婦のための支援給付',
    sourceUrls: ['https://www.city.kita.lg.jp/children-edu/pregnancy/1002777/1002795.html'],
    sourceNote: '北区公式ページで対象者、1回目妊婦1人につき現金5万円、2回目子ども1人につき現金5万円、申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nerima-third-child-birth-gift',
    title: '練馬区 第3子誕生祝金',
    organization: '練馬区',
    type: 'local',
    maxAmount: '第3子以降の出生児1人につき10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['練馬区', '第3子', '誕生祝金'],
    eligibility: '練馬区内に住所を有し、第3子以降の子を出生した保護者で、対象児童と同居・養育している父または母が対象です。住民登録期間などの要件があります。',
    applicationPeriod: '出生後、区の案内に従い申請。転入後要件を満たしてから申請できる場合あり',
    description: '練馬区が、第3子以降のお子さんが生まれた家庭に対して、児童1人につき10万円を支給する区独自の祝金です。',
    sections: [
      { heading: '制度の概要', content: '<p>第3子以降のお子さんの誕生を祝い、多子世帯の子育てを支援する制度です。</p>' },
      { heading: '支給金額', content: '<p>第3子以降の出生した児童1人につき10万円です。旧生成データにあった20万円ではありません。</p>' },
      { heading: '対象要件', content: '<p>保護者と児童の住民登録期間、対象児童との同居・養育、引き続き居住する意思などの要件があります。</p>' }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/kosodatekyoiku/shussan/iwaikin.html',
    sourceName: '練馬区 第3子誕生祝金',
    sourceUrls: ['https://www.city.nerima.tokyo.jp/kosodatekyoiku/shussan/iwaikin.html'],
    sourceNote: '練馬区公式ページで第3子以降の出生児1人につき10万円、支給対象、住民登録期間要件を確認。旧データの20万円は誤りとして補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'katsushika-pregnancy-support-benefit',
    title: '葛飾区 妊婦支援給付金給付事業',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '妊婦1人あたり5万円＋子ども1人あたり5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['葛飾区', '妊婦支援給付', '出産子育て'],
    eligibility: '申請・届出日時点で葛飾区民である妊婦等が対象です。同一の妊娠により旧出産・子育て応援ギフトや他自治体の同事業給付を受けた方は対象外となる場合があります。',
    applicationPeriod: '1回目は胎児心拍確認日から2年間、2回目は出産予定日の8週前から2年間',
    description: '葛飾区が、旧出産・子育て応援ギフトから移行して実施する妊婦支援給付金の制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月1日から、妊婦給付認定申請と胎児の数の届出により経済的支援を行います。</p>' },
      { heading: '給付内容', content: '<p>妊婦給付認定後は妊婦さん1人あたり現金5万円、届出受付後はお子さん1人あたり現金5万円です。現金に代わりクーポン給付も選べます。</p>' },
      { heading: '旧制度との違い', content: '<p>旧出産・子育て応援ギフトは令和8年3月30日で申請受付終了済みのため、現行制度は妊婦支援給付金として扱います。</p>' }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kenkou/1000050/1001803/1037742.html',
    sourceName: '葛飾区 妊婦支援給付金給付事業',
    sourceUrls: [
      'https://www.city.katsushika.lg.jp/kenkou/1000050/1001803/1037742.html',
      'https://www.city.katsushika.lg.jp/kenkou/1000050/1001803/index.html'
    ],
    sourceNote: '葛飾区公式ページで現行の妊婦支援給付金、妊婦1人あたり5万円、子ども1人あたり5万円、旧出産・子育て応援ギフトの受付終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'edogawa-pregnancy-support-benefit',
    title: '江戸川区 妊婦のための支援給付事業',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '妊娠時5万円＋出産後5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江戸川区', '妊婦支援給付', '出産子育て'],
    eligibility: '令和7年4月1日以降にぴよママ相談を受けた方など、医師による胎児心拍の確認を含む区の要件を満たす妊産婦が対象です。',
    applicationPeriod: '区の案内に沿って申請。妊娠時と出産後の2回',
    description: '江戸川区が、令和7年4月1日より妊婦等包括相談支援事業と一体的に実施する妊婦のための支援給付です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊娠期から子育て期にわたる切れ目ない相談支援と、出産や子育てに係る費用の一部支援を一体的に実施します。</p>' },
      { heading: '給付内容', content: '<p>1回目は妊娠時5万円、2回目は出産後5万円です。現金またはギフトカードでの給付が案内されています。</p>' },
      { heading: '申請時の注意', content: '<p>給付には医師による胎児心拍の確認が必要です。旧出産・子育て応援給付金は新制度に移行しています。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e052/kosodate/ninshin/kohukin/ninpunokyuhu.html',
    sourceName: '江戸川区 妊婦のための支援給付事業',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e052/kosodate/ninshin/kohukin/ninpunokyuhu.html',
      'https://www.city.edogawa.tokyo.jp/kosodate/ninshin/index.html'
    ],
    sourceNote: '江戸川区公式ページで令和7年4月1日からの妊婦のための支援給付、1回目妊娠時5万円、2回目出産後5万円、胎児心拍確認要件、新制度移行を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-birth-preparation-allowance',
    title: '千代田区 誕生準備手当',
    organization: '千代田区',
    type: 'local',
    maxAmount: '1妊娠につき45,000円',
    maxAmountNum: 4.5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['千代田区', '誕生準備手当', '妊娠'],
    eligibility: '千代田区内在住で妊娠20週以後の方が対象です。お子さんが生まれている場合は1歳の誕生日の前日まで申請できます。',
    applicationPeriod: '妊娠20週以後から、出生後は1歳の誕生日の前日まで',
    description: '千代田区が、妊娠20週以後の方に1妊娠につき45,000円を支給する区独自の手当です。',
    sections: [
      { heading: '制度の概要', content: '<p>次世代育成手当のうち、妊娠第20週以降の方を対象にした誕生準備手当です。</p>' },
      { heading: '手当額', content: '<p>手当額は1妊娠につき45,000円です。旧生成データにあった最大45万円ではありません。</p>' },
      { heading: '必要書類', content: '<p>母子手帳、支給対象者本人名義の振込口座内容がわかるもの、印鑑などが案内されています。</p>' }
    ],
    officialUrl: 'https://faq.city.chiyoda.lg.jp/faq.asp?faqno=FAQ00030&sugtype=-1',
    sourceName: '千代田区 誕生準備手当 FAQ',
    sourceUrls: [
      'https://faq.city.chiyoda.lg.jp/faq.asp?faqno=FAQ00030&sugtype=-1',
      'https://www.city.chiyoda.lg.jp/koho/kosodate/kosodate/ninshin/ninpu-shienkyufu.html'
    ],
    sourceNote: '千代田区公式FAQで誕生準備手当は1妊娠につき45,000円、対象は妊娠20週以後、出生後は1歳の誕生日の前日までと確認。旧データの最大45万円は誤りとして補正。あわせて現行の妊婦支援給付金ページも確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
];
