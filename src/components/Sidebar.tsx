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
      <div className="bg-card border-[1.5px] border-line rounded-xl p-4">
        <h3 className="text-sm font-bold text-navy mb-3 pb-2 border-b-2 border-accent">人気の助成金</h3>
        <ol className="space-y-2.5">
          {popular.map((grant, i) => (
            <li key={grant.slug}>
              <Link href={`/grant/${grant.slug}/`} className="flex items-start gap-2 group rounded-md">
                <span className={`flex-shrink-0 w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                  i < 3 ? 'bg-accent text-white' : 'bg-wash text-navy'
                }`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-ink group-hover:text-navy group-hover:underline underline-offset-2 line-clamp-2 leading-snug">
                    {grant.title}
                  </p>
                  <span className="text-xs text-navy font-bold">{grant.maxAmount}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* カテゴリ */}
      <div className="bg-card border-[1.5px] border-line rounded-xl p-4">
        <h3 className="text-sm font-bold text-navy mb-2 pb-2 border-b-2 border-accent">カテゴリ</h3>
        <div className="space-y-0.5">
          {categories.map(([key, label]) => (
            <Link key={key} href={`/category/${key}/`}
              className="block px-2 py-1.5 text-sm text-muted hover:bg-wash hover:text-navy rounded-md border-l-2 border-transparent hover:border-accent transition-colors">
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
