import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getStaticListingRewriteUrl } from './static-listing-route.ts';

describe('static grants listing route', () => {
  it('検索条件のない制度一覧だけを静的ページへ内部転送する', () => {
    assert.equal(
      getStaticListingRewriteUrl(new URL('https://shienseido-navi.jp/grants/')),
      'https://shienseido-navi.jp/grants-index/'
    );
  });

  it('検索条件がある制度一覧は動的検索へ渡す', () => {
    assert.equal(
      getStaticListingRewriteUrl(new URL('https://shienseido-navi.jp/grants/?q=子育て')),
      null
    );
  });
});
