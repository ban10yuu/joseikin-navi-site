import type { AffiliateOffer } from '@/config/affiliate-offers';
import { AFFILIATE_LINK_REL } from '@/lib/monetization';
import AffiliateDisclosure from './AffiliateDisclosure';

export default function AffiliateRecommendation({ offer, placement, position = 1 }: { offer: AffiliateOffer; placement: string; position?: number }) {
  if (!offer.enabled || !offer.destinationUrl || !offer.verifiedAt) return null;
  return (
    <aside
      className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-5"
      data-analytics-event="affiliate_impression"
      data-analytics-impression="true"
      data-page-type="grant"
      data-offer-id={offer.id}
      data-network={offer.network}
      data-placement={placement}
      data-position={String(position)}
    >
      <AffiliateDisclosure text={offer.disclosureText} />
      <h2 className="mt-3 text-lg font-black text-slate-900">申請準備に関連するサービス</h2>
      <p className="mt-2 text-sm font-bold text-slate-900">{offer.offerName}</p>
      <p className="mt-1 text-sm leading-7 text-slate-700">提供：{offer.advertiserName}</p>
      <a
        href={offer.destinationUrl}
        target="_blank"
        rel={AFFILIATE_LINK_REL}
        className="mt-4 inline-flex min-h-11 items-center rounded-lg border-2 border-amber-800 bg-white px-5 font-bold text-amber-950"
        data-analytics-event="affiliate_click"
        data-page-type="grant"
        data-offer-id={offer.id}
        data-network={offer.network}
        data-placement={placement}
        data-position={String(position)}
      >
        {offer.buttonText || 'サービスの詳細を見る（PR）'}<span className="sr-only">（新しいタブで開きます）</span>
      </a>
    </aside>
  );
}
