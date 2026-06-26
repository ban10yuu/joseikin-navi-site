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
];
