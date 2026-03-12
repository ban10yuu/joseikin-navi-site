import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getGrantBySlug, getRelatedGrants } from '@/lib/grants';
import { CATEGORY_LABELS, TYPE_LABELS, GrantCategory } from '@/lib/types';

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
import { GrantJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import GrantCard from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';
import AdBanner from '@/components/AdBanner';
import RequiredDocuments from '@/components/RequiredDocuments';
import AuthorBox from '@/components/AuthorBox';
import ShareButtons from '@/components/ShareButtons';
import { getRequiredDocuments } from '@/lib/documents';

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
  const requiredDocs = getRequiredDocuments(grant);
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
        <nav className="text-xs text-gray-400 mb-5 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:text-blue-700">ホーム</Link>
          <span>/</span>
          <Link href={`/category/${grant.category}/`} className="hover:text-blue-700">{CATEGORY_LABELS[grant.category]}</Link>
          <span>/</span>
          <span className="text-gray-600">{grant.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <article>
            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 mb-5">
              <div className="flex items-start gap-4">
                <img
                  src={CATEGORY_IMAGES[grant.category]}
                  alt={CATEGORY_LABELS[grant.category]}
                  className="w-20 h-20 object-contain flex-shrink-0 hidden sm:block"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
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

                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                    {grant.title}
                  </h1>

                  <div className="amount-badge text-lg sm:text-xl mb-3">
                    {grant.maxAmount}
                  </div>
                </div>
              </div>

              <div className="target-label">
                <span className="target-label-icon">&#10003;</span>
                <span>{grant.eligibility}</span>
              </div>

              <p className="text-sm text-gray-600 mb-5">{grant.description}</p>

              <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-t border-gray-100">
                    <th className="text-left text-gray-500 font-medium py-2 pr-4 w-28">運営団体</th>
                    <td className="py-2 text-gray-800">{grant.organization}</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <th className="text-left text-gray-500 font-medium py-2 pr-4">申請期間</th>
                    <td className="py-2 text-gray-800">{grant.applicationPeriod}</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <th className="text-left text-gray-500 font-medium py-2 pr-4">対象者</th>
                    <td className="py-2 text-gray-800">{grant.eligibility}</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <th className="text-left text-gray-500 font-medium py-2 pr-4">対象地域</th>
                    <td className="py-2 text-gray-800">{grant.prefecture}</td>
                  </tr>
                  {grant.targetIncome && (
                    <tr className="border-t border-gray-100">
                      <th className="text-left text-gray-500 font-medium py-2 pr-4">対象世帯年収</th>
                      <td className="py-2 text-gray-800">{grant.targetIncome}</td>
                    </tr>
                  )}
                  {grant.targetOccupation && (
                    <tr className="border-t border-gray-100">
                      <th className="text-left text-gray-500 font-medium py-2 pr-4">対象職業</th>
                      <td className="py-2 text-gray-800">{grant.targetOccupation}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <AdBanner size="full" />

            {/* Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5">
              <h2 className="text-sm font-bold text-gray-800 mb-2">目次</h2>
              <ol className="space-y-1.5">
                {grant.sections.map((section, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="text-sm text-blue-700 hover:underline">
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

            {/* Required Documents Checklist */}
            <RequiredDocuments documents={requiredDocs} officialUrl={grant.officialUrl} />

            <AdBanner size="full" />

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 my-5">
              {grant.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}/`}
                  className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Share Buttons */}
            <ShareButtons title={grant.title} />

            {/* Author Box (E-E-A-T) */}
            <AuthorBox />

            {/* Related Grants */}
            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="text-lg font-bold text-gray-900 mb-4">関連する助成金・補助金</h2>
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
