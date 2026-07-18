import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { DESKTOP_NAVIGATION, FOOTER_NAVIGATION, MOBILE_NAVIGATION } from '../config/navigation.ts';

describe('shared navigation', () => {
  it('PCナビに指定された4導線を持つ', () => {
    assert.deepEqual(DESKTOP_NAVIGATION.map((item) => item.label), [
      '制度を探す', '地域から探す', '申請前ガイド', 'サイトについて',
    ]);
  });

  it('モバイルメニューに対象別・FAQ・問い合わせを含む', () => {
    for (const label of ['個人・家族向け', '事業者・団体向け', 'よくある質問', 'お問い合わせ']) {
      assert.equal(MOBILE_NAVIGATION.some((item) => item.label === label), true);
    }
  });

  it('フッターに信頼情報ページをまとめる', () => {
    for (const label of ['運営者情報', '編集方針', 'AI利用方針', '広告掲載方針', '免責事項', '訂正・削除依頼']) {
      assert.equal(FOOTER_NAVIGATION.some((item) => item.label === label), true);
    }
  });
});
