import type { Metadata } from 'next';
import Link from 'next/link';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: '申請前ガイド｜個人向け・事業者向けの確認手順',
  description: '支援制度を探してから公式情報、窓口、必要書類、期限を確認する手順を、個人向けと事業者向けに分けて説明します。',
  alternates: { canonical: toSiteUrl('/guide/') },
};

const personalSteps = [
  { title: '対象制度を探す', text: '対象区分、地域、目的を選び、候補を絞ります。検索結果だけで対象可否は確定しません。' },
  { title: '公式情報を確認する', text: '制度名、実施機関、対象者、支援内容、申請期間を公式ページと募集要項で確認します。' },
  { title: '申請窓口を確認する', text: '申請先、問い合わせ先、窓口・郵送・電子申請などの提出方法を確認します。' },
  { title: '必要書類を公式情報で確認する', text: '書類名、対象年度、発行日の条件、原本・写しの指定は制度ごとに異なります。' },
  { title: '期限内に申請する', text: '締切日、締切時刻、必着・消印有効、予算到達による早期終了の記載を確認します。' },
  { title: '結果や支給時期を確認する', text: '通知方法、追加資料への対応、支給・交付時期、決定後の手続きを確認します。' },
] as const;

const businessSteps = [
  { title: '公募要領を読む', text: '概要ページだけでなく、公募要領、交付要綱、FAQ、様式を確認します。' },
  { title: '対象者・対象経費・補助率を確認する', text: '所在地、事業規模、事業期間、対象外経費、上限額を含めて確認します。' },
  { title: '交付決定前の発注・契約可否を確認する', text: '申請、採択、交付決定、契約、発注、支払いの順序を誤ると対象外になる場合があります。制度固有の規定を確認してください。' },
  { title: '事業計画・見積書・証明資料を準備する', text: '指定様式、見積条件、相見積の要否、証明資料の対象期間を公募要領で確認します。' },
  { title: '電子申請アカウントを準備する', text: '電子申請の場合は、指定アカウント、本人確認、権限設定、利用可能時間を確認します。' },
  { title: '実績報告・証憑保存・後払い条件を確認する', text: '実績報告期限、請求手続き、証憑の保存期間、支払時期、返還条件を確認します。' },
] as const;

function GuideSteps({ steps }: { steps: readonly { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-3">
      {steps.map((step, index) => (
        <li key={step.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 rounded-lg border border-line bg-card p-4 sm:p-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-sm font-black text-white" aria-hidden="true">{index + 1}</span>
          <div><h3 className="text-base font-black leading-7 text-navy">{step.title}</h3><p className="mt-1 text-sm leading-7 text-muted">{step.text}</p></div>
        </li>
      ))}
    </ol>
  );
}

export default function GuidePage() {
  return (
    <>
      <header className="border-b-4 border-accent bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="mb-4 text-sm text-white/65"><Link href="/" className="underline underline-offset-4">ホーム</Link><span aria-hidden="true" className="mx-2">/</span>申請前ガイド</nav>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">申請前に確認すること</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">個人・家族向けと事業者・団体向けでは、注意する順序が異なります。自分に合う手順を選んでください。</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <nav aria-label="ガイド内メニュー" className="mb-10 grid gap-3 sm:grid-cols-2">
          <a href="#individual-guide" className="flex min-h-14 items-center justify-between rounded-lg border-2 border-navy bg-card px-5 py-3 font-black text-navy">個人・家族向けを見る<span aria-hidden="true">↓</span></a>
          <a href="#business-guide" className="flex min-h-14 items-center justify-between rounded-lg border-2 border-accent bg-card px-5 py-3 font-black text-accent-deep">事業者・団体向けを見る<span aria-hidden="true">↓</span></a>
        </nav>

        <section id="individual-guide" className="scroll-mt-24" aria-labelledby="individual-guide-title">
          <p className="text-sm font-black text-accent-deep">個人・家族向け</p>
          <h2 id="individual-guide-title" className="mt-1 text-2xl font-black leading-relaxed text-navy">候補を見つけてから申請するまで</h2>
          <p className="mb-5 mt-2 text-base leading-8 text-muted">住所、年齢、世帯、所得などの基準日は制度ごとに異なります。公式情報に書かれた条件をそのまま確認します。</p>
          <GuideSteps steps={personalSteps} />
        </section>

        <section id="business-guide" className="mt-14 scroll-mt-24 border-t-2 border-line pt-12" aria-labelledby="business-guide-title">
          <p className="text-sm font-black text-accent-deep">事業者・団体向け</p>
          <h2 id="business-guide-title" className="mt-1 text-2xl font-black leading-relaxed text-navy">公募要領から実績報告まで</h2>
          <p className="mb-5 mt-2 text-base leading-8 text-muted">対象経費や着手時期を誤らないよう、申請前だけでなく交付決定後の義務まで確認します。</p>
          <GuideSteps steps={businessSteps} />
        </section>

        <aside className="mt-12 rounded-lg border-l-4 border-caution bg-caution-wash p-5">
          <h2 className="text-lg font-black text-navy">このガイドで一律に案内しないこと</h2>
          <p className="mt-2 text-sm leading-7 text-ink">住民票の有効期限、印鑑の種類、必要書類、支給時期、併用可否は制度ごとに異なります。一般化せず、公式募集要項または担当窓口でご確認ください。</p>
        </aside>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/grants/" className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 py-3 text-sm font-black text-white">制度を探す</Link>
          <Link href="/faq/" className="inline-flex min-h-11 items-center rounded-md border-2 border-navy bg-card px-5 py-3 text-sm font-black text-navy">よくある質問を見る</Link>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'HowTo', name: '個人・家族向けの支援制度申請前ガイド', step: personalSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.text })) },
          { '@type': 'HowTo', name: '事業者・団体向けの支援制度申請前ガイド', step: businessSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.text })) },
        ],
      }) }} />
    </>
  );
}
