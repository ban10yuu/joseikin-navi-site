import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { describe, it } from 'node:test';
import { auditAffiliateOffers, auditPublishedAffiliateRemotes } from './affiliate-audit.ts';

const validOffer = {
  id: 'a8-accounting-1', enabled: true, network: 'A8.net', advertiserName: '確認済み広告主',
  offerName: '確認済み会計サービス', destinationUrl: 'https://px.a8.net/example', audiences: ['business'],
  intents: ['accounting'], allowedPurposes: ['businessGrowth'], blockedPurposes: ['medical', 'welfare', 'disaster', 'livingSupport'],
  allowedPageTypes: ['grant'], validFrom: '2026-07-01', validUntil: '2026-12-31',
  verifiedAt: '2026-07-15', disclosureText: '以下にはアフィリエイトリンクが含まれます。',
  buttonText: 'サービスの詳細を見る（PR）', trackingId: null, priority: 1,
  externalProgramId: 's00000000000001', partnershipStatus: 'partnered',
  creativeImageUrl: 'https://www23.a8.net/svt/bgt?aid=example',
  creativeAlt: '確認済み会計サービス',
  creativeWidth: 300,
  creativeHeight: 250,
  impressionPixelUrl: 'https://www11.a8.net/0.gif?a8mat=example',
  creativeId: 'a8-accounting-300x250-01',
  creativeSourceUrl: 'https://www23.a8.net/svt/bgt?aid=example',
  creativeVerifiedAt: '2026-07-15',
  destinationHost: 'px.a8.net',
  claimReviewStatus: 'reviewed',
  verifiedLandingHost: 'f.012grp.co.jp', landingVerifiedAt: '2026-07-15',
  creativeFingerprint: 'a99783555e35c5aa94452507aa8e8e75d00a6adeab36a3f6ab62d4b9b94b523f',
  nextReviewAt: '2026-12-31', claimReviewSource: 'A8.net', reviewMethod: 'automated',
};

describe('affiliate offer audit', () => {
  it('有効で必要項目が揃った案件は指摘しない', () => {
    assert.deepEqual(auditAffiliateOffers([validOffer], new Date('2026-07-15')), []);
  });

  it('重複ID、無効URL、確認日なし、期間逆転と期限切れを検出する', () => {
    const issues = auditAffiliateOffers([
      { ...validOffer, destinationUrl: 'http://example.jp', verifiedAt: null, validFrom: '2026-08-01', validUntil: '2026-07-01' },
      { ...validOffer },
    ], new Date('2027-01-01'));
    const codes = new Set(issues.map((issue) => issue.code));
    for (const code of ['DUPLICATE_ID', 'INVALID_DESTINATION_URL', 'MISSING_VERIFIED_AT', 'INVALID_DATE_RANGE', 'EXPIRED_OFFER']) {
      assert.equal(codes.has(code), true, `${code}を検出できませんでした`);
    }
  });

  it('選定情報不足、センシティブ許可、誤認CTA、開示欠落を検出する', () => {
    const issues = auditAffiliateOffers([{
      ...validOffer,
      audiences: [], intents: [], allowedPageTypes: [], allowedPurposes: ['medical'], blockedPurposes: [],
      buttonText: '今すぐ申請', disclosureText: '', advertiserName: '', offerName: '',
    }], new Date('2026-07-15'));
    const codes = new Set(issues.map((issue) => issue.code));
    for (const code of ['MISSING_AUDIENCE', 'MISSING_INTENT', 'MISSING_PAGE_TYPE', 'SENSITIVE_PURPOSE_ALLOWED', 'MISSING_SENSITIVE_BLOCKS', 'MISLEADING_BUTTON_TEXT', 'MISSING_DISCLOSURE', 'MISSING_ADVERTISER', 'MISSING_OFFER_NAME']) {
      assert.equal(codes.has(code), true, `${code}を検出できませんでした`);
    }
  });

  it('明示許可した医療専用案件は医療以外のセンシティブ目的を除外すれば許可する', () => {
    const issues = auditAffiliateOffers([{
      ...validOffer,
      id: 'fertility-care-1',
      audiences: ['individual', 'family'],
      intents: ['fertilityCare'],
      allowedPurposes: ['medical'],
      blockedPurposes: ['welfare', 'disaster', 'livingSupport'],
      allowSensitiveContexts: true,
    }], new Date('2026-07-15'));
    const codes = new Set(issues.map((issue) => issue.code));

    assert.equal(codes.has('SENSITIVE_PURPOSE_ALLOWED'), false);
    assert.equal(codes.has('MISSING_SENSITIVE_BLOCKS'), false);
  });

  it('無効案件の不完全設定は警告、有効案件は重大エラーにする', () => {
    const issues = auditAffiliateOffers([{ ...validOffer, enabled: false, destinationUrl: null }], new Date('2026-07-15'));
    assert.equal(issues.find((issue) => issue.code === 'INVALID_DESTINATION_URL')?.severity, 'warning');
  });

  it('提携完了前の案件を有効化すると重大エラーにする', () => {
    const issues = auditAffiliateOffers([{ ...validOffer, partnershipStatus: 'candidate' }], new Date('2026-07-15'));
    assert.equal(issues.find((issue) => issue.code === 'NOT_PARTNERED')?.severity, 'critical');
  });

  it('公開案件に公式クリエイティブがない場合は重大エラーにする', () => {
    const issues = auditAffiliateOffers([{
      ...validOffer,
      creativeImageUrl: null,
      creativeAlt: null,
      creativeWidth: null,
      creativeHeight: null,
      impressionPixelUrl: null,
    }], new Date('2026-07-15'));
    const codes = new Set(issues.map((issue) => issue.code));
    for (const code of ['MISSING_OFFICIAL_CREATIVE', 'MISSING_CREATIVE_ALT', 'MISSING_CREATIVE_SIZE', 'MISSING_IMPRESSION_PIXEL']) {
      assert.equal(codes.has(code), true, `${code}を検出できませんでした`);
    }
  });

  it('広告主提供クリエイティブの確認情報と遷移先hostを検査する', () => {
    const issues = auditAffiliateOffers([{
      ...validOffer,
      creativeId: '',
      creativeSourceUrl: null,
      creativeVerifiedAt: null,
      destinationHost: 'example.invalid',
      claimReviewStatus: 'pending',
    }], new Date('2026-07-15'));
    const codes = new Set(issues.map((issue) => issue.code));
    for (const code of ['MISSING_CREATIVE_ID', 'MISSING_CREATIVE_SOURCE_URL', 'MISSING_CREATIVE_VERIFIED_AT', 'DESTINATION_HOST_MISMATCH', 'UNREVIEWED_CREATIVE_CLAIMS']) {
      assert.equal(codes.has(code), true, `${code}を検出できませんでした`);
    }
  });

  it('不正な日付と未来の確認日を重大エラーにする', () => {
    const issues = auditAffiliateOffers([{
      ...validOffer,
      verifiedAt: '2026-02-30', validFrom: 'invalid', validUntil: '2026-13-01',
    }], new Date('2026-07-15T00:00:00+09:00'));
    const codes = new Set(issues.map((issue) => issue.code));
    assert.equal(codes.has('INVALID_VERIFIED_AT'), true);
    assert.equal(codes.has('INVALID_VALID_FROM'), true);
    assert.equal(codes.has('INVALID_VALID_UNTIL'), true);

    const future = auditAffiliateOffers([{ ...validOffer, verifiedAt: '2026-07-16' }], new Date('2026-07-15T12:00:00+09:00'));
    assert.equal(future.some((issue) => issue.code === 'FUTURE_VERIFIED_AT'), true);
  });

  it('公開案件のクリエイティブSHAと実リダイレクト経路をオンライン照合する', async () => {
    const creative = Buffer.from('verified creative');
    const offer = {
      ...validOffer,
      creativeFingerprint: createHash('sha256').update(creative).digest('hex'),
    };
    const mockFetch = async (input) => {
      const url = String(input);
      if (url.startsWith('https://www23.a8.net/')) return new Response(creative, { status: 200 });
      if (url.startsWith('https://px.a8.net/')) return new Response(null, { status: 302, headers: { location: 'https://a8cv.f.012grp.co.jp/track' } });
      if (url.startsWith('https://a8cv.f.012grp.co.jp/')) return new Response(null, { status: 302, headers: { location: 'https://f.012grp.co.jp/landing' } });
      if (url.startsWith('https://f.012grp.co.jp/')) return new Response(null, { status: 200 });
      throw new Error(`unexpected URL: ${url}`);
    };

    assert.deepEqual(await auditPublishedAffiliateRemotes([offer], mockFetch), []);
  });

  it('リモート素材差替えと未承認の最終遷移先を重大エラーにする', async () => {
    const mockFetch = async (input) => {
      const url = String(input);
      if (url.startsWith('https://www23.a8.net/')) return new Response('changed creative', { status: 200 });
      if (url.startsWith('https://px.a8.net/')) return new Response(null, { status: 302, headers: { location: 'https://example.invalid/landing' } });
      if (url.startsWith('https://example.invalid/')) return new Response(null, { status: 200 });
      throw new Error(`unexpected URL: ${url}`);
    };
    const codes = new Set((await auditPublishedAffiliateRemotes([validOffer], mockFetch)).map((issue) => issue.code));

    assert.equal(codes.has('REMOTE_CREATIVE_FINGERPRINT_MISMATCH'), true);
    assert.equal(codes.has('REMOTE_LANDING_HOST_MISMATCH'), true);
    assert.equal(codes.has('REMOTE_REDIRECT_HOST_UNAPPROVED'), true);
  });
});
