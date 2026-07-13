import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyPage from '@/components/PolicyPage';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = { title: 'AI利用方針', alternates: { canonical: toSiteUrl('/ai-policy/') } };

export default function AiPolicyPage() {
  return (
    <PolicyPage title="AI利用方針" lead="助成金ナビでは、公式情報の収集補助、整理、要約、品質検査にAIを利用しています。">
      <section><h2>AIを使う工程</h2><p>公式ページ候補の抽出、制度情報の構造化、文章の要約、重複・期限・禁止表現の検査に利用します。</p></section>
      <section><h2>AIに任せない判断</h2><p>公式資料にない条件や必要書類を追加したり、対象可否、採択可能性、募集予定を推測して公開したりしません。出典がない項目は省略します。</p></section>
      <section><h2>確認の区別</h2><p>AIやプログラムによる照合は「自動照合」と表示します。人が確認した記録がない情報に「編集部確認済み」「専門家監修済み」と表示しません。</p></section>
      <section><h2>誤りへの対応</h2><p>AIの要約には誤りが含まれる可能性があります。誤りを見つけた場合は<Link href="/correction/">訂正・削除依頼</Link>から公式情報のURLとともにお知らせください。</p></section>
    </PolicyPage>
  );
}
