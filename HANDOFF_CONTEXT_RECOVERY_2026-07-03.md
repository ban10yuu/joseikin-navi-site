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
- Last completed grant-data commit before Batch 150: `3ec699c 岐阜県庁3件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

Batch 150 completed in progress:

- 岐阜市9件を公式補正し、city-batch59由来の岐阜市 raw gap 0件を達成
- 対象: `gifu-city-birth-bonus` / `gifu-city-bousai-equipment` / `gifu-city-childcare-subsidy` / `gifu-city-disability-medical` / `gifu-city-energy-support` / `gifu-city-newlywed-rent` / `gifu-city-nursing-home-reform` / `gifu-city-school-lunch` / `gifu-city-telework-bonus`
- `gifu-city-birth-bonus` は妊婦のための支援給付へ補正。妊娠時5万円、胎児1人につき5万円。
- `gifu-city-bousai-equipment` は自主防災組織強化対策補助金へ補正。個人世帯向け家庭用防災設備補助ではない。
- `gifu-city-childcare-subsidy` は令和7年度物価高対応子育て応援手当の受付終了扱い。
- `gifu-city-nursing-home-reform` は既存の `gifu-senior-home-improvement-support` と同一制度のため重複停止。
- `gifu-city-telework-bonus` は現行確認できる中小企業等DX推進補助金へ補正。
- 岐阜県 raw gap: `64 -> 55`
- 全国 raw gap: `2331 -> 2322`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 11件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,515件生成、`/grant/[slug]` は2,772件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 岐阜市のcity-batch76由来9件:
  - `gifu-dental-checkup-child`
  - `gifu-disaster-stockpile`
  - `gifu-family-care-leave`
  - `gifu-fire-alarm`
  - `gifu-maternity-dental`
  - `gifu-shop-renovation`
  - `gifu-tradition-craft`
  - `gifu-twin-support`
  - `gifu-youth-rent`

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
