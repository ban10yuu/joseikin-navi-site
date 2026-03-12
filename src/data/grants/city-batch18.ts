import { Grant } from '@/lib/types';

export const cityGrantsBatch18: Grant[] = [
  // ────────────────────────────────────────────────
  // 釧路市（北海道）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'kushiro-child-medical',
    title: '釧路市 こども医療費助成制度',
    organization: '釧路市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['釧路市', '子ども医療費', '助成金'],
    eligibility: '釧路市に住所を有する0歳から18歳（高校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '釧路市が実施するこども医療費助成制度です。高校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 こども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業の年度末）まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>道東の拠点都市である釧路市は、漁業・酪農・製紙業が盛んな地域で、子育て支援の充実に力を入れています。通院・入院・調剤すべてが助成の対象となっており、子育て世帯の医療費負担を大幅に軽減しています。</p><p><span class="marker-green">所得制限は設けられておらず、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>釧路市に住民登録があり、健康保険に加入している18歳以下の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（道外受診時の償還払い用）</p></div><p>釧路市役所こども保健部の窓口で申請できます。出生届や転入届の手続きと同時に申請するとスムーズです。申請後、<strong>「こども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。道内の医療機関であれば受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">道外の医療機関を受診した場合は一旦窓口で支払い後、償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-housing-reform',
    title: '釧路市 住宅リフォーム助成事業',
    organization: '釧路市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '北海道',
    tags: ['釧路市', '住宅リフォーム', '補助金'],
    eligibility: '釧路市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '釧路市が実施する住宅リフォーム助成事業です。市内業者を利用した住宅改修工事に最大30万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 住宅リフォーム助成事業は、<span class="marker">市内の施工業者を利用した住宅の改修工事</span>に対して費用の一部を補助する制度です。</p><p>北海道東部に位置する釧路市では冬季の厳しい寒さに対応するため、断熱改修や暖房設備の更新ニーズが高いことが特徴です。外壁・屋根の補修、断熱工事、水回りの改修、バリアフリー化など幅広い工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は30万円</strong>です。<span class="marker-green">市内に本店を置く施工業者への発注が条件</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>釧路市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税の滞納がないこと</p><p>市内業者による30万円以上の工事であること</p></div><p>釧路市役所都市整備部住宅課に申請書類を提出します。見積書や工事内容がわかる図面・写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始しないと補助対象外になります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限30万円</strong>です。工事費が30万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となるため早めの申請がおすすめです。</p><div class="highlight-box">釧路市は寒冷地のため、断熱改修工事（窓の二重サッシ化、壁の断熱材追加など）の需要が特に高いです。省エネ改修に関する他の補助金との併用が可能な場合もあるので、窓口で確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kushiro-senior-medical',
    title: '釧路市 重度心身障がい者医療費助成',
    organization: '釧路市',
    type: 'local',
    maxAmount: '自己負担分全額助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['釧路市', '障がい者医療', '助成金'],
    eligibility: '釧路市に住所を有する重度心身障がい者（身体障害者手帳1〜3級等）',
    applicationPeriod: '通年',
    description: '釧路市が実施する重度心身障がい者医療費助成制度です。対象者の保険診療自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>釧路市 重度心身障がい者医療費助成は、<span class="marker">身体障害者手帳1〜3級、療育手帳A判定、精神障害者保健福祉手帳1級</span>のいずれかに該当する方を対象に、保険診療の自己負担分を助成する制度です。</p><p>入院・通院・調剤いずれも対象となっており、障がいのある方の医療費負担を軽減することで安心して治療に専念できる環境を提供しています。</p><p><span class="marker-green">初診時一部負担金を除き、医療費の自己負担が実質無料</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>釧路市に住民登録があり、各種障害手帳をお持ちの方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれか</p><p>健康保険証</p><p>本人確認書類</p><p>振込先口座情報</p></div><p>釧路市役所障がい福祉課の窓口で申請できます。手帳の新規取得時や等級変更時に合わせて手続きすると効率的です。申請後、<strong>「重度心身障がい者医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>保険診療の自己負担分がほぼ全額助成</strong>されます。道内の医療機関では受給者証を提示することで窓口負担が軽減されます。</p><p><span class="marker">65歳以上で新たに障害認定を受けた方は、一部対象外</span>となる場合があります。該当する方は窓口でご確認ください。</p><div class="note-box">保険適用外の費用（差額ベッド代・文書料等）は助成対象外です。所得制限が設けられている場合がありますので、詳しくは市役所にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kushiro.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 帯広市（北海道）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'obihiro-child-medical',
    title: '帯広市 こども医療費助成制度',
    organization: '帯広市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['帯広市', '子ども医療費', '助成金'],
    eligibility: '帯広市に住所を有する0歳から18歳（高校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '帯広市が実施するこども医療費助成制度です。高校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 こども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業の年度末）まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>十勝平野の中心都市である帯広市は、農業や食品加工業が基幹産業で、広大な自然環境のなかで子育てしやすいまちづくりを推進しています。通院・入院・調剤すべてが助成対象で、子育て世帯の経済的負担を大きく軽減しています。</p><p><span class="marker-green">所得制限なしで、対象のすべての世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>帯広市に住民登録があり、健康保険に加入している18歳以下の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（道外受診時の償還払い用）</p></div><p>帯広市役所こども福祉課の窓口で申請できます。出生届・転入届の提出と同時に手続きすると効率的です。申請後、<strong>「こども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。道内の医療機関であれば受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">道外の医療機関を受診した場合は一旦窓口で支払い後、償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-startup-support',
    title: '帯広市 創業支援補助金',
    organization: '帯広市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '北海道',
    tags: ['帯広市', '創業支援', '補助金'],
    eligibility: '帯広市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '帯広市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方を対象に、創業に必要な初期費用の一部を補助</span>する制度です。</p><p>フードバレーとかちを掲げる帯広市は、農業・食品関連の起業環境が充実しています。店舗・事務所の改装費、設備費、広告宣伝費など幅広い経費が補助対象です。</p><p>補助率は対象経費の2分の1で、<strong>上限は100万円</strong>です。<span class="marker-green">認定創業支援等事業による支援を受けた方は補助率が優遇</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>帯広市内で創業する、または創業後1年以内であること</p><p>市が指定する創業支援セミナーを受講すること</p><p>市税の滞納がないこと</p><p>暴力団関係者でないこと</p></div><p>帯広市役所商業労働課に事業計画書と申請書類を提出します。申請前に相談窓口で事業計画の確認を受けることをおすすめします。</p><p><span class="marker">交付決定前に支出した経費は補助対象外</span>となるため、申請のタイミングにご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1で、<strong>上限100万円</strong>です。店舗改装費・設備購入費・広告宣伝費・許認可取得費用などが対象になります。</p><p><span class="marker">フランチャイズでの開業は対象外</span>となる場合があります。個人事業主・法人のいずれでも申請可能です。</p><div class="highlight-box">帯広市は「とかち・イノベーション・プログラム」など創業支援の取り組みが充実しています。創業セミナーや先輩起業家との交流イベントも活用すると、事業成功の確率を高められます。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'obihiro-migration-support',
    title: '帯広市 移住支援金',
    organization: '帯広市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '北海道',
    tags: ['帯広市', '移住支援', '支援金'],
    eligibility: '東京圏から帯広市に移住し、対象の就業・起業等を行う方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '帯広市が実施する移住支援金です。東京圏から帯広市に移住した方に最大100万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>帯広市 移住支援金は、<span class="marker">東京23区に在住または東京圏から23区に通勤していた方が帯広市に移住した場合</span>に支給される支援金です。</p><p>十勝地方の中心都市として食と農の豊かさが魅力の帯広市は、テレワーク移住の受け皿としても注目されています。移住支援金を活用することで、新生活のスタートにかかる経済的負担を軽減できます。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子どもを帯同する場合は1人あたり最大100万円が加算</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から通勤していたこと</p><p>帯広市に転入後3か月以上1年以内に申請すること</p><p>北海道のマッチングサイト掲載求人への就業、テレワーク、起業のいずれかに該当すること</p><p>5年以上継続して帯広市に居住する意思があること</p></div><p>帯広市役所政策推進課に申請します。移住前の居住歴を証明する書類（住民票除票等）と、就業証明書やテレワーク証明書が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>世帯での移住は最大100万円、単身での移住は最大60万円</strong>が支給されます。18歳未満の子どもを帯同する場合はさらに加算があります。</p><p><span class="marker">5年以内に帯広市から転出した場合は支援金の返還</span>が求められます。長期的な定住を前提とした制度です。</p><div class="note-box">テレワーク移住の場合は、所属先企業がテレワークを認めている証明書類が必要です。起業の場合は北海道の起業支援金の交付決定を受けていることが条件となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 苫小牧市（北海道）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'tomakomai-child-medical',
    title: '苫小牧市 こども医療費助成制度',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['苫小牧市', '子ども医療費', '助成金'],
    eligibility: '苫小牧市に住所を有する0歳から18歳（高校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '苫小牧市が実施するこども医療費助成制度です。高校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 こども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業の年度末）まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>北海道有数の工業都市であり港湾都市でもある苫小牧市は、製紙業や自動車産業を中心に発展してきました。子育て世帯の医療費負担軽減に積極的に取り組んでおり、通院・入院・調剤すべてが助成対象です。</p><p><span class="marker-green">所得制限は設けられておらず、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>苫小牧市に住民登録があり、健康保険に加入している18歳以下の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（道外受診時の償還払い用）</p></div><p>苫小牧市役所こども支援課の窓口で申請できます。出生届や転入届の手続きと同時に申請すると効率的です。申請後、<strong>「こども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。道内の医療機関であれば受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">道外の医療機関を受診した場合は一旦窓口で支払い後、償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-housing-reform',
    title: '苫小牧市 住宅リフォーム補助事業',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '北海道',
    tags: ['苫小牧市', '住宅リフォーム', '補助金'],
    eligibility: '苫小牧市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年5月〜11月頃（予算に達し次第終了）',
    description: '苫小牧市が実施する住宅リフォーム補助事業です。市内業者を利用した住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 住宅リフォーム補助事業は、<span class="marker">市内の施工業者を利用した住宅の改修工事</span>に対して費用の一部を補助する制度です。</p><p>太平洋に面し冬も比較的温暖ながら積雪もある苫小牧市では、屋根・外壁の補修や断熱改修のニーズが高いです。バリアフリー化、水回りの改修、耐震補強など幅広い工事が対象となっています。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に本店を置く施工業者への発注が条件</span>となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>苫小牧市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税の滞納がないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>苫小牧市役所都市建設部建築指導課に申請書類を提出します。見積書や工事内容がわかる図面・写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となるため早めの申請がおすすめです。</p><div class="highlight-box">苫小牧市は「ゼロカーボンシティ」を宣言しており、省エネ関連の改修（窓の断熱化・高効率給湯器への交換等）を検討する場合は、国や道の省エネ補助金との併用も確認してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tomakomai-startup-support',
    title: '苫小牧市 創業支援補助金',
    organization: '苫小牧市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '北海道',
    tags: ['苫小牧市', '創業支援', '補助金'],
    eligibility: '苫小牧市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '苫小牧市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>苫小牧市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方を対象に、創業に必要な初期費用の一部を補助</span>する制度です。</p><p>北海道最大の工業港を擁する苫小牧市は、物流・製造業の拠点として発展を続けています。近年はIR（統合型リゾート）誘致の動きもあり、新規創業の支援にも力を入れています。店舗・事務所の改装費、設備費、広告宣伝費などが補助対象です。</p><p>補助率は対象経費の2分の1で、<strong>上限は50万円</strong>です。<span class="marker-green">認定創業支援事業による支援を受けた方は補助率が優遇</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>苫小牧市内で創業する、または創業後1年以内であること</p><p>市が指定する創業支援セミナーを受講すること</p><p>市税の滞納がないこと</p><p>暴力団関係者でないこと</p></div><p>苫小牧市役所産業経済部商業振興課に事業計画書と申請書類を提出します。事前に商工会議所の創業相談を受けることをおすすめします。</p><p><span class="marker">交付決定前に支出した経費は補助対象外</span>です。申請タイミングには十分ご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1で、<strong>上限50万円</strong>です。店舗改装費・設備購入費・広告宣伝費・許認可取得費用などが対象になります。</p><p><span class="marker">フランチャイズでの開業は対象外</span>となる場合があります。個人事業主・法人のいずれでも申請可能です。</p><div class="highlight-box">苫小牧市は札幌市や新千歳空港へのアクセスが良く、広域ビジネスの拠点としても適しています。商工会議所では創業計画の策定支援やビジネスマッチングの相談にも対応しています。</div>'
      }
    ],
    officialUrl: 'https://www.city.tomakomai.hokkaido.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 八戸市（青森県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'hachinohe-child-medical',
    title: '八戸市 子ども医療費給付事業',
    organization: '八戸市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '青森県',
    tags: ['八戸市', '子ども医療費', '給付金'],
    eligibility: '八戸市に住所を有する0歳から18歳（高校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '八戸市が実施する子ども医療費給付事業です。高校卒業までの子どもの医療費自己負担分が給付されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 子ども医療費給付事業は、<span class="marker">0歳から18歳（高校卒業の年度末）まで</span>の子どもを対象に、保険診療にかかる自己負担分を給付する制度です。</p><p>青森県南東部に位置する八戸市は、漁業と工業が盛んな港町です。八戸三社大祭やえんぶりなど伝統文化が息づく一方で、子育て支援の充実にも力を入れています。通院・入院・調剤いずれも給付対象です。</p><p><span class="marker-green">所得制限なしで、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八戸市に住民登録があり、健康保険に加入している18歳以下の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>八戸市役所こども家庭課の窓口で申請できます。出生届や転入届と同時に手続きすると効率的です。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額給付</strong>されます。県内の医療機関であれば受給資格証の提示で窓口負担が軽減されます。</p><p><span class="marker">県外の医療機関を受診した場合は一旦窓口で支払い後、償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は給付対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-infertility-treatment',
    title: '八戸市 不妊治療費助成事業',
    organization: '八戸市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '青森県',
    tags: ['八戸市', '不妊治療', '助成金'],
    eligibility: '八戸市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から6か月以内に申請）',
    description: '八戸市が実施する不妊治療費助成事業です。不妊治療にかかる自己負担分を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 不妊治療費助成事業は、<span class="marker">不妊治療（一般不妊治療・先進医療）にかかる費用の一部を助成</span>する制度です。</p><p>2022年4月から不妊治療が保険適用となりましたが、保険適用外の先進医療や自己負担分については依然として経済的負担が大きい場合があります。八戸市では独自の上乗せ助成を実施し、治療を受ける方の負担を軽減しています。</p><p><strong>1年度あたり最大10万円</strong>が助成されます。<span class="marker-green">保険適用治療の自己負担分と先進医療の両方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦の双方またはいずれかが八戸市内に住所を有すること</p><p>法律上の婚姻関係にある夫婦、または事実婚関係にある方</p><p>医療保険に加入していること</p><p>市税の滞納がないこと</p></div><p>八戸市役所健康づくり推進課に申請書と医療機関が発行する証明書を提出します。治療終了日から6か月以内に申請が必要です。</p><p><span class="marker">年度をまたぐ治療の場合は、年度ごとに申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1年度あたり<strong>最大10万円</strong>が助成されます。保険診療の自己負担分のほか、保険適用治療と併用した先進医療の費用も対象です。</p><p><span class="marker">県や国の助成制度との併用が可能</span>な場合があるため、申請前に窓口で確認してください。</p><div class="highlight-box">八戸市では不妊に関する専門相談窓口も設置しています。治療に関する不安や悩みがある場合は、助成金の申請と合わせて相談してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachinohe-housing-earthquake',
    title: '八戸市 木造住宅耐震改修補助事業',
    organization: '八戸市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '青森県',
    tags: ['八戸市', '耐震改修', '補助金'],
    eligibility: '八戸市内に昭和56年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '八戸市が実施する木造住宅耐震改修補助事業です。旧耐震基準の木造住宅の耐震改修に最大100万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八戸市 木造住宅耐震改修補助事業は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の木造住宅</span>の耐震改修工事に対して費用の一部を補助する制度です。</p><p>八戸市は過去に三陸沖地震や2011年の東日本大震災で大きな被害を受けた地域です。旧耐震基準で建てられた住宅の耐震性向上は喫緊の課題であり、市では積極的に補助を行っています。</p><p><strong>耐震改修工事費の最大100万円</strong>が補助されます。<span class="marker-green">耐震診断の費用も別途補助制度あり</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>八戸市内に所在する木造住宅であること</p><p>昭和56年5月31日以前に建築されたこと</p><p>耐震診断の結果、倒壊する可能性があると判定されたこと</p><p>市税の滞納がないこと</p></div><p>八戸市役所建築住宅課に申請書類を提出します。事前に耐震診断を受け、その結果を添付する必要があります。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着手した工事は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事に対して<strong>最大100万円</strong>が補助されます。改修後に耐震基準を満たす設計であることが条件です。</p><p><span class="marker">耐震診断についても別途、無料または低額で受けられる制度</span>があります。まずは耐震診断から始めることをおすすめします。</p><div class="note-box">解体を伴う建て替えは対象外です。耐震シェルターや防災ベッドの設置に対する補助制度が別途ある場合もありますので、窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 一関市（岩手県）3件: childcare, living, housing
  // ────────────────────────────────────────────────
  {
    slug: 'ichinoseki-child-medical',
    title: '一関市 子ども医療費助成制度',
    organization: '一関市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '岩手県',
    tags: ['一関市', '子ども医療費', '助成金'],
    eligibility: '一関市に住所を有する0歳から18歳（高校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '一関市が実施する子ども医療費助成制度です。高校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業の年度末）まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>岩手県南部に位置する一関市は、世界遺産・平泉に隣接する歴史豊かな都市です。面積が岩手県内最大で広大な地域をカバーしており、子育て世帯が安心して暮らせる環境づくりを進めています。通院・入院・調剤いずれも助成対象です。</p><p><span class="marker-green">所得制限は設けられておらず、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一関市に住民登録があり、健康保険に加入している18歳以下の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>一関市役所子育て支援課の窓口で申請できます。出生届や転入届の手続きと同時に申請するとスムーズです。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関であれば受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は一旦窓口で支払い後、償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-migration-support',
    title: '一関市 移住定住促進奨励金',
    organization: '一関市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '岩手県',
    tags: ['一関市', '移住定住', '奨励金'],
    eligibility: '東京圏から一関市に移住し、対象の就業・起業等を行う方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '一関市が実施する移住定住促進奨励金です。東京圏から一関市に移住した方に最大100万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 移住定住促進奨励金は、<span class="marker">東京23区に在住または東京圏から23区に通勤していた方が一関市に移住した場合</span>に支給される奨励金です。</p><p>世界遺産・平泉に隣接し、豊かな自然と歴史文化に恵まれた一関市は、移住先として注目を集めています。東北新幹線の一ノ関駅があり東京からのアクセスも良好で、テレワーク移住の受け皿としても期待されています。</p><p>支給額は<strong>世帯で最大100万円、単身で最大60万円</strong>です。<span class="marker-green">18歳未満の子どもを帯同する場合は1人あたり最大100万円が加算</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間のうち通算5年以上、東京23区に在住または東京圏から通勤していたこと</p><p>一関市に転入後3か月以上1年以内に申請すること</p><p>岩手県のマッチングサイト掲載求人への就業、テレワーク、起業のいずれかに該当すること</p><p>5年以上継続して一関市に居住する意思があること</p></div><p>一関市役所まちづくり推進課に申請します。移住前の居住歴を証明する書類（住民票除票等）と就業証明書が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>世帯での移住は最大100万円、単身での移住は最大60万円</strong>が支給されます。18歳未満の子どもを帯同する場合はさらに加算があります。</p><p><span class="marker">5年以内に一関市から転出した場合は奨励金の返還</span>が求められます。長期的な定住が前提の制度です。</p><div class="highlight-box">一関市は空き家バンク制度も充実しており、住居探しの支援を受けられます。移住前の「お試し住宅」制度もあるため、まずは短期滞在で地域の雰囲気を体感してみるのもおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinoseki-housing-reform',
    title: '一関市 住宅リフォーム助成事業',
    organization: '一関市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '岩手県',
    tags: ['一関市', '住宅リフォーム', '補助金'],
    eligibility: '一関市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '一関市が実施する住宅リフォーム助成事業です。市内業者を利用した住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一関市 住宅リフォーム助成事業は、<span class="marker">市内の施工業者を利用した住宅の改修工事</span>に対して費用の一部を補助する制度です。</p><p>岩手県南部の内陸に位置する一関市は、冬季の寒さが厳しく断熱改修や暖房設備の更新ニーズが高い地域です。屋根・外壁の補修、水回りの改修、バリアフリー化、省エネ改修など幅広い工事が対象になっています。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に事業所を持つ施工業者への発注が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>一関市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税の滞納がないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>一関市役所建設部建築住宅課に申請書類を提出します。見積書、工事内容がわかる図面や写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始しないと補助対象外となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第、受付終了</span>となるため早めの申請がおすすめです。</p><div class="note-box">一関市は面積が広く、各支所でも申請相談に対応しています。お住まいの地域に近い支所を利用すると便利です。他の住宅関連補助金との併用についても窓口でご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinoseki.iwate.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 石巻市（宮城県）3件: childcare, employment, disaster
  // ────────────────────────────────────────────────
  {
    slug: 'ishinomaki-child-medical',
    title: '石巻市 子ども医療費助成制度',
    organization: '石巻市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '宮城県',
    tags: ['石巻市', '子ども医療費', '助成金'],
    eligibility: '石巻市に住所を有する0歳から18歳（高校卒業）までの子どもの保護者',
    applicationPeriod: '通年',
    description: '石巻市が実施する子ども医療費助成制度です。高校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 子ども医療費助成制度は、<span class="marker">0歳から18歳（高校卒業の年度末）まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>宮城県北東部に位置する石巻市は、東日本大震災からの復興を経て、まちづくりと子育て支援を両立させる取り組みを進めています。三陸の豊かな海産物が有名で、漁業・水産加工業を中心とした産業が盛んな地域です。通院・入院・調剤いずれも助成対象です。</p><p><span class="marker-green">所得制限は設けられておらず、市内在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>石巻市に住民登録があり、健康保険に加入している18歳以下の子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>石巻市役所子ども保育課の窓口で申請できます。出生届や転入届の手続きと同時に申請するとスムーズです。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関であれば受給者証を提示するだけで窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は一旦窓口で支払い後、償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-startup-support',
    title: '石巻市 創業支援補助金',
    organization: '石巻市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '宮城県',
    tags: ['石巻市', '創業支援', '補助金'],
    eligibility: '石巻市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '石巻市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方を対象に、創業に必要な初期費用の一部を補助</span>する制度です。</p><p>東日本大震災からの復興を遂げた石巻市では、新たな産業の創出と地域経済の活性化が重要課題となっています。水産加工業はもちろん、IT・クリエイティブ産業やコミュニティビジネスなど、多様な分野での創業を支援しています。</p><p>補助率は対象経費の2分の1で、<strong>上限は50万円</strong>です。<span class="marker-green">認定創業支援事業による支援を受けた方は補助率が優遇</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>石巻市内で創業する、または創業後1年以内であること</p><p>市が指定する創業支援セミナーを受講すること</p><p>市税の滞納がないこと</p><p>暴力団関係者でないこと</p></div><p>石巻市役所産業部商工課に事業計画書と申請書類を提出します。事前に石巻商工会議所の創業相談窓口を利用することをおすすめします。</p><p><span class="marker">交付決定前に支出した経費は補助対象外</span>です。申請のタイミングには十分ご注意ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1で、<strong>上限50万円</strong>です。店舗改装費・設備購入費・広告宣伝費・許認可取得費用などが対象になります。</p><p><span class="marker">フランチャイズでの開業は対象外</span>となる場合があります。個人事業主・法人のいずれでも申請可能です。</p><div class="highlight-box">石巻市には「IRORI石巻」などの創業支援拠点があり、コワーキングスペースやインキュベーション施設を利用できます。先輩起業家とのネットワークも活用してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ishinomaki-disaster-prevention',
    title: '石巻市 防災設備設置補助金',
    organization: '石巻市',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'disaster',
    prefecture: '宮城県',
    tags: ['石巻市', '防災設備', '補助金'],
    eligibility: '石巻市内に住所を有し、住宅に防災設備を設置する方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '石巻市が実施する防災設備設置補助金です。感震ブレーカーなどの防災機器設置に最大5万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石巻市 防災設備設置補助金は、<span class="marker">地震発生時の通電火災を防止する感震ブレーカーや家具転倒防止器具</span>などの設置費用を補助する制度です。</p><p>東日本大震災で甚大な被害を受けた石巻市では、地震や津波に対する防災意識が特に高い地域です。大規模地震時に懸念される通電火災を防ぐ感震ブレーカーの普及や、家具転倒による被害を防ぐための器具設置を促進しています。</p><p>補助率は対象経費の2分の1で、<strong>上限は5万円</strong>です。<span class="marker-green">感震ブレーカー、家具転倒防止器具、ガラス飛散防止フィルムなどが対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>石巻市内に住所を有すること</p><p>設置する住宅が市内に所在すること</p><p>市税の滞納がないこと</p><p>過去にこの補助を受けていないこと</p></div><p>石巻市役所防災課に申請書類を提出します。設置予定の製品の見積書やカタログの写しが必要です。</p><p><span class="marker">設置工事の前に申請が必要</span>です。交付決定後に購入・設置を行ってください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1で、<strong>上限5万円</strong>です。感震ブレーカー（分電盤タイプ・コンセントタイプ）や家具転倒防止器具の購入費と取付工事費が対象です。</p><p><span class="marker">簡易タイプの感震ブレーカーは数千円から設置でき、自己負担が少なく済む</span>場合もあります。</p><div class="highlight-box">石巻市は東日本大震災の教訓を活かした防災まちづくりを推進しています。防災設備の設置とあわせて、市が実施する防災訓練や避難経路の確認もぜひ行ってください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ishinomaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
