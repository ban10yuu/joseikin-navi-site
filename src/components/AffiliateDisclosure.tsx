export default function AffiliateDisclosure({ text, compact = false }: { text?: string; compact?: boolean }) {
  const additionalDisclosure = text?.trim() && !/紹介料/.test(text) ? text.trim() : null;
  return (
    <p className="affiliate-disclosure">
      <strong data-ad-label>PR</strong>
      {!compact ? <span>申込みにより当サイトが紹介料を受け取る場合があります。</span> : null}
      {!compact && additionalDisclosure ? <span className="sr-only">{additionalDisclosure}</span> : null}
    </p>
  );
}
