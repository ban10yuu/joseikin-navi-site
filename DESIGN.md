# 助成金ナビ Design System

## Visual direction

「行政情報を読み解くための、民間運営の編集型検索ツール」。装飾よりも、公式情報への導線、状態の判別、長い日本語の読みやすさを優先する。濃紺の編集ヘッダー、白い情報面、公式リンクの青、確認済みの緑、注意の琥珀を役割で使い分ける。

## Tokens

- Page: `#f8fafc`
- Surface: `#ffffff`
- Primary ink: `#111827`
- Body: `#1f2937`
- Muted: `#475569`
- Official/action blue: `#2557a7`; hover `#1e478a`
- Human verification green: `#047857`
- Warning amber: `#b45309`
- Border: `#e2e8f0`; strong `#cbd5e1`
- Font: Noto Sans JP, Hiragino Sans, Yu Gothic, sans-serif
- Body: 16px / 1.75–1.85
- Prose width: 720–760px
- Radius: controls/cards 8px, large panels 12pxまで
- Focus: 3px solid `#2557a7`, offset 2px

## Interaction rules

- ボタン、入力、メニュー項目は44px以上。
- 色だけで状態を伝えず、必ず文言を併記する。
- 公式リンクは青、PRは別色と「PR」表記。両者を同じCTAにしない。
- モバイルメニューはEscapeで閉じ、フォーカスを起点へ戻す。開いている間はフォーカスをメニュー内に保つ。
- 横スクロールは、明示的なチップ列以外で発生させない。
- 過剰なバッジ、グラデーション、ガラス表現、装飾画像を使わない。

## Page hierarchy

- Header: ロゴ、制度検索、地域、ガイド、サイト情報、検索。
- Grant detail: 制度種別・状態 → 名称 → 要約 → 公式CTA → 確認情報 → 制度固有情報。
- Listing: 検索条件 → 選択中条件 → 件数 → 24件 → ページネーション。
- Trust pages: 民間運営、AI利用、自動照合と人手確認の違い、訂正窓口を明示する。

## Responsive

- 320/375/390px: 1列、左右12–16px、固定CTAが本文を隠さない。
- 768px: 検索・カードは必要に応じて2列。
- 1024px以上: 本文幅を制限し、ナビと検索操作を横並びにする。
- 1440px: コンテンツ最大幅1120–1200px。本文行幅は拡大しない。
