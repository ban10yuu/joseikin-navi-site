const oitaOfficial002Grants: Array<{
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
    "slug": "oita-official-002-001-2026",
    "title": "杵築市 軽自動車税（種別割）の減免制度",
    "organization": "杵築市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "杵築市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年09月30日 交付を受けている18歳未満の方で、かつ「別表2」の等級に該当する方 常時介護する方 知的障がい者 本人または生計を一にする方 本人 重度の知的障がいで療育手帳A1またはA2判定の方 生計を一にする方 常時介護する方 精神障が",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kurashi/kojin_zeikin/2/9508.html",
    "sourceName": "軽自動車税（種別割）の減免制度"
  },
  {
    "slug": "oita-official-002-002-2026",
    "title": "杵築市 自主防災組織設立・変更届出、自主防災組織活性化補助金について",
    "organization": "杵築市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "杵築市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年09月18日 支給します",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kurashi/bousai_bouhan_anzen/1/2518.html",
    "sourceName": "自主防災組織設立・変更届出、自主防災組織活性化補助金について"
  },
  {
    "slug": "oita-official-002-003-2026",
    "title": "杵築市 移住・定住に関する補助金（人生まるごと応援プラン）",
    "organization": "杵築市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "移住・定住に関する補助金（人生まるごと応援プラン） 地域おこし協力隊のインタビュー記事が(一社)キャリアビジョン協会様のHPに掲載されました！ 地域おこし協力隊はブログとインスタグラムをしています！ 〈きつき交流会〉Instagramアカウ",
    "officialUrl": "https://www.city.kitsuki.lg.jp/teijuusokushin/iju_topics/12351.html",
    "sourceName": "移住・定住に関する補助金（人生まるごと応援プラン）"
  },
  {
    "slug": "oita-official-002-004-2026",
    "title": "臼杵市 移住者向けのレンタカー借上料補助金をつくりました！",
    "organization": "臼杵市",
    "maxAmount": "補助金額レンタカー借上料の2分の1（上限3,000円",
    "maxAmountNum": 3000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2019年2月13日 申請方法 補助金の交付を受けようとする方（2人以上で利用する場合は、代表者に限る",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2017122700013/",
    "sourceName": "移住者向けのレンタカー借上料補助金をつくりました！"
  },
  {
    "slug": "oita-official-002-005-2026",
    "title": "豊後高田市 国民健康保険加入者の一部負担金（医療費の窓口負担額）の徴収猶予・減免について",
    "organization": "豊後高田市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2022年10月25日 申請・届出 国民健康保険への加入・脱退、資格確認書等の再交付 限度額適用認定証（医療費が高額になりそうなとき） 高額療養費（高額な医療費を支払ったとき） 出産育児一時金 特定疾病療養受療証（人工透析などを受けるとき） 第三者",
    "officialUrl": "https://www.city.bungotakada.oita.jp/site/kokuho/1670.html",
    "sourceName": "国民健康保険加入者の一部負担金（医療費の窓口負担額）の徴収猶予・減免について"
  },
  {
    "slug": "oita-official-002-006-2026",
    "title": "豊後高田市 ケーブルネットワーク施設基本使用料に関する減免制度",
    "organization": "豊後高田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊後高田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "募集について 豊後高田市役所 法人番号9000020442097 高田庁舎 〒879-0692 大分県豊後高田市是永町39番地3 高田庁舎の地図 真玉庁舎 〒872-1101 大分県豊後高田市中真玉2144番地12 真玉庁舎",
    "officialUrl": "https://www.city.bungotakada.oita.jp/site/bungotakadacatv/2152.html",
    "sourceName": "ケーブルネットワーク施設基本使用料に関する減免制度"
  },
  {
    "slug": "oita-official-002-007-2026",
    "title": "豊後高田市 ケーブルネットワーク施設引込工事費用及び分担金に関する減免制度",
    "organization": "豊後高田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊後高田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年10月25日 申請することにより引込工事費用及び分担金に関する減免制度の適用を受けることができます",
    "officialUrl": "https://www.city.bungotakada.oita.jp/site/bungotakadacatv/2150.html",
    "sourceName": "ケーブルネットワーク施設引込工事費用及び分担金に関する減免制度"
  },
  {
    "slug": "oita-official-002-008-2026",
    "title": "杵築市 重度心身障害者医療費助成",
    "organization": "杵築市",
    "maxAmount": "月額1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "杵築市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2020年10月01日 申請（受給者証の交付）について 重度心身障がい（児）者に対して、各医療機関の窓口で支払われた医療費の自己負担金を助成します",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kenkofukushi/shougaifukushi/2539.html",
    "sourceName": "重度心身障害者医療費助成"
  },
  {
    "slug": "oita-official-002-009-2026",
    "title": "杵築市 令和8年度杵築市創業支援事業補助金（申請期限：令和8年7月29日）",
    "organization": "杵築市",
    "maxAmount": "上限額：最大180万円",
    "maxAmountNum": 1800000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年7月29日 申請期限：令和8年7月29日） Tweet 更新日：2026年04月10日 杵築市創業支援事業補助金のご案内 この事業は、本市の商工業の振興及び雇用の創出等を図るほか、人口流出をはじめ空き店舗・空き家の増加等といった地域課題",
    "officialUrl": "https://www.city.kitsuki.lg.jp/sangyobijinesu/sangyoushinkou/3/10682.html",
    "sourceName": "令和8年度杵築市創業支援事業補助金（申請期限：令和8年7月29日）"
  },
  {
    "slug": "oita-official-002-010-2026",
    "title": "杵築市 障がい者手帳取得助成金について",
    "organization": "杵築市",
    "maxAmount": "1人につき1年度3,000円",
    "maxAmountNum": 3000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年03月01日 申請日において、1",
    "officialUrl": "https://www.city.kitsuki.lg.jp/shinseisho/fukushi/9812.html",
    "sourceName": "障がい者手帳取得助成金について"
  },
  {
    "slug": "oita-official-002-011-2026",
    "title": "杵築市 「障がい者移動支援助成制度」をご利用ください",
    "organization": "杵築市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2023年03月01日 交付（1冊1,000円で1月分",
    "officialUrl": "https://www.city.kitsuki.lg.jp/shinseisho/fukushi/3990.html",
    "sourceName": "「障がい者移動支援助成制度」をご利用ください"
  },
  {
    "slug": "oita-official-002-012-2026",
    "title": "臼杵市 臼杵市国民健康保険一部負担金の減免制度についてお知らせします",
    "organization": "臼杵市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "臼杵市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2020年4月30日 申請日のおおむね過去6月以内に次の 特別な事由 が発生したことにより、生活が困窮し、一部負担金を支払うことが困難であると認められる方 〈特別な事由〉 震災、風水害、火災、その他これらに類する災害により、死亡し、障がい者となり",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2021060400034/",
    "sourceName": "臼杵市国民健康保険一部負担金の減免制度についてお知らせします"
  },
  {
    "slug": "oita-official-002-013-2026",
    "title": "杵築市 杵築市在宅重度障害者住宅改造助成事業",
    "organization": "杵築市",
    "maxAmount": "補助額等改造のための助成基本額は、60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "杵築市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2020年06月25日 交付を受けている人 A1またはA2の療育手帳の交付を受けている人 1級の精神障害者保健福祉手帳の交付を受けている人 3 対象箇所 玄関（または他の室外への出入口） 台所 浴室（脱衣室を含む） 便所 廊下 居室 階段 洗面所",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kenkofukushi/shougaifukushi/2538.html",
    "sourceName": "杵築市在宅重度障害者住宅改造助成事業"
  },
  {
    "slug": "oita-official-002-014-2026",
    "title": "杵築市 危険ブロック塀等除却事業補助金のお知らせ",
    "organization": "杵築市",
    "maxAmount": "補助金額補助対象ブロック塀等の解体撤去に要する費用の2分の1以内の額（上限10万円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 申請（委任状の提出が必要です",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kurashi/bousai_bouhan_anzen/1/4579.html",
    "sourceName": "危険ブロック塀等除却事業補助金のお知らせ"
  },
  {
    "slug": "oita-official-002-015-2026",
    "title": "杵築市 飼い主のいない猫の不妊去勢手術費補助金制度について",
    "organization": "杵築市",
    "maxAmount": "上限は次のとおり不妊手術1頭10,000円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年05月01日 申請が必要となります",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kurashi/kankyou_eisei_gomi/pet/11017.html",
    "sourceName": "飼い主のいない猫の不妊去勢手術費補助金制度について"
  },
  {
    "slug": "oita-official-002-016-2026",
    "title": "杵築市 合併処理浄化槽設置整備事業補助金",
    "organization": "杵築市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月30日 交付されます",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kurashi/kankyou_eisei_gomi/shinyou/7540.html",
    "sourceName": "合併処理浄化槽設置整備事業補助金"
  },
  {
    "slug": "oita-official-002-017-2026",
    "title": "杵築市 杵築市学校児童生徒就学援助制度",
    "organization": "杵築市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "杵築市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年04月28日 支給されている世帯 上記の項目に該当しないが経済的に困難である世帯 2.援助の内容 修学旅行費・医療費・通学費・学用品費（新入学学用品費含む）・校外活動費等の一部 （ 入学準備金を受給された児童生徒の保護者には新入学学用品費",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kyoikukosodate/gakkoukyouiku/1/3376.html",
    "sourceName": "杵築市学校児童生徒就学援助制度"
  },
  {
    "slug": "oita-official-002-018-2026",
    "title": "杵築市 ミカンバエ防除のお願いと補助事業のお知らせ",
    "organization": "杵築市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年07月16日 申請期間：令和7年7月1日(火曜)～令和7年8月29日(金曜) 補助率 ：防除薬剤（モスピランSL液剤）購入費の10分の3以内（1,000円未満切り捨て） 杵築市訪果害虫防除薬剤購入費助成事業補助金交付要綱 (Wordファイ",
    "officialUrl": "https://www.city.kitsuki.lg.jp/sangyobijinesu/nourinsuisangyou/1/5235.html",
    "sourceName": "ミカンバエ防除のお願いと補助事業のお知らせ"
  },
  {
    "slug": "oita-official-002-019-2026",
    "title": "杵築市 杵築市内の中小企業者に対する事業資金の融資に関する制度（杵築市中小企業振興資金）",
    "organization": "杵築市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 申請書等の様式（※金融機関向け） 中小企業振興資金信用保証料補助金交付申請書（R6.4.1から） (Wordファイル: 14.3KB) 中小企業振興資金融資報告書（R6.4.1から） (Wordファイル: 15.4KB) 中",
    "officialUrl": "https://www.city.kitsuki.lg.jp/sangyobijinesu/sangyoushinkou/3/2717.html",
    "sourceName": "杵築市内の中小企業者に対する事業資金の融資に関する制度（杵築市中小企業振興資金）"
  },
  {
    "slug": "oita-official-002-020-2026",
    "title": "杵築市 企業誘致促進補助金等のご案内",
    "organization": "杵築市",
    "maxAmount": "限度額3,000万円",
    "maxAmountNum": 30000000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "杵築市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年02月27日 企業誘致促進補助金等のご案内 Tweet 更新日：2023年02月27日 杵築市では工場等を新設・増設する場合に優遇策を展開しています。 企業誘致促進補助金の一覧 条例 企業立地促進条例 工場立地促進条例 中小企業振興資金貸付（規則） コー",
    "officialUrl": "https://www.city.kitsuki.lg.jp/sangyobijinesu/sangyoushinkou/3/2715.html",
    "sourceName": "企業誘致促進補助金等のご案内"
  },
  {
    "slug": "oita-official-002-021-2026",
    "title": "臼杵市 NHK放送受信料の減免",
    "organization": "臼杵市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "臼杵市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2019年2月14日 申請が必要になります",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014020400472/",
    "sourceName": "NHK放送受信料の減免"
  },
  {
    "slug": "oita-official-002-022-2026",
    "title": "杵築市 交通遺児育成資金貸付制度",
    "organization": "杵築市",
    "maxAmount": "月額20,000円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "杵築市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2018年08月01日 交通遺児育成資金貸付制度 Tweet 更新日：2018年08月01日 自動車事故対策機構では、自動車事故が原因で死亡された人または重度の後遺障害が残った人のお子様に対し0歳から中学校卒業まで無利子で育成資金の貸付を行っています。 貸付額 一",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kurashi/bousai_bouhan_anzen/3/3492.html",
    "sourceName": "交通遺児育成資金貸付制度"
  },
  {
    "slug": "oita-official-002-023-2026",
    "title": "臼杵市 ひとり親家庭等医療費の助成",
    "organization": "臼杵市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "臼杵市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2019年2月14日 交付申請が必要です",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014020500486/",
    "sourceName": "ひとり親家庭等医療費の助成"
  },
  {
    "slug": "oita-official-002-024-2026",
    "title": "臼杵市 臼杵市移住者自動車運転支援（ペーパードライバー用）補助金",
    "organization": "臼杵市",
    "maxAmount": "上限6,000円",
    "maxAmountNum": 6000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付を受けていない者 補助率 補助率10分の10（上限6,000円、最大2回） 交付申請（請求）書類 臼杵市移住者自動車運転支援補助金交付申請書及び請求書（様式第1号）[PDF：94.1KB] 誓約書（様式第2号）[PDF：",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2018080800029/",
    "sourceName": "臼杵市移住者自動車運転支援（ペーパードライバー用）補助金"
  },
  {
    "slug": "oita-official-002-025-2026",
    "title": "臼杵市 臼杵市企業立地促進助成金",
    "organization": "臼杵市",
    "maxAmount": "1人以上（事業家賃助成金・社宅整備助成金は除く）助成内容対象経費区分限度額立地促進支援助成金設備投資助成金設備投資額の10%2,000万円",
    "maxAmountNum": 20000000,
    "category": "living",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "臼杵市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014013100228/",
    "sourceName": "臼杵市企業立地促進助成金"
  },
  {
    "slug": "oita-official-002-026-2026",
    "title": "臼杵市 不妊治療費助成制度",
    "organization": "臼杵市",
    "maxAmount": "助成額１組の夫婦につき１年度あたり上限２０万円",
    "maxAmountNum": 200000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2019年2月12日 申請は事前予約制です） ●場所：ちあぽーと ●下記の予約フォームから申請するか、お電話でお問い合わせください",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014032400033/",
    "sourceName": "不妊治療費助成制度"
  },
  {
    "slug": "oita-official-002-027-2026",
    "title": "臼杵市 妊産婦医療費助成制度",
    "organization": "臼杵市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和6年3月31日 交付）[PDF：124KB] ★臼杵市妊産婦医療費助成制度のご案内（令和6年4月1日交付～）[PDF：413KB] ★妊産婦医療費について（イメージ図、Q&A）[PDF：241KB] ★妊産婦医療費助成金交付申請書[PDF：",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2020121100012/",
    "sourceName": "妊産婦医療費助成制度"
  },
  {
    "slug": "oita-official-002-028-2026",
    "title": "臼杵市 子ども医療費助成制度",
    "organization": "臼杵市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "臼杵市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付申請（出生や転入など） ５",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014012800044/",
    "sourceName": "子ども医療費助成制度"
  },
  {
    "slug": "oita-official-002-029-2026",
    "title": "臼杵市 ストーマ用装具購入費助成制度について（本制度は終了しました）",
    "organization": "臼杵市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "臼杵市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2019年2月14日 請求期間は令和8年4月30日（木曜日）までです",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014020400250/",
    "sourceName": "ストーマ用装具購入費助成制度について（本制度は終了しました）"
  },
  {
    "slug": "oita-official-002-030-2026",
    "title": "臼杵市 特別障害者手当・障害児福祉手当",
    "organization": "臼杵市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "特別障害者手当・障害児福祉手当について 」をご覧ください。 お問合せ 福祉課 各課の担当業務や直通電話、メールフォームによるお問い合わせは こちら をご覧ください。 ツイート 市役所のご案内 サイトポリシー リンク・著作権・免責事項 個人情",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014021300085/",
    "sourceName": "特別障害者手当・障害児福祉手当"
  },
  {
    "slug": "oita-official-002-031-2026",
    "title": "杵築市 令和8年度帯状疱疹予防接種（任意接種）費用助成のお知らせ",
    "organization": "杵築市",
    "maxAmount": "助成額予防接種費用の2分の1（上限5,000円",
    "maxAmountNum": 5000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 申請期限 令和9年3月31日まで 助成対象ワクチン 乾燥弱毒生水痘ワクチン（生ワクチン）又は乾燥組換え帯状疱疹ワクチン（組換えワクチン） ※助成は、どちらか一方のワクチンのみです",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kenkofukushi/kenkou_iryou/12295.html",
    "sourceName": "令和8年度帯状疱疹予防接種（任意接種）費用助成のお知らせ"
  },
  {
    "slug": "oita-official-002-032-2026",
    "title": "竹田市 就学援助制度について",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kosodate_kyoiku/nyugaku_nyuen/12625.html",
    "sourceName": "就学援助制度について"
  },
  {
    "slug": "oita-official-002-033-2026",
    "title": "竹田市 子ども医療費助成事業",
    "organization": "竹田市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "竹田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kosodate_kyoiku/kenshin_yobosesshu/4952.html",
    "sourceName": "子ども医療費助成事業"
  },
  {
    "slug": "oita-official-002-034-2026",
    "title": "竹田市 竹田市英語検定料助成金について",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kosodate_kyoiku/kyoikuosirase/12660.html",
    "sourceName": "竹田市英語検定料助成金について"
  },
  {
    "slug": "oita-official-002-035-2026",
    "title": "竹田市 保育料完全無償化と利用料軽減について",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "竹田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/life_scene/nyuen/8207.html",
    "sourceName": "保育料完全無償化と利用料軽減について"
  },
  {
    "slug": "oita-official-002-036-2026",
    "title": "竹田市 竹田市住宅用火災警報器設置促進事業補助金交付",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "竹田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/shinseisho/9801.html",
    "sourceName": "竹田市住宅用火災警報器設置促進事業補助金交付"
  },
  {
    "slug": "oita-official-002-037-2026",
    "title": "竹田市 在宅高齢者住宅改造助成事業",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "竹田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kenko_fukushi/fukushi_kaigo/5693.html",
    "sourceName": "在宅高齢者住宅改造助成事業"
  },
  {
    "slug": "oita-official-002-038-2026",
    "title": "竹田市 物価高対応子育て応援手当についてのお知らせ",
    "organization": "竹田市",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kosodate_kyoiku/kosodateshien/12060.html",
    "sourceName": "物価高対応子育て応援手当についてのお知らせ"
  },
  {
    "slug": "oita-official-002-039-2026",
    "title": "竹田市 竹田市飼い主のいない猫の不妊去勢手術費補助制度について",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kurashi_tetsuzuki/gomi_recycling/environment/4370.html",
    "sourceName": "竹田市飼い主のいない猫の不妊去勢手術費補助制度について"
  },
  {
    "slug": "oita-official-002-040-2026",
    "title": "竹田市 竹田市飲用水改善事業費補助金交付制度について",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kurashi_tetsuzuki/gomi_recycling/environment/4783.html",
    "sourceName": "竹田市飲用水改善事業費補助金交付制度について"
  },
  {
    "slug": "oita-official-002-041-2026",
    "title": "津久見市 不育症治療費助成制度",
    "organization": "津久見市",
    "maxAmount": "上限３０万円",
    "maxAmountNum": 300000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津久見市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年4月1日 申請手続き 健康推進課健康班に次のものをお持ちください",
    "officialUrl": "https://www.city.tsukumi.oita.jp/site/kosodate/23836.html",
    "sourceName": "不育症治療費助成制度"
  },
  {
    "slug": "oita-official-002-042-2026",
    "title": "津久見市 子ども医療費助成制度のお知らせ",
    "organization": "津久見市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "津久見市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年7月4日 申請により、指定口座に返金いたします",
    "officialUrl": "https://www.city.tsukumi.oita.jp/site/kosodate/76.html",
    "sourceName": "子ども医療費助成制度のお知らせ"
  },
  {
    "slug": "oita-official-002-043-2026",
    "title": "津久見市 不妊治療費助成事業",
    "organization": "津久見市",
    "maxAmount": "上限１０万円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "津久見市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年4月1日 申請日において本市に居住し、かつ、本市の住民基本台帳に連続して1年間以上記録されており、今後も1年以上本市に居住予定である夫婦 市税等の滞納がない夫婦 医療保険に加入している夫婦 助成内容 不妊検査・不妊治療の自己負担額及び",
    "officialUrl": "https://www.city.tsukumi.oita.jp/site/kosodate/70.html",
    "sourceName": "不妊治療費助成事業"
  },
  {
    "slug": "oita-official-002-044-2026",
    "title": "津久見市 児童手当の制度が一部改正されます",
    "organization": "津久見市",
    "maxAmount": "支給額の増額、第３子のカウント方法の変更第３子のカウント方法が大学生世代（２２歳に到達した年の最初の３月３１日まで）まで延長され、支給額が月額３万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津久見市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年8月30日 支給）より適用されます",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/20/27857.html",
    "sourceName": "児童手当の制度が一部改正されます"
  },
  {
    "slug": "oita-official-002-045-2026",
    "title": "津久見市 津久見市地区集会所等整備事業費補助金",
    "organization": "津久見市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津久見市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付する",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/25/32211.html",
    "sourceName": "津久見市地区集会所等整備事業費補助金"
  },
  {
    "slug": "oita-official-002-046-2026",
    "title": "津久見市 一般貨物自動車運送事業者や海運事業者の方への支援金について",
    "organization": "津久見市",
    "maxAmount": "上限１００万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津久見市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年5月1日 交付します",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/6/23281.html",
    "sourceName": "一般貨物自動車運送事業者や海運事業者の方への支援金について"
  },
  {
    "slug": "oita-official-002-047-2026",
    "title": "津久見市 妊婦さんに対する初回産科受診料助成事業",
    "organization": "津久見市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "津久見市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2023年10月5日 申請日において津久見市に居住し、かつ、津久見市の住民基本台帳に記録されている者 ３",
    "officialUrl": "https://www.city.tsukumi.oita.jp/site/kosodate/25385.html",
    "sourceName": "妊婦さんに対する初回産科受診料助成事業"
  },
  {
    "slug": "oita-official-002-048-2026",
    "title": "津久見市 高等職業訓練促進給付金事業をご存知ですか？",
    "organization": "津久見市",
    "maxAmount": "上限３年）給付額（平成２８年度入学者）職業訓練給付金市町村民税非課税世帯：１００，０００円",
    "maxAmountNum": 100000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "津久見市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2018年4月1日 支給要件を満たせば、高等職業訓練促進給付金（以下「職業訓練給付金」という）や訓練修了支援給付金（以下「修了支援給付金」という）を給付します",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/20/1209.html",
    "sourceName": "高等職業訓練促進給付金事業をご存知ですか？"
  },
  {
    "slug": "oita-official-002-049-2026",
    "title": "豊後高田市 自主防災組織活性化事業費補助金",
    "organization": "豊後高田市",
    "maxAmount": "上限5万円",
    "maxAmountNum": 50000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付要綱 補助金の申請について 申請様式を掲載していますので、ご利用ください",
    "officialUrl": "https://www.city.bungotakada.oita.jp/site/bousai/1643.html",
    "sourceName": "自主防災組織活性化事業費補助金"
  },
  {
    "slug": "oita-official-002-050-2026",
    "title": "豊後高田市 「急傾斜地崩壊による土砂撤去等」への助成【補助制度】",
    "organization": "豊後高田市",
    "maxAmount": "上限20万円",
    "maxAmountNum": 200000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊後高田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年4月1日 申請（被災後1か月以内）が必要です",
    "officialUrl": "https://www.city.bungotakada.oita.jp/site/bousai/2880.html",
    "sourceName": "「急傾斜地崩壊による土砂撤去等」への助成【補助制度】"
  },
  {
    "slug": "oita-official-002-051-2026",
    "title": "豊後高田市 がけ地近接等危険住宅を除却・移転する費用の一部補助金について",
    "organization": "豊後高田市",
    "maxAmount": "上限97万5千円安全な地域への移転（新築・購入）に要する費用の借入金の利子相当額（年利率8.5パーセントを限度）上限421万円",
    "maxAmountNum": 4210000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年4月1日 申請が可能になります",
    "officialUrl": "https://www.city.bungotakada.oita.jp/site/bousai/2626.html",
    "sourceName": "がけ地近接等危険住宅を除却・移転する費用の一部補助金について"
  },
  {
    "slug": "oita-official-002-052-2026",
    "title": "豊後高田市 【受付終了しました】省エネエアコンの購入補助金について",
    "organization": "豊後高田市",
    "maxAmount": "補助金額補助率補助対象内経費の2分の1※1,000円",
    "maxAmountNum": 1000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊後高田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月13日 受付終了しました】省エネエアコンの購入補助金について ページID：0041137 更新日：2026年4月13日更新 印刷ページ表示 本事業は令和8年4月13日(月曜日)受付分をもって終了となりました エネルギー価格や物価の高",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/13/41137.html",
    "sourceName": "【受付終了しました】省エネエアコンの購入補助金について"
  },
  {
    "slug": "oita-official-002-053-2026",
    "title": "豊後高田市 愛ターンお婿（むこ）さん奨励金",
    "organization": "豊後高田市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊後高田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年4月1日 交付要件 お婿さんはⅠターンであること 妻の実家（父・母のどちらかが居住）が本市にあること 転入前は、大分県外に住所を有していること 転勤等の転入ではないこと 転入してから1年以内であり、本市に5年以上居住する意思があること",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/5/2285.html",
    "sourceName": "愛ターンお婿（むこ）さん奨励金"
  },
  {
    "slug": "oita-official-002-054-2026",
    "title": "豊後高田市 【受付終了】豊後高田市で働こう！奨学金返済支援事業",
    "organization": "豊後高田市",
    "maxAmount": "上限額は100万円",
    "maxAmountNum": 1000000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "豊後高田市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年2月25日 受付終了】豊後高田市で働こう！奨学金返済支援事業 ページID：0002239 更新日：2026年2月25日更新 印刷ページ表示 ※令和7年度分の受付は終了しました",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/14/2239.html",
    "sourceName": "【受付終了】豊後高田市で働こう！奨学金返済支援事業"
  },
  {
    "slug": "oita-official-002-055-2026",
    "title": "豊後高田市 令和8年度豊後高田市移住支援金の交付について",
    "organization": "豊後高田市",
    "maxAmount": "補助金額令和8年4月1日から6月30日までに申請した場合東京圏単身：60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月23日 交付について ページID：0024305 更新日：2026年4月23日更新 印刷ページ表示 ​大分県外から豊後高田市に移住し、「 おおいたジョブナビ ＜外部リンク＞ 」を使って就職された方や、移住元から継続してテレワークをし",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/5/24305.html",
    "sourceName": "令和8年度豊後高田市移住支援金の交付について"
  },
  {
    "slug": "oita-official-002-056-2026",
    "title": "豊後高田市 令和8年度高齢者・子育て世帯リフォーム支援事業補助金",
    "organization": "豊後高田市",
    "maxAmount": "補助金額補助対象経費の20％（上限50万円",
    "maxAmountNum": 500000,
    "category": "childcare",
    "relatedCategories": [
      "housing",
      "employment",
      "nursing"
    ],
    "eligibility": "豊後高田市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月13日 申請しようと検討している世帯で、下記の補助金の対象世帯にも当てはまる場合は、下記補助金の利用を優先してください",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/5/2125.html",
    "sourceName": "令和8年度高齢者・子育て世帯リフォーム支援事業補助金"
  },
  {
    "slug": "oita-official-002-057-2026",
    "title": "豊後高田市 (二次募集)起業チャレンジ若者支援事業補助金について",
    "organization": "豊後高田市",
    "maxAmount": "補助額上限100万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月10日 募集)起業チャレンジ若者支援事業補助金について ページID：0014076 更新日：2026年7月10日更新 印刷ページ表示 市内で新たに起業する若者を支援します！ 市内の開業を促進し、事業創出による地域経済の活性化や新たな",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/14/14076.html",
    "sourceName": "(二次募集)起業チャレンジ若者支援事業補助金について"
  },
  {
    "slug": "oita-official-002-058-2026",
    "title": "豊後高田市 （二次募集）起業チャレンジウェルカム支援事業補助金について",
    "organization": "豊後高田市",
    "maxAmount": "補助額上限150万円",
    "maxAmountNum": 1500000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月8日 募集）起業チャレンジウェルカム支援事業補助金について ページID：0014091 更新日：2026年7月8日更新 印刷ページ表示 移住者・移住予定者の市内での起業を支援します！ 市内の開業を促進し、事業創出による地域経済の活",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/14/14091.html",
    "sourceName": "（二次募集）起業チャレンジウェルカム支援事業補助金について"
  },
  {
    "slug": "oita-official-002-059-2026",
    "title": "豊後高田市 豊後高田市小規模事業者等物価高騰支援事業補助金について",
    "organization": "豊後高田市",
    "maxAmount": "上限額25万円",
    "maxAmountNum": 250000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月23日 申請はお早めにお願いします",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/14/41466.html",
    "sourceName": "豊後高田市小規模事業者等物価高騰支援事業補助金について"
  },
  {
    "slug": "oita-official-002-060-2026",
    "title": "豊後高田市 【受付終了】令和7年度定額減税補足給付金（不足額給付）について",
    "organization": "豊後高田市",
    "maxAmount": "1人につき4万円",
    "maxAmountNum": 40000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊後高田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年11月1日 受付終了】令和7年度定額減税補足給付金（不足額給付）について ページID：0036073 更新日：2025年11月1日更新 印刷ページ表示 ※本給付金の申請受付は、令和7年10月31日（金曜日）をもって終了しました",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/6/36073.html",
    "sourceName": "【受付終了】令和7年度定額減税補足給付金（不足額給付）について"
  },
  {
    "slug": "oita-official-002-061-2026",
    "title": "豊後高田市 はり、きゅうおよびマッサージ助成事業について",
    "organization": "豊後高田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "募集について 豊後高田市役所 法人番号9000020442097 高田庁舎 〒879-0692 大分県豊後高田市是永町39番地3 高田庁舎の地図 真玉庁舎 〒872-1101 大分県豊後高田市中真玉2144番地12 真玉庁舎",
    "officialUrl": "https://www.city.bungotakada.oita.jp/site/kokuho/2066.html",
    "sourceName": "はり、きゅうおよびマッサージ助成事業について"
  },
  {
    "slug": "oita-official-002-062-2026",
    "title": "豊後高田市 災害被災者住宅再建支援金のお知らせ",
    "organization": "豊後高田市",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年11月1日 支給します",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/9/17970.html",
    "sourceName": "災害被災者住宅再建支援金のお知らせ"
  },
  {
    "slug": "oita-official-002-063-2026",
    "title": "豊後高田市 ケーブルネットワーク施設宅内工事費助成金",
    "organization": "豊後高田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "豊後高田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付申請書（以下、「申請書」という",
    "officialUrl": "https://www.city.bungotakada.oita.jp/site/bungotakadacatv/2153.html",
    "sourceName": "ケーブルネットワーク施設宅内工事費助成金"
  },
  {
    "slug": "oita-official-002-064-2026",
    "title": "豊後高田市 飼い主のいない猫の不妊去勢手術費補助金制度",
    "organization": "豊後高田市",
    "maxAmount": "補助金額不妊手術1頭につき10,000円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "豊後高田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年3月29日 交付します",
    "officialUrl": "https://www.city.bungotakada.oita.jp/soshiki/13/22852.html",
    "sourceName": "飼い主のいない猫の不妊去勢手術費補助金制度"
  },
  {
    "slug": "oita-official-002-065-2026",
    "title": "臼杵市 重度心身障害者（児）医療費の助成",
    "organization": "臼杵市",
    "maxAmount": "月額合計1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "臼杵市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2019年2月14日 支給を健康保険から受けられる場合は、加入する保険者へ高額療養費の請求をしてください",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014020400212/",
    "sourceName": "重度心身障害者（児）医療費の助成"
  },
  {
    "slug": "oita-official-002-066-2026",
    "title": "津久見市 プレママスマイル応援給付事業",
    "organization": "津久見市",
    "maxAmount": "1人につき2万円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津久見市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2023年4月3日 申請日において、本市に居住し、かつ、本市の住民基本台帳に記載されている者 申請日から1年以上本市に居住する見込みがあり、かつ、本市の住民基本台帳に記載されている者 給付内容 妊婦さん1人につき 2万円相当分の商品券 を給付し",
    "officialUrl": "https://www.city.tsukumi.oita.jp/site/kosodate/24100.html",
    "sourceName": "プレママスマイル応援給付事業"
  },
  {
    "slug": "oita-official-002-067-2026",
    "title": "杵築市 特殊詐欺等防止機能付き電話機等購入に係る経費を補助します",
    "organization": "杵築市",
    "maxAmount": "補助金額補助対象経費の3分の2（上限10,000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "杵築市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年04月01日 申請した日において、満60歳以上の者又は満60歳以上の者と同一の世帯に属する者であること",
    "officialUrl": "http://www.city.kitsuki.lg.jp/kurashi/bousai_bouhan_anzen/6557.html",
    "sourceName": "特殊詐欺等防止機能付き電話機等購入に係る経費を補助します"
  },
  {
    "slug": "oita-official-002-068-2026",
    "title": "杵築市 骨髄バンクの骨髄移植ドナーを支援します",
    "organization": "杵築市",
    "maxAmount": "上限）※日額2万円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "杵築市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2018年08月01日 交付します",
    "officialUrl": "https://www.city.kitsuki.lg.jp/kenkofukushi/kenkou_iryou/4582.html",
    "sourceName": "骨髄バンクの骨髄移植ドナーを支援します"
  },
  {
    "slug": "oita-official-002-069-2026",
    "title": "津久見市 出会い応援助成金",
    "organization": "津久見市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "津久見市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年5月24日 交付する制度を始めました",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/6/27191.html",
    "sourceName": "出会い応援助成金"
  },
  {
    "slug": "oita-official-002-070-2026",
    "title": "臼杵市 母子・父子・寡婦福祉資金の貸付制度",
    "organization": "臼杵市",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "臼杵市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2019年2月14日 母子・父子・寡婦福祉資金の貸付制度 公開日 2019年2月14日 更新日 2025年4月22日 母子家庭の母および父子家庭の父、並びに寡婦の生活の支援に繋がること、併せてお子さんの福祉を推進するため、扶養する子どもの修学のための資金、母およ",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014020500554/",
    "sourceName": "母子・父子・寡婦福祉資金の貸付制度"
  },
  {
    "slug": "oita-official-002-071-2026",
    "title": "臼杵市 障害児福祉手当",
    "organization": "臼杵市",
    "maxAmount": "支給額14,880円",
    "maxAmountNum": 14880,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2019年2月13日 支給します",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014021300092/",
    "sourceName": "障害児福祉手当"
  },
  {
    "slug": "oita-official-002-072-2026",
    "title": "臼杵市 老人クラブ助成事業",
    "organization": "臼杵市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2019年2月5日 申請書類様式 申請書類 ①補助金交付申請書[DOCX：11.5KB] ②事業計画書[DOCX：10.5KB] ③計画表④収支予算書_別紙内訳[XLSX：16.6KB] ⑤事業着手届[DOCX：10.3KB] ⑥概算請求書（１",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014020600797/",
    "sourceName": "老人クラブ助成事業"
  },
  {
    "slug": "oita-official-002-073-2026",
    "title": "臼杵市 骨髄移植ドナー等支援事業",
    "organization": "臼杵市",
    "maxAmount": "2万円を交付",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "臼杵市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2017年11月2日 交付します",
    "officialUrl": "https://www.city.usuki.oita.jp/article/2017103100016/",
    "sourceName": "骨髄移植ドナー等支援事業"
  },
  {
    "slug": "oita-official-002-074-2026",
    "title": "臼杵市 おおいた子育てほっとクーポン",
    "organization": "臼杵市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和4年8月1日 交付額 交付額 ●平成31年4月1日以降に生まれたお子さんの交付額については、次の通りです",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2016082400032/",
    "sourceName": "おおいた子育てほっとクーポン"
  },
  {
    "slug": "oita-official-002-075-2026",
    "title": "津久見市 妊婦のための支援給付",
    "organization": "津久見市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "津久見市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 支給します",
    "officialUrl": "https://www.city.tsukumi.oita.jp/site/kosodate/23567.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "oita-official-002-076-2026",
    "title": "津久見市 空き家の解体について",
    "organization": "津久見市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津久見市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月1日 交付要綱 申込について 事前調査申込書を作成し、必要書類を添えて提出して下さい",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/12/6474.html",
    "sourceName": "空き家の解体について"
  },
  {
    "slug": "oita-official-002-077-2026",
    "title": "津久見市 子ども医療費等の助成の対象者を高校生世代までに拡大します",
    "organization": "津久見市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "津久見市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2023年9月25日 申請手続きが必要です",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/4/25326.html",
    "sourceName": "子ども医療費等の助成の対象者を高校生世代までに拡大します"
  },
  {
    "slug": "oita-official-002-078-2026",
    "title": "臼杵市 臼杵市地域生活支援事業",
    "organization": "臼杵市",
    "maxAmount": "限度額）10万円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "臼杵市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2019年2月14日 臼杵市地域生活支援事業 公開日 2019年2月14日 更新日 2026年7月17日 相談支援事業（無料） 専門のコーディネーターがサービス利用などの相談、病院や施設などとの連携をサポートします。 相談支援会場 場所 連絡先 サポートセンター",
    "officialUrl": "https://www.city.usuki.oita.jp/docs/2014020400403/",
    "sourceName": "臼杵市地域生活支援事業"
  },
  {
    "slug": "oita-official-002-079-2026",
    "title": "津久見市 放課後児童クラブの利用料全額助成について",
    "organization": "津久見市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "津久見市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請書 」を社会福祉課へ提出していただく必要があります（この場合も利用料は発生しません）",
    "officialUrl": "https://www.city.tsukumi.oita.jp/site/kosodate/24522.html",
    "sourceName": "放課後児童クラブの利用料全額助成について"
  },
  {
    "slug": "oita-official-002-080-2026",
    "title": "津久見市 地方創生人材奨学資金返還支援事業について",
    "organization": "津久見市",
    "maxAmount": "最大１００万円",
    "maxAmountNum": 1000000,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "津久見市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請を行ってから最大１０年間（補助上限１００万円） 地方創生人材奨学資金返還支援事業 [PDFファイル] 対象となる奨学資金 １、 津久見市奨学資金に関する条例により貸与する奨学資金 ​ ２、 公益財団法人大分県奨学会が貸与",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/6/24746.html",
    "sourceName": "地方創生人材奨学資金返還支援事業について"
  },
  {
    "slug": "oita-official-002-081-2026",
    "title": "竹田市 妊産婦健診・出産時の交通費・宿泊費を助成します",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kosodate_kyoiku/ninshin_shussan/9286.html",
    "sourceName": "妊産婦健診・出産時の交通費・宿泊費を助成します"
  },
  {
    "slug": "oita-official-002-082-2026",
    "title": "竹田市 妊産婦医療費を助成します",
    "organization": "竹田市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kosodate_kyoiku/ninshin_shussan/8436.html",
    "sourceName": "妊産婦医療費を助成します"
  },
  {
    "slug": "oita-official-002-083-2026",
    "title": "竹田市 不妊症・不育症治療",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/life_scene/ninshin/4969.html",
    "sourceName": "不妊症・不育症治療"
  },
  {
    "slug": "oita-official-002-084-2026",
    "title": "竹田市 竹田市で保育士になりませんか？",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "竹田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/life_scene/nyuen/6700.html",
    "sourceName": "竹田市で保育士になりませんか？"
  },
  {
    "slug": "oita-official-002-085-2026",
    "title": "竹田市 竹田市老朽危険空き家等除去促進事業",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "竹田市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/shinseisho/8981.html",
    "sourceName": "竹田市老朽危険空き家等除去促進事業"
  },
  {
    "slug": "oita-official-002-086-2026",
    "title": "竹田市 竹田市危険ブロック塀等除却事業",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/shinseisho/8978.html",
    "sourceName": "竹田市危険ブロック塀等除却事業"
  },
  {
    "slug": "oita-official-002-087-2026",
    "title": "竹田市 特殊詐欺等被害防止機能付き電話機、防犯カメラの補助について",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "竹田市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/shinseisho/6830.html",
    "sourceName": "特殊詐欺等被害防止機能付き電話機、防犯カメラの補助について"
  },
  {
    "slug": "oita-official-002-088-2026",
    "title": "竹田市 介護人材確保対策について",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "竹田市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kenko_fukushi/fukushi_kaigo/3739.html",
    "sourceName": "介護人材確保対策について"
  },
  {
    "slug": "oita-official-002-089-2026",
    "title": "竹田市 竹田市子育て・高齢者世帯リフォーム支援事業",
    "organization": "竹田市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "housing",
      "employment",
      "nursing"
    ],
    "eligibility": "竹田市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード ごみ検索 イベントカレンダー お問い合わせ お問い合わせフォームへ よく見られるページ 関連施設等のページ 竹田市立図書館 竹田市総合文化ホール グランツたけた 竹田市歴史文化館 竹田市消防本部",
    "officialUrl": "https://www.city.taketa.oita.jp/kenko_fukushi/fukushi_kaigo/4603.html",
    "sourceName": "竹田市子育て・高齢者世帯リフォーム支援事業"
  },
  {
    "slug": "oita-official-002-090-2026",
    "title": "津久見市 同窓会開催費用を助成します！",
    "organization": "津久見市",
    "maxAmount": "補助金額等（1）補助金額：出席者１人当たり2,000円",
    "maxAmountNum": 2000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "津久見市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月14日 交付は、１年度に１回限り",
    "officialUrl": "https://www.city.tsukumi.oita.jp/soshiki/6/32408.html",
    "sourceName": "同窓会開催費用を助成します！"
  }
];
