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
- Last completed grant-data commit before Batch 162: `14add0c 都城市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 162 completed in progress:

- 都城市残り9件を公式補正
- 対象: `miyakonojo-juutaku-reform` / `miyakonojo-nursing-equipment` / `miyakonojo-scholarship` / `miyakonojo-scholarship-repayment` / `miyakonojo-school-lunch-subsidy` / `miyakonojo-seismic-diagnosis` / `miyakonojo-sme-support` / `miyakonojo-startup-support` / `miyakonojo-water-saving`
- `miyakonojo-juutaku-reform` は住宅リフォーム促進事業へ補正。
- `miyakonojo-nursing-equipment` は介護用品給付券へ補正。
- `miyakonojo-scholarship` は都城三股みらい応援奨学金へ補正。
- `miyakonojo-scholarship-repayment` は奨学金返還支援補助金へ補正。
- `miyakonojo-school-lunch-subsidy` は学校給食費無償化・就学援助へ補正。
- `miyakonojo-seismic-diagnosis` は令和8年度木造住宅耐震診断補助へ補正。
- `miyakonojo-sme-support` は中小企業特別融資制度へ補正。
- `miyakonojo-startup-support` は中山間地域等出店支援事業費補助金へ補正。
- `miyakonojo-water-saving` は雨水貯留タンク設置補助金へ補正。
- 宮崎県 raw gap: `17 -> 8`
- 全国 raw gap: `2212 -> 2203`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 19件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,720件生成、`/grant/[slug]` は2,890件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 日向市8件:
  - `hyuga-block-wall-removal`
  - `hyuga-child-medical-aid`
  - `hyuga-elderly-taxi`
  - `hyuga-health-checkup-subsidy`
  - `hyuga-juutaku-reform`
  - `hyuga-scholarship-repayment`
  - `hyuga-school-lunch-subsidy`
  - `hyuga-water-saving`

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
