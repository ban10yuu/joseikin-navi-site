const osakaOfficial007Grants: Array<{
  slug: string;
  title: string;
  organization: string;
  maxAmount: string;
  maxAmountNum: number;
  category: Grant['category'];
  relatedCategories?: Grant['relatedCategories'];
  eligibility: string;
  applicationPeriod: string;
  deadlineDate?: string;
  officialUrl: string;
  sourceName: string;
  sourceUrls?: Grant['sourceUrls'];
}> = [
  {
    "slug": "osaka-official-007-001-2026",
    "title": "四條畷市 最高裁判決を踏まえた生活保護費の追加給付について",
    "organization": "四條畷市",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "四條畷市内で最高裁判決を踏まえた生活保護費の追加給付についての公式要件を満たす方または団体等",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/128338.html",
    "sourceName": "四條畷市 最高裁判決を踏まえた生活保護費の追加給付について"
  },
  {
    "slug": "osaka-official-007-002-2026",
    "title": "四條畷市 生活資金の貸付けについて",
    "organization": "四條畷市",
    "maxAmount": "貸付・融資または利子等を支援",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "四條畷市内で生活資金の貸付けについての公式要件を満たす方または団体等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/27-18623.html",
    "sourceName": "四條畷市 生活資金の貸付けについて"
  },
  {
    "slug": "osaka-official-007-003-2026",
    "title": "四條畷市 空き家などのリフォーム工事を支援します！",
    "organization": "四條畷市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市内の住宅・建築物・居住等について公式要件を満たす所有者・居住者等",
    "applicationPeriod": "着手前または利用前に公式ページ記載の申請手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/19-62432.html",
    "sourceName": "四條畷市 空き家などのリフォーム工事を支援します！"
  },
  {
    "slug": "osaka-official-007-004-2026",
    "title": "四條畷市 四條畷市国民健康保険被保険者の人間ドック・脳ドックの助成",
    "organization": "四條畷市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/32-1205.html",
    "sourceName": "四條畷市 四條畷市国民健康保険被保険者の人間ドック・脳ドックの助成"
  },
  {
    "slug": "osaka-official-007-005-2026",
    "title": "四條畷市 児童手当制度のご案内",
    "organization": "四條畷市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、児童手当制度のご案内の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/site/kosodate/1533.html",
    "sourceName": "四條畷市 児童手当制度のご案内"
  },
  {
    "slug": "osaka-official-007-006-2026",
    "title": "四條畷市 児童扶養手当",
    "organization": "四條畷市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、児童扶養手当の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/site/kosodate/1535.html",
    "sourceName": "四條畷市 児童扶養手当"
  },
  {
    "slug": "osaka-official-007-007-2026",
    "title": "四條畷市 ひとり親家庭の皆さんが利用できる各種制度",
    "organization": "四條畷市",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、ひとり親家庭の皆さんが利用できる各種制度の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/site/kosodate/39477.html",
    "sourceName": "四條畷市 ひとり親家庭の皆さんが利用できる各種制度"
  },
  {
    "slug": "osaka-official-007-008-2026",
    "title": "四條畷市 ひとり親家庭等の資格取得・職業訓練相談",
    "organization": "四條畷市",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、ひとり親家庭等の資格取得・職業訓練相談の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/site/kosodate/7578.html",
    "sourceName": "四條畷市 ひとり親家庭等の資格取得・職業訓練相談"
  },
  {
    "slug": "osaka-official-007-009-2026",
    "title": "四條畷市 重度障がい者医療費助成制度",
    "organization": "四條畷市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/30-12956.html",
    "sourceName": "四條畷市 重度障がい者医療費助成制度"
  },
  {
    "slug": "osaka-official-007-010-2026",
    "title": "四條畷市 自立支援医療費(精神通院医療)の申請の手続き",
    "organization": "四條畷市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/30-1374.html",
    "sourceName": "四條畷市 自立支援医療費(精神通院医療)の申請の手続き"
  },
  {
    "slug": "osaka-official-007-011-2026",
    "title": "四條畷市 特別障害者手当",
    "organization": "四條畷市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/30-1399.html",
    "sourceName": "四條畷市 特別障害者手当"
  },
  {
    "slug": "osaka-official-007-012-2026",
    "title": "四條畷市 特別児童扶養手当",
    "organization": "四條畷市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、特別児童扶養手当の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/30-1400.html",
    "sourceName": "四條畷市 特別児童扶養手当"
  },
  {
    "slug": "osaka-official-007-013-2026",
    "title": "四條畷市 障害児福祉手当",
    "organization": "四條畷市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/30-1398.html",
    "sourceName": "四條畷市 障害児福祉手当"
  },
  {
    "slug": "osaka-official-007-014-2026",
    "title": "四條畷市 医療・補装具・各種制度一覧表",
    "organization": "四條畷市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/30-1372.html",
    "sourceName": "四條畷市 医療・補装具・各種制度一覧表"
  },
  {
    "slug": "osaka-official-007-015-2026",
    "title": "四條畷市 木造住宅除却工事における補助制度",
    "organization": "四條畷市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "四條畷市内の住宅・建築物・居住等について公式要件を満たす所有者・居住者等",
    "applicationPeriod": "着手前または利用前に公式ページ記載の申請手続に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/19-62111.html",
    "sourceName": "四條畷市 木造住宅除却工事における補助制度"
  },
  {
    "slug": "osaka-official-007-016-2026",
    "title": "四條畷市 創業希望者を支援します",
    "organization": "四條畷市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "business",
    "relatedCategories": [
      "living",
      "employment"
    ],
    "eligibility": "四條畷市内で対象事業・雇用・創業・融資等に取り組み、公式要件を満たす事業者または個人等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.shijonawate.lg.jp/page/14-2370.html",
    "sourceName": "四條畷市 創業希望者を支援します"
  },
  {
    "slug": "osaka-official-007-017-2026",
    "title": "交野市 こども医療費助成制度",
    "organization": "交野市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2013012800108/",
    "sourceName": "交野市 こども医療費助成制度"
  },
  {
    "slug": "osaka-official-007-018-2026",
    "title": "交野市 令和6年10月分から児童手当の制度が変わります",
    "organization": "交野市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、令和6年10月分から児童手当の制度が変わりますの公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2024062000028/",
    "sourceName": "交野市 令和6年10月分から児童手当の制度が変わります"
  },
  {
    "slug": "osaka-official-007-019-2026",
    "title": "交野市 大人の風しん予防接種助成について",
    "organization": "交野市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2018032700018/",
    "sourceName": "交野市 大人の風しん予防接種助成について"
  },
  {
    "slug": "osaka-official-007-020-2026",
    "title": "交野市 児童扶養手当",
    "organization": "交野市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、児童扶養手当の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2011080300216/",
    "sourceName": "交野市 児童扶養手当"
  },
  {
    "slug": "osaka-official-007-021-2026",
    "title": "交野市 初回産科受診費用の助成について",
    "organization": "交野市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "交野市内で初回産科受診費用の助成についての公式要件を満たす方または団体等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2023072600013/",
    "sourceName": "交野市 初回産科受診費用の助成について"
  },
  {
    "slug": "osaka-official-007-022-2026",
    "title": "交野市 産後ケア事業",
    "organization": "交野市",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、産後ケア事業の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2019031500036/",
    "sourceName": "交野市 産後ケア事業"
  },
  {
    "slug": "osaka-official-007-023-2026",
    "title": "交野市 出産育児一時金の支給",
    "organization": "交野市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、出産育児一時金の支給の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2011080400459/",
    "sourceName": "交野市 出産育児一時金の支給"
  },
  {
    "slug": "osaka-official-007-024-2026",
    "title": "交野市 交野市の空き家対策について",
    "organization": "交野市",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市内の住宅・建築物・居住等について公式要件を満たす所有者・居住者等",
    "applicationPeriod": "着手前または利用前に公式ページ記載の申請手続に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2019052900020/",
    "sourceName": "交野市 交野市の空き家対策について"
  },
  {
    "slug": "osaka-official-007-025-2026",
    "title": "交野市 交野市子育て短期支援事業",
    "organization": "交野市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、交野市子育て短期支援事業の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2026062200019/",
    "sourceName": "交野市 交野市子育て短期支援事業"
  },
  {
    "slug": "osaka-official-007-026-2026",
    "title": "交野市 養育費履行確保等の支援について",
    "organization": "交野市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、養育費履行確保等の支援についての公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2026062300030/",
    "sourceName": "交野市 養育費履行確保等の支援について"
  },
  {
    "slug": "osaka-official-007-027-2026",
    "title": "交野市 意思疎通支援事業について",
    "organization": "交野市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "business",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市内で対象事業・雇用・創業・融資等に取り組み、公式要件を満たす事業者または個人等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2026062300047/",
    "sourceName": "交野市 意思疎通支援事業について"
  },
  {
    "slug": "osaka-official-007-028-2026",
    "title": "交野市 移動支援事業・通学移動支援事業・日中一時支援事業の委託料請求関係書類について",
    "organization": "交野市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "business",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市内で対象事業・雇用・創業・融資等に取り組み、公式要件を満たす事業者または個人等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2022031500012/",
    "sourceName": "交野市 移動支援事業・通学移動支援事業・日中一時支援事業の委託料請求関係書類について"
  },
  {
    "slug": "osaka-official-007-029-2026",
    "title": "交野市 交野市重度訪問介護利用者の大学修学支援事業について",
    "organization": "交野市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "business",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市内で対象事業・雇用・創業・融資等に取り組み、公式要件を満たす事業者または個人等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2025031600010/",
    "sourceName": "交野市 交野市重度訪問介護利用者の大学修学支援事業について"
  },
  {
    "slug": "osaka-official-007-030-2026",
    "title": "交野市 介護予防・日常生活支援総合事業について",
    "organization": "交野市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "business",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "交野市内で対象事業・雇用・創業・融資等に取り組み、公式要件を満たす事業者または個人等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.katano.osaka.jp/docs/2019122600010/",
    "sourceName": "交野市 介護予防・日常生活支援総合事業について"
  },
  {
    "slug": "osaka-official-007-031-2026",
    "title": "大阪狭山市 がん患者等の医療用補正具の購入費用を助成します",
    "organization": "大阪狭山市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/iryo_kenko/6198.html",
    "sourceName": "大阪狭山市 がん患者等の医療用補正具の購入費用を助成します"
  },
  {
    "slug": "osaka-official-007-032-2026",
    "title": "大阪狭山市 住居確保給付金",
    "organization": "大阪狭山市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市内の住宅・建築物・居住等について公式要件を満たす所有者・居住者等",
    "applicationPeriod": "着手前または利用前に公式ページ記載の申請手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/seikatsu/3562.html",
    "sourceName": "大阪狭山市 住居確保給付金"
  },
  {
    "slug": "osaka-official-007-033-2026",
    "title": "大阪狭山市 保険適用の生殖補助医療費等（不妊治療費）を助成します",
    "organization": "大阪狭山市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kosodate_kyoiku/ninshin_shussan/5424.html",
    "sourceName": "大阪狭山市 保険適用の生殖補助医療費等（不妊治療費）を助成します"
  },
  {
    "slug": "osaka-official-007-034-2026",
    "title": "大阪狭山市 出産育児一時金の支給",
    "organization": "大阪狭山市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、出産育児一時金の支給の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kosodate_kyoiku/ninshin_shussan/5985.html",
    "sourceName": "大阪狭山市 出産育児一時金の支給"
  },
  {
    "slug": "osaka-official-007-035-2026",
    "title": "大阪狭山市 平成31年4月から産前産後期間の国民年金保険料が免除となりました",
    "organization": "大阪狭山市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、平成31年4月から産前産後期間の国民年金保険料が免除となりましたの公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kosodate_kyoiku/ninshin_shussan/6010.html",
    "sourceName": "大阪狭山市 平成31年4月から産前産後期間の国民年金保険料が免除となりました"
  },
  {
    "slug": "osaka-official-007-036-2026",
    "title": "大阪狭山市 ひとり親家庭医療費助成制度",
    "organization": "大阪狭山市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/iryo_kenko/2/3364.html",
    "sourceName": "大阪狭山市 ひとり親家庭医療費助成制度"
  },
  {
    "slug": "osaka-official-007-037-2026",
    "title": "大阪狭山市 重度障がい者医療費助成制度",
    "organization": "大阪狭山市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/iryo_kenko/2/4216.html",
    "sourceName": "大阪狭山市 重度障がい者医療費助成制度"
  },
  {
    "slug": "osaka-official-007-038-2026",
    "title": "大阪狭山市 子ども医療費助成制度",
    "organization": "大阪狭山市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/iryo_kenko/2/4573.html",
    "sourceName": "大阪狭山市 子ども医療費助成制度"
  },
  {
    "slug": "osaka-official-007-039-2026",
    "title": "大阪狭山市 未熟児養育医療給付制度",
    "organization": "大阪狭山市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/iryo_kenko/2/4726.html",
    "sourceName": "大阪狭山市 未熟児養育医療給付制度"
  },
  {
    "slug": "osaka-official-007-040-2026",
    "title": "大阪狭山市 特別障がい者手当",
    "organization": "大阪狭山市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/shogaisha/1/3978.html",
    "sourceName": "大阪狭山市 特別障がい者手当"
  },
  {
    "slug": "osaka-official-007-041-2026",
    "title": "大阪狭山市 外国人住民重度心身障がい者特別給付金",
    "organization": "大阪狭山市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/shogaisha/1/4096.html",
    "sourceName": "大阪狭山市 外国人住民重度心身障がい者特別給付金"
  },
  {
    "slug": "osaka-official-007-042-2026",
    "title": "大阪狭山市 障がい児福祉手当",
    "organization": "大阪狭山市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/shogaisha/1/4220.html",
    "sourceName": "大阪狭山市 障がい児福祉手当"
  },
  {
    "slug": "osaka-official-007-043-2026",
    "title": "大阪狭山市 NHK放送受信料の減免",
    "organization": "大阪狭山市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大阪狭山市内でNHK放送受信料の減免の公式要件を満たす方または団体等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/shogaisha/2/4173.html",
    "sourceName": "大阪狭山市 NHK放送受信料の減免"
  },
  {
    "slug": "osaka-official-007-044-2026",
    "title": "大阪狭山市 重度障がい者等住宅改造助成",
    "organization": "大阪狭山市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市内の住宅・建築物・居住等について公式要件を満たす所有者・居住者等",
    "applicationPeriod": "着手前または利用前に公式ページ記載の申請手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/shogaisha/2/4970.html",
    "sourceName": "大阪狭山市 重度障がい者等住宅改造助成"
  },
  {
    "slug": "osaka-official-007-045-2026",
    "title": "大阪狭山市 小児慢性特定疾病児童日常生活用具",
    "organization": "大阪狭山市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、小児慢性特定疾病児童日常生活用具の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/shogaisha/7/3740.html",
    "sourceName": "大阪狭山市 小児慢性特定疾病児童日常生活用具"
  },
  {
    "slug": "osaka-official-007-046-2026",
    "title": "大阪狭山市 日常生活用具の給付",
    "organization": "大阪狭山市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/shogaisha/7/4872.html",
    "sourceName": "大阪狭山市 日常生活用具の給付"
  },
  {
    "slug": "osaka-official-007-047-2026",
    "title": "大阪狭山市 補装具の支給・修理",
    "organization": "大阪狭山市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/shogaisha/7/5109.html",
    "sourceName": "大阪狭山市 補装具の支給・修理"
  },
  {
    "slug": "osaka-official-007-048-2026",
    "title": "大阪狭山市 抗体が不十分な大人の風しんワクチンの接種費用の一部を助成します",
    "organization": "大阪狭山市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大阪狭山市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.osakasayama.osaka.jp/kenko_fukushi/iryo_kenko/10/3906.html",
    "sourceName": "大阪狭山市 抗体が不十分な大人の風しんワクチンの接種費用の一部を助成します"
  },
  {
    "slug": "osaka-official-007-049-2026",
    "title": "阪南市 妊婦のための支援給付金",
    "organization": "阪南市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/life_event/ninshin/ninshinsyussan/10342.html",
    "sourceName": "阪南市 妊婦のための支援給付金"
  },
  {
    "slug": "osaka-official-007-050-2026",
    "title": "阪南市 国民年金保険料の産前産後期間の免除制度",
    "organization": "阪南市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、国民年金保険料の産前産後期間の免除制度の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/life_event/ninshin/ninshinsyussan/5154.html",
    "sourceName": "阪南市 国民年金保険料の産前産後期間の免除制度"
  },
  {
    "slug": "osaka-official-007-051-2026",
    "title": "阪南市 出産育児一時金",
    "organization": "阪南市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、出産育児一時金の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/life_event/ninshin/ninshinsyussan/5147.html",
    "sourceName": "阪南市 出産育児一時金"
  },
  {
    "slug": "osaka-official-007-052-2026",
    "title": "阪南市 産後ケア事業",
    "organization": "阪南市",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、産後ケア事業の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/kurashi/kosodate/kosodate/1524124165411.html",
    "sourceName": "阪南市 産後ケア事業"
  },
  {
    "slug": "osaka-official-007-053-2026",
    "title": "阪南市 未熟児養育医療給付制度について",
    "organization": "阪南市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/life_event/ninshin/ninshinsyussan/5152.html",
    "sourceName": "阪南市 未熟児養育医療給付制度について"
  },
  {
    "slug": "osaka-official-007-054-2026",
    "title": "阪南市 人間ドック等助成制度",
    "organization": "阪南市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/life_event/kenkou_iryou_hoken/hoken_iryou/5188.html",
    "sourceName": "阪南市 人間ドック等助成制度"
  },
  {
    "slug": "osaka-official-007-055-2026",
    "title": "阪南市 子ども医療制度について",
    "organization": "阪南市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/life_event/kenkou_iryou_hoken/hoken_iryou/5192.html",
    "sourceName": "阪南市 子ども医療制度について"
  },
  {
    "slug": "osaka-official-007-056-2026",
    "title": "阪南市 住宅改修費の支給制度について",
    "organization": "阪南市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市内の住宅・建築物・居住等について公式要件を満たす所有者・居住者等",
    "applicationPeriod": "着手前または利用前に公式ページ記載の申請手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/life_event/koureisha/1300966354014.html",
    "sourceName": "阪南市 住宅改修費の支給制度について"
  },
  {
    "slug": "osaka-official-007-057-2026",
    "title": "阪南市 児童手当",
    "organization": "阪南市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、児童手当の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/kurashi/kosodate/kosodate/1417660002954.html",
    "sourceName": "阪南市 児童手当"
  },
  {
    "slug": "osaka-official-007-058-2026",
    "title": "阪南市 小中学校就学援助・特別支援教育就学奨励費について",
    "organization": "阪南市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living",
      "education"
    ],
    "eligibility": "阪南市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、小中学校就学援助・特別支援教育就学奨励費についての公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/kurashi/kosodate/kosodate/7579.html",
    "sourceName": "阪南市 小中学校就学援助・特別支援教育就学奨励費について"
  },
  {
    "slug": "osaka-official-007-059-2026",
    "title": "阪南市 児童扶養手当",
    "organization": "阪南市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、児童扶養手当の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/kosodatesite/seido/parent/1457164668473.html",
    "sourceName": "阪南市 児童扶養手当"
  },
  {
    "slug": "osaka-official-007-060-2026",
    "title": "阪南市 高等職業訓練促進給付金",
    "organization": "阪南市",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "阪南市内で高等職業訓練促進給付金の公式要件を満たす方または団体等",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/kosodatesite/seido/parent/1457164842281.html",
    "sourceName": "阪南市 高等職業訓練促進給付金"
  },
  {
    "slug": "osaka-official-007-061-2026",
    "title": "阪南市 ひとり親家庭医療",
    "organization": "阪南市",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/kosodatesite/seido/parent/1457164835485.html",
    "sourceName": "阪南市 ひとり親家庭医療"
  },
  {
    "slug": "osaka-official-007-062-2026",
    "title": "阪南市 妊婦健康診査",
    "organization": "阪南市",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/kosodatesite/seido/ninshin/1456224384768.html",
    "sourceName": "阪南市 妊婦健康診査"
  },
  {
    "slug": "osaka-official-007-063-2026",
    "title": "阪南市 乳幼児家庭支援事業(ごみ袋支給)",
    "organization": "阪南市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "business",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市内で対象事業・雇用・創業・融資等に取り組み、公式要件を満たす事業者または個人等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/kosodatesite/seido/ninshin/1456226529830.html",
    "sourceName": "阪南市 乳幼児家庭支援事業(ごみ袋支給)"
  },
  {
    "slug": "osaka-official-007-064-2026",
    "title": "阪南市 起業創業支援事業(バウチャー)補助金について",
    "organization": "阪南市",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "business",
    "relatedCategories": [
      "living",
      "employment"
    ],
    "eligibility": "阪南市内で対象事業・雇用・創業・融資等に取り組み、公式要件を満たす事業者または個人等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/business/kigyo_sogyoshien/7516.html",
    "sourceName": "阪南市 起業創業支援事業(バウチャー)補助金について"
  },
  {
    "slug": "osaka-official-007-065-2026",
    "title": "阪南市 融資制度",
    "organization": "阪南市",
    "maxAmount": "貸付・融資または利子等を支援",
    "maxAmountNum": 0,
    "category": "business",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阪南市内で対象事業・雇用・創業・融資等に取り組み、公式要件を満たす事業者または個人等",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.city.hannan.lg.jp/business/yushiseido/index.html",
    "sourceName": "阪南市 融資制度"
  },
  {
    "slug": "osaka-official-007-066-2026",
    "title": "島本町 特別児童扶養手当 ［障害がある児童を養育しているかたが対象］",
    "organization": "島本町",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、特別児童扶養手当 ［障害がある児童を養育しているかたが対象］の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/2746.html",
    "sourceName": "島本町 特別児童扶養手当 ［障害がある児童を養育しているかたが対象］"
  },
  {
    "slug": "osaka-official-007-067-2026",
    "title": "島本町 障害者・障害児のための各種手当",
    "organization": "島本町",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/soshiki/10/2761.html",
    "sourceName": "島本町 障害者・障害児のための各種手当"
  },
  {
    "slug": "osaka-official-007-068-2026",
    "title": "島本町 生活福祉資金の貸付【社会福祉協議会】",
    "organization": "島本町",
    "maxAmount": "貸付・融資または利子等を支援",
    "maxAmountNum": 0,
    "category": "welfare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有する高齢者・障がい者等で、福祉サービスまたは給付の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/soshiki/10/2782.html",
    "sourceName": "島本町 生活福祉資金の貸付【社会福祉協議会】"
  },
  {
    "slug": "osaka-official-007-069-2026",
    "title": "島本町 ひとり親家庭の養育費確保を支援します【養育費の取り決め・保証費用・強制執行申立て費用を助成】",
    "organization": "島本町",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、ひとり親家庭の養育費確保を支援します【養育費の取り決め・保証費用・強制執行申立て費用を助成】の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/24035.html",
    "sourceName": "島本町 ひとり親家庭の養育費確保を支援します【養育費の取り決め・保証費用・強制執行申立て費用を助成】"
  },
  {
    "slug": "osaka-official-007-070-2026",
    "title": "島本町 児童扶養手当【ひとり親家庭など】",
    "organization": "島本町",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、児童扶養手当【ひとり親家庭など】の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/2732.html",
    "sourceName": "島本町 児童扶養手当【ひとり親家庭など】"
  },
  {
    "slug": "osaka-official-007-071-2026",
    "title": "島本町 ひとり親家庭医療費助成制度",
    "organization": "島本町",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/2718.html",
    "sourceName": "島本町 ひとり親家庭医療費助成制度"
  },
  {
    "slug": "osaka-official-007-072-2026",
    "title": "島本町 母子・父子・寡婦福祉資金の貸付【ひとり親家庭、寡婦】",
    "organization": "島本町",
    "maxAmount": "貸付・融資または利子等を支援",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、母子・父子・寡婦福祉資金の貸付【ひとり親家庭、寡婦】の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/soshiki/10/2758.html",
    "sourceName": "島本町 母子・父子・寡婦福祉資金の貸付【ひとり親家庭、寡婦】"
  },
  {
    "slug": "osaka-official-007-073-2026",
    "title": "島本町 児童手当",
    "organization": "島本町",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、児童手当の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/2797.html",
    "sourceName": "島本町 児童手当"
  },
  {
    "slug": "osaka-official-007-074-2026",
    "title": "島本町 授業料の減免・奨学金など【ひとり親家庭等】",
    "organization": "島本町",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living",
      "education"
    ],
    "eligibility": "島本町に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、授業料の減免・奨学金など【ひとり親家庭等】の公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/2779.html",
    "sourceName": "島本町 授業料の減免・奨学金など【ひとり親家庭等】"
  },
  {
    "slug": "osaka-official-007-075-2026",
    "title": "島本町 ひとり親家庭等児童福祉金",
    "organization": "島本町",
    "maxAmount": "給付金・手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有する児童・子育て世帯・妊産婦・ひとり親家庭等で、ひとり親家庭等児童福祉金の公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/2719.html",
    "sourceName": "島本町 ひとり親家庭等児童福祉金"
  },
  {
    "slug": "osaka-official-007-076-2026",
    "title": "島本町 災害共済給付制度（小学校・中学校）",
    "organization": "島本町",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "島本町内で災害共済給付制度（小学校・中学校）の公式要件を満たす方または団体等",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/1727.html",
    "sourceName": "島本町 災害共済給付制度（小学校・中学校）"
  },
  {
    "slug": "osaka-official-007-077-2026",
    "title": "島本町 子ども医療費助成制度【令和6年7月から、対象を18歳まで拡大】",
    "organization": "島本町",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/2735.html",
    "sourceName": "島本町 子ども医療費助成制度【令和6年7月から、対象を18歳まで拡大】"
  },
  {
    "slug": "osaka-official-007-078-2026",
    "title": "島本町 障害者医療費助成制度",
    "organization": "島本町",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/soshiki/10/2763.html",
    "sourceName": "島本町 障害者医療費助成制度"
  },
  {
    "slug": "osaka-official-007-079-2026",
    "title": "島本町 妊婦健康診査の公費助成",
    "organization": "島本町",
    "maxAmount": "対象経費を補助・助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/6631.html",
    "sourceName": "島本町 妊婦健康診査の公費助成"
  },
  {
    "slug": "osaka-official-007-080-2026",
    "title": "島本町 多胎妊婦への妊婦健康診査受診券の追加交付",
    "organization": "島本町",
    "maxAmount": "支援制度を実施",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "公式ページ記載の申請手続・受付状況に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/9653.html",
    "sourceName": "島本町 多胎妊婦への妊婦健康診査受診券の追加交付"
  },
  {
    "slug": "osaka-official-007-081-2026",
    "title": "島本町 未熟児養育医療 ［未熟児の入院費が対象］",
    "organization": "島本町",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/site/kosodate/2744.html",
    "sourceName": "島本町 未熟児養育医療 ［未熟児の入院費が対象］"
  },
  {
    "slug": "osaka-official-007-082-2026",
    "title": "島本町 難病者、小児慢性特定疾病児童のための医療費助成制度",
    "organization": "島本町",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/soshiki/10/2765.html",
    "sourceName": "島本町 難病者、小児慢性特定疾病児童のための医療費助成制度"
  },
  {
    "slug": "osaka-official-007-083-2026",
    "title": "島本町 自立支援医療（精神通院）【通院による精神医療受診者が対象】",
    "organization": "島本町",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/soshiki/10/2802.html",
    "sourceName": "島本町 自立支援医療（精神通院）【通院による精神医療受診者が対象】"
  },
  {
    "slug": "osaka-official-007-084-2026",
    "title": "島本町 自立支援医療（更生医療）【18歳以上の身体障害者が対象】",
    "organization": "島本町",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/soshiki/10/2801.html",
    "sourceName": "島本町 自立支援医療（更生医療）【18歳以上の身体障害者が対象】"
  },
  {
    "slug": "osaka-official-007-085-2026",
    "title": "島本町 自立支援医療（育成医療）【18歳未満の児童が対象】",
    "organization": "島本町",
    "maxAmount": "医療費・検査費等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "島本町に住所を有し、医療費・健診・治療・予防接種等について公式要件を満たす方",
    "applicationPeriod": "認定・申請・更新等の公式手続に従う",
    "officialUrl": "https://www.town.shimamoto.lg.jp/soshiki/10/2757.html",
    "sourceName": "島本町 自立支援医療（育成医療）【18歳未満の児童が対象】"
  }
];

