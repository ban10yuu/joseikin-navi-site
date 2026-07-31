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
