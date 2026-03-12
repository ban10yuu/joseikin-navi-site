import { Grant } from '@/lib/types';

export const cityGrantsBatch45: Grant[] = [
  // ────────────────────────────────────────────────
  // 金沢市（石川県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'kanazawa-childcare-subsidy',
    title: '金沢市 子育て支援助成金',
    organization: '金沢市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '石川県',
    tags: ['金沢市', '子育て支援', '助成金'],
    eligibility: '金沢市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '金沢市が実施する子育て支援助成金です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 子育て支援助成金は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療における自己負担分を助成する制度です。</p><p>加賀百万石の城下町として栄え、兼六園や金箔工芸で知られる金沢市は、北陸新幹線の開業以降さらに活気づいています。歴史ある街並みを守りながら、子育て世帯への支援にも力を入れており、通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限は設けられておらず、金沢市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>金沢市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>金沢市役所こども政策課の窓口で申請できます。出生届や転入届と同時に手続きするとスムーズです。申請完了後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。石川県内の医療機関では受給資格証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い、後日償還払いの手続き</span>を行う必要があります。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-birth-bonus',
    title: '金沢市 出産祝い金支給事業',
    organization: '金沢市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '石川県',
    tags: ['金沢市', '出産祝い金', '子育て支援'],
    eligibility: '金沢市に住所を有し、子どもを出産した方',
    applicationPeriod: '出生届提出後〜生後6か月以内',
    description: '金沢市が実施する出産祝い金支給事業です。出産した世帯に対し最大10万円の祝い金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 出産祝い金支給事業は、<span class="marker">金沢市に住民登録のある方が子どもを出産した際</span>に祝い金を支給する制度です。</p><p>北陸の文化都市・金沢は、伝統工芸や茶道・能楽が息づく一方で、金沢大学をはじめとする教育・研究機関も集積しています。出生数の減少に歯止めをかけるため、経済的負担の軽減を通じた出産・子育て環境の整備に取り組んでいます。</p><p>支給額は<strong>第1子・第2子で5万円、第3子以降で10万円</strong>です。<span class="marker-green">所得制限はなく、すべての対象世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出産日時点で金沢市に住民登録があること</p><p>出生届が金沢市に提出されていること</p><p>生後6か月以内に申請すること</p></div><p>金沢市役所こども政策課の窓口で申請します。出生届と同時に手続きすると便利です。</p><p><span class="marker">申請には保護者の本人確認書類と振込先口座情報が必要</span>です。郵送での申請にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第1子・第2子は<strong>5万円</strong>、第3子以降は<strong>10万円</strong>が支給されます。多子世帯ほど手厚い支援となっています。</p><p><span class="marker">申請期限は出生日から6か月以内</span>です。期限を過ぎると受給できなくなるため、早めの手続きをおすすめします。</p><div class="highlight-box">金沢市では出産祝い金のほか、産後ケア事業（産後デイケア・訪問型）や新生児聴覚検査費用の助成なども実施しています。出産前後の包括的な支援体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-housing-purchase',
    title: '金沢市 住宅取得支援補助金',
    organization: '金沢市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '石川県',
    tags: ['金沢市', '住宅取得', '補助金'],
    eligibility: '金沢市内に新たに住宅を取得する若年世帯・子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '金沢市が実施する住宅取得支援補助金です。市内に住宅を取得する若年・子育て世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 住宅取得支援補助金は、<span class="marker">市内に新たに住宅を購入または新築する若年世帯・子育て世帯</span>を対象に費用の一部を補助する制度です。</p><p>金沢市は北陸新幹線の開業で利便性が飛躍的に向上し、移住・定住先としても人気が高まっています。金沢城や兼六園の周辺に広がる歴史的な市街地に加え、郊外にはゆとりある住宅地も整備されています。</p><p>補助額は基本額30万円に条件加算があり、<strong>最大50万円</strong>です。<span class="marker-green">まちなか区域での取得にはさらに加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>夫婦いずれかが40歳未満、または18歳未満の子がいる世帯</p><p>金沢市内に住宅を取得し、自ら居住すること</p><p>市税の滞納がないこと</p><p>住宅取得後1年以内に申請すること</p></div><p>金沢市役所住宅政策課に申請書と必要書類を提出します。売買契約書・登記事項証明書・住民票などが必要です。</p><p><span class="marker">まちなか区域や公共交通沿線での取得はポイントが加算されます</span>。コンパクトシティ推進の一環として中心部への定住が優遇されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額は<strong>30万円</strong>で、まちなか区域での取得で+10万円、子育て世帯で+10万円の加算があり、<strong>最大50万円</strong>となります。</p><p><span class="marker">中古住宅の取得も対象</span>ですが、耐震基準を満たしていることが条件です。旧耐震基準の住宅は耐震改修を行うことで対象となります。</p><div class="note-box">投資用物件や別荘は対象外です。5年以内に転出した場合は補助金の返還を求められることがあります。石川県や国の住宅関連補助との併用可否は窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-senior-dental',
    title: '金沢市 高齢者歯科健診助成事業',
    organization: '金沢市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '石川県',
    tags: ['金沢市', '歯科健診', '高齢者医療'],
    eligibility: '金沢市に住所を有する70歳以上の方',
    applicationPeriod: '通年',
    description: '金沢市が実施する高齢者歯科健診助成事業です。70歳以上の高齢者に無料の歯科健診を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 高齢者歯科健診助成事業は、<span class="marker">70歳以上の高齢者を対象に歯科健診の費用を全額助成</span>する制度です。</p><p>口腔の健康は全身の健康に深く関わっており、特に高齢期における歯周病や咀嚼機能の低下は、誤嚥性肺炎や低栄養のリスクを高めます。金沢市では「8020運動」（80歳で20本の歯を保つ）を推進しており、定期的な歯科健診を通じた口腔ケアの意識向上を図っています。</p><p><span class="marker-green">年1回、市内指定歯科医療機関で無料で受診できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>金沢市に住民登録がある70歳以上の方が対象です。対象者には市から受診券が郵送されます。</p><div class="summary-box" data-title="受診の流れ"><p>市から届く受診券を確認する</p><p>市内の指定歯科医療機関に予約する</p><p>受診券と健康保険証を持参して受診する</p></div><p><strong>事前の申請は不要</strong>で、受診券が届いたら直接歯科医療機関を予約してください。受診券を紛失した場合は金沢市保健所に連絡すれば再発行されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>歯科健診の費用は<strong>全額市が負担し、自己負担はありません</strong>。健診内容は口腔内診査、歯周病検査、咀嚼機能の確認などです。</p><p><span class="marker">健診で治療が必要と判断された場合の治療費は別途自己負担</span>となります。健診結果をもとに早期治療につなげることが重要です。</p><div class="highlight-box">金沢市では歯科健診のほか、口腔機能向上教室やフレイル予防講座なども開催しています。兼六園の四季を楽しみながら健康に暮らせるよう、口腔ケアから始めてみましょう。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-scholarship-v2',
    title: '金沢市 奨学金制度',
    organization: '金沢市',
    type: 'local',
    maxAmount: '月額最大3万円（給付型）',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '石川県',
    tags: ['金沢市', '奨学金', '教育支援'],
    eligibility: '金沢市に住所を有する高校生・大学生等の保護者で、経済的支援が必要な方',
    applicationPeriod: '毎年4月（年度初め）',
    description: '金沢市が実施する奨学金制度です。経済的に困難な世帯の学生に月額最大3万円を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対し、返還不要の給付型奨学金を支給する制度です。</p><p>金沢市には金沢大学、金沢美術工芸大学、金沢工業大学など多くの高等教育機関が集まっており、学都としての歴史があります。加賀藩の時代から学問を奨励してきた伝統を受け継ぎ、経済的理由で学びの機会を失わないよう支援しています。</p><p>月額は高校生<strong>1万5,000円</strong>、大学生等<strong>3万円</strong>です。<span class="marker-green">返還不要の給付型で、卒業後の負担がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>金沢市に住所を有する保護者の子であること</p><p>高等学校、大学、専門学校等に在学中であること</p><p>世帯収入が基準額以下であること</p><p>学業成績が一定の基準を満たすこと</p></div><p>毎年4月に金沢市教育委員会学校教育課で募集が行われます。在学証明書、成績証明書、所得証明書などを添えて申請してください。</p><p><span class="marker">募集枠には限りがあるため、選考により採否が決定されます</span>。成績要件と家計基準の両面で審査が行われます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>高校生は月額<strong>1万5,000円</strong>（年間18万円）、大学生等は月額<strong>3万円</strong>（年間36万円）が支給されます。</p><p><span class="marker">他の奨学金との併給制限がある場合があります</span>。日本学生支援機構の奨学金との併用可否は事前に確認してください。</p><div class="note-box">奨学金の支給は年度ごとの審査・更新制です。留年や退学した場合は支給が停止されます。金沢市では学習支援ボランティアの紹介なども行っており、勉学環境の総合的な支援を目指しています。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-sme-support',
    title: '金沢市 中小企業振興補助金',
    organization: '金沢市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '石川県',
    tags: ['金沢市', '中小企業支援', '補助金'],
    eligibility: '金沢市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '金沢市が実施する中小企業振興補助金です。設備投資や販路開拓にかかる費用を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 中小企業振興補助金は、<span class="marker">市内の中小企業者が行う設備投資や販路開拓</span>に対して費用の一部を補助する制度です。</p><p>金沢市は伝統工芸（金箔・加賀友禅・九谷焼など）と最先端のIT産業が共存するユニークな経済構造を持っています。北陸新幹線の開業でビジネス環境が大きく変化する中、既存企業の競争力強化と経営革新を後押しする制度として活用されています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。<span class="marker-green">製造業・伝統産業・観光関連事業は優先的に採択されます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>金沢市内に事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>事業計画書を提出できること</p><p>補助対象事業を年度内に完了できること</p></div><p>金沢市役所商工業振興課に事業計画書と申請書を提出します。審査では事業の実現可能性や地域経済への波及効果が評価されます。</p><p><span class="marker">金沢商工会議所や石川県産業創出支援機構の経営相談を事前に受けることをおすすめ</span>します。計画のブラッシュアップに役立ちます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。新規設備の導入費、展示会出展費、ECサイト構築費、ブランディング費用などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。必ず交付決定後に事業を開始してください。</p><div class="highlight-box">金沢市では伝統工芸の後継者育成や、クラフトツーリズムの推進にも取り組んでいます。伝統産業と新技術の融合を目指す事業は、この補助金の活用に特に適しています。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-nursing-equipment',
    title: '金沢市 介護用品支給事業',
    organization: '金沢市',
    type: 'local',
    maxAmount: '月額最大6,250円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '石川県',
    tags: ['金沢市', '介護用品', '支給事業'],
    eligibility: '金沢市に住所を有し、在宅で要介護4・5の方を介護している家族',
    applicationPeriod: '通年',
    description: '金沢市が実施する介護用品支給事業です。在宅介護を行う家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 介護用品支給事業は、<span class="marker">在宅で要介護4・5の認定を受けた方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>金沢市は高齢化が進む中でも「住み慣れた地域で暮らし続けられる」まちづくりを目指しています。兼六園に代表される美しい街並みの中で、在宅介護を担うご家族の経済的・身体的負担を少しでも軽減するための支援策です。</p><p>月額<strong>6,250円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>金沢市に住民登録があること</p><p>要介護4または5の認定を受けた方と同居し在宅介護していること</p><p>介護を受ける方が市民税非課税世帯に属すること</p><p>介護保険施設に入所していないこと</p></div><p>金沢市役所介護保険課または各地区の地域包括支援センターで申請します。介護保険証と世帯の課税状況がわかる書類が必要です。</p><p><span class="marker">申請後、毎月カタログから必要な介護用品を選んで注文する仕組み</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,250円相当</strong>の介護用品（紙おむつ、尿取りパッド、使い捨て手袋、清拭剤など）が支給されます。</p><p><span class="marker">入院中や施設入所中は支給が停止</span>されます。退院・退所後に再開するには届出が必要です。</p><div class="note-box">介護用品の支給とあわせて、金沢市では介護者のためのリフレッシュ事業や介護教室なども開催しています。一人で抱え込まず、地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-elderly-support',
    title: '金沢市 高齢者見守り支援事業',
    organization: '金沢市',
    type: 'local',
    maxAmount: '無料（機器貸与）',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '石川県',
    tags: ['金沢市', '高齢者見守り', '生活支援'],
    eligibility: '金沢市に住所を有する65歳以上のひとり暮らし高齢者',
    applicationPeriod: '通年',
    description: '金沢市が実施する高齢者見守り支援事業です。ひとり暮らしの高齢者に緊急通報装置の貸与等を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 高齢者見守り支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者等を対象</span>に、緊急通報装置の貸与や定期的な安否確認を行う制度です。</p><p>金沢市は古くからの地域コミュニティが根付く街ですが、高齢化と核家族化が進む中、ひとり暮らし高齢者への見守り体制の強化が課題となっています。万が一の急病や転倒に備え、緊急通報装置を無料で貸与することで安心して暮らせる環境を整えています。</p><p><span class="marker-green">装置の設置費用・月額利用料ともに市が負担し、利用者の自己負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>金沢市に住民登録がある65歳以上のひとり暮らしの方、または高齢者のみの世帯で健康上の不安がある方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>本人確認書類</p><p>緊急連絡先（親族等）の情報</p><p>かかりつけ医の情報</p></div><p>金沢市役所長寿福祉課または各地区の地域包括支援センターで申請できます。<strong>民生委員の訪問調査</strong>を経て利用の可否が決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>緊急通報装置の<strong>設置費用・月額利用料は全額市が負担</strong>します。ボタンを押すだけでコールセンターに通報でき、必要に応じて救急車の手配が行われます。</p><p><span class="marker">装置にはセンサー機能も付いており、一定時間動きがない場合に自動通報</span>する仕組みです。</p><div class="highlight-box">金沢市では緊急通報装置のほか、配食サービスによる安否確認、地域のサロン活動なども推進しています。雪深い冬場の見守りにも力を入れており、除雪支援サービスとの組み合わせもご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-seismic-diagnosis',
    title: '金沢市 木造住宅耐震診断助成事業',
    organization: '金沢市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '石川県',
    tags: ['金沢市', '耐震診断', '防災'],
    eligibility: '金沢市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '金沢市が実施する木造住宅耐震診断助成事業です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 木造住宅耐震診断助成事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>2024年の能登半島地震は石川県全域に大きな被害をもたらし、金沢市でも住宅被害が発生しました。この経験を踏まえ、旧耐震基準の住宅の安全性を確認し、必要に応じて耐震改修につなげるための診断助成を強化しています。</p><p><span class="marker-green">診断費用は全額市が負担し、申請者の自己負担はゼロ</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>金沢市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>在来軸組工法で建てられていること</p></div><p>金沢市役所建築指導課に申請書を提出します。申請後、市が派遣する耐震診断士が現地調査を行います。</p><p><span class="marker">診断にはお住まいの方の立会いが必要</span>です。建築図面がある場合は持参するとスムーズに進みます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断の費用は<strong>全額金沢市が負担</strong>します。通常5〜10万円程度の診断費用を自己負担なしで受けられます。</p><p><span class="marker">診断の結果、耐震性が不足している場合は耐震改修補助（別制度）の利用をおすすめ</span>します。金沢市では耐震改修工事にも最大100万円の補助があります。</p><div class="note-box">能登半島地震を教訓に、金沢市では耐震化の重要性がより広く認識されるようになっています。診断は無料ですので、古い住宅にお住まいの方はまず耐震診断から始めてください。毎年の申込枠に限りがあります。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 福井市（福井県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'fukui-city-childcare-subsidy',
    title: '福井市 子育て支援医療費助成制度',
    organization: '福井市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福井県',
    tags: ['福井市', '子育て支援', '医療費助成'],
    eligibility: '福井市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '福井市が実施する子育て支援医療費助成制度です。高校卒業相当年齢までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 子育て支援医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療における自己負担分を助成する制度です。</p><p>福井市は「幸福度日本一」の調査結果で知られる福井県の県庁所在地です。共働き率が全国トップクラスで、子育てと仕事の両立を支援する制度が充実しています。高校卒業相当まで医療費を助成することで、長期にわたる安心を提供しています。</p><p><span class="marker-green">所得制限なしで、福井市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福井市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>福井市役所子ども福祉課の窓口で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。福井県内の医療機関では受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書を必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。福井市は三世代同居率が高く、祖父母世代を含めた子育て支援の仕組みも整っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-daycare-support',
    title: '福井市 保育料軽減助成事業',
    organization: '福井市',
    type: 'local',
    maxAmount: '第2子以降無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福井県',
    tags: ['福井市', '保育料軽減', '子育て支援'],
    eligibility: '福井市内の認可保育所等に通う子どもの保護者',
    applicationPeriod: '通年',
    description: '福井市が実施する保育料軽減助成事業です。第2子以降の保育料を無料化し子育て世帯を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 保育料軽減助成事業は、<span class="marker">市内の認可保育所・認定こども園に通う第2子以降の子ども</span>の保育料を無料にする制度です。</p><p>共働き率全国1位の福井市では、保育サービスの充実が不可欠です。2019年の幼児教育無償化（3〜5歳児）に加え、福井市独自の上乗せとして第2子以降の0〜2歳児保育料も無料化しています。恐竜博物館で有名な福井県の県庁所在地として、次世代への投資を惜しまない姿勢が表れています。</p><p><span class="marker-green">年齢や所得に関わらず、第2子以降であれば保育料が無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる施設"><p>認可保育所</p><p>認定こども園</p><p>小規模保育事業所</p><p>企業主導型保育事業所（一部）</p></div><p>入所申込み時に同時に手続きが行われるため、<strong>別途の申請は原則不要</strong>です。保育料の軽減は自動的に適用されます。</p><p><span class="marker">第2子のカウントは、同一世帯の18歳未満の子ども全員で行います</span>。上の子が小学生以上でも第2子としてカウントされます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>第2子以降の0〜2歳児クラスの保育料が無料</strong>となります。3〜5歳児は国の幼児教育無償化制度により全員無料です。</p><p><span class="marker">給食費（副食費）は別途負担</span>となりますが、年収360万円未満相当の世帯や第3子以降の子どもは副食費も免除されます。</p><div class="highlight-box">福井市は待機児童ゼロを達成しており、希望する保育施設に入りやすい環境が整っています。保育料の軽減とあわせて、安心して共働きを続けられる子育て環境が魅力です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-newlywed-rent',
    title: '福井市 新婚世帯家賃補助金',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大30万円（年間）',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '福井県',
    tags: ['福井市', '新婚家賃補助', '住宅支援'],
    eligibility: '福井市内に住所を有する新婚世帯（婚姻届提出後1年以内）',
    applicationPeriod: '毎年4月〜翌年3月（随時受付）',
    description: '福井市が実施する新婚世帯家賃補助金です。新婚世帯の住居費を年間最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 新婚世帯家賃補助金は、<span class="marker">婚姻届提出後1年以内の新婚世帯</span>を対象に、賃貸住宅の家賃を補助する制度です。</p><p>福井市は結婚支援にも積極的で、「ふく育」ブランドのもと若い世代の定住促進に取り組んでいます。家賃負担の軽減を通じて新婚生活のスタートを応援し、将来的な出産・子育てへとつなげることを目指しています。</p><p>補助額は月額最大2万5,000円で、<strong>年間最大30万円</strong>です。<span class="marker-green">夫婦ともに39歳以下、世帯年収500万円未満が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>婚姻届提出日から1年以内であること</p><p>夫婦ともに39歳以下であること</p><p>世帯年収が500万円未満であること</p><p>福井市内の賃貸住宅に居住していること</p></div><p>福井市役所まち未来創造課に申請書と賃貸借契約書の写し、婚姻届受理証明書などを提出します。</p><p><span class="marker">補助期間は最長2年間</span>で、毎年度の更新申請が必要です。引越しの場合は変更届を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>家賃から住宅手当等を差し引いた実質負担額の一部が補助され、月額<strong>最大2万5,000円</strong>（年間最大30万円）が支給されます。</p><p><span class="marker">公営住宅や社宅に入居している場合は対象外</span>です。また、親族が所有する住宅を借りている場合も対象外となります。</p><div class="note-box">福井市ではこの家賃補助のほか、結婚に伴う引越し費用の一部助成や、住宅取得時の補助制度も用意しています。新婚期から将来の住宅購入まで、段階的な住居支援が受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-infertility',
    title: '福井市 不妊治療費助成事業',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大30万円（1回あたり）',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '福井県',
    tags: ['福井市', '不妊治療', '助成金'],
    eligibility: '福井市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了日から60日以内',
    description: '福井市が実施する不妊治療費助成事業です。体外受精等の先進的不妊治療に最大30万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 不妊治療費助成事業は、<span class="marker">保険適用後の自己負担分や先進医療にかかる費用</span>を助成する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、先進医療や保険適用外の治療には依然として高額な費用がかかります。福井市では少子化対策の一環として、不妊治療に取り組む夫婦の経済的負担を軽減し、安心して治療に臨める環境を整えています。</p><p>助成額は1回の治療につき<strong>最大30万円</strong>です。<span class="marker-green">通算回数の制限は年齢により異なります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦の一方または双方が福井市に住民登録があること</p><p>法律上の婚姻をしている夫婦（事実婚含む）であること</p><p>治療開始時に妻の年齢が43歳未満であること</p><p>指定医療機関で治療を受けていること</p></div><p>福井市保健センターに申請書と医療機関の証明書、領収書を提出します。<strong>治療終了日から60日以内</strong>に申請してください。</p><p><span class="marker">福井県の助成制度との併用も可能</span>です。市と県の両方に申請できる場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大30万円</strong>が助成されます。保険適用後の自己負担分と先進医療費の合計が対象です。</p><p><span class="marker">治療開始時の妻の年齢が40歳未満なら通算6回まで、40歳以上43歳未満なら通算3回まで</span>助成が受けられます。</p><div class="note-box">男性不妊治療についても別途助成があります。不妊治療は精神的な負担も大きいため、福井市では不妊専門相談窓口も設置しています。治療費の相談だけでなく、心のケアもサポートします。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-school-lunch',
    title: '福井市 学校給食費助成事業',
    organization: '福井市',
    type: 'local',
    maxAmount: '給食費の半額助成',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '福井県',
    tags: ['福井市', '学校給食', '教育支援'],
    eligibility: '福井市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（自動適用）',
    description: '福井市が実施する学校給食費助成事業です。小中学校の給食費の半額を市が助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 学校給食費助成事業は、<span class="marker">市立小中学校に通うすべての児童生徒</span>の学校給食費の半額を市が助成する制度です。</p><p>学力テストで常に全国上位にランクインする福井県。その県庁所在地である福井市は、教育の質の高さに加え、子育て世帯の経済的負担軽減にも力を注いでいます。学校給食は食育の場でもあり、地元産の越前がにやコシヒカリを使った給食が子どもたちに好評です。</p><p><span class="marker-green">所得制限なしで全世帯が対象、別途の申請手続きも不要</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福井市立小中学校に在籍する児童生徒の保護者が自動的に対象となります。</p><div class="summary-box" data-title="助成の仕組み"><p>給食費の半額を市が負担</p><p>保護者は残りの半額のみを支払い</p><p>手続き不要で自動適用</p></div><p>給食費の徴収時に助成分が差し引かれた金額が請求されるため、<strong>別途の申請は不要</strong>です。</p><p><span class="marker">就学援助制度の認定を受けている世帯は給食費が全額免除</span>されるため、より手厚い支援が受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>小学校の給食費は月額約4,500円のうち<strong>半額の約2,250円が助成</strong>されます。中学校は月額約5,200円のうち約2,600円が助成されます。</p><p><span class="marker">アレルギー対応食についても同様に助成</span>が適用されます。アレルギーにより給食を食べられない場合は、弁当持参の際の助成はありません。</p><div class="highlight-box">福井市の学校給食は「地産地消」を推進しており、福井県産のコシヒカリを100%使用しています。給食費助成により、質の高い食育をより多くの家庭が負担なく享受できるようになっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-telework-bonus',
    title: '福井市 テレワーク移住促進補助金',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '福井県',
    tags: ['福井市', 'テレワーク', '移住促進'],
    eligibility: '福井市へ移住しテレワークで業務を継続する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '福井市が実施するテレワーク移住促進補助金です。テレワークで福井市に移住する方に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 テレワーク移住促進補助金は、<span class="marker">首都圏等から福井市へ移住し、テレワークで業務を継続する方</span>を対象に、移住に伴う費用を補助する制度です。</p><p>福井市は東京から北陸新幹線で約3時間のアクセスを実現し、テレワーク移住先として注目を集めています。恐竜博物館や一乗谷朝倉氏遺跡などの観光地も近く、豊かな自然と都市機能のバランスが魅力です。</p><p>補助額は<strong>最大50万円</strong>です。<span class="marker-green">コワーキングスペースの利用料補助も含まれます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>三大都市圏等から福井市へ転入すること</p><p>テレワークにより現在の勤務先の業務を継続すること</p><p>福井市に5年以上居住する意思があること</p><p>市税の滞納がないこと</p></div><p>福井市役所おもてなし観光推進課に申請書と在職証明書、テレワーク実施の証明書類を提出します。</p><p><span class="marker">移住前の事前相談を強くおすすめ</span>します。福井市移住サポートセンターでオンライン相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>引越し費用、住居初期費用、テレワーク環境整備費を合わせて<strong>最大50万円</strong>が補助されます。</p><p><span class="marker">5年以内に福井市から転出した場合は補助金の全額返還</span>が必要です。長期的な生活設計を立てた上で申請してください。</p><div class="note-box">福井市では移住者向けのコワーキングスペースやシェアオフィスの整備も進んでいます。お試し住宅制度を利用して、まずは短期間の滞在で街の雰囲気を体験してから移住を決めるのもおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-nursing-home-reform',
    title: '福井市 介護住宅改修支援事業',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大20万円（介護保険上乗せ）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '福井県',
    tags: ['福井市', '介護住宅改修', '補助金'],
    eligibility: '福井市に住所を有する要介護・要支援認定者で住宅改修を行う方',
    applicationPeriod: '通年',
    description: '福井市が実施する介護住宅改修支援事業です。介護保険の住宅改修費に上乗せして最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 介護住宅改修支援事業は、<span class="marker">要介護・要支援認定を受けた方が在宅生活を続けるための住宅改修</span>に対し、介護保険の住宅改修費に上乗せして補助する制度です。</p><p>福井市は三世代同居率が高い地域ですが、高齢化の進展に伴い在宅介護の環境整備がますます重要になっています。介護保険制度の住宅改修費（上限20万円の9割）に加え、市独自の上乗せ補助により、より広範な改修を可能にしています。</p><p>市の上乗せ補助は<strong>最大20万円</strong>です。<span class="marker-green">市民税非課税世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修内容"><p>手すりの取り付け</p><p>段差の解消</p><p>滑り防止のための床材変更</p><p>引き戸等への扉の取り替え</p><p>洋式便器等への取り替え</p></div><p>まず介護保険の住宅改修費の申請を行い、その上で福井市役所介護保険課に上乗せ補助の申請を行います。</p><p><span class="marker">必ず工事着手前に申請が必要</span>です。ケアマネジャーと相談の上、改修プランを作成してから申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市の上乗せ補助は<strong>最大20万円</strong>です。介護保険の住宅改修費（最大18万円支給）と合わせて、より充実した改修が可能になります。</p><p><span class="marker">市民税非課税世帯が対象で、課税世帯は利用できません</span>。世帯の課税状況は毎年度変わるため、申請時に確認してください。</p><div class="highlight-box">福井市は降雪量が多い地域のため、玄関周りのバリアフリー化や浴室の保温性向上など、冬場の生活を考慮した改修が特に重要です。理学療法士による住環境アドバイスも受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-energy-support',
    title: '福井市 省エネ家電買替支援補助金',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '福井県',
    tags: ['福井市', '省エネ家電', '生活支援'],
    eligibility: '福井市に住所を有し、省エネ性能の高い家電に買い替える方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '福井市が実施する省エネ家電買替支援補助金です。省エネ家電への買替費用を最大5万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 省エネ家電買替支援補助金は、<span class="marker">省エネ性能の高いエアコン・冷蔵庫・給湯器等</span>への買い替えに対して費用の一部を補助する制度です。</p><p>福井市は夏は高温多湿、冬は豪雪となる日本海側気候で、冷暖房のエネルギー消費量が大きい地域です。省エネ家電への買い替えを促進することで、家計の光熱費負担の軽減と地球温暖化対策の両立を図っています。</p><p>補助額は購入費用の10%で、<strong>上限5万円</strong>です。<span class="marker-green">統一省エネラベル3つ星以上の製品が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象製品"><p>エアコン（統一省エネラベル3つ星以上）</p><p>冷蔵庫（統一省エネラベル3つ星以上）</p><p>給湯器（エコキュート等の高効率給湯器）</p></div><p>福井市役所環境政策課に申請書と購入時のレシート・保証書の写しを提出します。</p><p><span class="marker">購入後3か月以内の申請が必要</span>です。市内の販売店で購入した場合に限り対象となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費用（税込）の10%以内で、<strong>上限5万円</strong>が補助されます。1世帯につき年度内1回の利用が可能です。</p><p><span class="marker">古い家電のリサイクルを適正に行うこと</span>が条件です。家電リサイクル法に基づく処理が確認できる書類の提出を求められる場合があります。</p><div class="note-box">福井市は冬の暖房費が高額になりがちです。省エネエアコンへの買い替えで年間の電気代を1万円以上削減できるケースもあります。国の省エネ補助金と併用できる場合がありますので、窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-bousai-equipment',
    title: '福井市 防災設備設置補助金',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    prefecture: '福井県',
    tags: ['福井市', '防災設備', '補助金'],
    eligibility: '福井市内の自主防災組織または町内会',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '福井市が実施する防災設備設置補助金です。地域の防災資機材の購入費用を最大10万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 防災設備設置補助金は、<span class="marker">市内の自主防災組織や町内会が防災資機材を整備する際</span>の費用を補助する制度です。</p><p>福井市は1948年の福井地震や2004年の福井豪雨、さらには毎冬の大雪など、多様な自然災害のリスクを抱えています。地域の自主防災力を高めるため、必要な資機材の整備を支援しています。</p><p>補助率は購入費の3分の2以内で、<strong>上限10万円</strong>です。<span class="marker-green">発電機、投光器、救助工具セット、防災倉庫などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる資機材"><p>発電機・投光器</p><p>救助工具セット（バール、ジャッキ等）</p><p>担架・リヤカー</p><p>防災倉庫</p><p>簡易トイレ・給水タンク</p></div><p>福井市役所危機管理課に申請書と見積書を提出します。自主防災組織の代表者名で申請してください。</p><p><span class="marker">購入前の事前申請が必要</span>です。交付決定後に購入・設置を行い、完了報告書を提出します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費の3分の2以内で、<strong>上限10万円</strong>が補助されます。1団体につき年度内1回の申請が可能です。</p><p><span class="marker">個人での申請はできません</span>。自主防災組織または町内会としての申請が必要です。組織が未結成の場合は、まず結成の手続きからご相談ください。</p><div class="note-box">福井市では防災資機材の補助とあわせて、自主防災組織向けの防災訓練支援や防災リーダー研修も実施しています。資機材を揃えるだけでなく、使い方を熟知しておくことが重要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 津市（三重県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'tsu-childcare-subsidy',
    title: '津市 子育て支援医療費助成制度',
    organization: '津市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '三重県',
    tags: ['津市', '子育て支援', '医療費助成'],
    eligibility: '津市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '津市が実施する子育て支援医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 子育て支援医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療における自己負担分を助成する制度です。</p><p>三重県の県庁所在地である津市は、伊勢湾に面した温暖な気候の港町です。日本一短い地名「津」で知られ、紀伊半島の玄関口として古くから栄えてきました。子育て世帯の安心を支えるため、通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限はなく、津市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>津市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>津市役所こども政策課または各総合支所市民福祉課の窓口で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「福祉医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。三重県内の医療機関では受給資格証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。津市は面積が広く（三重県最大）、地域によっては小児科へのアクセスに時間がかかる場合があります。かかりつけ医を早めに見つけておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-parenting-allowance',
    title: '津市 子育て応援手当',
    organization: '津市',
    type: 'local',
    maxAmount: '子ども1人あたり年額3万円',
    maxAmountNum: 3,
    category: 'childcare',
    prefecture: '三重県',
    tags: ['津市', '子育て応援', '手当'],
    eligibility: '津市に住所を有する3歳未満の子どもを養育する保護者',
    applicationPeriod: '通年（対象者に通知）',
    description: '津市が実施する子育て応援手当です。3歳未満の子どもを養育する保護者に年額3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 子育て応援手当は、<span class="marker">3歳未満の子どもを養育する保護者</span>に対し、子ども1人あたり年額3万円を支給する制度です。</p><p>津市は伊勢神宮への参拝ルートの要所として栄えた歴史を持ち、穏やかな気候と豊かな海山の幸に恵まれています。乳幼児期の子育てには何かと費用がかかるため、この手当で日用品やベビー用品の購入を支援しています。</p><p><span class="marker-green">所得制限はなく、対象年齢の子どものいるすべての世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>津市に住民登録があること</p><p>3歳未満の子どもを養育していること</p><p>子どもと同居していること</p></div><p>対象者には津市から案内通知が届きます。申請書に振込先口座情報を記入して返送するだけで手続きが完了します。</p><p><span class="marker">転入者は転入届提出後に窓口で申請</span>できます。出生届と同時の手続きも可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>子ども1人あたり<strong>年額3万円</strong>が支給されます。3歳未満の子どもが複数いる場合は人数分が支給されます。</p><p><span class="marker">支給は年1回、10月頃にまとめて振り込まれます</span>。基準日（4月1日）時点で津市に住民登録がある方が対象です。</p><div class="highlight-box">津市では子育て応援手当のほか、産後ケア事業（宿泊型・通所型）や子育て支援センターの運営なども行っています。乳幼児期から切れ目なく支援を受けられる体制が整っています。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-vacant-house',
    title: '津市 空き家活用リフォーム補助金',
    organization: '津市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '三重県',
    tags: ['津市', '空き家活用', '補助金'],
    eligibility: '津市内の空き家バンク登録物件を取得しリフォームする方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '津市が実施する空き家活用リフォーム補助金です。空き家バンク物件のリフォームに最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 空き家活用リフォーム補助金は、<span class="marker">津市空き家バンクに登録された物件を取得してリフォームする方</span>に対し、費用の一部を補助する制度です。</p><p>三重県最大の面積を持つ津市は、中心市街地から美杉地区などの山間部まで広大なエリアに空き家が点在しています。空き家の有効活用と移住・定住の促進を図るため、リフォーム費用を支援しています。</p><p>補助率は対象工事費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">子育て世帯や移住者にはさらに加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>津市空き家バンクに登録された物件を取得すること</p><p>取得後に自ら居住すること</p><p>市税の滞納がないこと</p><p>リフォーム工事費が30万円以上であること</p></div><p>津市役所都市政策課に申請書と売買契約書、工事見積書を提出します。空き家バンクへの登録が前提となるため、まず物件情報の確認からお進めください。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定前に着工した場合は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は対象工事費の2分の1以内で<strong>上限50万円</strong>です。子育て世帯（18歳未満の子がいる世帯）は+10万円の加算があります。</p><p><span class="marker">津市への転入者（市外からの移住）はさらに+10万円の加算</span>があり、最大70万円となる場合があります。</p><div class="note-box">空き家バンクの物件情報は津市のホームページで公開されています。美杉地区など山間部の物件は価格が安く、自然に囲まれた暮らしを求める移住者に人気です。物件の状態は様々ですので、事前の現地確認を必ず行ってください。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-disability-medical',
    title: '津市 障がい者医療費助成制度',
    organization: '津市',
    type: 'local',
    maxAmount: '自己負担分の全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '三重県',
    tags: ['津市', '障がい者医療', '助成金'],
    eligibility: '津市に住所を有する身体障害者手帳1〜3級、療育手帳A判定等の方',
    applicationPeriod: '通年',
    description: '津市が実施する障がい者医療費助成制度です。障がいのある方の医療費自己負担分を全額助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 障がい者医療費助成制度は、<span class="marker">身体障害者手帳1〜3級、療育手帳A判定、精神障害者保健福祉手帳1級</span>の方を対象に、保険診療の自己負担分を全額助成する制度です。</p><p>津市はバリアフリーのまちづくりを推進しており、障がいのある方が安心して医療を受けられる環境の整備に取り組んでいます。この制度により、通院・入院・調剤にかかる自己負担がなくなり、経済的な心配なく治療に専念できます。</p><p><span class="marker-green">三重県の助成制度と市の上乗せ助成を組み合わせた手厚い支援</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1〜3級をお持ちの方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級をお持ちの方</p><p>特別児童扶養手当1級相当の障がいがある方</p></div><p>津市役所障がい福祉課の窓口で、障害者手帳と健康保険証を持参して申請します。申請後、<strong>「福祉医療費受給資格証」</strong>が交付されます。</p><p><span class="marker">手帳の交付を受けたら早めに申請してください</span>。助成は申請月の初日から適用されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。三重県内の医療機関では受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。</p><div class="note-box">65歳以上で後期高齢者医療制度に移行した方も、障がいの程度に応じてこの助成制度の対象となります。保険適用外の費用や入院時の食事代は助成対象外ですのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-afterschool',
    title: '津市 放課後児童クラブ利用料助成事業',
    organization: '津市',
    type: 'local',
    maxAmount: '月額最大5,000円の軽減',
    maxAmountNum: 6,
    category: 'education',
    prefecture: '三重県',
    tags: ['津市', '放課後児童クラブ', '教育支援'],
    eligibility: '津市内の放課後児童クラブを利用する児童の保護者',
    applicationPeriod: '毎年4月（年度途中の入会も可）',
    description: '津市が実施する放課後児童クラブ利用料助成事業です。利用料を月額最大5,000円軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 放課後児童クラブ利用料助成事業は、<span class="marker">市内の放課後児童クラブ（学童保育）を利用する児童の保護者</span>に対し、利用料の一部を助成する制度です。</p><p>津市は共働き世帯が増加しており、放課後の子どもの安全な居場所の確保が重要な課題です。保護者の経済的負担を軽減することで、子どもが安心して放課後を過ごせる環境を支えています。</p><p>助成額は月額最大<strong>5,000円</strong>です。<span class="marker-green">第2子以降はさらに軽減され、第3子以降は利用料が無料</span>となる場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成の概要"><p>第1子：月額最大5,000円の軽減</p><p>第2子：利用料の半額軽減</p><p>第3子以降：利用料無料</p></div><p>放課後児童クラブへの入会申込み時に、あわせて利用料軽減の申請を行います。津市役所こども政策課が窓口です。</p><p><span class="marker">年度途中の入会でも申請可能</span>です。入会申込書と保護者の就労証明書が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>第1子は利用料から月額<strong>最大5,000円が軽減</strong>されます。第2子は半額、第3子以降は無料です。多子世帯ほど手厚い支援となっています。</p><p><span class="marker">夏休み等の長期休暇期間は別料金が設定される場合があります</span>が、軽減は通年で適用されます。</p><div class="highlight-box">津市では放課後児童クラブの拡充に力を入れており、市内全小学校区での設置を目指しています。延長保育にも対応するクラブが増えてきており、仕事の都合に合わせた利用がしやすくなっています。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-uij-turn',
    title: '津市 UIJターン就職支援補助金',
    organization: '津市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '三重県',
    tags: ['津市', 'UIJターン', '就職支援'],
    eligibility: '東京圏から津市へ移住しUIJターン就職した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '津市が実施するUIJターン就職支援補助金です。東京圏から津市へ移住し就職した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 UIJターン就職支援補助金は、<span class="marker">東京23区に在住または東京圏から23区へ通勤していた方が津市に移住</span>し、就業または創業した場合に支給される支援金です。</p><p>津市は名古屋から近鉄特急で約1時間のアクセスで、伊勢湾の温暖な気候と豊かな自然が魅力です。近年は三重大学や県立看護大学の卒業生の定着促進にも取り組んでおり、UIJターン就職を積極的に支援しています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円が加算</span>される場合もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から23区へ通勤していたこと</p><p>津市に転入後3か月以上1年以内に申請すること</p><p>三重県のマッチングサイト掲載企業への就業または創業支援事業の利用</p><p>5年以上継続して津市に居住する意思があること</p></div><p>津市役所政策課に申請書と必要書類を提出します。<strong>転入届提出後3か月以上</strong>経過してから申請できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子どもがいる世帯には子ども加算があります。</p><p><span class="marker">5年以内に津市から転出した場合は支援金の返還</span>が求められます。長期的な生活プランを立てましょう。</p><div class="note-box">テレワーク移住も一定の条件を満たせば対象です。津市では移住コーディネーターによる相談対応やお試し移住体験も用意されています。伊勢神宮や鈴鹿サーキットへのアクセスが良い津市での暮らしをぜひご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-nursing-equipment',
    title: '津市 介護用品給付事業',
    organization: '津市',
    type: 'local',
    maxAmount: '月額最大6,500円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '三重県',
    tags: ['津市', '介護用品', '給付事業'],
    eligibility: '津市に住所を有し、在宅で要介護3以上の方を介護している家族',
    applicationPeriod: '通年',
    description: '津市が実施する介護用品給付事業です。在宅介護を行う家族に紙おむつ等の介護用品を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 介護用品給付事業は、<span class="marker">在宅で要介護3以上の認定を受けた方を介護している家族</span>に対し、紙おむつ等の介護用品を給付する制度です。</p><p>津市は広大な市域に高齢者が暮らしており、特に中山間地域では在宅介護の負担が大きくなりがちです。介護用品の経済的負担を軽減することで、在宅での介護生活を支えています。</p><p>月額<strong>6,500円相当</strong>の介護用品が給付されます。<span class="marker-green">市民税非課税世帯の方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付要件"><p>津市に住民登録があること</p><p>要介護3以上の認定を受けた方と同居し在宅介護していること</p><p>介護を受ける方が市民税非課税世帯に属すること</p><p>医師により常時おむつの使用が必要と認められていること</p></div><p>津市役所介護保険課または各総合支所の窓口で申請します。介護保険証と主治医意見書が必要です。</p><p><span class="marker">給付は申請した月から開始</span>されます。毎月カタログから必要な用品を選んで注文します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,500円相当</strong>の介護用品（紙おむつ、尿取りパッド、使い捨て手袋、清拭剤など）が給付されます。</p><p><span class="marker">入院中や介護保険施設に入所中は給付が停止</span>されます。状況が変わった際は届出が必要です。</p><div class="note-box">津市では介護用品の給付とあわせて、家族介護者向けの交流会や介護技術講習会も開催しています。一人で悩まず、地域包括支援センターに気軽にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-migration-bonus',
    title: '津市 移住定住促進補助金',
    organization: '津市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '三重県',
    tags: ['津市', '移住定住', '補助金'],
    eligibility: '三重県外から津市へ移住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '津市が実施する移住定住促進補助金です。県外から津市へ移住する方の引越し費用等を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 移住定住促進補助金は、<span class="marker">三重県外から津市へ移住する方</span>を対象に、引越し費用等の一部を補助する制度です。</p><p>津市は伊勢湾に面した温暖な気候と、美杉地区をはじめとする美しい自然が共存する街です。名古屋・大阪の両方にアクセスしやすい立地の良さも魅力で、移住先としての人気が高まっています。</p><p>補助額は基本額20万円に加算があり、<strong>最大30万円</strong>です。<span class="marker-green">子育て世帯や若年世帯には加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>三重県外から津市に転入すること</p><p>転入後3年以上継続して居住する意思があること</p><p>市税の滞納がないこと</p><p>転入日から6か月以内に申請すること</p></div><p>津市役所政策課に申請書と転入前の住民票の除票、引越し費用の領収書を提出します。</p><p><span class="marker">移住前の事前相談をおすすめします</span>。津市の移住相談窓口でオンライン相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額<strong>20万円</strong>に、子育て世帯（18歳未満の子がいる世帯）は+5万円、39歳以下の若年世帯は+5万円の加算があり、<strong>最大30万円</strong>です。</p><p><span class="marker">3年以内に津市から転出した場合は補助金の返還</span>が求められます。</p><div class="highlight-box">津市は市域が広く、海沿いのマリンレジャーから山間部のアウトドアまで多彩な暮らし方が選べます。お試し居住体験も実施されていますので、まずは短期滞在から始めてみてはいかがでしょうか。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-seismic-diagnosis',
    title: '津市 木造住宅無料耐震診断事業',
    organization: '津市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '三重県',
    tags: ['津市', '耐震診断', '防災'],
    eligibility: '津市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '津市が実施する木造住宅無料耐震診断事業です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 木造住宅無料耐震診断事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>津市は南海トラフ巨大地震の発生が懸念される地域であり、伊勢湾に面した沿岸部では津波被害のリスクもあります。住宅の耐震性を把握し、必要な対策を講じるための第一歩として、無料の耐震診断を実施しています。</p><p><span class="marker-green">診断費用は全額津市が負担し、所有者の自己負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>津市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>在来軸組工法またはツーバイフォー工法であること</p></div><p>津市役所建築指導課に申請書を提出します。市が派遣する耐震診断士が現地調査を行い、概ね1か月程度で結果が報告されます。</p><p><span class="marker">建築確認通知書や図面がある場合は持参すると正確な診断が可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断の費用は<strong>全額津市が負担</strong>します。通常5〜10万円程度かかる診断が無料で受けられます。</p><p><span class="marker">診断の結果、耐震性が不足している場合は耐震改修補助（別制度、上限100万円程度）の利用を検討</span>してください。</p><div class="note-box">南海トラフ地震の発生確率は今後30年間で70〜80%と言われています。津市沿岸部では津波浸水想定区域も公表されていますので、住宅の耐震化とあわせて避難計画の確認もお願いします。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大津市（滋賀県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'otsu-childcare-subsidy',
    title: '大津市 子育て医療費助成制度',
    organization: '大津市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '滋賀県',
    tags: ['大津市', '子育て支援', '医療費助成'],
    eligibility: '大津市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '大津市が実施する子育て医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 子育て医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療における自己負担分を助成する制度です。</p><p>琵琶湖の南西岸に位置する大津市は、比叡山延暦寺をはじめとする歴史遺産と、京都に隣接する利便性を兼ね備えた滋賀県の県庁所在地です。自然豊かな環境で子育てしたいという世帯に人気が高く、子育て支援の充実にも力を入れています。</p><p><span class="marker-green">所得制限はなく、大津市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大津市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>大津市役所こども家庭課の窓口で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「福祉医療費受給券」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。滋賀県内の医療機関では受給券を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。大津市は京都市内への通勤圏内にあり、京都の医療機関を受診する場合は県外扱いとなりますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-birth-bonus',
    title: '大津市 出産・子育て応援給付金',
    organization: '大津市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '滋賀県',
    tags: ['大津市', '出産応援', '給付金'],
    eligibility: '大津市に住所を有し、妊娠届出または出産した方',
    applicationPeriod: '通年',
    description: '大津市が実施する出産・子育て応援給付金です。妊娠届出時に5万円、出生届出時に5万円の計10万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 出産・子育て応援給付金は、<span class="marker">妊娠届出時に5万円（出産応援給付金）、出生届出時に5万円（子育て応援給付金）</span>の計10万円を支給する制度です。</p><p>琵琶湖のほとりに広がる大津市は、豊かな水辺の環境と京都への近接性から、子育て世帯の転入が増え続けています。妊娠期から出産・子育て期まで切れ目なく寄り添う「伴走型相談支援」とあわせ、経済的な支援を行っています。</p><p><span class="marker-green">所得制限なしで、すべての妊産婦が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="給付金の構成"><p>出産応援給付金（5万円）：妊娠届出時の面談後に支給</p><p>子育て応援給付金（5万円）：出生届出後の面談後に支給</p></div><p>妊娠届出時に保健師等との面談を受けた後、申請書を提出します。出産後は新生児訪問等の面談を経て申請します。</p><p><span class="marker">面談を受けることが支給の条件</span>です。面談では妊娠・出産・育児に関する相談ができ、必要な支援につなげてもらえます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>妊娠届出後に<strong>5万円</strong>、出生届出後に<strong>5万円</strong>の計<strong>10万円</strong>が指定口座に振り込まれます。</p><p><span class="marker">多胎妊娠（双子以上）の場合は子育て応援給付金が子どもの人数分</span>支給されます。</p><div class="highlight-box">大津市では出産・子育て応援給付金とあわせて、産前産後ヘルパー派遣事業や産後ケア事業（宿泊型・通所型）も実施しています。琵琶湖を望む環境でゆったりと産後の回復を図れます。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-housing-eco',
    title: '大津市 住宅省エネ改修補助金',
    organization: '大津市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '滋賀県',
    tags: ['大津市', '省エネ改修', '補助金'],
    eligibility: '大津市内の住宅で省エネルギー改修工事を行う所有者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '大津市が実施する住宅省エネ改修補助金です。断熱改修等の省エネ工事に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 住宅省エネ改修補助金は、<span class="marker">既存住宅の断熱改修や高効率設備への更新</span>に対して費用の一部を補助する制度です。</p><p>琵琶湖の環境保全を使命とする大津市は、CO2排出削減にも積極的に取り組んでいます。住宅の省エネ化は家庭部門の温室効果ガス削減に直結するため、断熱改修や高効率給湯器の導入を支援しています。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限30万円</strong>です。<span class="marker-green">窓の断熱改修と壁・屋根の断熱改修が主な対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>窓の断熱改修（内窓設置、ガラス交換等）</p><p>壁・屋根・床の断熱材追加</p><p>高効率給湯器（エコキュート等）の設置</p><p>太陽光発電システムの導入（蓄電池含む）</p></div><p>大津市役所環境政策課に申請書と工事見積書、施工図面を提出します。</p><p><span class="marker">工事着手前の事前申請が必須</span>です。交付決定前に着工した工事は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限30万円</strong>です。複数の工事を組み合わせる場合も上限は合計30万円です。</p><p><span class="marker">市内の施工業者を利用することが条件</span>です。地域経済の活性化も目的の一つとしています。</p><div class="note-box">琵琶湖周辺は冬場の冷え込みが厳しく、窓の断熱改修は特に効果が高いとされています。大津市は環境モデル都市にも選ばれており、省エネ住宅の普及を通じた琵琶湖の環境保全を推進しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-mental-health',
    title: '大津市 こころの健康相談支援事業',
    organization: '大津市',
    type: 'local',
    maxAmount: '無料（相談料負担なし）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '滋賀県',
    tags: ['大津市', 'メンタルヘルス', '相談支援'],
    eligibility: '大津市に住所を有する方で、こころの健康に不安を感じている方',
    applicationPeriod: '通年',
    description: '大津市が実施するこころの健康相談支援事業です。精神科医・臨床心理士による無料の相談を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 こころの健康相談支援事業は、<span class="marker">こころの健康に不安を抱える市民</span>を対象に、精神科医や臨床心理士による無料相談を提供する制度です。</p><p>ストレス社会が深刻化する中、大津市では「誰もが安心して暮らせるまちづくり」の一環として、メンタルヘルスケアの充実に取り組んでいます。琵琶湖の穏やかな景色を眺めながら、心の回復を支える体制を整えています。</p><p><span class="marker-green">予約制で、プライバシーに配慮した個別相談</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="相談できる内容"><p>うつ・不安・不眠などの心の不調</p><p>ひきこもり・対人関係の悩み</p><p>アルコール・ギャンブル等の依存問題</p><p>家族のメンタルヘルスに関する相談</p></div><p>大津市保健所精神保健福祉相談窓口に電話で予約を取ります。<strong>本人だけでなく、家族からの相談も受け付けています</strong>。</p><p><span class="marker">相談は完全無料で、秘密は厳守</span>されます。まずは電話でお気軽にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>精神科医や臨床心理士による専門相談が<strong>無料</strong>で受けられます。1回あたり30〜50分程度の個別面談です。</p><p><span class="marker">継続的な治療が必要な場合は、適切な医療機関への紹介</span>も行います。自立支援医療（精神通院医療）の申請支援も受けられます。</p><div class="highlight-box">大津市では「こころの健康相談ダイヤル」を設置しており、来所相談が難しい方は電話での相談も可能です。一人で抱え込まず、まずは相談してみることが回復への第一歩です。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-scholarship-v2',
    title: '大津市 奨学金返還支援補助金',
    organization: '大津市',
    type: 'local',
    maxAmount: '最大年間18万円（最大3年間）',
    maxAmountNum: 54,
    category: 'education',
    prefecture: '滋賀県',
    tags: ['大津市', '奨学金返還支援', '教育支援'],
    eligibility: '大津市に居住し、奨学金を返還中の若年就業者',
    applicationPeriod: '毎年4月〜6月',
    description: '大津市が実施する奨学金返還支援補助金です。奨学金返還中の若年就業者に最大年間18万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 奨学金返還支援補助金は、<span class="marker">大津市に居住し就業している若者の奨学金返還</span>を支援する制度です。</p><p>京都に隣接する大津市は、京都で学んだ若者が卒業後に住む街としても注目されています。奨学金返還の負担を軽減することで、若年層の市内定住を促進し、地域の活力を維持することを目指しています。</p><p>補助額は実際の返還額の2分の1以内で、<strong>年間最大18万円、最長3年間</strong>（合計最大54万円）です。<span class="marker-green">35歳以下の就業者が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大津市に住民登録があり、35歳以下であること</p><p>大津市内または滋賀県内の事業所に就業していること</p><p>日本学生支援機構等の奨学金を返還中であること</p><p>市税の滞納がないこと</p></div><p>大津市役所政策調整課に申請書と奨学金の返還証明書、在職証明書を提出します。毎年4月〜6月が募集期間です。</p><p><span class="marker">定員に限りがあるため、選考により採否が決定されます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>年間の奨学金返還額の2分の1以内で、<strong>年間最大18万円</strong>が補助されます。最長3年間の継続受給で<strong>合計最大54万円</strong>です。</p><p><span class="marker">補助期間中に大津市から転出した場合は、その年度の補助が打ち切り</span>となります。</p><div class="note-box">大津市では奨学金返還支援のほか、若者向けのキャリア相談やインターンシップマッチングなども実施しています。琵琶湖のほとりで充実したキャリアと暮らしを両立しませんか。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-women-startup',
    title: '大津市 女性起業支援補助金',
    organization: '大津市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '滋賀県',
    tags: ['大津市', '女性起業', '補助金'],
    eligibility: '大津市内で起業する女性、または起業後1年以内の女性',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '大津市が実施する女性起業支援補助金です。女性の起業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 女性起業支援補助金は、<span class="marker">大津市内で新たに起業する女性</span>を対象に、創業にかかる初期費用を補助する制度です。</p><p>大津市は京都に隣接し、高い教育水準を持つ女性が多く暮らしています。子育てをきっかけにキャリアチェンジを考える方や、ライフスタイルに合わせた働き方を実現したい方の起業を後押ししています。琵琶湖畔のカフェやサロン、オンラインビジネスなど多様な分野での起業実績があります。</p><p>補助率は対象経費の3分の2以内で、<strong>上限50万円</strong>です。<span class="marker-green">起業セミナーの受講が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>女性であること</p><p>大津市内で起業する（または起業後1年以内である）こと</p><p>市が指定する起業セミナー等を受講済みであること</p><p>市税の滞納がないこと</p></div><p>大津市役所商工労働政策課に事業計画書と申請書を提出します。書類審査とプレゼンテーションによる選考が行われます。</p><p><span class="marker">大津商工会議所の女性起業相談窓口で事前相談が受けられます</span>。事業計画の策定支援も行っています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限50万円</strong>です。店舗改装費、設備購入費、広告宣伝費、ウェブサイト構築費などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。必ず交付決定後に事業を開始してください。</p><div class="highlight-box">大津市ではこの補助金のほか、女性起業家向けのコワーキングスペースの割引利用や、先輩起業家とのメンタリングプログラムも実施しています。仲間とつながりながら起業の夢を実現できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-nursing-home-reform',
    title: '大津市 介護予防住宅改修支援事業',
    organization: '大津市',
    type: 'local',
    maxAmount: '最大20万円（介護保険上乗せ）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '滋賀県',
    tags: ['大津市', '介護予防', '住宅改修'],
    eligibility: '大津市に住所を有する要支援・要介護認定者で住宅改修を行う方',
    applicationPeriod: '通年',
    description: '大津市が実施する介護予防住宅改修支援事業です。介護保険に上乗せして住宅改修費を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 介護予防住宅改修支援事業は、<span class="marker">要支援・要介護認定を受けた方が安全に在宅生活を続けるための住宅改修</span>に対し、介護保険の住宅改修費に上乗せして補助する制度です。</p><p>大津市は琵琶湖畔の坂の多い地形が特徴で、高齢者の転倒リスクが高い住宅が少なくありません。介護保険制度の住宅改修費（上限20万円の自己負担1〜3割）に加え、市独自の補助で住環境のバリアフリー化を推進しています。</p><p>市の上乗せ補助は<strong>最大20万円</strong>です。<span class="marker-green">市民税非課税世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの設置（玄関・廊下・浴室・トイレ等）</p><p>段差の解消・スロープの設置</p><p>滑り止め床材への変更</p><p>引き戸・レバーハンドルへの扉交換</p><p>洋式トイレへの変更</p></div><p>介護保険の住宅改修申請とあわせて、大津市役所介護保険課に上乗せ補助の申請を行います。ケアマネジャーとの事前相談が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。着工後の申請は認められません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市の上乗せ補助は<strong>最大20万円</strong>です。介護保険と合わせて、より充実したバリアフリー改修が実現できます。</p><p><span class="marker">市民税非課税世帯が対象で、課税世帯は利用できません</span>。改修の効果が認められる工事に限ります。</p><div class="note-box">大津市は坂道が多く、玄関ポーチやアプローチの段差解消が特に重要です。作業療法士による自宅訪問アドバイスも受けられますので、改修計画の参考にしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-elderly-support',
    title: '大津市 高齢者配食サービス事業',
    organization: '大津市',
    type: 'local',
    maxAmount: '1食あたり300円の補助',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '滋賀県',
    tags: ['大津市', '配食サービス', '高齢者支援'],
    eligibility: '大津市に住所を有する65歳以上のひとり暮らしまたは高齢者のみの世帯',
    applicationPeriod: '通年',
    description: '大津市が実施する高齢者配食サービス事業です。高齢者世帯に栄養バランスの取れた食事を届けます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 高齢者配食サービス事業は、<span class="marker">65歳以上のひとり暮らしまたは高齢者のみの世帯</span>を対象に、栄養バランスの取れた食事を自宅に届けるサービスです。</p><p>大津市では高齢者の低栄養や孤食を防止するため、配食サービスを通じた栄養支援と見守りを行っています。琵琶湖の恵みを活かした地元食材を使用した食事が、毎日の楽しみとなっています。</p><p>1食あたり<strong>300円の市補助</strong>があり、利用者負担は約400〜500円程度です。<span class="marker-green">配達時の安否確認も同時に行います</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="利用要件"><p>大津市に住民登録がある65歳以上の方</p><p>ひとり暮らしまたは高齢者のみの世帯</p><p>調理が困難な状況にある方</p><p>介護保険サービスの配食と重複しないこと</p></div><p>大津市役所長寿政策課または各地域包括支援センターで申請します。アセスメント（状況確認）を経て利用の可否が決まります。</p><p><span class="marker">週5日まで利用可能</span>で、昼食または夕食を選べます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1食あたり<strong>300円が市の補助</strong>として充てられ、利用者の実質負担は約400〜500円です。</p><p><span class="marker">配達員が毎回安否確認を行い、応答がない場合は緊急連絡先に通報</span>する体制が取られています。</p><div class="highlight-box">大津市の配食サービスは単なる食事の提供にとどまらず、定期的な見守りの機能も果たしています。アレルギーや持病に応じた食事内容の相談も可能です。利用をご検討の方は、お近くの地域包括支援センターにお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-bousai-equipment',
    title: '大津市 自主防災組織資機材整備補助金',
    organization: '大津市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'disaster',
    prefecture: '滋賀県',
    tags: ['大津市', '防災資機材', '補助金'],
    eligibility: '大津市内の自主防災組織',
    applicationPeriod: '毎年4月〜11月（予算に達し次第終了）',
    description: '大津市が実施する自主防災組織資機材整備補助金です。防災資機材の購入費用を最大15万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 自主防災組織資機材整備補助金は、<span class="marker">市内の自主防災組織が防災活動に必要な資機材を整備する際</span>の費用を補助する制度です。</p><p>大津市は琵琶湖西岸断層帯による地震リスクや、比叡山・比良山系からの土砂災害リスクを抱えています。地域の自主的な防災力を高めるため、必要な資機材の整備を支援しています。</p><p>補助率は購入費の3分の2以内で、<strong>上限15万円</strong>です。<span class="marker-green">発電機、救助工具、防災倉庫などが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる資機材"><p>発電機・投光器・LED照明</p><p>救助工具セット（バール、のこぎり等）</p><p>担架・リヤカー・テント</p><p>防災倉庫・収納庫</p><p>炊き出し用具・簡易トイレ</p></div><p>大津市役所危機・防災対策課に申請書と見積書を提出します。自主防災組織の代表者が申請してください。</p><p><span class="marker">購入前の事前申請が必要</span>です。交付決定を受けてから購入・設置を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費の3分の2以内で、<strong>上限15万円</strong>が補助されます。1団体につき年度内1回の申請が可能です。</p><p><span class="marker">個人での申請はできません</span>。自主防災組織として市に届出をしている団体のみが対象です。</p><div class="note-box">大津市では琵琶湖西岸断層帯の地震に備えた総合防災訓練を毎年実施しています。資機材を揃えるとともに、訓練で使い方を確認しておくことが重要です。防災リーダー養成講座への参加もおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 奈良市（奈良県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'nara-city-childcare-subsidy',
    title: '奈良市 子ども医療費助成制度',
    organization: '奈良市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['奈良市', '子ども医療費', '助成金'],
    eligibility: '奈良市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '奈良市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 子ども医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療における自己負担分を助成する制度です。</p><p>古都奈良は東大寺の大仏や春日大社、興福寺などの世界遺産を擁する歴史文化都市です。1300年の歴史に育まれた街で、次世代を担う子どもたちの健やかな成長を支えるため、医療費の負担軽減に取り組んでいます。</p><p><span class="marker-green">所得制限はなく、奈良市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>奈良市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>奈良市役所子ども育成課の窓口で申請できます。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「福祉医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。奈良県内の医療機関では受給資格証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。奈良市は大阪や京都への通勤圏内にあり、他府県の医療機関を受診する場合は県外扱いとなりますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-daycare-support',
    title: '奈良市 認可外保育施設利用料助成金',
    organization: '奈良市',
    type: 'local',
    maxAmount: '月額最大2万円',
    maxAmountNum: 24,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['奈良市', '保育施設', '利用料助成'],
    eligibility: '奈良市内の認可外保育施設を利用する子どもの保護者',
    applicationPeriod: '通年',
    description: '奈良市が実施する認可外保育施設利用料助成金です。認可外保育施設の利用料を月額最大2万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 認可外保育施設利用料助成金は、<span class="marker">認可外保育施設（認可外保育園・企業主導型保育等）を利用する家庭</span>に対し、利用料の一部を助成する制度です。</p><p>奈良市は観光産業が盛んな一方で、保育ニーズの多様化に対応するため、認可保育所だけでなく認可外施設の利用者への支援も拡充しています。奈良公園の鹿が行き交う街で、子育て世帯が安心して働ける環境づくりを進めています。</p><p>助成額は月額最大<strong>2万円</strong>です。<span class="marker-green">保育の必要性の認定を受けていることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>奈良市に住民登録がある子どもの保護者であること</p><p>保育の必要性の認定（2号または3号認定）を受けていること</p><p>奈良市が確認した認可外保育施設を利用していること</p><p>幼児教育無償化の上限額を超える利用料を負担していること</p></div><p>奈良市役所保育所・幼稚園課に申請書と利用料の領収書を提出します。四半期ごとにまとめて申請する方式です。</p><p><span class="marker">無償化の対象とならない差額分について助成</span>するため、無償化の適用を先に受ける必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>幼児教育無償化の上限額を超える利用料について、月額<strong>最大2万円</strong>が助成されます。年間で最大24万円の支援となります。</p><p><span class="marker">認可保育所に入所できるようになった場合は助成が終了</span>します。待機児童解消に向けた取り組みの過渡期の支援として位置づけられています。</p><div class="highlight-box">奈良市では認可保育所の増設にも力を入れていますが、エリアによっては待機児童が発生するケースがあります。認可外施設の利用もセーフティネットとして活用しながら、認可施設への転園申請を続けることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-barrier-free',
    title: '奈良市 バリアフリー住宅改修補助金',
    organization: '奈良市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '奈良県',
    tags: ['奈良市', 'バリアフリー', '住宅改修'],
    eligibility: '奈良市内に住所を有する65歳以上の方または障がいのある方の世帯',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '奈良市が実施するバリアフリー住宅改修補助金です。高齢者・障がい者のバリアフリー改修に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 バリアフリー住宅改修補助金は、<span class="marker">65歳以上の高齢者や障がいのある方が暮らす住宅のバリアフリー改修</span>に対して費用の一部を補助する制度です。</p><p>古都奈良の町家や戸建て住宅は歴史ある建物が多く、段差が多い構造が特徴です。高齢者や障がいのある方が安全に暮らし続けられるよう、手すりの設置や段差解消などのバリアフリー化を支援しています。</p><p>補助率は対象工事費の3分の1以内で、<strong>上限30万円</strong>です。<span class="marker-green">介護保険の住宅改修費との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの設置（屋内・屋外）</p><p>段差の解消・スロープの設置</p><p>浴室・トイレのバリアフリー化</p><p>廊下の拡幅</p><p>滑り防止のための床材変更</p></div><p>奈良市役所住宅課に申請書と工事見積書、対象者の状況を証明する書類（介護保険証や障害者手帳等）を提出します。</p><p><span class="marker">工事着手前の事前申請が必須</span>です。交付決定を受けてから工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の3分の1以内で、<strong>上限30万円</strong>です。介護保険の住宅改修費（上限20万円の1〜3割自己負担）と組み合わせて利用できます。</p><p><span class="marker">賃貸住宅の場合は所有者の同意書が必要</span>です。改修工事は市内の施工業者に依頼することが推奨されます。</p><div class="note-box">奈良市のならまちエリアなどの歴史的街並みでは、景観に配慮したバリアフリー改修が求められる場合があります。改修計画の段階で奈良市の相談窓口にお問い合わせいただくとスムーズです。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-senior-dental',
    title: '奈良市 後期高齢者歯科健診助成事業',
    organization: '奈良市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '奈良県',
    tags: ['奈良市', '歯科健診', '高齢者医療'],
    eligibility: '奈良市に住所を有する後期高齢者医療制度の被保険者',
    applicationPeriod: '毎年6月〜翌年2月',
    description: '奈良市が実施する後期高齢者歯科健診助成事業です。75歳以上の高齢者に無料の歯科健診を提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 後期高齢者歯科健診助成事業は、<span class="marker">75歳以上の後期高齢者医療制度の被保険者</span>を対象に、歯科健診の費用を全額助成する制度です。</p><p>奈良市は高齢化率が上昇しており、口腔の健康維持が介護予防に重要な役割を果たしています。歯周病の予防や咀嚼機能の維持は、フレイル（虚弱）予防にも直結します。古都の悠久の歴史のように、長く健やかな人生を歩むための支援です。</p><p><span class="marker-green">年1回、市内の指定歯科医療機関で無料受診できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>奈良市に住民登録がある後期高齢者医療制度の被保険者（75歳以上、または65歳以上で一定の障がいのある方）が対象です。</p><div class="summary-box" data-title="健診の流れ"><p>対象者に受診券が郵送される</p><p>市内の指定歯科医療機関に予約する</p><p>受診券と後期高齢者医療被保険者証を持参して受診する</p></div><p><strong>事前の申請は不要</strong>です。届いた受診券を持って歯科医療機関を受診するだけです。受診券が届かない場合は奈良市保健所にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>歯科健診の費用は<strong>全額市が負担し、自己負担はゼロ</strong>です。口腔内診査、歯周病検査、咀嚼機能の評価などが含まれます。</p><p><span class="marker">健診の結果、治療が必要と判断された場合の治療費は別途自己負担</span>となります。早期発見・早期治療のためにぜひ受診してください。</p><div class="highlight-box">奈良市では歯科健診とあわせて、口腔機能向上教室やオーラルフレイル予防講座も開催しています。「いつまでも自分の歯でおいしく食事を楽しむ」ことを目標に、口腔ケアを習慣づけましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-school-lunch',
    title: '奈良市 学校給食費支援事業',
    organization: '奈良市',
    type: 'local',
    maxAmount: '給食費の一部助成',
    maxAmountNum: 3,
    category: 'education',
    prefecture: '奈良県',
    tags: ['奈良市', '学校給食', '教育支援'],
    eligibility: '奈良市立小中学校に在籍する児童生徒の保護者',
    applicationPeriod: '毎年4月（自動適用）',
    description: '奈良市が実施する学校給食費支援事業です。小中学校の給食費の一部を市が助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 学校給食費支援事業は、<span class="marker">市立小中学校に通うすべての児童生徒</span>の学校給食費の一部を市が負担する制度です。</p><p>奈良市では食材費の高騰から保護者の負担増を防ぐため、給食費の一部を公費で助成しています。学校給食には奈良県産の大和野菜やヤマトポーク、奈良漬けなど地元の食材を積極的に取り入れており、食育の場としても重要な役割を果たしています。</p><p><span class="marker-green">所得制限なしで全世帯が対象、申請手続きも不要</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>奈良市立小中学校に在籍する児童生徒の保護者が自動的に対象となります。</p><div class="summary-box" data-title="助成の仕組み"><p>食材費高騰分を市が公費で負担</p><p>保護者への請求額を据え置き</p><p>手続き不要で自動適用</p></div><p>給食費の一部が市の負担で軽減されるため、<strong>別途の申請は一切不要</strong>です。</p><p><span class="marker">就学援助制度の認定を受けている世帯は給食費が全額免除</span>されます。経済的にお困りの方は就学援助の申請もご検討ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>食材費の値上がり分を市が吸収し、<strong>保護者の負担額を従来の水準に据え置き</strong>ます。実質的に1食あたり数十円〜100円程度の助成です。</p><p><span class="marker">第3子以降の給食費は全額免除</span>となる制度もあります。多子世帯はより手厚い支援を受けられます。</p><div class="note-box">奈良市の学校給食は自校調理方式を基本としており、温かい給食が提供されています。アレルギー対応食にも個別に対応していますので、心配な方は学校にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-sme-support',
    title: '奈良市 中小企業経営革新支援補助金',
    organization: '奈良市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '奈良県',
    tags: ['奈良市', '中小企業支援', '補助金'],
    eligibility: '奈良市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '奈良市が実施する中小企業経営革新支援補助金です。経営革新に取り組む中小企業に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 中小企業経営革新支援補助金は、<span class="marker">新製品開発、新サービスの提供、生産性向上などの経営革新</span>に取り組む市内中小企業を支援する制度です。</p><p>奈良市は伝統産業（墨・筆・麻織物など）と観光関連産業が経済の柱です。インバウンド需要の回復やDX推進を背景に、既存事業の革新や新分野への挑戦を後押ししています。世界遺産の街ならではの文化観光ビジネスの革新にも期待が寄せられています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限100万円</strong>です。<span class="marker-green">経営革新計画の承認を受けていると優先採択</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>奈良市内に事業所を有する中小企業者であること</p><p>市税の滞納がないこと</p><p>経営革新計画または事業計画書を提出できること</p><p>補助事業を年度内に完了できること</p></div><p>奈良市役所産業政策課に事業計画書と申請書を提出します。審査会での評価により採択が決定されます。</p><p><span class="marker">奈良商工会議所の経営相談窓口で事前に計画をブラッシュアップすることを推奨</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。機械装置費、広告宣伝費、専門家謝金、クラウドサービス利用料などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は対象外</span>です。事業の実施期間にも注意してください。</p><div class="highlight-box">奈良市では伝統産業のブランド力向上や、文化観光とテクノロジーの融合（XR技術を使った観光体験など）にも注目しています。歴史と革新を組み合わせた事業計画は審査で高く評価される傾向にあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-nursing-equipment',
    title: '奈良市 在宅介護用品支給事業',
    organization: '奈良市',
    type: 'local',
    maxAmount: '月額最大6,000円相当',
    maxAmountNum: 7,
    category: 'nursing',
    prefecture: '奈良県',
    tags: ['奈良市', '介護用品', '支給事業'],
    eligibility: '奈良市に住所を有し、在宅で要介護4・5の方を介護している家族',
    applicationPeriod: '通年',
    description: '奈良市が実施する在宅介護用品支給事業です。在宅介護家族に紙おむつ等の介護用品を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 在宅介護用品支給事業は、<span class="marker">在宅で要介護4・5の認定を受けた方を介護している家族</span>に対し、紙おむつ等の介護用品を支給する制度です。</p><p>古都奈良には長く住み続けている高齢世帯が多く、在宅介護の負担軽減が重要な課題です。介護用品の現物支給により、日々の介護にかかる経済的負担を直接的に軽減しています。</p><p>月額<strong>6,000円相当</strong>の介護用品が支給されます。<span class="marker-green">市民税非課税世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>奈良市に住民登録があること</p><p>要介護4または5の認定を受けた方と同居し在宅介護していること</p><p>介護を受ける方が市民税非課税世帯に属すること</p><p>介護保険施設に入所していないこと</p></div><p>奈良市役所介護福祉課または各地域包括支援センターで申請します。介護保険証と世帯の課税証明書が必要です。</p><p><span class="marker">申請した月から支給が開始され、毎月カタログから選んで注文</span>します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>6,000円相当</strong>の介護用品（紙おむつ、尿取りパッド、使い捨て手袋、清拭剤など）が支給されます。</p><p><span class="marker">入院中や施設入所中は支給が停止</span>されます。退院後に再開する場合は届出が必要です。</p><div class="note-box">奈良市では介護用品の支給とあわせて、家族介護者のためのリフレッシュ事業（リフレッシュ温泉利用券の交付）なども実施しています。介護疲れを感じたら、地域包括支援センターに遠慮なくご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-energy-support',
    title: '奈良市 低所得世帯エネルギー支援給付金',
    organization: '奈良市',
    type: 'local',
    maxAmount: '1世帯あたり3万円',
    maxAmountNum: 3,
    category: 'living',
    prefecture: '奈良県',
    tags: ['奈良市', 'エネルギー支援', '給付金'],
    eligibility: '奈良市に住所を有する住民税非課税世帯',
    applicationPeriod: '案内通知受領後〜期限内',
    description: '奈良市が実施する低所得世帯エネルギー支援給付金です。住民税非課税世帯に1世帯3万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 低所得世帯エネルギー支援給付金は、<span class="marker">エネルギー価格の高騰により家計が圧迫されている住民税非課税世帯</span>に対し、1世帯あたり3万円を支給する制度です。</p><p>電気・ガス料金の値上がりは低所得世帯ほど家計への影響が大きく、奈良市では特に暑い夏場と寒い冬場の光熱費負担を軽減するため、この給付金を創設しました。奈良盆地は寒暖差が大きく、冷暖房の使用は健康を守るために欠かせません。</p><p><span class="marker-green">対象世帯には市から確認書が届き、返送するだけで申請完了</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象世帯"><p>基準日時点で奈良市に住民登録がある世帯</p><p>世帯全員が住民税非課税であること</p><p>他の自治体で同種の給付金を受給していないこと</p></div><p>対象と見込まれる世帯には奈良市から確認書が郵送されます。内容を確認し、必要事項を記入して返送してください。</p><p><span class="marker">確認書が届かない場合でも、対象と思われる方は市に問い合わせ可能</span>です。課税状況の変更があった場合も申出を受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1世帯あたり<strong>3万円</strong>が指定口座に振り込まれます。世帯人数に関わらず一律の金額です。</p><p><span class="marker">申請期限がありますので、届いた確認書は早めに返送</span>してください。期限を過ぎると受給できなくなります。</p><div class="note-box">この給付金は非課税扱いのため、所得税や住民税の対象にはなりません。また、生活保護の収入認定からも除外されます。光熱費以外の使途にも制限はありません。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-seismic-diagnosis',
    title: '奈良市 木造住宅耐震診断補助事業',
    organization: '奈良市',
    type: 'local',
    maxAmount: '無料（自己負担なし）',
    maxAmountNum: 0,
    category: 'disaster',
    prefecture: '奈良県',
    tags: ['奈良市', '耐震診断', '防災'],
    eligibility: '奈良市内に1981年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '奈良市が実施する木造住宅耐震診断補助事業です。旧耐震基準の木造住宅の耐震診断を無料で実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 木造住宅耐震診断補助事業は、<span class="marker">1981年5月31日以前の旧耐震基準で建築された木造住宅</span>の耐震診断を無料で実施する制度です。</p><p>奈良市には歴史ある木造住宅が数多く残されており、特にならまちエリアには江戸〜昭和初期の町家が集積しています。南海トラフ巨大地震や奈良盆地東縁断層帯の活動が懸念される中、住宅の耐震性確認は急務となっています。</p><p><span class="marker-green">診断費用は全額奈良市が負担し、所有者の自己負担はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>奈良市内に所在する木造住宅であること</p><p>1981年5月31日以前に着工されたこと</p><p>2階建て以下であること</p><p>在来軸組工法で建てられていること</p></div><p>奈良市役所建築指導課に申請書を提出します。市が派遣する耐震診断士が現地調査を行い、診断結果を報告します。</p><p><span class="marker">建築確認通知書や図面がある場合は持参してください</span>。より精度の高い診断が可能になります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震診断の費用は<strong>全額奈良市が負担</strong>します。通常5〜10万円程度の診断費用が無料で受けられます。</p><p><span class="marker">耐震性不足の場合は耐震改修補助（別制度、上限100万円程度）の利用が可能</span>です。診断から改修まで一貫した支援を受けられます。</p><div class="note-box">奈良市では歴史的町家の耐震改修について、伝統構法に対応した診断・改修の技術的支援も行っています。文化財としての価値を損なわない耐震補強の方法について、専門家への相談も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 和歌山市（和歌山県）9件: childcare×2, housing, medical, education, employment, nursing, living, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'wakayama-city-childcare-subsidy',
    title: '和歌山市 子ども医療費助成制度',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '和歌山県',
    tags: ['和歌山市', '子ども医療費', '助成金'],
    eligibility: '和歌山市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '和歌山市が実施する子ども医療費助成制度です。高校卒業相当年齢までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療における自己負担分を助成する制度です。</p><p>紀伊半島の入口に位置する和歌山市は、和歌山城やマリーナシティなどの観光名所を持ち、みかんの産地としても全国に知られています。人口減少対策として子育て支援を最重要施策に掲げ、高校卒業相当まで医療費を無料化しています。</p><p><span class="marker-green">所得制限はなく、和歌山市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>和歌山市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>和歌山市役所こども家庭課の窓口で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。和歌山県内の医療機関では受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書を必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。和歌山市は大阪府との県境に位置するため、大阪の医療機関を受診する場合は県外扱いとなりますのでご注意ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-parenting-allowance',
    title: '和歌山市 子育て世帯応援給付金',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '子ども1人あたり5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '和歌山県',
    tags: ['和歌山市', '子育て応援', '給付金'],
    eligibility: '和歌山市に住所を有する18歳未満の子どもを養育する保護者',
    applicationPeriod: '対象者に通知後〜期限内',
    description: '和歌山市が実施する子育て世帯応援給付金です。18歳未満の子ども1人あたり5万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 子育て世帯応援給付金は、<span class="marker">18歳未満の子どもを養育する保護者</span>に対し、子ども1人あたり5万円を支給する制度です。</p><p>和歌山市は太平洋に面した温暖な気候の港町で、みかんをはじめとする柑橘類の生産が盛んです。物価上昇の影響を受ける子育て世帯の家計を直接的に支援し、安心して子育てできる環境を維持することを目的としています。</p><p><span class="marker-green">所得制限はなく、対象年齢の子どものいるすべての世帯が受給できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給要件"><p>基準日時点で和歌山市に住民登録があること</p><p>18歳未満の子どもを養育していること</p><p>児童手当を受給している場合は原則申請不要</p></div><p>児童手当受給者には市から案内通知と確認書が届きます。確認書を返送するだけで手続きが完了します。</p><p><span class="marker">公務員の方や児童手当を受給していない方は別途申請が必要</span>です。和歌山市役所こども家庭課に申請書を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>18歳未満の子ども<strong>1人あたり5万円</strong>が支給されます。子どもが3人いれば15万円の支給となります。</p><p><span class="marker">申請期限がありますので、届いた確認書は早めに返送</span>してください。期限を過ぎると受給できません。</p><div class="highlight-box">和歌山市ではこの給付金のほか、学校給食費の無償化（段階的実施）や、子育て支援センターの拡充など、子育て世帯への総合的な支援を進めています。太平洋を望む温暖な環境で、のびのびとした子育てができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-housing-purchase',
    title: '和歌山市 住宅取得支援補助金',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '和歌山県',
    tags: ['和歌山市', '住宅取得', '補助金'],
    eligibility: '和歌山市内に新たに住宅を取得する若年世帯・子育て世帯',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '和歌山市が実施する住宅取得支援補助金です。市内に住宅を取得する若年・子育て世帯に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 住宅取得支援補助金は、<span class="marker">市内に新たに住宅を購入または新築する若年世帯・子育て世帯</span>を対象に費用の一部を補助する制度です。</p><p>和歌山市は大阪市内への通勤圏でありながら、住宅価格が比較的手頃で、海と山の自然環境に恵まれた暮らしやすい街です。和歌山城を中心とした市街地の再活性化と郊外ニュータウンへの若年世帯の誘引を目的としています。</p><p>補助額は基本額30万円に加算があり、<strong>最大50万円</strong>です。<span class="marker-green">市外からの転入者にはさらに加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>夫婦いずれかが40歳未満、または18歳未満の子がいる世帯</p><p>和歌山市内に住宅を取得し、自ら居住すること</p><p>市税の滞納がないこと</p><p>住宅取得後1年以内に申請すること</p></div><p>和歌山市役所住宅政策課に申請書と売買契約書、登記事項証明書、住民票を提出します。</p><p><span class="marker">市外からの転入で+10万円、子ども1人あたり+5万円の加算</span>があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額<strong>30万円</strong>に、転入加算+10万円、子ども加算（1人あたり+5万円、上限+10万円）を合わせて<strong>最大50万円</strong>です。</p><p><span class="marker">5年以内に和歌山市から転出した場合は補助金の返還を求められる</span>ことがあります。長期的な居住計画を立ててから申請しましょう。</p><div class="note-box">和歌山市は南海電鉄やJR阪和線で大阪方面へのアクセスが良好です。大阪で働きながら和歌山で暮らすライフスタイルも選択肢の一つです。住宅取得時には国のすまい給付金等との併用も確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-infertility',
    title: '和歌山市 不妊治療費助成事業',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大20万円（1回あたり）',
    maxAmountNum: 20,
    category: 'medical',
    prefecture: '和歌山県',
    tags: ['和歌山市', '不妊治療', '助成金'],
    eligibility: '和歌山市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '治療終了日から60日以内',
    description: '和歌山市が実施する不妊治療費助成事業です。先進的不妊治療の自己負担分を最大20万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 不妊治療費助成事業は、<span class="marker">保険適用後の自己負担分や先進医療にかかる費用</span>を助成する制度です。</p><p>和歌山市は少子化が全国平均を上回るペースで進んでおり、不妊治療への支援強化は喫緊の課題です。2022年の保険適用拡大後も経済的負担が残る先進医療等について、市独自の上乗せ助成を行い、一人でも多くの方が希望する治療を受けられる環境を整えています。</p><p>助成額は1回の治療につき<strong>最大20万円</strong>です。<span class="marker-green">和歌山県の助成制度との併用が可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦の一方または双方が和歌山市に住民登録があること</p><p>法律上の婚姻をしている夫婦（事実婚含む）であること</p><p>治療開始時に妻の年齢が43歳未満であること</p><p>指定医療機関で治療を受けていること</p></div><p>和歌山市保健センターに申請書と医療機関の証明書、領収書を提出します。<strong>治療終了日から60日以内</strong>に申請してください。</p><p><span class="marker">和歌山県の助成金と和歌山市の助成金の両方に申請可能</span>な場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大20万円</strong>が助成されます。保険適用後の自己負担分と先進医療費が対象です。</p><p><span class="marker">治療開始時の妻の年齢が40歳未満なら通算6回まで、40歳以上43歳未満なら通算3回まで</span>が助成上限です。</p><div class="note-box">和歌山市では不妊治療の費用助成に加え、不妊専門相談窓口の設置や不妊治療と仕事の両立支援にも取り組んでいます。治療に関する不安は一人で抱え込まず、まずは相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-afterschool',
    title: '和歌山市 放課後子ども教室推進事業',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '無料（参加費なし）',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '和歌山県',
    tags: ['和歌山市', '放課後子ども教室', '教育支援'],
    eligibility: '和歌山市立小学校に通う児童',
    applicationPeriod: '毎年4月（年度途中の参加も可）',
    description: '和歌山市が実施する放課後子ども教室推進事業です。放課後の安全な居場所と学習・体験活動を無料で提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 放課後子ども教室推進事業は、<span class="marker">市立小学校に通う児童を対象に、放課後の安全な居場所と多様な学習・体験活動</span>を無料で提供する事業です。</p><p>和歌山市は海・山・川の自然に恵まれた環境を活かし、放課後の子どもたちに豊かな体験機会を提供しています。地域のボランティアや大学生が講師となり、学習支援のほか、和歌山の伝統文化体験やスポーツ活動など多彩なプログラムを展開しています。</p><p><span class="marker-green">参加費は無料で、すべての児童が参加できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="活動内容"><p>学習支援（宿題の見守り、補習等）</p><p>スポーツ・レクリエーション活動</p><p>文化・芸術体験（絵画、書道、音楽等）</p><p>地域交流活動（高齢者との世代間交流等）</p></div><p>学校を通じて配布される参加申込書を提出するだけで参加できます。年度途中の参加申込みも受け付けています。</p><p><span class="marker">開催場所は各小学校の教室や体育館</span>が中心です。放課後から夕方までの時間帯に実施されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>参加費は<strong>無料</strong>です。一部の体験活動で材料費等の実費負担がある場合があります。</p><p><span class="marker">放課後児童クラブ（学童保育）とは別の事業</span>です。保護者の就労要件はなく、すべての児童が対象となります。</p><div class="highlight-box">和歌山市の放課後子ども教室では、地元の特産品であるみかん狩り体験や、紀ノ川での自然観察など、和歌山ならではの活動も行っています。子どもの放課後の過ごし方に悩んでいる保護者の方は、ぜひご検討ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-telework-bonus',
    title: '和歌山市 ワーケーション・テレワーク推進補助金',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '和歌山県',
    tags: ['和歌山市', 'ワーケーション', 'テレワーク'],
    eligibility: '和歌山市でワーケーションまたはテレワークを実施する企業・個人',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '和歌山市が実施するワーケーション・テレワーク推進補助金です。滞在費やコワーキング利用料を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 ワーケーション・テレワーク推進補助金は、<span class="marker">和歌山市内でワーケーション（仕事＋休暇）やテレワークを実施する企業・個人</span>を対象に、滞在にかかる費用を補助する制度です。</p><p>和歌山県はワーケーションの先進地として全国的に知られており、和歌山市でもその取り組みを推進しています。太平洋を望むロケーションでリフレッシュしながら働く新しいスタイルを提案しています。</p><p>補助額は<strong>最大30万円</strong>（企業利用の場合）です。<span class="marker-green">個人での利用も対象で、最大10万円</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象経費"><p>宿泊費（市内の宿泊施設）</p><p>コワーキングスペース利用料</p><p>交通費（市内移動分）</p><p>会議室・研修施設利用料</p></div><p>和歌山市役所産業政策課に申請書と利用計画書を提出します。実施後に実績報告書と領収書を提出して精算します。</p><p><span class="marker">3泊4日以上の滞在が条件</span>です。日帰りや1〜2泊の短期滞在は対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>企業利用の場合は対象経費の2分の1以内で<strong>最大30万円</strong>、個人利用の場合は<strong>最大10万円</strong>が補助されます。</p><p><span class="marker">和歌山市への移住検討につなげるため、移住相談会への参加を推奨</span>しています。ワーケーション体験から移住への流れも生まれています。</p><div class="note-box">和歌山市には友ヶ島（無人島）や和歌浦の絶景スポットなど、リフレッシュに最適な自然環境があります。ワーケーション中に地元の食文化（和歌山ラーメン、海鮮料理、みかんスイーツ）も楽しめます。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-nursing-home-reform',
    title: '和歌山市 介護リフォーム支援事業',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大20万円（介護保険上乗せ）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '和歌山県',
    tags: ['和歌山市', '介護リフォーム', '補助金'],
    eligibility: '和歌山市に住所を有する要介護・要支援認定者で住宅改修を行う方',
    applicationPeriod: '通年',
    description: '和歌山市が実施する介護リフォーム支援事業です。介護保険の住宅改修費に上乗せして最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 介護リフォーム支援事業は、<span class="marker">要介護・要支援認定を受けた方が在宅で安全に暮らし続けるための住宅改修</span>に対し、介護保険に上乗せして補助する制度です。</p><p>和歌山市は温暖な気候の一方で、古い木造住宅が多く残る地域でもあります。高齢者が住み慣れた自宅で安心して生活できるよう、バリアフリー改修の費用を介護保険の上限を超えて支援しています。</p><p>市の上乗せ補助は<strong>最大20万円</strong>です。<span class="marker-green">市民税非課税世帯が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる改修"><p>手すりの設置（浴室・トイレ・階段等）</p><p>段差の解消・スロープの設置</p><p>滑りにくい床材への変更</p><p>開き戸から引き戸への変更</p><p>洋式トイレへの交換</p></div><p>介護保険の住宅改修申請と同時に、和歌山市役所介護保険課に上乗せ補助を申請します。ケアマネジャーとの事前相談が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。完了後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>市の上乗せ補助は<strong>最大20万円</strong>です。介護保険の住宅改修費と合わせることで、より充実した改修が可能になります。</p><p><span class="marker">市民税非課税世帯限定の制度</span>です。課税世帯は介護保険の住宅改修費のみとなります。</p><div class="highlight-box">和歌山市は坂道の多い地形で、特に和歌浦や雑賀崎エリアでは急傾斜地に住宅が建ち並んでいます。自宅内だけでなく玄関アプローチのバリアフリー化も重要です。改修計画は理学療法士のアドバイスを参考にしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-migration-bonus',
    title: '和歌山市 移住支援金',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '和歌山県',
    tags: ['和歌山市', '移住支援', '給付金'],
    eligibility: '東京圏から和歌山市へ移住し、就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '和歌山市が実施する移住支援金です。東京圏から和歌山市へ移住し就業・創業した方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 移住支援金は、<span class="marker">東京23区に在住または東京圏から東京23区へ通勤していた方が和歌山市に移住</span>し、就業または創業した場合に支給される支援金です。</p><p>和歌山市は大阪から電車で約1時間のアクセスながら、太平洋の温暖な気候と豊かな食文化が楽しめる魅力的な移住先です。和歌山城周辺の市街地にはコンパクトに都市機能が集まり、加太や友ヶ島などのリゾートエリアも身近に楽しめます。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき100万円が加算</span>される場合もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から23区へ通勤していたこと</p><p>和歌山市に転入後3か月以上1年以内に申請すること</p><p>和歌山県のマッチングサイト掲載企業への就業または創業支援事業の利用</p><p>5年以上継続して和歌山市に居住する意思があること</p></div><p>和歌山市役所移住定住戦略課に申請書と必要書類を提出します。<strong>転入届提出後3か月以上</strong>経過してから申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子どもがいる世帯には子ども加算が適用されます。</p><p><span class="marker">5年以内に和歌山市から転出した場合は支援金の返還</span>が求められます。移住は長期的な生活設計として検討してください。</p><div class="note-box">和歌山市ではワーケーション体験や移住体験ツアーも開催しています。まずは短期滞在で和歌山の暮らしを体験し、その上で移住を決断するのがおすすめです。釣り好きにはたまらない海釣りスポットも豊富です。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-bousai-equipment',
    title: '和歌山市 防災資機材整備補助金',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'disaster',
    prefecture: '和歌山県',
    tags: ['和歌山市', '防災資機材', '補助金'],
    eligibility: '和歌山市内の自主防災組織',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '和歌山市が実施する防災資機材整備補助金です。自主防災組織の資機材購入費用を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 防災資機材整備補助金は、<span class="marker">市内の自主防災組織が防災活動に必要な資機材を整備する際</span>の費用を補助する制度です。</p><p>和歌山市は南海トラフ巨大地震による津波被害が強く懸念される地域です。沿岸部では津波到達時間が短いとされており、地域の自主的な防災力の強化が住民の命を守る鍵となっています。必要な資機材の整備を通じて、地域の防災体制を底上げします。</p><p>補助率は購入費の3分の2以内で、<strong>上限20万円</strong>です。<span class="marker-green">津波避難に関する資機材は優先的に採択</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる資機材"><p>発電機・投光器・LED照明</p><p>救助工具セット（バール、ジャッキ等）</p><p>防災倉庫・備蓄棚</p><p>拡声器・トランシーバー</p><p>簡易トイレ・飲料水タンク・毛布</p></div><p>和歌山市役所危機管理局に申請書と見積書を提出します。自主防災組織の代表者が申請してください。</p><p><span class="marker">購入前の事前申請が必要</span>です。交付決定を受けてから購入してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>購入費の3分の2以内で、<strong>上限20万円</strong>が補助されます。1団体につき年度内1回の申請が可能です。</p><p><span class="marker">個人での申請はできません</span>。自主防災組織としての届出が前提です。未結成の場合は結成の相談から始めてください。</p><div class="note-box">和歌山市では南海トラフ地震を想定した津波避難訓練を定期的に実施しています。資機材を整備するとともに、避難経路の確認や避難訓練への参加が重要です。沿岸部の地域は特に、迅速な高台避難の体制づくりに取り組んでください。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
];
