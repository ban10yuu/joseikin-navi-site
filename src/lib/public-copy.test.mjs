import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { findPublicCopyViolations } from '../../scripts/check-public-copy.mjs';

describe('findPublicCopyViolations', () => {
  it('公開画面の禁止表現をファイル名と行番号つきで検出する', () => {
    const result = findPublicCopyViolations([
      {
        path: 'src/app/example/page.tsx',
        content: '<p>助成金診断クイズを試す</p>\n<p>公式情報を確認する</p>',
      },
    ]);

    assert.deepEqual(result, [
      {
        file: 'src/app/example/page.tsx',
        line: 1,
        phrase: '助成金診断クイズ',
        text: '<p>助成金診断クイズを試す</p>',
      },
      {
        file: 'src/app/example/page.tsx',
        line: 1,
        phrase: '診断クイズを試す',
        text: '<p>助成金診断クイズを試す</p>',
      },
    ]);
  });

  it('制度固有の耐震無料診断は旧機能の禁止表現として扱わない', () => {
    const result = findPublicCopyViolations([
      {
        path: 'src/app/example/page.tsx',
        content: '<p>自治体が実施する住宅の無料診断です。</p>',
      },
    ]);

    assert.deepEqual(result, []);
  });

  it('内部計測サービス名を公開ページへ表示しない', () => {
    const result = findPublicCopyViolations([
      {
        path: 'src/app/example/page.tsx',
        content: '<p>Search Consoleで表示があるテーマ</p>',
      },
    ]);

    assert.equal(result.length, 1);
    assert.equal(result[0].phrase, 'Search Consoleで表示がある');
  });
});
