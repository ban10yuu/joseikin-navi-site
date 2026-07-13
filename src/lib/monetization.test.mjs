import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { AFFILIATE_LINK_REL, getEligibleAffiliateOffers, shouldRenderDisplayAd } from './monetization.ts';

const offer = {
  id: 'accounting-1', enabled: true, network: 'verified-network', advertiserName: '事業者',
  offerName: '会計サービス', destinationUrl: 'https://advertiser.example.jp/', audiences: ['business'],
  intents: ['accounting'], allowedPurposes: ['businessGrowth'], blockedPurposes: [],
  allowedPageTypes: ['grant'], validFrom: '2026-01-01', validUntil: '2026-12-31',
  verifiedAt: '2026-07-01', disclosureText: 'PR', buttonText: 'サービスの詳細を見る（PR）',
  trackingId: null, priority: 1,
};

describe('display ads', () => {
  it('clientまたはslotが未設定なら広告枠ごと表示しない', () => {
    assert.equal(shouldRenderDisplayAd(null, '123'), false);
    assert.equal(shouldRenderDisplayAd('ca-pub-123', null), false);
    assert.equal(shouldRenderDisplayAd('ca-pub-123', '456'), true);
  });
});

describe('affiliate offers', () => {
  const context = { pageType: 'grant', audiences: ['business'], purposes: ['businessGrowth'], monetizationAllowed: true };

  it('無効・URLなし・期限切れの案件を表示しない', () => {
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, enabled: false }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, destinationUrl: null }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, validUntil: '2026-06-30' }], context, new Date('2026-07-13')), []);
  });

  it('センシティブ目的と収益化不許可ページでは表示しない', () => {
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, purposes: ['medical'] }, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, monetizationAllowed: false }, new Date('2026-07-13')), []);
  });

  it('PRリンクに必要なrel属性を固定する', () => {
    assert.equal(AFFILIATE_LINK_REL, 'sponsored nofollow noopener noreferrer');
  });
});
