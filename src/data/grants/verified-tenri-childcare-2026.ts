import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-24';

export const verifiedTenriChildcareGrants2026: Grant[] = [
  {
    slug: 'tenri-child-medical-2026',
    title: '天理市 子ども医療費助成制度',
    organization: '天理市 保険医療課',
    type: 'local',
    maxAmount: '未就学児無料／小学生以上は外来月1,000円など',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '子ども医療費', '高校卒業まで', '医療費助成'],
    eligibility: '天理市に住所があり、健康保険に加入している、18歳到達後の最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年（受給資格証の申請が必要）',
    description: '天理市の子ども医療費助成制度です。18歳到達後の最初の3月31日まで、保険診療の医療費について一部助成を受けられます。奈良県内では受給資格証を提示して一部負担金のみ支払う現物給付方式です。',
    sections: [
      {
        heading: '対象者',
        content: '<p>天理市に住所を有し、国民健康保険・社会保険などの健康保険に加入している子どもが対象です。対象年齢は18歳に達した日以後の最初の3月31日までです。</p>'
      },
      {
        heading: '助成内容',
        content: '<div class="summary-box" data-title="一部負担金"><p>小学校入学まで：一部負担金なし</p><p>小学校入学以降：外来は1か月1医療機関あたり1,000円</p><p>入院・調剤：0円</p></div><p>奈良県外の医療機関や資格証未提示の場合は、いったん自己負担後に償還払いの手続きとなります。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>制度の適用を受けるには、電子申請または申請書類の提出が必要です。申請後、受給資格証が交付されます。子どもの健康保険資格が分かる書類、保護者の本人確認書類、口座情報などを準備します。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kurasibunkabu/hokeniryouka/iryouhijyosei/8355.html',
    sourceName: '天理市 子ども医療費助成制度',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kurasibunkabu/hokeniryouka/iryouhijyosei/8355.html'],
    sourceNote: '対象年齢、一部負担金、申請方法は天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-single-parent-medical-2026',
    title: '天理市 ひとり親家庭等医療費助成制度',
    organization: '天理市 保険医療課',
    type: 'local',
    maxAmount: '18歳以下は県内医療機関で医療費無料など',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', 'ひとり親', '医療費助成', '子育て支援'],
    eligibility: '18歳未満の児童を扶養している配偶者のいない人とその児童などで、天理市内に住所を有する人が対象です。所得制限があります。',
    applicationPeriod: '通年（申請が必要）',
    description: '天理市のひとり親家庭等の親子を対象に、健康保険で診療を受けた医療費の一部を助成する制度です。18歳以下の方は奈良県内の医療機関で受給資格証を提示すると医療費が無料になります。',
    sections: [
      {
        heading: '対象者',
        content: '<p>18歳未満の児童を扶養している配偶者のいない人及びその児童、父母のいない18歳未満の児童などが対象です。本人および扶養義務者の所得が基準額以上の場合は助成を受けられません。</p>'
      },
      {
        heading: '助成内容',
        content: '<p>18歳以下の方は、奈良県内の医療機関で保険証と受給資格証を提示すると医療費が無料になります。奈良県外受診や資格証未提示の場合は、領収書等により償還払いの手続きを行います。</p>'
      },
      {
        heading: '申請方法',
        content: '<p>制度の適用には申請が必要です。健康保険資格が分かる書類、本人確認書類、口座番号が分かるもの、マイナンバーが分かるもの、転入・未婚の場合の戸籍謄本などを準備します。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kurasibunkabu/hokeniryouka/iryouhijyosei/8365.html',
    sourceName: '天理市 ひとり親家庭等医療費助成制度',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kurasibunkabu/hokeniryouka/iryouhijyosei/8365.html'],
    sourceNote: '対象者、所得制限、18歳以下の助成内容は天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-pregnancy-support-benefit-2026',
    title: '天理市 妊婦のための支援給付金',
    organization: '天理市 健康推進課',
    type: 'local',
    maxAmount: '現金10万円相当〜（単胎の場合）',
    maxAmountNum: 10,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '妊娠', '出産', '妊婦支援給付金', 'イチカ'],
    eligibility: '胎児心拍確認後、妊婦給付認定を受ける妊婦が対象です。流産・死産の場合も一定条件で対象となります。',
    applicationPeriod: '妊娠届出時および出生届出時・赤ちゃん訪問時など',
    description: '天理市では妊婦のための支援給付として、妊娠届出時と出生届出後等の2回に分けて給付を行っています。現金または天理市電子地域通貨「イチカ」で受け取れる制度です。',
    sections: [
      {
        heading: '給付額',
        content: '<div class="summary-box" data-title="給付額"><p>1回目：5万円または5万5千円相当のイチカ</p><p>2回目：胎児の数×5万円または胎児の数×5万5千円相当のイチカ</p></div><p>単胎の場合は、現金で合計10万円、イチカで受け取る場合は合計11万円相当となります。</p>'
      },
      {
        heading: '申請タイミング',
        content: '<p>1回目は、医療機関で胎児心拍を確認後、妊娠届出・母子健康手帳交付時に妊婦給付認定申請と請求を行います。2回目は、出生届出時に胎児の数の届出と申請書を受け取り、赤ちゃん訪問時などに申請します。</p>'
      },
      {
        heading: '相談支援',
        content: '<p>妊婦等包括相談支援事業として、妊娠届出時、妊娠8か月頃、出産後の赤ちゃん訪問時などに面談や相談支援が行われます。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/14184.html',
    sourceName: '天理市 妊婦のための支援給付金・妊婦等包括相談支援事業',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/14184.html'],
    sourceNote: '給付額と申請タイミングは天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-pregnant-health-checkup-2026',
    title: '天理市 妊婦健康診査助成事業',
    organization: '天理市 健康推進課',
    type: 'local',
    maxAmount: '11万円分の受診券',
    maxAmountNum: 11,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '妊婦健診', '妊娠', '受診券'],
    eligibility: '天理市で母子健康手帳の交付を受ける妊婦が対象です。多胎妊婦は追加受診分の一部補助があります。',
    applicationPeriod: '妊娠届出・母子健康手帳交付時',
    description: '妊婦健康診査の費用を助成する制度です。母子健康手帳発行時に、奈良県内の協力医療機関等で使える基本受診券14枚、追加受診券30枚、計110,000円分が交付されます。',
    sections: [
      {
        heading: '助成内容',
        content: '<p>母子健康手帳発行時に、妊婦健康診査受診券として基本受診券14枚、追加受診券30枚の合計110,000円分が交付されます。補助対象は医療保険適用外の健診・検査費用です。</p>'
      },
      {
        heading: '県外受診の場合',
        content: '<p>奈良県外の産院では受診券を使用できません。いったん自費で支払い、受診後に天理市保健センターへ申請すると、審査後に上限額の範囲内で償還払いを受けられます。</p>'
      },
      {
        heading: '注意点',
        content: '<p>妊娠届出前に受診した妊婦健康診査費用は補助対象外です。転入・転出の場合は受診券の扱いが変わるため、保健センターへ確認してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/11370.html',
    sourceName: '天理市 妊婦健康診査助成事業',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/11370.html'],
    sourceNote: '受診券の枚数、11万円分の助成、県外受診時の償還払いは天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-pregnancy-test-subsidy-2026',
    title: '天理市 妊娠判定受診料補助事業',
    organization: '天理市 健康推進課',
    type: 'local',
    maxAmount: '年度1回・上限7,000円',
    maxAmountNum: 0.7,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '妊娠判定', '非課税世帯', '生活保護'],
    eligibility: '非課税世帯および生活保護世帯で、妊娠を疑われる方または妊娠判定を受けた方が対象です。',
    applicationPeriod: '通年（同一年度につき1回まで）',
    description: '妊娠判定に要する診察・尿検査・超音波検査の費用を補助する制度です。非課税世帯および生活保護世帯を対象に、同一年度につき1回、上限7,000円が補助されます。',
    sections: [
      {
        heading: '対象者',
        content: '<p>非課税世帯および生活保護世帯で、妊娠を疑われる方または妊娠判定を受けた方が対象です。</p>'
      },
      {
        heading: '補助内容',
        content: '<p>医療機関等での妊娠判定に必要な診察、尿検査、超音波検査が対象です。同一年度につき1回を限度とし、上限は7,000円です。</p>'
      },
      {
        heading: '問い合わせ先',
        content: '<p>申請や詳細確認は、天理市健康推進課（保健センター）へ問い合わせます。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/11367.html',
    sourceName: '天理市 妊娠判定受診料補助事業',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/11367.html'],
    sourceNote: '対象、補助内容、上限額は天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-postpartum-health-checkup-2026',
    title: '天理市 産婦健康診査費用助成事業',
    organization: '天理市 健康推進課',
    type: 'local',
    maxAmount: '1回5,000円（2回まで）',
    maxAmountNum: 1,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '産婦健診', '産後', '出産'],
    eligibility: '令和7年4月1日以降に出産し、産婦健康診査を受診した時点で天理市に住民票のある産婦が対象です。',
    applicationPeriod: '産婦健康診査受診時・受診後',
    description: '出産後まもない時期の心身の健康確認と産後うつ予防のため、産婦健康診査費用の一部を助成する制度です。1回につき5,000円、2回まで助成されます。',
    sections: [
      {
        heading: '対象者',
        content: '<p>令和7年4月1日以降に出産し、産婦健康診査を受診した時点で天理市に住民票のある産婦が対象です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>1回の受診につき5,000円、2回まで助成されます。補助対象は医療保険適用外の健診・検査費用です。</p>'
      },
      {
        heading: '受診券',
        content: '<p>受診券は、母子健康手帳発行時に渡される妊婦健診補助券綴りの後方に綴じられています。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/14222.html',
    sourceName: '天理市 産婦健康診査費用助成事業',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/14222.html'],
    sourceNote: '対象者、助成額、受診券の案内は天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-one-month-baby-checkup-2026',
    title: '天理市 1か月児健康診査費用助成事業',
    organization: '天理市 健康推進課',
    type: 'local',
    maxAmount: '上限6,000円',
    maxAmountNum: 0.6,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '1か月児健診', '赤ちゃん', '乳児'],
    eligibility: '令和7年4月1日以降に生まれ、1か月児健康診査を受診した時点で天理市に住民票のある赤ちゃんが対象です。',
    applicationPeriod: '1か月児健康診査の受診時・受診後',
    description: '赤ちゃんの成長確認と疾病の早期発見のため、1か月児健康診査の費用の一部を助成する制度です。医療保険適用外の健診・検査費用を対象に、上限6,000円が助成されます。',
    sections: [
      {
        heading: '対象者',
        content: '<p>令和7年4月1日以降に生まれ、1か月児健康診査を受診した時点で天理市に住民票のある赤ちゃんが対象です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>助成額は上限6,000円です。奈良県内の医療機関で受診する場合は、受診券を医療機関の窓口へ渡します。</p>'
      },
      {
        heading: '県外受診の場合',
        content: '<p>県外医療機関ではいったん自費で支払い、受診日から1か月以内に天理市健康推進課へ申請すると、上限額の範囲内で償還払いを受けられます。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/baby_kids/14693.html',
    sourceName: '天理市 1か月児健康診査費用助成事業',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/baby_kids/14693.html'],
    sourceNote: '対象者、助成額、県外受診時の償還払いは天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-newborn-hearing-test-2026',
    title: '天理市 新生児聴覚検査費用助成事業',
    organization: '天理市 健康推進課',
    type: 'local',
    maxAmount: '自動ABR 4,000円／OAE 1,500円',
    maxAmountNum: 0.4,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '新生児', '聴覚検査', '赤ちゃん'],
    eligibility: '検査時に天理市に住民票のある新生児が対象です。助成は対象検査のいずれか初回1回分です。',
    applicationPeriod: '新生児聴覚検査時・検査後2か月以内',
    description: '新生児聴覚検査を受けた人に対し、検査費用の一部を助成する制度です。自動ABR検査は上限4,000円、OAE検査は上限1,500円まで助成されます。',
    sections: [
      {
        heading: '対象者',
        content: '<p>検査時に天理市に住民票のある新生児が対象です。助成は自動ABRまたはOAEのいずれか初回1回分です。</p>'
      },
      {
        heading: '助成額',
        content: '<div class="summary-box" data-title="助成上限額"><p>自動ABR検査：4,000円</p><p>OAE検査：1,500円</p></div><p>上限を超える費用は自己負担です。保険診療で検査を実施した場合は助成対象外です。</p>'
      },
      {
        heading: '県外受診の場合',
        content: '<p>県外の産院等では受診券を使用できません。いったん自費で支払い、検査日から2か月以内に保健センターへ申請すると、上限額の範囲内で償還払いを受けられます。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/baby_kids/13645.html',
    sourceName: '天理市 新生児聴覚検査費用助成事業',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/baby_kids/13645.html'],
    sourceNote: '対象者、検査別の助成上限額、申請期限は天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-assisted-reproductive-tech-2026',
    title: '天理市 令和8年度生殖補助医療費助成事業',
    organization: '天理市 健康推進課',
    type: 'local',
    maxAmount: '上限15万円など',
    maxAmountNum: 15,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '不妊治療', '生殖補助医療', '体外受精', '顕微授精'],
    eligibility: '婚姻している夫婦で、治療開始時の妻の年齢が43歳未満、夫婦双方が治療開始日から申請日まで天理市に住所を有するなどの要件を満たす方が対象です。',
    applicationPeriod: '治療計画終了後、公式期限までに申請',
    description: '体外受精・顕微授精などの生殖補助医療と、これに併せて行われる先進医療の費用負担を軽減するための助成制度です。保険診療分、保険適用回数超過後の自費診療分、先進医療分で上限額が異なります。',
    sections: [
      {
        heading: '対象者',
        content: '<p>婚姻届出をしている夫婦で、治療開始時の妻の年齢が43歳未満、夫婦双方が治療開始日から申請日まで天理市に住所を有し、医療保険資格があり、市税滞納がないことなどが要件です。</p>'
      },
      {
        heading: '助成上限',
        content: '<div class="summary-box" data-title="主な助成上限"><p>保険診療による生殖補助医療：上限5万円</p><p>保険適用回数上限超過後の自費診療：上限15万円</p><p>先進医療：上限5万円</p></div><p>男性不妊治療分は条件により上乗せ助成があります。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>申請書の提出期限は、治療計画が終了した日の属する月の翌月から起算して1年後の月末までです。期限を過ぎると申請できません。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/14219.html',
    sourceName: '天理市 令和8年度生殖補助医療費助成事業',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/14219.html'],
    sourceNote: '対象要件、助成上限、申請期限は天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
  {
    slug: 'tenri-general-infertility-treatment-2026',
    title: '天理市 令和8年度一般不妊治療費助成事業',
    organization: '天理市 健康推進課',
    type: 'local',
    maxAmount: '年額上限5万円',
    maxAmountNum: 5,
    category: 'childcare',
    prefecture: '奈良県',
    tags: ['天理市', '奈良県', '不妊治療', '一般不妊治療', '妊活'],
    eligibility: '婚姻している夫婦で、医療機関で不妊症と診断され、治療日に妻が43歳未満、夫婦双方が治療日と申請日に天理市に住所を有するなどの要件を満たす方が対象です。',
    applicationPeriod: '治療した日の属する年度末まで（一部例外あり）',
    deadlineDate: '2027-04-09',
    description: '一般不妊治療に要する費用の一部を助成する制度です。保険診療分の自己負担額の2分の1、年額5万円まで助成されます。所得金額による助成制限はありません。',
    sections: [
      {
        heading: '対象者',
        content: '<p>婚姻届出をしている夫婦で、医療機関で不妊症と診断され治療を受けた方、治療日に妻が43歳未満であること、夫婦双方が治療日および申請日に天理市に住所を有することなどが要件です。</p>'
      },
      {
        heading: '助成額',
        content: '<p>助成金は、1組の夫婦に対して年度1回、保険診療分の自己負担額の2分の1、年額5万円までです。高額療養費や付加給付がある場合は控除します。</p>'
      },
      {
        heading: '申請期限',
        content: '<p>申請期限は治療した日の属する年度末までです。ただし、3月受診分がある人のみ令和9年4月9日までです。治療中断や妊娠などの場合は、その時点で申請してください。</p>'
      }
    ],
    officialUrl: 'https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/15511.html',
    sourceName: '天理市 令和8年度一般不妊治療費助成事業',
    sourceUrls: ['https://www.city.tenri.nara.jp/kakuka/kenkoukodomokateikyoku/kenkousuishinka/ninshin_shussan/15511.html'],
    sourceNote: '対象要件、助成額、申請期限は天理市公式ページで確認。',
    verifiedAt,
    publishedAt: '2026-06-24',
  },
];
