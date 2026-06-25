export interface GrantDeadlineLike {
  deadlineDate?: string;
  applicationPeriod: string;
}

export type DeadlineStatus = 'year-round' | 'ending-soon' | 'ended' | 'budget-limited' | null;

export function getDeadlineDateEnd(deadlineDate: string): Date {
  return new Date(`${deadlineDate}T23:59:59+09:00`);
}

export function isGrantExpired(grant: GrantDeadlineLike, now = new Date()): boolean {
  if (!grant.deadlineDate) return false;
  return getDeadlineDateEnd(grant.deadlineDate).getTime() < now.getTime();
}

export function getDeadlineStatus(grant: GrantDeadlineLike, now = new Date()): DeadlineStatus {
  if (grant.deadlineDate) {
    const daysLeft = Math.ceil((getDeadlineDateEnd(grant.deadlineDate).getTime() - now.getTime()) / 86400000);
    if (daysLeft < 0) return 'ended';
    if (daysLeft <= 30) return 'ending-soon';
    return null;
  }

  const period = grant.applicationPeriod;
  if (period.includes('通年') || period.includes('随時')) return 'year-round';
  if (period.includes('予算') || period.includes('先着')) return 'budget-limited';

  return null;
}
