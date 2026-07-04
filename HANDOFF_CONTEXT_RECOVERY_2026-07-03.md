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
- Last completed grant-data commit before Batch 163: `10b166b 都城市残り9件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 163 completed in progress:

- 日向市8件を公式補正
- 対象: `hyuga-block-wall-removal` / `hyuga-child-medical-aid` / `hyuga-elderly-taxi` / `hyuga-health-checkup-subsidy` / `hyuga-juutaku-reform` / `hyuga-scholarship-repayment` / `hyuga-school-lunch-subsidy` / `hyuga-water-saving`
- `hyuga-block-wall-removal` はひゅうが住まいの耐震化等支援事業の危険ブロック塀等除却・建替えへ補正。
- `hyuga-child-medical-aid` は子ども医療費助成制度へ補正。
- `hyuga-elderly-taxi` は重度障がい者等タクシー券へ補正。
- `hyuga-health-checkup-subsidy` は令和8年度特定健診・長寿健診へ補正。
- `hyuga-juutaku-reform` はひゅうが住まいの耐震化等支援事業の耐震・耐風改修へ補正。
- `hyuga-scholarship-repayment` は若者定住促進奨学金返還支援補助金へ補正。
- `hyuga-school-lunch-subsidy` は令和8年度学校給食費の見直し・保護者負担軽減へ補正。
- `hyuga-water-saving` は令和8年度浄化槽設置整備事業補助金へ補正。
- 宮崎県 raw gap: `8 -> 0`
- 全国 raw gap: `2203 -> 2195`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 20件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,735件生成、`/grant/[slug]` は2,898件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 宮城県庁2件:
  - `miyagi-disaster-reconstruction`
  - `miyagi-employment-fishery`

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
