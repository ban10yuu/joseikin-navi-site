const ELIGIBILITY_SEPARATOR = /[。；;、\n]+/;

export function splitEligibilityText(text: string, maxItems = 4): string[] {
  const items = text
    .split(ELIGIBILITY_SEPARATOR)
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length <= maxItems) return items;

  return [
    ...items.slice(0, maxItems - 1),
    items.slice(maxItems - 1).join('。'),
  ];
}

export function normalizeOfficialUrls(
  officialUrl: string,
  sourceUrls: string[] = [],
): string[] {
  return [...new Set(
    [officialUrl, ...sourceUrls]
      .map((url) => url.trim())
      .filter(Boolean),
  )];
}

export function formatVerifiedDate(verifiedAt?: string): string {
  return verifiedAt
    ? `公式出典を${verifiedAt}に確認`
    : '確認日 未登録';
}
