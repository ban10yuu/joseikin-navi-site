import redirectData from '../../data/redirects.json' with { type: 'json' };

export interface SiteRedirect {
  source: string;
  destination: string;
  statusCode: 301;
}

export const REDIRECTS: SiteRedirect[] = redirectData.map(({ source, destination, statusCode }) => ({
  source,
  destination,
  statusCode: statusCode as 301,
}));

export const REDIRECT_SOURCE_SLUGS = new Set(
  REDIRECTS.flatMap(({ source }) => {
    const match = source.match(/^\/grant\/([^/]+)\/$/);
    return match ? [match[1]] : [];
  }),
);
