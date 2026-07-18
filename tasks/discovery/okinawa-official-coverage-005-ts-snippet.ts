const okinawaOfficial005Grants: Array<{
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
    "slug": "okinawa-official-005-001-2026",
    "title": "嘉手納町 生活支援商品券配布事業",
    "organization": "嘉手納町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "嘉手納町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月28日 期限は2026年9月30日までであること、取扱店舗リストが公式ページで公開されていることを確認",
    "officialUrl": "https://www.town.kadena.okinawa.jp/info/n8761.html",
    "sourceName": "生活支援商品券配布事業"
  },
  {
    "slug": "okinawa-official-005-002-2026",
    "title": "嘉手納町 住宅リフォーム支援事業補助金",
    "organization": "嘉手納町",
    "maxAmount": "上限は、新たに多世帯住宅が上限50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "嘉手納町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年6月19日 受付期間は2026年5月1日から2026年12月18日までで、先着順となり予算に達し次第受付締切となることを確認",
    "officialUrl": "https://www.town.kadena.okinawa.jp/info/n7888.html",
    "sourceName": "住宅リフォーム支援事業補助金"
  },
  {
    "slug": "okinawa-official-005-003-2026",
    "title": "嘉手納町 新築住宅等取得補助金",
    "organization": "嘉手納町",
    "maxAmount": "補助額は、住宅を取得した個人が100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嘉手納町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請時までにすでに賃貸契約を結んでいる戸数に限ることを確認",
    "officialUrl": "https://www.town.kadena.okinawa.jp/info/n7768.html",
    "sourceName": "新築住宅等取得補助金"
  },
  {
    "slug": "okinawa-official-005-004-2026",
    "title": "嘉手納町 建物除却補助金",
    "organization": "嘉手納町",
    "maxAmount": "補助額が50万円",
    "maxAmountNum": 500000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嘉手納町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付対象となる住宅等を建築するための建物除却であること、除却建物に所有権以外の権利が設定されていないこと、家屋課税台帳または家屋補充課税台帳に登録されている建物であること、除却工事に着手していないことを確認",
    "officialUrl": "https://www.town.kadena.okinawa.jp/info/n7768.html",
    "sourceName": "建物除却補助金"
  },
  {
    "slug": "okinawa-official-005-005-2026",
    "title": "北谷町 妊婦のための支援給付事業（旧出産・子育て応援給付金事業）について",
    "organization": "北谷町",
    "maxAmount": "支給額妊婦であることの認定後、5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "北谷町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年11月7日 交付金事業が法定事業化したものです",
    "officialUrl": "https://www.chatan.jp/kosodate/kosodate/teate_support/bansougatasoudan.html",
    "sourceName": "妊婦のための支援給付事業（旧出産・子育て応援給付金事業）について"
  },
  {
    "slug": "okinawa-official-005-006-2026",
    "title": "嘉手納町 入学祝金",
    "organization": "嘉手納町",
    "maxAmount": "1人につき小学校3万円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嘉手納町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 支給する町独自事業であることを確認",
    "officialUrl": "https://www.town.kadena.okinawa.jp/info/n8837.html",
    "sourceName": "入学祝金"
  },
  {
    "slug": "okinawa-official-005-007-2026",
    "title": "嘉手納町 先進医療不妊治療費助成事業",
    "organization": "嘉手納町",
    "maxAmount": "助成額は、先進医療不妊治療に要した費用のうち県助成事業による助成額を控除した額で、1回の治療につき15万円",
    "maxAmountNum": 150000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "嘉手納町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請時に夫婦のいずれか一方または両方が嘉手納町に1年以上住所を有している者などであることを確認",
    "officialUrl": "https://www.town.kadena.okinawa.jp/info/n8329.html",
    "sourceName": "先進医療不妊治療費助成事業"
  },
  {
    "slug": "okinawa-official-005-008-2026",
    "title": "嘉手納町 がん患者アピアランスケア支援事業",
    "organization": "嘉手納町",
    "maxAmount": "助成額は、1人につきウィッグ、乳房補整具左、乳房補整具右それぞれの購入額で、それぞれ上限2万円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嘉手納町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月19日 申請日時点で嘉手納町の住民基本台帳に記録されている方、がんと診断され治療を受けたまたは現に受けている方で治療による外見の変化を補完する補整具を必要としている方、申請する補整具に対して他の補助等を受けていない方、過去に沖縄県内市町村から同補整具の",
    "officialUrl": "https://www.town.kadena.okinawa.jp/info/n8221.html",
    "sourceName": "がん患者アピアランスケア支援事業"
  },
  {
    "slug": "okinawa-official-005-009-2026",
    "title": "嘉手納町 若年がん患者在宅療養生活支援事業",
    "organization": "嘉手納町",
    "maxAmount": "助成額は1か月あたりのサービス利用料の9割、最大54,000円",
    "maxAmountNum": 54000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "嘉手納町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月19日 申請日時点で嘉手納町の住民基本台帳に記録され、サービス利用時に20歳以上40歳未満、または18歳以上20歳未満で児童福祉法の小児慢性特定疾病医療費の支給を受けていない方であることを確認",
    "officialUrl": "https://www.town.kadena.okinawa.jp/info/n8222.html",
    "sourceName": "若年がん患者在宅療養生活支援事業"
  },
  {
    "slug": "okinawa-official-005-010-2026",
    "title": "読谷村 ※令和8年10月より給付上限額が引き上げられます※【令和8年度 年間請求スケジュール】幼児教育・保育の無償化",
    "organization": "読谷村",
    "maxAmount": "上限額現行⇒引き上げ後認可外保育施設等（0~2歳※1）42,000円",
    "maxAmountNum": 42000,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "読谷村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年06月24日 請求スケジュール】幼児教育・保育の無償化 更新日：2026年06月24日 ※令和8年10月より、給付上限額が引き上げられます！※ 令和元年10月の制度開始より据え置かれていた給付上限額について、直近の物価水準や賃金動向を踏まえ、国による見直しが",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kosodate_kyoiku/hoikusho_yochien/1945.html",
    "sourceName": "※令和8年10月より給付上限額が引き上げられます※【令和8年度 年間請求スケジュール】幼児教育・保育の無償化"
  },
  {
    "slug": "okinawa-official-005-011-2026",
    "title": "北谷町 母子及び父子家庭等医療費助成事業",
    "organization": "北谷町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "北谷町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請方法等は北谷町ホームページ案内",
    "officialUrl": "https://www.chatan.jp/kosodate/kosodate/teate_support/boshi_fushi.files/R080401chirashi.pdf",
    "sourceName": "母子及び父子家庭等医療費助成事業"
  },
  {
    "slug": "okinawa-official-005-012-2026",
    "title": "読谷村 重度心身障害者（重度心身障害児）医療費助成について",
    "organization": "読谷村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "読谷村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年04月26日 支給の対象となる医療費 医療機関等において入院・通院をした際に支払った医療費のうち、保険診療の自己負担額(1割～3割)を助成します",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kosodate_kyoiku/jidofukushi/3774.html",
    "sourceName": "重度心身障害者（重度心身障害児）医療費助成について"
  },
  {
    "slug": "okinawa-official-005-013-2026",
    "title": "北中城村 認可外保育施設等を利用している方へ（幼児教育・保育の無償化）",
    "organization": "北中城村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "北中城村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年02月04日 申請書類 および添付書類を、北中城村役場 こども未来課 こども園係まで提出してください",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/bamen/nyuennyugaku/1665.html",
    "sourceName": "認可外保育施設等を利用している方へ（幼児教育・保育の無償化）"
  },
  {
    "slug": "okinawa-official-005-014-2026",
    "title": "北中城村 障害児福祉手当・特別障害者手当制度について",
    "organization": "北中城村",
    "maxAmount": "月額16,560円",
    "maxAmountNum": 16560,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北中城村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年02月20日 支給しています",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/fukushi/shakai/1495.html",
    "sourceName": "障害児福祉手当・特別障害者手当制度について"
  },
  {
    "slug": "okinawa-official-005-015-2026",
    "title": "北中城村 令和8年度 就学援助制度(要保護・準要保護)について",
    "organization": "北中城村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北中城村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年02月20日 支給を受けた方は対象外） 医療費 むし歯・中耳炎・結膜炎等の「学校病」の治療費 受診医療機関 （教育総務課から医療券を受け取り、受診医療機関へ医療券を提示する） 要保護の方は、修学旅行費と医療費が対象",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/iinkai/kyouiku/teate/274.html",
    "sourceName": "令和8年度 就学援助制度(要保護・準要保護)について"
  },
  {
    "slug": "okinawa-official-005-016-2026",
    "title": "北中城村 北中城村学校給食費補助金交付事業",
    "organization": "北中城村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "employment",
      "living"
    ],
    "eligibility": "北中城村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年04月30日 交付事業 更新日：2024年04月30日 今年度の北中城村学校給食費補助金交付事業については、保護者の手続きの軽減（個別申請を不要に）、学校及び役場での事務作業の軽減を目的に、補助金交付要綱を改正し、補助金の交付の方法を見直しております",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/iinkai/kyusyoku/1471.html",
    "sourceName": "北中城村学校給食費補助金交付事業"
  },
  {
    "slug": "okinawa-official-005-017-2026",
    "title": "北中城村 北中城村児童生徒の人材育成に関する県外派遣費用補助金について",
    "organization": "北中城村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北中城村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年06月19日 交付規程をご参照ください",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/iinkai/shogai/shakai/3677.html",
    "sourceName": "北中城村児童生徒の人材育成に関する県外派遣費用補助金について"
  },
  {
    "slug": "okinawa-official-005-018-2026",
    "title": "北中城村 特別児童扶養手当",
    "organization": "北中城村",
    "maxAmount": "月額）等級ごとの手当の額（月額）の一覧表（令和8年4月～）1級2級58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北中城村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 支給される手当です",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/kodomo/jidou/teate/344.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "okinawa-official-005-019-2026",
    "title": "北中城村 物価高対応子育て応援手当について",
    "organization": "北中城村",
    "maxAmount": "支給額児童1人あたり2万円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "北中城村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年01月30日 支給額 対象児童 支給対象者 申請方法 申請書 支給日・申請期限 「物価高対応子育て応援手当」に関する “振り込め詐欺”や“個人情報の詐取”にご注意ください",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/kodomo/jidou/teate/4579.html",
    "sourceName": "物価高対応子育て応援手当について"
  },
  {
    "slug": "okinawa-official-005-020-2026",
    "title": "北中城村 母子及び父子家庭等医療費助成事業",
    "organization": "北中城村",
    "maxAmount": "1人1ヶ月1診療機関につき、1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "北中城村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年10月01日 申請方法 受給者証の有効期限 届出について 給付の方法 一部負担金 所得制限 事業の目的 母子及び父子家庭等に対し、医療費の一部を助成することにより生活の安定と自立を支援し、福祉の増進を図るための事業です",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/kodomo/jidou/teate/SingleParentFamilySupport/343.html",
    "sourceName": "母子及び父子家庭等医療費助成事業"
  },
  {
    "slug": "okinawa-official-005-021-2026",
    "title": "北中城村 児童扶養手当",
    "organization": "北中城村",
    "maxAmount": "月額）手当の額（月額）一覧令和8年4月～区分全部支給一部支給児童が1人の場合48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北中城村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 支給停止措置について 児童扶養手当とは 父母の離婚等により、父（母）と生活を共にできない児童の母（父）や父母にかわって児童を養育している人に対し、児童の福祉の増進を図ることを目的として支給される手当です",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/kodomo/jidou/teate/SingleParentFamilySupport/2488.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okinawa-official-005-022-2026",
    "title": "北中城村 児童手当について",
    "organization": "北中城村",
    "maxAmount": "支給額支給額表児童の年齢児童手当の額(1人当たり月額)0歳～3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北中城村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年11月18日 支給対象 支給額 支払時期 支給要件 認定請求手続き 児童手当関係届出・手続一覧 児童手当は、父母その他の保護者が子育てについての第一義的責任を有するという基本的認識の下に、家庭等における生活の安定に寄与するとともに、次代の社会を担う児童の健や",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/kodomo/jidou/teate/children_allowance/201.html",
    "sourceName": "児童手当について"
  },
  {
    "slug": "okinawa-official-005-023-2026",
    "title": "読谷村 令和8年度【児童扶養手当・母子及び父子家庭等医療費助成】現況届の提出について",
    "organization": "読谷村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "読谷村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年07月16日 提出について 更新日：2026年07月16日 児童扶養手当、母子及び父子家庭等医療費助成の受給者は、前年の所得の状況や児童の養育状況などを確認するために「現況届」の提出が必要です",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kodomonotobira/5411.html",
    "sourceName": "令和8年度【児童扶養手当・母子及び父子家庭等医療費助成】現況届の提出について"
  },
  {
    "slug": "okinawa-official-005-024-2026",
    "title": "読谷村 令和8年度【特別児童扶養手当】所得状況届の提出について",
    "organization": "読谷村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "読谷村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年07月16日 提出について 更新日：2026年07月16日 特別児童扶養手当の受給者は、前年の所得の状況や児童の養育状況などを確認するために「所得状況届」の提出が必要です",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kodomonotobira/5409.html",
    "sourceName": "令和8年度【特別児童扶養手当】所得状況届の提出について"
  },
  {
    "slug": "okinawa-official-005-025-2026",
    "title": "読谷村 児童扶養手当及び特別児童扶養手当に関すること",
    "organization": "読谷村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "読谷村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年04月04日 支給分）から児童扶養手当が変わります",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kosodate_kyoiku/teate_kosodate/3493.html",
    "sourceName": "児童扶養手当及び特別児童扶養手当に関すること"
  },
  {
    "slug": "okinawa-official-005-026-2026",
    "title": "読谷村 母子（寡婦）福祉資金貸付",
    "organization": "読谷村",
    "maxAmount": "公式ページ記載の貸付額・利子補給額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "読谷村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年04月18日 母子（寡婦）福祉資金貸付 更新日：2023年04月18日 母子家庭の母子（配偶者のない女子で現に児童を扶養している方）または、寡婦（かつて扶養していた配偶者のない女子）に対し、その経済的自立の助成と生活意欲の助長を図り、あわせてその児童の福",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/iryo_kenko_fukushi/seikatsu_fukushi/3497.html",
    "sourceName": "母子（寡婦）福祉資金貸付"
  },
  {
    "slug": "okinawa-official-005-027-2026",
    "title": "伊江村 介護用車両購入費等補助金制度について",
    "organization": "伊江村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊江村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年10月08日 申請できる者 ① 伊江村内に１年以上居住している者 ② 要介護者を介護する三親等以内の親族・従兄弟 ③ 介護用車両にかかる費用を支払い、なおかつ車検証の所有者または使用者に氏名が掲載されている者 ④ 村税に滞納のない世帯の者 補 助 額 車両購",
    "officialUrl": "https://www.iejima.org/document/2015070800045/",
    "sourceName": "介護用車両購入費等補助金制度について"
  },
  {
    "slug": "okinawa-official-005-028-2026",
    "title": "読谷村 ひとり親家庭等認可外保育施設利用料補助金事業",
    "organization": "読谷村",
    "maxAmount": "上限：33,000円",
    "maxAmountNum": 33000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "読谷村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年05月20日 支給要件を満たす子どもの保護者は除く） 4. 本村に保育所利用の申し込みを行ったが、定員に空きがない等の理由により認可外保育施設を利用している子どもの保護者 （注釈 認可保育施設の入所を辞退した方は、その時点から対象外となります） 補助額 子ど",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kodomonotobira/5781.html",
    "sourceName": "ひとり親家庭等認可外保育施設利用料補助金事業"
  },
  {
    "slug": "okinawa-official-005-029-2026",
    "title": "読谷村 読谷村育英会（奨学金制度）について",
    "organization": "読谷村",
    "maxAmount": "月額4万円",
    "maxAmountNum": 40000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "読谷村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2024年10月03日 提出をお願いします",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kosodate_kyoiku/teate_kosodate/3661.html",
    "sourceName": "読谷村育英会（奨学金制度）について"
  },
  {
    "slug": "okinawa-official-005-030-2026",
    "title": "伊江村 村県民税の減免について",
    "organization": "伊江村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "伊江村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年07月10日 申請により村県民税が減免される場合があります",
    "officialUrl": "https://www.iejima.org/document/2026071000013/",
    "sourceName": "村県民税の減免について"
  },
  {
    "slug": "okinawa-official-005-031-2026",
    "title": "読谷村 読谷村物価高騰対策支援金給付事業について",
    "organization": "読谷村",
    "maxAmount": "支給額▶1人あたり5,000円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "読谷村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年07月08日 提出していない方は、 7月17日（金曜日）まで に返信用封筒にて提出又はオンライン申請をお願いいたします",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/pickup/7150.html",
    "sourceName": "読谷村物価高騰対策支援金給付事業について"
  },
  {
    "slug": "okinawa-official-005-032-2026",
    "title": "読谷村 令和8年度【高等職業訓練促進給付金】募集について",
    "organization": "読谷村",
    "maxAmount": "最大48月）について、ひとり親家庭の生活の負担軽減を図るため、月額10万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "読谷村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月27日 募集について 更新日：2026年04月27日 母子家庭の母又は父子家庭の父の就労を支援するための制度です",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kodomonotobira/6096.html",
    "sourceName": "令和8年度【高等職業訓練促進給付金】募集について"
  },
  {
    "slug": "okinawa-official-005-033-2026",
    "title": "読谷村 こども医療費助成制度",
    "organization": "読谷村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "読谷村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月24日 交付負担医療の対象となる者及び交通事故等により第三者からの賠償として医療費を受けられる者 現物給付対応の医療機関等については、沖縄県保健医療部保健医療総務課のホームページをご参照ください",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kosodate_kyoiku/boshi_kenko/support_kenko/2061.html",
    "sourceName": "こども医療費助成制度"
  },
  {
    "slug": "okinawa-official-005-034-2026",
    "title": "北中城村 幼稚園の預かり保育について（幼児教育・保育の無償化）",
    "organization": "北中城村",
    "maxAmount": "限度額450円",
    "maxAmountNum": 450,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "北中城村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年02月04日 提出して下さい",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/bamen/nyuennyugaku/3647.html",
    "sourceName": "幼稚園の預かり保育について（幼児教育・保育の無償化）"
  },
  {
    "slug": "okinawa-official-005-035-2026",
    "title": "北中城村 【就学援助】令和7年度新入学用品費の入学前支給について",
    "organization": "北中城村",
    "maxAmount": "支給額・支給時期・支給方法支給額小学校入学予定のお子様54,060円",
    "maxAmountNum": 54060,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北中城村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2025年11月28日 支給について 更新日：2025年11月28日 「新入学用品費」の入学前支給を受けることができる方 支給額・支給時期・支給方法 申請方法 注意事項 【就学援助】新入学学用品費の入学前支給のご案内(PDFファイル:229.4KB) 「新入学用品費」",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/iinkai/kyouiku/teate/3435.html",
    "sourceName": "【就学援助】令和7年度新入学用品費の入学前支給について"
  },
  {
    "slug": "okinawa-official-005-036-2026",
    "title": "北中城村 北中城村 公共下水道接続促進事業補助金交付制度",
    "organization": "北中城村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北中城村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年05月01日 交付制度 更新日：2026年05月01日 北中城村では、 平成28年度より沖縄振興公共投資交付金を活用した、『北中城村公共下水道接続促進事業補助金交付制度』を行っています",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/jouge/gesui/13.html",
    "sourceName": "北中城村 公共下水道接続促進事業補助金交付制度"
  },
  {
    "slug": "okinawa-official-005-037-2026",
    "title": "北中城村 北中城村 雨水利用促進補助金交付制度",
    "organization": "北中城村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "北中城村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年04月01日 交付制度 更新日：2025年04月01日 北中城村では、島袋地域の一部区域内の住宅において、雨水貯留タンクや雨水浸透ますを新たに設置する方、または下水道への接続により不用となった浄化槽を雨水貯留タンクへ改造して利用する方に対して、その設置・改造",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/jouge/gesui/2661.html",
    "sourceName": "北中城村 雨水利用促進補助金交付制度"
  },
  {
    "slug": "okinawa-official-005-038-2026",
    "title": "伊江村 奨学金貸与生の募集について",
    "organization": "伊江村",
    "maxAmount": "月額４万円",
    "maxAmountNum": 40000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊江村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "令和8年2月2日 募集について 伊江村人材育成会では、 令和8年4月に高等学校・専修学校・短期大学・大学 への進学を予定している生徒・学生で就学が困難な学生を対象に、審査の上奨学金を無利息で貸与いたします",
    "officialUrl": "https://www.iejima.org/document/2024101100023/",
    "sourceName": "奨学金貸与生の募集について"
  },
  {
    "slug": "okinawa-official-005-039-2026",
    "title": "伊江村 披露宴助成金支給について",
    "organization": "伊江村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "伊江村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年04月01日 支給について 公開日 2025年04月01日 村内で結婚披露宴を予定している方へ ご結婚おめでとうございます",
    "officialUrl": "https://www.iejima.org/document/2015042700038/",
    "sourceName": "披露宴助成金支給について"
  },
  {
    "slug": "okinawa-official-005-040-2026",
    "title": "読谷村 児童手当の制度改正（令和6年12月支給分から）",
    "organization": "読谷村",
    "maxAmount": "支給額を月30,000円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "読谷村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年12月12日 支給分から） 更新日：2024年12月12日 令和6年10月分（12月支給分）から児童手当の制度が変わります",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kosodate_kyoiku/jidofukushi/5861.html",
    "sourceName": "児童手当の制度改正（令和6年12月支給分から）"
  },
  {
    "slug": "okinawa-official-005-041-2026",
    "title": "読谷村 私立中学校給食費補助金",
    "organization": "読谷村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "読谷村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年10月07日 期限内の申請をお願いいたします",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kosodate_kyoiku/kyoiku_iinkai/6632.html",
    "sourceName": "私立中学校給食費補助金"
  },
  {
    "slug": "okinawa-official-005-042-2026",
    "title": "伊江村 [NEWS]令和６年度 移住定住応援給付金が始まりました",
    "organization": "伊江村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊江村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年04月16日 交付します",
    "officialUrl": "https://www.iejima.org/document/2024041200050/",
    "sourceName": "[NEWS]令和６年度 移住定住応援給付金が始まりました"
  },
  {
    "slug": "okinawa-official-005-043-2026",
    "title": "伊江村 児童手当について",
    "organization": "伊江村",
    "maxAmount": "支給額児童の年齢児童手当の額（１人当たり月額）3歳未満一律１５，０００円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊江村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年07月01日 支給対象 中学校卒業まで（１５歳の誕生日後の最初の３月３１日まで）の児童を養育している方",
    "officialUrl": "https://www.iejima.org/document/2020101900014/",
    "sourceName": "児童手当について"
  },
  {
    "slug": "okinawa-official-005-044-2026",
    "title": "伊江村 電動三輪車等購入費補助金について",
    "organization": "伊江村",
    "maxAmount": "15万円を限度",
    "maxAmountNum": 150000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "伊江村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年08月14日 交付対象者】 伊江村に住所を有し、次のいずれかに該当する者が電動三輪車又は電動四輪車を購入する場合 ・満65歳以上で運転免許を有しない者及び運転免許証を返納した者 ・身体障害者手帳を所有する者で肢体障害で歩行が困難な者 ・上記に掲げるもののほか",
    "officialUrl": "https://www.iejima.org/document/2020081300057/",
    "sourceName": "電動三輪車等購入費補助金について"
  },
  {
    "slug": "okinawa-official-005-045-2026",
    "title": "読谷村 令和8年度こども未来基金収益金事業（助成金）を実施する個人又は団体等を募集します",
    "organization": "読谷村",
    "maxAmount": "100万円を限度",
    "maxAmountNum": 1000000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "読谷村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年03月27日 募集します 更新日：2026年03月27日 1 目的 読谷村こども未来基金条例（令和4年読谷村条例第5号）に規定する読谷村こども未来基金の運用から生ずる益金の運営に関し、村内において子育て支援活動を行う者に対し読谷村こども未来基金の運用から生ず",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/life_scene/kosodate/6924.html",
    "sourceName": "令和8年度こども未来基金収益金事業（助成金）を実施する個人又は団体等を募集します"
  },
  {
    "slug": "okinawa-official-005-046-2026",
    "title": "読谷村 母子及び父子家庭等医療費助成事業",
    "organization": "読谷村",
    "maxAmount": "1人1月1診療機関につき1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "読谷村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年05月27日 申請の方法 対象世帯の保護者は、次の書類を添えてこども未来課窓口で申請の手続きをして下さい",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kodomonotobira/5414.html",
    "sourceName": "母子及び父子家庭等医療費助成事業"
  },
  {
    "slug": "okinawa-official-005-047-2026",
    "title": "北中城村 北中城村ぺーちん商品券",
    "organization": "北中城村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "北中城村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年06月05日 交付金を活用しています～ 令和8年 北中城村ぺーちん商品券配布について 北中城村では物価高騰による負担を軽減すべく、広く村民が利用できる商品券を配布します",
    "officialUrl": "https://www.vill.kitanakagusuku.lg.jp/kakuka/kikaku/chiiki/chiiki/4689.html",
    "sourceName": "北中城村ぺーちん商品券"
  },
  {
    "slug": "okinawa-official-005-048-2026",
    "title": "伊江村 [NEWS]移住支援事業 伊江村移住支援金制度が始まりました",
    "organization": "伊江村",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "伊江村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2023年12月15日 交付するものです",
    "officialUrl": "https://www.iejima.org/document/2023121400014/",
    "sourceName": "[NEWS]移住支援事業 伊江村移住支援金制度が始まりました"
  },
  {
    "slug": "okinawa-official-005-049-2026",
    "title": "伊江村 医療費助成制度について",
    "organization": "伊江村",
    "maxAmount": "月額3歳未満一律15,000円",
    "maxAmountNum": 15000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "伊江村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2015年02月18日 申請期限 申請期限は、受診した翌月から1年以内となります",
    "officialUrl": "https://www.iejima.org/document/2015021800155/",
    "sourceName": "医療費助成制度について"
  },
  {
    "slug": "okinawa-official-005-050-2026",
    "title": "伊江村 伊江村緊急経済対策住宅リフォーム支援事業補助金",
    "organization": "伊江村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "伊江村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2021年07月12日 申請期間：令和８年４月１日～令和９年１月３１日 補助対象者：伊江村にお住まいで村民税等を滞納していない方 対象住宅：申請者が住んでいる住宅 （注 意） 借家の場合は所有者の承諾書が必要です",
    "officialUrl": "https://www.iejima.org/document/2021071200012/",
    "sourceName": "伊江村緊急経済対策住宅リフォーム支援事業補助金"
  },
  {
    "slug": "okinawa-official-005-051-2026",
    "title": "北谷町 北谷町加齢性難聴者補聴器購入費助成事業",
    "organization": "北谷町",
    "maxAmount": "上限額］・住民税非課税世帯の方5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "北谷町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月26日 受付を終了します",
    "officialUrl": "https://www.chatan.jp/kenko_fukushi/koureishafukushi/oshirase/hochoukijosei.html",
    "sourceName": "北谷町加齢性難聴者補聴器購入費助成事業"
  },
  {
    "slug": "okinawa-official-005-052-2026",
    "title": "読谷村 読谷村「妊婦のための支援給付」について",
    "organization": "読谷村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "読谷村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年06月03日 申請できません 読谷村では、令和7年4月より、妊娠期からの切れ目のない支援を行う観点から、子ども・子育て支援法に「妊婦のための支援給付」が創設され、認定を受けた方には、「 妊婦支援給付金 」が支給されます",
    "officialUrl": "https://www.vill.yomitan.okinawa.jp/kosodate_kyoiku/ninshin_shussan/6300.html",
    "sourceName": "読谷村「妊婦のための支援給付」について"
  }
];
