import { Grant } from '@/lib/types';

export const cityGrantsBatch13: Grant[] = [
  // ────────────────────────────────────────────────
  // 柏市（千葉県）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'kashiwa-child-medical',
    title: '柏市 子ども医療費助成制度',
    organization: '柏市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['柏市', '子ども医療費', '助成金'],
    eligibility: '柏市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '柏市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>千葉県北西部の中核市である柏市は、つくばエクスプレス沿線の開発とともに子育て世帯が増加しており、医療費助成の拡充に力を入れています。通院・入院・調剤のいずれも助成対象です。</p><p><span class="marker-green">所得制限はなく、柏市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>柏市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>柏市役所こども部または各出張所で申請できます。出生届や転入届と同時に手続きするのがスムーズです。申請後、<strong>「子ども医療費助成受給券」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。千葉県内の医療機関であれば受給券の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後に償還払い</span>の手続きが必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-education-support',
    title: '柏市 就学援助制度',
    organization: '柏市',
    type: 'local',
    maxAmount: '年間最大15万円相当',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '千葉県',
    tags: ['柏市', '就学援助', '教育支援'],
    eligibility: '柏市立小中学校に通う児童・生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '柏市が実施する就学援助制度です。経済的な理由で就学が困難な家庭に対し、学用品費や給食費などを援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 就学援助制度は、<span class="marker">経済的な理由により就学が困難な児童・生徒の保護者</span>に対して、学用品費・給食費・修学旅行費などの費用を援助する制度です。</p><p>柏の葉キャンパスエリアをはじめ、ファミリー層の転入が多い柏市では、多様な家庭の教育機会を平等に確保するための支援制度を整備しています。</p><p>生活保護世帯に準じる所得基準に該当する家庭が「準要保護」として認定され、各種費用が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>柏市立小中学校に在籍する児童・生徒の保護者が対象です。前年の世帯所得が一定基準以下であることが要件です。</p><div class="summary-box" data-title="援助の対象費目"><p>学用品費・通学用品費</p><p>学校給食費</p><p>修学旅行費・校外活動費</p><p>新入学学用品費（入学準備金）</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に必要書類を添えて学校に提出してください。<span class="marker-green">年度途中でも家計急変の場合は随時申請が可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は費目ごとに国の基準額に基づいて決定されます。小学校の学用品費は年間約11,630円、中学校は約22,730円が目安です。</p><p><strong>新入学学用品費は入学前の3月に前倒し支給</strong>が可能です。入学準備にかかる出費を早めにカバーできます。</p><div class="highlight-box">認定結果は6月頃に通知されます。支給は年3回程度に分けて保護者の口座に振り込まれます。転出した場合は転出月までの支給となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kashiwa-housing-reform',
    title: '柏市 住宅リフォーム補助金',
    organization: '柏市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['柏市', '住宅リフォーム', '補助金'],
    eligibility: '柏市内に住所を有し、市内業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '柏市が実施する住宅リフォーム補助金です。市内業者による改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>柏市 住宅リフォーム補助金は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>住環境の向上と地域経済の活性化を両立させることを目的としています。外壁塗装、屋根修繕、浴室・トイレのリフォーム、バリアフリー化など幅広い工事が対象となります。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">柏市内に事業所を有する施工業者に依頼することが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>柏市内に住所を有すること</p><p>改修する住宅が市内に所在すること</p><p>市税を滞納していないこと</p><p>市内業者による20万円以上（税込）の工事であること</p></div><p>柏市役所建築指導課に申請書を提出します。見積書、工事内容がわかる図面や写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定通知を受けてから工事を開始しないと補助対象になりません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が20万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となるため、年度初めの早い段階での申請が有利です。</p><div class="highlight-box">耐震改修補助など他の住宅関連補助金との併用が可能な場合があります。複数制度を組み合わせることで自己負担をさらに抑えられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 八王子市（東京都）3件: childcare, medical, employment
  // ────────────────────────────────────────────────
  {
    slug: 'hachioji-child-medical',
    title: '八王子市 義務教育就学児医療費助成',
    organization: '八王子市',
    type: 'local',
    maxAmount: '中学卒業まで助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['八王子市', '子ども医療費', '助成金'],
    eligibility: '八王子市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '八王子市が実施する子ども医療費助成制度です。中学卒業までの子どもの通院・入院にかかる医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市の子ども医療費助成は、<span class="marker">0歳から中学校卒業（15歳到達後の最初の3月31日）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>東京都の市部で最大の人口を持つ八王子市は、都の「乳幼児医療費助成」「義務教育就学児医療費助成」の各制度に加え、市独自の上乗せ助成を行っています。通院・入院ともに助成対象です。</p><p><span class="marker-green">東京都の制度を活用しているため、所得制限の超過世帯でも一部助成を受けられる場合があります</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>八王子市に住民登録のある中学3年生までの子どもの保護者が対象です。健康保険に加入していることが要件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーが確認できる書類</p></div><p>八王子市役所子どものしあわせ課または各事務所で手続きできます。出生届・転入届と同時の申請が便利です。<strong>「乳幼児医療証」または「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>乳幼児（未就学児）は通院・入院とも<strong>自己負担なし</strong>で医療を受けられます。小中学生は通院1回あたり上限200円の自己負担があります。</p><p><span class="marker">都外の医療機関では医療証が使えないため、窓口で自己負担分を支払い後に償還払い</span>で申請する必要があります。</p><div class="note-box">入院時の食事療養費は助成対象外です。保険適用外の治療費（差額ベッド代、文書料など）も対象外となります。医療証は毎年10月に更新されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-senior-medical',
    title: '八王子市 高齢者インフルエンザ予防接種費用助成',
    organization: '八王子市',
    type: 'local',
    maxAmount: '自己負担2,500円に軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['八王子市', '予防接種', '高齢者助成'],
    eligibility: '八王子市に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月',
    description: '八王子市が実施する高齢者向けインフルエンザ予防接種費用助成です。自己負担2,500円で接種が受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 高齢者インフルエンザ予防接種費用助成は、<span class="marker">65歳以上の市民を対象にインフルエンザ予防接種の費用を助成</span>する制度です。</p><p>高齢者はインフルエンザに感染すると重症化しやすいため、接種率の向上を図る目的で実施されています。多摩地域最大の都市である八王子市では、毎年多くの高齢者がこの制度を利用しています。</p><p>市内の指定医療機関で<strong>自己負担2,500円</strong>で接種が可能です。<span class="marker-green">生活保護受給者は自己負担が免除</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>八王子市に住民登録のある65歳以上の方</p><p>60歳〜64歳で心臓・腎臓・呼吸器の機能障害がある方（身体障害者手帳1級相当）</p></div><p>市内の指定医療機関に直接予約のうえ接種します。事前の申請手続きは不要で、医療機関の窓口で住所・年齢を確認するだけで助成が適用されます。</p><p>接種期間は<span class="marker">毎年10月1日から翌年1月31日まで</span>です。この期間外の接種は全額自己負担となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>接種費用のうち市が助成し、<strong>自己負担は2,500円</strong>となります。通常4,000〜5,000円程度かかる接種が大幅に軽減されます。</p><p>接種は期間中1人1回限りです。<span class="marker">2回接種を希望する場合、2回目は全額自己負担</span>となります。</p><div class="highlight-box">接種を希望する方は早めの予約をおすすめします。流行シーズン前の10月〜11月中の接種が効果的です。市外の医療機関で接種した場合は償還払いの手続きが必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'hachioji-startup-support',
    title: '八王子市 創業支援補助金',
    organization: '八王子市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '東京都',
    tags: ['八王子市', '創業支援', '補助金'],
    eligibility: '八王子市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '八王子市が実施する創業支援補助金です。市内での新規創業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>八王子市 創業支援補助金は、<span class="marker">市内で新たに事業を始める方を対象に、創業に必要な初期費用の一部を補助</span>する制度です。</p><p>23の大学が集まる学園都市・八王子市は、若者の起業やイノベーション創出に力を入れています。店舗改装費、設備購入費、広告宣伝費などが補助対象です。</p><p>補助率は対象経費の2分の1で、<strong>上限は50万円</strong>です。<span class="marker-green">市の創業支援セミナーを受講した方は優先的に採択</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>八王子市内で新たに事業を開始する個人・法人</p><p>創業後1年以内の方も対象</p><p>市税の滞納がないこと</p><p>八王子市の創業支援事業計画に基づく特定創業支援等事業を受けた方</p></div><p>八王子市役所産業振興部に事業計画書と見積書を提出します。書類審査に加え、プレゼンテーション審査が行われる場合があります。</p><p><span class="marker">交付決定前に支出した経費は補助対象外</span>ですので、必ず決定通知を受けてから事業に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。補助対象となる経費は店舗改装費、機械装置費、広告宣伝費、委託費などです。</p><p>交付後は<span class="marker">事業の実施報告書を提出する義務</span>があります。事業を5年以内に廃止した場合は補助金の返還を求められることがあります。</p><div class="note-box">八王子市では創業支援セミナーやビジネスコンテストも開催しています。創業を検討中の方はまず八王子市産業振興部や商工会議所に相談することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.hachioji.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 町田市（東京都）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'machida-child-medical',
    title: '町田市 子ども医療費助成制度',
    organization: '町田市',
    type: 'local',
    maxAmount: '中学卒業まで助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['町田市', '子ども医療費', '助成金'],
    eligibility: '町田市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '町田市が実施する子ども医療費助成制度です。中学卒業までの子どもの通院・入院にかかる医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 子ども医療費助成制度は、<span class="marker">0歳から中学校卒業まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>神奈川県との県境に位置する町田市は、小田急線・JR横浜線沿線のベッドタウンとして多くの子育て世帯が暮らしています。都の制度と連携し、通院・入院ともに幅広く医療費を助成しています。</p><p><span class="marker-green">乳幼児（未就学児）は通院・入院とも自己負担なし</span>で医療を受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>町田市に住民登録のある中学3年生までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーカードまたは通知カード</p></div><p>町田市役所子ども生活部または各市民センターで申請できます。<strong>「マル乳医療証」または「マル子医療証」</strong>が交付され、都内の医療機関で提示するだけで助成が適用されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>乳幼児（未就学児）は通院・入院とも<strong>自己負担なし</strong>です。小中学生は通院1回あたり上限200円の自己負担が発生する場合があります。</p><p><span class="marker">都外の医療機関では医療証が使えないため、後日償還払いの手続き</span>が必要です。領収書を保管し、市役所に申請してください。</p><div class="note-box">入院時の食事療養費や差額ベッド代は助成対象外です。健康診断・予防接種などの保険適用外の費用も対象となりません。医療証は毎年10月に更新されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-housing-earthquake',
    title: '町田市 木造住宅耐震改修助成',
    organization: '町田市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '東京都',
    tags: ['町田市', '耐震改修', '補助金'],
    eligibility: '町田市内に昭和56年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '町田市が実施する木造住宅耐震改修助成です。旧耐震基準の木造住宅の耐震改修工事に最大50万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 木造住宅耐震改修助成は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の木造住宅</span>の耐震改修工事に対して補助金を交付する制度です。</p><p>多摩丘陵に位置する町田市は地形が複雑で、旧耐震基準の戸建住宅が多く残っています。首都直下地震への備えとして、住宅の耐震化を促進するために設けられた制度です。</p><p>補助額は耐震改修工事費の<strong>2分の1以内で上限50万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>町田市内の昭和56年5月以前に建築された木造住宅であること</p><p>所有者が自ら居住していること</p><p>耐震診断の結果、耐震性が不足と判定されていること</p><p>市税の滞納がないこと</p></div><p>町田市役所都市づくり部に申請書・耐震診断結果・工事見積書を提出します。事前に無料耐震診断を受けておくとスムーズです。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから工事を始めてください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の2分の1以内で、<strong>上限50万円</strong>です。改修後に耐震基準を満たすことが条件です。</p><p>町田市では<span class="marker-green">無料の耐震診断も実施</span>しています。まずは耐震診断を受けて、お住まいの耐震性を確認しましょう。</p><div class="highlight-box">耐震改修を行うと、固定資産税の減額措置（工事翌年度から1年間、税額の2分の1）を受けられる場合があります。税制優遇との併用でさらにお得になります。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'machida-senior-support',
    title: '町田市 高齢者見守り配食サービス',
    organization: '町田市',
    type: 'local',
    maxAmount: '1食あたり400円助成',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '東京都',
    tags: ['町田市', '高齢者支援', '配食サービス'],
    eligibility: '町田市に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '町田市が実施する高齢者向け配食サービスです。栄養バランスの取れた食事の配達と安否確認を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>町田市 高齢者見守り配食サービスは、<span class="marker">65歳以上のひとり暮らしや高齢者のみの世帯</span>を対象に、栄養バランスの取れた食事を自宅に届けるとともに安否確認を行うサービスです。</p><p>高齢化が進む町田市では、独居高齢者の栄養管理と孤立防止を目的としてこの事業を展開しています。配達員が直接手渡しすることで、日常的な見守り機能も果たしています。</p><p>1食あたりの利用者負担は<strong>約400円</strong>で、差額は市が助成します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>町田市に住民登録のある65歳以上で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>ひとり暮らしの高齢者</p><p>高齢者のみの世帯</p><p>調理が困難な状態にある方</p></div><p>町田市役所いきいき生活部または地域包括支援センターに相談のうえ申請します。<span class="marker-green">ケアマネージャーを通じての申請も可能</span>です。利用開始後は週に数回の配食を受けることができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1食あたりの費用のうち、<strong>市が約400円を助成</strong>し、利用者は残りの自己負担分を支払います。昼食・夕食を選択できます。</p><p><span class="marker">配達時に利用者と直接顔を合わせることで安否確認</span>を行います。不在が続く場合は緊急連絡先に連絡が入ります。</p><div class="note-box">アレルギーや治療食への対応は委託業者により異なります。事前に相談してください。入院中やショートステイ利用中は配食を休止する必要があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.machida.tokyo.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 藤沢市（神奈川県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'fujisawa-child-medical',
    title: '藤沢市 小児医療費助成制度',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['藤沢市', '子ども医療費', '助成金'],
    eligibility: '藤沢市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '藤沢市が実施する小児医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 小児医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳到達後の最初の3月31日）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>湘南エリアの中心都市である藤沢市は、江ノ島や海岸線の美しい環境で子育て世帯にも人気が高く、充実した医療費助成を提供しています。通院・入院・調剤いずれも対象です。</p><p><span class="marker-green">所得制限はなく、藤沢市在住のすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>藤沢市に住民登録のある中学3年生までの子どもの保護者が対象です。健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>藤沢市役所子ども青少年部または各市民センターで手続きできます。出生届・転入届と同時に申請するのが便利です。<strong>「小児医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。神奈川県内の医療機関で医療証を提示すれば窓口負担がかかりません。</p><p><span class="marker">県外で受診した場合は、一旦自己負担分を支払い後に償還払い</span>の手続きが必要です。</p><div class="note-box">差額ベッド代、文書料、予防接種など保険適用外の費用は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。医療証の有効期限は毎年更新されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-fertility-treatment',
    title: '藤沢市 不妊・不育症治療費助成',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '神奈川県',
    tags: ['藤沢市', '不妊治療', '助成金'],
    eligibility: '藤沢市に住所を有し、不妊・不育症治療を受けている夫婦',
    applicationPeriod: '通年（治療終了日から1年以内に申請）',
    description: '藤沢市が実施する不妊・不育症治療費助成です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 不妊・不育症治療費助成は、<span class="marker">不妊治療や不育症治療にかかる費用の一部を助成</span>する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、保険適用後も自己負担分は相当な額になります。藤沢市では国・県の制度に上乗せする形で市独自の助成を行い、子どもを望む夫婦の経済的負担を軽減しています。</p><p>助成額は<strong>1年度あたり上限10万円</strong>です。<span class="marker-green">不育症治療も対象に含まれる</span>のが特徴です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>申請日時点で藤沢市に住民登録のある夫婦（事実婚含む）</p><p>医療保険に加入していること</p><p>他の自治体で同一治療に対する助成を受けていないこと</p></div><p>治療終了後、藤沢市役所健康医療部に申請書・医療機関の証明書・領収書を提出します。</p><p><span class="marker">治療終了日から1年以内に申請する必要があります</span>。年度をまたぐ治療の場合は、最終治療日を基準とします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>保険適用後の自己負担分に対して、<strong>1年度あたり上限10万円</strong>が助成されます。不妊治療（体外受精・顕微授精等）と不育症治療が対象です。</p><p><span class="marker">助成回数に上限はなく、毎年度申請が可能</span>です。治療が長期にわたる場合も継続して利用できます。</p><div class="highlight-box">藤沢市では不妊・不育に関する相談窓口も設けています。治療に関する悩みや助成制度の詳細について、保健師に相談することができます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fujisawa-housing-earthquake',
    title: '藤沢市 木造住宅耐震改修工事補助',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['藤沢市', '耐震改修', '補助金'],
    eligibility: '藤沢市内に昭和56年5月以前に建築された木造住宅を所有し、自ら居住する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '藤沢市が実施する木造住宅耐震改修工事補助です。旧耐震基準の木造住宅の耐震改修に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>藤沢市 木造住宅耐震改修工事補助は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の木造住宅</span>を対象に、耐震改修工事費用の一部を補助する制度です。</p><p>相模湾に面する藤沢市は、南関東地震をはじめとする地震リスクに備えた住宅の耐震化が重要課題です。住宅の耐震性向上を促進するため、手厚い補助を用意しています。</p><p>補助額は工事費の<strong>2分の1以内で上限100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>昭和56年5月以前に建築された木造住宅であること</p><p>所有者が自ら居住していること</p><p>耐震診断で耐震性不足と判定されていること</p><p>市税の滞納がないこと</p></div><p>藤沢市役所計画建築部に事前相談のうえ、申請書・耐震診断結果・工事見積書を提出します。</p><p>藤沢市では<span class="marker-green">無料の耐震診断も実施</span>しています。まずは耐震診断から始めましょう。<span class="marker">工事着手前に必ず交付決定を受けてください</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の2分の1以内で、<strong>上限100万円</strong>です。改修後に耐震基準（評点1.0以上）を満たすことが条件です。</p><p>部分改修（評点0.7以上に引き上げる工事）も<span class="marker">上限60万円で補助対象</span>となります。全体改修が困難な場合は部分改修の活用を検討してください。</p><div class="highlight-box">耐震改修に伴う固定資産税の減額措置や、所得税の特別控除も併用できる場合があります。経済的メリットが大きいので、複数の制度を組み合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 横須賀市（神奈川県）3件: childcare, employment, housing
  // ────────────────────────────────────────────────
  {
    slug: 'yokosuka-child-medical',
    title: '横須賀市 小児医療費助成制度',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['横須賀市', '子ども医療費', '助成金'],
    eligibility: '横須賀市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '横須賀市が実施する小児医療費助成制度です。中学卒業までの子どもの通院・入院にかかる医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 小児医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳到達後の最初の3月31日）まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>三浦半島の中核都市である横須賀市は、海に囲まれた自然豊かな環境で子育てができる街として、医療費助成を含む子育て支援の充実に取り組んでいます。通院・入院・調剤すべてが対象です。</p><p><span class="marker-green">所得制限はなく、横須賀市在住のすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横須賀市に住民登録のある中学3年生までの子どもの保護者が対象です。健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>横須賀市役所こども育成部または行政センターで手続きできます。出生届・転入届の提出時に同時申請が可能です。<strong>「小児医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。神奈川県内の医療機関で医療証を提示すれば窓口負担なしで受診できます。</p><p><span class="marker">県外受診の場合は、一旦自己負担分を支払い後に償還払い</span>の手続きが必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種費用など）は対象外です。交通事故など第三者行為による診療は事前にご連絡ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-startup-support',
    title: '横須賀市 創業支援事業補助金',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['横須賀市', '創業支援', '補助金'],
    eligibility: '横須賀市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '横須賀市が実施する創業支援補助金です。市内での新規創業にかかる経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 創業支援事業補助金は、<span class="marker">市内で新たに事業を開始する方を対象に、創業に必要な経費の一部を補助</span>する制度です。</p><p>「スカリバ」の愛称で知られる横須賀リサーチパークをはじめ、横須賀市はIT・スタートアップ誘致に積極的です。店舗改装費、設備費、広告費、専門家への相談費用などが補助対象となります。</p><p>補助率は対象経費の3分の2以内で、<strong>上限は100万円</strong>です。<span class="marker-green">市の特定創業支援等事業を受けた方が優先</span>されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>横須賀市内で新たに事業を開始する個人・法人</p><p>創業後1年以内の方も対象</p><p>市税の滞納がないこと</p><p>横須賀市の産業交流プラザ等で経営相談を受けていること</p></div><p>横須賀市役所経済部に事業計画書と見積書を提出します。審査は書類審査とプレゼンテーションの2段階で行われます。</p><p><span class="marker">交付決定前の支出は補助対象外</span>です。必ず決定通知を受けてから経費の支出を開始してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限100万円</strong>です。店舗改装費、機械装置費、広告宣伝費、委託費、賃借料などが対象です。</p><p>交付後は<span class="marker">5年間の事業継続が原則</span>で、期間内に廃業した場合は補助金の返還を求められることがあります。</p><div class="highlight-box">横須賀市では「ヨコスカバレー」構想のもと、スタートアップ支援の無料コワーキングスペースやメンタリングプログラムも提供しています。補助金と合わせて活用すると効果的です。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'yokosuka-housing-reform',
    title: '横須賀市 住宅リフォーム助成事業',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['横須賀市', '住宅リフォーム', '補助金'],
    eligibility: '横須賀市内に住所を有し、市内業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '横須賀市が実施する住宅リフォーム助成事業です。市内業者による改修工事に最大30万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横須賀市 住宅リフォーム助成事業は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を助成する制度です。</p><p>住環境の向上と地域経済の活性化を目的としています。屋根・外壁の修繕、トイレ・浴室のリフォーム、バリアフリー化、省エネ改修など幅広い工事が対象となります。</p><p>補助率は対象工事費の10%で、<strong>上限は30万円</strong>です。<span class="marker-green">子育て世帯や高齢者世帯は上限が5万円加算</span>される場合があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>横須賀市内に住所を有すること</p><p>改修する住宅が市内に所在し、自ら居住していること</p><p>市税を滞納していないこと</p><p>市内業者による30万円以上（税込）の工事であること</p></div><p>横須賀市役所都市部に申請書・工事見積書・住宅の写真を提出します。</p><p><span class="marker">必ず工事着手前に申請し、交付決定通知を受けてから工事を開始してください</span>。事前着工は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限30万円</strong>です。工事費が30万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となりますので、早めの申請をおすすめします。</p><div class="highlight-box">横須賀市の耐震改修補助や省エネリフォーム補助と併用できる場合があります。複数の制度を組み合わせることで自己負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 富士市（静岡県）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'fuji-city-child-medical',
    title: '富士市 こども医療費助成制度',
    organization: '富士市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '静岡県',
    tags: ['富士市', '子ども医療費', '助成金'],
    eligibility: '富士市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '富士市が実施するこども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>富士山の麓に位置する富士市は、製紙産業で知られる工業都市ですが、近年は子育て環境の充実にも力を入れています。通院・入院・調剤のいずれも対象で、子育て世帯の医療費負担を軽減しています。</p><p><span class="marker-green">所得制限はなく、富士市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>富士市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>富士市役所こども未来課または各まちづくりセンターで手続きできます。出生届や転入届と同時に申請するとスムーズです。<strong>「こども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。静岡県内の医療機関で受給者証を提示すれば窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後に償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種費用など）は助成対象外です。交通事故など第三者の行為による傷病は、事前に市役所への届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-housing-reform',
    title: '富士市 住宅リフォーム支援補助金',
    organization: '富士市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '静岡県',
    tags: ['富士市', '住宅リフォーム', '補助金'],
    eligibility: '富士市内に住所を有し、市内業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '富士市が実施する住宅リフォーム支援補助金です。市内業者による改修工事に最大20万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 住宅リフォーム支援補助金は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>富士山を望む快適な住環境の維持・向上と、地元建設業の活性化を目的としています。外壁・屋根の修繕、水回りのリフォーム、断熱改修、バリアフリー化など多様な工事が補助対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に本店を有する施工業者に依頼することが要件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>富士市内に住所を有すること</p><p>改修する住宅が市内に所在し、自ら居住していること</p><p>市税の滞納がないこと</p><p>市内業者による20万円以上（税込）の工事であること</p></div><p>富士市役所住宅政策課に申請書・工事見積書を提出します。過去に同一住宅で本補助金を受けていないことも条件です。</p><p><span class="marker">必ず工事着手前に申請し、交付決定後に工事を開始してください</span>。事前着工は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。対象工事費が20万円未満の場合は申請できません。</p><p><span class="marker">先着順で予算がなくなり次第終了</span>となります。例年、申請開始後早い段階で予算に達することが多いです。</p><div class="highlight-box">富士市の耐震改修補助金や省エネ設備導入補助との併用が可能な場合があります。複数の補助制度を組み合わせて、より効果的にリフォームを進めましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fuji-city-senior-hearing-aid',
    title: '富士市 高齢者補聴器購入費助成',
    organization: '富士市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'medical',
    prefecture: '静岡県',
    tags: ['富士市', '補聴器', '高齢者助成'],
    eligibility: '富士市に住所を有する65歳以上で、聴力の低下が認められる方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '富士市が実施する高齢者補聴器購入費助成です。聴力低下のある高齢者の補聴器購入費用を最大2万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富士市 高齢者補聴器購入費助成は、<span class="marker">65歳以上で聴力の低下が認められる高齢者</span>を対象に、補聴器の購入費用の一部を助成する制度です。</p><p>加齢性難聴は認知症のリスク因子とされており、補聴器の早期使用が社会参加の維持やコミュニケーション改善に効果的です。富士市では高齢者の生活の質向上を目的にこの助成制度を設けています。</p><p>助成額は購入費用の2分の1以内で、<strong>上限は2万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>富士市に住民登録のある65歳以上の方</p><p>医師の診断により補聴器の使用が必要と認められた方</p><p>聴覚障害による身体障害者手帳の対象とならない方</p><p>住民税非課税世帯であること</p></div><p>富士市役所高齢者支援課に申請書と医師の意見書を提出します。<span class="marker-green">購入前に申請が必要</span>ですので、先に耳鼻咽喉科を受診してください。</p><p>交付決定後に補聴器を購入し、領収書を添えて実績報告書を提出すると助成金が振り込まれます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補聴器購入費用の2分の1以内で、<strong>上限2万円</strong>が助成されます。両耳分の購入でも助成額の上限は変わりません。</p><p><span class="marker">1人1回限りの助成</span>です。過去にこの制度を利用した方は再度の申請はできません。</p><div class="note-box">補聴器は購入後の調整（フィッティング）が重要です。認定補聴器技能者のいる専門店での購入が推奨されています。集音器やイヤホン型の簡易機器は助成対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 豊橋市（愛知県）3件: childcare, employment, education
  // ────────────────────────────────────────────────
  {
    slug: 'toyohashi-child-medical',
    title: '豊橋市 子ども医療費助成制度',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '愛知県',
    tags: ['豊橋市', '子ども医療費', '助成金'],
    eligibility: '豊橋市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '豊橋市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>東三河地域の中核都市である豊橋市は、路面電車が走る街並みと温暖な気候で知られています。愛知県の制度と連携し、通院・入院・調剤のすべてについて医療費を助成しています。</p><p><span class="marker-green">所得制限はなく、豊橋市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊橋市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>豊橋市役所こども未来部または各窓口センターで手続きできます。出生届・転入届と同時の申請が便利です。<strong>「子ども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。愛知県内の医療機関で受給者証を提示すれば窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い後に償還払い</span>の手続きが必要です。領収書を忘れずに保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-startup-support',
    title: '豊橋市 創業支援補助金',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['豊橋市', '創業支援', '補助金'],
    eligibility: '豊橋市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '豊橋市が実施する創業支援補助金です。市内での新規創業にかかる初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 創業支援補助金は、<span class="marker">市内で新たに事業を始める方を対象に、創業にかかる初期費用の一部を補助</span>する制度です。</p><p>農業と自動車産業が盛んな豊橋市では、地域経済の多様化を図るため、新規創業の支援に力を入れています。店舗改装費、設備購入費、広告宣伝費、専門家謝金などが補助対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。<span class="marker-green">市の特定創業支援等事業の証明書を取得した方が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>豊橋市内で新たに事業を開始する個人・法人</p><p>創業後1年以内の方も対象</p><p>豊橋市の特定創業支援等事業を受けていること</p><p>市税の滞納がないこと</p></div><p>豊橋市役所産業部商工業振興課に事業計画書と経費の見積書を提出します。書類審査を経て交付が決定されます。</p><p><span class="marker">交付決定前に支出した経費は補助対象外</span>です。必ず決定通知を受けてから事業を進めてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限50万円</strong>です。店舗改装費・機械装置費・広告宣伝費・委託費が主な対象経費です。</p><p>交付後は<span class="marker">実績報告書の提出と5年間の事業継続が求められます</span>。早期廃業の場合は補助金の返還対象となります。</p><div class="highlight-box">豊橋市では商工会議所と連携した創業塾やセミナーも定期的に開催しています。ビジネスプランの磨き上げから資金調達まで、一貫した支援を受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyohashi-education-support',
    title: '豊橋市 就学援助制度',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '年間最大15万円相当',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '愛知県',
    tags: ['豊橋市', '就学援助', '教育支援'],
    eligibility: '豊橋市立小中学校に通う児童・生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '豊橋市が実施する就学援助制度です。経済的な理由で就学が困難な家庭に対し、学用品費や給食費などを援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊橋市 就学援助制度は、<span class="marker">経済的な理由により就学が困難な児童・生徒の保護者</span>に対して、学校生活に必要な費用を援助する制度です。</p><p>多文化共生都市としても知られる豊橋市では、すべての子どもが等しく教育を受けられるよう、就学援助制度を整備しています。学用品費、給食費、修学旅行費、医療費（学校保健法に基づくもの）などが支給対象です。</p><p>生活保護世帯に準じる所得基準の家庭が<span class="marker-green">「準要保護」</span>として認定されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊橋市立小中学校に在籍する児童・生徒の保護者で、前年の世帯所得が基準以下の方が対象です。</p><div class="summary-box" data-title="援助の対象費目"><p>学用品費・通学用品費</p><p>学校給食費</p><p>修学旅行費・校外活動費</p><p>新入学学用品費（入学準備金）</p><p>学校病の医療費</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に必要書類を添えて学校に提出してください。<span class="marker">年度途中でも家計急変などの場合は随時申請が可能</span>です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は費目ごとに国の基準に準じて定められています。小学校の学用品費は年間約11,630円、中学校は約22,730円が目安です。</p><p><strong>新入学学用品費は入学前の3月に前倒し支給</strong>が可能です。ランドセルや制服など入学準備の出費を早めにカバーできます。</p><div class="highlight-box">認定結果は6月頃に通知されます。支給は年3回程度に分けて保護者の口座に振り込まれます。転出した場合は転出月までの支給となります。途中認定の場合は申請月からの支給です。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
