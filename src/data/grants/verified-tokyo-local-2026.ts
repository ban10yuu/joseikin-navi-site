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
      'https://www.city.musashino.lg.jp/shussan_kodomo_kyoiku/kodomo_kosodate/teate_josei/kokosei/1016667.html'
    ],
    sourceNote: '武蔵野市公式ページで高等学校等修学給付金、5万円、申請期限2025年9月15日を確認。令和8年度募集未確認のため期限切れ扱い。令和7年度案内PDFは2026年7月1日のリンク監査で404となったため出典URLから除外。',
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
      'https://www.city.minato.tokyo.jp/gakkouuneishien/kodomo/gakko/syougaku/'
    ],
    sourceNote: '港区公式で海外留学支援事業、奨学金情報を確認したが、海外留学専用奨学金は確認できず、掲載停止日を期限切れ判定に使用。旧イベントURLが404となったため、到達可能な公式URLのみを参照先に残した。',
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
    slug: 'ota-birth-bonus',
    title: '大田区 妊婦のための支援給付（既存slugに統合）',
    organization: '大田区',
    type: 'local',
    maxAmount: 'ota-pregnancy-support-benefitに統合',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['大田区', '妊婦支援給付', '重複候補'],
    eligibility: '現行制度は妊娠時5万円、出産時は胎児の数×5万円を支給する「妊婦のための支援給付」です。通常掲載は既存の ota-pregnancy-support-benefit に統合します。',
    applicationPeriod: '重複候補。ota-pregnancy-support-benefitに統合し通常一覧から除外',
    deadlineDate: '2026-07-02',
    description: '生成データの「出産・子育て応援交付金」は、現行公式制度では「妊婦のための支援給付」として確認できます。既に ota-pregnancy-support-benefit で公式確認済みとして掲載しているため、このslugは重複回避のため通常一覧から除外します。',
    sections: [
      {
        heading: '重複整理',
        content: '<p>大田区の現行制度は妊婦のための支援給付で、妊娠時5万円、出産時は胎児の数×5万円を支給します。正規掲載は既存slugに統合します。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/kodomo/shussan/ninpunotamenosienkyuhu.html',
    sourceName: '大田区 妊婦のための支援給付',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/seikatsu/kodomo/shussan/ninpunotamenosienkyuhu.html',
      'https://www.city.ota.tokyo.jp/seikatsu/kodomo/shussan/karugamo.html'
    ],
    sourceNote: '大田区公式ページで妊娠時5万円、出産時は胎児の数×5万円、妊産婦本人名義口座への振込、妊婦面接時の子育て応援ギフト1万円相当を確認。既存の ota-pregnancy-support-benefit に統合し、重複slugは期限切れ扱いで通常一覧から除外。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-childcare-subsidy',
    title: '大田区 物価高対応子育て応援手当（受付終了）',
    organization: '大田区',
    type: 'local',
    maxAmount: 'こども1人につき2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['大田区', '子育て応援', '物価高騰対策'],
    eligibility: '0歳から高校生年代までのこどもを養育する方が対象です。令和7年9月30日時点で大田区に住民登録がある児童手当受給者、令和7年10月1日から令和8年3月31日までに出生した児童の児童手当受給者等、区の要件に該当する方が対象でした。',
    applicationPeriod: '令和8年2月1日から令和8年3月31日までに出生した児童の申請期限は2026年6月30日。受付終了',
    deadlineDate: '2026-06-30',
    description: '大田区が、物価高騰対策として0歳から高校生年代までのこども1人につき2万円を支給した手当です。生成データの「子育て応援給付金・5万円」は公式の現行内容と異なるため、公式制度名・支給額・受付終了状況へ補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>国の総合経済対策を踏まえ、0歳から高校生年代までのこども1人につき2万円を支給する手当です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>支給額は対象児童1人につき2万円です。生成データの5万円表記は公式ページで確認できる金額に補正しました。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年2月1日から令和8年3月31日までに出生した児童の申請期限は2026年6月30日です。令和8年1月31日までに出生した児童の申請受付も終了しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/kodomo/teate/jidouteate/r7bukkadakataiouteate.html',
    sourceName: '大田区 物価高対応子育て応援手当',
    sourceUrls: ['https://www.city.ota.tokyo.jp/seikatsu/kodomo/teate/jidouteate/r7bukkadakataiouteate.html'],
    sourceNote: '大田区公式ページで制度名、0歳から高校生年代までのこども1人につき2万円、対象児童、申請期限2026年6月30日、受付終了状況を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-disability-medical',
    title: '大田区 心身障害者（児）医療費の助成（マル障受給者証）',
    organization: '大田区',
    type: 'local',
    maxAmount: '保険診療の自己負担分を助成（一部負担金あり）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['大田区', '心身障害者医療費', 'マル障'],
    eligibility: '身体障害者手帳1級・2級の方、内部障がい3級等の方、愛の手帳1度・2度の方、精神障害者保健福祉手帳1級の方などが対象です。所得や年齢、他制度との関係により対象外となる場合があります。',
    applicationPeriod: '通年受付',
    description: '大田区で、重度の心身障がいのある方が医療機関で診療・投薬を受けたとき、医療保険の自己負担分からマル障一部負担金を差し引いた額を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>マル障受給者証により、保険診療の自己負担分から一部負担金を差し引いた額を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>身体障害者手帳1級・2級、愛の手帳1度・2度、精神障害者保健福祉手帳1級の方などが対象です。内部障がいの一部も対象に含まれます。</p>'
      },
      {
        heading: '一部負担金',
        content: '<p>住民税課税者は1割負担で、外来等は月18,000円・年間144,000円などの上限があります。住民税非課税者は入院時食事代のみが負担として案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/fukushi/shougai/iryo/iryou/shinshin.html',
    sourceName: '大田区 心身障害者（児）医療費の助成（マル障受給者証）',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/seikatsu/fukushi/shougai/iryo/iryou/shinshin.html',
      'https://www.city.ota.tokyo.jp/seikatsu/fukushi/shougai/iryo/iryou/index.html'
    ],
    sourceNote: '大田区公式ページで対象者、助成範囲、住民税課税者・非課税者の一部負担金、助成方法、申請窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-elderly-support',
    title: '大田区 地域のボランティアの食事サービス',
    organization: '大田区・大田区社会福祉協議会',
    type: 'local',
    maxAmount: '1食400円から700円',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['大田区', '高齢者', '食事サービス', '見守り'],
    eligibility: '大田区内に住所を有し、おおむね65歳以上の高齢者または心身に何らかの障がいのある方で、本人または同居親族等が病弱・心身の支障により安定した食生活ができない方が対象です。',
    applicationPeriod: '通年。詳細は大田区社会福祉協議会へ相談',
    description: '大田区の地域ボランティアが、食事の支度が困難な高齢者や障がいのある方に定期的に食事を届けるサービスです。生成データの「高齢者見守り・生活支援事業」は、公式確認できる食事サービスとして補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>食事の支度をすることが困難な高齢者や障がいのある方に、地域ボランティアが定期的に食事を届けます。</p>'
      },
      {
        heading: '利用料金',
        content: '<p>利用料金は1食400円から700円で、各ボランティアにより異なります。利用回数も実施団体により異なります。</p>'
      },
      {
        heading: '相談先',
        content: '<p>サービス内容の詳細は大田区社会福祉協議会へ確認します。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/fukushi/kourei/kurashi/boranteia.html',
    sourceName: '大田区 地域のボランティアの食事サービス',
    sourceUrls: ['https://www.city.ota.tokyo.jp/seikatsu/fukushi/kourei/kurashi/boranteia.html'],
    sourceNote: '大田区公式ページで食事サービスの対象者、1食400円から700円、利用回数がボランティアにより異なること、大田区社会福祉協議会への問い合わせ先を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-nursing-equipment',
    title: '大田区 紙おむつ等の支給',
    organization: '大田区',
    type: 'local',
    maxAmount: '毎月500点の範囲内で紙おむつ等を選択。持込不可の病院ではおむつ代助成あり',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['大田区', '紙おむつ', '介護用品'],
    eligibility: '大田区内に住民登録して現に居住し、失禁のため紙おむつを必要とする方のうち、要介護3から5の認定を受けた方、要介護1・2で医師が必要と認めた方、または65歳以上で入院中かつ相当状態にある方等が対象です。',
    applicationPeriod: '通年受付。毎月10日までの申請は当月から、11日以降は翌月から開始',
    description: '大田区が、おむつを必要とする高齢者等に紙おむつ等を支給し、高齢者と介護家族の経済的・精神的負担を軽減する制度です。紙おむつを使用できない病院に入院している方には、おむつ代助成もあります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>おむつを必要とする高齢者等に対し、紙おむつ等を支給します。区が支給する紙おむつを使用できない病院に入院している方に限り、おむつ代助成も行います。</p>'
      },
      {
        heading: '対象者',
        content: '<p>要介護3から5の認定を受けた方、要介護1・2で医師が紙おむつを必要と認めた方、65歳以上で入院中かつ相当状態にある方などが対象です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>カタログの中から毎月500点の範囲内で自由に選択できます。点数を超えた分は自己負担になります。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/fukushi/kourei/kyufu/kamiomutu.html',
    sourceName: '大田区 紙おむつ等の支給',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/seikatsu/fukushi/kourei/kyufu/kamiomutu.html',
      'https://www.city.ota.tokyo.jp/seikatsu/fukushi/shougai/seikatsushien/otetsudai/otetsudai/kamiomutsu.html'
    ],
    sourceNote: '大田区公式ページで高齢者向け紙おむつ等の支給、対象者、毎月500点の範囲、おむつ代助成、障がい者向け紙おむつ支給事業との関係を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-scholarship',
    title: '大田区 奨学金貸付制度（大学等・令和8年度募集終了）',
    organization: '大田区',
    type: 'local',
    maxAmount: '国公立月額3万5,000円以内、私立月額4万4,000円以内（無利子貸付）',
    maxAmountNum: 52.8,
    category: 'education',
    prefecture: '東京都',
    tags: ['大田区', '奨学金', '貸付', '募集終了'],
    eligibility: '大学、短期大学、専修学校専門課程に在学または進学する方で、経済的理由により就学が困難で、貸付開始日に引き続き1年以上大田区内に居住する保護者等から扶養されている方等が対象です。',
    applicationPeriod: '令和8年度在学生・進学予定者向け募集は終了',
    deadlineDate: '2026-06-09',
    description: '大田区が、大学・短期大学・専修学校専門課程に在学または進学する方へ無利子で奨学金を貸し付ける制度です。生成データの返済不要給付型・月額2万5千円ではなく、公式確認できる貸付型奨学金として補正しました。令和8年度募集は終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>経済的理由により大学等での就学が困難な方に、無利子で奨学金を貸し付ける制度です。</p>'
      },
      {
        heading: '貸付額',
        content: '<p>令和8年度在学生募集では、国公立は月額35,000円以内、私立は月額44,000円以内です。月額奨学金は通常3か月分ずつ年4回振り込まれます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度の申込受付期間は終了しています。貸付型のため、卒業後に返還義務があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/seikatsu/kodomo/kashitsuke_kyuhu/syougakukin-kashitsuke.html',
    sourceName: '大田区 奨学金貸付制度(大学等)',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/seikatsu/kodomo/kashitsuke_kyuhu/syougakukin-kashitsuke.html',
      'https://www.city.ota.tokyo.jp/seikatsu/kodomo/kashitsuke_kyuhu/ootakushougakusei_r05.html',
      'https://www.city.ota.tokyo.jp/seikatsu/kodomo/kashitsuke_kyuhu/daigakusingaku.html',
      'https://www.city.ota.tokyo.jp/seikatsu/kodomo/kashitsuke_kyuhu/koukoukyuuhu.html'
    ],
    sourceNote: '大田区公式ページで奨学金貸付制度、令和8年度募集終了、在学生募集の貸付月額、進学予定者募集の募集終了日、給付型奨学金は貸付型と同時申込が必要であること、高校等進学準備給付型奨学金の募集終了を確認。',
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
    maxAmount: '高断熱窓 最大375万円、省エネエアコン1台最大5万円、省エネ冷蔵庫最大5万円等',
    maxAmountNum: 375,
    category: 'housing',
    prefecture: '東京都',
    tags: ['荒川区', '省エネ住宅', 'エコ助成', '省エネエアコン', '省エネ冷蔵庫'],
    eligibility: '荒川区内の対象機器等を設置した住宅に居住する個人、集合住宅所有者、管理組合等が対象です。',
    applicationPeriod: '令和8年5月1日から令和9年2月26日まで。予算到達で終了',
    deadlineDate: '2027-02-26',
    description: '荒川区が、住宅や集合住宅への太陽光発電、高断熱窓・ドア、断熱材、省エネエアコン、省エネ冷蔵庫などの導入を支援する令和8年度のエコ助成事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内住宅等で省エネ・再エネ設備を導入する費用の一部を助成する制度です。</p>'
      },
      {
        heading: '主な助成額',
        content: '<p>個人は太陽光上限30万円、高断熱窓・ドア上限15万円、断熱材上限20万円、省エネエアコン1台上限5万円、省エネ冷蔵庫上限5万円等。集合住宅では高断熱窓上限375万円等が確認できます。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度ページで受付期間と予算到達時終了を確認しています。申請前に対象機器、施工時期、予算残額を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a024/kankyou/ekojyosei.html',
    sourceName: '荒川区 令和8年度エコ助成事業',
    sourceUrls: ['https://www.city.arakawa.tokyo.jp/a024/kankyou/ekojyosei.html'],
    sourceNote: '荒川区公式ページで令和8年度エコ助成事業、受付期間、個人・集合住宅向け助成額、省エネエアコン・省エネ冷蔵庫の助成額を確認。',
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
    slug: 'kodaira-education-scholarship',
    title: '小平市 就学援助制度（令和8年度）',
    organization: '小平市',
    type: 'local',
    maxAmount: '学用品費・給食費・修学旅行費等',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['小平市', '就学援助', '教育支援'],
    eligibility: '小平市内に在住し、国立・都立・公立の小中学校に在学する児童生徒の保護者で、世帯所得が準要保護の認定基準に該当する方などが対象です。',
    targetOccupation: '小中学生の保護者',
    applicationPeriod: '令和8年度制度。年度途中の申請可、認定時期により支給対象月が変わる場合あり',
    description: '小平市が、経済的理由で学用品費や校外活動費などの支払いが困難な家庭に、就学に必要な費用を援助する令和8年度制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>経済的な理由で小中学校の就学費用の支払いに困っている家庭を対象に、学用品費や学校給食費などを援助します。</p>'
      },
      {
        heading: '援助内容',
        content: '<p>学用品費、通学用品費、学校給食費、校外活動費、修学旅行費、新入学児童生徒学用品費、医療費、通学費、オンライン学習通信費などが案内されています。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>在学する学校へ申請書類を提出します。国立、都立または小平市外の公立小中学校に在学している場合は学務課へ提出します。</p>'
      }
    ],
    officialUrl: 'https://www.city.kodaira.tokyo.jp/kurashi/111/111531.html',
    sourceName: '小平市 就学援助制度（令和8年度）',
    sourceUrls: ['https://www.city.kodaira.tokyo.jp/kurashi/111/111531.html'],
    sourceNote: '小平市公式ページで令和8年度就学援助、対象者、援助内容、提出先を確認。金額は費目別のため最大額は設定していない。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-afterschool',
    title: '昭島市 放課後子ども教室',
    organization: '昭島市',
    type: 'local',
    maxAmount: '保険料等負担金500円で利用',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['昭島市', '放課後', '子どもの居場所'],
    eligibility: '昭島市立小学校等で放課後子ども教室に登録する児童が対象です。学童クラブのような保育ではなく、放課後の安全な居場所提供事業です。',
    targetOccupation: '小学生・保護者',
    applicationPeriod: '通年。学校ごとの開設日・受付状況による',
    description: '昭島市が小学校の校庭等を活用し、放課後の児童に安全・安心な居場所を提供する事業です。登録票の提出と保険料等負担金が必要です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>学校や保護者、地域の協力により、放課後の児童の自由な遊びや学びを見守る昭島市主催の居場所事業です。</p>'
      },
      {
        heading: '利用に必要なもの',
        content: '<p>参加には登録票の提出と保険料等負担金500円が必要です。イベントごとに材料費などの実費がかかる場合があります。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>補助金ではなく、低負担で利用できる市主催の放課後居場所事業として公式確認した内容に修正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/kosodate/m-kosodate/1008314/1003960/1003961.html',
    sourceName: '昭島市 放課後子ども教室とは',
    sourceUrls: ['https://www.city.akishima.lg.jp/kosodate/m-kosodate/1008314/1003960/1003961.html'],
    sourceNote: '昭島市公式ページで放課後子ども教室の目的、開設時間、登録票と保険料等負担金500円を確認。補助金ではなくサービス情報として補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-birth-bonus',
    title: '昭島市 妊婦のための支援給付',
    organization: '昭島市',
    type: 'local',
    maxAmount: '胎児1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['昭島市', '妊娠', '出産支援'],
    eligibility: '胎児の数の届出日時点で昭島市に住民票がある妊婦が対象です。同一妊娠で他自治体から同事業の給付を受けた場合は対象外です。',
    targetOccupation: '妊婦',
    applicationPeriod: '申請期限は1回目が胎児心拍確認日から2年間、2回目が出産予定日の8週間前から2年間',
    description: '昭島市が妊婦を対象に、胎児の数に応じて現金またはデジタルギフトを給付する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>胎児の数の届出に基づき、妊娠期の経済的負担を軽減するための給付を行います。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>胎児1人あたり5万円です。現金振込または出産育児関連用品等に使えるデジタルギフトを選択できます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>旧データの出産祝い金候補を、令和7年度以降の現行ページで確認できる妊婦のための支援給付に置換しました。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/kosodate/m-kosodate/1003592/1003595.html',
    sourceName: '昭島市 妊婦のための支援給付',
    sourceUrls: ['https://www.city.akishima.lg.jp/kosodate/m-kosodate/1003592/1003595.html'],
    sourceNote: '昭島市公式ページで対象者、胎児の数×5万円、支給方法、申請期限を確認。旧出産祝い金候補から現行制度へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-childcare-subsidy',
    title: '昭島市 認可外保育施設の保育料補助',
    organization: '昭島市',
    type: 'local',
    maxAmount: '月額契約保育料との差額等',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['昭島市', '保育料補助', '認可外保育'],
    eligibility: '昭島市内在住で、教育・保育給付認定または施設等利用給付認定を受け、対象の認可外保育施設等を利用する児童の保護者が対象です。',
    targetOccupation: '保育施設利用世帯',
    applicationPeriod: '通年。償還払いは利用月ごとの請求スケジュールあり',
    description: '昭島市が、認可外保育施設を利用する児童の保護者に対し、認可外保育施設利用支援補助金や施設等利用費で保育料負担を軽減する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>昭島市には認可外保育施設の保育料を補助する制度があり、認定区分と利用施設に応じて利用できます。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>認可外保育施設利用支援補助金では、月額契約保育料と市条例で定める認可保育園利用料金との差額を補助します。幼児教育・保育の無償化にかかる給付も案内されています。</p>'
      },
      {
        heading: '支払い方法',
        content: '<p>施設による代理請求と、保護者が後から請求する償還払いがあります。償還払いは四半期ごとの請求月・支給月が案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/kosodate/m-kosodate/1008313/1003785/1003922/1003924.html',
    sourceName: '昭島市 認可外保育施設の保育料補助',
    sourceUrls: ['https://www.city.akishima.lg.jp/kosodate/m-kosodate/1008313/1003785/1003922/1003924.html'],
    sourceNote: '昭島市公式ページで認可外保育施設利用支援補助金、施設等利用費、対象認定、差額補助、支払い方法を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-energy-support',
    title: '昭島市 東京都ゼロエミポイント（省エネ家電買替支援）',
    organization: '昭島市',
    type: 'local',
    maxAmount: '東京ゼロエミポイント相当分を直接値引き',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['昭島市', '省エネ家電', '東京都事業'],
    eligibility: '東京都内で対象家電等を購入し、参加登録販売店で共同申請規約に同意する都民が対象です。高齢者・障害者向けのエアコン購入支援拡充も案内されています。',
    targetOccupation: '都民・昭島市民',
    applicationPeriod: '東京都事業の実施期間・予算状況による',
    description: '昭島市公式ページで案内されている東京都の家庭のゼロエミッション行動推進事業です。省エネ性能の高いエアコン、冷蔵庫、給湯器、LED照明器具への買替え等を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東京都が、省エネ性能の高い家電等への買替えに対して東京ゼロエミポイントを付与し、店舗でポイント相当分を直接値引きする事業です。</p>'
      },
      {
        heading: '対象家電',
        content: '<p>エアコン、冷蔵庫、給湯器、LED照明器具への買替え等が案内されています。対象店舗は事業に参加登録した家電販売事業者です。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>昭島市独自の省エネ家電買替補助金ではなく、昭島市が案内する東京都事業として公式確認した内容に修正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/machi/kankyo/1008380/1008383/1009023.html',
    sourceName: '昭島市 東京都がエアコン等の省エネ家電の購入を支援します',
    sourceUrls: ['https://www.city.akishima.lg.jp/machi/kankyo/1008380/1008383/1009023.html'],
    sourceNote: '昭島市公式ページで東京都の家庭のゼロエミッション行動推進事業、対象家電、東京ゼロエミポイント相当分の直接値引きを確認。市独自補助ではないため補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-infertility',
    title: '昭島市 特定不妊治療医療費助成',
    organization: '昭島市',
    type: 'local',
    maxAmount: '1回の治療につき最大3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['昭島市', '不妊治療', '医療費助成'],
    eligibility: '東京都の特定不妊治療費（先進医療）助成の承認決定を受け、承認決定日から昭島市助成金の申請日まで引き続き昭島市に住所を有する方などが対象です。',
    targetOccupation: '不妊治療を受けた方',
    applicationPeriod: '東京都の特定不妊治療費（先進医療）助成の承認決定日から1年以内',
    description: '昭島市が、東京都の特定不妊治療費（先進医療）助成に上乗せして、保険適用の特定不妊治療と併せて行った先進医療費の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>不妊治療の経済的負担を軽減するため、東京都の先進医療助成に上乗せして昭島市が助成します。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>1回の治療につき上限3万円です。領収金額から東京都助成額を差し引いた額が助成対象となります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>先に東京都へ申請し、承認決定通知を受けた後、必要書類を揃えて昭島市へ申請します。期限は東京都の承認決定日から1年以内です。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/kosodate/m-kosodate/1003585/1003588.html',
    sourceName: '昭島市 特定不妊治療医療費助成',
    sourceUrls: ['https://www.city.akishima.lg.jp/kosodate/m-kosodate/1003585/1003588.html'],
    sourceNote: '昭島市公式ページで対象者、1回上限3万円、東京都助成への上乗せ、申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-nursing-home-reform',
    title: '昭島市 高齢者自立支援住宅改修給付サービス',
    organization: '昭島市',
    type: 'local',
    maxAmount: '浴槽 最大37.9万円等',
    maxAmountNum: 38,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['昭島市', '住宅改修', '高齢者支援'],
    eligibility: '65歳以上の方および同居世帯で、日常生活動作の低下により住宅改修が必要と認められる方などが対象です。給付区分により介護保険認定との関係が異なります。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。工事前に市役所担当窓口および地域包括支援センターでの相談が必要',
    description: '昭島市が、高齢者の転倒予防や介護軽減のために必要な住宅改修費の一部を給付する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>転倒予防、動作の容易性確保、介護の軽減を目的として、必要と認められる住宅改修費の一部を給付します。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>住宅改修予防給付は上限20万円、住宅設備改修給付は浴槽37.9万円、流し・洗面台15.6万円、便器の洋式化10.6万円が案内されています。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>工事実施前に市役所担当窓口と地域包括支援センターで相談が必要です。着工後の申請や老朽化に伴う通常リフォームは対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/kenko/korei/1003133/1003147.html',
    sourceName: '昭島市 高齢者自立支援住宅改修給付サービス',
    sourceUrls: ['https://www.city.akishima.lg.jp/kenko/korei/1003133/1003147.html'],
    sourceNote: '昭島市公式ページで高齢者自立支援住宅改修給付サービス、対象者、給付限度額、工事前相談を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-seismic-diagnosis',
    title: '昭島市 木造住宅耐震診断補助制度',
    organization: '昭島市',
    type: 'local',
    maxAmount: '最大8万円',
    maxAmountNum: 8,
    category: 'housing',
    prefecture: '東京都',
    tags: ['昭島市', '耐震診断', '木造住宅'],
    eligibility: '昭島市内の旧耐震基準または平成12年5月31日以前に着工された対象木造一戸建て住宅を所有する個人が対象です。市税等の完納などの要件があります。',
    targetOccupation: '住宅所有者',
    applicationPeriod: '申請受付期限は2026年11月30日、完了報告期限は2027年2月26日。予算上限到達前でも要相談',
    deadlineDate: '2026-11-30',
    description: '昭島市が、木造一戸建て住宅の耐震診断に要する費用の一部を補助する令和8年度制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地震時の生命・財産の保護と地域被害の軽減を目的に、木造一戸建て住宅の耐震診断費用を補助します。</p>'
      },
      {
        heading: '補助額',
        content: '<p>耐震診断に要する費用の3分の2以内、上限8万円です。市認定の昭島市耐震診断員が診断を実施します。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度の申請受付期限は2026年11月30日、完了報告期限は2027年2月26日です。公式ページでは予算上限に近づいたため要相談とされています。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/kurashi/sumai/1001640/1001651/1001652.html',
    sourceName: '昭島市 木造住宅耐震診断補助制度',
    sourceUrls: ['https://www.city.akishima.lg.jp/kurashi/sumai/1001640/1001651/1001652.html'],
    sourceNote: '昭島市公式ページで令和8年度耐震診断補助、申請期限2026年11月30日、完了報告期限2027年2月26日、上限8万円、要相談の受付状況を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-telework-bonus',
    title: '昭島市 ものづくり企業等地域共生推進補助金',
    organization: '昭島市',
    type: 'local',
    maxAmount: '操業環境改善 最大375万円、耐震工事 最大400万円等',
    maxAmountNum: 400,
    category: 'employment',
    prefecture: '東京都',
    tags: ['昭島市', '中小企業', '設備改善'],
    eligibility: '昭島市内で1年以上操業するものづくりに関わる中小企業者等、または新たに市内へ移転する対象企業等が対象です。税の滞納がないことなどの要件があります。',
    targetOccupation: 'ものづくり中小企業者等',
    applicationPeriod: '2026年4月15日から随時受付。2027年2月15日までに事業完了、2027年2月26日までに実績報告',
    deadlineDate: '2027-02-26',
    description: '昭島市が東京都と連携し、ものづくり企業等の工場改修、設備更新、住民受入環境整備、耐震補強などを支援する令和8年度補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域との共生を目的に、工場の改修、住民受入環境の整備、耐震補強等を行うものづくり企業等を支援します。</p>'
      },
      {
        heading: '補助限度額',
        content: '<p>操業環境改善事業と住民受入環境整備事業は補助率4分の3・上限375万円、耐震補強事業は補助率3分の2で、耐震診断100万円、耐震設計200万円、耐震工事400万円が上限です。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>昭島市の現行ページでテレワーク専用補助は確認できなかったため、公式に募集中の事業者向け補助金へ補正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/bussiness/shokogyo/1004738/1004739.html',
    sourceName: '昭島市 令和8年度ものづくり企業等地域共生推進補助金の募集',
    sourceUrls: ['https://www.city.akishima.lg.jp/bussiness/shokogyo/1004738/1004739.html'],
    sourceNote: '昭島市公式ページで令和8年度募集、補助率・上限、対象事業者、申請期間、実績報告期限を確認。テレワーク専用補助候補から現行の事業者向け補助へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akishima-vaccination-support',
    title: '昭島市 高齢者肺炎球菌予防接種',
    organization: '昭島市',
    type: 'local',
    maxAmount: '自己負担5,500円、生活保護受給者は無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['昭島市', '予防接種', '高齢者'],
    eligibility: '65歳の方、または60歳から64歳で心臓・腎臓・呼吸器機能等に一定の障害がある方が対象です。過去に肺炎球菌ワクチンを接種した方は助成対象外です。',
    targetOccupation: '高齢者・障害のある方',
    applicationPeriod: '定期接種対象期間内。65歳の方は65歳の誕生日前日から66歳の誕生日前日まで',
    description: '昭島市が、高齢者等を対象に肺炎球菌ワクチン接種費用を助成する定期予防接種制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>肺炎球菌感染症の重症化予防を目的に、対象者へ接種券等を送り、接種費用を助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>65歳の方、または60歳から64歳で心臓、腎臓、呼吸器機能等に一定の障害がある方が対象です。接種歴がある場合は助成対象外です。</p>'
      },
      {
        heading: '費用',
        content: '<p>自己負担額は5,500円です。生活保護受給者は無料で、接種時に受給証明書が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.akishima.lg.jp/kenko/yobosesshu/1003005.html',
    sourceName: '昭島市 高齢者肺炎球菌予防接種',
    sourceUrls: ['https://www.city.akishima.lg.jp/kenko/yobosesshu/1003005.html'],
    sourceNote: '昭島市公式ページで高齢者肺炎球菌予防接種の対象者、定期接種対象期間、自己負担5,500円、生活保護受給者無料を確認。',
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
    slug: 'shinjuku-childcare-subsidy',
    title: '新宿区 低所得者支援及び定額減税補足給付金（不足額給付）',
    organization: '新宿区',
    type: 'local',
    maxAmount: '不足額給付1または不足額給付2として支給',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['新宿区', '低所得者支援', '給付金'],
    eligibility: '2026年1月1日時点で新宿区に住民登録があり、令和6年分所得税・定額減税等の算定により不足額給付の対象となる方などが対象です。',
    targetIncome: '定額減税しきれない方等',
    applicationPeriod: '令和7年度の申請期限は2025年10月31日で終了',
    deadlineDate: '2025-10-31',
    description: '新宿区が、国の低所得者支援及び定額減税補足給付金として、不足額給付の対象者に給付を行った制度です。旧データの子育て応援特別手当候補を、公式確認できる給付へ補正し、通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和6年度に実施された定額減税補足給付金について、当初調整給付額に不足が生じた方などへ追加で給付する制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>対象区分により、不足額給付1または不足額給付2として支給されます。具体的な支給額は新宿区からの通知・確認書で確認します。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>子育て応援特別手当という現行制度名は公式確認できないため、公式確認できる給付制度へ補正しています。令和7年度の申請期限は終了しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/content/000429967.pdf',
    sourceName: '新宿区 低所得者支援及び定額減税補足給付金（不足額給付）',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/content/000429967.pdf'],
    sourceNote: '新宿区公式PDFで不足額給付、対象者、確認書返送・申請期限2025年10月31日を確認。旧子育て応援特別手当候補から公式確認できる給付へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-disability-medical',
    title: '新宿区 心身障害者医療費助成制度（マル障）',
    organization: '新宿区',
    type: 'local',
    maxAmount: '保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['新宿区', '障害者医療', 'マル障'],
    eligibility: '身体障害者手帳1・2級、内部障害3級、愛の手帳1・2度、精神障害者保健福祉手帳1級などに該当する新宿区民が対象です。所得制限等があります。',
    targetOccupation: '重度心身障害者',
    applicationPeriod: '通年',
    description: '新宿区が、重度心身障害者の医療費負担を軽減するため、保険診療の自己負担分を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>心身障害者医療費助成受給者証を交付し、対象者の保険診療にかかる自己負担分を軽減します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>身体障害者手帳1・2級、内部障害3級、愛の手帳1・2度、精神障害者保健福祉手帳1級などが対象です。65歳以上で新規に対象手帳を取得した場合など、対象外となる場合があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>障害者福祉課で申請し、受給者証の交付を受けます。所得制限や他制度の受給状況により対象可否が変わります。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/fukushi/file06_02_00009.html',
    sourceName: '新宿区 心身障害者医療費助成制度（マル障）',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/fukushi/file06_02_00009.html'],
    sourceNote: '新宿区公式ページで心身障害者医療費助成制度、対象者、所得制限、申請窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-migration-bonus',
    title: '新宿区 次世代育成転居助成',
    organization: '新宿区',
    type: 'local',
    maxAmount: '転居一時金 最大36万円、家賃差額助成 月額最大3万5千円',
    maxAmountNum: 246,
    category: 'housing',
    prefecture: '東京都',
    tags: ['新宿区', '子育て世帯', '転居助成'],
    eligibility: '新宿区内の民間賃貸住宅から区内の別の民間賃貸住宅へ転居する義務教育修了前の児童を扶養する世帯が対象です。居住年数、所得、住宅面積等の要件があります。',
    targetOccupation: '子育て世帯',
    applicationPeriod: '令和7年度は2025年10月15日に募集終了。令和8年度募集は未確認',
    deadlineDate: '2025-10-15',
    description: '新宿区が子育て世帯の区内定住を支援するため、区内転居時の引越し費用等と家賃差額を助成する制度です。令和7年度募集は終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>義務教育修了前の子どもがいる世帯が、区内でより広い民間賃貸住宅へ転居する場合に、転居一時金と家賃差額を助成します。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>転居一時金は礼金・仲介手数料・引越し費用の合計で上限36万円、家賃差額助成は月額上限3万5千円で最長5年間です。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和7年度募集は2025年10月15日に終了しています。令和8年度の募集有無は最新の住宅支援一覧で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/seikatsu/file07_02_00017.html',
    sourceName: '新宿区 次世代育成転居助成',
    sourceUrls: [
      'https://www.city.shinjuku.lg.jp/seikatsu/file07_02_00017.html',
      'https://www.city.shinjuku.lg.jp/soshiki/401500jutaku.html'
    ],
    sourceNote: '新宿区公式ページで次世代育成転居助成、転居一時金、家賃差額助成、令和7年度募集終了を確認。定住化支援候補から修正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-nursing-home-reform',
    title: '新宿区 住宅設備改修給付',
    organization: '新宿区',
    type: 'local',
    maxAmount: '浴槽 最大37万9千円等',
    maxAmountNum: 38,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['新宿区', '住宅改修', '高齢者支援'],
    eligibility: '新宿区に住所を有する65歳以上の方で、身体状況等により住宅設備改修が必要と認められる方が対象です。介護保険住宅改修の対象外となる場合があります。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年。工事前の事前相談・申請が必要',
    description: '新宿区が、高齢者の在宅生活を支援するため、浴槽・流し台・洗面台・便器等の住宅設備改修費用を給付する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者の身体状況に合わせて住宅設備を改修し、在宅生活の安全性と自立を支援します。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>浴槽の取り替えは上限37万9千円、流し台・洗面台の取り替えは上限15万6千円、洋式便器等への取り替えは上限10万6千円です。利用者負担があります。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>工事前に事前相談・申請が必要です。介護保険の住宅改修対象となる場合は、介護保険制度が優先されます。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/fukushi/file05_02_00012.html',
    sourceName: '新宿区 住宅設備改修給付',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/fukushi/file05_02_00012.html'],
    sourceNote: '新宿区公式ページで住宅設備改修給付、対象者、給付限度額、事前相談を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-school-lunch',
    title: '新宿区 学校給食費無償化',
    organization: '新宿区',
    type: 'local',
    maxAmount: '区立小中学校等の給食費を区が負担',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['新宿区', '学校給食', '保護者負担軽減'],
    eligibility: '新宿区立小学校・中学校・特別支援学校等の児童生徒の保護者が対象です。区立幼稚園等の副食費補助も案内されています。',
    targetOccupation: '小中学生等の保護者',
    applicationPeriod: '令和8年度実施。原則申請不要',
    description: '新宿区が、子育て世帯の負担軽減のため、区立学校の学校給食費を無償化する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>物価高騰の影響を受ける子育て世帯を支援するため、区立学校の学校給食費について保護者負担を軽減します。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>区立小中学校等の学校給食費を区が負担します。公式ページでは区立幼稚園等の副食費の補助も案内されています。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>区立学校の給食費無償化は原則として学校側で処理されます。私立・国立等に通う場合や就学援助との関係は、区の最新案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/kodomo/kyoseisaku02_000001_00003.html',
    sourceName: '新宿区 学校給食費無償化',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/kodomo/kyoseisaku02_000001_00003.html'],
    sourceNote: '新宿区公式ページで学校給食費無償化、区立幼稚園等の副食費補助、令和8年度支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-seismic-diagnosis',
    title: '新宿区 木造住宅への耐震化支援事業',
    organization: '新宿区',
    type: 'local',
    maxAmount: '耐震改修工事 最大300万円等',
    maxAmountNum: 300,
    category: 'housing',
    prefecture: '東京都',
    tags: ['新宿区', '耐震診断', '木造住宅'],
    eligibility: '新宿区内の旧耐震基準の木造住宅等の所有者が対象です。建物の用途、構造、地域、工事内容等により助成区分が異なります。',
    targetOccupation: '住宅所有者',
    applicationPeriod: '通年。診断・工事前に事前相談・申請が必要。予算状況により受付終了あり',
    description: '新宿区が、木造住宅の耐震診断、補強設計、耐震改修工事、除却、建替えなどを支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旧耐震基準の木造住宅等について、耐震診断から改修・除却・建替えまで段階的に支援します。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>木造住宅への耐震診断員派遣、補強設計、耐震改修工事などが案内されています。耐震改修工事は地域や世帯条件により最大300万円まで支援されます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>診断や工事の契約・着手前に区へ相談し、対象建築物と助成区分を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/seikatsu/file10_11_00001.html',
    sourceName: '新宿区 木造住宅への耐震化支援事業',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/seikatsu/file10_11_00001.html'],
    sourceNote: '新宿区公式ページで木造住宅への耐震化支援事業、耐震診断員派遣、補強設計、耐震改修工事等の支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-senior-living-support',
    title: '新宿区 高齢者見守りキーホルダー',
    organization: '新宿区',
    type: 'local',
    maxAmount: '登録無料',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['新宿区', '高齢者見守り', '生活支援'],
    eligibility: '新宿区内に居住する65歳以上のひとり暮らし高齢者や高齢者のみ世帯など、見守りが必要な方が対象です。',
    targetOccupation: '高齢者世帯',
    applicationPeriod: '通年',
    description: '新宿区が、65歳以上の区民に見守りナンバーを表示したキーホルダーとシールを無料配布し、外出先や緊急時の身元確認につなげる事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>見守りナンバーを表示したキーホルダーとシールを身に着けることで、外出先で倒れた時や道に迷った時に高齢者総合相談センターが迅速に身元確認を行います。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>希望する65歳以上の区民に、見守りキーホルダー1個と見守りシール10枚を無料で配布します。申請時に本人情報と緊急連絡先を登録します。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>現金給付ではなく、高齢者の生活安全を支える無料配布・見守り支援事業として公式確認した内容に修正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/fukushi/korei01_002096.html',
    sourceName: '新宿区 高齢者見守りキーホルダー',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/fukushi/korei01_002096.html'],
    sourceNote: '新宿区公式ページで高齢者見守りキーホルダー、65歳以上の対象者、無料配布物、登録事項を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-telework-bonus',
    title: '新宿区 育児・介護サポート企業応援奨励金',
    organization: '新宿区',
    type: 'local',
    maxAmount: 'コースにより最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['新宿区', '中小企業', '仕事と家庭の両立'],
    eligibility: '新宿区内に本社または事業所がある中小企業等で、育児・介護と仕事の両立支援に関する対象取組を実施する事業者が対象です。',
    targetOccupation: '中小企業者等',
    applicationPeriod: '令和8年度実施。コース・予算状況により受付が変わるため事前相談が必要',
    description: '新宿区が、従業員の育児・介護と仕事の両立を支援する中小企業等に奨励金を交付する制度です。旧データのテレワーク専用補助候補を、現行の働き方支援制度へ補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>育児・介護休業や短時間勤務制度等を整備・活用し、仕事と家庭の両立支援に取り組む区内企業を支援します。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>育児サポート、介護サポート、男性育休取得促進等のコースがあり、コースにより奨励金額が異なります。上限30万円のコースが確認できます。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>テレワーク導入支援補助金は現行公式制度として確認できないため、公式に確認できる働き方改革・両立支援の事業者向け奨励金へ補正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/jigyo/sangyo01_002197.html',
    sourceName: '新宿区 育児・介護サポート企業応援奨励金',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/jigyo/sangyo01_002197.html'],
    sourceNote: '新宿区公式ページで育児・介護サポート企業応援奨励金、対象企業、コース、奨励金額を確認。テレワーク専用補助候補から現行の働き方支援制度へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shinjuku-vaccination-support',
    title: '新宿区 高齢者用肺炎球菌予防接種',
    organization: '新宿区',
    type: 'local',
    maxAmount: '対象者は公費助成、一部自己負担あり',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['新宿区', '予防接種', '高齢者'],
    eligibility: '接種日時点で新宿区民であり、過去に肺炎球菌ワクチンを接種したことがない65歳の方、または60歳から64歳で心臓・腎臓・呼吸器機能等に一定の障害がある方が対象です。',
    targetOccupation: '高齢者・障害のある方',
    applicationPeriod: '令和8年度。対象者の予診票有効期限内',
    description: '新宿区が、高齢者等を対象に肺炎球菌予防接種費用を公費助成する定期予防接種制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>肺炎球菌による感染症の重症化を防ぐため、対象者の接種費用を公費助成します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>過去に肺炎球菌ワクチンを接種したことがなく、接種日に65歳である方などが対象です。60歳から64歳で一定の障害がある方も対象となります。</p>'
      },
      {
        heading: '費用',
        content: '<p>予診票を使用して接種を受ける場合の自己負担額は、手元の予診票に記載された金額です。令和8年度の詳細は公式ページで確認します。</p>'
      }
    ],
    officialUrl: 'https://www.city.shinjuku.lg.jp/fukushi/yobo01_001194.html',
    sourceName: '新宿区 高齢者用肺炎球菌予防接種',
    sourceUrls: ['https://www.city.shinjuku.lg.jp/fukushi/yobo01_001194.html'],
    sourceNote: '新宿区公式ページで高齢者用肺炎球菌予防接種、令和8年度事業、対象者、公費助成、自己負担の案内を確認。旧インフルエンザ候補から現行通年確認できる高齢者予防接種へ補正。',
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
    slug: 'suginami-birth-bonus',
    title: '杉並区 妊婦のための支援給付',
    organization: '杉並区',
    type: 'local',
    maxAmount: '妊娠時5万円＋子どもの数に応じて5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['杉並区', '妊婦支援給付', '出産支援'],
    eligibility: '申請日時点で杉並区内に住所を有し、産科医療機関等で胎児心拍が確認された妊産婦が対象です。',
    targetOccupation: '妊婦・出産世帯',
    applicationPeriod: 'ゆりかご面接後およびすこやか赤ちゃん訪問後の案内に沿って申請',
    description: '杉並区が、妊娠時と出産時の2回に分けて妊婦支援給付金を支給する制度です。旧データの出産・子育て応援交付金候補を現行制度名へ補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>妊婦給付認定を受けた方に、妊婦支援給付金を妊娠時と出産時の2回に分けて支給します。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>妊娠時は5万円、出産時は妊娠している子どもの数に応じて5万円です。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>旧候補名の出産・子育て応援交付金ではなく、公式ページで確認できる現行の妊婦のための支援給付として掲載します。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s054/1125.html',
    sourceName: '杉並区 妊婦のための支援給付',
    sourceUrls: ['https://www.city.suginami.tokyo.jp/s054/1125.html'],
    sourceNote: '杉並区公式ページで妊娠時5万円、出産時は子どもの数に応じて5万円、対象者、申請方法を確認。旧出産・子育て応援交付金候補から現行制度へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-disability-medical',
    title: '杉並区 東京都心身障害者（児）医療費助成',
    organization: '杉並区',
    type: 'local',
    maxAmount: '保険診療の自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['杉並区', '障害者医療', 'マル障'],
    eligibility: '東京都心身障害者（児）医療費助成の対象となるマル障受給者証を持つ方が対象です。所得制限や対象除外があります。',
    targetOccupation: '重度心身障害者',
    applicationPeriod: '通年',
    description: '杉並区で受け付ける東京都心身障害者（児）医療費助成です。マル障受給者証に基づき、保険診療の自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>心身障害者の保健の向上と福祉の増進を目的に、東京都が保険診療の自己負担額を一部助成する制度です。</p>'
      },
      {
        heading: '払い戻し申請',
        content: '<p>払い戻し申請では、医療費助成支給申請書、領収書、マル障受給者証、健康保険の資格情報がわかるもの、振込先確認書類などが必要です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>所得制限があります。対象手帳や年齢、他制度の受給状況により対象可否が変わるため、申請前に杉並区の窓口で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s036/7966.html',
    sourceName: '杉並区 東京都心身障害者（児）医療費助成',
    sourceUrls: [
      'https://www.city.suginami.tokyo.jp/s036/7966.html',
      'https://www.city.suginami.tokyo.jp/s036/7968.html'
    ],
    sourceNote: '杉並区公式ページで東京都心身障害者（児）医療費助成、払い戻し申請書類、所得制限ページを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-migration-bonus',
    title: '杉並区 転居費用助成',
    organization: '杉並区',
    type: 'local',
    maxAmount: '2人以上世帯 最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['杉並区', '転居費用', '住宅支援'],
    eligibility: '引き続き2年以上杉並区内に居住し、区内から区内の民間賃貸住宅へ転居する低所得世帯などが対象です。子どもがいる世帯は所得基準が別に設定されています。',
    targetIncome: '低所得世帯',
    applicationPeriod: '通年。物件申し込み前、入居審査前までに予定登録申請が必要',
    description: '杉並区が、住環境改善や家賃負担軽減のため区内で転居する低所得世帯に、初期費用を助成する制度です。旧データのファミリー世帯定住支援給付金候補を現行の公式住宅支援へ補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住環境改善や家賃負担軽減のため、区内の民間賃貸住宅へ転居する際の初期費用を助成します。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>助成対象経費は賃貸借契約締結に係る費用と家財の運搬費用です。助成上限は単身世帯15万円、2人以上世帯20万円です。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>区外からの転入・定住給付金として確認できる現行制度は見当たらないため、公式に確認できる区内転居費用助成へ補正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s093/19882.html',
    sourceName: '杉並区 転居費用助成',
    sourceUrls: [
      'https://www.city.suginami.tokyo.jp/s093/19882.html',
      'https://www.city.suginami.tokyo.jp/s042/1730.html'
    ],
    sourceNote: '杉並区公式ページで転居費用助成、対象要件、助成対象経費、単身15万円・2人以上20万円、物件申し込み前申請を確認。旧ファミリー世帯定住支援給付金候補から補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-scholarship',
    title: '杉並区 中学生海外留学事業（次世代育成基金活用）',
    organization: '杉並区',
    type: 'local',
    maxAmount: '区の基金活用事業',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['杉並区', '次世代育成基金', '海外留学'],
    eligibility: '杉並区内在住の中学生を対象とする次世代育成基金活用事業です。募集年度ごとの要件・選考があります。',
    targetOccupation: '中学生',
    applicationPeriod: '年度募集による。令和7年度成果報告会は2025年10月13日実施済み',
    deadlineDate: '2025-10-13',
    description: '旧データでは次世代育成基金奨学金として掲載されていましたが、公式に確認できる内容は中学生を海外に派遣する基金活用事業です。現行の奨学金給付制度としては確認できないため、通常一覧から除外します。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>杉並区公式ページでは、次世代育成基金を活用した中学生海外留学事業が確認できます。</p>'
      },
      {
        heading: '掲載停止の理由',
        content: '<p>返済不要の奨学金や現金給付としての募集要項は確認できないため、旧候補名のまま通常一覧には掲載しません。</p>'
      },
      {
        heading: '確認できる事業',
        content: '<p>区内在住の中学生を交流都市へ留学生として派遣し、国際交流や直接体験を通じた成長を支援する事業です。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s114/8470.html',
    sourceName: '杉並区 中学生海外留学事業',
    sourceUrls: ['https://www.city.suginami.tokyo.jp/s114/8470.html'],
    sourceNote: '杉並区公式ページで次世代育成基金活用事業としての中学生海外留学事業を確認。奨学金給付制度としては確認できないため成果報告会日を期限切れ判定に使用。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-scholarship-v2',
    title: '杉並区 奨学資金貸付制度',
    organization: '杉並区',
    type: 'local',
    maxAmount: '高等学校等の学費を無利子貸付',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['杉並区', '奨学金', '無利子貸付'],
    eligibility: '向学心がある杉並区民で、経済的理由により高等学校等の修学が困難な生徒本人が対象です。',
    targetIncome: '経済的理由により修学困難な世帯',
    applicationPeriod: '通年または年度案内による。申請前に学務課へ確認',
    description: '杉並区が、経済的理由により高等学校等の修学が困難な生徒本人へ学費の一部を無利子で貸し付ける制度です。旧データの給付型奨学金候補を公式の貸付制度へ補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>向学心がある区民で、経済的理由により高等学校等の修学が困難な生徒本人に、学費の一部を無利子で貸し付けます。</p>'
      },
      {
        heading: '関連制度',
        content: '<p>公式ページでは、杉並区奨学金の貸付のほか、東京都育英資金貸付制度や高等学校等就学支援金等の案内も掲載されています。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>給付型ではなく無利子貸付制度として公式確認した内容に修正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s109/7383.html',
    sourceName: '杉並区 奨学金制度',
    sourceUrls: [
      'https://www.city.suginami.tokyo.jp/s109/7383.html',
      'https://www.city.suginami.tokyo.jp/s053/19803.html'
    ],
    sourceNote: '杉並区公式ページで杉並区奨学資金の無利子貸付、対象概要、東京都育英資金等の関連制度を確認。旧給付型奨学金候補から補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'suginami-telework-bonus',
    title: '杉並区 中小企業等デジタル化推進事業助成金',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['杉並区', '中小企業', 'デジタル化'],
    eligibility: '杉並区内に主たる事業所を有し、区内で1年以上事業を営む中小企業者等が対象です。住民税・事業税の滞納がないことなどの要件があります。',
    targetOccupation: '中小企業者等',
    applicationPeriod: '令和8年6月1日から令和8年10月30日まで。予算到達で終了',
    deadlineDate: '2026-10-30',
    description: '杉並区が、区内中小企業等のデジタル化、業務効率化、生産性向上、新事業創出を支援する令和8年度助成金です。旧データのテレワーク専用助成候補を現行のデジタル化助成へ補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内中小企業等がデジタル技術を導入する際の経費の一部を助成します。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>助成率は中小企業者3分の2、小規模企業者4分の3で、上限額はいずれも50万円です。ソフトウェア購入、システム構築、ホームページ・ECサイト制作などが対象です。</p>'
      },
      {
        heading: '掲載時の補正',
        content: '<p>テレワーク導入専用助成金は現行公式制度として確認できないため、公式に募集中の中小企業等デジタル化推進事業助成金へ補正しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/s121/news/25089.html',
    sourceName: '杉並区 中小企業等デジタル化推進事業助成金',
    sourceUrls: [
      'https://www.city.suginami.tokyo.jp/s121/news/25089.html',
      'https://www.city.suginami.tokyo.jp/documents/25089/chirashi_degital.pdf',
      'https://www.city.suginami.tokyo.jp/s121/1754.html'
    ],
    sourceNote: '杉並区公式ページで令和8年度中小企業等デジタル化推進事業助成金、助成率、上限50万円、申請期間2026年6月1日から10月30日、対象経費を確認。旧テレワーク助成候補から補正。',
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
    slug: 'setagaya-education-voucher',
    title: '世田谷区 子どもの学び場運営スタートアップ事業補助金',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '通常活動 上限28.8万円、加算あり',
    maxAmountNum: 69,
    category: 'education',
    prefecture: '東京都',
    tags: ['世田谷区', '学習支援', '団体向け補助'],
    eligibility: '世田谷区内で主に小学校1年生から4年生を対象に、学校の宿題等の自主学習を支援する継続的な活動を行う団体が対象です。',
    targetOccupation: '学習支援団体・地域活動団体',
    applicationPeriod: '令和8年度随時申請を受付中。活動開始の2か月前までに事前相談',
    description: '世田谷区が、子どもの学習習慣の定着や学習でのつまずき予防のため、区内で子どもの学び場を運営する団体の活動費を補助する制度です。旧データの個人向け学用品助成ではなく、公式に確認できる団体向け学習支援補助へ補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内で主に小学1年生から4年生を対象に学校の宿題等の自主学習を支援する団体へ、活動費の一部を補助します。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>通常活動は月1回以上の定期実施を対象に上限28万8千円です。休暇時活動、食育活動、団体内部研修の加算も確認できます。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>随時申請では、交付決定後に実施した活動が補助対象です。活動開始の2か月前までに世田谷区子ども家庭課へ事前相談が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02413/1349.html',
    sourceName: '世田谷区 子どもの学びを支援する活動への補助（子どもの学び場運営スタートアップ事業）',
    sourceUrls: [
      'https://www.city.setagaya.lg.jp/02413/1349.html',
      'https://www.city.setagaya.lg.jp/documents/1349/r8manabiba_bosyuuyoukou_zuiji.pdf',
      'https://www.city.setagaya.lg.jp/02413/2120.html'
    ],
    sourceNote: '世田谷区公式ページと募集要項PDFで、子どもの学び場運営スタートアップ事業、対象活動、随時申請、通常活動上限28.8万円、加算、活動開始2か月前相談を確認。旧「せたがや学び応援基金助成」候補から公式制度へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-energy-support',
    title: '世田谷区 住民税非課税世帯等への物価高騰生活支援給付金（受付終了）',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '1世帯あたり2万円',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '東京都',
    tags: ['世田谷区', '物価高騰生活支援', '受付終了'],
    eligibility: '令和7年度の住民税が非課税または均等割のみ課税の世帯などが対象でした。公式ページで令和8年6月30日に申請受付終了と確認できます。',
    targetOccupation: '低所得世帯・生活支援対象世帯',
    applicationPeriod: '申請受付終了。申請期限は2026年6月30日',
    deadlineDate: '2026-06-30',
    description: '世田谷区が、物価高騰の影響を受ける住民税非課税世帯等に支給した生活支援給付金です。旧データのエネルギー費高騰対策給付金候補を、公式確認できる令和7年度物価高騰生活支援給付金へ補正し、受付終了として通常一覧から除外します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>物価高騰の影響を受ける住民税非課税世帯等に対し、1世帯あたり2万円を支給した給付金です。</p>'
      },
      {
        heading: '対象',
        content: '<p>令和7年度の住民税が非課税または均等割のみ課税の世帯などが対象でした。対象世帯には支給のお知らせまたは確認書兼申請書が送付されました。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>申請期限はオンライン・郵送とも2026年6月30日で、公式ページで受付終了が案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02014/30262.html',
    sourceName: '世田谷区 令和7年度住民税非課税世帯等への物価高騰生活支援給付金',
    sourceUrls: [
      'https://www.city.setagaya.lg.jp/02014/30262.html',
      'https://www.city.setagaya.lg.jp/kuhou/oshirase20260401/p12.html'
    ],
    sourceNote: '世田谷区公式ページで受付終了、申請期限2026年6月30日、支給対象、支給のお知らせ・確認書兼申請書、広報紙で支給額2万円を確認。旧エネルギー費高騰対策候補から公式制度へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-infertility',
    title: '世田谷区 特定不妊治療費助成制度（受付終了）',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '受付終了・区独自助成なし',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['世田谷区', '不妊治療', '受付終了'],
    eligibility: '世田谷区特定不妊治療費助成制度は受付終了済みです。公式ページでは、保険適用分および特定不妊治療費（先進医療）に対する世田谷区の助成は行っていないと案内されています。',
    targetOccupation: '不妊治療を検討する方',
    applicationPeriod: '受付終了。区独自の保険適用分・先進医療助成は現行実施なし',
    deadlineDate: '2024-12-23',
    description: '旧データでは世田谷区の不妊治療費助成制度として掲載されていましたが、公式ページで受付終了および現行の区独自助成なしを確認したため通常一覧から除外します。相談支援として妊活オンライン相談事業は実施されています。',
    sections: [
      {
        heading: '公式確認結果',
        content: '<p>世田谷区特定不妊治療費助成制度は既に受付を終了しています。保険適用分および特定不妊治療費（先進医療）に対する区独自助成は行っていません。</p>'
      },
      {
        heading: '関連する相談支援',
        content: '<p>世田谷区では、将来の妊娠・出産を望む方を対象に、妊活オンライン相談事業を実施しています。相談は無料です。</p>'
      },
      {
        heading: '確認先',
        content: '<p>東京都や国の不妊検査・先進医療・不育症検査の助成制度は、世田谷区公式ページから外部制度として案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02244/3271.html',
    sourceName: '世田谷区 特定不妊治療費助成制度',
    sourceUrls: [
      'https://www.city.setagaya.lg.jp/02244/3271.html',
      'https://www.city.setagaya.lg.jp/02244/1184.html'
    ],
    sourceNote: '世田谷区公式ページで特定不妊治療費助成制度の受付終了、保険適用分・先進医療への区独自助成なし、妊活オンライン相談事業の無料相談を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-school-lunch',
    title: '世田谷区 区立小・中学校給食費無償化',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '区立小・中学校の給食費を無償化',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['世田谷区', '学校給食費', '無償化'],
    eligibility: '世田谷区立小・中学校の児童・生徒の給食費が対象です。保護者による給食費の手続きや納付は不要と案内されています。',
    targetOccupation: '区立小中学生の保護者',
    applicationPeriod: '令和8年度も無償化継続。保護者による個別手続き不要',
    description: '世田谷区が、子育て世帯への経済的支援として区立小・中学校の学校給食費を無償化する制度です。令和8年4月から給食費単価は改定されますが、無償化は継続されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区は令和5年4月から区立小・中学校の給食費無償化を実施しており、子育て世帯の負担軽減のため継続しています。</p>'
      },
      {
        heading: '対象',
        content: '<p>区立小・中学校の児童・生徒の給食費が対象です。保護者による給食費の手続きや納付は必要ありません。</p>'
      },
      {
        heading: '令和8年度の扱い',
        content: '<p>令和8年4月から食材費高騰に対応して給食費単価は改定されますが、区立小・中学校の児童・生徒の給食費無償化は継続されます。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/02056/1954.html',
    sourceName: '世田谷区 区立小・中学校給食費無償化',
    sourceUrls: [
      'https://www.city.setagaya.lg.jp/02056/1954.html',
      'https://www.city.setagaya.lg.jp/02056/1959.html'
    ],
    sourceNote: '世田谷区公式ページで令和5年4月からの給食費無償化継続、保護者手続き・納付不要、令和8年4月からの給食費単価改定後も無償化継続を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'setagaya-telework-bonus',
    title: '世田谷区 中小事業者経営支援補助金（令和8年度）',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '生産性向上設備導入支援 最大40万円',
    maxAmountNum: 40,
    category: 'employment',
    prefecture: '東京都',
    tags: ['世田谷区', '中小事業者', '生産性向上'],
    eligibility: '世田谷区内に事務所または事業所を有する中小事業者、個人事業主等が対象です。補助対象事業ごとに過年度利用や同年度併用の制限があります。',
    targetOccupation: '中小事業者・個人事業主等',
    applicationPeriod: '令和8年度。予算額に達した時点で受付終了。補助対象期間は交付決定日から2027年2月26日まで',
    deadlineDate: '2027-02-26',
    description: '世田谷区が、区内事業者の販路拡大、新規開拓、設備投資、生産性向上の取組みを支援する補助金です。旧データのテレワーク専用助成は現行公式制度として確認できないため、公式に確認できる中小事業者経営支援補助金へ補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>区内事業者の新たな取組みやチャレンジを後押しし、安定的な経営の持続化につなげるため、販路拡大や生産性向上に要する経費の一部を補助します。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>ITを活用した販路拡大支援は上限20万円、生産性向上設備導入支援は上限40万円です。補助率はいずれも2分の1です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>交付決定前に契約等を行った経費は対象外です。予算額に達した場合は受付終了となり、地域連携型ハンズオン支援事業等との併用もできません。</p>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/03647/11321.html',
    sourceName: '世田谷区 中小事業者経営支援補助金',
    sourceUrls: [
      'https://www.city.setagaya.lg.jp/03647/11321.html',
      'https://www.city.setagaya.lg.jp/documents/11321/r8_youkou.pdf',
      'https://www.city.setagaya.lg.jp/03647/5009.html'
    ],
    sourceNote: '世田谷区公式ページと募集要項PDFで令和8年度中小事業者経営支援補助金、ITを活用した販路拡大支援上限20万円、生産性向上設備導入支援上限40万円、補助率1/2、対象者、交付決定前契約対象外、補助対象期間2027年2月26日までを確認。旧テレワーク助成候補から補正。',
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
    slug: 'ome-startup-support',
    title: '青梅市 創業者応援事業補助金',
    organization: '青梅市',
    type: 'local',
    maxAmount: '市内創業20万円、移住を伴う創業30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['青梅市', '創業支援', '創業者応援'],
    eligibility: '青梅市内で令和5年4月1日以降に事業を開始した中小企業者または個人事業主等で、認定特定創業支援等事業による支援を受け証明書の交付を受けた方などが対象です。',
    targetOccupation: '創業者・個人事業主・中小企業者',
    applicationPeriod: '2027年2月26日まで。郵送は消印有効。予算額到達で終了',
    deadlineDate: '2027-02-26',
    description: '青梅市が、市内で新たに事業を開始した創業者へ補助金を交付する制度です。旧データの創業支援補助金候補を、公式名称・交付額・受付期限に合わせて補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青梅市内で新たに事業を開始した創業者に対し、事業開始後の定着を支援するため補助金を交付する制度です。</p>'
      },
      {
        heading: '交付額',
        content: '<p>市内で新たに事業を開始した方は20万円、創業を機に定住目的で市内へ移住し新たに事業を開始した方は30万円です。</p>'
      },
      {
        heading: '申請時の注意',
        content: '<p>申請には認定特定創業支援等事業による支援を受けた証明書が必要です。受付は2027年2月26日までですが、予算がなくなった場合は期間内でも終了します。交付後は翌年度から3年間、事業状況の報告が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.ome.tokyo.jp/soshiki/35/37443.html',
    sourceName: '青梅市 創業者応援事業補助金',
    sourceUrls: [
      'https://www.city.ome.tokyo.jp/soshiki/35/37443.html',
      'https://www.city.ome.tokyo.jp/soshiki/35/59310.html'
    ],
    sourceNote: '青梅市公式ページで令和8年度更新、交付額20万円・30万円、対象者、認定特定創業支援等事業の証明、受付期限2027年2月26日、提出方法を確認。旧「創業支援補助金」候補から公式名称へ補正。',
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
    slug: 'adachi-childcare-subsidy',
    title: '足立区 物価高対応子育て応援手当（受付終了）',
    organization: '足立区',
    type: 'local',
    maxAmount: '対象児童1人につき2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['足立区', '子育て応援手当', '受付終了'],
    eligibility: '令和6年10月分の児童手当受給者等のうち、足立区が案内した対象者が対象です。',
    applicationPeriod: '2026年6月30日受付終了',
    deadlineDate: '2026-06-30',
    description: '足立区が物価高騰による子育て世帯の負担軽減を目的に支給した手当です。受付終了済みのため通常一覧から除外します。旧データの子育て応援給付金候補を公式名称・支給額・受付終了日に補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>物価高騰の影響を受ける子育て世帯を支援するため、対象児童1人につき2万円を支給した足立区の手当です。</p>' },
      { heading: '受付状況', content: '<p>申請期限は2026年6月30日で終了しています。期限切れ制度として通常一覧には表示しません。</p>' },
      { heading: '掲載時の補正', content: '<p>旧生成データの最大5万円ではなく、足立区公式で確認できる物価高対応子育て応援手当の2万円へ補正しました。</p>' }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/oyako/bukkadakataiou_kosodateouenteate.html',
    sourceName: '足立区 物価高対応子育て応援手当',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/oyako/bukkadakataiou_kosodateouenteate.html',
      'https://www.city.adachi.tokyo.jp/hoken/shussannkosodatekouhukin.html'
    ],
    sourceNote: '足立区公式ページで物価高対応子育て応援手当、対象児童1人につき2万円、申請期限2026年6月30日終了を確認。旧「子育て応援給付金」候補から公式確認できる終了済み手当へ補正。あわせて現行のあだち出産・子育て応援給付金ページも確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-daycare-support',
    title: '足立区 認証保育所等保育料補助金',
    organization: '足立区',
    type: 'local',
    maxAmount: '月額最大8万円',
    maxAmountNum: 96,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['足立区', '認証保育所', '保育料補助'],
    eligibility: '足立区に住民登録があり、東京都認証保育所等に児童を預けている保護者で、保育を必要とする理由など公式要件を満たす方が対象です。',
    applicationPeriod: '四半期ごとの申請。令和8年度最終申請期限は2027年4月上旬予定',
    description: '足立区が、認証保育所等の利用者に対して保育料の一部を補助する制度です。対象施設や児童の年齢、認可保育所等の申込状況などにより補助額が異なります。',
    sections: [
      { heading: '制度の概要', content: '<p>東京都認証保育所等を利用する保護者の保育料負担を軽減するため、足立区が保育料の一部を補助します。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、月極保育料を対象に、児童の年齢や世帯状況などに応じた補助額が案内されています。補助上限は月額8万円です。</p>' },
      { heading: '申請時の注意', content: '<p>補助を受けるには期ごとの申請が必要です。対象施設、契約内容、認可保育施設等への申込状況などの要件を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/kodomo-nyuuen/k-kyoiku/kosodate/hoikujo-jose.html',
    sourceName: '足立区 認証保育所等保育料補助金',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/kodomo-nyuuen/k-kyoiku/kosodate/hoikujo-jose.html',
      'https://www.city.adachi.tokyo.jp/k-kyoiku/kosodate/sonotahoiku/index.html'
    ],
    sourceNote: '足立区公式ページで認証保育所等保育料補助金、対象者、対象施設、補助額表、四半期ごとの申請を確認。旧候補の月額最大4万円から、公式の補助額に合わせて月額最大8万円へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-elderly-support',
    title: '足立区 高齢者配食サービス支援（元気サポート弁当）',
    organization: '足立区',
    type: 'local',
    maxAmount: '1日1食、定価から300円引き',
    maxAmountNum: 10.95,
    category: 'living',
    prefecture: '東京都',
    tags: ['足立区', '高齢者見守り', '配食サービス'],
    eligibility: '65歳以上のひとり暮らしの方または高齢者のみ世帯の方で、身体的・精神的な理由等により食事の用意が困難な方などが対象です。',
    applicationPeriod: '通年',
    description: '足立区が、高齢者向けの配食を通じて食の支援と見守りを行う事業です。1日につき昼・夜のいずれか1食、定価の300円引きで購入でき、受け取り時に声掛けや安否確認を受けられます。',
    sections: [
      { heading: '制度の概要', content: '<p>配食事業者から食事を購入する際に、受け取り時の声掛けや安否確認を受けられる見守りを兼ねた配食支援です。</p>' },
      { heading: '支援内容', content: '<p>1日につき昼または夜のいずれか1食について、定価の300円引きで配食サービスを利用できます。</p>' },
      { heading: '申請時の注意', content: '<p>翌月から利用したい場合は当月15日までの申請が目安です。申請前に配食事業者へ実施可否の内諾を得る必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/k-fukushi/genkisupport.html',
    sourceName: '足立区 高齢者配食サービス支援（元気サポート弁当）',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/k-fukushi/genkisupport.html',
      'https://www.city.adachi.tokyo.jp/k-fukushi/kaigohokengai.html',
      'https://www.city.adachi.tokyo.jp/care-s/fukushi-kenko/koresha/hokatsushien.html'
    ],
    sourceNote: '足立区公式ページで高齢者配食サービス支援、1日1食300円引き、受け取り時の声掛け・安否確認、対象者、申請期限の考え方を確認。旧「高齢者見守り支援事業」候補から公式確認できる見守り付き配食支援へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-living-emergency',
    title: '足立区社会福祉協議会 応急小口資金・生活福祉資金貸付',
    organization: '足立区社会福祉協議会',
    type: 'local',
    maxAmount: '資金種別により異なる',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['足立区', '生活福祉資金', '貸付'],
    eligibility: '足立区内に住所があり、緊急かつ一時的に生計維持が困難となった世帯など、社会福祉協議会の貸付要件を満たす世帯が対象です。',
    applicationPeriod: '通年相談',
    description: '足立区社会福祉協議会が窓口となる生活福祉資金等の貸付相談です。給付金ではなく貸付制度ですが、旧データの緊急小口資金・生活福祉資金貸付相談候補として公式窓口と上限額を補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>低所得世帯等を対象に、緊急かつ一時的な生活費や生活再建に必要な資金の貸付相談を行います。</p>' },
      { heading: '貸付内容', content: '<p>生活福祉資金貸付、緊急小口資金貸付、総合支援資金などが案内されています。資金種別により上限額や要件が異なります。</p>' },
      { heading: '申請時の注意', content: '<p>貸付のため返済が必要です。相談時には収入・支出状況、返済見込み、他制度の利用状況などを確認します。</p>' }
    ],
    officialUrl: 'https://adachisyakyo.jp/service/seikatsu-shien/',
    sourceName: '足立区社会福祉協議会 応急小口資金',
    sourceUrls: [
      'https://adachisyakyo.jp/service/seikatsu-shien/',
      'https://www.city.adachi.tokyo.jp/fukushi-kenko/sekatsu/shigotosodan/index.html',
      'https://www.city.adachi.tokyo.jp/seikatsu-shien/gaiyou.html'
    ],
    sourceNote: '足立区社会福祉協議会公式ページで生活福祉資金貸付、緊急小口資金貸付、総合支援資金等を確認。足立区公式のくらしとしごとの相談、福祉まるごと相談課も確認。給付金ではなく貸付・相談制度として明記し、公式に確認できない上限額表現は避けた。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-mental-health',
    title: '足立区 こころとからだの健康づくり課 精神保健相談',
    organization: '足立区',
    type: 'local',
    maxAmount: '相談無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['足立区', 'こころの健康', '精神保健相談'],
    eligibility: '足立区民または区内在勤・在学の方、その家族など、こころの健康に関する相談を希望する方が対象です。',
    applicationPeriod: '通年相談。保健センター等で予約・相談',
    description: '足立区が、こころの健康、精神疾患、依存症、ひきこもり等に関する相談窓口を設ける支援です。旧データのこころの健康支援事業候補を、公式の相談支援情報へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>保健師等が、こころの不調、精神疾患、家族の対応、受診先などに関する相談を受ける足立区の相談支援です。</p>' },
      { heading: '費用', content: '<p>区の相談窓口での相談は無料です。医療機関の受診や治療費は別途自己負担となる場合があります。</p>' },
      { heading: '申請時の注意', content: '<p>相談内容や居住地域により担当窓口が異なります。緊急時は医療機関や救急相談等の利用も検討してください。</p>' }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/esekanri/fukushi-kenko/kenko/sodan-kokoro-nitte3102.html',
    sourceName: '足立区 こころの健康に関する相談',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/esekanri/fukushi-kenko/kenko/sodan-kokoro-nitte3102.html',
      'https://www.city.adachi.tokyo.jp/kokoro/fukushi-kenko/kenko/kokoro-mado-sodan.html',
      'https://www.city.adachi.tokyo.jp/kyoikushido/heart-counseling.html'
    ],
    sourceNote: '足立区公式ページでこころの健康に関する相談窓口、精神保健相談、相談先を確認。旧データのデイケア等の一律無料表現は公式確認できる相談支援へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-nursing-equipment',
    title: '足立区 紙おむつ給付・おむつ代助成',
    organization: '足立区',
    type: 'local',
    maxAmount: 'おむつ代助成は月額6,000円上限',
    maxAmountNum: 7.2,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['足立区', '紙おむつ', '介護用品'],
    eligibility: '在宅で常時紙おむつを必要とする高齢者等で、足立区の要件を満たす方が対象です。入院等で区の紙おむつ給付を利用できない場合は、おむつ代助成の対象となる場合があります。',
    applicationPeriod: '通年',
    description: '足立区が、在宅の高齢者等へ紙おむつの給付や、おむつ代助成を行う制度です。旧データの介護用品給付事業候補を、公式ページで確認できる紙おむつ関連支援へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>常時紙おむつが必要な高齢者等に対し、紙おむつを給付する足立区の介護保険外サービスです。</p>' },
      { heading: '助成内容', content: '<p>入院等により紙おむつの現物給付を利用できない場合は、おむつ代助成として月額6,000円を上限に助成されます。</p>' },
      { heading: '申請時の注意', content: '<p>対象要件、給付品目、助成対象期間などは身体状況や利用中のサービスによって異なります。申請前に区の高齢者サービス窓口で確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/shogai/fukushi-kenko/shinshin/techo-nichijo-omutsu.html',
    sourceName: '足立区 紙おむつ給付・おむつ代助成',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/shogai/fukushi-kenko/shinshin/techo-nichijo-omutsu.html',
      'https://www.city.adachi.tokyo.jp/kaigo/kurashi/hoken/omutsukouzyo.html'
    ],
    sourceNote: '足立区公式ページで紙おむつの支給、対象者、現物支給、費用助成月額6,000円以内を確認。旧「介護用品給付事業」候補から公式確認できる紙おむつ関連支援へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-scholarship',
    title: '足立区 給付型奨学金',
    organization: '足立区',
    type: 'local',
    maxAmount: '入学料・授業料・施設整備費の全額相当',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['足立区', '給付型奨学金', '大学進学'],
    eligibility: '令和9年4月に大学等へ進学予定で、成績要件、世帯収入要件、保護者の区内居住要件などを満たす方が対象です。',
    applicationPeriod: '2026年6月19日から2026年7月17日まで',
    deadlineDate: '2026-07-17',
    description: '足立区が、学業成績が優秀でありながら経済的理由により大学等への進学が困難な方に対し、入学料・授業料・施設整備費の全額相当を給付する返済不要の奨学金です。',
    sections: [
      { heading: '制度の概要', content: '<p>大学等に進学予定の方へ、入学料、授業料、施設整備費の全額に相当する奨学金を返済不要で給付します。</p>' },
      { heading: '対象者', content: '<p>令和9年4月に大学等へ進学予定で、成績や収入、保護者の区内居住などの要件を満たす方が対象です。</p>' },
      { heading: '申請時の注意', content: '<p>令和8年度の申請期間は2026年6月19日から2026年7月17日までです。募集要項と申請書類を確認し、期限内に申請してください。</p>' }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/gakumu/k-kyoiku/shochu/202212kyuufugatasyougakukin.html',
    sourceName: '足立区 給付型奨学金',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/gakumu/k-kyoiku/shochu/202212kyuufugatasyougakukin.html',
      'https://www.city.adachi.tokyo.jp/gakumu/syougakukinseidodaigaku.html'
    ],
    sourceNote: '足立区公式ページで2026年6月19日から2026年7月17日までの申請期間、令和9年4月大学等進学予定者対象、入学料・授業料・施設整備費の実費相当額、返済不要を確認。旧データの月額3万円ではなく公式の現行給付内容へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'adachi-school-lunch',
    title: '足立区 学校給食費無償化・完全弁当世帯等補助',
    organization: '足立区',
    type: 'local',
    maxAmount: '区立小中学校は給食費無償。完全弁当等は補助あり',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['足立区', '学校給食費', '無償化'],
    eligibility: '足立区立小中学校に在籍する児童生徒の保護者等が対象です。完全弁当対応や区外特別支援学校等に通う場合は別途補助対象となる場合があります。',
    applicationPeriod: '令和8年度。区立小中学校の給食費無償化は原則手続き不要。完全弁当等は申請方式',
    description: '足立区が、区立小中学校の学校給食費を無償化し、完全弁当対応世帯等にも補助を行う制度です。旧データの学校給食費助成制度候補を、公式の無償化・補助制度へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>足立区立小中学校の学校給食費を無償化し、保護者の給食費負担を軽減します。</p>' },
      { heading: '補助対象', content: '<p>区立小中学校の給食費無償化に加え、食物アレルギー等で完全弁当を持参する世帯や、区外特別支援学校等に通う児童生徒にも補助が案内されています。</p>' },
      { heading: '申請時の注意', content: '<p>区立小中学校の給食費無償化は原則手続き不要ですが、完全弁当世帯等の補助は申請が必要です。対象区分ごとの案内を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/gakumu/k-kyoiku/kyoiku/gakko-kyushokuhi.html',
    sourceName: '足立区 学校給食費無償化',
    sourceUrls: [
      'https://www.city.adachi.tokyo.jp/gakumu/k-kyoiku/kyoiku/gakko-kyushokuhi.html',
      'https://www.city.adachi.tokyo.jp/gakumu/k-kyoiku/kyoiku/bento-hojokin.html'
    ],
    sourceNote: '足立区公式ページで令和8年度の学校給食費無償化、区立小中学校の給食費無償、完全弁当世帯等への補助を確認。旧「学校給食費助成制度」候補から公式名称へ補正。',
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
    slug: 'taito-childcare-subsidy',
    title: '台東区 認証保育所等保育料助成制度',
    organization: '台東区',
    type: 'local',
    maxAmount: '認証保育所等助成・無償化給付を含め月額上限は年齢等で異なる',
    maxAmountNum: 4.2,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['台東区', '認証保育所', '認可外保育'],
    eligibility: '台東区に住所があり、保護者と児童が同一世帯で、月120時間以上の月極契約により認証保育所等または認可外保育施設等を利用する児童の保護者が対象です。認可保育所・幼稚園等を利用している場合などは対象外です。',
    applicationPeriod: '利用施設・給付認定区分により異なります。年度内利用分は台東区の案内に従って申請します',
    description: '台東区が、認証保育所等や認可外保育施設等の保育料負担を軽減する制度です。生成データの「認可外保育施設利用助成金」を、公式ページで確認できる現行制度名と要件に補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>保育の必要性があり、認証保育所等または認可外保育施設等を月極契約で利用している世帯に対し、保育料負担を軽減します。</p>'
      },
      {
        heading: '主な要件',
        content: '<p>児童と保護者が台東区民で同一世帯であること、月120時間以上の月極契約であること、認可保育所や幼稚園等を利用していないことなどが要件です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>認証保育所等の区助成と、認可外保育施設等の無償化給付は、年齢、課税状況、施設種別、保育料等により上限が異なります。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/hoiku_youjikyouiku/hoikutakuji/ninshohoikusho/hoikuryoujyosei.html',
    sourceName: '台東区 認証保育所等保育料助成制度',
    sourceUrls: [
      'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/hoiku_youjikyouiku/hoikutakuji/ninshohoikusho/hoikuryoujyosei.html',
      'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/hoiku_youjikyouiku/hoikutakuji/youji_mushou/ninkagaimusyouka.html'
    ],
    sourceNote: '台東区公式ページで認証保育所等保育料助成制度、認可外保育施設等の無償化、対象要件、年齢・施設区分別の上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-elderly-support',
    title: '台東区 はつらつサービス 配食サービス',
    organization: '台東区社会福祉協議会・台東区',
    type: 'local',
    maxAmount: '助成後1食515円から780円程度。月40食まで',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['台東区', '高齢者', '配食サービス'],
    eligibility: '台東区の高齢者向け在宅サービスを必要とし、はつらつサービスの利用会員登録等を行う方が対象です。利用可否や回数は生活状況等により確認されます。',
    applicationPeriod: '通年受付。利用には相談・登録等が必要です',
    description: '台東区社会福祉協議会等が、高齢者向けの食事を自宅へ届ける配食サービスです。安否確認を兼ね、昼食・夕食について区の助成後の利用者負担で利用できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者向けの食事を自宅まで届け、手渡しによる安否確認も行うサービスです。</p>'
      },
      {
        heading: '利用者負担',
        content: '<p>公式資料では、助成後の利用者負担は1食あたりおおむね515円から780円程度、月40食までと案内されています。</p>'
      },
      {
        heading: '注意点',
        content: '<p>具体的な対象要件、利用回数、事業者、負担額は年度資料や相談時の確認が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/index.html',
    sourceName: '台東区 高齢者サービス案内・配食サービス',
    sourceUrls: [
      'https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/index.html',
      'https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/koureisyanotebiki.files/20260401.pdf',
      'https://www.city.taito.lg.jp/kusei/sanka/kanko/benricho/kurashinoshiori.files/13koureisya.pdf'
    ],
    sourceNote: '台東区公式の高齢者サービス案内、令和8年度高齢者福祉のしおりPDF、暮らしのしおりPDFで配食サービス、安否確認、利用者負担、月40食までの案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-nursing-equipment',
    title: '台東区 紙おむつの支給',
    organization: '台東区',
    type: 'local',
    maxAmount: '月額最大7,000円相当。おむつ代助成は月額上限5,000円',
    maxAmountNum: 8.4,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['台東区', '紙おむつ', '介護用品'],
    eligibility: '台東区に住所があり、常時おむつを使用している方で、要支援1以上の介護認定を受けている方、または65歳以上で入院中の方等が対象です。特別養護老人ホーム等への入所者、生活保護受給者などは対象外です。',
    applicationPeriod: '通年受付',
    description: '台東区が、高齢者や家族の経済的負担を軽減するため、紙おむつの現物配送、購入補助券、おむつ代助成を行う制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>常時おむつを使用する対象者に、紙おむつの現物配送、購入補助券、またはおむつ代助成を行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>要支援1・2は月3,000円相当、要介護1・2は月5,000円相当、要介護3から5は月7,000円相当です。病院等で紙おむつ持ち込み不可の場合は月5,000円を上限に助成されます。</p>'
      },
      {
        heading: '対象外',
        content: '<p>特別養護老人ホーム等の介護保険施設や認知症高齢者グループホーム等への入所者、生活保護受給者などは対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/kyuuhujosei/kamiomutu.html',
    sourceName: '台東区 紙おむつの支給',
    sourceUrls: ['https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/kyuuhujosei/kamiomutu.html'],
    sourceNote: '台東区公式ページで対象者、支給方法、介護度別の月額相当額、おむつ代助成の上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-scholarship',
    title: '台東区 高等学校等入学費用助成（令和8年度受付終了）',
    organization: '台東区',
    type: 'local',
    maxAmount: '高等学校等入学にかかる費用の一部',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['台東区', '高校進学', '入学費用'],
    eligibility: '令和7年度に中学校等を卒業し令和8年度に高等学校等へ進学した児童の保護者で、児童と保護者が台東区に住所を有し、保護者全員が令和7年度住民税非課税または児童扶養手当受給世帯であること等が要件です。生活保護受給世帯は対象外です。',
    applicationPeriod: '2026年4月21日から2026年6月30日まで。令和8年度受付終了',
    deadlineDate: '2026-06-30',
    description: '台東区が、経済的理由により高等学校等への進学が困難な家庭に、入学にかかる費用の一部を助成する制度です。生成データの「奨学資金貸付制度」は現行の同名ページを確認できなかったため、公式確認できる現行の入学費用助成として補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高等学校等へ進学する児童のいる世帯に対し、入学にかかる費用の一部を助成します。</p>'
      },
      {
        heading: '主な要件',
        content: '<p>対象児童が令和7年度に中学校等を卒業し令和8年度に高等学校等へ進学していること、児童と保護者が台東区に住所を有すること、保護者全員が住民税非課税または児童扶養手当受給世帯であること等が要件です。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度分の申請期間は2026年4月21日から2026年6月30日までで、受付は終了しています。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/teate_josei/shougakukinn.html',
    sourceName: '台東区 高等学校等の進学者に対して入学にかかる費用の一部を助成します',
    sourceUrls: [
      'https://www.city.taito.lg.jp/kosodatekyouiku/kosodate/mokutei/teate_josei/shougakukinn.html',
      'https://www.city.taito.lg.jp/kurashi/soudan/seikatsu/r7syugakusikin.html'
    ],
    sourceNote: '台東区公式ページで高等学校等入学費用助成の対象、申請期間、受付終了を確認。保健福祉修学資金等貸付は令和7年度末で貸付終了と案内されているため、現行の一般奨学資金貸付としては掲載しない。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-seismic-diagnosis',
    title: '台東区 耐震診断・補強設計・耐震改修工事等に対する助成',
    organization: '台東区',
    type: 'local',
    maxAmount: '木造住宅の耐震診断は上限20万円・10分の10等',
    maxAmountNum: 20,
    category: 'disaster',
    prefecture: '東京都',
    tags: ['台東区', '耐震診断', '住宅'],
    eligibility: '昭和56年5月31日以前に建築された旧耐震基準の建築物や、平成12年5月31日以前に建築された木造新耐震住宅等の所有者が対象です。所有者、法人、中小企業者等の要件があり、助成を受けるには契約前の申請が必要です。',
    applicationPeriod: '令和8年度の申請期限は2026年12月11日予定。必ず契約前に申請が必要です',
    deadlineDate: '2026-12-11',
    description: '台東区が、建築物の耐震診断、補強設計、耐震改修工事等の費用を助成する制度です。生成データの「木造住宅耐震診断助成制度」を、公式ページの現行制度名と助成区分に補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旧耐震基準の建築物等について、耐震診断、補強設計、耐震改修工事等にかかる費用の一部を助成します。</p>'
      },
      {
        heading: '耐震診断の助成額',
        content: '<p>木造住宅は診断費用の10分の10、上限20万円。非木造住宅は2分の1、上限50万円。住宅以外の建築物は5分の4、上限20万円です。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>令和8年度は2026年12月11日が申請期限予定です。契約前の申請が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kenchiku/jutaku/taishinsien/taishin/taishinkoji.html',
    sourceName: '台東区 耐震診断・補強設計・耐震改修工事等に対する助成',
    sourceUrls: ['https://www.city.taito.lg.jp/kenchiku/jutaku/taishinsien/taishin/taishinkoji.html'],
    sourceNote: '台東区公式ページで対象建築物、耐震診断の助成率・上限額、申請期限予定を確認。作業時点で旧PDFリンクは404化していたため参照URLには含めない。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-senior-meal-service',
    title: '台東区 高齢者配食サービス事業（重複候補）',
    organization: '台東区社会福祉協議会・台東区',
    type: 'local',
    maxAmount: 'taito-elderly-supportに統合',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['台東区', '高齢者', '配食サービス', '重複候補'],
    eligibility: '同一内容の配食サービスは taito-elderly-support に統合して掲載します。',
    applicationPeriod: '重複候補。taito-elderly-supportに統合し通常一覧から除外',
    deadlineDate: '2026-07-02',
    description: '生成データ上で city-batch4 と city-batch40 に重複して存在した高齢者配食サービス候補です。公式確認できる実サービスは taito-elderly-support に集約し、このslugは重複回避のため通常一覧から除外します。',
    sections: [
      {
        heading: '重複整理',
        content: '<p>台東区の高齢者配食サービスは taito-elderly-support と同一内容のため、通常掲載は統合先に一本化します。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/index.html',
    sourceName: '台東区 高齢者サービス案内・配食サービス',
    sourceUrls: [
      'https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/index.html',
      'https://www.city.taito.lg.jp/kenkohukusi/korei/serviceannai/koureisyanotebiki.files/20260401.pdf',
      'https://www.city.taito.lg.jp/kusei/sanka/kanko/benricho/kurashinoshiori.files/13koureisya.pdf'
    ],
    sourceNote: 'city-batch4 と city-batch40 の重複候補を確認。公式確認できる配食サービスは taito-elderly-support に統合し、重複slugは期限切れ扱いで通常一覧から除外。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-sme-support',
    title: '台東区 中小企業融資制度・中小企業支援',
    organization: '台東区',
    type: 'local',
    maxAmount: '融資あっ旋・利子補助・信用保証料補助は制度により異なる',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '東京都',
    tags: ['台東区', '中小企業', '融資', '経営相談'],
    eligibility: '台東区内の中小企業者等が対象です。制度ごとに、区内事業所、事業実態、税の滞納がないこと、信用保証対象業種であること等の要件があります。',
    applicationPeriod: '制度により異なります。融資あっ旋や相談は事前相談が必要な場合があります',
    description: '台東区が、中小企業向けに経営相談、融資あっ旋、利子補助、信用保証料補助、各種助成金を案内する支援制度群です。生成データの「中小企業経営支援補助金」は同名の現行単独補助として確認できないため、公式確認できる中小企業支援・融資制度として補正しました。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区では、中小企業向けに経営相談、融資あっ旋、利子補助、信用保証料補助、助成金などを案内しています。</p>'
      },
      {
        heading: '融資制度',
        content: '<p>中小企業の資金調達を支援するため、東京信用保証協会の保証付き融資のあっ旋と、利子・信用保証料の補助を行います。</p>'
      },
      {
        heading: '注意点',
        content: '<p>補助額、融資限度額、利率、保証料補助は制度区分ごとに異なるため、申請前に公式ページと相談窓口で確認が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/bunka_kanko/jigyoukeiei/index.html',
    sourceName: '台東区 中小企業支援・中小企業融資制度',
    sourceUrls: [
      'https://www.city.taito.lg.jp/bunka_kanko/jigyoukeiei/index.html',
      'https://www.city.taito.lg.jp/bunka_kanko/jigyoukeiei/yusijoseikin/yushiseido/top.html',
      'https://www.city.taito.lg.jp/bunka_kanko/jigyoukeiei/keiei/soudan.html'
    ],
    sourceNote: '台東区公式の中小企業支援一覧、融資制度ページ、経営相談ページで中小企業向け支援、融資あっ旋、利子補助、信用保証料補助、相談制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'taito-startup-support',
    title: '台東区 開業支援資金（台開）',
    organization: '台東区',
    type: 'local',
    maxAmount: 'あっ旋限度額1,000万円',
    maxAmountNum: 1000,
    category: 'employment',
    prefecture: '東京都',
    tags: ['台東区', '創業支援', '開業資金', '融資'],
    eligibility: '区内でこれから創業する方、または開業後1年未満の方等が対象です。原則として融資希望額の3分の1以上の自己資金が必要で、申し込みには経営相談員との面談予約が必要です。',
    applicationPeriod: '通年受付。事前に経営相談員との面談予約が必要です',
    description: '台東区が、創業予定者や開業後間もない事業者に対し、開業資金の融資あっ旋を行う制度です。直接給付型の創業補助金ではなく、融資・利子等の支援制度として掲載します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>台東区内で創業予定または開業後1年未満の方を対象に、開業資金の融資あっ旋を行います。</p>'
      },
      {
        heading: '融資限度額',
        content: '<p>あっ旋限度額は1,000万円です。おおむね融資希望額の3分の1以上の自己資金が必要と案内されています。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>申し込みには、事前に経営相談員との面談予約が必要です。特定創業支援等事業の証明により、登録免許税軽減等の別支援を受けられる場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.taito.lg.jp/bunka_kanko/jigyoukeiei/yusijoseikin/yushiseido/tokushuseido/201510_kai.html',
    sourceName: '台東区 開業支援資金（台開）',
    sourceUrls: [
      'https://www.city.taito.lg.jp/bunka_kanko/jigyoukeiei/yusijoseikin/yushiseido/tokushuseido/201510_kai.html',
      'https://www.city.taito.lg.jp/bunka_kanko/jigyoukeiei/sougyoushien/tokuteisougyoushien.html'
    ],
    sourceNote: '台東区公式ページで開業支援資金の対象、あっ旋限度額1,000万円、自己資金要件、経営相談員との面談予約、特定創業支援等事業を確認。旧生成データの直接補助金表現は融資制度へ補正。',
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
    slug: 'chiyoda-birth-bonus',
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
  {
    slug: 'chiyoda-childcare-subsidy',
    title: '千代田区 中高生世代応援手当（区独自制度）',
    organization: '千代田区',
    type: 'local',
    maxAmount: '児童1人につき月額15,000円',
    maxAmountNum: 18,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['千代田区', '中高生世代応援手当', '子育て支援'],
    eligibility: '中学生・高校生世代の児童を養育する方が対象です。対象児童は12歳到達後最初の4月1日から18歳到達後最初の3月31日までの間にある方です。',
    applicationPeriod: '通年。転入時は15日以内の申請で転出予定日の翌月分から支給対象',
    description: '千代田区が、中学生・高校生世代の子どもの教育費や食費等の経済的負担を軽減するため、児童1人につき月額15,000円を支給する区独自の手当です。旧データの次世代育成手当候補を現行公式制度へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>子どもの成長とともに増加する教育費、食費等の負担軽減を目的に、中学生・高校生世代の児童を養育する方へ手当を支給します。</p>' },
      { heading: '手当額', content: '<p>対象児童1人につき月額15,000円です。毎年2月・6月・10月に、それぞれ前月までの分が支給されます。</p>' },
      { heading: '申請時の注意', content: '<p>原則として申請日の翌月分から支給されます。転入時は、前住所地での転出予定日の翌日から15日以内に申請すると、転出予定日の翌月分から支給対象になります。</p>' }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/kosodate/teate/chukosei-oenteate.html',
    sourceName: '千代田区 中高生世代応援手当（区独自制度）',
    sourceUrls: [
      'https://www.city.chiyoda.lg.jp/koho/kosodate/teate/chukosei-oenteate.html',
      'https://www.city.chiyoda.lg.jp/koho/kosodate/kosodate/ninshin/ninpu-shienkyufu.html'
    ],
    sourceNote: '千代田区公式ページで2026年2月27日更新、中高生世代応援手当、対象児童、月額15,000円、支払月、申請時期を確認。旧「次世代育成手当」候補から現行公式制度へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-afterschool',
    title: '千代田区 放課後子ども教室',
    organization: '千代田区',
    type: 'local',
    maxAmount: '参加費無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['千代田区', '放課後子ども教室', '教育支援'],
    eligibility: '放課後子ども教室を実施する千代田区立小学校の在校生（1年生から6年生）が対象です。',
    applicationPeriod: '学校ごとの案内に従って申込み。登校日の月曜日から金曜日、放課後から午後5時まで実施',
    description: '千代田区が、放課後の学校施設を活用し、在校する児童が安全・安心に過ごせる居場所を提供する事業です。参加費は無料で、宿題・自主学習、遊び、体験活動を行います。',
    sections: [
      { heading: '制度の概要', content: '<p>区立小学校の放課後施設を活用し、専任指導員が宿題や自主学習のサポート、健全な遊びの提供を行います。</p>' },
      { heading: '対象と費用', content: '<p>対象は実施校の在校生1年生から6年生です。参加費は無料で、放課後子ども教室の実施時間中のけがや事故には区負担の保険が適用されます。</p>' },
      { heading: '実施内容', content: '<p>宿題やドリルなどの自学自習、遊びやスポーツ、学校ごとの文化・スポーツ体験プログラムなどが実施されています。</p>' }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/kosodate/kyoikukatsudo/kodomokyoshitsu.html',
    sourceName: '千代田区 放課後子ども教室',
    sourceUrls: [
      'https://www.city.chiyoda.lg.jp/koho/kosodate/kyoikukatsudo/kodomokyoshitsu.html'
    ],
    sourceNote: '千代田区公式ページで放課後子ども教室、区立8小学校での実施、対象者、参加費無料、実施日時、実施内容、保険料区負担を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-senior-dental',
    title: '千代田区 区民歯科健診',
    organization: '千代田区',
    type: 'local',
    maxAmount: '費用無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['千代田区', '歯科健診', 'オーラルフレイル'],
    eligibility: '千代田区にお住まいの19歳以上の方が対象です。65歳以上の方にはオーラルフレイル予防に関する検査も実施されます。',
    applicationPeriod: '2026年6月15日から2027年2月28日まで',
    deadlineDate: '2027-02-28',
    description: '千代田区が、むし歯や歯周疾患の早期発見・早期治療や予防を目的に実施する無料の区民歯科健診です。旧データの高齢者歯科健診助成候補を、公式名称・対象年齢・受診期間に合わせて補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>千代田区民の歯と口腔の健康づくりのため、19歳以上の区民を対象に区民歯科健診を実施します。</p>' },
      { heading: '費用と受診期間', content: '<p>費用は無料です。令和8年度の受診期間は2026年6月15日から2027年2月28日までです。</p>' },
      { heading: '検査内容', content: '<p>現在歯・喪失歯、歯周組織、口腔清掃状態、歯石の付着、歯科保健指導などを確認します。65歳以上の方には嚥下機能、咀嚼機能、舌・口唇機能などの検査も実施されます。</p>' }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/kenko/kenko/kenkoshinsa/shikakenshin.html',
    sourceName: '千代田区 区民歯科健診',
    sourceUrls: [
      'https://www.city.chiyoda.lg.jp/koho/kenko/kenko/kenkoshinsa/shikakenshin.html',
      'https://www.city.chiyoda.lg.jp/koho/kenko/kenko/kenkoshinsa/index.html'
    ],
    sourceNote: '千代田区公式ページで2026年6月25日更新、対象者19歳以上、65歳以上のオーラルフレイル予防検査、費用無料、受診期間2026年6月15日から2027年2月28日までを確認。旧「高齢者歯科健診助成事業」候補から公式名称へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-nursing-equipment',
    title: '千代田区 紙おむつ支給事業',
    organization: '千代田区',
    type: 'local',
    maxAmount: '紙おむつ月額10,600円以内は1割負担、現金助成は月額上限13,200円',
    maxAmountNum: 15.84,
    category: 'nursing',
    prefecture: '東京都',
    tags: ['千代田区', '紙おむつ', '介護用品'],
    eligibility: '千代田区に住所を有し、要介護1以上で常時紙おむつの着用を必要とする方、または65歳以上で医療保険により入院中かつ同様の心身状態にある方が対象です。',
    applicationPeriod: '通年',
    description: '千代田区が、要介護1以上の高齢者等に対して毎月1回ご自宅へ紙おむつを配達する事業です。病院等に紙おむつを持ち込めない場合は、おむつ代現金助成もあります。',
    sections: [
      { heading: '制度の概要', content: '<p>原則として要介護1以上の高齢者に対し、毎月1回、紙おむつを自宅等へ配達する事業です。</p>' },
      { heading: '支援内容', content: '<p>1人につき1か月あたり10,600円以内は購入価格の1割負担で購入できます。生活保護世帯は10,600円以内無料です。</p>' },
      { heading: '現金助成', content: '<p>病院や施設に入院・入所中で病院指定の紙おむつを使用する場合は、おむつ代現金助成制度があり、月額上限13,200円まで助成されます。</p>' }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/kenko/koresha/dokuji-kaigo/kami.html',
    sourceName: '千代田区 紙おむつ',
    sourceUrls: [
      'https://www.city.chiyoda.lg.jp/koho/kenko/koresha/dokuji-kaigo/kami.html',
      'https://www.portal.city.chiyoda.lg.jp/ctz/appMngDef/a04Ih0000067I83IAE/am000000139'
    ],
    sourceNote: '千代田区公式ページで紙おむつ支給事業、対象者、毎月配達、月額10,600円以内は1割負担、生活保護世帯無料、現金助成月額上限13,200円、オンライン申請を確認。旧「介護用品支給事業」候補から公式名称へ補正。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiyoda-telework-bonus',
    title: '千代田区 中小企業販路拡大事業支援補助',
    organization: '千代田区',
    type: 'local',
    maxAmount: '通常10万円、加算要件該当で20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['千代田区', '中小企業支援', '販路拡大'],
    eligibility: '区内に登記上の本店所在地または主たる事業所と営業実態がある中小企業者が対象です。バーチャルオフィスや税滞納等は対象外です。',
    applicationPeriod: '申請受付中。展示会出展後、出展した年度内に申請。予算額到達で終了',
    description: '千代田区が、区内中小企業者による展示会・オンライン展示会への出展経費の一部を補助する制度です。テレワーク専用補助は千代田区公式助成一覧で確認できないため、公式確認できる現行の事業者向け補助へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>区内中小企業者が販路拡大のため、自社の製品、技術またはサービス等を展示会やオンライン展示会に出展する経費の一部を補助します。</p>' },
      { heading: '補助内容', content: '<p>補助率は補助対象経費の3分の2で、補助限度額は通常10万円です。創業後10年以内で認定団体に所属している場合など、加算要件に該当すると20万円まで補助されます。</p>' },
      { heading: '申請時の注意', content: '<p>令和8年4月1日から事業者ポータルサイトでのオンライン申請となっています。交付申請は展示会出展前には受け付けておらず、展示会出展後、出展した年度内に申請する必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.chiyoda.lg.jp/koho/shigoto/jigyosho/josei/hanrokakudai.html',
    sourceName: '千代田区 中小企業販路拡大事業支援補助',
    sourceUrls: [
      'https://www.city.chiyoda.lg.jp/koho/shigoto/jigyosho/josei/index.html',
      'https://www.city.chiyoda.lg.jp/koho/shigoto/jigyosho/josei/hanrokakudai.html'
    ],
    sourceNote: '千代田区公式の各種助成金一覧と中小企業販路拡大事業支援補助ページで、テレワーク専用補助は現行制度として確認できないため、公式確認できる事業者向け補助へ補正。2026年4月21日更新、オンライン申請、補助率2/3、通常上限10万円、加算時20万円、対象者、対象経費を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokyo-private-school-support',
    title: '東京都 私立高等学校等授業料軽減助成金',
    organization: '東京都・東京都私学財団',
    type: 'local',
    maxAmount: '就学支援金と合わせて最大年50万1,000円。都の授業料軽減助成金上限は年4万3,800円',
    maxAmountNum: 50.1,
    category: 'education',
    prefecture: '東京都',
    tags: ['東京都', '私立高校', '授業料軽減', '就学支援金', '令和8年度'],
    eligibility: '保護者等と生徒が、令和8年5月1日から申請時まで引き続き東京都内に住所を有し、私立高等学校等に在学している場合などが対象です。都外校も一部対象になりますが、通信制課程などは別扱いです。',
    applicationPeriod: '通常申請は2026年7月1日から2026年7月31日まで。特別申請は令和9年1月上旬予定',
    deadlineDate: '2026-07-31',
    description: '東京都と東京都私学財団が、都内在住の私立高等学校等の生徒の保護者負担を軽減するため、国の就学支援金と合わせて都内私立高等学校の平均授業料まで助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>私立高等学校等に通う生徒の保護者の経済的負担を軽減するため、国の就学支援金とあわせて都内私立高等学校の平均授業料まで都が助成する制度です。</p>' },
      { heading: '助成額', content: '<p>全日制・定時制・専修学校高等課程等は、就学支援金上限額45万7,200円、授業料軽減助成金上限額4万3,800円で、合わせて最大年50万1,000円です。助成額は実際に負担した授業料額が上限です。</p>' },
      { heading: '申請時の注意', content: '<p>最大額まで受給するには、国の就学支援金と都の授業料軽減助成金の両方に申請が必要です。助成金は毎年度申請が必要で、通常申請期間を過ぎた場合は受付できません。</p>' }
    ],
    officialUrl: 'https://www.shigaku-tokyo.or.jp/parents_index/pa_jugyoryo/',
    sourceName: '東京都私学財団 令和8年度私立高等学校等授業料軽減助成金',
    sourceUrls: ['https://www.shigaku-tokyo.or.jp/parents_index/pa_jugyoryo/'],
    sourceNote: '東京都私学財団公式ページで、令和8年度私立高等学校等授業料軽減助成金を確認。通常申請受付期間は2026年7月1日から7月31日まで。全日制・定時制・専修学校高等課程等は、就学支援金上限額45万7,200円と授業料軽減助成金上限額4万3,800円を合わせて最大年50万1,000円であることを確認。保護者等と生徒が令和8年5月1日から申請時まで引き続き東京都内に住所を有することなどの対象要件を確認。旧生成データを公式確認済みデータで置換。',
    verifiedAt: '2026-07-01',
    publishedAt: '2026-07-01',
  },
  {
    slug: 'chuo-daycare-support',
    title: '中央区 認証保育所保育料補助金',
    organization: '中央区',
    type: 'local',
    maxAmount: '0歳児から2歳児クラスは月額上限8万円。3歳児から5歳児クラスは保育料に応じた月額補助',
    maxAmountNum: 8,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['中央区', '認証保育所', '保育料補助', '令和8年度'],
    eligibility: '児童と保護者が補助対象月の初日から中央区に住民登録があり、認証保育所と月120時間以上の月極契約を締結して在籍し、保育料を滞納していない場合などが対象です。',
    applicationPeriod: '令和8年4月から令和9年3月の補助対象期間。令和9年3月入所分の最終提出期限は2027年3月10日',
    deadlineDate: '2027-03-10',
    description: '中央区が、認証保育所を利用する保護者の経済的負担を軽減するため、認証保育所に支払う保育料の全額または一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>認可保育所の入所基準を満たし、認証保育所に児童を預けている保護者の方の経済的負担を減らすため、認証保育所に支払う保育料の全額または一部を補助します。</p>' },
      { heading: '補助額', content: '<p>0歳児から2歳児クラスは、認証保育所の月額保育料と補助上限額80,000円のいずれか少ない額を補助します。3歳児から5歳児クラスは月額保育料に応じた補助額が設定されています。</p>' },
      { heading: '申請時の注意', content: '<p>児童1人につき年1回申請が必要です。前年度から引き続き利用する場合も毎年度申請が必要で、年度を越えての申請はできません。</p>' }
    ],
    officialUrl: 'https://www.city.chuo.lg.jp/a0021/kosodate/kosodate/hoikuen/hoiku/ninshouhoiku/ninsyouhoikusyotouhoikuryou.html',
    sourceName: '中央区 認証保育所保育料の補助',
    sourceUrls: ['https://www.city.chuo.lg.jp/a0021/kosodate/kosodate/hoikuen/hoiku/ninshouhoiku/ninsyouhoikusyotouhoikuryou.html'],
    sourceNote: '中央区公式ページで、認証保育所保育料の補助を確認。掲載日は2026年4月1日。令和8年4月から令和9年3月が補助対象期間で、0歳児から2歳児クラスは月額保育料と補助上限額80,000円のいずれか少ない額を補助することを確認。令和9年3月入所分の最終提出期限は2027年3月10日。旧URLは404だったため現行公式URLへ差し替え。',
    verifiedAt: '2026-07-01',
    publishedAt: '2026-07-01',
  },
  {
    slug: 'ota-startup-support',
    title: '大田区 中小企業融資あっせん制度「開業資金」',
    organization: '大田区',
    type: 'local',
    maxAmount: '融資限度額2,000万円、区の利子補給率1.4%。商店街空き店舗活用・ものづくり事業開業資金は本人負担率なし',
    maxAmountNum: 2000,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['大田区', '創業', '開業資金', '融資あっせん', '利子補給'],
    eligibility: '事業を営んでいない個人が大田区内に実質的な事業所を有して開業する場合、または区内に法人を設立して開業する場合などで、納期到来分の住民税を完納していることが必要です。開業から1年未満の方も対象に含まれます。',
    applicationPeriod: '通年相談型。相談・申込は予約制で、月曜日から金曜日の午前9時から11時、午後1時から4時',
    description: '大田区が、創業者向けの運転・設備資金について金融機関への融資あっせんを行い、支払利子の一部または全部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大田区中小企業融資あっせん制度のうち、創業者向けの運転・設備資金メニューです。経営改善や設備向上等に必要な事業資金として低利融資を金融機関にあっせんし、支払利子の一部または全部を補助します。</p>' },
      { heading: '融資内容', content: '<p>資金使途は開業資金（運転・設備資金）で、融資限度額は2,000万円です。固定金利は1.8%以下、区の利子補給率は1.4%です。商店街空き店舗活用開業資金とものづくり事業開業資金では本人負担率なしと案内されています。</p>' },
      { heading: '申込時の注意', content: '<p>相談・申込受付は予約制です。事前に融資窓口へ電話予約し、予約日時に本人が来所して開業計画書の配付と記入説明を受ける必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/sangyo/yushi/kaigyo/kaigyo.html',
    sourceName: '大田区 中小企業融資あっせん制度「開業資金」',
    sourceUrls: [
      'https://www.city.ota.tokyo.jp/sangyo/yushi/kaigyo/kaigyo.html',
      'https://www.city.ota.tokyo.jp/sangyo/sogyoshien/sougyousikinn.html'
    ],
    sourceNote: '大田区公式ページで、中小企業融資あっせん制度「開業資金」を確認。更新日は2026年4月1日。創業者向けの運転・設備資金メニューで、融資限度額2,000万円、固定金利1.8%以下、区の利子補給率1.4%であることを確認。候補名は創業支援補助金だったが、公式上は補助金ではなく融資あっせん・利子補給制度のため、制度名と説明を公式名称に補正。',
    verifiedAt: '2026-07-01',
    publishedAt: '2026-07-01',
  },
  {
    slug: 'katsushika-afterschool',
    title: '葛飾区 放課後子ども事業（わくわくチャレンジ広場・助成金ではないため掲載停止）',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '助成金・給付金ではないため通常一覧から除外',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['葛飾区', '放課後子ども事業', '公式確認不可'],
    eligibility: '葛飾区立小学校に通う児童向けの放課後の居場所事業です。保護者向けの現金給付や補助金としては確認できません。',
    applicationPeriod: '助成金・補助金としての募集ではないため掲載停止',
    deadlineDate: '2026-07-01',
    description: '旧生成データでは放課後子ども教室事業を助成金として掲載していましたが、公式ページでは、学校施設内で自由な遊び、学習、体験活動を行う登録制の居場所事業として案内されています。補助金・給付金ではないため通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>葛飾区公式ページで、放課後子ども事業（わくわくチャレンジ広場）は小学生の放課後等の安全な居場所を提供する事業であることを確認しました。</p>' },
      { heading: '掲載停止の理由', content: '<p>保護者または児童に対する現金給付、利用料補助、購入費補助としては確認できないため、助成金ナビの通常一覧には掲載しません。</p>' },
      { heading: '確認時の注意', content: '<p>利用条件や実施校は学校ごとに異なるため、制度利用を検討する場合は葛飾区の実施校一覧と案内を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kosodate/1000057/1030200/1002681.html',
    sourceName: '葛飾区 放課後子ども事業（わくわくチャレンジ広場）について',
    sourceUrls: ['https://www.city.katsushika.lg.jp/kosodate/1000057/1030200/1002681.html'],
    sourceNote: '葛飾区公式ページで、わくわくチャレンジ広場は区内小学校で実施する放課後等の居場所事業であり、助成金・給付金ではないことを確認。誤掲載防止のため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'katsushika-birth-bonus',
    title: '葛飾区 妊婦支援給付金給付事業（既存slugへ集約）',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '現行制度は katsushika-pregnancy-support-benefit に集約済み',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['葛飾区', '妊婦支援給付', '重複抑止'],
    eligibility: '現行制度は、申請・届出日時点で葛飾区民である妊婦等を対象とする妊婦支援給付金です。同一内容は既存の公式確認済みslugで掲載済みです。',
    applicationPeriod: '既存slugへ集約済みのため通常一覧から除外',
    deadlineDate: '2026-07-01',
    description: '旧生成データの「出産祝い金」は、現行公式制度では妊婦支援給付金給付事業として確認できます。既に `katsushika-pregnancy-support-benefit` で公式確認済み掲載しているため、このslugは重複防止のため通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>葛飾区公式ページで、妊婦給付認定後に妊婦1人あたり5万円、胎児の数の届出後に子ども1人あたり5万円を給付する現行制度を確認しました。</p>' },
      { heading: '集約の理由', content: '<p>同じ公式制度は既に葛飾区妊婦支援給付金給付事業として公式確認済みデータに登録済みです。重複掲載を避けるため、この旧slugは通常一覧から除外します。</p>' },
      { heading: '利用時の注意', content: '<p>旧出産・子育て応援ギフトとの二重給付は対象外となる場合があります。申請時点の住所要件と受給履歴を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kenkou/1000050/1001803/1037742.html',
    sourceName: '葛飾区 妊婦支援給付金給付事業',
    sourceUrls: [
      'https://www.city.katsushika.lg.jp/kenkou/1000050/1001803/1037742.html',
      'https://www.city.katsushika.lg.jp/kenkou/1000050/1001803/index.html'
    ],
    sourceNote: '葛飾区公式ページで現行の妊婦支援給付金を確認。既存の katsushika-pregnancy-support-benefit と同一制度のため、この旧生成slugは重複防止として期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'katsushika-bousai-equipment',
    title: '葛飾区 消火器購入支援事業補助金',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '補助対象経費の2分の1・上限5,000円',
    maxAmountNum: 0.5,
    category: 'disaster',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['葛飾区', '防災用品', '消火器', '令和8年度'],
    eligibility: '葛飾区に住民登録があり、戸建住宅に居住している方で、葛飾区から消火器等に係る購入費等の補助を受けていない方が対象です。',
    applicationPeriod: '2026年6月29日から2027年2月26日必着分まで',
    deadlineDate: '2027-02-26',
    description: '葛飾区が、戸建住宅に居住する区民を対象に、新品の消火器等の購入費、対象となる廃棄費用、薬剤詰め替え費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>地震や火災への家庭での備えを支援するため、葛飾区が消火器・住宅用消火器・エアゾール式簡易消火具の購入費等を補助します。</p>' },
      { heading: '補助額', content: '<p>補助対象経費の2分の1で、上限は5,000円です。新品の消火器等の購入費、購入時に同時に行う期限切れ消火器等の廃棄費用、薬剤の詰め替え費用が対象です。</p>' },
      { heading: '申請時の注意', content: '<p>申請対象者は葛飾区に住民登録があり、戸建住宅に居住している方です。一世帯につき1回限りで、2027年2月26日必着分まで受け付けます。</p>' }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kurashi/1004028/1000063/1004029/1030358/1042492.html',
    sourceName: '葛飾区 消火器購入支援事業補助金',
    sourceUrls: [
      'https://www.city.katsushika.lg.jp/kurashi/1004028/1000063/1004029/1030358/1042492.html',
      'https://www.city.katsushika.lg.jp/kurashi/1004028/1000063/1004029/1030358/index.html'
    ],
    sourceNote: '葛飾区公式ページで、消火器購入支援事業補助金の対象者、対象経費、補助率2分の1、上限5,000円、申請期間2026年6月29日から2027年2月26日必着までを確認。旧生成データの防災用品購入助成を現行公式制度へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'katsushika-childcare-subsidy',
    title: '葛飾区 物価高対応子育て応援手当（令和7年度対象・受付整理）',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '対象児童1人あたり2万円（1回限り）',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['葛飾区', '子育て応援手当', '物価高対応', '受付整理'],
    eligibility: '令和7年9月分の児童手当対象児童、または令和7年10月1日から令和8年3月31日までに出生した児童などが対象です。',
    applicationPeriod: '対象区分により申請不要または申請制。令和8年3月31日出生分までの令和7年度物価高対応事業',
    deadlineDate: '2026-06-30',
    description: '葛飾区が令和7年度の物価高対応として、対象児童1人あたり2万円を1回限り支給する手当です。令和8年3月31日までの出生児を対象とする事業のため、通常一覧では期限切れ扱いにします。',
    sections: [
      { heading: '制度の概要', content: '<p>物価高騰の影響を受ける子育て世帯を支援するため、葛飾区が対象児童1人あたり2万円を支給する令和7年度の手当です。</p>' },
      { heading: '対象児童', content: '<p>令和7年9月分の児童手当の支給対象児童、令和7年10月1日から令和8年3月31日までに出生した児童などが対象です。</p>' },
      { heading: '掲載上の扱い', content: '<p>現在利用できる恒常的な子育て支援給付金として扱うと誤解を招くため、令和7年度対象の臨時手当として期限切れ扱いにしています。</p>' }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kosodate/1000056/1002336/1040609.html',
    sourceName: '葛飾区 物価高対応子育て応援手当',
    sourceUrls: [
      'https://www.city.katsushika.lg.jp/kosodate/1000056/1002336/1040609.html',
      'https://www.city.katsushika.lg.jp/kosodate/1000056/1002336/index.html'
    ],
    sourceNote: '葛飾区公式ページで、物価高対応子育て応援手当の対象児童、対象児童1人あたり2万円、令和7年10月1日から令和8年3月31日までに出生した児童を対象に含むことを確認。現行通年給付ではないため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'katsushika-nursing-home-reform',
    title: '葛飾区 介護保険住宅改修費・高齢者住宅設備改修費助成',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '介護保険住宅改修は対象工事20万円まで。高齢者住宅設備改修は階段昇降機本体等97.9万円・設置費35.3万円など',
    maxAmountNum: 133.2,
    category: 'nursing',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['葛飾区', '介護住宅改修', '住宅設備改修', '高齢者福祉'],
    eligibility: '介護保険住宅改修は要介護・要支援認定を受けている方が対象です。高齢者住宅設備改修は葛飾区に住民登録があり、要支援・要介護認定を受け、在宅生活が可能な方などが対象です。',
    applicationPeriod: '通年相談型。工事着工前に事前申請・相談が必要',
    description: '葛飾区が、要支援・要介護認定を受けている在宅高齢者等を対象に、介護保険住宅改修費の支給や、浴槽・洗面台・階段昇降機などの住宅設備改修費助成を行う制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>住み慣れた住宅で自立した生活や介護しやすい生活環境を整えるため、介護保険住宅改修費の支給と高齢者住宅設備改修費助成を行います。</p>' },
      { heading: '主な支援内容', content: '<p>介護保険住宅改修は対象工事費20万円を限度に、利用者負担割合に応じて9割・8割・7割分が支給されます。高齢者住宅設備改修では浴槽の取替え等37万9,000円、流し台・洗面台の取替え等15万6,000円、階段昇降機の機器本体等97万9,000円・設置費35万3,000円などの限度額があります。</p>' },
      { heading: '申請時の注意', content: '<p>工事着工後や完了後の申請は助成対象外です。必ずケアマネジャー、介護保険課、高齢者支援課に事前相談してください。</p>' }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/online/1007359/1030292/1007375/1007565.html',
    sourceName: '葛飾区 介護保険住宅改修費申請書等・住宅設備改修費助成',
    sourceUrls: [
      'https://www.city.katsushika.lg.jp/online/1007359/1030292/1007375/1007565.html',
      'https://www.city.katsushika.lg.jp/kenkou/1000052/1030186/1002141/1002163.html'
    ],
    sourceNote: '葛飾区公式ページで、介護保険住宅改修の対象工事限度額20万円、利用者負担割合に応じた支給、事前審査申請が必要なことを確認。高齢者住宅設備改修費助成では浴槽37.9万円、流し台・洗面台15.6万円、階段昇降機本体等97.9万円・設置費35.3万円等の限度額と工事前相談が必要なことを確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'edogawa-birth-bonus',
    title: '江戸川区 妊婦のための支援給付事業（既存slugへ集約）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '現行制度は edogawa-pregnancy-support-benefit に集約済み',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江戸川区', '妊婦支援給付', '重複抑止'],
    eligibility: '現行制度は、令和7年4月1日以降にぴよママ相談を受けた方等を対象とする妊婦のための支援給付事業です。同一内容は既存の公式確認済みslugで掲載済みです。',
    applicationPeriod: '既存slugへ集約済みのため通常一覧から除外',
    deadlineDate: '2026-07-01',
    description: '旧生成データの「出産祝い金」は、現行公式制度では妊婦のための支援給付事業として確認できます。既に `edogawa-pregnancy-support-benefit` で公式確認済み掲載しているため、このslugは重複防止のため通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>江戸川区公式ページで、妊娠時5万円、出産後5万円の妊婦のための支援給付事業を確認しました。</p>' },
      { heading: '集約の理由', content: '<p>同じ公式制度は既に江戸川区妊婦のための支援給付事業として公式確認済みデータに登録済みです。重複掲載を避けるため、この旧slugは通常一覧から除外します。</p>' },
      { heading: '申請時の注意', content: '<p>給付にはママページの作成と申請が必要です。申請時点で江戸川区に住民登録がない方には給付できません。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e052/kosodate/ninshin/kohukin/ninpunokyuhu.html',
    sourceName: '江戸川区 妊婦のための支援給付事業',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e052/kosodate/ninshin/kohukin/ninpunokyuhu.html',
      'https://www.city.edogawa.tokyo.jp/e052/kosodate/ninshin/index.html'
    ],
    sourceNote: '江戸川区公式ページで、令和7年4月1日からの妊婦のための支援給付、1回目妊娠時5万円、2回目出産後5万円を確認。既存の edogawa-pregnancy-support-benefit と同一制度のため、この旧生成slugは重複防止として期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'edogawa-childcare-subsidy',
    title: '江戸川区 物価高対応子育て応援手当（受付終了）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '対象児童1人あたり2万円（受付終了）',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江戸川区', '子育て応援手当', '物価高対応', '受付終了'],
    eligibility: '令和7年9月分の児童手当対象児童、または令和7年10月1日から令和8年3月31日までに出生した児童などが対象でした。',
    applicationPeriod: '申請受付は2026年4月30日で終了',
    deadlineDate: '2026-04-30',
    description: '江戸川区が令和7年度の物価高対応として対象児童1人あたり2万円を支給した手当です。公式ページで受付終了を確認したため、通常一覧から除外します。',
    sections: [
      { heading: '制度の概要', content: '<p>物価高の影響を受ける子育て世帯を支援するため、江戸川区が対象児童1人あたり2万円を支給した令和7年度の手当です。</p>' },
      { heading: '受付状況', content: '<p>公式ページで、申請受付は2026年4月30日をもって終了したと案内されています。</p>' },
      { heading: '掲載上の扱い', content: '<p>現在申請できる給付金として扱うと誤解を招くため、期限切れ扱いで通常一覧から除外します。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e049/kosodate/kosodate/teateshien/2025_oenteate_2.html',
    sourceName: '江戸川区 物価高対応子育て応援手当',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e049/kosodate/kosodate/teateshien/2025_oenteate_2.html',
      'https://www.city.edogawa.tokyo.jp/kosodate/kosodate/teateshien/index.html'
    ],
    sourceNote: '江戸川区公式ページで、物価高対応子育て応援手当の児童1人あたり2万円、支給対象児童、申請受付が2026年4月30日で終了したことを確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'edogawa-disability-medical',
    title: '江戸川区 心身障害者医療費助成（マル障・都制度）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '保険診療の自己負担分を助成。住民税非課税者は自己負担なし、課税者は原則1割負担',
    maxAmountNum: 0,
    category: 'medical',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['江戸川区', '心身障害者医療費助成', 'マル障'],
    eligibility: '身体障害者手帳1・2級、内部障害3級まで、愛の手帳1・2度、精神障害者保健福祉手帳1級などが対象です。所得制限、年齢制限、施設入所等の制限があります。',
    applicationPeriod: '通年。申請によりマル障受給者証を発行',
    description: '江戸川区で、対象となる心身障害のある方が健康保険を使って診療・調剤を受けたときの医療費自己負担分の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>健康保険を使って病院などで診療・調剤を受けたときの医療費自己負担分の一部を助成します。</p>' },
      { heading: '対象となる障害の程度', content: '<p>身体障害者手帳1・2級、内部障害3級まで、愛の手帳1・2度、精神障害者保健福祉手帳1級などが対象です。所得制限や65歳以上で新規取得した場合の年齢制限があります。</p>' },
      { heading: '助成内容', content: '<p>住民税非課税者は自己負担なし、住民税課税者は原則1割負担です。入院時食事療養標準負担額や保険診療以外の費用は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e041/kenko/fukushikaigo/shogaisha/iryo/marusho.html',
    sourceName: '江戸川区 心身障害者医療費助成（マル障・都制度）',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e041/kenko/fukushikaigo/shogaisha/iryo/marusho.html',
      'https://www.city.edogawa.tokyo.jp/e041/kenko/fukushikaigo/shogaisha/iryo/hayamihyo.html'
    ],
    sourceNote: '江戸川区公式ページで、助成対象となる障害の程度、所得制限・年齢制限、マル障受給者証の申請、住民税非課税者は自己負担なし、課税者は1割負担であることを確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'edogawa-education-support',
    title: '江戸川区 就学援助費（江戸川区立小・中学校）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '学用品費・給食費・修学旅行費など学校生活に必要な費用の一部',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['江戸川区', '就学援助', '教育費'],
    eligibility: '江戸川区に住み、江戸川区立小・中学校に通学している子どもがいる家庭で、生活保護を受けている方、生活保護の停止・廃止を受けた方、または生活保護に準ずる程度に困窮していると認められる方が対象です。',
    applicationPeriod: '毎年4月に学校を通じて申請書を配布。年度途中でも申請可能',
    description: '江戸川区が、経済的に就学が困難な家庭に対し、学校生活で必要な費用の一部を援助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>経済的に就学が困難な家庭に、学用品費、給食費、校外活動費、修学旅行費など学校生活で必要な費用の一部を援助します。</p>' },
      { heading: '対象者', content: '<p>江戸川区内に住み、区立小・中学校に通学している子どもがいる家庭で、生活保護を受けている方や生活保護に準ずる程度に困窮していると教育委員会が認めた方が対象です。</p>' },
      { heading: '申請方法', content: '<p>毎年4月に学校を通じて申請書が配布されます。学校、学務課、電子申請で申請でき、年度途中の申請も可能です。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e069/kosodate/kyoiku/kyouiku/tetuduki/shugakuenjo.html',
    sourceName: '江戸川区 就学援助費（江戸川区立小・中学校）',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e069/kosodate/kyoiku/kyouiku/tetuduki/shugakuenjo.html',
      'https://www.city.edogawa.tokyo.jp/e069/kosodate/kyoiku/jyosei_syougaku-kin/enjo_sinki.html'
    ],
    sourceNote: '江戸川区公式ページで、就学援助制度の目的、対象家庭、所得目安、毎年4月配布・年度途中申請可能な申請手続きを確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'edogawa-elderly-support',
    title: '江戸川区 民間緊急通報システム「マモルくん」（熟年者）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '区の契約料金は月額2,200円。状況により区から助成あり',
    maxAmountNum: 0.22,
    category: 'living',
    relatedCategories: ['nursing'],
    prefecture: '東京都',
    tags: ['江戸川区', '高齢者見守り', '緊急通報システム'],
    eligibility: '65歳以上のひとり暮らし、熟年世帯、65歳以上の方がいる世帯で希望する方が対象です。',
    applicationPeriod: '通年。電子申請または窓口申請',
    description: '江戸川区が、65歳以上のひとり暮らし世帯等に、民間緊急通報システムを区の契約料金で設置し、状況により区が助成する見守り支援です。',
    sections: [
      { heading: '制度の概要', content: '<p>ボタンを押すと24時間受付の受信センターへ通報され、救急訓練を受けた警備員等が駆けつける民間緊急通報システムです。</p>' },
      { heading: '支援内容', content: '<p>火災感知器や生活リズムセンサーを設置し、月1回の安否確認と24時間の生活相談受付も行います。区の契約料金は月額2,200円で、状況により区から助成があります。</p>' },
      { heading: '申請方法', content: '<p>電子申請ぴったりサービスまたは窓口で申請できます。利用条件や助成の有無は申請時に確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e039/kenko/fukushikaigo/jukunen/kurashi/network.html',
    sourceName: '江戸川区 地域支援ネットワーク（民間緊急通報システム「マモルくん」）',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e039/kenko/fukushikaigo/jukunen/kurashi/network.html',
      'https://www.city.edogawa.tokyo.jp/e039/kenko/fukushikaigo/jukunen/jukunen_ouen/index.html'
    ],
    sourceNote: '江戸川区公式ページで、65歳以上のひとり暮らし等が対象、区の契約料金月額2,200円、状況により区から助成あり、火災感知器・生活リズムセンサー・月1回安否確認を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'edogawa-nursing-equipment',
    title: '江戸川区 紙おむつ・防水シーツの支給（高齢者等）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '紙おむつは1人900点（9,000円分相当）まで1割自己負担。防水シーツは年度内1回2枚',
    maxAmountNum: 0.9,
    category: 'nursing',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['江戸川区', '紙おむつ', '防水シーツ', '介護用品'],
    eligibility: '40歳以上で介護保険の要介護4または5の在宅者、または医師の意見書により紙おむつの必要性が認められた要支援・要介護1から3の方や65歳以上の在宅者などが対象です。',
    applicationPeriod: '通年。電子申請または窓口申請',
    description: '江戸川区が、紙おむつを常時必要とする高齢者等に、紙おむつ・防水シーツを自己負担ありで支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>紙おむつを常時必要とする在宅の高齢者等に、紙おむつ・防水シーツを支給します。</p>' },
      { heading: '対象者', content: '<p>40歳以上で要介護4または5の在宅者、または医師の意見書により必要性が認められた要支援・要介護1から3の方や65歳以上の在宅者などが対象です。施設入所中や生活保護受給中の方は対象外です。</p>' },
      { heading: '利用金額', content: '<p>紙おむつは1人900点（9,000円分相当）まで1割自己負担で利用できます。防水シーツは年度内1回2枚で、紙おむつとは別に費用の1割を自己負担します。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e040/kenko/fukushikaigo/jukunen/kaigo/kamiomutsu.html',
    sourceName: '江戸川区 紙おむつ・防水シーツの支給（高齢者等）',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e040/kenko/fukushikaigo/jukunen/kaigo/kamiomutsu.html',
      'https://www.city.edogawa.tokyo.jp/e040/kuseijoho/denshi/download/kenko/d_jukunensha/kamiomutusikyu.html',
      'https://www.city.edogawa.tokyo.jp/e040/kenko/fukushikaigo/jukunen/kaigo/omutsujose.html'
    ],
    sourceNote: '江戸川区公式ページで、紙おむつを常時必要とする方への支給、対象者、紙おむつ900点（9,000円分相当）まで1割自己負担、防水シーツ年度内1回2枚、おむつ使用料助成との関係を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'edogawa-scholarship',
    title: '江戸川区 入学資金融資あっせん制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '高校等100万円、短大・大学等200万円、海外留学200万円まで。本人負担利率0.5%となるよう利子補給',
    maxAmountNum: 200,
    category: 'education',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['江戸川区', '入学資金', '融資あっせん', '利子補給'],
    eligibility: '進学予定者の保護者等で満20歳以上、江戸川区内に引き続き1年以上居住、住民税滞納なし、生活保護を受けていない、安定継続した収入があるなどの条件を満たす方が対象です。',
    applicationPeriod: '通年相談型。入学先への払込日から1か月前をめやすに申込み',
    description: '江戸川区が、私立校への進学や海外留学に必要な入学手続時の資金を区内信用金庫から低利で借りられるようにあっせんし、利子の一部と信用保証保険料を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>私立校への進学または海外留学の入学手続時に必要な資金について、区内信用金庫から低利で借りられるよう融資をあっせんします。</p>' },
      { heading: '融資額と利子補給', content: '<p>高校・高専・専修学校高等課程は10万円以上100万円以内、短大・大学・専修学校専門課程と海外留学は10万円以上200万円以内です。利率1.7%に対し、本人負担が0.5%となるよう区が利子補給します。</p>' },
      { heading: '申請時の注意', content: '<p>対象は入学手続時に一括して学校へ納付する入学金・設備費・授業料等で、既に納入済みの費用や制服代、教科書代、通学費等は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e068/kosodate/kyoiku/jyosei_syougaku-kin/syougaku-kin_high-school/nyugakusikin.html',
    sourceName: '江戸川区 入学資金融資あっせんのご案内',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e068/kosodate/kyoiku/jyosei_syougaku-kin/syougaku-kin_high-school/nyugakusikin.html',
      'https://www.city.edogawa.tokyo.jp/kosodate/kyoiku/jyosei_syougaku-kin/index.html',
      'https://www.city.edogawa.tokyo.jp/e068/kosodate/kyoiku/jyosei_syougaku-kin/syougaku-kin_high-school/index.html',
      'https://www.city.edogawa.tokyo.jp/e068/kosodate/kyoiku/jyosei_syougaku-kin/syougaku-kin_university.html'
    ],
    sourceNote: '江戸川区公式ページで、入学資金融資あっせん制度、私立高校等100万円、短大・大学等200万円、海外留学200万円、利率1.7%・本人負担0.5%となる利子補給、信用保証保険料全額区負担、申込目安を確認。旧生成データの奨学資金貸付制度を公式名称へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'edogawa-senior-support',
    title: '江戸川区 介護者激励手当',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '年間10万円',
    maxAmountNum: 10,
    category: 'living',
    relatedCategories: ['nursing'],
    prefecture: '東京都',
    tags: ['江戸川区', '介護者激励手当', '在宅介護'],
    eligibility: '1年以上継続して江戸川区に住民登録があり居住し、世帯全員が住民税非課税、介護保険料滞納なし、生活保護を受けていない方などが対象です。介護者は要介護4または5の在宅者と同居する親族等である必要があります。',
    applicationPeriod: '通年相談型。対象期間が過ぎると申請できないため、期間内に申請',
    description: '江戸川区が、重度の要介護状態にある在宅の方を介護する介護者に年間10万円を支給する制度です。旧生成データの熟年者激励手当・くつろぎの家事業を、現行公式ページで確認できる介護者激励手当へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>重度の要介護状態にある在宅の方を介護する介護者に手当を支給し、高齢者家庭の福祉の増進を図る制度です。</p>' },
      { heading: '対象要件', content: '<p>介護者と被介護者に共通して、1年以上継続して江戸川区に住民登録があり居住していること、世帯全員が住民税非課税であること、介護保険料を滞納していないこと、生活保護を受けていないことなどが必要です。被介護者は40歳以上、要介護4または5、1年間介護保険サービスを利用していないことなどが条件です。</p>' },
      { heading: '手当額と申請', content: '<p>介護を受けている方1人につき年間10万円を、介護を行っている方に支給します。江戸川区役所、熟年相談室、健康サポートセンターで申請できます。</p>' }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/e040/kenko/fukushikaigo/jukunen/kaigo/kaigosyateate.html',
    sourceName: '江戸川区 介護者激励手当',
    sourceUrls: [
      'https://www.city.edogawa.tokyo.jp/e040/kenko/fukushikaigo/jukunen/kaigo/kaigosyateate.html',
      'https://www.city.edogawa.tokyo.jp/e039/kenko/fukushikaigo/jukunen/jukunen_ouen/index.html'
    ],
    sourceNote: '江戸川区公式ページで、介護者激励手当の更新日2026年4月16日、対象要件、被介護者が要介護4または5等であること、手当額年間10万円、申請窓口を確認。旧生成データの熟年者激励手当・くつろぎの家事業を現行公式制度へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koto-birth-bonus',
    title: '江東区 出産・子育て応援給付金（妊婦のための支援給付）',
    organization: '江東区',
    type: 'local',
    maxAmount: '妊婦1人あたり5万円＋子ども1人につき5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江東区', '妊婦支援給付', '出産子育て'],
    eligibility: '令和7年4月1日時点に妊娠中、または令和7年4月1日以降に妊娠し、胎児の心拍を確認しており、申請日時点に江東区に住民登録がある方などが対象です。2回目は令和7年4月1日以降に出産し、申請日時点に江東区に住民登録がある方が対象です。',
    applicationPeriod: '1回目は胎児の心拍確認日から2年間、2回目は出産予定日の8週間前から2年間',
    description: '江東区が、妊婦のための支援給付として、妊婦給付認定後に妊婦1人あたり5万円、申請受付後に子ども1人につき5万円を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月1日から、旧出産・子育て応援ギフトが妊婦のための支援給付へ移行しました。給付は出産前と出産後の2回に分けて実施されます。</p>' },
      { heading: '給付額', content: '<p>1回目は妊婦給付認定後に妊婦1人あたり5万円、2回目は申請受付後に子ども1人につき5万円です。現金またはギフトカードで給付されます。</p>' },
      { heading: '申請時の注意', content: '<p>旧事業や他自治体で同一妊娠に係る給付を受けている場合は対象外となります。給付金は妊産婦本人名義の口座へ振り込まれます。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/260501/kodomo/ninshinshussan/ninshin/97552.html',
    sourceName: '江東区 出産・子育て応援給付金（妊婦のための支援給付）',
    sourceUrls: [
      'https://www.city.koto.lg.jp/260501/kodomo/ninshinshussan/ninshin/97552.html',
      'https://www.city.koto.lg.jp/kodomo/ninshinshussan/index.html'
    ],
    sourceNote: '江東区公式ページで、令和7年4月1日から妊婦のための支援給付に移行したこと、妊婦1人あたり5万円、子ども1人につき5万円、申請期限を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koto-childcare-subsidy',
    title: '江東区 認可外保育施設等保護者負担軽減補助金（令和8年度）',
    organization: '江東区',
    type: 'local',
    maxAmount: '月額上限は認定区分・年齢・課税状況等により異なる',
    maxAmountNum: 8,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['江東区', '認可外保育施設', '保育料補助', '令和8年度'],
    eligibility: '江東区内に住所を有し、保育の必要性の認定を受け、認可保育園等に在籍していない児童の保護者などが対象です。対象施設・事業や認定区分により補助対象が変わります。',
    applicationPeriod: '令和8年度分は2026年4月1日から受付開始',
    description: '江東区が、認可外保育施設等を利用する保護者の保育料または利用料負担を軽減するために支給する補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>認可外保育施設等を利用する保護者の保育料または利用料の負担を軽減するため、江東区が補助金を支給します。</p>' },
      { heading: '対象者', content: '<p>区内に住所を有し、保育の必要性の認定を受けている児童の保護者が対象です。認可保育園、認定こども園、小規模保育等に在籍している児童は対象外です。</p>' },
      { heading: '申請時の注意', content: '<p>令和8年度分は2026年4月1日から受付開始です。施設・事業が補助対象か、認定区分に応じた上限額を確認して申請してください。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/280307/kodomo/hoiku/shisetsu/r8hutankeigen.html',
    sourceName: '江東区 令和8年度認可外保育施設等を利用されている方への補助金',
    sourceUrls: [
      'https://www.city.koto.lg.jp/280307/kodomo/hoiku/shisetsu/r8hutankeigen.html',
      'https://www.city.koto.lg.jp/280307/r7hutankeigen.html'
    ],
    sourceNote: '江東区公式ページで、令和8年度認可外保育施設等保護者負担軽減補助金、2026年4月1日受付開始、保育の必要性の認定を受けた児童の保護者が対象であることを確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koto-elderly-support',
    title: '江東区 高齢者救急通報システム',
    organization: '江東区',
    type: 'local',
    maxAmount: '所得・世帯状況等により利用者負担あり',
    maxAmountNum: 0,
    category: 'living',
    relatedCategories: ['nursing'],
    prefecture: '東京都',
    tags: ['江東区', '高齢者救急通報', '見守り'],
    eligibility: '高齢者のみの世帯、日中独居となる高齢者など、救急通報システムの設置が必要と認められる方が対象です。',
    applicationPeriod: '通年。長寿サポートセンターまたは江東区役所で申請',
    description: '江東区が、高齢者のみの世帯等に、緊急時にペンダント等を押すと自動的に通報される機器を設置する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高齢者のみの世帯や日中独居となる高齢者に、緊急時にペンダント等を押すと電話回線を通じて自動通報される機器を設置します。</p>' },
      { heading: '支援内容', content: '<p>緊急通報、生活リズムセンサー等による見守り、警備会社による安否確認などを組み合わせた救急通報システムです。</p>' },
      { heading: '申請方法', content: '<p>近くの長寿サポートセンター、または江東区役所長寿応援課で申請を受け付けています。利用条件や負担額は申請時に確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/211102/fukushi/koresha/service/jisshi/6592.html',
    sourceName: '江東区 高齢者救急通報システムの設置',
    sourceUrls: [
      'https://www.city.koto.lg.jp/211102/fukushi/koresha/service/jisshi/6592.html',
      'https://www.city.koto.lg.jp/211102/fukushi/koresha/service/jisshi/documents/kyuukyuuyuuhoutirasi.pdf'
    ],
    sourceNote: '江東区公式ページと案内PDFで、高齢者のみの世帯等を対象に救急通報システムを設置する制度、申請受付窓口を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koto-infertility',
    title: '江東区 特定不妊治療費（先進医療）助成事業',
    organization: '江東区',
    type: 'local',
    maxAmount: '1回の治療につき上限5万円',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '東京都',
    tags: ['江東区', '不妊治療', '先進医療', '令和8年度'],
    eligibility: '令和8年4月1日以降に特定不妊治療（保険診療）と併せて先進医療を実施し、東京都特定不妊治療費助成の承認決定を受け、申請日時点で江東区に住民登録がある方が対象です。',
    applicationPeriod: '令和8年4月1日以降実施分が対象。申請書類は江東区保健所または保健相談所へ提出',
    description: '江東区が、令和8年4月1日以降に実施した特定不妊治療の先進医療について、東京都の助成に上乗せして医療費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>特定不妊治療（保険診療）と併せて実施した先進医療について、東京都助成に上乗せして江東区が助成します。</p>' },
      { heading: '助成額', content: '<p>1回の治療につき上限5万円です。治療に要した費用から東京都の助成額を差し引いた額が区の助成対象で、助成対象費用が5万円を下回る場合はその額が上限です。</p>' },
      { heading: '対象要件', content: '<p>東京都特定不妊治療費助成の承認決定を受けていること、申請日時点で江東区に住民登録があること、他の区市町村から同じ申請内容で助成を受けていないことが必要です。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/260501/kodomo/ninshinshussan/ninshin/6879.html',
    sourceName: '江東区 特定不妊治療費（先進医療）助成事業',
    sourceUrls: [
      'https://www.city.koto.lg.jp/260501/kodomo/ninshinshussan/ninshin/6879.html',
      'https://www.city.koto.lg.jp/kodomo/ninshinshussan/index.html'
    ],
    sourceNote: '江東区公式ページで、令和8年4月1日以降実施分、先進医療、東京都助成への上乗せ、1回上限5万円、対象要件を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koto-nursing-equipment',
    title: '江東区 高齢者紙おむつ支給及びおむつ購入費助成',
    organization: '江東区',
    type: 'local',
    maxAmount: '現物支給は毎月75点まで無料。おむつ購入費助成は月額上限7,500円',
    maxAmountNum: 0.75,
    category: 'nursing',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['江東区', '紙おむつ', '介護用品', '高齢者支援'],
    eligibility: '江東区に住む65歳以上で、要介護3・4・5の認定を受けている方、または重度認知症や疾病により常時失禁状態である方などが対象です。介護保険料段階、施設入所、生活保護等の要件があります。',
    applicationPeriod: '通年。令和8年度分は2026年3月10日以降受付分',
    description: '江東区が、紙おむつを必要とする高齢者に紙おむつを配送し、病院指定のおむつしか使えない入院中の方には購入費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>在宅の方やおむつを持ち込める病院等に入院中の方には、毎月1回紙おむつを配送します。持ち込みできない病院等に入院中の方には、おむつ購入費を助成します。</p>' },
      { heading: '支給・助成内容', content: '<p>現物支給はカタログから支給限度内75点で選択でき、配送先が区内で75点以内の場合は無料です。購入費助成は月額7,500円が上限です。</p>' },
      { heading: '対象要件', content: '<p>江東区に住む65歳以上、要介護3から5または医師の診断で常時失禁状態と認められる方などが対象です。施設入所中、生活保護受給中、心身障害者紙おむつ支給を受けている方などは対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/212106/fukushi/koresha/service/jisshi/6590.html',
    sourceName: '江東区 高齢者紙おむつ支給及びおむつ購入費助成',
    sourceUrls: [
      'https://www.city.koto.lg.jp/212106/fukushi/koresha/service/jisshi/6590.html',
      'https://www.city.koto.lg.jp/212106/fukushi/koresha/service/jisshi/documents/genbutushinsei.pdf',
      'https://www.city.koto.lg.jp/222015/fukushi/shogaisha/service/nichijo/6707.html'
    ],
    sourceNote: '江東区公式ページで、令和8年度分受付、紙おむつ現物支給75点、配送先区内かつ75点以内は無料、購入費助成月額7,500円上限、対象要件を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koto-scholarship',
    title: '江東区奨学資金',
    organization: '江東区',
    type: 'local',
    maxAmount: '学資金月額1万円（年額12万円）＋入学準備金10万円',
    maxAmountNum: 22,
    category: 'education',
    prefecture: '東京都',
    tags: ['江東区', '奨学資金', '給付型奨学金', '令和8年度'],
    eligibility: '高等学校等への進学に際し、学習意欲がありながら経済的理由で修学が困難な中学校3年生等で、保護者が江東区内に引き続き1年以上居住していること、成績要件・収入要件を満たすことなどが必要です。',
    applicationPeriod: '令和8年度生募集。区外・私立中学校在学生の提出期限は2025年12月9日',
    deadlineDate: '2025-12-09',
    description: '江東区が、高等学校等への進学に際し、経済的理由で修学が困難な方を対象に、返還不要の奨学資金を支給する制度です。令和8年度生募集は終了しているため通常一覧から除外します。',
    sections: [
      { heading: '制度の概要', content: '<p>高等学校等への進学に際し、学習意欲がありながら経済的理由で修学が困難な方を対象とする返還不要の奨学資金制度です。</p>' },
      { heading: '支給額', content: '<p>学資金は月額1万円（年額12万円）、入学準備金は一時金10万円です。採用予定人数は50名程度です。</p>' },
      { heading: '受付状況', content: '<p>令和8年度生募集では、区外・私立中学校在学生の提出期限が2025年12月9日です。期限到来済みのため通常一覧から除外します。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/580102/kodomo/gakko/enjo/shogakukin/6158.html',
    sourceName: '江東区奨学資金',
    sourceUrls: [
      'https://www.city.koto.lg.jp/580102/kodomo/gakko/enjo/shogakukin/6158.html',
      'https://www.city.koto.lg.jp/kodomo/gakko/enjo/shogakukin/index.html',
      'https://www.city.koto.lg.jp/580102/kodomo/gakko/enjo/shogakukin/documents/r8bosyuu.pdf'
    ],
    sourceNote: '江東区公式ページと令和8年度生募集要項PDFで、返還不要の奨学資金、学資金月額1万円、入学準備金10万円、採用予定50名程度、区外・私立中学校在学生の提出期限2025年12月9日を確認。期限到来済みのため通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koto-senior-medical',
    title: '江東区 令和8年度高齢者用肺炎球菌予防接種（定期接種）',
    organization: '江東区',
    type: 'local',
    maxAmount: '接種費用の一部を公費負担。自己負担4,000円または5,500円、生活保護受給者等は免除',
    maxAmountNum: 0,
    category: 'medical',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['江東区', '高齢者肺炎球菌', '予防接種', '令和8年度'],
    eligibility: '65歳の方が対象です。接種期間は65歳の誕生日前日から66歳の誕生日前々日までで、過去に肺炎球菌ワクチンを接種した方は定期接種の対象外です。',
    applicationPeriod: '65歳の誕生日前日から66歳の誕生日前々日まで',
    description: '江東区が、令和8年度の高齢者用肺炎球菌予防接種について、対象者の接種費用の一部を公費負担する定期接種制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>肺炎球菌による肺炎などの感染症を予防し、重症化を防ぐための高齢者向け定期予防接種です。</p>' },
      { heading: '対象と接種期間', content: '<p>対象は65歳の方で、接種期間は65歳の誕生日前日から66歳の誕生日前々日までです。定期接種として助成が受けられるのは原則として65歳の時のみです。</p>' },
      { heading: '自己負担額', content: '<p>誕生日が昭和35年4月2日から昭和36年4月1日までの方は4,000円、昭和36年4月2日以降の方は5,500円です。生活保護受給者・中国残留邦人等支援給付者は自己負担免除です。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/260502/fukushi/hoken/yobo/05kouhai.html',
    sourceName: '江東区 令和8年度高齢者用肺炎球菌予防接種（定期接種）',
    sourceUrls: [
      'https://www.city.koto.lg.jp/260502/fukushi/hoken/yobo/05kouhai.html',
      'https://www.city.koto.lg.jp/011501/kuse/koho/kuho/r08/text/032105.html'
    ],
    sourceNote: '江東区公式ページで、令和8年度高齢者用肺炎球菌予防接種、対象65歳、接種期間、自己負担4,000円または5,500円、生活保護受給者等の免除、指定医療機関外は全額自己負担を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koto-sme-support',
    title: '江東区 創業支援事務所等賃料補助金',
    organization: '江東区',
    type: 'local',
    maxAmount: '1か月目から12か月目は月額上限5万円、13か月目から24か月目は月額上限3万円',
    maxAmountNum: 96,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['江東区', '創業支援', '賃料補助', '令和8年度'],
    eligibility: '江東区内で創業する中小企業者が区内で新たに事務所等を借り上げる場合が対象です。法人は本店および事務所等、個人は事務所等を区内に有することなどの要件があります。',
    applicationPeriod: '令和8年度受付は2026年9月1日から2026年11月30日まで',
    deadlineDate: '2026-11-30',
    description: '江東区が、区内で創業する方が区内で新たに事務所等を借り上げる場合に、賃料の一部を補助する制度です。旧生成データの中小企業経営支援補助金を、公式確認できる現行の創業支援事務所等賃料補助金へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>江東区内で創業する方が区内で新たに事務所等を借り上げる場合に、その賃料の一部を補助します。</p>' },
      { heading: '補助額', content: '<p>補助月額は月額賃料の4分の1です。上限額は1か月目から12か月目まで月5万円、13か月目から24か月目まで月3万円です。</p>' },
      { heading: '受付状況', content: '<p>令和7年度の申請受付は終了しています。令和8年度の申請受付は2026年9月1日から11月30日までと案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.koto.lg.jp/102020/sangyoshigoto/chusho/hojokin/80920.html',
    sourceName: '江東区 創業支援事務所等賃料補助金',
    sourceUrls: [
      'https://www.city.koto.lg.jp/102020/sangyoshigoto/chusho/hojokin/80920.html',
      'https://www.city.koto.lg.jp/sangyoshigoto/chusho/hojokin/index.html',
      'https://www.city.koto.lg.jp/102010/sangyoshigoto/yushi/sedo/7578.html'
    ],
    sourceNote: '江東区公式ページで、創業支援事務所等賃料補助金、令和8年度受付2026年9月1日から11月30日、補助月額は賃料4分の1、上限は1～12か月目5万円・13～24か月目3万円を確認。中小企業支援一覧・融資制度も補助制度の関連情報として確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'katsushika-migration-bonus',
    title: '葛飾区 ファミリー世帯定住促進支援金（公式確認不可）',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'living',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['葛飾区', '定住促進', '公式確認不可'],
    eligibility: '旧生成データのファミリー世帯定住促進支援金について、葛飾区公式サイトで現行の同名現金給付・引越し費用助成として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-07-01',
    description: '葛飾区公式の公的住宅・居住支援、居住支援協議会、過去の二世代・三世代住宅取得費助成モデル事業廃止資料を確認しましたが、旧生成データの「ファミリー世帯定住促進支援金」は現行制度として確認できないため通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>葛飾区公式ページでは、公的住宅、区営住宅、家賃債務保証料の助成等は確認できますが、区外から転入するファミリー世帯へ最大30万円を支給する現行制度は確認できませんでした。</p>' },
      { heading: '掲載停止の理由', content: '<p>公式に確認できる制度名、支給額、対象要件、申請期間がないため、誤掲載防止として通常一覧から除外します。</p>' },
      { heading: '関連情報', content: '<p>住宅に関する最新の支援は、葛飾区の公的な住宅・居住支援ページや居住支援協議会の案内を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/kurashi/1003399/1030172/index.html',
    sourceName: '葛飾区 公的な住宅・居住支援',
    sourceUrls: [
      'https://www.city.katsushika.lg.jp/kurashi/1003399/1030172/index.html',
      'https://www.city.katsushika.lg.jp/kurashi/1003399/1030172/1033013.html',
      'https://www.city.katsushika.lg.jp/information/1000085/1006294/1006358/1006369/1006445.html'
    ],
    sourceNote: '葛飾区公式の住宅・居住支援ページで公的住宅等を確認し、居住支援協議会ページで家賃債務保証料助成等を確認。過去の二世代・三世代住宅取得費助成モデル事業は廃止等事務事業として既存確認済み。旧生成データのファミリー世帯定住促進支援金は現行公式制度として確認できないため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'katsushika-telework-bonus',
    title: '葛飾区 デジタル化支援事業費補助金',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '1事業者上限50万円（ハードウェア購入費は上限20万円）',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['葛飾区', 'デジタル化支援', '中小企業', '令和8年度'],
    eligibility: '葛飾区内に主たる事業所を有する中小企業者で、区のデジタル化合同セッションまたはIT相談を受け、デジタル導入診断書の発行を受けている事業者などが対象です。',
    applicationPeriod: '2026年4月1日から2027年2月26日必着まで',
    deadlineDate: '2027-02-26',
    description: '葛飾区が、区内中小企業者の生産性向上・業務効率化のため、デジタル技術の導入に要する経費の一部を補助する制度です。旧生成データのテレワーク推進助成金を、公式確認できる現行のデジタル化支援事業費補助金へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>デジタル技術を導入し、生産性向上や業務効率化等を図る葛飾区内中小企業者の取り組みを支援します。</p>' },
      { heading: '補助額', content: '<p>補助率は対象経費の2分の1、補助上限額は1事業者50万円です。ハードウェア購入費は上限20万円です。</p>' },
      { heading: '対象経費と申請', content: '<p>ソフトウェア購入費、クラウドサービス等利用料、関連ハードウェア購入費、外注費、専門家への人件費・業務委託費、キャッシュレス決済機器の購入費等が対象です。申請前にIT相談等を受ける必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/business/1000011/1034399/1032622/index.html',
    sourceName: '葛飾区 デジタル化支援事業費補助金',
    sourceUrls: [
      'https://www.city.katsushika.lg.jp/business/1000011/1034399/1032622/index.html',
      'https://www.city.katsushika.lg.jp/business/1000011/1030233/1035681/index.html',
      'https://www.city.katsushika.lg.jp/business/1000011/1030233/1034396/1026598.html'
    ],
    sourceNote: '葛飾区公式ページで、デジタル化支援事業費補助金、申請期間2026年4月1日から2027年2月26日必着、補助率2分の1、上限50万円、ハードウェア購入費上限20万円、IT相談等によるデジタル導入診断書が必要であることを確認。旧生成データのテレワーク推進助成金を現行の中小企業デジタル化支援へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'minato-childcare-subsidy',
    title: '港区 物価高対応子育て応援手当',
    organization: '港区',
    type: 'local',
    maxAmount: '対象児童1人につき2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['港区', '物価高対応', '子育て応援手当', '令和7年度'],
    eligibility: '令和7年9月分の児童手当受給者、令和7年10月1日から令和8年3月31日までに出生した児童の保護者、令和7年9月1日から令和8年3月31日までに港区で児童手当申請が必要となった保護者などが対象です。',
    applicationPeriod: '公務員等は申請が必要。出生児童等は2026年4月15日までに児童手当申請が必要',
    deadlineDate: '2026-04-15',
    description: '港区が、0歳から高校生年代の子どもに1人あたり2万円を給付する物価高対応の子育て応援手当です。旧生成データの子育て世帯臨時特別給付金を、公式確認できる現行制度へ補正しました。申請関係の主要期限が到来済みのため通常一覧から除外します。',
    sections: [
      { heading: '制度の概要', content: '<p>物価高の影響を強く受けている子育て世帯を支援するため、0歳から高校生年代の子どもに1人あたり2万円を給付する制度です。</p>' },
      { heading: '対象者', content: '<p>令和7年9月分の児童手当受給者、令和7年10月1日から令和8年3月31日までに出生した児童の保護者などが対象です。港区で児童手当認定済みの場合は原則申請不要です。</p>' },
      { heading: '掲載上の扱い', content: '<p>出生児童等については2026年4月15日までに児童手当申請が必要と案内されており、主要期限到来済みのため通常一覧から除外します。</p>' }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/kodomokyufu/kodomo/kodomo/bukkadakataioukosodateouenteate.html',
    sourceName: '港区 物価高対応子育て応援手当',
    sourceUrls: [
      'https://www.city.minato.tokyo.jp/kodomokyufu/kodomo/kodomo/bukkadakataioukosodateouenteate.html',
      'https://www.city.minato.tokyo.jp/kodomokyufu/kodomo/kodomo/jidoteate.html'
    ],
    sourceNote: '港区公式ページで、物価高対応子育て応援手当、対象児童1人につき2万円、令和7年10月1日から令和8年3月31日までの出生児童を対象に含むこと、2026年4月15日までの児童手当申請が必要であることを確認。旧生成データの5万円給付ではなく2万円の現行臨時手当へ補正し、期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'minato-education-support',
    title: '港区 就学援助費',
    organization: '港区',
    type: 'local',
    maxAmount: '学用品費、修学旅行費、学校給食費などを援助',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['港区', '就学援助', '令和8年度'],
    eligibility: '港区在住で、小学校、中学校、義務教育学校、中等教育学校の前期課程に在学する児童・生徒の保護者のうち、生活保護受給、児童扶養手当受給、前年所得額が基準所得額に該当する方などが対象です。',
    applicationPeriod: '令和8年度。学校生活に必要な費用を学期ごとに支給',
    description: '港区が、経済的な理由で就学が困難な児童・生徒の保護者に、学用品費、修学旅行費、学校給食費などを援助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>お子さまが安心して学習できるよう、経済的な理由で就学が困難な児童・生徒の保護者に学校生活に必要な費用を援助します。</p>' },
      { heading: '対象者', content: '<p>港区在住で対象学校に在学する児童・生徒の保護者のうち、生活保護受給、児童扶養手当受給、前年所得額が基準所得額に該当する方などが対象です。</p>' },
      { heading: '支給時期', content: '<p>援助費は学期ごとの金額をまとめて、7月・12月・3月の各月下旬に振り込まれます。港区立学校以外の場合は初回振込が8月下旬となる場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/gakkouuneishien/kodomo/gakko/shugakuenjo/shugakuenjohi.html',
    sourceName: '港区 就学援助費',
    sourceUrls: [
      'https://www.city.minato.tokyo.jp/gakkouuneishien/kodomo/gakko/shugakuenjo/shugakuenjohi.html',
      'https://www.city.minato.tokyo.jp/gakkouuneishien/kodomo/gakko/shugakuenjo/'
    ],
    sourceNote: '港区公式ページで、就学援助費の更新日2026年4月1日、対象者、援助内容、令和8年度就学援助のお知らせ、援助費の振込時期を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'minato-infertility',
    title: '港区 特定不妊治療費（先進医療、自由診療）助成金',
    organization: '港区',
    type: 'local',
    maxAmount: '1回の助成上限30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '東京都',
    tags: ['港区', '特定不妊治療', '先進医療', '自由診療'],
    eligibility: '治療開始日から申請日まで婚姻している夫婦（事実婚含む）で、1回の治療開始日における妻の年齢が43歳未満、夫婦の両方または一方が治療開始日から申請日まで連続して港区に住所を有していることなどが必要です。',
    applicationPeriod: '1回の治療が終了した日の属する年度末まで。1月から3月終了分は同年6月30日まで',
    description: '港区が、特定不妊治療に併用した先進医療や、一定の自由診療について、1回上限30万円まで助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>体外受精・顕微授精を保険診療として受診した際に全額自己負担で実施した先進医療、または対象範囲に該当する治療と合わせて受けた自由診療を助成します。</p>' },
      { heading: '助成額', content: '<p>先進医療に要した自己負担額は1回上限30万円、自由診療に要した自己負担額も1回上限30万円です。東京都助成の対象となる場合は都助成額を控除します。</p>' },
      { heading: '申請期限', content: '<p>1回の治療が終了した日の属する年度末までに申請します。1月から3月までに終了した治療は同年6月30日まで申請可能です。</p>' }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/chiikihoken/tokuteihunin1118.html',
    sourceName: '港区 特定不妊治療費（先進医療、自由診療）助成金',
    sourceUrls: [
      'https://www.city.minato.tokyo.jp/chiikihoken/tokuteihunin1118.html',
      'https://www.city.minato.tokyo.jp/chiikihoken/kenko/ninshin/ninshin/kibo/index.html',
      'https://www.city.minato.tokyo.jp/documents/131378/20250403095605.pdf'
    ],
    sourceNote: '港区公式ページで、特定不妊治療費（先進医療、自由診療）助成金、対象者、先進医療・自由診療の対象範囲、1回上限30万円、助成上限回数、申請期限を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'minato-nursing-equipment',
    title: '港区 高齢者紙おむつの給付',
    organization: '港区',
    type: 'local',
    maxAmount: '月1回120点まで配送。利用者負担は月額500円',
    maxAmountNum: 0,
    category: 'nursing',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['港区', '紙おむつ', '介護用品', '高齢者支援'],
    eligibility: 'ねたきりまたは失禁状態にあり、介護保険法の要介護認定で要支援1以上の認定を受けている方が対象です。介護保険の施設サービス利用者は対象外です。',
    applicationPeriod: '通年。月1回、120点まで配送',
    description: '港区が、日常生活で紙おむつを必要とする高齢者に、紙おむつ等を月1回配送する制度です。医療機関等に入院中の場合はおむつ代助成の対象になります。',
    sections: [
      { heading: '制度の概要', content: '<p>紙おむつ等の給付またはおむつ代の助成により、高齢者の快適な生活と介護する家族等の負担軽減を図る制度です。</p>' },
      { heading: '給付内容', content: '<p>パンフレット掲載商品の中から月1回、点数合計120点まで注文でき、自宅へ配送されます。点数の繰り越しはできません。</p>' },
      { heading: '費用', content: '<p>利用者負担は月額500円です。点数上限を超えて注文する場合は、1点あたり100円の追加負担があります。</p>' }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/zaitakushien/kenko/fukushi/koresha/sekatsu/kamiomutsu.html',
    sourceName: '港区 高齢者紙おむつの給付',
    sourceUrls: [
      'https://www.city.minato.tokyo.jp/zaitakushien/kenko/fukushi/koresha/sekatsu/kamiomutsu.html',
      'https://www.city.minato.tokyo.jp/zaitakushien/kenko/fukushi/koresha/sekatsu/omutsuzyosei.html',
      'https://www.city.minato.tokyo.jp/documents/10619/r8omutsupamphlet.pdf'
    ],
    sourceNote: '港区公式ページで、高齢者紙おむつの給付、対象はねたきりまたは失禁状態で要支援1以上、月1回120点まで配送、月額500円、入院時のおむつ代助成を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'minato-energy-support',
    title: '港区 高齢者エアコン購入設置費助成',
    organization: '港区',
    type: 'local',
    maxAmount: '令和8年度は1世帯1回限り上限11万1,000円',
    maxAmountNum: 11.1,
    category: 'living',
    relatedCategories: ['medical'],
    prefecture: '東京都',
    tags: ['港区', '高齢者エアコン', '熱中症対策', '令和8年度'],
    eligibility: '港区内在住で、自宅にエアコンがない、または故障により使用できるエアコンがない世帯のうち、65歳以上のひとり暮らし世帯、65歳以上のみの世帯、65歳以上と障害者のみの世帯で、世帯員全員が住民税非課税である世帯が対象です。',
    applicationPeriod: '令和8年度。高齢者相談センターで相談受付',
    description: '港区が、経済的な理由で自宅にエアコンがない高齢者世帯に対し、エアコン購入・設置費用を助成する熱中症対策の制度です。旧生成データの省エネ家電購入助成を、公式確認できる現行の高齢者エアコン購入設置費助成へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>経済的な理由で自宅にエアコンがない高齢者世帯に、エアコン購入および設置に要する費用を助成し、夏季の熱中症対策を支援します。</p>' },
      { heading: '助成限度額', content: '<p>令和8年度は1世帯1回限り111,000円が上限です。エアコン購入・設置、故障したエアコンの取り外し・処分にかかった費用と111,000円のいずれか少ない額を助成します。</p>' },
      { heading: '相談窓口', content: '<p>各地区の高齢者相談センターで相談を受け付けます。対象要件や申請方法は、住まいの地区の高齢者相談センターへ確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.minato.tokyo.jp/zaitakushien/eakonn.html',
    sourceName: '港区 高齢者エアコン購入設置費用助成',
    sourceUrls: [
      'https://www.city.minato.tokyo.jp/zaitakushien/eakonn.html',
      'https://www.city.minato.tokyo.jp/chikyukankyou/joseikin/r5.html',
      'https://www.city.minato.tokyo.jp/chikyukankyou/kankyo-machi/kankyo/hojo/'
    ],
    sourceNote: '港区公式ページで、高齢者エアコン購入設置費助成、対象世帯、対象機器、令和8年度助成限度額111,000円、高齢者相談センターでの受付を確認。省エネ家電購入助成という旧生成名ではなく、現行の熱中症対策助成へ補正。関連する地球温暖化対策助成制度も確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-bousai-equipment',
    title: '荒川区 防災用品のあっせん事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: 'あっせん価格で購入可能。申込期限は2026年7月31日消印有効',
    maxAmountNum: 0,
    category: 'disaster',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['荒川区', '防災用品', 'あっせん', '令和8年度'],
    eligibility: '荒川区内の一般家庭および事業所が対象です。品物の配送先も荒川区内に限られます。',
    applicationPeriod: '2026年7月31日消印有効まで',
    deadlineDate: '2026-07-31',
    description: '荒川区が、区内の一般家庭・事業所向けに防災用品をあっせん価格で購入できるよう案内する事業です。旧生成データの「購入費最大50%助成」ではなく、公式ページで確認できる防災用品あっせん事業へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>大規模地震への備えを進めるため、防災用品をあっせん価格で購入できる事業です。あっせん品目は公式チラシで確認します。</p>' },
      { heading: '対象と申込期限', content: '<p>荒川区内の一般家庭および事業所が対象で、配送先も荒川区内に限られます。申込期限は2026年7月31日消印有効です。</p>' },
      { heading: '申込方法', content: '<p>官製ハガキまたはファクスで、住所・氏名・電話番号・希望商品の番号・商品名・数量などを記入して取扱業者へ申し込みます。電話・電子メールでの受付はありません。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a013/bousai/sonae/bousaiassenn.html',
    sourceName: '荒川区 防災用品のあっせん事業をご利用下さい',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a013/bousai/sonae/bousaiassenn.html',
      'https://www.city.arakawa.tokyo.jp/bousai/sonae/index.html',
      'https://www.city.arakawa.tokyo.jp/a013/bousai/sonae/okunaianzen.html'
    ],
    sourceNote: '荒川区公式ページで、防災用品あっせん事業、申込期限2026年7月31日消印有効、対象は区内一般家庭・事業所、配送先は区内限定、ハガキ・ファクス申込であることを確認。旧生成データの補助率50%・上限5万円は公式ページで確認できないため、あっせん価格での購入支援として補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-childcare-subsidy',
    title: '荒川区 物価高対応子育て応援手当',
    organization: '荒川区',
    type: 'local',
    maxAmount: '児童1人当たり2万円',
    maxAmountNum: 2,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['荒川区', '物価高対応', '子育て応援手当', '令和7年度'],
    eligibility: '令和7年9月分の児童手当を荒川区から受給している方、令和7年10月1日から令和8年3月31日に子どもが生まれた方、同期間に離婚等により児童手当申請が必要になった保護者、公務員の方などが対象です。',
    applicationPeriod: '対象区分により申請不要または申請必要。支給は令和8年2月以降順次',
    description: '荒川区が、児童手当の支給対象者に児童1人当たり2万円を支給する物価高対応の子育て応援手当です。旧生成データの子ども1人最大5万円ではなく、公式確認できる現行手当へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>国の総合経済対策を受け、児童手当の支給対象者に児童1人当たり2万円を支給する手当です。</p>' },
      { heading: '対象者', content: '<p>令和7年9月分の児童手当受給者、令和7年10月1日から令和8年3月31日に子どもが生まれた方、同期間に離婚等で児童手当申請が必要になった保護者、公務員の方などが対象です。</p>' },
      { heading: '支給方法', content: '<p>荒川区から児童手当を受給している方などは申請不要です。公務員の方は所属庁の証明が記載された申請書等により申請が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a035/kosodate/teate/kosodateouen.html',
    sourceName: '荒川区 物価高対応子育て応援手当',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a035/kosodate/teate/kosodateouen.html',
      'https://www.city.arakawa.tokyo.jp/a035/kosodate/teate/jidoteate.html',
      'https://www.city.arakawa.tokyo.jp/kosodate/index.html'
    ],
    sourceNote: '荒川区公式ページで、物価高対応子育て応援手当、児童1人当たり2万円、対象区分、申請不要・申請必要の区分、支給予定を確認。旧生成データの最大5万円給付ではなく現行の2万円手当へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-daycare-support',
    title: '荒川区 施設等利用費及び認証保育所等保育料補助金（令和7年度後期）',
    organization: '荒川区',
    type: 'local',
    maxAmount: '年齢・施設区分・認定状況等により異なる',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['荒川区', '認証保育所', '認可外保育施設', '保育料補助'],
    eligibility: '認可外保育施設等を利用する保護者が対象です。国の幼児教育・保育の無償化と荒川区独自の補助制度で構成され、子どもの年齢や利用施設等により支給要件が異なります。',
    applicationPeriod: '令和7年度後期分。提出期限は2026年3月19日または2026年4月3日',
    deadlineDate: '2026-04-03',
    description: '荒川区が、認可外保育施設等を利用する保護者を対象に実施する施設等利用費および認証保育所等保育料補助金です。公式ページで確認できる最新の令和7年度後期申請期限は到来済みのため通常一覧から除外します。',
    sections: [
      { heading: '制度の概要', content: '<p>認可外保育施設等を利用する保護者を対象に、国の幼児教育・保育の無償化と荒川区独自補助を組み合わせて支給する補助金です。</p>' },
      { heading: '申請期限', content: '<p>令和7年度後期分は、事業区分により2026年3月19日または2026年4月3日が提出期限でした。期限を過ぎての受付や書類追加はできないと案内されています。</p>' },
      { heading: '掲載上の扱い', content: '<p>令和8年度分の受付要項は今回の公式確認時点で確認できないため、通常一覧では期限切れ扱いとして除外します。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a037/kosodate/hoikuen/hoikuryo-hojo.html',
    sourceName: '荒川区 施設等利用費及び認証保育所等保育料補助金の申請',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a037/kosodate/hoikuen/hoikuryo-hojo.html',
      'https://www.city.arakawa.tokyo.jp/a037/kosodate/ninsyodairisinnsei.html',
      'https://www.city.arakawa.tokyo.jp/documents/2917/20231107hozyokinnannnai.pdf'
    ],
    sourceNote: '荒川区公式ページで、施設等利用費及び認証保育所等保育料補助金、令和7年度後期申請、提出期限2026年3月19日・2026年4月3日、支払予定2026年5月下旬を確認。旧生成データの月額最大4万円は今回ページ本文では確認できないため、金額は区分により異なる扱いへ補正し、期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-energy-support',
    title: '荒川区 令和8年度エコ助成事業（省エネエアコン・省エネ冷蔵庫）',
    organization: '荒川区',
    type: 'local',
    maxAmount: '既存slug arakawa-housing-eco へ集約済み',
    maxAmountNum: 0,
    category: 'living',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['荒川区', '省エネ家電', '省エネエアコン', '省エネ冷蔵庫', '集約済み'],
    eligibility: '令和8年度エコ助成事業の省エネエアコン・省エネ冷蔵庫メニューは、既存の `arakawa-housing-eco` で公式確認済みデータへ集約しています。',
    applicationPeriod: '既存slugへ集約済みのため通常一覧から除外',
    deadlineDate: '2026-07-01',
    description: '旧生成データの「省エネ家電買替助成事業」は、荒川区公式では令和8年度エコ助成事業の省エネエアコン・省エネ冷蔵庫メニューとして確認できます。重複掲載を避けるため、この旧slugは通常一覧から除外し、既存の `arakawa-housing-eco` に検索語・金額を反映しました。',
    sections: [
      { heading: '集約の理由', content: '<p>同じ公式制度は既に荒川区令和8年度エコ助成事業として掲載済みです。重複を避けるため、この旧slugは通常一覧から除外します。</p>' },
      { heading: '確認した助成内容', content: '<p>省エネエアコンは多段階評価点に応じて1台上限5万円・3万円・2万円・1万円、冷蔵庫は本体費用4分の1で区内業者購入上限5万円・区外業者購入上限3万円を確認しました。</p>' },
      { heading: '掲載先', content: '<p>利用できる制度としては `arakawa-housing-eco` のページを確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a024/kankyou/ekojyosei.html',
    sourceName: '荒川区 令和8年度エコ助成事業',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a024/kankyou/ekojyosei.html',
      'https://www.city.arakawa.tokyo.jp/kankyou/shoene_ondantaisaku/josei/index.html',
      'https://www.city.arakawa.tokyo.jp/documents/39013/tebikimatome_2.pdf'
    ],
    sourceNote: '荒川区公式ページで令和8年度エコ助成事業の省エネエアコン・省エネ冷蔵庫メニューを確認。既存の arakawa-housing-eco と同一公式制度のため、この旧生成slugは重複防止として期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-living-support',
    title: '荒川区 住居確保給付金（家賃補助・転宅費用補助）',
    organization: '荒川区',
    type: 'local',
    maxAmount: '家賃補助・転宅費用補助。基準額と家賃上限は世帯人数等により異なる',
    maxAmountNum: 8.1,
    category: 'living',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['荒川区', '住居確保給付金', '生活困窮者自立支援'],
    eligibility: '離職・廃業、休業等により経済的に困窮し、住居を失った方または失うおそれのある方など、住居確保給付金の要件を満たす方が対象です。',
    applicationPeriod: '通年相談型。家賃補助・転宅費用補助は要件審査あり',
    description: '荒川区が、生活困窮者自立支援制度に基づき、一定要件を満たす方に家賃補助や転宅費用補助を行う住居確保給付金です。',
    sections: [
      { heading: '制度の概要', content: '<p>住居確保給付金は、生活困窮者自立支援法に基づく国の制度です。荒川区では一定要件に該当する方を対象に、家賃補助や転宅費用補助を行っています。</p>' },
      { heading: '家賃補助', content: '<p>離職・廃業、休業等により経済的に困窮し、住居を失った方または失うおそれのある方を対象に、有期で給付金を支給し、就労支援等を実施します。</p>' },
      { heading: '転宅費用補助', content: '<p>世帯員の死亡、離職、休業等で世帯収入が著しく減少し、住居を失った方または失うおそれのある方に、転居費用相当分の給付金を支給します。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a027/seikatsu/seikatsushien/270701juukyokakuho.html',
    sourceName: '荒川区 家賃、転居費用でお困りの方へ（住居確保給付金）',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a027/seikatsu/seikatsushien/270701juukyokakuho.html',
      'https://www.city.arakawa.tokyo.jp/a027/seikatsu/seikatsushien/280415shigotoseikatu.html',
      'https://www.city.arakawa.tokyo.jp/reiki_int/reiki_honbun/p800RG00001165.html'
    ],
    sourceNote: '荒川区公式ページで、住居確保給付金の家賃補助・転宅費用補助、対象要件、単身・2人・3人世帯の収入基準と家賃上限、仕事・生活サポートデスクの相談窓口を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-nursing-home-reform',
    title: '荒川区 介護保険住宅改修',
    organization: '荒川区',
    type: 'local',
    maxAmount: '支給限度額20万円。利用者負担1〜3割',
    maxAmountNum: 20,
    category: 'nursing',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['荒川区', '介護保険', '住宅改修'],
    eligibility: '介護保険の要介護認定で要介護・要支援と認定を受け、在宅で生活している方が対象です。住民登録地で行う住宅改修のみ支給対象です。',
    applicationPeriod: '通年。必ず工事前に事前申請',
    description: '荒川区が、要介護・要支援認定を受けた在宅生活者に対し、手すりの取付けや段差解消等の小規模な住宅改修費の一部を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>在宅で安全に暮らすための手すりの取付けや段差の解消等、小規模な改修に係る費用の一部が介護保険から支給されます。</p>' },
      { heading: '支給限度額', content: '<p>支給限度額は20万円で、利用者負担割合1〜3割に応じた金額で住宅改修を行うことができます。</p>' },
      { heading: '申請時の注意', content: '<p>必ず工事前に事前申請が必要です。老朽化を理由とした工事、大規模リフォーム、増改築工事は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a029/kaigo/kaigoservice/jukai.html',
    sourceName: '荒川区 介護保険住宅改修',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a029/kaigo/kaigoservice/jukai.html',
      'https://www.city.arakawa.tokyo.jp/kaigo/kaigoservice/kaishuu/index.html',
      'https://www.city.arakawa.tokyo.jp/a029/kaigo/kaigoservice/juutakukaishuu.html',
      'https://www.city.arakawa.tokyo.jp/a029/koureishairyou/sumai/koureijuukai.html'
    ],
    sourceNote: '荒川区公式ページで、介護保険住宅改修、支給限度額20万円、利用者負担1～3割、工事前申請必須、住民登録地で行う改修のみ対象、老朽化・大規模リフォーム対象外を確認。区独自の高齢者住宅改修給付事業は既存 arakawa-barrier-free で掲載済み。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-school-lunch',
    title: '荒川区 教育費の保護者負担軽減事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '学校給食費、補助教材費等、修学旅行参加費等を公費負担',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['childcare', 'living'],
    prefecture: '東京都',
    tags: ['荒川区', '学校給食費', '教育費負担軽減'],
    eligibility: '荒川区立小中学校に通学する児童生徒の保護者が対象です。',
    applicationPeriod: '通年。対象費用は学校が購入・支払いを行うものを公費負担',
    description: '荒川区が、区立小中学校に通う児童生徒の保護者負担を軽減するため、学校給食費、補助教材費等、移動教室・修学旅行参加費などを公費で負担する事業です。',
    sections: [
      { heading: '制度の概要', content: '<p>荒川区立小中学校に通学する児童生徒の保護者が負担する教育費について、学校が購入・支払いを行う費用を保護者に代わって区が負担します。</p>' },
      { heading: '対象費用', content: '<p>学校給食費、補助教材費等購入費用、下田臨海学園参加費用、清里・下田移動教室参加費用、修学旅行参加費用が対象です。</p>' },
      { heading: '対象外費用', content: '<p>保護者が直接準備する教材、学用品、校外学習の班別行動等で個別に発生する費用やお土産代は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a048/kyouiku-seishounen/kyouikushien/hogoshafutankeigen.html',
    sourceName: '荒川区 教育費の保護者負担軽減事業',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a048/kyouiku-seishounen/kyouikushien/hogoshafutankeigen.html',
      'https://www.city.arakawa.tokyo.jp/a048/kyouiku-seishounen/kyouikushien/shuugakuennjyo.html',
      'https://www.city.arakawa.tokyo.jp/a053/r5_giingian5.html'
    ],
    sourceNote: '荒川区公式ページで、教育費の保護者負担軽減事業、対象者、学校給食費・補助教材費等・移動教室・修学旅行参加費を公費負担すること、対象外費用を確認。旧生成データの学校給食費助成事業を公式制度名へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-senior-medical',
    title: '荒川区 定期高齢者肺炎球菌予防接種事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '令和8年度自己負担5,500円。生活保護世帯等は証明書持参で免除対象',
    maxAmountNum: 0,
    category: 'medical',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['荒川区', '高齢者肺炎球菌', '予防接種', '令和8年度'],
    eligibility: '接種日に65歳の方、または60歳から64歳で一定の障がいがある方が対象です。',
    applicationPeriod: '令和8年度。予診票を持参して東京23区内協力医療機関で接種',
    description: '荒川区が実施する令和8年度の定期高齢者肺炎球菌予防接種事業です。旧生成データの高齢者インフルエンザ等予防接種助成は令和7年度事業が終了しているため、現行公式ページで確認できる令和8年度肺炎球菌定期接種へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>令和8年度から高齢者肺炎球菌予防接種の使用ワクチンがPCV20に変更されています。対象者は予診票を持参し、東京23区内の協力医療機関で接種を受けます。</p>' },
      { heading: '対象者と自己負担', content: '<p>接種日に65歳の方または一部の60〜64歳の方が対象です。令和8年度の自己負担額は5,500円です。</p>' },
      { heading: '関連する接種費用助成', content: '<p>長期入院・施設入所等の理由により東京23区外で接種する場合は、償還払い方式で助成を受けられる場合があります。高齢者インフルエンザの令和7年度事業は2026年1月31日に終了し、令和8年度は2026年10月から2027年1月予定と案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a033/kenkouiryou/yobousesshu/haiennteiki.html',
    sourceName: '荒川区 定期高齢者肺炎球菌予防接種事業',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a033/kenkouiryou/yobousesshu/haiennteiki.html',
      'https://www.city.arakawa.tokyo.jp/a033/yobousessyu/inhuruenza.html',
      'https://www.city.arakawa.tokyo.jp/a033/yobousessyu/syoukanbarai.html'
    ],
    sourceNote: '荒川区公式ページで、令和8年度定期高齢者肺炎球菌予防接種、対象者、PCV20、自己負担5,500円、協力医療機関、予診票発行、23区外接種時の償還払いを確認。高齢者インフルエンザ令和7年度事業は2026年1月31日終了、令和8年度は2026年10月～2027年1月予定と確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'arakawa-telework-bonus',
    title: '荒川区 製造業等企業価値向上支援事業補助金（DX推進補助）',
    organization: '荒川区',
    type: 'local',
    maxAmount: '一般上限100万円、特例上限300万円。賃上げ要件該当時は上限200万円',
    maxAmountNum: 300,
    category: 'employment',
    prefecture: '東京都',
    tags: ['荒川区', 'DX推進補助', '中小企業', '令和8年度'],
    eligibility: '荒川区内中小企業者等で、デジタル技術を用いた業務効率化や販路拡大に繋げるシステム構築・導入等を行う事業者が対象です。実際に設備等を導入する前に相談が必要です。',
    applicationPeriod: '令和9年2月15日まで。予算到達次第終了',
    deadlineDate: '2027-02-15',
    description: '荒川区が、中小企業者の生産性向上・企業価値向上を目的に実施する製造業等企業価値向上支援事業補助金のうち、DX推進補助として業務効率化や販路拡大に必要なシステム構築・導入等を支援する制度です。旧生成データのテレワーク環境整備助成金を、公式確認できる現行補助金へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>中小企業者の生産性向上および企業価値向上を目的とした補助金です。DX推進補助では、デジタル技術を用いた業務効率化や販路拡大に繋げるシステムの構築・導入等が対象です。</p>' },
      { heading: '補助額', content: '<p>補助率は原則2分の1、一般上限100万円、特例上限300万円です。賃上げ要件に該当する場合は補助率3分の2、上限200万円となります。</p>' },
      { heading: '対象例と期限', content: '<p>インターネット販売サイトの構築や出店、業務効率化に必要なシステム等が対象です。申請書提出最終期限は2027年2月15日で、予算額到達次第終了します。</p>' }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/a021/jigyousha/jigyouunei/syoukibohojyo.html',
    sourceName: '荒川区 製造業等企業価値向上支援事業補助金',
    sourceUrls: [
      'https://www.city.arakawa.tokyo.jp/a021/jigyousha/jigyouunei/syoukibohojyo.html',
      'https://www.city.arakawa.tokyo.jp/documents/40046/supportmenu2.pdf',
      'https://www.city.arakawa.tokyo.jp/documents/40046/supportmenu1.pdf'
    ],
    sourceNote: '荒川区公式ページで、製造業等企業価値向上支援事業補助金、DX推進補助、申請書提出最終期限2027年2月15日、補助率2分の1、一般上限100万円、特例上限300万円、賃上げ要件該当時は補助率3分の2・上限200万円を確認。旧生成データのテレワーク環境整備助成金を現行のDX推進補助へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-afterschool',
    title: '国分寺市 放課後子どもプラン',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '参加無料。イベントにより実費負担の場合あり',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['childcare'],
    prefecture: '東京都',
    tags: ['国分寺市', '放課後子どもプラン', '小学生', '居場所'],
    eligibility: '国分寺市立小学校に通う児童が対象です。参加には国分寺市放課後子どもプラン参加申請フォームでの電子申請が必要です。',
    applicationPeriod: '令和8年度参加申請は2026年4月8日から受付。変更時は変更申請',
    description: '国分寺市が、市立全小学校で実施する放課後の居場所づくり事業です。遊びの場、学びの場、体験・交流の場を提供し、参加には電子申請が必要です。',
    sections: [
      { heading: '制度の概要', content: '<p>国分寺市では、市立全小学校で放課後子どもプランを実施しています。学校施設を利用し、協働活動サポーターの見守りの中で遊び・学び・体験交流の場を提供します。</p>' },
      { heading: '対象と実施時間', content: '<p>対象は市立小学校に通う児童です。実施日は学期中の月曜日から金曜日を基本とし、下校時から午後5時30分までの時間内で実施されます。</p>' },
      { heading: '参加方法', content: '<p>国分寺市放課後子どもプラン参加申請フォームから電子申請します。令和8年度の参加申請は2026年4月8日から可能です。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/kosodate-shien/1008665/1001396.html',
    sourceName: '国分寺市 放課後子どもプラン',
    sourceUrls: [
      'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/kosodate-shien/1008665/1001396.html',
      'https://www.city.kokubunji.tokyo.jp/faq/kurashi/1005235/1005264/1005627.html',
      'https://www.city.kokubunji.tokyo.jp/_res/projects/default_project/_page_/001/035/201/r8.nyuushoannai.pdf'
    ],
    sourceNote: '国分寺市公式ページで、放課後子どもプラン、市立全小学校での実施、遊び・学び・体験交流の場、令和8年度参加申請開始2026年4月8日、電子申請を確認。令和8年度学童保育所入所案内で、放課後子どもプランの費用は原則無料、イベントにより実費負担があることを確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-birth-bonus',
    title: '国分寺市 出産・子育て応援事業（妊婦のための支援給付）',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '市支援は胎児1人当たり最大11万円相当。東京都ギフトは別途対象',
    maxAmountNum: 11,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['国分寺市', '出産応援ギフト', '子育て応援ギフト', '妊婦支援給付'],
    eligibility: '申請日時点で国分寺市に住民票がある妊婦の方、令和7年4月1日以降に出産した産婦の方などが対象です。給付ごとに面接・訪問・電子申請等の手続きがあります。',
    applicationPeriod: '妊娠届出・面接時、乳児家庭全戸訪問時等に案内。給付ごとに電子申請',
    description: '国分寺市が、妊娠期から出産後まで切れ目なく支援するため、ゆりかご育児パッケージ、妊婦支援給付金（出産応援ギフト・子育て応援ギフト）を支給する事業です。旧生成データの出産祝い金を、公式確認できる現行制度へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>国分寺市では、妊婦のための支援給付として、妊娠時と出産後の2回に分けて妊婦支援給付金を支給します。ゆりかご育児パッケージもあわせて実施しています。</p>' },
      { heading: '給付内容', content: '<p>ゆりかご育児パッケージは胎児1人当たり1万円相当です。妊婦支援給付金は出産応援ギフト5万円相当、子育て応援ギフト5万円相当で、現金またはクーポン券を選べます。</p>' },
      { heading: '関連する東京都事業', content: '<p>東京都の赤ちゃんファーストも別途案内されています。令和8年1月1日から令和9年3月31日までに出産した方は、赤ちゃんファースト＋として合計13万円相当の対象です。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/ninshini-shussan/shussan/1033968.html',
    sourceName: '国分寺市 出産・子育て応援事業（妊婦のための支援給付）',
    sourceUrls: [
      'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/ninshini-shussan/shussan/1033968.html',
      'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/ninshini-shussan/shussan/1033977.html'
    ],
    sourceNote: '国分寺市公式ページで、妊婦のための支援給付、ゆりかご育児パッケージ胎児1人当たり1万円相当、出産応援ギフト5万円相当、子育て応援ギフト5万円相当、東京都赤ちゃんファーストの案内を確認。旧生成データの出産祝い金を現行の出産・子育て応援事業へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-childcare-subsidy',
    title: '国分寺市 認証保育所等保護者助成金制度（認可外保育施設対象）',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '月額最大6.7万円',
    maxAmountNum: 6.7,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['国分寺市', '認証保育所', '認可外保育施設', '保育料補助'],
    eligibility: '月初日に国分寺市の住民基本台帳に記録され、認証保育所、家庭福祉員、企業主導型施設、認可外保育施設等に月120時間以上の利用契約で在籍する児童の保護者が対象です。',
    applicationPeriod: '前期分は9月から10月頃、後期分は3月から4月頃に申請期間を設定',
    description: '国分寺市が、認証保育所等を利用する保護者の保育料負担を軽減するため、児童の年齢、課税状況、施設区分、第1子・第2子以降の別などに応じて助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>認証保育所、家庭福祉員、企業主導型施設、認可外保育施設等を利用する児童の保護者に対し、保育料の一部を助成します。東京都の保育料補助制度拡充に伴い、令和7年9月から一部拡充されています。</p>' },
      { heading: '助成上限額', content: '<p>0〜2歳児クラスの住民税課税世帯では、認証保育所等で月額最大6万7,000円、認可外保育施設で月額最大4万円など、年齢・課税状況・施設区分により上限額が異なります。</p>' },
      { heading: '申請時期', content: '<p>補助対象月を前期分（4月〜9月）と後期分（10月〜3月）に分け、前期分は9月〜10月頃、後期分は3月〜4月頃に申請期間が設けられます。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/kosodate-shien/1008670/1034983.html',
    sourceName: '国分寺市認証保育所等保護者助成金制度（認可外保育施設対象）',
    sourceUrls: [
      'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/kosodate-shien/1008670/1034983.html',
      'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/kosodate-shien/1008670/1022110.html',
      'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/kosodate-shien/1008670/1020864.html'
    ],
    sourceNote: '国分寺市公式ページで、認証保育所等保護者助成金、対象児童・対象施設、月額上限6万7,000円、国の無償化給付との調整、前期・後期申請時期を確認。旧生成データの保育料軽減補助金を現行の公式制度名へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-energy-support',
    title: '国分寺市 省エネ家電等買換え応援キャンペーン（受付終了）',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '令和5年度キャンペーンは上限3万円。現行受付確認不可',
    maxAmountNum: 3,
    category: 'living',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['国分寺市', '省エネ家電', '買換え', '受付終了'],
    eligibility: '旧生成データの省エネ家電買替え補助金は、令和5年度の省エネ家電等買換え応援キャンペーンとして公式確認できますが、現行の令和8年度受付は確認できませんでした。',
    applicationPeriod: '現行受付確認不可。令和5年度キャンペーンは2024年2月15日までに延長済み',
    deadlineDate: '2026-07-01',
    description: '国分寺市公式の過去市報で、エアコン・冷蔵庫・給湯器等の買換え費用を上限3万円補助するキャンペーンを確認しましたが、現在の通常受付制度としては確認できません。令和8年度の現行制度としては、別slugの再エネ・省エネ機器等設置助成制度を確認してください。',
    sections: [
      { heading: '公式確認結果', content: '<p>省エネ家電等買換え応援キャンペーンは、令和5年度の市報で確認できます。市内店舗で買い換えたエアコン・冷蔵庫・給湯器等の購入費を補助し、補助金額は本体購入費用の4分の1、上限3万円でした。</p>' },
      { heading: '掲載停止の理由', content: '<p>令和8年度の現行受付ページや現行要綱は確認できないため、通常一覧では期限切れ扱いとして除外します。</p>' },
      { heading: '関連する現行制度', content: '<p>国分寺市では、令和8年度の再エネ・省エネ機器等設置助成制度が確認できます。太陽光発電、燃料電池、蓄電池、高断熱窓などが対象です。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/shisei/kouhou/1035601/shihou/1033439/1031850.html',
    sourceName: '国分寺市 市報 省エネ家電等買換え応援キャンペーン',
    sourceUrls: [
      'https://www.city.kokubunji.tokyo.jp/shisei/kouhou/1035601/shihou/1033439/1031850.html',
      'https://www.city.kokubunji.tokyo.jp/_res/projects/default_project/_page_/001/031/850/r060115_p07_2.pdf',
      'https://www.city.kokubunji.tokyo.jp/kurashi/seikatsu/1030856/1033980.html'
    ],
    sourceNote: '国分寺市公式の令和6年1月15日号市報で、省エネ家電等買換え応援キャンペーンの申請受付再開・期間延長、対象家電、上限3万円、2024年2月15日までを確認。令和8年度の現行受付は確認できず、現行の省エネ系支援は再エネ・省エネ機器等設置助成制度として別slug kokubunji-housing-eco で掲載済みのため、旧生成slugは期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-infertility',
    title: '国分寺市 特定不妊治療費助成金（市独自助成は現行確認不可）',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '市独自の現行助成確認不可。東京都先進医療助成を案内',
    maxAmountNum: 0,
    category: 'medical',
    relatedCategories: ['childcare'],
    prefecture: '東京都',
    tags: ['国分寺市', '不妊治療', '東京都助成', '公式確認不可'],
    eligibility: '国分寺市公式ページでは、現行の市独自の特定不妊治療費助成としてではなく、東京都特定不妊治療費（先進医療）助成事業への案内が確認できます。',
    applicationPeriod: '市独自の現行受付確認不可。掲載停止扱い',
    deadlineDate: '2026-07-01',
    description: '旧生成データの国分寺市不妊治療費助成制度について、国分寺市公式の現行ページでは東京都特定不妊治療費（先進医療）助成事業の案内のみを確認しました。市独自の現行受付制度としては確認できないため、通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>国分寺市の妊娠から出産までの行政サービスページでは、東京都特定不妊治療費（先進医療）助成事業が案内されています。</p>' },
      { heading: '掲載停止の理由', content: '<p>国分寺市独自の現行助成として、対象要件、支給額、申請期間を確認できませんでした。旧規則ページは廃止例規配下で確認できるため、誤掲載防止として通常一覧から除外します。</p>' },
      { heading: '関連情報', content: '<p>不妊治療の先進医療助成は東京都の制度を確認してください。国分寺市のページから東京都公式ページへ案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/ninshini-shussan/shussan/1001102.html',
    sourceName: '国分寺市 妊娠から出産までの行政サービス',
    sourceUrls: [
      'https://www.city.kokubunji.tokyo.jp/kodomo-kyouiku/ninshini-shussan/shussan/1001102.html',
      'https://www.city.kokubunji.tokyo.jp/area/reiki_int/haishi/reiki_honbun/c000RG00001846.html'
    ],
    sourceNote: '国分寺市公式ページで、東京都特定不妊治療費（先進医療）助成事業への案内を確認。国分寺市特定不妊治療費助成金交付規則は廃止例規配下にあり、現行の市独自助成としての受付ページを確認できないため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-nursing-home-reform',
    title: '国分寺市 介護保険住宅改修費支給',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '支給限度基準額20万円。9割相当は上限18万円',
    maxAmountNum: 20,
    category: 'nursing',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['国分寺市', '介護保険', '住宅改修', 'バリアフリー'],
    eligibility: '在宅の要介護・要支援者が、実際に居住している住宅で手すりの取付けなどの住宅改修を行う場合が対象です。工事前にケアマネジャー等へ相談し、市へ事前申請する必要があります。',
    applicationPeriod: '通年。工事着工前に事前申請が必要',
    description: '国分寺市で介護保険により、在宅の要介護・要支援者が居住する住宅の手すり取付け等の住宅改修費の一部を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>在宅の要介護・要支援者が、実際に居住している住宅で手すりの取付けなどの住宅改修を行ったときに、住宅改修費の一部が支給されます。</p>' },
      { heading: '支給額', content: '<p>同一住宅で支給限度基準額は20万円です。9割相当額の場合は18万円を上限として支給され、一定以上所得のある方は負担割合に応じます。</p>' },
      { heading: '申請時の注意', content: '<p>工事を始める前に、必ずケアマネジャーまたは高齢福祉課へ相談し、着工前に市へ事前申請して審査を受ける必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/faq/kurashi/1005236/1005269/1005762.html',
    sourceName: '国分寺市 介護保険住宅改修 FAQ',
    sourceUrls: [
      'https://www.city.kokubunji.tokyo.jp/faq/kurashi/1005236/1005269/1005762.html',
      'https://www.city.kokubunji.tokyo.jp/kurashi/online/download/koureisha/1004562.html',
      'https://www.city.kokubunji.tokyo.jp/kurashi/online/download/koureisha/1004563.html'
    ],
    sourceNote: '国分寺市公式FAQで、介護保険住宅改修費、在宅の要介護・要支援者、支給限度基準額20万円、9割相当額上限18万円、工事前相談・事前申請必須を確認。受領委任払い利用申請書・支給申請書ページで申請書式と窓口を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-seismic-diagnosis',
    title: '国分寺市 木造住宅の耐震診断士派遣事業（既存耐震助成へ集約済み）',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '無料耐震診断士派遣。既存slug kokubunji-housing-seismic へ集約済み',
    maxAmountNum: 0,
    category: 'disaster',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['国分寺市', '耐震診断', '木造住宅', '集約済み'],
    eligibility: '昭和56年5月31日以前に建築された木造住宅、または昭和56年6月から平成12年5月までに在来軸組工法で建築された木造住宅の所有者などが対象です。詳細は既存の `kokubunji-housing-seismic` で掲載しています。',
    applicationPeriod: '令和8年4月1日から令和9年1月29日まで。既存slugへ集約済みのため通常一覧から除外',
    deadlineDate: '2026-07-01',
    description: '国分寺市公式の木造住宅耐震化支援ページでは、無料の耐震診断士派遣事業と耐震改修等助成金が一体で案内されています。既に `kokubunji-housing-seismic` で公式確認済みのため、この旧生成slugは重複防止として通常一覧から除外します。',
    sections: [
      { heading: '集約の理由', content: '<p>同じ公式ページで耐震診断士派遣事業と耐震改修等助成金が案内されており、既存の `kokubunji-housing-seismic` で掲載済みです。</p>' },
      { heading: '確認した内容', content: '<p>耐震診断士の派遣は無料で、令和8年度の申請期間は2026年4月1日から2027年1月29日までです。</p>' },
      { heading: '掲載先', content: '<p>利用できる制度としては `kokubunji-housing-seismic` のページを確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/kurashi/sumai/jutaku/1027860.html',
    sourceName: '国分寺市 木造住宅の耐震診断・耐震改修等助成金',
    sourceUrls: ['https://www.city.kokubunji.tokyo.jp/kurashi/sumai/jutaku/1027860.html'],
    sourceNote: '国分寺市公式ページで、無料の耐震診断士派遣事業、耐震改修等助成金、令和8年度申請期間2026年4月1日から2027年1月29日を確認。既存の kokubunji-housing-seismic と同一公式ページの制度であるため、旧生成slugは重複防止として期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-startup-support',
    title: '国分寺市 事業資金融資あっせん（創業資金・保証料補助）',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '創業資金 融資限度額500万円。保証料は全額補助',
    maxAmountNum: 500,
    category: 'employment',
    prefecture: '東京都',
    tags: ['国分寺市', '創業資金', '融資あっせん', '保証料補助'],
    eligibility: '法人は登記上の本店所在地が市内にあること（創業資金は予定を含む）、個人は市内で事業を営む予定または開業後1年未満であることなどが要件です。東京信用保証協会等の保証、市税完納などの要件があります。',
    applicationPeriod: '通年相談型。予算上限に達した場合は新規あっせん申込を休止する場合あり',
    description: '国分寺市が、市内事業者の事業育成と振興を図るために実施する低利の事業資金融資あっせん制度です。旧生成データの創業支援補助金を、公式確認できる創業資金を含む融資あっせん・保証料補助制度へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>市と契約している取扱特定金融機関に融資をあっせんし、融資決定後は利息の一部を市が負担します。信用保証料は、通常2分の1、創業資金の場合は全額を申請により補助します。</p>' },
      { heading: '創業資金', content: '<p>創業資金は、市内で事業を営む予定または開業後1年未満の方などが対象です。融資限度額は500万円で、創業前は自己資金の範囲内が限度です。</p>' },
      { heading: '関連する創業支援', content: '<p>国分寺市では、特定創業支援等事業として個別相談、創業塾、創業セミナー等も実施しています。証明書により登録免許税の軽減や創業融資の優遇を受けられる場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/business/keizai/1011791/1002836.html',
    sourceName: '国分寺市 事業資金融資あっせん',
    sourceUrls: [
      'https://www.city.kokubunji.tokyo.jp/business/keizai/1011791/1002836.html',
      'https://www.city.kokubunji.tokyo.jp/business/keizai/1011936/1009751.html',
      'https://www.city.kokubunji.tokyo.jp/business/keizai/1011936/1014238.html'
    ],
    sourceNote: '国分寺市公式ページで、事業資金融資あっせん、創業資金の対象要件、融資限度額500万円、全体利率1.975％、本人負担0.2％、市負担1.775％、保証料補助2分の1・創業資金全額を確認。創業支援等事業ページで特定創業支援等事業と証明書による支援内容、令和8年度こくぶんじ創業塾ページで無料講座を確認。旧生成データの創業支援補助金を現行の融資あっせん・保証料補助へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'kokubunji-telework-bonus',
    title: '国分寺市 テレワーク推進補助金（公式確認不可）',
    organization: '国分寺市',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '東京都',
    tags: ['国分寺市', 'テレワーク', '公式確認不可'],
    eligibility: '旧生成データのテレワーク推進補助金について、国分寺市公式サイトで現行の同名補助金として確認できませんでした。事業者向け支援としては事業資金融資あっせんや創業支援等事業が確認できます。',
    applicationPeriod: '公式助成確認不可。掲載停止扱い',
    deadlineDate: '2026-07-01',
    description: '国分寺市公式サイトで、現行のテレワーク推進補助金として制度名、補助額、対象経費、申請期間を確認できませんでした。誤掲載防止のため通常一覧から除外し、関連する事業者支援は事業資金融資あっせん等を参照する扱いにします。',
    sections: [
      { heading: '公式確認結果', content: '<p>国分寺市公式の事業者支援、創業支援、就労支援ページを確認しましたが、旧生成データのテレワーク推進補助金は現行制度として確認できませんでした。</p>' },
      { heading: '掲載停止の理由', content: '<p>公式に確認できる制度名、補助額、対象経費、申請期間がないため、通常一覧から除外します。</p>' },
      { heading: '関連情報', content: '<p>市内事業者向けには、事業資金融資あっせんや創業支援等事業が公式に案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.kokubunji.tokyo.jp/business/keizai/1011791/1002836.html',
    sourceName: '国分寺市 事業資金融資あっせん・創業支援等事業',
    sourceUrls: [
      'https://www.city.kokubunji.tokyo.jp/business/keizai/1011791/1002836.html',
      'https://www.city.kokubunji.tokyo.jp/business/keizai/1011936/index.html',
      'https://www.city.kokubunji.tokyo.jp/business/shushoku/1011778/1008749.html'
    ],
    sourceNote: '国分寺市公式の事業資金融資あっせん、起業・創業支援、市就労支援の取組を確認したが、旧生成データのテレワーク推進補助金は現行の市公式補助金として確認できず。誤掲載防止として期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'komae-afterschool',
    title: '狛江市 KoKoA（放課後子ども教室事業）',
    organization: '狛江市',
    type: 'local',
    maxAmount: '参加無料。保険は市が加入し、家庭負担なし',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['childcare'],
    prefecture: '東京都',
    tags: ['狛江市', 'KoKoA', '放課後子ども教室', '小学生'],
    eligibility: '狛江市立小学校に在籍する1年生から6年生までの児童が対象です。各小学校ごとに毎年度登録し、年度途中でも登録できます。',
    applicationPeriod: '毎年度登録。年度途中登録も可能',
    description: '狛江市が市内6つの小学校すべてで実施する放課後子ども教室事業です。自由遊びを基本とし、放課後の安全・安心な居場所を提供します。',
    sections: [
      { heading: '制度の概要', content: '<p>KoKoAは、狛江市立小学校に通う児童を対象に、学校施設等で放課後の居場所を提供する事業です。市内6つの小学校すべてで実施されています。</p>' },
      { heading: '実施内容', content: '<p>自由遊びを基本とし、外遊びやKoKoAルームでの室内遊びなどを行います。1年生から6年生までが自由に参加できます。</p>' },
      { heading: '登録と費用', content: '<p>各小学校ごとに毎年度登録します。費用は無料で、保険は市が加入するため保険料の家庭負担はありません。</p>' }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/43%2C3204%2C588%2C3435%2Chtml',
    sourceName: '狛江市 KoKoA（放課後子ども教室）',
    sourceUrls: [
      'https://www.city.komae.tokyo.jp/index.cfm/43%2C3204%2C588%2C3435%2Chtml',
      'https://komae-kosodate.net/article_docs/260.html',
      'https://komae-kosodate.net/map/list/komaanominnnaatumare/'
    ],
    sourceNote: '狛江市公式ページでKoKoAはこまえ子育てねっとに案内されることを確認。こまえ子育てねっとで、市内6小学校すべてでの実施、1～6年生が参加可能、自由遊び、毎年度登録、保険は市加入で家庭負担なしを確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'komae-birth-bonus',
    title: '狛江市 出産祝金支給事業',
    organization: '狛江市',
    type: 'local',
    maxAmount: '支給対象子1人当たり2万円',
    maxAmountNum: 2,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['狛江市', '出産祝金', '子育て支援'],
    eligibility: '支給対象子を出産した父または母等で、支給対象子の出生日に狛江市の住民基本台帳に記録され、支給申請日に支給対象子とともに市内に住所がある方などが対象です。',
    applicationPeriod: '支給対象子の出生日から1年以内に申請',
    description: '狛江市が、子どもの誕生を祝福し健やかな成長を願うとともに、子育て家庭の経済的負担を軽減するため、支給対象子1人当たり2万円を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>狛江市出産祝金支給事業は、子どもの誕生を祝福し、子育て家庭の経済的負担軽減を目的に出産祝金を支給する制度です。</p>' },
      { heading: '支給額', content: '<p>支給対象子1人当たり2万円です。支給対象子1人につき1回限り支給されます。</p>' },
      { heading: '申請期限', content: '<p>支給対象子の出生日から1年以内に申請が必要です。申請受理後、審査の上、翌月末に指定口座へ振り込まれます。</p>' }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/43%2C127034%2C330%2Chtml',
    sourceName: '狛江市 出産祝金支給事業',
    sourceUrls: [
      'https://www.city.komae.tokyo.jp/index.cfm/43%2C127034%2C330%2Chtml',
      'https://komae-kosodate.net/article_docs/279.html',
      'https://komae-kosodate.net/article_docs/2257.html'
    ],
    sourceNote: '狛江市公式ページで出産祝金支給事業の案内を確認。こまえ子育てねっとで、支給対象子1人当たり2万円、出生日から1年以内申請、出産祝金申請書、翌月末支給を確認。妊婦のための支援給付は別制度として関連確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'komae-childcare-subsidy',
    title: '狛江市 認証保育所等入所児童保護者負担軽減補助金（令和7年度後期）',
    organization: '狛江市',
    type: 'local',
    maxAmount: '月額最大8万円。令和7年度後期申請は2026年3月31日まで',
    maxAmountNum: 8,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['狛江市', '認証保育所', '認可外保育施設', '期限切れ'],
    eligibility: '市内在住で、認証保育所等の認可外保育施設を利用する未就学児を扶養し、保育料の滞納がない世帯などが対象です。',
    applicationPeriod: '令和7年度後期分の申請は2026年3月2日から3月31日まで',
    deadlineDate: '2026-03-31',
    description: '狛江市が、認証保育所等に通う未就学児の保護者負担を軽減する補助金です。公式確認できる最新の令和7年度後期申請期限は到来済みのため、通常一覧から除外します。',
    sections: [
      { heading: '制度の概要', content: '<p>認証保育所等を利用する児童の保護者の負担軽減を目的とした補助制度です。令和7年9月から東京都の第一子無償化に伴い補助内容が拡充されています。</p>' },
      { heading: '補助額', content: '<p>令和7年度後期パンフレットでは、0～2歳児の課税世帯で利用者支援月額8万円、3～5歳児で月額4万円などの補助額が案内されています。</p>' },
      { heading: '掲載上の扱い', content: '<p>広報こまえで確認できる令和7年度後期分の申請期間は2026年3月2日から3月31日までで、期限到来済みのため通常一覧から除外します。</p>' }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/47%2C142074%2C611%2C3721%2Chtml',
    sourceName: '狛江市 認証保育所等入所児童保護者負担軽減補助金',
    sourceUrls: [
      'https://www.city.komae.tokyo.jp/index.cfm/47%2C142074%2C611%2C3721%2Chtml',
      'https://komae-kosodate.net/article_docs/2518.html',
      'https://komae-kosodate.net/article_docs/2497.html'
    ],
    sourceNote: '狛江市公式の令和8年3月1日号で、認証保育所等入所児童保護者負担軽減補助金後期申請、申請期間2026年3月2日から31日、対象、必要書類を確認。こまえ子育てねっとで令和7年度補助、後期パンフレット、月額最大8万円、令和7年9月からの補助拡大を確認。令和8年度現行受付は確認できないため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'komae-energy-support',
    title: '狛江市 省エネ家電買替え補助金（公式確認不可）',
    organization: '狛江市',
    type: 'local',
    maxAmount: '市独自の現行省エネ家電買替補助は確認不可',
    maxAmountNum: 0,
    category: 'living',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['狛江市', '省エネ家電', '公式確認不可'],
    eligibility: '旧生成データの省エネ家電買替え補助金について、狛江市公式サイトで現行の市独自補助金として確認できませんでした。現行の市助成としては地球温暖化対策用設備導入助成が確認できます。',
    applicationPeriod: '市独自の現行受付確認不可。掲載停止扱い',
    deadlineDate: '2026-07-01',
    description: '狛江市公式サイトでは、過去に東京都ゼロエミポイントへの案内は確認できますが、市独自の省エネ家電買替え補助金として現行の制度名、補助額、申請期間は確認できませんでした。誤掲載防止として通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>狛江市公式サイトでは、東京都の省エネ家電買替ポイント案内は確認できますが、市独自の省エネ家電買替え補助金の現行受付は確認できませんでした。</p>' },
      { heading: '掲載停止の理由', content: '<p>公式に確認できる制度名、支給額、対象要件、申請期間がないため通常一覧から除外します。</p>' },
      { heading: '関連する現行制度', content: '<p>狛江市では、令和8年度地球温暖化対策用設備導入助成を実施しています。太陽光発電、高断熱窓、家庭用燃料電池、蓄電池などが対象です。</p>' }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/41%2C127297%2C313%2C2006%2Chtml',
    sourceName: '狛江市 地球温暖化対策用設備導入助成',
    sourceUrls: [
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C127297%2C313%2C2006%2Chtml',
      'https://www.city.komae.tokyo.jp/index.cfm/47%2C107716%2C581%2C3416%2Chtml'
    ],
    sourceNote: '狛江市公式ページで令和8年度地球温暖化対策用設備導入助成を確認。過去広報で東京ゼロエミポイントの案内は確認できるが、市独自の現行省エネ家電買替え補助金は確認できないため、旧生成slugは期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'komae-infertility',
    title: '狛江市 不妊治療費等助成金',
    organization: '狛江市',
    type: 'local',
    maxAmount: '特定不妊治療費（先進医療）は上限3万円。不妊検査等1万円、不育症検査2万円',
    maxAmountNum: 3,
    category: 'medical',
    relatedCategories: ['childcare'],
    prefecture: '東京都',
    tags: ['狛江市', '不妊治療', '不育症', '令和8年度'],
    eligibility: '令和8年4月1日以降に東京都の不妊検査等助成、不育症検査助成、特定不妊治療費（先進医療）助成の承認決定を受け、東京都の助成額を超える費用がかかった狛江市在住者が対象です。',
    applicationPeriod: '東京都の承認決定（2026年4月1日以降）を受けてから1年以内。予算到達で終了',
    description: '狛江市が令和8年度から開始した、東京都の不妊・不育症関連助成への上乗せ助成です。不妊検査等、不育症検査、特定不妊治療費（先進医療）を対象に助成します。',
    sections: [
      { heading: '制度の概要', content: '<p>東京都が実施する不妊検査等助成事業、不育症検査助成事業、特定不妊治療費（先進医療）助成事業に上乗せして、医療費の一部を助成します。</p>' },
      { heading: '助成上限', content: '<p>不妊検査等は1万円、不育症検査は2万円、特定不妊治療費（先進医療）は3万円が上限です。東京都助成額を差し引いた費用が対象です。</p>' },
      { heading: '申請期限', content: '<p>東京都の承認決定を受けてから1年以内に申請します。予算がなくなり次第終了のため、早めの申請が案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/43%2C42550%2C330%2Chtml',
    sourceName: '狛江市 不妊治療費等助成金',
    sourceUrls: [
      'https://www.city.komae.tokyo.jp/index.cfm/43%2C42550%2C330%2Chtml',
      'https://komae-kosodate.net/article_docs/2815.html',
      'https://www.city.komae.tokyo.jp/index.cfm/47%2C143494%2C614%2C3741%2Chtml'
    ],
    sourceNote: '狛江市公式ページで不妊・不育症情報がこまえ子育てねっとへ案内されることを確認。こまえ子育てねっとで、令和8年度開始、不妊検査等上限1万円、不育症検査上限2万円、特定不妊治療費（先進医療）上限3万円、東京都承認決定から1年以内申請を確認。広報こまえ令和8年5月1日号でも同内容を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'komae-nursing-home-reform',
    title: '狛江市 介護保険居宅介護（介護予防）住宅改修費支給',
    organization: '狛江市',
    type: 'local',
    maxAmount: '支給限度額20万円。改修費の9割から7割相当を支給',
    maxAmountNum: 20,
    category: 'nursing',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['狛江市', '介護保険', '住宅改修', 'バリアフリー'],
    eligibility: '在宅の要介護・要支援者が生活しやすい環境を作るため、手すり取付け、段差解消、床材変更、扉の取替えなどの住宅改修を行う場合が対象です。',
    applicationPeriod: '通年。原則として工事前に事前申請が必要',
    description: '狛江市で、介護保険により居宅介護・介護予防の住宅改修費を支給する制度です。改修費の9割から7割相当が支給され、同一住宅につき1人20万円までの支給限度額があります。',
    sections: [
      { heading: '制度の概要', content: '<p>生活しやすい環境を作るための住宅改修費について、申請により改修費の9割から7割に相当する額が支給されます。</p>' },
      { heading: '支給限度額', content: '<p>同一住宅につき1人20万円までの支給限度額があります。対象工事は手すり取付け、段差解消、床または通路面の材料変更、扉の取替え、便器の取替えに伴う改修などです。</p>' },
      { heading: '申請時の注意', content: '<p>原則として事前申請が必要です。支給を希望する場合は、事前にケアマネジャーまたは地域包括支援センターへ相談します。</p>' }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/44%2C14511%2C340%2C2076%2Chtml',
    sourceName: '狛江市 介護保険に関する申請書類',
    sourceUrls: [
      'https://www.city.komae.tokyo.jp/index.cfm/44%2C14511%2C340%2C2076%2Chtml',
      'https://www.city.komae.tokyo.jp/index.cfm/44%2C91481%2C340%2C2076%2Chtml',
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C14064%2Cc%2Chtml/14064/20260420-151305.pdf'
    ],
    sourceNote: '狛江市公式の介護保険申請書類ページで、住宅改修費支給、改修費の9割から7割、同一住宅につき1人20万円まで、事前申請、支給対象工事を確認。介護保険サービスページと令和8年4月改訂の住宅改修の手引きPDFで相談・事前申請を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'komae-seismic-diagnosis',
    title: '狛江市 木造住宅耐震助成',
    organization: '狛江市',
    type: 'local',
    maxAmount: '耐震診断 最大12万円、耐震改修 最大80万円＋加算最大61.2万円等',
    maxAmountNum: 141.2,
    category: 'disaster',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['狛江市', '耐震診断', '耐震改修', '木造住宅'],
    eligibility: '市内の木造住宅または木造集合住宅で、昭和56年5月31日以前の旧耐震住宅や、一定の平成12年5月31日以前の新耐震住宅の所有者等が対象です。市税完納などの要件があります。',
    applicationPeriod: '通年相談型。耐震診断・改修契約前に申請が必要',
    description: '狛江市が、木造住宅の耐震化を促進するため、耐震アドバイザー派遣、耐震診断助成、耐震改修・除却助成を行う制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>昭和56年以前の旧耐震基準で建てられた木造住宅等の耐震化を支援するため、アドバイザー派遣、耐震診断、耐震改修等の助成制度を設けています。</p>' },
      { heading: '助成内容', content: '<p>耐震アドバイザー派遣は無料です。耐震診断は費用の3分の2で旧耐震住宅は上限12万円、新耐震住宅は上限9万円です。耐震改修は旧耐震住宅で上限80万円、新耐震住宅で上限69万円、要件該当者が居住する住宅は加算最大61.2万円があります。</p>' },
      { heading: '申請時の注意', content: '<p>耐震診断や耐震改修工事の契約前に助成金申請が必要です。契約後の申請はできないため、事前に市へ相談してください。</p>' }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/41%2C71506%2C315%2C2010%2Chtml',
    sourceName: '狛江市 木造住宅耐震助成',
    sourceUrls: [
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C71506%2C315%2C2010%2Chtml',
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C99325%2Cc%2Chtml/99325/20250414-105110.pdf',
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C93200%2Cc%2Chtml/93200/20260402-121218.pdf'
    ],
    sourceNote: '狛江市公式ページで、木造住宅耐震助成、無料耐震アドバイザー派遣、耐震診断3分の2・上限12万円/9万円、耐震改修上限80万円/69万円、同時リフォーム上限20万円、除却上限80万円、令和8・9年度の加算最大61.2万円、契約前申請必須を確認。住宅関係支援ガイドブックと令和8年度からのアクションプログラムも確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'komae-telework-bonus',
    title: '狛江市 小口事業資金融資あっ旋制度',
    organization: '狛江市',
    type: 'local',
    maxAmount: '運転・設備資金 最大1,000万円、創業・研究開発資金 最大500万円。利子・信用保証料を補助',
    maxAmountNum: 1000,
    category: 'employment',
    prefecture: '東京都',
    tags: ['狛江市', '小口事業資金', '融資あっ旋', '信用保証料補助'],
    eligibility: '狛江市内の中小企業者が対象です。個人は住民登録地が狛江市で営業本拠地が東京都内、法人は登記上の本店所在地および主たる事業所が狛江市であることなどの要件があります。',
    applicationPeriod: '令和8年度申込受付は2026年4月1日から2027年3月31日まで',
    deadlineDate: '2027-03-31',
    description: '狛江市が、市内事業者向けに事業用資金の融資あっ旋を行い、利子と信用保証料の一部を補助する制度です。旧生成データのテレワーク推進補助金は現行公式制度として確認できないため、公式確認できる現行の事業者資金支援へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>狛江市では、市内事業者を対象に小口事業資金融資あっ旋制度を設けています。制度利用により、借入にかかる利子や信用保証料の一部について補助を受けられます。</p>' },
      { heading: '融資あっ旋額', content: '<p>事業資金・経営相談等の公式ページでは、運転資金1,000万円以内、設備資金1,000万円以内、創業資金500万円以内、研究開発資金500万円以内と案内されています。</p>' },
      { heading: '申込期間', content: '<p>令和8年度案内パンフレットで、申込受付期間は2026年4月1日から2027年3月31日までと確認できます。</p>' }
    ],
    officialUrl: 'https://www.city.komae.tokyo.jp/index.cfm/41%2C54281%2C310%2C1988%2Chtml',
    sourceName: '狛江市 小口事業資金融資あっ旋制度',
    sourceUrls: [
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C54281%2C310%2C1988%2Chtml',
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C58600%2C318%2C3694%2Chtml',
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C54281%2Cc%2Chtml/54281/20260417-120412.pdf',
      'https://www.city.komae.tokyo.jp/index.cfm/41%2C84304%2C318%2Chtml'
    ],
    sourceNote: '狛江市公式ページで、小口事業資金融資あっ旋制度、利子・信用保証料補助、令和8年度案内パンフレットを確認。事業資金・経営相談等ページで運転資金1,000万円、設備資金1,000万円、創業資金500万円、研究開発資金500万円を確認。令和8年度パンフレットで受付期間2026年4月1日から2027年3月31日、信用保証料補助率を確認。創業支援ページで創業資金融資あっ旋制度と創業支援家賃・改修費補助金も関連確認。旧生成データのテレワーク推進補助金は現行公式制度として確認できないため、公式確認できる現行の事業者資金支援へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'mitaka-afterschool-care',
    title: '三鷹市 学童保育所育成料等減額・免除',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '育成料月額7,000円の減額・免除。延長育成料・おやつ代も免除対象あり',
    maxAmountNum: 0.7,
    category: 'education',
    relatedCategories: ['childcare', 'living'],
    prefecture: '東京都',
    tags: ['三鷹市', '学童保育所', '育成料減免'],
    eligibility: '三鷹市の学童保育所に入所する児童の保護者で、生活保護世帯、住民税非課税世帯、均等割のみの世帯など減免事由に該当する世帯が対象です。',
    applicationPeriod: '年度ごとに申請。申請受理月から適用され、さかのぼり不可',
    description: '三鷹市の学童保育所育成料等について、世帯状況や課税状況に応じて減額・免除を受けられる制度です。旧生成データの放課後児童クラブ利用料助成を、公式確認できる学童保育所育成料等減免へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>三鷹市の学童保育所では、育成料等について世帯状況や課税状況に応じた減額・免除制度があります。</p>' },
      { heading: '減免内容', content: '<p>令和8年度入所案内では、育成料は月額7,000円です。学童保育所についての公式ページでは、住民税均等割のみの世帯は月額3,500円減額、対象事由によっては育成料、延長育成料、おやつ代が免除対象となることを確認できます。</p>' },
      { heading: '申請時の注意', content: '<p>減免申請は年度ごとの申請です。減免の適用は申請を受理した月からで、さかのぼっての減免はできません。</p>' }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/054/054724.html',
    sourceName: '三鷹市 学童保育所各種申請',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/054/054724.html',
      'https://www.city.mitaka.lg.jp/c_service/116/116153.html',
      'https://www.city.mitaka.lg.jp/c_service/115/attached/attach_115382_2.pdf'
    ],
    sourceNote: '三鷹市公式ページで、学童保育所育成料等の減免申請、年度ごとの申請、申請受理月から適用、さかのぼり不可を確認。学童保育所についての公式ページで、住民税均等割のみ世帯の月額3,500円減額、対象事由による延長育成料・おやつ代免除を確認。令和8年度入所案内PDFで育成料月額7,000円、延長育成料、おやつ代を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'mitaka-home-care',
    title: '三鷹市 家族介護慰労金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '年額10万円',
    maxAmountNum: 10,
    category: 'nursing',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['三鷹市', '家族介護慰労金', '在宅介護'],
    eligibility: '在宅高齢者を介護している家族が対象です。申込書では要介護4または5の認定状況、介護保険サービス利用状況、住民基本台帳、世帯課税状況等の確認同意が求められます。',
    applicationPeriod: '通年相談型。対象要件の審査あり',
    description: '三鷹市が、在宅高齢者を介護している家族に介護慰労金を年額10万円贈呈する制度です。旧生成データの在宅高齢者介護手当を、公式確認できる家族介護慰労金へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>在宅高齢者を介護している家族を対象に、三鷹市が家族介護慰労金を支給する制度です。</p>' },
      { heading: '支給額', content: '<p>公式ページでは、介護慰労金として年額10万円を贈呈すると案内されています。</p>' },
      { heading: '申請時の確認事項', content: '<p>申込書では、要介護者の要介護4・5認定状況、介護保険サービスの利用状況、入院状況、世帯の課税状況などを確認する扱いです。</p>' }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/000/000912.html',
    sourceName: '三鷹市 家族介護慰労金',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/000/000912.html',
      'https://www.city.mitaka.lg.jp/c_service/083/attached/attach_83519_6.pdf',
      'https://www.city.mitaka.lg.jp/c_service/000/attached/attach_912_1.pdf'
    ],
    sourceNote: '三鷹市公式ページで、在宅高齢者を介護している家族を対象に介護慰労金年額10万円を贈呈することを確認。高齢者向けサービス冊子の給付・助成ページで年額10万円の介護慰労金を確認。申込書PDFで要介護4・5、住民基本台帳、世帯課税状況、介護保険サービス、医療保険情報等の確認同意を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'mitaka-infertility',
    title: '三鷹市 不妊症・不育症に関する相談・東京都助成案内',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '市独自助成確認不可。東京都不妊検査等助成・先進医療助成等を案内',
    maxAmountNum: 0,
    category: 'medical',
    relatedCategories: ['childcare'],
    prefecture: '東京都',
    tags: ['三鷹市', '不妊症', '不育症', '東京都助成'],
    eligibility: '三鷹市民で不妊治療を考えている方、不妊治療中の方、妊娠を望む方等に相談・情報提供を行います。市独自の現行不妊治療費助成は今回確認できませんでした。',
    applicationPeriod: '市独自助成の現行受付確認不可。通常一覧から除外',
    deadlineDate: '2026-07-01',
    description: '三鷹市公式ページでは、不妊症・不育症に関する相談や東京都の不妊検査等助成・特定不妊治療費（先進医療）助成への案内を確認できますが、市独自の現行助成金としては確認できません。通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>三鷹市公式ページでは、不妊症・不育症に関する相談、妊娠支援ポータルサイト、不妊・不育ホットライン、東京都の不妊検査等助成などが案内されています。</p>' },
      { heading: '掲載停止の理由', content: '<p>旧生成データにある不妊・不育症治療費助成について、市独自の現行制度として対象要件、支給額、申請期間を確認できなかったため通常一覧から除外します。</p>' },
      { heading: '関連情報', content: '<p>不妊検査等助成、不育症検査助成、特定不妊治療費（先進医療）助成は東京都の制度を確認してください。三鷹市公式ページから東京都の情報へ案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/081/081727.html',
    sourceName: '三鷹市 不妊症・不育症に関する相談について',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/081/081727.html'
    ],
    sourceNote: '三鷹市公式ページで、不妊症・不育症に関する相談、対象、東京都妊活課、不妊・不育ホットライン、東京都の不妊検査等助成・特定不妊治療費（先進医療）助成等への案内を確認。市独自の現行助成金としての支給額・申請期間は確認できないため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'mitaka-nursery-support',
    title: '三鷹市 認可外保育施設利用助成制度',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '月額最大8万円',
    maxAmountNum: 8,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['三鷹市', '認可外保育施設', '保育料助成'],
    eligibility: '三鷹市内在住で、認証保育所・認可外保育施設・企業主導型保育施設等を利用する児童の保護者が対象です。年齢、施設区分、課税状況、無償化給付等により助成内容が異なります。',
    applicationPeriod: '通年。3か月分をまとめて8月・11月・2月・5月末に交付決定・振込',
    description: '三鷹市が、認証保育所や認可外保育施設等を利用する保護者の負担軽減を目的に実施する利用助成制度です。0〜2歳児の市民税課税世帯では月額上限8万円などの助成があります。',
    sections: [
      { heading: '制度の概要', content: '<p>認証保育所、認可外保育施設、企業主導型保育施設等を利用する児童の保護者に対し、基本保育料を上限として助成します。</p>' },
      { heading: '主な助成額', content: '<p>認証保育所・認可外保育施設では、0〜2歳児の市民税課税世帯は月額上限8万円、0〜2歳児の生活保護世帯・市民税非課税世帯は月額上限3万8,000円、3〜5歳児は月額上限4万円です。</p>' },
      { heading: '支給時期', content: '<p>市が施設に在園状況等を確認し、3か月分の助成金について8月、11月、2月、5月末に交付決定通知を送付し、登録口座へ振り込みます。</p>' }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/114/114476.html',
    sourceName: '三鷹市 認可外保育施設利用助成制度',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/114/114476.html',
      'https://www.city.mitaka.lg.jp/c_service/081/081723.html',
      'https://www.city.mitaka.lg.jp/c_service/085/attached/attach_85057_4.pdf',
      'https://www.city.mitaka.lg.jp/c_service/085/attached/attach_85057_1.pdf'
    ],
    sourceNote: '三鷹市公式ページで、認可外保育施設利用助成制度、対象施設、助成額（月額上限8万円等）を確認。企業主導型保育施設ページで関連リンクを確認。認可外保育施設等案内PDFで3か月分を8月・11月・2月・5月末に交付決定・振込すること、申請書PDFで三鷹市認可外保育施設利用助成金の申請用途を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'mitaka-rainwater-tank',
    title: '三鷹市 雨水浸透ます設置事業',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '市の費用負担で雨水浸透ますを設置',
    maxAmountNum: 0,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '東京都',
    tags: ['三鷹市', '雨水浸透ます', '浸水対策'],
    eligibility: '三鷹市内の対象住宅で、雨水浸透ますの設置スペースが確保できるなど技術的に設置可能な場合が対象です。申し込み後、市と委託業者が対象住宅・設置可否を確認します。',
    applicationPeriod: '通年相談型。申込者多数の場合は工事まで数カ月待ちの場合あり',
    description: '三鷹市が、希望する住宅に公費で雨水浸透ますを設置する事業です。旧生成データの雨水タンク設置補助金を、公式確認できる雨水浸透ます設置支援へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>三鷹市では、雨水の地下浸透を促進し、河川や下水道本管への流出を抑えるため、希望する方へ公費で雨水浸透ますを設置しています。</p>' },
      { heading: '申し込みの流れ', content: '<p>水再生課下水道維持係へ電話し、設置希望、住所、氏名、電話番号を伝えます。市が対象住宅か確認し、市の委託業者が現地確認を行います。</p>' },
      { heading: '注意点', content: '<p>庭等のスペースが狭い場合や、雨どい周辺に他の埋設管がある場合など、技術的に設置できないことがあります。申込者が多い場合は工事まで数カ月待つ場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/102/102859.html',
    sourceName: '三鷹市 希望するかたへ公費で雨水浸透ますを設置します',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/102/102859.html',
      'https://www.city.mitaka.lg.jp/c_service/014/014102.html'
    ],
    sourceNote: '三鷹市公式ページで、希望者へ公費で雨水浸透ますを設置すること、申し込みの流れ、対象住宅・設置スペース確認、申込者多数時の待機を確認。雨水浸透施設設置基準ページで、雨水浸透施設設置推進の目的と最新版基準を確認。旧生成データの雨水タンク設置補助金を現行公式の雨水浸透ます設置支援へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'mitaka-school-aid',
    title: '三鷹市 就学援助制度',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '学用品費、給食費、修学旅行費等を援助。費目・学年により異なる',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['childcare', 'living'],
    prefecture: '東京都',
    tags: ['三鷹市', '就学援助', '学用品費', '学校給食費'],
    eligibility: '三鷹市内に在住し、小・中学校に在籍する児童生徒の保護者で、生活保護を受けている方、または経済的理由により教育費の支払いに困っている方が対象です。',
    applicationPeriod: '年度ごとに申請。認定月により援助対象月が異なる',
    description: '三鷹市が、経済的な理由により教育費の支払いに困っている家庭を対象に、学校生活に必要な費用の一部を援助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>経済的な理由により教育費の支払いに困っている家庭に、学用品費、給食費、修学旅行費など学校生活に必要な費用の一部を援助します。</p>' },
      { heading: '対象者', content: '<p>三鷹市内に在住し、小・中学校に在籍する児童生徒の保護者で、生活保護を受けている方や、所得等の基準に該当する方などが対象です。</p>' },
      { heading: '申請時の注意', content: '<p>就学援助は年度ごとの申請が必要です。認定月により援助の対象となる月や支給時期が変わるため、最新の案内を確認して申請してください。</p>' }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/001/001152.html',
    sourceName: '三鷹市 就学援助制度',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/001/001152.html',
      'https://www.city.mitaka.lg.jp/c_service/001/attached/attach_1152_4.pdf',
      'https://www.city.mitaka.lg.jp/c_service/074/074950.html'
    ],
    sourceNote: '三鷹市公式ページで、就学援助制度、対象者、援助費目、年度途中申請を確認。令和8年度就学援助制度の案内PDFで年度ごとの申請、認定審査、支給スケジュールを確認。新入学準備金ページで入学前支給と令和8年度就学援助の別途申請を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'mitaka-senior-support',
    title: '三鷹市 補聴器購入費助成事業',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '補聴器本体購入費用の2分の1、上限4万円',
    maxAmountNum: 4,
    category: 'medical',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['三鷹市', '補聴器購入費助成', '高齢者支援'],
    eligibility: '18歳以上の三鷹市民で、本人の合計所得金額が210万円未満、聴覚障がいによる補装具費支給対象外、補聴器相談医が補聴器を必要と認める方が対象です。',
    applicationPeriod: '購入前に申請が必要。申請せずに購入した補聴器は対象外',
    description: '三鷹市が、加齢性難聴等により補聴器を必要とする方を対象に、補聴器本体購入費用の一部を助成する制度です。旧生成データの高齢者見守り・生活支援を、公式確認できる高齢者向け助成へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>補聴器を必要とする方に対し、補聴器本体購入費用の一部を助成する制度です。補聴器相談医が補聴器を必要と認めることなどが要件です。</p>' },
      { heading: '助成額', content: '<p>補聴器本体購入費用の2分の1、上限4万円です。助成対象は補聴器本体1台です。</p>' },
      { heading: '申請時の注意', content: '<p>購入前に市役所への申し込みが必要です。申請せずに購入した補聴器は助成対象になりません。</p>' }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/099/099672.html',
    sourceName: '三鷹市 補聴器購入費助成事業',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/099/099672.html',
      'https://www.city.mitaka.lg.jp/c_service/083/attached/attach_83519_6.pdf',
      'https://www.city.mitaka.lg.jp/koho/2025/20250202/p10.htm'
    ],
    sourceNote: '三鷹市公式ページで、補聴器購入費助成、補聴器本体購入費用2分の1・上限4万円、対象者、購入前申請を確認。高齢者向けサービス冊子と広報みたかでも補聴器購入費助成の対象・助成額・購入前申請必須を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'mitaka-youth-employment',
    title: '三鷹市 介護事業者事業継続支援事業補助金',
    organization: '三鷹市',
    type: 'local',
    maxAmount: '上限50万円（年額）',
    maxAmountNum: 50,
    category: 'employment',
    relatedCategories: ['nursing'],
    prefecture: '東京都',
    tags: ['三鷹市', '介護事業者', '事業継続支援', '職場環境改善'],
    eligibility: '三鷹市介護保険事業者連絡協議会に所属し、三鷹市内で介護サービス事業所を運営する介護事業者で、常時雇用する職員が19人以下の法人などが対象です。',
    applicationPeriod: '令和8年度。交付申請は事業実施前に申請書等を提出',
    description: '三鷹市が、事業継続のため業務改善や職場環境の向上に取り組む介護事業者に対し、経費の一部を補助する制度です。旧生成データの若者正規雇用定着奨励金は現行公式制度として確認できないため、公式確認できる雇用・職場環境改善系補助へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>事業継続のため、業務改善や職場環境の向上に取り組む介護事業者に対し、対象経費の一部を補助する制度です。</p>' },
      { heading: '補助額', content: '<p>広報みたかでは、補助額は上限50万円（年額）と案内されています。</p>' },
      { heading: '対象者と手続き', content: '<p>令和8年度取扱要領では、三鷹市介護保険事業者連絡協議会に所属し、交付申請日時点で令和7年度分の会費納入が確認できること、常時雇用する職員数などの要件が定められています。</p>' }
    ],
    officialUrl: 'https://www.city.mitaka.lg.jp/c_service/112/112966.html',
    sourceName: '三鷹市 介護事業者事業継続支援事業補助金',
    sourceUrls: [
      'https://www.city.mitaka.lg.jp/c_service/112/112966.html',
      'https://www.city.mitaka.lg.jp/c_service/112/attached/attach_112966_2.pdf',
      'https://www.city.mitaka.lg.jp/c_service/112/attached/attach_112966_3.pdf',
      'https://www.city.mitaka.lg.jp/koho/2025/20250420/p4.htm',
      'https://www.city.mitaka.lg.jp/c_service/000/000884.html'
    ],
    sourceNote: '三鷹市公式ページで、介護事業者事業継続支援事業補助金、令和8年度取扱要領、Q&A、申請書式を確認。広報みたかで、業務改善や職場環境向上に取り組む介護事業者向け、常時雇用する職員19人以下、上限50万円（年額）を確認。わくわくサポート三鷹では就労支援・特定求職者雇用開発助成金手続き支援は確認できるが、旧生成データの若者正規雇用定着奨励金は現行市公式制度として確認できないため、公式確認できる雇用・職場環境改善系補助へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'shibuya-afterschool',
    title: '渋谷区 放課後クラブ（利用料無料）',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '放課後クラブ利用料無料（保険料・おやつ代等の実費負担あり）',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['childcare', 'living'],
    prefecture: '東京都',
    tags: ['渋谷区', '放課後クラブ', '利用料無料'],
    eligibility: '渋谷区立小学校の児童等が対象です。A会員は全児童、B会員は保護者が就労などをしている児童が対象です。',
    applicationPeriod: '毎年度登録。随時受付、毎月20日までの登録申請で翌月から利用可能',
    description: '渋谷区が学校施設を活用して実施する放課後クラブです。旧生成データの利用料助成ではなく、公式確認できる利用料無料の放課後クラブ事業へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>渋谷区の放課後クラブは、学校敷地内の放課後クラブ室を拠点に、校庭、体育館、図書室など学校施設を活用して実施される放課後の居場所事業です。</p>' },
      { heading: '費用', content: '<p>放課後クラブの利用料は無料です。ただし、登録時のスポーツ安全保険料800円、おやつ代1食70円程度、教材費などの実費は保護者負担です。</p>' },
      { heading: '登録', content: '<p>利用には毎年度の会員登録が必要です。登録申請は随時各放課後クラブ室で受け付け、毎月20日までに申請すると翌月から利用可能です。</p>' }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kodomo/gakko-kyoiku/hokago-kurabu/hokagokurabu.html',
    sourceName: '渋谷区 放課後クラブ',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/kodomo/gakko-kyoiku/hokago-kurabu/hokagokurabu.html',
      'https://www.city.shibuya.tokyo.jp/kodomo/gakko-kyoiku/hokago-kurabu/hokagokurabutouroku.html'
    ],
    sourceNote: '渋谷区公式ページで、放課後クラブの会員区分、活動場所、利用料無料、保険料800円・おやつ代1食70円程度・教材費等の実費負担、毎年度登録と翌月利用開始条件を確認。旧生成データの民間学童利用料助成は公式確認できないため、現行公式の放課後クラブ無料利用へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'shibuya-birth-bonus',
    title: '渋谷区 ハッピーマザー出産助成金',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '出産1人につき上限10万円',
    maxAmountNum: 10,
    category: 'childcare',
    relatedCategories: ['medical', 'living'],
    prefecture: '東京都',
    tags: ['渋谷区', '出産助成', 'ハッピーマザー'],
    eligibility: '妊娠12週を超えて出産し、出産日の3か月前から申請日現在まで継続して渋谷区内に住民登録があり、健康保険に加入している人が対象です。妊娠12週超の流産・死産も含みます。',
    applicationPeriod: '出産日から起算して1年以内',
    description: '渋谷区が、出産時の経済的負担を軽減するために支給する出産助成金です。旧生成データの出産・子育て応援交付金は受付終了済みのため、公式確認できる現行のハッピーマザー出産助成金へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>出産時の経済的負担を軽減し、安心して出産できるよう、出産した人に助成金を支給する制度です。</p>' },
      { heading: '助成内容', content: '<p>1人の出産につき限度額10万円です。加入している健康保険から付加給付が支給される場合は、その額を控除した金額になります。</p>' },
      { heading: '申請期限', content: '<p>申請期間は出産日から起算して1年以内です。申請者本人の口座へ振り込まれます。</p>' }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/happy_josei.html',
    sourceName: '渋谷区 ハッピーマザー出産助成金',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/happy_josei.html',
      'https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/ouen_kyuhu.html',
      'https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/ninpu_kyuhu.html'
    ],
    sourceNote: '渋谷区公式ページで、ハッピーマザー出産助成金の対象、出産1人につき限度額10万円、付加給付控除、申請期限を確認。出産・子育て応援事業は令和8年3月30日受付終了、現行の妊婦支援給付金は既存slugで確認済みのため、旧生成データの出産・子育て応援交付金を現行出産助成へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'shibuya-childcare-subsidy',
    title: '渋谷区 バースデーサポート事業',
    organization: '渋谷区',
    type: 'local',
    maxAmount: 'お子さん1人につき最大10万円分の育児パッケージ',
    maxAmountNum: 10,
    category: 'childcare',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['渋谷区', 'バースデーサポート', '育児パッケージ'],
    eligibility: '令和5年4月1日以降に1歳になった子どもで、1歳の誕生日およびアンケート回答日時点で渋谷区に住民登録がある人が対象です。申請者は申請日に渋谷区に住民登録があり対象者を養育する人です。',
    applicationPeriod: '1歳の誕生日の翌月中旬以降に案内通知。令和8年度の転入特例は令和9年3月31日まで',
    deadlineDate: '2027-03-31',
    description: '渋谷区が、1歳になる子どもがいる家庭を応援するため、アンケート回答後に育児パッケージを配付する事業です。旧生成データの子育てネウボラ給付金を、公式確認できるバースデーサポート事業へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>1歳になる子どもがいる家庭に子育てに関する情報提供とアンケート案内を郵送し、回答した家庭へ育児パッケージとしてAmazonギフトカードを配付します。</p>' },
      { heading: '配付内容', content: '<p>令和6年4月1日から令和8年3月31日に1歳の誕生日を迎えた子どもは1人につき6万円分、令和8年4月1日から令和9年3月31日に1歳の誕生日を迎えた子どもは1人につき10万円分です。</p>' },
      { heading: '申請時の注意', content: '<p>案内通知に記載の二次元バーコードから渋谷区公式LINEでアンケートに回答します。子どもの誕生日や回答日時点で渋谷区に住民登録がない場合は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/birthday_support.html',
    sourceName: '渋谷区 バースデーサポート事業',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/birthday_support.html',
      'https://www.city.shibuya.tokyo.jp/kodomo/ninshin/ninshin-teate/ninpu_kyuhu.html'
    ],
    sourceNote: '渋谷区公式ページで、バースデーサポート事業の対象者、申請者、案内通知、アンケート回答、育児パッケージ金額、令和8年度転入特例の期限を確認。旧生成データの子育てネウボラ給付金は同名の現行現金給付として確認できないため、公式確認できる1歳児家庭向け育児パッケージへ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'shibuya-it-education',
    title: '渋谷区 プログラミング教育支援助成（公式助成確認不可）',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '公式助成確認不可',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '東京都',
    tags: ['渋谷区', 'プログラミング教育', '公式確認不可'],
    eligibility: '旧候補名のプログラミング教室受講料助成について、渋谷区公式サイトで保護者向けの現行助成金として確認できませんでした。',
    applicationPeriod: '公式助成確認不可。通常一覧から除外',
    deadlineDate: '2026-07-01',
    description: '渋谷区公式では学校教育内のICT教育、探究学習、プログラミング授業、S-SAP協定による企業連携は確認できますが、旧生成データにある民間プログラミング教室受講料助成は確認できません。通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>渋谷区公式ページでは、教育DX、タブレット端末やデジタル教材の活用、プログラミングを用いた学習、S-SAP協定に基づく企業連携の取り組みを確認できます。</p>' },
      { heading: '掲載停止の理由', content: '<p>小中学生のプログラミング教室受講料を最大5万円助成する制度は、現行の渋谷区公式助成金として確認できないため通常一覧から除外します。</p>' },
      { heading: '関連情報', content: '<p>経済的事情に応じた学校費用支援は、渋谷区の就学援助費・特別支援教育就学奨励費で確認できます。</p>' }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/contents/koho-news/1605/20260401_special_mini.html',
    sourceName: '渋谷区 教育DX・S-SAP協定・就学援助',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/contents/koho-news/1605/20260401_special_mini.html',
      'https://www.city.shibuya.tokyo.jp/kusei/ssap/ssap-dantai/dena.html',
      'https://www.city.shibuya.tokyo.jp/kodomo/gakko-kyoiku/nyugaku-tennyu-shugaku/tetsuduki_g.html'
    ],
    sourceNote: '渋谷区公式で教育DX、プログラミングを用いた学習、DeNAとのS-SAP協定に基づくプログラミング授業、就学援助費を確認。一方、旧生成データの民間プログラミング教室受講料助成は現行公式制度として確認できないため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'shibuya-migration-bonus',
    title: '渋谷区 移住・定住応援給付金（公式確認不可）',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '公式給付確認不可',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['渋谷区', '移住定住', '公式確認不可'],
    eligibility: '旧候補名の移住・定住応援給付金について、渋谷区公式サイトで現行の転入子育て世帯向け給付金として確認できませんでした。',
    applicationPeriod: '公式給付確認不可。通常一覧から除外',
    deadlineDate: '2026-07-01',
    description: '渋谷区公式では住宅関連支援として住居確保給付金、立ち退きに伴う住み替え家賃補助制度、居住支援協議会などを確認できますが、旧生成データの転入・定住給付金は確認できません。通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>渋谷区公式の住宅支援一覧では、住居確保給付金、立ち退きに伴う住み替え家賃補助制度、高齢者等世帯入居支援事業、居住支援協議会などが案内されています。</p>' },
      { heading: '掲載停止の理由', content: '<p>転入した子育て世帯に最大30万円を給付する移住・定住応援給付金は、現行の渋谷区公式制度として確認できないため通常一覧から除外します。</p>' },
      { heading: '関連情報', content: '<p>住宅喪失のおそれがある場合は住居確保給付金、立ち退きに伴う区内転居の場合は既存の住み替え家賃補助制度を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kurashi/jutaku/yushi/',
    sourceName: '渋谷区 住宅に関わる助成・融資などの支援',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/kurashi/jutaku/yushi/',
      'https://www.city.shibuya.tokyo.jp/kurashi/jutaku/yushi/seikatu_jyutaku.html',
      'https://www.city.shibuya.tokyo.jp/kurashi/jutaku/yushi/shien_3.html'
    ],
    sourceNote: '渋谷区公式の住宅支援一覧、住居確保給付金、立ち退きに伴う住み替え家賃補助制度を確認。旧生成データの子育て世帯向け移住・定住応援給付金は現行公式制度として確認できないため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'shibuya-nursing-equipment',
    title: '渋谷区 紙おむつ購入費助成',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '月額3,500円で商品価格17,500円分まで購入可能',
    maxAmountNum: 1.75,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '東京都',
    tags: ['渋谷区', '紙おむつ', '介護用品'],
    eligibility: '渋谷区に住民票があり、常時紙おむつを使用し、生活保護を受給していない人で、介護保険の要介護1以上、3歳以上の障害者手帳等所持者、難病等のいずれかに該当する人が対象です。介護保険施設サービス利用者は対象外です。',
    applicationPeriod: '事前登録が必要。毎月20日までの注文で翌月1日から7日頃配送',
    description: '渋谷区社会福祉協議会と渋谷区が助成した価格で紙おむつを購入できる制度です。旧生成データの介護用品給付事業を、公式確認できる紙おむつ購入費助成へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>渋谷区社会福祉協議会と渋谷区が助成した価格で、紙おむつを購入できる制度です。利用には事前登録が必要です。</p>' },
      { heading: '助成内容', content: '<p>2026年度カタログでは、商品価格の2割相当の負担で紙おむつを購入でき、月額3,500円で商品価格17,500円分まで購入できます。</p>' },
      { heading: '利用方法', content: '<p>紙おむつ購入費助成申請書と介護保険被保険者証等の写しを提出して登録し、指定業者へ毎月20日までに注文します。翌月1日から7日頃に自宅へ配送されます。</p>' }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kenko/shogai-seikatsu/shien-kaigo-seikatsu/syakyo-service.html',
    sourceName: '渋谷区社会福祉協議会 紙おむつ購入費助成',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/kenko/shogai-seikatsu/shien-kaigo-seikatsu/syakyo-service.html',
      'https://www.shibuyashakyo.or.jp/chk/kamiomutsu-o.html',
      'https://www.shibuyashakyo.or.jp/pdf/kamiomutsucatalog.pdf',
      'https://www.shibuyashakyo.or.jp/chk/kamiomutsu-n.html'
    ],
    sourceNote: '渋谷区公式ページで社会福祉協議会の紙おむつ購入費助成への案内を確認。渋谷区社会福祉協議会ページと2026年度カタログで、渋谷区と社協が助成した価格で購入できること、対象者、事前登録、購入限度額月額3,500円、商品価格17,500円分まで、注文・配送方法を確認。入院時紙おむつ助成も関連制度として確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'shibuya-senior-dental',
    title: '渋谷区 歯科健康診査',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '歯科健康診査を実施（治療は対象外）',
    maxAmountNum: 0,
    category: 'medical',
    relatedCategories: ['nursing', 'living'],
    prefecture: '東京都',
    tags: ['渋谷区', '歯科健康診査', '口腔機能'],
    eligibility: '年度末時点で18歳、20歳、25歳、30歳、35歳、40歳、45歳、50歳、55歳、60歳、65歳、70歳、75歳、80歳、85歳、90歳、95歳、100歳の渋谷区民が対象です。国保成人歯科健康診査の対象者は別制度です。',
    applicationPeriod: '生まれ月に応じて受診券を送付。令和8年度は有効期限8月31日、11月30日、2月28日の区分あり',
    description: '渋谷区が、歯周病疾患の予防と早期発見を目的に実施する歯科健康診査です。旧生成データの高齢者歯科治療費助成は公式確認できないため、公式確認できる歯科健康診査へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>歯周病疾患の予防と早期発見を目的に、対象年齢の区民へ歯科健康診査を実施します。</p>' },
      { heading: '診査内容', content: '<p>問診、口腔内診査、口腔内細菌数検査、口腔機能検査、歯科医師による総合判定を行います。治療は対象外です。</p>' },
      { heading: '訪問歯科健康診査', content: '<p>在宅で寝たきりなどにより医療機関で歯科健診を受けられない人は、訪問による歯科健診を受けられる場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/kenko/iryo-kenko/kenshin-sodan/kenshin_seijinsika.html',
    sourceName: '渋谷区 歯科健康診査',
    sourceUrls: [
      'https://www.city.shibuya.tokyo.jp/kenko/iryo-kenko/kenshin-sodan/kenshin_seijinsika.html'
    ],
    sourceNote: '渋谷区公式ページで、歯科健康診査の目的、対象年齢、診査内容、治療は対象外、受診券送付時期と有効期限、訪問歯科健康診査を確認。旧生成データの高齢者歯科健診・治療費助成は治療費助成として確認できないため、公式確認できる歯科健康診査へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koganei-afterschool',
    title: '小金井市 放課後子ども教室',
    organization: '小金井市',
    type: 'local',
    maxAmount: '助成金ではなく、市立小学校の放課後の居場所事業',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['childcare'],
    prefecture: '東京都',
    tags: ['小金井市', '放課後子ども教室', '居場所'],
    eligibility: '小金井市立小学校の児童が主な対象です。実施内容は小学校区ごとに異なります。',
    applicationPeriod: '実施日・参加方法は各教室・年度案内を確認',
    description: '小金井市が、市立小学校の校庭・教室等で放課後の子どもたちの安全・安心な居場所づくりを目的に実施する事業です。旧生成データを、公式確認できる放課後子ども教室へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>放課後の子どもたちの安全・安心な居場所作りを目的に、市立小学校の校庭・教室等で放課後子ども教室推進事業を行っています。</p>' },
      { heading: '活動内容', content: '<p>校庭あそび、自由遊び、工作、読み聞かせ、スポーツ、宿題など、学区ごとにさまざまな活動が行われています。</p>' },
      { heading: '掲載時の補正', content: '<p>旧生成データの放課後子ども教室を、金銭助成ではなく公式確認できる放課後の居場所事業として補正しました。</p>' }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/kosodatekyoiku/452/houkagokodomo.html',
    sourceName: '小金井市 放課後子ども教室を行っています',
    sourceUrls: [
      'https://www.city.koganei.lg.jp/kosodatekyoiku/452/houkagokodomo.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/shisetsu/jidokan/20250303.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/452/houkago_guidebook.html'
    ],
    sourceNote: '小金井市公式ページで、放課後子ども教室推進事業、目的、実施場所、学区別活動内容を確認。放課後の居場所・預かり場所ページと放課後の過ごし方ガイドブックで関連導線を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koganei-birth-bonus',
    title: '小金井市 妊婦のための支援給付事業',
    organization: '小金井市',
    type: 'local',
    maxAmount: '妊婦1人5万円＋子ども1人5万円',
    maxAmountNum: 10,
    category: 'childcare',
    relatedCategories: ['medical', 'living'],
    prefecture: '東京都',
    tags: ['小金井市', '妊婦支援給付', '出産子育て'],
    eligibility: '令和7年4月1日以降に妊娠届出・妊婦給付認定申請をした妊婦等が対象です。申請日時点で小金井市民であること、同一妊娠で旧事業や他自治体の同種給付を受けていないこと等の要件があります。',
    applicationPeriod: '1回目は胎児心拍確認日から2年間、2回目は出産予定日の8週前から2年間',
    description: '小金井市が、妊娠期からの切れ目ない支援として妊婦面談後と新生児訪問後に給付する制度です。旧生成データの出産祝い金を、公式確認できる妊婦のための支援給付へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月1日から、出産・子育て応援事業に代わり、妊婦のための支援給付事業と妊婦等包括相談支援事業を一体的に実施しています。</p>' },
      { heading: '給付内容', content: '<p>1回目は妊婦1人あたり5万円の現金または5万円分のクーポン、2回目は子ども1人あたり5万円の現金または5万円分のクーポンです。</p>' },
      { heading: '申請時の注意', content: '<p>現金支給の場合は妊産婦本人名義の口座への振り込みです。同一妊娠により旧事業や他自治体で同種給付を受けた場合は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/kosodatekyoiku/433/sienkyuufu202503.html',
    sourceName: '小金井市 妊婦のための支援給付事業',
    sourceUrls: [
      'https://www.city.koganei.lg.jp/kosodatekyoiku/433/sienkyuufu202503.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/433/D050401020518.html'
    ],
    sourceNote: '小金井市公式ページで、令和7年4月1日以降の妊婦のための支援給付、1回目5万円、2回目子ども1人5万円、申請期限、給付要件を確認。旧出産・子育て応援事業ページで、旧事業との切替関係と旧ギフト内容を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koganei-childcare-subsidy',
    title: '小金井市 保育料無償化・幼児教育保育の無償化',
    organization: '小金井市',
    type: 'local',
    maxAmount: '認可保育所等0円。幼稚園・預かり保育等は給付上限あり',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['education', 'living'],
    prefecture: '東京都',
    tags: ['小金井市', '保育料無償化', '幼児教育保育'],
    eligibility: '小金井市内で認可保育所、認定こども園、幼稚園、預かり保育、認可外保育施設等を利用する児童の保護者が対象です。施設区分、年齢、保育の必要性認定により給付内容が異なります。',
    applicationPeriod: '施設等利用給付は原則事前認定。請求は利用月に応じて半年ごと',
    description: '小金井市の保育料無償化・幼児教育保育無償化の制度です。旧生成データの月額最大3万円の保育料軽減補助ではなく、公式確認できる現行の無償化・施設等利用給付へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>認可保育所等の3歳クラス以上は国制度により保育料0円、0から2歳の課税世帯は東京都制度により保育料0円となります。市独自補助として3から5歳の主食費・副食費も一定額まで公費負担します。</p>' },
      { heading: '幼稚園・預かり保育等', content: '<p>幼稚園は国・都・市制度による給付上限があります。預かり保育は保育の必要性認定を受けた場合、3歳クラス以上は日額450円・月額11,300円などを上限に支給されます。</p>' },
      { heading: '認定と請求', content: '<p>施設等利用給付を受ける場合は、原則として事前に認定を受ける必要があります。償還払いは利用月に応じて半年ごとの受付期間が設定されています。</p>' }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/kosodatekyoiku/hoikuen/youzikyouikuhoiku/musyoukagaiyou.html',
    sourceName: '小金井市 幼児教育・保育の無償化',
    sourceUrls: [
      'https://www.city.koganei.lg.jp/kosodatekyoiku/hoikuen/youzikyouikuhoiku/musyoukagaiyou.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/hoikuen/hoiku-nyuusyo/riyoushahutangaku/1556.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/hoikuen/youzikyouikuhoiku/musyoukanintei.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/hoikuen/youzikyouikuhoiku/musyoukaseikyu.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/hoikuen/youzikyouikuhoiku/youchienazukari.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/N84/Tayounakatsudou.html'
    ],
    sourceNote: '小金井市公式ページで、幼児教育・保育の無償化、東京都制度による0から2歳課税世帯保育料0円、市独自の給食費補助、幼稚園・預かり保育・認可外保育施設等の給付上限、事前認定、請求スケジュール、私立幼稚園満3歳児預かり保育補助、多様な集団活動利用支援事業を確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koganei-energy-support',
    title: '小金井市 住民税非課税世帯等エアコン購入費助成事業',
    organization: '小金井市',
    type: 'local',
    maxAmount: '上限10万円',
    maxAmountNum: 10,
    category: 'living',
    relatedCategories: ['medical', 'housing'],
    prefecture: '東京都',
    tags: ['小金井市', 'エアコン購入費助成', '熱中症対策'],
    eligibility: '申請日現在、小金井市に住民登録があり、住民税非課税世帯、住民税均等割のみ世帯、児童扶養手当受給世帯のいずれかに該当し、住宅にエアコンがない、または製造から15年経過したエアコンが故障している等の要件を満たす世帯が対象です。',
    applicationPeriod: '申請期限は2027年2月26日。購入期限は2027年1月31日。予算到達で終了の場合あり',
    deadlineDate: '2027-02-26',
    description: '小金井市が、熱中症対策の強化のため、住民税非課税世帯等にエアコン購入・設置等費用の一部を助成する事業です。旧生成データの省エネ家電買替え補助金を、公式確認できるエアコン購入費助成へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>近年の猛暑に伴う熱中症対策の強化のため、住民税非課税世帯等にエアコン購入および設置等に係る費用の一部を助成します。</p>' },
      { heading: '助成額と対象経費', content: '<p>助成上限額は10万円です。エアコン本体費用、配送費、設置工事費、買換えの場合の既存機器撤去費・リサイクル費などが対象です。</p>' },
      { heading: '申請時の注意', content: '<p>令和8年4月1日以降に購入した家庭用エアコンが対象です。申請は先着順で、予算額に達した場合は期間内でも受付終了となる可能性があります。</p>' }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/kenkofukuhsi/444/aircon_jyosei08.html',
    sourceName: '小金井市 住民税非課税世帯等エアコン購入費助成事業',
    sourceUrls: [
      'https://www.city.koganei.lg.jp/kenkofukuhsi/444/aircon_jyosei08.html',
      'https://www.city.koganei.lg.jp/kurashi/473/hozyokin/sinnene.html'
    ],
    sourceNote: '小金井市公式ページで、住民税非課税世帯等エアコン購入費助成事業、対象世帯・対象要件、助成上限10万円、対象経費、購入期限2027年1月31日、申請期限2027年2月26日、予算到達時終了を確認。住宅用新エネルギー機器等普及促進補助金は既存slugで確認済みのため、旧生成データの省エネ家電買替え補助金を熱中症対策のエアコン助成へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koganei-infertility',
    title: '小金井市 不妊検査・不妊治療・不育症検査の東京都助成案内',
    organization: '小金井市',
    type: 'local',
    maxAmount: '市独自助成確認不可。東京都助成制度を案内',
    maxAmountNum: 0,
    category: 'medical',
    relatedCategories: ['childcare'],
    prefecture: '東京都',
    tags: ['小金井市', '不妊治療', '東京都助成'],
    eligibility: '小金井市公式ページでは、東京都不妊検査等助成事業、東京都特定不妊治療費（先進医療）助成事業、東京都不育症検査助成事業等を案内しています。市独自の現行不妊治療費助成は確認できませんでした。',
    applicationPeriod: '市独自助成の現行受付確認不可。通常一覧から除外',
    deadlineDate: '2026-07-01',
    description: '小金井市公式ページでは東京都の不妊検査・不妊治療・不育症検査の助成制度と相談窓口を案内していますが、市独自の現行助成金として支給額・申請期間は確認できません。通常一覧から除外します。',
    sections: [
      { heading: '公式確認結果', content: '<p>小金井市公式ページでは、東京都不妊検査等助成事業、東京都特定不妊治療費（先進医療）助成事業、東京都不育症検査助成事業、東京都不妊・不育ホットラインを案内しています。</p>' },
      { heading: '掲載停止の理由', content: '<p>旧生成データの不妊治療費助成制度について、市独自の支給額・申請期間を持つ現行助成金として確認できなかったため、通常一覧から除外します。</p>' },
      { heading: '関連情報', content: '<p>申請書類は小金井市保健センターや市役所第二庁舎でも配布されています。制度の詳細は東京都の各助成事業ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/kenkofukuhsi/N61/zyoseikyuuhu/funinntiryou.html',
    sourceName: '小金井市 不妊検査・不妊治療・不育症検査の助成制度',
    sourceUrls: [
      'https://www.city.koganei.lg.jp/kenkofukuhsi/N61/zyoseikyuuhu/funinntiryou.html',
      'https://www.city.koganei.lg.jp/kosodatekyoiku/433/joseikyuhu/index.html',
      'https://www.city.koganei.lg.jp/kenkofukuhsi/N61/zyoseikyuuhu/index.html'
    ],
    sourceNote: '小金井市公式ページで、東京都不妊検査等助成事業、東京都特定不妊治療費（先進医療）助成事業、東京都不育症検査助成事業、東京都不妊・不育ホットライン、申請書類配布先を確認。市独自の現行助成金としての支給額・申請期間は確認できないため期限切れ扱いで通常一覧から除外。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koganei-nursing-home-reform',
    title: '小金井市 高齢者自立支援住宅改修',
    organization: '小金井市',
    type: 'local',
    maxAmount: '住宅改修予防給付20万円、住宅設備改修給付37万9千円',
    maxAmountNum: 37.9,
    category: 'nursing',
    relatedCategories: ['housing', 'living'],
    prefecture: '東京都',
    tags: ['小金井市', '高齢者住宅改修', '介護予防'],
    eligibility: '65歳以上の高齢者または介護保険の2号被保険者で、介護保険の要介護認定が非該当、自立、要支援・要介護等と認定され、身体的理由により住宅改修・住宅設備改修が必要と認められる虚弱な人が対象です。',
    applicationPeriod: '通年。工事着手前の申込み必須',
    description: '小金井市が、高齢者の在宅生活を支援するために、住宅改修予防給付と住宅設備改修給付を行う制度です。旧生成データの介護住宅改修助成を、公式確認できる高齢者自立支援住宅改修へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>高齢者自立支援住宅改修は、住宅改修予防給付と住宅設備改修給付の2種類があります。対象者と給付額は改修種別により異なります。</p>' },
      { heading: '給付内容', content: '<p>住宅改修予防給付は20万円、住宅設備改修給付は37万9千円を限度として給付します。浴槽取替、流し・洗面台取替、便器の洋式化等の限度額も定められています。</p>' },
      { heading: '申請時の注意', content: '<p>改修工事に着手する前に所定の様式による申込みが必要です。工事着手後は申込みできません。</p>' }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/kenkofukuhsi/koreishafukushi/sumai/jirutusienjuukai.html',
    sourceName: '小金井市 高齢者自立支援住宅改修',
    sourceUrls: [
      'https://www.city.koganei.lg.jp/kenkofukuhsi/koreishafukushi/sumai/jirutusienjuukai.html',
      'https://www.city.koganei.lg.jp/kenkofukuhsi/koreishafukushi/K25/jigyoumukejouhou/jigyosyamukesinsei.html',
      'https://www.city.koganei.lg.jp/kenkofukuhsi/koreishafukushi/sumai/juutakukaishuusoudan.html'
    ],
    sourceNote: '小金井市公式ページで、高齢者自立支援住宅改修、住宅改修予防給付20万円、住宅設備改修給付37万9千円、工事着手前申込み必須、利用者負担を確認。介護保険住宅改修費支給申請書ページで、改修額20万円上限・7割から9割相当支給・工事前申請を確認。住宅改修相談・アドバイスも確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koganei-seismic-diagnosis',
    title: '小金井市 木造住宅耐震診断助成金',
    organization: '小金井市',
    type: 'local',
    maxAmount: '耐震診断費用の3分の2、上限10万円',
    maxAmountNum: 10,
    category: 'disaster',
    relatedCategories: ['housing'],
    prefecture: '東京都',
    tags: ['小金井市', '木造住宅', '耐震診断'],
    eligibility: '対象住宅を所有する個人で、市町村民税等の滞納がない人が対象です。対象住宅は平成12年5月31日以前に着工された市内の2階建て以下の一戸建て木造住宅などです。',
    applicationPeriod: '令和9年2月28日までに耐震診断を終了。事前交付申請必須',
    deadlineDate: '2027-02-28',
    description: '小金井市が、安全で安心して住み続けられるまちづくりのため、木造住宅の耐震診断費用の一部を助成する制度です。旧生成データの自己負担なし表記を、公式確認できる補助率・上限額へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>平成12年5月31日以前に着工した市内の木造住宅などを対象に、耐震診断費用の一部を助成します。</p>' },
      { heading: '助成額', content: '<p>耐震診断に要した費用の3分の2以内、上限10万円です。自己負担なしではありません。</p>' },
      { heading: '申請時の注意', content: '<p>事前に市へ交付申請を行い、交付決定を受ける必要があります。令和9年2月28日までに耐震診断を終了する必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/shisei/seisakukeikaku/machitoshi/jutaku_shien/mokuzousindanjyosei.html',
    sourceName: '小金井市 木造住宅耐震診断助成金',
    sourceUrls: [
      'https://www.city.koganei.lg.jp/shisei/seisakukeikaku/machitoshi/jutaku_shien/mokuzousindanjyosei.html',
      'https://www.city.koganei.lg.jp/shisei/seisakukeikaku/machitoshi/jutaku_shien/taishinkaishuu.html',
      'https://www.city.koganei.lg.jp/kurashi/474/zyoseiteeateyuusi/taishinkaishu/index.html'
    ],
    sourceNote: '小金井市公式ページで、木造住宅耐震診断助成金、対象者・対象住宅、助成額3分の2以内・上限10万円、事前交付申請、令和9年2月28日までの診断終了を確認。耐震改修等助成金ページで関連の耐震改修上限60万円、除却上限30万円も確認。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'koganei-telework-bonus',
    title: '小金井市 小規模事業者持続化サポート補助金',
    organization: '小金井市',
    type: 'local',
    maxAmount: '通常枠12.5万円、賃金引上げ枠等50万円、インボイス・賃金引上げ枠62.5万円',
    maxAmountNum: 62.5,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '東京都',
    tags: ['小金井市', '小規模事業者', '販路開拓'],
    eligibility: '小金井市内に事業所等があり、市税の滞納がなく、国の小規模事業者持続化補助金の交付確定を受けている小規模事業者等が対象です。',
    targetOccupation: '小規模事業者・個人事業主',
    applicationPeriod: '申請受付中。国の一般型は第19回受付締切分まで申請可能',
    description: '小金井市内の小規模事業者が、国の小規模事業者持続化補助金を活用して販路開拓等に取り組む際の経費の一部を補助する制度です。旧生成データのテレワーク推進補助金は現行公式制度として確認できないため、公式確認できる事業者支援補助へ補正しました。',
    sections: [
      { heading: '制度の概要', content: '<p>小金井市内の小規模事業者が国の小規模事業者持続化補助金を活用して販路開拓等に取り組む際、対象経費の一部を補助します。</p>' },
      { heading: '補助額', content: '<p>補助対象経費から国補助金額等を差し引いた額の2分の1、または補助上限額のいずれか低い額です。通常枠12万5千円、賃金引上げ枠等50万円、インボイス・賃金引上げ枠62万5千円などの上限があります。</p>' },
      { heading: '掲載時の補正', content: '<p>テレワーク専用補助金は現行の小金井市公式制度として確認できないため、公式確認できる小規模事業者向けの現行補助金へ補正しました。</p>' }
    ],
    officialUrl: 'https://www.city.koganei.lg.jp/kurashi/sangyou_rousei/chushokigyo/sapotohojokin.html',
    sourceName: '小金井市 小規模事業者持続化サポート補助金',
    sourceUrls: [
      'https://www.city.koganei.lg.jp/kurashi/sangyou_rousei/chushokigyo/sapotohojokin.html',
      'https://www.city.koganei.lg.jp/kurashi/sangyou_rousei/chushokigyo/sogyosienn.html',
      'https://www.city.koganei.lg.jp/kurashi/sangyou_rousei/chushokigyo/sougyoushien_syoumei.html'
    ],
    sourceNote: '小金井市公式ページで、小規模事業者持続化サポート補助金、現在も申請受付中、対象者、国の小規模事業者持続化補助金の交付確定要件、補助額、通常枠12.5万円、賃金引上げ枠等50万円、インボイス・賃金引上げ枠62.5万円を確認。創業支援ページと特定創業支援等事業証明ページも確認。旧生成データのテレワーク推進補助金は現行公式制度として確認できないため、公式確認できる事業者支援補助へ補正。',
    verifiedAt: '2026-07-02',
    publishedAt: '2026-07-02',
  },
];
