import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { AFFILIATE_OFFERS } from '../config/affiliate-offers.ts';
import { getEligibleAffiliateOffers, isAffiliateOfferPublishable } from './monetization.ts';

const NOW = new Date('2026-07-17T12:00:00+09:00');

describe('affiliate production config', () => {
  it('根拠を確認できた公式バナー案件だけを公開する', () => {
    const publishable = AFFILIATE_OFFERS.filter((offer) => isAffiliateOfferPublishable(offer, NOW));

    assert.deepEqual(publishable.map((offer) => offer.id), ['a8-freee-accounting-wiz']);
    for (const offer of publishable) {
      assert.match(offer.creativeImageUrl ?? '', /^https:\/\/www\d+\.a8\.net\/svt\/bgt\?/);
      assert.match(offer.impressionPixelUrl ?? '', /^https:\/\/www\d+\.a8\.net\/0\.gif\?/);
      assert.equal(offer.creativeWidth, 300);
      assert.equal(offer.creativeHeight, 250);
    }
  });

  it('トップと適合する事業者向け制度詳細で公開可能な案件だけを選ぶ', () => {
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
      audiences: ['business'],
      purposes: ['businessGrowth', 'digitalTransformation'],
      intents: ['accounting', 'electronicContract', 'businessPlanning'],
      monetizationAllowed: true,
      status: 'open',
      indexable: true,
      hasOfficialSource: true,
      limit: 2,
    }, NOW);

    assert.deepEqual(homeOffers.map((offer) => offer.id), ['a8-freee-accounting-wiz']);
    assert.deepEqual(detailOffers.map((offer) => offer.id), ['a8-freee-accounting-wiz']);
    const suspendedCreative = AFFILIATE_OFFERS.find((offer) => offer.id === 'a8-kanbei-sign');
    assert.equal(suspendedCreative?.enabled, false);
    assert.equal(suspendedCreative?.claimReviewStatus, 'pending');
  });

  it('全詳細配置では個人・センシティブ・終了制度にも公開可能な広告を返す', () => {
    const result = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['individual'], purposes: ['businessGrowth', 'medical'],
      intents: ['accounting'], monetizationAllowed: false, status: 'closed', indexable: false,
      hasOfficialSource: false, placementMode: 'allGrantDetails', limit: 2,
    }, NOW);

    assert.deepEqual(result.map((offer) => offer.id), ['a8-freee-accounting-wiz']);
  });

  it('もしもの申請中4案件は公開条件を満たすまで非表示にする', () => {
    const candidates = AFFILIATE_OFFERS.filter((offer) => offer.network === 'もしもアフィリエイト');

    assert.deepEqual(candidates.map((offer) => offer.externalProgramId), ['7644', '7602', '7520', '3836']);
    for (const offer of candidates) {
      assert.equal(offer.enabled, false);
      assert.equal(offer.partnershipStatus, 'applied');
      assert.equal(offer.destinationUrl, null);
      assert.equal(offer.creativeImageUrl, null);
      assert.equal(isAffiliateOfferPublishable(offer, NOW), false);
    }
  });
});
