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
  return getAllTags({ includeExpired: true }).map((tag) => ({ slug: tagToSlug(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slugToTag(slug, { includeExpired: true });
  if (!tag) return {};

  const title = `「${tag}」に関する助成金・補助金一覧`;
  return {
    title,
    description: `${tag}に関連する公式リンクありの助成金・補助金・給付金の一覧ページです。`,
    alternates: {
      canonical: `https://joseikin-navi-site.vercel.app/tag/${slug}/`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tag = slugToTag(slug, { includeExpired: true });
  if (!tag) notFound();

  const grants = getGrantsByTag(tag);
  const visibleGrants = grants.slice(0, 80);
  const baseUrl = 'https://joseikin-navi-site.vercel.app';

  return (
    <>
      <CollectionJsonLd
        name={`「${tag}」に関する助成金・補助金`}
        description={`${tag}に関連する助成金・補助金の一覧`}
        url={`${baseUrl}/tag/${slug}/`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <nav className="text-sm text-faint mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-navy hover:underline underline-offset-2">ホーム</Link>
          <span>/</span>
          <span className="text-muted">#{tag}</span>
        </nav>

        <div className="border-l-4 border-accent pl-4 mb-8">
          <h1 className="text-2xl font-black text-navy mb-2">
            「{tag}」に関する助成金・補助金
          </h1>
          <p className="text-sm text-muted">公式リンクありの助成金が{grants.length}件見つかりました。</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-4">
            {visibleGrants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
            {visibleGrants.length === 0 && (
              <div className="rounded-xl border-2 border-line-strong bg-wash p-5 text-sm text-muted">
                現在公開中の制度はありません。期限切れの制度は一覧から外しています。
              </div>
            )}
            {grants.length > visibleGrants.length && (
              <div className="rounded-xl border-2 border-line-strong bg-wash p-5 text-sm text-muted">
                該当制度は全{grants.length}件あります。表示は上位{visibleGrants.length}件に絞っています。
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
