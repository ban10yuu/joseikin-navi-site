import { DEFAULT_SITE_URL } from './site-url.ts';

export const REDIRECT_HOSTS = [
  'joseikin-navi-site.vercel.app',
  'www.shienseido-navi.jp',
];

export function getCanonicalHostRedirects() {
  return REDIRECT_HOSTS.map((host) => ({
    source: '/:path*',
    destination: `${DEFAULT_SITE_URL}/:path*`,
    permanent: true,
    has: [{ type: 'host' as const, value: host }],
  }));
}
