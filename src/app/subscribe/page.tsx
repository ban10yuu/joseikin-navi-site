import { Metadata } from 'next';
import SubscribeForm from '@/components/SubscribeForm';

export const metadata: Metadata = {
  title: '無料助成金診断・メール登録',
  description: '世帯年収・お住まいの地域・ご職業を入力するだけで、あなたが受給できる可能性のある助成金・補助金を無料で診断。パーソナライズされた情報をメールでお届けします。',
  alternates: {
    canonical: 'https://joseikin-navi-site.vercel.app/subscribe/',
  },
};

export default function SubscribePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-slate-800 mb-3">
          あなたに合った助成金を<span className="text-blue-600">無料診断</span>
        </h1>
        <p className="text-slate-500 leading-relaxed">
          世帯年収・お住まいの地域・ご職業を入力するだけで、<br className="hidden sm:inline" />
          受給できる可能性のある助成金・補助金の情報をメールでお届けします。
        </p>
      </div>

      <SubscribeForm />

      <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">よくある質問</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Q. 本当に無料ですか？</h3>
            <p className="text-sm text-slate-500">はい、完全無料でご利用いただけます。費用は一切かかりません。</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Q. メールの頻度はどのくらいですか？</h3>
            <p className="text-sm text-slate-500">週1〜2回程度、新しい助成金情報やキャンペーン情報をお届けします。</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Q. いつでも解除できますか？</h3>
            <p className="text-sm text-slate-500">はい、メール内の解除リンクからいつでもワンクリックで解除できます。</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Q. 個人情報は安全ですか？</h3>
            <p className="text-sm text-slate-500">SSL暗号化通信で送信され、第三者への提供は行いません。詳しくは<a href="/privacy/" className="text-blue-600 hover:underline">プライバシーポリシー</a>をご覧ください。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
