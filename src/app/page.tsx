import Link from 'next/link';
import Image from 'next/image';
import { getGrantQualityStats, getOfficialLinkedGrants, getRecentlyUpdatedGrants } from '@/lib/grants';
import { CATEGORY_LABELS, GrantCategory } from '@/lib/types';
import GrantCard from '@/components/GrantCard';
import GoogleAd from '@/components/GoogleAd';
import HomeGrantSearch from '@/components/HomeGrantSearch';

const CATEGORY_IMAGES: Record<GrantCategory, string> = {
  childcare: '/images/categories/childcare.png',
  housing: '/images/categories/housing.png',
  medical: '/images/categories/medical.png',
  education: '/images/categories/education.png',
  employment: '/images/categories/employment.png',
  nursing: '/images/categories/nursing.png',
  living: '/images/categories/living.png',
  disaster: '/images/categories/disaster.png',
};

const categories = Object.entries(CATEGORY_LABELS) as [GrantCategory, string][];

export default function HomePage() {
  const stats = getGrantQualityStats();
  const officialGrants = getOfficialLinkedGrants();

  const recentlyUpdatedGrants = getRecentlyUpdatedGrants(4);

  return (
    <>
      <section className="home-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-7 sm:py-12">
          <div className="home-hero-intro">
            <p className="home-hero-kicker">国・自治体などの公式情報を整理</p>
            <h1>地域と目的から、利用できる可能性のある支援制度を探す</h1>
            <p>
              国・自治体・民間団体の公式情報をもとに、対象、支援内容、申請期限、確認先を整理しています。
            </p>
          </div>

          <HomeGrantSearch
            totalCount={stats.total}
            officialLinkedCount={stats.officialLinked}
          />

          <ul className="home-trust-strip" aria-label="助成金ナビの情報方針">
            <li><span aria-hidden="true">✓</span> 国・自治体などの公式情報が基準</li>
            <li><span aria-hidden="true">✓</span> 制度ごとに公式ページを案内</li>
            <li><span aria-hidden="true">✓</span> 自動照合日と人手確認を区別</li>
          </ul>
        </div>
      </section>

      {/* カテゴリナビ */}
      <section className="bg-card border-y border-line py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <p className="shrink-0 text-xs font-bold text-muted">カテゴリ</p>
            {categories.map(([key, label]) => (
              <Link
                key={key}
                href={`/category/${key}/`}
                className="flex shrink-0 items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full bg-card text-navy hover:bg-wash border-[1.5px] border-line-strong hover:border-navy transition-colors"
              >
                <Image src={CATEGORY_IMAGES[key]} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-howto-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="home-section-heading">
            <p>はじめての方へ</p>
            <h2>探す、確かめる、申請する</h2>
          </div>
          <ol className="home-howto-list">
            <li><span>1</span><div><strong>条件を選ぶ</strong><p>地域と目的から候補を絞ります。</p></div></li>
            <li><span>2</span><div><strong>対象と期限を見る</strong><p>金額だけでなく、対象条件と受付状況を確認します。</p></div></li>
            <li><span>3</span><div><strong>公式ページで確認</strong><p>募集要項と必要書類を確認して申請します。</p></div></li>
          </ol>
          <Link href="/guide/" className="home-text-link">
            申請前に確認することを見る <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 bg-card border-t border-line">
        <div className="max-w-6xl mx-auto">
          <div className="home-section-heading">
            <p>情報の更新日を基準に掲載</p>
            <h2>最近更新された制度</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {recentlyUpdatedGrants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/grants/" className="inline-block px-6 py-2.5 text-sm text-navy font-bold border-2 border-navy rounded-full hover:bg-navy hover:text-white transition-colors">
              すべての制度を見る（{officialGrants.length.toLocaleString('ja-JP')}件）
            </Link>
          </div>
        </div>
      </section>

      <GoogleAd format="horizontal" className="max-w-4xl mx-auto px-4" />

      {/* SEOテキスト */}
      <section className="py-8 px-4 border-t border-line">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-navy mb-2">助成金ナビについて</h2>
          <div className="text-sm text-muted space-y-1.5 leading-relaxed">
            <p>
              助成金ナビは、国・都道府県・市区町村・NPO/民間団体が提供する助成金・補助金・給付金の情報を掲載するサイトです。
              公式確認先を記載した制度を中心に、支援制度を8カテゴリに分類して掲載しています。
            </p>
            <p>
              金額・対象条件・申請期間を分かりやすく整理し、公式情報の確認先と確認日を表示します。最新の受付状況や必要書類は、必ず各公式サイトでご確認ください。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
