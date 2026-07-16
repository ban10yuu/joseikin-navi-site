const okayamaOfficial004Grants: Array<{
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
    "slug": "okayama-official-004-001-2026",
    "title": "和気町 乳幼児及び児童・生徒等医療費助成",
    "organization": "和気町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "和気町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年07月30日 乳幼児及び児童・生徒等医療費助成／和気町ホームページ スマートフォン版を表示 本文へ 閲覧支援 文字サイズ変更 背景色変更 読み上げ ひらがなをつける ひらがなをけす 閉じる Foreign Language English 繁體中文 简体",
    "officialUrl": "https://www.town.wake.lg.jp/iryo_kenko_fukushi/iryo_kenko/iryojosei/1217.html",
    "sourceName": "乳幼児及び児童・生徒等医療費助成"
  },
  {
    "slug": "okayama-official-004-002-2026",
    "title": "和気町 ひとり親家庭等医療費助成",
    "organization": "和気町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "和気町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月19日 ひとり親家庭等医療費助成／和気町ホームページ スマートフォン版を表示 本文へ 閲覧支援 文字サイズ変更 背景色変更 読み上げ ひらがなをつける ひらがなをけす 閉じる Foreign Language English 繁體中文 简体中文 한",
    "officialUrl": "https://www.town.wake.lg.jp/iryo_kenko_fukushi/iryo_kenko/iryojosei/1218.html",
    "sourceName": "ひとり親家庭等医療費助成"
  },
  {
    "slug": "okayama-official-004-003-2026",
    "title": "和気町 がんに関する支援事業(アピアランスケア)",
    "organization": "和気町",
    "maxAmount": "上限)補整具等補整パッド補整下着専用入浴着弾性着衣(ストッキングスリーブグローブ)エピテーゼ(補整用人工物)合計費用の2分の1(1万円",
    "maxAmountNum": 10000,
    "category": "employment",
    "relatedCategories": [
      "medical",
      "living"
    ],
    "eligibility": "和気町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年04月04日 申請等に関するお問い合わせ：住民課健康増進係 93−0531 申請書はこちら(PDFファイル:111.9KB) がんに関する相談窓口：がん相談センター がん治療についてや医療費、今後の生活に関する不安、自宅で利用できる医療や",
    "officialUrl": "https://www.town.wake.lg.jp/iryo_kenko_fukushi/iryo_kenko/iryojosei/2580.html",
    "sourceName": "がんに関する支援事業(アピアランスケア)"
  },
  {
    "slug": "okayama-official-004-004-2026",
    "title": "和気町 児童手当の制度改正について",
    "organization": "和気町",
    "maxAmount": "月額児童の年齢一人あたりの手当月額⇒児童の年齢一人あたりの手当月額第1・2子第3子以降第1・2子第3子以降3歳未満一律15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "和気町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年09月13日 支給分）から、児童手当が拡充されます",
    "officialUrl": "https://www.town.wake.lg.jp/kosodate_kyoiku/teate_josei/2133.html",
    "sourceName": "児童手当の制度改正について"
  },
  {
    "slug": "okayama-official-004-005-2026",
    "title": "和気町 和気町妊婦のための支援給付金",
    "organization": "和気町",
    "maxAmount": "支給額妊娠届出後、妊婦1人あたり5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "和気町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年04月01日 支給額 妊娠届出後、妊婦1人あたり5万円 出産予定日の8週前を経過後または 流産等が確認されたとき、胎児1人あたり5万 いずれも振込先は妊婦さん名義の口座に限ります",
    "officialUrl": "https://www.town.wake.lg.jp/kosodate_kyoiku/teate_josei/1397.html",
    "sourceName": "和気町妊婦のための支援給付金"
  },
  {
    "slug": "okayama-official-004-006-2026",
    "title": "和気町 奨学資金貸付",
    "organization": "和気町",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "和気町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年04月02日 募集要項 (PDFファイル: 81.6KB) 奨学資金貸付申請書 (PDFファイル: 93.7KB) 奨学資金貸付 家族構成等調査表（申請書添付） (PDFファイル: 33.8KB) この記事に関するお問い合わせ先 教育総務",
    "officialUrl": "https://www.town.wake.lg.jp/kosodate_kyoiku/teate_josei/1949.html",
    "sourceName": "奨学資金貸付"
  },
  {
    "slug": "okayama-official-004-007-2026",
    "title": "和気町 入学一時金貸付",
    "organization": "和気町",
    "maxAmount": "公式ページ記載の貸付額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "和気町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年04月02日 募集要項 (PDFファイル: 78.3KB) 入学一時金貸付申請書 (PDFファイル: 93.1KB) 入学一時金貸付 家族構成等調査表（申請書添付） (PDFファイル: 36.2KB) この記事に関するお問い合わせ先 教育",
    "officialUrl": "https://www.town.wake.lg.jp/kosodate_kyoiku/teate_josei/1948.html",
    "sourceName": "入学一時金貸付"
  },
  {
    "slug": "okayama-official-004-008-2026",
    "title": "和気町 不妊治療支援事業",
    "organization": "和気町",
    "maxAmount": "年額20万円",
    "maxAmountNum": 200000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "和気町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年10月10日 申請の日において、和気町に住所を有し、かつ、申請日から1年以上和気町に住所を有する予定の夫婦 専門医に不妊症と診断され、その検査・治療を受けられた方 補助内容 年額20万円を限度に補助します",
    "officialUrl": "https://www.town.wake.lg.jp/kosodate_kyoiku/teate_josei/2869.html",
    "sourceName": "不妊治療支援事業"
  },
  {
    "slug": "okayama-official-004-009-2026",
    "title": "和気町 和気町家庭のスマートエネルギー化促進補助金",
    "organization": "和気町",
    "maxAmount": "上限額種別補助対象機器補助率・補助上限額省エネルギー化設備ZEH一律45万円",
    "maxAmountNum": 450000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "和気町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 申請は何回までできるのか",
    "officialUrl": "https://www.town.wake.lg.jp/kurashi/sumai/hojokin_joseikin/1169.html",
    "sourceName": "和気町家庭のスマートエネルギー化促進補助金"
  },
  {
    "slug": "okayama-official-004-010-2026",
    "title": "和気町 和気町スズメバチ等駆除費補助金",
    "organization": "和気町",
    "maxAmount": "補助金額駆除に要した経費の1/2の額上限10,000円",
    "maxAmountNum": 10000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "和気町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2025年08月25日 申請可能",
    "officialUrl": "https://www.town.wake.lg.jp/kurashi/sumai/hojokin_joseikin/2784.html",
    "sourceName": "和気町スズメバチ等駆除費補助金"
  },
  {
    "slug": "okayama-official-004-011-2026",
    "title": "早島町 各種手当や医療費助成について",
    "organization": "早島町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "早島町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年10月01日 支給します",
    "officialUrl": "https://www.town.hayashima.lg.jp/soshiki/kodomo/gyomu/shi-nbetsu/1178.html",
    "sourceName": "各種手当や医療費助成について"
  },
  {
    "slug": "okayama-official-004-012-2026",
    "title": "早島町 妊婦のための支援給付",
    "organization": "早島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "早島町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年04月01日 支給します",
    "officialUrl": "https://www.town.hayashima.lg.jp/soshiki/kodomo/gyomu/ninshin_shussan/tetsuzuki_ninshin/4965.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "okayama-official-004-013-2026",
    "title": "早島町 高齢者・障がいをお持ちの方へ 福祉サービスのご案内",
    "organization": "早島町",
    "maxAmount": "月額8,000円",
    "maxAmountNum": 8000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "早島町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年04月01日 支給事業 住宅改造助成事業 特定疾患患者等療養通院費助成 難聴児補聴器購入費等助成金交付事業 高齢者補聴器購入費助成事業 コミュニケーション支援事業 緊急通報装置給付・貸与事業 一人暮らしの高齢者等の突発的な事故や急病等の緊",
    "officialUrl": "https://www.town.hayashima.lg.jp/soshiki/kenkofukushi/gyomu/kourei_fukushi_kaigo/1927.html",
    "sourceName": "高齢者・障がいをお持ちの方へ 福祉サービスのご案内"
  },
  {
    "slug": "okayama-official-004-014-2026",
    "title": "早島町 早島町高齢者補聴器購入費助成事業",
    "organization": "早島町",
    "maxAmount": "上限50,000円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "nursing",
      "living"
    ],
    "eligibility": "早島町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年04月01日 申請は助成対象外となります",
    "officialUrl": "https://www.town.hayashima.lg.jp/soshiki/kenkofukushi/gyomu/kourei_fukushi_kaigo/4984.html",
    "sourceName": "早島町高齢者補聴器購入費助成事業"
  },
  {
    "slug": "okayama-official-004-015-2026",
    "title": "早島町 子育て・教育シーン別支援",
    "organization": "早島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "早島町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "シーン別／早島町ホームページ スマートフォン版を表示 本文へ 文字サイズ 背景色 Select Language English 繁體中文 &#31616;&#20307;&#20013;&#25991; &#54620;&#44397;&",
    "officialUrl": "https://www.town.hayashima.lg.jp/soshiki/kodomo/gyomu/shi-nbetsu/index.html",
    "sourceName": "子育て・教育シーン別支援"
  },
  {
    "slug": "okayama-official-004-016-2026",
    "title": "早島町 高齢者福祉・介護支援",
    "organization": "早島町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "早島町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付について 高齢者・障がいをお持ちの方へ 福祉サービスのご案内 緊急通報システムの設置 早島町高齢者補聴器購入費助成事業 業務案内 よくある質問 早島町 Hayashima Town 〒701-0303 岡山県都窪郡早島町",
    "officialUrl": "https://www.town.hayashima.lg.jp/soshiki/kenkofukushi/gyomu/kourei_fukushi_kaigo/index.html",
    "sourceName": "高齢者福祉・介護支援"
  },
  {
    "slug": "okayama-official-004-017-2026",
    "title": "里庄町 高齢者肺炎球菌予防接種",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請書[Wordファイル] [Wordファイル／17KB] 接種回数 1回 接種方法 ・本人確認できるもの（健康保険証等）を医療機関にお持ちください",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/13514.html",
    "sourceName": "高齢者肺炎球菌予防接種"
  },
  {
    "slug": "okayama-official-004-018-2026",
    "title": "里庄町 令和8年度65歳以上の帯状疱疹定期予防接種",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請書の提出してください",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/13831.html",
    "sourceName": "令和8年度65歳以上の帯状疱疹定期予防接種"
  },
  {
    "slug": "okayama-official-004-019-2026",
    "title": "里庄町 子どもの予防接種について",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2022年6月24日 子どもの予防接種について - 里庄町公式ホームページ ページの先頭です。 メニューを飛ばして本文へ スマートフォン表示 本文へ 初めての方へ Foreign languages サイトマップ JavaScriptが無効のため、文字の大きさ・",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/8580.html",
    "sourceName": "子どもの予防接種について"
  },
  {
    "slug": "okayama-official-004-020-2026",
    "title": "里庄町 風しんの無料抗体検査と予防接種について",
    "organization": "里庄町",
    "maxAmount": "助成額5,000円",
    "maxAmountNum": 5000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2018年2月5日 申請手続きをする（接種日から１年以内） ※ただし、 浅口医師会の医療機関 で接種する場合には、医療窓口にて自己負担額をお支払いいただき、里庄町役場での手続きはございません",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1145.html",
    "sourceName": "風しんの無料抗体検査と予防接種について"
  },
  {
    "slug": "okayama-official-004-021-2026",
    "title": "里庄町 子ども医療費助成制度について",
    "organization": "里庄町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2022年10月1日 交付します",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/9292.html",
    "sourceName": "子ども医療費助成制度について"
  },
  {
    "slug": "okayama-official-004-022-2026",
    "title": "里庄町 骨髄・末梢血幹細胞ドナー等支援事業",
    "organization": "里庄町",
    "maxAmount": "９万円を限度",
    "maxAmountNum": 90000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2018年2月5日 交付します",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1178.html",
    "sourceName": "骨髄・末梢血幹細胞ドナー等支援事業"
  },
  {
    "slug": "okayama-official-004-023-2026",
    "title": "里庄町 高齢者等緊急通報装置給付等事業",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2018年2月5日 申請の場合 緊急通報装置給付等申請書、緊急通報装置利用承諾書、印鑑 変更（廃止）する場合 緊急通報装置利用変更（廃止）届、印鑑 ※新規申請には協力員と民生委員の連絡先等の情報が必要となります",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1185.html",
    "sourceName": "高齢者等緊急通報装置給付等事業"
  },
  {
    "slug": "okayama-official-004-024-2026",
    "title": "里庄町 障がいがある方への手当・助成",
    "organization": "里庄町",
    "maxAmount": "月額）令和7年4月現在1級（重度）56,800円",
    "maxAmountNum": 56800,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2025年10月27日 支給されます",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/12560.html",
    "sourceName": "障がいがある方への手当・助成"
  },
  {
    "slug": "okayama-official-004-025-2026",
    "title": "里庄町 障がいがある方への減免措置",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2020年4月17日 交付を受けた方が世帯構成員で、かつ、世帯全員が市町村民税非課税の場合 生活保護受給世帯 半額免除 視覚障がい・聴覚障がいにより身体障がい者手帳をお持ちの方が世帯主で受信契約者の場合 各種障がい者手帳（身体障がい者手帳・療育手",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1159.html",
    "sourceName": "障がいがある方への減免措置"
  },
  {
    "slug": "okayama-official-004-026-2026",
    "title": "里庄町 自立支援医療について",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2018年2月5日 申請書、要否判定意見書、認めの印鑑、手帳、健康保険証（コピーでも可）、所得を確認する書類など （注意1）申請から給付までお時間がかかりますので、早めに申請してください",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1154.html",
    "sourceName": "自立支援医療について"
  },
  {
    "slug": "okayama-official-004-027-2026",
    "title": "里庄町 保育士就職支援について",
    "organization": "里庄町",
    "maxAmount": "最大４０万円",
    "maxAmountNum": 400000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "里庄町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2023年6月14日 支給されます",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/10338.html",
    "sourceName": "保育士就職支援について"
  },
  {
    "slug": "okayama-official-004-028-2026",
    "title": "里庄町 妊娠・出産された方へ",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月23日 提出がおすすめ 妊娠届時の書類をアプリで入力・回答いただけます",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1152.html",
    "sourceName": "妊娠・出産された方へ"
  },
  {
    "slug": "okayama-official-004-029-2026",
    "title": "里庄町 子育て世帯訪問支援事業",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請書を記入していただきます",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/12675.html",
    "sourceName": "子育て世帯訪問支援事業"
  },
  {
    "slug": "okayama-official-004-030-2026",
    "title": "里庄町 里庄町生殖補助医療費助成金支給事業里庄町不妊治療支援事業助成金",
    "organization": "里庄町",
    "maxAmount": "上限10万円",
    "maxAmountNum": 100000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 支給事業里庄町不妊治療支援事業助成金 - 里庄町公式ホームページ ページの先頭です",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/12617.html",
    "sourceName": "里庄町生殖補助医療費助成金支給事業里庄町不妊治療支援事業助成金"
  },
  {
    "slug": "okayama-official-004-031-2026",
    "title": "里庄町 低所得者に対する初回産科受診料支援事業",
    "organization": "里庄町",
    "maxAmount": "上限１万円",
    "maxAmountNum": 10000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年5月22日 申請 申請に必要な書類 (1)初回産科受診料に要した費用にかかる「領収書」及び「診療明細書」の原本 (2)本人確認書類 (3)振込先が確認できる書類 (4)市町村民税非課税世帯であることを確認できる書類（世帯の課税状況が確認",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/11478.html",
    "sourceName": "低所得者に対する初回産科受診料支援事業"
  },
  {
    "slug": "okayama-official-004-032-2026",
    "title": "里庄町 妊婦のための支援給付",
    "organization": "里庄町",
    "maxAmount": "支給額(1)妊婦支援給付金（1回目）：5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年4月12日 申請または届出時点で、里庄町に住民票を有する方 令和7年4月1日以降に妊娠している方 他市町村で、妊婦支援給付金を受け取り済みではない方​ ※注意事項 本給付では、妊娠の定義を医師による胎児心拍の確認としています",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/11284.html",
    "sourceName": "妊婦のための支援給付"
  },
  {
    "slug": "okayama-official-004-033-2026",
    "title": "里庄町 里庄町出産支援金",
    "organization": "里庄町",
    "maxAmount": "1人あたり3万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2024年3月8日 支給することになりました",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/11179.html",
    "sourceName": "里庄町出産支援金"
  },
  {
    "slug": "okayama-official-004-034-2026",
    "title": "里庄町 ひとり親家庭等の医療費助成",
    "organization": "里庄町",
    "maxAmount": "上限月額所得区分負担上限月額外来のみ入院を含む一定以上下記のいずれにもあてはまらない場合44,400円",
    "maxAmountNum": 44400,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2018年2月5日 申請をしてください",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/12262.html",
    "sourceName": "ひとり親家庭等の医療費助成"
  },
  {
    "slug": "okayama-official-004-035-2026",
    "title": "里庄町 児童手当",
    "organization": "里庄町",
    "maxAmount": "支給額を月3万円",
    "maxAmountNum": 30000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 支給分から制度が変わりました 主な改正内容 （1）所得制限の撤廃 （2）支給対象年齢を中学校修了までから高校生年代までに延長 （3）第3子以降の支給額を月3万円に増額 （4）（3）の多子加算のカウント対象が大学生年代までに延",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1316.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "okayama-official-004-036-2026",
    "title": "里庄町 児童扶養手当",
    "organization": "里庄町",
    "maxAmount": "月額（令和7年4月現在）手当月額対象児童数全部支給一部支給児童1人目46,690円",
    "maxAmountNum": 46690,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2020年7月31日 支給される手当です",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1171.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okayama-official-004-037-2026",
    "title": "里庄町 医療用ウィッグ等購入費助成",
    "organization": "里庄町",
    "maxAmount": "助成額購入費用の２分の１の額（上限３万円",
    "maxAmountNum": 30000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 申請により支給しますので、健康福祉課で手続きをしてください",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/12548.html",
    "sourceName": "医療用ウィッグ等購入費助成"
  },
  {
    "slug": "okayama-official-004-038-2026",
    "title": "里庄町 住宅改造費の助成",
    "organization": "里庄町",
    "maxAmount": "上限20万円",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2018年2月5日 申請時 申請書 図面（工事箇所がわかるもの） 見積書（工事箇所ごとの詳細なもの） 家主の承諾書（借家の場合に限る） 改造前の状況を示す写真（日付が入ったもの） 完了時 実績報告書 改造後の状況を示す写真（日付が入ったもの） ",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/1179.html",
    "sourceName": "住宅改造費の助成"
  },
  {
    "slug": "okayama-official-004-039-2026",
    "title": "里庄町 子育て短期支援事業",
    "organization": "里庄町",
    "maxAmount": "1人1日当たりの利用料】生活保護世帯の児童：500円",
    "maxAmountNum": 500,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年5月20日 申請方法 事業の利用を希望する際には、こども家庭センター（健康福祉課）へ相談の上、里庄町子育て短期支援事業利用申請書(様式第1号)により申請をお願いします",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/12758.html",
    "sourceName": "子育て短期支援事業"
  },
  {
    "slug": "okayama-official-004-040-2026",
    "title": "里庄町 医療機関・社会福祉施設等物価高騰対策臨時支援金",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "里庄町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年1月31日 交付します",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/7/11059.html",
    "sourceName": "医療機関・社会福祉施設等物価高騰対策臨時支援金"
  },
  {
    "slug": "okayama-official-004-041-2026",
    "title": "里庄町 特別支援教育就学奨励費制度",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "里庄町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 支給額 交流活動費を除き、実費の半額が支給されます",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/11/8692.html",
    "sourceName": "特別支援教育就学奨励費制度"
  },
  {
    "slug": "okayama-official-004-042-2026",
    "title": "里庄町 子育て世帯応援タクシー料金助成事業",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年3月27日 交付します",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/3/10205.html",
    "sourceName": "子育て世帯応援タクシー料金助成事業"
  },
  {
    "slug": "okayama-official-004-043-2026",
    "title": "里庄町 高齢者タクシー料金助成事業",
    "organization": "里庄町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年3月23日 交付します",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/3/1184.html",
    "sourceName": "高齢者タクシー料金助成事業"
  },
  {
    "slug": "okayama-official-004-044-2026",
    "title": "里庄町 令和8年度空家等除却支援事業補助金",
    "organization": "里庄町",
    "maxAmount": "補助金額補助対象経費の合計額に２分の１を乗じて得た額とし、60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年5月8日 交付の対象となる空家等は、次の条件のすべてに該当する必要があります",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/15/11455.html",
    "sourceName": "令和8年度空家等除却支援事業補助金"
  },
  {
    "slug": "okayama-official-004-045-2026",
    "title": "里庄町 令和8年度移住・定住のための空き家リフォーム支援事業補助金",
    "organization": "里庄町",
    "maxAmount": "補助金額補助対象工事に要する費用の２分の１以内の額で、120万円",
    "maxAmountNum": 1200000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "里庄町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 提出する方 (２) 現住所地で町税等を滞納していない世帯 (３) 暴力団または暴力団員ではない世帯 補助の対象とならない工事 空き家の居住の用に供する部分に対するリフォーム工事を対象としますが、次に掲げる工事については、補助",
    "officialUrl": "https://www.town.satosho.okayama.jp/soshiki/15/8644.html",
    "sourceName": "令和8年度移住・定住のための空き家リフォーム支援事業補助金"
  },
  {
    "slug": "okayama-official-004-046-2026",
    "title": "矢掛町 妊産婦医療費助成制度",
    "organization": "矢掛町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和4年4月1日 交付を受けた月の初日または転入日から、出産（流産及び死産を含む）した日の翌月の末日まで 対象となる医療費 対象期間中に健康保険証を使用して受診した医療費の自己負担額（医療機関の領収明細書に記載されている保険負担分の額） ※１",
    "officialUrl": "http://www.town.yakage.okayama.jp/kosodate/system/ninsanpuiryohi.html",
    "sourceName": "妊産婦医療費助成制度"
  },
  {
    "slug": "okayama-official-004-047-2026",
    "title": "矢掛町 子ども医療費助成",
    "organization": "矢掛町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "矢掛町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請方法 お子さんの健康保険証を持参し、こどもみらい課窓口で手続きをしてください",
    "officialUrl": "http://www.town.yakage.okayama.jp/kosodate/system/kodomoiryohi.html",
    "sourceName": "子ども医療費助成"
  },
  {
    "slug": "okayama-official-004-048-2026",
    "title": "矢掛町 ひとり親家庭等医療費助成",
    "organization": "矢掛町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "矢掛町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付を受けてください",
    "officialUrl": "http://www.town.yakage.okayama.jp/kosodate/system/hitorioyakatei.html",
    "sourceName": "ひとり親家庭等医療費助成"
  },
  {
    "slug": "okayama-official-004-049-2026",
    "title": "矢掛町 予防接種費助成",
    "organization": "矢掛町",
    "maxAmount": "助成額３，０００円",
    "maxAmountNum": 3000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請の必要はありません",
    "officialUrl": "http://www.town.yakage.okayama.jp/kosodate/system/yobo.html",
    "sourceName": "予防接種費助成"
  },
  {
    "slug": "okayama-official-004-050-2026",
    "title": "矢掛町 児童手当制度改正",
    "organization": "矢掛町",
    "maxAmount": "月額（多子加算）の拡充（15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和７年３月３１日 支給対象児童拡大（中学校修了まで→高校生年代まで） ③ 第3子以降の手当月額（多子加算）の拡充（15,000円→30,000円） ④ 第3子以降の算定に含める対象児童の年齢を高校生年代までから大学生年代まで （22歳到達後の",
    "officialUrl": "http://www.town.yakage.okayama.jp/kosodate/system/post_127.html",
    "sourceName": "児童手当制度改正"
  },
  {
    "slug": "okayama-official-004-051-2026",
    "title": "矢掛町 児童手当の手続き",
    "organization": "矢掛町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "申請書および添付書類は、こどもみらい課へご提出ください（郵送可） 【提出先】〒714-1297矢掛町矢掛3018番地 矢掛町こどもみらい課（℡0866-82-1060） 認定請求 その他の届出 様式ダウンロード 認定請求 手",
    "officialUrl": "http://www.town.yakage.okayama.jp/kosodate/system/post.html",
    "sourceName": "児童手当の手続き"
  },
  {
    "slug": "okayama-official-004-052-2026",
    "title": "矢掛町 結婚推進事業",
    "organization": "矢掛町",
    "maxAmount": "上限６０万円",
    "maxAmountNum": 600000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "矢掛町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和８年１月１日 提出し、矢掛町に住民票がある世帯 婚姻届提出時点で、夫婦ともに３９歳以下 夫婦の前年分の所得額の合計が５００万円未満であること ※貸与型奨学金の返済を行っている場合は、年間返済額を所得額から控除します",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/teijyu/kekkon.html",
    "sourceName": "結婚推進事業"
  },
  {
    "slug": "okayama-official-004-053-2026",
    "title": "矢掛町 矢掛町定住促進助成金制度",
    "organization": "矢掛町",
    "maxAmount": "上限額三世代促進助成金の額定住促進助成金上限額40歳以下町外3世代以上170万円",
    "maxAmountNum": 1700000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和9年3月31日 交付しています",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/teijyu/teijuujosei.html",
    "sourceName": "矢掛町定住促進助成金制度"
  },
  {
    "slug": "okayama-official-004-054-2026",
    "title": "矢掛町 矢掛町空き家改修補助金",
    "organization": "矢掛町",
    "maxAmount": "上限１００万円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "申請の流れ 様式のダウンロード 矢掛町空き家改修補助金とは 居住を目的とした空き家の改修費用の2分の1以内（上限１００万円／物件）を町が補助する制度です",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/teijyu/akiyahojoshinsei.html",
    "sourceName": "矢掛町空き家改修補助金"
  },
  {
    "slug": "okayama-official-004-055-2026",
    "title": "矢掛町 空き家活用新規創業支援事業補助金",
    "organization": "矢掛町",
    "maxAmount": "限度額：２００万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "矢掛町内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付申請を提出する日の前日までに町内に住所を有している者であること",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/teijyu/akiyakatsuyou.html",
    "sourceName": "空き家活用新規創業支援事業補助金"
  },
  {
    "slug": "okayama-official-004-056-2026",
    "title": "矢掛町 排水設備工事資金補助制度",
    "organization": "矢掛町",
    "maxAmount": "上限は100万円",
    "maxAmountNum": 1000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請 （戸籍&middot;住民票など） ページ上部へ このホームページについてのお問い合わせは 矢掛町役場 〒714-1297 岡山県小田郡矢掛町矢掛3018番地 法人番号 8000020334618 ご意見・ご提案・お問",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/kankyo/gesui/haisuihojo.html",
    "sourceName": "排水設備工事資金補助制度"
  },
  {
    "slug": "okayama-official-004-057-2026",
    "title": "矢掛町 合併処理浄化槽設置整備事業補助金",
    "organization": "矢掛町",
    "maxAmount": "限度額5人槽354,000円",
    "maxAmountNum": 354000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付しています",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/kankyo/gesui/gesui-hojyo01.html",
    "sourceName": "合併処理浄化槽設置整備事業補助金"
  },
  {
    "slug": "okayama-official-004-058-2026",
    "title": "矢掛町 骨髄・末梢血幹細胞ドナー等支援事業",
    "organization": "矢掛町",
    "maxAmount": "105,000円を限度",
    "maxAmountNum": 105000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "矢掛町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "http://www.town.yakage.okayama.jp/health/iryo/donorshien.html",
    "sourceName": "骨髄・末梢血幹細胞ドナー等支援事業"
  },
  {
    "slug": "okayama-official-004-059-2026",
    "title": "矢掛町 安全運転支援装置整備補助金",
    "organization": "矢掛町",
    "maxAmount": "補助金額装置の購入・取付にかかる費用の3分の2以内の額で，上限10万円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請時に町内に住所を有する65歳以上の高齢者 ②有効な自動車運転免許証を保有している ③本人及び同一世帯に属する者に町税及び町へ納入すべき納付金の滞納がない ④暴力団員又は暴力団員でなくなった日から5年を経過しない者でない ",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/bosai/anzenuntenshien.html",
    "sourceName": "安全運転支援装置整備補助金"
  },
  {
    "slug": "okayama-official-004-060-2026",
    "title": "矢掛町 LED防犯灯設置費補助",
    "organization": "矢掛町",
    "maxAmount": "補助金額補助対象事業費の４／５（上限１灯につき２５，０００円",
    "maxAmountNum": 25000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/bosai/led.html",
    "sourceName": "LED防犯灯設置費補助"
  },
  {
    "slug": "okayama-official-004-061-2026",
    "title": "矢掛町 LED防犯灯更新事業補助金",
    "organization": "矢掛町",
    "maxAmount": "１５，０００円を限度",
    "maxAmountNum": 15000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/bosai/led2.html",
    "sourceName": "LED防犯灯更新事業補助金"
  },
  {
    "slug": "okayama-official-004-062-2026",
    "title": "矢掛町 特殊詐欺等防止機能付き機器購入補助",
    "organization": "矢掛町",
    "maxAmount": "補助金額機器の購入及び設置金額の2分の1（上限5,000円",
    "maxAmountNum": 5000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "受付期間 当該年度の末日まで ※申請状況によって、期間内に締め切る場合があります",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/bosai/post_3.html",
    "sourceName": "特殊詐欺等防止機能付き機器購入補助"
  },
  {
    "slug": "okayama-official-004-063-2026",
    "title": "矢掛町 過疎地域における固定資産税の課税免除",
    "organization": "矢掛町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "提出期限 事業の用に供した日の翌年の１月３１日 ６ 提出書類 固定資産税課税免除申請書、明細書 工場・製品の概要説明書（パンフレット等） 事業所全体の平面図、建物の平面図及び工場内該当償却資産の配置図 機械及び装置の配置図と",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/tax/kasomenjo.html",
    "sourceName": "過疎地域における固定資産税の課税免除"
  },
  {
    "slug": "okayama-official-004-064-2026",
    "title": "矢掛町 災害弔慰金・災害障害見舞金の支給",
    "organization": "矢掛町",
    "maxAmount": "支給額主として生計を維持していた方が亡くなった場合・・・500万円",
    "maxAmountNum": 5000000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "支給｜矢掛町公式ホームページ 歴史かおる文化の町 矢掛町 本文へ メニュー ホーム 暮らし・手続き 健康・福祉 子育て・教育 まち案内 町の行政 矢掛町 観光情報 矢掛町 移住支援 矢掛町 子育て支援 サイト内検索 java",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/tyouikin_mimaikin.html",
    "sourceName": "災害弔慰金・災害障害見舞金の支給"
  },
  {
    "slug": "okayama-official-004-065-2026",
    "title": "矢掛町 平成30年7月豪雨に係る災害支援金等",
    "organization": "矢掛町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "受付を行っています",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/saigaishienkin.html",
    "sourceName": "平成30年7月豪雨に係る災害支援金等"
  },
  {
    "slug": "okayama-official-004-066-2026",
    "title": "矢掛町 設備等導入支援",
    "organization": "矢掛町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和５年４月１日 申請書等の様式が変更になりました",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/sangyo/setsubishien.html",
    "sourceName": "設備等導入支援"
  },
  {
    "slug": "okayama-official-004-067-2026",
    "title": "矢掛町 各種補助金・制度",
    "organization": "矢掛町",
    "maxAmount": "限度額1業者1,000万円",
    "maxAmountNum": 10000000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付します",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/sangyo/hojyo.html",
    "sourceName": "各種補助金・制度"
  },
  {
    "slug": "okayama-official-004-068-2026",
    "title": "矢掛町 矢掛高校魅力化事業",
    "organization": "矢掛町",
    "maxAmount": "上限金額：４万円",
    "maxAmountNum": 40000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請できます） ② 端末費補助金 入学時の費用負担の軽減を図るため，矢掛高校が指定し，授業等で使用するタブレット端末の自己負担額を補助します",
    "officialUrl": "http://www.town.yakage.okayama.jp/kyoiku/kyoiku/yako_miryokuka.html",
    "sourceName": "矢掛高校魅力化事業"
  },
  {
    "slug": "okayama-official-004-069-2026",
    "title": "矢掛町 ふるさと創生事業",
    "organization": "矢掛町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "矢掛町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "申請の条件 申請の流れ ふるさと創生事業 昭和63年から平成元年にかけて、全国に交付された「ふるさと創生1億円」を「ふるさとづくり基金」として積み立て、その運用益金で地域のみなさんが行う事業に補助金を交付しています",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/machi/furusato.html",
    "sourceName": "ふるさと創生事業"
  },
  {
    "slug": "okayama-official-004-070-2026",
    "title": "矢掛町 友好都市交流助成",
    "organization": "矢掛町",
    "maxAmount": "助成額（対象者一人当たり）金武町へ宿泊する者１２歳以上２０，０００円",
    "maxAmountNum": 20000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "矢掛町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請等 ・旅行出発の７日前までに助成金の認定申請が必要です",
    "officialUrl": "http://www.town.yakage.okayama.jp/life/machi/toshikouryu.html",
    "sourceName": "友好都市交流助成"
  },
  {
    "slug": "okayama-official-004-071-2026",
    "title": "新庄村 支援制度",
    "organization": "新庄村",
    "maxAmount": "上限100,000円",
    "maxAmountNum": 100000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "新庄村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請した場合に 実費（上限10万円）を助成",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=106",
    "sourceName": "支援制度"
  },
  {
    "slug": "okayama-official-004-072-2026",
    "title": "新庄村 妊娠・出産",
    "organization": "新庄村",
    "maxAmount": "年額20万円",
    "maxAmountNum": 200000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年1月31日 申請書 税金 保険・年金 し尿・ごみ・リサイクル ペット・動物 健康・医療 福祉・介護 上下水道・浄化槽 住まい 妊娠・出産・子育て 妊娠・出産 子育て 児童扶養手当 保育所 小学校・中学校 児童手当 ひとり親家庭等医療費助",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=45",
    "sourceName": "妊娠・出産"
  },
  {
    "slug": "okayama-official-004-073-2026",
    "title": "新庄村 乳幼児・児童生徒等医療費助成",
    "organization": "新庄村",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "新庄村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年1月31日 申請書 税金 保険・年金 し尿・ごみ・リサイクル ペット・動物 健康・医療 検診・予防注射 新型コロナワクチン接種証明書について 新庄村整骨院 乳幼児・児童生徒等医療費助成（こども医療費） 福祉・介護 上下水道・浄化槽 住ま",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=4278",
    "sourceName": "乳幼児・児童生徒等医療費助成"
  },
  {
    "slug": "okayama-official-004-074-2026",
    "title": "新庄村 ひとり親家庭等医療費助成",
    "organization": "新庄村",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "新庄村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年1月31日 申請書 税金 保険・年金 し尿・ごみ・リサイクル ペット・動物 健康・医療 福祉・介護 上下水道・浄化槽 住まい 妊娠・出産・子育て 妊娠・出産 子育て 児童扶養手当 保育所 小学校・中学校 児童手当 ひとり親家庭等医療費助",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=4279",
    "sourceName": "ひとり親家庭等医療費助成"
  },
  {
    "slug": "okayama-official-004-075-2026",
    "title": "新庄村 児童手当",
    "organization": "新庄村",
    "maxAmount": "月額（児童1人につき）&bull;3歳未満第1子、第2子：15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年1月31日 申請書 税金 保険・年金 し尿・ごみ・リサイクル ペット・動物 健康・医療 福祉・介護 上下水道・浄化槽 住まい 妊娠・出産・子育て 妊娠・出産 子育て 児童扶養手当 保育所 小学校・中学校 児童手当 ひとり親家庭等医療費助",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=4271",
    "sourceName": "児童手当"
  },
  {
    "slug": "okayama-official-004-076-2026",
    "title": "新庄村 児童扶養手当",
    "organization": "新庄村",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年1月31日 申請書 税金 保険・年金 し尿・ごみ・リサイクル ペット・動物 健康・医療 福祉・介護 上下水道・浄化槽 住まい 妊娠・出産・子育て 妊娠・出産 子育て 児童扶養手当 保育所 小学校・中学校 児童手当 ひとり親家庭等医療費助",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=47",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "okayama-official-004-077-2026",
    "title": "新庄村 家庭の省・創・畜エネ設備・EV導入支援事業",
    "organization": "新庄村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年1月31日 申請書 税金 保険・年金 し尿・ごみ・リサイクル ペット・動物 健康・医療 福祉・介護 上下水道・浄化槽 住まい 空き家情報バンク 分譲宅地 村営住宅 家庭の省・創・畜エネ設備・EV導入支援事業 妊娠・出産・子育て 教育・文",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=2112",
    "sourceName": "家庭の省・創・畜エネ設備・EV導入支援事業"
  },
  {
    "slug": "okayama-official-004-078-2026",
    "title": "新庄村 起業家支援事業",
    "organization": "新庄村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年1月31日 起業家支援事業｜岡山県新庄村 トップページ 新庄村の魅力 くらしの情報 事業者の方へ 村政 交通アクセス 閉じる 事業者の方へ 農林業 商工業 起業家支援事業 建設業 公募 入札・契約 企業版ふるさと納税 みんなで支える家族の命 新庄村防災",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=74",
    "sourceName": "起業家支援事業"
  },
  {
    "slug": "okayama-official-004-079-2026",
    "title": "新庄村 結婚新生活支援事業",
    "organization": "新庄村",
    "maxAmount": "上限額・夫婦ともに婚姻日における年齢が２９歳以下の世帯・・・６０万円",
    "maxAmountNum": 600000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "新庄村内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和8年1月31日 交付事業 ダウンロード： 実施計画 サイトマップ 個人情報の取り扱い お問い合わせ リンク集 新庄村役場 / 総務企画課 〒717-0201 岡山県真庭郡新庄村2008-1 TEL：0867-56-2626 FAX：0867",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=1280",
    "sourceName": "結婚新生活支援事業"
  },
  {
    "slug": "okayama-official-004-080-2026",
    "title": "新庄村 クラウドファンディング型ふるさと納税活用事業補助金",
    "organization": "新庄村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年1月31日 申請&rarr;役場から承認 ② 役場はクラウドファンディング型ふるさと納税による寄附の募集 ③ 補助金の交付を役場へ申請&rarr;役場から交付決定 ④ 補助対象事業の実績を役場へ報告 ⑤ 役場は補助金を支払 ５ 補足事項",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/index.php?id=2151",
    "sourceName": "クラウドファンディング型ふるさと納税活用事業補助金"
  },
  {
    "slug": "okayama-official-004-081-2026",
    "title": "新庄村 新庄村乳幼児おむつ支給実施要綱",
    "organization": "新庄村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "新庄村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和7年7月28日 支給実施要綱 ○新庄村乳幼児おむつ支給実施要綱 令和7年7月28日 告示第85号 (目的) 第1条 この要綱は、乳幼児を監護又は養育する保護者に紙おむつ (以下「おむつ」とする",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000787.html",
    "sourceName": "新庄村乳幼児おむつ支給実施要綱"
  },
  {
    "slug": "okayama-official-004-082-2026",
    "title": "新庄村 新庄村敬老年金給付条例",
    "organization": "新庄村",
    "maxAmount": "年額1万2,000円",
    "maxAmountNum": 2000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "新庄村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請及び決定) 第4条 年金は、本人、その扶養義務者又は同居者の申請に基づいて村長がその給付を決定する",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000201.html",
    "sourceName": "新庄村敬老年金給付条例"
  },
  {
    "slug": "okayama-official-004-083-2026",
    "title": "新庄村 新庄村紙おむつ等購入費助成事業実施要綱",
    "organization": "新庄村",
    "maxAmount": "月額6,000円",
    "maxAmountNum": 6000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付の申請) 第4条 助成金の交付を受けようとする者は、新庄村紙おむつ等購入費助成申請書 ( 別記様式 ) に必要事項を記載の上、領収書を添付して村長に申請しなければならない",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000624.html",
    "sourceName": "新庄村紙おむつ等購入費助成事業実施要綱"
  },
  {
    "slug": "okayama-official-004-084-2026",
    "title": "新庄村 新庄村障害者医療費給付条例",
    "organization": "新庄村",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "新庄村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和3年7月1日 支給の措置を講じ、もって障害者の福祉の増進に資することを目的とする",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000229.html",
    "sourceName": "新庄村障害者医療費給付条例"
  },
  {
    "slug": "okayama-official-004-085-2026",
    "title": "新庄村 新庄村福祉車両購入費等助成金交付要綱",
    "organization": "新庄村",
    "maxAmount": "10万円を限度",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "交付要綱 ○新庄村福祉車両購入費等助成金交付要綱 平成26年10月28日 要綱第12号 (趣旨) 第1条 この要綱は、障害者福祉の増進を図るため、福祉車両の購入者に対し、助成金を交付するものとする",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000589.html",
    "sourceName": "新庄村福祉車両購入費等助成金交付要綱"
  },
  {
    "slug": "okayama-official-004-086-2026",
    "title": "新庄村 新庄村難聴児補聴器購入費等助成金交付要綱",
    "organization": "新庄村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "交付要綱 ○新庄村難聴児補聴器購入費等助成金交付要綱 平成22年7月1日 要綱第5号 (趣旨) 第1条 この要綱は、難聴児の健全な発育を支援し、もって福祉の増進に資することを目的として、身体障害者手帳の交付対象とならない軽度",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000527.html",
    "sourceName": "新庄村難聴児補聴器購入費等助成金交付要綱"
  },
  {
    "slug": "okayama-official-004-087-2026",
    "title": "新庄村 新庄村人間ドック検診助成金交付規則",
    "organization": "新庄村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "新庄村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付規則 ○新庄村人間ドック検診助成金交付規則 平成14年3月12日 規則第4号 (趣旨) 第1条 この規則は、早期発見早期治療により健康維持管理を図り、健康長寿の村を目指すため、検診費用の一部を助成することに関し必要な事項",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000367.html",
    "sourceName": "新庄村人間ドック検診助成金交付規則"
  },
  {
    "slug": "okayama-official-004-088-2026",
    "title": "新庄村 新庄村法定外予防接種費の助成に関する要綱",
    "organization": "新庄村",
    "maxAmount": "1人1回につき上限1,621円",
    "maxAmountNum": 1621,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和2年10月1日 交付する",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000525.html",
    "sourceName": "新庄村法定外予防接種費の助成に関する要綱"
  },
  {
    "slug": "okayama-official-004-089-2026",
    "title": "新庄村 新庄村不妊治療費及び不育症治療費助成金交付要綱",
    "organization": "新庄村",
    "maxAmount": "年額20万円",
    "maxAmountNum": 200000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年12月9日 交付要綱 ○新庄村不妊治療費及び不育症治療費助成金交付要綱 令和7年12月9日 告示第133号 (目的) 第1条 この要綱は、不妊又は不育症の治療を受けている夫婦の経済的負担を軽減し、少子化対策の充実を図ることを目的とするた",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000790.html",
    "sourceName": "新庄村不妊治療費及び不育症治療費助成金交付要綱"
  },
  {
    "slug": "okayama-official-004-090-2026",
    "title": "新庄村 新庄村骨髄・末梢血幹細胞ドナー等助成金交付要綱",
    "organization": "新庄村",
    "maxAmount": "5,000円を限度",
    "maxAmountNum": 5000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "新庄村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和6年11月25日 交付要綱 ○新庄村骨髄・末梢血幹細胞ドナー等助成金交付要綱 平成29年3月22日 告示第55号 (趣旨) 第1条 この要綱は、骨髄・末梢血幹細胞 (以下「骨髄等」という",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000628.html",
    "sourceName": "新庄村骨髄・末梢血幹細胞ドナー等助成金交付要綱"
  },
  {
    "slug": "okayama-official-004-091-2026",
    "title": "新庄村 新庄村がん患者アピアランスサポート事業助成金交付要綱",
    "organization": "新庄村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "新庄村内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和6年10月1日 交付要綱 ○新庄村がん患者アピアランスサポート事業助成金交付要綱 令和6年10月1日 告示第154号 (趣旨) 第1条 がん治療によりアピアランス (外見) の変化が生じた者又は生じるおそれがある者に対し、それらの者の社会活",
    "officialUrl": "http://www.vill.shinjo.okayama.jp/reiki_int/reiki_honbun/m255RG00000769.html",
    "sourceName": "新庄村がん患者アピアランスサポート事業助成金交付要綱"
  }
];
