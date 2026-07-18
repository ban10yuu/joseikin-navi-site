import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { AFFILIATE_OFFERS } from '../config/affiliate-offers.ts';
import { getEligibleAffiliateOffers, isAffiliateOfferPublishable } from './monetization.ts';

const NOW = new Date('2026-07-19T12:00:00+09:00');

describe('affiliate production config', () => {
  it('根拠を確認できた公式バナー案件だけを公開する', () => {
    const publishable = AFFILIATE_OFFERS.filter((offer) => isAffiliateOfferPublishable(offer, NOW));

    assert.deepEqual(publishable.map((offer) => offer.id), [
      'a8-freee-accounting-wiz',
      'a8-yayoi-accounting-next',
      'a8-makeshop-ecommerce',
      'a8-easy-myshop-ecommerce',
      'a8-onamae-rental-server',
      'a8-shin-rental-server',
      'moshimo-saiene-home-consultation',
      'moshimo-andaze-dx-development',
      'moshimo-kikuchi-tax-adviser',
    ]);
    for (const offer of publishable) {
      if (offer.network === 'A8.net') {
        assert.match(offer.creativeImageUrl ?? '', /^https:\/\/www\d+\.a8\.net\/svt\/bgt\?/);
        assert.match(offer.impressionPixelUrl ?? '', /^https:\/\/www\d+\.a8\.net\/0\.gif\?/);
      } else {
        assert.match(offer.creativeImageUrl ?? '', /^https:\/\/image\.moshimo\.com\/af-img\//);
        assert.match(offer.impressionPixelUrl ?? '', /^https:\/\/i\.moshimo\.com\/af\/i\/impression\?/);
      }
      assert.ok((offer.creativeWidth ?? 0) > 0);
      assert.ok((offer.creativeHeight ?? 0) > 0);
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

    assert.deepEqual(homeOffers.map((offer) => offer.id), ['a8-freee-accounting-wiz', 'a8-yayoi-accounting-next']);
    assert.deepEqual(detailOffers.map((offer) => offer.id), ['a8-freee-accounting-wiz', 'a8-yayoi-accounting-next']);
    const suspendedCreative = AFFILIATE_OFFERS.find((offer) => offer.id === 'a8-kanbei-sign');
    assert.equal(suspendedCreative?.enabled, false);
    assert.equal(suspendedCreative?.claimReviewStatus, 'pending');
  });

  it('詳細ページ指定でも個人・医療制度へ事業者広告を流用しない', () => {
    const result = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['individual'], purposes: ['businessGrowth', 'medical'],
      intents: ['accounting'], monetizationAllowed: false, status: 'closed', indexable: false,
      hasOfficialSource: false, placementMode: 'allGrantDetails', limit: 2,
    }, NOW);

    assert.deepEqual(result, []);
  });

  it('もしもの申請中案件は公開条件を満たすまで非表示にする', () => {
    const candidates = AFFILIATE_OFFERS.filter((offer) => offer.network === 'もしもアフィリエイト' && offer.partnershipStatus === 'applied');

    assert.deepEqual(candidates.map((offer) => offer.externalProgramId), ['7644', '7602', '7520', '3836']);
    for (const offer of candidates) {
      assert.equal(offer.enabled, false);
      assert.equal(offer.partnershipStatus, 'applied');
      assert.equal(offer.destinationUrl, null);
      assert.equal(offer.creativeImageUrl, null);
      assert.equal(isAffiliateOfferPublishable(offer, NOW), false);
    }
  });

  it('住宅省エネ制度では住宅向け案件だけを選ぶ', () => {
    const result = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['family'], purposes: ['housing', 'energySaving'],
      intents: ['homeEnergyConsultation'], monetizationAllowed: true, status: 'open',
      indexable: true, hasOfficialSource: true, limit: 2,
    }, NOW);

    assert.deepEqual(result.map((offer) => offer.id), ['moshimo-saiene-home-consultation']);
  });
});
