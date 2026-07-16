const kyotoOfficial006Grants: Array<{
  slug: string;
  title: string;
  organization: string;
  maxAmount: string;
  maxAmountNum: number;
  category: Grant['category'];
  relatedCategories?: Grant['relatedCategories'];
  eligibility: string;
  applicationPeriod: string;
  deadlineDate?: string;
  officialUrl: string;
  sourceName: string;
  sourceUrls?: Grant['sourceUrls'];
}> = [
  {
    slug: "kyoto-official-006-001-2026",
    title: "与謝野町 薪ストーブ設置支援事業費補助金",
    organization: "与謝野町",
    maxAmount: "薪ストーブ設置費の一部を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "与謝野町内で薪ストーブを設置し、町税滞納がないなど公式要件を満たす方",
    applicationPeriod: "公式ページ記載の受付・予算状況に従い申請",
    officialUrl: "https://www.town.yosano.lg.jp/life/environment/environmental-protection/entry_861/",
    sourceName: "与謝野町 薪ストーブ設置支援事業費補助金"
  },
  {
    slug: "kyoto-official-006-002-2026",
    title: "与謝野町 老朽空家等除却費補助金制度",
    organization: "与謝野町",
    maxAmount: "老朽空家等除却費の一部を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "disaster"
    ],
    eligibility: "適切に管理されていない老朽空家等の所有者等で公式要件を満たす方",
    applicationPeriod: "事業着手前に公式手続に従い申請",
    officialUrl: "https://www.town.yosano.lg.jp/life/house/unoccupied-house/entry_1104/",
    sourceName: "与謝野町 老朽空家等除却費補助金制度"
  },
  {
    slug: "kyoto-official-006-003-2026",
    title: "与謝野町 家庭向け太陽光発電・蓄電設備導入費補助事業",
    organization: "与謝野町",
    maxAmount: "太陽光発電・蓄電設備導入費を補助",
    maxAmountNum: 0,
    category: "housing",
    relatedCategories: [
      "living"
    ],
    eligibility: "町内の個人住宅に太陽光発電設備等を導入し公式要件を満たす方",
    applicationPeriod: "令和8年6月時点で一部区分は予算上限到達、公式ページの受付状況に従う",
    officialUrl: "https://www.town.yosano.lg.jp/life/environment/environmental-protection/solar/",
    sourceName: "与謝野町 家庭向け太陽光発電・蓄電設備導入費補助事業"
  },
  {
    slug: "kyoto-official-006-004-2026",
    title: "与謝野町 ごみ処理等に関する補助金・支援制度",
    organization: "与謝野町",
    maxAmount: "ごみ処理等に関する補助・支援",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "housing"
    ],
    eligibility: "ごみ処理等に関して町の公式支援要件を満たす町民等",
    applicationPeriod: "公式ページ記載の申請手続・受付状況に従う",
    officialUrl: "https://www.town.yosano.lg.jp/life/environment/garbage/entry_132/",
    sourceName: "与謝野町 ごみ処理等に関する補助金・支援制度"
  },
  {
    slug: "kyoto-official-006-005-2026",
    title: "与謝野町 2026与謝野町くらし応援商品券",
    organization: "与謝野町",
    maxAmount: "商品券を発行",
    maxAmountNum: 0,
    category: "living",
    relatedCategories: [
      "employment"
    ],
    eligibility: "与謝野町が公式に定める商品券事業の対象者・取扱店等",
    applicationPeriod: "令和8年度事業として公式ページの配付・取扱店募集案内に従う",
    officialUrl: "https://www.town.yosano.lg.jp/work/commercial-industrial/subsidies-commercial-industrial/entry_1010/",
    sourceName: "与謝野町 2026与謝野町くらし応援商品券"
  },
  {
    slug: "kyoto-official-006-007-2026",
    title: "与謝野町 信用保証料補助金制度",
    organization: "与謝野町",
    maxAmount: "信用保証料の一部を補助",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "living"
    ],
    eligibility: "京都府中小企業融資制度を利用し、信用保証料を支払った町内事業者等",
    applicationPeriod: "融資・保証料支払後、公式ページ記載の手続に従い申請",
    officialUrl: "https://www.town.yosano.lg.jp/work/commercial-industrial/subsidies-commercial-industrial/3293/",
    sourceName: "与謝野町 信用保証料補助金制度"
  },
  {
    slug: "kyoto-official-006-008-2026",
    title: "与謝野町 産業観光課所管補助事業",
    organization: "与謝野町",
    maxAmount: "産業観光課所管補助事業により異なる",
    maxAmountNum: 0,
    category: "employment",
    relatedCategories: [
      "agriculture"
    ],
    eligibility: "与謝野町産業観光課所管補助事業の公募要件を満たす事業者・団体等",
    applicationPeriod: "公募要領・公式ページ記載の受付期間に従い申請",
    officialUrl: "https://www.town.yosano.lg.jp/work/commercial-industrial/subsidies-commercial-industrial/sangyo/",
    sourceName: "与謝野町 産業観光課所管補助事業"
  },
  {
    slug: "kyoto-official-006-009-2026",
    title: "与謝野町 特定不妊治療交通費助成金事業",
    organization: "与謝野町",
    maxAmount: "特定不妊治療に係る交通費を助成",
    maxAmountNum: 0,
    category: "medical",
    relatedCategories: [
      "childcare"
    ],
    eligibility: "特定不妊治療を受け、町の交通費助成要件を満たす方",
    applicationPeriod: "治療・申請にあたり公式ページ記載の期限・手続に従う",
    officialUrl: "https://www.town.yosano.lg.jp/parenting/pregnancy-childbirth/before-pregnancy/535070/",
    sourceName: "与謝野町 特定不妊治療交通費助成金事業"
  }
];

