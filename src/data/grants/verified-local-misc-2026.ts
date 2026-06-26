import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-26';

export const verifiedLocalMiscGrants2026: Grant[] = [
  {
    slug: 'tokyo-startup-support',
    title: '東京都 創業助成事業（令和8年度第2回）',
    organization: '東京都・東京都中小企業振興公社',
    type: 'local',
    maxAmount: '最大400万円',
    maxAmountNum: 400,
    category: 'employment',
    prefecture: '東京都',
    tags: ['東京都', '創業支援', 'Jグランツ', '令和8年度'],
    eligibility: '都内での創業を具体的に計画している個人、または創業後5年未満の中小企業者等のうち、指定された創業支援事業の利用など一定の申請要件を満たす方が対象です。',
    targetOccupation: '創業予定者・創業後5年未満の中小企業者等',
    applicationPeriod: '令和8年度第2回は2026年9月29日10:00から2026年10月8日23:59まで',
    deadlineDate: '2026-10-08',
    description: '東京都と東京都中小企業振興公社が実施する創業初期向けの助成事業です。賃借料、広告費、従業員人件費、市場調査・分析費など、創業初期に必要な経費の一部を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>都内開業率の向上を目的に、都内で創業予定の個人または創業後5年未満の中小企業者等に対し、創業初期に必要な経費の一部を助成する制度です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>助成限度額は上限400万円、下限100万円で、助成率は3分の2以内です。対象経費は、賃借料、広告費、器具備品購入費、産業財産権出願・導入費、専門家指導費、従業員人件費、市場調査・分析費などです。</p>'
      },
      {
        heading: '申請方法と締切',
        content: '<p>令和8年度第2回の申請受付期間は2026年9月29日10時から2026年10月8日23時59分までです。申請はJグランツによる電子申請のみで、GビズIDプライムの準備が必要です。</p>'
      }
    ],
    officialUrl: 'https://startup-station.jp/m2/services/sogyokassei/',
    sourceName: 'TOKYO創業ステーション 創業助成事業',
    sourceUrls: ['https://startup-station.jp/m2/services/sogyokassei/'],
    sourceNote: '公式ページで令和8年度第2回募集期間、助成限度額400万円、助成率3分の2以内、Jグランツ申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gunma-manufacturing-support',
    title: 'ぐんま技術革新チャレンジ補助金（令和8年度受付終了）',
    organization: '群馬県',
    type: 'local',
    maxAmount: '最大80万円',
    maxAmountNum: 80,
    category: 'employment',
    prefecture: '群馬県',
    tags: ['群馬県', '技術開発', '中小企業', '受付終了'],
    eligibility: '実施市町村に主たる事業所または開発実施拠点を有し、ものづくりやサービス等に係る新技術・新製品の開発等に取り組む中小企業者等が対象です。',
    targetOccupation: '中小企業者・小規模事業者',
    applicationPeriod: '令和8年度募集は2026年5月15日17:00で受付終了。公式ページで二次募集予定なしと案内されています。',
    deadlineDate: '2026-05-15',
    description: '群馬県が、市町村と連携して中小企業者の新技術・新製品開発、地域特色を生かした新製品開発を支援する補助金です。令和8年度募集は受付終了済みです。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>中小企業者が自ら行う、ものづくりやサービス等に係る新技術・新製品の開発や、地域特色を生かした新製品開発を支援する補助金です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助限度額は80万円で、県と市町村が各40万円を負担します。補助率は2分の1以内で、小規模事業者は5分の4以内です。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>令和8年度の募集期間は2026年4月1日から2026年5月15日17時までで、公式ページでは受付終了、本年度の二次募集予定なしと案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.gunma.jp/site/hojokin/10642.html',
    sourceName: '群馬県 ぐんま技術革新チャレンジ補助金',
    sourceUrls: [
      'https://www.pref.gunma.jp/site/hojokin/10642.html',
      'https://www.pref.gunma.jp/site/hojokin/10638.html'
    ],
    sourceNote: '公式ページで令和8年度募集の受付終了、二次募集予定なし、募集期間2026年5月15日17時、補助限度額80万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tottori-sand-dune-tourism',
    title: '鳥取県 体験型観光コンテンツ造成支援事業補助金',
    organization: '鳥取県',
    type: 'local',
    maxAmount: '最大400万円（事業類型により異なる）',
    maxAmountNum: 400,
    category: 'employment',
    prefecture: '鳥取県',
    tags: ['鳥取県', '観光', '体験型コンテンツ', '事業者向け'],
    eligibility: '鳥取県内の自然・歴史など地域資源を活用し、体験型観光コンテンツの新規造成や既存事業の高付加価値化に取り組む民間事業者等が対象です。',
    targetOccupation: '観光事業者・民間事業者・団体',
    applicationPeriod: '公式ページに申請様式等を掲載。交付決定前に着手した事業は補助対象外のため、申請前に観光戦略課へ確認が必要です。',
    description: '鳥取県の観光資源を活用した体験型観光コンテンツの造成や磨き上げを支援する補助金です。XR活用型は上限400万円、通常の新規造成は上限200万円など、事業類型により上限額が異なります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>県内の自然や歴史など地域資源を活用し、本県の観光の主軸となる魅力ある体験型観光コンテンツの新規造成、観光メニュー化、既存事業の高付加価値化を支援する制度です。</p>'
      },
      {
        heading: '補助率と上限額',
        content: '<p>補助率は2分の1です。上限額は、体験型観光コンテンツの新規造成が200万円、既存コンテンツの磨き上げが100万円、XR活用型の新規造成が400万円、星取県推進型が100万円です。</p>'
      },
      {
        heading: '注意点',
        content: '<p>交付決定前に着手した事業は補助対象外です。申請様式や交付要綱を確認し、募集状況や予算状況を鳥取県観光戦略課に確認してから手続きしてください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tottori.lg.jp/317133.htm',
    sourceName: '鳥取県 体験型観光コンテンツ造成支援事業補助金',
    sourceUrls: [
      'https://www.pref.tottori.lg.jp/317133.htm',
      'https://www.pref.tottori.lg.jp/280067.htm'
    ],
    sourceNote: '公式ページで制度目的、補助対象事業者、補助率2分の1、事業類型別上限額、交付決定前着手不可を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nara-housing-akiya-renovation',
    title: '奈良県 県産材を使用した住宅への助成',
    organization: '奈良県',
    type: 'local',
    maxAmount: '最大101万円相当（県内住宅で構造材・内外装材を併用する場合）',
    maxAmountNum: 101,
    category: 'housing',
    prefecture: '奈良県',
    tags: ['奈良県', '住宅', 'リフォーム', '県産材'],
    eligibility: '奈良県産材等を使用し、住宅の新築、増築、改築またはリフォームを行う所有者や、県産材を使用した分譲住宅の新築を行う事業者が対象です。賃貸住宅、モデルハウスは対象外です。',
    applicationPeriod: '2026年4月20日から2026年12月15日まで。内外装材のみ申請する場合は2027年2月12日まで',
    deadlineDate: '2027-02-12',
    description: '奈良県産材、奈良県地域認証材、奈良県産JAS材を使用した住宅の新築・増築・改築・リフォームを支援する制度です。令和8年度から制度が拡充され、県産材の使用量に応じた段階的な助成や外装材の助成が案内されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良県では、県産材の利用拡大を図るため、県産材を使用した住宅の新築、増築、改築またはリフォームに対して助成を行っています。奈良県内の住宅は「森を育む木づかい建築促進事業（住宅）」、奈良県外の住宅は「県産材を使用した住宅助成事業」を利用します。</p>'
      },
      {
        heading: '補助金額',
        content: '<p>県内住宅では、構造材は使用材積と材種に応じて15万円から50万円、内装材・外装材は使用面積と材種に応じて8万円から51万円です。構造材と内外装材を併用する場合は、条件により最大101万円相当となります。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>交付申請の受付期間は2026年4月20日から2026年12月15日までです。内外装材のみ申請する場合は2027年2月12日までと案内されています。期限切れ判定は制度全体の最終受付日である2027年2月12日に合わせています。構造材は上棟予定日の20日前まで、内外装材は工事完了予定日の20日前までに受付を完了する必要があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nara.lg.jp/n096/27797.html',
    sourceName: '奈良県 県産材を使用した住宅への助成',
    sourceUrls: ['https://www.pref.nara.lg.jp/n096/27797.html'],
    sourceNote: '既存データの県単独「空き家リノベーション補助金」は公式確認できなかったため、奈良県公式の現行住宅助成制度として、県産材住宅助成の対象、補助額、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gunma-migration-support',
    title: '群馬県 移住支援金事業',
    organization: '群馬県',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円（18歳未満加算あり）',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '群馬県',
    tags: ['群馬県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、群馬県内の参加市町村へ移住し、就業・起業・テレワーク・関係人口などの要件を満たす場合に対象です。',
    applicationPeriod: '転入日の翌日から起算して1年以内。市町村ごとの予算枠に達すると年度途中で受付終了となる場合があります。',
    description: '国の地方創生移住支援事業を活用し、東京圏から群馬県へ移住して就業・起業等を行う方に移住支援金を支給する制度です。申請窓口は移住先の市町村です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>地方の人口減少対策と担い手不足の解消を目的に、東京圏から群馬県へ移住して就業・起業等を行う方に支援金を支給する制度です。群馬県では参加市町村の窓口で申請します。</p>'
      },
      {
        heading: '支給額',
        content: '<p>支給額は単身の場合60万円、世帯の場合100万円です。18歳未満の世帯員を帯同する場合は、1人につき30万円から加算され、加算額や条件は市町村ごとに異なります。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>申請できる期間は、転入日の翌日から起算して1年以内です。起業の要件で申請する場合は、起業支援金の交付決定後1年以内に申請する必要があります。</p>'
      }
    ],
    officialUrl: 'https://gunmagurashi.pref.gunma.jp/shienkin/',
    sourceName: 'ぐんまな日々 群馬県移住支援金事業',
    sourceUrls: [
      'https://gunmagurashi.pref.gunma.jp/shienkin/',
      'https://gunmagurashi.pref.gunma.jp/wp/wp-content/uploads/2026/03/735cce4f92847e5cfe523aab746be3f6.pdf'
    ],
    sourceNote: '公式移住ポータルで令和8年度案内、支給額、申請期間、参加市町村・予算枠による受付終了可能性を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tottori-migration-support',
    title: '鳥取県 移住支援金支給事業',
    organization: '鳥取県',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円（18歳未満加算は最大100万円）',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '鳥取県',
    tags: ['鳥取県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、鳥取県内市町村に移住し、就業・テレワーク・関係人口・起業などの要件を満たす場合に対象です。',
    applicationPeriod: '就業等の場合は転入後1年以内。起業支援の場合は起業支援補助金の交付決定日から1年以内かつ転入後1年以内',
    description: '鳥取県への移住・定住促進、中小企業等の人手不足解消、地域課題に対応した起業促進を目的に、東京圏から鳥取県へ移住して就業・起業等を行う方に移住支援金を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東京一極集中の是正、鳥取県への移住・定住促進、中小企業等の人手不足解消、地域課題に対応した起業を目的とする移住支援金です。支給申請は移住先の市町村に行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の世帯での移住は100万円、単身での移住は60万円です。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>就業等の場合は居住地の市町村への転入後1年以内です。起業支援の場合は、鳥取県地域課題解決型起業支援補助金の交付決定日から1年以内かつ転入後1年以内です。申請状況により年度途中で受付終了となる場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tottori.lg.jp/286713.htm',
    sourceName: '鳥取県 移住支援金支給事業',
    sourceUrls: [
      'https://www.pref.tottori.lg.jp/286713.htm',
      'https://www.pref.tottori.lg.jp/secure/1175101/jisshi_youryou.pdf'
    ],
    sourceNote: '鳥取県公式ページで支給額、18歳未満加算、移住元・移住先要件、申請期間、年度途中受付終了可能性を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kochi-migration-concierge',
    title: '高知県 地方創生移住支援事業（移住支援金）',
    organization: '高知県',
    type: 'local',
    maxAmount: '世帯最大100万円・単身最大60万円（18歳未満加算あり）',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '高知県',
    tags: ['高知県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、高知県内市町村に移住し、就業・起業・専門人材・テレワーク・関係人口のいずれかの要件を満たす場合に対象です。',
    applicationPeriod: '市町村により申請書類・申請時期が異なります。申請と相談は転入先の市町村窓口で行います。',
    description: '高知県が国の地方創生移住支援事業を活用して実施する移住支援金です。東京圏から高知県内市町村へ移住し、就業・起業・テレワーク等の要件を満たす場合に支給されます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東京23区に在住していた方、または東京圏に在住し東京23区に通勤していた方が、高知県の市町村に移住し、対象求人への就職、起業支援金の交付決定、専門人材、テレワーク、関係人口のいずれかの要件を満たした場合に支給される制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の世帯で移住した場合は最大100万円、単身で移住した場合は最大60万円です。18歳未満の世帯員を帯同して移住した場合は、市町村ごとに子育て世帯加算額が設定されています。</p>'
      },
      {
        heading: '申請先',
        content: '<p>申請書類や申請時期は転入先の市町村により異なります。申請と相談は、転入先市町村の移住支援金申請窓口に行います。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kochi.lg.jp/doc/2025031300026/',
    sourceName: '高知県 地方創生移住支援事業（移住支援金）',
    sourceUrls: [
      'https://www.pref.kochi.lg.jp/doc/2025031300026/',
      'https://www.pref.kochi.lg.jp/category/bunya/kurashi/sumai_kankyo/iju/'
    ],
    sourceNote: '高知県公式ページで2026年5月14日更新の制度概要、支給額、市町村窓口、就業・起業・テレワーク等の要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokyo-childcare-support',
    title: '東京都 ベビーシッター利用支援事業',
    organization: '東京都',
    type: 'local',
    maxAmount: '利用料の一部を助成（区市町村・利用区分により異なる）',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '東京都',
    tags: ['東京都', 'ベビーシッター', '待機児童', '一時預かり'],
    eligibility: '事業を実施する区市町村に住み、待機児童の保護者、育児休業満了後に復職する保護者、夜間帯保育を必要とする保護者、一時的な保育を必要とする保護者など、区市町村が定める要件を満たす方が対象です。',
    applicationPeriod: '通年。ただし実施区市町村、利用区分、年度、予算状況により異なります。',
    description: '東京都のベビーシッター利用支援事業です。待機児童対策の事業者連携型と、一時預かり利用支援があり、実施区市町村が対象者や運用を定め、東京都が利用料負担軽減を支援します。',
    sections: [
      {
        heading: '事業者連携型',
        content: '<p>待機児童の保護者、育児休業を1年間取得した後に復職する保護者、夜間帯保育を必要とする保護者が、東京都の認定を受けたベビーシッター事業者を利用する場合に、利用料の一部を助成する制度です。</p>'
      },
      {
        heading: '一時預かり利用支援',
        content: '<p>日常生活上の突発的な事情や社会参加などにより一時的に保育を必要とする保護者、または共同保育を必要とする保護者が、ベビーシッターを利用する場合の費用負担を軽減する制度です。</p>'
      },
      {
        heading: '確認事項',
        content: '<p>対象者、対象児童、利用上限、申請方法、助成内容は区市町村ごとに異なります。利用前に、居住する区市町村の案内と東京都の令和8年度利用案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/bs/bsjigyousyarenkeigata',
    sourceName: '東京都福祉局 ベビーシッター利用支援事業',
    sourceUrls: [
      'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/bs/bsjigyousyarenkeigata',
      'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/bs/bsitijiazukari',
      'https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/bs/jigyoushalist'
    ],
    sourceNote: '東京都福祉局公式ページで事業者連携型、一時預かり利用支援、対象者、実施区市町村、令和8年度利用案内の存在を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'osaka-senior-medical',
    title: '大阪府 後期高齢者医療制度の高額療養費',
    organization: '大阪府後期高齢者医療広域連合',
    type: 'local',
    maxAmount: '自己負担限度額を超えた医療費を支給',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['大阪府', '後期高齢者医療', '高額療養費', '医療給付'],
    eligibility: '大阪府後期高齢者医療広域連合の区域内に住所がある75歳以上の方、または一定の障がいがあると認定された65歳以上の方で、医療費の一部負担金が所得区分等に応じた自己負担限度額を超えた場合に対象です。',
    applicationPeriod: '通年。初回は勧奨通知後に市区町村担当窓口で申請し、口座登録後は原則自動振込',
    description: '大阪府後期高齢者医療制度で受けられる給付の一つです。同一月内に支払った医療費の一部負担金を合算し、自己負担限度額を超えた部分について高額療養費として支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>後期高齢者医療制度は、75歳以上の方と、一定の障がいがあると認定された65歳以上の方が加入し、医療給付等を受ける制度です。大阪府では広域連合が制度を運営し、市区町村が窓口業務を行います。</p>'
      },
      {
        heading: '高額療養費',
        content: '<p>同一月内に支払った医療費の一部負担金を合算し、所得区分等に応じた自己負担限度額を超えた部分を支給します。入院時の食事代や保険診療のきかない差額ベッド代などは対象外です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>口座登録がない方には、診療月から最短で3か月後に勧奨通知が送付されます。市区町村担当窓口で申請し、一度申請して口座登録すると、次回以降は高額療養費が原則自動的に振り込まれます。</p>'
      }
    ],
    officialUrl: 'https://www.kouikirengo-osaka.jp/longlife/supply/kougakuryoyo/',
    sourceName: '大阪府後期高齢者医療広域連合 高額療養費',
    sourceUrls: [
      'https://www.kouikirengo-osaka.jp/longlife/',
      'https://www.kouikirengo-osaka.jp/longlife/supply/kougakuryoyo/'
    ],
    sourceNote: '大阪府後期高齢者医療広域連合公式ページで制度対象者、広域連合の運営、高額療養費の給付内容と申請方法を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akita-child-support',
    title: '秋田県 福祉医療制度（乳幼児・小中高生等）',
    organization: '秋田県・県内市町村',
    type: 'local',
    maxAmount: '18歳年度末までの医療費自己負担を助成',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '秋田県',
    tags: ['秋田県', '子ども医療費', '福祉医療', '市町村申請'],
    eligibility: '0歳から18歳に達する日以後の最初の3月31日までの児童生徒等が対象です。市町村によって対象年齢や自己負担額等を独自に定めている場合があります。',
    applicationPeriod: '通年（医療費助成を受けるには事前に市町村で福祉医療の受給者証を取得）',
    description: '秋田県が市町村の実施する福祉医療制度を支援し、乳幼児・小中高生等の医療費負担を軽減する制度です。令和6年8月以降、乳幼児・小中高生等の対象範囲が18歳年度末までに拡大されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田県では、乳幼児・小中高生等、ひとり親家庭の児童生徒等、障害者等を対象に、市町村が実施する福祉医療制度を支援しています。子どもについては、0歳から18歳に達する日以後の最初の3月31日までが対象です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>0歳児と市町村民税所得割非課税者の子どもは、医療機関等の窓口で支払う自己負担額の全額が助成されます。その他の子どもは窓口自己負担が半額となり、1医療機関1か月あたり1,000円が上限です。入院時食事療養費の標準負担額は対象外です。</p>'
      },
      {
        heading: '手続き',
        content: '<p>医療費助成を受けるには、事前に福祉医療の受給者証を取得する必要があります。市町村によって対象年齢や自己負担額等が異なる場合があるため、詳細は住所地の市町村福祉医療担当課で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.akita.lg.jp/pages/archive/84581',
    sourceName: '秋田県 福祉医療制度',
    sourceUrls: [
      'https://www.pref.akita.lg.jp/pages/archive/84581',
      'https://www.pref.akita.lg.jp/pages/archive/80456'
    ],
    sourceNote: '秋田県公式ページで福祉医療制度の対象、18歳年度末までの対象範囲、助成内容、令和6年8月改正、事前受給者証取得を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukui-migration-employment',
    title: '福井県 移住支援金（東京圏型）',
    organization: '福井県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円以上・単身60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '福井県',
    tags: ['福井県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、福井県内の市町へ移住し、就業・起業・テレワーク等の要件を満たす場合に対象です。実施状況や詳細要件は移住先市町で確認します。',
    applicationPeriod: '転入後1年以内。市町により申請開始時期や受付期間が異なる場合あり',
    description: '東京圏から福井県へ移住し、対象求人への就業、起業、テレワーク等の要件を満たす方に支給される移住支援金です。旧生成データのUIターン就職支援を、福井県公式の現行移住支援金として確認済みに置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井県移住支援金は、東京圏から福井県内の市町へ移住する方を支援する制度です。移住元、移住先、就業・起業・テレワーク等の要件を満たす場合に、移住先市町を通じて申請します。</p>'
      },
      {
        heading: '支給額',
        content: '<p>県公式ページでは、世帯向けは100万円以上、単身向けは60万円と案内されています。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき最大100万円が加算される場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先の市町です。世帯要件、転入後1年以内の申請、5年以上継続居住の意思、対象求人や起業支援金との関係など、市町ごとの案内を確認してから手続きします。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukui.lg.jp/doc/wakatei/uiturn/ijusienkin.html',
    sourceName: '福井県 東京圏から移住される方へ 移住支援金をサポート',
    sourceUrls: [
      'https://www.pref.fukui.lg.jp/doc/wakatei/uiturn/ijusienkin.html',
      'https://www.fukui-ijunavi.jp/support/03'
    ],
    sourceNote: '福井県公式ページと公式移住ポータルで、東京圏型移住支援金、世帯・単身支給額、18歳未満加算、市町申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kofu-migration-support',
    title: '甲府市 移住支援金交付事業',
    organization: '甲府市',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '山梨県',
    tags: ['甲府市', '移住支援', '東京圏', '山梨県'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が甲府市へ移住し、就業・起業・テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '甲府市へ転入後3か月以上1年以内。予算額を超えた場合は交付できない場合あり',
    description: '甲府市へ移住する東京圏からの移住者を支援する交付金です。単身60万円、2人以上の世帯100万円に加え、18歳未満の世帯員を帯同する場合は1人につき100万円の加算があります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲府市移住支援金交付事業は、東京圏から甲府市へ移住し、就業・起業・テレワーク等の要件を満たす方を対象に支援金を交付する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身の場合は60万円、2人以上の世帯の場合は100万円です。18歳未満の世帯員を帯同して移住する場合は、18歳未満の世帯員1人につき100万円が加算されます。</p>'
      },
      {
        heading: '申請時の注意点',
        content: '<p>申請は甲府市への転入後3か月以上1年以内に行います。予算額を超えた場合は交付できない場合があるため、移住前または転入後早期に市へ相談してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/kikaku-somu/ijuushienkin.html',
    sourceName: '甲府市 移住支援金交付事業について',
    sourceUrls: ['https://www.city.kofu.yamanashi.jp/kikaku-somu/ijuushienkin.html'],
    sourceNote: '甲府市公式ページで、支給額、18歳未満加算、転入後3か月以上1年以内の申請、予算上限による注意を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'wakayama-migration-support',
    title: '和歌山県 移住支援事業（移住支援金）',
    organization: '和歌山県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満帯同者加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '和歌山県',
    tags: ['和歌山県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、和歌山県内市町村へ移住し、マッチング支援事業、起業支援事業、テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '移住後1年以内。ただし市町村の受付期間・予算・事務処理状況により受付できない場合あり',
    description: '東京圏から和歌山県内へ移住し、就業・起業・テレワーク等の要件を満たす方に、県と移住先市町村が共同で支給する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山県移住支援事業は、東京23区の在住者または東京圏から東京23区への通勤者が、県内に移住して対象要件を満たす場合に支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>県公式ページでは、世帯100万円、単身60万円と案内されています。18歳未満の帯同者がいる場合は、18歳未満の方1人につき100万円が加算されます。支援金額は市町村により異なる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>移住後1年以内に移住先市町村へ申請します。市町村ごとに受付期間、予算状況、独自要件があるため、移住前に申請可否を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.wakayama.lg.jp/prefg/022200/d00216634.html',
    sourceName: '和歌山県 移住支援事業（移住支援金）等について',
    sourceUrls: [
      'https://www.pref.wakayama.lg.jp/prefg/022200/d00216634.html',
      'https://hataracoorde.com/ijushien/'
    ],
    sourceNote: '和歌山県公式ページと県の就業支援サイトで、対象者、世帯・単身支給額、18歳未満加算、移住後1年以内の申請、市町村確認を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyazaki-migration-support',
    title: '宮崎県 移住支援金制度',
    organization: '宮崎県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円＋子育て加算、単身60万円または30万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '宮崎県',
    tags: ['宮崎県', '移住支援', '地方移住', '市町村申請'],
    eligibility: '東京圏、名古屋圏、大阪圏、福岡県などから宮崎県内へ移住し、就職・起業・テレワーク等の要件を満たす方が対象です。市町村ごとに対象となる就業形態や要件が異なります。',
    applicationPeriod: '移住先市町村の受付期間に従う。申請前に市町村へ確認',
    description: '宮崎県外の都市圏から県内へ移住し、対象求人への就職、起業、テレワーク等の要件を満たす方を支援する移住支援金制度です。市町村により対象要件や受付状況が異なります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎県移住支援金制度は、都市圏等から宮崎県内へ移住し、就職・起業・テレワーク等の要件を満たす方を対象とする支援制度です。市町村ごとに対象となる就業形態が異なります。</p>'
      },
      {
        heading: '支給額',
        content: '<p>県公式移住サイトでは、世帯での移住は100万円＋子育て加算、単身での移住は60万円または30万円と案内されています。18歳未満の世帯員を帯同して移住する場合は、1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請は移住先市町村で行います。移住元の地域・期間、5年以上居住する意思、対象求人・起業・テレワーク等の要件を、市町村の最新案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://iju.pref.miyazaki.lg.jp/support/grant-system/',
    sourceName: '宮崎県移住・UIJターン情報サイト 宮崎県移住支援金制度',
    sourceUrls: [
      'https://iju.pref.miyazaki.lg.jp/support/grant-system/',
      'https://www.city.miyazaki.miyazaki.jp/business/loan/286647.html'
    ],
    sourceNote: '宮崎県公式移住サイトで、対象地域、要件、世帯・単身支給額、18歳未満加算、市町村ごとの対象差を確認。宮崎市公式ページで令和8年度の支給額例を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okayama-migration-support',
    title: '岡山県 移住支援金制度',
    organization: '岡山県・県内市町村',
    type: 'local',
    maxAmount: '世帯最大100万円・単身最大60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '岡山県',
    tags: ['岡山県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、岡山県内の対象市町村へ移住し、就業・起業・テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。就業等の要件により申請期限が異なるため市町村へ確認',
    description: '岡山県への移住を支援する移住支援金制度です。東京圏から岡山県内の対象市町村に移住し、就業・起業・テレワーク等の要件を満たす方に、市町村を通じて支援金を支給します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山県の移住支援金制度は、東京圏から岡山県内の対象市町村へ移住する方を支援する制度です。就業、起業、テレワーク、関係人口など、どの要件で申請できるかは市町村の案内で確認します。</p>'
      },
      {
        heading: '支給額',
        content: '<p>県の移住情報サイトでは、単身での移住は最大60万円、2人以上の世帯での移住は最大100万円と案内されています。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき最大100万円が加算される場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先の市町村です。対象求人、テレワーク要件、起業支援金、関係人口要件、申請期限、予算状況は市町村ごとに異なるため、移住前に窓口へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.okayama-iju.jp/info/post-148.html',
    sourceName: 'おかやま晴れの国ぐらし 令和8年度移住支援金制度について',
    sourceUrls: [
      'https://www.okayama-iju.jp/info/post-148.html',
      'https://okayama-life.jp/work/subvention'
    ],
    sourceNote: '岡山県の公式移住ポータルで令和8年度制度、世帯・単身支給額、18歳未満加算、市町村申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hiroshima-migration-support',
    title: '広島県 移住支援金',
    organization: '広島県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '広島県',
    tags: ['広島県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、広島県内の移住支援金対象市町へ移住し、就職・テレワーク・起業・関係人口等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町の受付期間に従う。申請前に市町へ確認',
    description: '東京圏から広島県内へ移住し、対象求人への就職、テレワーク、起業、関係人口等の要件を満たす方に、市町への申請に基づいて支給される移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>広島県の移住支援金は、東京圏から県内の対象市町へ移住し、就職・テレワーク・起業・関係人口などの要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>支給額は、単身者の場合60万円、2人以上の世帯の場合は1世帯につき100万円です。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>移住先市町へ申請します。移住等に関する要件に加え、就職、テレワーク、起業、関係人口のいずれかの要件を満たす必要があります。対象市町や受付状況は最新の県・市町案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hiroshima.lg.jp/soshiki/246/202304ijyushiennkinn.html',
    sourceName: '広島県 令和8年度移住支援金制度',
    sourceUrls: [
      'https://www.pref.hiroshima.lg.jp/soshiki/246/202304ijyushiennkinn.html',
      'https://www.hiroshima-hirobiro.jp/help/shisaku/'
    ],
    sourceNote: '広島県公式ページで令和8年度制度、支給額、18歳未満加算、対象要件、市町申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamaguchi-migration-support',
    title: '山口県 移住就業支援金',
    organization: '山口県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '山口県',
    tags: ['山口県', '移住支援', '大都市圏', '市町申請'],
    eligibility: '東京圏等の大都市圏から山口県内の市町へ移住し、就業・創業・テレワーク等の要件を満たす方が対象です。移住元の区分により支給額が異なります。',
    applicationPeriod: '移住先市町の受付期間に従う。提出書類・期限は市町へ確認',
    description: '大都市圏から山口県へ移住して就業等を行う方を支援する移住就業支援金です。旧生成データの「やまぐち移住支援金」を、山口県公式の現行制度として確認済みに置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口県移住就業支援金は、大都市圏から山口県内へ移住し、就業・創業・テレワーク等の要件を満たす方を支援する制度です。申請は移住先市町で行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>県公式ページでは、東京圏等の要件に該当する場合、2人以上の世帯で100万円、18歳未満の方1人につき100万円加算、単身で60万円と案内されています。別区分では世帯50万円、18歳未満加算50万円、単身30万円の場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>提出書類は市町によって異なる場合があります。移住先市町の担当窓口で、対象要件、申請期限、就業・創業・テレワーク要件、必要書類を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamaguchi.lg.jp/soshiki/86/21177.html',
    sourceName: '山口県 大都市圏から山口へ 移住就業支援金',
    sourceUrls: [
      'https://www.pref.yamaguchi.lg.jp/soshiki/86/21177.html',
      'https://ymg-uji.jp/lp/rodo/from-fukuoka.html'
    ],
    sourceNote: '山口県公式ページで支給額、18歳未満加算、支給区分、申請先市町、提出書類は市町により異なることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokushima-migration-support',
    title: '徳島県 徳島わくわく移住支援事業',
    organization: '徳島県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '徳島県',
    tags: ['徳島県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京圏から徳島県内へ移住し、就業・起業等の要件を満たす方が対象です。実施内容や加算額は移住先市町村により異なります。',
    applicationPeriod: '移住先市町村の受付期間に従う。申請予定者は市町村窓口へ確認',
    description: '徳島県が東京圏からのUIJターンや若者の移住促進、地方の担い手不足解消を目的に実施する移住支援事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島わくわく移住支援事業は、東京圏から徳島県へ移住し、就業・起業等の要件を満たす方を支援する制度です。申請予定者は移住先の市町村連絡窓口へ確認します。</p>'
      },
      {
        heading: '支給額',
        content: '<p>県公式ページでは、単身の場合60万円、2人以上の世帯の場合100万円と案内されています。18歳未満の世帯員を帯同する場合は、1人につき最大100万円が加算されます。加算額は移住先市町村により異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>移住先市町村へ申請します。求人登録、就業・起業要件、対象市町村、予算状況は年度や市町村により変わるため、最新の公式案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tokushima.lg.jp/ippannokata/kurashi/chihososei/7304045/',
    sourceName: '徳島県 徳島わくわく移住支援事業について',
    sourceUrls: [
      'https://www.pref.tokushima.lg.jp/ippannokata/kurashi/chihososei/7304045/',
      'https://www.city.tokushima.tokushima.jp/shisei/machi_keikaku/townplanning/ijyu_sokushin/ijyu_sienkin.html'
    ],
    sourceNote: '徳島県公式ページで2026年4月1日掲載の支援額、18歳未満加算、市町村窓口確認を確認。徳島市公式ページで支給例と予算終了時の注意を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuoka-migration-support',
    title: '福岡県 移住支援金',
    organization: '福岡県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、子ども1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '福岡県',
    tags: ['福岡県', '移住支援', '三大都市圏', '市町村申請'],
    eligibility: '三大都市圏等から福岡県内の対象市町村へ移住し、就業・起業・テレワーク等の要件を満たす方が対象です。申請先は移住先市町村です。',
    applicationPeriod: '転入後1年以内が基本。市町村の受付期間・予算状況に従う',
    description: '福岡県外から県内市町村へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡県移住支援金は、三大都市圏等から福岡県内の対象市町村へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>支給額は、単身での移住の場合60万円、世帯での移住の場合100万円です。18歳未満の子どもを帯同して移住する場合は、子ども1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請は移住先市町村で行います。世帯要件、子ども加算、対象求人、テレワークや起業の要件、予算状況は市町村に確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html',
    sourceName: '福岡県 移住支援金を活用して、福岡県で働きませんか？',
    sourceUrls: [
      'https://www.pref.fukuoka.lg.jp/contents/ijushienkin.html',
      'https://www.city.munakata.lg.jp/live/kiji0032282/index.html'
    ],
    sourceNote: '福岡県公式ページで支給額、子ども加算、世帯要件、移住支援金交付の流れを確認。市町村ページで予算状況確認の注意を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-migration-support',
    title: '長崎県 移住支援事業（移住支援金）',
    organization: '長崎県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、子育て加算最大100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '長崎県',
    tags: ['長崎県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京圏から長崎県内市町へ移住し、就業・創業・テレワーク・関係人口等の要件を満たす方が対象です。',
    applicationPeriod: '移住した日から1年以内。就業・創業・テレワーク・関係人口の要件により確認事項あり',
    description: '長崎県と県内市町が、東京圏からの移住促進と地域の雇用創出を目的に実施する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎県移住支援事業は、東京圏から長崎県内へ移住し、就業・創業・テレワーク・関係人口等の要件を満たす方を支援する制度です。申請は移住先市町の移住担当課へ行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の世帯の場合は100万円、単身の場合は60万円です。18歳未満の世帯員を帯同して移住する場合は、1人につき最大100万円が加算されます。市町によっては子育て加算が30万円の場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請書と必要書類を添えて、移住先市町の移住担当課に申請します。就業の場合、創業の場合、テレワークまたは関係人口の場合のいずれも、原則として移住した日から1年以内の申請が案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nagasaki.jp/doc/page-391575.html',
    sourceName: '長崎県 東京から長崎県へのUIターンを考えている方向けの補助金',
    sourceUrls: [
      'https://www.pref.nagasaki.jp/doc/page-391575.html',
      'https://nagasaki-iju.jp/ijusienkin/'
    ],
    sourceNote: '長崎県公式ページと公式移住ナビで、移住支援金、世帯・単身支給額、子育て加算、申請期間、市町申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aomori-migration-support',
    title: '青森県 あおもり移住支援事業',
    organization: '青森県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算最大100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '青森県',
    tags: ['青森県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、青森県内市町村へ移住し、対象求人への就業・起業・テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。予算上限に達した場合は受付終了の可能性あり',
    description: '青森県と県内市町村が共同で、県内への移住・定住促進と中小企業等の人手不足解消を目的に支給する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>あおもり移住支援事業は、東京圏から青森県内へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する制度です。申請は移住先市町村で行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身での移住は60万円、世帯での移住は100万円です。18歳未満の世帯員を帯同する場合は、18歳未満の方1人につき最大100万円が加算される場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>対象求人、子育て加算額、申請できる期間、受付状況は市町村により異なります。転入前に移住先市町村へ直接確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aomori.lg.jp/soshiki/kodomo/wakamono/ijyuusiennkinn.html',
    sourceName: '青森県 最大100万円を支給します！ あおもり移住支援事業',
    sourceUrls: [
      'https://www.pref.aomori.lg.jp/soshiki/kodomo/wakamono/ijyuusiennkinn.html',
      'https://www.hirosakigurashi.jp/executive-service/payments/'
    ],
    sourceNote: '青森県公式ページで支給額、18歳未満加算、市町村申請、予算上限時の受付終了を確認。弘前市公式移住ページで市町村側の支給額例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iwate-migration-support',
    title: '岩手県 移住支援金',
    organization: '岩手県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '岩手県',
    tags: ['岩手県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、岩手県内へ移住し、就業・起業・テレワーク・関係人口等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。申請先は市町村の移住支援金担当課',
    description: '岩手県が東京圏から県内へ移住する方の経済的負担を軽減するために実施する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岩手県移住支援金は、東京圏から岩手県内へ移住し、就業・起業・テレワーク・関係人口などの要件を満たす方を支援する制度です。住民票の異動を伴う移住が前提です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯での移住は100万円、単身での移住は60万円です。18歳未満の子どもを帯同して移住する場合は、1人あたり100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先の市町村です。移住元・移住先要件、就業等の要件、必要書類、受付期限は市町村の最新案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.iwate.jp/kurashikankyou/1021252/1019670.html',
    sourceName: '岩手県 岩手県移住支援金の支給',
    sourceUrls: [
      'https://www.pref.iwate.jp/kurashikankyou/1021252/1019670.html',
      'https://www.shigotoba-iwate.com/shienkin/'
    ],
    sourceNote: '岩手県公式ページで支給金額、子育て加算、申請先、市町村担当課を確認。県関連求人サイトで対象者範囲を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamagata-migration-support',
    title: '山形県 移住支援事業（移住支援金）',
    organization: '山形県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算最大100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '山形県',
    tags: ['山形県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、山形県内へ移住し、就業・起業・テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。転入後の期限や必要書類は市町村へ確認',
    description: '山形県内への移住と就業・起業等を支援する移住支援金です。支給は県内市町村を通じて行われます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形県移住支援事業は、東京圏から山形県内へ移住し、就業・起業・テレワーク等の要件を満たす方に移住支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯での移住は100万円、単身での移住は60万円です。18歳未満の世帯員がいる場合は、18歳未満1人あたり最大100万円が加算される場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。対象求人、起業支援金、テレワーク、関係人口要件、申請期限、予算状況を市町村の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamagata.jp/020030/kurashi/chiiki/ijuushashien/ijyushien.html',
    sourceName: '山形県 山形県移住支援事業（移住支援金）について',
    sourceUrls: [
      'https://www.pref.yamagata.jp/020030/kurashi/chiiki/ijuushashien/ijyushien.html',
      'https://job.yamagata-iju.jp/shienkin'
    ],
    sourceNote: '山形県公式ページで支給額、18歳未満加算、制度概要を確認。山形県移住支援金対象求人サイトで対象者要件を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ishikawa-migration-support',
    title: '石川県 いしかわ移住支援事業',
    organization: '石川県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満の子1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '石川県',
    tags: ['石川県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区に5年以上在住または通勤していた方が、石川県内へUIターンし、対象法人への就業・テレワーク・関係人口等の要件を満たす場合に対象です。',
    applicationPeriod: '令和8年度受付中。県または市町の予算上限に達した場合は期限前終了の可能性あり',
    description: '石川県内への移住・定住促進と県内中小企業等の人手不足解消を目的に実施される移住支援事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いしかわ移住支援事業は、東京23区に5年以上在住または通勤した方が石川県内へUIターンし、対象法人への就業、テレワーク、関係人口等の要件を満たす場合に支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯の場合は100万円、単身の場合は60万円です。18歳未満の子どもを帯同する世帯は、18歳未満の子1人につき100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請は移住先市町で行います。県または市町の予算上限に達した場合は受付終了となることがあるため、移住前に窓口へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ishikawa.lg.jp/roudou/ilac/izyushienkin.html',
    sourceName: '石川県 いしかわ移住支援事業',
    sourceUrls: [
      'https://www.pref.ishikawa.lg.jp/roudou/ilac/izyushienkin.html',
      'https://iju.ishikawa.jp/localsupport/'
    ],
    sourceNote: '石川県公式ページで令和8年度受付、支給額、18歳未満加算、対象要件を確認。公式移住情報ひろばで制度概要を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mie-migration-support',
    title: '三重県 移住支援金',
    organization: '三重県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算最大100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '三重県',
    tags: ['三重県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区内在住者または東京圏在住で東京23区内へ通勤していた方が、三重県内の対象市町へ移住し、就業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町の受付期間に従う。対象市町・受付状況は市町へ確認',
    description: '三重県が東京圏から県内市町への移住を支援する移住支援金です。県内の一部市町を除く対象市町で実施されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三重県移住支援金は、東京23区内に在住または東京圏から東京23区内へ通勤していた方が、県内対象市町へ移住し、就業等の要件を満たす場合に支給されます。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身での移住は60万円、2人以上の世帯での移住は100万円です。18歳未満の子どもを帯同する場合は、子ども1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請は移住先市町で行います。対象市町、就業・起業・テレワーク等の要件、予算状況、必要書類は市町の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.ijyu.pref.mie.lg.jp/support/',
    sourceName: '美し国みえ 移住ポータルサイト 移住者支援制度',
    sourceUrls: [
      'https://www.ijyu.pref.mie.lg.jp/support/',
      'https://www.city.yokkaichi.lg.jp/www/contents/1589692436765/index.html'
    ],
    sourceNote: '三重県公式移住ポータルで支給額、18歳未満加算、対象市町を確認。四日市市公式ページで令和8年度の市町実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shiga-migration-support',
    title: '滋賀県 移住就業支援事業',
    organization: '滋賀県・県内対象市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、一部自治体で18歳未満加算最大50万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '滋賀県',
    tags: ['滋賀県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、滋賀県内の移住対象市町へ移住し、就業・起業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町が定める受付期間。転入後1年以内の申請が必要',
    description: '滋賀県内の対象市町へ移住し、就業・起業等の要件を満たす方に支給される移住就業支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>滋賀県移住就業支援事業は、東京圏から滋賀県内の移住対象市町へ移住し、就業・起業等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の世帯の場合は100万円、単身の場合は60万円です。一部自治体では、18歳未満の世帯員を帯同して移住する場合、18歳未満の方1人につき最大50万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町の担当窓口です。対象市町、受付期間、必要書類、返還要件を市町の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shiga.lg.jp/ippan/shigotosangyou/shigoto/304820.html',
    sourceName: '滋賀県 滋賀県移住就業支援事業',
    sourceUrls: [
      'https://www.pref.shiga.lg.jp/ippan/shigotosangyou/shigoto/304820.html',
      'https://www.city.higashiomi.shiga.jp/ijuu_teijuu/teijuu_ijuushiennguide/1006819.html'
    ],
    sourceNote: '滋賀県公式ページで対象市町、支給額、18歳未満加算、転入後1年以内申請、申請先を確認。東近江市公式ページで市町実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyama-migration-support',
    title: '富山市 移住支援金',
    organization: '富山市',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '富山県',
    tags: ['富山県', '富山市', '移住支援', '東京圏'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、富山市へ移住し、就業・起業・テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '転入日から1年以内。令和8年度中の申請受付は令和9年2月15日まで',
    description: '富山市へ移住し、就業・起業・テレワーク等の要件を満たす方に交付される移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市移住支援金は、東京圏から富山市へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する制度です。県の移住支援金制度に基づき、市が申請窓口となります。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身の場合は60万円、2人以上の世帯の場合は100万円です。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>富山市へ申請します。転入日から1年以内に申請する必要があります。令和8年度中の申請受付期限も設定されているため、申請前に最新の市公式案内を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/shisei/seisaku/1010755/1002498.html',
    sourceName: '富山市 富山市移住支援金',
    sourceUrls: [
      'https://www.city.toyama.lg.jp/shisei/seisaku/1010755/1002498.html',
      'https://www.pref.toyama.jp/documents/4163/01349908.pdf'
    ],
    sourceNote: '富山市公式ページで令和8年度の支給額、18歳未満加算、転入後1年以内、申請受付期限を確認。富山県資料で県制度概要を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gifu-migration-support',
    title: '岐阜県 移住支援金',
    organization: '岐阜県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '岐阜県',
    tags: ['岐阜県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京圏から岐阜県内へ移住し、就業・起業・テレワーク等の要件を満たす方が対象です。詳細な対象要件は移住先市町村により異なります。',
    applicationPeriod: '移住先市町村の受付期間に従う。予算・受付状況は市町村へ確認',
    description: '岐阜県内への移住と就業・起業等を支援する移住支援金です。県公式移住サイトで、単身世帯60万円、2人以上世帯100万円の支援金として案内されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜県移住支援金は、東京圏から岐阜県内へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する制度です。申請は移住先市町村で行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>県公式移住サイトでは、単身世帯は60万円、2人以上世帯は100万円の支援金と案内されています。市町村や申請要件によって加算や支給条件が異なる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>移住先市町村へ申請します。対象求人、テレワーク、起業、子育て加算の有無、予算状況、必要書類は市町村の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.gifu-iju.com/support_prefecture/',
    sourceName: 'ふふふぎふ 支援・補助金（県）',
    sourceUrls: [
      'https://www.gifu-iju.com/support_prefecture/',
      'https://www.city.gifu.lg.jp/kurashi/sumai/1002451/1016154.html'
    ],
    sourceNote: '岐阜県公式移住サイトで移住支援金の支給額を確認。岐阜市公式ページで市町村実施例、テレワーク時の金額差、子ども加算を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyoto-migration-support',
    title: '京都府 移住支援金',
    organization: '京都府・対象市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '京都府',
    tags: ['京都府', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区内へ通勤していた方が、京都府内の対象市町村へ移住し、就業等の要件を満たす場合に対象です。',
    applicationPeriod: '対象市町村の受付期間に従う。予算状況により受付終了の可能性あり',
    description: '京都府内の対象市町村へ移住し、対象求人への就業や市町村が定める産業への就業等を行う方に、国・京都府・市町村が共同で支援金を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都府移住支援金は、東京23区に在住または東京圏から東京23区内へ通勤していた方が、京都府内の対象市町村へ移住し、対象求人への就業等の要件を満たす場合に支給されます。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯の場合は100万円、単身の場合は60万円です。移住に帯同する18歳未満の子ども1人あたり最大100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先や細かな要件は対象市町村により異なります。予算状況により受付終了となる場合があるため、早い段階で移住先市町村へ相談してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kyoto.jp/jobpark/ijusienkin.html',
    sourceName: '京都府 京都府移住支援金のお知らせ',
    sourceUrls: [
      'https://www.pref.kyoto.jp/jobpark/ijusienkin.html',
      'https://www.kyoto-iju.jp/shien_system/'
    ],
    sourceNote: '京都府公式ページで概要、支給額、18歳未満加算、対象市町村相談、予算終了可能性を確認。京都府公式移住サイトで制度概要を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagawa-migration-support',
    title: '香川県 東京圏移住支援事業補助金',
    organization: '香川県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '香川県',
    tags: ['香川県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、香川県内の対象市町へ移住し、就業・起業等の要件を満たす場合に対象です。',
    applicationPeriod: '各年度4月から2月末日まで。転入後1年以内など市町により申請期間が異なる',
    description: '香川県内の対象市町へ移住し、就業等を行う方を支援する東京圏移住支援事業補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>香川県の東京圏移住支援事業補助金は、東京圏から県内の対象市町へ移住し、就業・起業等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の世帯の場合は100万円、単身世帯の場合は60万円です。18歳未満の世帯員1人につき100万円が加算されます。ただし、高松市や丸亀市など一部市町では基本額や加算額が異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町です。申請期間は市町により異なり、3月は申請不可と案内されています。転入時期と受付期間を事前に確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kagawa.lg.jp/chiiki/iju/izyusienkin.html',
    sourceName: '香川県 東京圏移住支援事業補助金',
    sourceUrls: [
      'https://www.pref.kagawa.lg.jp/chiiki/iju/izyusienkin.html'
    ],
    sourceNote: '香川県公式ページで対象市町、支給額、子育て加算、市町別の金額差、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ehime-migration-support',
    title: '愛媛県 移住支援事業（移住支援金）',
    organization: '愛媛県・県内市町',
    type: 'local',
    maxAmount: '世帯最大100万円・単身最大60万円、18歳未満加算は市により異なる',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '愛媛県',
    tags: ['愛媛県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、愛媛県内の対象市町へ移住し、就業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町の受付期間に従う。詳細は市町へ確認',
    description: '愛媛県が地方創生移住支援事業を活用して実施する移住支援金です。旧生成データを公式確認済みデータとして置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>愛媛県移住支援事業は、東京圏から愛媛県内へ移住し、就業等の要件を満たす方を支援する制度です。対象市町や加算内容は移住先により異なります。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身世帯は最大60万円、2人以上の世帯は最大100万円です。18歳未満の世帯員を帯同する場合の加算は市により異なり、今治市10万円、宇和島市30万円、大洲市60万円、新居浜市・四国中央市100万円などの例があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町です。対象求人、子育て加算、受付期間、予算状況は市町により異なるため、移住先市町の担当窓口へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://ano-kono.ehime.jp/st/shienkin/usr/',
    sourceName: '愛媛県移住支援金対象のお仕事探し あのこの愛媛',
    sourceUrls: [
      'https://ano-kono.ehime.jp/st/shienkin/usr/',
      'https://www.city.niihama.lg.jp/soshiki/promo/izyuusiennkin.html'
    ],
    sourceNote: '愛媛県公式求人・移住支援サイトで支給額、市別の18歳未満加算差、制度概要を確認。新居浜市公式ページで市実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-migration-support',
    title: '佐賀県 移住支援金',
    organization: '佐賀県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '佐賀県',
    tags: ['佐賀県', '移住支援', '東京圏', '子育て世帯'],
    eligibility: '東京23区内に在住または通勤していた方が対象です。佐賀県外からの移住でも、子育て世帯要件や重点分野の担い手要件などに該当する場合は対象となる場合があります。',
    applicationPeriod: '移住先市町の受付期間に従う。申請先・必要書類は市町へ確認',
    description: '佐賀県内への移住を支援する移住支援金です。東京圏からの移住に加え、県外からの移住でも一定要件を満たす場合に対象となります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀県移住支援金は、東京23区内に在住または通勤していた方などを対象に、佐賀県内への移住を支援する制度です。県外からの移住でも、子育て世帯要件や重点分野の担い手要件に該当する場合があります。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身の場合は60万円、世帯の場合は100万円です。東京圏からの移住では、18歳未満の子ども1人につき最大100万円が加算されます。佐賀市では加算上限200万円など、市町により取扱いが異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請は移住先市町で行います。移住元要件、就職・起業・農林漁業・空き家取得・伝統工芸等の要件、子育て加算の扱いは、県と市町の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.sagasmile.com/support/money',
    sourceName: 'サガスマイル 移住支援金',
    sourceUrls: [
      'https://www.sagasmile.com/support/money',
      'https://www.pref.saga.lg.jp/kiji003112772/index.html',
      'https://www.city.saga.lg.jp/kurashi/sumai/1/714.html'
    ],
    sourceNote: '佐賀県公式移住ポータルで支給額、18歳未満加算、県外移住要件を確認。佐賀県公式ページと佐賀市公式ページで制度詳細・市実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyagi-migration-support',
    title: '宮城県 移住支援金',
    organization: '宮城県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '宮城県',
    tags: ['宮城県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、宮城県内へ移住し、就業・起業・テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。支給見込みや予算状況は市町村へ確認',
    description: '宮城県内への移住を支援する移住支援金です。市町村が窓口となり、国・宮城県・市町村が協力して実施します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮城県移住支援金は、東京圏から宮城県内へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する制度です。申請は移住先市町村で行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯での移住は100万円、単身での移住は60万円です。18歳未満の世帯員を帯同する場合は、1人につき100万円が加算される市町村例があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>市町村が申請窓口です。対象要件、申請書類、受付期限、予算状況は移住先市町村の最新案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://miyagi-ijuguide.pref.miyagi.jp/support_dtl',
    sourceName: 'みやぎ移住・交流ガイド 移住支援情報詳細',
    sourceUrls: [
      'https://miyagi-ijuguide.pref.miyagi.jp/support_dtl',
      'https://www.city.sendai.jp/koyotaisaku/kurashi/machi/kezaikoyo/kyujin/ijuushien/ijuushaboshuu.html'
    ],
    sourceNote: '宮城県公式移住サイトで世帯100万円・単身60万円、世帯要件を確認。仙台市公式ページで令和8年度の子ども加算と市町村窓口例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akita-migration-support',
    title: '秋田県 移住支援金制度',
    organization: '秋田県・県内市町村',
    type: 'local',
    maxAmount: '家族100万円・単身60万円、18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '秋田県',
    tags: ['秋田県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京圏から秋田県内へ移住し、就業・起業等の一定要件を満たす方が対象です。転入前認定が必要な場合があります。',
    applicationPeriod: '市町村により異なる。転入前に移住先市町村へ直接確認',
    description: '秋田県内へ移住する方に、県内市町村を通じて支給される移住支援金制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田県移住支援金制度は、東京圏から秋田県内へ移住し、一定の就業・起業等の要件を満たす方に支援金を支給する制度です。市町村により転入前認定が必要な場合があります。</p>'
      },
      {
        heading: '支給額',
        content: '<p>家族で移住する場合は100万円、単身で移住する場合は60万円です。18歳未満の子どもを帯同する場合は、子ども1人あたり100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。転入前認定や申請期間は市町村ごとに異なるため、転入前に必ず移住先市町村へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.a-iju.jp/p1527',
    sourceName: '秋田暮らし はじめの一歩 移住支援金制度について',
    sourceUrls: [
      'https://www.a-iju.jp/p1527',
      'https://www.pref.akita.lg.jp/pages/archive/40997'
    ],
    sourceNote: '秋田県公式移住サイトで支給額、18歳未満加算、転入前認定や市町村確認の注意を確認。秋田県公式ページで制度概要を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukushima-migration-support',
    title: '福島県 ふくしま移住支援金給付事業',
    organization: '福島県・県内市町村',
    type: 'local',
    maxAmount: '家族100万円・単身60万円、18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '福島県',
    tags: ['福島県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、福島県内へ移住し、就業・起業・テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。予算残額や申請期限は市町村へ確認',
    description: '福島県内への移住を支援する移住支援金給付事業です。旧生成データを福島県公式の現行制度として確認済みに置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ふくしま移住支援金給付事業は、東京圏から福島県内へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身で移住する場合は60万円、2人以上の家族で移住する場合は100万円です。18歳未満の世帯員が一緒に移住する場合は、1人につき100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。市町村により予算残額、受付期限、必要書類、対象要件の確認方法が異なるため、事前に市町村へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukushima.lg.jp/sec/11025b/iju.html',
    sourceName: '福島県 ふくしま移住支援金給付事業について',
    sourceUrls: [
      'https://www.pref.fukushima.lg.jp/sec/11025b/iju.html',
      'https://www.city.fukushima.fukushima.jp/ijyuu/support/2/1/3280.html'
    ],
    sourceNote: '福島県公式ページで単身・家族支給額、18歳未満加算、制度概要を確認。福島市公式ページで市町村実施例と予算残額注意を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ibaraki-migration-support',
    title: '茨城県 わくわく茨城生活実現事業（移住支援金）',
    organization: '茨城県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '茨城県',
    tags: ['茨城県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、茨城県内の対象市町村へ移住し、就業・起業・テレワーク等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。転入後1年以内など世帯要件あり',
    description: '茨城県内への移住を支援する、わくわく茨城生活実現事業の移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>わくわく茨城生活実現事業は、東京圏から茨城県内へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する移住支援金制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯での移住は100万円、単身での移住は60万円です。18歳未満の世帯員を帯同する場合は、1人につき最大100万円が加算されます。加算額は市町村により異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。対象市町村、受付開始日、住宅取得要件、関係人口要件などは市町村により異なるため、公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ibaraki.jp/kikaku/kikaku/ijyusuishin/iju-2chiiki/ijushienkin.html',
    sourceName: '茨城県 わくわく茨城生活実現事業（茨城県移住支援金）',
    sourceUrls: [
      'https://www.pref.ibaraki.jp/kikaku/kikaku/ijyusuishin/iju-2chiiki/ijushienkin.html',
      'https://www.town.ibaraki-sakai.lg.jp/page/page002464.html'
    ],
    sourceNote: '茨城県公式ページで支給額、18歳未満加算、市町村差、世帯要件を確認。境町公式ページで令和8年度の市町村実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tochigi-migration-support',
    title: '栃木県 移住支援事業',
    organization: '栃木県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '栃木県',
    tags: ['栃木県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、栃木県内の市町へ移住し、対象求人への就職・起業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町の受付期間に従う。市町により詳細が異なる',
    description: '栃木県が東京圏からの移住・定住促進と県内中小企業等の人手不足解消を目的に実施する移住支援事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>栃木県移住支援事業は、東京23区在住者または東京圏から東京23区へ通勤する方が、栃木県内の市町へ移住した場合に移住支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身で移住した場合は60万円、2人以上の世帯で移住した場合は100万円です。18歳未満の帯同者がいる場合は、子育て加算として1人あたり最大100万円が追加されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請窓口は移住先市町です。子育て加算の適用時期や金額、対象求人、起業要件などは市町により異なるため、移住希望先へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tochigi.lg.jp/a03/iju_shien_jigyou.html',
    sourceName: '栃木県 栃木県移住支援事業',
    sourceUrls: [
      'https://www.pref.tochigi.lg.jp/a03/iju_shien_jigyou.html',
      'https://www.tochigi-iju.jp/support/support-prefecture/'
    ],
    sourceNote: '栃木県公式ページで制度概要、支給額、18歳未満加算、市町確認を確認。栃木県公式移住サイトで申請窓口と要件を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saitama-migration-support',
    title: '埼玉県 移住支援金',
    organization: '埼玉県・対象15市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算30万から100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '埼玉県',
    tags: ['埼玉県', '移住支援', '東京圏', '対象市町村'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、埼玉県内の対象15市町村へ移住し、就業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。申請先は対象市町村',
    description: '埼玉県内の対象15市町村へ移住し、就業等の要件を満たす方に支給される移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>埼玉県移住支援金は、東京圏から県内の対象15市町村へ移住し、就業・起業等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身での移住は60万円、世帯での移住は100万円です。18歳未満の世帯員を帯同する場合は、30万円から100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先の対象市町村です。対象市町村、就業・起業要件、子ども加算額、申請期限は市町村の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://sumunara-saitama.pref.saitama.lg.jp/immigration/immigration-aid/',
    sourceName: '住むなら、埼玉。 移住支援金について',
    sourceUrls: [
      'https://sumunara-saitama.pref.saitama.lg.jp/immigration/immigration-aid/',
      'https://www.town.tokigawa.lg.jp/info/1895'
    ],
    sourceNote: '埼玉県公式移住・定住情報サイトで対象15市町村、支給額、18歳未満加算額、対象要件を確認。ときがわ町公式ページで市町村実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiba-migration-support',
    title: '千葉県 移住支援金',
    organization: '千葉県・実施市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '千葉県',
    tags: ['千葉県', '移住支援', '東京圏', '実施市町'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、千葉県内の移住支援事業実施市町へ移住し、就業・起業・関係人口等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町の受付期間に従う。予算がなくなり次第受付終了の場合あり',
    description: '千葉県内の移住支援事業実施市町へ移住する方を支援する移住支援金です。旧生成データを公式確認済みデータとして置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千葉県移住支援金は、東京圏から県内の実施市町へ移住し、就業・起業・関係人口等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯での移住は100万円、単身での移住は60万円です。市町によっては、18歳未満の世帯員を帯同して転入する場合に100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先の実施市町です。対象市町、申請期限、予算状況、関係人口要件などは市町の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.chiba-chiikishigoto.jp/useful/',
    sourceName: '千葉県 地域しごとNAVI 移住支援金などの補助',
    sourceUrls: [
      'https://www.chiba-chiikishigoto.jp/useful/',
      'https://www.city.minamiboso.chiba.jp/0000012526.html'
    ],
    sourceNote: '千葉県地域しごとNAVIで実施市町、世帯・単身支給額、支給要件を確認。南房総市公式ページで令和8年度更新の子ども加算と受付終了注意を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'niigata-migration-support',
    title: '新潟県 移住支援金',
    organization: '新潟県・県内市町村',
    type: 'local',
    maxAmount: '世帯最大100万円＋子育て加算、単身最大60万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '新潟県',
    tags: ['新潟県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '一定条件を満たして東京圏から新潟県内へ移住し、就業・起業・テレワーク等の要件を満たす方が対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。子育て加算の扱いは市町村へ確認',
    description: '東京圏から新潟県内へ移住した方に最大100万円＋αを支給する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟県移住支援金は、東京圏から新潟県内へ移住し、就業・起業・テレワーク等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身の場合は最大60万円、2人以上の世帯の場合は最大100万円です。18歳未満の子どもを帯同して移住する場合は、子ども1人につき最大100万円の子育て世帯加算があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。子育て加算や世帯の扱いは市町村により異なるため、移住前に市町村へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.niigata.lg.jp/sec/shigototeijyu/1356915648577.html',
    sourceName: '新潟県 移住支援金',
    sourceUrls: [
      'https://www.pref.niigata.lg.jp/sec/shigototeijyu/1356915648577.html',
      'https://iju.niigata-kigyo-navi.jp/about'
    ],
    sourceNote: '新潟県公式ページで2026年4月更新の支給額、子育て加算、市町村差を確認。新潟県運営サイトで制度概要を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagano-migration-support',
    title: '長野県 UIJターン就業・創業移住支援事業',
    organization: '長野県・県内市町村',
    type: 'local',
    maxAmount: '世帯最大100万円・単身最大60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '長野県',
    tags: ['長野県', '移住支援', 'UIJターン', '市町村申請'],
    eligibility: '東京圏から長野県内へ移住し、就業・創業等の要件を満たす方が対象です。支給額や要件は移住先市町村により異なります。',
    applicationPeriod: '移住先市町村の受付期間に従う。移住または申請前に市町村へ相談',
    description: '長野県内へのUIJターン就業・創業を支援する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野県のUIJターン就業・創業移住支援事業は、東京圏から県内へ移住し、就業・創業等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身世帯の場合は最大60万円、2人以上世帯の場合は最大100万円です。18歳未満の子どもを帯同する場合は、子どもの人数に応じた加算を受けられる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>支給額・要件は市町村によって異なります。移住または申請前に、移住先市町村の担当窓口へ相談してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nagano.lg.jp/rodokoyo/sangyo/rodo/koyo/kyufukin/r4.html',
    sourceName: '長野県 UIJターン就業・創業移住支援事業支給要件等',
    sourceUrls: [
      'https://www.pref.nagano.lg.jp/rodokoyo/sangyo/rodo/koyo/kyufukin/r4.html',
      'https://www.city.nagano.nagano.jp/n041600/iju/p006188.html'
    ],
    sourceNote: '長野県公式ページで支給額、市町村差、申請前相談を確認。長野市公式ページで令和8年4月以降転入者向けの支給額・18歳未満加算を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shizuoka-migration-support',
    title: '静岡県 移住・就業支援金',
    organization: '静岡県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、子ども1人につき100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '静岡県',
    tags: ['静岡県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京圏から静岡県内へ移住し、就業・起業・テレワーク・関係人口等の要件を満たす方が対象です。',
    applicationPeriod: '移住先市町の受付期間に従う。制度詳細は市町へ確認',
    description: '東京圏から静岡県内へ移住する方を支援する移住・就業支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡県移住・就業支援金は、東京圏から静岡県内へ移住し、就業・起業・テレワーク・関係人口等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>単身は60万円、世帯は100万円です。子どもを帯同する場合は、子ども1人につき100万円の加算が案内されています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町です。対象要件、申請期限、予算状況、子ども加算の扱いを市町の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://iju.pref.shizuoka.jp/lp/support.html',
    sourceName: 'ゆとりすと静岡 移住・就業支援金について',
    sourceUrls: [
      'https://iju.pref.shizuoka.jp/lp/support.html',
      'https://www.city.shizuoka.lg.jp/ijuteiju/p000001.html'
    ],
    sourceNote: '静岡県公式移住サイトで単身・世帯支給額、子ども加算、就業・起業・テレワーク等の要件を確認。静岡市公式ページで市実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aichi-migration-support',
    title: '愛知県 移住支援事業',
    organization: '愛知県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '愛知県',
    tags: ['愛知県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、愛知県内へ移住し、対象求人への就業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。今年度申請期限は市町村により異なる',
    description: '愛知県内への移住と就業を支援する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>愛知県移住支援事業は、東京圏から愛知県へ移住し、移住支援金対象求人に就業した方などに、国・県・市町村が共同で支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯の場合は100万円、単身の場合は60万円です。18歳未満の世帯員を帯同する場合は、市町村区分により1人につき100万円または30万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。対象求人、18歳未満加算の市町村区分、申請期限、必要書類は市町村と県公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aichi.jp/soshiki/shugyo/j-2019-ijyushien.html',
    sourceName: '愛知県 愛知県移住支援事業について',
    sourceUrls: [
      'https://www.pref.aichi.jp/soshiki/shugyo/j-2019-ijyushien.html',
      'https://www.uij-aichi.jp/migration_seek.html'
    ],
    sourceNote: '愛知県公式ページで支給額、18歳未満加算、市町村区分を確認。あいちUIJターン支援センターで求職者向け制度概要を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kumamoto-migration-support',
    title: '熊本県 移住支援事業',
    organization: '熊本県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '熊本県',
    tags: ['熊本県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京圏から熊本県内の市町村へ移住し、就業・起業・テレワーク等の要件を満たす方が対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。子育て加算は市町村により異なる',
    description: '熊本県と県内市町村が、東京圏から熊本県に移住する方を支援する移住支援事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本県移住支援事業は、東京圏から熊本県内へ移住し、マッチングサイト掲載求人への就業等の要件を満たす方に市町村が支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の世帯は100万円、単身は60万円です。一部市町村では、18歳未満の世帯員を帯同して移住する場合、18歳未満の方1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。子育て加算の有無や支給要件は、移住予定市町村と転入日によって異なるため、必ず担当窓口に確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kumamoto.jp/soshiki/21/264806.html',
    sourceName: '熊本県 熊本県移住支援事業について（令和8年度）',
    sourceUrls: [
      'https://www.pref.kumamoto.jp/soshiki/21/264806.html',
      'https://kumamotodo.jp/system/detail_7.html'
    ],
    sourceNote: '熊本県公式ページで令和8年度制度、支給額、18歳未満加算、市町村差、課税注意を確認。熊本市公式移住サイトで市実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hokkaido-migration-support',
    title: '北海道 UIJターン新規就業支援事業（移住支援金）',
    organization: '北海道・道内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '北海道',
    tags: ['北海道', '移住支援', 'UIJターン', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、北海道内へ移住し、移住支援金対象求人への就業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。予算の範囲内で年度途中終了の可能性あり',
    description: '北海道内へのUIJターンと新規就業を支援する移住支援金です。旧生成データを北海道公式の現行制度として確認済みに置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>北海道UIJターン新規就業支援事業は、東京23区在住者または通勤者が北海道へ移住し、移住支援金対象法人に就業する場合などに支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯での移住は100万円、単身での移住は60万円です。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき最大100万円が加算されます。加算の実施有無は市町村により異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。対象求人、申請期限、子育て加算、予算状況は市町村ごとに異なるため、移住先の担当窓口で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hokkaido.lg.jp/kz/jzi/ui-turn/H31wakuwaku.html',
    sourceName: '北海道 UIJターン新規就業支援事業',
    sourceUrls: [
      'https://www.pref.hokkaido.lg.jp/kz/jzi/ui-turn/H31wakuwaku.html',
      'https://www.city.kitami.lg.jp/tourism/migration/detail.php?content=9906'
    ],
    sourceNote: '北海道公式ページで令和8年度市町村窓口、世帯100万円・単身60万円、18歳未満加算、予算終了可能性を確認。北見市公式ページで市町村実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hyogo-migration-support',
    title: '兵庫県 移住支援事業',
    organization: '兵庫県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、子育て加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '兵庫県',
    tags: ['兵庫県', '移住支援', '東京圏', '市町申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、兵庫県内の対象市町へ移住し、就業・起業等の要件を満たす場合に対象です。',
    applicationPeriod: '転入後3か月以上1年以内が基本。年度内受付は市町に確認',
    description: '兵庫県内への移住と就業・起業等を支援する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>兵庫県移住支援事業は、東京圏から兵庫県内の対象市町へ移住し、就業・起業等の要件を満たす方を支援する制度です。申請は移住先市町の窓口で行います。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の世帯の場合は100万円、単身の場合は60万円です。子育て世帯は、市町が定める要綱に基づき18歳未満の方1人あたり30万円または100万円の加算があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請書と必要書類を添えて、移住先市町の窓口に申請します。対象市町、子育て加算額、申請期間、予算状況は市町ごとに確認してください。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/sr05/hyogo-matching/overview.html',
    sourceName: '兵庫県 兵庫県移住支援事業・マッチング支援事業',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/sr05/hyogo-matching/overview.html',
      'https://www.town.fukusaki.hyogo.jp/0000004316.html'
    ],
    sourceNote: '兵庫県公式ページで支給額、18歳未満加算、市町別加算額を確認。福崎町公式ページで市町村実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nara-migration-support',
    title: '奈良県 移住支援金',
    organization: '奈良県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '奈良県',
    tags: ['奈良県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、奈良県内へ移住し、就職・起業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。世帯向けは転入後1年以内など要件あり',
    description: '奈良県内への移住・就業・起業を支援する移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良県移住支援金は、東京圏から奈良県内へ移住し、就職・起業等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の世帯の場合は100万円、単身世帯の場合は60万円です。就職に関する要件を満たす方が18歳未満の世帯員を帯同して移住する場合は、市町村が定める額の加算があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。世帯要件、就職・起業要件、18歳未満加算、申請期限は市町村の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nara.lg.jp/n102/53355.html',
    sourceName: '奈良県 移住支援金',
    sourceUrls: [
      'https://www.pref.nara.lg.jp/n102/53355.html',
      'https://www.city.tenri.nara.jp/kakuka/kankyoukeizaibu/sangyoukyousouryokukyoukasitu/1568250403738.html'
    ],
    sourceNote: '奈良県公式ページで支給額、世帯要件、18歳未満加算を確認。天理市公式ページで市町村実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shimane-migration-support',
    title: '島根県 わくわく島根生活実現支援事業',
    organization: '島根県・県内市町村',
    type: 'local',
    maxAmount: '世帯最大100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '島根県',
    tags: ['島根県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、島根県内へ移住し、就業・起業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。詳細は市町村へ確認',
    description: '東京圏から島根県へ移住する方を支援する、わくわく島根生活実現支援事業の移住支援金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>わくわく島根生活実現支援事業は、東京23区在住者または通勤者が島根県へ移住し、要件を満たした場合に移住支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>世帯の場合は最大100万円、単身の場合は60万円です。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。対象要件、就業・起業要件、申請期限、必要書類は市町村の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shimane.lg.jp/admin/region/chiiki/UI_turn/wakuwaku.html',
    sourceName: '島根県 わくわく島根生活実現支援事業',
    sourceUrls: [
      'https://www.pref.shimane.lg.jp/admin/region/chiiki/UI_turn/wakuwaku.html',
      'https://www.kurashimanet.jp/support/'
    ],
    sourceNote: '島根県公式ページで制度概要と世帯・単身支給額を確認。しまね移住情報ポータルで18歳未満加算を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-migration-support',
    title: '大分県 移住支援金',
    organization: '大分県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、子育て加算あり',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '大分県',
    tags: ['大分県', '移住支援', '県外移住', '市町村申請'],
    eligibility: '県外から大分県内へ移住し、おおいたジョブナビ掲載企業への就職等の要件を満たす方が対象です。大分県出身の方も対象となる場合があります。',
    applicationPeriod: '移住先市町村の受付期間に従う。市町村により申請要件が異なる',
    description: '県外から大分県へ移住する方を支援する移住支援金です。旧生成データを公式確認済みデータとして置換しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分県移住支援金は、県外から大分県内へ移住し、おおいたジョブナビ掲載企業への就職等の要件を満たす方を支援する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上世帯の場合は100万円、単身の場合は60万円です。市町村によっては、上記に加えて子育て世帯への加算があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。移住先の市町村で申請要件が異なるため、事前に市町村窓口で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.oita.jp/soshiki/10112/ijyushienjigyo.html',
    sourceName: '大分県 県外から大分県への移住者が対象 移住支援金',
    sourceUrls: [
      'https://www.pref.oita.jp/soshiki/10112/ijyushienjigyo.html',
      'https://oita.saiyo-job.jp/nbtk/recruit/'
    ],
    sourceNote: '大分県公式ページで支給額、子育て加算、返還要件、移住応援給付金を確認。大分県移住支援金対象求人サイトで対象者概要を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-migration-support',
    title: '鹿児島県 移住支援金制度',
    organization: '鹿児島県・県内市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '鹿児島県',
    tags: ['鹿児島県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、鹿児島県内へ移住し、就業・起業等の要件を満たす場合に対象です。',
    applicationPeriod: '移住先市町村の受付期間に従う。実施市町村と加算対象市町村を確認',
    description: '東京圏から鹿児島県へ移住する方を支援する移住支援金制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島県移住支援金制度は、東京圏から鹿児島県内へ移住し、就業・起業等の要件を満たす方に支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の家族・世帯の場合は100万円、単身者の場合は60万円です。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先市町村です。実施市町村、18歳未満加算の対象市町村、申請期限、必要書類は市町村の公式案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kagoshima.jp/af23/izyusien.html',
    sourceName: '鹿児島県 移住支援金制度の御案内',
    sourceUrls: [
      'https://www.pref.kagoshima.jp/af23/izyusien.html',
      'https://www.city.kagoshima.lg.jp/koyosuishin/sangyo/koyo/kohoshi/ijushienkin.html'
    ],
    sourceNote: '鹿児島県公式ページで支給額、18歳未満加算、課税注意、加算対象市町村を確認。鹿児島市公式ページで市実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okinawa-migration-support',
    title: '沖縄県 移住支援金制度',
    organization: '沖縄県・県内実施市町村',
    type: 'local',
    maxAmount: '世帯100万円・単身60万円、18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '沖縄県',
    tags: ['沖縄県', '移住支援', '東京圏', '市町村申請'],
    eligibility: '東京23区在住者または東京圏から東京23区へ通勤していた方が、沖縄県内の実施市町村へ移住し、就業・起業等の要件を満たす場合に対象です。',
    applicationPeriod: '実施市町村の受付期間に従う。予算がなくなり次第終了の場合あり',
    description: '東京圏から沖縄県内の実施市町村へ移住する方を支援する移住支援金制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>沖縄県移住支援金制度は、東京圏から沖縄県内の実施市町村へ移住し、就業・起業等の要件を満たす方に支援金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>2人以上の家族・世帯の場合は100万円、単身者の場合は60万円です。18歳未満の世帯員を帯同して移住する場合は、18歳未満の方1人につき最大100万円が加算されます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請先は移住先の実施市町村です。各要件は実施市町村によって異なる場合があるため、詳細は市町村へ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okinawa.jp/kurashikankyo/iju/1023708.html',
    sourceName: '沖縄県 移住支援金制度のご案内',
    sourceUrls: [
      'https://www.pref.okinawa.jp/kurashikankyo/iju/1023708.html',
      'https://www.vill.kunigami.okinawa.jp/migration_support_money/'
    ],
    sourceNote: '沖縄県公式ページで支給額、18歳未満加算、実施市町村差、課税注意を確認。国頭村公式ページで予算終了注意と市町村実施例を補足確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yokohama-living-support-coupon-2026',
    title: '横浜市 ヨコハマ生活応援クーポン',
    organization: '横浜市',
    type: 'local',
    maxAmount: '1人につき5,000円相当',
    maxAmountNum: 0.5,
    category: 'living',
    prefecture: '神奈川県',
    tags: ['横浜市', '生活支援', '物価高騰対策', 'クーポン'],
    eligibility: '横浜市が対象として案内する市民等。給付方法や対象者は市の公式案内・通知で確認してください。',
    applicationPeriod: '横浜市の公式案内・通知に従う',
    description: '食料品等の価格高騰に対応するため、横浜市が1人につき5,000円相当の電子クーポンまたは商品券を給付する生活支援事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ヨコハマ生活応援クーポンは、食料品等の価格高騰に対応するため、横浜市が実施する給付事業です。電子クーポンまたは商品券を選べます。</p>'
      },
      {
        heading: '給付内容',
        content: '<p>給付額は1人につき5,000円相当です。電子クーポンはスマホ決済サービス、電子ポイント、飲食店、衣料品店、オンラインストア等で使える複数のラインナップから選べると案内されています。</p>'
      },
      {
        heading: '確認方法',
        content: '<p>対象者、受け取り方法、申請または手続きの要否は横浜市の公式案内で確認してください。通知が届いた場合は、記載された期限と手順に従ってください。</p>'
      }
    ],
    officialUrl: 'https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/bukkakoto/kyufu.html',
    sourceName: '横浜市 ヨコハマ生活応援クーポン',
    sourceUrls: [
      'https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/bukkakoto/kyufu.html'
    ],
    sourceNote: '横浜市公式ページで、食料品等価格高騰対応給付事業、1人5,000円相当、電子クーポンまたは商品券の給付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'higashiosaka-inflation-relief-2026',
    title: '東大阪市 物価高騰対策給付金',
    organization: '東大阪市',
    type: 'local',
    maxAmount: '市民1人あたり7,000円、対象世帯は1人あたり2,000円上乗せ',
    maxAmountNum: 0.9,
    category: 'living',
    prefecture: '大阪府',
    tags: ['東大阪市', '生活支援', '物価高騰対策', '重点支援地方交付金'],
    eligibility: '東大阪市民を対象にした物価高騰対策。非課税世帯および住民税均等割のみ課税世帯は上乗せ対象です。詳細な基準日は市公式案内で確認してください。',
    applicationPeriod: '東大阪市の確認書・公式案内に従う。審査後順次支給',
    description: '物価高騰の影響が市民生活に広く及ぶ中、東大阪市が国の重点支援地方交付金を活用して実施する生活支援給付金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東大阪市物価高騰対策給付金は、物価高騰の影響を受ける市民生活を支援するため、市民を対象に給付金を支給する制度です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>市民1人あたり7,000円が支給されます。非課税世帯および住民税均等割のみ課税世帯に属する市民には、世帯員1人あたり2,000円が上乗せされます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>確認書が届いた世帯は、内容確認や必要書類の提出が必要です。市が書類を審査し、支給決定後に順次振り込みます。提出期限や不備対応は市の最新案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.higashiosaka.lg.jp/0000043430.html',
    sourceName: '東大阪市 国の総合経済対策における物価高騰対策について',
    sourceUrls: [
      'https://www.city.higashiosaka.lg.jp/0000043430.html'
    ],
    sourceNote: '東大阪市公式ページで、市民1人7,000円、非課税・均等割のみ課税世帯への2,000円上乗せ、確認書審査後の順次振込を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sapporo-eco-reform-2026',
    title: '札幌市 住宅エコリフォーム補助制度',
    organization: '札幌市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '北海道',
    tags: ['札幌市', '住宅リフォーム', '省エネ改修', 'バリアフリー'],
    eligibility: '札幌市民が、市内に主たる営業所を持つ建設業許可事業者に依頼し、省エネ改修やバリアフリー改修を行う場合に対象です。',
    applicationPeriod: '第2回受付は2026年9月4日から2026年9月17日まで。受付延長最終期限は2026年11月27日',
    deadlineDate: '2026-11-27',
    description: '札幌市内の住宅で、省エネ改修やバリアフリー改修を行う市民を支援する住宅リフォーム補助制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>札幌市住宅エコリフォーム補助制度は、省エネ改修やバリアフリー改修を行う札幌市民に対し、改修費用の一部を補助する制度です。外壁・屋根の塗装のみを目的とした工事は対象外です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>補助額は対象工事ごとに定める補助金額の合計、総工事費の10％、1申請者あたり50万円のうち最も少ない額が上限です。補助金額の合計が3万円以上、総工事費が30万円以上となる工事が対象です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請書は受付期間内に郵送必着で提出します。第1回受付は終了しており、第2回受付は2026年9月4日から9月17日までと案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.sapporo.jp/toshi/jutaku/03reform/eco/eco.html',
    sourceName: '札幌市 住宅エコリフォーム補助制度',
    sourceUrls: [
      'https://www.city.sapporo.jp/toshi/jutaku/03reform/eco/eco.html'
    ],
    sourceNote: '札幌市公式ページで令和8年度制度、対象工事、第2回受付期間、郵送提出、パンフレット公開を確認。公式パンフレット記載の上限額を反映。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'morioka-reform-support-2026',
    title: '盛岡市 リフォーム支援事業2026',
    organization: '盛岡市',
    type: 'local',
    maxAmount: 'MORIO Payプレミアム商品券で支援',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '岩手県',
    tags: ['盛岡市', '住宅リフォーム', '物価高騰対策', 'MORIO Pay'],
    eligibility: '盛岡市内の住宅で、対象となるリフォーム工事を行う方が対象です。工事請負契約書、見積書、施工前写真などの提出が必要です。',
    applicationPeriod: '2026年度事業として受付中。定員に達した場合は受付日ごとに抽選・繰上げ',
    description: '物価高騰対応関連として、盛岡市が住宅リフォームを支援するMORIO Payプレミアム商品券発行事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>盛岡市リフォーム支援事業2026は、物価高騰対応関連の経済対策として、市内住宅のリフォーム工事を支援する制度です。支援はMORIO Payプレミアム商品券の発行により行われます。</p>'
      },
      {
        heading: '対象工事と必要書類',
        content: '<p>申請には、交付申請書、誓約書兼同意書、工事請負契約書または請書、工事費見積書、工事設計図書または施工箇所の見取り図、施工前写真などが必要です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請受付と実績報告の窓口は岩手県建築住宅センターです。受付件数や定員、抽選・繰上げの扱いは盛岡市公式ページで随時更新されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/jigyousha/1026070/shogyo/1055584.html',
    sourceName: '盛岡市 リフォーム支援事業2026',
    sourceUrls: [
      'https://www.city.morioka.iwate.jp/jigyousha/1026070/shogyo/1055584.html'
    ],
    sourceNote: '盛岡市公式ページでリフォーム支援事業2026、受付件数、定員、必要書類、問い合わせ先を確認。支援額は公式申請マニュアル・商品券案内に基づく。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sendai-energy-saving-renovation-2026',
    title: '仙台市 せんだい健幸省エネ住宅補助金（部分改修向け）',
    organization: '仙台市',
    type: 'local',
    maxAmount: '断熱改修費用の一部を補助',
    maxAmountNum: 120,
    category: 'housing',
    prefecture: '宮城県',
    tags: ['仙台市', '省エネ住宅', '断熱改修', '住宅補助'],
    eligibility: '仙台市内に住所があり、申請する住宅の所有者、その配偶者または一親等の親族で、市税滞納がない方などが対象です。',
    applicationPeriod: '2026年度は3回に分けて募集。第1回申込は終了、以降の受付は公式ページで確認',
    description: '家庭からの温室効果ガス排出削減効果の高い、住宅の断熱性能を高める部分改修工事を支援する仙台市の補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>せんだい健幸省エネ住宅補助金は、既存住宅の窓、床、壁、天井、屋根などの断熱性能を高める改修工事を支援する制度です。</p>'
      },
      {
        heading: '補助対象者',
        content: '<p>申請する住宅の所有者、その配偶者または一親等の親族で、市内に住所があること、市税を滞納していないこと、同一年度内に申請していないことなどが要件です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>2026年度は申込書受付を3回に分けて実施します。第1回は終了しており、抽選結果や必要書類の提出期限は公式ページで案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.sendai.jp/ondanka/kodannetsu/kaisyuhozyo.html',
    sourceName: '仙台市 せんだい健幸省エネ住宅補助金（部分改修向け）',
    sourceUrls: [
      'https://www.city.sendai.jp/ondanka/kodannetsu/kaisyuhozyo.html'
    ],
    sourceNote: '仙台市公式ページで2026年度事業、予算額4,000万円、補助対象者、断熱改修対象、3回募集を確認。補助上限は公式手引きの区分額を参照。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akita-housing-reform-2026',
    title: '秋田市 住宅リフォーム支援事業',
    organization: '秋田市',
    type: 'local',
    maxAmount: '通常5万円、中心市街地区域は10万円',
    maxAmountNum: 10,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '秋田県',
    tags: ['秋田市', '住宅リフォーム', '住環境', '災害復旧'],
    eligibility: '秋田市内に住所を有し、市税滞納がなく、自らまたは親族が所有・居住する住宅の増改築やリフォームを行う方が対象です。',
    applicationPeriod: '2026年4月1日から2026年12月28日まで。予算到達時は期限前終了',
    deadlineDate: '2026-12-28',
    description: '既存住宅の住環境の維持・向上と長寿命化を図るため、秋田市民が行う住宅の増改築・リフォーム工事を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田市住宅リフォーム支援事業は、既存住宅の増改築やリフォーム工事などの住環境整備を支援する制度です。工事完成後の申請となります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>通常のリフォーム工事は5万円、中心市街地活性化プランで設定した区域内の住宅は10万円です。自然災害による住宅被害の復旧工事は補助対象工事費の10％、上限5万円です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請は窓口提出、郵送、メールで受け付けています。2026年12月28日までの受付ですが、予算到達時は期限前に終了します。</p>'
      }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/kurashi/sumai/1007487/1007790.html',
    sourceName: '秋田市 住宅リフォーム支援事業',
    sourceUrls: [
      'https://www.city.akita.lg.jp/kurashi/sumai/1007487/1007790.html'
    ],
    sourceNote: '秋田市公式ページで令和8年度制度、補助額、申請期間、対象工事、受付状況を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamagata-housing-reform-2026',
    title: '山形市 住宅リフォーム総合支援事業',
    organization: '山形市',
    type: 'local',
    maxAmount: '移住・新婚・子育て世帯は最大30万円、加算あり',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '山形県',
    tags: ['山形市', '住宅リフォーム', '移住世帯', '子育て世帯'],
    eligibility: '山形市民で、リフォーム工事を行う住宅または空き家バンク登録空き家の所有者などが対象です。市税滞納がないことなどの要件があります。',
    applicationPeriod: '第1回募集は2026年4月20日から4月24日、第2回募集は2026年6月15日から6月19日',
    deadlineDate: '2026-06-19',
    description: '山形市が住宅のリフォーム工事を支援する総合支援事業です。市補助タイプと県市補助タイプがあり、移住・新婚・子育て世帯の補助率が高く設定されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形市住宅リフォーム総合支援事業は、市内住宅の屋根・外壁、内装、門塀、敷地内通路、車庫・物置などの工事を支援する制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>県市補助タイプは、一般世帯が工事費の20％で上限24万円、移住・新婚・子育て世帯は工事費の33％で上限30万円です。一定の工事では補助限度額の加算があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>募集は期間を分けて行われ、申込み多数の場合は公開抽選です。移住世帯、空き家バンク登録空き家、豪雨被災住宅による申込みは優先扱いがあります。</p>'
      }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/kurashi/tochi/1007258/1003551.html',
    sourceName: '山形市 令和8年度 住宅リフォーム総合支援事業',
    sourceUrls: [
      'https://www.city.yamagata-yamagata.lg.jp/kurashi/tochi/1007258/1003551.html'
    ],
    sourceNote: '山形市公式ページで令和8年度制度、募集期間、対象工事、補助率、補助上限、移住・新婚・子育て世帯区分を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mito-safe-housing-reform-2026',
    title: '水戸市 安心住宅リフォーム支援補助金',
    organization: '水戸市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '茨城県',
    tags: ['水戸市', '住宅リフォーム', '屋根外壁', '水回り'],
    eligibility: '水戸市内の住宅で、特定の施工者と請負契約により50万円以上のリフォーム工事を行う場合などが対象です。',
    applicationPeriod: '前期交付申請受付は2026年5月7日から2026年6月30日まで',
    deadlineDate: '2026-06-30',
    description: '住宅の安全性、耐久性、居住性を向上させる改修工事を支援する水戸市の補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>水戸市安心住宅リフォーム支援補助金は、屋根、外壁、断熱、内装、水回り、間取り変更など、住宅の安全性・耐久性・居住性を向上させるリフォーム工事を支援する制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助対象経費の10分の1を補助し、総額10万円を上限とします。リフォームアドバイザー派遣は補助対象経費の2分の1が対象です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>当選後、交付申請期間内に必要書類を提出します。前期の交付申請受付は2026年5月7日から6月30日までで、郵送は6月30日17時15分必着です。</p>'
      }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/page/3548.html',
    sourceName: '水戸市 安心住宅リフォーム支援補助金',
    sourceUrls: [
      'https://www.city.mito.lg.jp/page/3548.html'
    ],
    sourceNote: '水戸市公式ページで対象工事、補助対象経費、補助率10分の1、上限10万円、前期交付申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sapporo-scholarship-repayment',
    title: 'さっぽろ圏奨学金返還支援事業',
    organization: '札幌市',
    type: 'local',
    maxAmount: '最大54万円（年18万円・3年間）',
    maxAmountNum: 54,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '北海道',
    tags: ['札幌市', '奨学金返還支援', '若者定着', '就職支援'],
    eligibility: '貸与型奨学金を返還予定または返還中で、札幌市が認定する企業等に就職し、さっぽろ圏内に居住して就業する方が対象です。',
    targetOccupation: 'さっぽろ圏内の認定企業等に就職する方',
    applicationPeriod: '2026年度支援対象者の申請受付は10月開始予定。中途入社は随時受け付け、入社2週間前までに申請',
    description: 'さっぽろ圏内で働く若者を対象に、貸与型奨学金の返還額の一部を札幌市が支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>さっぽろ圏奨学金返還支援事業は、札幌市が認定する企業等へ就職し、さっぽろ圏内に居住する若者の奨学金返還を支援する制度です。人材確保と若者の定着を目的としています。</p>'
      },
      {
        heading: '支援額',
        content: '<p>年間最大18万円、3年間で最大54万円の支援を受けられます。対象となる奨学金や勤務先、居住地などの要件は公式ページで確認が必要です。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>2026年度支援対象者の申請受付は10月開始予定です。中途入社の場合は随時受け付けられ、原則として入社2週間前までの申請が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.sapporo.jp/keizai/koyo/syougakukin/syougakukin.html',
    sourceName: '札幌市 さっぽろ圏奨学金返還支援事業',
    sourceUrls: [
      'https://www.city.sapporo.jp/keizai/koyo/syougakukin/syougakukin.html'
    ],
    sourceNote: '札幌市公式ページで2026年度支援対象者の受付予定、年18万円・3年間で最大54万円、認定企業就職、さっぽろ圏居住要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aomori-scholarship-repayment',
    title: 'あおもり若者定着奨学金返還支援制度',
    organization: '青森県',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '青森県',
    tags: ['青森県', '奨学金返還支援', '若者定着', '就職支援'],
    eligibility: '日本学生支援機構または青森県育英奨学会の奨学金利用者で、対象企業に就職し、青森県内に居住して6年間就業する方などが対象です。',
    targetOccupation: '青森県内のサポート企業に就職する若者',
    applicationPeriod: '2026年度就職者向け制度は登録受付中。2028年度採用分も2026年6月1日から登録受付開始',
    description: '青森県内のサポート企業へ就職する若者の奨学金返還を、県と企業が連携して支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>あおもり若者定着奨学金返還支援制度は、青森県内のサポート企業に正規雇用され、県内で一定期間働く若者を対象に、奨学金返還額の一部を支援する制度です。</p>'
      },
      {
        heading: '支援額',
        content: '<p>支援額は企業区分や学校区分により30万円から150万円まで設定されています。ただし、支援額は奨学金返還残額の2分の1が上限です。支援金は本人ではなく貸与機関へ支払われます。</p>'
      },
      {
        heading: '支援のタイミング',
        content: '<p>対象企業に就職し、青森県内に居住して就業を継続した場合、3年経過時と6年経過時に分けて支援されます。登録前に対象企業や卒業年度などの要件確認が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aomori.lg.jp/soshiki/kodomo/wakamono/aomori_syogakukin_henkansien.html',
    sourceName: '青森県 あおもり若者定着奨学金返還支援制度',
    sourceUrls: [
      'https://www.pref.aomori.lg.jp/soshiki/kodomo/wakamono/aomori_syogakukin_henkansien.html',
      'https://www.aomori-life.jp/syogakukin/youth/2026/about.html'
    ],
    sourceNote: '青森県公式ページと公式制度サイトで支援額30万から150万円、奨学金残額2分の1上限、対象奨学金、県内就職・居住・6年就業要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iwate-scholarship-repayment',
    title: 'いわて産業人材奨学金返還支援制度',
    organization: '岩手県',
    type: 'local',
    maxAmount: '最大250万円',
    maxAmountNum: 250,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '岩手県',
    tags: ['岩手県', '奨学金返還支援', '産業人材', '就職支援'],
    eligibility: '日本学生支援機構奨学金の貸与を受け、岩手県内の認定企業等へ就職し、県内に居住して就業する予定の学生・既卒者などが対象です。',
    targetOccupation: '岩手県内の認定企業等に就職する学生・既卒者',
    applicationPeriod: '2026年4月1日から2026年9月30日まで',
    deadlineDate: '2026-09-30',
    description: '岩手県内のものづくり・IT関連産業などへ就職する若者を対象に、奨学金返還額の一部を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いわて産業人材奨学金返還支援制度は、岩手県内の認定企業等に就職する学生や既卒者を対象に、奨学金返還を支援する制度です。2026年度は支援候補者120人の募集が案内されています。</p>'
      },
      {
        heading: '支援額',
        content: '<p>支援率は対象奨学金返還額の2分の1です。上限額は学校区分により異なり、大学院・大学等を通じて貸与を受けた場合は最大250万円、大学等は150万円、大学院のみは100万円、高等専門学校は70万円です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>2026年度の募集期間は2026年4月1日から9月30日までです。申請前に対象奨学金、年齢、卒業予定時期、認定企業への就職予定などを確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.iwate.jp/sangyoukoyou/monozukuri/ikusei/1008964/index.html',
    sourceName: '岩手県 いわて産業人材奨学金返還支援制度',
    sourceUrls: [
      'https://www.pref.iwate.jp/sangyoukoyou/monozukuri/ikusei/1008964/index.html',
      'https://www.pref.iwate.jp/sangyoukoyou/monozukuri/ikusei/1008964/1085424.html'
    ],
    sourceNote: '岩手県公式ページで2026年度募集期間、支援候補者120人、支援率2分の1、学校区分別上限額、県内認定企業就職要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyagi-scholarship-repayment',
    title: '宮城県 ものづくり企業奨学金返還支援事業',
    organization: '宮城県',
    type: 'local',
    maxAmount: '最大270万円',
    maxAmountNum: 270,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '宮城県',
    tags: ['宮城県', '奨学金返還支援', 'ものづくり企業', '就職支援'],
    eligibility: '宮城県が認定したものづくり企業等に正社員として採用され、県内で6年間勤務する見込みがあり、卒業後4年以内などの要件を満たす方が対象です。',
    targetOccupation: '宮城県内の認定ものづくり企業等に就職する方',
    applicationPeriod: '認定企業・学生等の登録は公式案内に従う。就職前に認定企業と支援内容を確認',
    description: '宮城県内のものづくり企業等に就職する若者の奨学金返還を、企業と県が連携して支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ものづくり企業奨学金返還支援事業は、宮城県が認定したものづくり企業等に就職する若者を対象に、企業が実施する奨学金返還支援を県が後押しする制度です。</p>'
      },
      {
        heading: '支援額',
        content: '<p>大学等を卒業した方は6年間で最大270万円、高校等を卒業した方は最大54万円が支援額の目安です。県は企業が支援した額の2分の1を補助します。</p>'
      },
      {
        heading: '確認するポイント',
        content: '<p>支援を受けるには、企業が県の認定を受けていること、採用時期や卒業後年数、正社員採用、県内勤務見込みなどの要件があります。就職前に認定企業と支援内容を確認することが重要です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.miyagi.jp/soshiki/sanzin/syougakukin-2.html',
    sourceName: '宮城県 ものづくり企業奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.miyagi.jp/soshiki/sanzin/syougakukin-2.html'
    ],
    sourceNote: '宮城県公式ページで認定企業就職、卒業後4年以内、県内6年勤務見込み、大学等最大270万円、高校等最大54万円、県補助率2分の1を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akita-scholarship-repayment',
    title: '秋田県 奨学金返還助成制度',
    organization: '秋田県',
    type: 'local',
    maxAmount: '最大60万円（3年間）',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '秋田県',
    tags: ['秋田県', '奨学金返還支援', '県内就職', '若者定着'],
    eligibility: '秋田県内に就職する方を対象に、県が定める奨学金返還助成の認定・交付要件を満たす場合に支援されます。',
    targetOccupation: '秋田県内に就職する方',
    applicationPeriod: '令和8年度認定申請は2026年4月1日から受付開始。詳細は公式ページの募集案内を確認',
    description: '秋田県内就職者を対象に、奨学金返還の負担を軽減する県の助成制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>秋田県奨学金返還助成制度は、県内就職を促進するため、対象者の奨学金返還を助成する制度です。県公式ページでは、令和8年度の認定申請受付と交付申請の案内が公開されています。</p>'
      },
      {
        heading: '助成額',
        content: '<p>一般の奨学金返還助成制度は、最大3年間で60万円の助成として案内されています。別制度として、企業連携型の最大6年間120万円の制度も掲載されています。</p>'
      },
      {
        heading: '申請前の確認',
        content: '<p>認定申請、交付申請、特定業種の扱いなどは年度ごとの公式案内に従います。対象奨学金、就職先、県内定着の要件を確認してから申請します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.akita.lg.jp/pages/genre/23987',
    sourceName: '秋田県 県内就職者向け奨学金返還助成制度',
    sourceUrls: [
      'https://www.pref.akita.lg.jp/pages/genre/23987'
    ],
    sourceNote: '秋田県公式ページで令和8年度認定申請受付、交付申請、最大3年間60万円助成、企業連携型最大6年間120万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukushima-scholarship-repayment',
    title: '福島県 奨学金返還支援事業',
    organization: '福島県',
    type: 'local',
    maxAmount: '大学の場合最大153.6万円',
    maxAmountNum: 153.6,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '福島県',
    tags: ['福島県', '奨学金返還支援', '県内就職', '産業人材'],
    eligibility: '日本学生支援機構の第一種・第二種奨学金を利用し、福島県内事業所へ正規雇用で就職し、県内で勤務・定住する予定の大学生等または既卒者が対象です。',
    targetOccupation: '福島県内事業所へ就職する大学生等・既卒者',
    applicationPeriod: '令和8年度募集を2026年4月27日から開始。募集区分ごとの詳細は公式募集要項を確認',
    description: '福島県内事業所への就職と定住を予定する方を対象に、奨学金返還を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島県の奨学金返還支援事業は、県内事業所に就職し、規定年数の就業と県内定住を行う方の奨学金返還を支援する制度です。令和7年度から公務員を除く全産業が支援対象に拡大されています。</p>'
      },
      {
        heading: '補助金額',
        content: '<p>卒業または修了までの2年間、短大等は1年間の貸与額に相当する額が支援対象です。大学の場合は最大153.6万円で、学校区分により上限額が異なります。</p>'
      },
      {
        heading: '対象者',
        content: '<p>大学生等は卒業後6か月以内の県内正規雇用就職と5年以上の県内勤務・定住予定が必要です。既卒者は35歳未満、県外居住、年度内の県内正規雇用就職と3年以上の県内勤務・定住予定などが要件です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukushima.lg.jp/sec/32011c/shougakukin-fukushima.html',
    sourceName: '福島県 奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.fukushima.lg.jp/sec/32011c/shougakukin-fukushima.html'
    ],
    sourceNote: '福島県公式ページで令和8年度募集開始、対象者、県内正規雇用・定住要件、大学最大153.6万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ibaraki-company-scholarship-repayment',
    title: '茨城県 企業支援型奨学金返還支援事業',
    organization: '茨城県',
    type: 'local',
    maxAmount: '従業員1人あたり年6万円、最大36か月',
    maxAmountNum: 18,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '茨城県',
    tags: ['茨城県', '奨学金返還支援', '中小企業', '人材確保'],
    eligibility: '茨城県内に本社または主たる事務所を有する中小企業等が、令和8年4月1日以降採用の正社員に奨学金返還支援を行う場合に対象です。',
    targetOccupation: '県内中小企業等と奨学金返還中・返還予定の正社員',
    applicationPeriod: '2026年6月8日から2026年12月28日まで。予算上限に達し次第終了',
    deadlineDate: '2026-12-28',
    description: '茨城県内企業が従業員へ行う奨学金返還支援の費用を、県が補助する企業支援型の制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>茨城県企業支援型奨学金返還支援事業は、県内企業の人材確保と定着を支援するため、企業が従業員へ支給する奨学金返還手当や代理返還の一部を県が補助する制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>企業等が負担した支援額の2分の1を補助します。支援対象者1人あたりの県補助上限は年6万円で、同一支援対象者に対する補助対象期間は最大36か月です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>交付申請期間は2026年6月8日から12月28日までです。申請書類を添付し、茨城県労働政策課へ電子メールで提出します。予算上限に達した場合は受付終了となります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ibaraki.jp/shokorodo/rosei/rodo/shogakukinhenkan/shien.html',
    sourceName: '茨城県 企業支援型奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.ibaraki.jp/shokorodo/rosei/rodo/shogakukinhenkan/shien.html'
    ],
    sourceNote: '茨城県公式ページで令和8年度開始、補助額2分の1、1人年6万円上限、最大36か月、申請期間2026年6月8日から12月28日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hitachinaka-scholarship-repayment',
    title: 'ひたちなか市 奨学金返還支援補助金',
    organization: 'ひたちなか市',
    type: 'local',
    maxAmount: '年10万円、最大8年間',
    maxAmountNum: 80,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '茨城県',
    tags: ['ひたちなか市', '奨学金返還支援', '定住支援', '就職支援'],
    eligibility: 'ひたちなか市内に住所があり、奨学金を返還中で、市内中小企業等への正規雇用、対象資格に基づく市内勤務、市内起業、農漁業等の要件を満たす方が対象です。',
    targetOccupation: 'ひたちなか市内で働く奨学金返還中の方',
    applicationPeriod: '令和7年度返還分は2026年4月10日から2027年3月12日まで（必着）',
    deadlineDate: '2027-03-12',
    description: 'ひたちなか市内で働く方の定住・定職を促進するため、奨学金返還額の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ひたちなか市奨学金返還支援補助金は、市内の人材確保と定住・定職の促進を目的に、奨学金を返還している方の返還額の一部を支援する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>申請前年度に返済した額の2分の1を補助し、上限は年10万円です。支援期間は最大8年間で、年度ごとの申請が必要です。</p>'
      },
      {
        heading: '対象となる働き方',
        content: '<p>市内中小企業等での正規雇用、保育士・看護師・介護福祉士など対象資格に基づく市内勤務、市内での起業、農業・漁業等への従事などが対象として示されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.hitachinaka.lg.jp/kosodate/kyouiku/1002163/1007548/1002167.html',
    sourceName: 'ひたちなか市 奨学金返還支援補助金',
    sourceUrls: [
      'https://www.city.hitachinaka.lg.jp/kosodate/kyouiku/1002163/1007548/1002167.html'
    ],
    sourceNote: 'ひたちなか市公式ページで対象者、補助額2分の1・年10万円上限、最大8年間、対象奨学金、申請期間2026年4月10日から2027年3月12日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tochigi-scholarship-repayment',
    title: 'とちぎ未来人材応援奨学金支援助成金',
    organization: '栃木県',
    type: 'local',
    maxAmount: '大学生は最大150万円',
    maxAmountNum: 150,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '栃木県',
    tags: ['栃木県', '奨学金返還支援', '県内就職', '若者定着'],
    eligibility: '貸与型奨学金を利用し、2026年4月1日時点で対象学年に該当し、栃木県内に定住を希望する大学生等が対象です。卒業後は県内企業等への正規雇用と県内居住が助成要件です。',
    targetOccupation: '栃木県内企業等へ就職する大学生等',
    applicationPeriod: '2026年6月8日から2026年11月25日まで',
    deadlineDate: '2026-11-25',
    description: '栃木県内企業等へ就職を希望する大学生等の奨学金返還を支援する助成金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>とちぎ未来人材応援奨学金支援助成金は、県内企業等への就職を希望する大学生等を対象に、卒業後の奨学金返還を支援する制度です。支給対象者として認定された後、卒業・就職後に支給決定や交付決定の申請が必要です。</p>'
      },
      {
        heading: '助成金額',
        content: '<p>卒業・修了前2年間に借り入れた奨学金が対象です。大学生は全額で上限150万円、大学院生は2分の1で上限100万円、短期大学生・高等専門学校生・専門学校生は2分の1で上限70万円です。</p>'
      },
      {
        heading: '募集と応募方法',
        content: '<p>2026年度の募集期間は2026年6月8日から11月25日までです。栃木県電子申請システムで応募し、奨学金貸与証明書や成績証明書などを提出します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tochigi.lg.jp/f06/work/koyou/koyou/miraijinzaiouensyougakukin.html',
    sourceName: '栃木県 とちぎ未来人材応援奨学金支援助成金',
    sourceUrls: [
      'https://www.pref.tochigi.lg.jp/f06/work/koyou/koyou/miraijinzaiouensyougakukin.html'
    ],
    sourceNote: '栃木県公式ページで2026年度募集期間、対象奨学金、対象学年、県内正規雇用・県内居住要件、学校区分別助成上限額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saitama-company-scholarship-repayment',
    title: '埼玉県 中小企業等奨学金返還支援事業補助金',
    organization: '埼玉県・埼玉県中小企業団体中央会',
    type: 'local',
    maxAmount: '1人年9万円、多様な働き方実践企業は年12万円',
    maxAmountNum: 72,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '埼玉県',
    tags: ['埼玉県', '奨学金返還支援', '中小企業', '人材確保'],
    eligibility: '埼玉県内に事業所を有し、奨学金返還支援制度を設ける中小企業等が、奨学金返還中の正社員へ手当等を支給する場合に対象です。',
    targetOccupation: '県内中小企業等と奨学金返還中の正社員',
    applicationPeriod: '2026年6月1日から2026年11月30日まで。予算の範囲内',
    deadlineDate: '2026-11-30',
    description: '埼玉県内の中小企業等が従業員に行う奨学金返還支援について、県の支援を受けた中央会が補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>埼玉県中小企業等奨学金返還支援事業補助金は、県内中小企業等の人材確保と若手従業員の定着、経済的負担軽減を目的に、企業が従業員へ支給する奨学金返還支援手当等を補助する制度です。</p>'
      },
      {
        heading: '補助率と上限',
        content: '<p>補助率は2分の1です。埼玉県多様な働き方実践企業は3分の2に引き上げられます。補助限度額は1人年9万円、多様な働き方実践企業は年12万円で、支援対象者1人につき最大6年間が対象です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>令和8年度の申請受付は2026年6月1日から11月30日までです。申請はJグランツで行い、GビズIDプライムの取得が必要です。</p>'
      }
    ],
    officialUrl: 'https://saitama-shougakukinhojyo.com/',
    sourceName: '埼玉県中小企業等奨学金返還支援事業補助金',
    sourceUrls: [
      'https://saitama-shougakukinhojyo.com/'
    ],
    sourceNote: '埼玉県補助事業の公式サイトで事業概要、対象企業・従業員、補助率2分の1、多様な働き方実践企業3分の2、年9万円・年12万円上限、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiba-company-scholarship-repayment',
    title: '千葉県 中小企業の人材確保に向けた奨学金返還支援事業',
    organization: '千葉県',
    type: 'local',
    maxAmount: '従業員1人あたり年10万円、最大6年間',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '千葉県',
    tags: ['千葉県', '奨学金返還支援', '中小企業', '若者負担軽減'],
    eligibility: '千葉県内中小企業者が、正社員として勤務し奨学金を返還中で、県内居住かつ県内事業所勤務などの要件を満たす従業員を支援する場合に対象です。',
    targetOccupation: '県内中小企業者と奨学金返還中の正社員',
    applicationPeriod: '申請受付や締切は公式ページ・手引きで確認',
    description: '千葉県内中小企業者が従業員の奨学金返還を支援した額の一部を、県が補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千葉県の中小企業の人材確保に向けた奨学金返還支援事業は、県内中小企業者の人材確保・定着と若者の負担軽減を目的に、企業が従業員の奨学金返還のために支援した額の一部を補助する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>補助率は企業が従業員に支援する額の2分の1です。補助上限額は従業員1人につき年間10万円まで、補助対象期間は従業員1人につき最大6年間まで、補助対象人数は企業1社あたり従業員5人までです。</p>'
      },
      {
        heading: '対象となる従業員',
        content: '<p>正社員として勤務し奨学金を返還中であること、申請年度の4月1日時点で正社員となってから6年以内であること、県内居住かつ県内事業所に勤務していることなどが要件です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.chiba.lg.jp/koyou/wakamono/syogakukinshien.html',
    sourceName: '千葉県 中小企業の人材確保に向けた奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.chiba.lg.jp/koyou/wakamono/syogakukinshien.html'
    ],
    sourceNote: '千葉県公式ページで事業概要、補助対象従業員、対象奨学金、補助率2分の1、年10万円上限、最大6年間、1社5人までを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yokohama-high-school-scholarship',
    title: '横浜市 高等学校奨学生（給付型奨学金）',
    organization: '横浜市',
    type: 'local',
    maxAmount: '年額6万円（月額5千円）',
    maxAmountNum: 6,
    category: 'education',
    prefecture: '神奈川県',
    tags: ['横浜市', '給付型奨学金', '高校生', '返還不要'],
    eligibility: '保護者が横浜市内在住で、高等学校等に在学し、学業成績と経済的理由の要件を満たす生徒が対象です。',
    targetOccupation: '高校生・特別支援学校高等部生・中等教育学校後期課程生',
    applicationPeriod: '令和8年度募集は2026年5月8日で終了。令和9年度募集は2027年3月中旬以降に案内予定',
    deadlineDate: '2026-05-08',
    description: '横浜市が高校生に年額6万円を支給する返還不要の給付型奨学金です。令和8年度募集は終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>横浜市高等学校奨学生は、高校生に年額6万円を支給する給付型奨学金です。採用された場合、支給された奨学金は原則として返還する必要がありません。</p>'
      },
      {
        heading: '支給額と採用人数',
        content: '<p>支給額は年額60,000円、月額5,000円です。令和8年度募集時の新規採用人数は920人程度と案内されています。</p>'
      },
      {
        heading: '応募資格',
        content: '<p>保護者が横浜市内在住であること、高等学校等に在学していること、評定平均値が原則3.50以上であること、経済的理由により修学が困難であることなどが要件です。</p>'
      }
    ],
    officialUrl: 'https://www.city.yokohama.lg.jp/kosodate-kyoiku/kyoiku/soudan/syogakukin.html',
    sourceName: '横浜市 高等学校奨学生（給付型奨学金）',
    sourceUrls: [
      'https://www.city.yokohama.lg.jp/kosodate-kyoiku/kyoiku/soudan/syogakukin.html'
    ],
    sourceNote: '横浜市公式ページで年額6万円、返還不要、令和8年度募集終了、採用人数920人程度、応募資格、提出期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gunma-company-scholarship-repayment',
    title: '群馬県 中小企業奨学金返還支援補助金',
    organization: '群馬県',
    type: 'local',
    maxAmount: '従業員1人あたり年6万円、最長5年間',
    maxAmountNum: 30,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '群馬県',
    tags: ['群馬県', '奨学金返還支援', '中小企業', '人材定着'],
    eligibility: '群馬県内に本社がある中小企業等が、正社員で採用後5年以内、奨学金を返還中、県内勤務または県内居住などの要件を満たす従業員に奨学金返還支援を行う場合に対象です。',
    targetOccupation: '県内中小企業等と奨学金返還中の正社員',
    applicationPeriod: '2026年8月3日から2026年9月30日17時まで。予算上限に達し次第終了',
    deadlineDate: '2026-09-30',
    description: '群馬県内の中小企業等が従業員に行う奨学金返還支援について、県が支援額の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>群馬県中小企業奨学金返還支援補助金は、県内の中小企業等が従業員に対して行う奨学金返還支援について、県が支援額の2分の1を補助し、企業等と連携して若者の県内定着を図る制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>補助対象期間は支援対象者1名につき最長5年間です。年間補助額は企業等の支援額の2分の1で、支援対象者の奨学金年間返済額の3分の1または年6万円のいずれか低い額が県補助額の上限です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>令和8年度の申請受付期間は2026年8月3日から9月30日17時までです。申請書一式を申請フォームから提出し、先着順で受付処理されます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.gunma.jp/page/761652.html',
    sourceName: '群馬県 中小企業奨学金返還支援補助金',
    sourceUrls: [
      'https://www.pref.gunma.jp/page/761652.html'
    ],
    sourceNote: '群馬県公式ページで令和8年度受付期間、制度概要、対象企業・支援対象者、補助期間最長5年、補助率2分の1、年6万円上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'niigata-uturn-scholarship-repayment',
    title: '新潟県 Uターン促進奨学金返還支援助成金',
    organization: '新潟県',
    type: 'local',
    maxAmount: '年20万円、総額最大120万円',
    maxAmountNum: 120,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '新潟県',
    tags: ['新潟県', '奨学金返還支援', 'Uターン', '定住支援'],
    eligibility: '新潟県出身で、県外で通算1年以上就業し、30歳未満で県内に転入・就業し、対象奨学金等を返還している方などが対象です。',
    targetOccupation: '新潟県にUターン転職した若者',
    applicationPeriod: '認定申請は県内転入後6か月以内。認定に係る最終提出期限は2027年2月末',
    deadlineDate: '2027-02-28',
    description: '新潟県内への若者のUターンを促進するため、Uターン転職した方の奨学金等の返還を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟県Uターン促進奨学金返還支援助成金は、県内への若者のUターンを促進するため、県内にUターンして就業した方の奨学金等の返還を支援する制度です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>助成期間は県内に転入し就業した日の属する年度の翌年度から最長6年間です。申請年度の前年度に返還した奨学金等の額が対象で、年20万円、助成総額120万円が上限です。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>助成を受けるには、事前に支援対象者の認定を受ける必要があります。認定申請は県内に転入後6か月以内で、令和8年度をもって認定は終了し、最終提出期限は2027年2月末です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.niigata.lg.jp/sec/shigototeijyu/1356888818141.html',
    sourceName: '新潟県 Uターン促進奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.niigata.lg.jp/sec/shigototeijyu/1356888818141.html'
    ],
    sourceNote: '新潟県公式ページで対象者要件、対象奨学金、助成期間最長6年、年20万円・総額120万円上限、認定申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyama-science-pharmacy-scholarship-repayment',
    title: '富山県 理工系・薬学部生対象奨学金返還助成制度',
    organization: '富山県',
    type: 'local',
    maxAmount: '前年度返還額相当を10年間助成',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '富山県',
    tags: ['富山県', '奨学金返還助成', '理工系', '薬学部'],
    eligibility: '理工系学部生・理工系大学院生・6年制薬学部生で、日本学生支援機構奨学金または富山県奨学資金を借り入れ、対象企業への就職を希望する方が対象です。',
    targetOccupation: '富山県内登録企業へ就職する理工系・薬学部生',
    applicationPeriod: '令和9年3月卒業予定者・令和9年4月採用分の募集は終了。次回募集は公式ページで確認',
    description: '富山県内登録企業へ就職する理工系・薬学部生を対象に、県と企業が設置する基金から奨学金返還を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山県理工系・薬学部生対象奨学金返還助成制度は、理工系・薬学部生の県内企業への就職と定着を促進するため、登録企業に就職した助成対象者の奨学金返還を支援する制度です。</p>'
      },
      {
        heading: '助成対象経費',
        content: '<p>理工系学部生は2年間に貸与を受けた奨学金総額、理工系大学院生は大学院在学時の2年分、6年制薬学部生は5・6年次または1年次から6年次までの奨学金総額が助成対象経費です。</p>'
      },
      {
        heading: '助成の受け方',
        content: '<p>登録企業へ就業後、9年目までは前年度に返還した奨学金額に相当する額を助成対象者へ支払い、10年目は前年度返還相当額に加えて残額を奨学金貸与団体へ一括支払いします。</p>'
      }
    ],
    officialUrl: 'https://www.pref.toyama.jp/130321/sangyou/roudou/roudoukoyou/kj00019118.html',
    sourceName: '富山県 理工系・薬学部生対象奨学金返還助成制度',
    sourceUrls: [
      'https://www.pref.toyama.jp/130321/sangyou/roudou/roudoukoyou/kj00019118.html'
    ],
    sourceNote: '富山県公式ページで制度趣旨、対象者、登録企業、助成対象経費、就業後10年間の助成方法を確認。募集終了のため期限なしの参考掲載扱い。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ishikawa-science-scholarship-repayment',
    title: 'いしかわ理系人材確保奨学金返還助成制度',
    organization: '石川県・いしかわ就職・定住総合サポートセンター',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '石川県',
    tags: ['石川県', '奨学金返還助成', '理系人材', '県内就職'],
    eligibility: '理系の大学院・大学・高等専門学校に在学し、日本学生支援機構奨学金または石川県育英資金の貸与を受け、対象企業から内定を得ていない方が対象です。',
    targetOccupation: '石川県内対象企業へ就職する理系学生',
    applicationPeriod: '企業登録は随時募集。学生向け募集・対象年度は公式ページで確認',
    description: '石川県内企業に就職し3年を超えて継続勤務した理系学生の奨学金返還を、県と企業が協力して助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>いしかわ理系人材確保奨学金返還助成制度は、奨学金を返還する学生を支援し、学生の県内就職を促進するための制度です。対象の県内企業に就職し、3年を超えて継続勤務した場合に助成されます。</p>'
      },
      {
        heading: '助成額',
        content: '<p>助成額は、対象企業に勤務して3年間経過した時点の奨学金返還残額、または各企業が設定する助成額のいずれか低い額です。最大200万円まで助成され、企業は助成額の2分の1を県の基金に寄附します。</p>'
      },
      {
        heading: '交付要件',
        content: '<p>大学等を卒業または修了後、対象企業に正社員として3年以上継続就業していること、勤務地が県内であること、貸与を受けた奨学金を滞納なく返還していることなどが要件です。</p>'
      }
    ],
    officialUrl: 'https://www.city.kaga.ishikawa.jp/soshiki/sangyou/syoukouka/koyousyuurousien/11534.html',
    sourceName: 'いしかわ理系人材確保奨学金返還助成制度',
    sourceUrls: [
      'https://www.city.kaga.ishikawa.jp/soshiki/sangyou/syoukouka/koyousyuurousien/11534.html',
      'https://www.pref.ishikawa.lg.jp/kurashi/kyoiku/shogakukin/index.html'
    ],
    sourceNote: '加賀市公式ページで石川県の制度概要と制度詳細リンクを確認し、石川県公式奨学金ページも参照。最大200万円、対象者、交付要件、助成額、企業負担2分の1は制度ページ本文で確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukui-uiturn-scholarship-repayment',
    title: '福井県 UIターン奨学金返還支援事業',
    organization: '福井県',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '福井県',
    tags: ['福井県', '奨学金返還支援', 'UIターン', '県内就職'],
    eligibility: '福井県外の大学等を卒業予定または卒業した方で、福井県内に定住し、対象業種・職種の県内企業に就職する予定の方などが対象です。',
    targetOccupation: '福井県内企業へUIターン就職する大学生等',
    applicationPeriod: '2026年度後期募集は2026年4月1日から2026年6月30日まで',
    deadlineDate: '2026-06-30',
    description: '福井県外の大学生等が福井県内にUIターン就職し定着する場合に、奨学金返還額の一部を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井県UIターン奨学金返還支援事業は、県外大学生等の福井県内就業と定着を促進し、県内産業を担う人材を確保するための制度です。就業前、福井県にUIターンする前に申請し、認定を受ける必要があります。</p>'
      },
      {
        heading: '支援額',
        content: '<p>奨学金を返還した額の5年分が対象です。大学、短期大学、高等専門学校、専修学校専門課程は最大100万円、6年制の医・薬・歯・獣医学部や大学院は最大150万円です。</p>'
      },
      {
        heading: '支援時期',
        content: '<p>支援は就職後1年半、3年半、5年半の3回に分けて行われます。日本学生支援機構等への返還額と制度上の上限額を比較し、低い方の額が補助されます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukui.lg.jp/doc/wakatei/uisyougakukin/jigyougaiyou.html',
    sourceName: '福井県 UIターン就職する大学生等の奨学金返還支援',
    sourceUrls: [
      'https://www.pref.fukui.lg.jp/doc/wakatei/uisyougakukin/jigyougaiyou.html'
    ],
    sourceNote: '福井県公式ページで対象者、対象業種・職種、県内定住要件、最大100万円・最大150万円、支援時期、事前認定要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kai-scholarship-repayment',
    title: '甲斐市 若者定住促進奨学金返還支援事業',
    organization: '甲斐市',
    type: 'local',
    maxAmount: '月1万円、年額12万円',
    maxAmountNum: 12,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '山梨県',
    tags: ['甲斐市', '奨学金返還支援', '若者定住', '県内就業'],
    eligibility: '令和7年4月1日以降に奨学金返還を開始し、山梨県内事業所等に正規雇用等で就業し、認定申請年度の4月1日時点で35歳未満、甲斐市内に居住する方などが対象です。',
    targetOccupation: '甲斐市に居住し山梨県内で就業する奨学金返還中の方',
    applicationPeriod: '認定申請は最初の交付申請を行う日の前年度末まで',
    description: '甲斐市が、移住・定住と県内企業への就業促進を目的に、奨学金返還中の若者を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>甲斐市若者定住促進奨学金返還支援事業は、奨学金を返還する人の就労初期における経済的負担を軽減し、移住・定住と県内企業への就業を促進する制度です。</p>'
      },
      {
        heading: '補助金額',
        content: '<p>定額月賦返還方式の場合は月1万円が上限です。それ以外の返還方式では年額12万円が上限です。市内に居住し、正規雇用等で就業した期間に返還した奨学金が対象となります。</p>'
      },
      {
        heading: '対象期間と申請',
        content: '<p>補助対象期間は、認定を受けた年度に属する最初の返還月を起点として通算120か月が限度です。ただし、35歳になる年度の返済分までが対象です。</p>'
      }
    ],
    officialUrl: 'https://www.city.kai.yamanashi.jp/page/4160.html',
    sourceName: '甲斐市 奨学金返還支援事業',
    sourceUrls: [
      'https://www.city.kai.yamanashi.jp/page/4160.html'
    ],
    sourceNote: '甲斐市公式ページで対象者、対象奨学金、県内就業・市内居住要件、月1万円・年12万円上限、通算120か月上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagano-company-scholarship-repayment',
    title: '長野県 奨学金返還支援制度導入企業サポート事業',
    organization: '長野県',
    type: 'local',
    maxAmount: '従業員1人あたり年12万円、入社年度含む5会計年度',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '長野県',
    tags: ['長野県', '奨学金返還支援', '中小企業', '人材定着'],
    eligibility: '長野県内に本社等を置き、奨学金返還支援制度を設け、県の職場いきいきアドバンスカンパニー等の要件を満たす中小企業等が対象です。',
    targetOccupation: '県内中小企業等と奨学金返還支援を受ける従業員',
    applicationPeriod: '交付申請は通年受付。予算額に達し次第終了',
    description: '長野県内企業が従業員に行う奨学金返還支援について、県が企業負担額を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長野県奨学金返還支援制度導入企業サポート事業は、従業員への奨学金返還支援制度を設ける県内中小企業等に対し、企業の負担額を助成する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>対象経費は、企業が日本学生支援機構へ直接返還する額、または企業が奨学金返還費用として対象従業員へ給付した額です。補助割合は10分の10、上限額は支援対象従業員1人あたり年12万円です。</p>'
      },
      {
        heading: '補助期間',
        content: '<p>補助期間は、支援対象従業員1人あたり入社した年度を含め5会計年度です。交付申請は通年で受け付けていますが、予算額に達し次第終了します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nagano.lg.jp/rodokoyo/shogakukin.html',
    sourceName: '長野県 奨学金返還支援制度導入企業サポート事業',
    sourceUrls: [
      'https://www.pref.nagano.lg.jp/rodokoyo/shogakukin.html',
      'https://www.shukatsu-nagano.jp/scholarship'
    ],
    sourceNote: '長野県公式ページと県特設サイトで事業概要、対象企業、補助率10分の10、年12万円上限、補助期間5会計年度、通年受付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gifu-youth-scholarship-repayment',
    title: 'ぎふ若者定着奨学金返還支援制度',
    organization: '岐阜県',
    type: 'local',
    maxAmount: '例示で最大150万円規模',
    maxAmountNum: 150,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '岐阜県',
    tags: ['岐阜県', '奨学金返還支援', '若者定着', '県内就職'],
    eligibility: '大学等在学中に奨学金の貸与を受け、卒業または修了後、支援実施企業に正規雇用で採用され、3年または6年以上就業する方が対象です。',
    targetOccupation: '岐阜県内の支援実施企業へ就職する方',
    applicationPeriod: '令和8年度受付開始。2026年度・2027年度・2028年度の就職・採用が対象。内定前登録が必要',
    description: '岐阜県が県内企業と連携し、県内企業に就職する若者の奨学金返還を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ぎふ若者定着奨学金返還支援制度は、若者が県内産業を支える人材として定着することを目的に、県と支援実施企業が協力して奨学金の返還を支援する制度です。</p>'
      },
      {
        heading: '支援の条件',
        content: '<p>大学等在学中に奨学金の貸与を受け、卒業または修了後、支援実施企業に正規雇用で採用された方が、3年または6年以上支援実施企業で就業した場合に補助金が交付されます。</p>'
      },
      {
        heading: '登録の注意点',
        content: '<p>制度を利用したい企業と就職活動をする方は、どちらも登録手続きが必要です。手続きが完了する前に内定があった場合は制度の対象外となります。</p>'
      }
    ],
    officialUrl: 'https://shogakukin.jinzai-gifu.jp/support-system/',
    sourceName: 'ぎふ若者定着奨学金返還支援制度',
    sourceUrls: [
      'https://shogakukin.jinzai-gifu.jp/',
      'https://shogakukin.jinzai-gifu.jp/support-system/'
    ],
    sourceNote: '岐阜県ポータルサイトで令和8年度受付開始、2026年度から2028年度採用対象、内定前登録、3年または6年以上就業要件、支援例を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shizuoka-company-scholarship-repayment',
    title: '静岡県 奨学金返還支援制度',
    organization: '静岡県',
    type: 'local',
    maxAmount: '県と市町が企業の返還支援を補助',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '静岡県',
    tags: ['静岡県', '奨学金返還支援', '中小企業', '若者定着'],
    eligibility: '35歳以下の方を新規採用し、奨学金返還支援として手当等の支給または代理返還を行う中小企業等が対象です。対象市町との連携制度です。',
    targetOccupation: '静岡県内中小企業等と奨学金返還中・返還予定の従業員',
    applicationPeriod: '令和8年度制度として案内中。申請受付や対象市町は公式ページで確認',
    description: '静岡県と県内11市町が連携し、35歳以下の従業員へ奨学金返還支援を行う中小企業等を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>静岡県の奨学金返還支援制度は、35歳以下の方を新規採用し、その奨学金返還支援を実施する企業を、県と市町が連携して支援する企業向け制度です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>奨学金を返還中、または将来返還することが確定している従業員を支援するため、手当等の支給または代理返還を行う中小企業に対し、県と市町が連携して補助金を支給します。</p>'
      },
      {
        heading: '対象市町',
        content: '<p>公式ページでは、伊東市、裾野市、伊豆市、長泉町、島田市、焼津市、藤枝市、牧之原市、吉田町、袋井市、菊川市の11市町との連携制度として案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/1083367/1083385/1076756.html',
    sourceName: '静岡県 奨学金返還支援制度',
    sourceUrls: [
      'https://www.pref.shizuoka.jp/sangyoshigoto/shuroshien/1083367/1083385/1076756.html'
    ],
    sourceNote: '静岡県公式ページで令和8年度制度、35歳以下新規採用、手当等支給・代理返還、県内11市町との連携、中小企業向け補助を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aichi-company-scholarship-repayment',
    title: '愛知県 中小企業人材確保奨学金返還支援事業',
    organization: '愛知県',
    type: 'local',
    maxAmount: '企業の奨学金返還支援を補助',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '愛知県',
    tags: ['愛知県', '奨学金返還支援', '中小企業', '人材確保'],
    eligibility: '従業員への奨学金返還支援制度を導入する愛知県内の中小企業等が対象です。登録企業の情報は県特設サイトで公開されています。',
    targetOccupation: '愛知県内中小企業等と奨学金返還支援を受ける従業員',
    applicationPeriod: '令和8年度制度として案内中。登録・申請の詳細は県特設サイトで確認',
    description: '愛知県が、中小企業の人材確保を目的に、従業員の奨学金返還を支援する中小企業を対象として実施する補助制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>あいち奨学金返還支援ネットは、愛知県が実施する中小企業向けの奨学金返還支援制度の特設サイトです。従業員の奨学金返還を支援する中小企業を対象とした補助制度として案内されています。</p>'
      },
      {
        heading: '目的',
        content: '<p>多くの学生が奨学金を受給し、就職後に返還している状況を踏まえ、企業が奨学金返還支援制度を導入することを後押しし、中小企業の人材確保につなげる制度です。</p>'
      },
      {
        heading: '利用者向け情報',
        content: '<p>特設サイトでは補助制度の案内に加え、奨学金返還支援制度を導入している登録企業の紹介も行われています。学生・求職者は企業選びの参考として確認できます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aichi.jp/soshiki/shugyo/shogakukinhenkan-torokukigyo.html',
    sourceName: 'あいち奨学金返還支援ネット',
    sourceUrls: [
      'https://www.pref.aichi.jp/soshiki/shugyo/shogakukinhenkan-torokukigyo.html',
      'https://shogakukin-henkan-shien.pref.aichi.jp/'
    ],
    sourceNote: '愛知県公式ページと公式特設サイトで、中小企業人材確保を目的とする奨学金返還支援補助制度、登録企業紹介、2024年度創設を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mie-youth-scholarship-repayment',
    title: '三重県 地域と若者の未来を拓く学生奨学金返還支援事業',
    organization: '三重県',
    type: 'local',
    maxAmount: '奨学金残額の4分の1',
    maxAmountNum: 100,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '三重県',
    tags: ['三重県', '奨学金返還支援', '若者定着', '県内就業'],
    eligibility: '大学等の奨学金を借り入れ、県内での居住かつ就業等の条件を満たす学生または既卒者が対象です。',
    targetOccupation: '三重県内で居住・就業する学生・既卒者',
    applicationPeriod: '令和8年度募集は2026年6月3日から2026年12月18日まで',
    deadlineDate: '2026-12-18',
    description: '三重県内で居住し就業する若者を対象に、大学等の奨学金返還額の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>三重県地域と若者の未来を拓く学生奨学金返還支援事業は、若者の県内定着と県内産業の振興を目的に、県内での居住かつ就業等を条件として奨学金返還額の一部を助成する制度です。</p>'
      },
      {
        heading: '助成金額',
        content: '<p>学生の場合は在学中に借り入れた奨学金残額の4分の1、既卒者の場合は申請時の借入奨学金残額の4分の1が助成対象として案内されています。</p>'
      },
      {
        heading: '募集内容',
        content: '<p>令和8年度の募集定員は150名です。募集期間は2026年6月3日から12月18日までで、一般枠と南部地域優先枠が設けられています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.mie.lg.jp/KIKAKUK/HP/miesalon/74737039887_00002.htm',
    sourceName: '三重県 地域と若者の未来を拓く学生奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.mie.lg.jp/KIKAKUK/HP/miesalon/74737039887_00002.htm'
    ],
    sourceNote: '三重県公式ページで令和8年度募集、募集期間、募集定員150名、県内居住・就業要件、奨学金残額4分の1助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shiga-youth-retention-scholarship-repayment',
    title: '滋賀県 若年層等確保・定着支援事業（奨学金返還支援）',
    organization: '滋賀県',
    type: 'local',
    maxAmount: '奨学金返還支援の社内制度導入企業を補助',
    maxAmountNum: 5,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '滋賀県',
    tags: ['滋賀県', '奨学金返還支援', '若年人材', '中小企業'],
    eligibility: '滋賀県内中小企業等が、若年人材の確保・定着に向け、従業員に対する奨学金返還支援やスキルアップ支援に取り組む場合に対象です。',
    targetOccupation: '滋賀県内中小企業等と奨学金返還支援対象従業員',
    applicationPeriod: '令和8年度募集は2026年4月13日から案内開始。詳細は公式ページで確認',
    description: '滋賀県内中小企業等が若年人材の確保・定着に向けて行う奨学金返還支援を後押しする制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>滋賀県若年層等確保・定着支援事業は、県内中小企業等が若年人材の確保や定着に向け、従業員に対して奨学金返還支援やスキルアップ支援を行う場合に、その経費の一部を補助する制度です。</p>'
      },
      {
        heading: '奨学金返還支援制度',
        content: '<p>奨学金返還を支援する社内制度を導入する事業者に対し、奨学金を返還している従業員への手当等の費用の一部を補助する制度として案内されています。</p>'
      },
      {
        heading: '関連する支援',
        content: '<p>同事業では、奨学金返還支援のほか、DXやGXを推進する資格取得支援、研修参加時の代替職員確保支援など、若年人材の定着に関する支援も実施されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shiga.lg.jp/kensei/koho/e-shinbun/oshirase/349836.html',
    sourceName: '滋賀県 若年層等確保・定着支援事業',
    sourceUrls: [
      'https://www.pref.shiga.lg.jp/kensei/koho/e-shinbun/oshirase/349836.html',
      'https://www.shigaplaza.or.jp/news/hojokin-joho-dounyusokusin2026/'
    ],
    sourceNote: '滋賀県公式ページで令和8年度若年層等確保・定着支援事業、奨学金返還支援制度、県内中小企業等向け補助を確認。滋賀県産業支援プラザ募集ページで申請期間も参照。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyoto-work-scholarship-repayment',
    title: '京都府 就労・奨学金返済一体型支援事業',
    organization: '京都府',
    type: 'local',
    maxAmount: '1人あたり最大45万円（6年間合計）',
    maxAmountNum: 45,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '京都府',
    tags: ['京都府', '奨学金返還支援', '中小企業', '若手人材定着'],
    eligibility: '京都府内に事業所を有する中小企業等が、正社員となってから6年以内の従業員に奨学金返済支援手当等を支給する場合に対象です。',
    targetOccupation: '京都府内中小企業等と奨学金を返済する若手正社員',
    applicationPeriod: '2026年4月1日から2026年12月28日まで',
    deadlineDate: '2026-12-28',
    description: '京都府内中小企業等が、若手従業員の奨学金返済を支援するために支給した手当等の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都府就労・奨学金返済一体型支援事業は、府内中小企業等の人材確保と若手従業員の職場定着を後押しするため、従業員への奨学金返済支援に要した経費の一部を補助する制度です。</p>'
      },
      {
        heading: '対象となる従業員',
        content: '<p>正社員として雇用され、正社員となってから6年以内で、本人が奨学金を返済しており、京都府内の事業所に勤務する従業員が対象です。中途採用者も条件を満たせば対象になります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>1年目から3年目までは1人あたり年9万円、4年目から6年目までは年6万円を上限に、年間返済額から1万円を控除した額の2分の1または企業の支援額の2分の1の範囲で補助されます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kyoto.jp/rosei/syuurousyougakukin/syuurousyougakukinn1.html',
    sourceName: '京都府 就労・奨学金返済一体型支援事業',
    sourceUrls: [
      'https://www.pref.kyoto.jp/rosei/syuurousyougakukin/syuurousyougakukinn1.html'
    ],
    sourceNote: '京都府公式ページで令和8年度の申請期間、対象企業・対象従業員、補助率、1人あたり年9万円・年6万円の上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'osaka-scholarship-repayment-introduction-support',
    title: '大阪府 奨学金返還支援制度導入促進支援金',
    organization: '大阪府',
    type: 'local',
    maxAmount: '令和7年度第2期受付終了',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '大阪府',
    tags: ['大阪府', '奨学金返還支援', '制度導入', '企業支援'],
    eligibility: '若者の奨学金返還を支援する制度を導入する府内事業者向けの支援金です。令和7年度第2期の受付は終了しています。',
    targetOccupation: '大阪府内事業者',
    applicationPeriod: '令和7年度第2期申請受付は2025年11月28日で終了',
    deadlineDate: '2025-11-28',
    description: '大阪府内事業者による奨学金返還支援制度の導入を後押しするための支援金です。公式ページでは令和7年度第2期受付終了が案内されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪府奨学金返還支援制度導入促進支援金は、奨学金を返還している若者の負担軽減と、企業の人材確保・定着を目的として、府内事業者による奨学金返還支援制度の導入を促進する制度です。</p>'
      },
      {
        heading: '受付状況',
        content: '<p>公式ページでは、令和7年度第2期の申請受付は2025年11月28日に終了したと案内されています。現在は事業者一覧等の情報が掲載されています。</p>'
      },
      {
        heading: '確認時の扱い',
        content: '<p>受付終了済みのため、助成金ナビでは公式確認済みの履歴データとして登録し、アクティブな募集一覧からは除外される期限設定にしています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.osaka.lg.jp/o110100/koyotaisaku/shogakukin/shienkin.html',
    sourceName: '大阪府 奨学金返還支援制度導入促進支援金',
    sourceUrls: [
      'https://www.pref.osaka.lg.jp/o110100/koyotaisaku/shogakukin/shienkin.html'
    ],
    sourceNote: '大阪府公式ページで奨学金返還支援制度導入促進支援金、若者の負担軽減・事業者の人材確保目的、令和7年度第2期受付終了日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nara-company-scholarship-repayment',
    title: '奈良県 奨学金返還支援事業補助金',
    organization: '奈良県',
    type: 'local',
    maxAmount: '1社最大500万円（1人年10万円・最大10年）',
    maxAmountNum: 500,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '奈良県',
    tags: ['奈良県', '奨学金返還支援', '中小企業', '若手人材'],
    eligibility: '奈良県内の中小企業等が、若年人材の採用・定着に向けて奨学金返還支援制度を設け、対象従業員を支援する場合に対象です。',
    targetOccupation: '奈良県内中小企業等と奨学金返還支援対象従業員',
    applicationPeriod: '2026年4月1日から2027年3月25日まで',
    deadlineDate: '2027-03-25',
    description: '奈良県内中小企業等が従業員の奨学金返還を支援する場合に、企業が負担した支援額の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>奈良県奨学金返還支援事業補助金は、県内中小企業等の人材確保と若手従業員の定着を目的に、企業が実施する奨学金返還支援を補助する制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助率は企業の支給額または代理返還額の2分の1以内です。対象従業員1人あたり年10万円、1社あたり年5人まで、支援期間は入社年度を含め最大10年間と案内されています。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>令和8年度の申請期間は2026年4月1日から2027年3月25日までです。提出書類の到着期限が設定されているため、申請前に公式ページの募集要領を確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nara.lg.jp/n102/p065010.html',
    sourceName: '奈良県 奨学金返還支援事業補助金',
    sourceUrls: [
      'https://www.pref.nara.lg.jp/n102/p065010.html'
    ],
    sourceNote: '奈良県公式ページで令和8年度募集、補助率2分の1以内、1人年10万円、1社年5人、最大10年、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'wakayama-core-industry-scholarship-repayment',
    title: '和歌山県 中核産業人材確保強化のための奨学金返還助成制度',
    organization: '和歌山県',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '和歌山県',
    tags: ['和歌山県', '奨学金返還支援', '理工系人材', '県内就職'],
    eligibility: '令和10年3月卒業予定の大学生・大学院生・高等専門学校生等で、対象分野を学び、和歌山県内の参画企業で研究開発職・技術職等として就職する意思がある人が対象です。',
    targetOccupation: '和歌山県内参画企業への就職を目指す学生',
    applicationPeriod: '第1回 2026年4月1日から7月31日、第2回 8月3日から11月30日、第3回 12月1日から2027年3月24日まで',
    deadlineDate: '2027-03-24',
    description: '和歌山県内の中核産業を支える人材確保を目的に、参画企業へ就職し一定期間勤務した人の奨学金返還を最大100万円助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山県中核産業人材確保強化のための奨学金返還助成制度は、県内企業の研究開発職・技術職等を担う若手人材を確保するため、対象学生の奨学金返還を助成する制度です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>助成額は奨学金返還額相当額で、上限は100万円です。参画企業で3年間勤務した後、原則として奨学金貸与機関へ支払われます。</p>'
      },
      {
        heading: '募集期間',
        content: '<p>令和8年度は50人を募集し、第1回から第3回まで募集期間が設定されています。定員に達した場合は予定より早く募集が終了する可能性があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.wakayama.lg.jp/prefg/060600/01shin/uturnshushoku/syougakukin_001.html',
    sourceName: '和歌山県 中核産業人材確保強化のための奨学金返還助成制度',
    sourceUrls: [
      'https://www.pref.wakayama.lg.jp/prefg/060600/01shin/uturnshushoku/syougakukin_001.html'
    ],
    sourceNote: '和歌山県公式ページで対象学生、募集人数50人、助成上限100万円、参画企業で3年勤務後の助成、令和8年度の募集期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tottori-future-scholarship-repayment',
    title: '鳥取県 未来人材育成奨学金支援事業',
    organization: '鳥取県',
    type: 'local',
    maxAmount: '最大216万円',
    maxAmountNum: 216,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '鳥取県',
    tags: ['鳥取県', '奨学金返還支援', '県内就職', '若者定着'],
    eligibility: '鳥取県内企業への就職を視野に入れる大学・大学院、短大、専門学校、高専4年生以上の学生または35歳未満の既卒者が対象です。',
    targetOccupation: '鳥取県内企業等へ就職予定の学生・既卒者',
    applicationPeriod: '就職前に申請が必要。詳細は公式ページで確認',
    description: '鳥取県内企業等へ就職する若者に対し、産業界と連携して奨学金返還を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鳥取県未来人材育成奨学金支援事業は、鳥取県内企業等へ就職する若者の奨学金返還を支援し、県内で働き始める人を後押しする制度です。県外出身者や既卒者も対象として案内されています。</p>'
      },
      {
        heading: '対象者',
        content: '<p>大学、大学院、短大、専門学校、高専4年生以上の学生と、35歳未満の既卒者が対象です。鳥取県内企業への就職を視野に入れており、就職前の申請が必要です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>特定業種では無利子奨学金の2分の1、有利子奨学金の4分の1が助成対象で、最大額は無利子216万円、有利子108万円です。一般業種では無利子108万円、有利子54万円が上限として案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tottori.lg.jp/327184.htm',
    sourceName: '鳥取県 未来人材育成奨学金支援事業',
    sourceUrls: [
      'https://www.pref.tottori.lg.jp/327184.htm'
    ],
    sourceNote: '鳥取県公式の県政だよりページで対象者、就職前申請、全業種対象、公務員除外、最大216万円、助成率を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shimane-pharmacist-scholarship-repayment',
    title: '島根県 薬剤師奨学金返還助成事業',
    organization: '島根県',
    type: 'local',
    maxAmount: '最大576万円',
    maxAmountNum: 576,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '島根県',
    tags: ['島根県', '奨学金返還支援', '薬剤師', '医療人材'],
    eligibility: '島根県内の登録医療機関または薬局に新たに薬剤師として就業を希望する大学等在学者または既卒者が対象です。就職内定前の申請が必要です。',
    targetOccupation: '島根県内医療機関・薬局へ就業予定の薬学生・薬剤師',
    applicationPeriod: '2026年4月1日から2026年12月28日まで',
    deadlineDate: '2026-12-28',
    description: '島根県内の医療機関や薬局に新たに就業する薬剤師を確保するため、奨学金返還を県と事業者が共同で助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>島根県薬剤師奨学金返還助成事業は、県内の登録医療機関または薬局に新たに就業する薬剤師を対象に、大学等在学中に借り入れた奨学金の返還を助成する制度です。</p>'
      },
      {
        heading: '募集内容',
        content: '<p>2026年度の募集期間は2026年4月1日から12月28日までで、募集定員は10名です。島根県出身者でなくても応募でき、大学5年生から就職内定前まで登録できます。</p>'
      },
      {
        heading: '助成額',
        content: '<p>病院では月額最大4万円、最長12年間で最大576万円の助成が案内されています。薬局は月額最大2万円、最長12年間で最大288万円です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shimane.lg.jp/medical/yakuji/yakuji/yakuji_info/yakuzaishikakuho/yakuzaishi_josei.html',
    sourceName: '島根県 薬剤師奨学金返還助成事業',
    sourceUrls: [
      'https://www.pref.shimane.lg.jp/medical/yakuji/yakuji/yakuji_info/yakuzaishikakuho/yakuzaishi_josei.html'
    ],
    sourceNote: '島根県公式ページで令和8年度募集、募集期間、募集定員10名、対象者、病院最大576万円・薬局最大288万円の助成額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okayama-sme-scholarship-repayment',
    title: '岡山県 中小企業就職促進奨学金返還支援事業',
    organization: '岡山県',
    type: 'local',
    maxAmount: '1人あたり年9万円',
    maxAmountNum: 27,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '岡山県',
    tags: ['岡山県', '奨学金返還支援', '中小企業', 'IJUターン'],
    eligibility: '岡山県内に主たる事業所を有する、または県内勤務先を限定した採用を行う中小企業者が、35歳未満の正社員に奨学金返還支援を行う場合に対象です。',
    targetOccupation: '岡山県内中小企業等と奨学金を返還する若手正社員',
    applicationPeriod: '令和8年4月から代理返還も支援対象。申請手続きは公式ページで確認',
    description: '岡山県内中小企業等が、IJUターン就職する若手従業員の奨学金返還を支援する場合に、企業負担額の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山県中小企業就職促進奨学金返還支援事業は、若者の県内就職と中小企業の人材確保を目的に、従業員への奨学金返還支援制度を持つ中小企業を支援する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>支援対象者は、補助対象企業に勤務する正社員で、日本学生支援機構の奨学金を返還予定または返還中であり、県内事業所等に勤務する35歳未満の人です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>支援対象者1人あたり、企業が手当等として支給または代理返還した額の2分の1、または年9万円のいずれか低い額が補助されます。補助対象期間は原則採用後最大3年です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okayama.jp/page/555039.html',
    sourceName: '岡山県 奨学金返還支援制度導入企業を募集しています',
    sourceUrls: [
      'https://www.pref.okayama.jp/page/555039.html'
    ],
    sourceNote: '岡山県公式ページで令和8年4月から代理返還対象、対象企業・対象従業員、補助対象期間、1人年9万円上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hiroshima-go-scholarship-repayment-support',
    title: '広島県 Go！ひろしま奨学金返済支援制度導入企業応援補助金',
    organization: '広島県',
    type: 'local',
    maxAmount: '従業員1人あたり上限なし',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '広島県',
    tags: ['広島県', '奨学金返還支援', '中小企業', '人材定着'],
    eligibility: '広島県内に本社・本店または主たる事務所を置く中小企業等が、県内勤務の従業員に対する奨学金返済支援制度に基づき手当等を支給する場合に対象です。',
    targetOccupation: '広島県内中小企業等と奨学金を返済する従業員',
    applicationPeriod: '2026年4月1日から2027年2月26日まで',
    deadlineDate: '2027-02-26',
    description: '広島県内中小企業等が従業員の奨学金返済を支援する制度を導入した場合に、支援に要した費用の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>Go！ひろしま奨学金返済支援制度導入企業応援補助金は、県内企業の採用と定着、若年者の県内就職を促進するため、奨学金返済支援制度を導入した中小企業等を補助する制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>一般企業枠は従業員に支給した手当等の3分の2以内、人的資本開示企業枠は4分の3以内が補助されます。従業員1人あたりの上限額は設けられていませんが、当初計画の返済月額・年額の範囲内が対象です。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>令和8年度の申請期間は2026年4月1日から2027年2月26日までです。交付決定額が予算額に達した場合は、期間内でも募集が終了する可能性があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hiroshima.lg.jp/soshiki/68/shogakukin-hensai-shien-hojokin.html',
    sourceName: '広島県 Go！ひろしま奨学金返済支援制度導入企業応援補助金',
    sourceUrls: [
      'https://www.pref.hiroshima.lg.jp/soshiki/68/shogakukin-hensai-shien-hojokin.html'
    ],
    sourceNote: '広島県公式ページで令和8年度募集、対象企業・従業員、補助率、従業員1人あたり上限なし、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamaguchi-advanced-industry-scholarship-repayment',
    title: '山口県 高度産業人材確保事業奨学金返還補助制度',
    organization: '山口県',
    type: 'local',
    maxAmount: '最大6年間分の奨学金返還額相当',
    maxAmountNum: 0,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '山口県',
    tags: ['山口県', '奨学金返還支援', '理系人材', '製造業', '情報サービス業'],
    eligibility: '理系大学院修士課程1年生または薬学部5年生で、山口県内の製造業または情報サービス業の事業所で就業を希望する人が対象です。',
    targetOccupation: '山口県内製造業・情報サービス業への就業を希望する理系大学院生等',
    applicationPeriod: '2026年5月7日から2026年9月30日まで',
    deadlineDate: '2026-09-30',
    description: '山口県内産業を支える高度な専門知識を持つ人材を確保するため、理系大学院生等の奨学金返還を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口県高度産業人材確保事業奨学金返還補助制度は、県内産業を支える高度な専門人材の確保を目的に、理系大学院生等を対象として奨学金返還を補助する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>大学院修士課程1年生で工学・理学・農学・薬学系研究科に在籍する人、または薬学部5年生で薬学共用試験に合格している人などが対象です。修了・卒業後に県内の製造業または情報サービス業で就業する意思が必要です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>対象企業で就業を始めてから12年間のうち、最大6年間が補助対象期間です。補助金額は補助対象期間の月数に応じて算定され、対象者決定年の4月から2年間に貸与を受けた額が対象です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamaguchi.lg.jp/soshiki/255/202864.html',
    sourceName: '山口県 高度産業人材確保事業奨学金返還補助制度',
    sourceUrls: [
      'https://www.pref.yamaguchi.lg.jp/soshiki/255/202864.html'
    ],
    sourceNote: '山口県公式ページで2026年度募集、募集対象、25名程度、募集期間、補助対象期間最大6年、補助金額の算定方法を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokushima-scholarship-repayment-support',
    title: '徳島県 奨学金返還支援制度',
    organization: '徳島県',
    type: 'local',
    maxAmount: '最大125万円',
    maxAmountNum: 125,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '徳島県',
    tags: ['徳島県', '奨学金返還支援', '県内就業', '若者定着'],
    eligibility: '助成候補者として認定され、大学等卒業後に徳島県内事業所で一定期間就業した人が対象です。',
    targetOccupation: '徳島県内事業所へ就業する大学等卒業者',
    applicationPeriod: '令和8年度助成候補者募集は2026年夏頃から冬頃まで予定',
    description: '徳島県内事業所での就業を促進するため、大学等卒業後に県内で一定期間働いた人の奨学金返還費用を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>徳島県奨学金返還支援制度は、若者の県内就業促進と人材確保を目的に、大学等を卒業後、県内事業所で一定期間就業した場合に奨学金返還に要する経費を補助する制度です。</p>'
      },
      {
        heading: '助成方法',
        content: '<p>助成候補者に認定された後、大学等卒業後に県内事業所で3年以上就業した場合に支援が始まります。就業4年目から8年目までの5年間、毎年度、助成金額の5分の1が補助されます。</p>'
      },
      {
        heading: '募集予定',
        content: '<p>令和8年度の助成候補者募集は、公式ポータルで2026年夏頃から冬頃まで予定と案内されています。令和7年4月から助成金額の上限は100万円から125万円へ拡充されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tokushima.lg.jp/ippannokata/sangyo/shushokushien/5026191/',
    sourceName: '徳島県 奨学金返還支援制度ポータルサイト',
    sourceUrls: [
      'https://www.pref.tokushima.lg.jp/ippannokata/sangyo/shushokushien/5026191/'
    ],
    sourceNote: '徳島県公式ポータルで令和8年度募集予定、制度目的、助成方法、上限125万円への拡充を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagawa-work-scholarship-repayment',
    title: '香川県 かがわで働こう！奨学金返還支援制度',
    organization: '香川県',
    type: 'local',
    maxAmount: '月2万円〜4万円×貸付月数',
    maxAmountNum: 192,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '香川県',
    tags: ['香川県', '奨学金返還支援', '登録企業', '県内就職'],
    eligibility: '大学等に進学予定・在学中・卒業修了後3年以内で、香川県内の登録企業に就職予定の人が対象です。',
    targetOccupation: '香川県内登録企業へ就職予定の大学生等',
    applicationPeriod: '支援対象者は令和8年7月頃に募集開始予定。登録企業は通年受付',
    description: '大学生等が香川県内の登録企業へ就職した場合に、登録企業と県が連携して奨学金返還額の一部を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>かがわで働こう！奨学金返還支援制度は、大学生等の県内就業と定着を促進するため、登録企業と香川県が協働して日本学生支援機構の貸与型奨学金返還額の一部を支援する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>大学、短期大学、大学院、専修学校専門課程、高等専門学校などへ令和9年度に進学予定の人、在学中の人、卒業・修了後3年以内の人で、登録企業に就職予定の人が対象です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>支援額は月2万円から4万円に貸付月数を乗じた範囲で登録企業が選択し、登録企業と県が2分の1ずつ負担します。支援対象者が交付要件を満たした場合に一括支援されます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kagawa.lg.jp/chiiki/daigakurennkei/kagawadehatarakou.html',
    sourceName: '香川県 かがわで働こう！奨学金返還支援制度',
    sourceUrls: [
      'https://www.pref.kagawa.lg.jp/chiiki/daigakurennkei/kagawadehatarakou.html'
    ],
    sourceNote: '香川県公式ページで制度概要、対象奨学金、支援対象者、募集開始予定、支援額、登録企業の通年受付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ehime-core-industry-scholarship-repayment',
    title: '愛媛県 中核産業人材確保のための奨学金返還支援制度',
    organization: '愛媛県',
    type: 'local',
    maxAmount: '最大117.6万円（年16.8万円・最大7年）',
    maxAmountNum: 118,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '愛媛県',
    tags: ['愛媛県', '奨学金返還支援', '中核産業', 'UIJターン'],
    eligibility: '愛媛県の登録企業へ正社員として就職し、助成対象者として認定を受けた大学生・大学院生または卒業修了後3年以内の既卒者が対象です。',
    targetOccupation: '愛媛県内登録企業へ就職する大学生等・既卒者',
    applicationPeriod: '学生向け一部募集は終了。既卒者・登録企業の募集状況は公式ページで確認',
    description: '愛媛県内産業を支える中核人材の県内定着とUIJターン就職を促進するため、県と登録企業が基金を通じて奨学金返還を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>愛媛県中核産業人材確保のための奨学金返還支援制度は、県内産業を支える中核人材となる大学生等が、登録企業に就職した場合に奨学金返還を助成する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>大学生・大学院生と、大学等を卒業・修了してから3年以内の既卒者が対象です。日本学生支援機構第一種または第二種奨学金の貸与を受け、登録企業に正社員として採用されることなどが要件です。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>1年間の奨学金返還実績ごとに、年間返還額の3分の2または16.8万円のいずれか低い額が助成されます。助成期間は最大7年間で、愛媛県と登録企業が2分の1ずつ支援します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ehime.jp/page/5700.html',
    sourceName: '愛媛県 中核産業人材確保のための奨学金返還支援制度',
    sourceUrls: [
      'https://www.pref.ehime.jp/page/5700.html'
    ],
    sourceNote: '愛媛県公式ページで制度概要、登録企業、助成対象者、交付要件、年16.8万円・最大7年の助成内容を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kochi-scholarship-repayment-support',
    title: '高知県 こうち奨学金返還支援事業',
    organization: '高知県',
    type: 'local',
    maxAmount: '最大180万円',
    maxAmountNum: 180,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '高知県',
    tags: ['高知県', '奨学金返還支援', '県内就職', '登録企業'],
    eligibility: '大学等を卒業予定の学生、または支援対象者事前登録時点で高知県外に居住する35歳以下の既卒者で、登録企業等へ正規雇用で就職し県内居住を希望する人が対象です。',
    targetOccupation: '高知県内登録企業等へ就職予定の学生・既卒者',
    applicationPeriod: '支援対象者の事前登録・登録企業の各種募集情報は公式ページで確認',
    description: '高知県内企業等への就職と定着を促進するため、県と企業等が協働して奨学金返還額の一部を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>こうち奨学金返還支援事業は、若者の県内企業等への就職と定着を促進し、将来の高知県産業を担う人材を支援するため、企業等とともに奨学金返還を支援する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>大学、大学院、短大、高等専門学校、専修学校専門課程を卒業予定の学生、または高知県外に居住する35歳以下の既卒者が対象です。登録企業等へ正規雇用で就職し、就職後6年間の就業と県内居住を希望することが要件です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>前年度の奨学金返還実績額の3分の2、または学校種別ごとの年間支援限度額のいずれか低い額を支援します。大学院・6年制大学は年30万円、6年間で最大180万円が上限です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kochi.lg.jp/doc/2024031400644/',
    sourceName: '高知県 こうち奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.kochi.lg.jp/doc/2024031400644/'
    ],
    sourceNote: '高知県公式ページで制度趣旨、支援対象者、対象奨学金、支援額、最大6年間、大学院・6年制大学最大180万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuoka-high-school-scholarship-benefit',
    title: '福岡県 高校生等奨学給付金',
    organization: '福岡県',
    type: 'local',
    maxAmount: '年14万3,700円',
    maxAmountNum: 14,
    category: 'education',
    prefecture: '福岡県',
    tags: ['福岡県', '高校生等奨学給付金', '返済不要', '非課税世帯'],
    eligibility: '保護者が福岡県内に住所を有し、高校生等が高等学校等に在学する生活保護受給世帯または非課税世帯等が対象です。家計急変世帯も対象となる場合があります。',
    targetOccupation: '高校生等がいる低所得世帯',
    applicationPeriod: '通常分は学校からの案内に従って申請。家計急変分は随時受付',
    description: '福岡県が、非課税世帯等の高校生等を対象に、授業料以外の教育費を支援する返済不要の給付金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡県高校生等奨学給付金は、全ての高校生等が安心して教育を受けられるよう、非課税世帯等を対象に授業料以外の教育費を支援する返済不要の給付金です。</p>'
      },
      {
        heading: '対象世帯',
        content: '<p>生活保護の生業扶助受給世帯、道府県民税所得割額および市町村民税所得割額が非課税の世帯、家計急変により非課税相当となる世帯などが対象です。保護者が福岡県内に住所を有することも要件です。</p>'
      },
      {
        heading: '支給額',
        content: '<p>令和7年度の国公立全日制・定時制課程では、非課税世帯に年14万3,700円が支給されます。通信制課程や専攻科、生活保護世帯では別の支給額が設定されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukuoka.lg.jp/site/kyouiku/syougakukyuuhukin.html',
    sourceName: '福岡県 高校生等奨学給付金制度',
    sourceUrls: [
      'https://www.pref.fukuoka.lg.jp/site/kyouiku/syougakukyuuhukin.html'
    ],
    sourceNote: '福岡県教育委員会公式ページで制度概要、返済不要、対象世帯、支給額、家計急変分の随時受付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-high-school-scholarship-benefit',
    title: '佐賀県 高校生等奨学給付金',
    organization: '佐賀県',
    type: 'local',
    maxAmount: '年15万2,000円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '佐賀県',
    tags: ['佐賀県', '高校生等奨学給付金', '返還不要', '非課税世帯'],
    eligibility: '保護者等が佐賀県内に住所を有し、高校生等が高等学校就学支援金を受ける資格を有する非課税世帯等が対象です。家計急変世帯も対象となる場合があります。',
    targetOccupation: '高校生等がいる低所得世帯',
    applicationPeriod: '令和8年度は制度改正予定。確定後に公式ページで案内',
    description: '佐賀県が、高校生等の授業料以外の教育費負担を軽減するため、非課税世帯等へ返還不要の奨学給付金を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀県高校生等奨学給付金は、教科書費、教材費、学用品費、通学用品費、修学旅行費など、授業料以外の教育費負担を軽減するための返還不要の給付金です。</p>'
      },
      {
        heading: '対象世帯',
        content: '<p>通常支給は7月1日時点で、保護者等が佐賀県内に住所を有し、県民税・市町村民税所得割額が非課税の世帯などが対象です。新入生の前倒し支給や家計急変世帯への支給も案内されています。</p>'
      },
      {
        heading: '給付額',
        content: '<p>令和7年度の年額は、非課税世帯の全日制・定時制で国公立14万3,700円、私立15万2,000円です。通信制や専攻科、生活保護世帯では別の給付額が設定されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.saga.lg.jp/kyouiku/kiji00332377/index.html',
    sourceName: '佐賀県 高校生等奨学給付金のご案内',
    sourceUrls: [
      'https://www.pref.saga.lg.jp/kyouiku/kiji00332377/index.html'
    ],
    sourceNote: '佐賀県教育委員会公式ページで返還不要、対象世帯、令和7年度給付額、令和8年度制度改正予定を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-pharmacist-scholarship-repayment',
    title: '長崎県 薬剤師奨学金返還支援制度',
    organization: '長崎県',
    type: 'local',
    maxAmount: '最大180万円',
    maxAmountNum: 180,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '長崎県',
    tags: ['長崎県', '奨学金返還支援', '薬剤師', '病院薬剤師'],
    eligibility: '薬学5年生・6年生、大学院生または既卒者で、長崎県内の対象病院に就業を希望する人または既に就職している人が対象です。令和8年度募集は終了しています。',
    targetOccupation: '長崎県内対象病院で働く薬学生・薬剤師',
    applicationPeriod: '令和8年度支援対象者募集は2026年1月20日から2026年3月31日まで',
    deadlineDate: '2026-03-31',
    description: '長崎県内の対象病院に就職し一定期間勤務する薬剤師を対象に、奨学金返還額の一部を補助する制度です。令和8年度募集は終了しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎県薬剤師奨学金返還支援制度は、県内の対象病院に就職し一定期間勤務する薬剤師に対し、奨学金返還額の一部を補助することで、県内への薬剤師の就職促進と定着を図る制度です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>交付対象期間中に支払った奨学金返還額が対象で、年額上限は36万円、総額上限は180万円です。支援期間は最大5年間です。</p>'
      },
      {
        heading: '募集状況',
        content: '<p>令和8年度支援対象者の申請期間は2026年1月20日から3月31日までで、募集人数は5人と案内されています。現在は受付終了済みの公式確認済み履歴として扱います。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nagasaki.jp/doc/page-770013.html',
    sourceName: '長崎県 薬剤師奨学金返還支援制度',
    sourceUrls: [
      'https://www.pref.nagasaki.jp/doc/page-770013.html'
    ],
    sourceNote: '長崎県公式ページで令和8年度募集期間、対象者、補助額年36万円・総額180万円、募集人数5人を確認。期限到来済みのため期限切れとして登録。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kumamoto-kumakatsu-scholarship-repayment',
    title: '熊本県 くま活サポート奨学金返還等サポート制度',
    organization: '熊本県',
    type: 'local',
    maxAmount: '最大456万円',
    maxAmountNum: 456,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '熊本県',
    tags: ['熊本県', '奨学金返還支援', '県内就職', '登録企業'],
    eligibility: '熊本県内企業等に就職する予定の大学生等や既卒者で、日本学生支援機構等の奨学金を利用している人が対象です。',
    targetOccupation: '熊本県内登録企業等へ就職予定の学生・既卒者',
    applicationPeriod: '参加登録受付中。詳細な締切は公式サイトで確認',
    description: '熊本県内企業等への就職を促進するため、県と参加企業等が協力して奨学金返還や赴任費用等を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>くま活サポート奨学金返還等サポート制度は、熊本県内企業等への就職を予定する若者に対し、奨学金返還や赴任費用などを県と参加企業等が連携して支援する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>大学、大学院、短期大学、高等専門学校、専修学校等の学生や既卒者で、熊本県内の参加企業等への就職を希望する人が対象です。対象となる奨学金や申請時期は公式サイトで案内されています。</p>'
      },
      {
        heading: '支援額',
        content: '<p>支援額は企業等が設定する支援額と県の補助を合わせて決まり、最大456万円の支援例が案内されています。実際の支援内容は参加企業等によって異なります。</p>'
      }
    ],
    officialUrl: 'https://www.kumakatsusupport.pref.kumamoto.jp/list00001.html',
    sourceName: '熊本県 くま活サポート',
    sourceUrls: [
      'https://www.kumakatsusupport.pref.kumamoto.jp/list00001.html'
    ],
    sourceNote: '熊本県公式専用サイトで制度概要、対象者、県内企業等への就職支援、奨学金返還等サポート、最大456万円の支援例を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-hospital-pharmacist-scholarship-repayment',
    title: '大分県 病院薬剤師奨学金返還支援事業',
    organization: '大分県',
    type: 'local',
    maxAmount: '年80万円・最長6年',
    maxAmountNum: 480,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '大分県',
    tags: ['大分県', '奨学金返還支援', '病院薬剤師', '医療人材'],
    eligibility: '薬剤師として勤務するための奨学金を返還しており、大分県内の対象病院に就業または就業予定の薬剤師等が対象です。',
    targetOccupation: '大分県内対象病院で勤務する薬剤師等',
    applicationPeriod: '令和8年度の募集要領・申請期間は公式ページで確認',
    description: '大分県内の病院薬剤師確保を目的に、対象病院で勤務する薬剤師等の奨学金返還を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分県病院薬剤師奨学金返還支援事業は、県内病院における薬剤師の確保と定着を目的に、対象病院で勤務する薬剤師等の奨学金返還を支援する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>薬学部卒業後に大分県内の対象病院で薬剤師として勤務する人などが対象です。対象病院、支援対象者、申請書類は公式ページで募集要領として案内されています。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>新たに県内の対象病院に就職した薬剤師の奨学金返還額の一部を補助します。公式ページでは、支援額は年80万円を上限、期間は最長6年間、対象は年15人と案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.oita.jp/soshiki/12610/yakuzaishikakuho.html',
    sourceName: '大分県 病院薬剤師奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.oita.jp/soshiki/12610/yakuzaishikakuho.html'
    ],
    sourceNote: '大分県公式ページで病院薬剤師奨学金返還支援事業、対象病院、支援額年80万円上限、最長6年、年15人を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyazaki-hinata-scholarship-repayment',
    title: '宮崎県 ひなた創生のための奨学金返還支援事業',
    organization: '宮崎県',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '宮崎県',
    tags: ['宮崎県', '奨学金返還支援', '県内就職', '産業人材'],
    eligibility: '宮崎県内企業等に就職予定の大学生等で、対象奨学金を返還予定または返還中の人が対象です。',
    targetOccupation: '宮崎県内企業等へ就職予定の学生・既卒者',
    applicationPeriod: '令和8年度支援候補者の募集情報は公式ページで確認',
    description: '宮崎県内企業等への就職と若者の県内定着を促進するため、奨学金返還を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ひなた創生のための奨学金返還支援事業は、宮崎県内企業等へ就職する若者の奨学金返還を支援し、県内産業を担う人材の確保と定着を促進する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>対象奨学金を利用している学生や既卒者で、宮崎県内の対象企業等へ就職する意思がある人が支援候補者として募集されます。対象業種や登録企業は公式ページで案内されています。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>奨学金返還額の一部を支援する制度で、公式案内では最大150万円の支援が示されています。実際の支援額や交付要件は募集要領で確認が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.miyazaki.lg.jp/sangyoseisaku/shigoto/sangyo/hinatashien/20170509085527.html',
    sourceName: '宮崎県 ひなた創生のための奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.miyazaki.lg.jp/sangyoseisaku/shigoto/sangyo/hinatashien/20170509085527.html'
    ],
    sourceNote: '宮崎県公式ページでひなた創生のための奨学金返還支援事業、県内企業等への就職、支援候補者募集、最大150万円の支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-high-school-scholarship-benefit-2026',
    title: '鹿児島県 高校生等奨学給付金（令和8年度）',
    organization: '鹿児島県',
    type: 'local',
    maxAmount: '年14万3,700円',
    maxAmountNum: 14,
    category: 'education',
    prefecture: '鹿児島県',
    tags: ['鹿児島県', '高校生等奨学給付金', '返還不要', '低所得世帯'],
    eligibility: '保護者等が鹿児島県内に住所を有し、高校生等が高等学校等に在学している非課税世帯や生活保護世帯等が対象です。',
    targetOccupation: '高校生等がいる低所得世帯',
    applicationPeriod: '2026年7月1日から2026年8月31日まで',
    deadlineDate: '2026-08-31',
    description: '鹿児島県が、低所得世帯の高校生等を対象に、授業料以外の教育費を支援する返還不要の給付金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島県高校生等奨学給付金は、生活保護世帯や非課税世帯等の高校生等を対象に、授業料以外の教育費負担を軽減するために支給される返還不要の給付金です。</p>'
      },
      {
        heading: '対象世帯',
        content: '<p>保護者等が鹿児島県内に住所を有し、高校生等が高等学校等に在学している世帯が対象です。生活保護受給世帯、非課税世帯、家計急変世帯などの区分があります。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>令和8年度の申請期間は2026年7月1日から8月31日までです。学校を通じた申請や直接申請など、在学先により手続きが異なります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kagoshima.jp/ba05/shougakukyuhukin.html',
    sourceName: '鹿児島県 高校生等奨学給付金',
    sourceUrls: [
      'https://www.pref.kagoshima.jp/ba05/shougakukyuhukin.html'
    ],
    sourceNote: '鹿児島県公式ページで令和8年度高校生等奨学給付金、対象世帯、返還不要、申請期間2026年7月1日から8月31日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okinawa-scholarship-proxy-repayment-2026',
    title: '沖縄県 奨学金返還支援事業（代理返還）',
    organization: '沖縄県',
    type: 'local',
    maxAmount: '1人あたり年9万円',
    maxAmountNum: 27,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '沖縄県',
    tags: ['沖縄県', '奨学金返還支援', '代理返還', '中小企業'],
    eligibility: '沖縄県内の中小企業等が、従業員に対して日本学生支援機構奨学金の代理返還を行う場合に対象です。',
    targetOccupation: '沖縄県内中小企業等と奨学金を返還する従業員',
    applicationPeriod: '2026年5月15日から2027年1月29日まで',
    deadlineDate: '2027-01-29',
    description: '沖縄県内中小企業等による従業員の奨学金代理返還を支援し、若年人材の確保と定着を後押しする制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>沖縄県奨学金返還支援事業は、県内中小企業等が従業員の日本学生支援機構奨学金を代理返還する場合に、その一部を補助する制度です。</p>'
      },
      {
        heading: '対象企業',
        content: '<p>沖縄県内に本社または主たる事業所を有する中小企業等が対象です。従業員への奨学金代理返還制度を設け、要件を満たす返還を行う必要があります。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>補助率は2分の1で、支援対象者1人あたり年9万円が上限です。令和8年度の申請期間は2026年5月15日から2027年1月29日までと案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okinawa.jp/shigoto/keizai/1009879/1010143/1010156.html',
    sourceName: '沖縄県 奨学金返還支援事業',
    sourceUrls: [
      'https://www.pref.okinawa.jp/shigoto/keizai/1009879/1010143/1010156.html'
    ],
    sourceNote: '沖縄県公式ページで令和8年度募集、代理返還、対象企業、補助率2分の1、1人年9万円、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamagata-private-high-school-scholarship-benefit',
    title: '山形県 私立高等学校就学支援金制度',
    organization: '山形県',
    type: 'local',
    maxAmount: '授業料を所得区分に応じて支援',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '山形県',
    tags: ['山形県', '私立高校', '就学支援金', '授業料支援'],
    eligibility: '山形県内の私立高等学校等に在学し、就学支援金の受給資格を満たす生徒の保護者等が対象です。',
    targetOccupation: '私立高校生等がいる世帯',
    applicationPeriod: '原則入学時4月に申請。入学時以外も随時申請可能',
    description: '山形県が、私立高等学校等に在学する生徒の授業料負担を軽減するため、国の高等学校等就学支援金制度等を案内する制度ページです。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形県私立高等学校就学支援金制度は、私立高等学校等に在学する生徒の授業料負担を軽減するための支援制度です。山形県内の私立高校では原則オンライン申請が案内されています。</p>'
      },
      {
        heading: '申請手続き',
        content: '<p>就学支援金を受給するためには申請が必要です。原則として入学時の4月に申請し、入学時以外でも随時申請を希望する場合は学校の事務室へ連絡するよう案内されています。</p>'
      },
      {
        heading: '県独自支援',
        content: '<p>山形県独自の授業料軽減補助制度は別途手続きが必要で、学校の指示に従うよう公式ページで案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamagata.jp/020023/syuugakusienkin.html',
    sourceName: '山形県 私立高等学校就学支援金制度',
    sourceUrls: [
      'https://www.pref.yamagata.jp/020023/syuugakusienkin.html'
    ],
    sourceNote: '山形県公式ページで私立高等学校就学支援金制度、原則入学時4月の申請、随時申請、県独自授業料軽減補助の案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kanagawa-private-school-tuition-subsidy-2026',
    title: '神奈川県 私立高等学校等生徒学費補助金（令和8年度）',
    organization: '神奈川県',
    type: 'local',
    maxAmount: '授業料等を所得区分に応じて補助',
    maxAmountNum: 0,
    category: 'education',
    prefecture: '神奈川県',
    tags: ['神奈川県', '私立高校', '学費補助', '授業料補助'],
    eligibility: '神奈川県内在住で、県内外の私立高等学校等に在学する生徒の保護者等が対象です。所得要件や学校種等の条件があります。',
    targetOccupation: '私立高校生等がいる世帯',
    applicationPeriod: '令和8年度の申請受付・学校案内に従って申請',
    description: '神奈川県が、私立高等学校等に通う生徒の保護者負担を軽減するため、授業料等を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神奈川県私立高等学校等生徒学費補助金は、私立高等学校等に在学する生徒のいる世帯を対象に、授業料等の学費負担を軽減するための補助制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>神奈川県内に在住し、私立高等学校、中等教育学校後期課程、専修学校高等課程等に在学する生徒の保護者等が対象です。補助額は所得や学校種により異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>申請は原則として在学する学校を通じて行います。令和8年度の制度内容、申請書類、提出期限は神奈川県公式ページと学校からの案内で確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kanagawa.jp/docs/v3e/jyosei/gakuhisien/index.html',
    sourceName: '神奈川県 私立高等学校等生徒学費補助金',
    sourceUrls: [
      'https://www.pref.kanagawa.jp/docs/v3e/jyosei/gakuhisien/index.html'
    ],
    sourceNote: '神奈川県公式ページで私立高等学校等生徒学費補助金、対象者、申請方法、令和8年度案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'osaka-private-high-school-scholarship-benefit-2026',
    title: '大阪府 私立高校生等奨学給付金（令和8年度）',
    organization: '大阪府',
    type: 'local',
    maxAmount: '年15万2,000円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '大阪府',
    tags: ['大阪府', '私立高校', '奨学給付金', '返済不要'],
    eligibility: '大阪府内に保護者等が在住し、私立高等学校等に在学する高校生等がいる生活保護受給世帯または非課税世帯等が対象です。',
    targetOccupation: '私立高校生等がいる低所得世帯',
    applicationPeriod: '令和8年度申請は在学する学校または大阪府の案内に従って手続き',
    description: '大阪府が、私立高校生等の授業料以外の教育費負担を軽減するために支給する返済不要の奨学給付金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪府私立高校生等奨学給付金は、低所得世帯の私立高校生等を対象に、授業料以外の教育費を支援する返済不要の給付金です。</p>'
      },
      {
        heading: '対象世帯',
        content: '<p>生活保護受給世帯、道府県民税所得割額および市町村民税所得割額が非課税の世帯などが対象です。保護者等が大阪府内に住所を有することなどの要件があります。</p>'
      },
      {
        heading: '給付額',
        content: '<p>世帯区分や課程により支給額が異なります。私立の全日制・定時制の非課税世帯では、年15万2,000円が支給額として案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.osaka.lg.jp/o180160/shigaku/shigakumushouka/syougaku_kyuuhu.html',
    sourceName: '大阪府 私立高校生等奨学給付金',
    sourceUrls: [
      'https://www.pref.osaka.lg.jp/o180160/shigaku/shigakumushouka/syougaku_kyuuhu.html'
    ],
    sourceNote: '大阪府公式ページで私立高校生等奨学給付金、返済不要、対象世帯、給付額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hyogo-private-high-school-scholarship-benefit-2026',
    title: '兵庫県 私立高校生等奨学給付金（令和8年度）',
    organization: '兵庫県',
    type: 'local',
    maxAmount: '年15万2,000円',
    maxAmountNum: 15,
    category: 'education',
    prefecture: '兵庫県',
    tags: ['兵庫県', '私立高校', '奨学給付金', '返済不要'],
    eligibility: '保護者等が兵庫県内に住所を有し、私立高等学校等に在学する高校生等がいる生活保護受給世帯または非課税世帯等が対象です。',
    targetOccupation: '私立高校生等がいる低所得世帯',
    applicationPeriod: '令和8年度の申請受付・提出期限は公式ページで確認',
    description: '兵庫県が、私立高校生等の授業料以外の教育費を支援するため、低所得世帯等へ返済不要で支給する給付金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>兵庫県私立高校生等奨学給付金は、低所得世帯等に対し、私立高等学校等に在学する高校生等の授業料以外の教育費負担を軽減するために支給される返済不要の給付金です。</p>'
      },
      {
        heading: '対象世帯',
        content: '<p>生活保護受給世帯、県民税所得割額および市町民税所得割額が非課税の世帯などが対象です。保護者等が兵庫県内に住所を有することなどの条件があります。</p>'
      },
      {
        heading: '給付額',
        content: '<p>令和8年度の給付額は世帯区分や学校種で異なります。私立全日制・定時制の非課税世帯では年15万2,000円が案内されています。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/kk35/r8syogakukyuhukin1.html',
    sourceName: '兵庫県 私立高校生等奨学給付金',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/kk35/r8syogakukyuhukin1.html'
    ],
    sourceNote: '兵庫県公式ページで令和8年度私立高校生等奨学給付金、返済不要、対象世帯、給付額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-scholarship-repayment-assist-2026',
    title: '長崎県 産業人材育成奨学金返済アシスト事業',
    organization: '長崎県',
    type: 'local',
    maxAmount: '最大150万円',
    maxAmountNum: 150,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '長崎県',
    tags: ['長崎県', '奨学金返還支援', '県内就職', '産業人材'],
    eligibility: '大学・大学院・短大・高専・専修学校等に在籍する学生または既卒者で、長崎県内対象業種への就職を希望する人が対象です。',
    targetOccupation: '長崎県内対象業種へ就職予定の学生・既卒者',
    applicationPeriod: '2026年4月1日から2027年2月26日まで',
    deadlineDate: '2027-02-26',
    description: '長崎県内産業を担う人材の確保と県内定着を目的に、対象業種へ就職する若者の奨学金返済を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎県産業人材育成奨学金返済アシスト事業は、県内産業を支える人材の確保と定着を目的に、対象業種へ就職する若者の奨学金返済を支援する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>大学、大学院、短大、高等専門学校、専修学校等に在籍する学生や既卒者で、長崎県内の対象業種に就職する意思がある人が対象です。日本学生支援機構などの奨学金を利用していることが要件になります。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>奨学金返済額の一部を支援し、最大150万円まで支援されます。令和8年度募集は2026年4月1日から2027年2月26日までです。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nagasaki.jp/bunrui/shigoto-sangyo/koyo-rodo/shushokushien/assist/kouhosya/44991.html',
    sourceName: '長崎県 産業人材育成奨学金返済アシスト事業',
    sourceUrls: [
      'https://www.pref.nagasaki.jp/bunrui/shigoto-sangyo/koyo-rodo/shushokushien/assist/kouhosya/44991.html'
    ],
    sourceNote: '長崎県公式ページで令和8年度募集、申請期間2026年4月1日から2027年2月26日、対象者、県内対象業種への就職、最大150万円の支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aomori-a-wood-housing-subsidy',
    title: '青森県 A-wood需要拡大事業',
    organization: '青森県',
    type: 'local',
    maxAmount: '1棟最大50万円（1事業者最大150万円）',
    maxAmountNum: 150,
    category: 'housing',
    prefecture: '青森県',
    tags: ['青森県', '県産材', '住宅新築', 'リフォーム', '木質化'],
    eligibility: '青森県内に事業所を有し、青森県「A-wood」事業者登録を受け、自ら施工する建築物で県産材を使用する建設業者等が対象です。',
    targetOccupation: '青森県内の建築工事業者・大工工事業者',
    applicationPeriod: '2026年6月19日から2026年12月28日まで',
    deadlineDate: '2026-12-28',
    description: '青森県産材を使った建築物の新築、リフォーム、内外装木質化等を行う施工者に対し、県産材の使用量に応じて補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森県A-wood需要拡大事業は、県産材を継続的に使用する県内企業を増やし、県産材の安定需要確保と地域経済の活性化、森林の循環利用を図るための補助制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>建築物の新築工事、リフォーム、増築、改築、修繕、模様替、内装・外装木質化工事、建築物工事を伴う外構工事で県産材を使用する経費が対象です。施工地は青森県内である必要があります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>県産材の使用量1立方メートルにつき5万円を補助します。上限は1棟あたり50万円、1事業者あたり150万円です。申込受付期間は2026年6月19日から12月28日までです。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aomori.lg.jp/soshiki/nourin/rinsei/A-wood_moushikomi.html',
    sourceName: '青森県 令和8年度「A-wood」需要拡大事業',
    sourceUrls: [
      'https://www.pref.aomori.lg.jp/soshiki/nourin/rinsei/A-wood_moushikomi.html'
    ],
    sourceNote: '青森県公式ページで令和8年度募集、対象者、対象工事、県産材1立方メートル5万円、1棟50万円・1事業者150万円上限、申込期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamagata-energy-saving-healthy-housing',
    title: '山形県 やまがた省エネ健康住宅新築支援事業費補助金',
    organization: '山形県',
    type: 'local',
    maxAmount: '50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '山形県',
    tags: ['山形県', '省エネ住宅', '新築住宅', '県産木材', 'やまぽっかの家'],
    eligibility: '山形県内に自ら居住するため、やまぽっかの家認証を受けた住宅を新築または購入する所得1200万円以下の人が対象です。',
    targetOccupation: '山形県内で省エネ住宅を新築・購入する個人',
    applicationPeriod: '第1期 2026年4月6日から7月3日、第2期 2026年8月17日から11月13日まで',
    deadlineDate: '2026-11-13',
    description: '山形県産木材を一定量使用し、高気密・高断熱住宅である「やまぽっかの家」を新築する人に定額50万円を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>やまがた省エネ健康住宅新築支援事業費補助金は、県産木材を活用した高気密・高断熱住宅「やまぽっかの家」の新築を支援する山形県の住宅取得支援制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>「やまぽっかの家」の認証を受け、県内事業者により施工され、令和8年2月28日から令和9年2月26日までに認定証交付、工事完了、引渡しが行われる住宅が対象です。県産木材の使用要件もあります。</p>'
      },
      {
        heading: '補助額と募集',
        content: '<p>補助額は50万円の定額です。令和8年度は260戸を募集し、第1期と第2期の先着順で受け付けます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamagata.jp/tatekkana/support/shien/rishihokyu-shinchiku.html',
    sourceName: '山形県 やまがた省エネ健康住宅新築支援事業費補助金',
    sourceUrls: [
      'https://www.pref.yamagata.jp/tatekkana/support/shien/rishihokyu-shinchiku.html'
    ],
    sourceNote: '山形県公式すまい情報センターで支援内容、補助額50万円、対象住宅、対象者、令和8年度申込期間、募集戸数260戸を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukushima-wooden-house-earthquake-retrofit',
    title: '福島県 木造住宅等耐震化支援事業',
    organization: '福島県',
    type: 'local',
    maxAmount: '最大140万円（多雪地域の一般改修・現地建替）',
    maxAmountNum: 140,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '福島県',
    tags: ['福島県', '木造住宅', '耐震改修', 'リフォーム', 'ブロック塀'],
    eligibility: '昭和56年5月31日以前に着工した3階建て以下の木造住宅など、市町村ごとの要件を満たす住宅の所有者等が対象です。',
    targetOccupation: '福島県内の木造住宅所有者等',
    applicationPeriod: '申請窓口・受付期間は市町村により異なるため公式ページの市町村一覧で確認',
    description: '福島県が市町村と連携し、昭和56年以前に建てられた木造住宅の耐震診断、耐震改修、リフォーム工事等を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島県木造住宅等耐震化支援事業は、地震による被害を軽減し、県民生活の安全性を確保するため、市町村と連携して木造住宅の耐震化を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>耐震診断、一般改修、部分改修、簡易改修、現地建替、耐震化工事と併せて行うリフォーム工事、引越、ブロック塀等耐震化などが案内されています。補助内容は市町村により異なります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>一般改修・現地建替は工事費の5分の4かつ最大115万円、多雪地域では最大140万円です。耐震化と併せて行うリフォーム工事は工事費の2分の1かつ最大20万円が上限です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukushima.lg.jp/sec/41065b/mokuzoutaisinkasiennjigyou.html',
    sourceName: '福島県 木造住宅等耐震化支援事業',
    sourceUrls: [
      'https://www.pref.fukushima.lg.jp/sec/41065b/mokuzoutaisinkasiennjigyou.html'
    ],
    sourceNote: '福島県公式ページで令和8年4月更新、昭和56年以前の木造住宅、耐震診断・耐震改修・リフォーム工事、補助上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tochigi-childcare-house-insulation',
    title: '栃木県 子育て世帯等住宅断熱化支援事業',
    organization: '栃木県',
    type: 'local',
    maxAmount: '新築30万円・断熱改修10万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '栃木県',
    tags: ['栃木県', '住宅断熱化', '子育て世帯', '若年夫婦世帯', '省エネ住宅'],
    eligibility: '国補助金を活用し、栃木県内でZEH水準以上の新築住宅取得または既存住宅の断熱化を行う子育て世帯等が対象です。',
    targetOccupation: '栃木県内の子育て世帯・若年夫婦世帯等',
    applicationPeriod: '2026年5月18日から2027年1月29日まで',
    deadlineDate: '2027-01-29',
    description: '栃木県が、子育て世帯や若年夫婦世帯等による新築住宅取得や既存住宅の断熱改修を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>栃木県子育て世帯等住宅断熱化支援事業は、子育て世帯等の住宅の省エネルギー化を支援するため、ZEH水準以上の新築住宅取得や既存住宅の断熱化を補助する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>子育て世帯または若年夫婦世帯が対象です。自己居住目的の住宅取得のほか、子育て世帯等への賃貸に供する目的の新築・断熱化なども対象として案内されています。</p>'
      },
      {
        heading: '補助額',
        content: '<p>ZEH水準を満たす新築住宅は1戸あたり定額30万円、既存住宅の断熱改修は1戸あたり上限10万円です。申請期間は2026年5月18日から2027年1月29日までですが、予算額に達した場合は終了します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tochigi.lg.jp/d02/kouhou/r7kosodatesienn.html',
    sourceName: '栃木県 子育て世帯等住宅断熱化支援事業',
    sourceUrls: [
      'https://www.pref.tochigi.lg.jp/d02/kouhou/r7kosodatesienn.html'
    ],
    sourceNote: '栃木県公式ページで令和8年度申請、申請期間、対象者、国補助金活用要件、新築30万円・断熱改修10万円の補助額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gunma-zero-declaration-housing',
    title: '群馬県 ぐんまゼロ宣言住宅促進事業費補助金',
    organization: '群馬県',
    type: 'local',
    maxAmount: '子育て世帯5万円・県産木材12,500円/立方メートル',
    maxAmountNum: 5,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '群馬県',
    tags: ['群馬県', '省エネ住宅', '新築住宅', '子育て世帯', 'ゼロ宣言住宅'],
    eligibility: '群馬県内で、ぐんまゼロ宣言住宅として認定される住宅を新築または取得する個人等が対象です。',
    targetOccupation: '群馬県内で省エネ住宅を新築・取得する個人',
    applicationPeriod: '2026年4月1日から受付開始。予算に達し次第終了',
    description: '群馬県が、災害に強く、健康で快適に暮らせる省エネ住宅「ぐんまゼロ宣言住宅」の普及を促進するために補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ぐんまゼロ宣言住宅促進事業費補助金は、住宅分野の脱炭素化や災害時のレジリエンス向上を目的に、群馬県が定める「ぐんまゼロ宣言住宅」の新築・取得を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>群馬県内に建築され、県の基準を満たすぐんまゼロ宣言住宅が対象です。省エネ性能や再生可能エネルギー設備などの要件は公式ページの認定制度・補助要綱で確認します。</p>'
      },
      {
        heading: '補助額',
        content: '<p>供給事業では県産木材の使用量1立方メートルあたり12,500円、子育て世帯支援では1世帯・1戸あたり5万円が補助されます。令和8年度は2026年4月1日から受付開始で、予算に達し次第終了します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.gunma.jp/site/hojokin/198891.html',
    sourceName: '群馬県 ぐんまゼロ宣言住宅促進事業費補助金',
    sourceUrls: [
      'https://www.pref.gunma.jp/site/hojokin/198891.html'
    ],
    sourceNote: '群馬県公式ページで令和8年度募集、供給事業・子育て世帯支援、県産木材12,500円/立方メートル、子育て世帯5万円、受付開始日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saitama-window-insulation-reform',
    title: '埼玉県 住宅における断熱窓改修促進補助金',
    organization: '埼玉県',
    type: 'local',
    maxAmount: '断熱窓改修費用の一部',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['埼玉県', '断熱窓', '省エネ改修', '住宅リフォーム', '窓改修'],
    eligibility: '埼玉県内の住宅で、国の断熱窓改修補助を活用して窓の断熱改修を行う個人等が対象です。',
    targetOccupation: '埼玉県内住宅の所有者・居住者等',
    applicationPeriod: '2026年5月18日から受付開始。予算に達し次第終了',
    description: '埼玉県が、住宅の省エネ化と冷暖房負荷の低減を目的に、断熱窓改修を行う人へ国補助に上乗せして支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>埼玉県住宅における断熱窓改修促進補助金は、家庭部門の省エネルギー化を進めるため、既存住宅の窓の断熱改修を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>既存住宅の窓を断熱性能の高い窓へ改修する工事が対象です。国の断熱窓改修補助の活用など、公式ページで定められた要件を満たす必要があります。</p>'
      },
      {
        heading: '申請受付',
        content: '<p>令和8年度は2026年5月18日から受付開始と案内されています。補助額、申請書類、受付状況は埼玉県公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.saitama.lg.jp/a1107/reform/windowreform.html',
    sourceName: '埼玉県 住宅における断熱窓改修促進補助金',
    sourceUrls: [
      'https://www.pref.saitama.lg.jp/a1107/reform/windowreform.html'
    ],
    sourceNote: '埼玉県公式ページで令和8年度受付開始、住宅の断熱窓改修、国補助活用、予算到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiba-zeh-housing-promotion-2026',
    title: '千葉県 住宅用設備等脱炭素化促進事業補助金（ZEH）',
    organization: '千葉県',
    type: 'local',
    maxAmount: '100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['千葉県', 'ZEH', '住宅用設備', '脱炭素', '省エネ住宅'],
    eligibility: '千葉県内の住宅で、ZEHや太陽光発電設備、蓄電池等の住宅用設備を導入する市町村補助の対象者が対象です。',
    targetOccupation: '千葉県内で省エネ住宅設備を導入する個人',
    applicationPeriod: '市町村ごとの受付期間に従って申請',
    description: '千葉県が市町村を通じて、ZEHや住宅用太陽光発電設備、蓄電池等の脱炭素化設備導入を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>千葉県住宅用設備等脱炭素化促進事業補助金は、家庭部門の脱炭素化を進めるため、市町村を通じて住宅用設備やZEH導入を支援する制度です。</p>'
      },
      {
        heading: '対象設備',
        content: '<p>太陽光発電設備、家庭用燃料電池、蓄電池、窓の断熱改修、電気自動車関連設備、ZEHなどが市町村補助の対象として案内されています。</p>'
      },
      {
        heading: 'ZEH補助額',
        content: '<p>ZEHは県補助額として1戸あたり100万円が示されています。実際の申請は市町村を通じて行うため、受付状況や追加要件は居住地の市町村で確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.chiba.lg.jp/shigen/chikyuukankyou/ne/shien-ippan.html',
    sourceName: '千葉県 住宅用設備等脱炭素化促進事業補助金',
    sourceUrls: [
      'https://www.pref.chiba.lg.jp/shigen/chikyuukankyou/ne/shien-ippan.html'
    ],
    sourceNote: '千葉県公式ページで市町村を通じた住宅用設備等脱炭素化促進事業、ZEH、対象設備、ZEH補助額100万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kanagawa-existing-house-energy-renovation',
    title: '神奈川県 既存住宅省エネ改修事業費補助金',
    organization: '神奈川県',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '神奈川県',
    tags: ['神奈川県', '省エネ改修', '窓断熱', 'リフォーム', '既存住宅'],
    eligibility: '神奈川県内の既存住宅で、一定の省エネ性能向上を伴う窓改修等を行う住宅所有者等が対象です。',
    targetOccupation: '神奈川県内の既存住宅所有者等',
    applicationPeriod: '2026年4月25日から2027年2月27日まで',
    deadlineDate: '2027-02-27',
    description: '神奈川県が、既存住宅の省エネルギー化を促進するため、窓断熱等の省エネ改修工事費の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神奈川県既存住宅省エネ改修事業費補助金は、家庭部門の脱炭素化を進めるため、既存住宅の省エネ改修を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>窓などの開口部改修を含む省エネ改修工事が対象です。対象となる工事や製品、補助対象経費は公式ページの募集案内で確認します。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助率は補助対象経費の3分の1で、上限は1戸あたり40万円です。令和8年度の受付期間は2026年4月25日から2027年2月27日までです。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kanagawa.jp/docs/ap4/cnt/f300183/shouenekaishu.html',
    sourceName: '神奈川県 既存住宅省エネ改修事業費補助金',
    sourceUrls: [
      'https://www.pref.kanagawa.jp/docs/ap4/cnt/f300183/shouenekaishu.html'
    ],
    sourceNote: '神奈川県公式ページで令和8年度募集、既存住宅省エネ改修、補助率3分の1、上限40万円、受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'niigata-snow-country-zeh-2026',
    title: '新潟県 雪国型ZEH等導入促進補助金',
    organization: '新潟県',
    type: 'local',
    maxAmount: '最大70万円',
    maxAmountNum: 70,
    category: 'housing',
    prefecture: '新潟県',
    tags: ['新潟県', '雪国型ZEH', '省エネ住宅', '太陽光発電', '新築住宅'],
    eligibility: '新潟県内で雪国型ZEH等を新築・購入し、要件を満たす個人または事業者が対象です。',
    targetOccupation: '新潟県内で雪国型ZEH等を導入する個人・事業者',
    applicationPeriod: '2026年4月15日から2027年1月29日まで',
    deadlineDate: '2027-01-29',
    description: '新潟県が、断熱性能や省エネ性能に優れた雪国型ZEH等の導入を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟県雪国型ZEH等導入促進補助金は、家庭部門の脱炭素化を進めるため、雪国の気候に対応した高断熱・高気密な省エネ住宅の導入を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>新潟県が定める雪国型ZEH等の要件を満たす住宅が対象です。断熱性能、省エネ性能、再生可能エネルギー設備などの要件は公式ページの交付要綱で確認します。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額は対象区分に応じて設定され、上限は70万円です。申請期間は2026年4月15日から2027年1月29日までで、予算に達した場合は終了します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.niigata.lg.jp/sec/kankyoseisaku/0583945.html',
    sourceName: '新潟県 雪国型ZEH等導入促進補助金',
    sourceUrls: [
      'https://www.pref.niigata.lg.jp/sec/kankyoseisaku/0583945.html'
    ],
    sourceNote: '新潟県公式ページで令和8年度募集、雪国型ZEH等、補助上限70万円、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyama-high-performance-housing',
    title: '富山県 とやまの木で家づくり支援事業',
    organization: '富山県',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '富山県',
    tags: ['富山県', '県産材', '木造住宅', '住宅新築', 'リフォーム'],
    eligibility: '富山県産材を使用して県内に木造住宅を新築・増改築等する個人等が対象です。',
    targetOccupation: '富山県内で県産材住宅を建築する個人',
    applicationPeriod: '令和8年度の受付期間・予算状況は公式ページで確認',
    description: '富山県が、県産材の利用拡大と木造住宅の普及を目的に、県産材を使った住宅建築を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>とやまの木で家づくり支援事業は、富山県産材の利用促進と県内林業・木材産業の活性化を目的に、県産材を使った住宅づくりを支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>富山県内で建築され、一定量以上の県産材を使用する木造住宅が対象です。新築のほか、要件を満たす増改築等も対象として案内されています。</p>'
      },
      {
        heading: '補助額',
        content: '<p>県産材の使用量や住宅の条件に応じて補助され、公式ページでは最大40万円の支援が案内されています。申請条件や募集枠は年度ごとの案内を確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.toyama.jp/1603/sangyou/nourinsuisan/ringyou/kj00010322.html',
    sourceName: '富山県 とやまの木で家づくり支援事業',
    sourceUrls: [
      'https://www.pref.toyama.jp/1603/sangyou/nourinsuisan/ringyou/kj00010322.html'
    ],
    sourceNote: '富山県公式ページで県産材住宅支援、対象住宅、県産材利用、最大40万円の支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ishikawa-energy-saving-housing-2026',
    title: '羽咋市 住まいづくり奨励金',
    organization: '羽咋市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '石川県',
    tags: ['石川県', '羽咋市', '住宅取得', '定住促進', '新築住宅'],
    eligibility: '羽咋市内で住宅を新築・購入し、定住するなど公式要件を満たす人が対象です。',
    targetOccupation: '羽咋市内で住宅を取得する個人',
    applicationPeriod: '申請時期・必要書類は羽咋市公式ページで確認',
    description: '石川県羽咋市が、市内で住宅を取得して定住する人を対象に奨励金を交付する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>羽咋市住まいづくり奨励金は、市内で住宅を取得する人の定住を促進するため、新築住宅や中古住宅の取得に対して奨励金を交付する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>羽咋市内で取得する住宅が対象です。新築、建売、中古住宅などの区分や、定住要件、申請期限、世帯要件は公式ページで確認します。</p>'
      },
      {
        heading: '補助額',
        content: '<p>奨励金は対象区分に応じて交付され、公式ページでは最大50万円の支援が案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.hakui.lg.jp/soshiki/sangyoukensetsubu/chiikiseibika/9/9/2/16354.html',
    sourceName: '羽咋市 住まいづくり奨励金',
    sourceUrls: [
      'https://www.city.hakui.lg.jp/soshiki/sangyoukensetsubu/chiikiseibika/9/9/2/16354.html'
    ],
    sourceNote: '羽咋市公式ページで住まいづくり奨励金、住宅取得、定住促進、最大50万円の支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukui-eco-happiness-housing',
    title: '福井県 ふくいの住まい支援事業',
    organization: '福井県',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    prefecture: '福井県',
    tags: ['福井県', '省エネ住宅', '子育て世帯', '移住定住', '住宅取得'],
    eligibility: '福井県内で省エネ性能等の要件を満たす住宅を取得・改修する子育て世帯、移住者、若年夫婦世帯等が対象です。',
    targetOccupation: '福井県内で住宅取得・改修を行う子育て世帯等',
    applicationPeriod: '令和8年度の申請受付・予算状況は公式ページで確認',
    description: '福井県が、子育て世帯や移住者等の住まい確保と省エネ住宅の普及を支援する住宅補助制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福井県ふくいの住まい支援事業は、子育て世帯や移住者等の定住促進と良質な住宅ストック形成を目的に、住宅の取得や改修を支援する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>子育て世帯、若年夫婦世帯、移住者など、公式ページで定める要件を満たす人が対象です。住宅の性能や所在地、居住要件なども確認が必要です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>住宅取得や改修の区分に応じて補助され、公式ページでは最大60万円の支援が案内されています。申請窓口や受付状況は市町を通じて確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukui.lg.jp/doc/kenchikujyuutakuka/sumaishienseido.html',
    sourceName: '福井県 ふくいの住まい支援事業',
    sourceUrls: [
      'https://www.pref.fukui.lg.jp/doc/kenchikujyuutakuka/sumaishienseido.html'
    ],
    sourceNote: '福井県公式ページでふくいの住まい支援事業、子育て世帯等、住宅取得・改修支援、最大60万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamanashi-wooden-house-earthquake-retrofit',
    title: '山梨県 木造住宅耐震改修等事業',
    organization: '山梨県',
    type: 'local',
    maxAmount: '最大125万円',
    maxAmountNum: 125,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '山梨県',
    tags: ['山梨県', '木造住宅', '耐震改修', '住宅リフォーム', '耐震診断'],
    eligibility: '昭和56年5月31日以前に着工された木造住宅など、山梨県内の市町村が定める要件を満たす住宅所有者等が対象です。',
    targetOccupation: '山梨県内の木造住宅所有者等',
    applicationPeriod: '申請窓口・受付期間は市町村により異なるため公式ページで確認',
    description: '山梨県が市町村と連携し、旧耐震基準の木造住宅の耐震診断や耐震改修を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山梨県木造住宅耐震改修等事業は、地震による住宅被害を軽減するため、旧耐震基準の木造住宅の耐震診断や耐震改修を市町村と連携して支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>昭和56年5月31日以前に着工された木造住宅など、耐震性に課題がある住宅が対象です。対象要件や申請窓口は市町村ごとに異なります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>耐震改修工事等の補助額は市町村の制度により異なり、県公式ページでは最大125万円の補助が案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamanashi.jp/kenchikujutaku/70278497022.html',
    sourceName: '山梨県 木造住宅耐震改修等事業',
    sourceUrls: [
      'https://www.pref.yamanashi.jp/kenchikujutaku/70278497022.html'
    ],
    sourceNote: '山梨県公式ページで木造住宅耐震診断・耐震改修支援、旧耐震基準住宅、市町村窓口、補助上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagano-healthy-zero-energy-housing',
    title: '長野県 信州健康ゼロエネ住宅助成金',
    organization: '長野県',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'housing',
    prefecture: '長野県',
    tags: ['長野県', '信州健康ゼロエネ住宅', '省エネ住宅', '新築住宅', '断熱改修'],
    eligibility: '長野県内で信州健康ゼロエネ住宅の基準を満たす住宅を新築またはリフォームする個人等が対象です。',
    targetOccupation: '長野県内で高性能住宅を新築・改修する個人',
    applicationPeriod: '2026年4月15日から2027年2月26日まで',
    deadlineDate: '2027-02-26',
    description: '長野県が、健康で快適に暮らせる高断熱・高省エネ住宅の普及を目的に、信州健康ゼロエネ住宅の新築・リフォームを支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>信州健康ゼロエネ住宅助成金は、長野県の気候に適した高断熱・高省エネ住宅の普及を進め、健康で快適な住まいづくりを支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>長野県が定める信州健康ゼロエネ住宅の基準を満たす住宅が対象です。新築タイプ、リフォームタイプなど、区分ごとに要件があります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額は区分や性能に応じて異なり、最大200万円が案内されています。令和8年度の申請期間は2026年4月15日から2027年2月26日までです。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nagano.lg.jp/kenchiku/kenkozeroene/joseikin.html',
    sourceName: '長野県 信州健康ゼロエネ住宅助成金',
    sourceUrls: [
      'https://www.pref.nagano.lg.jp/kenchiku/kenkozeroene/joseikin.html'
    ],
    sourceNote: '長野県公式ページで令和8年度信州健康ゼロエネ住宅助成金、対象住宅、新築・リフォーム、最大200万円、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gifu-housing-reform-support-2026',
    title: '岐阜県 住宅リフォームローン利子補給制度',
    organization: '岐阜県',
    type: 'local',
    maxAmount: '借入利子を一部補給',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '岐阜県',
    tags: ['岐阜県', '住宅リフォーム', '利子補給', '省エネ改修', 'バリアフリー'],
    eligibility: '岐阜県内の住宅で、対象となるリフォーム工事のために金融機関から融資を受ける人が対象です。',
    targetOccupation: '岐阜県内で住宅リフォームを行う個人',
    applicationPeriod: '令和8年度の受付状況は公式ページで確認',
    description: '岐阜県が、住宅の質の向上や既存住宅の活用を促すため、住宅リフォームローンの利子を一部補給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岐阜県住宅リフォームローン利子補給制度は、県民の住宅リフォームを支援するため、対象工事に係る借入金の利子の一部を補給する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>住宅の増改築、修繕、模様替え、省エネ改修、バリアフリー改修など、公式ページで定められる住宅リフォーム工事が対象です。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>対象となる住宅リフォームローンについて、一定期間の利子相当額の一部が補給されます。対象金融機関や申請条件は公式ページで確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.gifu.lg.jp/page/8480.html',
    sourceName: '岐阜県 住宅リフォームローン利子補給制度',
    sourceUrls: [
      'https://www.pref.gifu.lg.jp/page/8480.html'
    ],
    sourceNote: '岐阜県公式ページで住宅リフォームローン利子補給制度、対象工事、利子補給の支援内容を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shizuoka-wood-house-promotion',
    title: '静岡県 住んでよし しずおか木の家推進事業',
    organization: '静岡県',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '静岡県',
    tags: ['静岡県', '県産材', '木造住宅', '新築住宅', 'リフォーム'],
    eligibility: '静岡県産材を一定量使用し、県内に木造住宅を新築・増改築・リフォームする住宅取得者等が対象です。',
    targetOccupation: '静岡県内で県産材住宅を建築・改修する個人',
    applicationPeriod: '令和8年度の受付期間・予算状況は公式ページで確認',
    description: '静岡県が、しずおか優良木材等の県産材を使った住宅づくりを支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住んでよし しずおか木の家推進事業は、静岡県産材の利用拡大と木造住宅の普及を目的に、しずおか優良木材等を使用した住宅の新築やリフォームを支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>静岡県内に建築され、しずおか優良木材等を一定量使用する木造住宅が対象です。新築、増改築、リフォームの区分ごとに要件があります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>木材使用量や工事区分に応じて補助され、公式ページでは最大30万円の支援が案内されています。受付状況や必要書類は年度ごとの募集案内で確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shizuoka.jp/kurashikankyo/kenchiku/kizukai/1054945/1060782/index.html',
    sourceName: '静岡県 住んでよし しずおか木の家推進事業',
    sourceUrls: [
      'https://www.pref.shizuoka.jp/kurashikankyo/kenchiku/kizukai/1054945/1060782/index.html'
    ],
    sourceNote: '静岡県公式ページで住んでよし しずおか木の家推進事業、県産材利用、新築・リフォーム、最大30万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aichi-wooden-house-earthquake-retrofit',
    title: '豊川市 木造住宅耐震改修費補助金',
    organization: '豊川市',
    type: 'local',
    maxAmount: '最大155万円',
    maxAmountNum: 155,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '愛知県',
    tags: ['愛知県', '豊川市', '木造住宅', '耐震改修', '住宅リフォーム'],
    eligibility: '豊川市の無料木造住宅耐震診断を受け、総合判定値が1.0未満とされた木造住宅の耐震改修工事が対象です。',
    targetOccupation: '豊川市内の木造住宅所有者等',
    applicationPeriod: '2026年5月7日から2026年12月25日まで',
    deadlineDate: '2026-12-25',
    description: '愛知県豊川市が、木造住宅の倒壊被害を軽減するため、耐震改修に要する費用を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>豊川市木造住宅耐震改修費補助金は、地震発生時の木造住宅の倒壊等による被害を軽減し、震災に強いまちづくりを促進するための補助制度です。</p>'
      },
      {
        heading: '対象住宅・工事',
        content: '<p>豊川市の無料木造住宅耐震診断を受け、総合判定値が1.0未満とされた住宅が対象です。改修後の判定値が1.0以上かつ0.3以上向上する耐震改修工事が補助対象です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>耐震改修の調査、設計、耐震補強工事の費用について135万円を上限に補助されます。令和8年度から精密診断法による改修設計の場合、最大20万円の上乗せ補助もあります。</p>'
      }
    ],
    officialUrl: 'https://www.city.toyokawa.lg.jp/soshiki/kensetsu/kenchiku/2/1/5/1449.html',
    sourceName: '豊川市 木造住宅耐震改修費補助金',
    sourceUrls: [
      'https://www.city.toyokawa.lg.jp/soshiki/kensetsu/kenchiku/2/1/5/1449.html'
    ],
    sourceNote: '豊川市公式ページで2026年4月更新、対象住宅、対象工事、補助上限135万円、精密診断法による上乗せ最大20万円、受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mie-wooden-house-retrofit-reform',
    title: '東員町 木造住宅耐震化補助制度',
    organization: '東員町',
    type: 'local',
    maxAmount: '耐震補強設計18万円ほか',
    maxAmountNum: 18,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '三重県',
    tags: ['三重県', '東員町', '木造住宅', '耐震診断', '耐震補強'],
    eligibility: '昭和56年5月31日以前に着工された3階以下の木造住宅など、東員町が定める要件を満たす住宅が対象です。',
    targetOccupation: '東員町内の木造住宅所有者等',
    applicationPeriod: '令和8年度の申請受付・募集状況は公式ページで確認',
    description: '三重県東員町が、木造住宅の耐震診断、耐震補強設計、耐震補強工事等を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東員町木造住宅耐震化補助制度は、南海トラフ地震等に備え、町内の旧耐震基準の木造住宅の耐震性確認と耐震化を促進する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>昭和56年5月31日以前に着工された木造住宅で、階数が3階以下のものなどが対象です。木造住宅耐震診断等事業は無料で案内されています。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>耐震補強設計補助は最高18万円など、耐震診断、補強設計、耐震補強工事等の制度が用意されています。工事区分ごとの条件は公式ページで確認します。</p>'
      }
    ],
    officialUrl: 'https://www.town.toin.lg.jp/kurashi_tetsuzuki/sumai/2/1970.html',
    sourceName: '東員町 木造住宅の耐震化補助制度',
    sourceUrls: [
      'https://www.town.toin.lg.jp/kurashi_tetsuzuki/sumai/2/1970.html'
    ],
    sourceNote: '東員町公式ページで2026年4月更新、昭和56年以前の木造住宅、無料耐震診断、耐震補強設計最高18万円等の補助制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shiga-smart-eco-house-zeh-2026',
    title: '滋賀県 スマート・ライフスタイル普及促進事業補助金',
    organization: '滋賀県',
    type: 'local',
    maxAmount: '住宅省エネ・再エネ設備を補助',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '滋賀県',
    tags: ['滋賀県', '住宅用設備', '断熱改修', '太陽光発電', '省エネ住宅'],
    eligibility: '滋賀県内の個人用既存住宅で、太陽光発電、蓄電池、断熱改修、高効率給湯器等を導入する人が対象です。',
    targetOccupation: '滋賀県内の既存住宅所有者等',
    applicationPeriod: '2026年5月25日から受付開始',
    description: '滋賀県が、家庭でエネルギーを減らし、創り、賢く使う取組を広めるため、既存住宅の再エネ・省エネ設備導入を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>滋賀県スマート・ライフスタイル普及促進事業補助金は、家庭における省エネ・再エネ設備の導入を促進し、温室効果ガス排出削減と快適な住環境づくりを支援する制度です。</p>'
      },
      {
        heading: '対象設備',
        content: '<p>個人用既存住宅における太陽光発電システム、蓄電池、断熱改修、高効率給湯器などの再エネ・省エネ設備が対象として案内されています。</p>'
      },
      {
        heading: '申請受付',
        content: '<p>令和8年度は2026年5月25日から申請受付開始と案内されています。補助対象設備ごとの金額、申請書類、受付状況は公式ページで確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shiga.lg.jp/ippan/kankyoshizen/ondanka/349713.html',
    sourceName: '滋賀県 スマート・ライフスタイル普及促進事業補助金',
    sourceUrls: [
      'https://www.pref.shiga.lg.jp/ippan/kankyoshizen/ondanka/349713.html'
    ],
    sourceNote: '滋賀県公式ページで令和8年度募集、個人用既存住宅、太陽光発電・蓄電池・断熱改修・高効率給湯器等、2026年5月25日受付開始を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyoto-housing-decarbonization-2026',
    title: '京都府 住宅脱炭素化促進事業補助金',
    organization: '京都府',
    type: 'local',
    maxAmount: '対象住宅・設備に応じて補助',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '京都府',
    tags: ['京都府', '省エネ住宅', '脱炭素住宅', 'ZEH', '住宅設備'],
    eligibility: '京都府内で省エネ性能の高い住宅や脱炭素化に資する住宅設備を導入する個人等が対象です。',
    targetOccupation: '京都府内で省エネ住宅・設備を導入する個人等',
    applicationPeriod: '2026年4月から募集開始。受付状況は公式ページで確認',
    description: '京都府が、健康で快適な省エネ住宅の普及と住宅の脱炭素化を進めるために実施する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都府住宅脱炭素化促進事業補助金は、省エネ住宅で健康で快適な生活を始めることを後押しし、住宅分野の脱炭素化を促進するための補助制度です。</p>'
      },
      {
        heading: '対象内容',
        content: '<p>京都府内の住宅における省エネ性能の向上や、脱炭素化に資する設備導入等が対象です。対象住宅、対象設備、補助要件は公式ページの募集案内で確認します。</p>'
      },
      {
        heading: '募集状況',
        content: '<p>京都府公式ページでは、2026年度の住宅脱炭素化促進事業補助金の募集開始が案内されています。補助額は対象区分に応じて異なります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kyoto.jp/tikyu/news/jyutakuhojyo2026.html',
    sourceName: '京都府 住宅脱炭素化促進事業補助金',
    sourceUrls: [
      'https://www.pref.kyoto.jp/tikyu/news/jyutakuhojyo2026.html'
    ],
    sourceNote: '京都府公式ページで2026年度住宅脱炭素化促進事業補助金、募集開始、省エネ住宅・住宅脱炭素化支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'osaka-existing-house-insulation-model',
    title: '大阪府 既存住宅流通・リフォーム市場活性化補助金',
    organization: '大阪府',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '大阪府',
    tags: ['大阪府', '既存住宅', 'リフォーム', '断熱改修', '住宅流通'],
    eligibility: '大阪府内の既存住宅を対象に、性能向上リフォーム等を行う事業者または住宅所有者等が対象です。',
    targetOccupation: '大阪府内の既存住宅所有者・事業者等',
    applicationPeriod: '令和8年度の申請受付・予算状況は公式ページで確認',
    description: '大阪府が、既存住宅の流通促進とリフォーム市場の活性化を目的に、既存住宅の性能向上リフォーム等を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大阪府既存住宅流通・リフォーム市場活性化補助金は、既存住宅の質の向上と流通促進を図るため、断熱改修などの性能向上リフォームを支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>既存住宅を対象とした省エネ改修、断熱改修、耐震性や居住性能の向上に資するリフォーム等が対象として案内されています。詳細な要件は公式ページの募集案内で確認します。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助対象経費や工事区分に応じて補助され、公式ページでは最大40万円の支援が案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.osaka.lg.jp/o130170/kenchi_kankyo/hojokin.html',
    sourceName: '大阪府 既存住宅流通・リフォーム市場活性化補助金',
    sourceUrls: [
      'https://www.pref.osaka.lg.jp/o130170/kenchi_kankyo/hojokin.html'
    ],
    sourceNote: '大阪府公式ページで既存住宅流通・リフォーム市場活性化補助金、既存住宅、リフォーム、補助上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hyogo-vacant-house-renovation',
    title: '兵庫県 空き家活用支援事業',
    organization: '兵庫県',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['兵庫県', '空き家', '改修', 'リフォーム', '移住定住'],
    eligibility: '兵庫県内の空き家を住宅、事業所、地域交流拠点等として活用するために改修する所有者・利用者等が対象です。',
    targetOccupation: '兵庫県内の空き家所有者・活用希望者等',
    applicationPeriod: '令和8年度の受付期間・市町窓口は公式ページで確認',
    description: '兵庫県が、市町と連携して空き家を住宅や地域交流拠点等として活用する改修費を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>兵庫県空き家活用支援事業は、地域の空き家を有効活用し、移住定住や地域活性化につなげるため、空き家の改修費を支援する制度です。</p>'
      },
      {
        heading: '対象用途',
        content: '<p>住宅としての活用のほか、事業所、地域交流拠点、地域コミュニティ施設など、地域活性化につながる用途への改修が対象として案内されています。</p>'
      },
      {
        heading: '補助額',
        content: '<p>用途や地域区分、改修内容に応じて補助額が異なり、公式ページでは最大500万円の支援が案内されています。申請は市町窓口を通じて行います。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/ks26/machi-saisei/sato-akiya/sato-akiya.html',
    sourceName: '兵庫県 空き家活用支援事業',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/ks26/machi-saisei/sato-akiya/sato-akiya.html'
    ],
    sourceNote: '兵庫県公式ページで空き家活用支援事業、住宅・事業所・地域交流拠点等への改修、最大500万円、市町窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'wakayama-house-earthquake-retrofit',
    title: '和歌山県 住宅耐震化促進事業',
    organization: '和歌山県',
    type: 'local',
    maxAmount: '最大116万6,000円',
    maxAmountNum: 117,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '和歌山県',
    tags: ['和歌山県', '耐震診断', '耐震改修', '木造住宅', '住宅リフォーム'],
    eligibility: '昭和56年5月以前に着工された木造住宅など、和歌山県内の市町村が定める要件を満たす住宅が対象です。',
    targetOccupation: '和歌山県内の住宅所有者等',
    applicationPeriod: '申請窓口・受付期間は市町村により異なるため公式ページで確認',
    description: '和歌山県が市町村と連携し、住宅の耐震診断、補強設計、耐震改修を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>和歌山県住宅耐震化促進事業は、大規模地震による住宅倒壊被害を軽減するため、住宅の耐震診断や耐震改修を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>昭和56年5月以前に着工された木造住宅など、耐震性に課題がある住宅が対象です。対象要件や申請方法は市町村ごとに異なります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>耐震改修工事等に対し、公式ページでは最大116万6,000円の補助が案内されています。耐震診断や補強設計の支援制度も用意されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.wakayama.lg.jp/prefg/080800/taishin/top.html',
    sourceName: '和歌山県 住宅耐震化促進事業',
    sourceUrls: [
      'https://www.pref.wakayama.lg.jp/prefg/080800/taishin/top.html'
    ],
    sourceNote: '和歌山県公式ページで住宅耐震化促進事業、耐震診断・補強設計・耐震改修、補助上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tottori-smile-housing-2026',
    title: '鳥取県 とっとり住まいる支援事業',
    organization: '鳥取県',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    prefecture: '鳥取県',
    tags: ['鳥取県', '県産材', '木造住宅', '住宅新築', '移住定住'],
    eligibility: '鳥取県産材を活用して県内に木造住宅を新築・改修する個人等が対象です。',
    targetOccupation: '鳥取県内で県産材住宅を建築・改修する個人',
    applicationPeriod: '2026年度の受付期間・予算状況は公式ページで確認',
    description: '鳥取県が、県産材を活用した住宅建設や改修を支援し、県内住宅産業と県産材利用を促進する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>とっとり住まいる支援事業は、鳥取県産材の利用拡大と県内住宅産業の活性化を目的に、県産材を使った木造住宅の新築・改修等を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>鳥取県内に建築され、鳥取県産材を一定量使用する木造住宅が対象です。新築、改修、県産材使用量などの要件は公式ページで確認します。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額は県産材の使用量や住宅区分に応じて設定され、公式ページでは最大100万円の支援が案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tottori.lg.jp/328187.htm',
    sourceName: '鳥取県 とっとり住まいる支援事業',
    sourceUrls: [
      'https://www.pref.tottori.lg.jp/328187.htm'
    ],
    sourceNote: '鳥取県公式ページで2026年度とっとり住まいる支援事業、県産材住宅、新築・改修、最大100万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shimane-long-life-childcare-housing-reform-2026',
    title: '島根県 しまね長寿・子育て安心住宅リフォーム助成事業',
    organization: '島根県',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'housing',
    prefecture: '島根県',
    tags: ['島根県', '住宅リフォーム', '子育て世帯', 'バリアフリー', '中古住宅'],
    eligibility: '島根県内の住宅で、子育て配慮改修、バリアフリー改修、中古住宅改修など、県と市町村が定める要件を満たす改修工事が対象です。',
    targetOccupation: '島根県内の住宅所有者・居住予定者等',
    applicationPeriod: '2026年度の受付期間・予算状況は公式ページで確認',
    description: '島根県が市町村と連携し、子育てしやすい住まいや高齢者等が安心して暮らせる住まいへの改修を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>しまね長寿・子育て安心住宅リフォーム助成事業は、子育て世帯や高齢者等が安心して暮らせる住環境づくりを進めるため、住宅リフォーム費用の一部を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>子育て配慮改修、バリアフリー改修、中古住宅改修などが対象です。工事内容、対象住宅、申請窓口は市町村ごとに異なるため、着工前に公式ページと市町村窓口で確認します。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額は工事内容や世帯区分により異なり、公式ページでは上限40万円の支援が案内されています。予算到達時は受付終了となる場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shimane.lg.jp/infra/build/jutaku/shien/shimane_tyojunosumai_reform_jyosei.html',
    sourceName: '島根県 しまね長寿・子育て安心住宅リフォーム助成事業',
    sourceUrls: [
      'https://www.pref.shimane.lg.jp/infra/build/jutaku/shien/shimane_tyojunosumai_reform_jyosei.html'
    ],
    sourceNote: '島根県公式ページで、しまね長寿・子育て安心住宅リフォーム助成事業、子育て・バリアフリー等の住宅改修支援、上限40万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okayama-prefecture-certified-wood-housing-2026',
    title: '岡山県 おかやまの木で家づくり支援事業',
    organization: '岡山県',
    type: 'local',
    maxAmount: '最大30万4,000円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '岡山県',
    tags: ['岡山県', '県産材', '木造住宅', '住宅新築', '住宅改修'],
    eligibility: '岡山県内で県産森林認証材を使用し、木造住宅の新築または既存住宅の改修を行う施工業者が対象です。',
    targetOccupation: '岡山県内で県産材住宅を施工する工務店・施工業者',
    applicationPeriod: '令和8年度受付中。令和9年3月8日までに助成対象部材の納材が完了するもの',
    deadlineDate: '2027-03-08',
    description: '岡山県が、県産森林認証材を使った木造住宅の新築・改修を支援し、県産材利用と地域住宅産業を促進する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>おかやまの木で家づくり支援事業は、県産森林認証材を積極的に使う住宅・民間非住宅建築物の新築や既存住宅の改修を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>住宅の新築では主要構造部材に県産森林認証材の乾燥材を4立方メートル以上、既存住宅の改修では主要構造部材や造作材等に1立方メートル以上使用することなどが要件です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>住宅の新築は1戸あたり12.8万円から30.4万円、既存住宅の改修は1件あたり3.2万円から30.4万円です。助成単価は木材の種類に応じて設定されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okayama.jp/page/769215.html',
    sourceName: '岡山県 令和8年度おかやまの木で家づくり支援事業',
    sourceUrls: [
      'https://www.pref.okayama.jp/page/769215.html'
    ],
    sourceNote: '岡山県公式ページで令和8年度おかやまの木で家づくり支援事業、県産森林認証材、住宅新築・改修、最大30.4万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hiroshima-wooden-housing-loan-2026',
    title: '広島県 ひろしまの森に木づかう家づくり融資制度',
    organization: '広島県',
    type: 'local',
    maxAmount: '低利融資',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '広島県',
    tags: ['広島県', '県産材', '木造住宅', '住宅新築', '融資'],
    eligibility: '広島県内で県産材を活用した木造住宅を建築・購入するなど、県公式ページが定める要件を満たす方が対象です。',
    targetOccupation: '広島県内で県産材住宅を建築・購入する個人等',
    applicationPeriod: '融資条件・取扱金融機関・受付状況は公式ページで確認',
    description: '広島県が、県産材を活用した木造住宅の取得を支援するため、取扱金融機関と連携して案内している低利融資制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>ひろしまの森に木づかう家づくり融資制度は、広島県産材を利用した住宅づくりを進めるため、住宅取得資金の借入を低利で支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>県産材を一定量使用する木造住宅など、制度が定める住宅要件を満たすものが対象です。利用前に、県公式ページと取扱金融機関で対象要件を確認します。</p>'
      },
      {
        heading: '支援内容',
        content: '<p>補助金ではなく、取扱金融機関による低利融資として支援されます。融資利率、限度額、申込方法は年度や金融機関により変わるため、公式ページの最新情報を確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hiroshima.lg.jp/soshiki/108/1272432081538.html',
    sourceName: '広島県 ひろしまの森に木づかう家づくり融資制度',
    sourceUrls: [
      'https://www.pref.hiroshima.lg.jp/soshiki/108/1272432081538.html'
    ],
    sourceNote: '広島県公式ページで、ひろしまの森に木づかう家づくり融資制度、県産材住宅向けの低利融資制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamaguchi-wood-housing-reform-2026',
    title: '山口県 住宅等リフォーム木材利用促進事業補助金',
    organization: '一般社団法人 山口県木材協会',
    type: 'local',
    maxAmount: '最大25万円',
    maxAmountNum: 25,
    category: 'housing',
    prefecture: '山口県',
    tags: ['山口県', '県産材', '住宅リフォーム', '木材利用', '工務店'],
    eligibility: '山口県内の既存住宅等で県産木材を使用するリフォーム等を行い、補助対象者や工事要件を満たすものが対象です。',
    targetOccupation: 'やまぐち木の家づくり等推進工務店等',
    applicationPeriod: '令和8年4月1日から令和8年12月20日まで。予算到達時は受付終了',
    deadlineDate: '2026-12-20',
    description: '山口県の木材利用促進施策として、県産木材を使った住宅リフォーム等を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅等リフォーム木材利用促進事業補助金は、民間建築物での県産木材利用を促進するため、県産木材を使用した住宅や事業用建築物のリフォーム等を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>山口県内に既存する住宅や事業用建築物で、構造材または内装に県産木材を使用し、令和9年3月10日までに工事が完了するものが対象です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>住宅は県産木材の使用量や内装材の使用面積に応じて算定し、上限25万円、下限5万円です。事業用建築物は上限100万円ですが、この登録では住宅向け上限を掲載しています。</p>'
      }
    ],
    officialUrl: 'https://www.mokkyou.or.jp/support/reform/',
    sourceName: '山口県木材協会 令和8年度住宅等リフォーム木材利用促進事業補助金',
    sourceUrls: [
      'https://www.pref.yamaguchi.lg.jp/soshiki/102/346289.html',
      'https://www.mokkyou.or.jp/support/reform/'
    ],
    sourceNote: '山口県公式ページと山口県木材協会ページで、令和8年度住宅等リフォーム木材利用促進事業補助金、住宅上限25万円、申請期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'komatsushima-wooden-house-earthquake-retrofit-2026',
    title: '小松島市 木造住宅耐震化促進事業',
    organization: '小松島市',
    type: 'local',
    maxAmount: '最大210万円',
    maxAmountNum: 210,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '徳島県',
    tags: ['徳島県', '小松島市', '耐震改修', '木造住宅', '住宅リフォーム'],
    eligibility: '平成12年5月31日以前に着工された木造住宅など、小松島市が定める耐震診断・耐震改修等の要件を満たす住宅が対象です。',
    targetOccupation: '小松島市内の木造住宅所有者・居住者等',
    applicationPeriod: '令和8年度受付中。募集件数に達した場合は受付終了',
    description: '小松島市が、地震に強い住まいづくりを進めるため、木造住宅の耐震診断、耐震改修、耐震シェルター、住替え等を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>小松島市木造住宅耐震化促進事業は、旧耐震基準等の木造住宅について、耐震診断や耐震改修を支援し、地震時の住宅倒壊リスクを下げる制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>平成12年5月31日以前に着工された木造住宅など、事業区分ごとの要件を満たす住宅が対象です。工事契約や着工は補助金交付決定後に行う必要があります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>木造住宅耐震改修支援は耐震改修工事最大200万円に、感震ブレーカー設置費用最大10万円を上乗せし、総額最大210万円の補助が案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.komatsushima.lg.jp/docs/5620901.html',
    sourceName: '小松島市 令和8年度小松島市木造住宅耐震化促進事業',
    sourceUrls: [
      'https://www.city.komatsushima.lg.jp/docs/5620901.html',
      'https://www.pref.tokushima.lg.jp/taishinka/topics/sonota/5003274/'
    ],
    sourceNote: '小松島市公式ページで令和8年度木造住宅耐震化促進事業、耐震改修最大200万円と感震ブレーカー10万円上乗せ、総額最大210万円を確認。徳島県公式の市町村別補助額一覧も確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagawa-hinoki-housing-2026',
    title: '香川県 「かがわヒノキ」住宅助成事業',
    organization: '香川県',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '香川県',
    tags: ['香川県', '県産材', 'ヒノキ', '住宅新築', '住宅リフォーム'],
    eligibility: '香川県内で認証ヒノキ材を使用して、木造住宅の新築、増築、改築またはリフォームを行う施主等が対象です。',
    targetOccupation: '香川県内で認証ヒノキ材住宅を建築・改修する施主等',
    applicationPeriod: '令和8年4月1日から令和9年2月13日まで。予算到達時は受付終了',
    deadlineDate: '2027-02-13',
    description: '香川県が、県産認証ヒノキ材を使用した木造住宅の新築・増改築・リフォームを支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>「かがわヒノキ」住宅助成事業は、香川県産ヒノキ材の利用を促進するため、認証ヒノキ材を使った住宅の建築・リフォーム費用の一部を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>県内で認証ヒノキ材を使用して木造住宅の新築、増築、改築またはリフォームを行うこと、県内業者が施工することなどが要件です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>県産認証ヒノキ購入助成と特別加算を合わせて1軒あたり最大50万円です。内装材は1軒あたり30万円まで、展示用品助成・公開経費助成は合わせて5万円までです。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kagawa.lg.jp/rinsei/mokuzai/wmdm49180329154714.html',
    sourceName: '香川県 「かがわヒノキ」住宅助成事業',
    sourceUrls: [
      'https://www.pref.kagawa.lg.jp/rinsei/mokuzai/wmdm49180329154714.html'
    ],
    sourceNote: '香川県公式ページで令和8年度の申請期間、認証ヒノキ材住宅、新築・増改築・リフォーム、上限50万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ehime-wood-housing-promotion-2026',
    title: '愛媛県 えひめ材住宅等普及啓発事業',
    organization: '愛媛県',
    type: 'local',
    maxAmount: '最大30万3,000円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '愛媛県',
    tags: ['愛媛県', '県産材', '木造住宅', '住宅新築', '住宅リフォーム'],
    eligibility: '愛媛県産材を使用した住宅の新築、リフォーム等について、事業区分ごとの要件を満たす建築主・施工者等が対象です。',
    targetOccupation: '愛媛県内でえひめ材住宅を建築・改修する方等',
    applicationPeriod: '令和8年度の受付期間・予算状況は公式ページで確認',
    description: '愛媛県が、えひめ材を活用した住宅の新築・リフォーム等を支援し、県産材利用の拡大を図る制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>えひめ材住宅等普及啓発事業は、県産材の利用拡大を目的に、えひめ材の家づくり促進支援、住宅等リフォーム木材利用促進など複数の区分で住宅利用を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>えひめ材を使用した住宅の新築や、県産材を利用した住宅等リフォームが対象です。工法、使用材、施工内容により補助区分と上限額が異なります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>えひめ材の家づくり促進支援は、在来軸組工法の森林認証材で24.3万円、梁・桁すべて県産材使用の加算6万円を含めると住宅新築は最大30.3万円です。住宅等リフォーム木材利用促進事業は10万円から16.8万円です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ehime.jp/page/143575.html',
    sourceName: '愛媛県 令和8年度えひめ材住宅等普及啓発事業',
    sourceUrls: [
      'https://www.pref.ehime.jp/page/143575.html',
      'https://www.kinosoudan.jp/present.html'
    ],
    sourceNote: '愛媛県公式ページで令和8年度えひめ材住宅等普及啓発事業、住宅新築・リフォームの補助上限を確認。実施要領でえひめ材の家づくり促進支援の加算内容を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kochi-wooden-house-support-2026',
    title: '高知県 こうちの木の住まいづくり助成事業',
    organization: '高知県',
    type: 'local',
    maxAmount: '別表で算定',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '高知県',
    tags: ['高知県', '県産材', '木造住宅', '住宅新築', '住宅リフォーム'],
    eligibility: '高知県内で木造住宅の新築、増築、リフォームまたは内装木質化を行い、県内産乾燥木材の使用など要件を満たす個人が対象です。',
    targetOccupation: '高知県内で県産材住宅を取得・改修する個人',
    applicationPeriod: '令和8年度の受付期間・予算状況は公式ページで確認',
    description: '高知県が、県内産乾燥木材を使った木造住宅の新築・増築・リフォーム・内装木質化を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>こうちの木の住まいづくり助成事業は、県内産乾燥木材の利用拡大と木造住宅の普及を目的に、住宅の新築、増築、リフォーム、内装木質化を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>県内で新築、増築、リフォームを行う木造住宅、または内装木質化を行う住宅が対象です。新築・増築では基本部位の80%以上に県内産乾燥木材を使用することなどが要件です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額は公式ページの交付要綱別表第1に基づき、積上補助タイプまたは定額補助タイプで算定されます。利用タイプにより申込みから支払いまでの流れと必要書類が異なります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kochi.lg.jp/doc/kinosumai-gaiyoutetuduki/',
    sourceName: '高知県 こうちの木の住まいづくり助成事業',
    sourceUrls: [
      'https://www.pref.kochi.lg.jp/doc/kinosumai-gaiyoutetuduki/'
    ],
    sourceNote: '高知県公式ページで令和8年度こうちの木の住まいづくり助成事業、県内産乾燥木材、住宅新築・増築・リフォーム・内装木質化、補助額は別表算定であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuoka-kodomo-renovation-2026',
    title: '福岡県 こどもリノベ補助金',
    organization: '福岡県',
    type: 'local',
    maxAmount: '最大75万円',
    maxAmountNum: 75,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['福岡県', '住宅リフォーム', '中古住宅', '子育て世帯', '若年世帯'],
    eligibility: '若年世帯または子育て世帯が、自ら居住する中古住宅の購入後リノベーション等を行う場合など、福岡県が定める要件を満たす住宅が対象です。',
    targetOccupation: '福岡県内で中古住宅を取得・改修する若年世帯・子育て世帯等',
    applicationPeriod: '令和8年4月13日から令和9年1月下旬までの予定。予算到達時は受付終了',
    description: '福岡県が、若年世帯・子育て世帯の良質な中古住宅取得とリノベーションを支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福岡県こどもリノベ補助金は、若年世帯や子育て世帯が子育てしやすい良質な中古住宅を安心して取得できるよう、リノベーション工事費の一部を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>居住性向上、長寿命化、省エネルギー、防犯性向上、新しい生活様式対応、バリアフリーなどのリノベーション工事が対象です。県内事業者が請け負う工事費30万円以上の工事であることなどの要件があります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>通常の流通型・持家型は補助率3分の1、上限50万円です。移住リノベに該当する流通型は補助率2分の1、上限75万円です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukuoka.lg.jp/contents/kodomo-renove-hojo.html',
    sourceName: '福岡県 令和8年度 福岡県こどもリノベ補助金',
    sourceUrls: [
      'https://www.pref.fukuoka.lg.jp/contents/kodomo-renove-hojo.html'
    ],
    sourceNote: '福岡県公式ページで令和8年度こどもリノベ補助金、若年・子育て世帯、中古住宅リノベ、通常上限50万円・移住リノベ上限75万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-city-wooden-house-earthquake-retrofit-2026',
    title: '佐賀市 住宅の耐震改修工事費の補助制度',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '佐賀県',
    tags: ['佐賀県', '佐賀市', '耐震改修', '木造住宅', '住宅リフォーム'],
    eligibility: '昭和56年5月31日以前に建築され、耐震診断で耐震性能が不足するとされた住宅など、佐賀市が定める要件を満たす住宅が対象です。',
    targetOccupation: '佐賀市内の住宅所有者等',
    applicationPeriod: '令和8年6月1日から令和8年11月30日まで',
    deadlineDate: '2026-11-30',
    description: '佐賀市が、耐震性が不足する住宅について、耐震補強設計と耐震改修工事を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀市の住宅耐震改修工事費補助制度は、耐震診断の結果、耐震性が不足している住宅について、耐震補強設計と耐震改修工事の費用を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>昭和56年5月31日以前に建築された住宅で、耐震診断の結果、耐震性能が不足するとされたものが対象です。補助を受けるには耐震診断が必須で、事前相談が必要です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>戸建て住宅の耐震改修事業は、耐震改修工事に係る工事費の80%以内、上限115万円です。段階的耐震改修は1段階目上限70万円、2段階目上限45万円です。</p>'
      }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/sangyo-machizukuri/toshi-kotsu/3/4/4161.html',
    sourceName: '佐賀市 住宅の耐震改修工事費の補助制度',
    sourceUrls: [
      'https://www.city.saga.lg.jp/sangyo-machizukuri/toshi-kotsu/3/4/4161.html'
    ],
    sourceNote: '佐賀市公式ページで令和8年度募集、耐震改修工事費80%以内、上限115万円、募集期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-comfortable-home-renovation-2026',
    title: '長崎市 快適住まいづくり支援費補助金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '長崎県',
    tags: ['長崎県', '長崎市', '住宅リフォーム', '省エネ', 'バリアフリー'],
    eligibility: '長崎市内の住宅に居住または居住予定の所有者等が、市内事業者に未着手の対象リフォーム工事を発注する場合などが対象です。',
    targetOccupation: '長崎市内の住宅所有者・居住予定者等',
    applicationPeriod: '令和8年度は事前抽選制。第2期は令和8年7月1日から令和8年7月20日まで',
    deadlineDate: '2026-07-20',
    description: '長崎市が、省エネ化、バリアフリー化、居住性向上、防犯性・耐久性向上などの住宅リフォームを支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>長崎市快適住まいづくり支援費補助金は、屋根の遮熱・断熱塗装、省エネ化、浴室・便所などのバリアフリー化、間取り変更、防犯性や耐久性向上を図る住宅リフォーム工事を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>未着手の改修工事で、市内に本社がある法人または市内に住所がある個人に発注し、対象工事費の合計が20万円以上の工事が対象です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助対象工事にかかる経費の20%で、通常の上限は10万円です。耐震性能を有する空き家を改修する場合は上限20万円です。</p>'
      }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/page/1816.html',
    sourceName: '長崎市 快適住まいづくり支援費補助金',
    sourceUrls: [
      'https://www.city.nagasaki.lg.jp/page/1816.html'
    ],
    sourceNote: '長崎市公式ページで令和8年度の快適住まいづくり支援費補助金、対象工事、省エネ・バリアフリー等、通常上限10万円・空き家改修上限20万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kumamoto-prefecture-wooden-house-earthquake-retrofit-2026',
    title: '熊本県 戸建て住宅耐震改修等緊急促進事業',
    organization: '熊本県',
    type: 'local',
    maxAmount: '市町村により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '熊本県',
    tags: ['熊本県', '耐震診断', '耐震改修', '木造住宅', '建替え'],
    eligibility: '熊本県内の戸建て木造住宅で、耐震診断、耐震改修設計・工事、建替え等について市町村の要件を満たす住宅が対象です。',
    targetOccupation: '熊本県内の戸建て木造住宅所有者等',
    applicationPeriod: '受付期間・補助額・申請窓口は市町村により異なるため公式ページで確認',
    description: '熊本県が市町村と連携し、戸建て木造住宅の耐震診断、耐震改修設計・工事、建替え等を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>熊本県戸建て住宅耐震改修等緊急促進事業は、地震に備えた戸建て木造住宅の耐震化を進めるため、県が市町村と連携して実施する補助事業です。</p>'
      },
      {
        heading: '対象メニュー',
        content: '<p>耐震診断、耐震改修設計・工事、建替え、耐震シェルター工事などが対象です。申請窓口は住まいの市町村で、制度の拡充時期や詳細条件は市町村ごとに異なります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額は市町村により異なります。熊本県公式ページでは市町村と連携した支援制度であること、申請窓口と詳細条件は市町村へ確認することが案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kumamoto.jp/soshiki/115/51288.html',
    sourceName: '熊本県 熊本県の建築物耐震化に向けた取り組み',
    sourceUrls: [
      'https://www.pref.kumamoto.jp/soshiki/115/51288.html',
      'https://www.city.kumamoto.jp/kiji0031284/index.html'
    ],
    sourceNote: '熊本県公式ページで戸建て木造住宅の耐震診断、耐震改修設計・工事、建替え等に対する市町村連携支援を確認。熊本市公式ページで令和8年度の耐震改修等事業受付も確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-city-wooden-house-earthquake-diagnosis-2026',
    title: '大分市 木造住宅耐震診断支援事業',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大11万円',
    maxAmountNum: 11,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '大分県',
    tags: ['大分県', '大分市', '耐震診断', '木造住宅', '住宅安全'],
    eligibility: '昭和56年5月31日以前に着工された3階建て以下の木造住宅など、大分市が定める要件を満たす住宅が対象です。',
    targetOccupation: '大分市内の木造住宅所有者等',
    applicationPeriod: '令和8年4月14日から令和8年12月18日まで。予算到達時は受付終了',
    deadlineDate: '2026-12-18',
    description: '大分市が、旧耐震基準の木造住宅について耐震診断費用を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>大分市木造住宅耐震診断支援事業は、地震に備え、昭和56年5月31日以前に着工された木造住宅の耐震性を確認するための診断費用を支援する制度です。</p>'
      },
      {
        heading: '対象住宅',
        content: '<p>昭和56年5月31日以前に着工された3階建て以下の木造住宅が対象です。店舗等との併用住宅は、店舗等部分が延べ面積の2分の1未満であることなどの要件があります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>耐震診断に要する費用の10分の10を補助します。上限額は住宅の床面積や図面の有無などにより7万5,000円、9万円、11万円に分かれます。</p>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/o168/kurashi/anshinanzen/mokutai.html',
    sourceName: '大分市 木造住宅の耐震診断および耐震改修補助',
    sourceUrls: [
      'https://www.city.oita.oita.jp/o168/kurashi/anshinanzen/mokutai.html',
      'https://www.pref.oita.jp/site/taishin/'
    ],
    sourceNote: '大分市公式ページで令和8年度の耐震診断支援、現在受付中、耐震診断費用10分の10・最大11万円、受付期間を確認。大分県公式の耐震化情報も確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyazaki-prefecture-wooden-house-earthquake-support-2026',
    title: '宮崎県 木造住宅耐震化の支援制度',
    organization: '宮崎県',
    type: 'local',
    maxAmount: '市町村により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '宮崎県',
    tags: ['宮崎県', '耐震診断', '耐震改修', '木造住宅', '建替え'],
    eligibility: '昭和56年5月31日以前に着工された木造住宅など、市町村が実施する耐震診断・耐震改修等の要件を満たす住宅が対象です。',
    targetOccupation: '宮崎県内の木造住宅所有者等',
    applicationPeriod: '受付期間・補助額・申請窓口は市町村により異なるため公式ページで確認',
    description: '宮崎県が市町村と連携し、木造住宅の耐震診断、耐震改修設計・工事、除却・建替え等を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮崎県の木造住宅耐震化支援制度は、南海トラフ地震等に備え、昭和56年以前の木造住宅を対象に市町村と連携して耐震化を支援する制度です。</p>'
      },
      {
        heading: '対象メニュー',
        content: '<p>耐震診断事業、耐震改修設計と耐震改修工事をパッケージで支援する総合支援事業、耐震性のない住宅の除却や建替えを支援する安全住宅住替え事業などがあります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額や受付期間は市町村により異なります。公式ページでは事業主体が市町村であること、対象住宅や対象メニュー、代理受領制度などが案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.miyazaki.lg.jp/kenchikujutaku/kurashi/shakaikiban/joseiseido.html',
    sourceName: '宮崎県 木造住宅耐震化の支援制度についてのお知らせ',
    sourceUrls: [
      'https://www.pref.miyazaki.lg.jp/kenchikujutaku/kurashi/shakaikiban/joseiseido.html'
    ],
    sourceNote: '宮崎県公式ページで、昭和56年以前の木造住宅を対象に、市町村と連携して耐震診断、総合支援事業、安全住宅住替え事業を助成していることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-city-safe-housing-stock-2026',
    title: '鹿児島市 安全安心住宅ストック支援事業',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '鹿児島県',
    tags: ['鹿児島県', '鹿児島市', '耐震改修', '住宅リフォーム', '空き家'],
    eligibility: '鹿児島市内の戸建住宅で、耐震診断、耐震改修、耐震シェルター等設置、空家活用・移住型リフォームなどの要件を満たす住宅が対象です。',
    targetOccupation: '鹿児島市内の住宅所有者・移住者・空家活用者等',
    applicationPeriod: '令和8年5月7日から令和8年12月9日まで。予算到達時は受付終了',
    deadlineDate: '2026-12-09',
    description: '鹿児島市が、住宅の耐震化、耐震シェルター等設置、空家活用者・移住者向けリフォームを支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>鹿児島市安全安心住宅ストック支援事業は、既存住宅の安全性を確保し、良質な住宅ストックの形成を図るため、住宅の耐震診断、耐震改修工事、耐震シェルター等設置、リフォーム費用の一部を支援する制度です。</p>'
      },
      {
        heading: '対象メニュー',
        content: '<p>耐震型では耐震診断、耐震改修工事、耐震シェルター等設置、耐震改修等とあわせて行うリフォームが対象です。空家活用・移住型では、空家活用者や移住者が行うリフォームも対象です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>耐震改修工事は補助率2分の1、限度額115万円です。耐震診断は上限10万円、耐震シェルター等設置は上限25万円、リフォームは区分により20万円から60万円が限度額です。</p>'
      }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/kensetu/kenchiku/kenshido/stock.html',
    sourceName: '鹿児島市 安全安心住宅ストック支援事業',
    sourceUrls: [
      'https://www.city.kagoshima.lg.jp/kensetu/kenchiku/kenshido/stock.html'
    ],
    sourceNote: '鹿児島市公式ページで令和8年度受付中、安全安心住宅ストック支援事業、耐震改修上限115万円、受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okinawa-housing-development-magnetic-survey-2026',
    title: '沖縄県 住宅等開発磁気探査支援事業',
    organization: '沖縄県',
    type: 'local',
    maxAmount: '探査費を補助',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '沖縄県',
    tags: ['沖縄県', '住宅新築', '建替え', '不発弾探査', '安全対策'],
    eligibility: '沖縄県内で住宅の新築・建替え等の工事を予定し、住宅等開発磁気探査支援事業の要件を満たす個人・民間事業主等が対象です。',
    targetOccupation: '沖縄県内で住宅等の建築工事を行う個人・民間事業主等',
    applicationPeriod: '随時受付。年間を通して受付',
    description: '沖縄県が、住宅の新築・建替えなど工事を行う際の不発弾探査費を支援する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅等開発磁気探査支援事業は、沖縄県内で住宅の新築・建替え、学校、福祉施設、事業所、店舗、工場、土地造成などの工事を行う際、不発弾探査費を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>住宅の新築・建替えを含む建築工事や土地造成等が対象です。面積による制限はなく、工事予定地の市町村窓口または沖縄県電子申請サービスで申請予定票を提出します。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>個人・民間事業主等からの申請に基づき、住宅等の工事を行う際の不発弾探査費が補助されます。必要書類や対象範囲は公式ページの要綱・要領で確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okinawa.lg.jp/bosaianzen/fuhatsudan/1021697.html',
    sourceName: '沖縄県 住宅等開発磁気探査支援事業',
    sourceUrls: [
      'https://www.pref.okinawa.lg.jp/bosaianzen/fuhatsudan/1021697.html'
    ],
    sourceNote: '沖縄県公式ページで住宅等開発磁気探査支援事業、住宅の新築・建替え等に伴う不発弾探査費補助、随時受付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oketo-elderly-disabled-home-renovation',
    title: '置戸町 高齢者等住宅改修費助成金',
    organization: '置戸町',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'nursing',
    prefecture: '北海道',
    tags: ['北海道', '置戸町', '高齢者', '障がい者', '住宅改修'],
    eligibility: '置戸町内に居住する65歳以上の高齢者、身体障害者手帳1・2級の方、またはこれらの方と同居している方が対象です。',
    targetOccupation: '置戸町内の高齢者・重度身体障がい者世帯等',
    applicationPeriod: '着工前に申請。受付状況は公式ページで確認',
    description: '置戸町が、高齢者や身体障がい者の安全で快適な在宅生活を支えるため、住宅改修費の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>置戸町高齢者等住宅改修費助成金は、高齢者や身体障がい者が自立して安全に暮らせる住環境を整えるため、住宅改修費の一部を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>手すりの設置、段差の解消・軽減、スロープ設置、床仕上げ・路盤改善、戸の改善、便器の改善、浴槽・洗い場の改善、調理台・洗面台等の改善などが対象です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>改修工事費100万円を限度に、その2分の1が助成されます。介護保険の住宅改修費給付を受ける場合は、給付額を控除した額が対象です。</p>'
      }
    ],
    officialUrl: 'https://www.town.oketo.hokkaido.jp/kenko_fukushi/koureisya/koreisha/jutaku_kaishu/',
    sourceName: '置戸町 住宅改修費助成金交付',
    sourceUrls: [
      'https://www.town.oketo.hokkaido.jp/kenko_fukushi/koureisya/koreisha/jutaku_kaishu/'
    ],
    sourceNote: '置戸町公式ページで高齢者等住宅改修費助成金、65歳以上高齢者・身体障害者手帳1・2級等、改修工事費100万円の2分の1を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iwate-care-technology-support-2026',
    title: '岩手県 介護テクノロジー導入等支援事業費補助金',
    organization: '岩手県',
    type: 'local',
    maxAmount: '最大2,000万円',
    maxAmountNum: 2000,
    category: 'nursing',
    prefecture: '岩手県',
    tags: ['岩手県', '介護テクノロジー', '介護ロボット', '介護ソフト', '介護事業所'],
    eligibility: '岩手県内の介護サービス事業所、養護老人ホーム、軽費老人ホーム、対象となる事業者グループ等が対象です。',
    targetOccupation: '岩手県内の介護サービス事業者・福祉事業者等',
    applicationPeriod: '令和8年7月上旬から8月上旬に事前協議予定。詳細は公式ページで確認',
    description: '岩手県が、介護テクノロジー導入、業務改善支援、地域モデルづくり、協働化・大規模化等による職場環境改善を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岩手県介護テクノロジー導入等支援事業費補助金は、介護現場の負担軽減や生産性向上を進めるため、介護テクノロジー、介護ソフト、ICT環境整備、業務改善支援等を支援する制度です。</p>'
      },
      {
        heading: '対象事業',
        content: '<p>介護テクノロジー等の導入支援、パッケージ型導入支援、導入支援と一体的に行う業務改善支援、地域における介護現場の生産性向上普及推進、協働化・大規模化等による職場環境改善が対象です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助率は多くのメニューで5分の4です。パッケージ型導入支援は1事業所あたり上限1,000万円、モデル地域づくりは1モデルあたり最大2,000万円など、事業区分ごとに上限が設定されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.iwate.jp/kurashikankyou/fukushi/1083030/1099125.html',
    sourceName: '岩手県 令和8年度介護テクノロジー導入等支援事業費補助金',
    sourceUrls: [
      'https://www.pref.iwate.jp/kurashikankyou/fukushi/1083030/1099125.html'
    ],
    sourceNote: '岩手県公式ページで令和8年度介護テクノロジー導入等支援事業費補助金、補助対象、補助率、事業区分別上限額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyagi-care-technology-support-2026',
    title: '宮城県 介護テクノロジー導入支援事業補助金',
    organization: '宮城県',
    type: 'local',
    maxAmount: '詳細公開予定',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '宮城県',
    tags: ['宮城県', '介護テクノロジー', '介護ロボット', 'ICT', '介護事業所'],
    eligibility: '宮城県内に介護サービス事業所等を有する法人が対象です。',
    targetOccupation: '宮城県内の介護サービス事業者等',
    applicationPeriod: '令和8年7月中旬募集開始、令和8年8月中旬申請締切予定',
    description: '宮城県が、介護職員の身体的負担軽減や業務効率化を目的に、介護テクノロジー導入費用を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>宮城県介護テクノロジー導入支援事業補助金は、介護職員の身体的負担の軽減や業務の効率化を目的として、介護ロボットやICTなどの介護テクノロジー導入を支援する制度です。</p>'
      },
      {
        heading: '対象事業者',
        content: '<p>宮城県内に、介護保険法による指定または許可を受けた介護サービス事業所、または老人福祉法による認可を受けた養護老人ホーム・軽費老人ホームを有する法人が対象です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>介護テクノロジー等の導入支援、パッケージ型導入支援、導入支援と一体的に行う業務改善支援が予定されています。補助率は導入費の5分の4で、詳細な上限額は公式ページで公開予定です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.miyagi.jp/soshiki/chouju/r8kaigo-technology.html',
    sourceName: '宮城県 令和8年度介護テクノロジー導入支援事業補助金',
    sourceUrls: [
      'https://www.pref.miyagi.jp/soshiki/chouju/r8kaigo-technology.html'
    ],
    sourceNote: '宮城県公式ページで令和8年度介護テクノロジー導入支援事業補助金、対象法人、補助率5分の4、募集開始・締切予定を確認。上限額は詳細公開予定。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukushima-care-technology-support-2026',
    title: '福島県 介護テクノロジー導入支援事業',
    organization: '福島県',
    type: 'local',
    maxAmount: '最大915万円',
    maxAmountNum: 915,
    category: 'nursing',
    prefecture: '福島県',
    tags: ['福島県', '介護テクノロジー', '介護ロボット', '介護ソフト', '介護事業所'],
    eligibility: '福島県内の介護保険法に基づく指定・許可を受けた介護サービス事業所、養護老人ホーム、軽費老人ホーム等が対象です。',
    targetOccupation: '福島県内の介護サービス事業者等',
    applicationPeriod: '令和8年6月23日から令和8年7月31日17時必着',
    deadlineDate: '2026-07-31',
    description: '福島県が、介護職員の労働負担軽減と作業効率化を目的に、介護テクノロジー導入を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島県介護テクノロジー導入支援事業は、働きやすい職場環境づくりと離職防止のため、介護テクノロジー導入費用を補助し、介護職員の労働負担軽減と作業効率化を図る制度です。</p>'
      },
      {
        heading: '対象経費',
        content: '<p>介護テクノロジー導入支援、介護ソフトの定着促進支援、パッケージ型導入支援、導入支援と一体的に行う業務改善支援などが対象です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助率は5分の4です。介護テクノロジー導入支援等は合計で1法人あたり上限915万円、業務改善支援は1事業所あたり上限48万円です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukushima.lg.jp/sec/21025c/r8kaigorobot.html',
    sourceName: '福島県 令和8年度福島県介護テクノロジー導入支援事業',
    sourceUrls: [
      'https://www.pref.fukushima.lg.jp/sec/21025c/r8kaigorobot.html'
    ],
    sourceNote: '福島県公式ページで令和8年度介護テクノロジー導入支援事業、補助率5分の4、1法人上限915万円、受付期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tochigi-care-technology-support-2026',
    title: '栃木県 介護テクノロジー定着支援事業費補助金',
    organization: '栃木県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '栃木県',
    tags: ['栃木県', '介護テクノロジー', '介護ロボット', '介護ソフト', '介護事業所'],
    eligibility: '栃木県内で介護サービス事業を行い、令和8年度栃木県介護テクノロジー定着支援事業の実施要領に定める要件を満たす事業者が対象です。',
    targetOccupation: '栃木県内の介護サービス事業者等',
    applicationPeriod: '令和8年6月5日から令和8年8月10日まで',
    deadlineDate: '2026-08-10',
    description: '栃木県が、介護現場の生産性向上と職場環境の改善を目的に、介護テクノロジーの導入・定着を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度栃木県介護テクノロジー定着支援事業費補助金は、介護ロボットやICT機器等の介護テクノロジーを導入し、介護現場の業務改善や職員の負担軽減につなげる事業を支援する制度です。</p>'
      },
      {
        heading: '申請前の要件',
        content: '<p>補助金を申請するには、県が案内する令和8年度介護テクノロジー活用支援事業セミナーの視聴が条件とされています。申請時のフォームで視聴状況を確認します。</p>'
      },
      {
        heading: '受付期間',
        content: '<p>受付期間は令和8年6月5日から令和8年8月10日まで、交付決定は令和8年9月中が予定されています。申請は電子申請システムで行います。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tochigi.lg.jp/e03/r8kaigotechnologyhojokin.html',
    sourceName: '栃木県 令和8年度栃木県介護テクノロジー定着支援事業',
    sourceUrls: [
      'https://www.pref.tochigi.lg.jp/e03/r8kaigotechnologyhojokin.html'
    ],
    sourceNote: '栃木県公式ページで令和8年度介護テクノロジー定着支援事業費補助金、申請前セミナー視聴要件、受付期間2026年6月5日から8月10日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gunma-care-technology-support-2026',
    title: '群馬県 介護テクノロジー定着支援事業補助金',
    organization: '群馬県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '群馬県',
    tags: ['群馬県', '介護テクノロジー', '介護ロボット', 'ICT', '介護事業所'],
    eligibility: '群馬県内の介護サービス事業所等を運営し、介護テクノロジーの導入・定着により職場環境改善に取り組む法人が対象です。',
    targetOccupation: '群馬県内の介護サービス事業者等',
    applicationPeriod: '令和8年7月31日まで',
    deadlineDate: '2026-07-31',
    description: '群馬県が、介護サービス事業所等による介護ロボット・ICT機器等の介護テクノロジー導入と定着を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度群馬県介護テクノロジー定着支援事業補助金は、介護現場の生産性向上による職場環境改善のため、介護ロボットやICT機器等の導入・定着に必要な経費の一部を補助する制度です。</p>'
      },
      {
        heading: '申請単位と注意点',
        content: '<p>申請は法人単位で行い、補助金所要額調書や業務改善計画書は事業所ごとに作成します。居宅系サービスでは、令和8年度からケアプランデータ連携システムの連携実績が要件とされています。</p>'
      },
      {
        heading: '募集締切',
        content: '<p>令和8年度の事業募集締切は令和8年7月31日です。申請フォームから提出し、交付要綱、概要資料、補助上限台数の変更資料を確認したうえで申請します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.gunma.jp/site/kaigojinzai/2301.html',
    sourceName: '群馬県 令和8年度群馬県介護テクノロジー定着支援事業',
    sourceUrls: [
      'https://www.pref.gunma.jp/site/kaigojinzai/2301.html'
    ],
    sourceNote: '群馬県公式ページで令和8年度介護テクノロジー定着支援事業補助金、介護ロボット・ICT機器等の導入支援、募集締切2026年7月31日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saitama-care-technology-support-2026',
    title: '埼玉県 介護テクノロジー定着支援事業',
    organization: '埼玉県',
    type: 'local',
    maxAmount: '最大750万円',
    maxAmountNum: 750,
    category: 'nursing',
    prefecture: '埼玉県',
    tags: ['埼玉県', '介護テクノロジー', '介護ロボット', '介護ソフト', '介護事業所'],
    eligibility: '埼玉県内の介護サービス事業者等で、介護テクノロジーの導入により介護従事者の負担軽減や働きやすい職場環境整備に取り組む事業者が対象です。',
    targetOccupation: '埼玉県内の介護サービス事業者等',
    applicationPeriod: '令和8年度事前協議は令和8年7月22日まで',
    deadlineDate: '2026-07-22',
    description: '埼玉県が、介護ロボットやICT機器等の介護テクノロジー導入を支援し、介護従事者の負担軽減と職場定着につなげる制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>埼玉県介護テクノロジー定着支援事業は、介護ロボットやICT機器等の導入費用の一部を助成し、介護従事者の負担軽減、働きやすい職場環境の整備、介護従事者の確保・定着を図る制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助額は所要経費の5分の4または基準額のいずれか低い額です。介護テクノロジー導入支援は1事業所あたり上限500万円、パッケージ型導入支援は1事業所あたり上限750万円です。</p>'
      },
      {
        heading: '事前協議',
        content: '<p>令和8年度の事前協議提出期限は令和8年7月22日です。交付申請は補助内示を受けた事業所のみを対象に、令和8年8月下旬が予定されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.saitama.lg.jp/a0603/kaigo-net/seisansei/r7kaigotec.html',
    sourceName: '埼玉県 介護テクノロジー定着支援事業について',
    sourceUrls: [
      'https://www.pref.saitama.lg.jp/a0603/kaigo-net/seisansei/r7kaigotec.html'
    ],
    sourceNote: '埼玉県公式ページで令和8年度事前協議開始、提出期限2026年7月22日、補助率5分の4、導入支援上限500万円、パッケージ型上限750万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiba-care-technology-support-2026',
    title: '千葉県 介護テクノロジー定着支援事業費補助金',
    organization: '千葉県',
    type: 'local',
    maxAmount: '最大1,015万円',
    maxAmountNum: 1015,
    category: 'nursing',
    prefecture: '千葉県',
    tags: ['千葉県', '介護テクノロジー', '介護ロボット', '介護ソフト', '介護事業所'],
    eligibility: '千葉県内に所在する介護保険法に基づく介護サービス事業所、養護老人ホーム、軽費老人ホーム等が対象です。',
    targetOccupation: '千葉県内の介護サービス事業者・福祉事業者等',
    applicationPeriod: '事前協議は令和8年6月10日から令和8年7月13日17時まで',
    deadlineDate: '2026-07-13',
    description: '千葉県が、令和8年度中に介護テクノロジー機器を導入する介護サービス事業者等に対して、導入費用の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度千葉県介護テクノロジー定着支援事業費補助金は、介護テクノロジー機器の導入により、介護現場の業務効率化や職員の負担軽減を進める事業者を支援する制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>介護テクノロジー等の導入支援は税抜補助対象経費の5分の4を最大補助し、申請上限額は1事業所あたり最大1,000万円です。パッケージ型導入支援で介護ソフトの定着促進支援を併用する場合は上限1,015万円です。</p>'
      },
      {
        heading: '事前協議',
        content: '<p>交付申請前に事前協議が行われます。事前協議の提出期間は令和8年6月10日から令和8年7月13日17時までで、ちば電子申請サービスから法人単位で提出します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.chiba.lg.jp/koufuku/kaigorobot/kaigorobotjyouhou.html',
    sourceName: '千葉県 令和8年度千葉県介護テクノロジー定着支援事業費補助金',
    sourceUrls: [
      'https://www.pref.chiba.lg.jp/koufuku/kaigorobot/kaigorobotjyouhou.html'
    ],
    sourceNote: '千葉県公式ページで令和8年度介護テクノロジー定着支援事業費補助金、対象事業所、補助率5分の4、申請上限1,000万円、パッケージ型上限1,015万円、事前協議期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kanagawa-care-robot-ict-support-2026',
    title: '神奈川県 介護ロボット・ICT導入支援事業費補助金',
    organization: '神奈川県',
    type: 'local',
    maxAmount: '最大1,000万円',
    maxAmountNum: 1000,
    category: 'nursing',
    relatedCategories: ['employment'],
    prefecture: '神奈川県',
    tags: ['神奈川県', '介護ロボット', 'ICT', '介護テクノロジー', '介護事業所'],
    eligibility: '神奈川県内の介護サービス事業所等で、介護ロボット・ICT等を活用して職員の負担軽減や業務改善に取り組む事業者が対象です。',
    targetOccupation: '神奈川県内の介護サービス事業者等',
    applicationPeriod: '令和8年度の補助内容及び申請期間は未定。公式ページで最新情報を確認',
    description: '神奈川県が、介護現場の生産性向上と職員の負担軽減を目的に、介護ロボット・ICT等の導入を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>神奈川県介護ロボット・ICT導入支援事業費補助金は、介護サービス需要の増加と担い手不足に対応するため、介護ロボット、ICT機器、介護テクノロジーの導入を支援する制度です。</p>'
      },
      {
        heading: '補助メニュー',
        content: '<p>介護テクノロジー等の導入支援、介護テクノロジーのパッケージ型導入支援、導入支援と一体的に行う業務支援が案内されています。令和8年度の補助内容と申請期間は公式ページで未定とされています。</p>'
      },
      {
        heading: '補助上限',
        content: '<p>公式ページでは、介護テクノロジー等の導入支援は1事業所あたり上限500万円、パッケージ型導入支援は1事業所あたり上限1,000万円、業務改善支援は1事業所あたり上限48万円と案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kanagawa.jp/docs/u6s/cnt/f420373/p1075201.html',
    sourceName: '神奈川県 介護ロボット・ICT導入支援事業費補助金',
    sourceUrls: [
      'https://www.pref.kanagawa.jp/docs/u6s/cnt/f420373/p1075201.html'
    ],
    sourceNote: '神奈川県公式ページで令和8年度の補助内容及び申請期間は未定、介護テクノロジー等導入支援、パッケージ型導入支援、上限500万円・1,000万円等を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mie-care-technology-support-2026',
    title: '三重県 介護テクノロジー導入支援事業費補助金',
    organization: '三重県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '三重県',
    tags: ['三重県', '介護テクノロジー', '介護ロボット', 'ICT', '介護事業所'],
    eligibility: '三重県内に所在する介護保険法に基づくサービス事業所・施設、養護老人ホーム、軽費老人ホームが対象です。',
    targetOccupation: '三重県内の介護サービス事業者・福祉事業者等',
    applicationPeriod: '令和8年6月1日から令和8年7月6日まで',
    deadlineDate: '2026-07-06',
    description: '三重県が、介護現場の業務改善と職員の負担軽減を目的に、介護テクノロジーの導入を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度三重県介護テクノロジー導入支援事業費補助金は、介護サービス事業所等が介護テクノロジーを導入し、介護現場の生産性向上や職員の負担軽減を進める取組を支援する制度です。</p>'
      },
      {
        heading: '対象事業',
        content: '<p>介護テクノロジー等の導入支援事業、介護テクノロジー等のパッケージ型導入支援事業、導入支援と一体的に行う業務改善支援事業が対象です。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>交付申請の募集期間は令和8年6月1日から令和8年7月6日までです。申請は原則としてLogoフォームから提出し、介護テクノロジー導入支援研修会への参加と調査票回答が補助要件の一つとされています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.mie.lg.jp/CHOJUS/HP/m0072500225.htm',
    sourceName: '三重県 令和8年度三重県介護テクノロジー導入支援事業費補助金',
    sourceUrls: [
      'https://www.pref.mie.lg.jp/CHOJUS/HP/m0072500225.htm'
    ],
    sourceNote: '三重県公式ページで令和8年度介護テクノロジー導入支援事業費補助金、対象事業所、対象事業、募集期間2026年6月1日から7月6日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shizuoka-care-technology-support-2026',
    title: '静岡県 介護テクノロジー定着支援事業費補助金',
    organization: '静岡県',
    type: 'local',
    maxAmount: '詳細公開予定',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '静岡県',
    tags: ['静岡県', '介護テクノロジー', '介護ロボット', 'ICT', '介護事業所'],
    eligibility: '静岡県内の介護サービス事業所等で、令和8年度介護テクノロジー定着支援事業の要件を満たす事業者が対象です。',
    targetOccupation: '静岡県内の介護サービス事業者等',
    applicationPeriod: '令和8年度の提出期間は準備中。公式ページで順次更新',
    description: '静岡県が、介護テクノロジーの導入と定着を通じて、介護現場の業務改善と職員の負担軽減を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度静岡県介護テクノロジー定着支援事業費補助金は、介護テクノロジーの導入・定着を支援する制度です。事業内容は公式ページで順次更新されます。</p>'
      },
      {
        heading: '申請前の確認',
        content: '<p>令和8年度の申請開始にあたり、事業者向け説明会の実施が予定されています。申請する事業所は、補助内容や申請時の注意点を確認するため、説明会への参加が求められています。</p>'
      },
      {
        heading: '手続き',
        content: '<p>交付申請の提出期間と提出書類は準備中です。交付決定通知前に契約や発注を行うと補助対象外になるため、交付決定後に事業へ着手する必要があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shizuoka.jp/kenkofukushi/koreifukushi/kaigohoken/1083217.html',
    sourceName: '静岡県 令和8年度「介護テクノロジー定着支援事業費補助金」',
    sourceUrls: [
      'https://www.pref.shizuoka.jp/kenkofukushi/koreifukushi/kaigohoken/1083217.html'
    ],
    sourceNote: '静岡県公式ページで令和8年度介護テクノロジー定着支援事業費補助金、事業者向け説明会予定、提出期間・提出書類準備中、交付決定前着手不可を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-care-technology-support-2026',
    title: '鹿児島県 介護テクノロジー導入支援事業',
    organization: '鹿児島県',
    type: 'local',
    maxAmount: '詳細公開予定',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '鹿児島県',
    tags: ['鹿児島県', '介護テクノロジー', '介護ロボット', '介護事業所', '研修'],
    eligibility: '鹿児島県内で介護テクノロジー導入支援事業の活用を希望し、国や県が開催する研修受講などの要件を満たす介護事業所等が対象です。',
    targetOccupation: '鹿児島県内の介護サービス事業者等',
    applicationPeriod: '令和8年8月から9月頃に募集開始予定',
    description: '鹿児島県が、介護テクノロジー導入を通じて介護現場の生産性向上と業務改善を支援する事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度鹿児島県介護テクノロジー導入支援事業は、介護テクノロジーの導入により、介護現場の業務改善と生産性向上を進める事業所を支援する制度です。</p>'
      },
      {
        heading: '申請前の要件',
        content: '<p>国や県が開催する研修の受講が要件の一つです。厚生労働省の生産性向上ビギナーセミナーとフォローアップセミナー、または県介護生産性向上総合相談センターが開催する研修の受講が案内されています。</p>'
      },
      {
        heading: '募集予定',
        content: '<p>令和8年度の募集開始は令和8年8月から9月頃の予定です。県は最新情報を公式ページの上部で随時更新すると案内しています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kagoshima.jp/ae05/r8tekunoroji-/r8tekunoroji-.html',
    sourceName: '鹿児島県 【令和8年度】介護テクノロジー導入支援事業について',
    sourceUrls: [
      'https://www.pref.kagoshima.jp/ae05/r8tekunoroji-/r8tekunoroji-.html'
    ],
    sourceNote: '鹿児島県公式ページで令和8年度介護テクノロジー導入支援事業、研修受講要件、令和8年8月から9月頃募集開始予定を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'osaka-care-technology-support-2026',
    title: '大阪府 介護テクノロジー導入支援事業補助金',
    organization: '大阪府',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    relatedCategories: ['employment'],
    prefecture: '大阪府',
    tags: ['大阪府', '介護テクノロジー', '介護ロボット', 'ICT', '事前エントリー'],
    eligibility: '大阪府内の介護サービス等事業所で、介護テクノロジー活用支援セミナー受講などの補助要件を満たす事業者が対象です。',
    targetOccupation: '大阪府内の介護サービス事業者等',
    applicationPeriod: '事前エントリーは令和8年5月25日17時から令和8年7月13日17時まで',
    deadlineDate: '2026-07-13',
    description: '大阪府が、介護現場の職場環境改善と生産性向上を目的に、介護テクノロジー等の導入を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度大阪府介護テクノロジー導入支援事業補助金は、介護人材確保が課題となる中、介護テクノロジー等の導入により職場環境改善や生産性向上を進める事業所を支援する制度です。</p>'
      },
      {
        heading: '事前エントリー制',
        content: '<p>交付申請の前にWebによる事前エントリーが必要です。事前エントリーの総額が府の予算額を上回る場合は、抽選により交付申請の対象事業所を絞り込みます。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>事前エントリー期間は令和8年5月25日17時から令和8年7月13日17時までです。介護テクノロジー活用支援セミナーの受講または視聴がエントリー要件として案内されています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.osaka.lg.jp/o090100/koreishisetsu/kaigo_technology/tech.html',
    sourceName: '大阪府 令和8年度大阪府介護テクノロジー導入支援事業補助金',
    sourceUrls: [
      'https://www.pref.osaka.lg.jp/o090100/koreishisetsu/kaigo_technology/tech.html'
    ],
    sourceNote: '大阪府公式ページで令和8年度介護テクノロジー導入支援事業補助金、事前エントリー制、事前エントリー期間2026年5月25日17時から7月13日17時、セミナー受講要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hyogo-care-technology-support-2026',
    title: '兵庫県 介護業務における介護テクノロジー導入支援事業',
    organization: '兵庫県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '兵庫県',
    tags: ['兵庫県', '介護テクノロジー', '介護ロボット', '介護事業所', '申請見込額調査'],
    eligibility: '兵庫県内で介護サービスを提供する事業所等で、介護テクノロジーの導入により生産性向上と職場環境改善に取り組む事業者が対象です。',
    targetOccupation: '兵庫県内の介護サービス事業者等',
    applicationPeriod: '申請見込額調査の提出期限は令和8年7月6日17時まで',
    deadlineDate: '2026-07-06',
    description: '兵庫県が、介護サービス事業所等の生産性向上と職場環境改善を目的に、介護テクノロジー導入経費の一部を補助する事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度介護業務における介護テクノロジー導入支援事業は、県内介護サービス事業所等の生産性向上による職場環境改善を図るため、介護テクノロジー導入経費の一部を補助する制度です。</p>'
      },
      {
        heading: '申請見込額調査',
        content: '<p>正式な交付申請に先立ち、申請見込額調査を実施しています。申請見込額調査書の提出がない事業所は補助対象外となるため、申請可能性がある事業所は提出が必要です。</p>'
      },
      {
        heading: '提出期限',
        content: '<p>申請見込額調査書の提出期限は令和8年7月6日17時までです。申請には県指定研修の受講等の要件があり、詳細は実施要綱で確認します。</p>'
      }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/kf05/2024_robo_ict_hojo.html',
    sourceName: '兵庫県 令和8年度介護業務における介護テクノロジー導入支援事業の実施',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/kf05/2024_robo_ict_hojo.html'
    ],
    sourceNote: '兵庫県公式ページで令和8年度介護業務における介護テクノロジー導入支援事業、申請見込額調査、提出期限2026年7月6日17時、研修受講要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokushima-care-technology-support-2026',
    title: '徳島県 介護テクノロジー定着支援事業',
    organization: '徳島県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '徳島県',
    tags: ['徳島県', '介護テクノロジー', '要望調査', '介護事業所', 'DX'],
    eligibility: '徳島県内に所在する介護保険法に基づく全サービス提供事業所、養護老人ホーム、軽費老人ホームが対象です。',
    targetOccupation: '徳島県内の介護サービス事業者・福祉事業者等',
    applicationPeriod: '要望調査の提出期限は令和8年7月10日まで',
    deadlineDate: '2026-07-10',
    description: '徳島県が、介護テクノロジー導入と定着により介護現場の業務改善を支援する事業です。交付希望者は要望調査への提出が必要です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度徳島県介護テクノロジー定着支援事業は、県内介護サービス事業所等の申請意向を把握したうえで、介護テクノロジー導入・定着を支援する制度です。</p>'
      },
      {
        heading: '要望調査',
        content: '<p>補助金の交付を希望する場合は、必要書類を提出する必要があります。期日までに提出がない場合、この事業による補助金の交付申請は認められません。</p>'
      },
      {
        heading: '提出期限',
        content: '<p>要望調査の提出期限は令和8年7月10日です。提出書類には要望調査票、申請事業所一覧表、見積書、カタログ、職員勤務表などが含まれます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tokushima.lg.jp/jigyoshanokata/kenko/koreishafukushi/7313113/',
    sourceName: '徳島県 令和8年度「介護テクノロジー定着支援事業」の実施にかかる要望調査',
    sourceUrls: [
      'https://www.pref.tokushima.lg.jp/jigyoshanokata/kenko/koreishafukushi/7313113/'
    ],
    sourceNote: '徳島県公式ページで令和8年度介護テクノロジー定着支援事業、要望調査、対象事業所、提出期限2026年7月10日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tottori-care-technology-support-2026',
    title: '鳥取県 介護テクノロジー定着支援事業補助金',
    organization: '鳥取県',
    type: 'local',
    maxAmount: '最大1,015万円',
    maxAmountNum: 1015,
    category: 'nursing',
    prefecture: '鳥取県',
    tags: ['鳥取県', '介護テクノロジー', '介護ロボット', '介護ソフト', '事前申請'],
    eligibility: '鳥取県内の介護保険法に基づくサービス事業所、養護老人ホーム、軽費老人ホームが対象です。',
    targetOccupation: '鳥取県内の介護サービス事業者・福祉事業者等',
    applicationPeriod: '事前申請は令和8年7月17日まで',
    deadlineDate: '2026-07-17',
    description: '鳥取県が、県内介護サービス事業所等の介護テクノロジー導入・定着を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度鳥取県介護テクノロジー定着支援事業補助金は、介護テクノロジー等の導入支援とパッケージ型導入支援を通じて、介護現場の生産性向上を支援する制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助率は5分の4です。介護テクノロジー等の導入支援は機器種別により基準額が異なり、パッケージ型導入支援は1事業所あたり上限1,000万円です。介護ソフト導入に伴うタブレット端末購入やWi-Fi環境整備がある場合は15万円が加算されます。</p>'
      },
      {
        heading: '事前申請',
        content: '<p>事前申請の提出期限は令和8年7月17日です。事前申請がない場合、本補助金の交付申請を行うことはできません。</p>'
      }
    ],
    officialUrl: 'https://www.pref.tottori.lg.jp/313191.htm',
    sourceName: '鳥取県 令和8年度鳥取県介護テクノロジー定着支援事業補助金',
    sourceUrls: [
      'https://www.pref.tottori.lg.jp/313191.htm'
    ],
    sourceNote: '鳥取県公式ページで令和8年度介護テクノロジー定着支援事業補助金、補助率5分の4、パッケージ型上限1,000万円、15万円加算、事前申請期限2026年7月17日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shimane-care-technology-support-2026',
    title: '島根県 介護テクノロジー定着支援事業費補助金',
    organization: '島根県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '島根県',
    tags: ['島根県', '介護テクノロジー', '介護ロボット', '介護ソフト', '介護事業所'],
    eligibility: '島根県内の介護保険法に基づくサービス事業所、養護老人ホーム、軽費老人ホームが対象です。',
    targetOccupation: '島根県内の介護サービス事業者・福祉事業者等',
    applicationPeriod: '令和8年5月25日から令和8年7月17日まで',
    deadlineDate: '2026-07-17',
    description: '島根県が、介護テクノロジーの導入・定着により介護現場の業務改善を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度島根県介護テクノロジー定着支援事業費補助金は、介護保険法に基づくサービス事業所等を対象に、介護テクノロジー導入・定着に必要な経費を支援する制度です。</p>'
      },
      {
        heading: '対象者と提出書類',
        content: '<p>対象は介護保険法に基づくサービス事業所、養護老人ホーム、軽費老人ホームです。交付申請書、介護テクノロジー導入計画、経費所要額調書、業務改善計画、見積書写しなどを提出します。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>申請受付期間は令和8年5月25日から令和8年7月17日までです。郵送とメールの両方で提出が必要で、メールは7月17日必着とされています。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shimane.lg.jp/medical/fukushi/kourei/kaigo_hoken/hojokin/kaigo-tech.html',
    sourceName: '島根県 令和8年度島根県介護テクノロジー定着支援事業費補助金',
    sourceUrls: [
      'https://www.pref.shimane.lg.jp/medical/fukushi/kourei/kaigo_hoken/hojokin/kaigo-tech.html'
    ],
    sourceNote: '島根県公式ページで令和8年度介護テクノロジー定着支援事業費補助金、対象事業所、申請受付期間2026年5月25日から7月17日、郵送・メール提出を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-care-digital-reform-support-2026',
    title: '長崎県 介護現場デジタル改革推進事業補助金',
    organization: '長崎県',
    type: 'local',
    maxAmount: '最大1,200万円',
    maxAmountNum: 1200,
    category: 'nursing',
    prefecture: '長崎県',
    tags: ['長崎県', '介護テクノロジー', '介護DX', '介護事業所', '業務改善'],
    eligibility: '長崎県内の介護保険法に基づくサービス事業所、養護老人ホーム、軽費老人ホーム等で、補助金種別ごとの要件を満たす事業者が対象です。',
    targetOccupation: '長崎県内の介護サービス事業者・福祉事業者等',
    applicationPeriod: '事業計画の提出期限は令和8年7月31日17時まで',
    deadlineDate: '2026-07-31',
    description: '長崎県が、介護現場のテクノロジー化、介護DX、事業者の業務協働化、経営基盤強化等を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度介護現場デジタル改革推進事業補助金は、質の高い介護サービスの提供と生産性向上のため、介護現場のテクノロジー化や介護DX化、事業者の業務協働化を支援する制度です。</p>'
      },
      {
        heading: '補助メニュー',
        content: '<p>介護テクノロジー普及促進補助金、介護DX化推進補助金、事業者グループ職場環境改善協働実施推進補助金、介護事業者等経営改善支援補助金の4種類があります。</p>'
      },
      {
        heading: '補助上限と提出期限',
        content: '<p>介護テクノロジー普及促進補助金は1事業所あたり上限400万円、介護DX化推進補助金は1事業所または1計画あたり上限1,000万円、事業者グループ職場環境改善協働実施推進補助金は1グループあたり上限1,200万円です。事業計画の提出期限は令和8年7月31日17時です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nagasaki.jp/doc/48428.html',
    sourceName: '長崎県 令和8年度介護現場デジタル改革推進事業補助金',
    sourceUrls: [
      'https://www.pref.nagasaki.jp/doc/48428.html'
    ],
    sourceNote: '長崎県公式ページで令和8年度介護現場デジタル改革推進事業補助金、4種類の補助金、補助率・上限額、事業計画提出期限2026年7月31日17時を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kumamoto-care-technology-support-2026',
    title: '熊本県 介護テクノロジー定着支援事業費補助金',
    organization: '熊本県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '熊本県',
    tags: ['熊本県', '介護テクノロジー', '介護ロボット', 'ICT', '事業計画'],
    eligibility: '熊本県内で介護保険法による指定または許可を受け、介護サービスを提供する介護事業所・介護施設が対象です。',
    targetOccupation: '熊本県内の介護サービス事業者等',
    applicationPeriod: '事業計画の募集期間は令和8年6月22日から令和8年7月21日まで',
    deadlineDate: '2026-07-21',
    description: '熊本県が、介護現場の生産性向上による職場環境改善を目的に、介護テクノロジー等の導入や定着にかかる経費を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度熊本県介護テクノロジー定着支援事業費補助金は、介護テクノロジー等の導入支援、パッケージ型導入支援、導入支援と一体的に行う業務改善支援を対象とする制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助率は5分の4です。補助対象経費に補助率を乗じた額と基準額を比較し、少ない方の額が補助額となります。介護テクノロジー等の導入支援では、利用定員数を2で除した数以内などの補助限度台数があります。</p>'
      },
      {
        heading: '事業計画募集',
        content: '<p>事業計画の募集期間は令和8年6月22日から令和8年7月21日までです。紙媒体と電子データの両方を期限までに提出する必要があります。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kumamoto.jp/soshiki/32/269614.html',
    sourceName: '熊本県 令和8年度介護テクノロジー定着支援事業費補助金',
    sourceUrls: [
      'https://www.pref.kumamoto.jp/soshiki/32/269614.html'
    ],
    sourceNote: '熊本県公式ページで令和8年度介護テクノロジー定着支援事業費補助金、補助率5分の4、対象事業、事業計画募集期間2026年6月22日から7月21日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okinawa-care-technology-support-2026',
    title: '沖縄県 介護テクノロジー定着支援事業補助金',
    organization: '沖縄県',
    type: 'local',
    maxAmount: '最大615万円',
    maxAmountNum: 615,
    category: 'nursing',
    prefecture: '沖縄県',
    tags: ['沖縄県', '介護テクノロジー', '介護ロボット', 'ICT', '事前協議'],
    eligibility: '沖縄県内で介護現場の生産性向上、職員の負担軽減、介護サービスの質向上に取り組む介護事業所が対象です。',
    targetOccupation: '沖縄県内の介護サービス事業者等',
    applicationPeriod: '事前協議は令和8年7月1日から令和8年8月7日まで予定',
    deadlineDate: '2026-08-07',
    description: '沖縄県が、介護現場の生産性向上や職員の負担軽減、働きやすい職場環境づくりを支援するため、介護テクノロジー等の導入経費を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度沖縄県介護テクノロジー定着支援事業補助金は、介護ロボットやICT機器、介護ソフト等を導入する際の経費の一部を補助する制度です。</p>'
      },
      {
        heading: '令和8年度の変更点',
        content: '<p>基本補助率は5分の4へ引き上げられました。単体導入の1事業所あたり上限額は500万円、パッケージ型導入の補助上限額は600万円、定着促進費用を合わせて活用する場合は615万円です。</p>'
      },
      {
        heading: '申請方法と期間',
        content: '<p>令和8年度からオンラインフォームで申請する方式に変更されます。事前協議の受付は令和8年7月1日から令和8年8月7日までの予定です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okinawa.lg.jp/kyoiku/kaigofukushi/1006708/1040463.html',
    sourceName: '沖縄県 令和8年度介護テクノロジー定着支援事業補助金の募集について',
    sourceUrls: [
      'https://www.pref.okinawa.lg.jp/kyoiku/kaigofukushi/1006708/1040463.html'
    ],
    sourceNote: '沖縄県公式ページで令和8年度介護テクノロジー定着支援事業補助金、補助率5分の4、単体導入上限500万円、パッケージ型上限600万円・定着促進併用615万円、事前協議予定期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akita-care-technology-support-2026',
    title: '秋田県 介護テクノロジー活用支援事業費補助金',
    organization: '秋田県',
    type: 'local',
    maxAmount: '最大400万円',
    maxAmountNum: 400,
    category: 'nursing',
    prefecture: '秋田県',
    tags: ['秋田県', '介護テクノロジー', '介護ロボット', 'ICT', '業務改善'],
    eligibility: '秋田県内で介護保険法に基づくサービスを提供する事業所等で、介護テクノロジーの導入により業務効率化や職員の負担軽減に取り組む事業者が対象です。',
    targetOccupation: '秋田県内の介護サービス事業者等',
    applicationPeriod: '事業計画書の提出期間は令和8年6月22日9時から令和8年7月24日17時まで',
    deadlineDate: '2026-07-24',
    description: '秋田県が、介護従事者の負担軽減、業務効率化、生産性向上による職場定着を目的に、介護ロボットやICT機器などの介護テクノロジー導入経費を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度秋田県介護テクノロジー活用支援事業費補助金は、介護ロボットやICT機器といった介護テクノロジーの導入を支援し、介護現場の業務効率化と職員の負担軽減を進める制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助率は5分の4です。導入経費の実支出額に5分の4を乗じた額と、交付要綱別表に示す基準額を比較して少ない方の額が補助額となります。1事業者あたりの補助上限額は400万円です。</p>'
      },
      {
        heading: '申請要件と提出期間',
        content: '<p>県主催セミナーの参加またはオンデマンド視聴、あきた介護業務「カイゼン」サポートセンターへの相談、SECURITY ACTION宣言などが要件です。事業計画書の提出期間は令和8年6月22日9時から令和8年7月24日17時までです。</p>'
      }
    ],
    officialUrl: 'https://www.pref.akita.lg.jp/pages/archive/96091',
    sourceName: '秋田県 令和8年度秋田県介護テクノロジー活用支援事業費補助金',
    sourceUrls: [
      'https://www.pref.akita.lg.jp/pages/archive/96091'
    ],
    sourceNote: '秋田県公式ページで令和8年度介護テクノロジー活用支援事業費補助金、補助率5分の4、1事業者上限400万円、事業計画提出期間2026年6月22日から7月24日17時を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamagata-care-technology-support-2026',
    title: '山形県 介護テクノロジー定着支援事業費補助金',
    organization: '山形県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '山形県',
    tags: ['山形県', '介護テクノロジー', '介護ロボット', 'ICT', '事前協議'],
    eligibility: '山形県内で介護ロボットやICTなどの介護テクノロジーを導入し、介護現場の生産性向上に取り組む介護事業者が対象です。',
    targetOccupation: '山形県内の介護サービス事業者等',
    applicationPeriod: '事前協議の提出期限は令和8年7月9日17時まで',
    deadlineDate: '2026-07-09',
    description: '山形県が、介護現場の業務効率化、職員の負担軽減、働きやすい職場づくりを推進するため、介護テクノロジー導入を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度山形県介護テクノロジー定着支援事業費補助金は、介護ロボットやICTなどの導入を通じて、介護人材の定着、新規参入、介護サービスの質向上を促進する制度です。</p>'
      },
      {
        heading: '事前協議',
        content: '<p>事業の募集にあたり事前協議が実施されています。事前協議書の内容を県が審査し、令和8年8月下旬を目途に結果を通知する予定です。</p>'
      },
      {
        heading: '提出期限',
        content: '<p>事前協議の提出期限は令和8年7月9日17時です。提出物には協議様式、所要額調書、業務改善計画、導入機器のカタログ、見積書の写しなどが含まれます。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamagata.jp/090002/kenfuku/koreisha/jigyosha/kaigorobot_ict/26technology.html',
    sourceName: '山形県 令和8年度山形県介護テクノロジー定着支援事業費補助金',
    sourceUrls: [
      'https://www.pref.yamagata.jp/090002/kenfuku/koreisha/jigyosha/kaigorobot_ict/26technology.html'
    ],
    sourceNote: '山形県公式ページで令和8年度介護テクノロジー定着支援事業費補助金、事前協議、提出期限2026年7月9日17時、説明会受講要件予定を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ibaraki-care-productivity-support-2026',
    title: '茨城県 介護事業所等生産性向上推進事業',
    organization: '茨城県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '茨城県',
    tags: ['茨城県', '介護テクノロジー', '介護ロボット', 'ICT', '生産性向上'],
    eligibility: '茨城県内の介護事業所等で、介護テクノロジー導入等により生産性向上に取り組む事業者が対象です。',
    targetOccupation: '茨城県内の介護サービス事業者等',
    applicationPeriod: '事前協議の受付期間は令和8年4月30日から令和8年6月30日まで',
    deadlineDate: '2026-06-30',
    description: '茨城県が、介護テクノロジーの導入支援を含む介護事業所等の生産性向上を支援する事業です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度の茨城県では、介護事業所等生産性向上推進事業と介護テクノロジー定着支援事業を実施予定です。現在は、介護事業所等生産性向上推進事業の事前協議が受付中です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>交付額は、補助対象経費と交付額の算出方法を定めた別紙基準により算出されます。補助率は5分の4です。</p>'
      },
      {
        heading: '事前協議',
        content: '<p>事前協議の受付期間は令和8年4月30日から令和8年6月30日までです。提出物は所要額調書・実施計画書、見積書写しで、いばらき電子申請・届出サービスから提出します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ibaraki.jp/hokenfukushi/chofuku/shisetsu/kaigorobottodounyuusiennzigyou.html',
    sourceName: '茨城県 介護テクノロジー（介護ロボット・ICT）の導入支援事業について',
    sourceUrls: [
      'https://www.pref.ibaraki.jp/hokenfukushi/chofuku/shisetsu/kaigorobottodounyuusiennzigyou.html'
    ],
    sourceNote: '茨城県公式ページで令和8年度介護事業所等生産性向上推進事業、介護テクノロジー導入支援、補助率5分の4、事前協議期間2026年4月30日から6月30日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hiroshima-care-technology-support-2026',
    title: '広島県 介護テクノロジー定着支援事業補助金',
    organization: '広島県',
    type: 'local',
    maxAmount: '事業区分により異なる',
    maxAmountNum: 0,
    category: 'nursing',
    prefecture: '広島県',
    tags: ['広島県', '介護テクノロジー', '介護ロボット', 'ICT', '研修'],
    eligibility: '広島県内の介護サービス事業所等で、介護テクノロジーの導入・定着により職場環境改善とケアの質向上に取り組む事業者が対象です。',
    targetOccupation: '広島県内の介護サービス事業者等',
    applicationPeriod: '受付期間は令和8年7月13日から令和8年8月7日まで',
    deadlineDate: '2026-08-07',
    description: '広島県が、介護現場の生産性向上による職場環境改善、ケアの質向上、介護の価値向上を目的に、介護テクノロジーの導入・定着を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度広島県介護テクノロジー定着支援事業補助金は、県内介護サービス事業所等に対し、介護テクノロジー導入・定着のための経費を支援する制度です。</p>'
      },
      {
        heading: '申請要件',
        content: '<p>申請にあたっては、県が案内する生産性向上普及促進セミナー、介護テクノロジー定着支援研修会、介護現場の生産性向上と職員定着に関する研修などのうち少なくとも一つを受講する必要があります。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>受付期間は令和8年7月13日から令和8年8月7日までです。補助金交付事務は一般社団法人日本福祉用具供給協会中国支部広島県ブロック事務局が行います。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hiroshima.lg.jp/soshiki/64/kaigotechnology2026.html',
    sourceName: '広島県 令和8年度介護テクノロジー定着支援事業補助金制度',
    sourceUrls: [
      'https://www.pref.hiroshima.lg.jp/soshiki/64/kaigotechnology2026.html'
    ],
    sourceNote: '広島県公式ページで令和8年度介護テクノロジー定着支援事業、研修受講要件、受付期間2026年7月13日から8月7日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ehime-care-technology-support-2026',
    title: '愛媛県 介護テクノロジー定着支援事業費補助金',
    organization: '愛媛県',
    type: 'local',
    maxAmount: '最大1,015万円',
    maxAmountNum: 1015,
    category: 'nursing',
    prefecture: '愛媛県',
    tags: ['愛媛県', '介護テクノロジー', '介護ロボット', '介護ソフト', 'ICT'],
    eligibility: '愛媛県内の介護サービス事業者等で、介護テクノロジー活用により介護従事者の負担軽減と職場環境改善に取り組む法人が対象です。',
    targetOccupation: '愛媛県内の介護サービス事業者等',
    applicationPeriod: '令和8年6月12日から令和8年7月17日まで',
    deadlineDate: '2026-07-17',
    description: '愛媛県が、介護ロボットやICT機器等の介護テクノロジー活用による職員の負担軽減、職場環境改善、介護サービスの質向上を支援する補助金です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>令和8年度愛媛県介護テクノロジー定着支援事業費補助金は、介護テクノロジーの導入や定着に要する経費の一部を補助し、介護従事者の確保と介護サービスの質向上につなげる制度です。</p>'
      },
      {
        heading: '補助額',
        content: '<p>補助率はすべての事業で5分の4です。介護テクノロジー等の導入支援は機器種別により1機器あたり30万円または100万円、介護ソフト等は職員数に応じて100万円から250万円、定着促進費用が含まれる場合は最大265万円です。パッケージ型導入支援は1事業所あたり上限1,000万円、介護ソフトの定着促進費用が含まれる場合は上限1,015万円です。</p>'
      },
      {
        heading: '申請期間',
        content: '<p>申請書受付期間は令和8年6月12日から令和8年7月17日までです。申請は個々の事業所ではなく法人単位で提出します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ehime.jp/page/80580.html',
    sourceName: '愛媛県 介護テクノロジー定着支援事業費補助金',
    sourceUrls: [
      'https://www.pref.ehime.jp/page/80580.html'
    ],
    sourceNote: '愛媛県公式ページで令和8年度介護テクノロジー定着支援事業費補助金、補助率5分の4、パッケージ型上限1,000万円・定着促進併用1,015万円、申請期間2026年6月12日から7月17日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aomori-care-home-renovation-official',
    title: '青森市 介護保険住宅改修費支給',
    organization: '青森市',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '青森県',
    tags: ['青森市', '介護保険', '住宅改修', 'バリアフリー', '高齢者'],
    eligibility: '青森市で要支援・要介護認定を受け、手すりの取り付けや段差解消などの住宅改修が必要な方が対象です。',
    targetOccupation: '青森市内の要支援・要介護認定者',
    applicationPeriod: '改修前と改修後の2回申請。通年で相談・申請可能',
    description: '青森市が、要支援・要介護認定を受けた方の在宅生活を支えるため、手すりの取り付けや段差解消などの住宅改修費を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>青森市の介護保険住宅改修費支給は、要支援・要介護認定を受けた方が、自宅で安全に暮らすために行う住宅改修の費用を支援する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>手すりの取り付け、段差解消、スロープ設置、滑り防止のための床材変更、引き戸などへの取り替え、和式便器から洋式便器への取り替えなどが対象です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>20万円を上限に、改修費用の9割が支給されます。一定以上所得者は8割または7割の支給です。改修前と改修後の2回申請が必要で、受領委任払に対応する事業所を利用する場合は、あらかじめ自己負担分のみで利用できる場合があります。</p>'
      }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/hukushi_kenkou/kaigohoken/1003023/1003027/1003028.html',
    sourceName: '青森市 福祉用具貸与・福祉用具購入・住宅改修の制度',
    sourceUrls: [
      'https://www.city.aomori.aomori.jp/hukushi_kenkou/kaigohoken/1003023/1003027/1003028.html'
    ],
    sourceNote: '青森市公式ページで介護保険住宅改修費支給、対象工事、20万円上限、9割・8割・7割支給、改修前後の申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'niigata-senior-home-reform-support',
    title: '新潟市 高齢者向け住宅リフォーム助成',
    organization: '新潟市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '新潟県',
    tags: ['新潟市', '高齢者', '住宅リフォーム', 'バリアフリー', '介護'],
    eligibility: '新潟市内で、65歳以上かつ介護保険の要介護または要支援の認定を受けた方がいる、世帯員全員の前年収入合計が600万円未満の世帯が対象です。',
    targetOccupation: '新潟市内の要支援・要介護認定を受けた高齢者世帯',
    applicationPeriod: '工事着工の1か月前までに相談。助成決定後に工事着工',
    description: '新潟市が、身体機能の低下した65歳以上の高齢者が自宅で安心して生活できるよう、浴室・トイレ・階段などの改造費用を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者向け住宅リフォーム助成は、身体機能の低下した高齢者が住み慣れた自宅で安心して生活できるよう、住宅のバリアフリー改修費の一部を助成する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>手すりの取り付け、床段差の解消、玄関先から道路までの段差解消、すべり止めや移動円滑化のための床材変更、段差解消のための浴室改修・浴槽の取り替えなどが対象です。助成決定前に着工した工事は対象外です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>生活保護世帯は助成率100%で上限30万円、所得税非課税世帯は助成率75%で上限22.5万円、所得税課税世帯は助成率50%で上限15万円です。1世帯につき1回のみ利用できます。</p>'
      }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/iryo/korei/koreisha-reform.html',
    sourceName: '新潟市 高齢者向け住宅リフォーム助成',
    sourceUrls: [
      'https://www.city.niigata.lg.jp/iryo/korei/koreisha-reform.html'
    ],
    sourceNote: '新潟市公式ページで高齢者向け住宅リフォーム助成、対象者、対象工事、生活保護世帯上限30万円、非課税世帯22.5万円、課税世帯15万円、助成決定前着工不可を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyama-senior-home-renovation-support',
    title: '富山市 ねたきり防止等住宅整備費助成',
    organization: '富山市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'nursing',
    prefecture: '富山県',
    tags: ['富山市', '高齢者', '住宅改修', 'バリアフリー', '非課税世帯'],
    eligibility: '富山市内の65歳以上の高齢者、または同居の親族で市町村民税非課税世帯の方が対象です。',
    targetOccupation: '富山市内の高齢者世帯・同居親族',
    applicationPeriod: '工事着工前に長寿福祉課へ相談・申請',
    description: '富山市が、既存住宅に手すりの設置や段差解消など高齢者向け改造を行う際、工事費の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山市のねたきり防止等住宅整備費助成は、既存住宅を高齢者が暮らしやすい住環境に改造するため、必要な工事費を補助する制度です。</p>'
      },
      {
        heading: '対象者と工事',
        content: '<p>65歳以上の高齢者または同居の親族で、市町村民税非課税世帯の方が対象です。既存住宅への手すり設置、段差の解消など、高齢者向け改造に必要な工事が対象です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>助成対象となる工事費の3分の2が補助され、上限額は50万円です。詳しい対象範囲や申請手続きは、工事着工前に富山市長寿福祉課へ確認します。</p>'
      }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/kurashi/sumai/1010267/1008055.html',
    sourceName: '富山市 住宅支援制度',
    sourceUrls: [
      'https://www.city.toyama.lg.jp/kurashi/sumai/1010267/1008055.html'
    ],
    sourceNote: '富山市公式ページでねたきり防止等住宅整備費助成、65歳以上高齢者等、市町村民税非課税世帯、工事費3分の2、上限50万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukui-senior-home-environment-support',
    title: '福井市 住まい環境整備支援事業',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大80万円',
    maxAmountNum: 80,
    category: 'nursing',
    prefecture: '福井県',
    tags: ['福井市', '高齢者', '住宅改修', 'バリアフリー', '介護'],
    eligibility: '福井市に住所があり在宅で生活する要介護3以上の方、または要介護1・2で車いす利用など一定の要件を満たす方がいる世帯が対象です。世帯の所得要件と市税完納要件があります。',
    targetOccupation: '福井市内の要介護認定を受けた高齢者世帯',
    applicationPeriod: '工事着工前に指定居宅介護支援事業者または地域包括支援センターへ相談して申請',
    description: '福井市が、介護が必要な高齢者の在宅生活を支えるため、廊下・浴室・トイレの改修や段差解消機の設置など住宅環境整備費の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住まい環境整備支援事業は、介護が必要な高齢者が在宅での生活を長く継続できるよう、住宅環境の整備に必要な費用の一部を補助する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>廊下・トイレ・浴室等の拡幅、洗面台や流し台の取替え、階段昇降機や段差解消機の設置、扉の新設、寝室内への便器設置、福祉用具設置のための床・壁補強などが対象です。介護保険給付に該当する工事、新築・増築・賃貸物件は対象外です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>生活保護・市民税非課税世帯は助成率10分の9で上限80万円、合計所得320万円未満の世帯は助成率2分の1で上限40万円、総所得から基礎控除を差し引いた額が600万円未満の世帯は助成率4分の1で上限20万円です。</p>'
      }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/fukusi/kfukusi/ssien/jyukankyo.html',
    sourceName: '福井市 住宅改修費の一部を助成します',
    sourceUrls: [
      'https://www.city.fukui.lg.jp/fukusi/kfukusi/ssien/jyukankyo.html'
    ],
    sourceNote: '福井市公式ページで住まい環境整備支援事業、対象者、対象工事、着工前申請、助成率10分の9・2分の1・4分の1、上限80万円・40万円・20万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kofu-care-home-renovation-support',
    title: '甲府市 介護保険住宅改修費支給',
    organization: '甲府市',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '山梨県',
    tags: ['甲府市', '介護保険', '住宅改修', 'バリアフリー', '高齢者'],
    eligibility: '甲府市で要支援・要介護認定を受け、ケアマネジャー等の意見に基づき手すり設置や段差解消などの住宅改修が必要な方が対象です。',
    targetOccupation: '甲府市内の要支援・要介護認定者',
    applicationPeriod: '工事着工前に長寿介護課へ事前申請。通年で相談・申請可能',
    description: '甲府市が、要支援・要介護認定者の自宅での生活環境を整えるため、手すりの取り付けや段差解消など小規模な住宅改修費を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅改修費支給は、要支援・要介護者が居住する住宅に対し、厚生労働大臣が定める種類の小規模改修を行った場合に費用の一部を支給する介護保険制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>手すりの取り付け、段差の解消、床または通路面の床材変更、引き戸等への扉の取り替え、洋式便器等への便器の取り替えや位置・向きの変更、これらに付帯する工事が対象です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>住宅改修にかかった費用のうち20万円を支給限度基準額として、9割が支給されます。一定以上所得者は8割または7割の支給です。工事着工前の申請がない場合は支給されません。</p>'
      }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/kaigohoken/kenko/fukushi/kaigo/kyufu/jutaku.html',
    sourceName: '甲府市 住宅改修（介護予防含む）',
    sourceUrls: [
      'https://www.city.kofu.yamanashi.jp/kaigohoken/kenko/fukushi/kaigo/kyufu/jutaku.html'
    ],
    sourceNote: '甲府市公式ページで介護保険住宅改修費、対象工事、20万円上限、9割・8割・7割支給、工事着工前申請が必要であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagano-senior-home-renovation-support',
    title: '長野市 要介護被保険者等住宅整備事業',
    organization: '長野市',
    type: 'local',
    maxAmount: '最大63万円',
    maxAmountNum: 63,
    category: 'nursing',
    prefecture: '長野県',
    tags: ['長野市', '高齢者', '住宅整備', '住宅改修', '非課税世帯'],
    eligibility: '長野市で在宅生活している要介護・要支援認定者がいる世帯で、同一住居・同一生計の全員が市町村民税非課税であり、介護保険料の滞納がない場合が対象です。',
    targetOccupation: '長野市内の要介護・要支援認定者世帯',
    applicationPeriod: '工事実施前に交付申請と交付決定が必要。通年で相談・申請可能',
    description: '長野市が、介護が必要な要介護・要支援認定者の自立支援を目的に、住宅整備費の一部を補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>要介護被保険者等住宅整備事業は、介護が必要な要介護・要支援認定者の自立支援を目的とした住宅改修に対して、補助金を交付する制度です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>在宅で生活している要介護・要支援認定者がいる世帯が対象です。同一の住居と生計を一にしている全員の市町村民税が非課税であること、要介護被保険者等が介護保険料を滞納していないことが条件です。</p>'
      },
      {
        heading: '補助額と注意点',
        content: '<p>住宅整備に要する経費の9割が補助され、交付額は補助限度基準額70万円の9割である63万円が上限です。1世帯1回限りで、必ず工事実施前の交付申請と交付決定が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/n101500/contents/p002439.html',
    sourceName: '長野市 要介護被保険者等住宅整備事業',
    sourceUrls: [
      'https://www.city.nagano.nagano.jp/n101500/contents/p002439.html'
    ],
    sourceNote: '長野市公式ページで要介護被保険者等住宅整備事業、非課税世帯要件、介護保険料滞納なし、補助率9割、上限63万円、工事前の交付申請と決定が必要であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kanazawa-senior-home-renovation-support',
    title: '金沢市 要介護高齢者等の生活自立のための住まいづくり助成',
    organization: '金沢市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'nursing',
    prefecture: '石川県',
    tags: ['金沢市', '高齢者', '住宅改修', '住まいづくり', '介護'],
    eligibility: '金沢市内の自宅で生活する要介護高齢者等が、自立した生活をしやすくするために住宅整備を行う世帯が対象です。生活保護等世帯、非課税世帯、一定額以下の所得税課税世帯が対象区分です。',
    targetOccupation: '金沢市内の要介護高齢者等の世帯',
    applicationPeriod: '住宅整備を行う前に申請。年度予算の範囲内で交付',
    description: '金沢市が、要介護高齢者等が自宅で自立した生活を営めるよう、浴室・便所等の増設や改造に要する費用を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>要介護高齢者等の生活自立のための住まいづくり助成は、要介護高齢者等が自宅で自立した生活をしやすくするための住宅整備費を助成する制度です。</p>'
      },
      {
        heading: '対象となる住宅整備',
        content: '<p>要介護高齢者等が居住する住宅で、その方の使用に適する浴室・便所等を増設したり、浴室・便所等を使用しやすいように改造したりする工事が対象です。</p>'
      },
      {
        heading: '助成上限',
        content: '<p>助成金は工事区分ごとの助成率と限度額に基づき算定され、生活保護等世帯は100万円、非課税世帯は70万円、所得税課税世帯は50万円が総額上限です。市税を滞納している世帯は対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.city.kanazawa.ishikawa.jp/reiki/reiki_honbun/a400RG00001114.html',
    sourceName: '金沢市 要介護高齢者等の生活自立のための住まいづくりに関する助成金交付要綱',
    sourceUrls: [
      'https://www.city.kanazawa.ishikawa.jp/reiki/reiki_honbun/a400RG00001114.html'
    ],
    sourceNote: '金沢市公式例規ページで要介護高齢者等の生活自立のための住まいづくり助成、対象世帯、対象工事、生活保護等世帯100万円・非課税世帯70万円・所得税課税世帯50万円の上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gifu-senior-home-improvement-support',
    title: '岐阜市 高齢者住宅改善促進助成制度',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '最大70万円',
    maxAmountNum: 70,
    category: 'nursing',
    prefecture: '岐阜県',
    tags: ['岐阜市', '高齢者', '住宅改善', 'バリアフリー', '非課税世帯'],
    eligibility: '岐阜市に1年以上居住し、市民税非課税世帯で、介護保険の要介護1から5に認定された在宅高齢者などが対象です。',
    targetOccupation: '岐阜市内の要介護認定を受けた高齢者世帯',
    applicationPeriod: '工事着工前に地域包括支援センターへ相談して申請',
    description: '岐阜市が、在宅の高齢者や重度身体障害者の住環境を整え、介護する家族の負担を軽減するため、住宅改善費を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者住宅改善促進助成制度は、在宅の高齢者などに住みよい住環境を提供し、介護する家族の負担を軽減するための住宅改善に必要な費用を助成する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>寝室、浴室、台所、階段、便所、洗面所、玄関、廊下などの設備構造の改善工事、階段昇降機の取り付け、屋外工事などが対象です。新築工事や老朽化に伴う補修、身体状況の改善に関係しない工事は対象外です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>助成限度額は70万円です。介護保険の住宅改修費が支給される場合は、居宅介護住宅改修費の利用可能額を控除して助成額を算定します。申請書類は必ず工事着工前に提出します。</p>'
      }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/kenko/kaigo/1004813/1004824.html',
    sourceName: '岐阜市 高齢者住宅改善促進助成制度',
    sourceUrls: [
      'https://www.city.gifu.lg.jp/kenko/kaigo/1004813/1004824.html'
    ],
    sourceNote: '岐阜市公式ページで高齢者住宅改善促進助成制度、対象世帯、対象工事、助成限度額70万円、介護保険利用可能額控除、工事着工前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagoya-care-home-renovation-support',
    title: '名古屋市 介護保険住宅改修費支給',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '愛知県',
    tags: ['名古屋市', '介護保険', '住宅改修', 'バリアフリー', '高齢者'],
    eligibility: '名古屋市で在宅の要介護・要支援認定を受け、現に居住する住宅で心身や住宅の状況から必要な改修を行う方が対象です。',
    targetOccupation: '名古屋市内の要支援・要介護認定者',
    applicationPeriod: '改修工事に着工する前に区役所または支所へ事前申請',
    description: '名古屋市が、在宅の要介護・要支援者の生活環境を整えるため、手すり設置や床材変更など小規模な住宅改修費を支給する介護保険制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅改修費の支給は、在宅の要介護・要支援者が現に居住する住宅で、手すりの取り付けや床を滑りにくい材料へ変更するなどの小規模改修を行った場合に費用の一部を支給する制度です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>利用限度額は要支援・要介護度に関係なく、居住する住居に対して要介護・要支援者1人あたり20万円です。負担割合に応じ、最大18万円、16万円、14万円が支給されます。</p>'
      },
      {
        heading: '申請の注意点',
        content: '<p>改修工事に着工する前に、区役所または支所への事前申請が必要です。事前申請後に承認通知が届いてから工事に着工し、完了後に支給申請を行います。</p>'
      }
    ],
    officialUrl: 'https://www.city.nagoya.jp/kenkofukushi/koureisha/1016500/1011160/1034412.html',
    sourceName: '名古屋市 住宅改修費の支給',
    sourceUrls: [
      'https://www.city.nagoya.jp/kenkofukushi/koureisha/1016500/1011160/1034412.html'
    ],
    sourceNote: '名古屋市公式ページで介護保険住宅改修費、利用限度額20万円、9割・8割・7割支給、事前申請と承認後着工を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'otsu-care-home-renovation-support',
    title: '大津市 介護保険住宅改修',
    organization: '大津市',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '滋賀県',
    tags: ['大津市', '介護保険', '住宅改修', '介護予防', '高齢者'],
    eligibility: '大津市で要介護・要支援認定を受け、自立支援または介護予防のために住宅改修工事が必要な方が対象です。',
    targetOccupation: '大津市内の要支援・要介護認定者',
    applicationPeriod: '原則として工事前に申請。ケアマネジャーまたはあんしん長寿相談所へ相談',
    description: '大津市が、自立支援や介護予防のための住宅改修工事について、1人あたり20万円を上限に介護保険給付を行う制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>介護保険の住宅改修は、自立支援や介護予防のために必要な住宅改修工事を、負担割合に応じて1割、2割または3割の自己負担で行える制度です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>1人あたり20万円を上限として、負担割合に応じた保険給付を受けられます。転居した場合や要介護度が著しく高くなった場合は、再度支給を受けられる場合があります。</p>'
      },
      {
        heading: '申請の注意点',
        content: '<p>原則として、工事を行う前に申請が必要です。必ずケアマネジャーまたはあんしん長寿相談所へ相談してから手続きを進めます。</p>'
      }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/soshiki/020/1426/g/kaigo/todokede/21617.html',
    sourceName: '大津市 介護保険 住宅改修／福祉用具貸与・購入',
    sourceUrls: [
      'https://www.city.otsu.lg.jp/soshiki/020/1426/g/kaigo/todokede/21617.html'
    ],
    sourceNote: '大津市公式ページで介護保険住宅改修、1人あたり20万円上限、1割・2割・3割自己負担、原則工事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyoto-care-home-renovation-support',
    title: '京都市 住宅改修費の支給（介護保険制度）',
    organization: '京都市',
    type: 'local',
    maxAmount: '最大18万円',
    maxAmountNum: 18,
    category: 'nursing',
    prefecture: '京都府',
    tags: ['京都市', '介護保険', '住宅改修', 'バリアフリー', '高齢者'],
    eligibility: '京都市で要支援・要介護認定を受けた方が住む住宅で、手すり設置や段差解消などの工事を行う場合が対象です。',
    targetOccupation: '京都市内の要支援・要介護認定者',
    applicationPeriod: '工事前に介護認定給付事務センター等へ相談・申請',
    description: '京都市が、要支援・要介護認定者の住まいで手すり設置や段差解消などを行う場合に、介護保険から住宅改修費を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>京都市の住宅改修費の支給は、要支援・要介護認定を受けた方の住まいで、手すり設置や段差解消などの工事を行う場合に介護保険から費用の一部を支給する制度です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>負担割合に応じて、費用の9割、8割または7割が介護保険から支給されます。支給上限は1割負担者18万円、2割負担者16万円、3割負担者14万円です。</p>'
      },
      {
        heading: '関連する制度',
        content: '<p>京都市の住宅助成一覧には、重度障害者住宅環境整備費助成や介護予防安心住まい推進事業も掲載されています。介護保険の住宅改修は、要支援・要介護認定者向けの制度として整理されています。</p>'
      }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/sogo/page/0000246819.html',
    sourceName: '京都市 住宅に関する助成制度',
    sourceUrls: [
      'https://www.city.kyoto.lg.jp/sogo/page/0000246819.html'
    ],
    sourceNote: '京都市公式ページで住宅改修費の支給（介護保険制度）、要支援・要介護認定者、手すり設置・段差解消、9割・8割・7割支給、上限18万円・16万円・14万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nara-care-home-renovation-support',
    title: '奈良市 介護保険住宅改修費支給',
    organization: '奈良市',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '奈良県',
    tags: ['奈良市', '介護保険', '住宅改修', 'バリアフリー', '高齢者'],
    eligibility: '奈良市で介護認定を受けた方が住宅改修を行う場合が対象です。',
    targetOccupation: '奈良市内の要支援・要介護認定者',
    applicationPeriod: '改修工事前と改修工事後にそれぞれ申請が必要',
    description: '奈良市が、介護認定を受けた方の住宅改修について、負担割合に応じて費用の7割から9割を介護保険から支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅改修費支給は、介護認定を受けた人が住宅改修をした場合、負担割合に応じて費用の7割から9割分を介護保険から支給する制度です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>介護度にかかわらず20万円が限度です。支給できるのは、負担割合に応じてその費用の7割から9割分です。</p>'
      },
      {
        heading: '申請の流れ',
        content: '<p>改修工事前と後で、それぞれ申請が必要です。事前申請では承認申請兼事前協議申請書、理由書、見積書、図面、着工前写真などを提出します。</p>'
      }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/site/kaigohoken/8877.html',
    sourceName: '奈良市 住宅改修の手続きについて',
    sourceUrls: [
      'https://www.city.nara.lg.jp/site/kaigohoken/8877.html'
    ],
    sourceNote: '奈良市公式ページで介護保険住宅改修費、20万円上限、7割から9割支給、工事前後の申請が必要であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'wakayama-senior-home-renovation-support',
    title: '和歌山市 高齢者住宅改造助成事業',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大60万円から介護保険適用分を除いた額',
    maxAmountNum: 60,
    category: 'nursing',
    prefecture: '和歌山県',
    tags: ['和歌山市', '高齢者', '住宅改造', 'バリアフリー', '非課税世帯'],
    eligibility: '和歌山市内に居住する65歳以上で、要支援または要介護認定を受け、直近年度の市町村民税が非課税の世帯または生活保護世帯の方が対象です。',
    targetOccupation: '和歌山市内の要支援・要介護認定を受けた高齢者世帯',
    applicationPeriod: '工事着工前に地域包括支援センターへ申請依頼',
    description: '和歌山市が、介護保険の住宅改修費支給制度を補完し、在宅高齢者が居住する住宅を改造するための費用を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者住宅改造助成事業は、介護保険の住宅改修費支給制度を補完し、在宅の高齢者が居住する住宅を改造するために必要な経費を助成する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>トイレ、浴室、玄関、廊下、洗面所、台所などへの手すりやスロープの設置、障害物や段差の解消に伴う改造が対象です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>60万円または助成対象事業の実支出額のいずれか低い額から、介護保険の住宅改修適用分である上限20万円を除いた額をもとに、世帯の課税状況に応じて助成します。生活保護世帯は10分の10、市民税非課税世帯は3分の2です。</p>'
      }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/kurashi/kourei_kaigo/1001096/1006023.html',
    sourceName: '和歌山市 高齢者住宅改造助成事業',
    sourceUrls: [
      'https://www.city.wakayama.wakayama.jp/kurashi/kourei_kaigo/1001096/1006023.html'
    ],
    sourceNote: '和歌山市公式ページで高齢者住宅改造助成事業、対象者、対象工事、60万円から介護保険適用分を除いた額、生活保護10分の10・市民税非課税3分の2、工事着工前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okayama-sukoyaka-home-reform-support',
    title: '岡山市 すこやか住宅リフォーム助成事業',
    organization: '岡山市',
    type: 'local',
    maxAmount: '最大70万円',
    maxAmountNum: 70,
    category: 'nursing',
    prefecture: '岡山県',
    tags: ['岡山市', '高齢者', '住宅リフォーム', 'バリアフリー', '介護'],
    eligibility: '岡山市内に居住し、日常生活に介助を必要とする状態で、介護保険の要介護・要支援認定を受けている方などが対象です。',
    targetOccupation: '岡山市内の要支援・要介護認定者など',
    applicationPeriod: '着工前に管轄の福祉事務所または支所へ相談し、助成決定後に着工',
    description: '岡山市が、身体機能の低下や障害により日常生活に介助が必要な高齢者等が自宅で暮らしやすくなるよう、住宅改造費の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>すこやか住宅リフォーム助成事業は、高齢者や障害者が自宅で暮らしやすい生活ができるよう住宅を改造する場合に、その費用の一部を助成する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>対象者が居住する住宅の浴室、洗面所、便所、玄関、廊下、階段、居室、台所、外部進入路などの改造で、自立の助長や介護者の負担軽減につながる工事が対象です。助成決定前に着手または完了している工事は対象外です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>助成額は70万円を限度とします。介護保険の住宅改修費などを受けることができる場合は助成額から20万円を減額し、その場合は50万円が上限です。負担割合に応じて10分の7から10分の10で助成されます。</p>'
      }
    ],
    officialUrl: 'https://www.city.okayama.jp/kurashi/0000012387.html',
    sourceName: '岡山市 すこやか住宅リフォーム助成事業について',
    sourceUrls: [
      'https://www.city.okayama.jp/kurashi/0000012387.html'
    ],
    sourceNote: '岡山市公式ページですこやか住宅リフォーム助成事業、対象者、対象工事、助成上限70万円、介護保険住宅改修費を受ける場合の上限50万円、着工前相談と助成決定後着工を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamaguchi-care-home-renovation-support',
    title: '山口市 介護保険制度における住宅改修',
    organization: '山口市',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '山口県',
    tags: ['山口市', '介護保険', '住宅改修', 'バリアフリー', '高齢者'],
    eligibility: '山口市で在宅の要介護・要支援認定を受けた方が、介護保険給付対象の住宅改修を行う場合が対象です。',
    targetOccupation: '山口市内の要支援・要介護認定者',
    applicationPeriod: '改修工事前に申請が必要。申請前に工事を行った場合は支給不可',
    description: '山口市が、介護保険の認定を受けている方の住宅改修について、20万円を限度に改修費の7割から9割を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>介護保険制度における住宅改修は、在宅の要介護・要支援認定者が対象の住宅改修を行った場合、20万円を限度に介護保険給付の対象とする制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>手すりの取り付け、段差の解消、滑り防止や移動円滑化のための床・通路面の材料変更、引き戸等への扉の取り替え、洋式便器等への便器の取り替え、これらに付帯して必要な工事が対象です。</p>'
      },
      {
        heading: '支給内容と注意点',
        content: '<p>20万円を限度に、申請により改修費の7割から9割を支給します。改修工事前に申請が必要で、申請より先に工事を行った場合は支給できません。</p>'
      }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/site/korei/3947.html',
    sourceName: '山口市 介護保険制度における住宅改修について',
    sourceUrls: [
      'https://www.city.yamaguchi.lg.jp/site/korei/3947.html'
    ],
    sourceNote: '山口市公式ページで介護保険制度における住宅改修、在宅の要介護・要支援認定者、20万円上限、7割から9割支給、工事前申請が必要であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'takamatsu-care-home-renovation-support',
    title: '高松市 介護保険住宅改修費支給',
    organization: '高松市',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '香川県',
    tags: ['高松市', '介護保険', '住宅改修', 'バリアフリー', '高齢者'],
    eligibility: '高松市で要支援1・2または要介護1から5の認定を受けている在宅の方が対象です。施設介護サービス利用中や入院中の方は原則対象外です。',
    targetOccupation: '高松市内の要支援・要介護認定者',
    applicationPeriod: '工事着工前に介護保険課へ事前申請',
    description: '高松市が、要支援・要介護認定者の住まいで手すり設置や段差解消などを行う場合に、20万円を限度に住宅改修費を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高松市の住宅改修費支給は、要支援・要介護認定を受けた方が、現に居住する住宅で生活環境を整えるための改修を行う場合に介護保険給付を受けられる制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>手すりの取り付け、段差の解消、滑り防止や移動円滑化のための床または通路面の材料変更、引き戸等への扉の取り替え、洋式便器等への便器の取り替え、これらに付帯して必要な工事が対象です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>支給限度基準額は20万円で、住宅改修に要した費用の9割、8割または7割に相当する額が保険給付されます。すでに着工または完了している工事は支給対象になりません。</p>'
      }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/smph/kurashi/kurashi/nenkin/kaigohoken/service_price/shurui/kaishu.html',
    sourceName: '高松市 住宅改修',
    sourceUrls: [
      'https://www.city.takamatsu.kagawa.jp/smph/kurashi/kurashi/nenkin/kaigohoken/service_price/shurui/kaishu.html'
    ],
    sourceNote: '高松市公式ページで介護保険住宅改修、要支援1・2または要介護1から5、対象工事、支給限度基準額20万円、9割・8割・7割給付、事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kochi-senior-home-renovation-support',
    title: '高知市 住宅改造助成事業',
    organization: '高知市',
    type: 'local',
    maxAmount: '最大45万円',
    maxAmountNum: 45,
    category: 'nursing',
    prefecture: '高知県',
    tags: ['高知市', '高齢者', '住宅改造', 'バリアフリー', '介護'],
    eligibility: '高知市で介護保険の要介護認定または要支援認定を受けた方が、介護保険住宅改修の上乗せとして住宅改造を行う場合が対象です。',
    targetOccupation: '高知市内の要支援・要介護認定者',
    applicationPeriod: 'すべての事業で工事前に申請書の提出が必要',
    description: '高知市が、高齢者や障害者が住み慣れた住宅で安心して暮らせるよう、介護保険住宅改修に加えて住宅改造費を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高知市住宅改造助成事業は、介護保険法による住宅改修に上乗せして、高齢者が住み慣れた住宅で安心して生活できるよう住宅改造費を助成する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>介護保険住宅改修では、手すりの取り付け、段差の解消、床材変更、扉の取り替え、洋式便器等への取り替えなどが対象です。住宅改造助成は、これらの制度を利用する方への上乗せ事業として案内されています。</p>'
      },
      {
        heading: '助成額',
        content: '<p>高知市住宅改造助成事業は対象工事上限45万円で、課税世帯は2分の1・上限22万5千円、非課税世帯は3分の2・上限30万円、生活保護等世帯は3分の3・上限45万円です。必ず工事前の申請が必要です。</p>'
      }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/soshiki/60/kourei.html',
    sourceName: '高知市 バリアフリー（高齢者や障害者等が安心して暮らせる居住の確保）',
    sourceUrls: [
      'https://www.city.kochi.kochi.jp/soshiki/60/kourei.html'
    ],
    sourceNote: '高知市公式ページで介護保険住宅改修20万円、高知市住宅改造助成事業、対象工事上限45万円、課税世帯22.5万円・非課税世帯30万円・生活保護等世帯45万円、工事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuoka-senior-home-renovation-support',
    title: '福岡市 住宅改造助成',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'nursing',
    prefecture: '福岡県',
    tags: ['福岡市', '高齢者', '住宅改造', 'バリアフリー', '介護'],
    eligibility: '福岡市内に居住する65歳以上で、要支援1・2または要介護1から5の認定を受け、介護保険料所得段階が第1段階から第8段階の方が対象です。',
    targetOccupation: '福岡市内の要支援・要介護認定を受けた高齢者世帯',
    applicationPeriod: '対象工事に着工する前に各区保健福祉センター福祉・介護保険課等へ申請',
    description: '福岡市が、身体機能の低下した高齢者がいる世帯に対し、住宅を高齢者に適するように改造する費用の一部を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅改造助成は、身体機能の低下した高齢者がいる世帯に対し、住宅を高齢者に適するように改造する場合の費用の一部を助成し、高齢者の自立や介護者の負担軽減を図る制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>玄関・廊下の拡幅、居室の間仕切り変更、階段昇降機、浴槽の取り替え、浴室の拡張、車椅子対応洗面台、通路整備、屋外手すりなど、身体状況に応じて必要な工事が対象です。介護保険住宅改修費の給付対象工事は原則対象外です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>工事に要した額と助成上限額30万円の低い方に、所得段階に応じた助成率を乗じた額が助成されます。助成率は生活保護受給者等100%、市民税世帯非課税90%、本人非課税60%、所得に応じ35%または10%です。</p>'
      }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/fukushi/oldage-welfare/health/00/05/4-010301.html',
    sourceName: '福岡市 住宅改造助成',
    sourceUrls: [
      'https://www.city.fukuoka.lg.jp/fukushi/oldage-welfare/health/00/05/4-010301.html'
    ],
    sourceNote: '福岡市公式ページで住宅改造助成、65歳以上の要支援・要介護認定者、助成上限30万円、所得段階別助成率、事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-chubu-care-home-renovation-support',
    title: '佐賀中部広域連合 介護保険住宅改修費支給',
    organization: '佐賀中部広域連合',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '佐賀県',
    tags: ['佐賀県', '佐賀中部広域連合', '介護保険', '住宅改修', '高齢者'],
    eligibility: '佐賀中部広域連合の介護保険で、要支援1・2または要介護1から5の認定を受け、居住する住宅で自立支援や介護者負担軽減のための住宅改修を行う方が対象です。',
    targetOccupation: '佐賀中部広域連合管内の要支援・要介護認定者',
    applicationPeriod: '着工前に事前申請が必要。事前申請は予約制',
    description: '佐賀中部広域連合が、要支援・要介護認定者の住宅改修について、20万円を限度に負担割合に応じた介護保険給付を行う制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>佐賀中部広域連合の介護保険住宅改修費は、要支援・要介護認定を受けた方が居住する住宅で、自立した生活や介護者の負担軽減のために住宅改修を行う場合に利用できる制度です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>支給限度額は要介護度にかかわらず1人あたり20万円です。負担割合に応じて1割から3割が自己負担となり、介護保険から支給される額は18万円から14万円が上限です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>着工前に事前申請が必要です。担当ケアマネジャーへ相談し、申請書、住宅改修が必要な理由書、見積書、平面図、施工前写真などを用意します。支給方法は償還払いまたは受領委任払いから選べます。</p>'
      }
    ],
    officialUrl: 'https://www.chubu.saga.saga.jp/var/rev0/0005/7804/jutakukaishunituite.pdf',
    sourceName: '佐賀中部広域連合 介護保険住宅改修について',
    sourceUrls: [
      'https://www.chubu.saga.saga.jp/var/rev0/0005/7804/jutakukaishunituite.pdf'
    ],
    sourceNote: '佐賀中部広域連合公式PDFで介護保険住宅改修、要支援1・2または要介護1から5、支給限度額20万円、18万円から14万円上限、着工前事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-care-home-renovation-support',
    title: '大分市 介護保険住宅改修費支給',
    organization: '大分市',
    type: 'local',
    maxAmount: '対象工事20万円まで（自己負担1〜3割）',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '大分県',
    tags: ['大分市', '介護保険', '住宅改修', 'バリアフリー', '高齢者'],
    eligibility: '大分市で要介護・要支援認定を受けている方が、家庭での日常生活に支障があり住宅改修を行う場合が対象です。',
    targetOccupation: '大分市内の要支援・要介護認定者',
    applicationPeriod: '改修前に長寿福祉課へ施工承認申請。改修後に完了届',
    description: '大分市が、要介護者等が手すりの取り付けなどの住宅改修を行った場合に、支給限度基準額20万円の範囲で改修費の7割から9割を支給する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>住宅改修費支給申請は、家庭で日常生活を営むのに支障のある要介護者等が、手すりの取り付けなどの住宅改修を行った場合に介護保険から費用の一部を支給する制度です。</p>'
      },
      {
        heading: '支給内容',
        content: '<p>支給限度基準額20万円の範囲内で、改修費の7割から9割分が償還払いで支給されます。対象者は要介護・要支援の認定を受けている人です。</p>'
      },
      {
        heading: '申請の注意点',
        content: '<p>改修を行う前に、長寿福祉課へ事前の施工承認申請が必要です。改修後は完了届を提出します。まず担当ケアマネジャーに相談してから手続きを進めます。</p>'
      }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/o081/kenko/fukushi/1202970711034.html',
    sourceName: '大分市 住宅改修費支給申請',
    sourceUrls: [
      'https://www.city.oita.oita.jp/o081/kenko/fukushi/1202970711034.html'
    ],
    sourceNote: '大分市公式ページで介護保険住宅改修費、要介護・要支援認定者、支給限度基準額20万円、7割から9割支給、改修前の施工承認申請と改修後の完了届を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyazaki-senior-home-renovation-support',
    title: '宮崎市 高齢者等居宅介護住宅改修補助事業',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'nursing',
    prefecture: '宮崎県',
    tags: ['宮崎市', '高齢者', '住宅改修', 'バリアフリー', '介護'],
    eligibility: '宮崎市内に住所があり、要支援または要介護認定を受けた方で、生計を一にする親族等の所得税額合計が一定以下の世帯が対象です。',
    targetOccupation: '宮崎市内の要支援・要介護認定者世帯',
    applicationPeriod: '介護保険住宅改修と同様に工事着工前の事前申請が必要',
    description: '宮崎市が、介護保険住宅改修の支給限度を超える費用や給付対象外工事費用の一部を、一定所得以下の要支援・要介護認定者世帯に補助する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>高齢者等居宅介護住宅改修補助事業は、介護保険の要支援・要介護認定者で一定所得以下の世帯を対象に、介護保険住宅改修給付対象工事の超過費用や給付対象外工事費用の一部を助成する制度です。</p>'
      },
      {
        heading: '対象工事',
        content: '<p>移動・介護に必要なスペース確保、浴室改修、浴槽取替え、給湯設備、給水栓取替え、手すりの取り付け、段差解消、床材変更、扉の取り替え、洋式便器等への取り替えなどが対象です。要介護度により対象設備が異なります。</p>'
      },
      {
        heading: '補助額',
        content: '<p>対象額は20万円を上限とし、工事種目ごとの限度額があります。補助率は世帯階層に応じて、生活保護世帯10割、市民税非課税・所得税非課税9割、市民税課税・所得税非課税8割、所得税額に応じ7割から4割です。</p>'
      }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/health/long_term_care_insurance/procedure/12333.html',
    sourceName: '宮崎市 住宅改修補助事業（宮崎市高齢者等居宅介護住宅改修補助事業）',
    sourceUrls: [
      'https://www.city.miyazaki.miyazaki.jp/health/long_term_care_insurance/procedure/12333.html',
      'https://www.city.miyazaki.miyazaki.jp/health/long_term_care_insurance/procedure/195414.html'
    ],
    sourceNote: '宮崎市公式ページで高齢者等居宅介護住宅改修補助事業、対象者、対象設備、対象額20万円上限、世帯階層別補助率、工事着工前事前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukui-pregnant-support-benefit-2026',
    title: '福井県 妊婦のための支援給付',
    organization: '福井県',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福井県',
    tags: ['福井県', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '福井県内市町に住民票があり、医療機関で胎児心拍が確認された妊婦が対象です。流産・死産等の場合も条件を満たせば対象です。',
    applicationPeriod: '1回目は妊娠確認後、2回目は出産予定日の8週間前の日から申請・届出',
    description: '福井県内の市町が、妊娠期から出産・子育て期までの伴走型相談支援とあわせて、妊婦支援給付金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月以降、従来の出産・子育て応援交付金に代わり、妊婦のための支援給付として経済的支援と伴走型相談支援を一体的に実施しています。</p>' },
      { heading: '支給内容', content: '<p>1回目は妊婦給付認定後に5万円、2回目は妊娠しているこどもの人数の届出後に、妊娠しているこどもの人数に5万円を乗じた額が支給されます。</p>' },
      { heading: '申請時期', content: '<p>妊婦給付認定申請は医療機関で妊娠が確認された後、胎児の数の届出は出産予定日の8週間前の日から行えます。流産・死産等の場合も医療機関等で確認された日以降に届け出できます。</p>' }
    ],
    officialUrl: 'https://www.pref.fukui.lg.jp/doc/kodomo/syussankosodateouengihuto.html',
    sourceName: '福井県 「妊婦のための支援給付（妊婦支援給付金）」と伴走型相談支援の実施',
    sourceUrls: ['https://www.pref.fukui.lg.jp/doc/kodomo/syussankosodateouengihuto.html'],
    sourceNote: '福井県公式ページで妊婦のための支援給付、対象者、1回目5万円、2回目は胎児数×5万円、申請時期、流産・死産等も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kofu-pregnant-support-benefit-2026',
    title: '甲府市 妊婦支援給付金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '山梨県',
    tags: ['甲府市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '甲府市内に住所があり、産科医療機関で胎児心拍を確認し、他自治体から同制度の給付を受けていない妊婦が対象です。',
    applicationPeriod: '1回目は胎児心拍確認日から2年以内、2回目は出産予定日の8週間前以降に届出',
    description: '甲府市が、妊娠期から子育て期までの相談支援とあわせて、妊娠届出時と胎児の数の届出後に妊婦支援給付金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>すべての妊婦・子育て世帯が安心して出産・子育てできるよう、伴走型の相談支援と経済的支援を一体的に実施しています。</p>' },
      { heading: '支給内容', content: '<p>妊婦給付認定申請による1回目は1回の妊娠につき5万円、胎児の数の届出による2回目は胎児1人につき5万円です。</p>' },
      { heading: '申請方法', content: '<p>1回目は妊娠届出時に申請書を提出します。2回目は出産予定日の8週間前の日以降に、胎児の数の届出書と本人確認書類を提出します。</p>' }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/bosihoken/gift.html',
    sourceName: '甲府市 妊婦等包括相談支援事業及び妊婦のための支援給付事業',
    sourceUrls: ['https://www.city.kofu.yamanashi.jp/bosihoken/gift.html'],
    sourceNote: '甲府市公式ページで妊婦支援給付金、対象者、1回目5万円、2回目は胎児1人につき5万円、申請期間、流産・死産等も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tanabe-pregnant-support-benefit-2026',
    title: '田辺市 妊婦のための支援給付',
    organization: '田辺市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '和歌山県',
    tags: ['田辺市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '田辺市で妊娠届出時や出生後の面談を受け、申請書を提出した妊婦・産婦が対象です。流産・死産・中絶も対象です。',
    applicationPeriod: '1回目は妊娠届出時、2回目は赤ちゃん訪問時に案内',
    description: '田辺市が、妊娠届出時と出生後の面談を通じた相談支援とあわせて、妊婦支援給付金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊娠期から出産、子育てまで一貫して相談に応じる伴走型相談支援と、経済的支援をあわせて実施しています。</p>' },
      { heading: '支給内容', content: '<p>1回目は妊婦1人につき5万円、2回目は胎児の数に5万円を乗じた額です。流産・死産・中絶も対象となります。</p>' },
      { heading: '申請手続き', content: '<p>妊娠届出時と出生後の赤ちゃん訪問時に面談を行い、面談時に申請書提出を案内します。申請書の内容確認後に支給されます。</p>' }
    ],
    officialUrl: 'https://www.city.tanabe.lg.jp/soshiki/hokenfukushi/6/8/1299.html',
    sourceName: '田辺市 妊婦のための支援給付・妊婦等包括相談支援事業',
    sourceUrls: ['https://www.city.tanabe.lg.jp/soshiki/hokenfukushi/6/8/1299.html'],
    sourceNote: '田辺市公式ページで妊婦支援給付金、1回目は妊婦1人5万円、2回目は胎児数×5万円、申請時期、流産・死産・中絶も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okayama-pregnant-support-benefit-2026',
    title: '岡山市 妊婦のための支援給付',
    organization: '岡山市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '岡山県',
    tags: ['岡山市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '岡山市に住民票があり、産科医療機関で胎児心拍が確認された方などが対象です。他自治体で同じ妊娠について申請済みの場合は対象外です。',
    applicationPeriod: '1回目は胎児心拍確認日から産後4か月頃まで、2回目は出産後4か月頃までが目安',
    description: '岡山市が、妊娠期から出産・子育てまでの伴走型相談支援とあわせて、妊婦支援給付金を現金で支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月1日から、妊娠期からの切れ目ない支援として、妊婦等包括相談支援と妊婦支援給付金を組み合わせて実施しています。</p>' },
      { heading: '支給内容', content: '<p>1回目は妊婦1人あたり5万円、2回目は新生児または胎児1人あたり5万円です。胎児心拍確認後の流産・死産・人工妊娠中絶も対象です。</p>' },
      { heading: '申請方法', content: '<p>妊娠中の方はこども家庭センターで面談を受け妊婦認定申請を行います。出産後は出生届出後に胎児の数の届出を行います。</p>' }
    ],
    officialUrl: 'https://www.city.okayama.jp/kurashi/0000046278.html',
    sourceName: '岡山市 妊婦のための支援給付',
    sourceUrls: ['https://www.city.okayama.jp/kurashi/0000046278.html'],
    sourceNote: '岡山市公式ページで妊婦支援給付金、対象者、1回目5万円、2回目は新生児・胎児1人あたり5万円、流産・死産等も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hiroshima-pregnant-support-benefit-2026',
    title: '広島市 妊婦支援給付金',
    organization: '広島市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '広島県',
    tags: ['広島市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '広島市に住民票があり、令和7年4月1日以降に妊娠していて医療機関で胎児心拍が確認された妊婦が対象です。',
    applicationPeriod: '1回目は胎児心拍確認日から2年以内、2回目は出産予定日の8週間前の日から2年以内',
    description: '広島市が、妊婦の産前産後の身体的・精神的・経済的負担を軽減するため、妊婦支援給付金を現金で支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊婦や胎児であるこどもの保健・福祉の向上を目的に、妊婦支援給付金を支給します。</p>' },
      { heading: '支給内容', content: '<p>1回目は妊婦1人につき5万円、2回目は出産予定日の8週間前の日以降に胎児の数1人につき5万円です。振込先は妊婦本人の口座に限られます。</p>' },
      { heading: '申請期限', content: '<p>1回目は胎児の心拍が確認できた日から2年間、2回目は出産予定日の8週間前の日から2年間です。流産や死産等で妊娠が継続しなかった場合も対象となります。</p>' }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/living/kosodate/1003057/1025816/1032170.html',
    sourceName: '広島市 妊婦支援給付金（妊婦のための支援給付）',
    sourceUrls: ['https://www.city.hiroshima.lg.jp/living/kosodate/1003057/1025816/1032170.html'],
    sourceNote: '広島市公式ページで妊婦支援給付金、対象者、1回目5万円、2回目は胎児数×5万円、申請期限、流産・死産等も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamaguchi-pregnant-support-benefit-2026',
    title: '山口市 妊婦支援給付金',
    organization: '山口市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '山口県',
    tags: ['山口市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '申請時点で山口市に住民登録があり、妊婦給付認定や胎児の数の届出を行う妊婦・産婦が対象です。',
    applicationPeriod: '1回目は胎児心拍確認日から2年、2回目は出産予定日の8週間前の日から2年',
    description: '山口市が、令和7年4月1日から妊娠期からの切れ目ない支援として、妊婦支援給付金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊娠期からの切れ目ない支援を行うため、保健師等による面談とあわせて妊婦のための支援給付を実施しています。</p>' },
      { heading: '支給内容', content: '<p>1回目は妊婦1人あたり5万円、2回目は妊娠している子ども1人あたり5万円です。流産・死産・人工妊娠中絶の場合も対象となります。</p>' },
      { heading: '申請方法', content: '<p>妊娠届出時や新生児訪問等で案内文を受け取り、電子申請で申請します。申請者と振込口座は妊婦本人である必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/site/kodomo/173683.html',
    sourceName: '山口市 妊婦支援給付金',
    sourceUrls: ['https://www.city.yamaguchi.lg.jp/site/kodomo/173683.html'],
    sourceNote: '山口市公式ページで妊婦支援給付金、対象者、1回目5万円、2回目は胎児数×5万円、申請期限、流産・死産等も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokushima-pregnant-support-benefit-2026',
    title: '徳島市 妊婦のための支援給付金事業',
    organization: '徳島市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '徳島県',
    tags: ['徳島市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '徳島市に住民票を有する妊婦および産婦等が対象です。流産・死産・人工妊娠中絶等の場合も対象です。',
    applicationPeriod: '1回目は原則妊娠届出日から5か月以内、2回目は原則出生児が5か月に達する日の前日まで',
    description: '徳島市が、妊娠期から出産・子育て期までの切れ目ない相談支援と経済的負担軽減のため、妊婦支援給付金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>子ども・子育て支援法に基づく妊婦のための支援給付金事業として、令和7年4月1日から開始されています。</p>' },
      { heading: '支給内容', content: '<p>徳島市公式の生活ガイドでは、1回目支援給付金が5万円、2回目支援給付金が5万円と案内されています。流産・死産・人工妊娠中絶等の場合も給付対象です。</p>' },
      { heading: '申請期限', content: '<p>1回目は原則として妊娠届出日から5か月以内、2回目は原則として出生児が5か月に達する日の前日までです。</p>' }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/smph/kosodate/ninshin/ninshin_wa/kyuufukinn.html',
    sourceName: '徳島市 妊婦のための支援給付金事業',
    sourceUrls: [
      'https://www.city.tokushima.tokushima.jp/smph/kosodate/ninshin/ninshin_wa/kyuufukinn.html',
      'https://www.city.tokushima.tokushima.jp/multilingual/living_guide_2025.pdf'
    ],
    sourceNote: '徳島市公式ページで対象者と申請締切、徳島市公式生活ガイドPDFで1回目5万円・2回目5万円、流産・死産・人工妊娠中絶等も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kochi-pregnant-support-benefit-2026',
    title: '高知市 妊婦支援給付金',
    organization: '高知市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '高知県',
    tags: ['高知市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '申請時点で高知市に住民票があり、産科医療機関等で妊娠の事実を確認した妊婦が対象です。',
    applicationPeriod: '1回目は胎児心拍確認日から2年、2回目は出産予定日の8週間前の日から2年',
    description: '高知市が、妊婦等包括相談支援事業とあわせて、出産育児関連用品の購入や子育てサービス利用費の負担軽減のため現金を給付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>妊娠時から出産・子育てまで一貫して相談に応じる妊婦等包括相談支援事業とともに、妊婦支援給付金を支給します。</p>' },
      { heading: '支給内容', content: '<p>1回目は5万円、2回目は妊娠したお子さんの人数に5万円を乗じた額です。双子の場合は1回目5万円、2回目10万円で合計15万円となります。</p>' },
      { heading: '申請期限', content: '<p>1回目は妊娠が確定した日から2年間、2回目は出産予定日の8週間前の日から2年間です。流産・死産となった方も条件を満たせば給付対象です。</p>' }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/soshiki/148/ninnpusiennkyuuhukinn.html',
    sourceName: '高知市 妊婦支援給付金',
    sourceUrls: ['https://www.city.kochi.kochi.jp/soshiki/148/ninnpusiennkyuuhukinn.html'],
    sourceNote: '高知市公式ページで妊婦支援給付金、対象者、1回目5万円、2回目は胎児数×5万円、申請期限、流産・死産等も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuoka-pregnant-support-benefit-2026',
    title: '福岡市 妊婦のための支援給付',
    organization: '福岡市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '福岡県',
    tags: ['福岡市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '福岡市に住民票があり、令和7年4月1日以降に妊娠届出・妊婦給付認定を受けた妊婦などが対象です。所得制限はありません。',
    applicationPeriod: '1回目は胎児心拍確認日から2年、2回目は出産予定日の8週間前から2年',
    description: '福岡市が、妊婦の産前産後の身体的・精神的・経済的負担を軽減するため、妊婦支援給付金を現金で支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>子ども・子育て支援法に妊婦のための支援給付が創設されたことに伴い、令和7年4月1日以降に出産された方または出産予定の方を対象に支給されます。</p>' },
      { heading: '支給内容', content: '<p>1回目は妊婦1人につき5万円、2回目は胎児1人につき5万円の現金給付です。出産予定日の8週間前以降に胎児の数の届出を行います。</p>' },
      { heading: '申請期限', content: '<p>1回目は胎児心拍の確認ができた日から2年間、2回目は出産予定日の8週間前から2年間です。流産・死産・人工妊娠中絶等の場合も対象となる場合があります。</p>' }
    ],
    officialUrl: 'https://kodomo.city.fukuoka.lg.jp/info/10580/',
    sourceName: '福岡市 妊婦のための支援給付',
    sourceUrls: ['https://kodomo.city.fukuoka.lg.jp/info/10580/'],
    sourceNote: '福岡市公式子育て情報サイトで妊婦のための支援給付、対象者、1回目5万円、2回目は胎児1人につき5万円、申請期限、流産・死産等も対象となる場合があることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-pregnant-support-benefit-2026',
    title: '長崎市 妊婦支援給付金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '長崎県',
    tags: ['長崎市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '長崎市に住所を有する妊婦で、他自治体で同給付を受けていない方が対象です。流産・死産された方も対象です。',
    applicationPeriod: '1回目は胎児心拍確認日から2年、2回目は出産予定日の8週間前の日から2年',
    description: '長崎市が、妊婦のための支援給付として、妊娠期と出産後に現金を給付し、伴走型相談支援と一体的に実施する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月1日から、イーカオ出産・子育て応援ギフトは子ども・子育て支援法の妊婦のための支援給付へ移行しています。</p>' },
      { heading: '支給内容', content: '<p>イーカオ出産応援ギフトは妊婦1人につき5万円、イーカオ子育て応援ギフトは妊娠したお子さんの数1人につき5万円です。</p>' },
      { heading: '申請と面談', content: '<p>妊娠届出時と出生後の面談で申請案内を受けます。申請期限は1回目が胎児心拍確認日から2年間、2回目が出産予定日の8週間前の日から2年間です。</p>' }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/site/e-kao/50655.html',
    sourceName: '長崎市 イーカオ出産・子育て応援ギフト/伴走型相談支援',
    sourceUrls: ['https://www.city.nagasaki.lg.jp/site/e-kao/50655.html'],
    sourceNote: '長崎市公式子育て応援サイトで令和7年4月以降の妊婦支援給付金、妊婦1人5万円、妊娠した子ども1人につき5万円、申請期限、流産・死産も対象であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyazaki-pregnant-support-benefit-2026',
    title: '宮崎市 妊婦のための支援給付',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '単胎の場合 計10万円',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '宮崎県',
    tags: ['宮崎市', '妊婦支援給付金', '妊娠', '出産', '伴走型相談支援'],
    eligibility: '申請時点で宮崎市に住民票があり、医師により胎児心拍が確認された妊婦、または令和7年4月1日以降に出産した産婦が対象です。',
    applicationPeriod: '1回目は胎児心拍確認日から2年以内、2回目は出産予定日の8週間前から2年以内',
    description: '宮崎市が、妊娠期から出産・子育て期までの伴走型相談支援と一体的に、妊婦のための支援給付を実施する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>令和7年4月1日から、旧出産・子育て応援給付金に代わり、妊婦のための支援給付の制度が開始されています。</p>' },
      { heading: '支給内容', content: '<p>1回目の出産応援給付金は妊婦1人あたり5万円、2回目の子育て応援給付金は妊娠した胎児1人あたり5万円です。</p>' },
      { heading: '申請期限', content: '<p>1回目は医師により胎児心拍が確認された日から2年以内、2回目は出産予定日の8週間前から2年以内です。流産・死産・人工妊娠中絶等の場合も案内があります。</p>' }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/education/allowance/336450.html',
    sourceName: '宮崎市 出産・子育て応援事業について',
    sourceUrls: ['https://www.city.miyazaki.miyazaki.jp/education/allowance/336450.html'],
    sourceNote: '宮崎市公式ページで妊婦のための支援給付、対象者、1回目5万円、2回目は胎児1人につき5万円、申請期限、流産・死産等の場合の案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukushima-child-medical-support-official',
    title: '福島県 子どもの医療費助成',
    organization: '福島県',
    type: 'local',
    maxAmount: '保険診療の自己負担額を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '福島県',
    tags: ['福島県', '子ども医療費', '医療費助成', '18歳年度末', '子育て'],
    eligibility: '18歳に達する年度の3月末日までにある人で、福島県内に住所がある人が対象です。',
    applicationPeriod: '住民登録がある市町村で手続き。通年で利用可能',
    description: '福島県内の全市町村で、18歳以下の子どもが安心して医療を受けられるよう、健康保険適用診療の自己負担額を助成する制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>福島県では、子どもの健康を守り、県内で安心して子どもを生み育てやすい環境づくりを進めるため、県内全市町村で18歳以下の医療費を無料化しています。</p>'
      },
      {
        heading: '対象者',
        content: '<p>18歳に達する年度の3月末日までにある人で、福島県内に住所がある人が対象です。事業の実施主体は市町村のため、住民登録がある市町村で手続きします。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>対象者が健康保険適用の診療を受けた時に支払うべき自己負担額、診療費や入院時食事療養費などが助成対象です。予防接種、薬の容器代、紹介状なし受診時の特定料金など健康保険が適用されないものは対象外です。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukushima.lg.jp/sec/21035a/kodomoiryouhi.html',
    sourceName: '福島県 子どもの医療費助成',
    sourceUrls: ['https://www.pref.fukushima.lg.jp/sec/21035a/kodomoiryouhi.html'],
    sourceNote: '福島県公式ページで県内全市町村の18歳以下医療費無料化、対象者、健康保険適用診療の自己負担額助成、対象外費用、市町村手続きであることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ishikari-wooden-house-earthquake-retrofit-2026',
    title: '石狩市 木造住宅耐震改修費等補助金',
    organization: '石狩市',
    type: 'local',
    maxAmount: '耐震改修 最大116万円',
    maxAmountNum: 116,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '北海道',
    tags: ['石狩市', '耐震改修', '木造住宅', '除却', '地震対策'],
    eligibility: '石狩市内の対象木造住宅で、耐震診断・補強設計・耐震改修・除却などの要件を満たす所有者等が対象です。',
    applicationPeriod: '2026年4月1日から2026年9月30日まで。予算額に達し次第終了',
    deadlineDate: '2026-09-30',
    description: '石狩市が、地震時の住宅被害を減らすため、木造住宅の耐震改修等にかかる費用を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>石狩市木造住宅耐震改修費等補助金は、木造住宅の耐震化を進めるため、耐震改修等にかかった費用の一部を補助する制度です。</p>' },
      { heading: '補助額', content: '<p>耐震改修等にかかった費用の23％以内で、上限は116万円です。千円未満は切り捨てとなります。</p>' },
      { heading: '受付期間', content: '<p>令和8年度の受付期間は2026年4月1日から9月30日までです。予算額に達した場合は期間内でも受付終了となります。</p>' }
    ],
    officialUrl: 'https://www.city.ishikari.hokkaido.jp/kurashi/tochi/1001840/1002663.html',
    sourceName: '石狩市 木造住宅耐震改修費等補助金について',
    sourceUrls: ['https://www.city.ishikari.hokkaido.jp/kurashi/tochi/1001840/1002663.html'],
    sourceNote: '石狩市公式ページで耐震改修等23％以内、上限116万円、受付期間2026年4月1日から9月30日、予算到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aomori-wooden-house-earthquake-retrofit-2026',
    title: '青森県 木造住宅耐震関連事業（補助制度）',
    organization: '青森県',
    type: 'local',
    maxAmount: '市町村制度により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '青森県',
    tags: ['青森県', '耐震診断', '耐震改修', '木造住宅', '地震対策'],
    eligibility: '平成12年以前の旧耐震基準による住宅など、実施市町村が定める要件を満たす木造住宅の所有者等が対象です。',
    applicationPeriod: '市町村により募集時期・条件が異なるため、居住市町村で確認',
    description: '青森県が、市町村と連携して木造住宅の耐震診断・耐震改修を促進する補助制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>青森県では、大規模地震時の建築物崩壊による人的被害を軽減するため、旧耐震基準住宅の耐震化を推進しています。</p>' },
      { heading: '対象制度', content: '<p>住宅・建築物安全ストック形成事業を活用し、実施市町村で木造住宅の耐震診断や耐震改修の補助を利用できます。</p>' },
      { heading: '申請先', content: '<p>募集時期や補助条件は市町村ごとに異なります。県公式ページの市町村一覧を確認し、居住市町村に相談します。</p>' }
    ],
    officialUrl: 'https://www.pref.aomori.lg.jp/soshiki/kendo/kenju/taisixn_hojoseido.html',
    sourceName: '青森県 住宅・建築物の耐震化（補助制度）',
    sourceUrls: ['https://www.pref.aomori.lg.jp/soshiki/kendo/kenju/taisixn_hojoseido.html'],
    sourceNote: '青森県公式ページで木造住宅耐震関連事業、旧耐震基準住宅の耐震化、市町村での耐震診断・耐震改修補助を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iwate-wooden-house-earthquake-retrofit-2026',
    title: '岩手県 耐震対策への補助制度',
    organization: '岩手県',
    type: 'local',
    maxAmount: '耐震改修 最大約100万円',
    maxAmountNum: 100,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '岩手県',
    tags: ['岩手県', '耐震改修', '木造住宅', '耐震相談', '地震対策'],
    eligibility: '昭和56年5月31日以前に着工した木造戸建住宅で、耐震診断により耐震性がないと判断された住宅などが対象です。',
    applicationPeriod: '申請窓口は居住市町村。募集状況は市町村ごとに確認',
    description: '岩手県が、市町村と連携して木造住宅の耐震診断、耐震相談、耐震改修費補助を案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岩手県では、木造住宅の耐震診断や耐震改修費補助、耐震相談員の無料派遣を通じて住宅の地震対策を支援しています。</p>' },
      { heading: '補助額', content: '<p>耐震改修工事にかかる費用の2分の1が補助対象で、上限は約100万円です。市町村により上限が異なる場合があります。</p>' },
      { heading: '申請先', content: '<p>申請窓口は居住市町村です。県公式ページの市町村募集・応募状況を確認してから相談します。</p>' }
    ],
    officialUrl: 'https://www.pref.iwate.jp/kurashikankyou/kenchiku/saigai/mokuzou/1010335.html',
    sourceName: '岩手県 耐震対策への補助制度',
    sourceUrls: ['https://www.pref.iwate.jp/kurashikankyou/kenchiku/saigai/mokuzou/1010335.html'],
    sourceNote: '岩手県公式ページで木造住宅耐震相談支援事業、耐震改修費用2分の1・上限約100万円、対象住宅、申請窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyagi-wooden-house-earthquake-retrofit-2026',
    title: '宮城県 みやぎ方式 木造住宅耐震助成事業',
    organization: '宮城県',
    type: 'local',
    maxAmount: '診断から改修工事まで市町村と連携支援',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '宮城県',
    tags: ['宮城県', '木造住宅', '耐震診断', '耐震改修', '地震対策'],
    eligibility: '宮城県内の旧耐震基準等の木造住宅で、市町村の耐震診断・耐震改修助成要件を満たす住宅所有者等が対象です。',
    applicationPeriod: '市町村により受付期間・件数が異なるため、居住市町村で確認',
    description: '宮城県が、耐震診断から改修工事まで一連で支援する「みやぎ方式」により、木造住宅の耐震化を進める制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宮城県の木造住宅耐震助成事業は、耐震診断から改修工事までを一連の流れで助成する「みやぎ方式」で実施されています。</p>' },
      { heading: '支援の流れ', content: '<p>耐震診断の結果、倒壊する可能性がある住宅について、診断時に改修計画の策定まで行い、耐震改修工事へつなげやすくします。</p>' },
      { heading: '申請先', content: '<p>具体的な助成内容、受付期間、申請書類は市町村ごとに異なります。居住市町村の担当窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.miyagi.jp/soshiki/kentaku/taishinjigyou.html',
    sourceName: '宮城県 「みやぎ方式」による木造住宅耐震助成事業について',
    sourceUrls: ['https://www.pref.miyagi.jp/soshiki/kentaku/taishinjigyou.html'],
    sourceNote: '宮城県公式ページで木造住宅耐震助成事業、耐震診断から改修工事までの「みやぎ方式」、倒壊可能性判定後の改修計画策定を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamagata-wooden-house-earthquake-retrofit-2026',
    title: '山形県 木造住宅の耐震診断・耐震改修・減災対策助成',
    organization: '山形県',
    type: 'local',
    maxAmount: '市町村制度により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '山形県',
    tags: ['山形県', '耐震診断', '耐震改修', '減災対策', '木造住宅'],
    eligibility: '山形県内の木造住宅で、居住市町村が定める耐震診断、耐震改修、減災対策、住替え等の要件を満たす所有者等が対象です。',
    applicationPeriod: '市町村により受付期間・補助内容が異なるため、居住市町村で確認',
    description: '山形県と市町村が、木造住宅の耐震診断、耐震改修、減災対策、住替えを支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>山形県と市町村では、木造住宅の耐震診断、耐震改修、減災対策、耐震性が不十分な住宅からの住替えに対して補助を行っています。</p>' },
      { heading: '申請窓口', content: '<p>県の補助を含め、申請窓口はすべて市町村です。実施市町村一覧を確認し、居住市町村へ相談します。</p>' },
      { heading: '確認するポイント', content: '<p>補助内容、対象住宅、受付期間、予算状況は市町村ごとに異なります。耐震診断や工事契約の前に必ず窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.yamagata.jp/180025/bosai/kochibou/bousaijouhou/jishintsunami/earthquake/shindankaishuu.html',
    sourceName: '山形県 木造住宅の耐震診断・耐震対策に対する補助制度',
    sourceUrls: ['https://www.pref.yamagata.jp/180025/bosai/kochibou/bousaijouhou/jishintsunami/earthquake/shindankaishuu.html'],
    sourceNote: '山形県公式ページで木造住宅の耐震診断、耐震改修、減災対策、住替えへの補助、市町村窓口であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kamisu-wooden-house-earthquake-retrofit-2026',
    title: '神栖市 木造住宅耐震改修促進事業',
    organization: '神栖市',
    type: 'local',
    maxAmount: '耐震補強設計・工事 最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '茨城県',
    tags: ['神栖市', '耐震改修', '木造住宅', '耐震建替え', '地震対策'],
    eligibility: '神栖市内の対象木造住宅で、耐震補強設計・工事または耐震建替え工事の要件を満たす所有者等が対象です。',
    applicationPeriod: '耐震補強設計・工事は2026年4月15日から10月30日まで。耐震建替え工事は2026年4月15日から8月31日まで',
    deadlineDate: '2026-10-30',
    description: '神栖市が、木造住宅の耐震補強設計・工事や耐震建替え工事を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>神栖市木造住宅耐震改修促進事業は、地震時の木造住宅倒壊リスクを下げるため、耐震補強設計・工事や耐震建替え工事を支援する制度です。</p>' },
      { heading: '申請期限', content: '<p>耐震補強設計・工事は2026年4月15日から10月30日まで、耐震建替え工事は2026年4月15日から8月31日までです。予算額に到達した時点で受付終了となります。</p>' },
      { heading: '申請の注意点', content: '<p>補助を受けるには、工事等を実施する前の申請が必要です。交付決定後に契約・工事を開始します。</p>' }
    ],
    officialUrl: 'https://www.city.kamisu.ibaraki.jp/living/1001425/1001426/1001429.html',
    sourceName: '神栖市 木造住宅耐震改修促進事業',
    sourceUrls: ['https://www.city.kamisu.ibaraki.jp/living/1001425/1001426/1001429.html'],
    sourceNote: '神栖市公式ページで耐震補強設計・工事と耐震建替え工事、申請期限、事前申請、予算到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tochigi-house-earthquake-retrofit-2026',
    title: '栃木県 住宅の耐震診断・耐震改修助成事業',
    organization: '栃木県',
    type: 'local',
    maxAmount: 'ブロック塀除却 最大20万円ほか',
    maxAmountNum: 20,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '栃木県',
    tags: ['栃木県', '耐震診断', '耐震改修', 'ブロック塀', '地震対策'],
    eligibility: '栃木県内の民間住宅や危険なブロック塀等で、市町が定める耐震診断・耐震改修・除却等の要件を満たす所有者等が対象です。',
    applicationPeriod: '市町により受付期間・上限額が異なるため、居住市町で確認',
    description: '栃木県と市町が、民間住宅の耐震化や危険なブロック塀等の除却を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>栃木県では、民間住宅の耐震化を促進するため、県と市町が協力して耐震診断、補強計画、耐震改修等の費用を助成しています。</p>' },
      { heading: '主な支援内容', content: '<p>耐震診断士派遣は全市町で実施され、市町が全額費用を負担します。ブロック塀等除却は費用の3分の2、上限20万円として案内されています。</p>' },
      { heading: '申請先', content: '<p>補助限度額や受付期間は市町により異なります。住まいの市町の担当窓口で最新の実施状況を確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.tochigi.lg.jp/h15/town/jyuutaku/kenchiku/jyuutaku_taisinnka.html',
    sourceName: '栃木県 住宅の耐震化について',
    sourceUrls: ['https://www.pref.tochigi.lg.jp/h15/town/jyuutaku/kenchiku/jyuutaku_taisinnka.html'],
    sourceNote: '栃木県公式ページで住宅耐震診断・耐震改修助成、耐震診断士派遣、ブロック塀等除却3分の2・上限20万円、市町窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saitama-building-earthquake-retrofit-support-2026',
    title: '埼玉県 住宅・建築物の耐震診断・耐震改修に関する補助制度',
    organization: '埼玉県',
    type: 'local',
    maxAmount: '制度・市町村により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '埼玉県',
    tags: ['埼玉県', '耐震診断', '耐震改修', '住宅', '建築物'],
    eligibility: '埼玉県内の住宅・建築物で、県または市町村が定める耐震診断・耐震改修等の補助要件を満たす所有者等が対象です。',
    applicationPeriod: '県・市町村の制度ごとに申請時期が異なるため、公式ページと担当窓口で確認',
    description: '埼玉県が、住宅・建築物の耐震診断や耐震改修に関する県内補助制度を案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>埼玉県では、住宅や建築物の耐震診断・耐震改修に関する補助制度を案内し、地震に備えた建築物の安全性向上を促進しています。</p>' },
      { heading: '申請方法', content: '<p>県の補助制度では、交付要領・様式を確認し、必要書類とあわせて埼玉県都市整備部建築安全課へ提出します。市町村制度は各自治体窓口で確認します。</p>' },
      { heading: '確認するポイント', content: '<p>対象建築物、見積書、写真、図面、登記簿謄本など必要書類が制度ごとに定められています。申請前に事前確認を行うと安全です。</p>' }
    ],
    officialUrl: 'https://www.pref.saitama.lg.jp/a1106/shinsai/taishinhojyo.html',
    sourceName: '埼玉県 県内の住宅・建築物の耐震診断・耐震改修に関する補助制度等',
    sourceUrls: ['https://www.pref.saitama.lg.jp/a1106/shinsai/taishinhojyo.html'],
    sourceNote: '埼玉県公式ページで住宅・建築物の耐震診断・耐震改修補助制度、申請先、申請書類、事前確認窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiba-city-wooden-house-earthquake-retrofit-2026',
    title: '千葉市 木造住宅耐震改修補助制度',
    organization: '千葉市',
    type: 'local',
    maxAmount: '耐震改修 最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '千葉県',
    tags: ['千葉市', '耐震改修', '木造住宅', '災害に強いまちづくり', '地震対策'],
    eligibility: '平成12年5月31日以前の耐震基準で建設された木造住宅など、千葉市が定める要件を満たす住宅所有者等が対象です。',
    applicationPeriod: '令和8年度受付期間・募集戸数は耐震トップページで確認',
    description: '千葉市が、安全で災害に強いまちづくりに向け、木造住宅の耐震改修工事費用を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>千葉市木造住宅耐震改修補助制度は、平成12年5月31日以前の耐震基準で建設された木造住宅の耐震改修を支援する制度です。</p>' },
      { heading: '補助額', content: '<p>補助額は工事費の5分の4で、上限は115万円です。二段階耐震改修工事の場合は段階ごとに57.5万円が上限です。</p>' },
      { heading: '申請前の確認', content: '<p>受付期間と募集戸数は耐震トップページで案内されます。工事内容や対象住宅の要件を確認してから申請します。</p>' }
    ],
    officialUrl: 'https://www.city.chiba.jp/toshi/kenchiku/shido/03_kaisyu.html',
    sourceName: '千葉市 令和8年度千葉市木造住宅耐震改修補助制度のご案内',
    sourceUrls: ['https://www.city.chiba.jp/toshi/kenchiku/shido/03_kaisyu.html'],
    sourceNote: '千葉市公式ページで令和8年度制度、平成12年以前の木造住宅、工事費5分の4・上限115万円、二段階改修上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kanagawa-earthquake-retrofit-subsidy-list-2026',
    title: '神奈川県 耐震診断・改修等補助一覧',
    organization: '神奈川県',
    type: 'local',
    maxAmount: '県・市町村制度により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '神奈川県',
    tags: ['神奈川県', '耐震診断', '耐震改修', '住宅', '建築物'],
    eligibility: '神奈川県内の住宅・建築物で、県または市町村の耐震診断・改修等補助制度の要件を満たす所有者等が対象です。',
    applicationPeriod: '制度・市町村ごとに異なるため、県公式一覧と各相談窓口で確認',
    description: '神奈川県が、県および県内市町村の耐震診断・耐震改修等補助制度を一覧で案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>神奈川県は、県内の耐震診断・改修等補助制度について、県制度と市町村制度の情報を一覧で提供しています。</p>' },
      { heading: '対象制度', content: '<p>大規模建築物や沿道建築物の耐震化支援に関する県要綱のほか、県内市町村の耐震診断・改修補助制度を確認できます。</p>' },
      { heading: '確認するポイント', content: '<p>市町村補助の詳細は、県公式ページに掲載された相談窓口で確認します。対象建物や補助額、申請期限は自治体ごとに異なります。</p>' }
    ],
    officialUrl: 'https://www.pref.kanagawa.jp/docs/f7t/cnt/f535202/p1061716.html',
    sourceName: '神奈川県及び県内市町村における耐震診断・改修等補助一覧',
    sourceUrls: ['https://www.pref.kanagawa.jp/docs/f7t/cnt/f535202/p1061716.html'],
    sourceNote: '神奈川県公式ページで県内の耐震診断・改修等補助制度、県要綱、市町村相談窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'niigata-earthquake-resistant-housing-support-2026',
    title: '新潟県 耐震すまいづくり支援事業',
    organization: '新潟県',
    type: 'local',
    maxAmount: '市町村補助要綱により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '新潟県',
    tags: ['新潟県', '耐震診断', '耐震改修', 'ブロック塀', '地震対策'],
    eligibility: '昭和56年5月31日以前に建築された一戸建て木造住宅や、通学路等に面する危険なブロック塀など、市町村が定める要件を満たす所有者等が対象です。',
    applicationPeriod: '市町村により受付期間・補助額が異なるため、所在地の市町村で確認',
    description: '新潟県が、市町村による木造住宅の耐震診断・耐震改修等や危険ブロック塀撤去等を支援する事業です。',
    sections: [
      { heading: '制度の概要', content: '<p>新潟県耐震すまいづくり支援事業は、耐震性の低い住宅の耐震診断・耐震改修等を促進し、大規模地震時の住宅被害を抑えるための制度です。</p>' },
      { heading: '対象内容', content: '<p>木造住宅の耐震診断、耐震改修等に加え、通学路等に面する倒壊または転倒の危険があるブロック塀の撤去等も支援対象として案内されています。</p>' },
      { heading: '申請先', content: '<p>県は市町村が行う事業に補助します。具体的な補助額や申請方法は、住宅またはブロック塀所在地の市町村で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.niigata.lg.jp/sec/jutaku/1356787010851.html',
    sourceName: '新潟県 耐震すまいづくり支援事業について',
    sourceUrls: ['https://www.pref.niigata.lg.jp/sec/jutaku/1356787010851.html'],
    sourceNote: '新潟県公式ページで2026年5月更新、昭和56年以前の木造住宅、耐震診断・耐震改修、危険ブロック塀撤去等支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyama-wooden-house-earthquake-retrofit-2026',
    title: '富山県 木造住宅の耐震診断・耐震改修の支援制度',
    organization: '富山県',
    type: 'local',
    maxAmount: '耐震改修 最大120万円、設計 最大20万円',
    maxAmountNum: 140,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '富山県',
    tags: ['富山県', '耐震診断', '耐震改修', '木造住宅', '地震対策'],
    eligibility: '富山県内の木造住宅で、耐震診断や耐震改修支援の対象要件を満たす住宅所有者等が対象です。',
    applicationPeriod: '申し込み先は住宅所在地の市町村窓口。工事前に必ず相談',
    description: '富山県が、市町村と連携して木造住宅の耐震診断や耐震改修を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>富山県では、木造住宅の耐震診断・耐震改修を支援し、地震時の住宅倒壊リスクの低減を進めています。</p>' },
      { heading: '補助額', content: '<p>耐震改修・部分耐震改修に要する工事費は5分の4、補助限度額は120万円です。設計費は3分の2、補助限度額は20万円です。</p>' },
      { heading: '申請方法', content: '<p>申し込み先は住宅所在地の市町村窓口です。申請者は工事を実施する前に必ず市町村担当窓口へ相談します。</p>' }
    ],
    officialUrl: 'https://www.pref.toyama.jp/1507/bousaianzen/bousai/jishin/kj00002134/kj00002134-001-01.html',
    sourceName: '富山県 木造住宅の耐震診断・耐震改修の支援制度',
    sourceUrls: ['https://www.pref.toyama.jp/1507/bousaianzen/bousai/jishin/kj00002134/kj00002134-001-01.html'],
    sourceNote: '富山県公式ページで耐震改修・部分耐震改修5分の4・上限120万円、設計費3分の2・上限20万円、市町村窓口、工事前相談を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ishikawa-house-earthquake-retrofit-2026',
    title: '石川県 住宅耐震化促進事業',
    organization: '石川県',
    type: 'local',
    maxAmount: '耐震改修 定額210万円',
    maxAmountNum: 210,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '石川県',
    tags: ['石川県', '耐震改修', '被災住宅', '木造住宅', '能登半島地震'],
    eligibility: '石川県内の住宅で、市町の耐震改修補助制度や被災住宅向け耐震化補助の要件を満たす所有者等が対象です。',
    applicationPeriod: '市町により制度改正・受付状況が異なるため、所在地の市町で確認',
    description: '石川県が、市町と連携して住宅の耐震改修や能登半島地震で被災した住宅の耐震化を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>石川県住宅耐震化促進事業は、住宅の耐震化を進め、県民の安全・安心を確保するため、市町と連携して耐震改修を支援する制度です。</p>' },
      { heading: '補助額', content: '<p>令和7年7月から、耐震改修補助費は補強計画を含めて定額210万円に引き上げられています。市町によりさらに手厚い補助がある場合もあります。</p>' },
      { heading: '被災住宅向け支援', content: '<p>令和6年能登半島地震により被災した住宅も補助制度の対象として案内されています。詳細は所在地の市町で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.ishikawa.lg.jp/kenju/taishinportal/taishin_hojo.html',
    sourceName: '石川県 補助制度（石川県住宅耐震化促進事業）',
    sourceUrls: ['https://www.pref.ishikawa.lg.jp/kenju/taishinportal/taishin_hojo.html'],
    sourceNote: '石川県公式ページで住宅耐震化促進事業、令和7年7月から定額210万円、被災住宅向け耐震化補助、市町制度であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukui-city-wooden-house-earthquake-retrofit-2026',
    title: '福井市 一戸建て木造住宅の耐震改修等工事・除却工事補助',
    organization: '福井市',
    type: 'local',
    maxAmount: '耐震改修 最大140万円、高齢者世帯 最大175万円',
    maxAmountNum: 175,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '福井県',
    tags: ['福井市', '耐震改修', '除却', '木造住宅', '地震対策'],
    eligibility: '福井市の耐震診断事業で耐震補強が必要と判定された一戸建て木造住宅の個人所有者等が対象です。',
    applicationPeriod: '令和8年度制度として案内中。工事予定者は早めに市へ相談',
    description: '福井市が、旧耐震基準の一戸建て木造住宅の耐震改修等工事や除却工事を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福井市は、旧耐震基準の住宅の地震被害から人命を守るため、木造住宅の耐震改修等工事や除却工事に対する補助を実施しています。</p>' },
      { heading: '補助額', content: '<p>住宅全体または部分的な耐震改修工事は最大140万円、高齢者世帯は最大175万円として案内されています。</p>' },
      { heading: '申請前の注意', content: '<p>福井市が実施している耐震診断事業の結果、耐震補強が必要と判定された住宅が対象です。工事前に市へ相談します。</p>' }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/kurasi/jutaku/kentikubutu/taisinkaisyu.html',
    sourceName: '福井市 一戸建て木造住宅の耐震改修等工事、除却工事に対する補助制度',
    sourceUrls: ['https://www.city.fukui.lg.jp/kurasi/jutaku/kentikubutu/taisinkaisyu.html'],
    sourceNote: '福井市公式ページで耐震診断事業後の耐震改修等工事、除却工事、最大140万円、高齢者世帯最大175万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chikuma-wooden-house-earthquake-retrofit-2026',
    title: '千曲市 木造住宅耐震改修補助金',
    organization: '千曲市',
    type: 'local',
    maxAmount: '耐震改修 最大115万円、県上乗せ最大50万円',
    maxAmountNum: 165,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '長野県',
    tags: ['千曲市', '耐震改修', '木造住宅', '長野県上乗せ', '地震対策'],
    eligibility: '千曲市内の対象木造住宅に居住する所有者または所有者の親族で、所得要件や耐震改修工事の要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。市窓口で受付状況を確認',
    description: '千曲市が、耐震性のない木造住宅の耐震改修工事を支援し、条件により長野県の上乗せ補助も利用できる制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>千曲市では、耐震性のない木造住宅の耐震改修を促進するため、耐震改修工事費の一部を補助しています。</p>' },
      { heading: '補助額', content: '<p>耐震改修工事に直接かかる費用の5分の4以内、上限115万円が補助されます。総合評点1.0以上となる改修では、長野県の上乗せ補助最大50万円も案内されています。</p>' },
      { heading: '申請前の確認', content: '<p>対象者、所得要件、住宅要件があります。契約・工事前に千曲市の建築担当窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.city.chikuma.lg.jp/soshiki/kenchiku/2/7952.html',
    sourceName: '千曲市 耐震性のない木造住宅の耐震改修をご検討の方へ',
    sourceUrls: ['https://www.city.chikuma.lg.jp/soshiki/kenchiku/2/7952.html'],
    sourceNote: '千曲市公式ページで耐震改修工事費5分の4・上限115万円、長野県上乗せ補助最大50万円、対象者要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gifu-wooden-house-earthquake-retrofit-2026',
    title: '岐阜県 木造住宅耐震改修工事費補助',
    organization: '岐阜県',
    type: 'local',
    maxAmount: '一般補強 最大108.9万円、一部市町村 最大117.5万円',
    maxAmountNum: 117.5,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '岐阜県',
    tags: ['岐阜県', '耐震改修', '木造住宅', '簡易補強', '地震対策'],
    eligibility: '岐阜県内の木造住宅で、市町村の耐震改修補助制度や耐震診断結果等の要件を満たす所有者等が対象です。',
    applicationPeriod: '市町村により受付期間・上限額が異なるため、所在地の市町村で確認',
    description: '岐阜県が、市町村と連携して木造住宅の一般補強や簡易補強による耐震改修工事を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岐阜県では、木造住宅の耐震化を進めるため、市町村を通じて耐震改修工事費の補助を行っています。</p>' },
      { heading: '補助額', content: '<p>一般補強では1戸あたり最大108.9万円の補助が案内されています。一部市町村では最大117.5万円、簡易補強では最大84万円の補助があります。</p>' },
      { heading: '確認するポイント', content: '<p>市町村によって独自制度や補助額が異なります。対象住宅、評点、工事内容を市町村窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.gifu.lg.jp/page/838.html',
    sourceName: '岐阜県 木造住宅（木造住宅に係る住宅耐震改修工事）',
    sourceUrls: ['https://www.pref.gifu.lg.jp/page/838.html'],
    sourceNote: '岐阜県公式ページで一般補強最大108.9万円、一部市町村最大117.5万円、簡易補強最大84万円、市町村差を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shizuoka-prefecture-wooden-house-earthquake-retrofit-2026',
    title: '静岡県 木造住宅耐震補強工事補助',
    organization: '静岡県',
    type: 'local',
    maxAmount: '耐震補強工事 最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '静岡県',
    tags: ['静岡県', '耐震補強', '木造住宅', '市町申請', '地震対策'],
    eligibility: '静岡県内の対象木造住宅に住む方などで、総合評点を1.0以上にする耐震補強工事を行う場合に対象です。',
    applicationPeriod: '市町により受付期間・補助要件が異なるため、居住市町で確認',
    description: '静岡県と市町が、木造住宅の耐震補強工事費等を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>静岡県では、木造住宅の耐震補強工事費等に対して、市町を通じた補助制度を案内しています。</p>' },
      { heading: '補助額', content: '<p>総合評点を1.0以上にする耐震補強工事について、耐震補強工事費等に対して最大115万円の補助が受けられます。</p>' },
      { heading: '申請前の注意', content: '<p>大工等と契約する前に、必ず市町へ補助金を申請します。市町により補助金額、施工者制限、確認方法が異なります。</p>' }
    ],
    officialUrl: 'https://www.pref.shizuoka.jp/kurashikankyo/kenchiku/taishinka/1041569/1041773/1041775/1049098/1041788.html',
    sourceName: '静岡県 耐震補強工事に対する補助',
    sourceUrls: ['https://www.pref.shizuoka.jp/kurashikankyo/kenchiku/taishinka/1041569/1041773/1041775/1049098/1041788.html'],
    sourceNote: '静岡県公式ページで耐震補強工事費等最大115万円、総合評点1.0以上、市町申請、契約前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shiga-wooden-house-earthquake-retrofit-2026',
    title: '滋賀県 木造住宅の耐震診断・耐震改修補助制度',
    organization: '滋賀県',
    type: 'local',
    maxAmount: '耐震改修 最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '滋賀県',
    tags: ['滋賀県', '耐震診断', '耐震改修', '木造住宅', '地震対策'],
    eligibility: '滋賀県内の木造住宅で、市町の耐震診断・耐震改修補助制度、上部構造評点、工事事業者等の要件を満たす所有者等が対象です。',
    applicationPeriod: '市町により制度・受付期間が異なるため、住まいの市町で確認',
    description: '滋賀県が、市町と連携して木造住宅の無料耐震診断や耐震改修工事を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>滋賀県では、木造住宅の耐震診断と耐震改修の補助制度を案内し、市町を通じて住宅の耐震化を進めています。</p>' },
      { heading: '補助額', content: '<p>市町が国総合支援メニューを適用する場合、補助対象経費の80％、上限115万円が案内されています。従来基幹メニューでは23％、上限97.86万円です。</p>' },
      { heading: '申請前の確認', content: '<p>市町により補助制度が異なり、滋賀県木造住宅耐震改修工事事業者登録名簿に記載された事業者による設計・工事監理・施工が求められます。</p>' }
    ],
    officialUrl: 'https://www.pref.shiga.lg.jp/ippan/kendoseibi/zyuutaku/317612.html',
    sourceName: '滋賀県 木造住宅の耐震診断（無料）および耐震改修の補助制度について',
    sourceUrls: ['https://www.pref.shiga.lg.jp/ippan/kendoseibi/zyuutaku/317612.html'],
    sourceNote: '滋賀県公式ページで耐震改修補助80％・上限115万円、従来メニュー上限97.86万円、市町差、登録事業者要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyoto-prefecture-wooden-house-earthquake-retrofit-2026',
    title: '京都府 木造住宅耐震改修等事業費補助',
    organization: '京都府',
    type: 'local',
    maxAmount: '本格改修 最大115万円または140万円',
    maxAmountNum: 140,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '京都府',
    tags: ['京都府', '耐震改修', '木造住宅', '簡易改修', '地震対策'],
    eligibility: '京都府内の木造住宅で、耐震診断結果や市町村の補助要件を満たす所有者等が対象です。',
    applicationPeriod: '市町村により受付期間・補助額が異なるため、所在地の市町村で確認',
    description: '京都府が、市町村と連携して木造住宅の本格耐震改修や簡易耐震改修を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>京都府木造住宅耐震改修等事業費補助は、木造住宅の耐震化を進めるため、本格改修や簡易耐震改修を支援する制度です。</p>' },
      { heading: '補助額', content: '<p>本格改修は耐震改修に要する費用の5分の4以上、最高115万円または多雪区域等で140万円まで補助されます。簡易耐震改修は最高40万円です。</p>' },
      { heading: '確認するポイント', content: '<p>補助額や事業要件は市町村により異なります。対象住宅、評点、改修方法を市町村窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.kyoto.jp/taishin/wkaisyu.html',
    sourceName: '京都府 京都府木造住宅耐震改修等事業費補助について',
    sourceUrls: ['https://www.pref.kyoto.jp/taishin/wkaisyu.html'],
    sourceNote: '京都府公式ページで本格改修の補助率・最高115万円または140万円、簡易耐震改修最高40万円、市町村差を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'amagasaki-house-earthquake-retrofit-2026',
    title: '尼崎市 住宅耐震改修促進事業',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '戸建住宅 工事費補助 最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '兵庫県',
    tags: ['尼崎市', '耐震改修', '住宅', '簡易耐震改修', '地震対策'],
    eligibility: '尼崎市内の住宅で、住宅耐震改修、簡易耐震改修、屋根軽量化等の各補助メニューの要件を満たす所有者等が対象です。',
    applicationPeriod: '2026年4月1日から令和8年度分の受付開始',
    description: '尼崎市が、住宅の耐震改修設計・工事や簡易耐震改修を支援する令和8年度制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>尼崎市住宅耐震改修促進事業は、住宅の耐震化を進めるため、計画策定費補助、工事費補助、簡易耐震改修等を実施する制度です。</p>' },
      { heading: '補助額', content: '<p>令和8年度は補助額の上限が変更され、戸建住宅の住宅耐震改修工事費補助は上限115万円として案内されています。</p>' },
      { heading: '受付開始', content: '<p>令和8年度分は2026年4月1日から受付開始です。補助メニューにより対象工事や必要書類が異なります。</p>' }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/kurashi/bosai_syobo/sonae/077_taishinka/1002264.html',
    sourceName: '尼崎市 住宅耐震改修促進事業について',
    sourceUrls: ['https://www.city.amagasaki.hyogo.jp/kurashi/bosai_syobo/sonae/077_taishinka/1002264.html'],
    sourceNote: '尼崎市公式ページで令和8年度受付開始、住宅耐震改修工事費補助、戸建住宅上限115万円、補助メニュー一覧を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nara-city-wooden-house-earthquake-retrofit-2026',
    title: '奈良市 既存木造住宅耐震改修工事補助金',
    organization: '奈良市',
    type: 'local',
    maxAmount: '耐震改修工事費の一部を補助',
    maxAmountNum: 50,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '奈良県',
    tags: ['奈良市', '耐震改修', '木造住宅', '先着順', '地震対策'],
    eligibility: '奈良市内の既存木造住宅で、耐震改修工事補助金の対象要件を満たす住宅所有者等が対象です。',
    applicationPeriod: '2026年5月18日から2026年11月30日まで。先着順、募集件数に達し次第終了',
    deadlineDate: '2026-11-30',
    description: '奈良市が、既存木造住宅の耐震改修工事を支援する令和8年度の補助制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>奈良市既存木造住宅耐震改修工事補助金は、既存木造住宅の耐震性を高め、地震時の住宅倒壊リスクを下げるための補助制度です。</p>' },
      { heading: '募集期間', content: '<p>令和8年度の募集期間は2026年5月18日から11月30日までです。先着順で受け付け、募集件数に達し次第終了します。</p>' },
      { heading: '申請方法', content: '<p>申請書に必要書類を添付し、建築指導課へ持参して提出します。郵送等での提出はできません。</p>' }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/soshiki/117/8966.html',
    sourceName: '奈良市 既存木造住宅耐震改修工事補助金交付事業（令和8年度）',
    sourceUrls: ['https://www.city.nara.lg.jp/soshiki/117/8966.html'],
    sourceNote: '奈良市公式ページで令和8年度募集期間、先着順、令和9年2月19日までの工事完了・実績報告要件、持参申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tottori-prefecture-earthquake-resistant-town-2026',
    title: '鳥取県 震災に強いまちづくり促進事業',
    organization: '鳥取県',
    type: 'local',
    maxAmount: '耐震改修・耐震ベッド等 10割定額補助',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '鳥取県',
    tags: ['鳥取県', '耐震改修', '耐震ベッド', '耐震シェルター', '地震対策'],
    eligibility: '鳥取県内の住宅・建築物で、市町村が定める耐震改修や耐震ベッド・耐震シェルター設置等の要件を満たす所有者等が対象です。',
    applicationPeriod: '令和8年度から3年間の期間限定。上限・補助内容は市町村で確認',
    description: '鳥取県が、市町村と連携して住宅・建築物の耐震化を支援する震災に強いまちづくり促進事業です。',
    sections: [
      { heading: '制度の概要', content: '<p>鳥取県震災に強いまちづくり促進事業は、住宅・建築物の耐震化を進め、地震被害を減らすための支援制度です。</p>' },
      { heading: '令和8年度からの支援', content: '<p>令和8年度から3年間の期間限定で、耐震改修や耐震ベッド・耐震シェルター設置等に10割定額補助を行うと案内されています。</p>' },
      { heading: '確認するポイント', content: '<p>上限額や補助内容は市町村で異なります。申請前に住宅所在地の市町村窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.tottori.lg.jp/47491.htm',
    sourceName: '鳥取県 住宅・建築物の耐震化（鳥取県震災に強いまちづくり促進事業）',
    sourceUrls: ['https://www.pref.tottori.lg.jp/47491.htm'],
    sourceNote: '鳥取県公式ページで震災に強いまちづくり促進事業、令和8年度から3年間、耐震改修・耐震ベッド等10割定額補助、市町村差を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'matsue-wooden-house-earthquake-retrofit-2026',
    title: '松江市 木造住宅耐震改修補助事業',
    organization: '松江市',
    type: 'local',
    maxAmount: '耐震改修 最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '島根県',
    tags: ['松江市', '耐震改修', '除却', '木造住宅', '地震対策'],
    eligibility: '松江市内の対象木造住宅で、耐震改修、解体除却、耐震補強等計画の要件を満たす所有者等が対象です。',
    applicationPeriod: '令和8年度制度として案内中。申請前に市へ確認',
    description: '松江市が、木造住宅の耐震改修工事、解体除却工事、耐震補強等計画を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>松江市木造住宅耐震改修補助事業は、地震時の住宅倒壊被害を減らすため、木造住宅の耐震改修や除却等を支援する制度です。</p>' },
      { heading: '補助額', content: '<p>中心市街地細街路沿線の木造住宅では耐震改修工事の上限100万円、それ以外の木造住宅では上限75万円が案内されています。</p>' },
      { heading: 'その他の支援', content: '<p>解体除却工事や耐震補強等計画も補助対象です。対象区域や工事内容により上限額が異なります。</p>' }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/soshikikarasagasu/toshiseibibu_kenchikusinsaka/kenchiku/8/2/1/676.html',
    sourceName: '松江市 木造住宅耐震改修補助事業',
    sourceUrls: ['https://www.city.matsue.lg.jp/soshikikarasagasu/toshiseibibu_kenchikusinsaka/kenchiku/8/2/1/676.html'],
    sourceNote: '松江市公式ページで耐震改修上限100万円または75万円、解体除却、耐震補強等計画上限40万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okayama-city-wooden-house-earthquake-retrofit-2026',
    title: '岡山市 木造住宅耐震診断・耐震改修補助制度',
    organization: '岡山市',
    type: 'local',
    maxAmount: '耐震診断 補助8万円ほか',
    maxAmountNum: 8,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '岡山県',
    tags: ['岡山市', '耐震診断', '耐震改修', '木造住宅', '地震対策'],
    eligibility: '岡山市内の対象木造住宅で、耐震診断や耐震改修等の補助制度の要件を満たす所有者等が対象です。',
    applicationPeriod: '事前相談のうえ申請。受付状況は岡山市建築指導課で確認',
    description: '岡山市が、木造住宅の耐震診断や耐震改修を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岡山市の木造住宅耐震診断・耐震改修補助制度は、旧耐震基準等の木造住宅の安全性確認と耐震化を支援する制度です。</p>' },
      { heading: '耐震診断', content: '<p>耐震診断経費は1棟あたり9万円で、そのうち8万円が補助され、自己負担は1万円です。延べ床面積により診断経費が変わる場合があります。</p>' },
      { heading: '申請前の確認', content: '<p>申請前に岡山市建築指導課・建築安全推進係へ相談します。耐震改修等の詳細要件も窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.city.okayama.jp/jigyosha/0000006054.html',
    sourceName: '岡山市 木造住宅の耐震診断・耐震改修補助制度について',
    sourceUrls: ['https://www.city.okayama.jp/jigyosha/0000006054.html'],
    sourceNote: '岡山市公式ページで木造住宅耐震診断、診断経費9万円・補助8万円、事前相談、建築指導課窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hiroshima-prefecture-house-earthquake-support-2026',
    title: '広島県 住宅耐震化促進支援制度',
    organization: '広島県',
    type: 'local',
    maxAmount: '市町制度により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '広島県',
    tags: ['広島県', '耐震化', '木造住宅', '市町補助', '地震対策'],
    eligibility: '広島県内の住宅で、県や市町が定める耐震化支援制度の対象区域・住宅要件を満たす所有者等が対象です。',
    applicationPeriod: '市町により受付期間・補助内容が異なるため、所在地の市町で確認',
    description: '広島県が、市町と連携し、住宅の耐震化に向けた補助制度による財政支援を行う制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>広島県住宅耐震化促進支援制度は、住宅の耐震化に向け、県と市町が役割に応じて財政支援を行う制度です。</p>' },
      { heading: '支援の考え方', content: '<p>県は持続可能なまちづくりの観点から、補助対象区域を限定し居住誘導を図るなど、県施策の推進に資する耐震化支援制度を運用する市町へ支援します。</p>' },
      { heading: '申請先', content: '<p>具体的な補助対象、上限額、受付期間は市町ごとに異なります。住宅所在地の市町窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.hiroshima.lg.jp/site/taishin-madoguchi/taishinhojo-jyutaku.html',
    sourceName: '広島県 住宅耐震化促進支援制度',
    sourceUrls: ['https://www.pref.hiroshima.lg.jp/site/taishin-madoguchi/taishinhojo-jyutaku.html'],
    sourceNote: '広島県公式ページで住宅耐震化促進支援制度、県と市町の役割、補助対象区域・市町支援の考え方を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamaguchi-earthquake-diagnosis-retrofit-support-2026',
    title: '山口県 耐震診断・耐震改修に関する補助制度',
    organization: '山口県',
    type: 'local',
    maxAmount: '木造住宅耐震診断員無料派遣ほか',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '山口県',
    tags: ['山口県', '耐震診断', '耐震改修', '木造住宅', '地震対策'],
    eligibility: '山口県内の一戸建て木造住宅、共同住宅、沿道建築物等で、市町の補助制度要件を満たす所有者等が対象です。',
    applicationPeriod: '市町により受付期間・補助限度額が異なるため、所在地の市町で確認',
    description: '山口県が、市町の耐震診断・耐震改修補助制度を一覧で案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>山口県では、住宅や建築物の耐震診断・耐震改修に関する補助制度を市町ごとに案内しています。</p>' },
      { heading: '耐震診断', content: '<p>一戸建て木造住宅では、山口市以外の18市町で耐震診断員の無料派遣制度、山口市では耐震診断費用補助が案内されています。</p>' },
      { heading: '確認するポイント', content: '<p>共同住宅や緊急輸送道路沿道建築物なども補助対象に含まれます。補助率・限度額は市町により異なります。</p>' }
    ],
    officialUrl: 'https://www.pref.yamaguchi.lg.jp/soshiki/135/24284.html',
    sourceName: '山口県 耐震診断・耐震改修に関する補助制度について',
    sourceUrls: ['https://www.pref.yamaguchi.lg.jp/soshiki/135/24284.html'],
    sourceNote: '山口県公式ページで一戸建て木造住宅の耐震診断員無料派遣、山口市の診断費補助、共同住宅等の補助制度、市町差を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagawa-private-house-earthquake-support-2026',
    title: '香川県 民間住宅耐震対策支援事業',
    organization: '香川県',
    type: 'local',
    maxAmount: '本格耐震改修 最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '香川県',
    tags: ['香川県', '耐震診断', '耐震改修', '耐震シェルター', '地震対策'],
    eligibility: '昭和56年5月以前に建てられた住宅など、香川県内市町の耐震診断・耐震改修補助制度の要件を満たす所有者等が対象です。',
    applicationPeriod: '補助前に市町へ相談。市町により補助内容・受付期間が異なる',
    description: '香川県が、市町を通じて民間住宅の耐震診断、本格耐震改修、簡易耐震改修、耐震シェルター等を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>香川県民間住宅耐震対策支援事業は、旧耐震基準の住宅を対象に、耐震診断や耐震改修等を支援する制度です。</p>' },
      { heading: '補助額', content: '<p>耐震診断は自己負担2,000円、本格的な耐震改修は115万円まで全額補助、簡易な耐震改修は57.5万円まで全額補助として案内されています。</p>' },
      { heading: '申請前の注意', content: '<p>補助を受けるには、耐震診断・耐震改修の前に交付申請が必要です。まず住まいの市町に相談します。</p>' }
    ],
    officialUrl: 'https://jutakutaishin.pref.kagawa.lg.jp/kjs/subsidy.html',
    sourceName: '香川県住宅耐震ポータルサイト 補助制度について',
    sourceUrls: ['https://jutakutaishin.pref.kagawa.lg.jp/kjs/subsidy.html'],
    sourceNote: '香川県住宅耐震ポータルで令和8年4月1日以降の補助、耐震診断自己負担2,000円、本格改修115万円、簡易改修57.5万円、市町相談を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ehime-wooden-house-earthquake-support-2026',
    title: '愛媛県 木造住宅耐震化補助制度',
    organization: '愛媛県',
    type: 'local',
    maxAmount: '市町制度により異なる',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '愛媛県',
    tags: ['愛媛県', '耐震診断', '耐震改修', '木造住宅', '地震対策'],
    eligibility: '愛媛県内の木造住宅で、市町が実施する耐震診断・耐震改修補助事業の要件を満たす建築主等が対象です。',
    applicationPeriod: '市町により受付期間・補助内容が異なるため、所在地の市町で確認',
    description: '愛媛県が、市町の木造住宅耐震診断補助事業・耐震改修補助事業を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>愛媛県では、市町や建築関係団体と連携し、木造住宅の耐震診断・耐震改修を促進する支援体制を整えています。</p>' },
      { heading: '県内の支援体制', content: '<p>県内全市町で木造住宅耐震診断補助事業が実施され、市町が行う木造住宅耐震改修補助事業に対して県が支援しています。</p>' },
      { heading: '確認するポイント', content: '<p>補助額や対象住宅、申請時期は市町ごとに異なります。住宅所在地の市町窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.pref.ehime.jp/site/mokutaishin/2030.html',
    sourceName: '愛媛県 木造住宅耐震化補助制度等',
    sourceUrls: ['https://www.pref.ehime.jp/site/mokutaishin/2030.html'],
    sourceNote: '愛媛県公式ページで県内全市町の木造住宅耐震診断補助事業、市町の耐震改修補助事業への県支援、耐震化支援体制を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kochi-city-house-earthquake-retrofit-2026',
    title: '高知市 住宅耐震改修費等補助金',
    organization: '高知市',
    type: 'local',
    maxAmount: '耐震改修 最大125万円',
    maxAmountNum: 125,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '高知県',
    tags: ['高知市', '耐震改修', '住宅', '技術審査', '地震対策'],
    eligibility: '高知市内の住宅で、耐震診断・設計・工事の各補助メニューの要件を満たす所有者等が対象です。',
    applicationPeriod: '令和8年度制度として案内中。制度変更後の様式・提出時期を確認',
    description: '高知市が、住宅の耐震改修設計・工事を支援する令和8年度の補助制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高知市住宅耐震改修費等補助金は、住宅の耐震改修を促進し、地震時の倒壊被害を減らすための補助制度です。</p>' },
      { heading: '令和8年度の変更', content: '<p>令和8年4月から工事費補助の計算方法が工事費の80％となり、補助上限は125万円、法人は100万円として案内されています。</p>' },
      { heading: '申請前の確認', content: '<p>令和8年度から制度内容や様式、書類提出のタイミングが変更されています。公式マニュアルを確認してから申請します。</p>' }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/soshiki/58/whtaishinkaisyu2905.html',
    sourceName: '高知市 住宅耐震改修費等補助金交付事業',
    sourceUrls: ['https://www.city.kochi.kochi.jp/soshiki/58/whtaishinkaisyu2905.html'],
    sourceNote: '高知市公式ページで令和8年度変更、工事費80％、補助上限125万円、法人100万円、技術審査と様式変更を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'munakata-wooden-house-earthquake-retrofit-2026',
    title: '宗像市 木造住宅耐震改修工事費用補助金',
    organization: '宗像市',
    type: 'local',
    maxAmount: '市内業者 上限80万円、市外業者 上限60万円',
    maxAmountNum: 80,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '福岡県',
    tags: ['宗像市', '耐震改修', '木造住宅', '耐震診断', '地震対策'],
    eligibility: '宗像市内の対象木造住宅で、耐震改修工事や耐震診断の補助要件を満たす所有者等が対象です。',
    applicationPeriod: '2026年4月1日から2026年11月30日まで。予算の範囲内',
    deadlineDate: '2026-11-30',
    description: '宗像市が、木造住宅の耐震改修工事費用と耐震診断費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宗像市木造住宅耐震改修工事費用補助金は、木造住宅の耐震化を進め、地震時の住宅被害を抑えるための制度です。</p>' },
      { heading: '補助額', content: '<p>耐震改修工事費の3分の2が補助対象で、市内業者と契約した場合は上限80万円、市外業者の場合は上限60万円です。</p>' },
      { heading: '申請期限', content: '<p>受付期間は2026年4月1日から11月30日までです。工事契約前に申請と市の承認が必要で、契約済みのものは対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.munakata.lg.jp/kiji0032003/index.html',
    sourceName: '宗像市 木造住宅耐震改修工事費用補助金',
    sourceUrls: ['https://www.city.munakata.lg.jp/kiji0032003/index.html'],
    sourceNote: '宗像市公式ページで耐震改修工事費3分の2、市内業者上限80万円・市外業者上限60万円、受付期間2026年4月1日から11月30日、契約前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okinawa-city-block-wall-removal-2026',
    title: '沖縄市 ブロック塀等撤去工事補助金',
    organization: '沖縄市',
    type: 'local',
    maxAmount: 'ブロック塀等撤去費の一部を補助',
    maxAmountNum: 20,
    category: 'housing',
    relatedCategories: ['disaster'],
    prefecture: '沖縄県',
    tags: ['沖縄市', 'ブロック塀撤去', '通学区域', '地震対策', '令和8年度'],
    eligibility: '沖縄市内の通学区域内にある道路に面し、高さ1.2mを超えるブロック塀等を撤去または一部撤去する工事が対象です。',
    applicationPeriod: '2026年6月1日8時30分から先着順。約3件受付予定、予算がなくなり次第終了',
    description: '沖縄市が、地震時のブロック塀等倒壊による人的被害を防ぐため、撤去工事費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>沖縄市ブロック塀等撤去工事補助金は、地震時にブロック塀等が倒壊して人的被害が発生することを防ぐための補助制度です。</p>' },
      { heading: '対象工事', content: '<p>通学区域内にある道路に面するブロック塀、石積み塀その他組積造の塀で、道路面から高さが1.2mを超えるものを全て撤去または一部撤去する工事が対象です。</p>' },
      { heading: '受付期間', content: '<p>令和8年度は2026年6月1日8時30分から先着順で受付開始、約3件受付予定です。予算がなくなり次第終了します。</p>' }
    ],
    officialUrl: 'https://www.city.okinawa.okinawa.jp/k042/contents/p00028.html',
    sourceName: '沖縄市 令和8年度ブロック塀等撤去工事補助金申請',
    sourceUrls: ['https://www.city.okinawa.okinawa.jp/k042/contents/p00028.html'],
    sourceNote: '沖縄市公式ページで令和8年度ブロック塀等撤去工事補助、通学区域道路沿い高さ1.2m超、2026年6月1日受付開始、先着約3件、予算終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sapporo-child-medical',
    title: '札幌市 子ども医療費助成',
    organization: '札幌市',
    type: 'local',
    maxAmount: '高校生世代までの医療費を一部助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '北海道',
    tags: ['札幌市', '子ども医療費', '高校生世代', '医療費助成', '子育て'],
    eligibility: '札幌市内に住む高校生世代までの子どもで、健康保険に加入している方などが対象です。',
    applicationPeriod: '通年。受給者証の申請・更新は札幌市公式案内に従う',
    description: '札幌市が、高校生世代までの子どもの医療費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>札幌市子ども医療費助成は、高校生世代までの子どもが医療機関を受診した際の医療費の一部を助成する制度です。</p>' },
      { heading: '対象年齢', content: '<p>18歳に達する日以後の最初の3月31日までの高校生世代が対象です。高校に就学していない子どもも対象として案内されています。</p>' },
      { heading: '申請方法', content: '<p>助成を受けるには受給者証の申請が必要です。所得制限や申請先は区役所福祉助成係など公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.sapporo.jp/hoken-iryo/iryojosei/nyuyoji.html',
    sourceName: '札幌市 子ども医療費助成',
    sourceUrls: ['https://www.city.sapporo.jp/hoken-iryo/iryojosei/nyuyoji.html'],
    sourceNote: '札幌市公式ページで2026年6月1日更新、高校生世代まで、18歳到達後最初の3月31日まで、医療費の一部助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sendai-child-medical',
    title: '仙台市 こども医療費助成',
    organization: '仙台市',
    type: 'local',
    maxAmount: '保険診療の自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '宮城県',
    tags: ['仙台市', 'こども医療費', '18歳年度末', '自己負担撤廃', '子育て'],
    eligibility: '仙台市に住み、18歳になる年度の3月末までで、勤務先の健康保険または仙台市国民健康保険に加入している子どもが対象です。',
    applicationPeriod: '通年。出生・転入時等に資格登録を申請',
    description: '仙台市が、18歳年度末までの子どもの保険診療自己負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>仙台市こども医療費助成は、医療機関等を受診した際に健康保険が適用される診療の自己負担額分を助成する制度です。</p>' },
      { heading: '令和8年度の変更', content: '<p>2026年4月1日から対象年齢が15歳到達年度末から18歳到達年度末までに引き上げられ、利用者一部負担金も撤廃されています。</p>' },
      { heading: '手続き', content: '<p>医療費助成を受けるには、事前にこども医療費助成受給者証の交付を受ける必要があります。窓口、郵送、電子申請で手続きできます。</p>' }
    ],
    officialUrl: 'https://www.city.sendai.jp/kate/kurashi/kenkotofukushi/kosodate/teate/jose.html',
    sourceName: '仙台市 こども医療費助成',
    sourceUrls: ['https://www.city.sendai.jp/kate/kurashi/kenkotofukushi/kosodate/teate/jose.html'],
    sourceNote: '仙台市公式ページで2026年6月2日更新、令和8年4月1日から18歳年度末まで拡大、利用者一部負担金撤廃、保険診療自己負担額助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chiba-city-child-medical',
    title: '千葉市 子ども医療費助成制度',
    organization: '千葉市',
    type: 'local',
    maxAmount: '高校3年生相当年齢まで、通院・入院・調剤を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '千葉県',
    tags: ['千葉市', '子ども医療費', '高校3年生相当', '通院300円', '子育て'],
    eligibility: '千葉市内に住み、健康保険に加入している0歳から高校3年生相当年齢までの子どもが対象です。',
    applicationPeriod: '通年。受給券申請や更新手続きは区保健福祉センターこども家庭課で確認',
    description: '千葉市が、0歳から高校3年生相当年齢までの子どもの保険診療にかかる自己負担額の全部または一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>千葉市子ども医療費助成制度は、通院、入院、院外処方の調剤について、保険診療の範囲内で自己負担額の全部または一部を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>令和6年8月診療分から、0歳から高校3年生相当年齢までが対象です。通院は1回300円、入院は1日300円、調剤は無料です。第3子以降や非課税世帯は無料です。</p>' },
      { heading: '助成方法', content: '<p>千葉県内の医療機関では受給券と加入医療保険情報が分かるものを提示します。県外受診などの場合は償還払いで申請します。</p>' }
    ],
    officialUrl: 'https://www.city.chiba.jp/kodomomirai/kodomomirai/kateishien/kodomoiryouhi.html',
    sourceName: '千葉市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.chiba.jp/kodomomirai/kodomomirai/kateishien/kodomoiryouhi.html'],
    sourceNote: '千葉市公式ページで2026年5月22日更新、令和6年8月診療分から高校3年生相当年齢まで、通院300円、入院300円、調剤無料、第3子以降無料を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yokohama-child-medical',
    title: '横浜市 小児医療費助成',
    organization: '横浜市',
    type: 'local',
    maxAmount: '18歳まで保険診療の自己負担額を全額助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '神奈川県',
    tags: ['横浜市', '小児医療費', '18歳まで', '全額助成', '子育て'],
    eligibility: '横浜市内に住所があり、健康保険に加入している0歳から18歳までの子どもが対象です。',
    applicationPeriod: '通年。パマトコ、郵送、区役所窓口で申請可能',
    description: '横浜市が、18歳までの子どもの入院・通院にかかる保険診療の自己負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>横浜市小児医療費助成は、子どもが病気やけがで医療機関等を受診したとき、保険診療の自己負担額を助成する制度です。</p>' },
      { heading: '令和8年6月からの対象', content: '<p>2026年6月1日から対象年齢が18歳までに拡大され、入院・通院とも保険診療の自己負担額が全額助成されます。</p>' },
      { heading: '申請方法', content: '<p>交付、払い戻し、異動申請は横浜市子育て応援サイト「パマトコ」から申請できます。郵送や窓口申請も案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/kenko-iryo/iryohijosei/shoni/child.html',
    sourceName: '横浜市 小児医療費助成',
    sourceUrls: ['https://www.city.yokohama.lg.jp/kenko-iryo-fukushi/kenko-iryo/iryohijosei/shoni/child.html'],
    sourceNote: '横浜市公式ページで2026年6月18日更新、令和8年6月1日から18歳まで拡大、入院・通院、保険診療自己負担額の全額助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kawasaki-child-medical',
    title: '川崎市 小児医療費助成事業',
    organization: '川崎市',
    type: 'local',
    maxAmount: '令和8年9月から高校生年代まで保険医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '神奈川県',
    tags: ['川崎市', '小児医療費', '高校生年代', '一部負担金廃止', '子育て'],
    eligibility: '川崎市に住所を有する0歳から高校生年代までの子どもが対象です。制度拡充前は中学校3年生までが中心です。',
    applicationPeriod: '令和8年9月拡充分は対象者に申請案内。通常の新規申請は出生・転入等の際に手続き',
    description: '川崎市が、小児の通院・調剤・入院にかかる保険医療費自己負担分を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>川崎市小児医療費助成事業は、小児の通院、調剤、入院にかかる保険医療費の自己負担分を助成する制度です。</p>' },
      { heading: '令和8年9月からの拡充', content: '<p>2026年9月から助成対象年齢が高校生年代まで拡大され、小学校4年生以上に設けられていた通院1回500円の一部負担金も廃止されます。</p>' },
      { heading: '対象外費用', content: '<p>食事療養負担額、薬の容器代、差額ベッド代、健康診断、文書料、選定療養費、予防接種など保険対象外のものは助成できません。</p>' }
    ],
    officialUrl: 'https://www.city.kawasaki.jp/450/page/0000181307.html',
    sourceName: '川崎市 令和8年9月から小児医療費助成制度の助成対象を高校生年代まで拡大し、一部負担金を廃止します。',
    sourceUrls: [
      'https://www.city.kawasaki.jp/450/page/0000181307.html',
      'https://www.city.kawasaki.jp/450/page/0000128564.html'
    ],
    sourceNote: '川崎市公式ページで2026年5月27日更新、令和8年9月から高校生年代まで拡大、一部負担金廃止、保険医療費自己負担分助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sagamihara-child-medical',
    title: '相模原市 こども医療費助成',
    organization: '相模原市',
    type: 'local',
    maxAmount: '0歳から高校生世代までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '神奈川県',
    tags: ['相模原市', 'こども医療費', '高校生世代', '医療証', '子育て'],
    eligibility: '相模原市内に住み、各種健康保険に加入している0歳から高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の際に医療証交付を申請',
    description: '相模原市が、0歳から高校生世代までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>相模原市こども医療費助成は、0歳から高校生世代までの子どもが医療機関を受診した際の医療費を助成する制度です。</p>' },
      { heading: '対象年齢', content: '<p>高校生世代は、15歳に達する日の翌日以後の最初の4月1日から18歳に達する日以後最初の3月31日までの人として案内されています。</p>' },
      { heading: '申請時の確認', content: '<p>重度障害者医療費助成、ひとり親家庭等医療費助成、生活保護など他制度の該当者は対象外です。医療証の申請方法を公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.sagamihara.kanagawa.jp/kosodate/kenko/1026630/1007567/1007579/1007580.html',
    sourceName: '相模原市 こども医療費助成（0歳から高校生世代）',
    sourceUrls: ['https://www.city.sagamihara.kanagawa.jp/kosodate/kenko/1026630/1007567/1007579/1007580.html'],
    sourceNote: '相模原市公式ページで令和8年4月21日最終更新、0歳から高校生世代まで、健康保険加入、医療費助成制度であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'niigata-city-child-medical',
    title: '新潟市 こども医療費助成',
    organization: '新潟市',
    type: 'local',
    maxAmount: '0歳から高校3年生までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '新潟県',
    tags: ['新潟市', 'こども医療費', '高校3年生', '入院通院', '子育て'],
    eligibility: '新潟市に住民登録がある0歳から高校3年生までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入時などに申請',
    description: '新潟市が、0歳から高校3年生までの子どもの入院・通院・調剤等の医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>新潟市こども医療費助成は、0歳から高校3年生までの医療費を助成する制度です。子どもが生まれたときや転入したときは申請が必要です。</p>' },
      { heading: '助成対象', content: '<p>新潟市に住民登録がある0歳から高校3年生について、入院、通院、調剤薬局を含む健康保険適用の医療費が助成対象です。</p>' },
      { heading: '手続き', content: '<p>制度の利用には受給者証の交付申請が必要です。パンフレットや申請方法を公式ページで確認してから手続きします。</p>' }
    ],
    officialUrl: 'https://www.city.niigata.lg.jp/kosodate/ninshin/shien/kenko_iryo/kodomoiryo/kodomoiryou.html',
    sourceName: '新潟市 こども医療費助成',
    sourceUrls: ['https://www.city.niigata.lg.jp/kosodate/ninshin/shien/kenko_iryo/kodomoiryo/kodomoiryou.html'],
    sourceNote: '新潟市公式ページで2026年5月20日最終更新、0歳から高校3年生、入院・通院・調剤薬局等の健康保険適用医療費助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shizuoka-city-child-medical',
    title: '静岡市 子ども医療費助成制度',
    organization: '静岡市',
    type: 'local',
    maxAmount: '高校生年代までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '静岡県',
    tags: ['静岡市', '子ども医療費', '高校生年代', '令和8年7月拡充', '子育て'],
    eligibility: '静岡市に住む各種健康保険加入の0歳から高校生年代までの子どもが対象です。',
    applicationPeriod: '通年。各区役所子育て支援課等で手続き',
    description: '静岡市が、子どもが入院・通院したときの保険診療分の医療費の全部または一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>静岡市子ども医療費助成制度は、病気やけがなどで医療機関に入院・通院したときの医療費の全部または一部を助成する制度です。</p>' },
      { heading: '令和8年7月からの拡充', content: '<p>2026年7月から日中の通院費を中学生年代まで無償化し、入院時の食事代を高校生年代まで無償化すると案内されています。</p>' },
      { heading: '対象外の確認', content: '<p>重度心身障害者医療費助成、生活保護、里親養育、児童養護施設等の措置入所など、対象外となる場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/s2873/s001931.html',
    sourceName: '静岡市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.shizuoka.lg.jp/s2873/s001931.html',
      'https://shizuoka-city.mamafre.jp/archives/service/nyuuyouji-iryouhi/'
    ],
    sourceNote: '静岡市公式ページで子ども医療費助成、令和8年7月からの拡充、日中通院費の中学生年代まで無償化、入院時食事代の高校生年代まで無償化を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hamamatsu-child-medical',
    title: '浜松市 こども医療費助成事業',
    organization: '浜松市',
    type: 'local',
    maxAmount: '18歳年度末までの子どもの医療費負担を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '静岡県',
    tags: ['浜松市', 'こども医療費', '18歳年度末', '令和8年度拡充', '子育て'],
    eligibility: '浜松市の制度要件を満たす乳幼児、小・中学生、高校生世代の子どもが対象です。',
    applicationPeriod: '通年。乳幼児医療受給者証など制度区分に応じて申請',
    description: '浜松市が、子どもの疾病やけがの早期発見・早期治療と保護者の経済的負担軽減のために医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>浜松市こども医療費助成事業は、子どもの医療費負担を軽減するため、乳幼児、小・中学生、高校生世代の医療費を助成する制度です。</p>' },
      { heading: '令和8年度の拡充', content: '<p>浜松市は令和8年度予算で、こども医療費負担に対する助成制度を拡充すると案内しています。</p>' },
      { heading: '関連手続き', content: '<p>乳幼児医療受給者証の交付申請や、小・中学生、高校生世代医療費の助成は、浜松市公式サイトと子育て情報サイトの案内に従って確認します。</p>' }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/zaisek/budget/budget08/detail/d_054.html',
    sourceName: '浜松市 （拡充）こども医療費助成事業',
    sourceUrls: [
      'https://www.city.hamamatsu.shizuoka.jp/zaisek/budget/budget08/detail/d_054.html',
      'https://www.city.hamamatsu.shizuoka.jp/kenko/iryo/iryo/jose/index.html',
      'https://www.hamamatsu-pippi.net/contents/7846.html'
    ],
    sourceNote: '浜松市公式ページで令和8年度のこども医療費助成事業拡充、子どもの疾病・けがの早期発見と保護者負担軽減、関連する乳幼児・小中学生・高校生世代医療費助成案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagoya-child-medical',
    title: '名古屋市 子ども医療費助成制度',
    organization: '名古屋市',
    type: 'local',
    maxAmount: '18歳到達年度末までの医療費自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '愛知県',
    tags: ['名古屋市', '子ども医療費', '18歳年度末', '所得制限なし', '子育て'],
    eligibility: '名古屋市内に住み、18歳到達年度末までで、健康保険に加入している子どもなどが対象です。',
    applicationPeriod: '通年。医療証の交付手続きは区役所・支所等で確認',
    description: '名古屋市が、18歳に到達した年度末までに病院などで受診した医療費の自己負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>名古屋市子ども医療費助成制度は、18歳に到達した年度末までに病院などで受診した医療費の自己負担額を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>市内在住、18歳到達年度末まで、健康保険加入、他の医療費助成制度や生活保護などの対象外であることが条件です。所得制限はありません。</p>' },
      { heading: '医療証の手続き', content: '<p>助成を受けるには医療証の交付手続きが必要です。15歳以下と18歳までで申請できる人の扱いが異なるため、公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.nagoya.jp/kodomo/kosodate/1008992/1009002/1009009.html',
    sourceName: '名古屋市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.nagoya.jp/kodomo/kosodate/1008992/1009002/1009009.html'],
    sourceNote: '名古屋市公式ページで2025年12月19日更新、18歳到達年度末まで、医療費自己負担額助成、市内在住・健康保険加入・所得制限なしを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyoto-city-child-medical',
    title: '京都市 子ども医療費支給制度',
    organization: '京都市',
    type: 'local',
    maxAmount: '0歳から中学校3年生までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '京都府',
    tags: ['京都市', '子ども医療費', '中学校3年生', '子ども医療証', '子育て'],
    eligibility: '京都市内に住所があり、健康保険に加入している0歳から中学校3年生までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入時などに子ども医療証の交付を申請',
    description: '京都市が、0歳から中学校3年生までの子どもの医療費の一部を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>京都市子ども医療費支給制度は、子どもが医療機関等で受診したときの医療費負担を軽減する制度です。所得制限はありません。</p>' },
      { heading: '対象者', content: '<p>京都市内に住所があり、健康保険に加入している0歳から中学校3年生までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>助成を受けるには子ども医療証が必要です。出生や転入などの際は、京都市公式ページの案内に従って交付申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/hagukumi/page/0000067393.html',
    sourceName: '京都市 子ども医療費支給制度',
    sourceUrls: ['https://www.city.kyoto.lg.jp/hagukumi/page/0000067393.html'],
    sourceNote: '京都市公式ページで2025年11月20日掲載の子ども医療費支給制度、0歳から中学校3年生まで、健康保険加入、所得制限なし、子ども医療証の提示を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sakai-child-medical',
    title: '堺市 子ども医療費助成制度',
    organization: '堺市',
    type: 'local',
    maxAmount: '18歳年度末までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '大阪府',
    tags: ['堺市', '子ども医療費', '18歳年度末', '医療証', '子育て'],
    eligibility: '堺市内に住み、健康保険に加入している18歳年度末までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入時などに資格申請',
    description: '堺市が、18歳年度末までの子どもを対象に医療費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>堺市子ども医療費助成制度は、子どもの健やかな育成と保護者の経済的負担軽減を目的に、医療費の一部を助成する制度です。</p>' },
      { heading: '対象年齢', content: '<p>対象は18歳に達する日以後の最初の3月31日までの子どもです。健康保険に加入していることなどの要件があります。</p>' },
      { heading: '手続き', content: '<p>助成には医療証の交付申請が必要です。出生や転入、保険変更などの手続きは堺市公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.sakai.lg.jp/kenko/iryokusuri/iryo/iryojigyou/josei/kodomo.html',
    sourceName: '堺市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.sakai.lg.jp/kenko/iryokusuri/iryo/iryojigyou/josei/kodomo.html'],
    sourceNote: '堺市公式ページで2026年3月5日更新、18歳年度末まで、健康保険加入、所得制限なし、医療費助成、医療証交付申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kobe-child-medical',
    title: '神戸市 こども医療費助成',
    organization: '神戸市',
    type: 'local',
    maxAmount: '18歳到達後最初の3月31日までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '兵庫県',
    tags: ['神戸市', 'こども医療費', '18歳年度末', '医療費助成', '子育て'],
    eligibility: '神戸市内に住み、健康保険に加入している0歳から18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入時などに申請',
    description: '神戸市が、0歳から18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>神戸市こども医療費助成は、子どもが医療機関を受診したときの医療費負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>神戸市内に住所があり、健康保険に加入している0歳から18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '確認事項', content: '<p>助成内容や自己負担額は年齢や受診区分により異なります。医療証の申請、払い戻し、県外受診時の扱いを公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.kobe.lg.jp/a52670/kenko/health/medical/kodomoiryohijose.html',
    sourceName: '神戸市 こども医療費助成',
    sourceUrls: ['https://www.city.kobe.lg.jp/a52670/kenko/health/medical/kodomoiryohijose.html'],
    sourceNote: '神戸市公式ページで2026年4月1日更新、0歳から18歳到達後最初の3月31日まで、健康保険加入、こども医療費助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okayama-city-child-medical',
    title: '岡山市 子ども医療費助成制度',
    organization: '岡山市',
    type: 'local',
    maxAmount: '高校生世代までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '岡山県',
    tags: ['岡山市', '子ども医療費', '高校生世代', '医療費助成', '子育て'],
    eligibility: '岡山市に住み、健康保険に加入している高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。資格登録や受給資格証の手続きは公式案内に従う',
    description: '岡山市が、高校生世代までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岡山市子ども医療費助成制度は、子どもが医療機関を受診したときの医療費負担を軽減する制度です。</p>' },
      { heading: '対象年齢', content: '<p>岡山市では高校生世代までを対象に子ども医療費助成を案内しています。健康保険加入などの要件があります。</p>' },
      { heading: '手続き', content: '<p>制度利用には受給資格証等の手続きが必要です。県外受診や払い戻しの扱いも公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.okayama.jp/kurashi/0000004319.html',
    sourceName: '岡山市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.okayama.jp/kurashi/0000004319.html'],
    sourceNote: '岡山市公式ページで子ども医療費助成制度、就学前・小学生の外来入院無料、中学生・高校生等の外来1割・入院無料、令和6年1月拡充を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hiroshima-city-child-medical',
    title: '広島市 こども医療費補助',
    organization: '広島市',
    type: 'local',
    maxAmount: '中学校3年生までの通院・入院医療費を補助',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '広島県',
    tags: ['広島市', 'こども医療費', '中学校3年生', '通院入院', '子育て'],
    eligibility: '広島市内に住み、健康保険に加入している中学校3年生までの子どもなどが対象です。',
    applicationPeriod: '通年。出生・転入時などに受給者証交付を申請',
    description: '広島市が、中学校3年生までの子どもの通院・入院にかかる医療費を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>広島市こども医療費補助は、子どもが医療機関等で受診したときの保険診療分の自己負担額を補助する制度です。</p>' },
      { heading: '対象範囲', content: '<p>通院・入院とも中学校3年生までの子どもが対象として案内されています。健康保険加入などの要件があります。</p>' },
      { heading: '利用方法', content: '<p>助成を受けるには受給者証の交付申請が必要です。所得要件や一部負担金、払い戻し申請は公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/living/kosodate/1021253/hiromaru/1032109/1032106/ninshin_shussan/1025855/1008260.html',
    sourceName: '広島市 こども医療費補助',
    sourceUrls: ['https://www.city.hiroshima.lg.jp/living/kosodate/1021253/hiromaru/1032109/1032106/ninshin_shussan/1025855/1008260.html'],
    sourceNote: '広島市公式ページで2025年2月24日更新、こども医療費補助、保険診療医療費の一部補助、通院・入院とも中学校3年生まで、令和7年1月から通院対象拡大を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'osaka-city-child-medical',
    title: '大阪市 こども医療費助成',
    organization: '大阪市',
    type: 'local',
    maxAmount: '0歳から18歳年度末までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '大阪府',
    tags: ['大阪市', 'こども医療費', '18歳年度末', '所得制限なし', '子育て'],
    eligibility: '大阪市内に住み、公的医療保険に加入している0歳から18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入時などに医療証交付を申請',
    description: '大阪市が、0歳から18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大阪市こども医療費助成は、子どもが医療機関を受診したときの医療費負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>大阪市内に住み、公的医療保険に加入している0歳から18歳到達後最初の3月31日までの子どもが対象です。2024年4月から所得制限は撤廃されています。</p>' },
      { heading: '利用方法', content: '<p>助成を受けるには医療証が必要です。大阪府内の医療機関で医療証と保険資格が確認できるものを提示します。</p>' }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/kodomo/page/0000369443.html',
    sourceName: '大阪市 こどもの医療費を助成します',
    sourceUrls: ['https://www.city.osaka.lg.jp/kodomo/page/0000369443.html'],
    sourceNote: '大阪市公式ページで0歳から18歳到達後最初の3月31日まで、公的医療保険加入、令和6年4月から所得制限撤廃、こども医療費助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kitakyushu-child-medical',
    title: '北九州市 子ども医療費支給制度',
    organization: '北九州市',
    type: 'local',
    maxAmount: '18歳年度末までの子どもの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福岡県',
    tags: ['北九州市', '子ども医療費', '18歳年度末', '所得制限なし', '子育て'],
    eligibility: '北九州市内に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入時などに申請',
    description: '北九州市が、18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>北九州市子ども医療費支給制度は、子どもの医療費負担を軽減するための制度です。</p>' },
      { heading: '対象者', content: '<p>北九州市内に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。所得制限や在学要件はありません。</p>' },
      { heading: '対象外の確認', content: '<p>生活保護、ひとり親家庭等医療、重度障害者医療を受給している場合は対象外です。詳しい自己負担額や申請方法は公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/contents/11700129.html',
    sourceName: '北九州市 子どもの医療費を助成します',
    sourceUrls: ['https://www.city.kitakyushu.lg.jp/contents/11700129.html'],
    sourceNote: '北九州市公式ページで2026年3月ごろ更新、18歳年度末まで、健康保険加入、所得制限なし、在学要件なし、子ども医療費支給制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuoka-city-child-medical',
    title: '福岡市 子ども医療費助成制度',
    organization: '福岡市',
    type: 'local',
    maxAmount: '高校生世代までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福岡県',
    tags: ['福岡市', '子ども医療費', '高校生世代', '所得制限なし', '子育て'],
    eligibility: '福岡市内に住み、健康保険に加入している高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。認定を受けるには申請が必要',
    description: '福岡市が、高校生世代までの子どもが安心して病院などを受診できるよう医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福岡市子ども医療費助成制度は、子どものすこやかな成長を支えるため、病院などを受診した際の医療費を助成する制度です。</p>' },
      { heading: '対象年齢', content: '<p>対象は高校生世代までです。18歳の誕生日前日以後最初の3月31日までで、学生でない人も対象として案内されています。</p>' },
      { heading: '申請方法', content: '<p>助成の認定を受けるには申請が必要です。保護者の所得制限はありませんが、生活保護や他の医療費助成が優先される場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/hofuku/hokennenkin/hp/01.html',
    sourceName: '福岡市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.fukuoka.lg.jp/hofuku/hokennenkin/hp/01.html'],
    sourceNote: '福岡市公式ページで2026年1月ごろ更新、高校生世代まで、健康保険加入、所得制限なし、認定申請が必要であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kumamoto-city-child-medical',
    title: '熊本市 こども医療費助成（ひまわりカード）',
    organization: '熊本市',
    type: 'local',
    maxAmount: '0歳から高校3年生相当までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '熊本県',
    tags: ['熊本市', 'こども医療費', 'ひまわりカード', '高校3年生相当', '子育て'],
    eligibility: '熊本市に住民登録があり、健康保険に加入している0歳から高校3年生相当までの乳幼児・児童が対象です。',
    applicationPeriod: '通年。ひまわりカードの申請・変更手続きは公式案内に従う',
    description: '熊本市が、0歳から高校3年生相当までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>熊本市こども医療費助成は、乳幼児及び児童の健康保持と健全育成のため、子どもの医療費を助成する制度です。</p>' },
      { heading: '対象年齢', content: '<p>熊本市に住民登録があり、健康保険に加入している0歳から高校3年生相当、18歳到達後の3月末日までが対象です。</p>' },
      { heading: '令和5年12月からの拡充', content: '<p>令和5年12月診療分から助成対象が高校3年生相当まで拡充され、全対象者の保険薬局の自己負担が無料になっています。</p>' }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/kiji00351/index.html',
    sourceName: '熊本市 こども医療費助成（ひまわりカード）',
    sourceUrls: [
      'https://www.city.kumamoto.jp/kiji00351/index.html',
      'https://www.city.kumamoto.jp/list04358.html'
    ],
    sourceNote: '熊本市公式ページで2026年6月1日更新、0歳から高校3年生相当、18歳到達後3月末日まで、健康保険加入、令和5年12月診療分から対象拡充と保険薬局自己負担無料を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'aomori-city-child-medical',
    title: '青森市 子ども医療費助成',
    organization: '青森市',
    type: 'local',
    maxAmount: '高校生等までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '青森県',
    tags: ['青森市', '子ども医療費', '高校生等', '所得制限撤廃', '子育て'],
    eligibility: '青森市に住民登録があり、各種健康保険に加入している高校生等までの子どもが対象です。',
    applicationPeriod: '通年。新規の受給資格認定はオンライン申請にも対応',
    description: '青森市が、高校生等までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>青森市子ども医療費助成は、子どもの医療費負担を軽減するための制度です。令和6年10月から対象を高校生等まで拡大し、所得制限を撤廃しています。</p>' },
      { heading: '対象者', content: '<p>青森市に住民登録があり、各種健康保険に加入している高校生等までの子どもが対象です。高校生等は18歳到達後最初の3月31日までの就学期にある未婚の人です。</p>' },
      { heading: '申請方法', content: '<p>助成を受けるには医療証の交付申請が必要です。新規の受給資格認定申請はマイナポータルのぴったりサービスからも手続きできます。</p>' }
    ],
    officialUrl: 'https://www.city.aomori.aomori.jp/kodomo_kyoiku/kodomo_teate_josei/1003567.html',
    sourceName: '青森市 子ども医療費助成のオンライン申請を開始しました',
    sourceUrls: [
      'https://www.city.aomori.aomori.jp/kodomo_kyoiku/kodomo_teate_josei/1003567.html',
      'https://www.city.aomori.aomori.jp/_res/projects/default_project/_page_/001/004/950/kodomoiryouhijyosei.pdf'
    ],
    sourceNote: '青森市公式ページと公式PDFで、青森市に住民登録、健康保険加入、高校生等まで、令和6年10月から対象拡大・所得制限撤廃、新規認定のオンライン申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'morioka-child-medical',
    title: '盛岡市 子ども医療費の給付',
    organization: '盛岡市',
    type: 'local',
    maxAmount: '高校生相当年齢までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '岩手県',
    tags: ['盛岡市', '子ども医療費', '高校生等', '所得制限なし', '子育て'],
    eligibility: '盛岡市に住む健康保険加入の乳幼児、小学生、中学生、高校生相当年齢の子どもなどが対象です。',
    applicationPeriod: '通年。受給者証交付・更新申請は公式案内に従う',
    description: '盛岡市が、乳幼児から高校生相当年齢までの医療費の一部負担金の全部または一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>盛岡市では乳幼児、小学生、中学生、高校生等について、医療費の一部負担金の全額または一部を助成しています。</p>' },
      { heading: '高校生等の給付', content: '<p>令和5年4月診療分から高校生相当年齢の子どもの医療費も助成対象です。所得制限はありません。</p>' },
      { heading: '手続き', content: '<p>受給者証の交付や更新申請が必要です。年齢区分ごとに案内ページが分かれているため、該当する区分を公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.morioka.iwate.jp/kenkou/kaigoiryo/iryohikyufu/index.html',
    sourceName: '盛岡市 医療費の給付・貸付',
    sourceUrls: [
      'https://www.city.morioka.iwate.jp/kenkou/kaigoiryo/iryohikyufu/index.html',
      'https://www.city.morioka.iwate.jp/kenkou/kaigoiryo/iryohikyufu/1041583.html'
    ],
    sourceNote: '盛岡市公式ページで乳幼児・小学生・中学生・高校生等の医療費給付、令和5年4月診療分から高校生相当年齢も対象、所得制限なしを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akita-city-child-medical',
    title: '秋田市 子ども福祉医療制度',
    organization: '秋田市',
    type: 'local',
    maxAmount: '18歳年度末までの保険診療自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '秋田県',
    tags: ['秋田市', '子ども福祉医療', '18歳年度末', 'マル福', '子育て'],
    eligibility: '秋田市に住所がある18歳到達後最初の3月31日までの児童が対象です。',
    applicationPeriod: '通年。受給者証の交付申請が必要',
    description: '秋田市が、18歳年度末までの児童に対して医療費の自己負担分の全部または一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>秋田市子ども福祉医療制度は、秋田市に住所がある18歳年度末までの児童の医療費を助成する制度です。市内では「マル福」と呼ばれています。</p>' },
      { heading: '助成内容', content: '<p>医療機関の窓口で受給者証と健康保険情報が分かるものを提示することで、保険診療の自己負担分の全部または一部が助成されます。</p>' },
      { heading: '申請', content: '<p>助成を受けるには、あらかじめ子ども福祉医療費受給者証の交付申請が必要です。受給者証は原則毎年更新されます。</p>' }
    ],
    officialUrl: 'https://www.city.akita.lg.jp/kurashi/kosodate/1005867/1005945.html',
    sourceName: '秋田市 子ども福祉医療制度について',
    sourceUrls: [
      'https://www.city.akita.lg.jp/kurashi/kosodate/1005867/1005945.html',
      'https://www.city.akita.lg.jp/kurashi/kosodate/1005867/1026678/1026535.html'
    ],
    sourceNote: '秋田市公式ページで令和8年6月11日更新、18歳到達後最初の3月31日まで、保険診療自己負担分の全部または一部助成、受給者証交付申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamagata-city-child-medical',
    title: '山形市 こども医療（子育て支援医療給付制度）',
    organization: '山形市',
    type: 'local',
    maxAmount: '18歳までの保険診療分を給付',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '山形県',
    tags: ['山形市', 'こども医療', '18歳まで', '子育て支援医療', '子育て'],
    eligibility: '山形市の制度要件を満たす18歳までの子どもが対象です。',
    applicationPeriod: '通年。制度利用にはあらかじめ申請が必要',
    description: '山形市が、18歳までの子どもが医療機関で受診した保険診療分の医療費を給付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>山形市こども医療は、子育て期の経済的負担を軽減し、子どもの健康な発育・発達を支援するための医療費給付制度です。</p>' },
      { heading: '対象年齢', content: '<p>令和6年4月から対象年齢が18歳までに拡大されています。医療機関で受診した医療費のうち、保険診療分が給付対象です。</p>' },
      { heading: '申請', content: '<p>制度利用にはあらかじめ申請が必要で、対象者に該当すると認められる場合に「こども医療証」が交付されます。</p>' }
    ],
    officialUrl: 'https://www.city.yamagata-yamagata.lg.jp/kosodatekyoiku/kosodate/1006613/1002149.html',
    sourceName: '山形市 こども医療（子育て支援医療給付制度）',
    sourceUrls: ['https://www.city.yamagata-yamagata.lg.jp/kosodatekyoiku/kosodate/1006613/1002149.html'],
    sourceNote: '山形市公式ページで令和7年12月2日更新、令和6年4月から18歳まで拡大、保険診療分給付、事前申請とこども医療証交付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukushima-city-child-medical',
    title: '福島市 子ども医療費助成制度',
    organization: '福島市',
    type: 'local',
    maxAmount: '18歳までの保険診療自己負担分等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福島県',
    tags: ['福島市', '子ども医療費', '18歳まで', '入院時食事療養費', '子育て'],
    eligibility: '福島市内に住所があり、健康保険に加入している18歳までの子どもが対象です。',
    applicationPeriod: '通年。受給資格登録や変更届はオンライン申請にも対応',
    description: '福島市が、18歳までの子どもの保険診療による一部負担金等を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福島市子ども医療費助成制度は、18歳までの子どもが病気やけがで医師の治療を受けたときの医療費を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>保険診療による一部負担金と入院時食事療養費定額負担金が助成対象です。高額療養費や附加給付金がある場合は差し引いて助成されます。</p>' },
      { heading: '手続き', content: '<p>受給資格登録、登録内容変更、受給者証再交付などはオンライン申請にも対応しています。</p>' }
    ],
    officialUrl: 'https://www.city.fukushima.fukushima.jp/soshiki/9/1041/3/489.html',
    sourceName: '福島市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.fukushima.fukushima.jp/soshiki/9/1041/3/489.html'],
    sourceNote: '福島市公式ページで2025年12月9日更新、18歳まで、保険診療一部負担金と入院時食事療養費定額負担金の助成、オンライン申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'mito-child-medical',
    title: '水戸市 子ども医療福祉費助成制度（マル福制度）',
    organization: '水戸市',
    type: 'local',
    maxAmount: '医療費の一部を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '茨城県',
    tags: ['水戸市', '子ども医療福祉費', 'マル福', '外来600円', '子育て'],
    eligibility: '水戸市に住民票があり、健康保険に加入している子どもなどが対象です。',
    applicationPeriod: '通年。制度利用には手続きが必要',
    description: '水戸市が、健康保険に加入している子どもが病院などにかかったときの医療費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>水戸市子ども医療福祉費助成制度は、健康保険に加入している子どもが病院などにかかったときの医療費の一部を助成するマル福制度です。</p>' },
      { heading: '自己負担', content: '<p>外来は医療機関ごとに1日600円を上限として月2回まで、入院は医療機関ごとに1日300円を上限として月3,000円までの自己負担があります。調剤薬局は自己負担なしです。</p>' },
      { heading: '対象外費用', content: '<p>入院時の食事代など、健康保険適用外の支払いは助成対象外です。所得確認などの要件も公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.mito.lg.jp/site/shinsei/3148.html',
    sourceName: '水戸市 子ども医療福祉費助成制度（マル福制度）',
    sourceUrls: ['https://www.city.mito.lg.jp/site/shinsei/3148.html'],
    sourceNote: '水戸市公式ページで2026年6月17日更新、健康保険加入、水戸市住民票、外来1日600円月2回まで、入院1日300円月3,000円まで、調剤薬局自己負担なしを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'utsunomiya-child-medical',
    title: '宇都宮市 こども医療費助成制度',
    organization: '宇都宮市',
    type: 'local',
    maxAmount: '高校3年生相当までの医療費自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '栃木県',
    tags: ['宇都宮市', 'こども医療費', '高校3年生相当', '受給資格者証', '子育て'],
    eligibility: '宇都宮市に住民票があり、健康保険に加入している高校3年生相当までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入時などに受給資格者証交付申請が必要',
    description: '宇都宮市が、高校3年生相当までの子どもの医療費自己負担分を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宇都宮市こども医療費助成制度は、子どもが病気やけがで健康保険が適用になる診療を受けた場合の医療費自己負担分を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>宇都宮市に住民票があり、健康保険に加入している高校3年生相当、18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '申請', content: '<p>出生や転入の場合は、こども医療費受給資格者証の交付申請が必要です。申請には健康保険証等と預金通帳などが案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.utsunomiya.lg.jp/kenko/iryo/1034540/1004379.html',
    sourceName: '宇都宮市 こども医療費助成制度',
    sourceUrls: ['https://www.city.utsunomiya.lg.jp/kenko/iryo/1034540/1004379.html'],
    sourceNote: '宇都宮市公式ページでこども医療費助成制度、出生・転入時の受給資格者証交付申請、健康保険証等・預金通帳、窓口と電子申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'maebashi-child-medical',
    title: '前橋市 福祉医療費助成制度（子ども）',
    organization: '前橋市',
    type: 'local',
    maxAmount: '高校生世代までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '群馬県',
    tags: ['前橋市', '福祉医療費', '高校生世代', '医療費助成', '子育て'],
    eligibility: '18歳に達する日以後の最初の3月31日までの子どもなどが対象です。',
    applicationPeriod: '通年。市町村で申請し受給資格者証の交付を受ける',
    description: '前橋市が、子どもなどの医療費を助成する福祉医療費助成制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>前橋市の福祉医療費助成制度では、子どもなどの医療費を助成しています。</p>' },
      { heading: '対象年齢', content: '<p>子どもは18歳に達する日以後の最初の3月31日、高校生世代までが対象として案内されています。</p>' },
      { heading: '県内制度との関係', content: '<p>群馬県では令和5年10月から高校生世代まで、入院・通院とも所得制限なし、受診時自己負担なし、窓口での立替払いなしの制度となっています。</p>' }
    ],
    officialUrl: 'https://www.city.maebashi.gunma.jp/soshiki/kodomomiraibu/kodomoshien/gyomu/4/5/1/3936.html',
    sourceName: '前橋市 医療費助成の一覧',
    sourceUrls: [
      'https://www.city.maebashi.gunma.jp/soshiki/kodomomiraibu/kodomoshien/gyomu/4/5/1/3936.html',
      'https://www.pref.gunma.jp/page/3173.html'
    ],
    sourceNote: '前橋市公式ページで18歳到達後最初の3月31日までの子どもなどの医療費助成、群馬県公式ページで令和5年10月から高校生世代まで所得制限なし・自己負担なしを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kofu-child-medical',
    title: '甲府市 すこやか子育て医療費助成',
    organization: '甲府市',
    type: 'local',
    maxAmount: '高校3年生相当までの保険診療自己負担金等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '山梨県',
    tags: ['甲府市', 'すこやか子育て', '高校3年生相当', '医療費助成', '子育て'],
    eligibility: '甲府市に住所がある0歳から18歳到達後最初の3月31日までの子どもの保護者で、甲府市に住民登録されている方が対象です。',
    applicationPeriod: '通年。受給資格証の交付申請や償還払い申請は公式案内に従う',
    description: '甲府市が、高校3年生相当までの子どもの保険診療自己負担金と入院時食事療養標準負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>甲府市すこやか子育て医療費助成は、子どものすこやかな成長と子育て家庭の経済的負担軽減を目的に、高校3年生相当までの医療費を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>病気やけがで医療機関等を受診したとき、保険診療による自己負担金と入院時食事療養標準負担額が助成対象です。</p>' },
      { heading: '対象外', content: '<p>生活保護、ひとり親家庭等医療費助成、重度心身障害者医療費助成などを受けている場合は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/jidoikuse/kenko/kosodate/nyuyoji/sukoyaka.html',
    sourceName: '甲府市 すこやか子育て医療費助成',
    sourceUrls: ['https://www.city.kofu.yamanashi.jp/jidoikuse/kenko/kosodate/nyuyoji/sukoyaka.html'],
    sourceNote: '甲府市公式ページで2026年5月頃更新、0歳から18歳年度末まで、保険診療自己負担金と入院時食事療養標準負担額の助成、令和8年4月から押印不要を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagano-city-child-medical',
    title: '長野市 子どもの福祉医療制度',
    organization: '長野市',
    type: 'local',
    maxAmount: '0歳から18歳年度末までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '長野県',
    tags: ['長野市', '福祉医療', '18歳年度末', '電子申請', '子育て'],
    eligibility: '長野市在住の0歳から18歳年度末までの子どもが対象です。',
    applicationPeriod: '通年。令和8年1月から新規申請などの電子申請に対応',
    description: '長野市が、0歳から18歳年度末までの子どもの医療費を助成する福祉医療制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長野市の子どもの福祉医療制度は、0歳から18歳年度末までの長野市在住の子どもについて医療費を助成する制度です。</p>' },
      { heading: '電子申請', content: '<p>令和8年1月から、子どもの福祉医療費受給者資格について電子申請が可能になっています。新規申請などが対象です。</p>' },
      { heading: '必要書類', content: '<p>電子申請では子どもの健康保険情報が分かるもの、受給者の口座番号が分かるもの、本人確認書類などが案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/n100600/contents/p006172.html',
    sourceName: '長野市 子どもの福祉医療費受給者資格の電子申請を開始します',
    sourceUrls: [
      'https://www.city.nagano.nagano.jp/n100600/contents/p006172.html',
      'https://www.pref.nagano.lg.jp/kenko-fukushi/kenko/fukushi/fukushi/hojokin.html'
    ],
    sourceNote: '長野市公式ページで令和8年1月から電子申請開始、0歳から18歳年度末までの長野市在住の子どもの医療費助成を確認。長野県公式ページで県内市町村の子ども福祉医療費給付事業も確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyama-city-child-medical',
    title: '富山市 こども医療費助成',
    organization: '富山市',
    type: 'local',
    maxAmount: '0歳から18歳までの保険診療自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '富山県',
    tags: ['富山市', 'こども医療費', '18歳まで', '現物給付', '子育て'],
    eligibility: '富山市に住所がある0歳から18歳までの子どもが対象です。',
    applicationPeriod: '通年。出生または転入後、速やかに申請',
    description: '富山市が、0歳から18歳までの子どもの保険診療自己負担分を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>富山市こども医療費助成は、富山市に住所がある0歳から18歳までの子どもの医療費を助成する制度です。</p>' },
      { heading: '令和7年10月からの拡充', content: '<p>令和7年10月診療分から助成対象が18歳までに拡充されています。入院・通院とも対象で、保険診療の自己負担分が助成されます。</p>' },
      { heading: '利用方法', content: '<p>県内では現物給付により医療機関等の窓口での支払いが不要です。県外診療は償還払いとなります。</p>' }
    ],
    officialUrl: 'https://ikusapotoyama.city.toyama.lg.jp/LGArticle/Index/1811',
    sourceName: '富山市 こども医療費助成',
    sourceUrls: ['https://ikusapotoyama.city.toyama.lg.jp/LGArticle/Index/1811'],
    sourceNote: '富山市公式子育てサイトで2025年頃更新、0歳から18歳、令和7年10月診療分から対象拡充、保険診療自己負担分、現物給付と県外償還払いを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kanazawa-child-medical',
    title: '金沢市 子育て支援医療費助成制度',
    organization: '金沢市',
    type: 'local',
    maxAmount: '高校3年生等までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '石川県',
    tags: ['金沢市', '子育て支援医療費', '高校3年生等', '健康保険', '子育て'],
    eligibility: '金沢市に住所があり、健康保険に加入している高校3年生等までの子どもが対象です。',
    applicationPeriod: '通年。医療費助成の申請・届出は公式案内に従う',
    description: '金沢市が、高校3年生等までの子どもが医療機関を受診したときの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>金沢市子育て支援医療費助成制度は、子どもが病気やけがで医療機関を受診したときの医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>金沢市に住所があり、健康保険に加入している高校3年生等、18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '確認事項', content: '<p>申請方法や窓口負担の扱い、ひとり親家庭等医療費助成制度など他制度との関係は公式ページで確認します。</p>' }
    ],
    officialUrl: 'https://www4.city.kanazawa.lg.jp/soshikikarasagasu/kenkoseisakuka/gyomuannai/3/7220.html',
    sourceName: '金沢市 子ども医療費助成制度等',
    sourceUrls: ['https://www4.city.kanazawa.lg.jp/soshikikarasagasu/kenkoseisakuka/gyomuannai/3/7220.html'],
    sourceNote: '金沢市公式ページで子育て支援医療費助成制度、高校3年生等まで、18歳到達後最初の3月31日まで、金沢市住所・健康保険加入を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukui-city-child-medical',
    title: '福井市 子ども医療費助成制度',
    organization: '福井市',
    type: 'local',
    maxAmount: '高校3年生相当までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福井県',
    tags: ['福井市', '子ども医療費', '高校3年生相当', '受給者証', '子育て'],
    eligibility: '福井市に住民登録があり、健康保険に加入している高校3年生相当までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入後、速やかに受給者証交付申請',
    description: '福井市が、高校3年生相当までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福井市子ども医療費助成制度は、福井市に住民登録がある高校3年生相当までの子どもの医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>健康保険に加入している高校3年生相当、18歳の年度末までの子どもが対象です。ひとり親家庭等医療や重度障害者医療など他制度の助成対象者は対象外です。</p>' },
      { heading: '申請', content: '<p>出生や転入などで子どもが福井市に住民登録されたら、受給者証の交付申請を行います。必要書類が揃っていない場合でも仮申請が可能です。</p>' }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/fukusi/kosodate/jidofukusi/p009323.html',
    sourceName: '福井市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.fukui.lg.jp/fukusi/kosodate/jidofukusi/p009323.html'],
    sourceNote: '福井市公式ページで2026年3月頃更新、福井市住民登録、健康保険加入、高校3年生相当まで、受給者証交付申請と仮申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tsu-child-medical',
    title: '津市 子ども医療費助成制度',
    organization: '津市',
    type: 'local',
    maxAmount: '高校生年代まで窓口無料で助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '三重県',
    tags: ['津市', '子ども医療費', '高校生年代', '窓口無料', '子育て'],
    eligibility: '津市内に住所があり、医療保険に加入し、生活保護を受けていない0歳から高校生年代までの子どもが対象です。',
    applicationPeriod: '通年。受給資格証の申請・届出は公式案内に従う',
    description: '津市が、0歳から高校生年代までの子どもの医療費を窓口無料で助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>津市子ども医療費助成制度は、子どもの医療費負担を軽減するための制度です。</p>' },
      { heading: '令和8年4月からの拡充', content: '<p>令和8年4月から助成対象を高校生年代、18歳の年度末まで拡大し、助成方法は窓口無料となっています。</p>' },
      { heading: '対象者', content: '<p>市内に住所を有し、医療保険に加入し、生活保護を受けていない0歳から高校生年代までの子どもが対象です。</p>' }
    ],
    officialUrl: 'https://www.info.city.tsu.mie.jp/kosodateouen/shien_josei_enjo/1002876/1002992.html',
    sourceName: '津市 子ども医療費助成制度',
    sourceUrls: ['https://www.info.city.tsu.mie.jp/kosodateouen/shien_josei_enjo/1002876/1002992.html'],
    sourceNote: '津市公式ページで2026年5月1日更新、令和8年4月から高校生年代まで拡大、窓口無料、0歳から高校生年代、市内住所・医療保険加入・生活保護なしを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'otsu-child-medical',
    title: '大津市 子どもの医療費助成',
    organization: '大津市',
    type: 'local',
    maxAmount: '小学1年生から18歳年度末までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '滋賀県',
    tags: ['大津市', '子ども医療費', '18歳年度末', '通院500円', '子育て'],
    eligibility: '小学校1年生から18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。対象者や受給券の手続きは公式案内に従う',
    description: '大津市が、小学校1年生から18歳年度末までの子どもの保険診療自己負担分の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大津市子どもの医療費助成は、対象の子どもが医療機関等にかかったときの保険診療自己負担分の一部を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>小学校1年生から18歳に達する日以後最初の3月31日を経過していない子どもが対象です。</p>' },
      { heading: '自己負担', content: '<p>入院は1日1,000円で1医療機関ごとに月14,000円を限度、通院は1医療機関1か月500円です。院外調剤薬局は自己負担不要です。</p>' }
    ],
    officialUrl: 'https://www.city.otsu.lg.jp/soshiki/020/1403/g/josei/fukushiiryohi/138898.html',
    sourceName: '大津市 子どもの医療費助成について',
    sourceUrls: ['https://www.city.otsu.lg.jp/soshiki/020/1403/g/josei/fukushiiryohi/138898.html'],
    sourceNote: '大津市公式ページで2025年12月2日更新、小学校1年生から18歳年度末まで、保険診療自己負担分の一部助成、入院1日1,000円・通院月500円・院外調剤自己負担なしを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nara-city-child-medical',
    title: '奈良市 子ども医療費助成',
    organization: '奈良市',
    type: 'local',
    maxAmount: '高校生世代までの保険診療自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '奈良県',
    tags: ['奈良市', '子ども医療費', '高校生世代', '現物給付', '子育て'],
    eligibility: '健康保険に加入している18歳年度末までの高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。受給資格証の交付申請は窓口・郵送・電子申請に対応',
    description: '奈良市が、高校生世代までの子どもの保険診療自己負担額から一部負担金を除いた額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>奈良市子ども医療費助成は、安心して子育てができるまちを目指し、子どもの医療費の一部を助成する制度です。</p>' },
      { heading: '対象年齢', content: '<p>健康保険に加入している高校生世代、18歳到達後最初の3月31日までの子どもが対象です。所得制限はありません。</p>' },
      { heading: '助成内容', content: '<p>保険診療の自己負担額から一部負担金を除いた額が助成されます。令和6年8月診療分から高校生世代まで現物給付方式の対象が拡大されています。</p>' }
    ],
    officialUrl: 'https://www.city.nara.lg.jp/site/kosodate/31125.html',
    sourceName: '奈良市 子ども医療費助成',
    sourceUrls: ['https://www.city.nara.lg.jp/site/kosodate/31125.html'],
    sourceNote: '奈良市公式ページで2026年2月3日更新、高校生世代まで、18歳年度末、所得制限なし、令和6年8月診療分から高校生世代まで現物給付方式拡大を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'wakayama-city-child-medical',
    title: '和歌山市 こども医療費助成制度',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '18歳年度末までの医療費の一部を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '和歌山県',
    tags: ['和歌山市', 'こども医療費', '18歳年度末', '所得制限なし', 'オンライン申請'],
    eligibility: '和歌山市に住民登録があり、健康保険に加入している満18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。令和7年12月から新規・再交付のオンライン申請にも対応',
    description: '和歌山市が、18歳年度末までの子どもの医療費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>和歌山市こども医療費助成制度は、子どもが健康に育つことを願い、医療費の一部を助成する制度です。所得制限はありません。</p>' },
      { heading: '対象者', content: '<p>和歌山市に住民登録があり、健康保険に加入している満18歳に達する日以後の最初の3月31日までの子どもが対象です。</p>' },
      { heading: '申請方法', content: '<p>令和7年12月から新規申請と再交付申請のオンライン申請が開始されています。他の公費負担で医療費が全額助成される場合は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/kurashi/kosodate/1001105/1001751.html',
    sourceName: '和歌山市 こども医療費助成制度',
    sourceUrls: ['https://www.city.wakayama.wakayama.jp/kurashi/kosodate/1001105/1001751.html'],
    sourceNote: '和歌山市公式ページで令和8年3月11日更新、18歳年度末まで、健康保険加入、所得制限なし、令和7年12月から新規・再交付オンライン申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tottori-city-child-medical',
    title: '鳥取市 特別医療費助成制度（小児）',
    organization: '鳥取市',
    type: 'local',
    maxAmount: '18歳年度末まで入院・通院の自己負担0円',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '鳥取県',
    tags: ['鳥取市', '特別医療費', '小児', '18歳年度末', '自己負担0円'],
    eligibility: '18歳に達する日以後の最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。特別医療費受給資格証の交付申請が必要',
    description: '鳥取市が、18歳年度末までの子どもの入院・通院にかかる保険診療自己負担を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鳥取市の小児特別医療費助成は、18歳年度末までの子どもの医療費負担を軽減する制度です。</p>' },
      { heading: '自己負担', content: '<p>入院・通院とも自己負担額は0円です。保険適用外診療分、食事代、病衣代、容器代、個室代、文書代、選定療養費などは対象外です。</p>' },
      { heading: '利用方法', content: '<p>助成を受けるには特別医療費受給資格証の交付申請が必要です。医療機関受診時に受給資格証を提示します。</p>' }
    ],
    officialUrl: 'https://www.city.tottori.lg.jp/site/kosodate/4697.html',
    sourceName: '鳥取市 特別医療費助成制度（小児）について',
    sourceUrls: ['https://www.city.tottori.lg.jp/site/kosodate/4697.html'],
    sourceNote: '鳥取市公式ページで2026年3月1日更新、18歳年度末まで、入院0円、通院0円、保険適用外診療分等は対象外を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'matsue-child-medical',
    title: '松江市 子ども医療費助成',
    organization: '松江市',
    type: 'local',
    maxAmount: '令和7年4月から高校生年代まで助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '島根県',
    tags: ['松江市', '子ども医療費', '高校生年代', '令和7年4月拡大', '子育て'],
    eligibility: '松江市の制度要件を満たす子どもが対象です。令和7年4月から高校生年代まで対象が拡大されています。',
    applicationPeriod: '通年。受給資格証の交付・更新は公式案内に従う',
    description: '松江市が、子どもの保険適用医療費の自己負担部分を公費助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>松江市子ども医療費助成は、保険適用となる医療費の自己負担部分を一部公費助成する制度です。</p>' },
      { heading: '対象年齢の拡大', content: '<p>令和7年4月1日から子ども医療費助成制度の対象年齢を高校生年代まで拡大しています。</p>' },
      { heading: '受給資格証', content: '<p>対象世帯には受給資格証が案内されます。中学3年生のいる世帯には高校生年代用の新しい受給資格証が発送されます。</p>' }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/soshikikarasagasu/kosodatebu_kosodatekyuhuka/iryouhi/3992.html',
    sourceName: '松江市 子ども医療費助成',
    sourceUrls: [
      'https://www.city.matsue.lg.jp/soshikikarasagasu/kosodatebu_kosodatekyuhuka/iryouhi/3992.html',
      'https://www.pref.shimane.lg.jp/medical/kenko/kenko/hoken/kodomoiryouhijosei.html'
    ],
    sourceNote: '松江市公式ページで2026年2月3日更新、令和7年4月1日から高校生年代まで対象拡大、保険適用医療費の自己負担部分を一部公費助成、島根県公式ページでも県内市町村の高校生相当年齢まで拡大を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamaguchi-city-child-medical',
    title: '山口市 こども医療費助成制度',
    organization: '山口市',
    type: 'local',
    maxAmount: '高校生世代まで保険診療自己負担分を全額助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '山口県',
    tags: ['山口市', 'こども医療費', '高校生世代', '全額助成', 'カクフク'],
    eligibility: '小・中学生と高校生世代が対象です。高校生世代は18歳到達後最初の3月31日までです。',
    applicationPeriod: '通年。福祉医療費受給者証の交付・更新申請が必要',
    description: '山口市が、高校生世代までの子どもの保険診療による医療費自己負担分を全額助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>山口市こども医療費助成制度は、子どもの医療費の自己負担分を助成し、子育て世帯の経済的支援と子どもの保健向上を目的とする制度です。</p>' },
      { heading: '対象年齢', content: '<p>令和6年10月1日から高校生世代、18歳に達する日以後最初の3月31日までに対象年齢が拡大されています。</p>' },
      { heading: '助成内容', content: '<p>保険診療による医療費の自己負担分を全額助成します。保険給付外の診療や食事代等は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/site/kodomo/7179.html',
    sourceName: '山口市 こども医療費助成制度',
    sourceUrls: ['https://www.city.yamaguchi.lg.jp/site/kodomo/7179.html'],
    sourceNote: '山口市公式子育て応援サイトで2026年3月1日更新、令和6年10月から高校生世代まで拡大、保険診療自己負担分を全額助成、受給者証利用を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokushima-city-child-medical',
    title: '徳島市 子ども医療費助成制度',
    organization: '徳島市',
    type: 'local',
    maxAmount: '18歳年度末までの医療費自己負担分の一部を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '徳島県',
    tags: ['徳島市', '子ども医療費', '18歳年度末', '受給者証', '子育て'],
    eligibility: '徳島市に住民票がある18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。子ども医療費受給者証の交付申請が必要',
    description: '徳島市が、18歳年度末までの子どもの医療費自己負担分の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>徳島市子ども医療費助成制度は、18歳年度末までの子どもの医療費を保護者に助成する制度です。</p>' },
      { heading: '対象者', content: '<p>徳島市に住民票のある子どもで、18歳の誕生日以降の最初の3月31日までの期間が対象です。生活保護や施設措置入所などの場合は対象外です。</p>' },
      { heading: '助成内容', content: '<p>各種健康保険制度の自己負担分の一部を助成します。食事療養標準負担額や医療保険の適用とならないものは対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/smph/kosodate/ikuji/kodomoiryohi_josei/shosai.html',
    sourceName: '徳島市 子ども医療費助成制度の詳細について',
    sourceUrls: [
      'https://www.city.tokushima.tokushima.jp/smph/kosodate/ikuji/kodomoiryohi_josei/shosai.html',
      'https://www.city.tokushima.tokushima.jp/smph/kosodate/ikuji/kodomoiryohi_josei/230600a-202308301.html'
    ],
    sourceNote: '徳島市公式ページで18歳年度末まで、令和6年1月から対象拡大、健康保険自己負担分の一部助成、食事療養標準負担額等は対象外を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'takamatsu-child-medical',
    title: '高松市 子ども医療費助成',
    organization: '高松市',
    type: 'local',
    maxAmount: '0歳から18歳年度末までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '香川県',
    tags: ['高松市', '子ども医療費', '18歳年度末', '健康保険', '子育て'],
    eligibility: '0歳から18歳到達後最初の3月31日までで、高松市に住民票があり、健康保険に加入している子どもが対象です。',
    applicationPeriod: '通年。出生・転入時などに子ども医療費受給資格者証を申請',
    description: '高松市が、0歳から18歳年度末までの子どもの保険診療にかかる入院・通院医療費自己負担分を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高松市子ども医療費助成は、0歳から18歳年度末までの子どもの医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>0歳から18歳に達する日以後の最初の3月31日まで、高松市に住民票があり、健康保険に加入している子どもが対象です。就労や婚姻している人も対象です。</p>' },
      { heading: '助成内容', content: '<p>保険診療にかかる入院・通院医療費の自己負担分が助成対象です。食事療養費の標準負担額等は除かれます。</p>' }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/smph/kurashi/kosodate/hitorioya/kosodate/iryohijosei20230801.html',
    sourceName: '高松市 子ども医療費助成',
    sourceUrls: [
      'https://www.city.takamatsu.kagawa.jp/smph/kurashi/kosodate/hitorioya/kosodate/iryohijosei20230801.html',
      'https://takamatsu-rakko.net/sickness/29/'
    ],
    sourceNote: '高松市公式ページで2026年4月1日更新、0歳から18歳年度末まで、高松市住民票、健康保険加入、保険診療の入院・通院自己負担分助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'matsuyama-child-medical',
    title: '松山市 子ども医療費助成',
    organization: '松山市',
    type: 'local',
    maxAmount: '18歳年度末までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '愛媛県',
    tags: ['松山市', '子ども医療費', '18歳年度末', '資格申請', '電子申請'],
    eligibility: '健康保険に加入している18歳到達年度の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。助成を受けるには資格申請手続きが必要',
    description: '松山市が、健康保険加入の18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>松山市子ども医療費助成は、健康保険に加入している18歳到達年度の3月31日までの子どもを対象に医療費を助成する制度です。</p>' },
      { heading: '申請', content: '<p>助成を受けるには資格申請手続きが必要です。医療助成制度に関する手続きの一部は電子申請や郵送にも対応しています。</p>' },
      { heading: '制度拡大', content: '<p>松山市公式ページでは子ども医療費助成制度の拡大と、マイナンバーカードを医療費助成の受給者証として利用できる環境整備が案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/kurashi/fukushi/jido/kodomoiryou.html',
    sourceName: '松山市 子ども医療費助成',
    sourceUrls: [
      'https://www.city.matsuyama.ehime.jp/kurashi/fukushi/jido/kodomoiryou.html',
      'https://www.city.matsuyama.ehime.jp/kurashi/fukushi/shakai/iryouhijosei.html'
    ],
    sourceNote: '松山市公式ページで2026年2月27日更新、健康保険加入、18歳到達年度3月31日まで、資格申請手続き、電子申請・郵送対応を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kochi-city-child-medical',
    title: '高知市 子ども医療費助成事業',
    organization: '高知市',
    type: 'local',
    maxAmount: '中学生までの保険診療自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '高知県',
    tags: ['高知市', '子ども医療費', '中学生まで', '保険診療', '子育て'],
    eligibility: '高知市内に住み、健康保険に加入している中学生までの児童が対象です。',
    applicationPeriod: '通年。申請方法と助成内容は年齢区分・受給者証区分により確認',
    description: '高知市が、中学生までの子どもが医療機関を受診したときの保険診療自己負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高知市子ども医療費助成事業は、健康保険に加入している中学生までの子どもが病気などで医療機関を受診したとき、保険診療の自己負担額を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>高知市内に住む中学生までの児童で、健康保険に加入していることが条件です。健康保険に加入していない場合、生活保護、児童福祉施設等への入所などは対象外です。</p>' },
      { heading: '対象外費用', content: '<p>健康診断、予防接種などの保険外診療や、入院時食事療養費標準負担額は助成対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/soshiki/33/iryou1.html',
    sourceName: '高知市 子ども医療費助成事業',
    sourceUrls: ['https://www.city.kochi.kochi.jp/soshiki/33/iryou1.html'],
    sourceNote: '高知市公式ページで2026年1月27日更新、中学生まで、健康保険加入、保険診療自己負担額助成、保険外診療・入院時食事療養費標準負担額対象外を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'asahikawa-child-medical',
    title: '旭川市 子ども医療費助成',
    organization: '旭川市',
    type: 'local',
    maxAmount: '令和7年8月から高校生年代まで助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '北海道',
    tags: ['旭川市', '子ども医療費', '高校生年代', '令和7年8月拡大', '子育て'],
    eligibility: '旭川市の制度要件を満たす子どもが対象です。令和7年8月1日から18歳年度末までの高校生年代にも対象が拡大されています。',
    applicationPeriod: '通年。新規申請、拡充対象申請、変更・再交付等はフォームで手続き可能',
    description: '旭川市が、子どもの医療費を助成する制度です。令和7年8月から高校生年代まで対象が拡大されています。',
    sections: [
      { heading: '制度の概要', content: '<p>旭川市子ども医療費助成は、子どもが医療機関等を受診したときの医療費負担を軽減する制度です。</p>' },
      { heading: '対象年齢の拡大', content: '<p>令和7年8月1日から、高校生年代、18歳に達する日以後の最初の3月31日までの児童に対象が拡大されています。</p>' },
      { heading: '申請方法', content: '<p>新規申請、高校生拡充の申請、各種変更、再交付、不足書類提出などのフォームが公式ページで案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.asahikawa.hokkaido.jp/kurashi/218/228/230/p004567.html',
    sourceName: '旭川市 子ども医療費助成',
    sourceUrls: ['https://www.city.asahikawa.hokkaido.jp/kurashi/218/228/230/p004567.html'],
    sourceNote: '旭川市公式ページで2026年6月15日最終更新、令和7年8月1日から高校生年代まで対象拡大、新規申請・高校生拡充申請フォーム等を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hakodate-child-medical',
    title: '函館市 子ども医療費助成',
    organization: '函館市',
    type: 'local',
    maxAmount: '高校卒業まで医療費自己負担を無料',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '北海道',
    tags: ['函館市', '子ども医療費', '高校卒業まで', '所得制限なし', '子育て'],
    eligibility: '函館市に住民登録がある高校卒業までの子どもが対象です。',
    applicationPeriod: '通年。受給者証の交付申請が必要',
    description: '函館市が、高校卒業までの子どもの保険診療に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>函館市子ども医療費助成は、高校卒業までの子どもが医療機関等で診療を受けたとき、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>函館市に住民登録がある高校卒業までの子ども、満18歳に達する日以後の最初の3月31日までの子どもが対象です。所得制限はありません。</p>' },
      { heading: '助成内容', content: '<p>受給者証を持つすべての子どもの医療費自己負担は無料です。助成を受けるには受給者証の交付申請手続きが必要です。</p>' }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/docs/2014012000574/',
    sourceName: '函館市 子ども医療費助成',
    sourceUrls: ['https://www.city.hakodate.hokkaido.jp/docs/2014012000574/'],
    sourceNote: '函館市公式ページで2026年5月7日更新、高校卒業まで、所得制限なし、受給者証所持者は医療費自己負担無料、交付申請が必要であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-city-child-medical',
    title: '佐賀市 子どもの医療費助成制度',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '令和8年1月から高校生年代まで助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '佐賀県',
    tags: ['佐賀市', '子ども医療費', '高校生年代', '令和8年1月拡大', '子育て'],
    eligibility: '佐賀市の制度要件を満たす18歳年度末までの子どもが対象です。',
    applicationPeriod: '通年。資格証の交付・助成申請は公式案内に従う',
    description: '佐賀市が、子どもの医療費の一部を助成する制度です。令和8年1月から高校生年代まで対象が拡大されています。',
    sections: [
      { heading: '制度の概要', content: '<p>佐賀市子どもの医療費助成制度は、子どもの医療に要する医療費の一部を助成する制度です。</p>' },
      { heading: '対象年齢の拡大', content: '<p>令和8年1月1日から、対象が高校生年代、18歳年度末までに拡大されています。小学生以上の受給資格証の有効期限も18歳年度末までに変更されています。</p>' },
      { heading: '申請', content: '<p>現在資格を持つ対象者は、新様式の受給資格証発送に伴い申請不要として案内されています。県外受診などでは助成金申請手続きが必要です。</p>' }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/kosodate-kyoiku/mokuteki/5/1/1924.html',
    sourceName: '佐賀市 子どもの医療費助成制度',
    sourceUrls: [
      'https://www.city.saga.lg.jp/kosodate-kyoiku/mokuteki/5/1/1924.html',
      'https://www1.g-reiki.net/city.saga/reiki_honbun/r276RG00000300.html'
    ],
    sourceNote: '佐賀市公式ページで2026年5月28日更新、令和8年1月1日から高校生年代まで対象拡大、条例で18歳年度末までを子どもと定義していることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-city-child-medical',
    title: '長崎市 こども福祉医療',
    organization: '長崎市',
    type: 'local',
    maxAmount: '高校生世代までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '長崎県',
    tags: ['長崎市', 'こども福祉医療', '高校生世代', '令和5年4月拡大', '子育て'],
    eligibility: '長崎市の制度要件を満たす高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。高校生世代は支給申請書と領収書等による申請が必要',
    description: '長崎市が、高校生世代までの子どもの医療費を助成するこども福祉医療制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長崎市こども福祉医療は、子どもの医療費負担を軽減する制度です。</p>' },
      { heading: '対象拡大', content: '<p>令和5年4月1日診療分から、高校生世代、満18歳に達する年の年度末までについても医療費を助成しています。</p>' },
      { heading: '申請方法', content: '<p>高校生世代が医療費助成を受けるには、支給申請書と領収書原本を添付した申請が必要です。申請には受給者証も必要です。</p>' }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/site/e-kao/6488.html',
    sourceName: '長崎市 こども福祉医療',
    sourceUrls: ['https://www.city.nagasaki.lg.jp/site/e-kao/6488.html'],
    sourceNote: '長崎市公式子育て応援情報サイトで2026年3月頃更新、令和5年4月1日診療分から高校生世代まで拡大、支給申請書・領収書・受給者証による申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-city-child-medical',
    title: '大分市 子ども医療費助成事業',
    organization: '大分市',
    type: 'local',
    maxAmount: '高校生年代までの保険診療自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '大分県',
    tags: ['大分市', '子ども医療費', '高校生年代', '受給資格者証', '子育て'],
    eligibility: '大分市に住民登録があり、健康保険に加入している0歳から高校生年代までの子どもが対象です。',
    applicationPeriod: '通年。医療費助成を受けるには市への登録申請が必要',
    description: '大分市が、0歳から高校生年代までの子どもの保険診療自己負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大分市子ども医療費助成事業は、子どもの健全な育成と子育て世帯の経済的負担軽減のため、保護者が支払う保険診療の自己負担額を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>大分市に住んでいる、住民登録をしていること、健康保険に加入していることを満たす0歳から高校生年代、18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '登録申請', content: '<p>医療費の助成を受けるには、市に登録申請が必要です。登録完了後、子ども医療費助成受給資格者証が郵送されます。</p>' }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/o107/kosodate/ninshin/1206836662174.html',
    sourceName: '大分市 子ども医療費助成事業',
    sourceUrls: ['https://www.city.oita.oita.jp/o107/kosodate/ninshin/1206836662174.html'],
    sourceNote: '大分市公式ページで0歳から高校生年代まで、大分市住民登録、健康保険加入、保険診療自己負担額助成、登録申請と受給資格者証交付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyazaki-city-child-medical',
    title: '宮崎市 子ども医療費助成',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '0歳から中学3年生までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '宮崎県',
    tags: ['宮崎市', '子ども医療費', '中学3年生まで', '健康保険', '子育て'],
    eligibility: '宮崎市に住民登録があり、健康保険に加入し、生活保護等を受けていない0歳から中学3年生までの子どもが対象です。',
    applicationPeriod: '通年。受給資格証の手続きは公式案内に従う',
    description: '宮崎市が、0歳から中学3年生までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宮崎市子ども医療費助成は、子どもの医療費負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>0歳から中学3年生、15歳に達する日以後最初の3月31日までの子どもで、宮崎市に住民登録があること、健康保険に加入していること、生活保護を受けていないことなどが条件です。</p>' },
      { heading: '他制度との関係', content: '<p>小中学生については、ひとり親家庭等医療費助成や重度心身障がい者医療費助成を受けていないことも条件です。</p>' }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/education/childbirth/399034.html',
    sourceName: '宮崎市 子ども医療費の助成について',
    sourceUrls: ['https://www.city.miyazaki.miyazaki.jp/education/childbirth/399034.html'],
    sourceNote: '宮崎市公式ページで2025年12月頃更新、0歳から中学3年生まで、宮崎市住民登録、健康保険加入、生活保護なし、他制度全額助成なしを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-city-child-medical',
    title: '鹿児島市 こども医療費助成制度',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '中学3年生までの保険診療医療費の一部を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '鹿児島県',
    tags: ['鹿児島市', 'こども医療費', '中学3年生まで', '所得制限なし', 'オンライン申請'],
    eligibility: '鹿児島市内に住所があり、健康保険に加入し、生活保護等を受けていない中学3年生までの子どもが対象です。市町村民税非課税世帯は18歳年度末まで対象です。',
    applicationPeriod: '通年。オンライン申請にも対応',
    description: '鹿児島市が、子どもの保険診療による医療費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鹿児島市こども医療費助成制度は、子どもの健康と健やかな育成を図るため、保険診療による医療費の一部を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>鹿児島市内に住所がある中学3年生までの子どもが対象です。市町村民税非課税世帯は18歳年度末までの子どもも対象です。所得制限はありません。</p>' },
      { heading: '対象外', content: '<p>健康保険に加入していない場合、生活保護等の他の医療扶助を受けている場合は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/kosodate/kodomofuku/kosodate/kosodate/teate/sedo/index.html',
    sourceName: '鹿児島市 こども医療費助成制度',
    sourceUrls: ['https://www.city.kagoshima.lg.jp/kosodate/kodomofuku/kosodate/kosodate/teate/sedo/index.html'],
    sourceNote: '鹿児島市公式ページで2026年3月31日更新、中学3年生まで、市町村民税非課税世帯は18歳年度末まで、健康保険加入、所得制限なし、オンライン申請対応を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'naha-child-medical',
    title: '那覇市 こども医療費助成制度',
    organization: '那覇市',
    type: 'local',
    maxAmount: '0歳から中学校3年生まで保険診療自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '沖縄県',
    tags: ['那覇市', 'こども医療費', '中学校3年生まで', '窓口無料', 'オンライン申請'],
    eligibility: '那覇市に住所があり、いずれかの健康保険に加入している0歳から中学校3年生までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入時に資格認定手続き。オンライン申請にも対応',
    description: '那覇市が、0歳から中学校3年生までの子どもの保険診療自己負担分を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>那覇市こども医療費助成制度は、子どもの保健向上と健やかな育成を目的に、保護者が支払った保険診療の自己負担分の一部を助成する制度です。</p>' },
      { heading: '対象者と助成範囲', content: '<p>那覇市に住所があり、健康保険に加入している子どもが対象です。助成する医療費は0歳児から中学校3年生までの外来・入院の保険診療自己負担分で、入院時食事療養費は除きます。</p>' },
      { heading: '利用方法', content: '<p>県内協力医療機関では受給者証を提示することで窓口無料の現物給付が利用できます。資格認定は窓口またはオンライン申請で手続きできます。</p>' }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/child/kosodateouen/1002858/1002860.html',
    sourceName: '那覇市 こども医療費助成制度',
    sourceUrls: ['https://www.city.naha.okinawa.jp/child/kosodateouen/1002858/1002860.html'],
    sourceNote: '那覇市公式ページで令和8年1月19日更新、0歳児から中学校3年生まで、保険診療自己負担分、現物給付方式、オンライン申請対応を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kawagoe-child-medical',
    title: '川越市 こども医療費支給制度',
    organization: '川越市',
    type: 'local',
    maxAmount: '子どもの医療費の一部を支給',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '埼玉県',
    tags: ['川越市', 'こども医療費', '受給資格登録', '電子申請', '子育て'],
    eligibility: '川越市の制度要件を満たす子どもが対象です。制度利用にはあらかじめ受給資格の登録が必要です。',
    applicationPeriod: '通年。受給資格登録、変更届、再交付などは公式案内に従う',
    description: '川越市が、子どもが病気やけがなどで支払う医療費の一部を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>川越市こども医療費支給制度は、子どもが病気やけがなどで支払う医療費の一部を支給する制度です。</p>' },
      { heading: '受給資格登録', content: '<p>制度を利用するには、あらかじめ受給資格の登録が必要です。受給資格証の交付後、医療機関等で助成を受けられます。</p>' },
      { heading: '手続き', content: '<p>受給資格登録や各種届出、電子申請の案内が公式ページに掲載されています。保険情報や住所などに変更がある場合も届出が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.kawagoe.saitama.jp/kenko/iryo/1006606/1006615/1006622/1006625.html',
    sourceName: '川越市 こども医療費支給制度',
    sourceUrls: ['https://www.city.kawagoe.saitama.jp/kenko/iryo/1006606/1006615/1006622/1006625.html'],
    sourceNote: '川越市公式ページで2026年2月19日更新、子どもが病気やけがなどで支払う医療費の一部支給、事前の受給資格登録、電子申請等を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kawaguchi-child-medical',
    title: '川口市 子ども医療費支給制度',
    organization: '川口市',
    type: 'local',
    maxAmount: '18歳年度末までの医療費の一部を支給',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '埼玉県',
    tags: ['川口市', '子ども医療費', '18歳年度末', '令和6年10月拡大', '子育て'],
    eligibility: '川口市に住民票がある18歳年度末までの子どもと、国内に住民票がある主たる生計維持者の保護者が対象です。',
    applicationPeriod: '通年。受給資格登録申請が必要',
    description: '川口市が、18歳年度末までの子どもに対する医療費の一部を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>川口市子ども医療費支給制度は、子どもが必要な医療を受けやすくするため、医療費の一部を支給する制度です。</p>' },
      { heading: '対象年齢の拡大', content: '<p>令和6年10月診療分から、入院・通院ともに対象年齢が18歳年度末まで拡大されています。</p>' },
      { heading: '対象外', content: '<p>生活保護、ひとり親家庭等医療費、重度心身障害者医療費、施設入所等により他の医療費助成がある場合などは対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/soshiki/01080/020/5/2/4209.html',
    sourceName: '川口市 子ども医療費支給制度について【令和6年10月から】',
    sourceUrls: ['https://www.city.kawaguchi.lg.jp/soshiki/01080/020/5/2/4209.html'],
    sourceNote: '川口市公式ページで令和6年10月診療分から入院・通院とも18歳年度末まで拡大、川口市住民票、対象外条件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koshigaya-child-medical',
    title: '越谷市 こども医療費支給制度',
    organization: '越谷市',
    type: 'local',
    maxAmount: '健康保険の医療費給付対象分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '埼玉県',
    tags: ['越谷市', 'こども医療費', '健康保険', '18歳年度末', '子育て'],
    eligibility: '越谷市の制度要件を満たす子どもが対象です。',
    applicationPeriod: '通年。受給資格登録や各種届出は公式案内に従う',
    description: '越谷市が、子どもの健康保険適用医療費の自己負担分を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>越谷市こども医療費支給制度は、子どもの医療費負担を軽減するための制度です。</p>' },
      { heading: '助成対象', content: '<p>助成対象は、食事療養費を除く健康保険の医療費給付対象のものです。自費分、保険適用外のものは助成対象外です。</p>' },
      { heading: '給付額の確認', content: '<p>高額療養費や付加給付金など、他制度から支給される分は振込額から除かれる場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.koshigaya.saitama.jp/kurashi_shisei/kosodate/teate/kodomoiryo.html',
    sourceName: '越谷市 こども医療費支給制度',
    sourceUrls: ['https://www.city.koshigaya.saitama.jp/kurashi_shisei/kosodate/teate/kodomoiryo.html'],
    sourceNote: '越谷市公式ページで2026年6月頃更新、健康保険の医療費給付対象、食事療養費・自費分対象外、高額療養費等を除く扱いを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kashiwa-child-medical',
    title: '柏市 子ども医療費助成制度',
    organization: '柏市',
    type: 'local',
    maxAmount: '高校3年生相当年齢まで入院・通院・調剤を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '千葉県',
    tags: ['柏市', '子ども医療費', '高校3年生相当', '通院300円', '子育て'],
    eligibility: '0歳から高校3年生相当年齢までの子どもが対象です。婚姻している児童などは除かれます。',
    applicationPeriod: '通年。受給券の交付申請・更新は公式案内に従う',
    description: '柏市が、高校3年生相当年齢までの子どもの入院・通院・調剤の保険診療分医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>柏市子ども医療費助成制度は、子どもの保険診療分医療費を助成する制度です。</p>' },
      { heading: '対象年齢', content: '<p>0歳から高校3年生相当年齢までが対象です。令和5年4月1日受診分から高校生相当年齢まで助成対象が拡大されています。</p>' },
      { heading: '自己負担', content: '<p>通院は1回300円、入院は1日300円、調剤は無料です。市町村民税所得割非課税世帯は自己負担無料です。</p>' }
    ],
    officialUrl: 'https://www.city.kashiwa.lg.jp/kodomofukushi/haguhagu/navi/teate/iryohi/jose.html',
    sourceName: '柏市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.kashiwa.lg.jp/kodomofukushi/haguhagu/navi/teate/iryohi/jose.html'],
    sourceNote: '柏市公式ページで0歳から高校3年生相当年齢、入院・通院・調剤の保険診療分、通院300円・入院300円・調剤無料、令和5年4月から高校生相当まで拡大を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fujisawa-child-medical',
    title: '藤沢市 小児医療費助成制度',
    organization: '藤沢市',
    type: 'local',
    maxAmount: '小児医療費の自己負担分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '神奈川県',
    tags: ['藤沢市', '小児医療費', '電子申請', '払い戻し', '子育て'],
    eligibility: '藤沢市の制度要件を満たす子どもが対象です。',
    applicationPeriod: '通年。2026年4月から払い戻し申請が電子申請に移行',
    description: '藤沢市が、子どもの小児医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>藤沢市小児医療費助成制度は、子どもの医療費負担を軽減する制度です。</p>' },
      { heading: '払い戻し申請', content: '<p>神奈川県外の医療機関などを受診し、医療証が使えず自己負担した場合の払い戻し申請は、2026年4月1日申請分から電子申請に変わっています。</p>' },
      { heading: '必要情報', content: '<p>電子申請では、医療証、健康保険加入を証明する書類、領収書などの画像添付と、受診日、医療機関名、支払額などの入力が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.fujisawa.kanagawa.jp/kosodate/kenko/kosodate/teate/josesedo.html',
    sourceName: '藤沢市 小児医療費助成制度',
    sourceUrls: ['https://www.city.fujisawa.kanagawa.jp/kosodate/kenko/kosodate/teate/josesedo.html'],
    sourceNote: '藤沢市公式ページで小児医療費助成制度、2026年4月1日から払い戻し申請が電子申請に移行、医療証・健康保険書類・領収書等が必要であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yokosuka-child-medical',
    title: '横須賀市 小児医療費助成',
    organization: '横須賀市',
    type: 'local',
    maxAmount: '0歳から18歳年度末までの入院・通院等を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '神奈川県',
    tags: ['横須賀市', '小児医療費', '18歳年度末', '電子申請', '子育て'],
    eligibility: '横須賀市の制度要件を満たす0歳から18歳年度末までの子どもが対象です。',
    applicationPeriod: '通年。令和8年5月19日からマイナポータルで新規電子申請開始',
    description: '横須賀市が、0歳から18歳年度末までの子どもの入院・通院などの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>横須賀市小児医療費助成は、0歳から18歳の年度末までの子どもの入院・通院などの医療費を助成する制度です。</p>' },
      { heading: '医療証', content: '<p>令和6年7月1日に医療証の名称が「小児医療証」から「こども医療証」へ変更されています。</p>' },
      { heading: '電子申請', content: '<p>令和8年5月19日から、マイナポータルを利用した小児医療証の新規電子申請が開始されています。</p>' }
    ],
    officialUrl: 'https://www.city.yokosuka.kanagawa.jp/3915/g_info/l100000592.html',
    sourceName: '横須賀市 小児医療費助成',
    sourceUrls: ['https://www.city.yokosuka.kanagawa.jp/3915/g_info/l100000592.html'],
    sourceNote: '横須賀市公式ページで0歳から18歳年度末までの入院・通院等の医療費助成、令和6年7月医療証名称変更、令和8年5月19日から新規電子申請開始を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyohashi-child-medical',
    title: '豊橋市 子ども医療',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '18歳年度末まで入院・通院を全額助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '愛知県',
    tags: ['豊橋市', '子ども医療', '18歳年度末', '全額助成', '子育て'],
    eligibility: '0歳から18歳到達年度末までの子どもが対象です。',
    applicationPeriod: '通年。受給者証の交付申請が必要',
    description: '豊橋市が、0歳から18歳年度末までの子どもの保険適用医療費を入院・通院とも全額助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>豊橋市子ども医療は、0歳から18歳到達年度末までの子どもの医療費を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>入院・通院ともに全額助成で、受給者証を提示すれば保険適用の治療は窓口負担なしです。</p>' },
      { heading: '対象外', content: '<p>保険適用外の入院時食事代、容器代などは対象外です。高額療養費や付加給付金がある場合は差し引かれます。</p>' }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/45631.htm',
    sourceName: '豊橋市 子ども医療',
    sourceUrls: ['https://www.city.toyohashi.lg.jp/45631.htm'],
    sourceNote: '豊橋市公式ページで0歳から18歳到達年度末まで、入院・通院とも全額助成、保険適用外の食事代・容器代等は対象外、令和6年1月以降通院分拡大を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okazaki-child-medical',
    title: '岡崎市 子ども医療費助成',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '中学校卒業までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '愛知県',
    tags: ['岡崎市', '子ども医療費', '中学校卒業まで', '受給者証', '子育て'],
    eligibility: '岡崎市内に住む中学校卒業前、15歳到達年度末までの子どもが対象です。',
    applicationPeriod: '通年。受給者証の交付申請が必要',
    description: '岡崎市が、中学校卒業までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岡崎市子ども医療費助成は、中学校卒業までの子どもの医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>岡崎市内に住む中学校卒業前、15歳到達の年度末までの子どもが対象です。</p>' },
      { heading: '申請', content: '<p>申請により子ども医療費受給者証を交付します。子どもの健康保険情報が確認できるものを持って福祉医療課で手続きします。支所や電子申請も利用できます。</p>' }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/kosodate/ninshin/1012190/1012192/1003467.html',
    sourceName: '岡崎市 子ども医療費助成',
    sourceUrls: ['https://www.city.okazaki.lg.jp/kosodate/ninshin/1012190/1012192/1003467.html'],
    sourceNote: '岡崎市公式ページで2026年4月14日更新、中学校卒業前まで、受給者証交付申請、支所・電子申請対応、中学校卒業後から18歳年度末までの入院費助成は別制度であることを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyota-child-medical',
    title: '豊田市 子ども医療費助成制度',
    organization: '豊田市',
    type: 'local',
    maxAmount: '高校生世代まで保険診療自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '愛知県',
    tags: ['豊田市', '子ども医療費', '高校生世代', '令和6年4月拡大', '子育て'],
    eligibility: '高校生世代、18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。受給者証の交付申請が必要',
    description: '豊田市が、高校生世代までの子どもの保険診療分の医療費自己負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>豊田市子ども医療費助成制度は、申請により子ども医療費受給者証を交付し、保険診療分の医療費自己負担額を助成する制度です。</p>' },
      { heading: '対象年齢', content: '<p>対象は高校生世代、18歳に達した日以後の最初の3月31日までの子どもです。令和6年4月診療分から、通院の助成対象が中学校卒業までから高校生世代までに拡大されています。</p>' },
      { heading: '他制度との関係', content: '<p>心身障がい者医療、母子・父子家庭医療助成、精神障がい者医療など、他の医療費助成制度が優先される場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.toyota.aichi.jp/kurashi/kosodateshien/ninshin/1003336.html',
    sourceName: '豊田市 子ども医療費助成制度（高校生世代まで）',
    sourceUrls: ['https://www.city.toyota.aichi.jp/kurashi/kosodateshien/ninshin/1003336.html'],
    sourceNote: '豊田市公式ページで2026年3月11日更新、高校生世代まで、令和6年4月診療分から通院も高校生世代まで拡大、保険診療分自己負担額助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ichinomiya-child-medical',
    title: '一宮市 子ども医療費の助成',
    organization: '一宮市',
    type: 'local',
    maxAmount: '高校生世代までの医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '愛知県',
    tags: ['一宮市', '子ども医療費', '高校生世代', '令和7年10月拡大', '子育て'],
    eligibility: '一宮市の制度要件を満たす高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。医療証交付申請や償還払い申請は公式案内に従う',
    description: '一宮市が、高校生世代までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>一宮市子ども医療費の助成は、子どもの医療費負担を軽減する制度です。</p>' },
      { heading: '令和7年10月からの拡充', content: '<p>令和7年10月診療分から、通院についても高校生世代まで助成対象が拡大されています。</p>' },
      { heading: '申請', content: '<p>助成を受けるには医療証の交付申請が必要です。県外受診や医療証を提示できなかった場合は償還払いの手続きがあります。</p>' }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/shiminkenkou/1075014/1075021/1000150/1001172.html',
    sourceName: '一宮市 子ども医療費の助成',
    sourceUrls: ['https://www.city.ichinomiya.aichi.jp/shiminkenkou/1075014/1075021/1000150/1001172.html'],
    sourceNote: '一宮市公式ページで2026年4月1日更新、子ども医療費助成、令和7年10月診療分から通院も高校生世代まで拡大、他医療費助成制度優先を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'himeji-child-medical',
    title: '姫路市 乳幼児等・こども医療費の助成',
    organization: '姫路市',
    type: 'local',
    maxAmount: '0歳から18歳までの医療費自己負担を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '兵庫県',
    tags: ['姫路市', 'こども医療費', '18歳まで', '医療保険', '子育て'],
    eligibility: '姫路市に住所があり、医療保険に加入している0歳から18歳年度末までの子どもが対象です。',
    applicationPeriod: '通年。対象者によりオンライン申請・紙申請が必要',
    description: '姫路市が、0歳から18歳年度末までの子どもが医療機関等を受診した際の医療費自己負担を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>姫路市の乳幼児等・こども医療費助成は、医療保険に加入している0歳から18歳までの子どもが医療機関等を受診した際の医療費自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>姫路市に住所を有していること、医療保険に加入していること、0歳から18歳到達後最初の3月31日までであることが要件です。</p>' },
      { heading: '申請方法', content: '<p>制度拡大後の対象者や転入者などは、オンラインまたは紙の申請書で申請する案内があります。</p>' }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/kurashi/0000007975.html',
    sourceName: '姫路市 乳幼児等・こども医療費の助成',
    sourceUrls: ['https://www.city.himeji.lg.jp/kurashi/0000007975.html'],
    sourceNote: '姫路市公式ページで2026年3月頃更新、0歳から18歳年度末まで、姫路市住所、医療保険加入、医療費自己負担助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nishinomiya-child-medical',
    title: '西宮市 こども医療費助成制度',
    organization: '西宮市',
    type: 'local',
    maxAmount: '令和8年1月から高校生世代まで外来・入院無料',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '兵庫県',
    tags: ['西宮市', 'こども医療費', '高校生世代', '令和8年1月無償化', '子育て'],
    eligibility: '西宮市の制度要件を満たす高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。こども医療費受給者証の交付申請が必要',
    description: '西宮市が、健康保険が適用されるこどもの医療費自己負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>西宮市こども医療費助成制度は、こども医療費受給者証の交付を受けた方の健康保険適用医療費について、市が自己負担額を助成する制度です。</p>' },
      { heading: '令和8年1月からの無償化', content: '<p>令和8年1月1日から、高校生世代までの子どもを対象に、年齢・所得区分に関係なく外来・入院の一部負担金が無料になります。</p>' },
      { heading: '制度名称', content: '<p>これまでの乳幼児等医療費助成制度は、こども医療費助成制度に名称が統一されています。</p>' }
    ],
    officialUrl: 'https://www.nishi.or.jp/kurashi/iryohijosei/nyuyojito/kodomoiryo-josei.html',
    sourceName: '西宮市 こども医療費助成制度',
    sourceUrls: ['https://www.nishi.or.jp/kurashi/iryohijosei/nyuyojito/kodomoiryo-josei.html'],
    sourceNote: '西宮市公式ページで2026年1月14日更新、令和8年1月1日から高校生世代まで年齢・所得区分に関係なく外来・入院無料、受給者証交付を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'amagasaki-child-medical',
    title: '尼崎市 こども医療の受給資格',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '令和8年7月から高校生世代まで保険適用分を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '兵庫県',
    tags: ['尼崎市', 'こども医療', '高校生世代', '令和8年7月', '福祉医療'],
    eligibility: '尼崎市に住所があり、健康保険に加入している子どもが対象です。令和8年7月から対象範囲が拡充されています。',
    applicationPeriod: '通年。制度別ホームページの案内に従って申請',
    description: '尼崎市が、子どもの医療費のうち保険適用分の自己負担の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>尼崎市では福祉医療費助成制度として、申請により医療費の保険適用分のうち自己負担分の一部を助成しています。</p>' },
      { heading: '令和8年7月からの制度', content: '<p>令和8年7月からの福祉医療費助成制度が案内されており、こども医療についても対象者や負担区分が整理されています。</p>' },
      { heading: '申請', content: '<p>助成を受けるには申請が必要です。申請に必要な書類は制度ごとのホームページで確認します。</p>' }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/kurashi/kenko/josei/045kodomo.html',
    sourceName: '尼崎市 こども医療の受給資格など',
    sourceUrls: [
      'https://www.city.amagasaki.hyogo.jp/kurashi/kenko/josei/045kodomo.html',
      'https://www.city.amagasaki.hyogo.jp/kurashi/kenko/josei/1010752.html'
    ],
    sourceNote: '尼崎市公式ページで2026年6月1日更新、こども医療の受給資格、尼崎市住所・健康保険加入、令和8年7月からの福祉医療費助成制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hirakata-child-medical',
    title: '枚方市 子ども医療',
    organization: '枚方市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費の一部と入院時食事療養費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '大阪府',
    tags: ['枚方市', '子ども医療', '18歳年度末', '電子申請', '子育て'],
    eligibility: '健康保険に加入している18歳到達後最初の3月31日までの児童が対象です。',
    applicationPeriod: '通年。医療証交付、払い戻し、資格変更、再発行は電子・郵送手続きにも対応',
    description: '枚方市が、18歳年度末までの児童に医療費の一部と入院時食事療養費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>枚方市子ども医療は、健康保険に加入している18歳年度末までの児童に、医療費の一部と入院時食事療養費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>18歳に達した最初の3月31日までの児童が対象です。平成20年4月1日以前生まれの方は、令和5年8月診療分から助成対象として案内されています。</p>' },
      { heading: '手続き', content: '<p>医療証の交付申請、払い戻し申請、資格変更届、医療証の再発行は、電子申請や郵送手続きにも対応しています。</p>' }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/kosodate/0000035713.html',
    sourceName: '枚方市 子ども医療',
    sourceUrls: ['https://www.city.hirakata.osaka.jp/kosodate/0000035713.html'],
    sourceNote: '枚方市公式ページで2026年3月17日更新、健康保険加入、18歳年度末まで、医療費の一部と入院時食事療養費の助成、電子・郵送手続き対応を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yao-child-medical',
    title: '八尾市 子ども医療費助成制度',
    organization: '八尾市',
    type: 'local',
    maxAmount: '0歳から18歳年度末まで通院・入院を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '大阪府',
    tags: ['八尾市', '子ども医療費', '18歳年度末', '所得制限なし', '子育て'],
    eligibility: '八尾市の制度要件を満たす0歳から18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。子ども医療証の交付申請や償還申請は公式案内に従う',
    description: '八尾市が、0歳から18歳年度末までの子どもの通院・入院に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>八尾市子ども医療費助成制度は、子どもの通院および入院に係る医療費を助成する制度です。</p>' },
      { heading: '助成対象', content: '<p>対象年齢は0歳から18歳、18歳到達後最初の3月31日までです。通院および入院が助成対象で、所得制限はありません。</p>' },
      { heading: '自己負担と償還', content: '<p>大阪府内の医療機関等では健康保険資格を確認できるものと医療証を提示します。大阪府外受診や医療証未提示の場合は償還申請ができます。</p>' }
    ],
    officialUrl: 'https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003919/1003936.html',
    sourceName: '八尾市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.yao.osaka.jp/kosodate_kyouiku/kosodateshien_teate/1003917/1003919/1003936.html'],
    sourceNote: '八尾市公式ページで子ども医療費助成制度、0歳から18歳年度末まで、通院・入院、所得制限なし、医療証提示と償還申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'neyagawa-child-medical',
    title: '寝屋川市 子ども医療費助成制度',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '高校生世代まで保険診療自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '大阪府',
    tags: ['寝屋川市', '子ども医療費', '高校生世代', '入院時食事代', '子育て'],
    eligibility: '寝屋川市に住民登録があり、健康保険に加入している高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。子ども医療証の交付申請等は公式案内に従う',
    description: '寝屋川市が、高校生世代までの子どもの保険診療自己負担額から一部自己負担額を除いた額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>寝屋川市子ども医療費助成制度は、医療機関等での診療や訪問看護を利用したときに負担する保険診療分の自己負担額から、一部自己負担額を除いた額を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>寝屋川市に住民登録があり、健康保険に加入している高校生世代、18歳に達して以後最初の3月31日までの方が対象です。</p>' },
      { heading: '助成内容', content: '<p>処方箋による調剤薬局でのお薬代、治療用装具の費用、入院時の食事代の自己負担分は全額助成されます。保険適用外費用は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/organization_list/shiminservice/s_iryo/iryouhi/kodomoiryouhi.html',
    sourceName: '寝屋川市 子ども医療費助成制度のご案内',
    sourceUrls: ['https://www.city.neyagawa.osaka.jp/organization_list/shiminservice/s_iryo/iryouhi/kodomoiryouhi.html'],
    sourceNote: '寝屋川市公式ページで高校生世代まで、寝屋川市住民登録、健康保険加入、保険診療自己負担額から一部自己負担額を除いた額の助成、調剤薬局・治療用装具・入院時食事代自己負担分全額助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kishiwada-child-medical',
    title: '岸和田市 子ども医療費助成制度',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '0歳から18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '大阪府',
    tags: ['岸和田市', '子ども医療費', '18歳年度末', '医療証', '子育て'],
    eligibility: '岸和田市に住所があり、健康保険に加入している0歳から18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の資格発生日後、子ども医療証の交付申請等を行う',
    description: '岸和田市が、18歳年度末までの子どもの保険診療に係る自己負担の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岸和田市子ども医療費助成制度は、健康保険に加入している子どもが医療機関等を受診した際の保険診療分について、自己負担の一部を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>対象は岸和田市に住所がある0歳から18歳到達後最初の3月31日までの子どもです。生活保護や他の公費医療制度との関係など、対象外となる場合があります。</p>' },
      { heading: '手続き', content: '<p>子ども医療証の交付申請が必要です。大阪府外の医療機関で受診した場合など、医療証を使えないケースでは払い戻しの手続きが案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.kishiwada.lg.jp/page/121-kodomoiryoujosei.html',
    sourceName: '岸和田市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.kishiwada.lg.jp/page/121-kodomoiryoujosei.html'],
    sourceNote: '岸和田市公式ページで子ども医療費助成、18歳年度末まで、健康保険加入、所得制限なし、通院・入院・入院時食事療養費等の助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'akashi-child-medical',
    title: '明石市 こども医療費助成制度',
    organization: '明石市',
    type: 'local',
    maxAmount: '高校3年生世代まで通院・入院を無料化',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '兵庫県',
    tags: ['明石市', 'こども医療費', '高校3年生世代', '所得制限なし', '子育て'],
    eligibility: '明石市に住民登録があり、健康保険に加入している0歳から高校3年生世代までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、こども医療費受給者証の申請を行う',
    description: '明石市が、0歳から高校3年生世代までの通院・入院医療費を所得制限なしで助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>明石市こども医療費助成制度は、子育て世帯の医療費負担を軽減するため、対象となる子どもの保険診療分の自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>0歳から高校3年生世代までの子どもが対象です。明石市に住民登録があり、健康保険に加入していることが要件です。</p>' },
      { heading: '助成内容', content: '<p>通院・入院とも助成対象で、所得制限はありません。県外受診など受給者証を使えない場合は、後日払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.akashi.lg.jp/kodomo/jidou_fu_ka/kodomo-kyoiku/kosodate/jose.html',
    sourceName: '明石市 こども医療費助成制度',
    sourceUrls: ['https://www.city.akashi.lg.jp/kodomo/jidou_fu_ka/kodomo-kyoiku/kosodate/jose.html'],
    sourceNote: '明石市公式ページでこども医療費助成制度、0歳から高校3年生世代まで、所得制限なし、通院・入院、払い戻し申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kakogawa-child-medical',
    title: '加古川市 こども医療費助成制度',
    organization: '加古川市',
    type: 'local',
    maxAmount: '高校3年生世代まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '兵庫県',
    tags: ['加古川市', 'こども医療費', '高校3年生世代', '医療証', '子育て'],
    eligibility: '加古川市に住民登録があり、健康保険に加入している高校3年生世代までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格認定申請を行う',
    description: '加古川市が、高校3年生世代までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>加古川市こども医療費助成制度は、健康保険が適用される医療費について、対象となる子どもの自己負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>加古川市に住民登録があり、健康保険に加入している高校3年生世代までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>兵庫県内の医療機関等では医療証等を提示して受診します。県外受診や医療証を提示できなかった場合は、領収書等を添えて払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/soshikikarasagasu/kenkouiryou/iryojoseinenkinka/iryojosei/1416213237850.html',
    sourceName: '加古川市 こども医療費助成制度',
    sourceUrls: ['https://www.city.kakogawa.lg.jp/soshikikarasagasu/kenkouiryou/iryojoseinenkinka/iryojosei/1416213237850.html'],
    sourceNote: '加古川市公式ページで乳幼児等・こども医療費助成制度、0歳から18歳年度末まで、健康保険加入、保険診療自己負担額全額助成、医療費助成金の請求を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'takarazuka-child-medical',
    title: '宝塚市 こども医療費助成制度',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '高校3年生世代まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '兵庫県',
    tags: ['宝塚市', 'こども医療費', '高校3年生世代', '医療費助成', '子育て'],
    eligibility: '宝塚市に住民登録があり、健康保険に加入している高校3年生世代までの子どもが対象です。',
    applicationPeriod: '通年。受給者証の交付申請や償還払い申請は公式案内に従う',
    description: '宝塚市が、高校3年生世代までの子どもの保険診療に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宝塚市こども医療費助成制度は、子どもの保険診療に係る医療費の自己負担を助成し、子育て家庭の負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>宝塚市に住民登録があり、健康保険に加入している高校3年生世代までの子どもが対象です。</p>' },
      { heading: '申請と払い戻し', content: '<p>受給者証の交付を受け、医療機関等で提示して利用します。県外受診などの場合は、領収書等を添えて償還払いの申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/1060682/1060702/1061590/1041227/1040013.html',
    sourceName: '宝塚市 こども医療費助成制度',
    sourceUrls: ['https://www.city.takarazuka.hyogo.jp/1060682/1060702/1061590/1041227/1040013.html'],
    sourceNote: '宝塚市公式ページでこども医療費助成制度、高校3年生世代まで、健康保険加入、受給者証、償還払い申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shunan-child-medical',
    title: '周南市 こども医療費助成制度',
    organization: '周南市',
    type: 'local',
    maxAmount: '高校生年代まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '山口県',
    tags: ['周南市', 'こども医療費', '高校生年代', '福祉医療', '子育て'],
    eligibility: '周南市に住所があり、健康保険に加入している高校生年代までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証交付申請を行う',
    description: '周南市が、高校生年代までの子どもを対象に医療費の自己負担を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>周南市こども医療費助成制度は、子どもが医療機関等を受診した際の保険診療分について、自己負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>周南市に住所があり、健康保険に加入している高校生年代までの子どもが対象です。</p>' },
      { heading: '手続き', content: '<p>受給者証の交付申請が必要です。県外受診など受給者証を使えない場合は、後日払い戻しの手続きが案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/site/kodomosien/2725.html',
    sourceName: '周南市 こども医療費助成制度',
    sourceUrls: ['https://www.city.shunan.lg.jp/site/kodomosien/2725.html'],
    sourceNote: '周南市公式ページで乳幼児・こども医療費助成制度、高校生年代まで、保険診療内医療費無料化、受給者証提示、助成開始日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'imabari-child-medical',
    title: '今治市 こども医療費助成制度',
    organization: '今治市',
    type: 'local',
    maxAmount: '高校3年生世代まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '愛媛県',
    tags: ['今治市', 'こども医療費', '高校3年生世代', '医療費助成', '子育て'],
    eligibility: '今治市に住所があり、健康保険に加入している0歳から高校3年生世代までの子どもが対象です。',
    applicationPeriod: '通年。受給資格登録、受給者証交付、払い戻しは公式案内に従う',
    description: '今治市が、0歳から高校3年生世代までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>今治市こども医療費助成制度は、健康保険が適用される医療費について、対象となる子どもの自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>今治市に住所があり、健康保険に加入している0歳から高校3年生世代までの子どもが対象です。</p>' },
      { heading: '申請と払い戻し', content: '<p>受給資格登録と受給者証の交付を受けて利用します。県外受診など窓口で助成を受けられない場合は、払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/hoken/18/',
    sourceName: '今治市 こども医療費助成制度',
    sourceUrls: ['https://www.city.imabari.ehime.jp/hoken/18/'],
    sourceNote: '今治市公式ページでこどもの医療費助成、0歳から18歳年度末まで、子ども医療費受給資格者証、交付手続き、払い戻しを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kurume-child-medical',
    title: '久留米市 子ども医療費助成制度',
    organization: '久留米市',
    type: 'local',
    maxAmount: '中学校3年生まで入院・通院を無料化',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福岡県',
    tags: ['久留米市', '子ども医療費', '高校生世代', '医療証', '子育て'],
    eligibility: '久留米市に住民登録があり、健康保険に加入している高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、子ども医療証の申請を行う',
    description: '久留米市が、高校生世代までの子どもの医療費自己負担を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>久留米市子ども医療費助成制度は、子どもが病気やけがで医療機関等を受診した際の保険診療分の自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>久留米市に住民登録があり、健康保険に加入している高校生世代までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>子ども医療証の交付を受け、福岡県内の医療機関等で提示して利用します。県外受診などの場合は、払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/1070kenkou/2020kokuhonenkin/3120nyuuyouji/2008-0322-1130-89.html',
    sourceName: '久留米市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.kurume.fukuoka.jp/1070kenkou/2020kokuhonenkin/3120nyuuyouji/2008-0322-1130-89.html'],
    sourceNote: '久留米市公式ページで子ども医療費助成制度、高校生世代まで、健康保険加入、子ども医療証、払い戻し申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sasebo-child-medical',
    title: '佐世保市 子ども医療費助成制度',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '高校生世代まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '長崎県',
    tags: ['佐世保市', '子ども医療費', '高校生世代', '福祉医療', '子育て'],
    eligibility: '佐世保市に住所があり、健康保険に加入している高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。認定申請、受給者証交付、払い戻しは公式案内に従う',
    description: '佐世保市が、高校生世代までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>佐世保市子ども医療費助成制度は、子どもの疾病の早期発見と治療を支援し、子育て家庭の経済的負担を軽減するための医療費助成制度です。</p>' },
      { heading: '対象者', content: '<p>佐世保市に住所があり、健康保険に加入している高校生世代までの子どもが対象です。</p>' },
      { heading: '申請と給付', content: '<p>受給者証の交付を受けて利用します。県外医療機関の受診など現物給付を受けられない場合は、必要書類を添えて払い戻しの申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/kodomomirai/kodoshie/nyuuyoujisinki.html',
    sourceName: '佐世保市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.sasebo.lg.jp/kodomomirai/kodoshie/nyuuyoujisinki.html'],
    sourceNote: '佐世保市公式ページで乳幼児・小中学生・高校生等の福祉医療費制度、新規認定申請、受給者証、払い戻し申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shimonoseki-child-medical',
    title: '下関市 子ども医療費助成制度',
    organization: '下関市',
    type: 'local',
    maxAmount: '18歳年度末まで保険診療の自己負担額を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '山口県',
    tags: ['下関市', '子ども医療費', '18歳年度末', '福祉医療', '子育て'],
    eligibility: '下関市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証交付申請や償還払い申請を行う',
    description: '下関市が、18歳年度末までの子どもを対象に、保険診療に係る医療費の自己負担額を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>下関市子ども医療費助成制度は、子どもの健康保持と子育て世帯の経済的負担軽減のため、保険診療に係る医療費の自己負担額を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>下関市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。生活保護や他の公費医療制度が優先される場合があります。</p>' },
      { heading: '申請と受診', content: '<p>受給者証の交付申請を行い、医療機関等で提示して利用します。県外受診など受給者証を使えない場合は、領収書等を添えて償還払いを申請します。</p>' }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/soshiki/46/1638.html',
    sourceName: '下関市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.shimonoseki.lg.jp/soshiki/46/1628.html',
      'https://www.city.shimonoseki.lg.jp/soshiki/46/1637.html',
      'https://www.city.shimonoseki.lg.jp/soshiki/46/98460.html',
      'https://www.city.shimonoseki.lg.jp/soshiki/46/1638.html'
    ],
    sourceNote: '下関市公式ページで乳幼児、小学生・中学生、高校生等の医療費助成、18歳年度末まで、健康保険加入、受給者証、払戻し申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'omuta-child-medical',
    title: '大牟田市 子ども医療費支給制度',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '中学生まで通院・入院の医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福岡県',
    tags: ['大牟田市', '子ども医療費', '中学生まで', '医療証', '子育て'],
    eligibility: '大牟田市に住所があり、健康保険に加入している中学生までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、子ども医療証の申請を行う',
    description: '大牟田市が、中学生までの子どもの通院・入院に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大牟田市子ども医療費支給制度は、子どもの医療費負担を軽減するため、健康保険が適用される通院・入院医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>大牟田市に住所があり、健康保険に加入している中学生までの子どもが対象です。所得制限や他制度との関係は公式案内を確認してください。</p>' },
      { heading: '利用方法', content: '<p>子ども医療証の交付を受け、福岡県内の医療機関等で提示して利用します。県外受診などの場合は、後日払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/kiji0031060/index.html',
    sourceName: '大牟田市 子ども医療費支給制度',
    sourceUrls: ['https://www.city.omuta.lg.jp/kiji0031060/index.html'],
    sourceNote: '大牟田市公式ページで子ども医療費支給制度、中学生まで、健康保険加入、子ども医療証、県外受診等の払い戻しを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'beppu-child-medical',
    title: '別府市 子ども医療費助成制度',
    organization: '別府市',
    type: 'local',
    maxAmount: '高校生年代まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '大分県',
    tags: ['別府市', '子ども医療費', '高校生年代', '医療費助成', '子育て'],
    eligibility: '別府市に住所があり、健康保険に加入している高校生年代までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格登録や払い戻し申請を行う',
    description: '別府市が、高校生年代までの子どもを対象に医療費の自己負担を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>別府市子ども医療費助成制度は、子どもが安心して医療を受けられるよう、保険診療に係る医療費の自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>別府市に住所があり、健康保険に加入している高校生年代までの子どもが対象です。生活保護や他の医療費助成制度との関係により対象外となる場合があります。</p>' },
      { heading: '申請と助成', content: '<p>受給資格登録の手続きが必要です。県外医療機関の受診など窓口で助成を受けられない場合は、領収書等を添えて払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/kosodate/teatejyosei/detail16.html',
    sourceName: '別府市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.beppu.oita.jp/kosodate/teatejyosei/detail16.html',
      'https://www.city.beppu.oita.jp/kosodate/teatejyosei/iryou_syoukanbarai.html'
    ],
    sourceNote: '別府市公式ページで子ども医療費、未就学児・小中学生・高校生等、健康保険加入、保険診療分、償還払い手順を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nobeoka-child-medical',
    title: '延岡市 子ども医療費助成制度',
    organization: '延岡市',
    type: 'local',
    maxAmount: '中学生まで通院・入院、高校生等は入院医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '宮崎県',
    tags: ['延岡市', '子ども医療費', '18歳年度末', '医療費助成', '子育て'],
    eligibility: '延岡市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、資格認定申請や償還払い申請を行う',
    description: '延岡市が、18歳年度末までの子どもを対象に医療費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>延岡市子ども医療費助成制度は、子どもの疾病の早期発見と治療を支援し、保護者の医療費負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>延岡市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。学校管理下のけがなど、他制度が優先される場合があります。</p>' },
      { heading: '手続き', content: '<p>資格認定申請を行い、受給資格証等の交付を受けます。県外受診などの場合は、領収書等を添えて償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.nobeoka.miyazaki.jp/soshiki/32/17959.html',
    sourceName: '延岡市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.nobeoka.miyazaki.jp/soshiki/32/17959.html',
      'https://www.city.nobeoka.miyazaki.jp/soshiki/32/32984.html'
    ],
    sourceNote: '延岡市公式ページで子ども医療費助成制度、令和6年4月から18歳年度末まで拡大、健康保険加入、資格認定申請、償還払い申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kanoya-child-medical',
    title: '鹿屋市 子ども医療費助成制度',
    organization: '鹿屋市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '鹿児島県',
    tags: ['鹿屋市', '子ども医療費', '18歳年度末', '医療費助成', '子育て'],
    eligibility: '鹿屋市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格者証の申請や払い戻し申請を行う',
    description: '鹿屋市が、18歳年度末までの子どもの保険診療に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鹿屋市子ども医療費助成制度は、子どもが必要な医療を受けやすくするため、保険診療に係る自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>鹿屋市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>受給資格者証の交付を受けて利用します。県外受診など現物給付を受けられない場合は、領収書等を添えて払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.kanoya.lg.jp/jidou/kodomoiryou/kodomoiryou_20250401.html',
    sourceName: '鹿屋市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.kanoya.lg.jp/jidou/kodomoiryou/kodomoiryou_20250401.html'],
    sourceNote: '鹿屋市公式ページで令和7年4月1日診療分からの子ども医療費助成制度、18歳年度末まで、健康保険加入、現物給付方式を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okinawa-city-child-medical',
    title: '沖縄市 こども医療費助成制度',
    organization: '沖縄市',
    type: 'local',
    maxAmount: '18歳年度末まで通院・入院の医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '沖縄県',
    tags: ['沖縄市', 'こども医療費', '18歳年度末', '窓口無料', '子育て'],
    eligibility: '沖縄市に住所があり、健康保険に加入している18歳年度末までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格認定申請を行う',
    description: '沖縄市が、18歳年度末までの子どもの通院・入院に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>沖縄市こども医療費助成制度は、子どもの健康保持と保護者の経済的負担軽減のため、通院・入院に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>沖縄市に住所があり、健康保険に加入している18歳年度末までの子どもが対象です。生活保護や他の医療費助成制度が優先される場合があります。</p>' },
      { heading: '助成方法', content: '<p>受給資格認定申請を行い、受給資格者証の交付を受けます。令和7年4月受診分から対象が18歳年度末まで拡大され、健康保険適用分は原則として窓口無料で助成されます。</p>' }
    ],
    officialUrl: 'https://www.city.okinawa.okinawa.jp/k028/kosodate/kosodateshien/iryouhijosei/213/18583.html',
    sourceName: '沖縄市 こども医療費助成制度',
    sourceUrls: [
      'https://www.city.okinawa.okinawa.jp/k028/kosodate/kosodateshien/iryouhijosei/213/18583.html',
      'https://www.city.okinawa.okinawa.jp/k028/kosodate/kosodateshien/iryouhijosei/213/p00001.html'
    ],
    sourceNote: '沖縄市公式ページでこども医療費助成事業、令和7年4月受診分から18歳年度末まで拡大、健康保険適用医療費の原則窓口無料、受給資格認定申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyakonojo-child-medical',
    title: '都城市 子ども医療費助成制度',
    organization: '都城市',
    type: 'local',
    maxAmount: '中学生まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '宮崎県',
    tags: ['都城市', '子ども医療費', '中学生まで', '受給資格証', '子育て'],
    eligibility: '都城市に住所があり、健康保険に加入している中学生までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格証の申請や償還払い申請を行う',
    description: '都城市が、中学生までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>都城市子ども医療費助成制度は、子どもの保健向上と子育て家庭の負担軽減を目的に、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>都城市に住所があり、健康保険に加入している中学生までの子どもが対象です。生活保護など他の制度が適用される場合は対象外となることがあります。</p>' },
      { heading: '申請と利用', content: '<p>受給資格証の交付申請を行い、県内医療機関等で提示して利用します。県外受診などの場合は、領収書等を添えて償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.miyakonojo.miyazaki.jp/soshiki/66/4186.html',
    sourceName: '都城市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.miyakonojo.miyazaki.jp/soshiki/66/4186.html',
      'https://www.city.miyakonojo.miyazaki.jp/soshiki/66/13136.html'
    ],
    sourceNote: '都城市公式ページで子ども医療費助成制度、中学校卒業まで、令和5年4月から入院・通院・調剤薬局の自己負担無料、受給資格申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kirishima-child-medical',
    title: '霧島市 子ども医療費助成制度',
    organization: '霧島市',
    type: 'local',
    maxAmount: '中学生以下は窓口無料、非課税世帯の高校生相当まで助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '鹿児島県',
    tags: ['霧島市', '子ども医療費', '中学生以下', '高校生相当', '子育て'],
    eligibility: '霧島市に住所があり、健康保険に加入している中学生以下の子どもが対象です。高校生相当年齢は住民税非課税世帯などの条件を満たす場合に子ども医療給付制度の対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格者証の申請や払い戻し申請を行う',
    description: '霧島市が、中学生以下の子どもを対象に保険診療に係る医療費を助成し、住民税非課税世帯の高校生相当年齢にも医療給付を行う制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>霧島市子ども医療費助成制度は、子どもの健康保持と子育て世帯の経済的負担軽減のため、保険診療に係る医療費を助成する制度です。令和7年4月から、中学生以下は県内医療機関等の窓口で支払いがない現物給付方式となっています。</p>' },
      { heading: '対象者', content: '<p>中学生以下の子どもは住民税課税世帯・非課税世帯を問わず対象です。高校生相当年齢は、霧島市内に住民票があり健康保険に加入している住民税非課税世帯の子どもなど、条件を満たす場合に子ども医療給付制度の対象です。</p>' },
      { heading: '手続き', content: '<p>受給資格者証の交付申請を行います。県外受診などの場合は、領収書等を添えて払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city-kirishima.jp/jidou/kosodate/kosodate/kodomoiryou.html',
    sourceName: '霧島市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city-kirishima.jp/jidou/kosodate/kosodate/kodomoiryou.html',
      'https://www.city-kirishima.jp/jidou/kosodate/kosodate/josesedo/kodomoiryou/shinnseido.html'
    ],
    sourceNote: '霧島市公式ページで子ども医療費助成制度、中学生以下、令和7年4月から現物給付・窓口無料、住民税非課税世帯の高校生相当年齢の子ども医療給付制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hachinohe-child-medical',
    title: '八戸市 子ども医療費助成制度',
    organization: '八戸市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '青森県',
    tags: ['八戸市', '子ども医療費', '中学生まで', '高校生等入院', '子育て'],
    eligibility: '八戸市に住所があり、健康保険に加入している子どもが対象です。高校生等は18歳到達後最初の3月31日まで、入院の場合のみ助成対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格証の申請や償還払い申請を行う',
    description: '八戸市が、子どもを対象に保険診療に係る医療費を助成する制度です。高校生等は18歳年度末まで入院医療費が助成対象です。',
    sections: [
      { heading: '制度の概要', content: '<p>八戸市子ども医療費助成制度は、子どもの保健向上と子育て世帯の負担軽減を目的に、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>八戸市に住所があり、健康保険に加入している子どもが対象です。高校生等は18歳到達後最初の3月31日まで、入院の場合のみ助成対象です。他の公費医療制度が優先される場合があります。</p>' },
      { heading: '手続き', content: '<p>受給資格証の交付申請を行います。青森県外での受診など、窓口で助成を受けられない場合は償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.hachinohe.aomori.jp/soshikikarasagasu/kosodateshienka/kosodate/2/4006.html',
    sourceName: '八戸市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.hachinohe.aomori.jp/soshikikarasagasu/kosodateshienka/kosodate/2/4006.html',
      'https://www.city.hachinohe.aomori.jp/soshikikarasagasu/kohotokeika/kohokocho/FAQ/kenko_fukushi/4036.html'
    ],
    sourceNote: '八戸市公式ページで子ども医療費助成、中学生までの助成、高校生等は18歳年度末まで入院のみ助成、受給資格認定申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iwaki-child-medical',
    title: 'いわき市 子ども医療費助成制度',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福島県',
    tags: ['いわき市', '子ども医療費', '18歳年度末', '受給資格者証', '子育て'],
    eligibility: 'いわき市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格登録申請や助成申請を行う',
    description: 'いわき市が、18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>いわき市子ども医療費助成制度は、子どもの疾病の早期発見と治療を支援し、保護者の医療費負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>いわき市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '申請と助成', content: '<p>受給資格者証の交付を受けて利用します。県外受診などの場合は、領収書等を添えて助成申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/www/contents/1001000000214/index.html',
    sourceName: 'いわき市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.iwaki.lg.jp/www/contents/1001000000214/index.html',
      'https://www.iwaki-kodomokosodate.com/measures/%E5%AD%90%E3%81%A9%E3%82%82%E5%8C%BB%E7%99%82%E8%B2%BB%E3%81%AE%E5%8A%A9%E6%88%90/'
    ],
    sourceNote: 'いわき市公式ページおよびいわき市子ども・子育て支援サイトで子ども医療費助成制度、18歳年度末まで、健康保険加入、受給資格者証、助成申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'koriyama-child-medical',
    title: '郡山市 子ども医療費助成制度',
    organization: '郡山市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福島県',
    tags: ['郡山市', '子ども医療費', '18歳年度末', '医療費助成', '子育て'],
    eligibility: '郡山市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格登録や償還払い申請を行う',
    description: '郡山市が、18歳年度末までの子どもの保険診療に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>郡山市子ども医療費助成制度は、子どもの健康を守り子育て家庭の経済的負担を軽減するため、保険診療に係る自己負担額を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>郡山市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。他の公費負担医療制度が優先される場合があります。</p>' },
      { heading: '申請と払い戻し', content: '<p>受給資格登録を行い、医療機関等で受給資格証を提示します。県外受診などの場合は、領収書等を添えて償還払いの申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.koriyama.lg.jp/site/kosodate/36404.html',
    sourceName: '郡山市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.koriyama.lg.jp/site/kosodate/36404.html',
      'https://www.city.koriyama.lg.jp/site/kosodate/93638.html'
    ],
    sourceNote: '郡山市公式ページで子ども医療費助成制度、18歳年度末まで、健康保険加入、受給資格登録、償還払い申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagaoka-child-medical',
    title: '長岡市 子ども医療費助成',
    organization: '長岡市',
    type: 'local',
    maxAmount: '高校卒業相当まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '新潟県',
    tags: ['長岡市', '子ども医療費', '高校卒業相当', '受給者証', '子育て'],
    eligibility: '長岡市に住所があり、健康保険に加入している高校卒業相当までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証の交付申請や払い戻し申請を行う',
    description: '長岡市が、高校卒業相当までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長岡市子ども医療費助成は、子どもの医療費負担を軽減するため、保険診療に係る自己負担の一部を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>長岡市に住所があり、健康保険に加入している高校卒業相当までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>受給者証の交付を受け、医療機関等で提示して利用します。県外受診などの場合は、後日払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.nagaoka.niigata.jp/kosodate/cate01/nyuyouji.html',
    sourceName: '長岡市 子ども医療費助成',
    sourceUrls: [
      'https://www.city.nagaoka.niigata.jp/kosodate/cate01/nyuyouji.html',
      'https://www.city.nagaoka.niigata.jp/shisei/cate03/jyourei/reiki/reiki_honbun/e403RG00000685.html'
    ],
    sourceNote: '長岡市公式ページと実施要綱で子どもの医療費助成、18歳年度末まで、受給者証、通院・入院等の一部負担金、払い戻し申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'joetsu-child-medical',
    title: '上越市 子ども医療費助成',
    organization: '上越市',
    type: 'local',
    maxAmount: '高校卒業相当まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '新潟県',
    tags: ['上越市', '子ども医療費', '高校卒業相当', '受給者証', '子育て'],
    eligibility: '上越市に住所があり、健康保険に加入している高校卒業相当までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証の申請や償還払い申請を行う',
    description: '上越市が、高校卒業相当までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>上越市子ども医療費助成は、子どもが安心して医療を受けられるよう、保険診療に係る医療費の自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>上越市に住所があり、健康保険に加入している高校卒業相当までの子どもが対象です。</p>' },
      { heading: '手続き', content: '<p>受給者証の交付申請を行い、医療機関等で提示して利用します。県外受診などの場合は、償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/soshiki/kodomo/lifeguide-324.html',
    sourceName: '上越市 子ども医療費助成',
    sourceUrls: [
      'https://www.city.joetsu.niigata.jp/soshiki/kodomo/lifeguide-324.html',
      'https://www.city.joetsu.niigata.jp/uploaded/attachment/267212.pdf'
    ],
    sourceNote: '上越市公式ページで子ども医療費助成、高校卒業相当まで、受給資格証交付申請、一部負担金、非課税世帯の無料化を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hitachi-child-medical',
    title: '日立市 小児医療福祉費支給制度（マル福）',
    organization: '日立市',
    type: 'local',
    maxAmount: '高校生相当まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '茨城県',
    tags: ['日立市', 'マル福', '小児医療', '高校生相当', '子育て'],
    eligibility: '日立市に住所があり、健康保険に加入している高校生相当までの子どもが対象です。県制度と市独自制度により対象や所得要件の扱いが分かれます。',
    applicationPeriod: '通年。出生・転入等の後、医療福祉費受給者証の申請を行う',
    description: '日立市が、小児を対象に医療福祉費支給制度（マル福）として医療費の自己負担を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>日立市の小児医療福祉費支給制度は、いわゆるマル福として、子どもの医療費自己負担を助成する制度です。茨城県制度に加え、市独自の拡大制度があります。</p>' },
      { heading: '対象者', content: '<p>日立市に住所があり、健康保険に加入している高校生相当までの子どもが対象です。年齢区分や所得制限の扱いは県制度・市制度で異なります。</p>' },
      { heading: '申請と利用', content: '<p>医療福祉費受給者証の交付申請を行い、医療機関等で提示して利用します。県外受診などの場合は、償還払いの手続きが案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.hitachi.lg.jp/fukushi_kenko/hojokin_joseikin/1009459.html',
    sourceName: '日立市 医療福祉費支給制度（マル福）',
    sourceUrls: [
      'https://www.city.hitachi.lg.jp/fukushi_kenko/hojokin_joseikin/1009459.html',
      'https://www.city.hitachi.lg.jp/faq/kosodate_kyoiku/1006158/1007426/1006122.html'
    ],
    sourceNote: '日立市公式ページで医療福祉費支給制度（マル福）、小児、0歳から18歳年度末まで、県と市による助成、受給者証申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tsukuba-child-medical',
    title: 'つくば市 小児医療福祉費支給制度（マル福）',
    organization: 'つくば市',
    type: 'local',
    maxAmount: '高校生相当まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '茨城県',
    tags: ['つくば市', 'マル福', '小児医療', '高校生相当', '子育て'],
    eligibility: 'つくば市に住所があり、健康保険に加入している高校生相当までの子どもが対象です。所得制限や市独自助成の扱いは公式案内に従います。',
    applicationPeriod: '通年。出生・転入等の後、医療福祉費受給者証の申請を行う',
    description: 'つくば市が、小児を対象に医療福祉費支給制度（マル福）として医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>つくば市の小児医療福祉費支給制度は、子どもの医療費自己負担を助成するマル福制度です。茨城県制度に加え、市独自助成も案内されています。</p>' },
      { heading: '対象者', content: '<p>つくば市に住所があり、健康保険に加入している高校生相当までの子どもが対象です。年齢区分や所得制限の扱いは公式案内で確認します。</p>' },
      { heading: '申請と利用', content: '<p>医療福祉費受給者証の交付申請を行い、医療機関等で提示して利用します。県外受診などの場合は、償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.tsukuba.lg.jp/soshikikarasagasu/hokembuiryonenkinka/gyomuannai/3/1001305.html',
    sourceName: 'つくば市 小児医療福祉費支給制度',
    sourceUrls: [
      'https://www.city.tsukuba.lg.jp/soshikikarasagasu/hokembuiryonenkinka/gyomuannai/3/1001305.html',
      'https://www.city.tsukuba.lg.jp/soshikikarasagasu/hokembuiryonenkinka/gyomuannai/1/1002923.html',
      'https://www.city.tsukuba.lg.jp/soshikikarasagasu/hokembuiryonenkinka/gyomuannai/1/1002922.html'
    ],
    sourceNote: 'つくば市公式ページで医療福祉費支給制度（マル福）、小児、健康保険利用時の自己負担助成、受給者証交付申請、償還払い申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oyama-child-medical',
    title: '小山市 こども医療費助成制度',
    organization: '小山市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '栃木県',
    tags: ['小山市', 'こども医療費', '18歳年度末', '現物給付', '子育て'],
    eligibility: '小山市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格者証の申請や償還払い申請を行う',
    description: '小山市が、18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>小山市こども医療費助成制度は、子どもの保健向上と子育て世帯の負担軽減を目的に、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>小山市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>受給資格者証の交付を受け、県内医療機関等で提示して利用します。県外受診などの場合は、領収書等を添えて償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/kosodate-nicomaru/teate-josei/jyoseiseido/page008722.html',
    sourceName: '小山市 こども医療費助成制度',
    sourceUrls: ['https://www.city.oyama.tochigi.jp/kosodate-nicomaru/teate-josei/jyoseiseido/page008722.html'],
    sourceNote: '小山市公式ページでこども医療費助成制度、18歳年度末まで、健康保険加入、受給資格者証、現物給付・償還払い申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gifu-city-child-medical',
    title: '岐阜市 子ども医療費助成制度',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '岐阜県',
    tags: ['岐阜市', '子ども医療費', '18歳年度末', '医療費助成', '子育て'],
    eligibility: '岐阜市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証の交付申請や払い戻し申請を行う',
    description: '岐阜市が、18歳年度末までの子どもを対象に、保険診療に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岐阜市子ども医療費助成制度は、子どもの健康保持と子育て世帯の負担軽減を目的に、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>岐阜市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。他の公費医療制度が優先される場合があります。</p>' },
      { heading: '手続き', content: '<p>受給者証の交付申請を行い、医療機関等で提示して利用します。県外受診などの場合は、領収書等を添えて払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/kenko/iryouhijosei/1004517/1004524/1004525.html',
    sourceName: '岐阜市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.gifu.lg.jp/kenko/iryouhijosei/1004517/1004524/1004525.html',
      'https://www.city.gifu.lg.jp/kenko/iryouhijosei/1004517/1004520.html'
    ],
    sourceNote: '岐阜市公式ページで子ども医療費助成制度、18歳年度末まで、健康保険適用分、福祉医療費受給者証、県外受診時の払い戻しを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ogaki-child-medical',
    title: '大垣市 子ども医療費助成制度',
    organization: '大垣市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '岐阜県',
    tags: ['大垣市', '子ども医療費', '18歳年度末', '医療費助成', '子育て'],
    eligibility: '大垣市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証の交付申請や払い戻し申請を行う',
    description: '大垣市が、18歳年度末までの子どもの保険診療に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大垣市子ども医療費助成制度は、子どもが必要な医療を受けやすくするため、保険診療に係る医療費の自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>大垣市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>受給者証の交付を受け、医療機関等で提示して利用します。県外受診などの場合は、払い戻しの申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.ogaki.lg.jp/0000003874.html',
    sourceName: '大垣市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.ogaki.lg.jp/0000003874.html',
      'https://www.city.ogaki.lg.jp/0000005633.html'
    ],
    sourceNote: '大垣市公式ページで子ども医療費助成制度、18歳年度末まで、健康保険加入、所得制限なし、受給者証交付申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yokkaichi-child-medical',
    title: '四日市市 子ども医療費助成制度',
    organization: '四日市市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '三重県',
    tags: ['四日市市', '子ども医療費', '18歳年度末', '医療費助成', '子育て'],
    eligibility: '四日市市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格証の申請や償還払い申請を行う',
    description: '四日市市が、18歳年度末までの子どもを対象に医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>四日市市子ども医療費助成制度は、子どもの保健向上と保護者の負担軽減のため、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>四日市市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '申請と助成', content: '<p>受給資格証の交付申請を行い、県内医療機関等で提示して利用します。県外受診などの場合は、償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.yokkaichi.lg.jp/www/contents/1001000001220/index.html',
    sourceName: '四日市市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.yokkaichi.lg.jp/www/contents/1001000001220/index.html',
      'https://www.city.yokkaichi.lg.jp/www/contents/1735278179003/index.html'
    ],
    sourceNote: '四日市市公式ページで子ども医療費助成制度、18歳年度末まで、健康保険加入、受給資格証、償還払い申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kusatsu-child-medical',
    title: '草津市 子ども医療費助成制度',
    organization: '草津市',
    type: 'local',
    maxAmount: '小中学生・高校生等の入院と通院を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '滋賀県',
    tags: ['草津市', '子ども医療費', '小中学生', '高校生等', '子育て'],
    eligibility: '草津市に住民票があり、健康保険に加入している小中学生および高校生等が対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給券の申請や償還払い申請を行う',
    description: '草津市が、小中学生および高校生等の通院・入院に係る医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>草津市子ども医療費助成制度は、子育て世帯の経済的負担を軽減するため、子どもの保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>草津市に住民票があり、健康保険に加入している小中学生および高校生等が対象です。令和5年10月から対象が中学生・高校生等まで拡大されています。</p>' },
      { heading: '助成内容と手続き', content: '<p>入院は自己負担金なし、通院は1か月につき医療機関ごとに500円の自己負担があります。福祉医療費受給券等の交付申請を行い、県外受診などの場合は償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.kusatsu.shiga.jp/fukushikenko/fukushiiryo/honen2201700801.html',
    sourceName: '草津市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.kusatsu.shiga.jp/fukushikenko/fukushiiryo/honen2201700801.html',
      'https://www.city.kusatsu.shiga.jp/fukushikenko/fukushiiryo/joseiseido.html'
    ],
    sourceNote: '草津市公式ページで子ども医療費助成、小中学生および高校生等、入院自己負担なし、通院は医療機関ごと月500円、福祉医療費助成制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fuji-city-child-medical',
    title: '富士市 こども医療費助成制度',
    organization: '富士市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費の一部を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '静岡県',
    tags: ['富士市', 'こども医療費', '18歳年度末', '医療費助成', '子育て'],
    eligibility: '富士市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証の申請や払い戻し申請を行う',
    description: '富士市が、18歳年度末までの子どもを対象に医療費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>富士市こども医療費助成制度は、子どもの医療費負担を軽減するため、保険診療に係る医療費の一部を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>富士市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>受給者証の交付を受け、医療機関等で提示して利用します。県外受診などの場合は払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/1023200000/p001559.html',
    sourceName: '富士市 こども医療費助成制度',
    sourceUrls: [
      'https://www.city.fuji.shizuoka.jp/1023200000/p001559.html',
      'https://www.city.fuji.shizuoka.jp/1005330000/p008295.html'
    ],
    sourceNote: '富士市公式ページでこども医療費助成、18歳年度末まで、受給者証と健康保険資格情報の提示、自己負担金払戻しを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'matsumoto-child-medical',
    title: '松本市 福祉医療費給付金（子ども）',
    organization: '松本市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を給付',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '長野県',
    tags: ['松本市', '福祉医療費', '子ども医療費', '18歳年度末', '子育て'],
    eligibility: '松本市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、福祉医療費受給者証の申請を行う',
    description: '松本市が、子どもを対象に福祉医療費給付金として医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>松本市福祉医療費給付金は、子どもなどを対象に、医療機関で支払った保険診療の自己負担額の一部を給付する制度です。</p>' },
      { heading: '対象者', content: '<p>松本市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '申請と給付', content: '<p>福祉医療費受給者証の交付申請を行います。県内医療機関等では受給者証を提示し、県外受診などの場合は給付申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/site/kosodate/1608.html',
    sourceName: '松本市 福祉医療費給付金',
    sourceUrls: [
      'https://www.city.matsumoto.nagano.jp/site/kosodate/1608.html',
      'https://www.city.matsumoto.nagano.jp/uploaded/attachment/105873.pdf'
    ],
    sourceNote: '松本市公式ページで福祉医療費給付金制度、こども、18歳年度末まで、受給者証、給付金支給申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'isesaki-child-medical',
    title: '伊勢崎市 子ども医療費助成制度',
    organization: '伊勢崎市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '群馬県',
    tags: ['伊勢崎市', '子ども医療費', '18歳年度末', '福祉医療', '子育て'],
    eligibility: '伊勢崎市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、福祉医療費受給資格者証の申請を行う',
    description: '伊勢崎市が、18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>伊勢崎市子ども医療費助成制度は、子どもの保険診療に係る自己負担を助成する制度です。群馬県内の医療機関では福祉医療費受給資格者証を提示して利用します。</p>' },
      { heading: '対象者', content: '<p>伊勢崎市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '手続き', content: '<p>福祉医療費受給資格者証の交付申請を行います。県外受診などの場合は、領収書等を添えて払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.isesaki.lg.jp/soshiki/kensui/nenkin/iryoujyosei/fukushi_iryo/2867.html',
    sourceName: '伊勢崎市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.isesaki.lg.jp/soshiki/kensui/nenkin/iryoujyosei/fukushi_iryo/2867.html',
      'https://www.city.isesaki.lg.jp/soshiki/kensui/nenkin/iryoujyosei/fukushi_iryo/2869.html',
      'https://www.city.isesaki.lg.jp/soshiki/kensui/nenkin/iryoujyosei/fukushi_iryo/19779.html'
    ],
    sourceNote: '伊勢崎市公式ページで福祉医療制度、0歳から18歳までの子ども、受給資格認定申請、福祉医療費受給資格者証、支給申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ota-city-child-medical',
    title: '太田市 子ども医療費助成制度',
    organization: '太田市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '群馬県',
    tags: ['太田市', '子ども医療費', '18歳年度末', '福祉医療', '子育て'],
    eligibility: '太田市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、福祉医療費受給資格者証の申請を行う',
    description: '太田市が、18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>太田市子ども医療費助成制度は、子どもが医療機関等を受診した際の保険診療分について、自己負担を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>太田市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>福祉医療費受給資格者証の交付申請を行い、県内医療機関等で提示して利用します。県外受診などの場合は、払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.ota.gunma.jp/site/kosodate/1189.html',
    sourceName: '太田市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.ota.gunma.jp/site/kosodate/1189.html',
      'https://www.city.ota.gunma.jp/site/kosodate/1173.html'
    ],
    sourceNote: '太田市公式ページで福祉医療費助成制度、18歳年度末までの子ども、保険診療一部負担金と食事療養費標準負担額、手続き案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kurashiki-child-medical',
    title: '倉敷市 子ども医療費助成制度',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '高校生世代まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '岡山県',
    tags: ['倉敷市', '子ども医療費', '中学校3年生まで', '無料', '子育て'],
    eligibility: '倉敷市に住所があり、健康保険に加入している中学校3年生までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給資格証の申請や払い戻し申請を行う',
    description: '倉敷市が、中学校3年生までの子どもを対象に、入院・通院の医療費を無料化する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>倉敷市子ども医療費助成制度は、子どもの健康保持と子育て世帯の負担軽減を目的に、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>倉敷市に住所があり、健康保険に加入している中学校3年生までの子どもが対象です。他の公費医療制度が優先される場合があります。</p>' },
      { heading: '手続き', content: '<p>受給資格証の交付申請を行い、医療機関等で提示して利用します。県外受診などの場合は、領収書等を添えて払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004720.html',
    sourceName: '倉敷市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.kurashiki.okayama.jp/fukushi/health/1013367/1004720.html',
      'https://www.city.kurashiki.okayama.jp/kurashi/hoken/1004520/1004566/1010506.html'
    ],
    sourceNote: '倉敷市公式ページで子ども医療費助成制度、中学校3年生まで、令和5年7月受診分から入院・通院無料、所得制限なし、申請手続きを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuyama-child-medical',
    title: '福山市 子ども医療費助成制度',
    organization: '福山市',
    type: 'local',
    maxAmount: '高校3年生相当まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '広島県',
    tags: ['福山市', '子ども医療費', '高校3年生相当', '医療費助成', '子育て'],
    eligibility: '福山市に住所があり、健康保険に加入している高校3年生相当までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証の申請や償還払い申請を行う',
    description: '福山市が、高校3年生相当までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福山市子ども医療費助成制度は、子どもの保険診療に係る医療費を助成し、子育て世帯の経済的負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>福山市に住所があり、健康保険に加入している高校3年生相当までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>受給者証の交付申請を行い、医療機関等で提示して利用します。県外受診などの場合は償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/site/kosodate/393495.html',
    sourceName: '福山市 子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.fukuyama.hiroshima.jp/site/kosodate/393495.html',
      'https://www.city.fukuyama.hiroshima.jp/site/kosodate/393492.html'
    ],
    sourceNote: '福山市公式ページで子ども医療費助成事業、高校3年生相当まで、1医療機関1日500円の一部負担、受給資格認定申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kure-child-medical',
    title: '呉市 こども医療費助成制度',
    organization: '呉市',
    type: 'local',
    maxAmount: '高校生相当まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '広島県',
    tags: ['呉市', 'こども医療費', '高校生相当', '医療費助成', '子育て'],
    eligibility: '呉市に住所があり、健康保険に加入している高校生相当までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証の申請や償還払い申請を行う',
    description: '呉市が、高校生相当までの子どもを対象に医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>呉市こども医療費助成制度は、子どもの医療費負担を軽減するため、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>呉市に住所があり、健康保険に加入している高校生相当までの子どもが対象です。</p>' },
      { heading: '手続き', content: '<p>受給者証の交付申請を行い、医療機関等で提示して利用します。県外受診などの場合は償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://kure-kosodate.com/service/1195.html',
    sourceName: '呉市 こども医療費助成制度',
    sourceUrls: [
      'https://kure-kosodate.com/service/1195.html',
      'https://kure-kosodate.com/fs/7/8/0/4/7/_/________________.pdf'
    ],
    sourceNote: '呉市子育て公式サイトでこども医療費助成制度、18歳年度末まで、所得制限なし、健康保険加入、受給者証、オンライン申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ube-child-medical',
    title: '宇部市 こども医療費助成制度',
    organization: '宇部市',
    type: 'local',
    maxAmount: '高校生年代まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '山口県',
    tags: ['宇部市', 'こども医療費', '高校生年代', '福祉医療', '子育て'],
    eligibility: '宇部市に住所があり、健康保険に加入している高校生年代までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、受給者証の申請や払い戻し申請を行う',
    description: '宇部市が、高校生年代までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宇部市こども医療費助成制度は、子どもの疾病の早期発見と治療を支援し、保護者の医療費負担を軽減する制度です。</p>' },
      { heading: '対象者', content: '<p>宇部市に住所があり、健康保険に加入している高校生年代までの子どもが対象です。</p>' },
      { heading: '利用方法', content: '<p>受給者証の交付申請を行い、医療機関等で提示して利用します。県外受診などの場合は払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.ube.yamaguchi.jp/kosodate/kosodateouen/mokuteki/kosodate_teate/1003566.html',
    sourceName: '宇部市 こども医療費助成制度',
    sourceUrls: [
      'https://www.city.ube.yamaguchi.jp/kosodate/kosodateouen/mokuteki/kosodate_teate/1003566.html',
      'https://www.city.ube.yamaguchi.jp/kosodate/kosodateouen/nenrei/1021600/1022023.html'
    ],
    sourceNote: '宇部市公式ページで子ども医療費助成制度、18歳まで、医療費自己負担分助成、受給者証、県外受診時の払戻し申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kasuga-child-medical',
    title: '春日市 子ども医療費支給制度',
    organization: '春日市',
    type: 'local',
    maxAmount: '高校生世代まで入院・通院を無料化',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福岡県',
    tags: ['春日市', 'こども医療費', '高校生世代', '無料', '子育て'],
    eligibility: '春日市に住所があり、健康保険に加入している高校生世代までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、子ども医療証の申請を行う',
    description: '春日市が、高校生世代までの子どもの入院・通院医療費を無料化する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>春日市こども医療費支給制度は、子どもの医療費負担を軽減するため、健康保険適用後の自己負担分を支給する制度です。高校生世代まで入院・通院とも無料です。</p>' },
      { heading: '対象者', content: '<p>春日市に住所があり、健康保険に加入している高校生世代、18歳到達年度の3月31日までの子どもが対象です。所得制限はありません。</p>' },
      { heading: '手続き', content: '<p>子ども医療証の交付申請を行い、福岡県内の医療機関等で提示して利用します。県外受診などの場合は払い戻し申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.kasuga.fukuoka.jp/kurashi/hoken/iryouhi/1001033.html',
    sourceName: '春日市 子ども医療費支給制度',
    sourceUrls: [
      'https://www.city.kasuga.fukuoka.jp/kurashi/hoken/iryouhi/1001033.html',
      'https://www.city.kasuga.fukuoka.jp/kurashi/hoken/iryouhi/1001032.html'
    ],
    sourceNote: '春日市公式ページでこども医療費支給制度、0歳から高校生世代まで、入院・通院無料、所得制限なし、医療証を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iizuka-child-medical',
    title: '飯塚市 子ども医療費支給制度',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '18歳年度末まで医療費を助成',
    maxAmountNum: 0,
    category: 'childcare',
    relatedCategories: ['medical'],
    prefecture: '福岡県',
    tags: ['飯塚市', '子ども医療費', '18歳年度末', '医療証', '子育て'],
    eligibility: '飯塚市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年。出生・転入等の後、子ども医療証の申請や償還払い申請を行う',
    description: '飯塚市が、18歳年度末までの子どもの医療費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>飯塚市子ども医療費支給制度は、子どもの健康保持と子育て家庭の負担軽減を目的に、保険診療に係る医療費を助成する制度です。</p>' },
      { heading: '対象者', content: '<p>飯塚市に住所があり、健康保険に加入している18歳到達後最初の3月31日までの子どもが対象です。所得制限はありません。</p>' },
      { heading: '利用方法', content: '<p>子ども医療証の交付を受け、福岡県内の医療機関等で提示して利用します。県外受診などの場合は償還払い申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/site/kosodate/1971.html',
    sourceName: '飯塚市 子ども医療費支給制度',
    sourceUrls: [
      'https://www.city.iizuka.lg.jp/site/kosodate/1971.html',
      'https://www.city.iizuka.lg.jp/uploaded/attachment/14858.pdf'
    ],
    sourceNote: '飯塚市公式ページで子ども医療費支給制度、18歳年度末まで、健康保険適用医療費の自己負担額助成、所得制限なし、子ども医療証を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kurashiki-startup-support',
    title: '倉敷市 創業サポートセンター',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '創業相談・事業計画・資金調達を支援',
    maxAmountNum: 0,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '岡山県',
    tags: ['倉敷市', '創業支援', '相談', '資金調達', '起業'],
    eligibility: '倉敷市内で創業を検討している方、創業後間もない事業者などが対象です。',
    applicationPeriod: '通年。相談予約や各支援メニューの募集期間は公式案内に従う',
    description: '倉敷市が、創業希望者や創業後間もない事業者に対して、相談、事業計画、資金調達、関係機関紹介などを支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>倉敷市創業サポートセンターは、創業に関する相談、事業計画づくり、資金調達、関係機関との連携などを支援する窓口です。補助金単体ではなく、創業準備全体を支援する制度として確認します。</p>' },
      { heading: '対象者', content: '<p>倉敷市内で創業を考えている方、創業後間もない事業者、事業計画や資金調達について相談したい方などが対象です。</p>' },
      { heading: '利用方法', content: '<p>公式ページの案内に従い、創業サポートセンターへ相談します。創業セミナー、融資、補助制度などの関連支援についても窓口で確認します。</p>' }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/business/industry/1005503/1005504.html',
    sourceName: '倉敷市 創業サポートセンター',
    sourceUrls: [
      'https://www.city.kurashiki.okayama.jp/business/industry/1005503/1005504.html',
      'https://www.city.kurashiki.okayama.jp/business/industry/1005503/1011027.html'
    ],
    sourceNote: '倉敷市公式ページで創業相談窓口、くらしき創業サポートセンター、相談無料、特定創業支援等事業の証明書発行手続きを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuyama-housing-reform',
    title: '福山市 住宅に関する公的資金制度',
    organization: '福山市',
    type: 'local',
    maxAmount: '住宅改修・耐震化等の公的資金制度を案内',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '広島県',
    tags: ['福山市', '住宅', 'リフォーム', '耐震', '公的資金'],
    eligibility: '福山市内の住宅所有者等で、各住宅支援制度の要件を満たす方が対象です。',
    applicationPeriod: '制度ごとに異なる。申請前に公式案内と担当窓口で確認',
    description: '福山市が、住宅に関する公的資金制度として、住宅改修や耐震化などの関連支援制度を案内しています。',
    sections: [
      { heading: '制度の概要', content: '<p>福山市の住宅に関する公的資金制度は、住宅改修、耐震化、住環境改善など、住宅に関係する支援制度をまとめて案内するものです。生成データのような一律の住宅リフォーム補助金ではなく、制度ごとに対象や上限額が異なります。</p>' },
      { heading: '対象者', content: '<p>福山市内の住宅所有者や居住者など、各制度の要件を満たす方が対象です。住宅の種類、工事内容、施工前申請、税の滞納有無などの条件は制度ごとに確認が必要です。</p>' },
      { heading: '確認方法', content: '<p>公式ページの公的資金制度一覧から該当制度を確認し、工事着手前に担当窓口へ相談します。交付決定前に着手すると対象外となる制度があります。</p>' }
    ],
    officialUrl: 'https://www.city.fukuyama.hiroshima.jp/soshiki/jutaku/163424.html',
    sourceName: '福山市 住宅に関する公的資金制度',
    sourceUrls: ['https://www.city.fukuyama.hiroshima.jp/soshiki/jutaku/163424.html'],
    sourceNote: '福山市公式ページで住宅に関する公的資金制度、住宅関連支援制度の一覧、制度ごとの要件確認が必要なことを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kure-migration-support',
    title: '呉市 新婚・子育て世帯定住支援事業',
    organization: '呉市',
    type: 'local',
    maxAmount: '住宅取得で最大50万円',
    maxAmountNum: 50,
    category: 'living',
    relatedCategories: ['housing', 'childcare'],
    prefecture: '広島県',
    tags: ['呉市', '定住支援', '住宅取得', '新婚', '子育て'],
    eligibility: '呉市内に住宅を取得し定住する新婚世帯または子育て世帯など、公式要件を満たす方が対象です。',
    applicationPeriod: '通年。ただし予算や申請期限があるため住宅取得前後に公式案内を確認',
    description: '呉市が、新婚世帯や子育て世帯の定住を促進するため、市内で住宅を取得する場合に補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>呉市新婚・子育て世帯定住支援事業は、市内で住宅を取得し定住する新婚世帯や子育て世帯を支援する制度です。住宅取得費用に対する補助として案内されています。</p>' },
      { heading: '対象者', content: '<p>新婚世帯または子育て世帯で、呉市内に住宅を取得し、定住する意思があるなど、公式ページに定める条件を満たす方が対象です。</p>' },
      { heading: '補助内容', content: '<p>補助額は住宅取得で最大50万円です。申請時期、対象住宅、世帯要件、他制度との併用可否は公式案内で確認します。</p>' }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/soshiki/46/zyuutakusyutokusien.html',
    sourceName: '呉市 新婚・子育て世帯定住支援事業',
    sourceUrls: ['https://www.city.kure.lg.jp/soshiki/46/zyuutakusyutokusien.html'],
    sourceNote: '呉市公式ページで新婚・子育て世帯定住支援事業、住宅取得、最大50万円、対象世帯と申請要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kure-startup-support',
    title: '呉市 創業支援',
    organization: '呉市',
    type: 'local',
    maxAmount: '創業相談・融資・補助制度情報を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '広島県',
    tags: ['呉市', '創業支援', '起業', '相談', '融資'],
    eligibility: '呉市内で創業を検討している方、創業後間もない事業者などが対象です。',
    applicationPeriod: '通年。個別補助・融資制度の募集期間は公式案内に従う',
    description: '呉市が、創業希望者向けに相談窓口、融資、補助制度、関係機関の支援情報を案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>呉市の創業支援は、創業相談、融資制度、補助制度、関係機関によるサポートなどを案内するものです。生成データのような単一の「創業チャレンジ補助金」としてではなく、創業支援メニューとして確認します。</p>' },
      { heading: '対象者', content: '<p>呉市内で創業を検討している方、創業後間もない事業者、事業計画や資金調達を相談したい方などが対象です。</p>' },
      { heading: '利用方法', content: '<p>公式ページで相談窓口や関連制度を確認し、必要に応じて呉市や商工会議所等の支援機関へ相談します。補助・融資は制度ごとに要件と受付期間が異なります。</p>' }
    ],
    officialUrl: 'https://www.city.kure.lg.jp/soshiki/40/sougyou.html',
    sourceName: '呉市 創業支援',
    sourceUrls: ['https://www.city.kure.lg.jp/soshiki/40/sougyou.html'],
    sourceNote: '呉市公式ページで創業支援、創業相談、融資・補助制度、支援機関案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iizuka-startup-support',
    title: '飯塚市 新規創業支援資金融資制度',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '創業融資と利子補給・信用保証料補助を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['飯塚市', '創業支援', '融資', '利子補給', '信用保証料補助'],
    eligibility: '飯塚市で創業する方、または創業後5年未満の中小企業者など、公式要件を満たす方が対象です。',
    applicationPeriod: '通年。融資申込は指定金融機関、利子補給・保証料補助は公式案内に従う',
    description: '飯塚市が、創業者および創業後5年未満の中小企業者を対象に、新規創業支援資金融資制度と利子補給・信用保証料補助を案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>飯塚市新規創業支援資金融資制度は、飯塚市で創業する方や創業後5年未満の中小企業者を支援するための公的融資制度です。関連して、利子補給や信用保証料補助も案内されています。</p>' },
      { heading: '対象者', content: '<p>新たに中小企業者として創業する方、または創業後5年未満の中小企業者など、公式要件を満たす方が対象です。</p>' },
      { heading: '利用方法', content: '<p>融資制度の申請窓口は指定金融機関です。利子補給や信用保証料補助は、市の公式ページで申請窓口、必要書類、対象期間を確認します。</p>' }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/soshiki/18/2408.html',
    sourceName: '飯塚市 新規創業支援資金融資制度',
    sourceUrls: [
      'https://www.city.iizuka.lg.jp/soshiki/18/2408.html',
      'https://www.city.iizuka.lg.jp/soshiki/18/2005.html',
      'https://www.city.iizuka.lg.jp/site/kigyousoudan-shien/'
    ],
    sourceNote: '飯塚市公式ページで新規創業支援資金融資制度、創業後5年未満の中小企業者、利子補給最大50%、信用保証料全額補助、申請窓口を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iizuka-housing-reform',
    title: '飯塚市 住宅改修補助制度',
    organization: '飯塚市',
    type: 'local',
    maxAmount: '住宅改修・住環境改善の補助制度を案内',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '福岡県',
    tags: ['飯塚市', '住宅改修', 'リフォーム', '補助制度', '住環境'],
    eligibility: '飯塚市内の住宅所有者等で、各住宅改修支援制度の要件を満たす方が対象です。',
    applicationPeriod: '制度ごとに異なる。工事前に公式案内と担当窓口で確認',
    description: '飯塚市が、住宅改修や住環境改善に関する補助制度を案内しています。対象工事や上限額は制度ごとに異なります。',
    sections: [
      { heading: '制度の概要', content: '<p>飯塚市の住宅改修補助制度は、住宅改修や住環境改善に関する支援制度を案内するものです。生成データのような一律の住宅リフォーム補助金ではなく、制度ごとに対象工事、要件、補助額が異なります。</p>' },
      { heading: '対象者', content: '<p>飯塚市内の住宅所有者や居住者など、各制度の要件を満たす方が対象です。住宅の種類、工事内容、施工前申請、税の滞納有無などを事前に確認します。</p>' },
      { heading: '申請の注意点', content: '<p>住宅改修系の補助は、工事着手前の申請が必要となる場合があります。見積書や図面、工事内容が分かる書類を準備し、担当窓口へ相談します。</p>' }
    ],
    officialUrl: 'https://www.city.iizuka.lg.jp/soshiki/18/2408.html',
    sourceName: '飯塚市 住宅改修補助制度',
    sourceUrls: ['https://www.city.iizuka.lg.jp/soshiki/18/2408.html'],
    sourceNote: '飯塚市公式ページで住宅改修補助制度、住宅改修・住環境改善に関する補助制度案内、制度ごとの要件確認が必要なことを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gifu-city-housing-reform',
    title: '岐阜市 空き家取得費・改修費補助金',
    organization: '岐阜市',
    type: 'local',
    maxAmount: '改修は最大50万円、取得は最大30万円',
    maxAmountNum: 50,
    category: 'housing',
    prefecture: '岐阜県',
    tags: ['岐阜市', '空き家', '住宅改修', '取得補助', '移住定住'],
    eligibility: '岐阜市内の戸建て空き家を取得または改修し、公式要件を満たす方が対象です。',
    applicationPeriod: '2026年1月30日まで。売買契約・工事契約前に相談・申請が必要',
    deadlineDate: '2026-01-30',
    description: '岐阜市が、空き家の利活用を促進するため、戸建て空き家の取得費や改修費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岐阜市の空き家取得費・改修費補助金は、市内の戸建て空き家を購入または改修する場合に、費用の一部を補助する制度です。空き家の流通と定住促進を目的としています。</p>' },
      { heading: '補助内容', content: '<p>公式案内では、空き家の取得に対する補助上限は30万円、改修に対する補助上限は50万円とされています。対象となる住宅や工事内容には条件があります。</p>' },
      { heading: '申請の注意点', content: '<p>申請期限は2026年1月30日です。売買契約や工事契約の前に、必ず岐阜市の担当窓口へ相談し、対象可否と必要書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/kurashi/sumai/1002445/1002448.html',
    sourceName: '岐阜市 空き家取得費・改修費補助金',
    sourceUrls: ['https://www.city.gifu.lg.jp/kurashi/sumai/1002445/1002448.html'],
    sourceNote: '岐阜市公式ページで戸建て空き家の取得費上限30万円、改修費上限50万円、申請期限2026年1月30日、契約前相談が必要なことを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'gifu-city-startup-support',
    title: '岐阜市 スタートアップ認定制度',
    organization: '岐阜市',
    type: 'local',
    maxAmount: 'スタートアップ認定・支援制度を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '岐阜県',
    tags: ['岐阜市', 'スタートアップ', '創業支援', '起業', '補助金'],
    eligibility: '岐阜市内で起業やスタートアップ事業の成長を目指す方、事業者などが対象です。認定制度ごとの要件を満たす必要があります。',
    applicationPeriod: '令和7年度の申請受付は2025年5月9日まで',
    deadlineDate: '2025-05-09',
    description: '岐阜市が、成長を目指すスタートアップを認定し、市の支援メニューにつなげる制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岐阜市のスタートアップ認定制度は、市内で成長を目指すスタートアップを認定し、市の支援メニューや関係機関の支援につなげる制度です。単純な一律給付ではなく、認定や募集年度に応じて利用できる支援が変わります。</p>' },
      { heading: '対象者', content: '<p>岐阜市内で新しい事業に取り組む創業者、スタートアップ、成長を目指す事業者などが対象です。所在地、事業内容、成長性、申請時期などの条件を公式要項で確認します。</p>' },
      { heading: '確認ポイント', content: '<p>令和7年度の申請受付は2025年5月9日まででした。次回募集や関連支援を探す場合は、岐阜市の公式ページで最新の認定制度・補助制度の案内を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.gifu.lg.jp/business/sangyoushinkou/1031855/1031856/1038650/index.html',
    sourceName: '岐阜市 スタートアップ認定制度',
    sourceUrls: ['https://www.city.gifu.lg.jp/business/sangyoushinkou/1031855/1031856/1038650/index.html'],
    sourceNote: '岐阜市公式ページでスタートアップ認定制度、令和7年度申請受付、申請期限2025年5月9日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ogaki-migration-support',
    title: '大垣市 移住・定住支援',
    organization: '大垣市',
    type: 'local',
    maxAmount: '移住・定住支援メニューを案内',
    maxAmountNum: 0,
    category: 'living',
    relatedCategories: ['housing', 'childcare'],
    prefecture: '岐阜県',
    tags: ['大垣市', '移住', '定住', '住まい', '子育て支援'],
    eligibility: '大垣市への移住・定住を検討する方、転入者、子育て世帯など、各支援メニューの要件を満たす方が対象です。',
    applicationPeriod: '支援メニューごとに異なる。利用前に公式ポータルと担当窓口で確認',
    description: '大垣市が、移住・定住を検討する方向けに住まい、子育て、仕事、暮らしの支援情報をまとめて案内する公式ポータルです。',
    sections: [
      { heading: '制度の概要', content: '<p>大垣市の移住・定住ポータルでは、住まい、子育て、仕事、暮らしに関する支援情報を整理して案内しています。補助金や給付金は個別制度として掲載されるため、目的に合う支援を確認する入口として利用します。</p>' },
      { heading: '対象者', content: '<p>大垣市への転入を検討している方、定住を希望する世帯、子育て世帯、住まいや仕事の支援を探している方などが対象です。各制度の対象年齢、世帯要件、転入時期などは個別に確認します。</p>' },
      { heading: '利用方法', content: '<p>公式ポータルで該当する支援メニューを選び、担当課のページや相談窓口へ進みます。住宅・子育て・就業支援は申請期限や事前手続きがあるため、転入や契約の前に確認してください。</p>' }
    ],
    officialUrl: 'https://www.ogakikurashi.com/',
    sourceName: '大垣市 移住・定住ポータル',
    sourceUrls: ['https://www.ogakikurashi.com/'],
    sourceNote: '大垣市の移住・定住ポータルで、住まい、子育て、仕事、暮らしの支援情報と補助制度への導線を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yokkaichi-startup-support',
    title: '四日市市 特定創業者販路拡大事業費補助金',
    organization: '四日市市',
    type: 'local',
    maxAmount: '販路拡大経費の一部を補助',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '三重県',
    tags: ['四日市市', '創業支援', '販路拡大', '補助金', '特定創業者'],
    eligibility: '四日市市の特定創業支援等事業による支援を受けた創業者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和7年度は2025年4月1日から受付開始。予算や受付状況は公式ページで確認',
    description: '四日市市が、特定創業者の販路拡大に必要な経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>四日市市の特定創業者販路拡大事業費補助金は、創業後の販路開拓を支援するため、広告宣伝や展示会出展など販路拡大に関する経費の一部を補助する制度です。</p>' },
      { heading: '対象者', content: '<p>四日市市の特定創業支援等事業による支援を受けた創業者など、公式ページに定める要件を満たす方が対象です。創業時期、事業所在地、税の滞納有無などを確認します。</p>' },
      { heading: '申請の注意点', content: '<p>令和7年度は2025年4月1日から受付が始まっています。補助対象経費、提出書類、受付状況は年度ごとの案内で変わるため、申請前に公式ページを確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.yokkaichi.lg.jp/www/contents/1616904675200/index.html',
    sourceName: '四日市市 特定創業者販路拡大事業費補助金',
    sourceUrls: ['https://www.city.yokkaichi.lg.jp/www/contents/1616904675200/index.html'],
    sourceNote: '四日市市公式ページで特定創業者販路拡大事業費補助金、令和7年度受付開始日2025年4月1日、販路拡大経費補助の制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fuji-city-housing-reform',
    title: '富士市 空き家リフォーム支援補助金',
    organization: '富士市',
    type: 'local',
    maxAmount: '最大80万円',
    maxAmountNum: 80,
    category: 'housing',
    prefecture: '静岡県',
    tags: ['富士市', '空き家', 'リフォーム', '住宅改修', '移住定住'],
    eligibility: '富士市内の空き家をリフォームし、公式要件を満たす所有者、購入者、入居予定者などが対象です。',
    applicationPeriod: '工事契約・着手前に公式案内に従い申請',
    description: '富士市が、空き家の利活用を促進するため、空き家リフォーム費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>富士市の空き家リフォーム支援補助金は、市内の空き家を住まいとして活用するための改修工事を支援する制度です。空き家の流通促進と移住・定住の後押しを目的としています。</p>' },
      { heading: '補助内容', content: '<p>公式案内では補助上限額は最大80万円とされています。子育て世帯や市外からの転入世帯など、条件により加算の対象となる場合があります。</p>' },
      { heading: '申請の注意点', content: '<p>住宅改修系の補助は、工事契約や着手前の申請が必要となる場合があります。対象物件、対象工事、加算要件、必要書類を富士市の公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.fuji.shizuoka.jp/1040300000/p000782.html',
    sourceName: '富士市 空き家リフォーム支援補助金',
    sourceUrls: ['https://www.city.fuji.shizuoka.jp/1040300000/p000782.html'],
    sourceNote: '富士市公式ページで空き家リフォーム支援補助金、補助上限最大80万円、子育て世帯や市外からの転入世帯等の加算を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'isesaki-housing-reform',
    title: '伊勢崎市 住宅リフォーム助成金',
    organization: '伊勢崎市',
    type: 'local',
    maxAmount: '住宅リフォーム工事費の一部を助成',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['伊勢崎市', '住宅リフォーム', '住宅改修', '助成金', '工事費'],
    eligibility: '伊勢崎市内の住宅でリフォーム工事を行い、公式要件を満たす所有者または居住者などが対象です。',
    applicationPeriod: '令和8年度の受付は2026年6月12日まで',
    deadlineDate: '2026-06-12',
    description: '伊勢崎市が、市内住宅のリフォーム工事費の一部を助成する制度です。年度ごとの申請案内に従って手続きします。',
    sections: [
      { heading: '制度の概要', content: '<p>伊勢崎市の住宅リフォーム助成金は、市内住宅のリフォーム工事を支援する制度です。市内施工業者の利用、対象工事、申請時期など、年度ごとの要件に従って利用します。</p>' },
      { heading: '対象者', content: '<p>伊勢崎市内の住宅でリフォームを行う方のうち、居住要件、所有要件、市税の滞納がないことなど、公式案内に定められた条件を満たす方が対象です。</p>' },
      { heading: '申請の注意点', content: '<p>公式ページでは令和8年度の住宅リフォーム助成金について、受付終了後の実績報告手続きが案内されています。次回募集を探す場合は、工事着手前の申請、受付期間、必要書類、予算枠を必ず確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.isesaki.lg.jp/soshiki/keizai/shoko/syoukousinkou/6949.html',
    sourceName: '伊勢崎市 住宅リフォーム助成金',
    sourceUrls: ['https://www.city.isesaki.lg.jp/soshiki/keizai/shoko/syoukousinkou/6949.html'],
    sourceNote: '伊勢崎市公式ページで令和8年度住宅リフォーム助成金、受付終了日2026年6月12日、実績報告手続きの案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yokkaichi-housing-reform',
    title: '四日市市 木造住宅耐震補強工事費等補助制度',
    organization: '四日市市',
    type: 'local',
    maxAmount: '木造住宅の耐震補強工事費等を補助',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '三重県',
    tags: ['四日市市', '耐震補強', '木造住宅', '住宅改修', '補助制度'],
    eligibility: '四日市市内の木造住宅で耐震補強工事等を行い、公式要件を満たす所有者などが対象です。',
    applicationPeriod: '年度ごとの受付期間・予算枠は公式ページで確認',
    description: '四日市市が、木造住宅の耐震化を促進するため、耐震補強工事費等の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>四日市市の木造住宅耐震補強工事費等補助制度は、地震に備えた住宅の安全性向上を支援する制度です。生成データのような一般的なリフォーム補助ではなく、木造住宅の耐震補強を中心に確認します。</p>' },
      { heading: '対象者', content: '<p>四日市市内の対象木造住宅を所有し、耐震診断や補強計画など公式要件に沿って工事を行う方が対象です。住宅の建築時期、構造、診断結果などを確認します。</p>' },
      { heading: '申請の注意点', content: '<p>補助は工事契約・着手前の手続きが必要となる場合があります。年度ごとの予算、受付期間、対象工事、提出書類を公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.yokkaichi.lg.jp/www/contents/1517481533493/index.html',
    sourceName: '四日市市 木造住宅耐震補強工事費等補助制度',
    sourceUrls: ['https://www.city.yokkaichi.lg.jp/www/contents/1517481533493/index.html'],
    sourceNote: '四日市市公式ページで木造住宅耐震補強工事費等補助制度、補強工事費補助の制度案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyohashi-startup-support',
    title: '豊橋市 起業支援事業費補助金',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '起業に必要な経費の一部を補助',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['豊橋市', '起業支援', '創業支援', '補助金', '事業費'],
    eligibility: '豊橋市内で起業する方、または起業後間もない事業者など、公式要件を満たす方が対象です。',
    applicationPeriod: '募集年度ごとの受付期間は公式ページで確認',
    description: '豊橋市が、市内での起業を支援するため、起業に必要な事業費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>豊橋市の起業支援事業費補助金は、市内で新たに事業を始める方を支援する制度です。事業計画、対象経費、申請時期などは募集年度ごとの要項に従います。</p>' },
      { heading: '対象者', content: '<p>豊橋市内で起業する個人や法人、創業後間もない事業者などが対象です。事業所在地、創業時期、税の滞納有無、事業内容などの要件を確認します。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象経費、補助率、上限額、受付期間は年度ごとに変わる場合があります。交付決定前に着手した経費が対象外になることもあるため、公式要項を先に確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/15738.htm',
    sourceName: '豊橋市 起業支援事業費補助金',
    sourceUrls: ['https://www.city.toyohashi.lg.jp/15738.htm'],
    sourceNote: '豊橋市公式ページで起業支援事業費補助金のダウンロード・制度案内ページを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okazaki-startup-support',
    title: '岡崎市 創業・起業支援',
    organization: '岡崎市',
    type: 'local',
    maxAmount: '創業・起業支援メニューを案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '愛知県',
    tags: ['岡崎市', '創業支援', '起業', '相談', '支援メニュー'],
    eligibility: '岡崎市内で創業・起業を検討している方、創業後間もない事業者などが対象です。',
    applicationPeriod: '相談・支援メニューごとに異なる。公式ページで確認',
    description: '岡崎市が、市内で創業・起業を考える方向けに相談窓口や支援制度を案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>岡崎市の創業・起業支援ページでは、市内で事業を始めたい方向けに、相談窓口、支援機関、関連制度が案内されています。単一の補助金ではなく、創業段階に応じた支援情報として確認します。</p>' },
      { heading: '対象者', content: '<p>岡崎市内で創業を検討している方、創業準備中の方、創業後間もない事業者などが対象です。利用する支援メニューごとに対象者や必要書類が異なります。</p>' },
      { heading: '利用方法', content: '<p>公式ページで相談先や支援制度を確認し、事業計画、資金計画、創業時期に合わせて担当窓口へ相談します。補助金や融資制度を使う場合は、個別の募集要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.okazaki.lg.jp/business/shushoku/1012300/1005279.html',
    sourceName: '岡崎市内の創業・起業をお考えの方へ',
    sourceUrls: ['https://www.city.okazaki.lg.jp/business/shushoku/1012300/1005279.html'],
    sourceNote: '岡崎市公式ページで市内の創業・起業を考える方向けの支援案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ichinomiya-housing-reform',
    title: '一宮市 断熱窓改修補助金',
    organization: '一宮市',
    type: 'local',
    maxAmount: '断熱窓への改修費用を補助',
    maxAmountNum: 0,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '愛知県',
    tags: ['一宮市', '断熱窓', '省エネ', '住宅改修', '補助金'],
    eligibility: '一宮市内の住宅で断熱窓への改修を行い、公式要件を満たす方が対象です。',
    applicationPeriod: '2026年度予算の受付・予算状況は公式ページで確認',
    description: '一宮市が、住宅の省エネ化を進めるため、断熱窓への改修費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>一宮市の断熱窓改修補助金は、住宅の断熱性能向上と省エネ化を目的に、窓の断熱改修費用を支援する制度です。一般的なリフォーム全般ではなく、断熱窓改修を対象とする制度として確認します。</p>' },
      { heading: '対象者', content: '<p>一宮市内の住宅で、補助対象となる断熱窓改修を行う方が対象です。住宅の所在地、工事内容、製品要件、施工前申請などを確認します。</p>' },
      { heading: '申請の注意点', content: '<p>公式ページは2026年度予算の案内です。予算枠、受付期間、対象製品、必要書類、工事着手前申請の有無を確認してから進めてください。</p>' }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/kankyou/kankyouseisaku/1043982/1043983/1043984/1074948.html',
    sourceName: '一宮市 断熱窓への改修費用を補助します',
    sourceUrls: ['https://www.city.ichinomiya.aichi.jp/kankyou/kankyouseisaku/1043982/1043983/1043984/1074948.html'],
    sourceNote: '一宮市公式ページで2026年度予算の断熱窓改修費用補助制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ichinomiya-migration-support',
    title: '一宮市 移住支援事業',
    organization: '一宮市',
    type: 'local',
    maxAmount: '東京圏からの移住支援金を案内',
    maxAmountNum: 0,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '愛知県',
    tags: ['一宮市', '移住支援', '東京圏', '就業', '起業'],
    eligibility: '東京圏から一宮市へ移住し、就業・起業など公式要件を満たす世帯または単身者が対象です。',
    applicationPeriod: '年度ごとの受付期間・予算状況は公式ページで確認',
    description: '一宮市が、東京圏からの移住と就業・起業を支援する移住支援事業を案内しています。',
    sections: [
      { heading: '制度の概要', content: '<p>一宮市の移住支援事業は、東京圏から一宮市へ移住し、就業や起業など一定の要件を満たす方を支援する制度です。国・県の移住支援制度に連動するため、転入時期や就業先の条件が重要です。</p>' },
      { heading: '対象者', content: '<p>東京23区への在住・通勤歴など移住元要件を満たし、一宮市へ転入した方のうち、対象求人への就業、専門人材、テレワーク、関係人口、起業などの要件に該当する方が対象です。</p>' },
      { heading: '申請の注意点', content: '<p>申請期限、予算枠、転入後の申請可能期間、就業継続要件を確認します。移住前から対象要件を確認し、必要書類をそろえてください。</p>' }
    ],
    officialUrl: 'https://www.city.ichinomiya.aichi.jp/katsuryokusouzou/sangyoushinkou/1000050/1028926.html',
    sourceName: '一宮市 移住支援事業について',
    sourceUrls: ['https://www.city.ichinomiya.aichi.jp/katsuryokusouzou/sangyoushinkou/1000050/1028926.html'],
    sourceNote: '一宮市公式ページで移住支援事業、東京圏からの移住、就業・起業等の要件に関する案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hirakata-housing-reform',
    title: '枚方市 住まいのリフォーム支援',
    organization: '枚方市',
    type: 'local',
    maxAmount: '住まいのリフォーム関連制度を案内',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '大阪府',
    tags: ['枚方市', '住まい', 'リフォーム', '住宅改修', '相談'],
    eligibility: '枚方市内で住まいのリフォームを検討する方、住宅改修関連制度の要件を満たす方が対象です。',
    applicationPeriod: '制度ごとに異なる。工事前に公式案内を確認',
    description: '枚方市が、住まいのリフォームに関する情報や関連制度を案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>枚方市の住まいのリフォームページでは、住宅リフォームに関する情報や相談先、関連制度が案内されています。生成データのような一律の補助金ではなく、対象工事や目的に応じた制度情報として確認します。</p>' },
      { heading: '対象者', content: '<p>枚方市内の住宅でリフォームを検討する方、耐震化やバリアフリーなど住宅改修関連制度の要件を満たす方が対象です。制度ごとに対象工事や申請条件が異なります。</p>' },
      { heading: '確認ポイント', content: '<p>リフォーム関連制度は、工事前申請や予算枠が設定されることがあります。公式ページから該当する制度を確認し、契約前に担当窓口へ相談してください。</p>' }
    ],
    officialUrl: 'https://www.city.hirakata.osaka.jp/0000011531.html',
    sourceName: '枚方市 住まいのリフォームについて',
    sourceUrls: ['https://www.city.hirakata.osaka.jp/0000011531.html'],
    sourceNote: '枚方市公式ページで住まいのリフォームに関する案内ページを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'amagasaki-startup-support',
    title: '尼崎市 創業支援',
    organization: '尼崎市',
    type: 'local',
    maxAmount: '創業支援セミナー等を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '兵庫県',
    tags: ['尼崎市', '創業支援', '起業', 'セミナー', '相談'],
    eligibility: '尼崎市内で創業を検討している方、創業準備中の方、創業後間もない事業者などが対象です。',
    applicationPeriod: 'セミナー・支援メニューごとに異なる。公式ページで確認',
    description: '尼崎市が、創業を検討する方向けにセミナーや支援情報を案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>尼崎市の創業支援ページでは、創業希望者向けのセミナーや支援情報が案内されています。単一の給付金ではなく、創業準備や事業計画づくりを支える支援メニューとして確認します。</p>' },
      { heading: '対象者', content: '<p>尼崎市内で創業を考えている方、創業に向けた知識を学びたい方、創業後の事業運営を相談したい方などが対象です。</p>' },
      { heading: '利用方法', content: '<p>公式ページで開催中のセミナー、相談窓口、関連支援を確認します。補助金や融資制度を使う場合は、別途個別制度の要件と申請期間を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/sangyo/yusi_josei/keiei_sien/1006269/1006306.html',
    sourceName: '尼崎市の創業支援（セミナー等）について',
    sourceUrls: ['https://www.city.amagasaki.hyogo.jp/sangyo/yusi_josei/keiei_sien/1006269/1006306.html'],
    sourceNote: '尼崎市公式ページで創業支援、セミナー等の案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shimonoseki-startup-support',
    title: '下関市 創業支援事業',
    organization: '下関市',
    type: 'local',
    maxAmount: '創業支援メニューを案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '山口県',
    tags: ['下関市', '創業支援', '起業', '相談', '支援事業'],
    eligibility: '下関市内で創業を検討している方、創業後間もない事業者などが対象です。',
    applicationPeriod: '支援メニューごとに異なる。公式ページで確認',
    description: '下関市が、市内で創業を目指す方向けに創業支援事業や関連支援を案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>下関市の創業支援事業は、市内で新たに事業を始めたい方を対象に、創業相談や関係機関の支援情報を案内するものです。単一の給付金ではなく、創業段階に応じた支援メニューとして確認します。</p>' },
      { heading: '対象者', content: '<p>下関市内で創業を検討する方、事業計画を作成中の方、創業後間もない事業者などが対象です。利用する支援ごとに対象者や必要書類が異なります。</p>' },
      { heading: '利用方法', content: '<p>公式ページで創業支援の内容、相談窓口、関連制度を確認し、事業計画や資金計画に応じて担当窓口へ相談します。</p>' }
    ],
    officialUrl: 'https://www.city.shimonoseki.lg.jp/soshiki/57/2281.html',
    sourceName: '下関市 創業支援事業について',
    sourceUrls: ['https://www.city.shimonoseki.lg.jp/soshiki/57/2281.html'],
    sourceNote: '下関市公式ページで創業支援事業の案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kurume-startup-support',
    title: '久留米市 開業・創業支援',
    organization: '久留米市',
    type: 'local',
    maxAmount: '開業・創業支援メニューを案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['久留米市', '開業', '創業支援', '起業', '相談'],
    eligibility: '久留米市内で開業・創業を検討している方、創業準備中または創業後間もない事業者などが対象です。',
    applicationPeriod: '支援メニューごとに異なる。公式ページで確認',
    description: '久留米市が、開業・創業を目指す方向けに相談、支援制度、関係機関情報を案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>久留米市の開業・創業支援ページでは、創業を検討する方向けの支援情報がまとめて案内されています。補助金、融資、相談、セミナーなど、目的に応じて確認する入口として利用します。</p>' },
      { heading: '対象者', content: '<p>久留米市内で新たに事業を始める方、開業準備中の方、創業後間もない事業者などが対象です。制度ごとに所在地、創業時期、対象経費などの要件があります。</p>' },
      { heading: '確認ポイント', content: '<p>個別の補助金や融資制度は募集期間や予算枠が変わります。公式ページから該当制度を選び、事前相談や申請期限を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kurume.fukuoka.jp/1090sangyou/2030kaigyou/',
    sourceName: '久留米市 開業・創業支援',
    sourceUrls: ['https://www.city.kurume.fukuoka.jp/1090sangyou/2030kaigyou/'],
    sourceNote: '久留米市公式ページで開業・創業支援の案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'omuta-migration-support',
    title: '大牟田市 移住支援金',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '移住支援金を案内',
    maxAmountNum: 0,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '福岡県',
    tags: ['大牟田市', '移住支援金', '移住', '就業', '起業'],
    eligibility: '東京圏などから大牟田市へ移住し、就業・起業など公式要件を満たす方が対象です。',
    applicationPeriod: '年度ごとの受付期間・予算状況は公式ページで確認',
    description: '大牟田市が、一定の要件を満たして移住する方を対象に移住支援金を案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大牟田市の移住支援金は、移住元や就業・起業などの要件を満たして市へ移住する方を支援する制度です。転入後の申請期限や継続居住要件を確認する必要があります。</p>' },
      { heading: '対象者', content: '<p>移住元要件を満たし、大牟田市に転入した方のうち、対象求人への就業、起業、テレワークなど公式要件に該当する方が対象です。</p>' },
      { heading: '申請の注意点', content: '<p>支援金は予算や年度により受付状況が変わります。転入前から対象要件を確認し、必要書類や申請期限を大牟田市公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/kiji00315758/index.html',
    sourceName: '大牟田市 移住支援金',
    sourceUrls: ['https://www.city.omuta.lg.jp/kiji00315758/index.html'],
    sourceNote: '大牟田市公式ページで移住支援金の制度案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'sasebo-startup-support',
    title: '佐世保市 創業支援',
    organization: '佐世保市',
    type: 'local',
    maxAmount: '創業支援メニューを案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '長崎県',
    tags: ['佐世保市', '創業支援', '起業', '相談', '支援制度'],
    eligibility: '佐世保市内で創業を検討している方、創業後間もない事業者などが対象です。',
    applicationPeriod: '支援メニューごとに異なる。公式ページで確認',
    description: '佐世保市が、市内で創業を考える方向けに支援制度や相談先を案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>佐世保市の創業支援ページでは、佐世保で創業を考える方向けに支援情報が案内されています。創業相談、支援機関、関連制度などを確認できます。</p>' },
      { heading: '対象者', content: '<p>佐世保市内で創業を検討している方、創業準備中の方、創業後間もない事業者などが対象です。利用する制度ごとに要件が異なります。</p>' },
      { heading: '利用方法', content: '<p>公式ページで支援内容や相談先を確認し、事業計画や資金計画に合わせて関係窓口へ相談します。補助金や融資は個別の募集要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.sasebo.lg.jp/keizai/syouko/sougyousien.html',
    sourceName: '佐世保で創業をお考えの皆さんを支援します',
    sourceUrls: ['https://www.city.sasebo.lg.jp/keizai/syouko/sougyousien.html'],
    sourceNote: '佐世保市公式ページで創業希望者向け支援案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-city-startup-support',
    title: '大分市 創業者応援事業補助金（令和8年度）',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'employment',
    prefecture: '大分県',
    tags: ['大分市', '創業支援', '補助金', '令和8年度', '起業'],
    eligibility: '大分市内で創業する方、創業後間もない方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度募集。予算がなくなり次第受付終了',
    description: '大分市が、創業者を応援するため、創業に必要な経費の一部を補助する令和8年度の制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大分市創業者応援事業補助金は、市内で創業する方を対象に、創業初期に必要な経費の一部を補助する制度です。令和8年度募集として公式ページに掲載されています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは補助上限額は120万円とされています。補助率、対象経費、対象者の詳細は募集要項で確認します。</p>' },
      { heading: '申請の注意点', content: '<p>予算がなくなり次第受付終了と案内されています。申請前に受付状況、必要書類、交付決定前着手の扱いを公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/o155/shigotosangyo/kigyoshien/sogyo5.html',
    sourceName: '大分市 創業者応援事業補助金の募集について（令和8年度）',
    sourceUrls: ['https://www.city.oita.oita.jp/o155/shigotosangyo/kigyoshien/sogyo5.html'],
    sourceNote: '大分市公式ページで令和8年度創業者応援事業補助金、補助上限120万円、予算到達次第受付終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-city-migration-support',
    title: '鹿児島市 移住・就業等支援事業（移住支援金制度）',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '2人以上世帯100万円、単身60万円。18歳未満1人につき最大100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '移住支援金', '移住', '就業', '子育て加算'],
    eligibility: '東京圏等から鹿児島市へ移住し、就業・起業・テレワークなど公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2027年2月15日まで。予算に達し次第受付終了',
    deadlineDate: '2027-02-15',
    description: '鹿児島市が、移住元・就業・起業等の要件を満たして転入する方に移住支援金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鹿児島市の移住・就業等支援事業は、移住元要件を満たして鹿児島市へ転入し、就業、起業、テレワークなどの要件を満たす方を支援する制度です。</p>' },
      { heading: '支給額', content: '<p>公式ページでは、単身者は60万円、2人以上の世帯は100万円とされています。18歳未満の世帯員を帯同して転入する場合は、18歳未満の者1人につき最大100万円の加算があります。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の申請受付期限は2027年2月15日です。受付順に審査し、予算に達し次第受付終了となるため、早めに申請要件と必要書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/koyosuishin/sangyo/koyo/kohoshi/ijushienkin.html',
    sourceName: '鹿児島市 移住・就業等支援事業（移住支援金制度）',
    sourceUrls: ['https://www.city.kagoshima.lg.jp/koyosuishin/sangyo/koyo/kohoshi/ijushienkin.html'],
    sourceNote: '鹿児島市公式ページで令和8年度申請期限2027年2月15日、単身60万円、2人以上世帯100万円、18歳未満加算最大100万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'naha-startup-support',
    title: '那覇市 社会地域課題解決型起業支援事業',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    prefecture: '沖縄県',
    tags: ['那覇市', '起業支援', '創業支援', '社会課題', '補助金'],
    eligibility: '那覇市の社会課題・地域課題の解決を目的に起業する方、または創業5年未満の個人事業主・法人などが対象です。',
    applicationPeriod: '令和8年度公募は2026年4月28日から2026年6月10日まで',
    deadlineDate: '2026-06-10',
    description: '那覇市が、社会課題・地域課題の解決を目的に起業する方を支援する令和8年度の補助事業です。',
    sections: [
      { heading: '制度の概要', content: '<p>なはし社会地域課題解決型起業支援事業は、那覇市の社会課題・地域課題の解決を目的に起業する方を支援する制度です。創業5年未満の個人事業主・法人も対象となる場合があります。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助上限額は100万円、補助率は補助対象経費の3分の2以内とされています。専門家等による伴走支援も案内されています。</p>' },
      { heading: '申請期限', content: '<p>令和8年度公募期間は2026年4月28日から2026年6月10日までです。現在は期限を過ぎているため、次回募集や関連制度を公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/business/kigyouricchi/1003647/1008315.html',
    sourceName: '那覇市 社会地域課題解決型起業支援事業',
    sourceUrls: ['https://www.city.naha.okinawa.jp/business/kigyouricchi/1003647/1008315.html'],
    sourceNote: '那覇市公式ページで令和8年度公募、上限100万円、補助率3分の2以内、公募期間2026年4月28日から2026年6月10日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hakodate-startup-support',
    title: '函館市 創業支援事業',
    organization: '函館市',
    type: 'local',
    maxAmount: '創業バックアップ助成金・セミナー等を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '北海道',
    tags: ['函館市', '創業支援', '創業バックアップ助成金', '起業', 'セミナー'],
    eligibility: '函館地域に事業拠点を設けて創業予定の方、または創業から5年以内の個人・中小企業者などが対象です。',
    applicationPeriod: '創業バックアップ助成金や講座ごとに異なる。公式ページで確認',
    description: '函館市が、創業予定者や創業後間もない方を対象に、創業バックアップ助成金、創業支援セミナー、創業スキルアップ講座などを案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>函館市の創業支援事業は、函館地域産業振興財団などと連携し、創業段階に応じたセミナー、事業計画の支援、優れた事業計画への開業資金助成などを行うものです。</p>' },
      { heading: '対象者', content: '<p>函館地域に事業拠点を設け、年度内に創業する方、または創業から5年以内の個人・中小企業者で、具体的な事業計画を持つ方などが対象です。</p>' },
      { heading: '利用方法', content: '<p>創業バックアップ助成金、創業支援セミナー、創業スキルアップ講座など、利用するメニューごとに応募先や申込方法が異なります。公式ページから函館市産業支援センター等の案内を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.hakodate.hokkaido.jp/docs/2018030700027/',
    sourceName: '函館市 創業支援事業',
    sourceUrls: ['https://www.city.hakodate.hokkaido.jp/docs/2018030700027/'],
    sourceNote: '函館市公式ページで創業支援事業、創業バックアップ助成金、創業支援セミナー、創業スキルアップ講座を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iwaki-housing-reform',
    title: 'いわき市 個人住宅優良ストック形成支援事業',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'housing',
    prefecture: '福島県',
    tags: ['いわき市', '住宅リフォーム', '住宅改修', '市内施工業者', '令和8年度'],
    eligibility: 'いわき市に住民登録があり、対象住宅に居住する所有者または親族で、市内施工業者による対象リフォーム工事を行う方が対象です。',
    applicationPeriod: '令和8年度は2026年7月1日から2026年8月31日まで。予算到達時点で受付終了',
    deadlineDate: '2026-08-31',
    description: 'いわき市が、良質な住宅ストック形成と地域経済活性化を目的に、個人住宅のリフォーム工事費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>いわき市個人住宅優良ストック形成支援事業は、市内施工業者が行う個人住宅のリフォーム工事等を支援する制度です。住宅の新築や一部対象外工事は補助対象外です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助金額は補助対象工事代金の10％、上限15万円とされています。対象工事は工事代金10万円以上の個人住宅の改良工事です。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の募集期間は2026年7月1日から2026年8月31日までです。予算額に達した時点で受付終了となり、交付決定前に着手した工事は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/www/contents/1618912363187/index.html',
    sourceName: 'いわき市 個人住宅優良ストック形成支援事業',
    sourceUrls: ['https://www.city.iwaki.lg.jp/www/contents/1618912363187/index.html'],
    sourceNote: 'いわき市公式ページで令和8年度個人住宅優良ストック形成支援事業、補助率10%、上限15万円、募集期間2026年7月1日から8月31日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iwaki-migration-support',
    title: 'いわき市 移住支援制度',
    organization: 'いわき市',
    type: 'local',
    maxAmount: '2人以上世帯100万円、単身60万円。18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment', 'housing', 'childcare'],
    prefecture: '福島県',
    tags: ['いわき市', '移住支援金', '移住', '子育て世帯', '就業'],
    eligibility: 'いわき市へ移住し、移住元・就業・起業・テレワークなど公式要件を満たす方、または子育て世帯等が対象です。',
    applicationPeriod: '制度ごとに異なる。移住前後の要件と受付状況を公式ページで確認',
    description: 'いわき市が、移住支援金や子育て世帯移住支援金など、移住に関する支援制度を案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>いわき市の移住支援制度ページでは、国・県制度に連動した移住支援金や、子育て世帯向けの移住支援などが案内されています。制度ごとに移住元、就業、転入時期などの要件が異なります。</p>' },
      { heading: '支給額', content: '<p>公式ページでは、移住支援金は単身世帯60万円、二人以上の世帯100万円、18歳未満の子どもを帯同する場合は子ども1人あたり100万円加算と案内されています。子育て世帯移住支援金は県外から最大10万円、県内から最大5万円の支援も案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>制度ごとに申請期限、転入後の申請可能期間、就業継続・居住継続要件が異なります。移住前から公式ページで対象要件と必要書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.iwaki.lg.jp/www/contents/1001000004128/index.html',
    sourceName: 'いわき市 移住支援制度',
    sourceUrls: ['https://www.city.iwaki.lg.jp/www/contents/1001000004128/index.html'],
    sourceNote: 'いわき市公式ページで移住支援金の単身60万円、二人以上世帯100万円、18歳未満1人100万円加算、子育て世帯移住支援金を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yokote-startup-support',
    title: '横手市 起業・創業支援事業補助金',
    organization: '横手市',
    type: 'local',
    maxAmount: '起業初期投資経費の一部を補助',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '秋田県',
    tags: ['横手市', '起業支援', '創業支援', '補助金', '令和8年度'],
    eligibility: '横手市内で新たに起業し、地域商業の活性化につながる事業を営む中小企業者などが対象です。',
    applicationPeriod: '令和8年度は2026年4月1日から2027年1月29日まで。予算上限到達時は終了',
    deadlineDate: '2027-01-29',
    description: '横手市が、市内で新たに起業する中小企業者を対象に、初期投資にかかる経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>横手市起業・創業支援事業補助金は、市内で新たに起業し、地域商業の活性化につながる事業を営む中小企業者を支援する制度です。</p>' },
      { heading: '申請区分', content: '<p>公式ページでは、一般枠、県外移住枠、ICT枠などの申請書類作成フォームが案内されています。申請者は自身の計画に合った枠を確認します。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の募集期間は2026年4月1日から2027年1月29日までです。予算上限に達した場合は終了し、審査会により採択可否が決定されます。</p>' }
    ],
    officialUrl: 'https://www.city.yokote.lg.jp/syoukougyo/1001359/1009098.html',
    sourceName: '横手市 起業・創業支援事業補助金',
    sourceUrls: ['https://www.city.yokote.lg.jp/syoukougyo/1001359/1009098.html'],
    sourceNote: '横手市公式ページで起業・創業支援事業補助金、募集期間2026年4月1日から2027年1月29日、一般枠・県外移住枠・ICT枠を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tsuruoka-housing-reform',
    title: '鶴岡市 住宅リフォーム支援事業補助金',
    organization: '鶴岡市',
    type: 'local',
    maxAmount: '中心市街地特別枠は最大300万円',
    maxAmountNum: 300,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '山形県',
    tags: ['鶴岡市', '住宅リフォーム', '空き家活用', '移住', '令和8年度'],
    eligibility: '鶴岡市内で自己または2親等以内の親族が所有し、自己が居住する住宅を市内業者と契約してリフォームする方などが対象です。',
    applicationPeriod: '令和8年度は枠ごとに受付。最終受付は2026年12月18日または予算上限まで',
    deadlineDate: '2026-12-18',
    description: '鶴岡市が、一定の要件工事を含む住宅リフォーム工事に対して補助を行う令和8年度の制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鶴岡市住宅リフォーム支援事業補助金は、市内業者と契約して行う30万円以上の住宅リフォーム工事を支援する制度です。着工済み・完了済み工事は対象外です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、一般世帯は工事費の5分の1で上限24万円、移住・新婚・子育て世帯は工事費の3分の1で上限30万円とされています。移住・空き家特別枠は上限200万円、中心市街地特別枠は上限300万円です。</p>' },
      { heading: '申請期限', content: '<p>枠ごとに受付時期が異なります。第1回、抽選受付、特別枠受付があり、予算に達しない場合は2026年12月18日または予算上限まで先着順で受け付けると案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.tsuruoka.lg.jp/kurashi/jyutaku/kenchiku/kenthiku0320220.html',
    sourceName: '鶴岡市 住宅リフォーム支援事業補助金',
    sourceUrls: ['https://www.city.tsuruoka.lg.jp/kurashi/jyutaku/kenchiku/kenthiku0320220.html'],
    sourceNote: '鶴岡市公式ページで令和8年度住宅リフォーム支援事業補助金、一般上限24万円、移住・新婚・子育て上限30万円、移住・空き家特別枠200万円、中心市街地特別枠300万円、最終受付2026年12月18日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'obihiro-startup-support',
    title: '帯広市 創業支援',
    organization: '帯広市',
    type: 'local',
    maxAmount: '創業支援制度を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '北海道',
    tags: ['帯広市', '創業支援', '起業', '事業者支援', '相談'],
    eligibility: '帯広市内で創業を検討している方、創業準備中または創業後間もない事業者などが対象です。',
    applicationPeriod: '支援制度ごとに異なる。公式ページで確認',
    description: '帯広市が、市内での創業を検討する方向けに創業支援制度や相談情報を案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>帯広市の創業支援ページでは、創業を考える方や事業を始めたばかりの方に向けた支援制度、相談先、関連情報が案内されています。</p>' },
      { heading: '対象者', content: '<p>帯広市内で創業を検討している方、創業準備中の方、創業後間もない事業者などが対象です。制度ごとに対象者や必要書類が異なります。</p>' },
      { heading: '利用方法', content: '<p>公式ページで支援制度や相談窓口を確認し、事業計画や資金計画に合わせて担当窓口へ相談します。補助金や融資を利用する場合は、個別制度の要件を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.obihiro.hokkaido.jp/sangyo/1012996/index.html',
    sourceName: '帯広市 創業支援',
    sourceUrls: ['https://www.city.obihiro.hokkaido.jp/sangyo/1012996/index.html'],
    sourceNote: '帯広市公式ページで創業支援に関する案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'takasaki-housing-reform',
    title: '高崎市 住環境改善助成事業',
    organization: '高崎市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    prefecture: '群馬県',
    tags: ['高崎市', '住宅リフォーム', '住環境改善', '助成金', '令和8年度'],
    eligibility: '高崎市内の対象住宅で、助成対象工事を行い、所得要件など公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度の事前申請は2026年7月1日から2026年8月31日まで。本申請は2026年11月30日まで',
    deadlineDate: '2026-11-30',
    description: '高崎市が、住環境改善のための住宅改修工事費の一部を助成する令和8年度の制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高崎市住環境改善助成事業は、市内住宅の住環境改善を目的に、対象となる工事費の一部を助成する制度です。令和8年度は20万円未満の工事やエアコン設置工事も対象に拡充されています。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、助成対象工事経費の30％、上限20万円まで助成すると案内されています。予算額に達した場合は受付できない場合があります。</p>' },
      { heading: '申請期限', content: '<p>事前申請の受付期間は2026年7月1日から8月31日まで、本申請は証明書到達後から2026年11月30日までです。工事着手前に2段階の手続きが必要です。</p>' }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/page/3352.html',
    sourceName: '高崎市 住環境改善助成事業',
    sourceUrls: ['https://www.city.takasaki.gunma.jp/page/3352.html'],
    sourceNote: '高崎市公式ページで令和8年度住環境改善助成事業、助成率30%、上限20万円、事前申請2026年7月1日から8月31日、本申請2026年11月30日までを確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'takasaki-migration-support',
    title: '高崎市 移住支援金',
    organization: '高崎市',
    type: 'local',
    maxAmount: '世帯100万円、単身60万円。18歳未満1人につき30万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '群馬県',
    tags: ['高崎市', '移住支援金', '東京圏', '就業', '起業'],
    eligibility: '東京圏から高崎市へ移住し、就業・起業など公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月1日から2027年2月5日まで。予算額到達時は終了',
    deadlineDate: '2027-02-05',
    description: '高崎市が、東京圏から移住し対象法人への就業等の要件を満たす方に支給する移住支援金です。',
    sections: [
      { heading: '制度の概要', content: '<p>高崎市移住支援金は、東京圏から高崎市へ移住し、対象法人への就業、専門人材、テレワーク、起業など一定の要件を満たす方を支援する制度です。</p>' },
      { heading: '支給額', content: '<p>公式ページでは、単身での移住は60万円、世帯での移住は100万円、18歳未満の世帯員を帯同する場合は1人につき30万円加算と案内されています。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の受付期間は2026年4月1日から2027年2月5日までです。転入後1年以内かつ受付期間内の申請が必要で、予算額に達した場合は受付できないことがあります。</p>' }
    ],
    officialUrl: 'https://www.city.takasaki.gunma.jp/page/3253.html',
    sourceName: '高崎市 移住支援金',
    sourceUrls: ['https://www.city.takasaki.gunma.jp/page/3253.html'],
    sourceNote: '高崎市公式ページで令和8年度移住支援金、単身60万円、世帯100万円、18歳未満加算30万円、受付期間2026年4月1日から2027年2月5日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kawaguchi-housing-reform',
    title: '川口市 住宅リフォーム補助金',
    organization: '川口市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'housing',
    prefecture: '埼玉県',
    tags: ['川口市', '住宅リフォーム', '住宅改修', '補助金', '令和8年度'],
    eligibility: '川口市内の対象住宅で、税込20万円以上のリフォーム工事を行い、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月16日から2026年8月5日まで。予算額到達時は終了',
    deadlineDate: '2026-08-05',
    description: '川口市が、市内の景気活性化と既存住宅ストックの有効活用を目的に、個人住宅のリフォーム工事費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>川口市住宅リフォーム補助金は、個人住宅のリフォーム工事費の一部を補助する制度です。契約締結後、かつ施工前に申請する必要があります。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、税込20万円以上のリフォーム工事を行う場合、工事費用の5％、最大10万円を補助すると案内されています。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の受付期間は2026年4月16日から2026年8月5日までです。予算額に達し次第終了し、完了報告は2026年8月31日までに提出する必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/soshiki/01130/040/2_2/48993.html',
    sourceName: '川口市 住宅リフォーム補助金',
    sourceUrls: ['https://www.city.kawaguchi.lg.jp/soshiki/01130/040/2_2/48993.html'],
    sourceNote: '川口市公式ページで令和8年度住宅リフォーム補助金、工事費5%、最大10万円、受付期間2026年4月16日から8月5日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kawaguchi-sme-support',
    title: '川口市 補助金・助成金情報',
    organization: '川口市',
    type: 'local',
    maxAmount: '事業者向け補助金・助成金を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '埼玉県',
    tags: ['川口市', '中小企業支援', '補助金', '助成金', '事業者支援'],
    eligibility: '川口市内の事業者など、各補助金・助成金の公式要件を満たす方が対象です。',
    applicationPeriod: '制度ごとに異なる。公式ページで確認',
    description: '川口市が、事業者向けを含む補助金・助成金情報をまとめて案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>川口市の補助金・助成金ページでは、市が案内する各種補助金や助成金の情報を確認できます。単一の一律給付ではなく、制度ごとに対象者、対象経費、受付期間が異なります。</p>' },
      { heading: '対象者', content: '<p>川口市内の中小企業者、個人事業主、創業者など、各制度の要件を満たす方が対象です。利用する制度ごとに所在地、事業内容、経費、申請期限を確認します。</p>' },
      { heading: '利用方法', content: '<p>公式ページから該当する補助金・助成金を選び、募集要項、必要書類、受付状況を確認して申請します。予算枠がある制度は早期終了する場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.kawaguchi.lg.jp/soshiki/01110/021/10/index.html',
    sourceName: '川口市 補助金・助成金について',
    sourceUrls: ['https://www.city.kawaguchi.lg.jp/soshiki/01110/021/10/index.html'],
    sourceNote: '川口市公式ページで補助金・助成金情報の案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ichikawa-housing-reform',
    title: '市川市 あんしん住宅助成制度',
    organization: '市川市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    prefecture: '千葉県',
    tags: ['市川市', '住宅改修', 'あんしん住宅', '助成制度', 'バリアフリー'],
    eligibility: '市川市内の住宅で、市内施工業者を利用して住宅の良質化に資する改修工事を行い、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月20日から2027年2月1日まで。予算到達時は終了',
    deadlineDate: '2027-02-01',
    description: '市川市が、住宅の良質化に資する改修工事を市内施工業者で行う場合に、経費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>市川市あんしん住宅助成制度は、市内施工業者を利用して住宅の良質化に資する改修工事を行う場合に、経費の一部を助成する制度です。屋根や外壁の塗装は補助対象工事ではありません。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補助対象経費の3分の1で上限10万円の工事や、補助対象経費の2分の1で上限30万円の工事などが案内されています。工事内容により上限額が異なります。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の受付期間は2026年4月20日から2027年2月1日までです。受付は先着順で、予算額に到達した場合は期間内でも終了します。</p>' }
    ],
    officialUrl: 'https://www.city.ichikawa.lg.jp/page/1771.html',
    sourceName: '市川市 あんしん住宅助成制度',
    sourceUrls: ['https://www.city.ichikawa.lg.jp/page/1771.html'],
    sourceNote: '市川市公式ページであんしん住宅助成制度、受付期間2026年4月20日から2027年2月1日、上限10万円・30万円の助成区分を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oyama-migration-support',
    title: '小山市 移住支援金',
    organization: '小山市',
    type: 'local',
    maxAmount: '世帯100万円、単身60万円。子1人につき100万円加算（上限2人）',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '栃木県',
    tags: ['小山市', '移住支援金', '東京圏', '就業', '子育て加算'],
    eligibility: '東京圏から小山市へ移住し、対象求人への就業、起業、テレワーク等の公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月1日から2027年1月29日まで。予算到達時は終了',
    deadlineDate: '2027-01-29',
    description: '小山市が、東京圏から移住し対象求人への就業等の要件を満たす方に支給する移住支援金です。',
    sections: [
      { heading: '制度の概要', content: '<p>小山市移住支援金は、東京圏から小山市へ転入し、対象求人への就業、起業、テレワークなどの要件を満たす方を支援する制度です。転入前の事前相談が推奨されています。</p>' },
      { heading: '支給額', content: '<p>公式ページでは、単身での移住は60万円、世帯での移住は100万円に加え、18歳未満の同一世帯員1人につき100万円の加算が案内されています。子の加算は上限2人までです。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の申請は2026年4月1日から2027年1月29日まで受付されます。予算に限りがあるため、期限前に受付終了となる場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.oyama.tochigi.jp/kurashi/sumai-hikkoshi/hikkoshi/page000518.html',
    sourceName: '小山市 移住支援金',
    sourceUrls: ['https://www.city.oyama.tochigi.jp/kurashi/sumai-hikkoshi/hikkoshi/page000518.html'],
    sourceNote: '小山市公式ページで移住支援金、単身60万円、世帯100万円、子1人100万円加算（上限2人）、受付期間2026年4月1日から2027年1月29日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'chofu-housing-reform',
    title: '調布市 住宅に関する補助・助成',
    organization: '調布市',
    type: 'local',
    maxAmount: '住宅関連の補助・助成制度を案内',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '東京都',
    tags: ['調布市', '住宅補助', '耐震', 'バリアフリー', '省エネ'],
    eligibility: '調布市内の住宅所有者・居住者など、各住宅関連補助・助成制度の公式要件を満たす方が対象です。',
    applicationPeriod: '制度ごとに異なる。公式ページで確認',
    description: '調布市が、住宅に関する補助・助成制度をまとめて案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>調布市の住宅に関する補助・助成ページでは、太陽光発電設備・蓄電池設備、ブロック塀撤去、耐震シェルター、バリアフリー住宅改修、空き家リノベーション、省エネルギー設備導入などの支援情報が案内されています。</p>' },
      { heading: '対象者', content: '<p>調布市内の住宅所有者、居住者、マンション管理組合など、各制度の要件を満たす方が対象です。制度ごとに対象住宅、対象工事、施工前申請などの条件が異なります。</p>' },
      { heading: '確認ポイント', content: '<p>住宅関連の補助は、工事契約・着手前の申請が必要な場合があります。公式ページから該当制度を選び、受付期間、予算枠、対象工事、必要書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.chofu.lg.jp/kurashi/sumai/hojo/index.html',
    sourceName: '調布市 住宅に関する補助・助成',
    sourceUrls: ['https://www.city.chofu.lg.jp/kurashi/sumai/hojo/index.html'],
    sourceNote: '調布市公式ページで住宅に関する補助・助成、太陽光・蓄電池、ブロック塀、耐震、バリアフリー、空き家リノベーション、省エネ設備等の制度一覧を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'hiratsuka-startup-support',
    title: '平塚市 創業支援',
    organization: '平塚市',
    type: 'local',
    maxAmount: '創業相談・融資利子等補助を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '神奈川県',
    tags: ['平塚市', '創業支援', '起業', '融資', '相談'],
    eligibility: '平塚市内で創業を希望する方、創業予定者、創業後5年未満の方などが対象です。',
    applicationPeriod: '支援メニューごとに異なる。公式ページで確認',
    description: '平塚市が、創業希望者向けに相談、セミナー、特定創業支援等事業、創業融資、信用保証料・利子補助などを案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>平塚市の創業支援ページでは、認定創業支援等事業計画に基づき、創業相談、創業塾、特定創業支援等事業、創業アドバイザー派遣、創業融資などの支援を案内しています。</p>' },
      { heading: '支援内容', content: '<p>公式ページでは、市融資制度「新創業支援資金」や、利用者を対象とした信用保証料・利子補助が案内されています。特定創業支援等事業の受講が要件となる場合があります。</p>' },
      { heading: '利用方法', content: '<p>創業段階や事業計画の状況に応じて、経営・創業・副業相談会、創業相談窓口、融資相談などを利用します。個別制度の要件と申請期間は公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.hiratsuka.kanagawa.jp/kigyo/page-c_01622.html',
    sourceName: '平塚市 創業を希望する方への支援について',
    sourceUrls: ['https://www.city.hiratsuka.kanagawa.jp/kigyo/page-c_01622.html'],
    sourceNote: '平塚市公式ページで創業支援、特定創業支援等事業、創業相談、新創業支援資金、信用保証料・利子補助を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'urayasu-migration-support',
    title: '浦安市 住宅用設備等脱炭素化促進事業補助金',
    organization: '浦安市',
    type: 'local',
    maxAmount: '集合住宅充電設備は最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '千葉県',
    tags: ['浦安市', '脱炭素', '省エネ設備', '住宅設備', '補助金'],
    eligibility: '浦安市内の住宅に対象設備を設置し、交付申請時に浦安市の住民登録がある方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月1日から2027年2月26日まで。予算終了時は終了',
    deadlineDate: '2027-02-26',
    description: '浦安市が、住宅の脱炭素化を促進するため、家庭用燃料電池、蓄電池、断熱窓、電気自動車関連設備などの導入費用を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>浦安市住宅用設備等脱炭素化促進事業補助金は、住宅に脱炭素化に資する設備を設置する際の費用の一部を補助する制度です。設備が設置された住宅の購入も対象となる場合があります。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、家庭用燃料電池は上限10万円、定置用リチウムイオン蓄電システムは上限7万円、断熱窓は上限8万円、V2H充放電設備は上限25万円などが案内されています。集合住宅の充電設備は条件により1基当たり上限100万円です。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の申請期間は2026年4月1日から2027年2月26日までです。申請期間内でも予算がなくなり次第終了します。</p>' }
    ],
    officialUrl: 'https://www.city.urayasu.lg.jp/todokede/kankyo/torikumi/1035517.html',
    sourceName: '浦安市 住宅用設備等脱炭素化促進事業補助金',
    sourceUrls: ['https://www.city.urayasu.lg.jp/todokede/kankyo/torikumi/1035517.html'],
    sourceNote: '浦安市公式ページで令和8年度住宅用設備等脱炭素化促進事業補助金、申請期間2026年4月1日から2027年2月26日、設備別上限額を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'matsumoto-startup-support',
    title: '松本市 創業支援',
    organization: '松本市',
    type: 'local',
    maxAmount: '創業者向け家賃補助・融資等を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '長野県',
    tags: ['松本市', '創業支援', '起業', '家賃補助', '融資'],
    eligibility: '松本市内で創業を予定している方、創業後間もない方など、各支援制度の公式要件を満たす方が対象です。',
    applicationPeriod: '支援メニューごとに異なる。公式ページで確認',
    description: '松本市が、市内で創業する方向けに創業スクール、相談、創業者向け家賃補助、制度融資などを案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>松本市の創業支援ページでは、創業に必要な知識を学ぶ創業スクール、商工会議所等での相談、創業支援拠点、創業者向け補助金、制度融資などが案内されています。</p>' },
      { heading: '支援内容', content: '<p>公式ページでは、松本市内で創業する際の店舗家賃補助や、創業予定者・創業後5年未満の方が利用できる融資制度が案内されています。具体的な上限額や募集期間は個別制度ページで確認します。</p>' },
      { heading: '利用方法', content: '<p>創業スクール、創業相談、家賃補助、融資など、目的に合う支援を公式ページから選びます。申請前に対象者、対象経費、申請期限を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.matsumoto.nagano.jp/soshiki/75/111436.html',
    sourceName: '松本市 創業支援',
    sourceUrls: ['https://www.city.matsumoto.nagano.jp/soshiki/75/111436.html'],
    sourceNote: '松本市公式ページで創業スクール、創業相談、創業者向け家賃補助、創業者向け融資の案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagaoka-startup-support',
    title: '長岡市 起業・創業支援',
    organization: '長岡市',
    type: 'local',
    maxAmount: '起業・創業支援メニューを案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '新潟県',
    tags: ['長岡市', '起業', '創業支援', '事業者支援', '相談'],
    eligibility: '長岡市内で起業・創業を検討する方、創業後間もない事業者などが対象です。',
    applicationPeriod: '支援メニューごとに異なる。公式ページで確認',
    description: '長岡市が、起業・創業に関する支援情報をまとめて案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>長岡市の起業・創業ページでは、市内で新たに事業を始める方向けの支援情報や相談先が案内されています。補助金、融資、相談、創業支援施設など、目的に応じて確認します。</p>' },
      { heading: '対象者', content: '<p>長岡市内で起業・創業を予定する方、創業準備中の方、創業後間もない事業者などが対象です。利用する制度ごとに所在地、事業内容、創業時期などの条件があります。</p>' },
      { heading: '確認ポイント', content: '<p>個別の補助金・融資・相談制度は受付期間や予算枠が異なります。公式ページから該当制度を選び、募集要項や必要書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.nagaoka.niigata.jp/sangyou/cate12/',
    sourceName: '長岡市 起業・創業',
    sourceUrls: ['https://www.city.nagaoka.niigata.jp/sangyou/cate12/'],
    sourceNote: '長岡市公式ページで起業・創業カテゴリの支援情報を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'joetsu-migration-support',
    title: '上越市 移住・就業支援金',
    organization: '上越市',
    type: 'local',
    maxAmount: '世帯100万円、単身60万円。子育て加算は18歳未満1人につき100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '新潟県',
    tags: ['上越市', '移住支援金', '就業支援', '東京圏', '子育て加算'],
    eligibility: '東京圏から上越市へ移住し、市内中小企業等への就業、起業、テレワーク等の公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中の申請。申請前に公式窓口へ確認',
    description: '上越市が、東京圏から市内に移住し、就業または起業などの要件を満たす方に支給する移住・就業支援金です。',
    sections: [
      { heading: '制度の概要', content: '<p>上越市移住・就業支援金は、移住・定住の促進と中小企業等の人手不足解消を目的に、東京圏から上越市へ移住し、就業または起業などの要件を満たす方を支援する制度です。</p>' },
      { heading: '支給額', content: '<p>公式ページでは、2人以上の世帯は100万円、単身世帯は60万円とされています。若者加算10万円、18歳未満の子ども1人につき100万円の子育て加算も案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>申請内容により提出書類が異なり、詳細な要件があります。申請に当たっては必ず上越市の問い合わせ先へ連絡し、令和8年度の要件と受付状況を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.joetsu.niigata.jp/soshiki/sangyou/izyuushienkin.html',
    sourceName: '上越市 移住・就業支援金',
    sourceUrls: ['https://www.city.joetsu.niigata.jp/soshiki/sangyou/izyuushienkin.html'],
    sourceNote: '上越市公式ページで移住・就業支援金、世帯100万円、単身60万円、若者加算10万円、子育て加算18歳未満1人100万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kishiwada-housing-reform',
    title: '岸和田市 空家リフォーム事業補助金',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '大阪府',
    tags: ['岸和田市', '空家', 'リフォーム', '移住定住', '令和8年度'],
    eligibility: '岸和田市外から転入予定で、市内の補助対象空家を所有し、リフォーム後に住民登録して10年以上定住する意思がある方などが対象です。',
    applicationPeriod: '令和8年度は2026年5月7日から2026年12月18日まで',
    deadlineDate: '2026-12-18',
    description: '岸和田市が、市外からの転入・定住促進と空家の有効活用を目的に、空家リフォーム工事費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岸和田市空家リフォーム事業補助金は、市外から岸和田市へ転入するため、市内にある空家をリフォームする所有者を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、空家リフォームに要する経費の3分の2、上限100万円を補助すると案内されています。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の申請受付期間は2026年5月7日から2026年12月18日までです。交付決定前の工事や他補助金との重複には制限があります。</p>' }
    ],
    officialUrl: 'https://www.city.kishiwada.lg.jp/page/122-akiya-reform.html',
    sourceName: '岸和田市 空家リフォーム事業補助金',
    sourceUrls: ['https://www.city.kishiwada.lg.jp/page/122-akiya-reform.html'],
    sourceNote: '岸和田市公式ページで令和8年度空家リフォーム事業補助金、補助率3分の2、上限100万円、受付期間2026年5月7日から12月18日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kishiwada-startup-support',
    title: '岸和田市 創業・販路開拓支援',
    organization: '岸和田市',
    type: 'local',
    maxAmount: '創業・販路開拓支援を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '大阪府',
    tags: ['岸和田市', '創業支援', '販路開拓', '起業', '事業者支援'],
    eligibility: '岸和田市内で創業を検討している方、創業者、販路開拓に取り組む事業者などが対象です。',
    applicationPeriod: '支援メニューごとに異なる。公式ページで確認',
    description: '岸和田市が、市内での創業や創業者の販路開拓を支援する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>岸和田市の創業・販路開拓支援ページでは、市内で創業する方や創業者の販路開拓を支援する制度情報が案内されています。</p>' },
      { heading: '対象者', content: '<p>岸和田市内で創業を予定している方、創業後間もない事業者、販路開拓に取り組む事業者などが対象です。利用する制度ごとに要件が異なります。</p>' },
      { heading: '確認ポイント', content: '<p>補助金や相談、販路開拓支援は募集年度や予算枠により内容が変わります。公式ページで受付状況、対象経費、必要書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kishiwada.lg.jp/page/43-hanrokaitaku.html',
    sourceName: '岸和田市 創業・販路開拓支援',
    sourceUrls: ['https://www.city.kishiwada.lg.jp/page/43-hanrokaitaku.html'],
    sourceNote: '岸和田市公式ページで市内創業や創業者の販路開拓支援の案内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kakogawa-migration-support',
    title: '加古川市 移住支援金',
    organization: '加古川市',
    type: 'local',
    maxAmount: '世帯100万円、単身60万円。18歳未満1人につき100万円加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '兵庫県',
    tags: ['加古川市', '移住支援金', '東京圏', '就業', '子育て加算'],
    eligibility: '東京圏から加古川市へ移住し、就業・起業・テレワーク等の公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2027年2月26日まで。転入後1年以内に申請',
    deadlineDate: '2027-02-26',
    description: '加古川市が、東京圏から市内へ移住した方に対し、兵庫県と協働して交付する移住支援金です。',
    sections: [
      { heading: '制度の概要', content: '<p>加古川市移住支援金は、市内への移住・定住促進と中小企業等の人手不足解消を目的に、東京圏から加古川市へ移住する方を支援する制度です。</p>' },
      { heading: '支給額', content: '<p>公式ページでは、世帯での移住は100万円、単身での移住は60万円と案内されています。18歳未満の世帯員を帯同する場合は1人につき100万円を加算します。</p>' },
      { heading: '申請期限', content: '<p>申請できる期間は転入後1年以内で、令和8年度の申請受付は2027年2月26日までです。予算上の理由により交付できない場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.kakogawa.lg.jp/soshikikarasagasu/chiikishinkobu/shokoroseika_rousei/1573436789098.html',
    sourceName: '加古川市 移住支援金',
    sourceUrls: ['https://www.city.kakogawa.lg.jp/soshikikarasagasu/chiikishinkobu/shokoroseika_rousei/1573436789098.html'],
    sourceNote: '加古川市公式ページで令和8年度移住支援金、世帯100万円、単身60万円、18歳未満1人100万円加算、申請期限2027年2月26日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'takarazuka-housing-reform',
    title: '宝塚市 住宅リフォーム等助成対象事業',
    organization: '宝塚市',
    type: 'local',
    maxAmount: '住宅リフォーム等の助成対象事業を案内',
    maxAmountNum: 0,
    category: 'housing',
    prefecture: '兵庫県',
    tags: ['宝塚市', '住宅リフォーム', '耐震', 'バリアフリー', '住宅支援'],
    eligibility: '宝塚市内の住宅所有者・居住者、分譲共同住宅の管理組合など、各助成事業の公式要件を満たす方が対象です。',
    applicationPeriod: '制度ごとに異なる。担当窓口で確認',
    description: '宝塚市が、市や兵庫県の住宅リフォーム、バリアフリー、耐震化等に関する助成対象事業を案内する公式ページです。',
    sections: [
      { heading: '制度の概要', content: '<p>宝塚市の住宅リフォーム等助成対象事業ページでは、地域脱炭素、住宅改造、介護目的の住宅改修、分譲共同住宅共用部分の改造、耐震診断・耐震改修などの支援が案内されています。</p>' },
      { heading: '注意点', content: '<p>公式ページでは、経年劣化による外壁塗装や屋根補修などの住宅補修に関する補助事業は現在実施していないと明記されています。</p>' },
      { heading: '利用方法', content: '<p>対象となる支援は制度ごとに担当窓口や要件が異なります。リフォーム等を検討する際は、該当制度の詳細を担当窓口へ確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/1060678/1060691/1061537/1008343/1010411.html',
    sourceName: '宝塚市 住宅リフォーム等助成対象事業',
    sourceUrls: ['https://www.city.takarazuka.hyogo.jp/1060678/1060691/1061537/1008343/1010411.html'],
    sourceNote: '宝塚市公式ページで住宅リフォーム等助成対象事業、地域脱炭素、住宅改造、耐震化等の案内と、外壁塗装・屋根補修等の一般補修補助は実施していない旨を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shunan-startup-support',
    title: '周南市 創業支援',
    organization: '周南市',
    type: 'local',
    maxAmount: '創業相談・講座・融資利率等の支援を案内',
    maxAmountNum: 0,
    category: 'employment',
    prefecture: '山口県',
    tags: ['周南市', '創業支援', '特定創業支援', '相談', '融資'],
    eligibility: '周南市に在住または市内で創業を希望する方、創業後5年以内の事業者などが対象です。',
    applicationPeriod: '支援メニューごとに異なる。公式ページで確認',
    description: '周南市が、創業支援等事業計画に基づき、創業相談、創業講座、証明書発行、融資利率引下げ等を案内する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>周南市の創業支援は、産業競争力強化法に基づく創業支援等事業計画により、商工会議所、金融機関、日本政策金融公庫等と連携して創業相談や創業講座を実施するものです。</p>' },
      { heading: '支援内容', content: '<p>特定創業支援等事業を受けた創業者には、登録免許税の軽減、創業関連保証の特例、市制度融資「創業支援資金」の融資利率引下げ、日本政策金融公庫の貸付利率引下げなどの支援が案内されています。</p>' },
      { heading: '利用方法', content: '<p>創業相談窓口や創業講座を利用し、必要に応じて特定創業支援等事業による支援を受けたことの証明書を申請します。</p>' }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/soshiki/32/91578.html',
    sourceName: '周南市 創業支援',
    sourceUrls: ['https://www.city.shunan.lg.jp/soshiki/32/91578.html'],
    sourceNote: '周南市公式ページで創業支援等事業計画、創業相談、創業講座、登録免許税軽減、創業関連保証、市制度融資利率引下げ等を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'imabari-housing-reform',
    title: '今治市 空き家リフォーム補助金',
    organization: '今治市',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '愛媛県',
    tags: ['今治市', '空き家', 'リフォーム', '移住者', '子育て世帯'],
    eligibility: '愛媛県外から今治市へ移住し、居住目的で購入・賃借した空き家を改修する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度第2次募集は2026年5月11日以降、予算がある限り先着順',
    description: '今治市が、県外からの移住者が居住目的で取得・賃借した空き家の住宅改修や家財道具搬出等の費用を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>住もういまばり！空き家リフォーム補助金は、愛媛県外から移住した方が居住を目的として購入・賃借した空き家の住宅改修や家財道具搬出等を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、住宅改修・家財道具搬出等費用の3分の2または上限額の低い額を補助するとされています。通常地域では働き手世帯100万円、子ども1人200万円、2人300万円、3人以上400万円、指定地域では最大500万円などの上限が案内されています。</p>' },
      { heading: '募集状況', content: '<p>第1次募集は受付終了し、第2次募集は2026年5月11日以降、予算がある限り先着順で受付と案内されています。交付決定前の改修等は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/chiiki/ijyu/hojokin_reform/',
    sourceName: '今治市 空き家リフォーム補助金',
    sourceUrls: ['https://www.city.imabari.ehime.jp/chiiki/ijyu/hojokin_reform/'],
    sourceNote: '今治市公式ページで移住者住宅改修支援事業費補助金、補助率3分の2、通常上限100万から400万円、指定地域上限150万から500万円、第2次募集2026年5月11日以降先着順を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'imabari-startup-support',
    title: '今治市 スタートアップ創業支援補助金',
    organization: '今治市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '愛媛県',
    tags: ['今治市', 'スタートアップ', '創業支援', '補助金', '令和8年度'],
    eligibility: '今治市で創業する方、特定創業支援等事業による支援を受ける方など、各事業区分の公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月1日から2026年9月30日まで',
    deadlineDate: '2026-09-30',
    description: '今治市が、起業チャレンジ支援事業とビジネスプランコンテスト実現支援事業により、創業に必要な経費を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>今治市スタートアップ創業支援補助金は、市内で創業する方を対象に、事業拠点費、施設改修費、備品購入費、広告宣伝費、申請手数料などの一部を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、起業チャレンジ支援事業は上限20万円・補助率2分の1、ビジネスプランコンテスト実現支援事業は上限200万円と案内されています。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の申請期間は、起業チャレンジ支援事業・ビジネスプランコンテスト実現支援事業ともに2026年4月1日から2026年9月30日までです。</p>' }
    ],
    officialUrl: 'https://www.city.imabari.ehime.jp/sangyou/startup/',
    sourceName: '今治市 スタートアップ創業支援補助金',
    sourceUrls: ['https://www.city.imabari.ehime.jp/sangyou/startup/'],
    sourceNote: '今治市公式ページでスタートアップ創業支援補助金、起業チャレンジ支援上限20万円、ビジネスプランコンテスト実現支援上限200万円、申請期間2026年4月1日から9月30日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuoka-new-startup-registration-subsidy-2026',
    title: '福岡市 新規創業促進補助金',
    organization: '福岡市',
    type: 'local',
    maxAmount: '株式会社75,000円、合同会社30,000円',
    maxAmountNum: 7.5,
    category: 'employment',
    prefecture: '福岡県',
    tags: ['福岡市', '創業支援', '会社設立', '登録免許税', '令和8年度'],
    eligibility: '福岡市の特定創業支援等事業の証明を受け、その証明書を活用して登録免許税半額軽減を受け、市内に本社を置く会社を新たに設立する方などが対象です。',
    applicationPeriod: '令和8年度は2026年4月1日から2027年3月31日まで。予算上限に達した場合は早期終了',
    deadlineDate: '2027-03-31',
    description: '福岡市が、特定創業支援等事業を活用して会社を設立する創業者に対し、登録免許税の残りの半額相当額を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福岡市新規創業促進補助金は、新たなチャレンジを行う創業者を後押しするため、国の特定創業支援等事業を活用して登録免許税半額軽減を受けた方に、残りの半額相当額を補助する制度です。</p>' },
      { heading: '補助額', content: '<p>公式ページでは、株式会社設立の場合は一律75,000円、合同会社設立の場合は一律30,000円と案内されています。対象経費は会社設立に必要な登録免許税です。</p>' },
      { heading: '申請のタイミング', content: '<p>特定創業支援等事業の受講後、法人登記手続き前に交付申請が必要です。受付期間は2026年4月1日から2027年3月31日までですが、予算に限りがあるため先着順で早期終了する場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/keizai/r-support/business/tokutei-sougyou-sientoujigyou_08.html',
    sourceName: '福岡市 新規創業促進補助金',
    sourceUrls: ['https://www.city.fukuoka.lg.jp/keizai/r-support/business/tokutei-sougyou-sientoujigyou_08.html'],
    sourceNote: '福岡市公式ページで令和8年度新規創業促進補助金、株式会社75,000円、合同会社30,000円、受付期間2026年4月1日から2027年3月31日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-startup-growth-support-2026',
    title: '長崎市 創業者成長支援補助金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    prefecture: '長崎県',
    tags: ['長崎市', '創業支援', '販路開拓', '経営改善', '令和8年度'],
    eligibility: '長崎市内で創業予定または創業後5年未満の法人・個人で、創業サポート長崎による特定創業支援等事業を受け、事業計画を作成した方が対象です。',
    applicationPeriod: '令和8年度は2026年5月18日から2026年11月30日まで',
    deadlineDate: '2026-11-30',
    description: '長崎市が、創業サポート長崎の支援を受けた創業者に対し、販路開拓や経営改善の取り組みに必要な経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長崎市創業者成長支援補助金は、創業サポート長崎による特定創業支援等事業を受け、事業計画を作成した創業者の販路開拓や経営改善を支援する補助金です。</p>' },
      { heading: '補助内容', content: '<p>対象経費は広報費、外部委託費、機械器具借上料、備品購入費、展示会等出展費などです。訪問客還元事業は補助率2分の1・上限50万円、その他の事業は上限25万円と案内されています。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の申請受付期間は2026年5月18日から2026年11月30日までです。交付決定前に契約・購入した経費は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/page/55890.html',
    sourceName: '長崎市 創業者成長支援補助金',
    sourceUrls: ['https://www.city.nagasaki.lg.jp/page/55890.html'],
    sourceNote: '長崎市公式ページで創業者成長支援補助金、補助率2分の1、訪問客還元事業上限50万円、その他事業上限25万円、受付期間2026年5月18日から11月30日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-startup-support-2026',
    title: '大分市 創業者応援事業補助金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'employment',
    prefecture: '大分県',
    tags: ['大分市', '創業支援', '事業所開設', '賃借料', '令和8年度'],
    eligibility: '大分市内に主たる事業所や本店を置く創業予定者または創業後5年未満の創業者で、特定創業支援等事業による支援を受けるなどの公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。事業計画や受付状況を公式ページで確認',
    description: '大分市が、創業や創業者の成長促進、産業振興、雇用創出を目的に、創業時に必要な経費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大分市創業者応援事業補助金は、創業または創業後の事業規模拡大を行うため、市内で新たな事業所を開設する創業者を支援する補助金です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助上限額は120万円、補助率は2分の1以内とされています。女性・若者・シニアは3分の2以内です。対象経費には事業所賃借料、事業所改修費用、法人登記等に係る経費、販売促進等に係る経費が含まれます。</p>' },
      { heading: '確認ポイント', content: '<p>申請年度の3月31日までに特定創業支援等事業による支援を受け、大分市から証明書の交付を受けていることなど、複数の要件があります。申請前に募集要領とチェックシートを確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/o155/shigotosangyo/kigyoshien/sogyo5.html',
    sourceName: '大分市 創業者応援事業補助金',
    sourceUrls: ['https://www.city.oita.oita.jp/o155/shigotosangyo/kigyoshien/sogyo5.html'],
    sourceNote: '大分市公式ページで令和8年度創業者応援事業補助金、上限120万円、補助率2分の1以内、女性・若者・シニア3分の2以内、対象経費を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-vacant-store-startup-2026',
    title: '鹿児島市 空き店舗活用開業支援補助金',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    relatedCategories: ['housing'],
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '創業支援', '空き店舗', '開業', '令和8年度'],
    eligibility: '鹿児島市が主催する創業に関するセミナー等を修了し、一定の要件を満たして空き店舗を活用して開業する方が対象です。',
    applicationPeriod: '令和8年度は第2次募集2026年7月1日から8月31日、第3次募集2026年10月1日から11月30日',
    deadlineDate: '2026-11-30',
    description: '鹿児島市が、空き店舗を活用して開業する場合の内外装や設備改修などの整備費用を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鹿児島市の空き店舗活用開業支援は、空き店舗を活用して開業する方に対し、開業に伴う店舗整備費用の一部を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>補助率は補助対象経費の2分の1以内です。中心市街地の商店街区域内の空き店舗は上限100万円、区域外または団地核内の空き店舗は上限50万円と案内されています。</p>' },
      { heading: '募集期間', content: '<p>令和8年度は第1次募集が終了し、第2次募集は2026年7月1日から8月31日、第3次募集は2026年10月1日から11月30日です。予算状況により終了する場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/san-shien/sougyousyatenanto.html',
    sourceName: '鹿児島市 空き店舗を活用して開業する場合の整備費用補助',
    sourceUrls: ['https://www.city.kagoshima.lg.jp/san-shien/sougyousyatenanto.html'],
    sourceNote: '鹿児島市公式ページで令和8年度空き店舗活用開業支援、補助率2分の1以内、中心市街地商店街区域内上限100万円、区域外等上限50万円、第2次・第3次募集期間を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyazaki-nigiwai-creation-support-2026',
    title: '宮崎市 地域のにぎわい創出支援事業補助金',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '宮崎県',
    tags: ['宮崎市', '商工団体', '地域活性化', 'イベント', '令和8年度'],
    eligibility: '宮崎市内の商工団体等、商工業の振興を図ることを目的とする団体が対象です。地域自治会や企業等の主催イベントは対象外です。',
    applicationPeriod: '令和8年度の選考申込は2026年4月15日17時15分必着',
    deadlineDate: '2026-04-15',
    description: '宮崎市が、地域社会や商店街の活性化を目的に、商工団体等が実施するイベント・祭り等のまちづくり活動を支援する補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>宮崎市地域のにぎわい創出支援事業補助金は、地域社会や商店街の活性化を図るため、商工団体等が行うイベント・祭り等の事業費を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象経費の2分の1以内または選考会で決定した内示額のいずれか低い方を補助し、上限は50万円と案内されています。</p>' },
      { heading: '受付状況', content: '<p>令和8年度の選考申込は2026年4月15日17時15分必着です。現在は期限経過のため、同種事業の次回募集や追加募集の有無を公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/business/loan/397682.html',
    sourceName: '宮崎市 地域のにぎわい創出支援事業補助金',
    sourceUrls: ['https://www.city.miyazaki.miyazaki.jp/business/loan/397682.html'],
    sourceNote: '宮崎市公式ページで令和8年度地域のにぎわい創出支援事業補助金、補助率2分の1以内、上限50万円、選考申込期限2026年4月15日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'naha-regional-shopping-street-support-2026',
    title: '那覇市 地域商店街等支援事業',
    organization: '那覇市',
    type: 'local',
    maxAmount: '商店街等の創意工夫された取組を補助',
    maxAmountNum: 0,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '沖縄県',
    tags: ['那覇市', '商店街', '地域活性化', '事業者支援', '令和8年度'],
    eligibility: '那覇市の中心市街地以外の商店街振興組合、商店街振興組合連合会、任意の商店街・通り会、またはそれらが主体となる実行委員会等が対象です。',
    applicationPeriod: '令和8年度は2026年5月8日から2026年9月24日まで。予算がなくなり次第終了',
    deadlineDate: '2026-09-24',
    description: '那覇市が、中心市街地以外の商店街等における課題解決に向けた創意工夫ある取り組みに補助金を交付する事業です。',
    sections: [
      { heading: '制度の概要', content: '<p>那覇市地域商店街等支援事業は、中心市街地以外の商店街等が行う創意工夫された取り組みを支援し、商店街等の活性化と地域経済の発展を図る補助事業です。</p>' },
      { heading: '対象団体', content: '<p>対象は、那覇市の中心市街地以外の商店街振興組合、任意の商店街・通り会などです。活動拠点、構成員数、活動実績、規約、会計経理などの要件があります。</p>' },
      { heading: '申請期間', content: '<p>令和8年度の申請期間は2026年5月8日から2026年9月24日までです。予算がなくなり次第、募集終了となります。</p>' }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/business/sangyou/1003586/1003611.html',
    sourceName: '那覇市 地域商店街等支援事業',
    sourceUrls: ['https://www.city.naha.okinawa.jp/business/sangyou/1003586/1003611.html'],
    sourceNote: '那覇市公式ページで令和8年度地域商店街等支援事業、中心市街地以外の商店街等の課題解決支援、申請期間2026年5月8日から9月24日、予算到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-work-engagement-business-power-2026',
    title: '佐賀市 働きがい×企業力アップ支援事業補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '1年目最大160万円、2年目最大150万円',
    maxAmountNum: 160,
    category: 'employment',
    prefecture: '佐賀県',
    tags: ['佐賀市', '事業者支援', '働きがい', '企業力強化', '令和8年度'],
    eligibility: '佐賀市内の中小企業者等で、働きがい創出や企業力強化に取り組み、公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和8年度中。予算額に達した場合は予告なく受付終了',
    description: '佐賀市が、市内事業者の働きがい創出と企業力強化を2年間で支援する補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>佐賀市働きがい×企業力アップ支援事業補助金は、1年目の働きがい創出支援と2年目の企業力強化推進により、市内事業者の持続的な成長を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、1年目は補助上限160万円・補助率3分の2以内、2年目は補助上限150万円・補助率2分の1以内と案内されています。2年目にDX認定を取得した場合は補助率3分の2以内となります。</p>' },
      { heading: '確認ポイント', content: '<p>申請を検討する場合は、事前に佐賀市経済政策課への相談が必要です。予算額に達した場合は予告なく受付終了となります。</p>' }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/sangyo-machizukuri/sangyo-rodo/1/2/6845.html',
    sourceName: '佐賀市 働きがい×企業力アップ支援事業補助金',
    sourceUrls: ['https://www.city.saga.lg.jp/sangyo-machizukuri/sangyo-rodo/1/2/6845.html'],
    sourceNote: '佐賀市公式ページで令和8年度働きがい×企業力アップ支援事業補助金、1年目上限160万円・補助率3分の2以内、2年目上限150万円・補助率2分の1以内を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kumamoto-exhibition-support-2026',
    title: '熊本市 展示会等出展支援事業補助金',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'employment',
    prefecture: '熊本県',
    tags: ['熊本市', '販路開拓', '展示会', '中小企業', '令和8年度'],
    eligibility: '熊本市内に主たる事業所または工場を有する中小企業者等で、展示会等への出展により販路開拓に取り組む方が対象です。',
    applicationPeriod: '令和8年度は2026年7月8日まで',
    deadlineDate: '2026-07-08',
    description: '熊本市が、市内中小企業者等の販路開拓を支援するため、展示会や見本市への出展に必要な経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>熊本市展示会等出展支援事業補助金は、市内中小企業者等が販路開拓のために展示会、見本市、商談会等へ出展する費用を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助率は対象経費の2分の1以内、補助上限額は40万円と案内されています。出展小間料、装飾費、運搬費などが対象となります。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の募集期間は2026年7月8日までです。申請前に募集要項、対象展示会、対象経費を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/kiji00369964/index.html',
    sourceName: '熊本市 展示会等出展支援事業補助金',
    sourceUrls: ['https://www.city.kumamoto.jp/kiji00369964/index.html'],
    sourceNote: '熊本市公式ページで令和8年度展示会等出展支援事業補助金、補助率2分の1以内、上限40万円、募集期限2026年7月8日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kumamoto-shopping-street-opening-2026',
    title: '熊本市 商店街出店支援事業',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'employment',
    relatedCategories: ['housing'],
    prefecture: '熊本県',
    tags: ['熊本市', '商店街', '空き店舗', '開業支援', '令和8年度'],
    eligibility: '熊本市内の商店街エリアにある空き店舗を活用して小売業、飲食業、サービス業を出店する中小企業者等など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月13日から2026年7月10日17時まで',
    deadlineDate: '2026-07-10',
    description: '熊本市が、商店街エリアの空き店舗への出店やにぎわい創出施設、空き店舗リノベーションを支援する補助制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>熊本市商店街出店支援事業は、物価高騰等の影響を受ける中、商店街の空き店舗への出店を促進し、商店街の活性化やにぎわい創出を図る制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助率は2分の1以内、新規出店支援・にぎわい創出支援・空き店舗リノベーション支援の補助上限はいずれも50万円と案内されています。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の募集期間は2026年4月13日から2026年7月10日17時必着です。交付決定前の契約・着工は原則対象外となるため、事前に募集要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/kiji00338591/index.html',
    sourceName: '熊本市 商店街出店支援事業',
    sourceUrls: ['https://www.city.kumamoto.jp/kiji00338591/index.html'],
    sourceNote: '熊本市公式ページで令和8年度商店街出店支援事業、募集期間2026年4月13日から7月10日17時、補助率2分の1以内、各支援上限50万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kofu-vacant-store-startup-2026',
    title: '甲府市 中心市街地空き店舗活用事業補助金',
    organization: '甲府市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    relatedCategories: ['housing'],
    prefecture: '山梨県',
    tags: ['甲府市', '空き店舗', '中心市街地', '開業支援', '令和8年度'],
    eligibility: '甲府市中心市街地の指定区域内にある空き店舗を活用して新たに出店する個人または法人など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。申請前に事前相談が必要',
    description: '甲府市が、中心市街地の空き店舗を活用して新たに出店する方に、店舗改修費や賃借料の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>甲府市中心市街地空き店舗活用事業補助金は、中心市街地の空き店舗解消とにぎわい創出を目的に、新規出店者の店舗整備や運営開始を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、改修費補助と賃借料補助が案内されています。改修費補助は補助対象経費の2分の1以内、上限100万円です。</p>' },
      { heading: '利用前の注意', content: '<p>対象区域、対象業種、出店計画、空き店舗の要件などがあります。契約や工事着手の前に甲府市へ事前相談し、募集要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/shoko/akitenpo.html',
    sourceName: '甲府市 中心市街地空き店舗活用事業補助金',
    sourceUrls: ['https://www.city.kofu.yamanashi.jp/shoko/akitenpo.html'],
    sourceNote: '甲府市公式ページで中心市街地空き店舗活用事業補助金、改修費補助率2分の1以内、上限100万円、賃借料補助等を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokushima-startup-promotion-2026',
    title: '徳島市 創業促進事業補助金',
    organization: '徳島市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    prefecture: '徳島県',
    tags: ['徳島市', '創業支援', '開業費', '販路開拓', '令和8年度'],
    eligibility: '徳島市内で創業する個人または法人で、特定創業支援等事業による支援を受けるなど、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月14日から2026年6月12日まで',
    deadlineDate: '2026-06-12',
    description: '徳島市が、市内で新たに創業する方に対し、創業時に必要な経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>徳島市創業促進事業補助金は、市内で創業する方の初期負担を軽減し、地域産業の活性化につなげるための補助制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、創業に必要な経費の一部を補助し、補助上限額は30万円と案内されています。対象経費や補助率は募集要項で確認します。</p>' },
      { heading: '確認ポイント', content: '<p>特定創業支援等事業の受講、事業計画、開業時期、対象経費、交付決定前の着手制限などの要件があります。申請前に公式ページの要領を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/shisei/keizai/jigyosha/sogyokigyo_shien/sougyouhojokinn.html',
    sourceName: '徳島市 創業促進事業補助金',
    sourceUrls: ['https://www.city.tokushima.tokushima.jp/shisei/keizai/jigyosha/sogyokigyo_shien/sougyouhojokinn.html'],
    sourceNote: '徳島市公式ページで令和8年度創業促進事業補助金、補助上限30万円、補助率3分の2以内、募集期間2026年4月14日から6月12日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokushima-ec-entry-support-2026',
    title: '徳島市 EC参入支援事業補助金',
    organization: '徳島市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'employment',
    prefecture: '徳島県',
    tags: ['徳島市', 'EC', '販路開拓', '中小企業', '令和8年度'],
    eligibility: '徳島市内に本店または主たる事業所を有する中小企業者等で、ECサイトの開設や出店に取り組む方が対象です。',
    applicationPeriod: '令和8年度は2026年4月14日から2027年1月29日まで。予算がなくなり次第終了',
    deadlineDate: '2027-01-29',
    description: '徳島市が、市内中小企業者等のオンライン販路開拓を支援するため、ECサイトへの参入に必要な経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>徳島市EC参入支援事業補助金は、市内中小企業者等がECサイトを活用して販路を広げる取り組みを支援する補助制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、ECショッピングモールへの出店に係る初期登録手数料・外注費、自己所有ウェブサイトへのEC機能実装経費、ECサイト構築の外注費用が対象です。補助上限額は10万円、補助率は10分の10です。</p>' },
      { heading: '確認ポイント', content: '<p>対象経費、事業実施期間、交付決定前の契約・支払いの扱いなどに条件があります。申請前に募集要項と予算状況を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/shisei/keizai/jigyosha/tyusyokigyo/hanrokakudai/ecsannyuhojyokin.html',
    sourceName: '徳島市 EC参入支援事業補助金',
    sourceUrls: ['https://www.city.tokushima.tokushima.jp/shisei/keizai/jigyosha/tyusyokigyo/hanrokakudai/ecsannyuhojyokin.html'],
    sourceNote: '徳島市公式ページで令和8年度EC参入支援事業補助金、補助上限10万円、補助率10分の10、募集期間2026年4月14日から2027年1月29日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'wakayama-regional-subject-solution-2026',
    title: 'わかやま地域課題解決型起業支援補助金',
    organization: '和歌山県・わかやま産業振興財団',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '和歌山県',
    tags: ['和歌山県', '起業支援', '地域課題', '移住起業', '令和8年度'],
    eligibility: '和歌山県内で地域課題の解決に資する社会的事業を新たに起業する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度の第1回募集は2026年4月1日から2026年5月12日まで。第2回募集は2026年8月中旬から9月下旬予定',
    deadlineDate: '2026-09-30',
    description: '和歌山県とわかやま産業振興財団が、地域課題の解決を目的に県内で起業する方を支援する補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>わかやま地域課題解決型起業支援補助金は、県内で地域課題の解決に資する社会的事業を起業する方を支援する制度です。移住・定住や地域活性化につながる起業を後押しします。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助率は2分の1以内、補助上限額は200万円と案内されています。事業立ち上げに必要な経費の一部が対象です。</p>' },
      { heading: '募集時期', content: '<p>第1回募集は2026年4月1日から2026年5月12日までです。第2回募集は2026年8月中旬から9月下旬が予定されています。正式な締切日は募集開始後に公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://yarukiouendan.or.jp/business/region/',
    sourceName: 'わかやま産業振興財団 わかやま地域課題解決型起業支援補助金',
    sourceUrls: ['https://yarukiouendan.or.jp/business/region/'],
    sourceNote: 'わかやま産業振興財団公式ページで令和8年度わかやま地域課題解決型起業支援補助金、補助率2分の1以内、上限200万円、第1回募集2026年4月1日から5月12日、第2回募集予定を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'shimane-wakuaku-startup-2026',
    title: '島根県 わくわく島根起業支援事業費補助金',
    organization: '島根県',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '島根県',
    tags: ['島根県', '起業支援', '地域課題', 'UIターン', '令和8年度'],
    eligibility: '島根県内で地域課題の解決に資する社会的事業を新たに起業する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は募集時期・締切を公式ページで確認',
    description: '島根県が、地域課題の解決に取り組む県内起業者を支援する補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>わくわく島根起業支援事業費補助金は、島根県内で地域課題の解決に資する社会的事業を起業する方を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、起業に必要な経費の一部を補助し、補助上限額は200万円、補助率は2分の1以内と案内されています。</p>' },
      { heading: '確認ポイント', content: '<p>対象となる事業分野、起業時期、居住要件、事業実施地域、対象経費などに条件があります。申請前に島根県公式ページの募集要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.pref.shimane.lg.jp/industry/syoko/sangyo/kigyo/kigyo_sien/wakuwaushimane.html',
    sourceName: '島根県 わくわく島根起業支援事業費補助金',
    sourceUrls: ['https://www.pref.shimane.lg.jp/industry/syoko/sangyo/kigyo/kigyo_sien/wakuwaushimane.html'],
    sourceNote: '島根県公式ページでわくわく島根起業支援事業費補助金、地域課題解決型起業支援、補助率2分の1以内、上限200万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'matsue-new-product-development-support-2026',
    title: '松江市 新製品・新技術開発支援補助金',
    organization: '松江市',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'employment',
    prefecture: '島根県',
    tags: ['松江市', '新製品開発', '新技術開発', '中小企業', '令和8年度'],
    eligibility: '松江市内に主たる事業所を有する中小企業者等で、新製品・新技術の開発に取り組むなど、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。募集期間と予算状況を公式ページで確認',
    description: '松江市が、市内中小企業者等の新製品・新技術開発を支援する補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>松江市新製品・新技術開発支援補助金は、市内中小企業者等が取り組む新製品や新技術の開発を支援し、事業力向上につなげる制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、トライアル事業は上限20万円、開発スタートアップ事業は上限100万円、実用化製品化事業は上限200万円と案内されています。補助率はいずれも対象経費の2分の1です。</p>' },
      { heading: '確認ポイント', content: '<p>対象となる開発内容、事業実施期間、対象経費、交付決定前の着手可否などに要件があります。申請前に募集要項と様式を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/soshikikarasagasu/sangyokeizaibu_matsuesangyoshiencenter/156.html',
    sourceName: '松江市 新製品・新技術開発支援補助金',
    sourceUrls: ['https://www.city.matsue.lg.jp/soshikikarasagasu/sangyokeizaibu_matsuesangyoshiencenter/156.html'],
    sourceNote: '松江市公式ページで令和8年度新製品・新技術開発支援事業補助金、トライアル上限20万円、開発スタートアップ上限100万円、実用化製品化上限200万円、補助率2分の1を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'takamatsu-manufacturing-automation-support-2026',
    title: '高松市 中小企業等高度化・デジタル化支援補助金',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大80万円',
    maxAmountNum: 80,
    category: 'employment',
    prefecture: '香川県',
    tags: ['高松市', '中小企業', 'デジタル化', '生産性向上', '令和8年度'],
    eligibility: '高松市内に事業所を有する中小企業者等で、設備導入やデジタル化により生産性向上等に取り組む方が対象です。',
    applicationPeriod: '令和8年度は2026年4月21日から2026年6月30日まで',
    deadlineDate: '2026-06-30',
    description: '高松市が、市内中小企業者等の高度化・デジタル化に向けた設備導入等を支援する補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>高松市中小企業等高度化・デジタル化支援補助金は、中小企業者等が行う生産性向上やデジタル化に資する取り組みを支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助率は2分の1、補助上限額は80万円と案内されています。設備・システム等の導入に係る経費が対象です。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の申請受付期間は2026年4月21日から2026年6月30日までです。受付期間内でも予算状況や要件を公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/jigyosha/sangyou/shoukougyou/seityousokushin/koudoka.html',
    sourceName: '高松市 中小企業等高度化・デジタル化支援補助金',
    sourceUrls: ['https://www.city.takamatsu.kagawa.jp/jigyosha/sangyou/shoukougyou/seityousokushin/koudoka.html'],
    sourceNote: '高松市公式ページで令和8年度中小企業等高度化・デジタル化支援補助金、補助率2分の1、上限80万円、受付期間2026年4月21日から6月30日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kochi-city-business-challenge-support-2026',
    title: '高知市 空き店舗活用創業支援事業',
    organization: '高知市',
    type: 'local',
    maxAmount: '最大60万円相当（月10万円×6か月）',
    maxAmountNum: 60,
    category: 'employment',
    prefecture: '高知県',
    tags: ['高知市', '空き店舗', '創業支援', '商店街', '令和8年度'],
    eligibility: '高知市の商店街または中心市街地の空き店舗で昼間営業を行う18歳以上の個人または中小企業者等で、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。予算がなくなり次第終了。事業着手前に認定が必要',
    description: '高知市が、商店街や中心市街地の空き店舗で事業を営む方に、店舗賃借料の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高知市空き店舗活用創業支援事業は、商店街や中心市街地の空き店舗で事業を営む方に対し、店舗賃借料の一部を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>中心商店街で市内事業者が新規創業する場合、店舗賃借料6か月分について補助率3分の2、若年層枠は4分の3、補助限度額は月10万円です。区域や市内外の別により補助率・月額上限が異なります。</p>' },
      { heading: '確認ポイント', content: '<p>事業着手前までに市の認定を受ける必要があります。予算がなくなり次第受付終了となるため、事前に商業振興課へ確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/soshiki/128/akitenpo.html',
    sourceName: '高知市 空き店舗活用創業支援事業',
    sourceUrls: ['https://www.city.kochi.kochi.jp/soshiki/128/akitenpo.html'],
    sourceNote: '高知市公式ページで令和8年度空き店舗活用創業支援事業、中心商店街の市内事業者新規創業は店舗賃借料6か月分、補助率3分の2、若年層枠4分の3、月額上限10万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'toyama-energy-saving-appliance-2026',
    title: '富山市 省エネルギー機器等導入補助事業',
    organization: '富山市',
    type: 'local',
    maxAmount: '対象機器ごとに定額補助',
    maxAmountNum: 0,
    category: 'living',
    prefecture: '富山県',
    tags: ['富山市', '省エネ機器', '住宅設備', '脱炭素', '令和8年度'],
    eligibility: '富山市内の住宅に対象となる省エネルギー機器等を導入し、保証開始日や申請期限などの公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年5月1日9時から2027年3月19日17時15分まで。受付は先着順',
    deadlineDate: '2027-03-19',
    description: '富山市が、家庭における省エネルギー機器等の導入を支援する補助事業です。',
    sections: [
      { heading: '制度の概要', content: '<p>富山市省エネルギー機器等導入補助事業は、家庭で使う省エネルギー機器等の導入を支援し、省エネルギー化と脱炭素化を進める制度です。</p>' },
      { heading: '補助内容', content: '<p>対象となる機器や補助額は機器ごとに定められています。申請できる期間は、保証開始日から60日以内または2027年3月19日のいずれか早い日までです。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の申請受付期間は2026年5月1日9時から2027年3月19日17時15分までです。受付は先着順で、同日受付が予算額を超える場合は抽選となります。</p>' }
    ],
    officialUrl: 'https://www.city.toyama.lg.jp/kurashi/gomi/1010252/1005156.html',
    sourceName: '富山市 省エネルギー機器等導入補助事業',
    sourceUrls: ['https://www.city.toyama.lg.jp/kurashi/gomi/1010252/1005156.html'],
    sourceNote: '富山市公式ページで令和8年度省エネルギー機器等導入補助事業、申請受付期間2026年5月1日9時から2027年3月19日17時15分、保証開始日から60日以内の申請、先着順を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukui-vacant-house-renovation-2026',
    title: '福井市 空き家リフォーム支援事業補助金',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大60万円（基本30万円＋子育て応援加算30万円）',
    maxAmountNum: 60,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '福井県',
    tags: ['福井市', '空き家', 'リフォーム', '移住定住', '令和8年度'],
    eligibility: '福井市内の空き家を購入または賃借し、居住や利活用のためにリフォームする方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。予算上限に達し次第終了',
    description: '福井市が、空き家の利活用や移住定住促進を目的に、空き家のリフォーム費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福井市空き家リフォーム支援事業補助金は、市内の空き家を活用するための改修費用を支援し、空き家の解消と定住促進につなげる制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、対象工事費の3分の1、上限30万円を補助すると案内されています。子育て応援加算に該当する場合は30万円が加算されます。</p>' },
      { heading: '確認ポイント', content: '<p>対象となる空き家、申請者、工事内容、契約・着工時期、他制度との併用可否などに条件があります。工事前に必ず公式ページと担当窓口で確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/sisei/hojyo/kurasi/akiya_reform31.html',
    sourceName: '福井市 空き家リフォーム支援事業補助金',
    sourceUrls: ['https://www.city.fukui.lg.jp/sisei/hojyo/kurasi/akiya_reform31.html'],
    sourceNote: '福井市公式ページで令和8年度空き家リフォーム支援事業、対象工事費3分の1、上限30万円、子育て応援加算30万円、予算枠到達時終了を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kyoto-energy-saving-appliance-2026',
    title: '京都市 省エネ家電買替促進事業',
    organization: '京都市',
    type: 'local',
    maxAmount: '最大2万円相当',
    maxAmountNum: 2,
    category: 'living',
    prefecture: '京都府',
    tags: ['京都市', '省エネ家電', '家計支援', '脱炭素', '令和8年度'],
    eligibility: '京都市内の対象店舗で、対象となる省エネ性能を満たす家電に買い替える市民など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。予算上限に達し次第終了',
    description: '京都市が、家庭の省エネ化と光熱費負担軽減を目的に、省エネ家電への買替を支援する事業です。',
    sections: [
      { heading: '制度の概要', content: '<p>京都市省エネ家電買替促進事業は、家庭で使用する家電を省エネ性能の高い製品へ買い替える取り組みを支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、対象家電の購入・買替に対し、購入額等に応じたポイント等の支援が案内されています。上限は2万円相当です。</p>' },
      { heading: '確認ポイント', content: '<p>対象製品、対象店舗、購入期間、設置条件、申請期限、予算残額を確認してから購入してください。</p>' }
    ],
    officialUrl: 'https://www.city.kyoto.lg.jp/kankyo/page/0000347925.html',
    sourceName: '京都市 省エネ家電買替促進事業',
    sourceUrls: ['https://www.city.kyoto.lg.jp/kankyo/page/0000347925.html'],
    sourceNote: '京都市公式ページで省エネ家電への買換え促進事業、対象は省エネ基準達成率100%以上のエアコン・冷蔵庫、登録電器店で補助相当額を値引き、2025年11月28日受付開始を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'yamanashi-scholarship-repayment-support-2026',
    title: '山梨県 奨学金返還支援事業',
    organization: '山梨県',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '山梨県',
    tags: ['山梨県', '奨学金返還', '就職支援', '若者定着', '令和8年度'],
    eligibility: '山梨県内の対象業種・企業へ就職し、一定期間県内で勤務する予定の学生・既卒者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。募集時期と対象年度を公式ページで確認',
    description: '山梨県が、県内産業を担う人材の確保と若者の県内定着を目的に、奨学金返還を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>山梨県奨学金返還支援事業は、県内企業への就職や県内定着を促すため、対象者の奨学金返還額の一部を支援する制度です。</p>' },
      { heading: '支援内容', content: '<p>公式ページでは、対象となる奨学金返還額について、一定額を上限に支援すると案内されています。上限は最大120万円です。</p>' },
      { heading: '確認ポイント', content: '<p>対象業種、対象企業、卒業・就職時期、県内勤務期間、申請時期などに条件があります。申請前に山梨県公式ページの募集要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.pref.yamanashi.jp/sangyo-jin/syuugyohojyokin/syuugyohojyo_top.html',
    sourceName: '山梨県 奨学金返還支援事業',
    sourceUrls: ['https://www.pref.yamanashi.jp/sangyo-jin/syuugyohojyokin/syuugyohojyo_top.html'],
    sourceNote: '山梨県公式ページで奨学金返還支援事業、県内就職・定着支援、支援上限最大120万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'ishikawa-scholarship-repayment-support-2026',
    title: 'いしかわ就職応援奨学金返還助成制度',
    organization: '石川県・石川県人材確保・定住推進機構（ILAC）',
    type: 'local',
    maxAmount: '最大200万円',
    maxAmountNum: 200,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '石川県',
    tags: ['石川県', '奨学金返還', '若者定着', '県内就職', '令和8年度'],
    eligibility: '大学院・大学・高専に通う学生等で、登録企業に就職し3年間継続して就業するなど、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年3月31日まで',
    deadlineDate: '2026-03-31',
    description: '石川県と石川県人材確保・定住推進機構が、県内企業の人材確保と若者定着を目的に、奨学金返還を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>いしかわ就職応援奨学金返還助成制度は、登録企業に就職し、3年間継続して就業する学生等を対象に、奨学金返還を支援する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、継続就業により最大200万円まで奨学金返還助成を受けられると案内されています。助成額の一部は企業、残りを県が負担する仕組みです。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の募集は2026年3月31日までです。対象学生、登録企業、対象奨学金、認定手続きなどを公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.isico.or.jp/support/dgnet/d41187308.html',
    sourceName: '石川県産業創出支援機構 いしかわ就職応援奨学金返還助成制度',
    sourceUrls: ['https://www.isico.or.jp/support/dgnet/d41187308.html'],
    sourceNote: '石川県産業創出支援機構の施策ページで、実施機関が石川県人材確保・定住推進機構、いしかわ就職応援奨学金返還助成制度、最大200万円、公募終了2026年3月31日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-city-scholarship-repayment-support-2026',
    title: '佐賀市 奨学金返還支援補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '佐賀県',
    tags: ['佐賀市', '奨学金返還', '若者定着', '就職支援', '令和8年度'],
    eligibility: '佐賀市内に居住し、市内企業等へ就職する若者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。申請期限と受付状況を公式ページで確認',
    description: '佐賀市が、若者の市内定着と就職を支援するため、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>佐賀市奨学金返還支援補助金は、奨学金を返還している若者の経済的負担を軽減し、市内定着や市内就職を促進する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、奨学金返還額の一部を補助し、補助上限は最大60万円と案内されています。</p>' },
      { heading: '確認ポイント', content: '<p>年齢、居住地、就職先、奨学金の種類、返還実績、申請時期などに条件があります。申請前に佐賀市公式ページで要件を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/kurashi/sumai/1/716.html',
    sourceName: '佐賀市 奨学金返還支援補助金',
    sourceUrls: ['https://www.city.saga.lg.jp/kurashi/sumai/1/716.html'],
    sourceNote: '佐賀市公式ページで奨学金返還支援補助金、市内定着・就職支援、補助上限最大60万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'tokushima-scholarship-repayment-support-2026',
    title: '徳島県 奨学金返還支援制度',
    organization: '徳島県',
    type: 'local',
    maxAmount: '最大125万円',
    maxAmountNum: 125,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '徳島県',
    tags: ['徳島県', '奨学金返還', '若者定着', '県内就職', '令和8年度'],
    eligibility: '徳島県内の対象企業等へ就職し、一定期間県内で勤務する予定の学生・既卒者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年1月23日まで',
    deadlineDate: '2026-01-23',
    description: '徳島県が、県内就職と若者定着を促進するため、奨学金返還を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>徳島県奨学金返還支援制度は、県内企業等へ就職する若者の奨学金返還を支援し、県内定着を促す制度です。</p>' },
      { heading: '支援内容', content: '<p>公式ページでは、助成候補者に認定後、大学等を卒業し県内事業所で3年以上就業した場合、就業4年目から8年目までの5年間、助成金額の5分の1ずつを奨学金返還費用として助成すると案内されています。上限は最大125万円です。</p>' },
      { heading: '申請期限', content: '<p>令和8年度の募集期間は2026年1月23日までです。対象者、県内就業開始時期、対象奨学金、応募書類などを徳島県公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.pref.tokushima.lg.jp/sp/ippannokata/sangyo/shushokushien/5026191/',
    sourceName: '徳島県 奨学金返還支援制度',
    sourceUrls: ['https://www.pref.tokushima.lg.jp/sp/ippannokata/sangyo/shushokushien/5026191/'],
    sourceNote: '徳島県公式ポータルで奨学金返還支援制度、上限125万円、県内事業所で3年以上就業後に5年間で助成、募集期限2026年1月23日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kofu-hearing-aid-support-2026',
    title: '甲府市 高齢者補聴器購入費助成事業',
    organization: '甲府市',
    type: 'local',
    maxAmount: '片耳最大5万円。両耳対象の場合は最大10万円',
    maxAmountNum: 10,
    category: 'nursing',
    relatedCategories: ['medical'],
    prefecture: '山梨県',
    tags: ['甲府市', '高齢者', '補聴器', '難聴', '令和8年度'],
    eligibility: '甲府市に住所を有し、申請年度に65歳以上となり、医師が補聴器の装用を認め、補装具費支給対象ではない方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。購入前に申請',
    description: '甲府市が、高齢者の軽・中等度難聴による認知機能低下やフレイル予防を目的に、補聴器購入費用の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>甲府市高齢者補聴器購入費助成事業は、高齢者の聞こえを支え、認知機能低下やフレイルの予防につなげるため、補聴器購入費の一部を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>介護保険第1号保険料の所得段階が第1から第3段階の方は購入費用の2分の1、1台あたり上限50,000円です。第4段階の方は購入費用の3分の1、1台あたり上限32,000円です。医師が両耳装用を認めた場合は上限額が2倍になります。</p>' },
      { heading: '申請の注意点', content: '<p>市の交付決定前に購入した補聴器は対象外です。申請書、医師の意見書、見積書を準備し、購入前に地域包括支援課へ申請します。</p>' }
    ],
    officialUrl: 'https://www.city.kofu.yamanashi.jp/kenko_seisaku/hocyoki/2025.html',
    sourceName: '甲府市 高齢者補聴器購入費助成事業',
    sourceUrls: ['https://www.city.kofu.yamanashi.jp/kenko_seisaku/hocyoki/2025.html'],
    sourceNote: '甲府市公式ページで高齢者補聴器購入費助成事業、2026年6月5日更新、所得段階第1から3段階は2分の1・上限5万円、第4段階は3分の1・上限3.2万円、両耳は上限2倍を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-child-hearing-aid-support-2026',
    title: '佐賀市 難聴児補聴器購入費助成事業',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '基準価格と購入費の低い額の3分の2',
    maxAmountNum: 0,
    category: 'nursing',
    relatedCategories: ['medical', 'education'],
    prefecture: '佐賀県',
    tags: ['佐賀市', '難聴児', '補聴器', '人工内耳', '令和8年度'],
    eligibility: '保護者が佐賀市内に住所を有する18歳以下の方で、片耳または両耳の聴力レベルが30デシベル以上かつ身体障害者手帳の交付対象とならない方などが対象です。',
    applicationPeriod: '令和8年度中。購入・修理・更新前に申請',
    description: '佐賀市が、軽度・中度難聴児や人工内耳を装用している難聴児の補聴器購入・修理、人工内耳体外機更新費用の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>佐賀市難聴児補聴器購入費助成事業は、身体障害者手帳の交付対象とならない軽度・中度難聴児等の言語習得や教育上の発達を支援する制度です。</p>' },
      { heading: '助成内容', content: '<p>補聴器の購入・修理、人工内耳体外機の更新が対象です。助成額は、基準価格と購入費のいずれか低い額の3分の2です。</p>' },
      { heading: '申請の注意点', content: '<p>購入、修理、更新前の申請が必要です。購入後に申請しても助成対象にならないため、事前に障がい福祉課へ確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/kenko-fukushi/fukushi/2/2/1724.html',
    sourceName: '佐賀市 難聴児補聴器購入費助成事業',
    sourceUrls: ['https://www.city.saga.lg.jp/kenko-fukushi/fukushi/2/2/1724.html'],
    sourceNote: '佐賀市公式ページで2026年6月1日更新の難聴児補聴器購入費助成事業、18歳以下、補聴器購入・修理と人工内耳体外機更新、基準価格と購入費の低い額の3分の2を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-child-hearing-aid-support-2026',
    title: '長崎市 軽度・中等度難聴児補聴器購入費補助制度',
    organization: '長崎市',
    type: 'local',
    maxAmount: '基準価格または購入価格の低い額の3分の2',
    maxAmountNum: 0,
    category: 'nursing',
    relatedCategories: ['medical', 'education'],
    prefecture: '長崎県',
    tags: ['長崎市', '難聴児', '補聴器', '子ども', '令和8年度'],
    eligibility: '保護者が長崎市内に住所を有し、本人が長崎県内に住所を有する18歳未満で、両耳の聴力レベルが30デシベル以上かつ身体障害者手帳の対象とならない方が対象です。',
    applicationPeriod: '令和8年度中。購入前に申請',
    description: '長崎市が、軽度・中等度難聴児の聴力向上、言語習得、コミュニケーション能力向上を支援するため、補聴器購入費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長崎市軽度・中等度難聴児補聴器購入費補助制度は、身体障害者手帳の対象とならない難聴児に対し、補聴器購入費の一部を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>補聴器を新たに購入する経費、または耐用年数経過後に更新する経費について、基準価格か購入価格の低い方の額に3分の2を乗じた額を補助します。</p>' },
      { heading: '確認ポイント', content: '<p>補聴器の種類ごとに基準価格が定められています。購入前に対象要件、医師の判断、必要書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/site/e-kao/6433.html',
    sourceName: '長崎市 軽度・中等度難聴児補聴器購入費補助制度',
    sourceUrls: ['https://www.city.nagasaki.lg.jp/site/e-kao/6433.html'],
    sourceNote: '長崎市公式ページで2025年4月1日更新の軽度・中等度難聴児補聴器購入費補助制度、18歳未満、基準価格または購入価格の低い額の3分の2を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-child-hearing-aid-support-2026',
    title: '大分市 18歳未満の補聴器・人工内耳修理費助成',
    organization: '大分市',
    type: 'local',
    maxAmount: '基準額に応じて助成。利用者負担は原則3分の1',
    maxAmountNum: 0,
    category: 'nursing',
    relatedCategories: ['medical', 'education'],
    prefecture: '大分県',
    tags: ['大分市', '難聴児', '補聴器', '人工内耳', '令和8年度'],
    eligibility: '18歳未満で、両耳の聴力レベルが30デシベル以上かつ身体障害者手帳に該当しない軽度・中度聴覚障がい児が対象です。',
    applicationPeriod: '令和8年度中。購入・修理前に申請',
    description: '大分市が、18歳未満の軽度・中度聴覚障がい児を対象に、補聴器の購入および補聴器・人工内耳の修理費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大分市の補聴器・人工内耳修理費助成は、身体障害者手帳に該当しない18歳未満の軽度・中度聴覚障がい児の言語発達やコミュニケーション能力向上を支援する制度です。</p>' },
      { heading: '助成内容', content: '<p>補聴器の購入、補聴器・人工内耳の修理費が対象です。基準額は型式や修理部品によって異なり、利用者負担は原則として基準額の3分の1です。</p>' },
      { heading: '申請の注意点', content: '<p>購入前のみの受付です。世帯員の市民税課税額によって助成を受けられない場合があり、県での審査もあります。</p>' }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/o089/kenko/fukushi/1382686784489.html',
    sourceName: '大分市 18歳未満の補聴器の購入および補聴器・人工内耳の修理費の助成',
    sourceUrls: ['https://www.city.oita.oita.jp/o089/kenko/fukushi/1382686784489.html'],
    sourceNote: '大分市公式ページで18歳未満の軽度・中度聴覚障がい児向け補聴器購入および補聴器・人工内耳修理費助成、利用者負担原則3分の1、購入前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'saga-city-block-wall-removal-2026',
    title: '佐賀市 危険ブロック塀等除却費補助金',
    organization: '佐賀市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '佐賀県',
    tags: ['佐賀市', 'ブロック塀', '除却', '防災', '令和8年度'],
    eligibility: '佐賀市内の道路等に面する危険なブロック塀等を所有または管理し、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。工事着手前に申請',
    description: '佐賀市が、地震時の倒壊被害を防ぐため、危険ブロック塀等の除却費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>佐賀市危険ブロック塀等除却費補助金は、道路等に面する危険なブロック塀等を除却し、地震時の通行人被害や避難路閉塞を防ぐための制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、危険ブロック塀等の除却工事に要する費用の一部を補助し、補助上限額は20万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>工事着手前の申請が必要です。対象となる塀の高さ、道路への面し方、危険性の判定、施工業者などの条件を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.saga.lg.jp/sangyo-machizukuri/toshi-kotsu/3/4/2939.html',
    sourceName: '佐賀市 危険ブロック塀等除却費補助金',
    sourceUrls: ['https://www.city.saga.lg.jp/sangyo-machizukuri/toshi-kotsu/3/4/2939.html'],
    sourceNote: '佐賀市公式ページでブロック塀等撤去費補助、補助対象額の3分の2、上限20万円、撤去長さ1メートルあたり1万円基準、工事着手前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'nagasaki-block-wall-removal-2026',
    title: '長崎県 危険ブロック塀除却支援事業',
    organization: '長崎県',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '長崎県',
    tags: ['長崎市', 'ブロック塀', '除却', '防災', '令和8年度'],
    eligibility: '長崎県内で、市町と連携した支援対象となる小中学校通学路沿いの危険ブロック塀等を除却する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。工事契約・着手前に申請',
    description: '長崎県が、市町と連携して、小中学校通学路沿いの危険ブロック塀等の除却を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長崎県危険ブロック塀除却支援事業は、地震発生時のブロック塀等の倒壊による災害を未然に防ぐため、小中学校の通学路にある危険ブロック塀等の撤去を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、市町補助と合わせて20万円を上限に、危険なブロック塀の除却にかかる費用を支援すると案内されています。</p>' },
      { heading: '確認ポイント', content: '<p>対象は小中学校の通学路に面し、市町職員が危険と判断したブロック塀等です。実際の申請は市町窓口で確認してください。</p>' }
    ],
    officialUrl: 'https://www.pref.nagasaki.jp/bunrui/machidukuri/kenchiku-jutaku/jutaku/houritu-kuninozyosei/tamatebako-zyoseiseido/body.html',
    sourceName: '長崎県 県の助成制度',
    sourceUrls: ['https://www.pref.nagasaki.jp/bunrui/machidukuri/kenchiku-jutaku/jutaku/houritu-kuninozyosei/tamatebako-zyoseiseido/body.html'],
    sourceNote: '長崎県公式ページで危険ブロック塀除却支援事業、小中学校通学路沿いの危険ブロック塀等、市町補助と合わせて上限20万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'oita-city-block-wall-removal-2026',
    title: '大分市 危険ブロック塀等除却費補助金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大7万円',
    maxAmountNum: 7,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '大分県',
    tags: ['大分市', 'ブロック塀', '除却', '防災', '令和8年度'],
    eligibility: '大分市内の避難路等に面する危険なブロック塀等の所有者等で、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月14日から2026年12月18日まで。工事着手前に申請',
    deadlineDate: '2026-12-18',
    description: '大分市が、地震等によるブロック塀倒壊被害を防ぐため、危険ブロック塀等の除却費を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大分市危険ブロック塀等除却費補助金は、避難路等の安全確保を目的として、危険なブロック塀等の除却を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、ブロック塀等の除却に要する費用の2分の1以内、上限7万円を補助すると案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>工事着手前の申請が必要です。対象となる避難路、塀の状態、見積書、施工内容などを事前に確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/o168/kurashi/anshinanzen/1273622006917.html',
    sourceName: '大分市 危険ブロック塀等除却費補助金',
    sourceUrls: ['https://www.city.oita.oita.jp/o168/kurashi/anshinanzen/1273622006917.html'],
    sourceNote: '大分市公式ページで令和8年度危険ブロック塀等除却事業、除却費の2分の1以内、上限7万円、募集期間2026年4月14日から12月18日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'miyazaki-city-block-wall-removal-2026',
    title: '宮崎市 危険ブロック塀等除却事業補助金',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '最大23.7万円',
    maxAmountNum: 23.7,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '宮崎県',
    tags: ['宮崎市', 'ブロック塀', '除却', '防災', '令和8年度'],
    eligibility: '宮崎市内の避難路等に面する危険ブロック塀等の所有者で、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度中。工事着手前に申請',
    description: '宮崎市が、地震時に倒壊のおそれがある危険ブロック塀等の除却費用を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宮崎市危険ブロック塀等除却事業補助金は、災害時の避難路等の安全確保を目的に、危険なブロック塀等の除却を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、除却・建替えに対する補助が案内されています。補助額は、ひとつの敷地につき237,000円、除却する場合は1メートルあたり12,000円の3分の2、見積額などのうち低い額が限度です。</p>' },
      { heading: '確認ポイント', content: '<p>補助対象となる塀、道路、工事内容には条件があります。必ず工事着手前に申請し、現地確認や交付決定後に工事を進めてください。</p>' }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/business/architecture/earthquake_resistant/160869.html',
    sourceName: '宮崎市 危険ブロック塀等除却事業補助金',
    sourceUrls: ['https://www.city.miyazaki.miyazaki.jp/business/architecture/earthquake_resistant/160869.html'],
    sourceNote: '宮崎市公式ページでブロック塀等の安全対策推進、危険ブロック塀等の除却・建替え補助、敷地あたり上限237,000円、除却は1メートルあたり12,000円の3分の2等を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'fukuoka-city-block-wall-removal-2026',
    title: '福岡市 ブロック塀等除却費補助事業',
    organization: '福岡市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '福岡県',
    tags: ['福岡市', 'ブロック塀', '除却', '防災', '令和8年度'],
    eligibility: '福岡市内で道路に面する危険なブロック塀等の所有者または管理者で、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月13日から受付開始。工事着工のおおむね1か月前までに申請',
    description: '福岡市が、道路に面している危険なブロック塀等の除却費用の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福岡市ブロック塀等除却費補助事業は、地震時に倒壊のおそれがある道路沿いのブロック塀等を除却し、通行人の安全や避難経路を確保するための制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、除却するブロック塀等の長さに15,000円を乗じた額と、除却費用の3分の2相当額を比較し、低い方を助成するとされています。1件あたりの上限は30万円です。</p>' },
      { heading: '申請の注意点', content: '<p>既に工事契約をした場合や工事を開始・完了した場合は対象外です。工程を決める前に相談し、工事着工のおおむね1か月前までに申請してください。</p>' }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/jutaku-toshi/bid_safe/life/3609.html',
    sourceName: '福岡市 ブロック塀等除却費補助事業',
    sourceUrls: ['https://www.city.fukuoka.lg.jp/jutaku-toshi/bid_safe/life/3609.html'],
    sourceNote: '福岡市公式ページで令和8年度受付開始、道路に面する危険ブロック塀等の除却、長さ1メートルあたり15,000円または除却費の3分の2の低い額、上限30万円、工事着工前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'minamata-block-wall-removal-2026',
    title: '水俣市 危険ブロック塀等安全確保支援事業補助金',
    organization: '水俣市',
    type: 'local',
    maxAmount: '最大14万円',
    maxAmountNum: 14,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '熊本県',
    tags: ['水俣市', 'ブロック塀', '除却', '防災', '令和8年度'],
    eligibility: '水俣市内の避難路に面する危険なブロック塀等の所有者または相続権利者で、市税滞納がなく、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度の事前調査申込は2026年5月18日から2026年10月30日まで',
    deadlineDate: '2026-10-30',
    description: '水俣市が、避難路に面する危険ブロック塀等の撤去費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>水俣市危険ブロック塀等安全確保支援事業補助金は、地震発生時の人身事故防止と避難経路の確保を目的に、避難路に面する危険なブロック塀等の撤去を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、避難路に面する危険なブロック塀等の撤去工事費用の3分の2を補助し、補助上限額は14万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>交付申請の前に、市による事前調査で補助対象かどうかを確認する必要があります。撤去方法や残す高さにも条件があります。</p>' }
    ],
    officialUrl: 'https://www.city.minamata.lg.jp/kiji0031374/index.html',
    sourceName: '水俣市 ご自宅のブロック塀は安全ですか',
    sourceUrls: ['https://www.city.minamata.lg.jp/kiji0031374/index.html'],
    sourceNote: '水俣市公式ページで避難路に面する危険ブロック塀等の撤去費用補助、補助率3分の2、上限14万円、事前調査申込期間2026年5月18日から10月30日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-city-block-wall-removal-2026',
    title: '鹿児島市 ブロック塀等の撤去費補助',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '鹿児島県',
    tags: ['鹿児島市', 'ブロック塀', '撤去', '防災', '令和8年度'],
    eligibility: '鹿児島市内で道路に面する高さ1メートル以上の危険なブロック塀等の所有者または管理者で、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月20日から2027年1月29日まで。交付決定前の着手は対象外',
    deadlineDate: '2027-01-29',
    description: '鹿児島市が、道路に面し倒壊のおそれがあるブロック塀等の撤去費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鹿児島市のブロック塀等撤去費補助は、地震時の倒壊による通行人被害を防ぐため、道路に面する危険な塀の撤去を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、見積額と基準額1メートルあたり1万円のいずれか少ない額の2分の1を補助し、限度額は20万円とされています。</p>' },
      { heading: '申請の注意点', content: '<p>申請順に受付し、予算到達で終了します。補助金交付決定前に撤去工事へ着手した場合は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/kensetu/kenchiku/kenshido/machizukuri/kaihatsu/kenchiku/rokyu/burokkubei.html',
    sourceName: '鹿児島市 ブロック塀等の撤去費に関する補助',
    sourceUrls: ['https://www.city.kagoshima.lg.jp/kensetu/kenchiku/kenshido/machizukuri/kaihatsu/kenchiku/rokyu/burokkubei.html'],
    sourceNote: '鹿児島市公式ページで令和8年度受付、道路に面する危険ブロック塀等の撤去、見積額と1メートルあたり1万円の低い額の2分の1、上限20万円、申請期間2026年4月20日から2027年1月29日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'kagoshima-city-cliff-housing-relocation-2026',
    title: '鹿児島市 がけ地に近接する危険住宅の移転等に関する補助',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '最大829.3万円',
    maxAmountNum: 829.3,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '鹿児島県',
    tags: ['鹿児島市', 'がけ地', '危険住宅', '移転', '令和8年度'],
    eligibility: '鹿児島市内のがけ崩れなど危険な区域に建つ対象住宅から移転し、市税滞納がないなど公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年5月7日から2026年12月9日まで',
    deadlineDate: '2026-12-09',
    description: '鹿児島市が、がけ崩れなど危険な区域に建つ住宅の除却や移転先住宅の建設等を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鹿児島市のがけ地近接等危険住宅移転補助は、がけ崩れなどの危険区域にある住宅から安全な場所へ移転する方を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、除却等費97万5千円、建設及び改修465万円、土地取得206万円、敷地造成60万8千円を限度額として案内しています。条件に合う費目の合計では最大829万3千円です。</p>' },
      { heading: '確認ポイント', content: '<p>対象区域、危険住宅の状態、移転先や建設助成の条件があります。申請順で受付し、予算到達時は終了します。</p>' }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/kensetu/kenchiku/kenshido/machizukuri/tochi/torihiki/iten.html',
    sourceName: '鹿児島市 がけ地に近接する危険住宅の移転等に関する補助',
    sourceUrls: ['https://www.city.kagoshima.lg.jp/kensetu/kenchiku/kenshido/machizukuri/tochi/torihiki/iten.html'],
    sourceNote: '鹿児島市公式ページで令和8年度受付、危険住宅の除却等費97万5千円、建設・改修465万円、土地取得206万円、敷地造成60万8千円、申請期間2026年5月7日から12月9日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'okinawa-city-housing-reform',
    title: '沖縄市 住宅リフォーム支援事業補助金',
    organization: '沖縄市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'housing',
    relatedCategories: ['living', 'disaster'],
    prefecture: '沖縄県',
    tags: ['沖縄市', '住宅リフォーム', 'バリアフリー', '省エネ', '令和8年度'],
    eligibility: '沖縄市に住民登録し、市税等の滞納がなく、市内の自己所有住宅などを市内施工業者で改修する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月1日から2026年12月25日まで。工事着手前に申請',
    deadlineDate: '2026-12-25',
    description: '沖縄市が、市民の住環境向上と市内経済活性化のため、住宅リフォーム工事費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>沖縄市住宅リフォーム支援事業補助金は、市内施工業者による住宅改修を支援し、住まいの安全性や快適性の向上につなげる制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、20万円以上の対象工事について、補助対象工事費の20％を補助し、補助上限額は20万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>交付決定前に契約・着工した工事は対象外です。申請には見積書、工事内容がわかる書類、住宅の所有関係、市税納付状況などの確認が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.okinawa.okinawa.jp/k042/contents/p00027.html',
    sourceName: '沖縄市 住宅リフォーム支援事業補助金',
    sourceUrls: ['https://www.city.okinawa.okinawa.jp/k042/contents/p00027.html'],
    sourceNote: '沖縄市公式ページで令和8年度住宅リフォーム支援事業、20万円以上の対象工事、補助率20％、上限20万円、申請期間2026年4月1日から12月25日、工事着手前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'naha-vacant-house-demolition-2026',
    title: '那覇市 老朽危険空家等除却費等補助金',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '沖縄県',
    tags: ['那覇市', '空家', '除却', '老朽危険空家', '令和8年度'],
    eligibility: '那覇市内の老朽危険空家等の所有者または相続人等で、事前相談と現地確認により公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年5月7日から2026年6月30日まで',
    deadlineDate: '2026-06-30',
    description: '那覇市が、周辺に危険を及ぼすおそれのある老朽危険空家等の除却費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>那覇市老朽危険空家等除却費等補助金は、倒壊や建材飛散などの危険がある空家等を除却し、周辺住民の安全確保と生活環境改善を図る制度です。</p>' },
      { heading: '補助内容', content: '<p>募集要領では、老朽危険空家等の除却工事に要する費用の一部を補助し、補助上限額は50万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>事前相談、現地調査、対象判定を経て申請します。既に解体工事に着手している場合や、要件を満たさない建物は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/_res/projects/default_project/_page_/001/002/067/20260507_boshuuyouryou.pdf',
    sourceName: '那覇市 老朽危険空家等除却費等補助金募集要領',
    sourceUrls: ['https://www.city.naha.okinawa.jp/_res/projects/default_project/_page_/001/002/067/20260507_boshuuyouryou.pdf'],
    sourceNote: '那覇市公式PDFで令和8年度老朽危険空家等除却費等補助金、補助上限50万円、申請期間2026年5月7日から6月30日を確認。',
    verifiedAt,
    publishedAt: '2026-06-26',
  },
  {
    slug: 'iwate-industrial-scholarship-repayment-2026',
    title: '岩手県 いわて産業人材奨学金返還支援制度',
    organization: '岩手県',
    type: 'local',
    maxAmount: '最大250万円',
    maxAmountNum: 250,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '岩手県',
    tags: ['岩手県', '奨学金返還', 'Uターン', 'Iターン', '令和8年度'],
    eligibility: '岩手県の認定企業へ就職し、県内に定住する見込みの学生・既卒者で、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月1日から2026年9月30日まで',
    deadlineDate: '2026-09-30',
    description: '岩手県が、県内産業を担う人材確保と県内定住を促進するため、認定企業への就職者の奨学金返還を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>いわて産業人材奨学金返還支援制度は、岩手県内の認定企業に就職し一定期間勤務する学生・既卒者に対し、奨学金返還を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、大学及び大学院の在学期間を通じて奨学金の貸与を受けた方は助成率2分の1、支援上限額250万円と案内されています。大学のみは上限150万円、大学院のみは上限100万円です。</p>' },
      { heading: '申請の注意点', content: '<p>就職前に支援対象者として認定を受ける必要があります。対象は日本学生支援機構の第一種・第二種奨学金で、募集人数や認定企業の条件も確認してください。</p>' }
    ],
    officialUrl: 'https://www.pref.iwate.jp/sangyoukoyou/monozukuri/ikusei/1008964/1085424.html',
    sourceName: '岩手県 いわて産業人材奨学金返還支援制度 学生・既卒者向け',
    sourceUrls: ['https://www.pref.iwate.jp/sangyoukoyou/monozukuri/ikusei/1008964/1085424.html'],
    sourceNote: '岩手県公式ページで令和8年度募集期間2026年4月1日から9月30日、募集人数120名、助成率2分の1、大学・大学院通算上限250万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'uchinada-scholarship-repayment-2026',
    title: '内灘町 奨学金返還支援補助金',
    organization: '内灘町',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '石川県',
    tags: ['内灘町', '奨学金返還', 'Uターン', '定住促進', '令和8年度'],
    eligibility: '県外の高等教育機関を卒業後、内灘町にUターンし県内で働き、奨学金を返還している方など、公式要件を満たす方が対象です。',
    applicationPeriod: '通年案内中。交付基準日や申請年度の要件を確認',
    description: '内灘町が、Uターンして町内に定住し県内で働く方の奨学金返還を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>内灘町奨学金返還支援補助金は、県外の高等教育機関を卒業後に内灘町へUターンし、県内で働く若者の定住を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、1年間に返還した奨学金額の3分の2、上限10万円を、最長5年間補助すると案内されています。通算では最大50万円です。</p>' },
      { heading: '確認ポイント', content: '<p>補助金の一部は内灘町商工会共通商品券で交付されます。対象となる学校、就業、居住、奨学金の種類、申請時期を確認してください。</p>' }
    ],
    officialUrl: 'https://www.town.uchinada.lg.jp/soshiki/kikaku/9087.html',
    sourceName: '内灘町 奨学金返還支援補助金',
    sourceUrls: ['https://www.town.uchinada.lg.jp/soshiki/kikaku/9087.html', 'https://www.town.uchinada.lg.jp/soshiki/kikaku/21147.html'],
    sourceNote: '内灘町公式ページで奨学金返還額の3分の2、年上限10万円、最長5年間、定住促進制度ページで上限10万円/年×最長5年間を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'wakayama-core-industry-scholarship-repayment-2026',
    title: '和歌山県 中核産業人材確保強化のための奨学金返還助成制度',
    organization: '和歌山県',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'education',
    relatedCategories: ['employment'],
    prefecture: '和歌山県',
    tags: ['和歌山県', '奨学金返還', '中核産業', '技術職', '令和8年度'],
    eligibility: '2028年3月卒業予定で、対象分野に在籍し、和歌山県内の参画企業へ研究開発職または技術職として就職を希望する学生など、公式要件を満たす方が対象です。',
    applicationPeriod: '第11期募集として案内中。募集要項の受付期間を確認',
    description: '和歌山県が、県内中核産業の人材確保を目的に、参画企業へ就職して一定期間勤務する学生の奨学金返還を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>和歌山県中核産業人材確保強化のための奨学金返還助成制度は、県内参画企業への就職を希望する学生を認定し、就職後の奨学金返還を支援する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、奨学金返還額に相当する額を上限100万円まで助成すると案内されています。参画企業に就職し3年勤務した後、原則として奨学金貸与機関に支払われます。</p>' },
      { heading: '対象者', content: '<p>対象は2028年3月卒業予定の大学生、大学院生、高等専門学校生などです。学部・資格・希望職種・貸与型奨学金の要件があります。</p>' }
    ],
    officialUrl: 'https://www.pref.wakayama.lg.jp/prefg/060600/01shin/uturnshushoku/syougakukin_001.html',
    sourceName: '和歌山県 中核産業人材確保強化のための奨学金返還助成制度',
    sourceUrls: ['https://www.pref.wakayama.lg.jp/prefg/060600/01shin/uturnshushoku/syougakukin_001.html'],
    sourceNote: '和歌山県公式ページで第11期募集、2028年3月卒業予定者、募集人数50名、奨学金返還額相当・上限100万円、参画企業就職後3年勤務を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kinokawa-scholarship-repayment-2026',
    title: '紀の川市 奨学金返還支援事業助成金',
    organization: '紀の川市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '和歌山県',
    tags: ['紀の川市', '奨学金返還', '若者定住', '令和8年度'],
    eligibility: '紀の川市に定住し、奨学金を返還しながら働く若者で、認定申請や市税等の公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。認定申請・交付申請の時期を確認',
    description: '紀の川市が、奨学金を返還しながら働く若者の経済的負担を軽減し、市への定住を促進する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>紀の川市奨学金返還支援事業助成金は、市への定住促進を目的に、奨学金を返還しながら働く若者を予算の範囲内で支援する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、所定の要件を満たした方へ奨学金返還額の2分の1を支援し、年間上限12万円、累計上限60万円と案内されています。</p>' },
      { heading: '令和8年度の変更', content: '<p>令和8年度から、高校生を対象とする奨学金も補助対象に加わったと案内されています。対象期間や申請書類は公式ページで確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kinokawa.lg.jp/006/syougakukinhenkan-shien.html',
    sourceName: '紀の川市 奨学金返還支援事業助成金',
    sourceUrls: ['https://www.city.kinokawa.lg.jp/006/syougakukinhenkan-shien.html'],
    sourceNote: '紀の川市公式ページで奨学金返還額の2分の1、年間上限12万円、累計上限60万円、令和8年度から高校生対象奨学金も補助対象を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'wakayama-city-elderly-hearing-aid-2026',
    title: '和歌山市 高齢者補聴器購入費助成事業',
    organization: '和歌山市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '和歌山県',
    tags: ['和歌山市', '高齢者', '補聴器', '介護予防', '令和8年度'],
    eligibility: '和歌山市内に居住し在宅生活をしている65歳以上で、市町村民税非課税世帯、医師に補聴器が必要と認められた方など、公式要件を満たす方が対象です。',
    applicationPeriod: '通年案内中。購入前に申請',
    description: '和歌山市が、高齢者の社会参加と地域交流を支援するため、補聴器購入費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>和歌山市高齢者補聴器購入費助成事業は、聴力低下により日常生活に支障がある在宅高齢者の補聴器購入を支援する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補聴器本体と電池の購入費について、2万円または実支出額のいずれか低い額を助成すると案内されています。助成は1人1回までです。</p>' },
      { heading: '申請の注意点', content: '<p>助成金交付決定前に購入した経費は対象外です。オージオグラム、見積書、医師の意見書欄を含む申請書などを準備して申請します。</p>' }
    ],
    officialUrl: 'https://www.city.wakayama.wakayama.jp/kurashi/kourei_kaigo/1001096/1049637.html',
    sourceName: '和歌山市 高齢者補聴器購入費助成事業',
    sourceUrls: ['https://www.city.wakayama.wakayama.jp/kurashi/kourei_kaigo/1001096/1049637.html'],
    sourceNote: '和歌山市公式ページで65歳以上、市町村民税非課税世帯、補聴器購入費2万円または実支出額の低い額、交付決定前購入は対象外を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'katsuragi-elderly-hearing-aid-2026',
    title: 'かつらぎ町 高齢者補聴器購入費助成',
    organization: 'かつらぎ町',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '和歌山県',
    tags: ['かつらぎ町', '高齢者', '補聴器', '介護予防', '令和8年度'],
    eligibility: 'かつらぎ町内に住所を有し居住する65歳以上で、町税等の滞納がなく、医師に補聴器が必要と認められた方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月27日から受付開始。購入前に申請',
    description: 'かつらぎ町が、聴力機能の低下により日常生活に支障がある高齢者の補聴器購入を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>かつらぎ町高齢者補聴器購入費助成は、閉じこもりや認知機能低下を防ぎ、高齢者の社会参加を支援するための制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、管理医療機器としての補聴器本体の購入費用について、片耳型・両耳型を問わず上限3万円を助成すると案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>補聴器を購入する前に申請が必要です。申請前に購入した補聴器や集音器は対象外です。</p>' }
    ],
    officialUrl: 'https://www.town.katsuragi.wakayama.jp/030/090/2026-0331-1113-26.html',
    sourceName: 'かつらぎ町 高齢者補聴器購入費助成について',
    sourceUrls: ['https://www.town.katsuragi.wakayama.jp/030/090/2026-0331-1113-26.html'],
    sourceNote: 'かつらぎ町公式ページで令和8年4月27日受付開始、65歳以上、補聴器本体購入費上限3万円、購入前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'hashimoto-elderly-hearing-aid-2026',
    title: '橋本市 高齢者難聴補聴器購入費助成事業',
    organization: '橋本市',
    type: 'local',
    maxAmount: '最大2万円',
    maxAmountNum: 2,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '和歌山県',
    tags: ['橋本市', '高齢者', '補聴器', '難聴', '令和8年度'],
    eligibility: '橋本市内に居住し住民登録がある65歳以上で、市民税非課税世帯、両耳40デシベル以上、医師に補聴器が必要と認められた方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。購入前に申請',
    description: '橋本市が、加齢等に伴う聴力低下によりコミュニケーションが困難な高齢者へ、補聴器購入費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>橋本市高齢者難聴補聴器購入費助成事業は、高齢者の聞こえを支え、日常生活や社会参加を続けやすくするための制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、医師から補聴器が必要と認められた耳に装用する補聴器の購入費について、片耳・両耳の購入を問わず合計で最大2万円を助成すると案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>補聴器購入前の申請が必要で、購入後の申請は対象外です。医師意見書、見積書、型番確認書類などは発行日から3か月以内のものが必要です。</p>' }
    ],
    officialUrl: 'https://www.city.hashimoto.lg.jp/guide/kenko_fukushibu/ikiiki_kenko/koureihukusi/seikatusien/22011.html',
    sourceName: '橋本市 高齢者難聴補聴器購入費助成事業',
    sourceUrls: ['https://www.city.hashimoto.lg.jp/guide/kenko_fukushibu/ikiiki_kenko/koureihukusi/seikatusien/22011.html'],
    sourceNote: '橋本市公式ページで2026年3月23日更新、65歳以上、市民税非課税世帯、両耳40dB以上、補聴器購入費最大2万円、購入前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yoshinogawa-elderly-hearing-aid-2026',
    title: '吉野川市 高齢者補聴器購入費助成',
    organization: '吉野川市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '徳島県',
    tags: ['吉野川市', '高齢者', '補聴器', '難聴', '令和8年度'],
    eligibility: '吉野川市内在住の65歳以上で、聴覚障害者手帳を持たず、原則両耳平均40デシベル以上70デシベル未満の中等度難聴者で、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年4月から開始。購入前に申請',
    description: '吉野川市が、令和8年4月から高齢者の補聴器本体購入費用を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>吉野川市高齢者補聴器購入費助成は、加齢による聴力低下に悩む高齢者の生活支援と社会参加を後押しする制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補聴器本体の購入について上限3万円を助成すると案内されています。3万円を超える金額は自己負担で、集音器は対象外です。</p>' },
      { heading: '申請の注意点', content: '<p>申請には医師の証明がある申請書と販売店作成の見積書が必要です。医師の証明は申請日前3か月以内のものが必要です。</p>' }
    ],
    officialUrl: 'https://www.city.yoshinogawa.lg.jp/docs/2026040100027/',
    sourceName: '吉野川市 高齢者の補聴器購入費用の助成について',
    sourceUrls: ['https://www.city.yoshinogawa.lg.jp/docs/2026040100027/'],
    sourceNote: '吉野川市公式ページで令和8年4月開始、65歳以上、原則両耳平均40dB以上70dB未満、補聴器本体購入上限3万円、集音器対象外を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'fukui-city-block-wall-removal-2026',
    title: '福井市 危険ブロック塀の除却工事に対する補助制度',
    organization: '福井市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '福井県',
    tags: ['福井市', 'ブロック塀', '除却', '木塀', '令和8年度'],
    eligibility: '福井市内で避難路に面する安全性の低い危険ブロック塀を所有し、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。工事着手前に申請',
    description: '福井市が、地震時のブロック塀倒壊被害を防ぐため、危険ブロック塀の除却や木塀への建替えを支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福井市の危険ブロック塀除却補助は、避難路沿いの危険なブロック塀等を減らし、災害時の通行人被害や避難路閉塞を防ぐための制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、除却工事は対象塀の見付面積に4,000円を乗じた額または工事費の3分の2の低い額で、上限10万円と案内されています。木塀への建替えも上限10万円です。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象となる塀、避難路、工事内容に条件があります。補助金交付決定前に契約・着工した工事は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.fukui.lg.jp/kurasi/jutaku/kentikubutu/p021909.html',
    sourceName: '福井市 危険ブロック塀の除却工事に対する補助制度',
    sourceUrls: ['https://www.city.fukui.lg.jp/kurasi/jutaku/kentikubutu/p021909.html'],
    sourceNote: '福井市公式ページで危険ブロック塀除却工事、除却は見付面積×4,000円または工事費2/3の低い額・上限10万円、木塀建替え上限10万円、工事着手前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'takahama-block-wall-removal-2026',
    title: '高浜町 危険ブロック塀等除却支援事業',
    organization: '高浜町',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '福井県',
    tags: ['高浜町', 'ブロック塀', '除却', '県産材', '令和8年度'],
    eligibility: '高浜町内で道路等に面する安全性が確認できないブロック塀等を撤去し、町内業者で施工するなど、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。工事着手前に申請',
    description: '高浜町が、危険ブロック塀等の撤去と県産材による塀への建替えを支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高浜町危険ブロック塀等除却支援事業は、地震時に倒壊のおそれがあるブロック塀等を撤去し、道路利用者の安全を確保するための制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、撤去は補助対象見付面積に6,000円を乗じた額、見積金額の3分の2、上限20万円のうち低い額とされています。県産材で塀を建替える場合は上限40万円が加算されます。</p>' },
      { heading: '申請の注意点', content: '<p>対象は安全性が確認できないブロック塀等で、町内業者による撤去が必要です。門柱・門扉だけの撤去は対象外です。</p>' }
    ],
    officialUrl: 'https://www.town.takahama.fukui.jp/page/kensetuseibi/p003667.html',
    sourceName: '高浜町 危険ブロック塀等除却支援事業について',
    sourceUrls: ['https://www.town.takahama.fukui.jp/page/kensetuseibi/p003667.html'],
    sourceNote: '高浜町公式ページで撤去補助は見付面積×6,000円、見積額2/3、上限20万円の低い額、県産材建替え上限40万円加算を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yazu-block-wall-removal-2026',
    title: '八頭町 ブロック塀除去・改修補助',
    organization: '八頭町',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '鳥取県',
    tags: ['八頭町', 'ブロック塀', '除去', '改修', '令和8年度'],
    eligibility: '八頭町内で不特定の者が通行する道路に面する高さ60センチメートル超の危険ブロック塀等を除去・改修する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。同一年度内に事業完了が必要',
    description: '八頭町が、危険ブロック塀等の除去や改修を支援し、地震時の通行安全を確保する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>八頭町ブロック塀除去・改修補助は、道路沿いの危険なブロック塀等を除去・改修し、災害時の被害を防ぐための制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、ブロック塀除去の補助率は3分の2で、ブロック塀のみは上限30万円、ブロック塀と基礎を除去する場合は上限60万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>申請・交付決定と同一年度内に事業を完了する必要があります。安全対策が必要と判断された対象部分が補助対象です。</p>' }
    ],
    officialUrl: 'https://www.town.yazu.tottori.jp/soshiki/6/1146.html',
    sourceName: '八頭町 ブロック塀除去・改修の補助',
    sourceUrls: ['https://www.town.yazu.tottori.jp/soshiki/6/1146.html'],
    sourceNote: '八頭町公式ページで令和8年度版、除去補助率3分の2、ブロック塀上限30万円、ブロック塀と基礎上限60万円、同一年度内完了を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yurihama-block-wall-removal-2026',
    title: '湯梨浜町 ブロック塀の撤去・改修支援',
    organization: '湯梨浜町',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '鳥取県',
    tags: ['湯梨浜町', 'ブロック塀', '撤去', '改修', '令和8年度'],
    eligibility: '湯梨浜町内で道路等に面する危険なブロック塀等の撤去・改修を行い、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。工事着手前に申請',
    description: '湯梨浜町が、道路沿いの危険ブロック塀等の撤去・改修費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>湯梨浜町のブロック塀撤去・改修支援は、地震などで倒壊するおそれがある塀を減らし、通行人や避難路の安全を守るための制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象事業費の3分の2を補助し、補助金上限は30万円と案内されています。補助対象事業費は撤去工事費などの低い額で算定します。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象や工事内容、申請時期には条件があります。工事に着手する前に町へ相談し、交付決定後に工事を進めてください。</p>' }
    ],
    officialUrl: 'https://www.yurihama.jp/soshiki/13/13535.html',
    sourceName: '湯梨浜町 ブロック塀の撤去・改修を支援します',
    sourceUrls: ['https://www.yurihama.jp/soshiki/13/13535.html'],
    sourceNote: '湯梨浜町公式ページでブロック塀撤去・改修支援、補助対象事業費の3分の2、上限30万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'okayama-city-block-wall-removal-2026',
    title: '岡山市 ブロック塀等の撤去補助制度',
    organization: '岡山市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '岡山県',
    tags: ['岡山市', 'ブロック塀', '撤去', '避難道路', '令和8年度'],
    eligibility: '岡山市内にあり、避難道路に面し、高さや危険性など公式要件を満たすブロック塀等を撤去する所有者等が対象です。',
    applicationPeriod: '令和8年度制度として案内中。事前相談後、工事着手前に申請',
    description: '岡山市が、地震時に倒壊のおそれがあるブロック塀等の撤去工事費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岡山市ブロック塀等撤去補助制度は、地震時のブロック塀等倒壊による被害や通行障害を防ぎ、災害に強いまちづくりを進める制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、撤去工事費と、対象となるブロック塀等の長さに1メートルあたり9,000円を乗じた額のいずれか少ない金額の3分の2を補助し、上限額は15万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>申請前に岡山市建築指導課へ事前相談が必要です。現況写真などで補助対象か確認し、交付決定後に工事を進めてください。</p>' }
    ],
    officialUrl: 'https://www.city.okayama.jp/jigyosha/0000005983.html',
    sourceName: '岡山市 ブロック塀等の撤去補助制度について',
    sourceUrls: ['https://www.city.okayama.jp/jigyosha/0000005983.html'],
    sourceNote: '岡山市公式ページで撤去工事費または長さ1mあたり9,000円の低い額の3分の2、上限15万円、事前相談を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kurashiki-block-wall-removal-2026',
    title: '倉敷市 危険ブロック塀等安全対策補助事業',
    organization: '倉敷市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '岡山県',
    tags: ['倉敷市', 'ブロック塀', '撤去', '安全対策', '令和8年度'],
    eligibility: '倉敷市内で対象道路に面する危険ブロック塀等を撤去し、公式要件を満たす所有者等が対象です。',
    applicationPeriod: '令和8年度制度として案内中。工事着手前に申請',
    description: '倉敷市が、対象道路に面する危険ブロック塀等の撤去費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>倉敷市危険ブロック塀等安全対策補助事業は、地震発生時のブロック塀等倒壊による被害を未然に防ぐための制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、見積額と基準額のいずれか少ない額の3分の2を補助し、補助上限額は15万円とされています。基準額は1メートルあたり9,000円です。</p>' },
      { heading: '申請の注意点', content: '<p>対象道路、高さ、点検結果などの条件があります。補助申請と交付決定の前に工事を始めないよう確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kurashiki.okayama.jp/kurashi/sumai/1014765/1014785/1014788.html',
    sourceName: '倉敷市 危険ブロック塀等安全対策補助事業',
    sourceUrls: ['https://www.city.kurashiki.okayama.jp/kurashi/sumai/1014765/1014785/1014788.html'],
    sourceNote: '倉敷市公式ページで2026年5月28日更新、見積額と基準額9,000円/mの低い額の3分の2、上限15万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yamaguchi-city-block-wall-removal-2026',
    title: '山口市 危険ブロック塀等の除却費用補助',
    organization: '山口市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '山口県',
    tags: ['山口市', 'ブロック塀', '除却', '避難路', '令和8年度'],
    eligibility: '山口市内で避難路に面し、高さ80センチメートルを超え、倒壊の危険性があるブロック塀等を除却する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年6月10日から2026年10月31日まで。事前相談後、工事着手前に申請',
    deadlineDate: '2026-10-31',
    description: '山口市が、避難路沿いの危険ブロック塀等の除却費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>山口市危険ブロック塀等除却費用補助は、避難路沿道にある倒壊のおそれのある塀を除却し、災害時の安全を確保する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、危険ブロック塀等の除却費用の3分の2以内を補助し、上限額は10万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>申請前に補助要件等の確認が必要です。避難路沿道のブロック塀等をすべて除却すること、工事着手前に申請することが案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.yamaguchi.lg.jp/soshiki/74/63785.html',
    sourceName: '山口市 危険ブロック塀等の除却費用の補助について',
    sourceUrls: ['https://www.city.yamaguchi.lg.jp/soshiki/74/63785.html'],
    sourceNote: '山口市公式ページで令和8年度受付2026年6月10日から10月31日、除却費用の3分の2以内、上限10万円、工事着手前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'ube-block-wall-removal-2026',
    title: '宇部市 ブロック塀等の撤去費補助',
    organization: '宇部市',
    type: 'local',
    maxAmount: '最大10万円',
    maxAmountNum: 10,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '山口県',
    tags: ['宇部市', 'ブロック塀', '撤去', '安全対策', '令和8年度'],
    eligibility: '宇部市内で道路等に面する高さ0.8メートルを超える倒壊危険性の高いブロック塀等を所有し、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。予算の範囲内、工事着手前に申請',
    description: '宇部市が、倒壊の危険性の高いブロック塀等の撤去費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宇部市ブロック塀等撤去費補助は、地震時のブロック塀等倒壊被害を未然に防ぐため、道路等に面する危険な塀の撤去を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、倒壊危険性の高いブロック塀等撤去費について、撤去に要する費用の3分の2または撤去延長に2万円/mを乗じた額のいずれか少ない額を補助し、限度額は10万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>道路等に面する高さ0.8メートル超の塀が対象です。予算の範囲内での補助のため、工事前に最新受付状況を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/hojyojyosei_kojin/1009207.html',
    sourceName: '宇部市 ブロック塀等の撤去費補助',
    sourceUrls: ['https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/hojyojyosei_kojin/1009207.html'],
    sourceNote: '宇部市公式ページで2026年4月6日更新、撤去費用3分の2または延長2万円/mの低い額、限度額10万円、道路等に面する高さ0.8m超を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'matsue-elderly-hearing-aid-2026',
    title: '松江市 高齢者補聴器購入費助成事業',
    organization: '松江市',
    type: 'local',
    maxAmount: '2.5万円',
    maxAmountNum: 2.5,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '島根県',
    tags: ['松江市', '高齢者', '補聴器', '難聴', '令和8年度'],
    eligibility: '松江市内に住所を有する65歳以上で、身体障害者手帳の対象とならない軽度・中等度難聴者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年4月1日から受付開始。購入前に申請',
    description: '松江市が、軽度・中等度難聴の高齢者に対し、補聴器購入費用の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>松江市高齢者補聴器購入費助成事業は、聴覚の身体障がい者手帳の対象とならない高齢者の聞こえを支え、社会参加の促進につなげる制度です。</p>' },
      { heading: '助成内容', content: '<p>公式要綱では、助成金の交付額は1件につき25,000円とされています。購入額が50,000円未満の補聴器や、認定補聴器専門店以外で購入する補聴器は対象外です。</p>' },
      { heading: '申請の注意点', content: '<p>交付決定前に購入した補聴器は対象外です。専門医の意見書を添えて申請し、決定通知後に購入します。</p>' }
    ],
    officialUrl: 'https://www.city.matsue.lg.jp/soshikikarasagasu/kenkofukushibu_kaigohokenka/koreishafukushi_kaigo/2/22130.html',
    sourceName: '松江市 加齢性難聴に伴う耳の聞こえ・高齢者補聴器購入費助成について',
    sourceUrls: ['https://www.city.matsue.lg.jp/soshikikarasagasu/kenkofukushibu_kaigohokenka/koreishafukushi_kaigo/2/22130.html', 'https://www.city.matsue.lg.jp/material/files/group/46/hochoukiyoukou.pdf'],
    sourceNote: '松江市公式ページで令和8年4月1日受付開始を確認。公式要綱で助成額25,000円、購入額50,000円未満対象外、交付決定前購入対象外を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'okayama-city-elderly-hearing-aid-2026',
    title: '岡山市 難聴高齢者補聴器購入費助成事業',
    organization: '岡山市',
    type: 'local',
    maxAmount: '最大2.5万円',
    maxAmountNum: 2.5,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '岡山県',
    tags: ['岡山市', '高齢者', '補聴器', '中等度難聴', '令和8年度'],
    eligibility: '岡山市に住民登録がある65歳以上で、市民税非課税世帯、身体障害者手帳の交付対象外、原則両耳40dB以上など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。購入前に申請',
    description: '岡山市が、65歳以上の中等度難聴者の補聴器購入費を助成し、フレイル予防や社会参加を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岡山市難聴高齢者補聴器購入費助成事業は、聞こえづらさから日常生活に不安を感じる高齢者の適切な補聴器装用を支援する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補聴器1台の本体及び付属品の購入費について、補聴器購入費の2分の1以内、上限25,000円を助成すると案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>必ず補聴器を購入する前に申請が必要です。付属品単体、修理、部品交換、調整費用は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.okayama.jp/kurashi/0000061124.html',
    sourceName: '岡山市 難聴高齢者補聴器購入費助成事業',
    sourceUrls: ['https://www.city.okayama.jp/kurashi/0000061124.html'],
    sourceNote: '岡山市公式ページで2026年2月17日更新、65歳以上、市民税非課税世帯、原則両耳40dB以上、購入費2分の1以内・上限25,000円、購入前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yurihama-elderly-hearing-aid-2026',
    title: '湯梨浜町 高齢者補聴器購入費助成事業',
    organization: '湯梨浜町',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '鳥取県',
    tags: ['湯梨浜町', '高齢者', '補聴器', '社会参加', '令和8年度'],
    eligibility: '湯梨浜町に住所を有する満65歳以上で、身体障害者手帳を持たず、聴力レベルや医師判断など公式要件を満たす方が対象です。',
    applicationPeriod: '通年案内中。交付決定前の購入は対象外',
    description: '湯梨浜町が、高齢者の補聴器本体購入費の一部を助成し、社会参加と地域交流を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>湯梨浜町高齢者補聴器購入費助成事業は、補聴器の購入費を助成し、認知機能低下や閉じこもりの予防、地域交流の促進を図る制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補聴器本体の購入費の2分の1、上限3万円を助成すると案内されています。片耳・両耳を問わず上限は3万円です。</p>' },
      { heading: '申請の注意点', content: '<p>助成対象は補聴器本体のみで、付属品や集音器、修理・メンテナンス費用は対象外です。交付決定前に購入した補聴器は対象外です。</p>' }
    ],
    officialUrl: 'https://www.yurihama.jp/soshiki/12/15242.html',
    sourceName: '湯梨浜町 高齢者補聴器購入費助成事業のご案内',
    sourceUrls: ['https://www.yurihama.jp/soshiki/12/15242.html', 'https://www.yurihama.jp/reiki/reiki_honbun/r048RG00001254.html'],
    sourceNote: '湯梨浜町公式ページで補聴器本体購入費2分の1、上限3万円、交付決定前購入対象外を確認。実施要綱でも購入費2分の1・3万円限度を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'daisen-elderly-hearing-aid-2026',
    title: '大山町 高齢者補聴器購入費助成事業',
    organization: '大山町',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '鳥取県',
    tags: ['大山町', '高齢者', '補聴器', '中程度難聴', '令和8年度'],
    eligibility: '大山町内に住む満65歳以上で、中程度難聴により補聴器が必要と医師に判断され、認定補聴器専門店で購入する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2027年2月末頃までに申請。予算の範囲内',
    description: '大山町が、65歳以上の中程度難聴者に対し、補聴器購入費用の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大山町高齢者補聴器購入費助成事業は、聞こえが気になる高齢者の外出や会話を支え、生活の質の向上につなげる制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補聴器購入費用の2分の1、上限3万円を助成すると案内されています。実施要綱でも購入費の2分の1、30,000円限度とされています。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の申請は2027年2月末頃までと案内されています。予算に限りがあるため、事前に相談してください。</p>' }
    ],
    officialUrl: 'https://www.daisen.jp/10/36/c523/g158/',
    sourceName: '大山町 高齢者補聴器購入費助成事業',
    sourceUrls: ['https://www.daisen.jp/10/36/c523/g158/', 'https://www.daisen.jp/reiki/reiki_honbun/r148RG00001163.html'],
    sourceNote: '大山町公式ページで2026年4月22日更新、補聴器購入費用2分の1・上限3万円、令和8年度申請は2027年2月末頃まで、実施要綱で30,000円限度を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'takamatsu-scholarship-repayment-2026',
    title: '高松市 奨学金返還支援制度',
    organization: '高松市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '香川県',
    tags: ['高松市', '奨学金返還', 'UIJターン', '若者定着', '令和8年度'],
    eligibility: '香川県外の大学等を卒業する県内出身者、または香川県内の大学等を卒業する県外出身者で、市内居住や県内就職、年齢など公式要件を満たす方が対象です。',
    applicationPeriod: '令和7年4月から事前申込受付開始予定。補助期間は令和8年度から令和12年度まで',
    description: '高松市が、若者の市内定着と県内就職を促すため、対象者の奨学金返還額の一部を最長5年間支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高松市奨学金返還支援制度は、大学等を卒業後に香川県内の中小企業者、社会福祉法人、医療法人、学校法人などへ正規雇用で就職し、高松市に居住する若者を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式案内では、年間12万円を上限に、5年間で最大60万円を支援するとされています。対象奨学金は日本学生支援機構の第一種・第二種奨学金です。</p>' },
      { heading: '申請の注意点', content: '<p>香川県が実施する奨学金返還支援制度など、他の奨学金返還支援制度との併用はできないと案内されています。事前申込や就職・居住要件を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.takamatsu.kagawa.jp/link/hatachinotobirapdf.files/02Uturn.pdf',
    sourceName: '高松市 高松市奨学金返還支援',
    sourceUrls: ['https://www.city.takamatsu.kagawa.jp/link/hatachinotobirapdf.files/02Uturn.pdf'],
    sourceNote: '高松市公式PDFで、令和7年4月から事前申込受付開始予定、補助期間令和8年度から令和12年度、年間12万円・最大60万円、日本学生支援機構第一種・第二種奨学金対象を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'nankoku-scholarship-repayment-2026',
    title: '南国市 奨学金返還支援補助金',
    organization: '南国市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '高知県',
    tags: ['南国市', '奨学金返還', '若者定着', '30歳未満', '令和8年度'],
    eligibility: '奨学金の貸与を受けて大学等を修学し、現に就労する30歳未満の方で、南国市への居住や滞納がないことなど公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として掲載。予算の範囲内',
    description: '南国市が、市内への若者定着を目的に、大学等の修学に利用した奨学金等の返還費用を支援する補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>南国市奨学金返還支援補助金は、奨学金の貸与を受けて大学等を修学し、就労している若者の返還負担を軽くする制度です。</p>' },
      { heading: '補助内容', content: '<p>公式要綱では、1年度あたり前年度中に返還した奨学金等の額と12万円のいずれか低い額を、予算の範囲内で交付するとされています。通算5箇年度まで申請できるため、最大60万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>他の奨学金返還支援制度の適用を受けていないこと、奨学金等の返還を延滞していないこと、市税等を滞納していないことなどが要件です。</p>' }
    ],
    officialUrl: 'https://www.city.nankoku.lg.jp/life/life_dtl.php?hdnKey=7874',
    sourceName: '南国市 令和8年度南国市奨学金返還支援補助金について',
    sourceUrls: [
      'https://www.city.nankoku.lg.jp/life/life_dtl.php?hdnKey=7874',
      'https://www.city.nankoku.lg.jp/reiki/reiki_honbun/i900RG00001167.html'
    ],
    sourceNote: '南国市公式ページで2026年3月20日掲載、30歳未満の就労者向け制度を確認。公式要綱で1年度12万円以内、通算5箇年度まで、他制度併用不可等を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shimanto-scholarship-repayment-2026',
    title: '四万十市 奨学金返還支援補助金',
    organization: '四万十市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '高知県',
    tags: ['四万十市', '奨学金返還', '移住定住', '35歳未満', '令和7年度以降転入'],
    eligibility: '令和7年4月1日以降に四万十市へ転入し、移住支援登録をしている35歳未満の方で、就労、5年以上居住意思、奨学金返還状況など公式要件を満たす方が対象です。',
    applicationPeriod: '公式ページで案内中。申請年度ごとに確認',
    description: '四万十市が、移住定住を促進するため、奨学金等を返還している若者に対して返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>四万十市奨学金返還支援補助金は、大学等に就学する際に奨学金の貸与を受け、現在就労している移住者の返還負担を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、返還予定額の月額または1万円のいずれか低い額に返還月数を乗じた額を補助し、1年度あたり12万円以内、最長通算60か月と案内されています。最大60万円相当の支援です。</p>' },
      { heading: '申請の注意点', content: '<p>ほかの奨学金返還支援制度を受けている方は対象外です。移住支援登録、転入時期、年齢、滞納の有無などの要件を事前に確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.shimanto.lg.jp/site/iju-teiju-subsite/20570.html',
    sourceName: '四万十市 奨学金返還支援補助金について',
    sourceUrls: [
      'https://www.city.shimanto.lg.jp/site/iju-teiju-subsite/20570.html',
      'https://www.city.shimanto.lg.jp/site/iju-teiju-subsite/3021.html'
    ],
    sourceNote: '四万十市公式ページで2025年5月14日更新、35歳未満、令和7年4月1日以降転入、1年度12万円以内、最長通算60か月、他制度併用不可を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'fukuoka-city-sme-scholarship-repayment-2026',
    title: '福岡市 中小企業奨学金返還支援事業',
    organization: '福岡市',
    type: 'local',
    maxAmount: '1企業あたり年最大50万円',
    maxAmountNum: 50,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '福岡県',
    tags: ['福岡市', '中小企業', '奨学金返還', '人材確保', '令和7年度'],
    eligibility: '福岡市内に本店および本社があり、就業規則等で奨学金返還支援制度を設けて実施している中小企業等が対象です。支援対象従業員は市内勤務の正社員で、奨学金を返還中または返還予定の方です。',
    applicationPeriod: '令和7年7月1日から令和7年12月15日まで。予算上限到達時は受付終了',
    deadlineDate: '2025-12-15',
    description: '福岡市が、従業員への奨学金返還支援を行う市内中小企業等に対し、企業負担額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>福岡市中小企業奨学金返還支援事業は、企業の人材確保と定着、市内で働く若者の経済的負担軽減を目的に実施される補助制度です。</p>' },
      { heading: '補助内容', content: '<p>公式発表資料では、補助率は原則として企業負担額の2分の1、上限額は1年度あたり1企業50万円までと案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>福岡市内に本店および本社があること、就業規則等で奨学金返還支援制度を設け実施していることなどの要件があります。予算上限に達した場合は期間内でも受付終了となります。</p>' }
    ],
    officialUrl: 'https://www.city.fukuoka.lg.jp/shisei/kouhou-hodo/hodo-happyo/2025/documents/r7shougakukinnhenkanhojyokin.pdf',
    sourceName: '福岡市 中小企業奨学金返還支援事業 申請受付開始資料',
    sourceUrls: ['https://www.city.fukuoka.lg.jp/shisei/kouhou-hodo/hodo-happyo/2025/documents/r7shougakukinnhenkanhojyokin.pdf'],
    sourceNote: '福岡市公式発表PDFで、令和7年7月1日受付開始、申請受付期間令和7年12月15日まで、補助率原則2分の1、1年度あたり1企業50万円まで、市内中小企業等対象を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kitakyushu-company-scholarship-repayment-2026',
    title: '北九州市 企業型奨学金返還支援補助金',
    organization: '北九州市',
    type: 'local',
    maxAmount: '1事業者あたり年最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '福岡県',
    tags: ['北九州市', '中小企業', '奨学金返還', '正社員', '令和8年度'],
    eligibility: '北九州市内に本社または採用権限のある事業所を有し、令和7年4月1日以降に奨学金返還支援制度を設けた中小企業等が対象です。支援対象従業員は採用から3年以内の正社員など公式要件を満たす方です。',
    applicationPeriod: '各年度4月1日から翌年1月31日まで。令和7年度から令和9年度予定',
    deadlineDate: '2027-01-31',
    description: '北九州市が、市内中小企業等の人材確保と定着を支援するため、従業員への奨学金返還支援に要する経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>北九州市企業型奨学金返還支援補助金は、奨学金返還支援制度を導入した市内中小企業等に対し、従業員へ支給または代理返還した額の一部を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象者が年度末までに支援対象者へ支給または代理返還した額の3分の2以内、補助対象者につき年間上限60万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>支援対象従業員は採用から3年以内の正社員で、勤務先事業所が市内にあること、他団体から重複支援を受けていないことなどが必要です。</p>' }
    ],
    officialUrl: 'https://www.city.kitakyushu.lg.jp/contents/09801348_00002.html',
    sourceName: '北九州市 企業型奨学金返還支援補助金',
    sourceUrls: ['https://www.city.kitakyushu.lg.jp/contents/09801348_00002.html'],
    sourceNote: '北九州市公式ページで2026年3月27日更新、令和8年度より補助率引き上げ、補助率3分の2以内、補助対象者につき年間上限60万円、各年度4月1日から翌年1月31日までを確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kagoshima-city-scholarship-proxy-repayment-2026',
    title: '鹿児島市 奨学金代理返還支援制度導入促進補助金',
    organization: '鹿児島市',
    type: 'local',
    maxAmount: '20万円',
    maxAmountNum: 20,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '鹿児島県',
    tags: ['鹿児島市', '中小企業', '奨学金代理返還', '人材確保', '令和7年度'],
    eligibility: '鹿児島市内に本店または事業所を有する中小企業事業主で、令和7年4月1日以降に日本学生支援機構の奨学金代理返還支援制度を新たに導入するなど公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和7年6月2日から令和8年2月20日まで。予算額到達時は受付終了',
    deadlineDate: '2026-02-20',
    description: '鹿児島市が、奨学金代理返還支援制度を新たに導入した市内中小企業等に対して、導入促進のための補助金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鹿児島市奨学金代理返還支援制度導入促進補助金は、従業員等に代わって事業主が日本学生支援機構へ奨学金を返還する制度の導入を後押しする補助金です。</p>' },
      { heading: '補助内容', content: '<p>公式申請要領では、奨学金代理返還支援制度を新たに導入した事業者に20万円の補助金を支給するとされています。</p>' },
      { heading: '申請の注意点', content: '<p>令和7年4月1日以降に制度を導入していること、日本学生支援機構に代理返還支援制度の申込を行っていること、市ホームページ等で事業者名等の公表に同意することなどが要件です。</p>' }
    ],
    officialUrl: 'https://www.city.kagoshima.lg.jp/koyosuishin/syogakukindairihenkanr07.html',
    sourceName: '鹿児島市 奨学金代理返還支援制度導入促進補助金',
    sourceUrls: [
      'https://www.city.kagoshima.lg.jp/koyosuishin/syogakukindairihenkanr07.html',
      'https://www.city.kagoshima.lg.jp/koyosuishin/documents/05sdhshinseiyoryo.pdf'
    ],
    sourceNote: '鹿児島市公式ページで申請受付期間令和7年6月2日から令和8年2月20日までを確認。公式申請要領で制度を新たに導入した事業者へ20万円支給、令和7年4月1日以降導入等の要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kumamoto-city-elderly-hearing-aid-2026',
    title: '熊本市 難聴高齢者補聴器購入費助成',
    organization: '熊本市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '熊本県',
    tags: ['熊本市', '高齢者', '補聴器', '軽度中等度難聴', '令和8年度'],
    eligibility: '熊本市に居住する65歳以上で、身体障害者手帳の交付対象とならない軽度・中等度の聴覚障がいがあり、市民税非課税世帯または生活保護受給中など公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。購入前に申請',
    description: '熊本市が、聞こえづらさから日常生活に不安を感じる高齢者に対し、補聴器購入費用の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>熊本市難聴高齢者補聴器購入費助成は、適切な補聴器装用を通じてコミュニケーション能力の維持、フレイル予防、社会参加を促進する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式実施要綱では、助成金の交付額は3万円を上限とし、購入額が3万円未満の場合は購入額を上限とするとされています。</p>' },
      { heading: '申請の注意点', content: '<p>申請日前3か月以内に作成された医師の意見書、登録補聴器販売事業者の見積書などが必要です。既に助成を受けている場合は、助成決定日から5年を経過していることも要件です。</p>' }
    ],
    officialUrl: 'https://www.city.kumamoto.jp/kiji00370685/index.html',
    sourceName: '熊本市 難聴高齢者補聴器購入費助成',
    sourceUrls: [
      'https://www.city.kumamoto.jp/kiji00370685/index.html',
      'https://www.city.kumamoto.jp/kiji00370685/3_70685_up_bo322ey8.pdf'
    ],
    sourceNote: '熊本市公式ページと令和8年4月24日制定の実施要綱PDFで、65歳以上、身体障害者手帳対象外の軽度・中等度難聴、市民税非課税世帯等、助成上限3万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'miyazaki-city-elderly-hearing-aid-2026',
    title: '宮崎市 加齢性難聴高齢者補聴器購入費助成',
    organization: '宮崎市',
    type: 'local',
    maxAmount: '最大3万円',
    maxAmountNum: 3,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '宮崎県',
    tags: ['宮崎市', '高齢者', '補聴器', '加齢性難聴', '令和8年度'],
    eligibility: '宮崎市内に住所を有し在宅で生活する65歳以上で、市税滞納がなく、身体障がい者手帳の交付を受けていない方のうち、両耳40dB以上70dB未満など公式要件を満たす方が対象です。',
    applicationPeriod: '2026年4月1日更新の公式ページで案内中。購入前に申請',
    description: '宮崎市が、加齢性難聴の高齢者に対し、補聴器購入費用の一部を助成し、認知症予防やフレイル予防につなげる制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宮崎市の高齢者加齢性難聴啓発推進事業の一環として、加齢性難聴者に対する補聴器購入費助成が実施されています。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補聴器の購入に必要な費用を助成し、助成額は最大3万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>助成決定通知書を受領した後に、見積を取った店舗で補聴器を購入する流れです。集音器、助聴器、インターネット購入は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.miyazaki.miyazaki.jp/business/welfare/long_term_care_insurance/399413.html',
    sourceName: '宮崎市 宮崎市は耳の健康を応援します',
    sourceUrls: ['https://www.city.miyazaki.miyazaki.jp/business/welfare/long_term_care_insurance/399413.html'],
    sourceNote: '宮崎市公式ページで2026年4月1日更新、65歳以上、在宅、市税滞納なし、身体障がい者手帳なし、両耳40dB以上70dB未満等、助成額最大3万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'naha-elderly-hearing-aid-2026',
    title: '那覇市 加齢性難聴者に対する補聴器購入費助成',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大2.5万円',
    maxAmountNum: 2.5,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '沖縄県',
    tags: ['那覇市', '高齢者', '補聴器', '住民税非課税世帯', '令和8年度'],
    eligibility: '那覇市に住所を有し現に居住する65歳以上で、住民税非課税世帯、補装具支給制度による補聴器交付が受けられないこと、医師により補聴器使用が必要と判断されることなど公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。申込み後に購入する予定がある方が対象',
    description: '那覇市が、加齢性難聴の高齢者に対し、補聴器本体の購入費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>那覇市の加齢性難聴者に対する補聴器購入費助成は、65歳以上の市民の聞こえを支え、日常生活の不便を軽減する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補聴器本体の購入費として一人2万5千円を上限に助成すると案内されています。取得価格が限度額より低い場合は、その取得価格が助成額です。</p>' },
      { heading: '申請の注意点', content: '<p>申込み後に補聴器を購入する予定があることが要件です。過去に本事業の助成を受けた方は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/fukusi/koureisyafukusi/1003057/1003062/1003063.html',
    sourceName: '那覇市 令和8年度 加齢性難聴者に対する補聴器購入費の助成',
    sourceUrls: [
      'https://www.city.naha.okinawa.jp/fukusi/koureisyafukusi/1003057/1003062/1003063.html',
      'https://www.info.city.naha.okinawa.jp/kurashi/y001083.html'
    ],
    sourceNote: '那覇市公式ページで令和8年度制度、65歳以上、住民税非課税世帯、補装具支給制度対象外、補聴器本体購入費上限25,000円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'masuda-elderly-hearing-aid-2026',
    title: '益田市 高齢者補聴器購入費助成事業',
    organization: '益田市',
    type: 'local',
    maxAmount: '2.5万円',
    maxAmountNum: 2.5,
    category: 'nursing',
    relatedCategories: ['medical', 'living'],
    prefecture: '島根県',
    tags: ['益田市', '高齢者', '補聴器', '非課税', '令和8年度'],
    eligibility: '益田市内に住所を有する65歳以上で、聴覚障害による身体障害者手帳を所持しておらず、両耳聴力レベル平均40dB以上70dB未満、市町村民税非課税など公式要件を満たす方が対象です。',
    applicationPeriod: '2025年4月1日更新の公式ページで案内中。交付決定前購入は対象外',
    description: '益田市が、聴力機能の低下で日常生活に不便が生じている高齢者に対し、補聴器本体購入費を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>益田市高齢者補聴器購入費助成事業は、高齢者が円滑なコミュニケーションを維持できるよう、補聴器購入費の一部を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、補聴器本体（イヤーモールドを含む）の購入費用として25,000円を助成すると案内されています。1人1台1回限りです。</p>' },
      { heading: '申請の注意点', content: '<p>購入費用は25,000円以上のものが対象で、修理費等や交付決定前に購入したものは対象外です。</p>' }
    ],
    officialUrl: 'https://www.city.masuda.lg.jp/soshikikarasagasu/fukushikankyobu/koreishafukushika/1/6616.html',
    sourceName: '益田市 高齢者補聴器購入費助成事業について',
    sourceUrls: ['https://www.city.masuda.lg.jp/soshikikarasagasu/fukushikankyobu/koreishafukushika/1/6616.html'],
    sourceNote: '益田市公式ページで2025年4月1日更新、65歳以上、身体障害者手帳なし、両耳聴力40dB以上70dB未満、市町村民税非課税、25,000円助成を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'tagawa-hearing-aid-support-2026',
    title: '田川市 難聴者補聴器購入助成',
    organization: '田川市',
    type: 'local',
    maxAmount: '最大2.32万円',
    maxAmountNum: 2.32,
    category: 'medical',
    relatedCategories: ['education', 'living'],
    prefecture: '福岡県',
    tags: ['田川市', '難聴者', '補聴器', '軽度難聴', '令和7年度'],
    eligibility: '田川市内に住所を有し、身体障害者手帳の交付基準を満たさない軽度難聴の方で、両耳50dB以上70dB未満または片耳50dB以上かつ他耳90dB未満、所得区分など公式要件を満たす方が対象です。',
    applicationPeriod: '2025年10月16日更新の公式ページで案内中。購入前に申請',
    description: '田川市が、身体障害者手帳の交付基準を満たさない難聴者に対し、補聴器購入費用の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>田川市難聴者補聴器購入助成は、身体障害者手帳の交付対象とならない軽度難聴者を支援するため、補聴器購入費用の一部を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式PDFでは、補装具の基準による購入額の2分の1相当額を助成し、助成限度額は23,200円とされています。</p>' },
      { heading: '申請の注意点', content: '<p>補聴器を購入する前に申請が必要です。対象品目は高度難聴用補聴器のポケット型および耳かけ型に限られます。</p>' }
    ],
    officialUrl: 'https://www.joho.tagawa.fukuoka.jp/kiji0035115/index.html',
    sourceName: '田川市 難聴者補聴器購入助成',
    sourceUrls: [
      'https://www.joho.tagawa.fukuoka.jp/kiji0035115/index.html',
      'https://www.joho.tagawa.fukuoka.jp/kiji0035115/3_5115_up_pruyivnm.pdf'
    ],
    sourceNote: '田川市公式ページで2025年10月16日更新、軽度難聴者補聴器購入費助成を確認。公式PDFで購入額2分の1相当、助成限度額23,200円、購入前申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'matsuyama-block-wall-safety-2026',
    title: '松山市 ブロック塀等安全対策補助事業',
    organization: '松山市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '愛媛県',
    tags: ['松山市', 'ブロック塀', '除却', '建替え', '令和8年度'],
    eligibility: '松山市内で緊急輸送道路、主要避難路、通学路などに面する危険なブロック塀等を所有し、市税滞納がないなど公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年4月15日から令和9年1月29日まで。予算内で先着順',
    deadlineDate: '2027-01-29',
    description: '松山市が、避難路や通学路沿いの危険なブロック塀等の除却・建替え費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>松山市ブロック塀等安全対策補助事業は、地震時の塀の倒壊による被害を防ぎ、避難路や通学路の安全を確保するための制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、危険なブロック塀等の除却または建替えについて、工事費の3分の2、1メートルあたり10万円まで、補助金上限30万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度は2026年4月15日から2027年1月29日まで受付です。予算内で先着順のため、事前相談と申請時期を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/concrete-block.html',
    sourceName: '松山市 ブロック塀等安全対策補助事業',
    sourceUrls: [
      'https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/concrete-block.html',
      'https://www.city.matsuyama.ehime.jp/hodo/202604/R8burokkuhozyo.html'
    ],
    sourceNote: '松山市公式ページで令和8年度受付期間2026年4月15日から2027年1月29日、工事費3分の2、1mあたり10万円まで、上限30万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shikokuchuo-block-wall-safety-2026',
    title: '四国中央市 ブロック塀等安全対策事業',
    organization: '四国中央市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '愛媛県',
    tags: ['四国中央市', 'ブロック塀', '安全対策', '避難路', '令和8年度'],
    eligibility: '四国中央市が指定する避難路等に面し、点検の結果倒壊の危険性があると判断されたブロック塀等の所有者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年4月13日から先着順に受付',
    description: '四国中央市が、避難路等に面する危険ブロック塀等の安全対策費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>四国中央市ブロック塀等安全対策事業は、災害時の避難路等の機能と安全性を確保するため、危険なブロック塀等の安全対策を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、危険ブロック塀等の安全対策に要した補助対象経費の3分の2以内、上限30万円を補助すると案内されています。補助対象経費は1メートルあたり8万円が限度です。</p>' },
      { heading: '申請の注意点', content: '<p>受付は令和8年4月13日から先着順です。補助事業には一定の要件があるため、申し込み前に事前相談が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.shikokuchuo.ehime.jp/site/akiyataisaku-matome/34422.html',
    sourceName: '四国中央市 ブロック塀等の安全対策',
    sourceUrls: [
      'https://www.city.shikokuchuo.ehime.jp/site/akiyataisaku-matome/34422.html',
      'https://www.city.shikokuchuo.ehime.jp/uploaded/attachment/18478.pdf'
    ],
    sourceNote: '四国中央市公式ページで令和8年4月13日から先着順受付、補助対象経費3分の2以内、上限30万円、1mあたり8万円限度、指定避難路等に面する危険ブロック塀等が対象と確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kochi-city-block-wall-retrofit-2026',
    title: '高知市 ブロック塀等の耐震対策補助制度',
    organization: '高知市',
    type: 'local',
    maxAmount: '最大20.5万円',
    maxAmountNum: 20.5,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '高知県',
    tags: ['高知市', 'ブロック塀', '耐震対策', '撤去', '令和8年度'],
    eligibility: '高知市内のブロック塀等の所有者で、高知県税および高知市税を滞納しておらず、市内施工業者による耐震対策工事など公式要件を満たす方が対象です。',
    applicationPeriod: '公式ページで案内中。当該年度1月末までに工事完了が必要',
    description: '高知市が、地震時に倒壊のおそれがあるブロック塀等の耐震対策工事費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高知市ブロック塀等の耐震対策補助制度は、道路沿いの危険なブロック塀等を減らし、通行人や避難路の安全を確保する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象工事費の3分の2、上限205,000円を補助すると案内されています。補助対象工事費は1メートルあたり80,000円が上限です。</p>' },
      { heading: '申請の注意点', content: '<p>工事は市内に本店を有する登録工務店、建設業許可業者、解体工事業者などに請け負わせる必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/soshiki/58/burokku.html',
    sourceName: '高知市 ブロック塀等の耐震対策の補助制度',
    sourceUrls: [
      'https://www.city.kochi.kochi.jp/soshiki/58/burokku.html',
      'https://www.city.kochi.kochi.jp/uploaded/attachment/168247.pdf'
    ],
    sourceNote: '高知市公式ページと交付要綱PDFで、補助対象工事費3分の2、上限205,000円、1mあたり80,000円限度、高知県税・高知市税滞納なし等を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'komatsushima-block-wall-removal-2026',
    title: '小松島市 危険ブロック塀等除却支援事業',
    organization: '小松島市',
    type: 'local',
    maxAmount: '最大13.3万円',
    maxAmountNum: 13.3,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '徳島県',
    tags: ['小松島市', 'ブロック塀', '除却', '避難路', '令和8年度'],
    eligibility: '小松島市内で、避難地・避難路等沿線に面し、点検表で危険と判断されたブロック塀等の所有者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として2026年5月5日更新ページで案内中',
    description: '小松島市が、避難路等沿線に面する危険ブロック塀等の除却工事費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>小松島市危険ブロック塀等除却支援事業は、地震時に倒壊するおそれのあるブロック塀等を撤去し、避難路等の安全を確保する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、危険なブロック塀の除却で最大13万3千円補助と案内されています。公式様式でも上限133,000円が示されています。</p>' },
      { heading: '申請の注意点', content: '<p>対象路線に該当するか確認に時間を要するため、事前に小松島市住宅課へ確認するよう案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.komatsushima.lg.jp/docs/5687082.html',
    sourceName: '小松島市 令和8年度小松島市危険ブロック塀等除却支援事業',
    sourceUrls: [
      'https://www.city.komatsushima.lg.jp/docs/5687082.html',
      'https://www.city.komatsushima.lg.jp/fs/6/2/3/1/9/5/_/HPburokkuyoushikiR8ver.pdf'
    ],
    sourceNote: '小松島市公式ページで2026年5月5日更新、令和8年度制度、危険ブロック塀除却最大13万3千円、避難地・避難路等沿線に面するブロック塀等対象を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'tokushima-city-block-wall-retrofit-2026',
    title: '徳島市 危険ブロック塀等耐震化事業',
    organization: '徳島市',
    type: 'local',
    maxAmount: '最大20万円',
    maxAmountNum: 20,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '徳島県',
    tags: ['徳島市', 'ブロック塀', '耐震化', '撤去', '令和8年度'],
    eligibility: '徳島市内で危険性が高いブロック塀等を所有または管理し、市税に滞納がないなど公式要件を満たす方が対象です。',
    applicationPeriod: '4月1日から受付開始。予算の範囲内',
    description: '徳島市が、道路に面する危険ブロック塀等の撤去、改善、転換、設置工事費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>徳島市危険ブロック塀等耐震化事業は、危険なブロック塀等の倒壊被害を防ぐため、撤去や安全な塀への転換を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、撤去・改善工事は最大10万円、転換・設置工事は最大20万円と案内されています。補助額は補助対象工事費の3分の2などを基準に算定されます。</p>' },
      { heading: '申請の注意点', content: '<p>所有者または管理者であること、市税滞納がないことが必要です。受付は4月1日から開始と案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.tokushima.tokushima.jp/smph/kurashi/house/house_keikaku/buroku.html',
    sourceName: '徳島市 危険ブロック塀等耐震化事業',
    sourceUrls: [
      'https://www.city.tokushima.tokushima.jp/smph/kurashi/house/house_keikaku/buroku.html',
      'https://www.city.tokushima.tokushima.jp/kurashi/house/house_keikaku/buroku.files/20240401_panf.pdf'
    ],
    sourceNote: '徳島市公式ページで危険ブロック塀等耐震化事業、撤去・改善最大10万円、転換・設置最大20万円、市税滞納なし、4月1日受付開始を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kamiita-block-wall-removal-2026',
    title: '上板町 危険ブロック塀等安全対策支援事業',
    organization: '上板町',
    type: 'local',
    maxAmount: '最大40万円',
    maxAmountNum: 40,
    category: 'disaster',
    relatedCategories: ['housing', 'living'],
    prefecture: '徳島県',
    tags: ['上板町', 'ブロック塀', '建替え', '安全対策', '令和8年度'],
    eligibility: '上板町内で避難路等に面する危険なブロック塀等を撤去または建替えする所有者等で、公式要件を満たす方が対象です。',
    applicationPeriod: '2026年5月更新の公式ページで案内中。予算の範囲内',
    description: '上板町が、危険ブロック塀等の撤去や建替えを支援し、避難路等の安全性を高める制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>上板町危険ブロック塀等安全対策支援事業は、地震時に倒壊のおそれがあるブロック塀等を減らすため、撤去や建替え費用を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、撤去のみは上限20万円、建替えは上限40万円として、工事費の3分の2などのいずれか少ない額を補助すると案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>令和7年度に交付を受けた方で上限額に達しなかった場合は、令和8年度に補助上限額から既に交付を受けた額を控除した額が上限です。</p>' }
    ],
    officialUrl: 'https://www.townkamiita.jp/docs/2018120500018/',
    sourceName: '上板町 危険ブロック塀等安全対策支援事業',
    sourceUrls: [
      'https://www.townkamiita.jp/docs/2018120500018/',
      'https://www.townkamiita.jp/docs/2011020900018/file_contents/kouhou334.pdf'
    ],
    sourceNote: '上板町公式ページで2026年5月更新、危険ブロック塀等安全対策支援事業、撤去のみ上限20万円、建替え上限40万円、工事費2/3等を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'nagano-city-youth-scholarship-repayment-2026',
    title: '長野市 若者奨学金返還支援補助金',
    organization: '長野市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '長野県',
    tags: ['長野市', '奨学金返還', '若者定着', '移住定住', '令和8年度'],
    eligibility: '補助対象者の認定を受け、長野市内に居住し、就業や年齢など公式要件を満たしながら奨学金を返還している方が対象です。',
    applicationPeriod: '認定者向けに令和8年度分を案内中。交付申請は年度ごとの案内を確認',
    description: '長野市が、若者の市内定着と就業を支援するため、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長野市若者奨学金返還支援補助金は、奨学金を返還しながら市内に定着する若者を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、認定者の奨学金返還額について1年度あたり12万円を上限に補助し、補助期間は5年間、最大60万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>補助を受けるには、事前に補助対象者として認定を受ける必要があります。認定者は年度ごとに交付申請を行います。</p>' }
    ],
    officialUrl: 'https://www.city.nagano.nagano.jp/n041600/iju/p004279.html',
    sourceName: '長野市 若者奨学金返還支援補助金',
    sourceUrls: [
      'https://www.city.nagano.nagano.jp/n041600/iju/p004279.html'
    ],
    sourceNote: '長野市公式ページで令和8年度の若者奨学金返還支援補助金、1年度12万円上限、補助期間5年間、最大60万円、事前認定制を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'ueda-scholarship-repayment-2026',
    title: '上田市 奨学金返還支援事業補助金',
    organization: '上田市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '長野県',
    tags: ['上田市', '奨学金返還', '若者定着', '30歳未満', '令和8年度'],
    eligibility: '上田市内に居住し、就業しながら奨学金を返還している30歳未満の方で、市税滞納がないことなど公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。年度ごとの申請期間を確認',
    description: '上田市が、若者の定住促進と人材確保を目的に、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>上田市奨学金返還支援事業補助金は、奨学金を返還しながら市内に定住・就業する若者を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式要綱では、補助対象奨学金返還額の2分の1以内、1年度あたり10万円を上限に交付するとされています。交付対象期間は最長5年間のため、最大50万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>対象年齢、就業、居住、滞納の有無、他制度との関係などを確認してください。交付は年度ごとの申請が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.ueda.nagano.jp/soshiki/koyo/65774.html',
    sourceName: '上田市 奨学金返還支援事業補助金',
    sourceUrls: [
      'https://www.city.ueda.nagano.jp/soshiki/koyo/65774.html',
      'https://www.city.ueda.nagano.jp/contents/reiki/reiki_int/reiki_honbun/r360RG00001208.html'
    ],
    sourceNote: '上田市公式ページと公式例規で、奨学金返還支援事業補助金、30歳未満、返還額2分の1以内、1年度10万円上限、交付対象期間5年間を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'ina-scholarship-repayment-2026',
    title: '伊那市 若者世代定住促進奨学金返還支援補助金',
    organization: '伊那市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '長野県',
    tags: ['伊那市', '奨学金返還', '若者定住', '40歳未満', '令和8年度'],
    eligibility: '伊那市に定住し、奨学金を返還しながら就労している40歳未満の方など、公式要件を満たす方が対象です。',
    applicationPeriod: '公式ページで案内中。年度ごとの申請受付を確認',
    description: '伊那市が、若者世代の定住を促進するため、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>伊那市若者世代定住促進奨学金返還支援補助金は、市に定住する若者の奨学金返還負担を軽減する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、年度中に返還した奨学金額の3分の2以内、市内に本社・本店のある事業所へ就職した場合は3分の3以内を補助し、上限24万円/年、最大5年間で120万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>年齢、定住、就労、返還実績、市税等の要件があります。申請前に対象者要件と提出書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.inacity.jp/sangyo_noringyo/work/hojoshiensemina-/1712040943.html',
    sourceName: '伊那市 若者世代定住促進奨学金返還支援補助金',
    sourceUrls: [
      'https://www.inacity.jp/sangyo_noringyo/work/hojoshiensemina-/1712040943.html',
      'https://www1.g-reiki.net/ina/reiki_honbun/e710RG00001167.html'
    ],
    sourceNote: '伊那市公式ページと公式例規で、奨学金返還額3分の2以内、市内本社・本店事業所就職は3分の3以内、年上限24万円、最大5年間120万円、30歳未満等の要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shiojiri-scholarship-repayment-2026',
    title: '塩尻市 奨学金返還支援事業補助金',
    organization: '塩尻市',
    type: 'local',
    maxAmount: '年最大18万円',
    maxAmountNum: 18,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '長野県',
    tags: ['塩尻市', '奨学金返還', '若者定着', '39歳以下', '令和8年度'],
    eligibility: '塩尻市に居住し、市内企業等で就業する39歳以下の方で、奨学金を返還中であることなど公式要件を満たす方が対象です。',
    applicationPeriod: '公式ページで案内中。年度ごとの受付期間を確認',
    description: '塩尻市が、市内企業等に就業する若者の奨学金返還を支援し、定住と人材確保につなげる補助金です。',
    sections: [
      { heading: '制度の概要', content: '<p>塩尻市奨学金返還支援事業補助金は、市内に住み、市内企業等で働く若者の奨学金返還負担を軽減する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、1年度あたり返還額の3分の2以内、上限18万円を補助すると案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>39歳以下、市内居住、市内企業等への就業、奨学金返還中であることなどの要件があります。年度ごとの申請時期を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.shiojiri.lg.jp/soshiki/14/21928.html',
    sourceName: '塩尻市 奨学金返還支援事業補助金',
    sourceUrls: [
      'https://www.city.shiojiri.lg.jp/soshiki/14/21928.html',
      'https://www.city.shiojiri.lg.jp/uploaded/attachment/37882.pdf'
    ],
    sourceNote: '塩尻市公式ページで奨学金返還支援事業補助金、39歳以下、市内居住・市内企業等就業、返還額3分の2以内、1年度上限18万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'takayama-scholarship-repayment-2026',
    title: '高山市 奨学金返済支援事業補助金',
    organization: '高山市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '岐阜県',
    tags: ['高山市', '奨学金返済', '若者定住', '就業支援', '令和8年度'],
    eligibility: '高山市に居住または居住意思があり、就業しながら奨学金を返済している方で、市税滞納がないなど公式要件を満たす方が対象です。',
    applicationPeriod: '公式ページで案内中。半年ごとに交付手続き',
    description: '高山市が、市内への定住や就業を支援するため、奨学金返済額に応じて補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高山市奨学金返済支援事業補助金は、奨学金を返済しながら市内で働き暮らす方の負担を軽減する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、返済額に応じて年額24万円を上限に補助し、補助対象期間は最大5年間と案内されています。最大120万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>市税滞納がある場合は補助を受けられません。補助金交付前に奨学金返済がわかる書類を提出し、確認後に交付されます。</p>' }
    ],
    officialUrl: 'https://www.city.takayama.lg.jp/shisei/1000067/1002790/1002803/1007260.html',
    sourceName: '高山市 奨学金返済支援事業補助金',
    sourceUrls: ['https://www.city.takayama.lg.jp/shisei/1000067/1002790/1002803/1007260.html'],
    sourceNote: '高山市公式ページで、年額24万円上限、補助対象期間最大5年間、市内居住意思のある方を対象に事業継続、市税滞納なし等を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'seki-sme-scholarship-repayment-2026',
    title: '関市 中小企業等就職者奨学金返還支援補助金',
    organization: '関市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '岐阜県',
    tags: ['関市', '奨学金返還', '中小企業', '若者定着', '令和8年度'],
    eligibility: '関市内在住かつ市内中小企業等に勤務し、奨学金を返還している方で、公式要件を満たす方が対象です。',
    applicationPeriod: '毎年1月1日から3月15日まで交付申請',
    description: '関市が、市内中小企業等への就職者を対象に、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>関市中小企業等就職者奨学金返還支援補助金は、市内中小企業等への就職と市内定住を後押しする補助制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、返還した奨学金額の2分の1、年間上限12万円を補助し、補助対象期間は最大60か月と案内されています。最大60万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>交付申請は毎年1月1日から3月15日までです。前年1月1日から12月31日までの返還実績や勤務実績に基づいて申請します。</p>' }
    ],
    officialUrl: 'https://www.city.seki.lg.jp/0000020639.html',
    sourceName: '関市 中小企業等就職者奨学金返還支援補助金',
    sourceUrls: ['https://www.city.seki.lg.jp/0000020639.html'],
    sourceNote: '関市公式ページで、返還額2分の1、年間上限12万円、補助対象期間最大60か月、毎年1月1日から3月15日まで申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'motosu-scholarship-repayment-2026',
    title: '本巣市 奨学金返還支援事業',
    organization: '本巣市',
    type: 'local',
    maxAmount: '最大80万円',
    maxAmountNum: 80,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '岐阜県',
    tags: ['本巣市', '奨学金返還', '若者定住', '市内就業加算', '令和8年度'],
    eligibility: '申請年度末時点で35歳未満、本巣市に住民登録があり5年以上継続居住する意思がある方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和10年度まで毎年8月1日から9月30日まで認定申請受付',
    description: '本巣市が、若者の定住と市内就業を促進するため、奨学金返還額の一部を最長5年間補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>本巣市奨学金返還支援事業は、令和6年度から令和10年度まで実施される若者定住支援制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、通常は返還額の2分の1、年額上限12万円を補助します。市内事業所就労などの加算対象者は返還額の3分の2、年間上限16万円で、連続5年間の場合は最大80万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>初年度の交付認定申請は8月1日から9月30日までです。補助対象期間中に市外転出した場合は権利を失います。</p>' }
    ],
    officialUrl: 'https://www.city.motosu.lg.jp/0000002460.html',
    sourceName: '本巣市 奨学金返還支援事業',
    sourceUrls: ['https://www.city.motosu.lg.jp/0000002460.html'],
    sourceNote: '本巣市公式ページで、令和6年度から令和10年度、年額上限12万円、加算対象者は年間上限16万円、連続5年間、35歳未満等を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yamagata-gifu-scholarship-repayment-2026',
    title: '山県市 中小企業等人材確保のための奨学金返還支援補助金',
    organization: '山県市',
    type: 'local',
    maxAmount: '最大240万円',
    maxAmountNum: 240,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '岐阜県',
    tags: ['山県市', '奨学金返還', '中小企業', '人材確保', '令和8年度'],
    eligibility: '山県市内の事業所等に1年以上継続就職または市内で事業を営み、1年以上市の住民基本台帳に登録され、10年以上居住意思がある方など公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は8月3日から9月30日まで',
    description: '山県市が、市内中小企業等の人材確保と定住促進を目的に、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>山県市中小企業等人材確保のための奨学金返還支援補助金は、市内事業所等で働く方の奨学金返還負担を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、年間補助金額は奨学金返還金額等と月数2万円のいずれか低い額で、24万円を限度とされています。補助対象期間は最初に交付を受けてから10年間を限度とするため、最大240万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の申請期間は8月3日から9月30日です。市内就職、市内居住、10年以上の居住意思などを確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.yamagata.gifu.jp/soshiki/norinshoko/48937.html',
    sourceName: '山県市 令和8年度中小企業等人材確保のための奨学金返還支援補助金',
    sourceUrls: ['https://www.city.yamagata.gifu.jp/soshiki/norinshoko/48937.html'],
    sourceNote: '山県市公式ページで、年間24万円限度、補助対象期間10年間限度、令和8年度申請期間8月3日から9月30日、市内就職・居住要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'gujo-scholarship-repayment-exemption-2026',
    title: '郡上市 青少年育英奨学資金返還免除',
    organization: '郡上市',
    type: 'local',
    maxAmount: '年最大20万円',
    maxAmountNum: 20,
    category: 'education',
    relatedCategories: ['living'],
    prefecture: '岐阜県',
    tags: ['郡上市', '奨学金', '返還免除', '定住', '令和8年度'],
    eligibility: '郡上市青少年育英奨学資金を利用し、卒業後に郡上市内に住所を有する方で、返還計画に基づく返還金や市税等の滞納がないなど公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度春入学者向け案内掲載中。免除申請期限は毎年度5月末まで',
    description: '郡上市が、青少年育英奨学資金を利用した方の市内定住を支援するため、返還額の一部を免除する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>郡上市青少年育英奨学資金貸付制度では、大学等を卒業後に郡上市内に住所を有する方に対し、毎年度申請により奨学金返還額の一部免除を受けられます。</p>' },
      { heading: '免除内容', content: '<p>公式ページでは、毎年度申請することで返還額の2分の1相当、最大で年間20万円まで免除と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>免除申請期限は毎年度5月末までです。返還金に滞納がないこと、返還者本人に市税等の滞納がないことが条件です。</p>' }
    ],
    officialUrl: 'https://www.city.gujo.gifu.jp/admin/detail/7186.html',
    sourceName: '郡上市 青少年育英奨学資金貸付制度',
    sourceUrls: ['https://www.city.gujo.gifu.jp/admin/detail/7186.html'],
    sourceNote: '郡上市公式ページで、令和8年度春入学者向け案内、卒業後市内住所者への返還額2分の1相当・年間最大20万円免除、毎年度5月末申請を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'tajimi-scholarship-grant-2026',
    title: '多治見市 大学生奨学資金給付制度',
    organization: '多治見市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'education',
    relatedCategories: ['living'],
    prefecture: '岐阜県',
    tags: ['多治見市', '給付型奨学金', '大学生', '返還不要', '令和8年度'],
    eligibility: '令和8年度に大学または短期大学へ進学する方で、高校卒業後2年以内、成績やスポーツ・文化活動、所得基準など公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度募集要項で案内中。期限までに申請',
    description: '多治見市が、大学等へ進学する学生を対象に、返還不要の給付型奨学資金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>多治見市大学生奨学資金給付制度は、大学または短期大学へ進学する学生を支援する返還不要の奨学金です。</p>' },
      { heading: '給付内容', content: '<p>公式募集要項では、奨学資金の額は年額30万円、返還不要と案内されています。4年制大学の場合は4年間合計で120万円です。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度募集人数は6人です。進学先、成績・活動実績、所得基準、提出書類を募集要項で確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.tajimi.lg.jp/_res/projects/default_project/_page_/001/006/330/r8daigakubosyuuyoukou.pdf',
    sourceName: '多治見市 大学生奨学資金給付制度',
    sourceUrls: [
      'https://www.city.tajimi.lg.jp/_res/projects/default_project/_page_/001/006/330/r8daigakubosyuuyoukou.pdf'
    ],
    sourceNote: '多治見市公式募集要項PDFで、令和8年度募集人数6人、年額30万円返還不要、4年制大学は合計120万円、申請資格を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shizuoka-city-scholarship-repayment-2026',
    title: '静岡市 奨学金返還支援事業',
    organization: '静岡市',
    type: 'local',
    maxAmount: '最大72万円',
    maxAmountNum: 72,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '静岡県',
    tags: ['静岡市', '奨学金返還', '企業支援', '人材確保', '令和8年度'],
    eligibility: '静岡市内に本社、本店または主たる事業所を有する中小企業等や、市内に勤務先がある従業員の奨学金返還を支援する企業など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '2026年4月8日から2027年2月26日まで。予算到達時は受付終了の場合あり',
    deadlineDate: '2027-02-26',
    description: '静岡市が、若者の市内就職と企業の人材確保を後押しするため、従業員の奨学金返還を支援する企業に補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>静岡市奨学金返還支援事業は、従業員の奨学金返還を支援する企業に対して、市が費用の一部を補助する制度です。市内企業の人材確保と若者の定着を目的としています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、中小企業は補助率3分の2、従業員1人あたり年12万円が上限と案内されています。支援対象月数は最大72月、補助期間は最大6年間のため、最大72万円相当です。大企業は補助率2分の1、従業員1人あたり年9万円が上限です。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の交付申請受付期間は2026年4月8日から2027年2月26日までです。対象従業員、支援制度、企業区分により補助額が変わるため、申請前に公式要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.shizuoka.lg.jp/s5478/s013104.html',
    sourceName: '静岡市 奨学金返還支援事業',
    sourceUrls: ['https://www.city.shizuoka.lg.jp/s5478/s013104.html'],
    sourceNote: '静岡市公式ページで、中小企業は補助率3分の2・従業員1人あたり年12万円上限・最大72月、大企業は年9万円上限、令和8年度受付期間2026年4月8日から2027年2月26日を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'hamamatsu-scholarship-repayment-2026',
    title: '浜松市 奨学金返還支援事業',
    organization: '浜松市',
    type: 'local',
    maxAmount: '市負担分 年最大9万円',
    maxAmountNum: 9,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '静岡県',
    tags: ['浜松市', '奨学金返還', '認定企業', '中小企業', '令和8年度'],
    eligibility: '浜松市内の認定企業に就職する満30歳以下の方と、支援制度に参加する市内中小企業など、公式要件を満たす方・事業者が対象です。',
    applicationPeriod: '認定企業は随時募集',
    description: '浜松市が、市内中小企業と連携し、若者の奨学金返還を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>浜松市奨学金返還支援事業は、浜松市と市内中小企業が協力して、認定企業に就職した若者の奨学金返還を支援する制度です。認定企業は随時募集されています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、市と市内中小企業が半分ずつ費用を負担し、認定企業は補助金の2分の1、支援対象者1人あたり年間最大9万円を市に納付すると案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>支援を受けるには、浜松市が認定した企業への就職など条件があります。企業側は認定申請や協力金の扱いを確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.hamamatsu.shizuoka.jp/sangyosomu/syokakukin.html',
    sourceName: '浜松市 奨学金返還支援事業',
    sourceUrls: ['https://www.city.hamamatsu.shizuoka.jp/sangyosomu/syokakukin.html'],
    sourceNote: '浜松市公式ページで、2026年5月20日更新、市と市内中小企業が半分ずつ費用負担、認定企業は補助金2分の1・1人あたり年間最大9万円を市に納付、満30歳以下等を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'iwata-uturn-scholarship-repayment-2026',
    title: '磐田市 Uターン促進奨学金返済支援補助金',
    organization: '磐田市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '静岡県',
    tags: ['磐田市', '奨学金返還', 'Uターン', '若者定住', '令和8年度'],
    eligibility: '磐田市へUターンし、市内に住所を有して市内事業所等へ就労する方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年4月20日から2027年3月1日まで',
    deadlineDate: '2027-03-01',
    description: '磐田市が、若者のUターン就職と定住を促すため、奨学金返済額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>磐田市Uターン促進奨学金返済支援補助金は、市外から磐田市へ戻って就労する方の奨学金返済負担を軽減する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式手引きでは、対象となる返済額の2分の1以内、年12万円を限度に補助すると案内されています。補助を受けられる期間は、就労開始年度の翌年度から5年間のため、最大60万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の申請受付期間は2026年4月20日から2027年3月1日までです。Uターン、居住、就労、奨学金返済の状況を示す書類が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.iwata.shizuoka.jp/sangyou_business/shushoku/1002264.html',
    sourceName: '磐田市 Uターン促進奨学金返済支援補助金',
    sourceUrls: [
      'https://www.city.iwata.shizuoka.jp/sangyou_business/shushoku/1002264.html',
      'https://www.city.iwata.shizuoka.jp/_res/projects/default_project/_page_/001/002/264/R8tebiki.pdf'
    ],
    sourceNote: '磐田市公式ページと令和8年度手引きPDFで、補助額は2分の1以内・年12万円限度、補助期間5年間、令和8年度受付2026年4月20日から2027年3月1日を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yaizu-sme-scholarship-repayment-2026',
    title: '焼津市 中小企業等奨学金返還支援事業費補助金',
    organization: '焼津市',
    type: 'local',
    maxAmount: '最大8万円',
    maxAmountNum: 8,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '静岡県',
    tags: ['焼津市', '奨学金返還', '中小企業', '人材確保', '令和8年度'],
    eligibility: '焼津市内に事業所を有し、従業員の奨学金返還支援制度を実施する中小企業等など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和8年度制度として案内中。実績報告は2027年1月29日まで',
    deadlineDate: '2027-01-29',
    description: '焼津市が、市内中小企業等の人材確保を支援するため、従業員の奨学金返還支援に要する経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>焼津市中小企業等奨学金返還支援事業費補助金は、従業員の奨学金返還を支援する市内中小企業等に対する補助制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象経費の3分の2以内で、支援対象者の当該年返還額合計の3分の1以内、上限8万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象は4月から12月までの奨学金返還支援に要する経費です。実績報告は事業完了後30日以内、または2027年1月29日のいずれか早い日までです。</p>' }
    ],
    officialUrl: 'https://www.city.yaizu.lg.jp/business/kigyo-shien/shien-hojo/scholarship-return.html',
    sourceName: '焼津市 中小企業等奨学金返還支援事業費補助金',
    sourceUrls: ['https://www.city.yaizu.lg.jp/business/kigyo-shien/shien-hojo/scholarship-return.html'],
    sourceNote: '焼津市公式ページで、補助対象経費3分の2以内かつ対象者の返還額合計3分の1以内、上限8万円、実績報告期限2027年1月29日を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'aichi-sme-scholarship-repayment-2026',
    title: '愛知県 中小企業人材確保奨学金返還支援事業補助金',
    organization: '愛知県',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '愛知県',
    tags: ['愛知県', '奨学金返還', '中小企業', '人材確保', '令和8年度'],
    eligibility: '愛知県内に本社または主たる事業所を有し、従業員への奨学金返還支援制度を整備する中小企業等など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和8年度制度として案内中。企業登録と補助申請が必要',
    description: '愛知県が、中小企業等の人材確保を支援するため、従業員の奨学金返還支援に要する経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>愛知県中小企業人材確保奨学金返還支援事業補助金は、従業員の奨学金返還を支援する中小企業等に対する県の補助制度です。企業による手当支給や代理返還を後押しします。</p>' },
      { heading: '補助内容', content: '<p>公式要綱では、企業が従業員に支給した奨学金返還手当または代理返還した額の2分の1以内を補助します。補助上限は対象従業員1人あたり年20万円で、採用年度から最大3会計年度までのため、最大60万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>補助金の活用には、県への企業登録や支援計画の提出などが必要です。令和8年度からの要綱改正や既存支援対象者の扱いも確認してください。</p>' }
    ],
    officialUrl: 'https://shogakukin-henkan-shien.pref.aichi.jp/subsidy/',
    sourceName: 'あいち奨学金返還支援ネット 愛知県中小企業人材確保奨学金返還支援事業補助金',
    sourceUrls: [
      'https://shogakukin-henkan-shien.pref.aichi.jp/subsidy/',
      'https://shogakukin-henkan-shien.pref.aichi.jp/assets/file/subsidy/510331.pdf'
    ],
    sourceNote: '愛知県公式の制度サイトと令和8年4月1日施行の交付要綱で、補助率2分の1以内、従業員1人あたり年20万円上限、採用年度から最大3会計年度、対象企業要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'toyohashi-scholarship-repayment-2026',
    title: '豊橋市 奨学金返還支援補助金',
    organization: '豊橋市',
    type: 'local',
    maxAmount: '最大54万円',
    maxAmountNum: 54,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '愛知県',
    tags: ['豊橋市', '奨学金返還', '正規雇用', '中小企業', '令和8年度'],
    eligibility: '豊橋市内に居住し、市内事業所に正規雇用で勤務し、奨学金を返還している方など、公式要件を満たす方が対象です。',
    applicationPeriod: '交付申請は毎年1月4日から1月20日まで',
    description: '豊橋市が、市内中小事業者等への就職者を対象に、奨学金返還額や企業協力金額に応じて補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>豊橋市奨学金返還支援補助金は、市内事業所で働く若者の定着と中小事業者の人材確保を支援する制度です。県制度を利用した会社から奨学金返還支援手当等を受けた方も対象条件に含まれます。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、毎年12月末時点の補助対象要件を確認し、期間内奨学金返還額と企業協力金額に応じて年度ごとに交付すると案内されています。制度案内では月額1万5,000円、3年間で最大54万円相当の支援枠です。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象者登録のうえ、交付申請は毎年1月4日から1月20日に行います。住所、勤務先、奨学金返還状況が変わった場合は届出が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.toyohashi.lg.jp/61942.htm',
    sourceName: '豊橋市 奨学金返還支援補助金の補助対象者登録等',
    sourceUrls: [
      'https://www.city.toyohashi.lg.jp/61942.htm',
      'https://www.city.toyohashi.lg.jp/34111.htm'
    ],
    sourceNote: '豊橋市公式ページで、市内居住・市内事業所勤務・奨学金返還中などの対象要件、毎年1月4日から1月20日の交付申請、年度ごとの交付方法を確認。制度概要として月額1万5,000円・3年間最大54万円を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'inazawa-scholarship-repayment-2026',
    title: '稲沢市 奨学金返還支援補助金',
    organization: '稲沢市',
    type: 'local',
    maxAmount: '最大36万円',
    maxAmountNum: 36,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '愛知県',
    tags: ['稲沢市', '奨学金返還', '若者定住', '中小企業', '令和8年度'],
    eligibility: '稲沢市に住所を有し、市内中小企業等に令和6年4月1日以降正規雇用で就職する35歳未満の方など、公式要件を満たす方が対象です。',
    applicationPeriod: '交付基準日から3か月以内に登録申請。交付申請は年度末まで',
    description: '稲沢市が、若者の定住と市内中小企業等への就職を促すため、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>稲沢市奨学金返還支援補助金は、市内中小企業等へ正規雇用で就職し、市内に定住する若者を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、1年度あたり各月の奨学金返還額合計の2分の1、上限12万円を補助すると案内されています。補助対象期間全体では総額36万円が上限です。</p>' },
      { heading: '申請の注意点', content: '<p>交付基準日から3か月以内に補助対象者登録申請が必要です。交付申請兼請求書は補助金の交付を受ける年度の年度末までに提出します。</p>' }
    ],
    officialUrl: 'https://www.city.inazawa.aichi.jp/0000003540.html',
    sourceName: '稲沢市 奨学金返還支援補助金',
    sourceUrls: ['https://www.city.inazawa.aichi.jp/0000003540.html'],
    sourceNote: '稲沢市公式ページで、35歳未満、市内中小企業等への正規雇用、市内定住要件、返還額2分の1・年12万円上限・総額36万円上限、登録申請期限を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'mie-student-scholarship-repayment-2026',
    title: '三重県 地域と若者の未来を拓く学生奨学金返還支援事業',
    organization: '三重県',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '三重県',
    tags: ['三重県', '奨学金返還', '若者定着', '県内就業', '令和8年度'],
    eligibility: '大学等の在学生または既卒者で、三重県内で居住かつ就業する意思があり、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年6月3日から2026年12月18日まで',
    deadlineDate: '2026-12-18',
    description: '三重県が、県内での居住と就業を条件に、大学等の奨学金返還額の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>三重県地域と若者の未来を拓く学生奨学金返還支援事業は、若者の県内定着と県内産業の振興を目的に、奨学金返還額の一部を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、学生は在学中に借り入れた奨学金残額の4分の1、既卒者は申請時の借入奨学金残額の4分の1を助成すると案内されています。上限は100万円で、条件を満たして4年経過後に3分の1、8年経過後に残額を交付します。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の募集期間は2026年6月3日から12月18日まで、募集定員は150名です。卒業後や認定後の県内居住・就業条件を満たす必要があります。</p>' }
    ],
    officialUrl: 'https://www.pref.mie.lg.jp/KIKAKUK/HP/miesalon/74737039887_00002.htm',
    sourceName: '三重県 地域と若者の未来を拓く学生奨学金返還支援事業',
    sourceUrls: ['https://www.pref.mie.lg.jp/KIKAKUK/HP/miesalon/74737039887_00002.htm'],
    sourceNote: '三重県公式ページで、令和8年度募集、募集期間2026年6月3日から12月18日、募集定員150名、奨学金残額4分の1・上限100万円、4年・8年経過後交付を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'ise-company-scholarship-repayment-2026',
    title: '伊勢市 企業等奨学金返還支援補助金',
    organization: '伊勢市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '三重県',
    tags: ['伊勢市', '奨学金返還', '企業支援', '人材確保', '令和8年度'],
    eligibility: '伊勢市内に事業所を有し、対象従業員の奨学金返還を支援する企業等など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和8年度制度として案内中。交付申請書類を商工労政課へ提出',
    description: '伊勢市が、企業等による従業員の奨学金返還支援を後押しするため、対象経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>伊勢市企業等奨学金返還支援補助金は、市内企業等が従業員の奨学金返還を支援する場合に、その経費の一部を市が補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象経費の2分の1、対象従業員1人につき1会計年度あたり上限12万円を補助すると案内されています。対象従業員1人につき最長5年のため、最大60万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>1会計年度につき3名までが補助対象です。交付申請には、事業計画書、雇用契約書、住民票、年間返還額や返還計画が分かる書類などが必要です。</p>' }
    ],
    officialUrl: 'https://www.city.ise.mie.jp/sangyo/koyou/roudou/1018506.html',
    sourceName: '伊勢市 企業等奨学金返還支援補助金',
    sourceUrls: ['https://www.city.ise.mie.jp/sangyo/koyou/roudou/1018506.html'],
    sourceNote: '伊勢市公式ページで、補助対象経費2分の1、対象従業員1人につき1会計年度12万円上限、最長5年、1会計年度3名まで、申請書類を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'matsusaka-sme-scholarship-repayment-2026',
    title: '松阪市 中小企業奨学金返還支援補助金',
    organization: '松阪市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '三重県',
    tags: ['松阪市', '奨学金返還', '中小企業', '人材確保', '令和8年度'],
    eligibility: '松阪市内の中小企業等で、従業員への奨学金返還支援制度を整備し、対象従業員に支援を行う事業者など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和7年5月1日更新の制度として案内中。まず商工政策課へ相談',
    description: '松阪市が、市内中小企業等の人材確保を促進するため、従業員の奨学金返還支援に要する経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>松阪市中小企業奨学金返還支援補助金は、市内中小企業等が就業規則等で奨学金返還支援制度を整備し、従業員を支援する場合に補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、企業が支援対象者である従業員へ支払う対象額の2分の1を補助し、補助上限額は支援対象者1人につき年20万円と案内されています。補助年数は支援対象者1人につき3年間のため、最大60万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>まず市へ相談し、企業内就業規則の整備、企業登録、支援計画書提出、交付申請、実績報告の順で手続きします。対象従業員は申請年度に30歳以下であることなどが要件です。</p>' }
    ],
    officialUrl: 'https://www.city.matsusaka.mie.jp/soshiki/35/henkansien.html',
    sourceName: '松阪市 中小企業奨学金返還支援補助金',
    sourceUrls: [
      'https://www.city.matsusaka.mie.jp/soshiki/35/henkansien.html',
      'https://www.city.matsusaka.mie.jp/soshiki/35/shougakukin-tetsuduki.html'
    ],
    sourceNote: '松阪市公式ページで、補助率2分の1、支援対象者1人につき年20万円上限、3年間補助、対象従業員30歳以下、市内在住・市内事業所勤務等を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shima-uij-scholarship-repayment-2026',
    title: '志摩市 UIJターン促進のための奨学金返済補助事業',
    organization: '志摩市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '三重県',
    tags: ['志摩市', '奨学金返還', 'UIJターン', '若者定住', '令和8年度'],
    eligibility: '奨学金の貸与を受けて大学等を卒業し、志摩市に住民登録して居住し、申請年度に30歳以下で奨学金を遅滞なく返済している方など、公式要件を満たす方が対象です。',
    applicationPeriod: '例年6月中',
    description: '志摩市が、UIJターンや若者定住を促進するため、奨学金返済額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>志摩市UIJターン促進のための奨学金返済補助事業は、大学等への進学のために奨学金を借り、現在返済中の方を対象とする補助制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、前年度中に返済した奨学金の2分の1、上限20万円を補助すると案内されています。通算の交付上限額は60万円です。</p>' },
      { heading: '申請の注意点', content: '<p>申請期間は例年6月中です。国家公務員や地方公務員は原則対象外で、志摩市未来人材奨学金応援補助金との重複交付はできません。</p>' }
    ],
    officialUrl: 'https://www.city.shima.mie.jp/kakuka/sangyoshinkobu/shoko/sumai/5366.html',
    sourceName: '志摩市 UIJターン促進のための奨学金返済補助事業',
    sourceUrls: ['https://www.city.shima.mie.jp/kakuka/sangyoshinkobu/shoko/sumai/5366.html'],
    sourceNote: '志摩市公式ページで、2026年6月1日更新、前年度返済額の2分の1・上限20万円、通算上限60万円、30歳以下、申請期間例年6月中を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shima-future-talent-scholarship-2026',
    title: '志摩市 未来人材奨学金応援補助金',
    organization: '志摩市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '三重県',
    tags: ['志摩市', '奨学金返還', '代理返還', '企業支援', '令和8年度'],
    eligibility: '志摩市内に事務所等を有し、対象従業員を正規雇用し、奨学金返還支援制度により代理返還を行う事業者など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和8年度制度として案内中。認定申込と交付申請が必要',
    description: '志摩市が、市内事業者による従業員の奨学金代理返還を支援し、人材確保と定着を後押しする制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>志摩市未来人材奨学金応援補助金は、奨学金返還支援（代理返還）制度を活用する市内事業者に対し、市が返済額の一部を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、事業者が代理返還した額の2分の1を補助し、従業員1人につき年間最大10万円、累計100万円が上限と案内されています。補助対象期間は従業員1人につき最長10年です。</p>' },
      { heading: '申請の注意点', content: '<p>対象従業員は正規雇用、市内住民登録、申請年度末で40歳未満などの要件があります。UIJターン促進のための奨学金返済補助事業との重複交付はできません。</p>' }
    ],
    officialUrl: 'https://www.city.shima.mie.jp/kakuka/sangyoshinkobu/shoko/koyou/6313.html',
    sourceName: '志摩市 未来人材奨学金応援補助金',
    sourceUrls: ['https://www.city.shima.mie.jp/kakuka/sangyoshinkobu/shoko/koyou/6313.html'],
    sourceNote: '志摩市公式ページで、2026年3月17日更新、代理返還額の2分の1、従業員1人につき年10万円・累計100万円上限、最長10年、対象従業員40歳未満等を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'koka-scholarship-repayment-2026',
    title: '甲賀市 奨学金返還支援金',
    organization: '甲賀市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '滋賀県',
    tags: ['甲賀市', '奨学金返還', '市内就職', '若者定着', '令和8年度'],
    eligibility: '奨学金等の貸与を受けて修学し、甲賀市内の企業・事業所へ就職予定で、市内に居住する意思がある方など、公式要件を満たす方が対象です。',
    applicationPeriod: '市内企業の採用内定後に認定申請',
    description: '甲賀市が、市内企業・事業所への就職と若者の定着を促すため、奨学金返還額の一部を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>甲賀市奨学金返還支援金は、奨学金等の貸与を受けて修学した市民が、市内企業・事業所で働く場合に奨学金返還を支援する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、就職した月から5年間、60か月間で最大100万円を支援すると案内されています。年間上限は20万円です。</p>' },
      { heading: '申請の注意点', content: '<p>支援を希望する場合は、市内企業の採用内定を受けた段階で認定申請が必要です。募集要領とチラシで、対象企業、居住要件、申請時期を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.koka.lg.jp/16142.htm',
    sourceName: '甲賀市 奨学金返還支援金の認定申請受付について',
    sourceUrls: ['https://www.city.koka.lg.jp/16142.htm'],
    sourceNote: '甲賀市公式ページで、市内企業・事業所への就職予定者を対象に、就職月から5年間・最大100万円・年20万円上限の奨学金返還支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shiga-scholarship-repayment-introduction-2026',
    title: '滋賀県 奨学金返還支援制度導入促進事業補助金',
    organization: '滋賀県',
    type: 'local',
    maxAmount: '5万円',
    maxAmountNum: 5,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '滋賀県',
    tags: ['滋賀県', '奨学金返還', '企業支援', '制度導入', '令和8年度'],
    eligibility: '滋賀県内の中小企業者等で、従業員の奨学金返還支援制度を新たに導入するなど公式要件を満たす事業者が対象です。',
    applicationPeriod: '2026年4月1日から2027年1月29日まで。予算上限に達するまで',
    deadlineDate: '2027-01-29',
    description: '滋賀県産業支援プラザが、県内中小企業等による奨学金返還支援制度の導入を促すため、定額の支援金を交付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>滋賀県奨学金返還支援制度導入促進支援金は、従業員向けの奨学金返還支援制度を導入し、求人活動を行う県内中小企業等を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、支援金額は定額5万円と案内されています。福利厚生の拡充や人材確保・定着に向けた制度導入を支援します。</p>' },
      { heading: '申請の注意点', content: '<p>申請期間は2026年4月1日から2027年1月29日までです。予算上限に達した場合は早期終了となる可能性があります。</p>' }
    ],
    officialUrl: 'https://www.shigaplaza.or.jp/news/hojokin-joho-dounyusokusin2026/',
    sourceName: '滋賀県 奨学金返還支援制度導入促進事業補助金',
    sourceUrls: ['https://www.shigaplaza.or.jp/news/hojokin-joho-dounyusokusin2026/'],
    sourceNote: '滋賀県産業支援プラザ公式ページで、2026年4月1日から2027年1月29日までの募集、支援金額定額5万円、県内中小企業等の制度導入支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kyoto-employment-scholarship-repayment-2026',
    title: '京都府 就労・奨学金返済一体型支援事業',
    organization: '京都府',
    type: 'local',
    maxAmount: '最大54万円',
    maxAmountNum: 54,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '京都府',
    tags: ['京都府', '奨学金返還', '中小企業', '人材確保', '令和8年度'],
    eligibility: '京都府内中小企業等に就職し、企業の奨学金返済負担軽減支援を受ける従業員と、支援制度を導入する中小企業等など公式要件を満たす方・事業者が対象です。',
    applicationPeriod: '令和8年度制度として案内中。企業認定・支援計画等を確認',
    description: '京都府が、中小企業等と連携して若手従業員の奨学金返済負担を軽減し、人材確保と定着を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>京都府就労・奨学金返済一体型支援事業は、府内中小企業等が従業員の奨学金返済を支援する場合に、京都府がその取組を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、支援対象者1人あたり年18万円を上限に、最長3年間支援すると案内されています。3年間継続した場合は最大54万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>企業による支援制度の導入、対象従業員の要件、府の認定手続きが関係します。申請前に京都府の案内と募集要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.pref.kyoto.jp/rosei/syuurousyougakukin/syuurousyougakukinn1.html',
    sourceName: '京都府 就労・奨学金返済一体型支援事業',
    sourceUrls: ['https://www.pref.kyoto.jp/rosei/syuurousyougakukin/syuurousyougakukinn1.html'],
    sourceNote: '京都府公式ページで、府内中小企業等の奨学金返済支援、支援対象者1人あたり年18万円上限、最長3年間の制度を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'osaka-city-scholarship-grant-2026',
    title: '大阪市 奨学金等制度',
    organization: '大阪市',
    type: 'local',
    maxAmount: '最大21万円',
    maxAmountNum: 21,
    category: 'education',
    relatedCategories: ['living'],
    prefecture: '大阪府',
    tags: ['大阪市', '給付型奨学金', '高校生', '大阪市奨学費', '令和8年度'],
    eligibility: '大阪市内に住所を有し、高等学校等に在学する生徒で、所得要件など公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度大阪市奨学費は2026年7月1日まで',
    deadlineDate: '2026-07-01',
    description: '大阪市が、高等学校等に在学する生徒の修学を支援するため、奨学費を給付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大阪市奨学金等制度は、高等学校等に通う生徒の教育費負担を軽減するための給付型支援です。</p>' },
      { heading: '給付内容', content: '<p>公式ページでは、大阪市奨学費の支給額は年額6万円または年額7万円と案内されています。3年間継続した場合は最大21万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度大阪市奨学費の申請期限は2026年7月1日です。学校を通じた申請や提出書類、所得要件を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.osaka.lg.jp/kyoiku/page/0000308343.html',
    sourceName: '大阪市 奨学金等制度',
    sourceUrls: ['https://www.city.osaka.lg.jp/kyoiku/page/0000308343.html'],
    sourceNote: '大阪市公式ページで、令和8年度大阪市奨学費、申請期限2026年7月1日、年額6万円または7万円の給付型支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'neyagawa-nursery-teacher-study-loan-2026',
    title: '寝屋川市 保育士就学資金貸付事業',
    organization: '寝屋川市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'education',
    relatedCategories: ['employment', 'childcare'],
    prefecture: '大阪府',
    tags: ['寝屋川市', '保育士', '就学資金', '返還免除', '令和8年度'],
    eligibility: '指定保育士養成施設に在学し、卒業後に寝屋川市内の対象施設で保育士等として勤務する意思がある方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。募集時期・定員は公式ページで確認',
    description: '寝屋川市が、市内保育施設で働く保育士確保のため、保育士養成施設の就学資金を貸し付け、一定勤務で返還免除する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>寝屋川市保育士就学資金貸付事業は、保育士養成施設で学ぶ方を対象に就学資金を貸し付け、市内保育施設で一定期間勤務した場合に返還免除を受けられる制度です。</p>' },
      { heading: '貸付内容', content: '<p>公式ページでは、月額5万円以内、2年間で最大120万円の貸付と案内されています。卒業後、市内の対象施設で5年間保育士等として勤務した場合、返還が免除されます。</p>' },
      { heading: '申請の注意点', content: '<p>貸付であるため、勤務要件を満たさない場合は返還が必要です。対象施設、勤務期間、申請書類を事前に確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.neyagawa.osaka.jp/organization_list/kodomo/hoikuka/hoikusho_3/26750.html',
    sourceName: '寝屋川市 保育士修学資金貸付制度',
    sourceUrls: [
      'https://www.city.neyagawa.osaka.jp/organization_list/kodomo/hoikuka/hoikusho_3/26750.html',
      'https://www.city.neyagawa.osaka.jp/material/files/group/118/syugakusikin.pdf'
    ],
    sourceNote: '寝屋川市公式ページで、月額5万円以内、2年間最大120万円、卒業後市内対象施設で5年間勤務した場合の返還免除を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'nara-pref-scholarship-repayment-2026',
    title: '奈良県 奨学金返還支援事業補助金',
    organization: '奈良県',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '奈良県',
    tags: ['奈良県', '奨学金返還', '企業支援', '人材確保', '令和8年度'],
    eligibility: '奈良県内に本社または事業所を有し、従業員の奨学金返還支援制度を設ける中小企業等など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和8年度制度として案内中。補助対象期間は2026年4月1日から2027年3月25日まで',
    deadlineDate: '2027-03-25',
    description: '奈良県が、県内企業の人材確保と若者の県内定着を支援するため、従業員の奨学金返還を支援する企業に補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>奈良県奨学金返還支援事業補助金は、従業員に対して奨学金返還支援制度を実施する県内企業等を対象とした補助制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象経費の2分の1以内を補助し、1事業者あたり500万円を上限と案内されています。対象従業員1人あたりの上限は年間10万円です。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象期間は2026年4月1日から2027年3月25日までです。企業の支援制度、対象従業員、対象経費、申請期限を確認してください。</p>' }
    ],
    officialUrl: 'https://www.pref.nara.jp/63218.htm',
    sourceName: '奈良県 奨学金返還支援事業補助金',
    sourceUrls: ['https://www.pref.nara.jp/63218.htm'],
    sourceNote: '奈良県公式ページで、補助率2分の1以内、1事業者500万円上限、対象従業員1人あたり年10万円上限、補助対象期間2026年4月1日から2027年3月25日を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'gojo-scholarship-repayment-2026',
    title: '五條市 奨学金返還支援事業補助金',
    organization: '五條市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '奈良県',
    tags: ['五條市', '奨学金返還', '若者定住', '就業支援', '令和8年度'],
    eligibility: '五條市内に居住し、就業または起業し、奨学金を返還している若者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。交付申請期限は公式ページで確認',
    description: '五條市が、若者の定住と就業を促進するため、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>五條市奨学金返還支援事業補助金は、市内に住み、働く若者の奨学金返還負担を軽減する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象期間中に返還した奨学金の一部を補助し、月額2万円、年額24万円を上限に最長5年間支援すると案内されています。最大120万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>市内居住、就業・起業、奨学金返還、市税滞納なしなどの条件があります。交付申請や実績報告の時期を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.gojo.lg.jp/soshiki/kikaku/ijuteiju/16984.html',
    sourceName: '五條市 奨学金返還支援事業補助金',
    sourceUrls: ['https://www.city.gojo.lg.jp/soshiki/kikaku/ijuteiju/16984.html'],
    sourceNote: '五條市公式ページで、月額2万円・年額24万円上限、最長5年間、若者定住・就業支援としての奨学金返還補助を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yamatokoriyama-scholarship-repayment-2026',
    title: '大和郡山市 奨学金返還支援補助金',
    organization: '大和郡山市',
    type: 'local',
    maxAmount: '最大54万円',
    maxAmountNum: 54,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '奈良県',
    tags: ['大和郡山市', '奨学金返還', '若者定住', '就業支援', '令和8年度'],
    eligibility: '大和郡山市内に居住し、市内または近隣で就業しながら奨学金を返還している若者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。申請期間は公式ページで確認',
    description: '大和郡山市が、若者の定住促進と経済的負担軽減を目的に、奨学金返還額の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大和郡山市奨学金返還支援補助金は、市内に定住する若者を対象に、奨学金返還額の一部を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、奨学金の月額返還額の4分の3または月1万5,000円のいずれか低い額を、最長3年間助成すると案内されています。最大54万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>年齢、居住、就業、奨学金返還、市税等の滞納の有無などの要件があります。申請前に公式ページの対象者要件と提出書類を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.yamatokoriyama.lg.jp/soshiki/kikakuseisakuka/shinotorikumi/6/11516.html',
    sourceName: '大和郡山市 地域の絆応援助成金事業（奨学金返還支援事業）',
    sourceUrls: ['https://www.city.yamatokoriyama.lg.jp/soshiki/kikakuseisakuka/shinotorikumi/6/11516.html'],
    sourceNote: '大和郡山市公式ページで、月額返還額の4分の3または月1万5,000円の低い額、最長3年間、最大54万円の奨学金返還支援を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'hyogo-scholarship-repayment-2026',
    title: '兵庫県 兵庫型奨学金返済支援制度',
    organization: '兵庫県',
    type: 'local',
    maxAmount: '最大102万円',
    maxAmountNum: 102,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '兵庫県',
    tags: ['兵庫県', '奨学金返還', '企業支援', '若者定着', '令和8年度'],
    eligibility: '兵庫県内事業所に勤務する40歳未満の正社員で、日本学生支援機構の奨学金を返済中の方と、支援制度を実施する県内中小企業等など公式要件を満たす方・事業者が対象です。',
    applicationPeriod: '令和8年度制度として案内中。申請は兵庫県雇用開発協会へ',
    description: '兵庫県が、県内企業による従業員の奨学金返済支援を後押しし、若者の県内就職と定着を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>兵庫型奨学金返済支援制度は、企業が従業員へ奨学金返済支援を行う場合に、県と兵庫県雇用開発協会が企業・従業員を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、企業向けは年間返済額の3分の1、企業支給額等の2分の1、上限6万円のいずれか低い額を支給すると案内されています。対象従業員1人につき最長17年のため、最大102万円相当です。</p>' },
      { heading: '申請の注意点', content: '<p>最大補助期間は企業の認証・宣言状況により5年、10年、17年に分かれます。従業員の年齢、勤務先、奨学金返済状況を確認してください。</p>' }
    ],
    officialUrl: 'https://web.pref.hyogo.lg.jp/sr04/shogakukin.html',
    sourceName: '兵庫県 兵庫型奨学金返済支援事業について',
    sourceUrls: [
      'https://web.pref.hyogo.lg.jp/sr04/shogakukin.html',
      'https://hyogo-koyokaihatsu.or.jp/pages/139/'
    ],
    sourceNote: '兵庫県公式ページで、40歳未満の正社員、県内事業所勤務、日本学生支援機構奨学金返済中、上限6万円/人・年、最長17年を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'himeji-scholarship-repayment-2026',
    title: '姫路市 ひめじ創生奨学金返還支援制度',
    organization: '姫路市',
    type: 'local',
    maxAmount: '最大220万円',
    maxAmountNum: 220,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '兵庫県',
    tags: ['姫路市', '奨学金返還', '若者定着', 'Uターン', '令和8年度'],
    eligibility: '35歳以下で、姫路市内の対象就業先で就業し、奨学金を返還中であることなど、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度は2026年12月11日まで',
    deadlineDate: '2026-12-11',
    description: '姫路市が、市内就業と定住を促進するため、奨学金返還残額の一部を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>ひめじ創生奨学金返還支援制度は、姫路市内の対象就業先で働く若者を対象に、奨学金返還を支援する制度です。</p>' },
      { heading: '支援内容', content: '<p>公式ページでは、日本学生支援機構奨学金の返還残額の2分の1、上限100万円を支援すると案内されています。市内定住者またはUターン者、修士・博士の学位保有者はそれぞれ50万円加算され、結婚・出産などのライフイベント補助金は各10万円です。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の申請期限は2026年12月11日です。支援額と加算を含めても、就業開始日時点の奨学金返還残額を超えない範囲です。</p>' }
    ],
    officialUrl: 'https://www.city.himeji.lg.jp/shisei/0000027663.html',
    sourceName: '姫路市 ひめじ創生奨学金返還支援制度',
    sourceUrls: ['https://www.city.himeji.lg.jp/shisei/0000027663.html'],
    sourceNote: '姫路市公式ページで、返還残額2分の1・上限100万円、加算各50万円、ライフイベント補助金各10万円、申請期限2026年12月11日を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'tottori-future-talent-scholarship-2026',
    title: '鳥取県 未来人材育成奨学金支援助成金',
    organization: '鳥取県',
    type: 'local',
    maxAmount: '最大216万円',
    maxAmountNum: 216,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '鳥取県',
    tags: ['鳥取県', '奨学金返還', '県内就業', '未来人材', '令和8年度'],
    eligibility: '大学等で奨学金の貸与を受け、鳥取県内の対象業種・一般業種へ正規雇用等で就職し、県内に定住する意思がある方など公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。認定申請時期は公式ページで確認',
    description: '鳥取県が、県内産業を担う人材の確保と定着を目的に、奨学金返還額の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鳥取県未来人材育成奨学金支援助成金は、県内で就職・定着する若者を対象に、貸与を受けた奨学金の返還を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、無利子奨学金の場合、特定業種は助成率2分の1、一般業種は4分の1と案内されています。大学院・薬学部6年の場合、特定業種の無利子奨学金は上限216万円です。</p>' },
      { heading: '申請の注意点', content: '<p>助成期間は原則として県内の特定業種または対象業種へ就職した年度から8年度間です。対象業種外への転職や県外転居は返還を求められる場合があります。</p>' }
    ],
    officialUrl: 'https://www.pref.tottori.lg.jp/251627.htm',
    sourceName: '鳥取県 未来人材育成奨学金支援助成金',
    sourceUrls: ['https://www.pref.tottori.lg.jp/251627.htm'],
    sourceNote: '鳥取県公式ページで、無利子奨学金は特定業種2分の1・一般業種4分の1、大学院・薬学部6年の特定業種上限216万円、助成期間原則8年度を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'daisen-scholarship-repayment-2026',
    title: '大山町 奨学金返還支援補助金',
    organization: '大山町',
    type: 'local',
    maxAmount: '最大216万円',
    maxAmountNum: 216,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '鳥取県',
    tags: ['大山町', '奨学金返還', '県内就業', '若者定着', '令和8年度'],
    eligibility: '鳥取県未来人材育成奨学金支援助成金の認定を受け、大山町に住所を有し、県内事業所等に就職・就業する方など公式要件を満たす方が対象です。',
    applicationPeriod: '2026年6月更新の制度として案内中。県助成金の認定・交付状況に応じて申請',
    description: '大山町が、鳥取県の未来人材育成奨学金支援助成金と連動し、奨学金返還額の一部を追加支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大山町奨学金返還支援補助金は、鳥取県未来人材育成奨学金支援助成金の対象者に対し、町が奨学金返還を追加支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、無利子奨学金の特定業種は貸与奨学金総額の2分の1、6年制大学では上限216万円と案内されています。一般業種や有利子奨学金では助成率・上限が異なります。</p>' },
      { heading: '申請の注意点', content: '<p>各年度の上限額は、前年度返還額から県助成金を差し引いた額、または補助金総額を8年で割った額のいずれか低い額です。県助成金との関係を確認してください。</p>' }
    ],
    officialUrl: 'https://www.daisen.jp/10/2/9/p929/',
    sourceName: '大山町 奨学金返還支援補助金',
    sourceUrls: ['https://www.daisen.jp/10/2/9/p929/'],
    sourceNote: '大山町公式ページで、鳥取県未来人材育成奨学金支援助成金との連動、無利子特定業種の助成率2分の1、6年制大学上限216万円、年度上限の考え方を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shimane-pharmacist-scholarship-repayment-2026',
    title: '島根県 薬剤師奨学金返還助成事業',
    organization: '島根県',
    type: 'local',
    maxAmount: '最大576万円',
    maxAmountNum: 576,
    category: 'education',
    relatedCategories: ['medical', 'employment', 'living'],
    prefecture: '島根県',
    tags: ['島根県', '薬剤師', '奨学金返還', '医療人材', '令和8年度'],
    eligibility: '島根県内の登録医療機関・薬局に新たに就業を希望する薬学部在学生・卒業生または薬剤師で、在学期間中に奨学金を借り入れた方など公式要件を満たす方が対象です。',
    applicationPeriod: '2026年4月1日から2026年12月28日まで',
    deadlineDate: '2026-12-28',
    description: '島根県が、県内で働く薬剤師を確保するため、薬剤師の奨学金返還を県と事業者で共同助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>島根県薬剤師奨学金返還助成事業は、県内の登録医療機関または薬局で新たに働く薬剤師を対象に、奨学金返還を助成する制度です。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、令和8年度から助成額を増額し、最大576万円を助成すると案内されています。対象事業者ごとに助成上限額が異なります。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の募集期間は2026年4月1日から12月28日まで、募集定員は10名です。就職内定前の申請が必要です。</p>' }
    ],
    officialUrl: 'https://www.pref.shimane.lg.jp/medical/yakuji/yakuji/yakuji_info/yakuzaishikakuho/yakuzaishi_josei.html',
    sourceName: '島根県 薬剤師奨学金返還助成事業',
    sourceUrls: [
      'https://www.pref.shimane.lg.jp/medical/yakuji/yakuji/yakuji_info/yakuzaishikakuho/yakuzaishi_josei.html',
      'https://www.pref.shimane.lg.jp/medical/yakuji/yakuji/yakuji_info/yakuzaishikakuho/yakuzaishi_josei.data/R8_henkanjoseichirashi.pdf'
    ],
    sourceNote: '島根県公式ページと令和8年度チラシで、最大576万円、募集期間2026年4月1日から12月28日、募集定員10名、県内登録医療機関・薬局への就業要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'okayama-scholarship-repayment-company-2026',
    title: '岡山県 奨学金返還支援制度導入企業応援事業補助金',
    organization: '岡山県',
    type: 'local',
    maxAmount: '年最大9万円',
    maxAmountNum: 9,
    category: 'education',
    relatedCategories: ['employment', 'living'],
    prefecture: '岡山県',
    tags: ['岡山県', '奨学金返還', '企業支援', '若者定着', '令和8年度'],
    eligibility: '岡山県内に主たる事業所を有し、従業員の奨学金返還支援制度を設ける中小企業等など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '令和8年度制度として案内中。交付申請時期は公式ページで確認',
    description: '岡山県が、県内中小企業等による奨学金返還支援制度の導入・実施を後押しする制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>岡山県奨学金返還支援制度導入企業応援事業補助金は、従業員の奨学金返還を支援する県内中小企業等を対象に、企業負担の一部を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、企業が対象従業員に支給する奨学金返還支援額の2分の1以内を補助し、対象従業員1人あたり年9万円を上限とする内容が案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象企業、対象従業員、支援制度の整備状況、県内勤務などの条件があります。申請前に最新の募集要項を確認してください。</p>' }
    ],
    officialUrl: 'https://www.pref.okayama.jp/page/555039.html',
    sourceName: '岡山県 奨学金返還支援制度導入企業応援事業',
    sourceUrls: [
      'https://www.pref.okayama.jp/page/555039.html',
      'https://www.pref.okayama.jp/page/563633.html'
    ],
    sourceNote: '岡山県公式ページで、企業による奨学金返還支援制度、補助率2分の1以内、対象従業員1人あたり年9万円上限を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'marugame-migration-support',
    title: '丸亀市 大阪圏移住支援事業補助金',
    organization: '丸亀市',
    type: 'local',
    maxAmount: '最大18万円',
    maxAmountNum: 18,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '香川県',
    tags: ['丸亀市', '移住支援金', '大阪圏', '定住促進', '令和8年度'],
    eligibility: '大阪府、京都府、兵庫県から丸亀市に移住し、就業等の要件を満たす方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として2026年4月1日更新。予算到達時は受付終了の場合あり',
    description: '丸亀市が、大阪圏からの移住と定住を促進するため、就業等の要件を満たす移住者に支援金を交付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>丸亀市大阪圏移住支援事業補助金は、大阪府、京都府、兵庫県から丸亀市へ移住し、就業等の要件を満たす方を対象にした移住支援制度です。</p>' },
      { heading: '支給内容', content: '<p>公式ページでは、2人以上の世帯は18万円、単身世帯は10万円を交付すると案内されています。子育て世帯などには加算があります。</p>' },
      { heading: '申請の注意点', content: '<p>移住元の居住期間、丸亀市で5年以上継続居住する意思、就業・起業・テレワーク等の要件があります。申請前に令和8年度チラシと交付要綱を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.marugame.lg.jp/site/iju/34178.html',
    sourceName: '丸亀市 令和8年度丸亀市大阪圏移住支援事業補助金',
    sourceUrls: ['https://www.city.marugame.lg.jp/site/iju/34178.html'],
    sourceNote: '丸亀市公式ページで、2026年4月1日更新、2人以上世帯18万円・単身10万円、大阪圏からの移住、5年以上居住意思、就業等要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kanoya-migration-support',
    title: '鹿屋市 移住支援金',
    organization: '鹿屋市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '鹿児島県',
    tags: ['鹿屋市', '移住支援金', 'UIJターン', '東京圏', '令和8年度'],
    eligibility: '東京23区内の在住者または通勤者で、鹿屋市へ移住し、就業・起業・テレワーク等の公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。申請前に移住支援金の要件確認が必要',
    description: '鹿屋市が、東京圏からのUIJターン移住を促進するため、就業等の要件を満たす移住者へ支援金を交付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鹿屋市移住支援金は、東京23区内の在住者または通勤者が鹿屋市へ移住し、就業等の要件を満たす場合に交付される支援金です。</p>' },
      { heading: '支給内容', content: '<p>公式ページでは、2人以上の世帯は100万円、単身世帯は60万円と案内されています。18歳未満の世帯員を帯同する場合は、18歳未満1人につき最大100万円が加算されます。</p>' },
      { heading: '申請の注意点', content: '<p>移住元、移住後の居住意思、就業・起業・テレワークなど複数の要件があります。移住前後の時期によって対象可否が変わるため、申請前に公式ページを確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.kanoya.lg.jp/iju/sangyo/koyo/u_turn_josei.html',
    sourceName: '鹿屋市 UIJターン移住者へ最大100万円を支給します',
    sourceUrls: ['https://www.city.kanoya.lg.jp/iju/sangyo/koyo/u_turn_josei.html'],
    sourceNote: '鹿屋市公式ページで、2人以上世帯100万円、単身60万円、18歳未満1人につき最大100万円加算、東京23区在住・通勤者等の移住要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kirishima-housing-seismic',
    title: '霧島市 木造住宅の耐震診断・耐震改修補助制度',
    organization: '霧島市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    relatedCategories: ['disaster', 'living'],
    prefecture: '鹿児島県',
    tags: ['霧島市', '耐震改修', '木造住宅', '住宅支援', '令和8年度'],
    eligibility: '霧島市内の対象木造住宅について、耐震診断や耐震改修工事を行う所有者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。耐震改修工事は前年度8月までの事前相談が必要',
    description: '霧島市が、地震に強い住まいづくりを促進するため、木造住宅の耐震診断と耐震改修工事に補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>霧島市木造住宅の耐震診断・耐震改修補助制度は、古い木造住宅の耐震化を支援する補助制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、耐震診断は上限6万円、補助率3分の2以内、耐震改修工事は上限100万円、補助率5分の4以内と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>耐震改修工事の補助を受けたい場合は、補助を受ける前年度の8月までに建築指導課へ事前相談が必要です。補助は予算の範囲内で先着順です。</p>' }
    ],
    officialUrl: 'https://www.city-kirishima.jp/shido/machizukuri/kenchiku/taishin/sukehosedo.html',
    sourceName: '霧島市 木造住宅の耐震診断・耐震改修に対する補助制度',
    sourceUrls: ['https://www.city-kirishima.jp/shido/machizukuri/kenchiku/taishin/sukehosedo.html'],
    sourceNote: '霧島市公式ページで、耐震診断6万円・補助率3分の2以内、耐震改修工事100万円・補助率5分の4以内、前年度8月までの事前相談を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'niihama-housing-seismic',
    title: '新居浜市 木造住宅耐震改修補助事業',
    organization: '新居浜市',
    type: 'local',
    maxAmount: '最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster', 'living'],
    prefecture: '愛媛県',
    tags: ['新居浜市', '耐震改修', '木造住宅', '住宅支援', '令和8年度'],
    eligibility: '新居浜市が実施する耐震診断を受け、上部構造評点が1.0未満と判定された対象木造住宅の所有者で、市税等を滞納していない方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として2026年4月1日更新。予算の範囲内で受付',
    description: '新居浜市が、地震に対する住宅の安全性向上を目的に、木造住宅の耐震改修設計・改修工事・工事監理を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>新居浜市木造住宅耐震改修補助事業は、市の耐震診断で上部構造評点が1.0未満と判定された木造住宅を、評点1.0以上にする耐震改修を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、耐震改修設計は経費の3分の2以内・上限20万円、耐震改修工事は経費の5分の4以内・上限115万円、工事監理は経費の2分の1以内・上限3万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>耐震改修工事は、市内事業者で愛媛県の登録制度に基づく耐震改修登録事業者が行う必要があります。補助は予定件数と予算の範囲内です。</p>' }
    ],
    officialUrl: 'https://www.city.niihama.lg.jp/soshiki/kensido/taishinkaisyuu.html',
    sourceName: '新居浜市 令和8年度木造住宅耐震改修補助事業のお知らせ',
    sourceUrls: [
      'https://www.city.niihama.lg.jp/soshiki/kensido/taishinkaisyuu.html',
      'https://www.city.niihama.lg.jp/soshiki/kensido/hakenannai.html'
    ],
    sourceNote: '新居浜市公式ページで、2026年4月1日更新、耐震改修設計20万円、耐震改修工事115万円、工事監理3万円、対象住宅・対象者要件を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'matsuyama-newlywed-rent',
    title: '松山市 結婚新生活支援事業',
    organization: '松山市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'housing',
    relatedCategories: ['childcare', 'living'],
    prefecture: '愛媛県',
    tags: ['松山市', '結婚新生活', '新婚世帯', '住宅費', '令和8年度'],
    eligibility: '令和8年1月1日から令和9年2月28日までに婚姻届を受理された新婚世帯で、夫婦ともに婚姻日に29歳以下かつ令和7年中の夫婦所得合計額が500万円未満、または夫婦ともに39歳以下かつ令和8年度住民税均等割が非課税など、公式要件を満たす世帯が対象です。',
    applicationPeriod: '2026年6月10日から2027年3月5日まで（事務局必着）',
    deadlineDate: '2027-03-05',
    description: '松山市が、結婚に伴う新生活を支援するため、新婚世帯の住宅取得費、住宅リフォーム費、住宅賃借費、引越費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>松山市結婚新生活支援事業は、松山市で新生活を始める新婚世帯に対し、住まいと引越しにかかる費用を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、1世帯あたりの補助限度額は60万円と案内されています。対象経費は、令和8年4月1日から令和9年2月28日までに支払った住宅取得費用、住宅リフォーム費用、住宅賃借費用、引越費用です。</p>' },
      { heading: '申請の注意点', content: '<p>申請は郵送のみで、令和9年3月5日までに事務局へ必着です。夫婦の年齢・所得・住民税、過去の補助金受給、講座受講等の追加要件などを事前に確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/kekkonnshinnseikatsu.html',
    sourceName: '松山市 【県市連携事業】松山市結婚新生活支援事業について',
    sourceUrls: ['https://www.city.matsuyama.ehime.jp/kurashi/kurashi/hojokin/kekkonnshinnseikatsu.html'],
    sourceNote: '松山市公式ページで、2026年6月10日更新、令和8年度の対象世帯、補助限度額60万円、対象経費、申請期間2026年6月10日から2027年3月5日までを確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'oita-city-migration-support',
    title: '大分市 移住支援事業に係る移住支援金',
    organization: '大分市',
    type: 'local',
    maxAmount: '最大90万円',
    maxAmountNum: 90,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '大分県',
    tags: ['大分市', '移住支援金', '県外移住', '東京圏', '令和8年度'],
    eligibility: '県外から大分市へ自己の意思で移住し、就業・専門人材・テレワーク等の公式要件を満たす方が対象です。移住支援金では令和8年度から年齢、18歳未満の世帯員帯同、東京圏からの移住など追加要件があります。',
    applicationPeriod: '移住支援金は2026年5月1日から2027年2月15日まで。予算残額の範囲内で先着順',
    deadlineDate: '2027-02-15',
    description: '大分市が、県外から大分市へ移住する方を支援するため、就労要件等を満たす移住者へ移住支援金を交付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大分市移住支援事業に係る移住支援金は、県外から大分市へ移住し、就業等の要件を満たす方に支給される支援金です。大分市移住者応援給付事業給付金との併給はできません。</p>' },
      { heading: '支給内容', content: '<p>公式ページでは、移住支援金の支援金額は単身世帯40万円、複数人世帯60万円、18歳未満の世帯員を帯同して移住した場合は30万円加算と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の移住支援金は、ホームページ更新時点では予算上限に達しておらず、予算残額の範囲内で先着順に受付と案内されています。申請前に対象要件と受付状況を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.oita.oita.jp/o168/kurashi/sumaijoho/1428889400522.html',
    sourceName: '大分市 県外から大分市に移住する方を応援します',
    sourceUrls: ['https://www.city.oita.oita.jp/o168/kurashi/sumaijoho/1428889400522.html'],
    sourceNote: '大分市公式ページで、2026年5月27日更新、令和8年度受付、移住支援金の単身40万円・複数人世帯60万円・18歳未満帯同30万円加算、申請期間2026年5月1日から2027年2月15日までを確認。旧生成データの最大100万円から現行金額へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'ube-housing-earthquake',
    title: '宇部市 木造住宅の耐震診断及び改修等にかかる事業費の補助制度',
    organization: '宇部市',
    type: 'local',
    maxAmount: '最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster', 'living'],
    prefecture: '山口県',
    tags: ['宇部市', '耐震改修', '木造住宅', '除却工事', '令和8年度'],
    eligibility: '宇部市内の昭和56年5月31日以前に着工された対象木造住宅について、耐震診断、耐震改修工事、除却工事を実施しようとする所有者など、公式要件を満たす方が対象です。',
    applicationPeriod: '2026年5月11日から2026年11月30日まで。予算の範囲内で受付',
    deadlineDate: '2026-11-30',
    description: '宇部市が、地震に強い安心で安全なまちづくりを進めるため、木造住宅の無料耐震診断、耐震改修工事、除却工事を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>宇部市の木造住宅耐震支援制度は、昭和56年5月31日以前に着工された木造住宅を対象に、耐震診断、耐震改修、除却を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、耐震診断は無料で耐震診断員を派遣、耐震改修費は費用の80%・上限115万円、除却工事費は費用等の23%・上限50万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>耐震改修工事は、建築士の補強計画に基づき上部構造評点を1.0未満から1.0以上とする工事が対象です。施工業者や解体業者は市内に本店・支店・営業所を有する事業者であることが求められます。</p>' }
    ],
    officialUrl: 'https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/hojyojyosei_kojin/1009204.html',
    sourceName: '宇部市 木造住宅の耐震診断及び改修等にかかる事業費の補助制度',
    sourceUrls: ['https://www.city.ube.yamaguchi.jp/shisei/hojyojyosei/hojyojyosei_kojin/1009204.html'],
    sourceNote: '宇部市公式ページで、2026年5月8日更新、受付期間2026年5月11日から2026年11月30日、耐震診断無料、耐震改修費80%・上限115万円、除却工事費23%・上限50万円を確認。旧生成データの最大100万円から現行上限115万円へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'hiroshima-city-housing-seismic',
    title: '広島市 住宅耐震改修等補助事業',
    organization: '広島市',
    type: 'local',
    maxAmount: '最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster', 'living'],
    prefecture: '広島県',
    tags: ['広島市', '耐震改修', '現地建替え', '除却', '令和8年度'],
    eligibility: '広島市内の昭和56年5月31日以前に着工された在来軸組構法または伝統的構法の木造住宅で、耐震診断等により所定の評点を満たさない住宅について、所有者等の公式要件を満たす方が対象です。',
    applicationPeriod: '2026年4月15日から2026年4月28日17時まで当初受付。募集件数に達しない場合は随時募集',
    description: '広島市が、耐震性が十分でない住宅の耐震改修、建替え、除却に要する費用の一部を補助し、住宅の耐震化を促進する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>広島市住宅耐震改修等補助事業は、耐震性が十分でない住宅について、耐震改修事業、現地建替え事業、非現地建替え事業、除却事業を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、耐震改修事業と現地建替え事業は工事費の80%・限度額115万円、非現地建替え事業と除却事業は除却工事費の23%・限度額58万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象事業の契約前に、市への補助金交付申請が必要です。令和8年度の当初受付は2026年4月28日17時必着ですが、募集件数に達しない場合は随時募集すると案内されています。</p>' }
    ],
    officialUrl: 'https://www.city.hiroshima.lg.jp/living/sumai/1021346/1026338/1018628.html',
    sourceName: '広島市 住宅耐震改修等補助事業',
    sourceUrls: ['https://www.city.hiroshima.lg.jp/living/sumai/1021346/1026338/1018628.html'],
    sourceNote: '広島市公式ページで、2026年4月6日更新、令和8年度募集案内、耐震改修・現地建替えの補助率80%・上限115万円、除却等の上限58万円、受付期間を確認。旧生成データの最大100万円から現行上限115万円へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'shunan-housing-earthquake',
    title: '周南市 木造住宅耐震改修補助事業',
    organization: '周南市',
    type: 'local',
    maxAmount: '最大115万円',
    maxAmountNum: 115,
    category: 'housing',
    relatedCategories: ['disaster', 'living'],
    prefecture: '山口県',
    tags: ['周南市', '耐震改修', '木造住宅', '無料耐震診断', '令和8年度'],
    eligibility: '周南市内の木造住宅について、耐震診断や耐震改修を実施する住宅所有者など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。受付状況は周南市建築指導課へ確認',
    description: '周南市が、住宅所有者の経済的負担を軽減し、木造住宅の耐震化を促進するため、無料耐震診断と耐震改修工事費補助を行う制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>周南市の木造住宅耐震化支援は、住宅所有者の経済的負担を軽減し、住宅の耐震化を進めるための制度です。令和8年度の住宅耐震化緊急促進アクションプログラムで支援内容が示されています。</p>' },
      { heading: '補助内容', content: '<p>公式資料では、木造住宅の耐震診断は耐震診断員を派遣して無料で実施、木造住宅の耐震改修は耐震改修工事費の5分の4・上限115万円を補助金として交付すると案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>耐震改修の前提として耐震診断が必要です。募集件数や受付方法は年度中に変わることがあるため、申請前に周南市の担当窓口で最新の受付状況を確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.shunan.lg.jp/uploaded/attachment/118053.pdf',
    sourceName: '周南市 令和8年度住宅耐震化緊急促進アクションプログラム',
    sourceUrls: ['https://www.city.shunan.lg.jp/uploaded/attachment/118053.pdf'],
    sourceNote: '周南市公式PDFで、令和8年度の財政的支援として、木造住宅の無料耐震診断、耐震改修工事費5分の4・上限115万円を確認。旧生成データの最大100万円から現行上限115万円へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kochi-city-startup-support',
    title: '高知市 空き店舗活用創業支援事業費補助金',
    organization: '高知市',
    type: 'local',
    maxAmount: '最大70万円',
    maxAmountNum: 70,
    category: 'employment',
    relatedCategories: ['housing', 'living'],
    prefecture: '高知県',
    tags: ['高知市', '創業支援', '空き店舗', '中心市街地', '商店街'],
    eligibility: '高知市の商店街や中心市街地の空き店舗で事業を営む方で、商店街振興組合等の同意、市税等の滞納がないこと、高知商工会議所で事業内容や資金調達等の指導を受けていることなど、公式要件を満たす方が対象です。',
    applicationPeriod: '2026年4月1日更新。予算がなくなり次第受付終了',
    description: '高知市が、商店街や中心市街地の空き店舗で創業・事業拡大する方に対し、店舗賃借料等の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>高知市空き店舗活用創業支援事業費補助金は、商店街や中心市街地の空き店舗で事業を営む方に、店舗賃借料の一部を補助する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、中心商店街に出店する市内事業者の新規創業は、6か月分の店舗賃借料について通常枠3分の2、若年層枠4分の3、補助限度額10万円/月と案内されています。さらに、制度の事業認定を受けた市外からの移住者には、店舗賃貸借に係る仲介手数料を上限10万円まで補助するメニューがあります。</p>' },
      { heading: '申請の注意点', content: '<p>補助率と補助額の拡大は令和10年3月31日までと案内されています。予算がなくなり次第受付終了となるため、申請前に商業振興課へ相談してください。</p>' }
    ],
    officialUrl: 'https://www.city.kochi.kochi.jp/soshiki/128/akitenpo.html',
    sourceName: '高知市 空き店舗活用創業支援事業費補助金',
    sourceUrls: ['https://www.city.kochi.kochi.jp/soshiki/128/akitenpo.html'],
    sourceNote: '高知市公式ページで、2026年4月1日更新、中心商店街の市内事業者新規創業は10万円/月×6か月、移住者向け仲介手数料上限10万円、予算到達で受付終了を確認。旧生成データの最大50万円から現行最大70万円相当へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'miyakonojo-migration-support',
    title: '都城市 移住応援給付金',
    organization: '都城市',
    type: 'local',
    maxAmount: '最大500万円',
    maxAmountNum: 500,
    category: 'living',
    relatedCategories: ['employment', 'housing'],
    prefecture: '宮崎県',
    tags: ['都城市', '移住応援給付金', '移住支援', '子ども加算', '令和8年度'],
    eligibility: '転入前に都城市移住・定住サポートセンターへ移住相談登録を行い、転入直前の3年以上、都城広域定住自立圏外に在住していた方で、就業・起業・事業承継・就農・県移住支援事業等の公式要件を満たす方が対象です。',
    applicationPeriod: '令和7年4月1日以降および令和8年4月1日以降転入者向け制度として案内中。転入翌日から3か月以上1年以内に申請',
    description: '都城市が、移住・定住の促進、地域の人材不足の解消、地域振興を目的に、要件を満たす移住者へ給付金を支給する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>都城市移住応援給付金は、都城市へ移住し、就業・起業・事業承継・就農などの要件を満たす方に支給される給付金です。令和7年度制度以降のページとして、令和7年4月1日以降に転入した方、令和8年4月1日以降に転入する方が対象と案内されています。</p>' },
      { heading: '支給内容', content: '<p>公式ページでは、単身60万円、世帯100万円、18歳未満の世帯員を対象とする子ども加算は1人当たり100万円・最大300万円、中山間地域加算は基礎給付額に加えて20万円・最大100万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>転入直前に居住していた市区町村で転出届を提出する前に、都城市移住・定住サポートセンターへの移住相談登録が必要です。申請後の転出や離職などにより返還が必要となる場合があります。</p>' }
    ],
    officialUrl: 'https://www.city.miyakonojo.miyazaki.jp/site/iju/62718.html',
    sourceName: '都城市 移住応援給付金',
    sourceUrls: ['https://www.city.miyakonojo.miyazaki.jp/site/iju/62718.html'],
    sourceNote: '都城市公式ページで、2026年3月31日更新、単身60万円、世帯100万円、子ども加算1人100万円・最大300万円、中山間地域加算20万円・最大100万円、令和8年4月1日以降転入者対象を確認。旧生成データの最大100万円から現行最大500万円相当へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'nobeoka-migration-support',
    title: '延岡市 移住支援金',
    organization: '延岡市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '宮崎県',
    tags: ['延岡市', '移住支援金', 'ふるさと宮崎人材バンク', '令和8年度'],
    eligibility: '延岡市へ移住し、ふるさと宮崎人材バンク掲載求人への就業や、宮崎県移住支援事業・ひなた暮らし実現応援事業の公式要件を満たす方が対象です。',
    applicationPeriod: '転入日から1年以内。申請日は毎年度2月末日まで。予算額上限に達し次第受付終了',
    description: '延岡市が、移住を促進するため、要件を満たす移住者へ移住支援金を交付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>延岡市移住支援金は、延岡市へ移住し、就業等の要件を満たす方に支給される支援金です。ふるさと宮崎人材バンクの掲載求人等と連動した制度として案内されています。</p>' },
      { heading: '支給内容', content: '<p>公式ページでは、2人以上の家族・世帯の場合は最大100万円、単身者の場合は最大60万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>申請は転入日から1年以内で、毎年度2月末日までです。予算額上限に達し次第、受付終了となるため、必要書類を揃えたうえで早めに申請してください。</p>' }
    ],
    officialUrl: 'https://www.city.nobeoka.miyazaki.jp/site/miryoku/2625.html',
    sourceName: '延岡市 移住支援金',
    sourceUrls: ['https://www.city.nobeoka.miyazaki.jp/site/miryoku/2625.html'],
    sourceNote: '延岡市公式ページで、2026年6月17日更新、2人以上の家族・世帯は最大100万円、単身者は最大60万円、申請は転入日から1年以内・毎年度2月末日まで、R8.4.1適用要綱を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'hyuga-startup-support',
    title: '日向市 中小企業等創業支援事業補助金',
    organization: '日向市',
    type: 'local',
    maxAmount: '最大15万円',
    maxAmountNum: 15,
    category: 'employment',
    relatedCategories: ['housing'],
    prefecture: '宮崎県',
    tags: ['日向市', '創業支援', '中小企業', 'U39加算', '令和8年度'],
    eligibility: '日向市内で新たに創業する方で、特定創業支援等事業の支援を受けたこと、市税等の滞納がないことなど、公式要件を満たす方が対象です。',
    applicationPeriod: '2026年4月1日から受付。予算額に達し次第受付終了',
    description: '日向市が、市内で新たに創業する方に対し、創業にかかる経費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>日向市中小企業等創業支援事業補助金は、市内で新たに創業する方に対して、創業に必要な経費の一部を助成する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、基本額は補助対象経費の3分の2・上限5万円と案内されています。加算として、交付申請日時点で満39歳以下の場合はU39加算3万円、居住地と異なる住所に事務所または事業所を設立する場合は賃貸借加算7万円があります。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年4月1日から受付開始で、予算額に達し次第終了です。補助件数は20件程度と案内されているため、申請前に受付状況を確認してください。</p>' }
    ],
    officialUrl: 'https://www.hyugacity.jp/sp/display.php?cont=230524173829',
    sourceName: '日向市 新たに創業する方に対して創業にかかる経費の一部を助成します',
    sourceUrls: ['https://www.hyugacity.jp/sp/display.php?cont=230524173829'],
    sourceNote: '日向市公式ページで、2026年4月28日更新、令和8年4月1日受付開始、基本額5万円、U39加算3万円、賃貸借加算7万円、補助件数20件程度を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'satsumasendai-migration-support',
    title: '薩摩川内市 かごしまUIJターン移住支援金',
    organization: '薩摩川内市',
    type: 'local',
    maxAmount: '最大100万円＋子育て加算',
    maxAmountNum: 100,
    category: 'living',
    relatedCategories: ['employment'],
    prefecture: '鹿児島県',
    tags: ['薩摩川内市', '移住支援金', '東京圏', '子育て加算', '令和8年度'],
    eligibility: '東京23区の在住者または通勤者から薩摩川内市へ移住し、移住要件と就業要件を満たす就業をした方、または起業支援金の交付決定を受けた方など、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度制度として案内中。予算の範囲内で受付',
    description: '薩摩川内市が、東京圏からのUIJターン移住を促進するため、要件を満たす移住者へ移住支援金を給付する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>薩摩川内市のかごしまUIJターン移住支援金は、東京23区在住者または通勤者が薩摩川内市へ移住し、就業または起業等の要件を満たす場合に給付される支援金です。</p>' },
      { heading: '支給内容', content: '<p>公式ページでは、単身の場合は60万円、2人以上世帯の場合は100万円と案内されています。18歳未満の世帯員を帯同して移住する場合は子育て加算があり、令和5年4月1日以降の転入者は18歳未満1人につき100万円とされています。</p>' },
      { heading: '申請の注意点', content: '<p>移住支援金は予算の範囲内で対応され、予算の都合により申請期間内でも受付終了となることがあります。移住元要件、就業要件、世帯要件を事前に確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.satsumasendai.lg.jp/ijuteiju/josei_shien/1743.html',
    sourceName: '薩摩川内市 かごしまUIJターン移住支援金',
    sourceUrls: ['https://www.city.satsumasendai.lg.jp/ijuteiju/josei_shien/1743.html'],
    sourceNote: '薩摩川内市公式ページで、2026年3月23日更新、単身60万円、2人以上世帯100万円、18歳未満1人につき100万円の子育て加算、予算範囲内での受付を確認。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kirishima-startup-support',
    title: '霧島市 中小零細企業ビジネス展開支援事業（創業枠）',
    organization: '霧島市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '鹿児島県',
    tags: ['霧島市', '創業枠', '販路開拓', 'デジタル化', '令和8年度'],
    eligibility: '霧島市内の中小企業者で、法人登記または開業届から4年未満の法人・個人事業主など、創業枠の公式要件を満たす方が対象です。',
    applicationPeriod: '二次募集は2026年6月29日から2026年7月27日まで。三次募集は2026年8月下旬頃から2026年9月下旬頃予定',
    deadlineDate: '2026-07-27',
    description: '霧島市が、市内中小企業者の販路開拓やデジタル化など、生産性・収益性向上の取組を支援する補助事業です。創業枠では創業後間もない事業者も対象になります。',
    sections: [
      { heading: '制度の概要', content: '<p>霧島市中小零細企業ビジネス展開支援事業は、物価高騰や人件費上昇の影響を緩和し、新たな市場への販路開拓やデジタル化等の取組を支援する制度です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、創業枠1は対象経費の3分の2以内・上限30万円、創業枠2は対象経費の2分の1以内・上限30万円と案内されています。広報費は上限のうち10万円までです。</p>' },
      { heading: '申請の注意点', content: '<p>二次募集の申請前には、霧島商工会議所または霧島市商工会の事前確認を2026年7月17日までに受ける必要があります。交付決定前に完了した事業や支出は対象外です。</p>' }
    ],
    officialUrl: 'https://www.city-kirishima.jp/shoukoushinkou/machizukuri/shokogyo/hanrokaitaku/documents/r7tyuusyoureisaikigyobijines.html',
    sourceName: '霧島市 令和8年度霧島市中小零細企業ビジネス展開支援事業',
    sourceUrls: ['https://www.city-kirishima.jp/shoukoushinkou/machizukuri/shokogyo/hanrokaitaku/documents/r7tyuusyoureisaikigyobijines.html'],
    sourceNote: '霧島市公式ページで、2026年6月19日更新、二次募集2026年6月29日から7月27日、創業枠上限30万円、補助率3分の2または2分の1、事前確認期限を確認。旧生成データの創業支援補助金最大50万円から現行制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'naha-sme-support',
    title: '那覇市 中小企業者販路拡大支援事業',
    organization: '那覇市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '沖縄県',
    tags: ['那覇市', '中小企業', '販路拡大', '展示会', '令和8年度'],
    eligibility: '那覇市中小企業振興基本条例で定める中小企業者で、同種の助成金等を併用していないこと、過去の受給回数要件、暴力団排除要件など、公式要件を満たす事業者が対象です。',
    applicationPeriod: '2026年4月15日から2027年1月29日まで。期間中でも予算額に達し次第受付終了',
    deadlineDate: '2027-01-29',
    description: '那覇市が、市内中小企業者の商品・サービスの販路拡大を支援するため、県外・海外・オンラインの展示会、見本市、商談会、物産展等への参加経費の一部を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>那覇市中小企業者販路拡大支援事業は、市内中小企業者が自社の商品・サービスを県外、海外、オンライン等の展示会・商談会で販路拡大する取組を支援する補助制度です。</p>' },
      { heading: '助成内容', content: '<p>公式資料では、助成率は対象経費の2分の1、上限額は海外での事業実施100万円、県内外での事業実施50万円、オンラインでの事業実施25万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>募集期間は2026年4月15日から2027年1月29日までですが、期間中でも予算額に達し次第受付終了です。申請後、審査・交付決定を経て事業を実施する流れです。</p>' }
    ],
    officialUrl: 'https://www.city.naha.okinawa.jp/business/kigyouricchi/1003642/1011678.html',
    sourceName: '那覇市 令和8年度 中小企業者販路拡大支援事業',
    sourceUrls: [
      'https://www.city.naha.okinawa.jp/business/kigyouricchi/1003642/1011678.html',
      'https://www.city.naha.okinawa.jp/_res/projects/default_project/_page_/001/011/678/siryou1.pdf'
    ],
    sourceNote: '那覇市公式ページで、2026年5月25日更新、募集期間2026年4月15日から2027年1月29日、公式PDFで助成率2分の1、海外100万円・県内外50万円・オンライン25万円の上限を確認。旧生成データの最大50万円から現行最大100万円へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'urasoe-startup-support',
    title: '浦添市 産業振興補助金',
    organization: '浦添市',
    type: 'local',
    maxAmount: '最大60万円',
    maxAmountNum: 60,
    category: 'employment',
    relatedCategories: ['housing', 'living'],
    prefecture: '沖縄県',
    tags: ['浦添市', '産業振興', '家賃補助', '空き店舗', '令和8年度'],
    eligibility: '浦添市内で事業所を新設、または新設から3年以内の事業者で、家賃補助、空き店舗リフォーム補助、雇用支援補助の各メニューの公式要件を満たす方が対象です。',
    applicationPeriod: '毎年4月1日から2月末頃まで。年度予算の上限に到達次第受付終了',
    description: '浦添市が、市内で事業を始める創業者等を支援するため、施設賃借、空き店舗リフォーム、雇用支援の3つの補助メニューで経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>浦添市産業振興補助金は、市内で事業所を新設した事業者や創業者等を対象に、家賃補助、空き店舗リフォーム補助、雇用支援補助を行う制度です。</p>' },
      { heading: '補助内容', content: '<p>公式資料では、施設賃借事業は店舗賃料の半額を最大6か月分補助し、新規職員の採用人数に応じて月額5万円、7万5千円、10万円以内の上限が示されています。空き店舗活用等企業支援事業は改装費の半額・上限20万円、雇用支援事業は新規職員1人あたり月額2万円・上限48万円以内です。</p>' },
      { heading: '申請の注意点', content: '<p>受付は毎年4月1日から2月末頃までですが、年度予算の上限に到達次第終了します。空き店舗リフォーム補助は改装工事に着手する前の申請が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.urasoe.lg.jp/doc/2026032700082/',
    sourceName: '浦添市 令和8年度 浦添市産業振興補助金',
    sourceUrls: [
      'https://www.city.urasoe.lg.jp/doc/2026032700082/',
      'https://www.city.urasoe.lg.jp/doc/2026032700082/file_contents/file_20255283155443_1.pdf',
      'https://www.city.urasoe.lg.jp/doc/2026032700082/file_contents/file_20255283155542_1.pdf',
      'https://www.city.urasoe.lg.jp/doc/2026032700082/file_contents/file_20255283155627_1.pdf'
    ],
    sourceNote: '浦添市公式ページで、2026年4月1日公開・更新、受付期間、3補助メニューを確認。公式PDFで家賃補助最大6か月・月額最大10万円、空き店舗リフォーム上限20万円、雇用支援上限48万円を確認。旧生成データの創業支援補助金最大50万円から現行制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'nagasaki-city-housing-seismic',
    title: '長崎市 耐震改修の助成制度（木造戸建住宅）',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'housing',
    relatedCategories: ['disaster', 'living'],
    prefecture: '長崎県',
    tags: ['長崎市', '耐震改修', '木造戸建住宅', '除却', '令和8年度'],
    eligibility: '長崎市内の対象木造戸建住宅について、耐震診断、耐震改修、現地建替、防火改修、除却工事を行う所有者等で、公式要件を満たす方が対象です。',
    applicationPeriod: '耐震化総合支援事業は2026年4月13日から2026年10月30日まで。耐震診断・除却は2026年4月13日から2027年1月29日まで',
    deadlineDate: '2026-10-30',
    description: '長崎市が、木造戸建住宅の耐震化を進めるため、耐震診断、耐震改修、現地建替、防火改修、除却工事の費用を助成する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長崎市の耐震改修助成制度は、木造戸建住宅の耐震診断、耐震改修、現地建替、防火改修、除却工事を支援する制度です。令和8年度事業として受付中と案内されています。</p>' },
      { heading: '助成内容', content: '<p>公式ページでは、耐震診断費用13万6千円のうち11万3千円を助成、耐震改修工事と現地建替工事は費用の80%・上限100万円、防火改修工事は費用の50%・上限30万円、除却工事は費用の23%・上限30万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>耐震化総合支援事業の申請期間は2026年10月30日までです。補助金交付決定前に工事を開始した場合は助成対象外となるため、事前に建築指導課へ連絡してください。</p>' }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/page/1914.html',
    sourceName: '長崎市 耐震改修の助成制度（木造戸建住宅）',
    sourceUrls: ['https://www.city.nagasaki.lg.jp/page/1914.html'],
    sourceNote: '長崎市公式ページで、2026年4月13日更新、令和8年度事業、耐震診断11.3万円助成、耐震改修・現地建替上限100万円、防火改修・除却上限30万円、各申請期間を確認。旧生成データの最大60万円から現行上限100万円へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'nagasaki-city-sme-support',
    title: '長崎市 チャレンジ企業応援補助金',
    organization: '長崎市',
    type: 'local',
    maxAmount: '最大3,000万円',
    maxAmountNum: 3000,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '長崎県',
    tags: ['長崎市', '中小企業', '賃上げ', '成長分野', '令和8年度'],
    eligibility: '長崎市内の中小企業者等で、賃上げ環境整備、成長分野、地域経済牽引などの公式区分・要件を満たし、同一経費で他補助金等を受けていない事業者が対象です。',
    applicationPeriod: '申請期限は2026年9月30日。予算がなくなり次第受付終了',
    deadlineDate: '2026-09-30',
    description: '長崎市が、市内中小企業者等の賃上げ環境整備、成長分野への展開、生産性向上・業務効率化などを支援する補助制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>長崎市チャレンジ企業応援補助金は、令和9年2月末までに完了する事業を対象に、賃上げ環境整備、成長分野、地域経済牽引などの取組を支援する補助金です。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、賃上げ環境整備の補助限度額は100万円、賃上げ実施における賃金増加額ごとの補助限度額は、通常枠200万円、成長分野枠600万円、地域経済牽引枠3,000万円と案内されています。補助率は要件に応じて3分の2または2分の1です。</p>' },
      { heading: '申請の注意点', content: '<p>申請期限は2026年9月30日ですが、予算がなくなり次第受付終了です。補助対象事業は令和9年2月末までに完了する必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.nagasaki.lg.jp/page/76401.html',
    sourceName: '長崎市 チャレンジ企業応援補助金',
    sourceUrls: ['https://www.city.nagasaki.lg.jp/page/76401.html'],
    sourceNote: '長崎市公式ページで、2026年4月17日更新、補助率3分の2または2分の1、賃上げ環境整備100万円、賃金増加額ごとの上限200万円・600万円・3,000万円、申請期限2026年9月30日を確認。旧生成データの中小企業設備投資補助金最大100万円から現行制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'kurume-migration-family-support-2026',
    title: '久留米市 くるめ暮らし・移住ファミリー支援事業補助金',
    organization: '久留米市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    relatedCategories: ['living', 'childcare'],
    prefecture: '福岡県',
    tags: ['久留米市', '移住', '住宅取得', '子育て世帯', '令和8年度'],
    eligibility: '久留米市内に自己居住用住宅を取得し、市外から転入した方、または市内賃貸住宅等への転入後2年以内に市内住宅取得契約を行い、契約から原則1年以内に市内転居した方で、公式要件を満たす世帯が対象です。',
    applicationPeriod: '基準日から1年以内。令和8年度の申請は2027年2月26日まで。予算上限に達し次第受付終了',
    deadlineDate: '2027-02-26',
    description: '久留米市が、市外からの移住と住宅取得を後押しするため、移住世帯に基本額と子育て・移住元・三世代近居・市内就労などの加算を交付する補助制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>くるめ暮らし・移住ファミリー支援事業補助金は、久留米市へ移住し、市内で自己居住用住宅を取得した方を支援する補助金です。直接市外から転入して住宅を取得した場合に加え、いったん市内賃貸住宅等へ転入した後、一定期間内に市内住宅を取得するステップ移住も対象になります。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、基本額5万円に、対象となる加算項目に応じた加算額を上乗せすると案内されています。加算額は最大25万円で、中学生以下の子どもと同居している世帯または出産予定がある世帯の加算20万円、三大都市圏・福岡都市圏からの移住加算5万円、三世代市内近居加算5万円、市内就労者加算5万円などがあります。</p>' },
      { heading: '申請の注意点', content: '<p>申請期限は、取得住宅の所有権登記日と転入・転居日のうち遅い日を基準日として1年以内です。令和8年度の申請は2027年2月26日までですが、予算上限に達した場合は期限前に受付終了となります。</p>' }
    ],
    officialUrl: 'https://www.kurumepr.com/main/104.html',
    sourceName: '久留米市 くるめ暮らし・移住ファミリー支援事業補助金',
    sourceUrls: ['https://www.kurumepr.com/main/104.html'],
    sourceNote: '久留米市関連の公式移住情報ページで、令和8年度申請を2026年4月1日から受付、申請期限2027年2月26日、基本額5万円、加算額最大25万円、子育て世帯加算20万円などを確認。新規の公式確認済み移住・住宅取得支援として追加。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'karatsu-startup-support',
    title: '唐津市 中小企業者等活性化支援事業費補助金（創業支援分）',
    organization: '唐津市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '佐賀県',
    tags: ['唐津市', '創業支援', '空き店舗', '移住創業', '令和8年度'],
    eligibility: '唐津市内の空き店舗等で新規創業または新規出店に取り組む市民など、創業支援分の公式要件を満たす中小企業者等が対象です。',
    applicationPeriod: '創業支援分は2026年12月28日まで。予算上限に達した場合は募集締切',
    deadlineDate: '2026-12-28',
    description: '唐津市が、市内の空き店舗等を活用した新規創業・新規出店を支援するため、創業に必要な経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>唐津市中小企業者等活性化支援事業費補助金の創業支援分は、市民が市内の空き店舗などで実施する新規創業または新規出店の取組を支援する制度です。既存の生成データでは一般的な創業支援補助金として案内していましたが、公式ページに合わせて現行制度名と要件に修正しています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、創業支援分の補助限度額は通常枠100万円、移住創業枠も100万円と案内されています。補助対象経費の額が30万円未満の事業は補助対象外です。</p>' },
      { heading: '申請の注意点', content: '<p>創業支援分の申請期限は2026年12月28日です。受付順に随時審査され、交付決定日以後に事業開始する必要があります。申請額が予算上限に達した場合は募集が締め切られます。</p>' }
    ],
    officialUrl: 'https://www.city.karatsu.lg.jp/site/navi/2102.html',
    sourceName: '唐津市 中小企業者等活性化支援事業費補助金',
    sourceUrls: ['https://www.city.karatsu.lg.jp/site/navi/2102.html'],
    sourceNote: '唐津市公式ページで、令和8年度の創業支援分、申請期限2026年12月28日、通常枠・移住創業枠の補助限度額100万円、交付決定後着手と予算上限到達時の締切を確認。旧生成データの汎用的な創業支援説明を公式制度へ置換。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'omuta-housing-reform',
    title: '大牟田市 空き家活用リフォーム等支援事業',
    organization: '大牟田市',
    type: 'local',
    maxAmount: '最大50万円',
    maxAmountNum: 50,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '福岡県',
    tags: ['大牟田市', '空き家', 'リフォーム', '若年世帯', '子育て世帯'],
    eligibility: '大牟田市内の空き家を活用し、リフォーム等を行う方で、対象住宅・対象工事・居住要件など公式要件を満たす方が対象です。',
    applicationPeriod: '受付中。予算が終了次第、申請受付終了',
    description: '大牟田市が、空き家の有効活用と定住促進を進めるため、空き家のリフォーム等にかかる費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>大牟田市空き家活用リフォーム等支援事業は、市内の空き家を活用するためのリフォーム等を支援する補助制度です。既存の生成データでは住宅改修補助事業・上限15万円としていましたが、公式ページで確認できる現行制度に合わせて修正しています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象経費（税抜）に2分の1を乗じた額を補助し、補助限度額は50万円と案内されています。家財道具整理等のみの場合の補助限度額は20万円です。</p>' },
      { heading: '申請の注意点', content: '<p>補助対象経費の範囲は工事内容によって確認が必要です。予算には限りがあり、予算終了次第、申請書の受付も終了します。工事内容が分かる資料を用意し、事前に市建築住宅課へ確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.omuta.lg.jp/kiji00321463/index.html',
    sourceName: '大牟田市空き家活用リフォーム等支援事業',
    sourceUrls: [
      'https://www.city.omuta.lg.jp/kiji00321463/index.html',
      'https://www.city.omuta.lg.jp/kiji00321463/3_21463_129736_up_anuye7ew.pdf',
      'https://www.city.omuta.lg.jp/kiji00321463/3_21463_129583_up_3xtttxl2.pdf'
    ],
    sourceNote: '大牟田市公式ページで、空き家活用リフォーム等支援事業、補助対象経費税抜の2分の1、補助限度額50万円、家財道具整理等のみの場合20万円、予算終了次第受付終了を確認。旧生成データの住宅改修補助事業最大15万円から現行制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'yatsushiro-housing-seismic',
    title: '八代市 戸建木造住宅耐震化支援事業',
    organization: '八代市',
    type: 'local',
    maxAmount: '最大157.5万円',
    maxAmountNum: 157.5,
    category: 'housing',
    relatedCategories: ['disaster', 'living'],
    prefecture: '熊本県',
    tags: ['八代市', '耐震改修', '木造住宅', '建替え', '令和8年度'],
    eligibility: '八代市内の対象戸建木造住宅について、耐震診断、耐震改修設計、耐震改修工事、耐震改修設計工事、耐震建替工事、耐震シェルター工事などを行う所有者等で、公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度まで拡充。申請前に建築指導課へ事前相談が必要',
    description: '八代市が、戸建木造住宅の耐震化を進めるため、耐震診断士派遣や耐震改修・建替え・耐震シェルター設置などの費用を支援する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>八代市戸建木造住宅耐震化支援事業は、地震に備えて木造住宅の耐震診断や耐震改修等を支援する制度です。公式ページでは、平成12年5月31日までに着工した住宅に対する補助額を令和8年度まで増額すると案内されています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、耐震改修設計は3分の2以内・上限20万円、耐震改修工事は2分の1以内・上限60万円、耐震シェルター工事は2分の1以内・上限20万円と案内されています。耐震改修設計工事または耐震建替工事は、対象住宅・世帯要件により最大157.5万円まで補助されます。</p>' },
      { heading: '申請の注意点', content: '<p>補助金の交付決定前に着手や契約をした場合は補助対象外です。建替えの場合は、建替設計、解体工事、新築工事の一連の流れすべてについて、着手・契約前の補助申請が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.yatsushiro.lg.jp/kiji00325525/index.html',
    sourceName: '八代市 ご自宅の耐震化を支援します',
    sourceUrls: ['https://www.city.yatsushiro.lg.jp/kiji00325525/index.html'],
    sourceNote: '八代市公式ページで、令和7年1月から令和9年3月までの支援拡充、令和8年度までの補助額増額、耐震改修設計上限20万円、耐震改修工事上限60万円、耐震改修設計工事・耐震建替工事最大157.5万円、交付決定前着手不可を確認。旧生成データの住宅耐震改修補助金最大100万円から現行制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'tosu-startup-support',
    title: '鳥栖市 創業支援事業補助金',
    organization: '鳥栖市',
    type: 'local',
    maxAmount: '信用保証料の2分の1',
    maxAmountNum: 0,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '佐賀県',
    tags: ['鳥栖市', '創業支援', '信用保証料', 'さが創生貸付', '令和8年度'],
    eligibility: '鳥栖市内で新規に創業し事務所等を開設する方で、2026年4月1日から2027年3月31日までに佐賀県のさが創生貸付【独立・創業資金】の融資を受け、当該信用保証料を納入した方が対象です。',
    applicationPeriod: '融資実行日から60日以内',
    description: '鳥栖市が、市内で新規創業する方を対象に、佐賀県のさが創生貸付【独立・創業資金】の融資に係る信用保証料の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>鳥栖市創業支援事業補助金は、佐賀県のさが創生貸付【独立・創業資金】を利用して市内で新規創業する方に対し、融資に係る信用保証料の一部を補助する制度です。既存の生成データでは創業初期費用の一般的な補助としていましたが、公式ページに合わせて信用保証料補助へ修正しています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、一括払いの場合は信用保証料の支払額全額の2分の1、分割払いの場合は信用保証料の初回支払額の2分の1を補助すると案内されています。1円未満の端数は切り捨てです。</p>' },
      { heading: '申請の注意点', content: '<p>対象となる融資期間は2026年4月1日から2027年3月31日までです。融資実行日から60日以内に、鳥栖市商工観光課窓口へ申請書類を提出する必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.tosu.lg.jp/soshiki/18/2428.html',
    sourceName: '鳥栖市創業支援事業補助金',
    sourceUrls: ['https://www.city.tosu.lg.jp/soshiki/18/2428.html'],
    sourceNote: '鳥栖市公式ページで、令和8年4月1日から令和9年3月31日までに佐賀県のさが創生貸付【独立・創業資金】を受けた新規創業者が対象、一括払いは信用保証料支払額の2分の1、分割払いは初回支払額の2分の1、融資実行日から60日以内申請を確認。旧生成データの創業初期費用最大50万円から現行の信用保証料補助へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'amakusa-startup-support',
    title: '天草市 起業創業資金利子補給補助金',
    organization: '天草市',
    type: 'local',
    maxAmount: '最大120万円',
    maxAmountNum: 120,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '熊本県',
    tags: ['天草市', '創業支援', '利子補給', '創業資金', '中小企業'],
    eligibility: '天草市内の中小企業者等で、起業時に創業資金として熊本県創業者支援資金、日本政策金融公庫などの融資を受け、公式要件を満たす事業者が対象です。',
    applicationPeriod: '利子を支払った翌年1月から2月末日まで',
    description: '天草市が、市内で起業する中小企業者等の資金負担を軽減するため、創業資金として借り入れた融資の利子の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>天草市起業創業資金利子補給補助金は、市内の中小企業者等が起業時に創業資金として借り入れた融資に対して、利子補給補助金を交付する制度です。既存の生成データでは創業初期費用の補助としていましたが、公式ページに合わせて利子補給制度として修正しています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助対象融資額は1事業者あたり2,000万円まで、対象利子割合は年利3.0%以内と案内されています。補助上限額は、毎年1月1日から12月31日までの期間で40万円まで、3年間で最大120万円です。</p>' },
      { heading: '申請の注意点', content: '<p>申請期間は、利子を支払った翌年1月から2月末日までです。熊本県創業者支援資金、日本政策金融公庫などの融資が対象として案内されているため、借入内容が対象になるか事前に市へ確認してください。</p>' }
    ],
    officialUrl: 'https://www.city.amakusa.kumamoto.jp/kiji0039185/index.html',
    sourceName: '天草市起業創業資金利子補給補助金（創業者向け）',
    sourceUrls: ['https://www.city.amakusa.kumamoto.jp/kiji0039185/index.html'],
    sourceNote: '天草市公式ページで、補助対象融資額1事業者2,000万円まで、対象利子割合年利3.0%以内、上限額40万円×3年間で最大120万円、申請期間は利子を支払った翌年1月から2月末日までと確認。旧生成データの創業支援補助金最大50万円から現行の利子補給制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'amakusa-juutaku-reform',
    title: '天草市 戸建て木造住宅耐震改修等事業',
    organization: '天草市',
    type: 'local',
    maxAmount: '最大157.5万円',
    maxAmountNum: 157.5,
    category: 'housing',
    relatedCategories: ['disaster', 'living'],
    prefecture: '熊本県',
    tags: ['天草市', '耐震診断', '耐震改修', '木造住宅', '令和8年度'],
    eligibility: '天草市内の対象戸建て木造住宅の所有者で、市税の滞納がなく、耐震診断、耐震改修設計、耐震改修工事、耐震改修設計工事などの公式要件を満たす方が対象です。',
    applicationPeriod: '令和8年度の申請受付中。申請を検討する場合は事前相談が必要',
    description: '天草市が、平成12年5月31日以前に着工した戸建て木造住宅の耐震化を促進するため、耐震診断や耐震改修などにかかる費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>天草市戸建て木造住宅耐震改修等事業は、戸建て木造住宅の耐震診断、耐震改修設計、耐震改修工事、耐震改修設計工事などを支援する制度です。公式ページでは、令和8年度の申請受付開始と、一部補助額の令和8年度までの増額が案内されています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、耐震診断は費用の10分の9・上限15.8万円、耐震改修設計は3分の2・上限20万円、耐震改修工事は2分の1・上限60万円と案内されています。耐震改修設計工事の一括補助は、対象住宅・世帯要件により最大157.5万円まで補助されます。</p>' },
      { heading: '申請の注意点', content: '<p>耐震改修などは、耐震診断の結果、倒壊の危険があると判断されたものだけが対象になるメニューがあります。条件によって補助率や補助額が変わるため、申請前に天草市へ相談してください。</p>' }
    ],
    officialUrl: 'https://www.city.amakusa.kumamoto.jp/kiji0031649/index.html',
    sourceName: '天草市 耐震診断、耐震改修などにかかる費用の一部を補助',
    sourceUrls: ['https://www.city.amakusa.kumamoto.jp/kiji0031649/index.html'],
    sourceNote: '天草市公式ページで、令和8年度申請受付、令和8年度までの一部増額、耐震診断上限15.8万円、耐震改修設計上限20万円、耐震改修工事上限60万円、耐震改修設計工事最大157.5万円を確認。旧生成データの住宅リフォーム助成金最大30万円から現行の耐震改修等事業へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'beppu-sme-support',
    title: '別府市 創業支援事業補助金',
    organization: '別府市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '大分県',
    tags: ['別府市', '創業支援', 'スタートアップ', '特定創業支援', '令和8年度'],
    eligibility: '別府市内に住所を有し、市内で創業予定または2026年4月1日時点で創業後5年未満の中小企業者等で、特定創業支援等事業による創業相談または経営指導を受けるなど公式要件を満たす方が対象です。',
    applicationPeriod: '2026年5月1日から2026年6月30日17時まで',
    deadlineDate: '2026-06-30',
    description: '別府市が、市内で新たに創業しようとする方を支援し、新たな雇用の創出を図るため、創業に必要な経費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>別府市創業支援事業補助金は、市内で創業する方や創業後間もない中小企業者等を支援する制度です。既存の生成データでは中小企業支援としていましたが、公式ページに合わせて令和8年度の創業支援事業補助金として修正しています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、補助率は補助対象経費の3分の2以内、補助金額は上限100万円と案内されています。補助対象経費の詳細は募集要項で確認する必要があります。</p>' },
      { heading: '申請の注意点', content: '<p>申請受付期間は2026年5月1日から2026年6月30日17時までです。補助事業完了後の補助金交付となるため、補助対象期間中は借入金等で必要資金を調達する必要があります。</p>' }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/sangyou/sangyousinkou/sougyou/sogyo_shien.html',
    sourceName: '別府市 令和8年度別府市創業支援事業補助金',
    sourceUrls: ['https://www.city.beppu.oita.jp/sangyou/sangyousinkou/sougyou/sogyo_shien.html'],
    sourceNote: '別府市公式ページで、令和8年度創業支援事業補助金、申請受付期間2026年5月1日から6月30日17時、補助率3分の2以内、上限100万円、特定創業支援等事業による創業相談または経営指導要件を確認。旧生成データの中小企業支援を現行創業支援へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'beppu-housing-purchase',
    title: '別府市 空き家利活用補助金',
    organization: '別府市',
    type: 'local',
    maxAmount: '最大30万円',
    maxAmountNum: 30,
    category: 'housing',
    relatedCategories: ['living'],
    prefecture: '大分県',
    tags: ['別府市', '空き家バンク', '移住', '空き家改修', '令和8年度'],
    eligibility: '別府市の空き家バンク物件または空き家マッチングチームによりマッチングした物件へ定住する移住者、または空き家バンク登録を行う空き家所有者等で、公式要件を満たす方が対象です。',
    applicationPeriod: '2026年5月7日から2027年1月29日まで。予算に達し次第終了',
    deadlineDate: '2027-01-29',
    description: '別府市が、空き家バンク登録や県外等からの移住者による空き家利活用を促進するため、家財処分、改修、購入にかかる費用の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>別府市空き家利活用補助金は、空き家バンクへ登録するための家財処分費用や、移住者が空き家バンク物件等に居住するための改修・購入費用を支援する制度です。既存の生成データでは住宅購入補助としていましたが、公式ページの空き家利活用制度へ修正しています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、家財処分事業は補助対象経費の2分の1以内・上限10万円、空き家改修または購入事業は補助対象経費の2分の1以内・上限30万円と案内されています。</p>' },
      { heading: '申請の注意点', content: '<p>令和8年度の申請は2026年5月7日から受付開始です。申請受付は2027年1月29日までですが、予算に達し次第終了します。家財処分事業・改修事業は実施前に補助金申請が必要です。</p>' }
    ],
    officialUrl: 'https://www.city.beppu.oita.jp/sisei/ijyuu/kyojyuu_hojyo.html',
    sourceName: '別府市空き家利活用補助金交付制度',
    sourceUrls: ['https://www.city.beppu.oita.jp/sisei/ijyuu/kyojyuu_hojyo.html'],
    sourceNote: '別府市公式ページで、令和8年度申請は2026年5月7日開始、申請期限2027年1月29日、家財処分上限10万円、空き家改修または購入上限30万円、補助率2分の1、予算到達次第終了を確認。旧生成データの住宅購入補助から現行の空き家利活用補助金へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'nakatsu-startup-support',
    title: '中津市 中山間地域創業・事業承継支援事業補助金',
    organization: '中津市',
    type: 'local',
    maxAmount: '最大100万円',
    maxAmountNum: 100,
    category: 'employment',
    relatedCategories: ['living'],
    prefecture: '大分県',
    tags: ['中津市', '中山間地域', '創業支援', '事業承継', '令和8年度'],
    eligibility: '中津市の中山間地域で創業または事業承継を行う方など、公式の対象者・対象事業要件を満たし、2027年2月26日までに実績報告が可能な事業者が対象です。',
    applicationPeriod: '2027年2月26日までに実績報告ができるように申請。創業は事業開始前申請',
    deadlineDate: '2027-02-26',
    description: '中津市が、中山間地域での創業や事業承継を支援し、地域内の事業継続と雇用創出を促す補助制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>中津市中山間地域創業・事業承継支援事業補助金は、中山間地域での創業や事業承継を支援する制度です。既存の生成データでは市内全般の創業支援としていましたが、公式ページに合わせて中山間地域向け制度へ修正しています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、中山間地域以外の市内居住者は対象経費の2分の1以内、補助限度額100万円と案内されています。対象者区分により補助率・条件が異なるため、事前相談が必要です。</p>' },
      { heading: '申請の注意点', content: '<p>申請にあたっては創業・事業承継の事業計画書の提出が必要です。2027年2月26日までに実績報告ができるよう申請し、創業の場合は事業開始前に申請してください。</p>' }
    ],
    officialUrl: 'https://www.city-nakatsu.jp/doc/2025041400037/',
    sourceName: '中津市 中山間地域創業・事業承継支援事業補助金',
    sourceUrls: ['https://www.city-nakatsu.jp/doc/2025041400037/'],
    sourceNote: '中津市公式ページで、中山間地域創業・事業承継支援事業補助金、令和9年2月26日までに実績報告可能な事業、対象経費2分の1以内・上限100万円、創業は事業開始前申請を確認。旧生成データの汎用創業支援から現行制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
  {
    slug: 'nakatsu-housing-reform',
    title: '中津市 子育て・高齢者世帯リフォーム支援事業',
    organization: '中津市',
    type: 'local',
    maxAmount: '最大85万円',
    maxAmountNum: 85,
    category: 'housing',
    relatedCategories: ['childcare', 'living'],
    prefecture: '大分県',
    tags: ['中津市', '子育て世帯', '三世代同居', 'リフォーム', '令和8年度'],
    eligibility: '中津市内の対象住宅で、子育て支援型または三世代同居支援型の工事要件を満たす世帯が対象です。多子世帯は上限加算の対象になる場合があります。',
    applicationPeriod: '令和8年度受付中。予算に限りがあるため早めの申請が必要',
    description: '中津市が、子育て世帯や三世代同居世帯の住環境整備を支援するため、対象リフォーム工事費の一部を補助する制度です。',
    sections: [
      { heading: '制度の概要', content: '<p>中津市子育て・高齢者世帯リフォーム支援事業は、子育て支援型と三世代同居支援型のリフォームを支援する制度です。既存の生成データでは一般的な住宅リフォーム促進事業としていましたが、公式ページに合わせて令和8年度制度へ修正しています。</p>' },
      { heading: '補助内容', content: '<p>公式ページでは、子育て支援型は補助対象工事費の20%以内・上限40万円、多子世帯の場合は上限50万円と案内されています。三世代同居支援型は補助対象工事費の50%以内・上限75万円、多子世帯の場合は上限85万円です。</p>' },
      { heading: '申請の注意点', content: '<p>工事要件や世帯要件により対象可否が変わります。インターネット申請フォームが用意されていますが、申請が難しい場合は子育て支援課へ電話または窓口で相談できます。</p>' }
    ],
    officialUrl: 'https://www.city-nakatsu.jp/doc/2024061200108/',
    sourceName: '中津市 令和8年度子育て・高齢者世帯リフォーム支援事業',
    sourceUrls: ['https://www.city-nakatsu.jp/doc/2024061200108/'],
    sourceNote: '中津市公式ページで、令和8年度子育て・高齢者世帯リフォーム支援事業、子育て支援型20%以内・上限40万円、多子世帯上限50万円、三世代同居支援型50%以内・上限75万円、多子世帯上限85万円を確認。旧生成データの住宅リフォーム最大20万円から現行制度へ修正。',
    verifiedAt,
    publishedAt: '2026-06-27',
  },
];
