import { mkdir, readFile, readdir, rename, writeFile } from 'node:fs/promises';
import fs from 'node:fs';
import Module from 'node:module';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { runSeoArticlePipeline } from '../src/lib/seo-article-pipeline.mjs';

const root = process.cwd();
const dataDirectory = path.join(root, 'data', 'seo-articles');
const reportDirectory = path.join(root, 'reports', 'seo-article-pipeline');

function installTypeScriptRequireHook() {
  const require = createRequire(import.meta.url);
  const ts = require('typescript');
  const originalResolveFilename = Module._resolveFilename;
  Module._resolveFilename = function resolveAlias(request, parent, isMain, options) {
    if (request.startsWith('@/')) return originalResolveFilename.call(this, path.join(root, 'src', request.slice(2)), parent, isMain, options);
    return originalResolveFilename.call(this, request, parent, isMain, options);
  };
  require.extensions['.ts'] = function compileTypeScript(module, filename) {
    const source = fs.readFileSync(filename, 'utf8');
    const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true, verbatimModuleSyntax: false }, fileName: filename });
    module._compile(output.outputText, filename);
  };
  return require;
}

function htmlToNormalizedText(html) {
  const decoded = String(html)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/giu, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/giu, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)))
    .replace(/&#x([a-f0-9]+);/gi, (_, value) => String.fromCodePoint(Number.parseInt(value, 16)));
  return decoded.normalize('NFKC').replace(/\s+/g, ' ').trim();
}

function tokyoDate() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

async function fetchRuntimeEvidence(truthPackets) {
  const evidence = {};
  for (const packet of truthPackets) {
    for (const source of packet.sources ?? []) {
      if (evidence[source.id]) continue;
      try {
        const response = await fetch(source.url, {
          redirect: 'follow',
          headers: { 'user-agent': 'Mozilla/5.0 (compatible; ShienseidoNaviSourceVerifier/1.0)' },
          signal: AbortSignal.timeout(20_000),
        });
        const contentType = response.headers.get('content-type') ?? '';
        const normalizedText = htmlToNormalizedText(await response.text());
        evidence[source.id] = {
          httpStatus: response.status,
          retrievedAt: tokyoDate(),
          finalUrl: response.url,
          contentType,
          normalizationVersion: 'visible-text-nfkc-v1',
          normalizedContentHash: createHash('sha256').update(normalizedText).digest('hex'),
          normalizedText,
        };
      } catch (error) {
        evidence[source.id] = { error: error instanceof Error ? error.message : String(error) };
      }
    }
  }
  return evidence;
}

function loadSiteContext() {
  const require = installTypeScriptRequireHook();
  const { getAllGrantsUnfiltered } = require('../src/lib/grants.ts');
  const redirectData = require('../data/redirects.json');
  const targetsByPath = {};
  for (const grant of getAllGrantsUnfiltered()) {
    targetsByPath[`/grant/${grant.slug}/`] = {
      officialUrls: [grant.officialUrl, ...(grant.sourceUrls ?? [])].filter(Boolean),
      indexStatus: grant.indexStatus ?? 'index',
      contentStatus: grant.contentStatus ?? 'published',
    };
  }
  return { targetsByPath, redirectSources: redirectData.map((item) => item.source) };
}

async function writeJsonAtomically(file, value) {
  const temporary = `${file}.tmp-${process.pid}`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`);
  await rename(temporary, file);
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch (error) {
    if (error?.code === 'ENOENT') return fallback;
    throw new Error(`${path.relative(root, file)} をJSONとして読み込めません: ${error.message}`);
  }
}

async function readDrafts() {
  const directory = path.join(dataDirectory, 'drafts');
  let files = [];
  try {
    files = await readdir(directory);
  } catch (error) {
    if (error?.code === 'ENOENT') return [];
    throw error;
  }

  return Promise.all(files
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => readJson(path.join(directory, file), null)))
    .then((drafts) => drafts.filter(Boolean));
}

function resultToMarkdown(report) {
  const rows = report.results.map((result) => {
    const score = result.output?.quality?.total ?? '-';
    const reason = result.output?.noindexReason ?? result.notification ?? '-';
    return `| ${result.output?.keywordId ?? '-'} | ${result.status} | ${score} | ${result.output?.indexStatus ?? '-'} | ${reason} |`;
  });
  return `# AI臭除去SEO記事パイプライン実行結果

- 実行日時: ${report.generatedAt}
- 対象キーワード: ${report.summary.total}
- 人手確認待ち: ${report.summary.reviewReady}
- 要修正・停止: ${report.summary.blocked}
- 自動公開: 無効

| キーワードID | 状態 | 品質スコア | index | 理由 |
|---|---:|---:|---:|---|
${rows.join('\n') || '| - | stopped | - | - | キーワードバックログが空です |'}

## 公開ゲート

品質スコアにかかわらず、成果物は \`draft\`・\`noindex\` のままです。画像作成、ビルド、本番デプロイは人手確認後に別工程で実行してください。
`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const auditAll = args.has('--audit');
  const dryRun = args.has('--dry-run') || auditAll;
  const config = await readJson(path.join(dataDirectory, 'pipeline-config.json'), {});
  const backlogDocument = await readJson(path.join(dataDirectory, 'keyword-backlog.json'), { items: [] });
  const truthDocument = await readJson(path.join(dataDirectory, 'truth-packets.json'), { items: [] });
  const drafts = await readDrafts();
  const backlog = Array.isArray(backlogDocument.items) ? backlogDocument.items : [];
  const truthPackets = Array.isArray(truthDocument.items) ? truthDocument.items : [];
  const pending = backlog.filter((item) => item?.status === 'pending');
  const targets = auditAll ? pending : pending.slice(0, 1);
  const runtimeEvidenceBySourceId = await fetchRuntimeEvidence(truthPackets);
  const siteContext = loadSiteContext();
  const results = targets.length === 0
    ? [runSeoArticlePipeline({ backlog: [], truthPackets, articleDrafts: drafts, config, runtimeEvidenceBySourceId, siteContext })]
    : targets.map((target) => runSeoArticlePipeline({
        backlog: [target],
        truthPackets,
        articleDrafts: drafts,
        config,
        runtimeEvidenceBySourceId,
        siteContext,
      }));
  const generatedAt = new Date().toISOString();
  const report = {
    schemaVersion: 1,
    generatedAt,
    mode: auditAll ? 'audit' : 'next',
    summary: {
      total: targets.length,
      reviewReady: results.filter((result) => result.status === 'reviewReady').length,
      blocked: results.filter((result) => !['reviewReady', 'stopped'].includes(result.status)).length,
      stopped: results.filter((result) => result.status === 'stopped').length,
      autoPublishEnabled: false,
    },
    results,
  };

  await mkdir(reportDirectory, { recursive: true });
  await writeFile(path.join(reportDirectory, 'latest.json'), `${JSON.stringify(report, null, 2)}\n`);
  await writeFile(path.join(reportDirectory, 'latest.md'), resultToMarkdown(report));

  if (!dryRun && targets.length > 0) {
    const resultByKeywordId = new Map(results.map((result) => [result.output?.keywordId, result]));
    const updatedItems = backlog.map((item) => {
      const result = resultByKeywordId.get(item.id);
      if (!result) return item;
      return {
        ...item,
        status: result.status,
        pipelineCheckedAt: generatedAt,
        pipelineResultCode: result.code,
      };
    });
    await writeJsonAtomically(path.join(dataDirectory, 'keyword-backlog.json'), { ...backlogDocument, updatedAt: tokyoDate(), items: updatedItems });
  }

  console.log(JSON.stringify(report.summary, null, 2));
  for (const result of results) {
    console.log(`[${result.status}] ${result.output?.keyword ?? result.notification ?? result.code}`);
  }

  if (auditAll && report.summary.blocked > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
