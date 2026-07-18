import assert from 'node:assert/strict';
import { afterEach, describe, it } from 'node:test';
import proxyTesting from 'next/experimental/testing/server.js';
import { NextRequest } from 'next/server.js';
import { config, proxy } from '../proxy.ts';

const { getRedirectUrl, unstable_doesMiddlewareMatch } = proxyTesting;

const originalVercelEnv = process.env.VERCEL_ENV;

afterEach(() => {
  if (originalVercelEnv === undefined) delete process.env.VERCEL_ENV;
  else process.env.VERCEL_ENV = originalVercelEnv;
});

describe('proxy', () => {
  it('特殊なパスとクエリを変えずに旧ホストから308転送する', () => {
    process.env.VERCEL_ENV = 'production';
    const request = new NextRequest('https://joseikin-navi-site.vercel.app//grant/%252Fexample/?b=2&a=1&a=3&x=%2F', {
      headers: { host: 'joseikin-navi-site.vercel.app' },
    });
    const response = proxy(request);

    assert.equal(response.status, 308);
    assert.equal(getRedirectUrl(response), 'https://shienseido-navi.jp//grant/%252Fexample/?b=2&a=1&a=3&x=%2F');
  });

  it('previewでは転送レスポンスと通常レスポンスの両方をnoindexにする', () => {
    process.env.VERCEL_ENV = 'preview';
    const redirect = proxy(new NextRequest('https://joseikin-navi-site.vercel.app/grants/', {
      headers: { host: 'joseikin-navi-site.vercel.app' },
    }));
    const passThrough = proxy(new NextRequest('https://preview.example/grants/', {
      headers: { host: 'preview.example' },
    }));

    assert.equal(redirect.headers.get('x-robots-tag'), 'noindex, follow');
    assert.equal(passThrough.headers.get('x-robots-tag'), 'noindex, follow');
  });

  it('静的アセットをmatcher対象から除外する', () => {
    const nextConfig = { skipProxyUrlNormalize: true, trailingSlash: true };
    assert.equal(unstable_doesMiddlewareMatch({ config, nextConfig, url: '/grants/' }), true);
    assert.equal(unstable_doesMiddlewareMatch({ config, nextConfig, url: '/_next/static/chunk.js' }), false);
    assert.equal(unstable_doesMiddlewareMatch({ config, nextConfig, url: '/_next/image?url=%2Fhero.png' }), false);
  });
});
