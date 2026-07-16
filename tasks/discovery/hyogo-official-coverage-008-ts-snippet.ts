const hyogoOfficial008Grants: Array<{
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
    "slug": "hyogo-official-008-001-2026",
    "title": "神河町 JR播但線利用促進補助金",
    "organization": "神河町",
    "maxAmount": "自己負担分または公式ページ記載の額を助成",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "補助対象者 JR播但線の新野駅、寺前駅、長谷駅のいずれかを発着地とし、往復利用する者（町内に住所を有する） 補助対象にならない場合 国、県または他の地方公共団体等から同趣旨の補助金等の交付を受け、または受けようとしているとき 勤務先から旅費等の支給があるとき 定期乗車券の利用により乗車したとき 補助対象者およびその同居家族に町税等（税外収入を含む）の滞納があるとき その他、町長が不適当と認",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002365.html",
    "sourceName": "JR播但線利用促進補助金【令和8年度継続実施】"
  },
  {
    "slug": "hyogo-official-008-002-2026",
    "title": "神河町 特急はまかぜ利用促進補助金",
    "organization": "神河町",
    "maxAmount": "自己負担分または公式ページ記載の額を助成",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "補助対象者 個人（町内に住所を有する） 町民によって構成された4人以上の団体 ※団体は、会則、規約またはこれらに準ずる定めがあるものを基本とします",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002364.html",
    "sourceName": "特急はまかぜ利用促進補助金【令和8年度継続実施】"
  },
  {
    "slug": "hyogo-official-008-003-2026",
    "title": "神河町 遠距離通勤・通学等補助金",
    "organization": "神河町",
    "maxAmount": "自己負担分または公式ページ記載の額を助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "補助対象者 JR播但線の新野駅、寺前駅、長谷駅の各駅を基点とし、片道50km以上の遠距離の勤務先へ通勤する者および遠距離の大学等へ通学する者 JR播但線の利用者が少ない寺前駅から和田山駅間を利用して勤務先へ通勤する者および大学等へ通学する者 ※大学等：学校教育法（昭和22年3月29日法律第26号）に定める大学院、大学、高等専門学校、高等学校、専修学校および各種学校 補助対象にならない場合",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002367.html",
    "sourceName": "遠距離通勤・通学等補助金【令和8年度継続実施】"
  },
  {
    "slug": "hyogo-official-008-004-2026",
    "title": "神河町 宅地開発支援事業補助金",
    "organization": "神河町",
    "maxAmount": "500,000円",
    "maxAmountNum": 500000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "補助対象事業の要件 補助金の対象となる事業は、次の各号に定める要件の全てに該当するものとします",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002034.html",
    "sourceName": "宅地開発支援事業補助金"
  },
  {
    "slug": "hyogo-official-008-005-2026",
    "title": "神河町 児童扶養手当",
    "organization": "神河町",
    "maxAmount": "公式ページ記載の手当額",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "対象となる児童 18歳に達する日以降の最初の3月31日までの間にある児童、または20歳未満で心身に中度（特別児童扶養手当2級に該当する程度）以上の障がいがある児童が次のいずれかに該当するとき ・父母が離婚した後、父または母と生計を同じくしていない児童 ・父または母が死亡した児童・父または母が重度の障がいの状態にある児童 ・父または母の生死が明らかでない児童 ・父または母に1年以上遺",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002300.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "hyogo-official-008-006-2026",
    "title": "神河町 特別児童扶養手当",
    "organization": "神河町",
    "maxAmount": "公式ページ記載の手当額",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "対象となる児童 20歳未満で、身体または精神に障害のある児童",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002302.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "hyogo-official-008-007-2026",
    "title": "神河町 結婚新生活支援事業補助金",
    "organization": "神河町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "対象となる世帯 1.申請の前年度1月1日から申請年度3月31日の間に婚姻届を提出し、受理された世帯であること",
    "applicationPeriod": "令和8年度の公式受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000003002.html",
    "sourceName": "結婚新生活支援事業補助金"
  },
  {
    "slug": "hyogo-official-008-008-2026",
    "title": "神河町 神河町自家消費型住宅用太陽光発電設備等導入補助金",
    "organization": "神河町",
    "maxAmount": "70,000円",
    "maxAmountNum": 70000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "補助対象者 補助対象者は、次の全ての要件に該当する者となります",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000003651.html",
    "sourceName": "神河町自家消費型住宅用太陽光発電設備等導入補助金"
  },
  {
    "slug": "hyogo-official-008-009-2026",
    "title": "神河町 医療費助成制度",
    "organization": "神河町",
    "maxAmount": "保険診療自己負担分など公式ページ記載の額を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing"
    ],
    "eligibility": "対象者 費用負担 備考 自立支援医療 （精神通院医療） 精神疾患の治療のために 継続的な通院治療が必要な方 原則1割負担（世帯の所得に応じ、負担上限額あり） 有効期間は1年間で、有効期間が終了する3ヶ月前から更新手続きができます",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000000229.html",
    "sourceName": "医療費助成制度"
  },
  {
    "slug": "hyogo-official-008-010-2026",
    "title": "神河町 児童手当",
    "organization": "神河町",
    "maxAmount": "公式ページ記載の手当額",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "支給対象者 高校生年代まで（18歳の誕生日後の最初の3月31日まで）の児童を養育している方 2．支給額 支給額 児童の年齢 児童手当の額 （1人当たり月額） 3歳未満 15,000円 （第3子以降は30,000円） 3歳以上 高校生年代まで （18歳年度末まで） 10,000円 （第3子以降は30,000円） ※「第3子以降」とは、大学生年代まで（22歳の誕生日後の最初の3月31日まで",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002078.html",
    "sourceName": "児童手当について"
  },
  {
    "slug": "hyogo-official-008-011-2026",
    "title": "神河町 神河町住まいの耐震化促進事業",
    "organization": "神河町",
    "maxAmount": "200,000円",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "対象に、平成12年から「わが家の耐震改修促進事業」を実施した結果、木造住宅については約80パーセント以上の住宅が耐震性能が不足していることが判明しています",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002946.html",
    "sourceName": "神河町住まいの耐震化促進事業について"
  },
  {
    "slug": "hyogo-official-008-012-2026",
    "title": "神河町 簡易耐震診断推進事業",
    "organization": "神河町",
    "maxAmount": "自己負担分または公式ページ記載の額を助成",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "対象となる住宅 神河町内にあって、昭和56(1981)年5月31日以前に着工し、下記の要件を満たした住宅が対象です",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002948.html",
    "sourceName": "簡易耐震診断推進事業"
  },
  {
    "slug": "hyogo-official-008-013-2026",
    "title": "神河町 神河町創業支援事業補助金",
    "organization": "神河町",
    "maxAmount": "2,000,000円",
    "maxAmountNum": 2000000,
    "category": "employment",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "補助対象者 次に掲げる要件の全てを満たす方を対象とします",
    "applicationPeriod": "令和8年度の公式受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000000363.html",
    "sourceName": "神河町創業支援事業補助金"
  },
  {
    "slug": "hyogo-official-008-014-2026",
    "title": "神河町 空き家等おかたづけ支援事業",
    "organization": "神河町",
    "maxAmount": "200,000円",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "補助対象 補助対象は下記の全てに該当するものとします",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000000410.html",
    "sourceName": "空き家等おかたづけ支援事業"
  },
  {
    "slug": "hyogo-official-008-015-2026",
    "title": "神河町 空き家活用支援事業",
    "organization": "神河町",
    "maxAmount": "公式ページ記載の支援内容",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "対象住宅および助成内容 対象住宅 神河町内にある築20年以上かつ空き家期間が6か月以上の住宅で、浴室・便所・台所のいずれか1つ以上が10年以上更新・改修されていないもの",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002227.html",
    "sourceName": "空き家活用支援事業【令和8年度受付中】"
  },
  {
    "slug": "hyogo-official-008-016-2026",
    "title": "神河町 フリースクール等へ通う児童生徒への支援補助金",
    "organization": "神河町",
    "maxAmount": "10,000円",
    "maxAmountNum": 10000,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "対象者 児童生徒の保護者であって、次の事項をすべて満たしている方を対象とします",
    "applicationPeriod": "期限 1学期 4月1日から7月31日までの利用分 8月末日まで 2学期 8月1日から12月31日までの利用分 翌年1月末日まで 3学期 1月1日から3月31日までの利用分 4月10日まで 申請書類 申請に必要な書類はこちらからダウンロードできます",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000003598.html",
    "sourceName": "フリースクール等へ通う児童生徒への支援補助金について"
  },
  {
    "slug": "hyogo-official-008-017-2026",
    "title": "神河町 妊婦のための支援給付金事業",
    "organization": "神河町",
    "maxAmount": "50,000円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "対象者 申請・届出の時点で神河町に住民票がある方 医療機関等により妊娠したことが確認できた妊婦 ※本給付金においては医療機関により胎児心拍が確認できたことをもって「妊娠」と定義します",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000002274.html",
    "sourceName": "「妊婦のための支援給付金事業」について"
  },
  {
    "slug": "hyogo-official-008-018-2026",
    "title": "神河町 子育て各種手当",
    "organization": "神河町",
    "maxAmount": "公式ページ記載の手当額",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "神河町の公式ページで案内されている対象者・対象事業のうち、子育て各種手当の公式要件を満たす方が対象です。",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.kamikawa.hyogo.jp/0000000253.html",
    "sourceName": "子育て各種手当"
  },
  {
    "slug": "hyogo-official-008-019-2026",
    "title": "太子町 児童手当",
    "organization": "太子町",
    "maxAmount": "公式ページ記載の手当額",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "太子町の公式ページで案内されている対象者・対象事業のうち、児童手当の公式要件を満たす方が対象です。",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.hyogo-taishi.lg.jp/download/kosodate/7009.html",
    "sourceName": "児童手当／兵庫県太子町"
  },
  {
    "slug": "hyogo-official-008-020-2026",
    "title": "太子町 防犯灯設置補助金",
    "organization": "太子町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "太子町の公式ページで案内されている対象者・対象事業のうち、防犯灯設置補助金の公式要件を満たす方が対象です。",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.hyogo-taishi.lg.jp/download/kurasikankyou/6990.html",
    "sourceName": "防犯灯設置補助金／兵庫県太子町"
  },
  {
    "slug": "hyogo-official-008-021-2026",
    "title": "太子町 資源ごみ集団回収運動奨励金",
    "organization": "太子町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "太子町の公式ページで案内されている対象者・対象事業のうち、資源ごみ集団回収運動奨励金の公式要件を満たす方が対象です。",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.hyogo-taishi.lg.jp/download/kurasikankyou/6989.html",
    "sourceName": "資源ごみ集団回収運動奨励金／兵庫県太子町"
  },
  {
    "slug": "hyogo-official-008-022-2026",
    "title": "太子町 軽自動車税減免",
    "organization": "太子町",
    "maxAmount": "公式ページ記載の減免額",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "条件にあてはまらない場合などには減免を受けることはできません",
    "applicationPeriod": "受付期間は、毎年4月2日以降、納期限までです",
    "officialUrl": "https://www.town.hyogo-taishi.lg.jp/faq/hukusikaigoyokuaru/syougaisyayokuaru/1425635938890.html",
    "sourceName": "身体障害者手帳等の交付を受けていますが、軽自動車税は減免されますか。／兵庫県太子町"
  },
  {
    "slug": "hyogo-official-008-023-2026",
    "title": "太子町 災害による介護保険料減免",
    "organization": "太子町",
    "maxAmount": "公式ページ記載の減免額",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "太子町の公式ページで案内されている対象者・対象事業のうち、災害による介護保険料減免の公式要件を満たす方が対象です。",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.hyogo-taishi.lg.jp/faq/hukusikaigoyokuaru/kaigoyokuaru/1426807121801.html",
    "sourceName": "災害にあったのですが、介護保険料の減免はありますか。／兵庫県太子町"
  },
  {
    "slug": "hyogo-official-008-024-2026",
    "title": "太子町 早期経営改善計画策定促進補助金",
    "organization": "太子町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "対象者 経営改善支援センターの早期経営改善計画策定支援を受けた者 太子町に主たる事務所（法人： 本社 /個人事業主：主たる店舗等）を置く中小企業者 町税等の滞納がない者 補助額 経営改善支援センターの支援額の2分の1（千円未満切り捨て） 交付の流れ 町への認定申請の前に経営改善支援センターへの利用申請が必要となります",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.hyogo-taishi.lg.jp/boshu/1616134396940.html",
    "sourceName": "早期経営改善計画策定促進補助金／兵庫県太子町"
  },
  {
    "slug": "hyogo-official-008-025-2026",
    "title": "太子町 雨水タンク設置費用の助成",
    "organization": "太子町",
    "maxAmount": "30,000円",
    "maxAmountNum": 30000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "対象住宅 公共下水道の処理区域の住宅（アパート等の借家を含む） 助成金額 設置費用の2分の1（限度額3万円、千円未満の端数切り捨て） 雨水タンクの容量100リットル以上のものを設置した場合に限る ※必ず購入する前に申請書を提出してください",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.hyogo-taishi.lg.jp/boshu/1430972140510.html",
    "sourceName": "雨水タンク設置費用の助成／兵庫県太子町"
  },
  {
    "slug": "hyogo-official-008-026-2026",
    "title": "上郡町 生活応援給付金",
    "organization": "上郡町",
    "maxAmount": "自己負担分または公式ページ記載の額を助成",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "対象者 基準日（令和8年3月1日） において、上郡町の住民基本台帳に記載されている方 ※ 世帯主が受給権者 となります",
    "applicationPeriod": "期限：令和8年5月8日（金曜日） 支給対象者のうち、世帯主がマイナポータルに公金受取口座を登録していない世帯 手続きが必要です！ 書類に必要事項を記入し、提出をお願いします",
    "officialUrl": "https://www.town.kamigori.hyogo.jp/hojokin_joseikin/7670.html",
    "sourceName": "国の物価高騰対応重点支援地方創生臨時交付金を活用した生活応援給付金を支給します（お急ぎください！）"
  },
  {
    "slug": "hyogo-official-008-027-2026",
    "title": "佐用町 支援制度",
    "organization": "佐用町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "対象者 問い合わせ先 1 出産祝金支給事業 出産祝金として5万円支給 ・出生児と同居する保護者 健康福祉課 0790-82-0661 --> 1 乳幼児等医療費助成事業 町内に住所を有し、0歳～18歳以下の乳幼児等に対し、医療費の一部（医療費の自己負担はなし）を助成する事業 〇医療保険各法のいずれかの被保険者である乳幼児等 〇18歳に達する日以降の最初の3月31日を経過していない乳幼児",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.sayo.lg.jp/cms-sypher/teijyu/useful/help.jsp",
    "sourceName": "支援制度"
  },
  {
    "slug": "hyogo-official-008-028-2026",
    "title": "佐用町 空き家バンク利用手順",
    "organization": "佐用町",
    "maxAmount": "公式ページ記載の支援内容",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "条件を選択して物件検索ボタンを押してください 駅 駅選択 ＪＲ三日月駅 ＪＲ播磨徳久駅 ＪＲ佐用駅 ＪＲ上月駅 智頭急行佐用駅 智頭急行平福駅 智頭急行石井駅 智頭急行久崎駅 価格 下限なし 300万円以上 500万円以上 1,000万円以上 2,000万円以上 3,000万円以上 〜 上限なし 300万円以下 500万円以下 1,000万円以下 2,000万円以下 3,000万円",
    "applicationPeriod": "受付順に交渉優先権を設定いたします",
    "officialUrl": "https://www.town.sayo.lg.jp/cms-sypher/teijyu/akiya/process.jsp",
    "sourceName": "空き家バンク利用手順"
  },
  {
    "slug": "hyogo-official-008-029-2026",
    "title": "佐用町 空き家バンク",
    "organization": "佐用町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "条件を選択して物件検索ボタンを押してください 駅 駅選択 ＪＲ三日月駅 ＪＲ播磨徳久駅 ＪＲ佐用駅 ＪＲ上月駅 智頭急行佐用駅 智頭急行平福駅 智頭急行石井駅 智頭急行久崎駅 価格 下限なし 300万円以上 500万円以上 1,000万円以上 2,000万円以上 3,000万円以上 〜 上限なし 300万円以下 500万円以下 1,000万円以下 2,000万円以下 3,000万円",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.sayo.lg.jp/cms-sypher/teijyu/akiya/index.jsp",
    "sourceName": "空き家バンク"
  },
  {
    "slug": "hyogo-official-008-030-2026",
    "title": "佐用町 佐用定住・移住支援サイト",
    "organization": "佐用町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "佐用町の公式ページで案内されている対象者・対象事業のうち、佐用定住・移住支援サイトの公式要件を満たす方が対象です。",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.sayo.lg.jp/cms-sypher/teijyu/index.jsp",
    "sourceName": "佐用定住・移住支援サイト"
  },
  {
    "slug": "hyogo-official-008-031-2026",
    "title": "香美町 自動通話録音機購入費補助金",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "補助対象者 次のいずれの条件に該当する方 町内に住所があり、65歳以上（令和8年4月1日現在）のみが居住している世帯 町の徴収金等に滞納のない方 町内の業者から自動通話録音機等を購入予定の方 対象となる機器 自動通話録音機 固定電話に外部接続し、悪質な電話による詐欺被害を未然に防ぐことを目的に製造され、自動録音応答機能が付いた機器 自動録音電話機 上記1.と同等内容の機能が内蔵されている固",
    "applicationPeriod": "受付できませんので、必ず事前に申請してください",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/chomintetsuduki/4847.html",
    "sourceName": "自動通話録音機購入費補助金交付申請書"
  },
  {
    "slug": "hyogo-official-008-032-2026",
    "title": "香美町 電動式生ごみ処理機購入費補助金",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "条件に 該当する方 町内に住所を有しており、居住している方 設置した処理機を適正に維持管理できる方 町の徴収金に滞納がない方 （注意）この補助を利用したことがある人は、前回の交付から5年以上経過していること",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/chomintetsuduki/4841.html",
    "sourceName": "電動式生ごみ処理機購入費補助金交付申請書"
  },
  {
    "slug": "hyogo-official-008-033-2026",
    "title": "香美町 介護保険料減免",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の減免額",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "条件 前年1年間の世帯収入が50万円以下、もしくは今年1年間の世帯収入の見込み額が50万円以下",
    "applicationPeriod": "受付後、審査を経て認定結果を通知します",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/fukushikaigoriyousyatetsuduki/4931.html",
    "sourceName": "介護保険料減免申請書（生計困難用・災害及び収入の激減用）"
  },
  {
    "slug": "hyogo-official-008-034-2026",
    "title": "香美町 在宅老人介護手当",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の手当額",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "支給対象者（次のいずれも満たす要介護高齢者の介護者） 香美町内に住所を有する65歳以上の者 「6ヶ月以上寝たきりの状態」又は「認知症」であり、日常生活において常時介護を必要とする状態である者 （要介護認定の要介護4及び要介護5） 香美町重度心身障害者（障害児）介護手当の受給者となっていない者 （注意）所得制限があります",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/fukushitetsuduki/4907.html",
    "sourceName": "在宅老人介護手当認定・更新申請書一式"
  },
  {
    "slug": "hyogo-official-008-035-2026",
    "title": "香美町 重度心身障害者（障害児）介護手当",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の手当額",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "対象者 65才未満の方で居宅で6ヶ月以上常時寝たきりの状態にあり、日常生活において常時介護を必要とする状態にある方 身体障害者手帳 1級又は2級所持者 療育手帳 A判定所持者 （注意）所得制限があります",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/fukushitetsuduki/4909.html",
    "sourceName": "重度心身障害者（障害児）介護手当支給・受給者証更新申請書"
  },
  {
    "slug": "hyogo-official-008-036-2026",
    "title": "香美町 高齢者等住宅改造助成事業補助金",
    "organization": "香美町",
    "maxAmount": "1,000,000円",
    "maxAmountNum": 1000000,
    "category": "nursing",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "対象となり、将来に向けての予防的な工事や老朽化を理由とする工事は対象となりません",
    "applicationPeriod": "受付締切日は毎年度1月末日です ↓ 訪問調査及び審査（住まいの改良相談員と担当者の現地確認） ↓ 補助金交付決定通知書の送付 ↓ 改修工事の実施 ↓ 完了報告 （注意）完了届提出締切日は毎年度2月末日です ↓ 補助金交付決定・補助金の支給 4.対象となる経費 改造経費のうち、住まいの改良相談員が必要と認める範囲 5.補助金の交付額 改造に要した対象となる経費と補",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/fukushitetsuduki/4915.html",
    "sourceName": "高齢者等住宅改造助成事業補助金交付申請書一式"
  },
  {
    "slug": "hyogo-official-008-037-2026",
    "title": "香美町 高齢者世帯等屋根の雪おろし事業補助金",
    "organization": "香美町",
    "maxAmount": "25,000円",
    "maxAmountNum": 25000,
    "category": "nursing",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "対象に、屋根の雪おろし費用の一部について補助金を交付します",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/fukushitetsuduki/4917.html",
    "sourceName": "高齢者世帯等屋根の雪おろし事業補助金交付申請書一式"
  },
  {
    "slug": "hyogo-official-008-038-2026",
    "title": "香美町 介護職員初任者研修等受講者支援事業助成金",
    "organization": "香美町",
    "maxAmount": "100,000円",
    "maxAmountNum": 100000,
    "category": "nursing",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "対象者 次の1.から3.のいずれにも該当する方 対象研修を助成金の交付申請日前1年以内の期間に修了している方 助成金の交付申請時に町内に住所を有している方 町内の介護事業所に就労している方又は就労の予定がある方 町内にある介護事業所に従事する人材を育成・確保し、介護サービスを必要とする皆さんがより充実した環境を得られるよう、町では介護関連研修の受講料の一部を助成します",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/fukushkaigojigyoushatetsuduki/4945.html",
    "sourceName": "介護職員初任者研修等受講者支援事業助成金交付申請書"
  },
  {
    "slug": "hyogo-official-008-039-2026",
    "title": "香美町 ひきこもり者等就労支援事業助成金",
    "organization": "香美町",
    "maxAmount": "25,000円",
    "maxAmountNum": 25000,
    "category": "employment",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "助成対象者 以下のいずれにも該当する事業者 町内に事業所を有すること 香美町福祉職業等紹介所「アクティブステーションかみ」（以下「ASかみ」）に求人登録すること ASかみ求職登録者（ひきこもり者・障害者・生活困窮者等）の就労体験、もしくは、就労を受け入れたこと 香美町福祉職業等紹介所「アクティブステーションかみ」 求人登録 (PDFファイル: 182.9KB) 2.助成内容 就労体験 一人",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/fukushitetsuduki/4920.html",
    "sourceName": "ひきこもり者等就労支援事業助成金申請書一式"
  },
  {
    "slug": "hyogo-official-008-040-2026",
    "title": "香美町 介護職員確保対策事業助成金",
    "organization": "香美町",
    "maxAmount": "20,000円",
    "maxAmountNum": 20000,
    "category": "nursing",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "対象者 引越し費用助成 以下のすべてにあてはまる方 令和3年4月1日から令和9年3月31日までにIターン、Uターンをして町内介護保険事業所に新たに介護職員として就労している方 介護事業所の社会保険に加入し、勤務時間が週32時間以上の方 香美町に住所を有する方 家賃助成 以下のすべてにあてはまる方 令和3年4月1日から令和9年3月31日までにIターン、Uターンをして町内介護保険事業所に新",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/fukushkaigojigyoushatetsuduki/4946.html",
    "sourceName": "介護職員確保対策事業（I・Uターン就労者）助成金交付申請書一式"
  },
  {
    "slug": "hyogo-official-008-041-2026",
    "title": "香美町 ものづくり支援事業補助金",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "補助対象事業 1.新規開発事業 製品、技術、サービス等の新規開発又は大幅な改善に対する事業 2. 調査改良事業 既存の製品、技術、サービス等に関するマーケティング調査、既 成デザイン改善に対する事業 3.市場開拓事業 香美町商工会が選定した製品、技術、サービス等に関する展示会 又は商談会に出展する事業 補助対象者 町内に本店又は本所を有する事業者（個人事業者を含む",
    "applicationPeriod": "募集期間 随時受付 （注意）但し、予算終了により受付を終了とし、事業採択には、香美町商工会で実施の対象セミナー受講を必須条件とします",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kankoshokotetsuduki/4955.html",
    "sourceName": "ものづくり支援事業補助金申請書一式"
  },
  {
    "slug": "hyogo-official-008-042-2026",
    "title": "香美町 外国人受入費用補助金",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "補助対象者 中小企業基本法第2条に規定する町内に本社若しくは事業所を有する中小企業者又は町内に住所を有する個人事業主で、令和5年4月1日以降に新たに外国人を事業所などで雇用した者が補助対象者となります",
    "applicationPeriod": "募集期間 随時受付 （注意）ただし、予算終了により受付を終了とします",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kankoshokotetsuduki/4956.html",
    "sourceName": "外国人受入費用補助金申請書一式"
  },
  {
    "slug": "hyogo-official-008-043-2026",
    "title": "香美町 職場環境改善支援事業補助金",
    "organization": "香美町",
    "maxAmount": "300,000円",
    "maxAmountNum": 300000,
    "category": "employment",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "補助対象者 以下のいずれにも該当する事業者 町内に本店又は本所を有する事業者 町の徴収金に滞納がない事業者 申請する事業について、同種の補助金等の交付を町から受けていない、又は受けようとしないこと 補助内容 補助内容の詳細 補助対象事業 補助対象経費 補助率等 講師等を招き、従業員向けの研修等を申請者が開催する 会場等使用料（申請者所有施設開催の場合は除く） 講師謝金（交通費（注釈2）宿泊",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kankoshokotetsuduki/4954.html",
    "sourceName": "職場環境改善支援事業補助金申請書一式"
  },
  {
    "slug": "hyogo-official-008-044-2026",
    "title": "香美町 地域産業活性化人材育成支援事業補助金",
    "organization": "香美町",
    "maxAmount": "100,000円",
    "maxAmountNum": 100000,
    "category": "employment",
    "relatedCategories": [
      "employment"
    ],
    "eligibility": "補助対象者 以下のいずれにも該当する事業者 町内に本店又は本所を有する事業者 町の徴収金に滞納がない事業者 申請する事業について、同種の補助金等の交付を町から受けていない、又は受けようとしないこと 補助内容 補助内容の詳細 補助対象事業 補助対象経費 補助率等 講師等を招き、従業員向けの研修等を申請者が開催する 会場等使用料 （申請者所有施設開催の場合は除く） 講師謝金（交通費（注釈2）宿",
    "applicationPeriod": "令和8年度の公式受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kankoshokotetsuduki/4952.html",
    "sourceName": "地域産業活性化人材育成支援事業補助金申請書一式"
  },
  {
    "slug": "hyogo-official-008-045-2026",
    "title": "香美町 出産育児一時金",
    "organization": "香美町",
    "maxAmount": "自己負担分または公式ページ記載の額を助成",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "対象に、分娩に関連して重度の脳性麻痺を発症した場合、補償金が支給される制度で、分娩を取り扱っている病院、診療所、助産所が、「公益財団法人日本医療機能評価機構」の運営する保険に加入することにより、補償が受けられます",
    "applicationPeriod": "受付時間：午前9時から午後5時（土日祝・年末年始を除く） ダウンロード 出産育児一時金支給申請書 (PDFファイル: 78.0KB) 出産育児一時金支給申請書 (RTFファイル: 92.5KB) 国民健康保険出産育児一時金受領委任払申請書 (PDFファイル: 137.2KB) 国",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kenkotetsuduki/4859.html",
    "sourceName": "出産育児一時金支給申請書一式"
  },
  {
    "slug": "hyogo-official-008-046-2026",
    "title": "香美町 一般不妊治療費助成事業",
    "organization": "香美町",
    "maxAmount": "50,000円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "助成対象者 （注意）次の要件のすべてに該当する方が対象です",
    "applicationPeriod": "受付期間等 助成対象となる診療期間は1月から12月までとし、同年の4月1日から翌年3月31日の間の申請してください",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kenkotetsuduki/4872.html",
    "sourceName": "一般不妊治療費助成事業申請書一式"
  },
  {
    "slug": "hyogo-official-008-047-2026",
    "title": "香美町 特定不妊治療費助成事業",
    "organization": "香美町",
    "maxAmount": "150,000円",
    "maxAmountNum": 150000,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "助成対象者 次の要件すべてに該当する方が対象です",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kenkotetsuduki/4871.html",
    "sourceName": "特定不妊治療費助成事業申請書一式"
  },
  {
    "slug": "hyogo-official-008-048-2026",
    "title": "香美町 国民健康保険人間ドック受診費用助成金",
    "organization": "香美町",
    "maxAmount": "20,000円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "nursing"
    ],
    "eligibility": "対象に町ぐるみ健診に加えて、人間ドックにかかる費用の一部を助成します",
    "applicationPeriod": "申請期限 人間ドックを受診した年度内（4月から翌年の3月末まで）に申請をしてください ダウンロード 人間ドック受診費助成申請書 (Wordファイル: 15.8KB) 問診票 (Excelファイル: 36.0KB) この記事に関するお問い合わせ先 健康課 電話番号：0796-36-1114 お問い合わせ みなさまのご意見をお聞かせください このページの内容は分かりやすか",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kenkotetsuduki/4882.html",
    "sourceName": "国民健康保険人間ドック受診費用助成金交付申請書"
  },
  {
    "slug": "hyogo-official-008-049-2026",
    "title": "香美町 香美町小型除雪機購入補助金",
    "organization": "香美町",
    "maxAmount": "1,300,000円",
    "maxAmountNum": 1300000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "対象者 区又は自治会(区) 申請までの流れ 毎年対象者から町に対して行っている町の補助制度に対する要望に基づき、次年度の予算措置を検討します",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kensetsutetsuduki/5272.html",
    "sourceName": "香美町小型除雪機購入補助金について"
  },
  {
    "slug": "hyogo-official-008-050-2026",
    "title": "香美町 老朽危険空家除却支援補助金",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "補助対象空家 町内に存する木造の空家 個人が所有するもの 町が行う建物不良度測定で一定の基準を満たした空家 （注意）事前に補助対象空家に該当するか調査するため事前調査の申し込みが必要となります",
    "applicationPeriod": "期限は4月から12月末日で、年度内に事業完了出来るものとなります",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kensetsutetsuduki/4968.html",
    "sourceName": "老朽危険空家除却支援補助金申請書一式"
  },
  {
    "slug": "hyogo-official-008-051-2026",
    "title": "香美町 住宅及び建築物土砂災害対策改修補助金",
    "organization": "香美町",
    "maxAmount": "750,000円",
    "maxAmountNum": 750000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "補助対象者 土砂災害特別警戒区域内の住宅及び建築物（ホテル・旅館）の所有者 なお、住宅及び建築物（ホテル・旅館）とは土砂災害特別警戒区域に存する既存不適格住宅をいいます",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kensetsutetsuduki/4971.html",
    "sourceName": "住宅及び建築物土砂災害対策改修補助金交付申請書一式"
  },
  {
    "slug": "hyogo-official-008-052-2026",
    "title": "香美町 がけ地近接等危険住宅移転事業費補助金",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "補助対象者 1.危険住宅に居住している所有者等 なお、危険住宅とは土砂災害特別警戒区域等に存する既存不適格住宅をいいます",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kensetsutetsuduki/4972.html",
    "sourceName": "がけ地近接等危険住宅移転事業費補助金交付申請書"
  },
  {
    "slug": "hyogo-official-008-053-2026",
    "title": "香美町 空き家利活用促進支援（改修）補助金",
    "organization": "香美町",
    "maxAmount": "1,000,000円",
    "maxAmountNum": 1000000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "対象となる空き家 空き家バンクを利用し、空き家の売買又は賃貸借の契約が成立した空き家 （賃貸借契約又は売買契約の締結が必要です",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kikakutetsuduki/4823.html",
    "sourceName": "空き家利活用促進支援（改修）補助金交付申請書一式"
  },
  {
    "slug": "hyogo-official-008-054-2026",
    "title": "香美町 鉄道利用促進助成金",
    "organization": "香美町",
    "maxAmount": "3,000円",
    "maxAmountNum": 3000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "対象となる人 香美町に住所を有する方 （注意）ただし、 公務員の方が公務出張で利用する場合 国や他の市町等から鉄道利用に関する助成を受ける場合 は対象外となります",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kikakutetsuduki/4813.html",
    "sourceName": "鉄道利用促進助成金交付申請書兼請求書"
  },
  {
    "slug": "hyogo-official-008-055-2026",
    "title": "香美町 住宅取得奨励金",
    "organization": "香美町",
    "maxAmount": "300,000円",
    "maxAmountNum": 300000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "条件（全て満たすこと） 町内に自分が住むための住宅を新たに取得し（住宅新築もしくは中古物件を購入）、補助金の交付決定日以降5年以上、定住する意思がある 取得した住宅が共有名義の場合は、共有者全てが交付対象者要件に該当する 香美町に住民登録をしている 町の徴収金に滞納がない これまでに町の住宅取得に関する補助金を受けていない 暴力団員等でない （補足）移住者は、概ね2年以上町外に居住",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kikakutetsuduki/4810.html",
    "sourceName": "住宅取得奨励金交付申請書"
  },
  {
    "slug": "hyogo-official-008-056-2026",
    "title": "香美町 住宅改修費助成金",
    "organization": "香美町",
    "maxAmount": "200,000円",
    "maxAmountNum": 200000,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "対象住宅 住宅：申請者が所有する、申請者が居住するための住宅（併用住宅の場合は、居住するための部分のみ） 条件（全て満たすこと） 香美町に住民登録をしている 町内業者（下請け業者を含み、町内に本店を有する法人又は町内に住所を有する個人事業者）が行う改修工事 町の徴収金に滞納がない 交付を受けようとする工事について町の他の制度の補助を受けていない 暴力団員等でない （注意）同一住宅ならびに",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kikakutetsuduki/4811.html",
    "sourceName": "住宅改修費助成金交付申請書一式"
  },
  {
    "slug": "hyogo-official-008-057-2026",
    "title": "香美町 コウノトリ但馬空港利用促進助成金",
    "organization": "香美町",
    "maxAmount": "4,500円",
    "maxAmountNum": 4500,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "対象者 町内に住所を有している方 町内に所在する事業所・学校等に勤務・通学している方 香美町出身者及びその家族（ 帰省利用も可能 ですが、 町内に住所を有する方が助成申請 してください） 対象外となる場合 国・地方公共団体職員の公務出張利用、他市町から助成を受けた方 コウノトリ但馬⇔大阪伊丹間の運賃・助成金額（片道） 大人（12歳以上）運賃で搭乗された方…一律4,500円 小人12歳未",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kikakutetsuduki/4812.html",
    "sourceName": "コウノトリ但馬空港利用促進助成金交付申請書一式"
  },
  {
    "slug": "hyogo-official-008-058-2026",
    "title": "香美町 高校生バス通学費助成金",
    "organization": "香美町",
    "maxAmount": "25,000円",
    "maxAmountNum": 25000,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "対象となる人 香美町内在住の高校生 対象となるバス 全但路線バス・香美町民バス村岡境線 助成金額（町内高校通学生） 定期券の購入金額が 1か月定期で15,000円を超える時 、その 超える額を助成 （3か月定期で45,000円を、6か月定期で90,000円を超える額を助成） 例 秋岡バス停⇔福西バス停（国道9号沿い・村岡高校最寄りバス停） 【1か月】24,960円－15,000円（個人負担）",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kikakutetsuduki/4815.html",
    "sourceName": "高校生バス通学費助成金交付申請書兼請求書"
  },
  {
    "slug": "hyogo-official-008-059-2026",
    "title": "香美町 結婚サポーター事業助成金",
    "organization": "香美町",
    "maxAmount": "100,000円",
    "maxAmountNum": 100000,
    "category": "childcare",
    "relatedCategories": [
      "childcare"
    ],
    "eligibility": "助成対象者 町内在住の方、町内に勤務する方、町内への移住を検討している方に対して、結婚サポーター事業を実施される方（団体・事業所含む）",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kikakutetsuduki/4819.html",
    "sourceName": "結婚サポーター事業助成金申請書一式"
  },
  {
    "slug": "hyogo-official-008-060-2026",
    "title": "香美町 移住促進支援・空き家利活用促進支援補助金",
    "organization": "香美町",
    "maxAmount": "公式ページ記載の額または上限",
    "maxAmountNum": 0,
    "category": "housing",
    "relatedCategories": [
      "housing"
    ],
    "eligibility": "香美町の移住促進支援・空き家利活用促進支援補助金の公式要件を満たす方が対象です。",
    "applicationPeriod": "公式ページ及びリンク先の申請・受付案内に従う。予算や年度により受付終了となる場合があります。",
    "officialUrl": "https://www.town.mikata-kami.lg.jp/benrinaservice/formalities-potal/downloadrink/kikakutetsuduki/4822.html",
    "sourceName": "移住促進支援・空き家利活用促進支援補助金交付申請書"
  }
];
