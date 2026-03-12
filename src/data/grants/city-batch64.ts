import { Grant } from '@/lib/types';

export const cityGrantsBatch64: Grant[] = [
  // ────────────────────────────────────────────────
  // 須賀川市（福島県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'sukagawa-childcare-subsidy',
    title: '須賀川市 子育て世帯応援助成金',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '子ども1人あたり年間最大6万円',
    maxAmountNum: 6,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['須賀川市', '子育て支援', '助成金'],
    eligibility: '須賀川市に住所を有し、18歳未満の子どもを養育している保護者',
    applicationPeriod: '毎年4月〜翌年3月（通年受付）',
    description: '須賀川市が実施する子育て世帯応援助成金です。18歳未満の子どもを養育する世帯に対し、子育てにかかる費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 子育て世帯応援助成金は、<span class="marker">18歳未満の子どもを養育する世帯</span>を対象に、子育てにかかる費用を助成する制度です。</p><p>ウルトラマンの生みの親・円谷英二監督の故郷として知られる須賀川市は、「M78光の街すかがわ」をテーマに街づくりを推進しています。子育て世帯の定住促進にも力を入れており、経済的な負担軽減を通じて安心して子育てできる環境を整えています。</p><p><span class="marker-green">第2子以降は助成額が加算される仕組みで、多子世帯ほど手厚い支援を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>須賀川市に住民登録があり、18歳未満の子どもと同居して養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市役所窓口またはホームページからダウンロード）</p><p>世帯全員の住民票</p><p>保護者の本人確認書類</p><p>振込先口座の通帳コピー</p></div><p>須賀川市役所こども課の窓口で申請を受け付けています。<span class="marker">出生届・転入届と同時に手続きすることも可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は子ども1人あたり<strong>年間最大6万円</strong>で、年度ごとに申請が必要です。第2子以降は加算があります。</p><p><span class="marker">所得制限が設けられている場合がありますので、詳しくは市の窓口でご確認ください</span>。</p><div class="note-box">助成金の支給は年2回（上半期分・下半期分）に分けて行われます。転出した場合は転出日の属する月までが助成対象となります。他の子育て関連給付金との併給が可能な場合もありますので、窓口でご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-birth-bonus',
    title: '須賀川市 出産祝い金支給事業',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '第1子5万円・第2子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['須賀川市', '出産祝い金', '給付金'],
    eligibility: '須賀川市に住所を有し、子どもが生まれた世帯の保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '須賀川市が実施する出産祝い金支給事業です。出生児1人につき第1子5万円、第2子以降10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 出産祝い金支給事業は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に祝い金を支給する制度です。</p><p>須賀川市は福島県中通りの中南部に位置し、東北自動車道や東北新幹線の新白河駅へのアクセスも良好な街です。少子化対策と子育て世帯への経済的支援の一環として、出産にかかる負担を軽減しています。</p><p>支給額は<strong>第1子が5万円、第2子以降は10万円</strong>です。<span class="marker-green">多胎児（双子・三つ子等）の場合は、それぞれの子について支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>出生日に須賀川市に住所を有すること</p><p>出生届が受理されていること</p><p>生後6か月以内に申請すること</p><p>市税の滞納がないこと</p></div><p>須賀川市役所こども課の窓口で申請書を提出します。出生届の提出時にあわせて手続きするのが便利です。</p><p><span class="marker">申請期限は生後6か月以内</span>です。期限を過ぎると受給できなくなりますのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子以降10万円</strong>です。第何子かの判定は、保護者が養育している18歳未満の子どもの人数で行います。</p><p><span class="marker">申請から約1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">須賀川市では出産祝い金のほか、妊婦健診費用の助成や産後ケア事業なども実施しています。出産前から産後まで切れ目のない支援を受けることができますので、母子健康手帳交付時に各種制度を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-housing-purchase',
    title: '須賀川市 住宅取得支援補助金',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '福島県',
    tags: ['須賀川市', '住宅取得', '補助金'],
    eligibility: '須賀川市内に新たに住宅を取得する方（新築・中古を含む）',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '須賀川市が実施する住宅取得支援補助金です。市内に住宅を新築または購入する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 住宅取得支援補助金は、<span class="marker">市内に新たに住宅を取得（新築・購入）する方</span>を対象に、取得費用の一部を補助する制度です。</p><p>須賀川市は福島県の中通り地域に位置し、郡山市に隣接する交通利便性の高い街です。牡丹園や松明あかしで知られる歴史ある街並みを持ちながら、新興住宅地の開発も進んでいます。定住人口の確保を目指し、住宅取得にかかる経済的負担の軽減を図っています。</p><p>補助額は基本額に加算要件を加えて<strong>最大50万円</strong>です。<span class="marker-green">子育て世帯や市外からの転入者には加算措置があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>須賀川市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>申請者および同居家族に市税の滞納がないこと</p><p>住宅の引渡し後6か月以内に申請すること</p></div><p>須賀川市役所建設部都市計画課に申請書類を提出します。売買契約書・建築請負契約書、住民票、登記事項証明書などが必要です。</p><p><span class="marker">住宅の引渡し後6か月以内の申請が必要</span>です。事前に窓口で要件を確認しておきましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>新築30万円、中古住宅20万円</strong>です。子育て世帯加算（10万円）、市外転入加算（10万円）などを合わせて最大50万円となります。</p><p><span class="marker">5年以内に市外へ転出した場合は補助金の返還を求められる場合があります</span>。</p><div class="note-box">対象となる住宅は自己居住用に限ります。投資目的や賃貸用の住宅は対象外です。住宅ローン減税（国の制度）との併用は可能ですので、税制面の優遇措置もあわせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-infertility',
    title: '須賀川市 不妊治療費助成事業',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '福島県',
    tags: ['須賀川市', '不妊治療', '助成金'],
    eligibility: '須賀川市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '治療終了後〜年度末まで',
    description: '須賀川市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対し、1回あたり最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 不妊治療費助成事業は、<span class="marker">不妊治療を受けている夫婦の経済的負担を軽減する</span>ための助成制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、治療内容や回数によっては高額な自己負担が生じることがあります。須賀川市では、保険適用後の自己負担分についてさらに市独自の助成を行い、治療を諦めずに続けられるよう支援しています。</p><p><span class="marker-green">体外受精・顕微授精などの高度な不妊治療も助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成要件"><p>夫婦の一方または双方が須賀川市に住所を有すること</p><p>法律上の婚姻関係にある夫婦であること（事実婚を含む場合あり）</p><p>医療保険に加入していること</p><p>市税を滞納していないこと</p></div><p>須賀川市役所健康づくり課の窓口に、申請書・医療機関発行の証明書・領収書を提出します。</p><p><span class="marker">治療が終了した日の属する年度内に申請が必要</span>です。年度をまたぐ場合は年度ごとに申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対し、<strong>1回の治療あたり最大30万円</strong>を助成します。年間の回数制限が設けられる場合があります。</p><p><span class="marker">福島県の不妊治療費助成制度と併用可能</span>です。県の助成を受けた後の残りの自己負担分が市の助成対象となります。</p><div class="highlight-box">須賀川市では不妊治療の相談窓口も設置しています。治療に関する不安や疑問について、保健師が個別に対応しますので、まずは気軽に相談してみてください。男性不妊治療も助成対象に含まれます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-scholarship',
    title: '須賀川市 奨学資金貸付制度',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '月額最大4万円（大学）',
    maxAmountNum: 4,
    category: 'education',
    prefecture: '福島県',
    tags: ['須賀川市', '奨学金', '教育支援'],
    eligibility: '須賀川市に住所を有する方の子で、高校・大学等に進学する学生',
    applicationPeriod: '毎年2月〜4月頃',
    description: '須賀川市が実施する奨学資金貸付制度です。経済的理由により就学が困難な学生に対し、奨学金を無利子で貸し付けます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 奨学資金貸付制度は、<span class="marker">経済的な理由により進学が困難な学生</span>に対し、奨学資金を無利子で貸し付ける制度です。</p><p>須賀川市は円谷英二監督を輩出した街として教育・文化を大切にしており、次世代を担う人材の育成に力を注いでいます。高校・専門学校・短大・大学への進学者を対象に、学業に専念できる環境づくりを支援しています。</p><p><span class="marker-green">無利子での貸付で、卒業後の返還負担を軽減しています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が須賀川市に住所を有すること</p><p>高等学校、専修学校、短期大学、大学に在学または進学予定であること</p><p>学業成績が優秀で、経済的に就学が困難であること</p><p>他の奨学金との重複貸付に制限がある場合あり</p></div><p>須賀川市教育委員会学校教育課に申請書・在学証明書（合格通知書）・世帯の所得証明書等を提出します。</p><p><span class="marker">毎年2月〜4月頃に募集が行われます</span>。募集期間は年度によって異なりますので、早めに確認しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸付月額は<strong>高校2万円程度、大学・短大等は最大4万円程度</strong>です。貸付期間は在学する正規の修業期間です。</p><p><span class="marker">卒業後6か月経過後から返還が始まり、貸付期間の2倍以内の期間で分割返還</span>します。</p><div class="note-box">無利子の貸付ですので、利息の負担はありません。ただし、正当な理由なく返還を怠った場合は延滞金が発生する場合があります。日本学生支援機構の奨学金との併用については、事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-sme-support',
    title: '須賀川市 中小企業振興補助金',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '福島県',
    tags: ['須賀川市', '中小企業支援', '補助金'],
    eligibility: '須賀川市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '須賀川市が実施する中小企業振興補助金です。市内中小企業の設備投資や販路開拓にかかる経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 中小企業振興補助金は、<span class="marker">市内に事業所を有する中小企業者の設備投資や販路開拓</span>を支援する補助金です。</p><p>須賀川市は東北自動車道須賀川ICに近接し、物流面で恵まれた立地にあります。製造業を中心に多くの中小企業が集積しており、地域経済の活性化に向けて事業者への支援を充実させています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">新たな設備導入や展示会出展費用などが対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>須賀川市内に本社または事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>補助対象事業に新規性・発展性があること</p><p>同一の経費で他の補助金を受けていないこと</p></div><p>須賀川市役所商工課の窓口に申請書と事業計画書を提出します。設備の見積書や販路開拓の計画資料も必要です。</p><p><span class="marker">事業着手前の申請が必須</span>です。交付決定前に支出した経費は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。対象経費には設備購入費、展示会出展費、広告宣伝費などが含まれます。</p><p><span class="marker">補助金は原則として事業完了後の精算払い</span>です。事業実施報告書と領収書等の証拠書類の提出が必要です。</p><div class="highlight-box">須賀川市商工会議所では、補助金申請のサポートや経営相談を無料で行っています。事業計画の策定段階から相談すると、採択の可能性を高められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-nursing-equipment',
    title: '須賀川市 介護用品支給事業',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '年間最大10万円相当',
    maxAmountNum: 10,
    category: 'nursing',
    prefecture: '福島県',
    tags: ['須賀川市', '介護用品', '支給事業'],
    eligibility: '須賀川市に住所を有する要介護認定者を在宅で介護している家族',
    applicationPeriod: '通年',
    description: '須賀川市が実施する介護用品支給事業です。在宅で介護を行う家族に対し、紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 介護用品支給事業は、<span class="marker">在宅で要介護者を介護している家族の経済的負担を軽減する</span>ため、介護用品を支給する制度です。</p><p>須賀川市では高齢化が進む中、住み慣れた地域で安心して介護を受け続けられる環境づくりに取り組んでいます。紙おむつ、尿取りパッド、使い捨て手袋、清拭剤などの消耗品が支給対象です。</p><p><span class="marker-green">市民税非課税世帯は支給額が増額される場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>須賀川市に住所を有する要介護4・5の認定を受けた方を在宅で介護していること</p><p>介護を受ける方が施設に入所していないこと</p><p>介護を受ける方の属する世帯が市民税非課税世帯であること（一部例外あり）</p></div><p>須賀川市役所長寿福祉課の窓口で申請します。要介護認定の結果通知書と介護保険被保険者証が必要です。</p><p><span class="marker">認定を受けた月から支給が開始</span>されます。毎月の配達または指定販売店での引き換えとなります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>月額数千円〜約1万円相当の介護用品</strong>が現物支給されます。年間で最大10万円相当となります。</p><p><span class="marker">入院中や施設入所中は支給が一時停止</span>されます。退院・退所後は届け出により支給が再開されます。</p><div class="note-box">介護保険制度による福祉用具貸与（車いす・介護ベッド等）とは別の事業です。消耗品の支給に特化した制度ですので、大型の福祉用具については介護保険のケアマネジャーにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-elderly-support',
    title: '須賀川市 高齢者見守り・生活支援事業',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '配食サービス1食400円等',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '福島県',
    tags: ['須賀川市', '高齢者見守り', '生活支援'],
    eligibility: '須賀川市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '須賀川市が実施する高齢者見守り・生活支援事業です。ひとり暮らし高齢者等に配食サービスや緊急通報装置の貸与を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 高齢者見守り・生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、日常生活の見守りと支援を行う事業です。</p><p>須賀川市は福島県中通りの地方都市として、高齢化率の上昇に伴い高齢者が安心して暮らせる地域づくりを推進しています。配食サービスによる栄養管理と安否確認、緊急通報装置の貸与による安全確保など、複数の支援メニューが用意されています。</p><p><span class="marker-green">配食サービスは安否確認を兼ねており、健康状態の見守り機能も果たしています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援メニュー"><p>配食サービス（昼食・夕食の宅配と安否確認）</p><p>緊急通報装置の貸与（ペンダント型の緊急ボタン）</p><p>除雪支援（冬期の除雪作業のサポート）</p></div><p>須賀川市役所長寿福祉課または地域包括支援センターで申請を受け付けています。</p><p><span class="marker">介護保険の要介護認定を受けていない方も利用できるサービスがあります</span>。まずは窓口にご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり400円程度の自己負担</strong>で利用できます（残りは市が助成）。緊急通報装置の貸与は無料です。</p><p><span class="marker">利用にあたっては、原則として市内在住の65歳以上で、日常生活に見守りが必要と判断される方</span>が対象となります。</p><div class="highlight-box">須賀川市では民生委員による定期訪問や、地域のボランティアによる見守り活動も行われています。「ひとりで不安」と感じたら、遠慮なく地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sukagawa-seismic-diagnosis',
    title: '須賀川市 木造住宅耐震診断助成事業',
    organization: '須賀川市',
    type: 'local',
    maxAmount: '自己負担なし（市が全額負担）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '福島県',
    tags: ['須賀川市', '耐震診断', '防災'],
    eligibility: '須賀川市内に旧耐震基準（1981年5月以前）で建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜12月頃（予算に達し次第終了）',
    description: '須賀川市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断を無料で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>須賀川市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断費用を市が全額負担する制度です。</p><p>須賀川市は2011年の東日本大震災で大きな被害を受けた経験があり、住宅の耐震化推進に積極的に取り組んでいます。専門の耐震診断士が住宅を訪問し、建物の安全性を評価します。</p><p><span class="marker-green">診断費用は市が全額負担するため、自己負担なしで受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の要件"><p>須賀川市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工された住宅であること</p><p>2階建て以下の在来軸組工法であること</p><p>所有者が居住していること</p></div><p>須賀川市役所建設部建築住宅課に申請書を提出します。住宅の建築時期がわかる書類（固定資産税納税通知書等）が必要です。</p><p><span class="marker">年間の実施戸数に限りがあるため、早めの申請をおすすめします</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>診断費用は市が全額負担</strong>するため、所有者の自己負担はありません。耐震診断士が現地調査を行い、報告書が作成されます。</p><p><span class="marker">診断結果で倒壊の危険性が指摘された場合は、耐震改修補助金の利用を検討してください</span>。</p><div class="note-box">耐震診断はあくまで建物の安全性を評価するもので、改修工事そのものは含まれません。診断の結果、改修が必要と判断された場合は、別途耐震改修工事の補助制度を利用できます。東日本大震災の教訓を踏まえ、まずは我が家の安全性を確認することが大切です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sukagawa.fukushima.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 土浦市（茨城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tsuchiura-childcare-subsidy',
    title: '土浦市 子育て世帯生活応援給付金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['土浦市', '子育て支援', '給付金'],
    eligibility: '土浦市に住所を有し、18歳未満の子どもを養育している保護者',
    applicationPeriod: '毎年4月〜翌年3月（通年受付）',
    description: '土浦市が実施する子育て世帯生活応援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 子育て世帯生活応援給付金は、<span class="marker">18歳未満の子どもを養育する世帯</span>に対し、生活費の一部を支援する給付金です。</p><p>霞ヶ浦の西岸に位置する土浦市は、全国花火競技大会の開催地として全国に知られる街です。近年は「サイクリングのまち」としてつくば霞ヶ浦りんりんロードを中心とした街づくりも推進しており、若い世代の定住促進に向けて子育て支援を強化しています。</p><p><span class="marker-green">所得制限なしで、対象世帯全世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>土浦市に住民登録があり、18歳未満の子どもを養育する保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市役所窓口またはホームページからダウンロード）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>土浦市役所こども政策課の窓口で申請を受け付けています。<span class="marker">児童手当の受給者には案内が郵送される場合があります</span>ので、届いた書類を確認してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は子ども1人あたり<strong>最大5万円</strong>です。多子世帯への加算措置が設けられる場合があります。</p><p><span class="marker">申請期限内に手続きを完了する必要があります</span>。期限を過ぎた場合は受給できませんのでご注意ください。</p><div class="note-box">給付金は非課税扱いです。申請から支給まで1〜2か月程度かかります。土浦市ではこのほかにも、保育料の軽減や放課後子ども教室の充実など、子育て環境の整備に取り組んでいます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-birth-bonus',
    title: '土浦市 出産祝い金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '第1子5万円・第3子以降10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['土浦市', '出産祝い金', '給付金'],
    eligibility: '土浦市に住所を有し、子どもが生まれた保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '土浦市が実施する出産祝い金です。子どもの出生に際し、第1子5万円、第3子以降10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 出産祝い金は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に祝い金を支給する制度です。</p><p>土浦市は茨城県南部の中核的な都市で、つくばエクスプレスの延伸構想やJR常磐線によるアクセスの良さから、東京圏のベッドタウンとしても注目されています。レンコン生産量日本一を誇る農業の街でもあり、自然環境と都市機能のバランスが取れた子育て環境が魅力です。</p><p>支給額は<strong>第1子5万円、第3子以降10万円</strong>です。<span class="marker-green">多胎児の場合は、1人ごとに支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>出生日時点で土浦市に住所を有すること</p><p>出生届が受理されていること</p><p>生後6か月以内に申請すること</p><p>市税の滞納がないこと</p></div><p>土浦市役所こども政策課で申請書を提出します。出生届の手続きと同時に行うのが便利です。</p><p><span class="marker">生後6か月を過ぎると申請できなくなります</span>ので、早めの手続きをお願いします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子5万円、第3子以降10万円</strong>です。子の順位は保護者が養育する18歳未満の子で判定します。</p><p><span class="marker">申請から約1か月程度で指定口座に振り込まれます</span>。</p><div class="highlight-box">土浦市では出産祝い金のほか、産前産後サポート事業（家事・育児の支援ヘルパー派遣）や産後ケア事業（宿泊型・日帰り型）も利用できます。妊娠届出時に各種制度の案内を受け取りましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-newlywed-rent',
    title: '土浦市 新婚世帯家賃補助事業',
    organization: '土浦市',
    type: 'local',
    maxAmount: '月額最大2万円（最長24か月）',
    maxAmountNum: 48,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['土浦市', '新婚世帯', '家賃補助'],
    eligibility: '土浦市内の賃貸住宅に居住する婚姻届出後3年以内の新婚世帯',
    applicationPeriod: '通年（婚姻届出後1年以内に申請）',
    description: '土浦市が実施する新婚世帯家賃補助事業です。市内の賃貸住宅に住む新婚世帯に月額最大2万円の家賃補助を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 新婚世帯家賃補助事業は、<span class="marker">婚姻届出後3年以内の新婚世帯</span>が市内の賃貸住宅に居住する場合に、家賃の一部を補助する制度です。</p><p>土浦市は霞ヶ浦の水辺の風景と花火大会で有名な街で、都心へのアクセスも良好な住環境を提供しています。若い世帯の定住を促進するため、新婚期の住居費負担を軽減する支援を行っています。</p><p>補助額は<strong>月額最大2万円で、最長24か月間</strong>受けられます。<span class="marker-green">夫婦の合計所得が一定基準以下であることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>婚姻届出後3年以内であること</p><p>夫婦ともに土浦市に住民登録があること</p><p>市内の民間賃貸住宅に居住していること</p><p>夫婦の合計所得が400万円未満であること</p><p>市税の滞納がないこと</p></div><p>土浦市役所都市計画課に申請書・婚姻届受理証明書・賃貸借契約書・所得証明書を提出します。</p><p><span class="marker">婚姻届出後1年以内に申請が必要</span>です。申請が遅れると補助期間が短くなりますのでご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃月額から住宅手当等を差し引いた額に対し、<strong>月額最大2万円を最長24か月間</strong>補助します。総額で最大48万円となります。</p><p><span class="marker">公営住宅や社宅に居住している場合は対象外</span>です。また、親族が所有する住宅の場合も対象外となります。</p><div class="note-box">補助金は半年ごとにまとめて支給されます。転居や離婚等で要件を満たさなくなった場合は届出が必要です。土浦市では結婚新生活支援事業（国の補助制度）と組み合わせることで、さらに手厚い支援を受けられる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-disability-medical',
    title: '土浦市 重度障害者医療費助成制度',
    organization: '土浦市',
    type: 'local',
    maxAmount: '医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '茨城県',
    tags: ['土浦市', '障害者医療', '助成金'],
    eligibility: '土浦市に住所を有する重度の障がいのある方',
    applicationPeriod: '通年',
    description: '土浦市が実施する重度障害者医療費助成制度です。重度の障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 重度障害者医療費助成制度は、<span class="marker">重度の障がいのある方の医療費自己負担分を助成する</span>制度です。</p><p>土浦市は茨城県内でも福祉サービスの充実に力を入れている自治体のひとつで、障がいのある方が安心して医療を受けられる環境づくりに取り組んでいます。保険診療の自己負担分が助成され、経済的な負担を気にせず必要な治療を受けることができます。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A（マルA・A）、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級または2級</p><p>療育手帳マルA・A</p><p>精神障害者保健福祉手帳1級（入院を除く）</p><p>障害年金1級相当</p></div><p>土浦市役所障害福祉課の窓口で申請します。障害者手帳・健康保険証・本人確認書類・振込先口座情報が必要です。</p><p><span class="marker">手帳の交付を受けたら速やかに申請してください</span>。申請月の翌月から助成が開始されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。茨城県内の医療機関では受給者証を提示することで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">65歳以上で新たに障害認定を受けた方は、後期高齢者医療制度への加入が必要な場合があります。保険適用外の費用（差額ベッド代、文書料等）は助成対象外です。詳しくは土浦市の障害福祉課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-school-lunch',
    title: '土浦市 学校給食費補助事業',
    organization: '土浦市',
    type: 'local',
    maxAmount: '給食費の半額〜全額補助',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '茨城県',
    tags: ['土浦市', '学校給食', '補助金'],
    eligibility: '土浦市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（年度途中の転入も随時受付）',
    description: '土浦市が実施する学校給食費補助事業です。小中学校の給食費の一部または全額を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 学校給食費補助事業は、<span class="marker">市立小中学校に在籍する児童生徒の保護者</span>に対し、学校給食費の一部を補助する制度です。</p><p>土浦市は霞ヶ浦の恵みを受けた農産物が豊富で、地元食材を活用した「地産地消」の学校給食に力を入れています。給食費の負担軽減を通じて、すべての子どもが栄養バランスの取れた食事を楽しめるよう支援しています。</p><p><span class="marker-green">第3子以降の児童生徒は給食費が全額免除となります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助内容"><p>全児童生徒：給食費の一部補助</p><p>第3子以降：給食費全額免除</p><p>就学援助認定世帯：給食費全額支給</p></div><p>年度当初に学校を通じて案内が配布されます。第3子以降の全額免除は、<strong>申請書の提出が必要</strong>です。</p><p><span class="marker">年度途中の転入の場合は、転入後速やかに学校へお申し出ください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給食費は小学校で月額約4,500円、中学校で月額約5,000円程度です。<strong>補助により保護者の実質負担が軽減</strong>されます。</p><p><span class="marker">アレルギー等で給食の提供を受けていない場合は補助対象外</span>となります。</p><div class="highlight-box">土浦市の学校給食は、霞ヶ浦産のレンコンや地元産の野菜を積極的に使用しています。食育の観点からも充実した給食プログラムが評価されており、子どもたちの健やかな成長を食から支えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-telework-bonus',
    title: '土浦市 テレワーク移住促進補助金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '茨城県',
    tags: ['土浦市', 'テレワーク', '移住補助金'],
    eligibility: '東京圏から土浦市に移住し、テレワークで就業する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '土浦市が実施するテレワーク移住促進補助金です。東京圏からの移住者でテレワーク勤務者に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 テレワーク移住促進補助金は、<span class="marker">東京圏から土浦市に移住し、テレワークで就業する方</span>を対象に、移住にかかる費用を補助する制度です。</p><p>土浦市はJR常磐線で東京駅から約70分とアクセスが良く、霞ヶ浦の自然環境に恵まれた「ちょうどいい田舎」として注目されています。コワーキングスペースやサイクリング環境の充実もあり、ワークライフバランスを重視する方に最適な移住先です。</p><p>補助額は<strong>最大30万円</strong>です。<span class="marker-green">通信環境の整備費用やコワーキングスペースの利用料も対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>東京23区に在住または東京圏から23区へ通勤していた方</p><p>土浦市に転入し、テレワークで現在の勤務先に引き続き就業すること</p><p>転入後3か月以上1年以内に申請すること</p><p>5年以上土浦市に居住する意思があること</p></div><p>土浦市役所企画課に申請書・就業証明書・テレワーク実施証明書等を提出します。</p><p><span class="marker">転入前の事前相談を推奨しています</span>。移住コンシェルジュが個別に対応します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は移住にかかる経費に対し<strong>最大30万円</strong>です。引越費用、住居の初期費用、通信環境整備費などが対象です。</p><p><span class="marker">5年以内に土浦市から転出した場合は、補助金の返還を求められます</span>。</p><div class="note-box">国の移住支援金制度と併用できる場合があります。また、土浦市では「まちなかテレワークオフィス」の整備も進めており、自宅以外での作業環境も選べます。つくば霞ヶ浦りんりんロードでのサイクリングをリフレッシュに活用する移住者も増えています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-nursing-home-reform',
    title: '土浦市 高齢者住宅バリアフリー改修補助金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '茨城県',
    tags: ['土浦市', 'バリアフリー', '介護改修'],
    eligibility: '土浦市に住所を有する65歳以上の方または要介護認定を受けた方がいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '土浦市が実施する高齢者住宅バリアフリー改修補助金です。手すり設置や段差解消等の工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 高齢者住宅バリアフリー改修補助金は、<span class="marker">高齢者が安全に暮らし続けるための住宅改修工事</span>に対し、費用の一部を補助する制度です。</p><p>土浦市では高齢者が住み慣れた自宅で安心して生活を続けられるよう、手すりの設置、段差解消、浴室・トイレの改修といったバリアフリー化工事を支援しています。介護保険の住宅改修とは別枠で利用できる市独自の制度です。</p><p>補助率は対象工事費の3分の2以内で、<strong>上限は20万円</strong>です。<span class="marker-green">介護保険の住宅改修費（上限20万円）と併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの取付け</p><p>段差の解消（スロープ設置等）</p><p>滑り防止のための床材変更</p><p>浴室・トイレの改修</p><p>扉の取替え（引き戸への変更等）</p></div><p>土浦市役所高齢福祉課に申請書・工事見積書・改修箇所の写真等を提出します。</p><p><span class="marker">工事着手前に申請が必要</span>です。すでに完了した工事は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の2以内で、<strong>上限20万円</strong>です。介護保険の住宅改修と合わせると最大40万円の支援を受けられます。</p><p><span class="marker">市内業者による施工が推奨されますが、市外業者でも申請可能</span>です。</p><div class="note-box">ケアマネジャーや地域包括支援センターに相談すると、必要な改修内容のアドバイスを受けられます。改修後は転倒リスクの低減や介護負担の軽減が期待できますので、早めの対応をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-energy-support',
    title: '土浦市 省エネ家電買替補助金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '茨城県',
    tags: ['土浦市', '省エネ', '家電補助'],
    eligibility: '土浦市に住所を有する世帯で、省エネ性能の高い家電に買い替える方',
    applicationPeriod: '毎年6月〜翌年2月頃（予算に達し次第終了）',
    description: '土浦市が実施する省エネ家電買替補助金です。省エネ性能の高いエアコンや冷蔵庫への買替えに最大3万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 省エネ家電買替補助金は、<span class="marker">省エネ性能の高いエアコンや冷蔵庫への買替え</span>に対し、購入費用の一部を補助する制度です。</p><p>土浦市では脱炭素社会の実現と市民の光熱費負担軽減を目指し、家庭における省エネ対策を推進しています。古い家電製品からの買替えによりCO2排出量の削減と電気代の節約を同時に実現できます。</p><p>補助額は購入金額に応じて<strong>最大3万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象製品"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p><p>購入金額が5万円以上（税込）であること</p><p>市内の販売店またはオンラインで購入した新品であること</p></div><p>土浦市役所環境保全課に申請書・購入時のレシートまたは領収書・製品の省エネ性能がわかるカタログ等を提出します。</p><p><span class="marker">購入後3か月以内に申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額はエアコン<strong>最大2万円</strong>、冷蔵庫<strong>最大3万円</strong>です（1世帯につきそれぞれ1台まで）。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>です。早めの申請をおすすめします。</p><div class="highlight-box">10年以上前のエアコンを最新型に買い替えると、年間の電気代が数千円〜1万円以上節約できる場合があります。地球温暖化対策と家計の節約を両立できる制度ですので、買替えを検討中の方はぜひ活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsuchiura-bousai-equipment',
    title: '土浦市 家庭用防災設備購入補助金',
    organization: '土浦市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '茨城県',
    tags: ['土浦市', '防災設備', '補助金'],
    eligibility: '土浦市に住所を有する世帯で、家庭用防災設備を購入・設置する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '土浦市が実施する家庭用防災設備購入補助金です。感震ブレーカーや家具転倒防止器具等の購入に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>土浦市 家庭用防災設備購入補助金は、<span class="marker">家庭における地震・水害等の防災対策設備の購入・設置</span>に対し、費用の一部を補助する制度です。</p><p>土浦市は霞ヶ浦に面し、過去に水害の被害を受けた経験があります。また、東日本大震災では液状化被害も発生しました。家庭レベルでの防災対策を推進するため、防災設備の導入費用を支援しています。</p><p>補助率は購入・設置費用の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカー、家具転倒防止器具、止水板などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>感震ブレーカー（地震時の通電火災防止）</p><p>家具転倒防止器具（L字金具・突っ張り棒等）</p><p>止水板・防水板（浸水対策）</p><p>雨水貯留タンク（断水時の生活用水確保）</p></div><p>土浦市役所危機管理課に申請書と見積書（または購入レシート）を提出します。</p><p><span class="marker">設置前の申請が原則ですが、購入後の申請も可能な設備があります</span>。事前にご確認ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入・設置費用の2分の1以内で、<strong>上限5万円</strong>です。1世帯につき年度内1回の利用に限ります。</p><p><span class="marker">設置工事を伴う場合は、施工業者の見積書が必要</span>です。DIYで設置した場合は製品の購入費のみが対象となります。</p><div class="note-box">土浦市ではハザードマップの配布や防災訓練の実施など、地域の防災力向上にも取り組んでいます。補助金の活用とあわせて、家庭の防災計画の見直しもおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.tsuchiura.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 古河市（茨城県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'koga-childcare-subsidy',
    title: '古河市 子育て世帯応援給付金',
    organization: '古河市',
    type: 'local',
    maxAmount: '子ども1人あたり最大5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['古河市', '子育て支援', '給付金'],
    eligibility: '古河市に住所を有し、18歳未満の子どもを養育している保護者',
    applicationPeriod: '毎年4月〜翌年3月（通年受付）',
    description: '古河市が実施する子育て世帯応援給付金です。子育て世帯の経済的負担を軽減するため、子ども1人あたり最大5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 子育て世帯応援給付金は、<span class="marker">18歳未満の子どもを養育する世帯</span>に対し、子育てにかかる費用を支援する給付金です。</p><p>古河市は茨城県の最西端に位置し、関東平野のほぼ中央という交通の要衝にあります。室町時代に「古河公方」が拠点とした歴史ある街で、渡良瀬遊水地の豊かな自然と都市機能が調和しています。若い世帯の定住を促進するため、子育て支援の充実に力を入れています。</p><p><span class="marker-green">第2子以降は加算があり、多子世帯への支援が手厚くなっています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>古河市に住民登録があり、18歳未満の子どもを養育している保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市役所窓口またはホームページからダウンロード）</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>古河市役所子ども政策課の窓口で申請します。<span class="marker">児童手当受給者には案内が自動送付される場合があります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は子ども1人あたり<strong>最大5万円</strong>です。第2子以降は加算措置が適用されます。</p><p><span class="marker">年度内に申請しないと受給権が消滅しますのでご注意ください</span>。</p><div class="note-box">給付金は非課税扱いです。申請から1〜2か月程度で指定口座に振り込まれます。古河市では子育て支援センターの運営や一時預かり保育の充実など、経済的支援以外の子育てサポートも充実しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-birth-bonus',
    title: '古河市 出産祝い金制度',
    organization: '古河市',
    type: 'local',
    maxAmount: '第1子5万円・第3子以降15万円',
    maxAmountNum: 15,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['古河市', '出産祝い金', '給付金'],
    eligibility: '古河市に住所を有し、子どもが生まれた世帯の保護者',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '古河市が実施する出産祝い金制度です。子どもの出生に際し、第1子5万円、第3子以降15万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 出産祝い金制度は、<span class="marker">市内に住所を有する世帯に子どもが生まれた際</span>に祝い金を支給する制度です。</p><p>古河市は利根川と渡良瀬川に挟まれた肥沃な土地に広がり、古くから交通の要衝として栄えてきました。毎年春に開催される「古河桃まつり」は関東有数の花の名所です。少子化対策として、特に第3子以降の出産に対して手厚い支援を行い、多子世帯の経済的負担を軽減しています。</p><p>支給額は<strong>第1子5万円、第2子10万円、第3子以降15万円</strong>です。<span class="marker-green">多胎児の場合はそれぞれに支給されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>出生日に古河市に住所を有すること</p><p>出生届が受理されていること</p><p>生後6か月以内に申請すること</p><p>市税の滞納がないこと</p></div><p>古河市役所子ども政策課の窓口で申請書を提出します。出生届と同時に手続き可能です。</p><p><span class="marker">生後6か月を過ぎると受給できなくなります</span>。忘れずに手続きをしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>第1子5万円、第2子10万円、第3子以降15万円</strong>です。子の順位は同一世帯で養育する18歳未満の子どもの人数で判定します。</p><p><span class="marker">申請から1〜2か月後に指定口座へ振り込まれます</span>。</p><div class="highlight-box">古河市は東北本線（宇都宮線）で大宮駅まで約50分と都心へのアクセスが良好です。住宅費が都内に比べて大幅に安いため、出産祝い金と合わせて子育て世帯にとって魅力的な居住環境となっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-housing-purchase',
    title: '古河市 住宅取得支援補助金',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['古河市', '住宅取得', '補助金'],
    eligibility: '古河市内に新たに住宅を取得する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '古河市が実施する住宅取得支援補助金です。市内に住宅を新築または購入する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 住宅取得支援補助金は、<span class="marker">市内に新たに住宅を取得する方</span>を対象に、取得費用の一部を補助する制度です。</p><p>古河市は東北自動車道・圏央道のインターチェンジに近く、JR東北本線の古河駅から上野東京ラインで都心へ直通できる交通利便性を誇ります。住宅価格は東京圏と比べて格段に手頃で、広い敷地を確保できる住環境が魅力です。</p><p>補助額は<strong>基本額に各種加算を加えて最大50万円</strong>です。<span class="marker-green">市外からの転入者や子育て世帯にはさらに加算があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>古河市内に住宅を新築または購入すること</p><p>取得した住宅に5年以上居住する意思があること</p><p>申請者および同居家族に市税の滞納がないこと</p><p>住宅の引渡し後6か月以内に申請すること</p></div><p>古河市役所都市計画課に申請書・売買契約書（建築請負契約書）・住民票・登記事項証明書等を提出します。</p><p><span class="marker">引渡し後6か月以内の申請が必要</span>ですので、早めに準備を進めてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>新築30万円、中古住宅20万円</strong>です。子育て世帯加算（10万円）や市外転入加算（10万円）により最大50万円となります。</p><p><span class="marker">5年以内に市外へ転出した場合は、補助金の全額または一部の返還が求められます</span>。</p><div class="note-box">投資用や賃貸用の住宅は対象外です。古河市は渡良瀬遊水地のラムサール条約湿地に隣接する自然豊かな環境で、通勤利便性と住環境の両立を求める方におすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-disability-medical',
    title: '古河市 重度障害者医療費助成制度',
    organization: '古河市',
    type: 'local',
    maxAmount: '医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '茨城県',
    tags: ['古河市', '障害者医療', '助成金'],
    eligibility: '古河市に住所を有する重度の障がいのある方',
    applicationPeriod: '通年',
    description: '古河市が実施する重度障害者医療費助成制度です。重度の障がいのある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 重度障害者医療費助成制度は、<span class="marker">重度の障がいのある方が安心して医療を受けられるよう</span>、保険診療の自己負担分を助成する制度です。</p><p>古河市は「共に生きるまち」を福祉施策の基本理念として掲げ、障がいの有無にかかわらず地域で安心して暮らせる社会づくりを推進しています。医療費の助成を通じて、障がいのある方の経済的負担を軽減し、必要な医療へのアクセスを確保しています。</p><p><span class="marker-green">身体障害者手帳1・2級、療育手帳A、精神障害者保健福祉手帳1級の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級または2級</p><p>療育手帳マルA・A</p><p>精神障害者保健福祉手帳1級（入院を除く）</p><p>障害基礎年金1級相当の障がい</p></div><p>古河市役所障がい福祉課に障害者手帳・健康保険証・本人確認書類・振込先口座情報を持参して申請します。</p><p><span class="marker">手帳の交付後すみやかに申請してください</span>。申請月の翌月から助成開始となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分が全額助成</strong>されます。茨城県内の医療機関では受給者証を提示することで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">所得制限が設けられている場合があります。また、保険適用外の費用（差額ベッド代・文書料等）は助成対象外です。65歳以上で新たに障害認定を受けた方は、後期高齢者医療制度への加入が条件となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-scholarship',
    title: '古河市 奨学金制度',
    organization: '古河市',
    type: 'local',
    maxAmount: '月額最大4万円（大学）',
    maxAmountNum: 4,
    category: 'education',
    prefecture: '茨城県',
    tags: ['古河市', '奨学金', '教育支援'],
    eligibility: '古河市に住所を有する方の子で、高校・大学等に進学する学生',
    applicationPeriod: '毎年2月〜4月頃',
    description: '古河市が実施する奨学金制度です。経済的理由により就学が困難な学生に対し、無利子で奨学金を貸し付けます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 奨学金制度は、<span class="marker">経済的な理由により進学が困難な学生</span>に対し、奨学金を無利子で貸し付ける制度です。</p><p>古河市は室町時代の「古河公方」に由来する長い歴史を持ち、学問・教育を重視する風土が根付いています。高校・専門学校・短大・大学への進学を経済的に支援し、地域の未来を担う人材を育成しています。</p><p><span class="marker-green">無利子での貸付で、卒業後の返還負担が軽減されています</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が古河市に住所を有すること</p><p>高等学校、専修学校、短期大学、大学に在学または進学予定であること</p><p>学業成績が良好で、経済的に就学が困難であること</p><p>連帯保証人を立てられること</p></div><p>古河市教育委員会学校教育課に申請書・在学証明書（合格通知書）・世帯の所得証明書等を提出します。</p><p><span class="marker">毎年2月〜4月頃の募集期間中に申請が必要</span>です。選考は書類審査により行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸付月額は<strong>高校2万円程度、大学・短大は最大4万円程度</strong>です。正規の修業期間にわたって貸し付けます。</p><p><span class="marker">卒業後一定期間を経て、分割による返還が始まります</span>。返還期間は貸付期間の2倍以内です。</p><div class="highlight-box">古河市の奨学金は無利子ですので、利息負担がありません。日本学生支援機構の奨学金との併用可否は、事前に教育委員会に確認してください。地元に戻って就職した場合に返還を免除する制度がある場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-sme-support',
    title: '古河市 中小企業設備投資補助金',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '茨城県',
    tags: ['古河市', '中小企業', '設備投資'],
    eligibility: '古河市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '古河市が実施する中小企業設備投資補助金です。市内中小企業の生産性向上のための設備投資に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 中小企業設備投資補助金は、<span class="marker">市内の中小企業者が生産性向上のために行う設備投資</span>に対し、費用の一部を補助する制度です。</p><p>古河市は工業団地が複数立地する製造業の盛んな地域で、自動車部品や電子部品など多様な産業が集積しています。中小企業の競争力強化と地域経済の活性化を図るため、設備投資を積極的に支援しています。</p><p>補助率は対象経費の3分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">IoT・DX関連設備は補助率が優遇される場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>古河市内に本社または事業所を有する中小企業者であること</p><p>設備投資額が50万円以上であること</p><p>市税を滞納していないこと</p><p>同一経費で他の補助金を受けていないこと</p></div><p>古河市役所産業部商工政策課に申請書・事業計画書・見積書等を提出します。</p><p><span class="marker">設備の発注・購入前に申請が必要</span>です。交付決定前の支出は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の1以内で、<strong>上限100万円</strong>です。製造設備、検査機器、IT機器など幅広い設備が対象となります。</p><p><span class="marker">事業完了後に実績報告書を提出し、検査を受けた後に補助金が支払われます</span>。</p><div class="note-box">古河市商工会では、補助金申請に関する無料相談を受け付けています。事業計画書の作成支援も行っていますので、申請前に活用してください。リースやレンタルは対象外となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-nursing-home-reform',
    title: '古河市 高齢者住宅改修支援事業',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '茨城県',
    tags: ['古河市', '住宅改修', '介護支援'],
    eligibility: '古河市に住所を有する65歳以上の方または要介護認定者がいる世帯',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '古河市が実施する高齢者住宅改修支援事業です。バリアフリー化工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 高齢者住宅改修支援事業は、<span class="marker">高齢者が安心して自宅で暮らし続けるための住宅改修</span>に対し、費用の一部を補助する制度です。</p><p>古河市では住み慣れた地域で高齢者が安心して生活を続けられるよう、手すりの設置や段差解消などのバリアフリー化工事を支援しています。介護保険の住宅改修費とは別枠で市独自の補助を行う制度です。</p><p>補助率は対象工事費の2分の1以内で、<strong>上限は20万円</strong>です。<span class="marker-green">介護保険の住宅改修費と併用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事"><p>手すりの取付け（廊下・階段・浴室・トイレ等）</p><p>段差の解消・スロープの設置</p><p>床材の滑り止め加工</p><p>浴室・トイレの改修</p><p>引き戸への取替え</p></div><p>古河市役所高齢福祉課に申請書・工事見積書・施工箇所の写真を提出します。</p><p><span class="marker">必ず工事着手前に申請してください</span>。着工後の申請は受理されません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の2分の1以内で、<strong>上限20万円</strong>です。介護保険の住宅改修費と合わせると最大40万円の支援を受けられます。</p><p><span class="marker">1世帯につき1回限りの利用</span>です。将来必要になる改修も含めて、まとめて計画することをおすすめします。</p><div class="highlight-box">古河市の地域包括支援センターでは、住宅改修の相談を無料で受け付けています。ケアマネジャーや作業療法士のアドバイスを受けながら、最適な改修プランを立てることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-elderly-support',
    title: '古河市 高齢者外出支援事業',
    organization: '古河市',
    type: 'local',
    maxAmount: 'タクシー券年間最大2.4万円分',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '茨城県',
    tags: ['古河市', '高齢者支援', '外出支援'],
    eligibility: '古河市に住所を有する75歳以上の方で、公共交通機関の利用が困難な方',
    applicationPeriod: '通年（年度ごとに申請）',
    description: '古河市が実施する高齢者外出支援事業です。75歳以上の高齢者にタクシー利用券を交付し、外出を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 高齢者外出支援事業は、<span class="marker">75歳以上の高齢者にタクシー利用券を交付</span>し、通院や買い物などの外出を支援する事業です。</p><p>古河市は平坦な地形が広がる関東平野に位置していますが、公共交通機関の路線が限られる地域もあり、高齢者の移動手段の確保が課題となっています。この事業は、免許返納後の高齢者などの生活の質を維持するために設けられています。</p><p><span class="marker-green">免許証を自主返納した方には追加の利用券が交付される場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="交付要件"><p>古河市に住所を有する75歳以上の方</p><p>自家用車を運転しない方（免許未保持者または返納者）</p><p>要介護認定で車いすやストレッチャーを要しない方</p></div><p>古河市役所高齢福祉課の窓口で申請します。健康保険証または介護保険被保険者証をお持ちください。</p><p><span class="marker">年度ごとに申請が必要です</span>。毎年4月から受付を開始します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>タクシー利用券は<strong>1枚500円分で年間最大48枚（2.4万円分）</strong>が交付されます。市内の提携タクシー会社で利用できます。</p><p><span class="marker">利用券は本人のみ使用可能で、他人への譲渡はできません</span>。有効期限は交付年度の3月末日です。</p><div class="note-box">タクシー利用券は1回の乗車で複数枚使用できます。釣り銭は出ませんのでご注意ください。古河市ではデマンド型乗合交通「愛・あいバス」も運行しており、タクシー券と使い分けることで効率的に外出できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koga-bousai-equipment',
    title: '古河市 住宅用防災設備設置補助金',
    organization: '古河市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '茨城県',
    tags: ['古河市', '防災設備', '補助金'],
    eligibility: '古河市に住所を有する世帯で、防災設備を購入・設置する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '古河市が実施する住宅用防災設備設置補助金です。感震ブレーカーや家具固定器具等の購入に最大5万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>古河市 住宅用防災設備設置補助金は、<span class="marker">住宅の地震・水害対策のための防災設備の購入・設置</span>に対し、費用の一部を補助する制度です。</p><p>古河市は利根川と渡良瀬川に挟まれた地域にあり、水害リスクへの備えが重要です。また、地震による家具転倒や通電火災のリスクにも対策が求められます。家庭での自助の取り組みを経済的に支援しています。</p><p>補助率は購入・設置費用の2分の1以内で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカー、止水板、家具転倒防止器具などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象設備"><p>感震ブレーカー（分電盤タイプ・コンセントタイプ）</p><p>家具転倒防止器具（L字金具・つっぱり棒等）</p><p>止水板・防水板</p><p>雨水貯留槽</p></div><p>古河市役所防災安全課に申請書・見積書または領収書を提出します。</p><p><span class="marker">設置前の事前申請が原則ですが、購入済みの場合も相談可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は購入・設置費用の2分の1以内で、<strong>上限5万円</strong>です。1世帯につき年度内1回の利用に限ります。</p><p><span class="marker">領収書や設置後の写真等の証拠書類が必要</span>です。</p><div class="note-box">古河市はハザードマップで利根川・渡良瀬川の浸水想定区域が示されています。お住まいの地域のリスクを確認し、必要な対策を講じましょう。防災設備の設置と合わせて、非常持出品の準備や避難場所の確認もおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.ibaraki-koga.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ── 残り3都市（足利市・佐野市・桐生市）は次のセクションで追加 ──
];
