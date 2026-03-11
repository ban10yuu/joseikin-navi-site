import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGrantsByCategory } from '@/lib/grants';
import { GrantCategory, CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/types';
import { BreadcrumbJsonLd, CollectionJsonLd } from '@/components/JsonLd';
import GrantCard from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';

const validCategories = Object.keys(CATEGORY_LABELS);

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return validCategories.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!validCategories.includes(slug)) return {};

  const label = CATEGORY_LABELS[slug as GrantCategory];
  const title = `${label}の助成金・補助金一覧【2026年最新】`;
  const description = `${label}に関する助成金・補助金・給付金を一覧でご紹介。国・自治体・民間団体の支援制度を網羅的に掲載。申請方法・受給条件・支給額まで詳しく解説しています。`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://joseikin-navi-site.vercel.app/category/${slug}/`,
    },
    alternates: {
      canonical: `https://joseikin-navi-site.vercel.app/category/${slug}/`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!validCategories.includes(slug)) notFound();

  const category = slug as GrantCategory;
  const label = CATEGORY_LABELS[category];
  const grants = getGrantsByCategory(category);
  const baseUrl = 'https://joseikin-navi-site.vercel.app';

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: baseUrl },
        { name: label, url: `${baseUrl}/category/${slug}/` },
      ]} />
      <CollectionJsonLd
        name={`${label}の助成金・補助金一覧`}
        description={`${label}に関する助成金・補助金・給付金の一覧ページ`}
        url={`${baseUrl}/category/${slug}/`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <nav className="text-sm text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <span className="text-slate-600">{label}</span>
        </nav>

        <div className="mb-8">
          <div className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-3 ${CATEGORY_COLORS[category]}`}>
            {label}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">
            {label}の助成金・補助金一覧
          </h1>
          <p className="text-sm text-slate-500">
            {label}に関連する助成金・補助金を{grants.length}件掲載しています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-4">
            {grants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
            {grants.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-400">このカテゴリの助成金はまだ掲載されていません。</p>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
