import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { sourceCheckedDateFromNote } from './source-checked-date.ts';

describe('sourceCheckedDateFromNote', () => {
  it('公式ページを確認した日だけを抽出する', () => {
    assert.equal(
      sourceCheckedDateFromNote(
        '2026年7月12日に東松島市公式ページを確認。更新日2025年4月1日。',
        '2026-07-07',
      ),
      '2026-07-12',
    );
  });

  it('申請期限を確認日として扱わない', () => {
    assert.equal(
      sourceCheckedDateFromNote(
        '札幌市公式ページで、補助率と申請期限2027年1月29日を確認。',
        '2026-07-07',
      ),
      '2026-07-07',
    );
  });

  it('確認日ラベルを抽出できる', () => {
    assert.equal(
      sourceCheckedDateFromNote('確認日：2026年7月14日。', '2026-07-07'),
      '2026-07-14',
    );
  });
});
