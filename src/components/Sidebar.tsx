import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/types';
import { getPopularGrants } from '@/lib/grants';
import AdBanner from './AdBanner';
import AffiliateWidget from './AffiliateWidget';

export default function Sidebar() {
  const popular = getPopularGrants(6);
  const categories = Object.entries(CATEGORY_LABELS);

  return (
    <aside className="space-y-5">
      <AdBanner size="medium" />

      {/* 人気の助成金 */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-3">人気の助成金</h3>
        <ol className="space-y-2">
          {popular.map((grant, i) => (
            <li key={grant.slug}>
              <Link href={`/grant/${grant.slug}/`} className="flex items-start gap-2 group">
                <span className={`flex-shrink-0 w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                  i < 3 ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 group-hover:text-blue-700 line-clamp-2 leading-snug">
                    {grant.title}
                  </p>
                  <span className="text-xs text-emerald-600 font-bold">{grant.maxAmount}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* カテゴリ */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-2">カテゴリ</h3>
        <div className="space-y-0.5">
          {categories.map(([key, label]) => (
            <Link key={key} href={`/category/${key}/`}
              className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-700 rounded transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      <AffiliateWidget />

      <AdBanner size="compact" />
    </aside>
  );
}
