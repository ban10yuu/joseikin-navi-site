'use client';

import GoogleAd from './GoogleAd';
import { shouldRenderDisplayAd } from '@/lib/monetization';

export default function DisplayAdSlot({ format = 'auto', className = '' }: { format?: 'auto' | 'horizontal' | 'rectangle'; className?: string }) {
  if (!shouldRenderDisplayAd(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID, process.env.NEXT_PUBLIC_ADSENSE_SLOT)) return null;
  return <GoogleAd format={format} className={className} />;
}
