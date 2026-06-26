import { Grant, GrantCategory, GrantType } from '@/lib/types';
import { getGrantSourceStatus, hasOfficialSource, isManuallyVerifiedGrant } from '@/lib/grant-source';
import { isGrantExpired } from '@/lib/deadline';
import { getSearchTokens, matchesSearchText } from '@/lib/search';
import { verifiedBusinessGrants2026 } from '@/data/grants/verified-business-2026';
import { verifiedHyogoChildcareGrants2026 } from '@/data/grants/verified-hyogo-childcare-2026';
import { verifiedHyogoMunicipalChildcareGrants2026 } from '@/data/grants/verified-hyogo-municipal-childcare-2026';
import { verifiedMunicipalChildMedicalGrants2026 } from '@/data/grants/verified-municipal-child-medical-2026';
import { verifiedMunicipalChildMedicalTier5Batch2Grants2026 } from '@/data/grants/verified-municipal-child-medical-tier5-batch2-2026';
import { verifiedMunicipalChildMedicalTier5Batch3Grants2026 } from '@/data/grants/verified-municipal-child-medical-tier5-batch3-2026';
import { verifiedLocalMiscGrants2026 } from '@/data/grants/verified-local-misc-2026';
import { verifiedTokyoLocalGrants2026 } from '@/data/grants/verified-tokyo-local-2026';
import { verifiedNationalChildcareGrants2026 } from '@/data/grants/verified-national-childcare-2026';
import { verifiedNationalContinuousSupportGrants2026 } from '@/data/grants/verified-national-continuous-support-2026';
import { verifiedNationalCoreWelfareGrants2026 } from '@/data/grants/verified-national-core-welfare-2026';
import { verifiedNationalDeadlineFixes2026 } from '@/data/grants/verified-national-deadline-fixes-2026';
import { verifiedNationalEmploymentSupportGrants2026 } from '@/data/grants/verified-national-employment-support-2026';
import { verifiedNationalMiscGrants2026 } from '@/data/grants/verified-national-misc-2026';
import { verifiedNationalSupportGrants2026 } from '@/data/grants/verified-national-support-2026';
import { verifiedNationalBusinessLegacyGrants2026 } from '@/data/grants/verified-national-business-legacy-2026';
import { verifiedNgoNationalGrants2026 } from '@/data/grants/verified-ngo-national-2026';
import { verifiedNgoMiscGrants2026 } from '@/data/grants/verified-ngo-misc-2026';
import { verifiedPrefectureChildMedicalGrants2026 } from '@/data/grants/verified-prefecture-child-medical-2026';
import { verifiedTenriChildcareGrants2026 } from '@/data/grants/verified-tenri-childcare-2026';
import { suppressedOfficialUrls } from '@/data/grants/link-audit-suppressions';
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
import { cityGrantsBatch92 } from '@/data/grants/city-batch92';
import { cityGrantsBatch93 } from '@/data/grants/city-batch93';
import { cityGrantsBatch94 } from '@/data/grants/city-batch94';
import { cityGrantsBatch95 } from '@/data/grants/city-batch95';
import { cityGrantsBatch96 } from '@/data/grants/city-batch96';
import { cityGrantsBatch97 } from '@/data/grants/city-batch97';
import { cityGrantsBatch98 } from '@/data/grants/city-batch98';
import { cityGrantsBatch99 } from '@/data/grants/city-batch99';
import { cityGrantsBatch100 } from '@/data/grants/city-batch100';

// ── All grants ──
// 新規の手動検証データを先頭に置く。slug が重複した場合は先勝ちにして、
// 古いLLM生成データより公式出典確認済みデータを優先する。
const rawGrants: Grant[] = [
  ...verifiedTenriChildcareGrants2026,
  ...verifiedHyogoMunicipalChildcareGrants2026,
  ...verifiedHyogoChildcareGrants2026,
  ...verifiedMunicipalChildMedicalGrants2026,
  ...verifiedMunicipalChildMedicalTier5Batch2Grants2026,
  ...verifiedMunicipalChildMedicalTier5Batch3Grants2026,
  ...verifiedTokyoLocalGrants2026,
  ...verifiedLocalMiscGrants2026,
  ...verifiedPrefectureChildMedicalGrants2026,
  ...verifiedNationalChildcareGrants2026,
  ...verifiedNationalCoreWelfareGrants2026,
  ...verifiedNationalContinuousSupportGrants2026,
  ...verifiedNationalDeadlineFixes2026,
  ...verifiedNationalEmploymentSupportGrants2026,
  ...verifiedNationalMiscGrants2026,
  ...verifiedNationalSupportGrants2026,
  ...verifiedNationalBusinessLegacyGrants2026,
  ...verifiedNgoNationalGrants2026,
  ...verifiedNgoMiscGrants2026,
  ...verifiedBusinessGrants2026,
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
  ...cityGrantsBatch91, ...cityGrantsBatch92, ...cityGrantsBatch93,
  ...cityGrantsBatch94, ...cityGrantsBatch95, ...cityGrantsBatch96,
  ...cityGrantsBatch97, ...cityGrantsBatch98, ...cityGrantsBatch99,
  ...cityGrantsBatch100,
];

function dedupeGrantsBySlug(grants: Grant[]): Grant[] {
  const seen = new Set<string>();
  return grants.filter((grant) => {
    if (seen.has(grant.slug)) return false;
    seen.add(grant.slug);
    return true;
  });
}

function stripHtml(value: string): string {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildGrantSearchText(grant: Grant): string {
  const sectionText = grant.sections
    .flatMap((section) => [section.heading, stripHtml(section.content)])
    .join(' ');

  return [
    grant.title,
    grant.organization,
    grant.type,
    grant.maxAmount,
    grant.category,
    grant.prefecture,
    grant.tags.join(' '),
    grant.eligibility,
    grant.targetIncome,
    grant.targetOccupation,
    grant.applicationPeriod,
    grant.description,
    sectionText,
    grant.sourceName,
    grant.sourceNote,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function isNonSpecificGovernmentHomepage(value: string | undefined): boolean {
  if (!value) return false;

  try {
    const url = new URL(value);
    const hostname = url.hostname.replace(/^www\d*\./, '');
    const pathname = url.pathname.replace(/\/+$/, '') || '/';

    if (pathname !== '/') return false;

    const knownMunicipalHomepageHosts = new Set([
      'nishi.or.jp',
    ]);

    return (
      knownMunicipalHomepageHosts.has(hostname) ||
      /(^|\.)city\./.test(hostname) ||
      /(^|\.)town\./.test(hostname) ||
      /(^|\.)village\./.test(hostname) ||
      /(^|\.)pref\./.test(hostname) ||
      /^(city|town|village|pref)-/.test(hostname)
    );
  } catch {
    return false;
  }
}

function sanitizeAuditedLinks(grant: Grant): Grant {
  const suppressedOfficialUrl = Boolean(
    grant.officialUrl &&
    (suppressedOfficialUrls.has(grant.officialUrl) || isNonSpecificGovernmentHomepage(grant.officialUrl))
  );
  const sourceUrls = grant.sourceUrls?.filter(
    (url) => !suppressedOfficialUrls.has(url) && !isNonSpecificGovernmentHomepage(url)
  );
  const suppressedSourceCount = (grant.sourceUrls?.length || 0) - (sourceUrls?.length || 0);

  if (!suppressedOfficialUrl && suppressedSourceCount === 0) {
    return {
      ...grant,
      searchText: buildGrantSearchText(grant),
    };
  }

  const auditNote = [
    suppressedOfficialUrl ? '旧公式URLまたは自治体トップページ' : '',
    suppressedSourceCount > 0 ? `出典URL${suppressedSourceCount}件` : '',
  ]
    .filter(Boolean)
    .join('・');

  const sanitized: Grant = {
    ...grant,
    officialUrl: suppressedOfficialUrl ? '' : grant.officialUrl,
    sourceUrls: sourceUrls && sourceUrls.length > 0 ? sourceUrls : undefined,
    sourceNote: [
      grant.sourceNote,
      `${auditNote}は2026-06-24時点のリンク監査または出典精度点検により、404・到達不可・制度個別ページではないことを確認したため、公式リンクから外しています。制度内容は再確認対象です。`,
    ].filter(Boolean).join(' '),
  };

  return {
    ...sanitized,
    searchText: buildGrantSearchText(sanitized),
  };
}

const allGrants: Grant[] = dedupeGrantsBySlug(rawGrants.map(sanitizeAuditedLinks));

export { getGrantSourceStatus, hasOfficialSource, isGrantExpired, isManuallyVerifiedGrant };

function getSourceRank(grant: Grant): number {
  if (isManuallyVerifiedGrant(grant)) return 2;
  if (hasOfficialSource(grant)) return 1;
  return 0;
}

const publishedGrants = [...allGrants].sort((a, b) => {
  const sourceDiff = getSourceRank(b) - getSourceRank(a);
  if (sourceDiff !== 0) return sourceDiff;

  const activeDiff = Number(isGrantExpired(a)) - Number(isGrantExpired(b));
  if (activeDiff !== 0) return activeDiff;

  return b.maxAmountNum - a.maxAmountNum;
});

const activePublishedGrants = publishedGrants.filter((grant) => !isGrantExpired(grant));
const expiredGrants = publishedGrants.filter((grant) => isGrantExpired(grant));
const officialLinkedGrants = activePublishedGrants.filter(hasOfficialSource);
const allOfficialLinkedGrants = publishedGrants.filter(hasOfficialSource);
const manuallyVerifiedGrants = activePublishedGrants.filter(isManuallyVerifiedGrant);

// ── All grants (unfiltered, for sitemap) ──
export function getAllGrantsUnfiltered(): Grant[] {
  return allGrants;
}

// ── Published grants ──
export function getAllGrants(): Grant[] {
  return activePublishedGrants;
}

export function getOfficialLinkedGrants(options: { includeExpired?: boolean } = {}): Grant[] {
  return options.includeExpired ? allOfficialLinkedGrants : officialLinkedGrants;
}

export function getManuallyVerifiedGrants(): Grant[] {
  return manuallyVerifiedGrants;
}

export function getExpiredGrants(): Grant[] {
  return expiredGrants;
}

export function getGrantQualityStats(): {
  total: number;
  unfilteredTotal: number;
  officialLinked: number;
  manuallyVerified: number;
  unverified: number;
  duplicatedSlugsRemoved: number;
  active: number;
  expired: number;
} {
  return {
    total: activePublishedGrants.length,
    unfilteredTotal: allGrants.length,
    active: activePublishedGrants.length,
    expired: expiredGrants.length,
    officialLinked: officialLinkedGrants.length,
    manuallyVerified: manuallyVerifiedGrants.length,
    unverified: activePublishedGrants.length - officialLinkedGrants.length,
    duplicatedSlugsRemoved: rawGrants.length - allGrants.length,
  };
}

export function getGrantBySlug(slug: string): Grant | undefined {
  return allGrants.find((g) => g.slug === slug);
}

export function grantMatchesCategory(grant: Grant, category: GrantCategory): boolean {
  return grant.category === category || grant.relatedCategories?.includes(category) === true;
}

export function getGrantsByCategory(category: GrantCategory): Grant[] {
  return officialLinkedGrants.filter((g) => grantMatchesCategory(g, category));
}

export function getGrantsByType(type: GrantType): Grant[] {
  return officialLinkedGrants.filter((g) => g.type === type);
}

export function getGrantsByPrefecture(prefecture: string): Grant[] {
  return officialLinkedGrants.filter(
    (g) => g.prefecture === prefecture || g.prefecture === '全国'
  );
}

export function getPopularGrants(limit = 10): Grant[] {
  return officialLinkedGrants.slice(0, limit);
}

export function getRelatedGrants(grant: Grant, limit = 6): Grant[] {
  const pool = hasOfficialSource(grant) ? officialLinkedGrants : publishedGrants;
  // Same category first, then same prefecture, then others
  const sameCategory = pool.filter(
    (g) => grantMatchesCategory(g, grant.category) && g.slug !== grant.slug
  );
  const samePrefecture = pool.filter(
    (g) => g.prefecture === grant.prefecture && g.category !== grant.category && g.slug !== grant.slug
  );
  return [...sameCategory, ...samePrefecture].slice(0, limit);
}

export function searchGrants(query: string): Grant[] {
  if (getSearchTokens(query).length === 0) return [];

  return activePublishedGrants.filter(
    (g) => matchesSearchText(g.searchText || buildGrantSearchText(g), query)
  );
}

export function getAllSlugs(): string[] {
  return allGrants.map((g) => g.slug);
}

// ── Tag utilities ──
export function getAllTags(options: { includeExpired?: boolean } = {}): string[] {
  const tagSet = new Set<string>();
  const pool = options.includeExpired ? allOfficialLinkedGrants : officialLinkedGrants;
  pool.forEach((g) => g.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getGrantsByTag(tag: string): Grant[] {
  return officialLinkedGrants.filter((g) => g.tags.includes(tag));
}

export function tagToSlug(tag: string): string {
  return encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'));
}

export function slugToTag(slug: string, options: { includeExpired?: boolean } = {}): string | undefined {
  const decoded = decodeURIComponent(slug);
  const tags = getAllTags(options);
  return tags.find(
    (t) => t.toLowerCase().replace(/\s+/g, '-') === decoded
  );
}

// ── Prefecture utilities ──
export function getActivePrefectures(): string[] {
  const prefSet = new Set<string>();
  officialLinkedGrants.forEach((g) => {
    if (g.prefecture !== '全国') prefSet.add(g.prefecture);
  });
  return Array.from(prefSet).sort();
}

// ── Category utilities ──
export function getActiveCategories(): GrantCategory[] {
  const catSet = new Set<GrantCategory>();
  officialLinkedGrants.forEach((g) => {
    catSet.add(g.category);
    g.relatedCategories?.forEach((category) => catSet.add(category));
  });
  return Array.from(catSet);
}
