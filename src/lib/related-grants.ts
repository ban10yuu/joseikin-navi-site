import type { Audience, GrantStatus, Purpose, SupportType } from './types.ts';

export interface RelatedGrantLike {
  slug: string;
  audiences: Audience[];
  primaryPurpose: Purpose;
  purposes: Purpose[];
  prefecture: string;
  supportType: SupportType;
  status: GrantStatus;
  officialUrl: string;
}

function intersects<T>(left: T[], right: T[]): boolean {
  return left.some((item) => right.includes(item));
}

function hasOfficialUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function scoreRelatedGrant(current: RelatedGrantLike, candidate: RelatedGrantLike): number | null {
  if (candidate.slug === current.slug || !hasOfficialUrl(candidate.officialUrl)) return null;
  if (candidate.status === 'closed' || candidate.status === 'suspended') return null;
  if (candidate.prefecture !== current.prefecture && candidate.prefecture !== '全国') return null;
  if (!intersects(current.audiences, candidate.audiences)) return null;

  const samePrimaryPurpose = candidate.primaryPurpose === current.primaryPurpose;
  const sharedPurpose = intersects(current.purposes, candidate.purposes);
  if (!samePrimaryPurpose && !sharedPurpose) return null;

  let score = 4;
  score += samePrimaryPurpose ? 5 : 2;
  score += candidate.prefecture === current.prefecture ? 3 : 2;
  if (candidate.supportType === current.supportType) score += 1;
  if (candidate.status === 'open' || candidate.status === 'scheduled') score += 2;
  return score;
}

export function rankRelatedGrants<T extends RelatedGrantLike>(
  current: RelatedGrantLike,
  candidates: T[],
  limit = 6,
): T[] {
  return candidates
    .map((candidate) => ({ candidate, score: scoreRelatedGrant(current, candidate) }))
    .filter((item): item is { candidate: T; score: number } => item.score !== null && item.score >= 8)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map((item) => item.candidate);
}
