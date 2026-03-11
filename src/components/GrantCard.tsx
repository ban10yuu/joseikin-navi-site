import Link from 'next/link';
import { Grant, CATEGORY_LABELS, TYPE_LABELS } from '@/lib/types';

export default function GrantCard({ grant }: { grant: Grant }) {
  return (
    <Link href={`/grant/${grant.slug}/`} className="grant-card block">
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
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

      <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-snug hover:text-blue-700">
        {grant.title}
      </h3>

      <div className="amount-badge mb-2">{grant.maxAmount}</div>

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
