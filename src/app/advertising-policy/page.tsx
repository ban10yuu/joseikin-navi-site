import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import { toSiteUrl } from '@/lib/site-url';

export const metadata: Metadata = { title: '広告・アフィリエイト掲載方針', alternates: { canonical: toSiteUrl('/advertising-policy/') } };

export default function AdvertisingPolicyPage() {
  return (
    <PolicyPage title="広告・アフィリエイト掲載方針" lead="公式制度情報を探す行動を妨げず、行政機関の案内と広告を明確に分けます。">
      <section><h2>表示の原則</h2><p>広告は「広告」、成果報酬リンクは「PR」と表示します。公式募集要項へのリンクより上にPRを置かず、公式申請ボタンのような色・文言を使いません。</p></section>
      <section><h2>掲載対象</h2><p>初期段階では事業者向け制度と申請準備に直接関係するサービスに限定します。医療、障害、生活困窮、災害、介護など緊急性・脆弱性が高いページでは初期状態でアフィリエイトを無効にします。</p></section>
      <section><h2>掲載順位</h2><p>紹介料だけを理由に順位を決めません。制度との関連性、対象者、目的、確認日、有効期限を設定で検査し、条件を満たさない案件は表示しません。</p></section>
      <section><h2>紹介料</h2><p>PRリンク経由の申込みにより当サイトが紹介料を受け取る場合があります。広告主が、掲載制度を実施する行政機関であるとは限りません。</p></section>
    </PolicyPage>
  );
}
