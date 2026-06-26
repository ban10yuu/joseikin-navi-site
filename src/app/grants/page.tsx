import type { Metadata } from 'next';
import Link from 'next/link';
import { getGrantQualityStats, getOfficialLinkedGrants, grantMatchesCategory } from '@/lib/grants';
import { CATEGORY_LABELS, GrantCategory } from '@/lib/types';
import GrantCard from '@/components/GrantCard';
import GoogleAd from '@/components/GoogleAd';

export const metadata: Metadata = {
  title: '助成金一覧｜公式リンクありの助成金・補助金をカテゴリ別に掲載',
  description:
    '国・自治体・民間団体の助成金・補助金・給付金のうち、公式リンクが確認できる制度を中心に掲載。子育て・住宅・医療・教育・就職・介護・生活支援・災害の8カテゴリに分類しています。',
  alternates: { canonical: 'https://joseikin-navi-site.vercel.app/grants/' },
};

export default function GrantsListPage() {
  const stats = getGrantQualityStats();
  const allGrants = getOfficialLinkedGrants();

  // カテゴリ別に分類。巨大なHTMLを避けるため、一覧ページでは代表カードだけ表示し、
  // 全件はカテゴリページで確認できるようにする。
  const byCategory = Object.keys(CATEGORY_LABELS).reduce(
    (acc, cat) => {
      acc[cat as GrantCategory] = allGrants.filter(
        (g) => grantMatchesCategory(g, cat as GrantCategory)
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
      <div className="bg-navy py-10 sm:py-14 border-b-4 border-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white hover:underline underline-offset-2">ホーム</Link>
            <span className="mx-1">/</span>
            <span className="text-white/85">助成金一覧</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-wide">
            助成金一覧（公式リンクあり {allGrants.length}件）
          </h1>
          <p className="text-white/80 text-sm">
            掲載総数{stats.total}件のうち、公式リンクを確認できる制度を優先表示しています。公式出典未登録の制度は検索補助扱いにしています。
          </p>

          {/* タイプ別サマリー */}
          <div className="flex flex-wrap gap-3 mt-5">
            <div className="bg-white/10 text-white border border-white/30 px-4 py-1.5 rounded-full text-sm font-bold">
              国の制度 {nationalCount}件
            </div>
            <div className="bg-white/10 text-white border border-white/30 px-4 py-1.5 rounded-full text-sm font-bold">
              自治体の制度 {localCount}件
            </div>
            <div className="bg-white/10 text-white border border-white/30 px-4 py-1.5 rounded-full text-sm font-bold">
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
                className="filter-chip"
              >
                {label}（{byCategory[key].length}件）
              </a>
            )
          )}
        </div>

        <GoogleAd />

        <div className="mb-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-bold mb-1">情報精度について</p>
          <p>
            助成金・補助金は公募回、予算、自治体年度により条件が変わります。この一覧では公式リンクが確認できる制度を中心に掲載し、申請前の最終確認先を明示しています。
          </p>
        </div>

        {/* カテゴリ別一覧 */}
        {(Object.entries(CATEGORY_LABELS) as [GrantCategory, string][]).map(
          ([cat, label], catIdx) => (
            <section key={cat} id={cat} className="mb-12">
              <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2 scroll-mt-20">
                <span className="w-1.5 h-6 rounded bg-accent" />
                {label}（{byCategory[cat].length}件）
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {byCategory[cat].slice(0, 6).map((grant) => (
                  <GrantCard key={grant.slug} grant={grant} />
                ))}
              </div>
              {byCategory[cat].length > 6 && (
                <div className="mt-4">
                  <Link
                    href={`/category/${cat}/`}
                    className="inline-block text-sm font-bold text-navy underline underline-offset-4 hover:text-accent-deep"
                  >
                    {label}の一覧をもっと見る（全{byCategory[cat].length}件）
                  </Link>
                </div>
              )}
              {catIdx === 2 && <GoogleAd className="mt-6" />}
              {catIdx === 5 && <GoogleAd className="mt-6" />}
            </section>
          )
        )}

        <GoogleAd />

        {/* CTA */}
        <div className="mt-8 bg-card border-2 border-navy rounded-xl p-6 text-center shadow-sm">
          <h2 className="text-lg font-bold text-navy mb-2">
            どの助成金が使えるか分からない方へ
          </h2>
          <p className="text-sm text-muted mb-4">
            簡単な質問に答えるだけで、あなたに該当する助成金が見つかります。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-block px-6 py-2.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-accent-deep transition-colors shadow-sm"
            >
              診断クイズを試す
            </Link>
            <Link
              href="/guide/"
              className="inline-block px-6 py-2.5 bg-card text-navy text-sm font-bold rounded-lg border-2 border-navy hover:bg-wash transition-colors"
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
            description: `公式リンクが確認できる助成金・補助金・給付金を${allGrants.length}件掲載`,
            url: 'https://joseikin-navi-site.vercel.app/grants/',
            numberOfItems: allGrants.length,
          }),
        }}
      />
    </>
  );
}
