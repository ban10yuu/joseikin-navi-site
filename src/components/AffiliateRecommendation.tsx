import type { AffiliateOffer, AffiliatePageType } from '@/config/affiliate-offers';
import { AFFILIATE_LINK_REL, isAffiliateOfferPublishable } from '@/lib/monetization';
import type { Audience, Purpose } from '@/lib/types';
import AffiliateDisclosure from './AffiliateDisclosure';

interface AffiliateRecommendationProps {
  offer: AffiliateOffer;
  pageType: AffiliatePageType;
  placement: string;
  position?: number;
  grantId?: string;
  audience?: Audience;
  purpose?: Purpose;
  compact?: boolean;
  headingLevel?: 'h2' | 'h3';
}

export default function AffiliateRecommendation({ offer, pageType, placement, position = 1, grantId, audience, purpose, compact = false, headingLevel = 'h2' }: AffiliateRecommendationProps) {
  if (!isAffiliateOfferPublishable(offer)) return null;
  const Heading = headingLevel;
  return (
    <aside
      className={compact ? 'rounded-xl border-2 border-amber-400 bg-amber-50 p-4 shadow-sm' : 'mt-8 rounded-xl border border-amber-300 bg-amber-50 p-5'}
      data-analytics-event="affiliate_impression"
      data-analytics-impression="true"
      data-page-type={pageType}
      data-grant-id={grantId}
      data-audience={audience}
      data-purpose={purpose}
      data-offer-id={offer.id}
      data-network={offer.network}
      data-placement={placement}
      data-position={String(position)}
    >
      <AffiliateDisclosure text={offer.disclosureText} />
      <div className={compact ? 'mt-2 gap-4 sm:flex sm:items-center sm:justify-between' : ''}>
        <div>
          <Heading className={compact ? 'text-base font-black text-slate-900' : 'mt-3 text-lg font-black text-slate-900'}>事業者の申請準備に関連するサービス</Heading>
          <p className="mt-1 text-sm font-bold text-slate-900">{offer.offerName}</p>
          <p className="mt-1 text-xs leading-6 text-slate-700">提供：{offer.advertiserName}／制度の申請に必須のサービスではありません。</p>
        </div>
        <a
          href={offer.destinationUrl}
          target="_blank"
          rel={AFFILIATE_LINK_REL}
          className="mt-3 inline-flex min-h-11 shrink-0 items-center rounded-lg border-2 border-amber-800 bg-white px-5 font-bold text-amber-950 sm:mt-0"
          data-analytics-event="affiliate_click"
          data-page-type={pageType}
          data-grant-id={grantId}
          data-audience={audience}
          data-purpose={purpose}
          data-offer-id={offer.id}
          data-network={offer.network}
          data-placement={placement}
          data-position={String(position)}
        >
          {offer.buttonText || 'サービスの詳細を見る（PR）'}<span className="sr-only">（新しいタブで開きます）</span>
        </a>
      </div>
    </aside>
  );
}
