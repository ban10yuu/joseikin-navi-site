import { build } from 'esbuild';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = process.cwd();
const generatedDir = path.join(root, 'src', 'generated');
const bundlePath = path.join(root, '.tmp-grants-source.mjs');
const outputPath = path.join(generatedDir, 'grants-runtime.json');
const publicRuntimeDir = path.join(root, 'public', 'data', 'grants-runtime');
const detailShardCount = 256;
const relatedShardCount = 64;
const relatedCardShardCount = 256;
const indexPartCount = 4;
const businessAudiences = new Set([
  'soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization',
]);

function hashSlug(slug) {
  let hash = 2166136261;
  for (let index = 0; index < slug.length; index += 1) {
    hash = Math.imul(hash ^ slug.charCodeAt(index), 16777619);
  }
  return hash >>> 0;
}

function detailShard(slug) {
  return (hashSlug(slug) % detailShardCount).toString(16).padStart(2, '0');
}

function relatedShard(slug) {
  return (hashSlug(slug) % relatedShardCount).toString(16).padStart(2, '0');
}

function relatedCardShard(slug) {
  return (hashSlug(slug) % relatedCardShardCount)
    .toString(16)
    .padStart(2, '0');
}

function filterFileKey(value) {
  return hashSlug(value).toString(16).padStart(8, '0');
}

function runtimeGrant(grant) {
  const {
    searchText: _searchText,
    sourceNote: _sourceNote,
    noindexReason: _noindexReason,
    statusOverride: _statusOverride,
    redirectFrom: _redirectFrom,
    ...result
  } = grant;
  return result;
}

function indexGrant(grant) {
  return [
    grant.slug,
    grant.title,
    grant.organization,
    grant.type,
    grant.maxAmount,
    grant.maxAmountNum,
    grant.category,
    grant.relatedCategories ?? null,
    grant.prefecture,
    grant.tags,
    grant.eligibility,
    grant.applicationPeriod,
    grant.deadlineDate ?? null,
    grant.description,
    grant.officialUrl,
    grant.sourceName ?? null,
    grant.sourceUrls ?? null,
    grant.verifiedAt ?? null,
    grant.publishedAt,
    grant.supportType,
    grant.audiences,
    grant.primaryAudience,
    grant.purposes,
    grant.primaryPurpose,
    grant.municipality,
    grant.status,
    grant.verificationMethod,
    grant.contentUpdatedAt,
    grant.contentStatus,
    grant.indexStatus,
    grant.humanReviewedAt,
    grant.monetizationAllowed,
  ];
}

function relatedGrant(grant) {
  return [
    grant.slug,
    grant.title,
    grant.organization,
    grant.type,
    grant.maxAmount,
    grant.category,
    grant.prefecture,
    grant.eligibility,
    grant.applicationPeriod,
    grant.deadlineDate ?? null,
    grant.officialUrl,
    grant.sourceUrls ?? null,
    grant.verifiedAt ?? null,
    grant.humanReviewedAt ?? null,
    grant.status,
    grant.supportType,
    grant.budgetMayCloseEarly ?? false,
    grant.primaryAudience,
    grant.primaryPurpose,
  ];
}

await build({
  entryPoints: [path.join(root, 'src', 'lib', 'grants-source.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outfile: bundlePath,
  tsconfig: path.join(root, 'tsconfig.json'),
  logLevel: 'warning',
});

try {
  const source = await import(`${pathToFileURL(bundlePath).href}?t=${Date.now()}`);
  const grants = source.getAllGrantsUnfiltered().map(runtimeGrant);
  const stats = source.getGrantQualityStats();
  const shards = Object.fromEntries(
    Array.from({ length: detailShardCount }, (_, index) => [
      index.toString(16).padStart(2, '0'),
      [],
    ])
  );
  grants.forEach((grant) => shards[detailShard(grant.slug)].push(grant));
  const relatedCatalog = source.buildRelatedGrantCatalog(grants, 6);
  const relatedShards = Object.fromEntries(
    Array.from({ length: relatedShardCount }, (_, index) => [
      index.toString(16).padStart(2, '0'),
      {},
    ])
  );
  const relatedCardShards = Object.fromEntries(
    Array.from({ length: relatedCardShardCount }, (_, index) => [
      index.toString(16).padStart(2, '0'),
      {},
    ])
  );
  relatedCatalog.forEach((related, slug) => {
    relatedShards[relatedShard(slug)][slug] = related.map((grant) => grant.slug);
    related.forEach((grant) => {
      relatedCardShards[relatedCardShard(grant.slug)][grant.slug] =
        relatedGrant(grant);
    });
  });

  await mkdir(generatedDir, { recursive: true });
  await rm(publicRuntimeDir, { recursive: true, force: true });
  await mkdir(publicRuntimeDir, { recursive: true });
  await writeFile(
    outputPath,
    `${JSON.stringify({
      grants,
      duplicatedSlugsRemoved: stats.duplicatedSlugsRemoved,
    })}\n`,
    'utf8'
  );
  const indexRows = grants.map(indexGrant);
  const indexPartSize = Math.ceil(indexRows.length / indexPartCount);
  await Promise.all(
    Array.from({ length: indexPartCount }, (_, index) =>
      writeFile(
        path.join(publicRuntimeDir, `index-${index}.json`),
        `${JSON.stringify({
          grants: indexRows.slice(
            index * indexPartSize,
            (index + 1) * indexPartSize
          ),
          duplicatedSlugsRemoved:
            index === 0 ? stats.duplicatedSlugsRemoved : 0,
        })}\n`,
        'utf8'
      )
    )
  );
  const initialListingGrants = source
    .getOfficialLinkedGrants()
    .sort((left, right) =>
      (right.sourceCheckedAt ?? right.verifiedAt ?? right.contentUpdatedAt ?? right.publishedAt)
        .localeCompare(left.sourceCheckedAt ?? left.verifiedAt ?? left.contentUpdatedAt ?? left.publishedAt)
    )
    .slice(0, 24);
  await writeFile(
    path.join(publicRuntimeDir, 'listing-initial.json'),
    `${JSON.stringify({
      grants: initialListingGrants.map(indexGrant),
      total: stats.total,
      officialLinked: stats.officialLinked,
    })}\n`,
    'utf8'
  );
  const prefectures = [...new Set(grants.map((grant) => grant.prefecture))]
    .filter((prefecture) => prefecture !== '全国');
  const categories = [...new Set(grants.flatMap((grant) => [
    grant.category,
    ...(grant.relatedCategories ?? []),
  ]))];
  const audienceFilters = {
    business: grants.filter((grant) =>
      grant.audiences.some((audience) => businessAudiences.has(audience))
    ),
  };
  const nationalGrants = grants.filter((grant) => grant.prefecture === '全国');
  const prefectureFilters = Object.fromEntries(prefectures.map((prefecture) => [
    prefecture,
    grants.filter((grant) => grant.prefecture === prefecture),
  ]));
  const categoryFilters = Object.fromEntries(categories.map((category) => [
    category,
    grants.filter((grant) =>
      grant.category === category || grant.relatedCategories?.includes(category)
    ),
  ]));
  await Promise.all([
    ...Object.entries(prefectureFilters).map(([prefecture, matchingGrants]) =>
      writeFile(
        path.join(publicRuntimeDir, `filter-pref-${filterFileKey(prefecture)}.json`),
        `${JSON.stringify({ grants: matchingGrants.map(indexGrant) })}\n`,
        'utf8'
      )
    ),
    writeFile(
      path.join(publicRuntimeDir, 'filter-pref-national.json'),
      `${JSON.stringify({ grants: nationalGrants.map(indexGrant) })}\n`,
      'utf8'
    ),
    ...Object.entries(categoryFilters).map(([category, matchingGrants]) =>
      writeFile(
        path.join(publicRuntimeDir, `filter-category-${category}.json`),
        `${JSON.stringify({ grants: matchingGrants.map(indexGrant) })}\n`,
        'utf8'
      )
    ),
    ...Object.entries(audienceFilters).map(([audience, matchingGrants]) =>
      writeFile(
        path.join(publicRuntimeDir, `filter-audience-${audience}.json`),
        `${JSON.stringify({ grants: matchingGrants.map(indexGrant) })}\n`,
        'utf8'
      )
    ),
    writeFile(
      path.join(publicRuntimeDir, 'filter-manifest.json'),
      `${JSON.stringify({
        prefectures: Object.fromEntries(
          Object.entries(prefectureFilters).map(([key, value]) => [
            key,
            value.length + nationalGrants.length,
          ])
        ),
        categories: Object.fromEntries(
          Object.entries(categoryFilters).map(([key, value]) => [key, value.length])
        ),
        audiences: Object.fromEntries(
          Object.entries(audienceFilters).map(([key, value]) => [key, value.length])
        ),
      })}\n`,
      'utf8'
    ),
  ]);
  await Promise.all(
    Object.entries(shards).map(([shard, shardGrants]) =>
      writeFile(
        path.join(publicRuntimeDir, `detail-${shard}.json`),
        `${JSON.stringify(shardGrants)}\n`,
        'utf8'
      )
    )
  );
  await Promise.all(
    Object.entries(relatedShards).map(([shard, related]) =>
      writeFile(
        path.join(publicRuntimeDir, `related-${shard}.json`),
        `${JSON.stringify(related)}\n`,
        'utf8'
      )
    )
  );
  await Promise.all(
    Object.entries(relatedCardShards).map(([shard, cards]) =>
      writeFile(
        path.join(publicRuntimeDir, `related-card-${shard}.json`),
        `${JSON.stringify(cards)}\n`,
        'utf8'
      )
    )
  );

  console.log(
    `公開用制度データを生成: ${grants.length.toLocaleString('ja-JP')}件（詳細${detailShardCount}分割・関連${relatedShardCount}分割）`
  );
} finally {
  await rm(bundlePath, { force: true });
}
