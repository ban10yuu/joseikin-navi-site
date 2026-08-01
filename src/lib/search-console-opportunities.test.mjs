import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  SEARCH_CONSOLE_OPPORTUNITIES,
  getSearchConsoleOpportunitiesForMunicipality,
} from '../config/search-console-opportunities.ts';

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
    ];

    for (const slug of expectedSlugs) {
      const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) =>
        item.grantSlugs?.includes(slug));
      assert.ok(opportunity?.seoTitle, slug);
      assert.ok(opportunity?.metaDescription, slug);
      assert.ok(opportunity?.shortAnswer, slug);
    }
  });

  it('医療費相談クエリで表示される3自治体ページに検索意図に合う回答がある', () => {
    const expected = [
      ['komatsu-official-001-014-2026-ishikawa', /窓口負担(?:を)?無料/u],
      ['otaru-child-medical', /初診時一部負担金/u],
      ['kakamigahara-child-medical', /30日以内/u],
    ];

    for (const [slug, answerPattern] of expected) {
      const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) =>
        item.grantSlugs?.includes(slug));
      assert.ok(opportunity?.seoTitle, slug);
      assert.match(opportunity?.metaDescription ?? '', /医療費/u, slug);
      assert.match(opportunity?.shortAnswer ?? '', answerPattern, slug);
    }
  });

  it('追加で表示された医療費相談5自治体にも検索意図に合う回答がある', () => {
    const expected = [
      ['neyagawa-child-medical', /高校生世代/u],
      ['hiroshima-official-003-033-2026', /目的別/u],
      ['matsuyama-child-medical', /資格申請/u],
      ['maebashi-child-medical', /高校生世代/u],
      ['hikone-child-medical', /自己負担なし/u],
    ];

    for (const [slug, answerPattern] of expected) {
      const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) =>
        item.grantSlugs?.includes(slug));
      assert.ok(opportunity?.seoTitle, slug);
      assert.match(opportunity?.metaDescription ?? '', /医療費/u, slug);
      assert.match(opportunity?.shortAnswer ?? '', answerPattern, slug);
    }
  });

  it('表示が増えた医療費相談制度を該当する市区町村ページへ接続する', () => {
    const expected = [
      ['石川県', '小松市', 'komatsu-official-001-014-2026-ishikawa'],
      ['北海道', '小樽市', 'otaru-child-medical'],
      ['岐阜県', '各務原市', 'kakamigahara-child-medical'],
      ['大阪府', '寝屋川市', 'neyagawa-child-medical'],
      ['広島県', '廿日市市', 'hiroshima-official-003-033-2026'],
      ['愛媛県', '松山市', 'matsuyama-child-medical'],
      ['群馬県', '前橋市', 'maebashi-child-medical'],
      ['滋賀県', '彦根市', 'hikone-child-medical'],
    ];

    for (const [prefecture, municipality, slug] of expected) {
      const opportunities = getSearchConsoleOpportunitiesForMunicipality(prefecture, municipality);
      assert.equal(opportunities.some((item) => item.grantSlugs?.includes(slug)), true, `${prefecture}${municipality}`);
    }
  });

  it('釧路の補助金検索を釧路市の地域一覧へ案内する', () => {
    const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find(
      (item) => item.observedQuery === '釧路 補助金'
    );

    assert.equal(
      opportunity?.href,
      '/municipality/%E5%8C%97%E6%B5%B7%E9%81%93/%E9%87%A7%E8%B7%AF%E5%B8%82/'
    );
    assert.deepEqual(opportunity?.municipalities, ['釧路市']);
    assert.equal(opportunity?.grantSlugs, undefined);
    assert.equal(
      getSearchConsoleOpportunitiesForMunicipality('北海道', '釧路市')
        .some((item) => item.observedQuery === '釧路 補助金'),
      true
    );
  });

  it('次ページで表示された岩国市と唐津市の検索意図にも具体的に答える', () => {
    const expected = [
      ['iwakuni-child-medical-aid', /小学生・中学生/u],
      ['saga-official-001-014-2026', /上限50万円/u],
    ];

    for (const [slug, answerPattern] of expected) {
      const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) =>
        item.grantSlugs?.includes(slug));
      assert.ok(opportunity?.seoTitle, slug);
      assert.ok(opportunity?.metaDescription, slug);
      assert.match(opportunity?.shortAnswer ?? '', answerPattern, slug);
    }
  });

  it('越谷市の人間ドック補助検索に助成額と対象者で答える', () => {
    const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find(
      (item) => item.observedQuery === '越谷市 人間ドック 補助 金'
    );

    assert.deepEqual(opportunity?.grantSlugs, ['koshigaya-health-checkup-subsidy']);
    assert.equal(opportunity?.href, '/grant/koshigaya-health-checkup-subsidy/');
    assert.match(opportunity?.seoTitle ?? '', /上限1万円/u);
    assert.match(opportunity?.metaDescription ?? '', /35歳以上/u);
    assert.match(opportunity?.shortAnswer ?? '', /一年度に一回/u);
  });

  it('美濃市のリフォーム補助検索を市区町村ページと対象制度へ反映する', () => {
    const [opportunity] = getSearchConsoleOpportunitiesForMunicipality('岐阜県', '美濃市');

    assert.equal(opportunity?.observedQuery, '美濃市 補助金 リフォーム');
    assert.deepEqual(opportunity?.grantSlugs, ['gifu-official-002-013-2026']);
    assert.equal(opportunity?.href, '/grant/gifu-official-002-013-2026/');
    assert.match(opportunity?.seoTitle ?? '', /住宅取得・リフォーム/u);
    assert.match(opportunity?.shortAnswer ?? '', /基本額20万円/u);
  });

  it('名護市の教育費相談検索を市区町村ページと就学援助制度へ反映する', () => {
    const [opportunity] = getSearchConsoleOpportunitiesForMunicipality('沖縄県', '名護市');

    assert.equal(opportunity?.observedQuery, '名護市 教育費 相談');
    assert.deepEqual(opportunity?.grantSlugs, ['okinawa-official-002-016-2026']);
    assert.equal(opportunity?.href, '/grant/okinawa-official-002-016-2026/');
    assert.match(opportunity?.seoTitle ?? '', /就学援助制度/u);
    assert.match(opportunity?.metaDescription ?? '', /名護市の公式案内/u);
    assert.match(opportunity?.shortAnswer ?? '', /児童生徒と保護者/u);
  });

  it('宜野湾市の教育費相談検索を市区町村ページと就学援助制度へ反映する', () => {
    const [opportunity] = getSearchConsoleOpportunitiesForMunicipality('沖縄県', '宜野湾市');

    assert.equal(opportunity?.observedQuery, '宜野湾市 教育費 相談');
    assert.deepEqual(opportunity?.grantSlugs, ['ginowan-school-lunch-subsidy']);
    assert.equal(opportunity?.href, '/grant/ginowan-school-lunch-subsidy/');
    assert.match(opportunity?.seoTitle ?? '', /学校給食費/u);
    assert.match(opportunity?.metaDescription ?? '', /修学旅行費/u);
    assert.match(opportunity?.shortAnswer ?? '', /学用品費/u);
  });

  it('東根市の医療費相談検索を子育て支援医療給付制度へ反映する', () => {
    const [opportunity] = getSearchConsoleOpportunitiesForMunicipality('山形県', '東根市');

    assert.equal(opportunity?.observedQuery, '東根市 医療費 相談');
    assert.deepEqual(opportunity?.grantSlugs, ['higashine-child-medical-expense-subsidy-2026']);
    assert.equal(opportunity?.href, '/grant/higashine-child-medical-expense-subsidy-2026/');
    assert.match(opportunity?.seoTitle ?? '', /18歳年度末/u);
    assert.match(opportunity?.metaDescription ?? '', /窓口負担/u);
    assert.match(opportunity?.shortAnswer ?? '', /通院・入院/u);
  });

  it('阿賀野市の教育資金相談検索を返済が必要な奨学金制度へ反映する', () => {
    const [opportunity] = getSearchConsoleOpportunitiesForMunicipality('新潟県', '阿賀野市');

    assert.equal(opportunity?.observedQuery, '阿賀野市 教育資金 相談');
    assert.deepEqual(opportunity?.grantSlugs, ['agano-scholarship']);
    assert.equal(opportunity?.href, '/grant/agano-scholarship/');
    assert.match(opportunity?.seoTitle ?? '', /無利子貸付/u);
    assert.match(opportunity?.metaDescription ?? '', /返済/u);
    assert.match(opportunity?.shortAnswer ?? '', /貸付制度/u);
  });

  it('八代市の教育資金相談検索を返済が必要な奨学資金へ反映する', () => {
    const [opportunity] = getSearchConsoleOpportunitiesForMunicipality('熊本県', '八代市');

    assert.equal(opportunity?.observedQuery, '八代市 教育資金 相談');
    assert.deepEqual(opportunity?.grantSlugs, ['kumamoto-official-001-027-2026']);
    assert.match(opportunity?.seoTitle ?? '', /月額上限5万円/u);
    assert.match(opportunity?.metaDescription ?? '', /返済が必要/u);
    assert.match(opportunity?.shortAnswer ?? '', /給付型ではなく/u);
  });

  it('直方市の教育費相談検索を随時受付の就学援助へ反映する', () => {
    const [opportunity] = getSearchConsoleOpportunitiesForMunicipality('福岡県', '直方市');

    assert.equal(opportunity?.observedQuery, '直方市 教育費 相談');
    assert.deepEqual(opportunity?.grantSlugs, ['fukuoka-official-001-058-2026']);
    assert.match(opportunity?.seoTitle ?? '', /就学援助/u);
    assert.match(opportunity?.metaDescription ?? '', /随時受付/u);
    assert.match(opportunity?.shortAnswer ?? '', /学校給食費/u);
  });

  it('制度詳細へ案内する実測クエリは検索結果文と冒頭回答を持つ', () => {
    for (const opportunity of SEARCH_CONSOLE_OPPORTUNITIES) {
      if (!opportunity.grantSlugs?.length) continue;
      assert.ok(opportunity.seoTitle, opportunity.observedQuery);
      assert.ok(opportunity.metaDescription, opportunity.observedQuery);
      assert.ok(opportunity.shortAnswer, opportunity.observedQuery);
    }
  });

  it('渋谷区の住み替え検索を内容が一致する制度へ案内する', () => {
    const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find(
      (item) => item.observedQuery === '渋谷区 住み替え'
    );

    assert.deepEqual(opportunity?.grantSlugs, ['shibuya-housing-purchase']);
    assert.equal(opportunity?.href, '/grant/shibuya-housing-purchase/');
    assert.match(opportunity?.seoTitle ?? '', /住み替え家賃補助/u);
    assert.match(opportunity?.shortAnswer ?? '', /月額上限1万円/u);
    assert.equal(
      SEARCH_CONSOLE_OPPORTUNITIES.some((item) =>
        item.grantSlugs?.includes('shibuya-housing-subsidy')),
      false
    );
  });

  it('検索結果向けの説明文は160文字以内に収まる', () => {
    for (const opportunity of SEARCH_CONSOLE_OPPORTUNITIES) {
      if (!opportunity.metaDescription) continue;
      assert.ok(opportunity.metaDescription.length <= 160, opportunity.observedQuery);
    }
  });

  it('制度詳細への導線と優先slugを同じURLに保つ', () => {
    const prioritySlugs = [];

    for (const opportunity of SEARCH_CONSOLE_OPPORTUNITIES) {
      if (!opportunity.grantSlugs?.length) continue;
      assert.equal(opportunity.grantSlugs.length, 1, opportunity.observedQuery);
      assert.equal(
        opportunity.href,
        `/grant/${opportunity.grantSlugs[0]}/`,
        opportunity.observedQuery
      );
      prioritySlugs.push(opportunity.grantSlugs[0]);
    }

    assert.equal(new Set(prioritySlugs).size, prioritySlugs.length);
  });
});
