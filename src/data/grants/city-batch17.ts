import { Grant } from '@/lib/types';

export const cityGrantsBatch17: Grant[] = [
  // ────────────────────────────────────────────────
  // 沖縄市（沖縄県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'okinawa-city-child-medical',
    title: '沖縄市 こども医療費助成制度',
    organization: '沖縄市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '沖縄県',
    tags: ['沖縄市', '子ども医療費', '助成金'],
    eligibility: '沖縄市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '沖縄市が実施するこども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>沖縄市 こども医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>沖縄県内で2番目に人口が多い沖縄市は、エイサーのまちとして知られ、子育て世帯の多さが特徴です。通院・入院・調剤のいずれも助成対象となっており、子育て世帯の医療費負担を軽減しています。</p><p><span class="marker-green">所得制限は設けられておらず、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>沖縄市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>沖縄市役所こども家庭課の窓口で申請できます。出生届や転入届の手続きと同時に申請すると効率的です。申請後、<strong>「こども医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関であれば受給資格者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後、償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.okinawa.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okinawa-city-housing-reform',
    title: '沖縄市 住宅リフォーム支援事業',
    organization: '沖縄市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '沖縄県',
    tags: ['沖縄市', '住宅リフォーム', '補助金'],
    eligibility: '沖縄市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '沖縄市が実施する住宅リフォーム支援事業です。市内業者による住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>沖縄市 住宅リフォーム支援事業は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>台風が多い沖縄では住宅の維持・補修が重要です。外壁や屋根の補修、防水工事、トイレ・浴室の改修、バリアフリー化など幅広い工事が対象になっています。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に本店のある施工業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>沖縄市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>沖縄市役所建設部住宅課に申請書を提出します。見積書、工事内容がわかる図面や写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定の通知を受けてから工事を開始しないと補助対象外になります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となるため早めの申請がおすすめです。</p><div class="highlight-box">沖縄特有の台風対策工事（防風シャッター設置、コンクリート壁補修など）も対象です。他の住宅関連補助金との併用が可能な場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.okinawa.okinawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okinawa-city-startup-support',
    title: '沖縄市 創業支援補助金',
    organization: '沖縄市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '沖縄県',
    tags: ['沖縄市', '創業支援', '補助金'],
    eligibility: '沖縄市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '沖縄市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>沖縄市 創業支援補助金は、<span class="marker">市内で新たに事業を立ち上げる方</span>を対象に、創業にかかる初期費用を補助する制度です。</p><p>音楽のまち・コザとして知られる沖縄市は、独自の文化を活かした起業の盛んな街でもあります。店舗改装費、設備購入費、広告宣伝費などが補助対象で、地域経済の活性化を目的としています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>沖縄市内で創業する（または創業後1年以内である）こと</p><p>市の創業支援セミナーを受講していること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p></div><p>沖縄市役所経済文化部の窓口に事業計画書および申請書を提出します。面談による審査があり、計画の実現可能性が評価されます。</p><p><span class="marker">創業前の事前相談を強くおすすめします</span>。沖縄市のビジネスサポートセンターで無料の経営相談が受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。店舗改装費、設備費、広告費、法人設立費用などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。必ず交付決定を受けてから経費の支出を行ってください。</p><div class="note-box">人件費や家賃の運転資金は対象外です。飲食店開業の場合は、別途保健所の営業許可申請が必要になります。創業後5年間の営業継続が求められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.okinawa.okinawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 宇部市（山口県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'ube-child-medical',
    title: '宇部市 子ども医療費助成制度',
    organization: '宇部市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['宇部市', '子ども医療費', '助成金'],
    eligibility: '宇部市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '宇部市が実施する子ども医療費助成制度です。高校卒業相当年齢までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇部市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>彫刻のまちとして知られる宇部市は、子育て環境の整備にも積極的に取り組んでいます。通院・入院・調剤のすべてが助成対象となっており、子育て世帯の経済的な安心を支えています。</p><p><span class="marker-green">所得制限なしで、宇部市に住む対象年齢の子どもがいるすべての世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宇部市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>宇部市役所こども未来部の窓口で申請します。出生届や転入届と同時に手続きするのがスムーズです。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。山口県内の医療機関では受給資格証を提示すれば窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きを行います。受診から6か月以内に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健康診断など）は助成対象外です。交通事故など第三者行為によるケガは別途届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.ube.yamaguchi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ube-infertility-treatment',
    title: '宇部市 不妊治療費助成事業',
    organization: '宇部市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '山口県',
    tags: ['宇部市', '不妊治療', '助成金'],
    eligibility: '宇部市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から6か月以内に申請）',
    description: '宇部市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して最大10万円が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇部市 不妊治療費助成事業は、<span class="marker">保険適用の不妊治療にかかる自己負担分</span>を助成する市独自の上乗せ制度です。</p><p>2022年4月から不妊治療の保険適用範囲が拡大されましたが、それでも治療費の自己負担は大きな家計負担となります。宇部市ではこうした経済的負担を軽減し、安心して治療に取り組める環境づくりを支援しています。</p><p>1回の治療につき<strong>最大10万円</strong>を助成し、<span class="marker-green">年間の回数制限なく利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>夫婦のいずれかが宇部市に住民登録しており、医療機関で不妊治療を受けていることが条件です。事実婚の方も対象となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>助成金交付申請書</p><p>医療機関の受診等証明書</p><p>医療費の領収書（原本）</p><p>夫婦の住民票</p><p>振込先口座情報</p></div><p><span class="marker">治療終了日から6か月以内に宇部市役所健康福祉部へ申請</span>してください。期限を過ぎると申請できなくなります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対し、<strong>1回の治療あたり最大10万円</strong>が助成されます。自己負担額が10万円未満の場合は実費分が助成されます。</p><p><span class="marker">山口県の不妊治療費助成制度との併用はできません</span>ので、どちらの制度を利用するか事前に比較検討してください。</p><div class="highlight-box">先進医療として実施される治療は保険適用外のため、本助成の対象外となる場合があります。事前に医療機関と市の窓口に確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ube.yamaguchi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ube-housing-earthquake',
    title: '宇部市 木造住宅耐震改修補助事業',
    organization: '宇部市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '山口県',
    tags: ['宇部市', '耐震改修', '補助金'],
    eligibility: '宇部市内に昭和56年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '宇部市が実施する木造住宅耐震改修補助事業です。旧耐震基準の木造住宅の耐震改修に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇部市 木造住宅耐震改修補助事業は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の木造住宅</span>について、耐震改修工事費の一部を補助する制度です。</p><p>地震による住宅倒壊の被害を未然に防ぐため、耐震性が不足する住宅の補強工事を促進しています。まずは無料の耐震診断を受け、その結果に基づいて改修計画を立てる流れになります。</p><p>補助額は対象工事費の5分の4以内で、<strong>上限100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>2階建て以下であること</p><p>耐震診断の結果、上部構造評点が1.0未満であること</p><p>宇部市内に所在すること</p></div><p>宇部市役所都市政策部建築指導課に申請します。事前に市が実施する無料耐震診断を受けていることが前提条件です。</p><p><span class="marker">必ず工事着手前に交付申請を行ってください</span>。着工後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の5分の4以内で、<strong>上限は100万円</strong>です。改修後の耐震診断で上部構造評点が1.0以上になることが求められます。</p><p><span class="marker">耐震診断は市の無料制度を利用可能</span>です。まずは診断の申し込みから始めましょう。</p><div class="note-box">耐震改修工事と合わせてリフォームを行う場合、耐震改修に直接関係しない部分は補助対象外です。所得税の特別控除（耐震改修促進税制）も併用できるため、確定申告時にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ube.yamaguchi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 松本市（長野県）3件: childcare, education, employment
  // ────────────────────────────────────────────────
  {
    slug: 'matsumoto-child-medical',
    title: '松本市 福祉医療費給付金（子ども）',
    organization: '松本市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '長野県',
    tags: ['松本市', '子ども医療費', '助成金'],
    eligibility: '松本市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '松本市が実施する福祉医療費給付金（子ども）です。高校卒業相当年齢までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 福祉医療費給付金（子ども）は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を給付する制度です。</p><p>国宝松本城で知られる松本市は、「健康寿命延伸都市」を掲げ、子どもの健康を守る施策にも力を入れています。通院・入院・調剤のすべてが給付対象で、安心して医療を受けられる環境を整えています。</p><p><span class="marker-green">所得制限は設けられておらず、松本市在住の対象世帯すべてが利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松本市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>松本市役所こども部の窓口で資格登録の申請を行います。出生届や転入届の手続きと同時に申請すると効率的です。登録後、<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額給付</strong>されます。長野県内の医療機関であれば受給者証を提示することで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。診療月の翌月以降に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健康診断など）は給付対象外です。入院時の食事代も自己負担となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-scholarship',
    title: '松本市 奨学金制度',
    organization: '松本市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '長野県',
    tags: ['松本市', '奨学金', '教育支援'],
    eligibility: '松本市に住所を有する高校生・大学生等の保護者で、経済的理由により修学が困難な方',
    applicationPeriod: '毎年3月〜4月頃',
    description: '松本市が実施する奨学金制度です。経済的理由で修学が困難な学生に月額最大3万円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に対して、奨学金を貸与する制度です。</p><p>教育のまちづくりを推進する松本市は、意欲ある若者が経済的事情で進学を諦めることのないよう支援しています。高校生には月額1万5千円、大学生等には月額3万円が貸与されます。</p><p><strong>無利子での貸与</strong>であり、卒業後の返還も無利子です。<span class="marker-green">他の奨学金制度との併用も可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>保護者が松本市内に住所を有すること</p><p>高校・大学・専門学校等に在学または進学予定であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が一定基準以上であること</p></div><p>松本市教育委員会教育政策課に申請します。毎年3月から4月の募集期間内に、申請書・在学証明書・所得証明書等を提出してください。</p><p><span class="marker">選考により決定されるため、申請すれば必ず採用されるわけではありません</span>。募集人数には限りがあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は高校生が<strong>月額1万5千円</strong>、大学生・専門学校生等が<strong>月額3万円</strong>です。年額に換算すると高校生18万円、大学生36万円となります。</p><p><span class="marker">卒業後6か月の据置期間を経て、貸与期間の2倍以内で返還</span>します。無利子なので借りた総額のみの返還です。</p><div class="highlight-box">松本市在住の方は、日本学生支援機構（JASSO）の奨学金や長野県の奨学金との併用が可能です。複数の制度を組み合わせて計画的に活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsumoto-startup-support',
    title: '松本市 創業支援事業補助金',
    organization: '松本市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '長野県',
    tags: ['松本市', '創業支援', '補助金'],
    eligibility: '松本市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '松本市が実施する創業支援事業補助金です。市内での新規創業に必要な初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松本市 創業支援事業補助金は、<span class="marker">市内で新たに事業を開始する創業者</span>を支援する制度です。</p><p>城下町の歴史と豊かな自然環境を持つ松本市は、近年クラフトやアートなど独自の文化を活かした起業も増えています。店舗改装費、設備購入費、広告費などの初期費用に対して補助が受けられます。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>松本市内で創業する（または創業後1年以内である）こと</p><p>市の創業支援事業の支援を受けていること</p><p>市税を滞納していないこと</p><p>実現可能な事業計画書を提出できること</p></div><p>松本市役所商工課に事業計画書と申請書を提出します。松本市創業支援プラットフォームや商工会議所で事前に経営相談を受けておくとスムーズです。</p><p><span class="marker">申請前に市の創業相談窓口で事前相談を行うことが推奨</span>されています。計画のブラッシュアップにつながります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。店舗改装費、設備購入費、広告宣伝費、法人設立費用などが対象です。</p><p><span class="marker">交付決定前に発注・支出した経費は補助対象外</span>です。必ず交付決定通知を受けてから経費の支出を行ってください。</p><div class="note-box">人件費や運転資金（家賃、光熱費など）は対象外です。補助金を受けた場合、一定期間（概ね5年間）の事業継続が求められます。廃業した場合は補助金の返還を求められることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 高崎市（群馬県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'takasaki-child-medical',
    title: '高崎市 子ども医療費助成制度',
    organization: '高崎市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['高崎市', '子ども医療費', '助成金'],
    eligibility: '高崎市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '高崎市が実施する子ども医療費助成制度です。高校卒業相当年齢までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>だるまの生産量日本一を誇る高崎市は、子育て支援にも手厚い自治体として知られています。通院・入院・調剤のすべてが対象で、子育て世帯が安心して医療を受けられる環境を整備しています。</p><p><span class="marker-green">所得制限なしで、高崎市に住む対象年齢の子どもがいるすべての世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高崎市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>高崎市役所こども家庭課または各支所の窓口で申請します。出生届・転入届の手続きと同時に行うのが便利です。登録後、<strong>「子ども医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。群馬県内の医療機関であれば受給資格者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払った後、償還払い</span>の手続きを行います。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健康診断など）は助成対象外です。学校でのケガは日本スポーツ振興センターの災害共済給付制度が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-housing-reform',
    title: '高崎市 住環境改善助成事業',
    organization: '高崎市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['高崎市', '住宅リフォーム', '補助金'],
    eligibility: '高崎市内に住所を有し、市内の施工業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '高崎市が実施する住環境改善助成事業です。市内業者を利用した住宅リフォームに最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 住環境改善助成事業は、<span class="marker">市内の施工業者を利用した住宅リフォーム工事</span>に対して費用の一部を補助する制度です。</p><p>高崎市は群馬県最大の人口を有する中核市で、交通の要衝としても知られています。住環境の向上と地域の経済活性化を同時に推進するため、幅広いリフォーム工事を補助対象としています。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に本店がある施工業者に依頼することが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>高崎市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上（税込）の工事であること</p></div><p>高崎市役所建築住宅課または各支所で申請書を提出します。工事の見積書と施工内容がわかる図面・写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費（税込）の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外です。</p><p><span class="marker">毎年度の予算には限りがあり、先着順で受付終了</span>となります。年度初めの早い時期に申請するのがおすすめです。</p><div class="highlight-box">外壁塗装、屋根葺替え、浴室・トイレ改修、バリアフリー化など幅広い工事が対象です。耐震改修補助など他の市の補助制度と併用できる場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takasaki-migration-support',
    title: '高崎市 移住支援金',
    organization: '高崎市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '群馬県',
    tags: ['高崎市', '移住支援', '支援金'],
    eligibility: '東京23区在住または通勤者で、高崎市に移住した方',
    applicationPeriod: '通年（転入後3か月以上1年以内に申請）',
    description: '高崎市が実施する移住支援金制度です。東京圏からの移住者に対して最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高崎市 移住支援金は、<span class="marker">東京23区に在住または通勤していた方が高崎市に移住した場合</span>に支援金を支給する制度です。</p><p>東京駅から新幹線で約50分というアクセスの良さを持つ高崎市は、都市機能と自然環境が共存する暮らしやすさが魅力です。地方創生の一環として、東京一極集中の是正と地域の活性化を目的に実施されています。</p><p>単身で<strong>最大60万円</strong>、世帯で<strong>最大100万円</strong>が支給されます。<span class="marker-green">18歳未満の子どもがいる世帯には加算措置</span>もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上、東京23区に在住または通勤していたこと</p><p>高崎市に転入後3か月以上1年以内に申請すること</p><p>群馬県のマッチングサイト掲載企業への就職、またはテレワーク移住であること</p><p>5年以上継続して居住する意思があること</p></div><p>高崎市役所企画調整課に申請書類一式を提出します。就業証明書やテレワーク実施の証明など、移住類型に応じた書類が必要です。</p><p><span class="marker">転入届を出してから3か月経過後に申請可能</span>となります。1年を過ぎると申請できなくなるため注意してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>単身での移住は<strong>60万円</strong>、世帯での移住は<strong>100万円</strong>が支給されます。18歳未満の子どもがいる場合は子ども1人につき最大100万円が加算されます。</p><p><span class="marker">支給後5年以内に高崎市から転出した場合は、支援金の全額または一部の返還</span>が求められます。</p><div class="note-box">起業の場合は別途「起業支援金」（最大200万円）と併用できる可能性があります。詳細は高崎市の窓口または群馬県のホームページでご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/',
    publishedAt: '2026-03-12',
  },
];
