import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import { siteConfig } from '@/config/site';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = { title: '訂正・削除依頼', alternates: { canonical: toSiteUrl('/correction/') } };

export default function CorrectionPage() {
  const mailto = siteConfig.contactEmail
    ? `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent('【助成金ナビ】掲載情報の訂正・削除依頼')}`
    : null;

  return (
    <PolicyPage title="訂正・削除依頼" lead="掲載情報の誤り、公式URLの変更、終了制度、重複、削除が必要な情報をお知らせください。">
      <section><h2>お知らせいただきたい内容</h2><ul className="list-disc space-y-2 pl-6"><li>対象ページのURL</li><li>誤りまたは変更箇所</li><li>確認できる公式ページ・募集要項のURL</li><li>削除依頼の場合は、その理由</li></ul></section>
      <section><h2>送信先</h2>{mailto ? <a href={mailto} className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 py-3 font-bold text-white">メールで訂正・削除を依頼</a> : <p>現在、公開用の連絡先を設定していません。設定完了まで個人情報を入力するフォームは表示しません。</p>}</section>
      <section><h2>対応方法</h2><p>ご連絡の内容を公式情報と照合し、必要に応じて修正、noindex、非公開、リダイレクト等を行います。個別の審査結果や行政判断を当サイトが変更することはできません。</p></section>
    </PolicyPage>
  );
}
