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
  const description = `${label}に関する助成金・補助金・給付金のうち、公式リンクが確認できる制度を中心に掲載。申請方法・受給条件・支給額と公式確認先を整理しています。`;

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
  const visibleGrants = grants.slice(0, 80);
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
        <nav className="text-sm text-faint mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-navy hover:underline underline-offset-2">ホーム</Link>
          <span>/</span>
          <span className="text-muted">{label}</span>
        </nav>

        <div className="mb-8 border-l-4 border-accent pl-4">
          <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3 ${CATEGORY_COLORS[category]}`}>
            {label}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy mb-2">
            {label}の助成金・補助金一覧
          </h1>
          <p className="text-sm text-muted">
            {label}に関連する公式リンクありの助成金・補助金を{grants.length}件確認できます。表示は見やすさのため上位{visibleGrants.length}件に絞っています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-4">
            {visibleGrants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
            {grants.length > visibleGrants.length && (
              <div className="rounded-xl border-2 border-line-strong bg-wash p-5 text-sm text-muted">
                公式リンクありの該当制度は全{grants.length}件あります。条件を絞る場合はトップページの診断、または地域ページも確認してください。
              </div>
            )}
            {grants.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted">このカテゴリの助成金はまだ掲載されていません。</p>
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
