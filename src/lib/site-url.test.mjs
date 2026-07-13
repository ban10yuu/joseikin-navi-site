import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  getSiteUrl,
  isIndexableDeployment,
  toSiteUrl,
} from './site-url.ts';

describe('getSiteUrl', () => {
  it('環境変数のURLから末尾スラッシュを除く', () => {
    assert.equal(
      getSiteUrl({ NEXT_PUBLIC_SITE_URL: 'https://example.jp///' }),
      'https://example.jp'
    );
  });

  it('未設定時は現在のVercel URLを安全なフォールバックにする', () => {
    assert.equal(getSiteUrl({}), 'https://joseikin-navi-site.vercel.app');
  });

  it('HTTP以外の値は公開URLとして採用しない', () => {
    assert.equal(
      getSiteUrl({ NEXT_PUBLIC_SITE_URL: 'javascript:alert(1)' }),
      'https://joseikin-navi-site.vercel.app'
    );
  });
});

describe('toSiteUrl', () => {
  it('相対パスをcanonical用の絶対URLへ変換する', () => {
    assert.equal(
      toSiteUrl('/grant/example/', { NEXT_PUBLIC_SITE_URL: 'https://example.jp/' }),
      'https://example.jp/grant/example/'
    );
  });
});

describe('isIndexableDeployment', () => {
  it('Vercel本番だけをindex可能にする', () => {
    assert.equal(isIndexableDeployment({ VERCEL_ENV: 'production' }), true);
    assert.equal(isIndexableDeployment({ VERCEL_ENV: 'preview' }), false);
    assert.equal(isIndexableDeployment({ VERCEL_ENV: 'development' }), false);
  });

  it('Vercel外では明示的にpreviewでない限りindex可能にする', () => {
    assert.equal(isIndexableDeployment({}), true);
  });
});
