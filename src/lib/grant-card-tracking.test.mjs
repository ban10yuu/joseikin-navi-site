import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildGrantCardTracking } from './grant-card-tracking.ts';

describe('grant card tracking', () => {
  it('ページ種別・掲載枠・1始まりの表示位置を付与する', () => {
    assert.deepEqual(buildGrantCardTracking({
      pageType: 'listing',
      placement: 'search_results',
      position: 25,
    }), {
      'data-page-type': 'listing',
      'data-placement': 'search_results',
      'data-position': '25',
    });
  });

  it('未指定値や不正な位置を送信しない', () => {
    assert.deepEqual(buildGrantCardTracking({ pageType: 'home' }), {
      'data-page-type': 'home',
    });
    assert.deepEqual(buildGrantCardTracking({ position: 0 }), {});
  });
});
