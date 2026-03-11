import { MetadataRoute } from 'next';
import { getAllGrantsUnfiltered, getAllTags, tagToSlug } from '@/lib/grants';
import { CATEGORY_LABELS, PREFECTURES } from '@/lib/types';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://joseikin-navi-site.vercel.app';
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/subscribe/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/contact/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.keys(CATEGORY_LABELS).map((cat) => ({
    url: `${baseUrl}/category/${cat}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const prefecturePages: MetadataRoute.Sitemap = PREFECTURES
    .filter((p) => p !== '全国')
    .map((pref) => ({
      url: `${baseUrl}/prefecture/${encodeURIComponent(pref)}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const grantPages: MetadataRoute.Sitemap = getAllGrantsUnfiltered().map((grant) => ({
    url: `${baseUrl}/grant/${grant.slug}/`,
    lastModified: grant.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const tagPages: MetadataRoute.Sitemap = getAllTags().map((tag) => ({
    url: `${baseUrl}/tag/${tagToSlug(tag)}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...categoryPages, ...prefecturePages, ...grantPages, ...tagPages];
}
