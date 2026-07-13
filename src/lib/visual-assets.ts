import type { GrantCategory, Purpose } from './types';

const motif = (name: string) => `/images/illustrations/motifs/${name}.webp`;
const scene = (name: string) => `/images/illustrations/scenes/${name}.webp`;

export const CATEGORY_VISUALS: Record<GrantCategory, string> = {
  childcare: motif('childcare'),
  housing: motif('housing'),
  medical: motif('medical'),
  education: motif('education'),
  employment: motif('employment'),
  nursing: motif('nursing'),
  living: motif('living'),
  disaster: motif('disaster'),
};

export const PURPOSE_VISUALS: Partial<Record<Purpose, string>> = {
  childcare: motif('childcare'),
  housing: motif('housing'),
  medical: motif('medical'),
  education: motif('education'),
  employment: motif('employment'),
  startup: motif('startup'),
  businessGrowth: motif('business-growth'),
  digitalTransformation: motif('digital-transformation'),
  energySaving: motif('energy-saving'),
  wageIncrease: motif('wage-increase'),
  welfare: motif('welfare'),
  disaster: motif('disaster'),
  livingSupport: motif('living'),
  regionalRevitalization: motif('regional-revitalization'),
  research: motif('research'),
};

export const ILLUSTRATION_VISUALS = {
  hero: scene('hero-community-search'),
  individual: scene('audience-individual'),
  business: scene('audience-business'),
  guide: scene('application-guide'),
  verification: scene('source-verification'),
  region: scene('region-search'),
} as const;

export function getCategoryVisual(category: string): string {
  return CATEGORY_VISUALS[category as GrantCategory] ?? CATEGORY_VISUALS.living;
}
