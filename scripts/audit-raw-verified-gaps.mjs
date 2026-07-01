import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import { createRequire } from 'node:module';

const root = process.cwd();
const dataRoot = path.join(root, 'src', 'data', 'grants');
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

function parseArgs(argv) {
  const args = {
    duplicates: false,
    json: false,
    limit: 20,
    prefecture: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--duplicates') {
      args.duplicates = true;
    } else if (arg === '--json') {
      args.json = true;
    } else if (arg === '--limit') {
      args.limit = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    } else if (arg === '--prefecture') {
      args.prefecture = argv[index + 1] || null;
      index += 1;
    }
  }

  if (!Number.isFinite(args.limit) || args.limit < 1) {
    args.limit = 20;
  }

  return args;
}

function listGrantFiles() {
  return fs
    .readdirSync(dataRoot)
    .filter((file) => file.endsWith('.ts'))
    .sort()
    .map((file) => path.join(dataRoot, file));
}

function isRawSeedFile(file) {
  const basename = path.basename(file);
  return (
    /^city-batch\d+\.ts$/.test(basename) ||
    /^local(?:-batch\d+)?\.ts$/.test(basename) ||
    /^national(?:-new\d*)?\.ts$/.test(basename) ||
    /^ngo(?:-new)?\.ts$/.test(basename)
  );
}

function isVerifiedFile(file) {
  return /^verified-.*\.ts$/.test(path.basename(file));
}

function collectGrantArrays(file) {
  const exports = require(file);
  const grants = [];

  for (const value of Object.values(exports)) {
    if (!Array.isArray(value)) continue;
    for (const item of value) {
      if (item && typeof item === 'object' && typeof item.slug === 'string') {
        grants.push(item);
      }
    }
  }

  return grants;
}

function sortObjectByCount(entries) {
  return Object.fromEntries(
    [...entries].sort(([leftKey, leftCount], [rightKey, rightCount]) =>
      rightCount - leftCount || String(leftKey).localeCompare(String(rightKey), 'ja'),
    ),
  );
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = listGrantFiles();
  const rawFiles = files.filter(isRawSeedFile);
  const verifiedFiles = files.filter(isVerifiedFile);
  const verifiedSlugs = new Set();
  const rawBySlug = new Map();

  for (const file of verifiedFiles) {
    for (const grant of collectGrantArrays(file)) {
      verifiedSlugs.add(grant.slug);
    }
  }

  for (const file of rawFiles) {
    const relativeFile = path.relative(root, file);
    for (const grant of collectGrantArrays(file)) {
      if (!rawBySlug.has(grant.slug)) {
        rawBySlug.set(grant.slug, []);
      }
      rawBySlug.get(grant.slug).push({
        slug: grant.slug,
        title: grant.title || '',
        organization: grant.organization || '',
        prefecture: grant.prefecture || '',
        category: grant.category || '',
        maxAmount: grant.maxAmount || '',
        officialUrl: grant.officialUrl || '',
        file: relativeFile,
      });
    }
  }

  const rawUnique = [...rawBySlug.values()].map((entries) => entries[0]);
  const gaps = rawUnique
    .filter((grant) => !verifiedSlugs.has(grant.slug))
    .filter((grant) => !args.prefecture || grant.prefecture === args.prefecture)
    .sort((left, right) =>
      String(left.prefecture).localeCompare(String(right.prefecture), 'ja') ||
      String(left.organization).localeCompare(String(right.organization), 'ja') ||
      String(left.slug).localeCompare(String(right.slug)),
    );

  const duplicateRawSlugs = [...rawBySlug.entries()]
    .filter(([, entries]) => entries.length > 1)
    .map(([slug, entries]) => ({
      slug,
      count: entries.length,
      entries,
    }))
    .sort((left, right) => String(left.slug).localeCompare(String(right.slug)));

  const byPrefecture = new Map();
  const byCategory = new Map();
  const byFile = new Map();

  for (const gap of gaps) {
    byPrefecture.set(gap.prefecture, (byPrefecture.get(gap.prefecture) || 0) + 1);
    byCategory.set(gap.category, (byCategory.get(gap.category) || 0) + 1);
    byFile.set(gap.file, (byFile.get(gap.file) || 0) + 1);
  }

  const summary = {
    rawFiles: rawFiles.length,
    verifiedFiles: verifiedFiles.length,
    rawUnique: rawUnique.length,
    verifiedUnique: verifiedSlugs.size,
    gaps: gaps.length,
    duplicateRawSlugs: duplicateRawSlugs.length,
    byPrefecture: sortObjectByCount(byPrefecture),
    byCategory: sortObjectByCount(byCategory),
    byFile: sortObjectByCount(byFile),
    sampleGaps: gaps.slice(0, args.limit),
    sampleDuplicateRawSlugs: duplicateRawSlugs.slice(0, args.limit),
  };

  if (args.json) {
    console.log(JSON.stringify(summary, null, 2));
    return;
  }

  console.log(`raw files: ${summary.rawFiles}`);
  console.log(`verified files: ${summary.verifiedFiles}`);
  console.log(`raw unique slugs: ${summary.rawUnique}`);
  console.log(`verified unique slugs: ${summary.verifiedUnique}`);
  console.log(`unverified raw slugs: ${summary.gaps}`);
  console.log(`duplicate raw slugs: ${summary.duplicateRawSlugs}`);
  console.log('');
  console.log('unverified by prefecture:');
  for (const [prefecture, count] of Object.entries(summary.byPrefecture)) {
    console.log(`- ${prefecture || '(unknown)'}: ${count}`);
  }
  console.log('');
  console.log(`sample gaps (limit ${args.limit}):`);
  for (const gap of summary.sampleGaps) {
    console.log(`- ${gap.prefecture} ${gap.organization} ${gap.slug}: ${gap.title} (${gap.file})`);
  }

  if (args.duplicates) {
    console.log('');
    console.log(`sample duplicate raw slugs (limit ${args.limit}):`);
    for (const duplicate of summary.sampleDuplicateRawSlugs) {
      console.log(`- ${duplicate.slug} (${duplicate.count} entries)`);
      for (const entry of duplicate.entries) {
        console.log(
          `  - ${entry.prefecture || '(unknown)'} ${entry.organization || '(unknown)'}: ${entry.title} (${entry.file})`,
        );
      }
    }
  }
}

main();
