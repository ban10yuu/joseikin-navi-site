import type { GrantCategory, Purpose } from './types.ts';

const CATEGORIES: GrantCategory[] = [
  'childcare', 'housing', 'medical', 'education',
  'employment', 'nursing', 'living', 'disaster',
];

interface StatsGrantLike {
  category: GrantCategory;
  relatedCategories?: GrantCategory[];
  purposes?: Purpose[];
  officialUrl: string;
}

function hasHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    const hostname = url.hostname.replace(/^www\./, '');
    return (url.protocol === 'https:' || url.protocol === 'http:')
      && hostname !== 'example.com'
      && hostname !== 'localhost';
  } catch {
    return false;
  }
}

export function calculateGrantStats(grants: StatsGrantLike[]) {
  const officialGrants = grants.filter((grant) => hasHttpUrl(grant.officialUrl));
  const categoryCounts = Object.fromEntries(
    CATEGORIES.map((category) => [
      category,
      grants.filter((grant) => (
        grant.category === category || grant.relatedCategories?.includes(category)
      )).length,
    ]),
  ) as Record<GrantCategory, number>;
  const officialCategoryCounts = Object.fromEntries(
    CATEGORIES.map((category) => [
      category,
      officialGrants.filter((grant) => (
        grant.category === category || grant.relatedCategories?.includes(category)
      )).length,
    ]),
  ) as Record<GrantCategory, number>;

  return {
    total: grants.length,
    officialLinked: officialGrants.length,
    categoryCounts,
    officialCategoryCounts,
    categoryAssignmentTotal: Object.values(categoryCounts).reduce((sum, count) => sum + count, 0),
    multiplePurposeCount: grants.filter((grant) => (grant.purposes?.length ?? 0) > 1).length,
  };
}
