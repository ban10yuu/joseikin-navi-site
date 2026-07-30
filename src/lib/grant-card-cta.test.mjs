import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getGrantCardCtaLabel } from './grant-card-cta.ts';

describe('grant card CTA', () => {
  it('受付中は対象条件と期限の確認を促す', () => {
    assert.equal(getGrantCardCtaLabel('open'), '対象条件と申請期限を確認');
    assert.equal(getGrantCardCtaLabel('closingSoon'), '対象条件と申請期限を確認');
  });

  it('終了後は申請を促さず次回募集の確認へ案内する', () => {
    assert.equal(getGrantCardCtaLabel('closed'), '次回募集・後継制度を確認');
  });

  it('受付開始前と不明状態を断定しない', () => {
    assert.equal(getGrantCardCtaLabel('scheduled'), '募集開始時期と対象条件を確認');
    assert.equal(getGrantCardCtaLabel('unknown'), '制度の詳細を確認');
    assert.equal(getGrantCardCtaLabel('suspended'), '制度の詳細を確認');
  });
});
