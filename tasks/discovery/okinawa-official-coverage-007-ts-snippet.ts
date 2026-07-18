const okinawaOfficial007Grants: Array<{
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
    "slug": "okinawa-official-007-001-2026",
    "title": "座間味村 島外での通院・入院にかかる費用の補助を一部拡充しました！",
    "organization": "座間味村",
    "maxAmount": "7,000円まで",
    "maxAmountNum": 7000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "座間味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請方法 補助金申請書と必要書類をもって『住民課』まで提出ください",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kenko_fukushi/kenko_iryo/ritoutsuin/",
    "sourceName": "島外での通院・入院にかかる費用の補助を一部拡充しました！"
  },
  {
    "slug": "okinawa-official-007-002-2026",
    "title": "座間味村 令和7年度座間味村インフルエンザ予防接種",
    "organization": "座間味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "座間味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和7年10月3日 募集について Page top 船舶のお問い合わせ先 098-987-2614 観光のお問い合わせ先（座間味村観光協会） 098-987-2277 座間味村役場 〒901-3402 沖縄県島尻郡座間味村座間味109 開庁時間：8時30分から17",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kenko_fukushi/kenko_iryo/1771979751/",
    "sourceName": "令和7年度座間味村インフルエンザ予防接種"
  },
  {
    "slug": "okinawa-official-007-003-2026",
    "title": "座間味村 令和7年度 住民健診・がん検診のお知らせ",
    "organization": "座間味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "座間味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和7年11月25日 提出当日、前日、前々日の3日間のうちから採取するようにしてください",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kenko_fukushi/kenko_iryo/1771993385/",
    "sourceName": "令和7年度 住民健診・がん検診のお知らせ"
  },
  {
    "slug": "okinawa-official-007-004-2026",
    "title": "座間味村 座間味村ファミリーサポートセンター",
    "organization": "座間味村",
    "maxAmount": "1世帯当たりの限度額は、一般世帯は当該年度10,500円",
    "maxAmountNum": 10500,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "座間味村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和７年9月1日 募集について Page top 船舶のお問い合わせ先 098-987-2614 観光のお問い合わせ先（座間味村観光協会） 098-987-2277 座間味村役場 〒901-3402 沖縄県島尻郡座間味村座間味109 開庁時間：8時30分から17",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kosodate/kosodateshien/famisapo/",
    "sourceName": "座間味村ファミリーサポートセンター"
  },
  {
    "slug": "okinawa-official-007-005-2026",
    "title": "座間味村 座間味村 物価高対応子育て応援手当",
    "organization": "座間味村",
    "maxAmount": "1人当たり20,000円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "座間味村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年2月10日 支給について 座間味村では、国の物価高対応子育て応援手当の支給要領に基づき、児童手当の受給者へ、対象児童１人につき20千円の手当を支給することとなりました",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kosodate/kosodateshien/1772186611/",
    "sourceName": "座間味村 物価高対応子育て応援手当"
  },
  {
    "slug": "okinawa-official-007-006-2026",
    "title": "座間味村 児童手当",
    "organization": "座間味村",
    "maxAmount": "月額・支給時期手当月額３歳未満※第１子、第２子：15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "座間味村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給される制度です",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kosodate/kosodateshien/jidouteate/",
    "sourceName": "児童手当"
  },
  {
    "slug": "okinawa-official-007-007-2026",
    "title": "座間味村 こども医療費助成制度",
    "organization": "座間味村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "座間味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "支給を受けている場合 子ども医療費助成金受給資格者証の交付について 医療費助成を受けるためには受給資格の認定申請が必要です",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kosodate/kosodateshien/kodomoiryouhi/",
    "sourceName": "こども医療費助成制度"
  },
  {
    "slug": "okinawa-official-007-008-2026",
    "title": "座間味村 生ごみ処理機の購入補助",
    "organization": "座間味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "座間味村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月25日 募集について 【7月2日に延期】令和8年6月25日(木) 運転免許講習について 公営住宅 上下水道 座間味ダムについて ごみの分別・出し方 リチウム蓄電池等の正しい分別にご協力ください 事業ごみ、そ大ごみ、適正処理困難物 家電リサイクルの集荷",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/life/gomi/namagomi/",
    "sourceName": "生ごみ処理機の購入補助"
  },
  {
    "slug": "okinawa-official-007-009-2026",
    "title": "座間味村 令和７年度座間味村大型２種免許取得助成事業について",
    "organization": "座間味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "座間味村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年6月25日 募集期間 8月8日（金）から12月19日（金） 17：00 まで 座間味村役場 船舶・観光課 担当 與那嶺 電話番号 098-987-2614 詳細については下記添付資料をご参照下さい",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/life/1771923529/",
    "sourceName": "令和７年度座間味村大型２種免許取得助成事業について"
  },
  {
    "slug": "okinawa-official-007-010-2026",
    "title": "座間味村 座間味村食料品等物価高騰対策・島ちゃび解消支援給付金",
    "organization": "座間味村",
    "maxAmount": "支給額4.3万円",
    "maxAmountNum": 43000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "座間味村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年12月31日 交付金／重点支援地方交付金を活用し、全村民に対し給付金 4.3万円 を支給します",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kyufukin/1772183525/",
    "sourceName": "座間味村食料品等物価高騰対策・島ちゃび解消支援給付金"
  },
  {
    "slug": "okinawa-official-007-011-2026",
    "title": "座間味村 座間味村物価高騰対策くらし応援給付金",
    "organization": "座間味村",
    "maxAmount": "支給額65歳以上の高齢者：3万円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "座間味村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年10月31日 支給する",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kyufukin/1772004283/",
    "sourceName": "座間味村物価高騰対策くらし応援給付金"
  },
  {
    "slug": "okinawa-official-007-012-2026",
    "title": "座間味村 （再掲）座間味村定額減税補足給付金（不足額給付）支給のお知らせ",
    "organization": "座間味村",
    "maxAmount": "支給額上限4万円",
    "maxAmountNum": 40000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "座間味村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年11月28日 支給のお知らせ [掲載開始日： 2025&#24180;11&#26376;17&#26085; ] 座間味村定額減税補足給付金について ※申請期限が 令和7年11月28日（金曜日） までとなっております",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kyufukin/1771999167/",
    "sourceName": "（再掲）座間味村定額減税補足給付金（不足額給付）支給のお知らせ"
  },
  {
    "slug": "okinawa-official-007-013-2026",
    "title": "座間味村 帯状疱疹任意予防接種費用一部助成事業",
    "organization": "座間味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "座間味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "募集について Page top 船舶のお問い合わせ先 098-987-2614 観光のお問い合わせ先（座間味村観光協会） 098-987-2277 座間味村役場 〒901-3402 沖縄県島尻郡座間味村座間味109 開庁時間：8時30分から17",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kenko_fukushi/kenko_iryo/taijohoshin/",
    "sourceName": "帯状疱疹任意予防接種費用一部助成事業"
  },
  {
    "slug": "okinawa-official-007-014-2026",
    "title": "座間味村 高校生の生活支援",
    "organization": "座間味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "座間味村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集について Page top 船舶のお問い合わせ先 098-987-2614 観光のお問い合わせ先（座間味村観光協会） 098-987-2277 座間味村役場 〒901-3402 沖縄県島尻郡座間味村座間味109 開庁時間：8時30分から17",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kosodate/kosodateshien/highschool/",
    "sourceName": "高校生の生活支援"
  },
  {
    "slug": "okinawa-official-007-015-2026",
    "title": "座間味村 不妊治療",
    "organization": "座間味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "座間味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "交付 各種健診について 不妊治療 くらしの情報 戸籍・住民票・証明 税金 保険・年金 健康・医療・福祉 子育て・教育 妊娠・出産 親子（母子）健康手帳の交付 各種健診について 不妊治療 子育て支援 保育園 幼稚園 小中学校 座間味村教育委員会",
    "officialUrl": "https://www.vill.zamami.okinawa.jp/kurashi/kosodate/ninshinshussan/funinchiryo/",
    "sourceName": "不妊治療"
  },
  {
    "slug": "okinawa-official-007-016-2026",
    "title": "粟国村 粟国村離島患者等通院費助成事業について",
    "organization": "粟国村",
    "maxAmount": "上限7,000円",
    "maxAmountNum": 7000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "粟国村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年04月02日 交付を受けた方で、母子保健法に基づく妊婦健康診査及び産後1ヶ月目までの産婦健康診査 5 未熟児及びその親権を行う者 母子保健法における未熟児であって、粟国村が給付する養育医療を受ける方",
    "officialUrl": "https://www.vill.aguni.okinawa.jp/kennkouhuskusi/ritokan/1210.html",
    "sourceName": "粟国村離島患者等通院費助成事業について"
  },
  {
    "slug": "okinawa-official-007-017-2026",
    "title": "粟国村 児童扶養手当について",
    "organization": "粟国村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "粟国村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年08月05日 児童扶養手当について Tweet 更新日：2024年08月05日 児童扶養手当に関する大切なお知らせ 令和6年11月1日から法律の改正に伴い所得限度額と第3子以降の加算額が引き上げられます。詳細は下記の資料をご参照ください。 民生課からのお",
    "officialUrl": "https://www.vill.aguni.okinawa.jp/kosodate/minseijyouhou/1022.html",
    "sourceName": "児童扶養手当について"
  },
  {
    "slug": "okinawa-official-007-018-2026",
    "title": "粟国村 母子及び父子家庭等医療費助成事業の対象拡大について(1)",
    "organization": "粟国村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "粟国村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年03月21日 母子及び父子家庭等医療費助成事業の対象拡大について(1) Tweet 更新日：2025年03月21日 母子及び父子家庭等医療費助成事業の対象拡大について 令和6年5月より、母子及び父子家庭等医療費助成の補助対象者が拡大されます。 下記の添付",
    "officialUrl": "https://www.vill.aguni.okinawa.jp/kosodate/minseijyouhou/952.html",
    "sourceName": "母子及び父子家庭等医療費助成事業の対象拡大について(1)"
  },
  {
    "slug": "okinawa-official-007-019-2026",
    "title": "粟国村 ひとり親家庭支援奨学金制度",
    "organization": "粟国村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "粟国村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年03月06日 募集案内 一般財団法人全国母子寡婦福祉団体協議会より、みだしの件で募集案内がされています",
    "officialUrl": "https://www.vill.aguni.okinawa.jp/kosodate/minseijyouhou/1125.html",
    "sourceName": "ひとり親家庭支援奨学金制度"
  },
  {
    "slug": "okinawa-official-007-020-2026",
    "title": "粟国村 妊娠・出産",
    "organization": "粟国村",
    "maxAmount": "1人につき第1子80,000円",
    "maxAmountNum": 80000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "粟国村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年03月01日 交付します",
    "officialUrl": "https://www.vill.aguni.okinawa.jp/kosodate/minseijyouhou/892.html",
    "sourceName": "妊娠・出産"
  },
  {
    "slug": "okinawa-official-007-021-2026",
    "title": "渡名喜村 令和７年度 物価高騰対応重点支援地方創生臨時交付金",
    "organization": "渡名喜村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "渡名喜村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和７年１月１日 受付期間は令和７年１０月１５日から令和７年１１月１４日まで",
    "officialUrl": "http://www.vill.tonaki.okinawa.jp/detail.jsp?id=104649&type=TopicsTopPage&select=&funcid=2&editMode=",
    "sourceName": "令和７年度 物価高騰対応重点支援地方創生臨時交付金"
  },
  {
    "slug": "okinawa-official-007-022-2026",
    "title": "渡名喜村 渡名喜村給付金・物価高騰対応支援給付金",
    "organization": "渡名喜村",
    "maxAmount": "３万円を支給",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "渡名喜村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和６年１２月１３日 支給",
    "officialUrl": "http://www.vill.tonaki.okinawa.jp/detail.jsp?id=104509&type=TopicsTopPage&select=&funcid=2&editMode=",
    "sourceName": "渡名喜村給付金・物価高騰対応支援給付金"
  },
  {
    "slug": "okinawa-official-007-023-2026",
    "title": "渡名喜村 渡名喜村給付金・定額減税一体支援事業【調整給付】",
    "organization": "渡名喜村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical",
      "employment"
    ],
    "eligibility": "渡名喜村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和6年1月1日 申請期限は令和6年11月8日、受付終了",
    "officialUrl": "http://www.vill.tonaki.okinawa.jp/detail.jsp?id=104282&type=TopicsTopPage&select=&funcid=2&editMode=",
    "sourceName": "渡名喜村給付金・定額減税一体支援事業【調整給付】"
  },
  {
    "slug": "okinawa-official-007-024-2026",
    "title": "南大東村 児童手当",
    "organization": "南大東村",
    "maxAmount": "支給額3歳未満：15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南大東村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年1月27日 支給対象 高校生卒業まで（18歳に到達後最初の3月31日まで）の児童を養育している方 1原則として、日本国内に住んでいる場合に支給します",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/navi/460.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "okinawa-official-007-025-2026",
    "title": "南大東村 南大東村母子及び父子家庭等医療費助成制度",
    "organization": "南大東村",
    "maxAmount": "1人1ヶ月につき1つの医療機関と、同医療機関から処方された薬局調剤分を合算して1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "南大東村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月1日 請求者名義の通帳 ⑸ その他必要と認められる書類 助成の範囲 各医療保険診療にかかる自己負担分から、一部負担金、他の法律等で負担する分、高額療養費分、各保険による付加給付分を差し引いた額を助成します",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/496.html",
    "sourceName": "南大東村母子及び父子家庭等医療費助成制度"
  },
  {
    "slug": "okinawa-official-007-026-2026",
    "title": "南大東村 こども医療費助成",
    "organization": "南大東村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "南大東村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月1日 支給される高額療養費および附加給付金が発生する場合は、それらを差し引いた額の助成となります",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/500.html",
    "sourceName": "こども医療費助成"
  },
  {
    "slug": "okinawa-official-007-027-2026",
    "title": "南大東村 島外の医療施設への受診に係る通院費助成の対象患者について",
    "organization": "南大東村",
    "maxAmount": "14万円限度",
    "maxAmountNum": 140000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南大東村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月1日 島外の医療施設への受診に係る通院費助成の対象患者について 更新日：2026年2月1日更新 ページID：0000508 印刷ページ表示 Post 南大東村難病患者等島外医療施設の受診にかかる渡航費助成​ 村内に居住し、当該の医療施設へ通院する",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/508.html",
    "sourceName": "島外の医療施設への受診に係る通院費助成の対象患者について"
  },
  {
    "slug": "okinawa-official-007-028-2026",
    "title": "南大東村 島外での専門病院治療等にかかる渡航費助成",
    "organization": "南大東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南大東村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月2日 提出が必要となります",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/554.html",
    "sourceName": "島外での専門病院治療等にかかる渡航費助成"
  },
  {
    "slug": "okinawa-official-007-029-2026",
    "title": "南大東村 任意予防接種の助成",
    "organization": "南大東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南大東村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月3日 任意予防接種の助成 更新日：2026年2月3日更新 ページID：0000557 印刷ページ表示 Post 予防接種の助成 予防接種には法律に基づいて市区町村が実施する 「定期接種」 と、 希望者が各自で受ける「任意接種」 があります。 接種",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/557.html",
    "sourceName": "任意予防接種の助成"
  },
  {
    "slug": "okinawa-official-007-030-2026",
    "title": "南大東村 自立支援医療制度（精神通院）",
    "organization": "南大東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南大東村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月4日 申請時に届け出た医療機関以外では公費は負担されません（通院先等を変更する場合は、変更の申請が必要となります）",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/619.html",
    "sourceName": "自立支援医療制度（精神通院）"
  },
  {
    "slug": "okinawa-official-007-031-2026",
    "title": "南大東村 一時あずかり事業",
    "organization": "南大東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "南大東村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月15日 一時あずかり事業 更新日：2026年6月15日更新 ページID：0001486 印刷ページ表示 Post 一時あずかり事業 南大東村では、保護者の育児負担の軽減やリフレッシュを目的に生後6ヵ月から保育所入所までのお子さまを対象とした「一時あ",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/1486.html",
    "sourceName": "一時あずかり事業"
  },
  {
    "slug": "okinawa-official-007-032-2026",
    "title": "南大東村 ファミリー・サポート・センター",
    "organization": "南大東村",
    "maxAmount": "1人5,000円",
    "maxAmountNum": 5000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南大東村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年2月3日 ファミリー・サポート・センター 現在地 くらしの情報トップページ &gt; 分類でさがす &gt; くらし &gt; 子育て・教育・スポーツ &gt; 保育所・幼稚園 &gt; 保健センター &gt; ファミリー・サポート・センター 現在地",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/530.html",
    "sourceName": "ファミリー・サポート・センター"
  },
  {
    "slug": "okinawa-official-007-033-2026",
    "title": "南大東村 里帰り出産における妊婦健康診査費用の払い戻し",
    "organization": "南大東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "南大東村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月3日 申請をお願いします",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/site/hoken-c/580.html",
    "sourceName": "里帰り出産における妊婦健康診査費用の払い戻し"
  },
  {
    "slug": "okinawa-official-007-034-2026",
    "title": "南大東村 令和8年度南大東村生活応援商品券事業のお知らせ",
    "organization": "南大東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "南大東村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月22日 申請者本人の身分証明書 ※異なる世帯の方の受け取りをする際は、委任状が必要となります",
    "officialUrl": "https://www.vill.minamidaito.okinawa.jp/page/1256.html",
    "sourceName": "令和8年度南大東村生活応援商品券事業のお知らせ"
  },
  {
    "slug": "okinawa-official-007-035-2026",
    "title": "北大東村 出産お祝い金",
    "organization": "北大東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "北大東村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "交付しています",
    "officialUrl": "https://vill.kitadaito.okinawa.jp/life_event/ninsin_syussan/kodomo/oiwaikin.html",
    "sourceName": "出産お祝い金"
  }
];
