# Tier5: 人口5万〜10万の市

## 対象自治体（60市）

| # | 市名 | prefecture | slug prefix |
|---|------|-----------|-------------|
| 1 | 北見市 | 北海道 | kitami- |
| 2 | 江別市 | 北海道 | ebetsu- |
| 3 | 小樽市 | 北海道 | otaru- |
| 4 | 千歳市 | 北海道 | chitose- |
| 5 | 弘前市 | 青森県 | hirosaki- |
| 6 | 花巻市 | 岩手県 | hanamaki- |
| 7 | 大崎市 | 宮城県 | osaki- |
| 8 | 名取市 | 宮城県 | natori- |
| 9 | 大仙市 | 秋田県 | daisen- |
| 10 | 酒田市 | 山形県 | sakata- |
| 11 | 会津若松市 | 福島県 | aizu- |
| 12 | 須賀川市 | 福島県 | sukagawa- |
| 13 | 土浦市 | 茨城県 | tsuchiura- |
| 14 | 古河市 | 茨城県 | koga- |
| 15 | 足利市 | 栃木県 | ashikaga- |
| 16 | 佐野市 | 栃木県 | sano- |
| 17 | 桐生市 | 群馬県 | kiryu- |
| 18 | 館林市 | 群馬県 | tatebayashi- |
| 19 | 秩父市 | 埼玉県 | chichibu- |
| 20 | 入間市 | 埼玉県 | iruma- |
| 21 | 朝霞市 | 埼玉県 | asaka- |
| 22 | 野田市 | 千葉県 | noda- |
| 23 | 成田市 | 千葉県 | narita- |
| 24 | 我孫子市 | 千葉県 | abiko- |
| 25 | 青梅市 | 東京都 | ome- |
| 26 | 昭島市 | 東京都 | akishima- |
| 27 | 小平市 | 東京都 | kodaira- |
| 28 | 日野市 | 東京都 | hino- |
| 29 | 東村山市 | 東京都 | higashimurayama- |
| 30 | 国分寺市 | 東京都 | kokubunji- |
| 31 | 小田原市 | 神奈川県 | odawara- |
| 32 | 秦野市 | 神奈川県 | hadano- |
| 33 | 海老名市 | 神奈川県 | ebina- |
| 34 | 三条市 | 新潟県 | sanjo- |
| 35 | 燕市 | 新潟県 | tsubame- |
| 36 | 高岡市 | 富山県 | takaoka- |
| 37 | 白山市 | 石川県 | hakusan- |
| 38 | 上田市 | 長野県 | ueda- |
| 39 | 飯田市 | 長野県 | iida- |
| 40 | 各務原市 | 岐阜県 | kakamigahara- |
| 41 | 沼津市 | 静岡県 | numazu- |
| 42 | 磐田市 | 静岡県 | iwata- |
| 43 | 春日井市 | 愛知県 | kasugai- |
| 44 | 安城市 | 愛知県 | anjo- |
| 45 | 伊勢市 | 三重県 | ise- |
| 46 | 彦根市 | 滋賀県 | hikone- |
| 47 | 宇治市 | 京都府 | uji- |
| 48 | 茨木市 | 大阪府 | ibaraki-city- |
| 49 | 池田市 | 大阪府 | ikeda- |
| 50 | 伊丹市 | 兵庫県 | itami- |
| 51 | 橿原市 | 奈良県 | kashihara- |
| 52 | 米子市 | 鳥取県 | yonago- |
| 53 | 出雲市 | 島根県 | izumo- |
| 54 | 丸亀市 | 香川県 | marugame- |
| 55 | 新居浜市 | 愛媛県 | niihama- |
| 56 | 唐津市 | 佐賀県 | karatsu- |
| 57 | 八代市 | 熊本県 | yatsushiro- |
| 58 | 中津市 | 大分県 | nakatsu- |
| 59 | 薩摩川内市 | 鹿児島県 | satsumasendai- |
| 60 | 浦添市 | 沖縄県 | urasoe- |

合計: 60市 × 3件 = **180件**

## バッチ分割（10ファイル）

| ファイル名 | export名 | 内容 | 件数 |
|-----------|----------|------|------|
| `city-batch26.ts` | `cityGrantsBatch26` | 1-6: 北見〜花巻 | 18件 |
| `city-batch27.ts` | `cityGrantsBatch27` | 7-12: 大崎〜須賀川 | 18件 |
| `city-batch28.ts` | `cityGrantsBatch28` | 13-18: 土浦〜館林 | 18件 |
| `city-batch29.ts` | `cityGrantsBatch29` | 19-24: 秩父〜我孫子 | 18件 |
| `city-batch30.ts` | `cityGrantsBatch30` | 25-30: 青梅〜国分寺 | 18件 |
| `city-batch31.ts` | `cityGrantsBatch31` | 31-36: 小田原〜高岡 | 18件 |
| `city-batch32.ts` | `cityGrantsBatch32` | 37-42: 白山〜磐田 | 18件 |
| `city-batch33.ts` | `cityGrantsBatch33` | 43-48: 春日井〜茨木 | 18件 |
| `city-batch34.ts` | `cityGrantsBatch34` | 49-54: 池田〜出雲 | 18件 |
| `city-batch35.ts` | `cityGrantsBatch35` | 55-60: 新居浜〜浦添 | 18件 |

## データ仕様
tasks/tier1-plan.md 参照。type:'local', publishedAt:'2026-03-12', sections:3, childcare必須。
git操作・grants.ts編集はしないこと。
