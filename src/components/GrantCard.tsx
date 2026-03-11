import Link from 'next/link';
import { Grant, CATEGORY_LABELS, CATEGORY_COLORS, TYPE_LABELS, TYPE_COLORS } from '@/lib/types';

interface GrantCardProps {
  grant: Grant;
}

export default function GrantCard({ grant }: GrantCardProps) {
  return (
    <Link href={`/grant/${grant.slug}/`} className="grant-card block group">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${TYPE_COLORS[grant.type]}`}>
          {TYPE_LABELS[grant.type]}
        </span>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[grant.category]}`}>
          {CATEGORY_LABELS[grant.category]}
        </span>
        {grant.prefecture !== '全国' && (
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            {grant.prefecture}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
        {grant.title}
      </h3>

      <div className="amount-badge mb-3">
        <span className="label">最大</span>
        {grant.maxAmount}
      </div>

      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{grant.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {grant.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-100">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-slate-400">{grant.organization}</span>
      </div>
    </Link>
  );
}
