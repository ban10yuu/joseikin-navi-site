import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getCanonicalHostRedirects, REDIRECT_HOSTS } from './host-redirect.ts';

describe('getCanonicalHostRedirects', () => {
  it('旧Vercelホストとwwwを配信層で正規ドメインへ転送する', () => {
    const redirects = getCanonicalHostRedirects();
    assert.equal(redirects.length, REDIRECT_HOSTS.length);
    assert.deepEqual(redirects.map((item) => item.has[0].value), REDIRECT_HOSTS);
    assert.ok(redirects.every((item) => (
      item.source === '/:path*' &&
      item.destination === 'https://shienseido-navi.jp/:path*' &&
      item.permanent
    )));
  });

  it('正規ドメイン自体は転送条件に含めない', () => {
    assert.equal(REDIRECT_HOSTS.includes('shienseido-navi.jp'), false);
  });
});
