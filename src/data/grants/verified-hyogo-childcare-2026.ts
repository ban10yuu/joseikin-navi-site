import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-24';

export const verifiedHyogoChildcareGrants2026: Grant[] = [
  {
    slug: 'hyogo-childcare-center',
    title: '兵庫県 こども医療費助成事業',
    organization: '兵庫県 国保医療課',
    type: 'local',
    maxAmount: '小学4年生〜中学3年生の医療費自己負担を一部助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['兵庫県', 'こども医療費', '子育て支援', '市町申請'],
    eligibility: '兵庫県内の市町に住所があり、小学4年生から中学3年生までの児童・生徒が対象です。所得制限や自己負担は市町の上乗せにより異なる場合があります。',
    targetIncome: '自立支援医療制度の所得制限基準を準用（市町村民税所得割23.5万円未満）。市町により上乗せ・緩和あり。',
    applicationPeriod: '通年（住所地の市区町役所・町役場で申請）',
    description: '兵庫県のこども医療費助成事業です。小学4年生から中学3年生までの子どもが医療機関等を受診した場合に、医療保険における自己負担の一部を公費負担します。申請や具体的な手続きは住所地の市町で行います。',
    sections: [
      {
        heading: '対象者',
        content: '<p>対象は、小学4年生から中学3年生まで、具体的には9歳に達する日の翌日以後の最初の4月1日から、15歳に達する日以後の最初の3月31日を経過するまでの児童・生徒です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>病気やけがで医療機関等を受診した際、医療保険における自己負担の一部が公費負担されます。通院・入院ともに、医療保険制度上の自己負担額の一部を助成する仕組みです。</p><div class="summary-box" data-title="県制度の概要"><p>対象：小学4年生〜中学3年生</p><p>所得制限：市町村民税所得割23.5万円未満を基準</p><p>申請先：住所地の市区町役所・町役場</p></div>'
      },
      {
        heading: '申請方法',
        content: '<p>助成を受けるための申請、受給者証の交付、更新、払い戻しなどの手続きは、住所地の市区町役所・町役場の福祉医療またはこども医療担当課で行います。健康保険資格が分かる書類、本人確認書類、所得確認書類などが求められる場合があります。</p>'
      },
      {
        heading: '市町の上乗せに注意',
        content: '<p>兵庫県内の市町によっては、県の助成範囲に上乗せして対象年齢・所得制限・一部負担金を拡充している場合があります。実際の窓口負担や対象範囲は、住所地の市町公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/kf07/hw06_000000033.html',
    sourceName: '兵庫県 こども医療費助成事業',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/kf07/hw06_000000033.html',
      'https://web.pref.hyogo.lg.jp/kf07/hw06_000000038.html'
    ],
    sourceNote: '対象年齢、所得制限、申請先、市町上乗せの注意事項を兵庫県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'hyogo-infant-medical-2026',
    title: '兵庫県 乳幼児等医療費助成事業',
    organization: '兵庫県 国保医療課',
    type: 'local',
    maxAmount: '小学3年生までの医療費自己負担を一部助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: ['兵庫県', '乳幼児医療', '子ども医療費', '市町申請'],
    eligibility: '兵庫県内の市町に住所がある、小学3年生までの乳幼児等が対象です。0歳児は所得制限なし、1歳以上は所得制限があります。',
    targetIncome: '0歳児は所得制限なし。1歳以上は自立支援医療制度の所得制限基準を準用（市町により異なる場合あり）。',
    applicationPeriod: '通年（住所地の市区町役所・町役場で申請）',
    description: '兵庫県の乳幼児等医療費助成事業です。小学3年生までの子どもが病気やけがで医療機関等を受診した場合に、医療保険における自己負担の一部を公費負担します。',
    sections: [
      {
        heading: '対象者',
        content: '<p>小学3年生まで、具体的には9歳に達する日以後の最初の3月31日までの乳幼児等が対象です。小学4年生から中学3年生は、兵庫県の「こども医療費助成事業」の対象になります。</p>'
      },
      {
        heading: '自己負担の目安',
        content: '<div class="summary-box" data-title="県制度の一部負担金"><p>通院：1医療機関等あたり1日800円まで、月2回まで</p><p>低所得者の通院：1日600円まで、月2回まで</p><p>入院：定率1割、月額3,200円まで</p><p>低所得者の入院：月額2,400円まで</p></div><p>3回目以降の通院一部負担金や、3か月を超える入院の4か月目以降の一部負担金は求めない扱いがあります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>助成を受けるための手続きは、住所地の市区町役所・町役場の福祉医療または乳幼児等医療担当課で行います。健康保険資格が分かる書類、本人確認書類、所得確認書類などを準備します。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/hw06/hw06_000000004.html',
    sourceName: '兵庫県 乳幼児等医療費助成事業',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/hw06/hw06_000000004.html',
      'https://web.pref.hyogo.lg.jp/kf07/hw06_000000038.html'
    ],
    sourceNote: '対象年齢、0歳児の所得制限、一部負担金、申請先を兵庫県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'hyogo-single-parent-medical-2026',
    title: '兵庫県 母子家庭等医療費給付事業',
    organization: '兵庫県 国保医療課',
    type: 'local',
    maxAmount: 'ひとり親家庭等の医療費自己負担を一部助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['兵庫県', 'ひとり親支援', '母子家庭', '父子家庭', '医療費助成'],
    eligibility: '母子家庭の母と児童、父子家庭の父と児童、両親と死別等した遺児などが対象です。児童は原則18歳年度末まで、20歳未満の高校在学中児童を含みます。',
    targetIncome: '児童扶養手当の全部支給の所得制限基準を準用。',
    applicationPeriod: '通年（住所地の市区町役所・町役場で申請）',
    description: '兵庫県の母子家庭等医療費給付事業です。母子家庭、父子家庭、遺児などが医療機関等を受診した場合に、医療保険における自己負担の一部を公費負担します。',
    sections: [
      {
        heading: '対象者',
        content: '<p>市町の区域内に住所を有する母子家庭の母と児童、父子家庭の父と児童、両親と死別等した児童が対象です。児童は18歳に達する年度末まで、または20歳未満の高校在学中の児童が含まれます。</p>'
      },
      {
        heading: '自己負担の目安',
        content: '<div class="summary-box" data-title="県制度の一部負担金"><p>通院：1保険医療機関等あたり1日800円まで、月2回まで</p><p>低所得者の通院：1日400円まで、月2回まで</p><p>入院：定率1割、月額3,200円まで</p><p>低所得者の入院：月額1,600円まで</p></div><p>3回目以降の通院一部負担金や、3か月を超える入院の4か月目以降の一部負担金は求めない扱いがあります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>助成を受けるための申請、受給者証の交付、更新、払い戻しなどは、住所地の市区町役所・町役場の福祉医療または母子家庭等医療担当課で行います。戸籍関係書類、健康保険資格が分かる書類、所得確認書類などが必要になる場合があります。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/kf07/hw06_000000005.html',
    sourceName: '兵庫県 母子家庭等医療費給付事業',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/kf07/hw06_000000005.html',
      'https://web.pref.hyogo.lg.jp/kf07/hw06_000000038.html'
    ],
    sourceNote: '対象者、所得制限、一部負担金、申請先を兵庫県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'hyogo-medical-infertility',
    title: '兵庫県 令和8年度不妊治療における先進医療費および通院交通費助成',
    organization: '兵庫県 健康福祉部',
    type: 'local',
    maxAmount: '先進医療費3万円＋通院交通費の一部',
    maxAmountNum: 3,
    category: 'medical',
    prefecture: '兵庫県',
    tags: ['兵庫県', '不妊治療', '先進医療', '通院交通費'],
    eligibility: '先進医療を受けた時点で法律婚または事実婚関係にあり、妻の年齢が43歳未満、申請時に夫婦のどちらかが兵庫県内に住所を有するなどの要件を満たす夫婦が対象です。',
    applicationPeriod: '令和8年度受付中。胚移植日ごとに申請期限あり（最終は令和9年3月31日）',
    deadlineDate: '2027-03-31',
    description: '兵庫県が実施する、不妊治療における先進医療費および通院交通費の助成です。生殖補助医療と併用して実施した先進医療に対し、1クールあたり3万円を定額助成し、一定額以上の通院交通費も一部助成します。',
    sections: [
      {
        heading: '対象者',
        content: '<p>令和8年度に、法律上の婚姻または事実婚関係にある夫婦、先進医療を受けた時の妻の年齢が43歳未満、申請時に夫婦のどちらかが兵庫県内に住所を有することなどの要件を満たす人が対象です。通院交通費助成は、通院した人の住所が兵庫県内であることが必要です。</p>'
      },
      {
        heading: '対象となる医療と助成額',
        content: '<div class="summary-box" data-title="令和8年度の助成額"><p>先進医療費：1回（1クール）あたり3万円（定額）</p><p>通院交通費：通院交通費相当額の合計から5,000円を控除した額の2分の1以内</p><p>通院交通費相当額が7,000円未満の場合、交通費助成額は0円</p></div><p>対象は、厚生労働省に先進医療実施施設として承認された医療機関で、生殖補助医療とあわせて実施された先進医療です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請はオンラインで行います。1クールごとに申請が必要です。本人確認書類、住民票の写し、先進医療を利用したことが分かる明細書、胚移植日が分かる明細書、交通費を申請する場合は医療機関の通院確認書などを準備します。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>胚移植日ごとに期限があります。令和8年6月30日までの胚移植は令和8年8月31日まで、令和8年7月1日から9月30日は令和8年11月30日まで、令和8年10月1日から12月31日は令和9年2月28日まで、令和9年1月1日から3月31日は令和9年3月31日までです。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/kf17/kf17/senshin.html',
    sourceName: '兵庫県 令和8年度不妊治療における先進医療費および通院交通費助成',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/kf17/kf17/senshin.html',
      'https://web.pref.hyogo.lg.jp/ninkatsu/index.html',
      'https://www.mhlw.go.jp/topics/bukyoku/isei/sensiniryo/kikan03.html',
      'https://www.mhlw.go.jp/topics/bukyoku/isei/sensiniryo/kikan02.html'
    ],
    sourceNote: '令和8年度の対象者、助成額、通院交通費、必要書類、申請期限を兵庫県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
];
