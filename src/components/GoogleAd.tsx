'use client';

import { useEffect, useRef, useState } from 'react';
import { shouldRenderDisplayAd } from '@/lib/monetization';

type AdFormat = 'auto' | 'horizontal' | 'vertical' | 'rectangle';
export type AdPlacement = 'default' | 'top' | 'inArticle' | 'sidebar' | 'list' | 'footer';

interface GoogleAdProps {
  format?: AdFormat;
  className?: string;
  slot?: string;
  placement?: AdPlacement;
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

const SLOT_BY_PLACEMENT: Record<AdPlacement, string | undefined> = {
  default: process.env.NEXT_PUBLIC_ADSENSE_SLOT,
  top: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT,
  inArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT,
  sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT,
  list: process.env.NEXT_PUBLIC_ADSENSE_SLOT_LIST ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT,
  footer: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT,
};

function resolveSlot(slot: string | undefined, placement: AdPlacement): string | undefined {
  return slot ?? SLOT_BY_PLACEMENT[placement] ?? SLOT_BY_PLACEMENT.default;
}

export default function GoogleAd({
  format = 'auto',
  className = '',
  slot,
  placement = 'default',
  label = '広告',
}: GoogleAdProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const resolvedSlot = resolveSlot(slot, placement);
  const pushed = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const insRef = useRef<HTMLModElement | null>(null);
  const [isUnfilled, setIsUnfilled] = useState(false);

  useEffect(() => {
    if (!shouldRenderDisplayAd(clientId, resolvedSlot) || pushed.current) return;

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
  }, [clientId, resolvedSlot]);

  useEffect(() => {
    if (!shouldRenderDisplayAd(clientId, resolvedSlot)) return;
    const element = insRef.current;
    if (!element) return;

    const updateAdStatus = () => {
      const status = element.getAttribute('data-ad-status');
      if (status === 'unfilled') setIsUnfilled(true);
      if (status === 'filled') setIsUnfilled(false);
    };

    updateAdStatus();
    const observer = new MutationObserver(updateAdStatus);
    observer.observe(element, { attributes: true, attributeFilter: ['data-ad-status'] });

    return () => observer.disconnect();
  }, [clientId, resolvedSlot]);

  if (!shouldRenderDisplayAd(clientId, resolvedSlot) || isUnfilled) return null;

  return (
    <div ref={containerRef} className={`adsense-slot overflow-hidden ${className}`} aria-label={label}>
      <div data-ad-label className="mb-1 text-center text-[10px] font-medium tracking-wider text-faint">
        {label}
      </div>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: MIN_HEIGHT_BY_FORMAT[format] }}
        data-ad-client={clientId}
        data-ad-slot={resolvedSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
