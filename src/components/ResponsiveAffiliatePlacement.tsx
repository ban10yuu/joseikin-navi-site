'use client';

import { useId, useState } from 'react';
import type { AffiliateOffer, AffiliatePageType } from '@/config/affiliate-offers';
import type { AffiliateIntent, Audience, Purpose } from '@/lib/types';
import AffiliateDisclosure from './AffiliateDisclosure';
import AffiliateRecommendation from './AffiliateRecommendation';

interface ResponsiveAffiliatePlacementProps {
  offers: AffiliateOffer[];
  pageType: AffiliatePageType;
  placement: string;
  grantId?: string;
  audience?: Audience;
  purpose?: Purpose;
  contextPurposes?: Purpose[];
  intents?: AffiliateIntent[];
  className?: string;
  visibleCount?: number;
  positionOffset?: number;
  lazyCreatives?: boolean;
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
  contextPurposes = [],
  intents = [],
  className = '',
  visibleCount = 1,
  positionOffset = 0,
  lazyCreatives = false,
  heading = '申請準備に関連するサービス',
  description = '民間サービスの広告です。制度の申請や採択に必須ではありません。',
}: ResponsiveAffiliatePlacementProps) {
  const [activePage, setActivePage] = useState(0);
  const regionId = useId();

  if (offers.length === 0) return null;

  const pageSize = Math.max(1, Math.min(Math.floor(visibleCount), offers.length));
  const pageCount = Math.ceil(offers.length / pageSize);
  const boundedPage = Math.min(activePage, pageCount - 1);
  const pageStart = boundedPage * pageSize;
  const visibleOffers = offers.slice(pageStart, pageStart + pageSize);

  return (
    <section className={`responsive-affiliate-placement ${className}`.trim()} aria-label={`${heading}（広告）`}>
      <div className="responsive-affiliate-heading">
        <div>
          <h2>{heading}</h2>
          <p>{description}</p>
          <AffiliateDisclosure />
        </div>
      </div>

      {pageCount > 1 ? (
        <div className="responsive-affiliate-controls" role="group" aria-label="広告の切り替え">
          <button
            type="button"
            onClick={() => setActivePage((page) => (Math.min(page, pageCount - 1) - 1 + pageCount) % pageCount)}
            aria-controls={regionId}
          >
            <span aria-hidden="true">←</span><span className="responsive-control-label">前へ</span>
          </button>
          <p role="status" aria-live="polite" aria-atomic="true">
            {pageStart + 1}〜{pageStart + visibleOffers.length}件 / 全{offers.length}件
          </p>
          <button
            type="button"
            onClick={() => setActivePage((page) => (Math.min(page, pageCount - 1) + 1) % pageCount)}
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
              position={positionOffset + originalIndex + 1}
              grantId={grantId}
              audience={audience}
              purpose={purpose}
              contextPurposes={contextPurposes}
              intents={intents}
              compact
              compactDisclosure
              lazyCreative={lazyCreatives}
              headingLevel="h3"
            />
          </li>
          );
        })}
      </ul>
    </section>
  );
}
