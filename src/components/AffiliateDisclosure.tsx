export default function AffiliateDisclosure({ text }: { text?: string }) {
  return <p className="text-xs leading-6 text-slate-600"><strong data-ad-label className="mr-2 inline-flex rounded bg-amber-100 px-2 py-0.5 text-amber-950">PR</strong>{text ?? '以下にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。'}</p>;
}
