import { NextResponse, type NextRequest } from 'next/server';
import { getCanonicalRedirectUrl } from '@/lib/host-redirect';

export function middleware(request: NextRequest) {
  const destination = getCanonicalRedirectUrl(
    request.nextUrl,
    request.nextUrl.hostname
  );

  return destination
    ? NextResponse.redirect(destination, 308)
    : NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
