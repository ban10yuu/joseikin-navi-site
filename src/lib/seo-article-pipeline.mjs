const INTENT_PATTERNS = [
  ['comparison', /(?:比較|違い|どちら|どっち|\bvs\b)/i],
  ['howTo', /(?:申請方法|手続き|やり方|流れ|方法)/],
  ['definition', /(?:とは|意味|定義)/],
  ['buyingGuide', /(?:選び方|おすすめ|購入|導入)/],
  ['troubleshooting', /(?:できない|エラー|不備|落ちた|却下|困った)/],
  ['list', /(?:一覧|まとめ|リスト)/],
  ['eligibility', /(?:対象者|対象条件|条件|対象になる|該当)/],
  ['deadline', /(?:締切|期限|いつまで|申請期間)/],
  ['amount', /(?:金額|いくら|上限|補助率|支給額)/],
];

const PASS_ONE_RULES = [
  {
    code: 'UNSUPPORTED_CERTAINTY',
    pattern: /必ず受給|必ず受け取|申請すれば(?:受け取|もら|支給)|ほぼ確実|絶対(?:に)?(?:採択|受給|支給)/g,
    message: '公式根拠のない受給・採択の断定があります。',
  },
  {
    code: 'HYPE_LANGUAGE',
    pattern: /画期的|革新的|最強|圧倒的|知らないと損|完全攻略|見逃せない/g,
    message: '情報整理に不要な誇張表現があります。',
  },
  {
    code: 'CORPORATE_LANGUAGE',
    pattern: /価値を提供|ソリューション|エンパワー|シナジー|可能性を最大化|変革を加速/g,
    message: '具体性の低い企業語・抽象語があります。',
  },
  {
    code: 'FAKE_HOOK',
    pattern: /ご存じですか[？?]|ご存知でしょうか[？?]|悩んでいませんか[？?]|こんなお悩みはありませんか/g,
    message: '本文の答えに不要な作為的な問いかけがあります。',
  },
  {
    code: 'EMPTY_MARKETING',
    pattern: /ぜひ活用してください|今すぐチェック|おすすめの制度です|申請のチャンス|要チェックです/g,
    message: '根拠や判断材料を伴わない宣伝文があります。',
  },
  {
    code: 'UNSUPPORTED_CLAIM',
    pattern: /採択率\d|満足度\d|人気No\.?1|専門家監修済み|編集部確認済み/g,
    message: '実測・確認記録が必要な主張があります。',
  },
];

const REQUIRED_STRUCTURE_FIELDS = [
  'title',
  'metaDescription',
  'shortAnswer',
  'aiAnswer',
  'sections',
  'faq',
  'internalLinks',
  'cta',
];

function cleanText(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function articleText(article) {
  return [
    article?.title,
    article?.metaDescription,
    article?.shortAnswer,
    article?.aiAnswer,
    ...(article?.sections ?? []).flatMap((section) => [section.heading, section.content]),
    ...(article?.faq ?? []).flatMap((entry) => [entry.question, entry.answer]),
  ].map(cleanText).filter(Boolean).join('\n');
}

function splitSentences(text) {
  return cleanText(text)
    .split(/(?<=[。！？!?])|\n+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 4);
}

function isValidDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value ?? ''))
    && Number.isFinite(Date.parse(`${value}T00:00:00+09:00`));
}

function isHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

function normalizeWeights(weights = {}) {
  const defaults = {
    factualAccuracy: 30,
    humanReadability: 20,
    intentMatch: 15,
    structure: 15,
    sourceCoverage: 15,
    metadata: 5,
  };
  const merged = { ...defaults, ...weights };
  const total = Object.values(merged).reduce((sum, value) => sum + Number(value || 0), 0);
  if (total <= 0) return defaults;
  return Object.fromEntries(Object.entries(merged).map(([key, value]) => [key, Number(value || 0) * 100 / total]));
}

function roundScore(value) {
  return Math.round(value * 10) / 10;
}

export function selectNextKeyword(backlog = []) {
  const candidates = backlog
    .filter((item) => item?.status === 'pending' && cleanText(item.keyword))
    .sort((a, b) => Number(b.priority ?? 0) - Number(a.priority ?? 0));

  if (candidates.length === 0) {
    return { status: 'stopped', code: 'EMPTY_KEYWORD_BACKLOG', keyword: null };
  }

  return { status: 'selected', code: null, keyword: candidates[0] };
}

export function classifySearchIntent(keyword = '') {
  const normalized = cleanText(keyword);
  return INTENT_PATTERNS.find(([, pattern]) => pattern.test(normalized))?.[0] ?? 'informational';
}

export function validateTruthPacket(packet, article) {
  const errors = [];
  const sources = Array.isArray(packet?.sources) ? packet.sources : [];
  const facts = Array.isArray(packet?.facts) ? packet.facts : [];
  const claims = Array.isArray(article?.claims) ? article.claims : [];
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const factById = new Map(facts.map((fact) => [fact.id, fact]));

  if (sources.length === 0) {
    errors.push({ code: 'OFFICIAL_SOURCE_REQUIRED', message: '公式情報の確認先がありません。' });
  }

  for (const source of sources) {
    if (!source.id || source.sourceType !== 'official') {
      errors.push({ code: 'SOURCE_NOT_OFFICIAL', sourceId: source.id ?? null, message: '公式情報として識別された出典だけを使用できます。' });
    }
    if (!isHttpUrl(source.url)) {
      errors.push({ code: 'INVALID_SOURCE_URL', sourceId: source.id ?? null, message: '出典URLが有効なHTTP(S) URLではありません。' });
    }
    if (!isValidDate(source.sourceCheckedAt)) {
      errors.push({ code: 'SOURCE_CHECK_DATE_REQUIRED', sourceId: source.id ?? null, message: '公式情報の確認日が必要です。' });
    }
    if (source.institutionMatch !== true || source.programNameMatch !== true) {
      errors.push({ code: 'SOURCE_IDENTITY_MISMATCH', sourceId: source.id ?? null, message: '実施機関または制度名と公式ページの一致を確認できません。' });
    }
    if (!['automated', 'human', 'mixed'].includes(source.verificationMethod)) {
      errors.push({ code: 'VERIFICATION_METHOD_REQUIRED', sourceId: source.id ?? null, message: '自動照合・人手確認の区別が必要です。' });
    }
    if (['human', 'mixed'].includes(source.verificationMethod) && !isValidDate(source.humanReviewedAt)) {
      errors.push({ code: 'HUMAN_REVIEW_DATE_REQUIRED', sourceId: source.id ?? null, message: '人手確認を表示するには確認日の記録が必要です。' });
    }
  }

  for (const fact of facts) {
    if (!fact.id || !fact.field || !['exists', 'doesNotExist'].includes(fact.status)) {
      errors.push({ code: 'INVALID_TRUTH_FACT', factId: fact.id ?? null, message: '事実は存在・不存在のどちらかを明示する必要があります。' });
    }
    if (!Array.isArray(fact.sourceIds) || fact.sourceIds.length === 0) {
      errors.push({ code: 'FACT_SOURCE_REQUIRED', factId: fact.id ?? null, message: '事実に公式出典が紐付いていません。' });
    } else if (fact.sourceIds.some((sourceId) => !sourceById.has(sourceId))) {
      errors.push({ code: 'FACT_SOURCE_NOT_FOUND', factId: fact.id ?? null, message: '事実が参照する出典を確認できません。' });
    }
  }

  if (!facts.some((fact) => fact.field === 'programExistence' && fact.status === 'exists')) {
    errors.push({ code: 'PROGRAM_EXISTENCE_NOT_CONFIRMED', message: '制度そのものの存在を公式情報で確認できません。' });
  }

  if (claims.length === 0) {
    errors.push({ code: 'ARTICLE_CLAIMS_REQUIRED', message: '記事内の制度固有の主張が事実IDに紐付いていません。' });
  }

  let verifiedClaims = 0;
  for (const claim of claims) {
    const fact = factById.get(claim.factId);
    if (!fact) {
      errors.push({ code: 'CLAIM_FACT_NOT_FOUND', factId: claim.factId ?? null, message: '記事の主張に対応する事実がありません。' });
      continue;
    }
    if (claim.assertion !== fact.status) {
      errors.push({ code: 'FACT_ASSERTION_MISMATCH', factId: claim.factId, message: '公式資料上の存在・不存在と記事の主張が一致しません。' });
      continue;
    }
    verifiedClaims += 1;
  }

  const officialUrls = new Set(sources.map((source) => source.url).filter(isHttpUrl));
  if (article?.cta?.type !== 'officialSource' || !officialUrls.has(article?.cta?.href)) {
    errors.push({ code: 'OFFICIAL_CTA_MISMATCH', message: '公式CTAが検証済みの公式URLに接続されていません。' });
  }

  return {
    valid: errors.length === 0,
    errors,
    verifiedClaims,
    claimCoverage: claims.length === 0 ? 0 : verifiedClaims / claims.length,
    verificationMethod: sources.some((source) => source.verificationMethod === 'mixed')
      ? 'mixed'
      : sources.every((source) => source.verificationMethod === 'human') && sources.length > 0
        ? 'human'
        : sources.some((source) => source.verificationMethod === 'human')
          ? 'mixed'
          : sources.some((source) => source.verificationMethod === 'automated')
            ? 'automated'
            : 'unknown',
    humanReviewedAt: sources
      .filter((source) => ['human', 'mixed'].includes(source.verificationMethod) && isValidDate(source.humanReviewedAt))
      .map((source) => source.humanReviewedAt)
      .sort()
      .at(-1) ?? null,
  };
}

export function inspectArticleStructure(article) {
  const missing = [];

  for (const field of REQUIRED_STRUCTURE_FIELDS) {
    const value = article?.[field];
    if (field === 'sections' && (!Array.isArray(value) || value.length < 2)) missing.push(field);
    else if (field === 'faq' && (!Array.isArray(value) || value.length < 1)) missing.push(field);
    else if (field === 'internalLinks' && (!Array.isArray(value) || value.length < 2)) missing.push(field);
    else if (field === 'cta' && (!value || value.type !== 'officialSource' || !cleanText(value.label) || !isHttpUrl(value.href))) missing.push(field);
    else if (!['sections', 'faq', 'internalLinks', 'cta'].includes(field) && !cleanText(value)) missing.push(field);
  }

  const invalid = [];
  if (cleanText(article?.title).length > 60) invalid.push('titleTooLong');
  if (cleanText(article?.metaDescription).length > 160) invalid.push('metaDescriptionTooLong');
  if ((article?.sections ?? []).some((section) => !cleanText(section.heading) || !cleanText(section.content))) invalid.push('emptySection');
  if ((article?.faq ?? []).some((entry) => !cleanText(entry.question) || !cleanText(entry.answer))) invalid.push('emptyFaq');
  if ((article?.internalLinks ?? []).some((link) => !cleanText(link.label) || !String(link.href ?? '').startsWith('/'))) invalid.push('invalidInternalLink');

  return {
    valid: missing.length === 0 && invalid.length === 0,
    missing: [...new Set(missing)],
    invalid: [...new Set(invalid)],
    requiredCount: REQUIRED_STRUCTURE_FIELDS.length,
    presentCount: REQUIRED_STRUCTURE_FIELDS.length - new Set(missing).size,
  };
}

export function runAntiSlopPasses(article) {
  const fullText = articleText(article);
  const pass1 = [];
  const pass2 = [];

  for (const rule of PASS_ONE_RULES) {
    const matches = [...fullText.matchAll(rule.pattern)];
    if (matches.length > 0) {
      pass1.push({ code: rule.code, count: matches.length, message: rule.message });
    }
  }

  const paragraphs = [
    article?.shortAnswer,
    article?.aiAnswer,
    ...(article?.sections ?? []).map((section) => section.content),
    ...(article?.faq ?? []).map((entry) => entry.answer),
  ].map(cleanText).filter(Boolean);

  const longParagraphs = paragraphs.filter((paragraph) => paragraph.length > 320);
  if (longParagraphs.length > 0) {
    pass2.push({ code: 'LONG_PARAGRAPH', count: longParagraphs.length, message: '320文字を超える段落があります。' });
  }

  const sentences = splitSentences(fullText);
  const openings = new Map();
  const endings = new Map();
  for (const sentence of sentences) {
    const opening = sentence.replace(/^[「『（(\s]+/, '').slice(0, 6);
    if (opening.length >= 3) openings.set(opening, (openings.get(opening) ?? 0) + 1);
    const ending = sentence.replace(/[。！？!?」』）)\s]+$/g, '').slice(-3);
    if (ending.length >= 2) endings.set(ending, (endings.get(ending) ?? 0) + 1);
  }

  const repeatedOpenings = [...openings.entries()].filter(([, count]) => count >= 3);
  if (repeatedOpenings.length > 0) {
    pass2.push({ code: 'REPETITIVE_SENTENCE_OPENING', count: repeatedOpenings.reduce((sum, [, count]) => sum + count, 0), examples: repeatedOpenings.slice(0, 3).map(([value]) => value), message: '同じ書き出しが繰り返されています。' });
  }

  const repeatedEndings = [...endings.entries()].filter(([, count]) => count >= 4);
  if (repeatedEndings.length > 0) {
    pass2.push({ code: 'REPETITIVE_SENTENCE_ENDING', count: repeatedEndings.reduce((sum, [, count]) => sum + count, 0), examples: repeatedEndings.slice(0, 3).map(([value]) => value), message: '同じ語尾が続きすぎています。' });
  }

  const transitionMatches = fullText.match(/(?:また|さらに|そして|なお)[、,]/g) ?? [];
  if (transitionMatches.length >= 4) {
    pass2.push({ code: 'WEAK_TRANSITIONS', count: transitionMatches.length, message: '同じ接続語に頼った段落運びがあります。' });
  }

  const symbolMatches = fullText.match(/—|――|ーーー|\.\.\.|…{2,}/g) ?? [];
  if (symbolMatches.length > 0) {
    pass2.push({ code: 'UNNATURAL_SYMBOLS', count: symbolMatches.length, message: '不自然なダッシュや省略記号があります。' });
  }

  return { valid: pass1.length === 0 && pass2.length === 0, pass1, pass2 };
}

function intentMatchRatio(intent, article, keyword) {
  const text = articleText(article);
  const intentPatterns = {
    comparison: /比較|違い|一方|対して/,
    howTo: /申請|手続き|順番|流れ|確認/,
    definition: /とは|意味|制度|指します/,
    buyingGuide: /選び方|比較|確認ポイント/,
    troubleshooting: /できない|不備|確認|問い合わせ/,
    list: /一覧|制度|探す/,
    eligibility: /対象|条件|該当/,
    deadline: /締切|期限|申請期間/,
    amount: /金額|上限|補助率|支援額/,
    informational: /制度|公式|確認/,
  };
  const intentHit = intentPatterns[intent]?.test(text) ? 0.7 : 0;
  const meaningfulTokens = cleanText(keyword?.keyword).split(/[\s　]+/).filter((token) => token.length >= 2);
  const keywordHit = meaningfulTokens.length === 0
    ? 0
    : meaningfulTokens.filter((token) => text.includes(token)).length / meaningfulTokens.length * 0.3;
  return Math.min(1, intentHit + keywordHit);
}

export function scoreArticle({ keyword, intent, truthPacket, article, config = {} }) {
  const weights = normalizeWeights(config.qualityWeights);
  const truth = validateTruthPacket(truthPacket, article);
  const structure = inspectArticleStructure(article);
  const antiSlop = runAntiSlopPasses(article);
  const passOnePenalty = antiSlop.pass1.reduce((sum, issue) => sum + Math.min(0.3, issue.count * 0.12), 0);
  const passTwoPenalty = antiSlop.pass2.reduce((sum, issue) => sum + Math.min(0.18, issue.count * 0.04), 0);
  const readabilityRatio = Math.max(0, 1 - passOnePenalty - passTwoPenalty);
  const structureRatio = Math.max(0, (structure.presentCount - structure.invalid.length) / structure.requiredCount);
  const metadataRatio = cleanText(article?.title).length > 0
    && cleanText(article?.title).length <= 60
    && cleanText(article?.metaDescription).length > 0
    && cleanText(article?.metaDescription).length <= 160
    && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(article?.slug ?? ''))
    ? 1
    : 0;
  const ratios = {
    factualAccuracy: truth.valid ? 1 : 0,
    humanReadability: readabilityRatio,
    intentMatch: intentMatchRatio(intent, article, keyword),
    structure: structureRatio,
    sourceCoverage: truth.claimCoverage,
    metadata: metadataRatio,
  };
  const dimensions = Object.fromEntries(Object.entries(weights).map(([name, weight]) => [name, {
    weight: roundScore(weight),
    ratio: roundScore(ratios[name] ?? 0),
    score: roundScore(weight * (ratios[name] ?? 0)),
  }]));
  const total = roundScore(Object.values(dimensions).reduce((sum, dimension) => sum + dimension.score, 0));
  const minimumScore = Number(config.minimumScore ?? 85);
  const revisionReasons = [];

  if (!truth.valid) revisionReasons.push(...truth.errors.map((error) => error.code));
  if (!structure.valid) revisionReasons.push(...structure.missing.map((field) => `MISSING_${field.toUpperCase()}`), ...structure.invalid.map((field) => `INVALID_${field.toUpperCase()}`));
  revisionReasons.push(...antiSlop.pass1.map((issue) => issue.code), ...antiSlop.pass2.map((issue) => issue.code));
  if (dimensions.intentMatch.ratio < 0.7) revisionReasons.push('SEARCH_INTENT_MISMATCH');
  if (metadataRatio === 0) revisionReasons.push('INVALID_METADATA');
  if (total < minimumScore && revisionReasons.length === 0) revisionReasons.push('QUALITY_SCORE_BELOW_THRESHOLD');

  return {
    passed: total >= minimumScore && truth.valid && structure.valid && antiSlop.valid,
    total,
    minimumScore,
    dimensions,
    revisionReasons: [...new Set(revisionReasons)],
    truth,
    structure,
    antiSlop,
  };
}

function lockedDraftOutput({ keyword, intent, article, quality, status }) {
  const reviewReady = status === 'reviewReady';
  return {
    keywordId: keyword?.id ?? null,
    keyword: keyword?.keyword ?? null,
    intent,
    article: article ?? null,
    contentStatus: 'draft',
    indexStatus: 'noindex',
    noindexReason: reviewReady ? '人手承認前の記事候補' : '品質ゲート未合格',
    verificationMethod: quality?.truth?.verificationMethod ?? 'unknown',
    humanReviewedAt: quality?.truth?.humanReviewedAt ?? null,
    requiresHumanApproval: true,
    quality: quality ?? null,
    delivery: {
      image: 'deferred',
      build: 'notRun',
      deploy: 'blocked',
      notification: {
        type: reviewReady ? 'reviewRequired' : 'revisionRequired',
        message: reviewReady
          ? '品質ゲートを通過しました。画像作成・ビルド・公開の前に人手確認が必要です。'
          : '品質ゲートを通過していません。構成工程へ戻して修正してください。',
      },
    },
  };
}

export function runSeoArticlePipeline({ backlog = [], truthPackets = [], articleDrafts = [], config = {} }) {
  const selection = selectNextKeyword(backlog);
  if (selection.status === 'stopped') {
    return {
      status: 'stopped',
      code: selection.code,
      nextStage: null,
      output: null,
      notification: 'キーワードバックログが空です。近い話題を自動生成せず停止しました。',
    };
  }

  const keyword = selection.keyword;
  const intent = classifySearchIntent(keyword.keyword);
  const truthPacket = truthPackets.find((packet) => packet.keywordId === keyword.id);
  const article = articleDrafts
    .filter((draft) => draft.keywordId === keyword.id)
    .sort((a, b) => Number(b.revisionCycle ?? 0) - Number(a.revisionCycle ?? 0))[0];

  if (!truthPacket || !article) {
    const status = !truthPacket ? 'blockedMissingTruth' : 'blockedMissingDraft';
    const output = lockedDraftOutput({ keyword, intent, article, quality: null, status });
    output.noindexReason = !truthPacket ? '公式根拠パケットなし' : '記事ドラフトなし';
    return {
      status,
      code: !truthPacket ? 'TRUTH_PACKET_REQUIRED' : 'ARTICLE_DRAFT_REQUIRED',
      nextStage: !truthPacket ? 'truthValidation' : 'structure',
      output,
    };
  }

  const quality = scoreArticle({ keyword, intent, truthPacket, article, config });
  const revisionLimitReached = !quality.passed
    && Number(article.revisionCycle ?? 0) >= Number(config.maxRevisionCycles ?? 3);
  const status = quality.passed
    ? 'reviewReady'
    : revisionLimitReached
      ? 'blockedRevisionLimit'
      : 'needsRevision';
  const output = lockedDraftOutput({ keyword, intent, article, quality, status });
  if (revisionLimitReached) {
    output.noindexReason = '自動修正回数の上限に到達';
    output.delivery.notification = {
      type: 'humanInterventionRequired',
      message: '自動修正回数の上限に達しました。公開せず、人手で根拠・構成・文章を確認してください。',
    };
  }
  return {
    status,
    code: quality.passed ? null : revisionLimitReached ? 'REVISION_LIMIT_REACHED' : 'QUALITY_GATE_FAILED',
    nextStage: quality.passed || revisionLimitReached ? 'humanReview' : 'structure',
    output,
  };
}
