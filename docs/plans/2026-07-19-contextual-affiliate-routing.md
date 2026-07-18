# Contextual Affiliate Routing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 制度の対象者・目的・利用意図に直接一致する広告だけを表示し、不妊治療ページから無関係な事業者広告を除去する。

**Architecture:** `getEligibleAffiliateOffers` を唯一の表示判定境界にし、全詳細表示の迂回モードを廃止する。センシティブ領域は広告側の明示許可と厳密な一致を要求し、候補案件は承認・素材検証が終わるまで非公開にする。

**Tech Stack:** Next.js App Router、TypeScript、Node test runner、Playwright、Vercel

---

### Task 1: 文脈迂回バグをテストで再現する

**Files:**
- Modify: `src/lib/monetization.test.mjs`
- Modify: `src/lib/affiliate-config.test.mjs`

**Step 1: Write the failing test**

- 個人・家族向け医療制度へ会計広告を渡したとき0件になるテストを追加する。
- `allGrantDetails` 相当の指定をしても判定を迂回できないテストへ置き換える。
- センシティブ掲載許可案件でも目的・意図の完全一致が必要なテストを追加する。

**Step 2: Run test to verify it fails**

Run: `node --test --experimental-strip-types src/lib/monetization.test.mjs src/lib/affiliate-config.test.mjs`

Expected: 現行の全詳細迂回により医療ページへ会計広告が返りFAIL。

### Task 2: 厳密な配信判定へ修正する

**Files:**
- Modify: `src/lib/monetization.ts`
- Modify: `src/config/affiliate-offers.ts`
- Modify: `src/lib/types.ts`

**Step 1: Write minimal implementation**

- `placementMode: allGrantDetails` とその迂回分岐を削除する。
- 全案件で対象者・目的・利用意図・禁止目的を検査する。
- センシティブ文脈は広告側の明示的な許可がない限り拒否する。
- 既存案件はセンシティブ掲載を許可しない。

**Step 2: Run focused tests**

Run: `node --test --experimental-strip-types src/lib/monetization.test.mjs src/lib/affiliate-config.test.mjs`

Expected: PASS。

### Task 3: 制度ページの広告コンテキストを統一する

**Files:**
- Modify: `src/app/grant/[slug]/page.tsx`
- Modify: `src/components/ResponsiveAffiliatePlacement.tsx`
- Test: `tests/affiliate-placement.spec.ts`

**Step 1: Write the failing E2E/static assertion**

- 不妊治療ページのHTMLに会計・サーバー広告がないことを検査する。
- 一致案件がないページでは広告枠全体がないことを検査する。

**Step 2: Write minimal implementation**

- 制度データの `monetizationAllowed` を尊重する。
- 全詳細モードを削除する。
- 表示件数を文脈別に制御する。
- 見出しと説明を個人・事業者で切り替える。

**Step 3: Run focused tests**

Run: `npm test -- --runInBand`

Expected: PASS。

### Task 4: A8.net・もしもの関連案件を調査し申請する

**Files:**
- Modify: `src/config/affiliate-offers.ts`
- Create or Modify: `docs/affiliate-candidate-register.md`

**Step 1: Search logged-in ASP dashboards**

- 不妊治療、妊活、医療機関検索、医療費控除、治療費管理を検索する。
- 案件名、広告主、対象者、成果条件、禁止事項、クリエイティブ有無を記録する。

**Step 2: Review candidates**

- 制度ページとの直接一致と誤認リスクを確認する。
- 最終送信前に、案件名と条件をユーザーへ提示して確認を得る。

**Step 3: Apply and record status**

- 提携申請後は `enabled=false`、`partnershipStatus=applied` で登録する。
- 承認メールまたは管理画面の状態を確認する。

### Task 5: 全体検証と本番反映

**Files:**
- Modify: `tasks/lessons.md`
- Modify: `tasks/todo.md`

**Step 1: Run quality gates**

Run: `npm run lint`

Run: `npm run typecheck`

Run: `npm test`

Run: `npm run build`

Expected: すべてPASS。

**Step 2: Browser verification**

- 不妊治療ページで無関係広告0件。
- 事業者向け制度で関連広告が表示される。
- 320pxと1440pxで公式CTAと本文を広告が隠さない。
- コンソール重大エラー0件。

**Step 3: Deploy**

- mainへ統合しVercel本番へ反映する。
- 本番URLで同じ確認を繰り返す。

