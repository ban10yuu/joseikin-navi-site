export default function AffiliateDisclosure({ text }: { text?: string }) {
  return (
    <p className="affiliate-disclosure">
      <strong data-ad-label>PR</strong>
      <span>申込みにより当サイトが紹介料を受け取る場合があります。</span>
      {text ? <span className="sr-only">{text}</span> : null}
    </p>
  );
}
