import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  OPENNEXT_HTML_CACHE_HEADER,
  SITE_HTML_CACHE_HEADER,
  patchOpenNextHtmlCacheHeader,
} from './opennext-html-cache.mjs';

describe('OpenNextのHTMLキャッシュ制御', () => {
  it('1年固定のHTMLキャッシュを1時間へ短縮する', () => {
    const source = [
      `before "${OPENNEXT_HTML_CACHE_HEADER}" after`,
      '          const responseHeaders = new Headers(headers);',
      '          for (const cookie of cookies) {}',
    ].join('\n');
    const patched = patchOpenNextHtmlCacheHeader(source);

    assert.equal(patched.includes(OPENNEXT_HTML_CACHE_HEADER), false);
    assert.equal(patched.includes(SITE_HTML_CACHE_HEADER), true);
    assert.match(patched, /Content-Type/u);
    assert.match(patched, /request\.headers\.get\("Accept"\)/u);
    assert.match(patched, /responseHeaders\.set\("Cache-Control"/u);
  });

  it('アダプター更新で対象が消えた場合はデプロイを止める', () => {
    assert.throws(
      () => patchOpenNextHtmlCacheHeader('no cache header'),
      /検出: 0件/u
    );
  });

  it('想定外に複数箇所へ増えた場合もデプロイを止める', () => {
    assert.throws(
      () =>
        patchOpenNextHtmlCacheHeader(
          `${OPENNEXT_HTML_CACHE_HEADER}\n${OPENNEXT_HTML_CACHE_HEADER}\n          const responseHeaders = new Headers(headers);\n`
        ),
      /検出: 2件/u
    );
  });

  it('圧縮済みbundleでも最終HTMLレスポンスを1時間へ制限する', () => {
    const source = `${OPENNEXT_HTML_CACHE_HEADER};responseHeaders=new Headers(headers);for(let cookie of cookies)`;
    const patched = patchOpenNextHtmlCacheHeader(source);

    assert.match(
      patched,
      /Content-Type"\)\?\.includes\("text\/html"\).*request\.headers\.get\("Accept"\).*s-maxage=3600/u
    );
  });
});
