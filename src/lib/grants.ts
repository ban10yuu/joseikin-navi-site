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
import { cityGrantsBatch18 } from '@/data/grants/city-batch18';
import { cityGrantsBatch19 } from '@/data/grants/city-batch19';
import { cityGrantsBatch20 } from '@/data/grants/city-batch20';
import { cityGrantsBatch21 } from '@/data/grants/city-batch21';
import { cityGrantsBatch22 } from '@/data/grants/city-batch22';
import { cityGrantsBatch23 } from '@/data/grants/city-batch23';
import { cityGrantsBatch24 } from '@/data/grants/city-batch24';
import { cityGrantsBatch25 } from '@/data/grants/city-batch25';
import { cityGrantsBatch26 } from '@/data/grants/city-batch26';
import { cityGrantsBatch27 } from '@/data/grants/city-batch27';
import { cityGrantsBatch28 } from '@/data/grants/city-batch28';
import { cityGrantsBatch29 } from '@/data/grants/city-batch29';
import { cityGrantsBatch30 } from '@/data/grants/city-batch30';
import { cityGrantsBatch31 } from '@/data/grants/city-batch31';
import { cityGrantsBatch32 } from '@/data/grants/city-batch32';
import { cityGrantsBatch33 } from '@/data/grants/city-batch33';
import { cityGrantsBatch34 } from '@/data/grants/city-batch34';
import { cityGrantsBatch35 } from '@/data/grants/city-batch35';
import { cityGrantsBatch36 } from '@/data/grants/city-batch36';
import { cityGrantsBatch37 } from '@/data/grants/city-batch37';
import { cityGrantsBatch38 } from '@/data/grants/city-batch38';
import { cityGrantsBatch39 } from '@/data/grants/city-batch39';
import { cityGrantsBatch40 } from '@/data/grants/city-batch40';
import { cityGrantsBatch41 } from '@/data/grants/city-batch41';
import { cityGrantsBatch42 } from '@/data/grants/city-batch42';
import { cityGrantsBatch43 } from '@/data/grants/city-batch43';
import { cityGrantsBatch44 } from '@/data/grants/city-batch44';
import { cityGrantsBatch45 } from '@/data/grants/city-batch45';
import { cityGrantsBatch46 } from '@/data/grants/city-batch46';
import { cityGrantsBatch47 } from '@/data/grants/city-batch47';
import { cityGrantsBatch48 } from '@/data/grants/city-batch48';
import { cityGrantsBatch49 } from '@/data/grants/city-batch49';
import { cityGrantsBatch50 } from '@/data/grants/city-batch50';
import { cityGrantsBatch51 } from '@/data/grants/city-batch51';
import { cityGrantsBatch52 } from '@/data/grants/city-batch52';
import { cityGrantsBatch53 } from '@/data/grants/city-batch53';
import { cityGrantsBatch54 } from '@/data/grants/city-batch54';
import { cityGrantsBatch55 } from '@/data/grants/city-batch55';
import { cityGrantsBatch56 } from '@/data/grants/city-batch56';
import { cityGrantsBatch57 } from '@/data/grants/city-batch57';
import { cityGrantsBatch58 } from '@/data/grants/city-batch58';
import { cityGrantsBatch59 } from '@/data/grants/city-batch59';
import { cityGrantsBatch60 } from '@/data/grants/city-batch60';
import { cityGrantsBatch61 } from '@/data/grants/city-batch61';
import { cityGrantsBatch62 } from '@/data/grants/city-batch62';
import { cityGrantsBatch63 } from '@/data/grants/city-batch63';
import { cityGrantsBatch64 } from '@/data/grants/city-batch64';
import { cityGrantsBatch65 } from '@/data/grants/city-batch65';
import { cityGrantsBatch66 } from '@/data/grants/city-batch66';
import { cityGrantsBatch67 } from '@/data/grants/city-batch67';
import { cityGrantsBatch68 } from '@/data/grants/city-batch68';
import { cityGrantsBatch69 } from '@/data/grants/city-batch69';
import { cityGrantsBatch70 } from '@/data/grants/city-batch70';
import { cityGrantsBatch71 } from '@/data/grants/city-batch71';
import { cityGrantsBatch72 } from '@/data/grants/city-batch72';
import { cityGrantsBatch73 } from '@/data/grants/city-batch73';
import { cityGrantsBatch74 } from '@/data/grants/city-batch74';
import { cityGrantsBatch75 } from '@/data/grants/city-batch75';
import { cityGrantsBatch76 } from '@/data/grants/city-batch76';
import { cityGrantsBatch77 } from '@/data/grants/city-batch77';
import { cityGrantsBatch78 } from '@/data/grants/city-batch78';
import { cityGrantsBatch79 } from '@/data/grants/city-batch79';
import { cityGrantsBatch80 } from '@/data/grants/city-batch80';
import { cityGrantsBatch81 } from '@/data/grants/city-batch81';
import { cityGrantsBatch82 } from '@/data/grants/city-batch82';
import { cityGrantsBatch83 } from '@/data/grants/city-batch83';
import { cityGrantsBatch84 } from '@/data/grants/city-batch84';
import { cityGrantsBatch85 } from '@/data/grants/city-batch85';
import { cityGrantsBatch86 } from '@/data/grants/city-batch86';
import { cityGrantsBatch87 } from '@/data/grants/city-batch87';
import { cityGrantsBatch88 } from '@/data/grants/city-batch88';
import { cityGrantsBatch89 } from '@/data/grants/city-batch89';
import { cityGrantsBatch90 } from '@/data/grants/city-batch90';
import { cityGrantsBatch91 } from '@/data/grants/city-batch91';

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
  ...cityGrantsBatch16, ...cityGrantsBatch17, ...cityGrantsBatch18,
  ...cityGrantsBatch19, ...cityGrantsBatch20, ...cityGrantsBatch21,
  ...cityGrantsBatch22, ...cityGrantsBatch23, ...cityGrantsBatch24,
  ...cityGrantsBatch25, ...cityGrantsBatch26, ...cityGrantsBatch27,
  ...cityGrantsBatch28, ...cityGrantsBatch29, ...cityGrantsBatch30,
  ...cityGrantsBatch31, ...cityGrantsBatch32, ...cityGrantsBatch33,
  ...cityGrantsBatch34, ...cityGrantsBatch35, ...cityGrantsBatch36,
  ...cityGrantsBatch37, ...cityGrantsBatch38, ...cityGrantsBatch39,
  ...cityGrantsBatch40, ...cityGrantsBatch41, ...cityGrantsBatch42,
  ...cityGrantsBatch43, ...cityGrantsBatch44, ...cityGrantsBatch45,
  ...cityGrantsBatch46, ...cityGrantsBatch47, ...cityGrantsBatch48,
  ...cityGrantsBatch49, ...cityGrantsBatch50, ...cityGrantsBatch51,
  ...cityGrantsBatch52, ...cityGrantsBatch53, ...cityGrantsBatch54,
  ...cityGrantsBatch55,
  ...cityGrantsBatch56, ...cityGrantsBatch57, ...cityGrantsBatch58,
  ...cityGrantsBatch59, ...cityGrantsBatch60, ...cityGrantsBatch61,
  ...cityGrantsBatch62, ...cityGrantsBatch63, ...cityGrantsBatch64,
  ...cityGrantsBatch65, ...cityGrantsBatch66, ...cityGrantsBatch67,
  ...cityGrantsBatch68, ...cityGrantsBatch69, ...cityGrantsBatch70,
  ...cityGrantsBatch71, ...cityGrantsBatch72, ...cityGrantsBatch73,
  ...cityGrantsBatch74, ...cityGrantsBatch75, ...cityGrantsBatch76,
  ...cityGrantsBatch77, ...cityGrantsBatch78, ...cityGrantsBatch79,
  ...cityGrantsBatch80, ...cityGrantsBatch81,
  ...cityGrantsBatch82, ...cityGrantsBatch83, ...cityGrantsBatch84,
  ...cityGrantsBatch85, ...cityGrantsBatch86, ...cityGrantsBatch87,
  ...cityGrantsBatch88, ...cityGrantsBatch89, ...cityGrantsBatch90,
  ...cityGrantsBatch91,
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
