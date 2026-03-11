// ── 助成金カテゴリ ──
export type GrantCategory =
  | 'childcare'    // 子育て・出産
  | 'housing'      // 住宅・リフォーム
  | 'medical'      // 医療・健康
  | 'education'    // 教育・資格
  | 'employment'   // 就職・転職・起業
  | 'nursing'      // 介護・福祉
  | 'living'       // 生活支援
  | 'disaster';    // 災害・緊急

// ── 助成金タイプ ──
export type GrantType = 'national' | 'local' | 'ngo';

// ── セクション ──
export interface Section {
  heading: string;
  content: string;
}

// ── 助成金データ ──
export interface Grant {
  slug: string;
  title: string;
  organization: string;
  type: GrantType;
  maxAmount: string;        // 表示用: "最大50万円", "月額1.5万円"
  maxAmountNum: number;     // ソート用: 万円単位
  category: GrantCategory;
  prefecture: string;       // "全国" or "東京都" etc.
  tags: string[];           // 3タグ
  eligibility: string;      // 対象者
  targetIncome?: string;    // 対象世帯年収
  targetOccupation?: string; // 対象職業
  applicationPeriod: string;
  description: string;
  sections: Section[];
  officialUrl: string;
  publishedAt: string;
}

// ── カテゴリラベル ──
export const CATEGORY_LABELS: Record<GrantCategory, string> = {
  childcare: '子育て・出産',
  housing: '住宅・リフォーム',
  medical: '医療・健康',
  education: '教育・資格',
  employment: '就職・転職・起業',
  nursing: '介護・福祉',
  living: '生活支援',
  disaster: '災害・緊急',
};

// ── カテゴリカラー ──
export const CATEGORY_COLORS: Record<GrantCategory, string> = {
  childcare: 'bg-pink-100 text-pink-700 border-pink-200',
  housing: 'bg-blue-100 text-blue-700 border-blue-200',
  medical: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  education: 'bg-purple-100 text-purple-700 border-purple-200',
  employment: 'bg-amber-100 text-amber-700 border-amber-200',
  nursing: 'bg-teal-100 text-teal-700 border-teal-200',
  living: 'bg-sky-100 text-sky-700 border-sky-200',
  disaster: 'bg-red-100 text-red-700 border-red-200',
};

// ── タイプラベル ──
export const TYPE_LABELS: Record<GrantType, string> = {
  national: '国の制度',
  local: '自治体の制度',
  ngo: '民間・NPO',
};

// ── タイプカラー ──
export const TYPE_COLORS: Record<GrantType, string> = {
  national: 'bg-blue-600 text-white',
  local: 'bg-emerald-600 text-white',
  ngo: 'bg-violet-600 text-white',
};

// ── 都道府県リスト ──
export const PREFECTURES = [
  '全国',
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
  '岐阜県', '静岡県', '愛知県', '三重県',
  '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
  '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県',
  '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県',
] as const;
