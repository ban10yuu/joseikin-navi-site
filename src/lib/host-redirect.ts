import { DEFAULT_SITE_URL } from './site-url.ts';

const REDIRECT_HOSTS = new Set([
  'joseikin-navi-site.vercel.app',
  'www.shienseido-navi.jp',
]);

function normalizeHostname(value: string): string {
  return value.trim().toLowerCase().replace(/:\d+$/, '').replace(/\.$/, '');
}

export function getCanonicalRedirect(hostname: string, pathname: string, search: string): string | null {
  if (!REDIRECT_HOSTS.has(normalizeHostname(hostname))) return null;
  const safePathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const safeSearch = search && search.startsWith('?') ? search : '';
  return `${DEFAULT_SITE_URL}${safePathname}${safeSearch}`;
}

export function getRawPathAndSearch(requestUrl: string): { pathname: string; search: string } {
  const withoutFragment = requestUrl.split('#', 1)[0];
  const schemeIndex = withoutFragment.indexOf('://');
  const authorityStart = schemeIndex >= 0 ? schemeIndex + 3 : 0;
  const pathStart = withoutFragment.indexOf('/', authorityStart);
  const queryStart = withoutFragment.indexOf('?', authorityStart);

  if (pathStart < 0 || (queryStart >= 0 && queryStart < pathStart)) {
    return {
      pathname: '/',
      search: queryStart >= 0 ? withoutFragment.slice(queryStart) : '',
    };
  }

  const searchStart = withoutFragment.indexOf('?', pathStart);
  return {
    pathname: searchStart >= 0 ? withoutFragment.slice(pathStart, searchStart) : withoutFragment.slice(pathStart),
    search: searchStart >= 0 ? withoutFragment.slice(searchStart) : '',
  };
}

export function shouldNoindexDeployment(vercelEnvironment: string | undefined): boolean {
  return vercelEnvironment === 'preview' || vercelEnvironment === 'development';
}
