const kumamotoOfficial005Grants: Array<{
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
    "slug": "kumamoto-official-005-001-2026",
    "title": "菊陽町 きくよう みんなの応援券",
    "organization": "菊陽町",
    "maxAmount": "1人あたり1部12,000円",
    "maxAmountNum": 12000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "菊陽町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年6月16日 交付金」に町の税収増を上乗せすることで、町民の皆さんに 12,000円分 の「 きくよう みんなの応援券 」（以下「応援券」）を配布します",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kiji0035290/index.html",
    "sourceName": "きくよう みんなの応援券"
  },
  {
    "slug": "kumamoto-official-005-002-2026",
    "title": "菊陽町 菊陽町台湾アウトバウンド支援事業（個人向け）",
    "organization": "菊陽町",
    "maxAmount": "1人当たり1万円",
    "maxAmountNum": 10000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "菊陽町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月1日 申請方法を更新しています",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kiji0034331/index.html",
    "sourceName": "菊陽町台湾アウトバウンド支援事業（個人向け）"
  },
  {
    "slug": "kumamoto-official-005-003-2026",
    "title": "菊陽町 菊陽町台湾アウトバウンド支援事業（旅行会社向け）",
    "organization": "菊陽町",
    "maxAmount": "1人当たり1万円",
    "maxAmountNum": 10000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "菊陽町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年4月14日 申請型）・・・台湾旅行後、個人で申請し、補助金を受け取れます",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kiji0034332/index.html",
    "sourceName": "菊陽町台湾アウトバウンド支援事業（旅行会社向け）"
  },
  {
    "slug": "kumamoto-official-005-004-2026",
    "title": "菊陽町 高齢者運転免許証自主返納支援",
    "organization": "菊陽町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "菊陽町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年2月9日 交付しています",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kiji0032059/index.html",
    "sourceName": "高齢者運転免許証自主返納支援"
  },
  {
    "slug": "kumamoto-official-005-005-2026",
    "title": "菊陽町 児童扶養手当",
    "organization": "菊陽町",
    "maxAmount": "1人のとき48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "菊陽町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2026年5月15日 支給される手当です",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kosodate/kiji0031133/index.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kumamoto-official-005-006-2026",
    "title": "菊陽町 子ども医療費助成",
    "organization": "菊陽町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "菊陽町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年12月9日 申請方法 2",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kosodate/kiji0033773/index.html",
    "sourceName": "子ども医療費助成"
  },
  {
    "slug": "kumamoto-official-005-007-2026",
    "title": "菊陽町 多胎妊娠の妊婦健康診査費用助成",
    "organization": "菊陽町",
    "maxAmount": "助成額及び回数1回あたり上限5,000円",
    "maxAmountNum": 5000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "菊陽町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和7年4月1日 申請に必要なもの ・ 菊陽町多胎妊婦健康診査費助成申請書(様式1号) （PDF：57.2キロバイト） ・領収書及び明細書 ・多胎に係る全ての母子健康手帳の表紙及び妊娠中の経過欄の写し ・通帳又はキャッシュカード 申請期限 多",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kosodate/kiji0034814/index.html",
    "sourceName": "多胎妊娠の妊婦健康診査費用助成"
  },
  {
    "slug": "kumamoto-official-005-008-2026",
    "title": "菊陽町 ひとり親家庭等医療費助成制度",
    "organization": "菊陽町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "菊陽町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2024年10月31日 申請をする必要がありません",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kosodate/kiji0031104/index.html",
    "sourceName": "ひとり親家庭等医療費助成制度"
  },
  {
    "slug": "kumamoto-official-005-009-2026",
    "title": "菊陽町 要保護及び準要保護児童生徒就学援助費",
    "organization": "菊陽町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "education",
      "living"
    ],
    "eligibility": "菊陽町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2023年8月4日 受付時期 通常4月に行いますが、小学校新入学、年度途中での転入、さまざまな事情で急に経済状態が悪くなった場合などには、随時受け付けます",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kosodate/kiji003481/index.html",
    "sourceName": "要保護及び準要保護児童生徒就学援助費"
  },
  {
    "slug": "kumamoto-official-005-010-2026",
    "title": "菊陽町 児童手当",
    "organization": "菊陽町",
    "maxAmount": "限度額以上の人は、特例給付として月額一律5,000円",
    "maxAmountNum": 5000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "菊陽町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2022年5月25日 提出が原則不要です",
    "officialUrl": "https://www.town.kikuyo.lg.jp/kosodate/kiji0033355/index.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "kumamoto-official-005-011-2026",
    "title": "南小国町 協働型逆境克服チャレンジ支援事業補助金",
    "organization": "南小国町",
    "maxAmount": "限度額総事業費の80％以内（上限200万円",
    "maxAmountNum": 2000000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2020年06月30日 募集について 2020年06月30日 南小国町協働型逆境克服チャレンジ支援事業補助金 ※ 本補助金の事業募集については、令和2年7月31日（金）を持って終了しました",
    "officialUrl": "https://www.town.minamioguni.lg.jp/news/2020/1657.html",
    "sourceName": "協働型逆境克服チャレンジ支援事業補助金"
  },
  {
    "slug": "kumamoto-official-005-012-2026",
    "title": "南小国町 太陽光発電設備等導入促進事業補助金",
    "organization": "南小国町",
    "maxAmount": "最大出力の合計値に2万円",
    "maxAmountNum": 20000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2022年04月01日 交付します",
    "officialUrl": "https://www.town.minamioguni.lg.jp/news/2022/1830.html",
    "sourceName": "太陽光発電設備等導入促進事業補助金"
  },
  {
    "slug": "kumamoto-official-005-013-2026",
    "title": "南小国町 児童手当",
    "organization": "南小国町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給対象 令和6年（2024年）10月から、高校卒業程度まで（18歳の誕生日の最初の3月31日まで）の児童を養育している方に支給されます",
    "officialUrl": "https://www.town.minamioguni.lg.jp/kosodate/josei/jidou-teate.html",
    "sourceName": "児童手当"
  },
  {
    "slug": "kumamoto-official-005-014-2026",
    "title": "南小国町 児童扶養手当",
    "organization": "南小国町",
    "maxAmount": "月額は、母と子ども1人の世帯を例にとると、全部支給は48,050円",
    "maxAmountNum": 48050,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給される手当です",
    "officialUrl": "https://www.town.minamioguni.lg.jp/kosodate/josei/jidou-fuyou-teate.html",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kumamoto-official-005-015-2026",
    "title": "南小国町 特別児童扶養手当",
    "organization": "南小国町",
    "maxAmount": "月額重度障害児（1級）1人につき58,450円",
    "maxAmountNum": 58450,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "支給対象 精神または身体が障害の状態（法令で定める程度以上にある20歳未満の児童について、児童の福祉の増進を図ることを目的として、手当を支給する制度です",
    "officialUrl": "https://www.town.minamioguni.lg.jp/kosodate/josei/tokubetsu-jidou-fuyou-teate.html",
    "sourceName": "特別児童扶養手当"
  },
  {
    "slug": "kumamoto-official-005-016-2026",
    "title": "南小国町 ひとり親家庭等医療費助成",
    "organization": "南小国町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "南小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請が必要です",
    "officialUrl": "https://www.town.minamioguni.lg.jp/kosodate/josei/hitori-oya-kateitou-irouhi-josei.html",
    "sourceName": "ひとり親家庭等医療費助成"
  },
  {
    "slug": "kumamoto-official-005-017-2026",
    "title": "南小国町 子育て支援医療費助成",
    "organization": "南小国町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "南小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請の手続き 医療費の助成を受けるためには、「子育て支援医療費受給資格者証」が必要ですので、役場福祉課に申請して下さい",
    "officialUrl": "https://www.town.minamioguni.lg.jp/kosodate/josei/shien-iryou.html",
    "sourceName": "子育て支援医療費助成"
  },
  {
    "slug": "kumamoto-official-005-018-2026",
    "title": "南小国町 奨学金",
    "organization": "南小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "申請の資格 （1）保護者が南小国町に在住している者 （2）学力が優れており、経済的理由により就学が困難な者 （3）公私団体等から南小国町奨学資金に相当する奨学金の貸与を受けていない者 貸付金及び貸付期間 （1）各種高等学校及",
    "officialUrl": "https://www.town.minamioguni.lg.jp/kosodate/josei/shougaku-kin.html",
    "sourceName": "奨学金"
  },
  {
    "slug": "kumamoto-official-005-019-2026",
    "title": "南小国町 高校生等医療費助成制度",
    "organization": "南小国町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "申請者 高校生等の保護者 助成対象者 南小国町に住所がある高校生等で、健康保険の被扶養者",
    "officialUrl": "https://www.town.minamioguni.lg.jp/kosodate/josei/koukousei-iryouhi-josei-seido.html",
    "sourceName": "高校生等医療費助成制度"
  },
  {
    "slug": "kumamoto-official-005-020-2026",
    "title": "南小国町 就学援助",
    "organization": "南小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "支給品目 給食費、学用品費、新入学児童生徒学用品費、校外活動費、修学旅行費、医療費 申請方法 就学援助の受給を希望する保護者の方は、お子様の在学する小学校・中学校に申し出て下さい",
    "officialUrl": "https://www.town.minamioguni.lg.jp/kosodate/josei/shugaku-enjo.html",
    "sourceName": "就学援助"
  },
  {
    "slug": "kumamoto-official-005-021-2026",
    "title": "南小国町 国民健康保険税の減免",
    "organization": "南小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "南小国町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和３年４月１日 申請期限 令和４年３月２５日まで 減免額計算表 対象となる方の 要件2 に該当する世帯の 減免額 ＝ 表1で計算された対象保険税額 × 表2の区分に応じた減免割合 表1 対象保険税額 ＝ Ａ × Ｂ",
    "officialUrl": "https://www.town.minamioguni.lg.jp/living/covid-19/post_27.html",
    "sourceName": "国民健康保険税の減免"
  },
  {
    "slug": "kumamoto-official-005-022-2026",
    "title": "南小国町 後期高齢者医療保険料の減免",
    "organization": "南小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "南小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和４年３月３１日 申請について 対象となる方 要件１.新型コロナウイルス感染症により、主たる生計維持者が死亡し、または重篤な傷病を負った世帯 に属する被保険者 ⇒保険料の全額を免除 要件２.新型コロナウイルス感染症の影響により、主たる生計維持",
    "officialUrl": "https://www.town.minamioguni.lg.jp/living/covid-19/post_28.html",
    "sourceName": "後期高齢者医療保険料の減免"
  },
  {
    "slug": "kumamoto-official-005-023-2026",
    "title": "南小国町 海外ビジネス展開支援事業補助金",
    "organization": "南小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "南小国町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2026年06月25日 海外ビジネス展開支援事業補助金の２次公募について 2026年06月25日 熊本県では、国内市場が縮小傾向にある中、輸出に取り組む県内事業者を支援し、輸出拡大を図るため、海外輸出のチャレンジに係る経費の一部を補助する事業の２次公募を現在行って",
    "officialUrl": "https://www.town.minamioguni.lg.jp/news/2026/2867.html",
    "sourceName": "海外ビジネス展開支援事業補助金"
  },
  {
    "slug": "kumamoto-official-005-024-2026",
    "title": "南小国町 南小国町くらし応援券",
    "organization": "南小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "南小国町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2022年11月25日 期限：令和5年1月31日（火） ○利用店舗：【町内】南小国町商工会・観光協会加盟店、取扱いを希望する町内の店舗等 【小国郷内】病院、歯科、調剤薬局、タクシー、JA（購買部・朝どり市） 南小国町くらし応援券（第２弾）の配布につ",
    "officialUrl": "https://www.town.minamioguni.lg.jp/news/2022/2235.html",
    "sourceName": "南小国町くらし応援券"
  },
  {
    "slug": "kumamoto-official-005-025-2026",
    "title": "小国町 児童扶養手当",
    "organization": "小国町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小国町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "かんたん検索 結婚 ・ 離婚 妊娠 ・ 育児 入園 ・ 入学 こども 教育関連 生活 住民票 ・ 戸籍 印鑑証明 就職 ・ 離職 国民健康保険 国民年金 高齢 ・ 福祉 介護 保険 ・ 福祉 健診 ・ 予防接種 環境 ・ ゴミ 町の税金 町",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kantankensaku/kantan_hoken/20069/",
    "sourceName": "児童扶養手当"
  },
  {
    "slug": "kumamoto-official-005-026-2026",
    "title": "小国町 就学援助",
    "organization": "小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小国町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "追加情報：PDFファイル PDFファイルをご覧いただくには「Adobe Acrobat Reader」が必要です。お持ちでない方は、バナーのリンク先からソフトウェアをダウンロードしてください。（無料） かんたん検索 結婚 ・ 離婚 妊娠 ・",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kurashinojyoho/kurashi_kyoiku/20233/",
    "sourceName": "就学援助"
  },
  {
    "slug": "kumamoto-official-005-027-2026",
    "title": "小国町 子ども医療費助成制度",
    "organization": "小国町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "追加情報：PDFファイル PDFファイルをご覧いただくには「Adobe Acrobat Reader」が必要です。お持ちでない方は、バナーのリンク先からソフトウェアをダウンロードしてください。（無料） かんたん検索 結婚 ・ 離婚 妊娠 ・",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kurashinojyoho/kurashi_chomin/chomin_kenkohoken/20125/",
    "sourceName": "子ども医療費助成制度"
  },
  {
    "slug": "kumamoto-official-005-028-2026",
    "title": "小国町 児童手当",
    "organization": "小国町",
    "maxAmount": "所得・対象区分に応じて手当等を支給",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小国町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "かんたん検索 結婚 ・ 離婚 妊娠 ・ 育児 入園 ・ 入学 こども 教育関連 生活 住民票 ・ 戸籍 印鑑証明 就職 ・ 離職 国民健康保険 国民年金 高齢 ・ 福祉 介護 保険 ・ 福祉 健診 ・ 予防接種 環境 ・ ゴミ 町の税金 町",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kantankensaku/kantan_kodomo/22303/",
    "sourceName": "児童手当"
  },
  {
    "slug": "kumamoto-official-005-029-2026",
    "title": "小国町 奨学金",
    "organization": "小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "education",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小国町内の児童生徒・学生・保護者・資格取得者等で公式要件を満たす方",
    "applicationPeriod": "追加情報：外部リンク このページには、外部リンクが含まれています。 かんたん検索 結婚 ・ 離婚 妊娠 ・ 育児 入園 ・ 入学 こども 教育関連 生活 住民票 ・ 戸籍 印鑑証明 就職 ・ 離職 国民健康保険 国民年金 高齢 ・ 福祉 介",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kurashinojyoho/kurashi_kyoiku/21677/",
    "sourceName": "奨学金"
  },
  {
    "slug": "kumamoto-official-005-030-2026",
    "title": "小国町 出産・子育て応援給付金",
    "organization": "小国町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小国町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "かんたん検索 結婚 ・ 離婚 妊娠 ・ 育児 入園 ・ 入学 こども 教育関連 生活 住民票 ・ 戸籍 印鑑証明 就職 ・ 離職 国民健康保険 国民年金 高齢 ・ 福祉 介護 保険 ・ 福祉 健診 ・ 予防接種 環境 ・ ゴミ 町の税金 町",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kantankensaku/kantan_ninshin/ninshin_ninshin/22704/",
    "sourceName": "出産・子育て応援給付金"
  },
  {
    "slug": "kumamoto-official-005-031-2026",
    "title": "小国町 ひとり親家庭等医療費助成制度",
    "organization": "小国町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "追加情報：PDFファイル PDFファイルをご覧いただくには「Adobe Acrobat Reader」が必要です。お持ちでない方は、バナーのリンク先からソフトウェアをダウンロードしてください。（無料） かんたん検索 結婚 ・ 離婚 妊娠 ・",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kurashinojyoho/kurashi_chomin/chomin_kenkohoken/22214/",
    "sourceName": "ひとり親家庭等医療費助成制度"
  },
  {
    "slug": "kumamoto-official-005-032-2026",
    "title": "小国町 重度心身障害者医療費助成",
    "organization": "小国町",
    "maxAmount": "医療費の自己負担分等を助成",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "nursing",
      "living"
    ],
    "eligibility": "小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "かんたん検索 結婚 ・ 離婚 妊娠 ・ 育児 入園 ・ 入学 こども 教育関連 生活 住民票 ・ 戸籍 印鑑証明 就職 ・ 離職 国民健康保険 国民年金 高齢 ・ 福祉 介護 保険 ・ 福祉 健診 ・ 予防接種 環境 ・ ゴミ 町の税金 町",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kurashinojyoho/kurashi_fukushi/20102/",
    "sourceName": "重度心身障害者医療費助成"
  },
  {
    "slug": "kumamoto-official-005-033-2026",
    "title": "小国町 新生児聴覚検査費助成事業",
    "organization": "小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小国町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "かんたん検索 結婚 ・ 離婚 妊娠 ・ 育児 入園 ・ 入学 こども 教育関連 生活 住民票 ・ 戸籍 印鑑証明 就職 ・ 離職 国民健康保険 国民年金 高齢 ・ 福祉 介護 保険 ・ 福祉 健診 ・ 予防接種 環境 ・ ゴミ 町の税金 町",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kantankensaku/kantan_kodomo/350730",
    "sourceName": "新生児聴覚検査費助成事業"
  },
  {
    "slug": "kumamoto-official-005-034-2026",
    "title": "小国町 小国町こうのとり支援事業",
    "organization": "小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "小国町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "追加情報：PDFファイル PDFファイルをご覧いただくには「Adobe Acrobat Reader」が必要です。お持ちでない方は、バナーのリンク先からソフトウェアをダウンロードしてください。（無料） かんたん検索 結婚 ・ 離婚 妊娠 ・",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kantankensaku/kantan_kodomo/20131",
    "sourceName": "小国町こうのとり支援事業"
  },
  {
    "slug": "kumamoto-official-005-035-2026",
    "title": "小国町 妊婦健康診査費用助成",
    "organization": "小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "追加情報：PDFファイル PDFファイルをご覧いただくには「Adobe Acrobat Reader」が必要です。お持ちでない方は、バナーのリンク先からソフトウェアをダウンロードしてください。（無料） かんたん検索 結婚 ・ 離婚 妊娠 ・",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kantankensaku/kantan_ninshin/ninshin_ninshin/350853",
    "sourceName": "妊婦健康診査費用助成"
  },
  {
    "slug": "kumamoto-official-005-036-2026",
    "title": "小国町 1か月児健康診査費用助成金",
    "organization": "小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "小国町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "追加情報：PDFファイル PDFファイルをご覧いただくには「Adobe Acrobat Reader」が必要です。お持ちでない方は、バナーのリンク先からソフトウェアをダウンロードしてください。（無料） かんたん検索 結婚 ・ 離婚 妊娠 ・",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kantankensaku/kantan_ninshin/ninshin_akachan/350884",
    "sourceName": "1か月児健康診査費用助成金"
  },
  {
    "slug": "kumamoto-official-005-037-2026",
    "title": "小国町 妊婦歯科検診",
    "organization": "小国町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "小国町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "かんたん検索 結婚 ・ 離婚 妊娠 ・ 育児 入園 ・ 入学 こども 教育関連 生活 住民票 ・ 戸籍 印鑑証明 就職 ・ 離職 国民健康保険 国民年金 高齢 ・ 福祉 介護 保険 ・ 福祉 健診 ・ 予防接種 環境 ・ ゴミ 町の税金 町",
    "officialUrl": "https://www.town.kumamoto-oguni.lg.jp/kantankensaku/kantan_ninshin/ninshin_ninshin/350860",
    "sourceName": "妊婦歯科検診"
  },
  {
    "slug": "kumamoto-official-005-038-2026",
    "title": "産山村 家財道具撤去補助金",
    "organization": "産山村",
    "maxAmount": "15万円を限度",
    "maxAmountNum": 150000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "産山村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付手続きは 家具等の処分を行う前 に必要ですので、事前にお問い合わせください",
    "officialUrl": "https://www.ubuyama-v.jp/iju/akiyabannnk_1/1871.html",
    "sourceName": "家財道具撤去補助金"
  },
  {
    "slug": "kumamoto-official-005-039-2026",
    "title": "産山村 エネルギー・食料品価格等物価高騰支援給付金",
    "organization": "産山村",
    "maxAmount": "1世帯当たり平均所得金額である564.3万円",
    "maxAmountNum": 5643000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "産山村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "令和4年11月1日 支給対象世帯 （1） 低所得者世帯 基準日（令和4年11月1日）において産山村に住民票があり、世帯全員の令和4年度分の合計所得が564万3千円以下である世帯 ※2021（令和3）年国民生活基礎調査の1世帯当たり平均所得金額で",
    "officialUrl": "https://www.ubuyama-v.jp/soshikikarasagasu/juminka/news/1322.html",
    "sourceName": "エネルギー・食料品価格等物価高騰支援給付金"
  },
  {
    "slug": "kumamoto-official-005-040-2026",
    "title": "産山村 電力・ガス・食料品等価格高騰緊急支援給付金",
    "organization": "産山村",
    "maxAmount": "1世帯当たり5万円",
    "maxAmountNum": 50000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "産山村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "電力・ガス・食料品等価格高騰緊急支援給付金に関するよくあるご質問（外部リンク） この記事に関するお問い合わせ先 住民課 電話番号：0967-25-2212 お問い合わせフォーム ​​​​​​​ ファイル種別 すべて HTML PDF お知ら",
    "officialUrl": "https://www.ubuyama-v.jp/soshikikarasagasu/juminka/news/1309.html",
    "sourceName": "電力・ガス・食料品等価格高騰緊急支援給付金"
  },
  {
    "slug": "kumamoto-official-005-041-2026",
    "title": "産山村 空き家改修費補助金",
    "organization": "産山村",
    "maxAmount": "300万円を限度",
    "maxAmountNum": 3000000,
    "category": "housing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "産山村内で住宅整備、空き家活用、移住・定住等の公式要件を満たす方",
    "applicationPeriod": "交付要綱をご覧ください",
    "officialUrl": "https://www.ubuyama-v.jp/soshikikarasagasu/kikakushinkoka/sumai_iju/2/1296.html",
    "sourceName": "空き家改修費補助金"
  },
  {
    "slug": "kumamoto-official-005-042-2026",
    "title": "産山村 産山村むらづくり支援交付金",
    "organization": "産山村",
    "maxAmount": "補助額交付上限額1団体あたり、1年度につき20万円",
    "maxAmountNum": 200000,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "産山村内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "交付金は、地域課題の解決や地域活性化に向けて自主的に取り組む団体の活動を支援する制度です",
    "officialUrl": "https://www.ubuyama-v.jp/soshikikarasagasu/kikakushinkoka/communitysupport/751.html",
    "sourceName": "産山村むらづくり支援交付金"
  },
  {
    "slug": "kumamoto-official-005-043-2026",
    "title": "産山村 産山村人材育成事業",
    "organization": "産山村",
    "maxAmount": "補助額「後継者となるための技術習得を目的とした養成講座・研修への参加」「地域づくりのための調査・研究」事業で、事業主体の補助がある場合国内研修…補助金を含む50％以内(限度額15万円",
    "maxAmountNum": 150000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "産山村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "支給しません",
    "officialUrl": "https://www.ubuyama-v.jp/soshikikarasagasu/kikakushinkoka/communitysupport/752.html",
    "sourceName": "産山村人材育成事業"
  },
  {
    "slug": "kumamoto-official-005-044-2026",
    "title": "産山村 地域少子化対策重点推進交付金活用事業",
    "organization": "産山村",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "産山村内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "交付金活用事業実施計画書 国の「地域少子化対策重点推進交付金」を活用して実施する事業について、実施計画書を公表します",
    "officialUrl": "https://www.ubuyama-v.jp/soshikikarasagasu/kikakushinkoka/communitysupport/1193.html",
    "sourceName": "地域少子化対策重点推進交付金活用事業"
  },
  {
    "slug": "kumamoto-official-005-045-2026",
    "title": "高森町 風しん抗体検査助成事業",
    "organization": "高森町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "提出します",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2071.html",
    "sourceName": "風しん抗体検査助成事業"
  },
  {
    "slug": "kumamoto-official-005-046-2026",
    "title": "高森町 インフルエンザ予防接種助成",
    "organization": "高森町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年10月1日 提出ください",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/9030.html",
    "sourceName": "インフルエンザ予防接種助成"
  },
  {
    "slug": "kumamoto-official-005-047-2026",
    "title": "高森町 妊婦のための支援給付金",
    "organization": "高森町",
    "maxAmount": "支給額5万円",
    "maxAmountNum": 50000,
    "category": "medical",
    "relatedCategories": [
      "childcare",
      "living"
    ],
    "eligibility": "高森町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年5月26日 申請時点で高森町に住民票がある方 申請方法・必要物品 妊娠届出時に同時申請できます",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/8348.html",
    "sourceName": "妊婦のための支援給付金"
  },
  {
    "slug": "kumamoto-official-005-048-2026",
    "title": "高森町 不育症検査費助成事業",
    "organization": "高森町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高森町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年2月6日 申請に必要なもの、提出先 熊本県不育症検査費助成事業申請書 ＜外部リンク＞ 熊本県不育症検査費助成事業受検証明書 ＜外部リンク＞ (主治医の記入が必要です",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2108.html",
    "sourceName": "不育症検査費助成事業"
  },
  {
    "slug": "kumamoto-official-005-049-2026",
    "title": "高森町 産婦健康診査費用助成",
    "organization": "高森町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [
      "medical"
    ],
    "eligibility": "高森町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "申請書 [PDFファイル／11KB] 高森町産婦健康診査受診票（医療機関が記入済みのもの） 医療機関が発行した健診費用が確認可能な領収書 振込口座を確認できる書類の写し（通帳の写しなど） ※「高森町産婦健康診査受診票」は対象",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2069.html",
    "sourceName": "産婦健康診査費用助成"
  },
  {
    "slug": "kumamoto-official-005-050-2026",
    "title": "高森町 がん患者アピアランスケア推進事業",
    "organization": "高森町",
    "maxAmount": "補助額購入額の2分の1※ウイッグなど・乳房補整具などそれぞれ20,000円",
    "maxAmountNum": 20000,
    "category": "medical",
    "relatedCategories": [
      "employment",
      "living"
    ],
    "eligibility": "高森町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "令和8年4月1日 申請期限 令和9年3月31日まで 必要書類 (1)高森町がん患者アピアランスケア推進事業補助金交付申請書兼請求書 (2)がん治療を受けたこと又は現に受けていることがわかる書類の写し(手術や化学療法の同意書、治療方針計画書、診",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/page/10144.html",
    "sourceName": "がん患者アピアランスケア推進事業"
  },
  {
    "slug": "kumamoto-official-005-051-2026",
    "title": "高森町 介護人材確保独自支援",
    "organization": "高森町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "nursing",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内の高齢者・障がい者・福祉サービス対象者等で公式要件を満たす方",
    "applicationPeriod": "2026年2月13日 募集チラシ [PDFファイル／1.84MB] 現状及び課題 介護サービスを利用するにはケアマネが作成するケアプランが必要となるが、ケアマネの数が不足している",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/page/2217.html",
    "sourceName": "介護人材確保独自支援"
  },
  {
    "slug": "kumamoto-official-005-052-2026",
    "title": "高森町 高森町こうのとり支援事業",
    "organization": "高森町",
    "maxAmount": "上限20万円",
    "maxAmountNum": 200000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年2月6日 申請書はこちら 高森町こうのとり支援事業助成申請書(様式第1号) [PDFファイル／135KB] 高森町こうのとり支援事業助成申請に係る証明書(様式第2号) [PDFファイル／80KB] Q&A Q：上限20万円ですが、20",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2118.html",
    "sourceName": "高森町こうのとり支援事業"
  },
  {
    "slug": "kumamoto-official-005-053-2026",
    "title": "高森町 出産・子育て応援給付金",
    "organization": "高森町",
    "maxAmount": "公式ページ記載の給付額・支援額に従う",
    "maxAmountNum": 0,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年2月6日 交付します！ 出産応援給付金（妊娠届出時） （1）対象者 令和5年3月10日以降に妊娠届出を提出した人 ※所得制限はありません",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2107.html",
    "sourceName": "出産・子育て応援給付金"
  },
  {
    "slug": "kumamoto-official-005-054-2026",
    "title": "高森町 子育てスタート用品レンタル助成",
    "organization": "高森町",
    "maxAmount": "上限額子ども1人あたり4万円",
    "maxAmountNum": 40000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年2月6日 申請が出来ます） 1歳未満の子どもの保護者（子どもも町内に住所を有する必要があります） レンタル助成上限額 子ども1人あたり 4万円 ※助成は子ども1人につき1回限りです",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2095.html",
    "sourceName": "子育てスタート用品レンタル助成"
  },
  {
    "slug": "kumamoto-official-005-055-2026",
    "title": "高森町 進学費用助成・修学旅行費助成",
    "organization": "高森町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "living",
    "relatedCategories": [],
    "eligibility": "高森町内の対象者・世帯・団体等で公式要件を満たす方",
    "applicationPeriod": "2026年1月19日 支給方法 ： 現物支給 このページを見ている人は こんなページも見ています AI（人工知能）は こんなページをおすすめします 見つからないときは よくある質問と回答 ＜外部リンク＞ 高森町 法人番号3000020434281",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/page/1017.html",
    "sourceName": "進学費用助成・修学旅行費助成"
  },
  {
    "slug": "kumamoto-official-005-056-2026",
    "title": "高森町 出産祝金",
    "organization": "高森町",
    "maxAmount": "支給額出産祝金支給額子どもの数支給額第1子50,000円",
    "maxAmountNum": 50000,
    "category": "childcare",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方",
    "applicationPeriod": "2025年2月6日 支給しています",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2171.html",
    "sourceName": "出産祝金"
  },
  {
    "slug": "kumamoto-official-005-057-2026",
    "title": "高森町 産後ケア事業",
    "organization": "高森町",
    "maxAmount": "公式ページ記載の補助率・上限額または支援内容に従う",
    "maxAmountNum": 0,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年2月6日 申請書（様式第1号） [Wordファイル／19KB] 利用決定通知書再交付申請書（様式第4号） [Wordファイル／18KB] ※電子申請の方法 母子健康手帳アプリ「たかもりっこ」のHome画面下部のバナー「産後ケア事業など",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2077.html",
    "sourceName": "産後ケア事業"
  },
  {
    "slug": "kumamoto-official-005-058-2026",
    "title": "高森町 男性HPVワクチン予防接種助成",
    "organization": "高森町",
    "maxAmount": "1人3回補助金額9価ワクチン28,166円",
    "maxAmountNum": 28166,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2026年7月1日 申請していただく流れになります",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2062.html",
    "sourceName": "男性HPVワクチン予防接種助成"
  },
  {
    "slug": "kumamoto-official-005-059-2026",
    "title": "高森町 おたふくかぜワクチン予防接種助成",
    "organization": "高森町",
    "maxAmount": "1人2回補助金額上限3,500円",
    "maxAmountNum": 3500,
    "category": "medical",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内で医療・健康支援の公式対象要件を満たす方",
    "applicationPeriod": "2025年2月6日 交付請求書 [Wordファイル／17KB] （ 書き方見本 [PDFファイル／216KB] ） 領収書（原本） 母子手帳（接種履歴が分かるもののコピー） 振込先口座がわかるもの（通帳等のコピー） 手続き方法 高森町住民福祉課",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/2117.html",
    "sourceName": "おたふくかぜワクチン予防接種助成"
  },
  {
    "slug": "kumamoto-official-005-060-2026",
    "title": "高森町 病児・病後児保育事業",
    "organization": "高森町",
    "maxAmount": "1人5時間未満1,000円",
    "maxAmountNum": 1000,
    "category": "employment",
    "relatedCategories": [
      "living"
    ],
    "eligibility": "高森町内の事業者・就労者・創業者・団体等で公式の補助対象要件を満たす方",
    "applicationPeriod": "2025年9月24日 申請 ご利用を希望される方は、必ず事前登録申請を行ってください",
    "officialUrl": "https://www.town.kumamoto-takamori.lg.jp/site/kosodate/8181.html",
    "sourceName": "病児・病後児保育事業"
  }
];
