export interface GrantDeadlineLike {
  deadlineDate?: string;
  applicationPeriod?: string;
}

export type DeadlineStatus = 'year-round' | 'ending-soon' | 'ended' | 'budget-limited' | null;

export function getDeadlineDateEnd(deadlineDate: string): Date {
  if (/^\d{4}-\d{2}-\d{2}$/.test(deadlineDate)) {
    return new Date(`${deadlineDate}T23:59:59.999+09:00`);
  }

  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?$/.test(deadlineDate)) {
    return new Date(`${deadlineDate}+09:00`);
  }

  return new Date(deadlineDate);
}

export function formatDeadlineInTokyo(deadlineDate: string): string {
  const includesTime = deadlineDate.includes('T');
  return new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...(includesTime ? { hour: '2-digit', minute: '2-digit', hour12: false } : {}),
  }).format(getDeadlineDateEnd(deadlineDate));
}

export function isGrantExpired(grant: GrantDeadlineLike, now = new Date()): boolean {
  if (!grant.deadlineDate) return false;
  return getDeadlineDateEnd(grant.deadlineDate).getTime() < now.getTime();
}

export function getDeadlineStatus(grant: GrantDeadlineLike, now = new Date()): DeadlineStatus {
  if (grant.deadlineDate) {
    const remainingMs = getDeadlineDateEnd(grant.deadlineDate).getTime() - now.getTime();
    if (remainingMs < 0) return 'ended';
    const daysLeft = Math.ceil(remainingMs / 86400000);
    if (daysLeft <= 30) return 'ending-soon';
    return null;
  }

  const period = grant.applicationPeriod || '';
  if (period.includes('通年') || period.includes('随時')) return 'year-round';
  if (period.includes('予算') || period.includes('先着')) return 'budget-limited';

  return null;
}
