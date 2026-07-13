import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GrantCard from '@/components/GrantCard';
import { BreadcrumbJsonLd, CollectionJsonLd } from '@/components/JsonLd';
import { getGrantsByCategory } from '@/lib/grants';
import { getEffectiveGrantStatus } from '@/lib/grant-status';
import { toSiteUrl } from '@/lib/site-url';
import { CATEGORY_COLORS, CATEGORY_LABELS, PREFECTURES, type Audience, type GrantCategory, type Purpose } from '@/lib/types';

const validCategories = Object.keys(CATEGORY_LABELS);

const CATEGORY_INTROS: Record<GrantCategory, string> = {
  childcare: '妊娠・出産、子育て、保育などに関する制度を整理しています。世帯、子どもの年齢、居住地などの条件は公式情報で確認してください。',
  housing: '住宅取得、改修、家賃、移住など住まいに関する制度を整理しています。対象住宅や工事着手時期などの条件にご注意ください。',
  medical: '医療費、検診、治療など健康に関する制度を整理しています。対象となる治療や自己負担の条件は制度ごとに異なります。',
  education: '就学、奨学金、資格取得など学びに関する制度を整理しています。貸付制度には返済が必要な場合があります。',
  employment: '就職、雇用、創業など仕事に関する制度を整理しています。個人向けと事業者向けを分けてご確認ください。',
  nursing: '高齢者、障害のある方、介護する家族などを支える制度を整理しています。利用条件や窓口は自治体ごとに異なります。',
  living: '日々の暮らしや家計を支える制度を整理しています。緊急の場合は、掲載情報だけで判断せず自治体の相談窓口へお問い合わせください。',
  disaster: '災害による被害からの生活・事業再建を支える制度を整理しています。対象地域と受付期間を公式情報でご確認ください。',
};

const AUDIENCE_LABELS: Record<Audience, string> = {
  individual: '個人', family: '家族・世帯', student: '学生', senior: '高齢者', personWithDisability: '障害のある方', jobSeeker: '求職者',
  soleProprietor: '個人事業主', business: '事業者', nonprofit: '非営利団体', researcher: '研究者', localOrganization: '地域団体', other: 'その他',
};

const PURPOSE_LABELS: Record<Purpose, string> = {
  childcare: '子育て', housing: '住まい', medical: '医療・健康', education: '教育・学び', employment: '就職・雇用', startup: '創業',
  businessGrowth: '事業成長', digitalTransformation: 'デジタル化', energySaving: '省エネ', wageIncrease: '賃上げ', welfare: '福祉・介護',
  disaster: '災害支援', livingSupport: '生活支援', regionalRevitalization: '地域活性化', research: '研究', other: 'その他',
};

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return validCategories.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!validCategories.includes(slug)) return {};
  const label = CATEGORY_LABELS[slug as GrantCategory];
  const title = `${label}の支援制度｜対象・地域・受付状況から探す`;
  const description = `${label}に関する支援制度を、主な対象、地域、支援内容、受付状況、公式情報の確認先とともに整理しています。`;
  return { title, description, alternates: { canonical: toSiteUrl(`/category/${slug}/`) }, openGraph: { title, description, url: toSiteUrl(`/category/${slug}/`) } };
}

function topAudiences(grants: ReturnType<typeof getGrantsByCategory>): Audience[] {
  const counts = new Map<Audience, number>();
  grants.forEach((grant) => grant.audiences?.forEach((audience) => counts.set(audience, (counts.get(audience) ?? 0) + 1)));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([audience]) => audience);
}

function relatedPurposes(grants: ReturnType<typeof getGrantsByCategory>): Purpose[] {
  const counts = new Map<Purpose, number>();
  grants.forEach((grant) => grant.purposes?.forEach((purpose) => counts.set(purpose, (counts.get(purpose) ?? 0) + 1)));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([purpose]) => purpose);
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!validCategories.includes(slug)) notFound();
  const category = slug as GrantCategory;
  const label = CATEGORY_LABELS[category];
  const grants = getGrantsByCategory(category);
  const openGrants = grants.filter((grant) => ['open', 'closingSoon'].includes(getEffectiveGrantStatus(grant))).slice(0, 12);
  const recentlyUpdated = [...grants].sort((a, b) => (b.contentUpdatedAt ?? b.verifiedAt ?? b.publishedAt).localeCompare(a.contentUpdatedAt ?? a.verifiedAt ?? a.publishedAt)).slice(0, 4);
  const audiences = topAudiences(grants);
  const purposes = relatedPurposes(grants);
  const canonical = toSiteUrl(`/category/${slug}/`);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'ホーム', url: toSiteUrl('/') }, { name: label, url: canonical }]} />
      <CollectionJsonLd name={`${label}の支援制度`} description={CATEGORY_INTROS[category]} url={canonical} />
      <header className="border-b-4 border-accent bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="パンくず" className="mb-4 text-sm text-white/70"><Link href="/" className="underline underline-offset-4">ホーム</Link><span className="mx-2" aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>
          <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${CATEGORY_COLORS[category]}`}>{label}</span>
          <h1 className="mt-3 text-3xl font-black leading-tight">{label}の支援制度</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">{CATEGORY_INTROS[category]}</p>
          <p className="mt-3 text-sm font-bold text-white">公式情報の確認先がある制度：{grants.length.toLocaleString('ja-JP')}件</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <section aria-labelledby="category-search-title" className="rounded-2xl border border-line bg-card p-5 sm:p-6">
          <h2 id="category-search-title" className="text-xl font-black text-navy">{label}の制度を条件で絞り込む</h2>
          <form action="/grants/" method="get" className="mt-4 grid gap-3 sm:grid-cols-[1fr_220px_auto]" role="search" data-analytics-event="filter_apply" data-page-type="category" data-purpose={category}>
            <input type="hidden" name="cat" value={category} />
            <label className="text-sm font-bold text-navy">キーワード<input name="q" type="search" placeholder="制度名、対象者など" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base" /></label>
            <label className="text-sm font-bold text-navy">都道府県<select name="pref" defaultValue="" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base"><option value="">全国</option>{PREFECTURES.filter((item) => item !== '全国').map((item) => <option key={item}>{item}</option>)}</select></label>
            <button type="submit" className="min-h-11 self-end rounded-lg bg-navy px-5 font-bold text-white">この条件で探す</button>
          </form>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="主な対象者">{audiences.map((audience) => <Link key={audience} href={`/grants/?cat=${category}&audience=${['soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization'].includes(audience) ? 'business' : 'individual'}`} className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-sm font-bold text-navy">{AUDIENCE_LABELS[audience]}</Link>)}</div>
        </section>

        <section className="mt-12" aria-labelledby="open-grants-title">
          <div className="flex flex-wrap items-end justify-between gap-3"><div className="home-section-heading mb-0"><p>公式情報で受付中と確認</p><h2 id="open-grants-title">受付中の制度</h2></div><Link href={`/grants/?cat=${category}&status=open`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">受付中の制度をすべて見る</Link></div>
          {openGrants.length ? <div className="mt-5 grid gap-4 md:grid-cols-2">{openGrants.map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div> : <p className="mt-5 rounded-xl border border-line bg-wash p-5 text-sm leading-7 text-muted">現在、公式情報で受付中と確認できる制度はありません。受付状況が不明な制度は受付中として扱っていません。</p>}
        </section>

        <section className="mt-12 border-t border-line pt-10" aria-labelledby="category-recent-title">
          <div className="home-section-heading"><p>情報の確認日を基準に掲載</p><h2 id="category-recent-title">最近更新された制度</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{recentlyUpdated.map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div>
        </section>

        <section className="mt-12 rounded-2xl bg-wash p-5 sm:p-7" aria-labelledby="related-purpose-title">
          <h2 id="related-purpose-title" className="text-xl font-black text-navy">関連する目的から探す</h2>
          <div className="mt-4 flex flex-wrap gap-2">{purposes.map((purpose) => <Link key={purpose} href={`/grants/?cat=${category}&purpose=${purpose}`} className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-navy underline underline-offset-4">{PURPOSE_LABELS[purpose]}</Link>)}</div>
        </section>
      </main>
    </>
  );
}
