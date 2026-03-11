import { Grant } from '@/lib/types';

export const cityGrantsBatch3: Grant[] = [
  // ────────────────────────────────────────────────
  // 神戸市（兵庫県）3件: childcare, medical, housing
  // ────────────────────────────────────────────────
  {
    slug: 'kobe-child-medical',
    title: '神戸市 こども医療費助成制度',
    organization: '神戸市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['神戸市', '子ども医療費', '助成金'],
    eligibility: '神戸市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '神戸市が実施するこども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>港町として知られる神戸市は、子育て環境の整備にも力を入れています。通院・入院・調剤のいずれも助成対象で、子育て家庭の医療費の負担を大幅に軽減しています。</p><p><span class="marker-green">所得制限はなく、神戸市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>神戸市に住民登録のある18歳までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の払い戻し用）</p></div><p>お住まいの区の区役所保険年金医療課で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「こども医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。兵庫県内の医療機関であれば受給者証の提示で窓口負担がなくなります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い後に償還払い</span>の手続きが必要です。領収書を保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、文書料など）は助成対象外です。他の公費医療制度と併用することはできません。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kobe-fertility-treatment',
    title: '神戸市 不妊治療費助成制度',
    organization: '神戸市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['神戸市', '不妊治療', '医療費助成'],
    eligibility: '神戸市に住所を有する夫婦で、保険適用の不妊治療を受けている方',
    applicationPeriod: '通年（治療終了日から90日以内に申請）',
    description: '神戸市が独自に実施する不妊治療費助成制度です。保険適用後の自己負担分に対して最大15万円を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 不妊治療費助成制度は、<span class="marker">保険適用の不妊治療にかかる自己負担分を助成</span>する市独自の上乗せ制度です。2022年4月から不妊治療が保険適用となりましたが、体外受精や顕微授精などの高度生殖医療は自己負担額が大きくなりがちです。</p><p>神戸市ではこうした経済的負担を軽減するため、1回の治療につき<strong>最大15万円</strong>の助成を行っています。不妊に悩むご夫婦をきめ細かく支援する制度です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>夫婦のいずれかが神戸市に住所を有すること</p><p>保険適用の不妊治療（体外受精・顕微授精等）を受けていること</p><p>治療終了日から90日以内に申請すること</p></div><p>神戸市各区の保健福祉部で申請します。医療機関が発行する治療証明書、領収書、保険証のコピーが必要です。</p><p><span class="marker-green">事実婚のカップルも対象</span>です。申請期限を過ぎると助成を受けられないため、治療が終了したら早めに手続きしましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1回の治療につき<strong>最大15万円</strong>が助成されます。体外受精・顕微授精など高度な治療が対象で、人工授精は対象外です。</p><p><span class="marker">年度内の助成回数に制限はありません</span>が、治療ごとに申請が必要です。治療の区切りについては医療機関に確認してください。</p><div class="highlight-box">神戸市では不妊・不育症に関する専門相談窓口を設けています。治療費の不安だけでなく、心身の悩みについても気軽に相談できます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kobe-housing-eco-reform',
    title: '神戸市 住宅省エネ改修補助金',
    organization: '神戸市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['神戸市', '住宅リフォーム', '省エネ'],
    eligibility: '神戸市内に所在する住宅の所有者で、省エネ改修工事を行う方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '神戸市が実施する住宅の省エネ改修補助金です。断熱改修や高効率設備の導入に最大50万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神戸市 住宅省エネ改修補助金は、<span class="marker">既存住宅の断熱性能向上や省エネ機器の導入</span>を支援する制度です。脱炭素社会の実現に向けて、住宅のエネルギー消費を抑える改修を推進しています。</p><p>窓の断熱化（内窓設置、複層ガラス化）、壁・天井の断熱改修、高効率給湯器への交換など幅広い工事が対象です。補助率は対象工事費の1/3で、<strong>上限は50万円</strong>です。</p><p>阪神間の温暖な気候でも、<span class="marker-green">冬場の光熱費削減と室内の快適性向上</span>に大きな効果があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な対象工事"><p>窓の断熱改修（内窓設置・複層ガラス等）</p><p>外壁・屋根・天井の断熱改修</p><p>高効率給湯器（エコキュート等）への交換</p><p>LED照明への一括交換</p></div><p>神戸市住宅都市局の窓口または郵送で申請します。見積書・工事内容の図面・住宅の所有を証明する書類を添付してください。</p><p><span class="marker-green">必ず工事着手前に申請が必要</span>です。着手後の申請は認められません。交付決定通知を受けてから工事を開始しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の1/3で、<strong>上限50万円</strong>です。窓の断熱改修だけでも10〜20万円程度の補助が受けられるケースが多いです。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となります。例年秋頃には予算が残りわずかとなるため、早めの申請がおすすめです。</p><div class="highlight-box">国の住宅省エネ補助金（先進的窓リノベ事業等）との併用が可能な場合があります。うまく組み合わせて自己負担を最小限に抑えましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 岡山市（岡山県）3件: childcare, education, living
  // ────────────────────────────────────────────────
  {
    slug: 'okayama-city-child-medical',
    title: '岡山市 子ども医療費助成制度',
    organization: '岡山市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '岡山県',
    tags: ['岡山市', '子ども医療費', '助成金'],
    eligibility: '岡山市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '岡山市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生まで（15歳到達後の最初の3月31日まで）</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>「晴れの国おかやま」として知られる岡山市は、中四国地方の交通の要衝であり、子育て世帯にとっても暮らしやすい都市として人気があります。通院・入院・調剤のすべてが対象です。</p><p><span class="marker-green">所得制限はなく、岡山市在住の全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>岡山市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>印鑑</p></div><p>各区の区役所市民保険年金課で申請します。出生届や転入届と同時に手続きするのが便利です。「子ども医療費受給資格者証」が交付されたら、<strong>県内の医療機関で保険証と一緒に提示</strong>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。岡山県内の医療機関なら窓口での支払いはありません。</p><p><span class="marker">県外の医療機関を受診した場合は、領収書をもって区役所で払い戻し申請</span>を行います。申請期限は受診日の翌月から1年以内です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、健康診断など）は助成対象外です。学校でのケガで日本スポーツ振興センターの対象となる場合も対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'okayama-city-education-support',
    title: '岡山市 就学援助制度',
    organization: '岡山市',
    type: 'local',
    maxAmount: '学用品費・給食費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '岡山県',
    tags: ['岡山市', '就学援助', '教育支援'],
    eligibility: '岡山市立の小中学校に通う児童生徒の保護者で、経済的に困難な方',
    targetIncome: '生活保護基準の1.3倍程度',
    applicationPeriod: '毎年4月（年度途中の申請も可能）',
    description: '岡山市が実施する就学援助制度です。経済的に困難な家庭の小中学生の学用品費や給食費などが支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 就学援助制度は、<span class="marker">経済的な理由で就学が困難な児童生徒の保護者</span>に対し、学用品費・学校給食費・修学旅行費などを支給する制度です。</p><p>義務教育は授業料こそ無償ですが、実際にはさまざまな費用がかかります。この制度はそうした費用を支援し、すべての子どもが安心して学校生活を送れるようにすることを目的としています。</p><p><span class="marker-green">生活保護世帯（要保護）だけでなく、それに準ずる所得の世帯（準要保護）も対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>生活保護を受けている世帯（要保護）</p><p>生活保護基準の約1.3倍以下の所得の世帯（準要保護）</p><p>児童扶養手当を受給している世帯</p></div><p>毎年4月に学校を通じて案内が配布されます。申請書に記入し、学校へ提出してください。</p><p><span class="marker-green">年度途中でも家計状況が変わった場合は申請可能</span>です。失業や離婚などで収入が減った場合は、早めに学校に相談しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給される主な項目と金額の目安は以下の通りです。</p><div class="summary-box" data-title="主な支給項目"><p>学用品費：年額約11,000〜22,000円</p><p>学校給食費：実費</p><p>修学旅行費：実費（上限あり）</p><p>新入学用品費：約50,000〜60,000円</p></div><p><span class="marker">認定は年度ごとに行われるため、毎年申請が必要</span>です。前年の所得に基づいて審査されます。</p>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'okayama-city-migration-support',
    title: '岡山市 移住支援金',
    organization: '岡山市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '岡山県',
    tags: ['岡山市', '移住支援', 'UIJターン'],
    eligibility: '東京圏から岡山市に移住し、対象企業に就職した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '岡山市が実施する移住支援金です。東京圏から岡山市に移住し就職する方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山市 移住支援金は、<span class="marker">東京23区在住・通勤の方が岡山市に移住し、対象企業に就職した場合</span>に支給される支援金です。国と自治体が連携した地方創生事業の一環です。</p><p>岡山市は「晴れの国」の名の通り温暖な気候で、災害リスクが比較的低い点も移住先として注目されています。世帯で移住する場合は<strong>最大100万円</strong>、単身の場合は最大60万円が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上、東京23区に在住または通勤していた</p><p>岡山市に転入後3か月以上1年以内に申請</p><p>岡山県のマッチングサイト掲載企業に就職、またはテレワーク移住</p></div><p>岡山市政策企画課に申請書と必要書類を提出します。在職証明書、東京圏での在住・通勤を証明する書類が必要です。</p><p><span class="marker-green">テレワークで東京圏の企業に勤務し続ける形での移住も対象</span>となります。起業の場合も別途要件を満たせば対象です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>です。18歳未満の子ども1人につき最大100万円の加算があり、子育て世帯に手厚い支援となっています。</p><p><span class="marker">支給後5年以内に岡山市から転出した場合は支援金の返還が必要</span>です。1年以内に退職した場合も返還対象となります。</p><div class="highlight-box">岡山市は医療機関の充実度が高く、教育環境も整っており、子育て移住先として高い評価を受けています。市の移住相談窓口もぜひ活用してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 広島市（広島県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'hiroshima-city-child-medical',
    title: '広島市 乳幼児等医療費補助制度',
    organization: '広島市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['広島市', '子ども医療費', '助成金'],
    eligibility: '広島市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '広島市が実施する乳幼児等医療費補助制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 乳幼児等医療費補助制度は、<span class="marker">0歳から中学3年生まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>中四国地方最大の都市である広島市は、子育て支援を重点施策として位置づけています。通院・入院・調剤のいずれも対象で、子育て世帯の医療費負担を大幅に軽減する制度として多くの家庭に活用されています。</p><p><span class="marker-green">所得制限はなく、広島市在住の全対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>広島市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>お住まいの区の区役所厚生部保険年金課で申請します。出生届や転入届と同時に手続きすると便利です。申請後、<strong>「乳幼児等医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1医療機関あたり1日500円（月4回まで）</strong>の自己負担で、それ以上は無料です。入院は自己負担なしで助成されます。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦窓口で支払い、後日区役所で払い戻し申請</span>が必要です。領収書は必ず保管してください。</p><div class="note-box">保険適用外の費用や入院時の食事療養費は助成対象外です。また、他の公費医療制度を利用している場合は併用できないことがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'hiroshima-city-housing-seismic',
    title: '広島市 住宅耐震改修補助事業',
    organization: '広島市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '広島県',
    tags: ['広島市', '耐震改修', '住宅補助'],
    eligibility: '広島市内の昭和56年5月以前に建築された木造住宅の所有者',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '広島市が実施する住宅耐震改修補助事業です。旧耐震基準の木造住宅の改修工事に最大100万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 住宅耐震改修補助事業は、<span class="marker">昭和56年5月以前に建築された旧耐震基準の木造住宅</span>の耐震改修工事に対して補助を行う制度です。</p><p>広島市は瀬戸内海に面した温暖な地域ですが、南海トラフ巨大地震のリスクが指摘されています。古い木造住宅の耐震化は命を守る重要な防災対策であり、市では改修工事費の一部を補助して耐震化を推進しています。</p><p>補助額は改修工事費に応じて<strong>最大100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象住宅の条件"><p>昭和56年5月31日以前に着工された木造住宅</p><p>広島市内に所在すること</p><p>耐震診断で倒壊の危険性ありと判定されたもの</p></div><p>まず広島市の無料耐震診断を受けることからスタートします。診断結果に基づいて改修計画を立て、広島市都市整備局住宅政策課に補助申請を行います。</p><p><span class="marker-green">耐震診断は無料で受けられます</span>。市に登録された耐震診断士が自宅を訪問して実施します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の一定割合で、<strong>上限100万円</strong>です。住民税非課税世帯の場合は上限が引き上げられることがあります。</p><p><span class="marker">必ず工事契約前に補助の申請を行ってください</span>。契約後・着工後の申請は受け付けられません。</p><div class="highlight-box">耐震改修と合わせてリフォームを行うと、他の住宅リフォーム補助金と併用できる場合があります。まとめて工事することでコスト削減にもつながります。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'hiroshima-city-startup-support',
    title: '広島市 創業チャレンジ補助金',
    organization: '広島市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '広島県',
    tags: ['広島市', '創業支援', '補助金'],
    eligibility: '広島市内で新たに創業する方または創業後1年未満の方',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年5月〜7月頃（年1回）',
    description: '広島市が実施する創業チャレンジ補助金です。市内での新規開業にかかる経費の一部を最大100万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島市 創業チャレンジ補助金は、<span class="marker">広島市内で新たにビジネスを始める方を支援</span>する制度です。開業にかかる初期費用の一部を補助し、地域経済の活性化を図ることを目的としています。</p><p>対象経費には、店舗・事務所の賃借料、設備購入費、広告宣伝費、ホームページ制作費などが含まれます。補助率は対象経費の1/2で、<strong>上限100万円</strong>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>広島市内での開業を予定している、または開業後1年未満</p><p>広島市の創業支援事業（セミナー等）を受講済み</p><p>事業計画書の提出が必要</p></div><p>広島市経済観光局産業振興課に申請書と事業計画書を提出します。書類審査と面接審査を経て採択が決定されます。</p><p><span class="marker-green">広島市が運営する創業支援拠点での相談を事前に利用しておくと</span>、事業計画のブラッシュアップにも役立ち、採択率も高まります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2で、<strong>上限は100万円</strong>です。女性や若者（39歳以下）が創業する場合は優遇される場合があります。</p><p><span class="marker">補助金は後払い方式</span>のため、まず自己資金で支払い、事業完了報告書の提出後に振り込まれます。領収書等の証拠書類は必ず保管してください。</p><div class="note-box">フランチャイズでの開業は対象外です。また、採択後は広島市への経過報告が求められます。詳細は募集要項を確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 北九州市（福岡県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'kitakyushu-child-medical',
    title: '北九州市 子ども医療費支給制度',
    organization: '北九州市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['北九州市', '子ども医療費', '助成金'],
    eligibility: '北九州市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '北九州市が実施する子ども医療費支給制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 子ども医療費支給制度は、<span class="marker">0歳から中学3年生まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>ものづくりの街として知られる北九州市は、人口減少対策として子育て支援に力を入れています。通院・入院・調剤のすべてが対象で、子育て世帯の経済的負担を大きく軽減しています。</p><p><span class="marker-green">所得制限はなく、北九州市に住む全対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>北九州市に住民登録のある中学3年生までの子どもの保護者が対象です。子どもが健康保険に加入していることが条件です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>印鑑</p></div><p>各区の区役所国保年金課で申請します。出生届や転入届と同時に手続きが可能です。申請後、<strong>「子ども医療証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1医療機関あたり月600円まで</strong>の自己負担で、それ以上は無料です。入院は自己負担なしです。3歳未満の子どもは通院も自己負担なしとなります。</p><p><span class="marker">福岡県外の医療機関を受診した場合は、一旦窓口で支払い後に区役所で払い戻し申請</span>を行います。領収書を保管しておきましょう。</p><div class="highlight-box">北九州市では夜間・休日の小児救急医療体制も整備されています。急な体調不良の際は、市の救急医療情報を確認してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kitakyushu-startup-support',
    title: '北九州市 スタートアップ創業支援補助金',
    organization: '北九州市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['北九州市', '創業支援', '補助金'],
    eligibility: '北九州市内で新たに創業する方または創業後1年未満の方',
    targetOccupation: '起業家・個人事業主',
    applicationPeriod: '毎年4月〜6月頃（年1回）',
    description: '北九州市が実施するスタートアップ創業支援補助金です。市内での新規開業にかかる経費の一部を最大100万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 スタートアップ創業支援補助金は、<span class="marker">市内で新たに事業を立ち上げる方を支援</span>する制度です。ものづくり産業の集積地として培われた産業基盤を活かし、新しいビジネスの創出を促進しています。</p><p>店舗・オフィスの賃借料、設備購入費、広告宣伝費、Webサイト制作費などが対象経費です。補助率は対象経費の1/2で、<strong>上限100万円</strong>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>北九州市内で創業を予定、または創業後1年未満</p><p>北九州市の創業支援プログラム・相談窓口を利用済み</p><p>事業計画書の提出が必要</p></div><p>北九州市産業経済局に申請書と事業計画書を提出します。書類審査と面接審査を経て採択が決定されます。</p><p><span class="marker-green">北九州市が運営するコワーキングスペース「COMPASS小倉」等の創業支援施設を活用</span>すると、専門家からのアドバイスも受けられます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の1/2で、<strong>上限100万円</strong>です。IT・テクノロジー分野での創業はさらに優遇されることがあります。</p><p><span class="marker">補助金は後払い方式</span>のため、一旦は自己資金で立て替える必要があります。事業完了後に実績報告書を提出し、確認を経て補助金が振り込まれます。</p><div class="note-box">フランチャイズでの開業や風俗営業は対象外です。採択数には上限があるため、十分な事業計画の準備をおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kitakyushu-migration-support',
    title: '北九州市 移住支援金',
    organization: '北九州市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '福岡県',
    tags: ['北九州市', '移住支援', 'UIJターン'],
    eligibility: '東京圏から北九州市に移住し、対象企業に就職した方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '北九州市が実施する移住支援金です。東京圏から北九州市に移住し就職する方に最大100万円を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北九州市 移住支援金は、<span class="marker">東京23区在住・通勤の方が北九州市に移住し、対象企業に就職した場合</span>に支給される支援金です。国と自治体が連携した地方創生事業の一環です。</p><p>北九州市は自然と都市機能が調和した生活コストの低い都市として、移住先に人気があります。世帯で移住する場合は<strong>最大100万円</strong>、単身の場合は最大60万円が支給されます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上、東京23区に在住または通勤していた</p><p>北九州市に転入後3か月以上1年以内に申請</p><p>福岡県のマッチングサイト掲載企業に就職、またはテレワーク移住</p></div><p>北九州市企画調整局に申請書と必要書類を提出します。就職先の在職証明書や東京圏での在住・通勤を証明する書類が必要です。</p><p><span class="marker-green">テレワークで東京圏の企業に勤務し続ける形での移住も対象</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>世帯100万円、単身60万円</strong>です。18歳未満の子ども1人につき最大100万円が加算され、ファミリー世帯にも手厚い支援です。</p><p><span class="marker">支給後5年以内に北九州市から転出した場合は支援金の返還が求められます</span>。1年以内に退職した場合も返還対象です。</p><div class="highlight-box">北九州市は物価や家賃が全国的にも安く、生活コストを抑えたい方にとって魅力的な移住先です。門司港レトロなど観光資源も豊富で暮らしを楽しめます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 福岡市（福岡県）3件: childcare, education, employment
  // ────────────────────────────────────────────────
  {
    slug: 'fukuoka-city-child-medical',
    title: '福岡市 子ども医療費助成制度',
    organization: '福岡市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['福岡市', '子ども医療費', '助成金'],
    eligibility: '福岡市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '福岡市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>九州最大の都市である福岡市は、スタートアップ支援や子育て環境の充実で全国的にも注目を集めています。通院・入院・調剤のすべてが助成対象で、子育て家庭の医療費負担を大幅に軽減しています。</p><p><span class="marker-green">所得制限はなく、福岡市在住の全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福岡市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>印鑑</p></div><p>各区の区役所保険年金課で申請します。出生届や転入届と同時に手続きが可能です。申請後、<strong>「子ども医療証」</strong>が交付されます。福岡県内の医療機関で保険証と一緒に提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>3歳未満は通院・入院ともに<strong>自己負担なし</strong>です。3歳以上は通院1医療機関あたり月600円まで、入院は1医療機関あたり月500円までの自己負担となり、それ以上は無料です。</p><p><span class="marker">福岡県外の医療機関を受診した場合は、領収書をもって区役所で払い戻し申請</span>を行います。受診日の翌月から1年以内が申請期限です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、健康診断費用など）は助成対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'fukuoka-city-education-scholarship',
    title: '福岡市 奨学金制度（給付型）',
    organization: '福岡市',
    type: 'local',
    maxAmount: '月額最大1万5千円',
    maxAmountNum: 18,
    category: 'education',
    prefecture: '福岡県',
    tags: ['福岡市', '奨学金', '教育支援'],
    eligibility: '福岡市に住所を有する高校生で、経済的理由により修学が困難な方',
    targetIncome: '住民税非課税世帯または同等の所得水準',
    applicationPeriod: '毎年4月〜5月頃（年1回）',
    description: '福岡市が実施する給付型奨学金制度です。経済的に困難な高校生に月額最大1万5千円を給付（返済不要）します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 奨学金制度（給付型）は、<span class="marker">経済的な理由で修学が困難な高校生</span>を対象に、返済不要の奨学金を給付する制度です。</p><p>高校は義務教育ではないため、授業料以外にも教材費・通学費・部活動費など多くの経費がかかります。この制度はそうした経費を支援し、家庭の経済状況に関わらず高校生活を送れるようにすることを目的としています。</p><p><strong>返済不要の給付型</strong>であるため、<span class="marker-green">卒業後の負担を心配する必要がありません</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>福岡市内に住所を有する高校生（高専等を含む）</p><p>住民税非課税世帯またはそれに準ずる所得の世帯</p><p>学業意欲があり、学校長の推薦を受けられること</p></div><p>毎年4〜5月に在学する学校を通じて申請します。学校から推薦書と申請書を提出し、福岡市教育委員会が審査を行います。</p><p><span class="marker-green">高校1年生から3年生まで毎年申請が可能</span>です。在学中に家計状況が変わった場合も相談してみましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>月額<strong>国公立高校で最大1万円、私立高校で最大1万5千円</strong>が給付されます。年間で最大18万円の支援を受けられる計算です。</p><p><span class="marker">採用人数には上限があり、応募者多数の場合は選考</span>となります。成績要件は厳しくありませんが、学業への意欲が重視されます。</p><div class="highlight-box">国の高等学校等就学支援金や福岡県の奨学金と併用可能な場合があります。複数の制度を組み合わせて活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'fukuoka-city-startup-support',
    title: '福岡市 スタートアップ支援補助金',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['福岡市', 'スタートアップ', '創業支援'],
    eligibility: '福岡市内で新たに創業する方または創業後3年未満の方',
    targetOccupation: '起業家・スタートアップ経営者',
    applicationPeriod: '毎年4月〜7月頃（年1〜2回）',
    description: '福岡市が実施するスタートアップ支援補助金です。「スタートアップ都市・福岡」を掲げ、創業にかかる経費を最大200万円まで補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡市 スタートアップ支援補助金は、<span class="marker">国家戦略特区「グローバル創業・雇用創出特区」</span>に指定された福岡市ならではの創業支援制度です。</p><p>福岡市は「スタートアップ都市宣言」を行い、創業しやすい環境づくりを全国に先駆けて推進しています。対象経費にはオフィス賃借料、設備費、広告費、専門家相談費用などが含まれ、補助率は対象経費の2/3、<strong>上限200万円</strong>と全国の自治体の中でもトップクラスの支援です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>福岡市内で創業予定、または創業後3年未満</p><p>福岡市の創業支援プログラム（Startup Café等）を利用済み</p><p>革新性のある事業計画を有すること</p></div><p>福岡市経済観光文化局に申請書・事業計画書を提出します。書類審査と面接審査（プレゼン）を経て採択が決定されます。</p><p><span class="marker-green">福岡市が運営する「Startup Café」では無料で創業相談や事業計画のブラッシュアップが受けられます</span>。事前に利用しておくことが要件にもなっています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の2/3で、<strong>上限は200万円</strong>です。テクノロジー系のスタートアップは特に歓迎されており、採択率も高い傾向があります。</p><p><span class="marker">補助金は後払い方式</span>のため、まず自己資金で支払い、事業完了後の実績報告を経て振り込まれます。</p><div class="note-box">福岡市には「Fukuoka Growth Next」などのインキュベーション施設もあります。補助金と合わせて創業支援エコシステムをフル活用しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/',
    publishedAt: '2026-03-11',
  },

  // ────────────────────────────────────────────────
  // 熊本市（熊本県）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'kumamoto-city-child-medical',
    title: '熊本市 子ども医療費助成制度',
    organization: '熊本市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '熊本県',
    tags: ['熊本市', '子ども医療費', '助成金'],
    eligibility: '熊本市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '熊本市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生まで</span>の子どもの保険診療の自己負担分を助成する制度です。</p><p>「くまもん」で全国的に知名度の高い熊本市は、九州中部の中核都市として子育て支援にも積極的に取り組んでいます。通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限はなく、熊本市在住の全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>熊本市に住民登録のある中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報</p></div><p>各区の区役所保健子ども課で申請します。出生届や転入届と同時に手続きすると便利です。「子ども医療費受給資格者証」が交付されたら、<strong>県内の医療機関で保険証と一緒に提示</strong>してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1医療機関あたり月500円まで</strong>の自己負担で、それ以上は無料です。入院は自己負担なしです。3歳未満は通院も自己負担なしとなります。</p><p><span class="marker">熊本県外の医療機関を受診した場合は、一旦窓口で支払い後に区役所で払い戻し申請</span>が必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、予防接種、健康診断など）は助成対象外です。入院時の食事療養費も対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kumamoto-city-housing-reconstruction',
    title: '熊本市 住宅リフォーム補助金',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '熊本県',
    tags: ['熊本市', '住宅リフォーム', '補助金'],
    eligibility: '熊本市内に所在する住宅の所有者で、リフォーム工事を行う方',
    applicationPeriod: '毎年4月〜11月頃（予算に達し次第終了）',
    description: '熊本市が実施する住宅リフォーム補助金です。住宅の改修工事に最大30万円を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 住宅リフォーム補助金は、<span class="marker">市民の安全で快適な住環境の確保</span>を目的とした住宅改修支援制度です。</p><p>2016年の熊本地震を経験した熊本市では、住宅の耐震化や安全対策へのニーズが高まっています。この制度は耐震改修、バリアフリー改修、省エネ改修など幅広いリフォームを対象に、工事費の一部を<strong>最大30万円</strong>まで補助します。</p><p><span class="marker-green">市内の施工業者に依頼する工事が対象</span>で、地元経済の活性化にも貢献しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象工事の例"><p>耐震改修工事（壁の補強、基礎の補修等）</p><p>バリアフリー改修（手すり設置、段差解消等）</p><p>省エネ改修（断熱、窓改修、高効率設備等）</p><p>その他安全性向上のための改修</p></div><p>熊本市都市建設局住宅課に申請書と工事見積書等を提出します。工事内容の審査を経て交付決定を受けます。</p><p><span class="marker-green">必ず工事着手前に申請が必要</span>です。着手後の申請は受け付けられません。市内の登録施工業者による工事であることが条件です。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の一定割合で、<strong>上限30万円</strong>です。耐震改修を含む場合は上限が引き上げられることがあります。</p><p><span class="marker">先着順で予算に達し次第受付終了</span>となるため、早めの申請をおすすめします。例年、受付開始から数か月で予算上限に達する傾向があります。</p><div class="highlight-box">熊本地震の被災住宅の修繕には別途支援制度が用意されています。被災住宅の場合は市の相談窓口で最適な制度をご確認ください。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-11',
  },
  {
    slug: 'kumamoto-city-senior-medical',
    title: '熊本市 重度心身障害者医療費助成制度',
    organization: '熊本市',
    type: 'local',
    maxAmount: '医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '熊本県',
    tags: ['熊本市', '障害者医療', '助成金'],
    eligibility: '熊本市に住所を有する重度の身体障害・知的障害・精神障害のある方',
    applicationPeriod: '通年',
    description: '熊本市が実施する重度心身障害者医療費助成制度です。重度の障害がある方の医療費自己負担分を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本市 重度心身障害者医療費助成制度は、<span class="marker">重度の障害がある方の医療費自己負担分を助成</span>する制度です。身体障害者手帳1・2級、療育手帳A判定、精神障害者保健福祉手帳1級のいずれかをお持ちの方が対象となります。</p><p>通院・入院ともに保険診療の自己負担分が助成され、障害のある方が経済的な不安なく医療を受けられるよう支援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる方"><p>身体障害者手帳1級または2級をお持ちの方</p><p>療育手帳A判定の方</p><p>精神障害者保健福祉手帳1級の方</p></div><p>各区の区役所福祉課で申請します。障害者手帳、健康保険証、印鑑を持参してください。</p><p>申請後、<span class="marker-green">「重度心身障害者医療費受給資格者証」</span>が交付されます。医療機関の窓口でこの受給者証を保険証と一緒に提示して利用します。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院は<strong>1医療機関あたり月500円まで</strong>の自己負担で、それ以上は助成されます。入院は自己負担なしです。</p><p><span class="marker">所得制限が設けられており、本人の所得が一定額を超える場合は対象外</span>となることがあります。詳しくは区役所にお問い合わせください。</p><div class="note-box">入院時の食事療養費や保険適用外の費用は助成対象外です。65歳以上で新たに障害認定を受けた方は、後期高齢者医療制度への加入が必要な場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/',
    publishedAt: '2026-03-11',
  },
];
