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
- Last completed grant-data commit before Batch 158: `62ce166 宮崎県と宮崎市10件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 158 completed in progress:

- 宮崎市9件を公式補正し、宮崎市 raw gap 0件を達成
- 対象: `miyazaki-city-scholarship` / `miyazaki-city-scholarship-v2` / `miyazaki-city-telework-bonus` / `miyazaki-elderly-taxi` / `miyazaki-juutaku-reform` / `miyazaki-scholarship-repayment` / `miyazaki-school-lunch-subsidy` / `miyazaki-startup-support` / `miyazaki-water-saving`
- `miyazaki-city-scholarship` は宮崎市奨学金返還支援事業へ補正。
- `miyazaki-city-scholarship-v2` は代表slugへ統合し、重複停止。
- `miyazaki-city-telework-bonus` は移住支援給付金制度へ統合し、重複停止。
- `miyazaki-elderly-taxi` は敬老バスカへ補正。
- `miyazaki-juutaku-reform` は木造建築物等地震対策促進事業へ補正し、R8受付終了扱い。
- `miyazaki-scholarship-repayment` は奨学金返還支援事業へ統合し、重複停止。
- `miyazaki-school-lunch-subsidy` は小学校・中学校の就学援助費へ補正。
- `miyazaki-startup-support` は中小企業融資制度の創業支援資金へ補正。
- `miyazaki-water-saving` は水洗便所改造等資金助成制度へ補正。
- 宮崎県 raw gap: `53 -> 44`
- 全国 raw gap: `2248 -> 2239`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 16件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,663件生成、`/grant/[slug]` は2,854件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 小林市9件:
  - `kobayashi-block-wall-removal`
  - `kobayashi-child-medical-aid`
  - `kobayashi-elderly-taxi`
  - `kobayashi-health-checkup-subsidy`
  - `kobayashi-juutaku-reform`
  - `kobayashi-scholarship-repayment`
  - `kobayashi-school-lunch-subsidy`
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
