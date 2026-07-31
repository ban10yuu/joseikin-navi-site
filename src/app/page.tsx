import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GrantCard from '@/components/GrantCard';
import DisplayAdSlot from '@/components/DisplayAdSlot';
import HomeGrantSearch from '@/components/HomeGrantSearch';
import SubscribeForm from '@/components/SubscribeForm';
import { AFFILIATE_OFFERS } from '@/config/affiliate-offers';
import { SEARCH_CONSOLE_OPPORTUNITIES } from '@/config/search-console-opportunities';
import { isAdsenseEnabled, siteConfig } from '@/config/site';
import { getGrantQualityStats, getOfficialLinkedGrants, getRecentlyUpdatedGrants } from '@/lib/grants';
import { getEffectiveGrantStatus } from '@/lib/grant-status';
import { getEligibleAffiliateOffers } from '@/lib/monetization';
import { isNewsletterEnabled } from '@/lib/newsletter';
import { toSiteUrl } from '@/lib/site-url';
import { CATEGORY_LABELS, SUPPORT_TYPE_LABELS, type GrantCategory, type Purpose, type SupportType } from '@/lib/types';
import { CATEGORY_VISUALS, HOME_HERO_MOTIFS, ILLUSTRATION_VISUALS } from '@/lib/visual-assets';

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

const FEATURED_PURPOSE_LINKS: { label: string; purpose: Purpose; audience: 'individual' | 'business'; description: string }[] = [
  { label: '子育て・出産の給付金', purpose: 'childcare', audience: 'individual', description: '子ども医療費、出産、保育に関する制度' },
  { label: '住宅・リフォーム補助金', purpose: 'housing', audience: 'individual', description: '住宅取得、改修、耐震、移住支援' },
  { label: '創業・開業補助金', purpose: 'startup', audience: 'business', description: '新規事業、開業、店舗整備の支援' },
  { label: '設備投資・省エネ補助金', purpose: 'energySaving', audience: 'business', description: '機械設備、省エネ、更新投資の支援' },
  { label: '雇用・賃上げ助成金', purpose: 'wageIncrease', audience: 'business', description: '採用、雇用維持、賃上げ関連制度' },
  { label: '生活支援・福祉制度', purpose: 'livingSupport', audience: 'individual', description: '生活、福祉、家計支援の制度' },
];

const SUPPORT_TYPE_LINKS: SupportType[] = ['subsidy', 'grant', 'benefit', 'allowance', 'loan', 'voucher'];

export const metadata: Metadata = {
  title: { absolute: '助成金ナビ｜地域の補助金・助成金を探す' },
  description: '子育て、住まい、仕事、事業支援など、全国の補助金・助成金・給付金を地域と目的から検索。申請前に確認したい公式ページもあわせて案内します。',
  alternates: { canonical: toSiteUrl('/') },
  openGraph: {
    title: '助成金ナビ｜地域の補助金・助成金を探す',
    description: '子育て、住まい、仕事、事業支援など、全国の支援制度を地域と目的から探せます。',
    url: toSiteUrl('/'),
  },
};

export default async function HomePage() {
  const [stats, officialGrants, recentlyUpdatedGrants] = await Promise.all([
    getGrantQualityStats(),
    getOfficialLinkedGrants(),
    getRecentlyUpdatedGrants(4),
  ]);
  const closingSoonGrants = officialGrants
    .filter((grant) => getEffectiveGrantStatus(grant) === 'closingSoon')
    .sort((left, right) => (left.deadlineDate ?? '').localeCompare(right.deadlineDate ?? ''))
    .slice(0, 4);
  const newsletterEnabled = isNewsletterEnabled(siteConfig.newsletter.endpoint);
  const businessHeroAffiliates = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
    pageType: 'home', audiences: ['soleProprietor', 'business'], purposes: ['startup', 'businessGrowth', 'digitalTransformation'],
    intents: ['accounting', 'expenseManagement', 'payroll', 'attendance', 'humanResources', 'electronicContract', 'cloudStorage', 'businessPlanning', 'ecommerce', 'reservationSystem', 'pos', 'employeeTraining', 'professionalConsultation', 'companyFormation', 'reuseValuation', 'tradeAreaAnalysis'],
    monetizationAllowed: true,
    limit: 8,
  });
  const personalHeroAffiliates = getEligibleAffiliateOffers(AFFILIATE_OFFERS, {
    pageType: 'home', audiences: ['individual', 'family', 'student', 'jobSeeker'], purposes: ['childcare', 'housing', 'education', 'employment'],
    intents: ['childrensEducation', 'financialPlanning', 'careerConsultation'], monetizationAllowed: true, limit: 8,
  });

  return (
    <>
      <section className="home-hero">
        <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-12">
          <nav className="home-topic-nav" aria-label="主要な検索入口">
            <Link href="/support-type/subsidy/">補助金を探す</Link>
            <Link href="/support-type/grant/">助成金を探す</Link>
            <Link href="/support-type/benefit/">給付金を探す</Link>
            <Link href="/prefecture/%E6%9D%B1%E4%BA%AC%E9%83%BD/">東京都</Link>
            <Link href="/prefecture/%E5%A4%A7%E9%98%AA%E5%BA%9C/">大阪府</Link>
          </nav>
          <div className="home-hero-top">
            <div className="home-hero-intro">
              <p className="home-hero-kicker">国・自治体などの公式情報を整理</p>
              <h1>補助金・助成金・給付金を、地域と目的から探す</h1>
            </div>
            <div className="home-hero-visual" aria-hidden="true">
              <div className="home-hero-picture">
                <Image src={ILLUSTRATION_VISUALS.hero} alt="" width={640} height={640} sizes="(max-width: 768px) 120px, 300px" />
              </div>
              <ul className="home-hero-motifs">
                {HOME_HERO_MOTIFS.map((motif) => (
                  <li key={motif.label}>
                    <Image src={motif.src} alt="" width={48} height={48} sizes="48px" />
                    <span>{motif.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="home-hero-description">国・自治体・民間団体の公式情報をもとに、対象、支援内容、申請期限、確認先を整理しています。個人・家族向け、事業者・団体向けを分けて検索できます。</p>
          </div>
          <HomeGrantSearch
            totalCount={stats.total}
            officialLinkedCount={stats.officialLinked}
            personalAffiliateOffers={personalHeroAffiliates}
            businessAffiliateOffers={businessHeroAffiliates}
          />
          <DisplayAdSlot
            placement="top"
            format="horizontal"
            className="home-adsense-slot home-adsense-slot--hero"
          />
          <section className="home-seo-link-panel" aria-labelledby="popular-search-title">
            <div>
              <p className="home-search-eyebrow">よく探される条件</p>
              <h2 id="popular-search-title">目的・制度種別からすぐ探す</h2>
            </div>
            <div className="home-seo-link-grid">
              {FEATURED_PURPOSE_LINKS.map((item) => (
                <Link key={item.label} href={`/grants/?audience=${item.audience}&purpose=${item.purpose}`}>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
            <div className="home-support-links" aria-label="制度種別から探す">
              {SUPPORT_TYPE_LINKS.map((supportType) => (
                <Link key={supportType} href={`/support-type/${supportType}/`}>{SUPPORT_TYPE_LABELS[supportType]}</Link>
              ))}
            </div>
          </section>
          <section className="home-query-link-panel" aria-labelledby="query-opportunity-title">
            <div>
              <p className="home-search-eyebrow">制度名・自治体名から</p>
              <h2 id="query-opportunity-title">検索されている制度を直接確認する</h2>
              <p className="home-query-link-lead">商品券、介護用品、住み替え、奨学金など、制度名で探す人が多いテーマへの入口です。</p>
            </div>
            <div className="home-query-link-grid">
              {SEARCH_CONSOLE_OPPORTUNITIES.map((item) => (
                <Link key={item.label} href={item.href}>
                  <span className="home-query-link-tag">{item.intent}</span>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
          </section>
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs leading-6 text-slate-600">掲載情報だけで対象可否は確定しません。申請前に公式募集要項をご確認ください。</p>
          <ul className="home-trust-strip" aria-label="助成金ナビの情報方針">
            <li><span aria-hidden="true">✓</span> 国・自治体などの公式情報が基準</li>
            <li><span aria-hidden="true">✓</span> 制度ごとに公式ページを案内</li>
            <li><span aria-hidden="true">✓</span> 自動照合日と人手確認を区別</li>
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-card py-10 sm:py-14" aria-labelledby="purpose-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading"><p>困りごと・目的を起点に</p><h2 id="purpose-heading">目的から探す</h2></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(Object.entries(CATEGORY_LABELS) as [GrantCategory, string][]).map(([key, label]) => (
              <Link key={key} href={`/category/${key}/`} className="home-category-link flex min-h-24 items-center gap-3 rounded-xl border border-line bg-white p-4 font-bold text-navy transition hover:border-navy hover:shadow-sm">
                <Image src={CATEGORY_VISUALS[key]} alt="" width={56} height={56} className="h-14 w-14 shrink-0 object-contain" />
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
                  {region.prefectures.map((prefecture) => <Link key={prefecture} href={`/prefecture/${encodeURIComponent(prefecture)}/`} className="inline-flex min-h-11 items-center rounded-lg bg-white px-3 text-sm font-bold text-navy underline underline-offset-4">{prefecture}</Link>)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {isAdsenseEnabled ? (
        <section className="bg-card py-6" aria-label="広告">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <DisplayAdSlot placement="top" format="horizontal" className="home-adsense-slot" />
          </div>
        </section>
      ) : null}

      <section className="border-b border-line bg-amber-50/60 py-10 sm:py-14" aria-labelledby="closing-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading"><p>受付中と確認できた制度のみ</p><h2 id="closing-heading">締切が近い制度</h2></div>
          {closingSoonGrants.length ? <div className="grid gap-4 md:grid-cols-2">{closingSoonGrants.map((grant, index) => <GrantCard key={grant.slug} grant={grant} pageType="home" placement="closing_soon" position={index + 1} />)}</div> : <p className="rounded-xl border border-amber-200 bg-white p-5 text-sm leading-7 text-slate-700">現在、公式情報で受付中かつ締切間近と確認できる制度は掲載していません。受付状況が不明な制度は締切間近として扱っていません。</p>}
          <Link href="/grants/?sort=deadline" className="home-text-link">申請期限が登録された制度を確認する <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="border-b border-line bg-card py-10 sm:py-14" aria-labelledby="recent-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-section-heading"><p>情報の確認日を基準に掲載</p><h2 id="recent-heading">最近更新された制度</h2></div>
          <div className="grid gap-4 md:grid-cols-2">{recentlyUpdatedGrants.map((grant, index) => <GrantCard key={grant.slug} grant={grant} pageType="home" placement="recently_updated" position={index + 1} />)}</div>
          <Link href="/grants/?sort=checked" className="home-text-link">最近確認した制度をもっと見る <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      {isAdsenseEnabled ? (
        <section className="bg-white py-6" aria-label="広告">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <DisplayAdSlot placement="footer" format="horizontal" className="home-adsense-slot" />
          </div>
        </section>
      ) : null}

      <section className="home-howto-section" aria-labelledby="before-heading">
        <div className="home-howto-layout mx-auto max-w-6xl px-4 sm:px-6">
          <div className="home-howto-visual" aria-hidden="true"><Image src={ILLUSTRATION_VISUALS.guide} alt="" width={640} height={640} sizes="(max-width: 768px) 180px, 260px" /></div>
          <div>
            <div className="home-section-heading"><p>候補が見つかったら</p><h2 id="before-heading">申請前に確認すること</h2></div>
            <ol className="home-howto-list">
              <li><span>1</span><div><strong>対象条件を読む</strong><p>対象地域、年齢、事業規模など、制度固有の条件を確認します。</p></div></li>
              <li><span>2</span><div><strong>期限と受付状況を見る</strong><p>予算到達で早期終了する場合があるため、公式情報を確認します。</p></div></li>
              <li><span>3</span><div><strong>公式募集要項を確認</strong><p>必要書類や申請方法は制度ごとに異なります。</p></div></li>
            </ol>
            <div className="flex flex-wrap gap-4"><Link href="/guide/#individual-guide" className="home-text-link">個人向け申請ガイド →</Link><Link href="/guide/#business-guide" className="home-text-link">事業者向け申請ガイド →</Link></div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-navy py-10 text-white sm:py-14" aria-labelledby="method-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="home-method-intro"><div className="home-method-visual" aria-hidden="true"><Image src={ILLUSTRATION_VISUALS.verification} alt="" width={640} height={640} sizes="160px" /></div><div><p className="text-xs font-bold tracking-wide text-blue-200">このサイトの情報確認方法</p><h2 id="method-heading" className="mt-2 text-2xl font-black">「公式リンクあり」と<br className="hidden sm:block" />「人手確認済み」を分けています</h2><p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">AIは公式情報の整理・要約に利用します。公式ページへのリンク、自動照合日、人が確認した記録は別々に表示し、人が確認していない情報を「人手確認済み」とは表示しません。</p></div></div>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: '助成金ナビ｜地域の補助金・助成金を探す',
                url: toSiteUrl('/'),
                description: '全国の補助金・助成金・給付金・支援制度を地域、対象者、目的、制度種別から検索できるページです。申請前に確認したい公式ページも案内します。',
                inLanguage: 'ja',
                isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
                about: ['補助金', '助成金', '給付金', '支援制度', '自治体制度'],
              },
              {
                '@type': 'ItemList',
                name: '主な支援制度の検索入口',
                itemListElement: FEATURED_PURPOSE_LINKS.map((item, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  name: item.label,
                  url: toSiteUrl(`/grants/?audience=${item.audience}&purpose=${item.purpose}`),
                })).concat(SUPPORT_TYPE_LINKS.map((supportType, index) => ({
                  '@type': 'ListItem',
                  position: FEATURED_PURPOSE_LINKS.length + index + 1,
                  name: `${SUPPORT_TYPE_LABELS[supportType]}を探す`,
                  url: toSiteUrl(`/support-type/${supportType}/`),
                }))),
              },
            ],
          }),
        }}
      />
    </>
  );
}
