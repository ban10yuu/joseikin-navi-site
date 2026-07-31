export function hasGenericMunicipalityTitle(grant) {
  const title = grant?.title?.trim() ?? '';
  const organization = grant?.organization?.trim() ?? '';

  if (!title || !organization) return false;

  return title === organization
    || title === `${organization} 公式支援制度`
    || title === `${organization}公式支援制度`;
}

const browserBoilerplate = /ご利用のブラウザー|InternetExplorerの最新バージョン|当サイトを快適にご利用いただく事ができません/;

export function containsBrowserBoilerplate(text) {
  return browserBoilerplate.test(text ?? '');
}

export function hasTruncatedApplicationPeriod(text) {
  const value = text?.trim() ?? '';
  return value.length > 160 && /に従う$/.test(value);
}

export function hasOverlongAmountExtraction(text) {
  const value = text?.trim() ?? '';
  return value.length > 180 && /に係る(?:支援|補助|助成)[（(]/.test(value);
}
