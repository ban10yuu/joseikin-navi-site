import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { auditAffiliateOffers } from './affiliate-audit.ts';

const validOffer = {
  id: 'a8-accounting-1', enabled: true, network: 'A8.net', advertiserName: '確認済み広告主',
  offerName: '確認済み会計サービス', destinationUrl: 'https://px.a8.net/example', audiences: ['business'],
  intents: ['accounting'], allowedPurposes: ['businessGrowth'], blockedPurposes: ['medical', 'welfare', 'disaster', 'livingSupport'],
  allowedPageTypes: ['grant'], validFrom: '2026-07-01', validUntil: '2026-12-31',
  verifiedAt: '2026-07-15', disclosureText: '以下にはアフィリエイトリンクが含まれます。',
  buttonText: 'サービスの詳細を見る（PR）', trackingId: null, priority: 1,
  externalProgramId: 's00000000000001', partnershipStatus: 'partnered',
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

  it('無効案件の不完全設定は警告、有効案件は重大エラーにする', () => {
    const issues = auditAffiliateOffers([{ ...validOffer, enabled: false, destinationUrl: null }], new Date('2026-07-15'));
    assert.equal(issues.find((issue) => issue.code === 'INVALID_DESTINATION_URL')?.severity, 'warning');
  });

  it('提携完了前の案件を有効化すると重大エラーにする', () => {
    const issues = auditAffiliateOffers([{ ...validOffer, partnershipStatus: 'candidate' }], new Date('2026-07-15'));
    assert.equal(issues.find((issue) => issue.code === 'NOT_PARTNERED')?.severity, 'critical');
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
});
