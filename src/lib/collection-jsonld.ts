export interface CollectionJsonLdInput {
  name: string;
  description: string;
  url: string;
  items?: { name: string; url: string }[];
}

export function buildCollectionJsonLd({
  name,
  description,
  url,
  items = [],
  siteName,
  siteUrl,
}: CollectionJsonLdInput & { siteName: string; siteUrl: string }) {
  const visibleItems = items.slice(0, 24);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    },
    inLanguage: 'ja',
    ...(visibleItems.length > 0 ? {
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: visibleItems.length,
        itemListElement: visibleItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: item.url,
        })),
      },
    } : {}),
  };
}
