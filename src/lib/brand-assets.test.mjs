import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { describe, it } from 'node:test';

describe('ブランド画像', () => {
  it('装飾用faviconが検索結果へサイト名の一部を重複出力しない', async () => {
    const svg = await readFile(new URL('../../public/brand-mark.svg', import.meta.url), 'utf8');

    assert.doesNotMatch(svg, /<text\b/i);
    assert.doesNotMatch(svg, /aria-label=/i);
    assert.doesNotMatch(svg, /role=["']img["']/i);
  });

  it('メタデータが参照するfaviconとAppleアイコンが実在する', async () => {
    const appDirectory = new URL('../app/', import.meta.url);
    const [favicon, appleIcon] = await Promise.all([
      stat(new URL('favicon.ico', appDirectory)),
      stat(new URL('apple-icon.png', appDirectory)),
    ]);

    assert.ok(favicon.size > 0);
    assert.ok(appleIcon.size > 0);
  });
});
