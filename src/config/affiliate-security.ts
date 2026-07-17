export const AFFILIATE_HOST_ALLOWLIST = {
  tracking: ['px.a8.net'],
  creative: ['www23.a8.net', 'www26.a8.net', 'www27.a8.net', 'www28.a8.net', 'www29.a8.net'],
  impression: ['www10.a8.net', 'www11.a8.net', 'www13.a8.net', 'www15.a8.net', 'www17.a8.net'],
  redirect: ['a8.yayoi-kk.co.jp', 'a8cv.f.012grp.co.jp'],
  landing: [
    'f.012grp.co.jp',
    'www.easy-myshop.jp',
    'www.makeshop.jp',
    'www.onamae-server.com',
    'www.shin-server.jp',
    'www.yayoi-kk.co.jp',
  ],
} as const;

export const AFFILIATE_PRIVACY_SERVICES = {
  'A8.net': {
    provider: '株式会社ファンコミュニケーションズ',
    assetHosts: [
      'www10.a8.net',
      'www11.a8.net',
      'www13.a8.net',
      'www15.a8.net',
      'www17.a8.net',
      'www23.a8.net',
      'www26.a8.net',
      'www27.a8.net',
      'www28.a8.net',
      'www29.a8.net',
    ],
    clickHosts: ['px.a8.net', 'a8.yayoi-kk.co.jp', 'a8cv.f.012grp.co.jp'],
    landingHosts: [
      'f.012grp.co.jp',
      'www.easy-myshop.jp',
      'www.makeshop.jp',
      'www.onamae-server.com',
      'www.shin-server.jp',
      'www.yayoi-kk.co.jp',
    ],
    purpose: '広告素材の配信、広告表示・クリック・申込み成果の計測',
    timing: '広告が画面に表示される際、および広告リンクを選択した際',
    retention: 'Cookieの有効期限はプログラムにより数日から3か月程度（A8.net公開情報）',
    policyUrl: 'https://www.a8.net/privacy.html',
  },
} as const;

export function isAllowedAffiliateHost(kind: keyof typeof AFFILIATE_HOST_ALLOWLIST, url: string | null | undefined): boolean {
  if (!url) return false;
  try {
    return (AFFILIATE_HOST_ALLOWLIST[kind] as readonly string[]).includes(new URL(url).host);
  } catch {
    return false;
  }
}
