# Mobile Affiliate Path Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** モバイル利用者が制度情報と公式確認先を読みやすい状態を維持しながら、事業者選択時のトップと適合する事業者向け制度詳細で確認済み広告へ到達できる導線を実装する。

**Architecture:** `getEligibleAffiliateOffers`をdefault-denyへ戻し、関連性・ページ品質・非センシティブ条件を満たす最大2件だけを返す。同じ広告DOMをモバイルでは公式情報直後の1件表示UI、PCでは右レールへCSS Gridで再配置する。固定フッターは公式情報CTA専用のまま維持し、描画と実視認計測を分離する。

**Tech Stack:** Next.js 16 App Router、React 19、TypeScript、CSS、Node.js test runner、Python E2E、Vercel

---

### Task 1: 適格判定と広告メタデータをdefault-denyで固定する

**Files:**
- Modify: `src/config/affiliate-offers.ts`
- Modify: `src/lib/monetization.ts`
- Modify: `src/lib/monetization.test.mjs`
- Modify: `src/lib/affiliate-audit.ts`
- Modify: `src/lib/affiliate-audit.test.mjs`
- Modify: `src/config/site.ts`
- Modify: `src/app/privacy/page.tsx`
- Modify: `next.config.ts`

**Step 1: Write the failing test**

`allGrantDetails`がセンシティブ・個人・closed・noindex・不適合案件を通す既存テストを削除し、default-denyを要求するREDテストへ置き換える。`primaryPurpose=businessGrowth`でも`purposes`の副目的に各禁止purposeを含めば0件になるパラメータ化テストを追加する。最大2件、同一IDなし、関連性の決定的順序、1件だけなら水増しなしも固定する。creative取得元、確認日、遷移先host、claim確認状態、寸法、期限の監査を追加する。

**Step 2: Run test to verify it fails**

Run: `node --test src/lib/monetization.test.mjs src/lib/affiliate-audit.test.mjs`
Expected: 全詳細迂回または新しいcreative監査のアサーションでFAIL。

**Step 3: Implement the component**

`placementMode: allGrantDetails`を廃止する。禁止条件を先に評価し、全`purposes`とセンシティブ分類・タグのどれか1つでも該当すれば拒否する。その後に事業者audience、`monetizationAllowed`、index可能、公式確認先、open/scheduled、audience・purpose・intent一致、禁止目的非該当を必須化する。案件設定へcreative監査メタデータを追加し、未確認claim・host不一致・期限切れを公開不可にする。

`siteConfig.privacy`を有効な提携案件から導出できる構造にし、実際に外部通信するASP、利用目的、Cookie/第三者通信、保存期間だけを`/privacy/`へ表示する。案件無効時は未利用ASPを表示しない。外部画像・計測hostのallowlistを同じ設定から検査し、CSPへ反映する。

**Step 4: Run the focused test**

Run: `node --test src/lib/monetization.test.mjs src/lib/affiliate-audit.test.mjs`
Expected: PASS。

Run: `npm run audit:affiliates`
Expected: 有効ASPと公開プライバシー設定が一致し、許可外host 0。

**Step 5: Run stage review**

5つの敵対視点で選定契約をレビューし、指摘を修正して再実行する。

### Task 2: 単一DOMのレスポンシブ広告配置と実視認計測を実装する

**Files:**
- Modify: `src/app/grant/[slug]/page.tsx`
- Modify: `src/app/globals.css`
- Create: `src/components/ResponsiveAffiliatePlacement.tsx`
- Modify: `src/lib/affiliate-config.test.mjs`
- Modify: `src/components/AnalyticsEvents.tsx`
- Modify: `scripts/audit-build.mjs`

**Step 1: Run GitNexus impact analysis**

`GrantDetailPage`、`AffiliateRecommendation`、関連する表示フローのupstream影響を確認する。HIGHまたはCRITICALなら編集前に範囲を報告する。

**Step 2: Add failing assertions**

制度詳細で同じofferがDOMへ1回だけ生成され、1200px未満では公式情報直後、1200px以上では右レールになることを検査する。0件時は空枠なし、個人・センシティブ・closed・noindexは外部画像と計測も0とする。描画、50%以上1秒の実視認、重複抑止、クリックbeaconのテストを追加する。

**Step 3: Run focused tests**

Run: `npm test -- --test-name-pattern="affiliate"`
Expected: 新しい配置アサーションでFAIL。

**Step 4: Implement placement**

`ResponsiveAffiliatePlacement`を`OfficialSourcePanel`直後へ1回だけ置く。モバイルは最大2件を1件ずつ表示し、前後ボタンと現在位置を付ける。PCは同じDOMをCSS Gridの右列へ配置する。広告枠外はリンクにせず、画像リンクと明示CTAへ一意のアクセシブルネームを付ける。

**Step 5: Implement responsive CSS**

320px/400%で横溢れしない1件表示、44px前後ボタン、8px間隔、300×250画像の寸法予約、lazy/async/low priority、固定CTA実測高さ連動の余白を追加する。1023/1024/1199/1200pxで欠落しないことを確認する。

**Step 6: Verify the task**

Run: `npm run typecheck`
Run: `npm test`
Run: `npm run audit:affiliates`
Expected: すべてPASS。

**Step 7: Run stage review**

5つの敵対視点で詳細ページをレビューし、指摘を修正して再検証する。

### Task 3: トップの事業者選択とPR表示を同期する

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/HomeGrantSearch.tsx`
- Modify: `src/app/globals.css`
- Modify: `scripts/e2e-smoke.py`

**Step 1: Run GitNexus impact analysis**

`HomePage`、`HomeGrantSearch`、`ResponsiveAffiliatePlacement`のupstream影響を確認する。

**Step 2: Add failing E2E assertions**

初期/個人選択では事業者PRが0、事業者選択時だけ適合PRが表示され、戻る/再読込でも選択と広告が一致する検査を追加する。320px/400%で横溢れ0、PC/モバイルを通じて同一offer DOM 1件も確認する。

**Step 3: Run the focused E2E**

Run: `npm run test:e2e`
Expected: モバイルPR配置アサーションでFAIL。

**Step 4: Implement the top-page layout**

検索UIのaudience状態とPR領域を同期する。初期/個人では非表示、事業者選択時だけ表示する。サーバー初期表示とクライアント切替で二重render/impressionを発生させない。

**Step 5: Verify the task**

Run: `npm run lint`
Run: `npm run typecheck`
Run: `npm run test:e2e`
Expected: すべてPASS。

**Step 6: Run stage review**

5つの敵対視点でトップ導線をレビューし、指摘を修正して再検証する。

### Task 4: 実機相当のモバイル検証と品質ゲートを完了する

**Files:**
- Modify: `reports/e2e/summary.md`
- Modify: `docs/final-work-report.md`
- Modify: `tasks/lessons.md`

**Step 1: Run all automated checks**

Run: `npm run lint`
Run: `npm run typecheck`
Run: `npm test`
Run: `npm run audit:affiliates`
Run: `npm run check:copy`
Run: `npm run build`
Run: `npm run test:e2e`
Run: `npm run audit:build`
Expected: すべてPASS。

**Step 2: Verify responsive behavior**

320、375、390、768、1023、1024、1199、1200、1440px、200%/400%ズームでトップと制度詳細を確認する。本文/PR横スクロール、固定CTA遮蔽、PR二重DOM、フォーカス欠落、コンソールエラーがないことを確認する。

**Step 3: Verify affiliate semantics**

PR／広告表記、民間サービス・紹介料・非必須説明、広告主提供クリエイティブ、`rel`属性、新しいタブの説明、配置名、描画/実視認/クリックを確認する。公式CTAと広告リンクの色・文言・位置・アクセシブルネームが混同されないことを確認する。

**Step 4: Verify accessibility and performance**

トップ、長い事業者詳細、個人詳細、センシティブ詳細をaxe、キーボード全巡回、VoiceOver、reduced-motion、画像404で確認する。Networkで設定外host 0、AnalyticsへPII 0、案件有効時だけ利用ASP・目的・Cookie/第三者通信・保存期間がプライバシーポリシーへ出ることを確認する。Slow 4G相当で変更前後を測り、LCP 2.5秒以内、CLS 0.1以内、INP 200ms以内、Performance 90以上を目標にする。未達時は広告を初期ビューポート外へ遅延し、LCP要素から除外する。

**Step 5: Run final adversarial review**

5つの敵対視点で自動検査結果と画面をレビューし、すべての重大・高優先指摘を修正する。修正後に全品質ゲートを再実行する。

**Step 6: Update documentation**

実装内容、対象ページ、計測配置、テスト結果、既存差分との分離、未解決事項を記録する。ユーザーからの「モバイルで広告が末尾にしか見えない」指摘を`tasks/lessons.md`へ反映する。

**Step 7: Commit scoped files**

この機能で変更したファイルだけをstageし、既存の監査レポート差分を混ぜずにコミットする。
