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
