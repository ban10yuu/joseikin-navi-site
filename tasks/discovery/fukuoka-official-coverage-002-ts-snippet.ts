const fukuokaOfficial002Grants: Array<{
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
    "slug": "fukuoka-official-002-001-2026",
    "title": "飯塚市 令和8年飯塚市生活応援クーポン券",
    "organization": "飯塚市",
    "maxAmount": "1世帯あたり10,000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "飯塚市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月9日 期限は8月31日までですので、期限内でのご利用をおねがいいたします",
    "officialUrl": "https://www.city.iizuka.lg.jp/soshiki/70/14632.html",
    "sourceName": "令和8年飯塚市生活応援クーポン券"
  },
  {
    "slug": "fukuoka-official-002-002-2026",
    "title": "飯塚市 安全・安心まちづくり団体支援事業補助金",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月1日 募集について - 飯塚市（防災安全課） ページの先頭です",
    "officialUrl": "https://www.city.iizuka.lg.jp/soshiki/9/19292.html",
    "sourceName": "安全・安心まちづくり団体支援事業補助金"
  },
  {
    "slug": "fukuoka-official-002-003-2026",
    "title": "飯塚市 子ども医療費支給制度",
    "organization": "飯塚市",
    "maxAmount": "上限）1,200円",
    "maxAmountNum": 1200,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "飯塚市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月1日 支給制度が変わりました！ 通院医療費の助成対象を「小学校第6学年修了前まで」から「中学校第3学年修了前まで」に拡大しました",
    "officialUrl": "https://www.city.iizuka.lg.jp/site/kosodate/1971.html",
    "sourceName": "子ども医療費支給制度"
  },
  {
    "slug": "fukuoka-official-002-004-2026",
    "title": "飯塚市 妊婦のための支援給付",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "飯塚市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年4月1日 支給します",
    "officialUrl": "https://www.city.iizuka.lg.jp/site/kosodate/1924.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "fukuoka-official-002-005-2026",
    "title": "飯塚市 新規創業支援資金融資制度",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年12月1日 提出書類 創業計画書(協会所定様式) 市町村長の発行する滞納なし証明書(原本又は写し) 前2号に掲げるもののほか、指定金融機関又は協会が必要とする書類 申請受付窓口（お問合せ先） 福岡銀行、西日本シティ銀行、飯塚信用金庫、福",
    "officialUrl": "https://www.city.iizuka.lg.jp/soshiki/18/2408.html",
    "sourceName": "新規創業支援資金融資制度"
  },
  {
    "slug": "fukuoka-official-002-006-2026",
    "title": "飯塚市 ブロック塀等撤去補助金制度",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "飯塚市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年12月1日 申請・手続きナビ （条件でさがす） くらしの様々な場面で必要となる手続きをお探しの方はこちら 申請・手続きナビ （質問回答してさがす） くらしの様々な場面でどのような手続きが必要かわからない方はこちら ゴミ出し・分別 税金 ",
    "officialUrl": "https://www.city.iizuka.lg.jp/life/1/7/27/",
    "sourceName": "ブロック塀等撤去補助金制度"
  },
  {
    "slug": "fukuoka-official-002-007-2026",
    "title": "飯塚市 物価高対応子育て応援手当",
    "organization": "飯塚市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請について 2025年12月1日更新 特別児童扶養手当 2025年12月1日更新 児童扶養手当 2025年12月1日更新 児童手当（令和6年9月分までの制度） 2025年12月1日更新 出産育児一時金 2025年12月1日",
    "officialUrl": "https://www.city.iizuka.lg.jp/site/kosodate/list81-273.html",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "fukuoka-official-002-008-2026",
    "title": "飯塚市 妊産婦・子ども関連の手当・助成",
    "organization": "飯塚市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 支給額のお知らせ 2026年3月2日更新 「妊婦のための支援給付」と「妊婦等包括相談支援事業」について（令和7年4月1日から） 2025年12月1日更新 令和6年10月の児童手当制度改正について 2025年12月1日更新 児",
    "officialUrl": "https://www.city.iizuka.lg.jp/site/kosodate/list83-282.html",
    "sourceName": "妊産婦・子ども関連の手当・助成"
  },
  {
    "slug": "fukuoka-official-002-009-2026",
    "title": "飯塚市 戸建て中古住宅取得補助金制度",
    "organization": "飯塚市",
    "maxAmount": "1人につき100,000円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付します",
    "officialUrl": "https://www.city.iizuka.lg.jp/site/ijyuiizuka/1147.html",
    "sourceName": "戸建て中古住宅取得補助金制度"
  },
  {
    "slug": "fukuoka-official-002-010-2026",
    "title": "飯塚市 木造戸建て住宅性能向上改修補助金制度",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年7月2日 申請・手続案内 - 飯塚市（建築課） ページの先頭です",
    "officialUrl": "https://www.city.iizuka.lg.jp/site/shinsei/1148.html",
    "sourceName": "木造戸建て住宅性能向上改修補助金制度"
  },
  {
    "slug": "fukuoka-official-002-011-2026",
    "title": "飯塚市 就学援助制度",
    "organization": "飯塚市",
    "maxAmount": "1人・未就学児1人の場合)認定基準額：3,726,375円",
    "maxAmountNum": 3726375,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月30日 申請について（お知らせ） 飯塚市では、 「経済的理由により、学用品や給食費などの支払いが困難であると認められ、 飯塚市立小・中学校、若しくは、飯塚市に居住し国・県立の小・中学校等(中等教育学校前期課程、義務教育学校を含む）に",
    "officialUrl": "https://www.city.iizuka.lg.jp/site/kosodate/1615.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "fukuoka-official-002-012-2026",
    "title": "飯塚市 住まい・上下水道関連の補助助成",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "飯塚市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年12月1日 申請・手続きナビ （条件でさがす） くらしの様々な場面で必要となる手続きをお探しの方はこちら 申請・手続きナビ （質問回答してさがす） くらしの様々な場面でどのような手続きが必要かわからない方はこちら ゴミ出し・分別 税金 ",
    "officialUrl": "https://www.city.iizuka.lg.jp/life/1/7/27/",
    "sourceName": "住まい・上下水道関連の補助助成"
  },
  {
    "slug": "fukuoka-official-002-013-2026",
    "title": "飯塚市 中小企業融資・利子補給・信用保証料補助",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://www.city.iizuka.lg.jp/uploaded/attachment/10942.pdf",
    "sourceName": "中小企業融資・利子補給・信用保証料補助"
  },
  {
    "slug": "fukuoka-official-002-014-2026",
    "title": "飯塚市 障がい者日常生活用具給付",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "申請・受付は公式PDF記載に従う",
    "officialUrl": "https://www.city.iizuka.lg.jp/uploaded/attachment/4978.pdf",
    "sourceName": "障がい者日常生活用具給付"
  },
  {
    "slug": "fukuoka-official-002-015-2026",
    "title": "飯塚市 飯塚市子育てガイドブック",
    "organization": "飯塚市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "飯塚市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年12月1日 飯塚市子育てガイドブック - 子育て応援なび - 飯塚市（こども若者支援課） ページの先頭です。 メニューを飛ばして本文へ 当サイトはJavaScriptを使用したコンテンツや機能を提供しています。ご利用の際はJavaScriptを有効にし",
    "officialUrl": "https://www.city.iizuka.lg.jp/site/kosodate/1187.html",
    "sourceName": "飯塚市子育てガイドブック"
  },
  {
    "slug": "fukuoka-official-002-016-2026",
    "title": "田川市 難聴者補聴器購入助成",
    "organization": "田川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "田川市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年10月16日 申請書ダウンロード くらし・生活・相談 相談 住民基本台帳 公的個人認証 減免・負担軽減制度 マイナンバー制度・マイナンバーカード 消費生活 公共交通 税金 税制度 納期限 固定資産税 各種市税 納税 税証明 公売会 インタ",
    "officialUrl": "https://www.joho.tagawa.fukuoka.jp/kiji0035115/index.html",
    "sourceName": "難聴者補聴器購入助成"
  },
  {
    "slug": "fukuoka-official-002-017-2026",
    "title": "田川市 補助制度",
    "organization": "田川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "田川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月7日 申請書ダウンロード くらし・生活・相談 相談 住民基本台帳 公的個人認証 減免・負担軽減制度 マイナンバー制度・マイナンバーカード 消費生活 公共交通 税金 税制度 納期限 固定資産税 各種市税 納税 税証明 公売会 インタ",
    "officialUrl": "https://www.joho.tagawa.fukuoka.jp/list00545.html",
    "sourceName": "補助制度"
  },
  {
    "slug": "fukuoka-official-002-018-2026",
    "title": "田川市 補助・助成など",
    "organization": "田川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "田川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 申請書ダウンロード くらし・生活・相談 相談 住民基本台帳 公的個人認証 減免・負担軽減制度 マイナンバー制度・マイナンバーカード 消費生活 公共交通 税金 税制度 納期限 固定資産税 各種市税 納税 税証明 公売会 インタ",
    "officialUrl": "https://www.joho.tagawa.fukuoka.jp/list00554.html",
    "sourceName": "補助・助成など"
  },
  {
    "slug": "fukuoka-official-002-019-2026",
    "title": "柳川市 柳川藩札",
    "organization": "柳川市",
    "maxAmount": "1人あたり100,000円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "柳川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 受付中 - 柳川市 --> 本文へスキップします",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/sangyo/shokoshinko/12948.html",
    "sourceName": "柳川藩札"
  },
  {
    "slug": "fukuoka-official-002-020-2026",
    "title": "柳川市 有明圏域定住自立圏就職支援情報発信連携事業",
    "organization": "柳川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "柳川市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年7月7日 申請書・ダウンロード よくある質問 市へのお問い合わせ 利用者別に探す 出産・子育て 高齢者・介護 障がい者 事業者 目的別に探す 小学校・中学校・高校 ごみ・資源物 市営住宅 公共交通 マイナンバー 引っ越し・住まい 予防",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/sangyo/shokoshinko/8487.html",
    "sourceName": "有明圏域定住自立圏就職支援情報発信連携事業"
  },
  {
    "slug": "fukuoka-official-002-021-2026",
    "title": "柳川市 地方就職支援金",
    "organization": "柳川市",
    "maxAmount": "最大22,000円",
    "maxAmountNum": 22000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "柳川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月16日 申請書・ダウンロード よくある質問 市へのお問い合わせ 利用者別に探す 出産・子育て 高齢者・介護 障がい者 事業者 目的別に探す 小学校・中学校・高校 ごみ・資源物 市営住宅 公共交通 マイナンバー 引っ越し・住まい 予防",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kurashi/ijuteiju/shien/13233.html",
    "sourceName": "地方就職支援金"
  },
  {
    "slug": "fukuoka-official-002-022-2026",
    "title": "柳川市 雇用・定住促進奨学金返済支援事業補助金",
    "organization": "柳川市",
    "maxAmount": "補助金額交付申請を行った前年度において補助対象者が返済した奨学金の額に補助率を乗じて得た額（１，０００円",
    "maxAmountNum": 1000,
    "category": "housing",
    "relatedCategories": [
      "education",
      "employment",
      "living"
    ],
    "eligibility": "柳川市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請書・ダウンロード よくある質問 市へのお問い合わせ 利用者別に探す 出産・子育て 高齢者・介護 障がい者 事業者 目的別に探す 小学校・中学校・高校 ごみ・資源物 市営住宅 公共交通 マイナンバー 引っ越し・住まい 予防",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kurashi/ijuteiju/shien/4224.html",
    "sourceName": "雇用・定住促進奨学金返済支援事業補助金"
  },
  {
    "slug": "fukuoka-official-002-023-2026",
    "title": "柳川市 柳川市移住支援金",
    "organization": "柳川市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "柳川市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請書・ダウンロード よくある質問 市へのお問い合わせ 利用者別に探す 出産・子育て 高齢者・介護 障がい者 事業者 目的別に探す 小学校・中学校・高校 ごみ・資源物 市営住宅 公共交通 マイナンバー 引っ越し・住まい 予防",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kurashi/ijuteiju/shien/_8314.html",
    "sourceName": "柳川市移住支援金"
  },
  {
    "slug": "fukuoka-official-002-024-2026",
    "title": "柳川市 令和8年度就学援助制度",
    "organization": "柳川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "柳川市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年2月2日 申請書・ダウンロード よくある質問 市へのお問い合わせ 利用者別に探す 出産・子育て 高齢者・介護 障がい者 事業者 目的別に探す 小学校・中学校・高校 ごみ・資源物 市営住宅 公共交通 マイナンバー 引っ越し・住まい 予防",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kosodate/gakkou/6578.html",
    "sourceName": "令和8年度就学援助制度"
  },
  {
    "slug": "fukuoka-official-002-025-2026",
    "title": "柳川市 小学校学校給食費無償化と給食費相当額補助金",
    "organization": "柳川市",
    "maxAmount": "補助額補助対象者補助額（月額）柳川市立小学校に在籍する児童弁当を持参（給食一切食べない）3,900円",
    "maxAmountNum": 3900,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "柳川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年12月25日 交付 - 柳川市 --> 本文へスキップします",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kosodate/gakkou/kyushoku/11692.html",
    "sourceName": "小学校学校給食費無償化と給食費相当額補助金"
  },
  {
    "slug": "fukuoka-official-002-026-2026",
    "title": "柳川市 被災世帯への支援制度",
    "organization": "柳川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "柳川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月10日 申請書・ダウンロード よくある質問 市へのお問い合わせ 利用者別に探す 出産・子育て 高齢者・介護 障がい者 事業者 目的別に探す 小学校・中学校・高校 ごみ・資源物 市営住宅 公共交通 マイナンバー 引っ越し・住まい 予防",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/bosai/bosai/shien/13480.html",
    "sourceName": "被災世帯への支援制度"
  },
  {
    "slug": "fukuoka-official-002-027-2026",
    "title": "柳川市 地域少子化対策重点推進交付金",
    "organization": "柳川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "柳川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月11日 交付金について - 柳川市 --> 本文へスキップします",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kurashi/ijuteiju/deaiouen/10562.html",
    "sourceName": "地域少子化対策重点推進交付金"
  },
  {
    "slug": "fukuoka-official-002-028-2026",
    "title": "柳川市 医療費助成",
    "organization": "柳川市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "柳川市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書・ダウンロード よくある質問 市へのお問い合わせ 利用者別に探す 出産・子育て 高齢者・介護 障がい者 事業者 目的別に探す 小学校・中学校・高校 ごみ・資源物 市営住宅 公共交通 マイナンバー 引っ越し・住まい 予防",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kenko/iryonenkin/josei/",
    "sourceName": "医療費助成"
  },
  {
    "slug": "fukuoka-official-002-029-2026",
    "title": "柳川市 柳川市木造戸建て住宅性能向上改修等補助金",
    "organization": "柳川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "柳川市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請書・ダウンロード よくある質問 市へのお問い合わせ 利用者別に探す 出産・子育て 高齢者・介護 障がい者 事業者 目的別に探す 小学校・中学校・高校 ごみ・資源物 市営住宅 公共交通 マイナンバー 引っ越し・住まい 予防",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kurashi/jutaku/seinoukoujyo/",
    "sourceName": "柳川市木造戸建て住宅性能向上改修等補助金"
  },
  {
    "slug": "fukuoka-official-002-030-2026",
    "title": "柳川市 婚活イベント参加結婚祝い品",
    "organization": "柳川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "柳川市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年4月1日 交付します！ - 柳川市 --> 本文へスキップします",
    "officialUrl": "https://www.city.yanagawa.fukuoka.jp/kurashi/ijuteiju/deaiouen/7182.html",
    "sourceName": "婚活イベント参加結婚祝い品"
  },
  {
    "slug": "fukuoka-official-002-031-2026",
    "title": "八女市 コンポスト・EMバケツ補助金、電気式生ごみ処理機奨励金",
    "organization": "八女市",
    "maxAmount": "4,000円交付",
    "maxAmountNum": 4000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "八女市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付しています",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/1/1457320356390.html",
    "sourceName": "コンポスト・EMバケツ補助金、電気式生ごみ処理機奨励金"
  },
  {
    "slug": "fukuoka-official-002-032-2026",
    "title": "八女市 八女市路線バス通学定期券補助事業",
    "organization": "八女市",
    "maxAmount": "月額負担額が14,000円",
    "maxAmountNum": 14000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "八女市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請に必要な書類 ・交付申請書（様式第1号） ・請求書（様式第3号） ・有効期間が満了した通学定期券の写し ※nimocaは、表と裏の両面のコピーが必要です",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/5/1461285241846.html",
    "sourceName": "八女市路線バス通学定期券補助事業"
  },
  {
    "slug": "fukuoka-official-002-033-2026",
    "title": "八女市 新生児聴覚検査",
    "organization": "八女市",
    "maxAmount": "上限額助成上限額検査の種類助成上限額AABR（自動聴性脳幹反応検査）3,000円",
    "maxAmountNum": 3000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "八女市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付する時に、新生児聴覚検査の費用の一部を助成するため、「八女市新生児聴覚検査補助券」をお渡しします",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kosodate/6/10160.html",
    "sourceName": "新生児聴覚検査"
  },
  {
    "slug": "fukuoka-official-002-034-2026",
    "title": "八女市 新生児聴覚検査費用の払い戻し",
    "organization": "八女市",
    "maxAmount": "上限3,000円",
    "maxAmountNum": 3000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "八女市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給内容 新生児聴覚検査：自動聴性脳幹反応検査（AABR）・聴性脳幹反応検査（ABR）上限3,000円、耳音響放射検査（OAE）上限1,500円のいずれかの検査費用を支給します",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kosodate/6/10161.html",
    "sourceName": "新生児聴覚検査費用の払い戻し"
  },
  {
    "slug": "fukuoka-official-002-035-2026",
    "title": "八女市 妊婦健康診査受診券",
    "organization": "八女市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "八女市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kosodate/6/1481673604438.html",
    "sourceName": "妊婦健康診査受診券"
  },
  {
    "slug": "fukuoka-official-002-036-2026",
    "title": "八女市 マイナンバーカード医療費助成医療証利用",
    "organization": "八女市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "八女市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "受付事務の負担が軽減されます",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/3/13129.html",
    "sourceName": "マイナンバーカード医療費助成医療証利用"
  },
  {
    "slug": "fukuoka-official-002-037-2026",
    "title": "八女市 手当・助成",
    "organization": "八女市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "八女市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "手当・助成／八女市ホームページ スマートフォン版を表示 本文へ Foreign Language 文字サイズ 背景色変更 目的・場面別で探す 妊娠・子育て 入園・入学 結婚・離婚 就職 福祉・介護 住む・引っ越し ごみ おくやみ 施設を探す",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kosodate/3/3/index.html",
    "sourceName": "手当・助成"
  },
  {
    "slug": "fukuoka-official-002-038-2026",
    "title": "八女市 就学援助",
    "organization": "八女市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "八女市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "支給事業について 就学援助制度のお知らせ 学校・教育 目的・場面別で探す 妊娠・子育て 入園・入学 結婚・離婚 就職 福祉・介護 住む・引っ越し ごみ おくやみ HOME へ ページTOPへ 八女市役所 Yame City ",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kosodate/1/1/index.html",
    "sourceName": "就学援助"
  },
  {
    "slug": "fukuoka-official-002-039-2026",
    "title": "八女市 八女市地方創生移住支援金",
    "organization": "八女市",
    "maxAmount": "支給額≫・単身の世帯：60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "八女市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/15/7893.html",
    "sourceName": "八女市地方創生移住支援金"
  },
  {
    "slug": "fukuoka-official-002-040-2026",
    "title": "八女市 浄化槽設置補助制度",
    "organization": "八女市",
    "maxAmount": "限度額人槽区分新設転換（撤去しない場合）転換（撤去する場合）5人槽498,000円",
    "maxAmountNum": 498000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "八女市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/10/1457320356870.html",
    "sourceName": "浄化槽設置補助制度"
  },
  {
    "slug": "fukuoka-official-002-041-2026",
    "title": "八女市 資源回収奨励金",
    "organization": "八女市",
    "maxAmount": "2円を交付",
    "maxAmountNum": 2,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "八女市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付について／八女市ホームページ スマートフォン版を表示 本文へ Foreign Language 文字サイズ 背景色変更 目的・場面別で探す 妊娠・子育て 入園・入学 結婚・離婚 就職 福祉・介護 住む・引っ越し ごみ お",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/1/1457320356428.html",
    "sourceName": "資源回収奨励金"
  },
  {
    "slug": "fukuoka-official-002-042-2026",
    "title": "八女市 みずから行動するまちづくり協議会等運営交付金",
    "organization": "八女市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "八女市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付金の概要／八女市ホームページ スマートフォン版を表示 本文へ Foreign Language 文字サイズ 背景色変更 目的・場面別で探す 妊娠・子育て 入園・入学 結婚・離婚 就職 福祉・介護 住む・引っ越し ごみ お",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/6/1462927705636.html",
    "sourceName": "みずから行動するまちづくり協議会等運営交付金"
  },
  {
    "slug": "fukuoka-official-002-043-2026",
    "title": "八女市 八女市地域づくり提案事業",
    "organization": "八女市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "八女市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "募集します／八女市ホームページ スマートフォン版を表示 本文へ Foreign Language 文字サイズ 背景色変更 目的・場面別で探す 妊娠・子育て 入園・入学 結婚・離婚 就職 福祉・介護 住む・引っ越し ごみ おく",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/6/1462927838254.html",
    "sourceName": "八女市地域づくり提案事業"
  },
  {
    "slug": "fukuoka-official-002-044-2026",
    "title": "八女市 八女市空き家改修費等補助金制度",
    "organization": "八女市",
    "maxAmount": "上限10万円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "八女市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付額 〇家財撤去 ・費用の10分の10で上限10万円（千円未満切り捨て） 〇改修工事 ・費用の2分の1で上限50万円（千円未満切り捨て） 対象業者 ・八女市内の事業者へ依頼することが条件となります",
    "officialUrl": "https://www.city.yame.fukuoka.jp/soshiki/3/2/3/1/1454652358067.html",
    "sourceName": "八女市空き家改修費等補助金制度"
  },
  {
    "slug": "fukuoka-official-002-045-2026",
    "title": "八女市 いきいき行政区運営交付金",
    "organization": "八女市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "八女市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年5月29日 交付金について／八女市ホームページ スマートフォン版を表示 本文へ Foreign Language 文字サイズ 背景色変更 目的・場面別で探す 妊娠・子育て 入園・入学 結婚・離婚 就職 福祉・介護 住む・引っ越し ごみ ",
    "officialUrl": "https://www.city.yame.fukuoka.jp/kurashi/6/1462927562328.html",
    "sourceName": "いきいき行政区運営交付金"
  },
  {
    "slug": "fukuoka-official-002-046-2026",
    "title": "筑後市 国民健康保険の給付",
    "organization": "筑後市",
    "maxAmount": "限度額70歳未満の人（月額）70歳未満の人の高額療養費の自己負担限度額所得要件（注1）自己負担限度額多数該当（注3）上位所得者901万円",
    "maxAmountNum": 9010000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "筑後市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月20日 申請を行うことで自己負担限度額を超えた分の医療費の払い戻しが受けられます",
    "officialUrl": "https://www.city.chikugo.lg.jp/kurashi/_6036/_6038/",
    "sourceName": "国民健康保険の給付"
  },
  {
    "slug": "fukuoka-official-002-047-2026",
    "title": "筑後市 筑後市奨学会",
    "organization": "筑後市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "筑後市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2025年02月03日 申請案内） 学校施設の耐震化 小学校再編 恋のくに ひと想うまち筑後のスマホ宣言 よく利用される情報 もしものときには 防災ポータルサイト 避難所一覧表 コミュニティ無線 暮らしの場面 オープンデータ 筑後市奨学会 更新日 ",
    "officialUrl": "https://www.city.chikugo.lg.jp/kosodate/_1695/_1698/",
    "sourceName": "筑後市奨学会"
  },
  {
    "slug": "fukuoka-official-002-048-2026",
    "title": "筑後市 筑後市定住促進事業メニュー",
    "organization": "筑後市",
    "maxAmount": "最大45万円",
    "maxAmountNum": 450000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "筑後市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年05月13日 支給します",
    "officialUrl": "https://www.city.chikugo.lg.jp/iju_teiju/_11823.html",
    "sourceName": "筑後市定住促進事業メニュー"
  },
  {
    "slug": "fukuoka-official-002-049-2026",
    "title": "筑後市 省エネ家電購入補助",
    "organization": "筑後市",
    "maxAmount": "補助金額補助対象家電・補助金額エアコン1/2（注）1,000円",
    "maxAmountNum": 1000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "筑後市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年07月13日 申請状況について 筑後市省エネ家電購入補助金 目次を閉じる 【速報】省エネ家電購入補助金の申請状況について 令和8年7月13日 時点の速報値 補助予算額 申請額 （申請率） 予算残額 84，300，000円 59，870，0",
    "officialUrl": "https://www.city.chikugo.lg.jp/kurashi/_6061/_30658/_31770.html",
    "sourceName": "省エネ家電購入補助"
  },
  {
    "slug": "fukuoka-official-002-050-2026",
    "title": "筑後市 年金生活者支援給付金制度",
    "organization": "筑後市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "筑後市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年09月08日 支給されるものです",
    "officialUrl": "https://www.city.chikugo.lg.jp/kurashi/_6082/_2184/",
    "sourceName": "年金生活者支援給付金制度"
  },
  {
    "slug": "fukuoka-official-002-051-2026",
    "title": "筑後市 国民年金の給付",
    "organization": "筑後市",
    "maxAmount": "月額70,608円",
    "maxAmountNum": 70608,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "筑後市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月03日 支給されます",
    "officialUrl": "https://www.city.chikugo.lg.jp/kurashi/_6082/_2156/",
    "sourceName": "国民年金の給付"
  },
  {
    "slug": "fukuoka-official-002-052-2026",
    "title": "筑後市 筑後市若者定住促進奨学金返還支援事業",
    "organization": "筑後市",
    "maxAmount": "20万円を限度",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "education",
      "employment",
      "living"
    ],
    "eligibility": "筑後市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年04月02日 支給対象となる奨学金等 給付額等 申請方法 申請期間 申請から支給までの流れ 申込先 すべて表示する 若者の筑後市への移住定住及び転出抑制並びに地元就職の促進を図ることを目的に、奨学金を返還している市内在住の若者に対し、奨励",
    "officialUrl": "https://www.city.chikugo.lg.jp/iju_teiju/_11823/_28959.html",
    "sourceName": "筑後市若者定住促進奨学金返還支援事業"
  },
  {
    "slug": "fukuoka-official-002-053-2026",
    "title": "筑後市 筑後市地方創生移住支援金",
    "organization": "筑後市",
    "maxAmount": "支給額単身世帯：60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "筑後市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年04月06日 支給要件 支給額 申請方法 申請期間 申請から給付までの流れ（例） 注意事項 関連サイト（外部ページ） すべて表示する 筑後市では、地方への移住・定住の促進及び中小企業等における人手不足解消のため、福岡県と連携してデジタル田",
    "officialUrl": "https://www.city.chikugo.lg.jp/iju_teiju/_30852/_26992.html",
    "sourceName": "筑後市地方創生移住支援金"
  },
  {
    "slug": "fukuoka-official-002-054-2026",
    "title": "筑後市 筑後市マイホーム取得支援事業",
    "organization": "筑後市",
    "maxAmount": "上限15万円",
    "maxAmountNum": 150000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "筑後市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年06月10日 申請方法 申請期間 支給申請（請求）方法 変更申請 支給中止届 認定申請から給付までの流れ 申込先 すべて表示する 筑後市への転入及び定住を促進するため、市内で新たにマイホームを取得した人への手助けとして、取得支援奨励金を支",
    "officialUrl": "https://www.city.chikugo.lg.jp/iju_teiju/_11823/_11830.html",
    "sourceName": "筑後市マイホーム取得支援事業"
  },
  {
    "slug": "fukuoka-official-002-055-2026",
    "title": "筑後市 筑後市結婚新生活家賃支援事業",
    "organization": "筑後市",
    "maxAmount": "月額1万円",
    "maxAmountNum": 10000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "筑後市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年06月09日 申請方法 認定申請期間 支給申請方法 変更申請 支給中止届 認定申請から給付までの流れ 申込先 すべて表示する 若年層の筑後市への定住を促進し、結婚に伴う経済的負担を軽減することで、安心して子どもを産み育てられる地域社会形成",
    "officialUrl": "https://www.city.chikugo.lg.jp/iju_teiju/_11823/_11824.html",
    "sourceName": "筑後市結婚新生活家賃支援事業"
  },
  {
    "slug": "fukuoka-official-002-056-2026",
    "title": "筑後市 筑後市多子出産祝い金事業",
    "organization": "筑後市",
    "maxAmount": "1人に付き5万円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "筑後市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年02月19日 申請方法 申請期間 支給申請方法 認定申請から給付までの流れ 申込先 すべて表示する 筑後市内に住む子育て世帯を応援するため、一定の基準を満たした第3子以降の子どもを養育している人に祝い金を支給します",
    "officialUrl": "https://www.city.chikugo.lg.jp/iju_teiju/_11823/_11829.html",
    "sourceName": "筑後市多子出産祝い金事業"
  },
  {
    "slug": "fukuoka-official-002-057-2026",
    "title": "筑後市 各種補助金",
    "organization": "筑後市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "筑後市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年12月07日 受付しています",
    "officialUrl": "https://www.city.chikugo.lg.jp/kurashi/_2274/_19625/",
    "sourceName": "各種補助金"
  },
  {
    "slug": "fukuoka-official-002-058-2026",
    "title": "筑後市 就学援助制度",
    "organization": "筑後市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "筑後市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2025年11月25日 申請案内）|筑後市公式ホームページ このページではjavascriptを使用しています",
    "officialUrl": "https://www.city.chikugo.lg.jp/kosodate/_1695/_1690/",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "fukuoka-official-002-059-2026",
    "title": "筑後市 ひとり親家庭への支援",
    "organization": "筑後市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "筑後市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "募集 こども家庭サポートセンター お父さんの育児を応援中！ こどもまんなか応援サポーター宣言 子育て支援拠点施設（おひさまハウス） ファミリー・サポート・センター事業 子どもを預けたいとき 助成金・支援 ひとり親家庭への支援",
    "officialUrl": "https://www.city.chikugo.lg.jp/kosodate/_6015/_8397/",
    "sourceName": "ひとり親家庭への支援"
  },
  {
    "slug": "fukuoka-official-002-060-2026",
    "title": "筑後市 住まいの助成金・支援",
    "organization": "筑後市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "筑後市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "受付しています",
    "officialUrl": "https://www.city.chikugo.lg.jp/kurashi/_26484/_30663/",
    "sourceName": "住まいの助成金・支援"
  }
];
