import type { AffiliateOffer, AffiliatePageType } from '../config/affiliate-offers.ts';
import type { AffiliateIntent, Audience, Purpose } from './types.ts';
import { getTokyoDate, isValidAffiliateDate } from './affiliate-date.ts';

export const AFFILIATE_LINK_REL = 'sponsored nofollow noopener noreferrer';

const SENSITIVE_PURPOSES = new Set<Purpose>(['medical', 'welfare', 'disaster', 'livingSupport']);
const SENSITIVE_AUDIENCES = new Set<Audience>(['personWithDisability']);
const BUSINESS_AUDIENCES = new Set<Audience>(['soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization']);

export interface MonetizationContext {
  pageType: AffiliatePageType;
  audiences: Audience[];
  purposes: Purpose[];
  intents: AffiliateIntent[];
  monetizationAllowed: boolean;
  limit?: number;
}

function intersects<T>(left: T[], right: T[]): boolean {
  return left.some((item) => right.includes(item));
}

function isValidDestination(value: string | null): boolean {
  if (!value) return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

export function shouldRenderDisplayAd(clientId?: string | null, slotId?: string | null): boolean {
  return Boolean(clientId?.trim() && slotId?.trim());
}

export type PublishableAffiliateOffer = AffiliateOffer & {
  enabled: true;
  partnershipStatus: 'partnered';
  destinationUrl: string;
  verifiedAt: string;
};

export function isAffiliateOfferPublishable(offer: AffiliateOffer, now = new Date()): offer is PublishableAffiliateOffer {
  const today = getTokyoDate(now);
  if (!offer.enabled || offer.partnershipStatus !== 'partnered' || !isValidDestination(offer.destinationUrl)) return false;
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
  if (!context.monetizationAllowed) return [];
  if (context.pageType === 'grant' && !context.audiences.some((audience) => BUSINESS_AUDIENCES.has(audience))) return [];
  if (context.purposes.some((purpose) => SENSITIVE_PURPOSES.has(purpose))) return [];
  if (context.audiences.some((audience) => SENSITIVE_AUDIENCES.has(audience))) return [];

  const defaultLimit = context.pageType === 'grant' ? 1 : Number.POSITIVE_INFINITY;
  const limit = Math.max(0, context.limit ?? defaultLimit);

  return offers
    .filter((offer) => isAffiliateOfferPublishable(offer, now))
    .filter((offer) => offer.allowedPageTypes.includes(context.pageType))
    .filter((offer) => offer.audiences.length === 0 || intersects(offer.audiences, context.audiences))
    .filter((offer) => offer.intents.length > 0 && intersects(offer.intents, context.intents))
    .filter((offer) => offer.allowedPurposes.length === 0 || intersects(offer.allowedPurposes, context.purposes))
    .filter((offer) => !intersects(offer.blockedPurposes, context.purposes))
    .sort((left, right) => right.priority - left.priority || (right.verifiedAt ?? '').localeCompare(left.verifiedAt ?? ''))
    .slice(0, limit);
}
