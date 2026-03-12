import { Grant } from '@/lib/types';

export const cityGrantsBatch14: Grant[] = [
  // ────────────────────────────────────────────────
  // 岡崎市（愛知県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'okazaki-child-medical',
    title: '岡崎市 子ども医療費助成制度',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['岡崎市', '子ども医療費', '助成金'],
    eligibility: '岡崎市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '岡崎市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>徳川家康の生誕地として知られる岡崎市では、子育て世帯への経済的支援を重点施策として掲げています。通院・入院・調剤のいずれも対象で、子育て家庭の医療費負担を大幅に軽減しています。</p><p><span class="marker-green">所得制限なし・全世帯が対象</span>で、安心して子育てできる環境が整っています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡崎市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが必要です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>岡崎市役所こども部または各支所で手続きできます。出生届・転入届と同時に申請するのが効率的です。申請後に<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。愛知県内の医療機関では受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外受診の場合は一旦自己負担分を支払い、後日償還払いで申請</span>します。領収書の保管を忘れずに行いましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-housing-seismic',
    title: '岡崎市 木造住宅耐震改修費補助金',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'housing',
    prefecture: '愛知県',
    tags: ['岡崎市', '耐震改修', '補助金'],
    eligibility: '岡崎市内に昭和56年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '岡崎市が実施する木造住宅の耐震改修費補助制度です。旧耐震基準の木造住宅の改修費用を最大120万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 木造住宅耐震改修費補助金は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の木造住宅</span>の耐震改修工事に対して費用を補助する制度です。</p><p>南海トラフ地震への備えとして、愛知県全体で住宅耐震化が推進されています。岡崎市でも独自の上乗せ補助を設け、市民の住まいの安全確保を後押ししています。</p><p>補助額は<strong>最大120万円</strong>で、<span class="marker-green">耐震診断から改修工事まで一貫した支援体制</span>が整っています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の対象条件"><p>昭和56年5月31日以前に建築された木造住宅であること</p><p>岡崎市内に所在し、申請者が居住していること</p><p>耐震診断の結果、判定値が1.0未満であること</p><p>市税を滞納していないこと</p></div><p>岡崎市役所建築指導課に申請書を提出します。耐震診断結果報告書、改修工事の見積書・図面が必要です。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから工事を開始</span>してください。事後申請は認められません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事にかかる費用に対し、<strong>最大120万円</strong>が補助されます。改修後の判定値が1.0以上となることが求められます。</p><p><span class="marker">まず無料の耐震診断を受けてから改修計画を立てる</span>のがおすすめです。岡崎市では耐震診断も無料で実施しています。</p><div class="highlight-box">段階的な改修（まず1階部分のみなど）も補助対象となる場合があります。改修の進め方についても建築指導課に相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'okazaki-startup-support',
    title: '岡崎市 創業支援補助金',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['岡崎市', '創業支援', '補助金'],
    eligibility: '岡崎市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '岡崎市が実施する創業支援補助金です。市内での新規創業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡崎市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する起業家</span>を対象に、創業時の初期費用を補助する制度です。</p><p>ものづくり産業が盛んな岡崎市では、新たな産業の芽を育てるための創業支援にも力を入れています。店舗改装費、設備購入費、広告宣伝費など幅広い経費が対象となります。</p><p>補助率は対象経費の2分の1以内、<strong>上限は50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>市内で創業予定、または創業後1年以内の個人・法人が対象です。岡崎市の創業支援セミナーや相談窓口を利用していることが要件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>事業計画書</p><p>創業に係る経費の見積書・領収書</p><p>開業届の写し（創業済みの場合）</p><p>岡崎市創業支援等事業の受講証明書</p></div><p><span class="marker">申請前に岡崎ビジネスサポートセンター（OKa-Biz）での相談を推奨</span>します。事業計画のブラッシュアップもサポートしてもらえます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の2分の1以内で、<strong>上限50万円</strong>が補助されます。審査により交付額が決定されます。</p><p><span class="marker">国の特定創業支援等事業の認定を受けると、登録免許税の軽減など追加メリット</span>もあります。岡崎市の創業支援窓口で手続き方法を確認しましょう。</p><div class="note-box">補助対象外の経費：人件費、車両購入費、仕入れ費用、既に支払い済みの経費など。交付決定前に着手した事業費は原則対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 豊田市（愛知県）3件: childcare, medical, employment
  // ────────────────────────────────────────────────
  {
    slug: 'toyota-child-medical',
    title: '豊田市 子ども医療費助成制度',
    organization: '豊田市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['豊田市', '子ども医療費', '助成金'],
    eligibility: '豊田市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '豊田市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>世界有数の自動車産業都市として知られる豊田市は、充実した税収を背景に子育て支援にも積極的に取り組んでいます。通院・入院・調剤のすべてが助成対象で、子育て世帯の安心を支えています。</p><p><span class="marker-green">所得制限なしで全世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊田市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>豊田市役所子ども家庭課または各支所・出張所で手続きできます。出生届や転入届と同時の申請が便利です。<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。愛知県内の医療機関では受給者証を提示すれば窓口負担はありません。</p><p><span class="marker">県外受診時は一旦自己負担分を支払い、後日償還払いで申請</span>してください。診療明細書と領収書が必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、健康診断、予防接種など）は助成対象外です。他の公費医療制度が適用される場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-infertility-treatment',
    title: '豊田市 不妊治療費助成事業',
    organization: '豊田市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '愛知県',
    tags: ['豊田市', '不妊治療', '助成金'],
    eligibility: '豊田市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了日から1年以内に申請）',
    description: '豊田市が実施する不妊治療費助成事業です。保険適用後の自己負担分に対して、1年度あたり最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 不妊治療費助成事業は、<span class="marker">不妊治療にかかる保険適用後の自己負担分</span>を助成する市独自の制度です。</p><p>2022年から不妊治療の保険適用が拡大されましたが、それでも経済的負担は小さくありません。豊田市では、保険適用後に残る自己負担分をさらに軽減するための上乗せ助成を行っています。</p><p>助成額は<strong>1年度あたり最大10万円</strong>で、<span class="marker-green">一般不妊治療・生殖補助医療のいずれも対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊田市に住所を有する法律上の婚姻関係にある夫婦、または事実婚の関係にあるカップルが対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の領収書・診療明細書</p><p>戸籍謄本または住民票</p><p>健康保険証の写し</p></div><p>豊田市役所保健部で申請できます。<span class="marker">治療終了日の属する年度の末日まで、または治療終了日から1年以内</span>のいずれか遅い日までに申請が必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分に対して、<strong>1年度あたり最大10万円</strong>が助成されます。通院回数による制限はありません。</p><p><span class="marker">先進医療として実施された治療も、保険診療と併用している場合は対象</span>となることがあります。詳細は保健部にお問い合わせください。</p><div class="highlight-box">愛知県の不妊治療支援制度と豊田市の制度は併用可能な場合があります。県の制度もあわせて確認することで、自己負担をより抑えられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyota-sme-equipment',
    title: '豊田市 中小企業設備投資補助金',
    organization: '豊田市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['豊田市', '設備投資', '補助金'],
    eligibility: '豊田市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '豊田市が実施する中小企業向け設備投資補助金です。生産性向上のための設備導入に最大200万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊田市 中小企業設備投資補助金は、<span class="marker">市内の中小企業が行う生産性向上や業務効率化のための設備投資</span>に対して費用の一部を補助する制度です。</p><p>自動車関連産業を中心に多くの中小企業が集積する豊田市では、サプライチェーンを支える企業の競争力強化を積極的に支援しています。製造設備、IT機器、省エネ設備など幅広い投資が対象です。</p><p>補助率は対象経費の3分の1以内で、<strong>上限は200万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>豊田市内に事業所を有する中小企業者であること</p><p>市税を滞納していないこと</p><p>設備投資額が50万円以上であること</p><p>導入する設備が市内事業所で使用されること</p></div><p>豊田市役所産業部に申請書を提出します。事業計画書、設備の見積書、直近の決算書が必要です。</p><p><span class="marker">設備導入前に必ず申請し、交付決定を受けてから発注・購入</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の3分の1以内で、<strong>上限200万円</strong>が補助されます。設備の内容や事業計画の妥当性をもとに審査が行われます。</p><p><span class="marker">リース・レンタルは対象外で、購入（所有権取得）が条件</span>です。中古設備も原則対象外となります。</p><div class="note-box">導入後5年間は設備の処分制限があります。やむを得ず処分する場合は事前に市への届出が必要で、補助金の返還を求められることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 一宮市（愛知県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'ichinomiya-child-medical',
    title: '一宮市 子ども医療費助成制度',
    organization: '一宮市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['一宮市', '子ども医療費', '助成金'],
    eligibility: '一宮市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '一宮市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>繊維産業の街として発展してきた一宮市は、名古屋への交通アクセスが良く子育て世帯にも人気のエリアです。通院・入院・調剤すべてが助成対象となっており、家計への負担を軽減しています。</p><p><span class="marker-green">所得制限なしで、すべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>一宮市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>一宮市役所子ども家庭課や各出張所で申請できます。出生届・転入届の提出時にあわせて手続きするのがスムーズです。<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。愛知県内の医療機関では受給者証の提示で窓口負担はかかりません。</p><p><span class="marker">県外の医療機関では一旦自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は対象外です。他の公費医療制度が適用される場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-housing-reform',
    title: '一宮市 住宅リフォーム補助金',
    organization: '一宮市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '愛知県',
    tags: ['一宮市', '住宅リフォーム', '補助金'],
    eligibility: '一宮市内に住所を有し、市内の住宅をリフォームする方',
    applicationPeriod: '毎年5月〜11月頃（予算に達し次第終了）',
    description: '一宮市が実施する住宅リフォーム補助金です。市内業者による住宅改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 住宅リフォーム補助金は、<span class="marker">市内の施工業者による住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>住環境の改善と地域経済の活性化を同時に目指しています。トイレや浴室の改修、屋根・外壁のリフォーム、バリアフリー化など、多様な工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">一宮市内に本店を有する施工業者への依頼が条件</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>一宮市に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上の工事であること</p></div><p>一宮市役所建築指導課に申請します。見積書、工事内容がわかる図面や工事前の写真が必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定通知を受けてから着工しなければ補助対象になりません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の10%で、<strong>上限20万円</strong>が補助されます。工事費が20万円未満の場合は申請できません。</p><p><span class="marker">先着順で予算がなくなり次第終了</span>するため、年度当初の早い段階での申請をおすすめします。</p><div class="highlight-box">耐震改修補助やバリアフリー改修補助など、他の住宅関連補助制度との併用が可能な場合があります。併用で自己負担をさらに減らせるので、窓口で相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'ichinomiya-migration-support',
    title: '一宮市 定住促進奨励金',
    organization: '一宮市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '愛知県',
    tags: ['一宮市', '定住促進', '奨励金'],
    eligibility: '一宮市外から一宮市に転入し、住宅を取得した方',
    applicationPeriod: '通年（転入後1年以内に申請）',
    description: '一宮市が実施する定住促進奨励金です。市外から転入して住宅を取得した方に最大30万円を交付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>一宮市 定住促進奨励金は、<span class="marker">市外から一宮市に転入し、新たに住宅を取得して定住する方</span>に奨励金を交付する制度です。</p><p>名古屋駅まで名鉄特急で約10分という好立地の一宮市では、子育て世帯や若い世代の定住を促進しています。新築・中古を問わず住宅を取得した世帯が対象です。</p><p>基本額は<strong>20万円</strong>で、<span class="marker-green">中学生以下の子どもがいる世帯には1人あたり5万円の加算</span>があり、最大30万円が交付されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>市外から一宮市に転入し、住宅を購入または新築した方が対象です。賃貸住宅への転入は対象外となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>転入後の住民票</p><p>住宅の売買契約書または建築請負契約書の写し</p><p>登記事項証明書</p><p>市税の納税証明書</p></div><p>一宮市役所企画政策課で申請します。<span class="marker">転入日から1年以内の申請が必要</span>ですので、手続きは早めに行いましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>基本額<strong>20万円</strong>に、中学生以下の子ども1人につき5万円が加算されます（上限30万円）。</p><p><span class="marker">交付後5年以内に市外へ転出した場合は奨励金の返還が必要</span>となります。長期的に一宮市で暮らす意思のある方が対象です。</p><div class="note-box">同世帯の家族が過去にこの奨励金を受給している場合は申請できません。また、市の他の住宅取得支援制度との併用に制限がある場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 姫路市（兵庫県）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'himeji-child-medical',
    title: '姫路市 こども医療費助成制度',
    organization: '姫路市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['姫路市', '子ども医療費', '助成金'],
    eligibility: '姫路市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '姫路市が実施するこども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>世界文化遺産・姫路城を擁する姫路市は、播磨地方の中核都市として子育て支援にも積極的に取り組んでいます。通院・入院・調剤すべてが助成対象となっています。</p><p><span class="marker-green">所得制限なし・全世帯対象</span>で、安心して子育てできる環境を整備しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>姫路市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>姫路市役所こども支援課や各支所・出張所で手続きできます。出生届や転入届と同時の申請がスムーズです。<strong>「こども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。兵庫県内の医療機関では受給者証を提示すれば窓口負担はかかりません。</p><p><span class="marker">県外受診の場合は一旦支払い後に償還払い</span>の手続きが必要です。領収書と診療明細書を保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健康診断など）は助成対象外です。交通事故など第三者行為による診療は別途届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-scholarship',
    title: '姫路市 奨学金制度',
    organization: '姫路市',
    type: 'local',
    maxAmount: '月額最大3万5千円',
    maxAmountNum: 42,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['姫路市', '奨学金', '教育支援'],
    eligibility: '姫路市に住所を有する高校生・大学生等の保護者で、経済的理由により修学が困難な方',
    applicationPeriod: '毎年4月〜5月頃',
    description: '姫路市が実施する奨学金制度です。経済的理由により修学が困難な高校生・大学生等に月額最大3万5千円の奨学金を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生等</span>に奨学金を貸与する制度です。</p><p>姫路市に住所を有する方の子弟で、高等学校、大学、専門学校等に在学（または入学予定）の学生が対象です。無利子で貸与されるため、卒業後の返済負担も軽減されています。</p><p>貸与月額は高校生<strong>月額1万8千円</strong>、大学生等<strong>月額3万5千円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>姫路市に住所を有する方の子弟で、学校教育法に規定する高等学校・大学等に在学する方が対象です。世帯の所得が一定基準以下であることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>奨学金貸与申請書</p><p>在学証明書または合格通知書の写し</p><p>世帯全員の所得証明書</p><p>連帯保証人に関する書類</p></div><p><span class="marker">募集は毎年4月〜5月頃で、選考のうえ貸与が決定</span>されます。募集人数には限りがあるため、早めの申請を心がけてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は高校生<strong>月額1万8千円</strong>、大学生・専門学校生等<strong>月額3万5千円</strong>です。<span class="marker">無利子での貸与</span>で返済の負担が軽減されています。</p><p>卒業後6ヶ月の据置期間を経て、貸与期間の2倍以内の期間で返済します。</p><div class="highlight-box">日本学生支援機構の奨学金など他の奨学金との併用も可能です。ただし、他の給付型奨学金と重複する場合は制限が設けられることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'himeji-housing-seismic',
    title: '姫路市 住宅耐震化促進事業補助金',
    organization: '姫路市',
    type: 'local',
    maxAmount: '最大130万円',
    maxAmountNum: 130,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['姫路市', '耐震改修', '補助金'],
    eligibility: '姫路市内に昭和56年5月31日以前に建築された住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '姫路市が実施する住宅耐震化促進事業補助金です。旧耐震基準の住宅の耐震改修工事費を最大130万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>姫路市 住宅耐震化促進事業補助金は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の住宅</span>の耐震改修工事に対して費用を補助する制度です。</p><p>兵庫県は阪神・淡路大震災の経験から住宅耐震化を強力に推進しています。姫路市でも県と連携した手厚い補助制度を用意しており、耐震診断から改修工事まで一貫した支援を行っています。</p><p>補助額は<strong>最大130万円</strong>で、<span class="marker-green">簡易耐震改修も補助対象</span>としています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象となる条件"><p>昭和56年5月31日以前に建築された住宅であること</p><p>姫路市内に所在し、申請者が居住していること</p><p>耐震診断の結果、耐震性が不足していること</p><p>市税の滞納がないこと</p></div><p>姫路市役所建築指導課に申請書類を提出します。耐震診断結果報告書、改修工事の設計図書・見積書が必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。まずは無料の簡易耐震診断を受けることから始めましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事にかかる費用に対し、<strong>最大130万円</strong>が補助されます。改修後に耐震基準を満たすことが条件です。</p><p><span class="marker">阪神・淡路大震災を経験した兵庫県では、耐震化は特に重要な課題</span>として位置づけられています。まだ耐震診断を受けていない方は、まず簡易診断から始めてみてください。</p><div class="note-box">耐震シェルターの設置や屋根の軽量化工事など、部分的な対策にも別途補助制度があります。フル改修が難しい場合は、段階的なアプローチも検討してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 西宮市（兵庫県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'nishinomiya-child-medical',
    title: '西宮市 子ども医療費助成制度',
    organization: '西宮市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['西宮市', '子ども医療費', '助成金'],
    eligibility: '西宮市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '西宮市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>阪神間の文教住宅都市として知られる西宮市は、子育て世帯に非常に人気の高いエリアです。通院・入院・調剤のすべてが助成対象で、子育て家庭の医療費負担を大きく軽減しています。</p><p><span class="marker-green">所得制限なしで全世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>西宮市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>西宮市役所こども支援局や各支所で手続きできます。出生届・転入届と同時の申請がスムーズです。<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。兵庫県内の医療機関では受給者証を提示すれば窓口負担はありません。</p><p><span class="marker">県外受診の場合は一旦自己負担分を支払い、後日償還払い</span>で申請します。領収書と診療明細書をお手元に保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-elderly-medical',
    title: '西宮市 高齢期移行者医療費助成制度',
    organization: '西宮市',
    type: 'local',
    maxAmount: '自己負担額の軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['西宮市', '高齢者医療', '助成金'],
    eligibility: '西宮市に住所を有する65歳〜69歳の一定所得以下の方',
    applicationPeriod: '通年',
    description: '西宮市が実施する高齢期移行者医療費助成制度です。65歳から69歳の一定所得以下の方の医療費自己負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 高齢期移行者医療費助成制度は、<span class="marker">65歳から69歳の方で一定の所得基準以下の方</span>を対象に、医療費の自己負担を軽減する制度です。</p><p>後期高齢者医療制度（75歳〜）に移行する前の高齢者の医療費負担を軽減し、安心して医療を受けられる環境を整えることを目的としています。</p><p><span class="marker-green">通院・入院ともに自己負担割合が2割に軽減</span>されます（通常3割負担の方が対象）。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>西宮市に住民登録がある65歳〜69歳の方で、世帯の市民税が一定基準以下であることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>健康保険証</p><p>本人確認書類</p><p>所得を証明する書類（必要に応じて）</p></div><p>西宮市役所国民健康保険課で申請できます。対象となる可能性がある方には市から案内が届く場合もありますが、<span class="marker">届かない場合でも要件を満たしていれば申請可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>医療費の自己負担割合が<strong>2割に軽減</strong>されます。通常3割負担の方にとって大きな負担軽減となります。</p><p><span class="marker">受給者証の有効期限は毎年7月に更新</span>されます。所得状況の変動により翌年度は対象外となる場合もあります。</p><div class="highlight-box">国民健康保険や社会保険など、加入している健康保険の種類にかかわらず申請できます。所得要件に該当するかどうか、まずは窓口に相談してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nishinomiya-housing-eco',
    title: '西宮市 住宅用太陽光発電・蓄電池設置補助金',
    organization: '西宮市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['西宮市', '太陽光発電', '補助金'],
    eligibility: '西宮市内の住宅に太陽光発電システムまたは蓄電池を設置する方',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '西宮市が実施する住宅用太陽光発電・蓄電池設置補助金です。再生可能エネルギー設備の導入に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>西宮市 住宅用太陽光発電・蓄電池設置補助金は、<span class="marker">市内の住宅に太陽光発電システムや家庭用蓄電池を設置する方</span>に補助金を交付する制度です。</p><p>脱炭素社会の実現に向けて、家庭での再生可能エネルギーの利用拡大を推進しています。太陽光発電と蓄電池を組み合わせることで、災害時の非常用電源としても活用できます。</p><p>太陽光発電に<strong>最大10万円</strong>、蓄電池に<strong>最大10万円</strong>、あわせて<span class="marker-green">最大20万円</span>が補助されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象となる条件"><p>西宮市内の自己所有住宅に設置すること</p><p>未使用品の設備を新たに設置すること</p><p>電力会社と系統連系を行うこと（太陽光発電の場合）</p><p>市税を滞納していないこと</p></div><p>西宮市役所環境学習都市推進課に申請します。設備の仕様書、見積書、住宅の所有がわかる書類が必要です。</p><p><span class="marker">設備設置前の申請が必要</span>です。交付決定通知を受けてから設置工事を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>太陽光発電システム：<strong>1kWあたり2万円（上限10万円）</strong>。家庭用蓄電池：<strong>1kWhあたり2万円（上限10万円）</strong>。合計で<strong>最大20万円</strong>です。</p><p><span class="marker">国の補助金や兵庫県の補助金との併用が可能</span>な場合があり、複数の制度を組み合わせることで初期費用を大幅に抑えられます。</p><div class="note-box">リースやPPA（電力購入契約）モデルでの設置は補助対象外となる場合があります。設備の仕様要件もあるため、事前に窓口で確認してから機器を選定しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.nishi.or.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 尼崎市（兵庫県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'amagasaki-child-medical',
    title: '尼崎市 子ども医療費助成制度',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['尼崎市', '子ども医療費', '助成金'],
    eligibility: '尼崎市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '尼崎市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>大阪・神戸の双方にアクセスしやすい尼崎市は、利便性の高さから子育て世帯にも注目されている都市です。通院・入院・調剤のすべてが助成対象で、経済的な不安なく子どもの健康を守れる環境を整えています。</p><p><span class="marker-green">所得制限なしで、全世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>尼崎市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>尼崎市役所こども青少年課や各サービスセンターで手続き可能です。出生届・転入届と同時の申請が効率的です。<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。兵庫県内の医療機関では受給者証を提示するだけで窓口負担はかかりません。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後に償還払い</span>で申請が必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は対象外です。他の公費医療制度が適用される場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-startup-support',
    title: '尼崎市 創業促進補助金',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['尼崎市', '創業支援', '補助金'],
    eligibility: '尼崎市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '尼崎市が実施する創業促進補助金です。市内での新規創業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 創業促進補助金は、<span class="marker">市内で新たに事業を開始する創業者</span>を対象に、創業にかかる初期費用を補助する制度です。</p><p>ものづくりの街として発展してきた尼崎市では、新たなビジネスの創出による地域経済の活性化を目指しています。店舗の改装費、設備費、広告宣伝費、ウェブサイト制作費など幅広い経費が対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>尼崎市内で新たに事業を開始する方、または創業後1年以内の個人・法人が対象です。尼崎市の創業支援プログラムを受講していることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>事業計画書</p><p>創業に係る経費の見積書・領収書</p><p>開業届の写し（創業済みの場合）</p><p>創業支援プログラムの修了証明</p></div><p><span class="marker">尼崎市産業振興課や創業支援拠点での事前相談を推奨</span>します。事業計画の作成支援も受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象経費の2分の1以内で、<strong>上限50万円</strong>が補助されます。書類審査とプレゼンテーション審査で採択が決まります。</p><p><span class="marker">商店街の空き店舗を活用した創業には加算措置がある場合</span>があります。地域の商業活性化にも貢献できる創業計画が評価されます。</p><div class="highlight-box">尼崎市の創業支援ネットワークには、金融機関、商工会議所、士業専門家が参加しており、資金調達や経営相談など多面的なサポートが受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'amagasaki-community-support',
    title: '尼崎市 住民自治推進活動支援事業補助金',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '兵庫県',
    tags: ['尼崎市', '地域活動', '補助金'],
    eligibility: '尼崎市内で地域課題の解決に取り組む市民活動団体・自治会',
    applicationPeriod: '毎年2月〜3月頃（翌年度分の募集）',
    description: '尼崎市が実施する住民自治推進活動支援事業補助金です。地域課題の解決に取り組む市民活動に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>尼崎市 住民自治推進活動支援事業補助金は、<span class="marker">地域の課題解決や住みよいまちづくりに取り組む市民活動団体</span>を支援する制度です。</p><p>防犯・防災活動、子育て支援、高齢者の見守り、環境美化活動など、多様な地域活動が補助対象となります。住民主体の取り組みを市が後押しすることで、地域コミュニティの活性化を図っています。</p><p>補助額は<strong>最大30万円</strong>で、<span class="marker-green">新規の取り組みにも、継続的な活動にも申請可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>尼崎市内で活動する市民活動団体、自治会、NPO法人などが対象です。3名以上のメンバーで構成されていることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>事業計画書</p><p>収支予算書</p><p>団体の活動概要がわかる書類</p><p>団体の規約・会則</p></div><p><span class="marker">毎年2月〜3月頃に翌年度分の募集が行われます</span>。公開プレゼンテーションによる審査で採択団体が決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>活動内容や規模に応じて<strong>最大30万円</strong>が補助されます。補助率は対象経費の全額（上限あり）です。</p><p><span class="marker">同一事業での補助は最大3年間</span>です。活動の自立化を見据えて、計画的に運営していくことが重要です。</p><div class="note-box">営利目的の活動、政治・宗教活動、特定の個人のみを対象とする活動は補助対象外です。活動終了後に実績報告書の提出が必要となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 枚方市（大阪府）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'hirakata-child-medical',
    title: '枚方市 子ども医療費助成制度',
    organization: '枚方市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['枚方市', '子ども医療費', '助成金'],
    eligibility: '枚方市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '枚方市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>大阪府北東部に位置する枚方市は、京阪沿線の住宅都市として子育て世帯に人気があります。通院・入院・調剤のすべてが助成対象で、子育て家庭の医療費負担を大きく軽減しています。</p><p><span class="marker-green">所得制限なしで全世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>枚方市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（府外受診時の償還払い用）</p></div><p>枚方市役所子ども青少年部や各支所で手続きできます。出生届・転入届と同時の申請がスムーズです。<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。大阪府内の医療機関では医療証を提示することで窓口負担はかかりません。</p><p><span class="marker">府外の医療機関を受診した場合は、一旦自己負担分を支払い後に償還払い</span>の手続きが必要です。領収書を保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-housing-reform',
    title: '枚方市 住宅改修補助金',
    organization: '枚方市',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['枚方市', '住宅改修', '補助金'],
    eligibility: '枚方市内に住所を有し、市内の住宅を改修する方',
    applicationPeriod: '毎年5月〜11月頃（予算に達し次第終了）',
    description: '枚方市が実施する住宅改修補助金です。市内業者による住宅改修工事に最大25万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 住宅改修補助金は、<span class="marker">市内の施工業者による住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>住環境の向上と地域経済の活性化を目的としています。浴室やトイレのリフォーム、屋根・外壁の修繕、断熱改修、バリアフリー化工事など、幅広い改修が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は25万円</strong>です。<span class="marker-green">枚方市内に事業所を有する施工業者への依頼が条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>枚方市に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による25万円以上の工事であること</p></div><p>枚方市役所住宅まちづくり課に申請します。見積書、工事図面、施工前の写真が必要です。</p><p><span class="marker">工事着手前の申請が必須</span>です。交付決定通知を受けてから着工してください。事後申請は認められません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>対象工事費の10%で、<strong>上限25万円</strong>が補助されます。工事費が25万円未満の場合は対象外です。</p><p><span class="marker">先着順で予算がなくなり次第終了</span>するため、早めの申請をおすすめします。例年、募集開始から数ヶ月で予算に達することが多いです。</p><div class="highlight-box">バリアフリー改修や耐震改修など、他の住宅関連補助制度との併用が認められる場合があります。複数の制度を活用することで、自己負担を大きく減らせます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hirakata-vaccination-support',
    title: '枚方市 高齢者予防接種費用助成',
    organization: '枚方市',
    type: 'local',
    maxAmount: '自己負担1,500円に軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['枚方市', '予防接種', '助成金'],
    eligibility: '枚方市に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月頃（インフルエンザ）',
    description: '枚方市が実施する高齢者予防接種費用助成です。65歳以上の方のインフルエンザ予防接種の自己負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>枚方市 高齢者予防接種費用助成は、<span class="marker">65歳以上の市民を対象にインフルエンザ予防接種の費用を助成</span>する制度です。</p><p>高齢者はインフルエンザに罹患すると重症化リスクが高いため、予防接種の接種率向上を目的としています。枚方市の指定医療機関で接種を受けることで、自己負担が大幅に軽減されます。</p><p>通常4,000〜5,000円程度の接種費用が、<strong>自己負担1,500円</strong>で受けられます。<span class="marker-green">生活保護受給世帯は自己負担なし</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>枚方市に住民登録がある65歳以上の方が対象です。また、60歳〜64歳で心臓・腎臓・呼吸器等に重度の障がいがある方（身体障害者手帳1級相当）も対象となります。</p><div class="summary-box" data-title="接種の流れ"><p>市から届く予診票を確認</p><p>市内の指定医療機関に予約</p><p>予診票と健康保険証を持参して接種</p><p>窓口で自己負担分のみ支払い</p></div><p><span class="marker">事前の申請手続きは不要</span>で、予診票を持って指定医療機関を受診するだけです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>自己負担額は<strong>1,500円</strong>です。残りの費用は市が助成します。生活保護受給世帯の方は全額助成（自己負担なし）となります。</p><p><span class="marker">接種期間は毎年10月から翌年1月末頃まで</span>です。流行前の早い時期に接種を受けることが推奨されています。</p><div class="note-box">指定医療機関以外で接種した場合は全額自己負担となります。やむを得ず市外で接種する場合は、事前に保健センターに相談してください。償還払いの手続きが必要になる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/',
    publishedAt: '2026-03-12',
  },
];
