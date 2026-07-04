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
- Last completed grant-data commit: `e413f57 名取市5件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 170 completed in progress:

- 仙台市2件・大崎市3件を公式補正
- 対象: `sendai-startup-support` / `sendai-telework-bonus` / `osaki-birth-bonus` / `osaki-bousai-equipment` / `osaki-childcare-subsidy`
- `sendai-startup-support` は特定創業支援等事業の支援証明書へ補正。
- `sendai-telework-bonus` は仙台市業務効率化支援事業補助金（業務効率化サポート枠）へ補正。
- `osaki-birth-bonus` は妊婦のための支援給付金へ補正。
- `osaki-bousai-equipment` は令和8年度エコ改善推進事業補助金（蓄電池・V2H等）へ補正。
- `osaki-childcare-subsidy` は物価高対応子育て応援手当の受付終了扱いへ補正。
- 宮城県 raw gap: `22 -> 17`
- 全国 raw gap: `2168 -> 2163`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 8件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,805件生成、`/grant/[slug]` は2,930件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 大崎市raw gap:
  - `osaki-housing-reform`
  - `osaki-newlywed-rent`
  - `osaki-nursing-home-reform`
  - `osaki-school-lunch`
  - `osaki-startup-support`
- 以降は `node scripts/audit-raw-verified-gaps.mjs --limit 25` で確認

## Current in-progress update

- Batch 172 completed:
- 対象: `osaki-telework-bonus` / `natori-birth-bonus` / `natori-childcare-subsidy` / `natori-education-support` / `natori-elderly-support`
- Batch 173 completed:
- 対象: `natori-housing-purchase` / `natori-infertility` / `natori-nursing-equipment` / `natori-scholarship` / `natori-seismic-diagnosis`
- `natori-housing-purchase` は新婚世帯等マイホーム応援事業補助金へ補正。
- `natori-infertility` は不妊治療費助成事業（先進医療）へ補正。
- `natori-nursing-equipment` は在宅ねたきり老人等紙おむつ支給事業へ補正。
- `natori-scholarship` は母子父子寡婦福祉資金（修学資金等）の案内へ補正。
- `natori-seismic-diagnosis` は木造住宅耐震診断助成事業へ補正。
- 宮城県 raw gap: `7 -> 2`
- 全国 raw gap: `2153 -> 2148`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check -- src/data/grants/verified-local-misc-2026.ts`: 問題なし
- 採用sourceUrls 8件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,825件生成、`/grant/[slug]` は2,945件相当。
- Next candidates after commit: `natori-sme-support`, `natori-vaccination-support`, then 京都府綾部市raw gap

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
