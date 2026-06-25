import Link from 'next/link';
import { buildGrantSearchText, getGrantQualityStats, getOfficialLinkedGrants } from '@/lib/grants';
import { CATEGORY_LABELS, Grant, GrantCategory } from '@/lib/types';
import GrantCard, { GrantCardItem } from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';
import GoogleAd from '@/components/GoogleAd';
import GrantFinderQuiz from '@/components/GrantFinderQuiz';
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

function toGrantCardItem(grant: Grant): GrantCardItem {
  return {
    slug: grant.slug,
    title: grant.title,
    organization: grant.organization,
    type: grant.type,
    maxAmount: grant.maxAmount,
    category: grant.category,
    prefecture: grant.prefecture,
    tags: grant.tags,
    eligibility: grant.eligibility,
    applicationPeriod: grant.applicationPeriod,
    deadlineDate: grant.deadlineDate,
    description: grant.description,
    officialUrl: grant.officialUrl,
    sourceUrls: grant.sourceUrls,
    verifiedAt: grant.verifiedAt,
    searchText: grant.searchText || buildGrantSearchText(grant),
  };
}

export default function HomePage() {
  const stats = getGrantQualityStats();
  const officialGrants = getOfficialLinkedGrants();

  // 注目の助成金: 公式リンクあり・金額上位6件
  const topGrants = officialGrants.slice(0, 6);
  const searchGrants = officialGrants.slice(0, 600).map(toGrantCardItem);
  const quizGrants = officialGrants.slice(0, 400).map(toGrantCardItem);

  return (
    <>
      {/* Hero: first screen is the actual search workflow */}
      <section className="home-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-10 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="inline-flex items-center rounded-full border-[1.5px] border-line-strong bg-card px-3 py-1 text-xs font-bold text-navy">
                公式リンク確認済み {stats.officialLinked}件
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl font-black text-navy leading-tight">
                助成金を条件で探す。
              </h1>
              <p className="mt-4 text-base text-muted leading-relaxed">
                国・自治体・民間の支援制度を、対象者・地域・カテゴリ・公式出典の有無で整理。
                申請前に見るべき「金額・条件・出典」へ迷わず進めます。
              </p>

              <div className="home-proof-grid" aria-label="掲載情報の概要">
                <div>
                  <span className="home-proof-value">{stats.total}</span>
                  <span className="home-proof-label">掲載制度</span>
                </div>
                <div>
                  <span className="home-proof-value">47</span>
                  <span className="home-proof-label">都道府県</span>
                </div>
                <div>
                  <span className="home-proof-value">8</span>
                  <span className="home-proof-label">カテゴリ</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#home-search-title"
                  className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-deep"
                >
                  今すぐ探す
                </a>
                <Link
                  href="/guide/"
                  className="inline-flex min-h-11 items-center rounded-lg border-2 border-navy bg-card px-5 py-2 text-sm font-bold text-navy transition-colors hover:bg-wash"
                >
                  申請の流れを見る
                </Link>
              </div>
            </div>

            <HomeGrantSearch
              grants={searchGrants}
              totalCount={stats.total}
              officialLinkedCount={stats.officialLinked}
            />
          </div>
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
                <img src={CATEGORY_IMAGES[key]} alt="" className="w-4 h-4 object-contain" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === 条件診断 === */}
      <section id="finder" className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 border-l-4 border-accent pl-4">
            <p className="text-xs font-bold text-accent-deep mb-1">迷ったら診断</p>
            <h2 className="text-xl font-black text-navy">状況から候補を絞り込む</h2>
            <p className="text-sm text-muted mt-1">地域や世帯状況を選ぶだけで、使える可能性のある制度を確認できます。</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
            <div>
              <GrantFinderQuiz grants={quizGrants} totalCount={officialGrants.length} />
            </div>
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* 注目の助成金（金額上位） */}
      <GoogleAd format="horizontal" className="max-w-7xl mx-auto px-4 sm:px-6" />

      <section className="py-10 px-4 bg-card border-t border-line">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-navy mb-1 pl-3 border-l-4 border-accent">注目の助成金</h2>
          <p className="text-sm text-muted mb-5 pl-3">公式リンクがある制度から支給額の大きいものをピックアップ</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {topGrants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/grants/" className="inline-block px-6 py-2.5 text-sm text-navy font-bold border-2 border-navy rounded-full hover:bg-navy hover:text-white transition-colors">
              公式リンクありの助成金を見る（{officialGrants.length}件）
            </Link>
          </div>
        </div>
      </section>

      <GoogleAd format="horizontal" className="max-w-4xl mx-auto px-4" />

      {/* メール登録CTA */}
      <section className="py-10 px-4 bg-wash border-t border-line">
        <div className="max-w-xl mx-auto bg-card border-2 border-navy rounded-xl p-5 sm:p-7 shadow-sm">
          <h2 className="text-base font-bold text-navy mb-1.5">あなたに合った助成金をメールでお届け</h2>
          <p className="text-sm text-muted mb-4">
            世帯年収・地域・職業を登録すると、該当する助成金の情報をお知らせします。無料。
          </p>
          <Link href="/subscribe/" className="inline-block px-6 py-2.5 bg-accent text-white font-bold text-sm rounded-lg hover:bg-accent-deep transition-colors shadow-sm">
            無料で登録する
          </Link>
        </div>
      </section>

      {/* SEOテキスト */}
      <section className="py-8 px-4 border-t border-line">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-navy mb-2">助成金ナビについて</h2>
          <div className="text-sm text-muted space-y-1.5 leading-relaxed">
            <p>
              助成金ナビは、国・都道府県・市区町村・NPO/民間団体が提供する助成金・補助金・給付金の情報を掲載するサイトです。
              公式リンクありの制度を中心に、支援制度を8カテゴリに分類して掲載しています。
            </p>
            <p>
              申請方法・必要書類・受給条件などを分かりやすく整理しつつ、公式出典未登録の情報は「要公式確認」として区別します。最新情報は必ず各公式サイトでご確認ください。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
