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

const OFFER_COPY: Record<string, { eyebrow: string; headline: string; subhead: string }> = {
  'a8-freee-accounting-wiz': {
    eyebrow: '創業・補助金申請後の経理準備に',
    headline: 'クラウド会計で、経費管理をまとめて効率化',
    subhead: '個人事業主・小規模事業者向け',
  },
  'a8-kanbei-sign': {
    eyebrow: '契約・見積・発注まわりの整備に',
    headline: '電子契約で、申請準備の書類管理を軽くする',
    subhead: '事業者・団体向け',
  },
};

function getOfferCopy(offer: AffiliateOffer) {
  return OFFER_COPY[offer.id] ?? {
    eyebrow: '事業者の申請準備に関連',
    headline: offer.offerName,
    subhead: '事業者・団体向けサービス',
  };
}

export default function AffiliateRecommendation({ offer, pageType, placement, position = 1, grantId, audience, purpose, compact = false, headingLevel = 'h2' }: AffiliateRecommendationProps) {
  if (!isAffiliateOfferPublishable(offer)) return null;
  const Heading = headingLevel;
  const copy = getOfferCopy(offer);
  const hasOfficialCreative = Boolean(offer.creativeImageUrl && offer.creativeWidth && offer.creativeHeight);
  return (
    <aside
      className={`affiliate-banner${compact ? ' affiliate-banner--compact' : ''}`}
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
      {hasOfficialCreative ? (
        <a
          href={offer.destinationUrl}
          target="_blank"
          rel={AFFILIATE_LINK_REL}
          className="affiliate-creative-link"
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
          <AffiliateDisclosure text={offer.disclosureText} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={offer.creativeImageUrl ?? ''}
            alt={offer.creativeAlt ?? offer.offerName}
            width={offer.creativeWidth ?? undefined}
            height={offer.creativeHeight ?? undefined}
            className="affiliate-creative-image"
            style={{ width: `${offer.creativeWidth}px`, height: `${offer.creativeHeight}px` }}
            loading="lazy"
          />
          {offer.impressionPixelUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={offer.impressionPixelUrl} alt="" width="1" height="1" className="affiliate-tracking-pixel" loading="lazy" />
          ) : null}
          <span className="sr-only">（PR・新しいタブで開きます）</span>
        </a>
      ) : (
        <>
          <div className="affiliate-banner-copy">
            <AffiliateDisclosure text={offer.disclosureText} />
            <p className="affiliate-banner-eyebrow">{copy.eyebrow}</p>
            <Heading className="affiliate-banner-headline">{copy.headline}</Heading>
            <p className="affiliate-banner-subhead">{copy.subhead}</p>
            <p className="affiliate-banner-offer">{offer.offerName}</p>
            <p className="affiliate-banner-meta">提供：{offer.advertiserName}／制度の申請に必須のサービスではありません。</p>
          </div>

          <a
            href={offer.destinationUrl}
            target="_blank"
            rel={AFFILIATE_LINK_REL}
            className="affiliate-banner-button"
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
            {offer.buttonText || 'サービスを見る'}<span aria-hidden="true">→</span><span className="sr-only">（PR・新しいタブで開きます）</span>
          </a>
        </>
      )}
    </aside>
  );
}
