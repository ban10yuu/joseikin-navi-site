import { mkdir, writeFile } from 'node:fs/promises';
import { AFFILIATE_OFFERS } from '../src/config/affiliate-offers.ts';
import { auditAffiliateOffers, auditPublishedAffiliateRemotes } from '../src/lib/affiliate-audit.ts';
import { isAffiliateOfferPublishable } from '../src/lib/monetization.ts';

const now = new Date();
const issues = [
  ...auditAffiliateOffers(AFFILIATE_OFFERS, now),
  ...(process.env.AFFILIATE_REMOTE_CREATIVE_AUDIT === '1'
    ? await auditPublishedAffiliateRemotes(AFFILIATE_OFFERS)
    : []),
];
const critical = issues.filter((issue) => issue.severity === 'critical');
const enabledCount = AFFILIATE_OFFERS.filter((offer) => offer.enabled).length;
const publishableCount = AFFILIATE_OFFERS.filter((offer) => isAffiliateOfferPublishable(offer, now)).length;
const report = {
  generatedAt: now.toISOString(),
  totalOffers: AFFILIATE_OFFERS.length,
  enabledOffers: enabledCount,
  publishableOffers: publishableCount,
  criticalIssues: critical.length,
  warningIssues: issues.length - critical.length,
  issues,
};

const markdown = `# アフィリエイト案件監査\n\n- 生成日時: ${report.generatedAt}\n- 登録案件: ${report.totalOffers}件\n- 有効設定: ${report.enabledOffers}件\n- 公開条件を満たす案件: ${report.publishableOffers}件\n- 重大エラー: ${report.criticalIssues}件\n- 警告: ${report.warningIssues}件\n\n## 指摘\n\n${issues.length ? issues.map((issue) => `- [${issue.severity}] ${issue.code} / ${issue.offerId}: ${issue.message}`).join('\n') : '- 指摘なし'}\n`;

await mkdir('reports', { recursive: true });
await Promise.all([
  writeFile('reports/affiliate-audit.json', `${JSON.stringify(report, null, 2)}\n`, 'utf8'),
  writeFile('reports/affiliate-audit.md', markdown, 'utf8'),
]);

console.log(`アフィリエイト監査: 登録${report.totalOffers}件 / 公開可能${report.publishableOffers}件 / 重大${report.criticalIssues}件 / 警告${report.warningIssues}件`);
if (critical.length) process.exitCode = 1;
