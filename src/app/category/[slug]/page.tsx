import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GrantCard from '@/components/GrantCard';
import { BreadcrumbJsonLd, CollectionJsonLd } from '@/components/JsonLd';
import { getSearchConsoleOpportunitiesForCategory } from '@/config/search-console-opportunities';
import { getGrantsByCategory } from '@/lib/grants';
import { getEffectiveGrantStatus } from '@/lib/grant-status';
import { compactMetaDescription } from '@/lib/seo-metadata';
import { toSiteUrl } from '@/lib/site-url';
import { CATEGORY_COLORS, CATEGORY_LABELS, PREFECTURES, type Audience, type Grant, type GrantCategory, type Purpose } from '@/lib/types';
import { getCategoryVisual } from '@/lib/visual-assets';

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

const CATEGORY_SEO_GUIDES: Record<GrantCategory, { searchIntent: string; checkpoints: string[]; relatedQueries: string[] }> = {
  childcare: {
    searchIntent: '子育て・出産の制度は、子どもの年齢、世帯状況、居住地で対象が変わります。まず地域を選び、児童手当、医療費助成、出産、保育、ひとり親支援など目的に近い制度を確認してください。',
    checkpoints: ['子どもの年齢・出生予定日・世帯状況', '所得制限や住民登録の条件', '申請期限、支給時期、必要な公式書類'],
    relatedQueries: ['子育て 給付金', '出産 助成金', '子ども 医療費 助成', 'ひとり親 支援制度'],
  },
  housing: {
    searchIntent: '住宅・リフォームの制度は、工事着手前の申請が必要なものがあります。住宅取得、耐震改修、省エネ、移住、家賃支援など、目的と地域を分けて確認してください。',
    checkpoints: ['対象住宅の所在地、築年数、所有者条件', '契約・着工前に申請が必要か', '対象工事、補助率、上限額、施工業者の条件'],
    relatedQueries: ['リフォーム 補助金', '住宅 補助金', '省エネ 補助金', '移住 支援金'],
  },
  medical: {
    searchIntent: '医療・健康の制度は、対象となる治療、年齢、所得、医師の判断など制度ごとに条件が異なります。掲載内容だけで判断せず、公式窓口で確認してください。',
    checkpoints: ['対象となる治療・検査・医療費の範囲', '年齢、所得、居住地、保険加入の条件', '申請前後どちらで手続きする制度か'],
    relatedQueries: ['医療費 助成', '不妊治療 助成金', '検診 補助金', '健康 支援制度'],
  },
  education: {
    searchIntent: '教育・資格の制度は、給付型、貸付型、授業料減免、資格取得支援など種類が分かれます。返済が必要な制度かどうかを必ず確認してください。',
    checkpoints: ['給付型か貸付型か', '学校・講座・資格の対象範囲', '成績、所得、居住地、申請期限'],
    relatedQueries: ['奨学金 給付金', '資格取得 補助金', '学費 支援', '教育 助成金'],
  },
  employment: {
    searchIntent: '就職・雇用・創業の制度は、個人向けの就職支援と事業者向けの雇用助成が混在します。対象者を分けて検索すると見つけやすくなります。',
    checkpoints: ['個人向けか事業者向けか', '雇用、研修、創業、設備投資など対象経費', '公募期間、実績報告、交付決定前の着手可否'],
    relatedQueries: ['創業 補助金', '雇用 助成金', '転職 支援金', '人材育成 助成金'],
  },
  nursing: {
    searchIntent: '介護・福祉の制度は、高齢者、障害のある方、介護する家族など対象が細かく分かれます。地域の窓口と公式情報を優先して確認してください。',
    checkpoints: ['本人・家族・介護者のどちらが対象か', '要介護認定、障害者手帳、年齢などの条件', '利用券、給付、減免など支援の形'],
    relatedQueries: ['介護 助成金', '高齢者 支援制度', '障害者 補助金', '福祉 給付金'],
  },
  living: {
    searchIntent: '生活支援の制度は、家計、住まい、医療、子育てなど複数の目的にまたがります。緊急性が高い場合は、自治体の相談窓口もあわせて確認してください。',
    checkpoints: ['世帯収入、家族構成、住民登録の条件', '給付、貸付、減免のどれに当たるか', '申請期限と相談窓口'],
    relatedQueries: ['生活支援 給付金', '家計 支援制度', '低所得 支援金', '減免制度'],
  },
  disaster: {
    searchIntent: '災害支援の制度は、対象地域、被害状況、罹災証明などが重要です。受付期間が短い場合があるため、公式情報と窓口を早めに確認してください。',
    checkpoints: ['対象災害、対象地域、被害区分', '罹災証明や被害確認の必要性', '生活再建、住宅、事業再建のどれに該当するか'],
    relatedQueries: ['災害 支援金', '被災者 給付金', '住宅 再建 補助金', '事業再建 補助金'],
  },
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
  const title = `${label}の補助金・助成金・給付金｜対象・地域・受付状況から探す`;
  const description = compactMetaDescription(`${label}に関する補助金・助成金・給付金を地域と対象者から検索。受付状況、支援内容、公式情報の確認先を整理しています。`);
  return { title, description, alternates: { canonical: toSiteUrl(`/category/${slug}/`) }, openGraph: { title, description, url: toSiteUrl(`/category/${slug}/`) } };
}

function topAudiences(grants: Grant[]): Audience[] {
  const counts = new Map<Audience, number>();
  grants.forEach((grant) => grant.audiences?.forEach((audience) => counts.set(audience, (counts.get(audience) ?? 0) + 1)));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([audience]) => audience);
}

function relatedPurposes(grants: Grant[]): Purpose[] {
  const counts = new Map<Purpose, number>();
  grants.forEach((grant) => grant.purposes?.forEach((purpose) => counts.set(purpose, (counts.get(purpose) ?? 0) + 1)));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([purpose]) => purpose);
}

function topPrefectures(grants: Grant[]) {
  return PREFECTURES
    .filter((prefecture) => prefecture !== '全国')
    .map((prefecture) => ({ prefecture, count: grants.filter((grant) => grant.prefecture === prefecture || grant.prefecture === '全国').length }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!validCategories.includes(slug)) notFound();
  const category = slug as GrantCategory;
  const label = CATEGORY_LABELS[category];
  const grants = await getGrantsByCategory(category);
  const openGrants = grants.filter((grant) => ['open', 'closingSoon'].includes(getEffectiveGrantStatus(grant))).slice(0, 12);
  const recentlyUpdated = [...grants].sort((a, b) => (b.contentUpdatedAt ?? b.verifiedAt ?? b.publishedAt).localeCompare(a.contentUpdatedAt ?? a.verifiedAt ?? a.publishedAt)).slice(0, 4);
  const audiences = topAudiences(grants);
  const purposes = relatedPurposes(grants);
  const prefectures = topPrefectures(grants);
  const guide = CATEGORY_SEO_GUIDES[category];
  const canonical = toSiteUrl(`/category/${slug}/`);
  const searchOpportunities = getSearchConsoleOpportunitiesForCategory(category, 6);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'ホーム', url: toSiteUrl('/') }, { name: label, url: canonical }]} />
      <CollectionJsonLd name={`${label}の支援制度`} description={CATEGORY_INTROS[category]} url={canonical} />
      <header className="border-b-4 border-accent bg-navy py-10 text-white sm:py-14">
        <div className="category-hero mx-auto max-w-6xl px-4 sm:px-6">
          <div>
            <nav aria-label="パンくず" className="mb-4 text-sm text-white/70"><Link href="/" className="underline underline-offset-4">ホーム</Link><span className="mx-2" aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>
            <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${CATEGORY_COLORS[category]}`}>{label}</span>
            <h1 className="mt-3 text-3xl font-black leading-tight">{label}の補助金・助成金・給付金</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">{CATEGORY_INTROS[category]}</p>
            <p className="mt-3 text-sm font-bold text-white">公式情報の確認先がある制度：{grants.length.toLocaleString('ja-JP')}件</p>
          </div>
          <div className="category-hero-visual" aria-hidden="true"><Image src={getCategoryVisual(category)} alt="" width={256} height={256} priority sizes="(max-width: 640px) 96px, 180px" /></div>
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

        {searchOpportunities.length > 0 ? (
          <section className="mt-12 border-t border-line pt-10" aria-labelledby="category-search-opportunity-title">
            <div className="home-section-heading"><p>Search Consoleで表示があるテーマ</p><h2 id="category-search-opportunity-title">よく検索されている{label}の制度</h2></div>
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

        <section className="mt-12 rounded-2xl bg-wash p-5 sm:p-7" aria-labelledby="related-purpose-title">
          <h2 id="related-purpose-title" className="text-xl font-black text-navy">関連する目的から探す</h2>
          <div className="mt-4 flex flex-wrap gap-2">{purposes.map((purpose) => <Link key={purpose} href={`/grants/?cat=${category}&purpose=${purpose}`} className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-navy underline underline-offset-4">{PURPOSE_LABELS[purpose]}</Link>)}</div>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]" aria-labelledby="category-guide-title">
          <div className="rounded-2xl border border-line bg-card p-5 sm:p-7">
            <p className="text-sm font-black text-accent">探し方のポイント</p>
            <h2 id="category-guide-title" className="mt-2 text-2xl font-black text-navy">{label}の制度を探す前に確認すること</h2>
            <p className="mt-4 leading-8 text-muted">{guide.searchIntent}</p>
            <ul className="mt-5 space-y-3">
              {guide.checkpoints.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-ink">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-muted">掲載情報だけで対象可否は確定しません。申請前に、実施機関の公式募集要項、受付状況、問い合わせ先を確認してください。</p>
          </div>
          <nav aria-label={`${label}の関連検索`} className="rounded-2xl border border-line bg-card p-5 sm:p-7">
            <h2 className="text-xl font-black text-navy">よく探される関連テーマ</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {guide.relatedQueries.map((query) => (
                <Link key={query} href={`/grants/?cat=${category}&q=${encodeURIComponent(query)}`} className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-navy underline underline-offset-4">{query}</Link>
              ))}
            </div>
          </nav>
        </section>

        <nav aria-label={`${label}を地域から探す`} className="mt-12 rounded-2xl bg-wash p-5 sm:p-7">
          <h2 className="text-xl font-black text-navy">地域別に{label}の制度を探す</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {prefectures.map((item) => (
              <Link key={item.prefecture} href={`/grants/?cat=${category}&pref=${encodeURIComponent(item.prefecture)}`} className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-navy underline underline-offset-4">
                {item.prefecture}（{item.count.toLocaleString('ja-JP')}）
              </Link>
            ))}
          </div>
        </nav>
      </main>
    </>
  );
}
