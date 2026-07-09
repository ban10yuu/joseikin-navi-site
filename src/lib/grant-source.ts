export interface GrantSourceLike {
  officialUrl: string;
  sourceUrls?: string[];
  verifiedAt?: string;
}

const PLACEHOLDER_HOSTS = new Set(['example.com', 'localhost']);

export function hasOfficialSource(grant: GrantSourceLike): boolean {
  const officialUrl = grant.officialUrl?.trim();
  if (!officialUrl) return false;

  try {
    const url = new URL(officialUrl);
    return (
      (url.protocol === 'https:' || url.protocol === 'http:') &&
      !PLACEHOLDER_HOSTS.has(url.hostname.replace(/^www\./, ''))
    );
  } catch {
    return false;
  }
}

export function isManuallyVerifiedGrant(grant: GrantSourceLike): boolean {
  return hasOfficialSource(grant) && Boolean(grant.verifiedAt || grant.sourceUrls?.length);
}

export function getGrantSourceStatus(grant: GrantSourceLike): {
  level: 'verified' | 'linked' | 'unverified';
  label: string;
  shortLabel: string;
  className: string;
  description: string;
} {
  if (isManuallyVerifiedGrant(grant)) {
    return {
      level: 'verified',
      label: '公式出典確認済み',
      shortLabel: '公式確認',
      className: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      description: '編集時点で公式サイト・公式資料を確認した掲載情報です。',
    };
  }

  if (hasOfficialSource(grant)) {
    return {
      level: 'linked',
      label: '公式リンク記載',
      shortLabel: '公式記載',
      className: 'bg-blue-50 text-blue-800 border-blue-300',
      description: '公式サイトへのリンクがあります。制度の金額・締切は申請前に公式ページで確認してください。',
    };
  }

  return {
    level: 'unverified',
    label: '要公式確認',
    shortLabel: '要確認',
    className: 'bg-amber-50 text-amber-800 border-amber-300',
    description: '公式出典が未登録です。申請前に自治体・公式窓口で必ず確認してください。',
  };
}
