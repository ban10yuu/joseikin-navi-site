import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-24';

export const verifiedPrefectureChildMedicalGrants2026: Grant[] = [
  {
    slug: 'chiba-child-medical',
    title: '千葉県 子ども医療費助成制度',
    organization: '千葉県 子育て支援課',
    type: 'local',
    maxAmount: '子どもの医療費自己負担を県と市町村で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '千葉県',
    tags: ['千葉県', '子ども医療費', '市町村申請', '受給券'],
    eligibility: '千葉県内の市町村に住所がある子どもが対象です。対象年齢、自己負担額、所得制限は市町村ごとに異なります。',
    applicationPeriod: '通年（住所地の市町村で受給券等を申請）',
    description: '千葉県の子ども医療費助成制度です。子どもの保健対策を充実し、子育て世帯の経済的負担を軽減するため、子どもが病気やけがなどで受診した場合の医療費を県と市町村で助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子どもが病気やけがで医療機関を受診した場合、医療保険の自己負担分について、千葉県と市町村が助成する制度です。制度は市町村単位で実施され、受給券の交付や償還払いの手続きも市町村で行います。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>対象年齢、自己負担額、所得制限、現物給付・償還払いの扱いは市町村ごとに異なります。受給券が交付されている場合は、医療機関で健康保険資格とあわせて提示します。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町村の子ども医療費担当課で申請します。申請には、子どもの健康保険資格が分かる書類、保護者の本人確認書類、所得確認書類、振込先口座などが必要になる場合があります。詳細は受給券裏面や市町村窓口で確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.chiba.lg.jp/jika/boshi/kodomo-iryo/nyuuyouji.html',
    sourceName: '千葉県 子ども医療費助成制度について',
    sourceUrls: [
      'https://www.pref.chiba.lg.jp/jika/boshi/kodomo-iryo/nyuuyouji.html',
      'https://www.pref.chiba.lg.jp/kodomo/riyo/kohi.html'
    ],
    sourceNote: '制度の趣旨、県と市町村の共同助成、市町村担当課への問い合わせを千葉県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'yamagata-child-medical',
    title: '山形県 子育て支援医療制度',
    organization: '山形県・県内市町村',
    type: 'local',
    maxAmount: '市町村ごとに子どもの医療費を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '山形県',
    tags: ['山形県', '子育て支援医療', '子ども医療費', '市町村申請'],
    eligibility: '山形県内の市町村に住所がある子どもが対象です。対象年齢、一部負担金、申請手続きは市町村ごとに異なります。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '山形県の子育て支援医療制度です。県内市町村が実施する子どもの医療費助成について、対象年齢、一部負担金、担当課、手続き先を県の子育て支援ポータルで案内しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山形県内の各市町村が、子育て世帯の医療費負担を軽減するため、子どもの医療費助成を実施しています。県の子育て支援ポータルでは、市町村ごとの担当課、電話番号、対象年齢、一部負担金、手続き先を確認できます。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>対象となる子どもの年齢や助成範囲は市町村により異なります。医療保険の自己負担分を助成する制度ですが、入院時食事療養費や保険外診療などが対象外となる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町村の子育て支援、国保年金、健康推進等の担当課で受給資格証等を申請します。子どもの健康保険資格が分かる書類、本人確認書類、所得確認書類など、必要書類は市町村の案内に従って準備します。</p>'
      }
    ],
    officialUrl: 'https://kosodate.pref.yamagata.jp/kosodate/support-medical-system',
    sourceName: '山形県子育て支援情報サイト 子育て支援医療制度',
    sourceUrls: [
      'https://kosodate.pref.yamagata.jp/kosodate/support-medical-system',
      'https://www.pref.yamagata.jp/kenfuku/kosodate/shoni/index.html'
    ],
    sourceNote: '市町村ごとの担当課、対象年齢、一部負担金、手続き先を山形県の子育て支援ポータルで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'fukushima-child-support',
    title: '福島県 子どもの医療費助成',
    organization: '福島県 児童家庭課',
    type: 'local',
    maxAmount: '18歳以下の医療費を無料化',
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '福島県',
    tags: ['福島県', '子ども医療費', '18歳以下無料', '子育て支援'],
    eligibility: '18歳に達する年度の3月末日までにある人で、福島県内に住所がある人が対象です。',
    applicationPeriod: '通年（住所地の市町村で申請・受給資格確認）',
    description: '福島県の子どもの医療費助成です。県内全市町村で18歳以下の医療費を無料化しており、健康保険適用の診療で支払うべき自己負担額等を助成します。',
    sections: [
      {
        heading: '対象者',
        content: '<p>対象は、18歳に達する年度の3月末日までにある人で、県内に住所がある人です。健康保険に加入していることが前提となります。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>対象者が健康保険適用の診療を受けた時に支払う自己負担額や入院時食事療養費等を助成します。予防接種、薬の容器代、紹介状なし受診時の特定料金など、健康保険が適用されないものは対象外です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>受給資格や手続きは住所地の市町村窓口で確認します。受給者証の交付、医療機関での提示、県外受診時の償還払いなど、市町村の案内に従って手続きします。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukushima.lg.jp/sec/21035a/kodomoiryouhi.html',
    sourceName: '福島県 子どもの医療費助成',
    sourceUrls: ['https://www.pref.fukushima.lg.jp/sec/21035a/kodomoiryouhi.html'],
    sourceNote: '18歳以下無料化、対象者、助成内容、手続き案内を福島県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'ibaraki-child-medical',
    title: '茨城県 医療福祉費支給制度（小児マル福）',
    organization: '茨城県',
    type: 'local',
    maxAmount: '小児の医療費自己負担を一部助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '茨城県',
    tags: ['茨城県', 'マル福', '小児医療費', '市町村申請'],
    eligibility: '茨城県内に住所があり、医療保険に加入し、所得が一定以下の小児等が対象です。市町村により対象年齢拡大や所得制限緩和があります。',
    targetIncome: '所得制限あり。ただし市町村により独自拡充あり。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '茨城県の医療福祉費支給制度（マル福）のうち、小児を対象とする医療費助成です。医療保険の自己負担分を軽減する制度で、外来・入院の一部負担金や市町村独自拡充があります。',
    sections: [
      {
        heading: '対象者',
        content: '<p>医療保険に加入し、所得が一定以下である小児等が対象です。市町村によって、所得制限なし、自己負担金の助成、対象年齢拡大など独自に制度を拡充している場合があります。</p>'
      },
      {
        heading: '自己負担の目安',
        content: '<div class="summary-box" data-title="県制度の自己負担"><p>外来：1医療機関ごと1日600円、月2回まで</p><p>入院：1医療機関ごと1日300円、月3,000円まで</p><p>調剤薬局は外来自己負担の対象外</p></div><p>差額ベッド代、健康診断、自費診療など、医療保険適用外の診療等はマル福の対象外です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町村で受給者証の申請を行います。健康保険資格が分かる書類、所得確認書類、本人確認書類などを準備します。市町村の小児マル福実施状況も確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ibaraki.jp/hokenfukushi/koso/fukushi/koso/guide/guide03.html',
    sourceName: '茨城県 医療福祉（マル福）について',
    sourceUrls: [
      'https://www.pref.ibaraki.jp/hokenfukushi/koso/fukushi/koso/guide/guide03.html',
      'https://www.pref.ibaraki.jp/hokenfukushi/koso/kokumin/koso/index.html'
    ],
    sourceNote: '小児マル福の対象、自己負担、市町村独自拡充の注意点を茨城県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'gunma-child-medical',
    title: '群馬県 子ども医療費助成',
    organization: '群馬県',
    type: 'local',
    maxAmount: '高校生世代まで医療費無料',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '群馬県',
    tags: ['群馬県', '子ども医療費', '高校生世代まで', '所得制限なし'],
    eligibility: '18歳に達する日以後の最初の3月31日までの子どもが対象です。県内全市町村で同一条件の無料化が実施されています。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '群馬県の子ども医療費助成です。令和5年10月から高校生世代まで、入院・通院ともに所得制限なし、受診時の自己負担なし、窓口での立替払いなしとなっています。',
    sections: [
      {
        heading: '対象者',
        content: '<p>対象は、高校生世代までの子ども、具体的には18歳に達する日以後の最初の3月31日までの子どもです。県内全市町村で同一条件に統一されています。</p>'
      },
      {
        heading: '助成内容',
        content: '<div class="summary-box" data-title="令和5年10月からの条件"><p>入院・通院ともに対象</p><p>所得制限なし</p><p>受診時の自己負担なし</p><p>窓口での立替払いなし</p></div><p>医療費等のうち自己負担分を市町村が負担し、県がその一部を補助する仕組みです。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市役所・町村役場で申請し、認定を受ける必要があります。認定後、「福祉医療費受給資格者証」の交付を受け、医療機関の窓口で提示します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.gunma.jp/page/3173.html',
    sourceName: '群馬県 子ども医療費助成',
    sourceUrls: [
      'https://www.pref.gunma.jp/page/3173.html',
      'https://www.pref.gunma.jp/site/houdou/608581.html'
    ],
    sourceNote: '高校生世代までの無料化、所得制限なし、受給資格者証の申請を群馬県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'ishikawa-child-medical',
    title: '石川県 子どもの医療費助成',
    organization: '石川県 少子化対策監室',
    type: 'local',
    maxAmount: '市町ごとの自己負担額を超える部分を助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '石川県',
    tags: ['石川県', '子ども医療費', '乳幼児医療', 'ひとり親医療'],
    eligibility: '石川県内市町に住所がある乳幼児・子ども等が対象です。対象年齢、自己負担額、支給方法は市町により異なります。',
    applicationPeriod: '通年（住所地の市町で申請）',
    description: '石川県の子どもの医療費助成です。乳幼児やひとり親家庭等を対象に、保険診療の一部負担金について、制度で定める月額自己負担額を超えた部分を県と市町が助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>石川県では、乳幼児やひとり親家庭等の医療費助成を案内しています。乳幼児（子ども）医療費助成制度では、乳幼児の疾病の早期発見と早期治療を促進し、保健の向上と福祉の増進を図ります。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>対象年齢、自己負担の有無、支給方法は市町によって異なります。子ども医療費助成とひとり親家庭等医療費助成の両方に該当する場合は、どちらの制度が適用されるかを市町に確認します。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町で医療費助成の受給資格を申請します。健康保険資格が分かる書類、本人確認書類、所得確認書類など、市町の案内に従って提出します。現物給付方式の対象医療機関や市町の公費負担番号も確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.ishikawa.lg.jp/kosodate/05boshi/kodomoiryouhi.html',
    sourceName: '石川県 子どもの医療費助成について',
    sourceUrls: [
      'https://www.pref.ishikawa.lg.jp/kosodate/05boshi/kodomoiryouhi.html',
      'https://www.pref.ishikawa.lg.jp/kosodate/05boshi/documents/iryoutebiki.pdf'
    ],
    sourceNote: '乳幼児（子ども）医療費助成、ひとり親家庭等医療費助成、現物給付方式の扱いを石川県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'yamanashi-child-medical',
    title: '山梨県 乳幼児医療費助成',
    organization: '山梨県',
    type: 'local',
    maxAmount: '乳幼児医療費を市町村で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '山梨県',
    tags: ['山梨県', '乳幼児医療', '子ども医療費', '市町村申請'],
    eligibility: '山梨県内の市町村に住所がある乳幼児等が対象です。対象年齢や助成範囲は市町村により異なります。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '山梨県の乳幼児医療費助成です。住所地の市町村に申請し、乳幼児医療費助成金受給資格者証の交付を受けることで、医療費助成を利用できます。',
    sections: [
      {
        heading: '対象者',
        content: '<p>山梨県内の市町村に住所がある乳幼児等が対象です。対象年齢、所得制限、助成対象となる費用は市町村により異なります。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>医療保険で医療を受けた場合の自己負担分について、市町村が助成します。県外医療機関での受診、受給資格者証と保険証を提示しなかった場合、療養費払いとなる場合などは、いったん支払った後に償還払いとなります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町村に申請し、乳幼児医療費助成金受給資格者証の交付を受けます。領収書による償還払いが必要な場合は、支払証明や領収書等を持って市町村の助成担当窓口に申請します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamanashi.jp/kosodate/71890998147.html',
    sourceName: '山梨県 乳幼児医療費の助成',
    sourceUrls: ['https://www.pref.yamanashi.jp/kosodate/71890998147.html'],
    sourceNote: '受給資格者証、償還払いとなる場合、申請先を山梨県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'shiga-child-medical',
    title: '滋賀県 子ども福祉医療費助成事業補助金',
    organization: '滋賀県 子育て支援課',
    type: 'local',
    maxAmount: '高校生世代までの医療費助成を市町へ補助',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '滋賀県',
    tags: ['滋賀県', '子ども福祉医療', '高校生世代', '市町申請'],
    eligibility: '滋賀県内市町で実施する子ども医療費助成の対象となる子どもが対象です。詳細は市町により異なります。',
    applicationPeriod: '通年（住所地の市町で申請）',
    description: '滋賀県の子ども福祉医療費助成事業補助金です。子育て世帯の経済的負担を軽減するため、従来の乳幼児に加え、高校生世代にかかる医療費助成を行う市町に対して補助します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>滋賀県は、子どもの保健の向上と健やかな育成、子育て世帯の経済的負担軽減を目的に、子ども医療費助成を実施する市町へ補助しています。高校生世代までの医療費助成拡充も案内されています。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>実際の対象年齢、自己負担、所得制限、助成方法は市町の制度により異なります。既に独自制度を実施している市町や、制度を拡充する市町があるため、住所地の窓口確認が必要です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>詳細は住所地の市役所・町役場の子ども福祉医療費助成担当課へ確認します。健康保険資格が分かる書類、本人確認書類、所得確認書類などを準備します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.shiga.lg.jp/ippan/kosodatekyouiku/kosodate/336963.html',
    sourceName: '滋賀県 子ども福祉医療費助成事業補助金の制度拡充について',
    sourceUrls: [
      'https://www.pref.shiga.lg.jp/ippan/kosodatekyouiku/kosodate/336963.html',
      'https://www.pref.shiga.lg.jp/ippan/kosodatekyouiku/kosodate/334969.html'
    ],
    sourceNote: '高校生世代までの医療費助成拡充、市町への補助、問い合わせ先を滋賀県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'wakayama-child-medical',
    title: '和歌山県 こどもの医療費助成',
    organization: '和歌山県 国民健康保険課',
    type: 'local',
    maxAmount: 'こどもの医療費自己負担を県と市町村で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '和歌山県',
    tags: ['和歌山県', 'こども医療費', '乳幼児等医療費', '市町村申請'],
    eligibility: '和歌山県内市町村に住所がある乳幼児等・子どもが対象です。受給要件は市町村により異なります。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '和歌山県のこどもの医療費助成です。こどもたちが安心して必要な医療を受けられるよう、医療保険の自己負担の一部を県と市町村で助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>こどもたちが健康に育つことを願い、安心して必要な医療が受けられるよう、医療保険の一部を県と市町村で助成する制度です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>乳幼児等が住所を有する市町村に申請し、受給資格証の交付を受けます。医療保険で医療を受けた場合の自己負担分が助成対象となりますが、市町村により受給要件が異なります。</p>'
      },
      {
        heading: '注意点',
        content: '<p>制度を将来にわたり続けるため、県は適正受診への協力を呼びかけています。夜間・休日の受診や重複受診を避け、必要に応じて小児救急電話相談等も活用してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.wakayama.lg.jp/prefg/050600/child_iryohi.html',
    sourceName: '和歌山県 こどもにとってより良い医療のために',
    sourceUrls: [
      'https://www.pref.wakayama.lg.jp/prefg/050600/child_iryohi.html',
      'https://www.pref.wakayama.lg.jp/faq/answer/faq_a22034.html'
    ],
    sourceNote: 'こどもの医療費助成の趣旨、受給資格証、市町村申請を和歌山県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'okayama-child-medical',
    title: '岡山県 小児医療費公費負担制度',
    organization: '岡山県 健康推進課',
    type: 'local',
    maxAmount: '市町村の子ども医療費助成に県が一部補助',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '岡山県',
    tags: ['岡山県', '小児医療費', '市町村状況一覧', '子育て支援'],
    eligibility: '岡山県内市町村の子ども医療費助成制度の対象となる子どもが対象です。岡山市を除き、県が市町村制度の一部を補助します。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '岡山県の小児医療費公費負担制度です。子どもの医療費助成制度を設けている市町村に対し、岡山県がその一部を補助する制度で、市町村別の助成状況一覧も公開されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>岡山県小児医療費公費負担制度は、子どもの医療費助成制度を設けている市町村に対し、県がその一部を補助する制度です。ただし岡山市は除かれます。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>対象年齢、自己負担、所得制限、現物給付・償還払いの扱いは市町村ごとに異なります。県は医療機関向けの市町村別補助状況と、県民向けの子ども医療費助成状況を公開しています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町村で受給資格証等の申請を行います。健康保険資格が分かる書類、本人確認書類、所得確認書類、振込口座などの必要書類は市町村に確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okayama.jp/page/detail-53881.html',
    sourceName: '岡山県 小児医療費公費負担制度の市町村状況一覧',
    sourceUrls: [
      'https://www.pref.okayama.jp/page/detail-53881.html',
      'https://www.pref.okayama.jp/site/hagukumare/804370.html'
    ],
    sourceNote: '県の一部補助、市町村別状況一覧、県民向け助成状況を岡山県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'yamaguchi-child-medical',
    title: '山口県 乳幼児医療費助成事業',
    organization: '山口県',
    type: 'local',
    maxAmount: '乳幼児の医療費自己負担を県と市町で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '山口県',
    tags: ['山口県', '乳幼児医療費', '福祉医療', '市町申請'],
    eligibility: '小学校就学前の児童などが対象です。市町村民税所得割額などの所得要件があり、市町により対象範囲や助成内容が異なる場合があります。',
    targetIncome: '父母の市町村民税所得割額の合計が基準以下の世帯など。市町により異なる場合あり。',
    applicationPeriod: '通年（住所地の市町で申請。更新時期は多くの市町で毎年8月）',
    description: '山口県の乳幼児医療費助成事業です。乳幼児のいる家庭の経済的負担を緩和し、安心して医療を受けられるよう、医療保険が適用される医療費の自己負担分を県と市町で助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>山口県の福祉医療制度の一つとして、乳幼児医療費助成事業が実施されています。医療保険が適用される医療費の自己負担分が軽減されますが、入院時食事療養費や生活療養費の自己負担額は対象外です。</p>'
      },
      {
        heading: '対象者',
        content: '<p>FAQでは、小学校就学前の児童で、父母の市町村民税所得割額の合計が基準以下の世帯などが対象とされています。市町によって対象者の範囲や助成内容が異なる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町の福祉医療担当課で申請します。受給者証は毎年更新が必要で、乳幼児医療費助成事業の更新時期は多くの市町で毎年8月と案内されています。詳細は市町担当課一覧または市町公式ページで確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.pref.yamaguchi.lg.jp/soshiki/44/17782.html',
    sourceName: '山口県 福祉医療・福祉医療費助成制度について',
    sourceUrls: [
      'https://www.pref.yamaguchi.lg.jp/soshiki/44/17782.html',
      'https://faq.pref.yamaguchi.lg.jp/faq/detail.aspx?id=660'
    ],
    sourceNote: '福祉医療制度、乳幼児医療費助成、更新時期、FAQの対象者説明を山口県公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tokyo-child-medical',
    title: '東京都 マル乳・マル子・マル青医療費助成',
    organization: '東京都福祉局 医療助成課',
    type: 'local',
    maxAmount: '乳幼児から高校生等まで医療費自己負担を区市町村と助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '東京都',
    tags: ['東京都', 'マル乳', 'マル子', 'マル青', '医療証'],
    eligibility: '東京都内の区市町村に住所がある乳幼児、義務教育就学児、高校生等が対象です。高校生等は15歳到達後最初の4月1日から18歳到達後最初の3月31日までの人を指し、高校在学の有無は問いません。',
    targetIncome: '所得要件の有無や自己負担の上乗せ軽減は区市町村により異なります。',
    applicationPeriod: '通年（住所地の区市町村で医療証を申請。医療証は毎年10月1日更新）',
    description: '東京都の子ども医療費助成は、乳幼児医療費助成制度（マル乳）、義務教育就学児医療費助成制度（マル子）、高校生等医療費助成制度（マル青）に分かれ、医療証を提示して保険診療の自己負担分の助成を受ける制度です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>東京都では、乳幼児はマル乳、小学生・中学生はマル子、高校生等はマル青として医療費助成を案内しています。医療証は毎年10月1日に更新され、受診時は新しい医療証を窓口で提示します。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>高校生等は15歳到達後の最初の4月1日から18歳到達後の最初の3月31日までの人です。マル青では、医療保険の自己負担分が助成対象となり、入院は食事療養標準負担額のみ、通院は1回最大200円までの負担が原則です。ただし窓口負担のない区市町村もあります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の区市町村で医療証を申請します。都内医療機関では保険資格と医療証を提示して受診し、都外受診などの場合は一旦支払い後、区市町村に払い戻しを申請します。</p>'
      }
    ],
    officialUrl: 'https://www.fukushi.metro.tokyo.lg.jp/about/soshiki/seifuku/iryojyosei/oshirase/marunyukokoushin',
    sourceName: '東京都福祉局 マル乳・マル子・マル青医療証をお持ちの方へ',
    sourceUrls: [
      'https://www.fukushi.metro.tokyo.lg.jp/about/soshiki/seifuku/iryojyosei/oshirase/marunyukokoushin',
      'https://www.fukushi.metro.tokyo.lg.jp/seikatsu/josei/marunyu',
      'https://www.fukushi.metro.tokyo.lg.jp/seikatsu/josei/maruko',
      'https://www.fukushi.metro.tokyo.lg.jp/seikatsu/josei/maruao'
    ],
    sourceNote: '東京都福祉局公式ページでマル乳・マル子・マル青の対象、医療証更新、高校生等の助成内容と区市町村申請を確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'kanagawa-child-medical',
    title: '神奈川県 小児医療費助成事業',
    organization: '神奈川県 子ども家庭課',
    type: 'local',
    maxAmount: '小児の保険診療自己負担分を市町村制度で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '神奈川県',
    tags: ['神奈川県', '小児医療費', '市町村申請', '保険診療'],
    eligibility: '神奈川県内の市町村に住所がある子どもが対象です。県補助の基準では、中学卒業または中等教育学校前期課程修了までの入院、小学校卒業までの通院が案内されています。',
    targetIncome: '対象年齢、所得制限、一部負担金は市町村ごとに独自基準があります。',
    applicationPeriod: '通年（住所地の市役所・町村役場で申請）',
    description: '神奈川県の小児医療費助成事業は、市町村が実施する子どもの医療費助成に対して県が補助する制度です。実際の医療証交付、対象年齢、所得制限、一部負担金は市町村ごとに定められています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子どもが医療機関を受診し、他の医療費助成の対象とならない場合に、窓口で支払う保険診療の自己負担分を助成します。県は市町村が実施する事業に補助を行っています。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>県の案内では、中学卒業または中等教育学校の前期課程修了までの入院、小学校卒業までの通院が対象範囲として示されています。ただし、市町村ごとに対象年齢の拡大、所得制限の有無、一部負担金の有無が異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市役所または町村役場で申請します。子どもの健康保険資格が分かる書類、本人確認書類、所得確認書類など、必要書類は市町村の案内に従って準備します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kanagawa.jp/docs/he8/faq/p3147.html',
    sourceName: '神奈川県 小児医療費助成事業',
    sourceUrls: [
      'https://www.pref.kanagawa.jp/docs/he8/faq/p3147.html',
      'https://www.pref.kanagawa.jp/docs/he8/hitorioya-support/iryouhi.html'
    ],
    sourceNote: '神奈川県公式FAQと子育て支援ページで対象範囲、市町村申請、県補助の位置づけを確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'osaka-child-medical',
    title: '大阪府 乳幼児医療費助成制度',
    organization: '大阪府 国民健康保険課',
    type: 'local',
    maxAmount: '乳幼児の医療費自己負担から一部自己負担額を除いて助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '大阪府',
    tags: ['大阪府', '乳幼児医療費', '医療証', '市町村申請'],
    eligibility: '大阪府内市町村に住所がある0歳から6歳児（小学校就学前まで）が府補助基準の対象です。実際の対象年齢や助成内容は市町村により異なります。',
    targetIncome: '大阪府から市町村への補助基準には所得制限があります。市町村により扱いが異なります。',
    applicationPeriod: '通年（住所地の市区町村で乳幼児医療証を申請）',
    description: '大阪府の乳幼児医療費助成制度は、乳幼児を育てる家庭が必要な医療を受けやすくするため、医療費の自己負担額の一部を助成する市町村制度に対して府が補助する仕組みです。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳幼児を育てる家庭に対し、必要な医療が容易に受けられるよう医療費の自己負担額の一部を助成する制度です。大阪府は市町村が実施している乳幼児医療費助成制度に補助を行っています。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>府補助基準では、大阪府内市町村に住所がある0歳から6歳児（小学校就学前まで）が対象です。各種医療保険の自己負担額から一部自己負担額を除く医療費が助成されます。診断書料、薬のびん代、差額ベッド代など保険対象外の費用は対象外です。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市区町村で申請し、乳幼児医療証の交付を受けます。大阪府内の医療機関では医療証を提示して利用し、府外受診や医療証交付前の受診などは後日、市区町村窓口で払い戻しを申請します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.osaka.lg.jp/o090135/kokuho/hukusiiryou2/nyuuyouji.html',
    sourceName: '大阪府 乳幼児医療費助成制度',
    sourceUrls: [
      'https://www.pref.osaka.lg.jp/o090135/kokuho/hukusiiryou2/nyuuyouji.html',
      'https://www.pref.osaka.lg.jp/o090135/kokuho/hukusiiryou2/faq.html'
    ],
    sourceNote: '大阪府公式ページで府補助基準、対象年齢、医療証、市区町村申請、対象外費用を確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'aichi-child-medical',
    title: '愛知県 子ども医療制度',
    organization: '愛知県 児童家庭課',
    type: 'local',
    maxAmount: '子どもの医療保険自己負担相当額を市町村制度で支給',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '愛知県',
    tags: ['愛知県', '子ども医療', '現物支給', '市町村申請'],
    eligibility: '愛知県内市町村に住所がある子どもが対象です。県制度の対象は通院が小学校就学前まで、入院が中学校卒業までですが、市町村により対象年齢や所得制限の有無が異なります。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '愛知県の子ども医療制度は、子どもが必要な医療を安心して受けられるよう、医療保険の自己負担相当額を公費で負担する制度です。県内市町村で実施され、県内医療機関では原則として現物支給で扱われます。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子どもが医療機関で通院・入院の医療給付を受けたとき、医療保険の自己負担額を子ども医療費として支給する制度です。医療保険の適用外の治療による自己負担額は対象外です。</p>'
      },
      {
        heading: '支給方法と対象',
        content: '<p>愛知県内の医療機関では、原則として現物支給により支給されます。県制度の対象は、通院が小学校就学前までの児童、入院が中学校卒業までの児童です。ただし、実施主体である市町村により、助成対象年齢、支給方法、所得制限の有無が異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町村の子ども医療担当課で手続きします。県外医療機関で治療を受けた場合は、一旦窓口で医療保険自己負担額を支払い、その後に市町村窓口へ請求します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.aichi.jp/soshiki/jidoukatei/0000010975.html',
    sourceName: '愛知県 子ども医療制度',
    sourceUrls: [
      'https://www.pref.aichi.jp/soshiki/jidoukatei/0000010975.html',
      'https://www.pref.aichi.jp/shichoson/sumiyasusa/support/'
    ],
    sourceNote: '愛知県公式ページで概要、県内現物支給、通院・入院の県制度対象、市町村ごとの差異を確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'fukuoka-child-medical',
    title: '福岡県 子ども医療費支給制度',
    organization: '福岡県 こども未来課',
    type: 'local',
    maxAmount: '中学3年生までのこどもの医療費を市町村制度で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '福岡県',
    tags: ['福岡県', '子ども医療費', '中学3年生まで', '市町村申請'],
    eligibility: '福岡県内に住所があり、医療保険に加入している中学3年生までのこどもが県補助基準の対象です。実際の対象者は市町村により異なります。',
    applicationPeriod: '通年（住所地の市町村で医療証を申請）',
    description: '福岡県の子ども医療費支給制度は、こどもに係る医療費の一部を助成し、疾病の早期発見と治療、子育て家庭への支援を目的とする制度です。実施主体は市町村で、県は市町村事業に補助金を交付しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>こどもに係る医療費の一部を助成することで、疾病の早期発見と治療を促進し、こどもの保健の向上、福祉の増進、子育て家庭への支援の充実を図る制度です。</p>'
      },
      {
        heading: '対象者と本人負担額',
        content: '<div class="summary-box" data-title="福岡県補助基準の本人負担額"><p>3歳未満：無料</p><p>3歳以上から就学前：入院1日500円（月7日上限）、入院以外は月800円上限</p><p>小学生：入院1日500円（月7日上限）、入院以外は月1,200円上限</p><p>中学生：入院1日500円（月7日上限）、入院以外は月1,600円上限</p></div><p>薬局での自己負担はなく、保険対象外の医療費や入院時食事療養標準負担額は対象外です。市町村により対象者や負担額は異なります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>相談窓口と医療証の交付は市町村です。住所地の市区町村子ども医療担当課に、健康保険資格が分かる書類や本人確認書類などを確認して申請します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.fukuoka.lg.jp/contents/kodomo-iryou.html',
    sourceName: '福岡県 こどもの医療費を助成します',
    sourceUrls: [
      'https://www.pref.fukuoka.lg.jp/contents/kodomo-iryou.html',
      'https://www.pref.fukuoka.lg.jp/contents/hitorioyairyo.html'
    ],
    sourceNote: '福岡県公式ページで実施主体、市町村補助、対象者、本人負担額、対象外費用を確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'hokkaido-child-medical',
    title: '北海道 乳幼児等医療給付事業',
    organization: '北海道 保健福祉部子ども政策局',
    type: 'local',
    maxAmount: '乳幼児等の医療費自己負担を市町村制度で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '北海道',
    tags: ['北海道', '乳幼児等医療', '市町村申請', '所得制限'],
    eligibility: '北海道内市町村の乳幼児等医療給付事業の対象となる子どもが対象です。道補助基準では、就学前の乳幼児の通院・入院、小学生の入院が案内されています。',
    targetIncome: '扶養義務者に一定以上の所得がある場合は対象外。市町村により独自拡大・緩和あり。',
    applicationPeriod: '通年（住所地の市区町村窓口で申請）',
    description: '北海道の乳幼児等医療給付事業です。市町村が実施し、北海道が実施に要する費用の一部を補助する仕組みで、対象者、自己負担額、所得制限は市町村が独自に拡大・緩和している場合があります。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳幼児等の医療費負担を軽減するため、市町村が実施する医療給付事業です。北海道は市町村の実施に要する費用の2分の1を補助しています。</p>'
      },
      {
        heading: '対象者と自己負担',
        content: '<p>道の案内では、就学前の乳幼児は通院・入院、小学生は入院が対象です。3歳未満児と住民税非課税世帯は初診時一部負担金があり、それ以外は1割負担と月額上限が示されています。市町村ごとに対象者や自己負担が異なる場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>詳しい対象範囲や手続きは、住所地の市区町村窓口で確認します。健康保険資格が分かる書類、本人確認書類、所得確認書類などは市町村の案内に従って準備します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hokkaido.lg.jp/hf/kms/sienseido_nyuuyoujiiryou.html',
    sourceName: '北海道 乳幼児等医療給付事業',
    sourceUrls: [
      'https://www.pref.hokkaido.lg.jp/hf/kms/sienseido_nyuuyoujiiryou.html',
      'https://www.pref.hokkaido.lg.jp/hf/kms/4/jyosei/'
    ],
    sourceNote: '対象者、自己負担、市町村実施、道の2分の1補助、所得制限を北海道公式ページで確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'saitama-child-medical',
    title: '埼玉県 こども医療費助成制度',
    organization: '埼玉県 保健医療部',
    type: 'local',
    maxAmount: '18歳年度末までの医療費一部負担金を県と市町村で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '埼玉県',
    tags: ['埼玉県', 'こども医療費', '18歳年度末', '窓口無料化'],
    eligibility: '埼玉県内に住み、医療保険に加入している子どもが対象です。令和6年10月1日から県内全市町村で対象年齢が18歳年度末までになっています。',
    applicationPeriod: '通年（住所地の市役所・町村役場で申請）',
    description: '埼玉県のこども医療費助成制度です。子育て世帯の経済的負担を軽減するため、子どもにかかる医療費の一部負担金を県と市町村で助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子どもにかかる医療費の一部負担金を県と市町村で助成する制度です。県内市町村が実施主体となり、手続方法は市町村ごとに異なります。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>県内に住み、国民健康保険、社会保険、共済組合等の医療保険に加入している子どもが対象です。令和6年10月1日から、県内全ての市町村で対象年齢が18歳年度末までとなりました。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>受給するには、市役所・町村役場への申請が必要です。受給資格証、現物給付の扱い、必要書類は住所地の市町村ホームページや担当窓口で確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.saitama.lg.jp/a0702/nyuji.html',
    sourceName: '埼玉県 こども医療費助成制度',
    sourceUrls: [
      'https://www.pref.saitama.lg.jp/a0702/nyuji.html',
      'https://www.pref.saitama.lg.jp/soshiki/a0702/kennaigenbutu.html'
    ],
    sourceNote: '制度の趣旨、対象年齢18歳年度末、市町村申請、福祉3医療の現物給付を埼玉県公式ページで確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'kyoto-child-medical',
    title: '京都府 京都子育て支援医療助成制度',
    organization: '京都府 健康福祉部',
    type: 'local',
    maxAmount: '中学校卒業までの医療費を市町村と助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '京都府',
    tags: ['京都府', '子育て支援医療', '中学生まで', '所得制限なし'],
    eligibility: '出生の日から満15歳に達する日以後の最初の3月31日までの子どもで、医療保険に加入している人が対象です。',
    targetIncome: '所得制限なし。',
    applicationPeriod: '通年（住所地の市区町村で受給者証を申請）',
    description: '京都府の京都子育て支援医療助成制度です。子育て家庭の医療費負担を軽減するため、市町村とともに中学校卒業までの子どもの医療費を助成します。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子育て家庭の医療費負担を軽減するため、京都府と市町村が中学校卒業までの子どもの医療費を助成する制度です。令和5年9月診療分から拡充されています。</p>'
      },
      {
        heading: '対象者と一部負担金',
        content: '<p>対象は出生の日から満15歳に達する日以後の最初の3月31日までの子どもで、所得制限はありません。入院は中学生まで1医療機関あたり月200円、通院は小学生まで1医療機関あたり月200円、中学生は月1,500円が上限として案内されています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市区町村で受給者証の交付申請を行います。市町村により制度が異なる場合があるため、詳しい利用方法は市区町村窓口で確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.kyoto.jp/fukusiiryou/kosodate0109.html',
    sourceName: '京都府 京都子育て支援医療助成制度について',
    sourceUrls: [
      'https://www.pref.kyoto.jp/fukusiiryou/kosodate0109.html',
      'https://www.pref.kyoto.jp/fukusiiryou/'
    ],
    sourceNote: '対象年齢、所得制限なし、一部負担金、受給者証申請を京都府公式ページで確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'nara-child-medical',
    title: '奈良県 子ども医療費助成事業',
    organization: '奈良県 医療保険課',
    type: 'local',
    maxAmount: '高校生世代までの入通院医療費を市町村制度で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '奈良県',
    tags: ['奈良県', '子ども医療費', '高校生世代', '現物給付'],
    eligibility: '0歳児から18歳に達する日以後の最初の3月31日までの子どもが対象です。',
    targetIncome: '所得制限なし。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '奈良県の子ども医療費助成事業です。市町村が行う子ども医療費助成への県補助基準が高校生世代まで拡大され、令和6年8月診療分から現物給付方式の対象年齢も高校生世代まで拡大されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>子どもを養育している人に対し、子どもの医療費の一部を助成し、子どもの健康保持と福祉の増進を図る制度です。県は市町村の子ども医療費助成を補助しています。</p>'
      },
      {
        heading: '対象者と制度拡大',
        content: '<p>対象は0歳児から18歳に達する日以後の最初の3月31日までの子どもの入通院で、所得制限はありません。令和6年8月診療分から、高校生世代まで低額の一部負担金のみで受診できる現物給付方式の対象になっています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町村で受給資格を申請します。実際の一部負担金や公費負担者番号、医療機関での提示方法は市町村の案内で確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.nara.lg.jp/n065/1977.html',
    sourceName: '奈良県 子ども医療費助成事業',
    sourceUrls: [
      'https://www.pref.nara.lg.jp/n065/1977.html',
      'https://www.pref.nara.lg.jp/n065/66442.html',
      'https://www.pref.nara.lg.jp/n065/1944.html'
    ],
    sourceNote: '対象年齢、所得制限撤廃、高校生世代までの拡大、現物給付方式を奈良県公式ページで確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'hiroshima-child-medical',
    title: '広島県 乳幼児医療費公費負担制度',
    organization: '広島県 子供未来応援課',
    type: 'local',
    maxAmount: '乳幼児等の医療費の一部を市町制度で助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '広島県',
    tags: ['広島県', '乳幼児医療費', '受給者証', '市町申請'],
    eligibility: '広島県内市町の乳幼児医療費公費負担制度の対象となる子どもが対象です。対象年齢や助成内容は市町により異なります。',
    applicationPeriod: '通年（住所地の市役所・町役場・区役所で受給者証を申請）',
    description: '広島県の乳幼児医療費公費負担制度です。こどもの医療費の一部を助成する制度で、助成を受けるには各市町の受給者証が必要です。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>乳幼児医療費公費負担制度は、こどもの医療費の一部を助成する制度です。広島県の子育て支援情報でも、乳幼児の通院・入院に係る医療費のうち一定の自己負担を超える費用を助成すると案内されています。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>対象年齢や助成内容は住所地の市町により異なります。医療保険の自己負担分について、市町制度で定める一部負担金を超える額が助成される場合があります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>助成を受けるには、各市町の受給者証が必要です。住所地の市役所、町役場、区役所の担当窓口で申請し、健康保険資格が分かる書類等を提出します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.hiroshima.lg.jp/soshiki/51/nyuuyouji.html',
    sourceName: '広島県 乳幼児医療費公費負担制度について',
    sourceUrls: [
      'https://www.pref.hiroshima.lg.jp/soshiki/51/nyuuyouji.html',
      'https://famnavi.pref.hiroshima.lg.jp/support/'
    ],
    sourceNote: '乳幼児医療費公費負担制度、受給者証、市町窓口申請を広島県公式ページで確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'okinawa-child-medical',
    title: '沖縄県 こども医療費助成制度',
    organization: '沖縄県 保健医療介護部',
    type: 'local',
    maxAmount: '中学校卒業まで窓口無料化を市町村制度で実施',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '沖縄県',
    tags: ['沖縄県', 'こども医療費', '中学校卒業まで', '現物給付'],
    eligibility: '沖縄県内市町村のこども医療費助成制度の対象となる子どもが対象です。市町村ごとの対象年齢や制度内容は一覧で確認します。',
    applicationPeriod: '通年（住所地の市町村で受給資格者証を申請）',
    description: '沖縄県のこども医療費助成制度です。沖縄県は市町村が実施する制度に対象経費の2分の1を補助しており、令和4年4月から中学校卒業まで通院時の窓口無料化が拡大されています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>沖縄県は、市町村が実施するこども医療費助成制度に対し、対象経費の2分の1を補助しています。県民の負担軽減を図るため、市町村と連携して制度を運用しています。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>令和4年4月から、通院時に医療機関の窓口で受給資格者証を提示することで、自己負担なしで医療サービスを受けられる年齢が中学校卒業まで拡大されています。市町村ごとの制度一覧で対象年齢や内容を確認できます。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>住所地の市町村で受給資格者証を申請します。制度一覧や関係機関連絡先を確認し、健康保険資格が分かる書類、本人確認書類など市町村指定の書類を準備します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.okinawa.jp/iryokenko/iryo/1005869/1005890.html',
    sourceName: '沖縄県 こども医療費助成制度',
    sourceUrls: ['https://www.pref.okinawa.jp/iryokenko/iryo/1005869/1005890.html'],
    sourceNote: '市町村制度への2分の1補助、中学校卒業までの窓口無料化、市町村制度一覧を沖縄県公式ページで確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'toyama-child-medical',
    title: '富山県 こども・妊産婦医療費助成',
    organization: '富山県 厚生部',
    type: 'local',
    maxAmount: 'こども・妊産婦の医療費を市町村と協力して助成',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '富山県',
    tags: ['富山県', 'こども医療費', '妊産婦医療費', '市町村申請'],
    eligibility: '富山県内市町村のこども医療費助成制度の対象となる子どもが対象です。助成内容は市町村により異なる場合があります。',
    targetIncome: '所得金額が一定の限度額を超える場合、窓口で自己負担が発生する場合あり。',
    applicationPeriod: '通年（住所地の市町村担当窓口で申請）',
    description: '富山県のこども・妊産婦医療費助成です。こども・妊産婦の保健向上と福祉増進のため、市町村と協力して医療費助成を行っています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>富山県では、こども・妊産婦に対する保健の向上と福祉の増進を図るため、市町村と協力して医療費助成を行っています。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>医療費の助成内容は、こども、妊産婦、ひとり親家庭、心身障害者など対象者により異なります。実際の医療費助成は市町村で異なる取扱いをする場合があり、富山県では所得制限も案内しています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>こども・妊産婦医療費助成に関する手続きと問い合わせは、住所地の市町村担当窓口で行います。必要書類や受給資格証の扱いは市町村の案内に従って確認します。</p>'
      }
    ],
    officialUrl: 'https://www.pref.toyama.jp/120101/kodomo-iryo.html',
    sourceName: '富山県 こども・妊産婦医療費助成',
    sourceUrls: [
      'https://www.pref.toyama.jp/120101/kodomo-iryo.html',
      'https://www.pref.toyama.jp/1200/kurashi/kenkou/iryou/kj00013821.html'
    ],
    sourceNote: 'こども・妊産婦医療費助成、市町村窓口、所得制限の案内を富山県公式ページで確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
  {
    slug: 'niigata-child-medical',
    title: '新潟県 こどもの医療費助成事業',
    organization: '新潟県 福祉保健部',
    type: 'local',
    maxAmount: '市町村ごとのこども医療費助成を案内',
    maxAmountNum: 0,
    category: 'medical',
    prefecture: '新潟県',
    tags: ['新潟県', 'こども医療費', '市町村実施状況', '18歳未満'],
    eligibility: '新潟県内市町村のこどもの医療費助成事業の対象となる子どもが対象です。対象年齢等は市町村により異なります。',
    applicationPeriod: '通年（住所地の市町村で申請）',
    description: '新潟県のこどもの医療費助成事業です。助成対象となる年齢等は実施主体である市町村によって異なり、県は市町村実施状況を公表しています。',
    sections: [
      {
        heading: '制度の概要',
        content: '<p>新潟県は、乳児・幼児など小さい子どもや18歳未満の児童の医療費助成について、こどもの医療費助成事業と県内市町村リンク集を案内しています。</p>'
      },
      {
        heading: '対象者と助成内容',
        content: '<p>助成対象となる年齢等は、実施主体である市町村によって異なります。令和8年4月1日現在の県内市町村の実施状況がPDF・Excelで公表されています。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>詳しい内容は住所地の市町村に確認します。受給者証、現物給付、償還払い、必要書類は市町村ごとの案内に従って手続きします。</p>'
      }
    ],
    officialUrl: 'https://www.pref.niigata.lg.jp/sec/kenko/1349128944448.html',
    sourceName: '新潟県 こどもの医療費助成事業について',
    sourceUrls: [
      'https://www.pref.niigata.lg.jp/sec/kenko/1349128944448.html',
      'https://www.pref.niigata.lg.jp/sec/kenko/1196266615489.html'
    ],
    sourceNote: '市町村実施状況、令和8年4月1日現在の一覧、申請先市町村を新潟県公式ページで確認。',
    verifiedAt: '2026-06-25',
    publishedAt: '2026-06-25',
  },
];
