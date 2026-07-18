import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { normalizeGrantQuery, queryGrants } from './grant-query.ts';

const base = {
  id: 'a', slug: 'a', title: '子育て給付', organization: 'A市', providerName: 'A市', providerType: 'local',
  type: 'local', category: 'childcare', relatedCategories: [], audiences: ['family'], primaryAudience: 'family',
  purposes: ['childcare'], primaryPurpose: 'childcare', supportType: 'benefit', prefecture: '東京都', municipality: 'A市',
  maxAmountNum: 10, amountMax: 10, officialUrl: 'https://city.example.jp/a', status: 'open', applicationPeriod: '',
  eligibility: '子育て世帯', description: '子育てを支援', tags: [], sections: [], maxAmount: '10万円', publishedAt: '2026-01-01',
  contentUpdatedAt: '2026-07-01', sourceCheckedAt: '2026-07-01', contentStatus: 'published', indexStatus: 'index',
};

const grants = Array.from({ length: 30 }, (_, index) => ({
  ...base, id: `${index}`, slug: `${index}`, title: index === 0 ? '出産 子育て給付' : `子育て給付 ${index}`,
  prefecture: index === 1 ? '大阪府' : '東京都',
  primaryAudience: index === 2 ? 'business' : 'family', audiences: index === 2 ? ['business'] : ['family'],
  primaryPurpose: index === 2 ? 'digitalTransformation' : 'childcare', purposes: index === 2 ? ['digitalTransformation'] : ['childcare'],
  supportType: index === 3 ? 'loan' : 'benefit', maxAmountNum: index, amountMax: index,
}));

describe('normalizeGrantQuery', () => {
  it('不正値を除きページ上限を補正する', () => {
    const query = normalizeGrantQuery({ page: '-2', sort: 'invalid', audience: 'invalid', official: '0' });
    assert.equal(query.page, 1);
    assert.equal(query.sort, 'relevance');
    assert.equal(query.audience, null);
    assert.equal(query.officialOnly, false);
  });
});

describe('queryGrants', () => {
  it('キーワード・対象・地域・目的・制度種別で絞り込む', () => {
    const result = queryGrants(grants, normalizeGrantQuery({
      q: '子育て', audience: 'individual', pref: '東京都', purpose: 'childcare', supportType: 'benefit',
    }));
    assert.equal(result.total, 27);
  });

  it('構造化済みの市区町村で絞り込む', () => {
    const result = queryGrants(grants, normalizeGrantQuery({ municipality: 'A市' }));
    assert.equal(result.total, 30);
  });

  it('24件ずつページネーションする', () => {
    const first = queryGrants(grants, normalizeGrantQuery({ page: '1' }));
    const second = queryGrants(grants, normalizeGrantQuery({ page: '2' }));
    assert.equal(first.items.length, 24);
    assert.equal(second.items.length, 6);
    assert.equal(first.pageCount, 2);
  });

  it('支援額順で並び替える', () => {
    const result = queryGrants(grants, normalizeGrantQuery({ sort: 'amount' }));
    assert.equal(result.items[0].maxAmountNum, 29);
  });

  it('カテゴリURLを引き継ぎ、通常表示では終了制度を除く', () => {
    const mixed = [
      ...grants,
      { ...base, id: 'closed', slug: 'closed', status: 'closed' },
      { ...base, id: 'housing', slug: 'housing', category: 'housing' },
    ];
    const result = queryGrants(mixed, normalizeGrantQuery({ cat: 'childcare' }));
    assert.equal(result.total, 30);
    assert.equal(result.items.some((grant) => grant.slug === 'closed'), false);
    assert.equal(result.items.some((grant) => grant.slug === 'housing'), false);
  });
});
