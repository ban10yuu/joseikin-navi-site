import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { ANALYTICS_PARAMETER_KEYS } from './analytics.ts';

describe('analytics parameter allowlist', () => {
  it('広告の文脈一致を分析する目的・intentを許可する', () => {
    assert.ok(ANALYTICS_PARAMETER_KEYS.includes('contextPurposes'));
    assert.ok(ANALYTICS_PARAMETER_KEYS.includes('contextIntents'));
  });

  it('個人情報に当たる入力項目を許可しない', () => {
    for (const key of ['email', 'name', 'income', 'occupation', 'query']) {
      assert.equal(ANALYTICS_PARAMETER_KEYS.includes(key), false);
    }
  });
});
