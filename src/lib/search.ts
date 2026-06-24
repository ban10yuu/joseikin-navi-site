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
