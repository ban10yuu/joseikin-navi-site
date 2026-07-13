# Lighthouse計測

計測日：2026年7月13日

本番ビルドをローカル起動し、Lighthouseのモバイル条件でトップページを3回計測しました。以下は中央値です。

| 指標 | 結果 |
|---|---:|
| Performance | 97 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | 2.6秒 |
| CLS | 0 |
| Total Blocking Time | 10ms |
| Speed Index | 0.9秒 |
| サーバー応答 | 20ms |

LCPは目標の2.5秒を0.1秒上回りました。3回のうち1回はLCP 9.1秒、Performance 75の外れ値になったため、実環境ではSearch ConsoleのCore Web VitalsとGA4などの実測値を継続して確認してください。INPは操作を伴う実利用データが必要なため、この計測では確定していません。
