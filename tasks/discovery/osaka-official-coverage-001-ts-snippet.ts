const osakaOfficial001Grants: Array<{
  slug: string;
  title: string;
  organization: string;
  maxAmount: string;
  maxAmountNum: number;
  category: Grant['category'];
  relatedCategories?: Grant['relatedCategories'];
  eligibility: string;
  applicationPeriod: string;
  deadlineDate?: string;
  officialUrl: string;
  sourceName: string;
  sourceUrls?: Grant['sourceUrls'];
}> = [
  {
    slug: "osaka-official-001-001-2026",
    title: "大阪市 市内拠点投資促進事業助成金",
    organization: "大阪市",
    maxAmount: "成長産業分野の拠点新設・増設費を助成",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "housing"
    ],
    eligibility: "大阪市内で成長産業分野の企業拠点を新設・増設し公式要件を満たす事業者",
    applicationPeriod: "令和8年度募集は2026年7月3日締切済み、追加募集は公式ページ更新に従う",
    officialUrl: "https://www.city.osaka.lg.jp/keizaisenryaku/page/0000663759.html",
    sourceName: "大阪市 市内拠点投資促進事業助成金"
  },
  {
    slug: "osaka-official-001-002-2026",
    title: "大阪市 本社機能立地促進助成金",
    organization: "大阪市",
    maxAmount: "建物賃借経費の一部を助成",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "housing"
    ],
    eligibility: "大阪市内に本社機能を有する事業所等を新たに設置し公式要件を満たす事業者",
    applicationPeriod: "令和8年度募集は2026年6月30日締切済み、随時申出等は公式ページに従う",
    officialUrl: "https://www.city.osaka.lg.jp/keizaisenryaku/page/0000579368.html",
    sourceName: "大阪市 本社機能立地促進助成金"
  },
  {
    slug: "osaka-official-001-003-2026",
    title: "大阪市 イノベーション創出支援補助金",
    organization: "大阪市",
    maxAmount: "上限200万円、補助率2分の1",
    maxAmountNum: 2000000,
    category: "employment",
    relatedCategories: [
      "education"
    ],
    eligibility: "産学連携を推進する組織を有する大学等で公式要件を満たす団体",
    applicationPeriod: "令和8年度の公式募集・交付要綱に従い申請",
    officialUrl: "https://www.city.osaka.lg.jp/keizaisenryaku/page/0000668847.html",
    sourceName: "大阪市 イノベーション創出支援補助金"
  },
  {
    slug: "osaka-official-001-004-2026",
    title: "大阪市 空飛ぶクルマ社会実装促進事業補助金",
    organization: "大阪市",
    maxAmount: "公式ページ記載の補助額を交付",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "空飛ぶクルマ関連事業に取り組み大阪市の公式要件を満たす事業者等",
    applicationPeriod: "令和8年度募集・交付決定は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.osaka.lg.jp/keizaisenryaku/page/0000677394.html",
    sourceName: "大阪市 空飛ぶクルマ社会実装促進事業補助金"
  },
  {
    slug: "osaka-official-001-005-2026",
    title: "大阪市 こども医療費助成制度",
    organization: "大阪市",
    maxAmount: "保険診療自己負担の一部を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "大阪市内の対象年齢のこどもで公式の医療費助成要件を満たす方",
    applicationPeriod: "医療証申請など公式手続に従う",
    officialUrl: "https://www.city.osaka.lg.jp/kodomo/page/0000369443.html",
    sourceName: "大阪市 こども医療費助成制度"
  },
  {
    slug: "osaka-official-001-006-2026",
    title: "大阪市 ひとり親家庭等医療費助成",
    organization: "大阪市",
    maxAmount: "1医療機関1日最大500円負担など医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare",
      "living"
    ],
    eligibility: "大阪市内のひとり親家庭等で公式要件を満たす方",
    applicationPeriod: "医療証申請など公式手続に従う",
    officialUrl: "https://www.city.osaka.lg.jp/kodomo/page/0000467850.html",
    sourceName: "大阪市 ひとり親家庭等医療費助成"
  },
  {
    slug: "osaka-official-001-007-2026",
    title: "大阪市 児童手当",
    organization: "大阪市",
    maxAmount: "児童の年齢・人数に応じて手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "大阪市内で児童を養育し公式の児童手当要件を満たす方",
    applicationPeriod: "出生・転入時などに認定請求、令和8年度支給日は公式ページに記載",
    officialUrl: "https://www.city.osaka.lg.jp/kodomo/page/0000370608.html",
    sourceName: "大阪市 児童手当"
  },
  {
    slug: "osaka-official-001-008-2026",
    title: "大阪市 不育症検査費助成",
    organization: "大阪市",
    maxAmount: "上限6万円、対象検査費の10分の7",
    maxAmountNum: 60000,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "対象となる不育症検査を受け、公式要件を満たす方",
    applicationPeriod: "検査後、公式ページ記載の申請方法に従い申請",
    officialUrl: "https://www.city.osaka.lg.jp/kodomo/page/0000534944.html",
    sourceName: "大阪市 不育症検査費助成"
  },
  {
    slug: "osaka-official-001-009-2026",
    title: "大阪市 不妊検査費助成事業",
    organization: "大阪市",
    maxAmount: "不妊検査費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "子を望む夫婦等で不妊検査を受け公式要件を満たす方",
    applicationPeriod: "検査後、公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.city.osaka.lg.jp/kodomo/page/0000591153.html",
    sourceName: "大阪市 不妊検査費助成事業"
  },
  {
    slug: "osaka-official-001-010-2026",
    title: "大阪市 新婚・子育て世帯向け分譲住宅購入融資利子補給制度",
    organization: "大阪市",
    maxAmount: "最大50万円（年最大10万円、最長5年）",
    maxAmountNum: 500000,
    category: "housing",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "大阪市内で初めて住宅を取得する新婚世帯または子育て世帯で公式要件を満たす方",
    applicationPeriod: "公式ページ記載の申込資格・受付手続に従う",
    officialUrl: "https://www.city.osaka.lg.jp/toshiseibi/page/0000110240.html",
    sourceName: "大阪市 新婚・子育て世帯向け分譲住宅購入融資利子補給制度"
  },
  {
    slug: "osaka-official-001-011-2026",
    title: "大阪市 住宅省エネ改修促進事業",
    organization: "大阪市",
    maxAmount: "住宅省エネ改修費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "大阪市内の住宅で省エネ改修を行い公式要件を満たす所有者等",
    applicationPeriod: "令和8年4月1日から交付申請受付開始、予算等は公式ページに従う",
    officialUrl: "https://www.city.osaka.lg.jp/toshiseibi/page/0000605413.html",
    sourceName: "大阪市 住宅省エネ改修促進事業"
  },
  {
    slug: "osaka-official-001-012-2026",
    title: "大阪市 子育て世帯等向け民間賃貸住宅改修促進事業",
    organization: "大阪市",
    maxAmount: "民間賃貸住宅改修費の一部を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "子育て世帯等の入居に資する改修を行う民間賃貸住宅オーナー等",
    applicationPeriod: "令和8年4月1日から交付申請受付開始、公式ページの手続に従う",
    officialUrl: "https://www.city.osaka.lg.jp/toshiseibi/page/0000267596.html",
    sourceName: "大阪市 子育て世帯等向け民間賃貸住宅改修促進事業"
  },
  {
    slug: "osaka-official-001-013-2026",
    title: "大阪市 建替建設費補助制度（戸建住宅への建替え）",
    organization: "大阪市",
    maxAmount: "設計費・解体費等の一部を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "未接道敷地等を解消して戸建住宅へ建替えるなど公式要件を満たす方",
    applicationPeriod: "事前相談・公式手続判定ナビ等に従い申請",
    officialUrl: "https://www.city.osaka.lg.jp/toshiseibi/page/0000531975.html",
    sourceName: "大阪市 建替建設費補助制度（戸建住宅への建替え）"
  },
  {
    slug: "osaka-official-001-014-2026",
    title: "大阪市 狭あい道路沿道老朽住宅除却促進制度",
    organization: "大阪市",
    maxAmount: "老朽住宅除却費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "狭あい道路沿道の老朽住宅を除却し公式要件を満たす所有者等",
    applicationPeriod: "事前相談・補助金申請手続に従う",
    officialUrl: "https://www.city.osaka.lg.jp/toshiseibi/page/0000531835.html",
    sourceName: "大阪市 狭あい道路沿道老朽住宅除却促進制度"
  },
  {
    slug: "osaka-official-001-015-2026",
    title: "大阪市 年金生活者支援給付金",
    organization: "大阪市",
    maxAmount: "令和8年度は月額5,620円等",
    maxAmountNum: 5620,
    category: "living",
    relatedCategories: [
      "nursing"
    ],
    eligibility: "老齢・障がい・遺族基礎年金受給者で所得等の公式要件を満たす方",
    applicationPeriod: "日本年金機構等の請求手続に従う",
    officialUrl: "https://www.city.osaka.lg.jp/fukushi/page/0000466974.html",
    sourceName: "大阪市 年金生活者支援給付金"
  },
  {
    slug: "osaka-official-001-016-2026",
    title: "大阪市 社会福祉施設等物価高騰対応支援金",
    organization: "大阪市",
    maxAmount: "入所25,000円/定員、通所20,000円/定員等",
    maxAmountNum: 25000,
    category: "living",
    relatedCategories: [
      "medical"
    ],
    eligibility: "大阪市内の対象社会福祉施設等で公式要件を満たす事業者",
    applicationPeriod: "令和8年2月26日17時から3月12日18時まで申請受付",
    officialUrl: "https://www.city.osaka.lg.jp/fukushi/page/0000646462.html",
    sourceName: "大阪市 社会福祉施設等物価高騰対応支援金"
  },
  {
    slug: "osaka-official-001-017-2026",
    title: "堺市 中小企業デジタル化促進補助金",
    organization: "堺市",
    maxAmount: "デジタル化経費の一部を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "education"
    ],
    eligibility: "堺市内中小企業で産業DX支援等を受け、公式要件を満たす事業者",
    applicationPeriod: "相談受付締切は2026年7月17日17時、交付決定予定等は公式ページに従う",
    officialUrl: "https://www.city.sakai.lg.jp/sangyo/shienyuushi/dx_shien/digitalka.html",
    sourceName: "堺市 中小企業デジタル化促進補助金"
  },
  {
    slug: "osaka-official-001-018-2026",
    title: "堺市 新事業チャレンジ支援補助金",
    organization: "堺市",
    maxAmount: "上限300万円、補助率2分の1",
    maxAmountNum: 3000000,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "堺市内中小企業者で新分野進出等に取り組み公式要件を満たす事業者",
    applicationPeriod: "令和8年4月1日から令和9年3月31日までの事業期間、公式募集要領に従う",
    officialUrl: "https://www.city.sakai.lg.jp/sangyo/shienyuushi/chusho/proddev/monochalle.html",
    sourceName: "堺市 新事業チャレンジ支援補助金"
  },
  {
    slug: "osaka-official-001-019-2026",
    title: "堺市 中小企業DXリスキリング補助金",
    organization: "堺市",
    maxAmount: "研修受講料等を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "education"
    ],
    eligibility: "堺市内中小企業の社員等にDX関連研修を受講させるなど公式要件を満たす事業者",
    applicationPeriod: "令和8年度の公式ページ・募集要領に従い申請",
    officialUrl: "https://www.city.sakai.lg.jp/sangyo/shienyuushi/dx_shien/reskilling.html",
    sourceName: "堺市 中小企業DXリスキリング補助金"
  },
  {
    slug: "osaka-official-001-020-2026",
    title: "堺市 スマートハウス化等支援事業",
    organization: "堺市",
    maxAmount: "予算額2,500万円内で対象設備を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "市内住宅等に太陽光発電システム等を導入し公式要件を満たす方",
    applicationPeriod: "令和8年度申請受付中、予算到達時は終了",
    officialUrl: "https://www.city.sakai.lg.jp/kurashi/gomi/ondanka/smarthouse/sumarthouse/index.html",
    sourceName: "堺市 スマートハウス化等支援事業"
  },
  {
    slug: "osaka-official-001-021-2026",
    title: "堺市 ZEH支援事業",
    organization: "堺市",
    maxAmount: "ZEH取得費の一部を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "堺市内でZEHを取得し、外皮性能・一次エネルギー削減率等の公式要件を満たす方",
    applicationPeriod: "令和8年度申請受付中、対象引渡期間等は公式ページに従う",
    officialUrl: "https://www.city.sakai.lg.jp/kurashi/gomi/ondanka/smarthouse/zeh_hojyo.html",
    sourceName: "堺市 ZEH支援事業"
  },
  {
    slug: "osaka-official-001-022-2026",
    title: "堺市 事業所向け省エネ設備等導入支援事業補助金",
    organization: "堺市",
    maxAmount: "省エネ設備等導入費を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "堺市内事業所で省エネ設備等を導入し公式要件を満たす事業者",
    applicationPeriod: "令和8年度募集・予算状況は公式ページに従う",
    officialUrl: "https://www.city.sakai.lg.jp/kurashi/gomi/ondanka/oshirase/hojokin_shien/index.html",
    sourceName: "堺市 事業所向け省エネ設備等導入支援事業補助金"
  },
  {
    slug: "osaka-official-001-023-2026",
    title: "堺市 堺未来応援奨学金（高校生）",
    organization: "堺市",
    maxAmount: "給付型奨学金",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "経済的理由により高校等の修学に困る方で公式審査要件を満たす高校生等",
    applicationPeriod: "令和8年度は9月頃から申請予定、詳細は公式更新に従う",
    officialUrl: "https://www.city.sakai.lg.jp/kosodate/kyoiku/tetsuzuki/hojo/sakaisisyougakukinnseido.html",
    sourceName: "堺市 堺未来応援奨学金（高校生）"
  },
  {
    slug: "osaka-official-001-024-2026",
    title: "堺市 物価高対応子育て応援手当",
    organization: "堺市",
    maxAmount: "公式ページ記載の手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "堺市内の対象児童・保護者で公式要件を満たす方",
    applicationPeriod: "申請受付終了、支給日等は公式ページ記載に従う",
    officialUrl: "https://www.city.sakai.lg.jp/kosodate/hughug/kosodatekankyo/kosodate/kosodateouenteate.html",
    sourceName: "堺市 物価高対応子育て応援手当"
  },
  {
    slug: "osaka-official-001-025-2026",
    title: "岸和田市 不良空家除却事業補助金",
    organization: "岸和田市",
    maxAmount: "不良空家除却費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "状態の悪い空家の解体について公式要件を満たす所有者等",
    applicationPeriod: "事業着手前に公式手続に従い申請",
    officialUrl: "https://www.city.kishiwada.lg.jp/page/122-akiya-seido.html",
    sourceName: "岸和田市 不良空家除却事業補助金"
  },
  {
    slug: "osaka-official-001-026-2026",
    title: "岸和田市 木造住宅除却事業補助金",
    organization: "岸和田市",
    maxAmount: "耐震性不足の木造住宅除却費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "耐震性不足の木造住宅の解体について公式要件を満たす所有者等",
    applicationPeriod: "事業着手前に公式手続に従い申請",
    officialUrl: "https://www.city.kishiwada.lg.jp/page/122-akiya-seido.html",
    sourceName: "岸和田市 木造住宅除却事業補助金"
  },
  {
    slug: "osaka-official-001-027-2026",
    title: "岸和田市 空家リフォーム事業補助金",
    organization: "岸和田市",
    maxAmount: "空家リフォーム費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "転入に伴い空家をリフォームするなど公式要件を満たす方",
    applicationPeriod: "事業着手前に公式手続に従い申請",
    officialUrl: "https://www.city.kishiwada.lg.jp/page/122-akiya-seido.html",
    sourceName: "岸和田市 空家リフォーム事業補助金"
  },
  {
    slug: "osaka-official-001-028-2026",
    title: "岸和田市 耐震診断に関する補助制度",
    organization: "岸和田市",
    maxAmount: "耐震診断費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "岸和田市内の対象住宅等で耐震診断補助の公式要件を満たす所有者等",
    applicationPeriod: "令和8年度補助制度として公式ページ記載の手続に従う",
    officialUrl: "https://www.city.kishiwada.lg.jp/life/1/10/51/",
    sourceName: "岸和田市 耐震診断に関する補助制度"
  },
  {
    slug: "osaka-official-001-029-2026",
    title: "岸和田市 子ども医療費助成",
    organization: "岸和田市",
    maxAmount: "1医療機関1日最大500円負担など医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "岸和田市内の対象年齢の子どもで公式要件を満たす方",
    applicationPeriod: "医療証交付・払い戻し等の公式手続に従う",
    officialUrl: "https://www.city.kishiwada.lg.jp/page/121-kodomoiryoujosei.html",
    sourceName: "岸和田市 子ども医療費助成"
  },
  {
    slug: "osaka-official-001-030-2026",
    title: "岸和田市 住居確保給付金",
    organization: "岸和田市",
    maxAmount: "家賃相当額・転居費用を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "離職・廃業等により住居を失うおそれがあり、収入・資産等の公式要件を満たす方",
    applicationPeriod: "相談・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.kishiwada.lg.jp/page/31-juukaku.html",
    sourceName: "岸和田市 住居確保給付金"
  },
  {
    slug: "osaka-official-001-031-2026",
    title: "豊中市 スマートハウス支援補助金",
    organization: "豊中市",
    maxAmount: "住宅省エネ設備等を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "豊中市内でスマートハウス支援補助の対象設備等を導入し公式要件を満たす方",
    applicationPeriod: "2026年5月7日から2027年3月1日まで、予算到達時終了",
    officialUrl: "https://www.city.toyonaka.osaka.jp/machi/hojo_joseikin/kankyo_hojyo_jyosei/smarthouse.html",
    sourceName: "豊中市 スマートハウス支援補助金"
  },
  {
    slug: "osaka-official-001-032-2026",
    title: "豊中市 人材確保促進補助金",
    organization: "豊中市",
    maxAmount: "上限10万円から20万円等、補助率2分の1",
    maxAmountNum: 200000,
    category: "employment",
    relatedCategories: [
      "education"
    ],
    eligibility: "就業規則整備・職場環境づくり・人材育成等に取り組み公式要件を満たす市内事業者",
    applicationPeriod: "2026年4月1日から2027年3月31日必着、予算上限到達時終了",
    officialUrl: "https://www.city.toyonaka.osaka.jp/machi/sangyoushinkou/hojokin/R8jinzaikakuho.html",
    sourceName: "豊中市 人材確保促進補助金"
  },
  {
    slug: "osaka-official-001-033-2026",
    title: "豊中市 スタートアップ支援補助金",
    organization: "豊中市",
    maxAmount: "公式募集要領記載の補助額",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "豊中市内で創業・スタートアップに取り組み公式要件を満たす事業者等",
    applicationPeriod: "申込期限は2026年3月27日正午必着、受付終了",
    officialUrl: "https://www.city.toyonaka.osaka.jp/machi/sangyoushinkou/hojokin/r8startuphojokin.html",
    sourceName: "豊中市 スタートアップ支援補助金"
  },
  {
    slug: "osaka-official-001-034-2026",
    title: "豊中市 チャレンジ事業補助金",
    organization: "豊中市",
    maxAmount: "公式募集要領記載の補助額",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "豊中市内で新規事業等に取り組み公式要件を満たす事業者等",
    applicationPeriod: "申込期限は2026年3月27日正午必着、受付終了",
    officialUrl: "https://www.city.toyonaka.osaka.jp/machi/sangyoushinkou/hojokin/r8challemgehojokin.html",
    sourceName: "豊中市 チャレンジ事業補助金"
  },
  {
    slug: "osaka-official-001-035-2026",
    title: "豊中市 子育て支援サービス事業補助金",
    organization: "豊中市",
    maxAmount: "公式募集要領記載の補助額",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "employment"
    ],
    eligibility: "子育て支援サービス事業を実施し公式要件を満たす事業者等",
    applicationPeriod: "申込期限は2026年3月27日正午必着",
    officialUrl: "https://www.city.toyonaka.osaka.jp/machi/sangyoushinkou/hojokin/r8kosodateshienhojo.html",
    sourceName: "豊中市 子育て支援サービス事業補助金"
  },
  {
    slug: "osaka-official-001-036-2026",
    title: "豊中市 とよなか保育士助成金",
    organization: "豊中市",
    maxAmount: "公式ページ記載の助成金を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "employment"
    ],
    eligibility: "豊中市の保育士助成金の公式要件を満たす保育士等",
    applicationPeriod: "請求受付は2026年3月16日9時から4月15日17時まで",
    officialUrl: "https://www.city.toyonaka.osaka.jp/kosodate/kosodatetorikumi/hoikushiteate.html",
    sourceName: "豊中市 とよなか保育士助成金"
  },
  {
    slug: "osaka-official-001-037-2026",
    title: "豊中市 住居確保給付金",
    organization: "豊中市",
    maxAmount: "世帯人数に応じ家賃額を補助（上限あり）",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "離職・休業等により住居を失うおそれがあり、収入・資産・求職活動等の公式要件を満たす方",
    applicationPeriod: "事前面談予約のうえ公式申請手続に従う",
    officialUrl: "https://www.city.toyonaka.osaka.jp/kurashi/roudou/kurashi_topix/jyuukyo.html",
    sourceName: "豊中市 住居確保給付金"
  },
  {
    slug: "osaka-official-001-038-2026",
    title: "豊中市 不妊症治療費等助成事業",
    organization: "豊中市",
    maxAmount: "夫婦1組1年度上限5万円",
    maxAmountNum: 50000,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "保険診療で不妊症検査・治療を受け、公式要件を満たす夫婦等",
    applicationPeriod: "1年度に1回、複数回分をまとめて公式手続に従い申請",
    officialUrl: "https://www.city.toyonaka.osaka.jp/kenko/kenko_hokeneisei/boshi/iryohijosei/2022-hunin.html",
    sourceName: "豊中市 不妊症治療費等助成事業"
  },
  {
    slug: "osaka-official-001-039-2026",
    title: "豊中市 不育症治療費等助成事業",
    organization: "豊中市",
    maxAmount: "1年度上限30万円",
    maxAmountNum: 300000,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "不育症検査・治療を受け公式要件を満たす方",
    applicationPeriod: "検査・治療終了日の翌年度6月末日までに申込",
    officialUrl: "https://www.city.toyonaka.osaka.jp/kenko/kenko_hokeneisei/boshi/iryohijosei/20210401fuikusho.html",
    sourceName: "豊中市 不育症治療費等助成事業"
  },
  {
    slug: "osaka-official-001-040-2026",
    title: "豊中市 木造住宅除却補助制度",
    organization: "豊中市",
    maxAmount: "上限40万円",
    maxAmountNum: 400000,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "昭和56年5月31日以前建築など耐震性不足の木造住宅を所有し公式要件を満たす方",
    applicationPeriod: "事前に建築審査課へ相談し、窓口・郵送・電子申込で申請",
    officialUrl: "https://www.city.toyonaka.osaka.jp/machi/kenchiku_kaihatsu/taisin/jokyaku.html",
    sourceName: "豊中市 木造住宅除却補助制度"
  },
  {
    slug: "osaka-official-001-041-2026",
    title: "豊中市 木造住宅耐震設計・耐震改修補助制度",
    organization: "豊中市",
    maxAmount: "耐震設計・耐震改修費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "豊中市内の対象木造住宅で耐震設計・耐震改修の公式要件を満たす所有者等",
    applicationPeriod: "耐震技術者による設計・工事監理等、公式手引きに従い申請",
    officialUrl: "https://www.city.toyonaka.osaka.jp/machi/kenchiku_kaihatsu/taisin/mokuzoukaisyuu.html",
    sourceName: "豊中市 木造住宅耐震設計・耐震改修補助制度"
  },
  {
    slug: "osaka-official-001-042-2026",
    title: "豊中市 ひとり親家庭のための手当・助成・支援",
    organization: "豊中市",
    maxAmount: "各制度により手当・助成を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living",
      "employment"
    ],
    eligibility: "豊中市内のひとり親家庭で各制度の公式要件を満たす方",
    applicationPeriod: "事前相談・オンライン申込など各制度の公式手続に従う",
    officialUrl: "https://www.city.toyonaka.osaka.jp/kosodate/teate_josei/hitorioya/index.html",
    sourceName: "豊中市 ひとり親家庭のための手当・助成・支援"
  }
];

