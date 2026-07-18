import type { ReactNode } from 'react';
import Link from 'next/link';

interface PolicyPageProps {
  title: string;
  lead: string;
  children: ReactNode;
}

export default function PolicyPage({ title, lead, children }: PolicyPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="パンくずリスト" className="mb-5 text-sm text-muted">
        <Link href="/" className="font-medium text-navy underline underline-offset-4">ホーム</Link>
        <span aria-hidden="true" className="mx-2">/</span>
        <span aria-current="page">{title}</span>
      </nav>
      <header className="border-b-2 border-line pb-6">
        <h1 className="border-l-4 border-accent pl-4 text-2xl font-black leading-relaxed text-navy sm:text-3xl">{title}</h1>
        <p className="mt-4 text-base leading-8 text-muted">{lead}</p>
      </header>
      <div className="policy-content mt-8 space-y-8 text-base leading-8 text-ink">{children}</div>
    </div>
  );
}
