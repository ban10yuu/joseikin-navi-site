'use client';

import GoogleAd from './GoogleAd';
import type { AdPlacement } from './GoogleAd';

export default function DisplayAdSlot({
  format = 'auto',
  placement = 'default',
  className = '',
}: {
  format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
  placement?: AdPlacement;
  className?: string;
}) {
  return <GoogleAd format={format} placement={placement} className={className} />;
}
