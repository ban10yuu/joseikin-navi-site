import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  MIN_INDEXABLE_MUNICIPALITY_GRANTS,
  isIndexableMunicipalityGroup,
} from './municipality-indexability.ts';

describe('municipality indexability', () => {
  it('公開基準以上の制度がある市区町村だけをindex対象とする', () => {
    assert.equal(
      isIndexableMunicipalityGroup({
        prefecture: '奈良県',
        municipality: '天理市',
        count: MIN_INDEXABLE_MUNICIPALITY_GRANTS,
      }),
      true
    );
    assert.equal(
      isIndexableMunicipalityGroup({
        prefecture: '奈良県',
        municipality: '例示町',
        count: MIN_INDEXABLE_MUNICIPALITY_GRANTS - 1,
      }),
      false
    );
  });
});
