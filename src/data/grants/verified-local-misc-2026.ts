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
];
