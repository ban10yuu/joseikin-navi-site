import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyPage from '@/components/PolicyPage';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: '編集方針',
  description: '助成金ナビの掲載基準、公式資料にない情報を補わない方針、自動照合と人手確認の表示、訂正対応について説明します。',
  alternates: { canonical: toSiteUrl('/editorial-policy/') },
};

export default function EditorialPolicyPage() {
  return (
    <PolicyPage title="編集方針" lead="公式情報への誘導と利用者の誤認防止を、検索流入や収益より優先します。">
      <section><h2>掲載の基準</h2><p>実施機関の公式ページ、募集要項、交付要綱など、確認先を示せる制度を優先します。存在や内容を確認できない制度は、検索エンジンへの登録対象から外します。</p></section>
      <section><h2>書かない情報</h2><p>公式資料にない対象条件、必要書類、申請方法、採択可能性、併用可否、税務上の扱いを制度固有の事実として補いません。確認できない項目は表示しません。</p></section>
      <section><h2>確認表示</h2><p>「公式情報リンクあり」「自動照合日」「人手確認済み」を区別します。自動処理でURLや内容を照合しただけの制度に、人手確認済みとは表示しません。</p></section>
      <section><h2>訂正</h2><p>誤りや古い情報の指摘を受けた場合は公式情報と照合します。ご連絡は<Link href="/correction/">訂正・削除依頼</Link>をご利用ください。</p></section>
    </PolicyPage>
  );
}
