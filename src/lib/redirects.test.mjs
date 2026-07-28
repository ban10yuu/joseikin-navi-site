import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { REDIRECT_SOURCE_SLUGS, REDIRECTS } from '../data/redirects.ts';
import { validateRedirects } from './redirects.ts';

describe('grant redirects', () => {
  it('制度実体に合う新URLへ301で転送する', () => {
    assert.deepEqual(REDIRECTS, [
      { source: '/grant/kushiro-elderly-taxi/', destination: '/grant/kushiro-elderly-outing-bus/', statusCode: 301 },
      { source: '/grant/kagoshima-elderly-taxi/', destination: '/grant/kagoshima-keiro-pass/', statusCode: 301 },
      { source: '/grant/fukuyama-elderly-taxi/', destination: '/grant/fukuyama-elderly-support/', statusCode: 301 },
      { source: '/grant/fukaya-結婚新生活支援事業補助金lywed-life-support-subsidy-2026/', destination: '/grant/fukaya-newlywed-life-support-subsidy-2026/', statusCode: 301 },
      { source: '/grant/nara-city-childcare-subsidy/', destination: '/grant/nara-city-child-medical/', statusCode: 301 },
    ]);
  });

  it('重複・自己参照・循環がない', () => {
    assert.deepEqual(validateRedirects(REDIRECTS), []);
  });

  it('旧URLのslugを掲載データから除外できる', () => {
    assert.deepEqual(
      [...REDIRECT_SOURCE_SLUGS],
      ['kushiro-elderly-taxi', 'kagoshima-elderly-taxi', 'fukuyama-elderly-taxi', 'fukaya-結婚新生活支援事業補助金lywed-life-support-subsidy-2026', 'nara-city-childcare-subsidy'],
    );
  });
});
