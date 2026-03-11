import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTags, getGrantsByTag, tagToSlug, slugToTag } from '@/lib/grants';
import { CollectionJsonLd } from '@/components/JsonLd';
import GrantCard from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ slug: tagToSlug(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slugToTag(slug);
  if (!tag) return {};

  const title = `「${tag}」に関する助成金・補助金一覧`;
  return {
    title,
    description: `${tag}に関連する助成金・補助金・給付金の一覧ページです。`,
    alternates: {
      canonical: `https://joseikin-navi-site.vercel.app/tag/${slug}/`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tag = slugToTag(slug);
  if (!tag) notFound();

  const grants = getGrantsByTag(tag);
  const baseUrl = 'https://joseikin-navi-site.vercel.app';

  return (
    <>
      <CollectionJsonLd
        name={`「${tag}」に関する助成金・補助金`}
        description={`${tag}に関連する助成金・補助金の一覧`}
        url={`${baseUrl}/tag/${slug}/`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <nav className="text-sm text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <span className="text-slate-600">#{tag}</span>
        </nav>

        <h1 className="text-2xl font-black text-slate-800 mb-2">
          「{tag}」に関する助成金・補助金
        </h1>
        <p className="text-sm text-slate-500 mb-8">{grants.length}件の助成金が見つかりました。</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-4">
            {grants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
          </div>
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
