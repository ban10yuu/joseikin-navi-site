import type { AffiliateOffer } from '../config/affiliate-offers.ts';
import type { Purpose } from './types.ts';
import { getTokyoDate, isValidAffiliateDate } from './affiliate-date.ts';

export type AffiliateAuditSeverity = 'critical' | 'warning';

export interface AffiliateAuditIssue {
  severity: AffiliateAuditSeverity;
  code: string;
  offerId: string;
  message: string;
}

const SENSITIVE_PURPOSES: Purpose[] = ['medical', 'welfare', 'disaster', 'livingSupport'];
const MISLEADING_BUTTON_PATTERN = /申請|受給|必ず|確実|採択/;

function isHttpsUrl(value: string | null): boolean {
  if (!value) return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

export function auditAffiliateOffers(offers: AffiliateOffer[], now = new Date()): AffiliateAuditIssue[] {
  const issues: AffiliateAuditIssue[] = [];
  const idCounts = new Map<string, number>();
  const today = getTokyoDate(now);

  for (const offer of offers) idCounts.set(offer.id, (idCounts.get(offer.id) ?? 0) + 1);

  const add = (offer: AffiliateOffer, code: string, message: string) => {
    issues.push({ severity: offer.enabled ? 'critical' : 'warning', code, offerId: offer.id || '(empty)', message });
  };

  for (const offer of offers) {
    if ((idCounts.get(offer.id) ?? 0) > 1) add(offer, 'DUPLICATE_ID', '案件IDが重複しています。');
    if (!isHttpsUrl(offer.destinationUrl)) add(offer, 'INVALID_DESTINATION_URL', 'HTTPSの案件リンクが必要です。');
    if (offer.partnershipStatus !== 'partnered') add(offer, 'NOT_PARTNERED', '提携完了前の案件です。');
    const validVerifiedAt = isValidAffiliateDate(offer.verifiedAt);
    const validFrom = offer.validFrom === null || isValidAffiliateDate(offer.validFrom);
    const validUntil = offer.validUntil === null || isValidAffiliateDate(offer.validUntil);
    if (!offer.verifiedAt) add(offer, 'MISSING_VERIFIED_AT', '案件の確認日がありません。');
    else if (!validVerifiedAt) add(offer, 'INVALID_VERIFIED_AT', '案件の確認日が実在するYYYY-MM-DD形式ではありません。');
    else if (offer.verifiedAt > today) add(offer, 'FUTURE_VERIFIED_AT', '案件の確認日が未来の日付です。');
    if (offer.validFrom !== null && !validFrom) add(offer, 'INVALID_VALID_FROM', '掲載開始日が実在するYYYY-MM-DD形式ではありません。');
    if (offer.validUntil !== null && !validUntil) add(offer, 'INVALID_VALID_UNTIL', '掲載終了日が実在するYYYY-MM-DD形式ではありません。');
    if (validFrom && validUntil && offer.validFrom && offer.validUntil && offer.validFrom > offer.validUntil) add(offer, 'INVALID_DATE_RANGE', '掲載開始日が終了日より後です。');
    if (validUntil && offer.validUntil && offer.validUntil < today) add(offer, 'EXPIRED_OFFER', '案件の掲載期限が切れています。');
    if (!offer.audiences.length) add(offer, 'MISSING_AUDIENCE', '対象者が設定されていません。');
    if (!offer.intents.length) add(offer, 'MISSING_INTENT', '案件intentが設定されていません。');
    if (!offer.allowedPageTypes.length) add(offer, 'MISSING_PAGE_TYPE', '掲載可能ページが設定されていません。');
    if (offer.allowedPurposes.some((purpose) => SENSITIVE_PURPOSES.includes(purpose))) add(offer, 'SENSITIVE_PURPOSE_ALLOWED', 'センシティブ目的を掲載許可に含めています。');
    if (!SENSITIVE_PURPOSES.every((purpose) => offer.blockedPurposes.includes(purpose))) add(offer, 'MISSING_SENSITIVE_BLOCKS', 'センシティブ目的の除外設定が不足しています。');
    if (MISLEADING_BUTTON_PATTERN.test(offer.buttonText)) add(offer, 'MISLEADING_BUTTON_TEXT', '公式申請と誤認し得るボタン文言です。');
    if (!offer.disclosureText.trim()) add(offer, 'MISSING_DISCLOSURE', 'アフィリエイト開示文がありません。');
    if (!offer.advertiserName.trim()) add(offer, 'MISSING_ADVERTISER', '広告主名がありません。');
    if (!offer.offerName.trim()) add(offer, 'MISSING_OFFER_NAME', '案件名がありません。');
  }

  return issues;
}
