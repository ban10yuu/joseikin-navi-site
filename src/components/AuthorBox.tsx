export default function AuthorBox() {
  return (
    <div className="border border-blue-200 rounded-lg p-6 bg-blue-50 my-8">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white font-bold text-xl">助</div>
        <div>
          <p className="font-bold text-lg text-gray-900">助成金ナビ編集部</p>
          <p className="text-sm text-gray-500">全国2,500件以上の助成金情報を掲載</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        国・都道府県・市区町村・NPO/民間団体が提供する助成金・補助金・給付金の情報を網羅的に収集・掲載しています。子育て・住宅・医療・教育・就職・介護・生活支援・災害の8カテゴリ、47都道府県に対応。最新情報は各公式サイトでご確認ください。
      </p>
    </div>
  );
}
