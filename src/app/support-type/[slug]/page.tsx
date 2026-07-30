import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GrantCard from '@/components/GrantCard';
import { BreadcrumbJsonLd, GrantCollectionJsonLd } from '@/components/JsonLd';
import { getGrantsBySupportType } from '@/lib/grants';
import { getEffectiveGrantStatus } from '@/lib/grant-status';
import { compactMetaDescription } from '@/lib/seo-metadata';
import { toSiteUrl } from '@/lib/site-url';
import { PREFECTURES, SUPPORT_TYPE_LABELS, type SupportType } from '@/lib/types';

const SEO_SUPPORT_TYPES: SupportType[] = [
  'subsidy',
  'grant',
  'benefit',
  'allowance',
  'loan',
  'scholarshipLoan',
  'reduction',
  'taxCredit',
  'insuranceBenefit',
  'discount',
  'voucher',
  'inKind',
];

const SUPPORT_TYPE_INTROS: Partial<Record<SupportType, string>> = {
  subsidy: '設備投資、創業、住宅改修、省エネなどに使える可能性がある補助金を整理しています。対象経費、補助率、交付決定前の着手可否は制度ごとに異なります。',
  grant: '雇用、研究、地域活動、福祉などに関する助成金を整理しています。支給要件や審査、実績報告の有無は公式募集要項で確認してください。',
  benefit: '子育て、生活支援、災害支援などの給付金を整理しています。対象者、申請期限、支給時期は制度ごとに異なります。',
  allowance: '児童、医療、介護、生活支援などに関する手当を整理しています。所得、世帯、年齢、居住地などの条件は公式情報で確認してください。',
  loan: '生活、教育、事業資金などに関する貸付制度を整理しています。貸付制度は原則として返済が必要です。利率、返済期間、保証条件を必ず確認してください。',
  scholarshipLoan: '進学や学びに関する奨学金貸付を整理しています。貸付型は返済が必要な場合があります。返還免除条件の有無は公式情報で確認してください。',
  reduction: '保険料、医療費、税、公共料金などの減免制度を整理しています。減免対象や申請方法は自治体・制度ごとに異なります。',
  taxCredit: '税額控除に関する制度を整理しています。適用条件、申告方法、対象期間は税務署や公式資料で確認してください。',
  insuranceBenefit: '公的保険などに関する給付制度を整理しています。支給条件、申請窓口、必要な確認資料は制度ごとに異なります。',
  discount: '公共料金、交通、施設利用などの料金割引制度を整理しています。対象者や利用方法は公式情報で確認してください。',
  voucher: '利用券、商品券、サービス券などの支援制度を整理しています。利用可能な範囲、期限、対象店舗などは公式情報で確認してください。',
  inKind: '物品、サービス、支援物資などの現物給付を整理しています。受け取り方法や対象条件は制度ごとに異なります。',
};

interface Props {
  params: Promise<{ slug: string }>;
}

function slugToSupportType(slug: string): SupportType | undefined {
  return SEO_SUPPORT_TYPES.find((supportType) => supportType === decodeURIComponent(slug));
}

export function generateStaticParams() {
  return SEO_SUPPORT_TYPES.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supportType = slugToSupportType(slug);
  if (!supportType) return {};

  const label = SUPPORT_TYPE_LABELS[supportType];
  const title = `${label}を地域・対象から探す｜補助金・助成金・給付金検索`;
  const description = compactMetaDescription(`${label}に該当する支援制度を地域と対象者から検索。受付状況、支援内容、公式情報の確認先を整理しています。`);
  const url = toSiteUrl(`/support-type/${supportType}/`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function SupportTypePage({ params }: Props) {
  const { slug } = await params;
  const supportType = slugToSupportType(slug);
  if (!supportType) notFound();

  const label = SUPPORT_TYPE_LABELS[supportType];
  const grants = await getGrantsBySupportType(supportType);
  if (grants.length === 0) notFound();

  const openGrants = grants.filter((grant) => ['open', 'closingSoon'].includes(getEffectiveGrantStatus(grant))).slice(0, 12);
  const recentlyUpdated = [...grants]
    .sort((left, right) => (right.contentUpdatedAt ?? right.verifiedAt ?? right.publishedAt).localeCompare(left.contentUpdatedAt ?? left.verifiedAt ?? left.publishedAt))
    .slice(0, 8);
  const prefectureCounts = PREFECTURES
    .filter((prefecture) => prefecture !== '全国')
    .map((prefecture) => ({ prefecture, count: grants.filter((grant) => grant.prefecture === prefecture || grant.prefecture === '全国').length }))
    .filter((item) => item.count > 0)
    .slice(0, 16);
  const canonical = toSiteUrl(`/support-type/${supportType}/`);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'ホーム', url: toSiteUrl('/') }, { name: label, url: canonical }]} />
      <GrantCollectionJsonLd
        name={`${label}の支援制度`}
        description={SUPPORT_TYPE_INTROS[supportType] ?? `${label}に該当する支援制度を整理しています。`}
        url={canonical}
        items={grants.slice(0, 24).map((grant) => ({
          name: grant.title,
          url: toSiteUrl(`/grant/${grant.slug}/`),
        }))}
      />

      <header className="border-b-4 border-accent bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="パンくず" className="mb-4 text-sm text-white/70">
            <Link href="/" className="underline underline-offset-4">ホーム</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">{label}</span>
          </nav>
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold">制度種別から探す</span>
          <h1 className="mt-3 text-3xl font-black leading-tight">{label}を地域・対象から探す</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">{SUPPORT_TYPE_INTROS[supportType]}</p>
          <p className="mt-3 text-sm font-bold">公式情報の確認先がある制度：{grants.length.toLocaleString('ja-JP')}件</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <section aria-labelledby="support-type-search-title" className="rounded-2xl border border-line bg-card p-5 sm:p-6">
          <h2 id="support-type-search-title" className="text-xl font-black text-navy">{label}を条件で絞り込む</h2>
          <form action="/grants/" method="get" role="search" className="mt-4 grid gap-3 sm:grid-cols-[1fr_220px_220px_auto]" data-analytics-event="filter_apply" data-page-type="supportType">
            <input type="hidden" name="supportType" value={supportType} />
            <label className="text-sm font-bold text-navy">
              キーワード
              <input name="q" type="search" placeholder={`${label}、地域、対象者など`} className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base" />
            </label>
            <label className="text-sm font-bold text-navy">
              都道府県
              <select name="pref" defaultValue="" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base">
                <option value="">全国</option>
                {PREFECTURES.filter((item) => item !== '全国').map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="text-sm font-bold text-navy">
              対象
              <select name="audience" defaultValue="" className="mt-1 min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base">
                <option value="">すべての対象</option>
                <option value="individual">個人・家族向け</option>
                <option value="business">事業者・団体向け</option>
              </select>
            </label>
            <button type="submit" className="min-h-11 self-end rounded-lg bg-navy px-5 font-bold text-white">この条件で探す</button>
          </form>
        </section>

        <section className="mt-12" aria-labelledby="support-type-open-title">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="home-section-heading mb-0"><p>公式情報で受付中と確認</p><h2 id="support-type-open-title">受付中の{label}</h2></div>
            <Link href={`/grants/?supportType=${supportType}&status=open`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">受付中の{label}をすべて見る</Link>
          </div>
          {openGrants.length ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">{openGrants.map((grant, index) => <GrantCard key={grant.slug} grant={grant} pageType="support_type" placement="open_grants" position={index + 1} />)}</div>
          ) : (
            <p className="mt-5 rounded-xl border border-line bg-wash p-5 text-sm leading-7 text-muted">現在、公式情報で受付中と確認できる{label}はありません。受付状況が不明な制度は受付中として扱っていません。</p>
          )}
        </section>

        <section className="mt-12 border-t border-line pt-10" aria-labelledby="support-type-recent-title">
          <div className="home-section-heading"><p>情報の確認日を基準に掲載</p><h2 id="support-type-recent-title">最近更新された{label}</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{recentlyUpdated.map((grant, index) => <GrantCard key={grant.slug} grant={grant} pageType="support_type" placement="recently_updated" position={index + 1} />)}</div>
        </section>

        <nav aria-label={`${label}を地域から探す`} className="mt-12 rounded-2xl bg-wash p-5 sm:p-7">
          <h2 className="text-xl font-black text-navy">地域別に{label}を探す</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {prefectureCounts.map((item) => (
              <Link key={item.prefecture} href={`/grants/?supportType=${supportType}&pref=${encodeURIComponent(item.prefecture)}`} className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-navy underline underline-offset-4">
                {item.prefecture}（{item.count.toLocaleString('ja-JP')}）
              </Link>
            ))}
          </div>
        </nav>
      </main>
    </>
  );
}
