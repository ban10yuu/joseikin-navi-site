'use client';

import GoogleAd from './GoogleAd';
import type { AdPlacement } from './GoogleAd';

interface AdBannerProps {
  size?: 'full' | 'medium' | 'compact';
  placement?: AdPlacement;
  className?: string;
}

export default function AdBanner({ size = 'full', placement = 'default', className = '' }: AdBannerProps) {
  const wrapperClassName = className.trim();

  if (size === 'compact') {
    return <GoogleAd format="horizontal" placement={placement} className={`my-4 ${wrapperClassName}`} />;
  }

  if (size === 'medium') {
    return <GoogleAd format="rectangle" placement={placement} className={`my-6 ${wrapperClassName}`} />;
  }

  return <GoogleAd format="auto" placement={placement} className={`my-8 ${wrapperClassName}`} />;
}
