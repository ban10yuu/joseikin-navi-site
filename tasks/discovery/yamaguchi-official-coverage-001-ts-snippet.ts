const yamaguchiOfficial001Grants: Array<{
  slug: string;
  title: string;
  organization: string;
  maxAmount: string;
  maxAmountNum: number;
  category: Grant['category'];
  relatedCategories?: Grant['relatedCategories'];
  eligibility: string;
  applicationPeriod: string;
  officialUrl: string;
  sourceName: string;
}> = [
  {
    "slug": "yamaguchi-official-001-001-2026",
    "title": "宇部市 ブロック塀等の撤去費補助",
    "organization": "宇部市",
    "maxAmount": "補助金額倒壊の危険性の高いブロック塀等の撤去費（限度額10万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宇部市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月6日 申請 ときわ公園公式サイト ときわ動物園公式サイト ときわミュージアム公式サイト 宇部市野外彫刻展公式サイト しごと・産業 しごと・産業 トップ 閉じる 雇用・労働 都市計画・景観・緑化 道路・河川 上下水道 建築・開発・土",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/hojyojyosei_kojin/1009207.html",
    "sourceName": "ブロック塀等の撤去費補助"
  },
  {
    "slug": "yamaguchi-official-001-002-2026",
    "title": "宇部市 子ども医療",
    "organization": "宇部市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宇部市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月7日 申請 子育て情報・サークル 相談したい時 相談したい時 トップ 閉じる 育児相談をしたい 新生児・新乳児の育児相談 保育相談 ひとり親家庭等相談窓口 障害のあるこどものための相談窓口 こどもコーディネーター（子ども・若者なん",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/kosodate/kosodateouen/mokuteki/kosodate_teate/1003566.html",
    "sourceName": "子ども医療"
  },
  {
    "slug": "yamaguchi-official-001-003-2026",
    "title": "宇部市 公共交通等の減免等",
    "organization": "宇部市",
    "maxAmount": "助成額500円",
    "maxAmountNum": 500,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宇部市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月24日 申請 ときわ公園公式サイト ときわ動物園公式サイト ときわミュージアム公式サイト 宇部市野外彫刻展公式サイト しごと・産業 しごと・産業 トップ 閉じる 雇用・労働 都市計画・景観・緑化 道路・河川 上下水道 建築・開発・土",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/kenkou/1026872/1028150/1028152.html",
    "sourceName": "公共交通等の減免等"
  },
  {
    "slug": "yamaguchi-official-001-004-2026",
    "title": "宇部市 国保人間ドック費用助成",
    "organization": "宇部市",
    "maxAmount": "最大5,000円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宇部市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月10日 申請 ときわ公園公式サイト ときわ動物園公式サイト ときわミュージアム公式サイト 宇部市野外彫刻展公式サイト しごと・産業 しごと・産業 トップ 閉じる 雇用・労働 都市計画・景観・緑化 道路・河川 上下水道 建築・開発・土",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/kenkou/kenkoushinsa/1024782/1024245.html",
    "sourceName": "国保人間ドック費用助成"
  },
  {
    "slug": "yamaguchi-official-001-005-2026",
    "title": "宇部市 不妊・不育症の治療費等助成",
    "organization": "宇部市",
    "maxAmount": "助成額1年度あたり3万円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宇部市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月22日 申請 ときわ公園公式サイト ときわ動物園公式サイト ときわミュージアム公式サイト 宇部市野外彫刻展公式サイト しごと・産業 しごと・産業 トップ 閉じる 雇用・労働 都市計画・景観・緑化 道路・河川 上下水道 建築・開発・土",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/hojyojyosei_kojin/1003275.html",
    "sourceName": "不妊・不育症の治療費等助成"
  },
  {
    "slug": "yamaguchi-official-001-006-2026",
    "title": "宇部市 健康・省エネ住宅リフォーム助成",
    "organization": "宇部市",
    "maxAmount": "上限額15万円",
    "maxAmountNum": 150000,
    "category": "housing",
    "relatedCategories": [
      "medical",
      "living"
    ],
    "eligibility": "宇部市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 申請 ときわ公園公式サイト ときわ動物園公式サイト ときわミュージアム公式サイト 宇部市野外彫刻展公式サイト しごと・産業 しごと・産業 トップ 閉じる 雇用・労働 都市計画・景観・緑化 道路・河川 上下水道 建築・開発・土",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/hojyojyosei_kojin/1009208.html",
    "sourceName": "健康・省エネ住宅リフォーム助成"
  },
  {
    "slug": "yamaguchi-official-001-007-2026",
    "title": "宇部市 奨学金返還支援補助金",
    "organization": "宇部市",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宇部市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月25日 申請 ときわ公園公式サイト ときわ動物園公式サイト ときわミュージアム公式サイト 宇部市野外彫刻展公式サイト しごと・産業 しごと・産業 トップ 閉じる 雇用・労働 都市計画・景観・緑化 道路・河川 上下水道 建築・開発・土",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/kurashi/iju/iju_yakudadchi/1021878.html",
    "sourceName": "奨学金返還支援補助金"
  },
  {
    "slug": "yamaguchi-official-001-008-2026",
    "title": "宇部市 就学援助制度",
    "organization": "宇部市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宇部市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月16日 申請 子育て情報・サークル 相談したい時 相談したい時 トップ 閉じる 育児相談をしたい 新生児・新乳児の育児相談 保育相談 ひとり親家庭等相談窓口 障害のあるこどものための相談窓口 こどもコーディネーター（子ども・若者なん",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/kosodate/kosodateouen/mokuteki/kosodate_teate/1003569.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "yamaguchi-official-001-009-2026",
    "title": "宇部市 令和8年度若者起業家チャレンジ補助金",
    "organization": "宇部市",
    "maxAmount": "補助額補助率：補助対象経費の9/10以内補助上限額：150万円",
    "maxAmountNum": 1500000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宇部市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 申請 ときわ公園公式サイト ときわ動物園公式サイト ときわミュージアム公式サイト 宇部市野外彫刻展公式サイト しごと・産業 しごと・産業 トップ 閉じる 雇用・労働 都市計画・景観・緑化 道路・河川 上下水道 建築・開発・土",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/1010994/1028888.html",
    "sourceName": "令和8年度若者起業家チャレンジ補助金"
  },
  {
    "slug": "yamaguchi-official-001-010-2026",
    "title": "宇部市 ごみ減量化機器等購入費助成金",
    "organization": "宇部市",
    "maxAmount": "限度額25,000円",
    "maxAmountNum": 25000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宇部市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月7日 申請 ときわ公園公式サイト ときわ動物園公式サイト ときわミュージアム公式サイト 宇部市野外彫刻展公式サイト しごと・産業 しごと・産業 トップ 閉じる 雇用・労働 都市計画・景観・緑化 道路・河川 上下水道 建築・開発・土",
    "officialUrl": "https://www.city.ube.yamaguchi.jp/kurashi/gomi/genryou_recycle/1002031/1015115.html",
    "sourceName": "ごみ減量化機器等購入費助成金"
  },
  {
    "slug": "yamaguchi-official-001-011-2026",
    "title": "下関市 妊娠出産子育て支援事業",
    "organization": "下関市",
    "maxAmount": "1人につき5万円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "下関市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/51/84329.html",
    "sourceName": "妊娠出産子育て支援事業"
  },
  {
    "slug": "yamaguchi-official-001-012-2026",
    "title": "下関市 危険ブロック塀等の撤去費用を助成します",
    "organization": "下関市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "下関市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/77/129050.html",
    "sourceName": "危険ブロック塀等の撤去費用を助成します"
  },
  {
    "slug": "yamaguchi-official-001-013-2026",
    "title": "下関市 子ども医療",
    "organization": "下関市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "下関市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月1日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/life/3/19/101/",
    "sourceName": "子ども医療"
  },
  {
    "slug": "yamaguchi-official-001-014-2026",
    "title": "下関市 子育て支援施策 For Kids For Future",
    "organization": "下関市",
    "maxAmount": "1人当たり日額2,000円",
    "maxAmountNum": 2000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "下関市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年7月3日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/44/134497.html",
    "sourceName": "子育て支援施策 For Kids For Future"
  },
  {
    "slug": "yamaguchi-official-001-015-2026",
    "title": "下関市 高齢者の福祉サービス",
    "organization": "下関市",
    "maxAmount": "月額550円",
    "maxAmountNum": 550,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "下関市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年3月26日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/40/3500.html",
    "sourceName": "高齢者の福祉サービス"
  },
  {
    "slug": "yamaguchi-official-001-016-2026",
    "title": "下関市 令和8年度国民健康保険 特定健康診査",
    "organization": "下関市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "下関市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月2日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/42/5040.html",
    "sourceName": "令和8年度国民健康保険 特定健康診査"
  },
  {
    "slug": "yamaguchi-official-001-017-2026",
    "title": "下関市 住宅購入費用の一部を補助します",
    "organization": "下関市",
    "maxAmount": "上限額を超えない額(2)住宅の建築・購入費用（税抜）の2分の1補助額種別地域区分基礎額上限額市外からの転入市外から居住誘導区域外30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "下関市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月26日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/70/134729.html",
    "sourceName": "住宅購入費用の一部を補助します"
  },
  {
    "slug": "yamaguchi-official-001-018-2026",
    "title": "下関市 住宅改修の相談・支援業務",
    "organization": "下関市",
    "maxAmount": "2,000円を支給",
    "maxAmountNum": 2000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "下関市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2021年2月25日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/site/gyousei/4528.html",
    "sourceName": "住宅改修の相談・支援業務"
  },
  {
    "slug": "yamaguchi-official-001-019-2026",
    "title": "下関市 バリアフリー改修工事を行った住宅に対する固定資産税の減額制度",
    "organization": "下関市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "下関市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2021年11月29日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/17/1349.html",
    "sourceName": "バリアフリー改修工事を行った住宅に対する固定資産税の減額制度"
  },
  {
    "slug": "yamaguchi-official-001-020-2026",
    "title": "下関市 奨学金返還支援補助金制度",
    "organization": "下関市",
    "maxAmount": "年額上限20万円",
    "maxAmountNum": 200000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "下関市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年5月13日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/58/50536.html",
    "sourceName": "奨学金返還支援補助金制度"
  },
  {
    "slug": "yamaguchi-official-001-021-2026",
    "title": "下関市 耐震改修費用の一部を補助します",
    "organization": "下関市",
    "maxAmount": "補助額最大115万円",
    "maxAmountNum": 1150000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "下関市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/77/2585.html",
    "sourceName": "耐震改修費用の一部を補助します"
  },
  {
    "slug": "yamaguchi-official-001-022-2026",
    "title": "下関市 中小企業制度融資のご案内",
    "organization": "下関市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "下関市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月22日 受付 ライフステージ 妊娠・出産 子育て・教育 就職・退職 引越・住まい 出会い・結婚 おくやみ オンライン手続き 申請書 ダウンロード 電子申請 公共施設予約 図書館 予約・検索 ＜外部リンク＞ 粗大ごみ 受け付け ＜外部",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/57/158370.html",
    "sourceName": "中小企業制度融資のご案内"
  },
  {
    "slug": "yamaguchi-official-001-023-2026",
    "title": "下関市 令和8年度前期スマートハウス普及促進補助金",
    "organization": "下関市",
    "maxAmount": "上限200,000円",
    "maxAmountNum": 200000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "下関市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月12日 交付審査順の決定） - 下関市 ページの先頭です",
    "officialUrl": "https://www.city.shimonoseki.lg.jp/soshiki/53/87039.html",
    "sourceName": "令和8年度前期スマートハウス普及促進補助金"
  },
  {
    "slug": "yamaguchi-official-001-024-2026",
    "title": "山口市 危険ブロック塀等の除却費用の補助について",
    "organization": "山口市",
    "maxAmount": "上限額100，000円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "山口市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/74/63785.html",
    "sourceName": "危険ブロック塀等の除却費用の補助について"
  },
  {
    "slug": "yamaguchi-official-001-025-2026",
    "title": "山口市 こども医療費助成制度",
    "organization": "山口市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年3月1日 募集 支援者向け講座 イベント カレンダー 1.妊娠おめでとうございます 妊娠したら保健センターへ 2.ようこそ赤ちゃん 赤ちゃんが生まれたら 助成・手当など 健康診査 予防接種 育児支援、子育て支援（中学生まで） 3.子育",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/kodomo/7179.html",
    "sourceName": "こども医療費助成制度"
  },
  {
    "slug": "yamaguchi-official-001-026-2026",
    "title": "山口市 妊婦支援給付金",
    "organization": "山口市",
    "maxAmount": "支給額：妊婦1人あたり5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "山口市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年7月22日 募集 支援者向け講座 イベント カレンダー 1.妊娠おめでとうございます 妊娠したら保健センターへ 2.ようこそ赤ちゃん 赤ちゃんが生まれたら 助成・手当など 健康診査 予防接種 育児支援、子育て支援（中学生まで） 3.子育",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/kodomo/173683.html",
    "sourceName": "妊婦支援給付金"
  },
  {
    "slug": "yamaguchi-official-001-027-2026",
    "title": "山口市 自主防災組織の設立推進",
    "organization": "山口市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "山口市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/4/2832.html",
    "sourceName": "自主防災組織の設立推進"
  },
  {
    "slug": "yamaguchi-official-001-028-2026",
    "title": "山口市 利用者負担額（保育料）について",
    "organization": "山口市",
    "maxAmount": "月額上限42,000円",
    "maxAmountNum": 42000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "山口市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 募集 支援者向け講座 イベント カレンダー 1.妊娠おめでとうございます 妊娠したら保健センターへ 2.ようこそ赤ちゃん 赤ちゃんが生まれたら 助成・手当など 健康診査 予防接種 育児支援、子育て支援（中学生まで） 3.子育",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/kodomo/50089.html",
    "sourceName": "利用者負担額（保育料）について"
  },
  {
    "slug": "yamaguchi-official-001-029-2026",
    "title": "山口市 生活支援型給食サービス",
    "organization": "山口市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "山口市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年3月30日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/korei/4715.html",
    "sourceName": "生活支援型給食サービス"
  },
  {
    "slug": "yamaguchi-official-001-030-2026",
    "title": "山口市 若者の住宅ローン利息の支払いを支援します",
    "organization": "山口市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/26/173994.html",
    "sourceName": "若者の住宅ローン利息の支払いを支援します"
  },
  {
    "slug": "yamaguchi-official-001-031-2026",
    "title": "山口市 令和8年度山口市わくわく移住支援補助金",
    "organization": "山口市",
    "maxAmount": "補助金額移住元補助金額東京23区に在住または通勤していた方単身の場合：60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月11日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/63/62098.html",
    "sourceName": "令和8年度山口市わくわく移住支援補助金"
  },
  {
    "slug": "yamaguchi-official-001-032-2026",
    "title": "山口市 手当・助成",
    "organization": "山口市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "山口市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集 支援者向け講座 イベント カレンダー 1.妊娠おめでとうございます 妊娠したら保健センターへ 2.ようこそ赤ちゃん 赤ちゃんが生まれたら 助成・手当など 健康診査 予防接種 育児支援、子育て支援（中学生まで） 3.子育",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/kodomo/list287.html",
    "sourceName": "手当・助成"
  },
  {
    "slug": "yamaguchi-official-001-033-2026",
    "title": "山口市 介護用品の支給",
    "organization": "山口市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年1月1日 支給 - 山口市ウェブサイト ページの先頭です",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/korei/4719.html",
    "sourceName": "介護用品の支給"
  },
  {
    "slug": "yamaguchi-official-001-034-2026",
    "title": "山口市 奨学金制度のお知らせ",
    "organization": "山口市",
    "maxAmount": "月額4万円",
    "maxAmountNum": 40000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2025年12月1日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/106/87821.html",
    "sourceName": "奨学金制度のお知らせ"
  },
  {
    "slug": "yamaguchi-official-001-035-2026",
    "title": "山口市 成人用肺炎球菌ワクチン定期予防接種について",
    "organization": "山口市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/korei/3026.html",
    "sourceName": "成人用肺炎球菌ワクチン定期予防接種について"
  },
  {
    "slug": "yamaguchi-official-001-036-2026",
    "title": "山口市 経営改善支援補助金",
    "organization": "山口市",
    "maxAmount": "限度額経営改善計画​（早期経営改善計画を含む）の策定​計画の策定に要する自己負担費用​補助対象経費の2分の110万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "山口市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年3月27日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/63/3879.html",
    "sourceName": "経営改善支援補助金"
  },
  {
    "slug": "yamaguchi-official-001-037-2026",
    "title": "山口市 令和8年度山口市タクシー利用券",
    "organization": "山口市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "山口市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年3月17日 交付申請について - 山口市ウェブサイト ページの先頭です",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/korei/52395.html",
    "sourceName": "令和8年度山口市タクシー利用券"
  },
  {
    "slug": "yamaguchi-official-001-038-2026",
    "title": "山口市 国保の特定健診・人間ドック等について",
    "organization": "山口市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "山口市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月9日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/korei/26723.html",
    "sourceName": "国保の特定健診・人間ドック等について"
  },
  {
    "slug": "yamaguchi-official-001-039-2026",
    "title": "山口市 令和8年度山口市安心快適住まいる助成事業",
    "organization": "山口市",
    "maxAmount": "上限額​紙商品券で受取の場合工事金額の10％（上限5万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月22日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/63/187527.html",
    "sourceName": "令和8年度山口市安心快適住まいる助成事業"
  },
  {
    "slug": "yamaguchi-official-001-040-2026",
    "title": "山口市 新卒・第二新卒者雇用促進助成金",
    "organization": "山口市",
    "maxAmount": "上限額＞項目内容助成金額上限額初任給・賃金の引き上げ初任給や賃金を定期昇給相当分を除き３％以上引き上げるもの新卒者等1人につき20万円",
    "maxAmountNum": 200000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請・届出・証明書一覧 戸籍証明書等の請求(個人による請求) 戸籍・住民登録・パスポート・マイナンバーカード 電子申請手続一覧 ごみの分別 山口市コミュニティバスの路線図と時刻表について 列車・バス等の時刻や運賃 よくある質",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/63/139830.html",
    "sourceName": "新卒・第二新卒者雇用促進助成金"
  },
  {
    "slug": "yamaguchi-official-001-041-2026",
    "title": "山口市 令和8年度就学援助申請について",
    "organization": "山口市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年7月10日 申請について - 山口市子育て応援サイト - 山口市ウェブサイト ページの先頭です",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/site/kodomo/189783.html",
    "sourceName": "令和8年度就学援助申請について"
  },
  {
    "slug": "yamaguchi-official-001-042-2026",
    "title": "山口市 令和8年度山口市創業広告支援補助金",
    "organization": "山口市",
    "maxAmount": "限度額補助対象経費の2分の1以内、補助限度額10万円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "山口市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 募集しています",
    "officialUrl": "https://www.city.yamaguchi.lg.jp/soshiki/63/91185.html",
    "sourceName": "令和8年度山口市創業広告支援補助金"
  },
  {
    "slug": "yamaguchi-official-001-043-2026",
    "title": "防府市 ブロック塀等の安全対策をしましょう",
    "organization": "防府市",
    "maxAmount": "補助金額及び募集期間補助限度額は100,000円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "防府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 募集期間 補助限度額は100,000円(補助対象費用の3分の2)です",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/soshiki/31/kikenburokku.html",
    "sourceName": "ブロック塀等の安全対策をしましょう"
  },
  {
    "slug": "yamaguchi-official-001-044-2026",
    "title": "防府市 子ども医療費助成制度",
    "organization": "防府市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "防府市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年2月21日 申請手続きがお済みでない人は、お早めにお手続きください",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/soshiki/19/kodomoiryou.html",
    "sourceName": "子ども医療費助成制度"
  },
  {
    "slug": "yamaguchi-official-001-045-2026",
    "title": "防府市 高齢者等バス・タクシー運賃助成制度",
    "organization": "防府市",
    "maxAmount": "最大）助成券1枚につき、運賃が100円",
    "maxAmountNum": 100,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "防府市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月11日 交付対象要件を満たしている人 ※年齢にかかわらず、高齢者等バス・タクシー運賃助成と福祉タクシー助成は、いずれか一方のみ助成を受けられます",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/soshiki/60/kourei-bustaxi.html",
    "sourceName": "高齢者等バス・タクシー運賃助成制度"
  },
  {
    "slug": "yamaguchi-official-001-046-2026",
    "title": "防府市 幸せますケンシン 特定健診・人間ドック",
    "organization": "防府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "防府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 交付できますのでお気軽にお申し出ください",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/soshiki/14/tokuteiningendokku0411.html",
    "sourceName": "幸せますケンシン 特定健診・人間ドック"
  },
  {
    "slug": "yamaguchi-official-001-047-2026",
    "title": "防府市 空き家利活用改修費補助金 令和8年度",
    "organization": "防府市",
    "maxAmount": "上限50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "防府市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月17日 募集を以下のとおり行いますので、お知らせします",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/site/akiya/hojokin-rikatsuyou.html",
    "sourceName": "空き家利活用改修費補助金 令和8年度"
  },
  {
    "slug": "yamaguchi-official-001-048-2026",
    "title": "防府市 定住促進奨学金の返還支援について",
    "organization": "防府市",
    "maxAmount": "月額3万円",
    "maxAmountNum": 30000,
    "category": "housing",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "防府市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年12月16日 申請はできません",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/soshiki/37/teijyushien.html",
    "sourceName": "定住促進奨学金の返還支援について"
  },
  {
    "slug": "yamaguchi-official-001-049-2026",
    "title": "防府市 就学援助費の申請を受け付けます",
    "organization": "防府市",
    "maxAmount": "限度額小学校22,690円",
    "maxAmountNum": 22690,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "防府市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月13日 申請を受け付けます - 防府市公式ホームページ ページの先頭です",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/soshiki/38/syugaku.html",
    "sourceName": "就学援助費の申請を受け付けます"
  },
  {
    "slug": "yamaguchi-official-001-050-2026",
    "title": "防府市 令和8年度創業チャレンジ支援事業補助金",
    "organization": "防府市",
    "maxAmount": "補助金額■【チャレンジ店舗出店事業】補助対象経費（消費税および地方消費税を除く）の1/2以内月額上限5万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "防府市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月3日 募集チラシ [PDFファイル／945KB] 補助対象者 申請日時点で創業後1年以内の方、又は申請日以後に市内で創業しようとする方で、次のすべてに該当する方 1.補助金の交付決定日または創業した日から3年以上継続して事業を営む",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/soshiki/24/challengeshophozyo.html",
    "sourceName": "令和8年度創業チャレンジ支援事業補助金"
  },
  {
    "slug": "yamaguchi-official-001-051-2026",
    "title": "防府市 雨水貯留浸透施設の設置を助成します",
    "organization": "防府市",
    "maxAmount": "助成額：設置費の３分の２に相当する額・浄化槽転用雨水貯留槽（上限100,000円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "防府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請は雨水貯留施設の設置工事前にお願いします",
    "officialUrl": "https://www.city.hofu.yamaguchi.jp/soshiki/27/usuichoryuushinntoushisetu.html",
    "sourceName": "雨水貯留浸透施設の設置を助成します"
  },
  {
    "slug": "yamaguchi-official-001-052-2026",
    "title": "萩市 乳幼児・子ども医療費助成制度",
    "organization": "萩市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "萩市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請の方法 対象児童の資格情報が分かるもの（マイナ保険証、資格確認書、資格情報のお知らせいずれか１つ）をご用意のうえ、市役所子育て支援課または各総合事務所市民窓口部門、支所出張所に備付の申請書を提出してください",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/35/h44361.html",
    "sourceName": "乳幼児・子ども医療費助成制度"
  },
  {
    "slug": "yamaguchi-official-001-053-2026",
    "title": "萩市 ひとり親家庭医療費助成制度",
    "organization": "萩市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "萩市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請の方法 子育て支援課、各総合事務所市民窓口部門、支所・出張所に備付けの受給者証交付申請書を提出してください",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/35/h44363.html",
    "sourceName": "ひとり親家庭医療費助成制度"
  },
  {
    "slug": "yamaguchi-official-001-054-2026",
    "title": "萩市 児童扶養手当",
    "organization": "萩市",
    "maxAmount": "月額48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "萩市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給要件、所得制限があります",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/35/1457.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "yamaguchi-official-001-055-2026",
    "title": "萩市 交通遺児支援金給付制度",
    "organization": "萩市",
    "maxAmount": "年額5,000円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "萩市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年10月29日 支給します",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/35/1468.html",
    "sourceName": "交通遺児支援金給付制度"
  },
  {
    "slug": "yamaguchi-official-001-056-2026",
    "title": "萩市 児童手当",
    "organization": "萩市",
    "maxAmount": "月額児童の年齢支給月額３歳未満第１子・第２子１５，０００円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "萩市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年6月2日 支給するものです",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/35/h47657.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "yamaguchi-official-001-057-2026",
    "title": "萩市 医療費の助成",
    "organization": "萩市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "萩市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年5月31日 交付を受けている （2）療育手帳（A）の交付を受けている （3）精神障害者保健福祉手帳（1級）の交付を受けている （4）1級の障害年金または特別障害給付金を受けている （5）特別児童扶養手当（1級）を受けている （6）（1）",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/95/1334.html",
    "sourceName": "医療費の助成"
  },
  {
    "slug": "yamaguchi-official-001-058-2026",
    "title": "萩市 各種手当・年金等",
    "organization": "萩市",
    "maxAmount": "支給額月額29,590円",
    "maxAmountNum": 29590,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "萩市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 支給する手当です",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/95/1332.html",
    "sourceName": "各種手当・年金等"
  },
  {
    "slug": "yamaguchi-official-001-059-2026",
    "title": "萩市 ひとり家庭自立支援教育訓練給付金支給事業",
    "organization": "萩市",
    "maxAmount": "支給額対象講座の受講料の6割相当額（12,000円",
    "maxAmountNum": 12000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "萩市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2022年6月21日 支給事業 - 萩市ホームページ ページの先頭です",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/35/1460.html",
    "sourceName": "ひとり家庭自立支援教育訓練給付金支給事業"
  },
  {
    "slug": "yamaguchi-official-001-060-2026",
    "title": "萩市 ひとり親家庭高等職業訓練促進給付金等事業",
    "organization": "萩市",
    "maxAmount": "上限４年）▼支給額○高等職業訓練促進給付金市民税非課税世帯の方：月額100,000円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "employment",
      "living"
    ],
    "eligibility": "萩市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2022年6月21日 支給対象者 児童扶養手当の支給を受けているかまたは同様の所得水準のひとり親家庭の父または母で、資格取得する可能性が高く、適職に就くために必要と認められる方 ▼対象資格 １年以上（令和3年4月1日から令和5年3月31日までに就",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/35/1461.html",
    "sourceName": "ひとり親家庭高等職業訓練促進給付金等事業"
  },
  {
    "slug": "yamaguchi-official-001-061-2026",
    "title": "萩市 高齢者への補聴器購入費助成",
    "organization": "萩市",
    "maxAmount": "上限30,000円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "萩市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年5月27日 交付を受けていない方 ３",
    "officialUrl": "https://www.city.hagi.lg.jp/site/hagikoureihukusi/h69289.html",
    "sourceName": "高齢者への補聴器購入費助成"
  },
  {
    "slug": "yamaguchi-official-001-062-2026",
    "title": "萩市 保育料・副食費の無償化",
    "organization": "萩市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "萩市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請手続きは不要です",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/35/h61484.html",
    "sourceName": "保育料・副食費の無償化"
  },
  {
    "slug": "yamaguchi-official-001-063-2026",
    "title": "萩市 介護保険負担限度額認定申請",
    "organization": "萩市",
    "maxAmount": "限度額第１段階880円",
    "maxAmountNum": 880,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "萩市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年11月1日 申請 - 萩市ホームページ ページの先頭です",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/96/h15927.html",
    "sourceName": "介護保険負担限度額認定申請"
  },
  {
    "slug": "yamaguchi-official-001-064-2026",
    "title": "萩市 特定福祉用具販売",
    "organization": "萩市",
    "maxAmount": "１０万円を限度",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "萩市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年5月19日 申請をして９割～７割の支給を受けるという、いわゆる「償還払い」を原則としています",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/96/h16299.html",
    "sourceName": "特定福祉用具販売"
  },
  {
    "slug": "yamaguchi-official-001-065-2026",
    "title": "萩市 萩市中小企業等事業拡大補助金",
    "organization": "萩市",
    "maxAmount": "上限額）１販路拡大事業ア物産展等出展・・・県外で開催されるもののうち、販売の機会を有するもの（上限3万円",
    "maxAmountNum": 30000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "萩市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請用紙が変更となっていますので、ご確認ください",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/49/h59523.html",
    "sourceName": "萩市中小企業等事業拡大補助金"
  },
  {
    "slug": "yamaguchi-official-001-066-2026",
    "title": "萩市 萩市の移住（就業・創業）支援に係る各種制度",
    "organization": "萩市",
    "maxAmount": "最大200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "萩市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 支給しています",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/49/h34417.html",
    "sourceName": "萩市の移住（就業・創業）支援に係る各種制度"
  },
  {
    "slug": "yamaguchi-official-001-067-2026",
    "title": "萩市 令和8年度 萩市介護人材資格取得等助成金制度",
    "organization": "萩市",
    "maxAmount": "上限額（１）介護職員初任者研修（助成限度額：５０，０００円",
    "maxAmountNum": 50000,
    "category": "education",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "萩市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月15日 受付を終了する場合がありますので、受講（受験）が決まり次第お早めにご申請ください",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/96/h64775.html",
    "sourceName": "令和8年度 萩市介護人材資格取得等助成金制度"
  },
  {
    "slug": "yamaguchi-official-001-068-2026",
    "title": "萩市 浄化槽設置費に対する補助制度",
    "organization": "萩市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "萩市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年9月19日 申請方法 浄化槽工事業者が代行して行いますので、業者まで申し出てください",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/61/422.html",
    "sourceName": "浄化槽設置費に対する補助制度"
  },
  {
    "slug": "yamaguchi-official-001-069-2026",
    "title": "萩市 萩市下水道接続工事補助金",
    "organization": "萩市",
    "maxAmount": "補助額８万円",
    "maxAmountNum": 80000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "萩市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年4月1日 交付します",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/61/h48729.html",
    "sourceName": "萩市下水道接続工事補助金"
  },
  {
    "slug": "yamaguchi-official-001-070-2026",
    "title": "萩市 生ごみ自家用処理容器購入費補助制度",
    "organization": "萩市",
    "maxAmount": "限度額４，０００円",
    "maxAmountNum": 4000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "萩市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請をする前に購入してもよいですか？ A 補助金の交付が決定してから購入していただきます",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/32/h68392.html",
    "sourceName": "生ごみ自家用処理容器購入費補助制度"
  },
  {
    "slug": "yamaguchi-official-001-071-2026",
    "title": "萩市 資源ごみ再利用推進事業奨励金支給制度",
    "organization": "萩市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "萩市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2021年4月1日 支給制度 - 萩市ホームページ ページの先頭です",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/32/523.html",
    "sourceName": "資源ごみ再利用推進事業奨励金支給制度"
  },
  {
    "slug": "yamaguchi-official-001-072-2026",
    "title": "萩市 町内会等運営費補助制度",
    "organization": "萩市",
    "maxAmount": "補助額摘要町内会等運営費補助町内会等の運営経費町内会等の規模に応じて※(1)組織割＋(2)世帯割（680円",
    "maxAmountNum": 680,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "萩市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2007年4月1日 交付します",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/15/1615.html",
    "sourceName": "町内会等運営費補助制度"
  },
  {
    "slug": "yamaguchi-official-001-073-2026",
    "title": "萩市 防犯外灯設置費補助制度",
    "organization": "萩市",
    "maxAmount": "限度額（１基につき）防犯外灯の新設または改善防犯外灯の新設または改善に要する経費ＬＥＤ照明3分の2以内35,000円",
    "maxAmountNum": 35000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "萩市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年12月9日 交付します",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/15/1614.html",
    "sourceName": "防犯外灯設置費補助制度"
  },
  {
    "slug": "yamaguchi-official-001-074-2026",
    "title": "萩市 奨学金返還支援事業",
    "organization": "萩市",
    "maxAmount": "最大5年間で44.5万円",
    "maxAmountNum": 445000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "萩市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2025年8月1日 申請と補助金交付申請が必要です",
    "officialUrl": "https://www.city.hagi.lg.jp/soshiki/86/h60566.html",
    "sourceName": "奨学金返還支援事業"
  }
];
