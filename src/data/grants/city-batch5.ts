import { Grant } from '@/lib/types';

export const cityGrantsBatch5: Grant[] = [
  // ────────────────────────────────────────────────
  // 品川区（東京都）3件: childcare, education, medical
  // ────────────────────────────────────────────────
  {
    slug: 'shinagawa-child-medical',
    title: '品川区 子ども医療費助成制度',
    organization: '品川区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['品川区', '子ども医療費', '助成金'],
    eligibility: '品川区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '品川区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの医療費を助成する制度です。通院・入院・調剤のいずれも対象となります。</p><p>品川区は子育て支援に力を入れている自治体のひとつで、所得制限なしで医療費助成を受けられるのが特徴です。都内でもいち早く高校生世代まで対象を拡大しました。</p><p><span class="marker-green">保険診療であれば自己負担なしで医療を受けられます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>品川区に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーがわかる書類</p></div><p>品川区役所の子育て支援課、または各地域センターで申請できます。出生届・転入届と同時に手続きするとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>都内の医療機関では<strong>保険診療の自己負担分が無料</strong>になります。受給者証を窓口に提示するだけで利用できます。</p><p><span class="marker">都外の医療機関では一旦支払い後、申請による償還払い</span>となります。領収書を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、健康診断、予防接種など）は対象外です。学校でのケガは災害共済給付制度が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shinagawa-study-support',
    title: '品川区 学習塾等受講料助成',
    organization: '品川区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'education',
    prefecture: '東京都',
    tags: ['品川区', '学習塾', '教育支援'],
    eligibility: '品川区在住の中学3年生・高校3年生相当の子どもがいる一定所得以下の世帯',
    applicationPeriod: '毎年4月〜5月頃',
    description: '品川区が実施する学習塾等の受講料助成です。受験を控えた子どもの教育費を最大20万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 学習塾等受講料助成は、<span class="marker">経済的な理由で塾や予備校に通うことが難しい家庭を支援</span>する制度です。学習塾、通信教育、各種受験対策講座の受講料が助成されます。</p><p>品川区は教育環境の整備に積極的に取り組んでおり、家庭の経済状況によって子どもの学習機会に差が生じないよう、この制度を設けています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者の要件"><p>品川区に住所を有すること</p><p>中学3年生または高校3年生相当であること</p><p>生活保護世帯または住民税非課税世帯であること</p></div><p>申請は品川区役所子育て支援課の窓口または郵送で行います。世帯の課税状況を確認する書類と、受講先の見積書や案内資料が必要です。</p><p><span class="marker-green">塾の種類は問わず、個人指導・集団指導・オンライン講座なども対象</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は実際に支払った受講料で、<strong>年間最大20万円</strong>が上限です。助成は現物給付ではなく、利用券（クーポン）方式で提供されます。</p><p>対象となる塾や講座は品川区が登録した事業者に限られますので、<span class="marker">申込前に登録事業者リストを確認</span>してください。</p><div class="highlight-box">申請は先着順ではなく要件を満たせば利用できますが、定員に達した場合は抽選となることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shinagawa-dental-checkup',
    title: '品川区 成人歯科健診助成',
    organization: '品川区',
    type: 'local',
    maxAmount: '無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['品川区', '歯科健診', '健康支援'],
    eligibility: '品川区に住所を有する20歳以上の区民',
    applicationPeriod: '通年',
    description: '品川区が実施する成人歯科健診の助成制度です。指定歯科医院で無料の歯科健診を受けられます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>品川区 成人歯科健診助成は、<span class="marker">20歳以上の区民を対象に無料で歯科健診を提供</span>する制度です。歯周病の早期発見や口腔ケアの促進を目的としています。</p><p>歯周病は全身の健康にも影響を及ぼすことが近年の研究で明らかになっており、品川区では定期的な歯科受診を促進するためにこの制度を設けています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>品川区内に住所がある20歳以上の方が対象です。事前の申請は不要で、<span class="marker-green">品川区指定の歯科医院に直接予約</span>するだけで利用できます。</p><div class="summary-box" data-title="受診時の持ち物"><p>健康保険証</p><p>品川区から届く受診票（届いていない場合は歯科医院で発行可能）</p></div><p>受診票が届いていない場合でも、歯科医院の窓口で対応してもらえます。年度内に1回利用可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>歯科健診にかかる費用は全額品川区が負担</strong>し、自己負担はありません。健診内容にはむし歯チェック、歯周病検査、口腔内の状態確認が含まれます。</p><p><span class="marker">治療が必要と判断された場合の治療費は通常の保険診療</span>となりますのでご注意ください。</p><div class="note-box">年度内に1回のみ受診可能です。指定医療機関の一覧は品川区のホームページで確認できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.shinagawa.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 目黒区（東京都）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'meguro-child-medical',
    title: '目黒区 子ども医療費助成制度',
    organization: '目黒区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['目黒区', '子ども医療費', '助成金'],
    eligibility: '目黒区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '目黒区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>目黒区は住みやすさランキングでも上位に入る人気の住宅地で、子育て世帯の流入が多い地域です。医療費助成を通じて、安心して子育てができる環境を整えています。</p><p>通院・入院・調剤のいずれも対象で、<span class="marker-green">所得制限なしで全世帯が利用</span>できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>目黒区に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバーカードまたは通知カード</p></div><p>目黒区総合庁舎の子育て支援課、または碑文谷保健センターなどで申請できます。出生届や転入届と同時に手続きするとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>都内の医療機関では<strong>保険診療の自己負担分が無料</strong>になります。「子ども医療証」を医療機関の窓口で提示してください。</p><p><span class="marker">都外での受診は後日、償還払い方式で助成</span>されます。領収書を忘れずに保管してください。</p><div class="highlight-box">生活保護を受けている場合は医療扶助が優先されます。他の医療費助成制度との併用はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'meguro-housing-reform',
    title: '目黒区 住宅リフォーム資金助成',
    organization: '目黒区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['目黒区', '住宅リフォーム', '補助金'],
    eligibility: '目黒区内に住所を有し、区内の住宅をリフォームする個人',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '目黒区が実施する住宅リフォーム資金の助成制度です。区内業者による工事で最大20万円が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 住宅リフォーム資金助成は、区民の<span class="marker">住環境の向上と区内産業の活性化</span>を目的とした制度です。バリアフリー改修、省エネ改修、一般的なリフォーム工事が対象となります。</p><p>目黒区は築年数の経った集合住宅も多く、リフォーム需要の高い地域です。区内業者を利用することで、地域経済の活性化にもつながっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請の要件"><p>目黒区内に住所があること</p><p>工事費用が20万円以上であること</p><p>目黒区内の施工業者が工事を行うこと</p><p>工事着手前に申請すること</p></div><p>申請は目黒区役所の産業経済課で受け付けています。工事見積書、工事箇所の写真、住宅の所有がわかる書類が必要です。</p><p><span class="marker-green">必ず工事着手前に申請してください</span>。着手後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は工事費用の<strong>10%（上限20万円）</strong>です。バリアフリー工事の場合は別途介護保険の住宅改修費と併用できる場合があります。</p><p><span class="marker">毎年予算枠があり、先着順で受付</span>が終了します。年度の早い時期に申請するのがおすすめです。</p><div class="note-box">店舗・事務所部分のリフォームは対象外です。居住スペースの工事に限ります。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'meguro-senior-support',
    title: '目黒区 高齢者見守り・生活支援事業',
    organization: '目黒区',
    type: 'local',
    maxAmount: '各種サービス無料',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '東京都',
    tags: ['目黒区', '高齢者支援', '見守り'],
    eligibility: '目黒区に住所を有する65歳以上のひとり暮らし高齢者等',
    applicationPeriod: '通年',
    description: '目黒区が実施する高齢者の見守り・生活支援事業です。ひとり暮らし高齢者に緊急通報システムや配食サービスを提供します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>目黒区 高齢者見守り・生活支援事業は、<span class="marker">65歳以上のひとり暮らし高齢者や高齢者のみの世帯</span>を対象に、安心して在宅生活を続けられるよう各種支援を行う事業です。</p><p>緊急通報システムの貸与、配食サービス、見守り訪問など、複数のサービスが用意されています。目黒区は高齢化率が上昇傾向にあり、地域での見守り体制の強化に力を入れています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主なサービス内容"><p>緊急通報システム（ペンダント型）の貸与</p><p>配食サービス（安否確認を兼ねた食事の宅配）</p><p>訪問による安否確認・見守り</p></div><p>目黒区の地域包括支援センターまたは高齢福祉課で申請します。ケアマネジャーを通じての申請も可能です。</p><p><span class="marker-green">サービスの利用は原則無料</span>ですが、配食サービスは食材費の一部自己負担があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>緊急通報システムの設置費・月額利用料は無料</strong>です。ボタンひとつで民間のコールセンターに通報でき、救急車の手配などを行ってもらえます。</p><p>配食サービスは<span class="marker">1食あたり400円程度の自己負担</span>で、栄養バランスのとれた食事が届きます。</p><div class="note-box">介護保険サービスを利用中の方も併用可能です。詳細は担当の地域包括支援センターにご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.meguro.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 大田区（東京都）3件: childcare, employment, housing
  // ────────────────────────────────────────────────
  {
    slug: 'ota-child-medical',
    title: '大田区 子ども医療費助成制度',
    organization: '大田区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['大田区', '子ども医療費', '助成金'],
    eligibility: '大田区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '大田区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、医療機関で支払う保険診療の自己負担分を助成する制度です。</p><p>大田区は東京23区で最も面積が広く、ファミリー層も多い地域です。通院・入院・調剤すべてが助成対象となり、所得制限は設けられていません。</p><p><span class="marker-green">子育て世帯の医療費負担を大幅に軽減</span>する制度として広く利用されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大田区に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバー確認書類</p></div><p>大田区役所のこども家庭部、または各特別出張所で申請できます。出生届や転入届と同時に手続きすると便利です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>都内の医療機関では<strong>保険診療の自己負担が無料</strong>です。「子ども医療証」を保険証と一緒に窓口に提示してください。</p><p><span class="marker">都外の医療機関で受診した場合は、後日償還払いの手続き</span>が必要です。領収書と診療明細書を保管しておきましょう。</p><div class="highlight-box">交通事故など第三者行為による医療費は対象外となることがあります。事前に区へご相談ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'ota-startup-support',
    title: '大田区 創業支援補助金',
    organization: '大田区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '東京都',
    tags: ['大田区', '創業支援', '補助金'],
    eligibility: '大田区内で新たに事業を開始する個人または法人',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '大田区が実施する創業支援補助金です。区内での創業に必要な初期費用を最大30万円補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 創業支援補助金は、<span class="marker">区内で新たに創業する方の初期費用を最大30万円補助</span>する制度です。大田区は町工場をはじめとするものづくりの街として知られ、新規事業者の参入を積極的に支援しています。</p><p>店舗・事務所の賃借料、設備費、広告宣伝費など、創業に直接必要な経費が補助対象となります。個人事業主・法人のどちらでも申請可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請の要件"><p>大田区内で新たに事業を開始すること</p><p>創業計画書を作成していること</p><p>大田区が指定する創業セミナーを受講済みであること</p><p>税金の滞納がないこと</p></div><p>申請は大田区産業振興協会の窓口で受け付けています。創業計画書のほか、見積書や事業内容がわかる資料を添付します。</p><p><span class="marker-green">創業前でも申請可能</span>ですが、交付決定後6か月以内に開業届を提出する必要があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助率は対象経費の<strong>2/3以内で、上限30万円</strong>です。賃借料は6か月分まで、設備費は1件30万円までが対象となります。</p><p><span class="marker">補助金は後払い方式</span>のため、事業者が先に費用を支払い、実績報告後に補助金が振り込まれます。</p><div class="note-box">風俗営業やギャンブル関連事業は対象外です。フランチャイズの場合も対象外となることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'ota-seismic-retrofit',
    title: '大田区 木造住宅耐震改修助成',
    organization: '大田区',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'housing',
    prefecture: '東京都',
    tags: ['大田区', '耐震改修', '助成金'],
    eligibility: '大田区内に昭和56年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '毎年4月〜翌年1月頃',
    description: '大田区が実施する木造住宅の耐震改修助成制度です。旧耐震基準の住宅の改修工事に最大150万円が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大田区 木造住宅耐震改修助成は、<span class="marker">昭和56年5月以前の旧耐震基準で建てられた木造住宅</span>の耐震改修工事費用を助成する制度です。首都直下地震への備えとして、区は住宅の耐震化を重点的に推進しています。</p><p>大田区は木造住宅密集地域を多く抱えており、地震による倒壊リスクの軽減が喫緊の課題です。まず無料の耐震診断を受け、その結果に基づいて改修工事を行う流れになります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大田区内に旧耐震基準の木造住宅を所有する方が対象です。自己居住用の住宅に限ります。</p><div class="summary-box" data-title="手続きの流れ"><p>1. 無料耐震診断の申込・実施</p><p>2. 耐震改修計画の策定</p><p>3. 助成金の交付申請</p><p>4. 工事実施・完了報告</p></div><p><span class="marker-green">耐震診断は区が費用を全額負担</span>しますので、まずは気軽に診断を受けてみましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は耐震改修工事費の<strong>最大2/3、上限150万円</strong>です。高齢者世帯や非課税世帯はさらに上乗せされる場合があります。</p><p><span class="marker">国や東京都の補助制度と併用できる</span>ため、合わせて利用すると自己負担をさらに軽減できます。</p><div class="highlight-box">耐震シェルターや防災ベッドの設置も別途助成制度があります。建て替えが難しい場合の選択肢として検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.ota.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 世田谷区（東京都）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'setagaya-child-medical',
    title: '世田谷区 子ども医療費助成制度',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['世田谷区', '子ども医療費', '助成金'],
    eligibility: '世田谷区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '世田谷区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療自己負担分を助成する制度です。</p><p>世田谷区は東京23区で最も人口が多く、子育て世帯も数多く居住しています。通院・入院・調剤のすべてが対象となり、所得制限は設けられていません。</p><p><span class="marker-green">都内最大の人口を持つ区ならではの充実した子育て医療支援</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>世田谷区に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバー確認書類</p></div><p>世田谷区役所の子ども・若者部、各総合支所のくみん窓口で申請できます。出生届や転入届と一緒に手続きすると効率的です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>都内の医療機関では<strong>保険診療の自己負担分が無料</strong>となります。「子ども医療証」を保険証とともに提示してください。</p><p><span class="marker">都外の医療機関での受診は償還払い</span>となり、後日区に申請して払い戻しを受けます。</p><div class="note-box">学校管理下のケガは「日本スポーツ振興センター災害共済給付制度」が優先されます。両方には申請できません。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'setagaya-education-voucher',
    title: '世田谷区 せたがや学び応援基金助成',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'education',
    prefecture: '東京都',
    tags: ['世田谷区', '学習支援', '教育助成'],
    eligibility: '世田谷区在住の経済的支援が必要な小中学生の保護者',
    applicationPeriod: '毎年4月〜6月頃',
    description: '世田谷区が実施する学び応援基金による教育助成です。学用品費や課外活動費を最大10万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 せたがや学び応援基金助成は、<span class="marker">経済的に困難な状況にある子どもの学びを支える</span>ための制度です。学用品費、通学用品費、校外活動費などの教育関連費用を助成します。</p><p>世田谷区独自の基金を活用した制度で、就学援助とは別に利用できます。区内の子どもたちが経済的な理由で学習機会を失わないよう、幅広くサポートしています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>世田谷区に住所を有する小中学生の保護者</p><p>生活保護世帯・住民税非課税世帯であること</p><p>就学援助を受給中であること</p></div><p>申請は世田谷区教育委員会の窓口または郵送で行います。学校を通じて案内が届く場合もあります。</p><p><span class="marker-green">塾代・習い事費用にも充てられる</span>のがこの制度の大きな特徴です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>年間最大10万円</strong>です。学用品費、課外活動費、体験学習費など、子どもの成長に関わる幅広い費用が対象となります。</p><p><span class="marker">領収書の提出による実費精算方式</span>です。使途の報告が必要ですので、領収書は必ず保管しておきましょう。</p><div class="highlight-box">基金への寄付も受け付けており、区民や企業から寄せられた寄付金がこの制度の原資となっています。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'setagaya-eco-housing',
    title: '世田谷区 環境配慮型住宅リノベーション補助',
    organization: '世田谷区',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '東京都',
    tags: ['世田谷区', '省エネ住宅', '補助金'],
    eligibility: '世田谷区内の住宅に省エネリフォームを行う所有者',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '世田谷区が実施する省エネ住宅リノベーション補助金です。断熱改修や太陽光発電設備の設置に最大40万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>世田谷区 環境配慮型住宅リノベーション補助は、<span class="marker">住宅の省エネ改修を通じて脱炭素社会の実現を目指す</span>補助制度です。窓の断熱改修、高効率給湯器の導入、太陽光発電システムの設置などが対象です。</p><p>世田谷区は2050年カーボンゼロを目標に掲げており、住宅部門のCO2排出削減を重点施策として推進しています。区民の環境意識も高く、毎年多くの申請が寄せられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>世田谷区内に住宅を所有し、省エネリフォームを計画している方が対象です。</p><div class="summary-box" data-title="対象となる工事"><p>窓・壁・屋根の断熱改修</p><p>高効率給湯器（エコキュート等）の導入</p><p>太陽光発電システムの設置</p><p>蓄電池の設置</p></div><p><span class="marker-green">工事着手前に申請が必要</span>です。区のホームページからダウンロードできる申請書類に見積書等を添えて提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は工事内容によって異なり、<strong>断熱改修は最大20万円、太陽光発電は最大20万円で合計最大40万円</strong>が受けられます。</p><p><span class="marker">国の住宅省エネ補助金や東京都の助成制度と併用可能</span>なケースがあり、組み合わせることで大幅に自己負担を減らせます。</p><div class="note-box">賃貸住宅のオーナーも申請可能ですが、テナントが直接申請することはできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.setagaya.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 渋谷区（東京都）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'shibuya-child-medical',
    title: '渋谷区 子ども医療費助成制度',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['渋谷区', '子ども医療費', '助成金'],
    eligibility: '渋谷区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '渋谷区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療自己負担分を助成する制度です。</p><p>渋谷区は繁華街のイメージが強いですが、住宅地も多く子育て世帯も増えています。通院・入院・調剤のすべてが対象で、所得制限はありません。</p><p>IT企業の集積地でもある渋谷区は、<span class="marker-green">オンラインでの手続きにも対応</span>しており、忙しい子育て世帯にとって利用しやすい仕組みです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>渋谷区に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバー確認書類</p></div><p>渋谷区役所の子ども青少年課で申請できます。渋谷区はオンライン申請にも対応しているため、来庁せずに手続きすることも可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>都内の医療機関では<strong>保険診療の自己負担分が無料</strong>です。「子ども医療証」を窓口で提示します。</p><p><span class="marker">都外の医療機関で受診した場合は償還払い</span>の手続きが必要です。申請書と領収書を提出します。</p><div class="highlight-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shibuya-housing-subsidy',
    title: '渋谷区 住み替え支援家賃助成',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '月額最大3.5万円（最長3年）',
    maxAmountNum: 126,
    category: 'housing',
    prefecture: '東京都',
    tags: ['渋谷区', '家賃助成', '住み替え支援'],
    eligibility: '渋谷区内で民間賃貸住宅に住み替える高齢者世帯・障害者世帯・子育て世帯',
    applicationPeriod: '通年',
    description: '渋谷区が実施する住み替え支援家賃助成です。区内で住み替えが必要な世帯に月額最大3.5万円の家賃助成を行います。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 住み替え支援家賃助成は、<span class="marker">建替えや取り壊しで転居を余儀なくされた方や、住環境改善のために住み替える方</span>を支援する制度です。月額最大3.5万円の家賃助成が最長3年間受けられます。</p><p>渋谷区は家賃水準が高い地域で、住み替えに伴う経済的負担が大きくなりがちです。特に高齢者・障害者・子育て世帯の住居の安定を確保するために設けられています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる世帯"><p>65歳以上の高齢者世帯</p><p>障害者手帳をお持ちの方がいる世帯</p><p>18歳未満の子どもがいる子育て世帯</p></div><p>申請は渋谷区役所の住宅政策課で受け付けます。現在の住居の退去理由がわかる書類（立退き通知など）と、新居の賃貸借契約書が必要です。</p><p><span class="marker-green">所得制限があり、世帯の合計所得が一定額以下であること</span>が条件です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は転居前後の家賃差額で、<strong>月額最大3.5万円が最長3年間（36か月）</strong>支給されます。合計で最大約126万円の助成となります。</p><p><span class="marker">区内の民間賃貸住宅への住み替えに限定</span>されます。区外への転居や公営住宅への入居は対象外です。</p><div class="note-box">助成期間中に所得が基準を超えた場合や、区外に転出した場合は助成が終了します。年1回の状況確認があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'shibuya-it-education',
    title: '渋谷区 プログラミング教育支援助成',
    organization: '渋谷区',
    type: 'local',
    maxAmount: '最大5万円',
    maxAmountNum: 5,
    category: 'education',
    prefecture: '東京都',
    tags: ['渋谷区', 'プログラミング教育', '助成金'],
    eligibility: '渋谷区在住の小中学生の保護者で一定の所得要件を満たす方',
    applicationPeriod: '毎年4月〜（定員に達し次第終了）',
    description: '渋谷区が実施するプログラミング教育支援助成です。小中学生のプログラミング教室受講料を最大5万円助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>渋谷区 プログラミング教育支援助成は、<span class="marker">区内の小中学生がプログラミングスクールや教室に通う費用</span>を助成する制度です。IT企業が集積する渋谷区ならではの教育支援策として注目されています。</p><p>デジタル社会の進展に伴い、プログラミング的思考は将来の基盤スキルとして重要性が増しています。渋谷区は「デジタル区」を標榜しており、子どものICT教育に力を入れています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>渋谷区に住所がある小中学生の保護者が対象です。世帯の所得が一定基準以下であることが要件となります。</p><div class="summary-box" data-title="対象となる費用"><p>プログラミングスクール・教室の月謝</p><p>オンラインプログラミング講座の受講料</p><p>ロボットプログラミング教室の受講料</p></div><p><span class="marker-green">区が指定する事業者だけでなく、一般のプログラミングスクールも対象</span>となります。申請時に教室の概要がわかる資料を提出してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は実費の2/3以内で、<strong>年間最大5万円</strong>が上限です。年度ごとに申請が必要です。</p><p><span class="marker">学校のプログラミング授業とは別に、校外の教室・スクール</span>を利用する場合が対象となります。</p><div class="note-box">ゲーム制作やアプリ開発など、プログラミングに関連する内容であれば幅広く対象となります。ただし純粋なパソコン教室（Word・Excel講座など）は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.shibuya.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 中野区（東京都）3件: childcare, living, housing
  // ────────────────────────────────────────────────
  {
    slug: 'nakano-child-medical',
    title: '中野区 子ども医療費助成制度',
    organization: '中野区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['中野区', '子ども医療費', '助成金'],
    eligibility: '中野区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '中野区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>中野区はサブカルチャーの街として知られる一方、住宅地も広がっており多くの子育て世帯が暮らしています。通院・入院・調剤すべてが助成対象で、所得制限はありません。</p><p><span class="marker-green">中野区独自の子育て支援施策と組み合わせて利用</span>することで、子育て費用の大幅な軽減が可能です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>中野区に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバー確認書類</p></div><p>中野区役所の子ども教育部、または各すこやか福祉センターで申請できます。出生届や転入届と同時の手続きが便利です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>都内の医療機関では<strong>保険診療の自己負担分が無料</strong>です。「子ども医療証」を窓口で保険証と一緒に提示してください。</p><p><span class="marker">都外で受診した場合は後日、区に領収書を提出して償還払い</span>の手続きを行います。</p><div class="note-box">他の公費医療制度（自立支援医療など）の対象となっている場合は、そちらが優先されます。併用の可否は事前にご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'nakano-living-support',
    title: '中野区 生活困窮者自立支援給付金',
    organization: '中野区',
    type: 'local',
    maxAmount: '月額最大7万円（最長3か月）',
    maxAmountNum: 21,
    category: 'living',
    prefecture: '東京都',
    tags: ['中野区', '生活支援', '自立支援'],
    eligibility: '中野区に住所を有する生活困窮状態にある方で、離職等により住居を失うおそれがある方',
    applicationPeriod: '通年',
    description: '中野区が実施する生活困窮者自立支援給付金です。離職等により生活に困窮する方に住居確保給付金として月額最大7万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 生活困窮者自立支援給付金は、<span class="marker">離職・廃業から2年以内、または休業等により収入が減少した方</span>の住居費を支援する制度です。生活の立て直しを図りながら、安定した住まいを確保するための給付金です。</p><p>中野区はひとり暮らしの若年世帯も多く、収入減少時の住居費負担が生活を圧迫しやすい地域です。この制度では家賃相当額を直接家主に支払う形で支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>離職・廃業から2年以内、または休業等で収入が減少</p><p>世帯の収入が基準額以下であること</p><p>世帯の預貯金が基準額以下であること</p><p>ハローワークへの求職申込と誠実な求職活動</p></div><p>申請は中野区の生活援護課の窓口で行います。離職を証明する書類、収入・預貯金の状況がわかる書類が必要です。</p><p><span class="marker-green">自立支援相談員が寄り添いながら就労支援も並行して行います</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は実際の家賃額で、<strong>単身世帯で月額最大約5.4万円、2人世帯で最大約7万円</strong>です。支給期間は原則3か月で、最長9か月まで延長が可能です。</p><p><span class="marker">給付金は家主や不動産管理会社に直接振り込まれ</span>、本人に現金が渡されるわけではありません。</p><div class="highlight-box">この制度は生活保護の手前のセーフティネットとして機能しています。生活保護を受給中の方は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'nakano-barrier-free',
    title: '中野区 バリアフリー住宅改修助成',
    organization: '中野区',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '東京都',
    tags: ['中野区', 'バリアフリー', '住宅改修'],
    eligibility: '中野区に住所を有する65歳以上の高齢者または障害のある方と同居する世帯',
    applicationPeriod: '通年',
    description: '中野区が実施するバリアフリー住宅改修助成です。高齢者や障害者の自宅のバリアフリー改修に最大20万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中野区 バリアフリー住宅改修助成は、<span class="marker">高齢者や障害のある方が安全に暮らせるよう住宅のバリアフリー化</span>を支援する制度です。手すりの設置、段差の解消、浴室・トイレの改修などが対象となります。</p><p>中野区は人口密度が高く、古い住宅も多い地域です。住み慣れた自宅で安全に暮らし続けるためのバリアフリー改修の需要が高まっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの設置（階段・浴室・トイレ等）</p><p>段差の解消（玄関・室内・浴室等）</p><p>滑り防止のための床材変更</p><p>引き戸への扉取替え</p></div><p>申請は中野区の介護・高齢者支援課で受け付けています。工事着手前に申請が必要で、ケアマネジャーと相談のうえ改修プランを作成します。</p><p><span class="marker-green">介護保険の住宅改修費と併用が可能</span>で、合わせて利用すると自己負担を大きく減らせます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は工事費の<strong>9割以内で、上限20万円</strong>です。住民税非課税世帯の場合は自己負担なしで利用できます。</p><p><span class="marker">介護保険の住宅改修費（上限20万円）と合わせると最大40万円</span>の支援を受けることが可能です。</p><div class="note-box">賃貸住宅の場合は家主の同意書が必要です。新築・増改築は対象外で、既存住宅の改修に限ります。</div>'
      }
    ],
    officialUrl: 'https://www.city.tokyo-nakano.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 杉並区（東京都）3件: childcare, education, medical
  // ────────────────────────────────────────────────
  {
    slug: 'suginami-child-medical',
    title: '杉並区 子ども医療費助成制度',
    organization: '杉並区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['杉並区', '子ども医療費', '助成金'],
    eligibility: '杉並区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '杉並区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療自己負担分を助成する制度です。</p><p>杉並区は緑豊かな住宅地として人気が高く、子育て世帯も多く住んでいます。通院・入院・調剤のすべてが助成対象で、所得制限は設けられていません。</p><p><span class="marker-green">子育てしやすい街づくりの柱として、医療費の心配なく子育てできる環境</span>を整備しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>杉並区に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバー確認書類</p></div><p>杉並区役所の子ども家庭部、または区民事務所で申請できます。出生届や転入届と同時に手続きするのが便利です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>都内の医療機関では<strong>保険診療の自己負担分が無料</strong>です。「子ども医療証」を保険証とともに窓口で提示してください。</p><p><span class="marker">都外の医療機関で受診した場合は、領収書を持参して償還払い</span>の手続きを行います。</p><div class="highlight-box">保険適用外の費用や、健康診断・予防接種などは助成の対象外です。学校でのケガは災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'suginami-scholarship',
    title: '杉並区 次世代育成基金奨学金',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'education',
    prefecture: '東京都',
    tags: ['杉並区', '奨学金', '教育支援'],
    eligibility: '杉並区在住の高校生・大学生で、学業優秀かつ経済的支援が必要な方',
    applicationPeriod: '毎年4月〜5月頃',
    description: '杉並区が実施する次世代育成基金による奨学金制度です。意欲ある若者の学びを最大30万円で支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 次世代育成基金奨学金は、<span class="marker">経済的理由で修学が困難な高校生・大学生を支援する給付型奨学金</span>です。返済不要の給付型なので、卒業後の負担がないのが大きな特徴です。</p><p>杉並区は「次世代育成基金」を設立し、区民や企業からの寄付をもとにこの奨学金制度を運営しています。未来を担う若者の学びを地域全体で応援する取り組みです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="応募要件"><p>杉並区に1年以上住所を有すること</p><p>高等学校、大学、専門学校等に在学中であること</p><p>学業成績が一定基準以上であること</p><p>世帯の収入が基準額以下であること</p></div><p>申請は杉並区教育委員会の窓口または郵送で行います。成績証明書、収入を証明する書類、志望理由書が必要です。</p><p><span class="marker-green">書類審査と面接により選考</span>が行われます。募集人数は年度により異なります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>給付額は<strong>高校生は年間最大15万円、大学生等は年間最大30万円</strong>です。返済不要の給付型です。</p><p><span class="marker">他の奨学金との併用も可能</span>ですが、同種の給付型奨学金を受給している場合は対象外となることがあります。</p><div class="note-box">給付期間は原則として正規の修学年限です。留年した場合は給付が停止されることがあります。受給中は年1回の報告書提出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'suginami-infertility-treatment',
    title: '杉並区 不妊治療費助成',
    organization: '杉並区',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '東京都',
    tags: ['杉並区', '不妊治療', '助成金'],
    eligibility: '杉並区に住所を有する不妊治療を受けている夫婦（事実婚を含む）',
    applicationPeriod: '通年（治療終了日から1年以内に申請）',
    description: '杉並区が実施する不妊治療費の助成制度です。保険適用後の自己負担分について最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>杉並区 不妊治療費助成は、<span class="marker">不妊治療にかかる保険適用後の自己負担分を最大10万円助成</span>する制度です。2022年から不妊治療が保険適用になりましたが、それでも治療費の負担は大きいため、区が独自に上乗せ助成を行っています。</p><p>体外受精や顕微授精などの特定不妊治療だけでなく、一般不妊治療（タイミング法・人工授精）も対象となっているのが杉並区の特徴です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>杉並区に住所を有する法律婚または事実婚の夫婦が対象です。治療開始日時点で杉並区に住所があることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成申請書</p><p>医療機関の受診証明書・領収書</p><p>夫婦の住民票（続柄記載のもの）</p><p>健康保険証のコピー</p></div><p><span class="marker-green">治療終了日から1年以内に申請</span>してください。年度をまたぐ治療の場合も、治療が一区切りした時点で申請可能です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は保険適用後の自己負担分で、<strong>1年度あたり最大10万円</strong>です。複数回の治療を合算して申請できます。</p><p><span class="marker">東京都の不妊治療費助成制度と併用可能</span>ですが、他の自治体の助成を受けた同一の治療については対象外となります。</p><div class="highlight-box">男性不妊治療も助成の対象です。精液検査や手術療法なども含めて申請できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.suginami.tokyo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 豊島区（東京都）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'toshima-child-medical',
    title: '豊島区 子ども医療費助成制度',
    organization: '豊島区',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['豊島区', '子ども医療費', '助成金'],
    eligibility: '豊島区に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '豊島区が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>豊島区は池袋を中心とした商業エリアのほか、住宅街も広がっています。かつて「消滅可能性都市」と指摘されたことをきっかけに、子育て支援の強化に大きく舵を切りました。通院・入院・調剤すべてが対象で、所得制限はありません。</p><p><span class="marker-green">子育て世帯の定住促進を目的とした重点施策</span>のひとつです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>豊島区に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>マイナンバー確認書類</p></div><p>豊島区役所の子育て支援課、または東部・西部区民事務所で申請できます。出生届や転入届と一緒に手続きするとスムーズです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>都内の医療機関では<strong>保険診療の自己負担分が無料</strong>になります。「子ども医療証」を保険証と一緒に窓口で提示してください。</p><p><span class="marker">都外で受診した場合は償還払いの手続き</span>が必要です。領収書と診療明細書を区に提出して払い戻しを受けます。</p><div class="note-box">生活保護受給世帯は医療扶助が優先されるため、この制度の対象外です。学校でのケガは災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'toshima-newlywed-housing',
    title: '豊島区 新婚・子育て世帯家賃助成',
    organization: '豊島区',
    type: 'local',
    maxAmount: '月額最大2.5万円（最長3年）',
    maxAmountNum: 90,
    category: 'housing',
    prefecture: '東京都',
    tags: ['豊島区', '家賃助成', '新婚・子育て'],
    eligibility: '豊島区に転入する新婚世帯（婚姻届提出後2年以内）または子育て世帯',
    applicationPeriod: '毎年4月〜（定員に達し次第終了）',
    description: '豊島区が実施する新婚・子育て世帯向け家賃助成です。区内への定住促進のため月額最大2.5万円を最長3年間助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 新婚・子育て世帯家賃助成は、<span class="marker">区内に転入する新婚世帯や子育て世帯の家賃を助成</span>する制度です。月額最大2.5万円が最長3年間支給されます。</p><p>豊島区は「消滅可能性都市」からの脱却を目指し、若い世帯の定住を促進するための施策に力を入れています。この家賃助成もその中核的な取り組みのひとつで、区への転入や区内での居住継続を後押ししています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる世帯"><p>婚姻届提出後2年以内の新婚世帯</p><p>小学校6年生以下の子どもがいる子育て世帯</p><p>世帯の合計所得が一定基準以下であること</p><p>豊島区に新たに転入するか、区内で転居すること</p></div><p>申請は豊島区役所の住宅課で受け付けています。婚姻届受理証明書（新婚世帯）、住民票、賃貸借契約書、所得証明書が必要です。</p><p><span class="marker-green">毎年度定員があり、先着順で受付</span>が終了しますので早めの申請がおすすめです。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は<strong>月額最大2.5万円で、最長3年間（36か月）</strong>の支給です。合計で最大90万円の家賃助成が受けられます。</p><p><span class="marker">豊島区内の民間賃貸住宅に限定</span>されます。UR賃貸住宅や公社住宅、社宅は対象外です。</p><div class="highlight-box">助成期間中に区外へ転出した場合は助成が終了します。途中で出産した場合は、子育て世帯としての要件でさらに延長できる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'toshima-small-business',
    title: '豊島区 中小企業設備投資助成金',
    organization: '豊島区',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '東京都',
    tags: ['豊島区', '中小企業支援', '設備投資'],
    eligibility: '豊島区内で事業を営む中小企業者で、設備投資を計画している方',
    applicationPeriod: '毎年4月〜（予算に達し次第終了）',
    description: '豊島区が実施する中小企業向けの設備投資助成金です。生産性向上のための設備導入に最大100万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊島区 中小企業設備投資助成金は、<span class="marker">区内中小企業の生産性向上・競争力強化のための設備投資</span>を支援する制度です。製造設備、IT機器、省エネ設備など、事業に必要な設備の導入費用が助成されます。</p><p>豊島区は池袋エリアを中心に多くの中小企業が活動しています。デジタル化やDX推進を支援することで、地域経済の活性化につなげることを目指しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請の要件"><p>豊島区内に事業所を有する中小企業者であること</p><p>直近の確定申告を行っていること</p><p>税金の滞納がないこと</p><p>導入する設備の金額が50万円以上であること</p></div><p>申請は豊島区役所の生活産業課で受け付けています。事業計画書、設備の見積書、直近の確定申告書の写しなどが必要です。</p><p><span class="marker-green">申請は設備導入前に行う必要があります</span>。交付決定前に購入した設備は対象外です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成率は対象経費の<strong>1/2以内で、上限100万円</strong>です。ITツール導入やデジタル化関連の設備は優先的に採択される傾向があります。</p><p><span class="marker">助成金は後払い方式</span>で、設備導入後の実績報告書を提出したあとに交付されます。</p><div class="note-box">リース・レンタル契約の設備は対象外です。購入（買い取り）のみが助成対象となります。また、車両の購入は原則対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.toshima.lg.jp/',
    publishedAt: '2026-03-11',
  },
];
