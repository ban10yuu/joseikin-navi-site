import Link from 'next/link';
import { CATEGORY_LABELS, TYPE_LABELS } from '@/lib/types';
import { getPopularGrants } from '@/lib/grants';
import SubscribeForm from './SubscribeForm';
import AdBanner from './AdBanner';

export default function Sidebar() {
  const popular = getPopularGrants(8);
  const categories = Object.entries(CATEGORY_LABELS);
  const types = Object.entries(TYPE_LABELS);

  return (
    <aside className="space-y-6">
      {/* Subscribe CTA */}
      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl border border-blue-100 p-5">
        <h3 className="text-base font-bold text-slate-800 mb-1">無料メール登録</h3>
        <p className="text-xs text-slate-500 mb-4">あなたに合った助成金情報をお届け</p>
        <SubscribeForm compact />
      </div>

      <AdBanner size="medium" />

      {/* Popular Grants */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center text-xs font-black">P</span>
          人気の助成金
        </h3>
        <ol className="space-y-3">
          {popular.map((grant, i) => (
            <li key={grant.slug}>
              <Link href={`/grant/${grant.slug}/`} className="flex items-start gap-2 group">
                <span className={`flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${
                  i < 3 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {grant.title}
                  </p>
                  <span className="text-xs text-red-500 font-bold">{grant.maxAmount}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Category Links */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        <h3 className="text-sm font-bold text-slate-800 mb-3">カテゴリから探す</h3>
        <div className="space-y-1">
          {categories.map(([key, label]) => (
            <Link
              key={key}
              href={`/category/${key}/`}
              className="block px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Type Links */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        <h3 className="text-sm font-bold text-slate-800 mb-3">制度の種類から探す</h3>
        <div className="space-y-1">
          {types.map(([key, label]) => (
            <Link
              key={key}
              href={`/category/${key}/`}
              className="block px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <AdBanner size="compact" />
    </aside>
  );
}
