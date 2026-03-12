import { Grant } from '@/lib/types';

export const cityGrantsBatch16: Grant[] = [
  // ────────────────────────────────────────────────
  // 下関市（山口県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'shimonoseki-child-medical',
    title: '下関市 子ども医療費助成制度',
    organization: '下関市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['下関市', '子ども医療費', '助成金'],
    eligibility: '下関市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '下関市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>関門海峡に面した下関市は、山口県最大の人口を擁する都市として子育て支援に積極的に取り組んでいます。通院・入院ともに対象となり、子育て世帯の医療費負担を大きく軽減しています。</p><p><span class="marker-green">所得制限なしで、下関市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>下関市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが要件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>下関市役所こども家庭課または各総合支所で申請します。出生届や転入届の際に同時に手続きするとスムーズです。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。山口県内の医療機関では受給資格証を提示すれば窓口負担がなくなります。</p><p><span class="marker">県外で受診した場合は、いったん自己負担分を支払った後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-housing-reform',
    title: '下関市 住宅リフォーム助成事業',
    organization: '下関市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '山口県',
    tags: ['下関市', '住宅リフォーム', '補助金'],
    eligibility: '下関市内に住所を有し、市内業者で住宅リフォームを行う方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '下関市が実施する住宅リフォーム助成事業です。市内業者による住宅改修工事に対して最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 住宅リフォーム助成事業は、<span class="marker">市内に本店を有する施工業者による住宅改修工事</span>に対して費用の一部を助成する制度です。</p><p>住環境の改善と地域経済の活性化を同時に図ることを目的としています。外壁塗装、屋根修繕、トイレ・浴室の改修、バリアフリー化など幅広い工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">下関市内に本店を有する施工業者への依頼が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>下関市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>下関市役所住宅政策課に申請書類を提出します。工事の見積書、施工箇所の写真、図面などが必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始しないと補助対象になりません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算がなくなり次第受付終了</span>となるため、年度初めの早い段階での申請がおすすめです。</p><div class="highlight-box">耐震改修補助など他の住宅関連補助金との併用が可能な場合があります。複数の制度を組み合わせることで自己負担をさらに抑えられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'shimonoseki-startup-support',
    title: '下関市 創業チャレンジ支援補助金',
    organization: '下関市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '山口県',
    tags: ['下関市', '創業支援', '補助金'],
    eligibility: '下関市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '下関市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>下関市 創業チャレンジ支援補助金は、<span class="marker">市内で新規に事業を開始する方</span>に対して創業にかかる経費の一部を補助する制度です。</p><p>ふぐの水揚げ量日本一を誇る下関市は、水産業だけでなく多様な産業振興にも取り組んでいます。店舗改装費、設備購入費、広告宣伝費など、創業に必要な幅広い経費が補助対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限100万円</strong>です。<span class="marker-green">特定創業支援等事業による支援を受けた方は優遇</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>下関市内で新たに事業を開始する個人または法人</p><p>創業計画書の提出が可能なこと</p><p>下関市が実施する創業セミナー等を受講していること</p><p>市税の滞納がないこと</p></div><p>下関市役所産業振興課に創業計画書と見積書を添えて申請します。書類審査に加え、面接審査が行われることもあります。</p><p><span class="marker">創業前・創業後いずれのタイミングでも申請可能</span>ですが、創業後1年以内が期限です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の2分の1以内、<strong>上限は100万円</strong>です。対象経費には店舗の賃借料（最大6か月分）、設備費、広告費などが含まれます。</p><p><span class="marker">交付決定前に着手した経費は原則として補助対象外</span>となります。申請のタイミングには十分ご注意ください。</p><div class="highlight-box">下関市の創業支援窓口では、事業計画の作成から融資相談まで無料でサポートを受けられます。まずは相談窓口を訪ねてみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 久留米市（福岡県）3件: childcare, medical, employment
  // ────────────────────────────────────────────────
  {
    slug: 'kurume-child-medical',
    title: '久留米市 子ども医療費助成制度',
    organization: '久留米市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['久留米市', '子ども医療費', '助成金'],
    eligibility: '久留米市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '久留米市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>筑後地方の中心都市である久留米市は、ブリヂストン発祥の地としても知られ、子育て支援策にも積極的に取り組んでいます。通院・入院ともに幅広く助成され、子育て世帯の負担を大きく軽減しています。</p><p><span class="marker-green">所得制限なしで、久留米市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>久留米市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが必要条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>久留米市役所子ども未来部または各総合支所で申請できます。出生届や転入届と同時の手続きがスムーズです。申請後、<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。福岡県内の医療機関では子ども医療証を提示すれば窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は、いったん自己負担分を支払った後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-infertility-treatment',
    title: '久留米市 不妊治療費助成事業',
    organization: '久留米市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['久留米市', '不妊治療', '助成金'],
    eligibility: '久留米市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6か月以内に申請）',
    description: '久留米市が実施する不妊治療費助成事業です。不妊治療にかかる自己負担分の一部を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 不妊治療費助成事業は、<span class="marker">保険適用後の自己負担分を対象に、1年度あたり最大10万円</span>を助成する制度です。</p><p>2022年4月から不妊治療が保険適用になりましたが、それでもなお自己負担は大きな金額になることがあります。久留米市はこの自己負担分に対して独自の上乗せ助成を行い、治療を続ける夫婦を経済的に支援しています。</p><p><span class="marker-green">一般不妊治療・生殖補助医療のいずれも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>夫婦の双方またはいずれかが久留米市に住所を有すること</p><p>医療保険に加入していること</p><p>不妊治療に関する医療機関の証明書があること</p><p>市税の滞納がないこと</p></div><p>久留米市役所健康づくり推進課に申請書と医療機関の証明書を提出します。治療が終了した日から6か月以内に申請する必要があります。</p><p><span class="marker">年度をまたぐ治療の場合は、年度ごとに申請が必要</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担額を対象に、<strong>1年度あたり上限10万円</strong>を助成します。治療内容を問わず一律の上限額です。</p><p><span class="marker">他の自治体の助成金との重複受給はできません</span>。福岡県の助成制度がある場合は、県の助成額を差し引いた額が対象となります。</p><div class="highlight-box">久留米市では不妊に関する専門相談窓口も設置しています。治療の悩みや助成金の申請方法について、気軽に相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurume-startup-support',
    title: '久留米市 創業支援補助金',
    organization: '久留米市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['久留米市', '創業支援', '補助金'],
    eligibility: '久留米市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '久留米市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>久留米市 創業支援補助金は、<span class="marker">市内で新規に事業を開始する方</span>に対して創業にかかる経費の一部を補助する制度です。</p><p>九州の交通の要衝として栄える久留米市は、ゴム産業や医療都市としても知られています。飲食店、小売業、IT関連など幅広い業種が対象で、店舗改装費、設備購入費、広告宣伝費などが補助されます。</p><p>補助率は対象経費の2分の1以内で、<strong>上限100万円</strong>です。<span class="marker-green">特定創業支援等事業を受けた方には加算あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>久留米市内で新たに事業を開始する個人または法人</p><p>創業計画書を提出できること</p><p>久留米市の創業支援セミナー等を受講していること</p><p>市税の滞納がないこと</p></div><p>久留米市役所商工政策課に創業計画書と見積書を添えて申請します。書類審査に加え、プレゼンテーション審査が行われます。</p><p><span class="marker">事前に久留米ビジネスサポートセンターで相談を受けておくことが推奨</span>されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の2分の1以内、<strong>上限は100万円</strong>です。対象経費には店舗賃借料（最大6か月分）、設備費、広告費、外注費などが含まれます。</p><p><span class="marker">交付決定前に支出した経費は原則として補助対象外</span>です。申請のタイミングにはご注意ください。</p><div class="highlight-box">久留米市ビジネスサポートセンターでは、創業計画の作成から融資相談まで無料サポートを提供しています。まずは相談からはじめましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大牟田市（福岡県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'omuta-child-medical',
    title: '大牟田市 子ども医療費助成制度',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['大牟田市', '子ども医療費', '助成金'],
    eligibility: '大牟田市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '大牟田市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>三井三池炭鉱の歴史を持つ大牟田市は、世界遺産のまちとして新たな魅力を発信しながら、子育て支援策の充実にも力を入れています。通院・入院ともに助成対象で、子育て世帯の経済的負担を軽減しています。</p><p><span class="marker-green">所得制限なしで、すべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大牟田市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが必要条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>大牟田市役所子ども家庭課で申請します。出生届や転入届と同時に手続きするのがおすすめです。申請後、<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。福岡県内の医療機関では子ども医療証を提示すれば窓口負担がなくなります。</p><p><span class="marker">県外で受診した場合は、いったん窓口で支払った後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-housing-reform',
    title: '大牟田市 住宅改修補助事業',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['大牟田市', '住宅改修', '補助金'],
    eligibility: '大牟田市内に住所を有し、市内業者で住宅を改修する方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '大牟田市が実施する住宅改修補助事業です。市内業者を利用した住宅改修工事に最大15万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 住宅改修補助事業は、<span class="marker">市内の施工業者を利用した住宅の改修工事</span>に対して費用の一部を補助する制度です。</p><p>住環境の向上と地域経済の活性化を目的とした制度で、外壁塗装、屋根修繕、トイレ・浴室改修、バリアフリー化など幅広い工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は15万円</strong>です。<span class="marker-green">大牟田市内に事業所を有する施工業者への依頼が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大牟田市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>大牟田市役所都市整備課に申請書類を提出します。見積書と工事前の写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始しないと補助対象になりません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限15万円</strong>です。工事費20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算がなくなり次第終了</span>です。年度初めの早い段階での申請がおすすめです。</p><div class="highlight-box">耐震改修やバリアフリー改修など、他の補助制度と併用できる場合があります。複数の制度を上手に組み合わせて自己負担を軽減しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'omuta-migration-support',
    title: '大牟田市 移住定住促進補助金',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '福岡県',
    tags: ['大牟田市', '移住支援', '補助金'],
    eligibility: '大牟田市外から新たに転入し定住する方',
    applicationPeriod: '通年（転入後1年以内に申請）',
    description: '大牟田市が実施する移住定住促進補助金です。市外から移住する方に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大牟田市 移住定住促進補助金は、<span class="marker">市外から大牟田市へ新たに移住する方</span>を対象に、引越しや住宅取得にかかる費用の一部を補助する制度です。</p><p>世界遺産「明治日本の産業革命遺産」を有する大牟田市は、歴史と自然が共存する住みやすいまちとして移住促進に力を入れています。福岡市や熊本市へのアクセスも良好で、通勤圏としての魅力もあります。</p><p>補助額は世帯構成により異なり、<strong>単身最大15万円、世帯最大30万円</strong>です。<span class="marker-green">子育て世帯にはさらに加算あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>大牟田市外に1年以上居住した後に転入すること</p><p>5年以上定住する意思があること</p><p>市税の滞納がないこと</p><p>暴力団関係者でないこと</p></div><p>大牟田市役所まちづくり推進課に申請します。転入届の提出後、1年以内に申請する必要があります。</p><p><span class="marker">住宅の売買契約書や賃貸借契約書のコピーが必要</span>です。移住相談窓口で事前相談を受けておくとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は単身15万円、世帯20万円です。<strong>18歳未満の子ども1人につき5万円の加算</strong>があり、世帯上限は30万円です。</p><p><span class="marker">5年以内に転出した場合は補助金の返還を求められる</span>場合があります。長期的な定住を前提に検討しましょう。</p><div class="note-box">大牟田市では移住体験ツアーや空き家バンクも運営しています。移住を検討中の方は、まずオンライン移住相談を利用してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 佐世保市（長崎県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'sasebo-child-medical',
    title: '佐世保市 子ども医療費助成制度',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['佐世保市', '子ども医療費', '助成金'],
    eligibility: '佐世保市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '佐世保市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>ハウステンボスや佐世保バーガーで全国的に知られる佐世保市は、長崎県第2の都市として子育て支援にも力を入れています。通院・入院ともに幅広く助成されます。</p><p><span class="marker-green">所得制限なしで、佐世保市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>佐世保市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>佐世保市役所子ども保健課または各支所で申請します。出生届や転入届と同時に手続きするとスムーズです。申請後、<strong>「福祉医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。長崎県内の医療機関では資格者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関で受診した場合は、いったん自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-housing-seismic',
    title: '佐世保市 木造住宅耐震改修補助事業',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '長崎県',
    tags: ['佐世保市', '耐震改修', '補助金'],
    eligibility: '佐世保市内に1981年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '佐世保市が実施する木造住宅耐震改修補助事業です。旧耐震基準の木造住宅の耐震改修工事に最大60万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 木造住宅耐震改修補助事業は、<span class="marker">1981年5月以前の旧耐震基準で建てられた木造住宅</span>の耐震改修工事に対して費用の一部を補助する制度です。</p><p>地震に対する住宅の安全性を高めることで、住民の生命と財産を守ることを目的としています。耐震診断の結果、補強が必要と判断された住宅が対象です。</p><p>補助率は対象工事費の5分の4以内で、<strong>上限は60万円</strong>です。<span class="marker-green">耐震診断も無料で受けることができます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>1981年5月31日以前に着工された木造住宅</p><p>2階建て以下であること</p><p>耐震診断で倒壊の危険性があると判定されたもの</p><p>佐世保市内に所在すること</p></div><p>佐世保市役所建築指導課に申請します。まず無料の耐震診断を受け、その結果をもとに改修計画を立てます。</p><p><span class="marker">必ず工事着手前に交付申請を行ってください</span>。工事開始後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の5分の4以内で、<strong>上限60万円</strong>です。耐震診断は無料で実施されます。</p><p><span class="marker">年間の採択件数に限りがあるため、早めの相談をおすすめ</span>します。</p><div class="highlight-box">耐震改修と同時にリフォームを行う場合、他の住宅関連補助制度との併用が可能な場合があります。窓口で併用の可否を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'sasebo-startup-support',
    title: '佐世保市 創業支援事業補助金',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '長崎県',
    tags: ['佐世保市', '創業支援', '補助金'],
    eligibility: '佐世保市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '佐世保市が実施する創業支援事業補助金です。市内での新規創業に必要な経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐世保市 創業支援事業補助金は、<span class="marker">市内で新規に事業を開始する方</span>に対して創業にかかる経費の一部を補助する制度です。</p><p>海上自衛隊の基地や国際観光地ハウステンボスを擁する佐世保市は、観光業をはじめとした多様な産業の創出に取り組んでいます。店舗改装費、設備購入費、広告費など、創業準備に必要な経費が幅広く対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">商店街区域内での創業は上限額が優遇</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>佐世保市内で新たに事業を開始する個人または法人</p><p>創業計画書を作成し提出できること</p><p>佐世保市の創業支援窓口で事前相談を受けていること</p><p>市税の滞納がないこと</p></div><p>佐世保市役所商工物産課に創業計画書と必要書類を提出します。書類審査の後、採択が決定します。</p><p><span class="marker">佐世保市の創業支援セミナーの受講が採択時に加点される</span>ため、事前の受講がおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の2分の1以内、<strong>上限は50万円</strong>です。店舗賃借料（最大6か月分）、設備費、広告費などが対象経費に含まれます。</p><p><span class="marker">交付決定前に着手した経費は原則として補助対象外</span>です。申請のタイミングには十分注意してください。</p><div class="highlight-box">佐世保市では「させぼ起業プラザ」を設置しており、事業計画の相談から各種手続きまでワンストップで対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 別府市（大分県）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'beppu-child-medical',
    title: '別府市 子ども医療費助成制度',
    organization: '別府市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大分県',
    tags: ['別府市', '子ども医療費', '助成金'],
    eligibility: '別府市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '別府市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>日本一の湧出量を誇る温泉都市・別府市は、観光のまちとしての魅力に加え、子育てしやすいまちづくりにも力を入れています。通院・入院ともに助成対象で、子育て世帯の経済的負担を軽減しています。</p><p><span class="marker-green">所得制限なしで、別府市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>別府市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが要件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>別府市役所子育て支援課で申請します。出生届や転入届の提出時に同時に手続きするとスムーズです。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。大分県内の医療機関では受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外で受診した場合は、いったん自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-housing-reform',
    title: '別府市 住宅リフォーム促進事業補助金',
    organization: '別府市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '大分県',
    tags: ['別府市', '住宅リフォーム', '補助金'],
    eligibility: '別府市内に住所を有し、市内業者で住宅リフォームを行う方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '別府市が実施する住宅リフォーム促進事業です。市内業者を利用した住宅改修工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 住宅リフォーム促進事業補助金は、<span class="marker">市内に本店を有する施工業者による住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>温泉の影響で湿気が多い別府市では、住宅の劣化対策が特に重要です。外壁塗装、屋根修繕、浴室改修、断熱工事など幅広い工事が対象で、住環境の向上と地域経済の活性化を図ります。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内業者への発注が必須条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>別府市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>別府市役所建築指導課に申請書類を提出します。見積書と施工前の写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから着工しないと補助対象になりません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外です。</p><p><span class="marker">先着順で予算がなくなり次第受付終了</span>となります。早めの申請がおすすめです。</p><div class="highlight-box">別府市では温泉熱を利用した省エネ設備の導入にも別途補助制度があります。リフォームと合わせて検討してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'beppu-vaccination-subsidy',
    title: '別府市 高齢者予防接種費用助成',
    organization: '別府市',
    type: 'local',
    maxAmount: '自己負担1,000円',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大分県',
    tags: ['別府市', '予防接種', '助成金'],
    eligibility: '別府市に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月（インフルエンザ）',
    description: '別府市が実施する高齢者向け予防接種費用助成です。インフルエンザなどの予防接種を自己負担1,000円で受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>別府市 高齢者予防接種費用助成は、<span class="marker">65歳以上の方を対象にインフルエンザ等の予防接種費用を助成</span>する制度です。</p><p>高齢者がかかりやすい感染症の予防と重症化防止を目的としています。指定医療機関で接種すれば、市の助成により自己負担が大幅に軽減されます。</p><p><span class="marker-green">生活保護受給者は自己負担なしで接種可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>別府市に住民登録のある65歳以上の方が対象です。60〜64歳で心臓・腎臓・呼吸器の障がいがある方も対象となる場合があります。</p><div class="summary-box" data-title="接種の流れ"><p>市が指定する医療機関に予約</p><p>健康保険証と予診票を持参</p><p>窓口で自己負担1,000円を支払い接種</p></div><p>特別な申請手続きは不要で、<strong>指定医療機関に直接予約</strong>するだけで助成が適用されます。予診票は各医療機関に配布されています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>インフルエンザ予防接種の<strong>自己負担は1,000円</strong>で、残りの費用は市が負担します。生活保護受給者は無料です。</p><p><span class="marker">接種期間は例年10月〜翌年1月頃</span>です。期間外の接種は全額自己負担となるためご注意ください。</p><div class="note-box">肺炎球菌ワクチンについても別途助成制度があります。対象年齢に達した方には個別に案内が届きます。</div>'
      }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 延岡市（宮崎県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'nobeoka-child-medical',
    title: '延岡市 子ども医療費助成制度',
    organization: '延岡市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '宮崎県',
    tags: ['延岡市', '子ども医療費', '助成金'],
    eligibility: '延岡市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '延岡市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>延岡市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>宮崎県北部の中心都市・延岡市は、旭化成の企業城下町として知られています。五ヶ瀬川沿いの自然豊かな環境で子育てできるよう、医療費助成を通じた経済的支援を行っています。</p><p><span class="marker-green">所得制限なしで、延岡市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>延岡市に住民登録のある18歳までの子どもの保護者が対象です。健康保険に加入していることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>延岡市役所こども家庭課または各出張所で申請できます。出生届や転入届と同時に手続きするのがスムーズです。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。宮崎県内の医療機関では受給資格証を提示すれば窓口負担がなくなります。</p><p><span class="marker">県外で受診した場合は、いったん窓口で支払った後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.nobeoka.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nobeoka-startup-support',
    title: '延岡市 創業促進補助金',
    organization: '延岡市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '宮崎県',
    tags: ['延岡市', '創業支援', '補助金'],
    eligibility: '延岡市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '延岡市が実施する創業促進補助金です。市内での新規創業に必要な経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>延岡市 創業促進補助金は、<span class="marker">市内で新規に事業を開始する方</span>に対して創業にかかる経費の一部を補助する制度です。</p><p>延岡市は化学産業を中心に発展してきましたが、近年は多様な産業の育成にも注力しています。飲食店、小売店、サービス業など幅広い業種が対象で、店舗改装費や設備購入費、広告宣伝費などが補助されます。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。<span class="marker-green">中心市街地での創業には加算あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>延岡市内で新たに事業を開始する個人または法人</p><p>創業計画書を提出できること</p><p>延岡市の創業支援プログラムを受講していること</p><p>市税の滞納がないこと</p></div><p>延岡市役所商業・駅まち振興課に創業計画書と見積書を添えて申請します。書類審査と面談が行われます。</p><p><span class="marker">延岡市の創業相談窓口で事前に相談を受けておく</span>ことが採択への近道です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の2分の1以内、<strong>上限は50万円</strong>です。店舗賃借料（最大6か月分）、設備費、広告費、外注費などが対象です。</p><p><span class="marker">交付決定前に着手した経費は原則として補助対象外</span>です。申請タイミングにご注意ください。</p><div class="highlight-box">延岡市ではコワーキングスペースの提供や先輩起業家との交流イベントも開催しています。創業の第一歩として活用してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nobeoka.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nobeoka-migration-support',
    title: '延岡市 移住定住促進事業補助金',
    organization: '延岡市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'living',
    prefecture: '宮崎県',
    tags: ['延岡市', '移住支援', '補助金'],
    eligibility: '延岡市外から新たに転入し定住する方',
    applicationPeriod: '通年（転入後1年以内に申請）',
    description: '延岡市が実施する移住定住促進事業補助金です。市外から移住する方に最大60万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>延岡市 移住定住促進事業補助金は、<span class="marker">東京圏または市外から延岡市へ移住する方</span>を対象に、移住にかかる費用を補助する制度です。</p><p>美しい海岸線と山々に囲まれた延岡市は、サーフィンや登山などのアウトドアが楽しめる自然豊かなまちです。テレワーク移住や二拠点居住にも対応した支援を行っています。</p><p>東京圏からの移住の場合、<strong>単身60万円、世帯100万円</strong>の支給となります。<span class="marker-green">子育て世帯には子ども1人あたり加算あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>東京23区の在住者または東京圏から東京23区へ通勤していた方</p><p>延岡市に転入し5年以上継続して居住する意思があること</p><p>就業・テレワーク・起業いずれかの条件を満たすこと</p><p>市税の滞納がないこと</p></div><p>延岡市役所企画課に申請します。転入届の提出後、3か月以上1年以内に申請が必要です。</p><p><span class="marker">宮崎県のマッチングサイトに掲載された求人への就業が条件の一つ</span>です。テレワークでの移住も対象となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>東京圏からの移住の場合、<strong>単身60万円・世帯100万円</strong>が支給されます。18歳未満の子ども1人につき最大100万円の加算があります。</p><p><span class="marker">5年以内に転出した場合や要件を満たさなくなった場合は返還が必要</span>です。</p><div class="note-box">延岡市では「のべおか移住ナビ」を運営しており、オンライン移住相談や移住体験ツアーも実施しています。まずは情報収集から始めてみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nobeoka.miyazaki.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 鹿屋市（鹿児島県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'kanoya-child-medical',
    title: '鹿屋市 子ども医療費助成制度',
    organization: '鹿屋市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '鹿児島県',
    tags: ['鹿屋市', '子ども医療費', '助成金'],
    eligibility: '鹿屋市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '鹿屋市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿屋市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>大隅半島の中心都市である鹿屋市は、海上自衛隊鹿屋航空基地や鹿屋体育大学で知られる活気あるまちです。豊かな自然環境の中で安心して子育てできるよう、医療費助成を通じた支援を行っています。</p><p><span class="marker-green">所得制限なしで、鹿屋市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鹿屋市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>鹿屋市役所子育て支援課または各総合支所で申請します。出生届や転入届と同時に手続きするのがスムーズです。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。鹿児島県内の医療機関では受給資格証を提示すれば窓口負担がなくなります。</p><p><span class="marker">県外で受診した場合は、いったん自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.e-kanoya.net/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanoya-housing-new-build',
    title: '鹿屋市 住宅取得支援補助金',
    organization: '鹿屋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '鹿児島県',
    tags: ['鹿屋市', '住宅取得', '補助金'],
    eligibility: '鹿屋市内で新たに住宅を取得する方（新築・中古問わず）',
    applicationPeriod: '通年（住宅取得後1年以内に申請）',
    description: '鹿屋市が実施する住宅取得支援補助金です。市内での住宅の新築・購入に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿屋市 住宅取得支援補助金は、<span class="marker">鹿屋市内で住宅を新築または購入する方</span>に対して費用の一部を補助する制度です。</p><p>大隅半島の中核都市として発展する鹿屋市は、定住人口の増加を目指して住宅取得への支援を強化しています。新築・中古住宅いずれも対象で、移住者にも開かれた制度です。</p><p>基本補助額は30万円で、<strong>子育て世帯や市外からの転入者には加算</strong>があり、<span class="marker-green">最大50万円</span>を受け取ることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>鹿屋市内で住宅を新築または購入すること</p><p>住宅取得後、5年以上定住する意思があること</p><p>市税の滞納がないこと</p><p>住宅の所有権登記が完了していること</p></div><p>鹿屋市役所都市政策課に申請書類を提出します。売買契約書や登記簿謄本などが必要です。</p><p><span class="marker">住宅取得後1年以内の申請が必要</span>です。早めに窓口で相談しておきましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本補助額は30万円です。<strong>子育て世帯加算（子ども1人10万円、最大20万円）</strong>があり、合計最大50万円となります。</p><p><span class="marker">5年以内に転出した場合は補助金の返還が必要</span>になることがあります。長期的な定住を前提に申請しましょう。</p><div class="highlight-box">鹿屋市では空き家バンクも運営しており、中古住宅の情報を提供しています。住宅取得補助金と空き家バンクを併用して、お得にマイホームを手に入れましょう。</div>'
      }
    ],
    officialUrl: 'https://www.e-kanoya.net/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanoya-migration-support',
    title: '鹿屋市 移住支援金',
    organization: '鹿屋市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '鹿児島県',
    tags: ['鹿屋市', '移住支援', '補助金'],
    eligibility: '東京圏から鹿屋市に移住し、就業または起業する方',
    applicationPeriod: '通年（転入後3か月〜1年以内に申請）',
    description: '鹿屋市が実施する移住支援金です。東京圏からの移住者に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿屋市 移住支援金は、<span class="marker">東京23区の在住者または東京圏から23区へ通勤していた方が鹿屋市へ移住する場合</span>に支給される支援金です。</p><p>温暖な気候と豊かな自然に恵まれた鹿屋市は、バラ園やカンパチなど地域の魅力を活かしながら移住促進に取り組んでいます。テレワーク移住も対象となり、働き方の多様化に対応しています。</p><p>支給額は<strong>単身60万円、世帯100万円</strong>で、<span class="marker-green">18歳未満の子ども1人につき最大100万円の加算</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>東京23区の在住者または東京圏から23区へ通勤していた方</p><p>鹿屋市に転入し5年以上継続して居住する意思があること</p><p>鹿児島県のマッチングサイト掲載求人への就業・テレワーク・起業のいずれか</p><p>市税の滞納がないこと</p></div><p>鹿屋市役所地域活力推進課に申請します。転入届の提出後、3か月以上1年以内に申請が必要です。</p><p><span class="marker">移住前に就業先の確保やテレワーク要件の確認をしておく</span>ことが大切です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>単身の場合<strong>60万円</strong>、世帯の場合<strong>100万円</strong>が支給されます。18歳未満の子ども1人につき最大100万円の加算があります。</p><p><span class="marker">5年以内に転出した場合や要件を満たさなくなった場合は全額返還</span>が求められます。</p><div class="note-box">鹿屋市では「おおすみ移住サポートセンター」を設置しており、住まいや仕事の相談をワンストップで対応しています。オンラインでの移住相談も可能です。</div>'
      }
    ],
    officialUrl: 'https://www.e-kanoya.net/',
    publishedAt: '2026-03-12',
  },
];
