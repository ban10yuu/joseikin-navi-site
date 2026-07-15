import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { AFFILIATE_LINK_REL, getEligibleAffiliateOffers, isAffiliateOfferPublishable, shouldRenderDisplayAd } from './monetization.ts';

const offer = {
  id: 'accounting-1', enabled: true, network: 'verified-network', advertiserName: '事業者',
  offerName: '会計サービス', destinationUrl: 'https://advertiser.example.jp/', audiences: ['business'],
  intents: ['accounting'], allowedPurposes: ['businessGrowth'], blockedPurposes: [],
  allowedPageTypes: ['grant'], validFrom: '2026-01-01', validUntil: '2026-12-31',
  verifiedAt: '2026-07-01', disclosureText: 'PR', buttonText: 'サービスの詳細を見る（PR）',
  trackingId: null, externalProgramId: 'program-1', partnershipStatus: 'partnered', priority: 1,
};

describe('display ads', () => {
  it('clientまたはslotが未設定なら広告枠ごと表示しない', () => {
    assert.equal(shouldRenderDisplayAd(null, '123'), false);
    assert.equal(shouldRenderDisplayAd('ca-pub-123', null), false);
    assert.equal(shouldRenderDisplayAd('ca-pub-123', '456'), true);
  });
});

describe('affiliate offers', () => {
  const context = { pageType: 'grant', audiences: ['business'], purposes: ['businessGrowth'], intents: ['accounting'], monetizationAllowed: true };

  it('表示境界でも未提携・申請中・停止中の案件を拒否する', () => {
    for (const partnershipStatus of ['candidate', 'applied', 'suspended']) {
      assert.equal(isAffiliateOfferPublishable({ ...offer, partnershipStatus }, new Date('2026-07-13')), false);
    }
    assert.equal(isAffiliateOfferPublishable(offer, new Date('2026-07-13')), true);
  });

  it('無効・URLなし・期限切れの案件を表示しない', () => {
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, enabled: false }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, destinationUrl: null }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, validUntil: '2026-06-30' }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, partnershipStatus: 'candidate' }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, validUntil: 'invalid' }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, validFrom: '2026-02-30' }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, validFrom: '2026-08-01', validUntil: '2026-07-31' }], context, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, verifiedAt: '2026-07-14' }], context, new Date('2026-07-13T12:00:00+09:00')), []);
  });

  it('日付の切り替わりはAsia/Tokyoを基準にする', () => {
    const result = getEligibleAffiliateOffers([
      { ...offer, validFrom: '2026-07-14', verifiedAt: '2026-07-14' },
    ], context, new Date('2026-07-13T15:00:00.000Z'));
    assert.deepEqual(result.map((item) => item.id), [offer.id]);
  });

  it('掲載終了日当日は表示対象に含める', () => {
    const result = getEligibleAffiliateOffers([{ ...offer, validUntil: '2026-07-13' }], context, new Date('2026-07-13T23:59:00+09:00'));
    assert.deepEqual(result.map((item) => item.id), [offer.id]);
  });

  it('センシティブ目的と収益化不許可ページでは表示しない', () => {
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, purposes: ['medical'] }, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, monetizationAllowed: false }, new Date('2026-07-13')), []);
  });

  it('制度詳細では初期状態として事業者向けだけを対象にする', () => {
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, audiences: ['family'] }, new Date('2026-07-13')), []);
  });

  it('制度のintentと一致しない案件やintent未設定案件を表示しない', () => {
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, intents: ['payroll'] }, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([{ ...offer, intents: [] }], context, new Date('2026-07-13')), []);
  });

  it('優先度順に並べ、指定した表示上限を超えない', () => {
    const lowerPriority = { ...offer, id: 'accounting-low', priority: 1 };
    const higherPriority = { ...offer, id: 'accounting-high', priority: 10 };
    const result = getEligibleAffiliateOffers([lowerPriority, higherPriority], { ...context, limit: 1 }, new Date('2026-07-13'));
    assert.deepEqual(result.map((item) => item.id), ['accounting-high']);
  });

  it('PRリンクに必要なrel属性を固定する', () => {
    assert.equal(AFFILIATE_LINK_REL, 'sponsored nofollow noopener noreferrer');
  });
});
