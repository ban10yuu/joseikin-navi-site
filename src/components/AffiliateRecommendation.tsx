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
  const hasAdvertiserCreative = Boolean(offer.creativeImageUrl && offer.creativeWidth && offer.creativeHeight);
  const headingId = `affiliate-${offer.id}-${placement}`.replace(/[^a-zA-Z0-9_-]/g, '-');
  const analyticsAttributes = {
    'data-page-type': pageType,
    'data-grant-id': grantId,
    'data-audience': audience,
    'data-purpose': purpose,
    'data-offer-id': offer.id,
    'data-network': offer.network,
    'data-placement': placement,
    'data-position': String(position),
    'data-creative-id': offer.creativeId ?? undefined,
    'data-format': offer.creativeWidth && offer.creativeHeight ? `${offer.creativeWidth}x${offer.creativeHeight}` : 'text',
    'data-experiment-variant': 'responsive-affiliate-v1',
  };
  return (
    <aside
      className={`affiliate-banner${compact ? ' affiliate-banner--compact' : ''}`}
      data-analytics-render="true"
      data-analytics-render-event="affiliate_render"
      data-analytics-impression="true"
      data-analytics-impression-event="affiliate_impression"
      aria-labelledby={headingId}
      {...analyticsAttributes}
    >
      {hasAdvertiserCreative ? (
        <>
          <AffiliateDisclosure text={offer.disclosureText} />
          <div className="affiliate-creative-context">
            <p className="affiliate-banner-eyebrow">{copy.eyebrow}</p>
            <Heading id={headingId} className="affiliate-banner-headline">{offer.offerName}</Heading>
            <p className="affiliate-banner-subhead">{copy.subhead}</p>
          </div>
          <a
            href={offer.destinationUrl}
            target="_blank"
            rel={AFFILIATE_LINK_REL}
            className="affiliate-creative-link"
            aria-label={`${offer.advertiserName}の${offer.offerName}を見る（PR・新しいタブで開きます）`}
            data-analytics-event="affiliate_click"
            {...analyticsAttributes}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={offer.creativeImageUrl ?? ''}
              alt={offer.creativeAlt ?? offer.offerName}
              width={offer.creativeWidth ?? undefined}
              height={offer.creativeHeight ?? undefined}
              className="affiliate-creative-image"
              style={{
                width: `${offer.creativeWidth}px`,
                height: 'auto',
                aspectRatio: `${offer.creativeWidth} / ${offer.creativeHeight}`,
              }}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <span className="affiliate-creative-cta">{offer.offerName}を見る（PR） <span aria-hidden="true">↗</span></span>
          </a>
          {offer.impressionPixelUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={offer.impressionPixelUrl} alt="" width="1" height="1" className="affiliate-tracking-pixel" loading="lazy" decoding="async" referrerPolicy="strict-origin-when-cross-origin" />
          ) : null}
          <p className="affiliate-advertiser-note">広告主：{offer.advertiserName}。広告主は、この掲載制度の実施機関ではありません。サービスの利用は申請・採択の条件ではなく、利用料が現在見ている制度の補助対象経費になることを示すものでもありません。対象経費は公式募集要項でご確認ください。</p>
        </>
      ) : (
        <>
          <div className="affiliate-banner-copy">
            <AffiliateDisclosure text={offer.disclosureText} />
            <p className="affiliate-banner-eyebrow">{copy.eyebrow}</p>
            <Heading id={headingId} className="affiliate-banner-headline">{copy.headline}</Heading>
            <p className="affiliate-banner-subhead">{copy.subhead}</p>
            <p className="affiliate-banner-offer">{offer.offerName}</p>
            <p className="affiliate-banner-meta">広告主：{offer.advertiserName}。広告主は、この掲載制度の実施機関ではありません。サービスの利用は申請・採択の条件ではなく、利用料が現在見ている制度の補助対象経費になることを示すものでもありません。対象経費は公式募集要項でご確認ください。</p>
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
            data-creative-id={offer.creativeId ?? undefined}
            data-format="text"
            data-experiment-variant="responsive-affiliate-v1"
            aria-label={`${offer.advertiserName}の${offer.offerName}を見る（PR・新しいタブで開きます）`}
          >
            {offer.buttonText || 'サービスを見る'}<span aria-hidden="true">→</span><span className="sr-only">（PR・新しいタブで開きます）</span>
          </a>
        </>
      )}
    </aside>
  );
}
