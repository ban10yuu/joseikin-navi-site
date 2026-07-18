const okinawaOfficial008Grants: Array<{
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
    "slug": "okinawa-official-008-001-2026",
    "title": "伊平屋村 伊平屋村各種祝金制度のご案内",
    "organization": "伊平屋村",
    "maxAmount": "上限100万円",
    "maxAmountNum": 1000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "伊平屋村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給",
    "officialUrl": "https://www.vill.iheya.okinawa.jp/soshiki/3/3496.html",
    "sourceName": "伊平屋村各種祝金制度のご案内"
  },
  {
    "slug": "okinawa-official-008-002-2026",
    "title": "伊平屋村 伊平屋村催事出店支援事業補助金",
    "organization": "伊平屋村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊平屋村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請・届け出でさがす 注目ワード 確定申告 ごみの収集日 フェリー3 ふるさと納税 いへやまつり てるしの 伊平屋村産業経済活性化協議会 伊平屋村求人情報 くらし 健康・福祉 しごと 観光 村政情報 現在地 トップページ > 分類でさがす >",
    "officialUrl": "https://www.vill.iheya.okinawa.jp/soshiki/9/2695.html",
    "sourceName": "伊平屋村催事出店支援事業補助金"
  },
  {
    "slug": "okinawa-official-008-003-2026",
    "title": "伊是名村 母子及び父子家庭等医療費助成制度",
    "organization": "伊是名村",
    "maxAmount": "1人1か月1診療機関につき1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "伊是名村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請書、住民票、所得証明、通帳、健康保険証、印鑑等が必要",
    "officialUrl": "https://vill.izena.okinawa.jp/lifeevent/ninshin/1539762860/",
    "sourceName": "母子及び父子家庭等医療費助成制度"
  },
  {
    "slug": "okinawa-official-008-004-2026",
    "title": "伊是名村 児童手当",
    "organization": "伊是名村",
    "maxAmount": "支給額は3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊是名村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給対象は高校生年代、18歳の誕生日後の最初の3月31日までの児童を養育している方",
    "officialUrl": "https://vill.izena.okinawa.jp/lifeevent/kosodate/1539761543/",
    "sourceName": "児童手当"
  },
  {
    "slug": "okinawa-official-008-005-2026",
    "title": "伊是名村 農業次世代人材投資事業",
    "organization": "伊是名村",
    "maxAmount": "1人あたり年間150万円",
    "maxAmountNum": 1500000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊是名村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付し、就農意欲の喚起と就農後の定着を図る",
    "officialUrl": "https://vill.izena.okinawa.jp/lifeevent/shushoku/1539832415/",
    "sourceName": "農業次世代人材投資事業"
  },
  {
    "slug": "okinawa-official-008-006-2026",
    "title": "伊是名村 妊婦健康診査時渡航費等の助成",
    "organization": "伊是名村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "伊是名村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請の方法 1.受付場所：伊是名村保健センター (平日・8時30分～17時15分) 2.必要なもの： (1) 妊婦健康診査時渡航費等助成申請用紙 &rarr;",
    "officialUrl": "https://vill.izena.okinawa.jp/lifeevent/ninshin/1539762747/1547608533/",
    "sourceName": "妊婦健康診査時渡航費等の助成"
  },
  {
    "slug": "okinawa-official-008-007-2026",
    "title": "伊是名村 こども医療費助成",
    "organization": "伊是名村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "伊是名村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請場所 伊是名村保健センター（平日：8時30分～17時15分） 申請に必要なもの 1. こども医療費助成金受給資格認定申請書 2.印鑑 3.通帳の写し（保護者名義の通帳） 4.保険証の写し（お子様の保険証） 5.（転入してきた方）前年度の所得",
    "officialUrl": "https://vill.izena.okinawa.jp/lifeevent/kosodate/1539770748/1547629178/",
    "sourceName": "こども医療費助成"
  },
  {
    "slug": "okinawa-official-008-008-2026",
    "title": "伊是名村 伊是名村中小企業者等月次支援金",
    "organization": "伊是名村",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊是名村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "伊是名村中小企業者等月次支援金事業に関して 最終更新日：2022 01 19 支援金の目的 沖縄県が新型インフルエンザ等対策措置法に基づく緊急事態措置または、 まん延防止重点措置を実施すべき区域にしていされる期間内において２０２１年4月以降",
    "officialUrl": "https://vill.izena.okinawa.jp/topics/1642557311/",
    "sourceName": "伊是名村中小企業者等月次支援金"
  },
  {
    "slug": "okinawa-official-008-009-2026",
    "title": "伊是名村 伊是名村事業者等家賃補助事業",
    "organization": "伊是名村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊是名村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付する事業を実施いたします",
    "officialUrl": "https://vill.izena.okinawa.jp/topics/1596156412/",
    "sourceName": "伊是名村事業者等家賃補助事業"
  },
  {
    "slug": "okinawa-official-008-010-2026",
    "title": "伊是名村 伊是名村子育て世帯への臨時特別給付金",
    "organization": "伊是名村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊是名村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和2年3月31日 支給します",
    "officialUrl": "https://vill.izena.okinawa.jp/topics/1589537993/",
    "sourceName": "伊是名村子育て世帯への臨時特別給付金"
  },
  {
    "slug": "okinawa-official-008-011-2026",
    "title": "伊是名村 伊是名村植物工場整備事業補助金",
    "organization": "伊是名村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊是名村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付要綱 « 前の記事へ 次の記事へ » 最近の記事 2026.07.14 入札公告（事後審査型一般競争入札 ・農林事業・農道整備工事） 2026.",
    "officialUrl": "https://vill.izena.okinawa.jp/topics/1540886874/",
    "sourceName": "伊是名村植物工場整備事業補助金"
  },
  {
    "slug": "okinawa-official-008-012-2026",
    "title": "伊是名村 産婦健康診査の公費助成",
    "organization": "伊是名村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "伊是名村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和2年4月1日 産婦健康診査の公費助成について 産婦健康診査（産婦健診）の助成を開始します 伊是名村では、令和2年4月1日以降に出産される方を対象に、産婦健診の助成を始めます。 出産後間もない時期は、ホルモンバランスの大きな変化や赤ちゃん中心の生活に変わる",
    "officialUrl": "https://vill.izena.okinawa.jp/lifeevent/ninshin/1539762747/1589939378/",
    "sourceName": "産婦健康診査の公費助成"
  },
  {
    "slug": "okinawa-official-008-013-2026",
    "title": "伊是名村 伊是名村修学援助給付金",
    "organization": "伊是名村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "伊是名村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和2年7月1日 申請を令和2年7月1日から受け付けますので、上記に該当 する学生のいるご家庭は、修学している事が分かる「在学証明書」を 添付し、申請書と併せてご提出をお願いいたします",
    "officialUrl": "https://vill.izena.okinawa.jp/topics/1594279360/",
    "sourceName": "伊是名村修学援助給付金"
  },
  {
    "slug": "okinawa-official-008-014-2026",
    "title": "伊是名村 伊是名村育英基金奨学金",
    "organization": "伊是名村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊是名村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "募集について 1",
    "officialUrl": "https://vill.izena.okinawa.jp/lifeevent/admission/syougakukin/",
    "sourceName": "伊是名村育英基金奨学金"
  },
  {
    "slug": "okinawa-official-008-015-2026",
    "title": "久米島町 企業・団体における交流応援補助事業",
    "organization": "久米島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "久米島町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付",
    "officialUrl": "https://www.town.kumejima.okinawa.jp/docs/2018080300055/",
    "sourceName": "企業・団体における交流応援補助事業"
  },
  {
    "slug": "okinawa-official-008-016-2026",
    "title": "久米島町 幼児教育・保育無償化",
    "organization": "久米島町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "久米島町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請・認定手続きは公式ページの説明資料に従う",
    "officialUrl": "https://www.town.kumejima.okinawa.jp/docs/2019092000018/",
    "sourceName": "幼児教育・保育無償化"
  },
  {
    "slug": "okinawa-official-008-017-2026",
    "title": "久米島町 国民健康保険の保険税減免",
    "organization": "久米島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "久米島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請書類は公式ページの案内に従う",
    "officialUrl": "https://www.town.kumejima.okinawa.jp/docs/2020051900010/",
    "sourceName": "国民健康保険の保険税減免"
  },
  {
    "slug": "okinawa-official-008-018-2026",
    "title": "久米島町 母子及び父子家庭等医療費助成",
    "organization": "久米島町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "久米島町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請していた医療費について、受給資格者証を県内協力医療機関窓口で提示すると自動償還方式により助成を受けられる",
    "officialUrl": "https://www.town.kumejima.okinawa.jp/docs/2019112600013/",
    "sourceName": "母子及び父子家庭等医療費助成"
  },
  {
    "slug": "okinawa-official-008-019-2026",
    "title": "久米島町 久米島町ファミリーサポートセンター利用支援",
    "organization": "久米島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "久米島町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "久米島町ファミリーサポートセンター。地域で子育てをサポートする会員組織で、子どもの預かりや送迎等を有償で支援。利用料金や援助活動の内容、会員登録、申込み方法は公式ページに従う。子育て世帯の一時的な保育・送迎負担を軽減する支援。",
    "officialUrl": "https://www.town.kumejima.okinawa.jp/docs/2019121000019/",
    "sourceName": "久米島町ファミリーサポートセンター利用支援"
  },
  {
    "slug": "okinawa-official-008-020-2026",
    "title": "久米島町 物価高騰重点支援臨時交付金現金給付事業",
    "organization": "久米島町",
    "maxAmount": "1人あたり18,000円",
    "maxAmountNum": 18000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "久米島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年2月1日 交付金現金給付事業は、エネルギー・食料品価格等の物価高騰の影響を受けた生活者を支援するため、2026年2月1日時点で久米島町の住民基本台帳に記録されている方へ1人あたり18,000円を給付",
    "officialUrl": "https://www.town.kumejima.okinawa.jp/docs/2026022600026/",
    "sourceName": "物価高騰重点支援臨時交付金現金給付事業"
  },
  {
    "slug": "okinawa-official-008-021-2026",
    "title": "八重瀬町 八重瀬町児童生徒の派遣費用に関する助成金",
    "organization": "八重瀬町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "八重瀬町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給",
    "officialUrl": "https://www.town.yaese.lg.jp/docs/2026042200015/",
    "sourceName": "八重瀬町児童生徒の派遣費用に関する助成金"
  },
  {
    "slug": "okinawa-official-008-022-2026",
    "title": "多良間村 多良間村移住者支援策",
    "organization": "多良間村",
    "maxAmount": "1世帯につき20万円",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良間村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "多良間村で暮らそう。多良間村では移住者支援策として定住促進関係と子ども関係の支援策がある。定住促進関係では、結婚祝金が結婚成立1組に対して15万円、定住奨励金が定住者1世帯につき20万円、定住住宅建築及び購入奨励金が住宅の新築又は購入につい",
    "officialUrl": "https://www.vill.tarama.okinawa.jp/gyousei/kurasou/",
    "sourceName": "多良間村移住者支援策"
  },
  {
    "slug": "okinawa-official-008-023-2026",
    "title": "多良間村 児童手当・児童扶養手当",
    "organization": "多良間村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良間村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給額・条件・申請は公式PDF及び役場案内に従う",
    "officialUrl": "https://www.vill.tarama.okinawa.jp/kurashi/kosodate/jidouteate/",
    "sourceName": "児童手当・児童扶養手当"
  },
  {
    "slug": "okinawa-official-008-024-2026",
    "title": "多良間村 令和8年度地域活性化助成事業（後期）",
    "organization": "多良間村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "多良間村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請手続きは実施要領に従う",
    "officialUrl": "https://www.vill.tarama.okinawa.jp/news/5871/",
    "sourceName": "令和8年度地域活性化助成事業（後期）"
  },
  {
    "slug": "okinawa-official-008-025-2026",
    "title": "多良間村 母子健康手帳の交付と妊婦健康診査補助",
    "organization": "多良間村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "多良間村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2021年02月17日 交付と妊婦健康診査申請について 母子保健法（昭和４０年法律第１４１号）第１３条の規定に基づき妊婦が受ける健康診査を行うことにより、妊婦の健康の保持増進ならびに母子感染の防止を図り健やかな子の出生に寄与することを目的に母子健康手帳の交付と妊婦健康",
    "officialUrl": "https://www.vill.tarama.okinawa.jp/kurashi/kosodate/boshikenkou/",
    "sourceName": "母子健康手帳の交付と妊婦健康診査補助"
  }
];
