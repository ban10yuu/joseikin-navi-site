import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildCollectionJsonLd } from './collection-jsonld.ts';

describe('collection JSON-LD', () => {
  it('掲載制度を順序つきItemListとして表現する', () => {
    const jsonLd = buildCollectionJsonLd({
      name: '東京都の支援制度',
      description: '東京都の制度一覧',
      url: 'https://shienseido-navi.jp/prefecture/%E6%9D%B1%E4%BA%AC%E9%83%BD/',
      siteName: '助成金ナビ',
      siteUrl: 'https://shienseido-navi.jp',
      items: [
        { name: '制度A', url: 'https://shienseido-navi.jp/grant/a/' },
        { name: '制度B', url: 'https://shienseido-navi.jp/grant/b/' },
      ],
    });

    assert.equal(jsonLd.mainEntity?.['@type'], 'ItemList');
    assert.equal(jsonLd.mainEntity?.numberOfItems, 2);
    assert.deepEqual(
      jsonLd.mainEntity?.itemListElement.map((item) => item.position),
      [1, 2]
    );
  });

  it('構造化データを24件に制限し、空の一覧を捏造しない', () => {
    const items = Array.from({ length: 30 }, (_, index) => ({
      name: `制度${index + 1}`,
      url: `https://shienseido-navi.jp/grant/${index + 1}/`,
    }));
    const limited = buildCollectionJsonLd({
      name: '制度一覧',
      description: '説明',
      url: 'https://shienseido-navi.jp/grants/',
      siteName: '助成金ナビ',
      siteUrl: 'https://shienseido-navi.jp',
      items,
    });
    const empty = buildCollectionJsonLd({
      name: '制度一覧',
      description: '説明',
      url: 'https://shienseido-navi.jp/grants/',
      siteName: '助成金ナビ',
      siteUrl: 'https://shienseido-navi.jp',
    });

    assert.equal(limited.mainEntity?.numberOfItems, 24);
    assert.equal('mainEntity' in empty, false);
  });
});
