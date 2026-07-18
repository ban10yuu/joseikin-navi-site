const okinawaOfficial001Grants: Array<{
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
    "slug": "okinawa-official-001-001-2026",
    "title": "沖縄県 【東京圏から移住をお考えの皆様へ】移住支援金制度のご案内！",
    "organization": "沖縄県",
    "maxAmount": "支給額2人以上の家族・世帯の場合：100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "沖縄県内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月30日 申請の状況により年度途中で終了する場合があります",
    "officialUrl": "https://www.pref.okinawa.lg.jp/kurashikankyo/iju/1023708.html",
    "sourceName": "【東京圏から移住をお考えの皆様へ】移住支援金制度のご案内！"
  },
  {
    "slug": "okinawa-official-001-002-2026",
    "title": "沖縄県 移住支援金対象法人の登録",
    "organization": "沖縄県",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "沖縄県内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年2月2日 募集していますので、UIJターン希望者の採用に関心がある企業の方は、是非お申し込みください",
    "officialUrl": "https://www.pref.okinawa.lg.jp/kurashikankyo/iju/1023707.html",
    "sourceName": "移住支援金対象法人の登録"
  },
  {
    "slug": "okinawa-official-001-003-2026",
    "title": "沖縄県 地域医療勤務環境改善体制整備事業について",
    "organization": "沖縄県",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "沖縄県内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月16日 交付要綱」を確認のうえ期限までに申請書のご提出をお願いいたします",
    "officialUrl": "https://www.pref.okinawa.lg.jp/iryokenko/iryo/1005227/1028546/1030567.html",
    "sourceName": "地域医療勤務環境改善体制整備事業について"
  },
  {
    "slug": "okinawa-official-001-004-2026",
    "title": "沖縄県 公募・補助金等（医療）",
    "organization": "沖縄県",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "沖縄県内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "募集について【地域医療介護総合確保基金（医療分）】 医師確保対策補助事業 看護補助者処遇改善事業 認定看護師・特定行為研修等支援事業 院内保育所運営費補助事業 看護師等誘致支援事業 新人看護職員研修事業 外国人看護師候補者就労研修支援事業 消費",
    "officialUrl": "https://www.pref.okinawa.lg.jp/iryokenko/iryo/1005869/index.html",
    "sourceName": "公募・補助金等（医療）"
  },
  {
    "slug": "okinawa-official-001-005-2026",
    "title": "沖縄県 原油価格高騰・物価高対策",
    "organization": "沖縄県",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "沖縄県内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月14日 交付金（企画調整課） 生活者等に対する支援 ・電気・LPガス価格高騰対策事業 LPガス受給契約者及び特別高圧受電契約者への支援 （支援期間）LPガス：R8.1～3、R8.7～9 特別高圧：R7.7～9、R8.1～3、R8.7～9 ・省エネ家電購",
    "officialUrl": "https://www.pref.okinawa.lg.jp/kensei/yosan/1015205/1040724.html",
    "sourceName": "原油価格高騰・物価高対策"
  },
  {
    "slug": "okinawa-official-001-006-2026",
    "title": "那覇市 母子保健",
    "organization": "那覇市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "那覇市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "公式ページで申請・受付状況を確認",
    "officialUrl": "https://www.city.naha.okinawa.jp/nahahokenjyo/bosihoken/index.html",
    "sourceName": "母子保健"
  },
  {
    "slug": "okinawa-official-001-007-2026",
    "title": "那覇市 罹災証明・罹災届出証明",
    "organization": "那覇市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "那覇市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月4日 申請についてご案内いたします",
    "officialUrl": "https://www.city.naha.okinawa.jp/safety/shien/1001639/1001573.html",
    "sourceName": "罹災証明・罹災届出証明"
  },
  {
    "slug": "okinawa-official-001-008-2026",
    "title": "那覇市 高齢者福祉",
    "organization": "那覇市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "那覇市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード（福祉・健康） サイトマップ 個人情報保護方針 ホームページ利用規約 ご意見・お問い合わせ 那覇市役所 〒900-8585 沖縄県那覇市泉崎1丁目1番1号 代表番号：098-867-0111 閉庁日：土曜日、日曜日、祝日、慰霊",
    "officialUrl": "https://www.city.naha.okinawa.jp/fukusi/koureisyafukusi/index.html",
    "sourceName": "高齢者福祉"
  },
  {
    "slug": "okinawa-official-001-009-2026",
    "title": "浦添市 子育て各種助成",
    "organization": "浦添市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "浦添市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年06月30日 支給月です 児童手当の現況届について オンライン申請 ４月は児童手当の支給月です 公務員に就職・退職した時の児童手当について 一覧へ 児童扶養手当 児童扶養手当の現況届（更新手続き）は毎年１回必要です ひとり親家庭等日常生活支援事業 児童扶養手",
    "officialUrl": "https://www.city.urasoe.lg.jp/category/bunya/kosodatejosei/",
    "sourceName": "子育て各種助成"
  },
  {
    "slug": "okinawa-official-001-010-2026",
    "title": "浦添市 障がい者助成",
    "organization": "浦添市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "浦添市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年06月19日 申請・届出 浦添市軽度・中等度難聴児補聴器購入費等助成事業 日常生活用具給付事業 補装具費支給制度 浦添市日中一時支援事業について 屋外での移動が困難な障がい者（児）の移動を支援します【浦添市移動支援事業】 一覧へ 様式等ダウンロード 障がい福",
    "officialUrl": "https://www.city.urasoe.lg.jp/category/bunya/fukushi/shogaisha/",
    "sourceName": "障がい者助成"
  },
  {
    "slug": "okinawa-official-001-011-2026",
    "title": "浦添市 中小企業支援",
    "organization": "浦添市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "浦添市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年07月16日 受付開始】省エネ・省コスト・高効率化にかかる設備導入等支援補助金のご案内（物価高騰対策） 2026年07月07日 令和８年台風第７号の被災事業者に対する中小企業セーフティネット資金の適用について 2026年06月30日 セーフティネット保証制度",
    "officialUrl": "https://www.city.urasoe.lg.jp/category/bunya/chushokigyo/",
    "sourceName": "中小企業支援"
  },
  {
    "slug": "okinawa-official-001-012-2026",
    "title": "浦添市 教育",
    "organization": "浦添市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "浦添市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年07月17日 募集について（臨床心理相談員） 2026年07月10日 令和８年度 第１回浦添市立学校給食調理場運営委員会 会議結果について 一覧へ 小学校・中学校 令和８年度 就学援助について 【7.15更新】未来へ翔たく太陽（てぃーだ）っ子応援プロジェクト",
    "officialUrl": "https://www.city.urasoe.lg.jp/category/bunya/kyoiku/",
    "sourceName": "教育"
  },
  {
    "slug": "okinawa-official-001-013-2026",
    "title": "浦添市 総合健(検)診【特定健診･保健指導】【がん検診】",
    "organization": "浦添市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "浦添市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年07月16日 募集・採用 【募集】令和８年度 特定保健指導業務委託事業者の募集 分野から探す 新型コロナウイルス関連情報 母子保健 予防接種 総合健(検)診【特定健診･保健指導】【がん検診】 健康づくり 食・栄養 その他 よく見られているページ 1 個別健診",
    "officialUrl": "https://www.city.urasoe.lg.jp/category/bunya/kenko/kenshin/",
    "sourceName": "総合健(検)診【特定健診･保健指導】【がん検診】"
  },
  {
    "slug": "okinawa-official-001-014-2026",
    "title": "宜野湾市 【申請期限延長】じのーんくらし応援給付金のお知らせ（物価高騰対応重点支援地方創生臨時交付金）",
    "organization": "宜野湾市",
    "maxAmount": "1人あたり1万円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宜野湾市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年07月07日 申請期限延長】じのーんくらし応援給付金のお知らせ（物価高騰対応重点支援地方創生臨時交付金） Tweet 更新日：2026年07月07日 申請期限：令和8年7月31日（金曜日）まで延長しました！ ポイント還元対象期間：令和8年8月31日（月曜日）",
    "officialUrl": "https://www.city.ginowan.lg.jp/soshiki/keizai/3/19652.html",
    "sourceName": "【申請期限延長】じのーんくらし応援給付金のお知らせ（物価高騰対応重点支援地方創生臨時交付金）"
  },
  {
    "slug": "okinawa-official-001-015-2026",
    "title": "宜野湾市 宜野湾市 小・中学校の就学援助制度について",
    "organization": "宜野湾市",
    "maxAmount": "1人小学生1人約203万円",
    "maxAmountNum": 2030000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年05月29日 申請受付は令和8年12月21日まで行います",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/12676.html",
    "sourceName": "宜野湾市 小・中学校の就学援助制度について"
  },
  {
    "slug": "okinawa-official-001-016-2026",
    "title": "宜野湾市 ふるさと融資(宜野湾市地域総合整備資金貸付)について",
    "organization": "宜野湾市",
    "maxAmount": "公式ページ記載の貸付額・利子補給額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年07月08日 ふるさと融資(宜野湾市地域総合整備資金貸付)について Tweet 更新日：2026年07月08日 ふるさと融資とは？ 地方公共団体が地域振興に資する民間事業活動を支援するために行う地域総合整備資金貸付（無利子の長期資金）のことです。 どこか",
    "officialUrl": "https://www.city.ginowan.lg.jp/jigyosha/sangyoshinko/2/4071.html",
    "sourceName": "ふるさと融資(宜野湾市地域総合整備資金貸付)について"
  },
  {
    "slug": "okinawa-official-001-017-2026",
    "title": "宜野湾市 生活困窮者自立支援制度について",
    "organization": "宜野湾市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宜野湾市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年06月01日 支給します(上限があります)≫ 離職等により住居を失った、又はそのおそれがある人に対し、就職に向けた活動をすることなどを条件に、期限付きで家賃相当額を支給します",
    "officialUrl": "https://www.city.ginowan.lg.jp/kenko_iryo_fukushi/fukushi/2/3826.html",
    "sourceName": "生活困窮者自立支援制度について"
  },
  {
    "slug": "okinawa-official-001-018-2026",
    "title": "宜野湾市 宜野湾市アピアランスケア支援事業について",
    "organization": "宜野湾市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年02月02日 申請期限が変更となっています",
    "officialUrl": "https://www.city.ginowan.lg.jp/kenko_iryo_fukushi/iryo_hoken_kenko/1/19715.html",
    "sourceName": "宜野湾市アピアランスケア支援事業について"
  },
  {
    "slug": "okinawa-official-001-019-2026",
    "title": "宜野湾市 児童扶養手当について",
    "organization": "宜野湾市",
    "maxAmount": "支給額詳細（令和7年4月分より）児童扶養手当月額子どもの数月額（全部支給の場合）月額（一部支給の場合）1人46,690円",
    "maxAmountNum": 46690,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年04月01日 支給される手当です",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/3467.html",
    "sourceName": "児童扶養手当について"
  },
  {
    "slug": "okinawa-official-001-020-2026",
    "title": "宜野湾市 特別児童扶養手当について",
    "organization": "宜野湾市",
    "maxAmount": "月額）令和7年4月～1級の児童1人につき56,800円",
    "maxAmountNum": 56800,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年04月18日 支給し、児童の福祉の増進を図るための制度です",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/3474.html",
    "sourceName": "特別児童扶養手当について"
  },
  {
    "slug": "okinawa-official-001-021-2026",
    "title": "宜野湾市 幼稚園等の預かり保育の無償化手続きについて（宜野湾市立幼稚園を除く）",
    "organization": "宜野湾市",
    "maxAmount": "月額11,300円",
    "maxAmountNum": 11300,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年07月25日 提出を行う場合がございます",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/6307.html",
    "sourceName": "幼稚園等の預かり保育の無償化手続きについて（宜野湾市立幼稚園を除く）"
  },
  {
    "slug": "okinawa-official-001-022-2026",
    "title": "宜野湾市 児童手当制度について（令和6年12月支給分からの制度の内容について）",
    "organization": "宜野湾市",
    "maxAmount": "支給額を児童1人あたり月額3万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年08月07日 支給分からの制度の内容について） Tweet 更新日：2024年08月07日 令和6年度に児童手当制度が改正されます",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/14968.html",
    "sourceName": "児童手当制度について（令和6年12月支給分からの制度の内容について）"
  },
  {
    "slug": "okinawa-official-001-023-2026",
    "title": "宜野湾市 令和8年度宜野湾市育英会 奨学生（奨学金）について",
    "organization": "宜野湾市",
    "maxAmount": "年額30万40万50万円",
    "maxAmountNum": 500000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年05月26日 募集について公開しました",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/6280.html",
    "sourceName": "令和8年度宜野湾市育英会 奨学生（奨学金）について"
  },
  {
    "slug": "okinawa-official-001-024-2026",
    "title": "宜野湾市 母子及び父子家庭等医療費助成について",
    "organization": "宜野湾市",
    "maxAmount": "1人1ヶ月1医療機関につき、1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宜野湾市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年07月08日 申請して下さい",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/3461.html",
    "sourceName": "母子及び父子家庭等医療費助成について"
  },
  {
    "slug": "okinawa-official-001-025-2026",
    "title": "宜野湾市 ひとり親家庭自立支援給付金事業",
    "organization": "宜野湾市",
    "maxAmount": "上限額は修学年数×40万円",
    "maxAmountNum": 400000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2022年10月05日 支給を受けることができる場合は、その支給額との差額（下限は12,001円）を支給） 対象となる方 母子家庭の母又は父子家庭の父で次の要件をすべて満たす方 ひとり親家庭の父又は母で、教育訓練後に取得した資格や技能での就職を予定している方 児童扶養",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/3458.html",
    "sourceName": "ひとり親家庭自立支援給付金事業"
  },
  {
    "slug": "okinawa-official-001-026-2026",
    "title": "宜野湾市 こども医療費助成について",
    "organization": "宜野湾市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宜野湾市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年10月01日 申請が必要となりますので、早めの申請をお願いします",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/9637.html",
    "sourceName": "こども医療費助成について"
  },
  {
    "slug": "okinawa-official-001-027-2026",
    "title": "宜野湾市 放課後児童クラブ利用者負担軽減事業",
    "organization": "宜野湾市",
    "maxAmount": "1人につき、支払った1月あたりの利用料とおやつ代の合算から5,000円",
    "maxAmountNum": 5000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年12月03日 申請する場合 令和6年4月・5月分申請に対しては、令和 5 年度課税状況を照会 令和6年6月・7月分申請に対しては、令和 6 年度課税状況を照会 助成金額について 対象児童1人につき、支払った1月あたりの利用料とおやつ代の合算から5,000円を",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/4/4030.html",
    "sourceName": "放課後児童クラブ利用者負担軽減事業"
  },
  {
    "slug": "okinawa-official-001-028-2026",
    "title": "宜野湾市 宜野湾市ひとり親家庭等認可外保育施設利用支援事業",
    "organization": "宜野湾市",
    "maxAmount": "上限額：33,000円",
    "maxAmountNum": 33000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年03月13日 申請に必要なもの 宜野湾市ひとり親家庭等認可外保育施設利用支援事業利用認定申請書（様式第1号） 宜野湾市ひとり親家庭等認可外保育施設利用支援事業利用証明書（様式第2号） →保育園に作成を依頼してください",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/7/17762.html",
    "sourceName": "宜野湾市ひとり親家庭等認可外保育施設利用支援事業"
  },
  {
    "slug": "okinawa-official-001-029-2026",
    "title": "宜野湾市 令和7年度宜野湾市認可外保育施設等の施設等利用給付認定(保育料無償化）について",
    "organization": "宜野湾市",
    "maxAmount": "月額37,000円",
    "maxAmountNum": 37000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年04月10日 提出して以降について行います",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/7/17763.html",
    "sourceName": "令和7年度宜野湾市認可外保育施設等の施設等利用給付認定(保育料無償化）について"
  },
  {
    "slug": "okinawa-official-001-030-2026",
    "title": "宜野湾市 令和8年度 就学援助追加申請受付について",
    "organization": "宜野湾市",
    "maxAmount": "1人子ども（小学生）：1人203万円",
    "maxAmountNum": 2030000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年05月29日 申請受付について Tweet 更新日：2026年05月29日 令和8年度の就学援助追加申請を受付中です",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kyoiku/4/3684.html",
    "sourceName": "令和8年度 就学援助追加申請受付について"
  },
  {
    "slug": "okinawa-official-001-031-2026",
    "title": "宜野湾市 妊婦健康診査",
    "organization": "宜野湾市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宜野湾市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年04月01日 交付されます",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/ninshin_shussan/1/12943.html",
    "sourceName": "妊婦健康診査"
  },
  {
    "slug": "okinawa-official-001-032-2026",
    "title": "宜野湾市 宜野湾市相談支援及び親子支援ギフト",
    "organization": "宜野湾市",
    "maxAmount": "1人あたり5万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宜野湾市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年03月31日 申請窓口は令和7年3月31日より&quot;宜野湾市役所2階&quot;へ移動しました",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/ninshin_shussan/1/12910.html",
    "sourceName": "宜野湾市相談支援及び親子支援ギフト"
  },
  {
    "slug": "okinawa-official-001-033-2026",
    "title": "宜野湾市 特別障害者手当・障害児福祉手当",
    "organization": "宜野湾市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2020年07月02日 特別障害者手当・障害児福祉手当 更新日：2020年07月02日 障害児福祉手当について 特別障害者手当について 障害者支援 ライフシーンから探す 手続き・届出 妊娠・出産 子育て 学校教育 結婚・離婚 引越し・住まい 就職・退職 高齢・介護",
    "officialUrl": "https://www.city.ginowan.lg.jp/kenko_iryo_fukushi/fukushi/3/8583.html",
    "sourceName": "特別障害者手当・障害児福祉手当"
  },
  {
    "slug": "okinawa-official-001-034-2026",
    "title": "宜野湾市 母子父子寡婦福祉資金の貸付について",
    "organization": "宜野湾市",
    "maxAmount": "公式ページ記載の貸付額・利子補給額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "宜野湾市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年06月20日 申請から決定までに2か月程度かかりますので、事前にご相談下さい 問い合わせ先 宜野湾市 こども家庭課 母子父子自立支援員 電話番号：098-893-4643 8時30分～17時 来所の際はご予約ください",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/3459.html",
    "sourceName": "母子父子寡婦福祉資金の貸付について"
  },
  {
    "slug": "okinawa-official-001-035-2026",
    "title": "宜野湾市 宜野湾市ファミリーサポートセンター事業の無償化について",
    "organization": "宜野湾市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年04月01日 請求書 手続きを行なう方の身分証明書 （マイナンバーカード、運転免許証等） 請求書データ (PDFファイル: 481.3KB) 請求書記入例 (PDFファイル: 646.4KB) 参考：活動報告書データ(まかせて会員が発行します",
    "officialUrl": "https://www.city.ginowan.lg.jp/kosodate_kyoiku/kosodate/2/4021.html",
    "sourceName": "宜野湾市ファミリーサポートセンター事業の無償化について"
  },
  {
    "slug": "okinawa-official-001-036-2026",
    "title": "宜野湾市 固定資産税の課税免除（税制優遇措置支援制度）に関する事",
    "organization": "宜野湾市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月24日 申請により最長5年間の課税免除措置の適用を行います",
    "officialUrl": "https://www.city.ginowan.lg.jp/jigyosha/7200.html",
    "sourceName": "固定資産税の課税免除（税制優遇措置支援制度）に関する事"
  },
  {
    "slug": "okinawa-official-001-037-2026",
    "title": "宜野湾市 自立支援医療(精神通院)",
    "organization": "宜野湾市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宜野湾市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年07月31日 交付申請に必要な書類 新規・更新申請 ・申請書（障がい福祉課窓口で準備しています） ・同意書（障がい福祉課窓口で準備しています） ・診断書（所定の様式があり、障がい福祉課窓口または病院窓口で準備しています） ※受給者証が「1年目」の方で有効期限",
    "officialUrl": "https://www.city.ginowan.lg.jp/kenko_iryo_fukushi/iryo_hoken_kenko/1/3515.html",
    "sourceName": "自立支援医療(精神通院)"
  },
  {
    "slug": "okinawa-official-001-038-2026",
    "title": "宜野湾市 重度心身障害者医療費助成",
    "organization": "宜野湾市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "宜野湾市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2020年07月02日 重度心身障害者医療費助成 更新日：2020年07月02日 重度心身障害者(障害児)医療費助成制度について 障害者支援 ライフシーンから探す 手続き・届出 妊娠・出産 子育て 学校教育 結婚・離婚 引越し・住まい 就職・退職 高齢・介護 ご不",
    "officialUrl": "https://www.city.ginowan.lg.jp/kenko_iryo_fukushi/fukushi/3/8589.html",
    "sourceName": "重度心身障害者医療費助成"
  },
  {
    "slug": "okinawa-official-001-039-2026",
    "title": "石垣市 石垣市物価高騰対応生活応援給付金についてお知らせです！",
    "organization": "石垣市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年07月01日 申請書（9月末以降振込予定）を待たずに給付金のお振り込みを希望される場合は、市役所1階の給付金特設窓口またはインターネットにて申請をお願いいたします",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/bukkakoutou/11775.html",
    "sourceName": "石垣市物価高騰対応生活応援給付金についてお知らせです！"
  },
  {
    "slug": "okinawa-official-001-040-2026",
    "title": "石垣市 令和7年度石垣市定額減税補足給付金（不足額給付）について",
    "organization": "石垣市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年09月18日 支給されます",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/info/11471.html",
    "sourceName": "令和7年度石垣市定額減税補足給付金（不足額給付）について"
  },
  {
    "slug": "okinawa-official-001-041-2026",
    "title": "石垣市 国民健康保険の給付",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年07月31日 支給 海外療養費制度のお知らせ 高額療養費について 限度額適用認定証、限度額適用・標準負担額減額認定証 柔道整復師、鍼灸師、あんまマッサージ指圧師の正しいかかり方について 交通事故などにあったら第三者行為による被害の届出を 人工透析などを始めら",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/hoken/3537.html",
    "sourceName": "国民健康保険の給付"
  },
  {
    "slug": "okinawa-official-001-042-2026",
    "title": "石垣市 石垣市子どもインフルエンザ予防接種費用の助成について",
    "organization": "石垣市",
    "maxAmount": "助成額及び助成回数】助成額は、1回あたり1,000円",
    "maxAmountNum": 1000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2022年01月17日 申請をお願いいたします",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/iryo/2308.html",
    "sourceName": "石垣市子どもインフルエンザ予防接種費用の助成について"
  },
  {
    "slug": "okinawa-official-001-043-2026",
    "title": "石垣市 石垣市島外看護師等誘致支援事業",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年05月01日 交付手続きの概要 (PDFファイル: 514.0KB) 1",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/iryo/1/9987.html",
    "sourceName": "石垣市島外看護師等誘致支援事業"
  },
  {
    "slug": "okinawa-official-001-044-2026",
    "title": "石垣市 石垣市潜在看護師等再就職応援給付金",
    "organization": "石垣市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年05月18日 支給事業 石垣市では、市内の医療施設への潜在看護師等の就職を促すことを目的として、医療施設に看護師等として再就職する方へ応援給付金を支給する事業を実施します",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/iryo/1/11927.html",
    "sourceName": "石垣市潜在看護師等再就職応援給付金"
  },
  {
    "slug": "okinawa-official-001-045-2026",
    "title": "石垣市 新生児聴覚検査費助成",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年04月01日 提出してください",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/kenko/7665.html",
    "sourceName": "新生児聴覚検査費助成"
  },
  {
    "slug": "okinawa-official-001-046-2026",
    "title": "石垣市 生活困窮者自立支援制度について",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年12月01日 支給します",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/seikatsu_fukushi/1847.html",
    "sourceName": "生活困窮者自立支援制度について"
  },
  {
    "slug": "okinawa-official-001-047-2026",
    "title": "石垣市 石垣市重度心身障害者（児）医療費助成",
    "organization": "石垣市",
    "maxAmount": "1人増すごとに、380,000円",
    "maxAmountNum": 380000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "石垣市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2020年09月17日 申請に必要なもの 1. 現在所持している 身体障害者手帳 または 療育手帳 2. 振込用の預金通帳（本人名義のもの） 3. 健康保険証 4. 限度額適用・標準負担額減額認定証（持っている方のみ） 5. マイナンバーカード 上記に加え、 市外から",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/shogaisha/5154.html",
    "sourceName": "石垣市重度心身障害者（児）医療費助成"
  },
  {
    "slug": "okinawa-official-001-048-2026",
    "title": "石垣市 特別障害者手当・障害児福祉手当・福祉手当制度について",
    "organization": "石垣市",
    "maxAmount": "1人増すごとに、380,000円",
    "maxAmountNum": 380000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2024年04月01日 支給し、福祉の増進を図ることを目的としています",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/shogaisha/1993.html",
    "sourceName": "特別障害者手当・障害児福祉手当・福祉手当制度について"
  },
  {
    "slug": "okinawa-official-001-049-2026",
    "title": "石垣市 軽度・中等度難聴児補聴器購入費等助成事業",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "石垣市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2020年06月01日 交付対象とならない軽度又は中等度の聴覚障害のある児童に対し、言語の習得、コミュニケーション能力の向上及び教育等における健全な発達を支援するため、補聴器の購入費用の助成を行います",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/shogaisha/4502.html",
    "sourceName": "軽度・中等度難聴児補聴器購入費等助成事業"
  },
  {
    "slug": "okinawa-official-001-050-2026",
    "title": "石垣市 補装具費の給付について",
    "organization": "石垣市",
    "maxAmount": "上限額生活保護生活保護世帯0円",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月18日 交付を受けている方又は、障害者総合支援法の対象となる難病等により一定の障害がある方で、就業、就学及び日常生活を営むにあたり当該補装具の購入・修理が必要と認める方が、給付の対象となります",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/shogaisha/4716.html",
    "sourceName": "補装具費の給付について"
  },
  {
    "slug": "okinawa-official-001-051-2026",
    "title": "石垣市 日常生活用具の給付について",
    "organization": "石垣市",
    "maxAmount": "上限月額区分表）区分世帯の収入状況負担上限月額生活保護生活保護世帯0円",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年06月09日 交付を受けている方、難病等により一定の障害がある方で、市が給付を認める方",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/shogaisha/5060.html",
    "sourceName": "日常生活用具の給付について"
  },
  {
    "slug": "okinawa-official-001-052-2026",
    "title": "石垣市 離島保育士確保総合対策事業",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年06月16日 交付申請の受付を開始します",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/hoikusho/1/1946.html",
    "sourceName": "離島保育士確保総合対策事業"
  },
  {
    "slug": "okinawa-official-001-053-2026",
    "title": "石垣市 母子及び父子家庭等医療費助成制度",
    "organization": "石垣市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "石垣市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年03月25日 申請に必要な手続きについて 申請に必要な書類は、申請者のご事情によって異なるため、こども家庭課窓口にてお話をうかがい、必要な書類をご案内します",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/3554.html",
    "sourceName": "母子及び父子家庭等医療費助成制度"
  },
  {
    "slug": "okinawa-official-001-054-2026",
    "title": "石垣市 自立支援教育訓練給付金",
    "organization": "石垣市",
    "maxAmount": "上限20万円",
    "maxAmountNum": 200000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2020年03月27日 支給します",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/1907.html",
    "sourceName": "自立支援教育訓練給付金"
  },
  {
    "slug": "okinawa-official-001-055-2026",
    "title": "石垣市 ファミリーサポートセンター利用料助成事業",
    "organization": "石垣市",
    "maxAmount": "助成額・1時間あたり、利用料の2分の1以内・1世帯あたりの限度額は、年度8000円",
    "maxAmountNum": 8000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2020年03月31日 申請方法 交付申請書（様式第1号）、請求書（様式第2号）に、援助活動の報告（お願い会員控え）を添付し石垣市こども家庭課窓口に提出して下さい",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/1909.html",
    "sourceName": "ファミリーサポートセンター利用料助成事業"
  },
  {
    "slug": "okinawa-official-001-056-2026",
    "title": "石垣市 放課後児童クラブ利用料補助事業",
    "organization": "石垣市",
    "maxAmount": "月額5000円",
    "maxAmountNum": 5000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2020年03月02日 申請方法 児童扶養手当の証書または母子及び父子家庭等医療費助成受給者証の写し、放課後児童クラブにある「同意書」を、利用する放課後児童クラブに提出してください",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/1911.html",
    "sourceName": "放課後児童クラブ利用料補助事業"
  },
  {
    "slug": "okinawa-official-001-057-2026",
    "title": "石垣市 児童扶養手当",
    "organization": "石垣市",
    "maxAmount": "限度額（受給者本人の前年所得）扶養義務者配偶者孤児等の養育者等所得額所得額所得額これまでR6.11月分からこれまでR6.11月分から変更なし0人490,000円",
    "maxAmountNum": 490000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年04月01日 申請方法 4 児童扶養手当の額（月額） 5 所得制限限度額表 6 児童扶養手当の支給日 7 受給中に必要となる届出（現況届など） 8 関係書類 1 児童 扶養手当とは 父母の離婚などにより、父又は母と生活を共にできない児童の母又は父、父母にかわ",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/3553.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okinawa-official-001-058-2026",
    "title": "石垣市 こども医療費助成制度",
    "organization": "石垣市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "石垣市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年03月25日 受付しております",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/3552.html",
    "sourceName": "こども医療費助成制度"
  },
  {
    "slug": "okinawa-official-001-059-2026",
    "title": "石垣市 特別児童扶養手当",
    "organization": "石垣市",
    "maxAmount": "限度額表(単位：円)扶養親族等の数受給資格者（申請者）配偶者および扶養義務者0人4,596,000円",
    "maxAmountNum": 4596000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年04月01日 支給することにより、これらの方の福祉の増進を図ることを目的とする制度です",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/3555.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "okinawa-official-001-060-2026",
    "title": "石垣市 児童手当（令和6年10月以降）",
    "organization": "石垣市",
    "maxAmount": "支給額について児童の年齢児童手当の額（1人あたりの月額）第1・2子第3子以降3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年11月01日 請求者)について 3",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/10701.html",
    "sourceName": "児童手当（令和6年10月以降）"
  },
  {
    "slug": "okinawa-official-001-061-2026",
    "title": "石垣市 生徒への眼鏡購入補助金について（令和8年度）",
    "organization": "石垣市",
    "maxAmount": "補助額】眼鏡本体購入価格（消費税を含み、保険料及び付属品は含まない）の上限額7,000円",
    "maxAmountNum": 7000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年05月29日 申請書兼委任状」「眼鏡購入確認書」を記入提出",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/kyoiku/9163.html",
    "sourceName": "生徒への眼鏡購入補助金について（令和8年度）"
  },
  {
    "slug": "okinawa-official-001-062-2026",
    "title": "石垣市 入学準備金(新入学学用品費)について",
    "organization": "石垣市",
    "maxAmount": "支給額認定および支給時期：令和8年2月（予定）支給額：新小学1年生50,600円",
    "maxAmountNum": 50600,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年09月30日 支給について 令和8年4月に石垣市立小学校・中学校へ入学するお子様の保護者で、援助が必要と認められた方に、新入学学用品費（入学準備金）を入学前に支給します",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/nyuen_nyugaku/3278.html",
    "sourceName": "入学準備金(新入学学用品費)について"
  },
  {
    "slug": "okinawa-official-001-063-2026",
    "title": "石垣市 令和8年度桃原用昇高等学校奨学給付金",
    "organization": "石垣市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年04月09日 募集期間を延長します 進学や修学の意欲と能力があるにもかかわらず、学費や制服また部活動での費用負担が難しい世帯に対し、高校生活を安心して学びに集中できるよう給付金制度の募集を開始します",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/8729.html",
    "sourceName": "令和8年度桃原用昇高等学校奨学給付金"
  },
  {
    "slug": "okinawa-official-001-064-2026",
    "title": "石垣市 小児慢性特定疾病児日常生活用具給付事業",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2020年06月01日 交付または貸与の規定の対象となる方については、障害者総合支援法など他の制度を利用していただくことになります",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/shogaisha/4504.html",
    "sourceName": "小児慢性特定疾病児日常生活用具給付事業"
  },
  {
    "slug": "okinawa-official-001-065-2026",
    "title": "石垣市 社会教育団体補助金について",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2022年04月01日 受付について ☆ 石垣市教育委員会では、子ども会を結成している単位団体、青少年育成のための団体、 児童文化育成団体等の社会教育団体に対して補助金を交付します",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/gakko/2623.html",
    "sourceName": "社会教育団体補助金について"
  },
  {
    "slug": "okinawa-official-001-066-2026",
    "title": "石垣市 幼児教育・保育の無償化について",
    "organization": "石垣市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年07月14日 申請・変更申請方法 申請にあたっては、必ず下記パンフレットをご確認いただき、必要書類等のご確認をお願いいたします",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/hoikusho/1928.html",
    "sourceName": "幼児教育・保育の無償化について"
  },
  {
    "slug": "okinawa-official-001-067-2026",
    "title": "石垣市 母子・父子(寡婦)福祉資金貸付金",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の貸付額・利子補給額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2020年03月02日 申請窓口 申請窓口はこども家庭課です",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/1918.html",
    "sourceName": "母子・父子(寡婦)福祉資金貸付金"
  },
  {
    "slug": "okinawa-official-001-068-2026",
    "title": "石垣市 ひとり親家庭等日常生活支援事業（ヘルパー派遣事業）",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2020年03月02日 申請の受付は石垣市こども家庭課ですが、家庭生活支援員の派遣等は沖縄県母子寡婦福祉連合会が行います",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/1908.html",
    "sourceName": "ひとり親家庭等日常生活支援事業（ヘルパー派遣事業）"
  },
  {
    "slug": "okinawa-official-001-069-2026",
    "title": "石垣市 石垣市成年後見制度利用支援事業実施要綱の制定について",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2020年04月28日 石垣市成年後見制度利用支援事業実施要綱の制定について 更新日：2020年04月28日 成年後見制度とは、認知症、知的障害、精神障害などによって物事を判断する能力が十分でない方について、本人の権利を守る援助者を選ぶことで、本人を法律的に保護し",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/kaigo/4785.html",
    "sourceName": "石垣市成年後見制度利用支援事業実施要綱の制定について"
  },
  {
    "slug": "okinawa-official-001-070-2026",
    "title": "石垣市 年金生活者支援給付金制度",
    "organization": "石垣市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年03月02日 支給されるものです",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/nenkin/2414.html",
    "sourceName": "年金生活者支援給付金制度"
  },
  {
    "slug": "okinawa-official-001-071-2026",
    "title": "石垣市 石垣市ひとり親家庭生活支援事業",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2022年06月01日 申請・相談について＞ 一般社団法人 石垣市ひとり親家庭福祉会 電話：080-2739-3638 住所：石垣市字登野城1366番地1 石垣市まち・ひとづくり支援センターA室（健康福祉センター敷地内） 受付時間：月曜日から金曜日",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/1914.html",
    "sourceName": "石垣市ひとり親家庭生活支援事業"
  },
  {
    "slug": "okinawa-official-001-072-2026",
    "title": "石垣市 就学援助制度",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "石垣市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2020年10月23日 就学援助制度 Tweet 更新日：2020年10月23日 令和8年度就学援助のお知らせ 被災児童生徒就学援助 入学準備金(新入学学用品費)について 子育て・教育 ライフシーンから探す 住民票・手続き 税金 妊娠・出産 入園・入学 結婚・離婚",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/3158.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "okinawa-official-001-073-2026",
    "title": "石垣市 学校給食費助成",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2020年10月23日 公式ページで申請・受付状況を確認",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/3162.html",
    "sourceName": "学校給食費助成"
  },
  {
    "slug": "okinawa-official-001-074-2026",
    "title": "石垣市 ひとり親家庭等認可外保育施設利用料補助事業",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "石垣市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2020年03月02日 申請書類】 » 申請書（様式第1号） (PDFファイル: 85.9KB) » 証明書（様式第2号） (PDFファイル: 47.3KB) この記事に関するお問い合わせ先 こども未来局 こども家庭課 福祉係 〒907-8501 沖縄県石垣市字真栄里",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/jido/1910.html",
    "sourceName": "ひとり親家庭等認可外保育施設利用料補助事業"
  },
  {
    "slug": "okinawa-official-001-075-2026",
    "title": "石垣市 未熟児養育医療制度",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "石垣市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年09月26日 提出していただくことで、市の関係部署（こども家庭課及び健康福祉センター）で代理納付の手続きを行います",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/iryo_kenko_fukushi/kenko/2344.html",
    "sourceName": "未熟児養育医療制度"
  },
  {
    "slug": "okinawa-official-001-076-2026",
    "title": "石垣市 助産制度",
    "organization": "石垣市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "石垣市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年12月09日 申請及び調査により助産制度の利用が必要と 認められる方 A",
    "officialUrl": "https://www.city.ishigaki.okinawa.jp/kurashi_gyosei/kosodate_kyoiku/ninshin_shussan/6443.html",
    "sourceName": "助産制度"
  }
];
