export interface MunicipalityPrerenderGroup {
  prefecture: string;
  municipality: string;
  count: number;
}

export function selectMunicipalityPrerenderGroups(
  groups: MunicipalityPrerenderGroup[],
  limit: number
): MunicipalityPrerenderGroup[] {
  if (limit <= 0) return [];

  return [...groups]
    .sort((left, right) =>
      right.count - left.count
      || left.prefecture.localeCompare(right.prefecture, 'ja')
      || left.municipality.localeCompare(right.municipality, 'ja')
    )
    .slice(0, limit);
}
