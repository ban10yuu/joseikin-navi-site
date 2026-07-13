import { formatVerifiedDate, normalizeOfficialUrls } from '@/lib/grant-presentation';

interface OfficialSourcePanelProps {
  officialUrl: string;
  sourceUrls?: string[];
  sourceName?: string;
  sourceNote?: string;
  verifiedAt?: string;
  statusLabel: string;
  statusDescription: string;
  statusLevel: 'verified' | 'linked' | 'unverified';
}

export default function OfficialSourcePanel({
  officialUrl,
  sourceUrls,
  sourceName,
  sourceNote,
  verifiedAt,
  statusLabel,
  statusDescription,
  statusLevel,
}: OfficialSourcePanelProps) {
  const urls = normalizeOfficialUrls(officialUrl, sourceUrls);

  return (
    <section className={`grant-source-panel is-${statusLevel}`} aria-labelledby="official-source-title">
      <div className="grant-source-heading">
        <div>
          <p>{statusLabel}</p>
          <h2 id="official-source-title">公式情報と確認日</h2>
        </div>
        <span>{formatVerifiedDate(verifiedAt)}</span>
      </div>

      <p className="grant-source-description">{statusDescription}</p>
      {sourceName && (
        <p className="grant-source-name"><span>確認元</span>{sourceName}</p>
      )}

      <ul className="grant-source-links">
        {urls.map((url, index) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              公式情報を確認{urls.length > 1 ? ` ${index + 1}` : ''}
              <span className="sr-only">（新しいタブで開きます）</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>

      {sourceNote && (
        <details className="grant-source-history">
          <summary>確認履歴を見る</summary>
          <p>{sourceNote}</p>
        </details>
      )}
    </section>
  );
}
