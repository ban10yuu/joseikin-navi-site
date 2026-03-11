'use client';

import { useState } from 'react';
import { PREFECTURES } from '@/lib/types';

export default function SubscribeForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [income, setIncome] = useState('');
  const [occupation, setOccupation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xdkgpjqe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, prefecture, income, occupation, _subject: '【助成金ナビ】新規メール登録' }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-bold text-gray-900 mb-1">登録が完了しました</p>
        <p className="text-sm text-gray-500">あなたに合った助成金情報をお届けします。</p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} required
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
        <select value={prefecture} onChange={(e) => setPrefecture(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
          <option value="">お住まいの地域</option>
          {PREFECTURES.filter(p => p !== '全国').map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
        <button type="submit" disabled={loading}
          className="w-full py-2 text-sm font-semibold text-white bg-[#1d4ed8] rounded hover:bg-blue-800 transition-colors disabled:opacity-50">
          {loading ? '送信中...' : '無料で登録'}
        </button>
      </form>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
      <h3 className="text-lg font-bold text-gray-900 mb-1">あなたに合った助成金を無料診断</h3>
      <p className="text-sm text-gray-500 mb-5">
        世帯年収・地域・職業を入力すると、受給できる可能性のある助成金をメールでお届けします。
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">メールアドレス *</label>
            <input type="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">お住まいの地域</label>
            <select value={prefecture} onChange={(e) => setPrefecture(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option value="">選択してください</option>
              {PREFECTURES.filter(p => p !== '全国').map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">世帯年収</label>
            <select value={income} onChange={(e) => setIncome(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
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
            <label className="block text-xs font-medium text-gray-500 mb-1">ご職業</label>
            <select value={occupation} onChange={(e) => setOccupation(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
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

        <button type="submit" disabled={loading}
          className="w-full py-3 text-sm font-bold text-white bg-[#1d4ed8] rounded hover:bg-blue-800 transition-colors disabled:opacity-50">
          {loading ? '送信中...' : '無料で診断する（メール登録）'}
        </button>

        <p className="text-xs text-gray-400 text-center">
          ※登録は無料です。いつでも解除できます。
          <a href="/privacy/" className="underline hover:text-gray-600">プライバシーポリシー</a>
        </p>
      </form>
    </div>
  );
}
