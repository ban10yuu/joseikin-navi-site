import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { selectMunicipalityPrerenderGroups } from './municipality-prerender.ts';

describe('selectMunicipalityPrerenderGroups', () => {
  it('掲載件数が多い市区町村から指定数だけ事前生成する', () => {
    const selected = selectMunicipalityPrerenderGroups([
      { prefecture: '東京都', municipality: 'A市', count: 3 },
      { prefecture: '大阪府', municipality: 'B市', count: 12 },
      { prefecture: '北海道', municipality: 'C市', count: 7 },
    ], 2);

    assert.deepEqual(selected.map((item) => item.municipality), ['B市', 'C市']);
  });

  it('同件数では安定した順序にし、入力配列を変更しない', () => {
    const groups = [
      { prefecture: '東京都', municipality: 'B市', count: 5 },
      { prefecture: '東京都', municipality: 'A市', count: 5 },
    ];
    const selected = selectMunicipalityPrerenderGroups(groups, 2);

    assert.deepEqual(selected.map((item) => item.municipality), ['A市', 'B市']);
    assert.deepEqual(groups.map((item) => item.municipality), ['B市', 'A市']);
  });
});
