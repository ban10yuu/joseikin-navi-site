import type { AffiliateOffer, AffiliatePageType } from '../config/affiliate-offers.ts';
import type { AffiliateIntent, Audience, GrantStatus, Purpose } from './types.ts';
import { getTokyoDate, isValidAffiliateDate } from './affiliate-date.ts';
import { isAllowedAffiliateHost } from '../config/affiliate-security.ts';

export const AFFILIATE_LINK_REL = 'sponsored nofollow noopener noreferrer';

const SENSITIVE_PURPOSES = new Set<Purpose>(['medical', 'welfare', 'disaster', 'livingSupport']);
const HARD_SECONDARY_SENSITIVE_PURPOSES = new Set<Purpose>(['medical', 'welfare', 'disaster']);
const SENSITIVE_AUDIENCES = new Set<Audience>(['personWithDisability']);
const SENSITIVE_TEXT_PATTERN = /(医療|疾病|難病|障害|生活困窮|災害|被災|緊急支援|介護|ひとり親|死亡|葬祭|DV|ＤＶ|虐待)/iu;

export interface MonetizationContext {
  pageType: AffiliatePageType;
  audiences: Audience[];
  purposes: Purpose[];
  primaryPurpose?: Purpose;
  intents: AffiliateIntent[];
  monetizationAllowed: boolean;
  status?: GrantStatus;
  indexable?: boolean;
  hasOfficialSource?: boolean;
  sensitive?: boolean;
  sensitiveMonetizationApproved?: boolean;
  texts?: string[];
  limit?: number;
  diversityKey?: string;
}

function intersects<T>(left: T[], right: T[]): boolean {
  return left.some((item) => right.includes(item));
}

function isValidDestination(value: string | null): value is string {
  if (!value) return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

function stableHash(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function shouldDiversifyAffiliateOrder(context: MonetizationContext): boolean {
  const personalAudience = context.audiences.some((audience) =>
    ['individual', 'family', 'student', 'senior', 'jobSeeker'].includes(audience));
  const businessAudience = context.audiences.some((audience) =>
    ['soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization'].includes(audience));
  return context.pageType === 'grant' && Boolean(context.diversityKey?.trim()) && personalAudience && !businessAudience;
}

export function isSensitiveAffiliateContext({
  purposes,
  primaryPurpose,
  audiences,
  texts = [],
}: {
  purposes: Purpose[];
  primaryPurpose?: Purpose;
  audiences: Audience[];
  texts?: string[];
}): boolean {
  const purposesToCheck = primaryPurpose
    ? [primaryPurpose, ...purposes.filter((purpose) => HARD_SECONDARY_SENSITIVE_PURPOSES.has(purpose))]
    : purposes;
  return purposesToCheck.some((purpose) => SENSITIVE_PURPOSES.has(purpose))
    || audiences.some((audience) => SENSITIVE_AUDIENCES.has(audience))
    || texts.some((value) => SENSITIVE_TEXT_PATTERN.test(value));
}

export function shouldRenderDisplayAd(clientId?: string | null, slotId?: string | null): boolean {
  return Boolean(clientId?.trim() && slotId?.trim());
}

export function shouldLoadAdsenseScript(clientId?: string | null): boolean {
  return Boolean(clientId?.trim());
}

export type PublishableAffiliateOffer = AffiliateOffer & {
  enabled: true;
  partnershipStatus: 'partnered';
  destinationUrl: string;
  verifiedAt: string;
};

export function isAffiliateOfferPublishable(offer: AffiliateOffer, now = new Date()): offer is PublishableAffiliateOffer {
  const today = getTokyoDate(now);
  const destinationUrl = offer.destinationUrl;
  if (!offer.enabled || offer.partnershipStatus !== 'partnered' || !isValidDestination(destinationUrl)) return false;
  if (!offer.creativeId?.trim() || !isValidDestination(offer.creativeSourceUrl)) return false;
  if (!offer.creativeImageUrl || !offer.creativeAlt?.trim() || !offer.creativeWidth || !offer.creativeHeight) return false;
  if (offer.creativeWidth > 300) return false;
  if (!offer.impressionPixelUrl || !offer.disclosureText.trim() || !offer.buttonText.trim()) return false;
  if (!isAllowedAffiliateHost('tracking', destinationUrl)) return false;
  if (!isAllowedAffiliateHost('creative', offer.creativeImageUrl) || !isAllowedAffiliateHost('creative', offer.creativeSourceUrl)) return false;
  if (!isAllowedAffiliateHost('impression', offer.impressionPixelUrl)) return false;
  if (!isValidAffiliateDate(offer.creativeVerifiedAt) || offer.creativeVerifiedAt > today) return false;
  if (offer.claimReviewStatus !== 'reviewed') return false;
  if (new URL(destinationUrl).host !== offer.destinationHost) return false;
  if (!offer.verifiedLandingHost || !isAllowedAffiliateHost('landing', `https://${offer.verifiedLandingHost}`)) return false;
  if (!isValidAffiliateDate(offer.landingVerifiedAt) || offer.landingVerifiedAt > today) return false;
  if (!offer.creativeFingerprint?.match(/^[a-f0-9]{64}$/u)) return false;
  if (!isValidAffiliateDate(offer.nextReviewAt) || offer.nextReviewAt < today) return false;
  if (!offer.claimReviewSource?.trim() || !offer.reviewMethod) return false;
  if (!isValidAffiliateDate(offer.verifiedAt) || offer.verifiedAt > today) return false;
  if (offer.validFrom !== null && !isValidAffiliateDate(offer.validFrom)) return false;
  if (offer.validUntil !== null && !isValidAffiliateDate(offer.validUntil)) return false;
  if (offer.validFrom && offer.validUntil && offer.validFrom > offer.validUntil) return false;
  if (offer.validFrom && offer.validFrom > today) return false;
  if (offer.validUntil && offer.validUntil < today) return false;
  return true;
}

export function getEligibleAffiliateOffers(
  offers: AffiliateOffer[],
  context: MonetizationContext,
  now = new Date(),
): AffiliateOffer[] {
  const sensitiveContext = Boolean(context.sensitive || isSensitiveAffiliateContext(context));
  const blockingPurposes = context.primaryPurpose
    ? [context.primaryPurpose, ...context.purposes.filter((purpose) => HARD_SECONDARY_SENSITIVE_PURPOSES.has(purpose))]
    : context.purposes;
  const matchingPurposes = context.primaryPurpose ? [context.primaryPurpose] : context.purposes;
  if (context.pageType === 'grant' && context.hasOfficialSource === false) return [];
  if (context.pageType === 'grant' && context.indexable === false) return [];
  if (context.pageType === 'grant' && context.status === 'suspended') return [];
  if (sensitiveContext && !context.sensitiveMonetizationApproved) return [];
  if (!sensitiveContext && !context.monetizationAllowed) return [];

  const defaultLimit = context.pageType === 'grant' ? 1 : Number.POSITIVE_INFINITY;
  const limit = Math.max(0, context.limit ?? defaultLimit);
  const diversifyOrder = shouldDiversifyAffiliateOrder(context);
  const diversityKey = context.diversityKey?.trim() ?? '';

  const scored = offers
    .filter((offer) => isAffiliateOfferPublishable(offer, now))
    .filter((offer) => offer.allowedPageTypes.includes(context.pageType))
    .filter((offer) => !sensitiveContext || offer.allowSensitiveContexts === true)
    .filter((offer) => offer.audiences.length === 0 || intersects(offer.audiences, context.audiences))
    .filter((offer) => offer.intents.length > 0 && intersects(offer.intents, context.intents))
    .filter((offer) => offer.allowedPurposes.length === 0 || intersects(offer.allowedPurposes, matchingPurposes))
    .filter((offer) => !intersects(offer.blockedPurposes, blockingPurposes))
    .map((offer) => ({
      offer,
      audienceScore: offer.audiences.filter((item) => context.audiences.includes(item)).length,
      purposeScore: offer.allowedPurposes.filter((item) => matchingPurposes.includes(item)).length,
      intentScore: offer.intents.filter((item) => context.intents.includes(item)).length,
      diversityScore: stableHash(`${diversityKey}:${offer.id}`),
    }))
    .sort((left, right) => {
      if (diversifyOrder) {
        return right.purposeScore - left.purposeScore
          || right.audienceScore - left.audienceScore
          || left.diversityScore - right.diversityScore
          || right.intentScore - left.intentScore
          || right.offer.priority - left.offer.priority
          || (right.offer.verifiedAt ?? '').localeCompare(left.offer.verifiedAt ?? '');
      }
      return right.intentScore - left.intentScore
        || right.purposeScore - left.purposeScore
        || right.audienceScore - left.audienceScore
        || right.offer.priority - left.offer.priority
        || (right.offer.verifiedAt ?? '').localeCompare(left.offer.verifiedAt ?? '');
    });

  const seen = new Set<string>();
  return scored
    .map(({ offer }) => offer)
    .filter((offer) => !seen.has(offer.id) && Boolean(seen.add(offer.id)))
    .slice(0, limit);
}
