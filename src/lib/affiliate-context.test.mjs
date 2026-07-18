import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getGrantAffiliateIntents, shouldAllowDerivedAffiliateContext } from './affiliate-context.ts';

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

  it('住宅省エネ制度を太陽光・蓄電池相談の文脈へ分類する', () => {
    const result = getGrantAffiliateIntents({
      title: '住宅用太陽光発電・蓄電池導入補助金',
      description: '省エネ設備の導入費用を補助します。',
      tags: ['住宅', '再エネ'],
      purposes: ['housing', 'energySaving'],
      affiliateIntents: [],
    });

    assert.deepEqual(result, ['homeEnergyConsultation']);
  });

  it('事業者向けDX制度をシステム開発相談の文脈へ分類する', () => {
    const result = getGrantAffiliateIntents({
      title: '物流DX導入支援補助金',
      description: '業務システム開発による生産性向上を支援します。',
      tags: ['DX'],
      purposes: ['digitalTransformation'],
      affiliateIntents: [],
    });

    assert.deepEqual(result, ['systemDevelopment']);
  });

  it('住宅目的がなければ太陽光という語だけで住宅広告の意図を追加しない', () => {
    const result = getGrantAffiliateIntents({
      title: '太陽光関連企業の研究開発支援',
      description: '新技術の研究を支援します。',
      tags: ['太陽光'],
      purposes: ['research'],
      affiliateIntents: [],
    });

    assert.deepEqual(result, []);
  });
});

describe('shouldAllowDerivedAffiliateContext', () => {
  it('非センシティブ制度は関連intentを検出できた場合だけ表示候補にする', () => {
    assert.equal(shouldAllowDerivedAffiliateContext({
      purposes: ['housing', 'energySaving'], intents: ['homeEnergyConsultation'], monetizationAllowed: false,
    }), true);
    assert.equal(shouldAllowDerivedAffiliateContext({
      purposes: ['housing'], intents: [], monetizationAllowed: false,
    }), false);
  });

  it('医療などのセンシティブ目的は自動分類だけで収益化を許可しない', () => {
    assert.equal(shouldAllowDerivedAffiliateContext({
      purposes: ['medical'], intents: ['fertilityCare'], monetizationAllowed: false,
    }), false);
  });
});
