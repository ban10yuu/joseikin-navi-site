import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-24';

type MunicipalChildMedicalSeed = {
  slug: string;
  city: string;
  organization: string;
  maxAmount: string;
  targetAge: string;
  eligibility: string;
  targetIncome?: string;
  applicationPeriod: string;
  description: string;
  assistanceDetails: string;
  applicationDetails: string;
  note: string;
  officialUrl: string;
  sourceName: string;
};

function createMunicipalChildMedicalGrant(seed: MunicipalChildMedicalSeed): Grant {
  return {
    slug: seed.slug,
    title: `${seed.city} こども医療費助成制度`,
    organization: seed.organization,
    type: 'local',
    maxAmount: seed.maxAmount,
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: '兵庫県',
    tags: [seed.city, '兵庫県', 'こども医療費', '子育て支援', '公式確認'],
    eligibility: seed.eligibility,
    targetIncome: seed.targetIncome,
    applicationPeriod: seed.applicationPeriod,
    description: seed.description,
    sections: [
      {
        heading: '制度の概要',
        content: `<p>${seed.description}</p><div class="summary-box" data-title="${seed.city}の確認済みポイント"><p>対象年齢：${seed.targetAge}</p><p>助成内容：${seed.maxAmount}</p><p>申請先：${seed.organization}</p></div>`
      },
      {
        heading: '受給対象者の条件',
        content: `<p>${seed.eligibility}</p><p>生活保護、他の公費医療、学校等の管理下での災害共済給付など、他制度が優先される場合は対象外または調整対象になることがあります。申請前に市公式ページで最新の除外条件を確認してください。</p>`
      },
      {
        heading: '助成内容',
        content: `<p>${seed.assistanceDetails}</p><p>助成対象は原則として健康保険が適用される診療分です。入院時の食事代、差額ベッド代、健康診断、予防接種、文書料など保険診療外の費用は対象外です。</p>`
      },
      {
        heading: '申請方法',
        content: `<p>${seed.applicationDetails}</p><p>出生、転入、健康保険の変更、氏名・住所・保護者の変更、受給者証の紛失、県外受診や受給者証を提示できなかった場合は、別途届出または償還払いの申請が必要になることがあります。</p>`
      },
      {
        heading: '利用時の注意',
        content: `<p>${seed.note}</p><p>兵庫県内の医療機関では、受給者証と保険資格が確認できるものを提示して利用します。県外受診や受給者証を提示しなかった場合は、いったん自己負担分を支払い、後日、市の窓口で払い戻しを申請する扱いが一般的です。</p>`
      }
    ],
    officialUrl: seed.officialUrl,
    sourceName: seed.sourceName,
    sourceUrls: [seed.officialUrl],
    sourceNote: `${seed.city}公式ページで対象年齢、助成内容、申請方法、受給者証・償還払いの扱いを確認。`,
    verifiedAt,
    publishedAt: '2026-06-24',
  };
}

export const verifiedHyogoMunicipalChildcareGrants2026: Grant[] = [
  createMunicipalChildMedicalGrant({
    slug: 'kobe-child-medical-2026',
    city: '神戸市',
    organization: '神戸市 保険年金医療課',
    maxAmount: '0〜2歳は自己負担なし／3歳〜高校3年生は1日最大400円を月2回まで',
    targetAge: '0歳〜高校3年生（18歳到達後の最初の3月31日まで）',
    eligibility: '神戸市内に住み、健康保険に加入している0歳から高校3年生までの子どもが対象です。所得制限はありません。他の医療費助成や生活保護を受けている場合は対象外です。',
    targetIncome: '所得制限なし',
    applicationPeriod: '通年（出生・市外転入・区をまたぐ転居などで申請）',
    description: '神戸市と兵庫県が、マイナ保険証または資格確認書を使って医療機関等を受診した際の医療費の一部または全部を助成する制度です。助成には申請が必要で、認定後に受給者証が交付されます。',
    assistanceDetails: '0歳から2歳は外来・入院とも自己負担なしです。3歳から高校3年生までは2割負担で、1医療機関・薬局ごとに1日最大400円、月2回までの負担となり、3回目以降は自己負担がありません。',
    applicationDetails: '子どもが生まれた時、市外から転入した時、区をまたいで転居した時などに申請します。子どもの保険資格が確認できるもの、本人確認書類、該当する場合は障害者手帳等を準備し、区役所・支所またはオンライン申請で手続きします。',
    note: '2026年7月1日から有効の受給者証について、神戸市は2026年6月18日に発送済みと案内しています。受給者証が届かない場合は住所地の区役所・支所へ確認します。',
    officialUrl: 'https://www.city.kobe.lg.jp/a52670/kenko/health/medical/kodomoiryohijose.html',
    sourceName: '神戸市 こども医療費助成',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'himeji-child-medical-2026',
    city: '姫路市',
    organization: '姫路市 国民健康保険課',
    maxAmount: '0〜18歳の保険診療自己負担を無料化',
    targetAge: '0歳〜18歳（18歳到達後の最初の3月31日まで）',
    eligibility: '姫路市に住所があり、医療保険に加入している0歳から18歳までの子どもが対象です。',
    targetIncome: '令和6年7月1日以降、所得制限なしで全額助成',
    applicationPeriod: '通年（オンライン申請・紙申請に対応）',
    description: '姫路市の乳幼児等・こども医療費助成制度です。医療保険に加入している0歳から18歳までの子どもが医療機関等を受診した際の保険診療自己負担について助成します。',
    assistanceDetails: '医療機関での自己負担額は無料です。保険診療の自己負担額について全額助成されます。兵庫県外で受診した場合や受給者証を提示しなかった場合は、後日払い戻しの手続きが必要です。',
    applicationDetails: 'オンライン申請または紙の申請書で手続きします。子どもの健康保険の資格情報、保護者等の本人確認書類、転入者等で必要な場合は所得課税証明書などを準備します。',
    note: '令和6年7月1日以降の制度拡大により、0歳から18歳までの医療費自己負担を所得制限なしで全額助成する扱いです。',
    officialUrl: 'https://www.city.himeji.lg.jp/kurashi/0000007975.html',
    sourceName: '姫路市 乳幼児等・こども医療費の助成',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'nishinomiya-child-medical-2026',
    city: '西宮市',
    organization: '西宮市 医療年金課',
    maxAmount: '高校生世代まで外来・入院とも無料',
    targetAge: '0歳〜高校3年生（18歳到達後の最初の3月31日まで）',
    eligibility: '西宮市に住民登録があり、健康保険に加入している0歳から高校3年生までの子どもが対象です。生活保護を受けている場合などは対象外です。',
    targetIncome: '令和8年1月1日から年齢・所得区分に関係なく一部負担金無料',
    applicationPeriod: '通年（原則として申請月から助成）',
    description: '西宮市のこども医療費助成制度です。受給者証の交付を受けた子どもの健康保険適用医療費について、市が自己負担額を助成し、費用負担を軽減します。',
    assistanceDetails: '令和8年1月1日から、高校生世代までの子どもを対象に、年齢・所得区分に関係なく外来・入院の一部負担金が無料となっています。',
    applicationDetails: '受給資格の認定申請を行います。健康保険資格が分かるもの、本人確認書類、必要に応じて所得確認書類等を準備します。原則として申請月から助成されるため、出生・転入後は早めの手続きが必要です。',
    note: '従来の乳幼児等医療費助成制度は、令和8年1月1日から「こども医療費助成制度」に名称統一されています。',
    officialUrl: 'https://www.nishi.or.jp/kurashi/iryohijosei/nyuyojito/kodomoiryo-josei.html',
    sourceName: '西宮市 こども医療費助成制度',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'amagasaki-child-medical-2026',
    city: '尼崎市',
    organization: '尼崎市 福祉医療担当',
    maxAmount: '小学4年生相当〜18歳年度末の医療費を区分に応じ助成',
    targetAge: '9歳到達後最初の4月1日〜18歳到達後の最初の3月31日',
    eligibility: '尼崎市に住所があり健康保険に加入している、9歳に達する日の翌日以後の最初の4月1日から18歳に達する日以後の最初の3月31日までの子どもが対象です。',
    targetIncome: '区分により一部負担金が異なります。高校生外来は令和7年7月から対象。',
    applicationPeriod: '通年（高校生外来など対象拡大分は申請が必要）',
    description: '尼崎市のこども医療の受給資格に関する制度です。令和7年7月から高校生の外来もこども医療の助成対象に加えられています。',
    assistanceDetails: '対象年齢の子どもについて、健康保険が適用される医療費の自己負担を区分に応じて助成します。高校生の外来助成も対象で、対象者には申請書送付・受給者証送付の案内があります。',
    applicationDetails: '対象者は申請により受給者証の交付を受けます。令和7年4月以降に市外から転入した場合や個別事情がある場合、まだ申請していない場合は速やかに申請します。',
    note: '0歳から小学3年生相当までは乳幼児等医療の制度で扱われます。尼崎市公式サイトでは、こども医療と乳幼児等医療を分けて案内しています。',
    officialUrl: 'https://www.city.amagasaki.hyogo.jp/kurashi/kenko/josei/045kodomo.html',
    sourceName: '尼崎市 こども医療の受給資格など',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'akashi-child-medical-2026',
    city: '明石市',
    organization: '明石市 児童福祉課',
    maxAmount: '0〜18歳の保険診療自己負担を助成',
    targetAge: '0歳〜18歳年度末',
    eligibility: '明石市に住所があり、健康保険に加入している子どもが対象です。助成を受けるには申請が必要です。',
    applicationPeriod: '通年（出生・転入時などに申請）',
    description: '明石市のこども医療費助成制度です。子どもが病気やけがで医療機関等を受診した場合、窓口で支払う医療費のうち保険診療分を助成します。',
    assistanceDetails: '健康保険が適用される医療費の自己負担分を助成します。受給者証を医療機関で提示して利用し、兵庫県外の医療機関を受診した場合などは償還払いの対象になります。',
    applicationDetails: '新規申請はオンライン、窓口、郵送でできます。窓口は明石市役所児童福祉課、あかし総合窓口などで、必要書類を確認して申請します。',
    note: '2026年3月31日から、マイナンバーカードを福祉医療費受給者証として利用できる旨が公式ページで案内されています。',
    officialUrl: 'https://www.city.akashi.lg.jp/kodomo/jidou_fu_ka/kodomo-kyoiku/kosodate/jose.html',
    sourceName: '明石市 こども医療費助成',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'kakogawa-child-medical-2026',
    city: '加古川市',
    organization: '加古川市 医療助成年金課',
    maxAmount: '0〜18歳の保険診療自己負担を助成',
    targetAge: '0歳〜18歳',
    eligibility: '加古川市内に住所があり、健康保険に加入している子どもが対象です。',
    applicationPeriod: '通年（出生・転入時などに申請）',
    description: '加古川市の乳幼児等・こども医療費助成制度です。市内に住所がある健康保険加入の子どもが病気やけがで医療機関等を受診した際、保険診療の自己負担額を助成します。',
    assistanceDetails: '保険診療の自己負担額が助成対象です。県外受診、受給者証の提示忘れ、自己負担金を超えて支払った場合などは、後日払い戻しの申請を行います。',
    applicationDetails: '医療助成年金課医療助成係で申請します。郵送、窓口、オンラインによる医療費助成金の請求手続きなどが公式ページで案内されています。',
    note: '医療費の償還払いは、医療助成年金課、各市民センター、東加古川市民総合サービスプラザなどの窓口またはオンライン申請で扱われます。',
    officialUrl: 'https://www.city.kakogawa.lg.jp/soshikikarasagasu/kenkouiryou/iryojoseinenkinka/iryojosei/1416213237850.html',
    sourceName: '加古川市 乳幼児等・こども医療費助成制度',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'takarazuka-child-medical-2026',
    city: '宝塚市',
    organization: '宝塚市 医療助成担当',
    maxAmount: '出生〜中学3年生の医療費を所得要件なしで助成',
    targetAge: '出生〜中学3年生（15歳到達後の最初の3月31日まで）',
    eligibility: '出生から中学3年生までで、宝塚市に住民登録があり、健康保険に加入し、生活保護を受給していない子どもが対象です。',
    targetIncome: '所得要件なし。ただし県補助判定のため所得確認書類が必要になる場合あり。',
    applicationPeriod: '通年（出生・転入時などに申請）',
    description: '宝塚市の乳幼児等医療費助成・こども医療費助成制度です。出生から中学3年生までの子どもの医療費負担を軽減します。',
    assistanceDetails: '令和6年1月1日からの制度拡充により、所得にかかわらず受給できます。健康保険適用の診療が助成対象で、保険適用外の費用は対象外です。',
    applicationDetails: '受給資格認定のため申請を行います。宝塚市で所得を把握できない保護者等がいる場合は、所得・課税証明書または地方税関係情報取得に関する同意書が必要です。',
    note: '兵庫県が行う医療費助成と宝塚市独自の医療費助成の共同事業として実施されています。',
    officialUrl: 'https://www.city.takarazuka.hyogo.jp/1060682/1060702/1061590/1041227/1040013.html',
    sourceName: '宝塚市 乳幼児等医療費助成・こども医療費助成',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'itami-child-medical-2026',
    city: '伊丹市',
    organization: '伊丹市 後期医療福祉課',
    maxAmount: '小学1年〜中学3年の通院無料／高校生世代の入院無料など',
    targetAge: '乳幼児等・こども世代（高校生世代の入院助成を含む）',
    eligibility: '伊丹市に住所があり、健康保険に加入している乳幼児等・こどもが対象です。制度区分ごとに受給者証の交付・更新があります。',
    targetIncome: '令和5年7月から乳幼児等・こども医療費助成制度の所得制限を撤廃',
    applicationPeriod: '通年（申請後、資格要件を満たした場合に受給者証を郵送）',
    description: '伊丹市の乳幼児等・こども医療費助成制度です。子育て家庭の経済的負担を軽減するため、医療費の自己負担を助成します。',
    assistanceDetails: '令和4年7月から小学1年生から中学3年生までの通院医療費の一部負担金を無料化し、令和5年7月から所得制限を撤廃、高校生世代の入院費も無料としています。',
    applicationDetails: '福祉医療費助成制度は申請手続きが必要です。所得判定などで資格要件を満たした場合、受給者証が郵送で交付されます。受給者証は毎年7月1日の更新があります。',
    note: '入院時の差額ベッド代、文書料、健康診断など保険給付とならないものは助成対象外です。',
    officialUrl: 'https://www.city.itami.lg.jp/SOSIKI/KENKOFUKUSHI/KOKI_IRYOF/HUKUSIIRYOSEIDO/1385628547589.html',
    sourceName: '伊丹市 乳幼児等・こども医療費助成制度',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'kawanishi-child-medical-2026',
    city: '川西市',
    organization: '川西市 医療助成・年金課',
    maxAmount: '乳幼児は外来・入院無料／こども医療は区分に応じ無料・償還払い',
    targetAge: '0歳〜高校3年生相当（制度区分により扱いが異なる）',
    eligibility: '川西市に住所があり、健康保険に加入している乳幼児・こどもが対象です。生活保護など他制度が優先される場合は対象外です。',
    targetIncome: '令和5年7月から乳幼児・こども医療費助成制度の所得制限を撤廃。ただし県補助判定のため所得確認が必要。',
    applicationPeriod: '通年（出生・転入・更新時など）',
    description: '川西市の福祉医療費助成制度のうち、乳幼児・こども医療費助成に関する制度です。市が兵庫県の医療費助成制度に上乗せして、子どもの医療費負担を軽減しています。',
    assistanceDetails: '乳幼児等医療は外来・入院が無料です。こども医療も外来・入院の助成があり、令和5年7月診療分から高校生の入院も無料とされています。高校生分などは受給者証発行や償還払いの扱いが異なるため、公式ページで確認が必要です。',
    applicationDetails: '保険資格が確認できるもの、所得確認に必要な課税証明書または地方税関係情報取得の同意書などを準備します。出生時の乳幼児等医療費受給者証はオンライン申請も案内されています。',
    note: '川西市は所得制限を撤廃していますが、兵庫県補助金の交付対象確認のため、対象児童の保護者等の所得確認が必要です。',
    officialUrl: 'https://www.city.kawanishi.hyogo.jp/kurashi/fukushi_kaigo/iryo_kenshin/1001276.html',
    sourceName: '川西市 福祉医療費助成制度',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'sanda-child-medical-2026',
    city: '三田市',
    organization: '三田市 国保医療課',
    maxAmount: '全年齢の入院無料／未就学児通院無料／小学生以上は区分に応じ助成',
    targetAge: '0歳〜高校生期（18歳到達年度末まで）',
    eligibility: '三田市内に住所があり、何らかの健康保険に加入している0歳から高校生期までの子どもが対象です。',
    applicationPeriod: '通年（窓口または郵送で申請）',
    description: '三田市の乳幼児等・こども医療費助成制度（子育て支援医療費助成制度）です。0歳から高校生期までの子どもの医療費負担を軽減します。',
    assistanceDetails: '全年齢について入院は世帯所得にかかわらず無料です。未就学児の通院も所得にかかわらず無料です。小学生から高校生期までの通院は、所得区分により無料または一部負担金がかかります。',
    applicationDetails: '国保医療課給付係で申請します。窓口申請では子どもの保険情報が分かるもの、転入者の場合は所得・課税証明書などを準備します。郵送申請も可能です。',
    note: '受給者証は毎年6月下旬に新しいものが送付され、毎年7月の更新で色が変わります。',
    officialUrl: 'https://www.city.sanda.lg.jp/soshiki/33/gyomu/kosodate_kyoiku/4358.html',
    sourceName: '三田市 乳幼児等・こども医療費助成制度',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'ashiya-child-medical-2026',
    city: '芦屋市',
    organization: '芦屋市 保険課医療助成係',
    maxAmount: '0歳無料／1歳〜中3は所得区分に応じ無料または外来800円／高校生相当は外来800円・入院無料',
    targetAge: '出生〜高校生相当（18歳到達後の最初の3月31日まで）',
    eligibility: '芦屋市に住所があり、健康保険に加入している、出生から高校生相当までの子どもが対象です。生活保護法による医療扶助を受けている場合は対象外です。',
    targetIncome: '0歳と高校生相当は所得確認不要。1歳〜中学3年生は所得区分により負担が異なる。',
    applicationPeriod: '通年（受給者証の交付手続きが必要）',
    description: '芦屋市の乳幼児等・こども医療費助成制度です。健康保険が適用される医療費について、県と市が自己負担金の全部または一部を助成します。',
    assistanceDetails: '0歳は外来・入院とも負担なしです。1歳から中学3年生は所得区分により負担なしまたは外来800円・入院負担なしとなります。高校生相当も助成対象で、外来800円・入院負担なしの扱いです。',
    applicationDetails: '受給者証の交付手続きが必要です。健康保険資格が分かるもの、本人確認書類、必要な場合は所得確認書類や地方税関係情報取得の同意書を準備します。',
    note: '令和6年7月1日から制度が拡充され、高校生相当まで助成対象になっています。',
    officialUrl: 'https://www.city.ashiya.lg.jp/fukushi/iryou/nyuuyoujikodomo_kakudai0607.html',
    sourceName: '芦屋市 乳幼児等・こども医療費助成制度',
  }),
];
