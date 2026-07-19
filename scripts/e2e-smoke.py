import json
import os
from pathlib import Path
from urllib.parse import urljoin, urlparse
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

def rectangles_overlap(left, right):
    return not (
        left['x'] + left['width'] <= right['x']
        or right['x'] + right['width'] <= left['x']
        or left['y'] + left['height'] <= right['y']
        or right['y'] + right['height'] <= left['y']
    )

def normalize_external_url(value):
    return urljoin('https://shienseido-navi.jp/', value or '')

def check_affiliate_image_ratio(page, image, message):
    try:
        image.scroll_into_view_if_needed(timeout=5000)
        image.wait_for(state='visible', timeout=5000)
        page.wait_for_function(
            '(element) => element.complete && element.naturalWidth > 0 && element.naturalHeight > 0',
            arg=image.element_handle(),
            timeout=5000,
        )
        image_box = image.bounding_box()
        source_ratio = image.evaluate('(element) => element.naturalWidth / element.naturalHeight')
        check(image_box is not None and abs((image_box['width'] / image_box['height']) - source_ratio) <= 0.02, message)
    except Exception:
        check(False, f'{message}（公式PR画像を読み込めません）')

def load_affiliate_creative(card):
    try:
        card.scroll_into_view_if_needed(timeout=5000)
        card.locator('.affiliate-creative-link img').first.wait_for(state='visible', timeout=5000)
        return True
    except Exception:
        return False

def open_page(browser, path, width=1280, height=900):
    page = browser.new_page(viewport={'width': width, 'height': height})
    console_errors = []
    page.on('console', lambda message: console_errors.append(message.text) if message.type == 'error' else None)
    response = page.goto(f'{BASE_URL}{path}', wait_until='domcontentloaded')
    check(response is not None and response.status < 400, f'{path}: HTTPエラー')
    results.append({'path': path, 'width': width, 'status': response.status if response else None})
    return page, console_errors

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True, executable_path=CHROME_PATH)

    # 画面外のASP画像と計測ピクセルは、広告枠へ近づくまで取得しない
    lazy_home = browser.new_page(viewport={'width': 390, 'height': 320})
    ad_image_requests = []
    ad_hosts = {'image.moshimo.com', 'i.moshimo.com'}
    lazy_home.on('request', lambda request: ad_image_requests.append(request.url) if request.resource_type == 'image' and (((urlparse(request.url).hostname or '') in ad_hosts) or (urlparse(request.url).hostname or '').endswith('.a8.net')) else None)
    lazy_home.goto(f'{BASE_URL}/', wait_until='domcontentloaded')
    lazy_home.wait_for_timeout(300)
    deferred_creatives = lazy_home.locator('.home-affiliate-more [data-creative-load="deferred"]')
    check(deferred_creatives.count() > 0, 'トップの画面外PRが初期状態で遅延されていません')
    initial_ad_request_count = len(ad_image_requests)
    lazy_home.locator('.home-affiliate-more').scroll_into_view_if_needed()
    lazy_home.wait_for_timeout(500)
    check(lazy_home.locator('.home-affiliate-more [data-creative-load="loaded"]').count() > 0, 'トップの遅延PRが接近後も読み込まれません')
    check(len(ad_image_requests) > initial_ad_request_count, 'トップの遅延PR画像が接近後にだけ取得されることを確認できません')
    lazy_home.close()

    # トップの装飾が人物や案内アイコンへ重ならないこと
    for visual_width in [320, 768, 1440]:
        visual_home, _ = open_page(browser, '/', visual_width, 1000)
        hero_picture = visual_home.locator('.home-hero-picture').bounding_box()
        housing_motif = visual_home.locator('.home-hero-motifs li').nth(1).bounding_box()
        senior_face_area = {
            'x': hero_picture['x'] + hero_picture['width'] * 0.62,
            'y': hero_picture['y'] + hero_picture['height'] * 0.20,
            'width': hero_picture['width'] * 0.28,
            'height': hero_picture['height'] * 0.38,
        }
        check(not rectangles_overlap(housing_motif, senior_face_area), f'トップ ({visual_width}px): 住まいラベルが人物の顔へ重なっています')
        first_guide = visual_home.locator('.home-search-guide li').first
        audience_visual = first_guide.locator('.home-search-guide-audience')
        check(audience_visual.locator('.audience-icon-person').count() == 1, f'トップ ({visual_width}px): 対象選択に人物アイコンがありません')
        check(audience_visual.locator('.audience-icon-company').count() == 1, f'トップ ({visual_width}px): 対象選択に会社アイコンがありません')
        if audience_visual.count() == 1:
            guide_number = first_guide.locator('.home-search-guide-number').bounding_box()
            check(not rectangles_overlap(guide_number, audience_visual.bounding_box()), f'トップ ({visual_width}px): 手順番号が対象アイコンへ重なっています')
        initial_affiliate_pr = visual_home.locator('[data-analytics-impression-event="affiliate_impression"]')
        check(2 < initial_affiliate_pr.count() <= 4, f'トップ ({visual_width}px): 初期状態の個人向けPRが3件以上ではありません')
        visual_home.wait_for_timeout(750)
        visual_home.get_by_role('button', name='事業者・団体向け').click()
        affiliate_pr = visual_home.locator('[data-analytics-impression-event="affiliate_impression"]')
        try:
            affiliate_pr.first.wait_for(state='attached', timeout=5000)
        except Exception:
            pass
        check(2 < affiliate_pr.count() <= 4, f'トップ ({visual_width}px): 事業者向けPRが3件以上ではありません')
        for pr_index in range(affiliate_pr.count()):
            current_pr = affiliate_pr.nth(pr_index)
            check(load_affiliate_creative(current_pr), f'トップ ({visual_width}px): 公式PR画像が接近後も読み込まれません')
            check_affiliate_image_ratio(visual_home, current_pr.locator('.affiliate-creative-link img').first, f'トップ ({visual_width}px): 公式PR画像の固有比率が崩れています')
        visual_home.close()

    # PCでは検索フォームの右に公式PRを配置する
    desktop_home, desktop_home_errors = open_page(browser, '/', 1440, 1000)
    desktop_home.get_by_role('button', name='事業者・団体向け').click()
    desktop_home.wait_for_timeout(200)
    desktop_search = desktop_home.locator('.home-search-panel')
    desktop_rail = desktop_home.locator('.home-business-affiliate')
    desktop_pr = desktop_home.locator('.home-business-affiliate [data-analytics-impression-event="affiliate_impression"]')
    desktop_more_pr = desktop_home.locator('.home-affiliate-more [data-analytics-impression-event="affiliate_impression"]')
    check(desktop_pr.count() == 1, 'トップPC: 右レールの主PRが1件ではありません')
    check(2 <= desktop_more_pr.count() <= 3, 'トップPC: 検索下の関連PRが2〜3件ではありません')
    if desktop_pr.count() >= 1:
        desktop_search_box = desktop_home.locator('.home-search-step').first.bounding_box()
        desktop_heading_box = desktop_home.locator('.home-search-heading').bounding_box()
        desktop_rail_box = desktop_rail.bounding_box()
        desktop_pr_box = desktop_pr.nth(0).bounding_box()
        check(desktop_pr_box['x'] >= desktop_search_box['x'] + desktop_search_box['width'], 'トップPC: PR枠が検索フォームの右側にありません')
        check(abs(desktop_rail_box['y'] - desktop_heading_box['y']) <= 24, 'トップPC: PRカラムと検索パネル内コンテンツの上端が揃っていません')
        check(desktop_pr_box['width'] <= 320, 'トップPC: PR枠が300pxクリエイティブより不自然に広がっています')
        check(desktop_pr_box['y'] < 1000, 'トップPC: 最初のPR枠が初画面から始まりません')
    check(len(desktop_home_errors) == 0, f'トップPC: console error {desktop_home_errors}')
    desktop_home.screenshot(path=str(REPORT_DIR / 'home-1440.png'), full_page=False)
    desktop_home.close()

    # 主要URLとフォーム、メニュー、URLクエリの動作
    home, home_errors = open_page(browser, '/', 390, 844)
    home.screenshot(path=str(REPORT_DIR / 'home-390.png'), full_page=True)
    check(2 < home.locator('[data-analytics-impression-event="affiliate_impression"]').count() <= 4, 'トップ初期状態に個人向けPRが3件以上表示されません')
    home.get_by_role('button', name='事業者・団体向け').click()
    home.wait_for_timeout(200)
    hero_pr = home.locator('[data-analytics-impression-event="affiliate_impression"][data-placement="home-featured-rail"], [data-analytics-impression-event="affiliate_impression"][data-placement="home-related-row"]')
    check(2 < hero_pr.count() <= 4, 'トップモバイルで事業者選択後のPRが3件以上表示されません')
    check(len(set(hero_pr.evaluate_all('(items) => items.map((item) => item.dataset.offerId)'))) == hero_pr.count(), 'トップモバイルで同じPR案件が重複しています')
    check(hero_pr.evaluate_all('(items) => items.map((item) => Number(item.dataset.position))') == list(range(1, hero_pr.count() + 1)), 'トップモバイルの初期PR計測位置が連番ではありません')
    if hero_pr.count() >= 1:
        hero_pr_box = hero_pr.nth(0).bounding_box()
        check(hero_pr_box['width'] <= 320, 'トップモバイル: PR枠が300pxクリエイティブより不自然に広がっています')
        for pr_index in range(hero_pr.count()):
            current_pr = hero_pr.nth(pr_index)
            check(load_affiliate_creative(current_pr), 'トップPRが接近後も読み込まれません')
            check(current_pr.locator('[data-ad-label]').is_visible(), 'トップのPR表記が見える状態ではありません')
            check(current_pr.locator('[data-ad-label]').inner_text().strip() == 'PR', 'トップのPR表記がPRだけではありません')
            check(current_pr.locator('.affiliate-banner-visual').count() == 0, 'トップPRに自作ビジュアル要素が残っています')
            check(current_pr.locator('.affiliate-creative-link img').first.is_visible(), 'トップPRにASP提供クリエイティブ画像が表示されていません')
    hero_pr_cta = home.locator('[data-placement="home-featured-rail"] .affiliate-creative-cta').first
    hero_pr_cta.focus()
    check(hero_pr_cta.evaluate('(element) => document.activeElement === element'), 'トップモバイル: PRの明示CTAへキーボードフォーカスできません')
    carousel_next = home.locator('.home-affiliate-more').get_by_role('button', name='次へ')
    if carousel_next.count() == 1:
        more_pr = home.locator('.home-affiliate-more [data-analytics-impression-event="affiliate_impression"]')
        first_offer_id = more_pr.first.get_attribute('data-offer-id')
        first_position = int(more_pr.first.get_attribute('data-position'))
        carousel_next.focus()
        home.keyboard.press('Enter')
        home.wait_for_timeout(100)
        switched_pr = home.locator('.home-affiliate-more [data-analytics-impression-event="affiliate_impression"]')
        check(switched_pr.first.get_attribute('data-offer-id') != first_offer_id, 'トップモバイル: Enterで次のPR群へ切り替わりません')
        check(int(switched_pr.first.get_attribute('data-position')) > first_position, 'トップモバイル: 切り替え後のPR計測位置が更新されません')
        check('件 / 全' in home.locator('.home-affiliate-more .responsive-affiliate-controls [role="status"]').inner_text(), 'トップモバイル: PR切り替え状態が更新されません')
    check(home.locator('.home-search-submit').evaluate('(submit) => Boolean(submit.compareDocumentPosition(document.querySelector(\'.home-business-affiliate\')) & Node.DOCUMENT_POSITION_FOLLOWING)'), 'トップモバイル: PRが検索ボタンより前に割り込んでいます')
    check(hero_pr.first.bounding_box()['y'] >= home.locator('.home-search-submit').bounding_box()['y'] + home.locator('.home-search-submit').bounding_box()['height'], 'トップモバイル: PRが検索操作を視覚的に遮っています')
    home_business_audit = Axe().run(home, options={'runOnly': {'type': 'tag', 'values': ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']}, 'resultTypes': ['violations']})
    axe_results['/ (事業者選択後)'] = home_business_audit.response
    home_business_major = [item for item in home_business_audit.response['violations'] if item.get('impact') in ('critical', 'serious')]
    check(len(home_business_major) == 0, f'トップ事業者選択後: axe重大違反 {[(item["id"], len(item["nodes"])) for item in home_business_major]}')
    check(2 < home.locator('[data-analytics-impression-event="affiliate_impression"]').count() <= 4, 'トップモバイルの可視PRが3件以上ではありません')
    home.get_by_role('button', name='省エネ').click()
    check(home.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, '適合案件がない省エネ選択時にもPRが表示されています')
    home.get_by_role('button', name='創業').click()
    check(2 < home.locator('[data-analytics-impression-event="affiliate_impression"]').count() <= 4, '創業選択時に適合PRが3件以上表示されません')
    check(home.locator('input[name="audience"]').get_attribute('value') == 'business', 'トップ: 対象切替が検索条件へ反映されません')
    home.get_by_role('button', name='メニューを開く').click()
    check(home.get_by_role('navigation', name='モバイルメニュー').is_visible(), 'モバイルメニューが開きません')
    home.keyboard.press('Escape')
    check(home.get_by_role('button', name='メニューを開く').evaluate('(element) => document.activeElement === element'), 'Escape後にメニューボタンへフォーカスが戻りません')
    home.locator('#home-grant-prefecture').select_option('東京都')
    home.locator('#home-grant-query').fill('子育て')
    home.get_by_role('button', name='補助金・助成金を検索する').click()
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

    support_type, support_type_errors = open_page(browser, '/support-type/subsidy/', 390, 844)
    check(support_type.get_by_role('heading', name='補助金を地域・対象から探す').is_visible(), '制度種別LP: H1が表示されません')
    check(support_type.locator('.grant-card').count() > 0, '制度種別LP: 制度カードが表示されません')
    check('/support-type/subsidy/' in (support_type.locator('link[rel="canonical"]').get_attribute('href') or ''), '制度種別LP: canonicalが不足しています')
    check(len(support_type_errors) == 0, f'制度種別LP: console error {support_type_errors}')
    support_type.close()

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
    check(unverified.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, '文脈不一致の公式確認待ち制度にPRが表示されています')
    check(unverified.locator('[data-ad-label]').count() == 0, 'PR本体がない制度に空の広告ラベルが残っています')
    unverified.close()

    unavailable, _ = open_page(browser, '/grant/ogaki-tradition-craft/', 390, 844)
    check('noindex' in (unavailable.locator('meta[name="robots"]').get_attribute('content') or ''), '存在未確認制度がnoindexではありません')
    check(unavailable.locator('.grant-source-links a, .grant-mobile-cta a').count() == 0, '存在未確認制度に調査用URLのCTAが表示されています')
    check(unavailable.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, '存在未確認制度にPRが表示されています')
    check(unavailable.locator('[data-ad-label]').count() == 0, '存在未確認制度に空の広告ラベルが残っています')
    unavailable.close()

    redirect, _ = open_page(browser, '/grant/kushiro-elderly-taxi/', 1280, 900)
    check('/grant/kushiro-elderly-outing-bus/' in redirect.url, '釧路市の旧URLが新URLへ転送されません')
    redirect.close()
    redirect, _ = open_page(browser, '/grant/kagoshima-elderly-taxi/', 1280, 900)
    check('/grant/kagoshima-keiro-pass/' in redirect.url, '鹿児島市の旧URLが新URLへ転送されません')
    redirect.close()

    ended, ended_errors = open_page(browser, '/grant/sumitomo-zaidan-kankyou-josei/', 390, 844)
    check(ended.get_by_text('次回募集・後継制度を公式サイトで確認').count() >= 1, '終了制度のCTAが次回募集確認になっていません')
    check(ended.get_by_text('締切間近（受付中）').count() == 0, '終了制度に締切間近表示が残っています')
    check(ended.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, '無関係な環境助成の終了制度にPRが表示されています')
    official = ended.locator('.grant-official-primary')
    check(official.get_attribute('target') == '_blank' and 'noopener' in (official.get_attribute('rel') or ''), '公式CTAの外部リンク属性が不足しています')
    check(len(ended_errors) == 0, f'制度詳細: console error {ended_errors}')
    ended.close()

    # 200%文字拡大と400%相当のリフロー（1280px基準で320px）でも固定CTAが内容を隠さないこと
    zoomed_ended, _ = open_page(browser, '/grant/sumitomo-zaidan-kankyou-josei/', 320, 844)
    normal_sticky_height = zoomed_ended.locator('.grant-mobile-cta').bounding_box()['height']
    zoomed_ended.evaluate("document.documentElement.style.fontSize = '32px'")
    zoomed_ended.wait_for_timeout(150)
    measured_sticky_height = zoomed_ended.locator('.grant-mobile-cta').bounding_box()['height']
    reserved_sticky_height = float(zoomed_ended.evaluate("parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mobile-official-cta-height'))"))
    check(abs(measured_sticky_height - reserved_sticky_height) <= 1, '200%文字拡大時の固定CTA実測高が本文余白へ反映されていません')
    correction_link = zoomed_ended.get_by_role('link', name='この制度について訂正を依頼する')
    correction_link.focus()
    zoomed_ended.wait_for_timeout(100)
    check(not rectangles_overlap(zoomed_ended.locator('.grant-mobile-cta').bounding_box(), correction_link.bounding_box()), '200%文字拡大時に末尾リンクのフォーカスが固定CTAへ隠れています')
    check(not zoomed_ended.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth'), '400%相当のリフロー幅で横スクロールが発生しています')
    zoomed_ended.evaluate("document.documentElement.style.fontSize = '16px'")
    zoomed_ended.wait_for_timeout(150)
    restored_sticky_height = zoomed_ended.locator('.grant-mobile-cta').bounding_box()['height']
    restored_reserved_height = float(zoomed_ended.evaluate("parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mobile-official-cta-height'))"))
    check(abs(restored_sticky_height - normal_sticky_height) <= 1, '文字サイズを通常へ戻しても固定CTAの高さが縮小しません')
    check(abs(restored_sticky_height - restored_reserved_height) <= 1, '通常文字サイズへ戻した後の固定CTA実測高が本文余白へ反映されていません')
    zoomed_ended.close()

    ended_business, ended_business_errors = open_page(browser, '/grant/adachi-startup-support/', 390, 844)
    check(ended_business.get_by_text('次回募集・後継制度を公式サイトで確認').count() >= 1, '終了済み創業制度のCTAが次回募集確認になっていません')
    check(0 < ended_business.locator('[data-analytics-impression-event="affiliate_impression"]').count() <= 3, '終了済み創業制度の詳細に適合PRが表示されません')
    check(len(ended_business_errors) == 0, f'終了済み創業制度: console error {ended_business_errors}')
    ended_business.close()

    sensitive, sensitive_errors = open_page(browser, '/grant/ora-fertility-treatment-subsidy-2026/', 390, 844)
    sensitive_impression = sensitive.locator('[data-analytics-impression-event="affiliate_impression"]')
    check(0 < sensitive_impression.count() <= 2, '個人向け・医療系の制度詳細に適合PRが表示されません')
    check(sensitive.get_by_text('事業者・団体向けサービス').count() == 0, '個人向け詳細に事業者向けという誤った広告区分が残っています')
    check(sensitive.locator('.grant-summary-eligibility-list li').count() >= 2, '要約カードの主な対象者が箇条書きになっていません')
    check(len(sensitive_errors) == 0, f'個人向け・医療系制度: console error {sensitive_errors}')
    sensitive.close()

    affiliate_desktop, affiliate_desktop_errors = open_page(browser, '/grant/hachioji-startup-support/', 1440, 1000)
    affiliate_desktop.wait_for_timeout(200)
    affiliate_desktop_article = affiliate_desktop.locator('.grant-detail-article')
    affiliate_desktop_rail = affiliate_desktop.locator('.grant-affiliate-placement')
    affiliate_desktop_pr = affiliate_desktop_rail.locator('[data-analytics-impression-event="affiliate_impression"]')
    check(affiliate_desktop_pr.count() == 1, '制度詳細PC: 右レールの表示中PRが1件ではありません')
    check(0 < affiliate_desktop.locator('[data-analytics-impression-event="affiliate_impression"]').count() <= 3, '制度詳細PC: 適合PRが表示されません')
    if affiliate_desktop_pr.count() >= 1:
        affiliate_desktop_article_box = affiliate_desktop.locator('.grant-detail-main-start').bounding_box()
        affiliate_desktop_official_box = affiliate_desktop.locator('.grant-source-panel').bounding_box()
        affiliate_desktop_rail_box = affiliate_desktop_rail.bounding_box()
        check(affiliate_desktop_rail_box['x'] >= affiliate_desktop_article_box['x'] + affiliate_desktop_article_box['width'], '制度詳細PC: PR枠が本文の右側にありません')
        check(affiliate_desktop_rail_box['y'] >= affiliate_desktop_official_box['y'] + affiliate_desktop_official_box['height'], '制度詳細PC: PRが公式情報より上に表示されています')
        for pr_index in range(affiliate_desktop_pr.count()):
            check_affiliate_image_ratio(affiliate_desktop, affiliate_desktop_pr.nth(pr_index).locator('.affiliate-creative-link img').first, '制度詳細PC: 広告主提供画像の固有比率が崩れています')
        check(affiliate_desktop.locator('.grant-source-panel').evaluate('(el) => Boolean(el.compareDocumentPosition(document.querySelector(\'.grant-affiliate-placement\')) & Node.DOCUMENT_POSITION_FOLLOWING)'), '制度詳細PC: PR枠のDOM順が公式情報より前です')
    check(len(affiliate_desktop_errors) == 0, f'制度詳細PC: console error {affiliate_desktop_errors}')
    affiliate_desktop.screenshot(path=str(REPORT_DIR / 'grant-affiliate-1440.png'), full_page=False)
    affiliate_desktop.close()

    affiliate, affiliate_errors = open_page(browser, '/grant/hachioji-startup-support/', 390, 844)
    affiliate_impression = affiliate.locator('[data-analytics-impression-event="affiliate_impression"]')
    affiliate_link = affiliate.locator('.affiliate-creative-link a')
    tracked_affiliate_links = affiliate.locator('a[data-analytics-event="affiliate_click"]')
    check(0 < affiliate_impression.count() <= 3, '制度詳細モバイルに適合PRが表示されません')
    for pr_index in range(affiliate_impression.count()):
        affiliate_impression.nth(pr_index).scroll_into_view_if_needed()
    affiliate.wait_for_timeout(300)
    check(affiliate_link.count() == affiliate_impression.count(), '制度詳細モバイルのASP発行リンク数がPR数と一致しません')
    check(len(set(affiliate_impression.evaluate_all('(items) => items.map((item) => item.dataset.offerId)'))) == affiliate_impression.count(), '制度詳細モバイルで同じPR案件が重複しています')
    check(tracked_affiliate_links.count() == affiliate_impression.count() * 2, '制度詳細の画像リンクと明示CTAが各案件に揃っていません')
    for link_index in range(affiliate_link.count()):
        current_link = affiliate_link.nth(link_index)
        check(current_link.get_attribute('rel') == 'nofollow', 'PRリンクがASP発行コードのrel属性と一致しません')
    for link_index in range(tracked_affiliate_links.count()):
        current_link = tracked_affiliate_links.nth(link_index)
        check(current_link.get_attribute('target') == '_blank', '実クリック用PRリンクが新しいタブで開きません')
        for required_rel in ['sponsored', 'nofollow', 'noopener', 'noreferrer']:
            check(required_rel in (current_link.get_attribute('rel') or '').split(), f'実クリック用PRリンクに{required_rel}がありません')
    for overlay_index in range(affiliate.locator('.affiliate-creative-overlay').count()):
        overlay = affiliate.locator('.affiliate-creative-overlay').nth(overlay_index)
        check(overlay.get_attribute('tabindex') == '-1' and overlay.get_attribute('aria-hidden') == 'true', '画像全面リンクがキーボード導線へ重複しています')
    for pr_index in range(affiliate_impression.count()):
        check(affiliate_impression.nth(pr_index).locator('[data-ad-label]').inner_text().strip() == 'PR', 'PR表記がPRだけではありません')
    check(affiliate_impression.locator('.affiliate-banner-visual').count() == 0, '制度詳細PRに自作ビジュアル要素が残っています')
    for pr_index in range(affiliate_impression.count()):
        current_image = affiliate_impression.nth(pr_index).locator('.affiliate-creative-link img').first
        current_pr = affiliate_impression.nth(pr_index)
        check(current_image.is_visible(), '制度詳細PRにASP公式クリエイティブ画像が表示されていません')
        check(current_image.evaluate('(element) => element.closest("a") !== null'), 'ASPバナー内の画像が発行リンク内にありません')
        issued_anchor = current_pr.locator('.affiliate-creative-link a').first
        issued_images = current_pr.locator('.affiliate-creative-link img')
        check(normalize_external_url(issued_anchor.get_attribute('href')) == normalize_external_url(current_pr.get_attribute('data-expected-affiliate-url')), 'ASP発行リンクが案件台帳の成果URLと一致しません')
        check(normalize_external_url(issued_images.first.get_attribute('src')) == normalize_external_url(current_pr.get_attribute('data-expected-creative-url')), 'ASP発行画像が案件台帳のクリエイティブURLと一致しません')
        check(issued_images.count() >= 2 and normalize_external_url(issued_images.last.get_attribute('src')) == normalize_external_url(current_pr.get_attribute('data-expected-impression-url')), 'ASP発行計測ピクセルが案件台帳と一致しません')
        check_affiliate_image_ratio(affiliate, current_image, '制度詳細モバイル: 公式PR画像の固有比率が崩れています')
    check(affiliate.locator('.grant-official-primary').count() >= 1, 'PR表示ページに公式CTAがありません')
    if affiliate_impression.count() >= 1:
        check(affiliate.locator('.grant-source-panel').evaluate('(el) => Boolean(el.compareDocumentPosition(document.querySelector(\'[data-analytics-impression-event="affiliate_impression"]\')) & Node.DOCUMENT_POSITION_FOLLOWING)'), 'PR枠が公式情報より上に表示されています')
        affiliate_cta = affiliate.locator('.affiliate-creative-cta').first
        affiliate_cta.focus()
        affiliate.wait_for_timeout(100)
        sticky_box = affiliate.locator('.grant-mobile-cta').bounding_box()
        affiliate_cta_box = affiliate_cta.bounding_box()
        check(not rectangles_overlap(sticky_box, affiliate_cta_box), '広告CTAのフォーカスが固定公式CTAに隠れています')
    check(len(affiliate_errors) == 0, f'PR表示制度詳細: console error {affiliate_errors}')
    affiliate.close()

    business_guide, business_guide_errors = open_page(browser, '/guide/#business-guide', 390, 844)
    check(business_guide.locator('[data-analytics-impression-event="affiliate_impression"][data-page-type="businessGuide"]').count() == 1, '事業者向け申請ガイドのモバイル可視PRが1件ではありません')
    check(len(business_guide_errors) == 0, f'事業者向け申請ガイド: console error {business_guide_errors}')
    business_guide.close()

    desktop_guide, desktop_guide_errors = open_page(browser, '/guide/#business-guide', 1024, 900)
    desktop_guide.wait_for_timeout(200)
    desktop_guide_pr = desktop_guide.locator('[data-analytics-impression-event="affiliate_impression"][data-page-type="businessGuide"]')
    check(desktop_guide_pr.count() == 1, '事業者向け申請ガイドPC: PRカルーセルの表示中案件が1件ではありません')
    check(len(desktop_guide_errors) == 0, f'事業者向け申請ガイドPC: console error {desktop_guide_errors}')
    desktop_guide.close()

    privacy, _ = open_page(browser, '/privacy/', 390, 844)
    check('A8.net' in privacy.locator('body').inner_text(), '公開案件があるのにA8.netを利用中ASPとして表示していません')
    privacy.close()

    subscribe, _ = open_page(browser, '/subscribe/', 390, 844)
    check(subscribe.locator('input[type="email"]').count() == 0, '配信先未設定なのにメールアドレス入力欄が表示されています')
    subscribe.close()

    # 320px〜1440pxで横スクロールがないこと
    for width in [320, 375, 390, 768, 769, 1023, 1024, 1199, 1200, 1440]:
        for path in ['/', '/grants/', '/grant/sumitomo-zaidan-kankyou-josei/', '/grant/hachioji-startup-support/']:
            page, _ = open_page(browser, path, width, 900)
            overflow = page.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth')
            check(not overflow, f'{path} ({width}px): 横スクロールが発生しています')
            page.close()

    narrow_home, _ = open_page(browser, '/', 320, 900)
    field_boxes = [narrow_home.locator('.home-search-field').nth(index).bounding_box() for index in range(2)]
    check(field_boxes[1]['y'] >= field_boxes[0]['y'] + field_boxes[0]['height'], '320pxで地域とキーワードが1列になっていません')
    narrow_more = narrow_home.locator('.home-affiliate-more .responsive-affiliate-slides')
    narrow_card = narrow_more.locator('.responsive-affiliate-slide').first
    narrow_more_box = narrow_more.bounding_box()
    narrow_card_box = narrow_card.bounding_box()
    check(narrow_card_box['width'] >= 240, '320pxで横スワイプ広告が小さくなりすぎています')
    check(narrow_more_box['x'] + narrow_more_box['width'] - (narrow_card_box['x'] + narrow_card_box['width']) >= 32, '320pxで次の広告カードがあることを示す見切れ幅が不足しています')
    narrow_home.close()

    # 画面幅が変わってもカルーセルの同時表示数を安定させる
    for boundary_width in [1023, 1024]:
        boundary_home, _ = open_page(browser, '/', boundary_width, 900)
        boundary_home.get_by_role('button', name='事業者・団体向け').click()
        boundary_home.wait_for_timeout(150)
        boundary_pr_count = boundary_home.locator('[data-analytics-impression-event="affiliate_impression"][data-placement="home-featured-rail"], [data-analytics-impression-event="affiliate_impression"][data-placement="home-related-row"]').count()
        check(2 < boundary_pr_count <= 4, f'トップ ({boundary_width}px): PR同時表示数が3〜4件ではありません')
        boundary_home.close()

    # WCAG A/AAの自動検査（critical/seriousを失敗扱い）
    for path in ['/', '/grants/', '/guide/', '/faq/', '/category/childcare/', '/support-type/subsidy/', '/grant/sumitomo-zaidan-kankyou-josei/']:
        page, _ = open_page(browser, path, 1280, 900)
        audit = Axe().run(page, options={'runOnly': {'type': 'tag', 'values': ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']}, 'resultTypes': ['violations']})
        axe_results[path] = audit.response
        major = [item for item in audit.response['violations'] if item.get('impact') in ('critical', 'serious')]
        check(len(major) == 0, f'{path}: axe重大違反 {[(item["id"], len(item["nodes"])) for item in major]}')
        page.close()

    affiliate_a11y, _ = open_page(browser, '/grant/hachioji-startup-support/', 390, 844)
    affiliate_audit = Axe().run(affiliate_a11y, options={'runOnly': {'type': 'tag', 'values': ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']}, 'resultTypes': ['violations']})
    axe_results['/grant/hachioji-startup-support/'] = affiliate_audit.response
    affiliate_major = [item for item in affiliate_audit.response['violations'] if item.get('impact') in ('critical', 'serious')]
    check(len(affiliate_major) == 0, f'広告表示詳細: axe重大違反 {[(item["id"], len(item["nodes"])) for item in affiliate_major]}')
    affiliate_a11y.close()

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
    summary += ['主要導線、320〜1440pxの横スクロール、終了CTA、PRの表示条件と非表示条件、重大なWCAG A/AA違反はいずれも問題ありませんでした。']
(REPORT_DIR / 'summary.md').write_text('\n'.join(summary), encoding='utf-8')
print('\n'.join(summary))
if failures:
    raise SystemExit(1)
