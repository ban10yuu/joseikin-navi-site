import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getGrantAffiliateIntents } from './affiliate-context.ts';

describe('getGrantAffiliateIntents', () => {
  it('不妊治療制度を不妊治療相談と治療費管理の文脈へ分類する', () => {
    const result = getGrantAffiliateIntents({
      title: '中之条町 不妊治療助成事業',
      description: '不妊治療に要した費用の一部を助成します。',
      tags: ['不妊治療', '医療'],
      purposes: ['medical'],
      affiliateIntents: [],
    });

    assert.deepEqual(result, ['fertilityCare', 'treatmentCostManagement']);
  });

  it('医療費控除を明記したページだけ税務支援の文脈へ分類する', () => {
    const result = getGrantAffiliateIntents({
      title: '医療費控除の申告支援',
      description: '医療費控除の手続きを支援します。',
      tags: ['税'],
      purposes: ['medical'],
      affiliateIntents: [],
    });

    assert.deepEqual(result, ['medicalExpenseTax']);
  });

  it('医療目的でなければキーワードだけで医療広告の意図を追加しない', () => {
    const result = getGrantAffiliateIntents({
      title: '不妊治療施設向け設備投資補助金',
      description: '医療法人の設備投資を支援します。',
      tags: ['設備'],
      purposes: ['businessGrowth'],
      affiliateIntents: ['accounting'],
    });

    assert.deepEqual(result, ['accounting']);
  });
});
