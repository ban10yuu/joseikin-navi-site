import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { findSearchCatalogSlugs } from './search-catalog.ts';

describe('compact search catalog', () => {
  const rows = [
    ['grant-a', '東京都 子育て 住宅 支援'],
    ['grant-b', '大阪府 事業者 dx 導入 支援'],
    ['grant-c', '奈良県 子育て 医療費 助成'],
  ];

  it('すべての検索語を含む制度slugだけを返す', () => {
    assert.deepEqual(
      findSearchCatalogSlugs(rows, '子育て　住宅'),
      ['grant-a']
    );
  });

  it('一致しない検索では全件データを要求せず空配列を返す', () => {
    assert.deepEqual(findSearchCatalogSlugs(rows, '特殊語XYZ'), []);
  });

  it('空検索は軽量索引の対象外とする', () => {
    assert.deepEqual(findSearchCatalogSlugs(rows, '  '), []);
  });
});
