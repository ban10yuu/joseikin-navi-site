'use client';

import GoogleAd from './GoogleAd';
import { shouldRenderDisplayAd } from '@/lib/monetization';

interface AdBannerProps {
  size?: 'full' | 'medium' | 'compact';
}

export default function AdBanner({ size = 'full' }: AdBannerProps) {
  if (!shouldRenderDisplayAd(
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
    process.env.NEXT_PUBLIC_ADSENSE_SLOT,
  )) return null;

  if (size === 'compact') {
    return (
      <div className="my-4">
        <GoogleAd format="horizontal" />
      </div>
    );
  }

  if (size === 'medium') {
    return (
      <div className="my-6">
        <GoogleAd format="rectangle" />
      </div>
    );
  }

  return (
    <div className="my-8">
      <GoogleAd format="auto" />
    </div>
  );
}
