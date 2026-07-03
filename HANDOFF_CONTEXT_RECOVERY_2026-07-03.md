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

Batch 146 completed in progress:

- 花巻市残り12件を公式補正し、花巻市 raw gap 0件を達成
- 対象: `hanamaki-block-wall-removal` / `hanamaki-housing-purchase` / `hanamaki-juutaku-reform` / `hanamaki-migration-support` / `hanamaki-nursing-equipment` / `hanamaki-scholarship` / `hanamaki-scholarship-repayment` / `hanamaki-school-lunch-subsidy` / `hanamaki-seismic-diagnosis` / `hanamaki-sme-support` / `hanamaki-startup-support` / `hanamaki-water-saving`
- `hanamaki-nursing-equipment` は介護用品支給事業を公式確認できないため高齢者等住宅改造事業へ補正
- `hanamaki-water-saving` は雨水タンク設置補助金を公式確認できないため排水設備設置促進事業補助金へ補正
- 岩手県 raw gap: `28 -> 16`
- 全国 raw gap: `2371 -> 2359`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 14件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功、静的ページ5,440件、`/grant/[slug]` は2,736件相当

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 岩手県庁1件と盛岡市15件
- Slugs:
  - `iwate-education-scholarship-returnee`
  - `morioka-afterschool`
  - `morioka-block-wall-removal`
  - `morioka-bousai-equipment`
  - `morioka-child-medical-aid`
  - `morioka-elderly-taxi`
  - `morioka-health-checkup-subsidy`
  - `morioka-infertility`
  - `morioka-juutaku-reform`
  - `morioka-migration-bonus`
  - `morioka-scholarship-repayment`
  - `morioka-school-lunch-subsidy`
  - `morioka-startup-support`
  - `morioka-vacant-house`
  - `morioka-water-saving`
  - `morioka-women-startup`

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
