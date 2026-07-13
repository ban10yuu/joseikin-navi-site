const ELIGIBILITY_SEPARATOR = /[。；;、\n]+/;
const PLACEHOLDER_HOSTS = new Set(['example.com', 'localhost']);
const INTERNAL_AUDIT_PATTERN = /生成データ|旧生成データ|旧データ|HTTP\s*200|Last-Modified|補正理由|補正しました|補正し|重複回避|重複防止|互換slug|内部監査|抽出ログ|AIプロンプト/i;

export function containsInternalAuditText(value?: string): boolean {
  return Boolean(value && INTERNAL_AUDIT_PATTERN.test(value));
}

export function sanitizePublicGrantText(value?: string): string {
  if (!value) return '';

  if (/<[a-z][\s\S]*>/i.test(value)) {
    return value
      .replace(/<(p|li|div|section)[^>]*>[\s\S]*?<\/\1>/gi, (block) => (
        containsInternalAuditText(block) ? '' : block
      ))
      .trim();
  }

  return value
    .split(/(?<=。)/)
    .filter((sentence) => !containsInternalAuditText(sentence))
    .join('')
    .trim();
}

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
    ? `自動照合日：${verifiedAt}`
    : '自動照合日：未登録';
}
