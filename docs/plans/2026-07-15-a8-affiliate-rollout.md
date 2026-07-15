# A8.net Affiliate Rollout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** A8.netの確認済み事業者向け案件だけを、関連性・期限・センシティブ除外を検証したうえで最大1件表示し、安全に計測・監査できるようにする。

**Architecture:** 既存の`AffiliateOffer`設定と`getEligibleAffiliateOffers`を中心に、intent照合、最大表示数、設定監査を純粋関数として追加する。実案件はA8管理画面で条件を確認後にだけ登録し、提携・リンク未取得の案件は無効のまま保持する。公開コンポーネントはpageTypeと制度コンテキストを受け取り、公式CTAより後でPRを明示する。

**Tech Stack:** Next.js 16 App Router、React 19、TypeScript、Node.js test runner、PlaywrightベースE2E、GA4イベント

---

### Task 1: 案件選定と表示上限を型とテストで固定する

**Files:**
- Modify: `src/config/affiliate-offers.ts`
- Modify: `src/lib/monetization.ts`
- Modify: `src/lib/monetization.test.mjs`

**Step 1: Write the failing test**

`MonetizationContext`へ`intents`と`limit`を渡し、intent不一致を除外し、優先度順で最大1件になるテストを追加する。空intent案件、センシティブ目的、個人向け制度も引き続き除外する。

**Step 2: Run test to verify it fails**

Run: `node --test src/lib/monetization.test.mjs`  
Expected: intent不一致または上限のアサーションでFAIL。

**Step 3: Write minimal implementation**

`MonetizationContext`へ`intents?: string[]`と`limit?: number`を追加し、案件intentとの積集合を必須にする。並び替え後に`slice(0, limit)`を適用し、制度詳細の既定上限を1件とする。

**Step 4: Run test to verify it passes**

Run: `node --test src/lib/monetization.test.mjs`  
Expected: PASS。

### Task 2: A8案件設定の品質監査を追加する

**Files:**
- Create: `src/lib/affiliate-audit.ts`
- Create: `src/lib/affiliate-audit.test.mjs`
- Create: `scripts/audit-affiliates.mjs`
- Modify: `package.json`

**Step 1: Write the failing test**

重複ID、URL欠落・非HTTPS、確認日欠落、期間逆転、期限切れ、対象・intent・pageType欠落、センシティブ目的の許可、禁止CTA、開示文欠落を検出するテストを書く。

**Step 2: Run test to verify it fails**

Run: `node --test src/lib/affiliate-audit.test.mjs`  
Expected: module not foundでFAIL。

**Step 3: Write minimal implementation**

純粋関数`auditAffiliateOffers()`を実装する。CLIは設定を読み、MarkdownとJSONを`reports/`へ出し、公開中案件のcriticalがあれば非0で終了する。設定を変更しない。

**Step 4: Run test to verify it passes**

Run: `node --test src/lib/affiliate-audit.test.mjs`  
Expected: PASS。

**Step 5: Verify the command**

Run: `npm run audit:affiliates`  
Expected: 現在の空設定を安全な状態として報告し、exit 0。

### Task 3: PRコンポーネントと計測コンテキストを統一する

**Files:**
- Modify: `src/components/AffiliateRecommendation.tsx`
- Modify: `src/components/AffiliateComparisonTable.tsx`
- Modify: `src/app/grant/[slug]/page.tsx`
- Modify: `src/components/AnalyticsEvents.tsx`

**Step 1: Write the failing build/E2E assertion**

PR要素に`pageType`、`grantId`、`audience`、`purpose`が入り、制度詳細でPR枠が最大1件であることをE2Eまたは生成HTML監査へ追加する。

**Step 2: Run validation to verify it fails**

Run: `npm run typecheck && npm run test:e2e`  
Expected: 新しいpropsまたはアサーションでFAIL。

**Step 3: Write minimal implementation**

`AffiliateRecommendation`へ計測コンテキストpropsを追加し、固定値`grant`を除去する。比較表からも正しいpageTypeを渡す。制度詳細ではgrantの`affiliateIntents`を選定へ渡し、最初の1件だけを表示する。

**Step 4: Run validation to verify it passes**

Run: `npm run typecheck && npm run test:e2e`  
Expected: PASS。

### Task 4: A8.netで案件候補を調査し、確認済み情報だけを登録する

**Files:**
- Modify: `src/config/affiliate-offers.ts`（リンク取得済み案件のみ）
- Create: `docs/affiliate-activation.md`

**Step 1: Read-only research**

A8.net管理画面で、会計、経費、給与、勤怠、人事、電子契約、クラウド、事業計画、EC、予約、POS、研修、専門家相談を検索する。案件名、広告主、提携状態、審査有無、掲載条件、期限を確認する。

**Step 2: Separate actions by consequence**

提携済み・リンク取得可能な案件は登録候補にする。提携申請が必要な案件は、対象と選定理由を運営者へ提示し、承認前に申請しない。

**Step 3: Register only verified offers**

リンク取得済み案件だけ`enabled=true`で登録する。未提携、URL不明、条件不明は公開設定へ追加しないか`enabled=false`にする。

**Step 4: Document operations**

`docs/affiliate-activation.md`へ、確認周期、期限切れ時の無効化、案件追加手順、A8側で必要な作業、プライバシー連動を記載する。メディアIDやトラッキングURLは記載しない。

### Task 5: 公開ポリシーとE2Eを更新する

**Files:**
- Modify: `src/app/privacy/page.tsx`
- Modify: `src/app/advertising-policy/page.tsx`
- Modify: `scripts/e2e-smoke.py`
- Modify: `scripts/audit-build.mjs`

**Step 1: Add failing checks**

有効案件がないときASP名とPR枠が出ないこと、有効案件があるfixtureではPR、外部タブ、rel属性、公式CTAより後、最大1件であることを検査する。

**Step 2: Run checks**

Run: `npm run test:e2e && npm run audit:build`  
Expected: 新しいfixture検査が実装前にFAIL。

**Step 3: Implement policy linkage**

実際に有効なnetworkだけプライバシーと広告方針に表示する。生成HTML監査へ空PR、rel不足、公式CTAより前のPR、複数PRを追加する。

**Step 4: Run checks again**

Run: `npm run test:e2e && npm run audit:build`  
Expected: PASS。

### Task 6: 全品質ゲートと本番反映

**Files:**
- Modify: `docs/final-work-report.md`

**Step 1: Run all checks**

Run: `npm run lint`  
Run: `npm run typecheck`  
Run: `npm test`  
Run: `npm run audit:affiliates`  
Run: `npm run check:copy`  
Run: `npm run build`  
Run: `npm run test:e2e`  
Run: `npm run audit:build`

Expected: すべてPASS。公開案件がない場合はPR枠なし、ある場合は確認済み案件だけ最大1件。

**Step 2: Update final report**

実装、登録した案件数、表示対象、テスト結果、運営者作業、未提携候補を記録する。秘密情報は記載しない。

**Step 3: Commit and deploy**

関連ファイルだけをコミットし、既存の本番公開手順でVercelへデプロイする。`shienseido-navi.jp`で公式CTA、PR位置、モバイル表示、計測属性を確認する。

