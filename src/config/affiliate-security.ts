export const AFFILIATE_HOST_ALLOWLIST = {
  tracking: ['px.a8.net', 'af.moshimo.com', 't.afi-b.com'],
  creative: ['www20.a8.net', 'www21.a8.net', 'www22.a8.net', 'www23.a8.net', 'www24.a8.net', 'www26.a8.net', 'www27.a8.net', 'www28.a8.net', 'www29.a8.net', 'image.moshimo.com', 'www.afi-b.com'],
  impression: ['www10.a8.net', 'www11.a8.net', 'www12.a8.net', 'www13.a8.net', 'www14.a8.net', 'www15.a8.net', 'www16.a8.net', 'www17.a8.net', 'www18.a8.net', 'www19.a8.net', 'i.moshimo.com', 't.afi-b.com'],
  redirect: ['a8.yayoi-kk.co.jp', 'a8cv.f.012grp.co.jp', 'ems-a8net-tracking.easy-myshop.jp', 'ac-rt.catsys.jp'],
  landing: [
    'f.012grp.co.jp',
    'www.easy-myshop.jp',
    'www.makeshop.jp',
    'www.onamae-server.com',
    'prement.jp',
    'www.shin-server.jp',
    'www.yayoi-kk.co.jp',
    'ac-c.co.jp',
    'doridori.co.jp',
    'ec.ed-inter.co.jp',
    'famm.us',
    'moji-family.jp',
    'onsuku.jp',
    'raku-sapo.jp',
    'www.aquaclara.co.jp',
    'www.r4career.co.jp',
    'naruniwa.tv',
    'berpystore.com',
    'andaze.jobshub.life',
    'kikuchi.tax',
    'kurashi-saiene-navi.com',
    'lp.circle-reuse.jp',
    'okane-kurashi-soudan.com',
    'remoful.com',
    'sakucareer-match.jp',
    'www.gleasin.jp',
    'www.worldlibrary.co.jp',
    's15.aspservice.jp',
    'e-venz.com',
    'jp.shokz.com',
    'ods-sauna.online',
    'dep.tc',
    'soregadaiji-wifi.com',
    'www.teamlabbody.com',
    'yoilight.com',
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
      'www18.a8.net',
      'www19.a8.net',
      'www20.a8.net',
      'www21.a8.net',
      'www22.a8.net',
      'www23.a8.net',
      'www24.a8.net',
      'www26.a8.net',
      'www27.a8.net',
      'www28.a8.net',
      'www29.a8.net',
    ],
    clickHosts: ['px.a8.net', 'a8.yayoi-kk.co.jp', 'a8cv.f.012grp.co.jp', 'ems-a8net-tracking.easy-myshop.jp'],
    landingHosts: [
      'f.012grp.co.jp',
      'www.easy-myshop.jp',
      'www.makeshop.jp',
      'www.onamae-server.com',
      'prement.jp',
      'www.shin-server.jp',
      'www.yayoi-kk.co.jp',
      'ac-c.co.jp',
      'doridori.co.jp',
      'ec.ed-inter.co.jp',
      'famm.us',
      'moji-family.jp',
      'onsuku.jp',
      'raku-sapo.jp',
      'www.aquaclara.co.jp',
      'www.r4career.co.jp',
      'naruniwa.tv',
      'berpystore.com',
    ],
    purpose: '広告素材の配信、広告表示・クリック・申込み成果の計測',
    timing: '広告が画面に表示される際、および広告リンクを選択した際',
    retention: 'Cookieの有効期限はプログラムにより数日から3か月程度（A8.net公開情報）',
    policyUrl: 'https://www.a8.net/privacy.html',
  },
  'もしもアフィリエイト': {
    provider: '株式会社もしも',
    assetHosts: ['image.moshimo.com', 'i.moshimo.com'],
    clickHosts: ['af.moshimo.com', 'ac-rt.catsys.jp'],
    landingHosts: [
      'andaze.jobshub.life',
      'f.012grp.co.jp',
      'kikuchi.tax',
      'kurashi-saiene-navi.com',
      'lp.circle-reuse.jp',
      'okane-kurashi-soudan.com',
      'remoful.com',
      'sakucareer-match.jp',
      'www.gleasin.jp',
      'www.worldlibrary.co.jp',
    ],
    purpose: '広告素材の配信、広告表示・クリック・申込み成果の計測',
    timing: '広告が画面に表示される際、および広告リンクを選択した際',
    retention: 'Cookie等の保存期間はプロモーションごとの条件により異なります',
    policyUrl: 'https://www.moshimo.co.jp/company/privacy',
  },
  afb: {
    provider: '株式会社フォーイット',
    assetHosts: ['www.afi-b.com', 't.afi-b.com'],
    clickHosts: ['t.afi-b.com'],
    landingHosts: [
      's15.aspservice.jp',
      'e-venz.com',
      'jp.shokz.com',
      'ods-sauna.online',
      'dep.tc',
      'soregadaiji-wifi.com',
      'www.teamlabbody.com',
      'yoilight.com',
    ],
    purpose: '広告素材の配信、広告表示・クリック・申込み成果の計測',
    timing: '広告が画面に表示される際、および広告リンクを選択した際',
    retention: 'Cookie等の保存期間はプロモーションごとの条件により異なります',
    policyUrl: 'https://www.afi-b.com/privacy/',
  },
} as const;

// センシティブ領域は、自動付与されたintentだけでは解禁しない。
// 運営者が許可した「制度IDの語」とintentの組合せを、広告設定とは別の台帳で照合する。
export const SENSITIVE_AFFILIATE_APPROVAL_RULES = [
  {
    intent: 'fertilityCare',
    approvedGrantIds: [
      'ashoro-advanced-fertility-treatment-subsidy-2026',
      'nakanojo-infertility-treatment-2026',
      'ora-fertility-treatment-subsidy-2026',
    ],
  },
] as const;

export function hasApprovedSensitiveAffiliateContext(grantId: string, intents: readonly string[]): boolean {
  return SENSITIVE_AFFILIATE_APPROVAL_RULES.some((rule) =>
    intents.includes(rule.intent)
    && (rule.approvedGrantIds as readonly string[]).includes(grantId));
}

export function isAllowedAffiliateHost(kind: keyof typeof AFFILIATE_HOST_ALLOWLIST, url: string | null | undefined): boolean {
  if (!url) return false;
  try {
    return (AFFILIATE_HOST_ALLOWLIST[kind] as readonly string[]).includes(new URL(url).host);
  } catch {
    return false;
  }
}
