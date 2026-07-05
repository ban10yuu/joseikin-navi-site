# CONTEXT_START_HERE

このファイルだけを最初に読む。長い引き継ぎファイルは丸ごと読まない。

## なぜ止まっていたか

Codex のモデルコンテキスト上限に到達していた。主因は以下。

- 永続 goal が active のまま、累計 2,500万 token 以上の履歴を背負っていた。
- `SAFE_CONTINUATION_PLAN.md` が 6,000行超、`tasks/todo.md` が 900行前後あり、再開時に読むと重い。
- 過去ログ、公式調査結果、広い `rg` / `sed` 出力、Web検索結果を同じスレッドに積み続けていた。

2026-07-05 に巨大 goal は blocked にして、自動継続ループを止めた。

## 再開時に読むもの

```bash
cd /Users/banseiyuuji/joseikin-navi-site
git status --short --branch
tail -n 120 HANDOFF_CONTEXT_RECOVERY_2026-07-03.md
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

## 読んではいけないもの

以下は丸ごと読まない。

- `SAFE_CONTINUATION_PLAN.md`
- `tasks/todo.md`
- `HANDOFF_SAFE_CONTINUATION_2026-07-03.md`
- `HANDOFF_CONTEXT_RECOVERY_2026-07-03.md`

必要なときだけ `tail` または狭い `rg` で読む。

## 現在の安全な作業単位

1回の作業は、自治体または都道府県の小バッチに限定する。

- 目安: 2〜10件
- 各バッチで `eslint`、`git diff --check`、URL監査、raw gap監査、coverage監査を実行
- `npm run build` は県完了時、20〜50件節目、公開前だけでよい
- push / deploy / publish は明示確認があるまで行わない

## 直近の次作業

最新状態は必ずコマンドで再計算する。2026-07-05時点の次候補は広島県の raw gap。

```bash
node scripts/audit-raw-verified-gaps.mjs --prefecture 広島県 --limit 30
node scripts/audit-raw-verified-gaps.mjs --limit 25
```

先頭候補として確認済みだったもの:

- `hiroshima-education-ict`
- `hiroshima-migration-family`
- その後に広島市候補が続く

## 既存 dirty 差分

Pinterest / UI 系の未コミット差分は別件。助成金データ作業では触らない。

```bash
git status --short --branch
```

で確認し、助成金データ作業では対象ファイルだけを stage する。
