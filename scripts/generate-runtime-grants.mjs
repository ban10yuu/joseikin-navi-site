import { build } from 'esbuild';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = process.cwd();
const generatedDir = path.join(root, 'src', 'generated');
const bundlePath = path.join(root, '.tmp-grants-source.mjs');
const outputPath = path.join(generatedDir, 'grants-runtime.json');

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
  const grants = source.getAllGrantsUnfiltered().map((grant) => {
    const {
      searchText: _searchText,
      sourceNote: _sourceNote,
      noindexReason: _noindexReason,
      statusOverride: _statusOverride,
      redirectFrom: _redirectFrom,
      ...runtimeGrant
    } = grant;
    return runtimeGrant;
  });
  const stats = source.getGrantQualityStats();

  await mkdir(generatedDir, { recursive: true });
  await writeFile(
    outputPath,
    `${JSON.stringify({
      grants,
      duplicatedSlugsRemoved: stats.duplicatedSlugsRemoved,
    })}\n`,
    'utf8'
  );

  console.log(
    `公開用制度データを生成: ${grants.length.toLocaleString('ja-JP')}件`
  );
} finally {
  await rm(bundlePath, { force: true });
}
