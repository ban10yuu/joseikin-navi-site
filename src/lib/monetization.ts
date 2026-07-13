import type { AffiliateOffer, AffiliatePageType } from '../config/affiliate-offers.ts';
import type { Audience, Purpose } from './types.ts';

export const AFFILIATE_LINK_REL = 'sponsored nofollow noopener noreferrer';

const SENSITIVE_PURPOSES = new Set<Purpose>(['medical', 'welfare', 'disaster', 'livingSupport']);
const SENSITIVE_AUDIENCES = new Set<Audience>(['personWithDisability']);
const BUSINESS_AUDIENCES = new Set<Audience>(['soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization']);

export interface MonetizationContext {
  pageType: AffiliatePageType;
  audiences: Audience[];
  purposes: Purpose[];
  monetizationAllowed: boolean;
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

export function getEligibleAffiliateOffers(
  offers: AffiliateOffer[],
  context: MonetizationContext,
  now = new Date(),
): AffiliateOffer[] {
  if (!context.monetizationAllowed) return [];
  if (context.pageType === 'grant' && !context.audiences.some((audience) => BUSINESS_AUDIENCES.has(audience))) return [];
  if (context.purposes.some((purpose) => SENSITIVE_PURPOSES.has(purpose))) return [];
  if (context.audiences.some((audience) => SENSITIVE_AUDIENCES.has(audience))) return [];

  const today = now.toISOString().slice(0, 10);
  return offers
    .filter((offer) => offer.enabled)
    .filter((offer) => isValidDestination(offer.destinationUrl))
    .filter((offer) => Boolean(offer.verifiedAt))
    .filter((offer) => !offer.validFrom || offer.validFrom <= today)
    .filter((offer) => !offer.validUntil || offer.validUntil >= today)
    .filter((offer) => offer.allowedPageTypes.includes(context.pageType))
    .filter((offer) => offer.audiences.length === 0 || intersects(offer.audiences, context.audiences))
    .filter((offer) => offer.allowedPurposes.length === 0 || intersects(offer.allowedPurposes, context.purposes))
    .filter((offer) => !intersects(offer.blockedPurposes, context.purposes))
    .sort((left, right) => right.priority - left.priority);
}
