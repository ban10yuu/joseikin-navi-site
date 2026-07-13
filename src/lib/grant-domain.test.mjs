import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { normalizeGrant } from './grant-domain.ts';

const baseGrant = {
  slug: 'example-support',
  title: '例示市 創業支援補助金',
  organization: '例示市',
  type: 'local',
  maxAmount: '最大50万円',
  category: 'employment',
  prefecture: '東京都',
  tags: ['創業', '補助金'],
  eligibility: '市内で創業する事業者',
  description: '創業費用の一部を補助します。',
  sections: [],
  officialUrl: 'https://example.jp/support',
  verifiedAt: '2026-07-01',
  publishedAt: '2026-07-02',
};

describe('normalizeGrant', () => {
  it('旧データの欠損値を安全な既定値へ変換する', () => {
    const result = normalizeGrant(baseGrant);

    assert.equal(result.id, 'example-support');
    assert.equal(result.maxAmountNum, 0);
    assert.equal(result.applicationPeriod, '');
    assert.equal(result.verificationMethod, 'automated');
    assert.equal(result.humanReviewedAt, null);
    assert.equal(result.indexStatus, 'index');
  });

  it('旧カテゴリを公開カテゴリとpurposeへ分離する', () => {
    const result = normalizeGrant({
      ...baseGrant,
      category: 'startup',
      relatedCategories: ['equipment', 'environment'],
    });

    assert.equal(result.category, 'employment');
    assert.deepEqual(result.relatedCategories, ['housing']);
    assert.equal(result.primaryPurpose, 'startup');
    assert.ok(result.purposes.includes('businessGrowth'));
    assert.ok(result.purposes.includes('energySaving'));
  });

  it('貸付制度を返済不要の補助金として扱わない', () => {
    const result = normalizeGrant({
      ...baseGrant,
      title: '例示市 奨学金貸付制度',
      tags: ['奨学金', '貸付'],
    });

    assert.equal(result.supportType, 'scholarshipLoan');
  });

  it('公式情報の確認先がない制度はnoindexにする', () => {
    const result = normalizeGrant({
      ...baseGrant,
      officialUrl: '',
      verifiedAt: undefined,
    });

    assert.equal(result.indexStatus, 'noindex');
    assert.equal(result.contentStatus, 'unverified');
    assert.equal(result.verificationMethod, 'unknown');
  });

  it('人手確認はhumanReviewedAtが明示された場合だけ設定する', () => {
    const result = normalizeGrant({
      ...baseGrant,
      verificationMethod: 'mixed',
      humanReviewedAt: '2026-07-03',
    });

    assert.equal(result.verificationMethod, 'mixed');
    assert.equal(result.humanReviewedAt, '2026-07-03');
  });

  it('内部監査文言を公開本文から除きnoindexにする', () => {
    const result = normalizeGrant({
      ...baseGrant,
      description: '市が2万円を支給します。生成データの金額を補正しました。',
      sections: [
        { heading: '支援内容', content: '<p>1人2万円です。</p>' },
        { heading: '掲載時の補正', content: '<p>旧データを補正しました。</p>' },
      ],
    });

    assert.equal(result.description, '市が2万円を支給します。');
    assert.equal(result.sections.length, 1);
    assert.equal(result.contentStatus, 'needsReview');
    assert.equal(result.indexStatus, 'noindex');
  });
});
