import type { Metadata } from 'next';
import Link from 'next/link';
import SubscribeForm from '@/components/SubscribeForm';
import { siteConfig } from '@/config/site';
import { isNewsletterEnabled } from '@/lib/newsletter';
import { toSiteUrl } from '@/lib/site-url';

const newsletterEnabled = isNewsletterEnabled(siteConfig.newsletter.endpoint);

export const metadata: Metadata = {
  title: '新着・更新された支援制度をメールで受け取る',
  description: '助成金ナビに掲載された支援制度の新着・更新情報をメールで受け取るための登録ページです。',
  alternates: { canonical: toSiteUrl('/subscribe/') },
  robots: newsletterEnabled ? undefined : { index: false, follow: true },
};

export default function SubscribePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-navy mb-3">新着・更新された支援制度をメールで受け取る</h1>
        <p className="text-muted leading-relaxed">登録した地域に関する新着・更新情報をお知らせするためのページです。制度の対象者であることを保証する診断ではありません。</p>
      </div>

      {newsletterEnabled ? (
        <>
          <SubscribeForm
            endpoint={siteConfig.newsletter.endpoint}
            includesPromotions={siteConfig.newsletter.includesPromotions}
            unsubscribeUrl={siteConfig.newsletter.unsubscribeUrl}
          />
          <div className="mt-10 rounded-xl border border-line bg-card p-6 text-sm text-muted leading-relaxed">
            <h2 className="mb-2 text-lg font-bold text-navy">配信について</h2>
            <p>制度の追加・更新状況に応じて配信します。配信頻度は固定していません。</p>
            {siteConfig.newsletter.senderName && <p className="mt-2">送信者名：{siteConfig.newsletter.senderName}</p>}
            {siteConfig.newsletter.unsubscribeUrl && <p className="mt-2">配信停止は登録フォームに記載したリンクから手続きできます。</p>}
          </div>
        </>
      ) : (
        <div className="rounded-xl border-2 border-navy bg-card p-6 text-center sm:p-8">
          <h2 className="text-lg font-bold text-navy">現在、メール登録の受付を停止しています</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">配信先と解除方法の設定が完了するまで、メールアドレスは取得しません。制度はサイト内から検索できます。</p>
          <Link href="/grants/" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-navy px-5 py-2 text-sm font-bold text-white">制度を探す</Link>
        </div>
      )}
    </div>
  );
}
