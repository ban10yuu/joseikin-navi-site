# Context Recovery Handoff 2026-07-03

## Why Codex kept stopping

The thread repeatedly hit the model context window because the working context became too large:

- `SAFE_CONTINUATION_PLAN.md` is about 678KB and 5,300+ lines.
- `tasks/todo.md` is about 228KB and 800+ lines.
- The active goal continuation also injects a large persistent objective and usage history.
- Some previous commands searched or printed broad ranges from large logs, producing tens of thousands of tokens.
- Web/Jina/search outputs for official-source research add more context quickly.

The codebase is not blocked. The issue is context management in this long-running thread.

## Immediate working rule

Do not read large continuation files wholesale.

Use these instead:

```bash
cat HANDOFF_CONTEXT_RECOVERY_2026-07-03.md
tail -40 tasks/todo.md
node scripts/audit-raw-verified-gaps.mjs --limit 25
git status --short --branch
```

If a large file must be searched, use narrow `rg` queries and cap output:

```bash
rg -n "Batch 141|次回候補|一関市" SAFE_CONTINUATION_PLAN.md tasks/todo.md
```

Avoid commands that print large file regions or broad search results across `SAFE_CONTINUATION_PLAN.md`.

## Current repository state

- Repository: `/Users/banseiyuuji/joseikin-navi-site`
- Branch: `main`, ahead of `origin/main` by 200+ commits after the latest completed local commits.
- Last completed grant-data commit before Batch 159: `941ea48 宮崎市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 159 completed in progress:

- 小林市9件を公式補正し、小林市 raw gap 0件を達成
- 対象: `kobayashi-block-wall-removal` / `kobayashi-child-medical-aid` / `kobayashi-elderly-taxi` / `kobayashi-health-checkup-subsidy` / `kobayashi-juutaku-reform` / `kobayashi-scholarship-repayment` / `kobayashi-school-lunch-subsidy` / `kobayashi-startup-support` / `kobayashi-water-saving`
- `kobayashi-block-wall-removal` は危険ブロック塀除却補助の現行募集詳細確認不可により掲載停止。
- `kobayashi-child-medical-aid` は子育て支援子ども医療費助成事業へ補正。
- `kobayashi-elderly-taxi` は福祉タクシー料金助成事業へ補正。
- `kobayashi-health-checkup-subsidy` は令和8年度国保人間ドック費用助成へ補正。
- `kobayashi-juutaku-reform` は住宅等リフォーム促進事業補助金へ補正。
- `kobayashi-scholarship-repayment` は未来につなぐ人材応援奨学金返還サポート補助金へ補正。
- `kobayashi-school-lunch-subsidy` は学校給食と給食費支援へ補正。
- `kobayashi-startup-support` は空店舗活用新規創業者支援事業費補助金へ補正。
- `kobayashi-water-saving` は浄化槽設置費補助事業へ補正。
- 宮崎県 raw gap: `44 -> 35`
- 全国 raw gap: `2239 -> 2230`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 15件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,676件生成、`/grant/[slug]` は2,863件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 西都市9件:
  - `saito-block-wall-removal`
  - `saito-child-medical-aid`
  - `saito-elderly-taxi`
  - `saito-health-checkup-subsidy`
  - `saito-juutaku-reform`
  - `saito-scholarship-repayment`
  - `saito-school-lunch-subsidy`
  - `saito-startup-support`
  - `saito-water-saving`
  - `kobayashi-startup-support`
  - `kobayashi-water-saving`

## Recommended execution pattern

For the next batch, keep each turn small:

1. Research at most 5 to 8 related official pages at a time.
2. Store concise facts in the working response, not full scraped page text.
3. Add verified records in one patch.
4. Run targeted validation before broad validation.
5. Commit only:
   - `src/data/grants/verified-local-misc-2026.ts`
   - `SAFE_CONTINUATION_PLAN.md`
   - `tasks/todo.md`
   - this recovery file only if edited.

## If the current thread keeps overflowing

Start a fresh thread and read only this file plus the current repository state. Do not replay the whole old chat.

Minimum commands in a fresh thread:

```bash
cd /Users/banseiyuuji/joseikin-navi-site
cat HANDOFF_CONTEXT_RECOVERY_2026-07-03.md
git status --short --branch
node scripts/audit-raw-verified-gaps.mjs --limit 25
```
