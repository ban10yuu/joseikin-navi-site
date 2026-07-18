import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  classifySearchIntent,
  inspectArticleStructure,
  runAntiSlopPasses,
  runSeoArticlePipeline,
  scoreArticle,
  selectNextKeyword,
  validateTruthPacket,
} from './seo-article-pipeline.mjs';

const keyword = {
  id: 'kw-example-support',
  keyword: '例示市 創業補助金 申請方法',
  status: 'pending',
  targetAudience: 'business',
  priority: 80,
};

const truthPacket = {
  keywordId: keyword.id,
  providerName: '例示市',
  sources: [
    {
      id: 'official-guideline',
      sourceType: 'official',
      title: '例示市創業支援補助金 募集要項',
      url: 'https://www.city.example.lg.jp/business/startup/guideline.pdf',
      sourceCheckedAt: '2026-07-19',
      verificationMethod: 'automated',
      institutionMatch: true,
      programNameMatch: true,
    },
  ],
  facts: [
    {
      id: 'fact-program-exists',
      field: 'programExistence',
      status: 'exists',
      value: '例示市創業支援補助金',
      sourceIds: ['official-guideline'],
    },
    {
      id: 'fact-amount',
      field: 'amount',
      status: 'exists',
      value: '補助対象経費の2分の1、上限50万円',
      sourceIds: ['official-guideline'],
    },
    {
      id: 'fact-required-documents',
      field: 'requiredDocuments',
      status: 'doesNotExist',
      value: null,
      sourceIds: ['official-guideline'],
    },
  ],
};

const article = {
  keywordId: keyword.id,
  slug: 'example-startup-application-guide',
  title: '例示市の創業補助金｜申請方法と公式確認先',
  metaDescription: '例示市の創業支援補助金について、申請前に確認したい手順、補助額、公式の募集要項を整理します。',
  shortAnswer: '申請前に、例示市の募集要項で対象者、対象経費、受付期間を確認します。',
  aiAnswer: '例示市の創業支援補助金は、公式募集要項で制度の存在と上限額を確認できます。申請方法や提出書類は募集時期によって変わる可能性があるため、当サイトの説明だけで判断せず、申請前に公式ページを確認してください。',
  sections: [
    {
      heading: '申請前に確認する順番',
      content: '最初に対象者と対象経費を読み、受付期間と提出先を確認します。確認できない項目は推測せず、担当窓口へ問い合わせます。',
    },
    {
      heading: '支援内容',
      content: '公式募集要項では、補助対象経費の2分の1、上限50万円と案内されています。',
    },
  ],
  faq: [
    {
      question: '必要書類は何ですか？',
      answer: '確認した公式資料では必要書類を特定できません。最新の募集要項または担当窓口で確認してください。',
    },
  ],
  internalLinks: [
    { label: '創業に関する支援制度を探す', href: '/grants/?purpose=startup' },
    { label: '申請前ガイドを読む', href: '/guide/' },
  ],
  cta: {
    type: 'officialSource',
    label: '公式ページで募集要項を確認',
    href: 'https://www.city.example.lg.jp/business/startup/guideline.pdf',
  },
  claims: [
    { factId: 'fact-program-exists', assertion: 'exists' },
    { factId: 'fact-amount', assertion: 'exists' },
    { factId: 'fact-required-documents', assertion: 'doesNotExist' },
  ],
};

const config = {
  minimumScore: 85,
  maxRevisionCycles: 3,
  qualityWeights: {
    factualAccuracy: 30,
    humanReadability: 20,
    intentMatch: 15,
    structure: 15,
    sourceCoverage: 15,
    metadata: 5,
  },
};

describe('selectNextKeyword', () => {
  it('空のバックログでは近い話題を捏造せず停止する', () => {
    assert.deepEqual(selectNextKeyword([]), {
      status: 'stopped',
      code: 'EMPTY_KEYWORD_BACKLOG',
      keyword: null,
    });
  });

  it('pendingだけを優先度順で選ぶ', () => {
    const selected = selectNextKeyword([
      { ...keyword, id: 'done', status: 'completed', priority: 100 },
      { ...keyword, id: 'lower', keyword: '低優先度', priority: 20 },
      keyword,
    ]);

    assert.equal(selected.status, 'selected');
    assert.equal(selected.keyword.id, keyword.id);
  });
});

describe('classifySearchIntent', () => {
  it('行政支援の申請方法をhowToとして分類する', () => {
    assert.equal(classifySearchIntent(keyword.keyword), 'howTo');
  });

  it('比較・対象条件・締切の意図を区別する', () => {
    assert.equal(classifySearchIntent('補助金と助成金の違い'), 'comparison');
    assert.equal(classifySearchIntent('住宅補助 対象条件'), 'eligibility');
    assert.equal(classifySearchIntent('子育て給付金 締切'), 'deadline');
  });
});

describe('validateTruthPacket', () => {
  it('制度の存在と公式資料にない項目を別の事実として検証する', () => {
    const result = validateTruthPacket(truthPacket, article);

    assert.equal(result.valid, true);
    assert.deepEqual(result.errors, []);
    assert.equal(result.verifiedClaims, 3);
  });

  it('公式資料で存在しない項目を存在すると書いた場合は拒否する', () => {
    const result = validateTruthPacket(truthPacket, {
      ...article,
      claims: [{ factId: 'fact-required-documents', assertion: 'exists' }],
    });

    assert.equal(result.valid, false);
    assert.ok(result.errors.some((error) => error.code === 'FACT_ASSERTION_MISMATCH'));
  });

  it('自動照合を人手確認済みに昇格させない', () => {
    const result = validateTruthPacket({
      ...truthPacket,
      sources: [{
        ...truthPacket.sources[0],
        verificationMethod: 'human',
        humanReviewedAt: null,
      }],
    }, article);

    assert.equal(result.valid, false);
    assert.ok(result.errors.some((error) => error.code === 'HUMAN_REVIEW_DATE_REQUIRED'));
  });
});

describe('article quality gates', () => {
  it('検索用構造の必須要素を検査する', () => {
    assert.equal(inspectArticleStructure(article).valid, true);

    const result = inspectArticleStructure({ ...article, faq: [], cta: null });
    assert.equal(result.valid, false);
    assert.ok(result.missing.includes('faq'));
    assert.ok(result.missing.includes('cta'));
  });

  it('断定的な誇張と機械的な段落を2段階で検出する', () => {
    const result = runAntiSlopPasses({
      ...article,
      shortAnswer: '申請すれば必ず受給できる、画期的な制度です。',
      sections: [{
        heading: '説明',
        content: `この制度は便利です。${'この制度は申請者を支援します。'.repeat(25)}`,
      }],
    });

    assert.ok(result.pass1.some((issue) => issue.code === 'UNSUPPORTED_CERTAINTY'));
    assert.ok(result.pass1.some((issue) => issue.code === 'HYPE_LANGUAGE'));
    assert.ok(result.pass2.some((issue) => issue.code === 'LONG_PARAGRAPH'));
    assert.ok(result.pass2.some((issue) => issue.code === 'REPETITIVE_SENTENCE_OPENING'));
  });

  it('重み付き品質スコアで修正理由を返す', () => {
    const lowQuality = scoreArticle({
      keyword,
      intent: 'howTo',
      truthPacket,
      article: {
        ...article,
        aiAnswer: '',
        faq: [],
        claims: [{ factId: 'fact-required-documents', assertion: 'exists' }],
      },
      config,
    });

    assert.ok(lowQuality.total < config.minimumScore);
    assert.ok(lowQuality.revisionReasons.length > 0);
  });
});

describe('runSeoArticlePipeline', () => {
  it('合格しても自動公開せずdraft・noindex・人手承認待ちにする', () => {
    const result = runSeoArticlePipeline({
      backlog: [keyword],
      truthPackets: [truthPacket],
      articleDrafts: [article],
      config,
    });

    assert.equal(result.status, 'reviewReady');
    assert.equal(result.output.contentStatus, 'draft');
    assert.equal(result.output.indexStatus, 'noindex');
    assert.equal(result.output.requiresHumanApproval, true);
    assert.equal(result.output.delivery.image, 'deferred');
    assert.equal(result.output.delivery.build, 'notRun');
    assert.equal(result.output.delivery.deploy, 'blocked');
    assert.equal(result.output.delivery.notification.type, 'reviewRequired');
  });

  it('基準未満の記事を構成工程へ戻して公開経路を閉じる', () => {
    const result = runSeoArticlePipeline({
      backlog: [keyword],
      truthPackets: [truthPacket],
      articleDrafts: [{ ...article, shortAnswer: '', faq: [] }],
      config,
    });

    assert.equal(result.status, 'needsRevision');
    assert.equal(result.nextStage, 'structure');
    assert.equal(result.output.indexStatus, 'noindex');
    assert.equal(result.output.delivery.deploy, 'blocked');
  });

  it('自動修正回数の上限に達したら人手確認へ止める', () => {
    const result = runSeoArticlePipeline({
      backlog: [keyword],
      truthPackets: [truthPacket],
      articleDrafts: [{ ...article, revisionCycle: 3, shortAnswer: '', faq: [] }],
      config,
    });

    assert.equal(result.status, 'blockedRevisionLimit');
    assert.equal(result.code, 'REVISION_LIMIT_REACHED');
    assert.equal(result.nextStage, 'humanReview');
    assert.equal(result.output.indexStatus, 'noindex');
  });

  it('同じキーワードの修正版が複数ある場合は最新の版を採点する', () => {
    const result = runSeoArticlePipeline({
      backlog: [keyword],
      truthPackets: [truthPacket],
      articleDrafts: [
        { ...article, revisionCycle: 0, shortAnswer: '', faq: [] },
        { ...article, revisionCycle: 1 },
      ],
      config,
    });

    assert.equal(result.status, 'reviewReady');
    assert.equal(result.output.article.revisionCycle, 1);
  });
});
