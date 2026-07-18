import { getEffectiveGrantStatus } from './grant-status.ts';
import { hasOfficialSource } from './grant-source.ts';
import { getSearchTokens, matchesSearchText } from './search.ts';
import type { Audience, GrantCategory, GrantStatus, Purpose, SupportType } from './types.ts';

export const GRANTS_PER_PAGE = 24;
export type GrantSort = 'relevance' | 'deadline' | 'checked' | 'amount';
export type AudienceGroup = 'individual' | 'business';

const PURPOSES: Purpose[] = ['childcare', 'housing', 'medical', 'education', 'employment', 'startup', 'businessGrowth', 'digitalTransformation', 'energySaving', 'wageIncrease', 'welfare', 'disaster', 'livingSupport', 'regionalRevitalization', 'research', 'other'];
const SUPPORT_TYPES: SupportType[] = ['grant', 'subsidy', 'benefit', 'allowance', 'loan', 'scholarshipLoan', 'reduction', 'taxCredit', 'insuranceBenefit', 'discount', 'voucher', 'inKind', 'other', 'unknown'];
const STATUSES: GrantStatus[] = ['scheduled', 'open', 'closingSoon', 'closed', 'suspended', 'unknown'];
const CATEGORIES: GrantCategory[] = ['childcare', 'housing', 'medical', 'education', 'employment', 'nursing', 'living', 'disaster'];
const INDIVIDUAL_AUDIENCES: Audience[] = ['individual', 'family', 'student', 'senior', 'personWithDisability', 'jobSeeker'];
const BUSINESS_AUDIENCES: Audience[] = ['soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization'];

type RawSearchParams = Record<string, string | string[] | undefined>;

export interface GrantQuery {
  q: string;
  audience: AudienceGroup | null;
  pref: string | null;
  municipality: string | null;
  category: GrantCategory | null;
  purpose: Purpose | null;
  supportType: SupportType | null;
  provider: string | null;
  status: GrantStatus | null;
  officialOnly: boolean;
  deadlineFrom: string | null;
  deadlineTo: string | null;
  amountMin: number | null;
  amountMax: number | null;
  sort: GrantSort;
  page: number;
}

export interface QueryGrantLike {
  slug: string;
  title: string;
  organization: string;
  providerType?: string;
  type: string;
  audiences?: Audience[];
  primaryAudience?: Audience;
  purposes?: Purpose[];
  primaryPurpose?: Purpose;
  prefecture: string;
  municipality?: string | null;
  supportType?: SupportType;
  status?: GrantStatus;
  statusOverride?: GrantStatus;
  deadlineDate?: string;
  applicationPeriod?: string;
  maxAmountNum: number;
  amountMax?: number;
  officialUrl: string;
  sourceCheckedAt?: string | null;
  verifiedAt?: string;
  contentUpdatedAt?: string;
  publishedAt: string;
  searchText?: string;
  description: string;
  eligibility: string;
  tags: string[];
  category: GrantCategory;
  relatedCategories?: GrantCategory[];
}

function first(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value)?.trim() ?? '';
}

function enumValue<T extends string>(value: string, allowed: readonly T[]): T | null {
  return allowed.includes(value as T) ? value as T : null;
}

function numberValue(value: string): number | null {
  if (!value) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

export function normalizeGrantQuery(params: RawSearchParams): GrantQuery {
  const page = Math.floor(Number(first(params.page)));
  return {
    q: first(params.q).slice(0, 100),
    audience: enumValue(first(params.audience), ['individual', 'business']),
    pref: first(params.pref) || null,
    municipality: first(params.municipality) || null,
    category: enumValue(first(params.cat) || first(params.category), CATEGORIES),
    purpose: enumValue(first(params.purpose), PURPOSES),
    supportType: enumValue(first(params.supportType), SUPPORT_TYPES),
    provider: first(params.provider) || null,
    status: enumValue(first(params.status), STATUSES),
    officialOnly: first(params.official) !== '0',
    deadlineFrom: first(params.deadlineFrom) || null,
    deadlineTo: first(params.deadlineTo) || null,
    amountMin: numberValue(first(params.amountMin)),
    amountMax: numberValue(first(params.amountMax)),
    sort: enumValue(first(params.sort), ['relevance', 'deadline', 'checked', 'amount']) ?? 'relevance',
    page: Number.isFinite(page) && page > 0 ? page : 1,
  };
}

function audienceMatches(grant: QueryGrantLike, group: AudienceGroup): boolean {
  const targets = group === 'individual' ? INDIVIDUAL_AUDIENCES : BUSINESS_AUDIENCES;
  const audiences = grant.audiences ?? (grant.primaryAudience ? [grant.primaryAudience] : []);
  return audiences.some((audience) => targets.includes(audience));
}

function searchText(grant: QueryGrantLike): string {
  return grant.searchText ?? [grant.title, grant.organization, grant.description, grant.eligibility, grant.prefecture, ...grant.tags].join(' ').toLowerCase();
}

function relevanceScore(grant: QueryGrantLike, query: string): number {
  if (!query) return 0;
  const tokens = getSearchTokens(query);
  const title = grant.title.toLowerCase();
  const provider = grant.organization.toLowerCase();
  return tokens.reduce((score, token) => score + (title.includes(token) ? 5 : 0) + (provider.includes(token) ? 2 : 0), 0);
}

export function queryGrants<T extends QueryGrantLike>(grants: T[], query: GrantQuery, now = new Date()) {
  const filtered = grants.filter((grant) => {
    if (query.officialOnly && !hasOfficialSource(grant)) return false;
    if (query.q && !matchesSearchText(searchText(grant), query.q)) return false;
    if (query.audience && !audienceMatches(grant, query.audience)) return false;
    if (query.pref && grant.prefecture !== query.pref && grant.prefecture !== '全国') return false;
    if (query.municipality && grant.municipality !== query.municipality) return false;
    if (query.category && grant.category !== query.category && !grant.relatedCategories?.includes(query.category)) return false;
    if (query.purpose && grant.primaryPurpose !== query.purpose && !grant.purposes?.includes(query.purpose)) return false;
    if (query.supportType && grant.supportType !== query.supportType) return false;
    if (query.provider && grant.providerType !== query.provider && grant.type !== query.provider) return false;
    const effectiveStatus = getEffectiveGrantStatus(grant, now);
    if (query.status ? effectiveStatus !== query.status : effectiveStatus === 'closed') return false;
    if (query.deadlineFrom && (!grant.deadlineDate || grant.deadlineDate < query.deadlineFrom)) return false;
    if (query.deadlineTo && (!grant.deadlineDate || grant.deadlineDate > query.deadlineTo)) return false;
    const amount = grant.amountMax ?? grant.maxAmountNum;
    if (query.amountMin !== null && amount < query.amountMin) return false;
    if (query.amountMax !== null && amount > query.amountMax) return false;
    return true;
  });

  filtered.sort((left, right) => {
    if (query.sort === 'amount') return (right.amountMax ?? right.maxAmountNum) - (left.amountMax ?? left.maxAmountNum);
    if (query.sort === 'deadline') return (left.deadlineDate ?? '9999-12-31').localeCompare(right.deadlineDate ?? '9999-12-31');
    if (query.sort === 'checked') return (right.sourceCheckedAt ?? right.verifiedAt ?? right.contentUpdatedAt ?? right.publishedAt).localeCompare(left.sourceCheckedAt ?? left.verifiedAt ?? left.contentUpdatedAt ?? left.publishedAt);
    return relevanceScore(right, query.q) - relevanceScore(left, query.q)
      || (right.sourceCheckedAt ?? right.verifiedAt ?? right.publishedAt).localeCompare(left.sourceCheckedAt ?? left.verifiedAt ?? left.publishedAt);
  });

  const pageCount = Math.max(1, Math.ceil(filtered.length / GRANTS_PER_PAGE));
  const page = Math.min(query.page, pageCount);
  const start = (page - 1) * GRANTS_PER_PAGE;
  return { items: filtered.slice(start, start + GRANTS_PER_PAGE), total: filtered.length, page, pageCount };
}
