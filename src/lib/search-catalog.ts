import { matchesSearchText } from './search.ts';

export type SearchCatalogRow = [slug: string, searchableText: string];

export function findSearchCatalogSlugs(
  rows: SearchCatalogRow[],
  query: string
): string[] {
  if (!query.trim()) return [];
  return rows
    .filter(([, searchableText]) => matchesSearchText(searchableText, query))
    .map(([slug]) => slug);
}
