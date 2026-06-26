import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-24';

export const verifiedNationalChildcareGrants2026: Grant[] = [
  {
    slug: 'jidou-teate',
    title: '児童手当',
    organization: 'こども家庭庁・市区町村',
    type: 'national',
    maxAmount: '第3子以降 月額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '全国',
    tags: ['子育て支援', '高校生年代まで', '所得制限なし', '全国共通', '児童手当'],
    eligibility: '0歳から18歳到達後の最初の3月31日までの児童を養育している方が対象です。原則として、児童が日本国内に住んでいる場合に支給されます。',
    targetIncome: '令和6年10月分以降は所得制限なし。',
    applicationPeriod: '通年（出生・転入等の際は住民票のある市区町村で認定請求）',
    description: '子育て世帯を支援する国の手当です。令和6年10月分以降、支給対象は高校生年代までに拡大し、所得制限は撤廃され、第3子以降は月額3万円になっています。支給は原則として偶数月に前月分までの2か月分が行われます。',
    sections: [
      {
        heading: '対象者',
        content: '<p>0歳から18歳に達する日以後の最初の3月31日までの児童を養育している方が対象です。原則として児童が日本国内に住んでいる場合に支給され、父母が離婚協議中で別居している場合は児童と同居している方に優先的に支給されます。</p>'
      },
      {
        heading: '支給額',
        content: '<div class="summary-box" data-title="令和6年10月分以降の月額"><p>3歳未満：15,000円（第3子以降は30,000円）</p><p>3歳以上〜高校生年代まで：10,000円（第3子以降は30,000円）</p></div><p>第3子以降とは、児童および児童の兄姉等のうち、年齢が上の子から数えて3人目以降の子を指します。</p>'
      },
      {
        heading: '支給時期',
        content: '<p>毎年2月、4月、6月、8月、10月、12月の偶数月に、それぞれの前月分までの2か月分が支給されます。実際の支払日は市区町村により異なるため、住民票のある自治体の案内を確認してください。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>出生・転入などにより新たに受給する場合は、住民票のある市区町村へ認定請求を行います。公務員は勤務先での手続きになる場合があります。申請が遅れると受け取れない月が発生するため、出生・転入後は早めに手続きします。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/policies/kokoseido/jidouteate/annai',
    sourceName: 'こども家庭庁 児童手当制度のご案内',
    sourceUrls: [
      'https://www.cfa.go.jp/policies/kokoseido/jidouteate/annai',
      'https://www.cfa.go.jp/policies/kokoseido/jidouteate/mottoouen'
    ],
    sourceNote: '支給対象、令和6年10月分以降の支給額、支給時期、申請先をこども家庭庁公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'jidou-fuyou-teate',
    title: '児童扶養手当',
    organization: 'こども家庭庁',
    type: 'national',
    maxAmount: '第1子 月額最大48,050円',
    maxAmountNum: 4.805,
    category: 'childcare',
    prefecture: '全国',
    tags: ['ひとり親支援', '所得制限あり', '全国共通', 'こども家庭庁'],
    eligibility: '父母の離婚・死亡・重度障害などにより、父または母と生計を同じくしていない児童を養育するひとり親家庭等が対象です。対象児童は原則18歳到達後の最初の3月31日までです。',
    targetIncome: '所得制限あり。令和6年11月分から所得限度額が引き上げられています。',
    applicationPeriod: '通年（市区町村窓口で認定請求。認定後は毎年現況届が必要）',
    description: 'ひとり親家庭等の生活の安定と自立促進のための国の手当です。令和8年4月分からは第1子の全部支給が月額48,050円、一部支給が月額48,040円〜11,340円、第2子以降は児童1人につき最大11,350円加算されます。',
    sections: [
      {
        heading: '対象者',
        content: '<p>父母の離婚、死亡、重度障害、生死不明、DV保護命令などにより、父または母と生計を同じくしていない児童を養育している母、父、または養育者が対象です。対象児童は原則として18歳に達する日以後の最初の3月31日まで、一定以上の障害がある場合は20歳未満までです。</p>'
      },
      {
        heading: '支給額',
        content: '<div class="summary-box" data-title="令和8年4月分からの月額"><p>第1子：全部支給48,050円、一部支給48,040円〜11,340円</p><p>第2子以降：全部支給は1人につき11,350円加算、一部支給は11,340円〜5,680円加算</p></div><p>支給額は物価変動等により毎年度改定されるため、申請時点の市区町村案内も確認してください。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は住民票のある市区町村の児童扶養手当担当窓口です。認定請求書、戸籍謄本、本人確認書類、マイナンバー確認書類、振込口座、所得確認書類などを提出します。認定後も毎年8月頃に現況届を提出しないと、以後の支給が止まる場合があります。</p>'
      },
      {
        heading: '注意点',
        content: '<p>所得制限があります。養育費の一部は所得に算入されます。公的年金等を受給している場合も、年金額との差額分を受給できる場合があるため、自己判断で除外せず市区町村に確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/policies/hitori-oya/fuyou-teate',
    sourceName: 'こども家庭庁 児童扶養手当について',
    sourceUrls: [
      'https://www.cfa.go.jp/policies/hitori-oya/fuyou-teate',
      'https://support-hitorioya.cfa.go.jp/support/',
      'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/71de338f-5ed2-4c95-9848-3fd387d0b4d7/a4e6f323/20260408_policies_hitori-oya_fuyou-teate_19.pdf'
    ],
    sourceNote: '制度概要、令和6年11月改正、令和8年4月掲載の概要PDF、ひとり親家庭向けポータルの説明を確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'shougaiji-fukushi-teate',
    title: '特別児童扶養手当',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '1級 月額58,450円',
    maxAmountNum: 5.845,
    category: 'childcare',
    prefecture: '全国',
    tags: ['障がい児支援', '手当制度', '所得制限あり', '全国共通'],
    eligibility: '20歳未満で精神または身体に障害のある児童を、家庭で監護・養育している父母または養育者が対象です。',
    targetIncome: '所得制限あり。受給者本人、配偶者、扶養義務者の所得が判定されます。',
    applicationPeriod: '通年（市区町村窓口で申請。認定後は所得状況届等が必要）',
    description: '精神または身体に障害のある20歳未満の児童を家庭で養育する人に支給される国の手当です。令和8年4月適用額は、1級が月額58,450円、2級が月額38,930円です。',
    sections: [
      {
        heading: '対象者',
        content: '<p>20歳未満で精神または身体に障害のある児童を家庭で監護・養育している父母または養育者が対象です。障害の程度は手帳の等級と完全には一致しないため、医師の診断書等により判定されます。</p>'
      },
      {
        heading: '支給額と支給時期',
        content: '<div class="summary-box" data-title="令和8年4月より適用"><p>1級：月額58,450円</p><p>2級：月額38,930円</p><p>支給時期：原則4月・8月・12月</p></div><p>各支給月に、それぞれの前月分までがまとめて支払われます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は市区町村の障害福祉または子育て支援担当窓口です。認定請求書、所定の診断書、戸籍・住民票関係書類、振込口座、所得確認書類、マイナンバー確認書類などを用意します。</p>'
      },
      {
        heading: '支給停止となる主な場合',
        content: '<p>所得が限度額以上の場合、児童が障害を支給事由とする公的年金を受けられる場合、児童が児童福祉施設等に入所している場合などは支給対象外または支給停止になることがあります。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/bunya/shougaihoken/jidou/huyou.html',
    sourceName: '厚生労働省 特別児童扶養手当について',
    sourceUrls: [
      'https://www.mhlw.go.jp/bunya/shougaihoken/jidou/huyou.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/shougaishahukushi/jidou/index.html'
    ],
    sourceNote: '支給要件、令和8年4月適用額、支払時期、所得制限を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tokubetsu-shougaisha-teate',
    title: '特別障害者手当',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '月額30,450円',
    maxAmountNum: 3.045,
    category: 'nursing',
    prefecture: '全国',
    tags: ['障がい者支援', '在宅介護', '所得制限あり', '全国共通'],
    eligibility: '精神または身体に著しく重度の障害があり、日常生活で常時特別の介護を必要とする在宅の20歳以上の人が対象です。',
    targetIncome: '所得制限あり。本人、配偶者、扶養義務者の所得が判定されます。',
    applicationPeriod: '通年（市区町村の障害福祉窓口で申請）',
    description: '著しく重度の障害により、日常生活で常時特別の介護を必要とする在宅の20歳以上の人を支援する手当です。令和8年4月適用額は月額30,450円です。',
    sections: [
      {
        heading: '対象者',
        content: '<p>20歳以上で、精神または身体に著しく重度の障害があり、日常生活において常時特別の介護を必要とする在宅の人が対象です。施設入所中や病院等に継続して入院している場合は対象外となることがあります。</p>'
      },
      {
        heading: '支給額と支給時期',
        content: '<div class="summary-box" data-title="令和8年4月より適用"><p>月額30,450円</p><p>支給時期：原則2月・5月・8月・11月</p></div><p>各支給月に、それぞれの前月分までがまとめて支払われます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は市区町村の障害福祉担当窓口です。認定請求書、所定の診断書、所得状況届、本人確認書類、振込口座などを提出し、審査を受けます。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/bunya/shougaihoken/jidou/tokubetsu.html',
    sourceName: '厚生労働省 特別障害者手当について',
    sourceUrls: [
      'https://www.mhlw.go.jp/bunya/shougaihoken/jidou/tokubetsu.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/shougaishahukushi/jidou/index.html'
    ],
    sourceNote: '支給要件、令和8年4月適用額、支払時期、所得制限を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'ninpu-kenkou-shinsa',
    title: '妊婦健康診査の公費助成',
    organization: 'こども家庭庁・市区町村',
    type: 'national',
    maxAmount: '自治体ごとに公費助成',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '全国',
    tags: ['妊婦健診', '妊娠', '自治体助成', '母子保健'],
    eligibility: '妊娠届出後、住民票のある市区町村で母子健康手帳と妊婦健康診査受診券等の交付を受ける妊婦が対象です。',
    applicationPeriod: '妊娠届出・母子健康手帳交付時',
    description: '妊婦健康診査は、妊娠中の健康状態や胎児の発育を定期的に確認するための健診です。費用助成は市区町村が実施し、受診券や補助券により健診費用の一部または大部分が公費負担されます。',
    sections: [
      {
        heading: '制度の位置づけ',
        content: '<p>妊婦健診の公費助成は、全国一律の現金給付ではなく、市区町村が受診券・補助券などで実施する母子保健施策です。こども家庭庁は全国自治体の公費負担状況を調査・公表しています。</p>'
      },
      {
        heading: '対象者と受診時期',
        content: '<p>対象は、妊娠届出を行い、母子健康手帳と妊婦健康診査受診券等の交付を受けた妊婦です。標準的には妊娠初期から23週までは4週間に1回、24週から35週までは2週間に1回、36週以降は1週間に1回程度の受診が目安です。</p>'
      },
      {
        heading: '申請・利用方法',
        content: '<p>妊娠が分かったら市区町村へ妊娠届を提出します。母子健康手帳とともに受診券・補助券が交付され、委託医療機関や助産所で提示して利用します。里帰り出産などで自治体外の医療機関を受診する場合は、償還払いの可否を事前に確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/policies/boshihoken/nimpukenshin',
    sourceName: 'こども家庭庁 妊婦健診に関する取組み',
    sourceUrls: [
      'https://www.cfa.go.jp/policies/boshihoken/nimpukenshin',
      'https://www.cfa.go.jp/press/ceb3d0fd-a99a-4637-8006-fa236413774b',
      'https://www.mhlw.go.jp/bunya/kodomo/boshi-hoken13/'
    ],
    sourceNote: '妊婦健診の受診間隔、公費負担の自治体調査、リーフレットを公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'mijukuji-youiku-iryou',
    title: '未熟児養育医療',
    organization: 'こども家庭庁・市区町村',
    type: 'national',
    maxAmount: '入院養育医療の自己負担を軽減',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '全国',
    tags: ['未熟児', '乳児医療', '医療費助成', '市区町村'],
    eligibility: '出生時体重2,000g以下など、身体の発育が未熟で医師が入院養育を必要と認めた乳児が対象です。',
    targetIncome: '世帯所得に応じた自己負担が発生する場合があります。',
    applicationPeriod: '入院養育が必要と診断された後、速やかに市区町村へ申請',
    description: '入院養育を必要とする未熟児に対し、指定養育医療機関で必要な医療の給付を行う制度です。実施主体は市区町村で、診察、薬剤、医学的処置、入院・看護、移送などが給付範囲に含まれます。',
    sections: [
      {
        heading: '対象者',
        content: '<p>対象は、出生時体重2,000g以下、または生活力が特に薄弱で医師が入院養育を必要と認めた未熟児です。低体重児の届出や医師の意見書等をもとに、市区町村が給付の可否を判断します。</p>'
      },
      {
        heading: '給付範囲',
        content: '<div class="summary-box" data-title="主な給付範囲"><p>診察</p><p>薬剤または治療材料の支給</p><p>医学的処置・手術その他の治療</p><p>入院および看護</p><p>移送</p></div><p>給付は指定養育医療機関で行われます。世帯の所得に応じて一部自己負担が発生する場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>保護者が未熟児の居住地の市区町村へ申請します。申請書、医師の意見書、健康保険資格が分かる書類、所得確認書類、本人確認書類などが必要です。市区町村から養育医療券が交付されたら、指定養育医療機関に提示します。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/d4a9b67b-acbd-4e2a-a27a-7e8f2d6106dd/b32f414e/20241203_policies_boshihoken_tsuuchi_2024_94.pdf',
    sourceName: 'こども家庭庁 未熟児養育事業の実施について',
    sourceUrls: [
      'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/d4a9b67b-acbd-4e2a-a27a-7e8f2d6106dd/b32f414e/20241203_policies_boshihoken_tsuuchi_2024_94.pdf',
      'https://www.mhlw.go.jp/web/t_doc?dataId=82106000&dataType=0&pageNo=1',
      'https://www.mhlw.go.jp/web/t_doc?dataId=82108000&dataType=0&pageNo=1'
    ],
    sourceNote: '対象、給付範囲、申請・養育医療券の手続きはこども家庭庁通知および母子保健法・施行規則で確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'funin-chiryou-josei',
    title: '不妊治療の保険適用・先進医療',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '保険診療は原則3割負担',
    maxAmountNum: 50,
    category: 'childcare',
    prefecture: '全国',
    tags: ['不妊治療', '保険適用', '先進医療', '高額療養費'],
    eligibility: '不妊治療を受ける夫婦等が対象です。保険適用には年齢・回数などの要件があります。',
    applicationPeriod: '通年（医療機関で保険診療として受診。自治体独自助成は各自治体へ申請）',
    description: 'かつての国の特定不妊治療費助成は、不妊治療の保険適用への移行により制度内容が変わっています。現在は、体外受精・顕微授精等の一部が公的医療保険の対象となり、先進医療は保険診療との併用可否や自治体独自助成を確認する必要があります。',
    sections: [
      {
        heading: '現在の制度整理',
        content: '<p>不妊治療は令和4年4月から保険適用が拡大され、体外受精・顕微授精などの生殖補助医療も一定条件で保険診療の対象になりました。従来型の「国の一律助成金」として探すのではなく、保険適用、高額療養費、先進医療、自治体独自助成を分けて確認する必要があります。</p>'
      },
      {
        heading: '対象となる治療',
        content: '<p>保険適用の対象には、一般不妊治療、生殖補助医療、男性不妊治療などが含まれます。妻の年齢や胚移植の回数などに要件があります。保険適用外の技術でも、先進医療として保険診療と併用できるものがあります。</p>'
      },
      {
        heading: '申請・確認方法',
        content: '<p>保険診療分は医療機関で健康保険資格を提示して受診します。高額療養費の対象になる場合は、限度額適用認定証やマイナ保険証で窓口負担を抑えられます。先進医療や自治体独自助成は、治療前に医療機関と自治体窓口へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/kodomo_kosodate/boshi-hoken/funin-01_00004.html',
    sourceName: '厚生労働省 不妊治療に関する取組',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/kodomo_kosodate/boshi-hoken/funin-01_00004.html',
      'https://www.mhlw.go.jp/topics/bukyoku/isei/sensiniryo/kikan03.html',
      'https://www.mhlw.go.jp/topics/bukyoku/isei/sensiniryo/kikan02.html'
    ],
    sourceNote: '保険適用への移行、先進医療関連資料、実施医療機関一覧を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'funin-chiryo-hoken-tekiyou',
    title: '不妊治療の保険適用',
    organization: '厚生労働省',
    type: 'national',
    maxAmount: '保険診療は原則3割負担',
    maxAmountNum: 50,
    category: 'medical',
    prefecture: '全国',
    tags: ['不妊治療', '保険適用', '高額療養費', '全国共通'],
    eligibility: '不妊治療を受ける夫婦等が対象です。保険適用には年齢・回数などの要件があります。',
    applicationPeriod: '通年（医療機関で保険診療として受診）',
    description: '不妊治療の保険適用により、体外受精や顕微授精などの一部治療は原則3割負担で受けられます。月ごとの自己負担が高額になる場合は高額療養費制度の対象になります。',
    sections: [
      {
        heading: '保険適用の概要',
        content: '<p>一般不妊治療と生殖補助医療の一部が保険診療の対象です。治療開始時の年齢や胚移植回数などに要件があり、医師の治療計画に基づいて実施されます。</p>'
      },
      {
        heading: '自己負担と高額療養費',
        content: '<p>保険診療分の窓口負担は原則3割です。1か月の自己負担額が高額になる場合は、高額療養費制度や限度額適用認定により負担を抑えられる場合があります。</p>'
      },
      {
        heading: '先進医療・自治体助成との関係',
        content: '<p>一部の先進医療は保険診療との併用が可能です。ただし、先進医療分は原則自己負担です。都道府県・市区町村が先進医療費や自己負担分に独自助成を設けている場合があるため、治療前に自治体の最新案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/kodomo_kosodate/boshi-hoken/funin-01_00004.html',
    sourceName: '厚生労働省 不妊治療に関する取組',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/kodomo_kosodate/boshi-hoken/funin-01_00004.html',
      'https://www.mhlw.go.jp/topics/bukyoku/isei/sensiniryo/kikan03.html',
      'https://www.mhlw.go.jp/topics/bukyoku/isei/sensiniryo/kikan02.html'
    ],
    sourceNote: '保険適用への移行、先進医療関連資料、実施医療機関一覧を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'hitorioya-iryouhi-josei',
    title: 'ひとり親家庭等医療費助成制度',
    organization: '市区町村・都道府県',
    type: 'local',
    maxAmount: '自治体ごとに自己負担を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['ひとり親支援', '医療費助成', '自治体制度', '所得制限あり'],
    eligibility: 'ひとり親家庭の親と児童、または両親のいない児童を養育する人など。対象年齢・所得制限・自己負担は自治体により異なります。',
    targetIncome: '所得制限あり。多くの自治体で児童扶養手当の所得基準に準じます。',
    applicationPeriod: '通年（住所地の市区町村で医療証等を申請）',
    description: 'ひとり親家庭等の医療費負担を軽減する自治体制度です。国の一律給付ではなく、都道府県・市区町村ごとに対象年齢、所得制限、自己負担額、医療証の扱いが異なります。',
    sections: [
      {
        heading: '制度の位置づけ',
        content: '<p>ひとり親家庭等医療費助成は、自治体が実施する医療費助成です。こども家庭庁のひとり親家庭向けポータルでは、児童扶養手当、就業支援、生活支援、母子父子寡婦福祉資金貸付金などとあわせて、自治体窓口での支援確認が案内されています。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>対象は、母子家庭・父子家庭の親と児童、または両親のいない児童を養育する人などです。多くの自治体で、健康保険診療の自己負担分を全額または一部助成します。入院時食事療養費、保険外診療、差額ベッド代などは対象外となる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市区町村で、ひとり親家庭等医療証や受給資格証の交付を申請します。必要書類は健康保険資格が分かる書類、戸籍関係書類、所得確認書類、本人確認書類、振込口座などです。転入・転出時は資格の再申請や返還手続きが必要です。</p>'
      }
    ],
    officialUrl: 'https://support-hitorioya.cfa.go.jp/support/',
    sourceName: 'こども家庭庁 ひとり親家庭のためのポータルサイト',
    sourceUrls: [
      'https://support-hitorioya.cfa.go.jp/support/',
      'https://www.cfa.go.jp/policies/hitori-oya/fuyou-teate'
    ],
    sourceNote: 'ひとり親家庭向け支援施策と児童扶養手当の公式説明を確認。医療費助成の具体額は自治体制度のため各市区町村ページで確認が必要。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'boshi-fushi-kafu-shikin',
    title: '母子父子寡婦福祉資金貸付金',
    organization: 'こども家庭庁・都道府県等',
    type: 'national',
    maxAmount: '修学・生活・住宅等の貸付',
    maxAmountNum: 340,
    category: 'childcare',
    prefecture: '全国',
    tags: ['ひとり親支援', '教育資金', '貸付制度', '無利子'],
    eligibility: '母子家庭の母、父子家庭の父、寡婦、これらの世帯の児童などが対象です。',
    targetIncome: '貸付審査あり。自治体で返済能力・資金使途等を確認。',
    applicationPeriod: '通年（都道府県・指定都市・中核市等の福祉窓口で相談）',
    description: 'ひとり親家庭等の経済的自立と生活安定を支える貸付制度です。修学資金、就学支度資金、生活資金、技能習得資金、住宅資金など複数の資金があり、基本的に無利子または低利で利用できます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>母子父子寡婦福祉資金貸付金は、配偶者のいない人がこどもを扶養している場合などに、経済的自立と生活意欲の助長を図るため貸付けを行う制度です。こども家庭庁のひとり親家庭向けポータルでは、修学資金、技能習得資金、就職支度資金、医療介護資金、住宅資金など12種類が案内されています。</p>'
      },
      {
        heading: '貸付条件',
        content: '<p>資金の種類や連帯保証人の有無により条件は異なりますが、基本的に無利子または年利1.0%です。返済は一定の据置期間後、資金の種類に応じた期間で行います。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>まず住所地の自治体、福祉事務所、母子・父子自立支援員などに相談します。貸付申請書、資金使途を示す書類、戸籍・所得関係書類、連帯保証人関係書類などが求められます。給付ではなく貸付のため、返済計画を確認した上で利用してください。</p>'
      }
    ],
    officialUrl: 'https://support-hitorioya.cfa.go.jp/support/',
    sourceName: 'こども家庭庁 ひとり親家庭のためのポータルサイト',
    sourceUrls: [
      'https://support-hitorioya.cfa.go.jp/support/',
      'https://www.mhlw.go.jp/stf/newpage_08152.html',
      'https://www.mhlw.go.jp/web/t_doc?dataId=82099000&dataType=0&pageNo=1'
    ],
    sourceNote: '支援施策ポータルの制度説明、厚生労働省の相談窓口案内、母子及び父子並びに寡婦福祉法を確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'shussan-teatekin',
    title: '出産手当金',
    organization: '全国健康保険協会等の医療保険者',
    type: 'national',
    maxAmount: '産前産後休業中の標準報酬日額の3分の2相当',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '全国',
    tags: ['出産', '産前産後休業', '健康保険', '所得補償'],
    eligibility: '健康保険の被保険者本人が、出産のため会社を休み、給与の支払いを受けない、または出産手当金より少ない給与しか受けない場合に対象です。国民健康保険では通常対象外のため、加入する医療保険者へ確認します。',
    targetOccupation: '健康保険の被保険者',
    applicationPeriod: '産前産後休業後に加入する医療保険者へ申請。請求権の時効に注意',
    description: '出産のため会社を休んだ健康保険の被保険者に、産前42日（多胎妊娠は98日）から産後56日までの範囲で、給与を受けられない期間の生活保障として支給される制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>出産手当金は、健康保険の被保険者本人が出産のために会社を休み、給与の支払いを受けられない場合に支給される所得補償です。出産育児一時金とは別の制度で、出産費用そのものではなく、産前産後休業中の収入減を補う位置づけです。</p>'
      },
      {
        heading: '支給期間',
        content: '<p>支給対象となる期間は、出産日以前42日間（多胎妊娠の場合は98日間）から、出産日の翌日以後56日間までの範囲内で会社を休んだ期間です。出産予定日より遅れて出産した場合は、出産予定日を基準にした産前期間から実際の出産日までの期間も対象になります。</p>'
      },
      {
        heading: '支給額',
        content: '<p>1日あたりの支給額は、原則として支給開始日以前12か月間の各月の標準報酬月額を平均した額を30で割り、その3分の2を乗じた額です。休んだ期間に給与が一部支払われる場合は、出産手当金との差額のみ支給されることがあります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>加入している協会けんぽ、健康保険組合などの医療保険者へ申請します。申請書には本人記入欄、事業主証明欄、医師または助産師の証明欄があるため、勤務先と医療機関の確認を受けて提出します。</p>'
      }
    ],
    officialUrl: 'https://www.kyoukaikenpo.or.jp/benefit/childbirth/001/index.html',
    sourceName: '全国健康保険協会 出産育児一時金・出産手当金',
    sourceUrls: [
      'https://www.kyoukaikenpo.or.jp/benefit/childbirth/001/index.html',
      'https://www.kyoukaikenpo.or.jp/faq/benefit/007/index.html',
      'https://www.mhlw.go.jp/file/06-Seisakujouhou-11900000-Koyoukintoujidoukateikyoku/0000174135.pdf'
    ],
    sourceNote: '協会けんぽ公式ページと厚生労働省資料で、対象者、支給期間、支給額の計算式、給与支払いがある場合の差額支給を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shakaiteki-yougo-jiritsu-shien',
    title: '社会的養護自立支援事業・拠点事業',
    organization: 'こども家庭庁・都道府県等',
    type: 'national',
    maxAmount: '住居・生活・相談支援等',
    maxAmountNum: 20,
    category: 'childcare',
    prefecture: '全国',
    tags: ['社会的養護', '自立支援', '退所後支援', 'こども家庭庁'],
    eligibility: '児童養護施設、里親、ファミリーホーム、自立援助ホーム等の措置解除者・委託解除者などが対象です。',
    applicationPeriod: '退所前後に施設・児童相談所・自治体へ相談',
    description: '社会的養護経験者等が施設退所・里親委託解除後も孤立せず生活できるよう、相談、居住、就学・就労、関係機関連携などを支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>社会的養護とは、保護者のないこどもや、保護者に監護させることが適当でないこどもを公的責任で養育・保護し、家庭への支援を行う仕組みです。退所後の自立支援として、相談支援、住居確保、就学・就労支援、関係機関との連絡調整などが行われます。</p>'
      },
      {
        heading: '対象者',
        content: '<p>児童養護施設等を退所した人、里親・ファミリーホームの委託を解除された人、自立援助ホームの利用者・退所者などが対象です。令和4年改正児童福祉法により、年齢で一律に支援を打ち切るのではなく、本人の状況に応じた支援が重視されています。</p>'
      },
      {
        heading: '相談・利用方法',
        content: '<p>退所前から施設職員、里親、児童相談所、自治体担当者、自立支援拠点等へ相談し、支援計画や利用できる制度を確認します。住まい、学費、就職、医療、福祉制度、保証人確保など、複数の支援を組み合わせることが重要です。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/policies/shakaiteki-yougo',
    sourceName: 'こども家庭庁 社会的養護',
    sourceUrls: [
      'https://www.cfa.go.jp/policies/shakaiteki-yougo',
      'https://www.cfa.go.jp/policies/jidougyakutai/Revised-Child-Welfare-Act',
      'https://www.cfa.go.jp/policies/jidougyakutai/sogoshienjigyo'
    ],
    sourceNote: '社会的養護の概要、令和4年改正児童福祉法、社会的養護自立支援拠点事業等の公式案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
];
