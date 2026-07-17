'use client';

import { useEffect, useId, useState } from 'react';
import type { AffiliateOffer, AffiliatePageType } from '@/config/affiliate-offers';
import type { Audience, Purpose } from '@/lib/types';
import AffiliateRecommendation from './AffiliateRecommendation';

interface ResponsiveAffiliatePlacementProps {
  offers: AffiliateOffer[];
  pageType: AffiliatePageType;
  placement: string;
  grantId?: string;
  audience?: Audience;
  purpose?: Purpose;
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
  className = '',
  expandAt = 1200,
  heading = '申請準備に関連するサービス',
  description = '民間サービスの広告です。制度の申請や採択に必須ではありません。',
}: ResponsiveAffiliatePlacementProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const regionId = useId();

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${expandAt}px)`);
    const update = () => setIsExpanded(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [expandAt]);

  if (offers.length === 0) return null;

  const boundedIndex = Math.min(activeIndex, offers.length - 1);
  const visibleOffers = isExpanded ? offers : [offers[boundedIndex]];

  return (
    <section className={`responsive-affiliate-placement ${className}`.trim()} aria-label={`${heading}（広告）`}>
      <div className="responsive-affiliate-heading">
        <span>PR</span>
        <div>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
      </div>

      {offers.length > 1 && !isExpanded ? (
        <div className="responsive-affiliate-controls" role="group" aria-label="広告の切り替え">
          <button
            type="button"
            onClick={() => setActiveIndex((index) => (index - 1 + offers.length) % offers.length)}
            aria-controls={regionId}
          >
            <span aria-hidden="true">←</span> 前へ
          </button>
          <p role="status" aria-live="polite" aria-atomic="true">
            {offers.length}件中{boundedIndex + 1}件目、{offers[boundedIndex].offerName}
          </p>
          <button
            type="button"
            onClick={() => setActiveIndex((index) => (index + 1) % offers.length)}
            aria-controls={regionId}
          >
            次へ <span aria-hidden="true">→</span>
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
