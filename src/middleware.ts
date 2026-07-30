import { NextResponse, type NextRequest } from 'next/server';
import { REDIRECTS } from '@/data/redirects';
import { getCanonicalRedirectUrl } from '@/lib/host-redirect';
import { getPathRedirectUrl } from '@/lib/redirects';
import { getStaticListingRewriteUrl } from '@/lib/static-listing-route';

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

  if (canonicalDestination) {
    return NextResponse.redirect(canonicalDestination, 308);
  }

  const staticListingRewrite = getStaticListingRewriteUrl(request.nextUrl);
  if (staticListingRewrite) {
    return NextResponse.rewrite(staticListingRewrite);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
