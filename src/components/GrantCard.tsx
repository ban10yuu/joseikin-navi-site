import Link from 'next/link';
import { CATEGORY_LABELS, TYPE_LABELS, GrantCategory, GrantType } from '@/lib/types';
import { getDeadlineStatus, DeadlineStatus } from '@/lib/deadline';
import { getGrantSourceStatus } from '@/lib/grant-source';

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
}

const DEADLINE_BADGES: Record<NonNullable<DeadlineStatus>, { label: string; className: string }> = {
  'year-round': { label: '通年受付', className: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  'ending-soon': { label: '締切間近', className: 'bg-accent-wash text-accent-deep border-accent' },
  'ended': { label: '期限切れ', className: 'bg-red-50 text-red-800 border-red-300' },
  'budget-limited': { label: '予算次第', className: 'bg-amber-50 text-amber-800 border-amber-300' },
};

export default function GrantCard({ grant }: { grant: GrantCardItem }) {
  const deadlineStatus = getDeadlineStatus(grant);
  const isEnded = deadlineStatus === 'ended';
  const sourceStatus = getGrantSourceStatus(grant);

  return (
    <Link href={`/grant/${grant.slug}/`} className={`grant-card block ${isEnded ? 'opacity-60' : ''}`}>
      <div className="grant-card-badges">
        <span className="grant-card-type">{TYPE_LABELS[grant.type]}</span>
        <span>{CATEGORY_LABELS[grant.category]}</span>
        <span>{grant.prefecture}</span>
        {deadlineStatus && (
          <span className={`border ${DEADLINE_BADGES[deadlineStatus].className}`}>
            {DEADLINE_BADGES[deadlineStatus].label}
          </span>
        )}
      </div>

      <h3 className="grant-card-title">{grant.title}</h3>
      <p className="grant-card-organization">{grant.organization}</p>

      <dl className="grant-card-facts">
        <div>
          <dt>支給・補助額</dt>
          <dd>{grant.maxAmount}</dd>
        </div>
        <div>
          <dt>申請期間</dt>
          <dd className="line-clamp-2">{grant.applicationPeriod || '公式サイトで確認'}</dd>
        </div>
      </dl>

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
