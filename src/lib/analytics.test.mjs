import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { ANALYTICS_EVENTS } from './analytics.ts';

describe('affiliate analytics contract', () => {
  it('DOM描画と実視認を別イベントとして定義する', () => {
    assert.equal(ANALYTICS_EVENTS.includes('affiliate_render'), true);
    assert.equal(ANALYTICS_EVENTS.includes('affiliate_impression'), true);
  });

  it('広告枠への到達と個別広告の視認を別イベントで測定する', () => {
    assert.equal(ANALYTICS_EVENTS.includes('affiliate_placement_impression'), true);

    const source = readFileSync(
      new URL('../components/ResponsiveAffiliatePlacement.tsx', import.meta.url),
      'utf8'
    );
    assert.match(source, /data-analytics-impression-event="affiliate_placement_impression"/u);
    assert.match(source, /data-placement=\{placement\}/u);
  });
});
