# Visual Illustration System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 助成金ナビへ、トップ用の人物入りフラットイラストとカテゴリ用の統一モチーフアイコンを追加し、安心感と親しみやすさを高める。

**Architecture:** 生成した原版を `public/images/illustrations/source/` に保存し、採用セルをWeb向けアセットへ切り出す。画像参照は `src/lib/visual-assets.ts` に集約し、既存のNext.jsページと共通コンポーネントから `next/image` で利用する。情報表示・公式CTA・制度カードの優先順位は変えず、入口とガイド部分だけを視覚的に補強する。

**Tech Stack:** Next.js App Router、React、TypeScript、CSS、next/image、built-in image generation、ImageMagickまたはSharp、Node test runner、Vercel

---

### Task 1: 現行UIの視覚ベースラインを記録する

**Files:**
- Read: `src/app/page.tsx`
- Read: `src/app/globals.css`
- Read: `src/components/HomeGrantSearch.tsx`
- Read: `src/app/grants/GrantsExplorer.tsx`
- Create: `tasks/visual-illustration-baseline.md`

1. 公開トップ、検索一覧、カテゴリページをPCとモバイル幅でキャプチャする。
2. 画像が使われている箇所と、淡白に見える主要セクションを記録する。
3. 横スクロール、コンソールエラー、主要見出しを記録する。
4. ベースラインをコミットする。

### Task 2: 画像生成プロンプトと採用基準を固定する

**Files:**
- Create: `docs/visual-assets/illustration-prompts.md`
- Modify: `DESIGN.md`

1. 人物入り5点とモチーフ24〜30点のプロンプトを記録する。
2. 禁止事項を、グラデーション・3D・文字・ロゴ・写実・強い影・不自然な人体として明記する。
3. Design Systemへイラスト用トークンと使用制限を追記する。
4. ドキュメントをコミットする。

### Task 3: 人物入りイラストとアイコンシートを生成する

**Files:**
- Create: `public/images/illustrations/source/hero-community-search.png`
- Create: `public/images/illustrations/source/audience-individual.png`
- Create: `public/images/illustrations/source/audience-business.png`
- Create: `public/images/illustrations/source/application-guide.png`
- Create: `public/images/illustrations/source/source-verification.png`
- Create: `public/images/illustrations/source/support-motif-sheet.png`

1. built-in image generationで各原版を生成する。
2. 各画像を目視確認し、不自然な文字・人体・線幅・色ずれを検査する。
3. 不合格画像だけを対象に、問題を一つに絞って再生成する。
4. 採用原版をプロジェクトへコピーする。

### Task 4: アイコンシートをWeb用アセットへ変換する

**Files:**
- Create: `scripts/process-illustration-sheet.mjs`
- Create: `public/images/illustrations/motifs/*.webp`
- Modify: `package.json`
- Test: `src/lib/visual-assets.test.mjs`

1. 期待するモチーフ名とファイルの対応をテストに書く。
2. テストを実行し、アセット未作成で失敗することを確認する。
3. 切り出し・余白調整・WebP変換スクリプトを実装する。
4. 画像寸法、ファイルサイズ、セル対応を目視確認する。
5. テストを再実行して成功させ、コミットする。

### Task 5: 画像参照を共通化する

**Files:**
- Create: `src/lib/visual-assets.ts`
- Modify: `src/lib/visual-assets.test.mjs`

1. カテゴリ、目的、人物導線、空状態の対応表テストを書く。
2. テストの失敗を確認する。
3. 型付きの画像マップとフォールバックを実装する。
4. テストを成功させ、コミットする。

### Task 6: トップページへ人物入りイラストを実装する

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/components/HomeGrantSearch.tsx`

1. ヒーローへ検索行動を表す人物入りイラストを追加する。
2. 個人／事業者カードのインラインSVGを生成アセットへ置き換える。
3. 申請前ガイドと情報確認方法へ対応イラストを追加する。
4. 320pxから1440pxまでのレイアウトをCSSで調整する。
5. `next/image` の寸法、alt、priorityを用途別に設定する。
6. lintとtypecheckを実行し、コミットする。

### Task 7: カテゴリ・目的・空状態へモチーフを実装する

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/category/[slug]/page.tsx`
- Modify: `src/app/grants/GrantsExplorer.tsx`
- Modify: `src/app/globals.css`

1. 「目的から探す」の既存画像を統一モチーフへ差し替える。
2. カテゴリページ導入部へ該当モチーフを配置する。
3. 0件状態へ条件調整モチーフを追加する。
4. 画像なしでも意味が欠けないことを確認する。
5. lint、typecheck、関連テストを実行し、コミットする。

### Task 8: 品質・アクセシビリティ・パフォーマンスを検証する

**Files:**
- Create: `/Users/banseiyuuji/dogfooding-reports/joseikin-navi-visual-illustrations-2026-07-14.md`
- Modify: `tasks/todo.md`

1. `npm run lint`、`npm run typecheck`、`npm test` を実行する。
2. `npm run audit:content` と `npm run build` を実行する。
3. 320px、390px、768px、1440pxでトップ、一覧、カテゴリを確認する。
4. キーボード操作、alt、横スクロール、CLS、コンソールエラーを確認する。
5. AIっぽさ排除チェックリストで装飾過多を確認し、不要画像を削る。
6. 結果をドッグフーディングレポートとタスクへ記録する。

### Task 9: 本番へ反映して実環境を確認する

**Files:**
- Modify if needed: `docs/site-audit.md`

1. 最終diffとGit状態を確認する。
2. Vercel productionへデプロイする。
3. `https://shienseido-navi.jp/` のHTTP、SSL、canonical、画像配信を確認する。
4. PC・モバイル表示、コンソール、横スクロール、画像の視認性を確認する。
5. 本番コミットと検証結果を記録する。
