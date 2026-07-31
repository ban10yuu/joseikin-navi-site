import assert from 'node:assert/strict';
import test from 'node:test';

import {
  containsBrowserBoilerplate,
  containsPublicNavigationBoilerplate,
  hasGenericMunicipalityTitle,
  hasOverlongAmountExtraction,
  hasTruncatedApplicationPeriod,
} from '../../scripts/lib/content-audit-rules.mjs';

test('自治体名だけの制度名を検出する', () => {
  assert.equal(hasGenericMunicipalityTitle({ title: '紀宝町 ', organization: '紀宝町' }), true);
});

test('自治体名と「公式支援制度」だけの制度名を検出する', () => {
  assert.equal(hasGenericMunicipalityTitle({ title: '太地町 公式支援制度', organization: '太地町' }), true);
  assert.equal(hasGenericMunicipalityTitle({ title: '太地町公式支援制度', organization: '太地町' }), true);
});

test('具体的な制度名は許可する', () => {
  assert.equal(hasGenericMunicipalityTitle({
    title: '太地町 出産祝金',
    organization: '太地町',
  }), false);
});

test('公式サイトから混入したブラウザ案内文を検出する', () => {
  assert.equal(containsBrowserBoilerplate('ご利用のブラウザーを最新版へ更新してください。'), true);
  assert.equal(containsBrowserBoilerplate('InternetExplorerの最新バージョンにアップグレードしてください。'), true);
  assert.equal(containsBrowserBoilerplate('ページの先頭です。 メニューを飛ばして本文へ'), true);
  assert.equal(containsBrowserBoilerplate('対象条件は公式ページでご確認ください。'), false);
});

test('公式サイトから混入した共通ナビゲーションを検出する', () => {
  assert.equal(containsPublicNavigationBoilerplate('本文へ移動 文字サイズ 小 標準 大'), true);
  assert.equal(containsPublicNavigationBoilerplate('このページに関するお問い合わせ先 福祉課'), true);
  assert.equal(containsPublicNavigationBoilerplate('補助内容は公式ページでご確認ください。'), false);
});

test('途中で切れた長文の申請期間を検出する', () => {
  const clipped = `${'申請手続きや対象条件の抽出文'.repeat(14)}に従う`;
  assert.equal(hasTruncatedApplicationPeriod(clipped), true);
  assert.equal(hasTruncatedApplicationPeriod('公式ページ記載の申請手続に従う'), false);
});

test('支援額へ混入した長い本文断片を検出する', () => {
  const clipped = `制度名に係る支援（${'対象者や必要書類の本文'.repeat(14)}）`;
  assert.equal(hasOverlongAmountExtraction(clipped), true);
  assert.equal(hasOverlongAmountExtraction('購入費の2分の1、上限2万円'), false);
  assert.equal(hasOverlongAmountExtraction('制度名に係る支援（購入費の2分の1、上限2万円）'), false);
});
