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

export default function GrantCard({ grant }: { grant: Grant }) {
  return (
    <Link href={`/grant/${grant.slug}/`} className="grant-card block">
      <div className="flex items-start gap-3">
        <img
          src={CATEGORY_IMAGES[grant.category]}
          alt={CATEGORY_LABELS[grant.category]}
          className="w-14 h-14 object-contain flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-700 text-white">
              {TYPE_LABELS[grant.type]}
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
              {CATEGORY_LABELS[grant.category]}
            </span>
            {grant.prefecture !== '全国' && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-500">
                {grant.prefecture}
              </span>
            )}
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
            {grant.title}
          </h3>
          <div className="amount-badge">{grant.maxAmount}</div>
        </div>
      </div>

      <div className="target-label">
        <span className="target-label-icon">&#10003;</span>
        <span className="line-clamp-1">{grant.eligibility}</span>
      </div>

      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{grant.description}</p>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <div className="flex flex-wrap gap-1">
          {grant.tags.map((tag) => (
            <span key={tag} className="px-1.5 py-0.5 rounded bg-gray-50 text-gray-500 border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
        <span>{grant.organization}</span>
      </div>
    </Link>
  );
}
