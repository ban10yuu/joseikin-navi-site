import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { calculateGrantStats } from './grant-stats.ts';

const grants = [
  { category: 'childcare', relatedCategories: ['living'], purposes: ['childcare', 'livingSupport'], officialUrl: 'https://city.example.jp/a' },
  { category: 'living', relatedCategories: [], purposes: ['livingSupport'], officialUrl: 'https://city.example.jp/b' },
  { category: 'education', relatedCategories: ['childcare'], purposes: ['education'], officialUrl: '' },
];

describe('calculateGrantStats', () => {
  it('総数と公式確認先あり件数を同じ入力から計算する', () => {
    const result = calculateGrantStats(grants);
    assert.equal(result.total, 3);
    assert.equal(result.officialLinked, 2);
  });

  it('複数カテゴリ・複数目的を独立して集計する', () => {
    const result = calculateGrantStats(grants);
    assert.equal(result.categoryCounts.childcare, 2);
    assert.equal(result.categoryCounts.living, 2);
    assert.equal(result.categoryAssignmentTotal > result.total, true);
    assert.equal(result.multiplePurposeCount, 1);
  });
});
