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
- Last completed grant-data commit before Batch 157: `aee8e03 延岡市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 157 completed in progress:

- 宮崎県庁1件と宮崎市9件を公式補正
- 対象: `miyazaki-mango-farming` / `miyazaki-block-wall-removal` / `miyazaki-child-medical-aid` / `miyazaki-city-birth-bonus` / `miyazaki-city-bousai-equipment` / `miyazaki-city-childcare-subsidy` / `miyazaki-city-elderly-support` / `miyazaki-city-housing-purchase` / `miyazaki-city-infertility` / `miyazaki-city-nursing-equipment`
- `miyazaki-mango-farming` はマンゴー限定補助ではなく新規就農者育成総合対策（就農準備資金）へ補正。
- `miyazaki-block-wall-removal` は危険ブロック塀等対策事業補助金へ補正し、R8受付終了扱い。
- `miyazaki-child-medical-aid` は子ども医療費助成へ補正。
- `miyazaki-city-birth-bonus` は出産・子育て応援給付金/妊婦支援給付金へ補正。
- `miyazaki-city-bousai-equipment` は自主防災組織活動支援事業補助金へ補正。
- `miyazaki-city-childcare-subsidy` は第2子保育料の負担軽減へ補正。
- `miyazaki-city-elderly-support` は在宅福祉サービスへ補正。
- `miyazaki-city-housing-purchase` は住宅購入補助ではなく移住支援給付金制度へ補正。
- `miyazaki-city-infertility` は不妊治療費助成事業へ補正。
- `miyazaki-city-nursing-equipment` は介護用品支給へ補正。
- 宮崎県 raw gap: `63 -> 53`
- 全国 raw gap: `2258 -> 2248`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 20件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,649件生成、`/grant/[slug]` は2,845件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 宮崎市奨学金系2件とテレワーク1件:
  - `miyazaki-city-scholarship`
  - `miyazaki-city-scholarship-v2`
  - `miyazaki-city-telework-bonus`
- その後、宮崎県・宮崎市残り6件:
  - `miyazaki-elderly-taxi`
  - `miyazaki-juutaku-reform`
  - `miyazaki-scholarship-repayment`
  - `miyazaki-school-lunch-subsidy`
  - `miyazaki-startup-support`
  - `miyazaki-water-saving`

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
