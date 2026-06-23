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
  const description = `${pref}で利用できる助成金・補助金・給付金のうち、公式リンクが確認できる制度を中心に掲載。${pref}独自の制度と全国共通の制度を整理しています。`;

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
  const visibleLocalGrants = localGrants.slice(0, 60);
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
        <nav className="text-sm text-faint mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-navy hover:underline underline-offset-2">ホーム</Link>
          <span>/</span>
          <span className="text-muted">{pref}</span>
        </nav>

        <div className="mb-8 border-l-4 border-accent pl-4">
          <div className="inline-block text-xs font-bold px-3 py-1 rounded-full border-[1.5px] bg-wash text-navy border-line-strong mb-3">
            {region}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy mb-2">
            {pref}の助成金・補助金一覧
          </h1>
          <p className="text-sm text-muted">
            {pref}で利用できる公式リンクありの助成金・補助金を{grants.length}件掲載しています
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
                <h2 className="text-lg font-bold text-navy mb-4 pb-2 border-b-[3px] border-accent">
                  {pref}独自の制度（{localGrants.length}件）
                </h2>
                <div className="space-y-4">
                  {visibleLocalGrants.map((grant) => (
                    <GrantCard key={grant.slug} grant={grant} />
                  ))}
                </div>
                {localGrants.length > visibleLocalGrants.length && (
                  <div className="mt-4 rounded-xl border-2 border-line-strong bg-wash p-4 text-sm text-muted">
                    表示は上位{visibleLocalGrants.length}件に絞っています。詳細条件は公式サイトや自治体窓口で確認してください。
                  </div>
                )}
              </div>
            )}

            {/* National Grants by Category */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-navy mb-4 pb-2 border-b-[3px] border-navy">
                全国共通の制度（{nationalGrants.length}件）
              </h2>
              {categoryGroups.map(({ key, label, grants: catGrants }) => {
                const natInCat = catGrants.filter((g) => g.prefecture === '全国');
                const visibleNatInCat = natInCat.slice(0, 12);
                if (natInCat.length === 0) return null;
                return (
                  <div key={key} id={`cat-${key}`} className="mb-8">
                    <h3 className="text-base font-bold text-navy mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-accent rounded-full inline-block" />
                      {label}（{natInCat.length}件）
                    </h3>
                    <div className="space-y-4">
                      {visibleNatInCat.map((grant) => (
                        <GrantCard key={grant.slug} grant={grant} />
                      ))}
                    </div>
                    {natInCat.length > visibleNatInCat.length && (
                      <Link
                        href={`/category/${key}/`}
                        className="mt-3 inline-block text-sm font-bold text-navy underline underline-offset-4 hover:text-accent-deep"
                      >
                        {label}の全国制度をもっと見る（全{natInCat.length}件）
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Nearby Prefectures */}
            {nearby.length > 0 && (
              <div className="bg-wash border-[1.5px] border-line-strong rounded-xl p-6 mt-8">
                <h2 className="text-base font-bold text-navy mb-3">
                  近隣の都道府県の助成金
                </h2>
                <div className="flex flex-wrap gap-2">
                  {nearby.map((p) => (
                    <Link
                      key={p}
                      href={`/prefecture/${prefToSlug(p)}/`}
                      className="filter-chip"
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
