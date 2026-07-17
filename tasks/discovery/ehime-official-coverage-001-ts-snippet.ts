const ehimeOfficial001Grants: Array<{
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
    "slug": "ehime-official-001-001-2026",
    "title": "松山市 子ども医療費助成",
    "organization": "松山市",
    "maxAmount": "1人あたり5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "松山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年2月27日 申請で行うことができるようになりました",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/jido/kodomoiryou.html",
    "sourceName": "子ども医療費助成"
  },
  {
    "slug": "ehime-official-001-002-2026",
    "title": "松山市 ブロック塀等安全対策補助事業",
    "organization": "松山市",
    "maxAmount": "補助金額●危険なブロック塀等の除却または建替え工事費（税抜き）の3分の2※1m当たり10万円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付要綱 （PDF：178KB） お知らせ 令和8年度 受付開始 令和8年4月15日（水曜日）から申請の受付を開始します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/concrete-block.html",
    "sourceName": "ブロック塀等安全対策補助事業"
  },
  {
    "slug": "ehime-official-001-003-2026",
    "title": "松山市 結婚新生活支援事業",
    "organization": "松山市",
    "maxAmount": "限度額（60万円",
    "maxAmountNum": 600000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年7月15日 申請に必要な書類などご確認いただき、不明な点等がございましたら、お気軽にお問合せください",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/kekkonnshinnseikatsu.html",
    "sourceName": "結婚新生活支援事業"
  },
  {
    "slug": "ehime-official-001-004-2026",
    "title": "松山市 木造住宅耐震改修等補助事業",
    "organization": "松山市",
    "maxAmount": "限度額を55.2万円",
    "maxAmountNum": 552000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "松山市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 受付開始 令和8年4月15日（水曜日）から申請の受付を開始します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/taishin_kaisyu2.html",
    "sourceName": "木造住宅耐震改修等補助事業"
  },
  {
    "slug": "ehime-official-001-005-2026",
    "title": "松山市 木造住宅耐震診断事業",
    "organization": "松山市",
    "maxAmount": "限度額4万円",
    "maxAmountNum": 40000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "松山市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 受付開始 令和8年4月15日（水曜日）から申請の受付を開始します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/taishin_shindan.html",
    "sourceName": "木造住宅耐震診断事業"
  },
  {
    "slug": "ehime-official-001-006-2026",
    "title": "松山市 賃上げ応援奨励金",
    "organization": "松山市",
    "maxAmount": "1人以上の事業者で、補助金額の上限額を50万円",
    "maxAmountNum": 500000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月21日 申請受付を開始します 松山市公式ホームページ PCサイト 松山市ホームページではJavaScriptを使用しています",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/hodo/202604/chinageouenHP.html",
    "sourceName": "賃上げ応援奨励金"
  },
  {
    "slug": "ehime-official-001-007-2026",
    "title": "松山市 妊婦支援給付金",
    "organization": "松山市",
    "maxAmount": "1人につき5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "松山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年6月16日 交付時)、妊娠8か月時、出産後に保健師等による面談やアンケートを実施しています",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/iryo/bosikenko/syussankosodateouen.html",
    "sourceName": "妊婦支援給付金"
  },
  {
    "slug": "ehime-official-001-008-2026",
    "title": "松山市 重度心身障害者医療費助成制度",
    "organization": "松山市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "松山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月23日 申請で行うことができるようになりました",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/shogai/iryo/juusin.html",
    "sourceName": "重度心身障害者医療費助成制度"
  },
  {
    "slug": "ehime-official-001-009-2026",
    "title": "松山市 小学校給食費無償化",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月28日 交付金に、市独自の支援を加え、小学校の給食費を無償化します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kosodate/kyuusyoku/gakkoukyuusyokuhi.html",
    "sourceName": "小学校給食費無償化"
  },
  {
    "slug": "ehime-official-001-010-2026",
    "title": "松山市 介護保険住宅改修費の支給",
    "organization": "松山市",
    "maxAmount": "限度額は利用者負担割合が1割の場合18万円",
    "maxAmountNum": 180000,
    "category": "housing",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "松山市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年1月1日 支給・『住宅改修の手引き』（第4版） 松山市公式ホームページ PCサイト 松山市ホームページではJavaScriptを使用しています",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kaigohoken/kaigohoken/hokensa-bisu/zaitaku/jtks_tebiki.html",
    "sourceName": "介護保険住宅改修費の支給"
  },
  {
    "slug": "ehime-official-001-011-2026",
    "title": "松山市 ゼロカーボンシティ推進補助金",
    "organization": "松山市",
    "maxAmount": "補助金額・予算残について補助対象物補助金額受付状況1家庭用燃料電池システム上限6万円",
    "maxAmountNum": 60000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 交付します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/zero-carbon.html",
    "sourceName": "ゼロカーボンシティ推進補助金"
  },
  {
    "slug": "ehime-official-001-012-2026",
    "title": "松山市 生産性向上デジタル化補助金",
    "organization": "松山市",
    "maxAmount": "補助金額：上限100万円",
    "maxAmountNum": 1000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月16日 交付します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/sangyo/chusyoukigyou/seisandejitaru.html",
    "sourceName": "生産性向上デジタル化補助金"
  },
  {
    "slug": "ehime-official-001-013-2026",
    "title": "松山市 DX推進補助金",
    "organization": "松山市",
    "maxAmount": "上限額300万円",
    "maxAmountNum": 3000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月25日 交付金等を受けている者 (3)宗教活動又は政治活動に係る事業を行っている者 (4)公的な資金の使途として社会通念上不適切であると判断される事業を行っている者 (5)風俗営業等の規制及び業務の適正化等に関する法律（昭和23年法",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/sangyo/chusyoukigyou/DXsuishin.html",
    "sourceName": "DX推進補助金"
  },
  {
    "slug": "ehime-official-001-014-2026",
    "title": "松山市 幼児教育・保育の無償化と保育料",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2025年10月24日 提出等）の場合、税額が確定するまでの間、最高額の利用者負担額（保育料）で仮決定します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kosodate/boshi/hoikuichiran/sonota/hoikuryou.html",
    "sourceName": "幼児教育・保育の無償化と保育料"
  },
  {
    "slug": "ehime-official-001-015-2026",
    "title": "松山市 重度障害者タクシー利用助成事業",
    "organization": "松山市",
    "maxAmount": "助成額及び対象者従来令和8年度～一般タクシー助成額乗車1回につき580円",
    "maxAmountNum": 580,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "松山市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年5月8日 交付します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/shogai/shakaisanka/syougaitaxi.html",
    "sourceName": "重度障害者タクシー利用助成事業"
  },
  {
    "slug": "ehime-official-001-016-2026",
    "title": "松山市 まつやま笑顔ドック",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給申請書兼利用者負担額減額・免除等申請書 情報が見つからないときは よくある質問 広告枠 ※広告の内容等に関する一切の責任は、広告主等に帰属します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/iryo/zukuri/kensin/egaodokku.html",
    "sourceName": "まつやま笑顔ドック"
  },
  {
    "slug": "ehime-official-001-017-2026",
    "title": "松山市 わが家のリフォーム応援事業",
    "organization": "松山市",
    "maxAmount": "補助金額「補助対象工事」×10％（上限20万円",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "松山市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年7月10日 募集 令和8年度 わが家のリフォーム応援事業 本文ここから 令和8年度 わが家のリフォーム応援事業 更新日：2026年7月10日 印刷 お知らせ 第2期事前申請について【令和8年7月10日更新】 ●令和8年度「わが家のリフォ",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/bosyu/wagaya.html",
    "sourceName": "わが家のリフォーム応援事業"
  },
  {
    "slug": "ehime-official-001-018-2026",
    "title": "松山市 出産世帯奨学金返還支援事業",
    "organization": "松山市",
    "maxAmount": "限度額20万円",
    "maxAmountNum": 200000,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "employment",
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月18日 交付（不交付）決定通知書は、不備等がなければ申請から約2～3カ月後の送付となります",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/jido/syougakukinn.html",
    "sourceName": "出産世帯奨学金返還支援事業"
  },
  {
    "slug": "ehime-official-001-019-2026",
    "title": "松山市 創業資金利子補助金（日本政策金融公庫分）",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年3月19日 交付時まで事業を継続していること 補助対象期間 利子を支払い始めた月から2年間 利子補助率 年1.0％以内(1円未満切捨て) 利子補助額 毎年1月から12月までに返済した利子に対して補助額を算定します",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/sangyo/chusyoukigyou/sougyo.html",
    "sourceName": "創業資金利子補助金（日本政策金融公庫分）"
  },
  {
    "slug": "ehime-official-001-020-2026",
    "title": "松山市 雨水利用促進助成制度",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年4月1日 交付しています",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/usuiriyousokusinn.html",
    "sourceName": "雨水利用促進助成制度"
  },
  {
    "slug": "ehime-official-001-021-2026",
    "title": "松山市 災害に遭われた方の介護保険第1号保険料及び介護サービス利用者負担額の減免について",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年3月7日 申請など】 新着情報 災害に遭われた方の介護保険第1号保険料及び介護サービス利用者負担額の減免について 本文ここから 災害に遭われた方の介護保険第1号保険料及び介護サービス利用者負担額の減免について 更新日：2025年3月7",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kaigohoken/oshirase/shinchaku/kaigosaigaigenmen.html",
    "sourceName": "災害に遭われた方の介護保険第1号保険料及び介護サービス利用者負担額の減免について"
  },
  {
    "slug": "ehime-official-001-022-2026",
    "title": "松山市 児童扶養手当",
    "organization": "松山市",
    "maxAmount": "限度額一覧表（請求者・受給資格者）（令和6年11月改正）扶養親族等の数全部支給（収入目安）全部支給（所得）一部支給（収入目安）一部支給（所得）0人142万円",
    "maxAmountNum": 1420000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給要件 日本国内に住所があって、次のいずれかに該当する児童（18歳に達する日以後の最初の3月31日までの間にある者、又は20歳未満で政令の定める程度の障害の状態にある者）を監護している母、又は監護しかつ生計を同じくしている",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/hitorioya/jidohuyoteate.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "ehime-official-001-023-2026",
    "title": "松山市 母子父子寡婦福祉資金貸付事業",
    "organization": "松山市",
    "maxAmount": "限度額等貸付種類及び限度額等種類対象者資金の内容貸付限度額据置き期間償還期限事業開始母・父・寡婦新たに事業を開始するために必要な資金3,720,000円",
    "maxAmountNum": 3720000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月13日 期限 事業開始 母・父・寡婦 新たに事業を開始するために必要な資金 3,720,000円（個人） 5,580,000円（団体） 貸付けの日から1年 据置期間経過後7年以内 事業継続 母・父・寡婦 現在営んでいる事業を継続する",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/hitorioya/bosifusikahukasituke.html",
    "sourceName": "母子父子寡婦福祉資金貸付事業"
  },
  {
    "slug": "ehime-official-001-024-2026",
    "title": "松山市 松山市小児科新規開業促進補助金",
    "organization": "松山市",
    "maxAmount": "補助金額対象経費に対して1,000万円",
    "maxAmountNum": 10000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年4月12日 交付を受けていないこと",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/iryo/kyubyokyukyu/syonikakaigyo.html",
    "sourceName": "松山市小児科新規開業促進補助金"
  },
  {
    "slug": "ehime-official-001-025-2026",
    "title": "松山市 浸水し尿緊急くみ取り助成",
    "organization": "松山市",
    "maxAmount": "助成額2,000円",
    "maxAmountNum": 2000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年11月6日 受付時間 ： 午前8時から午後7時（1月1日から3日は休み） 受付時間外は夜間・休日連絡先089-948-6685へご連絡ください Copyright &copy; Matsuyama City All rights res",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/seikatsu/jyokasyori/shisuisinyou.html",
    "sourceName": "浸水し尿緊急くみ取り助成"
  },
  {
    "slug": "ehime-official-001-026-2026",
    "title": "松山市 松山市ふれあい・いきいきサロン活動支援事業",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月20日 交付その他の助成を受けていないこと （5）本市の他の事務事業の団体登録等を行っていないこと （6）親族のみで構成されるなど、活動の実態が親族との交流に限定される団体でないこと 次の条件を満たすこと 通常サロンの条件 緩和型サ",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kaigohoken/koureisyashien/ippannkaigo/salon.html",
    "sourceName": "松山市ふれあい・いきいきサロン活動支援事業"
  },
  {
    "slug": "ehime-official-001-027-2026",
    "title": "松山市 成年後見制度利用支援事業",
    "organization": "松山市",
    "maxAmount": "限度額（月額30,000円",
    "maxAmountNum": 30000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年4月19日 申請について 松山市では、成年被後見人等（成年被後見人、被保佐人、被補助人）の収入や資産等の状況から、成年後見人等（成年後見人、保佐人、補助人）に対する報酬を負担することが困難な場合に、報酬の助成を行っています",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kaigohoken/koureisyashien/ninchisho/koukenseidoryousien.html",
    "sourceName": "成年後見制度利用支援事業"
  },
  {
    "slug": "ehime-official-001-028-2026",
    "title": "松山市 子育て短期支援事業",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月12日 募集！ こども意見表明 ファシリテーター養成講座（令和8年1月24日開催） 「ライフデザイン×まちづくり ワークショップin松山」を開催しました ライフプランニング支援 こども意見ファシリテーター養成講座（令和7年7月18日",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kosodate/boshi/kosodatetankisien.html",
    "sourceName": "子育て短期支援事業"
  },
  {
    "slug": "ehime-official-001-029-2026",
    "title": "松山市 出産世帯応援事業",
    "organization": "松山市",
    "maxAmount": "限度額対象児童の父母の両方が当該出生日において35歳以下の場合「30万円",
    "maxAmountNum": 300000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月17日 交付（不交付）決定通知書は、不備等がなければ申請から約2～3カ月後の送付となります",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/jido/syussannouen.html",
    "sourceName": "出産世帯応援事業"
  },
  {
    "slug": "ehime-official-001-030-2026",
    "title": "松山市 児童手当",
    "organization": "松山市",
    "maxAmount": "支給額支給額表年齢金額0歳～3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年5月29日 提出が原則不要となりました 令和8年度児童手当現況届のご案内について 目次 1",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/jido/jidouteate.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "ehime-official-001-031-2026",
    "title": "松山市 医療費助成",
    "organization": "松山市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年3月30日 申請で行うことができるようになりました ",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/shakai/iryouhijosei.html",
    "sourceName": "医療費助成"
  },
  {
    "slug": "ehime-official-001-032-2026",
    "title": "松山市 子どもの医療費助成制度（養育医療）",
    "organization": "松山市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "松山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年3月31日 申請方法 必要書類を揃えて、窓口（下記「お問い合わせ」参照）まで速やかにご提出ください",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/iryo/bosikenko/yoikuiryo_kyufu.html",
    "sourceName": "子どもの医療費助成制度（養育医療）"
  },
  {
    "slug": "ehime-official-001-033-2026",
    "title": "松山市 慢性的な疾病を抱えているお子様（小児慢性特定疾病児童等）への支援制度",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年9月26日 募集します 令和8年度 パパのオンライン離乳食講座 プレコンセプションケアに関する相談窓口 プレコンセプションケア教育・普及啓発について プレコンセプションケア推進に関する連携協定について プレコンセプションケア検査の公費負",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/iryo/bosikenko/syoman.html",
    "sourceName": "慢性的な疾病を抱えているお子様（小児慢性特定疾病児童等）への支援制度"
  },
  {
    "slug": "ehime-official-001-034-2026",
    "title": "松山市 敬老マッサージ補助事業",
    "organization": "松山市",
    "maxAmount": "補助額施術1回につき1,000円",
    "maxAmountNum": 1000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月23日 申請方法等】をご確認ください",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/korei/koureishakazoku/keiroumassa-ji.html",
    "sourceName": "敬老マッサージ補助事業"
  },
  {
    "slug": "ehime-official-001-035-2026",
    "title": "松山市 松山市猫不妊・去勢手術補助事業",
    "organization": "松山市",
    "maxAmount": "補助金額（上限）飼い猫飼い主のいない猫オス1,000円",
    "maxAmountNum": 1000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "松山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請受付状況（予算残額12,373,000円） 種別 件数 金額 飼い猫オス 23件 23,000円 飼い猫メス 31件 62,000円 飼い主のいない猫オス 169件 507,000円 飼い主のいない猫メス 205件 1,",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/aigo/sien/funinkiyosei.html",
    "sourceName": "松山市猫不妊・去勢手術補助事業"
  },
  {
    "slug": "ehime-official-001-036-2026",
    "title": "松山市 地域猫活動支援事業",
    "organization": "松山市",
    "maxAmount": "上限額は14,000円",
    "maxAmountNum": 14000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 提出が必要です",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/kurashi/aigo/sien/tiikinekoshien.html",
    "sourceName": "地域猫活動支援事業"
  },
  {
    "slug": "ehime-official-001-037-2026",
    "title": "松山市 出産育児一時金",
    "organization": "松山市",
    "maxAmount": "1人につき50万円",
    "maxAmountNum": 500000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年1月28日 支給 国民健康保険に加入している方が妊娠85日以上で出産（死産・流産含む）した場合、世帯主からの申請により、出生児1人につき50万円(産科医療補償制度対象外の出産の場合48万8千円)が支給されます",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/tetsuzuki/kokuho/kokuhokyuhu/syussanikuji.html",
    "sourceName": "出産育児一時金"
  },
  {
    "slug": "ehime-official-001-038-2026",
    "title": "松山市 高額介護合算療養費",
    "organization": "松山市",
    "maxAmount": "限度額に達していなくても、同じ月内のレセプト1件当り21，000円",
    "maxAmountNum": 21000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年8月1日 申請により超えた分が高額医療・高額介護合算療養費として支給されます",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/tetsuzuki/kokuho/kokuhokyuhu/kougakugassan.html",
    "sourceName": "高額介護合算療養費"
  },
  {
    "slug": "ehime-official-001-039-2026",
    "title": "松山市 一部負担金の減免等",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年12月2日 申請により病院窓口での一部負担金を免除、減額または徴収を猶予することができます",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/tetsuzuki/kokuho/kokuhokyuhu/ichibuhutankin.html",
    "sourceName": "一部負担金の減免等"
  },
  {
    "slug": "ehime-official-001-040-2026",
    "title": "松山市 緑町土砂災害被災者生活再建金の給付について",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "松山市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年4月18日 受付終了】調査票の提出について 令和6年10月31日（木曜日）をもって、調査票の受付を終了しました",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/bosai/bousai/saigai/r6/midorimachi_kyufukin.html",
    "sourceName": "緑町土砂災害被災者生活再建金の給付について"
  },
  {
    "slug": "ehime-official-001-041-2026",
    "title": "松山市 災害に遭われた方の後期高齢者医療保険料及び後期高齢者医療一部負担金の減免について",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "松山市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年11月5日 申請の方法 次の書類をご提出ください",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/korei/koiryo/saigaigenmen.html",
    "sourceName": "災害に遭われた方の後期高齢者医療保険料及び後期高齢者医療一部負担金の減免について"
  },
  {
    "slug": "ehime-official-001-042-2026",
    "title": "松山市 日常生活用具給付等事業",
    "organization": "松山市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "松山市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年5月9日 申請される場合は長寿福祉課までお問い合わせください",
    "officialUrl": "https://www.city.matsuyama.ehime.jp/kurashi/fukushi/korei/koureishakazoku/nitijyouyougu.html",
    "sourceName": "日常生活用具給付等事業"
  },
  {
    "slug": "ehime-official-001-043-2026",
    "title": "今治市 防災用品の購入費用の一部を補助します",
    "organization": "今治市",
    "maxAmount": "補助金額購入費用の3分の2以内※千円未満は切り捨て限度額1万円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "今治市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年7月1日 申請受付期間 令和8年7月1日から令和9年2月1日まで （午前8時30分から午後5時15分）（土日・祝日を除く） ただし、受付期間中においても申込が上限に達した場合は受付を終了いたします",
    "officialUrl": "https://www.city.imabari.ehime.jp/bousai/saigai-mochidashi-shien/",
    "sourceName": "防災用品の購入費用の一部を補助します"
  },
  {
    "slug": "ehime-official-001-044-2026",
    "title": "今治市 今治市観光事業者物価等高騰対応事業費補助金",
    "organization": "今治市",
    "maxAmount": "1人の宿泊施設A、50人の宿泊施設Bの2施設を営業している場合11＋50＝61人61×2,000＝122,000申請額122,000円",
    "maxAmountNum": 122000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年12月28日 交付金を活用し、物価・エネルギー価格高騰の影響を大きく受ける観光事業者に対し、高騰している物価・燃料費の一部を助成することにより、事業継続を支援することを目的とする",
    "officialUrl": "https://www.city.imabari.ehime.jp/kankou/hojo/001/",
    "sourceName": "今治市観光事業者物価等高騰対応事業費補助金"
  },
  {
    "slug": "ehime-official-001-045-2026",
    "title": "今治市 今治市奨学金返還支援制度導入企業応援補助金",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "今治市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請 申請受付後、基金へ出捐した金額の全額を支援 補助要件 市内に事業所を有する個人又は市内に本店を有する法人 「愛媛県中核産業人材確保のための奨学金返還支援制度（IT人材確保枠含む）」の登録企業であること",
    "officialUrl": "https://www.city.imabari.ehime.jp/sangyou/shogakukin_henkansien/",
    "sourceName": "今治市奨学金返還支援制度導入企業応援補助金"
  },
  {
    "slug": "ehime-official-001-046-2026",
    "title": "今治市 太陽光発電設備等再エネ設備導入に対し補助を行います（今治市脱炭素先行地域づくり事業費補助金）",
    "organization": "今治市",
    "maxAmount": "上限予定件数（先着順）太陽光発電設備【必須】（屋根置型又はソーラーカーポート）2/3※ただし、設置容量1kWあたり上限29万円",
    "maxAmountNum": 290000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年5月18日 交付金 規程 実施要領別紙１・別表1-4（環境省） をご覧ください",
    "officialUrl": "https://www.city.imabari.ehime.jp/kankyou/datutanso/hojo/",
    "sourceName": "太陽光発電設備等再エネ設備導入に対し補助を行います（今治市脱炭素先行地域づくり事業費補助金）"
  },
  {
    "slug": "ehime-official-001-047-2026",
    "title": "今治市 奨学金制度",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "奨学金制度 | 教育大綱推進課 | 今治市 本文へ移動 Multilingual サイト内検索 --> トップページ 暮らしのガイド 観光情報 事業者向け イベント 市政情報 トップページ ｜ 教育大綱推進課 ｜ 奨学金制度 奨学金制度 経",
    "officialUrl": "https://www.city.imabari.ehime.jp/kyouikut/shogakukin/",
    "sourceName": "奨学金制度"
  },
  {
    "slug": "ehime-official-001-048-2026",
    "title": "今治市 今治市デジタル給付",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "今治市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年10月1日 交付やボランティアなどへの参加意欲を向上させるインセンティブ給付を、 １円単位で決済が可能なデジタルクーポンに変更し、個人のPayPayアプリに配布可能な仕組みを導入します",
    "officialUrl": "https://www.city.imabari.ehime.jp/d-kyufu/",
    "sourceName": "今治市デジタル給付"
  },
  {
    "slug": "ehime-official-001-049-2026",
    "title": "今治市 家庭用のエアコン・LED照明器具の購入補助を行います",
    "organization": "今治市",
    "maxAmount": "補助金額購入額（税抜）4万円",
    "maxAmountNum": 40000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "今治市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年6月1日 交付します",
    "officialUrl": "https://www.city.imabari.ehime.jp/kankyou/hojo/001/",
    "sourceName": "家庭用のエアコン・LED照明器具の購入補助を行います"
  },
  {
    "slug": "ehime-official-001-050-2026",
    "title": "今治市 防犯対策機器の購入・設置補助を行います",
    "organization": "今治市",
    "maxAmount": "補助額（1）屋外防犯カメラ補助対象者：市内に所在する居住用建物または事業用建物の所有者補助内容屋外防犯カメラを購入し設置する費用の2/3以内補助上限額上限5万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "今治市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年7月1日 申請受付期間 令和8年7月1日～令和9年2月1日 ※ただし予算がなくなり次第、終了となります",
    "officialUrl": "https://www.city.imabari.ehime.jp/siminsankaku/hojo/001/",
    "sourceName": "防犯対策機器の購入・設置補助を行います"
  },
  {
    "slug": "ehime-official-001-051-2026",
    "title": "今治市 今治市雇用環境整備支援事業費助成金",
    "organization": "今治市",
    "maxAmount": "上限枠1/21事業者あたり2,000万円",
    "maxAmountNum": 20000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年6月22日 交付金を活用し、長引く物価高騰の影響により、建築又は改修コストの高騰を受けた市内事業者の負担の軽減を図り、もって深刻な人手不足への対処並びに従業員の確保及び定着に資する雇用環境整備事業を行う場合に、その経費の一部を支援します",
    "officialUrl": "https://www.city.imabari.ehime.jp/sangyou/hojo/006/",
    "sourceName": "今治市雇用環境整備支援事業費助成金"
  },
  {
    "slug": "ehime-official-001-052-2026",
    "title": "今治市 今治市物価高騰対応ＤＸ・ＧＸ緊急対策事業補助金",
    "organization": "今治市",
    "maxAmount": "上限枠1/21事業者あたり1,000万円",
    "maxAmountNum": 10000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付金を活用し、エネルギー価格の高騰に直面する市内の事業者に対し、業務効率化や省コスト化等、生産性向上のためにＤＸ又はＧＸに資する設備投資を行う場合に、その経費の一部を支援します",
    "officialUrl": "https://www.city.imabari.ehime.jp/sangyou/hojo/005/",
    "sourceName": "今治市物価高騰対応ＤＸ・ＧＸ緊急対策事業補助金"
  },
  {
    "slug": "ehime-official-001-053-2026",
    "title": "今治市 今治市ＤＸ推進事業費補助金",
    "organization": "今治市",
    "maxAmount": "上限補助率研究開発枠50万円",
    "maxAmountNum": 500000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 募集開始 募集要領（PDF 920KB） （1）申請期間 研究開発枠 令和8年10月30日（金曜日）まで イノベーション推進枠（トライアングルエヒメ活用枠を含む） 令和8年7月31日（金曜日）まで ※イノベーション推進枠につ",
    "officialUrl": "https://www.city.imabari.ehime.jp/sangyou/hojo/002/",
    "sourceName": "今治市ＤＸ推進事業費補助金"
  },
  {
    "slug": "ehime-official-001-054-2026",
    "title": "今治市 今治市技術開発・販路開拓事業費補助金",
    "organization": "今治市",
    "maxAmount": "上限補助率研究開発枠100万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 募集開始 募集要領（PDF 920KB） （1）申請期間 研究開発枠 令和8年10月30日（金曜日）まで イノベーション推進枠 令和8年7月31日（金曜日）まで ※イノベーション推進枠について、受付締切り後、書類・プレゼンテ",
    "officialUrl": "https://www.city.imabari.ehime.jp/sangyou/hojo/003/",
    "sourceName": "今治市技術開発・販路開拓事業費補助金"
  },
  {
    "slug": "ehime-official-001-055-2026",
    "title": "今治市 今治市UIJターン学生就職等応援助成金",
    "organization": "今治市",
    "maxAmount": "最大6万円",
    "maxAmountNum": 60000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "今治市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月1日 交付要綱及びよくある質問（FAQ）をご確認ください",
    "officialUrl": "https://www.city.imabari.ehime.jp/sangyou/hojo/004/",
    "sourceName": "今治市UIJターン学生就職等応援助成金"
  },
  {
    "slug": "ehime-official-001-056-2026",
    "title": "今治市 高齢者の帯状疱疹予防接種",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "今治市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年4月1日 申請をしていれば、後日払い戻しの申請をすることで費用の一部を公費負担で接種することができます",
    "officialUrl": "https://www.city.imabari.ehime.jp/kenkou/kourei_taijouhousin/",
    "sourceName": "高齢者の帯状疱疹予防接種"
  },
  {
    "slug": "ehime-official-001-057-2026",
    "title": "今治市 こども医療費助成制度",
    "organization": "今治市",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付を受けてください",
    "officialUrl": "https://imakoso-imabari.jp/service/kodomo-iryohi/",
    "sourceName": "こども医療費助成制度"
  },
  {
    "slug": "ehime-official-001-058-2026",
    "title": "今治市 空き家リフォーム補助金",
    "organization": "今治市",
    "maxAmount": "補助金額住宅改修・家財道具搬出等費用の3分の2または以下の上限額のいずれか低い額（1,000円",
    "maxAmountNum": 1000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和3年4月1日 募集は終了しました --> 愛媛県外から移住した方が居住を目的として購入・賃借した空き家の住宅改修・家財道具搬出等について費用を補助します",
    "officialUrl": "https://www.city.imabari.ehime.jp/chiiki/ijyu/hojokin_reform/",
    "sourceName": "空き家リフォーム補助金"
  },
  {
    "slug": "ehime-official-001-059-2026",
    "title": "今治市 スタートアップ創業支援補助金",
    "organization": "今治市",
    "maxAmount": "上限補助率起業チャレンジ支援事業20万円",
    "maxAmountNum": 200000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請受付を開始します",
    "officialUrl": "https://www.city.imabari.ehime.jp/sangyou/startup/",
    "sourceName": "スタートアップ創業支援補助金"
  },
  {
    "slug": "ehime-official-001-060-2026",
    "title": "今治市 妊婦のための支援給付",
    "organization": "今治市",
    "maxAmount": "支給額妊婦一人あたり5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "今治市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年3月31日 提出のあった方に対し、下記の金額が支給されます",
    "officialUrl": "https://imakoso-imabari.jp/service/ninpusien/",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "ehime-official-001-061-2026",
    "title": "今治市 ブロック塀等安全対策事業補助制度",
    "organization": "今治市",
    "maxAmount": "補助金額補助対象経費の2/3以内で限度額30万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年4月6日 交付決定前に着手した工事 ２",
    "officialUrl": "https://www.city.imabari.ehime.jp/kenchiku/burokkubei/",
    "sourceName": "ブロック塀等安全対策事業補助制度"
  },
  {
    "slug": "ehime-official-001-062-2026",
    "title": "今治市 重度障がい者（児）タクシー利用助成",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "令和8年3月26日 交付を受けるための手順 １",
    "officialUrl": "https://www.city.imabari.ehime.jp/syougaifukus/taxi.html",
    "sourceName": "重度障がい者（児）タクシー利用助成"
  },
  {
    "slug": "ehime-official-001-063-2026",
    "title": "今治市 国民健康保険短期人間ドック",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "今治市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年5月18日 国民健康保険短期人間ドック | 保険年金課 | 今治市 本文へ移動 Multilingual サイト内検索 --> トップページ 暮らしのガイド 観光情報 事業者向け イベント 市政情報 トップページ ｜ 保険年金課 ｜ 国民健康保険短期人",
    "officialUrl": "https://www.city.imabari.ehime.jp/hoken/tanki-ningendock/",
    "sourceName": "国民健康保険短期人間ドック"
  },
  {
    "slug": "ehime-official-001-064-2026",
    "title": "今治市 住もういまばり！移住者住宅取得事業費補助金",
    "organization": "今治市",
    "maxAmount": "補助金額上限額：50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "今治市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和4年3月31日 申請を行う 前5年の間 に市外（日本国内に限る）から転入した方、または新築又は購入後に転入しようとする方で、次の条件を全て満たす方 住宅の新築又は購入を行おうとする方又はその配偶者 新築又は購入計画の申請を行う時点で、同居す",
    "officialUrl": "https://www.city.imabari.ehime.jp/chiiki/ijyu/hojokin_jutaku/",
    "sourceName": "住もういまばり！移住者住宅取得事業費補助金"
  },
  {
    "slug": "ehime-official-001-065-2026",
    "title": "今治市 不妊治療費の助成（保険診療適用分）",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年4月30日 申請時に夫婦のいずれかが今治市内に住所を有し、かつ、その期間が1年以上であること（事実婚を含む） 申請時点で市税の滞納がないこと 他の自治体で重複して助成を受けていないこと 助成額について 保険適用となる不妊治療等（処方箋に",
    "officialUrl": "https://imakoso-imabari.jp/service/funin/",
    "sourceName": "不妊治療費の助成（保険診療適用分）"
  },
  {
    "slug": "ehime-official-001-066-2026",
    "title": "今治市 介護用品の支給",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給 ※平成30年度・31年度金額変更、平成31年度をもって廃止予定 在宅にて、満65歳以上で要介護3・4・5の方を常時介護している方に介護激励金を支給します",
    "officialUrl": "https://www.city.imabari.ehime.jp/kaigo/kazokukaigo/",
    "sourceName": "介護用品の支給"
  },
  {
    "slug": "ehime-official-001-067-2026",
    "title": "今治市 令和8年度市立小学校給食費無償化",
    "organization": "今治市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "今治市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付金（294円/食）を上回る金額については、国の重点支援交付金による補助（15円/食）を行い、令和8年度について 小学校給食費の無償化を実現します",
    "officialUrl": "https://www.city.imabari.ehime.jp/kyushoku/kyushokuhi/R8/",
    "sourceName": "令和8年度市立小学校給食費無償化"
  },
  {
    "slug": "ehime-official-001-068-2026",
    "title": "今治市 木造住宅耐震診断補助",
    "organization": "今治市",
    "maxAmount": "補助金額＞補助対象経費の3分の2以内で限度額5万円",
    "maxAmountNum": 50000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "今治市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年6月26日 申請者の世帯全員に市税の滞納がないこと 耐震診断技術者派遣制度 こちらから耐震診断（派遣制度）の事前申し込みができます",
    "officialUrl": "https://www.city.imabari.ehime.jp/kenchiku/taishin_shindan/",
    "sourceName": "木造住宅耐震診断補助"
  },
  {
    "slug": "ehime-official-001-069-2026",
    "title": "今治市 合併処理浄化槽維持管理費補助金",
    "organization": "今治市",
    "maxAmount": "1万円を限度",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "今治市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請者に、今治市税の滞納がないもの",
    "officialUrl": "https://www.city.imabari.ehime.jp/kankyou/sinyou-joukasou/hojokin_kanri.html",
    "sourceName": "合併処理浄化槽維持管理費補助金"
  }
];
