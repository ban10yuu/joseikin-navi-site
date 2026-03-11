import { Grant } from '@/lib/types';

export const cityGrantsBatch1: Grant[] = [
  // ────────────────────────────────────────────────
  // 札幌市（北海道）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'sapporo-child-medical',
    title: '札幌市 子ども医療費助成制度',
    organization: '札幌市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '北海道',
    tags: ['札幌市', '子ども医療費', '助成金'],
    eligibility: '札幌市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '札幌市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>札幌市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生までの子ども</span>を対象に、医療機関での保険診療の自己負担分を助成する制度です。</p><p>北海道の中でも人口が多い札幌市では、子育て世帯への支援を重点施策として位置づけており、この制度は市内の多くの家庭に利用されています。通院・入院ともに対象で、薬の処方も助成されます。</p><p>所得制限が設けられていますが、<span class="marker-green">多くの世帯が対象となる比較的緩やかな基準</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>札幌市内に住所がある子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>所得を証明する書類（転入の場合）</p></div><p>お住まいの区の区役所保険年金課で申請します。出生届や転入届と合わせて手続きするとスムーズです。申請後に「子ども医療費受給者証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>初診時のみ一部負担金（医科580円、歯科510円）</strong>がかかり、それ以外は無料です。入院は自己負担なしで助成されます。</p><p>保険適用外の費用（差額ベッド代、文書料など）は対象外です。また、<span class="marker">道外の医療機関を受診した場合は償還払い</span>（後日申請して払い戻し）となります。</p><div class="note-box">所得制限を超える場合でも、小学校就学前の子どもは一部助成が受けられる場合があります。詳細は区役所へお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sapporo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sapporo-housing-eco-reform',
    title: '札幌市 住宅エコリフォーム補助金',
    organization: '札幌市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '北海道',
    tags: ['札幌市', '住宅リフォーム', '省エネ'],
    eligibility: '札幌市内に所在する住宅の所有者で、省エネ改修工事を行う方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '札幌市が実施する住宅の省エネリフォーム補助金です。断熱改修や高効率設備の導入に最大50万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>札幌市 住宅エコリフォーム補助金は、<span class="marker">住宅の断熱性能向上や省エネ設備導入</span>を支援する制度です。寒冷地である札幌では暖房費が大きな生活コストとなるため、断熱改修への需要が特に高い地域です。</p><p>窓の断熱改修、壁・天井の断熱材追加、高効率ボイラーへの交換など、幅広い工事が対象となります。補助率は対象工事費の1/3で、<strong>最大50万円</strong>が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>札幌市内の自己所有住宅であること</p><p>市内の施工業者が工事を行うこと</p><p>工事着手前に申請すること</p></div><p>申請は札幌市住宅課の窓口または郵送で行います。工事見積書・住宅の図面・工事内容がわかる資料を添付します。</p><p><span class="marker-green">必ず工事着手前に申請する必要があります</span>。着手後の申請は受け付けられませんのでご注意ください。申請から交付決定まで約4週間かかります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の1/3で、上限は<strong>50万円</strong>です。窓の断熱改修だけでも10〜20万円程度の補助を受けられるケースが多いです。</p><p>毎年予算枠が設定されており、<span class="marker">先着順で予算に達し次第受付終了</span>となります。例年夏頃には予算上限に達することが多いため、早めの申請がおすすめです。</p><div class="highlight-box">国の住宅省エネ補助金との併用が可能な場合があります。条件を確認して、最大限に活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sapporo.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sapporo-senior-medical',
    title: '札幌市 重度心身障害者医療費助成',
    organization: '札幌市',
    type: 'local',
    maxAmount: '医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['札幌市', '障害者医療', '助成金'],
    eligibility: '札幌市に住所を有する重度の身体障害・知的障害・精神障害のある方',
    applicationPeriod: '通年',
    description: '札幌市が実施する重度心身障害者の医療費助成制度です。重度の障害がある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>札幌市 重度心身障害者医療費助成は、<span class="marker">重度の障害がある方の医療費自己負担分を助成</span>する制度です。身体障害者手帳1・2級、療育手帳A判定、精神障害者保健福祉手帳1級のいずれかをお持ちの方が対象です。</p><p>通院・入院ともに保険診療の自己負担分が助成され、経済的な不安を軽減しながら必要な医療を受けられるようになります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級または2級をお持ちの方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級の方</p></div><p>お住まいの区の区役所保健福祉課で申請します。障害者手帳と健康保険証を持参してください。</p><p>申請後、<span class="marker-green">「重度心身障害者医療費受給者証」</span>が交付されます。医療機関の窓口でこの受給者証を提示して利用します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1割負担（上限あり）</strong>、入院は自己負担なしとなります。ただし、入院時の食事療養費は自己負担です。</p><p><span class="marker">65歳以上で新たに障害認定を受けた方は、後期高齢者医療制度への加入が必要</span>となる場合がありますので、区役所で確認しましょう。</p><div class="note-box">所得制限があります。本人の所得が一定額を超える場合は対象外となることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.sapporo.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 仙台市（宮城県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'sendai-child-medical',
    title: '仙台市 子ども医療費助成制度',
    organization: '仙台市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '宮城県',
    tags: ['仙台市', '子ども医療費', '助成金'],
    eligibility: '仙台市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '仙台市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>仙台市の子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、医療機関で支払う保険診療の自己負担分を助成する制度です。</p><p>東北地方の中核都市として、仙台市は子育て環境の充実に力を入れています。通院・入院・調剤のいずれも助成対象で、子育て家庭の医療費負担を大幅に軽減してくれます。</p><p>所得制限はなく、<span class="marker-green">仙台市在住であればすべての子育て世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>仙台市に住民登録がある子どもの保護者が申請できます。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先の口座情報</p></div><p>お住まいの区の区役所保険年金課で手続きします。出生届や転入届と同時に申請するのがおすすめです。「子ども医療費助成受給者証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。薬局での保険調剤も対象です。</p><div class="highlight-box">宮城県外の医療機関を受診した場合は、一旦窓口で自己負担を支払い、後日区役所で払い戻し申請を行います。</div><p><span class="marker">保険適用外の費用（差額ベッド代、予防接種、健康診断など）は助成対象外</span>です。また、他の公費医療制度と併用はできません。</p>'
      }
    ],
    officialUrl: 'https://www.city.sendai.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sendai-startup-support',
    title: '仙台市 起業支援補助金',
    organization: '仙台市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '宮城県',
    tags: ['仙台市', '起業支援', '補助金'],
    eligibility: '仙台市内で新たに起業する方または起業後1年未満の方',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年5月〜7月頃（年1回）',
    description: '仙台市が実施する起業支援補助金です。市内での新規開業にかかる経費の一部を最大100万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>仙台市 起業支援補助金は、<span class="marker">仙台市内で新たにビジネスを始める方を支援</span>する制度です。開業にかかる初期費用の一部を補助することで、起業のハードルを下げることを目的としています。</p><p>補助対象経費には、店舗・オフィスの賃借料、設備購入費、広告宣伝費、ホームページ制作費などが含まれます。補助率は対象経費の1/2で、<strong>上限100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>仙台市内での開業を予定している、または開業後1年未満</p><p>仙台市が実施する創業セミナーや相談を受けていること</p><p>事業計画書の提出が必要</p></div><p>仙台市産業振興課の窓口またはオンラインで申請します。書類審査と面接審査があり、審査を通過した方に補助金が交付されます。</p><p><span class="marker-green">事前に仙台市の創業支援セミナーやアシ☆スタなどの相談窓口を利用していること</span>が要件です。計画的に準備しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2で、上限は<strong>100万円</strong>です。女性・若者（39歳以下）の起業にはさらに加算がある場合もあります。</p><p><span class="marker">補助金は後払い方式</span>のため、一旦は自己資金で立て替える必要があります。事業完了後に実績報告書を提出し、確認を経て補助金が振り込まれます。</p><div class="note-box">フランチャイズでの開業や、風俗営業に該当する事業は対象外です。詳細は募集要項で確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sendai.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sendai-migration-support',
    title: '仙台市 UIJターン移住支援金',
    organization: '仙台市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '宮城県',
    tags: ['仙台市', '移住支援', 'UIJターン'],
    eligibility: '東京圏から仙台市に移住し、対象企業に就職した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '仙台市が実施するUIJターン移住支援金です。東京圏から仙台市に移住し就職する方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>仙台市 UIJターン移住支援金は、<span class="marker">東京23区在住・通勤の方が仙台市に移住し、対象企業に就職した場合</span>に支給される支援金です。地方創生の一環として国と自治体が連携して実施しています。</p><p>世帯で移住する場合は<strong>最大100万円</strong>、単身の場合は最大60万円が支給されます。18歳未満の子ども1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上、東京23区に在住または通勤していた</p><p>仙台市に転入後3か月以上1年以内に申請</p><p>宮城県のマッチングサイト掲載企業に就職、またはテレワーク移住</p></div><p>仙台市まち・ひと・しごと創生推進室に申請書と必要書類を提出します。就職先の在職証明書や、東京圏での在住・通勤を証明する書類が必要です。</p><p><span class="marker-green">テレワークで東京圏の企業に勤務し続ける形での移住</span>も対象となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>です。さらに18歳未満の子ども1人につき最大100万円の加算があり、子育て世帯の移住を手厚く支援しています。</p><p><span class="marker">支給後5年以内に仙台市から転出した場合、支援金の返還が求められます</span>。また、1年以内に退職した場合も返還対象となります。</p><div class="highlight-box">仙台市は「杜の都」として住環境が良く、東北の交通・商業の中心地です。移住先として高い人気を誇っています。</div>'
      }
    ],
    officialUrl: 'https://www.city.sendai.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // さいたま市（埼玉県）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'saitama-child-medical',
    title: 'さいたま市 子育て支援医療費助成',
    organization: 'さいたま市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '埼玉県',
    tags: ['さいたま市', '子ども医療費', '助成金'],
    eligibility: 'さいたま市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: 'さいたま市が実施する子育て支援医療費助成制度です。中学校卒業までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>さいたま市 子育て支援医療費助成は、<span class="marker">0歳から中学3年生までの子ども</span>を対象に、保険診療の自己負担分を助成する制度です。</p><p>さいたま市は首都圏のベッドタウンとして子育て世帯が多く、この医療費助成制度は非常に多くの家庭に活用されています。通院・入院・調剤が助成対象です。</p><p><span class="marker-green">所得制限はなく、さいたま市在住の全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>さいたま市に住民登録のある子どもの保護者が申請できます。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>印鑑</p></div><p>お住まいの区の区役所保険年金課で申請します。出生届や転入届と同時に手続きするのが便利です。申請後、<strong>「子育て支援医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が無料</strong>になります。埼玉県内の医療機関であれば、受給資格証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、領収書をもって区役所で払い戻し申請</span>を行います。申請期限は受診日の翌月から1年以内です。</p><div class="note-box">保険適用外の費用や、学校でのケガ（日本スポーツ振興センター対象）は助成対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.saitama.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'saitama-education-support',
    title: 'さいたま市 就学援助制度',
    organization: 'さいたま市',
    type: 'local',
    maxAmount: '学用品費・給食費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '埼玉県',
    tags: ['さいたま市', '就学援助', '教育支援'],
    eligibility: 'さいたま市立の小中学校に通う児童生徒の保護者で、経済的に困難な方',
    targetIncome: '生活保護基準の1.3倍程度',
    applicationPeriod: '毎年4月（年度途中の申請も可能）',
    description: 'さいたま市が実施する就学援助制度です。経済的に困難な家庭の小中学生の学用品費や給食費などが支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>さいたま市 就学援助制度は、<span class="marker">経済的な理由で就学が困難な児童生徒の保護者</span>に対し、学用品費・給食費・修学旅行費などを支給する制度です。</p><p>義務教育は無償とはいえ、実際には学用品や給食費、遠足・修学旅行費など多くの出費が発生します。この制度を利用することで、子どもの学びに必要な費用の負担を軽減できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受けている世帯（要保護）</p><p>生活保護基準の1.3倍程度以下の所得の世帯（準要保護）</p><p>その他、経済的に困難と認められる世帯</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に必要事項を記入し、学校へ提出します。</p><p><span class="marker-green">年度途中での申請も可能</span>です。家計状況が変わった場合（失業、離婚など）は、随時学校に相談しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給される項目と金額は以下の通りです。</p><div class="summary-box" data-title="主な支給項目"><p>学用品費：年額約11,000〜22,000円</p><p>学校給食費：実費</p><p>修学旅行費：実費（上限あり）</p><p>新入学用品費：約50,000〜60,000円</p></div><p><span class="marker">認定は毎年度行われるため、毎年申請が必要</span>です。前年の所得で判定されますので、収入が減った場合は早めに相談しましょう。</p>'
      }
    ],
    officialUrl: 'https://www.city.saitama.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'saitama-housing-seismic',
    title: 'さいたま市 木造住宅耐震改修補助金',
    organization: 'さいたま市',
    type: 'local',
    maxAmount: '最大130万円',
    maxAmountNum: 130,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['さいたま市', '耐震改修', '住宅補助'],
    eligibility: 'さいたま市内の昭和56年5月以前に建築された木造住宅の所有者',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: 'さいたま市が実施する木造住宅耐震改修補助金です。旧耐震基準で建てられた木造住宅の耐震改修に最大130万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>さいたま市 木造住宅耐震改修補助金は、<span class="marker">昭和56年5月以前の旧耐震基準で建てられた木造住宅</span>の耐震改修工事に対して補助を行う制度です。</p><p>首都直下地震のリスクが指摘される中、住宅の耐震化は命を守る最も重要な防災対策です。さいたま市では住宅の耐震化率向上を目指し、改修工事費の一部を補助しています。</p><p>耐震診断から改修工事まで段階的に補助を受けることができます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>さいたま市内に所在すること</p><p>耐震診断の結果、倒壊の危険性があると判定されたもの</p></div><p>まずは無料の耐震診断を受けることからスタートします。さいたま市建築総務課に申請書を提出してください。</p><p><span class="marker-green">耐震診断は無料で受けられます</span>。診断結果に基づいて改修工事の計画を立て、工事着手前に補助金の申請を行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の<strong>最大130万円</strong>（補助率は工事費の23%相当）です。耐震診断自体は無料で実施されます。</p><p><span class="marker">必ず工事着手前に申請が必要</span>です。先に工事を始めてしまうと補助を受けられません。また、市が指定する耐震診断士による診断が必要です。</p><div class="highlight-box">耐震改修と合わせてリフォームを行う場合、他の住宅リフォーム補助金との併用が可能な場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.saitama.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 千葉市（千葉県）3件: childcare, medical, living
  // ────────────────────────────────────────────────
  {
    slug: 'chiba-city-child-medical',
    title: '千葉市 子ども医療費助成制度',
    organization: '千葉市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '千葉県',
    tags: ['千葉市', '子ども医療費', '助成金'],
    eligibility: '千葉市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '千葉市が実施する子ども医療費助成制度です。高校卒業相当（18歳年度末）までの子どもの医療費が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千葉市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの医療費自己負担分を助成する制度です。</p><p>千葉市は政令指定都市の中でも子育て支援に積極的な自治体の一つです。通院・入院・調剤のいずれも助成対象で、<span class="marker-green">所得制限は設けられていません</span>。すべての対象世帯が利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>千葉市に住民登録のある子どもの保護者が対象です。子どもが健康保険に加入していることが必要です。</p><div class="summary-box" data-title="申請方法"><p>各区の保健福祉センターで申請</p><p>子どもの健康保険証を持参</p><p>出生届・転入届と同時に手続き可能</p></div><p>申請後、「子ども医療費助成受給券」が交付されます。千葉県内の医療機関であれば、<strong>受給券と保険証を提示するだけ</strong>で窓口負担が軽減されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1回あたり300円の自己負担</strong>（小学校3年生まで）で、それ以降の年齢では自己負担なしです。入院は年齢を問わず自己負担なしです。</p><p><span class="marker">千葉県外の医療機関を受診した場合は、一旦全額支払い後に償還払い</span>の手続きが必要です。領収書を保管しておきましょう。</p><div class="note-box">保険適用外の費用（健康診断、予防接種、差額ベッド代など）は助成対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiba.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'chiba-city-fertility-treatment',
    title: '千葉市 不妊治療費助成制度',
    organization: '千葉市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['千葉市', '不妊治療', '医療費助成'],
    eligibility: '千葉市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了日から60日以内に申請）',
    description: '千葉市が独自に実施する不妊治療費助成制度です。保険適用後の自己負担分に対して最大10万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千葉市 不妊治療費助成制度は、<span class="marker">不妊治療にかかる保険適用後の自己負担分を助成</span>する市独自の制度です。2022年4月から不妊治療に保険が適用されるようになりましたが、それでも経済的な負担は大きいものです。</p><p>千葉市ではこの負担を軽減するため、保険適用後の自己負担分について<strong>最大10万円</strong>の助成を行っています。体外受精や顕微授精などの高度な治療も対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦のいずれかが千葉市に住所を有すること</p><p>保険適用の不妊治療を受けていること</p><p>治療終了日から60日以内に申請</p></div><p>千葉市各区の保健福祉センターで申請します。医療機関が発行する治療証明書と領収書が必要です。</p><p><span class="marker-green">事実婚のカップルも対象</span>となります。申請期限を過ぎると助成を受けられませんので、治療が終わったら早めに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大10万円</strong>が助成されます。保険適用の治療であれば、人工授精・体外受精・顕微授精いずれも対象です。</p><p><span class="marker">年度内の助成回数に上限はありません</span>が、1回の治療ごとに申請が必要です。治療と治療の区切りについては医療機関に確認してください。</p><div class="highlight-box">千葉市では不妊に関する専門相談窓口も設けています。治療の不安や費用の心配がある方は、まずは相談窓口を利用するのもおすすめです。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiba.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'chiba-city-senior-living',
    title: '千葉市 高齢者住宅改修費支給事業',
    organization: '千葉市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'living',
    prefecture: '千葉県',
    tags: ['千葉市', '高齢者支援', 'バリアフリー'],
    eligibility: '千葉市に住所を有する65歳以上の方で、住宅の改修が必要と認められた方',
    applicationPeriod: '通年',
    description: '千葉市が実施する高齢者向け住宅改修費支給事業です。手すり設置や段差解消などのバリアフリー改修に最大20万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千葉市 高齢者住宅改修費支給事業は、<span class="marker">65歳以上の方が安全に暮らせるよう、住宅のバリアフリー改修を支援</span>する制度です。</p><p>加齢に伴い足腰が弱くなると、自宅内での転倒リスクが高まります。手すりの設置、段差の解消、滑り止めの施工など、住環境の整備は転倒予防に非常に効果的です。この制度では改修費の一部を支給し、高齢者の在宅生活を支えます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる工事"><p>手すりの取り付け</p><p>床の段差解消</p><p>滑り防止のための床材変更</p><p>引き戸への扉の交換</p><p>洋式便器への取替え</p></div><p>お住まいの区のあんしんケアセンター（地域包括支援センター）に相談のうえ、区の保健福祉センターで申請します。</p><p><span class="marker-green">ケアマネジャーによる理由書の作成が必要</span>です。工事内容の妥当性が確認された後、工事着手前に支給決定を受けます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給上限は<strong>20万円</strong>で、自己負担は所得に応じて1〜3割です。介護保険の住宅改修と併用する形で利用されることが多いです。</p><p><span class="marker">必ず工事着手前に申請・承認を受ける必要があります</span>。先に工事をしてしまうと支給対象外となります。</p><div class="note-box">介護保険の要介護・要支援認定を受けている方は、介護保険の住宅改修費支給制度もあわせて利用できます。ケアマネジャーに相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.chiba.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 横浜市（神奈川県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'yokohama-child-medical',
    title: '横浜市 小児医療費助成制度',
    organization: '横浜市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['横浜市', '子ども医療費', '助成金'],
    eligibility: '横浜市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '横浜市が実施する小児医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横浜市 小児医療費助成制度は、<span class="marker">0歳から中学3年生まで（15歳到達後の最初の3月31日まで）</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>横浜市は日本最大の政令指定都市であり、約375万人の市民を抱えています。この小児医療費助成は市の子育て支援の柱の一つで、多くの家庭に利用されています。通院・入院・調剤のすべてが対象です。</p><p><span class="marker-green">所得制限はなく、横浜市在住のすべての対象家庭が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>横浜市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類（マイナンバーカード等）</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>お住まいの区の区役所保険年金課で申請します。出生届や転入届と同時に手続きできます。「小児医療証」が交付され、<strong>県内の医療機関であれば窓口負担なし</strong>で受診できます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。窓口での自己負担はありません。</p><p><span class="marker">神奈川県外の医療機関を受診した場合は、償還払い（後日申請）</span>となります。領収書を保管し、区役所で払い戻し手続きを行ってください。</p><div class="highlight-box">横浜市では今後、対象年齢の引き上げも検討されています。最新情報は市のホームページで確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokohama.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'yokohama-housing-eco-renovation',
    title: '横浜市 住まいのエコリノベーション補助制度',
    organization: '横浜市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['横浜市', '省エネ改修', '住宅リフォーム'],
    eligibility: '横浜市内の住宅の所有者で、省エネリフォームを行う方',
    applicationPeriod: '毎年5月〜翌年1月頃（予算に達し次第終了）',
    description: '横浜市が実施する住宅の省エネリフォーム補助制度です。断熱改修や省エネ設備の導入に最大40万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横浜市 住まいのエコリノベーション補助制度は、<span class="marker">住宅の断熱性能向上や省エネ機器の導入を支援</span>する制度です。脱炭素社会の実現に向けた取り組みの一環として、住宅の省エネ化を推進しています。</p><p>窓の断熱改修、外壁・屋根の断熱、高効率給湯器への交換、太陽光発電システムの設置など幅広い工事が対象です。補助額は工事内容に応じて<strong>最大40万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象工事"><p>窓の断熱改修（内窓設置・複層ガラスなど）</p><p>外壁・屋根・天井の断熱改修</p><p>高効率給湯器（エコキュート等）への交換</p><p>太陽光発電システムの設置</p></div><p>横浜市建築局の窓口またはオンラインで申請します。<span class="marker-green">工事着手前の申請が必須</span>です。施工業者の見積書や工事内容の図面等を添付します。</p><p>申請から交付決定まで約3〜4週間かかります。交付決定後に工事に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は工事内容ごとに定められた単価に基づき算出され、<strong>上限は40万円</strong>です。窓の断熱改修だけでも5〜15万円程度の補助が受けられます。</p><p><span class="marker">毎年予算枠があり、先着順で受付終了</span>となります。特に秋以降は予算が残り少なくなるため、早めの申請をおすすめします。</p><div class="note-box">国の住宅省エネ補助金（先進的窓リノベ事業など）との併用も可能な場合があります。組み合わせることでさらに自己負担を軽減できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokohama.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'yokohama-startup-support',
    title: '横浜市 創業促進助成金',
    organization: '横浜市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['横浜市', '創業支援', '助成金'],
    eligibility: '横浜市内で新たに創業する方または創業後1年未満の方',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年4月〜6月頃（年1回）',
    description: '横浜市が実施する創業促進助成金です。市内での新規開業にかかる初期費用の一部を最大30万円まで助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横浜市 創業促進助成金は、<span class="marker">横浜市内で新たにビジネスを立ち上げる方</span>を支援する制度です。開業準備に必要な経費の一部を助成し、起業へのチャレンジを後押しします。</p><p>対象経費には店舗・事務所の賃借料、設備購入費、広告費などが含まれます。補助率は対象経費の1/2で、<strong>上限30万円</strong>です。横浜市経済局が窓口となって運営しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>横浜市内で創業予定、または創業後1年未満</p><p>横浜市の創業支援事業（セミナー等）を受講済み</p><p>事業計画書を提出できること</p></div><p>横浜市経済局中小企業振興課に申請書と事業計画書を提出します。書類審査を経て、採択が決定されます。</p><p><span class="marker-green">IDEC横浜（横浜企業経営支援財団）の創業相談を事前に利用しておく</span>と、事業計画のブラッシュアップにもなり、採択率が高まります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2、<strong>上限30万円</strong>です。金額は大きくありませんが、創業時の事務所契約や名刺・チラシ作成などの初期コストに充てるのに適しています。</p><p><span class="marker">補助金は後払い方式で、事業完了報告後に振り込まれます</span>。領収書等の証拠書類はしっかり保管しましょう。</p><div class="highlight-box">横浜市には他にも融資制度や経営相談など、多様な創業支援メニューが用意されています。助成金と合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.yokohama.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 川崎市（神奈川県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'kawasaki-child-medical',
    title: '川崎市 小児医療費助成制度',
    organization: '川崎市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['川崎市', '子ども医療費', '助成金'],
    eligibility: '川崎市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '川崎市が実施する小児医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川崎市 小児医療費助成制度は、<span class="marker">0歳から中学3年生まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>川崎市は東京と横浜に挟まれた利便性の高い立地で、子育て世帯の転入が多い自治体です。この制度は子育て家庭の医療費負担を軽減し、安心して子育てできる環境を整備するために設けられています。</p><p>通院・入院ともに対象で、<span class="marker-green">所得制限はありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>川崎市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請手順"><p>1. お住まいの区の区役所保険年金課で申請</p><p>2. 子どもの健康保険証を持参</p><p>3. 「小児医療証」が交付される</p></div><p>出生届や転入届と同時に手続きできます。交付された小児医療証は、<strong>県内の医療機関で保険証と一緒に提示</strong>して利用します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。通院時の一部負担金はありません。</p><p><span class="marker">県外の医療機関では小児医療証は使えません</span>。一旦自己負担で支払い、後日区役所で払い戻し申請を行ってください。</p><div class="note-box">入院時の食事療養費や保険適用外の費用は助成対象外です。また、ひとり親家庭等医療費助成など他の医療費助成との併用はできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawasaki.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kawasaki-vaccination-support',
    title: '川崎市 高齢者予防接種費用助成',
    organization: '川崎市',
    type: 'local',
    maxAmount: '接種費用の全額または一部助成',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '神奈川県',
    tags: ['川崎市', '予防接種', '高齢者'],
    eligibility: '川崎市に住所を有する65歳以上の方',
    applicationPeriod: 'インフルエンザ: 10月〜1月、肺炎球菌: 通年',
    description: '川崎市が実施する高齢者向け予防接種費用助成です。インフルエンザや肺炎球菌ワクチンの接種費用が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川崎市 高齢者予防接種費用助成は、<span class="marker">65歳以上の市民を対象に、インフルエンザや肺炎球菌ワクチンの接種費用を助成</span>する制度です。</p><p>高齢者はインフルエンザや肺炎にかかると重症化しやすいため、予防接種が重要な予防策となります。川崎市では接種費用の一部または全額を助成し、高齢者の健康維持を支援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象ワクチンと費用"><p>インフルエンザ：自己負担1,000〜2,000円（残りは市が助成）</p><p>肺炎球菌（初回）：自己負担4,000円程度</p><p>生活保護受給者は全額助成（自己負担なし）</p></div><p>事前の申請は不要です。川崎市が指定する医療機関に直接予約して接種するだけで助成が適用されます。</p><p><span class="marker-green">接種時に健康保険証等で年齢と住所を確認します</span>。生活保護受給者は無料券が発行されますので、事前に区役所で手続きしてください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>インフルエンザは自己負担<strong>1,000〜2,000円</strong>で接種可能です（通常の接種費用は3,000〜5,000円）。肺炎球菌ワクチンは初回に限り助成対象です。</p><p><span class="marker">インフルエンザの助成期間は毎年10月〜翌年1月末まで</span>です。期間外に接種した場合は全額自己負担となります。</p><div class="highlight-box">定期接種の対象年齢（65歳、70歳、75歳…など5歳刻み）の方は、肺炎球菌ワクチンの助成が特に手厚くなります。対象年度を逃さないようにしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawasaki.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kawasaki-housing-seismic',
    title: '川崎市 木造住宅耐震改修助成制度',
    organization: '川崎市',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['川崎市', '耐震改修', '住宅補助'],
    eligibility: '川崎市内の昭和56年5月以前に建築された木造住宅の所有者',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '川崎市が実施する木造住宅の耐震改修助成制度です。旧耐震基準の木造住宅の改修工事に最大150万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>川崎市 木造住宅耐震改修助成制度は、<span class="marker">昭和56年5月以前に建築された旧耐震基準の木造住宅</span>の耐震改修工事を支援する制度です。</p><p>川崎市は首都直下地震の想定被害地域に含まれており、古い木造住宅の耐震化は喫緊の課題です。この助成制度を活用して、地震に強い住まいを実現しましょう。改修工事費の一部が<strong>最大150万円</strong>まで助成されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象条件"><p>川崎市内に所在する木造住宅</p><p>昭和56年5月31日以前に着工されたもの</p><p>耐震診断で「倒壊する可能性がある」と判定されたもの</p></div><p>まず川崎市の無料耐震診断を受けてください。診断結果に基づき、耐震改修計画を作成して助成を申請します。</p><p><span class="marker-green">耐震診断は無料</span>で、市に登録された耐震診断士が自宅を訪問して実施します。申請は川崎市まちづくり局に行います。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は耐震改修工事費の<strong>最大150万円</strong>です。非課税世帯の場合は上限が引き上げられる場合もあります。</p><p><span class="marker">必ず工事契約前に助成の申請を行ってください</span>。契約後・着工後の申請は受け付けられません。また、市が指定する要件を満たす耐震改修設計が必要です。</p><div class="note-box">耐震シェルターや防災ベッドの設置に対する助成もあります。全体改修が難しい場合はこちらの選択肢も検討しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kawasaki.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 相模原市（神奈川県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'sagamihara-child-medical',
    title: '相模原市 小児医療費助成制度',
    organization: '相模原市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '神奈川県',
    tags: ['相模原市', '子ども医療費', '助成金'],
    eligibility: '相模原市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '相模原市が実施する小児医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 小児医療費助成制度は、<span class="marker">0歳から中学3年生までの子ども</span>を対象に、保険診療の自己負担分を助成する制度です。</p><p>相模原市は神奈川県北部に位置し、東京都心へのアクセスが良い一方、豊かな自然環境も魅力の政令指定都市です。この助成制度により、子育て家庭の医療費負担が大幅に軽減されます。</p><p>通院・入院・調剤が対象で、<span class="marker-green">所得制限なし</span>で利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>相模原市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>個人番号（マイナンバー）がわかるもの</p></div><p>各区の区役所区民課で申請します。出生届や転入届と同時に手続きが可能です。「小児医療証」が交付されたら、<strong>県内の医療機関で保険証と一緒に提示</strong>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。窓口での支払いはありません。</p><p><span class="marker">県外の医療機関を受診した場合は、後日払い戻し申請</span>が必要です。受診日の翌月から1年以内に区役所で手続きしてください。</p><div class="highlight-box">相模原市では小児救急医療体制も充実しており、夜間や休日の急な体調不良にも対応できます。小児医療証は常に携帯しておきましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sagamihara-newlywed-housing',
    title: '相模原市 結婚新生活支援事業',
    organization: '相模原市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['相模原市', '結婚支援', '住宅補助'],
    eligibility: '相模原市内で新たに婚姻届を提出した夫婦で、一定の所得要件を満たす方',
    targetIncome: '夫婦の合算所得500万円未満',
    applicationPeriod: '毎年4月〜翌年3月（予算に達し次第終了）',
    description: '相模原市が実施する結婚新生活支援事業です。新婚世帯の住居費や引っ越し費用を最大60万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 結婚新生活支援事業は、<span class="marker">新婚世帯の住居費（家賃・住宅購入費）や引っ越し費用を補助</span>する制度です。結婚に伴う新生活のスタートを経済的に支援します。</p><p>補助上限は夫婦ともに29歳以下の場合は<strong>最大60万円</strong>、それ以外は最大30万円です。国の「結婚新生活支援事業」を活用した制度で、自治体が主体となって実施しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>対象年度内に婚姻届を提出した夫婦</p><p>夫婦の合算所得が500万円未満</p><p>相模原市内に新居を構えていること</p><p>夫婦ともに婚姻日において39歳以下</p></div><p>相模原市こども・若者未来局に申請書と必要書類を提出します。婚姻届受理証明書、住民票、所得証明書、住居の賃貸契約書または売買契約書が必要です。</p><p><span class="marker-green">婚姻届提出後であれば年度内いつでも申請可能</span>です。ただし、予算に達し次第受付終了となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助上限は<strong>夫婦ともに29歳以下で60万円、30歳以上39歳以下で30万円</strong>です。家賃、敷金・礼金、共益費、引っ越し業者への支払いなどが対象となります。</p><p><span class="marker">住宅購入費も対象</span>ですが、住宅ローンの返済額は対象外です。土地代も含まれません。</p><div class="note-box">過去にこの事業の補助を受けたことがある方は再度の申請はできません。また、生活保護受給世帯は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'sagamihara-migration-support',
    title: '相模原市 移住・定住促進補助金',
    organization: '相模原市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '神奈川県',
    tags: ['相模原市', '移住支援', '定住促進'],
    eligibility: '東京圏から相模原市に移住し、対象企業に就職した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '相模原市が実施する移住・定住促進補助金です。東京23区等から相模原市に移住し就職する方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>相模原市 移住・定住促進補助金は、<span class="marker">東京23区に在住・通勤していた方が相模原市に移住し、対象企業に就職した場合</span>に支給される補助金です。</p><p>相模原市は東京都心まで電車で約1時間というアクセスの良さと、丹沢山系や相模湖など豊かな自然環境を併せ持つ都市です。世帯で移住する場合は<strong>最大100万円</strong>、単身の場合は最大60万円が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前に東京23区に在住、または東京圏から23区に通勤していた</p><p>相模原市に転入後3か月以上1年以内に申請</p><p>神奈川県の就職マッチングサイト掲載企業に就職、またはテレワーク移住</p></div><p>相模原市シティプロモーション課に申請書と必要書類を提出します。在職証明書と移住前の住所を証明する書類が必要です。</p><p><span class="marker-green">起業の場合も対象</span>となります。起業支援金の交付決定を受けていることが条件です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>です。18歳未満の子ども1人につき最大100万円が加算される、子育て世帯に優しい制度です。</p><p><span class="marker">補助金受給後5年以内に転出した場合は返還が必要</span>です。また、1年以内に退職した場合も返還対象となります。</p><div class="highlight-box">相模原市の緑区（旧津久井地域）は特に自然が豊かで、テレワーク移住先として注目されています。市の移住相談窓口もぜひ活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/',
    publishedAt: '2026-03-11',
  },
];
