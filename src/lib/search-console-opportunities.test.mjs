import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { SEARCH_CONSOLE_OPPORTUNITIES } from '../config/search-console-opportunities.ts';

describe('Search Console実測クエリの詳細ページ改善', () => {
  it('安中市民商品券に実測値を反映した検索結果文と冒頭回答がある', () => {
    const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) =>
      item.grantSlugs?.includes('annaka-citizen-voucher-2026'));

    assert.equal(opportunity?.seoTitle, '安中市民商品券｜1人4,000円・利用期限');
    assert.match(opportunity?.metaDescription ?? '', /2027年1月31日/u);
    assert.match(opportunity?.shortAnswer ?? '', /2026年6月1日時点/u);
  });

  it('福山市おでかけ乗車券に対象年齢と交付額が明記されている', () => {
    const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) =>
      item.grantSlugs?.includes('fukuyama-elderly-support'));

    assert.equal(opportunity?.seoTitle, '福山市 おでかけ乗車券｜75歳以上・年7,000円分');
    assert.match(opportunity?.metaDescription ?? '', /バス・タクシー共通券/u);
    assert.match(opportunity?.shortAnswer ?? '', /満75歳以上/u);
  });

  it('JASSO奨学金に給付型と貸与型の違いが明記されている', () => {
    const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) =>
      item.grantSlugs?.includes('jasso-shougakukin'));

    assert.equal(opportunity?.seoTitle, 'JASSO奨学金｜給付型・第一種・第二種の違い');
    assert.match(opportunity?.metaDescription ?? '', /返済不要の給付型/u);
    assert.match(opportunity?.shortAnswer ?? '', /学校を通じて/u);
  });

  it('表示回数上位の地域制度に具体的な検索結果文がある', () => {
    const expectedSlugs = [
      'nara-city-child-medical',
      'yokkaichi-cancer-screening',
      'nishihara-kanamaru-voucher-2026',
      'natori-child-medical',
      'nasu-regional-coupon-2026',
    ];

    for (const slug of expectedSlugs) {
      const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) =>
        item.grantSlugs?.includes(slug));
      assert.ok(opportunity?.seoTitle, slug);
      assert.ok(opportunity?.metaDescription, slug);
      assert.ok(opportunity?.shortAnswer, slug);
    }
  });

  it('検索結果向けの説明文は160文字以内に収まる', () => {
    for (const opportunity of SEARCH_CONSOLE_OPPORTUNITIES) {
      if (!opportunity.metaDescription) continue;
      assert.ok(opportunity.metaDescription.length <= 160, opportunity.observedQuery);
    }
  });
});
