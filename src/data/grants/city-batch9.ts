import { Grant } from '@/lib/types';

export const cityGrantsBatch9: Grant[] = [
  // ────────────────────────────────────────────────
  // 福井市（福井県）3件: childcare, housing, employment
  // ────────────────────────────────────────────────
  {
    slug: 'fukui-city-child-medical',
    title: '福井市 子ども医療費助成制度',
    organization: '福井市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福井県',
    tags: ['福井市', '子ども医療費', '助成金'],
    eligibility: '福井市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '福井市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>福井県は全国的にも子育て支援に力を入れている県のひとつで、福井市でも通院・入院・調剤のすべてが助成対象です。子育て世帯の経済的負担を大きく軽減してくれます。</p><p><span class="marker-green">所得制限はなく、福井市に住所があるすべての子育て世帯が対象</span>となっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福井市に住所があり、健康保険に加入している子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座がわかるもの</p></div><p>出生届や転入届の際に、市役所の子ども福祉課で合わせて手続きするとスムーズです。申請後に「子ども医療費受給者証」が交付されます。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。薬局での調剤費も対象です。</p><p>保険適用外の費用（差額ベッド代、文書料など）は助成対象外です。<span class="marker">県外の医療機関を受診した場合は償還払い</span>（後日申請して払い戻し）となります。</p><div class="note-box">受給者証は毎年更新が必要です。更新手続きの案内が届きますので、期限までに手続きを行ってください。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-housing-reform',
    title: '福井市 住宅リフォーム支援事業補助金',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '福井県',
    tags: ['福井市', '住宅リフォーム', '補助金'],
    eligibility: '福井市内の住宅を所有し、市内業者による改修工事を行う方',
    applicationPeriod: '毎年4月〜12月頃（予算に達し次第終了）',
    description: '福井市が実施する住宅リフォーム補助金です。市内業者を利用した住宅の改修工事に対し最大30万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 住宅リフォーム支援事業補助金は、<span class="marker">市内の住宅の改修工事を行う際に費用の一部を補助</span>する制度です。耐震改修、バリアフリー化、省エネ改修など幅広い工事が対象となります。</p><p>雪の多い北陸地方では住宅の老朽化が進みやすく、定期的なメンテナンスが重要です。この補助金は地域経済の活性化と住環境の向上を両立させる目的で実施されています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の主な要件"><p>福井市内に所在する住宅であること</p><p>市内の施工業者が工事を行うこと</p><p>工事費が20万円以上であること</p><p>工事着手前に申請すること</p></div><p>申請は福井市建築指導課の窓口で受け付けています。工事の見積書、住宅の図面、施工業者の登録証などを添えて提出します。</p><p><span class="marker-green">必ず工事着手前に申請してください。</span>着手後の申請は受け付けられません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象工事費の<strong>10%（上限30万円）</strong>です。耐震改修を伴う場合はさらに加算される場合があります。</p><p><span class="marker">毎年予算枠が限られているため、先着順で受付終了</span>となることがあります。募集開始後早めに申請するのがおすすめです。</p><div class="highlight-box">国や県の住宅関連補助金と併用できる場合があります。組み合わせることで自己負担を大幅に減らせる可能性があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'fukui-city-startup-support',
    title: '福井市 創業支援補助金',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '福井県',
    tags: ['福井市', '創業支援', '補助金'],
    eligibility: '福井市内で新たに事業を開始する方、または創業後1年未満の方',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '福井市が実施する創業支援補助金です。市内での創業にかかる経費に対し最大100万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井市 創業支援補助金は、<span class="marker">市内で新たに事業を開始する方の創業経費を補助</span>する制度です。店舗の改装費、設備費、広告宣伝費など、創業時に必要な初期費用が幅広く対象となります。</p><p>福井市は地域の産業振興と雇用創出を目的に、意欲ある起業家を積極的に支援しています。商工会議所との連携による経営相談なども利用できます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>福井市内で新たに事業を始める個人・法人が対象です。創業後1年未満の方も申請できます。</p><div class="summary-box" data-title="申請の流れ"><p>福井市の創業支援事業計画の認定を受ける</p><p>事業計画書・経費見積書を作成</p><p>市の窓口に補助金申請書を提出</p></div><p><span class="marker-green">申請前に商工会議所などの創業支援機関で相談を受けること</span>が要件となっている場合があります。事前に確認しましょう。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の<strong>1/2以内（上限100万円）</strong>です。女性・若者（39歳以下）の創業は補助率が優遇される場合があります。</p><p><span class="marker">交付決定前に支出した経費は補助対象外</span>となりますので、必ず交付決定を待ってから着手してください。</p><div class="note-box">補助金の受給後は事業報告の提出が必要です。一定期間内に廃業した場合は返還を求められることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 津市（三重県）3件: childcare, medical, living
  // ────────────────────────────────────────────────
  {
    slug: 'tsu-child-medical',
    title: '津市 子ども医療費助成制度',
    organization: '津市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '三重県',
    tags: ['津市', '子ども医療費', '助成金'],
    eligibility: '津市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '津市が実施する子ども医療費助成制度です。高校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市の子ども医療費助成制度は、<span class="marker">0歳から18歳に達した日以後の最初の3月31日まで</span>の子どもを対象に、医療費の自己負担分を助成する制度です。</p><p>三重県の県庁所在地である津市は、子育てしやすいまちづくりを推進しており、通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限なしで、津市在住の全ての子育て世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>津市に住所があり、健康保険に加入している子どもの保護者が対象となります。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先の口座情報</p></div><p>出生届や転入届の提出時に市役所の保険年金課窓口で手続きするのが便利です。「福祉医療費受給資格証」が交付されますので、医療機関の窓口で提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。薬局での調剤費も対象です。</p><p>保険適用外の費用（差額ベッド代、健康診断費用など）は対象外です。<span class="marker">県外の医療機関を受診した場合は、後日市役所で償還払いの手続き</span>が必要です。</p><div class="note-box">学校でのケガなどで日本スポーツ振興センターの災害給付を受けられる場合は、そちらが優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-infertility-treatment',
    title: '津市 不妊治療費助成事業',
    organization: '津市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'medical',
    prefecture: '三重県',
    tags: ['津市', '不妊治療', '助成金'],
    eligibility: '津市に住所を有する夫婦で、不妊治療を受けている方',
    applicationPeriod: '通年（治療終了後6ヶ月以内に申請）',
    description: '津市が実施する不妊治療費の助成制度です。保険適用後の自己負担分に対し最大10万円が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市の不妊治療費助成事業は、<span class="marker">不妊治療にかかる医療費の自己負担分を助成</span>する制度です。2022年4月から不妊治療の保険適用が拡大されましたが、それでも残る自己負担分を市が独自に補助しています。</p><p>一般不妊治療（タイミング法・人工授精）および生殖補助医療（体外受精・顕微授精）の両方が対象です。不妊に悩む夫婦の経済的負担を軽減し、安心して治療に専念できる環境を整えています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象要件"><p>夫婦のいずれかが津市に住所を有すること</p><p>医療保険に加入していること</p><p>医療機関で不妊治療を受けていること</p></div><p>申請は治療終了後、津市健康づくり課に必要書類を提出します。医療機関が発行する治療証明書と領収書が必要です。</p><p><span class="marker-green">治療終了日から6ヶ月以内に申請</span>してください。期限を過ぎると申請できなくなります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>1年度あたり<strong>自己負担額の合計に対し最大10万円</strong>が助成されます。保険適用後の自己負担分が対象です。</p><p><span class="marker">三重県の不妊治療費助成制度との併用が可能</span>ですので、両方に申請して負担を最大限軽減することをおすすめします。</p><div class="highlight-box">助成回数には上限があります。詳細は津市健康づくり課にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tsu-migration-support',
    title: '津市 移住支援金',
    organization: '津市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '三重県',
    tags: ['津市', '移住支援', '支援金'],
    eligibility: '東京圏から津市に移住し、対象の就業・起業等の要件を満たす方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '津市が実施する移住支援金制度です。東京圏からの移住者に対し、単身60万円・世帯100万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>津市 移住支援金は、<span class="marker">東京23区に在住または通勤していた方が津市に移住した場合</span>に支給される支援金です。地方創生の一環として国・県・市が連携して実施しています。</p><p>三重県の県庁所在地である津市は、名古屋や大阪へのアクセスも良好で、自然環境と都市機能のバランスが取れた暮らしやすいまちです。移住先として注目度が高まっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上、東京23区に在住または東京圏から23区に通勤していたこと</p><p>津市に転入後3ヶ月以上1年以内に申請すること</p><p>三重県のマッチングサイト掲載企業への就業、または起業支援金の交付決定を受けていること</p></div><p>申請は津市の地域振興課窓口で受け付けています。<span class="marker-green">転入届の提出から3ヶ月経過後に申請可能</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>単身の場合60万円、世帯の場合100万円</strong>です。18歳未満の子どもがいる場合、子ども1人につき最大100万円が加算されます。</p><p><span class="marker">支給後5年以内に津市から転出した場合は返還が必要</span>となります。長期的な定住を前提とした制度です。</p><div class="note-box">テレワークで東京圏の企業に勤務し続ける場合でも、条件を満たせば対象となります。詳しくは市の窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 大津市（滋賀県）3件: childcare, housing, education
  // ────────────────────────────────────────────────
  {
    slug: 'otsu-child-medical',
    title: '大津市 子ども医療費助成制度',
    organization: '大津市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '滋賀県',
    tags: ['大津市', '子ども医療費', '助成金'],
    eligibility: '大津市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '大津市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生までの子ども</span>を対象に、保険診療の自己負担分を助成する制度です。</p><p>滋賀県の県庁所在地であり、琵琶湖の南西岸に位置する大津市は、京都へのアクセスの良さと自然環境の豊かさで子育て世帯にも人気のエリアです。通院・入院・調剤のすべてが助成対象となっています。</p><p><span class="marker-green">所得制限はなく、大津市在住のすべての子育て世帯が利用できます。</span></p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>大津市に住所があり、健康保険に加入している子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>印鑑</p></div><p>出生届や転入届と合わせて市役所の保険年金課で手続きできます。申請後に「福祉医療費受給券」が交付されますので、医療機関の窓口で提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。ただし、入院時の食事療養費は自己負担です。</p><p><span class="marker">滋賀県外の医療機関を受診した場合は償還払い</span>となります。領収書を持って市役所で申請してください。</p><div class="note-box">受給券は年度ごとに更新されます。更新案内が届きますので忘れずに手続きしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-earthquake-reform',
    title: '大津市 木造住宅耐震改修補助金',
    organization: '大津市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '滋賀県',
    tags: ['大津市', '耐震改修', '補助金'],
    eligibility: '大津市内の昭和56年5月以前に建築された木造住宅の所有者',
    applicationPeriod: '毎年4月〜翌年1月頃（予算に達し次第終了）',
    description: '大津市が実施する木造住宅の耐震改修補助金です。旧耐震基準の木造住宅の耐震改修工事に最大100万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 木造住宅耐震改修補助金は、<span class="marker">昭和56年5月以前に建築された木造住宅の耐震改修工事</span>を支援する制度です。旧耐震基準で建てられた住宅は大地震時に倒壊するリスクが高く、市民の安全を守るために設けられています。</p><p>琵琶湖西岸断層帯の活動が懸念される大津市では、住宅の耐震化が重要な防災課題のひとつです。この補助金を活用して、安心して暮らせる住環境を整えましょう。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の主な要件"><p>大津市内にある昭和56年5月以前建築の木造住宅</p><p>耐震診断で倒壊の危険性があると判定されていること</p><p>市内の施工業者が工事を行うこと</p></div><p>まず市の無料耐震診断を受け、その結果に基づいて申請します。改修計画書や工事見積書などを市の建築指導課に提出します。</p><p><span class="marker-green">工事着手前の申請が必須</span>です。交付決定を受けてから工事に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は耐震改修工事費の<strong>4/5以内（上限100万円）</strong>です。高齢者のみの世帯は補助率が上がる場合があります。</p><p><span class="marker">まずは無料の耐震診断を受けることから始めましょう。</span>診断自体にも市の補助があり、自己負担なしで受けられます。</p><div class="highlight-box">耐震改修を行うと固定資産税の減額措置を受けられる場合があります。税務課にも確認してみましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'otsu-scholarship',
    title: '大津市 奨学金制度',
    organization: '大津市',
    type: 'local',
    maxAmount: '月額最大3万円',
    maxAmountNum: 36,
    category: 'education',
    prefecture: '滋賀県',
    tags: ['大津市', '奨学金', '教育支援'],
    eligibility: '大津市に住所を有する世帯の高校生・大学生で、経済的支援を必要とする方',
    applicationPeriod: '毎年4月〜5月頃',
    description: '大津市が実施する奨学金制度です。経済的理由で就学が困難な高校生・大学生に月額最大3万円の奨学金を給付します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大津市 奨学金制度は、<span class="marker">経済的な理由で修学が困難な高校生・大学生を支援する</span>給付型の奨学金制度です。返済不要の給付型であるため、卒業後の返済負担を心配する必要がありません。</p><p>大津市は教育の機会均等を推進しており、家庭の経済状況にかかわらず意欲のある学生が学び続けられる環境づくりに取り組んでいます。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="申請要件"><p>大津市に住所を有する世帯の子であること</p><p>高等学校・大学等に在学していること</p><p>世帯の所得が一定基準以下であること</p><p>学業成績が良好であること</p></div><p>毎年4月〜5月頃に募集があります。申請書と成績証明書、世帯の所得証明書を市の教育委員会に提出します。</p><p><span class="marker-green">募集期間が短いので、入学前から情報を確認しておく</span>ことをおすすめします。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>高校生は<strong>月額1万円</strong>、大学生は<strong>月額最大3万円</strong>が給付されます。給付型のため返済は不要です。</p><p><span class="marker">定員が設けられているため、申請しても採用されない場合があります。</span>他の奨学金と併用できるかどうかは個別に確認が必要です。</p><div class="note-box">在学中に大津市外へ転出した場合や休学した場合は、給付が停止されることがあります。</div>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 奈良市（奈良県）3件: childcare, education, housing
  // ────────────────────────────────────────────────
  {
    slug: 'nara-city-child-medical',
    title: '奈良市 子ども医療費助成制度',
    organization: '奈良市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['奈良市', '子ども医療費', '助成金'],
    eligibility: '奈良市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '奈良市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 子ども医療費助成制度は、<span class="marker">0歳から18歳到達後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>奈良県の県庁所在地であり、世界遺産の歴史都市として知られる奈良市は、子育て支援の充実にも力を入れています。通院・入院ともに助成対象で、調剤費も含まれます。</p><p><span class="marker-green">所得制限なしで、奈良市在住のすべての子育て世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>奈良市に住所があり、健康保険に加入している子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座がわかるもの</p></div><p>出生届や転入届の際に、市役所の子ども育成課で手続きを行います。「子ども医療費受給資格証」が交付されますので、医療機関の窓口で提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。調剤費も対象です。</p><p>保険適用外の費用は対象外です。<span class="marker">奈良県外の医療機関を受診した場合は償還払い</span>となり、後日市役所で申請が必要です。</p><div class="note-box">受給資格証は有効期限があります。更新のお知らせが届いたら、忘れずに手続きしましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-school-aid',
    title: '奈良市 就学援助制度',
    organization: '奈良市',
    type: 'local',
    maxAmount: '学用品費・給食費等を支給',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '奈良県',
    tags: ['奈良市', '就学援助', '教育支援'],
    eligibility: '奈良市立小中学校に通う児童生徒の保護者で、経済的にお困りの方',
    applicationPeriod: '毎年4月〜随時受付',
    description: '奈良市が実施する就学援助制度です。経済的に困難な家庭の小中学生に、学用品費・給食費等を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市の就学援助制度は、<span class="marker">経済的な理由で就学が困難な児童生徒の保護者に対し、学用品費・学校給食費・修学旅行費などを援助</span>する制度です。</p><p>義務教育は無償が原則ですが、実際には文房具代、給食費、校外活動費など多くの費用がかかります。この制度は、家庭の経済状況にかかわらず子どもたちが安心して学校生活を送れるよう支援するものです。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="支給対象項目"><p>学用品費・通学用品費</p><p>学校給食費</p><p>修学旅行費・校外活動費</p><p>新入学用品費（入学準備金）</p></div><p>生活保護世帯に準ずる程度の所得の世帯が対象です。毎年4月に学校を通じて案内が配布されます。</p><p><span class="marker-green">年度途中でも申請可能</span>です。家庭の状況が変わった場合は、学校または市の教育委員会にご相談ください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は項目ごとに定められており、例えば学用品費は<strong>小学校で年額約1万1千円、中学校で年額約2万2千円</strong>程度です。給食費は実費が支給されます。</p><p><span class="marker">新入学用品費は入学前に前倒しで支給される制度もあります。</span>入学準備に間に合うよう、早めに申請しましょう。</p><div class="highlight-box">就学援助の認定は毎年度必要です。継続して援助を受ける場合も、年度ごとに申請してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'nara-city-housing-reform',
    title: '奈良市 住宅リフォーム助成事業',
    organization: '奈良市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '奈良県',
    tags: ['奈良市', '住宅リフォーム', '助成金'],
    eligibility: '奈良市内の住宅を所有し、市内業者による改修工事を行う方',
    applicationPeriod: '毎年5月〜11月頃（予算に達し次第終了）',
    description: '奈良市が実施する住宅リフォーム助成制度です。バリアフリー化や省エネ改修などに最大20万円が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良市 住宅リフォーム助成事業は、<span class="marker">市内の住宅の改修工事費用の一部を助成</span>する制度です。バリアフリー化、省エネ改修、屋根・外壁の改修など幅広い工事が対象です。</p><p>歴史ある町並みが多い奈良市では、古い住宅の改修ニーズが高くなっています。この助成制度は住環境の改善と地域経済の活性化を目的としています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="助成の要件"><p>奈良市内に所在する個人所有の住宅であること</p><p>市内の施工業者が工事を行うこと</p><p>工事費が20万円（税込）以上であること</p><p>工事着手前に申請すること</p></div><p>申請は市の住宅課窓口で受け付けています。工事見積書と住宅の所有を確認できる書類が必要です。</p><p><span class="marker-green">抽選制の場合もあるため、募集期間を確認して申請してください。</span></p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>助成額は対象工事費の<strong>10%（上限20万円）</strong>です。子育て世帯や高齢者世帯は加算される場合があります。</p><p><span class="marker">過去にこの助成を受けた住宅は対象外</span>となることがあります。事前に市の窓口で確認しましょう。</p><div class="note-box">介護保険の住宅改修補助やバリアフリー改修減税など、他の制度と併用できる場合があります。</div>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 和歌山市（和歌山県）3件: childcare, medical, employment
  // ────────────────────────────────────────────────
  {
    slug: 'wakayama-city-child-medical',
    title: '和歌山市 子ども医療費助成制度',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '中学卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '和歌山県',
    tags: ['和歌山市', '子ども医療費', '助成金'],
    eligibility: '和歌山市に住所を有する0歳から中学3年生までの子どもの保護者',
    applicationPeriod: '通年',
    description: '和歌山市が実施する子ども医療費助成制度です。中学校卒業までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 子ども医療費助成制度は、<span class="marker">0歳から中学3年生まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>和歌山県の県庁所在地である和歌山市は、温暖な気候と海・山の自然に恵まれた環境で子育て支援にも取り組んでいます。通院・入院・調剤のすべてが助成対象です。</p><p><span class="marker-green">所得制限なしで、すべての子育て世帯が利用可能</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>和歌山市に住所があり、健康保険に加入している子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座がわかるもの</p></div><p>市役所の保険年金課で出生届・転入届と合わせて手続きできます。「子ども医療費受給資格証」が交付されますので、医療機関の窓口で提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。調剤費も対象です。</p><p>保険適用外の費用は対象外です。<span class="marker">和歌山県外の医療機関を受診した場合は償還払い</span>（後日申請して払い戻し）となります。</p><div class="note-box">資格証は有効期限があります。更新手続きの案内が届いたら忘れずに対応してください。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-vaccination',
    title: '和歌山市 高齢者予防接種費用助成',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '自己負担額を軽減',
    maxAmountNum: 5,
    category: 'medical',
    prefecture: '和歌山県',
    tags: ['和歌山市', '予防接種', '高齢者'],
    eligibility: '和歌山市に住所を有する65歳以上の方',
    applicationPeriod: '毎年10月〜翌年1月頃（インフルエンザ接種期間）',
    description: '和歌山市が実施する高齢者向け予防接種費用の助成制度です。インフルエンザや肺炎球菌ワクチンの自己負担が軽減されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市の高齢者予防接種費用助成は、<span class="marker">65歳以上の市民を対象にインフルエンザ・肺炎球菌ワクチンの接種費用を助成</span>する制度です。</p><p>高齢者はインフルエンザや肺炎が重症化しやすいため、ワクチン接種による予防が特に重要です。和歌山市では高齢者が少ない自己負担で予防接種を受けられるよう支援しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="対象者"><p>和歌山市に住所を有する65歳以上の方</p><p>60歳以上65歳未満で心臓・腎臓・呼吸器等に重度の障害がある方</p></div><p>市内の指定医療機関で直接接種を受けることで、助成後の自己負担額のみの支払いとなります。事前の申請手続きは不要です。</p><p><span class="marker-green">接種前に届く案内はがきまたは保険証を持参</span>して医療機関を受診してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>インフルエンザワクチンは<strong>自己負担1,500円程度</strong>で接種できます（通常3,000〜5,000円程度）。生活保護世帯は自己負担なしです。</p><p>肺炎球菌ワクチンは対象年齢が限られており、<span class="marker">過去に接種したことがない方が優先対象</span>となります。</p><div class="highlight-box">接種期間が限られていますので、案内が届いたら早めに医療機関を予約しましょう。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'wakayama-city-business-support',
    title: '和歌山市 中小企業設備投資促進補助金',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '和歌山県',
    tags: ['和歌山市', '中小企業', '設備投資'],
    eligibility: '和歌山市内に事業所を有する中小企業者',
    applicationPeriod: '毎年4月〜翌年2月頃（予算に達し次第終了）',
    description: '和歌山市が実施する中小企業向け設備投資補助金です。生産性向上のための設備導入に最大200万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山市 中小企業設備投資促進補助金は、<span class="marker">市内中小企業の生産性向上や競争力強化を目的とした設備投資を支援</span>する制度です。製造設備、IT機器、省エネ設備など幅広い設備が対象となります。</p><p>和歌山市は地域経済の柱である中小企業の経営基盤強化を重要施策と位置づけており、この補助金を通じて企業の成長と雇用の維持・創出を促進しています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助要件"><p>和歌山市内に事業所を有する中小企業者であること</p><p>設備投資額が50万円以上であること</p><p>市税の滞納がないこと</p></div><p>申請は市の産業政策課で受け付けています。事業計画書、設備の見積書、直近の決算書などを提出します。</p><p><span class="marker-green">設備導入前に申請し、交付決定を受ける必要があります。</span>事後申請はできません。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は対象経費の<strong>1/3以内（上限200万円）</strong>です。製造業の場合は補助率が優遇される場合があります。</p><p><span class="marker">リース契約の設備も対象になる場合がありますが</span>、条件がありますので事前に確認が必要です。</p><div class="note-box">補助金の交付を受けた設備は、一定期間（通常5年）処分が制限されます。売却や廃棄の際は市への届出が必要です。</div>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/',
    publishedAt: '2026-03-12',
  },

  // ────────────────────────────────────────────────
  // 鳥取市（鳥取県）3件: childcare, housing, living
  // ────────────────────────────────────────────────
  {
    slug: 'tottori-city-child-medical',
    title: '鳥取市 子ども医療費助成制度',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '高校卒業まで無料',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '鳥取県',
    tags: ['鳥取市', '子ども医療費', '助成金'],
    eligibility: '鳥取市に住所を有する0歳から18歳までの子どもの保護者',
    applicationPeriod: '通年',
    description: '鳥取市が実施する子ども医療費助成制度です。18歳（高校卒業相当）までの子どもの医療費自己負担分が助成されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市の子ども医療費助成制度は、<span class="marker">0歳から18歳に達した日以後の最初の3月31日まで</span>の子どもを対象に、保険診療の自己負担分を助成する制度です。</p><p>鳥取県は全国でも最も人口が少ない県ですが、その分手厚い子育て支援が特徴です。鳥取市でも通院・入院・調剤のすべてが助成対象で、子育て世帯の医療費負担を大幅に軽減しています。</p><p><span class="marker-green">所得制限はなく、鳥取市在住のすべての子育て世帯が対象</span>です。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<p>鳥取市に住所があり、健康保険に加入している子どもの保護者が対象です。</p><div class="summary-box" data-title="申請に必要なもの"><p>子どもの健康保険証</p><p>保護者の本人確認書類</p><p>振込先口座がわかるもの</p></div><p>出生届や転入届の際に市役所の保険年金課で手続きできます。「特別医療費受給資格証」が交付されますので、県内の医療機関窓口で提示してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>通院・入院ともに<strong>保険診療の自己負担分が全額助成</strong>されます。調剤費も対象です。</p><p>保険適用外の費用は対象外です。<span class="marker">鳥取県外の医療機関を受診した場合は、領収書を持って市役所で償還払いの手続き</span>が必要です。</p><div class="note-box">入院時の食事療養費は自己負担です。また、学校でのケガは日本スポーツ振興センターの災害給付が優先されます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-empty-house',
    title: '鳥取市 空き家活用流通促進補助金',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '鳥取県',
    tags: ['鳥取市', '空き家活用', '補助金'],
    eligibility: '鳥取市内の空き家を購入または賃借し、改修して居住する方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '鳥取市が実施する空き家活用の補助金です。空き家の改修費用に最大60万円が補助されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 空き家活用流通促進補助金は、<span class="marker">市内の空き家を購入・賃借して改修し居住する方に、改修費用の一部を補助</span>する制度です。</p><p>鳥取市では人口減少に伴い空き家が増加しており、地域の住環境維持のために空き家の流通・活用を積極的に推進しています。移住者の住まい確保にも活用でき、空き家バンクとの連携も図られています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="補助の主な要件"><p>鳥取市の空き家バンク登録物件または市内の空き家であること</p><p>改修後に居住すること（賃貸目的も可）</p><p>改修工事費が30万円以上であること</p><p>市内の施工業者が工事を行うこと</p></div><p>申請は市の都市環境課で受け付けています。物件の売買・賃貸契約書、工事見積書などを提出します。</p><p><span class="marker-green">工事着手前の申請が必須</span>です。交付決定後に工事に着手してください。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>補助額は改修工事費の<strong>1/2以内（上限60万円）</strong>です。子育て世帯や市外からの移住者は補助額が加算される場合があります。</p><p><span class="marker">空き家バンクに登録されている物件を活用すると、補助額が上乗せ</span>されるケースがあります。まずは空き家バンクの物件情報を確認してみましょう。</p><div class="highlight-box">鳥取県の移住支援制度と併用することで、住まいにかかる費用をさらに抑えられます。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
  {
    slug: 'tottori-city-migration-support',
    title: '鳥取市 移住定住支援金',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '最大100万円（世帯）',
    maxAmountNum: 100,
    category: 'living',
    prefecture: '鳥取県',
    tags: ['鳥取市', '移住支援', '定住促進'],
    eligibility: '東京圏から鳥取市に移住し、対象の就業・起業等の要件を満たす方',
    applicationPeriod: '通年（予算に達し次第終了）',
    description: '鳥取市が実施する移住定住支援金です。東京圏からの移住者に対し、単身60万円・世帯100万円が支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取市 移住定住支援金は、<span class="marker">東京23区に在住または通勤していた方が鳥取市に移住した場合</span>に支給される支援金です。国・県・市の連携による地方創生事業の一環です。</p><p>鳥取市は砂丘をはじめとする豊かな自然環境、新鮮な食材、そして低い生活コストが魅力です。リモートワークの普及により、地方への移住先として注目度が高まっています。</p>'
      },
      {
        heading: '対象者と申請方法',
        content: '<div class="summary-box" data-title="主な要件"><p>移住直前の10年間で通算5年以上、東京23区に在住または東京圏から23区に通勤していたこと</p><p>鳥取市に転入後3ヶ月以上1年以内に申請すること</p><p>鳥取県のマッチングサイト掲載企業への就業、起業、またはテレワーク要件を満たすこと</p></div><p>申請は鳥取市の地域振興課で受け付けています。<span class="marker-green">転入届を出してから3ヶ月経過後に申請可能</span>となります。</p>'
      },
      {
        heading: '支給額と注意点',
        content: '<p>支給額は<strong>単身60万円、世帯100万円</strong>です。18歳未満の子どもがいる場合は子ども1人につき最大100万円が加算されます。</p><p><span class="marker">支給後5年以内に鳥取市から転出した場合は全額返還</span>が必要です。3年以内の転出は全額、5年以内は半額の返還となります。</p><div class="note-box">鳥取市独自の移住者向け支援（家賃補助、奨励金など）との併用が可能な場合があります。詳しくは市の移住相談窓口にお問い合わせください。</div>'
      }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/',
    publishedAt: '2026-03-12',
  },
];
