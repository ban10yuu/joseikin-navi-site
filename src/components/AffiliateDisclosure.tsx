export default function AffiliateDisclosure({ text }: { text?: string }) {
  return (
    <p className="affiliate-disclosure">
      <strong data-ad-label>PR</strong>
      <span className="sr-only">
        {text ?? 'この枠にはアフィリエイトリンクが含まれます。申込みが発生した場合、当サイトが紹介料を受け取ることがあります。'}
      </span>
    </p>
  );
}
