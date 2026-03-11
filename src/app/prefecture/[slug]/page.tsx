import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGrantsByPrefecture } from '@/lib/grants';
import { PREFECTURES, CATEGORY_LABELS, GrantCategory } from '@/lib/types';
import { BreadcrumbJsonLd, CollectionJsonLd } from '@/components/JsonLd';
import GrantCard from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';

const prefectures = PREFECTURES.filter((p) => p !== '全国');

const REGION_MAP: Record<string, string[]> = {
  '北海道・東北': ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
  '関東': ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'],
  '中部': ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県'],
  '近畿': ['滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'],
  '中国': ['鳥取県', '島根県', '岡山県', '広島県', '山口県'],
  '四国': ['徳島県', '香川県', '愛媛県', '高知県'],
  '九州・沖縄': ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'],
};

function prefToSlug(pref: string): string {
  return encodeURIComponent(pref);
}

function slugToPref(slug: string): string | undefined {
  const decoded = decodeURIComponent(slug);
  return prefectures.find((p) => p === decoded);
}

function getRegion(pref: string): string {
  for (const [region, prefs] of Object.entries(REGION_MAP)) {
    if (prefs.includes(pref)) return region;
  }
  return '';
}

function getNearbyPrefectures(pref: string): string[] {
  const region = getRegion(pref);
  if (!region) return [];
  return (REGION_MAP[region] || []).filter((p) => p !== pref);
}

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return prefectures.map((pref) => ({ slug: prefToSlug(pref) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pref = slugToPref(slug);
  if (!pref) return {};

  const title = `${pref}の助成金・補助金一覧【2026年最新版】`;
  const description = `${pref}で利用できる助成金・補助金・給付金を一覧でご紹介。${pref}独自の制度から全国共通の国の制度まで網羅的に掲載。申請方法・対象者・支給額を詳しく解説。`;

  return {
    title,
    description,
    keywords: [`${pref} 助成金`, `${pref} 補助金`, `${pref} 給付金`, `${pref} 支援金`, '助成金 一覧', '補助金 申請'],
    openGraph: {
      title,
      description,
      url: `https://joseikin-navi-site.vercel.app/prefecture/${slug}/`,
    },
    alternates: {
      canonical: `https://joseikin-navi-site.vercel.app/prefecture/${slug}/`,
    },
  };
}

export default async function PrefecturePage({ params }: Props) {
  const { slug } = await params;
  const pref = slugToPref(slug);
  if (!pref) notFound();

  const grants = getGrantsByPrefecture(pref);
  const localGrants = grants.filter((g) => g.prefecture === pref);
  const nationalGrants = grants.filter((g) => g.prefecture === '全国');
  const nearby = getNearbyPrefectures(pref);
  const region = getRegion(pref);
  const baseUrl = 'https://joseikin-navi-site.vercel.app';

  const categoryGroups = Object.entries(CATEGORY_LABELS).map(([key, label]) => ({
    key: key as GrantCategory,
    label,
    grants: grants.filter((g) => g.category === key),
  })).filter((g) => g.grants.length > 0);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'ホーム', url: baseUrl },
        { name: '地域から探す', url: `${baseUrl}/prefecture/${slug}/` },
        { name: pref, url: `${baseUrl}/prefecture/${slug}/` },
      ]} />
      <CollectionJsonLd
        name={`${pref}の助成金・補助金一覧`}
        description={`${pref}で利用できる助成金・補助金・給付金の一覧`}
        url={`${baseUrl}/prefecture/${slug}/`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <nav className="text-sm text-slate-400 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <span className="text-slate-600">{pref}</span>
        </nav>

        <div className="mb-8">
          <div className="inline-block text-xs font-medium px-3 py-1 rounded-full border bg-blue-100 text-blue-700 border-blue-200 mb-3">
            {region}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">
            {pref}の助成金・補助金一覧
          </h1>
          <p className="text-sm text-slate-500">
            {pref}で利用できる助成金・補助金を{grants.length}件掲載しています
            （{pref}独自：{localGrants.length}件、全国共通：{nationalGrants.length}件）。
          </p>
        </div>

        {/* Category Quick Nav */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryGroups.map(({ key, label, grants: catGrants }) => (
            <a key={key} href={`#cat-${key}`} className="filter-chip">
              {label}（{catGrants.length}）
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div>
            {/* Local Grants */}
            {localGrants.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-600">
                  {pref}独自の制度（{localGrants.length}件）
                </h2>
                <div className="space-y-4">
                  {localGrants.map((grant) => (
                    <GrantCard key={grant.slug} grant={grant} />
                  ))}
                </div>
              </div>
            )}

            {/* National Grants by Category */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-emerald-600">
                全国共通の制度（{nationalGrants.length}件）
              </h2>
              {categoryGroups.map(({ key, label, grants: catGrants }) => {
                const natInCat = catGrants.filter((g) => g.prefecture === '全国');
                if (natInCat.length === 0) return null;
                return (
                  <div key={key} id={`cat-${key}`} className="mb-8">
                    <h3 className="text-base font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
                      {label}（{natInCat.length}件）
                    </h3>
                    <div className="space-y-4">
                      {natInCat.map((grant) => (
                        <GrantCard key={grant.slug} grant={grant} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nearby Prefectures */}
            {nearby.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h2 className="text-base font-bold text-slate-700 mb-3">
                  近隣の都道府県の助成金
                </h2>
                <div className="flex flex-wrap gap-2">
                  {nearby.map((p) => (
                    <Link
                      key={p}
                      href={`/prefecture/${prefToSlug(p)}/`}
                      className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded hover:border-blue-400 hover:text-blue-700 transition-colors"
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
