import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { AFFILIATE_LINK_REL, getEligibleAffiliateOffers, isAffiliateOfferPublishable, isSensitiveAffiliateContext, shouldLoadAdsenseScript, shouldRenderDisplayAd } from './monetization.ts';

const offer = {
  id: 'accounting-1', enabled: true, network: 'verified-network', advertiserName: '事業者',
  offerName: '会計サービス', destinationUrl: 'https://px.a8.net/example', audiences: ['business'],
  intents: ['accounting'], allowedPurposes: ['businessGrowth'], blockedPurposes: [],
  allowedPageTypes: ['grant'], validFrom: '2026-01-01', validUntil: '2026-12-31',
  verifiedAt: '2026-07-01', disclosureText: 'PR', buttonText: 'サービスの詳細を見る（PR）',
  trackingId: null, externalProgramId: 'program-1', partnershipStatus: 'partnered', priority: 1,
  creativeImageUrl: 'https://www23.a8.net/svt/bgt?aid=example',
  creativeAlt: '会計サービス',
  creativeWidth: 300,
  creativeHeight: 250,
  impressionPixelUrl: 'https://www11.a8.net/0.gif?a8mat=example',
  creativeId: 'verified-accounting-300x250', creativeSourceUrl: 'https://www23.a8.net/svt/bgt?aid=example',
  creativeVerifiedAt: '2026-07-01', destinationHost: 'px.a8.net', claimReviewStatus: 'reviewed',
  verifiedLandingHost: 'f.012grp.co.jp', landingVerifiedAt: '2026-07-01',
  creativeFingerprint: 'a99783555e35c5aa94452507aa8e8e75d00a6adeab36a3f6ab62d4b9b94b523f',
  nextReviewAt: '2026-12-31', claimReviewSource: 'A8.net', reviewMethod: 'automated',
};

describe('display ads', () => {
  it('clientまたはslotが未設定なら広告枠ごと表示しない', () => {
    assert.equal(shouldRenderDisplayAd(null, '123'), false);
    assert.equal(shouldRenderDisplayAd('ca-pub-123', null), false);
    assert.equal(shouldRenderDisplayAd('ca-pub-123', '456'), true);
  });

  it('AdSense所有権確認スクリプトはクライアントIDだけで読み込める', () => {
    assert.equal(shouldLoadAdsenseScript(null), false);
    assert.equal(shouldLoadAdsenseScript('  '), false);
    assert.equal(shouldLoadAdsenseScript('ca-pub-123'), true);
  });
});

describe('affiliate offers', () => {
  const context = {
    pageType: 'grant', audiences: ['business'], purposes: ['businessGrowth'], intents: ['accounting'],
    monetizationAllowed: true, status: 'open', indexable: true, hasOfficialSource: true,
  };

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

  it('受付終了制度でも文脈に一致する民間サービスは表示できる', () => {
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, status: 'closed' }, new Date('2026-07-13')).map((item) => item.id), [offer.id]);
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, status: 'open' }, new Date('2026-07-13')).map((item) => item.id), [offer.id]);
  });

  it('詳細ページ指定だけでは個人・医療制度へ事業者向け広告を返さない', () => {
    const result = getEligibleAffiliateOffers([offer], {
      ...context, audiences: ['family'], purposes: ['medical'], intents: [], monetizationAllowed: false,
      status: 'closed', indexable: false, hasOfficialSource: false, placementMode: 'allGrantDetails', limit: 2,
    }, new Date('2026-07-13'));
    assert.deepEqual(result, []);
  });

  it('医療文脈を明示許可した案件は対象者・目的・意図がすべて一致した場合だけ返す', () => {
    const fertilityOffer = {
      ...offer,
      id: 'fertility-care-1',
      offerName: '不妊治療相談サービス',
      audiences: ['individual', 'family'],
      intents: ['fertilityCare'],
      allowedPurposes: ['medical'],
      allowSensitiveContexts: true,
    };
    const fertilityContext = {
      pageType: 'grant', audiences: ['family'], purposes: ['medical'], intents: ['fertilityCare'],
      monetizationAllowed: false, status: 'open', indexable: true, hasOfficialSource: true,
    };

    assert.deepEqual(
      getEligibleAffiliateOffers([fertilityOffer], fertilityContext, new Date('2026-07-13')).map((item) => item.id),
      ['fertility-care-1'],
    );
    assert.deepEqual(getEligibleAffiliateOffers([fertilityOffer], { ...fertilityContext, intents: ['medicalExpenseTax'] }, new Date('2026-07-13')), []);
    assert.deepEqual(getEligibleAffiliateOffers([fertilityOffer], { ...fertilityContext, audiences: ['business'] }, new Date('2026-07-13')), []);
  });

  it('粗い副カテゴリのみで事業者制度の関連広告を消さない', () => {
    const result = getEligibleAffiliateOffers([offer], {
      ...context,
      primaryPurpose: 'businessGrowth',
      purposes: ['businessGrowth', 'livingSupport'],
      sensitive: false,
    }, new Date('2026-07-13'));
    assert.deepEqual(result.map((item) => item.id), [offer.id]);
  });

  it('副目的だけが一致する広告は主目的と不一致なら表示しない', () => {
    const result = getEligibleAffiliateOffers([offer], {
      ...context,
      primaryPurpose: 'housing',
      purposes: ['housing', 'businessGrowth'],
    }, new Date('2026-07-13'));
    assert.deepEqual(result, []);
  });

  it('主目的または本文がセンシティブな場合は引き続き拒否する', () => {
    for (const sensitivePurpose of ['medical', 'welfare', 'disaster', 'livingSupport']) {
      const result = getEligibleAffiliateOffers([offer], {
        ...context,
        primaryPurpose: sensitivePurpose,
        purposes: ['businessGrowth', sensitivePurpose],
      }, new Date('2026-07-13'));
      assert.deepEqual(result, [], `${sensitivePurpose}が主目的の制度が広告対象になりました`);
    }
    assert.deepEqual(getEligibleAffiliateOffers([offer], {
      ...context,
      primaryPurpose: 'businessGrowth',
      purposes: ['businessGrowth', 'livingSupport'],
      sensitive: true,
    }, new Date('2026-07-13')), []);
  });

  it('目的分類だけでなく制度名やタグの緊急・脆弱性語も判定する', () => {
    assert.equal(isSensitiveAffiliateContext({ purposes: ['businessGrowth'], audiences: ['business'], texts: ['災害復旧設備補助金'] }), true);
    assert.equal(isSensitiveAffiliateContext({ purposes: ['businessGrowth'], audiences: ['business'], texts: ['DV被害者支援'] }), true);
    assert.equal(isSensitiveAffiliateContext({ purposes: ['businessGrowth'], audiences: ['business'], texts: ['通常の設備投資補助金'] }), false);
    assert.equal(isSensitiveAffiliateContext({ purposes: ['childcare'], primaryPurpose: 'childcare', audiences: ['family'], texts: ['特別児童扶養手当', '障害児を養育する家庭'] }), true);
  });

  it('受付終了によるnoindexと広告選定は分離し、公式確認先なしは拒否する', () => {
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, indexable: false }, new Date('2026-07-13')).map((item) => item.id), [offer.id]);
    assert.deepEqual(getEligibleAffiliateOffers([offer], { ...context, hasOfficialSource: false }, new Date('2026-07-13')), []);
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
