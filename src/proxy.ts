import { type NextRequest, NextResponse } from 'next/server.js';
import { REDIRECTS, type SiteRedirect } from './data/redirects.ts';
import { getCanonicalRedirect, getRawPathAndSearch, shouldNoindexDeployment } from './lib/host-redirect.ts';

function safeDecodeURIComponent(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function getPathRedirect(pathname: string, search: string): SiteRedirect | null {
  const safePathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const normalizedPathname = safePathname.endsWith('/') ? safePathname : `${safePathname}/`;
  const decodedPathname = safeDecodeURIComponent(normalizedPathname);
  const safeSearch = search && search.startsWith('?') ? search : '';
  const redirect = REDIRECTS.find((item) => item.source === normalizedPathname || item.source === decodedPathname);

  return redirect ? { ...redirect, destination: `${redirect.destination}${safeSearch}` } : null;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = getRawPathAndSearch(request.url);
  const pathRedirect = getPathRedirect(pathname, search);
  const redirectUrl = pathRedirect
    ? new URL(pathRedirect.destination, request.nextUrl.origin).toString()
    : getCanonicalRedirect(
      request.headers.get('host') ?? request.nextUrl.hostname,
      pathname,
      search,
    );

  const response = redirectUrl
    ? NextResponse.redirect(redirectUrl, pathRedirect?.statusCode ?? 308)
    : NextResponse.next();
  if (shouldNoindexDeployment(process.env.VERCEL_ENV)) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
