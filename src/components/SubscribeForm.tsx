'use client';

import { useState } from 'react';
import { PREFECTURES } from '@/lib/types';

interface SubscribeFormProps {
  compact?: boolean;
}

export default function SubscribeForm({ compact = false }: SubscribeFormProps) {
  const [email, setEmail] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [income, setIncome] = useState('');
  const [occupation, setOccupation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Formspreeなど外部サービスに送信
    try {
      const res = await fetch('https://formspree.io/f/xdkgpjqe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          prefecture,
          income,
          occupation,
          _subject: '【助成金ナビ】新規メール登録',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: show success anyway (form data is still useful)
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className={`${compact ? '' : 'subscribe-card'} text-center`}>
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={`text-xl font-bold mb-2 ${compact ? 'text-slate-800' : 'text-white'}`}>登録完了!</h3>
          <p className={`text-sm ${compact ? 'text-slate-600' : 'text-white/80'}`}>
            あなたに合った助成金情報をお届けします。<br />
            最新情報をお見逃しなく!
          </p>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={prefecture}
          onChange={(e) => setPrefecture(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">お住まいの地域</option>
          {PREFECTURES.filter(p => p !== '全国').map((pref) => (
            <option key={pref} value={pref}>{pref}</option>
          ))}
        </select>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
        >
          {loading ? '送信中...' : '無料で登録する'}
        </button>
      </form>
    );
  }

  return (
    <div className="subscribe-card">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">あなたに合った助成金を無料診断</h3>
        <p className="text-white/80 text-sm mb-6">
          世帯年収・お住まいの地域・ご職業から、受給できる可能性のある助成金をメールでお届けします。
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">メールアドレス *</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">お住まいの地域</label>
              <select
                value={prefecture}
                onChange={(e) => setPrefecture(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 [&>option]:text-slate-800"
              >
                <option value="">選択してください</option>
                {PREFECTURES.filter(p => p !== '全国').map((pref) => (
                  <option key={pref} value={pref}>{pref}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">世帯年収</label>
              <select
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 [&>option]:text-slate-800"
              >
                <option value="">選択してください</option>
                <option value="200以下">200万円以下</option>
                <option value="200-400">200〜400万円</option>
                <option value="400-600">400〜600万円</option>
                <option value="600-800">600〜800万円</option>
                <option value="800-1000">800〜1,000万円</option>
                <option value="1000以上">1,000万円以上</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">ご職業</label>
              <select
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 [&>option]:text-slate-800"
              >
                <option value="">選択してください</option>
                <option value="会社員">会社員</option>
                <option value="公務員">公務員</option>
                <option value="自営業">自営業・フリーランス</option>
                <option value="パート">パート・アルバイト</option>
                <option value="経営者">経営者・役員</option>
                <option value="学生">学生</option>
                <option value="主婦主夫">主婦・主夫</option>
                <option value="求職中">求職中</option>
                <option value="年金生活">年金生活者</option>
                <option value="その他">その他</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 text-base font-bold text-slate-800 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl hover:shadow-lg hover:shadow-emerald-400/25 transition-all disabled:opacity-50"
          >
            {loading ? '送信中...' : '無料で診断する（メール登録）'}
          </button>

          <p className="text-xs text-white/50 text-center">
            ※ 登録は無料です。いつでも解除できます。
            <a href="/privacy/" className="underline hover:text-white/70">プライバシーポリシー</a>
          </p>
        </form>
      </div>
    </div>
  );
}
