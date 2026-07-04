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
- Last completed grant-data commit before Batch 161: `d4836fd 西都市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 161 completed in progress:

- 都城市9件を公式補正
- 対象: `miyakonojo-birth-bonus` / `miyakonojo-block-wall-removal` / `miyakonojo-child-medical-aid` / `miyakonojo-childcare-subsidy` / `miyakonojo-elderly-support` / `miyakonojo-elderly-taxi` / `miyakonojo-health-checkup-subsidy` / `miyakonojo-housing-purchase` / `miyakonojo-infertility`
- `miyakonojo-birth-bonus` は妊婦支援給付金へ補正。
- `miyakonojo-block-wall-removal` は危険ブロック塀等除却促進事業へ補正。
- `miyakonojo-child-medical-aid` は既存の子ども医療費助成制度への重複停止。
- `miyakonojo-childcare-subsidy` は保育料の完全無料化へ補正。
- `miyakonojo-elderly-support` は寝具類等洗濯乾燥消毒事業へ補正。
- `miyakonojo-elderly-taxi` は敬老特別乗車券へ補正。
- `miyakonojo-health-checkup-subsidy` は令和8年度国民健康保険日帰り人間ドックへ補正。
- `miyakonojo-housing-purchase` は既存の移住応援給付金への統合・重複停止。
- `miyakonojo-infertility` は不妊治療費助成事業へ補正。
- 宮崎県 raw gap: `26 -> 17`
- 全国 raw gap: `2221 -> 2212`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 18件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,704件生成、`/grant/[slug]` は2,881件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 都城市の残り9件:
  - `miyakonojo-juutaku-reform`
  - `miyakonojo-nursing-equipment`
  - `miyakonojo-scholarship`
  - `miyakonojo-scholarship-repayment`
  - `miyakonojo-school-lunch-subsidy`
  - `miyakonojo-seismic-diagnosis`
  - `miyakonojo-sme-support`
  - `miyakonojo-startup-support`
  - `miyakonojo-water-saving`

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
