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
    concurrency: 6,
    json: false,
    prefixes: [],
    slugs: [],
    timeoutMs: 60000,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--concurrency') {
      args.concurrency = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    } else if (arg === '--json') {
      args.json = true;
    } else if (arg === '--prefix') {
      args.prefixes.push(argv[index + 1] || '');
      index += 1;
    } else if (arg === '--slug') {
      args.slugs.push(...String(argv[index + 1] || '').split(',').map((slug) => slug.trim()).filter(Boolean));
      index += 1;
    } else if (arg === '--timeout-ms') {
      args.timeoutMs = Number.parseInt(argv[index + 1] || '', 10);
      index += 1;
    }
  }

  if (!Number.isFinite(args.concurrency) || args.concurrency < 1) args.concurrency = 6;
  if (!Number.isFinite(args.timeoutMs) || args.timeoutMs < 1000) args.timeoutMs = 60000;

  return args;
}

function listVerifiedFiles() {
  return fs
    .readdirSync(dataRoot)
    .filter((file) => /^verified-.*\.ts$/.test(file))
    .sort()
    .map((file) => path.join(dataRoot, file));
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

function collectTargets(args) {
  const slugSet = new Set(args.slugs);
  const targets = [];

  for (const file of listVerifiedFiles()) {
    for (const grant of collectGrantArrays(file)) {
      const selectedBySlug = slugSet.has(grant.slug);
      const selectedByPrefix = args.prefixes.some((prefix) => prefix && grant.slug.startsWith(prefix));
      if (!selectedBySlug && !selectedByPrefix) continue;

      const urls = new Set();
      if (typeof grant.officialUrl === 'string' && grant.officialUrl) urls.add(grant.officialUrl);
      if (Array.isArray(grant.sourceUrls)) {
        for (const url of grant.sourceUrls) {
          if (typeof url === 'string' && url) urls.add(url);
        }
      }

      for (const url of urls) {
        targets.push({
          slug: grant.slug,
          title: grant.title || '',
          url,
        });
      }
    }
  }

  return targets;
}

async function checkUrl(target, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(target.url, {
      redirect: 'follow',
      signal: controller.signal,
    });

    return {
      ...target,
      finalUrl: response.url,
      ok: response.status >= 200 && response.status < 400,
      status: response.status,
    };
  } catch (error) {
    return {
      ...target,
      error: error instanceof Error ? error.message : String(error),
      ok: false,
      status: 0,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runLimited(items, concurrency, worker) {
  const results = [];
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runWorker));
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.slugs.length === 0 && args.prefixes.length === 0) {
    console.error('Usage: node scripts/check-grant-source-urls.mjs --slug slug-a,slug-b [--prefix prefix] [--timeout-ms 60000] [--concurrency 6]');
    process.exitCode = 2;
    return;
  }

  const targets = collectTargets(args);
  const results = await runLimited(targets, args.concurrency, (target) => checkUrl(target, args.timeoutMs));
  const failures = results.filter((result) => !result.ok);

  if (args.json) {
    console.log(JSON.stringify({ checked: results.length, failures: failures.length, results }, null, 2));
  } else {
    console.log(`checked: ${results.length}`);
    console.log(`failures: ${failures.length}`);
    for (const result of results) {
      const suffix = result.error ? ` (${result.error})` : '';
      console.log(`${result.status} ${result.slug} ${result.url}${suffix}`);
    }
  }

  if (failures.length > 0) {
    process.exitCode = 1;
  }
}

main().then(() => process.exit(process.exitCode || 0));
