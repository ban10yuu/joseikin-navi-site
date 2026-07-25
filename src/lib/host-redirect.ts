import { DEFAULT_SITE_URL } from './site-url.ts';

export const REDIRECT_HOSTS = [
  'joseikin-navi-site.vercel.app',
  'www.shienseido-navi.jp',
];

export function getCanonicalRedirectUrl(url: URL, host: string): string | null {
  const normalizedHost = host.toLowerCase().split(':')[0];
  if (!REDIRECT_HOSTS.includes(normalizedHost)) return null;

  const destination = new URL(`${url.pathname}${url.search}`, DEFAULT_SITE_URL);
  return destination.toString();
}

export function getCanonicalHostRedirects() {
  return REDIRECT_HOSTS.map((host) => ({
    source: '/:path*',
    destination: `${DEFAULT_SITE_URL}/:path*`,
    permanent: true,
    has: [{ type: 'host' as const, value: host }],
  }));
}
