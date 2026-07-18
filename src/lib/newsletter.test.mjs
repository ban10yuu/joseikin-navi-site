import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildNewsletterPayload, isNewsletterEnabled } from './newsletter.ts';

describe('newsletter configuration', () => {
  it('HTTPSの配信先が設定された場合だけフォームを有効にする', () => {
    assert.equal(isNewsletterEnabled(undefined), false);
    assert.equal(isNewsletterEnabled('http://example.com/form'), false);
    assert.equal(isNewsletterEnabled('https://forms.example.jp/newsletter'), true);
  });
});

describe('buildNewsletterPayload', () => {
  it('必要最小限の情報と同意記録だけを送る', () => {
    const payload = buildNewsletterPayload({
      email: 'reader@example.jp', prefecture: '東京都', source: 'subscribe-page',
      consentAt: '2026-07-13T10:00:00.000Z',
    });
    assert.deepEqual(Object.keys(payload).sort(), [
      'consentAt', 'consentVersion', 'email', 'prefecture', 'source',
    ]);
    assert.equal('income' in payload, false);
    assert.equal('occupation' in payload, false);
  });
});
