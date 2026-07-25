import runtimeCatalog from '@/generated/grants-runtime.json';
import type {
  Grant,
  GrantCategory,
  GrantType,
  LegacyGrant,
  NormalizedGrant,
  SupportType,
} from '@/lib/types';
import {
  getGrantSourceStatus,
  hasOfficialSource,
  isManuallyVerifiedGrant,
} from '@/lib/grant-source';
import { isGrantExpired } from '@/lib/deadline';
import { getSearchTokens, matchesSearchText } from '@/lib/search';
import { calculateGrantStats } from '@/lib/grant-stats';
import { rankRelatedGrants } from '@/lib/related-grants';

interface RuntimeGrantCatalog {
  grants: NormalizedGrant[];
  duplicatedSlugsRemoved: number;
}

const { grants: allGrants, duplicatedSlugsRemoved } =
  runtimeCatalog as RuntimeGrantCatalog;

function stripHtml(value: string): string {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildGrantSearchText(grant: LegacyGrant): string {
  const sectionText = grant.sections
    .flatMap((section) => [section.heading, stripHtml(section.content)])
    .join(' ');

  return [
    grant.title,
    grant.organization,
    grant.type,
    grant.maxAmount,
    grant.category,
    grant.prefecture,
    grant.tags.join(' '),
    grant.eligibility,
    grant.targetIncome,
    grant.targetOccupation,
    grant.applicationPeriod,
    grant.description,
    sectionText,
    grant.sourceName,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

export {
  getGrantSourceStatus,
  hasOfficialSource,
  isGrantExpired,
  isManuallyVerifiedGrant,
};

function getSourceRank(grant: Grant): number {
  if (isManuallyVerifiedGrant(grant)) return 2;
  if (hasOfficialSource(grant)) return 1;
  return 0;
}

const publishedGrants = [...allGrants].sort((a, b) => {
  const sourceDiff = getSourceRank(b) - getSourceRank(a);
  if (sourceDiff !== 0) return sourceDiff;

  const activeDiff = Number(isGrantExpired(a)) - Number(isGrantExpired(b));
  if (activeDiff !== 0) return activeDiff;

  return b.maxAmountNum - a.maxAmountNum;
});

const activePublishedGrants = publishedGrants.filter((grant) => !isGrantExpired(grant));
const expiredGrants = publishedGrants.filter((grant) => isGrantExpired(grant));
const officialLinkedGrants = activePublishedGrants.filter(hasOfficialSource);
const allOfficialLinkedGrants = publishedGrants.filter(hasOfficialSource);
const manuallyVerifiedGrants = activePublishedGrants.filter(isManuallyVerifiedGrant);
const sharedGrantStats = calculateGrantStats(activePublishedGrants);

export const MIN_INDEXABLE_MUNICIPALITY_GRANTS = 3;

export interface MunicipalityGroup {
  prefecture: string;
  municipality: string;
  count: number;
}

export function getAllGrantsUnfiltered(): Grant[] {
  return allGrants;
}

export function getAllGrants(): Grant[] {
  return activePublishedGrants;
}

export function getOfficialLinkedGrants(options: { includeExpired?: boolean } = {}): Grant[] {
  return options.includeExpired ? allOfficialLinkedGrants : officialLinkedGrants;
}

export function getManuallyVerifiedGrants(): Grant[] {
  return manuallyVerifiedGrants;
}

export function getExpiredGrants(): Grant[] {
  return expiredGrants;
}

export function getGrantQualityStats(): {
  total: number;
  unfilteredTotal: number;
  officialLinked: number;
  manuallyVerified: number;
  unverified: number;
  duplicatedSlugsRemoved: number;
  active: number;
  expired: number;
  categoryCounts: ReturnType<typeof calculateGrantStats>['categoryCounts'];
  officialCategoryCounts: ReturnType<typeof calculateGrantStats>['officialCategoryCounts'];
  categoryAssignmentTotal: number;
  multiplePurposeCount: number;
} {
  return {
    total: sharedGrantStats.total,
    unfilteredTotal: allGrants.length,
    active: activePublishedGrants.length,
    expired: expiredGrants.length,
    officialLinked: sharedGrantStats.officialLinked,
    manuallyVerified: manuallyVerifiedGrants.length,
    unverified: activePublishedGrants.length - officialLinkedGrants.length,
    duplicatedSlugsRemoved,
    categoryCounts: sharedGrantStats.categoryCounts,
    officialCategoryCounts: sharedGrantStats.officialCategoryCounts,
    categoryAssignmentTotal: sharedGrantStats.categoryAssignmentTotal,
    multiplePurposeCount: sharedGrantStats.multiplePurposeCount,
  };
}

export function getGrantBySlug(slug: string): NormalizedGrant | undefined {
  return allGrants.find((grant) => grant.slug === slug);
}

export function grantMatchesCategory(grant: Grant, category: GrantCategory): boolean {
  return grant.category === category || grant.relatedCategories?.includes(category) === true;
}

export function getGrantsByCategory(category: GrantCategory): Grant[] {
  return officialLinkedGrants.filter((grant) => grantMatchesCategory(grant, category));
}

export function getGrantsByType(type: GrantType): Grant[] {
  return officialLinkedGrants.filter((grant) => grant.type === type);
}

export function getGrantsByPrefecture(prefecture: string): Grant[] {
  return officialLinkedGrants.filter(
    (grant) => grant.prefecture === prefecture || grant.prefecture === '全国'
  );
}

export function getGrantsByMunicipality(prefecture: string, municipality: string): Grant[] {
  return officialLinkedGrants.filter(
    (grant) => grant.prefecture === prefecture && grant.municipality === municipality
  );
}

export function getMunicipalityGroups(): MunicipalityGroup[] {
  const groups = new Map<string, number>();
  officialLinkedGrants.forEach((grant) => {
    if (!grant.prefecture || grant.prefecture === '全国' || !grant.municipality) return;
    const key = `${grant.prefecture}\u001f${grant.municipality}`;
    groups.set(key, (groups.get(key) ?? 0) + 1);
  });

  return Array.from(groups.entries())
    .map(([key, count]) => {
      const [prefecture, municipality] = key.split('\u001f');
      return { prefecture, municipality, count };
    })
    .sort((left, right) => {
      if (left.prefecture !== right.prefecture) {
        return left.prefecture.localeCompare(right.prefecture);
      }
      return right.count - left.count ||
        left.municipality.localeCompare(right.municipality);
    });
}

export function getMunicipalitiesForPrefecture(prefecture: string): MunicipalityGroup[] {
  return getMunicipalityGroups()
    .filter((item) => item.prefecture === prefecture)
    .sort((left, right) => right.count - left.count ||
      left.municipality.localeCompare(right.municipality));
}

export function getGrantsBySupportType(supportType: SupportType): Grant[] {
  return officialLinkedGrants.filter((grant) => grant.supportType === supportType);
}

export function getRecentlyUpdatedGrants(limit = 10): Grant[] {
  return [...officialLinkedGrants]
    .sort((left, right) => right.contentUpdatedAt.localeCompare(left.contentUpdatedAt))
    .slice(0, limit);
}

export function getRelatedGrants(grant: NormalizedGrant, limit = 6): Grant[] {
  const pool = hasOfficialSource(grant) ? officialLinkedGrants : publishedGrants;
  return rankRelatedGrants(grant, pool, limit);
}

export function searchGrants(query: string): Grant[] {
  if (getSearchTokens(query).length === 0) return [];

  return activePublishedGrants.filter((grant) =>
    matchesSearchText(buildGrantSearchText(grant), query)
  );
}

export function getAllSlugs(): string[] {
  return allGrants.map((grant) => grant.slug);
}

export function getAllTags(options: { includeExpired?: boolean } = {}): string[] {
  const tagSet = new Set<string>();
  const pool = options.includeExpired ? allOfficialLinkedGrants : officialLinkedGrants;
  pool.forEach((grant) => grant.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function getGrantsByTag(tag: string): Grant[] {
  return officialLinkedGrants.filter((grant) => grant.tags.includes(tag));
}

export function tagToSlug(tag: string): string {
  return encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'));
}

export function slugToTag(
  slug: string,
  options: { includeExpired?: boolean } = {}
): string | undefined {
  const decoded = decodeURIComponent(slug);
  return getAllTags(options).find(
    (tag) => tag.toLowerCase().replace(/\s+/g, '-') === decoded
  );
}

export function getActivePrefectures(): string[] {
  const prefectures = new Set<string>();
  officialLinkedGrants.forEach((grant) => {
    if (grant.prefecture !== '全国') prefectures.add(grant.prefecture);
  });
  return Array.from(prefectures).sort();
}

export function getActiveCategories(): GrantCategory[] {
  const categories = new Set<GrantCategory>();
  officialLinkedGrants.forEach((grant) => {
    categories.add(grant.category);
    grant.relatedCategories?.forEach((category) => categories.add(category));
  });
  return Array.from(categories);
}
