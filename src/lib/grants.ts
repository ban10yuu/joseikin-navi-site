import { Grant, GrantCategory, GrantType } from '@/lib/types';
import { nationalGrants } from '@/data/grants/national';
import { nationalGrantsNew } from '@/data/grants/national-new';
import { nationalGrantsNew2 } from '@/data/grants/national-new2';
import { localGrants } from '@/data/grants/local';
import { localGrantsBatch1 } from '@/data/grants/local-batch1';
import { localGrantsBatch2 } from '@/data/grants/local-batch2';
import { ngoGrants } from '@/data/grants/ngo';
import { ngoGrantsNew } from '@/data/grants/ngo-new';
import { cityGrantsBatch1 } from '@/data/grants/city-batch1';
import { cityGrantsBatch2 } from '@/data/grants/city-batch2';
import { cityGrantsBatch3 } from '@/data/grants/city-batch3';
import { cityGrantsBatch4 } from '@/data/grants/city-batch4';
import { cityGrantsBatch5 } from '@/data/grants/city-batch5';
import { cityGrantsBatch6 } from '@/data/grants/city-batch6';
import { cityGrantsBatch7 } from '@/data/grants/city-batch7';
import { cityGrantsBatch8 } from '@/data/grants/city-batch8';
import { cityGrantsBatch9 } from '@/data/grants/city-batch9';
import { cityGrantsBatch10 } from '@/data/grants/city-batch10';
import { cityGrantsBatch11 } from '@/data/grants/city-batch11';
import { cityGrantsBatch12 } from '@/data/grants/city-batch12';
import { cityGrantsBatch13 } from '@/data/grants/city-batch13';
import { cityGrantsBatch14 } from '@/data/grants/city-batch14';
import { cityGrantsBatch15 } from '@/data/grants/city-batch15';
import { cityGrantsBatch16 } from '@/data/grants/city-batch16';
import { cityGrantsBatch17 } from '@/data/grants/city-batch17';

// ── All grants (全件公開) ──
const allGrants: Grant[] = [
  ...nationalGrants, ...nationalGrantsNew, ...nationalGrantsNew2,
  ...localGrants, ...localGrantsBatch1, ...localGrantsBatch2,
  ...ngoGrants, ...ngoGrantsNew,
  ...cityGrantsBatch1, ...cityGrantsBatch2, ...cityGrantsBatch3,
  ...cityGrantsBatch4, ...cityGrantsBatch5, ...cityGrantsBatch6,
  ...cityGrantsBatch7, ...cityGrantsBatch8, ...cityGrantsBatch9,
  ...cityGrantsBatch10, ...cityGrantsBatch11, ...cityGrantsBatch12,
  ...cityGrantsBatch13, ...cityGrantsBatch14, ...cityGrantsBatch15,
  ...cityGrantsBatch16, ...cityGrantsBatch17,
];

const publishedGrants = allGrants
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
