'use client';

import { useEffect, useRef } from 'react';
import { shouldRenderDisplayAd } from '@/lib/monetization';

type AdFormat = 'auto' | 'horizontal' | 'vertical' | 'rectangle';

interface GoogleAdProps {
  format?: AdFormat;
  className?: string;
  slot?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

const MIN_HEIGHT_BY_FORMAT: Record<AdFormat, number> = {
  auto: 120,
  horizontal: 100,
  vertical: 280,
  rectangle: 250,
};

export default function GoogleAd({
  format = 'auto',
  className = '',
  slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT,
  label = '広告',
}: GoogleAdProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const pushed = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!shouldRenderDisplayAd(clientId, slot) || pushed.current) return;

    const pushAd = () => {
      if (pushed.current) return true;
      const width = containerRef.current?.getBoundingClientRect().width || 0;
      if (width < 1) return false;

      pushed.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense not loaded yet
      }
      return true;
    };

    if (pushAd()) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(() => {
      if (pushAd()) observer.disconnect();
    });
    observer.observe(element);

    const timeout = window.setTimeout(() => {
      pushAd();
      observer.disconnect();
    }, 3000);

    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
    }
  }, [clientId, slot]);

  if (!shouldRenderDisplayAd(clientId, slot)) return null;

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`} aria-label={label}>
      <div data-ad-label className="mb-1 text-center text-[10px] font-medium tracking-wider text-faint">
        {label}
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: MIN_HEIGHT_BY_FORMAT[format] }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
