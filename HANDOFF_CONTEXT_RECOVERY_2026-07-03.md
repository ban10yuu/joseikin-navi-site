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
- Last completed grant-data commit before Batch 154: `2669a00 多治見市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 154 completed in progress:

- 大垣市19件を公式補正し、大垣市 raw gap 0件を達成
- 対象: `ogaki-birth-bonus` / `ogaki-childcare-subsidy` / `ogaki-dental-checkup-child` / `ogaki-disaster-stockpile` / `ogaki-elderly-support` / `ogaki-family-care-leave` / `ogaki-fire-alarm` / `ogaki-housing-purchase` / `ogaki-housing-seismic` / `ogaki-infertility` / `ogaki-maternity-dental` / `ogaki-nursing-equipment` / `ogaki-scholarship` / `ogaki-seismic-diagnosis` / `ogaki-shop-renovation` / `ogaki-sme-support` / `ogaki-tradition-craft` / `ogaki-twin-support` / `ogaki-youth-rent`
- `ogaki-birth-bonus` は妊婦のための支援給付へ補正。
- `ogaki-childcare-subsidy` は子ども医療費助成制度へ補正。
- `ogaki-dental-checkup-child` は令和8年度フッ化物塗布へ補正。
- `ogaki-disaster-stockpile` は個人世帯向け補助として公式確認できないため、自主防災組織支援へ補正し通常一覧から除外。
- `ogaki-elderly-support` はひとり暮らし高齢者等見守りほっとライン事業へ補正。
- `ogaki-family-care-leave` / `ogaki-nursing-equipment` は家族介護慰労事業（紙おむつ等の給付）へ補正。
- `ogaki-fire-alarm` は福祉用具給付事業へ補正。
- `ogaki-housing-purchase` / `ogaki-youth-rent` は子育て世代等住宅取得支援事業利子補給金へ補正。
- `ogaki-housing-seismic` / `ogaki-seismic-diagnosis` は令和8年度耐震補助制度へ補正。
- `ogaki-infertility` は岐阜県特定不妊治療助成事業の案内へ補正。
- `ogaki-maternity-dental` は令和8年度マタニティ歯科健康診査へ補正。
- `ogaki-shop-renovation` はリフレッシュサポート事業補助金へ補正。
- `ogaki-sme-support` は中小企業者等物価高騰対策支援事業補助金へ補正。
- `ogaki-tradition-craft` は現行個人助成として公式確認できないため通常一覧から除外。
- `ogaki-twin-support` は多胎妊婦の妊婦健康診査追加助成へ補正。
- 岐阜県 raw gap: `28 -> 9`
- 全国 raw gap: `2295 -> 2276`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 40件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,599件生成、`/grant/[slug]` は2,818件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 中津川市9件:
  - `nakatsugawa-dental-checkup-child`
  - `nakatsugawa-disaster-stockpile`
  - `nakatsugawa-family-care-leave`
  - `nakatsugawa-fire-alarm`
  - `nakatsugawa-maternity-dental`
  - `nakatsugawa-shop-renovation`
  - `nakatsugawa-tradition-craft`
  - `nakatsugawa-twin-support`
  - `nakatsugawa-youth-rent`

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
