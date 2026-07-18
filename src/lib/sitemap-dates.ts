interface SitemapDatedContent {
  contentUpdatedAt?: string | null;
  verifiedAt?: string | null;
  publishedAt?: string | null;
}

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const ISO_DATE_TIME = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,9}))?)?(Z|[+-](\d{2}):(\d{2}))$/;

function isValidCalendarDate(year: number, month: number, day: number): boolean {
  if (year < 1000 || month < 1 || month > 12 || day < 1) return false;
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonth[month - 1];
}

function toValidTimestamp(value: string | null | undefined, now: Date): number | null {
  if (!value) return null;
  const dateMatch = ISO_DATE.exec(value);
  const dateTimeMatch = ISO_DATE_TIME.exec(value);
  const match = dateMatch ?? dateTimeMatch;
  if (!match) return null;

  const [, yearValue, monthValue, dayValue] = match;
  if (!isValidCalendarDate(Number(yearValue), Number(monthValue), Number(dayValue))) return null;

  if (dateTimeMatch) {
    const hour = Number(dateTimeMatch[4]);
    const minute = Number(dateTimeMatch[5]);
    const second = dateTimeMatch[6] ? Number(dateTimeMatch[6]) : 0;
    const offsetHour = dateTimeMatch[9] ? Number(dateTimeMatch[9]) : 0;
    const offsetMinute = dateTimeMatch[10] ? Number(dateTimeMatch[10]) : 0;
    if (hour > 23 || minute > 59 || second > 59 || offsetHour > 14 || offsetMinute > 59) return null;
    if (offsetHour === 14 && offsetMinute !== 0) return null;
  }

  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp) || timestamp > now.getTime()) return null;
  return timestamp;
}

export function getGrantLastModified(content: SitemapDatedContent, now = new Date()): string | undefined {
  for (const value of [content.contentUpdatedAt, content.verifiedAt, content.publishedAt]) {
    if (toValidTimestamp(value, now) !== null) return value ?? undefined;
  }
  return undefined;
}

export function getCollectionLastModified(items: SitemapDatedContent[], now = new Date()): string | undefined {
  let latest: { value: string; timestamp: number } | null = null;
  for (const item of items) {
    const value = getGrantLastModified(item, now);
    const timestamp = toValidTimestamp(value, now);
    if (value && timestamp !== null && (!latest || timestamp > latest.timestamp)) latest = { value, timestamp };
  }
  return latest?.value;
}
