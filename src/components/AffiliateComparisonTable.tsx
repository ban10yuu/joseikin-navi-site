import type { AffiliateOffer } from '@/config/affiliate-offers';
import { isAffiliateOfferPublishable } from '@/lib/monetization';
import AffiliateRecommendation from './AffiliateRecommendation';

export default function AffiliateComparisonTable({ offers, selectionCriteria, researchedAt, placement }: { offers: AffiliateOffer[]; selectionCriteria: string; researchedAt: string; placement: string }) {
  const publishableOffers = offers.filter((offer) => isAffiliateOfferPublishable(offer));
  if (!publishableOffers.length || !selectionCriteria || !researchedAt) return null;
  return <section aria-labelledby="affiliate-comparison-title"><h2 id="affiliate-comparison-title" className="text-xl font-black text-navy">関連サービスの比較</h2><p className="mt-2 text-sm leading-7 text-muted">選定基準：{selectionCriteria}／調査日：{researchedAt}</p><div className="mt-4 grid gap-4">{publishableOffers.map((offer, index) => <AffiliateRecommendation key={offer.id} offer={offer} pageType="comparison" placement={placement} position={index + 1} headingLevel="h3" />)}</div></section>;
}
