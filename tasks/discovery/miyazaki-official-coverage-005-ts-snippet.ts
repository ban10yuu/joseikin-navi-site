const miyazakiOfficial005Grants: Array<{
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
    "slug": "miyazaki-official-005-001-2026",
    "title": "門川町 移住支援金制度",
    "organization": "門川町",
    "maxAmount": "支給額】移住支援金（注意）東京都23区に在住または東京圏（東京都23区外、神奈川県、千葉県、埼玉県）から東京都23区へ通勤の方が対象○2人以上の家族・世帯の場合：100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "支給する制度です",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/town_planning/migration-support/page004529.html",
    "sourceName": "移住支援金制度"
  },
  {
    "slug": "miyazaki-official-005-002-2026",
    "title": "門川町 空き家等情報バンクに関する補助制度",
    "organization": "門川町",
    "maxAmount": "上限額10万円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付となりますことを予めご了承ください",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/akiya/page003582.html",
    "sourceName": "空き家等情報バンクに関する補助制度"
  },
  {
    "slug": "miyazaki-official-005-003-2026",
    "title": "門川町 軽度・中等度難聴児の補聴器購入費等助成について",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "交付対象にならない軽度・中等度の難聴がある子どもの補聴器の購入費用等の一部を助成します",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/welfare/page004362.html",
    "sourceName": "軽度・中等度難聴児の補聴器購入費等助成について"
  },
  {
    "slug": "miyazaki-official-005-004-2026",
    "title": "門川町 高齢者の補聴器購入の補助をします",
    "organization": "門川町",
    "maxAmount": "上限額30,000円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "門川町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請をご検討の方は、門川町役場福祉課までご相談ください",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/welfare/page005417.html",
    "sourceName": "高齢者の補聴器購入の補助をします"
  },
  {
    "slug": "miyazaki-official-005-005-2026",
    "title": "門川町 重度障がい者（児）医療費について",
    "organization": "門川町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "門川町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請について 下記の必要書類等を準備して、役場福祉課障がい福祉係で申請してください",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/welfare/page004360.html",
    "sourceName": "重度障がい者（児）医療費について"
  },
  {
    "slug": "miyazaki-official-005-006-2026",
    "title": "門川町 重度障がい者タクシー料金助成事業について",
    "organization": "門川町",
    "maxAmount": "上限500円",
    "maxAmountNum": 500,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "門川町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/welfare/page005024.html",
    "sourceName": "重度障がい者タクシー料金助成事業について"
  },
  {
    "slug": "miyazaki-official-005-007-2026",
    "title": "門川町 物価高対応子育て応援手当「宮崎県上乗せ支給」について",
    "organization": "門川町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年06月01日 支給」について 公開日：2026年06月01日 宮崎県では、長期化する物価高騰の影響を受けている本県の子育て世帯の経済的負担に対応するため、 子ども１人当たり１万５千円 を支給します",
    "officialUrl": "https://www.town.kadogawa.lg.jp/news/general/page005562.html",
    "sourceName": "物価高対応子育て応援手当「宮崎県上乗せ支給」について"
  },
  {
    "slug": "miyazaki-official-005-008-2026",
    "title": "門川町 物価高対応子育て応援手当について",
    "organization": "門川町",
    "maxAmount": "支給額対象児童１人あたり２万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年03月12日 支給します",
    "officialUrl": "https://www.town.kadogawa.lg.jp/news/general/page005483.html",
    "sourceName": "物価高対応子育て応援手当について"
  },
  {
    "slug": "miyazaki-official-005-009-2026",
    "title": "門川町 門川町 妊婦のための支援給付事業について",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "門川町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和７年４月１日 交付金事業」は「妊婦のための支援給付事業」に移行します",
    "officialUrl": "https://www.town.kadogawa.lg.jp/learn/pregnancy/page005182.html",
    "sourceName": "門川町 妊婦のための支援給付事業について"
  },
  {
    "slug": "miyazaki-official-005-010-2026",
    "title": "門川町 門川町ふるさと納税返礼品開発等支援補助金について",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "交付要綱をご確認のうえ、ふるさと納税担当までご相談ください",
    "officialUrl": "https://www.town.kadogawa.lg.jp/administration/furusato_tax_payment/page004854.html",
    "sourceName": "門川町ふるさと納税返礼品開発等支援補助金について"
  },
  {
    "slug": "miyazaki-official-005-011-2026",
    "title": "門川町 門川町地域生活支援事業について",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請をし、給付決定を受ける必要があります",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/welfare/page005021.html",
    "sourceName": "門川町地域生活支援事業について"
  },
  {
    "slug": "miyazaki-official-005-012-2026",
    "title": "門川町 門川町地方就職支援金事業",
    "organization": "門川町",
    "maxAmount": "支給額・交付回数・申請期限○支援金支給額：宮崎県内企業への就職活動に要した往復交通費4万円",
    "maxAmountNum": 40000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "受付を終了することがあります",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/town_planning/migration-support/page005090.html",
    "sourceName": "門川町地方就職支援金事業"
  },
  {
    "slug": "miyazaki-official-005-013-2026",
    "title": "門川町 門川町中小企業特別融資制度",
    "organization": "門川町",
    "maxAmount": "限度額500万円",
    "maxAmountNum": 5000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "公式ページで申請・受付状況を確認",
    "officialUrl": "https://www.town.kadogawa.lg.jp/industry/industry/page001000.html",
    "sourceName": "門川町中小企業特別融資制度"
  },
  {
    "slug": "miyazaki-official-005-014-2026",
    "title": "門川町 豪雨災害にかかる町税減免について",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年09月08日 申請により一定の要件で固定資産税を減免できる場合があります",
    "officialUrl": "https://www.town.kadogawa.lg.jp/news/general/page005310.html",
    "sourceName": "豪雨災害にかかる町税減免について"
  },
  {
    "slug": "miyazaki-official-005-015-2026",
    "title": "門川町 日常生活用具給付について",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "門川町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請が原則 となりますので、計画的な申請を行ってください",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/welfare/page004363.html",
    "sourceName": "日常生活用具給付について"
  },
  {
    "slug": "miyazaki-official-005-016-2026",
    "title": "門川町 門川町奨学金返還支援事業補助金",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "門川町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "令和６年４月１日 申請時まで１年以上継続して町内に住んでいる",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/town_planning/page005164.html",
    "sourceName": "門川町奨学金返還支援事業補助金"
  },
  {
    "slug": "miyazaki-official-005-017-2026",
    "title": "門川町 令和8年度まちづくりに関する補助金交付団体募集のお知らせ",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "門川町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付団体募集のお知らせ 令和8年度まちづくりに関する補助金交付団体募集のお知らせ 門川町では、住民主体で取り組むまちづくりの推進を図るため、「かどがわスマイル応援事業」と「にぎわい創出支援事業」を実施します",
    "officialUrl": "https://www.town.kadogawa.lg.jp/industry/page005600.html",
    "sourceName": "令和8年度まちづくりに関する補助金交付団体募集のお知らせ"
  },
  {
    "slug": "miyazaki-official-005-018-2026",
    "title": "門川町 合併浄化槽への転換補助制度について",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請様式はコチラ↓↓ 《当初申請時様式（記載例）》 ①補助金等交付申請書_様式第1号(規則：第3条関係).docx ②事業計画書.docx ③収支予算書.doc ④承諾書(借家).doc ⑤承諾書(土地).doc ⑥工事請負契約書(原本).do",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/septic_tank/page004065.html",
    "sourceName": "合併浄化槽への転換補助制度について"
  },
  {
    "slug": "miyazaki-official-005-019-2026",
    "title": "門川町 就学援助制度",
    "organization": "門川町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "支給される内容は 学用品費・給食費・修学旅行費（対象学年）・校外活動費・医療費等となっています",
    "officialUrl": "https://www.town.kadogawa.lg.jp/learn/board/page001036.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "miyazaki-official-005-020-2026",
    "title": "門川町 令和8年度 門川町住宅リフォーム商品券を販売します",
    "organization": "門川町",
    "maxAmount": "限度額1世帯あたり商品券100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "門川町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年6月22日 申請様式 商品券を購入される方 （様式1）購入申込書.docx （様式1）購入申込書（記入例）.pdf リフォーム施工業者 （様式2）工事完了報告書.pdf （様式3）取扱店登録申請書.pdf （様式4）換金申込書.pdf パンフレット 住宅リ",
    "officialUrl": "https://www.town.kadogawa.lg.jp/live/house/page005566.html",
    "sourceName": "令和8年度 門川町住宅リフォーム商品券を販売します"
  },
  {
    "slug": "miyazaki-official-005-021-2026",
    "title": "諸塚村 介護職への補助制度",
    "organization": "諸塚村",
    "maxAmount": "補助金額■初年度：20万円",
    "maxAmountNum": 200000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "諸塚村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年07月07日 支給開始から5年間 2",
    "officialUrl": "https://www.vill.morotsuka.miyazaki.jp/kurashi/sodan/1/537.html",
    "sourceName": "介護職への補助制度"
  },
  {
    "slug": "miyazaki-official-005-022-2026",
    "title": "諸塚村 諸塚村 移住定住 空き家活用事業(改修補助・再生借り上げ住宅) について",
    "organization": "諸塚村",
    "maxAmount": "上限額:200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "諸塚村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年05月12日 交付要綱 (PDFファイル: 541.3KB) 補助対象者(次に掲げる要件をすべて満たす方) 本村に住民登録があること",
    "officialUrl": "https://www.vill.morotsuka.miyazaki.jp/kurashi/sodan/2/470.html",
    "sourceName": "諸塚村 移住定住 空き家活用事業(改修補助・再生借り上げ住宅) について"
  },
  {
    "slug": "miyazaki-official-005-023-2026",
    "title": "諸塚村 諸塚村移住支援金制度について",
    "organization": "諸塚村",
    "maxAmount": "支給額2人以上の家族・世帯の場合100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "諸塚村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年05月30日 交付します",
    "officialUrl": "https://www.vill.morotsuka.miyazaki.jp/kurashi/sodan/1/541.html",
    "sourceName": "諸塚村移住支援金制度について"
  },
  {
    "slug": "miyazaki-official-005-024-2026",
    "title": "諸塚村 諸塚村商工業事業者育成支援事業について",
    "organization": "諸塚村",
    "maxAmount": "限度額300万円",
    "maxAmountNum": 3000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "諸塚村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年01月29日 交付します",
    "officialUrl": "https://www.vill.morotsuka.miyazaki.jp/kurashi/sodan/1/548.html",
    "sourceName": "諸塚村商工業事業者育成支援事業について"
  },
  {
    "slug": "miyazaki-official-005-025-2026",
    "title": "諸塚村 不妊治療費助成事業について",
    "organization": "諸塚村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "諸塚村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年05月01日 申請は、助成期間が終了した日から1年以内に行いましょう",
    "officialUrl": "https://www.vill.morotsuka.miyazaki.jp/kurashi/sodan/1/532.html",
    "sourceName": "不妊治療費助成事業について"
  },
  {
    "slug": "miyazaki-official-005-026-2026",
    "title": "諸塚村 介護用品購入助成、はじめます。",
    "organization": "諸塚村",
    "maxAmount": "助成額上限50,000円",
    "maxAmountNum": 50000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "諸塚村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年05月30日 申請書兼請求書 (Wordファイル: 30.5KB) この記事に関するお問い合わせ先 諸塚村 住民生活課 〒883-1301 宮崎県東臼杵郡諸塚村大字家代2683番地 電話番号：0982-65-1119 お問い合わせフォーム PDFファイルを閲",
    "officialUrl": "https://www.vill.morotsuka.miyazaki.jp/kurashi/sodan/1/542.html",
    "sourceName": "介護用品購入助成、はじめます。"
  },
  {
    "slug": "miyazaki-official-005-027-2026",
    "title": "諸塚村 相談活動等補助金について～諸塚村みちゆき推進事業～",
    "organization": "諸塚村",
    "maxAmount": "11,000円を補助",
    "maxAmountNum": 11000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "諸塚村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年06月17日 交付します",
    "officialUrl": "https://www.vill.morotsuka.miyazaki.jp/kurashi/sodan/1/543.html",
    "sourceName": "相談活動等補助金について～諸塚村みちゆき推進事業～"
  },
  {
    "slug": "miyazaki-official-005-028-2026",
    "title": "諸塚村 任意予防接種費用助成事業について",
    "organization": "諸塚村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "諸塚村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年05月12日 申請の〆切は、接種した年度の末日となっていますのでご注意ください",
    "officialUrl": "https://www.vill.morotsuka.miyazaki.jp/kurashi/sodan/1/535.html",
    "sourceName": "任意予防接種費用助成事業について"
  },
  {
    "slug": "miyazaki-official-005-029-2026",
    "title": "椎葉村 「男性育児休業取得奨励金」について",
    "organization": "椎葉村",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "椎葉村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年06月03日 支給します",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/welfare/2025/06/post_87.php",
    "sourceName": "「男性育児休業取得奨励金」について"
  },
  {
    "slug": "miyazaki-official-005-030-2026",
    "title": "椎葉村 妊婦のための支援給付事業について",
    "organization": "椎葉村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "椎葉村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年04月15日 支給します",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/welfare/2025/04/post_85.php",
    "sourceName": "妊婦のための支援給付事業について"
  },
  {
    "slug": "miyazaki-official-005-031-2026",
    "title": "椎葉村 賃上げ対応緊急支援金",
    "organization": "椎葉村",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "椎葉村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年05月27日 支給要件を満たす場合に従業員１名あたり７万円の支援金を支給 します",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/promote/2026/05/post_291.php",
    "sourceName": "賃上げ対応緊急支援金"
  },
  {
    "slug": "miyazaki-official-005-032-2026",
    "title": "椎葉村 椎葉村出身高校生の生活支援費補助金制度について",
    "organization": "椎葉村",
    "maxAmount": "補助額月額20,000円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "椎葉村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付申請書」を椎葉村教育委員会に提出 申請書は毎学年当初に提出する 申請書には 在学証明書 （新学年）を添付する 預金通帳 （振込指定口座の名義・口座番号）の 写し （コピー）を添付する 注意事項 次の場合、補助金は停止されますので、直ちに届け",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/education/school/subsidy.php",
    "sourceName": "椎葉村出身高校生の生活支援費補助金制度について"
  },
  {
    "slug": "miyazaki-official-005-033-2026",
    "title": "椎葉村 椎葉村奨学金貸付制度について",
    "organization": "椎葉村",
    "maxAmount": "月額20,000円",
    "maxAmountNum": 20000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "椎葉村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "提出",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/education/school/lendingloaning.php",
    "sourceName": "椎葉村奨学金貸付制度について"
  },
  {
    "slug": "miyazaki-official-005-034-2026",
    "title": "椎葉村 子育て支援事業について",
    "organization": "椎葉村",
    "maxAmount": "上限は1万5千円、100円",
    "maxAmountNum": 100,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "椎葉村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/welfare/growth/supportprojects.php",
    "sourceName": "子育て支援事業について"
  },
  {
    "slug": "miyazaki-official-005-035-2026",
    "title": "椎葉村 地域支援事業による介護予防事業について",
    "organization": "椎葉村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "椎葉村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "地域支援事業による介護予防事業について 地域包括支援センターとは？ 地域包括支援センターは、地域で暮らす高齢者のみなさんを、介護、福祉、医療などさまざまな面から総合的に支えるために設けられました。 高齢者のみなさんがいつまでも健やかに住みな",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/welfare/care/careprevention.php",
    "sourceName": "地域支援事業による介護予防事業について"
  },
  {
    "slug": "miyazaki-official-005-036-2026",
    "title": "椎葉村 高齢者用バス定期券購入費補助のお知らせ",
    "organization": "椎葉村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "椎葉村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年03月18日 高齢者用バス定期券購入費補助のお知らせ 高齢者用バス定期券購入費補助のお知らせ 2026年03月18日 椎葉村では、令和８年４月１日から「宮交スマート65」購入費を補助します。 宮崎交通ホームページ 椎葉村役場 福祉保健課 福祉グループ T",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/welfare/2026/03/post_100.php",
    "sourceName": "高齢者用バス定期券購入費補助のお知らせ"
  },
  {
    "slug": "miyazaki-official-005-037-2026",
    "title": "椎葉村 はり・きゅう・あんまなどの施術を受けたとき",
    "organization": "椎葉村",
    "maxAmount": "1,000円の助成",
    "maxAmountNum": 1000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "椎葉村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請された指定施術者から施術を受けた方に、1回につき1,000円の助成を行います",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/welfare/welfarewell/medicaltreatment.php",
    "sourceName": "はり・きゅう・あんまなどの施術を受けたとき"
  },
  {
    "slug": "miyazaki-official-005-038-2026",
    "title": "椎葉村 令和８年度「椎葉村プレミアム付き商品券」に関するご案内",
    "organization": "椎葉村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "椎葉村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年05月27日 令和８年度「椎葉村プレミアム付き商品券」に関するご案内 令和８年度「椎葉村プレミアム付き商品券」に関するご案内 2026年05月27日 椎葉村では、商業活動の活性化と消費者サービスの向上（物価高騰対策事業の一助 ）を目的として、 宮崎県物価",
    "officialUrl": "https://www.vill.shiiba.miyazaki.jp/promote/2026/05/post_290.php",
    "sourceName": "令和８年度「椎葉村プレミアム付き商品券」に関するご案内"
  },
  {
    "slug": "miyazaki-official-005-039-2026",
    "title": "美郷町 はりきゅう券の利用手続きについて",
    "organization": "美郷町",
    "maxAmount": "上限を1,000円",
    "maxAmountNum": 1000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "美郷町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2016年12月14日 交付を受けるには はり・きゅう券の利用を希望する方は、美郷町はり・きゅう等施術受診券交付申請書（様式第4号）を施術を受ける前に町長へ提出ください",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003163/index.html",
    "sourceName": "はりきゅう券の利用手続きについて"
  },
  {
    "slug": "miyazaki-official-005-040-2026",
    "title": "美郷町 一般住宅建築支援事業について",
    "organization": "美郷町",
    "maxAmount": "補助金額【新築工事の場合】○100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "美郷町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2021年9月28日 交付しています",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003582/index.html",
    "sourceName": "一般住宅建築支援事業について"
  },
  {
    "slug": "miyazaki-official-005-041-2026",
    "title": "美郷町 軽度・中等度難聴児の補聴器購入費等助成について",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年1月20日 交付対象にならない軽度・中等度の難聴がある子どもの補聴器の購入費用等の一部を助成します",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji0031254/index.html",
    "sourceName": "軽度・中等度難聴児の補聴器購入費等助成について"
  },
  {
    "slug": "miyazaki-official-005-042-2026",
    "title": "美郷町 高齢者及び障がい者住宅改造助成事業",
    "organization": "美郷町",
    "maxAmount": "年額が7万円",
    "maxAmountNum": 70000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "美郷町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付を受けている者で、次のいずれかに該当するもの ①下肢・体幹・視覚障がいで1～3級の者 ②上肢障がいで1～2級の者 ③脳病変による運動機能障がいで1～3級の者 ④内部障がいで1～3級の者 ウ",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003126/index.html",
    "sourceName": "高齢者及び障がい者住宅改造助成事業"
  },
  {
    "slug": "miyazaki-official-005-043-2026",
    "title": "美郷町 在宅介護支援手当",
    "organization": "美郷町",
    "maxAmount": "助成額在宅介護手当◇在宅の寝たきり高齢者（要介護3以上または認知症を主要因とする要介護2以上の方）を、月に10日以上在宅で介護する人月額1万円",
    "maxAmountNum": 10000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2021年12月27日 申請書提出 在宅介護手当申請書（様式第1号）（ワード：26.5キロバイト） 紙おむつ等支給認定申請書（様式第1号）（ワード：29キロバイト） ※ 事前調査が必要になります",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003127/index.html",
    "sourceName": "在宅介護支援手当"
  },
  {
    "slug": "miyazaki-official-005-044-2026",
    "title": "美郷町 奨学金の貸与について",
    "organization": "美郷町",
    "maxAmount": "月額）高等学校等奨学生20,000円",
    "maxAmountNum": 20000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2020年4月1日 募集期間 奨学金の申込みは、毎月3月から4月（原則年1回）に美郷町広報誌、ホームページで案内します",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003181/index.html",
    "sourceName": "奨学金の貸与について"
  },
  {
    "slug": "miyazaki-official-005-045-2026",
    "title": "美郷町 人工透析患者・精神障害者・小児慢性特定疾病患者通院費助成事業について",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "美郷町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2020年4月1日 支給します",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003121/index.html",
    "sourceName": "人工透析患者・精神障害者・小児慢性特定疾病患者通院費助成事業について"
  },
  {
    "slug": "miyazaki-official-005-046-2026",
    "title": "美郷町 特別児童扶養手当について",
    "organization": "美郷町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給月額や支払時期等、詳しくは 厚生労働省ホームページ または 宮崎県ホームページ を確認ください",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003944/index.html",
    "sourceName": "特別児童扶養手当について"
  },
  {
    "slug": "miyazaki-official-005-047-2026",
    "title": "美郷町 日常生活用具の給付事業について",
    "organization": "美郷町",
    "maxAmount": "上限月額生活保護生活保護受給世帯0円",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2020年4月1日 支給制度の利用者負担は、定率1割（町民税が非課税世帯の場合は負担なし）となっています",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003124/index.html",
    "sourceName": "日常生活用具の給付事業について"
  },
  {
    "slug": "miyazaki-official-005-048-2026",
    "title": "美郷町 妊婦のための支援給付について",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "美郷町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月5日 申請場所 ・役場健康福祉課 ・南郷地域課／北郷地域課 6",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003855/index.html",
    "sourceName": "妊婦のための支援給付について"
  },
  {
    "slug": "miyazaki-official-005-049-2026",
    "title": "美郷町 美郷町移住支援金制度",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "支給要件を満たした場合に、移住支援金を支給する制度です",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003916/index.html",
    "sourceName": "美郷町移住支援金制度"
  },
  {
    "slug": "miyazaki-official-005-050-2026",
    "title": "美郷町 美郷町介護支援専門員等法定研修支援補助金について",
    "organization": "美郷町",
    "maxAmount": "補助額補助対象研修にかかる受講料及び教材代の全額〈補助額の上限〉・介護支援専門員実務研修5万円",
    "maxAmountNum": 50000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請日時点で、美郷町に所在する介護サービス事業所等に就業している方、または内定を得て就業予定の方 3",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji0031162/index.html",
    "sourceName": "美郷町介護支援専門員等法定研修支援補助金について"
  },
  {
    "slug": "miyazaki-official-005-051-2026",
    "title": "美郷町 物価高対応子育て応援手当",
    "organization": "美郷町",
    "maxAmount": "1人当たり2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年3月31日 支給することとされました",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji0031264/index.html",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "miyazaki-official-005-052-2026",
    "title": "美郷町 補装具の給付事業について",
    "organization": "美郷町",
    "maxAmount": "上限月額生活保護生活保護受給世帯0円",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2020年4月1日 申請に基づき、補装具の購入または修理が必要と認められた場合は、その費用の一部を補装具費として利用者に支給します",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003125/index.html",
    "sourceName": "補装具の給付事業について"
  },
  {
    "slug": "miyazaki-official-005-053-2026",
    "title": "美郷町 重度心身障がい者医療費助成事業について",
    "organization": "美郷町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "美郷町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2020年4月1日 交付・申請様式 （PDF：64.5キロバイト） (3)身体障害者手帳、療育手帳 、精神障害者手帳 (4)医療保険が分かるものの写し（資格確認証、またはマイナンバーカードによる確認） ※申請年度の1月1日時点で他市町村に住民票のあった方、転入の方",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003116/index.html",
    "sourceName": "重度心身障がい者医療費助成事業について"
  },
  {
    "slug": "miyazaki-official-005-054-2026",
    "title": "美郷町 合併処理浄化槽の各種補助金",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2020年4月1日 交付しています",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003271/index.html",
    "sourceName": "合併処理浄化槽の各種補助金"
  },
  {
    "slug": "miyazaki-official-005-055-2026",
    "title": "美郷町 就学援助費",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "美郷町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "申請書」申込書を、指定する日までに児童生徒の現在在学する学校に申し 込んでください",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003182/index.html",
    "sourceName": "就学援助費"
  },
  {
    "slug": "miyazaki-official-005-056-2026",
    "title": "美郷町 地区管理水道と個人水道の各種補助金",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "美郷町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年4月1日 交付していますので、町民生活課・各支所までご相談ください",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji003272/index.html",
    "sourceName": "地区管理水道と個人水道の各種補助金"
  },
  {
    "slug": "miyazaki-official-005-057-2026",
    "title": "美郷町 美郷町高齢者補聴器購入助成事業について",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "美郷町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月22日 申請につきましては、健康福祉課窓口までお問い合わせください",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji0031240/index.html",
    "sourceName": "美郷町高齢者補聴器購入助成事業について"
  },
  {
    "slug": "miyazaki-official-005-058-2026",
    "title": "美郷町 美郷町生活応援商品券の配布について",
    "organization": "美郷町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "美郷町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月15日 交付金」及び「宮崎県物価高対応プレミアム付商品券等発行事 業費補助金」を活用して実施するものです",
    "officialUrl": "https://www.town.miyazaki-misato.lg.jp/kiji0031258/index.html",
    "sourceName": "美郷町生活応援商品券の配布について"
  },
  {
    "slug": "miyazaki-official-005-059-2026",
    "title": "高千穂町 こども医療費助成制度について",
    "organization": "高千穂町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "高千穂町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2022年12月07日 申請・請求をしてください",
    "officialUrl": "https://www.town-takachiho.jp/top/kosodate_kyoiku/teate/915.html",
    "sourceName": "こども医療費助成制度について"
  },
  {
    "slug": "miyazaki-official-005-060-2026",
    "title": "高千穂町 高千穂町骨髄等移植ドナー支援事業",
    "organization": "高千穂町",
    "maxAmount": "最大7日まで）事業所1日につき1万円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高千穂町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年04月30日 交付について 高千穂町では、骨髄等提供者（ドナー）の負担軽減を図ることを目的として、ドナー及びその方を雇用している事業所を対象に奨励金を交付します",
    "officialUrl": "https://www.town-takachiho.jp/top/kenko_fukushi/kenko_zukuri/3877.html",
    "sourceName": "高千穂町骨髄等移植ドナー支援事業"
  },
  {
    "slug": "miyazaki-official-005-061-2026",
    "title": "高千穂町 高千穂町特別融資制度について",
    "organization": "高千穂町",
    "maxAmount": "限度額につきましては、500万円",
    "maxAmountNum": 5000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年04月01日 交付申請書 (RTFファイル: 75.5KB) この記事に関するお問い合わせ先 企画観光課 〒882-1192 宮崎県西臼杵郡高千穂町大字三田井13 電話番号：0982-73-1212 ファックス：0982-73-1234 メールフォームによる",
    "officialUrl": "https://www.town-takachiho.jp/top/sangyo/shoko/3780.html",
    "sourceName": "高千穂町特別融資制度について"
  },
  {
    "slug": "miyazaki-official-005-062-2026",
    "title": "高千穂町 子育て支援金について",
    "organization": "高千穂町",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年04月08日 支給条例を制定しております",
    "officialUrl": "https://www.town-takachiho.jp/top/kosodate_kyoiku/teate/851.html",
    "sourceName": "子育て支援金について"
  },
  {
    "slug": "miyazaki-official-005-063-2026",
    "title": "高千穂町 重度心身障害者医療費助成申請書(請求書)について",
    "organization": "高千穂町",
    "maxAmount": "限度額（1医療機関につき）◆【外来】500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "高千穂町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年03月10日 申請書(請求書)について 一旦「保存」し、「編集を有効にする」をしてから利用してください",
    "officialUrl": "https://www.town-takachiho.jp/top/kenko_fukushi/shogai_fukushi/949.html",
    "sourceName": "重度心身障害者医療費助成申請書(請求書)について"
  },
  {
    "slug": "miyazaki-official-005-064-2026",
    "title": "高千穂町 物価高対応子育て応援手当について",
    "organization": "高千穂町",
    "maxAmount": "1人あたり2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年3月31日 支給します",
    "officialUrl": "https://www.town-takachiho.jp/top/kosodate_kyoiku/teate/4333.html",
    "sourceName": "物価高対応子育て応援手当について"
  },
  {
    "slug": "miyazaki-official-005-065-2026",
    "title": "高千穂町 不妊治療費の助成制度について(R5.11.27更新）",
    "organization": "高千穂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和5年11月8日 申請書類をとりに来られる方の助成方法が変わります",
    "officialUrl": "https://www.town-takachiho.jp/top/kosodate_kyoiku/teate/850.html",
    "sourceName": "不妊治療費の助成制度について(R5.11.27更新）"
  },
  {
    "slug": "miyazaki-official-005-066-2026",
    "title": "高千穂町 高千穂町アピアランスケアサポート助成事業の対象の拡大について（令和8年4月から）",
    "organization": "高千穂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年4月1日 交付対象者（以下の全てに該当する方） 1",
    "officialUrl": "https://www.town-takachiho.jp/top/kenko_fukushi/kenko_zukuri/3881.html",
    "sourceName": "高千穂町アピアランスケアサポート助成事業の対象の拡大について（令和8年4月から）"
  },
  {
    "slug": "miyazaki-official-005-067-2026",
    "title": "高千穂町 高千穂町空家関連の補助事業について",
    "organization": "高千穂町",
    "maxAmount": "補助金額：対象経費の2/3以内最大200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高千穂町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年04月08日 交付要綱を定め、予算の範囲内で必要な改修費用を一部を補助しています",
    "officialUrl": "https://www.town-takachiho.jp/top/soshiki/kensetsu/3/2/4265.html",
    "sourceName": "高千穂町空家関連の補助事業について"
  },
  {
    "slug": "miyazaki-official-005-068-2026",
    "title": "高千穂町 高千穂町結婚支援事業について",
    "organization": "高千穂町",
    "maxAmount": "補助金額：・夫婦ともに29歳以下の場合、1世帯上限60万円",
    "maxAmountNum": 600000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年4月1日 提出し、受理された夫婦） ・申請の時点に夫婦の双方または一方が高千穂町に住所を有する世帯 ・婚姻日において夫婦共に年齢が39歳以下であること ・夫婦の所得が、合算して500万円未満であること（貸与型の奨学金の返済を行っている場合は、年間の返還額",
    "officialUrl": "https://www.town-takachiho.jp/top/soshiki/kikakukanko/4/3762.html",
    "sourceName": "高千穂町結婚支援事業について"
  },
  {
    "slug": "miyazaki-official-005-069-2026",
    "title": "高千穂町 高千穂町新規就農者支援事業について",
    "organization": "高千穂町",
    "maxAmount": "補助額年間120万円",
    "maxAmountNum": 1200000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2019年04月03日 交付） 3、手続き 事業計画書、収支計画書、履歴書を提出後、面接後交付の可否を判断",
    "officialUrl": "https://www.town-takachiho.jp/top/sangyo/norin/822.html",
    "sourceName": "高千穂町新規就農者支援事業について"
  },
  {
    "slug": "miyazaki-official-005-070-2026",
    "title": "高千穂町 合併処理浄化槽設置整備事業〔補助金〕について",
    "organization": "高千穂町",
    "maxAmount": "補助金額）5人槽・・・332,000円",
    "maxAmountNum": 332000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高千穂町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年06月23日 申請期間 申請期間は4月から12月末までですが、申請金額が予算上限に達し次第受付を終了します",
    "officialUrl": "https://www.town-takachiho.jp/top/kurashi/jyoukasou2/1442.html",
    "sourceName": "合併処理浄化槽設置整備事業〔補助金〕について"
  },
  {
    "slug": "miyazaki-official-005-071-2026",
    "title": "高千穂町 税減免について(住民税・自動車税)",
    "organization": "高千穂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2019年04月03日 申請に必要なもの 障害者手帳 運転者の運転免許証 自動車検査証 申請者の印鑑 住民票 付属証明書（使用目的に応じて次のいずれかを提出） ア）通学（通所）証明願 イ）通院証明願 ウ）生業等の証明願 エ）住宅処遇に関する証明願 障害者の方と生計同一",
    "officialUrl": "https://www.town-takachiho.jp/top/kenko_fukushi/shogai_fukushi/947.html",
    "sourceName": "税減免について(住民税・自動車税)"
  },
  {
    "slug": "miyazaki-official-005-072-2026",
    "title": "高千穂町 補装具・日常生活用具について",
    "organization": "高千穂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "高千穂町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年07月16日 申請には、手帳・印鑑が必要です",
    "officialUrl": "https://www.town-takachiho.jp/top/kenko_fukushi/shogai_fukushi/946.html",
    "sourceName": "補装具・日常生活用具について"
  },
  {
    "slug": "miyazaki-official-005-073-2026",
    "title": "高千穂町 木造住宅耐震化に対する補助制度について",
    "organization": "高千穂町",
    "maxAmount": "補助額1棟につき、補助対象経費の130/136以内、かつ、130,000円",
    "maxAmountNum": 130000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2021年06月07日 交付を受けている住宅以外のもの",
    "officialUrl": "https://www.town-takachiho.jp/top/kurashi/sumai/909.html",
    "sourceName": "木造住宅耐震化に対する補助制度について"
  },
  {
    "slug": "miyazaki-official-005-074-2026",
    "title": "高千穂町 幼児教育・保育の無償化が始まります！",
    "organization": "高千穂町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "高千穂町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2019年08月28日 申請が必要となります",
    "officialUrl": "https://www.town-takachiho.jp/top/soshiki/fukushihoken/4/3/mushouka.html",
    "sourceName": "幼児教育・保育の無償化が始まります！"
  },
  {
    "slug": "miyazaki-official-005-075-2026",
    "title": "高千穂町 子育て世帯訪問支援事業",
    "organization": "高千穂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高千穂町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年02月29日 公式ページで申請・受付状況を確認",
    "officialUrl": "https://www.town-takachiho.jp/top/soshiki/fukushihoken/4/3/3819.html",
    "sourceName": "子育て世帯訪問支援事業"
  },
  {
    "slug": "miyazaki-official-005-076-2026",
    "title": "高千穂町 任意予防接種一部費用助成",
    "organization": "高千穂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "高千穂町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年03月28日 任意予防接種一部費用助成 おたふくかぜ（流行性耳下腺炎）",
    "officialUrl": "https://www.town-takachiho.jp/top/kosodate_kyoiku/kosodate_shien/1837.html",
    "sourceName": "任意予防接種一部費用助成"
  },
  {
    "slug": "miyazaki-official-005-077-2026",
    "title": "高千穂町 ふれあい給食サービスについて",
    "organization": "高千穂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高千穂町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年04月27日 交付金を活用し1食 500円 でご利用いただけます",
    "officialUrl": "https://www.town-takachiho.jp/top/kenko_fukushi/korei_fukushi/944.html",
    "sourceName": "ふれあい給食サービスについて"
  }
];
