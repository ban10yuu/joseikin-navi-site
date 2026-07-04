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
- Last completed grant-data commit before Batch 169: `d291f7d 石巻市残り5件を公式補正`
- Do not push or publish without explicit user confirmation.
- Preserve unrelated dirty Pinterest/UI work:
  - `package.json`
  - `src/app/sitemap.ts`
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/components/JsonLd.tsx`
  - untracked Pinterest/design/demo files.

## Last verified grant-data state

- Batch 169 completed in progress:

- 石巻市1件・仙台市4件を公式補正
- 対象: `ishinomaki-water-reduction` / `sendai-daycare-support` / `sendai-energy-support` / `sendai-migration-support` / `sendai-senior-dental`
- `ishinomaki-water-reduction` は生活困窮者向け水道料金減免として確認できず、石巻地方広域水道企業団の水道料金等案内と水道加入金免除規定を出典に掲載停止へ補正。
- `sendai-daycare-support` は施設等利用給付（認可外保育施設等・償還払い）へ補正。
- `sendai-energy-support` は令和7年度住民税非課税世帯緊急支援事業の受付終了扱いへ補正。
- `sendai-migration-support` は仙台市移住支援事業へ補正。
- `sendai-senior-dental` は令和8年度おとなのオーラルケア健康診査へ補正。
- 宮城県 raw gap: `27 -> 22`
- 全国 raw gap: `2173 -> 2168`
- `npx eslint src/data/grants/verified-local-misc-2026.ts`: errors 0
- `git diff --check`: 問題なし
- 採用sourceUrls 9件はすべてHTTP 200
- `npm run audit:coverage`: failures 0
- `npm run build`: 成功。静的ページ5,797件生成、`/grant/[slug]` は2,925件相当。

## Next safe work item

Continue with the next raw gap batch:

```bash
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

Expected first batch:

- 仙台市raw gap:
  - `sendai-startup-support`
  - `sendai-telework-bonus`
- その後の宮城県raw gap:
  - `osaki-birth-bonus`
  - `osaki-bousai-equipment`
  - `osaki-childcare-subsidy`
  - `osaki-housing-reform`
  - 以降は `node scripts/audit-raw-verified-gaps.mjs --limit 25` で確認

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
