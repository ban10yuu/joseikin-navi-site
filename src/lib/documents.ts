import { Grant, GrantCategory } from './types';

// カテゴリ別の一般的な必要書類
const CATEGORY_DOCUMENTS: Record<GrantCategory, string[]> = {
  childcare: [
    '本人確認書類（マイナンバーカード or 運転免許証）',
    '住民票の写し',
    '戸籍謄本（全部事項証明書）',
    '健康保険証の写し',
    '所得証明書（課税証明書）',
    '振込先口座の通帳コピー',
    '印鑑（認印可）',
  ],
  housing: [
    '本人確認書類（マイナンバーカード or 運転免許証）',
    '住民票の写し',
    '工事見積書 or 契約書の写し',
    '建物の登記事項証明書',
    '工事前後の写真',
    '所得証明書（課税証明書）',
    '振込先口座の通帳コピー',
  ],
  medical: [
    '本人確認書類（マイナンバーカード or 運転免許証）',
    '健康保険証の写し',
    '医師の診断書 or 意見書',
    '住民票の写し',
    '所得証明書（課税証明書）',
    '振込先口座の通帳コピー',
    '印鑑（認印可）',
  ],
  education: [
    '本人確認書類（マイナンバーカード or 運転免許証）',
    '在学証明書 or 入学許可書',
    '成績証明書',
    '住民票の写し',
    '所得証明書（課税証明書・保護者分）',
    '振込先口座の通帳コピー',
  ],
  employment: [
    '本人確認書類（マイナンバーカード or 運転免許証）',
    '事業計画書',
    '登記簿謄本 or 開業届の写し',
    '直近の確定申告書 or 決算書',
    '経費の見積書 or 請求書',
    '振込先口座の通帳コピー',
    '雇用保険被保険者証（雇用関連の場合）',
  ],
  nursing: [
    '本人確認書類（マイナンバーカード or 運転免許証）',
    '介護保険被保険者証',
    '要介護認定通知書 or 障害者手帳の写し',
    '住民票の写し',
    '所得証明書（課税証明書）',
    '振込先口座の通帳コピー',
    '印鑑（認印可）',
  ],
  living: [
    '本人確認書類（マイナンバーカード or 運転免許証）',
    '住民票の写し',
    '所得証明書（課税証明書）',
    '公共料金の領収書（直近3ヶ月分）',
    '振込先口座の通帳コピー',
    '印鑑（認印可）',
  ],
  disaster: [
    '本人確認書類（マイナンバーカード or 運転免許証）',
    '罹災証明書',
    '住民票の写し',
    '被害状況の写真',
    '修理見積書 or 契約書',
    '振込先口座の通帳コピー',
    '印鑑（認印可）',
  ],
};

// 特定キーワードに基づく追加書類
function getExtraDocuments(grant: Grant): string[] {
  const extras: string[] = [];
  const title = grant.title + grant.eligibility;

  if (title.includes('妊') || title.includes('出産')) {
    extras.push('母子健康手帳');
  }
  if (title.includes('ひとり親') || title.includes('児童扶養')) {
    extras.push('ひとり親であることの証明書（戸籍謄本等）');
  }
  if (title.includes('障害') || title.includes('障がい')) {
    extras.push('身体障害者手帳 or 療育手帳 or 精神障害者保健福祉手帳');
  }
  if (title.includes('創業') || title.includes('起業')) {
    extras.push('創業計画書');
  }

  return extras;
}

export function getRequiredDocuments(grant: Grant): string[] {
  const base = CATEGORY_DOCUMENTS[grant.category] || [];
  const extras = getExtraDocuments(grant);

  // Merge and deduplicate
  const all = [...base];
  for (const doc of extras) {
    if (!all.some((d) => d.includes(doc.slice(0, 5)))) {
      all.push(doc);
    }
  }
  return all;
}

// ── ホームページクイズ用のフィルタ定義 ──

export interface QuizOption {
  id: string;
  label: string;
  group: string;
}

export const QUIZ_OPTIONS: QuizOption[] = [
  // 世帯構成
  { id: 'has-children', label: '子育て中（18歳以下の子どもがいる）', group: '世帯構成' },
  { id: 'pregnant', label: '妊娠中 or 出産予定', group: '世帯構成' },
  { id: 'single-parent', label: 'ひとり親家庭', group: '世帯構成' },
  { id: 'elderly', label: '65歳以上の方がいる', group: '世帯構成' },
  { id: 'disability', label: '障がいのある方がいる', group: '世帯構成' },

  // 状況
  { id: 'low-income', label: '住民税非課税 or 低所得世帯', group: '収入・状況' },
  { id: 'job-seeking', label: '求職中 or 転職を検討中', group: '収入・状況' },
  { id: 'starting-business', label: '起業・創業を予定している', group: '収入・状況' },
  { id: 'employed', label: '会社員（雇用保険加入）', group: '収入・状況' },

  // 目的
  { id: 'housing-purchase', label: '住宅の購入・リフォームを予定', group: '目的' },
  { id: 'medical-cost', label: '医療費の負担を減らしたい', group: '目的' },
  { id: 'education-cost', label: '教育費・学費の支援を受けたい', group: '目的' },
  { id: 'nursing-care', label: '介護サービスを利用中', group: '目的' },
  { id: 'disaster-affected', label: '災害の被害を受けた', group: '目的' },
  { id: 'living-support', label: '生活費全般の支援が必要', group: '目的' },
];

// チェックされたオプションに基づいてフィルタ関数を返す
export function quizFilterGrants(grants: Grant[], checked: Set<string>, prefecture: string | null): Grant[] {
  let result = grants;

  // 地域フィルタ
  if (prefecture) {
    result = result.filter((g) => g.prefecture === prefecture || g.prefecture === '全国');
  }

  // チェックが何もなければ全件返す
  if (checked.size === 0) return result;

  // 各チェックに対応するフィルタ条件（OR結合）
  const matchers: ((g: Grant) => boolean)[] = [];

  if (checked.has('has-children')) matchers.push((g) => g.category === 'childcare');
  if (checked.has('pregnant')) matchers.push((g) =>
    g.category === 'childcare' && (g.title.includes('出産') || g.title.includes('妊') || g.title.includes('育児'))
  );
  if (checked.has('single-parent')) matchers.push((g) =>
    g.title.includes('ひとり親') || g.title.includes('児童扶養') || g.eligibility.includes('ひとり親')
  );
  if (checked.has('elderly')) matchers.push((g) =>
    g.category === 'nursing' || g.title.includes('高齢') || g.title.includes('介護') || g.title.includes('年金')
  );
  if (checked.has('disability')) matchers.push((g) =>
    g.title.includes('障害') || g.title.includes('障がい') || g.eligibility.includes('障害') || g.eligibility.includes('障がい')
  );
  if (checked.has('low-income')) matchers.push((g) =>
    g.category === 'living' || g.title.includes('生活') || g.title.includes('非課税') || g.title.includes('給付金')
  );
  if (checked.has('job-seeking')) matchers.push((g) =>
    g.category === 'employment' || g.title.includes('求職') || g.title.includes('職業訓練') || g.title.includes('雇用')
  );
  if (checked.has('starting-business')) matchers.push((g) =>
    g.title.includes('創業') || g.title.includes('起業') || g.title.includes('事業') || g.title.includes('融資')
  );
  if (checked.has('employed')) matchers.push((g) =>
    g.title.includes('育児休業') || g.title.includes('傷病手当') || g.title.includes('雇用') || g.title.includes('介護休業')
  );
  if (checked.has('housing-purchase')) matchers.push((g) => g.category === 'housing');
  if (checked.has('medical-cost')) matchers.push((g) => g.category === 'medical');
  if (checked.has('education-cost')) matchers.push((g) => g.category === 'education');
  if (checked.has('nursing-care')) matchers.push((g) => g.category === 'nursing');
  if (checked.has('disaster-affected')) matchers.push((g) => g.category === 'disaster');
  if (checked.has('living-support')) matchers.push((g) => g.category === 'living');

  if (matchers.length === 0) return result;

  return result.filter((g) => matchers.some((m) => m(g)));
}
