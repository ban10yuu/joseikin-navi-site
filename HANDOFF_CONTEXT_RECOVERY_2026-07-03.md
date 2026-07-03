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
- Last completed grant-data commit before Batch 153: `2871414 高山市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 153 completed in progress:

- 多治見市city-batch76由来9件を公式補正し、多治見市 raw gap 0件を達成
- 対象: `tajimi-dental-checkup-child` / `tajimi-disaster-stockpile` / `tajimi-family-care-leave` / `tajimi-fire-alarm` / `tajimi-maternity-dental` / `tajimi-shop-renovation` / `tajimi-tradition-craft` / `tajimi-twin-support` / `tajimi-youth-rent`
- `tajimi-dental-checkup-child` は虫歯予防教室・乳幼児健診の歯科健診へ補正。
- `tajimi-disaster-stockpile` は家庭防災備蓄品購入の個人補助として公式確認できないため、自主防災組織支援へ補正し通常一覧から除外。
- `tajimi-family-care-leave` は寝たきり高齢者等介護用品購入助成事業へ補正。月5,000円の購入券。
- `tajimi-fire-alarm` は住宅用火災警報器設置補助として公式確認できないため、設置義務案内として通常一覧から除外。
- `tajimi-maternity-dental` は妊産婦歯科健診助成として公式確認できないため、妊産婦健康診査へ補正。
- `tajimi-shop-renovation` は店舗と住宅との分離に関する改装費補助へ補正。上限100万円または3分の2。
- `tajimi-tradition-craft` はセラミックバレー振興補助金へ補正し、令和8年度募集終了扱い。
- `tajimi-twin-support` は多胎妊婦の妊婦健診2回追加助成へ補正。
- `tajimi-youth-rent` はちょうどいいまちたじみ定住応援補助金へ補正。最大20万円。
- 岐阜県 raw gap: `37 -> 28`
- 全国 raw gap: `2304 -> 2295`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 14件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,571件生成、`/grant/[slug]` は2,800件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 大垣市19件:
  - `ogaki-birth-bonus`
  - `ogaki-childcare-subsidy`
  - `ogaki-dental-checkup-child`
  - `ogaki-disaster-stockpile`
  - `ogaki-elderly-support`
  - `ogaki-family-care-leave`
  - `ogaki-fire-alarm`
  - `ogaki-housing-purchase`
  - `ogaki-housing-seismic`
  - `ogaki-infertility`
  - `ogaki-maternity-dental`
  - `ogaki-nursing-equipment`
  - `ogaki-scholarship`
  - `ogaki-seismic-diagnosis`
  - `ogaki-shop-renovation`
  - `ogaki-sme-support`
  - `ogaki-tradition-craft`
  - `ogaki-twin-support`
  - `ogaki-youth-rent`

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
