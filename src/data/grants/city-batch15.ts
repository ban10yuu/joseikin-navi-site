import { Grant } from '@/lib/types';

export const cityGrantsBatch15: Grant[] = [
  // ────────────────────────────────────────────────
  // 豊中市（大阪府）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'toyonaka-child-medical',
    title: '豊中市 子ども医療費助成制度',
    organization: '豊中市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['豊中市', '子ども医療費', '助成金'],
    eligibility: '豊中市に住所を有する18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '豊中市が実施する子ども医療費助成制度です。18歳到達後最初の3月31日までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後最初の3月31日まで</span>の子どもを対象に、保険診療にかかる自己負担分を助成する制度です。</p><p>北摂地域の中心都市として文教地区のイメージが強い豊中市は、子育て支援にも注力しています。通院・入院・調剤すべてが対象で、<span class="marker-green">所得制限なく全世帯が利用可能</span>です。</p><p>大阪府内の子ども医療費助成は自治体ごとに対象年齢が異なりますが、豊中市は18歳までカバーする手厚い内容となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊中市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（償還払い用）</p></div><p>市役所こども政策課または各出張所で手続きできます。出生届や転入届と同時の手続きがスムーズです。申請後に<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>大阪府内の医療機関であれば、<strong>医療証を提示するだけで窓口負担はありません</strong>。通院・入院ともに保険診療の自己負担分が全額助成されます。</p><p><span class="marker">府外の医療機関を受診した場合は、一旦窓口で自己負担分を支払い、後日償還払い</span>の手続きが必要です。領収書を必ず保管してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。学校でのケガは日本スポーツ振興センター災害共済給付が優先適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-housing-seismic',
    title: '豊中市 住宅耐震改修補助制度',
    organization: '豊中市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['豊中市', '耐震改修', '補助金'],
    eligibility: '豊中市内に昭和56年5月31日以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '豊中市が実施する住宅耐震改修補助制度です。旧耐震基準の木造住宅の耐震改修工事に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 住宅耐震改修補助制度は、<span class="marker">昭和56年5月31日以前に建築された旧耐震基準の木造住宅</span>の耐震改修工事費用を補助する制度です。</p><p>大阪北部地震（2018年）の教訓から、豊中市では住宅の耐震化を積極的に推進しています。耐震診断から改修工事まで一貫してサポートを受けることができます。</p><p>補助額は改修工事費の一部で、<strong>上限100万円</strong>です。まずは無料の耐震診断を受けることから始められます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の要件"><p>昭和56年5月31日以前着工の木造住宅</p><p>豊中市内に所在すること</p><p>耐震診断の結果、評点1.0未満であること</p><p>市税を滞納していないこと</p></div><p>豊中市役所都市計画推進部に申請書類を提出します。耐震診断の結果報告書、改修計画書、見積書が必要です。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから着工してください</span>。事前着工は補助対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費用の一部で、<strong>上限100万円</strong>です。所得税の特別控除や固定資産税の減額措置と併用できるケースもあります。</p><p><span class="marker">耐震診断は無料で実施</span>されるため、まずは診断を受けて住宅の現状を確認することをおすすめします。</p><div class="highlight-box">大阪府の補助制度との併用が可能な場合があり、自己負担をさらに軽減できます。詳細は市の窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyonaka-education-support',
    title: '豊中市 就学援助制度',
    organization: '豊中市',
    type: 'local',
    maxAmount: '学用品費等の実費相当',
    maxAmountNum: 10,
    category: 'education',
    prefecture: '大阪府',
    tags: ['豊中市', '就学援助', '教育支援'],
    eligibility: '豊中市立小中学校に在籍する児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '豊中市が実施する就学援助制度です。経済的理由で就学が困難な家庭に学用品費や給食費等を援助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊中市 就学援助制度は、<span class="marker">経済的理由により就学が困難な児童生徒の保護者</span>に対して、学用品費・給食費・修学旅行費などの費用を援助する制度です。</p><p>文教都市として知られる豊中市では、すべての子どもが安心して学校生活を送れるよう、手厚い就学援助を実施しています。生活保護世帯に準ずる程度に経済的にお困りの家庭が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊中市立の小学校・中学校に在籍する児童生徒の保護者で、世帯の所得が一定基準以下の方が対象です。</p><div class="summary-box" data-title="援助の内容"><p>学用品費・通学用品費</p><p>学校給食費</p><p>修学旅行費・校外活動費</p><p>新入学児童生徒学用品費（入学準備金）</p></div><p>毎年学校を通じて申請書が配布されます。<strong>申請書と所得を証明する書類</strong>を学校に提出してください。年度途中の家計急変にも対応しています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は国の基準に準じた金額で、<strong>学用品費は小学校で年額約1万1千円、中学校で年額約2万2千円</strong>が目安です。給食費は実費相当額が支給されます。</p><p><span class="marker">新入学児童生徒学用品費は入学前の3月に前倒し支給</span>が可能です。入学準備に間に合うよう、早めの申請をおすすめします。</p><div class="note-box">認定は毎年度ごとの審査です。前年度に認定されていても、翌年度は改めて申請が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyonaka.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 東大阪市（大阪府）3件: childcare, employment, medical
  // ────────────────────────────────────────────────
  {
    slug: 'higashiosaka-child-medical',
    title: '東大阪市 子ども医療費助成制度',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['東大阪市', '子ども医療費', '助成金'],
    eligibility: '東大阪市に住所を有する18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '東大阪市が実施する子ども医療費助成制度です。18歳到達後最初の3月31日までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>「モノづくりのまち」として知られる東大阪市は、人口約48万人を擁する大阪府第3の都市です。子育て世帯の医療費負担を軽減し、安心して子育てできる環境づくりを進めています。</p><p>通院・入院・調剤のいずれも対象で、<span class="marker-green">所得制限なく全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>東大阪市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が申請できます。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>市役所国民健康保険室または各行政サービスセンターで手続き可能です。出生届や転入届と同時に手続きするのがおすすめです。<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>大阪府内の医療機関では、<strong>医療証を提示するだけで窓口負担なし</strong>で受診できます。通院・入院ともに保険診療分が全額助成されます。</p><p><span class="marker">府外の医療機関を受診した場合は、窓口で一旦支払い後に償還払い</span>の申請が必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種費用など）は対象外です。他の公費負担制度に該当する場合はそちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-startup-support',
    title: '東大阪市 中小企業創業支援補助金',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['東大阪市', '創業支援', '補助金'],
    eligibility: '東大阪市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年2月（予算に達し次第終了）',
    description: '東大阪市が実施する創業支援補助金です。市内での新規創業に必要な初期費用を最大50万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 中小企業創業支援補助金は、<span class="marker">市内で新たに創業する方の初期費用</span>を支援する制度です。</p><p>東大阪市は町工場の集積地として全国的に有名で、約6,000もの事業所が立地するモノづくりのまちです。この産業基盤を活かし、次世代の起業家を支援するために本制度が設けられています。</p><p>補助率は対象経費の2分の1以内で、<strong>上限50万円</strong>です。店舗改装費、設備導入費、広告宣伝費などが対象となります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の要件"><p>東大阪市内で創業すること（創業後1年以内も可）</p><p>市が実施する創業セミナーを受講済みであること</p><p>市税を滞納していないこと</p><p>同一事業での他の創業系補助金を受けていないこと</p></div><p>東大阪市経済部産業総務課へ申請書類を提出します。事業計画書、見積書、創業セミナー受講証明書などが必要です。</p><p><span class="marker">経費の支出前に申請し、交付決定を受けてから事業を開始する</span>必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限は50万円</strong>です。対象経費には店舗改装費、設備購入費、広告費、法人設立に係る経費などが含まれます。</p><p><span class="marker">東大阪商工会議所と連携した経営相談やメンタリング支援</span>も受けられるため、創業後のフォローアップも充実しています。</p><div class="highlight-box">モノづくり関連の創業は、別途ものづくり支援拠点「クリエイション・コア東大阪」の入居支援制度も活用できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'higashiosaka-senior-medical',
    title: '東大阪市 老人医療費助成制度',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '医療費自己負担の軽減',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['東大阪市', '老人医療', '助成金'],
    eligibility: '東大阪市に住所を有する65歳以上で一定の要件を満たす方',
    applicationPeriod: '通年',
    description: '東大阪市が実施する老人医療費助成制度です。65歳以上の一定要件を満たす高齢者の医療費自己負担を軽減します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市 老人医療費助成制度は、<span class="marker">65歳以上の高齢者のうち一定の要件を満たす方</span>の医療費自己負担分を助成する制度です。</p><p>大阪府の福祉医療費助成制度に基づき、東大阪市が窓口となって運営しています。対象者は通常3割の自己負担が軽減され、安心して医療を受けることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>以下のいずれかに該当する65歳以上の方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>老齢福祉年金受給者</p><p>ひとり暮らしで所得が一定以下の方</p><p>重度障がい認定を受けている方</p></div><p>東大阪市役所の医療助成課または各行政サービスセンターで申請できます。<strong>健康保険証、年金証書、所得証明書</strong>などが必要です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>大阪府内の医療機関では、<strong>医療証の提示により窓口での自己負担が軽減</strong>されます。1日あたり最大500円（月2日限度）の一部自己負担のみで受診可能です。</p><p><span class="marker">府外の医療機関を受診した場合は償還払い</span>となります。領収書は必ず保管しておきましょう。</p><div class="note-box">所得状況の変更があった場合は届出が必要です。毎年の所得審査により資格が更新されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 吹田市（大阪府）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'suita-child-medical',
    title: '吹田市 子ども医療費助成制度',
    organization: '吹田市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['吹田市', '子ども医療費', '助成金'],
    eligibility: '吹田市に住所を有する18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '吹田市が実施する子ども医療費助成制度です。18歳到達後最初の3月31日までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>万博記念公園や国立循環器病研究センターを擁する吹田市は、子育てしやすい街として高い評価を受けています。通院・入院・調剤いずれも助成対象で、<span class="marker-green">所得制限なく全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>吹田市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>吹田市役所児童部または各出張所で手続き可能です。<strong>「子ども医療証」</strong>が交付され、府内の医療機関で提示することで窓口負担がなくなります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>大阪府内の医療機関であれば、<strong>医療証の提示で窓口負担なし</strong>で受診できます。通院・入院ともに保険診療分が全額助成されます。</p><p><span class="marker">府外の医療機関を受診した場合は、一旦自費で支払い後に償還払い</span>で申請が必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、健康診断、予防接種など）は助成対象外です。交通事故などの第三者行為による傷病は届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-housing-reform',
    title: '吹田市 住宅改修補助制度',
    organization: '吹田市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['吹田市', '住宅改修', '補助金'],
    eligibility: '吹田市内に住宅を所有し、バリアフリー化や省エネ改修を行う方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '吹田市が実施する住宅改修補助制度です。バリアフリー化や省エネ改修などの住宅リフォームに最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 住宅改修補助制度は、<span class="marker">住宅のバリアフリー化や省エネルギー化を目的とした改修工事</span>に対して費用の一部を補助する制度です。</p><p>高齢者の転倒防止のための手すり設置、段差解消、断熱改修、窓の二重化など幅広い工事が対象です。住環境の向上と住宅の長寿命化を図ることを目的としています。</p><p>補助率は対象工事費の10%で、<strong>上限は30万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助対象の条件"><p>吹田市内に住所を有すること</p><p>改修する住宅が市内に所在し、自ら居住していること</p><p>市税を滞納していないこと</p><p>工事費が20万円以上であること</p></div><p>吹田市役所都市整備部住宅政策室へ申請書類を提出します。見積書、工事計画書、住宅の写真が必要です。</p><p><span class="marker">必ず工事着手前に申請してください</span>。交付決定前に着工した工事は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限30万円</strong>です。バリアフリー改修と省エネ改修を同時に実施すると効率的です。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となるため、年度始めの早い段階での申請が有利です。</p><div class="highlight-box">介護保険の住宅改修費支給制度（上限20万円）との併用が可能です。対象工事が重複する場合は、両制度をうまく組み合わせることで自己負担を大幅に軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'suita-senior-support',
    title: '吹田市 高齢者生活支援サービス事業',
    organization: '吹田市',
    type: 'local',
    maxAmount: '利用料の減免あり',
    maxAmountNum: 5,
    category: 'living',
    prefecture: '大阪府',
    tags: ['吹田市', '高齢者支援', '生活支援'],
    eligibility: '吹田市在住の65歳以上でひとり暮らし等の高齢者',
    applicationPeriod: '通年',
    description: '吹田市が実施する高齢者向け生活支援サービス事業です。配食サービスや緊急通報装置の設置など日常生活を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>吹田市 高齢者生活支援サービス事業は、<span class="marker">ひとり暮らしの高齢者や高齢者のみ世帯</span>の日常生活を総合的に支援する事業です。</p><p>配食サービス、緊急通報装置の貸与、家事援助サービスなど、在宅生活を続けるためのさまざまな支援メニューが用意されています。介護保険サービスだけではカバーしきれない生活上の困りごとに対応します。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>吹田市に住民登録のある65歳以上の方で、以下のいずれかに該当する方が対象です。</p><div class="summary-box" data-title="対象となる方"><p>ひとり暮らしの高齢者</p><p>高齢者のみの世帯</p><p>日中独居となる高齢者</p></div><p>吹田市役所高齢福祉室または地域包括支援センターに相談のうえ申請します。<strong>介護認定の有無にかかわらず利用可能</strong>なサービスもあります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>配食サービスは<strong>1食あたり数百円の自己負担</strong>で利用でき、安否確認も兼ねています。緊急通報装置は無料で貸与されるものもあります。</p><p><span class="marker">サービスの種類によって利用条件や自己負担額が異なります</span>。まずは地域包括支援センターに相談して、最適なサービスを紹介してもらいましょう。</p><div class="note-box">介護保険サービスと併用できるものと、いずれか一方のみ利用可能なものがあります。ケアマネジャーと相談しながら最適な組み合わせを選択してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.suita.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 高槻市（大阪府）3件: childcare, education, medical
  // ────────────────────────────────────────────────
  {
    slug: 'takatsuki-child-medical',
    title: '高槻市 子ども医療費助成制度',
    organization: '高槻市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '大阪府',
    tags: ['高槻市', '子ども医療費', '助成金'],
    eligibility: '高槻市に住所を有する18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '高槻市が実施する子ども医療費助成制度です。18歳到達後最初の3月31日までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>大阪と京都のほぼ中間に位置する高槻市は、交通の利便性と豊かな自然環境を兼ね備えたベッドタウンです。子育て世帯の医療費負担を軽減し、<span class="marker-green">所得制限なく全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高槻市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>高槻市役所子ども未来部または各支所で手続き可能です。<strong>「子ども医療証」</strong>の交付を受け、大阪府内の医療機関で提示すると窓口負担がなくなります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>府内医療機関では<strong>医療証提示で窓口負担ゼロ</strong>です。入院時の食事療養費の標準負担額も助成対象となります。</p><p><span class="marker">府外受診の場合は償還払い方式</span>となります。受診後に領収書を添えて市役所に申請してください。</p><div class="note-box">保険適用外の費用（差額ベッド代、容器代、文書料、自費の予防接種など）は助成対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-education-scholarship',
    title: '高槻市 奨学金制度',
    organization: '高槻市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '大阪府',
    tags: ['高槻市', '奨学金', '教育支援'],
    eligibility: '高槻市在住の高校生・大学生等で、経済的理由により修学が困難な方',
    applicationPeriod: '毎年4月〜5月頃',
    description: '高槻市が実施する奨学金制度です。経済的に修学困難な生徒・学生に対し、返還不要の給付型奨学金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 奨学金制度は、<span class="marker">経済的理由により修学が困難な高校生・大学生等</span>に対して奨学金を給付する制度です。</p><p>高槻市独自の給付型奨学金で、返還の必要がありません。家庭の経済事情にかかわらず、意欲ある学生が学びを続けられるよう支援しています。高校・高等専門学校・大学・短期大学・専修学校等の学生が対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="応募資格"><p>高槻市内に住所を有する保護者の子であること</p><p>高等学校、大学等に在学中または進学予定であること</p><p>学業成績が一定基準を満たすこと</p><p>世帯の所得が基準額以下であること</p></div><p>毎年4月〜5月頃に市の広報やホームページで募集が告知されます。<strong>在学証明書、成績証明書、所得証明書</strong>を添えて申請します。</p><p><span class="marker">募集人数には限りがあるため、選考により決定</span>されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>月額最大3万円</strong>で、学校の種類や通学形態に応じて異なります。返還は一切不要の給付型です。</p><p><span class="marker">他の奨学金制度との併用可否は個別に確認が必要</span>です。日本学生支援機構の奨学金と併用できる場合もあります。</p><div class="highlight-box">高槻市の奨学金は給付型のため、卒業後の返済負担がありません。対象となる方はぜひ積極的に申請してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'takatsuki-vaccination-support',
    title: '高槻市 高齢者予防接種費用助成',
    organization: '高槻市',
    type: 'local',
    maxAmount: '接種費用の全額または一部',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['高槻市', '予防接種', '助成金'],
    eligibility: '高槻市に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月頃（インフルエンザ）、通年（肺炎球菌）',
    description: '高槻市が実施する高齢者向け予防接種費用助成です。インフルエンザや肺炎球菌ワクチンの接種費用を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高槻市 高齢者予防接種費用助成は、<span class="marker">65歳以上の高齢者を対象にインフルエンザ・肺炎球菌ワクチンの接種費用</span>を助成する制度です。</p><p>高齢者は感染症にかかると重症化するリスクが高いため、予防接種による感染予防が重要です。高槻市では接種費用の一部を公費で負担し、高齢者の健康維持を支援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>高槻市に住民登録のある65歳以上の方が対象です（一部60〜64歳の方も対象になる場合があります）。</p><div class="summary-box" data-title="接種の流れ"><p>市から届く案内通知を確認</p><p>市内の協力医療機関に予約</p><p>健康保険証を持参して接種</p><p>窓口で自己負担分のみ支払い</p></div><p><strong>事前の申請は不要</strong>で、協力医療機関で直接接種を受けることができます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>インフルエンザ予防接種は<strong>自己負担1,500円程度</strong>で接種可能です（残りは市が負担）。生活保護世帯は自己負担なしで接種できます。</p><p><span class="marker">肺炎球菌ワクチンは対象年齢が限定されている</span>ため、通知が届いた年度内に接種することが大切です。</p><div class="note-box">市外の医療機関で接種した場合は、費用の払い戻し手続きが必要です。領収書と予診票の写しを保管してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.takatsuki.osaka.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 倉敷市（岡山県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'kurashiki-child-medical',
    title: '倉敷市 子ども医療費助成制度',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '岡山県',
    tags: ['倉敷市', '子ども医療費', '助成金'],
    eligibility: '倉敷市に住所を有する中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '倉敷市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生（15歳到達後最初の3月31日）まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>美観地区で有名な倉敷市は、岡山県第2の都市として約47万人の人口を擁しています。子育て世帯の医療費負担軽減のため、通院・入院・調剤いずれも助成対象です。</p><p><span class="marker-green">所得制限なく対象年齢のすべての子どもが利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>倉敷市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>倉敷市役所子育て支援課または各支所で手続きできます。出生届・転入届と同時の申請がスムーズです。<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>岡山県内の医療機関では、<strong>受給資格証を提示することで窓口負担なし</strong>で受診できます。入院時の食事代も助成対象です。</p><p><span class="marker">県外の医療機関を受診した場合は、領収書を持って償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は対象外です。学校でのケガは日本スポーツ振興センターの災害共済給付が優先適用されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-housing-seismic',
    title: '倉敷市 木造住宅耐震改修補助事業',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'housing',
    prefecture: '岡山県',
    tags: ['倉敷市', '耐震改修', '補助金'],
    eligibility: '倉敷市内の旧耐震基準で建築された木造住宅の所有者',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '倉敷市が実施する木造住宅耐震改修補助事業です。旧耐震基準の木造住宅の耐震改修工事に最大120万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 木造住宅耐震改修補助事業は、<span class="marker">昭和56年5月31日以前に着工された旧耐震基準の木造住宅</span>の耐震改修工事に対して補助金を交付する制度です。</p><p>2018年の西日本豪雨で大きな被害を受けた倉敷市では、住宅の安全性向上に積極的に取り組んでいます。耐震診断の結果、補強が必要と判定された住宅が対象で、<strong>最大120万円</strong>の補助が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の要件"><p>昭和56年5月31日以前に着工の木造住宅</p><p>倉敷市内に所在すること</p><p>耐震診断の結果、評点が1.0未満であること</p><p>市税の滞納がないこと</p></div><p>倉敷市役所建築指導課に申請します。耐震診断結果報告書、改修設計図書、工事見積書が必要です。</p><p><span class="marker">工事着手前に交付決定を受けること</span>が必須条件です。まずは無料の耐震診断の申し込みから始めましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の一部で、<strong>上限120万円</strong>です。耐震改修と同時に行うリフォーム工事との連携も可能です。</p><p><span class="marker">無料の耐震診断を先に受けることで、住宅の現状と必要な改修内容を把握</span>できます。</p><div class="highlight-box">倉敷市では耐震シェルターや耐震ベッドの設置補助（上限30万円）も別途実施しています。改修が難しい場合の選択肢として検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kurashiki-startup-support',
    title: '倉敷市 創業支援補助金',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '岡山県',
    tags: ['倉敷市', '創業支援', '補助金'],
    eligibility: '倉敷市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜翌年1月（予算に達し次第終了）',
    description: '倉敷市が実施する創業支援補助金です。市内での新規創業に必要な経費を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>倉敷市 創業支援補助金は、<span class="marker">倉敷市内で新たに事業を開始する方</span>の創業に要する費用を支援する制度です。</p><p>水島コンビナートをはじめとする工業都市と、美観地区を擁する観光都市の二面性を持つ倉敷市では、多様な業種での創業を応援しています。店舗改装費、設備導入費、広告宣伝費などが補助対象です。</p><p>補助率は対象経費の2分の1以内で、<strong>上限100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請の要件"><p>倉敷市内で新規に創業すること（創業後1年以内も対象）</p><p>市の創業支援事業計画に基づく支援を受けていること</p><p>市税を滞納していないこと</p><p>暴力団等に関与していないこと</p></div><p>倉敷市商工課へ事業計画書、収支予算書、見積書を提出して申請します。</p><p><span class="marker">創業前に市の創業相談窓口でアドバイスを受けておく</span>と、申請時にスムーズに進められます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2分の1以内で、<strong>上限は100万円</strong>です。対象経費は店舗等借入費、設備費、広告費、法人登記費用などです。</p><p><span class="marker">補助金は後払い（精算払い）方式</span>のため、まず自己資金で支出し、事業完了後に補助金が交付されます。</p><div class="highlight-box">倉敷商工会議所が運営する創業支援施設やセミナーも活用できます。ビジネスプランのブラッシュアップから資金調達まで、総合的なサポートを受けられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 福山市（広島県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'fukuyama-child-medical',
    title: '福山市 乳幼児等医療費助成制度',
    organization: '福山市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['福山市', '子ども医療費', '助成金'],
    eligibility: '福山市に住所を有する中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '福山市が実施する乳幼児等医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 乳幼児等医療費助成制度は、<span class="marker">0歳から中学3年生（15歳到達後最初の3月31日）まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>広島県第2の都市である福山市は、ばらのまちとして全国に知られています。人口約46万人を擁する中核市として、子育て支援の充実に力を入れています。</p><p>通院・入院ともに対象で、<span class="marker-green">所得制限なくすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福山市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>福山市役所ネウボラ推進課、各支所・出張所で申請できます。出生届や転入届と同時の手続きがおすすめです。<strong>「乳幼児等医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>広島県内の医療機関では、<strong>受給者証の提示で窓口負担なし</strong>で受診できます。入院時の食事代は自己負担です。</p><p><span class="marker">県外の医療機関を受診した場合は、領収書を持参して償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、容器代など）は助成対象外です。学校管理下でのケガは日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-infertility-treatment',
    title: '福山市 不妊治療費助成事業',
    organization: '福山市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '広島県',
    tags: ['福山市', '不妊治療', '助成金'],
    eligibility: '福山市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了後6か月以内に申請）',
    description: '福山市が実施する不妊治療費助成事業です。一般不妊治療にかかる自己負担分を年間最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 不妊治療費助成事業は、<span class="marker">一般不妊治療（タイミング法・人工授精等）にかかる費用</span>の自己負担分を助成する制度です。</p><p>不妊治療は身体的・精神的な負担に加え、経済的負担も大きいことが知られています。福山市では保険適用後の自己負担分に対して助成を行い、治療を受けやすい環境を整えています。</p><p>助成額は1年度あたり<strong>上限10万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成の要件"><p>夫婦のいずれかが福山市に住民登録していること</p><p>医療保険に加入していること</p><p>医療機関で不妊症と診断されていること</p><p>市税を滞納していないこと</p></div><p>福山市役所ネウボラ推進課に申請します。医療機関が発行する<strong>不妊治療受診等証明書と医療費の領収書</strong>が必要です。</p><p><span class="marker">治療が終了した日から6か月以内に申請</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分で、<strong>1年度あたり上限10万円</strong>です。夫婦それぞれの治療費が対象となります。</p><p><span class="marker">保険適用となった特定不妊治療（体外受精・顕微授精）は高額療養費制度</span>も活用できます。複数の制度を組み合わせて経済的負担を軽減しましょう。</p><div class="note-box">年度をまたぐ治療の場合、それぞれの年度で申請が可能です。領収書は必ず保管しておいてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukuyama-housing-reform',
    title: '福山市 住宅リフォーム補助事業',
    organization: '福山市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '広島県',
    tags: ['福山市', '住宅リフォーム', '補助金'],
    eligibility: '福山市内に住所を有し、市内業者を利用して住宅をリフォームする方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '福山市が実施する住宅リフォーム補助事業です。市内業者による住宅改修工事に最大20万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福山市 住宅リフォーム補助事業は、<span class="marker">市内の施工業者を利用した住宅改修工事</span>に対して費用の一部を補助する制度です。</p><p>住環境の向上と地域経済の活性化を目的としています。外壁・屋根の修繕、トイレ・浴室の改修、バリアフリー化、省エネ改修など幅広い工事が対象です。</p><p>補助率は対象工事費の10%で、<strong>上限は20万円</strong>です。<span class="marker-green">市内に本店を有する施工業者を利用することが条件</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の要件"><p>福山市内に住所を有すること</p><p>改修する住宅が市内に所在し、自ら居住していること</p><p>市内業者による30万円以上の工事であること</p><p>市税を滞納していないこと</p></div><p>福山市役所住宅課に申請書を提出します。見積書、工事内容がわかる図面や写真が必要です。</p><p><span class="marker">必ず工事着手前に申請し、交付決定を受けてから着工</span>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の10%で、<strong>上限20万円</strong>です。工事費が30万円未満の場合は対象外となります。</p><p><span class="marker">先着順で予算枠が埋まり次第受付終了</span>となります。年度始めの早い段階での申請をおすすめします。</p><div class="highlight-box">福山市では耐震改修補助や高齢者向け住宅改修補助など、他の住宅関連制度も複数あります。併用できる場合もあるので、窓口で併せて確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 呉市（広島県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'kure-child-medical',
    title: '呉市 乳幼児等医療費助成制度',
    organization: '呉市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['呉市', '子ども医療費', '助成金'],
    eligibility: '呉市に住所を有する中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '呉市が実施する乳幼児等医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 乳幼児等医療費助成制度は、<span class="marker">0歳から中学3年生（15歳到達後最初の3月31日）まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>海軍の街として歴史を持つ呉市は、造船業を基幹産業とする広島県南部の中核都市です。子育て世帯が安心して暮らせるよう、医療費助成をはじめとする子育て支援に取り組んでいます。</p><p>通院・入院・調剤すべてが対象で、<span class="marker-green">所得制限なく全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>呉市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>呉市役所子育て支援課または各市民センターで手続きできます。<strong>「乳幼児等医療費受給者証」</strong>が交付されます。出生届や転入届と合わせて申請するとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>広島県内の医療機関では、<strong>受給者証を提示するだけで窓口負担なし</strong>で受診できます。通院・入院ともに保険診療分が全額助成されます。</p><p><span class="marker">県外の医療機関を受診した場合は、領収書を持参して償還払い</span>の手続きが必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種費用、薬の容器代など）は助成対象外です。交通事故など第三者行為による傷病は届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-startup-support',
    title: '呉市 創業チャレンジ補助金',
    organization: '呉市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '広島県',
    tags: ['呉市', '創業支援', '補助金'],
    eligibility: '呉市内で新たに創業する方、または創業後1年以内の方',
    applicationPeriod: '毎年4月〜12月（予算に達し次第終了）',
    description: '呉市が実施する創業チャレンジ補助金です。市内での新規創業に必要な初期費用を最大100万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 創業チャレンジ補助金は、<span class="marker">呉市内で新たに事業を開始する起業家</span>を支援する補助金制度です。</p><p>人口減少が進む呉市では、地域経済の活性化と新たな雇用創出のために創業支援を重点施策として位置づけています。飲食業、小売業、サービス業、IT関連など業種を問わず申請できます。</p><p>補助率は対象経費の3分の2以内で、<strong>上限100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請の要件"><p>呉市内で新規に創業すること（創業後1年以内も可）</p><p>市が認定する創業支援プログラムを受講済みであること</p><p>市税を滞納していないこと</p><p>5年以上継続して事業を営む意思があること</p></div><p>呉市役所産業部商工振興課に事業計画書等を提出して申請します。</p><p><span class="marker">書類審査とプレゼンテーション審査</span>を経て採択者が決定されます。事業計画の実現可能性が重視されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の3分の2以内で、<strong>上限100万円</strong>です。店舗改装費、機械設備費、広告宣伝費、法人登記費用などが対象です。</p><p><span class="marker">補助金は精算払い方式のため、まず自己資金で支出</span>し、事業完了報告後に補助金が交付されます。資金計画をしっかり立てておきましょう。</p><div class="highlight-box">呉市では空き店舗を活用した創業に対する家賃補助制度も別途あります。中心市街地の空き店舗活用を検討している方はあわせて確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kure-migration-support',
    title: '呉市 移住定住促進補助金',
    organization: '呉市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'living',
    prefecture: '広島県',
    tags: ['呉市', '移住支援', '補助金'],
    eligibility: '呉市外から呉市へ移住し、定住する意思のある方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '呉市が実施する移住定住促進補助金です。市外から呉市へ移住する方に引越費用や住居費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>呉市 移住定住促進補助金は、<span class="marker">市外から呉市へ移住し定住する方</span>に対して引越費用や住居取得・賃貸に係る初期費用を補助する制度です。</p><p>瀬戸内海に面した温暖な気候と豊かな自然環境を持つ呉市は、移住先としての魅力を積極的にPRしています。特に子育て世帯やUIターン者に対する支援を手厚くしています。</p><p>補助額は最大<strong>30万円</strong>で、世帯構成に応じて加算があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の要件"><p>呉市外から呉市へ転入すること</p><p>5年以上呉市に定住する意思があること</p><p>就業または起業していること（予定含む）</p><p>市税等の滞納がないこと</p></div><p>呉市役所企画部地域協働課へ申請書類を提出します。転入届出後に手続きしてください。</p><p><span class="marker">転入日から6か月以内に申請</span>が必要です。事前相談も受け付けています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は基本額に世帯加算等を加えた額で、<strong>上限30万円</strong>です。18歳未満の子どもがいる世帯にはさらに加算があります。</p><p><span class="marker">引越費用、住居の敷金・礼金、住宅取得に係る費用</span>などが補助対象となります。</p><div class="note-box">5年以内に転出した場合は補助金の返還を求められることがあります。また、企業の転勤による転入は対象外となる場合があります。詳細は事前に市へご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
