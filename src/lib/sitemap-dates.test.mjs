import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getCollectionLastModified, getGrantLastModified } from './sitemap-dates.ts';

const now = new Date('2026-07-16T00:00:00.000Z');

describe('sitemap dates', () => {
  it('制度詳細はcontentUpdatedAt、verifiedAt、publishedAtの順で採用する', () => {
    assert.equal(getGrantLastModified({ contentUpdatedAt: '2026-07-10', verifiedAt: '2026-07-11', publishedAt: '2026-07-12' }, now), '2026-07-10');
    assert.equal(getGrantLastModified({ contentUpdatedAt: null, verifiedAt: '2026-07-11', publishedAt: '2026-07-12' }, now), '2026-07-11');
  });

  it('不正日・未来日・欠損日は除外し、次の有効日へフォールバックする', () => {
    assert.equal(getGrantLastModified({ contentUpdatedAt: '2026-02-30', verifiedAt: '2026-02-28', publishedAt: '' }, now), '2026-02-28');
    assert.equal(getGrantLastModified({ contentUpdatedAt: 'invalid', verifiedAt: '2026-07-17', publishedAt: '' }, now), undefined);
  });

  it('曖昧な日付、タイムゾーンなし、無効な時刻とオフセットを拒否する', () => {
    for (const value of ['07/01/2026', '2026-07-10T12:00:00', '2026-07-10T24:00:00Z', '2026-07-10T12:00:00+15:00']) {
      assert.equal(getGrantLastModified({ contentUpdatedAt: value }, now), undefined);
    }
    assert.equal(getGrantLastModified({ contentUpdatedAt: '2026-07-15T23:59:59+09:00' }, now), '2026-07-15T23:59:59+09:00');
  });

  it('一覧系は掲載制度の有効な更新日の最大値を採用する', () => {
    assert.equal(getCollectionLastModified([
      { contentUpdatedAt: '2026-07-10', verifiedAt: null, publishedAt: '2026-01-01' },
      { contentUpdatedAt: null, verifiedAt: '2026-07-15', publishedAt: '2026-01-02' },
      { contentUpdatedAt: '2026-07-17', verifiedAt: null, publishedAt: '2026-01-03' },
    ], now), '2026-07-15');
    assert.equal(getCollectionLastModified([], now), undefined);
  });
});
