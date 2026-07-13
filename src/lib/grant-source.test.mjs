import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getGrantSourceStatus, isManuallyVerifiedGrant } from './grant-source.ts';

const linkedGrant = {
  officialUrl: 'https://www.city.example.jp/support',
  sourceUrls: ['https://www.city.example.jp/guide.pdf'],
  verifiedAt: '2026-07-01',
};

describe('isManuallyVerifiedGrant', () => {
  it('自動照合日や公式URLだけでは人手確認済みにしない', () => {
    assert.equal(isManuallyVerifiedGrant(linkedGrant), false);
  });

  it('humanReviewedAtが明示された公式リンク付き制度だけを人手確認済みにする', () => {
    assert.equal(isManuallyVerifiedGrant({ ...linkedGrant, humanReviewedAt: '2026-07-02' }), true);
  });
});

describe('getGrantSourceStatus', () => {
  it('自動照合と人手確認の表示を分離する', () => {
    assert.equal(getGrantSourceStatus(linkedGrant).level, 'automated');
    assert.equal(
      getGrantSourceStatus({ ...linkedGrant, humanReviewedAt: '2026-07-02' }).level,
      'human',
    );
  });

  it('公式URLがない制度は未確認にする', () => {
    assert.equal(getGrantSourceStatus({ officialUrl: '' }).level, 'unverified');
  });
});
