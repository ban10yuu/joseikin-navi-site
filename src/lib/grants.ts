import { getCloudflareContext } from '@opennextjs/cloudflare';
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
import {
  getSearchTokens,
  matchesSearchText,
  selectNarrowestSearchKeyword,
} from '@/lib/search';
import {
  findSearchCatalogSlugs,
  type SearchCatalogRow,
} from '@/lib/search-catalog';
import { calculateGrantStats } from '@/lib/grant-stats';
import {
  MIN_INDEXABLE_MUNICIPALITY_GRANTS,
  isIndexableMunicipalityGroup,
} from '@/lib/municipality-indexability';

type RuntimeIndexRow = [
  string, string, string, GrantType, string, number, GrantCategory,
  GrantCategory[] | null, string, string[], string, string, string | null,
  string, string, string | null, string[] | null, string | null, string,
  NormalizedGrant['supportType'], NormalizedGrant['audiences'],
  NormalizedGrant['primaryAudience'], NormalizedGrant['purposes'],
  NormalizedGrant['primaryPurpose'], string | null, NormalizedGrant['status'],
  NormalizedGrant['verificationMethod'], string, NormalizedGrant['contentStatus'],
  NormalizedGrant['indexStatus'], string | null, boolean,
];

type RuntimeRelatedRow = [
  string, string, string, GrantType, string, GrantCategory, string, string,
  string, string | null, string, string[] | null, string | null, string | null,
  NormalizedGrant['status'], NormalizedGrant['supportType'], boolean,
  NormalizedGrant['primaryAudience'], NormalizedGrant['primaryPurpose'],
];

interface RuntimeIndexCatalog {
  grants: RuntimeIndexRow[];
  duplicatedSlugsRemoved: number;
}

interface RuntimeFilterCatalog {
  grants: RuntimeIndexRow[];
}

interface RuntimeInitialListing {
  grants: RuntimeIndexRow[];
  total: number;
  officialLinked: number;
}

interface RuntimeFilterManifest {
  prefectures: Record<string, number>;
  categories: Partial<Record<GrantCategory, number>>;
  audiences: Partial<Record<'individual' | 'business', number>>;
  keywords: Record<string, number>;
}

interface RuntimeMunicipalityIndex {
  municipalities: Record<string, number>;
}

interface RuntimeSearchCatalog {
  grants: SearchCatalogRow[];
}

interface RuntimeSearchCardCatalog {
  grants: RuntimeIndexRow[];
}

interface GrantRepository {
  allGrants: NormalizedGrant[];
  publishedGrants: NormalizedGrant[];
  activePublishedGrants: NormalizedGrant[];
  expiredGrants: NormalizedGrant[];
  officialLinkedGrants: NormalizedGrant[];
  allOfficialLinkedGrants: NormalizedGrant[];
  manuallyVerifiedGrants: NormalizedGrant[];
  duplicatedSlugsRemoved: number;
}

const runtimeAssetRoot = 'data/grants-runtime';
const runtimeIndexPartCount = 4;
const detailShardCount = 256;
const relatedShardCount = 64;
const searchCatalogPartCount = 8;
const searchCardShardCount = 128;
const runtimeFilterManifestFile = 'filter-manifest-v2.json';
let repositoryPromise: Promise<GrantRepository> | null = null;
let municipalityIndexPromise: Promise<RuntimeMunicipalityIndex> | null = null;
let searchCatalogPromise: Promise<SearchCatalogRow[]> | null = null;
const detailShardPromises = new Map<string, Promise<NormalizedGrant[]>>();
const relatedShardPromises =
  new Map<string, Promise<Record<string, string[]>>>();
const relatedCardShardPromises =
  new Map<string, Promise<Record<string, RuntimeRelatedRow>>>();
const searchCardShardPromises =
  new Map<string, Promise<RuntimeIndexRow[]>>();

function hashSlug(slug: string): number {
  let hash = 2166136261;
  for (let index = 0; index < slug.length; index += 1) {
    hash = Math.imul(hash ^ slug.charCodeAt(index), 16777619);
  }
  return hash >>> 0;
}

function detailShard(slug: string): string {
  return (hashSlug(slug) % detailShardCount).toString(16).padStart(2, '0');
}

function relatedShard(slug: string): string {
  return (hashSlug(slug) % relatedShardCount).toString(16).padStart(2, '0');
}

function relatedCardShard(slug: string): string {
  return (hashSlug(slug) % 256).toString(16).padStart(2, '0');
}

function searchCardShard(slug: string): string {
  return (hashSlug(slug) % searchCardShardCount)
    .toString(16)
    .padStart(2, '0');
}

function filterFileKey(value: string): string {
  return hashSlug(value).toString(16).padStart(8, '0');
}

async function loadRuntimeAsset<T>(relativePath: string): Promise<T> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(
        `http://assets.local/${runtimeAssetRoot}/${relativePath}`
      );
      if (response.ok) {
        return await response.json() as T;
      }
    }
  } catch {
    // Next.jsのビルド中はCloudflareのASSETSがまだ未配置のため、
    // 下のローカルファイル読み込みへフォールバックする。
  }

  const [{ readFile }, path] = await Promise.all([
    import('node:fs/promises'),
    import('node:path'),
  ]);
  const filePath = path.join(
    process.cwd(),
    'public',
    runtimeAssetRoot,
    relativePath
  );
  return JSON.parse(await readFile(filePath, 'utf8')) as T;
}

function decodeIndexGrant(row: RuntimeIndexRow): NormalizedGrant {
  const [
    slug, title, organization, type, maxAmount, maxAmountNum, category,
    relatedCategories, prefecture, tags, eligibility, applicationPeriod,
    deadlineDate, description, officialUrl, sourceName, sourceUrls, verifiedAt,
    publishedAt, supportType, audiences, primaryAudience, purposes,
    primaryPurpose, municipality, status, verificationMethod, contentUpdatedAt,
    contentStatus, indexStatus, humanReviewedAt, monetizationAllowed,
  ] = row;
  return {
    slug,
    id: slug,
    title,
    officialName: title,
    organization,
    providerName: organization,
    providerType: type,
    type,
    maxAmount,
    maxAmountNum,
    category,
    relatedCategories: relatedCategories ?? undefined,
    prefecture,
    country: '日本',
    tags,
    eligibility,
    applicationPeriod,
    deadlineDate: deadlineDate ?? undefined,
    description,
    sections: [],
    officialUrl,
    sourceName: sourceName ?? undefined,
    sourceUrls: sourceUrls ?? undefined,
    verifiedAt: verifiedAt ?? undefined,
    publishedAt,
    supportType,
    audiences,
    primaryAudience,
    purposes,
    primaryPurpose,
    municipality,
    status,
    verificationMethod,
    humanReviewedAt,
    sourceTitle: sourceName,
    sourceUrl: officialUrl || null,
    sourceCheckedAt: verifiedAt,
    contentUpdatedAt,
    contentStatus,
    indexStatus,
    affiliateIntents: [],
    monetizationAllowed,
  };
}

function getSourceRank(grant: Grant): number {
  if (isManuallyVerifiedGrant(grant)) return 2;
  if (hasOfficialSource(grant)) return 1;
  return 0;
}

async function getRepository(): Promise<GrantRepository> {
  if (!repositoryPromise) {
    repositoryPromise = Promise.all(
      Array.from({ length: runtimeIndexPartCount }, (_, index) =>
        loadRuntimeAsset<RuntimeIndexCatalog>(`index-${index}.json`)
      )
    )
      .then((catalogParts) => {
        const allGrants = catalogParts
          .flatMap((catalog) => catalog.grants)
          .map(decodeIndexGrant);
        const publishedGrants = [...allGrants].sort((left, right) => {
          const sourceDiff = getSourceRank(right) - getSourceRank(left);
          if (sourceDiff !== 0) return sourceDiff;
          const activeDiff =
            Number(isGrantExpired(left)) - Number(isGrantExpired(right));
          if (activeDiff !== 0) return activeDiff;
          return right.maxAmountNum - left.maxAmountNum;
        });
        const activePublishedGrants = publishedGrants.filter(
          (grant) => !isGrantExpired(grant)
        );
        const expiredGrants = publishedGrants.filter(
          (grant) => isGrantExpired(grant)
        );
        const officialLinkedGrants =
          activePublishedGrants.filter(hasOfficialSource);
        return {
          allGrants,
          publishedGrants,
          activePublishedGrants,
          expiredGrants,
          officialLinkedGrants,
          allOfficialLinkedGrants: publishedGrants.filter(hasOfficialSource),
          manuallyVerifiedGrants:
            activePublishedGrants.filter(isManuallyVerifiedGrant),
          duplicatedSlugsRemoved: catalogParts.reduce(
            (total, catalog) => total + catalog.duplicatedSlugsRemoved,
            0
          ),
        };
      });
  }
  return repositoryPromise;
}

async function loadDetailShard(slug: string): Promise<NormalizedGrant[]> {
  const shard = detailShard(slug);
  let promise = detailShardPromises.get(shard);
  if (!promise) {
    promise = loadRuntimeAsset<NormalizedGrant[]>(`detail-${shard}.json`);
    detailShardPromises.set(shard, promise);
  }
  return promise;
}

async function loadSearchCatalog(): Promise<SearchCatalogRow[]> {
  if (!searchCatalogPromise) {
    searchCatalogPromise = Promise.all(
      Array.from({ length: searchCatalogPartCount }, (_, index) =>
        loadRuntimeAsset<RuntimeSearchCatalog>(
          `search-catalog-${index}.json`
        )
      )
    ).then((catalogs) => catalogs.flatMap((catalog) => catalog.grants));
  }
  return searchCatalogPromise;
}

async function loadSearchCardShard(
  slug: string
): Promise<RuntimeIndexRow[]> {
  const shard = searchCardShard(slug);
  let promise = searchCardShardPromises.get(shard);
  if (!promise) {
    promise = loadRuntimeAsset<RuntimeSearchCardCatalog>(
      `search-card-${shard}.json`
    ).then((catalog) => catalog.grants);
    searchCardShardPromises.set(shard, promise);
  }
  return promise;
}

async function getArbitrarySearchCandidates(
  query: string
): Promise<Grant[]> {
  const matchedSlugs = findSearchCatalogSlugs(
    await loadSearchCatalog(),
    query
  );
  if (matchedSlugs.length === 0) return [];

  const matchedSlugSet = new Set(matchedSlugs);
  const shards = await Promise.all(
    Array.from(new Set(matchedSlugs.map(searchCardShard))).map((shard) => {
      const firstSlug = matchedSlugs.find(
        (slug) => searchCardShard(slug) === shard
      );
      return firstSlug ? loadSearchCardShard(firstSlug) : [];
    })
  );
  const rowsBySlug = new Map(
    shards
      .flat()
      .filter((row) => matchedSlugSet.has(row[0]))
      .map((row) => [row[0], row])
  );
  return matchedSlugs
    .map((slug) => rowsBySlug.get(slug))
    .filter((row): row is RuntimeIndexRow => Boolean(row))
    .map(decodeIndexGrant);
}

async function loadRelatedShard(
  slug: string
): Promise<Record<string, string[]>> {
  const shard = relatedShard(slug);
  let promise = relatedShardPromises.get(shard);
  if (!promise) {
    promise = loadRuntimeAsset<Record<string, string[]>>(
      `related-${shard}.json`
    );
    relatedShardPromises.set(shard, promise);
  }
  return promise;
}

async function loadRelatedCardShard(
  slug: string
): Promise<Record<string, RuntimeRelatedRow>> {
  const shard = relatedCardShard(slug);
  let promise = relatedCardShardPromises.get(shard);
  if (!promise) {
    promise = loadRuntimeAsset<Record<string, RuntimeRelatedRow>>(
      `related-card-${shard}.json`
    );
    relatedCardShardPromises.set(shard, promise);
  }
  return promise;
}

function decodeRelatedGrant(row: RuntimeRelatedRow): NormalizedGrant {
  const [
    slug, title, organization, type, maxAmount, category, prefecture,
    eligibility, applicationPeriod, deadlineDate, officialUrl, sourceUrls,
    verifiedAt, humanReviewedAt, status, supportType, budgetMayCloseEarly,
    primaryAudience, primaryPurpose,
  ] = row;
  return {
    slug,
    id: slug,
    title,
    officialName: title,
    organization,
    providerName: organization,
    providerType: type,
    type,
    maxAmount,
    maxAmountNum: 0,
    category,
    prefecture,
    country: '日本',
    tags: [],
    eligibility,
    applicationPeriod,
    deadlineDate: deadlineDate ?? undefined,
    description: '',
    sections: [],
    officialUrl,
    sourceUrls: sourceUrls ?? undefined,
    verifiedAt: verifiedAt ?? undefined,
    publishedAt: verifiedAt ?? '',
    supportType,
    audiences: [primaryAudience],
    primaryAudience,
    purposes: [primaryPurpose],
    primaryPurpose,
    municipality: null,
    status,
    verificationMethod: humanReviewedAt ? 'human' : 'automated',
    humanReviewedAt,
    sourceTitle: null,
    sourceUrl: officialUrl || null,
    sourceCheckedAt: verifiedAt,
    contentUpdatedAt: verifiedAt ?? '',
    contentStatus: 'published',
    indexStatus: 'index',
    affiliateIntents: [],
    monetizationAllowed: false,
    budgetMayCloseEarly,
  };
}

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
  ].filter(Boolean).join(' ').toLowerCase();
}

export {
  getGrantSourceStatus,
  hasOfficialSource,
  isGrantExpired,
  isManuallyVerifiedGrant,
};

export {
  MIN_INDEXABLE_MUNICIPALITY_GRANTS,
  isIndexableMunicipalityGroup,
};

export interface MunicipalityGroup {
  prefecture: string;
  municipality: string;
  count: number;
}

export async function getAllGrantsUnfiltered(): Promise<Grant[]> {
  return (await getRepository()).allGrants;
}

export async function getInitialGrantListing(): Promise<{
  grants: Grant[];
  total: number;
  officialLinked: number;
}> {
  const listing = await loadRuntimeAsset<RuntimeInitialListing>(
    'listing-initial.json'
  );
  return {
    grants: listing.grants.map(decodeIndexGrant),
    total: listing.total,
    officialLinked: listing.officialLinked,
  };
}

export async function getGrantsForQueryScope(input: {
  prefecture: string | null;
  category: GrantCategory | null;
  audience: 'individual' | 'business' | null;
  query: string;
}): Promise<Grant[]> {
  const manifest = await loadRuntimeAsset<RuntimeFilterManifest>(
    runtimeFilterManifestFile
  );
  const keyword = selectNarrowestSearchKeyword(
    input.query,
    manifest.keywords ?? {}
  );
  const candidates = [
    input.prefecture && manifest.prefectures[input.prefecture] !== undefined
      ? {
        count: manifest.prefectures[input.prefecture],
        paths: [
          `filter-pref-${filterFileKey(input.prefecture)}.json`,
          'filter-pref-national.json',
        ],
      }
      : null,
    input.category && manifest.categories[input.category] !== undefined
      ? {
        count: manifest.categories[input.category] ?? Number.MAX_SAFE_INTEGER,
        paths: [`filter-category-${input.category}.json`],
      }
      : null,
    input.audience && manifest.audiences[input.audience] !== undefined
      ? {
        count: manifest.audiences[input.audience],
        paths: [`filter-audience-${input.audience}.json`],
      }
      : null,
    keyword
      ? {
        count: manifest.keywords[keyword],
        paths: [`filter-keyword-${filterFileKey(keyword)}.json`],
      }
      : null,
  ]
    .filter((candidate): candidate is { count: number; paths: string[] } =>
      Boolean(candidate)
    )
    .sort((left, right) => left.count - right.count);

  if (candidates.length === 0) {
    return input.query.trim()
      ? getArbitrarySearchCandidates(input.query)
      : getAllGrantsUnfiltered();
  }
  const catalogs = await Promise.all(
    candidates[0].paths.map((path) =>
      loadRuntimeAsset<RuntimeFilterCatalog>(path)
    )
  );
  return catalogs.flatMap((catalog) => catalog.grants).map(decodeIndexGrant);
}

export async function getAllGrants(): Promise<Grant[]> {
  return (await getRepository()).activePublishedGrants;
}

export async function getOfficialLinkedGrants(
  options: { includeExpired?: boolean } = {}
): Promise<Grant[]> {
  const repository = await getRepository();
  return options.includeExpired
    ? repository.allOfficialLinkedGrants
    : repository.officialLinkedGrants;
}

export async function getManuallyVerifiedGrants(): Promise<Grant[]> {
  return (await getRepository()).manuallyVerifiedGrants;
}

export async function getExpiredGrants(): Promise<Grant[]> {
  return (await getRepository()).expiredGrants;
}

export async function getGrantQualityStats() {
  const repository = await getRepository();
  const stats = calculateGrantStats(repository.activePublishedGrants);
  return {
    total: stats.total,
    unfilteredTotal: repository.allGrants.length,
    active: repository.activePublishedGrants.length,
    expired: repository.expiredGrants.length,
    officialLinked: stats.officialLinked,
    manuallyVerified: repository.manuallyVerifiedGrants.length,
    unverified:
      repository.activePublishedGrants.length -
      repository.officialLinkedGrants.length,
    duplicatedSlugsRemoved: repository.duplicatedSlugsRemoved,
    categoryCounts: stats.categoryCounts,
    officialCategoryCounts: stats.officialCategoryCounts,
    categoryAssignmentTotal: stats.categoryAssignmentTotal,
    multiplePurposeCount: stats.multiplePurposeCount,
  };
}

export async function getGrantBySlug(
  slug: string
): Promise<NormalizedGrant | undefined> {
  return (await loadDetailShard(slug)).find((grant) => grant.slug === slug);
}

export function grantMatchesCategory(
  grant: Grant,
  category: GrantCategory
): boolean {
  return grant.category === category ||
    grant.relatedCategories?.includes(category) === true;
}

export async function getGrantsByCategory(
  category: GrantCategory
): Promise<Grant[]> {
  return (await getRepository()).officialLinkedGrants.filter(
    (grant) => grantMatchesCategory(grant, category)
  );
}

export async function getGrantsByType(type: GrantType): Promise<Grant[]> {
  return (await getRepository()).officialLinkedGrants.filter(
    (grant) => grant.type === type
  );
}

export async function getGrantsByPrefecture(
  prefecture: string
): Promise<Grant[]> {
  return (await getRepository()).officialLinkedGrants.filter(
    (grant) => grant.prefecture === prefecture || grant.prefecture === '全国'
  );
}

export async function getGrantsByMunicipality(
  prefecture: string,
  municipality: string
): Promise<Grant[]> {
  return (await getRepository()).officialLinkedGrants.filter(
    (grant) =>
      grant.prefecture === prefecture && grant.municipality === municipality
  );
}

export async function getMunicipalityGroups(): Promise<MunicipalityGroup[]> {
  const groups = new Map<string, number>();
  (await getRepository()).officialLinkedGrants.forEach((grant) => {
    if (!grant.prefecture || grant.prefecture === '全国' || !grant.municipality) {
      return;
    }
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

export async function getMunicipalitiesForPrefecture(
  prefecture: string
): Promise<MunicipalityGroup[]> {
  return (await getMunicipalityGroups())
    .filter((item) => item.prefecture === prefecture)
    .sort((left, right) =>
      right.count - left.count ||
      left.municipality.localeCompare(right.municipality)
    );
}

export async function getIndexableMunicipalityHref(
  prefecture: string,
  municipality: string | null | undefined
): Promise<string | null> {
  if (!municipality || !prefecture || prefecture === '全国') return null;
  if (!municipalityIndexPromise) {
    municipalityIndexPromise = loadRuntimeAsset<RuntimeMunicipalityIndex>(
      'municipality-index.json'
    );
  }
  const index = await municipalityIndexPromise;
  const key = `${prefecture}\u001f${municipality}`;
  if ((index.municipalities[key] ?? 0) < MIN_INDEXABLE_MUNICIPALITY_GRANTS) {
    return null;
  }
  return `/municipality/${encodeURIComponent(prefecture)}/${encodeURIComponent(municipality)}/`;
}

export async function getGrantsBySupportType(
  supportType: SupportType
): Promise<Grant[]> {
  return (await getRepository()).officialLinkedGrants.filter(
    (grant) => grant.supportType === supportType
  );
}

export async function getRecentlyUpdatedGrants(
  limit = 10
): Promise<Grant[]> {
  return [...(await getRepository()).officialLinkedGrants]
    .sort((left, right) =>
      right.contentUpdatedAt.localeCompare(left.contentUpdatedAt)
    )
    .slice(0, limit);
}

export async function getRelatedGrants(
  grant: NormalizedGrant,
  limit = 6
): Promise<Grant[]> {
  const relatedSlugs =
    ((await loadRelatedShard(grant.slug))[grant.slug] ?? []).slice(0, limit);
  const cardShards = await Promise.all(
    Array.from(new Set(relatedSlugs.map(relatedCardShard))).map(async (shard) => {
      const firstSlug = relatedSlugs.find(
        (slug) => relatedCardShard(slug) === shard
      );
      return firstSlug ? loadRelatedCardShard(firstSlug) : {};
    })
  );
  const cards = Object.assign({}, ...cardShards);
  return relatedSlugs
    .map((slug) => cards[slug])
    .filter((row): row is RuntimeRelatedRow => Boolean(row))
    .map(decodeRelatedGrant);
}

export async function searchGrants(query: string): Promise<Grant[]> {
  if (getSearchTokens(query).length === 0) return [];
  return (await getRepository()).activePublishedGrants.filter((grant) =>
    matchesSearchText(buildGrantSearchText(grant), query)
  );
}

export async function getAllSlugs(): Promise<string[]> {
  return (await getRepository()).allGrants.map((grant) => grant.slug);
}

export async function getAllTags(
  options: { includeExpired?: boolean } = {}
): Promise<string[]> {
  const repository = await getRepository();
  const pool = options.includeExpired
    ? repository.allOfficialLinkedGrants
    : repository.officialLinkedGrants;
  const tags = new Set<string>();
  pool.forEach((grant) => grant.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export async function getGrantsByTag(tag: string): Promise<Grant[]> {
  return (await getRepository()).officialLinkedGrants.filter(
    (grant) => grant.tags.includes(tag)
  );
}

export function tagToSlug(tag: string): string {
  return encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'));
}

export async function slugToTag(
  slug: string,
  options: { includeExpired?: boolean } = {}
): Promise<string | undefined> {
  const decoded = decodeURIComponent(slug);
  return (await getAllTags(options)).find(
    (tag) => tag.toLowerCase().replace(/\s+/g, '-') === decoded
  );
}

export async function getActivePrefectures(): Promise<string[]> {
  const prefectures = new Set<string>();
  (await getRepository()).officialLinkedGrants.forEach((grant) => {
    if (grant.prefecture !== '全国') prefectures.add(grant.prefecture);
  });
  return Array.from(prefectures).sort();
}

export async function getActiveCategories(): Promise<GrantCategory[]> {
  const categories = new Set<GrantCategory>();
  (await getRepository()).officialLinkedGrants.forEach((grant) => {
    categories.add(grant.category);
    grant.relatedCategories?.forEach((category) => categories.add(category));
  });
  return Array.from(categories);
}
