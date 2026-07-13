import { CATEGORY_LABELS, Grant, SUPPORT_TYPE_LABELS, TYPE_LABELS } from '@/lib/types';
import { formatVerifiedDate, splitEligibilityText } from '@/lib/grant-presentation';
import {
  getEffectiveGrantStatus,
  getOfficialCtaLabel,
  GRANT_STATUS_LABELS,
  isRepayableSupport,
} from '@/lib/grant-status';

interface GrantDecisionSummaryProps {
  grant: Grant;
  expired: boolean;
  sourceLabel: string;
}

export default function GrantDecisionSummary({
  grant,
  expired,
  sourceLabel,
}: GrantDecisionSummaryProps) {
  const eligibilityItems = splitEligibilityText(grant.eligibility);
  const status = getEffectiveGrantStatus(grant);
  const isClosed = expired || status === 'closed';
  const isLoan = isRepayableSupport(grant.supportType);

  return (
    <header className="grant-decision-summary">
      <div className="grant-summary-badges">
        <span className="is-type">{TYPE_LABELS[grant.type]}</span>
        <span>{SUPPORT_TYPE_LABELS[grant.supportType ?? 'unknown']}</span>
        <span>{CATEGORY_LABELS[grant.category]}</span>
        <span>{grant.prefecture}</span>
        <span className="is-source">{sourceLabel}</span>
      </div>

      <h1>{grant.title}</h1>
      <p className="grant-summary-organization">実施機関：{grant.organization}</p>

      {isClosed && (
        <div className="grant-summary-alert" role="status">
          <strong>掲載上の申請期限は終了しています</strong>
          <p>次回募集、後継制度、受付再開の有無を公式サイトまたは担当窓口で確認してください。</p>
        </div>
      )}

      <dl className="grant-summary-facts">
        <div className="is-amount">
          <dt>支援額</dt>
          <dd>{grant.maxAmount}</dd>
          {isLoan && <p className="grant-loan-notice">貸付制度・原則として返済が必要です</p>}
        </div>
        <div>
          <dt>対象地域</dt>
          <dd>{grant.prefecture}</dd>
        </div>
        <div>
          <dt>申請期間</dt>
          <dd>{grant.applicationPeriod || '申請期間は公式サイトで確認'}</dd>
        </div>
        <div>
          <dt>受付状況</dt>
          <dd>{GRANT_STATUS_LABELS[status]}</dd>
          {grant.budgetMayCloseEarly && <p className="grant-budget-note">予算到達により早期終了する場合があります。</p>}
        </div>
      </dl>

      <div className="grant-summary-description">
        <h2>この制度について</h2>
        <p>{grant.description}</p>
      </div>

      <section className="grant-eligibility-summary" aria-labelledby="grant-eligibility-title">
        <h2 id="grant-eligibility-title">主な対象条件</h2>
        <p className="grant-eligibility-note">掲載データに記載された条件の要約です。細かな要件は公式募集要項で確認してください。</p>
        {eligibilityItems.length > 0 || grant.targetIncome || grant.targetOccupation ? (
          <ul>
            {eligibilityItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
            {grant.targetIncome && <li>収入に関する記載：{grant.targetIncome}</li>}
            {grant.targetOccupation && <li>職業に関する記載：{grant.targetOccupation}</li>}
          </ul>
        ) : (
          <p className="grant-eligibility-missing">対象条件は公式募集要項で確認してください。</p>
        )}
      </section>

      <a
        href={grant.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="grant-official-primary"
      >
        {getOfficialCtaLabel(status)}
        <span className="sr-only">（新しいタブで開きます）</span>
        <span aria-hidden="true">↗</span>
      </a>
      <p className="grant-summary-verified">{formatVerifiedDate(grant.verifiedAt)}。対象条件と受付状況は公式情報を優先してください。</p>
    </header>
  );
}
