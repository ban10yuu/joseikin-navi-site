import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  formatVerifiedDate,
  normalizeOfficialUrls,
  sanitizePublicGrantText,
  splitEligibilityText,
} from './grant-presentation.ts';

describe('splitEligibilityText', () => {
  it('元の文言を変えず、区切り文字ごとに最大4項目へ分ける', () => {
    assert.deepEqual(
      splitEligibilityText('市内に住所があること。18歳未満の子どもを養育していること；所得要件を満たすこと、期限内に申請すること。追加条件'),
      [
        '市内に住所があること',
        '18歳未満の子どもを養育していること',
        '所得要件を満たすこと',
        '期限内に申請すること。追加条件',
      ],
    );
  });

  it('構造化できない短文は一項目のまま返す', () => {
    assert.deepEqual(splitEligibilityText('市内在住の子育て世帯'), ['市内在住の子育て世帯']);
  });

  it('空白だけの文言は空配列を返す', () => {
    assert.deepEqual(splitEligibilityText('  '), []);
  });

  it('対象条件が未登録でも空配列を返す', () => {
    assert.deepEqual(splitEligibilityText(undefined), []);
  });
});

describe('sanitizePublicGrantText', () => {
  it('内部監査の文言を公開本文から除去する', () => {
    assert.equal(
      sanitizePublicGrantText('市が対象者へ2万円を支給します。生成データの5万円表記を補正しました。'),
      '市が対象者へ2万円を支給します。',
    );
  });

  it('内部監査文言を含むHTML要素を丸ごと除去する', () => {
    assert.equal(
      sanitizePublicGrantText('<p>対象者は市内在住者です。</p><p>公式URLはHTTP 200を確認。</p>'),
      '<p>対象者は市内在住者です。</p>',
    );
  });
});

describe('normalizeOfficialUrls', () => {
  it('空値と重複を除き、公式URLを元の順番で返す', () => {
    assert.deepEqual(
      normalizeOfficialUrls('https://example.go.jp/grant', [
        ' https://example.go.jp/guide ',
        'https://example.go.jp/grant',
        '',
        'https://example.go.jp/guide',
      ]),
      ['https://example.go.jp/grant', 'https://example.go.jp/guide'],
    );
  });

  it('HTTP以外のURLとプレースホルダーURLを除く', () => {
    assert.deepEqual(
      normalizeOfficialUrls('javascript:alert(1)', [
        'data:text/html,test',
        'https://example.com/grant',
        'https://www.city.example.jp/grant',
      ]),
      ['https://www.city.example.jp/grant'],
    );
  });
});

describe('formatVerifiedDate', () => {
  it('確認日を意味が分かる表記にする', () => {
    assert.equal(formatVerifiedDate('2026-07-13'), '自動照合日：2026-07-13');
  });

  it('確認日がない場合は未登録と明示する', () => {
    assert.equal(formatVerifiedDate(undefined), '自動照合日：未登録');
  });
});
