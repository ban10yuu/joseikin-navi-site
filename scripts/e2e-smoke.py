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

def rectangles_overlap(left, right):
    return not (
        left['x'] + left['width'] <= right['x']
        or right['x'] + right['width'] <= left['x']
        or left['y'] + left['height'] <= right['y']
        or right['y'] + right['height'] <= left['y']
    )

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
        check(visual_home.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, f'トップ ({visual_width}px): 初期状態でPRが表示されています')
        visual_home.get_by_role('button', name='事業者・団体向け').click()
        affiliate_image = visual_home.locator('.home-business-affiliate .affiliate-creative-image')
        try:
            affiliate_image.first.wait_for(state='attached', timeout=5000)
        except Exception:
            pass
        expected_count = 1
        check(affiliate_image.count() == expected_count, f'トップ ({visual_width}px): 表示されるPR画像数が設計と一致しません')
        for image_index in range(affiliate_image.count()):
            affiliate_image_box = affiliate_image.nth(image_index).bounding_box()
            displayed_ratio = affiliate_image_box['width'] / affiliate_image_box['height']
            check(abs(displayed_ratio - (300 / 250)) <= 0.02, f'トップ ({visual_width}px): 公式PR画像の300:250比率が崩れています')
        visual_home.close()

    # PCでは検索フォームの右に公式PRを配置する
    desktop_home, desktop_home_errors = open_page(browser, '/', 1440, 1000)
    desktop_home.get_by_role('button', name='事業者・団体向け').click()
    desktop_home.wait_for_timeout(200)
    desktop_search = desktop_home.locator('.home-search-panel')
    desktop_rail = desktop_home.locator('.home-business-affiliate')
    desktop_pr = desktop_home.locator('.home-business-affiliate [data-analytics-impression-event="affiliate_impression"]')
    check(desktop_pr.count() == 1, 'トップPC: 公開可能なPR枠が1件ではありません')
    if desktop_pr.count() == 1:
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
    check(home.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, 'トップ初期状態にPRが表示されています')
    home.get_by_role('button', name='事業者・団体向け').click()
    home.wait_for_timeout(200)
    hero_pr = home.locator('[data-analytics-impression-event="affiliate_impression"][data-placement="home-business-selection"]')
    check(hero_pr.count() == 1, 'トップモバイルで事業者選択後のPRが1件表示されません')
    if hero_pr.count() == 1:
        hero_pr_box = hero_pr.nth(0).bounding_box()
        check(hero_pr_box['width'] <= 320, 'トップモバイル: PR枠が300pxクリエイティブより不自然に広がっています')
        for pr_index in range(hero_pr.count()):
            current_pr = hero_pr.nth(pr_index)
            check(current_pr.locator('[data-ad-label]').is_visible(), 'トップのPR表記が見える状態ではありません')
            check(current_pr.locator('[data-ad-label]').inner_text().strip() == 'PR', 'トップのPR表記がPRだけではありません')
            check(current_pr.locator('.affiliate-banner-visual').count() == 0, 'トップPRに自作ビジュアル要素が残っています')
            check(current_pr.locator('.affiliate-creative-image').is_visible(), 'トップPRにASP公式クリエイティブ画像が表示されていません')
    hero_pr_cta = hero_pr.locator('[data-analytics-event="affiliate_click"]')
    hero_pr_cta.focus()
    check(hero_pr_cta.evaluate('(element) => document.activeElement === element'), 'トップモバイル: PRの明示CTAへキーボードフォーカスできません')
    check(home.locator('.home-search-submit').evaluate('(submit) => Boolean(submit.compareDocumentPosition(document.querySelector(\'.home-business-affiliate\')) & Node.DOCUMENT_POSITION_FOLLOWING)'), 'トップモバイル: PRが検索ボタンより前に割り込んでいます')
    check(hero_pr.bounding_box()['y'] >= home.locator('.home-search-submit').bounding_box()['y'] + home.locator('.home-search-submit').bounding_box()['height'], 'トップモバイル: PRが検索操作を視覚的に遮っています')
    home_business_audit = Axe().run(home, options={'runOnly': {'type': 'tag', 'values': ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']}, 'resultTypes': ['violations']})
    axe_results['/ (事業者選択後)'] = home_business_audit.response
    home_business_major = [item for item in home_business_audit.response['violations'] if item.get('impact') in ('critical', 'serious')]
    check(len(home_business_major) == 0, f'トップ事業者選択後: axe重大違反 {[(item["id"], len(item["nodes"])) for item in home_business_major]}')
    check(home.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 1, 'トップモバイルの可視PRが1件ではありません')
    home.get_by_role('button', name='省エネ').click()
    check(home.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, '適合案件がない省エネ選択時にもPRが表示されています')
    home.get_by_role('button', name='創業').click()
    check(home.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 1, '創業選択時に適合PRが表示されません')
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
    unverified.close()

    unavailable, _ = open_page(browser, '/grant/ogaki-tradition-craft/', 390, 844)
    check('noindex' in (unavailable.locator('meta[name="robots"]').get_attribute('content') or ''), '存在未確認制度がnoindexではありません')
    check(unavailable.locator('.grant-source-links a, .grant-mobile-cta a').count() == 0, '存在未確認制度に調査用URLのCTAが表示されています')
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
    check(ended.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, '終了制度にPR枠が表示されています')
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
    check(ended_business.locator('[data-analytics-impression-event="affiliate_impression"]').count() == 0, '終了済み創業制度にPR枠が表示されています')
    check(len(ended_business_errors) == 0, f'終了済み創業制度: console error {ended_business_errors}')
    ended_business.close()

    sensitive, sensitive_errors = open_page(browser, '/grant/ora-fertility-treatment-subsidy-2026/', 390, 844)
    sensitive_impression = sensitive.locator('[data-analytics-impression-event="affiliate_impression"]')
    check(sensitive_impression.count() == 0, '個人向け・医療系の制度詳細にPR枠が表示されています')
    check(sensitive.locator('.grant-summary-eligibility-list li').count() >= 2, '要約カードの主な対象者が箇条書きになっていません')
    check(len(sensitive_errors) == 0, f'個人向け・医療系制度: console error {sensitive_errors}')
    sensitive.close()

    affiliate_desktop, affiliate_desktop_errors = open_page(browser, '/grant/hachioji-startup-support/', 1440, 1000)
    affiliate_desktop_article = affiliate_desktop.locator('.grant-detail-article')
    affiliate_desktop_rail = affiliate_desktop.locator('.grant-affiliate-placement')
    affiliate_desktop_pr = affiliate_desktop_rail.locator('[data-analytics-impression-event="affiliate_impression"]')
    check(affiliate_desktop_pr.count() == 1, '制度詳細PC: 適合する右レールPRが1件ではありません')
    if affiliate_desktop_pr.count() == 1:
        affiliate_desktop_article_box = affiliate_desktop.locator('.grant-detail-main-rest').bounding_box()
        affiliate_desktop_source_box = affiliate_desktop.locator('.grant-source-panel').bounding_box()
        affiliate_desktop_rail_box = affiliate_desktop_rail.bounding_box()
        check(affiliate_desktop_rail_box['x'] >= affiliate_desktop_article_box['x'] + affiliate_desktop_article_box['width'], '制度詳細PC: PR枠が本文の右側にありません')
        check(affiliate_desktop_rail_box['y'] >= affiliate_desktop_source_box['y'] + affiliate_desktop_source_box['height'], '制度詳細PC: PR枠が公式情報パネルより先に見えます')
        check(abs(affiliate_desktop_rail_box['y'] - affiliate_desktop_article_box['y']) <= 8, '制度詳細PC: PRカラムと制度本文の上端が揃っていません')
        for pr_index in range(affiliate_desktop_pr.count()):
            affiliate_desktop_image_box = affiliate_desktop_pr.nth(pr_index).locator('.affiliate-creative-image').bounding_box()
            check(abs((affiliate_desktop_image_box['width'] / affiliate_desktop_image_box['height']) - (300 / 250)) <= 0.02, '制度詳細PC: 公式PR画像の300:250比率が崩れています')
        check(affiliate_desktop.locator('.grant-source-panel').evaluate('(el) => Boolean(el.compareDocumentPosition(document.querySelector(\'.grant-affiliate-placement\')) & Node.DOCUMENT_POSITION_FOLLOWING)'), '制度詳細PC: PR枠のDOM順が公式情報より前です')
    check(len(affiliate_desktop_errors) == 0, f'制度詳細PC: console error {affiliate_desktop_errors}')
    affiliate_desktop.screenshot(path=str(REPORT_DIR / 'grant-affiliate-1440.png'), full_page=False)
    affiliate_desktop.close()

    affiliate, affiliate_errors = open_page(browser, '/grant/hachioji-startup-support/', 390, 844)
    affiliate_impression = affiliate.locator('[data-analytics-impression-event="affiliate_impression"]')
    affiliate_link = affiliate.locator('[data-analytics-event="affiliate_click"]')
    check(affiliate_impression.count() == 1, '関連する事業者向け制度に適合PRが1件表示されません')
    check(affiliate_link.count() == 1, 'PR枠のリンクが1件ではありません')
    for link_index in range(affiliate_link.count()):
        current_link = affiliate_link.nth(link_index)
        affiliate_rel = current_link.get_attribute('rel') or ''
        check(all(value in affiliate_rel.split() for value in ['sponsored', 'nofollow', 'noopener', 'noreferrer']), 'PRリンクのrel属性が不足しています')
        check(current_link.get_attribute('target') == '_blank', 'PRリンクが新しいタブで開く設定になっていません')
    for pr_index in range(affiliate_impression.count()):
        check(affiliate_impression.nth(pr_index).locator('[data-ad-label]').inner_text().strip() == 'PR', 'PR表記がPRだけではありません')
    check(affiliate_impression.locator('.affiliate-banner-visual').count() == 0, '制度詳細PRに自作ビジュアル要素が残っています')
    for pr_index in range(affiliate_impression.count()):
        current_image = affiliate_impression.nth(pr_index).locator('.affiliate-creative-image')
        check(current_image.is_visible(), '制度詳細PRにASP公式クリエイティブ画像が表示されていません')
        check(current_image.evaluate('(element) => element.closest("a[data-analytics-event=affiliate_click]") !== null'), 'ASPバナー内のクリック案内と実際のリンク領域が一致していません')
        affiliate_mobile_image_box = current_image.bounding_box()
        check(abs((affiliate_mobile_image_box['width'] / affiliate_mobile_image_box['height']) - (300 / 250)) <= 0.02, '制度詳細モバイル: 公式PR画像の300:250比率が崩れています')
    check(affiliate.locator('.grant-official-primary').count() >= 1, 'PR表示ページに公式CTAがありません')
    if affiliate_impression.count() == 1:
        check(affiliate.locator('.grant-source-panel').evaluate('(el) => Boolean(el.compareDocumentPosition(document.querySelector(\'[data-analytics-impression-event="affiliate_impression"]\')) & Node.DOCUMENT_POSITION_FOLLOWING)'), 'PR枠が公式情報より上に表示されています')
        affiliate_cta = affiliate.locator('.affiliate-creative-link').first
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
    desktop_guide_pr = desktop_guide.locator('[data-analytics-impression-event="affiliate_impression"][data-page-type="businessGuide"]')
    check(desktop_guide_pr.count() == 1, '事業者向け申請ガイドPC: 公開可能なPRが1件ではありません')
    if desktop_guide_pr.count() == 1:
        guide_slides_box = desktop_guide.locator('.guide-affiliate-placement .responsive-affiliate-slides').bounding_box()
        guide_pr_box = desktop_guide_pr.bounding_box()
        check(guide_pr_box['width'] >= guide_slides_box['width'] * 0.9, '事業者向け申請ガイドPC: 1件だけのPRが半幅になり空欄が生じています')
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
    narrow_home.close()

    # PRの展開境界でも公開可能な案件だけを表示
    for boundary_width, expected_pr_count in [(1023, 1), (1024, 1)]:
        boundary_home, _ = open_page(browser, '/', boundary_width, 900)
        boundary_home.get_by_role('button', name='事業者・団体向け').click()
        boundary_home.wait_for_timeout(150)
        check(boundary_home.locator('[data-analytics-impression-event="affiliate_impression"][data-placement="home-business-selection"]').count() == expected_pr_count, f'トップ ({boundary_width}px): PR同時表示数が境界仕様と一致しません')
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
