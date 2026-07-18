const kagoshimaOfficial001Grants: Array<{
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
    "slug": "kagoshima-official-001-001-2026",
    "title": "鹿児島県 災害を受けられた方に対する県税の軽減措置など",
    "organization": "鹿児島県",
    "maxAmount": "最大18,000円",
    "maxAmountNum": 18000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島県内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "期限の延長、徴収を猶予するなどの方法があります",
    "officialUrl": "https://www.pref.kagoshima.jp/ab07/kurashi-kankyo/zei/info/zei.html",
    "sourceName": "災害を受けられた方に対する県税の軽減措置など"
  },
  {
    "slug": "kagoshima-official-001-002-2026",
    "title": "鹿児島県 身体障害者手帳等以外の自動車税の減免・免除",
    "organization": "鹿児島県",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "鹿児島県内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請する場合に使用します",
    "officialUrl": "https://www.pref.kagoshima.jp/ab07/kurashi-kankyo/zei/info/genmenmenjyo.html",
    "sourceName": "身体障害者手帳等以外の自動車税の減免・免除"
  },
  {
    "slug": "kagoshima-official-001-003-2026",
    "title": "鹿児島県 身体障害者等に対する自動車税の減免",
    "organization": "鹿児島県",
    "maxAmount": "上限は、年税額45,000円",
    "maxAmountNum": 45000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "鹿児島県内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請は、下記をご覧ください",
    "officialUrl": "https://www.pref.kagoshima.jp/ab07/kurashi-kankyo/zei/info/genmen4.html",
    "sourceName": "身体障害者等に対する自動車税の減免"
  },
  {
    "slug": "kagoshima-official-001-004-2026",
    "title": "鹿児島県 水産業に関する融資制度",
    "organization": "鹿児島県",
    "maxAmount": "公式ページ記載の貸付額・利子補給額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島県内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付要綱」、「鹿児島県漁業近代化資金制度実施要領」） 2 借 受資格者 (1)漁業を営む個人・法人 (2)漁業生産組合 (3)水産加工業を営む個人・法人 (4)漁業協同組合、同連合会 (5)水産加工業協同組合 (6)漁業者等が主たる構成員となっ",
    "officialUrl": "https://www.pref.kagoshima.jp/af05/sangyo-rodo/rinsui/zyosei/suisangyo/07001002_40470.html",
    "sourceName": "水産業に関する融資制度"
  },
  {
    "slug": "kagoshima-official-001-005-2026",
    "title": "鹿児島県 買物弱者対策に取り組む市町村への支援",
    "organization": "鹿児島県",
    "maxAmount": "上限50万円",
    "maxAmountNum": 500000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿児島県内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月20日 募集期間：令和8年5月20日（水曜日）～令和8年11月6日（金曜日） 4 交 付要綱等 買物弱者支援促進事業費補助金交付要綱（PDF：98KB） 買物弱者支援促進事業費補助金交付要綱様式（WORD：27KB） 買物弱者支援促進事業実施要領（PD",
    "officialUrl": "https://www.pref.kagoshima.jp/ac06/kaimono-shien.html",
    "sourceName": "買物弱者対策に取り組む市町村への支援"
  },
  {
    "slug": "kagoshima-official-001-006-2026",
    "title": "鹿児島県 令和8年度かごしま中小企業DX推進事業費補助金",
    "organization": "鹿児島県",
    "maxAmount": "上限額補助率：対象経費の3分の2以内補助上限額：400万円",
    "maxAmountNum": 4000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島県内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年7月17日 募集についてのご案内 「令和8年度かごしま中小企業DX推進事業費補助金」の2次募集を開始します",
    "officialUrl": "https://www.pref.kagoshima.jp/af22/sangyo-rodo/2026_dx_hojokin.html",
    "sourceName": "令和8年度かごしま中小企業DX推進事業費補助金"
  },
  {
    "slug": "kagoshima-official-001-007-2026",
    "title": "鹿児島市 移住・就業等支援事業（移住支援金制度）",
    "organization": "鹿児島市",
    "maxAmount": "支給額単身者の場合：60万円",
    "maxAmountNum": 600000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "鹿児島市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "令和8年6月30日 申請状況（必ずご一読ください） 令和8年6月30日（火曜日）時点で予算の8割を超えています",
    "officialUrl": "https://www.city.kagoshima.lg.jp/koyosuishin/sangyo/koyo/kohoshi/ijushienkin.html",
    "sourceName": "移住・就業等支援事業（移住支援金制度）"
  },
  {
    "slug": "kagoshima-official-001-008-2026",
    "title": "鹿児島市 個人住民税（市民税・県民税）の手続き・減免",
    "organization": "鹿児島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "個人住民税（市民税・県民税）の手続き・減免 納税義務者が死亡または出国する場合の手続き 租税条約の適用 個人住民税（市民税・県民税）・森林環境税の減免 個人住民税（市民税・県民税） 個人住民税（市民税・県民税）の概要 個人住民税（市民税・県",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kurashi/zekin/shize/kojinjuminzeitetuduki.html",
    "sourceName": "個人住民税（市民税・県民税）の手続き・減免"
  },
  {
    "slug": "kagoshima-official-001-009-2026",
    "title": "鹿児島市 後期高齢者医療保険料の減免と一部負担金の減免",
    "organization": "鹿児島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "鹿児島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請により保険料が減免になる場合があります",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kenkofukushi/chouju/iryo/kurashi/hoken/hoken/kore/genmen.html",
    "sourceName": "後期高齢者医療保険料の減免と一部負担金の減免"
  },
  {
    "slug": "kagoshima-official-001-010-2026",
    "title": "鹿児島市 市税の減免",
    "organization": "鹿児島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "市税の減免 災害による損害を受けた場合や、生活扶助を受けている場合など特別な事情がある場合は、その状況に応じて減免されることがあります。お早めにご相談ください。 税の種類 主な要件 個人市民税 生活扶助などを受けている場合 一定規模以上の災",
    "officialUrl": "https://www.city.kagoshima.lg.jp/soumu/zeimu/shiminzei/kurashi/zekin/shize/genmen.html",
    "sourceName": "市税の減免"
  },
  {
    "slug": "kagoshima-official-001-011-2026",
    "title": "鹿児島市 市民福祉手当（遺児等修学手当）",
    "organization": "鹿児島市",
    "maxAmount": "1人につき年額24,000円",
    "maxAmountNum": 24000,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "令和8年4月1日 支給されます",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/kodomofuku/kosodate/kosodate/teate/shimin.html",
    "sourceName": "市民福祉手当（遺児等修学手当）"
  },
  {
    "slug": "kagoshima-official-001-012-2026",
    "title": "鹿児島市 児童手当",
    "organization": "鹿児島市",
    "maxAmount": "月額児童年齢児童一人当たりの月額3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給することで、家庭等における生活の安定に寄与するとともに、次代の社会を担う児童の健やかな成長に資することを目的にしています",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/kodomofuku/kosodate/kosodate/teate/jido.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "kagoshima-official-001-013-2026",
    "title": "鹿児島市 児童扶養手当",
    "organization": "鹿児島市",
    "maxAmount": "1人2人3人全部支給月額48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和6年11月1日 支給されない場合 父又は母が婚姻しているとき（内縁関係、同居など婚姻の届をしていないが、事実上婚姻関係と同様の場合も含みます） 児童が里親に委託されたり、児童福祉施設等（通園施設は除く）に入所しているとき 児童や父や母、又は養育者が日本国内に住",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/kodomofuku/kosodate/kosodate/teate/fuyo.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kagoshima-official-001-014-2026",
    "title": "鹿児島市 自立支援医療（育成医療）",
    "organization": "鹿児島市",
    "maxAmount": "上限月額0円",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和7年12月1日 申請にはマイナンバーが必要です",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/boshihoken/kosodate/ninshin/teate/jiritsu/index.html",
    "sourceName": "自立支援医療（育成医療）"
  },
  {
    "slug": "kagoshima-official-001-015-2026",
    "title": "鹿児島市 小児慢性特定疾病医療費助成事業",
    "organization": "鹿児島市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "鹿児島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "令和7年4月1日 申請はできません",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/boshihoken/kosodate/ninshin/teate/shoni/index.html",
    "sourceName": "小児慢性特定疾病医療費助成事業"
  },
  {
    "slug": "kagoshima-official-001-016-2026",
    "title": "鹿児島市 小児慢性特定疾病児日常生活用具給付事業",
    "organization": "鹿児島市",
    "maxAmount": "年額3,000円",
    "maxAmountNum": 3000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和2年4月1日 交付を受け、在宅療養をしている児童に対し、車いすや特殊寝台等の日常生活用具を給付します",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/boshihoken/kosodate/ninshin/teate/shoni/seikatuyogu.html",
    "sourceName": "小児慢性特定疾病児日常生活用具給付事業"
  },
  {
    "slug": "kagoshima-official-001-017-2026",
    "title": "鹿児島市 中小企業者（製造業者）等への一部助成「メイドインかごしま」支援事業",
    "organization": "鹿児島市",
    "maxAmount": "限度額補助対象事業補助対象経費製品開発促進設備導入事業個別企業30万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "受付は先着順です",
    "officialUrl": "https://www.city.kagoshima.lg.jp/san-shien/sangyo/shokogyo/sezogyonado/meidoin2019.html",
    "sourceName": "中小企業者（製造業者）等への一部助成「メイドインかごしま」支援事業"
  },
  {
    "slug": "kagoshima-official-001-018-2026",
    "title": "鹿児島市 特別児童扶養手当",
    "organization": "鹿児島市",
    "maxAmount": "1人あたり）1級（重度障害児）月額58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給されない場合 児童や、父もしくは母、または養育者が 日本国内に住んでいな い とき 児童が、障害を支給事由とする公的年金を受けることができ る とき（児童扶養手当、児童手当、障害児福祉手当は年金ではありませんので併給できます",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/kodomofuku/kosodate/kosodate/teate/tokubetsu.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "kagoshima-official-001-019-2026",
    "title": "鹿児島市 妊娠高血圧症候群（妊娠中毒症）等に対する助成",
    "organization": "鹿児島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿児島市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "支給基準入院日数は21日を超える入院の場合21日が限度）の入院による治療を受けたとき、医療費の一部が助成されます",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/boshihoken/kosodate/kosodate/teate/jose/index.html",
    "sourceName": "妊娠高血圧症候群（妊娠中毒症）等に対する助成"
  },
  {
    "slug": "kagoshima-official-001-020-2026",
    "title": "鹿児島市 妊婦健診費用の払い戻し（県外で受診する場合）",
    "organization": "鹿児島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "鹿児島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請を行ってください",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/boshihoken/kosodate/kosodate/teate/haraimodoshi/haraimodohi.html",
    "sourceName": "妊婦健診費用の払い戻し（県外で受診する場合）"
  },
  {
    "slug": "kagoshima-official-001-021-2026",
    "title": "鹿児島市 合併処理浄化槽設置費補助金交付制度",
    "organization": "鹿児島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿児島市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付制度",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kankyo/kankyo/hozen/kurashi/sekatsukankyo/joka/hojo.html",
    "sourceName": "合併処理浄化槽設置費補助金交付制度"
  },
  {
    "slug": "kagoshima-official-001-022-2026",
    "title": "鹿児島市 母子家庭等自立支援給付金事業",
    "organization": "鹿児島市",
    "maxAmount": "支給額受講料の60％相当額（上限20万円",
    "maxAmountNum": 200000,
    "category": "childcare",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "鹿児島市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和6年8月30日 支給します",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/kodomofuku/kosodate/kosodate/hitorioya/jigyo.html",
    "sourceName": "母子家庭等自立支援給付金事業"
  },
  {
    "slug": "kagoshima-official-001-023-2026",
    "title": "鹿児島市 未熟児養育医療",
    "organization": "鹿児島市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "鹿児島市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "申請にはマイナンバーが必要です",
    "officialUrl": "https://www.city.kagoshima.lg.jp/kosodate/boshihoken/kosodate/ninshin/teate/mijukuji/index.html",
    "sourceName": "未熟児養育医療"
  },
  {
    "slug": "kagoshima-official-001-024-2026",
    "title": "鹿屋市 チャイルドシートの無料貸出",
    "organization": "鹿屋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿屋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和8年7月8日 申請者の署名でない場合・・・申請者の印鑑 申請者と運転される方が異なる場合・・・申請者の身分証明書 スマートフォンで申請書の事前作成ができます！ オンラインフォームにより記入事項の事前の入力・送信が可能です",
    "officialUrl": "https://www.city.kanoya.lg.jp/kokanri/kyoiku/kosodate/shien/childseat.html",
    "sourceName": "チャイルドシートの無料貸出"
  },
  {
    "slug": "kagoshima-official-001-025-2026",
    "title": "鹿屋市 移動式赤ちゃんの駅（テント等）の無料貸出",
    "organization": "鹿屋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿屋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請 鹿屋市移動式赤ちゃんの駅貸出申請書（様式第1号）に必要な書類を添付しこども政策課に提出してください",
    "officialUrl": "https://www.city.kanoya.lg.jp/kokanri/kyoiku/kosodate/sonohoka/muryokashidashi.html",
    "sourceName": "移動式赤ちゃんの駅（テント等）の無料貸出"
  },
  {
    "slug": "kagoshima-official-001-026-2026",
    "title": "鹿屋市 軽自動車税減免",
    "organization": "鹿屋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月1日 受付場所は本庁税務課及び各総合支所住民サービス課窓口です",
    "officialUrl": "https://www.city.kanoya.lg.jp/sizei/kurashi/zekin/kejidoshaze/genmen.html",
    "sourceName": "軽自動車税減免"
  },
  {
    "slug": "kagoshima-official-001-027-2026",
    "title": "鹿屋市 児童手当",
    "organization": "鹿屋市",
    "maxAmount": "支給額児童の年齢児童手当の額（1人当たり月額）3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和6年10月1日 支給日について 令和6年10月1日の児童手当法改正に伴い、支給月が変更されました",
    "officialUrl": "https://www.city.kanoya.lg.jp/jidou/kyoiku/kosodate/teate/jidoteate.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "kagoshima-official-001-028-2026",
    "title": "鹿屋市 児童扶養手当",
    "organization": "鹿屋市",
    "maxAmount": "支給額令和8年4月～全部支給：月額48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "令和7年4月1日 支給されます",
    "officialUrl": "https://www.city.kanoya.lg.jp/jidou/kyoiku/kosodate/teate/jidofuyoteate.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kagoshima-official-001-029-2026",
    "title": "鹿屋市 鹿屋市かわいい孫への贈り物事業",
    "organization": "鹿屋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年7月10日 交付します",
    "officialUrl": "https://www.city.kanoya.lg.jp/kokanri/kyoiku/kosodate/sonohoka/okurimono.html",
    "sourceName": "鹿屋市かわいい孫への贈り物事業"
  },
  {
    "slug": "kagoshima-official-001-030-2026",
    "title": "鹿屋市 鹿屋市工場等立地促進補助金",
    "organization": "鹿屋市",
    "maxAmount": "限度額投資区分対象業種工場等用地取得費補助金30％2,000万～1億円以内新設・増設製造業、流通業、情報通信業、研究開発施設雇用促進補助金20～60万円",
    "maxAmountNum": 600000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿屋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請手続きについて（フロー図）（PDF：123KB） PDF形式のファイルをご覧いただく場合には、Adobe Acrobat Readerが必要です",
    "officialUrl": "https://www.city.kanoya.lg.jp/kigyou/sangyo/shokogyo/kigyoyuchi/sokushinhojokin.html",
    "sourceName": "鹿屋市工場等立地促進補助金"
  },
  {
    "slug": "kagoshima-official-001-031-2026",
    "title": "鹿屋市 鹿屋市商品開発支援事業補助金",
    "organization": "鹿屋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和8年7月31日 交付を受けていないこと （※1）事前相談とは、支援プログラムを受講する前に、商品開発等の計画について相談することです",
    "officialUrl": "https://www.city.kanoya.lg.jp/syokunou/sangyo/shokogyo/6jisangyo/urerusyouhindukuri.html",
    "sourceName": "鹿屋市商品開発支援事業補助金"
  },
  {
    "slug": "kagoshima-official-001-032-2026",
    "title": "鹿屋市 鹿屋市中小企業資金保証料補助金",
    "organization": "鹿屋市",
    "maxAmount": "上限：1年度あたり30万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和6年12月31日 申請 申請方法 申請書類を加入している鹿屋商工会議所又はかのや市商工会へ提出してください",
    "officialUrl": "https://www.city.kanoya.lg.jp/syoukoushinkou/sangyo/shokogyo/hojokin/shikinhoshoryo.html",
    "sourceName": "鹿屋市中小企業資金保証料補助金"
  },
  {
    "slug": "kagoshima-official-001-033-2026",
    "title": "鹿屋市 鹿屋市中小企業資金利子補給金",
    "organization": "鹿屋市",
    "maxAmount": "10万円まで",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "令和7年1月15日 申請する場合、上限額を引き上げます！ 補給対象者 以下を全て満たす者が対象となります",
    "officialUrl": "https://www.city.kanoya.lg.jp/syoukoushinkou/sangyo/shokogyo/hojokin/shikinrishi.html",
    "sourceName": "鹿屋市中小企業資金利子補給金"
  },
  {
    "slug": "kagoshima-official-001-034-2026",
    "title": "鹿屋市 障がい者（児）手当",
    "organization": "鹿屋市",
    "maxAmount": "所得・対象区分に応じて手当・給付金等を支給",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 募集情報 オンライン サービス 公共施設 検索 施設予約 システム 申請書事前 作成システム 閉じる ホーム &gt; 健康・福祉 &gt; 福祉 &gt; 障がい者福祉 &gt; 手当について ツイート 更新日：2026年4月1日 ここから本",
    "officialUrl": "https://www.city.kanoya.lg.jp/syougai/kenko/fukushi/sonota/teate.html",
    "sourceName": "障がい者（児）手当"
  },
  {
    "slug": "kagoshima-official-001-035-2026",
    "title": "鹿屋市 就学援助費",
    "organization": "鹿屋市",
    "maxAmount": "上限額22,690円",
    "maxAmountNum": 22690,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "令和7年1月1日 支給対象外です",
    "officialUrl": "https://www.city.kanoya.lg.jp/gakumu/kyoiku/kyoiku/shiensedo/enjo.html",
    "sourceName": "就学援助費"
  },
  {
    "slug": "kagoshima-official-001-036-2026",
    "title": "鹿屋市 大隅地域で助産師を目指す学生への奨学金制度",
    "organization": "鹿屋市",
    "maxAmount": "月額15万円",
    "maxAmountNum": 150000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請書類は、鹿屋市役所健康増進課（鹿屋市保健相談センター）に持参又は郵送で提出してください",
    "officialUrl": "https://www.city.kanoya.lg.jp/kenkou/kannri/josanshi_syougakukin.html",
    "sourceName": "大隅地域で助産師を目指す学生への奨学金制度"
  },
  {
    "slug": "kagoshima-official-001-037-2026",
    "title": "鹿屋市 妊産婦健診等",
    "organization": "鹿屋市",
    "maxAmount": "上限3,000円",
    "maxAmountNum": 3000,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "鹿屋市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月1日 交付時に受診票綴をお渡ししますので、病院での受診の際は、必ずご持参ください",
    "officialUrl": "https://www.city.kanoya.lg.jp/boshi/kenko/ninsanpu_nyuyoji.html",
    "sourceName": "妊産婦健診等"
  },
  {
    "slug": "kagoshima-official-001-038-2026",
    "title": "鹿屋市 繁殖雌牛の頭数を増やしたいときは",
    "organization": "鹿屋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "鹿屋市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請は貸付を希望する月の前月末日まで 貸付内容 肉用牛生産基盤の確保を図り、生産農家の経営安定に資するため、繁殖雌牛の貸付を行う",
    "officialUrl": "https://www.city.kanoya.lg.jp/chikushin/sangyo/chikusan/tousuu.html",
    "sourceName": "繁殖雌牛の頭数を増やしたいときは"
  },
  {
    "slug": "kagoshima-official-001-039-2026",
    "title": "鹿屋市 母子父子寡婦福祉資金貸付金制度",
    "organization": "鹿屋市",
    "maxAmount": "公式ページ記載の貸付額・利子補給額・貸付条件に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "鹿屋市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請 貸付申請の前には事前に相談が必要です",
    "officialUrl": "https://www.city.kanoya.lg.jp/jidou/kyoiku/kosodate/shien/shikin.html",
    "sourceName": "母子父子寡婦福祉資金貸付金制度"
  },
  {
    "slug": "kagoshima-official-001-040-2026",
    "title": "鹿屋市 未熟児の養育医療給付制度",
    "organization": "鹿屋市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "鹿屋市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年6月1日 申請後、不承認になる場合もあります",
    "officialUrl": "https://www.city.kanoya.lg.jp/kenkan/kyoiku/kosodate/shien/mijukuji.html",
    "sourceName": "未熟児の養育医療給付制度"
  },
  {
    "slug": "kagoshima-official-001-041-2026",
    "title": "鹿屋市 幼児教育・保育の無償化",
    "organization": "鹿屋市",
    "maxAmount": "月額上限25,700円",
    "maxAmountNum": 25700,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "鹿屋市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年6月1日 請求について 上記の対象となる施設・事業の請求の案内となります",
    "officialUrl": "https://www.city.kanoya.lg.jp/hoiku/kyoiku/kosodate/shisetsu/mushoka.html",
    "sourceName": "幼児教育・保育の無償化"
  },
  {
    "slug": "kagoshima-official-001-042-2026",
    "title": "枕崎市 Ｕ・Iターン移住者の住宅取得への補助制度",
    "organization": "枕崎市",
    "maxAmount": "上限70万円",
    "maxAmountNum": 700000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "枕崎市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請日において当該転入した日から起算して５年が経過していない者",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/ijyu/11314.html",
    "sourceName": "Ｕ・Iターン移住者の住宅取得への補助制度"
  },
  {
    "slug": "kagoshima-official-001-043-2026",
    "title": "枕崎市 ひとり親家庭医療費",
    "organization": "枕崎市",
    "maxAmount": "限度額０人２，０８０，０００円",
    "maxAmountNum": 2080000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "枕崎市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2024年11月1日 支給の対象となります",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/kosodate/5330.html",
    "sourceName": "ひとり親家庭医療費"
  },
  {
    "slug": "kagoshima-official-001-044-2026",
    "title": "枕崎市 移住支援金制度",
    "organization": "枕崎市",
    "maxAmount": "公式ページ記載の支援額・奨励金額に従う",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "枕崎市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2021年4月1日 交付します",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/ijyu/14432.html",
    "sourceName": "移住支援金制度"
  },
  {
    "slug": "kagoshima-official-001-045-2026",
    "title": "枕崎市 空き家バンク利用促進事業補助金",
    "organization": "枕崎市",
    "maxAmount": "上限額10万円",
    "maxAmountNum": 100000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "枕崎市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2021年7月26日 交付を受けた日から起算して２年以上、交付の対象となった物件を空き家バンクに登録する意思がある所有者等であって、次のいずれかに該当するもの",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/ijyu/15647.html",
    "sourceName": "空き家バンク利用促進事業補助金"
  },
  {
    "slug": "kagoshima-official-001-046-2026",
    "title": "枕崎市 更生医療と育成医療",
    "organization": "枕崎市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "枕崎市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年4月1日 更生医療と育成医療 印刷用ページを表示する 掲載日：2025年4月1日更新 更生医療(18歳以上)と育成医療(18歳未満) 手術などによって障害が軽減または除去され、機能が回復するような場合、更生医療や育成医療が給付されます。更生医療を受け",
    "officialUrl": "https://www.city.makurazaki.lg.jp/soshiki/fukushi/5329.html",
    "sourceName": "更生医療と育成医療"
  },
  {
    "slug": "kagoshima-official-001-047-2026",
    "title": "枕崎市 子ども医療費給付制度",
    "organization": "枕崎市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "枕崎市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年3月31日 交付 申請手続きについて 子ども医療費給付を受けるには、申請手続きが必要です",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/kosodate/21570.html",
    "sourceName": "子ども医療費給付制度"
  },
  {
    "slug": "kagoshima-official-001-048-2026",
    "title": "枕崎市 就学援助制度",
    "organization": "枕崎市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "枕崎市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年3月23日 支給するものです",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/kosodate/416.html",
    "sourceName": "就学援助制度"
  },
  {
    "slug": "kagoshima-official-001-049-2026",
    "title": "枕崎市 重度心身障害者医療費",
    "organization": "枕崎市",
    "maxAmount": "限度額表扶養親族の人数本人配偶者等所得判定額収入額所得判定額収入額03,661,000円",
    "maxAmountNum": 3661000,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "枕崎市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年8月1日 支給額を控除し、助成します",
    "officialUrl": "https://www.city.makurazaki.lg.jp/soshiki/fukushi/5328.html",
    "sourceName": "重度心身障害者医療費"
  },
  {
    "slug": "kagoshima-official-001-050-2026",
    "title": "枕崎市 特別支援教育就学奨励制度",
    "organization": "枕崎市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "枕崎市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2023年9月13日 申請書（調書）を対象となる保護者に配布しています",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/kosodate/5348.html",
    "sourceName": "特別支援教育就学奨励制度"
  },
  {
    "slug": "kagoshima-official-001-051-2026",
    "title": "枕崎市 枕崎市産後ケア事業",
    "organization": "枕崎市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "枕崎市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月22日 申請について 【利用の手順】 (1) 希望の施設に連絡し、予約を行う",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/kosodate/22221.html",
    "sourceName": "枕崎市産後ケア事業"
  },
  {
    "slug": "kagoshima-official-001-052-2026",
    "title": "枕崎市 枕崎市奨学金返還支援補助金",
    "organization": "枕崎市",
    "maxAmount": "20万円を限度",
    "maxAmountNum": 200000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "枕崎市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年4月1日 交付します",
    "officialUrl": "https://www.city.makurazaki.lg.jp/soshiki/kyousou/23790.html",
    "sourceName": "枕崎市奨学金返還支援補助金"
  },
  {
    "slug": "kagoshima-official-001-053-2026",
    "title": "枕崎市 枕崎市不妊治療費助成事業",
    "organization": "枕崎市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "枕崎市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2023年12月22日 支給されるときはその額を除きます",
    "officialUrl": "https://www.city.makurazaki.lg.jp/site/kosodate/19832.html",
    "sourceName": "枕崎市不妊治療費助成事業"
  },
  {
    "slug": "kagoshima-official-001-054-2026",
    "title": "阿久根市 がけ地近接等危険住宅移転事業補助金",
    "organization": "阿久根市",
    "maxAmount": "補助金額補助の内容補助限度額危険住宅の解体費に対する補助975,000円",
    "maxAmountNum": 975000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "阿久根市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2024年04月01日 交付する事業です",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/sumai_tochi/1868.html",
    "sourceName": "がけ地近接等危険住宅移転事業補助金"
  },
  {
    "slug": "kagoshima-official-001-055-2026",
    "title": "阿久根市 阿久根市移住促進レンタカー補助金",
    "organization": "阿久根市",
    "maxAmount": "上限額5万円",
    "maxAmountNum": 50000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年09月29日 交付します",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/2/6337.html",
    "sourceName": "阿久根市移住促進レンタカー補助金"
  },
  {
    "slug": "kagoshima-official-001-056-2026",
    "title": "阿久根市 阿久根市空き家・空き店舗改修事業補助金",
    "organization": "阿久根市",
    "maxAmount": "上限額補助の対象経費の3分の2（上限額200万円",
    "maxAmountNum": 2000000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "阿久根市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2025年09月08日 交付します",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/2/5047.html",
    "sourceName": "阿久根市空き家・空き店舗改修事業補助金"
  },
  {
    "slug": "kagoshima-official-001-057-2026",
    "title": "阿久根市 阿久根市空き家バンク利用促進補助金",
    "organization": "阿久根市",
    "maxAmount": "上限額30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 交付します",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/2/5917.html",
    "sourceName": "阿久根市空き家バンク利用促進補助金"
  },
  {
    "slug": "kagoshima-official-001-058-2026",
    "title": "阿久根市 阿久根市奨学金制度",
    "organization": "阿久根市",
    "maxAmount": "月額）9千円入学一時金なし高等専門学校、専門学校、職業訓練短期大学校奨学金一覧修学資金（月額）1万8千円入学一時金80万円",
    "maxAmountNum": 800000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年07月10日 募集はおおむね1月上旬～2月中旬、二次募集は7月中旬～8月上旬におこないます",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/1397.html",
    "sourceName": "阿久根市奨学金制度"
  },
  {
    "slug": "kagoshima-official-001-059-2026",
    "title": "阿久根市 管理不全空家等解体撤去事業補助金",
    "organization": "阿久根市",
    "maxAmount": "補助金額解体撤去に要する経費（30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "阿久根市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年05月21日 交付しています",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/sumai_tochi/josei_hojo/6929.html",
    "sourceName": "管理不全空家等解体撤去事業補助金"
  },
  {
    "slug": "kagoshima-official-001-060-2026",
    "title": "阿久根市 危険空家等解体撤去事業補助金",
    "organization": "阿久根市",
    "maxAmount": "補助金額解体撤去に要する経費（30万円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "阿久根市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年05月20日 交付しています",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/sumai_tochi/josei_hojo/1873.html",
    "sourceName": "危険空家等解体撤去事業補助金"
  },
  {
    "slug": "kagoshima-official-001-061-2026",
    "title": "阿久根市 給付型奨学金制度",
    "organization": "阿久根市",
    "maxAmount": "1人当たり年間12万円",
    "maxAmountNum": 120000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2025年02月07日 提出していただきます",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/5613.html",
    "sourceName": "給付型奨学金制度"
  },
  {
    "slug": "kagoshima-official-001-062-2026",
    "title": "阿久根市 軽自動車税の減免",
    "organization": "阿久根市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年05月04日 申請窓口 税務課課税係（9番窓口） 三笠支所 申請期限 軽自動車税の納期限の日までに申請してください",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/25/zeikin/keijidoshazei/1668.html",
    "sourceName": "軽自動車税の減免"
  },
  {
    "slug": "kagoshima-official-001-063-2026",
    "title": "阿久根市 結婚新生活支援事業補助金",
    "organization": "阿久根市",
    "maxAmount": "補助金額上限30万円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年05月13日 申請を希望されるかたは、 令和9年2月19日（金曜日）までに 必ず一度ご相談ください",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/deai_kekkon/6882.html",
    "sourceName": "結婚新生活支援事業補助金"
  },
  {
    "slug": "kagoshima-official-001-064-2026",
    "title": "阿久根市 高等職業訓練促進給付金等事業",
    "organization": "阿久根市",
    "maxAmount": "支給額項目市町村民税非課税世帯市町村民税課税世帯高等職業訓練促進費100,000円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2024年05月01日 支給します",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/hitorioya/hitorioyakateiziritsusienkyuhukinzigyo/5003.html",
    "sourceName": "高等職業訓練促進給付金等事業"
  },
  {
    "slug": "kagoshima-official-001-065-2026",
    "title": "阿久根市 児童手当",
    "organization": "阿久根市",
    "maxAmount": "支給額一覧3歳未満15,000円",
    "maxAmountNum": 15000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年06月11日 支給される手当です",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/1934.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "kagoshima-official-001-066-2026",
    "title": "阿久根市 児童扶養手当",
    "organization": "阿久根市",
    "maxAmount": "限度額（令和6年11月改正）扶養親族などの数全部支給の所得制限限度額一部支給の所得制限限度額0人690,000円",
    "maxAmountNum": 690000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年05月07日 支給される手当です",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/1935.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kagoshima-official-001-067-2026",
    "title": "阿久根市 地域色(ちいきいろ)づくり事業補助金",
    "organization": "阿久根市",
    "maxAmount": "限度額10万円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の事業者・就労者・創業者・農業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年03月16日 交付しています",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/shiminkatsudo/1362.html",
    "sourceName": "地域色(ちいきいろ)づくり事業補助金"
  },
  {
    "slug": "kagoshima-official-001-068-2026",
    "title": "阿久根市 地元企業就労者賃貸住宅家賃支援補助金",
    "organization": "阿久根市",
    "maxAmount": "上限月額2万円",
    "maxAmountNum": 20000,
    "category": "housing",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "阿久根市内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "2026年03月31日 交付します",
    "officialUrl": "https://www.city.akune.lg.jp/kurashi_tetsuzuki/2/3195.html",
    "sourceName": "地元企業就労者賃貸住宅家賃支援補助金"
  },
  {
    "slug": "kagoshima-official-001-069-2026",
    "title": "阿久根市 特別児童扶養手当",
    "organization": "阿久根市",
    "maxAmount": "支給額（月額、1人当たり）月額1人あたりの支給額特別児童扶養手当1級58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年04月01日 支給されます",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/1953.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "kagoshima-official-001-070-2026",
    "title": "阿久根市 妊産婦交通費助成金",
    "organization": "阿久根市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "阿久根市内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年04月10日 交付を受けて、令和8年4月1日以降に出産されたかた 注意 ：市税の滞納がないことが条件です",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/6795.html",
    "sourceName": "妊産婦交通費助成金"
  },
  {
    "slug": "kagoshima-official-001-071-2026",
    "title": "阿久根市 不妊治療等交通費助成金",
    "organization": "阿久根市",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2026年04月10日 支給決定を受けられたかた 助成金額 不妊治療などのため、不妊治療等実施施設までの移動費用のうち、通院10回を限度とした助成対象経費の10分の8を助成します",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/6797.html",
    "sourceName": "不妊治療等交通費助成金"
  },
  {
    "slug": "kagoshima-official-001-072-2026",
    "title": "阿久根市 子ども医療費助成制度",
    "organization": "阿久根市",
    "maxAmount": "医療費・利用料等の自己負担分を助成または無償化",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "阿久根市内で医療・健康支援、税減免等の公式対象要件を満たす方",
    "applicationPeriod": "2025年03月12日 申請が必要です",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/5863.html",
    "sourceName": "子ども医療費助成制度"
  },
  {
    "slug": "kagoshima-official-001-073-2026",
    "title": "阿久根市 濱風ゆめみらい奨学金制度",
    "organization": "阿久根市",
    "maxAmount": "月額）10万円",
    "maxAmountNum": 100000,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "阿久根市内の児童生徒・学生・保護者等で公式要件を満たす方",
    "applicationPeriod": "2026年07月10日 募集はおおむね1月上旬～2月中旬と7月中旬～8月上旬におこないます",
    "officialUrl": "https://www.city.akune.lg.jp/kosodate_kyoiku/teate_josei/1401.html",
    "sourceName": "濱風ゆめみらい奨学金制度"
  }
];
