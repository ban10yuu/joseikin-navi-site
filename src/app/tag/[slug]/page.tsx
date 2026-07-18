import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GrantCard from '@/components/GrantCard';
import { getGrantsByTag, slugToTag } from '@/lib/grants';
import { toSiteUrl } from '@/lib/site-url';

interface Props { params: Promise<{ slug: string }> }

// タグは自動生成された補助導線のため、一括静的生成せずアクセス時に表示する。
export function generateStaticParams() { return []; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slugToTag(slug);
  if (!tag) return {};
  return {
    title: `「${tag}」に関連する支援制度`,
    description: `${tag}に関連する支援制度の検索補助ページです。対象条件と受付状況は各制度の公式情報でご確認ください。`,
    alternates: { canonical: toSiteUrl(`/tag/${slug}/`) },
    robots: { index: false, follow: true },
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tag = slugToTag(slug);
  if (!tag) notFound();
  const grants = getGrantsByTag(tag);
  const visible = grants.slice(0, 24);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="パンくず" className="mb-6 text-sm text-muted"><Link href="/" className="text-navy underline underline-offset-4">ホーム</Link><span className="mx-2" aria-hidden="true">/</span><span aria-current="page">#{tag}</span></nav>
      <header className="border-l-4 border-accent pl-4"><p className="text-xs font-bold text-blue-700">検索補助タグ</p><h1 className="mt-1 text-2xl font-black text-navy">「{tag}」に関連する支援制度</h1><p className="mt-2 text-sm leading-7 text-muted">{grants.length.toLocaleString('ja-JP')}件の候補があります。ここでは24件まで表示します。</p></header>
      {visible.length ? <div className="mt-8 grid gap-4 md:grid-cols-2">{visible.map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div> : <p className="mt-8 rounded-xl border border-line bg-wash p-5 text-sm text-muted">現在掲載中の制度はありません。</p>}
      <Link href={`/grants/?q=${encodeURIComponent(tag)}`} className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-navy px-5 font-bold text-white">このキーワードで制度を検索する</Link>
    </main>
  );
}
