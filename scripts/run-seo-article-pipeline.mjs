import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { runSeoArticlePipeline } from '../src/lib/seo-article-pipeline.mjs';

const root = process.cwd();
const dataDirectory = path.join(root, 'data', 'seo-articles');
const reportDirectory = path.join(root, 'reports', 'seo-article-pipeline');

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
  const config = await readJson(path.join(dataDirectory, 'pipeline-config.json'), {});
  const backlogDocument = await readJson(path.join(dataDirectory, 'keyword-backlog.json'), { items: [] });
  const truthDocument = await readJson(path.join(dataDirectory, 'truth-packets.json'), { items: [] });
  const drafts = await readDrafts();
  const backlog = Array.isArray(backlogDocument.items) ? backlogDocument.items : [];
  const truthPackets = Array.isArray(truthDocument.items) ? truthDocument.items : [];
  const pending = backlog.filter((item) => item?.status === 'pending');
  const targets = auditAll ? pending : pending.slice(0, 1);
  const results = targets.length === 0
    ? [runSeoArticlePipeline({ backlog: [], truthPackets, articleDrafts: drafts, config })]
    : targets.map((target) => runSeoArticlePipeline({
        backlog: [target],
        truthPackets,
        articleDrafts: drafts,
        config,
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
