import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getGrantsByPrefecture, getOfficialLinkedGrants } from '@/lib/grants';
import { toSiteUrl } from '@/lib/site-url';
import { CATEGORY_LABELS, PREFECTURES } from '@/lib/types';
import { isNewsletterEnabled } from '@/lib/newsletter';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const staticPaths = ['/', '/grants/', '/guide/', '/faq/', '/about/', '/editorial-policy/', '/information-method/', '/ai-policy/', '/advertising-policy/', '/disclaimer/', '/correction/', '/privacy/', '/contact/'];
  if (isNewsletterEnabled(siteConfig.newsletter.endpoint)) staticPaths.push('/subscribe/');
  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path, index) => ({ url: toSiteUrl(path), lastModified: now, changeFrequency: index < 2 ? 'daily' : 'monthly', priority: index === 0 ? 1 : index === 1 ? 0.9 : 0.5 }));
  const categories: MetadataRoute.Sitemap = Object.keys(CATEGORY_LABELS).map((category) => ({ url: toSiteUrl(`/category/${category}/`), lastModified: now, changeFrequency: 'weekly', priority: 0.8 }));
  const prefectures: MetadataRoute.Sitemap = PREFECTURES.filter((prefecture) => prefecture !== '全国' && getGrantsByPrefecture(prefecture).length > 0).map((prefecture) => ({ url: toSiteUrl(`/prefecture/${encodeURIComponent(prefecture)}/`), lastModified: now, changeFrequency: 'weekly', priority: 0.7 }));
  const grants: MetadataRoute.Sitemap = getOfficialLinkedGrants().filter((grant) => grant.indexStatus !== 'noindex' && grant.contentStatus === 'published').map((grant) => ({ url: toSiteUrl(`/grant/${grant.slug}/`), lastModified: grant.contentUpdatedAt ?? grant.verifiedAt ?? grant.publishedAt, changeFrequency: 'monthly', priority: 0.7 }));
  return [...staticPages, ...categories, ...prefectures, ...grants];
}
