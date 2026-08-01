import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import {
  getMunicipalityGroups,
  getOfficialLinkedGrants,
  grantMatchesCategory,
  isIndexableMunicipalityGroup,
} from '@/lib/grants';
import { toSiteUrl } from '@/lib/site-url';
import { CATEGORY_LABELS, PREFECTURES, type SupportType } from '@/lib/types';
import { isNewsletterEnabled } from '@/lib/newsletter';
import { getCollectionLastModified, getGrantLastModified } from '@/lib/sitemap-dates';

export const dynamic = 'force-static';
export const revalidate = 3600;

const SEO_SUPPORT_TYPES: SupportType[] = ['subsidy', 'grant', 'benefit', 'allowance', 'loan', 'scholarshipLoan', 'reduction', 'taxCredit', 'insuranceBenefit', 'discount', 'voucher', 'inKind'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const grantsForSitemap = (await getOfficialLinkedGrants()).filter((grant) => grant.indexStatus !== 'noindex' && grant.contentStatus === 'published');
  const listingLastModified = getCollectionLastModified(grantsForSitemap, now);
  const grantsByCategory = (category: keyof typeof CATEGORY_LABELS) => grantsForSitemap.filter((grant) => grantMatchesCategory(grant, category));
  const grantsBySupportType = (supportType: SupportType) => grantsForSitemap.filter((grant) => grant.supportType === supportType);
  const grantsByPrefecture = (prefecture: string) => grantsForSitemap.filter((grant) => grant.prefecture === prefecture || grant.prefecture === '全国');
  const staticPaths = ['/', '/grants/', '/guide/', '/faq/', '/about/', '/editorial-policy/', '/information-method/', '/ai-policy/', '/advertising-policy/', '/disclaimer/', '/correction/', '/privacy/', '/contact/'];
  if (isNewsletterEnabled(siteConfig.newsletter.endpoint)) staticPaths.push('/subscribe/');
  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path, index) => ({
    url: toSiteUrl(path),
    ...(index < 2 && listingLastModified ? { lastModified: listingLastModified } : {}),
  }));
  const categories: MetadataRoute.Sitemap = Object.keys(CATEGORY_LABELS).flatMap((categoryValue) => {
    const category = categoryValue as keyof typeof CATEGORY_LABELS;
    const categoryGrants = grantsByCategory(category);
    return categoryGrants.length === 0 ? [] : [{
      url: toSiteUrl(`/category/${category}/`),
      lastModified: getCollectionLastModified(categoryGrants, now),
    }];
  });
  const supportTypes: MetadataRoute.Sitemap = SEO_SUPPORT_TYPES.flatMap((supportType) => {
    const matchingGrants = grantsBySupportType(supportType);
    return matchingGrants.length === 0 ? [] : [{
      url: toSiteUrl(`/support-type/${supportType}/`),
      lastModified: getCollectionLastModified(matchingGrants, now),
    }];
  });
  const prefectures: MetadataRoute.Sitemap = PREFECTURES.filter((prefecture) => prefecture !== '全国' && grantsByPrefecture(prefecture).length > 0).map((prefecture) => ({
    url: toSiteUrl(`/prefecture/${encodeURIComponent(prefecture)}/`),
    lastModified: getCollectionLastModified(grantsByPrefecture(prefecture), now),
  }));
  const grants: MetadataRoute.Sitemap = grantsForSitemap.map((grant) => ({
    url: toSiteUrl(`/grant/${grant.slug}/`),
    lastModified: getGrantLastModified(grant, now),
  }));

  const municipalityPages: MetadataRoute.Sitemap = (await getMunicipalityGroups())
    .filter(isIndexableMunicipalityGroup)
    .map((group) => {
      const grantsForMunicipality = grantsForSitemap.filter((grant) => grant.prefecture === group.prefecture && grant.municipality === group.municipality);
      return {
        url: toSiteUrl(`/municipality/${encodeURIComponent(group.prefecture)}/${encodeURIComponent(group.municipality)}/`),
        lastModified: getCollectionLastModified(grantsForMunicipality, now),
      };
    });

  return [...staticPages, ...categories, ...supportTypes, ...prefectures, ...municipalityPages, ...grants];
}
