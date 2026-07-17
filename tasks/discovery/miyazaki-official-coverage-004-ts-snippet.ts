const miyazakiOfficial004Grants: Array<{
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
    "slug": "miyazaki-official-004-001-2026",
    "title": "新富町 障害者向け支援制度",
    "organization": "新富町",
    "maxAmount": "上限額＞区分世帯（注釈）の収入状況負担上限額生活保護生活保護受給世帯0円",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新富町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 申請・支給決定は？ 障害福祉サービスの利用を希望する場合、市町村では、その福祉サービスの必要性を総合的に判定し、支給決定を行います",
    "officialUrl": "https://www.town.shintomi.lg.jp/iryo_kenko_fukushi/fukushi/3/1794.html",
    "sourceName": "障害者向け支援制度"
  },
  {
    "slug": "miyazaki-official-004-002-2026",
    "title": "新富町 奨学金",
    "organization": "新富町",
    "maxAmount": "月額）20,000円",
    "maxAmountNum": 20000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新富町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年04月09日 募集について 奨学金の応募資格 奨学金の貸与を希望される方へ 奨学金は、経済的理由により修学が困難な学生等に対し貸与されます",
    "officialUrl": "https://www.town.shintomi.lg.jp/kosodate_kyoiku/teate/1895.html",
    "sourceName": "奨学金"
  },
  {
    "slug": "miyazaki-official-004-003-2026",
    "title": "新富町 基地関連補助金制度",
    "organization": "新富町",
    "maxAmount": "1世帯当たり3,000円",
    "maxAmountNum": 3000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "新富町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年07月08日 基地関連補助金制度 更新日：2026年07月08日 ページID : 2080 移転の補償 基地周辺の航空機の音が著しくうるさい地域として指定された区域（第2種区域）内で、区域が指定された時に所在する建物を同区域外に移転を希望する方には移転補",
    "officialUrl": "https://www.town.shintomi.lg.jp/chosei/nyutabarukichi/2080.html",
    "sourceName": "基地関連補助金制度"
  },
  {
    "slug": "miyazaki-official-004-004-2026",
    "title": "新富町 コミュニティ助成事業",
    "organization": "新富町",
    "maxAmount": "助成額：一件100～250万円",
    "maxAmountNum": 2500000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新富町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月03日 コミュニティ助成事業 更新日：2026年04月03日 ページID : 1865 一般コミュニティ助成事業 住民が自主的に行うコミュニティ活動の促進を図り、地域の連帯感に基づく自治意識を盛り上げるために直接必要な施設又は設備の整備に関する事業",
    "officialUrl": "https://www.town.shintomi.lg.jp/kurashi/juminkatsudo/1865.html",
    "sourceName": "コミュニティ助成事業"
  },
  {
    "slug": "miyazaki-official-004-005-2026",
    "title": "新富町 まちづくり支援事業",
    "organization": "新富町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新富町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 まちづくり支援事業 更新日：2026年04月01日 ページID : 2180 新富町まちづくり基本構想及び実施計画について 新富町では、これまで町が持つ豊かな自然環境や歴史及び文化等の地域資源並びに航空自衛隊新田原基地の存在をはじめとする地",
    "officialUrl": "https://www.town.shintomi.lg.jp/chosei/gyoseiunei/4/2180.html",
    "sourceName": "まちづくり支援事業"
  },
  {
    "slug": "miyazaki-official-004-006-2026",
    "title": "新富町 高齢者の生活支援",
    "organization": "新富町",
    "maxAmount": "上限30,000円",
    "maxAmountNum": 30000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新富町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年04月23日 支給事業 配食サービス利用助成事業 あん摩・マッサージ・鍼灸に要する費用の一部助成事業 在宅老人短期保護事業 高齢者ごみ出し支援事業 対象者 新富町内にお住まいの65歳以上の単身世帯、高齢者のみの世帯又はこれに準ずる世帯であって、加齢、心身の疾",
    "officialUrl": "https://www.town.shintomi.lg.jp/iryo_kenko_fukushi/fukushi/1/1785.html",
    "sourceName": "高齢者の生活支援"
  },
  {
    "slug": "miyazaki-official-004-007-2026",
    "title": "新富町 障害福祉",
    "organization": "新富町",
    "maxAmount": "限度額入院の場合月額1,000円",
    "maxAmountNum": 1000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新富町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年06月30日 期限切れとなります",
    "officialUrl": "https://www.town.shintomi.lg.jp/iryo_kenko_fukushi/fukushi/3/1792.html",
    "sourceName": "障害福祉"
  },
  {
    "slug": "miyazaki-official-004-008-2026",
    "title": "新富町 障害者手帳を持たない高齢者の障害者控除",
    "organization": "新富町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新富町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 交付しています",
    "officialUrl": "https://www.town.shintomi.lg.jp/iryo_kenko_fukushi/iryohijosei/2765.html",
    "sourceName": "障害者手帳を持たない高齢者の障害者控除"
  },
  {
    "slug": "miyazaki-official-004-009-2026",
    "title": "新富町 不妊治療",
    "organization": "新富町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新富町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 申請場所 新富町役場 いきいき健康課 （注意）郵送可（郵送先：新富町大字上富田7491番地 いきいき健康課） この記事に関するお問い合わせ先 いきいき健康課 〒889-1493 宮崎県児湯郡新富町大字上富田7491番地 庁舎新館１階 電話番号：",
    "officialUrl": "https://www.town.shintomi.lg.jp/kosodate_kyoiku/kosodatejoho/1726.html",
    "sourceName": "不妊治療"
  },
  {
    "slug": "miyazaki-official-004-010-2026",
    "title": "新富町 令和8年（2026年）10月から国民年金保険料の育児免除制度が始まります!",
    "organization": "新富町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "新富町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月15日 申請することで、所得に関係なく国民年金保険料の納付が免除されます",
    "officialUrl": "https://www.town.shintomi.lg.jp/iryo_kenko_fukushi/kokuminnenkin/3094.html",
    "sourceName": "令和8年（2026年）10月から国民年金保険料の育児免除制度が始まります!"
  },
  {
    "slug": "miyazaki-official-004-011-2026",
    "title": "西米良村 自動車税・自動車取得税の減免",
    "organization": "西米良村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "西米良村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和8年6月1日 受付になります",
    "officialUrl": "https://www.vill.nishimera.lg.jp/village/a-00-villagelife/10000439",
    "sourceName": "自動車税・自動車取得税の減免"
  },
  {
    "slug": "miyazaki-official-004-012-2026",
    "title": "西米良村 西米良村浄化槽設置整備事業補助金について",
    "organization": "西米良村",
    "maxAmount": "補助金額人槽区分くみ取り・単独処理浄化槽からの改造5人槽590,000円",
    "maxAmountNum": 590000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "西米良村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年6月1日 交付は、西米良村内の住宅、共同住宅、下宿及び寄宿舎（延べ床面積の２分の１以上が居住の用に供される家屋とし、別荘を除く",
    "officialUrl": "https://www.vill.nishimera.lg.jp/village/a-00-villagelife/10000477",
    "sourceName": "西米良村浄化槽設置整備事業補助金について"
  },
  {
    "slug": "miyazaki-official-004-013-2026",
    "title": "西米良村 (1)耐震診断事業補助金交付要綱",
    "organization": "西米良村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "西米良村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年6月1日 交付要綱 西米良村木造住宅耐震診断事業費補助金交付要綱 最終改正平成二十四年三月十六日 （目的） 第１条 この要綱は、木造住宅の地震に対する安全性の向上を図り、地震に強いまちづくりを進めることを目的として、西米良村内の木造住宅の耐震診断を実施す",
    "officialUrl": "https://www.vill.nishimera.lg.jp/village/a-00-villagelife/10001093",
    "sourceName": "(1)耐震診断事業補助金交付要綱"
  },
  {
    "slug": "miyazaki-official-004-014-2026",
    "title": "西米良村 西米良村木造住宅等耐震改修事業補助金について",
    "organization": "西米良村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "西米良村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年6月1日 交付要綱を改正しました 村は、大地震における木造住宅等の被害を軽減するため、村内において木造住宅の耐震改修及び危険ブロック塀等の撤去を行おうとする所有者に対し、予算の定めるところにより補助金を交付します",
    "officialUrl": "https://www.vill.nishimera.lg.jp/village/a-00-villagelife/10001115",
    "sourceName": "西米良村木造住宅等耐震改修事業補助金について"
  },
  {
    "slug": "miyazaki-official-004-015-2026",
    "title": "西米良村 地域少子化対策重点推進交付金の活用について",
    "organization": "西米良村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "西米良村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月1日 交付金の活用について 地域少子化対策重点推進交付金 地域少子化対策重点推進交付金は、結婚・妊娠・出産・育児の「切れ目のない支援」のための、地域の実情に応じたニーズに対応する地域独自の先駆的な取組を行う地方公共団体を支援することで、地域における少",
    "officialUrl": "https://www.vill.nishimera.lg.jp/village/a-00-villagelife/10006530",
    "sourceName": "地域少子化対策重点推進交付金の活用について"
  },
  {
    "slug": "miyazaki-official-004-016-2026",
    "title": "西米良村 高齢者運転免許自主返納支援事業",
    "organization": "西米良村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "西米良村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月1日 交付します",
    "officialUrl": "https://www.vill.nishimera.lg.jp/village/a-00-villagelife/10004047",
    "sourceName": "高齢者運転免許自主返納支援事業"
  },
  {
    "slug": "miyazaki-official-004-017-2026",
    "title": "木城町 事業承継に要する費用の一部を補助します！",
    "organization": "木城町",
    "maxAmount": "限度額：60万円",
    "maxAmountNum": 600000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "木城町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年03月06日 交付します",
    "officialUrl": "https://www.town.kijo.lg.jp/bosyu/2948.html",
    "sourceName": "事業承継に要する費用の一部を補助します！"
  },
  {
    "slug": "miyazaki-official-004-018-2026",
    "title": "木城町 犯罪被害者支援",
    "organization": "木城町",
    "maxAmount": "支給額対象者遺族支援金30万円",
    "maxAmountNum": 300000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "木城町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年03月26日 受付 犯罪被害者ホットライン （宮崎地方検察庁） 0985-29-2156 夜間及び休日以外 犯罪被害者支援ダイヤル （日本司法センター） 0120-079-714 平日：9時～21時 土曜：9時～17時 相談窓口 公益社団法人みやざき被害者支",
    "officialUrl": "https://www.town.kijo.lg.jp/gyouseizyouhou/heiwa_zinken/2390.html",
    "sourceName": "犯罪被害者支援"
  },
  {
    "slug": "miyazaki-official-004-019-2026",
    "title": "木城町 木城町介護職員等人材確保・育成推進事業",
    "organization": "木城町",
    "maxAmount": "1人につき1回限り10万円",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "木城町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年12月27日 支給します",
    "officialUrl": "https://www.town.kijo.lg.jp/bosyu/2383.html",
    "sourceName": "木城町介護職員等人材確保・育成推進事業"
  },
  {
    "slug": "miyazaki-official-004-020-2026",
    "title": "川南町 透析通院費の助成",
    "organization": "川南町",
    "maxAmount": "助成額と振込月助成額は、月額4000円",
    "maxAmountNum": 4000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "川南町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年12月22日 支給を受けていないこと",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1362.html",
    "sourceName": "透析通院費の助成"
  },
  {
    "slug": "miyazaki-official-004-021-2026",
    "title": "川南町 妊婦健康診査の助成について",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "川南町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月8日 交付時に妊婦健康診査助成券（14回分）をお渡ししています",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/6/1296.html",
    "sourceName": "妊婦健康診査の助成について"
  },
  {
    "slug": "miyazaki-official-004-022-2026",
    "title": "川南町 子ども留学等支援補助金",
    "organization": "川南町",
    "maxAmount": "上限15万円",
    "maxAmountNum": 150000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請受付期間 令和8年6月8日（月曜日）～19日（金曜日） 令和8年11月9日（月曜日）～20日（金曜日） その他 出国予定の30日前までに申請をお願いします",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/2/1190.html",
    "sourceName": "子ども留学等支援補助金"
  },
  {
    "slug": "miyazaki-official-004-023-2026",
    "title": "川南町 国民健康保険加入者の人間ドック費用一部助成",
    "organization": "川南町",
    "maxAmount": "上限10，000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "川南町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 提出した方が対象です",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/6/1285.html",
    "sourceName": "国民健康保険加入者の人間ドック費用一部助成"
  },
  {
    "slug": "miyazaki-official-004-024-2026",
    "title": "川南町 国民健康保険税の軽減および減免制度について",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2021年6月25日 申請が必要です",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/3/1242.html",
    "sourceName": "国民健康保険税の軽減および減免制度について"
  },
  {
    "slug": "miyazaki-official-004-025-2026",
    "title": "川南町 ひとり親家庭医療費助成制度",
    "organization": "川南町",
    "maxAmount": "1,000円を助成",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "川南町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請手続が必要です",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1343.html",
    "sourceName": "ひとり親家庭医療費助成制度"
  },
  {
    "slug": "miyazaki-official-004-026-2026",
    "title": "川南町 重度障がい者医療費助成",
    "organization": "川南町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "川南町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月4日 申請書（請求書）」を福祉課に提出し、助成を受けることになります",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1361.html",
    "sourceName": "重度障がい者医療費助成"
  },
  {
    "slug": "miyazaki-official-004-027-2026",
    "title": "川南町 防災士の資格取得に対する助成金制度について",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "川南町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年8月22日 交付します",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/1/10215.html",
    "sourceName": "防災士の資格取得に対する助成金制度について"
  },
  {
    "slug": "miyazaki-official-004-028-2026",
    "title": "川南町 妊婦のための支援給付",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "川南町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 提出すること",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/13919.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "miyazaki-official-004-029-2026",
    "title": "川南町 子どもの医療費助成制度",
    "organization": "川南町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "川南町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 申請が必要です",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1340.html",
    "sourceName": "子どもの医療費助成制度"
  },
  {
    "slug": "miyazaki-official-004-030-2026",
    "title": "川南町 令和8年度川南町育英会奨学金事業について",
    "organization": "川南町",
    "maxAmount": "月額20,000円",
    "maxAmountNum": 20000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "川南町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年2月20日 申請資格 高等学校の最終学年に在籍し、令和8年度に大学、短期大学と同等の各種学校及び専門学校に進学を予定している者で、次のすべてに該当すること",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/12/1462.html",
    "sourceName": "令和8年度川南町育英会奨学金事業について"
  },
  {
    "slug": "miyazaki-official-004-031-2026",
    "title": "川南町 川南町骨髄移植ドナー支援事業",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "川南町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2020年12月22日 交付します",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/6/1300.html",
    "sourceName": "川南町骨髄移植ドナー支援事業"
  },
  {
    "slug": "miyazaki-official-004-032-2026",
    "title": "川南町 対象者の方へ介護用品を給付します",
    "organization": "川南町",
    "maxAmount": "1人当たり月額10,000円",
    "maxAmountNum": 10000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2024年10月1日 支給を受けている方 ウ介護保険料を滞納している方 【申請者】対象者または代理人 【申請方法】申請書を介護予防係に提出してください（申請書は介護予防係にもあります",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/5545.html",
    "sourceName": "対象者の方へ介護用品を給付します"
  },
  {
    "slug": "miyazaki-official-004-033-2026",
    "title": "川南町 補装具の給付・修理",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "川南町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年12月22日 申請 以下の必要なものを揃えていただき、福祉課にて申請を行ってください",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1356.html",
    "sourceName": "補装具の給付・修理"
  },
  {
    "slug": "miyazaki-official-004-034-2026",
    "title": "川南町 川南町の移住・定住支援制度を紹介します",
    "organization": "川南町",
    "maxAmount": "助成額町内の民間宿泊施設を利用した場合、1人1泊当たり3,000円",
    "maxAmountNum": 3000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 提出書類をまちづくり課窓口にご提出ください",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/2/1191.html",
    "sourceName": "川南町の移住・定住支援制度を紹介します"
  },
  {
    "slug": "miyazaki-official-004-035-2026",
    "title": "川南町 結婚相談所への入会登録料を助成します！",
    "organization": "川南町",
    "maxAmount": "助成額上限11,000円",
    "maxAmountNum": 11000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "川南町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付対象とされたことがないこと",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/2/15688.html",
    "sourceName": "結婚相談所への入会登録料を助成します！"
  },
  {
    "slug": "miyazaki-official-004-036-2026",
    "title": "川南町 川南町不妊検査費及び不妊治療費助成制度について",
    "organization": "川南町",
    "maxAmount": "上限3万円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年3月18日 提出してください",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/6/1307.html",
    "sourceName": "川南町不妊検査費及び不妊治療費助成制度について"
  },
  {
    "slug": "miyazaki-official-004-037-2026",
    "title": "川南町 くみ取り槽、単独槽から合併浄化槽への転換に関する補助金について",
    "organization": "川南町",
    "maxAmount": "上限12万円",
    "maxAmountNum": 120000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 交付要綱 [PDFファイル／152KB] 補助対象となる場合 下記のすべての条件を満たすこと （新築住宅の建築など）既設の浄化槽がない場所に合併浄化槽を新設するものではないこと 既存のくみ取り槽や単独処理浄化槽からの転換を図るものであること 専",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/15/1380.html",
    "sourceName": "くみ取り槽、単独槽から合併浄化槽への転換に関する補助金について"
  },
  {
    "slug": "miyazaki-official-004-038-2026",
    "title": "川南町 75歳以上（令和8年4月1日時点）の方にタクシー料金の一部を助成します。",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月1日 申請は1人1回までとなります",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/2/11954.html",
    "sourceName": "75歳以上（令和8年4月1日時点）の方にタクシー料金の一部を助成します。"
  },
  {
    "slug": "miyazaki-official-004-039-2026",
    "title": "川南町 特別児童扶養手当",
    "organization": "川南町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2021年7月1日 支給されます",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1346.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "miyazaki-official-004-040-2026",
    "title": "川南町 地域生活支援事業",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2020年12月22日 申請書 [Wordファイル／18.55KB] 移動支援事業 移動支援登録申請書 [Wordファイル／19.36KB] 移動支援事業指定申請書 [Wordファイル／16.04KB] 地域活動支援センター事業 自動車運転免許取得事業 身体障害者運転",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1358.html",
    "sourceName": "地域生活支援事業"
  },
  {
    "slug": "miyazaki-official-004-041-2026",
    "title": "川南町 ひとり親家庭等日常生活支援事業",
    "organization": "川南町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "川南町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2020年12月22日 支給世帯 150円 その他の世帯 300円 利用条件 町内在住の母子、父子家庭で20歳未満の児童を扶養している家庭または寡婦であること、以下いずれかに該当する事由がある事",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1326.html",
    "sourceName": "ひとり親家庭等日常生活支援事業"
  },
  {
    "slug": "miyazaki-official-004-042-2026",
    "title": "川南町 国民年金1号被保険者の独自給付について",
    "organization": "川南町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "川南町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年12月22日 支給されます",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/6/1281.html",
    "sourceName": "国民年金1号被保険者の独自給付について"
  },
  {
    "slug": "miyazaki-official-004-043-2026",
    "title": "川南町 児童扶養手当",
    "organization": "川南町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "川南町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2022年5月10日 支給される手当です",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/4/1324.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "miyazaki-official-004-044-2026",
    "title": "川南町 川南町高齢者運転免許証自主返納支援事業を再開します",
    "organization": "川南町",
    "maxAmount": "1人1回限りタクシー・トロントロンバスで利用できる回数券5,000円",
    "maxAmountNum": 5000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "川南町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年5月1日 交付します",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/1/1226.html",
    "sourceName": "川南町高齢者運転免許証自主返納支援事業を再開します"
  },
  {
    "slug": "miyazaki-official-004-045-2026",
    "title": "都農町 都農町子ども医療費助成",
    "organization": "都農町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "都農町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和５年４月１日 請求すれば子ども医療費助成金を支給します",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=6046d0ab7aaa612880862fe5",
    "sourceName": "都農町子ども医療費助成"
  },
  {
    "slug": "miyazaki-official-004-046-2026",
    "title": "都農町 不妊治療費助成について",
    "organization": "都農町",
    "maxAmount": "助成額を除いた金額を上限２０万円",
    "maxAmountNum": 200000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請前にまずご相談ください",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=6046dac1a9e0786dcab6bf47",
    "sourceName": "不妊治療費助成について"
  },
  {
    "slug": "miyazaki-official-004-047-2026",
    "title": "都農町 病児・病後児保育施設の利用料を助成します！",
    "organization": "都農町",
    "maxAmount": "上限）※施設利用料が２，０００円",
    "maxAmountNum": 2000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和５年１１月１日 申請方法 以下のものを持って福祉課 子育て支援係へお越しください",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=6567ed966e66b36fb6349d40",
    "sourceName": "病児・病後児保育施設の利用料を助成します！"
  },
  {
    "slug": "miyazaki-official-004-048-2026",
    "title": "都農町 特別児童扶養手当",
    "organization": "都農町",
    "maxAmount": "1人につき月額56,800円",
    "maxAmountNum": 56800,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和７年８月１２日 支給に関する法律施行令別表第三） 障がい等級1級 日常生活において常に他人の介助、保護を受けなければほとんど自己の用を弁ずることができない程度 例えば、身の回りのことはかろうじてできるが、それ以上の活動はできないもの又は行ってはいけないもの",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=618db52397cf31405819717b",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "miyazaki-official-004-049-2026",
    "title": "都農町 【介護職員向け】介護職員等確保支援事業補助金について",
    "organization": "都農町",
    "maxAmount": "１０万円を限度",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "都農町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=60c9b0584f3b5d0caef0f6c3",
    "sourceName": "【介護職員向け】介護職員等確保支援事業補助金について"
  },
  {
    "slug": "miyazaki-official-004-050-2026",
    "title": "都農町 都農町結婚生活支援事業",
    "organization": "都農町",
    "maxAmount": "補助金額婚姻日において夫婦共に２９歳以下の新婚世帯…上限６０万円",
    "maxAmountNum": 600000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和８年３月１日 交付金決定に伴う結婚新生活を応援するため、新婚世帯の住宅取得費用や引越し費用を助成します",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=684a17ca336b465cd967924c",
    "sourceName": "都農町結婚生活支援事業"
  },
  {
    "slug": "miyazaki-official-004-051-2026",
    "title": "都農町 子育て応援手当",
    "organization": "都農町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給認定申請書（PDF：76KB) https:",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=67ece12337ac1d42de708319",
    "sourceName": "子育て応援手当"
  },
  {
    "slug": "miyazaki-official-004-052-2026",
    "title": "都農町 母子父子寡婦家庭のための福祉",
    "organization": "都農町",
    "maxAmount": "1人当たり月額1,000円",
    "maxAmountNum": 1000,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "都農町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "母子父子寡婦家庭のための福祉 ひとり親家庭医療費助成事業の対象者や内容等について説明します。 ひとり親家庭医療費助成事業 親が離婚または死亡した子供のいる家庭に対して、親と子の医療費の自己負担額の一部を助成する制度です。 対象者 国保の被保",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=6046caa9cbcbcc0601fe9a31",
    "sourceName": "母子父子寡婦家庭のための福祉"
  },
  {
    "slug": "miyazaki-official-004-053-2026",
    "title": "都農町 小・中学生の自転車用ヘルメット購入費の一部を補助します。",
    "organization": "都農町",
    "maxAmount": "上限２，０００円",
    "maxAmountNum": 2000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "都農町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付後３年を経過した時点で再度、補助金の対象となります",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=660e4930357b8305f1fecca0",
    "sourceName": "小・中学生の自転車用ヘルメット購入費の一部を補助します。"
  },
  {
    "slug": "miyazaki-official-004-054-2026",
    "title": "都農町 重度障がい児福祉手当",
    "organization": "都農町",
    "maxAmount": "1人につき月額4,000円",
    "maxAmountNum": 4000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給を行うことにより児童の福祉増進を図ることを目的とした事業です",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=61f9d44acea7e4494b10e816",
    "sourceName": "重度障がい児福祉手当"
  },
  {
    "slug": "miyazaki-official-004-055-2026",
    "title": "都農町 都農町妊婦のための支援給付・入学応援金事業についてのお知らせ",
    "organization": "都農町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "都農町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=64211d0d8127bd2643a51f18",
    "sourceName": "都農町妊婦のための支援給付・入学応援金事業についてのお知らせ"
  },
  {
    "slug": "miyazaki-official-004-056-2026",
    "title": "都農町 タクシー券の配布について",
    "organization": "都農町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "令和８年４月１日 申請をいただいた方を対象に、タクシー券の配布を行います",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=604ec8a2889ebd12ec684ba9",
    "sourceName": "タクシー券の配布について"
  },
  {
    "slug": "miyazaki-official-004-057-2026",
    "title": "都農町 農業次世代人材投資資金(経営開始型)",
    "organization": "都農町",
    "maxAmount": "最大)夫婦申請225万円",
    "maxAmountNum": 2250000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付するものです",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=6053fa6be57132239a032298",
    "sourceName": "農業次世代人材投資資金(経営開始型)"
  },
  {
    "slug": "miyazaki-official-004-058-2026",
    "title": "都農町 住宅リフォーム奨励事業",
    "organization": "都農町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "都農町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請者と所有者が違う場合 ・相続人代表者同意書（様式第４号） ※相続完了を確認できない状態でリフォームする場合 ２",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=604ecfdd889ebd12ec684c6e",
    "sourceName": "住宅リフォーム奨励事業"
  },
  {
    "slug": "miyazaki-official-004-059-2026",
    "title": "都農町 児童手当",
    "organization": "都農町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "都農町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "https://www.town.tsuno.lg.jp/article?articleId=618b5344496ef66832e3fd91",
    "sourceName": "児童手当"
  },
  {
    "slug": "miyazaki-official-004-060-2026",
    "title": "川南町 川南町木造住宅建築物等地震対策促進事業",
    "organization": "川南町",
    "maxAmount": "最大13万円",
    "maxAmountNum": 130000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "川南町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月24日 受付期間について 】 受付は、令和8年6月1日（月曜日）から令和8年12月中旬（予定） ※ただし、申し込み状況によっては早期に受付を終了することがあります",
    "officialUrl": "https://www.town.kawaminami.miyazaki.jp/soshiki/9/1037.html",
    "sourceName": "川南町木造住宅建築物等地震対策促進事業"
  }
];
