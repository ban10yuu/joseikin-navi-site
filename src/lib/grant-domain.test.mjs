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
    assert.equal(result.municipality, '例示市');
    assert.equal(result.verificationMethod, 'automated');
    assert.equal(result.humanReviewedAt, null);
    assert.equal(result.indexStatus, 'index');
  });

  it('自治体名が構造化されていない旧データから市区町村を取り出す', () => {
    assert.equal(normalizeGrant({ ...baseGrant, organization: '神奈川県 横浜市', prefecture: '神奈川県' }).municipality, '横浜市');
    assert.equal(normalizeGrant({ ...baseGrant, title: '全国住宅支援制度', organization: '国土交通省', type: 'national', prefecture: '全国' }).municipality, null);
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

  it('主URLがなくても有効な補助出典URLを公式確認先として扱う', () => {
    const result = normalizeGrant({
      ...baseGrant,
      officialUrl: '',
      sourceUrls: ['https://www.city.example.jp/support.pdf'],
    });

    assert.equal(result.indexStatus, 'index');
    assert.equal(result.sourceUrl, 'https://www.city.example.jp/support.pdf');
  });

  it('制度の存在を確認できない調査資料は公式確認先として公開しない', () => {
    const result = normalizeGrant({
      ...baseGrant,
      title: '例示市 伝統工芸助成金（公式現行制度として確認不可）',
      officialUrl: '',
      sourceUrls: ['https://www.city.example.jp/other-support'],
      tags: ['公式確認不可', '掲載停止'],
    });

    assert.equal(result.contentStatus, 'needsReview');
    assert.equal(result.indexStatus, 'noindex');
    assert.equal(result.sourceUrl, null);
    assert.equal(result.sourceUrls, undefined);
    assert.equal(result.verificationMethod, 'unknown');
  });

  it('公式に終了を確認した制度は確認先と終了後の導線を保持する', () => {
    const result = normalizeGrant({
      ...baseGrant,
      description: '公式ページで受付終了を確認したため、通常一覧から除外します。',
      tags: ['受付終了'],
      status: 'closed',
    });

    assert.equal(result.officialUrl, baseGrant.officialUrl);
    assert.equal(result.contentStatus, 'published');
    assert.equal(result.verificationMethod, 'automated');
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
