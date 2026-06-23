import Link from 'next/link';
import { CATEGORY_LABELS, TYPE_LABELS, GrantCategory, GrantType } from '@/lib/types';
import { getGrantSourceStatus } from '@/lib/grant-source';

export interface GrantCardItem {
  slug: string;
  title: string;
  organization: string;
  type: GrantType;
  maxAmount: string;
  category: GrantCategory;
  prefecture: string;
  eligibility: string;
  applicationPeriod: string;
  deadlineDate?: string;
  description: string;
  officialUrl: string;
  sourceUrls?: string[];
  verifiedAt?: string;
}

const CATEGORY_IMAGES: Record<GrantCategory, string> = {
  childcare: '/images/categories/childcare.png',
  housing: '/images/categories/housing.png',
  medical: '/images/categories/medical.png',
  education: '/images/categories/education.png',
  employment: '/images/categories/employment.png',
  nursing: '/images/categories/nursing.png',
  living: '/images/categories/living.png',
  disaster: '/images/categories/disaster.png',
};

type DeadlineStatus = 'year-round' | 'ending-soon' | 'ended' | 'budget-limited' | null;

function getDeadlineStatus(grant: GrantCardItem): DeadlineStatus {
  const period = grant.applicationPeriod;

  if (grant.deadlineDate) {
    const deadline = new Date(grant.deadlineDate);
    const now = new Date();
    const daysLeft = Math.ceil((deadline.getTime() - now.getTime()) / 86400000);
    if (daysLeft < 0) return 'ended';
    if (daysLeft <= 30) return 'ending-soon';
    return null;
  }

  if (period.includes('通年') || period.includes('随時')) return 'year-round';
  if (period.includes('予算') || period.includes('先着')) return 'budget-limited';

  return null;
}

const DEADLINE_BADGES: Record<NonNullable<DeadlineStatus>, { label: string; className: string }> = {
  'year-round': { label: '通年受付', className: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
  'ending-soon': { label: '締切間近', className: 'bg-accent-wash text-accent-deep border-accent' },
  'ended': { label: '受付終了', className: 'bg-gray-100 text-gray-500 border-gray-300' },
  'budget-limited': { label: '予算次第', className: 'bg-amber-50 text-amber-800 border-amber-300' },
};

export default function GrantCard({ grant }: { grant: GrantCardItem }) {
  const deadlineStatus = getDeadlineStatus(grant);
  const isEnded = deadlineStatus === 'ended';
  const sourceStatus = getGrantSourceStatus(grant);

  return (
    <Link href={`/grant/${grant.slug}/`} className={`grant-card block ${isEnded ? 'opacity-60' : ''}`}>
      <div className="flex items-start gap-3">
        <img
          src={CATEGORY_IMAGES[grant.category]}
          alt={CATEGORY_LABELS[grant.category]}
          className="w-12 h-12 object-contain flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          {/* ラベル行 */}
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-navy text-white">
              {TYPE_LABELS[grant.type]}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-wash text-navy border border-line-strong">
              {CATEGORY_LABELS[grant.category]}
            </span>
            {grant.prefecture !== '全国' && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-card text-muted border border-line">
                {grant.prefecture}
              </span>
            )}
            {deadlineStatus && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${DEADLINE_BADGES[deadlineStatus].className}`}>
                {DEADLINE_BADGES[deadlineStatus].label}
              </span>
            )}
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${sourceStatus.className}`}>
              {sourceStatus.shortLabel}
            </span>
          </div>

          {/* タイトル（長いタイトルは2行で切る） */}
          <h3 className="text-[15px] font-bold text-navy mb-1.5 leading-snug line-clamp-2">
            {grant.title}
          </h3>

          {/* 助成額を大きく */}
          <div className="amount-badge">{grant.maxAmount}</div>
        </div>
      </div>

      {/* 対象者 */}
      <div className="target-label">
        <span className="target-label-icon">&#10003;</span>
        <span className="line-clamp-1">{grant.eligibility}</span>
      </div>

      {/* 概要（2行で切る） */}
      <p className="text-sm text-muted mb-2 line-clamp-2">{grant.description}</p>

      {/* 運営元 */}
      <div className="flex items-center justify-between gap-3 text-xs text-faint">
        <span>{grant.verifiedAt ? `確認日 ${grant.verifiedAt}` : sourceStatus.label}</span>
        <span className="text-right">{grant.organization}</span>
      </div>
    </Link>
  );
}
