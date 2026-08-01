import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { describe, it } from 'node:test';

describe('ブランド画像', () => {
  it('装飾用faviconが検索結果へサイト名の一部を重複出力しない', async () => {
    const svg = await readFile(new URL('../../public/favicon.svg', import.meta.url), 'utf8');

    assert.doesNotMatch(svg, /<text\b/i);
    assert.doesNotMatch(svg, /aria-label=/i);
    assert.doesNotMatch(svg, /role=["']img["']/i);
  });

  it('メタデータが参照するfaviconとAppleアイコンが実在する', async () => {
    const publicDirectory = new URL('../../public/', import.meta.url);
    const [favicon, appleIcon] = await Promise.all([
      stat(new URL('favicon.ico', publicDirectory)),
      stat(new URL('apple-icon.png', publicDirectory)),
    ]);

    assert.ok(favicon.size > 0);
    assert.ok(appleIcon.size > 0);
  });
});
