export interface SiteRedirect {
  source: string;
  destination: string;
  statusCode: 301;
}

export const REDIRECTS: SiteRedirect[] = [
  {
    source: '/grant/kushiro-elderly-taxi/',
    destination: '/grant/kushiro-elderly-outing-bus/',
    statusCode: 301,
  },
  {
    source: '/grant/kagoshima-elderly-taxi/',
    destination: '/grant/kagoshima-keiro-pass/',
    statusCode: 301,
  },
];
