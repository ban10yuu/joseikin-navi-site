function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function compactMetaDescription(value: string, maxLength = 118): string {
  const text = normalizeWhitespace(value);
  if (text.length <= maxLength) return text;

  const sentences = text.match(/[^。！？!?]+[。！？!?]?/gu) ?? [text];
  let output = '';
  for (const sentence of sentences) {
    const next = `${output}${sentence}`;
    if (next.length > maxLength) break;
    output = next;
  }

  if (output.length > 0) return output.replace(/[、,;；：:\s]+$/u, '');

  const clipped = text.slice(0, maxLength - 1).replace(/[、,;；：:\s]+$/u, '');
  return `${clipped}…`;
}

export function grantMetaDescription(input: {
  title: string;
  organization: string;
  eligibility: string;
  amount: string;
  deadline: string;
  checked: string;
  hasOfficialSource: boolean;
}): string {
  if (!input.hasOfficialSource) {
    return compactMetaDescription(
      `${input.title}（${input.organization}）の掲載ページです。公式情報の確認先は未登録のため、制度の有無や対象条件は実施機関で確認してください。`,
    );
  }

  return compactMetaDescription(
    `${input.title}（${input.organization}）の対象者、支援額、申請期間、公式情報の確認先を整理。支援内容は${input.amount}。${input.checked}。申請前に公式ページで最新条件を確認してください。`,
  );
}

function formatJapaneseDate(value: string | null): string | null {
  if (!value) return null;
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/u);
  if (!match) return null;
  return `${Number(match[1])}年${Number(match[2])}月${Number(match[3])}日`;
}

export function municipalityMeta(input: {
  prefecture: string;
  municipality: string;
  officialLinkedCount: number;
  openCount: number;
  latestCheckedAt: string | null;
}): { title: string; description: string } {
  const count = input.officialLinkedCount.toLocaleString('ja-JP');
  const checkedAt = formatJapaneseDate(input.latestCheckedAt);
  const facts = [
    input.openCount > 0 ? `受付中${input.openCount.toLocaleString('ja-JP')}件` : null,
    checkedAt ? `公式情報の最終確認日${checkedAt}` : null,
  ].filter(Boolean);
  const factText = facts.length > 0 ? `${facts.join('、')}。` : '';

  return {
    title: `${input.municipality}の補助金・助成金・給付金一覧｜公式情報${count}件・${input.prefecture}`,
    description: compactMetaDescription(
      `${input.municipality}で使える可能性のある補助金・助成金・給付金を${count}件掲載。${factText}対象者、支援額、申請期限と公式情報の確認先を整理しています。`,
    ),
  };
}
