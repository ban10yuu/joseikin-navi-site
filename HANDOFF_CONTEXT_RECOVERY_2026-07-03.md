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
- Last completed grant-data commit before Batch 156: `07588c5 中津川市9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 156 completed in progress:

- 延岡市9件を公式補正し、延岡市 raw gap 0件を達成
- 対象: `nobeoka-block-wall-removal` / `nobeoka-child-medical-aid` / `nobeoka-elderly-taxi` / `nobeoka-health-checkup-subsidy` / `nobeoka-juutaku-reform` / `nobeoka-scholarship-repayment` / `nobeoka-school-lunch-subsidy` / `nobeoka-startup-support` / `nobeoka-water-saving`
- `nobeoka-block-wall-removal` はブロック塀等地震対策支援事業へ補正。
- `nobeoka-child-medical-aid` は子ども医療費助成制度へ補正。
- `nobeoka-elderly-taxi` は運転免許証自主返納支援制度のタクシー利用券等へ補正。
- `nobeoka-health-checkup-subsidy` は人間ドック等助成事業へ補正。3,000円。
- `nobeoka-juutaku-reform` は住まい取得・定住促進事業補助金へ補正。
- `nobeoka-scholarship-repayment` は奨学金返還支援による地元企業人材確保支援補助金へ補正。
- `nobeoka-school-lunch-subsidy` は私立学校等給食等緊急支援金へ補正し、受付終了扱い。
- `nobeoka-startup-support` は引継ぎ事業スタートアップ支援補助金へ補正。
- `nobeoka-water-saving` は浄化槽設置補助制度へ補正。
- 宮崎県 raw gap: `72 -> 63`
- 全国 raw gap: `2267 -> 2258`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 18件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,631件生成、`/grant/[slug]` は2,835件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 宮崎県庁1件:
  - `miyazaki-mango-farming`
- その後、宮崎市9件:
  - `miyazaki-block-wall-removal`
  - `miyazaki-child-medical-aid`
  - `miyazaki-city-birth-bonus`
  - `miyazaki-city-bousai-equipment`
  - `miyazaki-city-childcare-subsidy`
  - `miyazaki-city-elderly-support`
  - `miyazaki-city-housing-purchase`
  - `miyazaki-city-infertility`
  - `miyazaki-city-nursing-equipment`

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
