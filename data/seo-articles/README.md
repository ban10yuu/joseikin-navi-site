# 記事候補データ

このディレクトリは、公開前のSEO記事候補を管理します。

- `keyword-backlog.json`：調査済みキーワードの待ち行列
- `truth-packets.json`：公式出典と確認済み事実
- `drafts/`：記事ドラフト
- `pipeline-config.json`：合格点、修正回数、配点

空のバックログは正常な停止条件です。
記事候補は`src/app`へ自動コピーされず、サイトマップにも追加されません。

入力項目と運用手順は`docs/ai-slop-free-seo-pipeline.md`を参照してください。
