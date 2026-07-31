export function hasGenericMunicipalityTitle(grant) {
  const title = grant?.title?.trim() ?? '';
  const organization = grant?.organization?.trim() ?? '';

  if (!title || !organization) return false;

  return title === organization
    || title === `${organization} 公式支援制度`
    || title === `${organization}公式支援制度`;
}

const browserBoilerplate = /ご利用のブラウザー|InternetExplorerの最新バージョン|当サイトを快適にご利用いただく事ができません|当サイトはJavaScriptを使用したコンテンツや機能を提供しています|ページの先頭です。\s*メニューを飛ばして本文へ/;
const publicNavigationBoilerplate = /本文へ移動\s+文字サイズ|このページに関するお問い合わせ先|ページの先頭へ\s+暮らし・手続き|プライバシーポリシー\s*[｜|]\s*著作権|ホーム\s+組織から探す/;

export function containsBrowserBoilerplate(text) {
  return browserBoilerplate.test(text ?? '');
}

export function containsPublicNavigationBoilerplate(text) {
  return publicNavigationBoilerplate.test(text ?? '');
}

export function hasTruncatedApplicationPeriod(text) {
  const value = text?.trim() ?? '';
  return value.length > 160 && /に従う$/.test(value);
}

export function hasOverlongAmountExtraction(text) {
  const value = text?.trim() ?? '';
  return value.length > 120 && /に係る(?:支援|補助|助成)[（(]/.test(value);
}
