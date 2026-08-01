import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { REDIRECT_SOURCE_SLUGS, REDIRECTS } from '../data/redirects.ts';
import { getPathRedirectUrl, validateRedirects } from './redirects.ts';

describe('grant redirects', () => {
  it('制度実体に合う新URLへ301で転送する', () => {
    const requiredRedirects = [
      { source: '/grant/kushiro-elderly-taxi/', destination: '/grant/kushiro-elderly-outing-bus/', statusCode: 301 },
      { source: '/grant/kagoshima-elderly-taxi/', destination: '/grant/kagoshima-keiro-pass/', statusCode: 301 },
      { source: '/grant/fukuyama-elderly-taxi/', destination: '/grant/fukuyama-elderly-support/', statusCode: 301 },
      { source: '/grant/fukaya-結婚新生活支援事業補助金lywed-life-support-subsidy-2026/', destination: '/grant/fukaya-newlywed-life-support-subsidy-2026/', statusCode: 301 },
      { source: '/grant/nara-city-childcare-subsidy/', destination: '/grant/nara-city-child-medical/', statusCode: 301 },
      { source: '/grant/yatsushiro-child-medical-aid/', destination: '/grant/yatsushiro-child-medical/', statusCode: 301 },
      { source: '/grant/tsubame-8187-2026-niigata/', destination: '/grant/tsubame-child-medical/', statusCode: 301 },
      { source: '/grant/takaoka-official-001-007-2026-toyama/', destination: '/grant/takaoka-child-medical/', statusCode: 301 },
      { source: '/grant/gifu-official-001-008-2026/', destination: '/grant/gifu-city-child-medical/', statusCode: 301 },
      { source: '/grant/tokushima-child-medical-aid/', destination: '/grant/tokushima-city-child-medical/', statusCode: 301 },
      { source: '/grant/kawasaki-childcare-subsidy/', destination: '/grant/kawasaki-child-medical/', statusCode: 301 },
      { source: '/grant/tokushima-official-001-002-2026/', destination: '/grant/tokushima-pregnant-support-benefit-2026/', statusCode: 301 },
      { source: '/grant/okinawa-official-002-049-2026/', destination: '/grant/okinawa-city-child-medical/', statusCode: 301 },
      { source: '/grant/kanazawa-official-001-001-2026-ishikawa/', destination: '/grant/kanazawa-child-medical/', statusCode: 301 },
      { source: '/grant/kasukabe-child-medical-aid/', destination: '/grant/kasukabe-child-medical/', statusCode: 301 },
      { source: '/grant/kasukabe-business-support-benefit-2026/', destination: '/grant/kasukabe-sme-support/', statusCode: 301 },
      { source: '/grant/tsuru-official-001-042-2026-yamanashi/', destination: '/grant/tsuru-child-medical-aid/', statusCode: 301 },
      { source: '/grant/miyazaki-official-002-048-2026/', destination: '/grant/kobayashi-child-medical-aid/', statusCode: 301 },
      { source: '/grant/nara-pref-scholarship-repayment-2026/', destination: '/grant/nara-company-scholarship-repayment/', statusCode: 301 },
      { source: '/grant/osaka-official-001-027-2026/', destination: '/grant/kishiwada-housing-reform/', statusCode: 301 },
      { source: '/grant/nagai-startup-business-subsidy-2026/', destination: '/grant/nagai-startup-support-2026/', statusCode: 301 },
      { source: '/grant/tsu-migration-bonus/', destination: '/grant/tsu-migration-support/', statusCode: 301 },
      { source: '/grant/kawaguchi-home-earthquake-diagnosis-subsidy-2026/', destination: '/grant/kawaguchi-seismic-diagnosis/', statusCode: 301 },
      { source: '/grant/ehime-official-001-065-2026/', destination: '/grant/imabari-infertility/', statusCode: 301 },
      { source: '/grant/okayama-official-001-031-2026/', destination: '/grant/kurashiki-birth-bonus/', statusCode: 301 },
      { source: '/grant/osaka-official-001-023-2026/', destination: '/grant/sakai-scholarship/', statusCode: 301 },
    ];

    for (const redirect of requiredRedirects) {
      assert.ok(REDIRECTS.some((item) =>
        item.source === redirect.source
        && item.destination === redirect.destination
        && item.statusCode === redirect.statusCode
      ));
    }
  });

  it('重複・自己参照・循環がない', () => {
    assert.deepEqual(validateRedirects(REDIRECTS), []);
  });

  it('旧URLのslugを掲載データから除外できる', () => {
    assert.ok(REDIRECT_SOURCE_SLUGS.has('kushiro-elderly-taxi'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('kagoshima-elderly-taxi'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('nara-city-childcare-subsidy'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('yatsushiro-child-medical-aid'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('tsubame-8187-2026-niigata'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('takaoka-official-001-007-2026-toyama'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('gifu-official-001-008-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('tokushima-child-medical-aid'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('kawasaki-childcare-subsidy'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('tokushima-official-001-002-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('okinawa-official-002-049-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('kanazawa-official-001-001-2026-ishikawa'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('kasukabe-child-medical-aid'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('kasukabe-business-support-benefit-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('tsuru-official-001-042-2026-yamanashi'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('miyazaki-official-002-048-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('nara-pref-scholarship-repayment-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('osaka-official-001-027-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('nagai-startup-business-subsidy-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('tsu-migration-bonus'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('kawaguchi-home-earthquake-diagnosis-subsidy-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('ehime-official-001-065-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('okayama-official-001-031-2026'));
    assert.ok(REDIRECT_SOURCE_SLUGS.has('osaka-official-001-023-2026'));
    assert.equal(REDIRECT_SOURCE_SLUGS.size, REDIRECTS.length);
  });

  it('配信層で旧URLを正規URLへ転送しクエリを保持する', () => {
    assert.equal(
      getPathRedirectUrl(
        new URL('https://shienseido-navi.jp/grant/nara-city-childcare-subsidy/?from=google'),
        REDIRECTS,
      ),
      'https://shienseido-navi.jp/grant/nara-city-child-medical/?from=google',
    );
  });

  it('日本語を含む旧URLも301転送する', () => {
    assert.equal(
      getPathRedirectUrl(
        new URL('https://shienseido-navi.jp/grant/fukaya-結婚新生活支援事業補助金lywed-life-support-subsidy-2026/?from=google'),
        REDIRECTS,
      ),
      'https://shienseido-navi.jp/grant/fukaya-newlywed-life-support-subsidy-2026/?from=google',
    );
  });

  it('転送対象外のURLは変更しない', () => {
    assert.equal(
      getPathRedirectUrl(new URL('https://shienseido-navi.jp/grant/nara-city-child-medical/'), REDIRECTS),
      null,
    );
  });
});
