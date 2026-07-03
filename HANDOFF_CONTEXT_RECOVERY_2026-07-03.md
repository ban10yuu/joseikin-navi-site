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
- Last completed grant-data commit before this recovery update: `1af7ef5 関市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

Batch 149 completed in progress:

- 岐阜県庁3件を公式補正し、岐阜県庁 raw gap 0件を達成
- 対象: `gifu-child-support` / `gifu-forestry-support` / `gifu-housing-seismic`
- `gifu-child-support` は岐阜県福祉医療費助成制度として補正。県が市町村の医療費助成へ補助する制度で、県制度上の乳幼児は小学校就学前、所得制限なし。
- `gifu-forestry-support` は岐阜県緑の青年就業準備給付金として補正。年上限125万円、最大2年間、総額最大250万円。
- `gifu-housing-seismic` は既存の `gifu-wooden-house-earthquake-retrofit-2026` と同一制度のため重複停止。
- 岐阜県 raw gap: `67 -> 64`
- 全国 raw gap: `2334 -> 2331`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 6件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,503件生成、`/grant/[slug]` は2,764件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 岐阜市9件:

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
