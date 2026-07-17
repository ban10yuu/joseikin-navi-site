import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { AFFILIATE_OFFERS } from '../config/affiliate-offers.ts';
import { getEligibleAffiliateOffers, isAffiliateOfferPublishable } from './monetization.ts';

const NOW = new Date('2026-07-17T12:00:00+09:00');

describe('affiliate production config', () => {
  it('提携済みの公式バナー案件を2件公開する', () => {
    const publishable = AFFILIATE_OFFERS.filter((offer) => isAffiliateOfferPublishable(offer, NOW));

    assert.deepEqual(publishable.map((offer) => offer.id), [
      'a8-freee-accounting-wiz',
      'a8-kanbei-sign',
    ]);
    for (const offer of publishable) {
      assert.match(offer.creativeImageUrl ?? '', /^https:\/\/www\d+\.a8\.net\/svt\/bgt\?/);
      assert.match(offer.impressionPixelUrl ?? '', /^https:\/\/www\d+\.a8\.net\/0\.gif\?/);
      assert.equal(offer.creativeWidth, 300);
      assert.equal(offer.creativeHeight, 250);
    }
  });

  it('トップと制度詳細で異なる2案件を選べる', () => {
    const homeOffers = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'home',
      audiences: ['soleProprietor', 'business'],
      purposes: ['startup', 'businessGrowth', 'digitalTransformation'],
      intents: ['accounting', 'electronicContract'],
      monetizationAllowed: true,
      limit: 2,
    }, NOW);
    const detailOffers = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant',
      audiences: ['individual'],
      purposes: ['medical'],
      intents: [],
      monetizationAllowed: false,
      status: 'closed',
      placementMode: 'allGrantDetails',
      limit: 2,
    }, NOW);

    assert.deepEqual(homeOffers.map((offer) => offer.id), ['a8-kanbei-sign', 'a8-freee-accounting-wiz']);
    assert.deepEqual(detailOffers.map((offer) => offer.id), ['a8-kanbei-sign', 'a8-freee-accounting-wiz']);
  });
});
