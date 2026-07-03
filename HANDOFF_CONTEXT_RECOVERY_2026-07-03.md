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

Batch 148 completed in progress:

- 岐阜県関市9件を公式補正し、関市 raw gap 0件を達成
- 対象: `seki-dental-checkup-child` / `seki-disaster-stockpile` / `seki-family-care-leave` / `seki-fire-alarm` / `seki-maternity-dental` / `seki-shop-renovation` / `seki-tradition-craft` / `seki-twin-support` / `seki-youth-rent`
- `seki-disaster-stockpile` は災害時協力事業所防災物資等購入補助金へ補正
- `seki-fire-alarm` は防災行政無線戸別受信機設置費補助金へ補正
- `seki-twin-support` は産後ケア事業へ補正
- `seki-youth-rent` は住まいる*せき応援券へ補正
- `seki-tradition-craft` は現行の個人向け助成金として公式確認できないため通常一覧から除外
- 岐阜県 raw gap: `76 -> 67`
- 全国 raw gap: `2343 -> 2334`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 13件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: Batch 148では未実行。次の岐阜県Batch完了時へ繰り延べ。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 岐阜県庁3件
- Slugs:
  - `gifu-child-support`
  - `gifu-forestry-support`
  - `gifu-housing-seismic`

Then likely 岐阜市9件:

- `gifu-city-birth-bonus`
- `gifu-city-bousai-equipment`
- `gifu-city-childcare-subsidy`
- `gifu-city-disability-medical`
- `gifu-city-energy-support`
- `gifu-city-newlywed-rent`
- `gifu-city-nursing-home-reform`
- `gifu-city-school-lunch`
- `gifu-city-telework-bonus`

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
