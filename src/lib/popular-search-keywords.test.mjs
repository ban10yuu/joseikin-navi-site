import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { POPULAR_SEARCH_KEYWORDS } from '../../scripts/lib/popular-search-keywords.mjs';

describe('popular search keywords', () => {
  it('重複や空文字を含まない', () => {
    assert.equal(
      new Set(POPULAR_SEARCH_KEYWORDS).size,
      POPULAR_SEARCH_KEYWORDS.length
    );
    assert.equal(
      POPULAR_SEARCH_KEYWORDS.every((keyword) => keyword.trim().length > 0),
      true
    );
  });

  it('Search Consoleで確認した制度名検索の共通語を事前生成する', () => {
    const observedTerms = [
      '商品券',
      '応援券',
      '介護用品',
      '乗車券',
      '住み替え',
      '子ども医療費',
      'がん検診',
    ];

    observedTerms.forEach((term) => {
      assert.equal(POPULAR_SEARCH_KEYWORDS.includes(term), true);
    });
  });
});
