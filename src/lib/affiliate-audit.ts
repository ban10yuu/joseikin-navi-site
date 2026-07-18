import type { AffiliateOffer } from '../config/affiliate-offers.ts';
import type { Purpose } from './types.ts';
import { getTokyoDate, isValidAffiliateDate } from './affiliate-date.ts';
import { isAllowedAffiliateHost } from '../config/affiliate-security.ts';
import { createHash } from 'node:crypto';

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

function isPositiveInteger(value: number | null): boolean {
  return Number.isInteger(value) && Number(value) > 0;
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
    const allowedSensitivePurposes = offer.allowedPurposes.filter((purpose) => SENSITIVE_PURPOSES.includes(purpose));
    if (allowedSensitivePurposes.length > 0 && offer.allowSensitiveContexts !== true) {
      add(offer, 'SENSITIVE_PURPOSE_ALLOWED', 'センシティブ目的を明示許可なしで掲載対象に含めています。');
    }
    const requiredSensitiveBlocks = SENSITIVE_PURPOSES.filter((purpose) => !allowedSensitivePurposes.includes(purpose));
    if (!requiredSensitiveBlocks.every((purpose) => offer.blockedPurposes.includes(purpose))) {
      add(offer, 'MISSING_SENSITIVE_BLOCKS', '掲載を許可していないセンシティブ目的の除外設定が不足しています。');
    }
    if (MISLEADING_BUTTON_PATTERN.test(offer.buttonText)) add(offer, 'MISLEADING_BUTTON_TEXT', '公式申請と誤認し得るボタン文言です。');
    if (!offer.disclosureText.trim()) add(offer, 'MISSING_DISCLOSURE', 'アフィリエイト開示文がありません。');
    if (!offer.advertiserName.trim()) add(offer, 'MISSING_ADVERTISER', '広告主名がありません。');
    if (!offer.offerName.trim()) add(offer, 'MISSING_OFFER_NAME', '案件名がありません。');
    if (offer.enabled) {
      if (!isHttpsUrl(offer.creativeImageUrl)) add(offer, 'MISSING_OFFICIAL_CREATIVE', '公開案件には広告主・ASP提供クリエイティブ画像が必要です。');
      if (!offer.creativeAlt?.trim()) add(offer, 'MISSING_CREATIVE_ALT', '広告主提供クリエイティブ画像の代替テキストがありません。');
      if (!isPositiveInteger(offer.creativeWidth) || !isPositiveInteger(offer.creativeHeight)) add(offer, 'MISSING_CREATIVE_SIZE', '広告主提供クリエイティブ画像の表示サイズがありません。');
      if (!isHttpsUrl(offer.impressionPixelUrl)) add(offer, 'MISSING_IMPRESSION_PIXEL', 'ASP提供タグの計測ピクセルURLがありません。');
      if (!offer.creativeId?.trim()) add(offer, 'MISSING_CREATIVE_ID', '広告主提供クリエイティブの識別子がありません。');
      if (!isHttpsUrl(offer.creativeSourceUrl)) add(offer, 'MISSING_CREATIVE_SOURCE_URL', '広告主提供クリエイティブの取得元URLがありません。');
      if (!offer.creativeVerifiedAt) add(offer, 'MISSING_CREATIVE_VERIFIED_AT', '広告主提供クリエイティブの確認日がありません。');
      else if (!isValidAffiliateDate(offer.creativeVerifiedAt)) add(offer, 'INVALID_CREATIVE_VERIFIED_AT', 'クリエイティブ確認日が実在するYYYY-MM-DD形式ではありません。');
      else if (offer.creativeVerifiedAt > today) add(offer, 'FUTURE_CREATIVE_VERIFIED_AT', 'クリエイティブ確認日が未来の日付です。');
      if (offer.claimReviewStatus !== 'reviewed') add(offer, 'UNREVIEWED_CREATIVE_CLAIMS', 'クリエイティブ内の訴求確認が完了していません。');
      if (!offer.destinationHost?.trim()) add(offer, 'MISSING_DESTINATION_HOST', '確認済み遷移先hostがありません。');
      else if (isHttpsUrl(offer.destinationUrl) && new URL(offer.destinationUrl ?? '').host !== offer.destinationHost) add(offer, 'DESTINATION_HOST_MISMATCH', '案件リンクのhostが確認済みhostと一致しません。');
      if (!isAllowedAffiliateHost('tracking', offer.destinationUrl)) add(offer, 'UNAPPROVED_TRACKING_HOST', '追跡URLのhostが許可リストにありません。');
      if (!isAllowedAffiliateHost('creative', offer.creativeImageUrl) || !isAllowedAffiliateHost('creative', offer.creativeSourceUrl)) add(offer, 'UNAPPROVED_CREATIVE_HOST', 'クリエイティブURLのhostが許可リストにありません。');
      if (!isAllowedAffiliateHost('impression', offer.impressionPixelUrl)) add(offer, 'UNAPPROVED_IMPRESSION_HOST', '計測画像URLのhostが許可リストにありません。');
      if (!offer.verifiedLandingHost || !isAllowedAffiliateHost('landing', `https://${offer.verifiedLandingHost}`)) add(offer, 'UNAPPROVED_LANDING_HOST', '最終遷移先hostが未確認または許可リスト外です。');
      if (!isValidAffiliateDate(offer.landingVerifiedAt)) add(offer, 'MISSING_LANDING_VERIFIED_AT', '最終遷移先の確認日がありません。');
      if (!offer.creativeFingerprint?.match(/^[a-f0-9]{64}$/u)) add(offer, 'MISSING_CREATIVE_FINGERPRINT', 'クリエイティブのSHA-256記録がありません。');
      if (!isValidAffiliateDate(offer.nextReviewAt) || (offer.nextReviewAt ?? '') < today) add(offer, 'REVIEW_DUE', '案件の再確認期限が切れているか未設定です。');
      if (!offer.claimReviewSource?.trim() || !offer.reviewMethod) add(offer, 'MISSING_CLAIM_REVIEW_EVIDENCE', '訴求確認の証跡がありません。');
    }
  }

  return issues;
}

type AffiliateFetch = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

function remoteIssue(offer: AffiliateOffer, code: string, message: string): AffiliateAuditIssue {
  return { severity: 'critical', code, offerId: offer.id, message };
}

async function fetchWithTimeout(fetchImpl: AffiliateFetch, url: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    return await fetchImpl(url, {
      ...init,
      signal: controller.signal,
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; JoseikinNaviAffiliateAudit/1.0)', ...init.headers },
    });
  } finally {
    clearTimeout(timeout);
  }
}

export async function auditPublishedAffiliateRemotes(
  offers: AffiliateOffer[],
  fetchImpl: AffiliateFetch = fetch,
): Promise<AffiliateAuditIssue[]> {
  const issues: AffiliateAuditIssue[] = [];

  for (const offer of offers.filter((item) => item.enabled)) {
    if (offer.creativeSourceUrl && offer.creativeFingerprint) {
      try {
        const response = await fetchWithTimeout(fetchImpl, offer.creativeSourceUrl, { redirect: 'follow', cache: 'no-store' });
        if (!response.ok) {
          issues.push(remoteIssue(offer, 'REMOTE_CREATIVE_UNAVAILABLE', `クリエイティブ取得がHTTP ${response.status}でした。`));
        } else {
          const fingerprint = createHash('sha256').update(Buffer.from(await response.arrayBuffer())).digest('hex');
          if (fingerprint !== offer.creativeFingerprint) {
            issues.push(remoteIssue(offer, 'REMOTE_CREATIVE_FINGERPRINT_MISMATCH', '公開中クリエイティブのSHA-256が確認済み記録と一致しません。'));
          }
        }
      } catch (error) {
        issues.push(remoteIssue(offer, 'REMOTE_CREATIVE_CHECK_FAILED', `クリエイティブのオンライン照合に失敗しました：${error instanceof Error ? error.message : String(error)}`));
      }
    }

    if (offer.destinationUrl && offer.verifiedLandingHost) {
      try {
        let currentUrl = offer.destinationUrl;
        const observedHosts: string[] = [];
        let completed = false;
        for (let hop = 0; hop < 8; hop += 1) {
          const currentHost = new URL(currentUrl).host;
          observedHosts.push(currentHost);
          const response = await fetchWithTimeout(fetchImpl, currentUrl, { redirect: 'manual', cache: 'no-store' });
          const location = response.headers.get('location');
          if (response.status >= 300 && response.status < 400 && location) {
            currentUrl = new URL(location, currentUrl).toString();
            continue;
          }
          await response.body?.cancel();
          completed = true;
          break;
        }
        const finalHost = new URL(currentUrl).host;
        if (!completed) issues.push(remoteIssue(offer, 'REMOTE_REDIRECT_LIMIT', '広告リンクのリダイレクトが8回以内に完了しません。'));
        if (finalHost !== offer.verifiedLandingHost) {
          issues.push(remoteIssue(offer, 'REMOTE_LANDING_HOST_MISMATCH', `実際の最終遷移先${finalHost}が確認済みhostと一致しません。`));
        }
        const unapprovedHosts = observedHosts.filter((host, index) => {
          if (index === 0) return !isAllowedAffiliateHost('tracking', `https://${host}`);
          if (host === finalHost) return !isAllowedAffiliateHost('landing', `https://${host}`);
          return !isAllowedAffiliateHost('redirect', `https://${host}`);
        });
        if (unapprovedHosts.length > 0) {
          issues.push(remoteIssue(offer, 'REMOTE_REDIRECT_HOST_UNAPPROVED', `未承認のリダイレクトhostを検出しました：${[...new Set(unapprovedHosts)].join('、')}`));
        }
      } catch (error) {
        issues.push(remoteIssue(offer, 'REMOTE_REDIRECT_CHECK_FAILED', `広告リンクのオンライン照合に失敗しました：${error instanceof Error ? error.message : String(error)}`));
      }
    }
  }

  return issues;
}
