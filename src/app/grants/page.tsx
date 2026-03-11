import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllGrants } from '@/lib/grants';
import { CATEGORY_LABELS, TYPE_LABELS, GrantCategory } from '@/lib/types';
import GrantCard from '@/components/GrantCard';
import GoogleAd from '@/components/GoogleAd';

export const metadata: Metadata = {
  title: '助成金一覧｜全助成金・補助金・給付金をカテゴリ別に掲載',
  description:
    '国・自治体・民間団体の助成金・補助金・給付金を全件掲載。子育て・住宅・医療・教育・就職・介護・生活支援・災害の8カテゴリに分類して、金額順に一覧表示しています。',
  alternates: { canonical: 'https://joseikin-navi-site.vercel.app/grants/' },
};

export default function GrantsListPage() {
  const allGrants = getAllGrants();

  // カテゴリ別に分類
  const byCategory = Object.keys(CATEGORY_LABELS).reduce(
    (acc, cat) => {
      acc[cat as GrantCategory] = allGrants.filter(
        (g) => g.category === (cat as GrantCategory)
      );
      return acc;
    },
    {} as Record<GrantCategory, typeof allGrants>
  );

  // タイプ別件数
  const nationalCount = allGrants.filter((g) => g.type === 'national').length;
  const localCount = allGrants.filter((g) => g.type === 'local').length;
  const ngoCount = allGrants.filter((g) => g.type === 'ngo').length;

  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span className="mx-1">/</span>
            <span className="text-gray-700">助成金一覧</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            助成金一覧（全{allGrants.length}件）
          </h1>
          <p className="text-gray-600 text-sm">
            国の制度{nationalCount}件、自治体の制度{localCount}件、民間・NPO{ngoCount}件を掲載しています。
          </p>

          {/* タイプ別サマリー */}
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-lg text-sm font-semibold">
              国の制度 {nationalCount}件
            </div>
            <div className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-sm font-semibold">
              自治体の制度 {localCount}件
            </div>
            <div className="bg-violet-100 text-violet-800 px-3 py-1.5 rounded-lg text-sm font-semibold">
              民間・NPO {ngoCount}件
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* カテゴリ内リンク */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(Object.entries(CATEGORY_LABELS) as [GrantCategory, string][]).map(
            ([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                {label}（{byCategory[key].length}件）
              </a>
            )
          )}
        </div>

        <GoogleAd />

        {/* カテゴリ別一覧 */}
        {(Object.entries(CATEGORY_LABELS) as [GrantCategory, string][]).map(
          ([cat, label], catIdx) => (
            <section key={cat} id={cat} className="mb-12">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 scroll-mt-20">
                <span className="w-1.5 h-6 rounded bg-blue-600" />
                {label}（{byCategory[cat].length}件）
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {byCategory[cat].map((grant) => (
                  <GrantCard key={grant.slug} grant={grant} />
                ))}
              </div>
              {catIdx === 2 && <GoogleAd className="mt-6" />}
              {catIdx === 5 && <GoogleAd className="mt-6" />}
            </section>
          )
        )}

        <GoogleAd />

        {/* CTA */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            どの助成金が使えるか分からない方へ
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            簡単な質問に答えるだけで、あなたに該当する助成金が見つかります。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              診断クイズを試す
            </Link>
            <Link
              href="/guide/"
              className="inline-block px-6 py-2.5 bg-white text-blue-600 text-sm font-semibold rounded-lg border border-blue-300 hover:bg-blue-50 transition-colors"
            >
              申請ガイド
            </Link>
          </div>
        </div>
      </div>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: '助成金一覧',
            description: `国・自治体・民間団体の助成金・補助金・給付金を全${allGrants.length}件掲載`,
            url: 'https://joseikin-navi-site.vercel.app/grants/',
            numberOfItems: allGrants.length,
          }),
        }}
      />
    </>
  );
}
