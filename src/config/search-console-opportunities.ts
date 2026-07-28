import type { GrantCategory, Purpose } from '@/lib/types';

export type SearchConsoleOpportunity = {
  label: string;
  description: string;
  href: string;
  intent: '生活支援' | '子育て' | '介護' | '住まい' | '学び' | '医療';
  observedQuery: string;
  categories: GrantCategory[];
  purposes: Purpose[];
  prefectures?: string[];
  grantSlugs?: string[];
  seoTitle?: string;
  metaDescription?: string;
  shortAnswer?: string;
};

export const SEARCH_CONSOLE_OPPORTUNITIES: SearchConsoleOpportunity[] = [
  {
    label: '安中市 安中市民商品券',
    description: '物価高騰対策の商品券。対象者、金額、利用期限を確認できます。',
    href: '/grant/annaka-citizen-voucher-2026/',
    intent: '生活支援',
    observedQuery: '安中市民商品券',
    seoTitle: '安中市民商品券｜1人4,000円・利用期限',
    metaDescription: '安中市民商品券は、2026年6月1日時点で安中市に住民登録がある人へ1人4,000円分を配布。利用期限は2027年1月31日です。対象と公式確認先を掲載しています。',
    shortAnswer: '安中市民商品券は、2026年6月1日時点で安中市に住民登録がある人へ、1人4,000円分の商品券を配布する物価高騰対策です。',
    categories: ['living'],
    purposes: ['livingSupport'],
    prefectures: ['群馬県'],
    grantSlugs: ['annaka-citizen-voucher-2026'],
  },
  {
    label: '宮崎市 介護用品支給',
    description: '在宅介護に関する介護用品支給制度。対象要件と確認先を整理しています。',
    href: '/grant/miyazaki-city-nursing-equipment/',
    intent: '介護',
    observedQuery: '宮崎市介護用品支給事業',
    categories: ['nursing'],
    purposes: ['welfare'],
    prefectures: ['宮崎県'],
    grantSlugs: ['miyazaki-city-nursing-equipment'],
  },
  {
    label: '由利本荘市 生活応援券',
    description: '市民向けの生活応援券。使用期間や公式確認先を確認できます。',
    href: '/grant/yurihonjo-life-support-voucher-2026/',
    intent: '生活支援',
    observedQuery: '由利本荘市 生活応援券',
    categories: ['living'],
    purposes: ['livingSupport'],
    prefectures: ['秋田県'],
    grantSlugs: ['yurihonjo-life-support-voucher-2026'],
  },
  {
    label: '福山市 おでかけ乗車券',
    description: '高齢者向けのバス・タクシー乗車券。交付額と対象年齢を整理しています。',
    href: '/grant/fukuyama-elderly-support/',
    intent: '介護',
    observedQuery: '福山市 おでかけ乗車券',
    seoTitle: '福山市 おでかけ乗車券｜75歳以上・年7,000円分',
    metaDescription: '福山市のおでかけ乗車券は、10月1日時点で市内に住所がある満75歳以上の人が対象。年7,000円分を交付し、バス・タクシー共通券とバス専用券に分かれます。',
    shortAnswer: '福山市のおでかけ乗車券は、10月1日時点で市内に住所がある満75歳以上の人へ、年7,000円分の乗車券を交付する外出支援です。',
    categories: ['nursing'],
    purposes: ['welfare'],
    prefectures: ['広島県'],
    grantSlugs: ['fukuyama-elderly-support'],
  },
  {
    label: '渋谷区 住み替え支援',
    description: '住み替えや家賃助成に関する支援制度を確認できます。',
    href: '/grant/shibuya-housing-subsidy/',
    intent: '住まい',
    observedQuery: '渋谷区 住み替え',
    categories: ['housing'],
    purposes: ['housing'],
    prefectures: ['東京都'],
    grantSlugs: ['shibuya-housing-subsidy'],
  },
  {
    label: '日本学生支援機構・奨学金関連',
    description: '給付奨学金と貸与奨学金の違い、対象、申込時期、公式確認先を整理しています。',
    href: '/grant/jasso-shougakukin/',
    intent: '学び',
    observedQuery: '日本学生支援機構 奨学金',
    seoTitle: 'JASSO奨学金｜給付型・第一種・第二種の違い',
    metaDescription: 'JASSO（日本学生支援機構）の奨学金には、返済不要の給付型、無利子の第一種、利子付きの第二種があります。対象、申込時期、公式確認先を整理しています。',
    shortAnswer: 'JASSOの奨学金には返済不要の給付型と、返済が必要な第一種・第二種があります。申請は原則として在学中または進学予定の学校を通じて行います。',
    categories: ['education'],
    purposes: ['education'],
    grantSlugs: ['jasso-shougakukin'],
  },
  {
    label: '奈良市 子ども医療費助成',
    description: '高校生世代までの対象範囲と助成内容、公式確認先を整理しています。',
    href: '/grant/nara-city-child-medical/',
    intent: '子育て',
    observedQuery: '奈良市 子ども医療費助成',
    seoTitle: '奈良市 子ども医療費助成｜高校生世代まで',
    metaDescription: '奈良市の子ども医療費助成は、健康保険に加入する18歳年度末までの子どもが対象です。助成内容、申請方法、奈良市の公式確認先を整理しています。',
    shortAnswer: '奈良市の子ども医療費助成は、健康保険に加入している18歳年度末までの高校生世代の子どもを対象に、保険診療の自己負担額を助成する制度です。',
    categories: ['childcare'],
    purposes: ['childcare'],
    prefectures: ['奈良県'],
    grantSlugs: ['nara-city-child-medical'],
  },
  {
    label: '四日市市 子宮頸がん検診',
    description: '市が行う検診の対象、費用、実施期間と公式確認先を整理しています。',
    href: '/grant/yokkaichi-cancer-screening/',
    intent: '医療',
    observedQuery: '子宮頸がん検診 四日市',
    seoTitle: '四日市市のがん検診｜対象年齢・費用・受診方法',
    metaDescription: '四日市市が実施する令和8年度のがん検診について、胃がん・大腸がん・肺がん・子宮頸がん・乳がんなどの対象年齢、費用、公式確認先を整理しています。',
    shortAnswer: '四日市市では、市内在住で各検診の対象年齢に該当する人を対象に、胃がん・大腸がん・肺がん・子宮頸がん・乳がんなどの検診を実施しています。',
    categories: ['medical'],
    purposes: ['medical'],
    prefectures: ['三重県'],
    grantSlugs: ['yokkaichi-cancer-screening'],
  },
  {
    label: '西原町 かなまる商品券',
    description: '町民向け商品券の配布額、対象基準日、利用期間を確認できます。',
    href: '/grant/nishihara-kanamaru-voucher-2026/',
    intent: '生活支援',
    observedQuery: '西原町 かなまる商品券',
    seoTitle: '西原町 かなまる商品券｜1人1万円・利用期限',
    metaDescription: '西原町かなまる商品券は、2026年3月1日時点で住民登録のある人へ1人1万円分を配布。利用期間は2026年6月1日から10月31日までです。',
    shortAnswer: '西原町かなまる商品券は、2026年3月1日時点で西原町の住民基本台帳に登録されている人へ、1人1万円分の商品券を配布する生活支援事業です。',
    categories: ['living'],
    purposes: ['livingSupport'],
    prefectures: ['沖縄県'],
    grantSlugs: ['nishihara-kanamaru-voucher-2026'],
  },
  {
    label: '名取市 子ども医療費助成',
    description: '18歳年度末までの対象範囲、助成内容、申請期限を整理しています。',
    href: '/grant/natori-child-medical/',
    intent: '子育て',
    observedQuery: '名取市 子ども医療費助成',
    seoTitle: '名取市 子ども医療費助成｜18歳年度末まで',
    metaDescription: '名取市の子ども医療費助成は、0歳から18歳年度末までの子どもが対象です。健康保険適用診療の自己負担額、申請時期、公式確認先を整理しています。',
    shortAnswer: '名取市の子ども医療費助成は、名取市に住民登録がある0歳から18歳年度末までの子どもについて、健康保険適用診療の自己負担額を助成する制度です。',
    categories: ['childcare'],
    purposes: ['childcare'],
    prefectures: ['宮城県'],
    grantSlugs: ['natori-child-medical'],
  },
  {
    label: '那須町 那須が大好き応援券',
    description: '町民向け応援券。配布額、利用期間、公式ページを確認できます。',
    href: '/grant/nasu-regional-coupon-2026/',
    intent: '生活支援',
    observedQuery: '那須が大好き応援券',
    seoTitle: '那須が大好き応援券｜対象者・1人1万円',
    metaDescription: '那須が大好き応援券は、2026年1月1日時点で那須町に住民登録がある人へ1人1万円分を配布。対象者、利用期間、公式確認先を整理しています。',
    shortAnswer: '那須が大好き応援券は、2026年1月1日時点で那須町内に住民登録がある人へ、1人1万円分の商品券を配布する物価高騰対策です。',
    categories: ['living'],
    purposes: ['livingSupport'],
    prefectures: ['栃木県'],
    grantSlugs: ['nasu-regional-coupon-2026'],
  },
  {
    label: '子育て・出産の給付金',
    description: '児童手当、出産、医療費など、家族向けの制度をまとめて探せます。',
    href: '/category/childcare/',
    intent: '子育て',
    observedQuery: '子育て 出産 補助金',
    categories: ['childcare'],
    purposes: ['childcare'],
  },
];

export function getSearchConsoleOpportunitiesForCategory(category: GrantCategory, limit = 4): SearchConsoleOpportunity[] {
  return SEARCH_CONSOLE_OPPORTUNITIES
    .filter((item) => item.categories.includes(category))
    .slice(0, limit);
}

export function getSearchConsoleOpportunitiesForPrefecture(prefecture: string, limit = 4): SearchConsoleOpportunity[] {
  return SEARCH_CONSOLE_OPPORTUNITIES
    .filter((item) => item.prefectures?.includes(prefecture))
    .slice(0, limit);
}

export function getSearchConsoleOpportunitiesForGrant(input: {
  slug: string;
  category: GrantCategory;
  purposes?: Purpose[];
  prefecture?: string;
}, limit = 4): SearchConsoleOpportunity[] {
  const matched = SEARCH_CONSOLE_OPPORTUNITIES
    .map((item) => {
      let score = 0;
      if (item.grantSlugs?.includes(input.slug)) score += 6;
      if (item.prefectures?.includes(input.prefecture ?? '')) score += 2;
      if (item.categories.includes(input.category)) score += 2;
      if (input.purposes?.some((purpose) => item.purposes.includes(purpose))) score += 1;
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score);

  return matched.map(({ item }) => item).slice(0, limit);
}
