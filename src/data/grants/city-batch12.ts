import { Grant } from '@/lib/types';

export const cityGrantsBatch12: Grant[] = [
  // ────────────────────────────────────────────────
  // 旭川市（北海道）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'asahikawa-child-medical',
    title: '旭川市 子ども医療費助成制度',
    organization: '旭川市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['旭川市', '子ども医療費', '助成金'],
    eligibility: '旭川市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '旭川市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>北海道第2の都市である旭川市は、旭山動物園で全国的に知られています。厳しい冬を過ごす地域だからこそ、子どもの急な通院にも経済的な不安なく対応できる体制を整えています。</p><p><span class="marker-green">所得制限はなく、旭川市在住のすべての対象世帯が利用可能</span>です。通院・入院・調剤が助成対象となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>旭川市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（道外受診時の払い戻し用）</p></div><p>旭川市役所子育て支援課または各支所で申請します。出生届や転入届と同時に手続きするのがスムーズです。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。北海道内の医療機関であれば受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">道外の医療機関を受診した場合は、一旦自己負担分を支払い後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-housing-reform',
    title: '旭川市 住宅リフォーム補助金',
    organization: '旭川市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '北海道',
    tags: ['旭川市', '住宅リフォーム', '補助金'],
    eligibility: '旭川市内に住所を有し、市内業者による住宅リフォームを行う方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '旭川市が実施する住宅リフォーム補助金です。市内業者を利用した住宅改修工事に最大30万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 住宅リフォーム補助金は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>北海道の内陸に位置する旭川市は冬の寒さが厳しく、断熱改修や暖房設備の更新ニーズが高い地域です。本制度では断熱工事はもちろん、屋根修繕、外壁塗装、水回り改修、バリアフリー工事など幅広いリフォームが対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は30万円</strong>です。<span class="marker-green">省エネ改修を含む場合は補助率が優遇される場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>旭川市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による30万円以上（税込）の工事であること</p></div><p>旭川市役所建築指導課に申請書と見積書を提出します。工事内容がわかる図面・写真も必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定を受けてから工事を始めないと補助対象になりません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限30万円</strong>です。工事費が30万円未満の軽微な工事は対象外となります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となるため、年度初めの早い段階で申請するのがおすすめです。</p><div class="highlight-box">旭川市の耐震改修補助やバリアフリー改修補助との併用が可能な場合があります。寒冷地ならではの二重窓設置や断熱材追加も対象となるため、冬の暖房費節約にもつながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'asahikawa-senior-medical',
    title: '旭川市 重度心身障害者医療費助成',
    organization: '旭川市',
    type: 'local',
    maxAmount: '自己負担額を全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['旭川市', '障害者医療', '助成金'],
    eligibility: '旭川市に住所を有する重度心身障害者手帳所持者',
    applicationPeriod: '通年',
    description: '旭川市が実施する重度心身障害者医療費助成制度です。重度の障害のある方の医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>旭川市 重度心身障害者医療費助成は、<span class="marker">身体障害者手帳1〜3級、療育手帳A判定、精神障害者保健福祉手帳1級</span>のいずれかを所持する方の医療費を助成する制度です。</p><p>通院・入院・調剤にかかる保険診療の自己負担分が助成されます。北海道の寒冷な気候は健康管理に一層の配慮が必要であり、障害のある方が安心して医療を受けられる環境を支えています。</p><p><span class="marker-green">65歳以上で後期高齢者医療制度に加入している方も対象</span>となる場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる障害等級"><p>身体障害者手帳1級〜3級</p><p>療育手帳A判定（重度）</p><p>精神障害者保健福祉手帳1級</p></div><p>旭川市役所障害福祉課で申請します。障害者手帳、健康保険証、本人確認書類が必要です。</p><p>申請後、<strong>「重度心身障害者医療費受給者証」</strong>が交付されます。医療機関の窓口でこの受給者証を提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険診療の自己負担分が<strong>全額助成</strong>されます。ただし、<span class="marker">一定以上の所得がある場合は対象外</span>となることがあります。</p><p>北海道内の医療機関であれば受給者証の提示で窓口負担がなくなりますが、道外受診の場合は償還払いとなります。</p><div class="note-box">入院時の食事療養費や差額ベッド代、保険適用外の治療は助成対象外です。障害等級が変更になった場合は速やかに届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 函館市（北海道）3件: childcare, employment, housing
  // ────────────────────────────────────────────────
  {
    slug: 'hakodate-child-medical',
    title: '函館市 子ども医療費助成制度',
    organization: '函館市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['函館市', '子ども医療費', '助成金'],
    eligibility: '函館市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '函館市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生（15歳到達後の最初の3月31日）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>北海道南部に位置し、五稜郭や夜景で有名な函館市。観光都市として知られる一方で、子育て支援にも積極的に取り組んでいます。通院・入院・調剤のいずれも助成対象です。</p><p><span class="marker-green">所得制限なしで、函館市に住む全ての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>函館市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>函館市役所子ども未来部または各支所で申請できます。出生届や転入届の提出時にあわせて手続きすると便利です。<strong>「子ども医療費受給者証」</strong>が交付されたら、受診時に保険証と一緒に提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。北海道内の医療機関では受給者証の提示で窓口負担なしで受診できます。</p><p><span class="marker">道外の医療機関を受診した場合は、一旦自費で支払い後に償還払い申請</span>が必要です。受診日から6か月以内に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健診費用など）は助成対象外です。他の公費医療制度が優先適用される場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-startup-support',
    title: '函館市 創業支援補助金',
    organization: '函館市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '北海道',
    tags: ['函館市', '創業支援', '補助金'],
    eligibility: '函館市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '函館市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方の初期費用を最大100万円補助</span>する制度です。</p><p>港町・函館の地域経済を活性化するため、飲食店、小売業、IT関連など幅広い業種の創業を支援しています。店舗改装費、設備導入費、広告宣伝費などが補助対象となります。</p><p>補助率は対象経費の2/3で、<strong>上限は100万円</strong>です。<span class="marker-green">函館市の特定創業支援等事業を受講していることが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>函館市内で新たに創業する個人または法人</p><p>創業後1年以内であること</p><p>函館市の特定創業支援等事業を受講済みであること</p><p>市税の滞納がないこと</p></div><p>函館市役所経済部商業振興課へ事業計画書とともに申請します。商工会議所等が実施するセミナーの受講修了証が必要です。</p><p>審査により交付が決定されます。<span class="marker">個人事業主・法人問わず申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2/3で、<strong>上限100万円</strong>です。店舗改装費、機械設備費、広告費などが対象ですが、<span class="marker">人件費や商品仕入費は対象外</span>です。</p><p>補助金は事業完了後の精算払いとなるため、一時的に自己資金での立替が必要です。実績報告書の提出も求められます。</p><div class="highlight-box">函館市では創業相談窓口「はこだて未来ラボ」を運営しています。事業計画の立案から融資相談まで、無料でサポートを受けることができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hakodate-housing-seismic',
    title: '函館市 木造住宅耐震改修補助',
    organization: '函館市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '北海道',
    tags: ['函館市', '耐震改修', '補助金'],
    eligibility: '函館市内に昭和56年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '函館市が実施する木造住宅耐震改修補助制度です。旧耐震基準の木造住宅の耐震改修工事に最大100万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>函館市 木造住宅耐震改修補助は、<span class="marker">昭和56年5月31日以前に建築された木造住宅</span>の耐震改修工事に対して費用を補助する制度です。</p><p>函館市は北海道でも地震リスクのある地域であり、旧耐震基準で建てられた住宅の安全性向上が課題となっています。耐震診断で倒壊の危険性があると判定された住宅が対象です。</p><p>補助額は耐震改修工事費の23%以内で、<strong>上限は100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>耐震診断で倒壊の危険性ありと判定されたもの</p><p>函館市内に所在する個人所有の住宅</p></div><p>まず無料の耐震診断を受けることが第一歩です。診断結果をもとに、函館市役所都市建設部住宅課へ改修補助を申請します。</p><p><span class="marker-green">耐震診断も市の補助で無料で受けられます</span>。まずは診断から始めてみましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事費の23%以内で、<strong>上限100万円</strong>が補助されます。<span class="marker">工事着手前の申請が必須</span>で、交付決定後に工事を開始してください。</p><p>改修後は耐震基準を満たす水準まで性能を引き上げる必要があります。部分的な補強のみでは対象外となる場合があります。</p><div class="highlight-box">耐震改修を行うと、固定資産税の減額措置（翌年度から1年間、税額が1/2に）を受けられる場合があります。改修と減税のダブルメリットを活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // いわき市（福島県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'iwaki-child-medical',
    title: 'いわき市 子ども医療費助成制度',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['いわき市', '子ども医療費', '助成金'],
    eligibility: 'いわき市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: 'いわき市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの医療費を助成する制度です。</p><p>福島県浜通りに位置するいわき市は、スパリゾートハワイアンズでも知られる東北有数の工業都市です。震災復興を経て、子育て支援制度の充実にも力を入れています。</p><p><span class="marker-green">通院・入院ともに保険診療の自己負担分が全額助成</span>されます。所得制限はありません。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>いわき市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類（マイナンバーカード等）</p><p>振込先口座情報</p></div><p>いわき市役所こどもみらい課または各支所で申請します。出生届・転入届と同時に手続きするのがおすすめです。<strong>「子ども医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院・調剤すべてにおいて<strong>保険診療の自己負担分が全額助成</strong>されます。福島県内の医療機関であれば受給資格者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は償還払い</span>となります。領収書を保管し、受診から6か月以内に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種費用など）は対象外です。交通事故等の第三者行為による傷病の場合は届出が必要となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-housing-reform',
    title: 'いわき市 住宅リフォーム支援事業',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '福島県',
    tags: ['いわき市', '住宅リフォーム', '補助金'],
    eligibility: 'いわき市内に住所を有し、市内業者で住宅リフォームを行う方',
    applicationPeriod: '毎年4月〜10月頃（予算に達し次第終了）',
    description: 'いわき市が実施する住宅リフォーム支援事業です。市内業者を利用した住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 住宅リフォーム支援事業は、<span class="marker">市内施工業者を利用した住宅の改修・修繕工事</span>に対して補助金を交付する制度です。</p><p>東日本大震災からの復興を果たしたいわき市では、住宅の安全性と快適性の向上を支援するとともに、地元建設業者への発注を通じた地域経済の活性化を図っています。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">屋根、外壁、水回り、バリアフリー改修など幅広い工事が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>いわき市内に住所を有すること</p><p>改修する住宅がいわき市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上（税込）の工事であること</p></div><p>いわき市役所住まい政策課に申請書、見積書、工事内容がわかる図面等を提出します。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから工事を開始</span>してください。事後申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。対象工事費が20万円未満の場合は補助対象外となります。</p><p><span class="marker">毎年度予算が限られており、先着順で受付終了</span>します。募集開始直後に申請するのが確実です。</p><div class="highlight-box">いわき市では耐震診断・耐震改修補助も別途実施しています。複数の制度を併用することで、自己負担を大幅に抑えることが可能です。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'iwaki-migration-support',
    title: 'いわき市 移住支援金',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '福島県',
    tags: ['いわき市', '移住支援', '支援金'],
    eligibility: '東京圏から、いわき市に移住し就業・創業する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: 'いわき市が実施する移住支援金です。東京23区在住者または東京圏から通勤していた方がいわき市に移住する際に最大100万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわき市 移住支援金は、<span class="marker">東京23区に在住または東京圏（埼玉・千葉・東京・神奈川）から通勤していた方</span>がいわき市に移住し、対象となる就業・創業等を行う場合に支給される制度です。</p><p>震災復興を経たいわき市は、温暖な気候と豊かな自然に恵まれた住みやすいまちです。UIJターンの促進を通じて地域の活力を高める取り組みの一環として本制度が設けられています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から通勤していたこと</p><p>いわき市に転入後3か月以上1年以内に申請すること</p><p>福島県のマッチングサイト掲載企業への就業、または市内での創業</p><p>5年以上いわき市に居住する意思があること</p></div><p>いわき市役所ふるさと誘致課に申請書と必要書類を提出します。<span class="marker-green">テレワーク移住も対象</span>となる場合があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>です。18歳未満の子どもを帯同する場合は<span class="marker">子ども1人につき最大100万円が加算</span>される場合があります。</p><p>転入後5年以内にいわき市から転出した場合は、支援金の返還が求められます。就業先を1年以内に退職した場合も同様です。</p><div class="note-box">申請前に必ずいわき市役所に事前相談することをおすすめします。要件の確認や必要書類の案内を受けられます。福島県の移住ポータルサイトも参考にしてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 郡山市（福島県）3件: childcare, medical, employment
  // ────────────────────────────────────────────────
  {
    slug: 'koriyama-child-medical',
    title: '郡山市 子ども医療費助成制度',
    organization: '郡山市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['郡山市', '子ども医療費', '助成金'],
    eligibility: '郡山市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '郡山市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>福島県中通りの中心都市である郡山市は「東北のウィーン」とも呼ばれる音楽の都です。人口約32万人を擁する中核市として、子育て家庭の医療費負担軽減に積極的に取り組んでいます。</p><p><span class="marker-green">所得制限なしで、通院・入院・調剤すべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>郡山市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>郡山市役所こども部こども政策課または各行政センターで申請します。出生届・転入届と同時に手続きするのが便利です。<strong>「子ども医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院・調剤いずれも<strong>保険診療の自己負担分が全額助成</strong>されます。福島県内の医療機関では受給資格者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は償還払い</span>の手続きが必要です。領収書を保管して6か月以内に申請しましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。交通事故など第三者行為による傷病の場合は別途届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-infertility-treatment',
    title: '郡山市 不妊治療費助成事業',
    organization: '郡山市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '福島県',
    tags: ['郡山市', '不妊治療', '助成金'],
    eligibility: '郡山市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了日から60日以内に申請）',
    description: '郡山市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する市独自の上乗せ制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、それでも治療費は高額になりがちです。郡山市では国・県の制度に加えて市独自の助成を行い、子どもを望む夫婦の経済的負担を軽減しています。</p><p>助成額は自己負担分のうち<strong>1回の治療あたり最大10万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦ともに（または一方が）郡山市に住所を有すること</p><p>保険適用の不妊治療を受けていること</p><p>市税の滞納がないこと</p><p>他の自治体から同種の助成を受けていないこと</p></div><p>郡山市保健所こども支援課に申請します。医療機関が発行する治療証明書、領収書、健康保険証の写しなどが必要です。</p><p><span class="marker-green">事実婚の方も対象</span>となります。治療終了日から60日以内に申請してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき自己負担額から高額療養費等を差し引いた額が助成対象で、<strong>上限は10万円</strong>です。<span class="marker">年度内の回数制限や通算回数制限</span>がある場合があります。</p><p>人工授精・体外受精・顕微授精など、保険適用の治療が対象です。自費診療部分は対象外です。</p><div class="highlight-box">郡山市では不妊に関する相談窓口も設けています。治療費の助成だけでなく、精神的なサポートも受けられます。まずは気軽に相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koriyama-startup-support',
    title: '郡山市 創業者応援補助金',
    organization: '郡山市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '福島県',
    tags: ['郡山市', '創業支援', '補助金'],
    eligibility: '郡山市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年5月〜翌年1月頃（予算に達し次第終了）',
    description: '郡山市が実施する創業者応援補助金です。市内での新規創業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>郡山市 創業者応援補助金は、<span class="marker">市内で新たに事業を開始する方の創業初期費用を最大50万円補助</span>する制度です。</p><p>東北の交通の要衝として発展してきた郡山市は、商業・サービス業が盛んな都市です。新たな事業者の参入を促し、地域経済の多様化と活性化を図っています。</p><p>補助率は対象経費の1/2で、<strong>上限は50万円</strong>です。店舗・事務所の改装費や設備導入費などが対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>郡山市内で新たに創業する個人・法人</p><p>創業後1年以内の事業者</p><p>郡山市の認定特定創業支援等事業を受講済みであること</p><p>市税の滞納がないこと</p></div><p>郡山市役所産業観光部産業創出課に事業計画書とともに申請します。商工会議所等の創業セミナー修了が要件です。</p><p><span class="marker">審査があり、事業計画の実現性や地域貢献度が評価</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2で、<strong>上限50万円</strong>です。店舗改装費、機械設備費、広告宣伝費、許認可取得費などが対象です。</p><p><span class="marker">人件費・仕入原価・家賃は補助対象外</span>です。補助金は事業完了後の精算払いとなり、実績報告書の提出が必要です。</p><div class="note-box">郡山市産業創出課では創業相談を随時受け付けています。事業計画の策定支援から融資制度の紹介まで、ワンストップでサポートを受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 川越市（埼玉県）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'kawagoe-child-medical',
    title: '川越市 こども医療費助成制度',
    organization: '川越市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['川越市', '子ども医療費', '助成金'],
    eligibility: '川越市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '川越市が実施するこども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>「小江戸」の愛称で親しまれる川越市は、蔵造りの町並みが残る歴史と文化の街です。人口約35万人を擁する中核市として、子育て環境の充実にも力を入れています。</p><p><span class="marker-green">所得制限なしで、通院・入院・調剤すべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>川越市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>個人番号（マイナンバー）確認書類</p></div><p>川越市役所こども未来部こども政策課または各市民センターで申請します。出生届・転入届の提出時にあわせて手続きすると便利です。<strong>「こども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関では受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は償還払い</span>の手続きが必要です。領収書原本を添えて申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、薬の容器代など）は助成対象外です。学校・保育所でのケガは日本スポーツ振興センターの災害共済給付が優先適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-scholarship',
    title: '川越市 奨学金制度',
    organization: '川越市',
    type: 'local',
    maxAmount: '月額最大3万5千円',
    maxAmountNum: 42,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['川越市', '奨学金', '教育支援'],
    eligibility: '川越市に住所を有する世帯の高校生・大学生等で、経済的理由により修学が困難な方',
    applicationPeriod: '毎年4月〜5月頃',
    description: '川越市が実施する奨学金制度です。経済的に修学が困難な高校生・大学生等に月額最大3万5千円を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対し、学資金を貸与（無利子）する制度です。</p><p>教育の機会均等を推進するため、川越市が独自に運営しています。高等学校、高等専門学校、大学（短期大学含む）、専修学校に在学する方が対象です。</p><p>貸与月額は高校生<strong>月額1万8千円</strong>、大学生等<strong>月額3万5千円</strong>です。<span class="marker-green">無利子で返還できるのが大きなメリット</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>川越市に住所を有する世帯の生徒・学生であること</p><p>経済的理由により修学が困難であること</p><p>学業成績が一定水準以上であること</p><p>他の奨学金との併用制限あり</p></div><p>毎年4月〜5月頃に川越市教育委員会教育財務課で受け付けます。申請書、在学証明書、世帯の所得証明書、成績証明書などが必要です。</p><p><span class="marker">選考により採否が決定</span>されます。募集人数に限りがあるため、早めの準備をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は高校生等<strong>月額1万8千円</strong>、大学生等<strong>月額3万5千円</strong>です。いずれも<span class="marker">無利子</span>です。</p><p>卒業後6か月の据え置き期間を経て返還が始まります。返還期間は貸与を受けた期間の3倍以内です。</p><div class="highlight-box">川越市の奨学金は無利子のため、卒業後の返済負担が民間の教育ローンと比べて大幅に軽減されます。日本学生支援機構の奨学金と併用できない場合があるため、事前に確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawagoe-housing-seismic',
    title: '川越市 木造住宅耐震改修補助',
    organization: '川越市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['川越市', '耐震改修', '補助金'],
    eligibility: '川越市内に昭和56年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '川越市が実施する木造住宅耐震改修補助制度です。旧耐震基準の木造住宅の耐震改修工事に最大60万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川越市 木造住宅耐震改修補助は、<span class="marker">昭和56年5月31日以前に建築された木造住宅</span>の耐震改修工事に対して費用の一部を補助する制度です。</p><p>歴史的建造物が多く残る川越市では、地震による建物被害を軽減し、市民の安全を守ることが重要課題となっています。耐震診断で「倒壊する可能性がある」と判定された木造住宅が対象です。</p><p>補助額は耐震改修工事費の23%以内で、<strong>上限は60万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>耐震診断の結果、評点が1.0未満であること</p><p>川越市内に所在する個人所有の住宅</p><p>過去に同補助を受けていないこと</p></div><p>川越市役所建築指導課に申請します。先に無料の耐震診断を受けることが前提です。</p><p><span class="marker-green">耐震診断も市の補助制度で無料で受けることができます</span>。まずは診断から始めましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の23%以内で、<strong>上限60万円</strong>です。<span class="marker">工事着手前の申請が必須</span>で、交付決定後に工事を開始してください。</p><p>改修後に耐震基準（評点1.0以上）を満たすことが条件です。簡易な補強のみでは対象外となる場合があります。</p><div class="highlight-box">耐震改修を行うと、所得税の特別控除や固定資産税の減額措置を受けられる場合があります。工事費の補助と税制優遇のダブルメリットを活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 川口市（埼玉県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'kawaguchi-child-medical',
    title: '川口市 こども医療費助成制度',
    organization: '川口市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['川口市', '子ども医療費', '助成金'],
    eligibility: '川口市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '川口市が実施するこども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>埼玉県南部に位置する川口市は人口約60万人を超える中核市です。東京に隣接する利便性の高さから子育て世帯の転入も多く、充実した医療費助成は大きな安心材料となっています。</p><p><span class="marker-green">所得制限なしで、通院・入院・調剤すべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>川口市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>個人番号（マイナンバー）確認書類</p></div><p>川口市役所子ども部子ども政策課、各支所・川口駅前行政センターで申請できます。出生届や転入届と同時に手続きするとスムーズです。<strong>「こども医療費受給資格証」</strong>が後日郵送されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院・調剤いずれも<strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関では受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は償還払い</span>の手続きが必要です。領収書原本を添えて市役所に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。生活保護を受給中の方は対象外となります。他の公費医療制度が適用される場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-housing-reform',
    title: '川口市 住宅改修資金助成金',
    organization: '川口市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['川口市', '住宅改修', '助成金'],
    eligibility: '川口市に1年以上居住し、市内業者で住宅改修を行う方',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '川口市が実施する住宅改修資金助成金です。市内業者を利用した住宅改修工事に最大10万円が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 住宅改修資金助成金は、<span class="marker">市内施工業者を利用した住宅の修繕・改良工事</span>に対して費用の一部を助成する制度です。</p><p>鋳物の街として知られる川口市は、東京のベッドタウンとしても発展してきました。住宅の老朽化対策やバリアフリー化のニーズに応えるとともに、市内業者への発注を通じた地域経済の活性化を目的としています。</p><p>助成額は対象工事費の5%で、<strong>上限は10万円</strong>です。<span class="marker-green">20万円以上（税抜）の工事が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>川口市に1年以上居住していること</p><p>市税を滞納していないこと</p><p>川口市内の業者が施工する20万円以上（税抜）の工事であること</p><p>過去に本助成を受けてから5年以上経過していること</p></div><p>川口市役所住宅政策課に申請書、見積書、工事図面等を提出します。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定を受けてから工事を開始することが条件です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費（税抜）の5%で、<strong>上限10万円</strong>です。<span class="marker">先着順で予算に達し次第受付終了</span>します。</p><p>外壁塗装、屋根修繕、トイレ・浴室・キッチンの改修、床の張替え、バリアフリー工事など幅広く対象です。ただし新築や増築、外構工事は対象外です。</p><div class="highlight-box">川口市では別途、耐震診断・耐震改修補助や省エネ住宅改修の補助制度も実施しています。複数の制度を組み合わせて活用することで、自己負担をさらに軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kawaguchi-sme-support',
    title: '川口市 中小企業事業資金利子補給金',
    organization: '川口市',
    type: 'local',
    maxAmount: '利子補給率1.0%以内',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['川口市', '中小企業支援', '利子補給'],
    eligibility: '川口市内に事業所を有する中小企業者',
    applicationPeriod: '通年',
    description: '川口市が実施する中小企業事業資金利子補給金です。市の融資あっせんを受けた中小企業者に対し、借入金利子の一部を補給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川口市 中小企業事業資金利子補給金は、<span class="marker">市の融資あっせん制度を利用した中小企業者に対し、支払利子の一部を補給</span>する制度です。</p><p>鋳物産業から発展した川口市の産業基盤を支えるため、中小企業の資金繰りを支援しています。運転資金や設備資金の借入に対して利子の負担を軽減することで、事業の安定と成長を後押しします。</p><p>利子補給率は<strong>年1.0%以内</strong>で、融資の種類により異なります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>川口市内に事業所を有する中小企業者であること</p><p>川口市の融資あっせん制度を利用していること</p><p>市税を完納していること</p><p>信用保証協会の保証を受けていること</p></div><p>川口市役所経済部産業振興課で申請します。融資の返済実績を証明する書類が必要です。</p><p><span class="marker-green">事業を開始して間もない方も融資あっせんを受けられます</span>。まずは融資あっせんの相談から始めてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>利子補給率は融資制度の種類に応じて<strong>年0.5%〜1.0%</strong>です。<span class="marker">補給期間は融資実行日から最長3年間</span>です。</p><p>利子補給金は半年ごとに申請し、支払った利子に対して補給率を乗じた額が交付されます。延滞がある場合は対象外です。</p><div class="note-box">川口市の融資あっせん制度には、一般事業資金のほか、創業支援資金、経営安定資金など複数のメニューがあります。事業の目的に合った融資を選ぶことが大切です。詳しくは産業振興課にご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 越谷市（埼玉県）3件: childcare, medical, education
  // ────────────────────────────────────────────────
  {
    slug: 'koshigaya-child-medical',
    title: '越谷市 こども医療費助成制度',
    organization: '越谷市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['越谷市', '子ども医療費', '助成金'],
    eligibility: '越谷市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '越谷市が実施するこども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>越谷レイクタウンなど大型商業施設でも知られる越谷市は、子育てファミリーの居住地としても人気の高い街です。中核市として子育て支援制度の充実に取り組んでおり、医療費助成もその柱の一つです。</p><p><span class="marker-green">所得制限なし、通院・入院・調剤すべてが助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>越谷市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>個人番号（マイナンバー）確認書類</p></div><p>越谷市役所子ども家庭部子ども政策課または各出張所で申請できます。出生届・転入届の提出時にあわせて手続きしましょう。<strong>「こども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院・調剤すべてにおいて<strong>保険診療の自己負担分が全額助成</strong>されます。埼玉県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は、一旦自己負担を支払い後に償還払い申請</span>が必要です。領収書原本を添えて申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健診費用など）は助成対象外です。他の公費負担医療制度が適用される場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-vaccination-support',
    title: '越谷市 高齢者予防接種費用助成',
    organization: '越谷市',
    type: 'local',
    maxAmount: '自己負担額の全額助成',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['越谷市', '予防接種', '高齢者助成'],
    eligibility: '越谷市に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月頃（インフルエンザ）',
    description: '越谷市が実施する高齢者予防接種費用助成です。65歳以上の方のインフルエンザ予防接種等の自己負担が軽減されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 高齢者予防接種費用助成は、<span class="marker">65歳以上の高齢者を対象に、インフルエンザや肺炎球菌の予防接種費用</span>の一部または全部を助成する制度です。</p><p>高齢者は感染症にかかると重症化しやすいため、予防接種による感染予防が重要です。越谷市では高齢者が経済的な負担なく予防接種を受けられるよう支援しています。</p><p>インフルエンザ予防接種は<strong>自己負担1,500円程度</strong>で受けられます。<span class="marker-green">生活保護受給者は全額免除</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>越谷市に住所を有する65歳以上の方</p><p>60〜64歳で心臓・腎臓・呼吸器等に重度の障害がある方</p></div><p>市内の指定医療機関に予診票を持参して接種を受けます。予診票は毎年10月頃に市から対象者に送付されます。届かない場合は越谷市保健センターに連絡してください。</p><p>事前申請は不要で、<span class="marker">指定医療機関に直接予約して接種</span>するだけでOKです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>インフルエンザ予防接種は市が費用の大部分を負担し、<strong>自己負担は1,500円程度</strong>です。<span class="marker">生活保護受給者および市民税非課税世帯は自己負担が全額免除</span>されます。</p><p>肺炎球菌ワクチンは対象年齢（65歳、70歳、75歳…）に該当する方に接種機会が設けられています。</p><div class="note-box">接種期間はインフルエンザが10月〜1月末頃、肺炎球菌は年間を通して接種可能です。市外の医療機関で接種する場合は、事前に越谷市保健センターへの届出が必要となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'koshigaya-learning-support',
    title: '越谷市 就学援助制度',
    organization: '越谷市',
    type: 'local',
    maxAmount: '学用品費・給食費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['越谷市', '就学援助', '教育支援'],
    eligibility: '越谷市立小中学校に在学する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月（年度途中の申請も可）',
    description: '越谷市が実施する就学援助制度です。経済的にお困りの世帯の小中学生に、学用品費や給食費などを支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>越谷市 就学援助制度は、<span class="marker">経済的に困窮している世帯の小中学生</span>に対し、学校生活に必要な費用の一部を援助する制度です。</p><p>すべての子どもが経済的な理由にかかわらず等しく教育を受けられるよう、越谷市が実施しています。学用品費、通学費、給食費、修学旅行費、医療費（学校保健に関するもの）などが支給対象です。</p><p><span class="marker-green">生活保護世帯だけでなく、それに準ずる世帯も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる世帯"><p>生活保護を受給している世帯（要保護）</p><p>生活保護に準ずる程度に経済的に困窮している世帯（準要保護）</p><p>世帯の所得が認定基準以下であること</p></div><p>毎年4月に在学する学校を通じて申請書が配布されます。年度途中の転入や家計急変の場合はいつでも申請可能です。</p><p>越谷市教育委員会学務課が所得審査を行い、<span class="marker">認定結果は申請から約1〜2か月後に通知</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給される主な費目と年額の目安です。<strong>学用品費は小学生約1万円、中学生約2万円</strong>、<span class="marker">給食費は実費が全額支給</span>されます。</p><p>修学旅行費、校外活動費、新入学用品費（入学時）なども支給対象です。支給額は国の基準に基づき毎年度見直されます。</p><div class="note-box">就学援助の認定は毎年度行われます。年度ごとに申請が必要ですので、前年度に認定されていても忘れずに申請してください。家計が急変した場合は、年度途中でも相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/',
    publishedAt: '2026-03-12',
  },
];
