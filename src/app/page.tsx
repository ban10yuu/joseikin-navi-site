import Link from 'next/link';
import { getAllGrants } from '@/lib/grants';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/types';
import GrantCard from '@/components/GrantCard';
import Sidebar from '@/components/Sidebar';
import SubscribeForm from '@/components/SubscribeForm';
import AdBanner from '@/components/AdBanner';
import GrantListClient from '@/components/GrantListClient';

const categories = Object.entries(CATEGORY_LABELS);

export default function HomePage() {
  const allGrants = getAllGrants();
  const topGrants = allGrants.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 sm:py-20 px-4">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            2026年最新版 ・ {allGrants.length}件の助成金を掲載
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            あなたがもらえる<br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">助成金・補助金</span>
            <br />がきっと見つかる
          </h1>

          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            国・自治体・民間団体の助成金・補助金・給付金を完全網羅。<br className="hidden sm:inline" />
            子育て・住宅・医療・教育・就職・介護など全カテゴリを掲載しています。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/subscribe/" className="px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-800 font-bold rounded-full hover:shadow-lg hover:shadow-emerald-400/25 transition-all text-sm">
              無料で助成金診断を受ける
            </Link>
            <a href="#grants" className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-sm">
              助成金を探す
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-blue-600">{allGrants.length}+</p>
              <p className="text-xs text-slate-500 font-medium">掲載助成金数</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-600">47</p>
              <p className="text-xs text-slate-500 font-medium">対応都道府県</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-purple-600">8</p>
              <p className="text-xs text-slate-500 font-medium">カテゴリ</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-red-600">無料</p>
              <p className="text-xs text-slate-500 font-medium">診断・利用</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(([key, label]) => (
              <Link
                key={key}
                href={`/category/${key}/`}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors hover:scale-105 ${CATEGORY_COLORS[key as keyof typeof CATEGORY_COLORS]}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Grants */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">注目の助成金・補助金</h2>
            <p className="text-sm text-slate-500">支給額の大きい助成金をピックアップ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {topGrants.map((grant) => (
              <GrantCard key={grant.slug} grant={grant} />
            ))}
          </div>

          <AdBanner size="full" />
        </div>
      </section>

      {/* Main Content: Grant List + Sidebar */}
      <section id="grants" className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">助成金・補助金を探す</h2>
            <p className="text-sm text-slate-500">カテゴリ・地域・キーワードで絞り込めます</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            <div>
              <GrantListClient />
            </div>
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SubscribeForm />
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-12 px-4 sm:px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-4">助成金ナビについて</h2>
          <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
            <p>
              助成金ナビは、国・都道府県・市区町村・NPO/民間団体が提供する助成金・補助金・給付金の情報を網羅的に掲載するナビゲーションサイトです。
              子育て・出産、住宅・リフォーム、医療・健康、教育・資格、就職・転職・起業、介護・福祉、生活支援、災害・緊急の8カテゴリにわたり、{allGrants.length}件以上の支援制度を掲載しています。
            </p>
            <p>
              「知らなかった」では済まされない、もらえるはずのお金を見逃さないために。世帯年収・お住まいの地域・ご職業を入力するだけで、あなたが受給できる可能性のある助成金を無料で診断できます。
              児童手当、出産育児一時金、高額療養費制度、教育訓練給付金、住居確保給付金、小規模事業者持続化補助金など、知っておくべき重要な制度を分かりやすく解説しています。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
