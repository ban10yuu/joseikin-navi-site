import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyPage from '@/components/PolicyPage';
import { siteConfig } from '@/config/site';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '助成金ナビへのお問い合わせ、掲載情報の訂正・削除依頼の窓口です。',
  alternates: { canonical: toSiteUrl('/contact/') },
};

export default function ContactPage() {
  return (
    <PolicyPage title="お問い合わせ" lead="サイトの使い方、運営、掲載方針に関するご連絡を受け付けます。個別制度の対象可否は、制度の実施機関へお問い合わせください。">
      <section><h2>掲載情報の訂正・削除</h2><p>公式情報と異なる内容やリンク切れは、<Link href="/correction/">訂正・削除依頼ページ</Link>から必要事項をご確認ください。</p></section>
      <section>
        <h2>連絡方法</h2>
        {siteConfig.contactFormUrl ? (
          <a href={siteConfig.contactFormUrl} rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 py-3 font-bold text-white">お問い合わせフォームを開く</a>
        ) : siteConfig.contactEmail ? (
          <a href={`mailto:${siteConfig.contactEmail}`} className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 py-3 font-bold text-white">{siteConfig.contactEmail}へメール</a>
        ) : (
          <p>現在、公開用の問い合わせ先を設定していません。連絡先の設定完了まで、入力フォームや仮のメールアドレスは表示しません。</p>
        )}
      </section>
      <section><h2>制度に関する質問</h2><p>申請条件、必要書類、審査、支給時期については、各制度の公式ページに記載された担当窓口へお問い合わせください。</p></section>
    </PolicyPage>
  );
}
