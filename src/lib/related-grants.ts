import type { Audience, GrantStatus, Purpose, SupportType } from './types.ts';
import { hasOfficialSource } from './grant-source.ts';

export interface RelatedGrantLike {
  slug: string;
  audiences: Audience[];
  primaryPurpose: Purpose;
  purposes: Purpose[];
  prefecture: string;
  supportType: SupportType;
  status: GrantStatus;
  officialUrl: string;
  sourceUrls?: string[];
}

function intersects<T>(left: T[], right: T[]): boolean {
  return left.some((item) => right.includes(item));
}

function scoreRelatedGrant(current: RelatedGrantLike, candidate: RelatedGrantLike): number | null {
  if (candidate.slug === current.slug || !hasOfficialSource(candidate)) return null;
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

function relatedBucketKey(audience: Audience, purpose: Purpose, prefecture: string): string {
  return `${audience}\u001f${purpose}\u001f${prefecture}`;
}

/**
 * 全件走査を各詳細リクエストで繰り返さないための生成時索引。
 * rankRelatedGrants と同じ候補だけを、対象者・目的・地域のバケットから
 * 元データ順に復元して採点するため、表示精度と同点時の順序を維持する。
 */
export function buildRelatedGrantCatalog<T extends RelatedGrantLike>(
  grants: T[],
  limit = 6,
): Map<string, T[]> {
  const buckets = new Map<string, number[]>();

  grants.forEach((grant, index) => {
    if (!hasOfficialSource(grant)) return;
    if (grant.status === 'closed' || grant.status === 'suspended') return;

    const purposes = new Set([grant.primaryPurpose, ...grant.purposes]);
    grant.audiences.forEach((audience) => {
      purposes.forEach((purpose) => {
        const key = relatedBucketKey(audience, purpose, grant.prefecture);
        const bucket = buckets.get(key);
        if (bucket) {
          bucket.push(index);
        } else {
          buckets.set(key, [index]);
        }
      });
    });
  });

  return new Map(
    grants.map((current) => {
      const candidateIndexes = new Set<number>();
      const purposes = new Set([current.primaryPurpose, ...current.purposes]);
      const prefectures = new Set([current.prefecture, '全国']);

      current.audiences.forEach((audience) => {
        purposes.forEach((purpose) => {
          prefectures.forEach((prefecture) => {
            const bucket = buckets.get(
              relatedBucketKey(audience, purpose, prefecture)
            );
            bucket?.forEach((index) => candidateIndexes.add(index));
          });
        });
      });

      const candidates = Array.from(candidateIndexes)
        .sort((left, right) => left - right)
        .map((index) => grants[index]);
      return [current.slug, rankRelatedGrants(current, candidates, limit)];
    })
  );
}
