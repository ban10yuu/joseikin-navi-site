import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getDeadlineStatus } from './deadline.ts';

describe('getDeadlineStatus', () => {
  it('申請期間が欠けているデータは状態不明として扱う', () => {
    assert.equal(getDeadlineStatus({}), null);
  });
});
