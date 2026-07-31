export function hasGenericMunicipalityTitle(grant) {
  const title = grant?.title?.trim() ?? '';
  const organization = grant?.organization?.trim() ?? '';

  if (!title || !organization) return false;

  return title === organization
    || title === `${organization} 公式支援制度`
    || title === `${organization}公式支援制度`;
}
