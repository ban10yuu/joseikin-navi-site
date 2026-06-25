import { Grant } from '@/lib/types';

const verifiedAt = '2026-06-25';

export type MunicipalChildMedicalSeed = {
  slug: string;
  city: string;
  prefecture: string;
  title: string;
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
  sourceUrls?: string[];
};

export function createMunicipalChildMedicalGrant(seed: MunicipalChildMedicalSeed): Grant {
  return {
    slug: seed.slug,
    title: seed.title,
    organization: seed.organization,
    type: 'local',
    maxAmount: seed.maxAmount,
    maxAmountNum: 0,
    category: 'childcare',
    prefecture: seed.prefecture,
    tags: [seed.city, seed.prefecture, '子ども医療費', '市町村公式', '公式確認'],
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
        heading: '対象者',
        content: `<p>${seed.eligibility}</p>${seed.targetIncome ? `<p>${seed.targetIncome}</p>` : '<p>所得制限の有無は公式ページ上で一律に確認できないため、申請前に市の窓口で確認してください。</p>'}`
      },
      {
        heading: '助成内容',
        content: `<p>${seed.assistanceDetails}</p><p>助成対象は原則として健康保険が適用される診療分です。保険適用外の費用、入院時の食事代、差額ベッド代、健康診断、予防接種、文書料などは対象外となる場合があります。</p>`
      },
      {
        heading: '申請方法',
        content: `<p>${seed.applicationDetails}</p><p>出生、転入、健康保険の変更、住所・氏名の変更、受給資格証の紛失、県外受診や資格証未提示時の払い戻しなどは、別途届出や償還払い申請が必要になる場合があります。</p>`
      },
      {
        heading: '利用時の注意',
        content: `<p>${seed.note}</p><p>制度内容は年度途中で変わることがあります。受診前・申請前に、必ず市公式ページまたは担当窓口で最新情報を確認してください。</p>`
      }
    ],
    officialUrl: seed.officialUrl,
    sourceName: seed.sourceName,
    sourceUrls: seed.sourceUrls || [seed.officialUrl],
    sourceNote: `${seed.city}公式ページで対象年齢、助成内容、申請方法、受給資格証・償還払いの扱いを確認。`,
    verifiedAt,
    publishedAt: '2026-06-25',
  };
}

export const verifiedMunicipalChildMedicalGrants2026: Grant[] = [
  createMunicipalChildMedicalGrant({
    slug: 'hirosaki-child-medical',
    city: '弘前市',
    prefecture: '青森県',
    title: '弘前市 子ども医療費給付',
    organization: '弘前市 こども家庭課 家庭給付係',
    maxAmount: '18歳年度末までの通院・入院の保険診療自己負担分を助成',
    targetAge: '0歳〜18歳到達後の最初の3月31日まで',
    eligibility: '弘前市に住所があり、医療保険に加入している0歳から18歳到達後最初の3月31日までの子どもが対象です。',
    targetIncome: '所得制限はありません。ただし、未就学児は県補助の対象判断のため所得状況を確認すると案内されています。',
    applicationPeriod: '通年（受給資格認定申請が必要）',
    description: '弘前市の子ども医療費給付です。0歳から18歳年度末までの子どもを対象に、通院・入院の保険診療自己負担分を助成します。',
    assistanceDetails: '青森県内の医療機関では受給資格証を提示することで自己負担分が無料になります。県外受診や資格証未提示の場合は、いったん支払った後に償還払いを申請します。',
    applicationDetails: '受給資格認定申請が必要です。申請書、加入医療保険の内容が分かるもの、必要に応じてマイナンバー確認書類や地方税情報照会同意書を準備します。',
    note: '接骨院等での扱いは一部施設に限られるため、すべての受診先で現物給付になるとは限りません。保険適用外費用や食事療養費まで無料とは記載しないでください。',
    officialUrl: 'https://www.city.hirosaki.aomori.jp/kyouiku/kosodate/kodomoiryouhi.html',
    sourceName: '弘前市 子ども医療費給付',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'ise-child-medical',
    city: '伊勢市',
    prefecture: '三重県',
    title: '伊勢市 こども医療費助成制度',
    organization: '伊勢市 医療保険課',
    maxAmount: '18歳年度末までの通院・入院の保険適用医療費を助成',
    targetAge: '18歳到達年度まで',
    eligibility: '伊勢市に住所があり、国民健康保険・社会保険等に加入し、他の福祉医療費助成や生活保護を受けていない子どもが対象です。',
    targetIncome: '令和6年9月1日から所得制限は撤廃されています。ただし、年1回の所得確認は継続されています。',
    applicationPeriod: '通年（受給資格申請が必要）',
    description: '伊勢市のこども医療費助成制度です。18歳年度末までの子どもを対象に、通院・入院の保険適用医療費を助成します。',
    assistanceDetails: '保険適用分を償還給付または現物給付で助成します。現物給付はすべての対象児童が対象で、三重県内医療機関では窓口負担無料の対象と案内されています。県外受診では受給資格証を使えず、領収書による申請が必要です。',
    applicationDetails: '申請場所は医療保険課、二見・小俣・御薗総合支所生活福祉課です。子どもの保険情報、預貯金通帳、マイナンバー確認書類、同意書などを準備します。',
    note: '公式ページでは償還給付用と現物給付用の受給資格証説明が併記されています。資格証の色や細かい運用差は申請時に確認してください。',
    officialUrl: 'https://www.city.ise.mie.jp/kosodate/gyosei/k_josei/1002413.html',
    sourceName: '伊勢市 こども医療費助成制度',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'itami-child-medical',
    city: '伊丹市',
    prefecture: '兵庫県',
    title: '伊丹市 乳幼児等・こども医療費助成制度',
    organization: '伊丹市 後期医療福祉課',
    maxAmount: '中学3年生までの通院・入院、高校生世代の入院を助成',
    targetAge: '通院は0歳〜中学3年生、入院は0歳〜高校生世代',
    eligibility: '通院は0歳から15歳（中学3年生まで）、入院は0歳から18歳（高校生世代まで）の子どもが対象です。',
    targetIncome: '所得制限はありません。',
    applicationPeriod: '通年（資格申請が必要）',
    description: '伊丹市の乳幼児等・こども医療費助成制度です。0歳から中学3年生までの通院・入院と、高校生世代の入院について医療費負担を軽減します。',
    assistanceDetails: '0歳から中学3年生までは通院・入院とも自己負担なし、高校生世代は入院のみ自己負担なしと案内されています。兵庫県内では受給者証を提示し、県外受診は一旦支払い後に払い戻しを申請します。',
    applicationDetails: '子どもの被保険者証等、申請者の本人確認書類、場合により世帯主印、課税証明書または地方税情報取得同意書などを準備し、健康福祉部保健医療推進室後期医療福祉課で手続きします。',
    note: '高校生世代の通院は公式表で対象外です。「18歳まで通院無料」とは記載しないでください。',
    officialUrl: 'https://www.city.itami.lg.jp/SOSIKI/KENKOFUKUSHI/KOKI_IRYOF/HUKUSIIRYOSEIDO/1385628547589.html',
    sourceName: '伊丹市 乳幼児等・こども医療費助成制度について',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'yonago-child-medical',
    city: '米子市',
    prefecture: '鳥取県',
    title: '米子市 特別医療費助成制度（小児）',
    organization: '米子市 保険年金課 年金医療担当',
    maxAmount: '18歳年度末まで所得制限なしで自己負担額を無料化',
    targetAge: '0歳〜18歳到達後の最初の3月31日まで',
    eligibility: '0歳から18歳に達した日以後最初の3月31日までの子どもが対象です。',
    targetIncome: '所得制限はありません。',
    applicationPeriod: '通年（受給資格証の申請が必要。郵送申請可）',
    description: '米子市の小児向け特別医療費助成制度です。0歳から18歳年度末までを対象に、所得制限なしで自己負担額を無料とする制度です。',
    assistanceDetails: '受診時は健康保険情報を確認できるものと受給資格証を提示します。院外処方の場合は薬局でも受給資格証を提示します。鳥取県外の医療機関では使用できず、いったん支払い後に特別医療費を申請します。',
    applicationDetails: '健康保険情報が確認できるもの、別世帯の人が手続きする場合の印章、手続きする人の本人確認書類を準備します。郵送申請も可能です。',
    note: '鳥取県外でも受給資格証が使えるとは記載しないでください。令和6年3月31日以前の旧自己負担額は現行説明に混ぜないでください。',
    officialUrl: 'https://www.city.yonago.lg.jp/42368.htm',
    sourceName: '米子市 小児（18歳未満）',
    sourceUrls: [
      'https://www.city.yonago.lg.jp/42368.htm',
      'https://www.city.yonago.lg.jp/42202.htm',
      'https://www.city.yonago.lg.jp/36581.htm'
    ],
  }),
  createMunicipalChildMedicalGrant({
    slug: 'izumo-child-medical',
    city: '出雲市',
    prefecture: '島根県',
    title: '出雲市 子ども医療費助成制度',
    organization: '出雲市 子ども政策課',
    maxAmount: '未就学児は無料、小学生〜高校生年代は月額上限付きで軽減',
    targetAge: '0歳〜満18歳到達後最初の3月31日まで',
    eligibility: '未就学児は乳幼児等医療費助成、小学生から高校生年代は子ども医療費助成の対象です。生活保護を受けている場合は対象外です。',
    applicationPeriod: '通年（オンライン申請可）',
    description: '出雲市の子ども医療費助成制度です。未就学児は乳幼児等医療費助成、小学生から高校生年代は子ども医療費助成として、保険診療分の医療費負担を軽減しています。',
    assistanceDetails: '未就学児は通院・入院・薬局等が無料です。小学生から高校生年代は、入院が1割負担で月1医療機関2,000円上限、通院が1割負担で月1医療機関1,000円上限、薬局等は無料です。県内では資格証提示、県外では一部例外を除き後日払い戻しです。',
    applicationDetails: 'オンライン申請が可能です。新規申請や保険変更時は、子どもの健康保険情報または資格確認書を準備します。窓口は出雲市役所本庁1階子ども政策課、各行政センター市民サービス課です。',
    note: '未就学児と小学生以上で制度・自己負担が異なります。「18歳まで一律無料」とは記載しないでください。',
    officialUrl: 'https://www.city.izumo.shimane.jp/www/contents/1608020857033/index.html',
    sourceName: '出雲市 小・中学生及び高校生年代を対象とした子ども医療費助成制度',
    sourceUrls: [
      'https://www.city.izumo.shimane.jp/www/contents/1608020857033/index.html',
      'https://www.city.izumo.shimane.jp/www/contents/1285844715456/index.html'
    ],
  }),
  createMunicipalChildMedicalGrant({
    slug: 'marugame-child-medical',
    city: '丸亀市',
    prefecture: '香川県',
    title: '丸亀市 こども医療費助成制度',
    organization: '丸亀市 子育て支援課',
    maxAmount: '18歳年度末まで保険診療の自己負担分を原則無料化',
    targetAge: '満18歳到達後最初の3月31日まで',
    eligibility: '丸亀市に住民登録があり、健康保険に加入している満18歳到達後最初の3月31日までの子どもが対象です。',
    applicationPeriod: '通年（医療証の交付申請が必要）',
    description: '丸亀市のこども医療費助成制度です。18歳年度末までの子どもを対象に、保険診療の自己負担分を原則無料にする制度です。',
    assistanceDetails: '香川県内の医療機関・調剤薬局、丸亀市内の接骨院等では、医療証と保険情報を提示して利用します。市外接骨院等や香川県外医療機関等では、いったん支払った後に申請し、後日振込となります。',
    applicationDetails: '交付申請書、子どもの健康保険資格情報、子どもと被保険者のマイナンバー確認書類、本人確認書類を準備します。問い合わせ先は子育て支援課です。',
    note: '保険外診療、入院時食事代、差額ベッド代、選定療養費、学校等でのけがなどは自己負担になる場合があります。「完全無料」とは記載しないでください。',
    officialUrl: 'https://www.city.marugame.lg.jp/site/life-stage/2308.html',
    sourceName: '丸亀市 こども医療費助成制度',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'niihama-child-medical',
    city: '新居浜市',
    prefecture: '愛媛県',
    title: '新居浜市 子ども医療費助成制度',
    organization: '新居浜市 こども未来課',
    maxAmount: '18歳年度末まで保険診療の自己負担分を全額助成',
    targetAge: '18歳到達後最初の3月31日まで',
    eligibility: '保護者と子どもの住民票が新居浜市にあり、子どもが健康保険に加入していることが条件です。',
    applicationPeriod: '通年（出生・転入時に受給者証を申請）',
    description: '新居浜市の子ども医療費助成制度です。18歳年度末までの子どもについて、保険診療にかかる自己負担分を助成しています。',
    assistanceDetails: '保険診療の自己負担分全額が助成対象です。愛媛県内では保険情報と受給者証を提示することで窓口負担が不要です。県外では受給者証を使えず、いったん支払い後に払い戻し請求を行います。',
    applicationDetails: '出生・転入時に子どもの保険情報が確認できるものを持参し、市役所1階こども未来課16番窓口で受給者証の発行を受けます。県外受診の払い戻しには、領収書、保護者名義通帳、保険情報、受給資格証などが必要です。',
    note: '保護者が市外在住で子どものみ市内在住の場合は対象外と明記されています。県外でも受給者証で窓口無料とは記載しないでください。',
    officialUrl: 'https://www.city.niihama.lg.jp/soshiki/kosodate/kodomoiryou.html',
    sourceName: '新居浜市 子ども医療費助成制度について',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'karatsu-child-medical',
    city: '唐津市',
    prefecture: '佐賀県',
    title: '唐津市 子どもの医療費助成',
    organization: '唐津市 こども家庭課',
    maxAmount: '18歳年度末まで保険診療分を自己負担限度額内に軽減',
    targetAge: '出生日または転入日以降、18歳になる年度末まで',
    eligibility: '出生日または転入日以降、18歳になる年度末までの子どもの保険診療分が対象です。',
    applicationPeriod: '通年（受給資格登録申請が必要）',
    description: '唐津市の子どもの医療費助成です。18歳年度末までの子どもを対象に、保険診療分の医療費を自己負担限度額内に抑える助成を行っています。',
    assistanceDetails: '令和6年7月受診分から高校生などまで拡充されています。受給資格証使用時の自己負担限度額は、入院1,000円、通院・薬局は1回500円で2回目まで、3回目以降無料です。就学前は薬局自己負担なしです。',
    applicationDetails: '申請窓口はこども家庭課または各市民センターです。登録申請書、子どもの健康保険確認書類、子どもと被保険者のマイナンバー、保護者本人確認書類などを準備します。払い戻しは診療月翌月から1年以内です。',
    note: '18歳まで無料とは記載しないでください。自己負担限度額があります。県外どこでも受給資格証が使えるとは記載しないでください。',
    officialUrl: 'https://www.city.karatsu.lg.jp/site/kosodate/1643.html',
    sourceName: '唐津市 子どもの医療費を助成しています',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'yatsushiro-child-medical',
    city: '八代市',
    prefecture: '熊本県',
    title: '八代市 こども医療費助成制度',
    organization: '八代市 こども家庭支援課',
    maxAmount: '0〜18歳年度末まで自己負担なし',
    targetAge: '満18歳到達後最初の3月31日まで',
    eligibility: '八代市に住民登録があり、医療保険に加入する満18歳到達後最初の3月31日までの子どもが対象です。',
    targetIncome: '所得制限はありません。',
    applicationPeriod: '通年（受給資格者証のオンライン申請可）',
    description: '八代市のこども医療費助成制度です。八代市に住民登録があり医療保険に加入する0歳から18歳年度末までの子どもは、保険診療の自己負担分が助成対象です。',
    assistanceDetails: '0歳から18歳は自己負担なしです。熊本県内の外来、調剤、訪問看護等は受給資格者証提示で窓口無料です。入院、月21,000円以上、熊本県外受診、治療用装具などは払い戻し扱いです。',
    applicationDetails: '受給資格者証はオンライン申請できます。窓口はこども家庭支援課または各支所地域振興課です。子どもの医療保険資格情報、受給資格者名義の通帳またはカード、マイナンバー、本人確認書類などを準備します。',
    note: '入院も窓口無料とは記載しないでください。入院や県外受診などは払い戻し扱いです。',
    officialUrl: 'https://attaka.city.yatsushiro.kumamoto.jp/navi/navi-149',
    sourceName: '八代市 こども医療費助成制度について',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'nakatsu-child-medical',
    city: '中津市',
    prefecture: '大分県',
    title: '中津市 こども医療費助成制度',
    organization: '中津市 こども家庭センター',
    maxAmount: '未就学児は自己負担なし、小中高生等は入院無料・通院月額上限付き',
    targetAge: '18歳到達後最初の3月31日まで',
    eligibility: '中津市に住所があり、18歳到達後最初の3月31日まで、保護者の健康保険の被扶養者で、未就職・未婚の人が対象です。',
    applicationPeriod: '通年（事前登録で受給資格者証を取得）',
    description: '中津市のこども医療費助成制度です。18歳年度末までの被扶養・未就職・未婚の子どもを対象に、保険診療の医療費を助成します。',
    assistanceDetails: '令和6年4月以降、未就学児・小中学生・高校生などはいずれも入院・通院が対象です。未就学児は入院・通院とも自己負担なしです。小中学生・高校生などは入院なし、通院は1医療機関ごと月4日目まで上限500円、5日目以降と処方薬は不要です。大分県内と福岡県の一部では窓口提示、対象地域外は償還払いです。',
    applicationDetails: '事前登録で受給資格者証を取得します。出生・転入時は登録申請書、口座登録申請書、子どもの医療保険資格情報、子どもと保護者のマイナンバー確認書類を持って市役所窓口で申請します。',
    note: '全員完全無料とは記載しないでください。現物給付地域は大分県内と福岡県の一部であり、全国窓口無料ではありません。',
    officialUrl: 'https://www.city-nakatsu.jp/doc/2015031300089/',
    sourceName: '中津市 こども医療費助成制度の手続き',
  }),
  createMunicipalChildMedicalGrant({
    slug: 'satsumasendai-child-medical',
    city: '薩摩川内市',
    prefecture: '鹿児島県',
    title: '薩摩川内市 子ども医療費給付事業',
    organization: '薩摩川内市 子育て支援課',
    maxAmount: '18歳年度末まで鹿児島県内の保険診療分の窓口負担を無料化',
    targetAge: '18歳以下、18歳到達後最初の3月31日まで',
    eligibility: '薩摩川内市内に住所がある保護者等に監護されている18歳以下、18歳到達後最初の3月31日までの子どもが対象です。生活保護世帯は対象外です。',
    applicationPeriod: '通年（受給資格登録申請が必要）',
    description: '薩摩川内市の子ども医療費給付事業です。令和7年4月診療分から、18歳年度末までの子どもを対象に、鹿児島県内の保険診療分の窓口負担を無料化しています。',
    assistanceDetails: '鹿児島県内の医療機関等で、マイナ保険証等と子ども医療費給付受給資格者証を提示すると、保険診療分の窓口負担が無料です。県外受診や資格者証未提示の場合は、支払い後に払い戻し申請を行います。',
    applicationDetails: '事前に受給資格登録申請が必要です。登録申請書、子どもの資格確認書等、子ども・保護者・被保険者のマイナンバー、申請者本人確認書類、保護者口座情報を準備します。払い戻しは子育て支援課または各支所・甑島振興局窓口へ申請します。',
    note: '鹿児島県外でも窓口無料とは記載しないでください。令和7年4月1日以降は旧ピンク色の資格者証が使えない点にも注意が必要です。',
    officialUrl: 'https://www.city.satsumasendai.lg.jp/soshiki/1026/2/4/1/146.html',
    sourceName: '薩摩川内市 子ども医療費給付事業',
  }),
];
