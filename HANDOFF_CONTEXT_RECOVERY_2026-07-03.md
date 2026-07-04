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
- Last completed grant-data commit before Batch 155: `986508c 大垣市19件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 155 completed in progress:

- 中津川市city-batch76由来9件を公式補正し、中津川市 raw gap 0件・岐阜県 raw gap 0件を達成
- 対象: `nakatsugawa-dental-checkup-child` / `nakatsugawa-disaster-stockpile` / `nakatsugawa-family-care-leave` / `nakatsugawa-fire-alarm` / `nakatsugawa-maternity-dental` / `nakatsugawa-shop-renovation` / `nakatsugawa-tradition-craft` / `nakatsugawa-twin-support` / `nakatsugawa-youth-rent`
- `nakatsugawa-dental-checkup-child` は乳幼児健診・相談の歯科健診とフッ素塗布へ補正。
- `nakatsugawa-disaster-stockpile` は個人世帯向け補助として公式確認できないため、防災資機材等整備事業へ補正し通常一覧から除外。
- `nakatsugawa-family-care-leave` はおむつ等購入費の助成へ補正。月5,000円。
- `nakatsugawa-fire-alarm` は住宅用火災警報器補助として公式確認できないため、設置・交換案内として通常一覧から除外。
- `nakatsugawa-maternity-dental` は妊婦歯科健診へ補正。
- `nakatsugawa-shop-renovation` は空き店舗活用支援事業へ補正し、受付終了扱い。
- `nakatsugawa-tradition-craft` は現行個人助成として公式確認できないため通常一覧から除外。
- `nakatsugawa-twin-support` は多胎妊婦の妊婦健康診査5回追加助成へ補正。
- `nakatsugawa-youth-rent` は空き家に住もう応援事業補助金へ補正。
- 岐阜県 raw gap: `9 -> 0`
- 全国 raw gap: `2276 -> 2267`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 15件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,615件生成、`/grant/[slug]` は2,827件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 宮崎県延岡市9件:
  - `nobeoka-block-wall-removal`
  - `nobeoka-child-medical-aid`
  - `nobeoka-elderly-taxi`
  - `nobeoka-health-checkup-subsidy`
  - `nobeoka-juutaku-reform`
  - `nobeoka-scholarship-repayment`
  - `nobeoka-school-lunch-subsidy`
  - `nobeoka-startup-support`
  - `nobeoka-water-saving`

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
