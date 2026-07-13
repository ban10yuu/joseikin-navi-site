import Image from 'next/image';
import Link from 'next/link';
import GrantCard from '@/components/GrantCard';
import HomeGrantSearch from '@/components/HomeGrantSearch';
import SubscribeForm from '@/components/SubscribeForm';
import { siteConfig } from '@/config/site';
import { getGrantQualityStats, getOfficialLinkedGrants, getRecentlyUpdatedGrants } from '@/lib/grants';
import { getEffectiveGrantStatus } from '@/lib/grant-status';
import { isNewsletterEnabled } from '@/lib/newsletter';
import { CATEGORY_LABELS, type GrantCategory } from '@/lib/types';

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

const REGIONS = [
  { name: '北海道', prefectures: ['北海道'] },
  { name: '東北', prefectures: ['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'] },
  { name: '関東', prefectures: ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'] },
  { name: '中部', prefectures: ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県'] },
  { name: '近畿', prefectures: ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県'] },
  { name: '中国', prefectures: ['鳥取県', '島根県', '岡山県', '広島県', '山口県'] },
  { name: '四国', prefectures: ['徳島県', '香川県', '愛媛県', '高知県'] },
  { name: '九州・沖縄', prefectures: ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'] },
];

function AudienceIllustration({ type }: { type: 'individual' | 'business' }) {
  return type === 'individual' ? (
    <svg viewBox="0 0 180 120" role="img" aria-label="家族と支援情報を表すイラスト" className="h-auto w-full">
      <rect x="8" y="8" width="164" height="104" rx="20" fill="#eff6ff" />
      <path d="M41 56 69 34l28 22v35H41Z" fill="#fff" stroke="#2557a7" strokeWidth="3" />
      <path d="M50 52v-17h12v8" fill="none" stroke="#2557a7" strokeWidth="3" />
      <circle cx="112" cy="51" r="13" fill="#f8c9a8" />
      <path d="M96 93c2-21 8-29 17-29s16 8 18 29" fill="#2557a7" />
      <circle cx="140" cy="62" r="9" fill="#f8c9a8" />
      <path d="M130 94c1-15 5-22 11-22 7 0 11 7 12 22" fill="#60a5fa" />
      <path d="m105 46 7-8 10 8" fill="#334155" />
      <circle cx="154" cy="27" r="12" fill="#fff" stroke="#047857" strokeWidth="3" />
      <path d="m148 27 4 4 8-9" fill="none" stroke="#047857" strokeLinecap="round" strokeWidth="3" />
    </svg>
  ) : (
    <svg viewBox="0 0 180 120" role="img" aria-label="事業者と支援情報を表すイラスト" className="h-auto w-full">
      <rect x="8" y="8" width="164" height="104" rx="20" fill="#f0fdf4" />
      <path d="M32 93V42h41v51M73 57h35v36M42 54h9M42 67h9M42 80h9M83 67h14M83 80h14" fill="#fff" stroke="#047857" strokeWidth="3" />
      <circle cx="131" cy="54" r="13" fill="#f8c9a8" />
      <path d="M112 94c2-22 9-29 20-29s18 7 20 29" fill="#2557a7" />
      <path d="M121 45c6-9 18-8 23 2" fill="none" stroke="#334155" strokeWidth="5" />
      <rect x="122" y="73" width="20" height="14" rx="2" fill="#fff" />
      <circle cx="153" cy="27" r="12" fill="#fff" stroke="#2557a7" strokeWidth="3" />
      <path d="M148 27h10M153 22v10" stroke="#2557a7" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

export default function HomePage() {
  const stats = getGrantQualityStats();
  const officialGrants = getOfficialLinkedGrants();
  const recentlyUpdatedGrants = getRecentlyUpdatedGrants(4);
  const closingSoonGrants = officialGrants
    .filter((grant) => getEffectiveGrantStatus(grant) === 'closingSoon')
    .sort((left, right) => (left.deadlineDate ?? '').localeCompare(right.deadlineDate ?? ''))
    .slice(0, 4);
  const newsletterEnabled = isNewsletterEnabled(siteConfig.newsletter.endpoint);

  return (
    <>
      <section className="home-hero">
        <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-12">
          <div className="home-hero-intro">
            <p className="home-hero-kicker">国・自治体などの公式情報を整理</p>
            <h1>地域と目的から、利用できる可能性のある支援制度を探す</h1>
            <p>国・自治体・民間団体の公式情報をもとに、対象、支援内容、申請期限、確認先を整理しています。</p>
          </div>
          <HomeGrantSearch totalCount={stats.total} officialLinkedCount={stats.officialLinked} />
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs leading-6 text-slate-600">掲載情報だけで対象可否は確定しません。申請前に公式募集要項をご確認ください。</p>
          <ul className="home-trust-strip" aria-label="助成金ナビの情報方針">
            <li><span aria-hidden="true">✓</span> 国・自治体などの公式情報が基準</li>
            <li><span aria-hidden="true">✓</span> 制度ごとに公式ページを案内</li>
            <li><span aria-hidden="true">✓</span> 自動照合日と人手確認を区別</li>
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-white py-10 sm:py-14" aria-labelledby="audience-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading text-center"><p>対象から近道</p><h2 id="audience-heading">あなたに近い入口を選んでください</h2></div>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/grants/?audience=individual" className="group grid min-h-44 grid-cols-[minmax(0,1fr)_130px] items-center gap-4 rounded-2xl border-2 border-blue-200 bg-blue-50 p-5 transition hover:border-blue-600 hover:bg-white sm:grid-cols-[minmax(0,1fr)_180px]">
              <div><p className="text-xs font-bold text-blue-700">暮らし・家族・学び</p><h3 className="mt-1 text-xl font-black text-navy">個人・家族向け</h3><p className="mt-2 text-sm leading-7 text-slate-600">子育て、住まい、医療、教育、生活支援などから探せます。</p><span className="mt-3 inline-flex font-bold text-blue-800 underline underline-offset-4">個人・家族向けを探す →</span></div>
              <AudienceIllustration type="individual" />
            </Link>
            <Link href="/grants/?audience=business" className="group grid min-h-44 grid-cols-[minmax(0,1fr)_130px] items-center gap-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 transition hover:border-emerald-700 hover:bg-white sm:grid-cols-[minmax(0,1fr)_180px]">
              <div><p className="text-xs font-bold text-emerald-800">創業・雇用・設備投資</p><h3 className="mt-1 text-xl font-black text-navy">事業者・団体向け</h3><p className="mt-2 text-sm leading-7 text-slate-600">創業、事業成長、デジタル化、省エネ、雇用などから探せます。</p><span className="mt-3 inline-flex font-bold text-emerald-900 underline underline-offset-4">事業者・団体向けを探す →</span></div>
              <AudienceIllustration type="business" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card py-10 sm:py-14" aria-labelledby="purpose-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading"><p>困りごと・目的を起点に</p><h2 id="purpose-heading">目的から探す</h2></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(Object.entries(CATEGORY_LABELS) as [GrantCategory, string][]).map(([key, label]) => (
              <Link key={key} href={`/category/${key}/`} className="flex min-h-24 items-center gap-3 rounded-xl border border-line bg-white p-4 font-bold text-navy transition hover:border-navy hover:shadow-sm">
                <Image src={CATEGORY_IMAGES[key]} alt="" width={44} height={44} className="h-11 w-11 shrink-0 object-contain" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-10 sm:py-14" aria-labelledby="region-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading"><p>お住まい・事業所の地域から</p><h2 id="region-heading">地域から探す</h2></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((region) => (
              <details key={region.name} className="rounded-xl border border-line bg-card p-4 open:border-navy/40">
                <summary className="flex min-h-11 cursor-pointer items-center justify-between font-black text-navy">{region.name}<span aria-hidden="true">＋</span></summary>
                <div className="flex flex-wrap gap-2 border-t border-line pt-3">
                  {region.prefectures.map((prefecture) => <Link key={prefecture} href={`/grants/?pref=${encodeURIComponent(prefecture)}`} className="inline-flex min-h-11 items-center rounded-lg bg-white px-3 text-sm font-bold text-navy underline underline-offset-4">{prefecture}</Link>)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-amber-50/60 py-10 sm:py-14" aria-labelledby="closing-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading"><p>受付中と確認できた制度のみ</p><h2 id="closing-heading">締切が近い制度</h2></div>
          {closingSoonGrants.length ? <div className="grid gap-4 md:grid-cols-2">{closingSoonGrants.map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div> : <p className="rounded-xl border border-amber-200 bg-white p-5 text-sm leading-7 text-slate-700">現在、公式情報で受付中かつ締切間近と確認できる制度は掲載していません。受付状況が不明な制度は締切間近として扱っていません。</p>}
          <Link href="/grants/?sort=deadline" className="home-text-link">申請期限が登録された制度を確認する <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="border-b border-line bg-card py-10 sm:py-14" aria-labelledby="recent-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading"><p>情報の確認日を基準に掲載</p><h2 id="recent-heading">最近更新された制度</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{recentlyUpdatedGrants.map((grant) => <GrantCard key={grant.slug} grant={grant} />)}</div>
          <Link href="/grants/?sort=checked" className="home-text-link">最近確認した制度をもっと見る <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="home-howto-section" aria-labelledby="before-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading"><p>候補が見つかったら</p><h2 id="before-heading">申請前に確認すること</h2></div>
          <ol className="home-howto-list">
            <li><span>1</span><div><strong>対象条件を読む</strong><p>対象地域、年齢、事業規模など、制度固有の条件を確認します。</p></div></li>
            <li><span>2</span><div><strong>期限と受付状況を見る</strong><p>予算到達で早期終了する場合があるため、公式情報を確認します。</p></div></li>
            <li><span>3</span><div><strong>公式募集要項を確認</strong><p>必要書類や申請方法は制度ごとに異なります。</p></div></li>
          </ol>
          <div className="flex flex-wrap gap-4"><Link href="/guide/#individual-guide" className="home-text-link">個人向け申請ガイド →</Link><Link href="/guide/#business-guide" className="home-text-link">事業者向け申請ガイド →</Link></div>
        </div>
      </section>

      <section className="border-y border-line bg-navy py-10 text-white sm:py-14" aria-labelledby="method-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div><p className="text-xs font-bold tracking-wide text-blue-200">このサイトの情報確認方法</p><h2 id="method-heading" className="mt-2 text-2xl font-black">「公式リンクあり」と<br className="hidden sm:block" />「人手確認済み」を分けています</h2><p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">AIは公式情報の整理・要約に利用します。公式ページへのリンク、自動照合日、人が確認した記録は別々に表示し、人が確認していない情報を「人手確認済み」とは表示しません。</p></div>
          <ol className="grid gap-3 sm:grid-cols-3">
            <li className="rounded-xl bg-white p-4 text-navy"><span className="text-xs font-black text-blue-700">01</span><strong className="mt-2 block">公式情報を収集</strong><p className="mt-1 text-xs leading-6 text-slate-600">国・自治体などの確認先を記録</p></li>
            <li className="rounded-xl bg-white p-4 text-navy"><span className="text-xs font-black text-blue-700">02</span><strong className="mt-2 block">項目ごとに整理</strong><p className="mt-1 text-xs leading-6 text-slate-600">出典にない情報は推測で補完しない</p></li>
            <li className="rounded-xl bg-white p-4 text-navy"><span className="text-xs font-black text-blue-700">03</span><strong className="mt-2 block">公式確認先へ案内</strong><p className="mt-1 text-xs leading-6 text-slate-600">申請前の最終確認先を明示</p></li>
          </ol>
          <div className="flex flex-wrap gap-5 lg:col-span-2"><Link href="/information-method/" className="font-bold text-white underline underline-offset-4">情報の収集・更新方法</Link><Link href="/ai-policy/" className="font-bold text-white underline underline-offset-4">AI利用方針</Link><Link href="/correction/" className="font-bold text-white underline underline-offset-4">訂正・削除依頼</Link></div>
        </div>
      </section>

      {newsletterEnabled && (
        <section className="bg-card py-10 sm:py-14" aria-labelledby="newsletter-heading">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div><p className="text-xs font-bold text-blue-700">任意登録</p><h2 id="newsletter-heading" className="mt-2 text-2xl font-black text-navy">新着・更新された支援制度をメールで受け取る</h2><p className="mt-3 text-sm leading-7 text-slate-600">メールアドレスと任意の地域だけを登録します。対象可否を判定する診断ではありません。</p></div>
            <div className="rounded-2xl border border-line bg-white p-5"><SubscribeForm endpoint={siteConfig.newsletter.endpoint} compact includesPromotions={siteConfig.newsletter.includesPromotions} unsubscribeUrl={siteConfig.newsletter.unsubscribeUrl} /></div>
          </div>
        </section>
      )}
    </>
  );
}
