import { Grant } from '@/lib/types';

export const cityGrantsBatch44: Grant[] = [
  // ────────────────────────────────────────────────
  // 水戸市（茨城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'mito-childcare-subsidy',
    title: '水戸市 子育て世帯生活支援給付金',
    organization: '水戸市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['水戸市', '子育て支援', '給付金'],
    eligibility: '水戸市に住所を有し、住民税非課税世帯またはそれに準ずる世帯で18歳以下の子どもを養育する方',
    applicationPeriod: '毎年6月〜翌年2月頃',
    description: '水戸市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に対し、児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 子育て世帯生活支援給付金は、<span class="marker">住民税非課税世帯またはそれに準ずる低所得の子育て世帯</span>に対し、生活を支援するための給付金を支給する制度です。</p><p>茨城県の県庁所在地である水戸市は、偕楽園や千波湖など歴史と自然に恵まれた街です。子育て環境の充実にも力を入れており、物価高騰の影響を受ける子育て世帯の負担軽減を図っています。</p><p>支給額は<strong>児童1人あたり5万円</strong>です。<span class="marker-green">ひとり親世帯は児童扶養手当の受給状況に応じて申請不要で支給される場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>水戸市に住民登録がある18歳以下（18歳の年度末まで）の子どもを養育している方で、住民税非課税世帯または家計急変世帯が対象です。</p><div class="summary-box" data-title="対象となる方"><p>児童扶養手当受給者（ひとり親世帯）</p><p>住民税均等割が非課税の子育て世帯</p><p>物価高騰等により家計が急変した世帯</p></div><p>ひとり親世帯で児童扶養手当を受給中の方は<strong>申請不要で自動支給</strong>されます。それ以外の方は水戸市役所こども政策課へ申請書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり5万円</strong>です。複数の子どもがいる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯の場合は、収入が減少したことを証明する書類（給与明細、離職票等）</span>の提出が必要です。</p><div class="note-box">生活保護を受給している世帯も対象となります。他の自治体で同趣旨の給付金をすでに受給している場合は対象外です。支給は原則として申請者の口座への振込で行われます。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-birth-bonus',
    title: '水戸市 出産祝い金支給事業',
    organization: '水戸市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['水戸市', '出産祝い金', '子育て支援'],
    eligibility: '水戸市に住所を有し、第3子以降の子どもを出産した方',
    applicationPeriod: '出産日から6か月以内',
    description: '水戸市が実施する出産祝い金支給事業です。第3子以降のお子さんを出産した方に祝い金10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 出産祝い金支給事業は、<span class="marker">第3子以降のお子さんを出産した保護者</span>に対して祝い金を支給する制度です。</p><p>水戸市は多子世帯の子育てを応援するため、第3子以降の出産に対して祝い金を支給しています。少子化対策の一環として、多子世帯の経済的負担を軽減し、安心して子どもを産み育てられる環境づくりを目指しています。</p><p>支給額は<strong>第3子以降1人あたり10万円</strong>です。<span class="marker-green">所得制限はなく、要件を満たすすべての世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で水戸市に住民登録があること</p><p>第3子以降の出産であること</p><p>出産した子どもを含め3人以上の子を養育していること</p><p>出産日から6か月以内に申請すること</p></div><p>水戸市役所こども政策課に申請書と必要書類を提出します。出生届の手続き時にあわせて案内を受けることができます。</p><p><span class="marker">申請期限は出産日から6か月以内</span>です。期限を過ぎると受給できませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第3子以降のお子さん1人につき10万円</strong>です。双子以上の多胎児で第3子以降に該当する場合は、該当する人数分が支給されます。</p><p><span class="marker">「第3子以降」の数え方は、保護者が現に養育している子どもの人数</span>でカウントされます。</p><div class="highlight-box">水戸市では出産祝い金のほか、出産・子育て応援給付金（国の制度）として妊娠届出時5万円、出生届出時5万円の給付も行っています。あわせてご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-housing-purchase',
    title: '水戸市 住宅取得補助金',
    organization: '水戸市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['水戸市', '住宅取得', '補助金'],
    eligibility: '水戸市内に新たに住宅を取得し定住する方',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '水戸市が実施する住宅取得補助金です。市内に住宅を新築・購入して定住する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 住宅取得補助金は、<span class="marker">市内に新たに住宅を取得（新築・購入）し定住する方</span>を対象に、取得費用の一部を補助する制度です。</p><p>水戸市は茨城県の県庁所在地として行政・商業の中心であり、東京からJR常磐線で約1時間というアクセスの良さも魅力です。定住人口の増加と住環境の向上を目指し、住宅取得を支援しています。</p><p>補助額は基本額に加算要件を加えた合計で、<strong>最大50万円</strong>です。<span class="marker-green">子育て世帯や市外からの転入者には加算があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>水戸市内に住宅を新築または購入すること</p><p>取得した住宅に居住し、住民登録を行うこと</p><p>5年以上継続して居住する意思があること</p><p>市税の滞納がないこと</p></div><p>水戸市役所住宅政策課に申請書と必要書類（売買契約書の写し、住民票等）を提出します。</p><p><span class="marker">住宅の引渡し後、住民登録を完了してから申請</span>してください。申請期限は住民登録から6か月以内です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>です。以下の加算要件により最大50万円まで増額されます。</p><p><span class="marker">市外からの転入：10万円加算、中学生以下の子どもがいる世帯：10万円加算</span>。両方に該当すれば最大50万円となります。</p><div class="note-box">中古住宅の購入も対象ですが、親族間の売買は対象外です。5年以内に転出した場合は補助金の返還を求められることがあります。国や県の住宅関連補助と併用できる場合がありますので窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-senior-dental',
    title: '水戸市 高齢者歯科健診助成事業',
    organization: '水戸市',
    type: 'local',
    maxAmount: '健診費用の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '茨城県',
    tags: ['水戸市', '歯科健診', '高齢者'],
    eligibility: '水戸市に住所を有する75歳以上の方',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '水戸市が実施する高齢者歯科健診助成事業です。75歳以上の方を対象に、歯科健診の費用を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 高齢者歯科健診助成事業は、<span class="marker">75歳以上の高齢者を対象に、歯科健診の費用を全額助成</span>する制度です。</p><p>口腔の健康は全身の健康に大きく影響します。水戸市では高齢者が定期的に歯科健診を受けることで、むし歯や歯周病の早期発見・治療につなげ、健康寿命の延伸を目指しています。</p><p><span class="marker-green">年1回、市内の指定歯科医療機関で無料の歯科健診を受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>水戸市に住民登録がある75歳以上の方（後期高齢者医療被保険者）が対象です。</p><div class="summary-box" data-title="健診の流れ"><p>市から届く受診券を確認する</p><p>市内の指定歯科医療機関に予約する</p><p>受診券と被保険者証を持参して受診する</p></div><p>対象者には水戸市から受診券が送付されます。<strong>受診券が届いたら、指定医療機関に電話で予約</strong>をしてください。受診券を紛失した場合は水戸市役所国保年金課で再発行できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>健診費用の自己負担はありません</strong>。歯科健診では、むし歯・歯周病・口腔機能の状態を確認し、専門的なアドバイスを受けられます。</p><p><span class="marker">健診の結果、治療が必要と判断された場合の治療費は通常の保険診療</span>となり、自己負担が発生します。</p><div class="highlight-box">水戸市では「8020運動」（80歳で20本以上の自分の歯を保つ）を推進しています。定期的な歯科健診に加え、日常的な口腔ケアも重要です。訪問歯科診療の相談も受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-scholarship',
    title: '水戸市 奨学金貸付制度',
    organization: '水戸市',
    type: 'local',
    maxAmount: '月額最大4万円',
    maxAmountNum: 4,
    category: 'education',
    prefecture: '茨城県',
    tags: ['水戸市', '奨学金', '教育支援'],
    eligibility: '水戸市に住所を有する方の子弟で、高等学校・大学等に在学する方',
    applicationPeriod: '毎年3月〜4月',
    description: '水戸市が実施する奨学金貸付制度です。経済的な理由で修学が困難な学生に月額最大4万円を無利子で貸し付けます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 奨学金貸付制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、無利子で奨学金を貸し付ける制度です。</p><p>水戸市は弘道館に代表される教育の街として長い歴史を持ちます。「天下の魁」の精神を受け継ぎ、向学心のある若者が経済的な理由で学びの機会を失わないよう、市独自の奨学金制度を設けています。</p><p>貸付額は<strong>高校生月額1.8万円、大学生等月額4万円</strong>です。<span class="marker-green">無利子での貸付のため、返済時の利息負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が水戸市に住所を有すること</p><p>高等学校・高等専門学校・大学・短大・専門学校に在学または入学予定であること</p><p>学業成績が一定水準以上であること</p><p>経済的理由により修学が困難であること</p></div><p>水戸市教育委員会学校教育課に申請書と必要書類（成績証明書、所得証明書等）を提出します。</p><p><span class="marker">募集期間は毎年3月〜4月頃</span>です。選考により貸付が決定されます。他の奨学金との併用は制限される場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸付月額は<strong>高等学校1.8万円、大学・短大・専門学校4万円</strong>です。卒業後6か月の据置期間を経て、月賦で返済を開始します。</p><p><span class="marker">返済期間は貸付期間の3倍以内</span>です。大学4年間の貸付の場合、最長12年間で返済します。</p><div class="note-box">無利子のため返済総額は貸付総額と同額です。ただし、返済が著しく困難な場合は、返済猶予の申請ができます。日本学生支援機構の奨学金との併用については事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-sme-support',
    title: '水戸市 中小企業振興補助金',
    organization: '水戸市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '茨城県',
    tags: ['水戸市', '中小企業', '補助金'],
    eligibility: '水戸市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '水戸市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路拡大に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業者の設備投資や販路開拓</span>に対して費用の一部を補助する制度です。</p><p>水戸市は県庁所在地として商業・サービス業が集積しており、多くの中小企業が地域経済を支えています。デジタル化や新分野への進出を後押しすることで、市内産業の活性化を図っています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は30万円</strong>です。<span class="marker-green">展示会出展、設備導入、IT化推進など幅広い事業が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>水戸市内に事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>同一年度に同種の市補助金を受けていないこと</p><p>事業計画書を提出できること</p></div><p>水戸市役所産業経済部商工課に申請書と事業計画書を提出します。審査の上、交付が決定されます。</p><p><span class="marker">交付決定前に実施した事業は補助対象外</span>です。必ず申請・交付決定を受けてから事業に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。展示会の出展料、専門家への相談費用、設備購入費、ウェブサイト制作費などが対象になります。</p><p><span class="marker">事業完了後に実績報告書と経費の領収書を提出</span>する必要があります。精算後に補助金が交付されます。</p><div class="highlight-box">水戸市商工会議所でも経営相談や各種セミナーが実施されています。補助金の活用とあわせて、経営力向上に取り組みましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-nursing-equipment',
    title: '水戸市 介護用品支給事業',
    organization: '水戸市',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '茨城県',
    tags: ['水戸市', '介護用品', '支援事業'],
    eligibility: '水戸市に住所を有し、在宅で要介護4・5の方を介護している家族',
    applicationPeriod: '通年',
    description: '水戸市が実施する介護用品支給事業です。在宅で重度の要介護者を介護する家族に、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 介護用品支給事業は、<span class="marker">在宅で要介護4または5の認定を受けた方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>在宅介護を続ける家族の経済的・身体的負担は大きく、特に紙おむつ等の消耗品費は月々の家計を圧迫します。水戸市では介護用品の現物支給により、在宅介護の継続を支援しています。</p><p>支給額は<strong>月額6,250円相当</strong>の介護用品です。<span class="marker-green">市民税非課税世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>以下のすべてに該当する方が対象です。</p><div class="summary-box" data-title="支給要件"><p>水戸市に住所を有する方を在宅で介護していること</p><p>介護を受ける方が要介護4または5の認定を受けていること</p><p>介護を受ける方が住民税非課税であること</p><p>介護を受ける方が病院・施設に入院・入所していないこと</p></div><p>水戸市役所高齢福祉課に申請書を提出します。<strong>介護保険被保険者証のコピー</strong>が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当の紙おむつ・尿取りパッド等</strong>が支給されます。カタログから必要な商品を選び、自宅に配送されます。</p><p><span class="marker">入院や施設入所した場合は支給が停止</span>されます。状況が変わった場合は速やかに届出をしてください。</p><div class="note-box">介護保険の福祉用具貸与や住宅改修費の制度とは別の事業です。介護に関する総合的な相談は、水戸市の地域包括支援センターでも受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-energy-support',
    title: '水戸市 エネルギー価格高騰対策支援金',
    organization: '水戸市',
    type: 'local',
    maxAmount: '1世帯あたり1万円',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '茨城県',
    tags: ['水戸市', 'エネルギー支援', '給付金'],
    eligibility: '水戸市に住所を有する住民税非課税世帯',
    applicationPeriod: '毎年7月〜翌年1月頃',
    description: '水戸市が実施するエネルギー価格高騰対策支援金です。住民税非課税世帯に対し、光熱費の負担軽減として1世帯1万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 エネルギー価格高騰対策支援金は、<span class="marker">エネルギー価格の高騰により家計への影響が大きい住民税非課税世帯</span>を対象に、光熱費の負担軽減を図るための支援金です。</p><p>水戸市は内陸部に位置し、夏の暑さと冬の寒さの気温差が大きい気候特性があります。電気・ガス料金の上昇が続く中、特に低所得世帯の負担を軽減するためにこの支援金を創設しました。</p><p>支給額は<strong>1世帯あたり1万円</strong>です。<span class="marker-green">プッシュ型給付として対象世帯に通知が届きます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>水戸市に住民登録がある世帯で、世帯全員が住民税非課税である世帯が対象です。</p><div class="summary-box" data-title="支給の流れ"><p>対象世帯に市から確認書が届く</p><p>内容を確認し、返送する</p><p>約1か月後に口座に振り込まれる</p></div><p>市が対象世帯を抽出し、<strong>確認書を郵送</strong>します。届いた確認書に必要事項を記入して返送するだけで手続きが完了します。</p><p><span class="marker">課税状況の変更等で対象に該当するにもかかわらず通知が届かない場合は、水戸市役所生活福祉課へお問い合わせください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり1万円</strong>で、世帯人数にかかわらず一律です。</p><p><span class="marker">住民税が課税されている方に扶養されている場合は対象外</span>となることがあります。</p><div class="note-box">本支援金は非課税所得として扱われ、受給しても税金や社会保険料には影響しません。水戸市では省エネ家電への買い替え補助なども別途実施している場合がありますので、あわせてご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-seismic-diagnosis',
    title: '水戸市 木造住宅耐震診断助成事業',
    organization: '水戸市',
    type: 'local',
    maxAmount: '診断費用の全額助成（上限あり）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '茨城県',
    tags: ['水戸市', '耐震診断', '防災'],
    eligibility: '水戸市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '水戸市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>を対象に、耐震診断の費用を助成する制度です。</p><p>水戸市は2011年の東日本大震災で大きな被害を受けた経験があり、住宅の耐震化を重要な防災施策として位置付けています。旧耐震基準の木造住宅の安全性を確認し、必要に応じて耐震改修につなげることを目的としています。</p><p><span class="marker-green">市が派遣する耐震診断士による診断を無料で受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>水戸市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>地上2階建て以下であること</p><p>在来軸組工法・伝統的工法で建築されていること</p></div><p>水戸市役所建築指導課に申請書を提出します。申請後、市が耐震診断士を派遣し、<strong>現地調査を実施</strong>します。</p><p><span class="marker">例年申込多数のため、早めの申請をおすすめします</span>。診断結果は後日報告書として交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額助成</strong>され、申請者の自己負担はありません。診断結果に基づき、耐震性の評価と改修のアドバイスを受けることができます。</p><p><span class="marker">耐震診断の結果、改修が必要と判断された場合は、別途「耐震改修補助金」（上限100万円程度）</span>の利用が可能です。</p><div class="highlight-box">東日本大震災の教訓を踏まえ、水戸市では住宅の耐震化率の向上を推進しています。耐震診断を受けることで、大規模地震に対する自宅の安全性を客観的に知ることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 宇都宮市（栃木県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'utsunomiya-childcare-subsidy',
    title: '宇都宮市 子育て世帯応援給付金',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['宇都宮市', '子育て支援', '給付金'],
    eligibility: '宇都宮市に住所を有し、住民税非課税世帯等で18歳以下の子どもを養育する方',
    applicationPeriod: '毎年6月〜翌年2月頃',
    description: '宇都宮市が実施する子育て世帯応援給付金です。低所得の子育て世帯に対し、児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 子育て世帯応援給付金は、<span class="marker">住民税非課税世帯やそれに準ずる低所得の子育て世帯</span>に対して生活を支援する給付金です。</p><p>宇都宮市はLRT（次世代型路面電車）の開業で全国的に注目を集める北関東最大の都市です。餃子の街としても知られ、子育て環境の充実にも積極的に取り組んでいます。物価高騰が続く中、特に低所得の子育て世帯の負担軽減を図る制度です。</p><p>支給額は<strong>児童1人あたり5万円</strong>です。<span class="marker-green">ひとり親世帯で児童扶養手当受給者は申請不要で支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宇都宮市に住民登録がある18歳以下の子どもを養育する方で、以下に該当する世帯が対象です。</p><div class="summary-box" data-title="対象世帯"><p>児童扶養手当受給のひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>物価高騰等により家計が急変し、住民税非課税相当となった世帯</p></div><p>ひとり親世帯は<strong>自動で口座振込</strong>されます。それ以外の対象世帯は宇都宮市役所子ども政策課へ申請書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり5万円</strong>です。複数の子どもがいる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯は収入減少を証明する書類（給与明細等）の提出が必要</span>です。直近の収入状況をもとに審査されます。</p><div class="note-box">すでに他の自治体で同趣旨の給付金を受給している場合は対象外です。生活保護世帯も対象に含まれます。給付金は非課税所得のため、税金や社会保険料に影響しません。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-daycare-support',
    title: '宇都宮市 保育料軽減事業',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '第2子以降の保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['宇都宮市', '保育料軽減', '子育て支援'],
    eligibility: '宇都宮市内の保育施設に通う第2子以降の子どもの保護者',
    applicationPeriod: '通年（入所手続き時に適用）',
    description: '宇都宮市が実施する保育料軽減事業です。第2子以降の保育料を無料化し、多子世帯の経済的負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 保育料軽減事業は、<span class="marker">認可保育所・認定こども園等に通う第2子以降の子どもの保育料を無料</span>にする制度です。</p><p>宇都宮市はLRT沿線を中心とした「コンパクトシティ」の構築を進めており、子育てしやすい街づくりの柱として保育の充実を掲げています。国の制度に上乗せし、市独自の保育料軽減策を実施しています。</p><p><span class="marker-green">所得制限なし・年齢制限なしで、第2子以降の保育料が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>地域型保育事業所（小規模保育等）</p><p>新制度移行幼稚園</p></div><p>保育施設の入所申請時に、きょうだいの状況を確認のうえ自動的に適用されます。<strong>別途の申請は原則不要</strong>です。</p><p><span class="marker">第2子のカウントは、保護者が養育する子どもの数で判定</span>されます。上の子が小学生以上であっても第2子としてカウントされます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料は0円</strong>です。第1子の保育料は所得に応じた通常の金額となります。3歳以上児は国の幼児教育・保育の無償化により全員無料です。</p><p><span class="marker">0〜2歳児で住民税課税世帯の第1子のみが保育料の負担対象</span>となります。</p><div class="highlight-box">認可外保育施設を利用している場合は、別途「認可外保育施設利用支援補助金」の制度があります。詳しくは宇都宮市役所保育課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-newlywed-rent',
    title: '宇都宮市 結婚新生活支援補助金',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '栃木県',
    tags: ['宇都宮市', '結婚新生活', '補助金'],
    eligibility: '宇都宮市内に居住する新婚世帯で、夫婦の合計所得が500万円未満の方',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '宇都宮市が実施する結婚新生活支援補助金です。新婚世帯の住居費や引越し費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 結婚新生活支援補助金は、<span class="marker">新たに結婚した世帯の住居費（家賃・住宅購入費）や引越し費用</span>を補助する制度です。</p><p>宇都宮市は「住みよさランキング」で常に上位にランクインする北関東の中核都市です。結婚を機にした新生活のスタートを経済的に支援し、若い世帯の定住を促進しています。</p><p>補助額は婚姻時の年齢により異なり、<strong>夫婦とも29歳以下の場合は上限60万円、それ以外は上限30万円</strong>です。<span class="marker-green">夫婦の合計所得500万円未満が要件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>対象年度内に婚姻届を提出した夫婦であること</p><p>夫婦の合計所得が500万円未満であること</p><p>宇都宮市内に居住していること</p><p>夫婦のいずれかが39歳以下であること</p></div><p>宇都宮市役所子ども政策課に申請書と必要書類（婚姻届受理証明書、住居に関する契約書等）を提出します。</p><p><span class="marker">申請は婚姻届提出日の属する年度内に行う必要があります</span>。年度末に婚姻届を提出した場合は翌年度の申請も可能な場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助上限額は<strong>夫婦ともに29歳以下：60万円、それ以外：30万円</strong>です。家賃、敷金・礼金、共益費、仲介手数料、引越し費用が対象です。</p><p><span class="marker">住宅購入の場合は、購入費・住宅ローンの返済額が対象</span>となります（土地のみの購入は対象外）。</p><div class="note-box">勤務先からの住居手当がある場合は差し引かれます。また、国の結婚新生活支援事業の趣旨に沿った制度のため、要件は変更される場合があります。最新情報は市のホームページでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-infertility',
    title: '宇都宮市 不妊治療費助成事業',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '栃木県',
    tags: ['宇都宮市', '不妊治療', '助成金'],
    eligibility: '宇都宮市に住所を有し、先進医療として実施される不妊治療を受けた夫婦',
    applicationPeriod: '治療終了日から60日以内',
    description: '宇都宮市が実施する不妊治療費助成事業です。先進医療に係る不妊治療費を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 不妊治療費助成事業は、<span class="marker">保険適用の生殖補助医療と併用して先進医療を受けた場合の自己負担分</span>を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、先進医療として実施される治療は全額自己負担となります。宇都宮市ではこの自己負担分を助成し、不妊に悩む夫婦の経済的負担を軽減しています。</p><p>助成額は<strong>1回の治療あたり最大10万円</strong>です。<span class="marker-green">所得制限はなく、市内在住の夫婦であれば利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>法律上の婚姻関係にある夫婦（または事実婚の方）で、夫婦の一方または双方が宇都宮市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金交付申請書</p><p>医療機関が発行する治療証明書</p><p>領収書の写し</p><p>夫婦の住民票（事実婚の場合は戸籍謄本等）</p></div><p>宇都宮市役所子ども家庭課に申請します。<span class="marker">治療が終了した日から60日以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>先進医療に要した費用の実費で、上限は1回あたり10万円</strong>です。年度内の回数制限はありませんが、通算の助成回数には上限があります。</p><p><span class="marker">保険適用の治療費は対象外です。先進医療として厚生労働省が認めた治療のみが対象</span>となります。</p><div class="highlight-box">宇都宮市では不妊・不育症に関する相談窓口も設けています。治療費の助成だけでなく、精神的なサポートも含めた総合的な支援を行っていますので、お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-school-lunch',
    title: '宇都宮市 学校給食費支援事業',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '給食費の一部助成',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '栃木県',
    tags: ['宇都宮市', '学校給食', '教育支援'],
    eligibility: '宇都宮市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '通年（自動適用）',
    description: '宇都宮市が実施する学校給食費支援事業です。食材価格の高騰分を市が負担し、保護者の給食費負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 学校給食費支援事業は、<span class="marker">食材価格の高騰による給食費の値上げを抑制する</span>ため、上昇分を市が公費で負担する事業です。</p><p>宇都宮市は「食育推進都市」として学校給食の質と安全にこだわっています。食材費の高騰が続く中でも、栄養バランスの取れた給食を維持しつつ、保護者の負担が増えないよう公費負担を実施しています。</p><p><span class="marker-green">保護者の申請は不要で、自動的に適用されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宇都宮市立小学校・中学校・義務教育学校に在籍するすべての児童生徒の保護者が対象です。</p><div class="summary-box" data-title="給食費の目安（月額）"><p>小学校低学年：約4,200円</p><p>小学校高学年：約4,500円</p><p>中学校：約5,000円</p></div><p><strong>保護者の手続きは一切不要</strong>です。食材価格の高騰分は市が直接給食会計に補填するため、給食費の請求額は据え置かれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市が負担する額は<strong>食材価格の高騰分に相当する額</strong>で、1食あたり数十円程度が補填されています。</p><p><span class="marker">就学援助制度の認定を受けている世帯は給食費全額が別途支給</span>されますので、本事業との重複はありません。</p><div class="note-box">宇都宮市の学校給食は地産地消にも力を入れており、栃木県産の農産物を積極的に取り入れています。食物アレルギーへの対応も各学校で実施していますので、個別にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-telework-bonus',
    title: '宇都宮市 テレワーク移住支援補助金',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '栃木県',
    tags: ['宇都宮市', 'テレワーク', '移住支援'],
    eligibility: '首都圏から宇都宮市に移住し、テレワークで勤務を継続する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '宇都宮市が実施するテレワーク移住支援補助金です。首都圏からの移住者でテレワーク勤務を行う方に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 テレワーク移住支援補助金は、<span class="marker">首都圏の企業に勤めながらテレワークで宇都宮市に移住する方</span>を対象に、移住にかかる費用を補助する制度です。</p><p>宇都宮市は東京から新幹線で約50分、LRTの開業で市内交通も便利になり、テレワーク移住先として注目されています。都心へのアクセスの良さと自然豊かな暮らしを両立できる環境が魅力です。</p><p>補助額は<strong>最大30万円</strong>です。<span class="marker-green">コワーキングスペース利用料の補助も含まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>首都圏（東京都・神奈川県・千葉県・埼玉県）から宇都宮市に転入すること</p><p>転入前の勤務先でテレワーク勤務が認められていること</p><p>宇都宮市に3年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>宇都宮市役所総合政策課に申請書と必要書類（テレワーク勤務を証明する書類、転入前の住民票除票等）を提出します。</p><p><span class="marker">転入日から1年以内に申請する必要があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>引越し費用として<strong>最大20万円</strong>、市内コワーキングスペース利用料として<strong>最大10万円（月1万円×最大10か月）</strong>が補助されます。</p><p><span class="marker">3年以内に宇都宮市から転出した場合は補助金の返還</span>を求められる場合があります。</p><div class="highlight-box">宇都宮市にはLRT沿線を中心にコワーキングスペースやシェアオフィスが増えています。テレワーク移住者向けの体験ツアーも実施していますので、移住前に街の雰囲気を体験することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-nursing-home-reform',
    title: '宇都宮市 高齢者住宅改修支援事業',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '栃木県',
    tags: ['宇都宮市', '高齢者住宅改修', '介護支援'],
    eligibility: '宇都宮市に住所を有する65歳以上の方で、介護予防のために住宅改修が必要な方',
    applicationPeriod: '通年',
    description: '宇都宮市が実施する高齢者住宅改修支援事業です。介護予防のための住宅バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 高齢者住宅改修支援事業は、<span class="marker">65歳以上の高齢者が安全に在宅生活を継続できるよう、住宅のバリアフリー改修</span>を支援する制度です。</p><p>宇都宮市では高齢者の在宅生活を支援するため、介護保険の住宅改修費（上限20万円）では対応しきれない改修工事について、市独自の上乗せ助成を行っています。転倒防止や日常動作の負担軽減を目的とした改修が対象です。</p><p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。<span class="marker-green">介護保険の住宅改修費との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの設置</p><p>段差の解消・スロープの設置</p><p>床材の滑り止め加工</p><p>浴室・トイレの改修</p><p>引き戸への変更</p></div><p>宇都宮市役所高齢福祉課に申請書、工事見積書、施工箇所の写真を提出します。ケアマネジャーの意見書が必要な場合があります。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定前に着工した工事は助成の対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。所得に応じた自己負担割合が設定されています。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）を先に利用し、それでも不足する場合に本制度を活用</span>するのが一般的な流れです。</p><div class="note-box">新築・増築工事や、老朽化による修繕は対象外です。改修後の効果を確認するため、完了検査が行われる場合があります。まずは担当の地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-migration-bonus',
    title: '宇都宮市 UIJターン移住支援金',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '栃木県',
    tags: ['宇都宮市', '移住支援金', 'UIJターン'],
    eligibility: '東京圏から宇都宮市へ移住し、就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '宇都宮市が実施するUIJターン移住支援金です。東京圏から移住し就業・創業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 UIJターン移住支援金は、<span class="marker">東京23区に在住または東京圏から23区へ通勤していた方が宇都宮市に移住</span>し、就業または創業した場合に支給される支援金です。</p><p>宇都宮市は北関東最大の都市として教育・医療・商業が充実し、LRTの開業でさらに暮らしやすくなりました。新幹線で東京まで約50分という利便性も備えており、UIJターン移住先として高い人気を誇ります。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円の加算</span>もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から23区へ通勤していたこと</p><p>栃木県のマッチングサイト掲載企業への就業、または創業支援事業の利用</p><p>宇都宮市に転入後3か月以上1年以内に申請すること</p><p>5年以上継続して居住する意思があること</p></div><p>宇都宮市役所総合政策課に申請書と必要書類を提出します。<strong>テレワーク移住も一定要件のもと対象</strong>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子どもがいる場合は子ども加算が適用されます。</p><p><span class="marker">5年以内に宇都宮市から転出した場合は支援金の全額または半額の返還</span>が求められます。</p><div class="highlight-box">宇都宮市では移住相談窓口「ミヤリー・スクエア」を設けており、住まい・仕事・子育てなどの情報をワンストップで提供しています。オンライン相談も可能ですので、まずはお気軽にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-bousai-equipment',
    title: '宇都宮市 家庭用防災設備購入補助金',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'disaster',
    prefecture: '栃木県',
    tags: ['宇都宮市', '防災設備', '補助金'],
    eligibility: '宇都宮市に住所を有する世帯主',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '宇都宮市が実施する家庭用防災設備購入補助金です。家庭用の防災設備の購入費用を最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 家庭用防災設備購入補助金は、<span class="marker">家庭での防災対策を推進するため、防災設備の購入費用</span>を補助する制度です。</p><p>宇都宮市は河川の氾濫や竜巻などの自然災害のリスクがある地域です。市では「自助」の取り組みを推進しており、各家庭での防災対策の充実を支援しています。</p><p>補助率は購入費用の2分の1で、<strong>上限3万円</strong>です。<span class="marker-green">感震ブレーカー、家具転倒防止器具、非常用蓄電池などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災設備"><p>感震ブレーカー（地震時の電気火災防止）</p><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>非常用蓄電池・ポータブル電源</p><p>飛散防止フィルム（窓ガラス用）</p></div><p>宇都宮市役所危機管理課に申請書と購入予定品の見積書を提出します。</p><p><span class="marker">購入前に申請が必要</span>です。交付決定を受けてから購入してください。すでに購入済みの設備は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用（設置費含む）の2分の1で、<strong>上限3万円</strong>です。1世帯1回限りの利用に限られます。</p><p><span class="marker">食料・飲料水などの消耗品は対象外</span>です。設備・器具など繰り返し使えるものが補助対象となります。</p><div class="note-box">宇都宮市では自主防災組織の結成支援や防災訓練の実施なども行っています。家庭での備えとあわせて、地域の防災活動にも積極的に参加しましょう。ハザードマップの確認も忘れずに行ってください。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 前橋市（群馬県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'maebashi-parenting-allowance',
    title: '前橋市 子育て世帯臨時給付金',
    organization: '前橋市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['前橋市', '子育て支援', '給付金'],
    eligibility: '前橋市に住所を有し、住民税非課税世帯等で18歳以下の子どもを養育する方',
    applicationPeriod: '毎年6月〜翌年2月頃',
    description: '前橋市が実施する子育て世帯臨時給付金です。低所得の子育て世帯に児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 子育て世帯臨時給付金は、<span class="marker">住民税非課税世帯またはそれに準ずる低所得の子育て世帯</span>に対し、生活を支援するための給付金です。</p><p>群馬県の県庁所在地である前橋市は、赤城山の雄大な自然と市街地のにぎわいが共存する街です。「めぶく。」をスローガンに掲げ、デジタル田園都市構想の先進地として子育て環境の充実にも力を入れています。</p><p>支給額は<strong>児童1人あたり5万円</strong>です。<span class="marker-green">ひとり親世帯で児童扶養手当受給者は申請不要で支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>前橋市に住民登録がある18歳以下の子どもを養育する方で、住民税非課税世帯または家計急変世帯が対象です。</p><div class="summary-box" data-title="対象となる方"><p>児童扶養手当受給者（ひとり親世帯）</p><p>住民税均等割が非課税の子育て世帯</p><p>収入が急減し住民税非課税相当となった世帯</p></div><p>ひとり親世帯は<strong>申請不要で自動的に口座振込</strong>されます。それ以外の対象者は前橋市役所こども支援課へ申請書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。複数の子どもがいる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯の場合は収入の減少を証明する書類の提出が必要</span>です。</p><div class="note-box">本給付金は非課税所得のため、受給しても税金や社会保険料に影響しません。他の自治体で同趣旨の給付金をすでに受給している場合は対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-birth-bonus',
    title: '前橋市 出産祝い金支給制度',
    organization: '前橋市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['前橋市', '出産祝い金', '子育て支援'],
    eligibility: '前橋市に住所を有し、第3子以降の子どもを出産した方',
    applicationPeriod: '出産日から6か月以内',
    description: '前橋市が実施する出産祝い金支給制度です。第3子以降のお子さんの出産に対し祝い金10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 出産祝い金支給制度は、<span class="marker">第3子以降の子どもを出産した保護者</span>に対し、出産祝い金を支給する制度です。</p><p>前橋市は上毛三山（赤城山・榛名山・妙義山）を望む風光明媚な県都で、全国有数の日照時間を誇ります。多子世帯への経済的支援を通じて、安心して子育てできる環境づくりを推進しています。</p><p>支給額は<strong>第3子以降1人あたり10万円</strong>です。<span class="marker-green">所得制限はなく、すべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で前橋市に住民登録があること</p><p>第3子以降の出産であること</p><p>出産した子を含め3人以上の子を養育していること</p><p>出産日から6か月以内に申請すること</p></div><p>前橋市役所こども支援課に申請書を提出します。出生届の手続き時に窓口でご案内します。</p><p><span class="marker">申請期限は出産日から6か月以内</span>です。期限を過ぎると受給できませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第3子以降のお子さん1人あたり10万円</strong>です。多胎児の場合、該当する人数分が支給されます。</p><p><span class="marker">「第3子以降」は保護者が現に養育している子どもの数でカウント</span>されます。</p><div class="highlight-box">前橋市では出産・子育て応援給付金（妊娠届出時5万円、出生届出時5万円）も別途実施しています。あわせてご利用ください。マイナンバーカードを利用したオンライン申請にも対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-vacant-house',
    title: '前橋市 空き家活用リフォーム補助金',
    organization: '前橋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['前橋市', '空き家活用', '補助金'],
    eligibility: '前橋市内の空き家を購入または賃借し、改修して居住する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '前橋市が実施する空き家活用リフォーム補助金です。空き家の改修工事に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 空き家活用リフォーム補助金は、<span class="marker">市内の空き家を取得または賃借し、居住するために改修工事を行う方</span>を対象に費用の一部を補助する制度です。</p><p>前橋市では増加する空き家の有効活用と地域の活性化を目指し、この補助制度を設けています。空き家バンクに登録された物件の活用も推進しており、移住希望者にも人気のある制度です。</p><p>補助率は対象工事費の3分の1で、<strong>上限50万円</strong>です。<span class="marker-green">市外からの転入者にはさらに加算がある場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>前橋市内の空き家を購入または賃借すること</p><p>改修後に居住する（または居住している）こと</p><p>市税の滞納がないこと</p><p>市内業者による30万円以上の改修工事であること</p></div><p>前橋市役所建築住宅課に申請書、工事見積書、空き家の写真等を提出します。空き家バンク登録物件は申請が優先される場合があります。</p><p><span class="marker">工事着手前に申請が必要</span>です。交付決定前の着工は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1で、<strong>上限50万円</strong>です。内装・外装の修繕、水回りの改修、断熱工事などが対象です。</p><p><span class="marker">親族間の売買・賃貸借による空き家は対象外</span>です。また、店舗や事務所としてのみ使用する場合も対象外です。</p><div class="highlight-box">前橋市の空き家バンクでは物件情報を公開しており、移住希望者向けの相談窓口も設けています。空き家の解体費用を補助する別制度もありますので、状況に応じてご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-disability-medical',
    title: '前橋市 重度心身障害者医療費助成制度',
    organization: '前橋市',
    type: 'local',
    maxAmount: '医療費自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '群馬県',
    tags: ['前橋市', '障害者医療', '助成金'],
    eligibility: '前橋市に住所を有する重度心身障害者（身体障害者手帳1・2級等）',
    applicationPeriod: '通年',
    description: '前橋市が実施する重度心身障害者医療費助成制度です。重度の障害のある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 重度心身障害者医療費助成制度は、<span class="marker">重度の心身障害がある方の保険診療に係る自己負担分を全額助成</span>する制度です。</p><p>前橋市は「福祉のまちづくり」を推進しており、障害のある方が安心して医療を受けられる環境の整備に力を入れています。通院・入院・調剤のすべてが助成対象で、経済的な心配なく治療に専念できます。</p><p><span class="marker-green">一定の所得以下の方が対象で、群馬県内の医療機関では窓口負担がなくなります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>以下のいずれかに該当し、前橋市に住民登録がある方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級・2級の方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級の方</p><p>特別児童扶養手当1級の方</p></div><p>前橋市役所障害福祉課に申請書、障害者手帳、健康保険証を持参して申請します。<strong>「福祉医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。群馬県内の医療機関では受給資格者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料等）は対象外です。65歳以上で新たに障害者手帳を取得した場合は、後期高齢者医療制度に加入することが申請の条件となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-afterschool',
    title: '前橋市 放課後児童クラブ利用料減免制度',
    organization: '前橋市',
    type: 'local',
    maxAmount: '利用料の全額免除',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '群馬県',
    tags: ['前橋市', '放課後児童クラブ', '利用料減免'],
    eligibility: '前橋市立放課後児童クラブを利用する児童の保護者で、一定の要件に該当する方',
    applicationPeriod: '通年（入会手続き時または随時）',
    description: '前橋市が実施する放課後児童クラブ利用料減免制度です。低所得世帯やひとり親世帯等の利用料を減額・免除します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 放課後児童クラブ利用料減免制度は、<span class="marker">経済的な理由で利用料の負担が困難な世帯</span>に対し、利用料を減額または免除する制度です。</p><p>前橋市では共働き世帯やひとり親世帯の子どもたちが放課後を安全に過ごせるよう、市内に多数の放課後児童クラブを設置しています。経済的な理由で利用を断念することがないよう、利用料の減免制度を設けています。</p><p><span class="marker-green">住民税非課税世帯は利用料が全額免除、ひとり親世帯等は半額に減免</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="減免の区分"><p>生活保護世帯：全額免除</p><p>住民税非課税世帯：全額免除</p><p>ひとり親世帯（住民税課税）：半額減免</p><p>多子世帯（第2子以降）：半額減免</p></div><p>入会申請時に「利用料減免申請書」を前橋市役所こども支援課に提出します。年度途中の家計急変にも対応しています。</p><p><span class="marker">住民税の課税状況は毎年確認されるため、年度ごとに申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通常の利用料は<strong>月額5,000〜8,000円程度</strong>です。減免により自己負担額が0円〜半額になります。</p><p><span class="marker">おやつ代や保険料など一部費用は減免の対象外</span>となる場合があります。</p><div class="note-box">前橋市では小学校1年生から6年生まで放課後児童クラブを利用できます。夏休み等の長期休暇中も開所しており、働く保護者をサポートしています。定員に達している場合は待機となることがありますので、早めのお申し込みをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-women-startup',
    title: '前橋市 女性起業家支援補助金',
    organization: '前橋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '群馬県',
    tags: ['前橋市', '女性起業', '補助金'],
    eligibility: '前橋市内で新たに起業する女性、または起業後1年以内の女性',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '前橋市が実施する女性起業家支援補助金です。女性の起業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 女性起業家支援補助金は、<span class="marker">市内で新たに起業する女性</span>を対象に、創業にかかる初期費用を補助する制度です。</p><p>前橋市は「まえばし暮らしテック推進事業」など先進的な施策を展開する街で、女性が活躍できるビジネス環境の構築にも取り組んでいます。特に子育てと両立しやすい起業スタイルを支援し、地域経済の多様化を目指しています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限50万円</strong>です。<span class="marker-green">市の起業セミナーの受講が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>申請者が女性であること</p><p>前橋市内で起業する（または起業後1年以内である）こと</p><p>市が実施する起業支援セミナーを受講済みであること</p><p>事業計画書を提出できること</p></div><p>前橋市役所産業政策課に事業計画書および申請書を提出します。書類審査とプレゼンテーション審査が行われます。</p><p><span class="marker">前橋市産業支援センターでの無料経営相談も活用</span>できます。計画段階から相談するのがおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限50万円</strong>です。店舗改装費、設備費、広告宣伝費、法人設立費用などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。必ず交付決定後に経費を支出してください。</p><div class="highlight-box">前橋市では女性起業家向けのネットワーキングイベントやメンター制度も実施しています。補助金の活用にとどまらず、先輩起業家との交流や経営ノウハウの習得にもぜひご活用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-nursing-equipment',
    title: '前橋市 介護用品給付事業',
    organization: '前橋市',
    type: 'local',
    maxAmount: '月額6,000円相当',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '群馬県',
    tags: ['前橋市', '介護用品', '給付事業'],
    eligibility: '前橋市に住所を有し、在宅で要介護4・5の方を介護している家族',
    applicationPeriod: '通年',
    description: '前橋市が実施する介護用品給付事業です。在宅で重度の要介護者を介護する家族に紙おむつ等の介護用品を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 介護用品給付事業は、<span class="marker">在宅で要介護4または5の認定を受けた方を介護する家族</span>に対し、紙おむつ等の介護用品を給付する制度です。</p><p>前橋市では在宅介護を継続する家族の負担軽減のため、消耗品である介護用品の支給を行っています。介護者が自分の生活を犠牲にすることなく介護を続けられるよう、経済面からサポートしています。</p><p>給付額は<strong>月額6,000円相当</strong>の介護用品です。<span class="marker-green">住民税非課税世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>以下のすべてに該当する方が対象です。</p><div class="summary-box" data-title="給付要件"><p>前橋市に住所を有する要介護4・5の方を在宅で介護していること</p><p>介護を受ける方が住民税非課税であること</p><p>介護を受ける方が入院中または施設入所中でないこと</p></div><p>前橋市役所長寿包括ケア課に申請書を提出します。<strong>介護保険被保険者証</strong>の写しが必要です。承認後、カタログから商品を選んで配送されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,000円相当の紙おむつ・尿取りパッド・使い捨て手袋等</strong>が給付されます。</p><p><span class="marker">入院や施設入所した場合は給付が停止</span>されます。状況に変更があった場合は速やかに届出てください。</p><div class="note-box">介護保険の福祉用具貸与や購入とは別の事業です。介護に関する総合的な相談は、前橋市の地域包括支援センターでも受け付けています。介護者の健康管理やリフレッシュも大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-elderly-support',
    title: '前橋市 高齢者見守り支援事業',
    organization: '前橋市',
    type: 'local',
    maxAmount: 'GPS端末貸与（月額無料）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '群馬県',
    tags: ['前橋市', '高齢者見守り', '生活支援'],
    eligibility: '前橋市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '前橋市が実施する高齢者見守り支援事業です。GPS端末の貸与や緊急通報システムの設置により、高齢者の安全を守ります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 高齢者見守り支援事業は、<span class="marker">ひとり暮らしや認知症の高齢者の安全を確保する</span>ため、GPS端末の貸与や緊急通報システムの設置を行う事業です。</p><p>前橋市はデジタル技術を活用した福祉サービスの充実に力を入れており、高齢者の見守りにもICTを積極的に導入しています。家族が離れて暮らしていても安心できる環境づくりを推進しています。</p><p><span class="marker-green">利用料は無料（住民税非課税世帯）または低額で、気軽に利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用できるサービス"><p>GPS端末の貸与（認知症の方の所在確認用）</p><p>緊急通報システムの設置（ペンダント型通報装置）</p><p>安否確認センサーの設置</p></div><p>前橋市役所長寿包括ケア課または地域包括支援センターに申請します。<strong>民生委員の意見書</strong>が必要な場合があります。</p><p><span class="marker">認知症により行方不明になるおそれのある方には、GPS端末が優先的に貸与</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>住民税非課税世帯は利用料無料</strong>です。課税世帯は月額数百円程度の自己負担があります。</p><p><span class="marker">緊急通報システムは24時間対応のコールセンターに接続</span>され、急病や転倒などの緊急時にボタンひとつで通報できます。</p><div class="highlight-box">前橋市では「まえばし見守りネットワーク」として、地域の協力事業者（新聞配達、宅配業者等）による日常的な見守り活動も行っています。技術と地域の力を組み合わせた重層的な支援体制を整えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-seismic-diagnosis',
    title: '前橋市 木造住宅無料耐震診断',
    organization: '前橋市',
    type: 'local',
    maxAmount: '診断費用の全額助成',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '群馬県',
    tags: ['前橋市', '耐震診断', '防災'],
    eligibility: '前橋市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃（予算に達し次第終了）',
    description: '前橋市が実施する木造住宅無料耐震診断です。旧耐震基準の木造住宅の耐震性を無料で診断します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 木造住宅無料耐震診断は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>を対象に、耐震診断を無料で実施する事業です。</p><p>群馬県は比較的地震が少ない地域と思われがちですが、関東平野北西縁断層帯など活断層が存在し、大規模地震のリスクがあります。前橋市では旧耐震基準の住宅の安全確認を推進し、市民の防災意識の向上を図っています。</p><p><span class="marker-green">市が耐震診断士を無料で派遣し、住宅の耐震性を評価</span>します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>前橋市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>地上2階建て以下であること</p><p>在来軸組工法で建築されていること</p></div><p>前橋市役所建築指導課に申請書を提出します。申請後、市が委託した耐震診断士が現地を訪問し、<strong>建物の構造や劣化状況を調査</strong>します。</p><p><span class="marker">毎年の募集戸数に限りがあるため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額市が負担</strong>するため、申請者の自己負担はありません。</p><p><span class="marker">診断の結果「倒壊の危険あり」と判定された場合は、耐震改修補助金（上限120万円程度）</span>の利用が可能です。</p><div class="note-box">耐震診断は建物の強度を評価するもので、改修工事は含まれません。診断結果に基づき、改修の要否や概算費用のアドバイスを受けることができます。鉄骨造・RC造の住宅は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 甲府市（山梨県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kofu-childcare-subsidy',
    title: '甲府市 子育て世帯生活応援給付金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '山梨県',
    tags: ['甲府市', '子育て支援', '給付金'],
    eligibility: '甲府市に住所を有し、住民税非課税世帯等で18歳以下の子どもを養育する方',
    applicationPeriod: '毎年6月〜翌年2月頃',
    description: '甲府市が実施する子育て世帯生活応援給付金です。低所得の子育て世帯に児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 子育て世帯生活応援給付金は、<span class="marker">住民税非課税世帯やそれに準ずる低所得の子育て世帯</span>に対し、生活を支援する給付金です。</p><p>甲府市は武田信玄ゆかりの城下町として栄え、富士山や南アルプスを望む盆地に広がる山梨県の県庁所在地です。物価高騰の影響を受ける子育て世帯の経済的負担を軽減するため、本給付金を実施しています。</p><p>支給額は<strong>児童1人あたり5万円</strong>です。<span class="marker-green">ひとり親世帯で児童扶養手当受給者は申請不要で支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>甲府市に住民登録がある18歳以下の子どもを養育する方で、住民税非課税世帯または家計急変世帯が対象です。</p><div class="summary-box" data-title="対象となる方"><p>児童扶養手当受給のひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>物価高騰等で家計が急変した世帯</p></div><p>ひとり親世帯は<strong>自動で口座振込</strong>されます。その他の対象世帯は甲府市役所子ども未来部に申請書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。複数の子どもがいる場合は人数分が支給されます。</p><p><span class="marker">家計急変世帯は収入の減少を証明する書類が必要</span>です。</p><div class="note-box">給付金は非課税所得として扱われます。他の自治体で同趣旨の給付金をすでに受給している場合は対象外です。甲府市では子育て応援アプリ「すくすくこうふ」でも各種支援制度の情報を配信しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-parenting-allowance',
    title: '甲府市 多子世帯応援手当',
    organization: '甲府市',
    type: 'local',
    maxAmount: '第3子以降月額1万円',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '山梨県',
    tags: ['甲府市', '多子世帯', '子育て手当'],
    eligibility: '甲府市に住所を有し、第3子以降の3歳未満の子どもを養育する方',
    applicationPeriod: '通年（出生届等の手続き時）',
    description: '甲府市が実施する多子世帯応援手当です。第3子以降の3歳未満児を養育する世帯に月額1万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 多子世帯応援手当は、<span class="marker">第3子以降の3歳未満の子どもを養育する世帯</span>に対し、毎月手当を支給する市独自の制度です。</p><p>甲府市は出生率向上と多子世帯の経済的支援を重点施策に掲げています。国の児童手当に上乗せする形で、多子世帯の育児費用の負担を軽減し、安心して子育てできる環境を目指しています。</p><p>支給額は<strong>第3子以降の3歳未満児1人あたり月額1万円</strong>です。<span class="marker-green">所得制限なしで、要件を満たすすべての世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>甲府市に住民登録があること</p><p>第3子以降の子どもが3歳未満であること</p><p>対象の子を含め3人以上の子を養育していること</p></div><p>甲府市役所子ども未来部に申請書と必要書類を提出します。出生届の手続き時にあわせて案内されます。</p><p><span class="marker">申請月の翌月分から支給開始</span>となりますので、出生後は速やかに手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり月額1万円</strong>です。年3回（4月、8月、12月）にまとめて振り込まれます。</p><p><span class="marker">対象の子どもが3歳に到達した月分まで支給</span>されます。</p><div class="highlight-box">甲府市では国の児童手当（第3子以降は月額3万円）と合わせると、第3子以降の3歳未満児には月額4万円の手当が支給されることになります。子育て費用のかかる時期の家計を大きく支援します。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-housing-eco',
    title: '甲府市 住宅省エネ改修補助金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '山梨県',
    tags: ['甲府市', '省エネ改修', '補助金'],
    eligibility: '甲府市内の住宅に省エネ改修工事を行う方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '甲府市が実施する住宅省エネ改修補助金です。断熱改修や太陽光発電設備の設置等に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 住宅省エネ改修補助金は、<span class="marker">住宅の断熱改修や高効率設備の導入など、省エネルギー化を目的とした改修工事</span>を支援する制度です。</p><p>甲府盆地は夏の猛暑と冬の冷え込みが特徴で、住宅の断熱性能が光熱費に大きく影響します。甲府市では2050年カーボンニュートラルの実現に向けて、住宅の省エネ化を推進しています。</p><p>補助額は工事内容に応じて異なり、<strong>合計で最大30万円</strong>です。<span class="marker-green">窓の断熱改修、外壁・屋根の断熱化、太陽光発電の設置などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>窓の断熱改修（二重窓・Low-Eガラス等）：上限10万円</p><p>外壁・屋根の断熱化：上限10万円</p><p>太陽光発電設備の設置：上限10万円</p><p>高効率給湯器の設置：上限5万円</p></div><p>甲府市役所環境政策課に申請書、工事見積書、施工計画書を提出します。</p><p><span class="marker">工事着手前に申請し、交付決定を受ける必要があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は工事種別ごとに設定され、<strong>合計で最大30万円</strong>です。複数の工事を同時に行う場合はそれぞれの上限額を合算できます。</p><p><span class="marker">国の「住宅省エネ2024キャンペーン」等の補助金と併用できる場合があります</span>が、同一工事への二重補助は認められません。</p><div class="note-box">甲府市は夏季の気温が全国トップレベルになることもあり、窓の断熱改修は特に効果が大きい省エネ対策です。改修により冷暖房費の削減だけでなく、ヒートショックの予防にもつながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-mental-health',
    title: '甲府市 こころの健康相談・医療費助成事業',
    organization: '甲府市',
    type: 'local',
    maxAmount: '自立支援医療（精神通院）の自己負担軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '山梨県',
    tags: ['甲府市', 'メンタルヘルス', '医療費助成'],
    eligibility: '甲府市に住所を有し、精神疾患の通院治療を受けている方',
    applicationPeriod: '通年',
    description: '甲府市が実施するこころの健康相談・医療費助成事業です。精神疾患の通院治療に係る自己負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 こころの健康相談・医療費助成事業は、<span class="marker">精神疾患により継続的な通院治療を必要とする方</span>の医療費自己負担を軽減する制度です。</p><p>甲府市では精神保健福祉の充実を図り、うつ病・統合失調症・不安障害などの精神疾患で通院する方の負担軽減に取り組んでいます。国の自立支援医療制度に加え、市独自のサポートも提供しています。</p><p><span class="marker-green">自立支援医療（精神通院）の利用で、自己負担が原則1割に軽減</span>されます。さらに低所得世帯には市独自の助成があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>甲府市に住民登録があり、精神疾患の治療のため継続的に通院している方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>自立支援医療費支給認定申請書</p><p>医師の診断書（指定様式）</p><p>健康保険証</p><p>所得を確認できる書類</p></div><p>甲府市役所障がい福祉課に申請します。<strong>指定の医療機関と薬局を事前に登録</strong>する必要があります。有効期間は1年で、更新手続きが必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>自立支援医療の適用により、<strong>精神科通院の自己負担が3割から1割に軽減</strong>されます。住民税非課税世帯はさらに上限額が設定されます。</p><p><span class="marker">登録した医療機関・薬局以外では制度が適用されません</span>。医療機関の変更は事前に届出が必要です。</p><div class="highlight-box">甲府市では精神保健に関する無料相談窓口も設置しています。保健師や精神保健福祉士が対応しますので、治療だけでなく生活の悩みについてもお気軽にご相談ください。電話相談も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-scholarship',
    title: '甲府市 給付型奨学金制度',
    organization: '甲府市',
    type: 'local',
    maxAmount: '年額最大36万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '山梨県',
    tags: ['甲府市', '給付型奨学金', '教育支援'],
    eligibility: '甲府市に住所を有する方の子弟で、大学等に在学する成績優秀者',
    applicationPeriod: '毎年3月〜4月',
    description: '甲府市が実施する給付型奨学金制度です。経済的に困難な家庭の大学生等に返済不要の奨学金を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 給付型奨学金制度は、<span class="marker">経済的な理由で修学が困難だが向学心のある大学生等</span>に対し、返済不要の奨学金を給付する制度です。</p><p>甲府市は山梨大学をはじめとする高等教育機関が立地する文教都市の側面も持っています。将来の地域を担う人材の育成を目的に、市独自の給付型奨学金を設けています。</p><p>給付額は<strong>年額最大36万円（月額3万円相当）</strong>です。<span class="marker-green">返済不要のため、卒業後の経済的負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が甲府市に住所を有すること</p><p>大学・短大・専門学校に在学していること</p><p>学業成績が優秀であること（評定平均3.5以上目安）</p><p>世帯の収入が一定基準以下であること</p></div><p>甲府市教育委員会学事課に申請書、成績証明書、所得証明書を提出します。選考委員会による審査があります。</p><p><span class="marker">募集人数は年間数名程度と限られています</span>ので、早めの準備をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>年額36万円（月額3万円×12か月）</strong>です。最短修業年限まで継続して給付されます。</p><p><span class="marker">毎年度の成績確認があり、一定の成績を維持できない場合は給付が停止</span>される場合があります。</p><div class="note-box">国の給付型奨学金（日本学生支援機構）との併用は制限される場合があります。甲府市以外にも山梨県の奨学金制度がありますので、併用の可否を含めて教育委員会にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-uij-turn',
    title: '甲府市 UIJターン就職支援補助金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '山梨県',
    tags: ['甲府市', 'UIJターン', '就職支援'],
    eligibility: '東京圏から甲府市へ移住し、山梨県のマッチングサイト掲載企業に就職した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '甲府市が実施するUIJターン就職支援補助金です。東京圏からの移住就職者に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 UIJターン就職支援補助金は、<span class="marker">東京圏から甲府市に移住し、山梨県のマッチングサイトに掲載された企業に就職</span>した方を対象に支援金を支給する制度です。</p><p>甲府市は新宿から特急で約90分という首都圏へのアクセスの良さが魅力で、富士山や南アルプスに囲まれた豊かな自然環境の中で暮らせます。ぶどうやワインの名産地でもあり、QOLの高い生活を実現できる移住先として人気です。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">子ども1人あたり100万円の加算</span>もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>東京23区に在住、または東京圏から23区へ通勤していたこと（通算5年以上）</p><p>山梨県のマッチングサイト掲載企業に就職、または創業すること</p><p>甲府市に転入後3か月以上1年以内に申請すること</p><p>5年以上居住する意思があること</p></div><p>甲府市役所企画部地域振興課に申請書と必要書類を提出します。<strong>テレワーク移住も要件を満たせば対象</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子どもがいる場合は加算があります。</p><p><span class="marker">5年以内に甲府市から転出した場合は支援金の返還</span>が求められます。</p><div class="highlight-box">甲府市は「やまなし暮らし支援センター」（東京・有楽町）での移住相談にも対応しています。首都圏にいながら住まいや仕事の相談ができますので、移住を検討中の方はまずご利用ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-nursing-home-reform',
    title: '甲府市 高齢者住宅改造助成事業',
    organization: '甲府市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '山梨県',
    tags: ['甲府市', '高齢者住宅改造', '介護支援'],
    eligibility: '甲府市に住所を有する65歳以上の方で、住宅改造が必要な方',
    applicationPeriod: '通年',
    description: '甲府市が実施する高齢者住宅改造助成事業です。高齢者の住宅バリアフリー改造に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 高齢者住宅改造助成事業は、<span class="marker">65歳以上の高齢者が安全に暮らし続けるための住宅バリアフリー改造</span>を支援する制度です。</p><p>甲府市は高齢化が進む中、住み慣れた自宅での生活継続を支援する施策を充実させています。介護保険の住宅改修費では対応しきれない大規模な改造工事にも対応し、転倒事故の防止や介護者の負担軽減を目指しています。</p><p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。<span class="marker-green">介護保険の住宅改修費と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>浴室・トイレの改造（バリアフリー化）</p><p>手すりの設置・段差の解消</p><p>廊下の拡幅</p><p>床材の滑り止め加工</p></div><p>甲府市役所高齢者福祉課に申請書と工事見積書を提出します。ケアマネジャーの意見書が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。着工後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。所得に応じた自己負担割合が設定されています。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と合わせると、最大50万円の支援</span>を受けることが可能です。</p><div class="note-box">老朽化に伴う一般的な修繕や、新築・増築は対象外です。高齢者の身体状況に合わせた改造内容であることが求められます。地域包括支援センターに事前に相談することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-energy-support',
    title: '甲府市 低所得世帯光熱費支援金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '1世帯あたり1万円',
    maxAmountNum: 1,
    category: 'living',
    prefecture: '山梨県',
    tags: ['甲府市', '光熱費支援', '給付金'],
    eligibility: '甲府市に住所を有する住民税非課税世帯',
    applicationPeriod: '毎年7月〜12月頃',
    description: '甲府市が実施する低所得世帯光熱費支援金です。住民税非課税世帯に1世帯あたり1万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 低所得世帯光熱費支援金は、<span class="marker">電気・ガス料金の高騰により家計が圧迫されている住民税非課税世帯</span>を対象に支援金を支給する制度です。</p><p>甲府盆地は夏は猛暑日が続き、冬は冷え込みが厳しい盆地特有の気候です。冷暖房にかかる光熱費が高くなりやすく、低所得世帯への影響は特に深刻です。この支援金で家計の負担を軽減します。</p><p>支給額は<strong>1世帯あたり1万円</strong>です。<span class="marker-green">対象世帯には市から確認書が届くプッシュ型給付です</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>甲府市に住民登録がある世帯で、世帯全員が住民税非課税である世帯が対象です。</p><div class="summary-box" data-title="手続きの流れ"><p>市から対象世帯に確認書が届く</p><p>内容を確認して返送する</p><p>約1か月後に指定口座に振り込まれる</p></div><p>市が対象世帯を抽出して確認書を郵送します。<strong>届いた確認書を返送するだけで手続きは完了</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>1世帯あたり1万円</strong>です。世帯人数にかかわらず一律の支給となります。</p><p><span class="marker">課税者に扶養されている世帯は対象外</span>となる場合があります。</p><div class="note-box">本支援金は非課税所得として扱われ、税金や社会保険料に影響しません。甲府市では高齢者世帯向けのエアコン購入補助なども検討・実施する場合がありますので、市の広報やホームページをご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-bousai-equipment',
    title: '甲府市 家庭用防災資機材購入補助金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'disaster',
    prefecture: '山梨県',
    tags: ['甲府市', '防災資機材', '補助金'],
    eligibility: '甲府市に住所を有する世帯主',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '甲府市が実施する家庭用防災資機材購入補助金です。防災用品の購入費用を最大2万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 家庭用防災資機材購入補助金は、<span class="marker">家庭での防災力向上のため、防災資機材の購入費用</span>を補助する制度です。</p><p>甲府市は富士川断層帯など活断層の存在により地震リスクがあり、また台風や集中豪雨による水害のリスクもあります。「自助」の取り組みとして各家庭の防災備蓄を推進しています。</p><p>補助率は購入費の2分の1で、<strong>上限2万円</strong>です。<span class="marker-green">感震ブレーカー、家具固定器具、非常用電源などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災資機材"><p>感震ブレーカー</p><p>家具転倒防止器具・ガラス飛散防止フィルム</p><p>非常用蓄電池・ポータブル電源</p><p>防災用浄水器</p></div><p>甲府市役所防災危機管理課に申請書と購入予定品の見積書を提出します。</p><p><span class="marker">購入前に申請が必要</span>です。交付決定を受けてから購入してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費の2分の1で、<strong>上限2万円</strong>です。1世帯につき年度内1回の利用に限られます。</p><p><span class="marker">食料・飲料水・乾電池等の消耗品は対象外</span>です。</p><div class="highlight-box">甲府市では「自助・共助・公助」の考えのもと、自主防災組織への支援や防災訓練の実施も行っています。補助金を活用した家庭の備えとあわせて、地域の防災活動にもぜひご参加ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 長野市（長野県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'nagano-city-childcare-subsidy',
    title: '長野市 子育て世帯生活支援給付金',
    organization: '長野市',
    type: 'local',
    maxAmount: '児童1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '長野県',
    tags: ['長野市', '子育て支援', '給付金'],
    eligibility: '長野市に住所を有し、住民税非課税世帯等で18歳以下の子どもを養育する方',
    applicationPeriod: '毎年6月〜翌年2月頃',
    description: '長野市が実施する子育て世帯生活支援給付金です。低所得の子育て世帯に児童1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 子育て世帯生活支援給付金は、<span class="marker">住民税非課税世帯やそれに準ずる低所得の子育て世帯</span>に生活を支援する給付金を支給する制度です。</p><p>善光寺の門前町として1400年以上の歴史を持つ長野市は、1998年冬季オリンピックの開催地としても知られています。豊かな自然と都市機能が調和した長野県の県庁所在地で、子育て環境の充実にも力を入れています。</p><p>支給額は<strong>児童1人あたり5万円</strong>です。<span class="marker-green">ひとり親世帯で児童扶養手当受給者は申請不要で支給</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長野市に住民登録がある18歳以下の子どもを養育する方で、住民税非課税世帯等が対象です。</p><div class="summary-box" data-title="対象世帯"><p>児童扶養手当受給のひとり親世帯</p><p>住民税均等割が非課税の子育て世帯</p><p>家計急変により住民税非課税相当となった世帯</p></div><p>ひとり親世帯は<strong>自動で口座振込</strong>されます。それ以外の対象世帯は長野市役所こども政策課へ申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>児童1人あたり5万円</strong>です。子どもの人数分が支給されます。</p><p><span class="marker">家計急変世帯の場合は収入減少の証明書類が必要</span>です。</p><div class="note-box">給付金は非課税所得として扱われます。他自治体で同趣旨の給付金をすでに受給している場合は対象外です。長野市では子育て情報ポータルサイト「ながの子育て情報」でも各種制度を案内しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-birth-bonus',
    title: '長野市 出産祝い金制度',
    organization: '長野市',
    type: 'local',
    maxAmount: '第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '長野県',
    tags: ['長野市', '出産祝い金', '子育て支援'],
    eligibility: '長野市に住所を有し、第3子以降の子どもを出産した方',
    applicationPeriod: '出産日から6か月以内',
    description: '長野市が実施する出産祝い金制度です。第3子以降の出産に対し祝い金10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 出産祝い金制度は、<span class="marker">第3子以降の子どもを出産した保護者</span>に対し、出産祝い金を支給する制度です。</p><p>長野市は善光寺を中心とした歴史と文化の街であり、戸隠や飯綱の豊かな自然に囲まれた子育てに最適な環境です。多子世帯への経済的支援として出産祝い金を支給し、少子化対策に取り組んでいます。</p><p>支給額は<strong>第3子以降1人あたり10万円</strong>です。<span class="marker-green">所得制限はなく、すべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で長野市に住民登録があること</p><p>第3子以降の出産であること</p><p>出産した子を含め3人以上の子を養育していること</p><p>出産日から6か月以内に申請すること</p></div><p>長野市役所こども政策課に申請書を提出します。出生届の手続き時に案内されます。</p><p><span class="marker">申請期限は出産日から6か月以内</span>です。期限を過ぎると受給できませんのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第3子以降1人あたり10万円</strong>です。多胎児の場合、該当する人数分が支給されます。</p><p><span class="marker">「第3子以降」は保護者が現に養育している子どもの数でカウント</span>されます。</p><div class="highlight-box">長野市では出産・子育て応援給付金（妊娠届出時5万円・出生届出時5万円）も別途実施しています。あわせてご利用ください。長野市版ネウボラ「ながのわくわく子育て」での妊娠期からの切れ目ない支援も充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-barrier-free',
    title: '長野市 高齢者等バリアフリー改修補助金',
    organization: '長野市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '長野県',
    tags: ['長野市', 'バリアフリー', '住宅改修'],
    eligibility: '長野市内に住宅を所有する65歳以上の方または障害者手帳をお持ちの方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '長野市が実施する高齢者等バリアフリー改修補助金です。手すり設置や段差解消等のバリアフリー改修に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 高齢者等バリアフリー改修補助金は、<span class="marker">65歳以上の高齢者や障害のある方の住宅バリアフリー改修</span>に対して費用の一部を補助する制度です。</p><p>長野市は冬季の積雪や路面凍結もあり、高齢者にとって住宅内での安全確保が特に重要です。段差解消や手すり設置など、生活動線のバリアフリー化を推進することで、在宅生活の安全性向上を図っています。</p><p>補助率は対象工事費の3分の1で、<strong>上限20万円</strong>です。<span class="marker-green">介護保険の住宅改修費との併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置</p><p>段差の解消・スロープの設置</p><p>浴室・トイレのバリアフリー化</p><p>床材の滑り止め加工</p><p>引き戸への変更</p></div><p>長野市役所建築指導課に申請書、工事見積書、住宅の写真を提出します。</p><p><span class="marker">工事着手前に申請が必要</span>です。交付決定前の着工は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1で、<strong>上限20万円</strong>です。工事費が10万円以上の改修が対象となります。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）を先に活用し、不足分を本制度で補う</span>のが効果的です。</p><div class="note-box">一般的なリフォームや美装工事は対象外です。高齢者の身体状況に応じたバリアフリー改修であることが必要です。長野市では住宅のバリアフリー化に関する無料相談も受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-senior-dental',
    title: '長野市 後期高齢者歯科口腔健診',
    organization: '長野市',
    type: 'local',
    maxAmount: '健診費用の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '長野県',
    tags: ['長野市', '歯科健診', '高齢者医療'],
    eligibility: '長野市に住所を有する76歳の方（対象年度中に76歳になる方）',
    applicationPeriod: '毎年6月〜翌年1月',
    description: '長野市が実施する後期高齢者歯科口腔健診です。76歳を対象に無料で歯科健診を実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 後期高齢者歯科口腔健診は、<span class="marker">76歳の方を対象に、歯と口腔の健康状態を確認する健診</span>を無料で実施する事業です。</p><p>長野県は全国トップクラスの健康長寿県として知られています。長野市でもその伝統を受け継ぎ、口腔の健康が全身の健康に大きく影響するという考えから、高齢者の歯科健診を推進しています。</p><p><span class="marker-green">自己負担なしで、市内の指定歯科医院で歯科健診を受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>対象年度中に76歳になる長野市在住の方が対象です。</p><div class="summary-box" data-title="健診内容"><p>むし歯の有無の確認</p><p>歯周病の検査</p><p>口腔機能の確認（咀嚼力・嚥下機能等）</p><p>入れ歯の状態確認</p></div><p>対象者には市から<strong>受診券が郵送</strong>されます。届いた受診券を持参して、指定の歯科医院で受診してください。</p><p><span class="marker">受診券が届かない場合は長野市役所保険給付課へお問い合わせください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>健診費用の自己負担はありません</strong>。年度中に1回受診できます。</p><p><span class="marker">健診の結果、治療が必要と判定された場合の治療費は通常の保険診療</span>が適用され、自己負担が発生します。</p><div class="highlight-box">長野市では「8020運動」を推進しており、高齢者の歯の健康維持を重視しています。歯科健診を定期的に受けることで、誤嚥性肺炎の予防や栄養状態の改善にもつながります。かかりつけ歯科医を持ちましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-school-lunch',
    title: '長野市 学校給食費負担軽減事業',
    organization: '長野市',
    type: 'local',
    maxAmount: '給食費の一部公費負担',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '長野県',
    tags: ['長野市', '学校給食', '負担軽減'],
    eligibility: '長野市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '通年（自動適用）',
    description: '長野市が実施する学校給食費負担軽減事業です。食材価格高騰分を市が公費で負担し、保護者の負担を抑えます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 学校給食費負担軽減事業は、<span class="marker">食材価格の高騰に伴う給食費の値上げを防ぐため、上昇分を市が公費で負担</span>する事業です。</p><p>長野市は「食の教育」を重視し、地元産の食材を積極的に活用した栄養バランスの良い学校給食を提供しています。食材費が高騰する中でも給食の質を維持しつつ、保護者の負担増を防いでいます。</p><p><span class="marker-green">保護者の手続きは不要で、自動的に適用</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長野市立小学校・中学校に在籍するすべての児童生徒の保護者が対象です。</p><div class="summary-box" data-title="給食費の目安（月額）"><p>小学校：約4,300円</p><p>中学校：約5,200円</p></div><p><strong>保護者の申請手続きは不要</strong>です。食材価格の高騰分は市が直接給食費に補填するため、保護者への請求額は据え置かれます。</p><p><span class="marker">就学援助認定世帯は給食費全額が別途支給される</span>ため、本事業との重複はありません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市が負担する金額は<strong>食材価格の高騰分に相当する額</strong>で、年度ごとの状況に応じて設定されます。</p><p><span class="marker">第3子以降の給食費無償化を別途検討・実施</span>している場合がありますので、最新情報は市のホームページでご確認ください。</p><div class="note-box">長野市の学校給食では、長野県産の農産物を積極的に取り入れる「地産地消」を推進しています。りんご、ぶどう、レタスなど、地元の旬の食材を使った給食メニューが好評です。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-sme-support',
    title: '長野市 中小企業デジタル化推進補助金',
    organization: '長野市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '長野県',
    tags: ['長野市', 'デジタル化', '中小企業'],
    eligibility: '長野市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '長野市が実施する中小企業デジタル化推進補助金です。ITツール導入やDX推進に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 中小企業デジタル化推進補助金は、<span class="marker">市内の中小企業がITツールの導入やDX（デジタルトランスフォーメーション）を推進する取り組み</span>に対して費用の一部を補助する制度です。</p><p>長野市には製造業・観光業・農業など多様な中小企業が集積しています。人手不足や生産性向上の課題に対し、デジタル技術の活用を後押しすることで、地域経済の競争力強化を目指しています。</p><p>補助率は対象経費の3分の2以内で、<strong>上限50万円</strong>です。<span class="marker-green">クラウドサービス、業務管理ソフト、キャッシュレス端末なども対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる経費"><p>業務管理ソフトウェアの導入費</p><p>クラウドサービスの初期費用・利用料（1年分まで）</p><p>ECサイトの構築費用</p><p>キャッシュレス決済端末の導入費</p><p>IT専門家によるコンサルティング費用</p></div><p>長野市役所商工労働課に申請書と事業計画書を提出します。</p><p><span class="marker">導入前に申請し、交付決定を受ける必要があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限50万円</strong>です。導入費用だけでなくクラウドサービスの利用料も1年分まで対象になります。</p><p><span class="marker">パソコンやタブレット等の汎用端末は原則対象外</span>です。業務に特化した専用機器やソフトウェアが対象となります。</p><div class="highlight-box">長野市では商工会議所と連携してIT化支援セミナーやDX相談会も定期的に開催しています。補助金の活用前に、自社の課題を専門家に相談することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-nursing-equipment',
    title: '長野市 在宅介護用品支給事業',
    organization: '長野市',
    type: 'local',
    maxAmount: '月額6,250円相当',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '長野県',
    tags: ['長野市', '介護用品', '在宅介護'],
    eligibility: '長野市に住所を有し、在宅で要介護4・5の方を介護している家族',
    applicationPeriod: '通年',
    description: '長野市が実施する在宅介護用品支給事業です。在宅で重度要介護者を介護する家族に介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 在宅介護用品支給事業は、<span class="marker">在宅で要介護4または5の認定を受けた方を介護する家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>長野市は健康長寿のまちとして知られますが、在宅介護の負担は依然として大きな課題です。紙おむつ等の消耗品費用を市が負担することで、在宅介護の経済的負担を軽減しています。</p><p>支給額は<strong>月額6,250円相当</strong>の介護用品です。<span class="marker-green">住民税非課税世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>長野市に住所を有する要介護4・5の方を在宅で介護していること</p><p>介護を受ける方が住民税非課税であること</p><p>入院・施設入所をしていないこと</p></div><p>長野市役所高齢者活躍支援課に申請書を提出します。<strong>介護保険被保険者証のコピー</strong>が必要です。</p><p><span class="marker">承認後、カタログから必要な介護用品を選んで自宅に配送</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当の紙おむつ・尿取りパッド等</strong>が支給されます。</p><p><span class="marker">入院や施設入所した場合は支給停止</span>となります。状況変更時は速やかに届出てください。</p><div class="note-box">長野市では在宅介護を支援するため、介護用品の支給のほかにも介護者向けの相談窓口やリフレッシュ事業を実施しています。介護者の心身の健康も大切です。地域包括支援センターにお気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-migration-bonus',
    title: '長野市 UIJターン移住支援金',
    organization: '長野市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '長野県',
    tags: ['長野市', '移住支援金', 'UIJターン'],
    eligibility: '東京圏から長野市へ移住し、就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '長野市が実施するUIJターン移住支援金です。東京圏からの移住就業者に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 UIJターン移住支援金は、<span class="marker">東京23区に在住または東京圏から23区へ通勤していた方が長野市に移住</span>し、就業または創業した場合に支給される支援金です。</p><p>長野市は北陸新幹線で東京から約1時間20分というアクセスの良さに加え、善光寺の歴史、戸隠の自然、温泉など多彩な魅力を持つ街です。移住先としての人気が高く、充実した支援制度を整えています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども加算もあります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から23区へ通勤していたこと</p><p>長野県のマッチングサイト掲載企業への就業、または創業支援事業の利用</p><p>長野市に転入後3か月以上1年以内に申請すること</p><p>5年以上居住する意思があること</p></div><p>長野市役所移住推進課に申請書と必要書類を提出します。<strong>テレワーク移住も要件を満たせば対象</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子ども1人あたり100万円が加算されます。</p><p><span class="marker">5年以内に長野市から転出した場合は支援金の返還</span>を求められます。</p><div class="highlight-box">長野市では「おためしナガノ」として移住体験住宅を提供しています。まずは長野での暮らしを体験してから移住を決めることができます。銀座NAGANOでの移住相談も随時受け付けています。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-seismic-diagnosis',
    title: '長野市 木造住宅無料耐震診断',
    organization: '長野市',
    type: 'local',
    maxAmount: '診断費用の全額助成',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '長野県',
    tags: ['長野市', '耐震診断', '防災'],
    eligibility: '長野市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃（予算に達し次第終了）',
    description: '長野市が実施する木造住宅無料耐震診断です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 木造住宅無料耐震診断は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>を対象に、耐震診断を無料で実施する事業です。</p><p>長野市は2014年の長野県神城断層地震で住宅被害を経験しており、住宅の耐震化を重要な防災施策として推進しています。糸魚川−静岡構造線断層帯など活断層も存在し、大規模地震への備えが不可欠です。</p><p><span class="marker-green">市が耐震診断士を無料で派遣し、住宅の耐震性を評価します</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>長野市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>地上2階建て以下であること</p><p>在来軸組工法で建築されていること</p></div><p>長野市役所建築指導課に申請書を提出します。申請後、市が耐震診断士を派遣して現地調査を行います。</p><p><span class="marker">例年申込が多いため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>耐震診断の費用は全額市が負担</strong>するため、自己負担はありません。</p><p><span class="marker">診断結果で改修が必要と判定された場合は、耐震改修補助金（上限100万円程度）</span>を利用できます。</p><div class="note-box">2014年の長野県神城断層地震では、旧耐震基準の住宅に大きな被害が出ました。長野市は地震だけでなく豪雪による荷重も建物に影響するため、積雪荷重を考慮した耐震診断が重要です。まずは診断を受けて自宅の安全性を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 富山市（富山県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'toyama-city-daycare-support',
    title: '富山市 保育料第2子以降無償化事業',
    organization: '富山市',
    type: 'local',
    maxAmount: '第2子以降の保育料無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '富山県',
    tags: ['富山市', '保育料無償化', '子育て支援'],
    eligibility: '富山市内の保育施設に通う第2子以降の子どもの保護者',
    applicationPeriod: '通年（入所手続き時に適用）',
    description: '富山市が実施する保育料第2子以降無償化事業です。第2子以降の保育料を無料とし、多子世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 保育料第2子以降無償化事業は、<span class="marker">認可保育所・認定こども園等に通う第2子以降の子どもの保育料を無料</span>にする制度です。</p><p>富山市は立山連峰と富山湾に挟まれた自然豊かな県庁所在地で、コンパクトシティの先進地として全国的に知られています。LRT「セントラム」の運行など公共交通の充実と合わせ、子育てしやすい街づくりを進めています。</p><p><span class="marker-green">所得制限・年齢制限なしで、第2子以降の保育料が無料</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象施設"><p>認可保育所</p><p>認定こども園</p><p>地域型保育事業所（小規模保育等）</p><p>新制度移行幼稚園</p></div><p>保育施設の入所申請時にきょうだいの状況を確認のうえ、<strong>自動的に適用されます</strong>。別途の申請は原則不要です。</p><p><span class="marker">第2子のカウントは、保護者が養育するすべての子どもで判定</span>されます。上の子の年齢制限はありません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の保育料は0円</strong>です。3歳以上児は国の幼児教育・保育の無償化により全員無料です。</p><p><span class="marker">0〜2歳児の住民税課税世帯の第1子のみが保育料の負担対象</span>となります。</p><div class="highlight-box">富山市は待機児童ゼロを継続しており、希望する保育施設を利用しやすい環境が整っています。認可外保育施設を利用する場合は別途支援制度がありますので、富山市役所こども保育課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-parenting-allowance',
    title: '富山市 多子世帯子育て応援給付金',
    organization: '富山市',
    type: 'local',
    maxAmount: '第3子以降月額1万円',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '富山県',
    tags: ['富山市', '多子世帯', '子育て給付金'],
    eligibility: '富山市に住所を有し、第3子以降の3歳未満の子どもを養育する方',
    applicationPeriod: '通年（出生届等の手続き時）',
    description: '富山市が実施する多子世帯子育て応援給付金です。第3子以降の3歳未満児を養育する世帯に月額1万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 多子世帯子育て応援給付金は、<span class="marker">第3子以降の3歳未満の子どもを養育する世帯</span>に対し、毎月手当を支給する市独自の制度です。</p><p>富山市は「子育て支援日本一」を目指し、切れ目のない子育て支援に取り組んでいます。国の児童手当に上乗せする形で、特に経済的負担の大きい多子世帯を重点的にサポートしています。</p><p>支給額は<strong>第3子以降の3歳未満児1人あたり月額1万円</strong>です。<span class="marker-green">所得制限なしで、すべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>富山市に住民登録があること</p><p>第3子以降の子どもが3歳未満であること</p><p>対象の子を含め3人以上の子を養育していること</p></div><p>富山市役所こども支援課に申請書を提出します。出生届の手続き時にご案内します。</p><p><span class="marker">申請月の翌月分から支給開始</span>となります。出生後は早めに手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>対象児童1人あたり月額1万円</strong>です。年3回（4月・8月・12月）にまとめて振り込まれます。</p><p><span class="marker">子どもが3歳に到達した月分まで支給</span>されます。</p><div class="highlight-box">国の児童手当（第3子以降月額3万円）と合わせると、月額4万円の手当が支給されることになります。富山市は三世代同居・近居支援補助金なども実施しており、家族ぐるみの子育てを応援しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-housing-purchase',
    title: '富山市 まちなか住宅取得支援事業',
    organization: '富山市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '富山県',
    tags: ['富山市', 'まちなか住宅', '補助金'],
    eligibility: '富山市の都心地区・公共交通沿線に住宅を取得して居住する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '富山市が実施するまちなか住宅取得支援事業です。まちなかエリアでの住宅取得に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 まちなか住宅取得支援事業は、<span class="marker">都心地区や公共交通沿線の居住推進地区で住宅を取得する方</span>を対象に、費用の一部を補助する制度です。</p><p>富山市は全国に先駆けてコンパクトシティ政策を推進しており、公共交通沿線への居住誘導を図っています。LRT（ライトレール）やセントラムの沿線、中心市街地での住宅取得を補助することで、歩いて暮らせるまちづくりを実現しています。</p><p>補助額は<strong>最大50万円</strong>です。<span class="marker-green">子育て世帯や市外からの転入者にはさらに加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象エリア"><p>都心地区（富山駅周辺・総曲輪等）</p><p>公共交通沿線居住推進地区</p><p>まちなか居住推進地区</p></div><p>富山市役所都市政策課に申請書と必要書類（売買契約書、住民票等）を提出します。</p><p><span class="marker">住宅の引渡し後、住民登録を完了してから6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>30万円</strong>で、以下の加算があります。市外からの転入：10万円加算、中学生以下の子どもがいる世帯：10万円加算。<strong>最大50万円</strong>です。</p><p><span class="marker">5年以上継続して居住することが条件</span>です。5年以内に転出した場合は返還を求められる場合があります。</p><div class="note-box">富山市のコンパクトシティ政策は全国のモデルケースとして注目されています。まちなかエリアでは商業施設、医療機関、公共施設が徒歩圏に集約されており、特に高齢者や子育て世帯にとって暮らしやすい環境です。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-infertility',
    title: '富山市 不妊治療費助成事業',
    organization: '富山市',
    type: 'local',
    maxAmount: '1回あたり最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '富山県',
    tags: ['富山市', '不妊治療', '助成金'],
    eligibility: '富山市に住所を有し、先進医療として実施される不妊治療を受けた夫婦',
    applicationPeriod: '治療終了日から60日以内',
    description: '富山市が実施する不妊治療費助成事業です。先進医療に係る不妊治療費を1回あたり最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 不妊治療費助成事業は、<span class="marker">保険適用の生殖補助医療と併用して実施される先進医療の自己負担分</span>を助成する制度です。</p><p>2022年4月の不妊治療の保険適用拡大後も、先進医療は全額自己負担のままです。富山市ではこの自己負担分を助成することで、不妊に悩む夫婦の経済的負担を軽減し、安心して治療に臨める環境を整えています。</p><p>助成額は<strong>1回の治療あたり最大10万円</strong>です。<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>法律上の婚姻関係にある夫婦（事実婚を含む）で、いずれかが富山市に住民登録がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金交付申請書</p><p>医療機関発行の治療証明書</p><p>領収書の写し</p><p>夫婦の住民票</p></div><p>富山市保健所に申請します。<span class="marker">治療終了日から60日以内に申請してください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>先進医療の自己負担額の実費で、上限は1回あたり10万円</strong>です。</p><p><span class="marker">保険適用の治療費は対象外です。厚生労働省が認めた先進医療のみが対象</span>となります。</p><div class="highlight-box">富山市では不妊・不育症に関する専門相談窓口を設けています。治療に関する悩みだけでなく、仕事との両立や心理的なサポートも含めた包括的な支援を行っています。お気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-afterschool',
    title: '富山市 放課後子ども教室推進事業',
    organization: '富山市',
    type: 'local',
    maxAmount: '参加費無料',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '富山県',
    tags: ['富山市', '放課後子ども教室', '教育支援'],
    eligibility: '富山市立小学校に在籍する児童',
    applicationPeriod: '毎年4月（年度途中の参加も可）',
    description: '富山市が実施する放課後子ども教室推進事業です。放課後に地域の方々の協力で学習・体験活動を無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 放課後子ども教室推進事業は、<span class="marker">放課後や週末に小学校の施設等を活用し、地域の方々の協力で学習や体験活動を提供</span>する事業です。</p><p>富山市は「教育立市」を掲げ、学校教育だけでなく地域全体で子どもの成長を支える環境づくりに取り組んでいます。立山連峰の自然や富山湾の海の幸など、地域の特色を活かした体験プログラムも実施されています。</p><p><span class="marker-green">参加費は無料で、全児童が参加できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>富山市立小学校に在籍する1年生から6年生までの児童が対象です。</p><div class="summary-box" data-title="主な活動内容"><p>宿題や自主学習のサポート</p><p>工作・手芸などのものづくり体験</p><p>スポーツ・レクリエーション活動</p><p>地域の伝統文化体験</p><p>読み聞かせ・科学実験教室</p></div><p>各小学校を通じて参加申込書を提出します。<strong>年度途中からの参加も可能</strong>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>参加費は無料</strong>です。材料費等の実費が必要な場合は、その都度案内されます。</p><p><span class="marker">放課後児童クラブ（学童保育）とは別の事業</span>です。共働き世帯向けの預かり機能を主とする児童クラブとは異なり、すべての児童を対象とした学習・体験活動の場です。</p><div class="note-box">活動内容や開催日時は学校ごとに異なります。地域ボランティアの方々が指導員として活動を支えています。保護者の方も見学やボランティアとして参加いただけます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-telework-bonus',
    title: '富山市 テレワーク移住促進補助金',
    organization: '富山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '富山県',
    tags: ['富山市', 'テレワーク移住', '補助金'],
    eligibility: '首都圏から富山市に移住し、テレワークで勤務を継続する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '富山市が実施するテレワーク移住促進補助金です。首都圏からのテレワーク移住者に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 テレワーク移住促進補助金は、<span class="marker">首都圏の企業に勤務しながらテレワークで富山市に移住する方</span>を対象に、移住にかかる費用を補助する制度です。</p><p>富山市は北陸新幹線で東京から約2時間10分。立山連峰の絶景、新鮮な海の幸、充実した公共交通網（LRT・路面電車）を備え、QOLの高い暮らしが実現できる街として移住先人気が上昇しています。</p><p>補助額は<strong>最大30万円</strong>です。<span class="marker-green">引越し費用とコワーキングスペース利用料が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>首都圏（1都3県）から富山市に転入すること</p><p>テレワーク勤務が認められた企業に在籍していること</p><p>富山市に3年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>富山市役所企画調整課に申請書とテレワーク勤務証明書等を提出します。</p><p><span class="marker">転入日から1年以内に申請する必要があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>引越し費用として<strong>最大20万円</strong>、市内コワーキングスペース利用料として<strong>最大10万円</strong>が補助されます。</p><p><span class="marker">3年以内に転出した場合は補助金の返還</span>を求められます。</p><div class="highlight-box">富山市には駅前を中心にコワーキングスペースやシェアオフィスが増えています。LRTで市内を移動でき、通勤ストレスのないテレワークライフが実現できます。移住体験ツアーも定期的に開催しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-nursing-home-reform',
    title: '富山市 高齢者向け住宅改修支援事業',
    organization: '富山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '富山県',
    tags: ['富山市', '高齢者住宅改修', '介護支援'],
    eligibility: '富山市に住所を有する65歳以上の方で、住宅のバリアフリー改修が必要な方',
    applicationPeriod: '通年',
    description: '富山市が実施する高齢者向け住宅改修支援事業です。高齢者の住宅バリアフリー改修に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 高齢者向け住宅改修支援事業は、<span class="marker">65歳以上の高齢者が安全に在宅生活を続けるための住宅バリアフリー改修</span>を支援する制度です。</p><p>富山市は積雪地域であり、冬場の住宅内での転倒リスクが高くなります。介護保険の住宅改修費では対応しきれない規模の改修を市が独自に支援することで、高齢者の安全な在宅生活を実現しています。</p><p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。<span class="marker-green">介護保険の住宅改修費との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修工事"><p>手すりの設置・段差の解消</p><p>浴室・トイレのバリアフリー化</p><p>床材の滑り止め加工</p><p>廊下の拡幅・引き戸への変更</p><p>玄関スロープの設置</p></div><p>富山市役所長寿福祉課に申請書、工事見積書、施工箇所の写真を提出します。ケアマネジャーの意見書が必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の一部で、<strong>上限30万円</strong>です。所得に応じた自己負担割合が設定されています。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と合わせて最大50万円の支援</span>を受けることが可能です。</p><div class="note-box">富山市は積雪地域のため、玄関周りや屋内の段差解消は特に重要なバリアフリー改修です。一般的な老朽化修繕や美装工事は対象外です。まずは地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-elderly-support',
    title: '富山市 高齢者安心見守り事業',
    organization: '富山市',
    type: 'local',
    maxAmount: '緊急通報装置の無料貸与',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '富山県',
    tags: ['富山市', '高齢者見守り', '生活支援'],
    eligibility: '富山市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '富山市が実施する高齢者安心見守り事業です。緊急通報装置の貸与や配食サービスを通じて高齢者の安全を守ります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 高齢者安心見守り事業は、<span class="marker">ひとり暮らしや高齢者のみの世帯の安全を見守る</span>ため、緊急通報装置の貸与や安否確認サービスを提供する事業です。</p><p>富山市ではコンパクトシティ政策と合わせて、高齢者が安心して暮らせるセーフティネットの構築に力を入れています。特に冬季の積雪時は外出が困難になるため、見守り体制の充実が重要です。</p><p><span class="marker-green">住民税非課税世帯は利用料無料で緊急通報装置が貸与されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用できるサービス"><p>緊急通報装置の貸与（ペンダント型・据置型）</p><p>安否確認電話サービス</p><p>配食による安否確認サービス</p><p>人感センサーによる見守り</p></div><p>富山市役所長寿福祉課または地域包括支援センターに申請します。<strong>民生委員の意見書</strong>が必要な場合があります。</p><p><span class="marker">ひとり暮らしの高齢者や日中独居の方が優先</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>住民税非課税世帯は利用料無料</strong>です。課税世帯は月額数百円程度の自己負担があります。</p><p><span class="marker">緊急通報装置は24時間対応のコールセンターに接続</span>され、ボタン一つで通報できます。</p><div class="highlight-box">富山市では「富山型デイサービス」と呼ばれる高齢者・障害者・子どもが一緒に過ごす共生型福祉の取り組みが全国的に有名です。見守りサービスと合わせて、地域とのつながりを保つことも大切にしています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-bousai-equipment',
    title: '富山市 家庭防災対策設備補助金',
    organization: '富山市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'disaster',
    prefecture: '富山県',
    tags: ['富山市', '防災設備', '補助金'],
    eligibility: '富山市に住所を有する世帯主',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '富山市が実施する家庭防災対策設備補助金です。防災設備の購入費用を最大3万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 家庭防災対策設備補助金は、<span class="marker">家庭での防災対策を推進するため、防災設備の購入費用</span>を補助する制度です。</p><p>富山市は2024年の能登半島地震で液状化被害を受けた地域もあり、防災意識が高まっています。また冬季の大雪による停電リスクもあることから、各家庭での防災対策の充実を支援しています。</p><p>補助率は購入費用の2分の1で、<strong>上限3万円</strong>です。<span class="marker-green">感震ブレーカー、転倒防止器具、非常用電源などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる防災設備"><p>感震ブレーカー（地震時通電火災防止）</p><p>家具転倒防止器具</p><p>非常用蓄電池・ポータブル電源</p><p>ガラス飛散防止フィルム</p><p>耐震シェルター</p></div><p>富山市役所防災危機管理課に申請書と見積書を提出します。</p><p><span class="marker">購入前に申請し、交付決定を受けてから購入</span>してください。すでに購入済みのものは対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入費用の2分の1で、<strong>上限3万円</strong>です。1世帯1回限りの利用です。</p><p><span class="marker">食料・飲料水等の消耗品は対象外</span>です。繰り返し使用できる設備・器具が対象となります。</p><div class="note-box">能登半島地震の教訓を踏まえ、富山市では耐震診断・改修の補助も強化しています。家庭の防災設備の充実とあわせて、住宅の耐震化やハザードマップの確認も行いましょう。富山市防災アプリでは最新の防災情報を配信しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
