import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  CRAWLER_RESOURCE_CDN_CACHE_CONTROL,
  DYNAMIC_HTML_CDN_CACHE_CONTROL,
} from '../config/cache-policy.ts';

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

  it('robotsとsitemapを1時間再利用し障害時も配信を継続する', () => {
    assert.match(
      CRAWLER_RESOURCE_CDN_CACHE_CONTROL,
      /(?:^|,\s*)s-maxage=3600(?:,|$)/u
    );
    assert.match(
      CRAWLER_RESOURCE_CDN_CACHE_CONTROL,
      /(?:^|,\s*)stale-while-revalidate=86400(?:,|$)/u
    );
  });
});
