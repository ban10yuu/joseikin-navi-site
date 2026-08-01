'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DESKTOP_NAVIGATION, MOBILE_NAVIGATION } from '@/config/navigation';

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const menu = mobileMenuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(focusableSelector);
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-accent bg-navy shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-h-11 min-w-0 items-center gap-2.5 rounded-md" aria-label="助成金ナビ">
          <Image
            src="/brand-mark.svg"
            width={36}
            height={36}
            alt=""
            aria-hidden="true"
            priority
            className="h-9 w-9 shrink-0 rounded-md"
          />
          <span className="min-w-0 leading-tight">
            <span className="block text-lg font-black tracking-wide text-white">助成金ナビ</span>
            <span className="hidden text-[10px] tracking-wider text-white/65 sm:block">公式情報への確認先を整理</span>
          </span>
        </Link>

        <nav aria-label="メインメニュー" className="hidden items-center gap-0.5 lg:flex">
          {DESKTOP_NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href} className="flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-white/85 transition-colors hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/grants/?focus=search" aria-label="制度をキーワードで検索" className="ml-1 flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <Link href="/grants/?focus=search" aria-label="制度を検索" className="flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav ref={mobileMenuRef} id="mobile-navigation" aria-label="モバイルメニュー" className="border-t border-white/15 bg-navy-deep px-4 py-3 lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1">
            {MOBILE_NAVIGATION.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <Link href={item.href} onClick={closeMenu} className="flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-white/90 hover:bg-white/10 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
