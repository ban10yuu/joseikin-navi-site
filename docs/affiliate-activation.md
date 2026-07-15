# A8.net案件の有効化手順

最終更新日: 2026-07-15

## 現在の状態

- A8.netアカウントへのログインを確認済みです。
- `https://shienseido-navi.jp/`を「支援制度ナビ」としてA8.netの副サイトへ登録済みです。
- freee会計とKANBEI SIGNは提携完了・広告リンク取得済みで、事業者向け制度のうちintentが一致するページだけで有効です。
- スマレジ・タイムカードは提携審査中です。`enabled=false`、`destinationUrl=null`のため公開画面へ表示されません。

## 有効化前に必要なA8.net側の作業

1. 候補案件の詳細画面で禁止事項、掲載条件、成果条件、提携審査の有無を確認します。
2. 広告掲載予定のサイトとして「支援制度ナビ」を選んで提携申請します。
3. 提携承認後、A8.netが発行するテキスト広告リンクを取得します。
4. コード側の公開条件を更新し、全監査が通った場合だけ有効化します。

パスワード、メディアID、広告リンク、トラッキングIDをこの文書や作業報告へ貼り付けないでください。広告リンクは公開に必要な設定ファイルだけで管理します。

## コード側の有効化

対象案件について次を更新します。

- `destinationUrl`: A8.netが発行したHTTPSの広告リンク
- `partnershipStatus`: `partnered`
- `enabled`: `true`
- `verifiedAt`: 条件とリンクを再確認した日
- `validFrom` / `validUntil`: A8.net上で掲載期間を確認できる場合のみ設定
- `trackingId`: 必要な場合だけ設定し、画面へ表示しない

更新後、次を実行します。

```bash
npm run audit:affiliates
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
npm run audit:build
```

重大エラーが1件でもある場合は公開しません。

## 表示ルール

- 制度詳細では最大1件です。
- audience、purpose、intentが一致する案件だけを表示します。
- 公式情報へのリンク、制度固有情報、関連制度、訂正依頼より後に表示します。
- 医療、福祉、災害、生活支援、障害対象のページには表示しません。
- ボタンに「申請する」「受給」など、制度手続きと誤認する文言を使いません。
- PRリンクには`rel="sponsored nofollow noopener noreferrer"`を付けます。

## 定期確認

公開案件は少なくとも月1回、A8.net上の提携状態、終了予定、広告リンク、広告主の条件変更を確認します。終了・停止・リンク不明を確認した時点で、先に`enabled=false`へ戻してから調査します。
