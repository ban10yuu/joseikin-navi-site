import { Grant } from '@/lib/types';

export const cityGrantsBatch23: Grant[] = [
  // ────────────────────────────────────────────────
  // 岐阜市（岐阜県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'gifu-city-child-medical',
    title: '岐阜市 子ども医療費助成制度',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '岐阜県',
    tags: ['岐阜市', '子ども医療費', '助成金'],
    eligibility: '岐阜市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '岐阜市が実施する子ども医療費助成制度です。高校卒業相当年齢までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>長良川の鵜飼で有名な岐阜市は、岐阜県の県庁所在地として約40万人の人口を擁しています。通院・入院・調剤のすべてが助成対象となっており、子育て世帯の医療費の負担を大きく軽減しています。</p><p><span class="marker-green">所得制限は設けられておらず、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岐阜市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（償還払い用）</p></div><p>岐阜市役所子ども政策課の窓口で申請できます。出生届や転入届の手続きと同時に申請すると効率的です。申請後、<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。岐阜県内の医療機関であれば受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-housing-reform',
    title: '岐阜市 住宅リフォーム補助事業',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '岐阜県',
    tags: ['岐阜市', '住宅リフォーム', '補助金'],
    eligibility: '岐阜市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '岐阜市が実施する住宅リフォーム補助事業です。耐震改修やバリアフリー工事などに最大30万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 住宅リフォーム補助事業は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>岐阜市は木造住宅の耐震化を積極的に推進しており、耐震改修工事に加えてバリアフリー化、省エネ改修、外壁・屋根の補修なども対象になっています。</p><p>補助率は対象工事費の10〜20%で、<strong>上限は30万円</strong>です。<span class="marker-green">耐震改修と併用する場合は補助額が上乗せされる</span>場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>岐阜市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による施工であること</p></div><p>岐阜市役所まちづくり推進部の窓口に申請書類を提出します。見積書や工事内容がわかる図面・写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着工した工事は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10〜20%で、<strong>上限30万円</strong>です。工事費が一定額以上であることが条件になります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となるため早めの申請がおすすめです。</p><div class="highlight-box">岐阜市は木造住宅の耐震診断を無料で実施しています。耐震改修と合わせてリフォーム補助を活用すると、より大きな補助を受けられる可能性があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'gifu-city-startup-support',
    title: '岐阜市 創業支援補助金',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '岐阜県',
    tags: ['岐阜市', '創業支援', '補助金'],
    eligibility: '岐阜市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '岐阜市が実施する創業支援補助金です。市内での新規創業にかかる経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方</span>を対象に、創業に必要な初期経費の一部を補助する制度です。</p><p>岐阜市は繊維産業や刃物産業の伝統を持ちながら、近年はIT・サービス業での起業も増えています。店舗改装費、設備購入費、広告宣伝費、法人設立費用などが補助対象になっています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>岐阜市内で創業する（または創業後1年以内である）こと</p><p>市の創業支援事業の認定を受けていること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p></div><p>岐阜市役所商工観光部に事業計画書と申請書を提出します。面談による審査があり、事業の実現可能性が評価されます。</p><p><span class="marker">岐阜市産業雇用課での事前相談を強くおすすめします</span>。創業に関する無料の経営相談窓口を活用しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限100万円</strong>です。店舗改装費、設備費、広告宣伝費、法人設立費用などが対象です。</p><p><span class="marker">交付決定前に支出した経費は補助対象外</span>です。必ず交付決定の通知を受けてから経費の支出を行ってください。</p><div class="note-box">人件費や家賃などの運転資金は対象外です。飲食店の場合は別途保健所の営業許可が必要です。原則として創業後5年間の事業継続が条件となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大垣市（岐阜県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'ogaki-child-medical',
    title: '大垣市 子ども医療費助成制度',
    organization: '大垣市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '岐阜県',
    tags: ['大垣市', '子ども医療費', '助成金'],
    eligibility: '大垣市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '大垣市が実施する子ども医療費助成制度です。高校卒業相当年齢までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>「水の都」として知られる大垣市は、岐阜県西濃地方の中核都市です。通院・入院・調剤のすべてが助成の対象となっており、子育て世帯の医療費負担の軽減に取り組んでいます。</p><p><span class="marker-green">所得制限はなく、市内在住の対象年齢の子どもがいるすべての世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大垣市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（償還払い用）</p></div><p>大垣市役所子育て支援課の窓口で申請できます。出生届や転入届とあわせて手続きすると効率的です。<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。岐阜県内の医療機関であれば受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は償還払い</span>となりますので、領収書を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。他の公費負担医療制度が適用される場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-housing-seismic',
    title: '大垣市 木造住宅耐震改修補助金',
    organization: '大垣市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'housing',
    prefecture: '岐阜県',
    tags: ['大垣市', '耐震改修', '補助金'],
    eligibility: '大垣市内に所在する昭和56年5月31日以前に着工された木造住宅の所有者',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '大垣市が実施する木造住宅耐震改修補助金です。旧耐震基準の木造住宅の耐震改修に最大120万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 木造住宅耐震改修補助金は、<span class="marker">昭和56年5月31日以前に着工された旧耐震基準の木造住宅</span>の耐震改修工事に対して費用の一部を補助する制度です。</p><p>南海トラフ地震のリスクが指摘されている岐阜県西部に位置する大垣市では、住宅の耐震化が重要な課題です。耐震診断で倒壊の危険ありと判定された住宅が対象になります。</p><p><strong>補助上限は120万円</strong>で、<span class="marker-green">耐震診断は市の無料診断を利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>大垣市内に所在する木造住宅であること</p><p>昭和56年5月31日以前に着工された建物であること</p><p>耐震診断で倒壊の危険ありと判定されていること</p><p>市税を滞納していないこと</p></div><p>大垣市役所都市計画部建築課の窓口に申請書類を提出します。まずは市の無料耐震診断を受けましょう。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着工した工事は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費用の一定割合で、<strong>上限120万円</strong>です。耐震シェルター設置の場合は別途30万円程度の補助があります。</p><p><span class="marker">高齢者世帯や障がい者世帯は補助額が増額される</span>場合があります。詳細は建築課にお問い合わせください。</p><div class="highlight-box">大垣市では耐震診断を無料で実施しています。まずは診断を受けて自宅の耐震性を確認し、必要に応じて改修計画を立てることをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ogaki-migration-support',
    title: '大垣市 移住定住促進補助金',
    organization: '大垣市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '岐阜県',
    tags: ['大垣市', '移住支援', '補助金'],
    eligibility: '東京圏から大垣市へ移住し、就業または創業した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '大垣市が実施する移住定住促進補助金です。東京圏からの移住者に対して最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大垣市 移住定住促進補助金は、<span class="marker">東京23区からの移住者または東京圏から大垣市へ移住した方</span>を対象とした支援制度です。</p><p>大垣市は名古屋から電車で約30分とアクセスが良く、水資源が豊かで暮らしやすい街として注目されています。国の移住支援事業と連携し、地方創生のための人口流入促進に取り組んでいます。</p><p>単身の場合は<strong>最大30万円</strong>、<span class="marker-green">世帯での移住の場合はさらに加算</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>移住直前に東京23区に在住、または東京圏から東京23区に通勤していたこと</p><p>大垣市に転入後3か月以上1年以内であること</p><p>岐阜県のマッチングサイト掲載企業に就業、または市内で創業すること</p><p>5年以上継続して居住する意思があること</p></div><p>大垣市役所企画部の窓口に申請書を提出します。就業証明書や住民票の写しなど各種書類が必要です。</p><p><span class="marker">転入前の事前相談をおすすめします</span>。大垣市の移住相談窓口が丁寧にサポートしてくれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>単身の場合は<strong>最大30万円</strong>です。世帯で移住する場合や18歳未満の子どもがいる場合は加算があります。</p><p><span class="marker">5年以内に大垣市から転出した場合は補助金の返還が必要</span>です。長期的な定住意思を持って申請しましょう。</p><div class="note-box">テレワークによる移住も対象となる場合があります。詳細な要件は年度ごとに変わることがあるため、最新情報を市役所に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 四日市市（三重県）3件: childcare, employment, housing
  // ────────────────────────────────────────────────
  {
    slug: 'yokkaichi-child-medical',
    title: '四日市市 子ども医療費助成制度',
    organization: '四日市市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '三重県',
    tags: ['四日市市', '子ども医療費', '助成金'],
    eligibility: '四日市市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '四日市市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 子ども医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>三重県最大の都市である四日市市は、石油化学コンビナートを中心とした工業都市として発展してきました。子育て支援にも力を入れており、通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限は設けられておらず、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>四日市市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（償還払い用）</p></div><p>四日市市役所こども未来部の窓口で申請できます。出生届や転入届の手続きとあわせて申請するとスムーズです。申請後、<strong>「福祉医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。三重県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦支払い後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。他の公費負担医療制度が適用される場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-startup-support',
    title: '四日市市 創業支援補助金',
    organization: '四日市市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '三重県',
    tags: ['四日市市', '創業支援', '補助金'],
    eligibility: '四日市市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '四日市市が実施する創業支援補助金です。市内での新規創業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 創業支援補助金は、<span class="marker">市内で新たに事業を立ち上げる方</span>を対象に、創業に必要な経費の一部を補助する制度です。</p><p>四日市市は三重県北部の商工業の中心地であり、工業都市としての基盤に加えてサービス業や飲食業での新規創業も活発です。店舗改装費、設備購入費、広告宣伝費などが補助対象になっています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>四日市市内で創業する（または創業後1年以内である）こと</p><p>市の特定創業支援事業の認定を受けていること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p></div><p>四日市市役所商工農水部商工課の窓口に事業計画書と申請書を提出します。審査では計画の実現可能性や地域への貢献度が評価されます。</p><p><span class="marker">よっかいち創業サポートセンターでの事前相談がおすすめ</span>です。専門の相談員が無料で経営相談に対応してくれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。店舗改装費、設備費、広告費、法人設立費用などが対象となります。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。必ず交付決定後に経費の支出を行ってください。</p><div class="note-box">人件費や家賃等の運転資金は対象外です。飲食店を開業する場合は別途保健所の営業許可が必要です。創業後一定期間の事業継続が条件となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokkaichi-housing-reform',
    title: '四日市市 住宅リフォーム促進事業補助金',
    organization: '四日市市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '三重県',
    tags: ['四日市市', '住宅リフォーム', '補助金'],
    eligibility: '四日市市内に住所を有し、市内業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '四日市市が実施する住宅リフォーム促進事業補助金です。市内業者による住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>四日市市 住宅リフォーム促進事業補助金は、<span class="marker">市内に本店を持つ施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>台所・浴室・トイレの改修、バリアフリー化、屋根・外壁の補修、断熱改修など幅広い工事が対象です。地域経済の活性化と住環境の改善を目的としています。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>四日市市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上（税込）の工事であること</p></div><p>四日市市役所都市整備部住宅政策課に申請します。見積書と工事内容がわかる資料が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。着工後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費20万円未満の場合は補助対象外となります。</p><p><span class="marker">毎年度の募集開始直後に申請が集中し、早期に予算上限に達する</span>傾向があります。4月の募集開始と同時に申請を検討しましょう。</p><div class="highlight-box">他の住宅関連補助（耐震改修補助、省エネ改修補助など）との併用が可能な場合もあります。複数の制度を組み合わせることで、より大きな補助を受けられる可能性があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokkaichi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 草津市（滋賀県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'kusatsu-child-medical',
    title: '草津市 子ども医療費助成制度',
    organization: '草津市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '滋賀県',
    tags: ['草津市', '子ども医療費', '助成金'],
    eligibility: '草津市に住所を有する0歳から15歳（中学校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '草津市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 子ども医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳の年度末）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>滋賀県南部に位置する草津市は、JR草津駅周辺の再開発が進む活気のある街で、人口増加が続いている数少ない自治体です。通院・入院・調剤のすべてが助成対象となっています。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>草津市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>草津市役所子ども家庭部子ども家庭課の窓口で申請します。出生届や転入届の手続きとあわせて申請するのが効率的です。申請後、<strong>「福祉医療費受給券」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。滋賀県内の医療機関であれば受給券を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦支払い後に償還払い</span>の手続きが必要です。領収書を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-housing-reform',
    title: '草津市 住宅改修補助事業',
    organization: '草津市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '滋賀県',
    tags: ['草津市', '住宅リフォーム', '補助金'],
    eligibility: '草津市内に住所を有し、市内業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年5月〜12月頃（予算に達し次第終了）',
    description: '草津市が実施する住宅改修補助事業です。市内業者を利用した住宅リフォーム工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 住宅改修補助事業は、<span class="marker">市内の施工業者を利用した住宅のリフォーム工事</span>に対して費用の一部を補助する制度です。</p><p>草津市は京阪神のベッドタウンとして発展しており、戸建て住宅の維持管理ニーズが高い地域です。バリアフリー化、省エネ改修、水回りの改修、外壁補修など幅広い工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に本店のある業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>草津市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>草津市役所都市計画部住宅課の窓口に申請書類を提出します。見積書や工事内容のわかる図面・写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定の通知を受ける前に着工した工事は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となるため、募集開始直後の申請をおすすめします。</p><div class="highlight-box">草津市は耐震診断・耐震改修の補助制度も別途設けています。耐震改修と一般リフォームを同時に行う場合、両方の補助を活用できる可能性があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kusatsu-education-support',
    title: '草津市 就学援助制度',
    organization: '草津市',
    type: 'local',
    maxAmount: '学用品費・給食費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '滋賀県',
    tags: ['草津市', '就学援助', '教育支援'],
    eligibility: '草津市立小中学校に通う児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月（年度途中の申請も可能）',
    description: '草津市が実施する就学援助制度です。経済的に困難な世帯の児童生徒に学用品費や給食費等が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>草津市 就学援助制度は、<span class="marker">経済的な理由で就学が困難な児童生徒の保護者</span>を対象に、学用品費・給食費・修学旅行費などを援助する制度です。</p><p>草津市は教育環境の充実に力を入れている自治体で、子どもたちが経済的な事情に関わらず安心して学べるよう支援しています。小学校・中学校それぞれの段階に応じた援助があります。</p><p><span class="marker-green">生活保護基準の1.3倍程度の所得を目安</span>として判定されますが、世帯の状況により柔軟に対応されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="援助の対象費目"><p>学用品費・通学用品費</p><p>学校給食費</p><p>修学旅行費・校外活動費</p><p>新入学児童生徒学用品費（入学準備金）</p></div><p>毎年4月に学校を通じて申請書が配布されます。必要事項を記入し、学校に提出してください。</p><p><span class="marker">年度途中の転入や家計急変の場合も随時申請が可能</span>です。担任の先生や草津市教育委員会学校教育課に相談してみましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は費目ごとに<strong>国の基準に基づいた定額</strong>が設定されています。学用品費は小学校で年額約1万円、中学校で年額約2万円程度です。</p><p><span class="marker">新入学児童生徒学用品費（入学準備金）は入学前の3月に前倒し支給</span>されます。ランドセルや制服の購入に活用できます。</p><div class="note-box">認定は毎年度の審査が必要です。前年度に認定されていても、翌年度に改めて申請・審査が行われます。所得状況の変化により認定されない場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 八尾市（大阪府）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'yao-child-medical',
    title: '八尾市 子ども医療費助成制度',
    organization: '八尾市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['八尾市', '子ども医療費', '助成金'],
    eligibility: '八尾市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '八尾市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>河内音頭の発祥地として知られる八尾市は、大阪府東部に位置し約26万人の人口を擁する中核市です。子育て支援に積極的に取り組んでおり、通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限は撤廃されており、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八尾市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（償還払い用）</p></div><p>八尾市役所こども若者部こども若者政策課の窓口で申請できます。出生届や転入届と同時に手続きすると効率的です。<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。大阪府内の医療機関であれば医療証の提示で窓口負担がなくなります。</p><p><span class="marker">府外の医療機関を受診した場合は、一旦支払い後に償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-housing-reform',
    title: '八尾市 住宅改修補助金',
    organization: '八尾市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['八尾市', '住宅リフォーム', '補助金'],
    eligibility: '八尾市内に住所を有し、市内業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年5月〜11月頃（予算に達し次第終了）',
    description: '八尾市が実施する住宅改修補助金です。市内業者による住宅リフォーム工事に最大25万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 住宅改修補助金は、<span class="marker">市内に本店のある施工業者を利用した住宅のリフォーム工事</span>に対して費用の一部を補助する制度です。</p><p>八尾市は中小企業のものづくりの街として知られ、住宅産業関連の業者も多数存在します。バリアフリー化、省エネ改修、水回りの改修、屋根・外壁の補修など幅広い工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は25万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>八尾市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内に本店のある業者による20万円以上の工事であること</p></div><p>八尾市役所建築部住宅政策課の窓口に申請します。見積書と工事内容がわかる図面・写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着工した工事は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限25万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算上限に達し次第、受付終了</span>となります。募集開始直後の申請をおすすめします。</p><div class="highlight-box">八尾市では耐震診断・耐震改修の補助制度も別途設けています。昭和56年以前の建物は無料耐震診断を利用でき、改修と合わせてリフォーム補助を活用すると効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yao-startup-support',
    title: '八尾市 創業促進補助金',
    organization: '八尾市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['八尾市', '創業支援', '補助金'],
    eligibility: '八尾市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '八尾市が実施する創業促進補助金です。市内での新規創業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八尾市 創業促進補助金は、<span class="marker">市内で新たに事業を開始する方</span>を対象に、創業にかかる初期経費の一部を補助する制度です。</p><p>八尾市は歯ブラシやメガネフレームなどの製造業が盛んな「ものづくりのまち」で、商業・サービス業の創業にも力を入れています。店舗改装費、設備購入費、広告宣伝費などが補助対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>八尾市内で創業する（または創業後1年以内である）こと</p><p>市の特定創業支援等事業の認定を受けていること</p><p>市税を滞納していないこと</p><p>事業計画書を提出できること</p></div><p>八尾市役所経済環境部産業政策課の窓口に事業計画書と申請書を提出します。審査では事業の実現可能性や地域貢献度が評価されます。</p><p><span class="marker">みせるばやおなど市内の創業支援施設での事前相談をおすすめ</span>します。無料の経営相談を活用しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。店舗改装費、設備費、広告宣伝費、法人設立費用などが対象です。</p><p><span class="marker">交付決定前に発注・支払いした経費は補助対象外</span>です。必ず交付決定を受けてから経費を支出してください。</p><div class="note-box">人件費や家賃等の運転資金は対象外です。飲食店を開業する場合は別途保健所の営業許可が必要になります。原則として創業後5年間の事業継続が求められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 寝屋川市（大阪府）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'neyagawa-child-medical',
    title: '寝屋川市 子ども医療費助成制度',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['寝屋川市', '子ども医療費', '助成金'],
    eligibility: '寝屋川市に住所を有する0歳から18歳（高校卒業相当）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '寝屋川市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>京阪沿線に位置する寝屋川市は、大阪市のベッドタウンとして約23万人が暮らしています。子育て支援を重点施策に掲げ、通院・入院・調剤のすべてが助成対象となっています。</p><p><span class="marker-green">所得制限は撤廃されており、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>寝屋川市に住民登録があり、健康保険に加入している18歳年度末までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（償還払い用）</p></div><p>寝屋川市役所こども部子育て支援課の窓口で申請できます。出生届や転入届の手続きと同時に申請すると効率的です。<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。大阪府内の医療機関であれば医療証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">府外の医療機関を受診した場合は、一旦支払い後に償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-senior-medical',
    title: '寝屋川市 高齢者医療費助成制度',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['寝屋川市', '高齢者医療', '助成金'],
    eligibility: '寝屋川市に住所を有する65歳以上で一定の障がいがある方、または老人医療の対象となる方',
    applicationPeriod: '通年',
    description: '寝屋川市が実施する高齢者医療費助成制度です。一定の要件を満たす高齢者の医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 高齢者医療費助成制度は、<span class="marker">65歳以上で一定の障がいのある方</span>を対象に、保険診療の自己負担分を助成する制度です。</p><p>寝屋川市は高齢者が安心して暮らせるまちづくりに取り組んでおり、大阪府の老人医療費助成制度を活用しながら、独自の上乗せ助成も行っています。</p><p><span class="marker-green">所得要件を満たす方が対象</span>で、通院・入院・調剤のすべてが助成対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象者"><p>65歳以上で身体障害者手帳1・2級をお持ちの方</p><p>65歳以上で知的障害の判定を受けている方</p><p>65歳以上で精神障害者保健福祉手帳1級をお持ちの方</p><p>65歳以上で難病患者の方（一定の要件あり）</p></div><p>寝屋川市役所健康部保険事業室の窓口に申請してください。障害者手帳と健康保険証、本人確認書類が必要です。</p><p><span class="marker">申請後、審査を経て「老人医療医療証」が交付</span>されます。医療機関で提示することで助成を受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院の場合は1日あたり<strong>最大500円（月2回まで）の自己負担</strong>で済みます。3回目以降の自己負担はありません。入院の場合も1日あたりの自己負担上限があります。</p><p><span class="marker">所得が一定額を超える場合は助成対象外</span>となります。所得要件は毎年見直されますので、最新情報を市役所に確認してください。</p><div class="note-box">後期高齢者医療制度（75歳以上）に加入している方は、別途後期高齢者の医療費助成が適用されます。制度の併用はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'neyagawa-housing-seismic',
    title: '寝屋川市 木造住宅耐震改修補助制度',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['寝屋川市', '耐震改修', '補助金'],
    eligibility: '寝屋川市内に所在する昭和56年5月31日以前に着工された木造住宅の所有者',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '寝屋川市が実施する木造住宅耐震改修補助制度です。旧耐震基準の木造住宅の耐震改修に最大100万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>寝屋川市 木造住宅耐震改修補助制度は、<span class="marker">昭和56年5月31日以前に着工された旧耐震基準の木造住宅</span>の耐震改修工事に対して費用の一部を補助する制度です。</p><p>大阪府北河内地域に位置する寝屋川市は、上町断層帯や生駒断層帯の影響を受ける可能性がある地域です。木造住宅の耐震化を促進し、地震に強いまちづくりを推進しています。</p><p>補助上限は<strong>100万円</strong>で、<span class="marker-green">耐震診断は市の無料診断を利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>寝屋川市内に所在する木造住宅であること</p><p>昭和56年5月31日以前に着工された建物であること</p><p>耐震診断の結果、倒壊の危険性が高いと判定されていること</p><p>市税を滞納していないこと</p></div><p>寝屋川市役所まちづくり推進部建築指導課の窓口に申請します。まずは市の無料耐震診断を受けましょう。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着工した工事は補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費用の一定割合で、<strong>上限100万円</strong>です。耐震シェルターや防災ベッドの設置にも別途補助があります。</p><p><span class="marker">高齢者のみの世帯や障がい者世帯は補助額が増額される</span>場合があります。詳細は建築指導課にお問い合わせください。</p><div class="highlight-box">寝屋川市では木造住宅の無料耐震診断を実施しています。まずは診断を受けて自宅の耐震性能を確認し、必要に応じて改修を検討しましょう。2018年の大阪府北部地震を受けて耐震化の重要性がさらに高まっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/',
    publishedAt: '2026-03-12',
  },
];
