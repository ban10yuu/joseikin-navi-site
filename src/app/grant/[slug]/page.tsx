import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getGrantBySlug, getRelatedGrants } from '@/lib/grants';
import { CATEGORY_LABELS, CATEGORY_COLORS, TYPE_LABELS, TYPE_COLORS } from '@/lib/types';
import { GrantJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import GrantCard from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';
import AdBanner from '@/components/AdBanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const grant = getGrantBySlug(slug);
  if (!grant) return {};

  const title = `${grant.title} ${grant.maxAmount}【申請方法・条件・必要書類】`;
  const description = `${grant.title}の申請方法・受給条件・必要書類を徹底解説。${grant.maxAmount}の支給が受けられる${CATEGORY_LABELS[grant.category]}の制度です。${grant.eligibility}`;

  return {
    title,
    description,
    keywords: [grant.title, grant.maxAmount, CATEGORY_LABELS[grant.category], grant.prefecture, ...grant.tags, '助成金', '補助金', '申請方法'].join(', '),
    openGraph: {
      title,
      description,
      url: `https://joseikin-navi-site.vercel.app/grant/${slug}/`,
      type: 'article',
    },
    alternates: {
      canonical: `https://joseikin-navi-site.vercel.app/grant/${slug}/`,
    },
  };
}

export default async function GrantDetailPage({ params }: Props) {
  const { slug } = await params;
  const grant = getGrantBySlug(slug);
  if (!grant) notFound();

  const related = getRelatedGrants(grant, 6);
  const baseUrl = 'https://joseikin-navi-site.vercel.app';

  return (
    <>
      <GrantJsonLd grant={grant} />
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: baseUrl },
        { name: CATEGORY_LABELS[grant.category], url: `${baseUrl}/category/${grant.category}/` },
        { name: grant.title, url: `${baseUrl}/grant/${slug}/` },
      ]} />
      <FaqJsonLd grant={grant} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-6 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <Link href={`/category/${grant.category}/`} className="hover:text-blue-600">{CATEGORY_LABELS[grant.category]}</Link>
          <span>/</span>
          <span className="text-slate-600">{grant.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* Main Content */}
          <article>
            {/* Header */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${TYPE_COLORS[grant.type]}`}>
                  {TYPE_LABELS[grant.type]}
                </span>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${CATEGORY_COLORS[grant.category]}`}>
                  {CATEGORY_LABELS[grant.category]}
                </span>
                {grant.prefecture !== '全国' && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                    {grant.prefecture}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mb-4 leading-tight">
                {grant.title}
              </h1>

              <div className="amount-badge text-xl sm:text-2xl mb-4">
                <span className="label">最大</span>
                {grant.maxAmount}
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">{grant.description}</p>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="text-xs font-semibold text-slate-400 mb-1">運営団体</h3>
                  <p className="text-sm font-medium text-slate-700">{grant.organization}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="text-xs font-semibold text-slate-400 mb-1">申請期間</h3>
                  <p className="text-sm font-medium text-slate-700">{grant.applicationPeriod}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="text-xs font-semibold text-slate-400 mb-1">対象者</h3>
                  <p className="text-sm font-medium text-slate-700">{grant.eligibility}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="text-xs font-semibold text-slate-400 mb-1">対象地域</h3>
                  <p className="text-sm font-medium text-slate-700">{grant.prefecture}</p>
                </div>
                {grant.targetIncome && (
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h3 className="text-xs font-semibold text-slate-400 mb-1">対象世帯年収</h3>
                    <p className="text-sm font-medium text-slate-700">{grant.targetIncome}</p>
                  </div>
                )}
                {grant.targetOccupation && (
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h3 className="text-xs font-semibold text-slate-400 mb-1">対象職業</h3>
                    <p className="text-sm font-medium text-slate-700">{grant.targetOccupation}</p>
                  </div>
                )}
              </div>
            </div>

            <AdBanner size="full" />

            {/* Table of Contents */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5 mb-6">
              <h2 className="text-sm font-bold text-blue-800 mb-3">目次</h2>
              <ol className="space-y-1.5">
                {grant.sections.map((section, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                      {i + 1}. {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sections */}
            <div className="article-content">
              {grant.sections.map((section, i) => (
                <div key={i}>
                  <h2 id={`section-${i}`}>{section.heading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  {i === 1 && <AdBanner size="medium" />}
                  {i === 3 && <AdBanner size="medium" />}
                </div>
              ))}
            </div>

            {/* Official Link */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-200 p-6 my-8 text-center">
              <h3 className="text-lg font-bold text-slate-800 mb-2">公式サイトで詳細を確認</h3>
              <p className="text-sm text-slate-600 mb-4">最新の申請条件・必要書類は公式サイトでご確認ください。</p>
              <a
                href={grant.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                公式サイトを見る
              </a>
            </div>

            <AdBanner size="full" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 my-6">
              {grant.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}/`}
                  className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Related Grants */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-slate-800 mb-6">関連する助成金・補助金</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {related.map((g) => (
                    <GrantCard key={g.slug} grant={g} />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
