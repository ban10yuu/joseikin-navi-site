import Link from 'next/link';
import { getAllGrants } from '@/lib/grants';
import { CATEGORY_LABELS, GrantCategory } from '@/lib/types';
import GrantCard from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';
import AdBanner from '@/components/AdBanner';
import GrantListClient from '@/components/GrantListClient';

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
  const allGrants = getAllGrants();
  const topGrants = allGrants.slice(0, 6);

  return (
    <>
      {/* Header Banner */}
      <section className="bg-[#1d4ed8] text-white py-10 sm:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-blue-200 mb-2">{allGrants.length}件の助成金・補助金を掲載中（2026年最新版）</p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
            国・自治体・民間の助成金・補助金を<br className="hidden sm:inline" />まとめて検索できるサイトです
          </h1>
          <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-2xl">
            子育て・住宅・医療・教育・就職・介護など8カテゴリ。都道府県やキーワードで絞り込んで、あなたに合った制度を探せます。
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#grants" className="px-5 py-2.5 bg-white text-blue-700 font-semibold text-sm rounded hover:bg-blue-50 transition-colors">
              助成金を探す
            </a>
            <Link href="/subscribe/" className="px-5 py-2.5 bg-blue-500 text-white font-semibold text-sm rounded hover:bg-blue-400 transition-colors">
              無料メール登録
            </Link>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(([key, label]) => (
              <Link
                key={key}
                href={`/category/${key}/`}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 transition-colors"
              >
                <img src={CATEGORY_IMAGES[key]} alt="" className="w-5 h-5 object-contain" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Grants */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-1">注目の助成金・補助金</h2>
          <p className="text-sm text-gray-500 mb-6">支給額の大きい制度をピックアップしています。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {topGrants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
          </div>

          <AdBanner size="full" />
        </div>
      </section>

      {/* Main Content: Grant List + Sidebar */}
      <section id="grants" className="py-10 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-1">助成金・補助金を探す</h2>
          <p className="text-sm text-gray-500 mb-6">カテゴリ・地域・キーワードで絞り込みできます。</p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            <div>
              <GrantListClient />
            </div>
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Banner */}
      <section className="py-10 px-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">あなたに合った助成金をメールでお届け</h2>
          <p className="text-sm text-gray-500 mb-5">
            世帯年収・地域・職業を登録すると、該当する助成金の情報をお知らせします。登録無料。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/subscribe/" className="px-5 py-2.5 bg-[#1d4ed8] text-white font-semibold text-sm rounded hover:bg-blue-800 transition-colors text-center">
              無料で登録する
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-10 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-bold text-gray-800 mb-3">助成金ナビについて</h2>
          <div className="text-sm text-gray-600 space-y-2 leading-relaxed">
            <p>
              助成金ナビは、国・都道府県・市区町村・NPO/民間団体が提供する助成金・補助金・給付金の情報を掲載するサイトです。
              子育て・出産、住宅・リフォーム、医療・健康、教育・資格、就職・転職・起業、介護・福祉、生活支援、災害・緊急の8カテゴリにわたり、{allGrants.length}件の支援制度を掲載しています。
            </p>
            <p>
              申請方法・必要書類・受給条件など、各制度の詳細を分かりやすく解説しています。最新情報は各公式サイトでご確認ください。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
