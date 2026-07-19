export default function AffiliateDisclosure({ text }: { text?: string }) {
  const additionalDisclosure = text?.trim() && !/紹介料/.test(text) ? text.trim() : null;
  return (
    <p className="affiliate-disclosure">
      <strong data-ad-label>PR</strong>
      <span>申込みにより当サイトが紹介料を受け取る場合があります。</span>
      {additionalDisclosure ? <span className="sr-only">{additionalDisclosure}</span> : null}
    </p>
  );
}
