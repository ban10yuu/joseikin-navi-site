'use client';

import { useEffect, useRef } from 'react';

const AD_CLIENT = 'ca-pub-1611624572831066';

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
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet
    }
  }, []);

  return (
    <div className={`overflow-hidden ${className}`} aria-label={label}>
      <div className="mb-1 text-center text-[10px] font-medium tracking-wider text-faint">
        {label}
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: MIN_HEIGHT_BY_FORMAT[format] }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
