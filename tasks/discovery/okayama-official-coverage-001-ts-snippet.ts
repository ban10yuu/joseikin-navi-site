const okayamaOfficial001Grants: Array<{
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
    "slug": "okayama-official-001-001-2026",
    "title": "岡山市 岡山市移住支援補助金",
    "organization": "岡山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 【補助金】岡山市に移住する際はぜひ補助金をご活用ください | 岡山市 共通メニューなどをスキップして本文へ 文字サイズ 標準 拡大 音声読み上げ・ふりがな Languages English 中文简体 中文繁體 한국어 Português ",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000080956.html",
    "sourceName": "岡山市移住支援補助金"
  },
  {
    "slug": "okayama-official-001-002-2026",
    "title": "岡山市 令和7年度岡山市物価高騰対応定額給付金",
    "organization": "岡山市",
    "maxAmount": "1世帯あたり3万円",
    "maxAmountNum": 30000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "岡山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 受付終了しました | 岡山市 共通メニューなどをスキップして本文へ 文字サイズ 標準 拡大 音声読み上げ・ふりがな Languages English 中文简体 中文繁體 한국어 Português Es",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000077415.html",
    "sourceName": "令和7年度岡山市物価高騰対応定額給付金"
  },
  {
    "slug": "okayama-official-001-003-2026",
    "title": "岡山市 令和7年度物価高対応子育て応援手当",
    "organization": "岡山市",
    "maxAmount": "支給額対象児童1人につき20,000円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年12月17日 受付終了しました | 岡山市 共通メニューなどをスキップして本文へ 文字サイズ 標準 拡大 音声読み上げ・ふりがな Languages English 中文简体 中文繁體 한국어 Português Es",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000077146.html",
    "sourceName": "令和7年度物価高対応子育て応援手当"
  },
  {
    "slug": "okayama-official-001-004-2026",
    "title": "岡山市 児童手当",
    "organization": "岡山市",
    "maxAmount": "月額15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2021年2月1日 支給分から児童手当の制度が改正されました",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000011381.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "okayama-official-001-005-2026",
    "title": "岡山市 児童扶養手当",
    "organization": "岡山市",
    "maxAmount": "月額）令和8年4月分から支給対象児童数手当の全額を受給できる人（全部支給）手当の一部を受給できる人（一部支給）児童1人のとき48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2012年4月2日 支給する手当です",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000011272.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okayama-official-001-006-2026",
    "title": "岡山市 子ども医療費助成制度",
    "organization": "岡山市",
    "maxAmount": "上限額44,400円",
    "maxAmountNum": 44400,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "岡山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月10日 申請が必要です",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000004319.html",
    "sourceName": "子ども医療費助成制度"
  },
  {
    "slug": "okayama-official-001-007-2026",
    "title": "岡山市 ひとり親家庭等医療費助成制度",
    "organization": "岡山市",
    "maxAmount": "限度額(月額)※医療機関等の窓口での月額上限額外来入院一定以上44,400円",
    "maxAmountNum": 400,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "岡山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月10日 提出により、最長で20歳の年度末まで対象になります",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000004310.html",
    "sourceName": "ひとり親家庭等医療費助成制度"
  },
  {
    "slug": "okayama-official-001-008-2026",
    "title": "岡山市 不妊治療費助成事業",
    "organization": "岡山市",
    "maxAmount": "上限10万円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "岡山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年7月22日 申請方法 （必要書類,申請期限） ｜ Q&A 事業の概要 不妊治療を受ける方の経済的負担を軽減し、安心して子どもを産み育てることができる環境づくりを目的として、不妊治療（保険が適用される体外受精および顕微",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000072220.html",
    "sourceName": "不妊治療費助成事業"
  },
  {
    "slug": "okayama-official-001-009-2026",
    "title": "岡山市 不育症治療費助成事業",
    "organization": "岡山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "岡山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2020年7月22日 申請日において岡山市に住民登録のある夫婦（いずれか一方でも可）（婚姻の届出をしていないが、事実上婚姻関係にある者を含む） 治療（検査）の開始日における妻の年齢が43歳未満であること 岡山市税（市民税、固定",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000023658.html",
    "sourceName": "不育症治療費助成事業"
  },
  {
    "slug": "okayama-official-001-010-2026",
    "title": "岡山市 小児医療助成制度",
    "organization": "岡山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月27日 交付する小児慢性特定疾病医療受給者証の、加入の健康保険情報（保険者名、記号・番号、適用区分）の記載を廃止します",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000067843.html",
    "sourceName": "小児医療助成制度"
  },
  {
    "slug": "okayama-official-001-011-2026",
    "title": "岡山市 自立支援医療（育成医療）",
    "organization": "岡山市",
    "maxAmount": "上限月額所得区分自己負担上限月額重度かつ継続自己負担上限月額生活保護世帯0円",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2013年3月5日 申請時に18歳未満で、助成期間内に18歳に到達した場合、助成期間終了まで助成されます",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000015207.html",
    "sourceName": "自立支援医療（育成医療）"
  },
  {
    "slug": "okayama-official-001-012-2026",
    "title": "岡山市 生活困窮世帯受験料等支援金ひとり親家庭分給付事業",
    "organization": "岡山市",
    "maxAmount": "1人当たり上限53,000円",
    "maxAmountNum": 53000,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "employment",
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2024年5月15日 支給し、進学に向けたチャレンジを後押します",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000059666.html",
    "sourceName": "生活困窮世帯受験料等支援金ひとり親家庭分給付事業"
  },
  {
    "slug": "okayama-official-001-013-2026",
    "title": "岡山市 養育費履行確保支援",
    "organization": "岡山市",
    "maxAmount": "上限50,000円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2026年5月8日 申請から、所得要件を撤廃し、対象経費や補助額も拡充しました",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000029999.html",
    "sourceName": "養育費履行確保支援"
  },
  {
    "slug": "okayama-official-001-014-2026",
    "title": "岡山市 ひとり親家庭高等学校卒業程度認定試験合格支援事業",
    "organization": "岡山市",
    "maxAmount": "上限100,000円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2024年10月1日 支給します",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000056202.html",
    "sourceName": "ひとり親家庭高等学校卒業程度認定試験合格支援事業"
  },
  {
    "slug": "okayama-official-001-015-2026",
    "title": "岡山市 母子及び父子家庭高等職業訓練促進給付金",
    "organization": "岡山市",
    "maxAmount": "月額）市民税非課税世帯100,000円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2012年4月2日 支給条件を満たせば、高等職業訓練促進給付金（以下「訓練促進給付金」といいます",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000010966.html",
    "sourceName": "母子及び父子家庭高等職業訓練促進給付金"
  },
  {
    "slug": "okayama-official-001-016-2026",
    "title": "岡山市 母子・父子・寡婦福祉資金貸付金",
    "organization": "岡山市",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "medical",
      "nursing",
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2010年1月15日 申請窓口 お住まいの住所地の福祉事務所で母子・父子自立支援員がご相談に応じています",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000010949.html",
    "sourceName": "母子・父子・寡婦福祉資金貸付金"
  },
  {
    "slug": "okayama-official-001-017-2026",
    "title": "岡山市 母子及び父子家庭自立支援教育訓練給付金",
    "organization": "岡山市",
    "maxAmount": "上限200,000円",
    "maxAmountNum": 200000,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "岡山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2010年1月15日 支給する制度です",
    "officialUrl": "https://www.city.okayama.jp/kurashi/0000011367.html",
    "sourceName": "母子及び父子家庭自立支援教育訓練給付金"
  },
  {
    "slug": "okayama-official-001-018-2026",
    "title": "岡山市 岡山市事業承継支援補助金",
    "organization": "岡山市",
    "maxAmount": "限度額１００万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内の事業者・就労者・農林水産業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月17日 申請受付を開始しました",
    "officialUrl": "https://www.city.okayama.jp/jigyosha/0000081398.html",
    "sourceName": "岡山市事業承継支援補助金"
  },
  {
    "slug": "okayama-official-001-019-2026",
    "title": "岡山市 ＩｏＴ・ＡＩ等先端技術導入支援補助金（事前検証事業）",
    "organization": "岡山市",
    "maxAmount": "上限150万円",
    "maxAmountNum": 1500000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "岡山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月2日 募集開始！！】先端技術導入に向けた事前検証を支援 「ＩоＴ・ＡＩ等先端技術導入支援補助金（事前検証事業）」の申請者募集！！※８／３１（月曜日）締切 | 岡山市 共通メニューなどをスキップして本文へ 文字サ",
    "officialUrl": "https://www.city.okayama.jp/jigyosha/0000081277.html",
    "sourceName": "ＩｏＴ・ＡＩ等先端技術導入支援補助金（事前検証事業）"
  },
  {
    "slug": "okayama-official-001-020-2026",
    "title": "岡山市 ＩｏＴ・ＡＩ等先端技術導入支援補助金（検証済み先端技術導入事業）",
    "organization": "岡山市",
    "maxAmount": "上限750万円",
    "maxAmountNum": 7500000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "岡山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月2日 募集開始！！】先端技術の本格導入を支援 「ＩоＴ・ＡＩ等先端技術導入支援補助金（検証済み先端技術導入事業）」の申請者募集！！※８／３１（月曜日）締切 | 岡山市 共通メニューなどをスキップして本文へ 文字",
    "officialUrl": "https://www.city.okayama.jp/jigyosha/0000081279.html",
    "sourceName": "ＩｏＴ・ＡＩ等先端技術導入支援補助金（検証済み先端技術導入事業）"
  },
  {
    "slug": "okayama-official-001-021-2026",
    "title": "岡山市 岡山市製造業等販路拡張支援事業（見本市出展補助）",
    "organization": "岡山市",
    "maxAmount": "上限額の区分表補助対象経費（消費税抜き）補助率補助上限額（千円未満切り捨て）国内見本市小間料の総額※12分の125万円",
    "maxAmountNum": 250000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内の事業者・就労者・農林水産業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年2月17日 募集は終了しました》岡山市製造業等販路拡張支援事業（見本市出展補助）令和8年度募集開始！ | 岡山市 共通メニューなどをスキップして本文へ 文字サイズ 標準 拡大 音声読み上げ・ふりがな Language",
    "officialUrl": "https://www.city.okayama.jp/jigyosha/0000077981.html",
    "sourceName": "岡山市製造業等販路拡張支援事業（見本市出展補助）"
  },
  {
    "slug": "okayama-official-001-022-2026",
    "title": "岡山市 岡山市省エネ機器更新緊急支援補助金",
    "organization": "岡山市",
    "maxAmount": "上限200万円",
    "maxAmountNum": 2000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "岡山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年1月26日 募集案内 岡山市省エネ機器更新緊急支援補助金（第5弾）募集案内 (PDF形式、341.49KB) 申請はこちら https://syoene2023-5.okayama-shinsei.jp/ 別ウィンド",
    "officialUrl": "https://www.city.okayama.jp/jigyosha/0000078177.html",
    "sourceName": "岡山市省エネ機器更新緊急支援補助金"
  },
  {
    "slug": "okayama-official-001-023-2026",
    "title": "岡山市 岡山市地域商業グループ活動支援事業",
    "organization": "岡山市",
    "maxAmount": "限度額・補助率1回目50万円",
    "maxAmountNum": 500000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内の事業者・就労者・農林水産業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年7月1日 募集します",
    "officialUrl": "https://www.city.okayama.jp/jigyosha/0000035883.html",
    "sourceName": "岡山市地域商業グループ活動支援事業"
  },
  {
    "slug": "okayama-official-001-024-2026",
    "title": "岡山市 岡山市産農産物ブランド力向上チャレンジ事業補助金",
    "organization": "岡山市",
    "maxAmount": "上限額20万円",
    "maxAmountNum": 200000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "岡山市内の事業者・就労者・農林水産業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 募集について | 岡山市 共通メニューなどをスキップして本文へ 文字サイズ 標準 拡大 音声読み上げ・ふりがな Languages English 中文简体 中文繁體 한국어 Português Espa",
    "officialUrl": "https://www.city.okayama.jp/jigyosha/0000009532.html",
    "sourceName": "岡山市産農産物ブランド力向上チャレンジ事業補助金"
  },
  {
    "slug": "okayama-official-001-025-2026",
    "title": "倉敷市 物価高対策臨時給付金",
    "organization": "倉敷市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "倉敷市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月5日 申請受付は終了しました",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/fukushi/welfare/1023219/1023220.html",
    "sourceName": "物価高対策臨時給付金"
  },
  {
    "slug": "okayama-official-001-026-2026",
    "title": "倉敷市 物価高対応子育て応援手当",
    "organization": "倉敷市",
    "maxAmount": "1人につき2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "倉敷市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 支給する制度です",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1023030/index.html",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "okayama-official-001-027-2026",
    "title": "倉敷市 児童手当",
    "organization": "倉敷市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "倉敷市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "支給する制度です",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1004160/index.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "okayama-official-001-028-2026",
    "title": "倉敷市 児童扶養手当",
    "organization": "倉敷市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "倉敷市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1004166/index.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okayama-official-001-029-2026",
    "title": "倉敷市 特別児童扶養手当",
    "organization": "倉敷市",
    "maxAmount": "月額58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "倉敷市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2026年3月24日 支給 お知らせ 令和6年7月1日から、特別児童扶養手当証書が廃止になりました",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1004171.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "okayama-official-001-030-2026",
    "title": "倉敷市 児童福祉年金",
    "organization": "倉敷市",
    "maxAmount": "1人月額2,000円",
    "maxAmountNum": 2000,
    "category": "childcare",
    "relatedCategories": [
      "medical",
      "nursing",
      "living"
    ],
    "eligibility": "倉敷市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年1月25日 支給 事業内容 心身に障がいのある児童の養育者に年金を支給します",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1004172.html",
    "sourceName": "児童福祉年金"
  },
  {
    "slug": "okayama-official-001-031-2026",
    "title": "倉敷市 妊婦支援給付金",
    "organization": "倉敷市",
    "maxAmount": "1人につき5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "倉敷市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月17日 支給対象 妊娠の届出をした妊婦 ※妊娠届出後に流産・死産された方も対象となります（申請方法等はお問い合わせください） 支給金額 1回の妊娠につき 5万円 こども（胎児）1人につき 5万円 申請時期 妊娠届",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/kosodate/childcare/1012563/1004159/1016624.html",
    "sourceName": "妊婦支援給付金"
  },
  {
    "slug": "okayama-official-001-032-2026",
    "title": "倉敷市 子ども医療費の助成",
    "organization": "倉敷市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "倉敷市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請ができます！！ スマートフォン・パソコン（ICカードリーダー付き）と保護者の方のマイナンバーカードで、24時間どこからでも、下記の申請ができます！ ※利用者証明用（4桁）・署名用（6～16桁）のパスワ",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004720.html",
    "sourceName": "子ども医療費の助成"
  },
  {
    "slug": "okayama-official-001-033-2026",
    "title": "倉敷市 ひとり親家庭等医療費の助成",
    "organization": "倉敷市",
    "maxAmount": "限度額（月額上限額）所得区分負担限度額(月額)外来負担限度額(月額)入院・外来合算一定以上所得者課税所得が145万円",
    "maxAmountNum": 1450000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "倉敷市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年2月19日 申請時は前々年)の所得税が非課税であること",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004721.html",
    "sourceName": "ひとり親家庭等医療費の助成"
  },
  {
    "slug": "okayama-official-001-034-2026",
    "title": "倉敷市 重度障がい者医療費の助成",
    "organization": "倉敷市",
    "maxAmount": "1人につき：100,000円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "倉敷市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月1日 申請をしてください",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004722.html",
    "sourceName": "重度障がい者医療費の助成"
  },
  {
    "slug": "okayama-official-001-035-2026",
    "title": "倉敷市 特定医療費（指定難病）",
    "organization": "倉敷市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "倉敷市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年8月25日 交付し、医療費の自己負担分の一部について助成を行います",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004832/1011398.html",
    "sourceName": "特定医療費（指定難病）"
  },
  {
    "slug": "okayama-official-001-036-2026",
    "title": "倉敷市 移住支援金",
    "organization": "倉敷市",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "倉敷市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月11日 申請受付開始!】東京圏から倉敷市への移住・就業（テレワーク含む）で、最大100万円の移住支援金を交付します！ 令和8年度分の申請受付を開始します！ 令和8年度倉敷市移住支援金の申請受付を開始します！ 受付",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/culture/tourism/1002101/1011818/1010764.html",
    "sourceName": "移住支援金"
  },
  {
    "slug": "okayama-official-001-037-2026",
    "title": "倉敷市 移住等希望者支援交通費補助金",
    "organization": "倉敷市",
    "maxAmount": "上限東京圏に在住16,000円",
    "maxAmountNum": 16000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "倉敷市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月6日 交付金額 「採用面接」や「住居探し」にかかる交通費※の半額（1,000円未満は切り捨て） 上限 東京圏に在住 16,000円 大阪圏に在住 6,000円 ※1）鉄道・航空機・高速バス利用料金に限る",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/culture/tourism/1002101/1011818/1002114.html",
    "sourceName": "移住等希望者支援交通費補助金"
  },
  {
    "slug": "okayama-official-001-038-2026",
    "title": "倉敷市 社会福祉施設等整備助成事業",
    "organization": "倉敷市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "medical",
      "employment",
      "living"
    ],
    "eligibility": "倉敷市内の高齢者・障がい者・福祉サービス対象者・福祉団体等で公式要件を満たす方",
    "applicationPeriod": "交付要綱 倉敷市例規集からご参照ください",
    "officialUrl": "https://www.city.kurashiki.okayama.jp/fukushi/welfare/1004016/index.html",
    "sourceName": "社会福祉施設等整備助成事業"
  },
  {
    "slug": "okayama-official-001-039-2026",
    "title": "津山市 令和8年度津山市家計応援給付金",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "津山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=695ded7adf10bd4effb59d77",
    "sourceName": "令和8年度津山市家計応援給付金"
  },
  {
    "slug": "okayama-official-001-040-2026",
    "title": "津山市 手当・助成（日常生活用具、補装具ほか）",
    "organization": "津山市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "津山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給、医療費負担軽減を案内",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65cc692b972b0a1c8091e480",
    "sourceName": "手当・助成（日常生活用具、補装具ほか）"
  },
  {
    "slug": "okayama-official-001-041-2026",
    "title": "津山市 津山市多子世帯応援給付金",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "津山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "受付状況を公式に掲載",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b39de6dd20c401ef318ba7",
    "sourceName": "津山市多子世帯応援給付金"
  },
  {
    "slug": "okayama-official-001-042-2026",
    "title": "津山市 移住支援金",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津山市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "支給",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b398d1f6ce953f748ccc84",
    "sourceName": "移住支援金"
  },
  {
    "slug": "okayama-official-001-043-2026",
    "title": "津山市 児童手当",
    "organization": "津山市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "支給し、申請・認定請求を公式に案内",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b38e515677ea07dd03ad00",
    "sourceName": "児童手当"
  },
  {
    "slug": "okayama-official-001-044-2026",
    "title": "津山市 児童扶養手当",
    "organization": "津山市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "申請の翌月分から支給され、所得制限等の要件を公式に案内",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b3965c319ffe392a80697c",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okayama-official-001-045-2026",
    "title": "津山市 子ども医療費公費負担制度",
    "organization": "津山市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "津山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "18歳到達後最初の3月31日まで医療費助成対象を拡大した子ども医療費公費負担制度。",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b394ff319ffe392a8067d0",
    "sourceName": "子ども医療費公費負担制度"
  },
  {
    "slug": "okayama-official-001-046-2026",
    "title": "津山市 ひとり親家庭等医療",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "津山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "ひとり親家庭の養育者と児童が保険診療を受ける際の医療費助成を案内。",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b38ffb5677ea07dd03af3a",
    "sourceName": "ひとり親家庭等医療"
  },
  {
    "slug": "okayama-official-001-047-2026",
    "title": "津山市 母子家庭等自立支援教育訓練給付金",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "津山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "支給",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b3965f319ffe392a806980",
    "sourceName": "母子家庭等自立支援教育訓練給付金"
  },
  {
    "slug": "okayama-official-001-048-2026",
    "title": "津山市 高等職業訓練促進給付金等事業",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "津山市内の児童生徒・学生・保護者・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "20歳未満の児童を扶養するひとり親家庭の父または母を対象に、資格取得中の給付を案内。",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b38f9b5677ea07dd03aeba",
    "sourceName": "高等職業訓練促進給付金等事業"
  },
  {
    "slug": "okayama-official-001-049-2026",
    "title": "津山市 養育費確保支援事業（公正証書等作成補助事業）",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "津山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "ひとり親家庭が養育費の取り決めに係る公正証書等を作成した場合に費用の一部を助成。",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b39d4edd20c401ef318af5",
    "sourceName": "養育費確保支援事業（公正証書等作成補助事業）"
  },
  {
    "slug": "okayama-official-001-050-2026",
    "title": "津山市 養育費確保支援事業（弁護士費用一部補助事業）",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "津山市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "請求等で弁護士事務所等を利用した場合に支払った弁護士費用の一部を助成",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b3970e319ffe392a806a58",
    "sourceName": "養育費確保支援事業（弁護士費用一部補助事業）"
  },
  {
    "slug": "okayama-official-001-051-2026",
    "title": "津山市 就学援助・特別支援教育就学奨励費",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津山市内の児童生徒・学生・保護者・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "経済的理由で小中学校への就学が困難な児童生徒に就学に必要な経費を援助。",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b39583319ffe392a80686c",
    "sourceName": "就学援助・特別支援教育就学奨励費"
  },
  {
    "slug": "okayama-official-001-052-2026",
    "title": "津山市 空き家活用定住促進事業補助金",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "津山市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=65b395ba319ffe392a8068ae",
    "sourceName": "空き家活用定住促進事業補助金"
  },
  {
    "slug": "okayama-official-001-053-2026",
    "title": "津山市 令和8年度津山市地域材利用促進事業補助金",
    "organization": "津山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "津山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "市内建築関連業者等が地域材を利用する新築・改修を行う場合の補助対象者・要件を案内。",
    "officialUrl": "https://www.city.tsuyama.lg.jp/article?articleId=67e641f947c0d315cfe764cf",
    "sourceName": "令和8年度津山市地域材利用促進事業補助金"
  },
  {
    "slug": "okayama-official-001-054-2026",
    "title": "玉野市 物価高騰対応給付金",
    "organization": "玉野市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "玉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月30日 受付終了】 - 玉野市公式ウェブサイト ページの先頭です",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/5/53486.html",
    "sourceName": "物価高騰対応給付金"
  },
  {
    "slug": "okayama-official-001-055-2026",
    "title": "玉野市 妊婦のための支援給付",
    "organization": "玉野市",
    "maxAmount": "支給額1.1回目：5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "玉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給します",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/32361.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "okayama-official-001-056-2026",
    "title": "玉野市 結婚新生活支援事業補助金",
    "organization": "玉野市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "玉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月21日 申請日時点において、夫婦ともに玉野市内の住宅に居住し、住民登録をしていること 婚姻日時点において、夫婦ともに年齢が 39歳以下 であること 申請時における最新の所得証明書をもとにした夫婦の所得合計が、 5",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/27442.html",
    "sourceName": "結婚新生活支援事業補助金"
  },
  {
    "slug": "okayama-official-001-057-2026",
    "title": "玉野市 不妊・不育治療費助成",
    "organization": "玉野市",
    "maxAmount": "上限12万円",
    "maxAmountNum": 120000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請方法は、加入している保険組合等にご確認ください",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/16073.html",
    "sourceName": "不妊・不育治療費助成"
  },
  {
    "slug": "okayama-official-001-058-2026",
    "title": "玉野市 初回産科受診料助成",
    "organization": "玉野市",
    "maxAmount": "上限10，000円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請していただけます",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/36236.html",
    "sourceName": "初回産科受診料助成"
  },
  {
    "slug": "okayama-official-001-059-2026",
    "title": "玉野市 こども医療費助成制度",
    "organization": "玉野市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "玉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年7月25日 申請手続きが必要です",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/2027.html",
    "sourceName": "こども医療費助成制度"
  },
  {
    "slug": "okayama-official-001-060-2026",
    "title": "玉野市 未熟児養育医療費給付制度",
    "organization": "玉野市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "玉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年4月1日 支給対象 診察 薬剤又は治療材料の支給 医学的処置、手術及びその他の治療 病院又は診療所への入院及びその療養に伴う世話その他の看護 移送 食事療養費及び生活療養費 自己負担金 対象となる乳児の扶養義務者の",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/2025.html",
    "sourceName": "未熟児養育医療費給付制度"
  },
  {
    "slug": "okayama-official-001-061-2026",
    "title": "玉野市 特別児童扶養手当",
    "organization": "玉野市",
    "maxAmount": "支給額(令和8年度)＊対象児童1人につき1級月額58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給される手当です",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/2024.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "okayama-official-001-062-2026",
    "title": "玉野市 児童手当",
    "organization": "玉野市",
    "maxAmount": "月額）児童の年齢等支給額（月額）3歳未満（第1子、第2子）15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給対象となる児童 0歳から18歳年度末までの児童 原則として、日本国内に住所を有する児童 2",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/2028.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "okayama-official-001-063-2026",
    "title": "玉野市 在宅育児手当",
    "organization": "玉野市",
    "maxAmount": "支給額対象乳児1人につき、月額10,000円",
    "maxAmountNum": 10000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年9月1日 支給します",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/39850.html",
    "sourceName": "在宅育児手当"
  },
  {
    "slug": "okayama-official-001-064-2026",
    "title": "玉野市 児童扶養手当",
    "organization": "玉野市",
    "maxAmount": "月額は、申請者の所得に応じて10円",
    "maxAmountNum": 10,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給します",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/2157.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okayama-official-001-065-2026",
    "title": "玉野市 養育費確保支援事業",
    "organization": "玉野市",
    "maxAmount": "上限額3万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "玉野市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年4月3日 申請を希望される場合は、事前にご相談ください",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/46217.html",
    "sourceName": "養育費確保支援事業"
  },
  {
    "slug": "okayama-official-001-066-2026",
    "title": "玉野市 高等職業訓練促進給付金",
    "organization": "玉野市",
    "maxAmount": "支給額高等職業訓練促進給付金市町村民税非課税世帯&hellip;月額100,000円",
    "maxAmountNum": 100000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内の児童生徒・学生・保護者・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年1月8日 支給します",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/1234.html",
    "sourceName": "高等職業訓練促進給付金"
  },
  {
    "slug": "okayama-official-001-067-2026",
    "title": "玉野市 自立支援教育訓練給付金",
    "organization": "玉野市",
    "maxAmount": "限度額一覧講座の種類支給上限一般教育訓練給付金の指定教育訓練講座特定一般教育訓練給付金の指定教育訓練講座20万円",
    "maxAmountNum": 200000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内の児童生徒・学生・保護者・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年1月8日 支給します",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/1271.html",
    "sourceName": "自立支援教育訓練給付金"
  },
  {
    "slug": "okayama-official-001-068-2026",
    "title": "玉野市 ひとり親家庭等医療費助成",
    "organization": "玉野市",
    "maxAmount": "限度額（月額上限額）所得区分外来外来＋入院、入院一定以上44,400円",
    "maxAmountNum": 44400,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "玉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年4月1日 申請時は前々年）の所得税（税額控除前）が非課税であること ※事実婚、内縁関係の人は対象外です",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/42/1858.html",
    "sourceName": "ひとり親家庭等医療費助成"
  },
  {
    "slug": "okayama-official-001-069-2026",
    "title": "玉野市 令和8年度玉野市脱炭素推進補助金",
    "organization": "玉野市",
    "maxAmount": "上限）予算残額（令和8年7月13日現在※1）玉野市太陽光発電設備補助金交付要綱[PDFファイル／146KB]太陽光発電設備20,000円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "玉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月15日 募集 - 玉野市公式ウェブサイト ページの先頭です",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/12/39837.html",
    "sourceName": "令和8年度玉野市脱炭素推進補助金"
  },
  {
    "slug": "okayama-official-001-070-2026",
    "title": "玉野市 玉野市省エネ投資促進事業補助金",
    "organization": "玉野市",
    "maxAmount": "限度額上限額50万円",
    "maxAmountNum": 500000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "玉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月26日 交付金活用事業 補助対象者 市内中小・小規模企業者（個人事業主を含む） 市税の滞納がない 申請日時点で事業を継続していて、今後も事業を継続する意思がある者 個人事業主は事業所得は総所得の2分の1以上ある者",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/43/56928.html",
    "sourceName": "玉野市省エネ投資促進事業補助金"
  },
  {
    "slug": "okayama-official-001-071-2026",
    "title": "玉野市 中小企業人材確保支援事業補助金",
    "organization": "玉野市",
    "maxAmount": "上限額補助率・上限額内容補助率上限額Ａ人材確保就職説明会への出展・就職説明会出展の交通費2／320万円",
    "maxAmountNum": 200000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内の事業者・就労者・農林水産業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月23日 申請をお願いします（令和８年６月23日）",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/43/1901.html",
    "sourceName": "中小企業人材確保支援事業補助金"
  },
  {
    "slug": "okayama-official-001-072-2026",
    "title": "玉野市 高齢者の補聴器購入費用助成",
    "organization": "玉野市",
    "maxAmount": "上限5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "玉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月7日 申請があり、予算の都合上、受付を一時停止する可能性があります",
    "officialUrl": "https://www.city.tamano.lg.jp/site/cyoju/54565.html",
    "sourceName": "高齢者の補聴器購入費用助成"
  },
  {
    "slug": "okayama-official-001-073-2026",
    "title": "玉野市 空き家家財処分支援事業補助金",
    "organization": "玉野市",
    "maxAmount": "限度額は10万円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "玉野市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月9日 申請者） 次のすべてに該当する方 玉野市空き家バンクに登録している空き家等の所有者 補助金の交付決定を受けた日から3年以上、玉野市空き家バンクへの登録を継続する者 市税等に滞納のない者 3",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/20/33163.html",
    "sourceName": "空き家家財処分支援事業補助金"
  },
  {
    "slug": "okayama-official-001-074-2026",
    "title": "玉野市 空き家改修事業補助制度",
    "organization": "玉野市",
    "maxAmount": "限度額は50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "玉野市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月9日 申請日から1年以内に購入、受贈または貸借した住宅（一の補助対象住宅につき1回限り） 一戸建ての住宅、または併用住宅（住宅と店舗が一体となった建物のうち住居部分が2分の1以上の建物） 令和9年1月末日までに",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/20/1688.html",
    "sourceName": "空き家改修事業補助制度"
  },
  {
    "slug": "okayama-official-001-075-2026",
    "title": "玉野市 空家等除却事業補助制度",
    "organization": "玉野市",
    "maxAmount": "限度額は50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "玉野市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月9日 申請者） 補助対象空家等の所有者（個人）又は所有者の承諾を得た個人その他正当な権原を有する個人 ※ この補助制度は 個人 を対象としており、法人の申請はできません",
    "officialUrl": "https://www.city.tamano.lg.jp/soshiki/20/1820.html",
    "sourceName": "空家等除却事業補助制度"
  },
  {
    "slug": "okayama-official-001-076-2026",
    "title": "玉野市 移住支援金",
    "organization": "玉野市",
    "maxAmount": "最大200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "玉野市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付します！ 玉野市への移住促進及び中小企業等における人手不足を解消するため、東京圏から玉野市へ移住し、一定の要件を満たす人へ移住支援金を交付します",
    "officialUrl": "https://www.city.tamano.lg.jp/site/lifeoftamano/9010.html",
    "sourceName": "移住支援金"
  },
  {
    "slug": "okayama-official-001-077-2026",
    "title": "笠岡市 笠岡市住宅リフォーム助成金",
    "organization": "笠岡市",
    "maxAmount": "上限額を10万円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年6月29日 交付金） - 笠岡市ホームページ ページの先頭です",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/28/44807.html",
    "sourceName": "笠岡市住宅リフォーム助成金"
  },
  {
    "slug": "okayama-official-001-078-2026",
    "title": "笠岡市 笠岡市空き店舗等活用事業費補助金",
    "organization": "笠岡市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内の事業者・就労者・農林水産業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月16日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/30/43091.html",
    "sourceName": "笠岡市空き店舗等活用事業費補助金"
  },
  {
    "slug": "okayama-official-001-079-2026",
    "title": "笠岡市 笠岡市不妊治療支援事業",
    "organization": "笠岡市",
    "maxAmount": "助成額助成上限額一般不妊治療高額療養費や付加給付金を除いた自己負担額10万円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/73280.html",
    "sourceName": "笠岡市不妊治療支援事業"
  },
  {
    "slug": "okayama-official-001-080-2026",
    "title": "笠岡市 妊産婦医療費助成制度",
    "organization": "笠岡市",
    "maxAmount": "助成額1回の妊娠・出産につき3万円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月2日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/43447.html",
    "sourceName": "妊産婦医療費助成制度"
  },
  {
    "slug": "okayama-official-001-081-2026",
    "title": "笠岡市 不育治療支援事業",
    "organization": "笠岡市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年4月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/1982.html",
    "sourceName": "不育治療支援事業"
  },
  {
    "slug": "okayama-official-001-082-2026",
    "title": "笠岡市 低所得妊婦初回産科受診料支援事業",
    "organization": "笠岡市",
    "maxAmount": "上限）支払が1万円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2023年11月30日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/52825.html",
    "sourceName": "低所得妊婦初回産科受診料支援事業"
  },
  {
    "slug": "okayama-official-001-083-2026",
    "title": "笠岡市 妊婦のための出産時交通費等支援事業",
    "organization": "笠岡市",
    "maxAmount": "上限）から1泊あたり2,000円",
    "maxAmountNum": 2000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/73234.html",
    "sourceName": "妊婦のための出産時交通費等支援事業"
  },
  {
    "slug": "okayama-official-001-084-2026",
    "title": "笠岡市 妊婦のための支援給付",
    "organization": "笠岡市",
    "maxAmount": "支給額妊婦のための支援給付（1回目）妊娠に対する5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月23日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/65917.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "okayama-official-001-085-2026",
    "title": "笠岡市 高等職業訓練促進給付金等事業",
    "organization": "笠岡市",
    "maxAmount": "月額10万円",
    "maxAmountNum": 100000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "笠岡市内の児童生徒・学生・保護者・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年1月7日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/1997.html",
    "sourceName": "高等職業訓練促進給付金等事業"
  },
  {
    "slug": "okayama-official-001-086-2026",
    "title": "笠岡市 自立支援教育訓練給付金事業",
    "organization": "笠岡市",
    "maxAmount": "上限：修学年数に20万円",
    "maxAmountNum": 200000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "笠岡市内の児童生徒・学生・保護者・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年1月9日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/1996.html",
    "sourceName": "自立支援教育訓練給付金事業"
  },
  {
    "slug": "okayama-official-001-087-2026",
    "title": "笠岡市 ひとり親家庭自立支援事業",
    "organization": "笠岡市",
    "maxAmount": "支給額上記(1)(2)の対象経費の合計額と3万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "笠岡市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年1月7日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/27471.html",
    "sourceName": "ひとり親家庭自立支援事業"
  },
  {
    "slug": "okayama-official-001-088-2026",
    "title": "笠岡市 児童手当",
    "organization": "笠岡市",
    "maxAmount": "支給額が，3万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2025年2月3日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/16/1707.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "okayama-official-001-089-2026",
    "title": "笠岡市 児童扶養手当",
    "organization": "笠岡市",
    "maxAmount": "支給額児童1人児童2人目以降全部支給月額48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2022年4月19日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/24/1971.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okayama-official-001-090-2026",
    "title": "笠岡市 物価高対応子育て応援手当",
    "organization": "笠岡市",
    "maxAmount": "1人当たり2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内の児童・子育て世帯・ひとり親家庭等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/16/71440.html",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "okayama-official-001-091-2026",
    "title": "笠岡市 笠岡市民生活応援商品券事業",
    "organization": "笠岡市",
    "maxAmount": "1人あたりの生活応援商品券の金額対象者1人につき10，000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "笠岡市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年3月23日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/30/72230.html",
    "sourceName": "笠岡市民生活応援商品券事業"
  },
  {
    "slug": "okayama-official-001-092-2026",
    "title": "笠岡市 住居確保給付金",
    "organization": "笠岡市",
    "maxAmount": "上限３１，０００円",
    "maxAmountNum": 31000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/20/47482.html",
    "sourceName": "住居確保給付金"
  },
  {
    "slug": "okayama-official-001-093-2026",
    "title": "笠岡市 笠岡市スマートエネルギー導入補助金",
    "organization": "笠岡市",
    "maxAmount": "上限120,000円",
    "maxAmountNum": 120000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "笠岡市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/18/54792.html",
    "sourceName": "笠岡市スマートエネルギー導入補助金"
  },
  {
    "slug": "okayama-official-001-094-2026",
    "title": "笠岡市 生ごみ処理容器購入補助金制度",
    "organization": "笠岡市",
    "maxAmount": "限度額コンポスト・ボカシ容器1世帯各2基まで1基につき販売金額（税込みの本体価格）の2分の1を補助し，3，000円",
    "maxAmountNum": 3000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "笠岡市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/18/1781.html",
    "sourceName": "生ごみ処理容器購入補助金制度"
  },
  {
    "slug": "okayama-official-001-095-2026",
    "title": "笠岡市 令和8年度まちなみづくり支援事業補助金",
    "organization": "笠岡市",
    "maxAmount": "上限額》市内宅建事業者最大200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "笠岡市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 募集について - 笠岡市ホームページ ページの先頭です",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/28/74370.html",
    "sourceName": "令和8年度まちなみづくり支援事業補助金"
  },
  {
    "slug": "okayama-official-001-096-2026",
    "title": "笠岡市 既存建築物の安全対策（耐震関連、各種補助）",
    "organization": "笠岡市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2022年4月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/28/42545.html",
    "sourceName": "既存建築物の安全対策（耐震関連、各種補助）"
  },
  {
    "slug": "okayama-official-001-097-2026",
    "title": "笠岡市 高齢者タクシー利用助成制度",
    "organization": "笠岡市",
    "maxAmount": "最大年間24,000円",
    "maxAmountNum": 24000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内の高齢者・障がい者・福祉サービス対象者・福祉団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/19/55546.html",
    "sourceName": "高齢者タクシー利用助成制度"
  },
  {
    "slug": "okayama-official-001-098-2026",
    "title": "笠岡市 骨髄・末梢血幹細胞ドナー等助成金",
    "organization": "笠岡市",
    "maxAmount": "助成額1ドナー骨髄等の提供を行うため，通院または入院する日数通院1日につき5千円，入院1日につき2万円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2023年9月4日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/22/1957.html",
    "sourceName": "骨髄・末梢血幹細胞ドナー等助成金"
  },
  {
    "slug": "okayama-official-001-099-2026",
    "title": "笠岡市 精神障がい者入院医療費助成金",
    "organization": "笠岡市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2023年10月1日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/20/53393.html",
    "sourceName": "精神障がい者入院医療費助成金"
  },
  {
    "slug": "okayama-official-001-100-2026",
    "title": "笠岡市 難聴児補聴器購入費等助成",
    "organization": "笠岡市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "笠岡市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月7日 申請・届出・証明 事業者の方へ 入札・契約 産業振興 建築・屋外広告・開発 税金（法人） ごみ・環境（法人） 観光情報 目的で探す 季節で探す 島で探す 市政情報 市のプロフィール 市政運営・行政・財政 ",
    "officialUrl": "https://www.city.kasaoka.okayama.jp/soshiki/20/8813.html",
    "sourceName": "難聴児補聴器購入費等助成"
  }
];
