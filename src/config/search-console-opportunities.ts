export type SearchConsoleOpportunity = {
  label: string;
  description: string;
  href: string;
  intent: '生活支援' | '子育て' | '介護' | '住まい' | '学び';
  observedQuery: string;
};

export const SEARCH_CONSOLE_OPPORTUNITIES: SearchConsoleOpportunity[] = [
  {
    label: '安中市 安中市民商品券',
    description: '物価高騰対策の商品券。対象者、金額、利用期限を確認できます。',
    href: '/grant/annaka-citizen-voucher-2026/',
    intent: '生活支援',
    observedQuery: '安中市民商品券',
  },
  {
    label: '宮崎市 介護用品支給',
    description: '在宅介護に関する介護用品支給制度。対象要件と確認先を整理しています。',
    href: '/grant/miyazaki-city-nursing-equipment/',
    intent: '介護',
    observedQuery: '宮崎市介護用品支給事業',
  },
  {
    label: '由利本荘市 生活応援券',
    description: '市民向けの生活応援券。使用期間や公式確認先を確認できます。',
    href: '/grant/yurihonjo-life-support-voucher-2026/',
    intent: '生活支援',
    observedQuery: '由利本荘市 生活応援券',
  },
  {
    label: '福山市 おでかけ乗車券',
    description: '高齢者向けのバス・タクシー乗車券。交付額と対象年齢を整理しています。',
    href: '/grant/fukuyama-elderly-support/',
    intent: '介護',
    observedQuery: '福山市 おでかけ乗車券',
  },
  {
    label: '渋谷区 住み替え支援',
    description: '住み替えや家賃助成に関する支援制度を確認できます。',
    href: '/grant/shibuya-housing-subsidy/',
    intent: '住まい',
    observedQuery: '渋谷区 住み替え',
  },
  {
    label: '日本学生支援機構・奨学金関連',
    description: '奨学金返還支援や教育関連の制度をキーワードで探せます。',
    href: '/grants/?q=%E6%97%A5%E6%9C%AC%E5%AD%A6%E7%94%9F%E6%94%AF%E6%8F%B4%E6%A9%9F%E6%A7%8B%20%E5%A5%A8%E5%AD%A6%E9%87%91',
    intent: '学び',
    observedQuery: '日本学生支援機構 奨学金',
  },
  {
    label: '那須町 那須が大好き応援券',
    description: '町民向け応援券。配布額、利用期間、公式ページを確認できます。',
    href: '/grant/nasu-regional-coupon-2026/',
    intent: '生活支援',
    observedQuery: '那須が大好き応援券',
  },
  {
    label: '子育て・出産の給付金',
    description: '児童手当、出産、医療費など、家族向けの制度をまとめて探せます。',
    href: '/category/childcare/',
    intent: '子育て',
    observedQuery: '子育て 出産 補助金',
  },
];
