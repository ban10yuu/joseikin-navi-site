import type { Section } from './types.ts';

export type GrantSectionGroup = 'overview' | 'eligibility' | 'amount' | 'period' | 'costs' | 'method' | 'documents' | 'contact' | 'notes';

const RULES: [GrantSectionGroup, RegExp][] = [
  ['documents', /必要書類|提出書類|添付書類|申請書類|様式/],
  ['contact', /問い合わせ|問合せ|連絡先|担当窓口|相談窓口/],
  ['method', /申請方法|申込方法|手続き|手続方法|提出方法|申請の流れ/],
  ['period', /申請期間|受付期間|募集期間|申請期限|締切|スケジュール/],
  ['costs', /対象経費|対象費用|対象内容|補助対象|助成対象|使途/],
  ['amount', /支援内容|支給内容|助成内容|補助内容|支給額|助成額|補助額|給付額|補助率|金額/],
  ['eligibility', /対象者|対象条件|応募資格|利用条件|要件|対象となる方/],
  ['overview', /概要|制度について|事業内容|目的/],
];

export function groupGrantSections(sections: Section[]): Record<GrantSectionGroup, Section[]> {
  const groups: Record<GrantSectionGroup, Section[]> = {
    overview: [], eligibility: [], amount: [], period: [], costs: [], method: [], documents: [], contact: [], notes: [],
  };
  for (const section of sections) {
    const group = RULES.find(([, pattern]) => pattern.test(section.heading))?.[0] ?? 'notes';
    groups[group].push(section);
  }
  return groups;
}
