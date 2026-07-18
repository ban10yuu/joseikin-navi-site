import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { ANALYTICS_EVENTS } from './analytics.ts';

describe('affiliate analytics contract', () => {
  it('DOM描画と実視認を別イベントとして定義する', () => {
    assert.equal(ANALYTICS_EVENTS.includes('affiliate_render'), true);
    assert.equal(ANALYTICS_EVENTS.includes('affiliate_impression'), true);
  });
});
