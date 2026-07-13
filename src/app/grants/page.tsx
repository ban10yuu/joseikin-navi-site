import type { Metadata } from 'next';
import Link from 'next/link';
import GrantCard from '@/components/GrantCard';
import { getAllGrantsUnfiltered, getGrantQualityStats } from '@/lib/grants';
import { GRANT_STATUS_LABELS } from '@/lib/grant-status';
import { normalizeGrantQuery, queryGrants, type GrantQuery } from '@/lib/grant-query';
import { toSiteUrl } from '@/lib/site-url';
import {
  CATEGORY_LABELS,
  PREFECTURES,
  SUPPORT_TYPE_LABELS,
  TYPE_LABELS,
  type Purpose,
} from '@/lib/types';

type SearchParams = Record<string, string | string[] | undefined>;

const PURPOSE_LABELS: Record<Purpose, string> = {
  childcare: '子育て',
  housing: '住まい',
  medical: '医療・健康',
  education: '教育・学び',
  employment: '就職・雇用',
  startup: '創業',
  businessGrowth: '事業成長',
  digitalTransformation: 'デジタル化',
  energySaving: '省エネ',
  wageIncrease: '賃上げ',
  welfare: '福祉・介護',
  disaster: '災害支援',
  livingSupport: '生活支援',
  regionalRevitalization: '地域活性化',
  research: '研究',
  other: 'その他',
};

const SORT_LABELS = {
  relevance: '関連度順',
  deadline: '締切が近い順',
  checked: '新しく確認した順',
  amount: '支援額順',
} as const;

function hasSearchConditions(params: SearchParams): boolean {
  return Object.entries(params).some(([key, value]) => {
    const item = Array.isArray(value) ? value[0] : value;
    return Boolean(item) && !(key === 'official' && item === '1');
  });
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<SearchParams> }): Promise<Metadata> {
  const params = await searchParams;
  const filtered = hasSearchConditions(params);
  return {
    title: '支援制度を探す｜地域・対象・目的で検索｜助成金ナビ',
    description: '国・自治体・民間団体の支援制度を、対象者、地域、目的、制度種別、受付状況などの条件から検索できます。',
    alternates: { canonical: toSiteUrl('/grants/') },
    robots: filtered ? { index: false, follow: true } : undefined,
  };
}

function toParams(query: GrantQuery): URLSearchParams {
  const params = new URLSearchParams();
  if (query.q) params.set('q', query.q);
  if (query.audience) params.set('audience', query.audience);
  if (query.pref) params.set('pref', query.pref);
  if (query.municipality) params.set('municipality', query.municipality);
  if (query.category) params.set('cat', query.category);
  if (query.purpose) params.set('purpose', query.purpose);
  if (query.supportType) params.set('supportType', query.supportType);
  if (query.provider) params.set('provider', query.provider);
  if (query.status) params.set('status', query.status);
  if (!query.officialOnly) params.set('official', '0');
  if (query.deadlineFrom) params.set('deadlineFrom', query.deadlineFrom);
  if (query.deadlineTo) params.set('deadlineTo', query.deadlineTo);
  if (query.amountMin !== null) params.set('amountMin', String(query.amountMin));
  if (query.amountMax !== null) params.set('amountMax', String(query.amountMax));
  if (query.sort !== 'relevance') params.set('sort', query.sort);
  if (query.page > 1) params.set('page', String(query.page));
  return params;
}

function grantsHref(query: GrantQuery, changes: Record<string, string | null>): string {
  const params = toParams(query);
  for (const [key, value] of Object.entries(changes)) {
    if (value === null || value === '') params.delete(key);
    else params.set(key, value);
  }
  if (!Object.hasOwn(changes, 'page')) params.delete('page');
  const search = params.toString();
  return search ? `/grants/?${search}` : '/grants/';
}

function SearchFields({ query, idPrefix }: { query: GrantQuery; idPrefix: string }) {
  const fieldClass = 'min-h-11 w-full rounded-lg border border-line bg-white px-3 text-base text-ink focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20';
  return (
    <form action="/grants/" method="get" role="search" aria-label="支援制度を絞り込む" className="space-y-5" data-analytics-event="filter_apply" data-page-type="listing">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <label className="sm:col-span-2 lg:col-span-3 text-sm font-bold text-navy" htmlFor={`${idPrefix}-q`}>
          キーワード
          <input id={`${idPrefix}-q`} name="q" type="search" defaultValue={query.q} placeholder="例：子育て、創業、省エネ" className={`${fieldClass} mt-1`} />
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-audience`}>
          対象
          <select id={`${idPrefix}-audience`} name="audience" defaultValue={query.audience ?? ''} className={`${fieldClass} mt-1`}>
            <option value="">すべての対象</option>
            <option value="individual">個人・家族向け</option>
            <option value="business">事業者・団体向け</option>
          </select>
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-pref`}>
          都道府県
          <select id={`${idPrefix}-pref`} name="pref" defaultValue={query.pref ?? ''} className={`${fieldClass} mt-1`}>
            <option value="">全国</option>
            {PREFECTURES.filter((item) => item !== '全国').map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-municipality`}>
          市区町村
          <input id={`${idPrefix}-municipality`} name="municipality" defaultValue={query.municipality ?? ''} placeholder="例：横浜市" className={`${fieldClass} mt-1`} />
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-cat`}>
          カテゴリ
          <select id={`${idPrefix}-cat`} name="cat" defaultValue={query.category ?? ''} className={`${fieldClass} mt-1`}>
            <option value="">すべてのカテゴリ</option>
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-purpose`}>
          目的
          <select id={`${idPrefix}-purpose`} name="purpose" defaultValue={query.purpose ?? ''} className={`${fieldClass} mt-1`}>
            <option value="">すべての目的</option>
            {Object.entries(PURPOSE_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-supportType`}>
          制度種別
          <select id={`${idPrefix}-supportType`} name="supportType" defaultValue={query.supportType ?? ''} className={`${fieldClass} mt-1`}>
            <option value="">すべての制度種別</option>
            {Object.entries(SUPPORT_TYPE_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-provider`}>
          実施機関
          <select id={`${idPrefix}-provider`} name="provider" defaultValue={query.provider ?? ''} className={`${fieldClass} mt-1`}>
            <option value="">すべての実施機関</option>
            {Object.entries(TYPE_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-status`}>
          受付状況
          <select id={`${idPrefix}-status`} name="status" defaultValue={query.status ?? ''} className={`${fieldClass} mt-1`}>
            <option value="">受付終了を除く</option>
            {Object.entries(GRANT_STATUS_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-official`}>
          公式情報の確認先
          <select id={`${idPrefix}-official`} name="official" defaultValue={query.officialOnly ? '1' : '0'} className={`${fieldClass} mt-1`}>
            <option value="1">確認先がある制度のみ</option>
            <option value="0">確認先がない制度も含む</option>
          </select>
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-deadlineFrom`}>
          申請期限（開始）
          <input id={`${idPrefix}-deadlineFrom`} name="deadlineFrom" type="date" defaultValue={query.deadlineFrom ?? ''} className={`${fieldClass} mt-1`} />
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-deadlineTo`}>
          申請期限（終了）
          <input id={`${idPrefix}-deadlineTo`} name="deadlineTo" type="date" defaultValue={query.deadlineTo ?? ''} className={`${fieldClass} mt-1`} />
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-amountMin`}>
          支援額の下限（万円）
          <input id={`${idPrefix}-amountMin`} name="amountMin" type="number" min="0" inputMode="numeric" defaultValue={query.amountMin ?? ''} className={`${fieldClass} mt-1`} />
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-amountMax`}>
          支援額の上限（万円）
          <input id={`${idPrefix}-amountMax`} name="amountMax" type="number" min="0" inputMode="numeric" defaultValue={query.amountMax ?? ''} className={`${fieldClass} mt-1`} />
        </label>
        <label className="text-sm font-bold text-navy" htmlFor={`${idPrefix}-sort`}>
          並び順
          <select id={`${idPrefix}-sort`} name="sort" defaultValue={query.sort} className={`${fieldClass} mt-1`}>
            {Object.entries(SORT_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="min-h-11 rounded-lg bg-navy px-6 py-2.5 font-bold text-white hover:bg-navy-soft focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2">この条件で検索</button>
        <Link href="/grants/" className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-navy px-6 py-2 font-bold text-navy hover:bg-wash">すべての条件を解除</Link>
      </div>
    </form>
  );
}

function ActiveFilters({ query }: { query: GrantQuery }) {
  const filters: { key: string; label: string }[] = [];
  if (query.q) filters.push({ key: 'q', label: `キーワード：${query.q}` });
  if (query.audience) filters.push({ key: 'audience', label: query.audience === 'individual' ? '個人・家族向け' : '事業者・団体向け' });
  if (query.pref) filters.push({ key: 'pref', label: query.pref });
  if (query.municipality) filters.push({ key: 'municipality', label: query.municipality });
  if (query.category) filters.push({ key: 'cat', label: CATEGORY_LABELS[query.category] });
  if (query.purpose) filters.push({ key: 'purpose', label: PURPOSE_LABELS[query.purpose] });
  if (query.supportType) filters.push({ key: 'supportType', label: SUPPORT_TYPE_LABELS[query.supportType] });
  if (query.provider) filters.push({ key: 'provider', label: TYPE_LABELS[query.provider as keyof typeof TYPE_LABELS] ?? query.provider });
  if (query.status) filters.push({ key: 'status', label: GRANT_STATUS_LABELS[query.status] });
  if (!query.officialOnly) filters.push({ key: 'official', label: '公式確認先なしを含む' });
  if (query.deadlineFrom) filters.push({ key: 'deadlineFrom', label: `${query.deadlineFrom}以降` });
  if (query.deadlineTo) filters.push({ key: 'deadlineTo', label: `${query.deadlineTo}まで` });
  if (query.amountMin !== null) filters.push({ key: 'amountMin', label: `${query.amountMin}万円以上` });
  if (query.amountMax !== null) filters.push({ key: 'amountMax', label: `${query.amountMax}万円以下` });
  if (!filters.length) return null;
  return (
    <div className="mb-6" aria-label="選択中の検索条件">
      <p className="mb-2 text-sm font-bold text-navy">選択中の条件</p>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Link key={filter.key} href={grantsHref(query, { [filter.key]: null })} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/30 bg-white px-4 py-2 text-sm font-bold text-navy hover:bg-wash">
            {filter.label}<span aria-hidden="true">×</span><span className="sr-only">を解除</span>
          </Link>
        ))}
        <Link href="/grants/" className="inline-flex min-h-11 items-center px-2 text-sm font-bold text-navy underline underline-offset-4">すべて解除</Link>
      </div>
    </div>
  );
}

function Pagination({ query, page, pageCount }: { query: GrantQuery; page: number; pageCount: number }) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1).filter((item) => item === 1 || item === pageCount || Math.abs(item - page) <= 2);
  return (
    <nav aria-label="検索結果のページ" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && <Link href={grantsHref(query, { page: String(page - 1) })} className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 font-bold text-navy">前へ</Link>}
      {pages.map((item, index) => (
        <span key={item} className="contents">
          {index > 0 && pages[index - 1] !== item - 1 && <span aria-hidden="true" className="px-1">…</span>}
          <Link href={grantsHref(query, { page: String(item) })} aria-current={item === page ? 'page' : undefined} className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border font-bold ${item === page ? 'border-navy bg-navy text-white' : 'border-line bg-white text-navy'}`}>{item}</Link>
        </span>
      ))}
      {page < pageCount && <Link href={grantsHref(query, { page: String(page + 1) })} className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 font-bold text-navy">次へ</Link>}
    </nav>
  );
}

export default async function GrantsListPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const rawParams = await searchParams;
  const focusSearch = (Array.isArray(rawParams.focus) ? rawParams.focus[0] : rawParams.focus) === 'search';
  const query = normalizeGrantQuery(rawParams);
  const result = queryGrants(getAllGrantsUnfiltered(), query);
  const stats = getGrantQualityStats();

  return (
    <>
      <div className="border-b-4 border-accent bg-navy py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="パンくず" className="mb-4 text-xs text-white/70"><Link href="/" className="hover:underline">ホーム</Link><span className="mx-2" aria-hidden="true">/</span><span aria-current="page">制度を探す</span></nav>
          <h1 className="mb-3 text-2xl font-black tracking-wide text-white sm:text-3xl">地域・対象・目的から支援制度を探す</h1>
          <p className="text-sm leading-7 text-white/85">公式情報の確認先がある制度：{stats.officialLinked.toLocaleString('ja-JP')}件</p>
          <p className="text-xs leading-6 text-white/70">総掲載数{stats.total.toLocaleString('ja-JP')}件。複数カテゴリに該当する制度があるため、カテゴリ別件数の合計とは一致しません。</p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <details open={focusSearch || hasSearchConditions(rawParams)} className="mb-6 rounded-xl border border-line bg-card p-4 lg:hidden">
          <summary className="min-h-11 cursor-pointer py-2 font-bold text-navy">検索条件を指定する</summary>
          <div className="pt-5"><SearchFields query={query} idPrefix="mobile" /></div>
        </details>
        <section aria-labelledby="filter-title" className="mb-8 hidden rounded-2xl border border-line bg-card p-6 shadow-sm lg:block">
          <h2 id="filter-title" className="mb-5 text-xl font-black text-navy">検索条件</h2>
          <SearchFields query={query} idPrefix="desktop" />
        </section>

        <ActiveFilters query={query} />

        <div className="mb-5 flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-black text-navy">検索結果</h2>
            <p className="mt-1 text-sm text-muted"><strong className="text-ink">{result.total.toLocaleString('ja-JP')}件</strong>中 {result.total ? (result.page - 1) * 24 + 1 : 0}〜{Math.min(result.page * 24, result.total)}件を表示</p>
          </div>
          <p className="text-sm text-muted">{SORT_LABELS[query.sort]}</p>
        </div>

        {result.items.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {result.items.map((grant) => <GrantCard key={grant.slug} grant={grant} />)}
          </div>
        ) : (
          <section className="rounded-2xl border border-line bg-wash p-6 sm:p-8" aria-labelledby="no-results-title">
            <h2 id="no-results-title" className="text-xl font-black text-navy">該当する制度が見つかりませんでした</h2>
            <p className="mt-2 leading-7 text-ink">条件を少し広げると、候補が見つかることがあります。</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {(query.pref || query.municipality) && <li><Link href={grantsHref(query, { pref: null, municipality: null })} className="inline-flex min-h-11 items-center font-bold text-navy underline underline-offset-4">地域を全国へ広げる</Link></li>}
              <li><Link href={grantsHref(query, { status: 'closed' })} className="inline-flex min-h-11 items-center font-bold text-navy underline underline-offset-4">受付終了の制度を確認する</Link></li>
              {query.q && <li><Link href={grantsHref(query, { q: query.q.split(/[\s　]+/)[0] ?? '' })} className="inline-flex min-h-11 items-center font-bold text-navy underline underline-offset-4">キーワードを短くして探す</Link></li>}
              {query.purpose && <li><Link href={grantsHref(query, { purpose: null, cat: query.category ?? null })} className="inline-flex min-h-11 items-center font-bold text-navy underline underline-offset-4">同じカテゴリから探す</Link></li>}
            </ul>
          </section>
        )}

        <Pagination query={query} page={result.page} pageCount={result.pageCount} />

        <aside className="mt-10 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-7 text-amber-950">
          <p className="font-bold">申請前に公式情報をご確認ください</p>
          <p>掲載情報だけで対象可否は確定しません。公募回や予算により条件が変わるため、各制度の公式募集要項と担当窓口で最新情報をご確認ください。</p>
        </aside>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: '支援制度を探す', url: toSiteUrl('/grants/'), numberOfItems: stats.officialLinked }) }} />
    </>
  );
}
