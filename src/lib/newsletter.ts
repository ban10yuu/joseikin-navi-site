export const NEWSLETTER_CONSENT_VERSION = '2026-07-13-v1';

export interface NewsletterInput {
  email: string;
  prefecture: string;
  source: string;
  consentAt: string;
}

export function isNewsletterEnabled(endpoint?: string | null): boolean {
  if (!endpoint) return false;
  try {
    return new URL(endpoint).protocol === 'https:';
  } catch {
    return false;
  }
}

export function buildNewsletterPayload(input: NewsletterInput) {
  return {
    email: input.email.trim(),
    prefecture: input.prefecture,
    consentAt: input.consentAt,
    consentVersion: NEWSLETTER_CONSENT_VERSION,
    source: input.source,
  };
}
