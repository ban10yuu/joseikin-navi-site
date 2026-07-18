import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { rankRelatedGrants } from './related-grants.ts';

const current = {
  slug: 'current', audiences: ['senior'], primaryPurpose: 'welfare', purposes: ['welfare'],
  prefecture: '東京都', supportType: 'benefit', status: 'open', officialUrl: 'https://tokyo.example.jp/current',
};

describe('rankRelatedGrants', () => {
  it('同じ対象者・目的・地域の制度を優先する', () => {
    const candidates = [
      { ...current, slug: 'same', status: 'scheduled' },
      { ...current, slug: 'national', prefecture: '全国', supportType: 'allowance' },
      { ...current, slug: 'source-only', officialUrl: '', sourceUrls: ['https://tokyo.example.jp/source-only'] },
    ];
    assert.deepEqual(rankRelatedGrants(current, candidates).map((item) => item.slug), ['same', 'source-only', 'national']);
  });

  it('他県・別対象・別目的・公式リンクなし・終了制度を除外する', () => {
    const candidates = [
      { ...current, slug: 'other-pref', prefecture: '大阪府' },
      { ...current, slug: 'business', audiences: ['business'] },
      { ...current, slug: 'dx', primaryPurpose: 'digitalTransformation', purposes: ['digitalTransformation'] },
      { ...current, slug: 'no-source', officialUrl: '' },
      { ...current, slug: 'closed', status: 'closed' },
    ];
    assert.deepEqual(rankRelatedGrants(current, candidates), []);
  });
});
