import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import { createRequire } from 'node:module';

const root = process.cwd();
const require = createRequire(import.meta.url);
const ts = require('typescript');
const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveAlias(request, parent, isMain, options) {
  if (request.startsWith('@/')) return originalResolveFilename.call(this, path.join(root, 'src', request.slice(2)), parent, isMain, options);
  return originalResolveFilename.call(this, request, parent, isMain, options);
};

require.extensions['.ts'] = function compileTypeScript(module, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true, verbatimModuleSyntax: false }, fileName: filename });
  module._compile(output.outputText, filename);
};

const { getAllGrantsUnfiltered, hasOfficialSource, isGrantExpired, isManuallyVerifiedGrant } = require('../src/lib/grants.ts');
const { containsInternalAuditText } = require('../src/lib/grant-presentation.ts');
const { getValidOfficialSourceUrls } = require('../src/lib/grant-source.ts');
const { isRepayableSupport } = require('../src/lib/grant-status.ts');
const { getEffectiveGrantStatus } = require('../src/lib/grant-status.ts');
const { getGrantAffiliateIntents, shouldAllowDerivedAffiliateContext } = require('../src/lib/affiliate-context.ts');
const { getEligibleAffiliateOffers } = require('../src/lib/monetization.ts');
const { AFFILIATE_OFFERS } = require('../src/config/affiliate-offers.ts');

const grants = getAllGrantsUnfiltered();
const issues = [];
const addIssue = (severity, code, grant, message) => issues.push({ severity, code, slug: grant?.slug ?? '', title: grant?.title ?? '', message });
const forbidden = /助成金診断クイズ|全国2,500件以上|必要書類チェックリストを掲載しています|公式サイトで申請する|必ず受給できる|条件を満たせばほぼ確実|申請すれば受け取れる/;
const tokyoDateParts = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).formatToParts(new Date());
const tokyoDatePart = (type) => tokyoDateParts.find((part) => part.type === type)?.value ?? '';
const todayInTokyo = `${tokyoDatePart('year')}-${tokyoDatePart('month')}-${tokyoDatePart('day')}`;

const titleMap = new Map();
const urlMap = new Map();
const bodyMap = new Map();
for (const grant of grants) {
  if (!grant.title?.trim()) addIssue('critical', 'MISSING_NAME', grant, '制度名がありません。');
  if (!grant.organization?.trim()) addIssue('critical', 'MISSING_PROVIDER', grant, '実施機関がありません。');
  if (!grant.eligibility?.trim()) addIssue('warning', 'MISSING_ELIGIBILITY', grant, '主な対象者がありません。');
  if (!grant.verifiedAt) addIssue('warning', 'MISSING_CHECK_DATE', grant, '公式情報の確認日がありません。');
  if (grant.verifiedAt && grant.verifiedAt > todayInTokyo) addIssue('critical', 'FUTURE_CHECK_DATE', grant, '公式情報の確認日が未来日です。');
  if (grant.contentUpdatedAt && grant.contentUpdatedAt > todayInTokyo) addIssue('critical', 'FUTURE_CONTENT_DATE', grant, 'コンテンツ更新日が未来日です。');
  if (!hasOfficialSource(grant)) addIssue('warning', 'MISSING_OFFICIAL_URL', grant, '有効な公式URLがありません。');
  if (grant.indexStatus === 'index' && !hasOfficialSource(grant)) addIssue('critical', 'INDEX_WITHOUT_SOURCE', grant, '公式URLなしの制度がindex対象です。');
  if (grant.contentStatus === 'needsReview' && grant.indexStatus === 'index') addIssue('critical', 'INDEX_NEEDS_REVIEW', grant, '修正待ちの制度がindex対象です。');
  if (isGrantExpired(grant) && ['open', 'closingSoon'].includes(grant.statusOverride ?? grant.status ?? '')) addIssue('critical', 'EXPIRED_OPEN', grant, '期限切れですが受付中の状態が残っています。');
  if (/貸付|融資/.test(grant.title) && !isRepayableSupport(grant.supportType)) addIssue('warning', 'LOAN_TYPE_MISMATCH', grant, '貸付を示す制度名ですが貸付種別ではありません。');
  const publicText = [grant.title, grant.description, grant.eligibility, ...grant.sections.flatMap((section) => [section.heading, section.content])].join('\n');
  if (containsInternalAuditText(publicText)) addIssue('critical', 'INTERNAL_AUDIT_PUBLIC', grant, '公開用本文に内部監査文言が残っています。');
  if (forbidden.test(publicText)) addIssue('critical', 'FORBIDDEN_COPY', grant, '公開禁止表現が残っています。');
  const metaTitle = `${grant.title}｜対象・金額・申請期限｜助成金ナビ`;
  if (metaTitle.length > 65) addIssue('warning', 'META_TITLE_LONG', grant, `推定タイトルが長すぎます（${metaTitle.length}文字）。`);
  if (!grant.description?.trim()) addIssue('warning', 'DESCRIPTION_MISSING', grant, '概要がなく、メタ説明と本文の整合を確認できません。');

  titleMap.set(grant.title, [...(titleMap.get(grant.title) ?? []), grant.slug]);
  const primaryOfficialUrl = getValidOfficialSourceUrls(grant)[0];
  if (primaryOfficialUrl) {
    urlMap.set(primaryOfficialUrl, [...(urlMap.get(primaryOfficialUrl) ?? []), grant.slug]);
  }
  const normalizedBody = `${grant.description}|${grant.eligibility}`.replace(/\s+/g, ' ').trim();
  if (normalizedBody) bodyMap.set(normalizedBody, [...(bodyMap.get(normalizedBody) ?? []), grant.slug]);
}

for (const [title, slugs] of titleMap) if (slugs.length > 1) addIssue('warning', 'DUPLICATE_TITLE', { slug: slugs[0], title }, `同じタイトルが${slugs.length}件あります。`);
for (const [url, slugs] of urlMap) if (slugs.length > 1) addIssue('warning', 'DUPLICATE_OFFICIAL_URL', { slug: slugs[0], title: '' }, `同じ公式URLが${slugs.length}件あります：${url}`);
for (const [body, slugs] of bodyMap) if (slugs.length >= 5) addIssue('warning', 'DUPLICATE_BODY', { slug: slugs[0], title: '' }, `同じ概要・対象者の組合せが${slugs.length}件あります（${body.slice(0, 40)}…）。`);

const monetizationAllowed = grants.filter((grant) => {
  const affiliateIntents = getGrantAffiliateIntents({
    title: grant.title,
    description: grant.description,
    tags: grant.tags,
    purposes: grant.purposes,
    affiliateIntents: grant.affiliateIntents ?? [],
  });
  return getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
    pageType: 'grant',
    audiences: grant.audiences ?? [],
    purposes: grant.purposes ?? [],
    intents: affiliateIntents,
    monetizationAllowed: shouldAllowDerivedAffiliateContext({
      purposes: grant.purposes,
      intents: affiliateIntents,
      monetizationAllowed: grant.monetizationAllowed,
    }),
    status: getEffectiveGrantStatus(grant),
    indexable: grant.indexStatus !== 'noindex' && grant.contentStatus === 'published' && !isGrantExpired(grant),
    hasOfficialSource: hasOfficialSource(grant),
    limit: 1,
  }).length > 0;
}).length;

const summary = {
  generatedAt: new Date().toISOString(),
  total: grants.length,
  officialUrl: grants.filter(hasOfficialSource).length,
  automated: grants.filter((grant) => grant.verificationMethod === 'automated' || grant.verificationMethod === 'mixed').length,
  humanReviewed: grants.filter(isManuallyVerifiedGrant).length,
  noindex: grants.filter((grant) => grant.indexStatus === 'noindex').length,
  expired: grants.filter((grant) => isGrantExpired(grant)).length,
  duplicates: issues.filter((issue) => issue.code.startsWith('DUPLICATE_')).length,
  needsReview: grants.filter((grant) => grant.contentStatus === 'needsReview').length,
  loans: grants.filter((grant) => isRepayableSupport(grant.supportType)).length,
  affiliateEligible: monetizationAllowed,
  affiliateBlocked: grants.length - monetizationAllowed,
  critical: issues.filter((issue) => issue.severity === 'critical').length,
  warnings: issues.filter((issue) => issue.severity === 'warning').length,
};

const reportDir = path.join(root, 'reports');
fs.mkdirSync(reportDir, { recursive: true });
fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
fs.writeFileSync(path.join(reportDir, 'content-audit.json'), `${JSON.stringify({ summary, issues }, null, 2)}\n`);
const csvEscape = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
fs.writeFileSync(path.join(reportDir, 'content-audit.csv'), `severity,code,slug,title,message\n${issues.map((issue) => [issue.severity, issue.code, issue.slug, issue.title, issue.message].map(csvEscape).join(',')).join('\n')}\n`);
const issueCounts = [...new Map(issues.map((issue) => [issue.code, issues.filter((item) => item.code === issue.code).length])).entries()].sort((a, b) => b[1] - a[1]);
const markdown = `# コンテンツ品質レポート\n\n生成日時：${summary.generatedAt}\n\n| 指標 | 件数 |\n|---|---:|\n${[
  ['総制度数', summary.total], ['公式URLあり', summary.officialUrl], ['自動照合', summary.automated], ['人手確認', summary.humanReviewed], ['noindex', summary.noindex], ['期限切れ', summary.expired], ['重複指摘', summary.duplicates], ['修正待ち', summary.needsReview], ['貸付', summary.loans], ['アフィリエイト掲載可能', summary.affiliateEligible], ['アフィリエイト掲載禁止', summary.affiliateBlocked], ['重大エラー', summary.critical], ['警告', summary.warnings],
].map(([label, value]) => `| ${label} | ${Number(value).toLocaleString('ja-JP')} |`).join('\n')}\n\n## 指摘内訳\n\n${issueCounts.length ? issueCounts.map(([code, count]) => `- ${code}: ${count.toLocaleString('ja-JP')}件`).join('\n') : '- 指摘なし'}\n\n## 判定方針\n\n- 人手確認は humanReviewedAt が明示された制度だけを集計しています。\n- 公式URLなし、修正待ち、内部監査文言を含む制度は公開インデックス対象にしません。\n- アフィリエイト掲載可能は、公開状態、公式確認先、受付状況、対象者、目的、広告意図、提携済み案件がすべて一致する制度数です。申請中や無効な案件は数えません。\n`;
fs.writeFileSync(path.join(reportDir, 'content-audit.md'), markdown);
fs.writeFileSync(path.join(root, 'docs', 'content-quality-report.md'), markdown);

console.log(JSON.stringify(summary, null, 2));
if (summary.critical > 0) process.exitCode = 1;
