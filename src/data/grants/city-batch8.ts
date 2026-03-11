import { Grant } from '@/lib/types';

export const cityGrantsBatch8: Grant[] = [
  // ────────────────────────────────────────────────
  // 宇都宮市（栃木県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'utsunomiya-child-medical',
    title: '宇都宮市 こども医療費助成制度',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '栃木県',
    tags: ['宇都宮市', 'こども医療費', '助成金'],
    eligibility: '宇都宮市に住所を有する0歳から18歳到達後の3月31日までの子どもの保護者',
    applicationPeriod: '通年',
    description: '宇都宮市が実施するこども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 こども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>宇都宮市はLRT（次世代型路面電車）の開通で利便性が向上し、子育て世帯の流入が増えています。通院・入院・調剤のすべてが助成対象となっており、子育て世帯の負担軽減に大きく貢献しています。</p><p><span class="marker-green">所得制限はなく、宇都宮市在住のすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宇都宮市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>市役所子ども家庭課または各地区市民センターで申請できます。出生届・転入届と同時に手続きするとスムーズです。申請後、<strong>「こども医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>栃木県内の医療機関では、受給資格者証と保険証を提示することで<strong>窓口での自己負担がゼロ</strong>になります。</p><p><span class="marker">県外の医療機関を受診した場合は、一旦自己負担分を支払い、後日市役所で償還払い</span>の申請が必要です。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種など）は助成対象外です。交通事故などの第三者行為による受診は対象外となる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-housing-reform',
    title: '宇都宮市 住宅リフォーム資金助成',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '栃木県',
    tags: ['宇都宮市', '住宅リフォーム', '補助金'],
    eligibility: '宇都宮市内に住宅を所有し居住している方で、市税を滞納していない方',
    applicationPeriod: '令和8年4月〜予算達し次第終了',
    description: '宇都宮市が実施する住宅リフォーム資金の助成制度です。市内業者による住宅改修工事費用の一部が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 住宅リフォーム資金助成は、<span class="marker">市内施工業者を利用した住宅の改修工事</span>に対し、工事費用の一部を助成する制度です。</p><p>住宅の長寿命化と市内経済の活性化を目的としており、バリアフリー改修、省エネ改修、屋根・外壁の修繕など幅広い工事が対象になります。</p><p><span class="marker-green">市内の施工業者に依頼することが補助の条件</span>です。地元経済への還元にもつながる仕組みになっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>宇都宮市内に自ら所有し居住する住宅のリフォームが対象で、市税の滞納がないことが条件です。</p><div class="summary-box" data-title="対象となる工事"><p>バリアフリー改修（手すり設置、段差解消など）</p><p>省エネ改修（断熱、窓の交換など）</p><p>屋根・外壁・内装の修繕</p><p>水回り（キッチン・浴室・トイレ）の改修</p></div><p>工事着工前に市役所住宅政策課へ申請書を提出します。<strong>工事着工後の申請は受け付けられません</strong>ので注意してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>工事費用（税抜）の<strong>10%、最大20万円</strong>が助成されます。対象工事費が20万円以上であることが条件です。</p><p><span class="marker">予算に限りがあるため、申請は先着順</span>で受け付けられます。毎年度、募集開始後早い時期に予算に達することがあるので、早めの申請をおすすめします。</p><div class="highlight-box">過去にこの制度を利用した方は、一定期間利用できない場合があります。詳しくは市役所にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'utsunomiya-startup-support',
    title: '宇都宮市 創業支援補助金',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '栃木県',
    tags: ['宇都宮市', '創業支援', '補助金'],
    eligibility: '宇都宮市内で新たに創業する方、または創業後1年未満の方',
    applicationPeriod: '令和8年4月〜12月（予定）',
    description: '宇都宮市が実施する創業支援補助金です。市内で新たに事業を始める方の初期費用を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宇都宮市 創業支援補助金は、<span class="marker">市内で新たに創業する方を対象に、創業にかかる初期費用の一部を補助</span>する制度です。</p><p>宇都宮市は北関東の経済拠点であり、LRT開通による交通網整備とあわせて創業環境の充実にも力を入れています。店舗の賃借料、設備費、広報費など幅広い経費が補助対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>市内で新たに事業を開始する方、または開始後1年未満の方</p><p>市が指定する創業セミナーや相談窓口を利用していること</p><p>市税の滞納がないこと</p><p>同一事業で他の補助金を重複受給していないこと</p></div><p>申請書に事業計画書を添えて、市役所商工振興課に提出します。書類審査と面接審査を経て交付が決定されます。</p><p><span class="marker-green">市の創業相談窓口で事前に計画のブラッシュアップを受けると、採択率が上がります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助対象経費の<strong>2分の1以内、最大100万円</strong>が交付されます。店舗賃借料、設備費、広報費、専門家相談料などが対象です。</p><p><span class="marker">補助金は後払い（精算払い）方式</span>です。先に自己資金で支出し、実績報告後に補助金が振り込まれます。領収書等の証拠書類は確実に保管してください。</p><div class="note-box">風俗営業やギャンブル関連業種など一部の業種は対象外です。また、フランチャイズ加盟の場合は対象外となることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.utsunomiya.tochigi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 前橋市（群馬県）3件: childcare, housing, medical
  // ────────────────────────────────────────────────
  {
    slug: 'maebashi-child-medical',
    title: '前橋市 子ども医療費助成制度',
    organization: '前橋市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '群馬県',
    tags: ['前橋市', '子ども医療費', '助成金'],
    eligibility: '前橋市に住所を有する0歳から18歳到達後の3月31日までの子どもの保護者',
    applicationPeriod: '通年',
    description: '前橋市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>前橋市は群馬県の県庁所在地で、赤城山の自然に恵まれながらも商業施設や医療機関が充実した暮らしやすい街です。通院・入院・調剤のすべてが対象となり、子育て世帯の経済的負担を軽減しています。</p><p><span class="marker-green">所得制限はなく、前橋市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>前橋市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>市役所こども課または各支所・市民サービスセンターで申請できます。出生届・転入届と同時に手続きするのが便利です。<strong>「福祉医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>群馬県内の医療機関では、受給資格者証と保険証を提示することで<strong>窓口負担がゼロ</strong>になります。</p><p><span class="marker">県外の医療機関では一旦窓口で支払い、後日償還払い</span>の手続きを行います。診療日から1年以内に申請が必要です。</p><div class="note-box">保険適用外の費用（差額ベッド代、健診費用、予防接種など）は助成対象外です。高額療養費・附加給付金がある場合はそれらを差し引いた額が助成されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-housing-acquisition',
    title: '前橋市 住宅取得支援補助金',
    organization: '前橋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['前橋市', '住宅取得', '補助金'],
    eligibility: '前橋市内に新たに住宅を取得し移住・定住する方',
    applicationPeriod: '令和8年4月〜予算達し次第終了',
    description: '前橋市が実施する住宅取得支援補助金です。市内に新たに住宅を取得する方の費用を一部補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 住宅取得支援補助金は、<span class="marker">市内に新たに住宅を取得して定住する方</span>に対し、取得費用の一部を補助する制度です。</p><p>前橋市は人口減少対策の一環として、子育て世帯や若年夫婦世帯の市内定住を促進しています。新築・中古住宅の購入が対象で、特に子育て世帯には加算措置があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>市外からの転入者、または市内賃貸からの初めての住宅取得者</p><p>取得する住宅に5年以上居住する意思があること</p><p>市税の滞納がないこと</p><p>住宅の登記完了後に申請すること</p></div><p>住宅の引き渡し・登記完了後、市役所都市計画課に申請書と必要書類を提出します。</p><p><span class="marker-green">子育て世帯（18歳未満の子どもがいる世帯）は補助額が加算</span>される優遇措置があります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>基本補助額は30万円、子育て世帯は最大50万円</strong>が交付されます。中古住宅の場合は金額が異なる場合があります。</p><p><span class="marker">予算に限りがあるため、先着順での受付</span>となります。年度途中で予算に達すると募集終了となるため、住宅購入を検討中の方は早めの確認をおすすめします。</p><div class="highlight-box">5年以内に市外転出した場合や、対象住宅に居住しなくなった場合は、補助金の返還が求められる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'maebashi-infertility-treatment',
    title: '前橋市 不妊治療費助成制度',
    organization: '前橋市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'medical',
    prefecture: '群馬県',
    tags: ['前橋市', '不妊治療', '医療費助成'],
    eligibility: '前橋市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了日から6か月以内に申請）',
    description: '前橋市が実施する不妊治療費助成制度です。保険適用後の自己負担分を上乗せ助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>前橋市 不妊治療費助成制度は、<span class="marker">不妊治療にかかる経済的負担を軽減するため、保険適用後の自己負担分を市が独自に上乗せ助成</span>する制度です。</p><p>2022年4月から不妊治療の保険適用が拡大されましたが、それでも残る自己負担は決して小さくありません。前橋市は子どもを望む夫婦を応援するため、市独自の助成を行っています。</p><p><span class="marker-green">体外受精・顕微授精などの特定不妊治療だけでなく、一般不妊治療も助成対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>前橋市に住民登録のある法律上の夫婦またはパートナーで、医療機関で不妊治療を受けている方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>不妊治療費助成金交付申請書</p><p>医療機関の証明書（受診等証明書）</p><p>医療費の領収書</p><p>夫婦の住民票（続柄記載のもの）</p><p>振込先口座情報</p></div><p>治療が終了した日から<strong>6か月以内</strong>に市役所健康増進課へ申請します。年度をまたぐ場合の取り扱いは事前に確認しておきましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>特定不妊治療（体外受精・顕微授精）は<strong>1回の治療あたり最大30万円</strong>が助成されます。一般不妊治療についても年間最大5万円の助成があります。</p><p><span class="marker">助成回数には上限があり、治療開始時の妻の年齢が40歳未満の場合は通算6回まで、40歳以上43歳未満の場合は通算3回まで</span>となっています。</p><div class="note-box">県の助成制度と併用できる場合がありますが、同一治療に対する重複受給はできません。申請前に市の窓口で確認することをおすすめします。</div>'
      }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 甲府市（山梨県）3件: childcare, employment, living
  // ────────────────────────────────────────────────
  {
    slug: 'kofu-child-medical',
    title: '甲府市 子ども医療費助成制度',
    organization: '甲府市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '山梨県',
    tags: ['甲府市', '子ども医療費', '助成金'],
    eligibility: '甲府市に住所を有する0歳から18歳到達後の3月31日までの子どもの保護者',
    applicationPeriod: '通年',
    description: '甲府市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>甲府市は富士山や南アルプスに囲まれた山梨県の県庁所在地です。果樹栽培が盛んで自然豊かな環境の中、子育て支援にも力を入れています。通院・入院・調剤のいずれも助成対象です。</p><p><span class="marker-green">所得制限はなく、甲府市在住の全対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>甲府市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>市役所子ども未来部または各出張所で申請できます。出生届・転入届と同時に手続きすると便利です。申請後、<strong>「子ども医療費受給資格者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>山梨県内の医療機関では、受給資格者証と保険証を提示することで<strong>窓口負担なし</strong>で受診できます。</p><p><span class="marker">県外の医療機関を受診した場合は、窓口で支払い後に償還払い</span>の手続きを行います。領収書は必ず保管しておきましょう。</p><div class="note-box">保険適用外の費用（差額ベッド代、健診費、予防接種など）は対象外です。学校での負傷は日本スポーツ振興センターの災害共済給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-startup-support',
    title: '甲府市 創業支援補助金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '山梨県',
    tags: ['甲府市', '創業支援', '補助金'],
    eligibility: '甲府市内で新たに創業する方、または創業後1年未満の方',
    applicationPeriod: '令和8年4月〜12月（予定）',
    description: '甲府市が実施する創業支援補助金です。市内で新規に事業を始める方の初期費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方を対象に、創業にかかる初期費用の一部を補助</span>する制度です。</p><p>甲府市は東京から特急で約90分というアクセスの良さを活かし、テレワーク移住者や地域密着型ビジネスの創業を積極的に支援しています。店舗賃借料、内装工事費、設備費、広報費などが対象経費です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な申請要件"><p>甲府市内で新たに事業を開始する個人・法人</p><p>市の創業セミナーまたは創業相談を受けていること</p><p>市税の滞納がないこと</p><p>暴力団等の反社会的勢力に該当しないこと</p></div><p>申請書に事業計画書と経費の見積書を添付し、市役所産業振興課に提出します。審査のうえ交付が決定されます。</p><p><span class="marker-green">甲府商工会議所や市の創業支援窓口で事前相談を受けると、事業計画の精度が上がります</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助対象経費の<strong>2分の1以内、最大50万円</strong>が交付されます。女性・若者（39歳以下）の創業者には加算措置がある場合があります。</p><p><span class="marker">補助金は精算払い方式のため、先に自己負担で経費を支出</span>する必要があります。領収書や契約書など証拠書類を確実に保管してください。</p><div class="highlight-box">申請の翌年度に事業継続状況の報告が求められます。1年以内に事業を廃止した場合は補助金返還の対象となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kofu-migration-support',
    title: '甲府市 移住定住支援補助金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '山梨県',
    tags: ['甲府市', '移住支援', '定住促進'],
    eligibility: '東京圏から甲府市に移住し、就業または創業する方',
    applicationPeriod: '令和8年4月〜令和9年3月（予定）',
    description: '甲府市の移住定住支援補助金です。東京圏からの移住者に対し、移住に伴う費用を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市 移住定住支援補助金は、<span class="marker">東京23区在住者または東京圏から東京23区に通勤していた方が甲府市に移住・就業する場合</span>に、移住に伴う経済的負担を軽減する制度です。</p><p>甲府市は豊かな自然環境と東京へのアクセスの良さを兼ね備え、リモートワーク時代の移住先として注目されています。国の地方創生移住支援事業と連携した制度で、手厚い支援が受けられます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前に連続5年以上、東京23区に在住または東京圏から23区に通勤していた方</p><p>甲府市に転入後3か月以上1年以内であること</p><p>山梨県のマッチングサイト掲載企業への就業、テレワーク移住、または市内で創業すること</p><p>5年以上甲府市に居住する意思があること</p></div><p>市役所企画戦略課に申請書と必要書類を提出します。審査を経て交付が決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p><strong>単身世帯は60万円、2人以上の世帯は100万円</strong>が支給されます。さらに<span class="marker">18歳未満の子ども1人につき100万円が加算</span>される場合があります。</p><p>テレワーク移住の場合も対象となりますが、勤務先の所在地等の要件があります。</p><div class="note-box">5年以内に甲府市から転出した場合や、要件を満たさなくなった場合は、補助金の全額または一部の返還が必要です。申請前に要件を十分確認しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 長野市（長野県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'nagano-city-child-medical',
    title: '長野市 子ども医療費給付制度',
    organization: '長野市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '長野県',
    tags: ['長野市', '子ども医療費', '助成金'],
    eligibility: '長野市に住所を有する0歳から18歳到達後の3月31日までの子どもの保護者',
    applicationPeriod: '通年',
    description: '長野市が実施する子ども医療費給付制度です。18歳までの子どもの医療費自己負担分が給付されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 子ども医療費給付制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を給付する制度です。</p><p>長野市は善光寺の門前町として知られ、自然と文化が調和した暮らしやすい街です。冬季オリンピックの開催地としても有名で、子育て環境の充実にも積極的に取り組んでいます。通院・入院・調剤のいずれも給付対象です。</p><p><span class="marker-green">所得制限はなく、長野市に住むすべての対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長野市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>市役所こども政策課または各支所で申請できます。出生届・転入届の手続き時に一緒に申請するとスムーズです。<strong>「福祉医療費受給者証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>長野県内の医療機関では、受給者証と保険証の提示で<strong>窓口での自己負担額が500円</strong>（1レセプトあたり）になります。500円を超えた分は市が負担します。</p><p><span class="marker">県外の医療機関では一旦全額を支払い、後日償還払い</span>で給付を受けます。領収書は必ず保管しておきましょう。</p><div class="note-box">1レセプトあたり500円の自己負担は長野県の制度に基づくものです。保険適用外の費用（差額ベッド代、予防接種など）は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-earthquake-reform',
    title: '長野市 住宅耐震改修補助金',
    organization: '長野市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '長野県',
    tags: ['長野市', '耐震改修', '住宅補助'],
    eligibility: '長野市内に昭和56年5月以前に建築された木造住宅を所有する方',
    applicationPeriod: '令和8年4月〜12月（予定）',
    description: '長野市が実施する住宅耐震改修補助金です。旧耐震基準の木造住宅の耐震改修費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 住宅耐震改修補助金は、<span class="marker">昭和56年5月31日以前の旧耐震基準で建築された木造住宅の耐震改修工事</span>に対し、費用の一部を補助する制度です。</p><p>長野市は糸魚川−静岡構造線断層帯の近くに位置し、大地震への備えが重要です。2014年の長野県神城断層地震の経験も踏まえ、市は住宅の耐震化を積極的に推進しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となる住宅"><p>昭和56年5月31日以前に着工された木造住宅</p><p>耐震診断の結果、倒壊の危険性があると判定された住宅</p><p>長野市内に所在し、申請者が所有し居住していること</p></div><p>まず無料の耐震診断を受け、耐震性が不足している場合に改修補助の申請が可能です。市役所建築指導課に工事着工前に申請書を提出します。</p><p><span class="marker-green">耐震診断は市が無料で実施しているので、まずは診断から始めましょう</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>耐震改修工事費用の<strong>5分の4以内、最大100万円</strong>が補助されます。耐震改修と同時にリフォーム工事を行う場合も、耐震部分のみが補助対象です。</p><p><span class="marker">必ず工事着工前に申請が必要</span>です。着工後の申請は受け付けられません。また、市の登録を受けた施工業者に依頼する必要があります。</p><div class="highlight-box">耐震シェルターや耐震ベッドの設置に対する補助制度もあります。大規模な改修が難しい場合は、こちらの活用も検討してみてください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nagano-city-scholarship',
    title: '長野市 奨学金制度',
    organization: '長野市',
    type: 'local',
    maxAmount: '月額最大5万円',
    maxAmountNum: 60,
    category: 'education',
    prefecture: '長野県',
    tags: ['長野市', '奨学金', '教育支援'],
    eligibility: '長野市に住所を有する世帯の子で、高校・大学等に進学する方',
    applicationPeriod: '毎年2月〜4月（予定）',
    description: '長野市が実施する奨学金制度です。経済的理由により修学が困難な学生に対し、奨学金を貸与または給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野市 奨学金制度は、<span class="marker">経済的理由で修学が困難な学生を支援するため、奨学金を貸与または給付</span>する制度です。</p><p>高等学校・高等専門学校・短期大学・大学・専修学校に在学または進学予定の方が対象です。長野市は教育環境の充実を重要施策として掲げており、意欲ある学生の学びを経済面からサポートしています。</p><p><span class="marker-green">返還不要の給付型奨学金と、卒業後に返還する貸与型奨学金の2種類</span>があります。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>長野市に住民登録のある世帯の子どもで、学業成績・人物ともに優れ、経済的支援を必要とする方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>奨学金申請書</p><p>在学証明書または合格通知書</p><p>成績証明書</p><p>世帯の所得証明書（課税証明書等）</p><p>推薦書（在学校長または出身校長）</p></div><p>毎年2月頃から募集が始まり、4月頃に締め切られます。<strong>選考委員会による審査</strong>を経て、採用者が決定されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>奨学金の月額は進学先によって異なります。<strong>高校生は月額1万5千円〜2万円、大学生は月額3万円〜5万円</strong>が目安です。</p><p><span class="marker">給付型は返還不要ですが、採用人数が限られているため競争率が高め</span>です。貸与型は卒業後に分割返還となりますが、無利子で借りられます。</p><div class="note-box">国の奨学金（日本学生支援機構）との併用が可能ですが、他の地方自治体の奨学金との併用は制限される場合があります。詳細は市役所教育委員会にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 富山市（富山県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'toyama-city-child-medical',
    title: '富山市 子ども医療費助成制度',
    organization: '富山市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '富山県',
    tags: ['富山市', '子ども医療費', '助成金'],
    eligibility: '富山市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '富山市が実施する子ども医療費助成制度です。中学卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 子ども医療費助成制度は、<span class="marker">0歳から中学校卒業（15歳到達後の3月31日）まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>富山市は北陸新幹線の停車駅を擁し、立山連峰を望む美しい景観と充実した都市機能が両立する街です。コンパクトシティ政策でも知られ、子育て世帯にとっても暮らしやすい環境が整っています。</p><p><span class="marker-green">所得制限はなく、富山市に住むすべての対象世帯が利用できます</span>。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>富山市に住民登録があり、健康保険に加入している中学3年生までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>市役所こども家庭課または各行政サービスセンターで申請できます。出生届・転入届と同時に手続きするのが便利です。<strong>「医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>富山県内の医療機関では、受給資格証と保険証を提示することで<strong>窓口での自己負担がゼロ</strong>になります。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦窓口で支払い後、償還払い</span>の手続きを行います。申請期限は診療月の翌月から1年以内です。</p><div class="note-box">保険適用外の費用（差額ベッド代、文書料、予防接種、健康診断など）は助成対象外です。入院時の食事療養費の自己負担分も助成対象外となります。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-machiya-reform',
    title: '富山市 まちなかリフォーム補助金',
    organization: '富山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '富山県',
    tags: ['富山市', 'まちなかリフォーム', '住宅補助'],
    eligibility: '富山市のまちなか居住推進地区内に住宅を所有し居住する方',
    applicationPeriod: '令和8年4月〜予算達し次第終了',
    description: '富山市が実施するまちなかリフォーム補助金です。まちなか居住推進地区内の住宅改修費用を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 まちなかリフォーム補助金は、<span class="marker">市が指定する「まちなか居住推進地区」内の住宅リフォーム工事</span>に対し、費用の一部を補助する制度です。</p><p>富山市はコンパクトシティ政策の先進都市として全国的に知られています。中心市街地への居住を促進するため、まちなかエリアでの住宅改修に手厚い支援を行っており、住み続けたい街づくりを推進しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>まちなか居住推進地区内の住宅を所有し居住していること</p><p>市税の滞納がないこと</p><p>市内の施工業者に工事を依頼すること</p><p>工事費が20万円以上（税抜）であること</p></div><p>工事着工前に市役所まちなか再生推進課に申請書と見積書を提出します。<strong>工事着工後の申請は認められません</strong>のでご注意ください。</p><p><span class="marker-green">対象地区かどうかは市のホームページの地図で確認できます</span>。判断に迷う場合は事前に窓口にお問い合わせください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>リフォーム工事費（税抜）の<strong>10%、最大30万円</strong>が補助されます。バリアフリー改修や省エネ改修の場合は補助率が上がる場合があります。</p><p><span class="marker">予算に限りがあるため先着順での受付</span>となります。特に年度初めは申請が集中するため、早めの準備をおすすめします。</p><div class="highlight-box">富山市にはこのほかにも「まちなか住宅取得支援」や「公共交通沿線居住推進補助」など、居住地域によってさまざまな住宅支援制度があります。組み合わせて活用できる場合もあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'toyama-city-startup-support',
    title: '富山市 創業者支援補助金',
    organization: '富山市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '富山県',
    tags: ['富山市', '創業支援', '補助金'],
    eligibility: '富山市内で新たに創業する方、または創業後1年未満の方',
    applicationPeriod: '令和8年4月〜12月（予定）',
    description: '富山市が実施する創業者支援補助金です。市内で新規に事業を始める方の初期費用を支援します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市 創業者支援補助金は、<span class="marker">市内で新たに事業を開始する方を対象に、創業にかかる初期経費の一部を補助</span>する制度です。</p><p>富山市は北陸新幹線の開通以降、交流人口が増加しており、新たなビジネスチャンスが広がっています。医薬品産業やものづくりが盛んな土地柄を活かした創業はもちろん、サービス業やIT関連の創業も支援対象です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>富山市内で新たに事業を開始する方、または開始後1年未満の方</p><p>市の創業支援セミナーや特定創業支援事業を受講していること</p><p>市税の滞納がないこと</p><p>事業を5年以上継続する意思があること</p></div><p>事業計画書を添えて、市役所商業労政課に申請します。書類審査およびプレゼン審査を経て交付決定となります。</p><p><span class="marker-green">富山市の創業支援拠点「スタートアップ支援センター」で無料相談が受けられます</span>。事前相談をおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助対象経費の<strong>2分の1以内、最大100万円</strong>が交付されます。店舗賃借料、設備購入費、内装工事費、広告宣伝費などが対象です。</p><p><span class="marker">補助金は精算払い方式</span>のため、まず自己資金で支出し、実績報告後に補助金が振り込まれます。領収書等の証拠書類は確実に保管しておきましょう。</p><div class="note-box">風俗営業等に該当する事業やフランチャイズ契約に基づく創業は対象外です。同一事業での他の公的補助金との重複受給には制限があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 金沢市（石川県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'kanazawa-child-medical',
    title: '金沢市 子ども医療費助成制度',
    organization: '金沢市',
    type: 'local',
    maxAmount: '18歳まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '石川県',
    tags: ['金沢市', '子ども医療費', '助成金'],
    eligibility: '金沢市に住所を有する0歳から18歳到達後の3月31日までの子どもの保護者',
    applicationPeriod: '通年',
    description: '金沢市が実施する子ども医療費助成制度です。18歳までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもの保険診療にかかる自己負担分を助成する制度です。</p><p>金沢市は兼六園や金沢21世紀美術館で知られる文化都市であり、北陸新幹線の延伸で首都圏からのアクセスも向上しています。子育て支援にも力を入れており、医療費助成は重要な柱の一つです。</p><p><span class="marker-green">所得制限はなく、金沢市在住の全対象世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>金沢市に住民登録があり、健康保険に加入している18歳までの子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座情報（県外受診時の償還払い用）</p></div><p>市役所こども政策課または各市民センターで申請できます。出生届・転入届と同時に手続きするのが便利です。申請後、<strong>「子ども医療費受給資格証」</strong>が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>石川県内の医療機関では、受給資格証と保険証の提示で<strong>窓口負担が1,000円</strong>（月額上限）となります。1,000円を超えた分は市が助成します。</p><p><span class="marker">県外の医療機関で受診した場合は、一旦窓口で全額支払い後に償還払い</span>の手続きを行います。領収書は必ず保管しておきましょう。</p><div class="note-box">月額1,000円の自己負担上限は通院の場合です。入院の場合は食事療養費の自己負担分を除き全額助成されます。保険適用外の費用は対象外です。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-machiya-preservation',
    title: '金沢市 まちなみ保全・住宅修景補助金',
    organization: '金沢市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'housing',
    prefecture: '石川県',
    tags: ['金沢市', 'まちなみ保全', '住宅修景補助'],
    eligibility: '金沢市の伝統的建造物群保存地区等に所在する建物の所有者',
    applicationPeriod: '令和8年4月〜予算達し次第終了',
    description: '金沢市が実施するまちなみ保全・住宅修景補助金です。歴史的なまちなみの保全に資する住宅の修景工事を補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 まちなみ保全・住宅修景補助金は、<span class="marker">伝統的建造物群保存地区やこまちなみ保存区域内の建物の修景工事</span>に対し、費用の一部を補助する制度です。</p><p>金沢市はひがし茶屋街や主計町など、美しい歴史的まちなみが多く残る城下町です。これらの景観を守りながら住み続けることができるよう、伝統的な外観に調和した修繕や改修を市が支援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象となるエリア・工事"><p>伝統的建造物群保存地区（ひがし茶屋街、主計町、卯辰山麓寺院群など）</p><p>こまちなみ保存区域に指定された地域</p><p>外壁・屋根・門塀など外観に係る修景工事</p><p>歴史的な意匠に調和した改修であること</p></div><p>工事着工前に市役所歴史都市推進課に事前相談のうえ、申請書を提出します。専門家による現地確認と審査を経て交付が決定されます。</p><p><span class="marker-green">事前に市の建築アドバイザーに相談すると、デザインや工法について適切な助言が受けられます</span>。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>修景工事費の<strong>最大3分の2、上限200万円</strong>が補助されます。伝統的建造物に特定されている場合はさらに補助率が高くなることがあります。</p><p><span class="marker">工事の仕様やデザインについて市の承認が必要</span>です。金沢のまちなみに調和しない改修は補助対象外となる場合があります。</p><div class="highlight-box">金沢市は景観保全に関する独自の条例を定めています。補助を受けなくても対象地域内での外観変更には届出が必要な場合がありますので、まずは市に相談しましょう。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'kanazawa-scholarship',
    title: '金沢市 奨学金制度',
    organization: '金沢市',
    type: 'local',
    maxAmount: '月額最大4万4千円',
    maxAmountNum: 52,
    category: 'education',
    prefecture: '石川県',
    tags: ['金沢市', '奨学金', '教育支援'],
    eligibility: '金沢市に住所を有する世帯の子で、高校・大学等に進学する方',
    applicationPeriod: '毎年3月〜4月（予定）',
    description: '金沢市が実施する奨学金制度です。経済的理由で修学困難な学生に奨学金を貸与します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>金沢市 奨学金制度は、<span class="marker">経済的理由で修学が困難な学生に対し、無利子で奨学金を貸与</span>する制度です。</p><p>高等学校、高等専門学校、短期大学、大学、大学院、専修学校に在学または進学予定の方が対象です。金沢市は「学都金沢」と呼ばれるほど教育文化が根付いた街であり、次世代の人材育成に積極的に取り組んでいます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>金沢市に住民登録のある世帯の子どもで、学業優秀かつ経済的支援を必要とする方が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>奨学金貸与申請書</p><p>在学証明書または合格通知書のコピー</p><p>成績証明書</p><p>世帯全員の所得証明書</p><p>連帯保証人に関する書類</p></div><p>毎年3月頃から募集が始まり、4月中旬頃に締め切られます。選考委員会の審査を経て貸与者が決定されます。<strong>年度途中の家計急変による随時募集</strong>も行われています。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>貸与月額は進学先により異なります。<strong>高校生は月額1万8千円、大学生は月額4万4千円</strong>が上限です。高等専門学校や専修学校はそれぞれ別に金額が定められています。</p><p><span class="marker">無利子で貸与され、卒業後6か月の据置期間の後、10年以内に返還</span>します。返還が困難な場合は猶予制度もあります。</p><div class="note-box">日本学生支援機構の奨学金との併用は可能ですが、他の地方自治体の奨学金と重複受給できない場合があります。申請前に市役所教育総務課に確認してください。</div>'
      }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
