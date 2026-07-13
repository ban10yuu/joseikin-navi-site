import { getDeadlineStatus, isGrantExpired, type GrantDeadlineLike } from './deadline.ts';
import type { GrantStatus, SupportType } from './types.ts';

export interface GrantStatusLike extends GrantDeadlineLike {
  status?: GrantStatus;
  statusOverride?: GrantStatus;
}

export const GRANT_STATUS_LABELS: Record<GrantStatus, string> = {
  scheduled: '受付開始前',
  open: '受付中（公式情報で確認）',
  closingSoon: '締切間近（受付中）',
  closed: '受付終了',
  suspended: '受付一時停止',
  unknown: '受付状況を確認できません',
};

export function getEffectiveGrantStatus(
  grant: GrantStatusLike,
  now = new Date(),
): GrantStatus {
  if (isGrantExpired(grant, now)) return 'closed';

  const statedStatus = grant.statusOverride ?? grant.status ?? 'unknown';
  if (statedStatus === 'closed' || statedStatus === 'suspended' || statedStatus === 'scheduled') {
    return statedStatus;
  }

  if (statedStatus === 'closingSoon') return 'closingSoon';
  if (statedStatus === 'open' && getDeadlineStatus(grant, now) === 'ending-soon') {
    return 'closingSoon';
  }

  return statedStatus;
}

export function getOfficialCtaLabel(status: GrantStatus): string {
  return status === 'closed'
    ? '次回募集・後継制度を公式サイトで確認'
    : '公式ページで募集要項を確認';
}

export function isRepayableSupport(supportType: SupportType | undefined): boolean {
  return supportType === 'loan' || supportType === 'scholarshipLoan';
}
