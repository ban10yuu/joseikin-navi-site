interface WebsiteJsonLdInput {
  siteName: string;
  siteUrl: string;
  operatorName?: string | null;
}

export function buildWebsiteJsonLd({
  siteName,
  siteUrl,
  operatorName,
}: WebsiteJsonLdInput) {
  const normalizedUrl = siteUrl.replace(/\/+$/u, '');
  const alternateName = ['助成金ナビ', '支援制度ナビ', 'Joseikin Navi']
    .filter((name) => name !== siteName);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${normalizedUrl}/#website`,
    name: siteName,
    alternateName,
    url: normalizedUrl,
    description: '国・自治体・民間団体の助成金・補助金情報を、公式情報の確認先とともに整理するナビゲーションサイト',
    ...(operatorName ? {
      publisher: {
        '@type': 'Organization',
        name: operatorName,
        url: normalizedUrl,
      },
    } : {}),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${normalizedUrl}/grants/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'ja',
  } as const;
}
