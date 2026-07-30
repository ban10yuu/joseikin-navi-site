import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DYNAMIC_HTML_CDN_CACHE_CONTROL } from '../config/cache-policy.ts';

describe('CloudflareのHTMLキャッシュ制御', () => {
  it('制度詳細の修正を1時間以内に反映できる', () => {
    assert.match(
      DYNAMIC_HTML_CDN_CACHE_CONTROL,
      /(?:^|,\s*)s-maxage=3600(?:,|$)/u
    );
    assert.match(
      DYNAMIC_HTML_CDN_CACHE_CONTROL,
      /(?:^|,\s*)stale-while-revalidate=86400(?:,|$)/u
    );
  });
});
