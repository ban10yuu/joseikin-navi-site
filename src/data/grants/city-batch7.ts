import { Grant } from '@/lib/types';

export const cityGrantsBatch7: Grant[] = [
  // ────────────────────────────────────────────────
  // 青森市（青森県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'aomori-city-child-medical',
    title: '青森市 子ども医療費助成制度',
    organization: '青森市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '青森県',
    tags: ['青森市', '子ども医療費', '助成金'],
    eligibility: '青森市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '青森市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生（15歳到達後の最初の3月31日）まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>青森市は本州最北端の県庁所在地であり、冬場の通院が負担になりやすい地域でもあります。通院・入院・調剤のすべてが助成対象となっており、子育て家庭の医療費負担を大幅に軽減しています。</p><p><span class="marker-green">所得制限なしで、青森市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>青森市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>青森市役所子育て支援課または各支所で申請を受け付けています。出生届・転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関であれば受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払った後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。他の公費医療制度が利用できる場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-housing-reform',
    title: '青森市 住宅リフォーム助成事業',
    organization: '青森市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '青森県',
    tags: ['青森市', '住宅リフォーム', '補助金'],
    eligibility: '青森市内に居住し、市内業者を利用してリフォームを行う住宅所有者',
    applicationPeriod: '毎年4月〜予算上限に達するまで',
    description: '青森市が実施する住宅リフォーム助成事業です。市内業者による住宅改修工事費用の一部を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 住宅リフォーム助成事業は、<span class="marker">市内の施工業者を利用した住宅リフォーム工事</span>に対して費用の一部を補助する制度です。</p><p>豪雪地帯である青森市では、屋根の補修や断熱改修のニーズが特に高く、住環境の向上と地域経済の活性化を同時に図ることを目的としています。バリアフリー改修や省エネ改修なども対象となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>屋根・外壁の補修、塗装工事</p><p>断熱改修・省エネリフォーム</p><p>バリアフリー改修（手すり設置、段差解消など）</p><p>水回りの改修（浴室・トイレ・キッチン）</p></div><p>青森市に住所があり、市税を滞納していない方が対象です。<span class="marker-green">工事着手前に申請する</span>必要がありますので、業者との契約前に必ず市役所で手続きを済ませてください。</p><p>申請は青森市役所建築指導課で受け付けています。申請書のほか、工事見積書と工事箇所の写真が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の10%（上限20万円）</strong>です。工事費が20万円以上の場合に申請可能となります。</p><p><span class="marker">市内に本店を置く施工業者に発注することが条件</span>です。市外の業者に依頼した場合は対象になりません。</p><div class="highlight-box">毎年予算枠があり、先着順で受付終了となります。年度初めの4月に募集が開始されるため、リフォームを検討している方は早めの申請をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'aomori-city-sogyo-shien',
    title: '青森市 創業支援補助金',
    organization: '青森市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '青森県',
    tags: ['青森市', '創業支援', '補助金'],
    eligibility: '青森市内で新たに事業を開始する個人または法人',
    applicationPeriod: '毎年4月〜12月（予算上限に達するまで）',
    description: '青森市が実施する創業支援補助金です。市内で新規に創業する方の初期費用を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市 創業支援補助金は、<span class="marker">市内で新たに事業を立ち上げる起業家</span>を支援するための制度です。</p><p>店舗改装費や設備導入費など、創業に必要な初期投資の一部を補助することで、地域の産業振興と雇用創出を目指しています。飲食業、小売業、IT関連など幅広い業種が対象です。</p><p>青森市の<span class="marker-green">特定創業支援等事業の証明書を受けた方</span>は、補助率が優遇される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象経費"><p>店舗・事務所の改装費</p><p>設備・備品の購入費</p><p>広告宣伝費（開業時のチラシ・看板など）</p><p>許認可取得に係る経費</p></div><p>青森市内で新たに事業を開始する方で、事業開始から1年以内の方が対象です。市が実施する創業セミナーの受講が要件となる場合があります。</p><p>申請は青森市役所経済政策課または市の創業支援窓口で受け付けています。事業計画書の提出が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象経費の2分の1以内（上限100万円）</strong>です。対象経費が50万円以上の場合に申請可能です。</p><p><span class="marker">補助金は後払い（精算払い）方式</span>のため、一旦は自己資金で支出する必要があります。事業完了後に実績報告書を提出し、審査を経て交付されます。</p><div class="note-box">同一人物が過去にこの補助金を受給している場合は対象外です。また、フランチャイズ加盟店としての開業は対象外となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 盛岡市（岩手県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'morioka-child-medical',
    title: '盛岡市 子ども医療費助成制度',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '岩手県',
    tags: ['盛岡市', '子ども医療費', '助成金'],
    eligibility: '盛岡市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '盛岡市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>盛岡市は岩手山を望む城下町として歴史ある県庁所在地です。子育て環境の充実に力を入れており、通院・入院・調剤のすべてが助成対象に含まれています。</p><p><span class="marker-green">所得制限なしで、盛岡市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>盛岡市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>盛岡市役所子ども未来課または各支所で申請できます。出生届や転入届と同時に手続きするとスムーズです。申請後、<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は、一旦窓口で支払った後に市役所で償還払い</span>の手続きが必要です。領収書を忘れずに保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、健診費用など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-funin-chiryo',
    title: '盛岡市 不妊治療費助成事業',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '岩手県',
    tags: ['盛岡市', '不妊治療', '医療費助成'],
    eligibility: '盛岡市に住所を有し、不妊治療を受けている夫婦',
    applicationPeriod: '通年（治療終了後6ヶ月以内に申請）',
    description: '盛岡市が実施する不妊治療費助成事業です。保険適用後の自己負担分について市独自の上乗せ助成を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>に対して、市独自の上乗せ助成を行う制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、それでも治療費の自己負担は重い場合があります。盛岡市では国や県の助成に加えて市独自の支援を行い、子どもを望む夫婦を経済面からサポートしています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる要件"><p>夫婦の双方または一方が盛岡市に住所を有すること</p><p>医療保険に加入していること</p><p>市税を滞納していないこと</p><p>指定医療機関で治療を受けていること</p></div><p>治療が終了した日の属する年度の末日までに、盛岡市役所健康推進課へ申請します。<span class="marker-green">医療機関が発行する治療証明書と領収書</span>が必要です。</p><p>事実婚のカップルも対象となる場合がありますので、詳細は窓口にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>保険適用後の自己負担額に対して1回の治療につき上限30万円</strong>です。体外受精や顕微授精など高額な治療が主な対象となります。</p><p><span class="marker">県の助成制度と併用可能</span>ですので、まずは岩手県の不妊治療費助成を確認したうえで、市の上乗せ分を申請しましょう。</p><div class="highlight-box">助成回数には上限があります。治療開始時の年齢によって回数が異なりますので、事前に市役所の窓口で確認しておくと安心です。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'morioka-taishin-kaishu',
    title: '盛岡市 木造住宅耐震改修助成事業',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '岩手県',
    tags: ['盛岡市', '耐震改修', '住宅補助'],
    eligibility: '盛岡市内に昭和56年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月（予算上限に達するまで）',
    description: '盛岡市が実施する木造住宅耐震改修助成事業です。旧耐震基準の木造住宅の耐震改修工事費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市 木造住宅耐震改修助成事業は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の木造住宅</span>の耐震改修工事に対して費用の一部を補助する制度です。</p><p>東日本大震災を経験した岩手県では、住宅の耐震化は喫緊の課題です。盛岡市では耐震診断から改修工事まで一貫した支援体制を整え、市民の安全な住環境づくりを推進しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅の要件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>耐震診断で「倒壊する可能性がある」と判定された住宅</p><p>盛岡市内に所在する戸建て住宅であること</p></div><p>住宅の所有者で、盛岡市に住所があり、市税を滞納していない方が対象です。<span class="marker-green">工事着手前に申請が必要</span>ですので、施工業者との打ち合わせの段階で市役所に相談しましょう。</p><p>申請は盛岡市役所建築指導課で受け付けています。耐震診断の結果報告書と改修工事の見積書が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>耐震改修工事費の5分の4以内（上限100万円）</strong>です。耐震診断についても別途補助制度があり、診断費用の一部が助成されます。</p><p><span class="marker">改修後に耐震基準を満たす計画であることが条件</span>です。部分的な補強ではなく、建物全体の耐震性能を確保する工事が求められます。</p><div class="note-box">耐震改修を行うと、固定資産税の減額措置が受けられる場合があります。税務課にも合わせて確認するとよいでしょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 秋田市（秋田県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'akita-city-child-medical',
    title: '秋田市 子ども医療費助成制度',
    organization: '秋田市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '秋田県',
    tags: ['秋田市', '子ども医療費', '助成金'],
    eligibility: '秋田市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '秋田市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>秋田市は竿燈まつりで知られる東北の都市で、少子化対策に積極的に取り組んでいます。通院・入院・調剤のすべてが助成の対象で、子育て世帯の医療費負担を軽減しています。</p><p><span class="marker-green">所得制限なしで、秋田市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>秋田市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>秋田市役所子ども未来センターまたは各市民サービスセンターで申請できます。出生届や転入届と同時に手続きするとスムーズです。申請後、<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払った後に償還払い</span>の手続きが必要です。必ず領収書を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。入院時の食事療養費の標準負担額も自己負担となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-uij-turn',
    title: '秋田市 UIJターン就職支援金',
    organization: '秋田市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '秋田県',
    tags: ['秋田市', 'UIJターン', '就職支援金'],
    eligibility: '東京圏から秋田市に移住し、対象企業に就職した方',
    applicationPeriod: '通年（転入後3ヶ月以内に申請）',
    description: '秋田市が実施するUIJターン就職支援金です。東京圏から秋田市へ移住し就職した方に支援金を交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 UIJターン就職支援金は、<span class="marker">東京23区に在住または東京圏から東京23区へ通勤していた方</span>が秋田市に移住し、対象企業に就職した場合に支援金を交付する制度です。</p><p>秋田市は人口減少対策として移住・定住促進に力を入れています。この制度は国の移住支援事業を活用したもので、地方での新生活を経済面からサポートします。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上、東京23区に在住または東京圏から通勤していたこと</p><p>秋田市に転入後、秋田県のマッチングサイト掲載企業等に就職すること</p><p>秋田市に5年以上継続して居住する意思があること</p><p>市税を滞納していないこと</p></div><p>秋田市への転入後3ヶ月以内に、秋田市役所人口減少・移住定住対策課に申請します。<span class="marker-green">就職先の在職証明書や移住前の住民票の除票</span>などの書類が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支援金額は<strong>単身の場合60万円、世帯の場合100万円</strong>です。18歳未満の子どもを帯同する場合、子ども1人あたり加算が受けられます。</p><p><span class="marker">移住後5年以内に秋田市から転出した場合は、支援金の返還</span>が求められます。しっかりとした移住計画を立てたうえで申請しましょう。</p><div class="highlight-box">テレワーク移住（東京圏の企業に勤めたまま秋田市に移住）も条件を満たせば対象になります。リモートワークが可能な方も検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'akita-city-iju-teiju',
    title: '秋田市 移住・定住促進助成金',
    organization: '秋田市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'living',
    prefecture: '秋田県',
    tags: ['秋田市', '移住支援', '定住促進'],
    eligibility: '秋田市外から秋田市へ移住し、住宅を取得または賃借する方',
    applicationPeriod: '通年',
    description: '秋田市が実施する移住・定住促進助成金です。市外からの移住者に対し、住宅取得や家賃の一部を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市 移住・定住促進助成金は、<span class="marker">市外から秋田市に移住し定住する方</span>を対象に、住宅取得費用や家賃の一部を助成する制度です。</p><p>秋田市は美しい自然環境と豊かな食文化が魅力の都市です。人口減少対策の一環として、移住者の経済的負担を軽減し、新生活のスタートを応援しています。若年層やファミリー世帯には加算措置も用意されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者の要件"><p>秋田市外から転入して1年以内であること</p><p>秋田市に5年以上定住する意思があること</p><p>市税を滞納していないこと</p><p>過去にこの助成金を受けていないこと</p></div><p>秋田市役所の移住相談窓口で申請を受け付けています。住宅取得の場合は売買契約書、賃貸の場合は賃貸借契約書が必要です。</p><p><span class="marker-green">移住前の事前相談も受け付けています</span>ので、秋田市への移住を検討中の段階から相談してみましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>住宅取得の場合は<strong>最大50万円</strong>、賃貸住宅の場合は<strong>月額家賃の一部（上限あり）を最大24ヶ月</strong>助成します。</p><p><span class="marker">39歳以下の方や子育て世帯には加算措置</span>があり、より手厚い支援を受けられます。中古住宅の取得も対象です。</p><div class="note-box">助成開始から5年以内に秋田市から転出した場合、助成金の返還を求められることがあります。長期的な生活計画を立てたうえで利用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 山形市（山形県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'yamagata-city-child-medical',
    title: '山形市 子ども医療費助成制度',
    organization: '山形市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '山形県',
    tags: ['山形市', '子ども医療費', '助成金'],
    eligibility: '山形市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '山形市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生（15歳到達後の最初の3月31日）まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>山形市は蔵王連峰を望む自然豊かな県庁所在地で、子育て支援の充実に取り組んでいます。通院・入院・調剤のすべてが助成対象となっており、子育て家庭の安心を支えています。</p><p><span class="marker-green">所得制限なしで、山形市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>山形市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>山形市役所こども未来部または各コミュニティセンターで申請できます。出生届や転入届と同時に手続きするとスムーズです。申請後、<strong>「子育て支援医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関では医療証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払った後に償還払い</span>の手続きが必要です。領収書を必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。他の公費医療制度が利用できる場合は、そちらが優先適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-housing-reform',
    title: '山形市 住宅リフォーム総合支援事業',
    organization: '山形市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '山形県',
    tags: ['山形市', '住宅リフォーム', '補助金'],
    eligibility: '山形市内に居住し、市内業者を利用してリフォームを行う住宅所有者',
    applicationPeriod: '毎年4月〜予算上限に達するまで',
    description: '山形市が実施する住宅リフォーム総合支援事業です。省エネ改修やバリアフリー改修を含む住宅リフォーム費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 住宅リフォーム総合支援事業は、<span class="marker">市内施工業者を利用した住宅リフォーム工事</span>に対して費用の一部を補助する制度です。</p><p>山形市は夏の猛暑と冬の豪雪が特徴的な気候で、断熱改修や雪対策のリフォームニーズが高い地域です。省エネ改修、バリアフリー改修、克雪対策工事など幅広い工事が対象となり、住環境の向上と地域経済の活性化を同時に目指しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>断熱改修・省エネリフォーム（窓の二重化、断熱材追加等）</p><p>バリアフリー改修（手すり設置、段差解消等）</p><p>屋根の雪止め・融雪設備の設置</p><p>水回りの改修（浴室・トイレ・キッチン）</p></div><p>山形市に住所があり、市税を滞納していない方が対象です。<span class="marker-green">工事着手前に申請が必要</span>ですので、施工業者との契約前に市役所で手続きを済ませてください。</p><p>申請は山形市役所建築指導課で受け付けています。工事見積書や住宅の図面が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の10%（上限25万円）</strong>です。省エネ改修やバリアフリー改修を含む場合は補助率が優遇されることがあります。</p><p><span class="marker">市内に事業所を有する施工業者に発注することが条件</span>です。市外の業者による工事は対象外となります。</p><div class="highlight-box">子育て世帯や高齢者世帯には加算措置がある場合があります。該当する方は申請時に確認してみてください。毎年先着順のため、年度初めの申請がおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yamagata-city-education-support',
    title: '山形市 就学援助制度',
    organization: '山形市',
    type: 'local',
    maxAmount: '年間最大約15万円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '山形県',
    tags: ['山形市', '就学援助', '教育支援'],
    eligibility: '山形市立小中学校に在籍する児童・生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '山形市が実施する就学援助制度です。経済的に困難な世帯の児童・生徒に対し、学用品費や給食費などを援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市 就学援助制度は、<span class="marker">経済的理由により就学が困難な児童・生徒の保護者</span>に対し、学校生活に必要な費用の一部を援助する制度です。</p><p>学用品費、校外活動費、修学旅行費、学校給食費など、幅広い費目が援助の対象です。入学前の新入学用品費の前倒し支給にも対応しており、ランドセルや制服の購入時期に間に合うよう配慮されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受けている世帯（要保護者）</p><p>生活保護に準ずる程度に経済的にお困りの世帯（準要保護者）</p><p>前年の世帯所得が山形市の定める基準額以下の世帯</p></div><p>毎年4月に学校を通じて配布される申請書に記入し、学校または山形市教育委員会に提出します。<span class="marker-green">年度途中の転入や家計の急変による申請も受け付けています</span>。</p><p>申請は毎年度必要です。前年度に認定されていても自動継続ではないため、忘れずに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>援助費目ごとに支給額が定められており、小学校と中学校で金額が異なります。<strong>学用品費は小学校で年間約1万円、中学校で年間約2万円</strong>が目安です。</p><p><span class="marker">給食費は実費全額が支給</span>されるため、保護者の実質負担はありません。修学旅行費も実費が支給されます。</p><div class="highlight-box">新入学用品費は入学前の3月に前倒し支給が可能です。入学準備に間に合うよう、早めに申請しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 福島市（福島県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'fukushima-city-child-medical',
    title: '福島市 子ども医療費助成制度',
    organization: '福島市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['福島市', '子ども医療費', '助成金'],
    eligibility: '福島市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '福島市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>福島市は花見山や飯坂温泉で知られる福島県の県庁所在地です。子育て支援策を手厚く展開しており、通院・入院・調剤のすべてが助成対象に含まれています。</p><p><span class="marker-green">所得制限なしで、福島市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福島市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>福島市役所こども政策課または各支所で申請を受け付けています。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関では受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払った後に償還払い</span>の手続きが必要です。領収書を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-jutaku-shutoku',
    title: '福島市 住宅取得支援助成金',
    organization: '福島市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '福島県',
    tags: ['福島市', '住宅取得', '定住支援'],
    eligibility: '福島市内に新たに住宅を取得し定住する方',
    applicationPeriod: '通年（住宅取得後1年以内に申請）',
    description: '福島市が実施する住宅取得支援助成金です。市内に住宅を取得して定住する方の費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 住宅取得支援助成金は、<span class="marker">福島市内に新たに住宅を取得して定住する方</span>を支援する制度です。</p><p>福島市は復興と定住促進に力を入れており、新築住宅の建築だけでなく中古住宅の購入も対象としています。子育て世帯や若年世帯には加算措置もあり、幅広い世代の定住を後押ししています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる要件"><p>福島市内に住宅を新築または購入すること</p><p>福島市に5年以上定住する意思があること</p><p>市税を滞納していないこと</p><p>住宅取得後1年以内に申請すること</p></div><p>市外からの転入者はもちろん、<span class="marker-green">市内在住者の住宅取得も対象</span>となる場合があります。申請は福島市役所定住交流課で受け付けています。</p><p>売買契約書、住民票、登記事項証明書などの書類が必要です。事前に窓口で必要書類を確認しておきましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本助成額は<strong>最大30万円</strong>です。子育て世帯（中学生以下の子がいる世帯）には<strong>10万円の加算</strong>、市外からの転入者にはさらに<strong>10万円の加算</strong>があり、最大50万円となります。</p><p><span class="marker">中古住宅の取得も対象</span>ですが、築年数や住宅の状態に条件がある場合があります。詳細は市の窓口で確認してください。</p><div class="highlight-box">住宅ローンの利子補給制度など、他の住宅支援制度と併用できる場合があります。住宅取得を検討している方は、まとめて相談するとよいでしょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukushima-city-sogyo-shien',
    title: '福島市 創業・起業支援補助金',
    organization: '福島市',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'employment',
    prefecture: '福島県',
    tags: ['福島市', '創業支援', '起業補助金'],
    eligibility: '福島市内で新たに事業を開始する個人または法人',
    applicationPeriod: '毎年4月〜1月（予算上限に達するまで）',
    description: '福島市が実施する創業・起業支援補助金です。市内で新規創業する方の初期費用を幅広く支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島市 創業・起業支援補助金は、<span class="marker">市内で新たに事業を立ち上げる起業家</span>を対象に、創業に必要な初期費用の一部を補助する制度です。</p><p>福島市は復興とともに新しい産業の創出にも注力しています。飲食業やサービス業だけでなく、IT・クリエイティブ産業など幅広い業種の創業を支援しており、地域経済の多様化と活性化を目指しています。</p><p><span class="marker-green">女性起業家や若年起業家（39歳以下）には補助率の優遇</span>がある場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象経費"><p>店舗・事務所の改装費・設備費</p><p>機械装置・備品の購入費</p><p>広告宣伝費（看板、ウェブサイト制作等）</p><p>創業に係る専門家への相談費用</p></div><p>福島市内で新たに事業を開始する方で、商工会議所等が実施する創業支援セミナーを受講済みであることが要件です。</p><p>申請は福島市役所商工観光部で受け付けており、事業計画書の提出と審査があります。<span class="marker-green">事業開始前に申請が必要</span>ですので、早めに準備を始めましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象経費の3分の2以内（上限150万円）</strong>です。ただし、補助率や上限は事業の内容や申請者の属性によって異なる場合があります。</p><p><span class="marker">補助金は後払い（精算払い）方式</span>です。事業完了後に実績報告書を提出し、審査を経て交付されます。初期資金は自己負担で準備する必要があります。</p><div class="note-box">補助事業の完了後も一定期間の事業継続が求められます。短期間での廃業は補助金返還の対象となることがあるため、しっかりとした事業計画を立てましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 水戸市（茨城県）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'mito-child-medical',
    title: '水戸市 子ども医療費助成制度',
    organization: '水戸市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '茨城県',
    tags: ['水戸市', '子ども医療費', '助成金'],
    eligibility: '水戸市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '水戸市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 子ども医療費助成制度（マル福）は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>水戸市は偕楽園で有名な茨城県の県庁所在地です。「マル福」の愛称で親しまれるこの制度は、通院・入院・調剤のすべてが助成対象となっており、子育て家庭を広く支援しています。</p><p><span class="marker-green">所得制限なしで、水戸市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>水戸市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>水戸市役所子育て支援課または各出張所で申請できます。出生届や転入届と同時に手続きするとスムーズです。申請後、<strong>「医療福祉費受給者証（マル福）」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。県内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払った後に償還払い</span>の手続きが必要です。領収書を忘れずに保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。交通事故など第三者行為による医療費は別途届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-education-support',
    title: '水戸市 就学援助制度',
    organization: '水戸市',
    type: 'local',
    maxAmount: '年間最大約15万円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '茨城県',
    tags: ['水戸市', '就学援助', '教育支援'],
    eligibility: '水戸市立小中学校に在籍する児童・生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '水戸市が実施する就学援助制度です。経済的に困難な世帯の児童・生徒に対し、学用品費や給食費などを援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 就学援助制度は、<span class="marker">経済的理由により就学が困難な児童・生徒の保護者</span>に対し、学校生活に必要な費用の一部を援助する制度です。</p><p>学用品費、校外活動費、修学旅行費、学校給食費、医療費（学校保健法に定める疾病）など、幅広い費目が援助対象です。新入学用品費の入学前支給にも対応しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受けている世帯（要保護者）</p><p>生活保護に準ずる程度に経済的にお困りの世帯（準要保護者）</p><p>前年の世帯所得が水戸市の定める基準額以下の世帯</p></div><p>毎年4月に学校を通じて配布される申請書を記入し、在籍する学校に提出します。<span class="marker-green">年度途中の転入や家計急変による申請も随時受け付けています</span>。</p><p>認定は毎年度必要です。前年度の認定は自動更新されないため、忘れずに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>援助費目ごとに国の基準額に基づいた支給額が設定されています。<strong>学用品費は小学校で年間約1万円、中学校で年間約2万円</strong>が目安です。</p><p><span class="marker">給食費は実費全額が支給</span>され、保護者の負担はありません。修学旅行費や校外活動費も実費支給です。</p><div class="highlight-box">新入学用品費は入学前の3月に前倒しで支給が可能です。小学校入学時のランドセルや中学校入学時の制服購入に活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'mito-housing-reform',
    title: '水戸市 住宅リフォーム助成事業',
    organization: '水戸市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['水戸市', '住宅リフォーム', '補助金'],
    eligibility: '水戸市内に居住し、市内業者を利用してリフォームを行う住宅所有者',
    applicationPeriod: '毎年4月〜予算上限に達するまで',
    description: '水戸市が実施する住宅リフォーム助成事業です。市内業者による住宅改修工事費用の一部を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市 住宅リフォーム助成事業は、<span class="marker">市内の施工業者を利用した住宅のリフォーム工事</span>に対して費用の一部を補助する制度です。</p><p>住環境の向上と市内建設関連事業者の受注機会拡大を目的として実施されています。バリアフリー改修、省エネ改修、耐震改修、水回りの改修など多様な工事が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>バリアフリー改修（手すり設置、段差解消等）</p><p>省エネ改修（断熱、節水設備等）</p><p>屋根・外壁の改修工事</p><p>水回りの改修（浴室・トイレ・キッチン）</p></div><p>水戸市に住所があり、対象住宅に居住し、市税を滞納していない方が申請できます。<span class="marker-green">工事着手前に申請が必要</span>ですので、業者との契約前に市役所で手続きを行ってください。</p><p>申請は水戸市役所住宅政策課で受け付けています。工事見積書と工事箇所の写真が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は<strong>対象工事費の10%（上限20万円）</strong>です。工事費が20万円以上の場合に申請可能となります。</p><p><span class="marker">水戸市内に本店または営業所を有する施工業者に発注することが条件</span>です。市外業者による工事は対象になりません。</p><div class="note-box">毎年予算枠があり、先着順で受付が終了します。リフォームを計画している方は、年度初めの募集開始時期に合わせて早めに準備を進めましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
