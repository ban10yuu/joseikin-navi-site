const kochiOfficial007Grants: Array<{
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
    "slug": "kochi-official-007-001-2026",
    "title": "四万十町 こども誰でも通園制度",
    "organization": "四万十町",
    "maxAmount": "1人1時間あたり300円",
    "maxAmountNum": 300,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "四万十町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請時に「非課税証明書」など所得を確認できる書類の提出が必要です",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=12139",
    "sourceName": "こども誰でも通園制度"
  },
  {
    "slug": "kochi-official-007-002-2026",
    "title": "四万十町 四万十町の住宅補助金制度",
    "organization": "四万十町",
    "maxAmount": "最大200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和７年９月１日 交付します",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=12279",
    "sourceName": "四万十町の住宅補助金制度"
  },
  {
    "slug": "kochi-official-007-003-2026",
    "title": "四万十町 四万十町空き家家財道具等処分費補助金",
    "organization": "四万十町",
    "maxAmount": "補助金額について補助率10分の10以内（1,000円",
    "maxAmountNum": 1000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和７年９月１日 交付します",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11725",
    "sourceName": "四万十町空き家家財道具等処分費補助金"
  },
  {
    "slug": "kochi-official-007-004-2026",
    "title": "四万十町 奨学金返還支援制度",
    "organization": "四万十町",
    "maxAmount": "月額２万円",
    "maxAmountNum": 20000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請・募集のお知らせ－｜四万十町役場 四万十町 本文へスキップ 手続き くらし 子育て・教育 健康・医療・福祉 環境・まちづくり 観光・文化・産業 議会、選挙 防災・救急 手続き・届出 年金・保険 税金 ごみ 住まい 水道・",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=9769",
    "sourceName": "奨学金返還支援制度"
  },
  {
    "slug": "kochi-official-007-005-2026",
    "title": "四万十町 未熟児養育医療給付制度",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "四万十町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月2日 提出が必要となりました",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11714",
    "sourceName": "未熟児養育医療給付制度"
  },
  {
    "slug": "kochi-official-007-006-2026",
    "title": "四万十町 生ごみ処理容器等購入設置事業費補助金",
    "organization": "四万十町",
    "maxAmount": "補助金額（1）生ごみ処理容器（コンポスト）購入価格の1/2を上限とし最大2,500円",
    "maxAmountNum": 2500,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年12月18日 申請受付期間 期間：通年（予算額に達した時点で終了します） 場所：本庁 環境水道課、大正地域振興局 町民生活課、十和地域振興局 町民生活課 補助対象 補助の対象となるのは以下の条件を満たす方で、1世帯につき1基が認められます",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=12386",
    "sourceName": "生ごみ処理容器等購入設置事業費補助金"
  },
  {
    "slug": "kochi-official-007-007-2026",
    "title": "四万十町 移住者向け家賃補助制度",
    "organization": "四万十町",
    "maxAmount": "補助金額は、家賃から住宅手当と2万円",
    "maxAmountNum": 20000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和6年3月20日 申請月です！ 四万十町では、本町に転入し民間の賃貸住宅に入居された方を対象に、家賃の一部補助を行っています",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11772",
    "sourceName": "移住者向け家賃補助制度"
  },
  {
    "slug": "kochi-official-007-008-2026",
    "title": "四万十町 四万十町産後ケア事業",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和７年３月２５日 申請を行います",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11099",
    "sourceName": "四万十町産後ケア事業"
  },
  {
    "slug": "kochi-official-007-009-2026",
    "title": "四万十町 多胎妊婦を対象とした妊婦一般健康診査の助成",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "四万十町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書兼請求書（PDF：99KB） PDF形式のファイルをご覧いただく場合には、Adobe社が提供するAdobe Readerが必要です",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11932",
    "sourceName": "多胎妊婦を対象とした妊婦一般健康診査の助成"
  },
  {
    "slug": "kochi-official-007-010-2026",
    "title": "四万十町 妊婦健康診査通院費助成",
    "organization": "四万十町",
    "maxAmount": "助成額・通院１回あたり5,000円",
    "maxAmountNum": 5000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "四万十町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和７年３月２５日 交付後の14回を上限・町外医療機関を受診した場合のみ） 申請方法 ・最終の妊婦健診終了後、又は出生届出時に「妊婦健康診査通院費助成申請書兼請求書」を下記の窓口に提出",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=6040",
    "sourceName": "妊婦健康診査通院費助成"
  },
  {
    "slug": "kochi-official-007-011-2026",
    "title": "四万十町 不妊治療費助成事業",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "四万十町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和７年３月２５日 交付申請書等（PDF：83KB） PDF形式のファイルをご覧いただく場合には、Adobe社が提供するAdobe Readerが必要です",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=10426",
    "sourceName": "不妊治療費助成事業"
  },
  {
    "slug": "kochi-official-007-012-2026",
    "title": "四万十町 子どもの予防接種",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "四万十町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和７年３月２５日 期限を過ぎると、任意接種となり、接種費用は自己負担となります",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=38",
    "sourceName": "子どもの予防接種"
  },
  {
    "slug": "kochi-official-007-013-2026",
    "title": "四万十町 児童手当",
    "organization": "四万十町",
    "maxAmount": "月額年齢支給額3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給することにより、家庭等における生活の安定に寄与するとともに、次代の社会を担う児童の健やかな成長に資することを目的としています",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11800",
    "sourceName": "児童手当"
  },
  {
    "slug": "kochi-official-007-014-2026",
    "title": "四万十町 児童扶養手当",
    "organization": "四万十町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給される手当です",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11537",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kochi-official-007-015-2026",
    "title": "四万十町 乳幼児・児童医療費助成制度",
    "organization": "四万十町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "四万十町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和７年３月２５日 申請方法と使用方法 町民課または各地域振興局町民生活課へお越しください",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=1074",
    "sourceName": "乳幼児・児童医療費助成制度"
  },
  {
    "slug": "kochi-official-007-016-2026",
    "title": "四万十町 四万十町高等学校通学費助成金制度",
    "organization": "四万十町",
    "maxAmount": "助成額定期乗車券購入費の２分の１ただし、町内から通学している場合であって月額6，000円",
    "maxAmountNum": 6000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "四万十町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和5年12月26日 申請方法 下記の書類等を定期乗車券を購入した月、もしくは年度末までに申請してください",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=4605",
    "sourceName": "四万十町高等学校通学費助成金制度"
  },
  {
    "slug": "kochi-official-007-017-2026",
    "title": "四万十町 ひとり親家庭医療費助成制度",
    "organization": "四万十町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "四万十町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和７年３月２５日 申請方法 ・必要なもの １",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=27",
    "sourceName": "ひとり親家庭医療費助成制度"
  },
  {
    "slug": "kochi-official-007-018-2026",
    "title": "四万十町 地域で支える家具転倒防止対策補助金",
    "organization": "四万十町",
    "maxAmount": "最大25,000円",
    "maxAmountNum": 25000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "四万十町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月1日 交付されます 四万十町では、地震の揺れによる被害を軽減するため、家具転倒防止金具等の購入費や 自主防災組織がそれらの金具等の取り付けを行う場合の取付費に対して補助金を交付いた します",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11813",
    "sourceName": "地域で支える家具転倒防止対策補助金"
  },
  {
    "slug": "kochi-official-007-019-2026",
    "title": "四万十町 家計応援商品券配布事業",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和８年２月１日 交付金」を活用し、町内の店舗等で使用できる 「四万十町家計応援商品券」 を配布します",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=12101",
    "sourceName": "家計応援商品券配布事業"
  },
  {
    "slug": "kochi-official-007-020-2026",
    "title": "四万十町 家計応援商品券取扱店舗募集",
    "organization": "四万十町",
    "maxAmount": "1人あたり20,000円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年5月1日 募集について｜四万十町役場 四万十町 本文へスキップ 手続き くらし 子育て・教育 健康・医療・福祉 環境・まちづくり 観光・文化・産業 議会、選挙 防災・救急 手続き・届出 年金・保険 税金 ごみ 住まい 水道・下水道 交",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=12089",
    "sourceName": "家計応援商品券取扱店舗募集"
  },
  {
    "slug": "kochi-official-007-021-2026",
    "title": "四万十町 子育て支援住宅",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "housing",
      "living"
    ],
    "eligibility": "四万十町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和７年９月１日 募集物件 名 称 所在地 構造 間取り 床面積 家賃額 米奥団地5号 米奥1983番地3 木造平屋建 3ＬＤＫ 81.15㎡ 45,000円/月 米奥団地6号 米奥1983番地2 木造平屋建 3ＬＤＫ 81.98㎡ 45,0",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=12293",
    "sourceName": "子育て支援住宅"
  },
  {
    "slug": "kochi-official-007-022-2026",
    "title": "四万十町 農業支援住宅の入居者募集",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "募集します｜四万十町役場 四万十町 本文へスキップ 手続き くらし 子育て・教育 健康・医療・福祉 環境・まちづくり 観光・文化・産業 議会、選挙 防災・救急 手続き・届出 年金・保険 税金 ごみ 住まい 水道・下水道 交通",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11885",
    "sourceName": "農業支援住宅の入居者募集"
  },
  {
    "slug": "kochi-official-007-023-2026",
    "title": "四万十町 四万十町支援制度一覧",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "四万十町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和5年12月26日 交付 産後ケア事業 四万十の木ふれあい木育推進 産婦人科・小児科オンライン 子育て家庭のショートステイ 新生児聴覚検査費助成 乳児一般健康診査費助成 子育て支援センター 多子世帯の保育料軽減 ファミリーサポートセンター 乳幼",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11748",
    "sourceName": "四万十町支援制度一覧"
  },
  {
    "slug": "kochi-official-007-024-2026",
    "title": "四万十町 地方創生移住支援金",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "支給について｜四万十町役場 四万十町 本文へスキップ 手続き くらし 子育て・教育 健康・医療・福祉 環境・まちづくり 観光・文化・産業 議会、選挙 防災・救急 手続き・届出 年金・保険 税金 ごみ 住まい 水道・下水道 交",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=10800",
    "sourceName": "地方創生移住支援金"
  },
  {
    "slug": "kochi-official-007-025-2026",
    "title": "四万十町 木造住宅の耐震化",
    "organization": "四万十町",
    "maxAmount": "上限：220，000円",
    "maxAmountNum": 220000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年4月14日 受付を次のとおり開始します",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11105",
    "sourceName": "木造住宅の耐震化"
  },
  {
    "slug": "kochi-official-007-026-2026",
    "title": "四万十町 浄化槽設置整備事業費補助金",
    "organization": "四万十町",
    "maxAmount": "限度額5人槽332，000円",
    "maxAmountNum": 332000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和9年3月10日 募集について｜四万十町役場 四万十町 本文へスキップ 手続き くらし 子育て・教育 健康・医療・福祉 環境・まちづくり 観光・文化・産業 議会、選挙 防災・救急 手続き・届出 年金・保険 税金 ごみ 住まい 水道・下水道 交",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11724",
    "sourceName": "浄化槽設置整備事業費補助金"
  },
  {
    "slug": "kochi-official-007-027-2026",
    "title": "四万十町 老朽住宅等の解体補助",
    "organization": "四万十町",
    "maxAmount": "補助金額】老朽住宅除却事業補助金（上限：1,675,000円",
    "maxAmountNum": 1675000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和7年4月4日 交付します",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=11416",
    "sourceName": "老朽住宅等の解体補助"
  },
  {
    "slug": "kochi-official-007-028-2026",
    "title": "四万十町 町産材利用住宅等建築",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年12月18日 申請をお願いします",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=10881",
    "sourceName": "町産材利用住宅等建築"
  },
  {
    "slug": "kochi-official-007-029-2026",
    "title": "四万十町 空き家活用事業費補助金",
    "organization": "四万十町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "四万十町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年12月18日 申請者等が町税等を滞納していないこと",
    "officialUrl": "https://www.town.shimanto.lg.jp/life/detail.php?hdnKey=4090",
    "sourceName": "空き家活用事業費補助金"
  },
  {
    "slug": "kochi-official-007-030-2026",
    "title": "大月町 支援制度いろいろ",
    "organization": "大月町",
    "maxAmount": "上限50万円",
    "maxAmountNum": 500000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大月町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請は空き家の所有者に限る ●移住支援：上限50万円 ●定住支援：上限40万円（新婚、子育て世帯については上限50万円） ●荷物処分：上限5万円 まちづくり推進課 73-1181 仕事 支援制度名 支援の内容 お問合せ 担い",
    "officialUrl": "https://www.town.otsuki.kochi.jp/iju/info/shien.php",
    "sourceName": "支援制度いろいろ"
  },
  {
    "slug": "kochi-official-007-031-2026",
    "title": "大月町 住宅断熱改修費補助金",
    "organization": "大月町",
    "maxAmount": "限度額補助率：対象経費の３分の１補助限度額：120万円",
    "maxAmountNum": 1200000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大月町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 令和8年度 大月町住宅断",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=2582",
    "sourceName": "住宅断熱改修費補助金"
  },
  {
    "slug": "kochi-official-007-032-2026",
    "title": "大月町 定額減税補足給付金（不足額給付）",
    "organization": "大月町",
    "maxAmount": "1人あたり原則4万円",
    "maxAmountNum": 40000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大月町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年10月31日 募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 定額減税補足給付金（不足",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=2554",
    "sourceName": "定額減税補足給付金（不足額給付）"
  },
  {
    "slug": "kochi-official-007-033-2026",
    "title": "大月町 価格高騰対策住民税非課税世帯等支援給付金",
    "organization": "大月町",
    "maxAmount": "1世帯当たり3万円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大月町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和6年12月13日 募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 令和6年度 大月町価格高",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=2358",
    "sourceName": "価格高騰対策住民税非課税世帯等支援給付金"
  },
  {
    "slug": "kochi-official-007-034-2026",
    "title": "大月町 令和5年度物価高騰対応重点支援給付金",
    "organization": "大月町",
    "maxAmount": "1人あたり5万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大月町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和6年6月28日 募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 令和5年度物価高騰対応重",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=2337",
    "sourceName": "令和5年度物価高騰対応重点支援給付金"
  },
  {
    "slug": "kochi-official-007-035-2026",
    "title": "大月町 定額減税補足給付金（調整給付）",
    "organization": "大月町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大月町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和6年10月31日 募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 定額減税補足給付金（調整",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=2338",
    "sourceName": "定額減税補足給付金（調整給付）"
  },
  {
    "slug": "kochi-official-007-036-2026",
    "title": "大月町 価格高騰緊急支援給付金",
    "organization": "大月町",
    "maxAmount": "1世帯：10万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大月町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和6年10月31日 募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 令和6年度価格高騰緊急支",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=2339",
    "sourceName": "価格高騰緊急支援給付金"
  },
  {
    "slug": "kochi-official-007-037-2026",
    "title": "大月町 住民力向上学習等支援事業費補助金",
    "organization": "大月町",
    "maxAmount": "限度額１事業あたり上限20万円",
    "maxAmountNum": 200000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大月町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 住民力向上学習等支援事業",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=2116",
    "sourceName": "住民力向上学習等支援事業費補助金"
  },
  {
    "slug": "kochi-official-007-038-2026",
    "title": "大月町 生産性向上特別措置法に基づく支援制度",
    "organization": "大月町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大月町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 生産性向上特別措置法に基",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=1294",
    "sourceName": "生産性向上特別措置法に基づく支援制度"
  },
  {
    "slug": "kochi-official-007-039-2026",
    "title": "大月町 農業関係の各種事業",
    "organization": "大月町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大月町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 農業関係の各種事業につい",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/dtl.php?hdnKey=2259",
    "sourceName": "農業関係の各種事業"
  },
  {
    "slug": "kochi-official-007-040-2026",
    "title": "大月町 福祉・支援制度",
    "organization": "大月町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大月町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "募集 選挙管理委員会 暮らし・手続き ライフステージ 戸籍・住民票・証明 保険・年金・税金 住宅・土地 道路・上下水道 ゴミ 福祉・支援制度 仕事 子育て・教育 子育て 教育 保健・医療 保健 医療 福祉・支援制度 ホーム ",
    "officialUrl": "https://www.town.otsuki.kochi.jp/life/subcatglist.php?catgnm=%E7%A6%8F%E7%A5%89%E3%83%BB%E6%94%AF%E6%8F%B4%E5%88%B6%E5%BA%A6",
    "sourceName": "福祉・支援制度"
  },
  {
    "slug": "kochi-official-007-041-2026",
    "title": "三原村 支援制度",
    "organization": "三原村",
    "maxAmount": "1人以上養育する世帯に助成金制度があります（1人10,000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "三原村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.vill.mihara.kochi.jp/iju/info/shien.php",
    "sourceName": "支援制度"
  },
  {
    "slug": "kochi-official-007-042-2026",
    "title": "三原村 農作業機械修繕費支援事業費補助金",
    "organization": "三原村",
    "maxAmount": "上限5万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三原村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付申請書兼実績報告書を三原村農林業建設課まで提出をお願いします",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=446",
    "sourceName": "農作業機械修繕費支援事業費補助金"
  },
  {
    "slug": "kochi-official-007-043-2026",
    "title": "三原村 猫の不妊去勢手術費用の補助",
    "organization": "三原村",
    "maxAmount": "上限10,000円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三原村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請できます",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=254",
    "sourceName": "猫の不妊去勢手術費用の補助"
  },
  {
    "slug": "kochi-official-007-044-2026",
    "title": "三原村 不妊治療費助成金",
    "organization": "三原村",
    "maxAmount": "上限額【一般不妊治療】5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三原村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付事業」のお知らせ｜三原村 本文へ移動 三原村役場 文字サイズ 拡大 標準 背景色 黒 青 白 くらしの情報 観光情報 移住情報 ふるさと納税 村内放送 本文 「三原村 不妊治療費助成金交付事業」のお知らせ トップ - 「",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=121",
    "sourceName": "不妊治療費助成金"
  },
  {
    "slug": "kochi-official-007-045-2026",
    "title": "三原村 子育て世帯支援金・定住促進事業奨励金",
    "organization": "三原村",
    "maxAmount": "上限額：1世帯1，000，000円",
    "maxAmountNum": 1000000,
    "category": "childcare",
    "relatedCategories": [
      "housing",
      "employment",
      "living"
    ],
    "eligibility": "三原村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和9年3月31日 申請者若しくはその配偶者が奨励金交付申請時点で妊娠中の世帯又は、申請者及びその配偶者が、共に奨励金交付申請年度の4月1日時点で39歳以下である世帯 内容：村内に新築住宅を建設し、住宅の登記簿上の建築年月日から1年以内であるこ",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=166",
    "sourceName": "子育て世帯支援金・定住促進事業奨励金"
  },
  {
    "slug": "kochi-official-007-046-2026",
    "title": "三原村 物価高騰対策臨時給付金",
    "organization": "三原村",
    "maxAmount": "1人当たり35,000円",
    "maxAmountNum": 35000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "三原村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月1日 交付金を活用し、三原村物価高騰対策臨時給付金を支給いたします",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=425",
    "sourceName": "物価高騰対策臨時給付金"
  },
  {
    "slug": "kochi-official-007-047-2026",
    "title": "三原村 国民健康保険の給付",
    "organization": "三原村",
    "maxAmount": "限度額が異なります義務教育就学前2割負担義務教育就学から69歳以下3割負担（70～74歳）住民税課税所得が145万円",
    "maxAmountNum": 1450000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "三原村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=213",
    "sourceName": "国民健康保険の給付"
  },
  {
    "slug": "kochi-official-007-048-2026",
    "title": "三原村 乳幼児・児童医療費助成",
    "organization": "三原村",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "三原村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請手続き 三原村役場住民課に申請します",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=324",
    "sourceName": "乳幼児・児童医療費助成"
  },
  {
    "slug": "kochi-official-007-049-2026",
    "title": "三原村 子宝助成金",
    "organization": "三原村",
    "maxAmount": "月額1万円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "三原村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給について｜三原村 本文へ移動 三原村役場 文字サイズ 拡大 標準 背景色 黒 青 白 くらしの情報 観光情報 移住情報 ふるさと納税 村内放送 本文 子宝助成金の支給について トップ - 子宝助成金の支給について ページ",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=227",
    "sourceName": "子宝助成金"
  },
  {
    "slug": "kochi-official-007-050-2026",
    "title": "三原村 高齢者運転免許証自主返納支援",
    "organization": "三原村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三原村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付を受けられた高齢者（自主返納した 時点で満65歳以上）の方 支援の内容 三原村タクシー利用券（１５，６００円分）の交付 手続き 三原村役場 住民課の窓口で申請してください",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=238",
    "sourceName": "高齢者運転免許証自主返納支援"
  },
  {
    "slug": "kochi-official-007-051-2026",
    "title": "三原村 高齢者補聴器購入助成金",
    "organization": "三原村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "三原村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付を受けていない者 ・片耳レベルが40㏈以上70㏈未満の中等度難聴であって、耳鼻咽喉科の医師により、補聴器の使用の必要性が認められた者 助成の内容 補聴器本体の購入費２分の１のうち、５万円を上限とする",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=239",
    "sourceName": "高齢者補聴器購入助成金"
  },
  {
    "slug": "kochi-official-007-052-2026",
    "title": "三原村 ひとり親家庭医療費助成",
    "organization": "三原村",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "三原村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請することができません】 ・原則、申請者が母親（父親）の場合に父親（母親）が同住所にいるとき（事実婚を含む",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=337",
    "sourceName": "ひとり親家庭医療費助成"
  },
  {
    "slug": "kochi-official-007-053-2026",
    "title": "三原村 先端設備等導入計画",
    "organization": "三原村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "三原村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請受付を開始します",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=169",
    "sourceName": "先端設備等導入計画"
  },
  {
    "slug": "kochi-official-007-054-2026",
    "title": "三原村 合併浄化槽設置整備事業",
    "organization": "三原村",
    "maxAmount": "補助金額人槽区分補助金額5人槽332,000円",
    "maxAmountNum": 332000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三原村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "合併浄化槽設置整備事業について｜三原村 本文へ移動 三原村役場 文字サイズ 拡大 標準 背景色 黒 青 白 くらしの情報 観光情報 移住情報 ふるさと納税 村内放送 本文 合併浄化槽設置整備事業について トップ - 合併浄化槽設置整備事業に",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=263",
    "sourceName": "合併浄化槽設置整備事業"
  },
  {
    "slug": "kochi-official-007-055-2026",
    "title": "三原村 幡多広域特産品等県外発信支援事業",
    "organization": "三原村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三原村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "募集について｜三原村 本文へ移動 三原村役場 文字サイズ 拡大 標準 背景色 黒 青 白 くらしの情報 観光情報 移住情報 ふるさと納税 村内放送 本文 幡多広域特産品等県外発信支援事業の募集について トップ - 幡多広域特",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=170",
    "sourceName": "幡多広域特産品等県外発信支援事業"
  },
  {
    "slug": "kochi-official-007-056-2026",
    "title": "三原村 特別児童扶養手当",
    "organization": "三原村",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三原村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給するものです",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=336",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "kochi-official-007-057-2026",
    "title": "三原村 児童扶養手当",
    "organization": "三原村",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三原村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給される手当です",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=335",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kochi-official-007-058-2026",
    "title": "三原村 重度心身障害児（者）医療",
    "organization": "三原村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "三原村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "重度心身障害児（者）医療｜三原村 本文へ移動 三原村役場 文字サイズ 拡大 標準 背景色 黒 青 白 くらしの情報 観光情報 移住情報 ふるさと納税 村内放送 本文 重度心身障害児（者）医療 トップ - 重度心身障害児（者）医療 ページID",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=317",
    "sourceName": "重度心身障害児（者）医療"
  },
  {
    "slug": "kochi-official-007-059-2026",
    "title": "三原村 福祉タクシー事業",
    "organization": "三原村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "三原村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付 ※利用券発行枚数には限りがあります",
    "officialUrl": "https://www.vill.mihara.kochi.jp/life/detail.php?hdnKey=433",
    "sourceName": "福祉タクシー事業"
  },
  {
    "slug": "kochi-official-007-060-2026",
    "title": "黒潮町 放置漁船等対策推進事業費補助金",
    "organization": "黒潮町",
    "maxAmount": "補助額①漁船等の解体撤去処分（運搬含む）にかかる費用の50％以内（税抜き）②1隻あたりの補助上限額は25万円",
    "maxAmountNum": 250000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "黒潮町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 海洋森林課 漁業 黒潮町放置漁船等対策推進事業費補助金 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） --> 各課情報",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kaiyou-gyogyou/46296",
    "sourceName": "放置漁船等対策推進事業費補助金"
  },
  {
    "slug": "kochi-official-007-061-2026",
    "title": "黒潮町 黒潮町で暮らそう 各種支援情報",
    "organization": "黒潮町",
    "maxAmount": "月額240,000円",
    "maxAmountNum": 240000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "黒潮町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集しています（随時募集） 町営住宅など 詳細はこちら＞ 町営住宅 町営住宅など 住宅一覧はこちら 詳細はこちら＞ 黒潮町求人情報（株式会社拓新技術コンサルタント 技術者） 求人情報 賃金：月額 240,000円～ 技術者（",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/iju",
    "sourceName": "黒潮町で暮らそう 各種支援情報"
  },
  {
    "slug": "kochi-official-007-062-2026",
    "title": "黒潮町 不妊治療費補助金",
    "organization": "黒潮町",
    "maxAmount": "補助額及び補助期間1年度につき上限5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "黒潮町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月15日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 健康福祉課 保健衛生 黒潮町不妊治療費補助金 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） --> 各課情報／健康福祉",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kenkou-hoken/21047",
    "sourceName": "不妊治療費補助金"
  },
  {
    "slug": "kochi-official-007-063-2026",
    "title": "黒潮町 妊婦のための支援給付",
    "organization": "黒潮町",
    "maxAmount": "1人あたり6万円",
    "maxAmountNum": 60000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "黒潮町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 健康福祉課 保健衛生 「妊婦のための支援給付」について 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） --> 各課情報",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kenkou-hoken/40482",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "kochi-official-007-064-2026",
    "title": "黒潮町 子どもの医療費助成",
    "organization": "黒潮町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "黒潮町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年3月25日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 健康福祉課 児童福祉 子どもの医療費助成 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） --> 各課情報／健康福祉課 ",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kenkou-jidou/117",
    "sourceName": "子どもの医療費助成"
  },
  {
    "slug": "kochi-official-007-065-2026",
    "title": "黒潮町 児童手当",
    "organization": "黒潮町",
    "maxAmount": "月額）3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "黒潮町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年11月27日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 健康福祉課 児童福祉 児童手当（令和6年10月から児童手当制度が変わりました） 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kenkou-jidou/76",
    "sourceName": "児童手当"
  },
  {
    "slug": "kochi-official-007-066-2026",
    "title": "黒潮町 児童扶養手当",
    "organization": "黒潮町",
    "maxAmount": "月額(所得に応じて決定されます）◆2026年4月～児童1人全部支給：48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "黒潮町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 健康福祉課 児童福祉 児童扶養手当 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） --> 各課情報／健康福祉課 各課情",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kenkou-jidou/16194",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kochi-official-007-067-2026",
    "title": "黒潮町 予防接種",
    "organization": "黒潮町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "黒潮町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月3日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 健康福祉課 保健衛生 予防接種 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） --> 各課情報／健康福祉課 各課情報 ",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kenkou-hoken/13266",
    "sourceName": "予防接種"
  },
  {
    "slug": "kochi-official-007-068-2026",
    "title": "黒潮町 就学援助制度",
    "organization": "黒潮町",
    "maxAmount": "年額）中学校（年額）支給の時期学用品費11,630円",
    "maxAmountNum": 11630,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "黒潮町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 教育委員会 学校教育 就学援助制度 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） --> 各課情報／教育委員会 各課情",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kyouiku-gakkou/20944",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "kochi-official-007-069-2026",
    "title": "黒潮町 宮川奨学資金貸与奨学生",
    "organization": "黒潮町",
    "maxAmount": "月額2万円",
    "maxAmountNum": 20000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "黒潮町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年1月1日 募集します│黒潮町公式ホームページ お問い合わせ サイトマップ --> 文字の大きさ ホーム まちの情報 各課情報 事業者の方へ 電子申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 教育委員会 お知らせ・募集 ",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/kyouiku-osirase/15332",
    "sourceName": "宮川奨学資金貸与奨学生"
  },
  {
    "slug": "kochi-official-007-070-2026",
    "title": "黒潮町 先端設備等導入制度による支援",
    "organization": "黒潮町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "黒潮町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 産業推進室 お知らせ・募集 先端設備等導入制度による支援について 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） -->",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/sangyo-osirase/38489",
    "sourceName": "先端設備等導入制度による支援"
  },
  {
    "slug": "kochi-official-007-071-2026",
    "title": "黒潮町 創業支援事業",
    "organization": "黒潮町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "黒潮町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請 FAQ アクセス 黒潮町の情報を探す ホーム 各課情報 産業推進室 お知らせ・募集 創業支援事業 黒潮町ホーム 各課情報 総務課 「黒潮町地域おこし協力隊」を募集します！（5月8日必着） --> 各課情報／産業推進室 ",
    "officialUrl": "https://www.town.kuroshio.lg.jp/pb/cont/sangyo-osirase/17031",
    "sourceName": "創業支援事業"
  }
];
