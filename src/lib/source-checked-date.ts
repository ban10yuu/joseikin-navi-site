function toIsoDate(year: string, month: string, day: string): string {
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

/**
 * 監査メモに明示された「確認日」だけを抽出する。
 * 申請期限・事業実施日・公式ページの更新日を確認日として流用しない。
 */
export function sourceCheckedDateFromNote(sourceNote: string, fallback: string): string {
  const labeled = sourceNote.match(
    /(?:確認日|照合日)\s*[:：]?\s*(20\d{2})年(\d{1,2})月(\d{1,2})日/,
  );
  if (labeled) return toIsoDate(labeled[1], labeled[2], labeled[3]);

  const explicitCheck = sourceNote.match(
    /(20\d{2})年(\d{1,2})月(\d{1,2})日(?:時点)?(?:に|で|、)[^。]{0,80}(?:公式ページ|公式サイト|公式情報)[^。]{0,80}(?:確認|照合)/,
  );
  if (explicitCheck) return toIsoDate(explicitCheck[1], explicitCheck[2], explicitCheck[3]);

  return fallback;
}
