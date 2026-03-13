import Link from 'next/link';
import { getAllGrants } from '@/lib/grants';
import { CATEGORY_LABELS, GrantCategory } from '@/lib/types';
import GrantCard from '@/components/GrantCard';
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

export default function HomePage() {
  const allGrants = getAllGrants();

  // 注目の助成金: 金額上位6件
  const topGrants = allGrants.slice(0, 6);

  return (
    <>
      {/* ヒーロー: 検索へ誘導するシンプルなバナー */}
      <section className="bg-[#1d4ed8] text-white py-8 sm:py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-blue-200 mb-1.5">{allGrants.length}件の助成金・補助金を掲載</p>
          <h1 className="text-xl sm:text-2xl font-bold mb-2 leading-snug">
            あなたが使える助成金・補助金を探せます
          </h1>
          <p className="text-blue-100 text-sm leading-relaxed mb-5 max-w-xl">
            子育て・住宅・医療・教育・就職・介護など8カテゴリ。条件を選ぶだけで、該当する制度が見つかります。
          </p>
          <a href="#finder" className="inline-block px-5 py-2.5 bg-white text-blue-700 font-semibold text-sm rounded hover:bg-blue-50 transition-colors">
            助成金を探す
          </a>
        </div>
      </section>

      {/* カテゴリナビ */}
      <section className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(([key, label]) => (
              <Link
                key={key}
                href={`/category/${key}/`}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 transition-colors"
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
              <GrantFinderQuiz />
            </div>
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* 注目の助成金（金額上位） */}
      <section className="py-8 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-1">注目の助成金</h2>
          <p className="text-sm text-gray-400 mb-5">支給額の大きい制度をピックアップ</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {topGrants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/grants/" className="text-sm text-blue-700 hover:text-blue-900 font-semibold">
              すべての助成金を見る（{allGrants.length}件）
            </Link>
          </div>
        </div>
      </section>

      <GoogleAd format="horizontal" className="max-w-4xl mx-auto px-4" />

      {/* メール登録CTA */}
      <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg p-5 sm:p-6">
          <h2 className="text-base font-bold text-gray-900 mb-1.5">あなたに合った助成金をメールでお届け</h2>
          <p className="text-sm text-gray-500 mb-4">
            世帯年収・地域・職業を登録すると、該当する助成金の情報をお知らせします。無料。
          </p>
          <Link href="/subscribe/" className="inline-block px-5 py-2 bg-[#1d4ed8] text-white font-semibold text-sm rounded hover:bg-blue-800 transition-colors">
            無料で登録する
          </Link>
        </div>
      </section>

      {/* SEOテキスト */}
      <section className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-gray-700 mb-2">助成金ナビについて</h2>
          <div className="text-sm text-gray-500 space-y-1.5 leading-relaxed">
            <p>
              助成金ナビは、国・都道府県・市区町村・NPO/民間団体が提供する助成金・補助金・給付金の情報を掲載するサイトです。
              {allGrants.length}件の支援制度を8カテゴリに分類して掲載しています。
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
