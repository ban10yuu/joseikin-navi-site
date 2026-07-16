const hiroshimaOfficial004Grants: Array<{
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
    "slug": "hiroshima-official-004-001-2026",
    "title": "海田町 給付金のお知らせ",
    "organization": "海田町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "海田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月30日 支給予定の給付金の情報 現在、申請受付中の給付金はありません",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/35/135142.html",
    "sourceName": "給付金のお知らせ"
  },
  {
    "slug": "hiroshima-official-004-002-2026",
    "title": "海田町 木造住宅耐震診断・耐震化促進支援補助",
    "organization": "海田町",
    "maxAmount": "上限額6万円",
    "maxAmountNum": 60000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 募集について - 海田町ホームページ（建築営繕室） ページの先頭です",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/41/135776.html",
    "sourceName": "木造住宅耐震診断・耐震化促進支援補助"
  },
  {
    "slug": "hiroshima-official-004-003-2026",
    "title": "海田町 ブロック塀等安全確保事業補助金",
    "organization": "海田町",
    "maxAmount": "上限額１５万円",
    "maxAmountNum": 150000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請ができる方 次のすべてを満たす方が補助金の交付を申請することができます",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/41/135765.html",
    "sourceName": "ブロック塀等安全確保事業補助金"
  },
  {
    "slug": "hiroshima-official-004-004-2026",
    "title": "海田町 水道料金等の福祉減免制度",
    "organization": "海田町",
    "maxAmount": "1人4,976,000円",
    "maxAmountNum": 4976000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 請求額から、お申し込みにより、一定額を減免する制度です",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/32/2186.html",
    "sourceName": "水道料金等の福祉減免制度"
  },
  {
    "slug": "hiroshima-official-004-005-2026",
    "title": "海田町 海田市駅自転車等駐車場の登録利用料金の減免",
    "organization": "海田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "海田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年6月6日 交付を受けている方 ・療育手帳の交付を受けている方 ・精神障害者保健福祉手帳の交付を受けている方 2 減免申請について 海田町役場建設部まちデザイン課（役場3階）において，減免申請書を提出していただくとともに，以下の書類をご",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/22/141768.html",
    "sourceName": "海田市駅自転車等駐車場の登録利用料金の減免"
  },
  {
    "slug": "hiroshima-official-004-006-2026",
    "title": "海田町 精神障害者医療費助成",
    "organization": "海田町",
    "maxAmount": "限度額】扶養親族等の数受給者本人所得制限限度額（令和3年7月末まで）配偶者，扶養義務者等所得制限限度額0人1,695,000円",
    "maxAmountNum": 1695000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "海田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2021年6月25日 交付を受けている人 ・自立支援医療受給者証（精神通院）の交付を受けている人 ・生活保護を受けていない、または被爆者健康手帳の交付を受けていない人 受給資格 ・海田町に住所があること ・健康保険に加入していること ・65歳以上",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/120228.html",
    "sourceName": "精神障害者医療費助成"
  },
  {
    "slug": "hiroshima-official-004-007-2026",
    "title": "海田町 特別障害者手当",
    "organization": "海田町",
    "maxAmount": "支給額【令和8年4月～】月額30,450円",
    "maxAmountNum": 30450,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給されます",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1684.html",
    "sourceName": "特別障害者手当"
  },
  {
    "slug": "hiroshima-official-004-008-2026",
    "title": "海田町 障害児福祉手当",
    "organization": "海田町",
    "maxAmount": "支給額【令和8年4月～】月額16,560円",
    "maxAmountNum": 16560,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給されます",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1146.html",
    "sourceName": "障害児福祉手当"
  },
  {
    "slug": "hiroshima-official-004-009-2026",
    "title": "海田町 特別児童扶養手当",
    "organization": "海田町",
    "maxAmount": "支給額手当支給額1級【令和8年4月～】58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給されます",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1683.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "hiroshima-official-004-010-2026",
    "title": "海田町 海田町障害者施設通所交通費助成",
    "organization": "海田町",
    "maxAmount": "助成額1日あたり280円",
    "maxAmountNum": 280,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年3月1日 支給決定を受け，施設または事業所に通所しているもの 生活介護 自立訓練 就労移行支援 就労継続支援B型 地域活動センター 2 助成額 1日あたり280円を上限として，交通費の一部を助成します",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/2216.html",
    "sourceName": "海田町障害者施設通所交通費助成"
  },
  {
    "slug": "hiroshima-official-004-011-2026",
    "title": "海田町 重度心身障害者医療費の助成",
    "organization": "海田町",
    "maxAmount": "３３０，０００円を限度",
    "maxAmountNum": 330000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "海田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年6月24日 申請には医師の証明書（常時人工呼吸器等装着者証明書）が必要です",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1072.html",
    "sourceName": "重度心身障害者医療費の助成"
  },
  {
    "slug": "hiroshima-official-004-012-2026",
    "title": "海田町 日常生活用具の給付",
    "organization": "海田町",
    "maxAmount": "上限月額階層区分利用者負担上限月額生活保護世帯0円",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "海田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2015年12月1日 申請する必要があります",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1688.html",
    "sourceName": "日常生活用具の給付"
  },
  {
    "slug": "hiroshima-official-004-013-2026",
    "title": "海田町 身体障害者自動車改造費助成",
    "organization": "海田町",
    "maxAmount": "助成額１０万円",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2015年12月1日 支給します",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1179.html",
    "sourceName": "身体障害者自動車改造費助成"
  },
  {
    "slug": "hiroshima-official-004-014-2026",
    "title": "海田町 身体障害者運転免許取得費助成",
    "organization": "海田町",
    "maxAmount": "助成額10万円",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2015年12月1日 身体障害者運転免許取得費助成 - 海田町ホームページ（社会福祉課） ページの先頭です。 メニューを飛ばして本文へ 当サイトはJavaScriptを使用したコンテンツや機能を提供しています。ご利用の際はJavaScriptを有効にしてください",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1178.html",
    "sourceName": "身体障害者運転免許取得費助成"
  },
  {
    "slug": "hiroshima-official-004-015-2026",
    "title": "海田町 心身障害者扶養共済制度掛金助成",
    "organization": "海田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2015年12月1日 心身障害者扶養共済制度掛金助成 - 海田町ホームページ（社会福祉課） ページの先頭です。 メニューを飛ばして本文へ 当サイトはJavaScriptを使用したコンテンツや機能を提供しています。ご利用の際はJavaScriptを有効にしてくださ",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1167.html",
    "sourceName": "心身障害者扶養共済制度掛金助成"
  },
  {
    "slug": "hiroshima-official-004-016-2026",
    "title": "海田町 重度心身障害者介護手当",
    "organization": "海田町",
    "maxAmount": "支給額月額3,000円",
    "maxAmountNum": 3000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2015年12月1日 支給されます",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/1073.html",
    "sourceName": "重度心身障害者介護手当"
  },
  {
    "slug": "hiroshima-official-004-017-2026",
    "title": "海田町 福祉タクシー券助成",
    "organization": "海田町",
    "maxAmount": "助成額福祉タクシー券（640円",
    "maxAmountNum": 640,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2020年2月1日 福祉タクシー券助成 - 海田町ホームページ（社会福祉課） ページの先頭です。 メニューを飛ばして本文へ 当サイトはJavaScriptを使用したコンテンツや機能を提供しています。ご利用の際はJavaScriptを有効にしてください。 検索 ",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/114305.html",
    "sourceName": "福祉タクシー券助成"
  },
  {
    "slug": "hiroshima-official-004-018-2026",
    "title": "海田町 犯罪被害者等日常生活等支援費用助成金",
    "organization": "海田町",
    "maxAmount": "支給額）種別限度額上限家事支援費用助成2,200円",
    "maxAmountNum": 2200,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "海田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年3月23日 支給対象者 犯罪行為により死亡した方のご遺族の場合 犯罪行為により死亡した方の配偶者、被害者の二親等内の親族（いずれの場合も海田町民） 犯罪被害者等が重傷病を負った場合 犯罪行為により重傷病（療養の期間が1か月以上を要すると",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/145130.html",
    "sourceName": "犯罪被害者等日常生活等支援費用助成金"
  },
  {
    "slug": "hiroshima-official-004-019-2026",
    "title": "海田町 低所得者支援給付金（令和6年度拡充分）",
    "organization": "海田町",
    "maxAmount": "1世帯当たり3万円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "海田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年8月1日 受付は令和7年7月31日（木曜日）に終了しました",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/13/138941.html",
    "sourceName": "低所得者支援給付金（令和6年度拡充分）"
  },
  {
    "slug": "hiroshima-official-004-020-2026",
    "title": "海田町 不妊検査・一般不妊治療費の助成",
    "organization": "海田町",
    "maxAmount": "助成額対象となる不妊検査・一般不妊治療にかかった費用のうち、自己負担額の2分の1を助成します（上限5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請日において、夫婦（事実婚関係にある者を含む",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/21/16160.html",
    "sourceName": "不妊検査・一般不妊治療費の助成"
  },
  {
    "slug": "hiroshima-official-004-021-2026",
    "title": "海田町 特定不妊治療支援事業",
    "organization": "海田町",
    "maxAmount": "助成額特定不妊治療に併せて行われた先進医療に要した自己負担額の合計の1/2（上限15万円",
    "maxAmountNum": 150000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "海田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請日において、夫婦（事実婚関係にある者を含む",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/21/14744.html",
    "sourceName": "特定不妊治療支援事業"
  },
  {
    "slug": "hiroshima-official-004-022-2026",
    "title": "海田町 不育治療費の助成",
    "organization": "海田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2023年9月19日 申請時点において夫または妻のどちらかが町内に居住して１年以上経過している方 社団法人日本生殖医学会が認定した生殖医療専門医が所属する医療機関または同等の能力を有する医療機関において、この専門医により不育症と診断され、その治療",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/21/1717.html",
    "sourceName": "不育治療費の助成"
  },
  {
    "slug": "hiroshima-official-004-023-2026",
    "title": "海田町 風しん予防接種費用助成",
    "organization": "海田町",
    "maxAmount": "助成額等対象となるワクチン助成額接種回数麻しん風しん混合ワクチン5,000円",
    "maxAmountNum": 5000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2019年6月27日 申請書を提出してください",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/21/1230.html",
    "sourceName": "風しん予防接種費用助成"
  },
  {
    "slug": "hiroshima-official-004-024-2026",
    "title": "海田町 造血細胞移植等後のワクチン再接種費用助成",
    "organization": "海田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "海田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年1月22日 申請のない場合は助成の対象になりません",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/21/143739.html",
    "sourceName": "造血細胞移植等後のワクチン再接種費用助成"
  },
  {
    "slug": "hiroshima-official-004-025-2026",
    "title": "海田町 骨髄ドナー助成制度",
    "organization": "海田町",
    "maxAmount": "上限額は、14万円",
    "maxAmountNum": 140000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年8月21日 交付対象日に骨髄などの提供が完了し、次に掲げる要件のいずれにも該当する方 （1）骨髄等の提供に係る休業等により経済的負担をした方 （2）骨髄等の提供に係る通院又は入院（骨髄等の採取のための手術及びこれに関連した医療処置によっ",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/21/142584.html",
    "sourceName": "骨髄ドナー助成制度"
  },
  {
    "slug": "hiroshima-official-004-026-2026",
    "title": "海田町 小児慢性特定疾病児童に対する日常生活用具の給付",
    "organization": "海田町",
    "maxAmount": "年額2,400円",
    "maxAmountNum": 2400,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2016年11月28日 申請が必要です） 給付する用具と対象者 種目 対象者 性能等 基準額 便器 常時介助を要する者 小児慢性特定疾病児童等が容易に使用し得るもの",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/21/16432.html",
    "sourceName": "小児慢性特定疾病児童に対する日常生活用具の給付"
  },
  {
    "slug": "hiroshima-official-004-027-2026",
    "title": "海田町 小児慢性特定疾病に伴う県外受診者への交通費助成",
    "organization": "海田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "海田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2016年11月28日 申請日において，海田町の住民基本台帳に記録されている人 助成金額 県外医療機関が属する地域 助成区分１ 助成区分２ 助成区分３ 北海道・東北地方・関東地方 37,000円 55,000円 74,000円 中部地方 27,00",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/21/16431.html",
    "sourceName": "小児慢性特定疾病に伴う県外受診者への交通費助成"
  },
  {
    "slug": "hiroshima-official-004-028-2026",
    "title": "海田町 家庭用防犯カメラ等設置費補助金",
    "organization": "海田町",
    "maxAmount": "最大1万円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "海田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 交付金を活用した事業です",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/37/143925.html",
    "sourceName": "家庭用防犯カメラ等設置費補助金"
  },
  {
    "slug": "hiroshima-official-004-029-2026",
    "title": "海田町 飼い主のいない猫の不妊去勢手術費補助制度",
    "organization": "海田町",
    "maxAmount": "補助金額メス1匹につき15,000円",
    "maxAmountNum": 15000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "海田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年1月1日 交付する制度を設けています",
    "officialUrl": "https://www.town.kaita.lg.jp/soshiki/37/141979.html",
    "sourceName": "飼い主のいない猫の不妊去勢手術費補助制度"
  },
  {
    "slug": "hiroshima-official-004-030-2026",
    "title": "熊野町 妊婦のための支援給付",
    "organization": "熊野町",
    "maxAmount": "1人につき5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "熊野町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 支給されます",
    "officialUrl": "https://www.town.kumano.lg.jp/10/7/4995.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "hiroshima-official-004-031-2026",
    "title": "熊野町 出産育児一時金",
    "organization": "熊野町",
    "maxAmount": "1人につき50万円",
    "maxAmountNum": 500000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "熊野町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年03月31日 支給されます",
    "officialUrl": "https://www.town.kumano.lg.jp/10/7/6804.html",
    "sourceName": "出産育児一時金"
  },
  {
    "slug": "hiroshima-official-004-032-2026",
    "title": "熊野町 産前産後支援ヘルパー派遣事業",
    "organization": "熊野町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "熊野町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 交付後）から産後1年までの間 支援の内容 育児支援 授乳 おむつ交換 沐浴のお手伝い 適切な育児環境の整備 育児に関する相談 など 家事支援 食事の準備、後片付け 衣類の洗濯、補修 居室等の掃除、整理整頓 生活必需品の買い物",
    "officialUrl": "https://www.town.kumano.lg.jp/10/7/4994.html",
    "sourceName": "産前産後支援ヘルパー派遣事業"
  },
  {
    "slug": "hiroshima-official-004-033-2026",
    "title": "熊野町 産後ケア事業",
    "organization": "熊野町",
    "maxAmount": "上限利用料（A＋B＋Cの合計利用日数が5日目まで）利用料（A＋B＋Cの合計利用日数が6日目から）宿泊型（A）7日1泊2日：6,200円",
    "maxAmountNum": 6200,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "熊野町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 申請方法 利用希望日までに「熊野町産後ケア事業利用申請書兼情報提供等同意書」を健康推進課に提出してください",
    "officialUrl": "https://www.town.kumano.lg.jp/10/7/6607.html",
    "sourceName": "産後ケア事業"
  },
  {
    "slug": "hiroshima-official-004-034-2026",
    "title": "熊野町 不妊検査費等助成事業",
    "organization": "熊野町",
    "maxAmount": "助成額夫婦がともに受けた不妊検査等に係る費用の自己負担額の1/2（上限5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "熊野町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年03月31日 申請が可能です",
    "officialUrl": "https://www.town.kumano.lg.jp/10/7/6827.html",
    "sourceName": "不妊検査費等助成事業"
  },
  {
    "slug": "hiroshima-official-004-035-2026",
    "title": "熊野町 特定不妊治療支援事業",
    "organization": "熊野町",
    "maxAmount": "助成額先進医療に要した自己負担額の合計の1/2（千円未満切捨て）【特定不妊治療】【男性不妊治療】それぞれ上限5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "熊野町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年03月31日 申請日において夫婦またはいずれか一方が熊野町に住所を有すること 特定不妊治療以外の治療法によって妊娠の見込みがないか極めて少ないと医師が診断し、生殖補助医療の保険診療を行う保険医療機関において、治療を受けたこと 治療期間初日",
    "officialUrl": "https://www.town.kumano.lg.jp/10/7/6828.html",
    "sourceName": "特定不妊治療支援事業"
  },
  {
    "slug": "hiroshima-official-004-036-2026",
    "title": "熊野町 不育症治療費等助成事業",
    "organization": "熊野町",
    "maxAmount": "助成額1年度あたり30万円",
    "maxAmountNum": 300000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "熊野町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年03月31日 申請が可能です",
    "officialUrl": "https://www.town.kumano.lg.jp/10/7/6830.html",
    "sourceName": "不育症治療費等助成事業"
  },
  {
    "slug": "hiroshima-official-004-037-2026",
    "title": "熊野町 未熟児養育医療",
    "organization": "熊野町",
    "maxAmount": "年額15,000円",
    "maxAmountNum": 15000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "熊野町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年03月31日 申請について 未熟児養育医療としての療育が必要となった際には速やかに、次の書類をそろえて熊野町健康推進課に申請してください",
    "officialUrl": "https://www.town.kumano.lg.jp/10/7/4996.html",
    "sourceName": "未熟児養育医療"
  },
  {
    "slug": "hiroshima-official-004-038-2026",
    "title": "熊野町 熊野町地方就職学生支援金",
    "organization": "熊野町",
    "maxAmount": "支給額：15,000円",
    "maxAmountNum": 15000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "熊野町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月31日 支給します",
    "officialUrl": "https://www.town.kumano.lg.jp/8/5/2/3767.html",
    "sourceName": "熊野町地方就職学生支援金"
  },
  {
    "slug": "hiroshima-official-004-039-2026",
    "title": "熊野町 定住支援制度",
    "organization": "熊野町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "熊野町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年03月31日 定住支援制度について／熊野町ホームページ スマートフォン版を表示 本文へ 文字サイズ 標準 （初期状態） 標準 に戻す 拡大 （初期状態） 拡大 拡大（最大状態） 背景色変更 黒 背景色を黒色にする 青 背景色を青色にする 標準 背景色を元",
    "officialUrl": "https://www.town.kumano.lg.jp/8/4/3770.html",
    "sourceName": "定住支援制度"
  },
  {
    "slug": "hiroshima-official-004-040-2026",
    "title": "坂町 坂町移住支援金",
    "organization": "坂町",
    "maxAmount": "支給額単身世帯の場合、60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "坂町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和7年8月8日 申請受付を終了しました】 坂町移住支援金（東京圏からの移住・マッチング支援事業） &#8211; 広島県 坂町役場 ホームページ くらしや行政 坂町の魅力 メニュー Fキーで Open escキーで Close 検索してさが",
    "officialUrl": "https://www.town.saka.lg.jp/2022/12/15/%e5%9d%82%e7%94%ba%e7%a7%bb%e4%bd%8f%e6%94%af%e6%8f%b4%e9%87%91%ef%bc%88%e6%9d%b1%e4%ba%ac%e5%9c%8f%e3%81%8b%e3%82%89%e3%81%ae%e7%a7%bb%e4%bd%8f%e3%83%bb%e3%83%9e%e3%83%83%e3%83%81%e3%83%b3%e3%82%b0/",
    "sourceName": "坂町移住支援金"
  },
  {
    "slug": "hiroshima-official-004-041-2026",
    "title": "坂町 児童手当",
    "organization": "坂町",
    "maxAmount": "限度額」未満の場合、下記の児童手当の支給額を、下記表の②「所得上限限度額」未満の場合、特例給付（児童１人月額５,０００円",
    "maxAmountNum": 5000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "坂町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和6年12月12日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/2024/08/06/%e5%85%90%e7%ab%a5%e6%89%8b%e5%bd%93/",
    "sourceName": "児童手当"
  },
  {
    "slug": "hiroshima-official-004-042-2026",
    "title": "坂町 難病医療費助成制度",
    "organization": "坂町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "坂町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年7月17日 受付窓口について &#8211; 広島県 坂町役場 ホームページ くらしや行政 坂町の魅力 メニュー Fキーで Open escキーで Close 検索してさがす 検索: 役場に問い合わせる --> 組織でさがす 総務課 坂",
    "officialUrl": "https://www.town.saka.lg.jp/2025/07/17/%e9%9b%a3%e7%97%85%e5%8c%bb%e7%99%82%e8%b2%bb%e5%8a%a9%e6%88%90%e5%88%b6%e5%ba%a6%e3%81%a8%e5%8f%97%e4%bb%98%e7%aa%93%e5%8f%a3%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/",
    "sourceName": "難病医療費助成制度"
  },
  {
    "slug": "hiroshima-official-004-043-2026",
    "title": "坂町 令和７年度物価高騰対応支援給付金",
    "organization": "坂町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "坂町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年2月5日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/2026/01/29/%e4%bb%a4%e5%92%8c%ef%bc%97%e5%b9%b4%e5%ba%a6%e7%89%a9%e4%be%a1%e9%ab%98%e9%a8%b0%e5%af%be%e5%bf%9c%e6%94%af%e6%8f%b4%e7%b5%a6%e4%bb%98%e9%87%91%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/",
    "sourceName": "令和７年度物価高騰対応支援給付金"
  },
  {
    "slug": "hiroshima-official-004-044-2026",
    "title": "坂町 住宅に関する補助制度",
    "organization": "坂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "坂町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年4月2日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/category/%e3%81%8f%e3%82%89%e3%81%97%e3%83%bb%e6%89%8b%e7%b6%9a%e3%81%8d/%e4%bd%8f%e3%81%be%e3%81%84%e3%83%bb%e4%b8%8a%e4%b8%8b%e6%b0%b4%e9%81%93/%e4%bd%8f%e5%ae%85%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e8%a3%9c%e5%8a%a9%e5%88%b6%e5%ba%a6/",
    "sourceName": "住宅に関する補助制度"
  },
  {
    "slug": "hiroshima-official-004-045-2026",
    "title": "坂町 坂町物価高騰対応支援給付金",
    "organization": "坂町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "坂町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年2月5日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/category/%e7%a6%8f%e7%a5%89%e3%83%bb%e4%bb%8b%e8%ad%b7/%e7%94%9f%e6%b4%bb%e6%94%af%e6%8f%b4-%e7%a6%8f%e7%a5%89%e3%83%bb%e4%bb%8b%e8%ad%b7/%e5%9d%82%e7%94%ba%e7%89%a9%e4%be%a1%e9%ab%98%e9%a8%b0%e5%af%be%e5%bf%9c%e6%94%af%e6%8f%b4%e7%b5%a6%e4%bb%98%e9%87%91/",
    "sourceName": "坂町物価高騰対応支援給付金"
  },
  {
    "slug": "hiroshima-official-004-046-2026",
    "title": "坂町 生活困窮者自立支援制度",
    "organization": "坂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "坂町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年10月1日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/category/%e7%a6%8f%e7%a5%89%e3%83%bb%e4%bb%8b%e8%ad%b7/%e7%94%9f%e6%b4%bb%e6%94%af%e6%8f%b4-%e7%a6%8f%e7%a5%89%e3%83%bb%e4%bb%8b%e8%ad%b7/%e7%94%9f%e6%b4%bb%e5%9b%b0%e7%aa%ae%e8%80%85%e8%87%aa%e7%ab%8b%e6%94%af%e6%8f%b4%e5%88%b6%e5%ba%a6/",
    "sourceName": "生活困窮者自立支援制度"
  },
  {
    "slug": "hiroshima-official-004-047-2026",
    "title": "坂町 交通に関する支援",
    "organization": "坂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "坂町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和4年7月9日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/category/%e7%a6%8f%e7%a5%89%e3%83%bb%e4%bb%8b%e8%ad%b7/%e9%9a%9c%e5%ae%b3%e8%80%85%e3%81%ae%e6%96%b9%e3%81%b8/%e4%ba%a4%e9%80%9a%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e6%94%af%e6%8f%b4/",
    "sourceName": "交通に関する支援"
  },
  {
    "slug": "hiroshima-official-004-048-2026",
    "title": "坂町 医療に関する支援",
    "organization": "坂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "坂町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和6年12月24日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/category/%e7%a6%8f%e7%a5%89%e3%83%bb%e4%bb%8b%e8%ad%b7/%e9%9a%9c%e5%ae%b3%e8%80%85%e3%81%ae%e6%96%b9%e3%81%b8/%e5%8c%bb%e7%99%82%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e6%94%af%e6%8f%b4/",
    "sourceName": "医療に関する支援"
  },
  {
    "slug": "hiroshima-official-004-049-2026",
    "title": "坂町 障害者手当",
    "organization": "坂町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "坂町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "令和8年3月10日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/category/%e7%a6%8f%e7%a5%89%e3%83%bb%e4%bb%8b%e8%ad%b7/%e9%9a%9c%e5%ae%b3%e8%80%85%e3%81%ae%e6%96%b9%e3%81%b8/%e9%9a%9c%e5%ae%b3%e8%80%85%e6%89%8b%e5%bd%93/",
    "sourceName": "障害者手当"
  },
  {
    "slug": "hiroshima-official-004-050-2026",
    "title": "坂町 坂町住宅用防犯対策補助金",
    "organization": "坂町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "坂町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年4月9日 申請 スポーツ・文化・歴史 スポーツ オリエンテーリングコース スポーツ等の結果 令和８年度 令和７年度 令和６年度 過去の結果について 令和４年度 令和５年度 坂町スポーツ少年団 坂町スポーツ推進委員協議会 坂町体育協会 ",
    "officialUrl": "https://www.town.saka.lg.jp/category/%e9%98%b2%e7%81%bd%e3%83%bb%e9%98%b2%e7%8a%af/%e9%98%b2%e7%8a%af%e3%83%bb%e4%ba%a4%e9%80%9a%e5%ae%89%e5%85%a8/%e5%9d%82%e7%94%ba%e4%bd%8f%e5%ae%85%e7%94%a8%e9%98%b2%e7%8a%af%e5%af%be%e7%ad%96%e8%a3%9c%e5%8a%a9%e9%87%91/",
    "sourceName": "坂町住宅用防犯対策補助金"
  },
  {
    "slug": "hiroshima-official-004-051-2026",
    "title": "安芸太田町 各種支援情報",
    "organization": "安芸太田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "安芸太田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請に基づき移住支援金を支給する制度です",
    "officialUrl": "https://www.akiota.jp/site/ijyu/1354.html",
    "sourceName": "各種支援情報"
  },
  {
    "slug": "hiroshima-official-004-052-2026",
    "title": "安芸太田町 定住応援補助金",
    "organization": "安芸太田町",
    "maxAmount": "補助金額区分補助対象経費子育て世帯移住者補助内容住宅取得（新築・建売）500万円",
    "maxAmountNum": 5000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "安芸太田町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請日時点に、夫婦のいずれかが満40歳以下の夫婦もしくは満15歳以下の子どもが同居する世帯 移住者 転入時点において、1年以上他の市区町村において住民基本台帳に記録されている者で、定住の意思を持って安芸太田町に転入しようとす",
    "officialUrl": "https://www.akiota.jp/site/ijyu/17563.html",
    "sourceName": "定住応援補助金"
  },
  {
    "slug": "hiroshima-official-004-053-2026",
    "title": "安芸太田町 移住・マッチング支援事業",
    "organization": "安芸太田町",
    "maxAmount": "1世帯につき100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "安芸太田町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請に基づき移住支援金を支給する制度です",
    "officialUrl": "https://www.akiota.jp/site/ijyu/7933.html",
    "sourceName": "移住・マッチング支援事業"
  },
  {
    "slug": "hiroshima-official-004-054-2026",
    "title": "安芸太田町 子育て世帯引越し費用補助金",
    "organization": "安芸太田町",
    "maxAmount": "補助額補助額50,000円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "安芸太田町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 支給については、moricaで行います",
    "officialUrl": "https://www.akiota.jp/site/ijyu/12010.html",
    "sourceName": "子育て世帯引越し費用補助金"
  },
  {
    "slug": "hiroshima-official-004-055-2026",
    "title": "安芸太田町 住宅改修助成金交付制度",
    "organization": "安芸太田町",
    "maxAmount": "補助金額5万円",
    "maxAmountNum": 50000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "安芸太田町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請でさがす ライフイベント 妊娠・出産 子育て・教育 就職・離職 結婚・離婚 引越・住まい 健康・医療 高齢・福祉 おくやみ もりみん おすすめ！ ＜外部リンク＞ 現在地 トップページ &gt; 組織でさがす &gt; 本",
    "officialUrl": "https://www.akiota.jp/soshiki/9/1441.html",
    "sourceName": "住宅改修助成金交付制度"
  },
  {
    "slug": "hiroshima-official-004-056-2026",
    "title": "安芸太田町 遠距離通勤者応援補助",
    "organization": "安芸太田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "安芸太田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 支給となります",
    "officialUrl": "https://www.akiota.jp/site/ijyu/1109.html",
    "sourceName": "遠距離通勤者応援補助"
  },
  {
    "slug": "hiroshima-official-004-057-2026",
    "title": "安芸太田町 通学費補助制度",
    "organization": "安芸太田町",
    "maxAmount": "補助額一覧【年額】通学手段加計高等学校町外高校・大学等公共交通（バス）32,000円",
    "maxAmountNum": 32000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "安芸太田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請者】 町内に在住する高校学校・特別支援学校高等部等は対象者の保護者 専門学校、短大、大学、大学院に通学する学生については本人 補助額一覧 【年額】 通学手段 加計高等学校 町外高校・大学等 公共交通 （バス） 32,00",
    "officialUrl": "https://www.akiota.jp/site/ijyu/1334.html",
    "sourceName": "通学費補助制度"
  },
  {
    "slug": "hiroshima-official-004-058-2026",
    "title": "安芸太田町 乳幼児・子ども医療費支給事業",
    "organization": "安芸太田町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "安芸太田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2021年8月20日 申請でさがす ライフイベント 妊娠・出産 子育て・教育 就職・離職 結婚・離婚 引越・住まい 健康・医療 高齢・福祉 おくやみ もりみん おすすめ！ ＜外部リンク＞ 現在地 トップページ &gt; 組織でさがす &gt; 本",
    "officialUrl": "https://www.akiota.jp/soshiki/7/1229.html",
    "sourceName": "乳幼児・子ども医療費支給事業"
  },
  {
    "slug": "hiroshima-official-004-059-2026",
    "title": "安芸太田町 妊産婦健康診査交通費助成",
    "organization": "安芸太田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "安芸太田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2021年8月21日 申請でさがす ライフイベント 妊娠・出産 子育て・教育 就職・離職 結婚・離婚 引越・住まい 健康・医療 高齢・福祉 おくやみ もりみん おすすめ！ ＜外部リンク＞ 現在地 トップページ &gt; 申請・手続きナビ &gt;",
    "officialUrl": "https://www.akiota.jp/site/tetsuduki/1436.html",
    "sourceName": "妊産婦健康診査交通費助成"
  },
  {
    "slug": "hiroshima-official-004-060-2026",
    "title": "安芸太田町 不妊治療費助成事業",
    "organization": "安芸太田町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "安芸太田町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2022年4月1日 申請でさがす ライフイベント 妊娠・出産 子育て・教育 就職・離職 結婚・離婚 引越・住まい 健康・医療 高齢・福祉 おくやみ もりみん おすすめ！ ＜外部リンク＞ 現在地 トップページ &gt; 申請・手続きナビ &gt;",
    "officialUrl": "https://www.akiota.jp/site/tetsuduki/1129.html",
    "sourceName": "不妊治療費助成事業"
  },
  {
    "slug": "hiroshima-official-004-061-2026",
    "title": "安芸太田町 がんばるビジネス応援補助金",
    "organization": "安芸太田町",
    "maxAmount": "上限:100万円",
    "maxAmountNum": 1000000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "安芸太田町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 申請について - 安芸太田町公式サイト ページの先頭です",
    "officialUrl": "https://www.akiota.jp/soshiki/8/18186.html",
    "sourceName": "がんばるビジネス応援補助金"
  },
  {
    "slug": "hiroshima-official-004-062-2026",
    "title": "北広島町 地域施工支援事業補助金",
    "organization": "北広島町",
    "maxAmount": "助成額）問地域施工支援事業補助金国または県の補助対象とならない道路、橋梁、公共性の高いかんがい施設などの改良や、修繕事業を実施する場合の工事費・原材料支給・機械借上料【工事費】10万円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北広島町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年1月15日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/site/ho-infra/",
    "sourceName": "地域施工支援事業補助金"
  },
  {
    "slug": "hiroshima-official-004-063-2026",
    "title": "北広島町 小型合併処理浄化槽設置整備事業補助金",
    "organization": "北広島町",
    "maxAmount": "補助金額5人槽554,000円",
    "maxAmountNum": 554000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北広島町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年3月1日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/14/1693.html",
    "sourceName": "小型合併処理浄化槽設置整備事業補助金"
  },
  {
    "slug": "hiroshima-official-004-064-2026",
    "title": "北広島町 生活用取水施設整備補助金",
    "organization": "北広島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "北広島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年6月28日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/14/1692.html",
    "sourceName": "生活用取水施設整備補助金"
  },
  {
    "slug": "hiroshima-official-004-065-2026",
    "title": "北広島町 木造住宅耐震診断補助事業",
    "organization": "北広島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "北広島町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年1月31日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/12/1421.html",
    "sourceName": "木造住宅耐震診断補助事業"
  },
  {
    "slug": "hiroshima-official-004-066-2026",
    "title": "北広島町 北広島町空き家活用定住促進事業補助金",
    "organization": "北広島町",
    "maxAmount": "補助金額対象事業費の3分の1（上限100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "北広島町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年3月1日 申請してください",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/site/teijuu-joho/29600.html",
    "sourceName": "北広島町空き家活用定住促進事業補助金"
  },
  {
    "slug": "hiroshima-official-004-067-2026",
    "title": "北広島町 ビジネス創造支援補助金",
    "organization": "北広島町",
    "maxAmount": "上限200万円",
    "maxAmountNum": 2000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "北広島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/11/23512.html",
    "sourceName": "ビジネス創造支援補助金"
  },
  {
    "slug": "hiroshima-official-004-068-2026",
    "title": "北広島町 事業承継支援補助金",
    "organization": "北広島町",
    "maxAmount": "上限20万円",
    "maxAmountNum": 200000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北広島町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2021年4月1日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/11/23509.html",
    "sourceName": "事業承継支援補助金"
  },
  {
    "slug": "hiroshima-official-004-069-2026",
    "title": "北広島町 地域産業活性化オフィス誘致促進事業補助金",
    "organization": "北広島町",
    "maxAmount": "補助額対象経費の合計額の１／２以内（1,000円",
    "maxAmountNum": 1000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北広島町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年1月5日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/11/52023.html",
    "sourceName": "地域産業活性化オフィス誘致促進事業補助金"
  },
  {
    "slug": "hiroshima-official-004-070-2026",
    "title": "北広島町 企業立地奨励制度 設備取得奨励金",
    "organization": "北広島町",
    "maxAmount": "限度額1,000万円",
    "maxAmountNum": 10000000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "北広島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年11月21日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/11/4855.html",
    "sourceName": "企業立地奨励制度 設備取得奨励金"
  },
  {
    "slug": "hiroshima-official-004-071-2026",
    "title": "北広島町 有害獣被害防止事業補助金",
    "organization": "北広島町",
    "maxAmount": "限度額補助基準補助率及び限度額補助対象者補助要件補助率補助限度額農業者等（個人）１箇所３万円",
    "maxAmountNum": 30000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北広島町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年4月1日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/10/43689.html",
    "sourceName": "有害獣被害防止事業補助金"
  },
  {
    "slug": "hiroshima-official-004-072-2026",
    "title": "北広島町 不妊治療費助成事業",
    "organization": "北広島町",
    "maxAmount": "助成額を除いた費用助成限度額1回20万円",
    "maxAmountNum": 200000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "北広島町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2020年5月28日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/8/1398.html",
    "sourceName": "不妊治療費助成事業"
  },
  {
    "slug": "hiroshima-official-004-073-2026",
    "title": "北広島町 不妊検査・一般不妊治療費助成事業",
    "organization": "北広島町",
    "maxAmount": "上限）不妊検査・一般不妊治療開始時の妻の年齢が35歳以上39歳以下の場合、対象となる検査・治療費の2分の1の額（夫婦1組につき5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "北広島町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2018年4月1日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/8/1375.html",
    "sourceName": "不妊検査・一般不妊治療費助成事業"
  },
  {
    "slug": "hiroshima-official-004-074-2026",
    "title": "北広島町 不育症治療費助成事業",
    "organization": "北広島町",
    "maxAmount": "限度額1回30万円",
    "maxAmountNum": 300000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "北広島町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2020年5月28日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/8/1366.html",
    "sourceName": "不育症治療費助成事業"
  },
  {
    "slug": "hiroshima-official-004-075-2026",
    "title": "北広島町 介護職員研修受講費補助金",
    "organization": "北広島町",
    "maxAmount": "最大3万円",
    "maxAmountNum": 30000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北広島町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2018年4月1日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/9/1381.html",
    "sourceName": "介護職員研修受講費補助金"
  },
  {
    "slug": "hiroshima-official-004-076-2026",
    "title": "北広島町 地域住民グループ支援事業補助金",
    "organization": "北広島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北広島町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2023年4月3日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/9/13549.html",
    "sourceName": "地域住民グループ支援事業補助金"
  },
  {
    "slug": "hiroshima-official-004-077-2026",
    "title": "北広島町 省エネ家電設置補助金",
    "organization": "北広島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "北広島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月19日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/14/39165.html",
    "sourceName": "省エネ家電設置補助金"
  },
  {
    "slug": "hiroshima-official-004-078-2026",
    "title": "北広島町 TNR活動にかかる猫不妊及び去勢手術費補助事業",
    "organization": "北広島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "北広島町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 募集 自然・風景・スポット 歴史・文化・アート 宿泊・食・特産品 観光大使・イメージキャラクター 観光リンク・その他 町政情報 メニュー 町政情報 町の概要 町政運営・行政・財政 広報・広聴 取り組み・提言 まちづくり 職員",
    "officialUrl": "https://www.town.kitahiroshima.lg.jp/soshiki/14/42616.html",
    "sourceName": "TNR活動にかかる猫不妊及び去勢手術費補助事業"
  }
];
