export const DEFAULT_SITE_URL = 'https://joseikin-navi-site.vercel.app';

type PublicEnvironment = Record<string, string | undefined>;

function normalizeHttpUrl(value: string | undefined): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
    return url.toString().replace(/\/+$/, '');
  } catch {
    return null;
  }
}

export function getSiteUrl(environment: PublicEnvironment = process.env): string {
  return normalizeHttpUrl(environment.NEXT_PUBLIC_SITE_URL) ?? DEFAULT_SITE_URL;
}

export function toSiteUrl(
  pathname = '/',
  environment: PublicEnvironment = process.env
): string {
  const baseUrl = `${getSiteUrl(environment)}/`;
  return new URL(pathname.replace(/^\/+/, ''), baseUrl).toString();
}

export function isIndexableDeployment(
  environment: PublicEnvironment = process.env
): boolean {
  if (!environment.VERCEL_ENV) return true;
  return environment.VERCEL_ENV === 'production';
}
