import assert from 'node:assert/strict';
import test from 'node:test';

import {
  containsBrowserBoilerplate,
  hasGenericMunicipalityTitle,
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
  assert.equal(containsBrowserBoilerplate('対象条件は公式ページでご確認ください。'), false);
});
