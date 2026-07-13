# Joseikin Trust Platform Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 既存URLと約1万件の制度データを保全しながら、助成金ナビの情報品質、受付状況、検索、広告、SEO、運営情報を共通基盤へ統一する。

**Architecture:** 旧`Grant`データは読み取り専用で維持し、公開用`NormalizedGrant`へ変換する正規化レイヤーを追加する。ページ、検索、関連制度、サイトマップ、監査は正規化後のデータだけを参照し、未確認値は`unknown`または非表示にする。検索一覧はURLクエリを処理するServer Componentと24件ページネーションへ移行する。

**Tech Stack:** Next.js 16 App Router、React 19、TypeScript 5、Tailwind CSS 4、Node test、Playwright、Vercel

---

## 作業境界

- 作業worktree: `/Users/banseiyuuji/Documents/Codex/2026-07-08/new-chat-2/joseikin-trust-platform`
- ブランチ: `feature/joseikin-trust-platform`
- 元データの大量置換は行わない。
- `main`にある全国棚卸し、Pinterest、その他未コミット変更を上書きしない。
- 独自ドメイン、運営者、問い合わせ先、ASP案件、メール配信先は未設定なら非表示にする。

## 基準コマンド

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run audit:content
npm run build
```

## P0

### Task 1: 品質ゲートと共通テストコマンド

**Files:**
- Modify: `package.json`
- Modify: `eslint.config.mjs`
- Create: `scripts/check-public-copy.mjs`
- Create: `src/lib/public-copy.test.mjs`

**Step 1: 失敗テストを追加する**

公開コンポーネントに禁止語、内部監査語、旧診断導線が残ると失敗するテストを作る。

**Step 2: 失敗を確認する**

Run: `node --test src/lib/public-copy.test.mjs`  
Expected: `診断クイズ`、`生成データ`、`HTTP 200`などを検出してFAIL。

**Step 3: 共通コマンドを追加する**

`typecheck`、`test`、`test:e2e`、`audit:content`、`check:copy`を追加する。`.gitnexus`、監査出力、ビルド出力をlint対象外にする。

**Step 4: 基準コマンドを確認する**

Run: `npm run check:copy`  
Expected: 現段階では検出一覧を表示して非0終了。

**Step 5: コミットする**

```bash
git add package.json eslint.config.mjs scripts/check-public-copy.mjs src/lib/public-copy.test.mjs
git commit -m "test: 公開文言の品質ゲートを追加"
```

### Task 2: サイト設定とURL生成

**Files:**
- Create: `src/config/site.ts`
- Create: `src/lib/site-url.ts`
- Create: `src/lib/site-url.test.mjs`
- Create: `.env.example`
- Modify: `src/app/layout.tsx`

**Step 1: URLとプレビュー判定の失敗テストを書く**

`NEXT_PUBLIC_SITE_URL`の末尾スラッシュ正規化、相対URL結合、Vercel previewのnoindex、未設定運営者の非公開を検証する。

**Step 2: REDを確認する**

Run: `node --test src/lib/site-url.test.mjs`  
Expected: モジュール未作成でFAIL。

**Step 3: 最小実装を追加する**

現在URLをフォールバックにし、サイト名、連絡先、運営者、GA4、AdSense、メール、Cookie、保存期間を1か所で取得する。未設定値を空文字で公開しない。

**Step 4: layoutを設定参照へ移行する**

canonical、WebSite JSON-LD、GA4、AdSenseを設定駆動にする。運営者未設定ならOrganizationを出力しない。プレビューはnoindexにする。

**Step 5: GREENと型検査を確認してコミットする**

```bash
node --test src/lib/site-url.test.mjs
npx tsc --noEmit
git add .env.example src/config/site.ts src/lib/site-url.ts src/lib/site-url.test.mjs src/app/layout.tsx
git commit -m "feat: サイト設定とcanonical生成を一元化"
```

### Task 3: 非破壊の正規化モデル

**Files:**
- Modify: `src/lib/types.ts`
- Create: `src/lib/grant-domain.ts`
- Create: `src/lib/grant-domain.test.mjs`
- Modify: `src/lib/grants.ts`

**Step 1: enumと正規化の失敗テストを書く**

`supportType`、`audiences`、`primaryAudience`、`purposes`、`primaryPurpose`、`status`、`verificationMethod`、`contentStatus`、`indexStatus`を検証する。既存の不正カテゴリ、欠損`maxAmountNum`、欠損`applicationPeriod`も正規化できることを含める。

**Step 2: REDを確認する**

Run: `node --test src/lib/grant-domain.test.mjs`  
Expected: 型・正規化関数未実装でFAIL。

**Step 3: 旧入力型と公開型を分ける**

`LegacyGrantInput`は既存データを受け止めるため一部optional・旧カテゴリ許容とする。`NormalizedGrant`は公開時に必要な既定値を持つ。明示値を最優先し、安全に推定できない値は`unknown`または`other`とする。

**Step 4: データ集約を正規化後へ切り替える**

slug先勝ちを維持し、全取得関数が`NormalizedGrant`を返すようにする。元データファイルは変更しない。

**Step 5: GREEN、typecheck、既存テストを確認してコミットする**

```bash
node --test src/lib/*.test.mjs
npm run typecheck
git add src/lib/types.ts src/lib/grant-domain.ts src/lib/grant-domain.test.mjs src/lib/grants.ts
git commit -m "feat: 旧データを保全する制度正規化層を追加"
```

### Task 4: 受付状況と貸付表示

**Files:**
- Modify: `src/lib/deadline.ts`
- Modify: `src/lib/deadline.test.mjs`
- Create: `src/lib/grant-status.ts`
- Create: `src/lib/grant-status.test.mjs`
- Modify: `src/components/GrantDecisionSummary.tsx`

**Step 1: statusの失敗テストを書く**

Asia/Tokyo、締切時刻、closed優先、明示openのみclosingSoon、予算早期終了、loan警告を検証する。

**Step 2: REDを確認する**

Run: `node --test src/lib/deadline.test.mjs src/lib/grant-status.test.mjs`

**Step 3: 判定関数と表示モデルを実装する**

`scheduled/open/closingSoon/closed/suspended/unknown`を返し、closedでは申請促進文を生成しない。loanとscholarshipLoanへ「原則として返済が必要」を返す。

**Step 4: 要約カードを表示モデルへ接続する**

色だけに依存せず、文字とアイコンで状態を表示する。

**Step 5: GREENとコミット**

```bash
node --test src/lib/deadline.test.mjs src/lib/grant-status.test.mjs
git add src/lib/deadline.ts src/lib/deadline.test.mjs src/lib/grant-status.ts src/lib/grant-status.test.mjs src/components/GrantDecisionSummary.tsx
git commit -m "fix: 受付状況と貸付注意を矛盾なく表示"
```

### Task 5: 確認方法と公開本文の安全化

**Files:**
- Modify: `src/lib/grant-source.ts`
- Create: `src/lib/grant-source.test.mjs`
- Create: `src/lib/public-content.ts`
- Create: `src/lib/public-content.test.mjs`
- Modify: `src/components/OfficialSourcePanel.tsx`

**Step 1: 失敗テストを書く**

`verifiedAt`だけではhumanにならないこと、`humanReviewedAt`だけが人手確認になること、内部監査見出し・文章が公開セクションから落ちることを検証する。

**Step 2: REDを確認する**

Run: `node --test src/lib/grant-source.test.mjs src/lib/public-content.test.mjs`

**Step 3: verificationMethodを実装する**

`automated/human/mixed/unknown`を分離し、「公式情報リンクあり」「自動照合日」「人手確認済み」を別表示にする。

**Step 4: 公開用セクションを安全化する**

内部監査語を含む`sourceNote`、description、sectionを公開レンダリングから除外する。元データは保持する。

**Step 5: GREENとコミット**

```bash
node --test src/lib/grant-source.test.mjs src/lib/public-content.test.mjs
git add src/lib/grant-source.ts src/lib/grant-source.test.mjs src/lib/public-content.ts src/lib/public-content.test.mjs src/components/OfficialSourcePanel.tsx
git commit -m "fix: 自動照合と人手確認を分離"
```

### Task 6: 件数と関連制度の共通集計

**Files:**
- Create: `src/lib/grant-stats.ts`
- Create: `src/lib/grant-stats.test.mjs`
- Create: `src/lib/related-grants.ts`
- Create: `src/lib/related-grants.test.mjs`
- Modify: `src/lib/grants.ts`

**Step 1: 集計と関連度の失敗テストを書く**

公式情報リンクあり件数、総掲載数、複数purpose件数、カテゴリ合計が総数と一致しない理由、無関係なaudience/purposeの除外を検証する。

**Step 2: REDを確認する**

Run: `node --test src/lib/grant-stats.test.mjs src/lib/related-grants.test.mjs`

**Step 3: 集計を一元化する**

全ページが同じ`GrantStats`を使う。カテゴリ別は重複を許すことを明示できる値を返す。

**Step 4: 関連制度スコアを実装する**

audience、primaryPurpose、地域、supportType、status、公式リンクで加点し、閾値未満を除外する。「人気」は返さない。

**Step 5: GREENとコミット**

```bash
node --test src/lib/grant-stats.test.mjs src/lib/related-grants.test.mjs
git add src/lib/grant-stats.ts src/lib/grant-stats.test.mjs src/lib/related-grants.ts src/lib/related-grants.test.mjs src/lib/grants.ts
git commit -m "fix: 制度件数と関連候補の基準を統一"
```

### Task 7: リダイレクト基盤

**Files:**
- Create: `src/data/redirects.ts`
- Create: `src/lib/redirects.ts`
- Create: `src/lib/redirects.test.mjs`
- Modify: `next.config.ts`
- Create: `docs/redirect-map.csv`

**Step 1: リダイレクトの失敗テストを書く**

旧URL→新URL、301、循環なし、重複なしを検証する。

**Step 2: 対象制度を確認する**

`kushiro-elderly-taxi`と`kagoshima-elderly-taxi`の現在の制度名、公式URL、既存slug規則を照合する。確認できない新slugは作らない。

**Step 3: マップとNext設定を実装する**

確定した新slugを追加し、旧slugを削除せず301にする。

**Step 4: テストする**

Run: `node --test src/lib/redirects.test.mjs`  
Expected: PASS。

**Step 5: コミットする**

```bash
git add src/data/redirects.ts src/lib/redirects.ts src/lib/redirects.test.mjs next.config.ts docs/redirect-map.csv
git commit -m "fix: 制度実体変更ページへ301リダイレクトを追加"
```

### Task 8: 広告・PR・プライバシー設定

**Files:**
- Create: `src/config/affiliate-offers.ts`
- Create: `src/lib/monetization.ts`
- Create: `src/lib/monetization.test.mjs`
- Modify: `src/components/GoogleAd.tsx`
- Modify: `src/app/privacy/page.tsx`

**Step 1: 表示条件の失敗テストを書く**

未設定広告はDOMなし、全案件disabled、期限切れ・URLなしは非表示、センシティブpurposeは禁止、PR rel属性を検証する。

**Step 2: REDを確認する**

Run: `node --test src/lib/monetization.test.mjs`

**Step 3: 広告と案件設定を実装する**

AdSenseとaffiliateを分け、既存の一般書籍リンクを公開経路から外す。案件は空配列または`enabled:false`とする。

**Step 4: プライバシーを実装状況連動へ変更する**

GA4、Vercel Analytics、AdSense、もしも等は、設定で有効なものだけ表示する。絶対表現を削る。

**Step 5: GREENとコミット**

```bash
node --test src/lib/monetization.test.mjs
git add src/config/affiliate-offers.ts src/lib/monetization.ts src/lib/monetization.test.mjs src/components/GoogleAd.tsx src/app/privacy/page.tsx
git commit -m "fix: 未設定広告と未確認ASP表示を停止"
```

### Task 9: メール登録を新着通知へ変更

**Files:**
- Modify: `src/components/SubscribeForm.tsx`
- Modify: `src/app/subscribe/page.tsx`
- Create: `src/lib/newsletter.ts`
- Create: `src/lib/newsletter.test.mjs`

**Step 1: 失敗テストを書く**

配信先未設定ならフォーム非表示、年収・職業を送らない、同意日時・文面版・登録元を持つことを検証する。

**Step 2: REDを確認する**

Run: `node --test src/lib/newsletter.test.mjs`

**Step 3: B案を実装する**

「無料診断」を削除し、メールと任意地域だけにする。Formspree URLを環境変数化する。失敗時に成功表示しない。

**Step 4: 同意UIと解除設定を追加する**

広告を含む可能性、送信者、解除方法は設定値がある場合だけ表示する。

**Step 5: GREENとコミット**

```bash
node --test src/lib/newsletter.test.mjs
git add src/components/SubscribeForm.tsx src/app/subscribe/page.tsx src/lib/newsletter.ts src/lib/newsletter.test.mjs
git commit -m "fix: メール登録を新着通知へ整理"
```

### Checkpoint P0

```bash
npm run lint
npm run typecheck
npm test
npm run check:copy
```

Expected: すべてPASS。公開コンポーネントに旧診断、内部監査語、空広告が残らない。

## P1

### Task 10: 共通ヘッダー・フッター・情報ページ

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/editorial-policy/page.tsx`
- Create: `src/app/ai-policy/page.tsx`

**Steps:**

1. モバイルメニューのリンク、Escape、フォーカス復帰のテストを追加する。
2. PC・モバイルナビを指定項目へ統一する。
3. 無関係な関連サイトを主要フッターから削除する。
4. 運営者未設定値を表示しない情報ページを作る。
5. `npm test && npm run typecheck`を実行し、`feat: 共通ナビゲーションと編集方針を整備`でコミットする。

### Task 11: ガイド・FAQ・問い合わせ・免責

**Files:**
- Modify: `src/app/guide/page.tsx`
- Modify: `src/app/faq/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Create: `src/app/disclaimer/page.tsx`
- Create: `src/app/correction/page.tsx`

**Steps:**

1. 禁止断定と旧機能案内を検出する失敗テストを追加する。
2. 個人向け・事業者向けガイドへ分ける。
3. FAQを「制度ごとに異なる」基準へ修正し、出典と確認日を持たせる。
4. 問い合わせを設定駆動にし、訂正・削除依頼導線を追加する。
5. `npm run check:copy && npm test`を通し、`fix: ガイドとFAQの断定表現を修正`でコミットする。

### Task 12: サーバー側検索とページネーション

**Files:**
- Create: `src/lib/grant-query.ts`
- Create: `src/lib/grant-query.test.mjs`
- Modify: `src/app/grants/page.tsx`
- Modify: `src/components/FilterPanel.tsx`
- Replace: `src/components/GrantListClient.tsx`

**Steps:**

1. 全検索条件、24件ページ、並び順、クエリ正規化の失敗テストを書く。
2. 純粋なサーバー検索関数を実装する。
3. `/grants/`で`searchParams`を処理し、全件をClient Componentへ渡さない。
4. 選択チップ、全解除、0件時提案、クエリ付きnoindexを実装する。
5. `npm test && npm run typecheck`を通し、`feat: 制度検索をサーバー側ページネーションへ移行`でコミットする。

### Task 13: トップページ再構成

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/HomeGrantSearch.tsx`
- Create: `src/components/AudienceEntry.tsx`
- Create: `src/components/InformationMethod.tsx`
- Modify: `src/app/globals.css`

**Steps:**

1. 指定セクション順と検索パラメータのテストを書く。
2. ファーストビューを対象・地域・キーワード/目的の3条件へ絞る。
3. 締切間近は明示openのみ、最近更新は確認日順にする。
4. 機能理解に必要なアイコン・図解だけを配置する。
5. 320pxから1440pxを確認し、`feat: トップページを支援制度探索の順序へ再構成`でコミットする。

### Task 14: カテゴリ・地域ページ

**Files:**
- Modify: `src/app/category/[slug]/page.tsx`
- Modify: `src/app/prefecture/[slug]/page.tsx`
- Create: `src/components/GrantCollectionIntro.tsx`
- Create: `src/components/GrantCollectionSections.tsx`

**Steps:**

1. 件数、対象者、受付中、最近更新、目的の表示テストを書く。
2. 共通コレクションコンポーネントを実装する。
3. 人気、一般商品、無関係制度を除去する。
4. 検索条件を引き継ぐリンクを追加する。
5. テスト後、`feat: カテゴリと地域ページを選択支援型へ統一`でコミットする。

### Task 15: 制度詳細と関連制度

**Files:**
- Modify: `src/app/grant/[slug]/page.tsx`
- Modify: `src/components/GrantCard.tsx`
- Modify: `src/components/GrantDecisionSummary.tsx`
- Modify: `src/components/OfficialSourcePanel.tsx`
- Create: `src/components/OfficialSourceButton.tsx`

**Steps:**

1. 指定表示順、closed CTA、loan警告、欠損セクション非表示のテストを書く。
2. 公開用セクションだけを順序付けして表示する。
3. 公式CTAを共通化し、申請画面以外で「申請する」を使わない。
4. 関連制度をスコア閾値付きで表示し、訂正依頼を追加する。
5. テスト後、`feat: 制度詳細を公式確認中心の共通テンプレートへ統一`でコミットする。

### Checkpoint P1

```bash
npm run lint
npm run typecheck
npm test
npm run check:copy
```

ブラウザで`/`、`/grants/`、カテゴリ、重点詳細URLを確認する。

## P2

### Task 16: アフィリエイト部品とイベント計測

**Files:**
- Create: `src/components/AffiliateDisclosure.tsx`
- Create: `src/components/AffiliateRecommendation.tsx`
- Create: `src/components/DisplayAdSlot.tsx`
- Create: `src/lib/analytics-events.ts`
- Create: `src/lib/analytics-events.test.mjs`

**Steps:**

1. 全イベント名とPII除外の失敗テストを書く。
2. GA4/Vercelへ送る共通イベント関数を実装する。
3. PR表示、rel属性、無効時DOMなしの部品を実装する。
4. 公式クリック、検索、フィルター、カード、登録、訂正へ接続する。
5. テスト後、`feat: 誤認を防ぐPR部品と行動計測を追加`でコミットする。

### Task 17: コンテンツ監査と成果物

**Files:**
- Create: `scripts/audit-content.mjs`
- Create: `docs/site-audit.md`
- Create: `docs/content-quality-report.md`
- Create: `docs/redirect-map.csv`
- Modify: `package.json`

**Steps:**

1. 小さなfixtureで重大エラー・警告の失敗テストを書く。
2. JSON、CSV、Markdown出力を実装する。
3. 全データへ実行し、監査結果を成果物へ反映する。
4. 重大エラーを解消またはnoindexへ落とす。
5. `npm run audit:content`を通し、`feat: 全制度のコンテンツ品質監査を追加`でコミットする。

### Task 18: サイトマップ・構造化データ・metadata

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/components/JsonLd.tsx`
- Create: `src/lib/grant-metadata.ts`
- Create: `src/lib/grant-metadata.test.mjs`
- Modify: `src/app/grant/[slug]/page.tsx`

**Steps:**

1. index可能URLのみ、120字前後description、短いtitle、Organization条件のテストを書く。
2. metadata生成を共通化する。
3. 検索ページ、低品質、重複、修正待ちをサイトマップから除外する。
4. WebSite、BreadcrumbList、Article、FAQPageを適切なページだけに出す。
5. テスト後、`fix: インデックス品質と構造化データを整合`でコミットする。

### Task 19: E2E・アクセシビリティ・性能

**Files:**
- Create: `playwright.config.ts`
- Create: `e2e/core-flows.spec.ts`
- Create: `e2e/accessibility.spec.ts`
- Modify: `package.json`
- Modify: `next.config.ts`

**Steps:**

1. トップ検索、対象切替、都道府県、解除、詳細、公式リンク、closed CTA、PR非表示、メール、モバイル、キーボードのE2Eを書く。
2. 320/375/390/768/1024/1440pxの横スクロールを検査する。
3. 重大なaxe違反を修正する。
4. ハイブリッドNext buildを実行し、検索バンドルとページサイズを測定する。
5. `test: 主要導線とアクセシビリティのE2Eを追加`でコミットする。

### Task 20: 最終検証と統合準備

**Files:**
- Modify: `docs/site-audit.md`
- Modify: `docs/content-quality-report.md`
- Create: `docs/domain-migration.md`
- Create: `docs/affiliate-activation.md`

**Steps:**

1. 全コマンドを実行する。

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run audit:content
npm run build
```

2. 本番相当で重点URLとレスポンシブ幅を確認する。
3. Codex review gateを実行し、blocking指摘を解消する。
4. mainの最新全国棚卸し差分を取り込み、再度全検証する。
5. 独自ドメイン移行手順、未設定値、アフィリエイト有効化手順を最終文書へ記録し、`docs: 公開前の移行と運用手順を追加`でコミットする。

## 完了判定

- ユーザー指定の完了条件を`docs/site-audit.md`で一項目ずつPASS/保留にする。
- 保留は、運営者が入力しなければ公開されない設定値だけに限定する。
- lint、typecheck、test、E2E、audit、buildがすべて成功する。
- 既存URLを削除していない。
- mainの進行中変更を失っていない。

