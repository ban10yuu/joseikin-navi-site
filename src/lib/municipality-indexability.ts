export interface MunicipalityGrantCount {
  count: number;
}

export const MIN_INDEXABLE_MUNICIPALITY_GRANTS = 3;

export function isIndexableMunicipalityGroup(
  group: MunicipalityGrantCount
): boolean {
  return group.count >= MIN_INDEXABLE_MUNICIPALITY_GRANTS;
}
