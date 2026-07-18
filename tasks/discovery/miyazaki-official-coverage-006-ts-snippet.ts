const miyazakiOfficial006Grants: Array<{
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
    "slug": "miyazaki-official-006-001-2026",
    "title": "日之影町 はり・きゅう等費用の助成",
    "organization": "日之影町",
    "maxAmount": "800円を助成",
    "maxAmountNum": 800,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日之影町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2016年2月19日 申請方法 役場町民福祉課地域福祉係へお申し込みください",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016021900012/",
    "sourceName": "はり・きゅう等費用の助成"
  },
  {
    "slug": "miyazaki-official-006-002-2026",
    "title": "日之影町 みやざき結婚サポートセンター入会登録補助金のご案内",
    "organization": "日之影町",
    "maxAmount": "上限１１，０００円",
    "maxAmountNum": 11000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日之影町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年9月15日 交付申請時点において退会していない方 （３）町税等を滞納していない方 ２",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2023090600019/",
    "sourceName": "みやざき結婚サポートセンター入会登録補助金のご案内"
  },
  {
    "slug": "miyazaki-official-006-003-2026",
    "title": "日之影町 移住支援金制度",
    "organization": "日之影町",
    "maxAmount": "最大200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和5年4月1日 支給される制度です",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2023072000011/",
    "sourceName": "移住支援金制度"
  },
  {
    "slug": "miyazaki-official-006-004-2026",
    "title": "日之影町 子ども医療費助成（令和７年４月以降診療分）",
    "organization": "日之影町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "日之影町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請の期限は、一部負担金を負担した日から起算して1年以内です",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2025022600029/",
    "sourceName": "子ども医療費助成（令和７年４月以降診療分）"
  },
  {
    "slug": "miyazaki-official-006-005-2026",
    "title": "日之影町 児童扶養手当",
    "organization": "日之影町",
    "maxAmount": "1人の場合43,160円",
    "maxAmountNum": 43160,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給し、児童の福祉の増進を図るものです",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016031800142/",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "miyazaki-official-006-006-2026",
    "title": "日之影町 小児任意予防接種助成",
    "organization": "日之影町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日之影町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年10月15日 申請書兼請求書、領収書、接種証明書（母子手帳可）、振込口座の通帳、 をお持ちになり、保健センターまでお越しください",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016020500107/",
    "sourceName": "小児任意予防接種助成"
  },
  {
    "slug": "miyazaki-official-006-007-2026",
    "title": "日之影町 浄化槽",
    "organization": "日之影町",
    "maxAmount": "補助金額確定通知補助金請求補助金交付（設置者が指定された口座への振替となります）合併処理浄化槽設置後の維持管理費（年間）5人槽・・・約30,000～39,000円",
    "maxAmountNum": 39000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016022600034/",
    "sourceName": "浄化槽"
  },
  {
    "slug": "miyazaki-official-006-008-2026",
    "title": "日之影町 日之影町アピアランスケアサポート事業",
    "organization": "日之影町",
    "maxAmount": "助成額（１）医療用ウイッグ等（医療用ウイッグ、装着用ネット、毛付き帽子）20,000円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請に必要な書類 助成を受けようとする方は、助成対象用具を購入した日から1年以内に下記の書類を添えて保健センターで手続きを行ってください",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2026040900030/",
    "sourceName": "日之影町アピアランスケアサポート事業"
  },
  {
    "slug": "miyazaki-official-006-009-2026",
    "title": "日之影町 日之影町骨髄移植ドナー支援事業奨励金",
    "organization": "日之影町",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "日之影町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "交付申請書（提供者用）（様式第１号） 申請書提供者用[PDF：245KB] （２）公営財団法人日本骨髄バンクが発行する骨髄等の提供を完了したことを証明する書類の写し （３）町税等の完納証明書 （４）町長が必要と認める書類 ・勤務する事業所につい",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2023082200012/",
    "sourceName": "日之影町骨髄移植ドナー支援事業奨励金"
  },
  {
    "slug": "miyazaki-official-006-010-2026",
    "title": "日之影町 日之影町住宅等除却事業補助金について",
    "organization": "日之影町",
    "maxAmount": "上限３０万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "日之影町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月15日 交付要綱[PDF：337KB] をご確認いただくか、担当課までお問い合わせください",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2026041600014/",
    "sourceName": "日之影町住宅等除却事業補助金について"
  },
  {
    "slug": "miyazaki-official-006-011-2026",
    "title": "日之影町 日之影町出逢い創出イベント事業補助金について",
    "organization": "日之影町",
    "maxAmount": "上限１５万円",
    "maxAmountNum": 150000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月9日 申請することはできません",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2026060800037/",
    "sourceName": "日之影町出逢い創出イベント事業補助金について"
  },
  {
    "slug": "miyazaki-official-006-012-2026",
    "title": "日之影町 農業近代化資金、融資など",
    "organization": "日之影町",
    "maxAmount": "限度額農業者：1,800万円",
    "maxAmountNum": 18000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2016年2月1日 農業近代化資金、融資など 公開日 2016年2月1日 農業近代化資金 さまざまな設備投資金として、また長期運転資金として、低金利で借りることが出来ます。 金利 1.9%（平成19年1月現在） 貸付限度額 農業者：1,800万円 法人等または",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016020100024/",
    "sourceName": "農業近代化資金、融資など"
  },
  {
    "slug": "miyazaki-official-006-013-2026",
    "title": "日之影町 令和8年度 世界農業遺産 地域活動支援事業補助金のお知らせ",
    "organization": "日之影町",
    "maxAmount": "上限額１件あたり３０万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月10日 交付します",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2026061000023/",
    "sourceName": "令和8年度 世界農業遺産 地域活動支援事業補助金のお知らせ"
  },
  {
    "slug": "miyazaki-official-006-014-2026",
    "title": "日之影町 令和8年度 祖母・傾・大崩ユネスコエコパーク活動支援事業費補助金の公募について",
    "organization": "日之影町",
    "maxAmount": "補助金額１団体につき１０万円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月26日 募集し、補助金を交付します",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2026062500010/",
    "sourceName": "令和8年度 祖母・傾・大崩ユネスコエコパーク活動支援事業費補助金の公募について"
  },
  {
    "slug": "miyazaki-official-006-015-2026",
    "title": "日之影町 企業立地の優遇措置",
    "organization": "日之影町",
    "maxAmount": "1人につき（1回限り）（本町在住の者）40万円",
    "maxAmountNum": 400000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2021年1月4日 企業立地の優遇措置 公開日 2021年1月4日 （1）業種 工場、試験研究施設、観光施設、情報サービス施設、コールセンター施設、農林業施設、継続的に雇用が見込まれる施設 （2）指定用件 新設又は増設した施設の事業開始に伴う従業員の新規雇用が",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016020100031/",
    "sourceName": "企業立地の優遇措置"
  },
  {
    "slug": "miyazaki-official-006-016-2026",
    "title": "日之影町 在宅高齢者住宅改造費の助成",
    "organization": "日之影町",
    "maxAmount": "上限500,000円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "日之影町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2016年2月19日 在宅高齢者住宅改造費の助成 公開日 2016年2月19日 住宅改造助成事業 在宅の介護を要する高齢者のいる世帯に対し、その住宅を改造することにより、要介護者の自立した生活の維持・促進並びに介護者の負担軽減を図ります。役場町民福祉課地域福祉係",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016021900029/",
    "sourceName": "在宅高齢者住宅改造費の助成"
  },
  {
    "slug": "miyazaki-official-006-017-2026",
    "title": "日之影町 奨学金",
    "organization": "日之影町",
    "maxAmount": "月額15,000円",
    "maxAmountNum": 15000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2016年2月19日 申請により以降の返還を免除 転出した場合は以降の分の返還免除取消 お問い合わせ 教育委員会 TEL ：(0982)87-3807 FAX ：(0982)87-3814 ツイート サイトポリシー リンク・著作権・免責事項 個人情報の取り扱い サイ",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016021900135/",
    "sourceName": "奨学金"
  },
  {
    "slug": "miyazaki-official-006-018-2026",
    "title": "日之影町 障がいのある人のための助成制度",
    "organization": "日之影町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日之影町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2021年5月6日 交付（修理） 身体障がい者手帳をお持ちの方へ、その障がいを補うため補装具を交付（修理）します",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016020300042/",
    "sourceName": "障がいのある人のための助成制度"
  },
  {
    "slug": "miyazaki-official-006-019-2026",
    "title": "日之影町 介護予防・生活支援事業",
    "organization": "日之影町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "日之影町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "介護予防・生活支援事業 高齢者や障がい者等に対し、社会的孤立感の解消、自立生活の助長、要介護状態になることの予防を図るため、介護保険法に定める給付以外のサービスを行います。 （1）生活支援訪問サービス 食事の支度、買い物、居住等の清掃、洗濯",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016021900050/",
    "sourceName": "介護予防・生活支援事業"
  },
  {
    "slug": "miyazaki-official-006-020-2026",
    "title": "日之影町 障がいのある人のための医療制度",
    "organization": "日之影町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "日之影町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2021年5月6日 障がいのある人のための医療制度 公開日 2021年5月6日 重度心身障がい者（児）医療費の助成 身体障がい手帳および療育手帳で重度の方へ保険診療による自己負担の一部を助成します。なお、一定の所得のある人は対象となりません。 更生医療 18歳",
    "officialUrl": "https://www.town.hinokage.lg.jp/docs/2016020300035/",
    "sourceName": "障がいのある人のための医療制度"
  },
  {
    "slug": "miyazaki-official-006-021-2026",
    "title": "五ヶ瀬町 【令和8年度募集開始】世界農業遺産地域活動支援事業補助金",
    "organization": "五ヶ瀬町",
    "maxAmount": "上限額1件当たり30万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "五ヶ瀬町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年05月27日 募集開始】世界農業遺産地域活動支援事業補助金 Tweet 更新日：2026年05月27日 世界農業遺産を活用した地域の活動を支援します！ 1.目的 世界農業遺産を活用した取組を活性化させ、高千穂郷・椎葉山地域の山間地農林業複合システムを持続可能",
    "officialUrl": "https://www.town.gokase.miyazaki.jp/kakuka/kikaku/1877.html",
    "sourceName": "【令和8年度募集開始】世界農業遺産地域活動支援事業補助金"
  },
  {
    "slug": "miyazaki-official-006-022-2026",
    "title": "五ヶ瀬町 こども医療費助成制度について",
    "organization": "五ヶ瀬町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "五ヶ瀬町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年03月31日 申請書 子どもの保険情報がわかるもの（マイナ保険証など） 償還払いを行う振込口座がわかるもの（写し） （転出） 卒業及び進学（通学）に関する届兼同意書 注意：転出までに届けが無い場合、資格を失います",
    "officialUrl": "https://www.town.gokase.miyazaki.jp/kurashi/kosodate/564.html",
    "sourceName": "こども医療費助成制度について"
  },
  {
    "slug": "miyazaki-official-006-023-2026",
    "title": "五ヶ瀬町 児童手当について",
    "organization": "五ヶ瀬町",
    "maxAmount": "月額と所得制限所得制限限度額未満支給対象児童支給額所得制限限度額以上、所得上限限度額未満の受給者（特例給付）0～3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "五ヶ瀬町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年08月09日 支給対象者 児童手当は、15歳になって最初に迎える3月31日まで（中学校修了）の児童を養育している方に支給します",
    "officialUrl": "https://www.town.gokase.miyazaki.jp/kurashi/kosodate/1889.html",
    "sourceName": "児童手当について"
  },
  {
    "slug": "miyazaki-official-006-024-2026",
    "title": "五ヶ瀬町 障がいのある人のための助成制度",
    "organization": "五ヶ瀬町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "五ヶ瀬町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2018年12月18日 交付・修理 身体障がい者手帳をお持ちの方へ、その障がいを補うための補装具を交付（修理）します",
    "officialUrl": "https://www.town.gokase.miyazaki.jp/kakuka/fukushi/syougaihukusi/593.html",
    "sourceName": "障がいのある人のための助成制度"
  },
  {
    "slug": "miyazaki-official-006-025-2026",
    "title": "五ヶ瀬町 成年後見制度利用支援事業",
    "organization": "五ヶ瀬町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "五ヶ瀬町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 請求を行うことが必要と認められる方で、本人に申立て能力がなく、かつ申立てを行う親族がいない場合には、親族に代わり町長が申立てを行います",
    "officialUrl": "https://www.town.gokase.miyazaki.jp/kakuka/fukushi/syougaihukusi/2226.html",
    "sourceName": "成年後見制度利用支援事業"
  },
  {
    "slug": "miyazaki-official-006-026-2026",
    "title": "五ヶ瀬町 【中小企業者の皆様へ】新たな設備導入による生産性向上を応援します",
    "organization": "五ヶ瀬町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "五ヶ瀬町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2018年08月07日 申請について 申請につきましては、 先端設備等導入計画策定の手引き(PDF:1.4MB) を参考にしていただき、以下の書類を五ヶ瀬町役場企画課へご提出ください",
    "officialUrl": "https://www.town.gokase.miyazaki.jp/kakuka/kikaku/516.html",
    "sourceName": "【中小企業者の皆様へ】新たな設備導入による生産性向上を応援します"
  },
  {
    "slug": "miyazaki-official-006-027-2026",
    "title": "五ヶ瀬町 固定資産税の減免",
    "organization": "五ヶ瀬町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "五ヶ瀬町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年05月27日 固定資産税の減免 Tweet 更新日：2024年05月27日 ・生活保護を受けるようになった ・災害等により、固定資産が被害を受けた ・公益のために固定資産を使用する（公民館や消防団施設など） など以上の条件に該当する場合は、固定資産税が減",
    "officialUrl": "https://www.town.gokase.miyazaki.jp/kakuka/choumin/kotei/803.html",
    "sourceName": "固定資産税の減免"
  },
  {
    "slug": "miyazaki-official-006-028-2026",
    "title": "五ヶ瀬町 障がいのある人のための医療制度",
    "organization": "五ヶ瀬町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "五ヶ瀬町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2018年12月18日 障がいのある人のための医療制度 Tweet 更新日：2018年12月18日 障がいのある人のための医療制度 ・重度心身障がい者（児）医療費の助成 身体障がい者手帳および療育手帳で重度の方へ保険診療による自己負担の一部を助成します。なお、一定",
    "officialUrl": "https://www.town.gokase.miyazaki.jp/kakuka/fukushi/syougaihukusi/567.html",
    "sourceName": "障がいのある人のための医療制度"
  }
];
