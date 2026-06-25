import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-26';

export const verifiedNationalCoreWelfareGrants2026: Grant[] = [
  {
    slug: 'koutou-gakkou-shugaku-shienkin',
    title: '高等学校等就学支援金',
    organization: '文部科学省・都道府県',
    type: 'national',
    maxAmount: '授業料相当額を支援（学校種別で上限あり）',
    maxAmountNum: 39.6,
    category: 'education',
    prefecture: '全国',
    tags: ['高校授業料', '返済不要', '高校生', '文部科学省'],
    eligibility: '高等学校等に在学する生徒が対象です。令和8年度の授業料支援制度改正により、所得制限が撤廃され、多くの世帯が授業料支援を受けられるようになっています。',
    applicationPeriod: '入学時・在学中に学校または都道府県の案内に従って申請',
    description: '高等学校等の授業料負担を軽減するため、国が授業料に充てる就学支援金を支給する制度です。返済は不要で、学校設置者が生徒本人に代わって受け取り授業料に充当します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高等学校等に通う生徒の授業料負担を軽減する制度です。就学支援金は生徒本人や保護者に直接振り込まれるものではなく、学校設置者が受け取り授業料に充てます。</p>'
      },
      {
        heading: '令和8年度の改正',
        content: '<p>文部科学省は、令和8年度の授業料支援制度改正により所得制限が撤廃され、多くの方が授業料の支援を受けられるようになったと案内しています。申請手続きは必要です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請は学校または都道府県の案内に従います。オンライン申請システム e-Shien を利用できる場合がありますが、学校により紙申請のみの場合もあります。</p>'
      }
    ],
    officialUrl: 'https://www.mext.go.jp/a_menu/shotou/mushouka/1342674.htm',
    sourceName: '文部科学省 高等学校等就学支援金制度',
    sourceUrls: [
      'https://www.mext.go.jp/a_menu/shotou/mushouka/1342674.htm',
      'https://www.mext.go.jp/a_menu/shotou/mushouka/01753.html',
      'https://www.mext.go.jp/content/202604024-mxt_shuukyo03-100002595_1.pdf'
    ],
    sourceNote: '制度概要、e-Shien、令和8年度の授業料支援制度改正を文部科学省公式ページと公式PDFで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'jasso-shougakukin',
    title: '日本学生支援機構（JASSO）奨学金',
    organization: '日本学生支援機構（JASSO）',
    type: 'national',
    maxAmount: '給付・貸与額は学校種別等で異なる',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '全国',
    tags: ['奨学金', '給付型奨学金', '貸与奨学金', 'JASSO'],
    eligibility: '経済的理由で修学が困難な学生等が対象です。給付奨学金、第一種奨学金、第二種奨学金など、制度ごとに学力基準・家計基準・学校種別の要件があります。',
    applicationPeriod: '予約採用・在学採用など学校の案内時期に従う',
    description: '日本学生支援機構は、経済的理由で修学が困難な学生等に対して、返済不要の給付奨学金や返済が必要な貸与奨学金を実施しています。申請は原則として学校を通じて行います。',
    sections: [
      {
        heading: '制度の種類',
        content: '<p>国内の大学・短期大学・高等専門学校・専修学校等で学ぶ人向けに、給付奨学金、第一種奨学金、第二種奨学金、入学時特別増額貸与奨学金などがあります。</p>'
      },
      {
        heading: '給付奨学金',
        content: '<p>給付奨学金は返済不要の奨学金です。高等教育の修学支援新制度の一部として、授業料等減免とあわせて利用される場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>高校在学中の予約採用、進学後の在学採用などがあります。申込資格、支給・貸与月額、手続き時期は学校の奨学金担当窓口とJASSO公式情報を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.jasso.go.jp/shogakukin/',
    sourceName: '日本学生支援機構 奨学金',
    sourceUrls: [
      'https://www.jasso.go.jp/shogakukin/',
      'https://www.jasso.go.jp/shogakukin/about/kyufu/index.html',
      'https://www.jasso.go.jp/shogakukin/about/kyufu/kingaku.html'
    ],
    sourceNote: '奨学金制度の種類、給付奨学金、支給額の確認ページをJASSO公式サイトで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shussan-ikuji-ichijikin',
    title: '出産育児一時金',
    organization: '厚生労働省・公的医療保険者',
    type: 'national',
    maxAmount: '子ども1人につき原則50万円',
    maxAmountNum: 50,
    category: 'childcare',
    prefecture: '全国',
    tags: ['出産', '医療保険', '直接支払制度', '50万円'],
    eligibility: '公的医療保険の加入者または被扶養者が出産した場合に対象です。妊娠85日以上の出産が対象となります。',
    applicationPeriod: '出産時（直接支払制度を利用する場合は医療機関等で手続き）',
    description: '公的医療保険の加入者が出産したとき、子ども1人につき原則50万円が保険者から支給される制度です。直接支払制度を利用すると、出産施設への支払いに充てられます。',
    sections: [
      {
        heading: '支給額',
        content: '<p>公的医療保険の加入者が出産したとき、子ども1人につき原則50万円が支給されます。産科医療補償制度に加入していない医療機関等での出産では金額が異なる場合があります。</p>'
      },
      {
        heading: '直接支払制度',
        content: '<p>直接支払制度を利用すると、加入している保険者から出産施設へ出産育児一時金が直接支払われ、窓口負担は出産費用から支給額を差し引いた額になります。</p>'
      },
      {
        heading: '差額の取扱い',
        content: '<p>出産費用が出産育児一時金の支給額を下回る場合は、加入している医療保険から差額を受け取ることができます。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/shussan/index.html',
    sourceName: '厚生労働省 出産育児一時金等について',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/shussan/index.html',
      'https://www.bosei-navi.mhlw.go.jp/glossary/provide03.html'
    ],
    sourceNote: '支給対象、原則50万円、直接支払制度、差額受取を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ikuji-kyuugyo-kyuufukin',
    title: '育児休業給付金',
    organization: '厚生労働省・ハローワーク',
    type: 'national',
    maxAmount: '休業開始時賃金日額×支給日数の67%（181日目以降50%）',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '全国',
    tags: ['育児休業', '雇用保険', 'ハローワーク', '子育て支援'],
    eligibility: '雇用保険の被保険者が、原則1歳未満の子を養育するために育児休業を取得し、支給要件を満たす場合に対象です。',
    targetOccupation: '雇用保険の被保険者',
    applicationPeriod: '育児休業開始後、原則として2か月ごとに事業主経由で申請',
    description: '育児休業中の雇用保険被保険者に対し、休業開始時賃金日額と支給日数をもとに給付金を支給する制度です。育児休業開始から180日目までは67%、181日目以降は50%で計算されます。',
    sections: [
      {
        heading: '支給額',
        content: '<p>1支給単位期間ごとの給付額は、休業開始時賃金日額に支給日数を掛け、育児休業開始から180日目までは67%、181日目以降は50%を乗じて計算します。上限額があります。</p>'
      },
      {
        heading: '延長手続き',
        content: '<p>保育所等に入れないことを理由とする支給対象期間の延長については、令和7年4月から確認方法が変更されています。延長時には必要書類の添付が求められます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>通常は事業主を通じてハローワークに申請します。支給申請手続きの詳細は、厚生労働省の育児休業等給付ページと申請手続パンフレットを確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html',
    sourceName: '厚生労働省 育児休業等給付',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000135090_00001.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000160564_00040.html'
    ],
    sourceNote: '給付率、支給対象期間延長手続き、申請手続パンフレット案内を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kougaku-ryouyouhi',
    title: '高額療養費制度',
    organization: '厚生労働省・公的医療保険者',
    type: 'national',
    maxAmount: '自己負担限度額を超えた分を支給',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['医療費', '公的医療保険', '自己負担軽減', '高額療養費'],
    eligibility: '公的医療保険に加入し、同一月に医療機関や薬局の窓口で支払った医療費が年齢・所得に応じた自己負担限度額を超えた方が対象です。',
    applicationPeriod: '診療月後、加入している医療保険者へ申請（限度額適用認定証等で窓口負担を抑えられる場合あり）',
    description: '医療費の自己負担が重くなりすぎないよう、1か月の窓口負担が年齢・所得に応じた上限額を超えた場合に、その超えた額を支給する公的医療保険の制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>医療機関や薬局で支払う医療費が、同一月で自己負担限度額を超えた場合、その超えた額が高額療養費として支給されます。自己負担限度額は年齢や所得により異なります。</p>'
      },
      {
        heading: '多数回該当',
        content: '<p>直近12か月で高額療養費に該当した月が3か月以上ある場合、4か月目以降は多数回該当により自己負担限度額がさらに軽減されます。</p>'
      },
      {
        heading: '制度見直し',
        content: '<p>厚生労働省は、令和8年8月から年単位の上限額を設ける年間上限を新設し、長期療養者などの負担がさらに軽減されるケースがあると案内しています。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/juuyou/kougakuiryou/index.html',
    sourceName: '厚生労働省 高額療養費制度を利用される皆さまへ',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/juuyou/kougakuiryou/index.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/newpage_00014.html'
    ],
    sourceNote: '自己負担限度額、多数回該当、令和8年8月からの年間上限新設を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'jiritsu-shien-iryou',
    title: '自立支援医療',
    organization: '厚生労働省・自治体',
    type: 'national',
    maxAmount: '医療費の自己負担を軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['障害福祉', '精神通院医療', '更生医療', '育成医療'],
    eligibility: '精神通院医療、更生医療、育成医療の対象となる医療を継続的に必要とし、自治体の認定を受ける方が対象です。',
    applicationPeriod: '通年（自治体窓口で申請）',
    description: '心身の障害を除去・軽減するための医療について、医療費の自己負担を軽減する公費負担医療制度です。精神通院医療、更生医療、育成医療があります。',
    sections: [
      {
        heading: '制度の目的',
        content: '<p>自立支援医療は、心身の障害を除去・軽減するための医療について、医療費の自己負担額を軽減する公費負担医療制度です。</p>'
      },
      {
        heading: '支給対象',
        content: '<p>対象は、精神通院医療、更生医療、育成医療です。精神疾患の通院医療、身体障害の除去・軽減を目的とする手術等、障害のある児童への医療などが含まれます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は自治体の障害福祉担当窓口です。対象医療、指定医療機関、所得区分、自己負担上限額などは自治体の案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/shougaishahukushi/jiritsu/index.html',
    sourceName: '厚生労働省 自立支援医療',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/shougaishahukushi/jiritsu/index.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/shougaishahukushi/jiritsu/gaiyo.html'
    ],
    sourceNote: '制度概要、支給対象、対象者を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nanbyou-iryouhi-josei',
    title: '難病医療費助成制度',
    organization: '厚生労働省・都道府県等',
    type: 'national',
    maxAmount: '指定難病の医療費自己負担を軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['指定難病', '医療費助成', '保健所', '長期療養'],
    eligibility: '難病法に基づく指定難病にかかり、重症度分類等の要件を満たす方が対象です。申請・相談先は都道府県・指定都市の窓口です。',
    applicationPeriod: '通年（都道府県・指定都市の窓口で申請）',
    description: '指定難病について、長期療養による医療費の経済的負担が大きい患者を支援する制度です。医療費助成の相談・申請は、現在お住まいの都道府県・指定都市の窓口で行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>難病法に基づき指定される指定難病について、治療研究の推進と、長期療養による医療費負担の軽減を目的として実施される制度です。</p>'
      },
      {
        heading: '対象疾病',
        content: '<p>厚生労働省は、令和8年4月時点の指定難病の概要、診断基準、臨床調査個人票を公表しています。対象疾病や診断基準は公式一覧で確認します。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>医療費助成の相談・申請は、現在お住まいの都道府県・指定都市の相談窓口、保健所等に問い合わせます。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/nanbyou/index.html',
    sourceName: '厚生労働省 難病対策',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/nanbyou/index.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000084783.html',
      'https://www.mhlw.go.jp/stf/newpage_53881.html'
    ],
    sourceNote: '制度概要、相談・申請先、令和8年4月時点の指定難病情報を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shouji-mansei-tokutei-shippei',
    title: '小児慢性特定疾病医療費助成',
    organization: '厚生労働省・都道府県等',
    type: 'national',
    maxAmount: '小児慢性特定疾病の医療費自己負担を軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '全国',
    tags: ['小児慢性特定疾病', '医療費助成', '18歳未満', '子ども医療'],
    eligibility: '小児慢性特定疾病にかかっている18歳未満の児童が対象です。18歳到達時点で対象となっており、引き続き治療が必要な場合は20歳未満まで含まれます。',
    applicationPeriod: '通年（都道府県・指定都市・中核市等の窓口で申請）',
    description: '小児慢性特定疾病にかかっている児童等について、健全育成の観点から、患児家庭の医療費負担を軽減するため、その医療費の自己負担分の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小児慢性特定疾病にかかっている児童等について、患児家庭の医療費負担を軽減し、児童の健全育成を支援する制度です。</p>'
      },
      {
        heading: '対象年齢',
        content: '<p>対象は18歳未満の児童です。ただし、18歳到達時点で本制度の対象となっており、18歳到達後も引き続き治療が必要と認められる場合は20歳未満まで含まれます。</p>'
      },
      {
        heading: '実施主体',
        content: '<p>実施主体は都道府県、指定都市、中核市、児童相談所設置市です。医療費助成の相談・申請は現在お住まいの自治体窓口に問い合わせます。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000078973.html',
    sourceName: '厚生労働省 小児慢性特定疾病対策の概要',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000078973.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000084783_00001.html'
    ],
    sourceNote: '医療費助成の目的、対象年齢、実施主体、相談・申請先を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'seikatsu-hogo',
    title: '生活保護',
    organization: '厚生労働省・福祉事務所',
    type: 'national',
    maxAmount: '最低生活費と収入の差額を支給',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '全国',
    tags: ['生活支援', '最低生活保障', '福祉事務所', '生活困窮'],
    eligibility: '資産、能力、他制度、扶養などを活用しても収入が最低生活費に満たない世帯が対象です。必要な書類が揃っていなくても申請できます。',
    applicationPeriod: '通年（現在いる場所の福祉事務所で申請・相談）',
    description: '生活に困窮する方に対し、健康で文化的な最低限度の生活を保障するとともに自立を支援する制度です。保護費は最低生活費から収入を差し引いた差額として支給されます。',
    sections: [
      {
        heading: '支給される保護費',
        content: '<p>厚生労働大臣が定める基準で計算される最低生活費と世帯の収入を比較し、収入が最低生活費に満たない場合に、その差額が保護費として支給されます。</p>'
      },
      {
        heading: '申請について',
        content: '<p>生活保護は、現在いる場所の福祉事務所に申請・相談できます。必要な書類が揃っていなくても申請でき、住むところがない人でも申請できます。</p>'
      },
      {
        heading: '利用前の確認',
        content: '<p>預貯金や生活に利用していない資産、働く能力、年金・手当など他制度、扶養義務者からの援助などは、可能な範囲で生活費に充てることが求められます。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/seikatuhogo/index.html',
    sourceName: '厚生労働省 生活保護制度',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/seikatuhogo/index.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/seikatsuhogopage.html',
      'https://www.mhlw.go.jp/content/12002000/001508773.pdf'
    ],
    sourceNote: '支給額の考え方、申請に関する誤解、制度概要を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'seikatsu-konkyuusha-jiritsu-shien',
    title: '生活困窮者自立支援制度',
    organization: '厚生労働省・自治体',
    type: 'national',
    maxAmount: '相談支援・住まい支援等を状況に応じて提供',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '全国',
    tags: ['生活困窮', '相談支援', '住まい支援', '自立相談'],
    eligibility: '仕事や生活など様々な困難により生活に困窮している方が対象です。生活保護に至る前の段階で早期に支援を受けられます。',
    applicationPeriod: '通年（自治体の自立相談支援機関で相談）',
    description: '生活に困っている方の相談を受け、一人ひとりの状況に合わせて仕事の支援、家賃相当額の支給などの住まい支援、家計の立て直し支援などを提供する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>生活にお困りの方の相談を受け付け、一人ひとりの状況に合わせて、仕事、住まい、家計の立て直しなど様々な支援を提供します。</p>'
      },
      {
        heading: '対象者',
        content: '<p>仕事が見つからない、働きたくても働けない、家賃を払えない、住むところがない、社会に出るのに不安があるなど、生活上の困難を抱える方が対象です。</p>'
      },
      {
        heading: '相談方法',
        content: '<p>自治体の自立相談支援機関で相談します。相談内容に応じて、自立相談支援、住居確保給付金、家計改善支援、就労準備支援などを組み合わせます。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000059425.html',
    sourceName: '厚生労働省 生活困窮者自立支援制度',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000059425.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000073432.html'
    ],
    sourceNote: '制度概要、対象者、各事業、制度沿革を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nenkingata-seikatsu-shien-kyuufukin',
    title: '年金生活者支援給付金',
    organization: '厚生労働省・日本年金機構',
    type: 'national',
    maxAmount: '年金に上乗せ（種類・所得で異なる）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '全国',
    tags: ['年金', '低所得者支援', '老齢基礎年金', '障害基礎年金'],
    eligibility: '老齢基礎年金、障害基礎年金、遺族基礎年金を受給し、所得等の要件を満たす方が対象です。',
    applicationPeriod: '対象者への案内後に請求手続き。新たに年金を請求する方は年金請求とあわせて手続き',
    description: '年金生活者支援給付金は、消費税率引上げ分を活用し、年金を含めても所得が低い方の生活を支援するため、年金に上乗せして支給される給付金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>年金を含めても所得が低い方の生活を支援するため、年金に上乗せして支給される給付金です。老齢、障害、遺族の3種類があります。</p>'
      },
      {
        heading: '主な支給要件',
        content: '<p>老齢年金生活者支援給付金は、65歳以上で老齢基礎年金を受け、世帯全員が市町村民税非課税で、前年の年金収入等とその他所得の合計が基準以下であることなどが要件です。</p>'
      },
      {
        heading: '請求方法',
        content: '<p>対象となる可能性がある方には、日本年金機構から請求書が送付されます。新たに年金を請求する場合は、年金の請求手続きとあわせて行います。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/nenkinkyuufukin/',
    sourceName: '厚生労働省 年金生活者支援給付金制度',
    sourceUrls: [
      'https://www.mhlw.go.jp/nenkinkyuufukin/',
      'https://www.mhlw.go.jp/nenkinkyuufukin/system.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000143356_00002.html'
    ],
    sourceNote: '制度概要、3種類の給付金、老齢年金生活者支援給付金の主な支給要件を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hosougu-hi-shikyuu',
    title: '補装具費支給制度',
    organization: '厚生労働省・市町村',
    type: 'national',
    maxAmount: '基準額の範囲で購入・修理等を支給',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '全国',
    tags: ['障害福祉', '補装具', '車椅子', '義肢'],
    eligibility: '身体障害者手帳等により補装具が必要と認められ、市町村の判定・支給決定を受ける方が対象です。',
    applicationPeriod: '通年（購入・修理前に市町村へ申請）',
    description: '障害のある方が、身体機能を補完・代替し日常生活や社会生活を送るために必要な補装具の購入、借受け、修理にかかる費用を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>補装具費支給制度は、義肢、装具、車椅子、補聴器など、身体機能を補完・代替する用具の購入や修理等を支援する制度です。</p>'
      },
      {
        heading: '利用方法',
        content: '<p>原則として、補装具の購入・修理等を行う前に市町村へ申請し、判定・支給決定を受ける必要があります。支給決定前に購入したものは対象外となる場合があります。</p>'
      },
      {
        heading: '利用者負担',
        content: '<p>利用者負担や上限額、対象となる補装具の種目は、厚生労働省の基準や自治体の案内に従います。市町村の障害福祉窓口で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/shougaishahukushi/yogu/index.html',
    sourceName: '厚生労働省 福祉用具 補装具費支給制度',
    sourceUrls: [
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/shougaishahukushi/yogu/index.html'
    ],
    sourceNote: '補装具費支給制度、サービスの利用方法、利用者負担、基準・通知を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kougaku-kaigo-service-hi',
    title: '高額介護サービス費',
    organization: '厚生労働省・市町村',
    type: 'national',
    maxAmount: '介護サービス自己負担上限超過分を払い戻し',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '全国',
    tags: ['介護保険', '自己負担軽減', '高額介護サービス費', '市町村'],
    eligibility: '介護保険サービスの1か月の利用者負担合計が、所得区分に応じた負担限度額を超えた方が対象です。',
    applicationPeriod: '該当後、市町村からの案内または自治体窓口で申請',
    description: '介護保険サービスを利用した際、1か月に支払った利用者負担の合計が負担限度額を超えた場合に、超えた分が払い戻される制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>1か月に支払った介護保険サービスの利用者負担合計が、所得区分ごとの負担限度額を超えた場合、超過分が高額介護サービス費として払い戻されます。</p>'
      },
      {
        heading: '負担限度額',
        content: '<p>負担限度額は、生活保護受給者、住民税非課税世帯、一般所得、現役並み所得などの区分により異なります。最新の限度額は市町村または介護サービス情報公表システムの案内を確認します。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>対象となる場合、市町村から申請案内が届くことがあります。手続き方法や自動償還の有無は自治体により異なります。</p>'
      }
    ],
    officialUrl: 'https://www.kaigokensaku.mhlw.go.jp/commentary/fee.html',
    sourceName: '厚生労働省 介護サービス情報公表システム サービスにかかる利用料',
    sourceUrls: [
      'https://www.kaigokensaku.mhlw.go.jp/commentary/fee.html',
      'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/index.html'
    ],
    sourceNote: '高額介護サービス費の概要、負担限度額、介護保険関連の最新案内を厚生労働省公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
];
