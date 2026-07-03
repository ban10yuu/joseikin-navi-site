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
- Last completed grant-data commit before Batch 152: `c4aa7c4 岐阜市残り9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 152 completed in progress:

- 高山市city-batch76由来9件を公式補正し、高山市 raw gap 0件を達成
- 対象: `takayama-dental-checkup-child` / `takayama-disaster-stockpile` / `takayama-family-care-leave` / `takayama-fire-alarm` / `takayama-maternity-dental` / `takayama-shop-renovation` / `takayama-tradition-craft` / `takayama-twin-support` / `takayama-youth-rent`
- `takayama-dental-checkup-child` は乳幼児健診・歯科相談へ補正。
- `takayama-disaster-stockpile` は家庭防災備蓄の購入補助として公式確認できないため通常一覧から除外。
- `takayama-family-care-leave` は介護用品購入助成・介護者慰労金へ補正。介護用品購入券は年額最大19.5万円、介護者慰労金は月1万円。
- `takayama-fire-alarm` は住宅用火災警報器の補助制度へ補正。高齢者・障がい者の日常生活用具給付として相談。
- `takayama-maternity-dental` は妊婦歯科検診受診票へ補正。
- `takayama-shop-renovation` は中心市街地活性化事業補助金へ補正。
- `takayama-tradition-craft` は伝統的工芸品産業技術修得補助金及び研修事業費補助金へ補正。研修者月額最大12万円、最長60カ月。
- `takayama-twin-support` はファミリーサポート事業へ補正。多胎児家庭限定現金給付は公式確認不可。
- `takayama-youth-rent` は若者地元就職支援補助金へ補正。賃貸契約時初期費用の2分の1以内、最大10万円。
- 岐阜県 raw gap: `46 -> 37`
- 全国 raw gap: `2313 -> 2304`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 11件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,553件生成、`/grant/[slug]` は2,791件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 多治見市のcity-batch76由来9件:
  - `tajimi-dental-checkup-child`
  - `tajimi-disaster-stockpile`
  - `tajimi-family-care-leave`
  - `tajimi-fire-alarm`
  - `tajimi-maternity-dental`
  - `tajimi-shop-renovation`
  - `tajimi-tradition-craft`
  - `tajimi-twin-support`
  - `tajimi-youth-rent`

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
