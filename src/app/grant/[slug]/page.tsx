import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getGrantBySlug,
  getGrantSourceStatus,
  getOfficialLinkedGrants,
  getRelatedGrants,
  hasOfficialSource,
  isGrantExpired,
} from '@/lib/grants';
import { CATEGORY_LABELS } from '@/lib/types';
import { GrantJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import GrantCard from '@/components/GrantCard';
import AdBanner from '@/components/AdBanner';
import AuthorBox from '@/components/AuthorBox';
import ShareButtons from '@/components/ShareButtons';
import GrantDecisionSummary from '@/components/GrantDecisionSummary';
import OfficialSourcePanel from '@/components/OfficialSourcePanel';
import OfficialCheckpoints from '@/components/OfficialCheckpoints';
import { getEffectiveGrantStatus, getOfficialCtaLabel } from '@/lib/grant-status';
import { toSiteUrl } from '@/lib/site-url';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getOfficialLinkedGrants({ includeExpired: true }).map((grant) => ({ slug: grant.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const grant = getGrantBySlug(slug);
  if (!grant) return {};

  const sourceStatus = getGrantSourceStatus(grant);
  const expired = isGrantExpired(grant);
  const title = `${grant.title} ${grant.maxAmount}｜対象・期限・公式情報`;
  const description = expired
    ? `${grant.title}は掲載上の申請期限が過ぎています。次回募集や後継制度の有無を公式サイトで確認できます。`
    : sourceStatus.level === 'unverified'
      ? `${grant.title}の対象、金額、申請期間を整理しています。公式出典が未登録のため、自治体・公式窓口で最新情報を確認してください。`
      : `${grant.title}の対象、金額、申請期間、公式の確認先を分かりやすく整理しています。最新の受付状況は公式サイトでご確認ください。`;

  return {
    title,
    description,
    keywords: [grant.title, grant.maxAmount, CATEGORY_LABELS[grant.category], grant.prefecture, ...grant.tags, '助成金', '補助金', '公式情報'].join(', '),
    openGraph: {
      title,
      description,
      url: toSiteUrl(`/grant/${slug}/`),
      type: 'article',
    },
    alternates: {
      canonical: toSiteUrl(`/grant/${slug}/`),
    },
    robots: sourceStatus.level === 'unverified' || expired
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}

export default async function GrantDetailPage({ params }: Props) {
  const { slug } = await params;
  const grant = getGrantBySlug(slug);
  if (!grant || !hasOfficialSource(grant)) notFound();

  const related = getRelatedGrants(grant, 4);
  const baseUrl = toSiteUrl('/').replace(/\/$/, '');
  const sourceStatus = getGrantSourceStatus(grant);
  const expired = isGrantExpired(grant);
  const status = getEffectiveGrantStatus(grant);

  return (
    <>
      <GrantJsonLd grant={grant} />
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: baseUrl },
        { name: CATEGORY_LABELS[grant.category], url: `${baseUrl}/category/${grant.category}/` },
        { name: grant.title, url: `${baseUrl}/grant/${slug}/` },
      ]} />
      <FaqJsonLd grant={grant} />

      <div className="grant-detail-page">
        <nav className="grant-breadcrumb" aria-label="パンくずリスト">
          <Link href="/">ホーム</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/category/${grant.category}/`}>{CATEGORY_LABELS[grant.category]}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{grant.title}</span>
        </nav>

        <article className="grant-detail-article">
          <GrantDecisionSummary
            grant={grant}
            expired={expired}
            sourceLabel={sourceStatus.label}
          />

          <OfficialSourcePanel
            officialUrl={grant.officialUrl}
            sourceUrls={grant.sourceUrls}
            sourceName={grant.sourceName}
            verifiedAt={grant.verifiedAt}
            humanReviewedAt={grant.humanReviewedAt}
            statusLabel={sourceStatus.label}
            statusDescription={sourceStatus.description}
            statusLevel={sourceStatus.level}
          />

          <OfficialCheckpoints />

          {grant.sections.length > 1 && (
            <nav className="grant-toc" aria-labelledby="grant-toc-title">
              <h2 id="grant-toc-title">この制度の詳しい情報</h2>
              <ol>
                {grant.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a href={`#section-${index}`}>
                      <span>{index + 1}</span>{section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="article-content grant-article-content">
            {grant.sections.map((section, index) => (
              <section key={`${section.heading}-${index}`} aria-labelledby={`section-${index}`}>
                <h2 id={`section-${index}`}>{section.heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </section>
            ))}
          </div>

          <AdBanner size="full" />

          <div className="grant-tag-list" aria-label="関連タグ">
            {grant.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}/`}
              >
                #{tag}
              </Link>
            ))}
          </div>

          <ShareButtons title={grant.title} />
          <AuthorBox />

          {related.length > 0 && (
            <section className="grant-related" aria-labelledby="related-grants-title">
              <div className="home-section-heading">
                <p>同じ地域・目的の候補</p>
                <h2 id="related-grants-title">関連する助成金・補助金</h2>
              </div>
              <div className="grant-related-grid">
                {related.map((relatedGrant) => (
                  <GrantCard key={relatedGrant.slug} grant={relatedGrant} />
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      <div className="grant-mobile-cta">
        <a href={grant.officialUrl} target="_blank" rel="noopener noreferrer">
          {getOfficialCtaLabel(status)}
          <span className="sr-only">（新しいタブで開きます）</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </>
  );
}
