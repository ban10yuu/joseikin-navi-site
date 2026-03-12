import { Grant } from '@/lib/types';

export const cityGrantsBatch34: Grant[] = [
  // ────────────────────────────────────────────────
  // 池田市（大阪府）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'ikeda-child-medical',
    title: '池田市 子ども医療費助成制度',
    organization: '池田市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['池田市', '子ども医療費', '助成金'],
    eligibility: '池田市に住所を有する18歳（年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '池田市が実施する子ども医療費助成制度です。18歳の年度末まで通院・入院の医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>池田市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業相当の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>阪急宝塚線沿線に位置する池田市は、大阪市内へのアクセスが良い住宅都市です。カップヌードルミュージアムで知られるこのまちでは、通院・入院・調剤のすべてが助成の対象となっています。</p><p><span class="marker-green">所得制限はなく、池田市に住むすべての対象年齢の子どもが利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>池田市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（府外受診時の償還払い用）</p></div><p>池田市役所子育て支援課の窓口で申請できます。出生届・転入届と同時に手続きするとスムーズです。申請後、<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。大阪府内の医療機関では医療証の提示で窓口負担がなくなります。</p><p><span class="marker">府外の医療機関を受診した場合は、一旦窓口で支払い、後日償還払いの手続き</span>が必要です。領収書は必ず保管しましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校でのケガは日本スポーツ振興センターの給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ikeda.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ikeda-housing-seismic',
    title: '池田市 住宅耐震改修補助金',
    organization: '池田市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['池田市', '耐震改修', '補助金'],
    eligibility: '池田市内に昭和56年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '池田市が実施する住宅耐震改修補助金です。旧耐震基準の木造住宅の耐震改修工事に最大100万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>池田市 住宅耐震改修補助金は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の木造住宅</span>を対象に、耐震改修工事費用の一部を補助する制度です。</p><p>池田市は大阪北部に位置し、上町断層帯の影響が懸念されるエリアです。2018年の大阪北部地震を受け、住宅の耐震化への関心が一層高まっています。</p><p>補助額は耐震改修工事費の一部で、<strong>最大100万円</strong>が交付されます。<span class="marker-green">まずは無料の耐震診断を受けることが申請の第一歩</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>池田市内の旧耐震基準（昭和56年5月以前着工）の木造住宅であること</p><p>耐震診断の結果、耐震性が不足していると判定されていること</p><p>市税を滞納していないこと</p><p>過去にこの補助を受けていないこと</p></div><p>池田市役所都市整備部に申請書類を提出します。耐震診断結果報告書、改修工事の見積書、設計図書などが必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてからの着工が条件です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の一部で、<strong>上限100万円</strong>です。耐震診断も池田市では無料で受けられます。</p><p><span class="marker">先着順で予算がなくなり次第終了</span>となるため、年度初めの早期申請がおすすめです。</p><div class="highlight-box">耐震改修と併せてバリアフリー化や省エネ改修を行う場合、他の補助制度との併用が可能な場合があります。事前に市の窓口に相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ikeda.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ikeda-startup-support',
    title: '池田市 創業支援補助金',
    organization: '池田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['池田市', '創業支援', '補助金'],
    eligibility: '池田市内で新たに創業する方または創業後1年以内の事業者',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '池田市が実施する創業支援補助金です。市内での新規創業に要する初期費用の一部を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>池田市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する創業者</span>を対象に、創業に要する初期費用の一部を補助する制度です。</p><p>池田市はインスタントラーメン発祥の地として起業家精神にゆかりのあるまちです。市内の商業エリア活性化と雇用創出を目的に、創業を志す方を資金面から支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限30万円</strong>です。<span class="marker-green">店舗取得費、設備費、広告宣伝費など幅広い経費が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>池田市内で新たに事業を開始する個人または法人</p><p>創業後1年以内の事業者</p><p>市が実施する創業セミナーを受講した方</p><p>市税を滞納していないこと</p></div><p>池田市役所産業振興課に事業計画書と必要書類を提出します。審査のうえ交付が決定されます。</p><p>池田市の<strong>創業支援ネットワーク</strong>に登録すると、経営相談や専門家によるアドバイスも受けられます。計画段階から気軽に活用しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限30万円</strong>です。店舗賃借料、内装工事費、設備購入費、広告宣伝費などが対象経費に含まれます。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>となるため、必ず事前に申請を行ってください。</p><div class="note-box">池田商工会議所と連携した創業セミナーの受講が申請要件となる場合があります。市のウェブサイトで最新の募集要項を確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ikeda.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 伊丹市（兵庫県）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'itami-child-medical',
    title: '伊丹市 子ども医療費助成制度',
    organization: '伊丹市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['伊丹市', '子ども医療費', '助成金'],
    eligibility: '伊丹市に住所を有する高校3年生（18歳年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '伊丹市が実施する子ども医療費助成制度です。高校卒業相当年齢まで通院・入院の医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>伊丹市 子ども医療費助成制度は、<span class="marker">0歳から高校卒業相当（18歳の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>大阪国際空港（伊丹空港）の所在地として知られる伊丹市は、大阪と神戸の中間に位置する交通至便な住宅都市です。通院・入院・調剤のすべてが助成の対象となります。</p><p><span class="marker-green">所得制限はなく、伊丹市に住むすべての対象年齢の子どもが利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>伊丹市に住民登録があり、健康保険に加入している高校3年生（18歳年度末）までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>伊丹市役所こども家庭課の窓口で手続きします。出生届や転入届と同時に申請するのがおすすめです。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。兵庫県内の医療機関では受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い、後日償還払いの手続き</span>が必要です。領収書は大切に保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。他の公費負担医療制度が適用される場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.itami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itami-housing-reform',
    title: '伊丹市 住宅リフォーム助成制度',
    organization: '伊丹市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['伊丹市', '住宅リフォーム', '補助金'],
    eligibility: '伊丹市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '伊丹市が実施する住宅リフォーム助成制度です。市内業者を利用した住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>伊丹市 住宅リフォーム助成制度は、<span class="marker">市内施工業者を利用した住宅のリフォーム工事</span>に対して、工事費の一部を補助する制度です。</p><p>伊丹市は阪神間の住宅地として発展してきたまちで、築年数の経った住宅のリフォーム需要が増えています。外壁・屋根の改修、水回りの更新、バリアフリー化など幅広い工事が補助対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に事業所を持つ施工業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>伊丹市内に住所を有すること</p><p>リフォームする住宅が市内にあること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>伊丹市役所都市活力部の窓口に申請書類、見積書、工事図面等を提出します。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着工した場合は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象になりません。</p><p><span class="marker">先着順で予算に達し次第終了</span>となるため、年度初めの早期申請をおすすめします。</p><div class="highlight-box">バリアフリー改修の場合、介護保険の住宅改修費支給と組み合わせることで自己負担をさらに軽減できる可能性があります。市の窓口でご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itami.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'itami-infertility-treatment',
    title: '伊丹市 不妊治療費助成事業',
    organization: '伊丹市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['伊丹市', '不妊治療', '助成金'],
    eligibility: '伊丹市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6か月以内に申請）',
    description: '伊丹市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して最大10万円が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>伊丹市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる費用の一部を助成する市独自の上乗せ制度</span>です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、それでも自己負担は決して少なくありません。伊丹市では保険適用後の自己負担分に対して、1年度あたり最大10万円を助成しています。</p><p><span class="marker-green">体外受精・顕微授精のほか、タイミング法や人工授精も助成の対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>法律上の婚姻関係にある夫婦、または事実婚関係にあるカップル</p><p>夫婦の一方または双方が伊丹市に住民登録していること</p><p>医療保険に加入していること</p><p>市税を滞納していないこと</p></div><p>伊丹市役所健康福祉部の窓口に申請書と医療機関の領収書、治療内容がわかる書類を提出します。</p><p><strong>治療終了後6か月以内</strong>に申請が必要です。領収書と診療明細書は必ず保管しておきましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分で、<strong>1年度あたり上限10万円</strong>です。複数回の治療を受けた場合は合算して申請できます。</p><p><span class="marker">兵庫県の不妊治療費助成制度との併用が可能</span>です。県の助成を差し引いた自己負担分が市の助成の対象となります。</p><div class="note-box">助成を受けるためには保険適用の治療であることが条件です。自由診療のみの治療は対象外となる場合がありますので、事前に市の窓口で確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.itami.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 橿原市（奈良県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'kashihara-child-medical',
    title: '橿原市 子ども医療費助成制度',
    organization: '橿原市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['橿原市', '子ども医療費', '助成金'],
    eligibility: '橿原市に住所を有する中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '橿原市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>橿原市 子ども医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療における自己負担分を助成する制度です。</p><p>橿原市は藤原京跡や橿原神宮を擁する奈良県中部の中核都市です。近鉄大阪線・橿原線が交わる交通の要衝として、子育て世帯にも人気の高いまちです。通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限はなく、橿原市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>橿原市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>橿原市役所こども未来課の窓口で申請できます。出生届や転入届の提出時にあわせて手続きしましょう。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。奈良県内の医療機関では受給資格証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。日本スポーツ振興センターの災害共済給付が適用される場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashihara.nara.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashihara-housing-reform',
    title: '橿原市 住宅改修補助金',
    organization: '橿原市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '奈良県',
    tags: ['橿原市', '住宅リフォーム', '補助金'],
    eligibility: '橿原市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '橿原市が実施する住宅改修補助金です。市内業者による住宅リフォーム工事に最大25万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>橿原市 住宅改修補助金は、<span class="marker">市内の施工業者を利用した住宅のリフォーム工事</span>に対して費用の一部を補助する制度です。</p><p>橿原市は奈良盆地の南部に位置し、歴史的なまちなみと住宅地が共存するエリアです。築年数の経った住宅が多い地域でもあり、バリアフリー化や水回りの更新、省エネ改修など幅広いリフォームが補助対象となります。</p><p>補助率は対象工事費の10%で、<strong>上限は25万円</strong>です。<span class="marker-green">市内に営業所のある施工業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>橿原市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>橿原市役所まちづくり部の窓口に申請書類を提出します。工事見積書、施工箇所の写真、図面等が必要です。</p><p><span class="marker">必ず工事開始前に申請してください</span>。交付決定前に着工した場合は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%以内で、<strong>上限25万円</strong>です。工事費20万円未満の場合は対象外となります。</p><p><span class="marker">毎年先着順で予算に達し次第受付終了</span>となるため、早めの申請をおすすめします。</p><div class="highlight-box">耐震改修やバリアフリー改修は他の補助制度（耐震改修補助、介護保険住宅改修費）と併用できる場合があります。市の住宅相談窓口で事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashihara.nara.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashihara-scholarship',
    title: '橿原市 奨学金制度',
    organization: '橿原市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '奈良県',
    tags: ['橿原市', '奨学金', '教育支援'],
    eligibility: '橿原市に住所を有する世帯の高校生・大学生等',
    applicationPeriod: '毎年3月〜4月頃',
    description: '橿原市が実施する奨学金制度です。経済的理由により修学が困難な高校生・大学生等に月額最大3万円の奨学金を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>橿原市 奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>を支援するため、奨学金を給付する制度です。</p><p>橿原市では教育の機会均等を大切にしており、意欲ある学生が経済的な事情で進学を諦めることがないよう支援しています。高校生は月額1万円、大学生等は月額最大3万円が給付されます。</p><p><span class="marker-green">返済不要の給付型奨学金</span>であるため、卒業後の返済負担を心配する必要がありません。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>橿原市に住所を有する世帯の子ども</p><p>高等学校、高等専門学校、大学、短期大学、専門学校に在学中または進学予定の方</p><p>学業成績が一定水準以上であること</p><p>世帯の所得が市の定める基準以下であること</p></div><p>毎年3月〜4月頃に募集が行われます。橿原市教育委員会に申請書、成績証明書、世帯の所得証明書等を提出します。</p><p>書類審査と面接により選考が行われ、<strong>採用者には4月から奨学金が給付</strong>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>高校生が月額1万円、大学生等が月額最大3万円</strong>です。年額に換算すると高校生12万円、大学生最大36万円となります。</p><p><span class="marker">他の奨学金との併給が可能な場合があります</span>が、他の給付型奨学金との調整が入ることもあります。</p><div class="note-box">募集人数には限りがあり、申請者多数の場合は選考となります。申請期限を過ぎると受付できませんので、早めに準備を進めてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashihara.nara.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 米子市（鳥取県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'yonago-child-medical',
    title: '米子市 子ども医療費助成制度',
    organization: '米子市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '鳥取県',
    tags: ['米子市', '子ども医療費', '助成金'],
    eligibility: '米子市に住所を有する18歳（年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '米子市が実施する子ども医療費助成制度です。18歳の年度末まで通院・入院の医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>米子市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業相当の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>米子市は鳥取県西部の中心都市で、「山陰の商都」と呼ばれてきました。大山のふもとに広がるこのまちでは、鳥取県の手厚い子育て支援施策のもと、通院・入院・調剤のすべてが助成されています。</p><p><span class="marker-green">所得制限はなく、米子市に住むすべての対象年齢の子どもが利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>米子市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>米子市役所こども未来局の窓口で申請できます。出生届・転入届と同時に手続きするのがスムーズです。申請後、<strong>「特別医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。鳥取県内の医療機関では受給資格証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い、後日償還払い</span>の手続きが必要です。領収書は保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。鳥取県は全国的にも子ども医療費助成が手厚い県として知られています。</div>'
      }
    ],
    officialUrl: 'https://www.city.yonago.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yonago-startup-support',
    title: '米子市 創業支援補助金',
    organization: '米子市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '鳥取県',
    tags: ['米子市', '創業支援', '補助金'],
    eligibility: '米子市内で新たに創業する方または創業後1年以内の事業者',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '米子市が実施する創業支援補助金です。市内での新規創業に要する経費の一部を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>米子市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する創業者</span>を対象に、創業に要する経費の一部を補助する制度です。</p><p>米子市は鳥取県西部の商業・流通の中心地で、米子駅前を中心に再開発が進んでいます。IT企業の誘致にも力を入れており、市内のにぎわいづくりと新規雇用の創出を目的としています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">店舗取得費、設備費、広告宣伝費、外注費など幅広い経費が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>米子市内で新たに事業を開始する個人または法人</p><p>創業後1年以内の事業者</p><p>米子市の創業支援事業計画に基づく支援を受けた方</p><p>市税を滞納していないこと</p></div><p>米子市役所経済戦略課に事業計画書と必要書類を提出します。外部審査員による審査のうえ交付が決定されます。</p><p><strong>米子商工会議所</strong>や<strong>よなご産業支援センター</strong>での創業相談を事前に受けておくと、計画の精度が上がりスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。店舗賃借料、内装工事費、設備購入費、広告宣伝費、ホームページ制作費などが対象です。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>となるため、必ず申請・交付決定後に支出してください。</p><div class="highlight-box">鳥取県の創業支援補助金と併用できる場合があります。県と市の両方の制度を組み合わせることで、初期投資の負担をより軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yonago.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yonago-migration-support',
    title: '米子市 移住定住支援金',
    organization: '米子市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '鳥取県',
    tags: ['米子市', '移住支援', '支援金'],
    eligibility: '東京圏から米子市に移住し、就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '米子市が実施する移住定住支援金です。東京圏から移住し就業・創業した方に最大100万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>米子市 移住定住支援金は、<span class="marker">東京23区在住者または東京圏から東京23区へ通勤していた方</span>が米子市に移住し、就業または創業した場合に支援金を交付する制度です。</p><p>鳥取県西部の中核都市である米子市は、大山エリアへのアクセスが良く、自然と都市機能のバランスが取れたまちです。リモートワークの普及に伴い、地方移住先としても注目を集めています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき最大100万円が加算</span>される場合もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から23区に通勤していたこと</p><p>米子市に転入後3か月以上1年以内に申請すること</p><p>鳥取県のマッチングサイト掲載求人への就業、またはテレワーク移住、創業であること</p><p>5年以上継続して居住する意思があること</p></div><p>米子市役所地域振興課に申請書と必要書類を提出します。転入届と在職証明書（または創業に関する書類）などが必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子どもがいる世帯には子ども1人あたり最大100万円が加算されます。</p><p><span class="marker">5年以内に米子市から転出した場合、支援金の返還が求められます</span>。転勤や病気等のやむを得ない事情がある場合は免除される場合もあります。</p><div class="note-box">テレワーク移住の場合、所属先企業の「テレワーク実施に関する証明書」が必要です。詳細な要件は米子市のウェブサイトで最新情報を確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yonago.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 出雲市（島根県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'izumo-child-medical',
    title: '出雲市 子ども医療費助成制度',
    organization: '出雲市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '島根県',
    tags: ['出雲市', '子ども医療費', '助成金'],
    eligibility: '出雲市に住所を有する中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '出雲市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>出雲市 子ども医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療における自己負担分を助成する制度です。</p><p>出雲大社で全国的に知られる出雲市は、島根県東部の中核都市です。縁結びのまちとして観光都市の側面を持つ一方、子育て支援にも力を入れています。通院・入院・調剤のすべてが助成の対象です。</p><p><span class="marker-green">所得制限はなく、出雲市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>出雲市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>出雲市役所子ども政策課の窓口で手続きできます。出生届や転入届と一緒に申請するのがスムーズです。申請後、<strong>「福祉医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。島根県内の医療機関では受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い、後日償還払いの手続き</span>が必要です。領収書は大切に保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.izumo.shimane.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'izumo-housing-seismic',
    title: '出雲市 木造住宅耐震改修補助金',
    organization: '出雲市',
    type: 'local',
    maxAmount: '最大80万円',
    maxAmountNum: 80,
    category: 'housing',
    prefecture: '島根県',
    tags: ['出雲市', '耐震改修', '補助金'],
    eligibility: '出雲市内に昭和56年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '出雲市が実施する木造住宅耐震改修補助金です。旧耐震基準の木造住宅の耐震改修工事に最大80万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>出雲市 木造住宅耐震改修補助金は、<span class="marker">昭和56年5月31日以前に着工された旧耐震基準の木造住宅</span>を対象に、耐震改修工事費用の一部を補助する制度です。</p><p>出雲市は島根県東部に位置し、日本海側特有の強風や積雪への備えも重要なエリアです。古い木造住宅の耐震性向上を促進するため、市が改修費用を支援しています。</p><p>補助額は耐震改修工事費の一部で、<strong>最大80万円</strong>が交付されます。<span class="marker-green">耐震診断は無料で受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>出雲市内の旧耐震基準（昭和56年5月以前着工）の木造住宅であること</p><p>耐震診断の結果、評点1.0未満と判定されていること</p><p>市税を滞納していないこと</p><p>過去にこの補助を受けていないこと</p></div><p>出雲市役所建築住宅課に申請書類を提出します。耐震診断結果、改修工事の見積書・設計図書が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定後の着工が条件です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の一部で、<strong>上限80万円</strong>です。出雲市では無料の耐震診断も実施しているため、まずは診断から始めましょう。</p><p><span class="marker">先着順で予算がなくなり次第終了</span>となります。年度初めの早期申請がおすすめです。</p><div class="highlight-box">耐震改修とあわせてバリアフリー化や省エネ改修を行う場合、他の補助制度と併用できることがあります。出雲市の建築住宅課で事前に相談するとよいでしょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.izumo.shimane.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'izumo-startup-support',
    title: '出雲市 創業チャレンジ補助金',
    organization: '出雲市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '島根県',
    tags: ['出雲市', '創業支援', '補助金'],
    eligibility: '出雲市内で新たに創業する方または創業後1年以内の事業者',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '出雲市が実施する創業チャレンジ補助金です。市内での新規創業に要する経費の一部を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>出雲市 創業チャレンジ補助金は、<span class="marker">市内で新たに事業を始める創業者</span>を対象に、創業に必要な初期経費の一部を補助する制度です。</p><p>出雲市は出雲大社の門前町として発展した観光都市ですが、IT関連企業の進出やスタートアップ支援にも積極的です。まちのにぎわいづくりと雇用創出のため、多様な業種の創業を資金面から支援しています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">小売、飲食、サービス、ITなど幅広い業種が対象</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>出雲市内で新たに事業を開始する個人または法人</p><p>創業後1年以内の事業者</p><p>市が実施する創業支援セミナーまたは個別相談を受講した方</p><p>市税を滞納していないこと</p></div><p>出雲市役所産業政策課に事業計画書と必要書類を提出します。審査会での選考を経て交付が決定されます。</p><p><strong>出雲市ビジネスサポートセンター</strong>では無料の経営相談が受けられるため、計画段階から活用するのがおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。店舗賃借料、内装工事費、設備購入費、広告宣伝費、ウェブサイト制作費などが対象経費に含まれます。</p><p><span class="marker">交付決定前に支出した経費は原則対象外</span>です。計画段階で早めに申請手続きを進めましょう。</p><div class="note-box">島根県の創業支援制度や日本政策金融公庫の創業融資と組み合わせることも可能です。複数の支援制度を活用して創業コストを軽減しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.izumo.shimane.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 丸亀市（香川県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'marugame-child-medical',
    title: '丸亀市 子ども医療費助成制度',
    organization: '丸亀市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '香川県',
    tags: ['丸亀市', '子ども医療費', '助成金'],
    eligibility: '丸亀市に住所を有する18歳（年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '丸亀市が実施する子ども医療費助成制度です。18歳の年度末まで通院・入院の医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>丸亀市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業相当の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>丸亀城で知られる丸亀市は、讃岐うどんの本場としても有名な香川県中部の中核都市です。瀬戸内海に面した温暖な気候のもと、子育て支援の充実にも力を入れています。通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限はなく、丸亀市に住むすべての対象年齢の子どもが利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>丸亀市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>丸亀市役所子育て支援課の窓口で申請できます。出生届や転入届と同時に手続きするのがスムーズです。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。香川県内の医療機関では受給資格証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い、後日償還払い</span>の手続きが必要です。領収書は大切に保管しましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.marugame.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'marugame-housing-reform',
    title: '丸亀市 住宅リフォーム補助金',
    organization: '丸亀市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '香川県',
    tags: ['丸亀市', '住宅リフォーム', '補助金'],
    eligibility: '丸亀市内に住所を有し、市内業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '丸亀市が実施する住宅リフォーム補助金です。市内業者を利用した住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>丸亀市 住宅リフォーム補助金は、<span class="marker">市内の施工業者を利用した住宅のリフォーム工事</span>に対して費用の一部を補助する制度です。</p><p>丸亀市は瀬戸内海に面した温暖な地域ですが、台風や塩害の影響で住宅の外壁や屋根のメンテナンスが欠かせません。バリアフリー化、水回りの更新、省エネ改修など幅広いリフォームが補助対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に事業所のある施工業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>丸亀市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>丸亀市役所都市計画課の窓口に申請書類、見積書、工事図面等を提出します。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから着工しないと補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%以内で、<strong>上限20万円</strong>です。工事費20万円未満の小規模工事は対象外となります。</p><p><span class="marker">先着順で予算がなくなり次第終了</span>するため、年度初めの早期申請をおすすめします。</p><div class="highlight-box">バリアフリー改修は介護保険の住宅改修費と併用できる場合があります。また、耐震改修は別途の補助制度も用意されていますので、市の窓口で確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.marugame.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'marugame-migration-support',
    title: '丸亀市 移住支援金',
    organization: '丸亀市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '香川県',
    tags: ['丸亀市', '移住支援', '支援金'],
    eligibility: '東京圏から丸亀市に移住し、就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '丸亀市が実施する移住支援金です。東京圏から移住し就業・創業した方に最大100万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>丸亀市 移住支援金は、<span class="marker">東京23区在住者または東京圏から東京23区へ通勤していた方</span>が丸亀市に移住し、就業または創業した場合に支援金を交付する制度です。</p><p>丸亀市は瀬戸大橋を渡ってすぐの四国の玄関口に位置し、本州からのアクセスも良好です。丸亀城や瀬戸内海の島々など豊かな自然と歴史に囲まれた暮らしが魅力で、移住先として注目が高まっています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子ども1人につき最大100万円が加算</span>される場合もあります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から23区に通勤していたこと</p><p>丸亀市に転入後3か月以上1年以内に申請すること</p><p>香川県のマッチングサイト掲載求人への就業、テレワーク移住、または創業であること</p><p>5年以上継続して居住する意思があること</p></div><p>丸亀市役所産業文化部の窓口に申請書と必要書類を提出します。転入届、在職証明書（または創業に関する書類）が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>が基本です。18歳未満の子ども1人あたり最大100万円が加算されます。</p><p><span class="marker">5年以内に丸亀市から転出した場合、支援金の返還が求められます</span>。やむを得ない事情がある場合は免除されることもあります。</p><div class="note-box">丸亀市では移住前の「お試し移住体験」プログラムも実施しています。移住を検討中の方は、まず丸亀市の移住相談窓口に問い合わせてみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.marugame.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
