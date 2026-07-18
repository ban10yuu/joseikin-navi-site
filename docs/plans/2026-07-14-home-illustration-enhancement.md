# Home Illustration Enhancement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** トップページのヒーローと検索パネルへ生成済みイラストを追加し、検索の分かりやすさを保ったまま親しみと視覚的な安心感を高める。

**Architecture:** 既存のWebPアセットを `src/lib/visual-assets.ts` の型付きマップから参照し、ヒーロー用モチーフ群はサーバーコンポーネント、検索手順は既存のクライアントコンポーネント内で描画する。レイアウトは `src/app/globals.css` の既存ブレークポイントへ統合し、画像なしでも情報と操作が成立する構造にする。

**Tech Stack:** Next.js App Router、React、TypeScript、CSS、next/image、Node test runner、Vercel

---

### Task 1: トップ用モチーフ参照を共通化する

**Files:**
- Modify: `src/lib/visual-assets.ts`
- Test: `src/lib/visual-assets.test.mjs`

1. ヒーローと検索手順で使うモチーフキーの存在を検査するテストを追加する。
2. `npm test -- src/lib/visual-assets.test.mjs` を実行し、未実装の参照で失敗することを確認する。
3. `HOME_HERO_MOTIFS` と `HOME_SEARCH_GUIDE_VISUALS` を実装する。
4. 同テストを再実行し、成功を確認する。

### Task 2: ヒーローへ生成モチーフを追加する

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

1. 既存人物画像の周囲へ4つのモチーフと短いラベルを配置する。
2. 768px未満では2つだけ表示し、人物画像と見出しの可読性を保つ。
3. 320px、390px、768px、1440pxで幅計算を確認する。

### Task 3: 検索パネルへイラスト付き3段階ガイドを追加する

**Files:**
- Modify: `src/components/HomeGrantSearch.tsx`
- Modify: `src/app/globals.css`

1. `next/image` と共通画像マップを読み込む。
2. 検索見出し直下へ3段階ガイドを追加する。
3. PCは横3列、モバイルも横スクロールなしの3列で簡潔に表示する。
4. 既存のfieldset、ラベル、キーボード操作に影響がないことを確認する。

### Task 4: 静的検査とUI検証を行う

**Files:**
- Modify: `tasks/todo.md`
- Modify: `tasks/lessons.md`
- Create: `/Users/banseiyuuji/dogfooding-reports/joseikin-navi-home-illustrations-2026-07-14.md`

1. `npm run lint` を実行し、エラー0を確認する。
2. `npm run typecheck` を実行し、成功を確認する。
3. `npm test` を実行し、成功を確認する。
4. `npm run build` を実行し、production build成功を確認する。
5. 320px、390px、768px、1440pxで横スクロール、画像欠損、見出し階層、検索操作を確認する。
6. 検証結果をドッグフーディングレポートとタスクへ記録する。

### Task 5: 本番へ反映する

**Files:**
- Modify if needed: `docs/site-audit.md`

1. `git diff --check` と変更対象を確認する。
2. 変更をコミットする。
3. Vercel productionへデプロイする。
4. `https://shienseido-navi.jp/` のHTTP、画像配信、PC・モバイル幅、コンソールを確認する。
