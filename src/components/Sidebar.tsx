import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/types';
import { getPopularGrants } from '@/lib/grants';
import SubscribeForm from './SubscribeForm';
import AdBanner from './AdBanner';
import AffiliateWidget from './AffiliateWidget';

export default function Sidebar() {
  const popular = getPopularGrants(8);
  const categories = Object.entries(CATEGORY_LABELS);

  return (
    <aside className="space-y-5">
      {/* Subscribe */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-1">無料メール登録</h3>
        <p className="text-xs text-gray-500 mb-3">あなたに合った助成金情報をお届け</p>
        <SubscribeForm compact />
      </div>

      <AdBanner size="medium" />

      {/* Popular */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-3">人気の助成金</h3>
        <ol className="space-y-2.5">
          {popular.map((grant, i) => (
            <li key={grant.slug}>
              <Link href={`/grant/${grant.slug}/`} className="flex items-start gap-2 group">
                <span className={`flex-shrink-0 w-5 h-5 rounded text-[11px] font-bold flex items-center justify-center ${
                  i < 3 ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 group-hover:text-blue-700 line-clamp-2 leading-snug">
                    {grant.title}
                  </p>
                  <span className="text-xs text-red-600 font-bold">{grant.maxAmount}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Categories */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-2">カテゴリから探す</h3>
        <div className="space-y-0.5">
          {categories.map(([key, label]) => (
            <Link key={key} href={`/category/${key}/`}
              className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-700 rounded transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Affiliate Widget */}
      <AffiliateWidget />

      <AdBanner size="compact" />
    </aside>
  );
}
