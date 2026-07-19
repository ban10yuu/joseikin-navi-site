'use client';

import { useEffect, useRef, useState } from 'react';
import { AFFILIATE_ISSUED_HTML } from '@/config/affiliate-issued-html';

interface AffiliateIssuedCreativeProps {
  offerId: string;
  width: number;
  height: number;
  lazy?: boolean;
}

export default function AffiliateIssuedCreative({ offerId, width, height, lazy = false }: AffiliateIssuedCreativeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(!lazy);
  const issuedHtml = AFFILIATE_ISSUED_HTML[offerId];

  useEffect(() => {
    if (!lazy || shouldRender) return;
    const element = containerRef.current;
    if (!element || !('IntersectionObserver' in window)) {
      const frame = window.requestAnimationFrame(() => setShouldRender(true));
      return () => window.cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShouldRender(true);
      observer.disconnect();
    }, { rootMargin: '400px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, [lazy, shouldRender]);

  return (
    <div
      ref={containerRef}
      className="affiliate-issued-creative"
      style={{ width: `min(${width}px, 100%)`, aspectRatio: `${width} / ${height}` }}
      data-creative-load={shouldRender ? 'loaded' : 'deferred'}
    >
      {shouldRender && issuedHtml
        ? <div dangerouslySetInnerHTML={{ __html: issuedHtml }} />
        : <span className="affiliate-creative-placeholder" aria-hidden="true">広告画像を読み込み中</span>}
    </div>
  );
}
