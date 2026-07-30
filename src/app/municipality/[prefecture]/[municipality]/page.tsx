import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DisplayAdSlot from '@/components/DisplayAdSlot';
import GrantCard from '@/components/GrantCard';
import { BreadcrumbJsonLd, GrantCollectionJsonLd } from '@/components/JsonLd';
import {
  MIN_INDEXABLE_MUNICIPALITY_GRANTS,
  getGrantsByMunicipality,
  getMunicipalityGroups,
  getMunicipalitiesForPrefecture,
  isIndexableMunicipalityGroup,
} from '@/lib/grants';
import { GRANT_STATUS_LABELS, getEffectiveGrantStatus } from '@/lib/grant-status';
import { municipalityMeta } from '@/lib/seo-metadata';
import { toSiteUrl } from '@/lib/site-url';
import { CATEGORY_LABELS, PREFECTURES, type GrantCategory } from '@/lib/types';

interface Props {
  params: Promise<{ prefecture: string; municipality: string }>;
}

function decodeSegment(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

const prefectures = PREFECTURES.filter((prefecture) => prefecture !== '全国');

function slugToPrefecture(slug: string): string | undefined {
  const decoded = decodeURIComponent(slug);
  return prefectures.find((prefecture) => prefecture === decoded);
}

export async function generateStaticParams() {
  return (await getMunicipalityGroups()).map((group) => ({
    prefecture: group.prefecture,
    municipality: group.municipality,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prefecture: prefSlug, municipality: municipalitySlug } = await params;
  const prefecture = slugToPrefecture(prefSlug);
  const municipality = decodeSegment(municipalitySlug);
  if (!prefecture || !municipality) return {};

  const grants = await getGrantsByMunicipality(prefecture, municipality);
  if (grants.length === 0) return {};
  const indexable = grants.length >= MIN_INDEXABLE_MUNICIPALITY_GRANTS;
  const openCount = grants.filter((grant) => ['open', 'closingSoon'].includes(getEffectiveGrantStatus(grant))).length;
  const latestCheckedAt = grants
    .map((grant) => grant.verifiedAt)
    .filter((value): value is string => Boolean(value))
    .sort((left, right) => right.localeCompare(left))[0] ?? null;

  const { title, description } = municipalityMeta({
    prefecture,
    municipality,
    officialLinkedCount: grants.length,
    openCount,
    latestCheckedAt,
  });
  const canonical = toSiteUrl(`/municipality/${encodeURIComponent(prefecture)}/${encodeURIComponent(municipality)}/`);
  return {
    title,
    description,
    robots: indexable ? undefined : { index: false, follow: true },
    alternates: { canonical },
    openGraph: { title, description, url: canonical },
  };
}

export default async function MunicipalityPage({ params }: Props) {
  const { prefecture: prefSlug, municipality: municipalitySlug } = await params;
  const prefecture = slugToPrefecture(prefSlug);
  const municipality = decodeSegment(municipalitySlug);
  if (!prefecture || !municipality) notFound();

  const grants = await getGrantsByMunicipality(prefecture, municipality);
  if (grants.length === 0) notFound();

  const openGrantCandidates = grants.filter((grant) => ['open', 'closingSoon'].includes(getEffectiveGrantStatus(grant)));
  const openGrants = openGrantCandidates.slice(0, 12);
  const latestCheckedAt = grants
    .map((grant) => grant.verifiedAt)
    .filter((value): value is string => Boolean(value))
    .sort((left, right) => right.localeCompare(left))[0] ?? null;
  const latestCheckedLabel = latestCheckedAt
    ? new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(`${latestCheckedAt}T00:00:00+09:00`))
    : null;

  const recentlyUpdated = [...grants]
    .sort((left, right) => (right.verifiedAt ?? right.contentUpdatedAt ?? right.publishedAt)
      .localeCompare(left.verifiedAt ?? left.contentUpdatedAt ?? left.publishedAt))
    .slice(0, 4);

  const categoryCounts = (Object.entries(CATEGORY_LABELS) as [GrantCategory, string][])
    .map(([key, label]) => ({ key, label, count: grants.filter((grant) => grant.category === key || grant.relatedCategories?.includes(key)).length }))
    .filter((item) => item.count > 0);

  const neighboringMunicipalities = (await getMunicipalitiesForPrefecture(prefecture))
    .filter(isIndexableMunicipalityGroup)
    .filter((item) => item.municipality !== municipality)
    .slice(0, 12);

  const encodedPrefecture = encodeURIComponent(prefecture);
  const encodedMunicipality = encodeURIComponent(municipality);
  const canonical = toSiteUrl(`/municipality/${encodedPrefecture}/${encodedMunicipality}/`);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: toSiteUrl('/') },
        { name: '地域から探す', url: toSiteUrl('/grants/') },
        { name: prefecture, url: toSiteUrl(`/prefecture/${encodedPrefecture}/`) },
        { name: municipality, url: canonical },
      ]} />
      <GrantCollectionJsonLd
        name={`${prefecture}${municipality}の支援制度`}
        description={`${prefecture}・${municipality}の補助金制度を掲載しています`}
        url={canonical}
        items={grants.slice(0, 24).map((grant) => ({
          name: grant.title,
          url: toSiteUrl(`/grant/${grant.slug}/`),
        }))}
      />

      <header className="border-b-4 border-accent bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="パンくず" className="mb-4 text-sm text-white/70"><Link href="/" className="underline underline-offset-4">ホーム</Link><span className="mx-2" aria-hidden="true">/</span><Link href="/grants/" className="underline underline-offset-4">制度を探す</Link><span className="mx-2" aria-hidden="true">/</span><Link href={`/prefecture/${encodedPrefecture}/`} className="underline underline-offset-4">{prefecture}</Link><span className="mx-2" aria-hidden="true">/</span><span aria-current="page">{municipality}</span></nav>
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">市区町村から探す</span>
          <h1 className="mt-3 text-3xl font-black leading-tight">{municipality}の補助金・助成金・給付金</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">{municipality}で申請対象となる制度を、制度種別・対象・カテゴリ・受付状況で確認できます。公開制度は公式情報の確認先を持つものを優先して掲載しています。</p>
          <p className="mt-3 text-sm font-bold">公式情報の確認先がある制度：{grants.length.toLocaleString('ja-JP')}件</p>
          <p className="mt-1 text-xs text-white/70">
            {openGrantCandidates.length > 0 ? `受付中：${openGrantCandidates.length.toLocaleString('ja-JP')}件` : '受付中と確認できる制度はありません'}
            {latestCheckedLabel ? `・公式情報の最終確認日：${latestCheckedLabel}` : ''}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="rounded-2xl border border-line bg-card p-5 sm:p-6" aria-labelledby="municipality-filter-title">
          <h2 id="municipality-filter-title" className="text-xl font-black text-navy">{prefecture}{municipality}で使えそうな制度を探す</h2>
          <form action="/grants/" method="get" role="search" data-analytics-event="filter_apply" data-page-type="municipality" className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_180px_180px_auto]">
            <input type="hidden" name="pref" value={prefecture} />
            <input type="hidden" name="municipality" value={municipality} />
            <label className="text-sm font-bold text-navy" htmlFor="municipality-q">キーワード<input id="municipality-q" name="q" type="search" placeholder="制度名、対象者など" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base" /></label>
            <label className="text-sm font-bold text-navy">対象<select name="audience" defaultValue="" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base"><option value="">すべての対象</option><option value="individual">個人・家族向け</option><option value="business">事業者・団体向け</option></select></label>
            <label className="text-sm font-bold text-navy">カテゴリ<select name="cat" defaultValue="" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base"><option value="">すべてのカテゴリ</option>{Object.entries(CATEGORY_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
            <button type="submit" className="min-h-11 self-end rounded-lg bg-navy px-5 font-bold text-white">この条件で探す</button>
          </form>
        </section>

        <DisplayAdSlot placement="list" format="horizontal" className="listing-adsense-slot mt-8" />

        <section className="mt-12" aria-labelledby="municipality-open-title">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="home-section-heading mb-0"><p>受付中</p><h2 id="municipality-open-title">受付中の{municipality}制度</h2></div>
            <Link href={`/grants/?pref=${encodedPrefecture}&municipality=${encodeURIComponent(municipality)}&status=open`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">受付中制度をすべて見る</Link>
          </div>
          {openGrants.length ? <div className="mt-5 grid gap-4 md:grid-cols-2">{openGrants.slice(0, 12).map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div> : <p className="mt-5 rounded-xl border border-line bg-wash p-5 text-sm leading-7 text-muted">現在、{municipality}での受付中と確認できる制度はありません。公式情報の期限・更新日により状況は変わるため、再検索してください。</p>}
        </section>

        <section className="mt-12 border-t border-line pt-10" aria-labelledby="municipality-all-title">
          <div className="home-section-heading"><p>{prefecture}・{municipality}を確認</p><h2 id="municipality-all-title">全制度</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{grants.slice(0, 24).map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div>
        </section>

        <DisplayAdSlot placement="footer" format="horizontal" className="listing-adsense-slot mt-10" />

        <section className="mt-12 border-t border-line pt-10" aria-labelledby="municipality-recent-title">
          <div className="home-section-heading"><p>情報の確認日を基準に掲載</p><h2 id="municipality-recent-title">最近更新された制度</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{recentlyUpdated.map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div>
        </section>

        {categoryCounts.length > 0 ? (
          <section className="mt-12 rounded-2xl bg-wash p-5 sm:p-7" aria-labelledby="municipality-categories-title">
            <h2 id="municipality-categories-title" className="text-xl font-black text-navy">カテゴリで絞る</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {categoryCounts.map((item) => (
                <Link
                  key={item.key}
                  href={`/grants/?pref=${encodedPrefecture}&municipality=${encodeURIComponent(municipality)}&cat=${item.key}`}
                  className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-navy underline underline-offset-4"
                >
                  {item.label}（{item.count.toLocaleString('ja-JP')}）
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {neighboringMunicipalities.length > 0 ? (
          <section className="mt-12 rounded-2xl bg-card p-5 sm:p-7" aria-labelledby="municipality-neighbor-title">
            <h2 id="municipality-neighbor-title" className="text-xl font-black text-navy">{prefecture}のほかの市区町村</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {neighboringMunicipalities.map((item) => (
                <Link
                  key={`${item.prefecture}:${item.municipality}`}
                  href={`/municipality/${encodeURIComponent(item.prefecture)}/${encodeURIComponent(item.municipality)}/`}
                  className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-navy underline underline-offset-4"
                >
                  {item.municipality}（{item.count.toLocaleString('ja-JP')}）
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <nav className="mt-12 rounded-2xl bg-wash p-5 sm:p-7" aria-label={`${municipality}を含む都道府県検索`}>
          <h2 className="text-lg font-black text-navy">同じ都道府県の制度をさらに探す</h2>
          <p className="mt-3"><Link href={`/prefecture/${encodedPrefecture}/`} className="min-h-11 inline-flex items-center font-bold text-navy underline underline-offset-4">{prefecture}の制度一覧へ</Link></p>
        </nav>

        <nav aria-label="表示ステータスの確認" className="mt-8 rounded-xl border border-line bg-white p-5">
          <h2 className="text-lg font-black text-navy">受付状況の見方</h2>
          <p className="mt-2 text-sm text-muted">このページに出ている制度の最新表示は公式確認情報ベースです。</p>
          <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted sm:grid-cols-2">
            {Object.entries(GRANT_STATUS_LABELS).map(([key, label]) => <li key={key}><span className="font-bold text-ink">{label}</span>：{key === 'open' ? '受付中' : key === 'closed' ? '受付終了' : '期間によっては確認必須'}</li>)}
          </ul>
        </nav>
      </main>
    </>
  );
}
