import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GrantCard from '@/components/GrantCard';
import AffiliateRecommendation from '@/components/AffiliateRecommendation';
import GrantDecisionSummary from '@/components/GrantDecisionSummary';
import { BreadcrumbJsonLd, GrantJsonLd } from '@/components/JsonLd';
import OfficialCheckpoints from '@/components/OfficialCheckpoints';
import OfficialSourcePanel from '@/components/OfficialSourcePanel';
import {
  getGrantBySlug,
  getGrantSourceStatus,
  getOfficialLinkedGrants,
  getRecentlyUpdatedGrants,
  getRelatedGrants,
  hasOfficialSource,
  isGrantExpired,
} from '@/lib/grants';
import { splitEligibilityText } from '@/lib/grant-presentation';
import { getValidOfficialSourceUrls } from '@/lib/grant-source';
import { groupGrantSections, type GrantSectionGroup } from '@/lib/grant-sections';
import { getEffectiveGrantStatus, getOfficialCtaLabel, isRepayableSupport } from '@/lib/grant-status';
import { toSiteUrl } from '@/lib/site-url';
import { getEligibleAffiliateOffers } from '@/lib/monetization';
import { AFFILIATE_OFFERS } from '@/config/affiliate-offers';
import { CATEGORY_LABELS, SUPPORT_TYPE_LABELS, type Section } from '@/lib/types';

interface Props { params: Promise<{ slug: string }> }

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  const recentGrantSlugs = new Set(getRecentlyUpdatedGrants(240).map((grant) => grant.slug));
  return getOfficialLinkedGrants()
    .filter((grant) => grant.indexStatus !== 'noindex' && grant.contentStatus === 'published' && recentGrantSlugs.has(grant.slug))
    .map((grant) => ({ slug: grant.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const grant = getGrantBySlug(slug);
  if (!grant) return {};
  const sourceStatus = getGrantSourceStatus(grant);
  const expired = isGrantExpired(grant);
  const title = expired ? `${grant.title}｜受付状況・次回募集の確認先` : `${grant.title}｜対象・金額・申請期限`;
  const eligibility = (grant.eligibility || '公式情報で確認').replace(/[。．]+$/u, '');
  const deadline = (grant.applicationPeriod || '申請期限は公式情報で確認').replace(/[。．]+$/u, '');
  const checked = !hasOfficialSource(grant)
    ? '公式情報の確認先は未登録'
    : grant.verifiedAt
      ? `公式情報確認日${grant.verifiedAt}`
      : '公式情報の確認先を掲載';
  const description = (!hasOfficialSource(grant)
    ? `${grant.title}（${grant.organization}）。公式情報の確認先は未登録です。掲載内容だけで制度の存在や対象可否を判断せず、実施機関へご確認ください。`
    : `${grant.title}（${grant.organization}）の主な対象は${eligibility}。支援内容は${grant.maxAmount}、${deadline}。${checked}。`
  ).slice(0, 140);
  return {
    title,
    description,
    openGraph: { title, description, url: toSiteUrl(`/grant/${slug}/`), type: 'article' },
    alternates: { canonical: toSiteUrl(`/grant/${slug}/`) },
    robots: sourceStatus.level === 'unverified' || expired || grant.indexStatus === 'noindex' ? { index: false, follow: true } : undefined,
  };
}

function SourceSections({ sections }: { sections: Section[] }) {
  return <>{sections.map((section, index) => <div key={`${section.heading}-${index}`} className="mt-5"><h3 className="text-lg font-black text-navy">{section.heading}</h3><div className="mt-2" dangerouslySetInnerHTML={{ __html: section.content }} /></div>)}</>;
}

function DetailSection({ id, title, sections, children }: { id: string; title: string; sections?: Section[]; children?: React.ReactNode }) {
  if (!children && !sections?.length) return null;
  return <section id={id} aria-labelledby={`${id}-title`}><h2 id={`${id}-title`}>{title}</h2>{children}{sections?.length ? <SourceSections sections={sections} /> : null}</section>;
}

export default async function GrantDetailPage({ params }: Props) {
  const { slug } = await params;
  const grant = getGrantBySlug(slug);
  if (!grant) notFound();
  const related = getRelatedGrants(grant, 4);
  const sourceStatus = getGrantSourceStatus(grant);
  const expired = isGrantExpired(grant);
  const status = getEffectiveGrantStatus(grant);
  const sectionGroups = groupGrantSections(grant.sections);
  const eligibilityItems = splitEligibilityText(grant.eligibility);
  const purpose = grant.primaryPurpose;
  const businessAudience = ['soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization'].includes(grant.primaryAudience ?? '');
  const affiliateOffers = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
    pageType: 'grant',
    audiences: grant.audiences ?? [],
    purposes: grant.purposes ?? [],
    intents: grant.affiliateIntents ?? [],
    monetizationAllowed: grant.monetizationAllowed ?? false,
    status,
    placementMode: 'allGrantDetails',
    limit: 1,
  });
  const primaryOfficialUrl = getValidOfficialSourceUrls(grant)[0];

  const orderedGroups: GrantSectionGroup[] = ['overview', 'eligibility', 'amount', 'period', 'costs', 'method', 'documents', 'contact'];
  const classifiedCount = orderedGroups.reduce((count, group) => count + sectionGroups[group].length, 0);

  return (
    <>
      <GrantJsonLd grant={grant} />
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: toSiteUrl('/') },
        { name: CATEGORY_LABELS[grant.category], url: toSiteUrl(`/category/${grant.category}/`) },
        { name: grant.title, url: toSiteUrl(`/grant/${slug}/`) },
      ]} />

      <div className={`grant-detail-page${affiliateOffers.length > 0 ? ' has-affiliate' : ''}`}>
        <nav className="grant-breadcrumb" aria-label="パンくずリスト"><Link href="/">ホーム</Link><span aria-hidden="true">/</span><Link href={`/category/${grant.category}/`}>{CATEGORY_LABELS[grant.category]}</Link><span aria-hidden="true">/</span><span aria-current="page">{grant.title}</span></nav>

        <div className="grant-detail-layout">
          <article className="grant-detail-article">
          <GrantDecisionSummary grant={grant} expired={expired} sourceLabel={sourceStatus.label} />

          <OfficialSourcePanel
            officialUrl={grant.officialUrl}
            sourceUrls={grant.sourceUrls}
            sourceName={grant.sourceName}
            verifiedAt={grant.verifiedAt}
            humanReviewedAt={grant.humanReviewedAt}
            statusLabel={sourceStatus.label}
            statusDescription={sourceStatus.description}
            statusLevel={sourceStatus.level}
            grantId={grant.slug}
            audience={grant.primaryAudience}
            purpose={grant.primaryPurpose}
          />

          <div className="article-content grant-article-content">
            <DetailSection id="overview" title="制度の概要" sections={sectionGroups.overview}>
              <p>{grant.description}</p>
            </DetailSection>

            <DetailSection id="eligibility" title="主な対象条件" sections={sectionGroups.eligibility}>
              {eligibilityItems.length || grant.targetIncome || grant.targetOccupation ? <ul>{eligibilityItems.map((item) => <li key={item}>{item}</li>)}{grant.targetIncome && <li>収入に関する記載：{grant.targetIncome}</li>}{grant.targetOccupation && <li>職業に関する記載：{grant.targetOccupation}</li>}</ul> : null}
            </DetailSection>

            <DetailSection id="support" title="支援内容・金額" sections={sectionGroups.amount}>
              <table className="info-table"><caption className="sr-only">支援内容と金額</caption><tbody><tr><th scope="row">制度種別</th><td>{SUPPORT_TYPE_LABELS[grant.supportType ?? 'unknown']}</td></tr><tr><th scope="row">支援額</th><td>{grant.maxAmount}</td></tr>{grant.subsidyRate && <tr><th scope="row">補助率</th><td>{grant.subsidyRate}</td></tr>}</tbody></table>
              {isRepayableSupport(grant.supportType) && <p className="grant-loan-notice">貸付制度・原則として返済が必要です</p>}
            </DetailSection>

            <DetailSection id="period" title="申請期間" sections={sectionGroups.period}>
              {grant.applicationPeriod ? <p>{grant.applicationPeriod}</p> : null}
              {grant.budgetMayCloseEarly && <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 font-bold text-amber-950">予算到達により早期終了する場合があります。</p>}
            </DetailSection>

            <DetailSection id="eligible-costs" title="対象経費または対象内容" sections={sectionGroups.costs}>
              {grant.eligibleCosts?.length ? <ul>{grant.eligibleCosts.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </DetailSection>

            <DetailSection id="application-method" title="申請方法" sections={sectionGroups.method}>
              {grant.applicationMethod ? <p>{grant.applicationMethod}</p> : null}
            </DetailSection>

            <DetailSection id="required-documents" title="必要書類" sections={sectionGroups.documents}>
              {grant.requiredDocuments?.length ? <ul>{grant.requiredDocuments.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </DetailSection>

            <DetailSection id="contact-information" title="問い合わせ先" sections={sectionGroups.contact}>
              {grant.contactInformation ? <p>{grant.contactInformation}</p> : null}
            </DetailSection>

            {sectionGroups.notes.length > 0 && <DetailSection id="notes" title="申請前の注意点" sections={sectionGroups.notes} />}
          </div>

          <OfficialCheckpoints />

          {related.length > 0 && <section className="grant-related" aria-labelledby="related-grants-title"><div className="home-section-heading"><p>対象・目的・地域が近い制度</p><h2 id="related-grants-title">関連する制度</h2></div><div className="grant-related-grid">{related.map((item) => <GrantCard key={item.slug} grant={item} />)}</div></section>}

          <nav aria-label="この制度に関連する検索" className="mt-8 rounded-xl border border-line bg-wash p-5"><h2 className="text-lg font-black text-navy">条件が近い制度を探す</h2><div className="mt-3 flex flex-wrap gap-3"><Link href={`/grants/?pref=${encodeURIComponent(grant.prefecture)}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">{grant.prefecture}の制度</Link>{purpose && <Link href={`/grants/?purpose=${purpose}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">同じ目的の制度</Link>}<Link href={`/grants/?audience=${businessAudience ? 'business' : 'individual'}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">同じ対象区分の制度</Link>{grant.supportType && <Link href={`/grants/?supportType=${grant.supportType}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">同じ制度種別</Link>}<Link href="/guide/" className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">申請前ガイド</Link></div></nav>

          <section className="mt-8 rounded-xl border border-line bg-white p-5" aria-labelledby="correction-title"><h2 id="correction-title" className="text-lg font-black text-navy">掲載情報の訂正・修正依頼</h2><p className="mt-2 text-sm leading-7 text-muted">制度の更新や誤りにお気づきの場合は、制度名と公式情報のURLを添えてお知らせください。</p><Link href={`/correction/?grant=${encodeURIComponent(grant.slug)}`} className="mt-3 inline-flex min-h-11 items-center font-bold text-navy underline underline-offset-4" data-analytics-event="correction_request" data-page-type="grant" data-grant-id={grant.slug}>この制度について訂正を依頼する</Link></section>

            {grant.tags.length > 0 && <div className="grant-tag-list" aria-label="関連タグ">{grant.tags.map((tag) => <Link key={tag} href={`/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}/`}>#{tag}</Link>)}</div>}
            {classifiedCount === 0 && <p className="mt-6 text-xs leading-6 text-muted">詳細項目は公式ページでご確認ください。</p>}
          </article>

          {affiliateOffers.length > 0 && (
            <div className="grant-affiliate-rail official-affiliate-rail">
              <p className="grant-affiliate-rail-label">事業者向けサービス</p>
              {affiliateOffers.map((offer, index) => <AffiliateRecommendation key={offer.id} offer={offer} pageType="grant" grantId={grant.slug} audience={grant.primaryAudience} purpose={grant.primaryPurpose} placement="grant-side-rail" position={index + 1} compact />)}
            </div>
          )}
        </div>
      </div>

      {primaryOfficialUrl && <div className="grant-mobile-cta"><a href={primaryOfficialUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="official_source_click" data-page-type="grant" data-grant-id={grant.slug} data-audience={grant.primaryAudience} data-purpose={grant.primaryPurpose} data-placement="mobile-sticky">{getOfficialCtaLabel(status)}<span className="sr-only">（新しいタブで開きます）</span><span aria-hidden="true">↗</span></a></div>}
    </>
  );
}
