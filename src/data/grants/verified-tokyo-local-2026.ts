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
];
