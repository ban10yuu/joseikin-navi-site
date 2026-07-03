# Context Recovery Handoff 2026-07-03

## Why Codex kept stopping

The thread repeatedly hit the model context window because the working context became too large:

- `SAFE_CONTINUATION_PLAN.md` is about 666KB and 5,255 lines.
- `tasks/todo.md` is about 223KB and 800 lines.
- The active goal continuation also injects a large persistent objective and usage history.
- Some previous commands searched or printed broad ranges from large logs, producing tens of thousands of tokens.
- Web/Jina/search outputs for official-source research add more context quickly.

The codebase is not blocked. The issue is context management in this long-running thread.

## Immediate working rule

Do not read large continuation files wholesale.

Use these instead:

```bash
tail -40 HANDOFF_SAFE_CONTINUATION_2026-07-03.md
tail -80 tasks/todo.md
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
- Branch: `main`, ahead of `origin/main` by 196+ commits after the latest completed local commits.
- Last completed context-recovery commit: `8740c79 コンテキスト溢れ対策の再開手順を追加`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

Batch 144 completed:

- 一関市残り6件を公式補正し、一関市 raw gap 0件を達成
- 岩手県 raw gap: `41 -> 35`
- 全国 raw gap: `2384 -> 2378`
- `npm run audit:coverage`: failures 0
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `npm run build`: success, 5,413 static pages

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 岩手県 花巻市 19件
- Slugs:
  - `hanamaki-birth-bonus`
  - `hanamaki-block-wall-removal`
  - `hanamaki-child-medical-aid`
  - `hanamaki-childcare-subsidy`
  - `hanamaki-elderly-support`
  - `hanamaki-elderly-taxi`
  - `hanamaki-health-checkup-subsidy`
  - `hanamaki-housing-purchase`
  - `hanamaki-infertility`
  - `hanamaki-juutaku-reform`
  - `hanamaki-migration-support`
  - `hanamaki-nursing-equipment`
  - `hanamaki-scholarship`
  - `hanamaki-scholarship-repayment`
  - `hanamaki-school-lunch-subsidy`
  - `hanamaki-seismic-diagnosis`
  - `hanamaki-sme-support`
  - `hanamaki-startup-support`
  - `hanamaki-water-saving`

Known existing official record:

- `ichinoseki-disability-medical` already exists in `src/data/grants/verified-local-misc-2026.ts`.

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
