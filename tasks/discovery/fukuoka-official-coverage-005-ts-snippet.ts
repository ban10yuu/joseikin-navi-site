const fukuokaOfficial005Grants: Array<{
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
    "slug": "fukuoka-official-005-001-2026",
    "title": "古賀市 物価高対応子育て応援手当",
    "organization": "古賀市",
    "maxAmount": "支給額対象児童1人につき2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年2月25日 支給します",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/081.php",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "fukuoka-official-005-002-2026",
    "title": "古賀市 初回産科受診料補助",
    "organization": "古賀市",
    "maxAmount": "補助額10,000円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和6年4月1日 申請に必要なものをそろえて、子ども家庭センターで申請してください",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/005.php",
    "sourceName": "初回産科受診料補助"
  },
  {
    "slug": "fukuoka-official-005-003-2026",
    "title": "古賀市 産婦健康診査",
    "organization": "古賀市",
    "maxAmount": "助成額上記の健診内容について、１回５，０００円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "古賀市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和７年４月１日 提出すると、健診費用から助成金額が差し引かれます",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/088.php",
    "sourceName": "産婦健康診査"
  },
  {
    "slug": "fukuoka-official-005-004-2026",
    "title": "古賀市 新生児聴覚検査支援事業",
    "organization": "古賀市",
    "maxAmount": "上限は５，０００円",
    "maxAmountNum": 5000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "提出すると、検査費用から助成金額 が差し引かれます",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/007.php",
    "sourceName": "新生児聴覚検査支援事業"
  },
  {
    "slug": "fukuoka-official-005-005-2026",
    "title": "古賀市 古賀市妊婦のための支援給付金",
    "organization": "古賀市",
    "maxAmount": "1人につき5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "古賀市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年4月1日 支給要件（対象者） 古賀市に住民票がある妊婦さんで以下のいずれかに該当する方 1回目の支給：妊娠届出時 令和7年4月1日以降に妊娠届出を行い、妊婦給付認定の申請後、妊婦給付認定を受けた方 ※医療機関で胎児の心拍の確認がされて",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/091.php",
    "sourceName": "古賀市妊婦のための支援給付金"
  },
  {
    "slug": "fukuoka-official-005-006-2026",
    "title": "古賀市 造血細胞移植後任意予防接種費用助成",
    "organization": "古賀市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付申請をする日及び接種日時点において古賀市に住所を有する人 （２）造血細胞移植等医療行為により、移植前に接種した予防接種ワクチンの免疫が低下 又は消失したため、再接種が必要と医師が認める人 （３）平成31年4月1日以降の再",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/063.php",
    "sourceName": "造血細胞移植後任意予防接種費用助成"
  },
  {
    "slug": "fukuoka-official-005-007-2026",
    "title": "古賀市 子育て短期支援事業",
    "organization": "古賀市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "古賀市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請 まずは、下記お問い合わせ先までご相談ください",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/078.php",
    "sourceName": "子育て短期支援事業"
  },
  {
    "slug": "fukuoka-official-005-008-2026",
    "title": "古賀市 こども誰でも通園制度",
    "organization": "古賀市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "古賀市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請フォームにアクセスし、申請をしてください",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/089.php",
    "sourceName": "こども誰でも通園制度"
  },
  {
    "slug": "fukuoka-official-005-009-2026",
    "title": "古賀市 多様な集団活動事業の利用支援",
    "organization": "古賀市",
    "maxAmount": "補助金額】対象の子ども1人当たり月額20,000円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請時期】 4月、7月、10月、1月（それぞれ前3月分を申請することができます",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/065.php",
    "sourceName": "多様な集団活動事業の利用支援"
  },
  {
    "slug": "fukuoka-official-005-010-2026",
    "title": "古賀市 児童手当",
    "organization": "古賀市",
    "maxAmount": "月額3歳未満第1子・第2子15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給することにより、家庭における生活の安定に寄与するとともに、次代の社会を担う児童の健全な育成および資質の向上に資することを目的としています",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/016.php",
    "sourceName": "児童手当"
  },
  {
    "slug": "fukuoka-official-005-011-2026",
    "title": "古賀市 児童扶養手当",
    "organization": "古賀市",
    "maxAmount": "限度額（令和6年11月から）扶養親族等の数請求者本人孤児等の養育者配偶者扶養義務者全部支給一部支給0人69万円",
    "maxAmountNum": 690000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給する制度です",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/017.php",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "fukuoka-official-005-012-2026",
    "title": "古賀市 特別児童扶養手当",
    "organization": "古賀市",
    "maxAmount": "月額（令和8年4月から）特別児童扶養手当（1級）一人につき58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給する制度です",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/018.php",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "fukuoka-official-005-013-2026",
    "title": "古賀市 自立支援教育訓練給付金",
    "organization": "古賀市",
    "maxAmount": "支給額雇用保険法による教育訓練給付金等の受給資格がない方受講料の6割（上限20万円",
    "maxAmountNum": 200000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請手続 給付金の支給を希望される方は、申請の前に事前相談（来所・電話）をお願いします",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/026.php",
    "sourceName": "自立支援教育訓練給付金"
  },
  {
    "slug": "fukuoka-official-005-014-2026",
    "title": "古賀市 高等職業訓練促進給付金",
    "organization": "古賀市",
    "maxAmount": "支給額区分訓練促進費修了支援金市町村民税非課税世帯月額100,000円",
    "maxAmountNum": 100000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請手続 給付金の支給を希望される方は、申請の前に事前相談（来所・電話）をお願いします",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/027.php",
    "sourceName": "高等職業訓練促進給付金"
  },
  {
    "slug": "fukuoka-official-005-015-2026",
    "title": "古賀市 母子及び父子並びに寡婦福祉資金貸付金",
    "organization": "古賀市",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "古賀市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請時に必ず面接を行っています",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/028.php",
    "sourceName": "母子及び父子並びに寡婦福祉資金貸付金"
  },
  {
    "slug": "fukuoka-official-005-016-2026",
    "title": "古賀市 不妊治療の助成",
    "organization": "古賀市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "不妊治療の助成について｜ 子ども家庭センター｜ 市役所の仕事としくみ｜ 行政情報｜ 古賀市オフィシャルページ --> --> やさしい日本語 読み上げ Language ️ 付箋 縮小 標準 拡大 検索 --> 組織から探す 緊急時の情報 ",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/045.php",
    "sourceName": "不妊治療の助成"
  },
  {
    "slug": "fukuoka-official-005-017-2026",
    "title": "古賀市 未熟児養育医療給付事業",
    "organization": "古賀市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "古賀市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請が必要です",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/014.php",
    "sourceName": "未熟児養育医療給付事業"
  },
  {
    "slug": "fukuoka-official-005-018-2026",
    "title": "古賀市 多胎妊婦の妊婦健康診査費用補助",
    "organization": "古賀市",
    "maxAmount": "補助金額・回数上限額：１回あたり５,１００円",
    "maxAmountNum": 5100,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "古賀市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "受付後、母子手帳・父子手帳（初産のみ） 妊婦健康診査補助券 をすこやか教室開催時に交付しています",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/010.php",
    "sourceName": "多胎妊婦の妊婦健康診査費用補助"
  },
  {
    "slug": "fukuoka-official-005-019-2026",
    "title": "古賀市 子ども食堂支援事業補助金",
    "organization": "古賀市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "古賀市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "交付要綱 （PDF） 古賀市子ども食堂支援事業費補助金運用基準 （PDF） 対象経費 ⑴ 開設・拡充費補助金 備品の購入や修繕費など子ども食堂の開設・拡充に必要な経費に対して補助します",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kosodate/080.php",
    "sourceName": "子ども食堂支援事業補助金"
  },
  {
    "slug": "fukuoka-official-005-020-2026",
    "title": "古賀市 古賀市防災士育成事業補助金",
    "organization": "古賀市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "古賀市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "受付｜ 災害・防災｜ 危機管理課｜ 市役所の仕事としくみ｜ 行政情報｜ 古賀市オフィシャルページ --> --> やさしい日本語 読み上げ Language ️ 付箋 縮小 標準 拡大 検索 --> 組織から探す 緊急時の情",
    "officialUrl": "https://www.city.koga.fukuoka.jp/cityhall/work/kikikanri/saigai/016.php",
    "sourceName": "古賀市防災士育成事業補助金"
  },
  {
    "slug": "fukuoka-official-005-021-2026",
    "title": "福津市 特別児童扶養手当",
    "organization": "福津市",
    "maxAmount": "月額（令和8年4月現在）重度障がい児（1級）1人につき58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 支給されません",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/4/2098.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "fukuoka-official-005-022-2026",
    "title": "福津市 小児慢性特定疾病医療費助成制度",
    "organization": "福津市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2021年07月07日 支給するものです",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/4/8260.html",
    "sourceName": "小児慢性特定疾病医療費助成制度"
  },
  {
    "slug": "fukuoka-official-005-023-2026",
    "title": "福津市 未熟児養育医療",
    "organization": "福津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "福津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年04月16日 支給制度の支給に該当する部分は、医療保険により給付されます",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/4/5247.html",
    "sourceName": "未熟児養育医療"
  },
  {
    "slug": "fukuoka-official-005-024-2026",
    "title": "福津市 子ども医療",
    "organization": "福津市",
    "maxAmount": "月額600円",
    "maxAmountNum": 600,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "福津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月02日 交付した医療証の有効期間外の医療費 入院時の食事療養標準負担額 入院時の室料・ベッド代などの差額分 薬などの容器代 入れ歯などに特別の材料が使用されたもの 後発医薬品のある先発医薬品（ジェネリック医薬品がある）お薬で、先発医",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/4/8383.html",
    "sourceName": "子ども医療"
  },
  {
    "slug": "fukuoka-official-005-025-2026",
    "title": "福津市 物価高対応福岡県子育て応援金",
    "organization": "福津市",
    "maxAmount": "1万円を支給",
    "maxAmountNum": 10000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年05月15日 支給します",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/4/19625.html",
    "sourceName": "物価高対応福岡県子育て応援金"
  },
  {
    "slug": "fukuoka-official-005-026-2026",
    "title": "福津市 ひとり親家庭等医療",
    "organization": "福津市",
    "maxAmount": "月額800円",
    "maxAmountNum": 800,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "福津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月02日 交付した医療証の有効期間外の医療費 入院時の食事療養標準負担額及び生活療養標準負担額 入院時の室料・ベッド代などの差額分 薬などの容器代 入れ歯などに特別の材料が使用されたもの その他、保険者が保険診療と認めていないもの 対",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/1/8385.html",
    "sourceName": "ひとり親家庭等医療"
  },
  {
    "slug": "fukuoka-official-005-027-2026",
    "title": "福津市 妊婦健康診査・妊婦歯科健診",
    "organization": "福津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "福津市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年04月01日 交付を受けた後、健診受診日に福津市に住民票がある妊婦さんが受ける妊婦健康診査費用を14回助成します",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/7/8389.html",
    "sourceName": "妊婦健康診査・妊婦歯科健診"
  },
  {
    "slug": "fukuoka-official-005-028-2026",
    "title": "福津市 障がい者への助成・割引",
    "organization": "福津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年03月08日 申請に必要なもの 身体障害者手帳もしくは療育手帳 自動車検査証（車検証） 運転免許証（身体障害者手帳が第2種の場合のみ） ETCを利用する人は上記に加え、 ETCカード（障がい者本人名義のもの） ETC車載器の管理番号が確認",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kenkou_fukushi/shogai/2140.html",
    "sourceName": "障がい者への助成・割引"
  },
  {
    "slug": "fukuoka-official-005-029-2026",
    "title": "福津市 重度心身障がい者タクシー基本料金助成",
    "organization": "福津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年03月08日 申請が必要です",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kenkou_fukushi/shogai/7570.html",
    "sourceName": "重度心身障がい者タクシー基本料金助成"
  },
  {
    "slug": "fukuoka-official-005-030-2026",
    "title": "福津市 障害児福祉手当",
    "organization": "福津市",
    "maxAmount": "支給額月額16,100円",
    "maxAmountNum": 16100,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年08月01日 支給されます",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kenkou_fukushi/shogai/13016.html",
    "sourceName": "障害児福祉手当"
  },
  {
    "slug": "fukuoka-official-005-031-2026",
    "title": "福津市 特別障害者手当",
    "organization": "福津市",
    "maxAmount": "支給額月額29,590円",
    "maxAmountNum": 29590,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年08月01日 支給されます",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kenkou_fukushi/shogai/13015.html",
    "sourceName": "特別障害者手当"
  },
  {
    "slug": "fukuoka-official-005-032-2026",
    "title": "福津市 就学援助",
    "organization": "福津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2024年02月06日 申請書及び必要書類を提出してください",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/4/9515.html",
    "sourceName": "就学援助"
  },
  {
    "slug": "fukuoka-official-005-033-2026",
    "title": "福津市 母子父子寡婦福祉資金貸付制度",
    "organization": "福津市",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "福津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2022年11月21日 申請時には、借受人や連帯借受人などと必ず面接を行っています",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/1/3139.html",
    "sourceName": "母子父子寡婦福祉資金貸付制度"
  },
  {
    "slug": "fukuoka-official-005-034-2026",
    "title": "福津市 ひとり親家庭等日常生活支援事業",
    "organization": "福津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "福津市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2021年07月14日 ひとり親家庭等日常生活支援事業／福津市 本文へ 背景色変更 文字サイズ Foreign Language イベントを探す 年齢で探す 施設を探す 目的で探す イベントを探す 年齢で探す 施設を探す 目的で探す Foreign Languag",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/1/9531.html",
    "sourceName": "ひとり親家庭等日常生活支援事業"
  },
  {
    "slug": "fukuoka-official-005-035-2026",
    "title": "福津市 産後ケア事業",
    "organization": "福津市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "福津市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年11月20日 申請書(PDFファイル:414.2KB) 対象者 福津市民の産後1年以内の母子で、次のいずれかに当てはまる方 ・育児に不安や負担のある方 ・産後の体調に不安がある方 ・ご家族からのサポートがない方 申し込み方法 子育て世代包",
    "officialUrl": "https://www.city.fukutsu.lg.jp/kodomo/mokuteki/7/5321.html",
    "sourceName": "産後ケア事業"
  },
  {
    "slug": "fukuoka-official-005-036-2026",
    "title": "うきは市 うきは市子育て見守りおむつの定期便",
    "organization": "うきは市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "うきは市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年10月1日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0037813/index.html",
    "sourceName": "うきは市子育て見守りおむつの定期便"
  },
  {
    "slug": "fukuoka-official-005-037-2026",
    "title": "うきは市 うきは市妊婦遠方分娩施設交通費及び宿泊費支援事業",
    "organization": "うきは市",
    "maxAmount": "上限）から、1泊につき2,000円",
    "maxAmountNum": 2000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "うきは市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月12日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0038051/index.html",
    "sourceName": "うきは市妊婦遠方分娩施設交通費及び宿泊費支援事業"
  },
  {
    "slug": "fukuoka-official-005-038-2026",
    "title": "うきは市 産後ケア事業",
    "organization": "うきは市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "うきは市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0034295/index.html",
    "sourceName": "産後ケア事業"
  },
  {
    "slug": "fukuoka-official-005-039-2026",
    "title": "うきは市 産婦健康診査費用助成",
    "organization": "うきは市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "うきは市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0034294/index.html",
    "sourceName": "産婦健康診査費用助成"
  },
  {
    "slug": "fukuoka-official-005-040-2026",
    "title": "うきは市 妊婦歯科健康診査",
    "organization": "うきは市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "うきは市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2019年12月24日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0034292/index.html",
    "sourceName": "妊婦歯科健康診査"
  },
  {
    "slug": "fukuoka-official-005-041-2026",
    "title": "うきは市 新生児聴覚検査費用助成",
    "organization": "うきは市",
    "maxAmount": "上限）耳音響放射検査（OAE）１人あたり１回3,000円",
    "maxAmountNum": 3000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "うきは市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0036597/index.html",
    "sourceName": "新生児聴覚検査費用助成"
  },
  {
    "slug": "fukuoka-official-005-042-2026",
    "title": "うきは市 子育て世帯生活支援特別給付金",
    "organization": "うきは市",
    "maxAmount": "支給額は児童1人当たり一律5万円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "うきは市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年6月30日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0037149/index.html",
    "sourceName": "子育て世帯生活支援特別給付金"
  },
  {
    "slug": "fukuoka-official-005-043-2026",
    "title": "うきは市 養育費確保支援事業",
    "organization": "うきは市",
    "maxAmount": "補助額対象経費の全額（上限３万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "うきは市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年10月1日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0038274/index.html",
    "sourceName": "養育費確保支援事業"
  },
  {
    "slug": "fukuoka-official-005-044-2026",
    "title": "うきは市 特別児童扶養手当",
    "organization": "うきは市",
    "maxAmount": "月額（令和8年4月～）重度障害児（1級）中度障害児（2級）1人につき58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "うきは市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年5月15日 申請書ダウンロード 手続き・補助金ナビ 年齢・対象別で探す 目的別で探す いざというとき 相談窓口 キッズガイド 妊娠・出産 妊産婦健診 母子手帳交付 乳児健診 離乳食教室 産後ボディケア 母親学級 子育て相談 転入された方",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kosodate/kiji0037971/index.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "fukuoka-official-005-045-2026",
    "title": "うきは市 Uターン実家等改修補助金",
    "organization": "うきは市",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "うきは市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月28日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0038563/index.html",
    "sourceName": "Uターン実家等改修補助金"
  },
  {
    "slug": "fukuoka-official-005-046-2026",
    "title": "うきは市 子育て世帯等マイホーム取得支援補助金",
    "organization": "うきは市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "うきは市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0036234/index.html",
    "sourceName": "子育て世帯等マイホーム取得支援補助金"
  },
  {
    "slug": "fukuoka-official-005-047-2026",
    "title": "うきは市 うきは市奨学金返還支援補助金",
    "organization": "うきは市",
    "maxAmount": "最大１２０万円",
    "maxAmountNum": 1200000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "うきは市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0036976/index.html",
    "sourceName": "うきは市奨学金返還支援補助金"
  },
  {
    "slug": "fukuoka-official-005-048-2026",
    "title": "うきは市 浮羽究真館高校生徒下宿等費用支援補助金",
    "organization": "うきは市",
    "maxAmount": "補助額】上限：月額２万円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "うきは市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年4月8日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0037020/index.html",
    "sourceName": "浮羽究真館高校生徒下宿等費用支援補助金"
  },
  {
    "slug": "fukuoka-official-005-049-2026",
    "title": "うきは市 特殊詐欺被害防止電話機等購入費補助",
    "organization": "うきは市",
    "maxAmount": "補助金額購入及び設置費用の2分の1以内（上限10,000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "うきは市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月9日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0036995/index.html",
    "sourceName": "特殊詐欺被害防止電話機等購入費補助"
  },
  {
    "slug": "fukuoka-official-005-050-2026",
    "title": "うきは市 うきは市飲料水戸別確保補助金",
    "organization": "うきは市",
    "maxAmount": "上限額5万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "うきは市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年5月14日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0038070/index.html",
    "sourceName": "うきは市飲料水戸別確保補助金"
  },
  {
    "slug": "fukuoka-official-005-051-2026",
    "title": "うきは市 小児・AYA世代がん患者在宅療養生活支援事業",
    "organization": "うきは市",
    "maxAmount": "上限６万円",
    "maxAmountNum": 60000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "うきは市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月11日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0038031/index.html",
    "sourceName": "小児・AYA世代がん患者在宅療養生活支援事業"
  },
  {
    "slug": "fukuoka-official-005-052-2026",
    "title": "うきは市 特別障害者手当",
    "organization": "うきは市",
    "maxAmount": "月額）月額３０，４５０円",
    "maxAmountNum": 30450,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "うきは市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月16日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0036984/index.html",
    "sourceName": "特別障害者手当"
  },
  {
    "slug": "fukuoka-official-005-053-2026",
    "title": "うきは市 重度障がい者医療費助成",
    "organization": "うきは市",
    "maxAmount": "上限）入院〔一般〕500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "うきは市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月2日 申請 医療費助成 手当・給付金 日常生活・自立支援 高齢者支援 生活のサポート制度 健康に過ごすために 安全・安心なくらし 生活の質の向上 しごと・ボランティア 趣味・学び 地域福祉・支援窓口 生活保護 福祉相談・支援窓口 ",
    "officialUrl": "https://www.city.ukiha.fukuoka.jp/kiji0033468/index.html",
    "sourceName": "重度障がい者医療費助成"
  },
  {
    "slug": "fukuoka-official-005-054-2026",
    "title": "宮若市 宮若市家賃補助金制度",
    "organization": "宮若市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宮若市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請が必要です",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003445014/index.html",
    "sourceName": "宮若市家賃補助金制度"
  },
  {
    "slug": "fukuoka-official-005-055-2026",
    "title": "宮若市 定住奨励金制度",
    "organization": "宮若市",
    "maxAmount": "最大で7年間、105万円",
    "maxAmountNum": 1050000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付します",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003444838/index.html",
    "sourceName": "定住奨励金制度"
  },
  {
    "slug": "fukuoka-official-005-056-2026",
    "title": "宮若市 幼児教育・保育の無償化",
    "organization": "宮若市",
    "maxAmount": "月額上限2万5700円",
    "maxAmountNum": 25700,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 幼児教育・保育の無償化 / 宮若に住まうTOP / 宮若市 ヘッダーをスキップ 本文へジャンプ 背景色 文字サイズ Foreign Language English 中文(简化字) 中文(繁體字) 한국어 日本語 宮若市TOPに戻る 組織か",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003447364/index.html",
    "sourceName": "幼児教育・保育の無償化"
  },
  {
    "slug": "fukuoka-official-005-057-2026",
    "title": "宮若市 宮若市多子世帯利用者負担額減免制度",
    "organization": "宮若市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宮若市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請の対象となります",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003446147/index.html",
    "sourceName": "宮若市多子世帯利用者負担額減免制度"
  },
  {
    "slug": "fukuoka-official-005-058-2026",
    "title": "宮若市 若年者専修学校等技能習得資金貸与制度",
    "organization": "宮若市",
    "maxAmount": "月額）専門課程：53,000円",
    "maxAmountNum": 53000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宮若市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年2月12日 交付日 入学支度金 ：5月末日 4月から7月分：7月末日 8月から11月分：11月末日 12月から3月分：3月末日 ※預金口座に振り込みます",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003448889/index.html",
    "sourceName": "若年者専修学校等技能習得資金貸与制度"
  },
  {
    "slug": "fukuoka-official-005-059-2026",
    "title": "宮若市 就学援助",
    "organization": "宮若市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年1月1日 申請してください",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003449128/index.html",
    "sourceName": "就学援助"
  },
  {
    "slug": "fukuoka-official-005-060-2026",
    "title": "宮若市 子ども医療費支給制度",
    "organization": "宮若市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宮若市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年5月29日 支給制度 / 宮若に住まうTOP / 宮若市 ヘッダーをスキップ 本文へジャンプ 背景色 文字サイズ Foreign Language English 中文(简化字) 中文(繁體字) 한국어 日本語 宮若市TOPに戻る 組織",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003445728/index.html",
    "sourceName": "子ども医療費支給制度"
  },
  {
    "slug": "fukuoka-official-005-061-2026",
    "title": "宮若市 住宅取得補助金",
    "organization": "宮若市",
    "maxAmount": "175万円の補助",
    "maxAmountNum": 1750000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付する住宅取得補助金を開始しました",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003448757/index.html",
    "sourceName": "住宅取得補助金"
  },
  {
    "slug": "fukuoka-official-005-062-2026",
    "title": "宮若市 住宅等改修補助金",
    "organization": "宮若市",
    "maxAmount": "限度額：10万円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付します / 宮若に住まうTOP / 宮若市 ヘッダーをスキップ 本文へジャンプ 背景色 文字サイズ Foreign Language English 中文(简化字) 中文(繁體字) 한국어 日本語 宮若市TOPに戻る 組",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003445500/index.html",
    "sourceName": "住宅等改修補助金"
  },
  {
    "slug": "fukuoka-official-005-063-2026",
    "title": "宮若市 新婚世帯・子育て世帯新生活支援補助金",
    "organization": "宮若市",
    "maxAmount": "補助金額夫婦どちらもが29歳以下･･･最大60万円",
    "maxAmountNum": 600000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付します",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003448906/index.html",
    "sourceName": "新婚世帯・子育て世帯新生活支援補助金"
  },
  {
    "slug": "fukuoka-official-005-064-2026",
    "title": "宮若市 新規事業所開設支援補助金",
    "organization": "宮若市",
    "maxAmount": "補助金額・消費税補助金額対象経費の2分の1（上限100万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月7日 交付を受けていない者 ・事業を行うにあたり、法律に基づく許認可等が必要な場合は、それを有し、又はその取得が確実である者 ・宮若市内に住所を有し、宮若商工会議所又は若宮商工会の会員となる者 ・暴力団、暴力団関係団体、暴力団員及",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003446694/index.html",
    "sourceName": "新規事業所開設支援補助金"
  },
  {
    "slug": "fukuoka-official-005-065-2026",
    "title": "宮若市 新規創業融資資金利子補給金",
    "organization": "宮若市",
    "maxAmount": "上限5万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月7日 交付額 対象融資に係る1年分の利子支払額の2分の1（上限5万円） ※第1回目の利子を召還した日から1年分の利子支払額が対象です",
    "officialUrl": "https://www.city.miyawaka.lg.jp/teiju/kiji003448918/index.html",
    "sourceName": "新規創業融資資金利子補給金"
  },
  {
    "slug": "fukuoka-official-005-066-2026",
    "title": "宮若市 木造一戸建て住宅耐震改修補助金",
    "organization": "宮若市",
    "maxAmount": "補助額耐震改修に要した工事費（消費税を含む）の3分の2に相当する金額と延べ床面積に1平方メートル当たり33,500円",
    "maxAmountNum": 33500,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付します / 宮若市 ヘッダーをスキップ 本文へジャンプ 背景色 文字サイズ Foreign Language English 中文(简化字) 中文(繁體字) 한국어 日本語 宮若市TOPに戻る 組織から探す 庁舎案内図 ",
    "officialUrl": "https://www.city.miyawaka.lg.jp/kiji003445315/index.html",
    "sourceName": "木造一戸建て住宅耐震改修補助金"
  },
  {
    "slug": "fukuoka-official-005-067-2026",
    "title": "宮若市 ブロック塀撤去費用助成",
    "organization": "宮若市",
    "maxAmount": "補助額撤去工事費用の3分の2（上限16万円",
    "maxAmountNum": 160000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宮若市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 請求 税金 市県民税 法人市民税 固定資産税 固定資産税に関する各種届出 軽自動車税 国民健康保険税 その他の税・税制改正 税証明・閲覧 市税の納付・税相談 年金・健康保険 国民年金 国民健康保険 後期高齢者医療 ごみ・リサ",
    "officialUrl": "https://www.city.miyawaka.lg.jp/kiji003447210/index.html",
    "sourceName": "ブロック塀撤去費用助成"
  },
  {
    "slug": "fukuoka-official-005-068-2026",
    "title": "宮若市 老朽危険空家等解体撤去補助金",
    "organization": "宮若市",
    "maxAmount": "上限額50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年5月12日 請求 税金 市県民税 法人市民税 固定資産税 固定資産税に関する各種届出 軽自動車税 国民健康保険税 その他の税・税制改正 税証明・閲覧 市税の納付・税相談 年金・健康保険 国民年金 国民健康保険 後期高齢者医療 ごみ・リサ",
    "officialUrl": "https://www.city.miyawaka.lg.jp/kiji003447008/index.html",
    "sourceName": "老朽危険空家等解体撤去補助金"
  },
  {
    "slug": "fukuoka-official-005-069-2026",
    "title": "宮若市 ひとり親家庭等医療",
    "organization": "宮若市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宮若市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年5月29日 請求 税金 市県民税 法人市民税 固定資産税 固定資産税に関する各種届出 軽自動車税 国民健康保険税 その他の税・税制改正 税証明・閲覧 市税の納付・税相談 年金・健康保険 国民年金 国民健康保険 後期高齢者医療 ごみ・リサ",
    "officialUrl": "https://www.city.miyawaka.lg.jp/kiji003449213/index.html",
    "sourceName": "ひとり親家庭等医療"
  },
  {
    "slug": "fukuoka-official-005-070-2026",
    "title": "宮若市 重度障害者医療制度",
    "organization": "宮若市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "宮若市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年5月29日 請求 税金 市県民税 法人市民税 固定資産税 固定資産税に関する各種届出 軽自動車税 国民健康保険税 その他の税・税制改正 税証明・閲覧 市税の納付・税相談 年金・健康保険 国民年金 国民健康保険 後期高齢者医療 ごみ・リサ",
    "officialUrl": "https://www.city.miyawaka.lg.jp/kiji003445030/index.html",
    "sourceName": "重度障害者医療制度"
  },
  {
    "slug": "fukuoka-official-005-071-2026",
    "title": "宮若市 妊婦のための支援給付",
    "organization": "宮若市",
    "maxAmount": "支給額妊娠届出後5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宮若市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 請求 税金 市県民税 法人市民税 固定資産税 固定資産税に関する各種届出 軽自動車税 国民健康保険税 その他の税・税制改正 税証明・閲覧 市税の納付・税相談 年金・健康保険 国民年金 国民健康保険 後期高齢者医療 ごみ・リサ",
    "officialUrl": "https://www.city.miyawaka.lg.jp/kiji003448354/index.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "fukuoka-official-005-072-2026",
    "title": "宮若市 住宅設備改善助成",
    "organization": "宮若市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 請求 税金 市県民税 法人市民税 固定資産税 固定資産税に関する各種届出 軽自動車税 国民健康保険税 その他の税・税制改正 税証明・閲覧 市税の納付・税相談 年金・健康保険 国民年金 国民健康保険 後期高齢者医療 ごみ・リサ",
    "officialUrl": "https://www.city.miyawaka.lg.jp/kiji003444721/index.html",
    "sourceName": "住宅設備改善助成"
  },
  {
    "slug": "fukuoka-official-005-073-2026",
    "title": "宮若市 保育士就労支援等制度",
    "organization": "宮若市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮若市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 請求 税金 市県民税 法人市民税 固定資産税 固定資産税に関する各種届出 軽自動車税 国民健康保険税 その他の税・税制改正 税証明・閲覧 市税の納付・税相談 年金・健康保険 国民年金 国民健康保険 後期高齢者医療 ごみ・リサ",
    "officialUrl": "https://www.city.miyawaka.lg.jp/kiji003445770/index.html",
    "sourceName": "保育士就労支援等制度"
  },
  {
    "slug": "fukuoka-official-005-074-2026",
    "title": "嘉麻市 嘉麻市転入者等住まい応援交付金",
    "organization": "嘉麻市",
    "maxAmount": "最大50万円",
    "maxAmountNum": 500000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嘉麻市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月29日 交付金のお知らせ - 嘉麻市ホームページ ページの先頭です",
    "officialUrl": "https://www.city.kama.lg.jp/site/kurashi/2537.html",
    "sourceName": "嘉麻市転入者等住まい応援交付金"
  },
  {
    "slug": "fukuoka-official-005-075-2026",
    "title": "嘉麻市 西鉄グランドパス65・75購入補助事業",
    "organization": "嘉麻市",
    "maxAmount": "補助額（Ｒ6.1.20～）価格補助額本人負担額グランドパス653か月券18,000円",
    "maxAmountNum": 18000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嘉麻市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年1月20日 申請に必要なものを持って高齢者介護課または各庁舎市民サービス課で申請する 「グランドパス購入補助証明書」を受け取る 西鉄バスの指定するグランドパス65・75の購入に必要なものと「グランドパス購入補助証明書」を持って飯塚バスタ",
    "officialUrl": "https://www.city.kama.lg.jp/soshiki/15/21207.html",
    "sourceName": "西鉄グランドパス65・75購入補助事業"
  },
  {
    "slug": "fukuoka-official-005-076-2026",
    "title": "嘉麻市 重度障がい者医療",
    "organization": "嘉麻市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "嘉麻市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月3日 重度障がい者医療 - 嘉麻市ホームページ ページの先頭です。 メニューを飛ばして本文へ メニュー JavaScriptが無効のため、文字の大きさ・背景色を変更する機能を使用できません。 本文へ ご利用ガイド サイトマップ Foreign L",
    "officialUrl": "https://www.city.kama.lg.jp/life/1/3/74/",
    "sourceName": "重度障がい者医療"
  },
  {
    "slug": "fukuoka-official-005-077-2026",
    "title": "嘉麻市 子ども医療",
    "organization": "嘉麻市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "嘉麻市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年11月6日 子ども医療 - 嘉麻市ホームページ ページの先頭です。 メニューを飛ばして本文へ メニュー JavaScriptが無効のため、文字の大きさ・背景色を変更する機能を使用できません。 本文へ ご利用ガイド サイトマップ Foreign Lang",
    "officialUrl": "https://www.city.kama.lg.jp/life/1/3/73/",
    "sourceName": "子ども医療"
  },
  {
    "slug": "fukuoka-official-005-078-2026",
    "title": "嘉麻市 ひとり親家庭等医療",
    "organization": "嘉麻市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "嘉麻市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月3日 ひとり親家庭等医療 - 嘉麻市ホームページ ページの先頭です。 メニューを飛ばして本文へ メニュー JavaScriptが無効のため、文字の大きさ・背景色を変更する機能を使用できません。 本文へ ご利用ガイド サイトマップ Foreign ",
    "officialUrl": "https://www.city.kama.lg.jp/life/1/3/75/",
    "sourceName": "ひとり親家庭等医療"
  },
  {
    "slug": "fukuoka-official-005-079-2026",
    "title": "嘉麻市 福岡県よかパパ育休助成金",
    "organization": "嘉麻市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嘉麻市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月10日 申請を受付けています",
    "officialUrl": "https://www.city.kama.lg.jp/soshiki/20/43439.html",
    "sourceName": "福岡県よかパパ育休助成金"
  },
  {
    "slug": "fukuoka-official-005-080-2026",
    "title": "嘉麻市 嘉麻市防犯カメラ設置支援事業補助金",
    "organization": "嘉麻市",
    "maxAmount": "補助額補助対象経費の2分の1以内の額（上限5万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嘉麻市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月1日 交付しています",
    "officialUrl": "https://www.city.kama.lg.jp/soshiki/4/20494.html",
    "sourceName": "嘉麻市防犯カメラ設置支援事業補助金"
  },
  {
    "slug": "fukuoka-official-005-081-2026",
    "title": "嘉麻市 市民提案型事業補助金",
    "organization": "嘉麻市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嘉麻市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年1月8日 募集について 2023年12月27日更新 令和6年度市民提案型事業補助金の募集について 2023年1月4日更新 令和5年度市民提案型事業補助金の募集について 2019年12月23日更新 過去の活動実績 市政情報 --> [[",
    "officialUrl": "https://www.city.kama.lg.jp/life/4/24/26/",
    "sourceName": "市民提案型事業補助金"
  },
  {
    "slug": "fukuoka-official-005-082-2026",
    "title": "嘉麻市 耐震関係支援",
    "organization": "嘉麻市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嘉麻市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 耐震関係 - 嘉麻市ホームページ ページの先頭です。 メニューを飛ばして本文へ メニュー JavaScriptが無効のため、文字の大きさ・背景色を変更する機能を使用できません。 本文へ ご利用ガイド サイトマップ Foreign Langu",
    "officialUrl": "https://www.city.kama.lg.jp/life/1/10/121/",
    "sourceName": "耐震関係支援"
  },
  {
    "slug": "fukuoka-official-005-083-2026",
    "title": "嘉麻市 空き家対策支援",
    "organization": "嘉麻市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嘉麻市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年11月4日 空き家対策 - 嘉麻市ホームページ ページの先頭です。 メニューを飛ばして本文へ メニュー JavaScriptが無効のため、文字の大きさ・背景色を変更する機能を使用できません。 本文へ ご利用ガイド サイトマップ Foreign Lang",
    "officialUrl": "https://www.city.kama.lg.jp/life/1/10/127/",
    "sourceName": "空き家対策支援"
  }
];
