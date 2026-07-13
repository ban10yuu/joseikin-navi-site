import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  CATEGORY_VISUALS,
  ILLUSTRATION_VISUALS,
  getCategoryVisual,
} from './visual-assets.ts';

const projectPublicPath = (assetPath) => `public${assetPath}`;

describe('visual assets', () => {
  it('全カテゴリに異なるモチーフ画像を割り当てる', () => {
    const paths = Object.values(CATEGORY_VISUALS);
    assert.equal(paths.length, 8);
    assert.equal(new Set(paths).size, 8);
  });

  it('未定義カテゴリは生活支援モチーフへフォールバックする', () => {
    assert.equal(getCategoryVisual('unknown'), CATEGORY_VISUALS.living);
  });

  it('人物入り主要イラストをすべて公開ディレクトリに持つ', () => {
    const paths = Object.values(ILLUSTRATION_VISUALS);
    assert.equal(paths.length, 6);
    paths.forEach((assetPath) => assert.equal(existsSync(projectPublicPath(assetPath)), true, assetPath));
  });

  it('カテゴリ画像をすべて公開ディレクトリに持つ', () => {
    Object.values(CATEGORY_VISUALS).forEach((assetPath) => {
      assert.equal(existsSync(projectPublicPath(assetPath)), true, assetPath);
    });
  });
});
