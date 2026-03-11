'use client';

import GoogleAd from './GoogleAd';

interface AdBannerProps {
  size?: 'full' | 'medium' | 'compact';
}

export default function AdBanner({ size = 'full' }: AdBannerProps) {
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
