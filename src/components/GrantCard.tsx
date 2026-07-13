import Link from 'next/link';
import { CATEGORY_LABELS, SUPPORT_TYPE_LABELS, TYPE_LABELS, GrantCategory, GrantStatus, GrantType, SupportType } from '@/lib/types';
import { getGrantSourceStatus } from '@/lib/grant-source';
import { getEffectiveGrantStatus, GRANT_STATUS_LABELS, isRepayableSupport } from '@/lib/grant-status';

export interface GrantCardItem {
  slug: string;
  title: string;
  organization: string;
  type: GrantType;
  maxAmount: string;
  category: GrantCategory;
  prefecture: string;
  tags?: string[];
  eligibility: string;
  applicationPeriod: string;
  deadlineDate?: string;
  description: string;
  officialUrl: string;
  sourceUrls?: string[];
  verifiedAt?: string;
  searchText?: string;
  status?: GrantStatus;
  statusOverride?: GrantStatus;
  supportType?: SupportType;
  budgetMayCloseEarly?: boolean;
}

const STATUS_BADGES: Partial<Record<GrantStatus, string>> = {
  open: 'bg-emerald-50 text-emerald-800 border-emerald-300',
  closingSoon: 'bg-accent-wash text-accent-deep border-accent',
  closed: 'bg-red-50 text-red-800 border-red-300',
  scheduled: 'bg-blue-50 text-blue-800 border-blue-300',
  suspended: 'bg-amber-50 text-amber-800 border-amber-300',
};

export default function GrantCard({ grant }: { grant: GrantCardItem }) {
  const status = getEffectiveGrantStatus(grant);
  const isEnded = status === 'closed';
  const sourceStatus = getGrantSourceStatus(grant);

  return (
    <Link href={`/grant/${grant.slug}/`} className={`grant-card block ${isEnded ? 'opacity-60' : ''}`}>
      <div className="grant-card-badges">
        <span className="grant-card-type">{TYPE_LABELS[grant.type]}</span>
        <span>{SUPPORT_TYPE_LABELS[grant.supportType ?? 'unknown']}</span>
        <span>{CATEGORY_LABELS[grant.category]}</span>
        <span>{grant.prefecture}</span>
        {STATUS_BADGES[status] && (
          <span className={`border ${STATUS_BADGES[status]}`}>
            {GRANT_STATUS_LABELS[status]}
          </span>
        )}
      </div>

      <h3 className="grant-card-title">{grant.title}</h3>
      <p className="grant-card-organization">{grant.organization}</p>

      <dl className="grant-card-facts">
        <div>
          <dt>支援額</dt>
          <dd>{grant.maxAmount}</dd>
        </div>
        <div>
          <dt>申請期間</dt>
          <dd className="line-clamp-2">{grant.applicationPeriod || '公式サイトで確認'}</dd>
        </div>
      </dl>

      {isRepayableSupport(grant.supportType) && (
        <p className="grant-card-loan">貸付制度・原則として返済が必要です</p>
      )}

      <p className="grant-card-eligibility line-clamp-2">
        <span>主な対象</span>
        {grant.eligibility}
      </p>

      {isEnded && (
        <p className="grant-card-expired">
          掲載上の期限は終了しています。次回募集は公式サイトで確認してください。
        </p>
      )}

      <div className="grant-card-footer">
        <span className={sourceStatus.level === 'verified' ? 'is-verified' : ''}>
          {grant.verifiedAt ? `公式出典を${grant.verifiedAt}に確認` : sourceStatus.label}
        </span>
        <span className="grant-card-link">詳しく見る <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
