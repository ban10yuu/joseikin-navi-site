import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildWebsiteJsonLd } from './website-jsonld.ts';

describe('WebSite構造化データ', () => {
  it('正式名と検索される別名を同じサイト実体へ結び付ける', () => {
    const jsonLd = buildWebsiteJsonLd({
      siteName: '助成金ナビ',
      siteUrl: 'https://shienseido-navi.jp',
      operatorName: null,
    });

    assert.equal(jsonLd['@id'], 'https://shienseido-navi.jp/#website');
    assert.equal(jsonLd.name, '助成金ナビ');
    assert.deepEqual(jsonLd.alternateName, ['支援制度ナビ', 'Joseikin Navi']);
    assert.equal('publisher' in jsonLd, false);
    assert.equal(
      jsonLd.potentialAction.target.urlTemplate,
      'https://shienseido-navi.jp/grants/?q={search_term_string}',
    );
  });

  it('実在する運営者名が設定された場合だけpublisherを出力する', () => {
    const jsonLd = buildWebsiteJsonLd({
      siteName: '助成金ナビ',
      siteUrl: 'https://shienseido-navi.jp/',
      operatorName: '確認済み運営者',
    });

    assert.deepEqual(jsonLd.publisher, {
      '@type': 'Organization',
      name: '確認済み運営者',
      url: 'https://shienseido-navi.jp',
    });
  });
});
