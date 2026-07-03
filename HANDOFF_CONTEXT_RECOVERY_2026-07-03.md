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
- Last completed grant-data commit before Batch 151: `d2cf499 岐阜市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 151 completed in progress:

- 岐阜市city-batch76由来9件を公式補正し、岐阜市 raw gap 0件を達成
- 対象: `gifu-dental-checkup-child` / `gifu-disaster-stockpile` / `gifu-family-care-leave` / `gifu-fire-alarm` / `gifu-maternity-dental` / `gifu-shop-renovation` / `gifu-tradition-craft` / `gifu-twin-support` / `gifu-youth-rent`
- `gifu-dental-checkup-child` は幼児歯科薬物（フッ化物）塗布へ補正。1歳以上の未就学児、無料、予約制。
- `gifu-maternity-dental` は妊婦歯科健康診査へ補正。妊婦対象、無料。
- `gifu-twin-support` は多胎児家庭のファミリー・サポート・センター利用料補助へ補正。30時間分まで。
- `gifu-family-care-leave` は家族介護用品支給事業へ補正。紙おむつ支給券を年3回配付。
- `gifu-shop-renovation` は中心市街地活性化空き店舗活用事業補助金へ補正。
- `gifu-disaster-stockpile` / `gifu-fire-alarm` / `gifu-tradition-craft` は現行個人向け補助として公式確認できないため通常一覧から除外。
- `gifu-youth-rent` は既存の `gifu-city-newlywed-rent` へ統合し重複停止。
- 岐阜県 raw gap: `55 -> 46`
- 全国 raw gap: `2322 -> 2313`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 14件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,531件生成、`/grant/[slug]` は2,782件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 高山市のcity-batch76由来9件:
  - `takayama-dental-checkup-child`
  - `takayama-disaster-stockpile`
  - `takayama-family-care-leave`
  - `takayama-fire-alarm`
  - `takayama-maternity-dental`
  - `takayama-shop-renovation`
  - `takayama-tradition-craft`
  - `takayama-twin-support`
  - `takayama-youth-rent`

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
