import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { formatDeadlineInTokyo, getDeadlineDateEnd, getDeadlineStatus } from './deadline.ts';

describe('getDeadlineStatus', () => {
  it('申請期間が欠けているデータは状態不明として扱う', () => {
    assert.equal(getDeadlineStatus({}), null);
  });

  it('締切当日は締切間近として扱う', () => {
    assert.equal(
      getDeadlineStatus(
        { deadlineDate: '2026-07-13', applicationPeriod: '2026年7月13日まで' },
        new Date('2026-07-13T12:00:00+09:00'),
      ),
      'ending-soon',
    );
  });

  it('締切日の翌日は期限切れとして扱う', () => {
    assert.equal(
      getDeadlineStatus(
        { deadlineDate: '2026-07-13', applicationPeriod: '2026年7月13日まで' },
        new Date('2026-07-14T00:00:00+09:00'),
      ),
      'ended',
    );
  });

  it('30日以内の締切を締切間近として扱う', () => {
    assert.equal(
      getDeadlineStatus(
        { deadlineDate: '2026-07-30', applicationPeriod: '2026年7月30日まで' },
        new Date('2026-07-01T00:00:00+09:00'),
      ),
      'ending-soon',
    );
  });

  it('通年・随時の記載を通年受付として扱う', () => {
    assert.equal(getDeadlineStatus({ applicationPeriod: '通年・随時受付' }), 'year-round');
  });

  it('予算・先着の記載を予算次第として扱う', () => {
    assert.equal(getDeadlineStatus({ applicationPeriod: '先着順。予算到達で終了' }), 'budget-limited');
  });

  it('締切時刻がある場合はその時刻をAsia/Tokyoで判定する', () => {
    const deadline = getDeadlineDateEnd('2026-07-13T17:00:00+09:00');
    assert.equal(deadline.toISOString(), '2026-07-13T08:00:00.000Z');
    assert.equal(formatDeadlineInTokyo('2026-07-13T17:00:00+09:00'), '2026年7月13日 17:00');
  });
});
