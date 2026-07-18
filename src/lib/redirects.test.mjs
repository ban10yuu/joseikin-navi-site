import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { REDIRECT_SOURCE_SLUGS, REDIRECTS } from '../data/redirects.ts';
import { validateRedirects } from './redirects.ts';

describe('grant redirects', () => {
  it('制度実体に合う新URLへ301で転送する', () => {
    assert.deepEqual(REDIRECTS, [
      { source: '/grant/kushiro-elderly-taxi/', destination: '/grant/kushiro-elderly-outing-bus/', statusCode: 301 },
      { source: '/grant/kagoshima-elderly-taxi/', destination: '/grant/kagoshima-keiro-pass/', statusCode: 301 },
    ]);
  });

  it('重複・自己参照・循環がない', () => {
    assert.deepEqual(validateRedirects(REDIRECTS), []);
  });

  it('旧URLのslugを掲載データから除外できる', () => {
    assert.deepEqual(
      [...REDIRECT_SOURCE_SLUGS],
      ['kushiro-elderly-taxi', 'kagoshima-elderly-taxi'],
    );
  });
});
