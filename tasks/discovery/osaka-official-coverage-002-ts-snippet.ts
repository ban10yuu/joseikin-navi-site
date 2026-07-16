const osakaOfficial002Grants: Array<{
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
    slug: "osaka-official-002-001-2026",
    title: "池田市 自転車乗車用ヘルメット購入費補助事業",
    organization: "池田市",
    maxAmount: "自転車用ヘルメット購入費を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "池田市内で自転車用ヘルメットを購入し公式要件を満たす方",
    applicationPeriod: "令和8年7月実施の公式受付案内に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/19574.html",
    sourceName: "池田市 自転車乗車用ヘルメット購入費補助事業"
  },
  {
    slug: "osaka-official-002-002-2026",
    title: "池田市 住宅に関する助成・補助",
    organization: "池田市",
    maxAmount: "住宅関連助成・補助制度により異なる",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "池田市内の住宅について各助成・補助制度の公式要件を満たす所有者等",
    applicationPeriod: "各住宅助成・補助制度の公式受付案内に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/josei/index.html",
    sourceName: "池田市 住宅に関する助成・補助"
  },
  {
    slug: "osaka-official-002-003-2026",
    title: "池田市 家庭用生ごみ処理機器購入助成制度",
    organization: "池田市",
    maxAmount: "家庭用生ごみ処理機器購入費を助成",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "housing"
    ],
    eligibility: "池田市内で家庭用生ごみ処理機器を購入し公式要件を満たす方",
    applicationPeriod: "令和8年度の公式ページ記載の手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18830.html",
    sourceName: "池田市 家庭用生ごみ処理機器購入助成制度"
  },
  {
    slug: "osaka-official-002-004-2026",
    title: "池田市 野良猫の不妊・去勢手術費補助金",
    organization: "池田市",
    maxAmount: "野良猫の不妊・去勢手術費を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [],
    eligibility: "池田市内で野良猫の不妊・去勢手術を行い公式要件を満たす方",
    applicationPeriod: "手術実施・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18831.html",
    sourceName: "池田市 野良猫の不妊・去勢手術費補助金"
  },
  {
    slug: "osaka-official-002-005-2026",
    title: "池田市 高齢者運転免許証自主返納支援事業",
    organization: "池田市",
    maxAmount: "高齢者の自主返納支援を実施",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "nursing"
    ],
    eligibility: "運転免許証を自主返納し公式要件を満たす高齢者等",
    applicationPeriod: "自主返納後、公式ページ記載の手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18835.html",
    sourceName: "池田市 高齢者運転免許証自主返納支援事業"
  },
  {
    slug: "osaka-official-002-006-2026",
    title: "池田市 がん患者のためのアピアランスケア助成",
    organization: "池田市",
    maxAmount: "アピアランスケア用品購入費等を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "living"
    ],
    eligibility: "がん治療に伴う外見変化に対し公式要件を満たす方",
    applicationPeriod: "購入・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18833.html",
    sourceName: "池田市 がん患者のためのアピアランスケア助成"
  },
  {
    slug: "osaka-official-002-007-2026",
    title: "池田市 骨髄等移植ドナー支援事業助成金",
    organization: "池田市",
    maxAmount: "骨髄等移植ドナーへ助成金を支給",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "living"
    ],
    eligibility: "骨髄等を提供し公式要件を満たすドナー等",
    applicationPeriod: "提供後、公式ページ記載の手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18832.html",
    sourceName: "池田市 骨髄等移植ドナー支援事業助成金"
  },
  {
    slug: "osaka-official-002-008-2026",
    title: "池田市 不育症治療費助成事業",
    organization: "池田市",
    maxAmount: "不育症治療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "不育症治療を受け池田市の公式要件を満たす方",
    applicationPeriod: "治療後、公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18838.html",
    sourceName: "池田市 不育症治療費助成事業"
  },
  {
    slug: "osaka-official-002-009-2026",
    title: "池田市 空き家等老朽木造住宅の除却補助",
    organization: "池田市",
    maxAmount: "老朽木造住宅等の除却費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "空き家等老朽木造住宅を除却し公式要件を満たす所有者等",
    applicationPeriod: "令和8年度制度として事業着手前に公式手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18841.html",
    sourceName: "池田市 空き家等老朽木造住宅の除却補助"
  },
  {
    slug: "osaka-official-002-010-2026",
    title: "池田市 卵子凍結費用助成事業",
    organization: "池田市",
    maxAmount: "卵子凍結費用を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "卵子凍結を行い公式要件を満たす方",
    applicationPeriod: "公式ページ記載の申請手続・期限に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18839.html",
    sourceName: "池田市 卵子凍結費用助成事業"
  },
  {
    slug: "osaka-official-002-011-2026",
    title: "池田市 公益活動助成金",
    organization: "池田市",
    maxAmount: "公益活動費を助成",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "education"
    ],
    eligibility: "池田市内で公益活動を行い公式要件を満たす団体等",
    applicationPeriod: "令和8年度申請案内に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18827.html",
    sourceName: "池田市 公益活動助成金"
  },
  {
    slug: "osaka-official-002-012-2026",
    title: "池田市 教育資金融資利息補助",
    organization: "池田市",
    maxAmount: "教育資金融資の利息を一部補助",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "教育資金への融資を受け公式要件を満たす方",
    applicationPeriod: "融資利用後、公式手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18829.html",
    sourceName: "池田市 教育資金融資利息補助"
  },
  {
    slug: "osaka-official-002-013-2026",
    title: "池田市 老人クラブ活動等社会活動促進事業補助金",
    organization: "池田市",
    maxAmount: "老人クラブ活動等を補助",
    maxAmountNum: 0,
    category: "nursing",
    relatedCategories: [
      "living"
    ],
    eligibility: "老人クラブ活動等で公式要件を満たす団体",
    applicationPeriod: "公式ページ記載の申請・実績報告手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/kurashi_tetsuduki/hojokin/18836.html",
    sourceName: "池田市 老人クラブ活動等社会活動促進事業補助金"
  },
  {
    slug: "osaka-official-002-014-2026",
    title: "池田市 私立保育所保育士補助金制度",
    organization: "池田市",
    maxAmount: "保育士向け補助金を支給",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "池田市内の私立保育所等で働く保育士等で公式要件を満たす方",
    applicationPeriod: "勤務・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.ikeda.osaka.jp/boshu/13500.html",
    sourceName: "池田市 私立保育所保育士補助金制度"
  },
  {
    slug: "osaka-official-002-015-2026",
    title: "吹田市 子ども医療費助成制度",
    organization: "吹田市",
    maxAmount: "子どもの医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "吹田市内に住所を有し健康保険資格がある対象年齢の児童",
    applicationPeriod: "医療証交付・償還払い等の公式手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kosodate/1018219/1018222/1005604.html",
    sourceName: "吹田市 子ども医療費助成制度"
  },
  {
    slug: "osaka-official-002-016-2026",
    title: "吹田市 幼児教育・保育の無償化（施設等利用費）",
    organization: "吹田市",
    maxAmount: "月額上限37,000円等の施設等利用費",
    maxAmountNum: 37000,
    category: "childcare",
    relatedCategories: [
      "education"
    ],
    eligibility: "施設等利用給付認定を受けた子どもなど公式要件を満たす方",
    applicationPeriod: "利用・請求にあたり公式手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kosodate/1018230/1018245/1018246/1021141.html",
    sourceName: "吹田市 幼児教育・保育の無償化（施設等利用費）"
  },
  {
    slug: "osaka-official-002-017-2026",
    title: "吹田市 妊婦のための支援給付",
    organization: "吹田市",
    maxAmount: "妊娠時5万円、胎児1人あたり5万円",
    maxAmountNum: 50000,
    category: "childcare",
    relatedCategories: [
      "medical"
    ],
    eligibility: "妊娠届を提出し申請時点で吹田市に住民票がある方など",
    applicationPeriod: "妊娠届出・面談等にあわせ公式手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kosodate/1018205/1018206/1037662.html",
    sourceName: "吹田市 妊婦のための支援給付"
  },
  {
    slug: "osaka-official-002-018-2026",
    title: "吹田市 住居確保給付金",
    organization: "吹田市",
    maxAmount: "家賃相当額を支給",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "離職・休業等による収入減少で住居喪失またはそのおそれがあり公式要件を満たす方",
    applicationPeriod: "相談・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kenko/1018735/1018736/1014741.html",
    sourceName: "吹田市 住居確保給付金"
  },
  {
    slug: "osaka-official-002-019-2026",
    title: "吹田市 不育症治療費用助成",
    organization: "吹田市",
    maxAmount: "1年度あたり上限30万円",
    maxAmountNum: 300000,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "国内医療機関で対象不育症治療を受け公式要件を満たす方",
    applicationPeriod: "治療後、公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kosodate/1018205/1018215/1015312.html",
    sourceName: "吹田市 不育症治療費用助成"
  },
  {
    slug: "osaka-official-002-020-2026",
    title: "吹田市 私立幼稚園給食費補助金",
    organization: "吹田市",
    maxAmount: "副食費相当分を補助",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "education"
    ],
    eligibility: "私学助成幼稚園利用児のうち低所得世帯等または第3子以降など公式要件を満たす方",
    applicationPeriod: "前期・後期など公式ページ記載の手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kosodate/1018219/1018222/1005675.html",
    sourceName: "吹田市 私立幼稚園給食費補助金"
  },
  {
    slug: "osaka-official-002-021-2026",
    title: "吹田市 中小企業WEBデザイン活用事業補助金",
    organization: "吹田市",
    maxAmount: "WEBデザイン活用費を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "education"
    ],
    eligibility: "吹田市内に主たる事業所を有する中小企業者",
    applicationPeriod: "2026年5月21日から12月11日までの受付期間に従う",
    officialUrl: "https://www.city.suita.osaka.jp/sangyo/1018028/1018029/1018030/1011569.html",
    sourceName: "吹田市 中小企業WEBデザイン活用事業補助金"
  },
  {
    slug: "osaka-official-002-022-2026",
    title: "吹田市 介護保険住宅改修費の支給",
    organization: "吹田市",
    maxAmount: "同一住居20万円までを基準に保険給付",
    maxAmountNum: 200000,
    category: "nursing",
    relatedCategories: [
      "housing"
    ],
    eligibility: "要支援・要介護認定を受け在宅で生活する方など公式要件を満たす方",
    applicationPeriod: "改修前申請など介護保険の公式手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kenko/1018701/1018705/1014513.html",
    sourceName: "吹田市 介護保険住宅改修費の支給"
  },
  {
    slug: "osaka-official-002-023-2026",
    title: "吹田市 住宅省エネ2026キャンペーン案内",
    organization: "吹田市",
    maxAmount: "国の住宅省エネ2026支援を案内",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "住宅省エネ2026キャンペーンの対象工事・設備等の公式要件を満たす方",
    applicationPeriod: "国制度・公式案内の申請受付に従う",
    officialUrl: "https://www.city.suita.osaka.jp/sangyo/1018079/1018437/1025998.html",
    sourceName: "吹田市 住宅省エネ2026キャンペーン案内"
  },
  {
    slug: "osaka-official-002-024-2026",
    title: "吹田市 家具等転倒防止器具の設置助成",
    organization: "吹田市",
    maxAmount: "家具等転倒防止器具の設置を助成",
    maxAmountNum: 0,
    category: "nursing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "高齢者等で家具転倒防止器具設置助成の公式要件を満たす方",
    applicationPeriod: "申請・設置は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kenko/1018656/1018665/1014555.html",
    sourceName: "吹田市 家具等転倒防止器具の設置助成"
  },
  {
    slug: "osaka-official-002-025-2026",
    title: "吹田市 耐震改修の補助制度",
    organization: "吹田市",
    maxAmount: "耐震改修費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "吹田市内の対象建築物で耐震改修補助の公式要件を満たす所有者等",
    applicationPeriod: "事前相談・交付申請など公式手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kurashi/1018501/1018468/1018482/1018483/1010119.html",
    sourceName: "吹田市 耐震改修の補助制度"
  },
  {
    slug: "osaka-official-002-026-2026",
    title: "吹田市 緊急通報システム・人感センサー",
    organization: "吹田市",
    maxAmount: "緊急通報装置等を貸与・支援",
    maxAmountNum: 0,
    category: "nursing",
    relatedCategories: [
      "living"
    ],
    eligibility: "ひとり暮らし高齢者等で公式要件を満たす方",
    applicationPeriod: "利用申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.suita.osaka.jp/kenko/1018656/1018665/1014564.html",
    sourceName: "吹田市 緊急通報システム・人感センサー"
  },
  {
    slug: "osaka-official-002-027-2026",
    title: "泉大津市 木造住宅耐震診断・設計・改修補助",
    organization: "泉大津市",
    maxAmount: "耐震診断・設計・改修費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "泉大津市内の木造住宅で公式要件を満たす所有者等",
    applicationPeriod: "事前相談・公式申請手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/11882.html",
    sourceName: "泉大津市 木造住宅耐震診断・設計・改修補助"
  },
  {
    slug: "osaka-official-002-028-2026",
    title: "泉大津市 空家除却補助",
    organization: "泉大津市",
    maxAmount: "空家除却費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "泉大津市内の空家を除却し公式要件を満たす所有者等",
    applicationPeriod: "除却着手前に公式手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/11883.html",
    sourceName: "泉大津市 空家除却補助"
  },
  {
    slug: "osaka-official-002-029-2026",
    title: "泉大津市 スポーツ競技大会出場奨励金",
    organization: "泉大津市",
    maxAmount: "競技大会出場奨励金を交付",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "living"
    ],
    eligibility: "スポーツ競技大会に出場し公式要件を満たす方",
    applicationPeriod: "大会出場・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/11897.html",
    sourceName: "泉大津市 スポーツ競技大会出場奨励金"
  },
  {
    slug: "osaka-official-002-030-2026",
    title: "泉大津市 運動部活動指導員認定プログラム受講助成金",
    organization: "泉大津市",
    maxAmount: "認定プログラム受講費を助成",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "employment"
    ],
    eligibility: "運動部活動指導員認定プログラムを受講し公式要件を満たす方",
    applicationPeriod: "受講・申請は公式手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/11898.html",
    sourceName: "泉大津市 運動部活動指導員認定プログラム受講助成金"
  },
  {
    slug: "osaka-official-002-031-2026",
    title: "泉大津市 幼児2人同乗用自転車購入助成金",
    organization: "泉大津市",
    maxAmount: "幼児2人同乗用自転車購入費を助成",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "幼児2人同乗用自転車を購入し公式要件を満たす子育て世帯等",
    applicationPeriod: "購入・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/11908.html",
    sourceName: "泉大津市 幼児2人同乗用自転車購入助成金"
  },
  {
    slug: "osaka-official-002-032-2026",
    title: "泉大津市 住宅用ゼロカーボンシティ推進補助金",
    organization: "泉大津市",
    maxAmount: "住宅用ゼロカーボン設備導入費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "住宅用ゼロカーボン設備を導入し公式要件を満たす方",
    applicationPeriod: "令和8年度の公式受付・予算状況に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/12851.html",
    sourceName: "泉大津市 住宅用ゼロカーボンシティ推進補助金"
  },
  {
    slug: "osaka-official-002-033-2026",
    title: "泉大津市 省エネルギー家電製品買い換え助成金",
    organization: "泉大津市",
    maxAmount: "省エネ家電買い換え費を助成",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "housing"
    ],
    eligibility: "省エネルギー家電製品に買い換え公式要件を満たす方",
    applicationPeriod: "購入・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/12966.html",
    sourceName: "泉大津市 省エネルギー家電製品買い換え助成金"
  },
  {
    slug: "osaka-official-002-034-2026",
    title: "泉大津市 中学校英語検定受験料補助",
    organization: "泉大津市",
    maxAmount: "英語検定受験料を補助",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "泉大津市立中学校生徒など公式要件を満たす方",
    applicationPeriod: "令和8年度の公式申請案内に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/15366.html",
    sourceName: "泉大津市 中学校英語検定受験料補助"
  },
  {
    slug: "osaka-official-002-035-2026",
    title: "泉大津市 ヒートアイランド対策助成金",
    organization: "泉大津市",
    maxAmount: "ヒートアイランド対策費を助成",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "housing"
    ],
    eligibility: "ヒートアイランド対策に取り組み公式要件を満たす方",
    applicationPeriod: "事業・購入前後の公式手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/shiminmukehozyo/15487.html",
    sourceName: "泉大津市 ヒートアイランド対策助成金"
  },
  {
    slug: "osaka-official-002-036-2026",
    title: "泉大津市 ふるさと納税返礼品開発等支援補助金",
    organization: "泉大津市",
    maxAmount: "返礼品開発等費用を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "ふるさと納税返礼品開発等に取り組み公式要件を満たす事業者",
    applicationPeriod: "公式ページ記載の募集・申請手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11502.html",
    sourceName: "泉大津市 ふるさと納税返礼品開発等支援補助金"
  },
  {
    slug: "osaka-official-002-037-2026",
    title: "泉大津市 インバウンド等受入環境整備補助金",
    organization: "泉大津市",
    maxAmount: "受入環境整備費を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "インバウンド等受入環境整備に取り組み公式要件を満たす事業者",
    applicationPeriod: "公式ページ記載の募集・申請手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11890.html",
    sourceName: "泉大津市 インバウンド等受入環境整備補助金"
  },
  {
    slug: "osaka-official-002-038-2026",
    title: "泉大津市 港湾エリア活性化補助金",
    organization: "泉大津市",
    maxAmount: "港湾エリア活性化事業費を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "港湾エリア活性化に資する事業を行い公式要件を満たす事業者等",
    applicationPeriod: "公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11894.html",
    sourceName: "泉大津市 港湾エリア活性化補助金"
  },
  {
    slug: "osaka-official-002-039-2026",
    title: "泉大津市 中小企業退職金共済加入促進補助金",
    organization: "泉大津市",
    maxAmount: "中小企業退職金共済掛金等を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "中小企業退職金共済に加入し公式要件を満たす市内事業者",
    applicationPeriod: "加入・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11902.html",
    sourceName: "泉大津市 中小企業退職金共済加入促進補助金"
  },
  {
    slug: "osaka-official-002-040-2026",
    title: "泉大津市 急速充電スタンド設置補助金",
    organization: "泉大津市",
    maxAmount: "急速充電スタンド設置費を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "民間事業者が急速充電スタンドを設置し公式要件を満たす場合",
    applicationPeriod: "設置・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11910.html",
    sourceName: "泉大津市 急速充電スタンド設置補助金"
  },
  {
    slug: "osaka-official-002-041-2026",
    title: "泉大津市 自治会向け防犯灯設置支援",
    organization: "泉大津市",
    maxAmount: "防犯灯設置を支援",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "防犯灯を設置する自治会等で公式要件を満たす団体",
    applicationPeriod: "設置・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11912.html",
    sourceName: "泉大津市 自治会向け防犯灯設置支援"
  },
  {
    slug: "osaka-official-002-042-2026",
    title: "泉大津市 自治会向け地域防犯カメラ設置支援",
    organization: "泉大津市",
    maxAmount: "地域防犯カメラ設置を支援",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "地域防犯カメラを設置する自治会等で公式要件を満たす団体",
    applicationPeriod: "設置・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11913.html",
    sourceName: "泉大津市 自治会向け地域防犯カメラ設置支援"
  },
  {
    slug: "osaka-official-002-043-2026",
    title: "泉大津市 プロボノ活用支援補助金",
    organization: "泉大津市",
    maxAmount: "プロボノ活用費を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "education"
    ],
    eligibility: "市民活動団体等でプロボノ活用支援の公式要件を満たす団体",
    applicationPeriod: "公式ページ記載の募集・申請手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11915.html",
    sourceName: "泉大津市 プロボノ活用支援補助金"
  },
  {
    slug: "osaka-official-002-044-2026",
    title: "泉大津市 こどもの居場所づくり支援",
    organization: "泉大津市",
    maxAmount: "こども食堂等の居場所づくりを支援",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "こどもの居場所づくりに取り組み公式要件を満たす団体等",
    applicationPeriod: "公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/11934.html",
    sourceName: "泉大津市 こどもの居場所づくり支援"
  },
  {
    slug: "osaka-official-002-045-2026",
    title: "泉大津市 子育てサークル活動補助金",
    organization: "泉大津市",
    maxAmount: "子育てサークル活動費を補助",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "子育てサークル活動を行い公式要件を満たす団体",
    applicationPeriod: "募集中の公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.izumiotsu.lg.jp/hojyokin/zigyousyamukehozyo/13031.html",
    sourceName: "泉大津市 子育てサークル活動補助金"
  },
  {
    slug: "osaka-official-002-046-2026",
    title: "高槻市 幼児二人同乗用自転車等購入費補助",
    organization: "高槻市",
    maxAmount: "幼児二人同乗用自転車等の購入費を補助",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "幼児二人同乗用自転車等を購入し公式要件を満たす子育て世帯",
    applicationPeriod: "令和8年度の公式申込期間・手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/site/waiwai/171228.html",
    sourceName: "高槻市 幼児二人同乗用自転車等購入費補助"
  },
  {
    slug: "osaka-official-002-047-2026",
    title: "高槻市 物価高対応子育て応援手当",
    organization: "高槻市",
    maxAmount: "物価高対応子育て応援手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "対象児童を養育し公式要件を満たす方",
    applicationPeriod: "公式ページ記載の申請・支給手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/42/165186.html",
    sourceName: "高槻市 物価高対応子育て応援手当"
  },
  {
    slug: "osaka-official-002-048-2026",
    title: "高槻市 妊婦のための支援給付",
    organization: "高槻市",
    maxAmount: "妊娠届出時5万円、産後子ども1人5万円等",
    maxAmountNum: 50000,
    category: "childcare",
    relatedCategories: [
      "medical"
    ],
    eligibility: "高槻市に住民登録がある妊婦等で公式要件を満たす方",
    applicationPeriod: "妊娠届出・こんにちは赤ちゃん事業等にあわせ公式手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/site/waiwai/143378.html",
    sourceName: "高槻市 妊婦のための支援給付"
  },
  {
    slug: "osaka-official-002-049-2026",
    title: "高槻市 妊産婦健康診査等費用助成制度",
    organization: "高槻市",
    maxAmount: "妊産婦健診等費用を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "妊産婦健康診査・乳児一般健康診査等を受け公式要件を満たす方",
    applicationPeriod: "受診券・償還払い等の公式手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/site/waiwai/3429.html",
    sourceName: "高槻市 妊産婦健康診査等費用助成制度"
  },
  {
    slug: "osaka-official-002-050-2026",
    title: "高槻市 私立学校等通学児童生徒給食費相当額支援",
    organization: "高槻市",
    maxAmount: "給食費相当額を支援",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "私立学校等へ通学する児童生徒で公式要件を満たす方",
    applicationPeriod: "公式ページ記載の申請期間・手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/site/waiwai/171659.html",
    sourceName: "高槻市 私立学校等通学児童生徒給食費相当額支援"
  },
  {
    slug: "osaka-official-002-051-2026",
    title: "高槻市 小児慢性特定疾病医療費助成制度",
    organization: "高槻市",
    maxAmount: "小児慢性特定疾病医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "小児慢性特定疾病に該当し公式要件を満たす児童等",
    applicationPeriod: "申請・更新は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/site/waiwai/3425.html",
    sourceName: "高槻市 小児慢性特定疾病医療費助成制度"
  },
  {
    slug: "osaka-official-002-052-2026",
    title: "高槻市 高槻市第5次医療施設等物価高対策支援金",
    organization: "高槻市",
    maxAmount: "医療施設等へ物価高対策支援金を支給",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "employment"
    ],
    eligibility: "高槻市内の対象医療施設等で公式要件を満たす事業者",
    applicationPeriod: "令和8年7月31日までの公式申請期限に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/38/78986.html",
    sourceName: "高槻市 高槻市第5次医療施設等物価高対策支援金"
  },
  {
    slug: "osaka-official-002-053-2026",
    title: "高槻市 防犯カメラ設置補助",
    organization: "高槻市",
    maxAmount: "防犯カメラ設置費を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "防犯カメラを設置する自治会等で公式要件を満たす団体",
    applicationPeriod: "令和8年度の申込期間延長案内に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/2/94607.html",
    sourceName: "高槻市 防犯カメラ設置補助"
  },
  {
    slug: "osaka-official-002-054-2026",
    title: "高槻市 民間事業者省エネルギー設備等導入事業費補助金",
    organization: "高槻市",
    maxAmount: "省エネ設備導入費を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "省エネルギー設備等を導入する民間事業者で公式要件を満たす方",
    applicationPeriod: "令和8年度受付終了、今後は公式更新に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/25/1910.html",
    sourceName: "高槻市 民間事業者省エネルギー設備等導入事業費補助金"
  },
  {
    slug: "osaka-official-002-055-2026",
    title: "高槻市 住居確保給付金",
    organization: "高槻市",
    maxAmount: "家賃相当額等を支給",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "離職等で住居を失うおそれがあり公式要件を満たす方",
    applicationPeriod: "相談・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/35/142378.html",
    sourceName: "高槻市 住居確保給付金"
  },
  {
    slug: "osaka-official-002-056-2026",
    title: "高槻市 障がい福祉サービス従事者研修費助成",
    organization: "高槻市",
    maxAmount: "研修費の一部を助成",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "nursing"
    ],
    eligibility: "障がい福祉サービス従事者の研修を受講し公式要件を満たす方",
    applicationPeriod: "研修受講・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/36/2535.html",
    sourceName: "高槻市 障がい福祉サービス従事者研修費助成"
  },
  {
    slug: "osaka-official-002-057-2026",
    title: "高槻市 重度障がい者医療費助成制度",
    organization: "高槻市",
    maxAmount: "重度障がい者の医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "living"
    ],
    eligibility: "重度障がい者で公式の医療費助成要件を満たす方",
    applicationPeriod: "医療証交付・更新等の公式手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/36/2494.html",
    sourceName: "高槻市 重度障がい者医療費助成制度"
  },
  {
    slug: "osaka-official-002-058-2026",
    title: "高槻市 保育士等奨学金返済支援事業",
    organization: "高槻市",
    maxAmount: "保育士等の奨学金返済を支援",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "childcare",
      "education"
    ],
    eligibility: "高槻市内の対象施設に勤務する保育士等で公式要件を満たす方",
    applicationPeriod: "勤務・申請にあたり公式ページ記載の手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/soshiki/43/67368.html",
    sourceName: "高槻市 保育士等奨学金返済支援事業"
  },
  {
    slug: "osaka-official-002-059-2026",
    title: "高槻市 住宅耐震補助金等",
    organization: "高槻市",
    maxAmount: "住宅耐震化に関する補助制度により異なる",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "高槻市内の住宅で耐震診断・改修等の公式要件を満たす所有者等",
    applicationPeriod: "事前相談・各制度の申請手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/life/1/17/84/",
    sourceName: "高槻市 住宅耐震補助金等"
  },
  {
    slug: "osaka-official-002-060-2026",
    title: "高槻市 ブロック塀等安全確保補助金等",
    organization: "高槻市",
    maxAmount: "ブロック塀等安全確保費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "ブロック塀等の撤去・改修等について公式要件を満たす所有者等",
    applicationPeriod: "事前相談・申請は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.takatsuki.osaka.jp/life/1/17/87/",
    sourceName: "高槻市 ブロック塀等安全確保補助金等"
  },
  {
    slug: "osaka-official-002-061-2026",
    title: "貝塚市 子ども医療費助成制度",
    organization: "貝塚市",
    maxAmount: "子どもの医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "貝塚市内の対象年齢の子どもで公式要件を満たす方",
    applicationPeriod: "医療証交付・払い戻し等の公式手続に従う",
    officialUrl: "https://www.city.kaizuka.lg.jp/kakuka/kodomo/kodomo/menu/jidofukushi/iryouhi.html",
    sourceName: "貝塚市 子ども医療費助成制度"
  },
  {
    slug: "osaka-official-002-062-2026",
    title: "貝塚市 児童手当",
    organization: "貝塚市",
    maxAmount: "児童の年齢等に応じて手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "児童を養育し公式の児童手当要件を満たす方",
    applicationPeriod: "出生・転入時など認定請求の公式手続に従う",
    officialUrl: "https://www.city.kaizuka.lg.jp/kakuka/kodomo/kodomo/menu/jidofukushi/zidouteate.html",
    sourceName: "貝塚市 児童手当"
  },
  {
    slug: "osaka-official-002-063-2026",
    title: "貝塚市 児童扶養手当",
    organization: "貝塚市",
    maxAmount: "ひとり親家庭等へ手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "ひとり親家庭等で児童扶養手当の公式要件を満たす方",
    applicationPeriod: "認定請求・現況届など公式手続に従う",
    officialUrl: "https://www.city.kaizuka.lg.jp/kakuka/kodomo/kodomo/menu/boshikatei/jidohuyoteate.html",
    sourceName: "貝塚市 児童扶養手当"
  },
  {
    slug: "osaka-official-002-064-2026",
    title: "貝塚市 就学援助制度",
    organization: "貝塚市",
    maxAmount: "学用品費・給食費等を援助",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "経済的理由により就学費用の支援が必要で公式要件を満たす世帯",
    applicationPeriod: "学校・教育委員会の公式申請手続に従う",
    officialUrl: "https://www.city.kaizuka.lg.jp/kakuka/kyoiku/gakkojinken/menu/enjo/syuugakuenjo.html",
    sourceName: "貝塚市 就学援助制度"
  },
  {
    slug: "osaka-official-002-065-2026",
    title: "貝塚市 ひとり親家庭医療",
    organization: "貝塚市",
    maxAmount: "ひとり親家庭の医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare",
      "living"
    ],
    eligibility: "ひとり親家庭等で公式の医療費助成要件を満たす方",
    applicationPeriod: "医療証交付・更新等の公式手続に従う",
    officialUrl: "https://www.city.kaizuka.lg.jp/kakuka/kodomo/kodomo/menu/boshikatei/hitorioya.html",
    sourceName: "貝塚市 ひとり親家庭医療"
  },
  {
    slug: "osaka-official-002-066-2026",
    title: "貝塚市 老人医療（一部負担金相当額等一部助成）",
    organization: "貝塚市",
    maxAmount: "65歳以上対象者の医療費一部を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "nursing"
    ],
    eligibility: "65歳以上で老人医療助成の公式要件を満たす方",
    applicationPeriod: "申請・更新は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.kaizuka.lg.jp/kenko_fukushi/kenko_iryo/rojiniryo.html",
    sourceName: "貝塚市 老人医療（一部負担金相当額等一部助成）"
  },
  {
    slug: "osaka-official-002-067-2026",
    title: "貝塚市 マル経融資利子補給",
    organization: "貝塚市",
    maxAmount: "マル経融資の利子を補給",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "マル経融資を利用し公式要件を満たす市内小規模事業者等",
    applicationPeriod: "融資利用後、公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.kaizuka.lg.jp/kigyo_jigyosha/rishihokyuu.html",
    sourceName: "貝塚市 マル経融資利子補給"
  },
  {
    slug: "osaka-official-002-068-2026",
    title: "貝塚市 公的支援情報（住宅関連）",
    organization: "貝塚市",
    maxAmount: "住宅関連公的支援制度を案内",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "住宅リフォーム・省エネ等の支援制度について公式要件を満たす方",
    applicationPeriod: "各公的支援制度の公式申請受付に従う",
    officialUrl: "https://www.city.kaizuka.lg.jp/kurashi_navi/sumai/jutaku/23631.html",
    sourceName: "貝塚市 公的支援情報（住宅関連）"
  }
];

