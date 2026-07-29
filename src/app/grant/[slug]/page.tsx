import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GrantCard from '@/components/GrantCard';
import DisplayAdSlot from '@/components/DisplayAdSlot';
import GrantDecisionSummary from '@/components/GrantDecisionSummary';
import { BreadcrumbJsonLd, GrantJsonLd } from '@/components/JsonLd';
import OfficialCheckpoints from '@/components/OfficialCheckpoints';
import OfficialSourcePanel from '@/components/OfficialSourcePanel';
import ResponsiveAffiliatePlacement from '@/components/ResponsiveAffiliatePlacement';
import MobileOfficialCta from '@/components/MobileOfficialCta';
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
import { getGrantAffiliateIntents, getGrantDetailAffiliateMatchContext, shouldAllowDerivedAffiliateContext } from '@/lib/affiliate-context';
import { getValidOfficialSourceUrls } from '@/lib/grant-source';
import { groupGrantSections, type GrantSectionGroup } from '@/lib/grant-sections';
import { getEffectiveGrantStatus, getOfficialCtaLabel, isRepayableSupport } from '@/lib/grant-status';
import { grantMetaDescription, grantMetaTitle } from '@/lib/seo-metadata';
import { toSiteUrl } from '@/lib/site-url';
import { getEligibleAffiliateOffers, isSensitiveAffiliateContext } from '@/lib/monetization';
import { AFFILIATE_OFFERS } from '@/config/affiliate-offers';
import { hasApprovedSensitiveAffiliateContext } from '@/config/affiliate-security';
import { getSearchConsoleOpportunitiesForGrant, SEARCH_CONSOLE_OPPORTUNITIES } from '@/config/search-console-opportunities';
import { siteConfig } from '@/config/site';
import { CATEGORY_LABELS, SUPPORT_TYPE_LABELS, type Section } from '@/lib/types';

interface Props { params: Promise<{ slug: string }> }

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  const recentGrantSlugs = new Set(
    (await getRecentlyUpdatedGrants(240)).map((grant) => grant.slug)
  );
  return (await getOfficialLinkedGrants())
    .filter((grant) => grant.indexStatus !== 'noindex' && grant.contentStatus === 'published' && recentGrantSlugs.has(grant.slug))
    .map((grant) => ({ slug: grant.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const grant = await getGrantBySlug(slug);
  if (!grant) return {};
  const sourceStatus = getGrantSourceStatus(grant);
  const expired = isGrantExpired(grant);
  const opportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) => item.grantSlugs?.includes(slug));
  const titleSubject = opportunity?.observedQuery ?? grant.title;
  const title = grantMetaTitle({
    titleSubject,
    expired,
    seoTitle: expired ? undefined : opportunity?.seoTitle,
  });
  const eligibility = (grant.eligibility || '公式情報で確認').replace(/[。．]+$/u, '');
  const deadline = (grant.applicationPeriod || '申請期限は公式情報で確認').replace(/[。．]+$/u, '');
  const checked = !hasOfficialSource(grant)
    ? '公式情報の確認先は未登録'
    : grant.verifiedAt
      ? `公式情報確認日${grant.verifiedAt}`
      : '公式情報の確認先を掲載';
  const description = opportunity?.metaDescription ?? grantMetaDescription({
    title: grant.title,
    organization: grant.organization,
    eligibility,
    amount: grant.maxAmount,
    deadline,
    checked,
    hasOfficialSource: hasOfficialSource(grant),
  });
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
  const grant = await getGrantBySlug(slug);
  if (!grant) notFound();
  const related = await getRelatedGrants(grant, 4);
  const sourceStatus = getGrantSourceStatus(grant);
  const expired = isGrantExpired(grant);
  const status = getEffectiveGrantStatus(grant);
  const sectionGroups = groupGrantSections(grant.sections);
  const eligibilityItems = splitEligibilityText(grant.eligibility);
  const purpose = grant.primaryPurpose;
  const businessAudience = ['soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization'].includes(grant.primaryAudience ?? '');
  const affiliateContextTexts = [
    grant.title,
    grant.description,
    grant.eligibility,
    grant.applicationPeriod,
    ...grant.tags,
    ...grant.sections.flatMap((section) => [section.heading, section.content]),
  ];
  const sensitiveContext = isSensitiveAffiliateContext({
    purposes: grant.purposes,
    primaryPurpose: grant.primaryPurpose,
    audiences: grant.audiences,
    texts: affiliateContextTexts,
  });
  const primaryOfficialUrl = getValidOfficialSourceUrls(grant)[0];
  const affiliateIntents = getGrantAffiliateIntents({
    title: grant.title,
    description: grant.description,
    eligibility: grant.eligibility,
    tags: grant.tags,
    purposes: grant.purposes,
    primaryPurpose: grant.primaryPurpose,
    audiences: grant.audiences,
    affiliateIntents: grant.affiliateIntents ?? [],
  });
  const detailAffiliateContext = getGrantDetailAffiliateMatchContext({
    title: grant.title,
    description: grant.description,
    eligibility: grant.eligibility,
    tags: grant.tags,
    purposes: grant.purposes,
    primaryPurpose: grant.primaryPurpose,
    audiences: grant.audiences,
    affiliateIntents,
    texts: affiliateContextTexts,
  });
  const affiliateHeading = businessAudience ? '事業に関連するサービス' : 'この制度の目的に関連するサービス';
  const affiliateDescription = businessAudience
    ? '事業の準備や運営に関連する民間サービスの広告です。この制度の申請や採択に必須ではありません。'
    : 'この制度の目的に関連する民間サービスの広告です。制度の利用や申請に必須ではありません。';
  const conciseSummaryTargets = splitEligibilityText(grant.eligibility)
    .slice(0, 3)
    .join('・') || '公式要項をご確認ください';
  const matchingOpportunity = SEARCH_CONSOLE_OPPORTUNITIES.find((item) => item.grantSlugs?.includes(grant.slug));
  const conciseSummary = matchingOpportunity?.shortAnswer
    ?? `${grant.prefecture}の${grant.organization}が実施している${grant.title}は、${SUPPORT_TYPE_LABELS[grant.supportType ?? 'unknown']}として、${grant.maxAmount || '支援内容'}を扱う制度です。対象の目安は${conciseSummaryTargets}で、申請期間は${grant.applicationPeriod || '公式要項で確認'}です。`;
  const strictAffiliateOffers = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
    pageType: 'grant',
    audiences: grant.audiences ?? [],
    purposes: grant.purposes ?? [],
    primaryPurpose: grant.primaryPurpose,
    intents: affiliateIntents,
    monetizationAllowed: shouldAllowDerivedAffiliateContext({
      purposes: grant.purposes,
      intents: affiliateIntents,
      monetizationAllowed: grant.monetizationAllowed,
      sensitive: sensitiveContext,
    }),
    status,
    indexable: sourceStatus.level !== 'unverified' && grant.indexStatus !== 'noindex' && grant.contentStatus === 'published',
    hasOfficialSource: Boolean(primaryOfficialUrl),
    sensitive: sensitiveContext,
    sensitiveMonetizationApproved: hasApprovedSensitiveAffiliateContext(grant.slug, affiliateIntents),
    texts: affiliateContextTexts,
    limit: 6,
    diversityKey: grant.slug,
  });
  const fallbackAffiliateOffers = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
    pageType: 'grant',
    audiences: grant.audiences ?? [],
    purposes: detailAffiliateContext.purposes,
    intents: detailAffiliateContext.intents,
    monetizationAllowed: detailAffiliateContext.intents.length > 0,
    status,
    indexable: sourceStatus.level !== 'unverified' && grant.indexStatus !== 'noindex' && grant.contentStatus === 'published',
    hasOfficialSource: Boolean(primaryOfficialUrl),
    sensitive: false,
    limit: 6,
    diversityKey: grant.slug,
  });
  const affiliateOffers = [...strictAffiliateOffers, ...fallbackAffiliateOffers]
    .filter((offer, index, offers) => offers.findIndex((item) => item.id === offer.id) === index)
    .slice(0, 6);
  const primaryAffiliateOffers = affiliateOffers.slice(0, 3);
  const secondaryAffiliateOffers = affiliateOffers.slice(3);
  const affiliateMatchPurposes = [...new Set([...(grant.purposes ?? []), ...detailAffiliateContext.purposes])];
  const hasManualAdsenseSlot = Boolean(
    siteConfig.adsense.slotId
      ?? siteConfig.adsense.slots.top
      ?? siteConfig.adsense.slots.inArticle
      ?? siteConfig.adsense.slots.sidebar
      ?? siteConfig.adsense.slots.footer,
  );
  const showMonetizationRail = affiliateOffers.length > 0 || hasManualAdsenseSlot;
  const searchOpportunities = getSearchConsoleOpportunitiesForGrant({
    slug: grant.slug,
    category: grant.category,
    purposes: grant.purposes,
    prefecture: grant.prefecture,
  }, 4);

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

      <div className={`grant-detail-page${showMonetizationRail ? ' has-affiliate' : ''}`}>
        <nav className="grant-breadcrumb" aria-label="パンくずリスト"><Link href="/">ホーム</Link><span aria-hidden="true">/</span><Link href={`/category/${grant.category}/`}>{CATEGORY_LABELS[grant.category]}</Link><span aria-hidden="true">/</span><span aria-current="page">{grant.title}</span></nav>

        <div className="grant-detail-layout">
          <article className="grant-detail-article">
            <div className="grant-detail-main-start">
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

              <section className="grant-summary-description">
                <h2>この制度をかんたんに言うと</h2>
                <p>{conciseSummary}</p>
              </section>
            </div>

            {showMonetizationRail ? (
              <aside className="grant-affiliate-placement" aria-label="広告と関連サービス">
                <DisplayAdSlot placement="sidebar" format="rectangle" className="grant-adsense-rail-slot" />
                {primaryAffiliateOffers.length > 0 ? (
                  <ResponsiveAffiliatePlacement
                    offers={primaryAffiliateOffers}
                    pageType="grant"
                    grantId={grant.slug}
                    audience={grant.primaryAudience}
                    purpose={grant.primaryPurpose}
                    contextPurposes={affiliateMatchPurposes}
                    intents={detailAffiliateContext.intents}
                    placement="grant-after-official-source"
                    className="grant-affiliate-rail-placement"
                    visibleCount={3}
                    heading={affiliateHeading}
                    description={affiliateDescription}
                  />
                ) : null}
                <DisplayAdSlot placement="sidebar" format="rectangle" className="grant-adsense-rail-slot" />
              </aside>
            ) : null}

            <div className="grant-detail-main-rest">

          <div className="article-content grant-article-content">
            <DisplayAdSlot placement="inArticle" format="horizontal" className="grant-adsense-inline-slot grant-adsense-inline-slot--first" />

            <DetailSection id="overview" title="制度の概要" sections={sectionGroups.overview}>
              <p>{grant.description}</p>
            </DetailSection>

            <DetailSection id="eligibility" title="主な対象条件" sections={sectionGroups.eligibility}>
              {eligibilityItems.length || grant.targetIncome || grant.targetOccupation ? <ul>{eligibilityItems.map((item) => <li key={item}>{item}</li>)}{grant.targetIncome && <li>収入に関する記載：{grant.targetIncome}</li>}{grant.targetOccupation && <li>職業に関する記載：{grant.targetOccupation}</li>}</ul> : null}
            </DetailSection>

            <DisplayAdSlot placement="inArticle" format="horizontal" className="grant-adsense-inline-slot" />

            <DetailSection id="support" title="支援内容・金額" sections={sectionGroups.amount}>
              <table className="info-table"><caption className="sr-only">支援内容と金額</caption><tbody><tr><th scope="row">制度種別</th><td>{SUPPORT_TYPE_LABELS[grant.supportType ?? 'unknown']}</td></tr><tr><th scope="row">支援額</th><td>{grant.maxAmount}</td></tr>{grant.subsidyRate && <tr><th scope="row">補助率</th><td>{grant.subsidyRate}</td></tr>}</tbody></table>
              {isRepayableSupport(grant.supportType) && <p className="grant-loan-notice">貸付制度・原則として返済が必要です</p>}
            </DetailSection>

            <DetailSection id="period" title="申請期間" sections={sectionGroups.period}>
              {grant.applicationPeriod ? <p>{grant.applicationPeriod}</p> : null}
              {grant.budgetMayCloseEarly && <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 font-bold text-amber-950">予算到達により早期終了する場合があります。</p>}
            </DetailSection>

            <DisplayAdSlot placement="inArticle" format="horizontal" className="grant-adsense-inline-slot" />

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

          {searchOpportunities.length > 0 ? (
            <nav aria-label="関連する検索キーワード" className="grant-search-opportunity-links">
              <p className="grant-search-opportunity-eyebrow">検索されている関連テーマ</p>
              <h2>この制度に近い条件で探す</h2>
              <div>
                {searchOpportunities.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <span>{item.intent}</span>
                    <strong>{item.observedQuery}</strong>
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}

          {related.length > 0 && <section className="grant-related" aria-labelledby="related-grants-title"><div className="home-section-heading"><p>対象・目的・地域が近い制度</p><h2 id="related-grants-title">関連する制度</h2></div><div className="grant-related-grid">{related.map((item) => <GrantCard key={item.slug} grant={item} />)}</div></section>}

          <nav aria-label="この制度に関連する検索" className="mt-8 rounded-xl border border-line bg-wash p-5"><h2 className="text-lg font-black text-navy">条件が近い制度を探す</h2><div className="mt-3 flex flex-wrap gap-3"><Link href={`/grants/?pref=${encodeURIComponent(grant.prefecture)}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">{grant.prefecture}の制度</Link>{purpose && <Link href={`/grants/?purpose=${purpose}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">同じ目的の制度</Link>}<Link href={`/grants/?audience=${businessAudience ? 'business' : 'individual'}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">同じ対象区分の制度</Link>{grant.supportType && <Link href={`/grants/?supportType=${grant.supportType}`} className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">同じ制度種別</Link>}<Link href="/guide/" className="min-h-11 py-2 font-bold text-navy underline underline-offset-4">申請前ガイド</Link></div></nav>

          {secondaryAffiliateOffers.length > 0 ? (
            <ResponsiveAffiliatePlacement
              offers={secondaryAffiliateOffers}
              pageType="grant"
              grantId={grant.slug}
              audience={grant.primaryAudience}
              purpose={grant.primaryPurpose}
              contextPurposes={affiliateMatchPurposes}
              intents={detailAffiliateContext.intents}
              placement="grant-before-correction"
              className="grant-affiliate-inline-placement"
              visibleCount={2}
              positionOffset={1}
              lazyCreatives
              heading={affiliateHeading}
              description={affiliateDescription}
            />
          ) : null}

          <section className="mt-8 rounded-xl border border-line bg-white p-5" aria-labelledby="correction-title"><h2 id="correction-title" className="text-lg font-black text-navy">掲載情報の訂正・修正依頼</h2><p className="mt-2 text-sm leading-7 text-muted">制度の更新や誤りにお気づきの場合は、制度名と公式情報のURLを添えてお知らせください。</p><Link href={`/correction/?grant=${encodeURIComponent(grant.slug)}`} className="mt-3 inline-flex min-h-11 items-center font-bold text-navy underline underline-offset-4" data-analytics-event="correction_request" data-page-type="grant" data-grant-id={grant.slug}>この制度について訂正を依頼する</Link></section>

            {grant.tags.length > 0 && <div className="grant-tag-list" aria-label="関連タグ">{grant.tags.map((tag) => <Link key={tag} href={`/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}/`}>#{tag}</Link>)}</div>}
            {classifiedCount === 0 && <p className="mt-6 text-xs leading-6 text-muted">詳細項目は公式ページでご確認ください。</p>}
            </div>
          </article>
        </div>
      </div>

      {primaryOfficialUrl ? (
        <MobileOfficialCta
          href={primaryOfficialUrl}
          label={getOfficialCtaLabel(status)}
          grantId={grant.slug}
          audience={grant.primaryAudience}
          purpose={grant.primaryPurpose}
        />
      ) : null}
    </>
  );
}
