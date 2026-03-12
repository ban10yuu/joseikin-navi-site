import { Grant } from '@/lib/types';

export const cityGrantsBatch20: Grant[] = [
  // ────────────────────────────────────────────────
  // 伊勢崎市（群馬県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'isesaki-child-medical',
    title: '伊勢崎市 子ども医療費助成制度',
    organization: '伊勢崎市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['伊勢崎市', '子ども医療費', '助成金'],
    eligibility: '伊勢崎市に住所を有する0歳から18歳（高校卒業年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '伊勢崎市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>伊勢崎市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>群馬県は全国でも子ども医療費助成が手厚い自治体が多く、伊勢崎市でも通院・入院・調剤すべてが助成対象です。北関東有数の工業都市として発展する伊勢崎市は、子育て世帯の定住促進にも力を入れています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>伊勢崎市に住民登録があり、健康保険に加入している18歳以下の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>伊勢崎市役所子育て支援課の窓口で申請できます。出生届や転入届と同時に手続きすると効率的です。申請後、<strong>「福祉医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。群馬県内の医療機関であれば受給資格者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後、償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、薬の容器代など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.isesaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isesaki-housing-reform',
    title: '伊勢崎市 住宅リフォーム補助金',
    organization: '伊勢崎市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['伊勢崎市', '住宅リフォーム', '補助金'],
    eligibility: '伊勢崎市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '伊勢崎市が実施する住宅リフォーム補助金です。市内業者による住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>伊勢崎市 住宅リフォーム補助金は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>伊勢崎市は夏の暑さが全国的にも有名で、断熱改修のニーズが高い地域です。屋根や外壁の補修、断熱工事、トイレ・浴室の改修、バリアフリー化など幅広い工事が対象になっています。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に本店を有する施工業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>伊勢崎市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>伊勢崎市役所建築指導課に申請書を提出します。見積書、工事内容がわかる図面・写真などが必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定の通知を受けてから工事を開始しないと補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となるため早めの申請がおすすめです。例年4月の受付開始直後に多数の申請が集中します。</p><div class="highlight-box">断熱改修工事は国のリフォーム補助金と併用できる場合があります。窓の二重サッシ化や床断熱など、猛暑・寒さ対策のリフォームも対象です。</div>'
      }
    ],
    officialUrl: 'https://www.city.isesaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'isesaki-startup-support',
    title: '伊勢崎市 創業支援補助金',
    organization: '伊勢崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '群馬県',
    tags: ['伊勢崎市', '創業支援', '補助金'],
    eligibility: '伊勢崎市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '伊勢崎市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>伊勢崎市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方</span>を対象に、創業に必要な初期費用の一部を補助する制度です。</p><p>伊勢崎市は北関東自動車道のインターチェンジがあり物流拠点としても発展しています。新規創業者の事業を後押しし、地域経済の活性化を図ることを目的としています。</p><p>補助率は対象経費の2分の1で、<strong>上限は50万円</strong>です。<span class="marker-green">業種の制限は原則なく、小売・飲食・サービス・IT関連など幅広い業種が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>伊勢崎市内で新たに創業する方、または創業後1年以内の個人事業主・法人が対象です。</p><div class="summary-box" data-title="対象経費"><p>店舗・事務所の改装費</p><p>設備・備品の購入費</p><p>広告宣伝費</p><p>許認可取得に係る経費</p></div><p>申請前に<strong>伊勢崎市の創業支援セミナー</strong>を受講していることが条件です。商工会議所でも相談を受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。</p><p><span class="marker">交付決定前に支出した経費は対象外</span>となるため、必ず申請・交付決定後に発注してください。</p><div class="highlight-box">伊勢崎市の創業支援セミナーでは、事業計画の作成指導や経営相談も受けられます。補助金申請と合わせて活用すると、創業後の経営安定にもつながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.isesaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 熊谷市（埼玉県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'kumagaya-child-medical',
    title: '熊谷市 こども医療費助成制度',
    organization: '熊谷市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['熊谷市', '子ども医療費', '助成金'],
    eligibility: '熊谷市に住所を有する0歳から18歳（高校卒業年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '熊谷市が実施するこども医療費助成制度です。18歳年度末までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊谷市 こども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>「日本一暑いまち」として知られる熊谷市は、子育て支援にも力を入れています。通院・入院・調剤のすべてが助成対象で、子育て家庭の経済的負担を大幅に軽減しています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>熊谷市に住民登録があり、健康保険に加入している18歳以下（年度末まで）の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類（マイナンバーカード等）</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>熊谷市役所こども課の窓口で申請できます。出生届や転入届と同時に手続きするのが便利です。申請後、<strong>「こども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担を支払い後、償還払い</span>の手続きが必要です。領収書原本を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。他の公費医療制度（自立支援医療等）が適用される場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumagaya-infertility-treatment',
    title: '熊谷市 不妊治療費助成事業',
    organization: '熊谷市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['熊谷市', '不妊治療', '助成金'],
    eligibility: '熊谷市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から1年以内に申請）',
    description: '熊谷市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊谷市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる医療費の自己負担分</span>を一部助成する制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、自己負担の3割分は依然として大きな負担です。熊谷市では独自の上乗せ助成として、保険適用後の自己負担額に対して助成を行っています。</p><p><strong>助成上限は1年度あたり10万円</strong>で、<span class="marker-green">体外受精・顕微授精だけでなく、タイミング法や人工授精も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>申請日時点で熊谷市に住民登録がある法律上の夫婦または事実婚のカップルが対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関が発行した領収書・明細書</p><p>医療機関の証明書（治療内容がわかるもの）</p><p>夫婦の住民票</p></div><p>熊谷市役所保健センターで申請を受け付けています。<span class="marker">治療終了日から1年以内</span>に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額に対し、<strong>1年度あたり上限10万円</strong>を助成します。</p><p><span class="marker">先進医療として実施された治療の自己負担分も対象</span>となる場合があります。詳細は保健センターへお問い合わせください。</p><div class="highlight-box">埼玉県の不妊治療費助成と併用が可能です。県の助成を先に申請し、残りの自己負担分に対して市の助成を利用すると、負担をさらに軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kumagaya-housing-seismic',
    title: '熊谷市 木造住宅耐震改修補助金',
    organization: '熊谷市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['熊谷市', '耐震改修', '補助金'],
    eligibility: '熊谷市内に木造住宅を所有し、耐震改修を行う方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '熊谷市が実施する木造住宅耐震改修補助金です。昭和56年以前に建築された木造住宅の耐震改修に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊谷市 木造住宅耐震改修補助金は、<span class="marker">昭和56年5月31日以前に建築された木造住宅</span>の耐震改修工事に対して費用の一部を補助する制度です。</p><p>旧耐震基準で建築された木造住宅は、大地震時に倒壊リスクが高いとされています。熊谷市では無料の耐震診断も実施しており、診断から改修までの流れをサポートしています。</p><p><strong>補助上限は30万円</strong>で、<span class="marker-green">まず無料耐震診断を受けてから改修計画を立てる</span>流れになります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>昭和56年5月31日以前に建築された木造住宅</p><p>2階建て以下の一戸建て住宅</p><p>市の耐震診断で「倒壊の可能性がある」と判定されたもの</p><p>所有者が市内に住所を有すること</p></div><p>熊谷市役所建築審査課に申請書を提出します。耐震診断結果、改修計画書、工事見積書が必要です。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてください</span>。着手後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事に要する費用の一部を補助し、<strong>上限は30万円</strong>です。</p><p><span class="marker">無料の耐震診断を先に受けることが前提</span>です。耐震診断は市に申請すれば無料で派遣される専門家が実施します。</p><div class="note-box">耐震改修とあわせてリフォームを実施する場合、耐震改修部分のみが補助対象です。改修後に「倒壊しない」レベルまで耐震性が向上することが条件となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumagaya.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 所沢市（埼玉県）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'tokorozawa-child-medical',
    title: '所沢市 こども医療費助成制度',
    organization: '所沢市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['所沢市', '子ども医療費', '助成金'],
    eligibility: '所沢市に住所を有する0歳から18歳（高校卒業年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '所沢市が実施するこども医療費助成制度です。18歳年度末までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>所沢市 こども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>「となりのトトロ」の舞台のモデルともいわれる所沢市は、自然環境と都市機能が両立した住みやすいまちです。人口約34万人を擁し、子育て世帯の流入も多く、医療費助成制度の充実が求められています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>所沢市に住民登録があり、健康保険に加入している18歳以下（年度末まで）の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>所沢市役所こども未来部の窓口または郵送で申請できます。出生届や転入届と同時に手続きするのが便利です。申請後、<strong>「こども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後、償還払い</span>の手続きが必要です。申請期限は診療月の翌月から1年以内です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。高額療養費・附加給付がある場合はそれらを控除した残額が助成対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokorozawa.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokorozawa-school-aid',
    title: '所沢市 就学援助制度',
    organization: '所沢市',
    type: 'local',
    maxAmount: '学用品費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['所沢市', '就学援助', '助成金'],
    eligibility: '所沢市立小・中学校に通学する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '所沢市が実施する就学援助制度です。経済的に困難な家庭の小中学生に学用品費や給食費等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>所沢市 就学援助制度は、<span class="marker">経済的な理由で就学が困難な児童生徒の保護者</span>に対して、学用品費・給食費・修学旅行費などを支給する制度です。</p><p>生活保護を受けている世帯（要保護）だけでなく、生活保護に準ずる程度に経済的に困難な世帯（準要保護）も対象です。所沢市では、前年の世帯所得が生活保護基準の一定倍率以下であれば認定されます。</p><p><span class="marker-green">申請は学校を通じて行い、毎年度の更新が必要</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>所沢市立小学校・中学校に在籍する児童生徒の保護者で、経済的にお困りの方が対象です。</p><div class="summary-box" data-title="支給される費目"><p>学用品費・通学用品費</p><p>学校給食費</p><p>修学旅行費・校外活動費</p><p>新入学用品費（入学前支給も可能）</p><p>医療費（学校保健安全法に定める疾病の治療費）</p></div><p>年度初め（4月）に学校から配布される申請書を記入し、学校へ提出します。年度途中からの申請も可能で、<strong>家計の急変</strong>（失業・離婚等）があった場合は随時相談してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は費目ごとに国の基準額に基づいて定められています。<strong>新入学用品費は小学生約5万円、中学生約6万円</strong>が目安です。</p><p><span class="marker">給食費は実費相当額が支給され、実質無料</span>となります。</p><div class="highlight-box">新入学用品費は入学前（3月）に前倒しで支給を受けることも可能です。入学準備に間に合うよう、早めの申請をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokorozawa.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tokorozawa-newlywed-housing',
    title: '所沢市 結婚新生活支援事業補助金',
    organization: '所沢市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['所沢市', '結婚新生活', '補助金'],
    eligibility: '所沢市内に新居を構えた新婚世帯（婚姻届提出から1年以内）',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '所沢市が実施する結婚新生活支援事業補助金です。新婚世帯の住居費や引越し費用を最大60万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>所沢市 結婚新生活支援事業補助金は、<span class="marker">新たに婚姻届を提出した世帯</span>が市内で新生活を始める際の住居費・引越し費用を補助する制度です。</p><p>国の「結婚新生活支援事業」を活用した制度で、所沢市が費用の一部を負担しています。若い世代の結婚を後押しし、市内への定住を促進することが目的です。</p><p>夫婦ともに29歳以下の場合は<strong>上限60万円</strong>、39歳以下の場合は<strong>上限30万円</strong>となります。<span class="marker-green">世帯所得500万円未満が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>婚姻届提出日に夫婦ともに39歳以下であること</p><p>世帯所得が500万円未満であること</p><p>所沢市内に新居を構えていること</p><p>過去にこの補助金を受けていないこと</p></div><p>対象経費は、住宅の購入費・賃借費用（家賃・敷金・礼金・仲介手数料）および引越し費用です。</p><p>所沢市役所市民課に必要書類を提出して申請します。<span class="marker">婚姻届の提出から1年以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>夫婦ともに<strong>29歳以下の場合は上限60万円、30〜39歳の場合は上限30万円</strong>です。</p><p><span class="marker">住宅ローンの返済額も「住居費」として対象</span>になります。賃貸の場合は家賃（共益費含む）が対象です。</p><div class="note-box">勤務先から住宅手当が支給されている場合は、その分を差し引いた額が補助対象となります。また、他の住宅関連補助金との併用には制限がある場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokorozawa.saitama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 春日部市（埼玉県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'kasukabe-child-medical',
    title: '春日部市 こども医療費助成制度',
    organization: '春日部市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['春日部市', '子ども医療費', '助成金'],
    eligibility: '春日部市に住所を有する0歳から18歳（高校卒業年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '春日部市が実施するこども医療費助成制度です。18歳年度末までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日部市 こども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>アニメ「クレヨンしんちゃん」の舞台として全国的に知られる春日部市は、東武鉄道で都心に直結する交通の便がよいまちです。子育て世帯も多く、医療費助成を含む子育て支援の充実に取り組んでいます。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>春日部市に住民登録があり、健康保険に加入している18歳以下（年度末まで）の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>春日部市役所子育て支援課の窓口で申請できます。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「こども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担を支払い後、償還払い</span>の手続きが必要です。領収書原本を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健康診断など）は助成対象外です。交通事故による診療は加害者側が負担するため原則対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasukabe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasukabe-housing-reform',
    title: '春日部市 住宅改修資金補助金',
    organization: '春日部市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['春日部市', '住宅改修', '補助金'],
    eligibility: '春日部市内に住所を有し、市内の住宅を改修する方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '春日部市が実施する住宅改修資金補助金です。市内業者による住宅改修工事に最大10万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日部市 住宅改修資金補助金は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>屋根や外壁の修繕、浴室・トイレの改修、バリアフリー工事、断熱改修など幅広い工事が対象です。市内経済の活性化と住環境の向上を同時に図ることを目的としています。</p><p>補助率は対象工事費の5%で、<strong>上限は10万円</strong>です。<span class="marker-green">市内に事業所がある施工業者への発注が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>春日部市内に住所を有すること</p><p>改修する住宅が市内にあり、自ら居住していること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>春日部市役所建築課に申請書を提出します。工事見積書、施工箇所の写真、住宅の平面図などが必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に工事を開始すると補助対象外になります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の5%で、<strong>上限10万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となります。例年、受付開始直後に申請が集中するため早めの準備が大切です。</p><div class="highlight-box">春日部市は地盤が低い地域があり、浸水対策のリフォーム（止水板設置、床の嵩上げなど）も検討の価値があります。防災関連の補助との併用も確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasukabe.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kasukabe-migration-support',
    title: '春日部市 移住・定住促進補助金',
    organization: '春日部市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '埼玉県',
    tags: ['春日部市', '移住支援', '補助金'],
    eligibility: '春日部市外から市内に転入し、住宅を取得または賃借した方',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '春日部市が実施する移住・定住促進補助金です。市外から転入して住宅を取得した世帯に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>春日部市 移住・定住促進補助金は、<span class="marker">市外から春日部市に転入し、住宅を取得した方</span>に対して費用の一部を補助する制度です。</p><p>春日部市は東武鉄道の特急で東京都心まで約30分とアクセスが良く、比較的手頃な住宅価格が魅力のまちです。市では人口減少対策として若い世代の転入を促進しており、住宅取得への補助を行っています。</p><p>基本額は<strong>20万円</strong>で、子育て世帯には<span class="marker-green">10万円の加算があり、最大30万円</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>春日部市外から転入していること</p><p>市内に新築または中古の住宅を取得していること</p><p>5年以上定住する意思があること</p><p>市税の滞納がないこと</p></div><p>春日部市役所シティセールス広報課に申請書と必要書類を提出します。住宅の売買契約書、住民票、世帯全員の前住所の証明書類などが必要です。</p><p><span class="marker">転入日から1年以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は<strong>20万円</strong>です。18歳以下の子どもがいる世帯は<strong>10万円加算で最大30万円</strong>となります。</p><p><span class="marker">5年以内に転出した場合は補助金の返還を求められる</span>ことがあります。長期的に春日部市に住む予定の方が対象です。</p><div class="note-box">社宅や官舎への入居、親族からの贈与による住宅取得は対象外となる場合があります。詳細は市の窓口で事前に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kasukabe.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 草加市（埼玉県）3件: childcare, medical, employment
  // ────────────────────────────────────────────────
  {
    slug: 'soka-child-medical',
    title: '草加市 こども医療費助成制度',
    organization: '草加市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['草加市', '子ども医療費', '助成金'],
    eligibility: '草加市に住所を有する0歳から18歳（高校卒業年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '草加市が実施するこども医療費助成制度です。18歳年度末までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草加市 こども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>草加せんべいで有名な草加市は、東京都足立区に隣接するベッドタウンです。東武スカイツリーラインで北千住まで約10分と利便性が高く、子育て世帯に人気のエリアです。通院・入院・調剤すべてが助成対象となっています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>草加市に住民登録があり、健康保険に加入している18歳以下（年度末まで）の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>草加市役所子育て支援課の窓口で申請できます。出生届や転入届の手続きと同時に申請するのが便利です。申請後、<strong>「こども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後、償還払い</span>の手続きが必要です。領収書を大切に保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.soka.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'soka-vaccination-subsidy',
    title: '草加市 任意予防接種費用助成',
    organization: '草加市',
    type: 'local',
    maxAmount: '最大1万円',
    maxAmountNum: 1,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['草加市', '予防接種', '助成金'],
    eligibility: '草加市に住所を有する方で、対象の任意予防接種を受ける方',
    applicationPeriod: '通年',
    description: '草加市が実施する任意予防接種費用助成です。おたふくかぜワクチンなど対象の予防接種費用を一部助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草加市 任意予防接種費用助成は、<span class="marker">定期接種以外の任意予防接種</span>を受ける市民に対して、費用の一部を助成する制度です。</p><p>任意予防接種は全額自己負担のため、接種をためらう方も少なくありません。草加市では子どもの健康を守るため、おたふくかぜワクチンやインフルエンザワクチンなどの接種費用を補助しています。</p><p><span class="marker-green">対象ワクチンや助成額は年度により変更がある</span>ため、最新情報は市の公式サイトで確認してください。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>草加市に住民登録があり、対象の任意予防接種を受けた方が対象です。</p><div class="summary-box" data-title="主な対象ワクチン"><p>おたふくかぜワクチン（1歳以上の未罹患者）</p><p>小児インフルエンザワクチン（生後6か月〜中学生）</p><p>高齢者肺炎球菌ワクチン（定期接種対象外の方）</p></div><p>市内の指定医療機関で接種する場合は、窓口で助成が適用されます。指定外の医療機関で接種した場合は、<strong>領収書と接種記録を持参して草加市保健センターで償還申請</strong>を行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>ワクチンの種類ごとに助成額が異なります。おたふくかぜワクチンは<strong>1回あたり最大3,000円程度</strong>の助成です。</p><p><span class="marker">助成額は接種費用の一部であり、差額は自己負担</span>となります。</p><div class="highlight-box">定期予防接種（四種混合、MR、BCGなど）は無料で受けられます。任意接種の助成と合わせて、お子さんの接種スケジュールを計画的に進めましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.soka.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'soka-startup-support',
    title: '草加市 創業支援補助金',
    organization: '草加市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['草加市', '創業支援', '補助金'],
    eligibility: '草加市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年5月〜翌年1月（予算に達し次第終了）',
    description: '草加市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草加市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方</span>を対象に、創業に必要な初期費用の一部を補助する制度です。</p><p>草加市は東京のベッドタウンとしてだけでなく、草加せんべいをはじめとした地場産業や商店街が活発なまちです。新規創業者の参入を促進し、地域経済をさらに活性化させることを目的としています。</p><p>補助率は対象経費の2分の1で、<strong>上限は30万円</strong>です。<span class="marker-green">飲食・小売・サービス・IT関連など業種を問わず申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>草加市内で新たに創業する方、または創業後1年以内の個人事業主・法人が対象です。</p><div class="summary-box" data-title="対象経費"><p>店舗・事務所の内外装工事費</p><p>設備・備品の購入費</p><p>広告宣伝費</p><p>開業に係る許認可取得費</p></div><p>草加市産業振興課に申請書と事業計画書を提出します。<strong>草加市の創業支援等事業計画に基づく特定創業支援等事業</strong>を受けていることが要件の一つです。草加商工会議所での相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の2分の1以内で、<strong>上限30万円</strong>です。</p><p><span class="marker">交付決定前に支出した経費は原則対象外</span>となります。必ず申請・交付決定を受けてから発注してください。</p><div class="highlight-box">草加商工会議所では無料の創業相談やセミナーを実施しています。事業計画の作成支援から融資の相談まで、補助金申請に向けた準備をトータルでサポートしてくれます。</div>'
      }
    ],
    officialUrl: 'https://www.city.soka.saitama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 松戸市（千葉県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'matsudo-child-medical',
    title: '松戸市 子ども医療費助成制度',
    organization: '松戸市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['松戸市', '子ども医療費', '助成金'],
    eligibility: '松戸市に住所を有する0歳から18歳（高校卒業年度末）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '松戸市が実施する子ども医療費助成制度です。18歳年度末までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>松戸市は千葉県北西部に位置し、JR常磐線や新京成線で都心へのアクセスが良好な人口約50万人の都市です。「共働き子育てしやすい街ランキング」で上位に選ばれるなど、子育て支援施策が充実しています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。通院・入院・調剤が助成対象となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松戸市に住民登録があり、健康保険に加入している18歳以下（年度末まで）の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>松戸市役所子ども政策課の窓口で申請できます。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療費助成受給券」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。千葉県内の医療機関であれば受給券の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担を支払い後、償還払い</span>の手続きが必要です。診療月の翌月から2年以内に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。高額療養費や附加給付がある場合はそれらを差し引いた額が助成対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-housing-seismic',
    title: '松戸市 木造住宅耐震改修助成制度',
    organization: '松戸市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['松戸市', '耐震改修', '補助金'],
    eligibility: '松戸市内に木造住宅を所有し、耐震改修を行う方',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '松戸市が実施する木造住宅耐震改修助成制度です。旧耐震基準の木造住宅の耐震改修に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 木造住宅耐震改修助成制度は、<span class="marker">昭和56年5月31日以前に建築された木造住宅</span>の耐震改修工事に対して費用の一部を助成する制度です。</p><p>首都直下地震のリスクが指摘される中、松戸市では旧耐震基準の木造住宅の耐震化を推進しています。無料の耐震診断も実施しており、診断から改修まで一貫した支援体制が整っています。</p><p><strong>助成上限は50万円</strong>で、<span class="marker-green">まず無料の簡易耐震診断を受けてから改修計画を立てる</span>ことをおすすめします。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>昭和56年5月31日以前に建築された木造住宅</p><p>2階建て以下の一戸建て住宅</p><p>耐震診断で耐震性が不足と判定されたもの</p><p>所有者が市内に住所を有し、自ら居住していること</p></div><p>松戸市役所建築指導課に申請書を提出します。耐震診断結果報告書、改修計画書、工事見積書などが必要です。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてください</span>。交付決定前に着手した工事は助成対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事費用の一部を助成し、<strong>上限は50万円</strong>です。改修後に上部構造評点が1.0以上となることが条件です。</p><p><span class="marker">松戸市の無料耐震診断は市に登録された専門家が訪問して実施</span>します。まずは診断を受けて、自宅の耐震性を確認してみてください。</p><div class="highlight-box">耐震改修に加えて、家具の転倒防止器具の取り付けも防災対策として重要です。松戸市では家具転倒防止器具の無料取り付けサービスも実施している場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'matsudo-school-aid',
    title: '松戸市 就学援助制度',
    organization: '松戸市',
    type: 'local',
    maxAmount: '学用品費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '千葉県',
    tags: ['松戸市', '就学援助', '助成金'],
    eligibility: '松戸市立小・中学校に通学する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '松戸市が実施する就学援助制度です。経済的に困難な家庭の小中学生に学用品費や給食費等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>松戸市 就学援助制度は、<span class="marker">経済的な理由で就学が困難な児童生徒の保護者</span>に対して、学用品費・給食費・修学旅行費などの費用を援助する制度です。</p><p>生活保護を受けている世帯（要保護）だけでなく、生活保護に準ずる程度に困窮している世帯（準要保護）も対象です。松戸市では、世帯の所得が生活保護基準額の一定倍率以下であれば認定されます。</p><p><span class="marker-green">申請は学校を通じて行い、認定されると年度を通じて援助を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>松戸市立小学校・中学校に在籍する児童生徒の保護者で、経済的にお困りの方が対象です。</p><div class="summary-box" data-title="援助される費目"><p>学用品費・通学用品費</p><p>学校給食費</p><p>修学旅行費・校外活動費</p><p>新入学用品費（入学前支給も可能）</p><p>医療費（学校保健安全法に定める疾病）</p></div><p>年度初めに学校から配布される申請書を記入し、学校へ提出します。年度途中でも、<strong>失業・離婚などで家計が急変した場合</strong>は随時申請を受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は費目ごとに国の基準額に基づいています。<strong>新入学用品費は小学生約5万円、中学生約6万円</strong>が目安です。</p><p><span class="marker">給食費は実費相当額が全額支給され、実質無料</span>となります。</p><div class="highlight-box">松戸市では新入学用品費の入学前支給（3月支給）を実施しています。入学準備にお金がかかる時期に間に合うよう、早めの申請を心がけましょう。転入してきた方も年度途中の申請が可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.matsudo.chiba.jp/',
    publishedAt: '2026-03-12',
  },
];
