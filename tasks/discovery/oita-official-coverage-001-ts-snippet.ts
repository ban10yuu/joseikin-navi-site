const oitaOfficial001Grants: Array<{
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
    "slug": "oita-official-001-001-2026",
    "title": "大分市 助成制度（軽減措置）",
    "organization": "大分市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大分市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請 （2026年6月1日 登録） 利用者負担の減免 （2026年2月3日 登録） 利用者負担減免申請 （2026年2月3日 登録） 認知症カフェを運営する団体を補助します （2025年12月24日 登録） 介護保険高額介護",
    "officialUrl": "https://www.city.oita.oita.jp/kenko/fukushi/kaigohoken/jose/index.html",
    "sourceName": "助成制度（軽減措置）"
  },
  {
    "slug": "oita-official-001-002-2026",
    "title": "大分市 在宅福祉サービス（補助・助成等）",
    "organization": "大分市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大分市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年7月7日 受付終了】在宅心身障害者住宅設備改造費の補助金についてお知らせします （2026年6月26日 登録） 医療的ケア児・者非常用発電装置等購入費の補助金についてお知らせします （2026年6月16日 登録） 障がい福祉ガイドブッ",
    "officialUrl": "https://www.city.oita.oita.jp/kenko/fukushi/shogai/hojojose/index.html",
    "sourceName": "在宅福祉サービス（補助・助成等）"
  },
  {
    "slug": "oita-official-001-003-2026",
    "title": "大分市 奨学金制度",
    "organization": "大分市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大分市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年5月28日 募集についてお知らせします （2026年5月28日 登録） 大分市貸与型奨学資金未収金回収業務の民間事業者への委託について （2026年5月12日 登録） 大分市貸与型奨学資金未収金回収業務の委託について （2026年5月1",
    "officialUrl": "https://www.city.oita.oita.jp/kosodate/gakkokyoiku/sedo/shogakukin/index.html",
    "sourceName": "奨学金制度"
  },
  {
    "slug": "oita-official-001-004-2026",
    "title": "大分市 国保の給付",
    "organization": "大分市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大分市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月9日 申請を7月21日（火曜日）から受け付けます （2026年7月9日 登録） 医療費の窓口負担を抑える「マイナ保険証」または「限度額適用認定証」の利用について【国保加入者】 （2026年6月1日 登録） 「医療費のお知らせ(医療",
    "officialUrl": "https://www.city.oita.oita.jp/kurashi/kokumin/kenkohoken/kyufu/index.html",
    "sourceName": "国保の給付"
  },
  {
    "slug": "oita-official-001-005-2026",
    "title": "大分市 医療費の助成(障がい者の方へ)",
    "organization": "大分市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "大分市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月1日 支給申請） （2024年12月2日 登録） 障がい者の方へ 障がい者福祉センターのご案内 国民文化祭、全国障害者芸術・文化祭（障がい者の方へ） お知らせ（障がい者の方へ） 手帳の交付 手当・年金 医療費の助成(障がい者の方へ",
    "officialUrl": "https://www.city.oita.oita.jp/kenko/fukushi/shogai/iryohi/index.html",
    "sourceName": "医療費の助成(障がい者の方へ)"
  },
  {
    "slug": "oita-official-001-006-2026",
    "title": "大分市 手当・年金",
    "organization": "大分市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大分市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年1月6日 交付 手当・年金 医療費の助成(障がい者の方へ) 在宅福祉サービス（補助・助成等） 障がい福祉サービス等について（市民の方へ） 障がい福祉サービス等について（事業所の方へ） 相談事業 イベントカレンダー おおいたマップ地図情",
    "officialUrl": "https://www.city.oita.oita.jp/kenko/fukushi/shogai/teate/index.html",
    "sourceName": "手当・年金"
  },
  {
    "slug": "oita-official-001-007-2026",
    "title": "大分市 就学援助制度",
    "organization": "大分市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大分市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 請求について【医療機関のみなさまへ】 （2026年6月1日 登録） 就学援助制度をご存じですか （2026年4月8日 登録） 就学援助制度について （2025年4月1日 登録） 遠距離通学児童生徒への補助制度 （2024年8",
    "officialUrl": "https://www.city.oita.oita.jp/kosodate/gakkokyoiku/sedo/shugakuenjo/index.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "oita-official-001-008-2026",
    "title": "大分市 生ごみ処理機器購入補助",
    "organization": "大分市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大分市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月11日 受付終了】令和8年度の生ごみ処理機器購入補助金について （2026年6月11日 登録） ディスポーザ設置補助金について （2026年4月6日 登録） 生ごみ処理機器にはどんな種類があるのか教えてください （2023年2月15",
    "officialUrl": "https://www.city.oita.oita.jp/kurashi/gomi/gomigenryo/namagomishori/index.html",
    "sourceName": "生ごみ処理機器購入補助"
  },
  {
    "slug": "oita-official-001-009-2026",
    "title": "別府市 児童手当",
    "organization": "別府市",
    "maxAmount": "支給額（月額）支給対象児童0～3歳未満3歳～高校生年代大学生年代第1子第2子15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/teatejyosei/jidouteate.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "oita-official-001-010-2026",
    "title": "別府市 児童扶養手当（所得制限有）",
    "organization": "別府市",
    "maxAmount": "月額）全額支給される場合一部支給される場合児童が1人のとき月額48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/teatejyosei/jidoufuyou.html",
    "sourceName": "児童扶養手当（所得制限有）"
  },
  {
    "slug": "oita-official-001-011-2026",
    "title": "別府市 特別児童扶養手当（所得制限有）",
    "organization": "別府市",
    "maxAmount": "月額1級1人につき月額58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/teatejyosei/jidoufuyou2.html",
    "sourceName": "特別児童扶養手当（所得制限有）"
  },
  {
    "slug": "oita-official-001-012-2026",
    "title": "別府市 ひとり親家庭の医療費助成金",
    "organization": "別府市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "別府市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/teatejyosei/detail10.html",
    "sourceName": "ひとり親家庭の医療費助成金"
  },
  {
    "slug": "oita-official-001-013-2026",
    "title": "別府市 幼児教育・保育の無償化",
    "organization": "別府市",
    "maxAmount": "月額上限25,700円",
    "maxAmountNum": 25700,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "就学前の障がい児の発達支援（いわゆる障害児通園施設）を利用する子どもたちについては満3歳になって初めての4月1日から3年間の利用料が無償化されます。 無償化のための特別な手続きは不要です。 就学前の障がい児の発達支援については 障害福祉課",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/hoiku/musyouka.html",
    "sourceName": "幼児教育・保育の無償化"
  },
  {
    "slug": "oita-official-001-014-2026",
    "title": "別府市 別府市子育て短期支援事業",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "別府市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/kosodatesien/tanki.html",
    "sourceName": "別府市子育て短期支援事業"
  },
  {
    "slug": "oita-official-001-015-2026",
    "title": "別府市 三世代同居世帯・子育て世帯リフォーム支援事業",
    "organization": "別府市",
    "maxAmount": "補助金額最大40万円",
    "maxAmountNum": 400000,
    "category": "childcare",
    "relatedCategories": [
      "housing",
      "employment",
      "living"
    ],
    "eligibility": "別府市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年7月14日 交付します",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/jigyou/3sedai_reform.html",
    "sourceName": "三世代同居世帯・子育て世帯リフォーム支援事業"
  },
  {
    "slug": "oita-official-001-016-2026",
    "title": "別府市 別府市保育士等就労奨励事業補助金",
    "organization": "別府市",
    "maxAmount": "10万円を交付",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/jigyou/hoikushi_hojo.html",
    "sourceName": "別府市保育士等就労奨励事業補助金"
  },
  {
    "slug": "oita-official-001-017-2026",
    "title": "別府市 保育士修学資金・保育士就職準備金貸付事業",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/jigyou/hoikushi_loan.html",
    "sourceName": "保育士修学資金・保育士就職準備金貸付事業"
  },
  {
    "slug": "oita-official-001-018-2026",
    "title": "別府市 特定B型肝炎ウイルス感染者給付金制度",
    "organization": "別府市",
    "maxAmount": "3,600万円の給付",
    "maxAmountNum": 36000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kenkou_iryou/kyuufu_jyosei/detail7.html",
    "sourceName": "特定B型肝炎ウイルス感染者給付金制度"
  },
  {
    "slug": "oita-official-001-019-2026",
    "title": "別府市 別府市骨髄移植ドナー等支援事業助成金交付事業",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "別府市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kenkou_iryou/kyuufu_jyosei/kotsuzui_donor.html",
    "sourceName": "別府市骨髄移植ドナー等支援事業助成金交付事業"
  },
  {
    "slug": "oita-official-001-020-2026",
    "title": "別府市 軽自動車税の減免",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/zeikin/keijidousyazei/detail3.html",
    "sourceName": "軽自動車税の減免"
  },
  {
    "slug": "oita-official-001-021-2026",
    "title": "別府市 年金生活者支援給付金",
    "organization": "別府市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/hokennenkin/kokuminnenkin/nenkin8.html",
    "sourceName": "年金生活者支援給付金"
  },
  {
    "slug": "oita-official-001-022-2026",
    "title": "別府市 有価物回収団体奨励金制度",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kankyou_gomi/g_recycle_center/hojyokin.html",
    "sourceName": "有価物回収団体奨励金制度"
  },
  {
    "slug": "oita-official-001-023-2026",
    "title": "別府市 生ごみ処理機等購入費の補助金交付",
    "organization": "別府市",
    "maxAmount": "上限）20,000円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月1日 交付します",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kankyou_gomi/g_recycle_center/namagomi.html",
    "sourceName": "生ごみ処理機等購入費の補助金交付"
  },
  {
    "slug": "oita-official-001-024-2026",
    "title": "別府市 別府市下水道接続工事補助金交付制度",
    "organization": "別府市",
    "maxAmount": "上限額戸建住宅共同住宅1年以内150,000円",
    "maxAmountNum": 150000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/sumai_tosi/suidou_gesuidou/setuzoku.html",
    "sourceName": "別府市下水道接続工事補助金交付制度"
  },
  {
    "slug": "oita-official-001-025-2026",
    "title": "別府市 飼い主のいない猫の不妊去勢手術助成金事業",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "別府市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kankyou_gomi/petto_doubutu/cat_kyosei.html",
    "sourceName": "飼い主のいない猫の不妊去勢手術助成金事業"
  },
  {
    "slug": "oita-official-001-026-2026",
    "title": "別府市 別府市民営水道施設整備補助金交付制度",
    "organization": "別府市",
    "maxAmount": "限度額3世帯以上2分の1以内300万円",
    "maxAmountNum": 3000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kankyou_gomi/hojyo_jyosei/mineiseibi.html",
    "sourceName": "別府市民営水道施設整備補助金交付制度"
  },
  {
    "slug": "oita-official-001-027-2026",
    "title": "別府市 スズメバチの駆除費に対する補助金",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年10月2日 交付することができませんので、駆除の際はご留意ください",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kankyou_gomi/hojyo_jyosei/suzumebachi.html",
    "sourceName": "スズメバチの駆除費に対する補助金"
  },
  {
    "slug": "oita-official-001-028-2026",
    "title": "別府市 令和8年度 美しいまちづくり奨励事業補助金",
    "organization": "別府市",
    "maxAmount": "上限額令和8年4月1日現在の世帯数×＠100円",
    "maxAmountNum": 100,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年4月1日 交付します",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kankyou_gomi/hojyo_jyosei/utukusii.html",
    "sourceName": "令和8年度 美しいまちづくり奨励事業補助金"
  },
  {
    "slug": "oita-official-001-029-2026",
    "title": "別府市 別府市木造住宅耐震化促進事業補助金交付制度",
    "organization": "別府市",
    "maxAmount": "補助金額補助対象住宅の耐震改修工事に要した費用（上限150万円",
    "maxAmountNum": 1500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "別府市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "請求 別府市木造住宅耐震化促進事業完了報告書（様式第6号） 別府市木造住宅耐震化促進事業完了報告書（様式第6号） 耐震診断が適正であることが分かる資料 その他、市長が必要と認める書類 耐震診断内容適合確認書 現地調査時に撮影",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/sumai_tosi/sumai/detail193.html",
    "sourceName": "別府市木造住宅耐震化促進事業補助金交付制度"
  },
  {
    "slug": "oita-official-001-030-2026",
    "title": "別府市 別府市危険ブロック塀等除却事業補助金交付制度",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "請求 ※いずれか1種類の選択です",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/sumai_tosi/sumai/cbfence_jokyo_kouhu.html",
    "sourceName": "別府市危険ブロック塀等除却事業補助金交付制度"
  },
  {
    "slug": "oita-official-001-031-2026",
    "title": "別府市 水洗便所改造資金貸付金制度",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/sumai_tosi/suidou_gesuidou/suisenbenjyo.html",
    "sourceName": "水洗便所改造資金貸付金制度"
  },
  {
    "slug": "oita-official-001-032-2026",
    "title": "別府市 別府市浄化槽設置整備事業補助金交付制度",
    "organization": "別府市",
    "maxAmount": "補助金額人槽転換前の槽補助金の限度額浄化槽設置工事費既設槽の撤去工事費宅内配管工事費計5人槽汲取り便槽532,000円",
    "maxAmountNum": 532000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/sumai_tosi/suidou_gesuidou/jyokaso_hojyokin.html",
    "sourceName": "別府市浄化槽設置整備事業補助金交付制度"
  },
  {
    "slug": "oita-official-001-033-2026",
    "title": "別府市 べっぷの未来まちづくり支援補助金",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "別府市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付決定団体 令和8年度交付決定団体 令和7年度交付決定団体（活動報告書） 別府市市民活動支援補助金交付決定団体 令和6年度交付決定団体（活動報告書） 令和5年度交付決定団体（活動報告書） 令和4年度交付決定団体（活動報告書",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/kyoudounomatidukuri/kyoudou/katudo_hojo.html",
    "sourceName": "べっぷの未来まちづくり支援補助金"
  },
  {
    "slug": "oita-official-001-034-2026",
    "title": "別府市 まごころ奨学金の募集",
    "organization": "別府市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）： 0977-21-1111 開庁時間：8時30分から17時まで 休庁日：土曜日・日曜日・祝日・年末年始 市役所フロア案内",
    "officialUrl": "https://www.city.beppu.oita.jp/seikatu/bouhan_anzen/hanzai_higai/magokoro.html",
    "sourceName": "まごころ奨学金の募集"
  },
  {
    "slug": "oita-official-001-035-2026",
    "title": "別府市 令和7年度 物価高対応子育て応援手当",
    "organization": "別府市",
    "maxAmount": "1人当たり2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "別府市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "別府市役所 法人番号3000020442020 〒874-8511 大分県別府市上野口町1番15号 地図 電話（代表）：",
    "officialUrl": "https://www.city.beppu.oita.jp/kosodate/teatejyosei/ouenteate.html",
    "sourceName": "令和7年度 物価高対応子育て応援手当"
  },
  {
    "slug": "oita-official-001-036-2026",
    "title": "中津市 【申請受付中】LED照明買替支援補助金",
    "organization": "中津市",
    "maxAmount": "上限額：30,000円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月27日 申請受付中】LED照明買替支援補助金 公開日 2026年04月27日 更新日 2026年07月17日 中津市では、エネルギー価格の高騰による市民の皆様の経済的負担の軽減と、温室効果ガスの削減による脱炭素化の推進を目的として、",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2026042700102/",
    "sourceName": "【申請受付中】LED照明買替支援補助金"
  },
  {
    "slug": "oita-official-001-037-2026",
    "title": "中津市 中山間地域創業・事業承継支援事業補助金",
    "organization": "中津市",
    "maxAmount": "限度額補助率【中山間地域居住者】対象経費の3分の2以内【中山間地域以外の市内居住者】対象経費の2分の1以内補助限度額100万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月14日 申請にあたって、創業・事業承継の事業計画書を提出する必要がありますので、担当又は地域内の創業支援機関（中津市しもげ商工会・各金融機関）へご相談ください",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025041400037/",
    "sourceName": "中山間地域創業・事業承継支援事業補助金"
  },
  {
    "slug": "oita-official-001-038-2026",
    "title": "中津市 女性創業・起業支援補助金",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付申請書[DOCX：14KB] 【様式第2号】事業計画書[DOCX：16.6KB] 【様式第3号】収支予算書[DOCX：13.3KB] 市税等納付状況確認承諾書[DOCX：18.1KB] 実績報告関係様式 【様式第9号】実",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2024062100018/",
    "sourceName": "女性創業・起業支援補助金"
  },
  {
    "slug": "oita-official-001-039-2026",
    "title": "中津市 商店街空き店舗活用事業補助金",
    "organization": "中津市",
    "maxAmount": "限度額100万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 申請書類等 令和8年商店街空き店舗活用チラシ[PDF：247KB] （様式）交付申請書等[DOC：96.5KB] （様式）暴力団排除に係る誓約書[DOC：47KB] （様式）市税納付状況確認承諾書[DOC：32KB] お問い",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2026031100067/",
    "sourceName": "商店街空き店舗活用事業補助金"
  },
  {
    "slug": "oita-official-001-040-2026",
    "title": "中津市 中津市商店街等共同設備補助金",
    "organization": "中津市",
    "maxAmount": "限度額1団体につき50万円",
    "maxAmountNum": 500000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請回数 1団体につき1会計年度中（4月1日～3月31日の間）、1回までとする 必要な書類 提出書類一覧 提出時期 提出書類 申請 補助金交付申請書 交付申請書[DOC：42KB] 、 交付申請書[PDF：77.3KB] 商",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025031800076/",
    "sourceName": "中津市商店街等共同設備補助金"
  },
  {
    "slug": "oita-official-001-041-2026",
    "title": "中津市 災害被害における市税および各種証明書手数料の減免について",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年07月12日 申請により、損害の程度及び所得金額に応じ、税額が軽減又は免除となります",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2023071100118/",
    "sourceName": "災害被害における市税および各種証明書手数料の減免について"
  },
  {
    "slug": "oita-official-001-042-2026",
    "title": "中津市 年金生活者支援給付金",
    "organization": "中津市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "請求書が送付されます",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2023090800044/",
    "sourceName": "年金生活者支援給付金"
  },
  {
    "slug": "oita-official-001-043-2026",
    "title": "中津市 後期高齢者医療保険料等の減免措置について",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "中津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2023年07月19日 申請によって、本人またはその属する世帯の世帯主の所有する住宅等について受けた損害の程度及び所得金額に応じ、保険料額が免除または軽減、支払い猶予ができる場合があります",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2023071900015/",
    "sourceName": "後期高齢者医療保険料等の減免措置について"
  },
  {
    "slug": "oita-official-001-044-2026",
    "title": "中津市 排水設備設置促進補助金",
    "organization": "中津市",
    "maxAmount": "補助金額一戸当たり10万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請書チェックリスト[PDF：267KB] 実績報告時に必要な書類 実績報告書[DOC：34KB] 請求書[DOC：37KB] 浄化槽使用廃止届出書[DOC：39KB] 実績報告書チェックリスト[PDF：360KB] 注意事",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2017042100061/",
    "sourceName": "排水設備設置促進補助金"
  },
  {
    "slug": "oita-official-001-045-2026",
    "title": "中津市 令和8年度中津市省エネルギー診断補助金について",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月09日 申請する年度の4月1日から申請日までに、中津市内に所在する事業所等において、次の省エネルギー診断を受診し、完了したものが対象となります",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025032600040/",
    "sourceName": "令和8年度中津市省エネルギー診断補助金について"
  },
  {
    "slug": "oita-official-001-046-2026",
    "title": "中津市 おおいた園芸産地づくり支援事業公募開始のお知らせ",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年08月29日 申請時に2となっていなくても、事業完了までにいずれかになることが確実に見込まれる農業者、農業法人も対象となります",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025042400104/",
    "sourceName": "おおいた園芸産地づくり支援事業公募開始のお知らせ"
  },
  {
    "slug": "oita-official-001-047-2026",
    "title": "中津市 中津市森林づくり活動支援事業補助金について",
    "organization": "中津市",
    "maxAmount": "補助金額補助対象経費の3分の2の額（1,000円",
    "maxAmountNum": 1000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年05月10日 交付対象である事業の内容 事業実施場所が中津市内かつ次に掲げる事業",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2024050900040/",
    "sourceName": "中津市森林づくり活動支援事業補助金について"
  },
  {
    "slug": "oita-official-001-048-2026",
    "title": "中津市 中津市メイプル耶馬サイクリングロード活用支援補助金について",
    "organization": "中津市",
    "maxAmount": "限度額1団体当たり50万円",
    "maxAmountNum": 500000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年05月23日 交付要綱[PDF：233KB] の別表1をご覧ください",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2024052300169/",
    "sourceName": "中津市メイプル耶馬サイクリングロード活用支援補助金について"
  },
  {
    "slug": "oita-official-001-049-2026",
    "title": "中津市 飲料水供給施設整備事業補助金制度について",
    "organization": "中津市",
    "maxAmount": "補助金額事業費の3分の1の額（その額に100円",
    "maxAmountNum": 100,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2022年05月30日 交付します",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2022052700064/",
    "sourceName": "飲料水供給施設整備事業補助金制度について"
  },
  {
    "slug": "oita-official-001-050-2026",
    "title": "中津市 保育士・幼稚園教諭奨学金返還支援事業費補助金",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "中津市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請書（第1号様式）[PDF：88.1KB 在職証明書（第2号様式）[PDF：98.8KB] 指定保育士養成施設等の卒業を証明するもの（卒業証書の写しまたは卒業証明書） 保育士資格等を証明するもの（保育士証、幼稚園教諭免許状",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2017050200067/",
    "sourceName": "保育士・幼稚園教諭奨学金返還支援事業費補助金"
  },
  {
    "slug": "oita-official-001-051-2026",
    "title": "中津市 中津にこにこ保育支援事業",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請 窓口の 混雑状況 体育施設 予約状況 ご意見・ご要望 市役所で働く 公共交通時刻表 ごみカレンダー 施設マップ くらしの手続き 妊娠・出産 子育て・教育 成人・仕事 結婚・離婚 住まい・引越 ごみ・環境 健康・医療 障",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025081800040/",
    "sourceName": "中津にこにこ保育支援事業"
  },
  {
    "slug": "oita-official-001-052-2026",
    "title": "中津市 認可外保育施設の利用料を助成します",
    "organization": "中津市",
    "maxAmount": "上限35,000円",
    "maxAmountNum": 35000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年10月15日 申請を行ってください",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2019091300034/",
    "sourceName": "認可外保育施設の利用料を助成します"
  },
  {
    "slug": "oita-official-001-053-2026",
    "title": "中津市 中津市ファミリー・サポート・センターひとり親家庭利用料助成制度",
    "organization": "中津市",
    "maxAmount": "助成額利用料金の半額（助成上限額：1年度につき15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年04月04日 申請方法 次の2点を持ってこども家庭センターまたは各支所総務・住民課窓口で申請してください",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2023032900108/",
    "sourceName": "中津市ファミリー・サポート・センターひとり親家庭利用料助成制度"
  },
  {
    "slug": "oita-official-001-054-2026",
    "title": "中津市 令和7年度物価高対応子育て応援手当給付金",
    "organization": "中津市",
    "maxAmount": "1人当たり2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年01月08日 支給することが決定されました",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025122600059/",
    "sourceName": "令和7年度物価高対応子育て応援手当給付金"
  },
  {
    "slug": "oita-official-001-055-2026",
    "title": "中津市 小児慢性特定疾病児童等日常生活用具給付事業",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "中津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年08月01日 申請方法等は次のとおりとなります",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025062600096/",
    "sourceName": "小児慢性特定疾病児童等日常生活用具給付事業"
  },
  {
    "slug": "oita-official-001-056-2026",
    "title": "中津市 妊婦のための支援給付",
    "organization": "中津市",
    "maxAmount": "1人に対し5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "中津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年4月1日 支給対象者 中津市に住民票のある妊婦 支給内容 妊婦のための支援給付金(1回目)：妊婦1人に対し5万円 令和7年4月1日以降に妊娠が確定した妊婦 ※妊娠の確定：医療機関において胎児の心拍を確認 妊婦のための支援給付金(2回目",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025032500067/",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "oita-official-001-057-2026",
    "title": "中津市 児童手当の手続き",
    "organization": "中津市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "請求書 児童手当 額改定請求書・額改定届 児童手当 現況届 児童手当に係る寄附の申出書 児童手当 受給事由消滅届 ご利用にあたっては、 マイナンバーカード スマートフォンまたはパソコン（インターネット接続のもの） （パソコン",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2021011900057/",
    "sourceName": "児童手当の手続き"
  },
  {
    "slug": "oita-official-001-058-2026",
    "title": "中津市 こども医療費助成制度の手続き",
    "organization": "中津市",
    "maxAmount": "上限500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年01月29日 申請を行い、こども医療費受給資格者証を取得する必要があります",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2015031300089/",
    "sourceName": "こども医療費助成制度の手続き"
  },
  {
    "slug": "oita-official-001-059-2026",
    "title": "中津市 児童扶養手当の手続き",
    "organization": "中津市",
    "maxAmount": "月額区分全額支給される者一部支給される者児童1人のとき月額48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年11月01日 支給される手当で、子どもを養育している方（受給資格者）からの申請によって支給されます",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2018020700075/",
    "sourceName": "児童扶養手当の手続き"
  },
  {
    "slug": "oita-official-001-060-2026",
    "title": "中津市 母子・父子・寡婦福祉資金貸付金",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "中津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年04月11日 期限・年利などは資金ごとに条件が異なります",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2011100107887/",
    "sourceName": "母子・父子・寡婦福祉資金貸付金"
  },
  {
    "slug": "oita-official-001-061-2026",
    "title": "中津市 障害児福祉手当",
    "organization": "中津市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2015年02月24日 支給します",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2015032400436/",
    "sourceName": "障害児福祉手当"
  },
  {
    "slug": "oita-official-001-062-2026",
    "title": "中津市 特別児童扶養手当の手続き",
    "organization": "中津市",
    "maxAmount": "月額）障がい等級が2級の場合、36,860円",
    "maxAmountNum": 36860,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2014年04月01日 申請によって支給される手当です",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2015032400429/",
    "sourceName": "特別児童扶養手当の手続き"
  },
  {
    "slug": "oita-official-001-063-2026",
    "title": "中津市 不育症治療費助成制度",
    "organization": "中津市",
    "maxAmount": "助成額と助成期間一組の夫婦に対して、1出産につき1回20万円",
    "maxAmountNum": 200000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年04月03日 申請日において、夫婦(事実婚姻関係を含む)となって1年以上が経過していること 申請日において、1年以上本市の住民基本台帳に記録されていること 市税を完納していること 一般社団法人日本生殖医学会が認定した生殖医療専門医が所属す",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2025021200084/",
    "sourceName": "不育症治療費助成制度"
  },
  {
    "slug": "oita-official-001-064-2026",
    "title": "中津市 妊産婦健診等支援事業(交通費・宿泊費助成)",
    "organization": "中津市",
    "maxAmount": "上限13,400円",
    "maxAmountNum": 13400,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年04月02日 申請方法 必要書類をそろえて、中津市役所こども家庭センター母子保健係に提出ください 申請期限 妊産婦健診等を受診した日から1年以内 申請に必要なもの 母子健康手帳の写し (受診日、病院名の記載必要、記載のない場合は、領収書等",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2024030700035/",
    "sourceName": "妊産婦健診等支援事業(交通費・宿泊費助成)"
  },
  {
    "slug": "oita-official-001-065-2026",
    "title": "中津市 子の看護等休暇奨励金10万円",
    "organization": "中津市",
    "maxAmount": "10万円を支給",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年10月05日 申請・届出 TOP 組織 健康福祉部 子育て支援課 経営者の皆様へ～「子の看護等休暇」奨励金10万円のご案内～ 公開日 2020年10月05日 更新日 2025年04月16日 中津市では、子育て2020（フレーフレー）プロジ",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2020100500031/",
    "sourceName": "子の看護等休暇奨励金10万円"
  },
  {
    "slug": "oita-official-001-066-2026",
    "title": "中津市 令和8年度 移住・定住支援にかかる補助金",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年04月07日 申請・届出 TOP 組織 企画市民環境部 地域振興・広聴課 【令和8年度】移住・定住支援にかかる補助金 公開日 2026年04月07日 更新日 2026年04月28日 【重要】お知らせ 「移住支援金」「移住応援給付金」につい",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2026040700012/",
    "sourceName": "令和8年度 移住・定住支援にかかる補助金"
  },
  {
    "slug": "oita-official-001-067-2026",
    "title": "中津市 災害時のし尿汲み取り手数料の減免について",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中津市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年07月14日 申請 窓口の 混雑状況 体育施設 予約状況 ご意見・ご要望 市役所で働く 公共交通時刻表 ごみカレンダー 施設マップ くらしの手続き 妊娠・出産 子育て・教育 成人・仕事 結婚・離婚 住まい・引越 ごみ・環境 健康・医療 障",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2023071400157/",
    "sourceName": "災害時のし尿汲み取り手数料の減免について"
  },
  {
    "slug": "oita-official-001-068-2026",
    "title": "中津市 令和8年度中津市放課後児童クラブ保護者負担金助成金",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年07月16日 受付について 公開日 2026年07月16日 更新日 2026年07月16日 中津市では、平成28年度より所得等に応じて放課後児童クラブ保護者負担金を助成する制度を設けています",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2023081000026/",
    "sourceName": "令和8年度中津市放課後児童クラブ保護者負担金助成金"
  },
  {
    "slug": "oita-official-001-069-2026",
    "title": "中津市 就学援助制度について",
    "organization": "中津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請 窓口の 混雑状況 体育施設 予約状況 ご意見・ご要望 市役所で働く 公共交通時刻表 ごみカレンダー 施設マップ くらしの手続き 妊娠・出産 子育て・教育 成人・仕事 結婚・離婚 住まい・引越 ごみ・環境 健康・医療 障",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2020052800036/",
    "sourceName": "就学援助制度について"
  },
  {
    "slug": "oita-official-001-070-2026",
    "title": "中津市 中津市奨学資金",
    "organization": "中津市",
    "maxAmount": "月額衛生看護科奨学資金衛生看護科又は准看護師養成所に修学する者月額10,000円",
    "maxAmountNum": 10000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中津市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2014年12月01日 募集期間 毎年1月～2月下旬 ※在学する中学校長を通じて行います",
    "officialUrl": "https://www.city-nakatsu.jp/doc/2014120100364/",
    "sourceName": "中津市奨学資金"
  },
  {
    "slug": "oita-official-001-071-2026",
    "title": "日田市 妊婦のための支援給付",
    "organization": "日田市",
    "maxAmount": "支給額：妊婦1人に対し5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "日田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月8日 支給されます",
    "officialUrl": "https://www.city.hita.oita.jp/site/kosodate/1870.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "oita-official-001-072-2026",
    "title": "日田市 妊婦健康診査を受けましょう",
    "organization": "日田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "日田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月8日 申請により健診費用の一部が助成されます",
    "officialUrl": "https://www.city.hita.oita.jp/site/kosodate/1872.html",
    "sourceName": "妊婦健康診査を受けましょう"
  },
  {
    "slug": "oita-official-001-073-2026",
    "title": "日田市 子どもの居場所づくり事業補助金",
    "organization": "日田市",
    "maxAmount": "上限1万円",
    "maxAmountNum": 10000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "日田市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月4日 交付します",
    "officialUrl": "https://www.city.hita.oita.jp/site/kosodate/1879.html",
    "sourceName": "子どもの居場所づくり事業補助金"
  },
  {
    "slug": "oita-official-001-074-2026",
    "title": "日田市 若年者就業支援事業（UIJターン推進事業）について",
    "organization": "日田市",
    "maxAmount": "3,000円助成",
    "maxAmountNum": 3000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年5月27日 申請が必要) 若年者就業支援事業（UIJターン推進事業）の年間スケジュール（予定） R8UIJターン推進事業年間計画 [PDFファイル／920KB] UIJターン推進事業助成金について UIJターン推進事業（企業インターンシ",
    "officialUrl": "https://www.city.hita.oita.jp/site/iju/2765.html",
    "sourceName": "若年者就業支援事業（UIJターン推進事業）について"
  },
  {
    "slug": "oita-official-001-075-2026",
    "title": "日田市 日田市省エネ家電購入費補助金のお知らせ",
    "organization": "日田市",
    "maxAmount": "上限額本体購入金額（税抜）の3分の1以内上限50,000円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月17日 交付金活用事業】 省エネ家電購入費補助事業チラシ [PDFファイル／830KB] 省エネ家電購入費補助事業補助金交付要綱 [PDFファイル／299KB] 補助金申込の状況 令和8年7月17日 10時現在 申込件数 203件",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/21/15968.html",
    "sourceName": "日田市省エネ家電購入費補助金のお知らせ"
  },
  {
    "slug": "oita-official-001-076-2026",
    "title": "日田市 日田市高齢者エアコン設置支援事業費補助金",
    "organization": "日田市",
    "maxAmount": "上限額9万円",
    "maxAmountNum": 90000,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "日田市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月13日 申請する年度の末日までに65歳以上となる高齢者がいる世帯 市県民税非課税世帯 市税の滞納がない世帯 居住している住宅においてエアコンが1台もない又は故障により使用できるエアコンが1台もない世帯 【注意】故障の例：エアコンがま",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/26/2449.html",
    "sourceName": "日田市高齢者エアコン設置支援事業費補助金"
  },
  {
    "slug": "oita-official-001-077-2026",
    "title": "日田市 住宅再建支援金・災害援護資金",
    "organization": "日田市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年12月8日 支給します",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/22/1627.html",
    "sourceName": "住宅再建支援金・災害援護資金"
  },
  {
    "slug": "oita-official-001-078-2026",
    "title": "日田市 住居確保給付金のご案内",
    "organization": "日田市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給し、住居確保と就労に向けた支援を行う制度です",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/22/1629.html",
    "sourceName": "住居確保給付金のご案内"
  },
  {
    "slug": "oita-official-001-079-2026",
    "title": "日田市 浄化槽の設置に係る補助金",
    "organization": "日田市",
    "maxAmount": "補助額上乗せ補助金宅内配管上乗せ補助既設浄化槽撤去費計（最大）5人槽332,000円",
    "maxAmountNum": 332000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請を行ってください",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/21/2563.html",
    "sourceName": "浄化槽の設置に係る補助金"
  },
  {
    "slug": "oita-official-001-080-2026",
    "title": "日田市 資源回収団体への奨励金",
    "organization": "日田市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年12月8日 交付しています",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/21/2822.html",
    "sourceName": "資源回収団体への奨励金"
  },
  {
    "slug": "oita-official-001-081-2026",
    "title": "日田市 スズメバチ駆除費助成金",
    "organization": "日田市",
    "maxAmount": "上限10,000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年12月8日 交付額に限度はありません",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/21/1298.html",
    "sourceName": "スズメバチ駆除費助成金"
  },
  {
    "slug": "oita-official-001-082-2026",
    "title": "日田市 移住者向け空き家バンク購入費用等の補助制度について",
    "organization": "日田市",
    "maxAmount": "限度額補助率(1)家財の処分10万円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年12月8日 申請の受付を終了します",
    "officialUrl": "https://www.city.hita.oita.jp/site/iju/2396.html",
    "sourceName": "移住者向け空き家バンク購入費用等の補助制度について"
  },
  {
    "slug": "oita-official-001-083-2026",
    "title": "日田市 自治会向け補助事業（自治会活動等推進事業補助金）について",
    "organization": "日田市",
    "maxAmount": "上限額450万円",
    "maxAmountNum": 4500000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年12月8日 交付します",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/8/2753.html",
    "sourceName": "自治会向け補助事業（自治会活動等推進事業補助金）について"
  },
  {
    "slug": "oita-official-001-084-2026",
    "title": "日田市 障がいのある方等の軽自動車税の減免",
    "organization": "日田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日田市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月30日 申請期限及び手続窓口 新規の申請期限 納税通知書を受け取った後から軽自動車税の納期限まで 5月31日（土曜日・日曜日、祝日の場合は翌開庁日） 手続窓口 市役所1階税務課窓口係及び各振興局 障がいのある方のために使用する場合の",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/6/2836.html",
    "sourceName": "障がいのある方等の軽自動車税の減免"
  },
  {
    "slug": "oita-official-001-085-2026",
    "title": "日田市 日田市飼い主のいない猫の不妊去勢手術費助成金について",
    "organization": "日田市",
    "maxAmount": "上限オス：5,000円",
    "maxAmountNum": 5000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年3月27日 交付します",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/21/2447.html",
    "sourceName": "日田市飼い主のいない猫の不妊去勢手術費助成金について"
  },
  {
    "slug": "oita-official-001-086-2026",
    "title": "日田市 特殊詐欺等防止機能付き電話機の設置に対する補助制度があります",
    "organization": "日田市",
    "maxAmount": "上限額10,000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "日田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月15日 交付するものです",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/19/2603.html",
    "sourceName": "特殊詐欺等防止機能付き電話機の設置に対する補助制度があります"
  },
  {
    "slug": "oita-official-001-087-2026",
    "title": "日田市 令和8事業年度「燃油・物価高騰対策緊急支援事業」公募のお知らせ",
    "organization": "日田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "日田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月6日 令和8事業年度「燃油・物価高騰対策緊急支援事業」公募のお知らせ ページID：0016988 更新日：2026年7月6日更新 印刷ページ表示 農林水産業燃油・物価高騰対策事業 大分県は、燃油高騰など中東情勢の影響を受けている農林水産業者の経営",
    "officialUrl": "https://www.city.hita.oita.jp/soshiki/32/16988.html",
    "sourceName": "令和8事業年度「燃油・物価高騰対策緊急支援事業」公募のお知らせ"
  },
  {
    "slug": "oita-official-001-088-2026",
    "title": "佐伯市 佐伯市水道未普及対策事業補助金について",
    "organization": "佐伯市",
    "maxAmount": "限度額は1世帯当たり30万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐伯市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年5月19日 交付対象外",
    "officialUrl": "https://www.city.saiki.oita.jp/kiji0032253/index.html",
    "sourceName": "佐伯市水道未普及対策事業補助金について"
  },
  {
    "slug": "oita-official-001-089-2026",
    "title": "佐伯市 佐伯市子宝支援事業",
    "organization": "佐伯市",
    "maxAmount": "助成額1組の夫婦に対し1年度につき上限30万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "佐伯市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請に係る不妊治療を開始した日の1年以上前から佐伯市民であり、申請日から1年以上本市に居住予定である夫婦 ・市税の滞納がない夫婦 ※年齢制限、所得制限はありません",
    "officialUrl": "https://www.city.saiki.oita.jp/kiji0032281/index.html",
    "sourceName": "佐伯市子宝支援事業"
  },
  {
    "slug": "oita-official-001-090-2026",
    "title": "佐伯市 軽自動車税の減免申請について",
    "organization": "佐伯市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐伯市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月9日 申請について 最終更新日： 2026年4月9日 軽自動車税の減免申請について【障がい】 賦課期日（4月1日）の状況が下記の【減免の対象となる要件】に該当する場合は、納期限までに申請することで当該年度の軽自動車税が減免されます",
    "officialUrl": "https://www.city.saiki.oita.jp/kiji0033431/index.html",
    "sourceName": "軽自動車税の減免申請について"
  },
  {
    "slug": "oita-official-001-091-2026",
    "title": "佐伯市 国民年金 給付",
    "organization": "佐伯市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐伯市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年12月4日 支給される年金 障害基礎年金 国民年金の被保険者期間中や20歳前、60歳以上65歳未満に初診日がある病気やけがによって、障害の程度が1級または2級に該当し、保険料納付要件を満たしている場合に支給される年金 遺族基礎年金 国民",
    "officialUrl": "https://www.city.saiki.oita.jp/kiji0033148/index.html",
    "sourceName": "国民年金 給付"
  },
  {
    "slug": "oita-official-001-092-2026",
    "title": "佐伯市 生ごみ処理容器を購入された方へ補助金を支給します",
    "organization": "佐伯市",
    "maxAmount": "補助金額上限交付の対象となる基数ダンボールコンポスト補助率1/2（50%）補助金上限2,000円",
    "maxAmountNum": 2000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐伯市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月19日 支給します 最終更新日： 2026年6月19日 家庭用生ごみ処理容器購入費用を一部補助します",
    "officialUrl": "https://www.city.saiki.oita.jp/kiji0035406/index.html",
    "sourceName": "生ごみ処理容器を購入された方へ補助金を支給します"
  }
];
