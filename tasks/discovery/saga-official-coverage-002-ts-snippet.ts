const sagaOfficial002Grants: Array<{
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
    "slug": "saga-official-002-001-2026",
    "title": "武雄市 子どもの医療費の助成",
    "organization": "武雄市",
    "maxAmount": "上限1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "武雄市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付申請について 出生、転入などで新たに受給資格証の交付を受けるためには申請が必要です",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/010299.html",
    "sourceName": "子どもの医療費の助成"
  },
  {
    "slug": "saga-official-002-002-2026",
    "title": "武雄市 妊婦のための支援給付事業",
    "organization": "武雄市",
    "maxAmount": "支給額妊娠届時（１回目）妊婦給付認定申請5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "武雄市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/ninshin/014389.html",
    "sourceName": "妊婦のための支援給付事業"
  },
  {
    "slug": "saga-official-002-003-2026",
    "title": "武雄市 不妊治療費の助成・不妊相談",
    "organization": "武雄市",
    "maxAmount": "助成額年度内10万円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kenko/fukushi/013410.html",
    "sourceName": "不妊治療費の助成・不妊相談"
  },
  {
    "slug": "saga-official-002-004-2026",
    "title": "武雄市 武雄市出産・子育て応援給付金事業",
    "organization": "武雄市",
    "maxAmount": "1人あたり5万円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "武雄市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和4年4月1日 支給します",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/011975.html",
    "sourceName": "武雄市出産・子育て応援給付金事業"
  },
  {
    "slug": "saga-official-002-005-2026",
    "title": "武雄市 福祉資金の貸付制度について",
    "organization": "武雄市",
    "maxAmount": "限度額：30,000円",
    "maxAmountNum": 30000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kenko/fukushi/013431.html",
    "sourceName": "福祉資金の貸付制度について"
  },
  {
    "slug": "saga-official-002-006-2026",
    "title": "武雄市 武雄市保育士等就職支援補助金について",
    "organization": "武雄市",
    "maxAmount": "補助金額常勤（1日6時間以上・ひと月20日以上勤務する方）10万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "武雄市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/010993.html",
    "sourceName": "武雄市保育士等就職支援補助金について"
  },
  {
    "slug": "saga-official-002-007-2026",
    "title": "武雄市 ひとり親家庭等医療費助成",
    "organization": "武雄市",
    "maxAmount": "助成額助成対象者ごとに、支払った自己負担金額から1月あたり500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "武雄市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請が必要になります",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/003649.html",
    "sourceName": "ひとり親家庭等医療費助成"
  },
  {
    "slug": "saga-official-002-008-2026",
    "title": "武雄市 新生児聴覚スクリーニング検査の助成",
    "organization": "武雄市",
    "maxAmount": "助成額１人あたり上限3,000円",
    "maxAmountNum": 3000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "武雄市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和８年４月１日 提出して新生児聴覚スクリーニング検査を受け、検査費用から助成金額を差し引いた額を医療機関にてお支払いください",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/003915.html",
    "sourceName": "新生児聴覚スクリーニング検査の助成"
  },
  {
    "slug": "saga-official-002-009-2026",
    "title": "武雄市 軽度・中等度難聴児への補聴器購入費の助成",
    "organization": "武雄市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付対象者でない者 補聴器の装用により、言語の習得等に一定の効果が期待できると医師が判断した者 お問合せ 武雄市福祉部福祉課 TEL:(0954)23-9235 fukushi@city.takeo.lg.jp お問い合わせ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/002310.html",
    "sourceName": "軽度・中等度難聴児への補聴器購入費の助成"
  },
  {
    "slug": "saga-official-002-010-2026",
    "title": "武雄市 児童手当",
    "organization": "武雄市",
    "maxAmount": "支給額手当月額（児童1人あたり）0歳～3歳未満（第1子・第2子）：15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給となります",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/000120.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "saga-official-002-011-2026",
    "title": "武雄市 幼児教育の無償化について",
    "organization": "武雄市",
    "maxAmount": "月額25,700円",
    "maxAmountNum": 25700,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請書等様式 申請書 子育てのための施設等利用給付認定・変更申請書（新制度未移行園用） 子育てのための施設等利用給付認定・変更申請書（幼稚園部門） 添付書類 就労証明書（会社勤務・自営業・内職の方用） （自営の方は、自営を証",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/006903.html",
    "sourceName": "幼児教育の無償化について"
  },
  {
    "slug": "saga-official-002-012-2026",
    "title": "武雄市 児童扶養手当",
    "organization": "武雄市",
    "maxAmount": "月額（令和8年4月から）児童が1人の場合【全部支給】48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/003719.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "saga-official-002-013-2026",
    "title": "武雄市 高等職業訓練促進給付金",
    "organization": "武雄市",
    "maxAmount": "上限4年）支給金額【高等職業訓練促進給付金】市民税課税世帯：月額70,500円",
    "maxAmountNum": 70500,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/003088.html",
    "sourceName": "高等職業訓練促進給付金"
  },
  {
    "slug": "saga-official-002-014-2026",
    "title": "武雄市 国民健康保険人間ドック・脳ドック受診費用助成制度",
    "organization": "武雄市",
    "maxAmount": "助成額１５，０００円",
    "maxAmountNum": 15000,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "武雄市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kenko/kenkohoken/000150.html",
    "sourceName": "国民健康保険人間ドック・脳ドック受診費用助成制度"
  },
  {
    "slug": "saga-official-002-015-2026",
    "title": "武雄市 がん患者の医療用補正具の購入費用の一部を助成します",
    "organization": "武雄市",
    "maxAmount": "助成額1年度あたり、補正具の種類ごとに上限20,000円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kenko/kenkou/013406.html",
    "sourceName": "がん患者の医療用補正具の購入費用の一部を助成します"
  },
  {
    "slug": "saga-official-002-016-2026",
    "title": "武雄市 骨髄移植ドナー助成金助成事業が始まります",
    "organization": "武雄市",
    "maxAmount": "2万円の助成",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "武雄市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和5年4月1日 申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kenko/kenkou/013404.html",
    "sourceName": "骨髄移植ドナー助成金助成事業が始まります"
  },
  {
    "slug": "saga-official-002-017-2026",
    "title": "武雄市 住まいの耐震化を支援します",
    "organization": "武雄市",
    "maxAmount": "補助額補助対象経費（耐震補強工事に係る経費）の80％（補助上限額100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年5月7日 申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/seikatsu/jutaku/006514.html",
    "sourceName": "住まいの耐震化を支援します"
  },
  {
    "slug": "saga-official-002-018-2026",
    "title": "武雄市 水に強い住まいづくり支援事業（住宅移転）",
    "organization": "武雄市",
    "maxAmount": "上限１５０万円",
    "maxAmountNum": 1500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "武雄市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/seikatsu/jutaku/011192.html",
    "sourceName": "水に強い住まいづくり支援事業（住宅移転）"
  },
  {
    "slug": "saga-official-002-019-2026",
    "title": "武雄市 水に強い住まいづくり支援事業（住宅かさ上げ工事等）",
    "organization": "武雄市",
    "maxAmount": "上限100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "武雄市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/seikatsu/jutaku/011193.html",
    "sourceName": "水に強い住まいづくり支援事業（住宅かさ上げ工事等）"
  },
  {
    "slug": "saga-official-002-020-2026",
    "title": "武雄市 地すべり等危険地域における住宅移転の助成",
    "organization": "武雄市",
    "maxAmount": "限度額※1補助対象経費危険住宅の除去等に要する費用97万5千円住宅撤去、動産移転、跡地整備などに要する経費住宅の建設又は購入に要する費用住宅建設費325万円",
    "maxAmountNum": 3250000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/seikatsu/jutaku/007929.html",
    "sourceName": "地すべり等危険地域における住宅移転の助成"
  },
  {
    "slug": "saga-official-002-021-2026",
    "title": "武雄市 空き家除却費用補助金",
    "organization": "武雄市",
    "maxAmount": "補助額補助対象空き家及び附属する工作物の解体、運搬及び処分にかかる経費30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和9年2月26日 申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/seikatsu/akiya/006512.html",
    "sourceName": "空き家除却費用補助金"
  },
  {
    "slug": "saga-official-002-022-2026",
    "title": "武雄市 定住就農者支援事業",
    "organization": "武雄市",
    "maxAmount": "助成額家賃月額２分の１以内の額（上限２５，０００円",
    "maxAmountNum": 25000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "武雄市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/shushoku/shunoshien/008473.html",
    "sourceName": "定住就農者支援事業"
  },
  {
    "slug": "saga-official-002-023-2026",
    "title": "武雄市 新規就農者経営確立支援事業",
    "organization": "武雄市",
    "maxAmount": "助成額補助対象経費の２分の１以内の額（上限３０万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/shushoku/shunoshien/008470.html",
    "sourceName": "新規就農者経営確立支援事業"
  },
  {
    "slug": "saga-official-002-024-2026",
    "title": "武雄市 新規就農研修者家賃助成事業",
    "organization": "武雄市",
    "maxAmount": "助成額家賃月額（上限５万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード 庁舎・駅前広場利用状況 証明書の交付 ゴミの収集・分別 被災された皆さまへ 各課お問合せ ライフシーンから探す 妊娠・出産 子育て 就学 成人 結婚・離婚 引っ越し 就職・退職 病気・事故 くらしの相談 ",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/shushoku/shunoshien/006691.html",
    "sourceName": "新規就農研修者家賃助成事業"
  },
  {
    "slug": "saga-official-002-025-2026",
    "title": "武雄市 自立支援教育訓練給付金",
    "organization": "武雄市",
    "maxAmount": "上限は４０万円",
    "maxAmountNum": 400000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "武雄市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.city.takeo.lg.jp/benri/kosodate/003089.html",
    "sourceName": "自立支援教育訓練給付金"
  },
  {
    "slug": "saga-official-002-026-2026",
    "title": "鹿島市 ひとり親家庭等医療費助成",
    "organization": "鹿島市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "鹿島市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/283.html",
    "sourceName": "ひとり親家庭等医療費助成"
  },
  {
    "slug": "saga-official-002-027-2026",
    "title": "鹿島市 自立支援教育訓練給付金",
    "organization": "鹿島市",
    "maxAmount": "支給額受講料の60％（上限200,000円",
    "maxAmountNum": 200000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/16721.html",
    "sourceName": "自立支援教育訓練給付金"
  },
  {
    "slug": "saga-official-002-028-2026",
    "title": "鹿島市 高等職業訓練促進給付金",
    "organization": "鹿島市",
    "maxAmount": "上限4年）支給額高等職業訓練促進給付金（月額）70,500円",
    "maxAmountNum": 70500,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/16732.html",
    "sourceName": "高等職業訓練促進給付金"
  },
  {
    "slug": "saga-official-002-029-2026",
    "title": "鹿島市 幼児教育・保育の無償化",
    "organization": "鹿島市",
    "maxAmount": "上限25,700円",
    "maxAmountNum": 25700,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/18809.html",
    "sourceName": "幼児教育・保育の無償化"
  },
  {
    "slug": "saga-official-002-030-2026",
    "title": "鹿島市 重度心身障害者医療費助成制度",
    "organization": "鹿島市",
    "maxAmount": "1人1月500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "鹿島市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/5413.html",
    "sourceName": "重度心身障害者医療費助成制度"
  },
  {
    "slug": "saga-official-002-031-2026",
    "title": "鹿島市 難聴児の補聴器購入費を助成します",
    "organization": "鹿島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/10281.html",
    "sourceName": "難聴児の補聴器購入費を助成します"
  },
  {
    "slug": "saga-official-002-032-2026",
    "title": "鹿島市 子どもの医療費助成制度について",
    "organization": "鹿島市",
    "maxAmount": "上限1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "鹿島市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/156.html",
    "sourceName": "子どもの医療費助成制度について"
  },
  {
    "slug": "saga-official-002-033-2026",
    "title": "鹿島市 児童手当",
    "organization": "鹿島市",
    "maxAmount": "月額）年齢区分第１・２子第３子以降０～３歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/155.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "saga-official-002-034-2026",
    "title": "鹿島市 住居確保給付金（転居費用相当額）について",
    "organization": "鹿島市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/35765.html",
    "sourceName": "住居確保給付金（転居費用相当額）について"
  },
  {
    "slug": "saga-official-002-035-2026",
    "title": "鹿島市 住居確保給付金（家賃相当額）について",
    "organization": "鹿島市",
    "maxAmount": "上限額）収入基準額（※1）（ア）＋（イ）金融資産（※2）１人86,000円",
    "maxAmountNum": 86000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/35752.html",
    "sourceName": "住居確保給付金（家賃相当額）について"
  },
  {
    "slug": "saga-official-002-036-2026",
    "title": "鹿島市 スズメバチの巣駆除費補助金交付制度",
    "organization": "鹿島市",
    "maxAmount": "補助額・１件当り、経費の３分の１で、５，０００円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付制度 | 鹿島市［佐賀県］ --> ページの本文へ移動 カテゴリ内リンクへ移動 フッターへ移動 サイト内検索 language 文字サイズ 標準 大 特大 背景色 標準 青 黒 くらしのガイド 市民交流プラザ「かたらい」",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/5461.html",
    "sourceName": "スズメバチの巣駆除費補助金交付制度"
  },
  {
    "slug": "saga-official-002-037-2026",
    "title": "鹿島市 太陽光発電設備設置事業費補助金",
    "organization": "鹿島市",
    "maxAmount": "最大出力（kW、小数点以下2桁未満切捨）に20,000円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和８年４月１日 申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/204.html",
    "sourceName": "太陽光発電設備設置事業費補助金"
  },
  {
    "slug": "saga-official-002-038-2026",
    "title": "鹿島市 鹿島市脱炭素に向けた重点対策加速化事業補助金について",
    "organization": "鹿島市",
    "maxAmount": "上限5kW以内を対象募集中【事業者向け】（屋根置き等）5万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年6月1日 申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/33705.html",
    "sourceName": "鹿島市脱炭素に向けた重点対策加速化事業補助金について"
  },
  {
    "slug": "saga-official-002-039-2026",
    "title": "鹿島市 令和８年度鹿島市宅配ボックス購入費補助",
    "organization": "鹿島市",
    "maxAmount": "補助額は上限１万円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和８年４月６日 申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/35320.html",
    "sourceName": "令和８年度鹿島市宅配ボックス購入費補助"
  },
  {
    "slug": "saga-official-002-040-2026",
    "title": "鹿島市 鹿島・太良広域連携SDGｓ推進補助金について",
    "organization": "鹿島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年5月11日 申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/38232.html",
    "sourceName": "鹿島・太良広域連携SDGｓ推進補助金について"
  },
  {
    "slug": "saga-official-002-041-2026",
    "title": "鹿島市 骨髄等ドナーに助成金を交付します",
    "organization": "鹿島市",
    "maxAmount": "１４万円を限度",
    "maxAmountNum": 140000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付します | 鹿島市［佐賀県］ --> ページの本文へ移動 カテゴリ内リンクへ移動 フッターへ移動 サイト内検索 language 文字サイズ 標準 大 特大 背景色 標準 青 黒 くらしのガイド 市民交流プラザ「かたらい",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/27439.html",
    "sourceName": "骨髄等ドナーに助成金を交付します"
  },
  {
    "slug": "saga-official-002-042-2026",
    "title": "鹿島市 不妊治療費の一部を助成します",
    "organization": "鹿島市",
    "maxAmount": "助成額助成対象経費から県助成事業により助成を受けた額を差し引いた額1回につき10万円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和4年4月1日 申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/28363.html",
    "sourceName": "不妊治療費の一部を助成します"
  },
  {
    "slug": "saga-official-002-043-2026",
    "title": "鹿島市 スポーツで九州・全国大会に出場する個人・団体の補助制度について",
    "organization": "鹿島市",
    "maxAmount": "上限額【個人】１人あたり５，０００円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/27629.html",
    "sourceName": "スポーツで九州・全国大会に出場する個人・団体の補助制度について"
  },
  {
    "slug": "saga-official-002-044-2026",
    "title": "鹿島市 空き家対策の補助制度について",
    "organization": "鹿島市",
    "maxAmount": "上限５万円",
    "maxAmountNum": 50000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿島市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/32988.html",
    "sourceName": "空き家対策の補助制度について"
  },
  {
    "slug": "saga-official-002-045-2026",
    "title": "鹿島市 生ごみ処理容器等購入補助",
    "organization": "鹿島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請（オンライン申請） 鹿島市デジタルマップ「かしまっぷ」 届出・申請・証明 各種相談 結婚・新生活・移住 子育て支援（妊娠・出産・子育て） 福祉・障がい福祉 税金 福祉 交通 教育 選挙 環境 水道 健康ひろば マイナンバ",
    "officialUrl": "https://www.city.saga-kashima.lg.jp/main/187.html",
    "sourceName": "生ごみ処理容器等購入補助"
  },
  {
    "slug": "saga-official-002-046-2026",
    "title": "小城市 妊婦健診受診票（補助券）の交付",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小城市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月30日 交付 小城市役所ホームページ 音声読み上げ 文字サイズ 縮小 標準 拡大 背景色 白 青 黒 Language English 한글 中文簡体 中文繁體 Japanese --> Language English 한글 中文",
    "officialUrl": "https://www.city.ogi.lg.jp/main/9407.html",
    "sourceName": "妊婦健診受診票（補助券）の交付"
  },
  {
    "slug": "saga-official-002-047-2026",
    "title": "小城市 不妊治療費の助成・不妊相談",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和6年3月31日 交付 妊婦健診受診票（補助券）の交付 妊婦健康診査助成制度（里帰り出産をされる方へ） 妊婦歯科健康診査の無料受診券を発行します 出産費用にお困りの方へ（助産施設） 不妊治療費の助成・不妊相談 パパママ教室 両親学級 こんにち",
    "officialUrl": "https://www.city.ogi.lg.jp/main/467.html",
    "sourceName": "不妊治療費の助成・不妊相談"
  },
  {
    "slug": "saga-official-002-048-2026",
    "title": "小城市 妊婦健康診査助成制度（里帰り出産をされる方へ）",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小城市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月30日 申請していただくと限度額内で助成します",
    "officialUrl": "https://www.city.ogi.lg.jp/main/9408.html",
    "sourceName": "妊婦健康診査助成制度（里帰り出産をされる方へ）"
  },
  {
    "slug": "saga-official-002-049-2026",
    "title": "小城市 低体重児の届出及び訪問指導、未熟児養育医療の給付",
    "organization": "小城市",
    "maxAmount": "上限1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小城市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月30日 提出していただくことになります",
    "officialUrl": "https://www.city.ogi.lg.jp/main/9412.html",
    "sourceName": "低体重児の届出及び訪問指導、未熟児養育医療の給付"
  },
  {
    "slug": "saga-official-002-050-2026",
    "title": "小城市 出産費用にお困りの方へ（助産施設）",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 交付 妊婦健診受診票（補助券）の交付 妊婦健康診査助成制度（里帰り出産をされる方へ） 妊婦歯科健康診査の無料受診券を発行します 出産費用にお困りの方へ（助産施設） 不妊治療費の助成・不妊相談 パパママ教室 両親学級 こんにち",
    "officialUrl": "https://www.city.ogi.lg.jp/main/102.html",
    "sourceName": "出産費用にお困りの方へ（助産施設）"
  },
  {
    "slug": "saga-official-002-051-2026",
    "title": "小城市 出産育児一時金",
    "organization": "小城市",
    "maxAmount": "支給額1児につき50万円",
    "maxAmountNum": 500000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和5年3月31日 支給が開始されました",
    "officialUrl": "https://www.city.ogi.lg.jp/main/9795.html",
    "sourceName": "出産育児一時金"
  },
  {
    "slug": "saga-official-002-052-2026",
    "title": "小城市 児童手当制度",
    "organization": "小城市",
    "maxAmount": "支給額【令和6年9月分（令和6年10月支給分）まで】対象年齢月額児童手当特例給付（所得制限に該当する方）0歳から3歳未満まで15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和6年10月1日 支給額 所得制限 支給時期 申請方法・申請窓口・申請期日 申請に必要なもの その他の手続き 現況届 寄附について 請求などに必要な様式 電子申請について 児童手当支給証明書の発行について 概要・内容 児童手当制度は、児童を養",
    "officialUrl": "https://www.city.ogi.lg.jp/main/7647.html",
    "sourceName": "児童手当制度"
  },
  {
    "slug": "saga-official-002-053-2026",
    "title": "小城市 子どもの医療費助成制度",
    "organization": "小城市",
    "maxAmount": "1人につき、ひと月・1医療機関あたり0歳から中学生まで県内の医療機関指定の県外医療機関（※1）において子どもの医療費受給資格証の提示あり（1）現物給付【入院】上限1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小城市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年3月31日 申請（領収書添付）することで保護者負担額を差し引いた金額の払い戻しを受けることができます",
    "officialUrl": "https://www.city.ogi.lg.jp/main/97.html",
    "sourceName": "子どもの医療費助成制度"
  },
  {
    "slug": "saga-official-002-054-2026",
    "title": "小城市 児童扶養手当",
    "organization": "小城市",
    "maxAmount": "1人のとき月額46,690円",
    "maxAmountNum": 46690,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 支給し、ひとり親家庭などの生活の安定と自立を支援し、児童の健やかな成長をお手伝いすることを目的としています",
    "officialUrl": "https://www.city.ogi.lg.jp/main/105.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "saga-official-002-055-2026",
    "title": "小城市 特別児童扶養手当",
    "organization": "小城市",
    "maxAmount": "月額58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 支給されます",
    "officialUrl": "https://www.city.ogi.lg.jp/main/1660.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "saga-official-002-056-2026",
    "title": "小城市 ひとり親家庭等医療費助成制度",
    "organization": "小城市",
    "maxAmount": "1人ひと月500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小城市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月30日 申請のご案内をしますので、必ず手続きをお願いします",
    "officialUrl": "https://www.city.ogi.lg.jp/main/106.html",
    "sourceName": "ひとり親家庭等医療費助成制度"
  },
  {
    "slug": "saga-official-002-057-2026",
    "title": "小城市 幼児教育・保育の無償化",
    "organization": "小城市",
    "maxAmount": "月額11,300円",
    "maxAmountNum": 11300,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 小城市：幼児教育・保育の無償化 小城市役所ホームページ 音声読み上げ 文字サイズ 縮小 標準 拡大 背景色 白 青 黒 Language English 한글 中文簡体 中文繁體 Japanese --> Language English ",
    "officialUrl": "https://www.city.ogi.lg.jp/main/29163.html",
    "sourceName": "幼児教育・保育の無償化"
  },
  {
    "slug": "saga-official-002-058-2026",
    "title": "小城市 自立支援教育訓練給付金及び高等職業訓練促進給付金",
    "organization": "小城市",
    "maxAmount": "上限20万円",
    "maxAmountNum": 200000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 支給は行わない",
    "officialUrl": "https://www.city.ogi.lg.jp/main/108.html",
    "sourceName": "自立支援教育訓練給付金及び高等職業訓練促進給付金"
  },
  {
    "slug": "saga-official-002-059-2026",
    "title": "小城市 ひとり親家庭高等学校卒業程度認定試験合格支援事業",
    "organization": "小城市",
    "maxAmount": "支給額【通信制の場合】受講開始時給付金：受講費用の最大4割（上限10万円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "小城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 支給します",
    "officialUrl": "https://www.city.ogi.lg.jp/main/20026.html",
    "sourceName": "ひとり親家庭高等学校卒業程度認定試験合格支援事業"
  },
  {
    "slug": "saga-official-002-060-2026",
    "title": "小城市 小城市育英資金・小城市小柳育英資金",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "小城市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年3月2日 募集を開始します",
    "officialUrl": "https://www.city.ogi.lg.jp/main/612.html",
    "sourceName": "小城市育英資金・小城市小柳育英資金"
  },
  {
    "slug": "saga-official-002-061-2026",
    "title": "小城市 過疎地域における固定資産税の課税免除について",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "小城市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和9年3月31日 申請期限 ※取得等してから1年以上経過している固定資産に係る申請については、課税免除できない 場合があります",
    "officialUrl": "https://www.city.ogi.lg.jp/main/40898.html",
    "sourceName": "過疎地域における固定資産税の課税免除について"
  },
  {
    "slug": "saga-official-002-062-2026",
    "title": "小城市 母子父子寡婦福祉資金貸付",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "小城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 申請時期 その他 修学資金 児童 高校、高専、専修学校、短大、大学に就学させるために必要な資金 随時 授業料、書籍代、交通費等 就学支度資金 児童 小中学校、高校、大学等および修業施設への入学入所に要する資金 入学前の1月中",
    "officialUrl": "https://www.city.ogi.lg.jp/main/109.html",
    "sourceName": "母子父子寡婦福祉資金貸付"
  },
  {
    "slug": "saga-official-002-063-2026",
    "title": "小城市 就学援助制度",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月30日 申請書」に必要事項を記入し、学校事務室に提出してください",
    "officialUrl": "https://www.city.ogi.lg.jp/main/82.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "saga-official-002-064-2026",
    "title": "小城市 創業支援・資金支援のご案内",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月30日 小城市：創業支援・資金支援のご案内 小城市役所ホームページ 音声読み上げ 文字サイズ 縮小 標準 拡大 背景色 白 青 黒 Language English 한글 中文簡体 中文繁體 Japanese --> Language Englis",
    "officialUrl": "https://www.city.ogi.lg.jp/main/8547.html",
    "sourceName": "創業支援・資金支援のご案内"
  },
  {
    "slug": "saga-official-002-065-2026",
    "title": "小城市 妊娠出産",
    "organization": "小城市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小城市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "交付） 妊婦健診受診票（補助券） パパ・ママ教室 赤ちゃんが欲しい人のために ※妊婦に関する新型コロナウイルス感染症情報については こちら （内部リンク） 出産 妊婦健康診査助成金制度 （里帰り出産をされる方へ） 妊産婦乳児",
    "officialUrl": "https://www.city.ogi.lg.jp/main/10115.html",
    "sourceName": "妊娠出産"
  },
  {
    "slug": "saga-official-002-066-2026",
    "title": "嬉野市 年金生活者支援給付金制度",
    "organization": "嬉野市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嬉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給されるものです",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/hoken/_25324.html",
    "sourceName": "年金生活者支援給付金制度"
  },
  {
    "slug": "saga-official-002-067-2026",
    "title": "嬉野市 幼児教育・保育の無償化について",
    "organization": "嬉野市",
    "maxAmount": "月額25,700円",
    "maxAmountNum": 25700,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嬉野市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2019年10月1日 申請等 幼稚園等在園児の方の認定申請等について（様式・記入例他） 関連記事 こども家庭庁 幼児教育・無償化 ホームページ （外部リンク） このページに関するお問い合わせ 嬉野庁舎 福祉課 TEL：0954-42-3306 F",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/hoikusho/_24792.html",
    "sourceName": "幼児教育・保育の無償化について"
  },
  {
    "slug": "saga-official-002-068-2026",
    "title": "嬉野市 子どもの医療費助成制度について",
    "organization": "嬉野市",
    "maxAmount": "上限500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "嬉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付申請書を提出してください",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/teate/194.html",
    "sourceName": "子どもの医療費助成制度について"
  },
  {
    "slug": "saga-official-002-069-2026",
    "title": "嬉野市 児童扶養手当について",
    "organization": "嬉野市",
    "maxAmount": "1人目全部支給46,690円",
    "maxAmountNum": 46690,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嬉野市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月1日 支給されます",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/teate/_19624.html",
    "sourceName": "児童扶養手当について"
  },
  {
    "slug": "saga-official-002-070-2026",
    "title": "嬉野市 ひとり親子育て世帯応援給付金事業について",
    "organization": "嬉野市",
    "maxAmount": "支給額】月額7,000円",
    "maxAmountNum": 7000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "嬉野市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給対象者】 次の要件をすべて満たしている人 (1)市内に住所を有している（子どもも市内に住所を有している）人 (2)児童扶養手当法による児童扶養手当の受給者 (3)小学校就学前までの児童を養育している人 上記の要件を満たし",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/teate/_22826.html",
    "sourceName": "ひとり親子育て世帯応援給付金事業について"
  },
  {
    "slug": "saga-official-002-071-2026",
    "title": "嬉野市 ひとり親家庭等医療費助成事業について",
    "organization": "嬉野市",
    "maxAmount": "1人あたり月額500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "嬉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年10月31日 申請期限は診療日の属する月の翌月から1年間となります",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/teate/_19625.html",
    "sourceName": "ひとり親家庭等医療費助成事業について"
  },
  {
    "slug": "saga-official-002-072-2026",
    "title": "嬉野市 児童手当について",
    "organization": "嬉野市",
    "maxAmount": "支給額手当月額（児童1人あたり）0歳～3歳未満（第1子・第2子）：15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嬉野市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給するものです",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/teate/193.html",
    "sourceName": "児童手当について"
  },
  {
    "slug": "saga-official-002-073-2026",
    "title": "嬉野市 未熟児養育医療給付について",
    "organization": "嬉野市",
    "maxAmount": "上限1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "嬉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "支給などに対して公費負担を受けられます",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/teate/_22021.html",
    "sourceName": "未熟児養育医療給付について"
  },
  {
    "slug": "saga-official-002-074-2026",
    "title": "嬉野市 第2子以降の保育料の無償化および年齢制限撤廃について",
    "organization": "嬉野市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嬉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請手続きは必要ありません",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/hoikusho/_32696.html",
    "sourceName": "第2子以降の保育料の無償化および年齢制限撤廃について"
  },
  {
    "slug": "saga-official-002-075-2026",
    "title": "嬉野市 予防接種健康被害救済制度",
    "organization": "嬉野市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嬉野市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "請求書発行事業者登録番号 市役所庁舎案内 問い合わせ窓口一覧 塩田庁舎 〒849-1492 佐賀県嬉野市塩田町大字馬場下甲1769番地 電話番号 : 0954-66-3111（代表） FAX番号 : 0954-66-3119",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/yobosesshu/_27950.html",
    "sourceName": "予防接種健康被害救済制度"
  },
  {
    "slug": "saga-official-002-076-2026",
    "title": "嬉野市 令和8年度 『嬉野市さが未来アシスト事業（二次募集）』を募集します",
    "organization": "嬉野市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嬉野市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2027年3月31日 募集）』を募集します このページではjavascriptを使用しています",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/machizukuri/_24725/_32773.html",
    "sourceName": "令和8年度 『嬉野市さが未来アシスト事業（二次募集）』を募集します"
  },
  {
    "slug": "saga-official-002-077-2026",
    "title": "嬉野市 嬉野市省エネルギー診断補助金について",
    "organization": "嬉野市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嬉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集開始≫嬉野市省エネルギー診断補助金について このページではjavascriptを使用しています",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/kankyo/_24713/_32800.html",
    "sourceName": "嬉野市省エネルギー診断補助金について"
  },
  {
    "slug": "saga-official-002-078-2026",
    "title": "嬉野市 新婚生活を応援します！ 令和8年度 嬉野市結婚新生活支援事業補助金",
    "organization": "嬉野市",
    "maxAmount": "補助金額婚姻に伴う「対象となる経費」（1）〜（4）を合わせた額1世帯当たり、夫婦とも婚姻日における年齢が29歳以下は上限60万円",
    "maxAmountNum": 600000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "嬉野市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年1月1日 提出し、受理された夫婦がいる世帯",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/deai/_32808.html",
    "sourceName": "新婚生活を応援します！ 令和8年度 嬉野市結婚新生活支援事業補助金"
  },
  {
    "slug": "saga-official-002-079-2026",
    "title": "嬉野市 飼い猫の避妊・去勢手術費の一部助成について",
    "organization": "嬉野市",
    "maxAmount": "補助額避妊：手術費の1/2（100円",
    "maxAmountNum": 100,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嬉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請期間 手術をした日の年度内に申請をしてください",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/dobutsu/_24298.html",
    "sourceName": "飼い猫の避妊・去勢手術費の一部助成について"
  },
  {
    "slug": "saga-official-002-080-2026",
    "title": "嬉野市 新幹線通勤通学定期券購入補助継続します！",
    "organization": "嬉野市",
    "maxAmount": "補助金額は、定期代金から通勤手当を引いた額の1/2（1円",
    "maxAmountNum": 1,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嬉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年9月23日 申請の流れ 補助金申請の流れは以下のとおりとなります",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/teiju/shinkansenhojo.html",
    "sourceName": "新幹線通勤通学定期券購入補助継続します！"
  },
  {
    "slug": "saga-official-002-081-2026",
    "title": "嬉野市 民間分譲宅地開発への支援事業奨励金制度始めました！",
    "organization": "嬉野市",
    "maxAmount": "1人当たり100万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嬉野市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2023年4月1日 支給します",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/teiju/minkanbunjosyourei.html",
    "sourceName": "民間分譲宅地開発への支援事業奨励金制度始めました！"
  },
  {
    "slug": "saga-official-002-082-2026",
    "title": "嬉野市 移住・転入補助金（移住促進応援金）について",
    "organization": "嬉野市",
    "maxAmount": "最大100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嬉野市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年4月1日 申請を提出された方はご連絡ください",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/teiju/ijuouenkin.html",
    "sourceName": "移住・転入補助金（移住促進応援金）について"
  },
  {
    "slug": "saga-official-002-083-2026",
    "title": "嬉野市 空き家バンク利活用促進奨励金",
    "organization": "嬉野市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "嬉野市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "請求書発行事業者登録番号 市役所庁舎案内 問い合わせ窓口一覧 塩田庁舎 〒849-1492 佐賀県嬉野市塩田町大字馬場下甲1769番地 電話番号 : 0954-66-3111（代表） FAX番号 : 0954-66-3119",
    "officialUrl": "https://www.city.ureshino.lg.jp/kurashi/teiju/akiya/_20368/_24744.html",
    "sourceName": "空き家バンク利活用促進奨励金"
  },
  {
    "slug": "saga-official-002-084-2026",
    "title": "嬉野市 新生児聴覚スクリーニング検査費用助成制度について",
    "organization": "嬉野市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "嬉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/teate/_28396.html",
    "sourceName": "新生児聴覚スクリーニング検査費用助成制度について"
  },
  {
    "slug": "saga-official-002-085-2026",
    "title": "嬉野市 子宮頸がん予防ワクチン（HPVワクチン）の接種について",
    "organization": "嬉野市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "嬉野市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "受付時間：午前9時から午後5時まで（土日・祝日、年末年始を除く） 関連 子宮頸がん予防ワクチンに関するリーフレット 厚生労働省のホームページに掲載されています",
    "officialUrl": "https://www.city.ureshino.lg.jp/kosodate/yobosesshu/_20843.html",
    "sourceName": "子宮頸がん予防ワクチン（HPVワクチン）の接種について"
  },
  {
    "slug": "saga-official-002-086-2026",
    "title": "神埼市 神埼市SAGAゼロカーボン加速化事業 太陽光発電設備・蓄電池等設置補助金",
    "organization": "神埼市",
    "maxAmount": "上限額35万円",
    "maxAmountNum": 350000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "神埼市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年５月２９日 募集します 熱中症を予防しましょう トップページ くらしのガイド 観光・文化 事業者の方へ 市政・計画 市役所のご案内 神埼市SAGAゼロカーボン加速化事業 太陽光発電設備・蓄電池等設置補助金 トップページ くらしのガイド ",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/20020.html",
    "sourceName": "神埼市SAGAゼロカーボン加速化事業 太陽光発電設備・蓄電池等設置補助金"
  },
  {
    "slug": "saga-official-002-087-2026",
    "title": "神埼市 令和８年度神埼市省エネ家電買換支援補助金",
    "organization": "神埼市",
    "maxAmount": "1世帯1回限り）対象経費（本体購入価格・設置費）の1/4、上限5万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "神埼市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和9年2月28日 募集します 熱中症を予防しましょう トップページ くらしのガイド 観光・文化 事業者の方へ 市政・計画 市役所のご案内 令和８年度神埼市省エネ家電買換支援補助金 トップページ くらしのガイド ゼロカーボン 令和８年度神埼市省",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/20004.html",
    "sourceName": "令和８年度神埼市省エネ家電買換支援補助金"
  },
  {
    "slug": "saga-official-002-088-2026",
    "title": "神埼市 就学援助制度",
    "organization": "神埼市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "神埼市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請方法 神埼市教育委員会備え付けの「就学援助申請書」に必要事項を記入し、必要な書類をそえて神埼市教育委員会学校教育総務課へ提出してください",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/393.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "saga-official-002-089-2026",
    "title": "神埼市 重度心身障害者の医療費助成",
    "organization": "神埼市",
    "maxAmount": "助成額保険の対象となる医療費の自己負担額(高額療養費や付加給付金等を除く）から月額500円",
    "maxAmountNum": 500,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "神埼市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "支給について ボランティア活動について 神埼市骨髄等移植支援事業について 神埼市 子ども・若者に対する生きる支援 熱中症 がんに関する相談窓口・サロン がんの治療を受けている方へ 健康診査・がん検診 かんざき成年後見センター",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/409.html",
    "sourceName": "重度心身障害者の医療費助成"
  },
  {
    "slug": "saga-official-002-090-2026",
    "title": "神埼市 ひとり親家庭高等職業訓練促進給付金",
    "organization": "神埼市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "神埼市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給します",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/5734.html",
    "sourceName": "ひとり親家庭高等職業訓練促進給付金"
  },
  {
    "slug": "saga-official-002-091-2026",
    "title": "神埼市 神埼市保育士就職支援金",
    "organization": "神埼市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "神埼市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付を受けていない者 就職時点で直近５年以上保育所等において保育士として勤務していない者 【支援金の額】 15万円 （一人1回限り） 【提出書類】 ★申請のとき ・申請書【様式第１号】 ・勤務内容証明書（就職先の保育所等が発",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/15949.html",
    "sourceName": "神埼市保育士就職支援金"
  },
  {
    "slug": "saga-official-002-092-2026",
    "title": "神埼市 神埼市若者応援家賃補助事業補助金を交付します",
    "organization": "神埼市",
    "maxAmount": "補助金額家賃から住宅手当を控除した額&times;1／2（月額上限1万円",
    "maxAmountNum": 10000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "神埼市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付します｜神埼市 音声読み上げ用ナビゲーションです",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/10073.html",
    "sourceName": "神埼市若者応援家賃補助事業補助金を交付します"
  },
  {
    "slug": "saga-official-002-093-2026",
    "title": "神埼市 三世代・新婚世帯同居等促進住宅リフォーム支援事業補助金を交付します",
    "organization": "神埼市",
    "maxAmount": "補助金額対象工事に要する費用&times;１／３（上限50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "神埼市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します｜神埼市 音声読み上げ用ナビゲーションです",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/10071.html",
    "sourceName": "三世代・新婚世帯同居等促進住宅リフォーム支援事業補助金を交付します"
  },
  {
    "slug": "saga-official-002-094-2026",
    "title": "神埼市 定住促進住宅取得補助金を交付します",
    "organization": "神埼市",
    "maxAmount": "1人あたり、乳幼児:15万円",
    "maxAmountNum": 150000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "神埼市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します｜神埼市 音声読み上げ用ナビゲーションです",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/20155.html",
    "sourceName": "定住促進住宅取得補助金を交付します"
  },
  {
    "slug": "saga-official-002-095-2026",
    "title": "神埼市 神埼市地方創生移住支援事業補助金を交付します",
    "organization": "神埼市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "神埼市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します｜神埼市 音声読み上げ用ナビゲーションです",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/10673.html",
    "sourceName": "神埼市地方創生移住支援事業補助金を交付します"
  },
  {
    "slug": "saga-official-002-096-2026",
    "title": "神埼市 神埼市未来につなぐさが移住支援事業補助金を交付します",
    "organization": "神埼市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "神埼市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和7年4月1日 交付します｜神埼市 音声読み上げ用ナビゲーションです",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/18851.html",
    "sourceName": "神埼市未来につなぐさが移住支援事業補助金を交付します"
  },
  {
    "slug": "saga-official-002-097-2026",
    "title": "神埼市 神埼市空き家改修費助成事業補助金を交付します",
    "organization": "神埼市",
    "maxAmount": "限度額50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "神埼市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します｜神埼市 音声読み上げ用ナビゲーションです",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/3837.html",
    "sourceName": "神埼市空き家改修費助成事業補助金を交付します"
  },
  {
    "slug": "saga-official-002-098-2026",
    "title": "神埼市 神埼市空き家バンク登録支援事業補助金を交付します",
    "organization": "神埼市",
    "maxAmount": "上限２０万円",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "神埼市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付します｜神埼市 音声読み上げ用ナビゲーションです",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/19151.html",
    "sourceName": "神埼市空き家バンク登録支援事業補助金を交付します"
  },
  {
    "slug": "saga-official-002-099-2026",
    "title": "神埼市 神埼市空き店舗等活用支援事業補助金の公募を開始します。",
    "organization": "神埼市",
    "maxAmount": "限度額100万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "神埼市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年4月1日 募集！ 「ふるさと名物応援宣言」 神埼市地域経済動向調査を公表します 令和４年度かんざき市民応援クーポン券を配布しています 「地方消費者行政に対する国の財政措置の活用期間に関する一般準則」 （平成25年2月27日付消地協第2",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/10209.html",
    "sourceName": "神埼市空き店舗等活用支援事業補助金の公募を開始します。"
  },
  {
    "slug": "saga-official-002-100-2026",
    "title": "神埼市 学校給食費助成制度",
    "organization": "神埼市",
    "maxAmount": "年額学年年額年間助成額保護者負担額（年額）小学校1～6年57,200円",
    "maxAmountNum": 57200,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "神埼市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "受付について トップページ くらしのガイド 観光・文化 事業者の方へ 市政・計画 市役所のご案内 学校給食費助成制度 トップページ ライフイベント 入園・入学 学校給食費助成制度 学校給食費の概要と金額 令和8年度から、国の",
    "officialUrl": "https://www.city.kanzaki.saga.jp/main/16408.html",
    "sourceName": "学校給食費助成制度"
  }
];
