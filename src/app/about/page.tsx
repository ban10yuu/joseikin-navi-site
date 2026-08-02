import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyPage from '@/components/PolicyPage';
import { siteConfig } from '@/config/site';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: '助成金ナビとは｜運営方針・公式サイトとの違い',
  description: '助成金ナビの役割、民間運営であること、公式情報の確認方法、運営者情報と各種方針をご案内します。',
  alternates: { canonical: toSiteUrl('/about/') },
};

export default function AboutPage() {
  return (
    <PolicyPage title="助成金ナビとは・運営者情報" lead="助成金ナビは、支援制度の候補を探し、公式情報へ進みやすくするための民間運営サイトです。国・自治体の公式サイトではありません。">
      <section>
        <h2>サイトの役割</h2>
        <p>制度名、対象、支援内容、申請期間、公式情報の確認先を整理します。掲載情報だけで対象可否や受付状況を確定せず、申請前に公式募集要項をご確認ください。</p>
      </section>
      <section>
        <h2>運営情報</h2>
        <dl className="grid gap-3 rounded-lg border border-line bg-card p-5">
          <div><dt className="text-sm font-bold text-muted">サイト名</dt><dd>{siteConfig.name}</dd></div>
          <div><dt className="text-sm font-bold text-muted">運営形態</dt><dd>民間運営の情報サイト</dd></div>
          {siteConfig.operatorName && <div><dt className="text-sm font-bold text-muted">運営者名</dt><dd>{siteConfig.operatorName}</dd></div>}
          <div><dt className="text-sm font-bold text-muted">お問い合わせ</dt><dd><Link href="/contact/" className="font-bold text-accent underline underline-offset-4">お問い合わせページ</Link></dd></div>
        </dl>
      </section>
      <section>
        <h2>情報の透明性</h2>
        <p><Link href="/editorial-policy/">編集方針</Link>、<Link href="/information-method/">情報の収集・更新方法</Link>、<Link href="/ai-policy/">AI利用方針</Link>で、掲載までの処理と確認表示の意味を説明しています。</p>
      </section>
    </PolicyPage>
  );
}
