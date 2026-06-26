import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import { createRequire } from 'node:module';

const root = process.cwd();
const require = createRequire(import.meta.url);
const ts = require('typescript');
const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveAlias(request, parent, isMain, options) {
  if (request.startsWith('@/')) {
    return originalResolveFilename.call(
      this,
      path.join(root, 'src', request.slice(2)),
      parent,
      isMain,
      options,
    );
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};

require.extensions['.ts'] = function compileTypeScript(module, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2017,
      esModuleInterop: true,
      verbatimModuleSyntax: false,
    },
    fileName: filename,
  });

  module._compile(output.outputText, filename);
};

const {
  getAllGrantsUnfiltered,
  getAllGrants,
  getExpiredGrants,
  getGrantQualityStats,
  getOfficialLinkedGrants,
  grantMatchesCategory,
  hasOfficialSource,
  isGrantExpired,
  isManuallyVerifiedGrant,
} = require('../src/lib/grants.ts');
const { CATEGORY_LABELS, PREFECTURES } = require('../src/lib/types.ts');

const prefectures = PREFECTURES.filter((prefecture) => prefecture !== '全国');
const categories = Object.keys(CATEGORY_LABELS);
const activeGrants = getAllGrants();
const allGrants = getAllGrantsUnfiltered();
const officialLinkedGrants = getOfficialLinkedGrants();
const expiredGrants = getExpiredGrants();
const stats = getGrantQualityStats();

const byCategory = Object.fromEntries(
  categories.map((category) => [
    category,
    {
      label: CATEGORY_LABELS[category],
      officialLinked: officialLinkedGrants.filter((grant) => grantMatchesCategory(grant, category)).length,
      manuallyVerified: officialLinkedGrants.filter(
        (grant) => grantMatchesCategory(grant, category) && isManuallyVerifiedGrant(grant),
      ).length,
    },
  ]),
);

const byPrefecture = Object.fromEntries(
  prefectures.map((prefecture) => {
    const localOfficial = officialLinkedGrants.filter((grant) => grant.prefecture === prefecture);
    const localVerified = localOfficial.filter(isManuallyVerifiedGrant);
    const categoryCounts = Object.fromEntries(
      categories.map((category) => [
        category,
        localOfficial.filter((grant) => grantMatchesCategory(grant, category)).length,
      ]),
    );

    return [
      prefecture,
      {
        localOfficial: localOfficial.length,
        localManuallyVerified: localVerified.length,
        coveredCategories: Object.values(categoryCounts).filter((count) => count > 0).length,
        categoryCounts,
      },
    ];
  }),
);

const activeExpiredLeaks = officialLinkedGrants.filter((grant) => isGrantExpired(grant));
const sourceDebt = activeGrants.filter((grant) => !hasOfficialSource(grant)).length;
const verificationDebt = officialLinkedGrants.filter((grant) => !isManuallyVerifiedGrant(grant)).length;
const prefecturesWithoutLocalOfficial = prefectures.filter(
  (prefecture) => byPrefecture[prefecture].localOfficial === 0,
);
const prefecturesWithoutLocalVerified = prefectures.filter(
  (prefecture) => byPrefecture[prefecture].localManuallyVerified === 0,
);

const summary = {
  totals: {
    rawDefinitionsAfterDedupe: allGrants.length,
    activePublished: stats.active,
    expired: stats.expired,
    officialLinkedActive: stats.officialLinked,
    manuallyVerifiedActive: stats.manuallyVerified,
    activeWithoutOfficialSource: sourceDebt,
    officialLinkedButNotManuallyVerified: verificationDebt,
  },
  typeCounts: {
    national: officialLinkedGrants.filter((grant) => grant.type === 'national').length,
    local: officialLinkedGrants.filter((grant) => grant.type === 'local').length,
    ngo: officialLinkedGrants.filter((grant) => grant.type === 'ngo').length,
  },
  deadline: {
    activeOfficialWithDeadlineDate: officialLinkedGrants.filter((grant) => grant.deadlineDate).length,
    expiredHiddenFromOfficialLists: expiredGrants.length,
    activeExpiredLeaks: activeExpiredLeaks.map((grant) => grant.slug),
  },
  prefectureCoverage: {
    totalPrefectures: prefectures.length,
    withLocalOfficial: prefectures.length - prefecturesWithoutLocalOfficial.length,
    withLocalManuallyVerified: prefectures.length - prefecturesWithoutLocalVerified.length,
    withoutLocalOfficial: prefecturesWithoutLocalOfficial,
    withoutLocalManuallyVerified: prefecturesWithoutLocalVerified,
  },
  byCategory,
  byPrefecture,
};

const failures = [];
if (prefectures.length !== 47) {
  failures.push({ check: 'prefecture-master', message: `都道府県マスタが47件ではありません: ${prefectures.length}` });
}
if (activeExpiredLeaks.length > 0) {
  failures.push({
    check: 'expired-active-leak',
    message: '期限切れ制度が通常の公式リンクあり一覧に混入しています。',
    slugs: activeExpiredLeaks.map((grant) => grant.slug),
  });
}
if (stats.officialLinked !== officialLinkedGrants.length) {
  failures.push({
    check: 'stats-consistency',
    message: 'getGrantQualityStats().officialLinked と getOfficialLinkedGrants().length が一致しません。',
  });
}

console.log(JSON.stringify({ ...summary, failures: failures.length }, null, 2));

if (failures.length > 0) {
  console.log(JSON.stringify(failures, null, 2));
  process.exitCode = 1;
}
