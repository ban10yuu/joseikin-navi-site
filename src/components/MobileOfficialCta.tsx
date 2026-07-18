'use client';

import { useEffect, useRef } from 'react';
import type { Audience, Purpose } from '@/lib/types';

interface MobileOfficialCtaProps {
  href: string;
  label: string;
  grantId: string;
  audience?: Audience;
  purpose?: Purpose;
}

export default function MobileOfficialCta({ href, label, grantId, audience, purpose }: MobileOfficialCtaProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateHeight = () => {
      const height = Math.ceil(container.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--mobile-official-cta-height', `${height}px`);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(container);
    window.addEventListener('resize', updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
      document.documentElement.style.removeProperty('--mobile-official-cta-height');
    };
  }, []);

  return (
    <div ref={containerRef} className="grant-mobile-cta">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-event="official_source_click"
        data-page-type="grant"
        data-grant-id={grantId}
        data-audience={audience}
        data-purpose={purpose}
        data-placement="mobile-sticky"
      >
        {label}
        <span className="sr-only">（新しいタブで開きます）</span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
