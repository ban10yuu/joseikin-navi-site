import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { AFFILIATE_OFFERS } from '../config/affiliate-offers.ts';
import { AFFILIATE_ISSUED_HTML } from '../config/affiliate-issued-html.ts';
import { hasApprovedSensitiveAffiliateContext } from '../config/affiliate-security.ts';
import { getEligibleAffiliateOffers, isAffiliateOfferPublishable } from './monetization.ts';

const NOW = new Date('2026-07-19T12:00:00+09:00');

describe('affiliate production config', () => {
  it('センシティブ広告は制度IDと意図を別台帳で照合する', () => {
    assert.equal(hasApprovedSensitiveAffiliateContext('ora-fertility-treatment-subsidy-2026', ['fertilityCare']), true);
    assert.equal(hasApprovedSensitiveAffiliateContext('new-city-fertility-treatment-2026', ['fertilityCare']), false);
    assert.equal(hasApprovedSensitiveAffiliateContext('ora-fertility-treatment-subsidy-2026', ['medicalExpenseTax']), false);
  });

  it('根拠を確認できた公式バナー案件だけを公開する', () => {
    const publishable = AFFILIATE_OFFERS.filter((offer) => isAffiliateOfferPublishable(offer, NOW));

    assert.deepEqual(publishable.map((offer) => offer.id), [
      'a8-freee-accounting-wiz',
      'a8-yayoi-accounting-next',
      'a8-makeshop-ecommerce',
      'a8-easy-myshop-ecommerce',
      'a8-onamae-rental-server',
      'a8-shin-rental-server',
      'a8-aquaclara-childcare-water',
      'a8-r4career-career-agent',
      'a8-sumai-iroha-plus',
      'a8-zero-start-solar',
      'a8-geni-educational-toys',
      'a8-berpy-baby-goods',
      'a8-famm-family-photo',
      'a8-doridori-family-safety',
      'a8-moji-family-chair',
      'a8-onsuku-qualification',
      'a8-shikaku-toruniha',
      'moshimo-andaze-dx-development',
      'moshimo-kikuchi-tax-adviser',
      'a8-plement-seishei-sheet',
      'a8-plement-syringe',
      'moshimo-circle-reuse-ai-saas',
      'moshimo-gleasin',
      'moshimo-worldlibrary-childrens-books',
      'moshimo-money-life-fp',
      'moshimo-sakucareer-match',
      'moshimo-zero-company-formation',
    ]);
    for (const offer of publishable) {
      assert.ok(AFFILIATE_ISSUED_HTML[offer.id], `${offer.id}にASP発行HTMLがありません`);
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

    assert.deepEqual(candidates.map((offer) => offer.externalProgramId), ['7602', '3836']);
    for (const offer of candidates) {
      assert.equal(offer.enabled, false);
      assert.equal(offer.partnershipStatus, 'applied');
      assert.equal(offer.destinationUrl, null);
      assert.equal(offer.creativeImageUrl, null);
      assert.equal(isAffiliateOfferPublishable(offer, NOW), false);
    }
  });

  it('教育・雇用・創業制度では文脈に一致する新規承認案件だけを選ぶ', () => {
    const education = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['family'], purposes: ['childcare', 'education'],
      intents: ['childrensEducation', 'financialPlanning'], monetizationAllowed: true, status: 'open',
      indexable: true, hasOfficialSource: true, limit: 3,
    }, NOW);
    const employment = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['individual', 'jobSeeker'], purposes: ['employment'],
      intents: ['careerConsultation'], monetizationAllowed: true, status: 'open',
      indexable: true, hasOfficialSource: true, limit: 3,
    }, NOW);
    const startup = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['soleProprietor', 'business'], purposes: ['startup'],
      intents: ['businessPlanning', 'companyFormation'], monetizationAllowed: true, status: 'open',
      indexable: true, hasOfficialSource: true, limit: 6,
    }, NOW);

    assert.deepEqual(education.map((offer) => offer.id), [
      'a8-aquaclara-childcare-water',
      'a8-geni-educational-toys',
      'moshimo-worldlibrary-childrens-books',
    ]);
    assert.deepEqual(employment.map((offer) => offer.id), ['a8-r4career-career-agent', 'moshimo-sakucareer-match', 'a8-onsuku-qualification']);
    assert.equal(startup.some((offer) => offer.id === 'moshimo-zero-company-formation'), true);
    assert.equal(startup.some((offer) => offer.id === 'moshimo-circle-reuse-ai-saas'), false);
    assert.equal(startup.some((offer) => offer.id === 'moshimo-gleasin'), false);
  });

  it('リユース査定と商圏分析は専用intentに一致した制度だけで選ぶ', () => {
    const reuse = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['business'], purposes: ['digitalTransformation'],
      intents: ['reuseValuation'], monetizationAllowed: true, status: 'open', indexable: true,
      hasOfficialSource: true, limit: 3,
    }, NOW);
    const tradeArea = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['soleProprietor', 'business'], purposes: ['startup', 'regionalRevitalization'],
      intents: ['tradeAreaAnalysis'], monetizationAllowed: true, status: 'open', indexable: true,
      hasOfficialSource: true, limit: 3,
    }, NOW);

    assert.deepEqual(reuse.map((offer) => offer.id), ['moshimo-circle-reuse-ai-saas']);
    assert.deepEqual(tradeArea.map((offer) => offer.id), ['moshimo-gleasin']);
  });

  it('住宅省エネ制度では住宅向け案件だけを選ぶ', () => {
    const result = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['family'], purposes: ['housing', 'energySaving'],
      intents: ['homeEnergyConsultation'], monetizationAllowed: true, status: 'open',
      indexable: true, hasOfficialSource: true, limit: 2,
    }, NOW);

    assert.deepEqual(result.map((offer) => offer.id), ['a8-zero-start-solar']);
  });

  it('公式確認済みの受付中不妊治療制度では不妊治療に一致する案件だけを選ぶ', () => {
    const result = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['individual', 'family'], purposes: ['medical'],
      intents: ['fertilityCare'], monetizationAllowed: false, sensitiveMonetizationApproved: true, status: 'open',
      indexable: true, hasOfficialSource: true, limit: 2,
    }, NOW);

    assert.deepEqual(result.map((offer) => offer.id), ['a8-plement-seishei-sheet', 'a8-plement-syringe']);
  });

  it('受付状況が不明でも公式確認済みの不妊治療制度なら文脈一致案件を選ぶ', () => {
    const result = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
      pageType: 'grant', audiences: ['individual'], purposes: ['medical', 'childcare'],
      intents: ['fertilityCare', 'treatmentCostManagement'], monetizationAllowed: false, sensitiveMonetizationApproved: true, status: 'unknown',
      indexable: true, hasOfficialSource: true, limit: 2,
    }, NOW);

    assert.deepEqual(result.map((offer) => offer.id), ['a8-plement-seishei-sheet', 'a8-plement-syringe']);
  });
});
