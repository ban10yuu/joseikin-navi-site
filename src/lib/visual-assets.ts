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

export const HOME_HERO_MOTIFS = [
  { label: '子育て', src: motif('childcare') },
  { label: '住まい', src: motif('housing') },
  { label: '事業支援', src: motif('business-growth') },
  { label: '公式情報', src: motif('official-source-search') },
] as const;

export const HOME_SEARCH_GUIDE_VISUALS = [
  {
    title: '対象を選ぶ',
    description: '個人・家族、事業者から選択',
    src: motif('student'),
  },
  {
    title: '地域・目的を入力',
    description: 'お住まいの地域や目的で絞る',
    src: motif('regional-revitalization'),
  },
  {
    title: '公式情報を確認',
    description: '募集要項で対象条件を最終確認',
    src: motif('official-source-search'),
  },
] as const;

export function getCategoryVisual(category: string): string {
  return CATEGORY_VISUALS[category as GrantCategory] ?? CATEGORY_VISUALS.living;
}
