import { NextResponse, type NextRequest } from 'next/server';
import { REDIRECTS } from '@/data/redirects';
import { getCanonicalRedirectUrl } from '@/lib/host-redirect';
import { getPathRedirectUrl } from '@/lib/redirects';

export function middleware(request: NextRequest) {
  const canonicalDestination = getCanonicalRedirectUrl(
    request.nextUrl,
    request.nextUrl.hostname
  );
  const destination = getPathRedirectUrl(
    new URL(canonicalDestination ?? request.nextUrl.toString()),
    REDIRECTS,
  );

  if (destination) return NextResponse.redirect(destination, 301);

  return canonicalDestination
    ? NextResponse.redirect(canonicalDestination, 308)
    : NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
