import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GrantCard from '@/components/GrantCard';
import { BreadcrumbJsonLd, CollectionJsonLd } from '@/components/JsonLd';
import { getSearchConsoleOpportunitiesForPrefecture } from '@/config/search-console-opportunities';
import { getGrantsByPrefecture } from '@/lib/grants';
import { toSiteUrl } from '@/lib/site-url';
import { CATEGORY_LABELS, PREFECTURES, type GrantCategory } from '@/lib/types';

const prefectures = PREFECTURES.filter((prefecture) => prefecture !== '全国');
const REGION_MAP: Record<string, string[]> = {
  '北海道・東北': ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
  '関東': ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'],
  '中部': ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県'],
  '近畿': ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'],
  '中国': ['鳥取県', '島根県', '岡山県', '広島県', '山口県'],
  '四国': ['徳島県', '香川県', '愛媛県', '高知県'],
  '九州・沖縄': ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
};

function slugToPref(slug: string): string | undefined {
  const decoded = decodeURIComponent(slug);
  return prefectures.find((prefecture) => prefecture === decoded);
}

function getRegion(prefecture: string): string {
  return Object.entries(REGION_MAP).find(([, items]) => items.includes(prefecture))?.[0] ?? '';
}

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return prefectures.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prefecture = slugToPref(slug);
  if (!prefecture) return {};
  const title = `${prefecture}の補助金・助成金・給付金｜対象・目的・受付状況から探す`;
  const description = `${prefecture}で利用できる補助金・助成金・給付金などの支援制度を、地域独自の制度と全国対象の制度に分け、公式情報の確認先とともに整理しています。`;
  const url = toSiteUrl(`/prefecture/${encodeURIComponent(prefecture)}/`);
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}

export default async function PrefecturePage({ params }: Props) {
  const { slug } = await params;
  const prefecture = slugToPref(slug);
  if (!prefecture) notFound();
  const region = getRegion(prefecture);
  const grants = getGrantsByPrefecture(prefecture);
  const localGrants = grants.filter((grant) => grant.prefecture === prefecture);
  const nationalGrants = grants.filter((grant) => grant.prefecture === '全国');
  const recentlyUpdated = [...grants].sort((a, b) => (b.contentUpdatedAt ?? b.verifiedAt ?? b.publishedAt).localeCompare(a.contentUpdatedAt ?? a.verifiedAt ?? a.publishedAt)).slice(0, 4);
  const nearby = (REGION_MAP[region] ?? []).filter((item) => item !== prefecture);
  const categoryCounts = (Object.entries(CATEGORY_LABELS) as [GrantCategory, string][])
    .map(([key, label]) => ({ key, label, count: grants.filter((grant) => grant.category === key || grant.relatedCategories?.includes(key)).length }))
    .filter((item) => item.count > 0);
  const encodedPrefecture = encodeURIComponent(prefecture);
  const canonical = toSiteUrl(`/prefecture/${encodedPrefecture}/`);
  const searchOpportunities = getSearchConsoleOpportunitiesForPrefecture(prefecture, 6);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'ホーム', url: toSiteUrl('/') }, { name: '地域から探す', url: toSiteUrl('/grants/') }, { name: prefecture, url: canonical }]} />
      <CollectionJsonLd name={`${prefecture}の支援制度`} description={`${prefecture}で利用できる支援制度の一覧`} url={canonical} />
      <header className="border-b-4 border-accent bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="パンくず" className="mb-4 text-sm text-white/70"><Link href="/" className="underline underline-offset-4">ホーム</Link><span className="mx-2" aria-hidden="true">/</span><span aria-current="page">{prefecture}</span></nav>
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">{region}</span>
          <h1 className="mt-3 text-3xl font-black leading-tight">{prefecture}の補助金・助成金・給付金</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">{prefecture}独自の制度と、全国を対象とする制度を分けて掲載しています。市区町村や対象条件は制度ごとに公式情報をご確認ください。</p>
          <p className="mt-3 text-sm font-bold">公式情報の確認先がある制度：{grants.length.toLocaleString('ja-JP')}件</p>
          <p className="mt-1 text-xs text-white/70">{prefecture}独自 {localGrants.length.toLocaleString('ja-JP')}件・全国対象 {nationalGrants.length.toLocaleString('ja-JP')}件</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="rounded-2xl border border-line bg-card p-5 sm:p-6" aria-labelledby="pref-search-title">
          <h2 id="pref-search-title" className="text-xl font-black text-navy">{prefecture}で利用できる制度を絞り込む</h2>
          <form action="/grants/" method="get" role="search" className="mt-4 grid gap-3 sm:grid-cols-[1fr_220px_auto]" data-analytics-event="filter_apply" data-page-type="prefecture">
            <input type="hidden" name="pref" value={prefecture} />
            <label className="text-sm font-bold text-navy">キーワード<input name="q" type="search" placeholder="制度名、目的、対象者など" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base" /></label>
            <label className="text-sm font-bold text-navy">対象<select name="audience" defaultValue="" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base"><option value="">すべての対象</option><option value="individual">個人・家族向け</option><option value="business">事業者・団体向け</option></select></label>
            <button type="submit" className="min-h-11 self-end rounded-lg bg-navy px-5 font-bold text-white">この条件で探す</button>
          </form>
          <div className="mt-5 flex flex-wrap gap-2">{categoryCounts.map((item) => <Link key={item.key} href={`/grants/?pref=${encodedPrefecture}&cat=${item.key}`} className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-sm font-bold text-navy">{item.label}（{item.count}）</Link>)}</div>
        </section>

        <section className="mt-12" aria-labelledby="local-grants-title">
          <div className="flex flex-wrap items-end justify-between gap-3"><div className="home-section-heading mb-0"><p>都道府県・市区町村の制度</p><h2 id="local-grants-title">{prefecture}独自の制度</h2></div><Link href={`/grants/?pref=${encodedPrefecture}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">この地域の制度をすべて見る</Link></div>
          {localGrants.length ? <div className="mt-5 grid gap-4 md:grid-cols-2">{localGrants.slice(0, 24).map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div> : <p className="mt-5 rounded-xl border border-line bg-wash p-5 text-sm leading-7 text-muted">現在、{prefecture}独自の制度で公式情報の確認先がある掲載データはありません。全国対象の制度もあわせてご確認ください。</p>}
        </section>

        <section className="mt-12 border-t border-line pt-10" aria-labelledby="national-grants-title">
          <div className="home-section-heading"><p>{prefecture}からも確認できる制度</p><h2 id="national-grants-title">全国対象の制度</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{nationalGrants.slice(0, 8).map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div>
        </section>

        <section className="mt-12 border-t border-line pt-10" aria-labelledby="pref-recent-title">
          <div className="home-section-heading"><p>情報の確認日を基準に掲載</p><h2 id="pref-recent-title">最近更新された制度</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{recentlyUpdated.map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div>
        </section>

        {searchOpportunities.length > 0 ? (
          <section className="mt-12 border-t border-line pt-10" aria-labelledby="pref-search-opportunity-title">
            <div className="home-section-heading"><p>Search Consoleで表示がある地域テーマ</p><h2 id="pref-search-opportunity-title">{prefecture}でよく検索されている制度</h2></div>
            <div className="home-query-link-grid">
              {searchOpportunities.map((item) => (
                <Link key={item.label} href={item.href}>
                  <span className="home-query-link-tag">{item.intent}</span>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {nearby.length > 0 && <nav aria-label={`${region}の都道府県`} className="mt-12 rounded-2xl bg-wash p-5 sm:p-7"><h2 className="text-xl font-black text-navy">同じ地域から探す</h2><div className="mt-4 flex flex-wrap gap-2">{nearby.map((item) => <Link key={item} href={`/prefecture/${encodeURIComponent(item)}/`} className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-navy underline underline-offset-4">{item}</Link>)}</div></nav>}
      </main>
    </>
  );
}
