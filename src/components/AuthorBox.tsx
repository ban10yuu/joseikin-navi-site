export default function AuthorBox() {
  return (
    <div className="border-[1.5px] border-line-strong rounded-xl p-6 bg-wash my-8">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-14 h-14 rounded-full bg-navy border-[3px] border-accent flex items-center justify-center text-white font-black text-xl">助</div>
        <div>
          <p className="font-bold text-lg text-navy">助成金ナビ編集部</p>
          <p className="text-sm text-muted">全国の助成金・補助金情報を公式確認先とともに掲載</p>
        </div>
      </div>
      <p className="text-sm text-ink leading-relaxed">
        国・都道府県・市区町村・NPO・民間団体が提供する制度を収集し、対象、金額、申請期間、公式の確認先を整理しています。最新の受付状況と必要書類は、各制度の公式サイトでご確認ください。
      </p>
    </div>
  );
}
