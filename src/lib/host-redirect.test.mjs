import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getCanonicalRedirect, getRawPathAndSearch, shouldNoindexDeployment } from './host-redirect.ts';

describe('getCanonicalRedirect', () => {
  it('旧Vercelホストを同じパスとクエリの独自ドメインへ転送する', () => {
    assert.equal(
      getCanonicalRedirect('joseikin-navi-site.vercel.app', '/grant/%E5%8A%A9%E6%88%90%E9%87%91/', '?pref=%E6%9D%B1%E4%BA%AC%E9%83%BD'),
      'https://shienseido-navi.jp/grant/%E5%8A%A9%E6%88%90%E9%87%91/?pref=%E6%9D%B1%E4%BA%AC%E9%83%BD',
    );
  });

  it('wwwを正規ホストへ統一する', () => {
    assert.equal(getCanonicalRedirect('www.shienseido-navi.jp', '/grants/', '?q=%E5%8A%A9%E6%88%90%E9%87%91'), 'https://shienseido-navi.jp/grants/?q=%E5%8A%A9%E6%88%90%E9%87%91');
  });

  it('正規ホスト、プレビュー、localhost、未知Hostは転送しない', () => {
    for (const host of ['shienseido-navi.jp', 'joseikin-navi-site-abc.vercel.app', 'localhost', 'evil.example']) {
      assert.equal(getCanonicalRedirect(host, '/grants/', ''), null);
    }
  });

  it('ポート番号と末尾ドットを正規化して判定する', () => {
    assert.equal(getCanonicalRedirect('joseikin-navi-site.vercel.app.:443', '/guide/', ''), 'https://shienseido-navi.jp/guide/');
  });

  it('二重エンコードを追加で変換しない', () => {
    assert.equal(getCanonicalRedirect('joseikin-navi-site.vercel.app', '/grant/%252Fexample/', ''), 'https://shienseido-navi.jp/grant/%252Fexample/');
  });
});

describe('getRawPathAndSearch', () => {
  it('重複スラッシュ、二重エンコード、クエリ順序と重複キーをそのまま保つ', () => {
    assert.deepEqual(
      getRawPathAndSearch('https://example.com//grant/%252Fexample/?b=2&a=1&a=3&x=%2F'),
      { pathname: '//grant/%252Fexample/', search: '?b=2&a=1&a=3&x=%2F' },
    );
  });

  it('パスがない絶対URLはルートとして扱い、クエリを保つ', () => {
    assert.deepEqual(getRawPathAndSearch('https://example.com?q=%2F&q=2'), { pathname: '/', search: '?q=%2F&q=2' });
  });
});

describe('shouldNoindexDeployment', () => {
  it('previewとdevelopmentだけX-Robots-Tag対象にする', () => {
    assert.equal(shouldNoindexDeployment('production'), false);
    assert.equal(shouldNoindexDeployment('preview'), true);
    assert.equal(shouldNoindexDeployment('development'), true);
    assert.equal(shouldNoindexDeployment(undefined), false);
  });
});
