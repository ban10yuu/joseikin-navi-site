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

  it('販路開拓・ホームページ・賃上げ制度を対応する事業サービスへ分類する', () => {
    assert.deepEqual(getGrantAffiliateIntents({
      title: '中小企業販路開拓支援補助金', description: 'ECサイトとオンライン販売の導入を支援します。', tags: ['販路開拓'],
      purposes: ['businessGrowth'], affiliateIntents: [],
    }), ['ecommerce']);
    assert.deepEqual(getGrantAffiliateIntents({
      title: '中小企業ホームページ作成支援', description: '事業用サイトの開設費を補助します。', tags: ['Web'],
      purposes: ['digitalTransformation'], affiliateIntents: [],
    }), ['cloudStorage']);
    assert.deepEqual(getGrantAffiliateIntents({
      title: '事業場内最低賃金引上げ支援', description: '給与計算と賃金引上げを支援します。', tags: ['賃上げ'],
      purposes: ['wageIncrease'], affiliateIntents: [],
    }), ['payroll']);
  });

  it('雇用・教育・起業制度を対応する承認済み広告の文脈へ分類する', () => {
    assert.deepEqual(getGrantAffiliateIntents({
      title: '就職支援制度', description: '求職者の就職を支援します。', tags: ['就職'],
      purposes: ['employment'], primaryPurpose: 'employment', affiliateIntents: [],
    }), ['careerConsultation']);
    assert.deepEqual(getGrantAffiliateIntents({
      title: '子どもの学習支援', description: '家庭の学びを支援します。', tags: ['教育'],
      purposes: ['childcare', 'education'], affiliateIntents: [],
    }), ['childrensEducation']);
    assert.deepEqual(getGrantAffiliateIntents({
      title: '創業支援補助金', description: '新規創業を支援します。', tags: ['起業'],
      purposes: ['startup'], affiliateIntents: [],
    }), ['businessPlanning', 'companyFormation']);
  });

  it('住宅の副カテゴリemploymentで転職広告を出さない', () => {
    assert.deepEqual(getGrantAffiliateIntents({
      title: '住宅リフォーム補助金', description: '自宅の改修工事を支援します。', tags: ['住宅'],
      purposes: ['housing', 'employment'], primaryPurpose: 'housing', affiliateIntents: [],
    }), []);
  });

  it('手当と医療費助成を絵本広告の文脈にしない', () => {
    assert.deepEqual(getGrantAffiliateIntents({
      title: '特別児童扶養手当', description: '対象家庭へ手当を支給します。', tags: ['児童', '手当'],
      purposes: ['childcare', 'livingSupport'], primaryPurpose: 'childcare', affiliateIntents: [],
    }), []);
    assert.deepEqual(getGrantAffiliateIntents({
      title: '子どもの読書活動支援', description: '絵本を通じた学びを支援します。', tags: ['読書'],
      purposes: ['childcare', 'education'], primaryPurpose: 'childcare', affiliateIntents: [],
    }), ['childrensEducation']);
  });

  it('成人教育や地域イベントには子ども向け・店舗向け広告意図を付けない', () => {
    assert.deepEqual(getGrantAffiliateIntents({
      title: '大学生向け奨学金', description: '大学等の修学費用を支援します。', tags: ['高等教育'],
      purposes: ['education'], affiliateIntents: [],
    }), ['financialPlanning']);
    assert.deepEqual(getGrantAffiliateIntents({
      title: '地域イベント開催支援', description: '地域交流イベントの開催費を補助します。', tags: ['交流'],
      purposes: ['regionalRevitalization'], affiliateIntents: [],
    }), []);
  });

  it('リユース査定と出店分析は本文が一致する制度だけに付ける', () => {
    assert.deepEqual(getGrantAffiliateIntents({
      title: '中古品リユース事業DX補助金', description: '買取査定システムの導入を支援します。', tags: ['古物'],
      purposes: ['digitalTransformation'], affiliateIntents: [],
    }), ['reuseValuation']);
    assert.deepEqual(getGrantAffiliateIntents({
      title: '空き店舗出店支援補助金', description: '店舗開業時の立地検討と改修を支援します。', tags: ['商圏'],
      purposes: ['startup', 'regionalRevitalization'], affiliateIntents: [],
    }), ['businessPlanning', 'companyFormation', 'tradeAreaAnalysis']);
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

  it('非センシティブと判定済みなら粗い副目的だけで候補を消さない', () => {
    assert.equal(shouldAllowDerivedAffiliateContext({
      purposes: ['businessGrowth', 'livingSupport'], intents: ['ecommerce'], monetizationAllowed: false,
      sensitive: false,
    }), true);
  });
});
