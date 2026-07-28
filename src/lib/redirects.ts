import type { SiteRedirect } from '../data/redirects.ts';

export function validateRedirects(redirects: SiteRedirect[]): string[] {
  const issues: string[] = [];
  const sources = new Set<string>();
  const destinationsBySource = new Map(redirects.map((item) => [item.source, item.destination]));

  for (const redirect of redirects) {
    if (sources.has(redirect.source)) issues.push(`duplicate:${redirect.source}`);
    sources.add(redirect.source);
    if (redirect.source === redirect.destination) issues.push(`self:${redirect.source}`);

    const visited = new Set([redirect.source]);
    let cursor: string | undefined = redirect.destination;
    while (cursor && destinationsBySource.has(cursor)) {
      if (visited.has(cursor)) {
        issues.push(`cycle:${redirect.source}`);
        break;
      }
      visited.add(cursor);
      cursor = destinationsBySource.get(cursor);
    }
  }

  return [...new Set(issues)];
}

export function getPathRedirectUrl(url: URL, redirects: SiteRedirect[]): string | null {
  const redirect = redirects.find((item) => item.source === url.pathname);
  if (!redirect) return null;

  const destination = new URL(redirect.destination, url.origin);
  destination.search = url.search;
  return destination.toString();
}
