import Link from 'next/link';
import { Grant, CATEGORY_LABELS, TYPE_LABELS, GrantCategory } from '@/lib/types';

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

function getDeadlineStatus(grant: Grant): DeadlineStatus {
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
  'year-round': { label: '通年受付', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  'ending-soon': { label: '締切間近', className: 'bg-red-50 text-red-700 border-red-200' },
  'ended': { label: '受付終了', className: 'bg-gray-100 text-gray-400 border-gray-200' },
  'budget-limited': { label: '予算次第', className: 'bg-amber-50 text-amber-700 border-amber-200' },
};

export default function GrantCard({ grant }: { grant: Grant }) {
  const deadlineStatus = getDeadlineStatus(grant);
  const isEnded = deadlineStatus === 'ended';

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
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-700 text-white">
              {TYPE_LABELS[grant.type]}
            </span>
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
              {CATEGORY_LABELS[grant.category]}
            </span>
            {grant.prefecture !== '全国' && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-50 text-gray-400">
                {grant.prefecture}
              </span>
            )}
            {deadlineStatus && (
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${DEADLINE_BADGES[deadlineStatus].className}`}>
                {DEADLINE_BADGES[deadlineStatus].label}
              </span>
            )}
          </div>

          {/* タイトル（長いタイトルは2行で切る） */}
          <h3 className="text-sm font-bold text-gray-900 mb-1.5 leading-snug line-clamp-2">
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
      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{grant.description}</p>

      {/* 運営元 */}
      <div className="text-xs text-gray-400 text-right">
        {grant.organization}
      </div>
    </Link>
  );
}
