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
- Last completed grant-data commit before this recovery update: `d9f37c2 花巻市残り12件と再開手順を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

Batch 147 completed in progress:

- 岩手県庁1件と盛岡市15件を公式補正し、岩手県 raw gap 0件を達成
- 対象: `iwate-education-scholarship-returnee` / `morioka-afterschool` / `morioka-block-wall-removal` / `morioka-bousai-equipment` / `morioka-child-medical-aid` / `morioka-elderly-taxi` / `morioka-health-checkup-subsidy` / `morioka-infertility` / `morioka-juutaku-reform` / `morioka-migration-bonus` / `morioka-scholarship-repayment` / `morioka-school-lunch-subsidy` / `morioka-startup-support` / `morioka-vacant-house` / `morioka-water-saving` / `morioka-women-startup`
- `morioka-bousai-equipment` は自主防災組織への防災資機材支援へ補正
- `morioka-elderly-taxi` は福祉タクシー及びガソリン等助成券へ補正
- `morioka-school-lunch-subsidy` は学校給食食材費臨時補助事業へ補正
- `morioka-women-startup` は起業応援ルーム芽でるネットへ補正
- 岩手県 raw gap: `16 -> 0`
- 全国 raw gap: `2359 -> 2343`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 30件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,469件、`/grant/[slug]` は2,752件相当

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 岐阜県関市9件
- Slugs:
  - `seki-dental-checkup-child`
  - `seki-disaster-stockpile`
  - `seki-family-care-leave`
  - `seki-fire-alarm`
  - `seki-maternity-dental`
  - `seki-shop-renovation`
  - `seki-tradition-craft`
  - `seki-twin-support`
  - `seki-youth-rent`

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
