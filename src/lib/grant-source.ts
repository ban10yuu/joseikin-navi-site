export interface GrantSourceLike {
  officialUrl: string;
  sourceUrls?: string[];
  verifiedAt?: string;
  humanReviewedAt?: string | null;
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
  return hasOfficialSource(grant) && Boolean(grant.humanReviewedAt);
}

export function getGrantSourceStatus(grant: GrantSourceLike): {
  level: 'human' | 'automated' | 'linked' | 'unverified';
  label: string;
  shortLabel: string;
  className: string;
  description: string;
} {
  if (isManuallyVerifiedGrant(grant)) {
    return {
      level: 'human',
      label: '人手確認済み',
      shortLabel: '人手確認',
      className: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      description: '記録された確認日に、人が公式ページと掲載内容を照合しています。申請前には最新の公式募集要項もご確認ください。',
    };
  }

  if (hasOfficialSource(grant) && grant.verifiedAt) {
    return {
      level: 'automated',
      label: '公式情報リンクあり・自動照合',
      shortLabel: '自動照合',
      className: 'bg-blue-50 text-blue-800 border-blue-300',
      description: '公式情報へのリンクを自動処理で照合した記録があります。人手確認済みを意味するものではありません。',
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
