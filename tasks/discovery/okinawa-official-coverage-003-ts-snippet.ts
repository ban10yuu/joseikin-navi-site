const okinawaOfficial003Grants: Array<{
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
    "slug": "okinawa-official-003-001-2026",
    "title": "宮古島市 児童手当",
    "organization": "宮古島市",
    "maxAmount": "月額】（1）所得制限額未満である者【児童手当】3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/jidou/kodomo.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "okinawa-official-003-002-2026",
    "title": "宮古島市 国民健康保険一部負担金減免制度",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請により、保険医療機関等（病院や薬局）での一部負担金の減免等（減額、免除及び徴収猶予）が一定期間受けられる制度です",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kokumin/kenkouhoken/2012-1228-1012-80.html",
    "sourceName": "国民健康保険一部負担金減免制度"
  },
  {
    "slug": "okinawa-official-003-003-2026",
    "title": "宮古島市 特別児童扶養手当",
    "organization": "宮古島市",
    "maxAmount": "1人4,976,000円",
    "maxAmountNum": 4976000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和6年7月1日 支給されます",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/jidou/tokubetsujidou.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "okinawa-official-003-004-2026",
    "title": "宮古島市 年金生活者支援給付金制度",
    "organization": "宮古島市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宮古島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給されるものです",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kokumin/nenkin/2021-0901-1000-54.html",
    "sourceName": "年金生活者支援給付金制度"
  },
  {
    "slug": "okinawa-official-003-005-2026",
    "title": "宮古島市 宮古島市保育士就労渡航費等補助金交付事業",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "交付事業 ◆事業の趣旨 宮古島市では、宮古島市外在住の保育士資格を有 する方を確保するため、宮古島市へ転入 しやす い環境づくりと保育士不足の解消を図ることを目的に、市 外在住保育士に対し、宮古島市内の認可保育施設への 就労にかかる渡航費や転入",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/kosodate/2019-0219-1104-69.html",
    "sourceName": "宮古島市保育士就労渡航費等補助金交付事業"
  },
  {
    "slug": "okinawa-official-003-006-2026",
    "title": "宮古島市 保育士試験２次試験受験者助成金",
    "organization": "宮古島市",
    "maxAmount": "上限額とする（片道または往復）（２）宿泊費・・・・・１泊9,800円",
    "maxAmountNum": 9800,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給にあたっては、氏名・金額・搭乗等が把握できる領収書等の添付が必要となります",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/kosodate/2021-0916-1509-306.html",
    "sourceName": "保育士試験２次試験受験者助成金"
  },
  {
    "slug": "okinawa-official-003-007-2026",
    "title": "宮古島市 防災士資格取得補助制度",
    "organization": "宮古島市",
    "maxAmount": "最大7万円",
    "maxAmountNum": 70000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宮古島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.city.miyakojima.lg.jp/soshiki/shityo/soumubu/bousaikikikannri/oshirase/2025-0314-0936-269.html",
    "sourceName": "防災士資格取得補助制度"
  },
  {
    "slug": "okinawa-official-003-008-2026",
    "title": "宮古島市 児童扶養手当",
    "organization": "宮古島市",
    "maxAmount": "月額令和7年4月分〜子どもが1人の場合全部支給46,690円",
    "maxAmountNum": 46690,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給される手当です",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/jidou/jidou.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okinawa-official-003-009-2026",
    "title": "宮古島市 母子・寡婦福祉資金の貸付",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の貸付額・利子補給額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請書様式ダウンロード FAQ --> 宮古島市役所 〒906-8501 沖縄県宮古島市平良字西里1140番地 代表電話 0980-72-3751 使用条件・個人情報の取扱い お問い合わせ窓口 リンク集 表示切替： スマートフォン パソコン ペ",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/jidou/hukushishikin.html",
    "sourceName": "母子・寡婦福祉資金の貸付"
  },
  {
    "slug": "okinawa-official-003-010-2026",
    "title": "宮古島市 乳幼児健診等に係る渡航費助成金",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宮古島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和６年４月１日 交付について",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/kosodate/2024-0319-1350-323.html",
    "sourceName": "乳幼児健診等に係る渡航費助成金"
  },
  {
    "slug": "okinawa-official-003-011-2026",
    "title": "宮古島市 宮古島市介護支援専門員等研修受講料助成金",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付要綱 (136KB) 対象研修 （１）相談支援従事者初任者研修 （２）相談支援従事者現任研修 （３）主任相談支援専門員養成研修 申請提出期限 上記研修終了後、 １年以内 とします",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kenkou/syougaihukushi/2025-0606-1012-75.html",
    "sourceName": "宮古島市介護支援専門員等研修受講料助成金"
  },
  {
    "slug": "okinawa-official-003-012-2026",
    "title": "宮古島市 新生児聴覚検査",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "交付した「産婦健康診査受診票」に入っています",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/kosodate/2024-0322-1340-322.html",
    "sourceName": "新生児聴覚検査"
  },
  {
    "slug": "okinawa-official-003-013-2026",
    "title": "宮古島市 幼児教育・保育の無償化",
    "organization": "宮古島市",
    "maxAmount": "月額上限25,700円",
    "maxAmountNum": 25700,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請・手続きの案内ページは こちら 【参考】内閣府無償化ページ https:",
    "officialUrl": "https://www.city.miyakojima.lg.jp/soshiki/shityo/hukushihoken/kodomomirai/oshirase/2019-0618-1838-69.html",
    "sourceName": "幼児教育・保育の無償化"
  },
  {
    "slug": "okinawa-official-003-014-2026",
    "title": "宮古島市 こども医療費助成制度",
    "organization": "宮古島市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宮古島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請が必要です",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/kosodate/kodomoiryouhijyosei.html",
    "sourceName": "こども医療費助成制度"
  },
  {
    "slug": "okinawa-official-003-015-2026",
    "title": "宮古島市 自立支援教育訓練給付事業",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "宮古島市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "支給を受けているか、同様の所得水準にある者",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/jidou/kyouiku.html",
    "sourceName": "自立支援教育訓練給付事業"
  },
  {
    "slug": "okinawa-official-003-016-2026",
    "title": "宮古島市 宮古島市ひとり親家庭生活支援事業",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "宮古島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請について 下記までお問い合わせください！ 一般社団法人 宮古島市ひとり親家庭福祉会 電話：0980-79-6995 FAX：0980-79-6996 E-mail：sinpare23@theia.ocn.ne.jp 住所：宮古島市下地字上地",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/jidou/hitorioyakateiseikatusien.html",
    "sourceName": "宮古島市ひとり親家庭生活支援事業"
  },
  {
    "slug": "okinawa-official-003-017-2026",
    "title": "宮古島市 母子および父子家庭等医療費助成",
    "organization": "宮古島市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "宮古島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請の日から対象児童が１８歳に達した日の属する年度の末日 または 受給資格が認められる前日まで （婚姻や事実婚、児童を監護しなくなった場合には、受給資格がなくなります） 3.資格の認定 申請に必要な書類は、 母子及び父子家庭等医療費申請書（窓口",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kodomo/jidou/iryou.html",
    "sourceName": "母子および父子家庭等医療費助成"
  },
  {
    "slug": "okinawa-official-003-018-2026",
    "title": "宮古島市 生活困窮者自立支援事業",
    "organization": "宮古島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和5年4月1日 申請書は対象要件を確認後に配布しますので、まずは面談のご予約をお願いします",
    "officialUrl": "https://www.city.miyakojima.lg.jp/kurashi/kenkou/hukushi/2023-0406-1142-66.html",
    "sourceName": "生活困窮者自立支援事業"
  },
  {
    "slug": "okinawa-official-003-019-2026",
    "title": "宮古島市 難病患者等に係る渡航費助成",
    "organization": "宮古島市",
    "maxAmount": "上限として渡航費の一部を助成するものとする(2)治療の都合により宿泊する必要がある場合・・・宿泊施設での宿泊に対し1泊8,000円",
    "maxAmountNum": 8000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宮古島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付を受けている者 (2) 国および県において実施されている小児慢性特定疾患治療研究事業の対象児童等で、沖縄県知事の発行する受給者証の交付を受けている者 (3) 悪性新生物疾患に羅患している者であり、かつ、本市以外での医療機関での通院および入院",
    "officialUrl": "https://www.city.miyakojima.lg.jp/soshiki/shityo/seikatukankyou/kenkou/oshirase/2013-0509-1127-78.html",
    "sourceName": "難病患者等に係る渡航費助成"
  },
  {
    "slug": "okinawa-official-003-020-2026",
    "title": "宮古島市 不妊治療等に係る渡航費助成",
    "organization": "宮古島市",
    "maxAmount": "助成額(1)往復1万3,000円",
    "maxAmountNum": 3000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宮古島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "支給対象者 宮古島市に居住し、かつ、住民基本台帳に記録された者で、次のいずれかに該当するもの",
    "officialUrl": "https://www.city.miyakojima.lg.jp/soshiki/shityo/seikatukankyou/kenkou/oshirase/2015-0403-1359-77.html",
    "sourceName": "不妊治療等に係る渡航費助成"
  },
  {
    "slug": "okinawa-official-003-021-2026",
    "title": "南城市 水道基本料金減免",
    "organization": "南城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請様式 商工労働関係 農業振興 農業委員会 漁業関係 広告の募集について 入札参加資格 防災・安全 日本語 English 简体中文 繁體中文 한국어 espanol portugues Deutsch メニュー くらしと手続き 子育て・教育",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/jyougesuidou/suidou/1767575847/",
    "sourceName": "水道基本料金減免"
  },
  {
    "slug": "okinawa-official-003-022-2026",
    "title": "南城市 国民健康保険一部負担金の減免制度",
    "organization": "南城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和7年12月2日 申請様式 商工労働関係 農業振興 農業委員会 漁業関係 広告の募集について 入札参加資格 防災・安全 日本語 English 简体中文 繁體中文 한국어 espanol portugues Deutsch メニュー くらしと手続き 子育て・教育",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/zei_hoken_nenkin/kokuho/1658975432/1658908291/",
    "sourceName": "国民健康保険一部負担金の減免制度"
  },
  {
    "slug": "okinawa-official-003-023-2026",
    "title": "南城市 南城市立幼稚園保育料等の減免",
    "organization": "南城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "南城市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請方法 １",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/hoiku/1579081793/1579083795/",
    "sourceName": "南城市立幼稚園保育料等の減免"
  },
  {
    "slug": "okinawa-official-003-024-2026",
    "title": "南城市 南城市骨髄等移植ドナー助成金",
    "organization": "南城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "交付について ホーム くらしと手続き 健康・予防・福祉 南城市骨髄等移植ドナー助成金交付について 南城市では、骨髄・末梢血幹細胞（以下「骨髄等」という",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/kenkou_fukushi/1727655191/",
    "sourceName": "南城市骨髄等移植ドナー助成金"
  },
  {
    "slug": "okinawa-official-003-025-2026",
    "title": "南城市 スポーツ・文化活動県内外派遣補助金",
    "organization": "南城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "南城市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付について ホーム くらしと手続き 助成・補助金 スポーツ・文化活動県内外派遣補助金の交付について 本市の小学生、中学生及び高校生が運動競技（スポーツ）・文化活動等参加のため県外等へ派遣される場合において、予算・限度額の範囲内において補助金を",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/jyosei_hojyokin/1579340184/",
    "sourceName": "スポーツ・文化活動県内外派遣補助金"
  },
  {
    "slug": "okinawa-official-003-026-2026",
    "title": "南城市 令和8年度 南城市給付型奨学金",
    "organization": "南城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "令和8年3月1日 募集 ホーム 子育て・教育 学校教育 南城市 奨学金制度 令和8年度 南城市給付型奨学金 奨学生募集 奨学金の概要 市内在住の学業人物優秀である若者が、経済的理由により高等教育機関への進学を断念することなく、将来のために意欲を持ち学習していく環",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/gakkou_kyouiku/1585466334/1670395360/",
    "sourceName": "令和8年度 南城市給付型奨学金"
  },
  {
    "slug": "okinawa-official-003-027-2026",
    "title": "南城市 令和8年度 水産業奨励補助金",
    "organization": "南城市",
    "maxAmount": "上限5万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年1月5日 申請期間終了後に予算の範囲内で按分した金額となります",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/jigyosha/gyogyou/1697505297/",
    "sourceName": "令和8年度 水産業奨励補助金"
  },
  {
    "slug": "okinawa-official-003-028-2026",
    "title": "南城市 特別障害者手当",
    "organization": "南城市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "令和4年4月1日 支給されます",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/kenkou_fukushi/1578995061/1584900930/",
    "sourceName": "特別障害者手当"
  },
  {
    "slug": "okinawa-official-003-029-2026",
    "title": "南城市 令和８年度南城市がん患者アピアランスケア助成事業",
    "organization": "南城市",
    "maxAmount": "上限2万円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和８年４月１日 交付申請日において、本市の住民基本台帳に記録されている者 がんと診断され、がん治療を受けた者又は現に受けている者であって、当該治療による外見の変化を補完する補整具を必要とする者 申請を行う補整具に対して、他の制度又は他市区町村で助成等を受けてい",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/kenkou_fukushi/kenshin/1719886827/",
    "sourceName": "令和８年度南城市がん患者アピアランスケア助成事業"
  },
  {
    "slug": "okinawa-official-003-030-2026",
    "title": "南城市 南城市三世代同近居支援補助金",
    "organization": "南城市",
    "maxAmount": "上限30万円",
    "maxAmountNum": 300000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "南城市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請する際はまちづくり推進課へ事前にご確認ください",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/jyosei_hojyokin/1579342053/",
    "sourceName": "南城市三世代同近居支援補助金"
  },
  {
    "slug": "okinawa-official-003-031-2026",
    "title": "南城市 知念地域 移住定住支援補助金",
    "organization": "南城市",
    "maxAmount": "補助額1.新築、改築、購入費用50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和4年4月1日 申請する際はまちづくり推進課へ事前にご確認ください",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/jyosei_hojyokin/1680162975/",
    "sourceName": "知念地域 移住定住支援補助金"
  },
  {
    "slug": "okinawa-official-003-032-2026",
    "title": "南城市 戦没者等の遺族に対する特別弔慰金",
    "organization": "南城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "南城市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和８年４月１日 受付場所変更】戦没者等の遺族に対する特別弔慰金 （第十二回） ※ 令和８年４月１日より受付場所が変更となりますので、お間違いないようお願いします",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kurashi/jyosei_hojyokin/1744681100/",
    "sourceName": "戦没者等の遺族に対する特別弔慰金"
  },
  {
    "slug": "okinawa-official-003-033-2026",
    "title": "南城市 伴走型相談支援および出産・子育て応援給付金",
    "organization": "南城市",
    "maxAmount": "1人あたり5万円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和5年2月13日 申請の場合は後日）妊婦本人と保健師の面談を実施",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/ninshin/1675311491/",
    "sourceName": "伴走型相談支援および出産・子育て応援給付金"
  },
  {
    "slug": "okinawa-official-003-034-2026",
    "title": "南城市 児童手当",
    "organization": "南城市",
    "maxAmount": "月額・支給時期手当月額3歳未満※第1子、第2子：15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給時期 申請の要否について 届出が必要な場合 児童手当に関するQ&A 児童手当とは 児童手当は、家庭における生活の安定と次代の社会を担う児童の健やかな成長を支援することを目的に、子どもを養育している方へ支給される制度です",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/kosodate/jyosei/1579082064/",
    "sourceName": "児童手当"
  },
  {
    "slug": "okinawa-official-003-035-2026",
    "title": "南城市 こども医療費助成貸付制度",
    "organization": "南城市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "南城市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請手続きについて 案内ちらしをご覧ください このページはこども相談課が担当しています",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/kosodate/jyosei/1584713826/",
    "sourceName": "こども医療費助成貸付制度"
  },
  {
    "slug": "okinawa-official-003-036-2026",
    "title": "南城市 特別児童扶養手当",
    "organization": "南城市",
    "maxAmount": "月額（月額）令和７年度令和８年度１級56,800円",
    "maxAmountNum": 56800,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和6年7月1日 支給し、児童の福祉の増進を図るための制度です",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/kosodate/jyosei/1584683031/",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "okinawa-official-003-037-2026",
    "title": "南城市 児童扶養手当",
    "organization": "南城市",
    "maxAmount": "月額）児童1人の場合令和7年4月以降～令和8年4月以降～全部支給46,690円",
    "maxAmountNum": 46690,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給される手当です",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/kosodate/hitorioyakatei/1646373555/",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okinawa-official-003-038-2026",
    "title": "南城市 母子家庭等高等職業訓練促進給付金",
    "organization": "南城市",
    "maxAmount": "支給額①訓練促進給付金給付額非課税世帯：月額100,000円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和3年4月1日 支給事業とは 母子家庭の母及び父子家庭の父の就職の際に有利かつ生活の安定に役立つ資格（看護師、介護福祉士等）を取得するために1年以上（※令和3年4月1日から令和6年3月31日までに修業を開始する場合においては6ヶ月以上）の養成機関等で修業する場",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/kosodate/hitorioyakatei/1579083003/",
    "sourceName": "母子家庭等高等職業訓練促進給付金"
  },
  {
    "slug": "okinawa-official-003-039-2026",
    "title": "南城市 令和8年度 就学援助制度",
    "organization": "南城市",
    "maxAmount": "1人・小学生1人、中学生1人の場合約230万円",
    "maxAmountNum": 2300000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南城市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "令和7年12月1日 申請受付について ホーム 子育て・教育 学校教育 令和8年度 就学援助制度申請受付について POINT 就学援助制度とは、『経済的理由により、就学困難な児童生徒に対して学用品費や学校給食費などの就学援助を行う制度』です",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/gakkou_kyouiku/1606179539/",
    "sourceName": "令和8年度 就学援助制度"
  },
  {
    "slug": "okinawa-official-003-040-2026",
    "title": "南城市 令和8年度 南城市育英会貸費学生",
    "organization": "南城市",
    "maxAmount": "月額40,000円",
    "maxAmountNum": 40000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "南城市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月1日 募集について ホーム 子育て・教育 学校教育 南城市 奨学金制度 令和8年度 南城市育英会貸費学生募集について 南城市育英会では優秀な学生で経済的理由によって就学困難な方へ奨学資金の貸与を行っています",
    "officialUrl": "https://www.city.nanjo.okinawa.jp/kosodate/gakkou_kyouiku/1585466334/1670313480/",
    "sourceName": "令和8年度 南城市育英会貸費学生"
  },
  {
    "slug": "okinawa-official-003-041-2026",
    "title": "国頭村 物価高対応子育て応援手当",
    "organization": "国頭村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "国頭村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和７年11月21日 支給することが決定されました",
    "officialUrl": "https://www.vill.kunigami.okinawa.jp/k_hukusi/%e7%89%a9%e4%be%a1%e9%ab%98%e5%af%be%e5%bf%9c%e5%ad%90%e8%82%b2%e3%81%a6%e5%bf%9c%e6%8f%b4%e6%89%8b%e5%bd%93%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "okinawa-official-003-042-2026",
    "title": "国頭村 国頭村移住支援金",
    "organization": "国頭村",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "国頭村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和6年7月1日 交付いたします",
    "officialUrl": "https://www.vill.kunigami.okinawa.jp/k_kikaku/%e5%9b%bd%e9%a0%ad%e6%9d%91%e7%a7%bb%e4%bd%8f%e6%94%af%e6%8f%b4%e9%87%91%e3%81%ae%e3%81%94%e6%a1%88%e5%86%85/",
    "sourceName": "国頭村移住支援金"
  },
  {
    "slug": "okinawa-official-003-043-2026",
    "title": "国頭村 国頭村物価高騰重点支援臨時交付金給付",
    "organization": "国頭村",
    "maxAmount": "支給額支給対象者1人あたり5,000円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "国頭村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 交付金給付について※申請が必要です！ 【国頭村物価高騰重点支援臨時交付金給付のご案内】 国頭村では物価高騰の影響を受ける村民の生活を支援するため、給付金を支給します",
    "officialUrl": "https://www.vill.kunigami.okinawa.jp/k_jyumin/%e3%80%90%e9%87%8d%e8%a6%81%e3%80%91%e5%9b%bd%e9%a0%ad%e6%9d%91%e7%89%a9%e4%be%a1%e9%ab%98%e9%a8%b0%e9%87%8d%e7%82%b9%e6%94%af%e6%8f%b4%e8%87%a8%e6%99%82%e4%ba%a4%e4%bb%98%e9%87%91%e7%b5%a6%e4%bb%98/",
    "sourceName": "国頭村物価高騰重点支援臨時交付金給付"
  },
  {
    "slug": "okinawa-official-003-044-2026",
    "title": "国頭村 国の重点支援地方交付金活用事業商品券",
    "organization": "国頭村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "国頭村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年1月1日 交付金活用事業商品券について 物価の高騰で生活に困っている村民を支援するため地域商品券を送付します",
    "officialUrl": "https://www.vill.kunigami.okinawa.jp/k_jyumin/%e5%9b%bd%e3%81%ae%e9%87%8d%e7%82%b9%e6%94%af%e6%8f%b4%e5%9c%b0%e6%96%b9%e4%ba%a4%e4%bb%98%e9%87%91%e6%b4%bb%e7%94%a8%e4%ba%8b%e6%a5%ad%e5%95%86%e5%93%81%e5%88%b8%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/",
    "sourceName": "国の重点支援地方交付金活用事業商品券"
  },
  {
    "slug": "okinawa-official-003-045-2026",
    "title": "国頭村 令和８年度地域活性化助成事業",
    "organization": "国頭村",
    "maxAmount": "限度額は４５万円",
    "maxAmountNum": 450000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "国頭村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和８年７月８日 申請書提出期限 令和８年７月８日（水）午前１２時必着 ◆ 申請書の提出先・問い合わせ先 公益社団法人 沖縄県地域振興協会 〒９００-００２９ 那覇市旭川１１６番地３７(自治会館６階) 担当：宮里、内野（ miyazato@oflp.jp、uch",
    "officialUrl": "https://www.vill.kunigami.okinawa.jp/k_soumu/%e4%bb%a4%e5%92%8c%ef%bc%98%e5%b9%b4%e5%ba%a6%e5%9c%b0%e5%9f%9f%e6%b4%bb%e6%80%a7%e5%8c%96%e5%8a%a9%e6%88%90%e4%ba%8b%e6%a5%ad%e5%be%8c%e6%9c%9f%e3%81%ae%e5%85%ac%e5%8b%9f%e3%81%ab%e3%81%a4%e3%81%84/",
    "sourceName": "令和８年度地域活性化助成事業"
  },
  {
    "slug": "okinawa-official-003-046-2026",
    "title": "大宜味村 軽自動車税の減免",
    "organization": "大宜味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大宜味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年04月01日 交付を受けている方、または、戦 傷病者特別援護法第4条の規定による戦傷病者手帳の交付をうけている方 2",
    "officialUrl": "https://www.vill.ogimi.okinawa.jp/soshiki/jyuumin/gyomu/zeikin/keijidoshazei/1157.html",
    "sourceName": "軽自動車税の減免"
  },
  {
    "slug": "okinawa-official-003-047-2026",
    "title": "大宜味村 固定資産税の減免",
    "organization": "大宜味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大宜味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年04月01日 申請に基づいて固定資産税が減免されることがあります",
    "officialUrl": "https://www.vill.ogimi.okinawa.jp/soshiki/jyuumin/gyomu/zeikin/koteishisanzei/1156.html",
    "sourceName": "固定資産税の減免"
  },
  {
    "slug": "okinawa-official-003-048-2026",
    "title": "大宜味村 児童手当",
    "organization": "大宜味村",
    "maxAmount": "限度額未満の方児童の年齢児童1人あたり月額0歳〜3歳未満一律15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大宜味村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請についての詳細は 「児童手当の拡充について」 をご覧ください",
    "officialUrl": "https://www.vill.ogimi.okinawa.jp/soshiki/kosodatesien/gyomu/kosodate/jidouteate/jidouteate/index.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "okinawa-official-003-049-2026",
    "title": "大宜味村 物価高対応子育て応援手当",
    "organization": "大宜味村",
    "maxAmount": "支給額・対象児童1人あたり一律2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大宜味村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年06月03日 支給対象者 1.令和7年9月分（令和7年9月に出生した児童については10月分）の児童手当受給者 2.令和7年10月1日から令和8年3月31日までに出生した児童に係る児童手当の受給者 支給対象児童 ・平成19年4月2月から令和8年3月31日生まれ",
    "officialUrl": "https://www.vill.ogimi.okinawa.jp/soshiki/kosodatesien/gyomu/kosodate/1522.html",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "okinawa-official-003-050-2026",
    "title": "大宜味村 児童扶養手当・母子及び父子医療費助成",
    "organization": "大宜味村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "大宜味村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年08月01日 提出してください",
    "officialUrl": "https://www.vill.ogimi.okinawa.jp/soshiki/kosodatesien/gyomu/kosodate/hitorioya/1266.html",
    "sourceName": "児童扶養手当・母子及び父子医療費助成"
  },
  {
    "slug": "okinawa-official-003-051-2026",
    "title": "大宜味村 大宜味村育英会入学準備金貸付",
    "organization": "大宜味村",
    "maxAmount": "月額貸付奨学金（月額3万円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大宜味村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年02月12日 申請について 更新日：2026年02月12日 大宜味村育英会では、村内に住所を有し、大学、短大、専門学校（高等専門学校含む）等に進学予定の者で、経済的な理由により就学困難な学生を対象に、令和8年度入学準備貸付奨学生を次のとおり募集します",
    "officialUrl": "https://www.vill.ogimi.okinawa.jp/kosodate_kyoiku/kyoiku_iinkai/981.html",
    "sourceName": "大宜味村育英会入学準備金貸付"
  },
  {
    "slug": "okinawa-official-003-052-2026",
    "title": "大宜味村 令和7年度食料品物価高騰対応支援給付金",
    "organization": "大宜味村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大宜味村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年06月15日 申請締め切り（6月30日（火曜日）について 6月15日更新 申請締め切りは6月30日（火曜日）となっております",
    "officialUrl": "https://www.vill.ogimi.okinawa.jp/iryo_kenko_fukushi/seikatsu_fukushi/1537.html",
    "sourceName": "令和7年度食料品物価高騰対応支援給付金"
  },
  {
    "slug": "okinawa-official-003-053-2026",
    "title": "大宜味村 沖縄県子育て総合支援事業",
    "organization": "大宜味村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "大宜味村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年04月16日 募集について（ご案内） 更新日：2026年04月16日 沖縄県子育て総合支援事業に係る生徒募集について（ご案内） 沖縄県では、経済的に厳しい家庭環境にあって大学等への進学に意欲のある高校生を対象に支援を行う事業を実施しています",
    "officialUrl": "https://www.vill.ogimi.okinawa.jp/kosodate_kyoiku/1488.html",
    "sourceName": "沖縄県子育て総合支援事業"
  },
  {
    "slug": "okinawa-official-003-054-2026",
    "title": "東村 児童手当等",
    "organization": "東村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "東村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年02月14日 支給するものです",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/kosodate_kyoiku/syussan/1775.html",
    "sourceName": "児童手当等"
  },
  {
    "slug": "okinawa-official-003-055-2026",
    "title": "東村 児童扶養手当",
    "organization": "東村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "東村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年04月04日 支給される手当です",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/kosodate_kyoiku/siensoudan/2485.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okinawa-official-003-056-2026",
    "title": "東村 障害年金・手当等",
    "organization": "東村",
    "maxAmount": "支給額及び支給月月額29,590円",
    "maxAmountNum": 29590,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "東村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年11月10日 支給されます",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/iryo_kenko_fukushi/shogaishafukushi/1001.html",
    "sourceName": "障害年金・手当等"
  },
  {
    "slug": "okinawa-official-003-057-2026",
    "title": "東村 東村UIJターン奨学金償還支援事業補助金",
    "organization": "東村",
    "maxAmount": "上限額第1号村内で福祉職、観光業、農林水産業に従事するもの5会計年度月額15,000円",
    "maxAmountNum": 15000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "東村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年06月12日 募集期間 令和8年7月1日（水曜日）～12月25日（金曜日）まで 提出場所：東村役場 総務財政課 対象者・支援条件 下記すべての条件を満たす方が対象です",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/higashison_life/live/2188.html",
    "sourceName": "東村UIJターン奨学金償還支援事業補助金"
  },
  {
    "slug": "okinawa-official-003-058-2026",
    "title": "東村 年金生活者支援給付金制度",
    "organization": "東村",
    "maxAmount": "月額5,450円",
    "maxAmountNum": 5450,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "東村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年09月02日 支給されるものです",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/kurashi_tetsuzuki/kokuminnenkin/2922.html",
    "sourceName": "年金生活者支援給付金制度"
  },
  {
    "slug": "okinawa-official-003-059-2026",
    "title": "東村 令和7年度物価高対応子育て応援手当給付金",
    "organization": "東村",
    "maxAmount": "支給額対象児童1人あたり20,000円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "東村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年02月03日 支給をします",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/kosodate_kyoiku/jidofukushi_hitorioyafukushi/3089.html",
    "sourceName": "令和7年度物価高対応子育て応援手当給付金"
  },
  {
    "slug": "okinawa-official-003-060-2026",
    "title": "東村 特別児童扶養手当",
    "organization": "東村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "東村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年10月22日 支給される手当です",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/kosodate_kyoiku/siensoudan/2490.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "okinawa-official-003-061-2026",
    "title": "東村 東村農林水産業振興補助金",
    "organization": "東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "東村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年03月30日 交付規程の一部改正について Tweet 更新日：2026年03月30日 東村農林水産業振興補助金交付規程が一部変更になります",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/oshirase/2665.html",
    "sourceName": "東村農林水産業振興補助金"
  },
  {
    "slug": "okinawa-official-003-062-2026",
    "title": "東村 東村住宅用太陽光発電システム設置補助金",
    "organization": "東村",
    "maxAmount": "上限100,000円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "東村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年02月13日 交付します",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/kurashi_tetsuzuki/sumai/577.html",
    "sourceName": "東村住宅用太陽光発電システム設置補助金"
  },
  {
    "slug": "okinawa-official-003-063-2026",
    "title": "東村 東村人材育成・育英会",
    "organization": "東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "東村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集について」 東村人材育成基金について 東村UIJターン奨学金償還支援事業補助金について 手当・助成 ライフシーンから探す 住民票・証明 妊娠・出産 子育て・教育 結婚・離婚 入園・入学 引越し 税金 健康・医療 高齢・障害・ 介護 ペット",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/kosodate_kyoiku/jidofukushi_hitorioyafukushi/2185.html",
    "sourceName": "東村人材育成・育英会"
  },
  {
    "slug": "okinawa-official-003-064-2026",
    "title": "東村 経済的支援",
    "organization": "東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "東村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年07月12日 申請 申請書 ダウンロード ゴミ検索ナビ 手続き検索ナビ コミュニティバス 東村 Higashi Village 東村役場 〒905-1292 沖縄県国頭郡東村平良804番地 電話番号：0980-43-2201（代表番号） ファックス番号：09",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/kosodate_kyoiku/jidofukushi_hitorioyafukushi/714.html",
    "sourceName": "経済的支援"
  },
  {
    "slug": "okinawa-official-003-065-2026",
    "title": "東村 令和8年度東村消費喚起商品券",
    "organization": "東村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "東村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年07月07日 募集について Tweet 更新日：2026年07月07日 取扱加盟店を募集いたします 物価高騰により大きな影響を受けている村内事業者への支援と、村民への家計支援を行うことで、村内の経済回復を図るため、『東村消費喚起商品券』を発行いたします",
    "officialUrl": "https://www.vill.higashi.okinawa.jp/boshuu/2855.html",
    "sourceName": "令和8年度東村消費喚起商品券"
  }
];
