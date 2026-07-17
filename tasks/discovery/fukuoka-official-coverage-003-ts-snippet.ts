const fukuokaOfficial003Grants: Array<{
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
    "slug": "fukuoka-official-003-001-2026",
    "title": "大川市 ひとり親家庭等医療費の助成",
    "organization": "大川市",
    "maxAmount": "3,500円限度",
    "maxAmountNum": 3500,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "大川市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月06日 支給制度 母子家庭、父子家庭及び父母のいない児童（児童は小学1年生から18歳到達の年度まで）が、健康保険による診療を受けたときの自己負担分（入院時の食事負担額は除く",
    "officialUrl": "https://www.city.okawa.lg.jp/s015/030/020/010/20150219142702.html",
    "sourceName": "ひとり親家庭等医療費の助成"
  },
  {
    "slug": "fukuoka-official-003-002-2026",
    "title": "大川市 国民年金の給付",
    "organization": "大川市",
    "maxAmount": "月額70,608円",
    "maxAmountNum": 70608,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年04月01日 支給される年金です",
    "officialUrl": "https://www.city.okawa.lg.jp/s015/010/010/050/20150203170142.html",
    "sourceName": "国民年金の給付"
  },
  {
    "slug": "fukuoka-official-003-003-2026",
    "title": "大川市 重度障がい者医療費の助成",
    "organization": "大川市",
    "maxAmount": "限度額適用・標準負担額減額認定証をお持ちの方）の場合は1日あたり300円",
    "maxAmountNum": 300,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "大川市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年12月06日 支給制度 一定の障がいのある人が、健康保険による診療を受けたときの自己負担分（入院時の食事負担額は除く",
    "officialUrl": "https://www.city.okawa.lg.jp/s015/020/030/010/20150214183604.html",
    "sourceName": "重度障がい者医療費の助成"
  },
  {
    "slug": "fukuoka-official-003-004-2026",
    "title": "大川市 浄化槽設置整備補助事業",
    "organization": "大川市",
    "maxAmount": "補助金額5人槽332,000円",
    "maxAmountNum": 332000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大川市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年3月31日 交付対象 公共下水道事業計画区域外の地域 住宅又は店舗等併用住宅 処理対象人員10人槽以内 販売・賃貸目的でないこと 既存の汚水処理未普及解消につながること 補助金額 5人槽 332,000円 7人槽 414,000円 10",
    "officialUrl": "https://www.city.okawa.lg.jp/s023/010/030/040/20141216213602.html",
    "sourceName": "浄化槽設置整備補助事業"
  },
  {
    "slug": "fukuoka-official-003-005-2026",
    "title": "大川市 大川市まちづくり支援金",
    "organization": "大川市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月27日 交付しています 支援金の交付対象 支援金の交付対象は、構成員5人以上の市内で活動する団体（以下「対象団体」という",
    "officialUrl": "https://www.city.okawa.lg.jp/s012/010/010/010/20150121110802.html",
    "sourceName": "大川市まちづくり支援金"
  },
  {
    "slug": "fukuoka-official-003-006-2026",
    "title": "大川市 福祉用具貸与・購入",
    "organization": "大川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大川市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2019年10月18日 支給申請 健康課介護保険係に、購入した用具のパンフレットの写しや購入費用の領収書（原本）などを添えて、「介護保険居宅介護(介護予防)福祉用具購入費支給申請書」を提出します",
    "officialUrl": "https://www.city.okawa.lg.jp/s016/020/010/030/010/20150213192955.html",
    "sourceName": "福祉用具貸与・購入"
  },
  {
    "slug": "fukuoka-official-003-007-2026",
    "title": "大川市 令和7年10月診療分から中学生までの医療費が無償化となります",
    "organization": "大川市",
    "maxAmount": "上限）自己負担なし小学生から中学生通院1月あたり1,200円",
    "maxAmountNum": 1200,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大川市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年10月1日 申請が必要ですので、お子様の健康保険資格が分かるものを持参のうえ申請手続きをお願いします",
    "officialUrl": "https://www.city.okawa.lg.jp/s015/030/010/010/20150214184110.html",
    "sourceName": "令和7年10月診療分から中学生までの医療費が無償化となります"
  },
  {
    "slug": "fukuoka-official-003-008-2026",
    "title": "大川市 老朽危険家屋等除却促進事業",
    "organization": "大川市",
    "maxAmount": "補助額:最大50万円",
    "maxAmountNum": 500000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大川市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請者 対象建築物の所有者等(相続後未登記等を含み、共有の場合はその代表者) ・申請者が対象建築物を除却する権原を有している 注)相続後未登記等を含み、共有の場合は、原則として共有者全員の同意が必要です",
    "officialUrl": "https://www.city.okawa.lg.jp/s049/010/010/010/20150203140820.html",
    "sourceName": "老朽危険家屋等除却促進事業"
  },
  {
    "slug": "fukuoka-official-003-009-2026",
    "title": "大川市 就学援助",
    "organization": "大川市",
    "maxAmount": "支給額を参考に掲載してります）区分小学校中学校学用品費年11,630円",
    "maxAmountNum": 11630,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大川市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "令和8年2月16日 支給することで、保護者の経済的な負担を軽減するものです",
    "officialUrl": "https://www.city.okawa.lg.jp/s063/020/010/010/20150213164700.html",
    "sourceName": "就学援助"
  },
  {
    "slug": "fukuoka-official-003-010-2026",
    "title": "大川市 軽自動車の減免",
    "organization": "大川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年3月25日 申請することができます",
    "officialUrl": "https://www.city.okawa.lg.jp/s009/010/020/030/010/20141231180958.html",
    "sourceName": "軽自動車の減免"
  },
  {
    "slug": "fukuoka-official-003-011-2026",
    "title": "大川市 大川市定住促進",
    "organization": "大川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大川市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年5月15日 交付を始めました",
    "officialUrl": "https://www.city.okawa.lg.jp/s006/010/040/010/20150128205110.html",
    "sourceName": "大川市定住促進"
  },
  {
    "slug": "fukuoka-official-003-012-2026",
    "title": "大川市 介護保険住宅改修",
    "organization": "大川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "大川市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2019年10月18日 申請 健康課介護保険係に、住宅改修が必要な理由書や改修費用の見積書、改修内容がわかる図面、改修予定箇所の写真（日付入り）などを添えて、「介護保険居宅介護（介護予防）住宅改修費承認申請書」を提出します",
    "officialUrl": "https://www.city.okawa.lg.jp/s016/020/010/030/020/20150213193543.html",
    "sourceName": "介護保険住宅改修"
  },
  {
    "slug": "fukuoka-official-003-013-2026",
    "title": "大川市 教育助成",
    "organization": "大川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大川市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "支給 令和9年度奨学生を募集します 子育て・教育 夏季休業中の学校閉庁日の設定について 学校安全リーフレットについて 結婚支援 日本スポーツ振興センター災害共済給付制度に関する大切なお知らせ モッカランド イベント情報 妊娠",
    "officialUrl": "https://www.city.okawa.lg.jp/080/100/",
    "sourceName": "教育助成"
  },
  {
    "slug": "fukuoka-official-003-014-2026",
    "title": "大川市 子どもの医療費・手当",
    "organization": "大川市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "大川市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "子どもの医療費・手当 - 大川市 メニューにジャンプ コンテンツにジャンプ 大川市 Foreign Language 文字サイズ変更・コントラスト変更機能を利用する場合は、javascriptをオンにしてください サイト内検索 開く くらし",
    "officialUrl": "https://www.city.okawa.lg.jp/080/080/",
    "sourceName": "子どもの医療費・手当"
  },
  {
    "slug": "fukuoka-official-003-015-2026",
    "title": "大川市 融資",
    "organization": "大川市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大川市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集 令和8年度大川市新規創業出店支援補助金 大川市新規創業資金等借入者信用保証料補給および利子補給 大川市木工産業資料 会社（お店）の将来を考えてみませんか",
    "officialUrl": "https://www.city.okawa.lg.jp/090/020/020/",
    "sourceName": "融資"
  },
  {
    "slug": "fukuoka-official-003-016-2026",
    "title": "行橋市 行橋市木造戸建て住宅性能向上改修等補助制度",
    "organization": "行橋市",
    "maxAmount": "上限とします【省エネ改修工事】耐震改修工事と同時に行う省エネ改修工事に要する費用の25％に相当する額で、1,000円",
    "maxAmountNum": 1000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "行橋市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月20日 交付要綱」を定め、平成26年8月より、補助金制度運用を開始し、令和6年5月より、「行橋市木造戸建て住宅性能向上改修補助金交付要綱」に改めました",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/24/1530.html",
    "sourceName": "行橋市木造戸建て住宅性能向上改修等補助制度"
  },
  {
    "slug": "fukuoka-official-003-017-2026",
    "title": "行橋市 行橋市木造戸建て住宅耐震診断費補助制度",
    "organization": "行橋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "行橋市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月20日 交付要綱」を定め、平成26年8月より、補助金制度運用を開始しました",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/24/1531.html",
    "sourceName": "行橋市木造戸建て住宅耐震診断費補助制度"
  },
  {
    "slug": "fukuoka-official-003-018-2026",
    "title": "行橋市 行橋市ブロック塀等撤去費補助制度",
    "organization": "行橋市",
    "maxAmount": "上限額ブロック塀等撤去費費用（消費税及び地方消費税を含む）の3分の2（約67%）に相当し、1,000円",
    "maxAmountNum": 1000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "行橋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月20日 交付要綱」を定め、平成31年1月より、補助金制度を開始しました",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/24/1475.html",
    "sourceName": "行橋市ブロック塀等撤去費補助制度"
  },
  {
    "slug": "fukuoka-official-003-019-2026",
    "title": "行橋市 老朽危険家屋除却補助",
    "organization": "行橋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "行橋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月20日 申請者は、 補助金の交付を受けようとする前に、 補助対象建築物の状態などについて 市と必要な確認・協議 をお願いします",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/24/20311.html",
    "sourceName": "老朽危険家屋除却補助"
  },
  {
    "slug": "fukuoka-official-003-020-2026",
    "title": "行橋市 行橋市における住宅リフォーム補助制度",
    "organization": "行橋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "行橋市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2023年5月1日 行橋市における住宅リフォーム補助制度 - 行橋市ホームページ ページの先頭です。 メニューを飛ばして本文へ JavaScriptが無効のため、文字の大きさ・背景色を変更する機能を使用できません。 本文へ Foreign language ふ",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/24/1465.html",
    "sourceName": "行橋市における住宅リフォーム補助制度"
  },
  {
    "slug": "fukuoka-official-003-021-2026",
    "title": "行橋市 年金生活者支援給付金 新規該当者への申請書等が送付されます",
    "organization": "行橋市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "行橋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年9月1日 申請書等が送付されます - 行橋市ホームページ ページの先頭です",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/14/22504.html",
    "sourceName": "年金生活者支援給付金 新規該当者への申請書等が送付されます"
  },
  {
    "slug": "fukuoka-official-003-022-2026",
    "title": "行橋市 入院や手術をする方へ（限度額認定証）",
    "organization": "行橋市",
    "maxAmount": "限度額区分1か月あたりの自己負担限度額多数該当（※）ア基礎控除後の所得901万円",
    "maxAmountNum": 9010000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "行橋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月16日 交付には申請が必要で、 申請した月の1日に遡って適用されます ",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/14/1957.html",
    "sourceName": "入院や手術をする方へ（限度額認定証）"
  },
  {
    "slug": "fukuoka-official-003-023-2026",
    "title": "行橋市 市税の減免",
    "organization": "行橋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "行橋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年8月12日 申請書を提出した以降のその年度の納期分が減免の対象になります",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/11/1641.html",
    "sourceName": "市税の減免"
  },
  {
    "slug": "fukuoka-official-003-024-2026",
    "title": "行橋市 産婦健康診査",
    "organization": "行橋市",
    "maxAmount": "上限額（R8年度は4,000円",
    "maxAmountNum": 4000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "行橋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請に必要なもの 1",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/site/kosodate/35367.html",
    "sourceName": "産婦健康診査"
  },
  {
    "slug": "fukuoka-official-003-025-2026",
    "title": "行橋市 妊婦歯科健康診査",
    "organization": "行橋市",
    "maxAmount": "上限額(令和8年度は3,666円",
    "maxAmountNum": 3666,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "行橋市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付を受け、妊婦歯科健康診査を受けた日に行橋市に住民票のある妊婦 健診内容 歯科健康診査（問診、むし歯や歯周病の状況など） 歯科保健指導 ※妊娠期間に1回、無料で受けられます",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/site/kosodate/34849.html",
    "sourceName": "妊婦歯科健康診査"
  },
  {
    "slug": "fukuoka-official-003-026-2026",
    "title": "行橋市 妊婦のための支援給付について",
    "organization": "行橋市",
    "maxAmount": "支給額1回の妊娠につき5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "行橋市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年8月29日 支給します",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/site/kosodate/39457.html",
    "sourceName": "妊婦のための支援給付について"
  },
  {
    "slug": "fukuoka-official-003-027-2026",
    "title": "行橋市 物価高対応福岡県子育て応援金",
    "organization": "行橋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "行橋市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年5月18日 支給されます",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/19/44940.html",
    "sourceName": "物価高対応福岡県子育て応援金"
  },
  {
    "slug": "fukuoka-official-003-028-2026",
    "title": "行橋市 物価高対応子育て応援手当",
    "organization": "行橋市",
    "maxAmount": "1人あたり2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "行橋市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月22日 支給することが決定されました",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/19/41553.html",
    "sourceName": "物価高対応子育て応援手当"
  },
  {
    "slug": "fukuoka-official-003-029-2026",
    "title": "行橋市 児童扶養手当",
    "organization": "行橋市",
    "maxAmount": "限度額表》参照)令和8年4月分以降区分児童1人第2子以降加算額全部支給48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "行橋市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年5月22日 支給する制度です",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/site/kosodate/2250.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "fukuoka-official-003-030-2026",
    "title": "行橋市 令和8年度 次世代自動車等導入補助金",
    "organization": "行橋市",
    "maxAmount": "補助金額補助対象車補助率上限額プラグインハイブリッド自動車車両本体価格&times;3％10万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "行橋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月7日 申請は、8月14日（金曜日） 8時30分からを予定しております",
    "officialUrl": "https://www.city.yukuhashi.fukuoka.jp/soshiki/30/13347.html",
    "sourceName": "令和8年度 次世代自動車等導入補助金"
  },
  {
    "slug": "fukuoka-official-003-031-2026",
    "title": "豊前市 乳幼児・子ども医療費の助成",
    "organization": "豊前市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "豊前市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請に必要なもの 領収書、振込先口座を持って医療保険係（5番窓口）へ申請してください",
    "officialUrl": "https://www.city.buzen.lg.jp/kosodate/josei/nyuyojiiryo.html",
    "sourceName": "乳幼児・子ども医療費の助成"
  },
  {
    "slug": "fukuoka-official-003-032-2026",
    "title": "豊前市 幼児教育・保育無償化",
    "organization": "豊前市",
    "maxAmount": "月額上限25,700円",
    "maxAmountNum": 25700,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請書（エクセル：436KB） に必要事項を記載のうえ、こども・健康課子育て支援係にご提出ください",
    "officialUrl": "https://www.city.buzen.lg.jp/kosodate/musyoka.html",
    "sourceName": "幼児教育・保育無償化"
  },
  {
    "slug": "fukuoka-official-003-033-2026",
    "title": "豊前市 日常生活用具給付（ストーマ給付）の基準額の変更について",
    "organization": "豊前市",
    "maxAmount": "上限）9,460円",
    "maxAmountNum": 9460,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊前市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和6年4月1日 支給上限）9,460円 【変更前】基準額1か月当たり（支給上限）8,858円 ストーマ用具装具（尿路系） 【変更後】基準額1か月当たり（支給上限）12,430円 【変更前】基準額1か月当たり（支給上限）11,639円 お問い",
    "officialUrl": "https://www.city.buzen.lg.jp/fukushi/shogai/r6stoma.html",
    "sourceName": "日常生活用具給付（ストーマ給付）の基準額の変更について"
  },
  {
    "slug": "fukuoka-official-003-034-2026",
    "title": "豊前市 妊婦のための支援給付について",
    "organization": "豊前市",
    "maxAmount": "支給額1回の妊娠につき5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "豊前市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年4月1日 支給されることになりました",
    "officialUrl": "https://www.city.buzen.lg.jp/kenko/kosodateouennkyuufukinn.html",
    "sourceName": "妊婦のための支援給付について"
  },
  {
    "slug": "fukuoka-official-003-035-2026",
    "title": "豊前市 豊前市中小企業融資制度のご案内",
    "organization": "豊前市",
    "maxAmount": "限度額【運転資金又は設備資金】1,000万円",
    "maxAmountNum": 10000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和８年４月１日 提出書類欄をご覧ください",
    "officialUrl": "https://www.city.buzen.lg.jp/sangyo/syoukougyo/chuushou-yuushi.html",
    "sourceName": "豊前市中小企業融資制度のご案内"
  },
  {
    "slug": "fukuoka-official-003-036-2026",
    "title": "豊前市 高齢者等住宅の改造費の助成",
    "organization": "豊前市",
    "maxAmount": "限度額300,000円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "豊前市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付を受けた方、及び補装具として車いす等の交付を受けた方 療育手帳「Ａ」の交付を受けた方、又は療育手帳の交付を受けていない方で知能指数３５以下と認められる判定（診断）を受けた方 知能指数５０以下と認められる判定（診断）を受け",
    "officialUrl": "https://www.city.buzen.lg.jp/fukushi/korei/juutaku-josei.html",
    "sourceName": "高齢者等住宅の改造費の助成"
  },
  {
    "slug": "fukuoka-official-003-037-2026",
    "title": "豊前市 重度障害者医療費の助成",
    "organization": "豊前市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "豊前市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請に必要なもの 領収書、振込先口座を持って医療保険係（5番窓口）へ申請してください",
    "officialUrl": "https://www.city.buzen.lg.jp/fukushi/shogai/juudo.html",
    "sourceName": "重度障害者医療費の助成"
  },
  {
    "slug": "fukuoka-official-003-038-2026",
    "title": "豊前市 いろいろな手当制度",
    "organization": "豊前市",
    "maxAmount": "月額備考3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊前市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和６年５月17日 支給額は令和7年4月現在 児童手当 家庭等における生活の安定に寄与するとともに、次代の社会を担う児童の健やかな成長に資するため、児童を養育している方に手当を支給する制度です",
    "officialUrl": "https://www.city.buzen.lg.jp/kosodate/josei/seido.html",
    "sourceName": "いろいろな手当制度"
  },
  {
    "slug": "fukuoka-official-003-039-2026",
    "title": "豊前市 ひとり親家庭等医療費の助成",
    "organization": "豊前市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "豊前市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請に必要なもの 領収書、振込先口座を持って医療保険係（5番窓口）へ申請してください",
    "officialUrl": "https://www.city.buzen.lg.jp/kosodate/josei/bosikatei.html",
    "sourceName": "ひとり親家庭等医療費の助成"
  },
  {
    "slug": "fukuoka-official-003-040-2026",
    "title": "豊前市 障害者（児）のための用具（補装具・日常生活用具）について",
    "organization": "豊前市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付・修理）支給について 身体障害者手帳をお持ちの方に対し、失われた身体機能を補い、日常で生活するうえでの能率の向上を図るための 補装具（交付または修理）の費用の支給を行っています",
    "officialUrl": "https://www.city.buzen.lg.jp/fukushi/shogai/hosougu.html",
    "sourceName": "障害者（児）のための用具（補装具・日常生活用具）について"
  },
  {
    "slug": "fukuoka-official-003-041-2026",
    "title": "豊前市 副食費助成事業",
    "organization": "豊前市",
    "maxAmount": "月額：（上限）4,900円",
    "maxAmountNum": 4900,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "豊前市公式ホームページ／副食費助成事業 目的別メニュー 組織別メニュー 観光情報 事業者の方へ がいこくじんのかたへ Multilingual 市政情報 文字サイズ 標準 大 サイト内検索 トップ &gt; 妊娠・子育て &gt; 保育 &",
    "officialUrl": "https://www.city.buzen.lg.jp/kosodate/hukusyokuhi.html",
    "sourceName": "副食費助成事業"
  },
  {
    "slug": "fukuoka-official-003-042-2026",
    "title": "豊前市 すこやか赤ちゃん出産祝い金",
    "organization": "豊前市",
    "maxAmount": "1人につき100,000円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.city.buzen.lg.jp/fukushi/jido/shussan-iwai.html",
    "sourceName": "すこやか赤ちゃん出産祝い金"
  },
  {
    "slug": "fukuoka-official-003-043-2026",
    "title": "豊前市 豊前市定住促進奨励金",
    "organization": "豊前市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和８年４月１日 交付期間： 最長3年間（対象の住宅に固定資産税が課税される初年度から3年間） ■ 申請手続き： 固定資産税が課税された後に奨励金の交付申請を令和8年10月31日までにご提出ください",
    "officialUrl": "https://www.city.buzen.lg.jp/teijuusokushin-syoureikin.html",
    "sourceName": "豊前市定住促進奨励金"
  },
  {
    "slug": "fukuoka-official-003-044-2026",
    "title": "豊前市 豊前市タクシー料金助成事業",
    "organization": "豊前市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請の場合は、申請月から当該年度末までの月数を乗じて得た枚数 問い合わせ サイトポリシー 〒828-8501 福岡県豊前市大字吉木955 TEL：0979-82-1111 開庁時間：月曜日から金曜日の8時30分から17時まで",
    "officialUrl": "https://www.city.buzen.lg.jp/fukushi/shogai/taxi.html",
    "sourceName": "豊前市タクシー料金助成事業"
  },
  {
    "slug": "fukuoka-official-003-045-2026",
    "title": "豊前市 出産育児一時金の支給",
    "organization": "豊前市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和5年3月31日 支給 目的別メニュー 組織別メニュー 観光情報 事業者の方へ がいこくじんのかたへ Multilingual 市政情報 文字サイズ 標準 大 サイト内検索 トップ &gt; 妊娠・子育て &gt; 手当・助成 &gt; 出産",
    "officialUrl": "https://www.city.buzen.lg.jp/kosodate/josei/ichijikin.html",
    "sourceName": "出産育児一時金の支給"
  },
  {
    "slug": "fukuoka-official-003-046-2026",
    "title": "豊前市 はり・きゅう・マッサージ施術利用証交付について",
    "organization": "豊前市",
    "maxAmount": "助成額一回につき1,200円",
    "maxAmountNum": 1200,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊前市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付について 目的別メニュー 組織別メニュー 観光情報 事業者の方へ がいこくじんのかたへ Multilingual 市政情報 文字サイズ 標準 大 サイト内検索 トップ &gt; 福祉・介護 &gt; 高齢者 &gt; は",
    "officialUrl": "https://www.city.buzen.lg.jp/fukushi/korei/harikyu.html",
    "sourceName": "はり・きゅう・マッサージ施術利用証交付について"
  },
  {
    "slug": "fukuoka-official-003-047-2026",
    "title": "豊前市 家族介護慰労金",
    "organization": "豊前市",
    "maxAmount": "支給額年額100,000円",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給について 要介護高齢者を在宅において介護している家族に対し、家族介護慰労金を支給します",
    "officialUrl": "https://www.city.buzen.lg.jp/kaigo/kazokukaigo.html",
    "sourceName": "家族介護慰労金"
  },
  {
    "slug": "fukuoka-official-003-048-2026",
    "title": "豊前市 豊前市移住支援金",
    "organization": "豊前市",
    "maxAmount": "支給額（1）単身の申請60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和５年３月25日 支給要件を満たす方に移住支援金を交付します",
    "officialUrl": "https://www.city.buzen.lg.jp/ijyu/shienkin.html",
    "sourceName": "豊前市移住支援金"
  },
  {
    "slug": "fukuoka-official-003-049-2026",
    "title": "豊前市 空き家バンク利用契約に伴う仲介手数料の一部を助成します",
    "organization": "豊前市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊前市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付対象者 空き家バンクに登録している物件を賃借又は購入し、当該土地に住所を定める世帯の代表者であること",
    "officialUrl": "https://www.city.buzen.lg.jp/akiya/akiyajyoseikin.html",
    "sourceName": "空き家バンク利用契約に伴う仲介手数料の一部を助成します"
  },
  {
    "slug": "fukuoka-official-003-050-2026",
    "title": "中間市 なかま夢応援奨学金",
    "organization": "中間市",
    "maxAmount": "100万円を給付",
    "maxAmountNum": 1000000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中間市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 募集します",
    "officialUrl": "https://www.city.nakama.lg.jp/site/education/6291.html",
    "sourceName": "なかま夢応援奨学金"
  },
  {
    "slug": "fukuoka-official-003-051-2026",
    "title": "中間市 令和8年度限定 帯状疱疹任意接種助成事業のお知らせ",
    "organization": "中間市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中間市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請（※推奨）、電話、窓口があります",
    "officialUrl": "https://www.city.nakama.lg.jp/soshiki/40/18361.html",
    "sourceName": "令和8年度限定 帯状疱疹任意接種助成事業のお知らせ"
  },
  {
    "slug": "fukuoka-official-003-052-2026",
    "title": "中間市 重度障がい者医療費助成制度",
    "organization": "中間市",
    "maxAmount": "上限）（医療機関ごと）ただし、市民税非課税世帯は1日あたり300円",
    "maxAmountNum": 300,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "中間市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月15日 交付が必要です",
    "officialUrl": "https://www.city.nakama.lg.jp/soshiki/14/1183.html",
    "sourceName": "重度障がい者医療費助成制度"
  },
  {
    "slug": "fukuoka-official-003-053-2026",
    "title": "中間市 ひとり親家庭等医療費助成制度",
    "organization": "中間市",
    "maxAmount": "上限）（医療機関ごと）外来：ひと月あたり800円",
    "maxAmountNum": 800,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "中間市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月2日 交付が必要です",
    "officialUrl": "https://www.city.nakama.lg.jp/site/kosodate/1185.html",
    "sourceName": "ひとり親家庭等医療費助成制度"
  },
  {
    "slug": "fukuoka-official-003-054-2026",
    "title": "中間市 子ども医療費助成制度",
    "organization": "中間市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "中間市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月2日 交付が必要です",
    "officialUrl": "https://www.city.nakama.lg.jp/site/kosodate/1184.html",
    "sourceName": "子ども医療費助成制度"
  },
  {
    "slug": "fukuoka-official-003-055-2026",
    "title": "中間市 未熟児に対する養育医療の給付",
    "organization": "中間市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "中間市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請が必要です",
    "officialUrl": "https://www.city.nakama.lg.jp/site/kosodate/1249.html",
    "sourceName": "未熟児に対する養育医療の給付"
  },
  {
    "slug": "fukuoka-official-003-056-2026",
    "title": "中間市 中間市ブロック塀等撤去費補助金",
    "organization": "中間市",
    "maxAmount": "補助金額補助金の額は、補助対象経費の額の3分の2、または上限額16万円",
    "maxAmountNum": 160000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中間市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付要綱（PDF：143KB） 対象者 ブロック塀の所有者などで以下の3つの要件を全て満たしている者 同一敷地内において、この要綱に基づく補助金の交付を過去に受けたことがないこと 市税を滞納していないこと 中間市暴力団排除条",
    "officialUrl": "https://www.city.nakama.lg.jp/soshiki/18/1263.html",
    "sourceName": "中間市ブロック塀等撤去費補助金"
  },
  {
    "slug": "fukuoka-official-003-057-2026",
    "title": "中間市 木造戸建て住宅耐震改修補助金制度",
    "organization": "中間市",
    "maxAmount": "補助金額耐震改修工事の場合当該耐震改修工事に要する費用の23％に相当する額で、上限額は1件あたり30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中間市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2022年11月18日 交付対象となる木造戸建て住宅は、次の1～6のいずれにも該当するものとします",
    "officialUrl": "https://www.city.nakama.lg.jp/soshiki/19/1321.html",
    "sourceName": "木造戸建て住宅耐震改修補助金制度"
  },
  {
    "slug": "fukuoka-official-003-058-2026",
    "title": "中間市 中古住宅購入補助金制度",
    "organization": "中間市",
    "maxAmount": "補助金額空き家バンク物件の購入費25万円",
    "maxAmountNum": 250000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中間市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2022年11月18日 受付し予算額に達した時点で受付を終了しますので、申請を希望する場合は必ず事前に相談してください",
    "officialUrl": "https://www.city.nakama.lg.jp/soshiki/19/1272.html",
    "sourceName": "中古住宅購入補助金制度"
  },
  {
    "slug": "fukuoka-official-003-059-2026",
    "title": "中間市 中古住宅リフォーム補助金制度",
    "organization": "中間市",
    "maxAmount": "補助金額空き家バンク物件のリフォーム工事に対する補助金&hellip;30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中間市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2022年11月18日 受付し予算額に達した時点で受付を終了しますので、申請を希望する場合は必ず事前に相談してください",
    "officialUrl": "https://www.city.nakama.lg.jp/soshiki/19/1270.html",
    "sourceName": "中古住宅リフォーム補助金制度"
  },
  {
    "slug": "fukuoka-official-003-060-2026",
    "title": "中間市 住み替え補助金制度",
    "organization": "中間市",
    "maxAmount": "補助金額住み替え引っ越し費用5万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中間市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年11月18日 受付し予算額に達した時点で受付を終了します",
    "officialUrl": "https://www.city.nakama.lg.jp/soshiki/19/1640.html",
    "sourceName": "住み替え補助金制度"
  },
  {
    "slug": "fukuoka-official-003-061-2026",
    "title": "中間市 紙おむつ給付事業",
    "organization": "中間市",
    "maxAmount": "限度額区分利用者世帯の階層給付限度額1市民税非課税世帯6,000円",
    "maxAmountNum": 6000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中間市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月15日 紙おむつ給付事業 - 中間市公式ホームページ ページの先頭です。 メニューを飛ばして本文へ メニュー --> JavaScriptが無効のため、文字の大きさ・背景色を変更する機能を使用できません。 本文へ Foreign language ",
    "officialUrl": "https://www.city.nakama.lg.jp/soshiki/17/1579.html",
    "sourceName": "紙おむつ給付事業"
  },
  {
    "slug": "fukuoka-official-003-062-2026",
    "title": "小郡市 小郡市支援制度",
    "organization": "小郡市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "小郡市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.city.ogori.fukuoka.jp/ijyuu/202",
    "sourceName": "小郡市支援制度"
  },
  {
    "slug": "fukuoka-official-003-063-2026",
    "title": "小郡市 空き家バンク登録物件購入等補助金",
    "organization": "小郡市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小郡市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付する制度です",
    "officialUrl": "https://www.city.ogori.fukuoka.jp/akiya/226",
    "sourceName": "空き家バンク登録物件購入等補助金"
  }
];
