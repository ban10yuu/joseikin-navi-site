const kagoshimaOfficial007Grants: Array<{
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
    "slug": "kagoshima-official-007-001-2026",
    "title": "中種子町 子ども医療給付（助成）事業について",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "employment",
      "living"
    ],
    "eligibility": "中種子町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請手続きについて 助成を受けるためには、申請を行い、受給資格者証の交付を受ける必要があります",
    "officialUrl": "https://town.nakatane.kagoshima.jp/fukushi/kenko-fukushi/kosodate/kodomoiryou/kodomokyuuhu.html",
    "sourceName": "子ども医療給付（助成）事業について"
  },
  {
    "slug": "kagoshima-official-007-002-2026",
    "title": "中種子町 中種子町創業支援ネットワーク",
    "organization": "中種子町",
    "maxAmount": "上限増額全国商工会連合会の販路開拓等に使用できる小規模事業者持続化補助金の創業枠(最大200万円",
    "maxAmountNum": 2000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和9年3月31日 申請可能となります",
    "officialUrl": "https://town.nakatane.kagoshima.jp/koho/machinojoho/koho-kocho/oshirase/sougyousien.html",
    "sourceName": "中種子町創業支援ネットワーク"
  },
  {
    "slug": "kagoshima-official-007-003-2026",
    "title": "中種子町 中種子町うみがめ奨学金",
    "organization": "中種子町",
    "maxAmount": "月額】大学生、大学院生、専門学校生等・・・・・・50,000円",
    "maxAmountNum": 50000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "令和6年7月17日 募集 出身の学生や卒業生と交流を図る「中種子町奨学交流事業」 奨学生と地域とのつながりを持ち続ける交流事業を実施 町公式SNS（LINE・インスタグラム）への登録 長期休業期間中を利用した町内事業所でのインターンシップ 町内外イベント開催の運営",
    "officialUrl": "https://town.nakatane.kagoshima.jp/kyouiku/kyoiku-bunka/kyoiku/syugakuenjyo/umigamesyougakukin.html",
    "sourceName": "中種子町うみがめ奨学金"
  },
  {
    "slug": "kagoshima-official-007-004-2026",
    "title": "中種子町 養育医療給付申請について",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "中種子町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請について 子どもの予防接種について 保健センターからのお知らせ こども家庭センターりんく 生活支援コーディネーターからのお知らせ 民法等の一部を改正する法律について 物価高対応子育て応援手当について 地域包括支援センター ここから本文です",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/kenko-fukushi/kenko-iryo/hokenkikan/oshirase/youikuiryou-kyuufusinsei.html",
    "sourceName": "養育医療給付申請について"
  },
  {
    "slug": "kagoshima-official-007-005-2026",
    "title": "中種子町 造血細胞移植後の定期予防接種ワクチン再接種費用助成について",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和4年4月1日 申請者が当該予防接種の費用として医療機関に支払った接種費用の額 注釈：再接種を受ける際に、一旦費用をご負担いただきます",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/kenko-fukushi/kenko-iryo/hokenkikan/oshirase/yobousessyu/zouketusaibou.html",
    "sourceName": "造血細胞移植後の定期予防接種ワクチン再接種費用助成について"
  },
  {
    "slug": "kagoshima-official-007-006-2026",
    "title": "中種子町 離島地域不妊治療助成制度について",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "交付について ここから本文です",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/kenko-fukushi/kenko-iryo/hokenkikan/oshirase/funinntiryou.html",
    "sourceName": "離島地域不妊治療助成制度について"
  },
  {
    "slug": "kagoshima-official-007-007-2026",
    "title": "中種子町 出産・子育て応援事業について",
    "organization": "中種子町",
    "maxAmount": "1人につき5万円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "中種子町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和4年4月1日 交付について ここから本文です",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/kenko-fukushi/kenko-iryo/hokenkikan/hokencenter/syusan-kosodate-ouen.html",
    "sourceName": "出産・子育て応援事業について"
  },
  {
    "slug": "kagoshima-official-007-008-2026",
    "title": "中種子町 がん患者アピアランスケア支援事業について",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付申請等について ここから本文です",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/kenko-fukushi/kenko-iryo/hokenkikan/oshirase/gannwigzyosei.html",
    "sourceName": "がん患者アピアランスケア支援事業について"
  },
  {
    "slug": "kagoshima-official-007-009-2026",
    "title": "中種子町 物価高対応子育て応援手当について",
    "organization": "中種子町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給状況について 物価高対応子育て応援手当について 中種子町役場 〒891-3692 鹿児島県熊毛郡中種子町野間5186番地 電話番号：0997-27-1111 ファックス：0997-27-3591 サイトマップ リンク・著作権・免責事項・個人",
    "officialUrl": "https://town.nakatane.kagoshima.jp/kodomo/kodomomirai/bukkataiou.html",
    "sourceName": "物価高対応子育て応援手当について"
  },
  {
    "slug": "kagoshima-official-007-010-2026",
    "title": "中種子町 若年末期がん患者に対する療養支援事業負担金について",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付申請等について ここから本文です",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/kenko-fukushi/kenko-iryo/hokenkikan/oshirase/gannsien.html",
    "sourceName": "若年末期がん患者に対する療養支援事業負担金について"
  },
  {
    "slug": "kagoshima-official-007-011-2026",
    "title": "中種子町 補助金（空き家・空き店舗等）",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "中種子町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "補助金（空き家・空き店舗等） 空き家バンク制度 国土利用計画法に基づく届出について ここから本文です。 補助金（空き家・空き店舗等） 空き店舗等活用整備事業補助金 地域定住支援事業補助金 定住促進住宅整備事業補助金 中種子町役場 〒891-",
    "officialUrl": "https://town.nakatane.kagoshima.jp/tiiki/kurashi/hojkyokin/hojyokin.html",
    "sourceName": "補助金（空き家・空き店舗等）"
  },
  {
    "slug": "kagoshima-official-007-012-2026",
    "title": "中種子町 過疎法等に基づく固定資産税の課税免除について",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "交付を行っています",
    "officialUrl": "https://town.nakatane.kagoshima.jp/tiiki/kasokazeimenjo/kasokazeimenjo.html",
    "sourceName": "過疎法等に基づく固定資産税の課税免除について"
  },
  {
    "slug": "kagoshima-official-007-013-2026",
    "title": "中種子町 帯状疱疹の定期接種について",
    "organization": "中種子町",
    "maxAmount": "助成額生ワクチン：5,000円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中種子町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付される自己負担金免除証明書を使って無料で接種を受けられ ます",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/taijohoshin.html",
    "sourceName": "帯状疱疹の定期接種について"
  },
  {
    "slug": "kagoshima-official-007-014-2026",
    "title": "中種子町 子宮頸がんワクチン（HPVワクチン)について",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請書（PDF：43KB） 請求書（PDF：41KB） （ 申請書および請求書の記入見本（PDF：53KB） ） 接種された予診票の写し 接種されたワクチン接種の領収書 本人確認ができる身分証明書（運転免許証やマイナンバーカード等） 振込先の金",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/hpv.html",
    "sourceName": "子宮頸がんワクチン（HPVワクチン)について"
  },
  {
    "slug": "kagoshima-official-007-015-2026",
    "title": "中種子町 成人用肺炎球菌ワクチン定期接種について",
    "organization": "中種子町",
    "maxAmount": "助成額4,000円",
    "maxAmountNum": 4000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和8年3月31日 支給手続きに必要な書類 申請書及び請求書（ワード：21KB） 【 申請書及び請求書の記入見本】（PDF：53KB） 接種された成人用肺炎球菌ワクチン予診票の写し 接種された成人用肺炎球菌ワクチン接種の領収書 本人確認ができる身分証明書（運転免許",
    "officialUrl": "https://town.nakatane.kagoshima.jp/senter/haien-seijin.html",
    "sourceName": "成人用肺炎球菌ワクチン定期接種について"
  },
  {
    "slug": "kagoshima-official-007-016-2026",
    "title": "中種子町 空き家情報",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "中種子町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "募集しております",
    "officialUrl": "https://town.nakatane.kagoshima.jp/tiiki/kurashi/akiyajyouhou.html",
    "sourceName": "空き家情報"
  },
  {
    "slug": "kagoshima-official-007-017-2026",
    "title": "中種子町 中種子町地域再生交付金",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "中種子町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付金申請の手引（PDF：1,593KB） 」をご確認ください",
    "officialUrl": "https://town.nakatane.kagoshima.jp/tiiki/tiikisaiseikouhukin/tiikisaiseikouhukin.html",
    "sourceName": "中種子町地域再生交付金"
  },
  {
    "slug": "kagoshima-official-007-018-2026",
    "title": "中種子町 中種子町うみがめ奨学金応援事業所",
    "organization": "中種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "中種子町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "募集します",
    "officialUrl": "https://town.nakatane.kagoshima.jp/gyousei/kurasi/kyouiku/syuugakuenzyo/ouenzigyousyo.html",
    "sourceName": "中種子町うみがめ奨学金応援事業所"
  },
  {
    "slug": "kagoshima-official-007-019-2026",
    "title": "南種子町 浄化槽設置整備事業補助金",
    "organization": "南種子町",
    "maxAmount": "補助額5人槽くみ取り又は単独処理浄化槽から小型合併処理浄化槽に替える場合332,000円",
    "maxAmountNum": 332000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "南種子町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和4年4月1日 交付し，合併処理浄化槽の設置を推進しております",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/life/1.html",
    "sourceName": "浄化槽設置整備事業補助金"
  },
  {
    "slug": "kagoshima-official-007-020-2026",
    "title": "南種子町 医療費助成",
    "organization": "南種子町",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請を行ってください",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/healthcare/iryouhijyosei.html",
    "sourceName": "医療費助成"
  },
  {
    "slug": "kagoshima-official-007-021-2026",
    "title": "南種子町 児童扶養手当・特別児童扶養手当について",
    "organization": "南種子町",
    "maxAmount": "支給額（令和7年4月～）※月額【全部支給】第１子：46,690円",
    "maxAmountNum": 46690,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給されます",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/healthcare/24.html",
    "sourceName": "児童扶養手当・特別児童扶養手当について"
  },
  {
    "slug": "kagoshima-official-007-022-2026",
    "title": "南種子町 電力・ガス・食料品等価格高騰重点支援給付金",
    "organization": "南種子町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "南種子町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和７年５月31日 受付終了) 令和５年度南種子町電力・ガス・食料品等価格高騰重点支援給付金(均等割のみ課税世帯分)は，非課税であり，差し押さえの対象にはなりません",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/healthcare/21.html",
    "sourceName": "電力・ガス・食料品等価格高騰重点支援給付金"
  },
  {
    "slug": "kagoshima-official-007-023-2026",
    "title": "南種子町 雇用機会拡充事業公募の開始について",
    "organization": "南種子町",
    "maxAmount": "上限区分補助対象事業費の上限額創業600万円",
    "maxAmountNum": 6000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "募集 地域おこし協力隊（情報発信隊員）を募集します 地域おこし協力隊（移住支援隊員）を募集します 地域活性化に関する包括連携協定 町制施行70周年記念 第４８回南種子町ロケット祭 種子島における宿泊施設等の状況について（お知らせ） 自衛官等募集",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/industry/etc/22.html",
    "sourceName": "雇用機会拡充事業公募の開始について"
  },
  {
    "slug": "kagoshima-official-007-024-2026",
    "title": "南種子町 町制施行70周年記念事業町民団体企画事業補助金",
    "organization": "南種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年10月15日 受付を開始します",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/industry/etc/70th-jigyohojyokin.html",
    "sourceName": "町制施行70周年記念事業町民団体企画事業補助金"
  },
  {
    "slug": "kagoshima-official-007-025-2026",
    "title": "南種子町 がん患者アピアランスケア支援事業について",
    "organization": "南種子町",
    "maxAmount": "1人につき(1)・(2)の区分ごとに1回限り(1)ウィッグ等対象経費と20,000円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請時点で南種子町に住所を有する者 (2) がんと診断され、がん治療を受けた者又は現在受けている者 (3) 他の助成制度で助成を受けていない者 対象経費 (1) ウィッグ等 医療用ウイッグ(全頭用)及び装着に必要な頭皮保護用のネット (2) 乳",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/healthcare/gankanjawiggu.html",
    "sourceName": "がん患者アピアランスケア支援事業について"
  },
  {
    "slug": "kagoshima-official-007-026-2026",
    "title": "南種子町 就学援助制度について",
    "organization": "南種子町",
    "maxAmount": "年額）備考小学校中学校①学用品費等通常必要とする学用品の購入費11,630円",
    "maxAmountNum": 11630,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "令和6年4月1日 支給または生活福祉資金の貸付を受けている方 ・学用品や通学用品等に不自由しており，学校納付金等の納付が困難な方等で，保護者の生活状態が極めて悪いと認められる方 ・その他経済的な理由で就学が困難であると認められた方 （提出された申請書及び所得証明",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/education/syugakuenjyo.html",
    "sourceName": "就学援助制度について"
  },
  {
    "slug": "kagoshima-official-007-027-2026",
    "title": "南種子町 交通安全対策補助制度（地区内連携）",
    "organization": "南種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "南種子町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和3年10月22日 交付金及び物価高騰対応重点支援地方創生臨時交付金の実施状況と効果検証 南種子町食育・地産地消推進計画 高齢者福祉計画・第９期介護保険事業計画 デジタル田園都市国家構想交付金 種子島地域公共交通計画の策定について 地域住宅計画 公立学校情報機器整",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/publicize/chikunairennkei.html",
    "sourceName": "交通安全対策補助制度（地区内連携）"
  },
  {
    "slug": "kagoshima-official-007-028-2026",
    "title": "南種子町 南種子町移住定住促進補助金について",
    "organization": "南種子町",
    "maxAmount": "限度額200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請する方は申請時の年齢が65歳以下の方に限ります",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/industry/etc/ijyuteijyusokushinhojyo.html",
    "sourceName": "南種子町移住定住促進補助金について"
  },
  {
    "slug": "kagoshima-official-007-029-2026",
    "title": "南種子町 令和7年度物価高対応子育て応援手当について",
    "organization": "南種子町",
    "maxAmount": "支給額支給対象児童1名につき2万円",
    "maxAmountNum": 20000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "募集 町制施行70周年記念事業町民団体企画事業補助金 南種子町屋根付きふれあい広場 ネーミングライツスポンサー募集 土地売買等届出書の変更 令和8年経済センサス-活動調査を実施します 南種子町農林水産物加工センター ネーミングライツスポンサー募",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/industry/etc/R7kosodateouenteate.html",
    "sourceName": "令和7年度物価高対応子育て応援手当について"
  },
  {
    "slug": "kagoshima-official-007-030-2026",
    "title": "南種子町 令和7年度地域少子化対策重点推進交付金活用事業",
    "organization": "南種子町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付金活用事業 元Jリーガーによるサッカースクールの開催について 父母の離婚後等の子の養育に関して 外部公益通報について 令和7年度物価高騰対応重点支援地方創生臨時交付金の使途について 令和7年度物価高対応子育て応援手当について 町制施行70周",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/industry/etc/36.html",
    "sourceName": "令和7年度地域少子化対策重点推進交付金活用事業"
  },
  {
    "slug": "kagoshima-official-007-031-2026",
    "title": "南種子町 岩崎育英文化財団「就学支援一時金」",
    "organization": "南種子町",
    "maxAmount": "支給額1世帯当たり3万円",
    "maxAmountNum": 30000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "岩崎育英文化財団「就学支援一時金」 文化・芸術 埋蔵文化財 博物館施設 南種子町奨学資金貸与制度について 公民館 社会教育 社会教育施設 指定学校変更・区域外就学 宇宙留学制度 給食費完全無償化 小・中学校ウェブリンク 二十歳のつどい 南種",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/education/iwasakishienkin.html",
    "sourceName": "岩崎育英文化財団「就学支援一時金」"
  },
  {
    "slug": "kagoshima-official-007-032-2026",
    "title": "南種子町 南種子町奨学資金貸与制度について",
    "organization": "南種子町",
    "maxAmount": "月額大学等月額4万円",
    "maxAmountNum": 40000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南種子町内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "南種子町奨学資金貸与制度について 公民館 社会教育 社会教育施設 指定学校変更・区域外就学 宇宙留学制度 給食費完全無償化 小・中学校ウェブリンク 二十歳のつどい 南種子町「宇宙のまち」奨学金制度について 南種子町「宇宙のまち」奨学金制度の",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/education/syougakukin.html",
    "sourceName": "南種子町奨学資金貸与制度について"
  },
  {
    "slug": "kagoshima-official-007-033-2026",
    "title": "南種子町 後期高齢者の健康増進に係る補助",
    "organization": "南種子町",
    "maxAmount": "補助額一般コース28,000円",
    "maxAmountNum": 28000,
    "category": "nursing",
    "relatedCategories": [
      "medical",
      "living"
    ],
    "eligibility": "南種子町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "申請に必要なもの 被保険者証 ※受診する前に、くらし保健課窓口で補助申請をしてください",
    "officialUrl": "http://www.town.minamitane.kagoshima.jp/healthcare/koureisya.html",
    "sourceName": "後期高齢者の健康増進に係る補助"
  },
  {
    "slug": "kagoshima-official-007-034-2026",
    "title": "屋久島町 移住促進家賃等補助制度",
    "organization": "屋久島町",
    "maxAmount": "補助金額・期間賃貸住宅家賃補助金賃貸住宅家賃補助金の詳細補助金額最大24万円",
    "maxAmountNum": 240000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 申請書等の様式は、このページからダウンロードしてください",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iju_teiju/sumu/1475.html",
    "sourceName": "移住促進家賃等補助制度"
  },
  {
    "slug": "kagoshima-official-007-035-2026",
    "title": "屋久島町 年金生活者支援給付金の請求手続きがはじまりました",
    "organization": "屋久島町",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "屋久島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 請求手続きがはじまりました 更新日：2026年03月10日 ページID : 1622 年金生活者支援給付金は、公的年金などの収入やその他の所得額が一定基準額以下の、年金受給者の生活を支援するために、年金に上乗せして支給されるものです",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/1/1622.html",
    "sourceName": "年金生活者支援給付金の請求手続きがはじまりました"
  },
  {
    "slug": "kagoshima-official-007-036-2026",
    "title": "屋久島町 屋久島町がん患者アピアランスケア支援事業",
    "organization": "屋久島町",
    "maxAmount": "助成額（注意）1,000円",
    "maxAmountNum": 1000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年03月10日 提出してください",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/1/1626.html",
    "sourceName": "屋久島町がん患者アピアランスケア支援事業"
  },
  {
    "slug": "kagoshima-official-007-037-2026",
    "title": "屋久島町 新型コロナウイルス感染症予防接種",
    "organization": "屋久島町",
    "maxAmount": "補助金額12,000円",
    "maxAmountNum": 12000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "屋久島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 申請書」を健康長寿課健康増進係へ提出してください",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/2/2484.html",
    "sourceName": "新型コロナウイルス感染症予防接種"
  },
  {
    "slug": "kagoshima-official-007-038-2026",
    "title": "屋久島町 移住者住宅取得事業等補助事業",
    "organization": "屋久島町",
    "maxAmount": "限度額1.の補助率及び限度額対象経費の10分の1とし、250万円",
    "maxAmountNum": 2500000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "屋久島町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 受付を終了します） 1 補助対象事業 1. 移住者住宅取得費用支援事業（注意：購入前に申請が必要です） 移住者住宅取得費用支援事業の詳細 対象者 新規転入者で、住宅を取得する者 対象経費 新築住宅の取得（土地の取得を含む）に係る経費 中古住宅の",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iju_teiju/sumu/1474.html",
    "sourceName": "移住者住宅取得事業等補助事業"
  },
  {
    "slug": "kagoshima-official-007-039-2026",
    "title": "屋久島町 屋久島町新規漁業就業者生活支援補助金",
    "organization": "屋久島町",
    "maxAmount": "月額50,000円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "屋久島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 交付対象となる者は、個人の漁業者であって、次に掲げる要件を全て満たす者とする",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/jigyo/shien_hojokin/2314.html",
    "sourceName": "屋久島町新規漁業就業者生活支援補助金"
  },
  {
    "slug": "kagoshima-official-007-040-2026",
    "title": "屋久島町 屋久島町特産品等販路拡大補助金事業",
    "organization": "屋久島町",
    "maxAmount": "1人1泊8,000円",
    "maxAmountNum": 8000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年03月10日 申請日に満15歳以上で就業している者 補助金の額 補助金額は、3分の1以内の額とし、5万円を限度とする",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/jigyo/shien_hojokin/2315.html",
    "sourceName": "屋久島町特産品等販路拡大補助金事業"
  },
  {
    "slug": "kagoshima-official-007-041-2026",
    "title": "屋久島町 輸送コスト支援事業",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年03月25日 募集します",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/gyosei/yujinkokkyoritotokubetsusochiho/2088.html",
    "sourceName": "輸送コスト支援事業"
  },
  {
    "slug": "kagoshima-official-007-042-2026",
    "title": "屋久島町 滞在型観光促進事業費補助金について",
    "organization": "屋久島町",
    "maxAmount": "補助金額滞在型観光促進事業（1）企画・開発費旅行商品の造成にかかる経費補助対象経費の2分の1以内1商品につき補助上限額300,000円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年04月30日 交付対象者 補助金の交付対象者は、次に掲げる要件の全てに該当する者 1. 各種税金等を滞納していない者 であること",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/gyosei/yujinkokkyoritotokubetsusochiho/3463.html",
    "sourceName": "滞在型観光促進事業費補助金について"
  },
  {
    "slug": "kagoshima-official-007-043-2026",
    "title": "屋久島町 屋久島町移住支援金",
    "organization": "屋久島町",
    "maxAmount": "支給額世帯（2人以上の家族）の場合：100万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 交付決定を受けた方に、移住先の市町村への申請に基づき移住支援金が交付される制度です",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iju_teiju/sumu/1478.html",
    "sourceName": "屋久島町移住支援金"
  },
  {
    "slug": "kagoshima-official-007-044-2026",
    "title": "屋久島町 口永良部島住民への補助",
    "organization": "屋久島町",
    "maxAmount": "助成額は、1人1日当たり3850円",
    "maxAmountNum": 3850,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "屋久島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 支給申請書(RTFファイル:13.3KB) この記事に関するお問い合わせ先 福祉支援課 福祉係 〒891-4292 鹿児島県熊毛郡屋久島町小瀬田849番地20 電話:0997-43-5900 ファクス:0997-43-5905 福祉支援課へのお",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/chiikifukushi/1967.html",
    "sourceName": "口永良部島住民への補助"
  },
  {
    "slug": "kagoshima-official-007-045-2026",
    "title": "屋久島町 人間ドックの補助が受けられます",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "屋久島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 期限の到来している国民健康保険税を完納している方 前年度にこの補助を受けていない方 人間ドックを受診しようとする年度に集団健診、町内医療機関で個別健診、情報提供を受けていない方 後期高齢医療保険の方 屋久島町に住所を有する方 納付期限の到来して",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/1/1555.html",
    "sourceName": "人間ドックの補助が受けられます"
  },
  {
    "slug": "kagoshima-official-007-046-2026",
    "title": "屋久島町 各種予防接種",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "屋久島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 申請書 (PDFファイル: 88.7KB) 予防接種依頼申請書 (Wordファイル: 17.6KB) 小児インフルエンザ予防接種費用助成事業 （補足）町内実施協力医療機関で行います",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/2/1949.html",
    "sourceName": "各種予防接種"
  },
  {
    "slug": "kagoshima-official-007-047-2026",
    "title": "屋久島町 ねたきり老人等介護手当",
    "organization": "屋久島町",
    "maxAmount": "支給額毎月1万円",
    "maxAmountNum": 10000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 支給します",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/koreifukushi_kaigo/1609.html",
    "sourceName": "ねたきり老人等介護手当"
  },
  {
    "slug": "kagoshima-official-007-048-2026",
    "title": "屋久島町 地域生活支援事業",
    "organization": "屋久島町",
    "maxAmount": "最大10万円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年03月10日 申請書(RTFファイル:100KB) 〇障害者等日中一時支援事業利用登録変更（廃止）届(RTFファイル:91.2KB) 〇自動車運転免許取得費助成 身体障害3級以上の方に免許交付から3カ月以内に申請いただいた方に、入所料、教材費、適性検査料等の",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/shogaifukushi/2913.html",
    "sourceName": "地域生活支援事業"
  },
  {
    "slug": "kagoshima-official-007-049-2026",
    "title": "屋久島町 高齢者のインフルエンザ予防接種",
    "organization": "屋久島町",
    "maxAmount": "補助金額2,000円",
    "maxAmountNum": 2000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 申請書」を健康長寿課健康増進係へ提出してください",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/2/2482.html",
    "sourceName": "高齢者のインフルエンザ予防接種"
  },
  {
    "slug": "kagoshima-official-007-050-2026",
    "title": "屋久島町 屋久島町造血細胞移植後ワクチン再接種費用助成",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年03月10日 申請書 造血細胞移植後ワクチン再接種費用助成交付申請書兼請求書 (PDFファイル: 99.9KB) この記事に関するお問い合わせ先 健康長寿課 〒891-4292 鹿児島県熊毛郡屋久島町小瀬田849番地20 電話:0997-43-5900 ファ",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/2/1615.html",
    "sourceName": "屋久島町造血細胞移植後ワクチン再接種費用助成"
  },
  {
    "slug": "kagoshima-official-007-051-2026",
    "title": "屋久島町 小児インフルエンザ予防接種費用の一部助成",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "屋久島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 公式ページで申請・受付状況を確認",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/2/2483.html",
    "sourceName": "小児インフルエンザ予防接種費用の一部助成"
  },
  {
    "slug": "kagoshima-official-007-052-2026",
    "title": "屋久島町 帯状疱疹ワクチン一部費用助成",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年06月29日 帯状疱疹ワクチン一部費用助成のお知らせ 更新日：2026年06月29日 ページID : 3585 定期予防接種対象者 ・年度内に65、70、75、80、85、90、95、100歳を迎える方 【令和8年度対象者の年齢と生年月日】 65歳 昭和",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/iryo_kenko/2/3585.html",
    "sourceName": "帯状疱疹ワクチン一部費用助成"
  },
  {
    "slug": "kagoshima-official-007-053-2026",
    "title": "屋久島町 町内に賃貸住宅を建てる方を支援します！",
    "organization": "屋久島町",
    "maxAmount": "補助金額（令和8年度）地域区分補助率限度額単身用世帯用一般地域（下記以外の地域）1/4300万円",
    "maxAmountNum": 3000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 受付を終了することがあります",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/jigyo/shien_hojokin/3253.html",
    "sourceName": "町内に賃貸住宅を建てる方を支援します！"
  },
  {
    "slug": "kagoshima-official-007-054-2026",
    "title": "屋久島町 屋久島町で創業をお考えの方へ 特定創業支援等事業",
    "organization": "屋久島町",
    "maxAmount": "上限額は最大200万円",
    "maxAmountNum": 2000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年06月03日 交付対象者 （1）現在事業を営んでおらず、これから創業する個人 （2）（1）の創業から5年を経過していない個人または法人 2.特定創業支援等事業による主な優遇措置 （1）会社設立時の登録免許税の軽減 株式会社や合同会社を設立する際、登記にかかる",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/jigyo/shien_hojokin/3406.html",
    "sourceName": "屋久島町で創業をお考えの方へ 特定創業支援等事業"
  },
  {
    "slug": "kagoshima-official-007-055-2026",
    "title": "屋久島町 高齢者補聴器購入費事業について",
    "organization": "屋久島町",
    "maxAmount": "補助額・補聴器本体1台分の購入費用の2分の1の額（上限額30,000円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "屋久島町内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 交付を受けていない方 ・耳鼻咽喉科の医師から「補聴器の装用が必要である」と判断された方 補助額 ・補聴器本体1台分の購入費用の2分の1の額 （上限額30,000円、ただし付属品、送料等を除く） 注意1：補助金は1人1回限りです",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/iryo_kenko_fukushi/koreifukushi_kaigo/3314.html",
    "sourceName": "高齢者補聴器購入費事業について"
  },
  {
    "slug": "kagoshima-official-007-056-2026",
    "title": "屋久島町 貨物自動車運送事業者への支援",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "屋久島町内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年03月10日 交付金を活用して、貨物自動車運送事業者物価高騰対策支援金を創設し、町内で貨物事業を営む事業者に対しまして支援を行うこととしました",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/jigyo/shien_hojokin/1681.html",
    "sourceName": "貨物自動車運送事業者への支援"
  },
  {
    "slug": "kagoshima-official-007-057-2026",
    "title": "屋久島町 介護サービス事業所等への物価高騰対策支援",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "屋久島町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年03月10日 交付金を使用し、町内の介護サービス事業所等への物価高騰支援対策を実施します",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/jigyo/shien_hojokin/1682.html",
    "sourceName": "介護サービス事業所等への物価高騰対策支援"
  },
  {
    "slug": "kagoshima-official-007-058-2026",
    "title": "屋久島町 航路・航空路運賃低廉化",
    "organization": "屋久島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "屋久島町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月16日 申請者が介護社の場合に限る） 要介護認定者等の介護保険被保険者証、介護認定結果通知書、介護区分変更通知書のいずれかの写し（申請者が介護者の場合に限る） 戸籍謄本、戸籍妙本のいずれか（申請者が介護者の場合に限る",
    "officialUrl": "https://www.town.yakushima.kagoshima.jp/gyosei/yujinkokkyoritotokubetsusochiho/2087.html",
    "sourceName": "航路・航空路運賃低廉化"
  },
  {
    "slug": "kagoshima-official-007-059-2026",
    "title": "大和村 児童手当制度改正（拡充）内容",
    "organization": "大和村",
    "maxAmount": "月額3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年9月11日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/jidouteate/jidouteate.html",
    "sourceName": "児童手当制度改正（拡充）内容"
  },
  {
    "slug": "kagoshima-official-007-060-2026",
    "title": "大和村 高校生通学バス助成（村民パスポート券・青色）",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "申請を行ってください",
    "officialUrl": "https://www.vill.yamato.lg.jp/kyoiku/kurashi/todokede/kakushu/tsugaku-bus.html",
    "sourceName": "高校生通学バス助成（村民パスポート券・青色）"
  },
  {
    "slug": "kagoshima-official-007-061-2026",
    "title": "大和村 大和村振興基金奨学金",
    "organization": "大和村",
    "maxAmount": "月額1万円",
    "maxAmountNum": 10000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2025年2月6日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/kyoiku/kurashi/kyoiku-bunka/syougakukinn.html",
    "sourceName": "大和村振興基金奨学金"
  },
  {
    "slug": "kagoshima-official-007-062-2026",
    "title": "大和村 出産祝金",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大和村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年8月5日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/shussan/josesedo/iwaikin.html",
    "sourceName": "出産祝金"
  },
  {
    "slug": "kagoshima-official-007-063-2026",
    "title": "大和村 子ども医療費給付",
    "organization": "大和村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "大和村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年5月29日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/shussan/josesedo/jose.html",
    "sourceName": "子ども医療費給付"
  },
  {
    "slug": "kagoshima-official-007-064-2026",
    "title": "大和村 育児助成金就学援助費",
    "organization": "大和村",
    "maxAmount": "年額35,000円",
    "maxAmountNum": 35000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2024年3月26日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/shussan/josesedo/shugakuenjohi.html",
    "sourceName": "育児助成金就学援助費"
  },
  {
    "slug": "kagoshima-official-007-065-2026",
    "title": "大和村 ひとり親家庭医療費助成",
    "organization": "大和村",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "大和村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年3月13日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/shussan/josesedo/hitorioya.html",
    "sourceName": "ひとり親家庭医療費助成"
  },
  {
    "slug": "kagoshima-official-007-066-2026",
    "title": "大和村 児童手当",
    "organization": "大和村",
    "maxAmount": "月額(児童一人あたり)所得制限限度額未満の方0歳～3歳未満：15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年3月13日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/shussan/josesedo/jido.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "kagoshima-official-007-067-2026",
    "title": "大和村 大和村奨学金返済支援制度",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2025年6月13日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hpkanri/kurashi/kyoiku-bunka/gakkokyoiku/shogakukinhensai.html",
    "sourceName": "大和村奨学金返済支援制度"
  },
  {
    "slug": "kagoshima-official-007-068-2026",
    "title": "大和村 大和村振興基金利子補給金",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の貸付額・利子補給額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大和村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年5月15日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/kikaku/kurashi/syussann-kosodate/shinkokikin.html",
    "sourceName": "大和村振興基金利子補給金"
  },
  {
    "slug": "kagoshima-official-007-069-2026",
    "title": "大和村 不妊治療費等助成のご案内",
    "organization": "大和村",
    "maxAmount": "上限5,000円",
    "maxAmountNum": 5000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請のあった日の属する年度）を1年度目とし, 申請が出来る年度の数を5年度とする",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/shussan/josesedo/funinthiryou.html",
    "sourceName": "不妊治療費等助成のご案内"
  },
  {
    "slug": "kagoshima-official-007-070-2026",
    "title": "大和村 大和村ファミリー・サポート・センター利用料等助成金",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大和村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年12月26日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/joseikin3.html",
    "sourceName": "大和村ファミリー・サポート・センター利用料等助成金"
  },
  {
    "slug": "kagoshima-official-007-071-2026",
    "title": "大和村 大和村民間賃貸住宅整備助成金",
    "organization": "大和村",
    "maxAmount": "50万円を助成",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年7月6日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/kikaku/kurashi/iju/jyoseiseido/minkanchintai.html",
    "sourceName": "大和村民間賃貸住宅整備助成金"
  },
  {
    "slug": "kagoshima-official-007-072-2026",
    "title": "大和村 大和村住宅改修助成金",
    "organization": "大和村",
    "maxAmount": "上限50万円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年7月6日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/kikaku/kurashi/iju/shisakushokai/jutakukaishujyosei.html",
    "sourceName": "大和村住宅改修助成金"
  },
  {
    "slug": "kagoshima-official-007-073-2026",
    "title": "大和村 結婚新生活支援事業",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月6日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/kikaku/kurashi/iju/jyoseiseido/kekkonshien.html",
    "sourceName": "結婚新生活支援事業"
  },
  {
    "slug": "kagoshima-official-007-074-2026",
    "title": "大和村 特別障害者手当について",
    "organization": "大和村",
    "maxAmount": "月額（令和7年4月より適用）29,590円",
    "maxAmountNum": 29590,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年9月25日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/fukushi-kaigo/tokubetusyougaisyateate.html",
    "sourceName": "特別障害者手当について"
  },
  {
    "slug": "kagoshima-official-007-075-2026",
    "title": "大和村 障がい者福祉について",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2024年3月28日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/fukushi-kaigo/shinshin/shogaisha.html",
    "sourceName": "障がい者福祉について"
  },
  {
    "slug": "kagoshima-official-007-076-2026",
    "title": "大和村 児童扶養手当",
    "organization": "大和村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/shussan/josesedo/jidoufuyouteate/index.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kagoshima-official-007-077-2026",
    "title": "大和村 大和村廃屋等対策助成金",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大和村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年7月10日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/kikaku/kurashi/iju/jyoseiseido/haiokukaitai.html",
    "sourceName": "大和村廃屋等対策助成金"
  },
  {
    "slug": "kagoshima-official-007-078-2026",
    "title": "大和村 大和村新築住宅助成金",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付規則（PDF：193KB） 申請書等 第1号様式（申請書）（ワード：17KB） 第2号様式（交付決定通知）（ワード：19KB） 第3号様式（返納命令通知書）（ワード：17KB） PDF形式のファイルをご覧いただく場合には、Adobe Acr",
    "officialUrl": "https://www.vill.yamato.lg.jp/kikaku/kurashi/iju/jyoseiseido/shinchiku.html",
    "sourceName": "大和村新築住宅助成金"
  },
  {
    "slug": "kagoshima-official-007-079-2026",
    "title": "大和村 就学援助制度",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年2月17日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/kyoiku/kyoiku/syugaku.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "kagoshima-official-007-080-2026",
    "title": "大和村 在宅要介護者等介護手当",
    "organization": "大和村",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2024年3月26日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/fukushi-kaigo/koreshafukushi/kaigoteate.html",
    "sourceName": "在宅要介護者等介護手当"
  },
  {
    "slug": "kagoshima-official-007-081-2026",
    "title": "大和村 がん患者アピアランスケア支援事業について",
    "organization": "大和村",
    "maxAmount": "上限額20,000円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "大和村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月6日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/iryo-hoken/documents/ganwig.html",
    "sourceName": "がん患者アピアランスケア支援事業について"
  },
  {
    "slug": "kagoshima-official-007-082-2026",
    "title": "大和村 人間ドック費用助成",
    "organization": "大和村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "大和村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2024年3月26日 申請書ダウンロード イベントカレンダー 施設検索 窓口案内 ここから本文です",
    "officialUrl": "https://www.vill.yamato.lg.jp/hoken/kurashi/nenkin-hoken/kenkohoken/hiyojose.html",
    "sourceName": "人間ドック費用助成"
  },
  {
    "slug": "kagoshima-official-007-083-2026",
    "title": "宇検村 母子保健、子育て支援",
    "organization": "宇検村",
    "maxAmount": "上限５千円）・子育て支援金助成（小学校入学時に入学祝い金５万円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宇検村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年11月10日 申請書 高齢者支援 いきもの 水道 施設検索 ここから本文です",
    "officialUrl": "https://www.uken.net/kouhoutoukei/kosodateshien.html",
    "sourceName": "母子保健、子育て支援"
  },
  {
    "slug": "kagoshima-official-007-084-2026",
    "title": "宇検村 離島割引カードについて",
    "organization": "宇検村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宇検村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年8月14日 申請書 高齢者支援 いきもの 水道 施設検索 ここから本文です",
    "officialUrl": "https://www.uken.net/kikakuchousei/kurashi/todokede/ritokuko/waribiki-card.html",
    "sourceName": "離島割引カードについて"
  },
  {
    "slug": "kagoshima-official-007-085-2026",
    "title": "宇検村 うけんブランド確立事業",
    "organization": "宇検村",
    "maxAmount": "最大値である1kg当たり26円",
    "maxAmountNum": 26,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宇検村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年8月23日 申請書 高齢者支援 いきもの 水道 施設検索 ここから本文です",
    "officialUrl": "https://www.uken.net/nouseichikusan/sangyo/nogyo/oshirase/ukenburando.html",
    "sourceName": "うけんブランド確立事業"
  },
  {
    "slug": "kagoshima-official-007-086-2026",
    "title": "宇検村 宇検村チャレンジ企業応援補助金事業",
    "organization": "宇検村",
    "maxAmount": "補助額補助対象経費の10分の８以内とし、１者当たり100万円",
    "maxAmountNum": 1000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宇検村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年7月7日 申請書 高齢者支援 いきもの 水道 施設検索 ここから本文です",
    "officialUrl": "https://www.uken.net/kouhoutoukei/documents/tyarenjikigyou.html",
    "sourceName": "宇検村チャレンジ企業応援補助金事業"
  },
  {
    "slug": "kagoshima-official-007-087-2026",
    "title": "宇検村 やけうちライド運行について",
    "organization": "宇検村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宇検村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年10月1日 申請書 宇検村サシバイラスト公募結果及びイラスト使用要領について 宇検村ライドシェア ドライバー募集 「やけうちライド」運行について 国際サシバサミット2025宇検村奄美大島 第４７回やけうちどんと祭開催のお知らせ ハンセン病元患者のご家族に対",
    "officialUrl": "https://www.uken.net/kouhoutoukei/yakeuchiraido.html",
    "sourceName": "やけうちライド運行について"
  },
  {
    "slug": "kagoshima-official-007-088-2026",
    "title": "宇検村 宇検村定住促進条例",
    "organization": "宇検村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宇検村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年8月14日 交付要綱 宇検診療所 ゴミ・リサイクル 申請書 高齢者支援 いきもの 水道 施設検索 ここから本文です",
    "officialUrl": "https://www.uken.net/kikakuchousei/teijusokushinjorei.html",
    "sourceName": "宇検村定住促進条例"
  },
  {
    "slug": "kagoshima-official-007-089-2026",
    "title": "宇検村 宇検村企業立地等促進条例施行規則",
    "organization": "宇検村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "宇検村内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年8月14日 交付要綱 宇検診療所 ゴミ・リサイクル 申請書 高齢者支援 いきもの 水道 施設検索 ここから本文です",
    "officialUrl": "https://www.uken.net/kikakuchousei/muranogaiyo/reki/kigyoritchi.html",
    "sourceName": "宇検村企業立地等促進条例施行規則"
  },
  {
    "slug": "kagoshima-official-007-090-2026",
    "title": "宇検村 宇検村起業家支援プロジェクト",
    "organization": "宇検村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "宇検村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付要綱（ワード：21KB） 様式第1号＿事業認定申請書（ワード：18KB） 様式第2号＿誓約書（ワード：16KB） お問い合わせ 企画観光課 894-3392 鹿児島県大島郡宇検村湯湾915 電話番号：0997-67-2218 ファックス：0",
    "officialUrl": "https://www.uken.net/kouhoutoukei/muranogaiyo/furusato/murazukuri/crowdfunding.html",
    "sourceName": "宇検村起業家支援プロジェクト"
  }
];
