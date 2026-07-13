# 助成金ナビ UI/UX 改修 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** トップページから公式情報の確認までを、制度に詳しくない利用者でも迷わず進めるUIへ改修する。

**Architecture:** 既存の Next.js App Router と静的データ取得は維持する。検索UIと表示用カードは既存コンポーネントを整理し、詳細ページの冒頭に判断材料と公式導線を集約する。新しい表示判定が必要な箇所は純粋関数へ切り出し、助成金データや収集処理には触れない。

**Tech Stack:** Next.js App Router、React、TypeScript、Tailwind CSS v4、CSSトークン、Node.js test runner、静的エクスポート

---

## Task 1: 表示ルールをテスト可能な形にする

**Files:**
- Create: `src/lib/grant-presentation.ts`
- Create: `src/lib/grant-presentation.test.ts`
- Read: `src/lib/deadline.ts`
- Read: `src/lib/grant-source.ts`

**Step 1: 失敗するテストを書く**

次の表示ルールを `node:test` で定義する。

- 対象条件の長文を、元の文言を変えず最大4項目に分ける
- 構造化できない短文は一項目のまま返す
- 公式URLが複数あるとき、重複と空値を除く
- 確認日がない場合は「確認日 未登録」を返す

**Step 2: REDを確認する**

Run: `node --test src/lib/grant-presentation.test.ts`

Expected: `grant-presentation.ts` が存在しないため失敗する。

**Step 3: 最小実装を追加する**

`splitEligibilityText`、`normalizeOfficialUrls`、`formatVerifiedDate` を純粋関数として実装する。推測で文言を補わない。

**Step 4: GREENを確認する**

Run: `node --test src/lib/grant-presentation.test.ts`

Expected: 全テスト成功。

**Step 5: コミットする**

```bash
git add src/lib/grant-presentation.ts src/lib/grant-presentation.test.ts
git commit -m "test: 助成金表示ルールを定義"
```

## Task 2: デザイン基盤を公共サービス型に整える

**Files:**
- Modify: `src/app/globals.css`

**Step 1: カラートークンを更新する**

- `--color-navy`: `#111827`
- `--color-accent`: `#2557A7`
- 確認済み表示用の緑と、注意表示用のアンバーを追加
- 背景を `#F8FAFC` 系へ変更

**Step 2: 共通の操作状態を追加する**

フォーカスリング、44px以上の操作領域、リンク下線、`prefers-reduced-motion` を整える。

**Step 3: ホーム・詳細用のレイアウトクラスを追加する**

スマートフォンを基準に、検索面、信頼バー、要約グリッド、公式情報パネル、固定CTAのスタイルを定義する。

**Step 4: 静的検証を行う**

Run: `npm run lint`

Expected: エラーなし。

**Step 5: コミットする**

```bash
git add src/app/globals.css
git commit -m "style: 公共サービス型のデザイン基盤に更新"
```

## Task 3: トップページを検索中心に組み直す

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/HomeGrantSearch.tsx`
- Modify: `src/components/GrantCard.tsx`

**Step 1: ファーストビューの順序を変更する**

検索を説明文・実績カードより先に置く。モバイルでは、利用者区分、地域、目的またはキーワード、検索ボタンが最初の画面から分かる構成にする。

**Step 2: 利用者区分と目的の入口を追加する**

「個人・家族向け」「事業者・団体向け」は、目的候補と検索例を切り替える。データにない対象区分を断定して除外しない。選択した地域・目的・キーワードを `/grants/?q=...&pref=...` へ渡し、一覧ページで検索する。

ホームのClient Componentへ全制度と長い検索文を渡さない。トップに表示する制度は少数の代表カードだけにし、初期HTMLとRSCペイロードを小さくする。

**Step 3: 信頼バーを追加する**

公式情報ベース、公式リンク、最終確認日の表示方針を一行で説明する。掲載件数は補足扱いにする。

**Step 4: カードの比較項目を揃える**

金額、地域、対象、申請期間、確認日、実施機関を一定の順番で表示する。長文は行数を制限し、期限切れは視覚だけでなく文言でも示す。

**Step 5: 空結果を確認する**

検索条件を付けて一覧ページへ進み、URLと絞り込み状態が一致することを確認する。一覧ページで0件にしたとき、条件解除と全国へ戻る操作ができることも確認する。

**Step 6: 検証する**

Run: `npm run lint && npx tsc --noEmit`

Expected: エラーなし。

続けて `npm run build` を実行し、`out/index.html` が1MB未満であることを確認する。改修前の約13.9MBから大幅に削減できない場合は、ホームへ全件データが残っていないか調べる。

**Step 7: コミットする**

```bash
git add src/app/page.tsx src/components/HomeGrantSearch.tsx src/components/GrantCard.tsx
git commit -m "feat: トップページを検索中心の導線に再設計"
```

## Task 4: 詳細ページを判断しやすい構成にする

**Files:**
- Modify: `src/app/grant/[slug]/page.tsx`
- Create: `src/components/GrantDecisionSummary.tsx`
- Create: `src/components/OfficialSourcePanel.tsx`
- Modify or delete usage: `src/components/RequiredDocuments.tsx`
- Modify: `src/lib/documents.ts` only if unused code cleanup is必要な場合
- Use: `src/lib/grant-presentation.ts`

**Step 1: 冒頭の一分要約を作る**

制度名、実施機関、状態、金額、主な対象、地域、申請期間、確認日、公式ボタンをまとめる。公式ボタンはページ上部で見える位置に置く。

**Step 2: 対象条件を読みやすくする**

`splitEligibilityText` で既存の対象条件を短い項目に分ける。条件を追加・言い換えせず、「主な対象条件」として表示する。

**Step 3: 未確認の必要書類表示を置き換える**

カテゴリーから推測した必要書類チェックリストを外し、「申請前に公式情報で確認する4項目」を表示する。受給や申請準備の完了を断定しない。

**Step 4: 公式情報パネルを上部へ移す**

情報源、最終確認日、公式URLを主要情報の直後に表示する。長い `sourceNote` はネイティブの `details` 要素で「確認履歴」として折りたたむ。

**Step 5: スマートフォン固定CTAを追加する**

公式URLがあるときだけ、画面下に「公式サイトで最新情報を確認」を表示する。本文末尾に余白を確保し、コンテンツを隠さない。

**Step 6: 広告と関連情報を後ろへ移す**

広告、共有、著者、関連制度は、概要・条件・申請案内・公式情報の後に置く。

**Step 7: 検証する**

Run: `node --test src/lib/grant-presentation.test.ts && npm run lint && npx tsc --noEmit`

Expected: 全コマンド成功。

**Step 8: コミットする**

```bash
git add src/app/grant/[slug]/page.tsx src/components/GrantDecisionSummary.tsx src/components/OfficialSourcePanel.tsx src/components/RequiredDocuments.tsx src/lib/documents.ts
git commit -m "feat: 助成金詳細を判断中心の構成に再設計"
```

## Task 5: 全体を実ブラウザで検証する

**Files:**
- Modify: UI関連ファイルのみ（検証で見つかった問題がある場合）

**Step 1: 本番ビルドを作る**

Run: `npm run build`

Expected: 静的ページ生成が最後まで成功する。

**Step 2: ローカルで配信する**

Run: `python3 -m http.server 4173 --directory out`

Expected: `http://127.0.0.1:4173/` で閲覧できる。

**Step 3: 主要幅を確認する**

320px、390px、768px、1024px、1440pxでトップと代表的な詳細ページを確認する。

**Step 4: 操作を確認する**

- Tabキーで検索フォーム、目的、カード、公式リンクへ移動できる
- 入力・選択・解除で件数と結果が更新される
- 0件状態から条件を戻せる
- 詳細ページの公式リンクが新しいタブで正しいURLを開く
- 固定CTAが本文やフッターを隠さない

**Step 5: アクセシビリティを確認する**

見出し順、ラベル、コントラスト、フォーカス表示、`aria-live`、タップ領域を確認する。

**Step 6: 最終検証を行う**

Run: `node --test src/lib/grant-presentation.test.ts && npm run lint && npx tsc --noEmit && npm run build`

Expected: 全コマンド成功。

**Step 7: コミットする**

```bash
git add src/app src/components src/lib docs/plans
git commit -m "fix: UI検証で見つかった表示問題を修正"
```

## Task 6: 既存mainへ安全に統合する

**Files:**
- Merge対象はこのブランチのコミットのみ

**Step 1: 変更範囲を確認する**

Run: `git diff main...HEAD --stat && git status --short`

Expected: 助成金データ、棚卸しチェックポイント、Pinterest関連ファイルを含まない。

**Step 2: レビューを行う**

信頼性、アクセシビリティ、モバイル操作、既存ページとの互換性の観点で差分を確認する。

**Step 3: mainの並行変更を確認する**

全国棚卸しの自動処理が更新しているファイルと重ならないことを確認してから、コミット単位で統合する。競合時はmain側の利用者変更を優先し、UI差分だけを再適用する。

**Step 4: 統合後に再検証する**

Run: `npm run lint && npx tsc --noEmit && npm run build`

Expected: main上でも全コマンド成功。
