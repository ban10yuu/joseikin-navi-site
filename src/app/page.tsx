import Link from 'next/link';
import { buildGrantSearchText, getGrantQualityStats, getOfficialLinkedGrants } from '@/lib/grants';
import { CATEGORY_LABELS, Grant, GrantCategory } from '@/lib/types';
import GrantCard, { GrantCardItem } from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';
import GoogleAd from '@/components/GoogleAd';
import GrantFinderQuiz from '@/components/GrantFinderQuiz';

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
  const quizGrants = officialGrants.slice(0, 400).map(toGrantCardItem);

  return (
    <>
      {/* ヒーロー: 検索へ誘導するシンプルなバナー */}
      <section className="bg-navy text-white py-10 sm:py-14 px-4 border-b-4 border-accent">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block text-xs font-bold text-white bg-white/10 border border-white/25 rounded-full px-3 py-1 mb-3 tracking-wide">
            公式リンクあり {stats.officialLinked}件 / 掲載総数 {stats.total}件
          </p>
          <h1 className="text-2xl sm:text-3xl font-black mb-3 leading-snug tracking-wide">
            あなたが使える<span className="text-[#ffb27d]">助成金・補助金</span>を探せます
          </h1>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            子育て・住宅・医療・教育・就職・介護など8カテゴリ。公式出典の有無を表示し、申請前に確認すべき情報を分けて探せます。
          </p>
          <a href="#finder" className="inline-block px-7 py-3 bg-accent text-white font-bold text-sm rounded-lg hover:bg-accent-deep transition-colors shadow-md">
            助成金を探す
          </a>
        </div>
      </section>

      {/* カテゴリナビ */}
      <section className="bg-card border-b border-line py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(([key, label]) => (
              <Link
                key={key}
                href={`/category/${key}/`}
                className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full bg-card text-navy hover:bg-navy hover:text-white border-[1.5px] border-line-strong hover:border-navy transition-colors"
              >
                <img src={CATEGORY_IMAGES[key]} alt="" className="w-4 h-4 object-contain" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoogleAd format="horizontal" className="max-w-4xl mx-auto px-4" />

      {/* === 主役: 助成金検索・診断 === */}
      <section id="finder" className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
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
      <section className="py-10 px-4 bg-card border-t border-line">
        <div className="max-w-4xl mx-auto">
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
