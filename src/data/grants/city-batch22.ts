import { Grant } from '@/lib/types';

export const cityGrantsBatch22: Grant[] = [
  // ────────────────────────────────────────────────
  // 調布市（東京都）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'chofu-child-medical',
    title: '調布市 子ども医療費助成制度',
    organization: '調布市',
    type: 'local',
    maxAmount: '高校生まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['調布市', '子ども医療費', '助成金'],
    eligibility: '調布市に住所を有する18歳（高校生年齢）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '調布市が実施する子ども医療費助成制度です。高校生年齢までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>調布市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校生年齢の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>調布市は新宿から京王線で約15分というアクセスの良さから子育て世帯に人気のエリアです。東京都の「マル子」「マル青」医療証制度に加え、市独自の上乗せ助成により、通院・入院・調剤のすべてが助成対象となっています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>調布市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーがわかるもの</p></div><p>調布市役所子ども政策課の窓口で申請できます。出生届や転入届と同時に手続きすると効率的です。申請後、<strong>「子ども医療証（マル乳・マル子・マル青）」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。都内の医療機関であれば医療証の提示で窓口負担がなくなります。</p><p><span class="marker">都外の医療機関を受診した場合は、一旦自己負担分を支払い後、償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chofu.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chofu-housing-reform',
    title: '調布市 住宅改修費補助事業',
    organization: '調布市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['調布市', '住宅リフォーム', '補助金'],
    eligibility: '調布市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '調布市が実施する住宅改修費補助事業です。市内業者による住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>調布市 住宅改修費補助事業は、<span class="marker">市内の施工業者を利用した住宅の改修工事</span>に対して費用の一部を補助する制度です。</p><p>多摩地域に位置する調布市は、築年数の経過した住宅が多く、バリアフリー化や省エネ改修のニーズが高まっています。外壁補修、屋根の葺き替え、トイレ・浴室のリフォーム、断熱改修など幅広い工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に事業所がある施工業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>調布市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>調布市役所都市整備部住宅課に申請書を提出します。見積書、工事内容がわかる図面や写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始しないと補助対象外になります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となるため早めの申請がおすすめです。</p><div class="highlight-box">耐震改修工事については別途「調布市木造住宅耐震改修助成制度」が利用可能です。併用できる場合もあるので、窓口で確認してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chofu.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chofu-education-support',
    title: '調布市 就学援助制度',
    organization: '調布市',
    type: 'local',
    maxAmount: '学用品費等を支給',
    maxAmountNum: 10,
    category: 'education',
    prefecture: '東京都',
    tags: ['調布市', '就学援助', '教育支援'],
    eligibility: '調布市立小中学校に在籍する児童生徒の保護者で、経済的に就学が困難な方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '調布市が実施する就学援助制度です。経済的理由で就学が困難な家庭に学用品費や給食費などを援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>調布市 就学援助制度は、<span class="marker">経済的な理由で就学が困難な児童生徒の保護者</span>に対して、学用品費・給食費・修学旅行費などを援助する制度です。</p><p>生活保護を受けている世帯（要保護）だけでなく、生活保護に準ずる程度に困窮している世帯（準要保護）も対象となります。調布市教育委員会が世帯の所得状況を審査して認定を行います。</p><p><span class="marker-green">入学前の新1年生には入学準備金の前倒し支給</span>も実施しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>調布市立の小学校・中学校に在籍する児童生徒の保護者が対象です。</p><div class="summary-box" data-title="援助される費用"><p>学用品費・通学用品費</p><p>学校給食費</p><p>修学旅行費・校外活動費</p><p>新入学学用品費（入学準備金）</p></div><p>毎年4月に学校を通じて案内される申請書に必要事項を記入し、<strong>前年の所得を証明する書類</strong>を添えて学校または教育委員会に提出します。年度途中からの申請も可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は費目ごとに国の基準額に準じて決定されます。例えば新入学学用品費は<strong>小学校で約5万円、中学校で約6万円</strong>が支給されます。</p><p><span class="marker">認定の基準となる所得は世帯全体の合算</span>で判定されます。審査には数週間かかる場合があります。</p><div class="note-box">認定を受けても転出や世帯状況の変更があった場合は届出が必要です。PTA会費や一部の実費については対象外となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.chofu.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 平塚市（神奈川県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'hiratsuka-child-medical',
    title: '平塚市 小児医療費助成制度',
    organization: '平塚市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['平塚市', '子ども医療費', '助成金'],
    eligibility: '平塚市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '平塚市が実施する小児医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>平塚市 小児医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>湘南エリアに位置する平塚市は、七夕まつりで全国的に知られる海沿いのまちです。通院・入院・調剤のいずれも助成対象となっており、子育て世帯の経済的負担を大きく軽減しています。</p><p><span class="marker-green">1歳以上は所得制限が設けられている</span>ため、対象となるか事前に確認しましょう。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>平塚市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>所得証明書（転入者の場合）</p></div><p>平塚市役所こども家庭課の窓口で申請します。出生届や転入届と合わせて手続きするのが便利です。申請後、<strong>「小児医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が助成</strong>されます。県内の医療機関であれば医療証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦支払い後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。所得制限を超える世帯でも入院時の食事療養費は助成対象となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiratsuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiratsuka-housing-seismic',
    title: '平塚市 木造住宅耐震改修補助制度',
    organization: '平塚市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['平塚市', '耐震改修', '補助金'],
    eligibility: '平塚市内に昭和56年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '平塚市が実施する木造住宅耐震改修補助制度です。旧耐震基準の木造住宅の耐震改修に最大100万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>平塚市 木造住宅耐震改修補助制度は、<span class="marker">昭和56年5月以前に建築された旧耐震基準の木造住宅</span>の耐震改修工事に対して費用を補助する制度です。</p><p>相模湾沿岸に位置する平塚市は、南関東地震などの地震リスクが懸念されるエリアです。市民の生命と財産を守るため、耐震性の低い木造住宅の改修を積極的に支援しています。</p><p>補助額は耐震改修工事費の一部で、<strong>上限100万円</strong>です。<span class="marker-green">無料の耐震診断も実施</span>しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>平塚市内に所在する木造住宅であること</p><p>昭和56年5月31日以前に着工されたこと</p><p>耐震診断の結果、評点が1.0未満であること</p><p>市税を滞納していないこと</p></div><p>まずは無料の耐震診断を受け、その結果をもとに改修計画を立てます。平塚市役所まちづくり政策部建築指導課に申請書を提出してください。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから工事を開始</span>する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費に応じて算定され、<strong>上限100万円</strong>が補助されます。改修後の耐震評点が1.0以上になることが条件です。</p><p><span class="marker">年間の予算枠に限りがあり、先着順</span>で受付されます。計画的な申請が大切です。</p><div class="highlight-box">耐震診断は無料で受けられます。まずは診断を受けて、住宅の耐震性能を確認するところから始めましょう。部分的な耐震補強（シェルター設置等）も別制度で支援されています。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiratsuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hiratsuka-startup-support',
    title: '平塚市 創業支援補助金',
    organization: '平塚市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['平塚市', '創業支援', '補助金'],
    eligibility: '平塚市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '平塚市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>平塚市 創業支援補助金は、<span class="marker">市内で新たに事業を始める創業者</span>を対象に、創業に必要な初期費用の一部を補助する制度です。</p><p>JR平塚駅周辺の商業地域を中心に、新たな事業者を誘致・育成することで地域経済の活性化を図っています。店舗の改装費、設備導入費、広告宣伝費など幅広い経費が対象です。</p><p>補助率は対象経費の2分の1で、<strong>上限は30万円</strong>です。<span class="marker-green">市の創業支援セミナーの受講が申請条件</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>平塚市内で新たに創業する個人・法人が対象です。創業後1年以内であれば申請可能です。</p><div class="summary-box" data-title="補助対象経費"><p>店舗改装費・内装工事費</p><p>設備・備品購入費</p><p>広告宣伝費（チラシ・Web制作等）</p><p>法人設立に係る登記費用</p></div><p>平塚市役所産業振興部商業観光課に申請書と事業計画書を提出します。<strong>市が実施する創業セミナーまたは個別相談を事前に受ける</strong>ことが必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1で、<strong>上限30万円</strong>です。補助金は事業完了後の精算払いとなります。</p><p><span class="marker">事業開始後に実績報告書と領収書の提出が必要</span>です。計画通りに事業を進めましょう。</p><div class="note-box">風俗営業やフランチャイズ加盟による創業は対象外となる場合があります。日本政策金融公庫の創業融資など、他の支援制度との併用も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiratsuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 茅ヶ崎市（神奈川県）3件: childcare, medical, living
  // ────────────────────────────────────────────────
  {
    slug: 'chigasaki-child-medical',
    title: '茅ヶ崎市 小児医療費助成制度',
    organization: '茅ヶ崎市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['茅ヶ崎市', '子ども医療費', '助成金'],
    eligibility: '茅ヶ崎市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '茅ヶ崎市が実施する小児医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>茅ヶ崎市 小児医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>湘南の中心都市として知られる茅ヶ崎市は、サザンビーチや烏帽子岩で有名な海辺のまちです。子育て世帯の移住も多く、通院・入院・調剤のすべてが助成対象となっています。</p><p><span class="marker-green">0歳児は所得制限なし</span>で利用でき、1歳以上も所得制限の基準内であれば全額助成されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>茅ヶ崎市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>所得証明書（転入者の場合）</p></div><p>茅ヶ崎市役所こども育成部子育て支援課の窓口で申請します。出生届や転入届と同時に手続きすることをおすすめします。申請後、<strong>「小児医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が助成</strong>されます。県内の医療機関であれば医療証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦支払い後に償還払い</span>の手続きが必要です。領収書の保管を忘れないようにしましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健康診断など）は助成対象外です。他の公費医療制度（自立支援医療など）が適用される場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.chigasaki.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chigasaki-infertility-treatment',
    title: '茅ヶ崎市 不妊治療費助成事業',
    organization: '茅ヶ崎市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '神奈川県',
    tags: ['茅ヶ崎市', '不妊治療', '助成金'],
    eligibility: '茅ヶ崎市に住所を有する不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日の翌日から1年以内）',
    description: '茅ヶ崎市が実施する不妊治療費助成事業です。一般不妊治療や先進医療にかかる費用を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>茅ヶ崎市 不妊治療費助成事業は、<span class="marker">保険適用の不妊治療を受けている夫婦</span>に対して、自己負担分の一部を助成する市独自の制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、保険適用後も自己負担（3割）は発生します。茅ヶ崎市ではこの自己負担分や先進医療にかかる費用を独自に助成し、治療を受けやすい環境を整えています。</p><p><strong>1年度あたり上限10万円</strong>が助成されます。<span class="marker-green">夫婦のいずれかが市内に住所を有していれば申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>法律上の婚姻関係にある夫婦、または事実婚関係にある方で、夫婦の一方または双方が茅ヶ崎市に住民登録していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>申請書（市HPよりダウンロード可）</p><p>医療機関発行の治療証明書</p><p>領収書のコピー</p><p>夫婦の住所が確認できる書類</p></div><p>茅ヶ崎市保健所健康増進課に申請します。<strong>治療終了日の翌日から1年以内</strong>に申請する必要がありますので、治療が終わったら早めに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用の不妊治療にかかる自己負担額および先進医療費に対して、<strong>年度あたり上限10万円</strong>が助成されます。</p><p><span class="marker">体外受精・顕微授精だけでなく、タイミング法や人工授精などの一般不妊治療も対象</span>です。</p><div class="highlight-box">神奈川県の不妊治療費助成制度との併用が可能な場合もあります。まずは県の制度も確認した上で、市の窓口に相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.chigasaki.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'chigasaki-migration-support',
    title: '茅ヶ崎市 移住定住促進助成金',
    organization: '茅ヶ崎市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '神奈川県',
    tags: ['茅ヶ崎市', '移住支援', '助成金'],
    eligibility: '茅ヶ崎市に新たに転入し、定住の意思がある方',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '茅ヶ崎市が実施する移住定住促進助成金です。市外から転入した世帯に引越し費用等を最大30万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>茅ヶ崎市 移住定住促進助成金は、<span class="marker">市外から茅ヶ崎市に新たに転入する世帯</span>を対象に、移住に伴う初期費用を補助する制度です。</p><p>湘南エリアでのライフスタイルに憧れる移住希望者が増加する中、茅ヶ崎市では住宅取得やリフォーム、引越し費用の一部を助成して移住を後押ししています。</p><p>子育て世帯は加算があり、<strong>最大30万円</strong>の助成が受けられます。<span class="marker-green">テレワーク移住者も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>転入前に市外に1年以上居住していたこと</p><p>茅ヶ崎市に5年以上定住する意思があること</p><p>市税等を滞納していないこと</p><p>暴力団員等でないこと</p></div><p>茅ヶ崎市役所企画部企画経営課に申請書と必要書類を提出します。転入届の提出から一定期間内に申請する必要があります。</p><p><span class="marker">住宅取得（購入・新築）の場合は基本額が高く設定</span>されています。賃貸住宅への転入でも対象となる場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本助成額は世帯構成や住宅の取得形態により異なり、<strong>子育て世帯は加算で最大30万円</strong>が支給されます。</p><p><span class="marker">5年以内に転出した場合は助成金の返還が求められる</span>可能性があります。定住を前提とした制度です。</p><div class="note-box">移住に関する相談は茅ヶ崎市の移住相談窓口で受け付けています。オンライン相談にも対応しているので、まずは気軽に問い合わせてみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chigasaki.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大和市（神奈川県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'yamato-child-medical',
    title: '大和市 小児医療費助成制度',
    organization: '大和市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['大和市', '子ども医療費', '助成金'],
    eligibility: '大和市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '大和市が実施する小児医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大和市 小児医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>県央に位置する大和市は、東京・横浜へのアクセスが良く、ベッドタウンとして発展してきました。「健康都市」を掲げる大和市では、子どもの健康を守る医療費助成に力を入れています。</p><p><span class="marker-green">0歳児は所得制限なし</span>で助成が受けられます。1歳以上は所得制限が設けられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大和市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>所得証明書（転入者の場合）</p></div><p>大和市役所こども総務課の窓口で申請します。出生届や転入届と同時に手続きするのが便利です。申請後、<strong>「小児医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が助成</strong>されます。県内の医療機関であれば医療証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦支払い後に償還払い</span>の手続きが必要です。領収書を忘れずに保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。大和市では「健康都市やまと」として、予防接種の一部についても別途助成制度があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamato.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamato-housing-reform',
    title: '大和市 住宅リフォーム助成制度',
    organization: '大和市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['大和市', '住宅リフォーム', '補助金'],
    eligibility: '大和市内に住所を有し、市内の自己所有住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '大和市が実施する住宅リフォーム助成制度です。市内業者による住宅改修工事に最大10万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大和市 住宅リフォーム助成制度は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>大和市は県央部に位置し、戸建て住宅が多いエリアです。築年数の経った住宅のバリアフリー化や省エネ改修、水回りのリフォームなど幅広い工事が対象になります。</p><p>補助率は対象工事費の5%で、<strong>上限は10万円</strong>です。<span class="marker-green">市内に事業所がある施工業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大和市内に住所を有すること</p><p>改修する住宅が市内の自己所有物件であること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>大和市役所街づくり総務課に申請書を提出します。見積書、工事内容がわかる書類が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着手した工事は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の5%で、<strong>上限10万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">予算枠に限りがあり、先着順で受付</span>されます。毎年度の受付開始時期に合わせて準備しましょう。</p><div class="highlight-box">大和市では耐震改修工事に対する別途の補助制度も用意されています。リフォームと耐震改修を同時に計画する場合は、両制度の併用について窓口で確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamato.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamato-startup-support',
    title: '大和市 創業支援事業補助金',
    organization: '大和市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['大和市', '創業支援', '補助金'],
    eligibility: '大和市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '大和市が実施する創業支援事業補助金です。市内での新規創業に必要な経費を最大20万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大和市 創業支援事業補助金は、<span class="marker">市内で新たに事業を始める創業者</span>を対象に、創業に必要な初期費用の一部を補助する制度です。</p><p>大和市は3つの鉄道路線が乗り入れる交通の要衝で、商業施設も充実しています。地域経済を支える新たな事業者の誕生を後押しするため、創業にかかる費用を補助しています。</p><p>補助率は対象経費の2分の1で、<strong>上限は20万円</strong>です。<span class="marker-green">特定創業支援等事業の証明書を取得していること</span>が条件です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大和市内で新規に事業を開始する個人・法人が対象です。</p><div class="summary-box" data-title="補助対象経費"><p>店舗・事務所の改装費</p><p>設備・備品の購入費</p><p>広告宣伝費</p><p>開業届出・法人登記に係る費用</p></div><p>大和市役所市民経済部産業活性課に申請書と事業計画書を提出します。<strong>大和市の特定創業支援等事業（セミナーや相談会）を受講</strong>し、証明書を取得しておく必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限20万円</strong>です。補助金は事業完了後の精算払いです。</p><p><span class="marker">創業前に申請し、交付決定後に事業を開始する</span>流れとなります。計画的に準備を進めましょう。</p><div class="note-box">創業に関する相談は大和市の産業活性課やイコーザ（大和市民活動センター）でも受け付けています。日本政策金融公庫の融資制度なども活用すると、資金面のハードルを下げられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamato.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 長岡市（新潟県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'nagaoka-child-medical',
    title: '長岡市 子ども医療費助成制度',
    organization: '長岡市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '新潟県',
    tags: ['長岡市', '子ども医療費', '助成金'],
    eligibility: '長岡市に住所を有する0歳から18歳（高校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '長岡市が実施する子ども医療費助成制度です。高校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長岡市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>花火のまちとして全国的に知られる長岡市は、新潟県第2の都市です。子育て支援に力を入れており、他の多くの自治体が中学卒業までとする中、高校卒業まで助成を拡充しています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。通院・入院・調剤のすべてが対象となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長岡市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（償還払い用）</p></div><p>長岡市役所子ども家庭課またはアオーレ長岡の窓口で申請できます。出生届や転入届と同時の手続きがスムーズです。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関であれば受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦支払い後に償還払い</span>の手続きが必要です。領収書は必ず保管しましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。高校生については、在学を証明する書類の提出が必要な場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagaoka.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagaoka-housing-snow',
    title: '長岡市 克雪すまいづくり支援事業',
    organization: '長岡市',
    type: 'local',
    maxAmount: '最大36万円',
    maxAmountNum: 36,
    category: 'housing',
    prefecture: '新潟県',
    tags: ['長岡市', '克雪住宅', '補助金'],
    eligibility: '長岡市内に住所を有し、住宅の克雪化改修を行う方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '長岡市が実施する克雪すまいづくり支援事業です。住宅の雪対策改修に最大36万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長岡市 克雪すまいづくり支援事業は、<span class="marker">住宅の雪対策（克雪化）に関する改修工事</span>に対して費用の一部を補助する制度です。</p><p>日本有数の豪雪地帯である長岡市では、毎年の雪下ろし作業は高齢者にとって大きな負担であり、危険も伴います。屋根の融雪装置設置、耐雪構造への改修、落雪式屋根への改修など、雪に強い住宅づくりを支援しています。</p><p>補助率は対象工事費の一部で、<strong>上限は36万円</strong>です。<span class="marker-green">高齢者のみ世帯には補助率が上乗せ</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>融雪式屋根への改修（電気・灯油・ガス等）</p><p>耐雪構造への補強工事</p><p>落雪式屋根への改修</p><p>屋根の雪止め設置工事</p></div><p>長岡市役所都市整備部住宅施設課に申請書・見積書・図面等を提出します。地域の建築業者に相談の上、工事計画を作成してください。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けること</span>が必要です。降雪シーズン前の計画的な申請をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は工事内容や世帯状況により異なり、<strong>一般世帯は上限36万円</strong>が補助されます。高齢者世帯や障がい者世帯には上乗せがあります。</p><p><span class="marker">年間の予算枠に限りがあり、先着順</span>で受付されます。春から夏にかけて早めに申請するのがポイントです。</p><div class="highlight-box">長岡市では克雪住宅以外にも、除雪費用の助成や雪下ろし支援制度があります。冬の生活を安全・快適にするためにこれらの制度を組み合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagaoka.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagaoka-startup-support',
    title: '長岡市 創業支援補助金',
    organization: '長岡市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '新潟県',
    tags: ['長岡市', '創業支援', '補助金'],
    eligibility: '長岡市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '長岡市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長岡市 創業支援補助金は、<span class="marker">市内で新たに事業を始める創業者</span>を対象に、創業に必要な初期費用の一部を補助する制度です。</p><p>ものづくりのまちとして発展してきた長岡市は、新たな産業の創出にも積極的です。NaDeC BASE（ナデックベース）などの創業支援施設を拠点に、起業家の育成と支援に取り組んでいます。</p><p>補助率は対象経費の2分の1で、<strong>上限は100万円</strong>です。<span class="marker-green">長岡市の特定創業支援等事業を受講していること</span>が条件となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長岡市内で新規に事業を開始する個人・法人が対象です。</p><div class="summary-box" data-title="補助対象経費"><p>店舗・事務所の改装費・設備費</p><p>機械装置・備品の購入費</p><p>広告宣伝費・Web制作費</p><p>法人設立にかかる登記費用</p></div><p>長岡市役所産業支援部商業振興課に申請書と事業計画書を提出します。<strong>NaDeC BASEでの創業相談や市の創業セミナー</strong>を事前に受講しておく必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。地域課題解決型や若者創業など一定の条件を満たすと上限が引き上げられる場合もあります。</p><p><span class="marker">事業完了後に実績報告書・領収書の提出が必要</span>な精算払い方式です。計画通りに事業を進めましょう。</p><div class="note-box">長岡市ではUIJターン創業者向けの追加支援もあります。新潟県の起業支援事業や日本政策金融公庫の融資制度との併用も検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagaoka.niigata.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 上越市（新潟県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'joetsu-child-medical',
    title: '上越市 子ども医療費助成制度',
    organization: '上越市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '新潟県',
    tags: ['上越市', '子ども医療費', '助成金'],
    eligibility: '上越市に住所を有する0歳から18歳（高校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '上越市が実施する子ども医療費助成制度です。高校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>戦国武将・上杉謙信ゆかりの城下町である上越市は、新潟県南西部に位置する日本海側の主要都市です。人口減少対策の一環として子育て支援を強化しており、高校卒業まで医療費助成を拡充しています。</p><p><span class="marker-green">所得制限なしで、通院・入院・調剤のすべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>上越市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>上越市役所こども課の窓口、または各区総合事務所で申請できます。出生届や転入届と同時の手続きが便利です。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関であれば受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後、償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。高校生年齢の方は在学証明書等の提出が求められる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-housing-snow',
    title: '上越市 克雪住宅普及促進事業',
    organization: '上越市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '新潟県',
    tags: ['上越市', '克雪住宅', '補助金'],
    eligibility: '上越市内に住所を有し、住宅の克雪化改修を行う方',
    applicationPeriod: '毎年4月〜10月頃（予算に達し次第終了）',
    description: '上越市が実施する克雪住宅普及促進事業です。住宅の雪対策改修に最大40万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 克雪住宅普及促進事業は、<span class="marker">住宅の雪対策（克雪化）のための改修工事</span>に費用の一部を補助する制度です。</p><p>日本屈指の豪雪地帯として知られる上越市は、特に山間部では毎年3メートルを超える積雪を記録することもあります。高齢化が進む中、屋根の雪下ろし作業の負担軽減と安全確保のため、住宅の克雪化を積極的に推進しています。</p><p>補助額は工事費の一部で、<strong>上限40万円</strong>です。<span class="marker-green">65歳以上のみの世帯はさらに上乗せ</span>が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>融雪式屋根の設置（電気・灯油・地下水利用等）</p><p>耐雪構造（耐力壁の補強等）への改修</p><p>落雪式屋根への改修</p><p>屋根融雪装置の更新</p></div><p>上越市役所都市整備部建築住宅課に申請書と必要書類を提出します。事前に施工業者と相談の上、工事内容と見積もりを準備してください。</p><p><span class="marker">冬の降雪シーズンまでに工事を完了する必要がある</span>ため、早めの申請が重要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は工事内容により異なり、<strong>一般世帯で上限40万円</strong>が補助されます。高齢者世帯・障がい者世帯には補助率の上乗せがあります。</p><p><span class="marker">予算に達し次第受付終了</span>となるため、春から夏にかけての早めの申請が不可欠です。</p><div class="highlight-box">上越市では「要援護世帯除雪費助成」や「雪下ろし安全対策支援」など、雪に関する複数の支援制度があります。住宅の克雪化とあわせて、冬の暮らし全体をサポートする制度を上手に活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'joetsu-migration-support',
    title: '上越市 移住支援金',
    organization: '上越市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '新潟県',
    tags: ['上越市', '移住支援', '支援金'],
    eligibility: '東京23区に在住または通勤していた方で、上越市に移住する方',
    applicationPeriod: '通年（転入後3か月以上1年以内に申請）',
    description: '上越市が実施する移住支援金です。東京圏からの移住者に対して最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>上越市 移住支援金は、<span class="marker">東京23区に在住または東京圏から23区に通勤していた方</span>が上越市に移住した場合に支給される支援金です。</p><p>国の地方創生移住支援事業を活用した制度で、上越市への移住を促進するために実施されています。北陸新幹線の上越妙高駅があり、東京から約2時間でアクセスできる利便性が移住先として注目を集めています。</p><p>支給額は<strong>単身で60万円、世帯で100万円</strong>です。<span class="marker-green">18歳未満の子どもがいる場合は1人あたり加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>東京23区に在住していた方、または東京圏（埼玉・千葉・東京・神奈川の条件不利地域以外）から23区に通勤していた方が対象です。</p><div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または通勤していたこと</p><p>上越市に5年以上継続して居住する意思があること</p><p>就業・テレワーク・起業等の要件を満たすこと</p><p>転入後3か月以上1年以内に申請すること</p></div><p>上越市役所自治・地域振興課に申請書と必要書類を提出します。<strong>移住前に「じょうえつ暮らし」相談窓口</strong>に相談しておくとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>単身60万円、2人以上の世帯で100万円</strong>です。18歳未満の子ども1人あたりの加算もあります。</p><p><span class="marker">5年以内に転出した場合は支援金の全額返還が必要</span>です。1年以内の場合は違約金が発生する可能性もあります。</p><div class="note-box">テレワークで引き続き東京圏の企業に勤務する場合も対象となります。新潟県の「にいがた暮らし」ポータルサイトでも移住支援情報を発信しているので、合わせて確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/',
    publishedAt: '2026-03-12',
  },
];
