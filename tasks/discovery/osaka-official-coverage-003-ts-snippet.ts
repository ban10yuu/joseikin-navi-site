const osakaOfficial003Grants: Array<{
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
    slug: "osaka-official-003-001-2026",
    title: "守口市 新生児聴覚検査・産婦健康診査・妊婦健康診査助成",
    organization: "守口市",
    maxAmount: "検査・健診費用を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "対象検査・健診を受け公式要件を満たす妊産婦・新生児等",
    applicationPeriod: "公式ページ記載の受診・償還払い等の手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kosodate_kyoiku/ninshin_shussan/19569.html",
    sourceName: "守口市 新生児聴覚検査、産婦健康診査、妊婦健康診査（多胎）への助成"
  },
  {
    slug: "osaka-official-003-002-2026",
    title: "守口市 低所得妊婦初回産科等受診料支援事業",
    organization: "守口市",
    maxAmount: "初回産科等受診料を支援",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare",
      "living"
    ],
    eligibility: "低所得の妊婦で初回産科等受診料支援の公式要件を満たす方",
    applicationPeriod: "妊娠判定・相談後、公式ページ記載の手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kosodate_kyoiku/ninshin_shussan/15398.html",
    sourceName: "守口市 低所得の妊婦に対する初回産科等受診料支援事業"
  },
  {
    slug: "osaka-official-003-003-2026",
    title: "守口市 妊婦のための支援給付",
    organization: "守口市",
    maxAmount: "妊娠・出産期の給付を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "medical",
      "living"
    ],
    eligibility: "妊娠届出等を行い公式要件を満たす妊婦等",
    applicationPeriod: "妊娠届出・面談等にあわせ公式手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kosodate_kyoiku/ninshin_shussan/13419.html",
    sourceName: "守口市 妊婦のための支援給付について"
  },
  {
    slug: "osaka-official-003-004-2026",
    title: "守口市 妊婦健康診査償還払い",
    organization: "守口市",
    maxAmount: "妊婦健康診査費用を償還払い",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "里帰り出産等により委託外医療機関で妊婦健診を受け公式要件を満たす方",
    applicationPeriod: "健診受診後、公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kosodate_kyoiku/ninshin_shussan/18013.html",
    sourceName: "守口市 妊婦健康診査と里帰り出産等による健診費用の償還払い"
  },
  {
    slug: "osaka-official-003-005-2026",
    title: "守口市 不妊検査・治療費助成金",
    organization: "守口市",
    maxAmount: "不妊検査・治療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "不妊検査・治療を受け守口市の公式要件を満たす夫婦等",
    applicationPeriod: "治療後、公式ページ記載の申請期限・手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kosodate_kyoiku/ninshin_shussan/18020.html",
    sourceName: "守口市 守口市不妊検査・治療費助成金の申請について"
  },
  {
    slug: "osaka-official-003-006-2026",
    title: "守口市 風しんワクチン等任意接種費助成",
    organization: "守口市",
    maxAmount: "風しんワクチン等任意接種費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "妊娠希望の夫婦など公式要件を満たす方",
    applicationPeriod: "令和8年度の公式受付案内に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kosodate_kyoiku/ninshin_shussan/14693.html",
    sourceName: "守口市 令和8年度風しんワクチン等任意接種にかかる費用の助成事業"
  },
  {
    slug: "osaka-official-003-007-2026",
    title: "守口市 建築物耐震診断補助",
    organization: "守口市",
    maxAmount: "耐震診断費用を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "守口市内の対象建築物について公式要件を満たす所有者等",
    applicationPeriod: "事前調査・申請など公式手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kakukanoannai/toshiseibibu/jutakumachidukurika/taishin/1419.html",
    sourceName: "守口市 建築物耐震診断補助"
  },
  {
    slug: "osaka-official-003-008-2026",
    title: "守口市 木造住宅耐震改修補助",
    organization: "守口市",
    maxAmount: "耐震改修計画は上限10万円、工事等は上限50万円等",
    maxAmountNum: 500000,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "守口市内の対象木造住宅を所有し所得・税納付等の公式要件を満たす方",
    applicationPeriod: "契約・着手前に公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kakukanoannai/toshiseibibu/jutakumachidukurika/taishin/1927.html",
    sourceName: "守口市 木造住宅耐震改修補助"
  },
  {
    slug: "osaka-official-003-009-2026",
    title: "守口市 バリアフリー改修住宅固定資産税減額",
    organization: "守口市",
    maxAmount: "固定資産税を減額",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "nursing",
      "living"
    ],
    eligibility: "一定のバリアフリー改修を行い公式要件を満たす住宅所有者",
    applicationPeriod: "改修後、公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kakukanoannai/somubu/kazeika/koteishisanzei/kaoku/1211.html",
    sourceName: "守口市 バリアフリー改修工事を行った住宅の固定資産税の減額について"
  },
  {
    slug: "osaka-official-003-010-2026",
    title: "守口市 省エネ改修住宅固定資産税減額",
    organization: "守口市",
    maxAmount: "固定資産税を減額",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "一定の省エネルギー改修を行い公式要件を満たす住宅所有者",
    applicationPeriod: "改修後、公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.city.moriguchi.osaka.jp/kakukanoannai/somubu/kazeika/koteishisanzei/kaoku/1655.html",
    sourceName: "守口市 省エネルギー改修工事を行った住宅の固定資産税の減額について"
  },
  {
    slug: "osaka-official-003-011-2026",
    title: "枚方市 カラス対策ネット等購入補助事業",
    organization: "枚方市",
    maxAmount: "カラス対策ネット等購入費を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "housing"
    ],
    eligibility: "枚方市内でカラス対策ネット等を購入し公式要件を満たす団体等",
    applicationPeriod: "令和8年度の公式受付案内に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000053407.html",
    sourceName: "枚方市 令和8年度 枚方市カラス対策ネット等購入補助事業について"
  },
  {
    slug: "osaka-official-003-012-2026",
    title: "枚方市 物価高騰対応重点支援給付金",
    organization: "枚方市",
    maxAmount: "食料品等物価高騰対策の給付金を支給",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "物価高騰対策給付金の公式要件を満たす世帯等",
    applicationPeriod: "公式ページ記載の確認・申請手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000053238.html",
    sourceName: "枚方市 物価高騰対応重点支援給付金「食料品等の物価高騰対策に係る給付金」について"
  },
  {
    slug: "osaka-official-003-013-2026",
    title: "枚方市 猫不妊手術費用補助",
    organization: "枚方市",
    maxAmount: "猫不妊手術費用の一部を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [],
    eligibility: "猫の不妊手術を行い公式要件を満たす方",
    applicationPeriod: "手術・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000001616.html",
    sourceName: "枚方市 猫不妊手術費用の一部補助"
  },
  {
    slug: "osaka-official-003-014-2026",
    title: "枚方市 地域猫不妊手術費用補助",
    organization: "枚方市",
    maxAmount: "地域猫不妊手術費用の一部を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [],
    eligibility: "地域猫の不妊手術を行い公式要件を満たす団体等",
    applicationPeriod: "手術・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000001492.html",
    sourceName: "枚方市 地域猫の不妊手術費用の一部補助"
  },
  {
    slug: "osaka-official-003-015-2026",
    title: "枚方市 若者世代空き家活用補助制度",
    organization: "枚方市",
    maxAmount: "空き家活用費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "若者世代が空き家を取得・活用し公式要件を満たす場合",
    applicationPeriod: "契約・工事等の前に公式手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000028668.html",
    sourceName: "枚方市 枚方市若者世代空き家活用補助制度"
  },
  {
    slug: "osaka-official-003-016-2026",
    title: "枚方市 住宅除却工事補助制度",
    organization: "枚方市",
    maxAmount: "住宅除却工事費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "対象住宅の除却工事について公式要件を満たす所有者等",
    applicationPeriod: "工事着手前に公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000002407.html",
    sourceName: "枚方市 住宅の除却（解体）工事補助制度"
  },
  {
    slug: "osaka-official-003-017-2026",
    title: "枚方市 耐震診断補助制度",
    organization: "枚方市",
    maxAmount: "耐震診断費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "枚方市内の対象住宅等で公式要件を満たす所有者等",
    applicationPeriod: "診断実施前に公式手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000002411.html",
    sourceName: "枚方市 耐震診断補助制度"
  },
  {
    slug: "osaka-official-003-018-2026",
    title: "枚方市 木造住宅耐震改修事業補助",
    organization: "枚方市",
    maxAmount: "木造住宅耐震改修費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "対象木造住宅の耐震改修等について公式要件を満たす所有者等",
    applicationPeriod: "工事契約前に公式手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000002435.html",
    sourceName: "枚方市 木造住宅の耐震改修事業補助"
  },
  {
    slug: "osaka-official-003-019-2026",
    title: "枚方市 危険ブロック塀等除却補助制度",
    organization: "枚方市",
    maxAmount: "危険ブロック塀等除却費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "危険ブロック塀等の除却について公式要件を満たす所有者等",
    applicationPeriod: "除却工事前に公式手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000023322.html",
    sourceName: "枚方市 危険ブロック塀等除却補助制度"
  },
  {
    slug: "osaka-official-003-020-2026",
    title: "枚方市 支援学級等就学奨励費",
    organization: "枚方市",
    maxAmount: "就学に必要な費用を援助",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "支援学級等に就学する児童・生徒の保護者で公式要件を満たす方",
    applicationPeriod: "令和8年度の公式案内に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000048286.html",
    sourceName: "枚方市 支援学級等就学奨励費"
  },
  {
    slug: "osaka-official-003-021-2026",
    title: "枚方市 小中学校就学援助制度",
    organization: "枚方市",
    maxAmount: "学用品費・給食費等を援助",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "childcare",
      "living"
    ],
    eligibility: "経済的理由で就学費用の支援が必要な保護者",
    applicationPeriod: "令和8年度の公式受付・学校経由手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000047592.html",
    sourceName: "枚方市 小中学校就学援助制度"
  },
  {
    slug: "osaka-official-003-022-2026",
    title: "枚方市 就学援助入学準備金支給",
    organization: "枚方市",
    maxAmount: "入学準備金を入学前に支給",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "childcare",
      "living"
    ],
    eligibility: "小学校入学予定児童の保護者で就学援助の公式要件を満たす方",
    applicationPeriod: "公式ページ記載の申請期限・手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000048816.html",
    sourceName: "枚方市 就学援助（小学校入学準備金）の入学前支給について"
  },
  {
    slug: "osaka-official-003-023-2026",
    title: "枚方市 交通災害遺児奨学金",
    organization: "枚方市",
    maxAmount: "奨学金を支給",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "living"
    ],
    eligibility: "交通災害遺児で公式要件を満たす方",
    applicationPeriod: "公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000000264.html",
    sourceName: "枚方市 枚方市交通災害遺児奨学金"
  },
  {
    slug: "osaka-official-003-024-2026",
    title: "枚方市 若手人材奨学金返還補助",
    organization: "枚方市",
    maxAmount: "奨学金返還を最大45万円補助",
    maxAmountNum: 450000,
    category: "employment",
    relatedCategories: [
      "education"
    ],
    eligibility: "枚方市内中小企業等で働く若手人材で公式要件を満たす方",
    applicationPeriod: "令和8年10月1日受付開始予定の公式案内に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000051918.html",
    sourceName: "枚方市 市内中小企業等で働く若手人材の奨学金返還補助"
  },
  {
    slug: "osaka-official-003-025-2026",
    title: "枚方市 テイクオフ補助金",
    organization: "枚方市",
    maxAmount: "対象経費を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "枚方市内で創業・事業成長等に取り組み公式要件を満たす事業者",
    applicationPeriod: "令和8年度の公式募集・申請手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000003470.html",
    sourceName: "枚方市 令和8年度枚方市テイクオフ補助金"
  },
  {
    slug: "osaka-official-003-026-2026",
    title: "枚方市 高等職業訓練促進給付金",
    organization: "枚方市",
    maxAmount: "訓練促進給付金・修了支援給付金を支給",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "childcare",
      "education"
    ],
    eligibility: "ひとり親家庭の親で資格取得訓練等の公式要件を満たす方",
    applicationPeriod: "訓練開始前相談など公式手続に従う",
    officialUrl: "https://www.city.hirakata.osaka.jp/0000002238.html",
    sourceName: "枚方市 高等職業訓練促進給付金・高等職業訓練修了支援給付金"
  },
  {
    slug: "osaka-official-003-027-2026",
    title: "茨木市 自転車乗車用ヘルメット購入費補助",
    organization: "茨木市",
    maxAmount: "ヘルメット購入費を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "茨木市内で自転車乗車用ヘルメットを購入し公式要件を満たす方",
    applicationPeriod: "令和8年度の公式受付案内に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/kikou/kensetsu/koutsuseisaku/menu/65891.html",
    sourceName: "茨木市 令和8年度自転車乗車用ヘルメット購入費補助"
  },
  {
    slug: "osaka-official-003-028-2026",
    title: "茨木市 中小企業等賃金引上げ奨励金",
    organization: "茨木市",
    maxAmount: "賃金引上げ奨励金を支給",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "茨木市内の中小企業等で賃金引上げの公式要件を満たす事業者",
    applicationPeriod: "公式ページ記載の申請期間・手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/kikou/sangyo/shoukou/menu/rodofukushi/minasamahe/68403.html",
    sourceName: "茨木市 茨木市中小企業等賃⾦引上げ奨励金について"
  },
  {
    slug: "osaka-official-003-029-2026",
    title: "茨木市 家庭用生ごみ処理容器等設置補助",
    organization: "茨木市",
    maxAmount: "設置費を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "housing"
    ],
    eligibility: "家庭用生ごみ処理容器等を設置し公式要件を満たす方",
    applicationPeriod: "令和8年度の公式受付案内に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kurashi/gomi_shinyo/reduce_recycle/56528.html",
    sourceName: "茨木市 家庭用生ごみ処理容器等設置への補助金制度"
  },
  {
    slug: "osaka-official-003-030-2026",
    title: "茨木市 妊婦健康診査助成",
    organization: "茨木市",
    maxAmount: "妊婦健康診査費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "妊婦健康診査を受け公式要件を満たす妊婦",
    applicationPeriod: "受診・償還払い等の公式手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kosodate_kyoiku/ninshin_syussan/63822.html",
    sourceName: "茨木市 妊婦健康診査"
  },
  {
    slug: "osaka-official-003-031-2026",
    title: "茨木市 未熟児養育医療給付制度",
    organization: "茨木市",
    maxAmount: "養育医療費を給付",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "未熟児の養育医療について公式要件を満たす保護者",
    applicationPeriod: "医療開始・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kosodate_kyoiku/ninshin_syussan/56553.html",
    sourceName: "茨木市 未熟児養育医療給付制度"
  },
  {
    slug: "osaka-official-003-032-2026",
    title: "茨木市 不育症治療費助成事業",
    organization: "茨木市",
    maxAmount: "不育症治療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "不育症治療を受け茨木市の公式要件を満たす方",
    applicationPeriod: "治療後、公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kosodate_kyoiku/ninshin_syussan/63819.html",
    sourceName: "茨木市 不育症治療費助成事業"
  },
  {
    slug: "osaka-official-003-033-2026",
    title: "茨木市 児童手当・児童扶養手当",
    organization: "茨木市",
    maxAmount: "児童手当・児童扶養手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "児童を養育し児童手当・児童扶養手当の公式要件を満たす方",
    applicationPeriod: "認定請求・現況届等の公式手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kosodate_kyoiku/jido_hitorioya_shisetsu/56537.html",
    sourceName: "茨木市 児童手当・児童扶養手当"
  },
  {
    slug: "osaka-official-003-034-2026",
    title: "茨木市 養育費確保補助金",
    organization: "茨木市",
    maxAmount: "公正証書等作成費・養育費保証料を補助",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "養育費確保に取り組むひとり親等で公式要件を満たす方",
    applicationPeriod: "作成・契約後、公式ページ記載の手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kosodate_kyoiku/jido_hitorioya_shisetsu/56388.html",
    sourceName: "茨木市 公正証書等作成費・養育費保証料の補助金"
  },
  {
    slug: "osaka-official-003-035-2026",
    title: "茨木市 訪問型病児・病後児保育利用料補助",
    organization: "茨木市",
    maxAmount: "利用料を補助",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "medical"
    ],
    eligibility: "訪問型病児・病後児保育を利用し公式要件を満たす保護者",
    applicationPeriod: "利用後、公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kosodate_kyoiku/jido_hitorioya_shisetsu/56489.html",
    sourceName: "茨木市 訪問型病児・病後児保育利用料補助制度について"
  },
  {
    slug: "osaka-official-003-036-2026",
    title: "茨木市 チャレンジいばらき補助金",
    organization: "茨木市",
    maxAmount: "公益活動費を補助",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "education"
    ],
    eligibility: "提案公募型公益活動に取り組み公式要件を満たす団体等",
    applicationPeriod: "公式募集期間・申請手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kosodate_kyoiku/gakusei/61344.html",
    sourceName: "茨木市 チャレンジいばらき補助金"
  },
  {
    slug: "osaka-official-003-037-2026",
    title: "茨木市 大学奨学金利子補給事業",
    organization: "茨木市",
    maxAmount: "奨学金利子を補給",
    maxAmountNum: 0,
    category: "education",
    relatedCategories: [
      "living"
    ],
    eligibility: "大学奨学金の返還利子について公式要件を満たす方",
    applicationPeriod: "公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/kosodate_kyoiku/gakusei/56509.html",
    sourceName: "茨木市 大学奨学金利子補給事業"
  },
  {
    slug: "osaka-official-003-038-2026",
    title: "茨木市 屋外広告物除却・改修費補助",
    organization: "茨木市",
    maxAmount: "除却・改修費用を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "対象屋外広告物の除却・改修について公式要件を満たす所有者等",
    applicationPeriod: "工事前に公式手続に従う",
    officialUrl: "https://www.city.ibaraki.osaka.jp/hojokin_joseikin/jigyosha_sangyo/64954.html",
    sourceName: "茨木市 屋外広告物の除却・改修費用を補助します"
  },
  {
    slug: "osaka-official-003-039-2026",
    title: "八尾市 低所得高齢者世帯エアコン購入費助成金",
    organization: "八尾市",
    maxAmount: "エアコン購入費を助成",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "nursing"
    ],
    eligibility: "低所得高齢者世帯でエアコン購入費助成の公式要件を満たす世帯",
    applicationPeriod: "公式ページ記載の受付期間・手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kurashi_tetsuzuki/1022413/1022445.html",
    sourceName: "八尾市 低所得高齢者世帯エアコン購入費助成金について"
  },
  {
    slug: "osaka-official-003-040-2026",
    title: "八尾市 物価高対応子育て応援手当",
    organization: "八尾市",
    maxAmount: "子育て応援手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "子育て世帯で物価高対応手当の公式要件を満たす方",
    applicationPeriod: "公式ページ記載の申請・支給案内に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003919/1021848.html",
    sourceName: "八尾市 物価高対応子育て応援手当"
  },
  {
    slug: "osaka-official-003-041-2026",
    title: "八尾市 児童手当制度",
    organization: "八尾市",
    maxAmount: "児童手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "児童を養育し児童手当の公式要件を満たす方",
    applicationPeriod: "認定請求・届出等の公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003919/1006400/index.html",
    sourceName: "八尾市 児童手当制度"
  },
  {
    slug: "osaka-official-003-042-2026",
    title: "八尾市 新生児聴覚検査助成",
    organization: "八尾市",
    maxAmount: "検査費用の一部を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "新生児聴覚検査を受け公式要件を満たす保護者",
    applicationPeriod: "検査後、公式ページ記載の手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003919/1003929.html",
    sourceName: "八尾市 新生児聴覚検査の一部助成"
  },
  {
    slug: "osaka-official-003-043-2026",
    title: "八尾市 出産育児一時金",
    organization: "八尾市",
    maxAmount: "出産育児一時金を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "medical"
    ],
    eligibility: "国民健康保険加入者が出産し公式要件を満たす場合",
    applicationPeriod: "出産後または直接支払制度の公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003919/1003934.html",
    sourceName: "八尾市 国民健康保険の出産育児一時金"
  },
  {
    slug: "osaka-official-003-044-2026",
    title: "八尾市 子ども医療費助成制度",
    organization: "八尾市",
    maxAmount: "子どもの医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "八尾市内の対象年齢の子どもで公式要件を満たす方",
    applicationPeriod: "医療証交付・償還払い等の公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003919/1003936.html",
    sourceName: "八尾市 子ども医療費助成制度"
  },
  {
    slug: "osaka-official-003-045-2026",
    title: "八尾市 特別児童扶養手当制度",
    organization: "八尾市",
    maxAmount: "特別児童扶養手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "nursing",
      "living"
    ],
    eligibility: "障がいのある児童を養育し公式要件を満たす方",
    applicationPeriod: "認定請求・所得状況届等の公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003941/1003942.html",
    sourceName: "八尾市 特別児童扶養手当制度"
  },
  {
    slug: "osaka-official-003-046-2026",
    title: "八尾市 児童通所支援多子軽減措置",
    organization: "八尾市",
    maxAmount: "利用者負担を軽減",
    maxAmountNum: 0,
    category: "nursing",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "就学前児童の通所支援を利用し多子軽減の公式要件を満たす世帯",
    applicationPeriod: "利用・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003941/1003943.html",
    sourceName: "八尾市 就学前の児童通所支援に係る利用者負担の多子軽減措置"
  },
  {
    slug: "osaka-official-003-047-2026",
    title: "八尾市 母子家庭等高等職業訓練促進給付金",
    organization: "八尾市",
    maxAmount: "高等職業訓練促進給付金等を支給",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "childcare",
      "education"
    ],
    eligibility: "母子家庭等の親で資格取得訓練の公式要件を満たす方",
    applicationPeriod: "訓練開始前相談など公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003948/1003949.html",
    sourceName: "八尾市 母子家庭等高等職業訓練促進給付金等の支給"
  },
  {
    slug: "osaka-official-003-048-2026",
    title: "八尾市 自立支援教育訓練給付金",
    organization: "八尾市",
    maxAmount: "教育訓練給付金を支給",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "childcare",
      "education"
    ],
    eligibility: "母子家庭等の親で対象教育訓練を受講し公式要件を満たす方",
    applicationPeriod: "講座指定・受講後の公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003948/1003950.html",
    sourceName: "八尾市 母子家庭等自立支援教育訓練給付金の支給"
  },
  {
    slug: "osaka-official-003-049-2026",
    title: "八尾市 ひとり親家庭医療費助成制度",
    organization: "八尾市",
    maxAmount: "ひとり親家庭の医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare",
      "living"
    ],
    eligibility: "ひとり親家庭等で医療費助成の公式要件を満たす方",
    applicationPeriod: "医療証交付・更新等の公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003948/1006336/index.html",
    sourceName: "八尾市 ひとり親家庭医療費助成制度"
  },
  {
    slug: "osaka-official-003-050-2026",
    title: "八尾市 児童扶養手当制度",
    organization: "八尾市",
    maxAmount: "児童扶養手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "ひとり親家庭等で児童扶養手当の公式要件を満たす方",
    applicationPeriod: "認定請求・現況届等の公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003948/1006401/index.html",
    sourceName: "八尾市 児童扶養手当制度"
  },
  {
    slug: "osaka-official-003-051-2026",
    title: "八尾市 小児慢性特定疾病医療費助成制度",
    organization: "八尾市",
    maxAmount: "医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "小児慢性特定疾病医療費助成の公式要件を満たす児童等",
    applicationPeriod: "申請者は公式ページ記載の手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003960/1003961.html",
    sourceName: "八尾市 小児慢性特定疾病医療費助成制度"
  },
  {
    slug: "osaka-official-003-052-2026",
    title: "八尾市 不育症治療費等助成事業",
    organization: "八尾市",
    maxAmount: "不育症治療費等を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "不育症治療等を受け八尾市の公式要件を満たす方",
    applicationPeriod: "治療後、公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003960/1003962.html",
    sourceName: "八尾市 不育症治療費等助成事業"
  },
  {
    slug: "osaka-official-003-053-2026",
    title: "八尾市 未熟児養育医療給付",
    organization: "八尾市",
    maxAmount: "養育医療費を給付",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "未熟児の養育医療について公式要件を満たす保護者",
    applicationPeriod: "医療開始・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003960/1003963.html",
    sourceName: "八尾市 未熟児養育医療給付"
  },
  {
    slug: "osaka-official-003-054-2026",
    title: "八尾市 障がい者医療費助成",
    organization: "八尾市",
    maxAmount: "障がい者の医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "nursing",
      "living"
    ],
    eligibility: "障がい者医療費助成の公式要件を満たす方",
    applicationPeriod: "医療証交付・更新等の公式手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/kenkou_fukushi/shougaisha_hukushi/1008120/1008111/1008117/index.html",
    sourceName: "八尾市 障がい者医療"
  },
  {
    slug: "osaka-official-003-055-2026",
    title: "八尾市 意欲ある事業者経営・技術支援補助金",
    organization: "八尾市",
    maxAmount: "経営・技術支援に係る対象経費を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "education"
    ],
    eligibility: "八尾市内事業者で経営・技術支援補助の公式要件を満たす方",
    applicationPeriod: "公式募集・申請手続に従う",
    officialUrl: "https://www.city.yao.osaka.jp/sangyou_business/yuushi_hojokin/1012107/index.html",
    sourceName: "八尾市 八尾市意欲ある事業者経営・技術支援補助金"
  },
  {
    slug: "osaka-official-003-056-2026",
    title: "泉佐野市 児童手当",
    organization: "泉佐野市",
    maxAmount: "児童手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "児童を養育し児童手当の公式要件を満たす方",
    applicationPeriod: "認定請求・届出等の公式手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/teate_josei/kodomoteate.html",
    sourceName: "泉佐野市 児童手当"
  },
  {
    slug: "osaka-official-003-057-2026",
    title: "泉佐野市 こども医療費助成事業",
    organization: "泉佐野市",
    maxAmount: "こどもの医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "泉佐野市内の対象年齢のこどもで公式要件を満たす方",
    applicationPeriod: "医療証交付・償還払い等の公式手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/teate_josei/kodomoirilyou/index.html",
    sourceName: "泉佐野市 こども医療費助成事業"
  },
  {
    slug: "osaka-official-003-058-2026",
    title: "泉佐野市 児童扶養手当",
    organization: "泉佐野市",
    maxAmount: "児童扶養手当を支給",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "ひとり親家庭等で児童扶養手当の公式要件を満たす方",
    applicationPeriod: "認定請求・現況届等の公式手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/teate_josei/jifu.html",
    sourceName: "泉佐野市 児童扶養手当"
  },
  {
    slug: "osaka-official-003-059-2026",
    title: "泉佐野市 未熟児養育医療",
    organization: "泉佐野市",
    maxAmount: "養育医療費を給付",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "未熟児の養育医療について公式要件を満たす保護者",
    applicationPeriod: "医療開始・申請にあたり公式手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/teate_josei/1369881799689.html",
    sourceName: "泉佐野市 未熟児養育医療"
  },
  {
    slug: "osaka-official-003-060-2026",
    title: "泉佐野市 多胎児家庭育児支援事業",
    organization: "泉佐野市",
    maxAmount: "多胎児家庭の育児を支援",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "多胎児家庭で公式要件を満たす世帯",
    applicationPeriod: "公式ページ記載の利用・申請手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/teate_josei/tataiji.html",
    sourceName: "泉佐野市 多胎児家庭育児支援事業のご案内"
  },
  {
    slug: "osaka-official-003-061-2026",
    title: "泉佐野市 乳幼児おむつ用指定可燃ごみ袋配付事業",
    organization: "泉佐野市",
    maxAmount: "指定可燃ごみ袋を配付",
    maxAmountNum: 0,
    category: "childcare",
    relatedCategories: [
      "living"
    ],
    eligibility: "乳幼児を養育し公式要件を満たす世帯",
    applicationPeriod: "公式ページ記載の配付・申請手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/teate_josei/11698.html",
    sourceName: "泉佐野市 乳幼児おむつ用泉佐野市指定可燃ごみ袋配付事業"
  },
  {
    slug: "osaka-official-003-062-2026",
    title: "泉佐野市 ひとり親家庭医療費助成事業",
    organization: "泉佐野市",
    maxAmount: "ひとり親家庭の医療費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare",
      "living"
    ],
    eligibility: "ひとり親家庭等で医療費助成の公式要件を満たす方",
    applicationPeriod: "医療証交付・更新等の公式手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/teate_josei/hitorioyairyouhizyoseizigyou/index.html",
    sourceName: "泉佐野市 ひとり親家庭医療費助成事業"
  },
  {
    slug: "osaka-official-003-063-2026",
    title: "泉佐野市 母子・父子自立支援",
    organization: "泉佐野市",
    maxAmount: "自立支援給付等を実施",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "childcare",
      "education"
    ],
    eligibility: "母子・父子家庭等で自立支援の公式要件を満たす方",
    applicationPeriod: "事前相談・申請など公式手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/hitorioyashien/boshifushijiritsushien/index.html",
    sourceName: "泉佐野市 母子・父子自立支援"
  },
  {
    slug: "osaka-official-003-064-2026",
    title: "泉佐野市 保育士等就職補助金制度",
    organization: "泉佐野市",
    maxAmount: "保育士等就職補助金を支給",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "泉佐野市内で働く保育士等で公式要件を満たす方",
    applicationPeriod: "勤務・申請にあたり公式案内に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kodomo/kosodate/menu/1592558213099.html",
    sourceName: "泉佐野市 泉佐野市で働く保育士等を応援します"
  },
  {
    slug: "osaka-official-003-065-2026",
    title: "泉佐野市 ふるさと創生事業助成金",
    organization: "泉佐野市",
    maxAmount: "事業費を助成",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "employment"
    ],
    eligibility: "ふるさと創生事業に取り組み公式要件を満たす団体等",
    applicationPeriod: "公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/seikatsu/shoko/menu/18439.html",
    sourceName: "泉佐野市 ふるさと創生事業助成金について"
  },
  {
    slug: "osaka-official-003-066-2026",
    title: "泉佐野市 介護保険住宅改修費支給",
    organization: "泉佐野市",
    maxAmount: "介護保険住宅改修費を支給",
    maxAmountNum: 0,
    category: "nursing",
    relatedCategories: [
      "housing"
    ],
    eligibility: "要介護・要支援認定を受け住宅改修の公式要件を満たす方",
    applicationPeriod: "改修前申請など公式手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kenkou/kaigo/menu/11574.html",
    sourceName: "泉佐野市 介護保険住宅改修費の支給について"
  },
  {
    slug: "osaka-official-003-067-2026",
    title: "泉佐野市 介護施設等従事者支援事業",
    organization: "泉佐野市",
    maxAmount: "さのぽ付与等により支援",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "nursing"
    ],
    eligibility: "介護施設等従事者で公式要件を満たす方",
    applicationPeriod: "令和8年度の公式受付案内に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kenkou/kaigo/menu/18433.html",
    sourceName: "泉佐野市 令和8年度第1回泉佐野市介護施設等従事者支援事業"
  },
  {
    slug: "osaka-official-003-068-2026",
    title: "泉佐野市 災害時介護保険料等減免制度",
    organization: "泉佐野市",
    maxAmount: "介護保険料・利用者負担を減免",
    maxAmountNum: 0,
    category: "nursing",
    relatedCategories: [
      "disaster",
      "living"
    ],
    eligibility: "災害により被害を受け介護保険料等減免の公式要件を満たす方",
    applicationPeriod: "被災後、公式ページ記載の申請手続に従う",
    officialUrl: "https://www.city.izumisano.lg.jp/kakuka/kenkou/kaigo/menu/saigai.html",
    sourceName: "泉佐野市 災害における介護保険料および利用者負担の減免制度"
  }
];
