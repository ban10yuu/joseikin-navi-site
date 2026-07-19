'use client';

import { useId, useState } from 'react';
import type { AffiliateOffer, AffiliatePageType } from '@/config/affiliate-offers';
import type { AffiliateIntent, Audience, Purpose } from '@/lib/types';
import AffiliateRecommendation from './AffiliateRecommendation';

interface ResponsiveAffiliatePlacementProps {
  offers: AffiliateOffer[];
  pageType: AffiliatePageType;
  placement: string;
  grantId?: string;
  audience?: Audience;
  purpose?: Purpose;
  intents?: AffiliateIntent[];
  className?: string;
  expandAt?: 1024 | 1200;
  heading?: string;
  description?: string;
}

export default function ResponsiveAffiliatePlacement({
  offers,
  pageType,
  placement,
  grantId,
  audience,
  purpose,
  intents = [],
  className = '',
  heading = '申請準備に関連するサービス',
  description = '民間サービスの広告です。制度の申請や採択に必須ではありません。',
}: ResponsiveAffiliatePlacementProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const regionId = useId();

  if (offers.length === 0) return null;

  const boundedIndex = Math.min(activeIndex, offers.length - 1);
  const visibleOffers = [offers[boundedIndex]];

  return (
    <section className={`responsive-affiliate-placement ${className}`.trim()} aria-label={`${heading}（広告）`}>
      <div className="responsive-affiliate-heading">
        <div>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
      </div>

      {offers.length > 1 ? (
        <div className="responsive-affiliate-controls" role="group" aria-label="広告の切り替え">
          <button
            type="button"
            onClick={() => setActiveIndex((index) => (Math.min(index, offers.length - 1) - 1 + offers.length) % offers.length)}
            aria-controls={regionId}
          >
            <span aria-hidden="true">←</span><span className="responsive-control-label">前へ</span>
          </button>
          <p role="status" aria-live="polite" aria-atomic="true">
            {boundedIndex + 1} / {offers.length}<span className="sr-only">、{offers[boundedIndex].offerName}</span>
          </p>
          <button
            type="button"
            onClick={() => setActiveIndex((index) => (Math.min(index, offers.length - 1) + 1) % offers.length)}
            aria-controls={regionId}
          >
            <span className="responsive-control-label">次へ</span><span aria-hidden="true">→</span>
          </button>
        </div>
      ) : null}

      <ul id={regionId} className="responsive-affiliate-slides" data-offer-count={visibleOffers.length}>
        {visibleOffers.map((offer) => {
          const originalIndex = offers.findIndex((item) => item.id === offer.id);
          return (
          <li
            key={offer.id}
            className="responsive-affiliate-slide"
            data-active="true"
          >
            <AffiliateRecommendation
              offer={offer}
              pageType={pageType}
              placement={placement}
              position={originalIndex + 1}
              grantId={grantId}
              audience={audience}
              purpose={purpose}
              intents={intents}
              compact
              headingLevel="h3"
            />
          </li>
          );
        })}
      </ul>
    </section>
  );
}
