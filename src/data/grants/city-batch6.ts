import { Grant } from '@/lib/types';

export const cityGrantsBatch6: Grant[] = [
  // ────────────────────────────────────────────────
  // 北区（東京都）3件: childcare, education, living
  // ────────────────────────────────────────────────
  {
    slug: 'kita-child-medical',
    title: '北区 子ども医療費助成制度',
    organization: '北区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['北区', '子ども医療費', '助成金'],
    eligibility: '北区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '北区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>北区は赤羽や王子エリアを中心に交通アクセスが良く、子育て世帯にも人気の地域です。通院・入院・調剤のすべてが助成対象となっており、子育て家庭の経済的な安心を支えています。</p><p><span class="marker-green">所得制限はなく、北区在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北区に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（都外受診時の払い戻し用）</p></div><p>北区役所子育て支援課または各区民事務所で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療証（マル乳・マル子・マル青）」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば医療証の提示で窓口負担がなくなります。</p><p><span class="marker">都外の医療機関を受診した場合は、一旦窓口で支払い後に償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。学校でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kita-education-support',
    title: '北区 就学援助制度',
    organization: '北区',
    type: 'local',
    maxAmount: '年間最大約15万円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '東京都',
    tags: ['北区', '就学援助', '教育支援'],
    eligibility: '北区立小中学校に在籍する児童・生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '北区が実施する就学援助制度です。経済的に困難な世帯の児童・生徒に対し、学用品費や給食費などを援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 就学援助制度は、<span class="marker">経済的理由により就学が困難な児童・生徒の保護者</span>に対し、学校生活に必要な費用の一部を援助する制度です。</p><p>学用品費、校外活動費、修学旅行費、学校給食費など、学校生活にかかる幅広い費用が援助対象となっています。入学前に必要な新入学用品費の前倒し支給にも対応しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受けている世帯（要保護者）</p><p>生活保護に準ずる程度に経済的にお困りの世帯（準要保護者）</p><p>前年の世帯所得が北区の定める基準額以下の世帯</p></div><p>毎年4月に学校を通じて配布される申請書を記入し、学校または北区教育委員会に提出します。年度途中の転入や家計の急変による申請も受け付けています。</p><p><span class="marker-green">申請は毎年度行う必要があります</span>。前年度認定されていても自動継続ではないため、忘れずに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>援助費目ごとに支給額が定められており、小学校・中学校で金額が異なります。<strong>学用品費は小学校で年間約1万円、中学校で年間約2万円</strong>が目安です。</p><p><span class="marker">給食費は実費全額が支給</span>されるため、保護者の実質負担はありません。修学旅行費も実費支給です。</p><div class="highlight-box">新入学用品費は入学前の3月に前倒し支給が可能です。ランドセルや制服の購入に間に合うよう、早めに申請しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kita-senior-mimamori',
    title: '北区 高齢者見守り・安心生活支援',
    organization: '北区',
    type: 'local',
    maxAmount: '月額最大1万円相当',
    maxAmountNum: 12,
    category: 'living',
    prefecture: '東京都',
    tags: ['北区', '高齢者支援', '見守りサービス'],
    eligibility: '北区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '北区が実施する高齢者の見守り・安心生活支援事業です。ひとり暮らし高齢者に緊急通報システムや配食サービスなどを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北区 高齢者見守り・安心生活支援は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、安全・安心な生活を支援する総合的な事業です。</p><p>緊急通報システムの設置、配食サービスによる安否確認、電話訪問による見守りなど複数のサービスが用意されています。高齢化が進む中、地域で安心して暮らし続けられるよう支援体制を整えています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>緊急通報システム（ペンダント型）の貸与</p><p>配食サービス（昼食・夕食の配達と安否確認）</p><p>電話訪問・定期的な安否確認</p><p>火災安全システムの設置</p></div><p>北区の高齢福祉課または各地域包括支援センターで申請を受け付けています。ケアマネージャーを通じた申請も可能です。</p><p><span class="marker-green">サービスによって自己負担額が異なります</span>ので、申請時に詳細を確認してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報システムは<strong>月額利用料が住民税非課税世帯は無料</strong>、課税世帯でも月額数百円程度です。配食サービスは1食あたり数百円の自己負担で利用できます。</p><p><span class="marker">配食サービスは週5日まで利用可能</span>で、栄養バランスの取れた食事が届くと同時に安否確認も行われます。</p><div class="note-box">介護認定を受けている方は介護保険サービスとの併用が可能です。まずは最寄りの地域包括支援センターに相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kita.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 荒川区（東京都）3件: childcare, medical, living
  // ────────────────────────────────────────────────
  {
    slug: 'arakawa-child-medical',
    title: '荒川区 子ども医療費助成制度',
    organization: '荒川区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['荒川区', '子ども医療費', '助成金'],
    eligibility: '荒川区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '荒川区が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>荒川区は都電荒川線が走る下町情緒あふれる地域で、子育て支援にも積極的に取り組んでいます。通院・入院・調剤のすべてが助成の対象です。</p><p><span class="marker-green">所得制限なし</span>で、荒川区に住むすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>荒川区に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（都外受診時の払い戻し用）</p></div><p>荒川区役所子育て支援課の窓口で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば医療証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">都外の医療機関で受診した場合は、償還払い（後日申請で返金）</span>の手続きが必要です。</p><div class="highlight-box">荒川区では子育て応援のための独自事業も多数実施しています。一時預かり事業やファミリーサポートセンターなど、子育て支援施策と合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'arakawa-senior-medical',
    title: '荒川区 高齢者インフルエンザ等予防接種費用助成',
    organization: '荒川区',
    type: 'local',
    maxAmount: '全額無料',
    maxAmountNum: 1,
    category: 'medical',
    prefecture: '東京都',
    tags: ['荒川区', '予防接種', '高齢者医療'],
    eligibility: '荒川区に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月（インフルエンザ）、通年（肺炎球菌）',
    description: '荒川区が実施する高齢者向け予防接種費用助成です。インフルエンザや肺炎球菌ワクチンの接種費用が全額助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 高齢者予防接種費用助成は、<span class="marker">65歳以上の区民を対象にインフルエンザや肺炎球菌ワクチンの接種費用を全額助成</span>する制度です。</p><p>高齢者はインフルエンザや肺炎にかかると重症化しやすいため、予防接種による予防が非常に重要です。荒川区では接種費用を全額負担し、高齢者が経済的な心配なく予防接種を受けられるようにしています。</p><p><span class="marker-green">自己負担なし</span>で接種を受けることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となるワクチン"><p>季節性インフルエンザワクチン（毎年10月〜翌1月）</p><p>高齢者肺炎球菌ワクチン（対象年齢の方に個別通知）</p><p>新型コロナウイルスワクチン（実施時期は都度案内）</p></div><p>荒川区内の指定医療機関に予約のうえ、接種を受けてください。接種当日は<strong>健康保険証と住所が確認できる書類</strong>を持参します。</p><p>事前の申請は不要で、指定医療機関であればその場で助成が適用されます。区外の医療機関で接種する場合は事前に相談が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>インフルエンザ予防接種は通常3,000〜5,000円程度かかりますが、<strong>荒川区の助成により自己負担は無料</strong>です。</p><p><span class="marker">接種期間を過ぎると助成が受けられなくなります</span>ので、早めに接種を受けましょう。特にインフルエンザは流行前の10月〜11月中の接種が効果的です。</p><div class="note-box">アレルギーや持病のある方は、かかりつけ医に相談のうえ接種を検討してください。体調が優れない場合は無理に接種する必要はありません。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'arakawa-living-support',
    title: '荒川区 生活困窮者自立支援事業',
    organization: '荒川区',
    type: 'local',
    maxAmount: '月額最大約8万円（住居確保給付金）',
    maxAmountNum: 8,
    category: 'living',
    prefecture: '東京都',
    tags: ['荒川区', '生活支援', '自立支援'],
    eligibility: '荒川区に住所を有し、生活に困窮している方で、生活保護を受けていない方',
    applicationPeriod: '通年',
    description: '荒川区が実施する生活困窮者自立支援事業です。相談支援や住居確保給付金を通じて、生活再建を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>荒川区 生活困窮者自立支援事業は、<span class="marker">経済的に困窮し、最低限度の生活を維持することが困難な方</span>を対象に、包括的な支援を行う事業です。</p><p>自立相談支援、住居確保給付金の支給、就労準備支援、家計改善支援など、一人ひとりの状況に応じた支援プランを作成し、生活の立て直しをサポートしています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な支援内容"><p>自立相談支援（専門の相談員による個別サポート）</p><p>住居確保給付金（家賃相当額を原則3ヶ月支給）</p><p>就労準備支援（就職活動のサポート）</p><p>家計改善支援（家計の見直し・債務整理の助言）</p></div><p>荒川区の自立相談支援窓口（くらしとしごとの相談センター）に相談してください。電話や来所での相談が可能です。</p><p><span class="marker-green">住居確保給付金は離職後2年以内の方が主な対象</span>ですが、収入が減少した場合にも申請できるケースがあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>住居確保給付金は<strong>東京都特別区の場合、単身世帯で月額最大53,700円</strong>が支給されます。世帯人数により上限額が異なります。</p><p><span class="marker">支給期間は原則3ヶ月で、最大9ヶ月まで延長可能</span>です。支給中はハローワークでの求職活動が求められます。</p><div class="highlight-box">「まだ生活保護を受けるほどではないけれど困っている」という段階で相談できる制度です。一人で抱え込まず、早めに窓口に相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.arakawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 板橋区（東京都）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'itabashi-child-medical',
    title: '板橋区 子ども医療費助成制度',
    organization: '板橋区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['板橋区', '子ども医療費', '助成金'],
    eligibility: '板橋区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '板橋区が実施する子ども医療費助成制度です。18歳までの子どもの保険診療にかかる自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>板橋区は都営三田線や東武東上線沿線に広がる住宅地で、公園も多く子育て環境に恵まれたエリアです。通院・入院・調剤のすべてが助成対象となっています。</p><p><span class="marker-green">所得制限なし</span>で、板橋区に住むすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>板橋区に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（都外受診時の償還払い用）</p></div><p>板橋区役所子ども政策課または各区民事務所で申請します。<strong>出生届・転入届と同時に手続き</strong>できます。申請後、医療証が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば医療証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">都外の医療機関で受診した場合は、領収書を保管し償還払いの手続き</span>を行ってください。申請期限は受診日の翌月から5年間です。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、健康診断など）は助成対象外です。また、交通事故など第三者行為による傷病は対象外となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'itabashi-housing-reform',
    title: '板橋区 住宅改修費助成制度',
    organization: '板橋区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['板橋区', '住宅リフォーム', '助成金'],
    eligibility: '板橋区内に居住し、住宅の改修工事を行う方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '板橋区が実施する住宅改修費助成制度です。バリアフリー化や省エネ改修工事に対して最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 住宅改修費助成制度は、<span class="marker">区民が自ら居住する住宅のバリアフリー化・省エネ改修・耐震化工事</span>に対して費用の一部を助成する制度です。</p><p>高齢者の転倒防止のための手すり設置や段差解消、窓の断熱化、耐震補強など、安全で快適な住環境づくりを支援しています。区内の施工業者を利用することで地域経済の活性化にもつながっています。</p><p>補助率は対象工事費の<strong>20%で、上限は20万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象工事"><p>バリアフリー改修（手すり設置、段差解消、浴室改修等）</p><p>省エネ改修（窓の断熱化、LED照明への交換等）</p><p>耐震改修（耐震診断に基づく補強工事）</p><p>その他安全・防犯のための改修</p></div><p>板橋区住宅政策課に事前相談のうえ申請します。<span class="marker-green">必ず工事着手前に申請が必要</span>で、交付決定を受けてから工事を開始してください。</p><p>区内の施工業者による工事が助成の条件となるケースがあります。対象業者の一覧は区の窓口で確認できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の20%、<strong>上限20万円</strong>が助成されます。工事費が10万円以上の改修が対象です。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となります。年度前半に申請が集中する傾向があるため、早めの相談をおすすめします。</p><div class="highlight-box">介護保険の住宅改修費支給（上限20万円）と併用できる場合があります。ケアマネージャーと区の窓口の両方に相談して、最大限の補助を受けましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'itabashi-startup-support',
    title: '板橋区 創業支援補助金',
    organization: '板橋区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '東京都',
    tags: ['板橋区', '創業支援', '補助金'],
    eligibility: '板橋区内で新たに事業を開始する方、または開始して1年以内の方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '板橋区が実施する創業支援補助金です。区内で新規創業する際にかかる経費の一部を最大20万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>板橋区 創業支援補助金は、<span class="marker">区内で新たに事業を始める方を対象に、創業にかかる初期経費を補助</span>する制度です。</p><p>板橋区はものづくりの街として知られ、中小企業や個人事業主を積極的に支援しています。事務所の賃料、設備費、広告宣伝費など、創業時に必要な幅広い経費が補助対象です。</p><p>補助率は対象経費の<strong>1/2で、上限20万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>板橋区内で新規創業する方、または創業後1年以内の方</p><p>区が実施する創業セミナー等を受講済みであること</p><p>個人事業主または中小企業者であること</p><p>住民税の滞納がないこと</p></div><p>板橋区産業振興課の窓口で事前相談を行い、申請書類を提出します。事業計画書の作成が必要です。</p><p><span class="marker-green">区の創業支援セミナーの受講が申請の前提条件</span>となっています。セミナーでは事業計画の立て方や資金調達のノウハウも学べます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の1/2、<strong>上限20万円</strong>が補助されます。店舗・事務所の賃料、内装工事費、広告宣伝費、設備費などが対象です。</p><p><span class="marker">交付決定前に支払った経費は補助対象外</span>となります。必ず交付決定後に経費の支出を行ってください。</p><div class="note-box">板橋区では創業支援融資のあっせんも行っており、低利率での借り入れが可能です。補助金と合わせて活用することで、創業時の資金面の不安を軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.itabashi.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 練馬区（東京都）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'nerima-child-medical',
    title: '練馬区 子ども医療費助成制度',
    organization: '練馬区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['練馬区', '子ども医療費', '助成金'],
    eligibility: '練馬区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '練馬区が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>練馬区は23区で最も広い面積を持ち、石神井公園や光が丘公園など緑豊かな住環境が魅力です。子育て世帯が多く暮らすエリアで、医療費助成は特に重要な支援策となっています。</p><p><span class="marker-green">所得制限なし</span>で、練馬区在住のすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>練馬区に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入している必要があります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーがわかるもの</p></div><p>練馬区役所こども家庭部または各出張所で申請します。<strong>出生届・転入届と同時に手続き</strong>するのがスムーズです。オンライン申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば医療証を見せるだけで窓口負担ゼロです。</p><p><span class="marker">都外受診の場合は償還払い</span>となります。領収書と健康保険組合からの支給決定通知書を添えて申請してください。</p><div class="highlight-box">練馬区は子ども医療費助成に加え、第3子以降の保育料無料化なども実施しています。子育て支援制度を幅広くチェックして活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'nerima-education-scholarship',
    title: '練馬区 奨学資金制度',
    organization: '練馬区',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '東京都',
    tags: ['練馬区', '奨学金', '教育支援'],
    eligibility: '練馬区に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年4月〜5月',
    description: '練馬区が実施する奨学資金制度です。経済的理由により修学が困難な高校生・大学生に対し、返還不要の奨学金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 奨学資金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生に対し、返還不要の給付型奨学金</span>を支給する制度です。</p><p>高校生には月額8,000円、大学生等には月額15,000〜30,000円が支給されます。貸与ではなく給付のため、卒業後の返済負担がないことが大きな特長です。教育の機会均等を図る重要な制度として、多くの学生に利用されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>練馬区に1年以上継続して住所を有する世帯の学生</p><p>高等学校、大学、短期大学、専門学校等に在学中</p><p>世帯の所得が区の定める基準額以下であること</p><p>学業成績が一定の基準を満たすこと</p></div><p>毎年4月〜5月の募集期間中に、練馬区教育委員会に申請書類を提出します。募集人数に限りがあるため選考があります。</p><p><span class="marker-green">他の奨学金（国・都の制度）との併給は原則不可</span>ですが、日本学生支援機構の給付型奨学金とは併給可能な場合があります。詳細は窓口で確認してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は在学する学校種別により異なります。<strong>高校生は月額8,000円、大学生は月額15,000〜30,000円</strong>が目安です。</p><p><span class="marker">返還不要の給付型</span>のため、卒業後に返済の心配がありません。年度ごとの継続手続きが必要です。</p><div class="note-box">募集人数に限りがあり、毎年選考が行われます。申請期間は短いため、募集開始前から必要書類を準備しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'nerima-housing-seismic',
    title: '練馬区 木造住宅耐震改修助成制度',
    organization: '練馬区',
    type: 'local',
    maxAmount: '最大130万円',
    maxAmountNum: 130,
    category: 'housing',
    prefecture: '東京都',
    tags: ['練馬区', '耐震改修', '住宅助成'],
    eligibility: '練馬区内に所在する昭和56年5月以前の木造住宅の所有者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '練馬区が実施する木造住宅耐震改修助成制度です。旧耐震基準の木造住宅の耐震化を最大130万円まで助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>練馬区 木造住宅耐震改修助成制度は、<span class="marker">昭和56年5月以前に建築された木造住宅の耐震改修工事費用</span>を助成する制度です。</p><p>首都直下地震への備えとして、練馬区では旧耐震基準の木造住宅の耐震化を積極的に推進しています。耐震診断から改修工事まで一貫した支援体制を整えており、住まいの安全確保を後押ししています。</p><p>助成額は<strong>最大130万円</strong>で、住宅の耐震性向上に大きく貢献します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>昭和56年5月31日以前に着工された木造住宅</p><p>耐震診断で倒壊の危険性があると判定された住宅</p><p>所有者自らが居住していること</p><p>住民税の滞納がないこと</p></div><p>まず練馬区の無料耐震診断を受け、その結果に基づいて改修計画を作成します。工事着手前に助成申請を行ってください。</p><p><span class="marker-green">耐震診断は無料で受けることができます</span>。まずは区の建築課に相談して、診断を受けるところから始めましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事にかかる費用の一部を助成し、<strong>上限は130万円</strong>です。工事内容や住宅の規模によって助成額が異なります。</p><p><span class="marker">工事前に必ず交付決定を受けてから着工</span>してください。事後申請は認められません。</p><div class="highlight-box">練馬区では耐震シェルターや耐震ベッドの設置助成（上限30万円程度）も行っています。建物全体の改修が難しい場合の選択肢として検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nerima.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 足立区（東京都）3件: childcare, living, employment
  // ────────────────────────────────────────────────
  {
    slug: 'adachi-child-medical',
    title: '足立区 子ども医療費助成制度',
    organization: '足立区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['足立区', '子ども医療費', '助成金'],
    eligibility: '足立区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '足立区が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>足立区は東京の北東部に位置し、近年は北千住エリアを中心に再開発が進み、子育て世帯からの注目が高まっています。通院・入院・調剤のすべてが助成対象で、安心して子どもの医療を受けることができます。</p><p><span class="marker-green">所得制限なし</span>で、足立区在住のすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>足立区に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（都外受診時の払い戻し用）</p></div><p>足立区役所親子支援課または各区民事務所で申請できます。<strong>出生届や転入届と同時の手続き</strong>がおすすめです。申請後、医療証が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば医療証の提示で窓口負担がゼロになります。</p><p><span class="marker">都外の医療機関を受診した場合は、償還払い</span>の手続きが必要です。領収書の原本を添えて申請してください。</p><div class="note-box">足立区では「あだちっ子医療費助成」の名称でも知られています。保険適用外の費用や入院時の食事代は助成の対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'adachi-living-emergency',
    title: '足立区 緊急小口資金・生活福祉資金貸付相談',
    organization: '足立区',
    type: 'local',
    maxAmount: '最大10万円（緊急小口）',
    maxAmountNum: 10,
    category: 'living',
    prefecture: '東京都',
    tags: ['足立区', '生活支援', '緊急資金'],
    eligibility: '足立区に住所を有し、一時的に生活に困窮している低所得世帯',
    applicationPeriod: '通年',
    description: '足立区が社会福祉協議会と連携して実施する生活福祉資金貸付制度です。緊急の生活費として最大10万円を無利子で貸し付けます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 緊急小口資金は、<span class="marker">一時的に生活が困難になった低所得世帯に対し、緊急かつ一時的な生活費を無利子で貸し付ける</span>制度です。</p><p>病気やケガ、失業などで急に収入が減った場合や、予想外の出費が発生した場合に利用できます。足立区社会福祉協議会が窓口となり、相談から貸付まで一貫したサポートを提供しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用できるケース"><p>医療費や介護費の臨時的な支出が必要な場合</p><p>給与の盗難・紛失による一時的な生活困窮</p><p>火災等の被災による生活費の緊急支出</p><p>公共料金の滞納による生活への支障</p></div><p>足立区社会福祉協議会の窓口に相談してください。収入と支出の状況を確認し、貸付の可否が判断されます。</p><p><span class="marker-green">連帯保証人は不要で、無利子</span>での貸付です。ただし、返済の見込みがあることが条件となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急小口資金の貸付上限は<strong>10万円以内</strong>です。返済期間は据置期間2ヶ月を経た後、12ヶ月以内です。</p><p><span class="marker">あくまで「貸付」であり、返済が必要</span>です。給付金とは異なりますので注意してください。</p><div class="highlight-box">生活全般の相談も受け付けています。「生活が苦しい」「家賃が払えない」などの悩みがある場合は、まず足立区の生活支援窓口「くらしとしごとの相談センター」に相談しましょう。住居確保給付金などの給付制度につながる場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'adachi-startup-support',
    title: '足立区 創業プラン支援事業補助金',
    organization: '足立区',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['足立区', '創業支援', '補助金'],
    eligibility: '足立区内で新たに創業する方、または創業後5年以内の方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '足立区が実施する創業プラン支援事業補助金です。区内での創業にかかる経費を最大50万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>足立区 創業プラン支援事業補助金は、<span class="marker">足立区内で新たに創業する方や創業後5年以内の事業者</span>を対象に、事業にかかる経費の一部を補助する制度です。</p><p>足立区は「足立区創業プラン・コンペ」を開催するなど、創業支援に力を入れています。コンペの入選者にはより手厚い補助が受けられるなど、意欲ある起業家を応援する仕組みが整っています。</p><p>補助率は対象経費の<strong>2/3で、上限50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>足立区内で創業する、または創業後5年以内であること</p><p>事業計画書を提出し、審査に通ること</p><p>区の創業セミナーを受講済み、または認定創業支援を受けていること</p><p>住民税・法人税の滞納がないこと</p></div><p>足立区産業振興課に事業計画書を提出し、審査を受けます。計画の実現可能性や地域への貢献度が評価されます。</p><p><span class="marker-green">足立区のビジネスサポートセンターでは事業計画書の作成支援</span>も行っています。無料で専門家に相談できるので、ぜひ活用してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の2/3、<strong>上限50万円</strong>が補助されます。店舗の内装工事費、設備費、広告宣伝費、賃料（最大6ヶ月分）などが対象です。</p><p><span class="marker">創業プラン・コンペの入選者はさらに優遇</span>され、上限額が引き上げられる場合があります。</p><div class="note-box">補助金の交付は実績報告後の精算払いとなります。事業完了後に報告書と領収書等の証拠書類を提出し、確認後に補助金が振り込まれます。</div>'
      }
    ],
    officialUrl: 'https://www.city.adachi.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 葛飾区（東京都）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'katsushika-child-medical',
    title: '葛飾区 子ども医療費助成制度',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['葛飾区', '子ども医療費', '助成金'],
    eligibility: '葛飾区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '葛飾区が実施する子ども医療費助成制度です。18歳までの子どもの保険診療の自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>葛飾区は「男はつらいよ」の舞台・柴又や堀切菖蒲園で知られる下町エリアです。人情味あふれる地域性を活かし、子育て世帯への支援も充実しています。通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限なし</span>で、葛飾区在住のすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>葛飾区に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入している必要があります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（都外受診時の払い戻し用）</p></div><p>葛飾区役所子育て支援課または各区民事務所で申請します。<strong>出生届・転入届と同時の手続き</strong>が便利です。申請後、子ども医療証が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば医療証を提示するだけで窓口負担がゼロになります。</p><p><span class="marker">都外受診の場合は償還払い</span>の手続きが必要です。受診日の翌月から5年以内に申請してください。</p><div class="highlight-box">葛飾区は子ども医療費助成のほか、出産費用の一部助成や産後ケア事業なども実施しています。妊娠・出産から子育てまで一貫した支援を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'katsushika-housing-reform',
    title: '葛飾区 住まいの改修助成制度',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '東京都',
    tags: ['葛飾区', '住宅リフォーム', '助成金'],
    eligibility: '葛飾区内に居住する住宅の所有者で、リフォーム工事を行う方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '葛飾区が実施する住まいの改修助成制度です。バリアフリー改修や省エネリフォームに対して最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 住まいの改修助成制度は、<span class="marker">区民が居住する住宅のバリアフリー化・省エネ改修・安全対策工事</span>の費用の一部を助成する制度です。</p><p>高齢者や障がいのある方が安心して暮らせるよう手すりの設置や段差解消を行ったり、断熱化で光熱費を削減したりと、快適で安全な住環境づくりを支援しています。</p><p>助成額は対象工事費の<strong>20%で、上限30万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象工事"><p>バリアフリー改修（手すり設置、段差解消、トイレ・浴室改修）</p><p>省エネ改修（断熱窓、高効率給湯器への交換）</p><p>耐震改修（昭和56年以前の住宅の補強）</p><p>防犯対策（防犯カメラ、防犯ガラスの設置）</p></div><p>葛飾区都市整備部住環境整備課に申請します。<span class="marker-green">工事着手前の申請が必須</span>で、交付決定後に工事を開始してください。</p><p>区内の施工業者による工事が原則条件です。見積書と工事計画書を添えて申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の20%、<strong>上限30万円</strong>が助成されます。対象工事費が5万円以上の工事が助成の対象です。</p><p><span class="marker">年度ごとに予算が設定されており、先着順で受付終了</span>となります。早めの申請がおすすめです。</p><div class="note-box">介護保険の住宅改修費支給制度（上限20万円）との併用が可能な場合があります。対象工事が重なる場合は、区の窓口とケアマネージャーの双方に相談して最適な申請方法を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'katsushika-fertility-treatment',
    title: '葛飾区 不妊治療費助成制度',
    organization: '葛飾区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['葛飾区', '不妊治療', '医療費助成'],
    eligibility: '葛飾区に住所を有する夫婦（事実婚含む）で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了後60日以内に申請）',
    description: '葛飾区が実施する不妊治療費助成制度です。保険適用後の自己負担分に対し最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>葛飾区 不妊治療費助成制度は、<span class="marker">保険適用の不妊治療にかかる自己負担分を助成する区独自の上乗せ制度</span>です。</p><p>2022年4月から不妊治療が保険適用となりましたが、体外受精や顕微授精などの高額な治療では自己負担が大きくなることがあります。葛飾区ではこの負担を軽減するため、1回の治療につき<strong>最大10万円</strong>の助成を実施しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成の要件"><p>夫婦のいずれかが葛飾区に住所を有すること</p><p>保険適用の不妊治療（体外受精・顕微授精等）を受けていること</p><p>治療終了日から60日以内に申請すること</p></div><p>葛飾区保健所や保健センターの窓口で申請します。医療機関の治療証明書と領収書が必要です。</p><p><span class="marker-green">事実婚のカップルも対象</span>です。申請期限を過ぎると助成を受けられないため、治療が終了したら速やかに申請しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき、保険適用後の自己負担額に対し<strong>最大10万円</strong>が助成されます。体外受精・顕微授精が主な対象です。</p><p><span class="marker">年度内の助成回数に上限はなく、治療ごとに申請が可能</span>です。治療の区切りについては医療機関に確認してください。</p><div class="highlight-box">葛飾区では不妊・不育に関する専門相談も実施しています。治療の進め方や費用面の不安がある場合は、一人で悩まず相談窓口を利用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.katsushika.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 江戸川区（東京都）3件: childcare, education, living
  // ────────────────────────────────────────────────
  {
    slug: 'edogawa-child-medical',
    title: '江戸川区 子ども医療費助成制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['江戸川区', '子ども医療費', '助成金'],
    eligibility: '江戸川区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '江戸川区が実施する子ども医療費助成制度です。18歳までの子どもの保険診療自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>江戸川区は23区内でも子どもの数が多い区として知られ、子育て支援には特に力を入れています。区独自の「乳児養育手当（ゼロ歳児手当）」など先進的な子育て施策でも有名です。通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限なし</span>で、江戸川区に住むすべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>江戸川区に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（都外受診時の払い戻し用）</p></div><p>江戸川区役所子育て支援課または各事務所で申請します。<strong>出生届・転入届と同時に手続き</strong>できます。電子申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば医療証の提示で窓口負担がなくなります。</p><p><span class="marker">都外受診の場合は償還払い</span>の手続きが必要です。領収書を保管して後日申請してください。</p><div class="highlight-box">江戸川区は子ども医療費助成に加え、独自の「乳児養育手当」（月額13,000円）や「私立幼稚園補助金」など、手厚い子育て支援策を多数用意しています。ぜひチェックしてみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'edogawa-education-support',
    title: '江戸川区 就学援助制度',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '年間最大約15万円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '東京都',
    tags: ['江戸川区', '就学援助', '教育支援'],
    eligibility: '江戸川区立小中学校に在籍する児童・生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '江戸川区が実施する就学援助制度です。経済的に困難な世帯の児童・生徒に学用品費や給食費等を援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区 就学援助制度は、<span class="marker">経済的理由により就学が困難な児童・生徒の保護者</span>に対し、学校生活に必要な費用を援助する制度です。</p><p>学用品費、通学用品費、校外活動費、修学旅行費、学校給食費、新入学用品費など、就学に必要な幅広い費用が援助対象です。子どもの数が多い江戸川区ならではの手厚い支援体制が整っています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受けている世帯（要保護者）</p><p>生活保護に準ずる程度に経済的にお困りの世帯（準要保護者）</p><p>前年の世帯所得が江戸川区の定める基準額以下の世帯</p></div><p>毎年4月に学校を通じて配布される申請書に記入し、学校または江戸川区教育委員会に提出します。</p><p><span class="marker-green">年度途中の転入や家計の急変による申請も受け付けています</span>。状況が変わった場合は早めに相談しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>費目ごとに定められた金額が支給されます。<strong>給食費は実費全額が支給</strong>され、学用品費は小学校で年間約1万円、中学校で年間約2万円が目安です。</p><p><span class="marker">新入学用品費は入学前の3月に前倒し支給が可能</span>です。小学校入学時は約5万円、中学校入学時は約6万円が支給されます。</p><div class="note-box">申請は毎年度行う必要があります。前年度の認定は自動的に継続されないため、新年度の案内が届いたら忘れずに手続きしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'edogawa-senior-support',
    title: '江戸川区 熟年者激励手当（くつろぎの家事業）',
    organization: '江戸川区',
    type: 'local',
    maxAmount: '年間最大約6万円相当',
    maxAmountNum: 6,
    category: 'living',
    prefecture: '東京都',
    tags: ['江戸川区', '高齢者支援', '生活支援'],
    eligibility: '江戸川区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '江戸川区が実施する高齢者向け生活支援事業です。ひとり暮らしの高齢者に配食サービスや見守り支援を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>江戸川区の高齢者生活支援事業は、<span class="marker">65歳以上のひとり暮らしや高齢者のみの世帯</span>を対象に、食事の提供や見守り、緊急通報などのサービスを提供する事業です。</p><p>江戸川区は「熟年者」という独自の呼称を使い、高齢者が地域で生き生きと暮らせるよう多角的な支援を行っています。「くつろぎの家」と呼ばれる地域の居場所づくりや、配食サービスによる安否確認など、温かみのある支援が特徴です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス"><p>配食サービス（安否確認を兼ねた食事の配達）</p><p>緊急通報システム（ボタンひとつで通報できる端末の貸与）</p><p>くつろぎの家（地域の高齢者交流拠点の利用）</p><p>友愛訪問（ボランティアによる定期的な見守り訪問）</p></div><p>江戸川区の熟年相談室（地域包括支援センター）に相談してください。お住まいの地域を担当する相談室が案内されます。</p><p><span class="marker-green">介護認定の有無にかかわらず利用できるサービス</span>が多く、元気な高齢者の方も気軽に相談できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり数百円の自己負担</strong>で栄養バランスの取れた食事が届きます。緊急通報システムは住民税非課税世帯であれば無料で利用可能です。</p><p><span class="marker">くつろぎの家は区内に100カ所以上</span>設置されており、身近な地域で仲間づくりや軽体操、趣味活動に参加できます。</p><div class="highlight-box">江戸川区では独自の「熟年しあわせ計画」に基づき、高齢者の健康づくりから介護予防、見守りまで一貫した支援を行っています。まずはお近くの熟年相談室にお気軽にご連絡ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.edogawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
];
