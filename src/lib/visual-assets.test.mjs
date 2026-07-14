import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  CATEGORY_VISUALS,
  HOME_HERO_MOTIFS,
  HOME_SEARCH_GUIDE_VISUALS,
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

  it('トップ冒頭で使う生成モチーフを重複なく公開ディレクトリに持つ', () => {
    const paths = HOME_HERO_MOTIFS.map(({ src }) => src);
    assert.equal(paths.length, 4);
    assert.equal(new Set(paths).size, 4);
    HOME_HERO_MOTIFS.forEach(({ label, src }) => {
      assert.ok(label.length > 0);
      assert.equal(existsSync(projectPublicPath(src)), true, src);
    });
  });

  it('検索手順の対象選択は人物・会社アイコン、残りは生成モチーフを使う', () => {
    assert.deepEqual(
      HOME_SEARCH_GUIDE_VISUALS.map(({ title }) => title),
      ['対象を選ぶ', '地域・目的を入力', '公式情報を確認'],
    );
    assert.deepEqual(
      HOME_SEARCH_GUIDE_VISUALS.map(({ visualType }) => visualType),
      ['audience', 'image', 'image'],
    );
    HOME_SEARCH_GUIDE_VISUALS.slice(1).forEach(({ src }) => {
      assert.ok(src.length > 0);
      assert.equal(existsSync(projectPublicPath(src)), true, src);
    });
  });
});
