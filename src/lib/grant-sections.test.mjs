import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { groupGrantSections } from './grant-sections.ts';

describe('groupGrantSections', () => {
  it('公式由来の見出しを詳細ページの所定位置へ分類する', () => {
    const grouped = groupGrantSections([
      { heading: '対象となる方', content: '対象' },
      { heading: '補助対象経費', content: '経費' },
      { heading: '申請方法と必要書類', content: '書類' },
      { heading: 'その他の注意', content: '注意' },
    ]);
    assert.equal(grouped.eligibility.length, 1);
    assert.equal(grouped.costs.length, 1);
    assert.equal(grouped.documents.length, 1);
    assert.equal(grouped.notes.length, 1);
  });
});
