import { Grant, GrantCategory, GrantType } from '@/lib/types';
import { nationalGrants } from '@/data/grants/national';
import { localGrants } from '@/data/grants/local';
import { ngoGrants } from '@/data/grants/ngo';

// ── All grants (date-filtered) ──
const allGrants: Grant[] = [...nationalGrants, ...localGrants, ...ngoGrants];

const BUILD_DATE = new Date().toISOString().slice(0, 10);
const publishedGrants = allGrants
  .filter((g) => g.publishedAt <= BUILD_DATE)
  .sort((a, b) => b.maxAmountNum - a.maxAmountNum);

// ── All grants (unfiltered, for sitemap) ──
export function getAllGrantsUnfiltered(): Grant[] {
  return allGrants;
}

// ── Published grants ──
export function getAllGrants(): Grant[] {
  return publishedGrants;
}

export function getGrantBySlug(slug: string): Grant | undefined {
  return allGrants.find((g) => g.slug === slug);
}

export function getGrantsByCategory(category: GrantCategory): Grant[] {
  return publishedGrants.filter((g) => g.category === category);
}

export function getGrantsByType(type: GrantType): Grant[] {
  return publishedGrants.filter((g) => g.type === type);
}

export function getGrantsByPrefecture(prefecture: string): Grant[] {
  return publishedGrants.filter(
    (g) => g.prefecture === prefecture || g.prefecture === '全国'
  );
}

export function getPopularGrants(limit = 10): Grant[] {
  return publishedGrants.slice(0, limit);
}

export function getRelatedGrants(grant: Grant, limit = 6): Grant[] {
  // Same category first, then same prefecture, then others
  const sameCategory = publishedGrants.filter(
    (g) => g.category === grant.category && g.slug !== grant.slug
  );
  const samePrefecture = publishedGrants.filter(
    (g) => g.prefecture === grant.prefecture && g.category !== grant.category && g.slug !== grant.slug
  );
  return [...sameCategory, ...samePrefecture].slice(0, limit);
}

export function searchGrants(query: string): Grant[] {
  const q = query.toLowerCase();
  return publishedGrants.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.tags.some((t) => t.toLowerCase().includes(q)) ||
      g.organization.toLowerCase().includes(q) ||
      g.prefecture.includes(q) ||
      g.eligibility.toLowerCase().includes(q)
  );
}

export function getAllSlugs(): string[] {
  return allGrants.map((g) => g.slug);
}

// ── Tag utilities ──
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  allGrants.forEach((g) => g.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getGrantsByTag(tag: string): Grant[] {
  return publishedGrants.filter((g) => g.tags.includes(tag));
}

export function tagToSlug(tag: string): string {
  return encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'));
}

export function slugToTag(slug: string): string | undefined {
  const decoded = decodeURIComponent(slug);
  const tags = getAllTags();
  return tags.find(
    (t) => t.toLowerCase().replace(/\s+/g, '-') === decoded
  );
}

// ── Prefecture utilities ──
export function getActivePrefectures(): string[] {
  const prefSet = new Set<string>();
  publishedGrants.forEach((g) => {
    if (g.prefecture !== '全国') prefSet.add(g.prefecture);
  });
  return Array.from(prefSet).sort();
}

// ── Category utilities ──
export function getActiveCategories(): GrantCategory[] {
  const catSet = new Set<GrantCategory>();
  publishedGrants.forEach((g) => catSet.add(g.category));
  return Array.from(catSet);
}
