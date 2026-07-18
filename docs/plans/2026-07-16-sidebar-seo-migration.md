# Sidebar Ads and SEO Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** ASP公式広告をPC右サイドへ配置し、旧Vercel URLから`shienseido-navi.jp`への検索評価移行と主要SEOハブの品質改善を完了する。

**Architecture:** 広告は既存の`AffiliateOffer`と公開判定を再利用し、共通の右レールコンポーネントとレスポンシブページシェルで配置する。SEOはホスト正規化、正確なメタデータ・構造化データ・サイトマップ、Search Console移行を分離して実装し、既存のnoindex品質基準を弱めない。

**Tech Stack:** Next.js 16 App Router、React 19、TypeScript、Node.js test runner、Playwright E2E、Vercel、Google Search Console

**実行順序:** Task 3 → Task 4 → Task 6 → Task 1 → Task 2 → Task 5 → Task 7 → Task 8。第1段階はSEO移行基盤だけを独立コミットし、`git diff`の対象がホスト正規化、サイトマップ、構造化データ、index制御、移行検査に限定されていることを確認してからデプロイする。広告・UI・ハブ改善は第1段階の本番検査後に別コミットで実装・デプロイする。

---

### Task 1: 右レールの表示条件をテストで固定する

**Files:**
- Create: `src/components/AffiliateSidebar.tsx`
- Modify: `src/components/AffiliateRecommendation.tsx`
- Modify: `src/lib/monetization.test.mjs`
- Modify: `scripts/e2e-smoke.py`

**Steps:**
1. 公式クリエイティブのある公開案件だけを右レールへ出すテストを追加する。
2. 実装前に対象テストが失敗することを確認する。
3. 300×250の公式クリエイティブ、PR、計測属性を再利用する右レールを実装する。
4. モバイルでは右レールを解除するCSSとE2Eを追加する。
5. 単体テストとE2Eを通す。

### Task 2: トップと主要テンプレートを2カラム化する

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/grants/page.tsx`
- Modify: `src/app/grant/[slug]/page.tsx`
- Modify: `src/app/category/[slug]/page.tsx`
- Modify: `src/app/prefecture/[slug]/page.tsx`
- Modify: `src/app/support-type/[slug]/page.tsx`
- Modify: `src/app/globals.css`

**Steps:**
1. 既存コンポーネントのGitNexus影響範囲を確認する。
2. PCでは本文`minmax(0, 1fr)`と右レール300pxの共通レイアウトにする。
3. トップでは検索フォームと同じ最初の画面内へ広告を移動する。
4. 制度詳細は収益化可能な事業者向け制度だけ右レールを出す。
5. 320〜1440pxの表示とキーボード操作をE2Eで確認する。

### Task 3: 旧ホストを独自ドメインへ恒久転送する

**Files:**
- Create: `src/lib/host-redirect.ts`
- Create: `src/lib/host-redirect.test.mjs`
- Create or Modify: `src/proxy.ts`
- Modify: `next.config.ts`

**Steps:**
1. 旧Vercelホスト、www、正規ホスト、プレビュー環境の期待結果をテストに書く。
2. 実装前にテストが失敗することを確認する。
3. 旧ホストのパスとクエリを維持し、独自ドメインへ恒久転送する。
4. wwwは独自ドメインのルートホストへ統一する。
5. ローカル、プレビュー、Vercel内部通信を誤転送しないことを確認する。
6. 未知Host、偽装された`x-forwarded-host`、エンコード済みパス、クエリ、末尾スラッシュ、二重エンコード、転送ループを単体テストする。
7. 旧サイトマップ全URLを入力に、許可した旧ホストだけが固定の正規オリジンへ301/308で1ホップ転送され、転送先が404でないことを検査するスクリプトを追加する。
8. デプロイ前に旧ホストのsitemap URL集合を`artifacts/migration-20260716/old-sitemap-urls.txt`へ固定し、URL件数、重複件数、SHA-256をmanifestへ記録する。デプロイ後は旧ホストから再取得せず、この固定入力だけを使う。

### Task 4: メタデータ・構造化データ・サイトマップを正確化する

**Files:**
- Modify: `src/components/JsonLd.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/sitemap.ts`
- Modify: `src/lib/site-url.test.mjs`
- Modify: `scripts/audit-build.mjs`

**Steps:**
1. 非表示FAQ、制度名と不一致のheadline、不正確なlastmodを検出するテストを追加する。
2. ホームの非表示FAQPageを削除する。
3. Article headlineを制度名と一致させる。
4. 一覧系ページのlastmodを掲載制度の実更新日に基づかせる。
5. canonical、noindex、JSON-LDをビルド監査で検証する。
6. 制度詳細は有効かつ未来でないコンテンツ日、一覧系は掲載制度の最大有効日を使い、静的ページ・欠損・不正・未来日はlastmodを省略する決定的テストを追加する。
7. 公式URLなし、`noindex`、非公開、重複・修正待ちの制度がサイトマップへ入らないことを単体テストする。
8. 本番主要URLはindex可能、検索クエリURLと実際のVercelプレビューURLはnoindexであることを、デプロイ後のHTMLとレスポンスヘッダーで確認する。
9. 生成sitemapと本番sitemapの全`loc`について、`https://shienseido-navi.jp/`配下でプレビューホストが0件、リダイレクトなしの直接200応答、自己参照canonicalが`loc`と一致、meta robotsと`X-Robots-Tag`でindex可能であることを検査する。制度URLは加えて公開中・公式確認先あり・修正待ちでないことを確認する。

### Task 5: 「助成金」主ハブと内部リンクを強化する

**Files:**
- Modify: `src/app/support-type/[slug]/page.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/app/globals.css`

**Steps:**
1. `grant`種別ページの検索意図と既存データを確認する。
2. 助成金の対象、探し方、補助金・給付金との違いを断定しすぎない本文として追加する。
3. 個人・事業者、都道府県、目的、受付中、最近更新への内部リンクを追加する。
4. トップと共通ナビから主ハブへ説明的なアンカーテキストでリンクする。
5. 重複H1、長すぎるtitle、薄いページが増えていないことを監査する。

### Task 6: 第1段階のSEO移行基盤を本番へ反映する

**Files:**
- Modify: `docs/site-audit.md`
- Modify: `docs/final-work-report.md`
- Modify: `tasks/lessons.md`
- Modify: `tasks/todo.md`

**Steps:**
1. デプロイ前の本番デプロイURLを`vercel ls`で記録する。ホスト正規化、サイトマップ、構造化データ、index制御だけを対象に`lint`、`typecheck`、単体テスト、build監査を通す。
2. `git diff --name-status`と`git diff --stat`で第1段階に広告・UI・検索ハブの差分が含まれないことを確認し、SEO移行基盤だけを独立コミットしてVercel本番へデプロイする。
3. 旧サイトマップ全URLの1ホップ転送、転送先非404、canonical、robots、sitemap、JSON-LDを本番で検査する。
4. 本番主要URLがindex可能で、実際のVercelプレビューがnoindexであることを確認する。
5. 転送、転送先、canonical、robots、sitemap、JSON-LD、本番index可否、プレビューnoindexの必須検査が1件でも失敗したら、記録済みの直前URLへ`vercel rollback <deployment-url>`で戻す。ロールバック後に新旧ホスト、canonical、robots、sitemapを再検査する。すべて合格した場合だけTask 7へ進む。

### Task 7: 右サイド広告と検索ハブ改善を本番へ反映する

**Files:**
- Modify: `docs/site-audit.md`
- Modify: `docs/final-work-report.md`
- Modify: `tasks/lessons.md`
- Modify: `tasks/todo.md`

**Steps:**
1. Task 1、2、5の変更を対象に`npm run lint`、`npm run typecheck`、`npm test`を実行する。
2. `npm run check:copy`、`npm run audit:content`、`npm run audit:affiliates`を実行する。
3. `npm run build`、`npm run audit:build`、`npm run test:e2e`を実行する。E2E内のaxe対象はトップ、一覧、カテゴリ、都道府県、制度種別、広告あり・なし制度詳細のPC・モバイルとする。
4. 広告リンク名、代替テキスト、DOM重複、フォーカス順、200%ズーム、sticky遮蔽、320〜1440pxの横スクロールを確認する。
5. GitNexus `detect-changes`とCodexレビューゲートを通し、第2段階として本番へデプロイする。
6. 本番の右レール、モバイル配置、公式クリエイティブ、PR表記、SEOタグを実機確認する。問題があれば第1段階のデプロイへ戻す。

### Task 8: Search Consoleで独自ドメイン移行を通知する

**Files:**
- Modify: `.env.example`（必要な公開設定名だけ）
- Modify: `docs/final-work-report.md`

**Steps:**
1. Chrome基盤診断を実行し、DefaultプロファイルのSearch Consoleへ接続する。
2. `shienseido-navi.jp`のドメインプロパティを追加し、お名前.com DNSのTXTレコードで所有権を確認する。DNS操作が利用できない場合だけ、`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`を使うURLプレフィックス方式へ切り替える。
3. Vercel環境変数へ確認値を設定する場合は、値をコードや文書へ保存しない。
4. `https://shienseido-navi.jp/sitemap.xml`を送信する。
5. トップURLを検査し、ライブテストでクロール可能性を確認する。
6. 旧Vercelプロパティからアドレス変更を送信し、結果を記録する。
7. アドレス変更がプロパティ種別などの理由で利用できない場合は、恒久リダイレクト、正規canonical、新サイトマップを維持し、利用不能理由を最終報告へ記録する。
