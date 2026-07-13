import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getEffectiveGrantStatus, getOfficialCtaLabel, isRepayableSupport } from './grant-status.ts';

describe('getEffectiveGrantStatus', () => {
  const now = new Date('2026-07-01T00:00:00+09:00');

  it('期限を過ぎた制度は明示状態にかかわらず終了にする', () => {
    assert.equal(getEffectiveGrantStatus({ status: 'open', deadlineDate: '2026-06-30' }, now), 'closed');
  });

  it('公式に受付中と確認できる場合だけ締切間近にする', () => {
    assert.equal(getEffectiveGrantStatus({ status: 'open', deadlineDate: '2026-07-20' }, now), 'closingSoon');
    assert.equal(getEffectiveGrantStatus({ status: 'unknown', deadlineDate: '2026-07-20' }, now), 'unknown');
  });

  it('一時停止や開始前を締切間近へ上書きしない', () => {
    assert.equal(getEffectiveGrantStatus({ status: 'suspended', deadlineDate: '2026-07-20' }, now), 'suspended');
    assert.equal(getEffectiveGrantStatus({ status: 'scheduled', deadlineDate: '2026-07-20' }, now), 'scheduled');
  });
});

describe('official CTA and loan notice', () => {
  it('終了制度は次回募集・後継制度の確認を促す', () => {
    assert.equal(getOfficialCtaLabel('closed'), '次回募集・後継制度を公式サイトで確認');
  });

  it('貸付と奨学金貸付だけを返済が必要な制度として扱う', () => {
    assert.equal(isRepayableSupport('loan'), true);
    assert.equal(isRepayableSupport('scholarshipLoan'), true);
    assert.equal(isRepayableSupport('subsidy'), false);
  });
});
