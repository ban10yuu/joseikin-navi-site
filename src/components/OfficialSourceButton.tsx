import { getOfficialCtaLabel } from '@/lib/grant-status';
import type { GrantStatus } from '@/lib/types';

export default function OfficialSourceButton({ href, status, grantId, audience, purpose, className = 'grant-official-primary' }: { href: string; status: GrantStatus; grantId: string; audience?: string; purpose?: string; className?: string }) {
  if (!href) return null;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} data-analytics-event="official_source_click" data-page-type="grant" data-grant-id={grantId} data-audience={audience} data-purpose={purpose}>{getOfficialCtaLabel(status)}<span className="sr-only">（新しいタブで開きます）</span><span aria-hidden="true">↗</span></a>;
}
