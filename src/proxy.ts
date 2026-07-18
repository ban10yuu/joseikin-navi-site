import { type NextRequest, NextResponse } from 'next/server.js';
import { getCanonicalRedirect, getRawPathAndSearch, shouldNoindexDeployment } from './lib/host-redirect.ts';

export function proxy(request: NextRequest) {
  const { pathname, search } = getRawPathAndSearch(request.url);
  const redirectUrl = getCanonicalRedirect(
    request.headers.get('host') ?? request.nextUrl.hostname,
    pathname,
    search,
  );

  const response = redirectUrl ? NextResponse.redirect(redirectUrl, 308) : NextResponse.next();
  if (shouldNoindexDeployment(process.env.VERCEL_ENV)) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
