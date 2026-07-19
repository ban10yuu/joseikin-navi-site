# 最終作業報告

作業日：2026年7月19日
作業ブランチ：`release/ai-slop-affiliate-20260719`

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
- `src/config/affiliate-issued-html.ts`：ASP発行HTMLの未改変保存
- `src/lib/seo-article-pipeline.mjs`：公式資料との照合を必須にしたSEO記事品質ゲート
- `scripts/audit-content.mjs`：制度データ監査
- `scripts/audit-affiliates.mjs`：案件、公式クリエイティブ、発行HTMLの監査
- `scripts/audit-build.mjs`：生成HTML、内部リンク、メタ情報、広告枠監査
- `scripts/run-seo-article-pipeline.mjs`：公式ページ再取得とレビュー待ち原稿の生成
- `scripts/run-e2e.py`、`scripts/e2e-smoke.py`：実ブラウザ検証

## リダイレクト

| 旧URL | 新URL | 応答 |
|---|---|---:|
| `/grant/kushiro-elderly-taxi/` | `/grant/kushiro-elderly-outing-bus/` | 301 |
| `/grant/kagoshima-elderly-taxi/` | `/grant/kagoshima-keiro-pass/` | 301 |
| `/grant/fukuyama-elderly-taxi/` | `/grant/fukuyama-elderly-support/` | 301 |

対応表は `data/redirects.json` と `docs/redirect-map.csv` で管理します。

## テスト結果

| コマンド・検査 | 結果 |
|---|---|
| `npm run lint` | 成功 |
| `npm run typecheck` | 成功 |
| `npm test` | 177件成功 |
| `npm run audit:affiliates` | 登録22件、公開可能16件、重大エラー0件 |
| `npm run check:copy` | 成功 |
| `npm run audit:content` | 27,875制度、重大エラー0件 |
| `npm run audit:seo-articles -- --dry-run` | 1件reviewReady、blocked 0件、自動公開なし |
| `npm run build` | 成功、329ページ生成（制度詳細は主要240件を事前生成し、残りはISRで生成） |
| `npm run audit:build` | 322 HTML、重大エラー0件、警告0件。生成済み制度詳細240件中、文脈一致15件・描画成功15件 |
| `npm run test:e2e` | 74ケース成功、axe 9ページで重大違反0件 |

ASP発行バナーは発行HTMLを変更せず保存し、読み上げとキーボード操作のためのリンクを外側に追加しています。320〜1440pxで横スクロールがないことをE2Eで確認しました。

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

2026年7月19日時点でA8.net・もしもアフィリエイトの設定は22案件です。このうち提携済み、発行HTMLあり、確認期限内、文脈一致、幅300px以下の公開条件を満たす16案件を公開候補にしています。KANBEI SIGNは素材内の制度横断表現を確認できないため停止し、幅300pxを超える再エネ相談とRemofulは320px向けの未改変素材を取得するまで停止しています。申請中案件も承認・素材確認が終わるまで非表示です。

案件選定には主目的、対象者、対象条件、本文から確認できるintent、公式情報の有無を使用します。トップ初期表示は個人・家族向け3件、事業者・団体向けへ切替後は4件、制度詳細は公式情報より後へ最大3件を重複なしで表示します。受付終了制度にも文脈が一致すれば表示しますが、noindex、修正待ち、一時停止、公式確認先なし、未承認のセンシティブ制度では表示しません。全27,875制度のうち、現在の提携済み案件へ文脈一致する制度は984件です。直近静的生成240件では一致15件すべてで広告描画に成功しました。画面外のASP画像と計測ピクセルは接近時まで遅延し、提携状態、確認期限、対象者、intent、掲載ページ、CTA、開示文、発行HTMLを`npm run audit:affiliates`、`npm run audit:content`、`npm run audit:build`で検査します。

## AI臭除去SEOパイプライン

キーワード、原稿、真実性パケットを入力し、実行時に公式ページを再取得して本文と根拠箇所を照合します。取得先hostの許可リスト、HTTP応答、本文SHA-256、数値・日付・対象条件の一致、既存URLとの対応、禁止表現、文章品質を検査します。合格しても自動公開はせず、`reviewReady`、draft、noindex、人手承認待ちで停止します。

現在は「福山市 おでかけ乗車券」の1原稿が`reviewReady`です。通常実行は`npm run seo:article`、変更を保存しない監査は`npm run audit:seo-articles -- --dry-run`です。

A8.netの審査中案件は承認を確認した後にだけ、発行された広告リンク、`partnershipStatus=partnered`、`enabled=true`を設定します。公開案件は月1回以上、提携状態とリンク有効性を再確認します。

## 未解決項目

コンテンツ監査には警告3,333件が残っています。公式URL重複1,620件、修正待ち2,564件を含みます。重大エラーは0件ですが、これらは公式資料を照合したうえで順次統合・修正する必要があります。

広告の掲載率を増やすには、未掲載ページの主目的と直接一致する承認済み案件、および幅300px以下のASP発行クリエイティブを追加取得する必要があります。無関係な汎用広告で空きを埋める設定には戻しません。

## 本番反映

コミット`b89e854`を`main`へ反映し、Vercelのデプロイ成功後に`https://shienseido-navi.jp/`を確認しました。トップのPR画像・明示CTA、創業支援詳細の関連広告2件、不妊治療詳細の専用広告2件を確認し、不妊治療詳細に会計・レンタルサーバー広告がないことも確認しました。`/grant/fukuyama-elderly-taxi/`は`/grant/fukuyama-elderly-support/`へ301で転送されます。canonical、robots、24,831 URLのsitemapも本番応答で確認済みです。
