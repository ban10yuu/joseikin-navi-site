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
  {
    slug: 'fukui-migration-employment',
    title: '福井県 移住支援金（東京圏型）',
    organization: '福井県・県内市町',
    type: 'local',
    maxAmount: '世帯100万円以上・単身60万円、18歳未満加算あり',
    maxAmountNum: 100,
    category: 'living',
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
];
