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
- Branch: `main`, ahead of `origin/main` by 194 commits after the last completed grant-data commit.
- Last completed commit: `6bed86b 名護市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

Batch 141 completed:

- 名護市9件を公式補正
- 沖縄県 raw gap: `9 -> 0`
- 全国 raw gap: `2407 -> 2398`
- `npm run audit:coverage`: failures 0
- `npm run lint`: errors 0, existing warnings 5
- `npm run build`: success, 5,380 static pages
- Commit: `6bed86b`

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 岩手県 一関市 20件
- Slugs:
  - `ichinoseki-birth-bonus`
  - `ichinoseki-block-wall-removal`
  - `ichinoseki-bousai-equipment`
  - `ichinoseki-child-medical`
  - `ichinoseki-child-medical-aid`
  - `ichinoseki-childcare-subsidy`
  - `ichinoseki-elderly-taxi`
  - `ichinoseki-energy-support`
  - `ichinoseki-health-checkup-subsidy`
  - `ichinoseki-housing-reform`
  - `ichinoseki-juutaku-reform`
  - `ichinoseki-migration-support`
  - `ichinoseki-newlywed-rent`
  - `ichinoseki-nursing-home-reform`
  - `ichinoseki-scholarship-repayment`
  - `ichinoseki-school-lunch`
  - `ichinoseki-school-lunch-subsidy`
  - `ichinoseki-startup-support`
  - `ichinoseki-telework-bonus`
  - `ichinoseki-water-saving`

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

