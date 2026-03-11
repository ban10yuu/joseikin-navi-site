import { Grant, CATEGORY_LABELS } from '@/lib/types';

// ── Article JSON-LD for grant detail pages ──
export function GrantJsonLd({ grant }: { grant: Grant }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${grant.title} ${grant.maxAmount}`,
    description: grant.description,
    author: { '@type': 'Organization', name: '助成金ナビ' },
    publisher: {
      '@type': 'Organization',
      name: '助成金ナビ',
      url: 'https://joseikin-navi-site.vercel.app',
    },
    datePublished: grant.publishedAt,
    dateModified: grant.publishedAt,
    mainEntityOfPage: `https://joseikin-navi-site.vercel.app/grant/${grant.slug}/`,
    keywords: [grant.title, CATEGORY_LABELS[grant.category], grant.prefecture, ...grant.tags].join(', '),
    articleSection: CATEGORY_LABELS[grant.category],
    inLanguage: 'ja',
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

// ── Breadcrumb JSON-LD ──
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

// ── FAQ JSON-LD from grant sections ──
export function FaqJsonLd({ grant }: { grant: Grant }) {
  // Build FAQ from section headings
  const faqEntries = grant.sections.slice(0, 5).map((section) => ({
    '@type': 'Question',
    name: section.heading,
    acceptedAnswer: {
      '@type': 'Answer',
      text: section.content.replace(/<[^>]+>/g, '').slice(0, 500),
    },
  }));

  if (faqEntries.length === 0) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

// ── Collection Page JSON-LD ──
export function CollectionJsonLd({ name, description, url }: { name: string; description: string; url: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: '助成金ナビ',
      url: 'https://joseikin-navi-site.vercel.app',
    },
    inLanguage: 'ja',
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
