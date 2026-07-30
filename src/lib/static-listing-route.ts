const PUBLIC_LISTING_PATH = '/grants/';
const STATIC_LISTING_PATH = '/grants-index/';

export function getStaticListingRewriteUrl(url: URL): string | null {
  if (url.pathname !== PUBLIC_LISTING_PATH || url.search) return null;
  return new URL(STATIC_LISTING_PATH, url.origin).toString();
}
