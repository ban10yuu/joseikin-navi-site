import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: '情報の収集・更新方法',
  description: '助成金ナビが参照する公式情報、制度データの自動処理、人手確認の扱い、受付状況と更新方法について説明します。',
  alternates: { canonical: toSiteUrl('/information-method/') },
};

export default function InformationMethodPage() {
  return (
    <PolicyPage title="情報の収集・更新方法" lead="制度情報をどこから取得し、どのように公開表示へ整理しているかを説明します。">
      <section><h2>情報源</h2><p>国、都道府県、市区町村、制度を実施する団体が公開するウェブページや資料を確認先として記録します。</p></section>
      <section><h2>自動処理</h2><p>制度名、実施機関、地域、支援内容、期間、公式URLなどを抽出・整理し、URLの形式や期限の矛盾、重複候補、公開に不適切な内部ログを検査します。</p></section>
      <section><h2>人手確認</h2><p>人が公式情報と掲載内容を照合した記録がある制度だけに、人手確認日を表示します。現在の掲載件数は、自動照合済み件数と人手確認済み件数を分けて集計します。</p></section>
      <section><h2>更新と受付状況</h2><p>掲載後に公式情報が変更される場合があります。期限内であることだけを理由に「受付中」と断定せず、申請前の最終確認先として公式ページを案内します。</p></section>
    </PolicyPage>
  );
}
