import fs from 'node:fs';
import path from 'node:path';
import { AFFILIATE_OFFERS } from '../src/config/affiliate-offers.ts';
import { AFFILIATE_ISSUED_HTML } from '../src/config/affiliate-issued-html.ts';

const root = process.cwd();
const appRoot = path.join(root, '.next', 'server', 'app');
if (!fs.existsSync(appRoot)) throw new Error('.next/server/app がありません。先に npm run build を実行してください。');

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : entry.name.endsWith('.html') ? [absolute] : [];
  });
}

function routeFor(file) {
  const relative = path.relative(appRoot, file).replaceAll(path.sep, '/').replace(/\.html$/, '');
  return relative === 'index' ? '/' : `/${relative}/`;
}

function decodeHtml(value = '') {
  return value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>');
}

function normalizeRoute(value) {
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    // 不正なエンコードは後段で未生成リンクとして検出する。
  }
  const compact = decoded.replace(/\/+/g, '/');
  return compact.endsWith('/') || path.extname(compact) ? compact : `${compact}/`;
}

const files = walk(appRoot);
const pages = files.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  return {
    file,
    route: routeFor(file),
    html,
    title: decodeHtml(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? ''),
    description: decodeHtml(html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ?? ''),
    noindex: /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),
  };
});
const routes = new Set(pages.map((page) => normalizeRoute(page.route)));
const issues = [];
const affiliateOfferById = new Map(AFFILIATE_OFFERS.map((offer) => [offer.id, offer]));
const add = (severity, code, route, message) => issues.push({ severity, code, route, message });
const dynamicPrefixes = ['/grants/', '/grant/', '/tag/'];
const assetsPrefixes = ['/_next/', '/images/', '/favicon', '/api/'];

for (const page of pages) {
  const isFrameworkArtifact = page.route === '/_global-error/';
  if (!isFrameworkArtifact && !page.title) add('critical', 'MISSING_TITLE', page.route, 'titleがありません。');
  if (!isFrameworkArtifact && !page.description) add('warning', 'MISSING_DESCRIPTION', page.route, 'descriptionがありません。');
  if (/助成金診断クイズ|全国2,500件以上|必ず受給できる|条件を満たせばほぼ確実|生成データ|HTTP 200|Last-Modified|補正理由/.test(page.html)) add('critical', 'FORBIDDEN_PUBLIC_COPY', page.route, '生成HTMLに禁止表現があります。');
  for (const match of page.html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    if (match[1].startsWith('//')) continue;
    const href = match[1].replace(/\/+/g, '/');
    if (assetsPrefixes.some((prefix) => href.startsWith(prefix))) continue;
    const normalized = normalizeRoute(href);
    if (!routes.has(normalized) && !dynamicPrefixes.some((prefix) => normalized.startsWith(prefix))) add('critical', 'BROKEN_INTERNAL_LINK', page.route, `リンク先が生成されていません：${normalized}`);
  }
  for (const match of page.html.matchAll(/data-ad-label[^>]*>\s*(広告|PR)\s*</g)) {
    const nearby = page.html.slice(match.index, match.index + 800);
    if (!/adsbygoogle|affiliate_impression|sponsored|affiliate-creative-link/.test(nearby)) add('critical', 'EMPTY_AD_LABEL', page.route, `${match[1]}ラベルの後に広告本体がありません。`);
  }
  const affiliateImpressions = [...page.html.matchAll(/data-analytics-impression-event="affiliate_impression"/g)];
  if (affiliateImpressions.length > 2) add('critical', 'TOO_MANY_AFFILIATE_OFFERS', page.route, `同一ページのPR案件は最大2件です（現在${affiliateImpressions.length}件）。`);
  const offerIds = [...page.html.matchAll(/<aside\b[^>]*data-offer-id="([^"]+)"[^>]*>/g)].map((match) => match[1]);
  if (new Set(offerIds).size !== offerIds.length) add('critical', 'DUPLICATE_AFFILIATE_OFFER', page.route, '同じPR案件が同一ページに重複表示されています。');
  if (page.route === '/' && affiliateImpressions.length !== 1) add('critical', 'INVALID_INITIAL_HOME_AFFILIATE_COUNT', page.route, `トップの初期表示PRは1件である必要があります（現在${affiliateImpressions.length}件）。`);
  if (page.route === '/guide/' && affiliateImpressions.length !== 1) add('critical', 'INVALID_GUIDE_AFFILIATE_COUNT', page.route, `申請前ガイドの初期表示PRは1件である必要があります（現在${affiliateImpressions.length}件）。`);
  const officialClickIndex = page.html.indexOf('data-analytics-event="official_source_click"');
  const officialPanelIndex = page.html.indexOf('grant-source-panel');
  const officialIndex = officialClickIndex >= 0 ? officialClickIndex : officialPanelIndex;
  const affiliateIndex = page.html.indexOf('data-analytics-impression-event="affiliate_impression"');
  if (page.route.startsWith('/grant/') && affiliateIndex >= 0 && (officialIndex < 0 || affiliateIndex < officialIndex)) add('critical', 'AFFILIATE_BEFORE_OFFICIAL', page.route, '制度詳細のPR枠が公式情報への導線より前にあります。');
  if (page.route.startsWith('/grant/')) {
    for (const match of page.html.matchAll(/<aside\b[^>]*data-offer-id="([^"]+)"[^>]*>/g)) {
      const aside = match[0];
      const offerId = match[1];
      const offer = affiliateOfferById.get(offerId);
      const purpose = aside.match(/data-purpose="([^"]*)"/)?.[1] ?? '';
      const intents = (aside.match(/data-context-intents="([^"]*)"/)?.[1] ?? '').split(',').filter(Boolean);
      if (!offer) {
        add('critical', 'UNKNOWN_AFFILIATE_OFFER', page.route, `未登録のPR案件${offerId}が表示されています。`);
        continue;
      }
      const issuedHtml = AFFILIATE_ISSUED_HTML[offerId];
      if (!issuedHtml || !page.html.includes(issuedHtml)) add('critical', 'ASP_ISSUED_HTML_CHANGED', page.route, `${offerId}のASP発行HTMLが生成物で変更されています。`);
      if (offer.allowedPurposes.length > 0 && !offer.allowedPurposes.includes(purpose)) add('critical', 'AFFILIATE_PURPOSE_MISMATCH', page.route, `${offerId}と主目的${purpose}が一致しません。`);
      if (!offer.intents.some((intent) => intents.includes(intent))) add('critical', 'AFFILIATE_INTENT_MISMATCH', page.route, `${offerId}に一致する文脈根拠がありません。`);
    }
  }
  for (const anchor of page.html.matchAll(/<a\b[^>]*>/g)) {
    if (!anchor[0].includes('data-analytics-event="affiliate_click"')) continue;
    const rel = anchor[0].match(/rel="([^"]*)"/)?.[1] ?? '';
    for (const required of ['sponsored', 'nofollow', 'noopener', 'noreferrer']) if (!rel.split(/\s+/).includes(required)) add('critical', 'INVALID_AFFILIATE_REL', page.route, `PRリンクのrelに${required}がありません。`);
    if (!anchor[0].includes('target="_blank"')) add('critical', 'INVALID_AFFILIATE_TARGET', page.route, 'PRリンクが新しいタブで開く設定になっていません。');
  }
}

for (const field of ['title', 'description']) {
  const map = new Map();
  pages.filter((page) => !page.noindex && page[field]).forEach((page) => map.set(page[field], [...(map.get(page[field]) ?? []), page.route]));
  for (const [value, duplicatedRoutes] of map) if (duplicatedRoutes.length > 1) add('warning', `DUPLICATE_META_${field.toUpperCase()}`, duplicatedRoutes[0], `${duplicatedRoutes.length}ページで重複：${value.slice(0, 100)}`);
}

const generatedGrantPages = pages.filter((page) => page.route.startsWith('/grant/'));
const grantPagesWithAffiliate = generatedGrantPages.filter((page) => page.html.includes('data-analytics-impression-event="affiliate_impression"'));
const affiliateOfferOccurrences = {};
for (const page of generatedGrantPages) {
  for (const offerId of new Set([...page.html.matchAll(/data-offer-id="([^"]+)"/g)].map((match) => match[1]))) {
    affiliateOfferOccurrences[offerId] = (affiliateOfferOccurrences[offerId] ?? 0) + 1;
  }
}
const affiliateCoverage = {
  sampledGrantPages: generatedGrantPages.length,
  pagesWithAffiliate: grantPagesWithAffiliate.length,
  pagesWithoutAffiliate: generatedGrantPages.length - grantPagesWithAffiliate.length,
  coverageRate: generatedGrantPages.length ? Math.round(grantPagesWithAffiliate.length * 1000 / generatedGrantPages.length) / 10 : 0,
  offerOccurrences: affiliateOfferOccurrences,
};

const summary = {
  generatedAt: new Date().toISOString(),
  htmlPages: pages.length,
  indexablePages: pages.filter((page) => !page.noindex).length,
  critical: issues.filter((issue) => issue.severity === 'critical').length,
  warnings: issues.filter((issue) => issue.severity === 'warning').length,
  affiliateCoverage,
};
const reportDir = path.join(root, 'reports');
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, 'build-audit.json'), `${JSON.stringify({ summary, issues }, null, 2)}\n`);
fs.writeFileSync(path.join(reportDir, 'build-audit.md'), `# ビルド成果物監査\n\n| 指標 | 件数 |\n|---|---:|\n| HTMLページ | ${summary.htmlPages.toLocaleString('ja-JP')} |\n| index可能 | ${summary.indexablePages.toLocaleString('ja-JP')} |\n| 生成済み制度詳細 | ${affiliateCoverage.sampledGrantPages.toLocaleString('ja-JP')} |\n| PRあり制度詳細 | ${affiliateCoverage.pagesWithAffiliate.toLocaleString('ja-JP')}（${affiliateCoverage.coverageRate}%） |\n| PRなし制度詳細 | ${affiliateCoverage.pagesWithoutAffiliate.toLocaleString('ja-JP')} |\n| 重大エラー | ${summary.critical.toLocaleString('ja-JP')} |\n| 警告 | ${summary.warnings.toLocaleString('ja-JP')} |\n\n## 案件別の生成HTML出現数\n\n${Object.entries(affiliateCoverage.offerOccurrences).sort(([, left], [, right]) => right - left).map(([offerId, count]) => `- ${offerId}: ${count}件`).join('\n') || '- 出現なし'}\n\n## 指摘\n\n${issues.length ? issues.slice(0, 500).map((issue) => `- ${issue.severity} / ${issue.code} / ${issue.route}: ${issue.message}`).join('\n') : '- 指摘なし'}\n`);
console.log(JSON.stringify(summary, null, 2));
if (summary.critical > 0) process.exitCode = 1;
