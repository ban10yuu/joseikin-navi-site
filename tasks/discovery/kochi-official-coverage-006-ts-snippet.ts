const kochiOfficial006Grants: Array<{
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
    "slug": "kochi-official-006-001-2026",
    "title": "佐川町 佐川町省エネ家電買替キャンペーン",
    "organization": "佐川町",
    "maxAmount": "補助金額等補助金額：１台当たり最大５万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐川町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和８年４月１日 交付状況 １. 概要 ゼロカーボンシティの実現に向けてCO₂排出量を削減するとともに、家庭における電気料金等の負担軽減を図るため、省エネ家電製品への買替えに対して補助をします",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=3194",
    "sourceName": "佐川町省エネ家電買替キャンペーン"
  },
  {
    "slug": "kochi-official-006-002-2026",
    "title": "佐川町 佐川町温暖化対策活動支援事業費補助金",
    "organization": "佐川町",
    "maxAmount": "補助金額補助対象経費（１）団体活動事業・補助金額は、１００,０００円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和８年７月１３日 交付する事業です",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=3272",
    "sourceName": "佐川町温暖化対策活動支援事業費補助金"
  },
  {
    "slug": "kochi-official-006-003-2026",
    "title": "佐川町 高齢者補聴器購入費助成事業",
    "organization": "佐川町",
    "maxAmount": "上限３万円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "佐川町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和６年６月１日 申請受付期間 令和６年６月１日から（予算額に達した時点で終了します） 対象者 (1)町内に住所を有し、申請時に６５歳以上である高齢者 (2)町税等の滞納がない方 (3)身体障害者手帳（聴覚障害）の交付を受けておらず、障害者総",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2739",
    "sourceName": "高齢者補聴器購入費助成事業"
  },
  {
    "slug": "kochi-official-006-004-2026",
    "title": "佐川町 佐川町水道水切替工事補助金",
    "organization": "佐川町",
    "maxAmount": "上限額：20万円",
    "maxAmountNum": 200000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐川町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付決定後に着工すること 佐川町指定給水装置工事事業者 補助金の額 補助対象経費の2分の1（1，000円未満切り捨て） 上限額：20万円 1設置箇所につき1回限り 申請の流れ 1. 補助金交付申請書と町税完納証明書、給水工事",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=3199",
    "sourceName": "佐川町水道水切替工事補助金"
  },
  {
    "slug": "kochi-official-006-005-2026",
    "title": "佐川町 佐川町新婚生活応援事業補助金",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和9年3月1日 交付します",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=3222",
    "sourceName": "佐川町新婚生活応援事業補助金"
  },
  {
    "slug": "kochi-official-006-006-2026",
    "title": "佐川町 佐川町出会い結婚支援事業費補助金",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "佐川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和８年４月１日 申請期間は？ 令和８年４月１日から令和９年３月３１日まで ただし、予算額に達した時点で受付は終了となります",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=1875",
    "sourceName": "佐川町出会い結婚支援事業費補助金"
  },
  {
    "slug": "kochi-official-006-007-2026",
    "title": "佐川町 佐川町耐震ポータルサイト",
    "organization": "佐川町",
    "maxAmount": "補助額】耐震設計上限255，000円",
    "maxAmountNum": 255000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和８年４月１日 申請につきましては、令和８年４月１日から受 付を開始します",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2047",
    "sourceName": "佐川町耐震ポータルサイト"
  },
  {
    "slug": "kochi-official-006-008-2026",
    "title": "佐川町 佐川町物価高騰対策商品券",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐川町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和６年３月１５日 募集 佐川町物価高騰対策商品券の取扱加盟店については随時、募集しています",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2661",
    "sourceName": "佐川町物価高騰対策商品券"
  },
  {
    "slug": "kochi-official-006-009-2026",
    "title": "佐川町 特別児童扶養手当",
    "organization": "佐川町",
    "maxAmount": "月額58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=541",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "kochi-official-006-010-2026",
    "title": "佐川町 子育て世帯等への住宅取得奨励金",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "housing",
      "living"
    ],
    "eligibility": "佐川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=3189",
    "sourceName": "子育て世帯等への住宅取得奨励金"
  },
  {
    "slug": "kochi-official-006-011-2026",
    "title": "佐川町 佐川町出産準備支援給付金",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給するものです",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=3209",
    "sourceName": "佐川町出産準備支援給付金"
  },
  {
    "slug": "kochi-official-006-012-2026",
    "title": "佐川町 若年夫婦世帯や子育て世帯を対象とした引越支援",
    "organization": "佐川町",
    "maxAmount": "限度額10万円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請 ・住民票の異動が完了していること",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2964",
    "sourceName": "若年夫婦世帯や子育て世帯を対象とした引越支援"
  },
  {
    "slug": "kochi-official-006-013-2026",
    "title": "佐川町 児童手当",
    "organization": "佐川町",
    "maxAmount": "1人あたりの支給月額と支給日○児童１人あたりの支給月額児童の年齢等支給額３歳未満（第１子・２子）月額15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給することにより、家庭等における生活の安定に寄与するとともに、次代の社会を担う児童の健やかな成長に資することを目的とした制度です",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2808",
    "sourceName": "児童手当"
  },
  {
    "slug": "kochi-official-006-014-2026",
    "title": "佐川町 移住 補助・支援（教育）",
    "organization": "佐川町",
    "maxAmount": "助成額：年額上限２４万円",
    "maxAmountNum": 240000,
    "category": "housing",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "佐川町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "移住 補助・支援(教育) | 佐川町役場 佐川町 本文へ移動 文字サイズ 標準 拡大 背景色 青 黒 白 サイト内検索 カスタム検索 ホーム くらし・手続き しごと・農業 観光 町政情報 本文 HOME &gt; 移住 補助・支援(教育) ",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2418",
    "sourceName": "移住 補助・支援（教育）"
  },
  {
    "slug": "kochi-official-006-015-2026",
    "title": "佐川町 学校給食無償措置に伴う補助金",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐川町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します | 佐川町役場 佐川町 本文へ移動 文字サイズ 標準 拡大 背景色 青 黒 白 サイト内検索 カスタム検索 ホーム くらし・手続き しごと・農業 観光 町政情報 本文 HOME &gt; 学校給食無償措置に伴い補",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2340",
    "sourceName": "学校給食無償措置に伴う補助金"
  },
  {
    "slug": "kochi-official-006-016-2026",
    "title": "佐川町 高知県重度心身障害児療育手当",
    "organization": "佐川町",
    "maxAmount": "月額7,300円",
    "maxAmountNum": 7300,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=763",
    "sourceName": "高知県重度心身障害児療育手当"
  },
  {
    "slug": "kochi-official-006-017-2026",
    "title": "佐川町 佐川町不育・不妊治療費等助成事業",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "佐川町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書（PDF：63KB） 佐川町不妊治療費等助成事業 医療機関等証明書（PDF：59KB） 佐川町不育症治療費等助成事業 不育症治療費の助成事業に関しましては、事前にお問い合わせください",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=1155",
    "sourceName": "佐川町不育・不妊治療費等助成事業"
  },
  {
    "slug": "kochi-official-006-018-2026",
    "title": "佐川町 障害児福祉手当",
    "organization": "佐川町",
    "maxAmount": "月額16,560円",
    "maxAmountNum": 16560,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=536",
    "sourceName": "障害児福祉手当"
  },
  {
    "slug": "kochi-official-006-019-2026",
    "title": "佐川町 特別障害者手当",
    "organization": "佐川町",
    "maxAmount": "月額３０，４５０円",
    "maxAmountNum": 30450,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給される 手当です",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=537",
    "sourceName": "特別障害者手当"
  },
  {
    "slug": "kochi-official-006-020-2026",
    "title": "佐川町 児童扶養手当",
    "organization": "佐川町",
    "maxAmount": "1人の場合・全部支給48，050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和6年11月1日 支給される手当てです",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=543",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kochi-official-006-021-2026",
    "title": "佐川町 難聴児補聴器購入費助成事業",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "佐川町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付対象とならない軽度・中等度の難聴児・者の、補聴器購入にかかる費用の一部を助成する事業です",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=1048",
    "sourceName": "難聴児補聴器購入費助成事業"
  },
  {
    "slug": "kochi-official-006-022-2026",
    "title": "佐川町 出産育児一時金（国保）",
    "organization": "佐川町",
    "maxAmount": "支給額が４０万８０００円",
    "maxAmountNum": 408000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和５年３月３１日 支給されます",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=760",
    "sourceName": "出産育児一時金（国保）"
  },
  {
    "slug": "kochi-official-006-023-2026",
    "title": "佐川町 乳幼児・児童医療費の助成",
    "organization": "佐川町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "佐川町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "提出が必要な場合があります） 様式ダウンロード 福祉医療費請求書（７３）（PDF：48KB） 福祉医療費請求書（７４）（PDF：48KB） 福祉医療費請求書（７５）（PDF：49KB） 福祉医療費請求書（７６）（PDF：49",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=547",
    "sourceName": "乳幼児・児童医療費の助成"
  },
  {
    "slug": "kochi-official-006-024-2026",
    "title": "佐川町 佐川町骨髄ドナー助成制度",
    "organization": "佐川町",
    "maxAmount": "上限7日：計14万円",
    "maxAmountNum": 140000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐川町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請により助成します",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2230",
    "sourceName": "佐川町骨髄ドナー助成制度"
  },
  {
    "slug": "kochi-official-006-025-2026",
    "title": "佐川町 障害・高齢障害の医療費の助成",
    "organization": "佐川町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "佐川町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請 加入している保険証と印鑑、対象となる身体障害者手帳等を持参のうえ、健康福祉課で手続きをしてください",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=540",
    "sourceName": "障害・高齢障害の医療費の助成"
  },
  {
    "slug": "kochi-official-006-026-2026",
    "title": "佐川町 ひとり親家庭の医療費の助成",
    "organization": "佐川町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "佐川町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請 加入している保険証（父母及び該当する子ども全員の分）と印鑑を持参のうえ、健康福祉課で手続きをしてください 様式ダウンロード 福祉医療費請求書（４３）（PDF：48KB） PDFファイルを開くにはAdobe Reader",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=549",
    "sourceName": "ひとり親家庭の医療費の助成"
  },
  {
    "slug": "kochi-official-006-027-2026",
    "title": "佐川町 葬祭費の支給",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐川町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給（国民健康保険・後期高齢者医療保険） | 佐川町役場 佐川町 本文へ移動 文字サイズ 標準 拡大 背景色 青 黒 白 サイト内検索 カスタム検索 ホーム くらし・手続き しごと・農業 観光 町政情報 本文 HOME &g",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=761",
    "sourceName": "葬祭費の支給"
  },
  {
    "slug": "kochi-official-006-028-2026",
    "title": "佐川町 奨学金返還支援事業",
    "organization": "佐川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "佐川町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "交付しています",
    "officialUrl": "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=2284",
    "sourceName": "奨学金返還支援事業"
  },
  {
    "slug": "kochi-official-006-029-2026",
    "title": "越知町 越知町移住促進引越補助金",
    "organization": "越知町",
    "maxAmount": "補助金額】引越業者及び運送業者に支払った荷物の運搬に要する費用に対し、２分の１を乗じて得た額（１，０００円",
    "maxAmountNum": 1000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "越知町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和８年４月１日 交付します",
    "officialUrl": "https://www.town.ochi.kochi.jp/ijyu/279",
    "sourceName": "越知町移住促進引越補助金"
  },
  {
    "slug": "kochi-official-006-030-2026",
    "title": "越知町 越知町の農業支援制度",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "越知町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月7日 申請書 公園 防災・基盤 防災情報 道路・交通 公共施設 安全 産業 イベント 祭り 文化 スポーツ その他のイベント お知らせ 入札情報 広報おち 議会だより その他のお知らせ 移住情報 観光情報 各課一覧 よコジローSN",
    "officialUrl": "https://www.town.ochi.kochi.jp/sangyou/568",
    "sourceName": "越知町の農業支援制度"
  },
  {
    "slug": "kochi-official-006-031-2026",
    "title": "越知町 不妊治療費等助成事業",
    "organization": "越知町",
    "maxAmount": "助成額１年ごとに５万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "越知町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年6月7日 申請書 公園 防災・基盤 防災情報 道路・交通 公共施設 安全 産業 イベント 祭り 文化 スポーツ その他のイベント お知らせ 入札情報 広報おち 議会だより その他のお知らせ 移住情報 観光情報 各課一覧 よコジローSN",
    "officialUrl": "https://www.town.ochi.kochi.jp/center/hunintiryou",
    "sourceName": "不妊治療費等助成事業"
  },
  {
    "slug": "kochi-official-006-032-2026",
    "title": "越知町 ひとり親家庭等の医療費の助成",
    "organization": "越知町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "越知町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年6月7日 申請書 公園 防災・基盤 防災情報 道路・交通 公共施設 安全 産業 イベント 祭り 文化 スポーツ その他のイベント お知らせ 入札情報 広報おち 議会だより その他のお知らせ 移住情報 観光情報 各課一覧 よコジローSN",
    "officialUrl": "https://www.town.ochi.kochi.jp/jyumin/hitori_iryo",
    "sourceName": "ひとり親家庭等の医療費の助成"
  },
  {
    "slug": "kochi-official-006-033-2026",
    "title": "越知町 障害者の医療費の助成",
    "organization": "越知町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "越知町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年6月7日 申請書 公園 防災・基盤 防災情報 道路・交通 公共施設 安全 産業 イベント 祭り 文化 スポーツ その他のイベント お知らせ 入札情報 広報おち 議会だより その他のお知らせ 移住情報 観光情報 各課一覧 よコジローSN",
    "officialUrl": "https://www.town.ochi.kochi.jp/center/syougaisyairyouhi",
    "sourceName": "障害者の医療費の助成"
  },
  {
    "slug": "kochi-official-006-034-2026",
    "title": "越知町 移住・定住に関する住宅補助金制度",
    "organization": "越知町",
    "maxAmount": "最大196万円",
    "maxAmountNum": 1960000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "越知町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.town.ochi.kochi.jp/ijyu/hojyokin",
    "sourceName": "移住・定住に関する住宅補助金制度"
  },
  {
    "slug": "kochi-official-006-035-2026",
    "title": "越知町 越知町空き家改修費等補助金交付事業",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "越知町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付事業のご紹介 | 越知町の移住支援 おち着くライフ ホーム 移住に向けて 越知で暮らす 越知の住宅 越知で働く 移住者の声 イベント 越知町空き家改修費等補助金交付事業のご紹介 越知町空き家改修費等補助金交付事業のご紹介",
    "officialUrl": "https://www.town.ochi.kochi.jp/ijyu/hojyo_akiyakaisyu",
    "sourceName": "越知町空き家改修費等補助金交付事業"
  },
  {
    "slug": "kochi-official-006-036-2026",
    "title": "越知町 越知町木造住宅耐震リフォーム補助金交付事業",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "越知町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付事業のご紹介 | 越知町の移住支援 おち着くライフ ホーム 移住に向けて 越知で暮らす 越知の住宅 越知で働く 移住者の声 イベント 越知町木造住宅耐震リフォーム補助金交付事業のご紹介 越知町木造住宅耐震リフォーム補助金",
    "officialUrl": "https://www.town.ochi.kochi.jp/ijyu/hojyo_mokuzotaishin",
    "sourceName": "越知町木造住宅耐震リフォーム補助金交付事業"
  },
  {
    "slug": "kochi-official-006-037-2026",
    "title": "越知町 越知町住宅リフォーム補助金交付事業",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "越知町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付事業のご紹介 | 越知町の移住支援 おち着くライフ ホーム 移住に向けて 越知で暮らす 越知の住宅 越知で働く 移住者の声 イベント 越知町住宅リフォーム補助金交付事業のご紹介 越知町住宅リフォーム補助金交付事業のご紹介",
    "officialUrl": "https://www.town.ochi.kochi.jp/ijyu/hojyo_reformonly",
    "sourceName": "越知町住宅リフォーム補助金交付事業"
  },
  {
    "slug": "kochi-official-006-038-2026",
    "title": "越知町 令和８年度越知町地域振興券",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "越知町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月7日 申請書 公園 防災・基盤 防災情報 道路・交通 公共施設 安全 産業 イベント 祭り 文化 スポーツ その他のイベント お知らせ 入札情報 広報おち 議会だより その他のお知らせ 移住情報 観光情報 各課一覧 よコジローSN",
    "officialUrl": "https://www.town.ochi.kochi.jp/sangyou/797",
    "sourceName": "令和８年度越知町地域振興券"
  },
  {
    "slug": "kochi-official-006-039-2026",
    "title": "越知町 入居費用及び家賃助成事業",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "越知町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "入居費用及び家賃助成事業のお知らせ | 越知町の移住支援 おち着くライフ ホーム 移住に向けて 越知で暮らす 越知の住宅 越知で働く 移住者の声 イベント 入居費用及び家賃助成事業のお知らせ 入居費用及び家賃助成事業のお知らせ ホーム 移住",
    "officialUrl": "https://www.town.ochi.kochi.jp/ijyu/hojyo_yatin",
    "sourceName": "入居費用及び家賃助成事業"
  },
  {
    "slug": "kochi-official-006-040-2026",
    "title": "越知町 医療費の助成",
    "organization": "越知町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "越知町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年6月7日 申請書 公園 防災・基盤 防災情報 道路・交通 公共施設 安全 産業 イベント 祭り 文化 スポーツ その他のイベント お知らせ 入札情報 広報おち 議会だより その他のお知らせ 移住情報 観光情報 各課一覧 よコジローSN",
    "officialUrl": "https://www.town.ochi.kochi.jp/jyumin/iryohijyosei",
    "sourceName": "医療費の助成"
  },
  {
    "slug": "kochi-official-006-041-2026",
    "title": "越知町 小規模ほ場整備補助金",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "越知町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://www.town.ochi.kochi.jp/storage/files/sangyou/02%E5%B0%8F%E8%A6%8F%E6%A8%A1%E3%81%BB%E5%A0%B4%E6%95%B4%E5%82%99%E8%A3%9C%E5%8A%A9%E9%87%91%E4%BA%A4%E4%BB%98%E8%A6%81%E7%B6%B1.pdf",
    "sourceName": "小規模ほ場整備補助金"
  },
  {
    "slug": "kochi-official-006-042-2026",
    "title": "越知町 越知町農産物加工施設整備補助金",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "越知町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://www.town.ochi.kochi.jp/storage/files/sangyou/04%E8%B6%8A%E7%9F%A5%E7%94%BA%E8%BE%B2%E7%94%A3%E7%89%A9%E5%8A%A0%E5%B7%A5%E6%96%BD%E8%A8%AD%E6%95%B4%E5%82%99%E8%A3%9C%E5%8A%A9%E9%87%91%E4%BA%A4%E4%BB%98%E8%A6%81%E7%B6%B1.pdf",
    "sourceName": "越知町農産物加工施設整備補助金"
  },
  {
    "slug": "kochi-official-006-043-2026",
    "title": "越知町 越知町農業継続応援事業費補助金",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "越知町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://www.town.ochi.kochi.jp/storage/files/sangyou/05%E8%B6%8A%E7%9F%A5%E7%94%BA%E8%BE%B2%E6%A5%AD%E7%B6%99%E7%B6%9A%E5%BF%9C%E6%8F%B4%E4%BA%8B%E6%A5%AD%E8%B2%BB%E8%A3%9C%E5%8A%A9%E9%87%91%E4%BA%A4%E4%BB%98%E8%A6%81%E7%B6%B1.pdf",
    "sourceName": "越知町農業継続応援事業費補助金"
  },
  {
    "slug": "kochi-official-006-044-2026",
    "title": "越知町 スマート農業推進事業費補助金",
    "organization": "越知町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "越知町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://www.town.ochi.kochi.jp/storage/files/sangyou/R8%E6%94%AF%E6%8F%B4%E5%88%B6%E5%BA%A6/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E8%BE%B2%E6%A5%AD%E6%8E%A8%E9%80%B2%E4%BA%8B%E6%A5%AD%E8%B2%BB%E8%A3%9C%E5%8A%A9%E9%87%91%E8%A6%81%E7%B6%B1.pdf",
    "sourceName": "スマート農業推進事業費補助金"
  },
  {
    "slug": "kochi-official-006-045-2026",
    "title": "檮原町 児童手当",
    "organization": "檮原町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "檮原町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給日が偶数月の10日に変わります",
    "officialUrl": "https://www.town.yusuhara.lg.jp/life/detail.php?hdnKey=492",
    "sourceName": "児童手当"
  },
  {
    "slug": "kochi-official-006-046-2026",
    "title": "檮原町 子ども医療費助成",
    "organization": "檮原町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "檮原町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "子ども医療費助成に係る適正受診にご協力ください｜雲の上の町 ゆすはら | 梼原町役場 本文へ移動 雲の上の街 ゆすはら 文字サイズ 拡大 標準 背景色 黒 青 白 くらし・手続き 観光情報 移住について 環境への取組 ふるさと納税 本文 子",
    "officialUrl": "https://www.town.yusuhara.lg.jp/life/detail.php?hdnKey=592",
    "sourceName": "子ども医療費助成"
  },
  {
    "slug": "kochi-official-006-047-2026",
    "title": "檮原町 梼原町新エネルギー等活用施設設置補助金",
    "organization": "檮原町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "檮原町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付を受けたことのある方は、再度同一事業の補助金の交付を受けることはできません",
    "officialUrl": "https://www.town.yusuhara.lg.jp/life/detail.php?hdnKey=473",
    "sourceName": "梼原町新エネルギー等活用施設設置補助金"
  },
  {
    "slug": "kochi-official-006-048-2026",
    "title": "檮原町 物価高対応子育て応援手当",
    "organization": "檮原町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "檮原町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "「物価高対応子育て応援手当」について｜雲の上の町 ゆすはら | 梼原町役場 本文へ移動 雲の上の街 ゆすはら 文字サイズ 拡大 標準 背景色 黒 青 白 くらし・手続き 観光情報 移住について 環境への取組 ふるさと納税 本文 「物価高対応",
    "officialUrl": "https://www.town.yusuhara.lg.jp/life/detail.php?hdnKey=618",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "kochi-official-006-049-2026",
    "title": "檮原町 合併処理浄化槽設置整備事業",
    "organization": "檮原町",
    "maxAmount": "補助金額人槽区分補助金額5人槽730,000円",
    "maxAmountNum": 730000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "檮原町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "合併処理浄化槽設置整備事業｜雲の上の町 ゆすはら | 梼原町役場 本文へ移動 雲の上の街 ゆすはら 文字サイズ 拡大 標準 背景色 黒 青 白 くらし・手続き 観光情報 移住について 環境への取組 ふるさと納税 本文 合併処理浄化槽設置整備",
    "officialUrl": "https://www.town.yusuhara.lg.jp/life/detail.php?hdnKey=156",
    "sourceName": "合併処理浄化槽設置整備事業"
  },
  {
    "slug": "kochi-official-006-050-2026",
    "title": "檮原町 風力発電による売電益の活用",
    "organization": "檮原町",
    "maxAmount": "20万円の補助",
    "maxAmountNum": 200000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "檮原町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付金を交付しております",
    "officialUrl": "https://www.town.yusuhara.lg.jp/life/detail.php?hdnKey=275",
    "sourceName": "風力発電による売電益の活用"
  },
  {
    "slug": "kochi-official-006-051-2026",
    "title": "日高村 スマイルひだか住宅建築促進補助金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請方法 下記までお問い合わせください",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=17",
    "sourceName": "スマイルひだか住宅建築促進補助金"
  },
  {
    "slug": "kochi-official-006-052-2026",
    "title": "日高村 電動式生ごみ処理機の購入補助金",
    "organization": "日高村",
    "maxAmount": "限度額は２０，０００円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日高村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付を受けることのできる者は、以下の各項目に掲げる要件をすべて満たす必要があります",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=18",
    "sourceName": "電動式生ごみ処理機の購入補助金"
  },
  {
    "slug": "kochi-official-006-053-2026",
    "title": "日高村 予防接種費用助成",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "予防接種費用助成のお知らせ｜くらしの情報 > 補助金・助成金|日高村(公式) お問い合わせはこちらから サイトマップ HOME くらしの情報 くらしの手続き 日高村議会 事業者の方へ 学ぶ・遊ぶ 村政の情報 防災・災害 日高村選挙管理員会 ",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=41",
    "sourceName": "予防接種費用助成"
  },
  {
    "slug": "kochi-official-006-054-2026",
    "title": "日高村 鳥獣被害対策の補助",
    "organization": "日高村",
    "maxAmount": "限度額は１００，０００円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日高村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付要綱 ※ 予算には限りがありますので、事前にお問い合わせください",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=42",
    "sourceName": "鳥獣被害対策の補助"
  },
  {
    "slug": "kochi-official-006-055-2026",
    "title": "日高村 猫の避妊・去勢手術の助成金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日高村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請者が糞尿の清掃、その他、地域環境の 改善の取組を行う猫 【村が負担する額】 メス猫 手術費用 7,000 円／ 1 匹 オス猫 手術費用 5,000 円／ 1 匹 【申請書受付期間】 当該年度４月１日～１月 31 日（手",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=620",
    "sourceName": "猫の避妊・去勢手術の助成金"
  },
  {
    "slug": "kochi-official-006-056-2026",
    "title": "日高村 浄化槽設置整備事業補助金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付関係｜くらしの情報 > 補助金・助成金|日高村(公式) お問い合わせはこちらから サイトマップ HOME くらしの情報 くらしの手続き 日高村議会 事業者の方へ 学ぶ・遊ぶ 村政の情報 防災・災害 日高村選挙管理員会 新",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=629",
    "sourceName": "浄化槽設置整備事業補助金"
  },
  {
    "slug": "kochi-official-006-057-2026",
    "title": "日高村 日高村住宅断熱改修費補助金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和８年７月１日 交付要綱 【申請期間等】 申請期間：令和８年７月１日（水）～ 先着順（予算額に達した時点で受付終了） 予算額：８０万円 【申請方法】 「交付申請書」及び交付要綱別表第４で定める「添付書類」を日高村産業環境課まで提出してくださ",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=644",
    "sourceName": "日高村住宅断熱改修費補助金"
  },
  {
    "slug": "kochi-official-006-058-2026",
    "title": "日高村 防犯灯設置補助事業",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請書 実績報告書 請求書 お問い合わせ 総務課 電話:0889-24-5113 FAX:0889-24-7900 暮らしの情報 暮らしの手続き 学ぶ・遊ぶ 村政の情報 防災・災害 事業者の方へ 〒781-2194 高知県高",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=37",
    "sourceName": "防犯灯設置補助事業"
  },
  {
    "slug": "kochi-official-006-059-2026",
    "title": "日高村 日高村老朽住宅等除却事業補助金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "日高村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "期限について】 工事および実績報告書の提出について、事業実施年度の2月末までに報告をお願いします",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=36",
    "sourceName": "日高村老朽住宅等除却事業補助金"
  },
  {
    "slug": "kochi-official-006-060-2026",
    "title": "日高村 日高村自治会元気づくり応援補助金",
    "organization": "日高村",
    "maxAmount": "補助金額自治会に所属している世帯数×500円",
    "maxAmountNum": 500,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日高村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=38",
    "sourceName": "日高村自治会元気づくり応援補助金"
  },
  {
    "slug": "kochi-official-006-061-2026",
    "title": "日高村 日高村集会所等整備事業補助金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "日高村集会所等整備事業補助金｜くらしの情報 > 補助金・助成金|日高村(公式) お問い合わせはこちらから サイトマップ HOME くらしの情報 くらしの手続き 日高村議会 事業者の方へ 学ぶ・遊ぶ 村政の情報 防災・災害 日高村選挙管理員会",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=39",
    "sourceName": "日高村集会所等整備事業補助金"
  },
  {
    "slug": "kochi-official-006-062-2026",
    "title": "日高村 日高村住宅用太陽光発電設備等導入補助金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和８年５月１日 申請期間等】 申請期間：令和８年５月１日（金）～ 先着順（予算額に達した時点で受付終了） 予算額：３６０万円（当初） 予算残：８７万円（令和８年７月６日時点） ※左記、交付決定を行うごとに更新します 【申請方法】 「交付申請",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=789",
    "sourceName": "日高村住宅用太陽光発電設備等導入補助金"
  },
  {
    "slug": "kochi-official-006-063-2026",
    "title": "日高村 日高村総合補助金事業",
    "organization": "日高村",
    "maxAmount": "限度額予算額300万円",
    "maxAmountNum": 3000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和８年４月１日 募集いたします",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=1&FREE_PAGE_ID=40",
    "sourceName": "日高村総合補助金事業"
  },
  {
    "slug": "kochi-official-006-064-2026",
    "title": "日高村 耐震診断・改修",
    "organization": "日高村",
    "maxAmount": "上限額が令和７年４月１日より１４０万円",
    "maxAmountNum": 1400000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和７年４月１日 受付は令和７年４月１日から開始します",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=4&FREE_PAGE_ID=28",
    "sourceName": "耐震診断・改修"
  },
  {
    "slug": "kochi-official-006-065-2026",
    "title": "日高村 日高村災害対応型給油所整備促進事業費補助金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "日高村災害対応型給油所整備促進事業費補助金｜くらしの情報 > 補助金・助成金|日高村(公式) お問い合わせはこちらから サイトマップ HOME くらしの情報 くらしの手続き 日高村議会 事業者の方へ 学ぶ・遊ぶ 村政の情報 防災・災害 日高",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=4&FREE_PAGE_ID=226",
    "sourceName": "日高村災害対応型給油所整備促進事業費補助金"
  },
  {
    "slug": "kochi-official-006-066-2026",
    "title": "日高村 結婚新生活支援補助金交付事業",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "日高村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和7年1月1日 交付事業｜くらしの情報 > 補助金・助成金|日高村(公式) お問い合わせはこちらから サイトマップ HOME くらしの情報 くらしの手続き 日高村議会 事業者の方へ 学ぶ・遊ぶ 村政の情報 防災・災害 日高村選挙管理員会 新",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=5&FREE_PAGE_ID=48",
    "sourceName": "結婚新生活支援補助金交付事業"
  },
  {
    "slug": "kochi-official-006-067-2026",
    "title": "日高村 日高村移住希望者等住宅改修費補助金",
    "organization": "日高村",
    "maxAmount": "限度額270万円",
    "maxAmountNum": 2700000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=5&FREE_PAGE_ID=473",
    "sourceName": "日高村移住希望者等住宅改修費補助金"
  },
  {
    "slug": "kochi-official-006-068-2026",
    "title": "日高村 日高村Uターン引越補助金",
    "organization": "日高村",
    "maxAmount": "補助金額引越業者等及び運送業者に支払った費用に対し、２分の１を乗じて得た額（上限額１０万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日高村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=5&FREE_PAGE_ID=669",
    "sourceName": "日高村Uターン引越補助金"
  },
  {
    "slug": "kochi-official-006-069-2026",
    "title": "日高村 日高村子育て世帯等移住・定住促進事業奨励金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "housing",
      "employment",
      "living"
    ],
    "eligibility": "日高村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和7年4月1日 交付します",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=5&FREE_PAGE_ID=807",
    "sourceName": "日高村子育て世帯等移住・定住促進事業奨励金"
  },
  {
    "slug": "kochi-official-006-070-2026",
    "title": "日高村 日高村出会いマッチング応援事業補助金",
    "organization": "日高村",
    "maxAmount": "補助金額補助対象範囲補助金額サイト１高知で恋しよ!!マッチングサイト入会登録料定額２万円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付申請時において日高村に住民登録し、居住している者であり、かつ、 今後１０年以上村内に居住する意思があること",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=13&CATEGORY_ID3=1&CATEGORY_ID4=5&FREE_PAGE_ID=814",
    "sourceName": "日高村出会いマッチング応援事業補助金"
  },
  {
    "slug": "kochi-official-006-071-2026",
    "title": "日高村 日高村防災士育成事業補助金",
    "organization": "日高村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "日高村防災士育成事業補助金｜防災・災害 > 防災補助金制度|日高村(公式) お問い合わせはこちらから サイトマップ HOME くらしの情報 くらしの手続き 日高村議会 事業者の方へ 学ぶ・遊ぶ 村政の情報 防災・災害 日高村選挙管理員会 新",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=7&CATEGORY_ID2=4&CATEGORY_ID3=3&CATEGORY_ID4=1&FREE_PAGE_ID=344",
    "sourceName": "日高村防災士育成事業補助金"
  },
  {
    "slug": "kochi-official-006-072-2026",
    "title": "日高村 児童手当",
    "organization": "日高村",
    "maxAmount": "支給額が変わる人・所得制限によって特例給付（子供1人あたり5,000円",
    "maxAmountNum": 5000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給する制度です",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=4&CATEGORY_ID3=1&CATEGORY_ID4=9&FREE_PAGE_ID=178",
    "sourceName": "児童手当"
  },
  {
    "slug": "kochi-official-006-073-2026",
    "title": "日高村 乳幼児・児童医療費助成",
    "organization": "日高村",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "日高村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付申請証（様式１号） 必要書類 ・お子様の健康保険証または健康保険加入状況がわかるもの ・個人番号（マイナンバー） ・本人確認ができるもの（運転免許証等） ・所得課税証明書（日高村に転入してきた1歳から小学生就学前までのお",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=4&CATEGORY_ID3=1&CATEGORY_ID4=10&FREE_PAGE_ID=182",
    "sourceName": "乳幼児・児童医療費助成"
  },
  {
    "slug": "kochi-official-006-074-2026",
    "title": "日高村 ひとり親家庭医療費助成",
    "organization": "日高村",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "日高村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付申請書 必要書類 ・対象者全員の健康保険証または保険加入情報が確認できるもの ・対象者全員の個人番号（マイナンバー） ・申請者の本人確認ができるもの（運転免許証やマイナンバーカード等） ・1月2日以降に転入された場合は前",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=4&CATEGORY_ID3=1&CATEGORY_ID4=11&FREE_PAGE_ID=181",
    "sourceName": "ひとり親家庭医療費助成"
  },
  {
    "slug": "kochi-official-006-075-2026",
    "title": "日高村 物価高対応子育て応援手当",
    "organization": "日高村",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日高村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給します！｜くらしの情報 > 子ども|日高村(公式) お問い合わせはこちらから サイトマップ HOME くらしの情報 くらしの手続き 日高村議会 事業者の方へ 学ぶ・遊ぶ 村政の情報 防災・災害 日高村選挙管理員会 新型コ",
    "officialUrl": "https://www.vill.hidaka.kochi.jp/kurashi/child_category_free_page.cgi?SITE_ID=1&CATEGORY_ID=3&CATEGORY_ID2=4&CATEGORY_ID3=1&CATEGORY_ID4=16&FREE_PAGE_ID=835",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "kochi-official-006-076-2026",
    "title": "津野町 不妊治療費助成事業",
    "organization": "津野町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "津野町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://town.kochi-tsuno.lg.jp/cms/wp-content/uploads/2024/04/e5d76b565ea011e5dc2bae7cf8dba49f.pdf",
    "sourceName": "不妊治療費助成事業"
  },
  {
    "slug": "kochi-official-006-077-2026",
    "title": "津野町 すくすく子育てガイド",
    "organization": "津野町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津野町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "すくすく子育てガイド | くらしの情報 | 津野町 本文へ移動 津野町 総合トップへ 検索 文字サイズ 標準 拡大 menu 津野町の概要 くらしの情報 観光情報 防災情報 移住・定住情報 アクセス くらしの情報 - administrat",
    "officialUrl": "https://town.kochi-tsuno.lg.jp/section/post_9021",
    "sourceName": "すくすく子育てガイド"
  },
  {
    "slug": "kochi-official-006-078-2026",
    "title": "津野町 子育て支援制度",
    "organization": "津野町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津野町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "交付 妊婦一般健康診査（妊婦健診） 産婦健診を受けましょう 県外で受診した産婦健康診査の費用助成について 県外の医療機関（委託外医療機関）における産婦健康診査費に係る受診料請求書 妊婦歯科健康診査 津野町妊娠・子育てスタータ",
    "officialUrl": "https://town.kochi-tsuno.lg.jp/section/post_192",
    "sourceName": "子育て支援制度"
  },
  {
    "slug": "kochi-official-006-079-2026",
    "title": "津野町 移住・定住情報",
    "organization": "津野町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津野町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付しています",
    "officialUrl": "https://town.kochi-tsuno.lg.jp/kurashi/ijyu",
    "sourceName": "移住・定住情報"
  },
  {
    "slug": "kochi-official-006-080-2026",
    "title": "津野町 子育て",
    "organization": "津野町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津野町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "子育て | 移住・定住情報 | 津野町 本文へ移動 津野町 総合トップへ 検索 文字サイズ 標準 拡大 menu 津野町の概要 くらしの情報 観光情報 防災情報 移住・定住情報 アクセス 移住・定住情報 - emigration & set",
    "officialUrl": "https://town.kochi-tsuno.lg.jp/kurashi/ijyu/ijyu_children",
    "sourceName": "子育て"
  },
  {
    "slug": "kochi-official-006-081-2026",
    "title": "津野町 住まい",
    "organization": "津野町",
    "maxAmount": "補助額＞補助対象経費の３分の２以内かつ２０万円",
    "maxAmountNum": 200000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "津野町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集物件情報 🏠津野町空き家バンク 町内の空き家情報を津野町のホームページや移住相談窓口で紹介します",
    "officialUrl": "https://town.kochi-tsuno.lg.jp/kurashi/ijyu/ijyu_residence",
    "sourceName": "住まい"
  },
  {
    "slug": "kochi-official-006-082-2026",
    "title": "津野町 定住奨励金",
    "organization": "津野町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津野町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://town.kochi-tsuno.lg.jp/cms/wp-content/uploads/2026/02/632a86ff5d770d1c510782df259c1b17.pdf",
    "sourceName": "定住奨励金"
  },
  {
    "slug": "kochi-official-006-083-2026",
    "title": "津野町 津野町空き家活用荷物整理補助金",
    "organization": "津野町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津野町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://town.kochi-tsuno.lg.jp/cms/wp-content/uploads/2026/05/059bb4e322838d9924bf02c46d2a9ba6.pdf",
    "sourceName": "津野町空き家活用荷物整理補助金"
  }
];
