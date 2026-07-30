import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  getSearchTokens,
  matchesSearchText,
  selectNarrowestSearchKeyword,
} from './search.ts';

describe('search helpers', () => {
  it('全角空白を含む検索語をトークン化する', () => {
    assert.deepEqual(getSearchTokens(' 子育て　住宅 '), ['子育て', '住宅']);
  });

  it('すべての検索トークンを含む文だけに一致する', () => {
    assert.equal(matchesSearchText('東京都の子育て住宅支援', '子育て 住宅'), true);
    assert.equal(matchesSearchText('東京都の子育て支援', '子育て 住宅'), false);
  });

  it('検索語に含まれる事前生成フィルターから最小件数を選ぶ', () => {
    assert.equal(
      selectNarrowestSearchKeyword('東京都 子育て 住宅', {
        子育て: 3000,
        住宅: 1200,
        医療: 900,
      }),
      '住宅'
    );
    assert.equal(selectNarrowestSearchKeyword('東京都の制度', { 子育て: 3000 }), null);
    assert.equal(selectNarrowestSearchKeyword('', { 子育て: 3000 }), null);
  });
});
