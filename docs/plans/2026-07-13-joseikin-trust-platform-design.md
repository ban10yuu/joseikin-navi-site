# 助成金ナビ 信頼性・検索基盤再設計

作成日: 2026-07-13
対象: `joseikin-navi-site`

## 1. 目的

助成金ナビを、行政・公的支援制度を探す利用者が、誤認なく公式情報へ到達できる情報サイトへ改修する。既存の検索流入と約1万件のデータを保全しながら、表示件数、受付状況、制度種別、対象者、関連制度、広告、確認方法を一貫したルールで扱う。

成功条件は、ユーザー指定のP0・P1・P2および完了条件を満たし、`lint`、`typecheck`、単体テスト、E2E、production buildが成功することである。

## 2. 現状と主因

- 旧データは単一カテゴリ、自由記述の申請期間、URLと確認日を中心とする`Grant`型で管理されている。
- `verifiedAt`または`sourceUrls`があるだけで、人手確認済みに相当する表示になる。
- 公式URLが存在しても、制度名・主体・内容・期限の一致までは型で表現できない。
- 内部監査用の`sourceNote`や補正理由が、検索本文や公開詳細へ混入する。
- 一覧、カテゴリ、トップが別々に件数や文言を組み立て、古い診断導線も残る。
- 広告スロット未設定でも広告ラベルと予約領域が表示される。
- ASP、計測、メール、運営者情報、サイトURLが複数ファイルへ直接記述されている。
- `output: 'export'`のため、任意検索条件をサーバー側で処理する構成に制約がある。
- 約1万件を一括変換すると、既存URLと進行中の全国棚卸しを壊す危険が高い。

## 3. 採用方式

既存データを破壊せず、公開用の正規化レイヤーを追加する。

```text
既存 Grant データ
    ↓ 読み取り専用
normalizeGrant()
    ↓
NormalizedGrant
    ├─ 品質判定
    ├─ index/noindex判定
    ├─ 受付状況判定
    ├─ 関連制度スコア
    ├─ 公開用本文の安全化
    └─ 検索・UI・サイトマップ
```

元データを公開時に直接書き換えない。明示的に登録された新フィールドを最優先し、既存フィールドから安全に導ける値だけを補完する。導けない値は`unknown`または空値とし、推測表示しない。

## 4. ドメインモデル

公開用モデル`NormalizedGrant`は、ユーザー指定のデータ項目を持つ。移行期間中は既存フィールドと新フィールドを共存させる。

主要enum:

- `SupportType`: grant, subsidy, benefit, allowance, loan, scholarshipLoan, reduction, taxCredit, insuranceBenefit, discount, voucher, inKind, other, unknown
- `Audience`: individual, family, student, senior, personWithDisability, jobSeeker, soleProprietor, business, nonprofit, researcher, localOrganization, other
- `Purpose`: childcare, housing, medical, education, employment, startup, businessGrowth, digitalTransformation, energySaving, wageIncrease, welfare, disaster, livingSupport, regionalRevitalization, research, other
- `GrantStatus`: scheduled, open, closingSoon, closed, suspended, unknown
- `VerificationMethod`: automated, human, mixed, unknown
- `ContentStatus`: published, needsReview, duplicate, unverified, archived
- `IndexStatus`: index, noindex

### 4.1 判定原則

- URLの存在だけでは人手確認にしない。
- `humanReviewedAt`があるレコードだけ「人手確認済み」と表示する。
- 既存の`verifiedAt`は原則「自動照合日」へ移行する。
- `closingSoon`は、受付中であることが明示された場合だけ使用する。
- 日付だけ確認できる場合は、期限前でも`unknown`を許容する。
- 貸付・奨学金貸付には返済注意を必ず表示する。
- 公式資料にないセクションは非表示にする。
- 内部監査語を含む文章は公開用レンダリングから除外し、監査レポートだけに残す。

## 5. 検索・ページ生成

Next.js App Routerを維持し、一覧・検索はServer ComponentでURLクエリを処理する。初期表示は24件とし、ページネーションする。詳細ページは既存URLを維持し、静的生成またはISRを利用する。

現在の完全静的書き出しは、サーバー側検索の検証後にハイブリッド構成へ移行する。Vercelの関数サイズやビルド時間が許容できない場合は、ビルド時に軽量検索インデックスを生成し、データ本体と分離する。

検索条件はURLへ反映し、クエリ付き検索結果は`noindex,follow`とする。ブラウザへ全件データを渡さない。

## 6. URL・SEO

- `NEXT_PUBLIC_SITE_URL`を唯一の本番URL設定とする。
- プレビュー環境は`noindex`。
- canonical、構造化データ、サイトマップは共通URLヘルパーを使う。
- サイトマップは`indexStatus=index`のページだけを含める。
- 運営者情報が未設定なら、架空のOrganizationを出力しない。
- 制度実体が変わった旧URLは、`src/data/redirects.ts`またはJSONで一元管理し301転送する。
- 最初の対象は`kushiro-elderly-taxi`と`kagoshima-elderly-taxi`。公式情報と既存命名規則を確認して新slugを確定する。

## 7. UI・UX

プロジェクトの`DESIGN.md`を継承し、モバイルファーストで共通ヘッダー、フッター、パンくず、カード、公式CTA、広告枠を使用する。

トップページは次の順序とする。

1. 価値提案と3条件検索
2. 個人・家族／事業者・団体の入口
3. 目的
4. 地域
5. 締切が近い制度
6. 最近更新された制度
7. 申請前確認
8. 情報確認方法
9. 新着メール

汎用的なAI画像や装飾目的の画像は使わない。必要な視覚補助は、対象・地域・目的・確認手順を理解するための機能的なアイコンまたは図解に限定する。

詳細ページでは、公式CTAを広告より先に置く。終了制度では「次回募集・後継制度を公式サイトで確認」とする。関連制度は対象者、目的、地域、制度種別、受付状況、公式情報の有無でスコアリングし、閾値未満は表示しない。

## 8. 広告・アフィリエイト

広告、ASP、メール、計測は`site-config`へ集約する。

- AdSenseスロット未設定時は、ラベル・余白・DOMを出さない。
- アフィリエイト案件はすべて`enabled=false`から開始する。
- 案件URL、期間、対象、intent、許可ページ、禁止目的が揃わなければ表示しない。
- センシティブ目的では`monetizationAllowed=false`を既定値とする。
- PR枠は公式CTAと異なる色・位置・文言を使い、`rel="sponsored nofollow noopener noreferrer"`を付ける。
- 実利用が確認できないASP名はプライバシーポリシーへ出さない。
- Pinterest関連の既存作業は保全するが、主要ナビゲーションへ混在させるかは情報設計に沿って見直す。

## 9. メール登録

現時点では診断結果を提供していないため、B案を採用する。

- ページ名を「新着・更新された支援制度をメールで受け取る」へ変更する。
- 世帯年収と職業を収集しない。
- メールアドレスと任意の地域だけを扱う。
- 配信事業者、送信頻度、解除リンク、問い合わせ先を設定できない状態ではフォームを無効化または非表示にする。
- 有効化時は同意日時、同意文バージョン、登録元を送信できる構造にする。
- 個人情報をAnalyticsイベントへ送らない。

## 10. 品質監査

`npm run audit:content`を追加し、JSON、CSV、Markdownを生成する。監査は元データを変更しない。

重大エラー:

- index対象なのに公式URLがない
- 制度名または実施機関がない
- 期限切れなのにopen/closingSoon
- 貸付なのに返済注意が出ない
- 禁止文言または内部監査文が公開対象に残る
- リダイレクト循環
- PR表示要件違反

警告:

- 確認日なし
- verificationMethod不明
- 重複URL、重複タイトル、本文重複
- 関連制度スコア不足
- metadataの重複または長さ超過

## 11. テスト

単体テストはNode testを継続し、純粋関数へ寄せる。E2Eは既存依存を確認し、Playwright導入が必要なら最小構成で追加する。

必須検証:

- status、期限、貸付表示、件数、カテゴリ、関連制度、アフィリエイト、noindex、canonical、redirect
- トップ検索、対象切替、都道府県、解除、詳細、公式リンク、終了CTA、PR非表示、メール同意、モバイルメニュー、キーボード
- 320/375/390/768/1024/1440pxで横スクロールなし
- lint、typecheck、unit、E2E、build、禁止語、内部リンク、空広告、重複metadata

## 12. 段階導入

### P0

共通設定、正規化モデル、確認区分、件数、禁止文言、内部ログ非公開、status、貸付、共通テンプレート、広告、プライバシー、メール、リダイレクトを修正する。

### P1

トップ、検索一覧、詳細、カテゴリ、地域、関連制度、ガイド、FAQ、モバイル、アクセシビリティを改修する。

### P2

アフィリエイト管理、イベント計測、監査レポート、サイトマップ、構造化データ、パフォーマンス、E2EとCI相当の品質ゲートを整備する。

## 13. 境界

常に行う:

- 既存URLと既存データを保全する。
- 未確認値を空またはunknownで扱う。
- 公開表示と内部監査を分離する。
- 小さなテスト可能単位でコミットする。

公開しない:

- 推測した運営者情報、ASP、料金、採択率、口コミ、ランキング。
- 人手確認の記録がない「人手確認済み」。
- 公式資料にない条件、書類、申請方法。
- TODO、仮、ダミー広告、サンプル案件。

## 14. 未確定値の扱い

以下は環境変数または設定値が入るまで非表示・無効とする。

- 独自ドメイン
- 運営者名と連絡先
- メール配信事業者とフォームURL
- ASP案件
- AdSenseスロット
- 人手確認日
