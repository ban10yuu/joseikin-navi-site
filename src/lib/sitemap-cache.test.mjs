import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';

describe('サイトマップのキャッシュ制御', () => {
  it('公開URLの変更を1時間以内に再検証する', async () => {
    const source = await readFile(
      new URL('../app/sitemap.ts', import.meta.url),
      'utf8'
    );

    assert.match(source, /export const revalidate = 3600;/u);
  });

  it('検索エンジンが使用しないpriorityとchangefreqを出力しない', async () => {
    const source = await readFile(
      new URL('../app/sitemap.ts', import.meta.url),
      'utf8'
    );

    assert.doesNotMatch(source, /\bpriority\s*:/u);
    assert.doesNotMatch(source, /\bchangeFrequency\s*:/u);
  });
});
