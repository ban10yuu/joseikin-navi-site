import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-26';

export const verifiedNationalContinuousSupportGrants2026: Grant[] = [
  {
    slug: 'chiiki-okoshi-kyouryoku-tai',
    title: '地域おこし協力隊',
    organization: '総務省・各自治体',
    type: 'national',
    maxAmount: '報償・活動費等は自治体の募集内容により異なる',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['地方移住', '地域活性化', '自治体募集', '総務省'],
    eligibility: '都市地域から条件不利地域等へ生活の拠点を移し、地域協力活動に従事しながら定住・定着を目指す方が対象です。応募条件、年齢要件、活動内容、待遇は募集自治体ごとに異なります。',
    targetOccupation: '地域協力活動に従事する移住希望者',
    applicationPeriod: '自治体ごとの募集期間に従う',
    description: '都市地域の人材が地方へ移住し、地域協力活動を行いながら任期後の定住・定着を目指す制度です。任期はおおむね1年以上3年以下で、募集、選考、待遇は各自治体が定めます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地域おこし協力隊は、都市地域から過疎地域等へ住民票を移し、地域協力活動に従事しながら地域への定住・定着を図る取り組みです。</p>'
      },
      {
        heading: '活動内容',
        content: '<p>活動内容は、地域ブランドや地場産品の開発、農林水産業の支援、住民の生活支援、地域情報の発信、移住交流促進など、自治体の募集内容により異なります。</p>'
      },
      {
        heading: '応募方法',
        content: '<p>応募は各自治体の募集要項に従います。活動地域、任期、報償費、住居、車両、兼業可否などの条件は募集ごとに確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.soumu.go.jp/main_sosiki/jichi_gyousei/c-gyousei/02gyosei08_03000066.html',
    sourceName: '総務省 地域おこし協力隊',
    sourceUrls: [
      'https://www.soumu.go.jp/main_sosiki/jichi_gyousei/c-gyousei/02gyosei08_03000066.html'
    ],
    sourceNote: '総務省公式ページで、都市地域から地方へ移住し地域協力活動を行う制度であること、任期がおおむね1年以上3年以下であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'jutaku-loan-genzei',
    title: '住宅ローン減税',
    organization: '国土交通省・財務省',
    type: 'national',
    maxAmount: '年末ローン残高の0.7%を控除（借入限度額・控除期間は住宅性能等で異なる）',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '全国',
    tags: ['住宅購入', '税制優遇', '住宅ローン控除', '国土交通省'],
    eligibility: '住宅ローンを利用して住宅の新築、取得、増改築等を行い、自ら居住する方が対象です。所得、床面積、入居時期、住宅性能、借入期間などの要件があります。',
    applicationPeriod: '初年度は確定申告、2年目以降は勤務先の年末調整または確定申告',
    description: '住宅ローンを利用して住宅を取得等した場合に、一定期間、年末ローン残高の0.7%を所得税等から控除する税制です。令和8年度税制改正により、適用期限は令和12年12月31日まで延長されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅ローン減税は、住宅ローンを利用して住宅の新築・取得・増改築等を行った場合に、年末ローン残高の0.7%を所得税等から控除する制度です。</p>'
      },
      {
        heading: '主な要件',
        content: '<p>自ら居住すること、床面積要件、合計所得金額要件、住宅ローンの返済期間、住宅性能などの要件があります。借入限度額と控除期間は住宅の種類や入居時期で変わります。</p>'
      },
      {
        heading: '手続き',
        content: '<p>初年度は確定申告が必要です。給与所得者は2年目以降、勤務先の年末調整で手続きできる場合があります。最新の対象期間と要件は国土交通省の公式案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk2_000017.html',
    sourceName: '国土交通省 住宅ローン減税',
    sourceUrls: [
      'https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk2_000017.html'
    ],
    sourceNote: '国土交通省公式ページで、令和8年度税制改正による5年間延長、令和8年1月1日から令和12年12月31日までの入居が対象であること、主な要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saigai-shougai-mimaikin',
    title: '災害障害見舞金',
    organization: '内閣府（防災担当）・市区町村',
    type: 'national',
    maxAmount: '最大250万円',
    maxAmountNum: 250,
    category: 'disaster',
    prefecture: '全国',
    tags: ['災害関連', '重度障害', '見舞金', '内閣府'],
    eligibility: '自然災害により重度の障害を受けた方が対象です。障害の程度、災害の範囲、支給手続きは災害弔慰金の支給等に関する法律と自治体の条例等に基づきます。',
    applicationPeriod: '災害発生後、自治体の案内に従う',
    description: '自然災害で重度の障害を受けた方に、市区町村から見舞金を支給する制度です。生計維持者が障害を受けた場合は250万円、その他の方は125万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>災害障害見舞金は、自然災害により重度の障害を受けた方へ市区町村が支給する見舞金です。災害弔慰金制度とあわせて被災者や遺族を支援します。</p>'
      },
      {
        heading: '支給額',
        content: '<p>内閣府資料では、生計維持者が障害を受けた場合は250万円、その他の方が障害を受けた場合は125万円とされています。</p>'
      },
      {
        heading: '手続き',
        content: '<p>申請先は市区町村です。対象となる災害、障害の認定、必要書類、支給時期は、被災自治体の案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.bousai.go.jp/taisaku/choui/pdf/siryo1-1.pdf',
    sourceName: '内閣府 災害弔慰金・災害障害見舞金の概要',
    sourceUrls: [
      'https://www.bousai.go.jp/taisaku/choui/pdf/siryo1-1.pdf'
    ],
    sourceNote: '内閣府防災担当の公式資料で、災害障害見舞金の対象と支給額250万円・125万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shougaisha-koyou-nouritu-joseikin',
    title: '障害者雇用納付金関係助成金',
    organization: '独立行政法人 高齢・障害・求職者雇用支援機構（JEED）',
    type: 'national',
    maxAmount: '助成金の種類・措置内容ごとに異なる',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '全国',
    tags: ['障害者雇用', '事業主向け', '職場環境整備', 'JEED'],
    eligibility: '障害者の雇用にあたり、施設・設備の整備、介助、通勤対策、職場適応援助、能力開発などの措置を行う事業主等が対象です。助成金ごとに対象者、認定申請、支給請求の要件が異なります。',
    targetOccupation: '事業主',
    applicationPeriod: '助成金ごとに定められた認定申請・支給請求期限に従う',
    description: '障害者の新規雇入れや雇用継続のために必要な施設・設備整備、介助、通勤対策、職場適応援助などにかかる事業主等の負担を軽減する助成金群です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>障害者雇用納付金関係助成金は、障害者の雇用に必要な施設・設備の整備や適切な雇用管理のための措置を行う事業主等を支援する制度です。</p>'
      },
      {
        heading: '主な助成金',
        content: '<p>障害者作業施設設置等助成金、障害者介助等助成金、重度障害者等通勤対策助成金、職場適応援助者助成金、障害者雇用相談援助助成金、障害者能力開発助成金などがあります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>助成金を受ける場合は、助成金ごとの期間内に受給資格等認定申請を行い、認定後に支給請求を行います。詳細はJEEDのリーフレット、パンフレット、様式を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.jeed.go.jp/disability/subsidy/index.html',
    sourceName: 'JEED 障害者雇用納付金関係助成金',
    sourceUrls: [
      'https://www.jeed.go.jp/disability/subsidy/index.html',
      'https://www.jeed.go.jp/disability/about_levy_grant_system.html',
      'https://www.mhlw.go.jp/content/11600000/001500709.pdf',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/shougaishakoyou/index.html'
    ],
    sourceNote: 'JEED公式ページで助成金の目的、種類、認定申請・支給請求の流れを確認。厚生労働省ページと公式パンフレットで障害者雇用納付金制度との関係を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kaigo-hoken-futangaku-keigen',
    title: '介護保険負担限度額認定（補足給付）',
    organization: '厚生労働省・市区町村',
    type: 'national',
    maxAmount: '食費・居住費の負担限度額を適用',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '全国',
    tags: ['介護保険', '食費居住費', '負担軽減', '市区町村'],
    eligibility: '介護保険施設やショートステイを利用し、所得や資産等が一定以下の方が対象です。世帯の課税状況、年金収入等、預貯金額などにより利用者負担段階が判定されます。',
    targetIncome: '市町村民税非課税世帯等',
    applicationPeriod: '通年（市区町村で認定申請。認定期間・更新時期は自治体により異なる）',
    description: '所得や資産等が一定以下の方が介護保険施設やショートステイを利用する場合に、食費・居住費の負担限度額を適用し、基準費用額との差額を介護保険から給付する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>特定入所者介護サービス費（補足給付）は、所得や資産等が一定以下の施設入所者等について、負担限度額を超えた居住費と食費の負担額を介護保険から支給する制度です。</p>'
      },
      {
        heading: '認定が必要です',
        content: '<p>補足給付を利用するには負担限度額認定を受ける必要があります。お住まいの市区町村へ申請し、認定証を施設等に提示して適用を受けます。</p>'
      },
      {
        heading: '負担額',
        content: '<p>負担限度額は、所得段階、施設の種類、部屋のタイプにより異なります。令和8年8月から一部の段階で食費・居住費の見直しが予定されているため、最新額は市区町村と厚生労働省の案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.kaigokensaku.mhlw.go.jp/commentary/fee.html',
    sourceName: '厚生労働省 介護サービス情報公表システム サービスにかかる利用料',
    sourceUrls: [
      'https://www.kaigokensaku.mhlw.go.jp/commentary/fee.html',
      'https://www.mhlw.go.jp/content/001706483.pdf'
    ],
    sourceNote: '厚生労働省の介護サービス情報公表システムで、補足給付の概要、負担限度額認定の必要性、対象段階を確認。令和8年8月の見直しは厚生労働省通知PDFで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'youji-kyouiku-hoiku-mushouka',
    title: '幼児教育・保育の無償化',
    organization: 'こども家庭庁・市区町村',
    type: 'national',
    maxAmount: '施設類型により無償または月額上限あり',
    maxAmountNum: 4.2,
    category: 'childcare',
    prefecture: '全国',
    tags: ['幼児教育', '保育料', '無償化', 'こども家庭庁'],
    eligibility: '3歳から5歳児クラスの子ども、住民税非課税世帯の0歳から2歳児クラスの子どもなどが対象です。施設類型や保育の必要性の認定により対象範囲と上限額が異なります。',
    applicationPeriod: '施設利用開始時または保育の必要性の認定申請時',
    description: '幼稚園、保育所、認定こども園等の利用料を無償化する制度です。認可外保育施設等は、保育の必要性の認定を受けた場合に月額上限の範囲で無償化されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>幼児教育・保育の無償化は、3歳から5歳児クラスの子どもと、住民税非課税世帯の0歳から2歳児クラスの子どもを中心に、施設利用料の負担を軽減する制度です。</p>'
      },
      {
        heading: '上限額',
        content: '<p>幼稚園の預かり保育、認可外保育施設、ベビーシッター、ファミリー・サポート・センター等は、保育の必要性の認定を受けた場合に月額上限の範囲で無償化されます。</p>'
      },
      {
        heading: '手続き',
        content: '<p>認可保育所等では手続きが不要な場合がありますが、幼稚園の預かり保育や認可外保育施設等では市区町村への認定申請が必要です。対象外費用もあるため施設と自治体に確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/policies/kokoseido/mushouka/',
    sourceName: 'こども家庭庁 幼児教育・保育の無償化',
    sourceUrls: [
      'https://www.cfa.go.jp/policies/kokoseido/mushouka/'
    ],
    sourceNote: 'こども家庭庁公式ページで、3歳から5歳児クラス、住民税非課税世帯の0歳から2歳児クラス、預かり保育や認可外保育施設等の月額上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shussan-kosodate-ouen-kouhukin',
    title: '妊婦のための支援給付（旧・出産・子育て応援交付金）',
    organization: 'こども家庭庁・市区町村',
    type: 'national',
    maxAmount: '妊婦給付認定後5万円＋こどもの人数×5万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '全国',
    tags: ['妊娠出産', '伴走型相談支援', '経済的支援', 'こども家庭庁'],
    eligibility: '医療機関により胎児心拍が確認され、住民票のある市区町村で妊婦給付認定を受ける妊婦が対象です。流産・死産等の場合も、公式案内に基づき支給対象となります。',
    applicationPeriod: '妊婦給付認定申請は妊娠確認後、こどもの人数の届出は出産予定日の8週間前の日から',
    description: '妊婦等包括相談支援事業による伴走型相談支援と、妊婦のための支援給付による経済的支援を一体的に行う制度です。令和7年度から、旧来の出産・子育て応援交付金から制度化された支援として運用されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>妊婦のための支援給付は、妊娠期から出産・子育て期までの相談支援と経済的支援を一体的に行う制度です。まずは住民票のある市区町村の相談窓口に確認します。</p>'
      },
      {
        heading: '支給額',
        content: '<p>公式リーフレットでは、妊婦給付認定後に5万円、妊娠しているこどもの人数の届出後にこどもの人数×5万円を支給すると案内されています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>医療機関で胎児心拍が確認された後、市区町村で妊婦給付認定を申請します。こどもの人数の届出は、原則として出産予定日の8週間前の日から行います。</p>'
      }
    ],
    officialUrl: 'https://www.cfa.go.jp/policies/shussan-kosodate/',
    sourceName: 'こども家庭庁 妊婦等包括相談支援事業・妊婦のための支援給付',
    sourceUrls: [
      'https://www.cfa.go.jp/policies/shussan-kosodate/',
      'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/be80930d-51d1-4084-aa3e-b80930646538/42e36027/20250325_policies_shussan-kosodate_52.pdf',
      'https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/fb3dbb28-102a-4840-90a5-00ad2e0d117f/419b6d0e/20260324policies-kodomokosodateshienkinseido-13.pdf'
    ],
    sourceNote: 'こども家庭庁公式ページと公式リーフレットで、令和7年度からの妊婦のための支援給付、妊婦給付認定後5万円、こどもの人数×5万円、申請時期を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
];
