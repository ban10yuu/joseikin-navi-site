import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = { title: '免責事項', alternates: { canonical: toSiteUrl('/disclaimer/') } };

export default function DisclaimerPage() {
  return (
    <PolicyPage title="免責事項" lead="掲載情報の役割と、申請前に確認していただきたい事項を説明します。">
      <section><h2>情報の位置づけ</h2><p>当サイトは支援制度を探すための一般的な情報を提供する民間サイトです。行政機関の公式案内、個別の法律・税務・申請助言、対象可否の保証ではありません。</p></section>
      <section><h2>最新情報</h2><p>制度は予算、公募回、年度、法令・要綱の改定などにより変更・終了する場合があります。申請前に実施機関の公式募集要項と担当窓口をご確認ください。</p></section>
      <section><h2>外部リンク</h2><p>外部サイトの内容、利用条件、安全性は各運営者が管理しています。リンク先で入力・申請する前に、運営主体とURLをご確認ください。</p></section>
      <section><h2>損害等への対応</h2><p>当サイトの情報だけを根拠に申請・契約・支出を行わず、公式情報を確認してください。責任の範囲は適用される法令に従います。</p></section>
    </PolicyPage>
  );
}
