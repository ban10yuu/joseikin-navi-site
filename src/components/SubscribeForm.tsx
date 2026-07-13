'use client';

import { useState } from 'react';
import { PREFECTURES } from '@/lib/types';
import { buildNewsletterPayload, isNewsletterEnabled } from '@/lib/newsletter';

interface SubscribeFormProps {
  endpoint: string | null;
  compact?: boolean;
  includesPromotions?: boolean;
  unsubscribeUrl?: string | null;
}

export default function SubscribeForm({
  endpoint,
  compact = false,
  includesPromotions = false,
  unsubscribeUrl,
}: SubscribeFormProps) {
  const [email, setEmail] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [consented, setConsented] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isNewsletterEnabled(endpoint)) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!endpoint || !consented) return;

    setLoading(true);
    setError('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildNewsletterPayload({
          email,
          prefecture,
          source: compact ? 'compact-form' : 'subscribe-page',
          consentAt: new Date().toISOString(),
        })),
      });
      if (!response.ok) throw new Error(`newsletter:${response.status}`);
      setSubmitted(true);
    } catch {
      setError('登録を完了できませんでした。時間をおいて、もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8" role="status">
        <p className="text-lg font-bold text-gray-900 mb-1">登録を受け付けました</p>
        <p className="text-sm text-gray-500">新着・更新された支援制度の情報をお届けします。</p>
      </div>
    );
  }

  return (
    <div className={compact ? '' : 'bg-card border-2 border-navy rounded-xl p-6 sm:p-8 shadow-sm'}>
      {!compact && (
        <>
          <h2 className="text-lg font-bold text-navy mb-1">新着・更新された支援制度をメールで受け取る</h2>
          <p className="text-sm text-muted mb-5">メールアドレスと任意の地域だけを登録します。対象可否を判定する診断機能ではありません。</p>
        </>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="newsletter-email" className="block text-xs font-medium text-gray-600 mb-1">メールアドレス（必須）</label>
            <input id="newsletter-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="min-h-11 w-full px-3 py-2.5 border-2 border-line-strong rounded-lg text-base bg-base text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-navy" />
          </div>
          <div>
            <label htmlFor="newsletter-prefecture" className="block text-xs font-medium text-gray-600 mb-1">地域（任意）</label>
            <select id="newsletter-prefecture" value={prefecture} onChange={(event) => setPrefecture(event.target.value)} className="min-h-11 w-full px-3 py-2.5 border-2 border-line-strong rounded-lg text-base bg-white text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-navy">
              <option value="">全国の情報を受け取る</option>
              {PREFECTURES.filter((item) => item !== '全国').map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-muted leading-relaxed">
          <input type="checkbox" checked={consented} onChange={(event) => setConsented(event.target.checked)} required className="mt-1 h-5 w-5 shrink-0" />
          <span>
            <a href="/privacy/" className="font-medium text-navy underline underline-offset-2">プライバシーポリシー</a>と、新着・更新情報のメール配信に同意します。
            {includesPromotions && ' メールには広告・アフィリエイト情報が含まれる場合があります。'}
          </span>
        </label>

        <button type="submit" disabled={loading || !consented} className="min-h-11 w-full py-3 text-sm font-bold text-white bg-accent rounded-lg hover:bg-accent-deep transition-colors disabled:opacity-50 shadow-sm">
          {loading ? '送信中…' : 'メール配信に登録する'}
        </button>
        {error && <p className="text-sm font-medium text-red-700" role="alert">{error}</p>}
        {unsubscribeUrl && <p className="text-xs text-gray-500 text-center">配信停止は<a href={unsubscribeUrl} className="underline underline-offset-2">こちら</a>から手続きできます。</p>}
      </form>
    </div>
  );
}
