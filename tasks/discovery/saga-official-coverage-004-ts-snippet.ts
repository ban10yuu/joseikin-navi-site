const sagaOfficial004Grants: Array<{
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
    "slug": "saga-official-004-001-2026",
    "title": "有田町 有田っ子出産・子育て応援ニコッと給付金について",
    "organization": "有田町",
    "maxAmount": "支給額対象児童一人あたり10万円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年7月6日 支給します！ 1 出産祝い金 対象者 以下の（1）および（2）の両方を満たしていること",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji003301/index.html",
    "sourceName": "有田っ子出産・子育て応援ニコッと給付金について"
  },
  {
    "slug": "saga-official-004-002-2026",
    "title": "有田町 有田町妊婦に対する交通費及び宿泊費支援事業",
    "organization": "有田町",
    "maxAmount": "上限）から、1泊あたり2,000円",
    "maxAmountNum": 2000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "有田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月20日 申請方法 出産から 1年以内 に、申請書を提出 必要書類 ・下記申請書 有田町妊婦に対する交通費及び宿泊費支援事業助成金交付申請書兼請求書（PDF：170.9キロバイト） ・妊婦健診等の内容が記載された母子手帳の写し ・交通",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0033685/index.html",
    "sourceName": "有田町妊婦に対する交通費及び宿泊費支援事業"
  },
  {
    "slug": "saga-official-004-003-2026",
    "title": "有田町 出産育児一時金（国保）",
    "organization": "有田町",
    "maxAmount": "支給額は、1児につき50万円",
    "maxAmountNum": 500000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年12月2日 支給します)",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji003736/index.html",
    "sourceName": "出産育児一時金（国保）"
  },
  {
    "slug": "saga-official-004-004-2026",
    "title": "有田町 不妊治療応援事業",
    "organization": "有田町",
    "maxAmount": "助成額1周期につき上限3万円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "有田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年6月27日 申請を行ってください ・ 佐賀県不妊治療助成事業のご案内 （外部リンク） 助成額 1周期につき上限3万円 ※治療が終了した日が属する年度内（4月～翌年3月）において、助成対象の治療費（自己負担額）から、佐賀県等から助成を受け",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0032538/index.html",
    "sourceName": "不妊治療応援事業"
  },
  {
    "slug": "saga-official-004-005-2026",
    "title": "有田町 子どもへのインフルエンザ予防接種の助成について（高校生相当年齢まで）",
    "organization": "有田町",
    "maxAmount": "助成額1回目または2回目のインフルエンザ予防接種費に対し、最大2,000円",
    "maxAmountNum": 2000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "有田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年9月25日 申請・請求方法 1",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0032762/index.html",
    "sourceName": "子どもへのインフルエンザ予防接種の助成について（高校生相当年齢まで）"
  },
  {
    "slug": "saga-official-004-006-2026",
    "title": "有田町 児童手当",
    "organization": "有田町",
    "maxAmount": "支給額児童手当支給額（令和6年10月改正）第1子第2子第3子以降3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年6月18日 支給する制度です",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji003574/index.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "saga-official-004-007-2026",
    "title": "有田町 児童扶養手当について",
    "organization": "有田町",
    "maxAmount": "月額（令和8年4月～）児童扶養手当月額（令和8年4月から）区分手当の全部を受給できる方手当の一部を受給できる方児童1人のとき48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給される手当です",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji003883/index.html",
    "sourceName": "児童扶養手当について"
  },
  {
    "slug": "saga-official-004-008-2026",
    "title": "有田町 特別児童扶養手当について",
    "organization": "有田町",
    "maxAmount": "月額58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給されます",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0032463/index.html",
    "sourceName": "特別児童扶養手当について"
  },
  {
    "slug": "saga-official-004-009-2026",
    "title": "有田町 ひとり親家庭等医療費助成について",
    "organization": "有田町",
    "maxAmount": "限度額扶養親族の数本人扶養義務者および配偶者0人2,080,000円",
    "maxAmountNum": 2080000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "有田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年9月16日 申請方法 医療費助成の資格の認定には、健康保険証などが必要です",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji003891/index.html",
    "sourceName": "ひとり親家庭等医療費助成について"
  },
  {
    "slug": "saga-official-004-010-2026",
    "title": "有田町 子どもの医療費助成について",
    "organization": "有田町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "有田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年6月26日 申請の手続きが必要です",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji003887/index.html",
    "sourceName": "子どもの医療費助成について"
  },
  {
    "slug": "saga-official-004-011-2026",
    "title": "有田町 チャイルドシート等購入費補助事業",
    "organization": "有田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年4月9日 交付します",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji003900/index.html",
    "sourceName": "チャイルドシート等購入費補助事業"
  },
  {
    "slug": "saga-official-004-012-2026",
    "title": "有田町 新生児聴覚スクリーニング検査費の助成",
    "organization": "有田町",
    "maxAmount": "上限5,000円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "有田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年12月27日 申請してください",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0031702/index.html",
    "sourceName": "新生児聴覚スクリーニング検査費の助成"
  },
  {
    "slug": "saga-official-004-013-2026",
    "title": "有田町 高校生相当年齢までの選定療養費の助成をしています。",
    "organization": "有田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "有田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年5月14日 交付対象者 助成金申請時に上記児童を養育している有田町内の保護者 対象医療機関 全国の医療機関 ※ただし、令和5年10月診療分から令和7年3月診療分については、伊万里有田共立病院の選定療養費に限る 申請方法 以下の様式に、病",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0032358/index.html",
    "sourceName": "高校生相当年齢までの選定療養費の助成をしています。"
  },
  {
    "slug": "saga-official-004-014-2026",
    "title": "有田町 妊婦子宮頸がん検診の助成について",
    "organization": "有田町",
    "maxAmount": "助成額1,700円",
    "maxAmountNum": 1700,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "有田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月27日 交付申請（請求）書」の”医療機関証明欄”を受診した医療機関で記入してもらい、その他必要事項を記入して健康福祉課へ提出する",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji003834/index.html",
    "sourceName": "妊婦子宮頸がん検診の助成について"
  },
  {
    "slug": "saga-official-004-015-2026",
    "title": "有田町 自立支援医療（育成医療）費の給付について",
    "organization": "有田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年9月18日 支給を行うものです",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0032469/index.html",
    "sourceName": "自立支援医療（育成医療）費の給付について"
  },
  {
    "slug": "saga-official-004-016-2026",
    "title": "有田町 軽度・中度難聴児補聴器購入費助成事業について",
    "organization": "有田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "有田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年7月2日 交付対象とならない軽度・中度難聴児に対し、言語の習得、教育等における健全な発達を支援するため、補聴器の購入費・修理費の一部を助成します",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0032471/index.html",
    "sourceName": "軽度・中度難聴児補聴器購入費助成事業について"
  },
  {
    "slug": "saga-official-004-017-2026",
    "title": "有田町 就学援助制度について",
    "organization": "有田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2024年3月24日 申請される方は、下記の内容をご確認の上、手続きしてください",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0031123/index.html",
    "sourceName": "就学援助制度について"
  },
  {
    "slug": "saga-official-004-018-2026",
    "title": "有田町 奨学金の貸付制度について",
    "organization": "有田町",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "有田町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2024年3月24日 奨学金の貸付制度について / ありた子育てサイト / 有田町公式ホームページ ヘッダーをスキップ 本文へジャンプ Language English 中文(简化字) 中文(繁體字) 한국어 アクセシビリティ 行政トップページへ 年齢・対象別で",
    "officialUrl": "https://www.town.arita.lg.jp/kosodate/kiji0031124/index.html",
    "sourceName": "奨学金の貸付制度について"
  },
  {
    "slug": "saga-official-004-019-2026",
    "title": "大町町 ご入学・ご進学おめでとうございます！大町町子ども新生活サポート応援金を支給します",
    "organization": "大町町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "大町町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月10日 支給します / 子育て応援のまち おおまち / 大町町 ヘッダーをスキップ 本文へジャンプ --> Foreign Language English 中文(简化字) 中文(繁體字) 한국어 Khmer 閲覧補助 行政トップペ",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji0031566/index.html",
    "sourceName": "ご入学・ご進学おめでとうございます！大町町子ども新生活サポート応援金を支給します"
  },
  {
    "slug": "saga-official-004-020-2026",
    "title": "大町町 大町町在宅保育支援事業を始めます",
    "organization": "大町町",
    "maxAmount": "1人につき月額5,000円",
    "maxAmountNum": 5000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大町町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年4月2日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji0031324/index.html",
    "sourceName": "大町町在宅保育支援事業を始めます"
  },
  {
    "slug": "saga-official-004-021-2026",
    "title": "大町町 定住奨励金の期限が延長されました",
    "organization": "大町町",
    "maxAmount": "上限100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大町町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月14日 期限が延長されました / 子育て応援のまち おおまち / 大町町 ヘッダーをスキップ 本文へジャンプ --> Foreign Language English 中文(简化字) 中文(繁體字) 한국어 Khmer 閲覧補助 行",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji00360/index.html",
    "sourceName": "定住奨励金の期限が延長されました"
  },
  {
    "slug": "saga-official-004-022-2026",
    "title": "大町町 義務教育諸学校の給食費が実質無償になります",
    "organization": "大町町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大町町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2023年5月1日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji003762/index.html",
    "sourceName": "義務教育諸学校の給食費が実質無償になります"
  },
  {
    "slug": "saga-official-004-023-2026",
    "title": "大町町 妊産婦のタクシー利用料金を助成します",
    "organization": "大町町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大町町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年2月26日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji00331/index.html",
    "sourceName": "妊産婦のタクシー利用料金を助成します"
  },
  {
    "slug": "saga-official-004-024-2026",
    "title": "大町町 不妊治療助成事業のご案内",
    "organization": "大町町",
    "maxAmount": "助成額上限20万円",
    "maxAmountNum": 200000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "大町町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年4月1日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji003350/index.html",
    "sourceName": "不妊治療助成事業のご案内"
  },
  {
    "slug": "saga-official-004-025-2026",
    "title": "大町町 子どもの医療費助成",
    "organization": "大町町",
    "maxAmount": "上限1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "大町町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年5月2日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji003601/index.html",
    "sourceName": "子どもの医療費助成"
  },
  {
    "slug": "saga-official-004-026-2026",
    "title": "大町町 児童手当",
    "organization": "大町町",
    "maxAmount": "支給額【手当月額（児童1人あたり）】●0歳～3歳未満第1子・第2子15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大町町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年10月1日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji003364/index.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "saga-official-004-027-2026",
    "title": "大町町 給食費の実質無料化",
    "organization": "大町町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大町町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年5月1日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/list00770.html",
    "sourceName": "給食費の実質無料化"
  },
  {
    "slug": "saga-official-004-028-2026",
    "title": "大町町 出生祝金",
    "organization": "大町町",
    "maxAmount": "支給額（令和2年4月1日以降の出生から）対象者支給額第1子30,000円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大町町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年5月2日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji003367/index.html",
    "sourceName": "出生祝金"
  },
  {
    "slug": "saga-official-004-029-2026",
    "title": "大町町 妊婦健康診査費用を助成します",
    "organization": "大町町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "大町町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月28日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji0031338/index.html",
    "sourceName": "妊婦健康診査費用を助成します"
  },
  {
    "slug": "saga-official-004-030-2026",
    "title": "大町町 産婦健康診査の費用を助成します",
    "organization": "大町町",
    "maxAmount": "上限額：1回につき5,000円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "大町町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年7月2日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji0031125/index.html",
    "sourceName": "産婦健康診査の費用を助成します"
  },
  {
    "slug": "saga-official-004-031-2026",
    "title": "大町町 移住・定住促進に取り組みます！",
    "organization": "大町町",
    "maxAmount": "上限5万円",
    "maxAmountNum": 50000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大町町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2018年7月1日 交付） 妊婦一般健康診査 出産・出生 母子保健・母子健康相談 妊婦タクシー利用料助成 不妊治療助成 乳幼児・未就学児 こんにちは赤ちゃん訪問 乳幼児の健診等について 母子保健・母子健康相談 歯科保健事業 支援・助成・手当 保",
    "officialUrl": "https://www.town.omachi.lg.jp/kosodateijyu/kiji00375/index.html",
    "sourceName": "移住・定住促進に取り組みます！"
  },
  {
    "slug": "saga-official-004-032-2026",
    "title": "大町町 住宅を探す",
    "organization": "大町町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大町町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "住宅を探す / 大町町空き家バンク / 大町町 ヘッダーをスキップ 本文へジャンプ Foreign Language English 中文(简化字) 中文(繁體字) 한국어 Khmer 閲覧補助 行政トップページへ 空き家バンクとは 空き家",
    "officialUrl": "https://www.town.omachi.lg.jp/dynamic/akiya/info/pub/default.aspx?c_id=31",
    "sourceName": "住宅を探す"
  },
  {
    "slug": "saga-official-004-033-2026",
    "title": "江北町 国民年金の給付",
    "organization": "江北町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "江北町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年1月31日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji003561/index.html",
    "sourceName": "国民年金の給付"
  },
  {
    "slug": "saga-official-004-034-2026",
    "title": "江北町 保険料の免除",
    "organization": "江北町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "江北町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年1月31日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji003565/index.html",
    "sourceName": "保険料の免除"
  },
  {
    "slug": "saga-official-004-035-2026",
    "title": "江北町 国民健康保険の給付",
    "organization": "江北町",
    "maxAmount": "限度額】所得要件区分自己負担限度額所得が901万円",
    "maxAmountNum": 9010000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "江北町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年7月1日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji003564/index.html",
    "sourceName": "国民健康保険の給付"
  },
  {
    "slug": "saga-official-004-036-2026",
    "title": "江北町 給付",
    "organization": "江北町",
    "maxAmount": "限度額3割現役並み所得者Ⅲ2,120,000円",
    "maxAmountNum": 2120000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "江北町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年4月5日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji003611/index.html",
    "sourceName": "給付"
  },
  {
    "slug": "saga-official-004-037-2026",
    "title": "江北町 高齢者福祉",
    "organization": "江北町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "江北町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji003638/index.html",
    "sourceName": "高齢者福祉"
  },
  {
    "slug": "saga-official-004-038-2026",
    "title": "江北町 不妊治療費助成",
    "organization": "江北町",
    "maxAmount": "助成額を差し引いた額と10万円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "江北町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月3日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji003748/index.html",
    "sourceName": "不妊治療費助成"
  },
  {
    "slug": "saga-official-004-039-2026",
    "title": "江北町 育英資金貸付",
    "organization": "江北町",
    "maxAmount": "年額）大学（短大含む）及び専修学校生360,000円",
    "maxAmountNum": 360000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "江北町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2021年2月10日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji003589/index.html",
    "sourceName": "育英資金貸付"
  },
  {
    "slug": "saga-official-004-040-2026",
    "title": "江北町 江北町フリースクール等奨学金",
    "organization": "江北町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "江北町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年5月8日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/list00646.html",
    "sourceName": "江北町フリースクール等奨学金"
  },
  {
    "slug": "saga-official-004-041-2026",
    "title": "江北町 江北町英語検定料補助金",
    "organization": "江北町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "江北町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年7月14日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji0033037/index.html",
    "sourceName": "江北町英語検定料補助金"
  },
  {
    "slug": "saga-official-004-042-2026",
    "title": "江北町 家庭用省エネエアコン購入費補助金について",
    "organization": "江北町",
    "maxAmount": "1世帯につき最大10万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "江北町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月7日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji0033033/index.html",
    "sourceName": "家庭用省エネエアコン購入費補助金について"
  },
  {
    "slug": "saga-official-004-043-2026",
    "title": "江北町 太陽光発電設備及び蓄電池の導入に対し費用の一部を補助します",
    "organization": "江北町",
    "maxAmount": "補助額・補助上限補助要件家庭用個人太陽光発電設備7万円",
    "maxAmountNum": 70000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "江北町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月13日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji0032995/index.html",
    "sourceName": "太陽光発電設備及び蓄電池の導入に対し費用の一部を補助します"
  },
  {
    "slug": "saga-official-004-044-2026",
    "title": "江北町 企業誘致・支援・補助金",
    "organization": "江北町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "江北町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年4月26日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/list00149.html",
    "sourceName": "企業誘致・支援・補助金"
  },
  {
    "slug": "saga-official-004-045-2026",
    "title": "江北町 障害福祉サービス",
    "organization": "江北町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "江北町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2021年4月30日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/kiji003744/index.html",
    "sourceName": "障害福祉サービス"
  },
  {
    "slug": "saga-official-004-046-2026",
    "title": "江北町 助成・支援・健診・予防接種",
    "organization": "江北町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "江北町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年6月5日 交付（住民票・戸籍・税証明など） マイナンバーカード・住民基本台帳カード 本人通知制度 各種手続き 税金 個人住民税（町県民税） 法人町民税 固定資産税 軽自動車税 町たばこ税 国民健康保険税 納税について 申告について 税",
    "officialUrl": "https://www.town.kouhoku.saga.jp/list00023.html",
    "sourceName": "助成・支援・健診・予防接種"
  },
  {
    "slug": "saga-official-004-047-2026",
    "title": "白石町 子どもの医療費助成制度(0歳~18歳）",
    "organization": "白石町",
    "maxAmount": "上限500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和5年4月1日 請求額が500円に満たない場合は、その額で1回とみなします 入院 ひと月1医療機関ごとに上限1,000円 ※健康保険が適用されない医療費や食事費等は自己負担 調剤 自己負担なし 受給資格証 あり 給付方法 現物給付(受給資格",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/kodomo/_8828.html",
    "sourceName": "子どもの医療費助成制度(0歳~18歳）"
  },
  {
    "slug": "saga-official-004-048-2026",
    "title": "白石町 物価高対応子育て応援手当について",
    "organization": "白石町",
    "maxAmount": "1人当たり2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "白石町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和7年11月21日 受付は終了しました】 物価高対応子育て応援手当について 令和7年11月21日に閣議決定された「『強い経済』を実現する総合経済対策」について、0歳から18歳年度末までのこども（平成19年4月2日から令和8年3月31日までに生ま",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/kodomo/_8834.html",
    "sourceName": "物価高対応子育て応援手当について"
  },
  {
    "slug": "saga-official-004-049-2026",
    "title": "白石町 ひとり親家庭等医療費助成",
    "organization": "白石町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "白石町ホームページ ｜ひとり親家庭等医療費助成 このページではjavascriptを使用しています。 このページの本文へ移動 ホーム &gt; 住民の皆様へ &gt; 福祉 &gt; こども &gt; ひとり親家庭への支援 &gt;ひとり親",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/kodomo/_8797/_8800.html",
    "sourceName": "ひとり親家庭等医療費助成"
  },
  {
    "slug": "saga-official-004-050-2026",
    "title": "白石町 ひとり親家庭等医療費助成制度が変わります（令和8年11月から）",
    "organization": "白石町",
    "maxAmount": "上限500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年9月1日 申請する必要があったものが、今後は医療機関等の窓口で受給資格証を提示するだけで、支払いが少なくて済む方法（現物給付）に変わります",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/kodomo/_8797/_8800/_8801.html",
    "sourceName": "ひとり親家庭等医療費助成制度が変わります（令和8年11月から）"
  },
  {
    "slug": "saga-official-004-051-2026",
    "title": "白石町 児童扶養手当",
    "organization": "白石町",
    "maxAmount": "限度額表（令和6年11月から適用）扶養親族の数本人扶養義務者など手当の全額を受給できる人手当の一部を受給できる人0人690,000円",
    "maxAmountNum": 690000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "白石町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給される手当です",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/kodomo/_8797/_8798.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "saga-official-004-052-2026",
    "title": "白石町 母子・父子・寡婦福祉資金貸付金",
    "organization": "白石町",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "白石町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "白石町ホームページ ｜母子・父子・寡婦福祉資金貸付金 このページではjavascriptを使用しています。 このページの本文へ移動 ホーム &gt; 住民の皆様へ &gt; 福祉 &gt; こども &gt; ひとり親家庭への支援 &gt;母",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/kodomo/_8797/_8803.html",
    "sourceName": "母子・父子・寡婦福祉資金貸付金"
  },
  {
    "slug": "saga-official-004-053-2026",
    "title": "白石町 妊婦のための支援給付金について",
    "organization": "白石町",
    "maxAmount": "1人当たり5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付 妊婦歯科健診 こんにちは赤ちゃん訪問 白石町母子手帳アプリ【スマイルしろいし】 こども・妊婦さん等の予防接種 R8年度乳幼児相談及び健診 新型コロナウイルス対策「子どもの予防接種と乳幼児健診」 妊婦のための支援給付金に",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/kenkou/boshi_yobou/_7855.html",
    "sourceName": "妊婦のための支援給付金について"
  },
  {
    "slug": "saga-official-004-054-2026",
    "title": "白石町 妊婦歯科健康診査",
    "organization": "白石町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付 妊婦歯科健診 こんにちは赤ちゃん訪問 白石町母子手帳アプリ【スマイルしろいし】 こども・妊婦さん等の予防接種 R8年度乳幼児相談及び健診 新型コロナウイルス対策「子どもの予防接種と乳幼児健診」 妊婦のための支援給付金に",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/kenkou/boshi_yobou/_3847.html",
    "sourceName": "妊婦歯科健康診査"
  },
  {
    "slug": "saga-official-004-055-2026",
    "title": "白石町 母子健康手帳・妊婦健診受診票・産婦健診受診票の交付",
    "organization": "白石町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付 このページではjavascriptを使用しています",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/kenkou/boshi_yobou/_1287.html",
    "sourceName": "母子健康手帳・妊婦健診受診票・産婦健診受診票の交付"
  },
  {
    "slug": "saga-official-004-056-2026",
    "title": "白石町 骨髄等移植ドナー助成について",
    "organization": "白石町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請してください",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/kenkou/_5441.html",
    "sourceName": "骨髄等移植ドナー助成について"
  },
  {
    "slug": "saga-official-004-057-2026",
    "title": "白石町 重度心身障害者の医療費の助成について",
    "organization": "白石町",
    "maxAmount": "助成額保険の対象となる医療費のひと月の自己負担額の総額から500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年8月1日 申請書の様式が変更となりました 新しい申請書の様式はこちら⇒（ Wordファイル ・ PDFファイル ） 重度心身障害者の医療費の助成とは 重度の心身障害を有する方へ、医療費の一部を助成することにより、保健の向上と福祉の増進",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/shougai_fukushi/_1284.html",
    "sourceName": "重度心身障害者の医療費の助成について"
  },
  {
    "slug": "saga-official-004-058-2026",
    "title": "白石町 自立支援医療（精神通院医療）の給付",
    "organization": "白石町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "白石町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請手続きに必要なもの 自立支援医療費（精神通院）支給認定申請書 医師の診断書（3ヶ月有効）（必要に応じ「重度かつ継続に関する意見書（追加用）」を添付） 健康保険証の写し（生活保護世帯の場合、生活保護受給証明書） 世帯の市町",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/shougai_fukushi/_1280.html",
    "sourceName": "自立支援医療（精神通院医療）の給付"
  },
  {
    "slug": "saga-official-004-059-2026",
    "title": "白石町 補装具・日常生活用具給付事業",
    "organization": "白石町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "白石町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付 1",
    "officialUrl": "https://www.town.shiroishi.lg.jp/jyuumin/fukushi/shougai_fukushi/_1282.html",
    "sourceName": "補装具・日常生活用具給付事業"
  },
  {
    "slug": "saga-official-004-060-2026",
    "title": "白石町 結婚新生活支援事業",
    "organization": "白石町",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "白石町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年1月1日 提出し、受理された夫婦のいる世帯 （2）夫婦ともに婚姻日における年齢が 39歳以下 であること （3）住居が白石町内にあり、かつ、住民登録がなされていること （4）生活保護法の規定による住宅扶助、他の公的制度による家賃補助等",
    "officialUrl": "https://www.town.shiroishi.lg.jp/chousei_machi/iju_teiju/_4166.html",
    "sourceName": "結婚新生活支援事業"
  },
  {
    "slug": "saga-official-004-061-2026",
    "title": "白石町 白石町東京圏在住者移住支援金",
    "organization": "白石町",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "白石町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.shiroishi.lg.jp/chousei_machi/iju_teiju/_3544.html",
    "sourceName": "白石町東京圏在住者移住支援金"
  },
  {
    "slug": "saga-official-004-062-2026",
    "title": "白石町 若者・子育て世帯の住宅取得を応援します！",
    "organization": "白石町",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "childcare",
    "relatedCategories": [
      "housing",
      "living"
    ],
    "eligibility": "白石町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和7年4月1日 交付します",
    "officialUrl": "https://www.town.shiroishi.lg.jp/chousei_machi/iju_teiju/_5127.html",
    "sourceName": "若者・子育て世帯の住宅取得を応援します！"
  },
  {
    "slug": "saga-official-004-063-2026",
    "title": "白石町 白石町未来につなぐさが移住支援事業",
    "organization": "白石町",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "白石町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和7年4月1日 交付しています",
    "officialUrl": "https://www.town.shiroishi.lg.jp/chousei_machi/iju_teiju/_8288.html",
    "sourceName": "白石町未来につなぐさが移住支援事業"
  },
  {
    "slug": "saga-official-004-064-2026",
    "title": "太良町 高齢者世帯のエアコン購入費を補助します",
    "organization": "太良町",
    "maxAmount": "補助金額補助対象経費の実出額上限額75，000円",
    "maxAmountNum": 75000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "太良町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月29日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1030/_7693.html",
    "sourceName": "高齢者世帯のエアコン購入費を補助します"
  },
  {
    "slug": "saga-official-004-065-2026",
    "title": "太良町 太良町誕生祝金",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "太良町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年10月14日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kurashi/_1647/_2158.html",
    "sourceName": "太良町誕生祝金"
  },
  {
    "slug": "saga-official-004-066-2026",
    "title": "太良町 災害に伴う町税の減免等のご案内",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "太良町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年2月5日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kurashi/_1020/_3938.html",
    "sourceName": "災害に伴う町税の減免等のご案内"
  },
  {
    "slug": "saga-official-004-067-2026",
    "title": "太良町 太良町移住定住促進事業補助金",
    "organization": "太良町",
    "maxAmount": "限度額5万円",
    "maxAmountNum": 50000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "太良町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年10月29日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kurashi/_3629/_3480.html",
    "sourceName": "太良町移住定住促進事業補助金"
  },
  {
    "slug": "saga-official-004-068-2026",
    "title": "太良町 太良町移住支援事業補助金",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "太良町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年3月19日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kurashi/_3629/_3660.html",
    "sourceName": "太良町移住支援事業補助金"
  },
  {
    "slug": "saga-official-004-069-2026",
    "title": "太良町 太良町さが暮らしスタート支援事業補助金",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "太良町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年5月13日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kurashi/_3629/_4721.html",
    "sourceName": "太良町さが暮らしスタート支援事業補助金"
  },
  {
    "slug": "saga-official-004-070-2026",
    "title": "太良町 太良町未来につなぐさが移住支援事業補助金",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "太良町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年1月8日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kurashi/_3629/_7054.html",
    "sourceName": "太良町未来につなぐさが移住支援事業補助金"
  },
  {
    "slug": "saga-official-004-071-2026",
    "title": "太良町 太良町民間賃貸住宅等建設促進事業補助金",
    "organization": "太良町",
    "maxAmount": "補助金額30平方メートル以上50平方メートル未満150万円",
    "maxAmountNum": 1500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "太良町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年1月29日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kurashi/_1649/_4179.html",
    "sourceName": "太良町民間賃貸住宅等建設促進事業補助金"
  },
  {
    "slug": "saga-official-004-072-2026",
    "title": "太良町 太良町帯状疱疹定期予防接種",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "太良町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月2日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1662/_6857.html",
    "sourceName": "太良町帯状疱疹定期予防接種"
  },
  {
    "slug": "saga-official-004-073-2026",
    "title": "太良町 骨髄等移植ドナー支援助成事業",
    "organization": "太良町",
    "maxAmount": "助成額骨髄等提供のための通院又は入院等について、1日当たり2万円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "太良町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年1月17日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1662/_4591.html",
    "sourceName": "骨髄等移植ドナー支援助成事業"
  },
  {
    "slug": "saga-official-004-074-2026",
    "title": "太良町 医療用ウィッグ・乳房補正具購入費助成事業(アピアランスケア支援事業)",
    "organization": "太良町",
    "maxAmount": "助成額（1）医療用ウィッグ、（2）乳房補正具、それぞれに対して、購入額（税込）の合計額の2分の1（1円",
    "maxAmountNum": 1,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "太良町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年1月17日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1662/_4590.html",
    "sourceName": "医療用ウィッグ・乳房補正具購入費助成事業(アピアランスケア支援事業)"
  },
  {
    "slug": "saga-official-004-075-2026",
    "title": "太良町 母子保健",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "太良町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1662/_1664.html",
    "sourceName": "母子保健"
  },
  {
    "slug": "saga-official-004-076-2026",
    "title": "太良町 国民年金の給付",
    "organization": "太良町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "太良町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2015年3月27日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1032/_1921.html",
    "sourceName": "国民年金の給付"
  },
  {
    "slug": "saga-official-004-077-2026",
    "title": "太良町 お友達との居場所・通いの場づくりを支援します",
    "organization": "太良町",
    "maxAmount": "3万円を限度",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "太良町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年3月21日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1030/_6762.html",
    "sourceName": "お友達との居場所・通いの場づくりを支援します"
  },
  {
    "slug": "saga-official-004-078-2026",
    "title": "太良町 予防接種償還払い制度",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "太良町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1662/_1982.html",
    "sourceName": "予防接種償還払い制度"
  },
  {
    "slug": "saga-official-004-079-2026",
    "title": "太良町 検診料の無料化について",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "太良町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月15日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kenkou/_1662/_4219.html",
    "sourceName": "検診料の無料化について"
  },
  {
    "slug": "saga-official-004-080-2026",
    "title": "太良町 太良町結婚祝金",
    "organization": "太良町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "太良町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年10月14日 交付 戸籍・届出・印鑑登録 口座振替のWeb申込 教育委員会 子ども・子育て 税金 移住・定住 結婚 環境・衛生 動物・ペット 水道 し尿・浄化槽・漁業集落排水 住宅 防災 消費生活相談 くらしのカレンダー その他各種相談 ",
    "officialUrl": "https://www.town.tara.lg.jp/kurashi/_2155/_2156.html",
    "sourceName": "太良町結婚祝金"
  }
];
