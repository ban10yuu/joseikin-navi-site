export function getSearchTokens(query: string): string[] {
  return query
    .trim()
    .toLowerCase()
    .split(/[\s　]+/)
    .filter(Boolean);
}

export function matchesSearchText(searchableText: string, query: string): boolean {
  const tokens = getSearchTokens(query);
  if (tokens.length === 0) return true;

  const normalizedText = searchableText.toLowerCase();
  return tokens.every((token) => normalizedText.includes(token));
}

export function selectNarrowestSearchKeyword(
  query: string,
  keywordCounts: Record<string, number>
): string | null {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return null;

  return Object.entries(keywordCounts)
    .filter(([keyword]) => normalizedQuery.includes(keyword.toLowerCase()))
    .sort((left, right) => left[1] - right[1])[0]?.[0] ?? null;
}
