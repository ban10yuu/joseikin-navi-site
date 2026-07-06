# 助成金ナビ 自走運用ルール

このファイルは、Codex がユーザーに確認を求めずに助成金公式確認を順次進めるための運用ルールです。

## 基本方針

- 永続 goal は使わない。
- 作業開始時は `CONTEXT_START_HERE.md` と `tasks/progress-checklist.md` だけ読む。
- `SAFE_CONTINUATION_PLAN.md`、`tasks/todo.md`、長い handoff は全文読まない。
- 1回の作業は1自治体、または2〜10件程度の小バッチにする。
- 公式一次情報で確認できない制度は、無理に公開せず、掲載停止または公式確認できる制度へ補正する。
- push / deploy / publish は明示確認があるまで実行しない。

## 毎回の開始手順

```bash
cd /Users/banseiyuuji/joseikin-navi-site
git status --short --branch
node scripts/generate-progress-checklist.mjs
sed -n '1,80p' tasks/progress-checklist.md
```

## 次バッチの選び方

1. `tasks/progress-checklist.md` の「次に進める候補」を見る。
2. 保留理由がある候補は飛ばし、次の自治体・団体を選ぶ。
3. 同じ自治体内で raw gap が10件を超える場合は、先頭5〜10件だけ進める。
4. 県の残り件数が少ない場合は、県完了までまとめる。

## 毎バッチの検証

```bash
npx eslint src/data/grants/verified-local-misc-2026.ts
git diff --check -- src/data/grants/verified-local-misc-2026.ts
node scripts/check-grant-source-urls.mjs --concurrency 2 --slug <slug...>
node scripts/audit-raw-verified-gaps.mjs --limit 25
npm run audit:coverage
node scripts/generate-progress-checklist.mjs
```

`npm run build` は毎回ではなく、県完了時、20〜50件程度の節目、公開前に実行する。

## 毎バッチの記録

- `tasks/progress-checklist.md` と `tasks/progress-checklist.csv` はスクリプトで再生成する。
- `HANDOFF_CONTEXT_RECOVERY_2026-07-03.md` は末尾に短く追記する。
- `tasks/todo.md` は必要最小限だけ追記する。全文は読まない。
- 対象ファイルだけを `git add` してコミットする。

## 現在の進め方

2026-07-06時点では、綾部市2件は公式確認が弱いため保留し、広島県の広島市から順次進める。
