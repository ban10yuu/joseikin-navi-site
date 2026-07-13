# 最終作業報告

作業日：2026年7月13日
作業ブランチ：`feature/joseikin-trust-platform`

## 実装内容

公開画面の矛盾を止める正規化層を追加し、トップ、検索、カテゴリ、地域、制度詳細を組み直しました。受付状況、制度種別、対象者、目的、公式確認、検索公開、収益化を共通ルールで扱います。元の制度データは一括書換えしていません。

制度検索はサーバー側で絞り込み、1ページ24件だけを返します。検索条件はURLに残るため、再読み込み、共有、戻る操作が可能です。トップページには個人向けと事業者向けの入口、目的、地域、締切、更新情報、確認方法を順番に配置し、用途を説明するSVG図解を追加しました。

## 主なファイル

- `src/lib/grant-domain.ts`：既存制度データの正規化
- `src/lib/grant-status.ts`：受付状況と貸付表示
- `src/lib/grant-query.ts`：サーバー側検索と並び順
- `src/lib/related-grants.ts`：関連制度のスコアリング
- `src/app/page.tsx`：トップページ
- `src/app/grants/page.tsx`：検索結果
- `src/app/grant/[slug]/page.tsx`：制度詳細
- `src/components/Header.tsx`、`Footer.tsx`：全ページ共通ナビゲーション
- `src/config/site.ts`：サイト、運営者、外部サービス設定
- `src/config/affiliate-offers.ts`：アフィリエイト案件設定
- `scripts/audit-content.mjs`：制度データ監査
- `scripts/audit-build.mjs`：生成HTML、内部リンク、メタ情報、広告枠監査
- `scripts/run-e2e.py`、`scripts/e2e-smoke.py`：実ブラウザ検証

## リダイレクト

| 旧URL | 新URL | 応答 |
|---|---|---:|
| `/grant/kushiro-elderly-taxi/` | `/grant/kushiro-elderly-outing-bus/` | 301 |
| `/grant/kagoshima-elderly-taxi/` | `/grant/kagoshima-keiro-pass/` | 301 |

対応表は `data/redirects.json` と `docs/redirect-map.csv` で管理します。

## テスト結果

| コマンド・検査 | 結果 |
|---|---|
| `npm run lint` | 成功 |
| `npm run typecheck` | 成功 |
| `npm test` | 68件成功 |
| `npm run check:copy` | 成功 |
| `npm run audit:content` | 重大エラー0件 |
| `npm run build` | 成功、7,323ページ生成 |
| `npm run audit:build` | 重大エラー0件 |
| `npm run test:e2e` | 34ケース成功、axe重大違反0件 |

Lighthouseのモバイル計測中央値はPerformance 97、Accessibility 100、Best Practices 100、SEO 100でした。LCPは2.6秒、CLSは0、Total Blocking Timeは10msです。詳細は `reports/lighthouse-summary.md` に記録しました。

## 追加した環境変数

本番URL、サイト名、運営者、問い合わせ、Search Console、GA4、Vercel Analytics、AdSense、新着通知、プライバシー更新日、Cookie保存期間を `.env.example` にまとめました。未設定の機能は非表示または無効になります。

## 本番公開前の入力

最低限、`NEXT_PUBLIC_SITE_URL`を独自ドメインへ変更してください。運営者名、問い合わせ先、Search Console確認値は、確認できた値だけ設定します。広告と新着通知は、契約先と実装先が決まるまで空欄のままにしてください。

## 独自ドメインへの移行

1. Vercelへ独自ドメインを追加し、DNSを設定します。
2. `NEXT_PUBLIC_SITE_URL`を独自ドメインへ変更して再ビルドします。
3. 旧Vercel URLから独自ドメインへの恒久転送をVercel側で設定します。
4. canonical、robots、sitemap.xmlが独自ドメインを指すことを確認します。
5. Search Consoleへ新ドメインを登録し、サイトマップを送信します。
6. 旧URLと主要流入ページの301、404、インデックス状況を確認します。

## アフィリエイト案件の有効化

`src/config/affiliate-offers.ts`へ、確認済みの案件だけを追加します。`enabled`、広告主、案件名、URL、対象者、目的、掲載ページ、掲載期間、確認日、PR文言、ボタン文言を設定してください。初期状態では事業者向けのみが対象で、医療、福祉、災害、生活支援などのページは除外されます。URLなし、期限切れ、無効な案件は表示されません。

## 未解決項目

コンテンツ監査には警告2,486件が残っています。内訳の中心は説明文不足、公式URL重複、公式確認先不足です。該当ページはnoindex基準と修正待ち判定で検索公開を抑えていますが、公式資料を照合したうえで順次修正する必要があります。

この作業は専用ブランチにあり、現在の本番へは未公開です。全国収集側の最新変更を取り込んで競合を確認し、全検査を再実行してからmainへ統合してください。
