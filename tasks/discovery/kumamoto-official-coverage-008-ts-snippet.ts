const kumamotoOfficial008Grants: Array<{
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
    "slug": "kumamoto-official-008-001-2026",
    "title": "錦町 令和8年度錦町資材価格高騰対策支援補助金について",
    "organization": "錦町",
    "maxAmount": "補助金額が、1,000円",
    "maxAmountNum": 1000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "錦町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月12日 申請者に町税等の滞納がないこと",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031208/index.html",
    "sourceName": "令和8年度錦町資材価格高騰対策支援補助金について"
  },
  {
    "slug": "kumamoto-official-008-002-2026",
    "title": "錦町 錦町防災士育成事業補助金について",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月8日 交付までの流れ） ①火の国ぼうさい塾の案内を町から受け取る（熊本県から募集案内がありましたらLIFE VISION等で周知いたします） ②町に火の国ぼうさい塾の受講申込書を提出する ③火の国ぼうさい塾を受講する（教本代・試験",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031232/index.html",
    "sourceName": "錦町防災士育成事業補助金について"
  },
  {
    "slug": "kumamoto-official-008-003-2026",
    "title": "錦町 錦町不妊治療費等助成事業",
    "organization": "錦町",
    "maxAmount": "15万円を限度",
    "maxAmountNum": 150000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "錦町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月2日 申請可能です",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031182/index.html",
    "sourceName": "錦町不妊治療費等助成事業"
  },
  {
    "slug": "kumamoto-official-008-004-2026",
    "title": "錦町 1か月児健康診査の助成について",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "錦町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付する「1か月児健康診査票」が必要になります",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031180/index.html",
    "sourceName": "1か月児健康診査の助成について"
  },
  {
    "slug": "kumamoto-official-008-005-2026",
    "title": "錦町 錦町アピアランスケア推進事業",
    "organization": "錦町",
    "maxAmount": "上限2万円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年3月26日 申請時に町内に住所を有する方 ・がんと診断され治療中もしくは治療を受けた方 ・がん治療に伴う脱毛または外科的治療により外見の変化に対応する補整具を購入された方 ・他の同種の助成等を受けていない方 ・町税等を滞納していない方",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031178/index.html",
    "sourceName": "錦町アピアランスケア推進事業"
  },
  {
    "slug": "kumamoto-official-008-006-2026",
    "title": "錦町 障害児福祉手当について",
    "organization": "錦町",
    "maxAmount": "月額16,560円",
    "maxAmountNum": 16560,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年3月25日 申請日の属する月の翌月分から手当が支給されます",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003826/index.html",
    "sourceName": "障害児福祉手当について"
  },
  {
    "slug": "kumamoto-official-008-007-2026",
    "title": "錦町 特別障害者手当について",
    "organization": "錦町",
    "maxAmount": "月額30,450円",
    "maxAmountNum": 30450,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年3月25日 申請日の属する月の翌月分から手当が支給されます",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003825/index.html",
    "sourceName": "特別障害者手当について"
  },
  {
    "slug": "kumamoto-official-008-008-2026",
    "title": "錦町 特別児童扶養手当について",
    "organization": "錦町",
    "maxAmount": "月額58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年3月25日 支給するものです",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003812/index.html",
    "sourceName": "特別児童扶養手当について"
  },
  {
    "slug": "kumamoto-official-008-009-2026",
    "title": "錦町 産婦健康診査の助成について",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "錦町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付する「産婦健康診査票」が必要になります",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031179/index.html",
    "sourceName": "産婦健康診査の助成について"
  },
  {
    "slug": "kumamoto-official-008-010-2026",
    "title": "錦町 令和6年4月から 錦町住宅リフォーム補助金制度の変更について",
    "organization": "錦町",
    "maxAmount": "上限は30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年2月16日 申請ができます",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003818/index.html",
    "sourceName": "令和6年4月から 錦町住宅リフォーム補助金制度の変更について"
  },
  {
    "slug": "kumamoto-official-008-011-2026",
    "title": "錦町 錦町土砂災害危険住宅移転促進事業について",
    "organization": "錦町",
    "maxAmount": "補助金額・上限額300万円",
    "maxAmountNum": 3000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "錦町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付要件 ・これまで住んでいた住宅の除却 ・土砂災害警戒区域（イエローゾーン）外への移転 ・熊本県内への移転 ・土砂災害特別警戒区域（レッドゾーン）内に、区域指定日前から居住していること 3 補助金額 ・上限額 300万円／",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003975/index.html",
    "sourceName": "錦町土砂災害危険住宅移転促進事業について"
  },
  {
    "slug": "kumamoto-official-008-012-2026",
    "title": "錦町 物価高対応子育て応援手当について",
    "organization": "錦町",
    "maxAmount": "1人あたり2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年2月2日 支給します",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031131/index.html",
    "sourceName": "物価高対応子育て応援手当について"
  },
  {
    "slug": "kumamoto-official-008-013-2026",
    "title": "錦町 妊婦のための支援給付について",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "錦町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年6月25日 支給方法 口座振込 (妊婦さんご本人の口座) 支給内容 妊娠時(1回目)：5万円 出産時(2回目)：妊娠しているこどもの数×5万円 対象者 【妊娠時(1回目)】 令和7年4月1日以降に妊娠届出をし、『妊婦給付認定』の申請をし",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031019/index.html",
    "sourceName": "妊婦のための支援給付について"
  },
  {
    "slug": "kumamoto-official-008-014-2026",
    "title": "錦町 出産・子育てを応援します",
    "organization": "錦町",
    "maxAmount": "5万円の支給",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年3月7日 交付時、妊娠8ヶ月前後、出生届出から乳幼児全戸訪問（こんにちは赤ちゃん訪問）までの間の3回程度実施）時に、アンケートをもとに保健師などが出産・育児などの相談に応じ、ニーズに応じた支援につなげます",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003669/index.html",
    "sourceName": "出産・子育てを応援します"
  },
  {
    "slug": "kumamoto-official-008-015-2026",
    "title": "錦町 児童手当について",
    "organization": "錦町",
    "maxAmount": "支給額・0歳から3歳未満月額15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2021年1月26日 支給する制度です",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji00313/index.html",
    "sourceName": "児童手当について"
  },
  {
    "slug": "kumamoto-official-008-016-2026",
    "title": "錦町 錦町子ども医療費助成制度について",
    "organization": "錦町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "錦町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2020年3月11日 交付 お子さんの出生または転入の際、子ども医療費受給者証を交付します",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003288/index.html",
    "sourceName": "錦町子ども医療費助成制度について"
  },
  {
    "slug": "kumamoto-official-008-017-2026",
    "title": "錦町 錦町ICT関連検定等受験促進助成金の設置について",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2022年2月9日 申請を行っていただき、同協議会から交付されます",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003443/index.html",
    "sourceName": "錦町ICT関連検定等受験促進助成金の設置について"
  },
  {
    "slug": "kumamoto-official-008-018-2026",
    "title": "錦町 熊本県中小・小規模事業者生産性・売上げ向上後押し事業補助金について",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年2月20日 熊本県中小・小規模事業者生産性・売上げ向上後押し事業補助金について 最終更新日： 2026年2月20日 印刷 【第2弾】熊本県中小・小規模事業者生産性・売上げ向上後押し事業補助金 国・県の補助事業を活用し、生産性の向上等と従業員の賃上げに取",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji0031147/index.html",
    "sourceName": "熊本県中小・小規模事業者生産性・売上げ向上後押し事業補助金について"
  },
  {
    "slug": "kumamoto-official-008-019-2026",
    "title": "錦町 錦町商工業後継者支援給付金",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "錦町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2021年7月29日 交付します",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003392/index.html",
    "sourceName": "錦町商工業後継者支援給付金"
  },
  {
    "slug": "kumamoto-official-008-020-2026",
    "title": "錦町 起業者支援",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "錦町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2021年3月31日 交付します",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003376/index.html",
    "sourceName": "起業者支援"
  },
  {
    "slug": "kumamoto-official-008-021-2026",
    "title": "錦町 小・中学校での子育て支援の詳細について",
    "organization": "錦町",
    "maxAmount": "1人につき20,000円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年12月28日 支給 錦町では、新たに入学した小学1年生全員に、黄色い帽子・防犯ブザー・防犯ホイッスル・黄色いワッペンなどを配付しています",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003795/index.html",
    "sourceName": "小・中学校での子育て支援の詳細について"
  },
  {
    "slug": "kumamoto-official-008-022-2026",
    "title": "錦町 結婚された方の新生活を応援します！",
    "organization": "錦町",
    "maxAmount": "上限額（住居費と引越費用の合算）夫婦とも29歳以下…1世帯あたり60万円",
    "maxAmountNum": 600000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月12日 申請を希望される方は、下記の窓口にご相談ください",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003461/index.html",
    "sourceName": "結婚された方の新生活を応援します！"
  },
  {
    "slug": "kumamoto-official-008-023-2026",
    "title": "錦町 錦町障害児通所サービス利用者負担額助成について",
    "organization": "錦町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "錦町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年12月26日 交付を受けた障がい児の保護者のうち、障害児通所サービス利用者負担額の発生している者",
    "officialUrl": "https://www.town.kumamoto-nishiki.lg.jp/kiji003798/index.html",
    "sourceName": "錦町障害児通所サービス利用者負担額助成について"
  },
  {
    "slug": "kumamoto-official-008-024-2026",
    "title": "多良木町 多良木町自転車用ヘルメット購入費の補助について",
    "organization": "多良木町",
    "maxAmount": "補助金額最大2,000円",
    "maxAmountNum": 2000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "多良木町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年12月1日 申請される方は、多良木町役場 2階 危機管理防災課 窓口または多良木町のホームページより、申請書をお取り寄せになり、危機管理防災課まで提出して下さい",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/bosai_anzen/bosai/tetsuzuki/3492.html",
    "sourceName": "多良木町自転車用ヘルメット購入費の補助について"
  },
  {
    "slug": "kumamoto-official-008-025-2026",
    "title": "多良木町 防犯機能付電話機等購入補助について",
    "organization": "多良木町",
    "maxAmount": "限度額：1万円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "多良木町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年7月1日 申請が必要となりますのでご注意ください",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/bosai_anzen/bosai/tetsuzuki/4163.html",
    "sourceName": "防犯機能付電話機等購入補助について"
  },
  {
    "slug": "kumamoto-official-008-026-2026",
    "title": "多良木町 防犯カメラの設置補助金について",
    "organization": "多良木町",
    "maxAmount": "限度額：2万円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "多良木町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年7月1日 申請が必要となりますのでご注意ください",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/bosai_anzen/bosai/tetsuzuki/3697.html",
    "sourceName": "防犯カメラの設置補助金について"
  },
  {
    "slug": "kumamoto-official-008-027-2026",
    "title": "多良木町 国民健康保険の一部負担金減免制度について",
    "organization": "多良木町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "多良木町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請により病気、入院等に係る自己負担額を減額・免除または徴収猶予する制度です",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kenko_iryo_fukushi/hoken/oshirase/2604.html",
    "sourceName": "国民健康保険の一部負担金減免制度について"
  },
  {
    "slug": "kumamoto-official-008-028-2026",
    "title": "多良木町 不妊治療費等助成事業内容",
    "organization": "多良木町",
    "maxAmount": "上限額一般不妊治療・人工授精それぞれ5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "多良木町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請に必要な書類 不妊治療費等助成事業申請書（預金通帳等の写しも添付） 不妊治療費等助成事業医療機関証明書（特定不妊治療費助成申請の場合、熊本県知事に提出する「特定不妊治療費助成事業受診等証明書」の写しでも可） 不妊治療費等",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kenko_iryo_fukushi/iryo_kenko/oshirase/155.html",
    "sourceName": "不妊治療費等助成事業内容"
  },
  {
    "slug": "kumamoto-official-008-029-2026",
    "title": "多良木町 がん患者のウィッグ・乳房補整具等の購入費用補助について",
    "organization": "多良木町",
    "maxAmount": "補助額・補助額は、補助対象経費に2分の1を乗じた額とし、上限20,000円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年3月31日 提出をお願いいたします",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kenko_iryo_fukushi/iryo_kenko/oshirase/3752.html",
    "sourceName": "がん患者のウィッグ・乳房補整具等の購入費用補助について"
  },
  {
    "slug": "kumamoto-official-008-030-2026",
    "title": "多良木町 グループホーム家賃等助成事業",
    "organization": "多良木町",
    "maxAmount": "助成額老齢福祉年金受給者又は、住民税非課税世帯に属する者で、本人の合計所得額及び課税年金収入額の合計が80万円",
    "maxAmountNum": 800000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請書を福祉課窓口で受取られるか、下記よりダウンロードし、必要事項を記入して福祉課へ提出 福祉課で審査を行い決定通知が送られてくる",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kenko_iryo_fukushi/kaigohoken/tetsuzuki/2380.html",
    "sourceName": "グループホーム家賃等助成事業"
  },
  {
    "slug": "kumamoto-official-008-031-2026",
    "title": "多良木町 年金生活者支援給付金制度",
    "organization": "多良木町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "多良木町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和4年1月4日 支給されるものです",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kenko_iryo_fukushi/nenkin/oshirase/2991.html",
    "sourceName": "年金生活者支援給付金制度"
  },
  {
    "slug": "kumamoto-official-008-032-2026",
    "title": "多良木町 特別障害者手当について",
    "organization": "多良木町",
    "maxAmount": "月額30,450円",
    "maxAmountNum": 30450,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "申請日の属する月の翌月分から手当が支給となります",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kenko_iryo_fukushi/shogaishafukushi/tetsuzuki/2659.html",
    "sourceName": "特別障害者手当について"
  },
  {
    "slug": "kumamoto-official-008-033-2026",
    "title": "多良木町 障害児福祉手当について",
    "organization": "多良木町",
    "maxAmount": "月額16,560円",
    "maxAmountNum": 16560,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kenko_iryo_fukushi/shogaishafukushi/tetsuzuki/2660.html",
    "sourceName": "障害児福祉手当について"
  },
  {
    "slug": "kumamoto-official-008-034-2026",
    "title": "多良木町 障がい者に対する医療費助成について",
    "organization": "多良木町",
    "maxAmount": "助成額医療費の一部負担金－（高額療養費＋付加給付額）－本人の自己負担額＝助成額本人の自己負担額（通院及び訪問看護の場合）1つの医療機関につき1,020円",
    "maxAmountNum": 1020,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "多良木町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請手続きに必要なもの 身体障害者手帳、療育手帳、精神障害者保険福祉手帳 本人名義の通帳 本人の健康保険証 本人、配偶者、同居世帯の扶養義務者のマイナンバーがわかるもの 助成額 医療費の一部負担金 － （高額療養費＋付加給付",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kenko_iryo_fukushi/shogaishafukushi/tetsuzuki/2415.html",
    "sourceName": "障がい者に対する医療費助成について"
  },
  {
    "slug": "kumamoto-official-008-035-2026",
    "title": "多良木町 学校給食費の無償化について",
    "organization": "多良木町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "多良木町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "学校給食費の無償化について 令和5年4月分から学校給食費を無償化します これまで、多良木町では保護者の経済的負担の軽減を目的として、学校給食費について半額助成及び米代の全額町負担を実施してきました。 しかし、昨今のエネルギー・食料品価格等の",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kosodate_kyoiku_sports/kyushoku/oshirase/3193.html",
    "sourceName": "学校給食費の無償化について"
  },
  {
    "slug": "kumamoto-official-008-036-2026",
    "title": "多良木町 多良木町 子ども医療費助成事業があります！",
    "organization": "多良木町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "多良木町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書に医療機関が発行した領収書を添付して福祉課 子育て支援係（役場1階5番窓口）に提出してください",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kosodate_kyoiku_sports/shien/tetsuzuki/2337.html",
    "sourceName": "多良木町 子ども医療費助成事業があります！"
  },
  {
    "slug": "kumamoto-official-008-037-2026",
    "title": "多良木町 妊婦等包括相談支援事業および妊婦のための支援給付金について",
    "organization": "多良木町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "多良木町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年4月1日 支給の流れについて (1)妊娠届（母子健康手帳交付）時 妊娠届を提出する際、保健師との面談を実施します",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kosodate_kyoiku_sports/shien/tetsuzuki/2336.html",
    "sourceName": "妊婦等包括相談支援事業および妊婦のための支援給付金について"
  },
  {
    "slug": "kumamoto-official-008-038-2026",
    "title": "多良木町 特別児童扶養手当について",
    "organization": "多良木町",
    "maxAmount": "月額：1級55,350円",
    "maxAmountNum": 55350,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給するものです",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kosodate_kyoiku_sports/shien/tetsuzuki/2685.html",
    "sourceName": "特別児童扶養手当について"
  },
  {
    "slug": "kumamoto-official-008-039-2026",
    "title": "多良木町 児童手当について",
    "organization": "多良木町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給対象 0歳〜18歳（18歳の誕生日後の最初の3月31日まで）の児童を養育している方 2 支給額 3 支給時期 令和6年10月より、偶数月(4月、6月、8月、10月、12月、2月)の各月10日に、それぞれ前月までの2か月分",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kosodate_kyoiku_sports/shien/tetsuzuki/2304.html",
    "sourceName": "児童手当について"
  },
  {
    "slug": "kumamoto-official-008-040-2026",
    "title": "多良木町 放課後児童クラブ利用者負担助成金について",
    "organization": "多良木町",
    "maxAmount": "助成額助成対象者が学童クラブの利用料（保育料）として負担した額の2分の1（10円",
    "maxAmountNum": 10,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請方法 助成金交付申請書をご記入のうえ、福祉課子育て支援係（役場1階5番窓口）まで提出ください",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kosodate_kyoiku_sports/shien/tetsuzuki/2307.html",
    "sourceName": "放課後児童クラブ利用者負担助成金について"
  },
  {
    "slug": "kumamoto-official-008-041-2026",
    "title": "多良木町 児童扶養手当について",
    "organization": "多良木町",
    "maxAmount": "1人のとき45,500円",
    "maxAmountNum": 45500,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給される手当です",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kosodate_kyoiku_sports/shien/tetsuzuki/2310.html",
    "sourceName": "児童扶養手当について"
  },
  {
    "slug": "kumamoto-official-008-042-2026",
    "title": "多良木町 上水道使用料 基本料金の一部減免について",
    "organization": "多良木町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "多良木町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付金」を活用し、水道料金の基本料金の半額を減免します",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kurashi/jogesuido/oshirase/4148.html",
    "sourceName": "上水道使用料 基本料金の一部減免について"
  },
  {
    "slug": "kumamoto-official-008-043-2026",
    "title": "多良木町 多良木町浄化槽設置整備事業補助金について",
    "organization": "多良木町",
    "maxAmount": "補助金額合併処理浄化槽を設置する場合合併処理浄化槽を設置する場合の補助金額人槽区分補助金額5人槽502,000円",
    "maxAmountNum": 502000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請書をお取り寄せになり、4月1日から提出していただきますようお願いします",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kurashi/jogesuido/tetsuzuki/4152.html",
    "sourceName": "多良木町浄化槽設置整備事業補助金について"
  },
  {
    "slug": "kumamoto-official-008-044-2026",
    "title": "多良木町 多良木町住宅リフォーム事業補助金について",
    "organization": "多良木町",
    "maxAmount": "上限額20万円",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "多良木町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和9年3月19日 受付を4月1日より開始しますので、ご希望の方は、多良木町役場 2階 建設課 上下水道係窓口または多良木町のホームページより、申請書をお取り寄せになり、提出していただきますようお願いします",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/kurashi/jogesuido/tetsuzuki/4156.html",
    "sourceName": "多良木町住宅リフォーム事業補助金について"
  },
  {
    "slug": "kumamoto-official-008-045-2026",
    "title": "多良木町 令和2年7月豪雨災に伴う作業道復旧補助金について",
    "organization": "多良木町",
    "maxAmount": "補助金額外注施工、自力施工ともに事業費の50％以内補助金額31万円",
    "maxAmountNum": 310000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "多良木町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/shigoto_sangyo/ringyo/hojokin/2810.html",
    "sourceName": "令和2年7月豪雨災に伴う作業道復旧補助金について"
  },
  {
    "slug": "kumamoto-official-008-046-2026",
    "title": "多良木町 多良木町森林作業道補修改良事業補助金について",
    "organization": "多良木町",
    "maxAmount": "補助金額外注施工による場合は事業費の40％以内自力施工による場合は材料費等の60％以内補助金額50万円",
    "maxAmountNum": 500000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良木町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/shigoto_sangyo/ringyo/hojokin/2621.html",
    "sourceName": "多良木町森林作業道補修改良事業補助金について"
  },
  {
    "slug": "kumamoto-official-008-047-2026",
    "title": "多良木町 多良木町木造住宅促進事業補助金（新築補助）について",
    "organization": "多良木町",
    "maxAmount": "補助金額補助金の金額は、実際に使用した町産材の合計金額の2分の1以内とし、新築及び改築100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "多良木町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/shigoto_sangyo/ringyo/hojokin/2408.html",
    "sourceName": "多良木町木造住宅促進事業補助金（新築補助）について"
  },
  {
    "slug": "kumamoto-official-008-048-2026",
    "title": "多良木町 空き家・空き店舗等活用事業補助金について",
    "organization": "多良木町",
    "maxAmount": "100万円を限度",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "多良木町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付する",
    "officialUrl": "https://www.town.taragi.lg.jp/gyousei/shigoto_sangyo/shokogyoshinko/oshirase/3250.html",
    "sourceName": "空き家・空き店舗等活用事業補助金について"
  },
  {
    "slug": "kumamoto-official-008-049-2026",
    "title": "湯前町 就学に必要な費用を援助します",
    "organization": "湯前町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "湯前町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年3月1日 申請方法 教育委員会で就学援助申請書を受取り、必要事項を記入し、担当地区の民生児童委員へ提出 ※まずは教育委員会へご相談ください",
    "officialUrl": "https://www.town.yunomae.lg.jp/kosodate/kiji0032538/index.html",
    "sourceName": "就学に必要な費用を援助します"
  },
  {
    "slug": "kumamoto-official-008-050-2026",
    "title": "湯前町 湯前町省エネ家電買換促進補助金について",
    "organization": "湯前町",
    "maxAmount": "補助金額買換え家電対象経費（購入費・設置工事費・消費税含む）のうち1/3上限5万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "湯前町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月18日 交付要綱（PDF：70.1キロバイト） 申請期間 令和8年5月1日から令和8年10月30日まで ※予算がなくなった場合、申請期間内でも受付を終了します 受付終了のお知らせはこちらで行います",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0035093/index.html",
    "sourceName": "湯前町省エネ家電買換促進補助金について"
  },
  {
    "slug": "kumamoto-official-008-051-2026",
    "title": "湯前町 結婚新生活支援事業について",
    "organization": "湯前町",
    "maxAmount": "上限額婚姻日における夫婦の年齢が1.29歳以下の場合1世帯当たり上限60万円",
    "maxAmountNum": 600000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "湯前町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年1月1日 提出し、受理された夫婦（新婚世帯）であること",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0033471/index.html",
    "sourceName": "結婚新生活支援事業について"
  },
  {
    "slug": "kumamoto-official-008-052-2026",
    "title": "湯前町 介護サービス事業所・施設の新型コロナウイルス感染症対策について補助します",
    "organization": "湯前町",
    "maxAmount": "限度額(1)特別養護老人ホーム福寿荘280,000円",
    "maxAmountNum": 280000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "湯前町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2022年5月16日 交付します",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0032390/index.html",
    "sourceName": "介護サービス事業所・施設の新型コロナウイルス感染症対策について補助します"
  },
  {
    "slug": "kumamoto-official-008-053-2026",
    "title": "湯前町 生ごみ処理容器や処理機の購入補助があります",
    "organization": "湯前町",
    "maxAmount": "限度額：30,000円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "湯前町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2018年4月6日 申請方法】 生ごみ処理機または処理容器を購入後、《領収書、印鑑、通帳》を持参してください",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji003695/index.html",
    "sourceName": "生ごみ処理容器や処理機の購入補助があります"
  },
  {
    "slug": "kumamoto-official-008-054-2026",
    "title": "湯前町 医療用補整具の購入費や在宅療養サービス費用を助成します",
    "organization": "湯前町",
    "maxAmount": "助成額1人につき購入額の1/2と20,000円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "湯前町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和6年4月1日 申請方法 下記の必要書類を保健福祉課に提出してください",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0033969/index.html",
    "sourceName": "医療用補整具の購入費や在宅療養サービス費用を助成します"
  },
  {
    "slug": "kumamoto-official-008-055-2026",
    "title": "湯前町 全国スポーツ大会等出場奨励金について",
    "organization": "湯前町",
    "maxAmount": "上限200,000円",
    "maxAmountNum": 200000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "湯前町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年6月17日 申請することが出来ます",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0033418/index.html",
    "sourceName": "全国スポーツ大会等出場奨励金について"
  },
  {
    "slug": "kumamoto-official-008-056-2026",
    "title": "湯前町 はり・灸施術費を助成します。",
    "organization": "湯前町",
    "maxAmount": "助成額1回500円",
    "maxAmountNum": 500,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "湯前町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年4月5日 提出することで助成を受けられます",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0032869/index.html",
    "sourceName": "はり・灸施術費を助成します。"
  },
  {
    "slug": "kumamoto-official-008-057-2026",
    "title": "湯前町 子どもの医療費を助成します。",
    "organization": "湯前町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "湯前町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2023年2月21日 申請を行ってください",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0032836/index.html",
    "sourceName": "子どもの医療費を助成します。"
  },
  {
    "slug": "kumamoto-official-008-058-2026",
    "title": "湯前町 団体等補助金の申請について",
    "organization": "湯前町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "湯前町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年5月18日 公式ページで申請・受付状況を確認",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0031680/index.html",
    "sourceName": "団体等補助金の申請について"
  },
  {
    "slug": "kumamoto-official-008-059-2026",
    "title": "湯前町 生衛業受動喫煙防止対策事業助成金について",
    "organization": "湯前町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "湯前町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2020年3月7日 交付事業が行われることとなりました",
    "officialUrl": "https://www.town.yunomae.lg.jp/kiji0031171/index.html",
    "sourceName": "生衛業受動喫煙防止対策事業助成金について"
  },
  {
    "slug": "kumamoto-official-008-060-2026",
    "title": "水上村 新婚さんの新生活支援について",
    "organization": "水上村",
    "maxAmount": "補助額上記対象経費を合わせた額とし、上限額は、１世帯あたり30万円",
    "maxAmountNum": 300000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月19日 提出 し、受理されていること ・夫婦ともに、婚姻日において 39歳以下 であること ・直近の夫婦の 所得の合算が500万円未満 である世帯 ・補助の対象となる住宅が村内にあり、 当該住宅に夫婦の住民票があること ・夫婦のいず",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji0031091/index.html",
    "sourceName": "新婚さんの新生活支援について"
  },
  {
    "slug": "kumamoto-official-008-061-2026",
    "title": "水上村 ＬＰガス支援金のお知らせ",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月18日 支給事業 LPガス生活者支援金（第5弾）のお知らせ LPガスをご利用の皆さまへ",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji0031303/index.html",
    "sourceName": "ＬＰガス支援金のお知らせ"
  },
  {
    "slug": "kumamoto-official-008-062-2026",
    "title": "水上村 令和８年度水上村移住支援金のご案内",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "水上村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月13日 交付いたします",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji0031079/index.html",
    "sourceName": "令和８年度水上村移住支援金のご案内"
  },
  {
    "slug": "kumamoto-official-008-063-2026",
    "title": "水上村 水上村老朽危険空家等除却促進事業補助金のご案内",
    "organization": "水上村",
    "maxAmount": "上限額は５０万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "水上村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月12日 交付を受ける目的で故意に破損された建物でないもの ・補助事業を、解体事業者（熊本県内）に請け負わせること 解体事業者とは・・・建設業法（昭和２４年法律第100号）別表第１に掲げる土木工事業、建築工事業か、解体工事業に係る同法",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji0031085/index.html",
    "sourceName": "水上村老朽危険空家等除却促進事業補助金のご案内"
  },
  {
    "slug": "kumamoto-official-008-064-2026",
    "title": "水上村 新生児聴覚検査費用の助成のお知らせ",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年4月25日 申請について 下記の書類に必要事項を記入し、添付書類と併せて水上村役場保健福祉課まで提出してください",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003734/index.html",
    "sourceName": "新生児聴覚検査費用の助成のお知らせ"
  },
  {
    "slug": "kumamoto-official-008-065-2026",
    "title": "水上村 水上っ子みらい応援助成金(入学祝い金)について",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "水上村内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年7月14日 交付します",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji0031002/index.html",
    "sourceName": "水上っ子みらい応援助成金(入学祝い金)について"
  },
  {
    "slug": "kumamoto-official-008-066-2026",
    "title": "水上村 ドライブレコーダー設置費の補助を行っています!",
    "organization": "水上村",
    "maxAmount": "補助金額主に利用する自動車へのドライブレコーダー購⼊費と取付費の50%(上限2万円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月30日 交付決定日から5年経過した後に、車両の買換えに伴い新たにドライブレコーダーを設置した場合は再度申請可能 補助対象者 1.村内に住所を有す者 2.非営利かつ自ら使用する自動車にドライブレコーダーを設置し、設置後6カ月以内である",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003520/index.html",
    "sourceName": "ドライブレコーダー設置費の補助を行っています!"
  },
  {
    "slug": "kumamoto-official-008-067-2026",
    "title": "水上村 水上村奨学金の募集について",
    "organization": "水上村",
    "maxAmount": "月額）大学、短期大学、大学院専門学校等：30,000円",
    "maxAmountNum": 30000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "水上村内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "提出書類】 ・奨学金貸与申請書（連帯保証人が必要です",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji0031208/index.html",
    "sourceName": "水上村奨学金の募集について"
  },
  {
    "slug": "kumamoto-official-008-068-2026",
    "title": "水上村 令和6年(2024年)10月より児童手当が変わります",
    "organization": "水上村",
    "maxAmount": "月額5,000円",
    "maxAmountNum": 5000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "水上村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年10月18日 支給対象者が拡充されます",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003890/index.html",
    "sourceName": "令和6年(2024年)10月より児童手当が変わります"
  },
  {
    "slug": "kumamoto-official-008-069-2026",
    "title": "水上村 水上村高等学校等通学費等支援補助制度について!",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年4月1日 交付資格者)が水上村内に住所を有していること",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003891/index.html",
    "sourceName": "水上村高等学校等通学費等支援補助制度について!"
  },
  {
    "slug": "kumamoto-official-008-070-2026",
    "title": "水上村 水上村語学検定料(英検・漢検)補助金について",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "水上村内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2022年4月1日 交付しています",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003880/index.html",
    "sourceName": "水上村語学検定料(英検・漢検)補助金について"
  },
  {
    "slug": "kumamoto-official-008-071-2026",
    "title": "水上村 自動車踏み間違い防止装置設置費の補助を行っています!",
    "organization": "水上村",
    "maxAmount": "補助金額主に利用する自動車への後付け踏み間違い防止装置購&#12042;費(取付費含む)の90%(上限6万円",
    "maxAmountNum": 60000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2021年4月1日 申請年度末時点で65歳以上の者 2.非営利かつ自ら使用する自動車に設置時し、設置後6カ月以内であること",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003521/index.html",
    "sourceName": "自動車踏み間違い防止装置設置費の補助を行っています!"
  },
  {
    "slug": "kumamoto-official-008-072-2026",
    "title": "水上村 定額減税を補足する給付金（不足額給付）のご案内",
    "organization": "水上村",
    "maxAmount": "最大４万円",
    "maxAmountNum": 40000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和６年12月31日 支給額に不足が生じる場合に、追加で給付を行うものです",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji0031121/index.html",
    "sourceName": "定額減税を補足する給付金（不足額給付）のご案内"
  },
  {
    "slug": "kumamoto-official-008-073-2026",
    "title": "水上村 生ごみ電動処理機・生ごみ処理容器の購入補助制度のご案内",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年1月17日 交付となる場合もあります",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003915/index.html",
    "sourceName": "生ごみ電動処理機・生ごみ処理容器の購入補助制度のご案内"
  },
  {
    "slug": "kumamoto-official-008-074-2026",
    "title": "水上村 LPガス使用世帯へ支援金（第3弾）を給付します",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和6年5月20日 申請方法 第2弾（申請期間令和6年5月20日～8月23日）支援金の支給を受けた方で、現在も引き続きLPガスをご使用中の場合は、手続き不要です",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji0031125/index.html",
    "sourceName": "LPガス使用世帯へ支援金（第3弾）を給付します"
  },
  {
    "slug": "kumamoto-official-008-075-2026",
    "title": "水上村 住宅用火災警報器設置費の補助を始めます!",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "水上村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2020年3月18日 期限を迎える住宅用火災警報器の取り換えのための購入及び設置に要する経費の補助を行う",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003198/index.html",
    "sourceName": "住宅用火災警報器設置費の補助を始めます!"
  },
  {
    "slug": "kumamoto-official-008-076-2026",
    "title": "水上村 チャイルドシート購入補助金について",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月25日 申請可",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003334/index.html",
    "sourceName": "チャイルドシート購入補助金について"
  },
  {
    "slug": "kumamoto-official-008-077-2026",
    "title": "水上村 不妊治療費補助を拡充しました!",
    "organization": "水上村",
    "maxAmount": "補助金額・治療に要する検査及び一般治療、特定治療に要する費用のうち一回当たり30万円",
    "maxAmountNum": 300000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "水上村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2019年4月1日 申請等 ・補助の認定申請:診断書、治療等受診(計画)証明書、戸籍謄本、住民票を提出してください",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003730/index.html",
    "sourceName": "不妊治療費補助を拡充しました!"
  },
  {
    "slug": "kumamoto-official-008-078-2026",
    "title": "水上村 国民健康保険の一部負担金減免制度について",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2018年3月16日 申請により入院等に係る自己負担額を減額・免除または徴収猶予する制度です",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji00374/index.html",
    "sourceName": "国民健康保険の一部負担金減免制度について"
  },
  {
    "slug": "kumamoto-official-008-079-2026",
    "title": "水上村 就学援助について",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "水上村内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2010年12月24日 申請時期・方法 毎年1月下旬から次年度の申請書を配布しますので、希望される場合は、小・中学校から就学援助費支給申請書をもらい、学校に提出してください",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003125/index.html",
    "sourceName": "就学援助について"
  },
  {
    "slug": "kumamoto-official-008-080-2026",
    "title": "水上村 水上村の保育料等完全無償化について",
    "organization": "水上村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "水上村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月26日 水上村の保育料等完全無償化について 最終更新日： 2026年6月26日 （ID:894） 印刷 令和2年4月1日から保育料の完全無償化をいち早く実地しています。また副食費についても無償化です。 対象となるのは、以下の施設を利用する子どもたち",
    "officialUrl": "https://www.vill.mizukami.lg.jp/kiji003894/index.html",
    "sourceName": "水上村の保育料等完全無償化について"
  }
];
