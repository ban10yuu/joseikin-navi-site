import json
import os
from pathlib import Path
from playwright.sync_api import sync_playwright
from axe_playwright_python.sync_playwright import Axe

BASE_URL = os.environ.get('E2E_BASE_URL', 'http://127.0.0.1:3000').rstrip('/')
CHROME_PATH = os.environ.get('E2E_CHROME_PATH', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
REPORT_DIR = Path('reports/e2e')
REPORT_DIR.mkdir(parents=True, exist_ok=True)
failures = []
results = []
axe_results = {}

def check(condition, message):
    if not condition:
        failures.append(message)

def open_page(browser, path, width=1280, height=900):
    page = browser.new_page(viewport={'width': width, 'height': height})
    console_errors = []
    page.on('console', lambda message: console_errors.append(message.text) if message.type == 'error' else None)
    response = page.goto(f'{BASE_URL}{path}', wait_until='networkidle')
    check(response is not None and response.status < 400, f'{path}: HTTPエラー')
    results.append({'path': path, 'width': width, 'status': response.status if response else None})
    return page, console_errors

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True, executable_path=CHROME_PATH)

    # 主要URLとフォーム、メニュー、URLクエリの動作
    home, home_errors = open_page(browser, '/', 390, 844)
    home.screenshot(path=str(REPORT_DIR / 'home-390.png'), full_page=True)
    home.get_by_role('button', name='事業者・団体向け').click()
    check(home.locator('input[name="audience"]').get_attribute('value') == 'business', 'トップ: 対象切替が検索条件へ反映されません')
    home.get_by_role('button', name='メニューを開く').click()
    check(home.get_by_role('navigation', name='モバイルメニュー').is_visible(), 'モバイルメニューが開きません')
    home.keyboard.press('Escape')
    check(home.get_by_role('button', name='メニューを開く').evaluate('(element) => document.activeElement === element'), 'Escape後にメニューボタンへフォーカスが戻りません')
    home.locator('#home-grant-prefecture').select_option('東京都')
    home.locator('#home-grant-query').fill('子育て')
    home.get_by_role('button', name='この条件で制度を探す').click()
    home.wait_for_load_state('networkidle')
    check('/grants/' in home.url and 'pref=' in home.url and 'q=' in home.url, 'トップ検索: URLへ条件が反映されません')
    check(len(home_errors) == 0, f'トップ: console error {home_errors}')
    home.close()

    grants, grant_errors = open_page(browser, '/grants/?q=子育て&audience=individual&pref=東京都', 390, 844)
    grants.screenshot(path=str(REPORT_DIR / 'grants-390.png'), full_page=True)
    check(grants.locator('.grant-card').count() <= 24, '検索一覧: 1ページに24件を超えて表示しています')
    check(grants.locator('meta[name="robots"]').get_attribute('content') and 'noindex' in grants.locator('meta[name="robots"]').get_attribute('content'), '検索条件付きURLがnoindexではありません')
    check(grants.get_by_text('選択中の条件').is_visible(), '検索一覧: 選択中の条件が表示されません')
    check(len(grant_errors) == 0, f'検索一覧: console error {grant_errors}')
    grants.close()

    focused_search, _ = open_page(browser, '/grants/?focus=search', 390, 844)
    check(focused_search.locator('details').first.get_attribute('open') is not None, 'モバイル検索アイコンの遷移先で検索条件が開きません')
    focused_search.close()

    municipality, _ = open_page(browser, '/grants/?municipality=横浜市', 390, 844)
    check(municipality.locator('.grant-card').count() > 0, '市区町村を指定すると常に0件になります')
    municipality.close()

    unverified, _ = open_page(browser, '/grant/chiba-migration-support/', 390, 844)
    check('noindex' in (unverified.locator('meta[name="robots"]').get_attribute('content') or ''), '公式リンクなし制度がnoindexではありません')
    check('公式情報の確認先は未登録' not in (unverified.locator('meta[name="description"]').get_attribute('content') or ''), '補助出典URLがある制度を確認先未登録と表示しています')
    check(unverified.locator('.grant-source-links a').count() > 0, '補助出典URLがある制度に公式確認リンクが表示されません')
    check(bool(unverified.locator('.grant-mobile-cta a').get_attribute('href')), '補助出典URLだけの制度で固定CTAが空リンクになっています')
    unverified.close()

    redirect, _ = open_page(browser, '/grant/kushiro-elderly-taxi/', 1280, 900)
    check('/grant/kushiro-elderly-outing-bus/' in redirect.url, '釧路市の旧URLが新URLへ転送されません')
    redirect.close()
    redirect, _ = open_page(browser, '/grant/kagoshima-elderly-taxi/', 1280, 900)
    check('/grant/kagoshima-keiro-pass/' in redirect.url, '鹿児島市の旧URLが新URLへ転送されません')
    redirect.close()

    ended, ended_errors = open_page(browser, '/grant/sumitomo-zaidan-kankyou-josei/', 390, 844)
    check(ended.get_by_text('次回募集・後継制度を公式サイトで確認').count() >= 1, '終了制度のCTAが次回募集確認になっていません')
    check(ended.get_by_text('締切間近（受付中）').count() == 0, '終了制度に締切間近表示が残っています')
    check(ended.locator('[data-analytics-event="affiliate_impression"]').count() == 0, '案件未設定なのにPR枠が表示されています')
    official = ended.locator('.grant-official-primary')
    check(official.get_attribute('target') == '_blank' and 'noopener' in (official.get_attribute('rel') or ''), '公式CTAの外部リンク属性が不足しています')
    check(len(ended_errors) == 0, f'制度詳細: console error {ended_errors}')
    ended.close()

    subscribe, _ = open_page(browser, '/subscribe/', 390, 844)
    check(subscribe.locator('input[type="email"]').count() == 0, '配信先未設定なのにメールアドレス入力欄が表示されています')
    subscribe.close()

    # 320px〜1440pxで横スクロールがないこと
    for width in [320, 375, 390, 768, 1024, 1440]:
        for path in ['/', '/grants/', '/grant/sumitomo-zaidan-kankyou-josei/']:
            page, _ = open_page(browser, path, width, 900)
            overflow = page.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth')
            check(not overflow, f'{path} ({width}px): 横スクロールが発生しています')
            page.close()

    # WCAG A/AAの自動検査（critical/seriousを失敗扱い）
    for path in ['/', '/grants/', '/guide/', '/faq/', '/category/childcare/', '/grant/sumitomo-zaidan-kankyou-josei/']:
        page, _ = open_page(browser, path, 1280, 900)
        audit = Axe().run(page, options={'runOnly': {'type': 'tag', 'values': ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']}, 'resultTypes': ['violations']})
        axe_results[path] = audit.response
        major = [item for item in audit.response['violations'] if item.get('impact') in ('critical', 'serious')]
        check(len(major) == 0, f'{path}: axe重大違反 {[(item["id"], len(item["nodes"])) for item in major]}')
        page.close()

    browser.close()

(REPORT_DIR / 'axe-results.json').write_text(json.dumps(axe_results, ensure_ascii=False, indent=2))
summary = [
    '# E2E・アクセシビリティ検証', '',
    f'- 対象URL: {BASE_URL}',
    f'- ページ表示チェック: {len(results)}ケース',
    f'- axe対象: {len(axe_results)}ページ',
    f'- 失敗: {len(failures)}件', '',
]
if failures:
    summary += ['## 失敗', ''] + [f'- {failure}' for failure in failures]
else:
    summary += ['主要導線、320〜1440pxの横スクロール、終了CTA、PR非表示、重大なWCAG A/AA違反はいずれも問題ありませんでした。']
(REPORT_DIR / 'summary.md').write_text('\n'.join(summary), encoding='utf-8')
print('\n'.join(summary))
if failures:
    raise SystemExit(1)
