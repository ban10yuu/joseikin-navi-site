const miyazakiOfficial003Grants: Array<{
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
    "slug": "miyazaki-official-003-001-2026",
    "title": "三股町 三股町心身障害者福祉手当について",
    "organization": "三股町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給しています",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/50.html",
    "sourceName": "三股町心身障害者福祉手当について"
  },
  {
    "slug": "miyazaki-official-003-002-2026",
    "title": "三股町 重度障害者タクシー料金助成事業",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "三股町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "申請手続き・交付内容 タクシー等利用券は、対象者ひとりに対して、１年度当たりひと月当たり２枚（最大24枚）が交付されます",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/51.html",
    "sourceName": "重度障害者タクシー料金助成事業"
  },
  {
    "slug": "miyazaki-official-003-003-2026",
    "title": "三股町 特別障害者手当・障害児福祉手当・特別児童扶養手当について",
    "organization": "三股町",
    "maxAmount": "月額（令和7年4月現在)２９，５９０円",
    "maxAmountNum": 29590,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "三股町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給要件として障害の程度及び所得の制限等があります",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/52.html",
    "sourceName": "特別障害者手当・障害児福祉手当・特別児童扶養手当について"
  },
  {
    "slug": "miyazaki-official-003-004-2026",
    "title": "三股町 自動車税・自動車取得税の減免に関わる減免申請理由証明書の発行について",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請理由証明書の発行について 更新日：2019",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/59.html",
    "sourceName": "自動車税・自動車取得税の減免に関わる減免申請理由証明書の発行について"
  },
  {
    "slug": "miyazaki-official-003-005-2026",
    "title": "三股町 障害者運転免許取得助成事業・障害者自動車改造助成事業",
    "organization": "三股町",
    "maxAmount": "限度額は10万円",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "三股町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給制限】 原則として、対象者1人につき1回に限ります",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/60.html",
    "sourceName": "障害者運転免許取得助成事業・障害者自動車改造助成事業"
  },
  {
    "slug": "miyazaki-official-003-006-2026",
    "title": "三股町 身体障害者等に対する減免申請について",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "三股町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請について 更新日：2019",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/151.html",
    "sourceName": "身体障害者等に対する減免申請について"
  },
  {
    "slug": "miyazaki-official-003-007-2026",
    "title": "三股町 ブロック塀などの撤去費用を補助します",
    "organization": "三股町",
    "maxAmount": "補助額解体工事費の３分の２以内で、最大１４万４,０００円",
    "maxAmountNum": 4000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "三股町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月15日 申請者との契約で撤去工事を実施した者（工事施工者など）が、申請者の委任を受け、補助金の受領を代理で行うことができる制度です",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/1446.html",
    "sourceName": "ブロック塀などの撤去費用を補助します"
  },
  {
    "slug": "miyazaki-official-003-008-2026",
    "title": "三股町 児童扶養手当",
    "organization": "三股町",
    "maxAmount": "1人48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給されるものです",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/31.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "miyazaki-official-003-009-2026",
    "title": "三股町 児童手当について",
    "organization": "三股町",
    "maxAmount": "支給額３歳未満(第1・2子)15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給対象となる児童 １８歳到達後最初の３月３１日までの間にある児童（高校卒業までの児童） ※ 日本国内に住所のある児童が対象です",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/41.html",
    "sourceName": "児童手当について"
  },
  {
    "slug": "miyazaki-official-003-010-2026",
    "title": "三股町 日常生活用具の給付について",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "三股町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付を受けている人、または難病患者であり、在宅で生活している人",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/49.html",
    "sourceName": "日常生活用具の給付について"
  },
  {
    "slug": "miyazaki-official-003-011-2026",
    "title": "三股町 軽度・中等度の難聴児の補聴器購入(修理)への助成について",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "交付対象とならない軽度・中等度難聴児の補聴器購入、修理費用等に対する助成を行っています",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/54.html",
    "sourceName": "軽度・中等度の難聴児の補聴器購入(修理)への助成について"
  },
  {
    "slug": "miyazaki-official-003-012-2026",
    "title": "三股町 小児慢性特定疾病児童に対する日常生活用具の給付について",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請してください",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/57.html",
    "sourceName": "小児慢性特定疾病児童に対する日常生活用具の給付について"
  },
  {
    "slug": "miyazaki-official-003-013-2026",
    "title": "三股町 三股町就学援助制度のお知らせ",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "申請を行ってください",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/206.html",
    "sourceName": "三股町就学援助制度のお知らせ"
  },
  {
    "slug": "miyazaki-official-003-014-2026",
    "title": "三股町 三股町過疎地域定住促進奨励金のご案内",
    "organization": "三股町",
    "maxAmount": "上限額は、３０万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付しています",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/642.html",
    "sourceName": "三股町過疎地域定住促進奨励金のご案内"
  },
  {
    "slug": "miyazaki-official-003-015-2026",
    "title": "三股町 （町民向け）介護用品支給（助成）事業について",
    "organization": "三股町",
    "maxAmount": "年額７２，０００円",
    "maxAmountNum": 72000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "三股町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給（助成）事業について 更新日：2022",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/682.html",
    "sourceName": "（町民向け）介護用品支給（助成）事業について"
  },
  {
    "slug": "miyazaki-official-003-016-2026",
    "title": "三股町 軽度者に対する福祉用具貸与の例外給付",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "三股町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "提出書類 ・軽度者に対する福祉用具貸与の例外給付の確認依頼書 ・医師の意見（医学的所見） ・居宅サービス計画書または介護予防サービス支援計画表 ・サービス担当者会議の要点または介護予防支援経過記録 ※貸与開始前に提出してください",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/688.html",
    "sourceName": "軽度者に対する福祉用具貸与の例外給付"
  },
  {
    "slug": "miyazaki-official-003-017-2026",
    "title": "三股町 三股町スポーツ・文化合宿補助金",
    "organization": "三股町",
    "maxAmount": "補助金額）補助金の上限①1人1泊当たりの宿泊費は2,000円",
    "maxAmountNum": 2000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "三股町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付申請手続き 合宿を実施しようとする団体の代表者は、合宿開始２週間前までに、下記のお問合せ先まで電話にてご連絡ください",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/832.html",
    "sourceName": "三股町スポーツ・文化合宿補助金"
  },
  {
    "slug": "miyazaki-official-003-018-2026",
    "title": "三股町 高齢者の補聴器購入の補助をします。",
    "organization": "三股町",
    "maxAmount": "上限額３０,０００円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "三股町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請書、医師意見書の用紙をお渡しします",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/1432.html",
    "sourceName": "高齢者の補聴器購入の補助をします。"
  },
  {
    "slug": "miyazaki-official-003-019-2026",
    "title": "三股町 高齢者運転免許証自主返納支援事業について",
    "organization": "三股町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "三股町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付し、高齢者の交通事故の減少と公共交通の利用拡大を図っています",
    "officialUrl": "https://www.town.mimata.lg.jp/contents/824.html",
    "sourceName": "高齢者運転免許証自主返納支援事業について"
  },
  {
    "slug": "miyazaki-official-003-020-2026",
    "title": "高原町 国民健康保険の一部負担金の減免等について",
    "organization": "高原町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請できる制度があります",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230402/1046.html",
    "sourceName": "国民健康保険の一部負担金の減免等について"
  },
  {
    "slug": "miyazaki-official-003-021-2026",
    "title": "高原町 生活保護受給者に係る固定資産税の減免について",
    "organization": "高原町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年6月14日 期限（第1期は5月31日、納期限日が土日祝日の場合には金融機関の翌営業日）までに税務課へ申請してください",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/2/247952.html",
    "sourceName": "生活保護受給者に係る固定資産税の減免について"
  },
  {
    "slug": "miyazaki-official-003-022-2026",
    "title": "高原町 国民健康保険税の減免",
    "organization": "高原町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請の方法 減免を受ける場合は、窓口にて相談の上、納期限までに申請書を提出してください",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230402/21984.html",
    "sourceName": "国民健康保険税の減免"
  },
  {
    "slug": "miyazaki-official-003-023-2026",
    "title": "高原町 各種減免・助成制度について",
    "organization": "高原町",
    "maxAmount": "助成額100,000円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請を行わなければなりません",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230403/1101.html",
    "sourceName": "各種減免・助成制度について"
  },
  {
    "slug": "miyazaki-official-003-024-2026",
    "title": "高原町 児童手当の制度改正（拡充）（令和6年10月分以降）",
    "organization": "高原町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年8月16日 支給期間の延長」、「第3子加算の見直し」など、制度が改正（拡充）となります",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/260932.html",
    "sourceName": "児童手当の制度改正（拡充）（令和6年10月分以降）"
  },
  {
    "slug": "miyazaki-official-003-025-2026",
    "title": "高原町 大区画化等加速化支援事業について（農地の大区画化）",
    "organization": "高原町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月22日 提出することも可能です",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/21/305196.html",
    "sourceName": "大区画化等加速化支援事業について（農地の大区画化）"
  },
  {
    "slug": "miyazaki-official-003-026-2026",
    "title": "高原町 子ども医療費助成制度について",
    "organization": "高原町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請書を子育て支援係窓口に提出してください",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/1137.html",
    "sourceName": "子ども医療費助成制度について"
  },
  {
    "slug": "miyazaki-official-003-027-2026",
    "title": "高原町 乳幼児医療費助成制度について",
    "organization": "高原町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請書を子育て支援係に提出してください",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/1110.html",
    "sourceName": "乳幼児医療費助成制度について"
  },
  {
    "slug": "miyazaki-official-003-028-2026",
    "title": "高原町 母子・父子家庭医療費助成制度について",
    "organization": "高原町",
    "maxAmount": "限度額表（令和6年11月1日現在）扶養親族の数0人1人2人3人4人5人所得制限額208万円",
    "maxAmountNum": 2080000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請することにより、その一部負担額から1,000円を控除した額が支払われます",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/1109.html",
    "sourceName": "母子・父子家庭医療費助成制度について"
  },
  {
    "slug": "miyazaki-official-003-029-2026",
    "title": "高原町 高原町在宅介護手当支給事業について",
    "organization": "高原町",
    "maxAmount": "支給額：月額6，000円",
    "maxAmountNum": 6000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高原町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 支給事業について 印刷ページ表示 大きな文字で印刷ページ表示 更新日：2023年4月1日更新 高原町在宅介護手当支給事業とは 在宅の要介護者等の介護を行っている家族等への手当として、介護手当を支給することにより、介護の身体的、精神的及び経済的負",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230403/146086.html",
    "sourceName": "高原町在宅介護手当支給事業について"
  },
  {
    "slug": "miyazaki-official-003-030-2026",
    "title": "高原町 幼児教育・保育の無償化について",
    "organization": "高原町",
    "maxAmount": "月額上限11,300円",
    "maxAmountNum": 11300,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "高原町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請書様式 子育てのための施設等利用給付認定申請書 [PDFファイル／620KB] 保育所等利用申し込み等の不実施に係る理由書（認可外保育施設利用者用） [PDFファイル／66KB] ☆添付書類 就労証明書 [PDFファイル／204KB] 就労",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/5451.html",
    "sourceName": "幼児教育・保育の無償化について"
  },
  {
    "slug": "miyazaki-official-003-031-2026",
    "title": "高原町 児童扶養手当制度について",
    "organization": "高原町",
    "maxAmount": "1人の場合･･････全部支給月額43,070円",
    "maxAmountNum": 43070,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 支給される手当です",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/1111.html",
    "sourceName": "児童扶養手当制度について"
  },
  {
    "slug": "miyazaki-official-003-032-2026",
    "title": "高原町 ◆（ＪＲ吉都線）貸切列車助成事業",
    "organization": "高原町",
    "maxAmount": "３万円を助成",
    "maxAmountNum": 30000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年5月7日 申請書（様式第１号）を提出する",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/31/5844.html",
    "sourceName": "◆（ＪＲ吉都線）貸切列車助成事業"
  },
  {
    "slug": "miyazaki-official-003-033-2026",
    "title": "高原町 高原町生ごみ処理機等購入費補助金について",
    "organization": "高原町",
    "maxAmount": "上限額（円）生ごみ処理機20，000円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "高原町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月27日 申請方法 購入後60日以内に補助金交付申請書に次の書類を添付して、町民課環境係へ提出してください",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230402/305064.html",
    "sourceName": "高原町生ごみ処理機等購入費補助金について"
  },
  {
    "slug": "miyazaki-official-003-034-2026",
    "title": "高原町 高原町飼い主のいない猫等の不妊手術助成補助金について",
    "organization": "高原町",
    "maxAmount": "上限額10，000円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年5月27日 申請方法 不妊手術実施後に補助金交付申請書に次に掲げる書類を添えて、町民課環境係へ提出してください",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230402/305061.html",
    "sourceName": "高原町飼い主のいない猫等の不妊手術助成補助金について"
  },
  {
    "slug": "miyazaki-official-003-035-2026",
    "title": "高原町 高原町浄化槽設置事業補助金",
    "organization": "高原町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高原町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 交付要綱を改正しました 1.高原町浄化槽設置事業補助金概要 高原町浄化槽設置事業補助金概要を掲載します",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230402/16569.html",
    "sourceName": "高原町浄化槽設置事業補助金"
  },
  {
    "slug": "miyazaki-official-003-036-2026",
    "title": "高原町 身体障がい者自動車運転免許証取得助成事業",
    "organization": "高原町",
    "maxAmount": "助成額対象経費の３分の２以内の額とし１０万円",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高原町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 交付を受けた方 ・身体障害者手帳４級～６級の交付を受けた方で道路交通法により自動車改造が必要な方及び補聴器の使用が必要とされている方 助成額 対象経費の３分の２以内の額とし１０万円を限度とします",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230403/238565.html",
    "sourceName": "身体障がい者自動車運転免許証取得助成事業"
  },
  {
    "slug": "miyazaki-official-003-037-2026",
    "title": "高原町 身体障がい者自動車改造費助成事業",
    "organization": "高原町",
    "maxAmount": "助成額対象経費の額とし、10万円",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高原町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請時） ・身体障害者自動車改造費助成金交付申請書・収支予算書・誓約書 ・身体障害者手帳 ・運転免許証 ・見積書 ・改造前写真 ・カタログの写し （完了時） ・身体障害者自動車改造費助成事業実績報告書・改造証明書・請求書・収支決算書 ・改造後写",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230403/238563.html",
    "sourceName": "身体障がい者自動車改造費助成事業"
  },
  {
    "slug": "miyazaki-official-003-038-2026",
    "title": "高原町 重度心身障害者医療費助成制度について",
    "organization": "高原町",
    "maxAmount": "助成額入院の場合、ひと月あたりの医療費から1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 交付を受けている人 療育手帳Aの交付を受けている人 身体障害者手帳3級と療育手帳B1の両方の交付を受けている人 ※ただし、所得制限があります 助成額 入院の場合、ひと月あたりの医療費から1,000円を差し引いた額 外来の場合、１診療報酬明細等に",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230403/1106.html",
    "sourceName": "重度心身障害者医療費助成制度について"
  },
  {
    "slug": "miyazaki-official-003-039-2026",
    "title": "高原町 特別児童扶養手当について",
    "organization": "高原町",
    "maxAmount": "月額55,350円",
    "maxAmountNum": 55350,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年4月1日 支給されません",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20230403/1084.html",
    "sourceName": "特別児童扶養手当について"
  },
  {
    "slug": "miyazaki-official-003-040-2026",
    "title": "高原町 高原町不妊検査費助成事業について",
    "organization": "高原町",
    "maxAmount": "上限3万円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年10月1日 申請日において、高原町内に住所を有している（夫婦（事実婚含む）のどちらかでも可） 検査開始日における妻の年齢が43歳未満であること 申請する検査費用について、他の地方公共団体から助成を受けていないこと 夫婦の双方に町税（国民健康保険税を含む",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/297673.html",
    "sourceName": "高原町不妊検査費助成事業について"
  },
  {
    "slug": "miyazaki-official-003-041-2026",
    "title": "高原町 妊婦のための支援給付事業",
    "organization": "高原町",
    "maxAmount": "1人当たり5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "高原町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年8月28日 支給します",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/297164.html",
    "sourceName": "妊婦のための支援給付事業"
  },
  {
    "slug": "miyazaki-official-003-042-2026",
    "title": "高原町 高原町の保育所等で保育士になる方への補助金助成をはじめます",
    "organization": "高原町",
    "maxAmount": "1人あたり20万円",
    "maxAmountNum": 200000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高原町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年2月14日 申請されてください",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/202304004/153061.html",
    "sourceName": "高原町の保育所等で保育士になる方への補助金助成をはじめます"
  },
  {
    "slug": "miyazaki-official-003-043-2026",
    "title": "高原町 中山間地域等直接支払交付金",
    "organization": "高原町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "高原町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月8日 交付金 印刷ページ表示 大きな文字で印刷ページ表示 更新日：2026年4月8日更新 中山間地域等直接支払制度について 中山間地域等直接支払制度は、農業の生産条件が不利な地域における農業生産活動を継続するため、国及び地方自治体による支援を行う制度",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/20/303765.html",
    "sourceName": "中山間地域等直接支払交付金"
  },
  {
    "slug": "miyazaki-official-003-044-2026",
    "title": "高原町 従業員のレベルアップに！中小企業大学校の受講料補助を実施しています！",
    "organization": "高原町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高原町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2020年4月1日 従業員のレベルアップに！中小企業大学校の受講料補助を実施しています！ 印刷ページ表示 大きな文字で印刷ページ表示 更新日：2020年4月1日更新 高原町では、従業員のレベルアップや知識の向上を目的として 中小企業大学校が実施する各種研修の受",
    "officialUrl": "https://www.town.takaharu.lg.jp/soshiki/34/5208.html",
    "sourceName": "従業員のレベルアップに！中小企業大学校の受講料補助を実施しています！"
  },
  {
    "slug": "miyazaki-official-003-045-2026",
    "title": "国富町 区管理施設電気料臨時支援交付金について",
    "organization": "国富町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "国富町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付金について 交付の対象 この交付金の対象は国富町区長会に属している６２地区になります",
    "officialUrl": "https://www.town.kunitomi.miyazaki.jp/main/living/page002194.html",
    "sourceName": "区管理施設電気料臨時支援交付金について"
  },
  {
    "slug": "miyazaki-official-003-046-2026",
    "title": "国富町 まちづくりイベント事業補助金の申請受付開始について",
    "organization": "国富町",
    "maxAmount": "補助額対象経費の２分の１以内１年目：上限３０万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "国富町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請受付開始について 国富町では、令和６年度より『まちづくりイベント事業補助金』を新規事業として実施します",
    "officialUrl": "https://www.town.kunitomi.miyazaki.jp/main/administration/page001952.html",
    "sourceName": "まちづくりイベント事業補助金の申請受付開始について"
  },
  {
    "slug": "miyazaki-official-003-047-2026",
    "title": "国富町 令和８年度スポーツ合宿宿泊支援補助金",
    "organization": "国富町",
    "maxAmount": "補助金額１人１泊につき５００円",
    "maxAmountNum": 500,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "国富町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請（申請者→国富町観光協会） 合宿開始の１４日前までにメール又はFAXにて提出してください",
    "officialUrl": "https://www.town.kunitomi.miyazaki.jp/main/learning/page002439.html",
    "sourceName": "令和８年度スポーツ合宿宿泊支援補助金"
  },
  {
    "slug": "miyazaki-official-003-048-2026",
    "title": "国富町 国富町結婚活動支援事業費補助金について",
    "organization": "国富町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "国富町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.kunitomi.miyazaki.jp/main/administration/page001421.html",
    "sourceName": "国富町結婚活動支援事業費補助金について"
  },
  {
    "slug": "miyazaki-official-003-049-2026",
    "title": "国富町 先端設備等導入計画の認定について（２年間延長）",
    "organization": "国富町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "国富町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請方法について 制度の概要及び申請方法については、下記資料をご覧ください",
    "officialUrl": "https://www.town.kunitomi.miyazaki.jp/main/administration/page000894.html",
    "sourceName": "先端設備等導入計画の認定について（２年間延長）"
  },
  {
    "slug": "miyazaki-official-003-050-2026",
    "title": "綾町 危険木除去補助事業をご活用ください",
    "organization": "綾町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "綾町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月1日 交付する事業を創設しました",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/nourinsinkou/10834.html",
    "sourceName": "危険木除去補助事業をご活用ください"
  },
  {
    "slug": "miyazaki-official-003-051-2026",
    "title": "綾町 特別児童扶養手当について",
    "organization": "綾町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "綾町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給される手当です",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/hukusihokenka/9890.html",
    "sourceName": "特別児童扶養手当について"
  },
  {
    "slug": "miyazaki-official-003-052-2026",
    "title": "綾町 児童扶養手当",
    "organization": "綾町",
    "maxAmount": "1人48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "綾町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給することで、生活の安定と自立を支えること及び児童の福祉の増進を図ることを目的としています",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/hukusihokenka/6307.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "miyazaki-official-003-053-2026",
    "title": "綾町 児童手当について",
    "organization": "綾町",
    "maxAmount": "支給額手当月額児童の年齢児童手当の額（一人あたり月額）3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "綾町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年12月1日 支給されます",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/hukusihokenka/6438.html",
    "sourceName": "児童手当について"
  },
  {
    "slug": "miyazaki-official-003-054-2026",
    "title": "綾町 特別障害者手当について",
    "organization": "綾町",
    "maxAmount": "月額29,590円",
    "maxAmountNum": 29590,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "綾町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年6月9日 支給される手当です",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/hukusihokenka/9290.html",
    "sourceName": "特別障害者手当について"
  },
  {
    "slug": "miyazaki-official-003-055-2026",
    "title": "綾町 綾町介護人材確保事業補助金",
    "organization": "綾町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "綾町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2024年1月24日 交付を受けている場合は、その交付を受けた額を除いた額 ４ 補助金の額 補助金の額は、対象となる研修ごとに受講者１人１回につき ４０，０００円 を上限とします",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/hukusihokenka/7199.html",
    "sourceName": "綾町介護人材確保事業補助金"
  },
  {
    "slug": "miyazaki-official-003-056-2026",
    "title": "綾町 介護人材確保定住促進支援金",
    "organization": "綾町",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "綾町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2023年10月17日 支給対象経費は次のとおりであり、 １０万円 を上限とします",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/hukusihokenka/7196.html",
    "sourceName": "介護人材確保定住促進支援金"
  },
  {
    "slug": "miyazaki-official-003-057-2026",
    "title": "綾町 通学定期券の購入を補助します",
    "organization": "綾町",
    "maxAmount": "補助額通学定期券購入費の４分の１の額（100円",
    "maxAmountNum": 100,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "綾町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2023年2月28日 申請いただいた中学生のお子さんがいる世帯へ役場から申請書を郵送いたします",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/sougouseisakuka/5672.html",
    "sourceName": "通学定期券の購入を補助します"
  },
  {
    "slug": "miyazaki-official-003-058-2026",
    "title": "綾町 綾町空き家・空き店舗活用型チャレンジ支援事業補助金",
    "organization": "綾町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "綾町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年4月17日 交付要綱 [PDFファイル／2.67MB] ＜外部リンク＞ PDF形式のファイルをご覧いただく場合には、Adobe社が提供するAdobe Readerが必要です",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/sougouseisakuka/9164.html",
    "sourceName": "綾町空き家・空き店舗活用型チャレンジ支援事業補助金"
  },
  {
    "slug": "miyazaki-official-003-059-2026",
    "title": "綾町 高校生等を対象とした補助事業",
    "organization": "綾町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "綾町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月17日 申請に必要な書類 ・綾町高校生等子育て世帯支援給付金支給申請書兼請求書 ・学生証の写しまたはその他在学を証明する書類 ・同一世帯に属する18歳以上の方の完納証明書【大学生、専業主婦(夫)、祖父母も含む】 ※令和8年度より申請者取得に変更となって",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/kyouikusoumu/7728.html",
    "sourceName": "高校生等を対象とした補助事業"
  },
  {
    "slug": "miyazaki-official-003-060-2026",
    "title": "綾町 高年者等タクシー利用料金助成事業",
    "organization": "綾町",
    "maxAmount": "助成額とタクシー券の枚数区分（地区）条件助成額／枚数倉輪・竹野70歳以上の方（70歳に到達した月から）500円",
    "maxAmountNum": 500,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "綾町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付を受けた方 500円 100枚 利用できるタクシー会社 宮交タクシー Tel 0985-77-0127 申込方法 三親等以内の親族、入所施設の職員、ケアマネジャーなどの受け取りの署名と身分証の提示が必要です",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/hukusihokenka/7108.html",
    "sourceName": "高年者等タクシー利用料金助成事業"
  },
  {
    "slug": "miyazaki-official-003-061-2026",
    "title": "綾町 不妊検査費用を助成します",
    "organization": "綾町",
    "maxAmount": "助成額／上限30,000円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "綾町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年7月7日 申請期限／検査開始日から1年以内 詳しくは健康センター（健康増進係）へお問い合わせください",
    "officialUrl": "https://www.town.aya.miyazaki.jp/soshiki/hukusihokenka/6906.html",
    "sourceName": "不妊検査費用を助成します"
  },
  {
    "slug": "miyazaki-official-003-062-2026",
    "title": "綾町 妊産婦健康診査の助成",
    "organization": "綾町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "綾町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年3月22日 交付の際に助成券をお渡しします",
    "officialUrl": "https://www.town.aya.miyazaki.jp/site/kenkoucenter/7472.html",
    "sourceName": "妊産婦健康診査の助成"
  },
  {
    "slug": "miyazaki-official-003-063-2026",
    "title": "高鍋町 子ども医療費助成制度について",
    "organization": "高鍋町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "高鍋町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月09日 申請してください",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/teate_josei/973.html",
    "sourceName": "子ども医療費助成制度について"
  },
  {
    "slug": "miyazaki-official-003-064-2026",
    "title": "高鍋町 ひとり親家庭医療費助成制度について",
    "organization": "高鍋町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "高鍋町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年11月05日 申請方法 お手続きに必要なもの 申請者（父または母）の健康保険証 ※国民健康保険に加入している場合は不要です 助成額 保険診療にかかる自己負担分の全額を助成します",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/teate_josei/1055.html",
    "sourceName": "ひとり親家庭医療費助成制度について"
  },
  {
    "slug": "miyazaki-official-003-065-2026",
    "title": "高鍋町 特別児童扶養手当",
    "organization": "高鍋町",
    "maxAmount": "1人あたりの手当月額1級（重度）58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年03月26日 支給することにより、障がい児の福祉の増進を図ることを目的としたものです",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/teate_josei/1318.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "miyazaki-official-003-066-2026",
    "title": "高鍋町 高鍋町骨髄移植ドナー支援事業",
    "organization": "高鍋町",
    "maxAmount": "上限7日/回）×2万円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高鍋町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年06月17日 交付します",
    "officialUrl": "https://www.town.takanabe.lg.jp/kenko_iryo_fukushi/kenkozukuri/4340.html",
    "sourceName": "高鍋町骨髄移植ドナー支援事業"
  },
  {
    "slug": "miyazaki-official-003-067-2026",
    "title": "高鍋町 第2子の保育料無償化について",
    "organization": "高鍋町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年03月27日 支給認定申請書（現況届）兼入所申込書」及び住民基本台帳により確認した世帯情報により判定します",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/kosodate/4290.html",
    "sourceName": "第2子の保育料無償化について"
  },
  {
    "slug": "miyazaki-official-003-068-2026",
    "title": "高鍋町 物価高対応子育て応援手当（宮崎県上乗せ支給分）について",
    "organization": "高鍋町",
    "maxAmount": "1人あたり15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年06月25日 支給分）について 更新日：2026年06月25日 宮崎県では、長期化する物価高騰の影響を含め、経済的負担が大きくなっている子育て世帯に対し、先に支給された国の「物価高対応子育て応援手当」に、県独自として子ども1人あたり15,000円を上乗せ支給",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/teate_josei/4819.html",
    "sourceName": "物価高対応子育て応援手当（宮崎県上乗せ支給分）について"
  },
  {
    "slug": "miyazaki-official-003-069-2026",
    "title": "高鍋町 こども誰でも通園制度（乳児等通園支援事業）について",
    "organization": "高鍋町",
    "maxAmount": "1人につき、月10時間まで〇1時間から利用可能【利用料金】〇1時間300円",
    "maxAmountNum": 300,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高鍋町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年06月11日 申請 → 2. 利用決定 → 3. 情報の登録 → 4. 初回面談 → 5. 施設の利用 こども誰でも通園制度の利用方法 1. 利用申請 高鍋町ではオンライン申請を受け付けております",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/kosodate/4995.html",
    "sourceName": "こども誰でも通園制度（乳児等通園支援事業）について"
  },
  {
    "slug": "miyazaki-official-003-070-2026",
    "title": "高鍋町 高鍋町お試し滞在制度補助金について",
    "organization": "高鍋町",
    "maxAmount": "最大3,000円",
    "maxAmountNum": 3000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "高鍋町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年12月05日 支給しています",
    "officialUrl": "https://www.town.takanabe.lg.jp/soshiki/chiikiseisaku/3/3645.html",
    "sourceName": "高鍋町お試し滞在制度補助金について"
  },
  {
    "slug": "miyazaki-official-003-071-2026",
    "title": "高鍋町 児童扶養手当",
    "organization": "高鍋町",
    "maxAmount": "月額全部支給一部支給児童1人の場合46,690円",
    "maxAmountNum": 46690,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年04月22日 支給される手当です",
    "officialUrl": "https://www.town.takanabe.lg.jp/lifeevent/teate_josei_shomei/1637.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "miyazaki-official-003-072-2026",
    "title": "高鍋町 児童手当",
    "organization": "高鍋町",
    "maxAmount": "月額3歳未満（第1子、第2子）1万5千円3歳未満（第3子以降）3万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年10月04日 支給分）より児童手当の制度が変わりました 詳細について、以下をご確認ください",
    "officialUrl": "https://www.town.takanabe.lg.jp/lifeevent/teate_josei_shomei/1650.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "miyazaki-official-003-073-2026",
    "title": "高鍋町 病児・病後児保育利用料の補助について",
    "organization": "高鍋町",
    "maxAmount": "上限額2,000円",
    "maxAmountNum": 2000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年10月24日 申請方法 申請方法については、以下をご確認ください",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/kosodate/4181.html",
    "sourceName": "病児・病後児保育利用料の補助について"
  },
  {
    "slug": "miyazaki-official-003-074-2026",
    "title": "高鍋町 高鍋町結婚新生活支援事業",
    "organization": "高鍋町",
    "maxAmount": "最大30万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年04月30日 提出し、受理された夫婦 婚姻日において、夫婦がともに39歳以下 直近の年度の夫婦の所得を合算した金額が500万円未満（貸与型奨学金の返済を行っている場合は、所得の算定と同じ年に返済した金額を控除します",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/teate_josei/4035.html",
    "sourceName": "高鍋町結婚新生活支援事業"
  },
  {
    "slug": "miyazaki-official-003-075-2026",
    "title": "高鍋町 令和8年度高鍋町若者応援給付金について",
    "organization": "高鍋町",
    "maxAmount": "補助金額30万円",
    "maxAmountNum": 300000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "高鍋町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 支給します",
    "officialUrl": "https://www.town.takanabe.lg.jp/soshiki/chiikiseisaku/3/4588.html",
    "sourceName": "令和8年度高鍋町若者応援給付金について"
  },
  {
    "slug": "miyazaki-official-003-076-2026",
    "title": "高鍋町 令和8年度の移住支援金事業について",
    "organization": "高鍋町",
    "maxAmount": "補助金額・単身：30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高鍋町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 支給に関する「わくわくひなた暮らし実現応援事業」は、令和8年度も町の予算の範囲内で引き続き実施しています",
    "officialUrl": "https://www.town.takanabe.lg.jp/soshiki/chiikiseisaku/3/3654.html",
    "sourceName": "令和8年度の移住支援金事業について"
  },
  {
    "slug": "miyazaki-official-003-077-2026",
    "title": "高鍋町 高鍋町事業承継・引継ぎ応援事業補助金について",
    "organization": "高鍋町",
    "maxAmount": "限度額弁護士、税理などのマッチングコーディネーター、民間金融機関、民間M＆A仲介業者等との委託契約に係る経費着手金、マッチング登録手数料等（成功報酬を除く）2/3以内300,000円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年06月25日 交付の対象としない",
    "officialUrl": "https://www.town.takanabe.lg.jp/soshiki/chiikiseisaku/6/syoukougyou/3665.html",
    "sourceName": "高鍋町事業承継・引継ぎ応援事業補助金について"
  },
  {
    "slug": "miyazaki-official-003-078-2026",
    "title": "高鍋町 令和8年度高鍋町創業支援事業補助金の募集開始について",
    "organization": "高鍋町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年06月01日 募集開始について 更新日：2026年06月01日 令和8年度高鍋町創業支援事業補助金について、募集を行います",
    "officialUrl": "https://www.town.takanabe.lg.jp/soshiki/chiikiseisaku/6/syoukougyou/3034.html",
    "sourceName": "令和8年度高鍋町創業支援事業補助金の募集開始について"
  },
  {
    "slug": "miyazaki-official-003-079-2026",
    "title": "高鍋町 子育てのための施設等利用給付（新1号認定、新2号認定、新3号認定）について",
    "organization": "高鍋町",
    "maxAmount": "上限額（月額）新1号認定無し満3歳以上の小学校就学前子どもであって新2号及び新3号認定に該当しない子ども新制度未移行幼稚園、特別支援学校幼稚部25,700円",
    "maxAmountNum": 25700,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高鍋町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年12月02日 支給」を受けようとする場合には、事前に認定の手続きが必要となります",
    "officialUrl": "https://www.town.takanabe.lg.jp/kosodate_kyoiku/kosodate/3754.html",
    "sourceName": "子育てのための施設等利用給付（新1号認定、新2号認定、新3号認定）について"
  }
];
