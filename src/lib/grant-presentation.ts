const ELIGIBILITY_SEPARATOR = /[。；;、\n]+/;
const PLACEHOLDER_HOSTS = new Set(['example.com', 'localhost']);

function isOfficialHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (
      (url.protocol === 'https:' || url.protocol === 'http:')
      && !PLACEHOLDER_HOSTS.has(url.hostname.replace(/^www\./, ''))
    );
  } catch {
    return false;
  }
}

export function splitEligibilityText(text?: string, maxItems = 4): string[] {
  const items = (text || '')
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
      .filter(Boolean)
      .filter(isOfficialHttpUrl),
  )];
}

export function formatVerifiedDate(verifiedAt?: string): string {
  return verifiedAt
    ? `公式出典を${verifiedAt}に確認`
    : '確認日 未登録';
}
