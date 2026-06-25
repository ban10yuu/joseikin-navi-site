import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-25';

export const verifiedNationalSupportGrants2026: Grant[] = [
  {
    slug: 'juukyo-kakuho-kyuufukin',
    title: '住居確保給付金',
    organization: '厚生労働省・市区町村',
    type: 'national',
    maxAmount: '家賃相当額（住宅扶助額を上限）',
    maxAmountNum: 7,
    category: 'housing',
    prefecture: '全国',
    tags: ['家賃補助', '生活困窮者支援', '住まいの支援', '全国共通'],
    eligibility: '主たる生計維持者が離職・廃業後2年以内、または本人の責任・都合によらず収入機会が離職・廃業と同程度まで減少し、収入・資産・求職活動等の要件を満たす方が対象です。',
    targetIncome: '市区町村ごとの基準額、家賃、資産額による要件あり。',
    applicationPeriod: '通年（お住まいの自治体の自立相談支援機関に相談）',
    description: '離職・廃業や本人の責任によらない収入減少により住居を失うおそれがある人に、自治体が家賃相当額を原則3か月、延長により最長9か月まで支給する制度です。',
    sections: [
      {
        heading: '支給内容',
        content: '<p>市区町村ごとに定める住宅扶助額を上限に、実際の家賃額が支給されます。支給期間は原則3か月で、要件を満たす場合は2回まで延長でき、最長9か月です。</p>'
      },
      {
        heading: '対象要件',
        content: '<p>離職・廃業後2年以内、または本人の責任・都合によらない収入機会の減少があり、収入要件・資産要件・求職活動等要件を満たす必要があります。自営業者は事業再生に向けた活動が認められる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請・相談は、お住まいの自治体の自立相談支援機関で行います。支給決定後の給付金は、原則として賃貸人や不動産仲介業者等へ自治体から直接支払われます。</p>'
      }
    ],
    officialUrl: 'https://corona-support.mhlw.go.jp/jukyokakuhokyufukin/index.html',
    sourceName: '厚生労働省生活支援特設ウェブサイト 住居確保給付金',
    sourceUrls: [
      'https://corona-support.mhlw.go.jp/jukyokakuhokyufukin/index.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000059425.html'
    ],
    sourceNote: '制度概要、対象要件、支給期間、支給方法を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'koutou-kyouiku-shugaku-shien',
    title: '高等教育の修学支援新制度',
    organization: '文部科学省',
    type: 'national',
    maxAmount: '授業料・入学金の減免＋給付型奨学金',
    maxAmountNum: 70,
    category: 'education',
    prefecture: '全国',
    tags: ['大学等進学', '給付型奨学金', '授業料減免', '全国共通'],
    eligibility: '大学、短期大学、高等専門学校、専門学校に進学または在学し、家計・学業等の要件を満たす学生が対象です。令和7年度から多子世帯の学生は所得制限なく、国が定める一定額まで授業料・入学金の減免対象です。',
    targetIncome: '世帯所得、扶養する子どもの数、学校種別等により判定。',
    applicationPeriod: '予約採用・在学採用など学校を通じた申請時期に従う',
    description: '経済的な理由で進学をあきらめることがないよう、大学等の授業料・入学金の免除または減額と、返還不要の給付型奨学金で進学・修学を支援する国の制度です。',
    sections: [
      {
        heading: '支援内容',
        content: '<p>制度は、授業料・入学金の免除または減額と、返還不要の給付型奨学金の2本柱です。支援額は世帯状況、学校種別、自宅通学か自宅外通学かなどにより変わります。</p>'
      },
      {
        heading: '近年の拡充',
        content: '<p>令和6年度から多子世帯や私立理工農系の中間所得層への支援が拡大され、令和7年度からは多子世帯の学生に対して所得制限なく、国が定める一定額まで授業料・入学金が減免されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>高校在学中の予約採用、大学等に在学中の在学採用などがあります。日本学生支援機構への申込みと、在学・進学先の学校への授業料等減免の申込みを学校の案内に従って行います。</p>'
      }
    ],
    officialUrl: 'https://www.mext.go.jp/a_menu/koutou/hutankeigen/',
    sourceName: '文部科学省 高等教育の修学支援新制度',
    sourceUrls: [
      'https://www.mext.go.jp/a_menu/koutou/hutankeigen/',
      'https://www.mext.go.jp/kyufu/'
    ],
    sourceNote: '制度概要、令和6年度・令和7年度の拡充、多子世帯への授業料等減免を文部科学省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'shugaku-enjo',
    title: '就学援助制度',
    organization: '文部科学省・市町村',
    type: 'national',
    maxAmount: '学用品費・給食費等を市町村が援助',
    maxAmountNum: 10,
    category: 'education',
    prefecture: '全国',
    tags: ['義務教育', '学用品費', '学校給食費', '市町村'],
    eligibility: '経済的理由により就学困難と認められる学齢児童生徒の保護者が対象です。要保護者と、市町村教育委員会が要保護者に準ずる程度に困窮していると認める準要保護者があります。',
    targetIncome: '認定基準は各市町村が規定。',
    applicationPeriod: '自治体・学校の案内による（年度当初の受付が多い）',
    description: '経済的理由で小中学校等への就学が困難な家庭に対し、市町村が学用品費、通学費、修学旅行費、学校給食費などを援助する制度です。',
    sections: [
      {
        heading: '制度の根拠',
        content: '<p>学校教育法第19条に基づき、市町村は経済的理由によって就学困難と認められる学齢児童生徒の保護者に必要な援助を行います。</p>'
      },
      {
        heading: '対象と援助品目',
        content: '<p>要保護者、準要保護者が対象です。援助品目には学用品費、体育実技用具費、新入学児童生徒学用品費等、通学用品費、通学費、修学旅行費、校外活動費、医療費、学校給食費などがあります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先や必要書類、所得基準は市町村教育委員会ごとに異なります。学校からの案内、または住民票のある自治体の教育委員会の案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mext.go.jp/a_menu/shotou/career/05010502/017.htm',
    sourceName: '文部科学省 就学援助制度について',
    sourceUrls: [
      'https://www.mext.go.jp/a_menu/shotou/career/05010502/017.htm',
      'https://www.mext.go.jp/a_menu/shotou/career/05010502/1412199_00010.htm'
    ],
    sourceNote: '制度概要、対象者、補助対象品目、準要保護者の市町村実施を文部科学省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'seikatsu-fukushi-shikin',
    title: '生活福祉資金貸付制度',
    organization: '厚生労働省・都道府県社会福祉協議会',
    type: 'national',
    maxAmount: '用途別上限あり（福祉費は最大580万円以内）',
    maxAmountNum: 580,
    category: 'living',
    prefecture: '全国',
    tags: ['生活支援', '低所得世帯', '社会福祉協議会', '貸付'],
    eligibility: '低所得者世帯、障害者世帯、高齢者世帯などで、必要な資金を他から借り受けることが困難な世帯が対象です。',
    targetIncome: '低所得者世帯は市町村民税非課税程度が目安。',
    applicationPeriod: '通年（市区町村社会福祉協議会に相談）',
    description: '低所得世帯、障害者世帯、高齢者世帯などに対し、生活再建や福祉、教育、不動産担保型生活資金など用途に応じた資金を低利または無利子で貸し付ける制度です。',
    sections: [
      {
        heading: '対象世帯',
        content: '<p>低所得者世帯、障害者世帯、高齢者世帯が対象です。低所得者世帯は、必要な資金を他から借り受けることが困難な世帯で、市町村民税非課税程度が目安とされています。</p>'
      },
      {
        heading: '資金の種類と利子',
        content: '<p>資金の種類は、総合支援資金、福祉資金、教育支援資金、不動産担保型生活資金です。連帯保証人を立てる場合は無利子、立てない場合は年1.5%が基本で、緊急小口資金と教育支援資金は無利子です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>相談・申請は、お住まいの地域の市区町村社会福祉協議会で行います。貸付の決定では、貸付条件に加えて償還可能性も考慮されます。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/seikatsu-fukushi-shikin1/index.html',
    sourceName: '厚生労働省 生活福祉資金貸付制度',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/seikatsu-fukushi-shikin1/index.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/seikatsu-fukushi-shikin1/kashitsukejoken.html'
    ],
    sourceNote: '貸付対象、資金種類、利子、用途別上限を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'hisaisha-seikatsu-saiken-shienkin',
    title: '被災者生活再建支援金',
    organization: '内閣府・都道府県',
    type: 'national',
    maxAmount: '最大300万円',
    maxAmountNum: 300,
    category: 'disaster',
    prefecture: '全国',
    tags: ['災害支援', '住宅再建', '返済不要', '市町村申請'],
    eligibility: '自然災害により住宅が全壊、解体、長期避難、大規模半壊、中規模半壊など、生活基盤に著しい被害を受けた世帯が対象です。',
    applicationPeriod: '基礎支援金は災害発生日から13か月以内、加算支援金は37か月以内',
    description: '自然災害で住宅に著しい被害を受けた世帯に、基礎支援金と住宅再建方法に応じた加算支援金を支給し、生活再建を支援する制度です。',
    sections: [
      {
        heading: '支給対象',
        content: '<p>住宅が全壊した世帯、半壊または住宅敷地被害により解体した世帯、長期避難世帯、大規模半壊世帯、中規模半壊世帯などが対象です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>複数人世帯では、基礎支援金と加算支援金を合わせて最大300万円です。単身世帯は各該当額の4分の3になります。住宅の被害程度と再建方法により支給額が変わります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請窓口は市町村です。罹災証明書、住民票、預金通帳の写し、住宅の購入・補修・賃貸借契約書など、支援金の区分に応じた書類を提出します。</p>'
      }
    ],
    officialUrl: 'https://www.bousai.go.jp/taisaku/seikatsusaiken/shiensya.html',
    sourceName: '内閣府 防災情報 被災者生活再建支援法',
    sourceUrls: [
      'https://www.bousai.go.jp/taisaku/seikatsusaiken/shiensya.html',
      'https://www.bousai.go.jp/taisaku/seikatsusaiken/pdf/140612gaiyou.pdf'
    ],
    sourceNote: '対象世帯、支給額、申請期間、申請書類を内閣府防災情報ページと制度概要PDFで確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'saigai-engo-shikin',
    title: '災害援護資金',
    organization: '内閣府・市町村',
    type: 'national',
    maxAmount: '最大350万円',
    maxAmountNum: 350,
    category: 'disaster',
    prefecture: '全国',
    tags: ['災害支援', '貸付制度', '生活再建', '市町村'],
    eligibility: '災害救助法が適用された自然災害等により、負傷または住居・家財に被害を受けた世帯が対象です。所得制限があります。',
    targetIncome: '世帯人数に応じた所得制限あり。住居が滅失した場合は別基準。',
    applicationPeriod: '災害発生後、自治体が定める期間内',
    description: '自然災害により負傷または住居・家財に被害を受けた世帯へ、市町村が生活再建のための資金を貸し付ける制度です。貸付限度額は最大350万円です。',
    sections: [
      {
        heading: '対象災害と対象者',
        content: '<p>都道府県内で災害救助法が適用された市町村が1以上ある自然災害などが対象です。対象災害により、負傷または住居・家財に被害を受けた人が利用できます。</p>'
      },
      {
        heading: '貸付条件',
        content: '<p>貸付限度額は最大350万円です。利率は条例で定める年3%以内、保証人を立てる場合は年0%、保証人を立てない場合は年1.5%で、据置期間中は無利子です。</p>'
      },
      {
        heading: '返済期間',
        content: '<p>据置期間は3年、特別の場合は5年です。償還期間は据置期間を含め10年で、年賦、半年賦、月賦により償還します。</p>'
      }
    ],
    officialUrl: 'https://www.bousai.go.jp/taisaku/choui/choui.html',
    sourceName: '内閣府 防災情報 災害援護資金の概要',
    sourceUrls: [
      'https://www.bousai.go.jp/taisaku/choui/choui.html',
      'https://www.bousai.go.jp/taisaku/choui/pdf/siryo1-2.pdf'
    ],
    sourceNote: '対象災害、受給者、貸付限度額、所得制限、利率、据置・償還期間を内閣府防災情報ページと概要PDFで確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'saigai-engo-shikin-kashitsuke',
    title: '災害援護資金貸付制度',
    organization: '内閣府・市町村',
    type: 'national',
    maxAmount: '最大350万円',
    maxAmountNum: 350,
    category: 'disaster',
    prefecture: '全国',
    tags: ['災害支援', '貸付制度', '生活再建', '既存URL維持'],
    eligibility: '災害救助法が適用された自然災害等により、負傷または住居・家財に被害を受けた世帯が対象です。所得制限があります。',
    targetIncome: '世帯人数に応じた所得制限あり。住居が滅失した場合は別基準。',
    applicationPeriod: '災害発生後、自治体が定める期間内',
    description: '自然災害により負傷または住居・家財に被害を受けた世帯へ、市町村が生活再建のための資金を貸し付ける制度です。貸付限度額は最大350万円です。',
    sections: [
      {
        heading: '対象災害と対象者',
        content: '<p>都道府県内で災害救助法が適用された市町村が1以上ある自然災害などが対象です。対象災害により、負傷または住居・家財に被害を受けた人が利用できます。</p>'
      },
      {
        heading: '貸付条件',
        content: '<p>貸付限度額は最大350万円です。利率は条例で定める年3%以内、保証人を立てる場合は年0%、保証人を立てない場合は年1.5%で、据置期間中は無利子です。</p>'
      },
      {
        heading: '返済期間',
        content: '<p>据置期間は3年、特別の場合は5年です。償還期間は据置期間を含め10年で、年賦、半年賦、月賦により償還します。</p>'
      }
    ],
    officialUrl: 'https://www.bousai.go.jp/taisaku/choui/choui.html',
    sourceName: '内閣府 防災情報 災害援護資金の概要',
    sourceUrls: [
      'https://www.bousai.go.jp/taisaku/choui/choui.html',
      'https://www.bousai.go.jp/taisaku/choui/pdf/siryo1-2.pdf'
    ],
    sourceNote: '既存URLを維持しつつ、対象災害、受給者、貸付限度額、所得制限、利率、据置・償還期間を内閣府防災情報ページと概要PDFで再確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
  {
    slug: 'kaigo-kyuugyo-kyuufukin',
    title: '介護休業給付金',
    organization: '厚生労働省・ハローワーク',
    type: 'national',
    maxAmount: '休業開始時賃金日額×支給日数の67%（上限あり）',
    maxAmountNum: 35.6574,
    category: 'nursing',
    prefecture: '全国',
    tags: ['介護休業', '雇用保険', '家族介護', 'ハローワーク'],
    eligibility: '雇用保険の被保険者で、一定の要件を満たし、対象家族を介護するために介護休業を取得した方が対象です。',
    targetOccupation: '雇用保険の被保険者',
    applicationPeriod: '一回の介護休業終了後、終了日の翌日から2か月を経過する日の属する月の末日まで',
    description: '家族の介護のために介護休業を取得した雇用保険被保険者に、原則として休業開始時賃金日額に支給日数を掛けた額の67%を支給する制度です。',
    sections: [
      {
        heading: '支給内容',
        content: '<p>介護休業給付金の支給額は、原則として休業開始時賃金日額に支給日数を掛けた額の67%です。賃金月額には上限があり、上限額は毎年見直されます。</p>'
      },
      {
        heading: '支給対象期間',
        content: '<p>一回の介護休業につき、介護休業開始日から1か月ごとの支給単位期間で支給されます。一回の介護休業で給付対象となる期間は最長3か月です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>支給申請は、通常は事業主を通じてハローワークに行います。一回の介護休業終了後、終了日の翌日から2か月を経過する日の属する月の末日までに提出する必要があります。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/kaigo/leave/',
    sourceName: '厚生労働省 介護休業制度特設サイト・介護休業給付申請手続',
    sourceUrls: [
      'https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/kaigo/leave/',
      'https://www.mhlw.go.jp/content/11600000/001282596.pdf'
    ],
    sourceNote: '介護休業制度、給付率、支給対象期間、申請期限を厚生労働省公式ページと申請手続PDFで確認。',
    verifiedAt,
    publishedAt: '2026-06-25',
  },
];
