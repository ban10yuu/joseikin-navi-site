import type { Audience, Purpose } from '@/lib/types';

export type AffiliatePageType = 'grant' | 'businessGuide' | 'comparison';

export interface AffiliateOffer {
  id: string;
  enabled: boolean;
  network: string;
  advertiserName: string;
  offerName: string;
  destinationUrl: string | null;
  audiences: Audience[];
  intents: string[];
  allowedPurposes: Purpose[];
  blockedPurposes: Purpose[];
  allowedPageTypes: AffiliatePageType[];
  validFrom: string | null;
  validUntil: string | null;
  verifiedAt: string | null;
  disclosureText: string;
  buttonText: string;
  trackingId: string | null;
  priority: number;
}

// 運営者が案件・URL・条件を確認するまで公開しない。
export const AFFILIATE_OFFERS: AffiliateOffer[] = [];
