import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_NAVIGATION } from '@/config/navigation';
import { siteConfig } from '@/config/site';

const footerLink = 'inline-flex min-h-11 items-center text-sm text-white/75 underline-offset-4 hover:text-white hover:underline';

export default function Footer() {
  const exploreLinks = FOOTER_NAVIGATION.slice(0, 6);
  const trustLinks = FOOTER_NAVIGATION.slice(6);

  return (
    <footer className="mt-16 border-t-4 border-accent bg-navy-deep text-white/75">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1.35fr]">
          <div>
            <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-md">
              <Image
                src="/brand-mark.svg"
                width={32}
                height={32}
                alt=""
                aria-hidden="true"
                className="h-8 w-8 rounded-md"
              />
              <span className="text-lg font-black tracking-wide text-white">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">国・自治体・民間団体の公式情報をもとに、支援制度の対象、内容、期限、確認先を整理する民間運営の情報サイトです。</p>
          </div>

          <nav aria-label="制度を探す">
            <h2 className="border-b border-white/15 pb-2 text-sm font-bold text-white">制度を探す</h2>
            <ul className="mt-2">
              {exploreLinks.map((item) => <li key={item.label}><Link href={item.href} className={footerLink}>{item.label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-label="サイトの信頼情報">
            <h2 className="border-b border-white/15 pb-2 text-sm font-bold text-white">サイトの方針・お問い合わせ</h2>
            <ul className="mt-2 grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {trustLinks.map((item) => <li key={item.label}><Link href={item.href} className={footerLink}>{item.label}</Link></li>)}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/15 pt-6 text-xs leading-7 text-white/65">
          <p className="font-bold text-white">助成金ナビは民間運営の情報サイトであり、国・自治体の公式サイトではありません。</p>
          <p>掲載情報だけで対象可否は確定しません。申請前に公式募集要項をご確認ください。</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
