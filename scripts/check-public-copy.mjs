import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const PUBLIC_COPY_RULES = [
  '助成金診断クイズ',
  '診断クイズを試す',
  '全国2,500件以上',
  '2,500件以上の助成金',
  '必要書類チェックリストを掲載しています',
  '公式サイトで申請する',
  '必ず受給できる',
  '条件を満たせばほぼ確実',
  '申請すれば受け取れる',
  '生成データ',
  'HTTP 200',
  'Last-Modified',
  '既存データに重複がないことを確認',
  '新規公式確認済み制度として追加',
  '補正理由',
  'Search Consoleで表示がある',
];

export function findPublicCopyViolations(files) {
  return files.flatMap(({ path: file, content }) =>
    content.split(/\r?\n/).flatMap((lineText, index) =>
      PUBLIC_COPY_RULES.flatMap((phrase) =>
        lineText.includes(phrase)
          ? [{ file, line: index + 1, phrase, text: lineText.trim() }]
          : []
      )
    )
  );
}

async function collectTsxFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectTsxFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.tsx') ? [entryPath] : [];
  }));
  return nested.flat();
}

export async function scanPublicCopy(rootDirectory = process.cwd()) {
  const roots = ['src/app', 'src/components'].map((item) => path.join(rootDirectory, item));
  const paths = (await Promise.all(roots.map(collectTsxFiles))).flat();
  const files = await Promise.all(paths.map(async (file) => ({
    path: path.relative(rootDirectory, file),
    content: await readFile(file, 'utf8'),
  })));
  return findPublicCopyViolations(files);
}

async function main() {
  const violations = await scanPublicCopy();
  if (violations.length === 0) {
    console.log('公開画面の禁止表現は見つかりませんでした。');
    return;
  }

  for (const violation of violations) {
    console.error(`${violation.file}:${violation.line} [${violation.phrase}] ${violation.text}`);
  }
  process.exitCode = 1;
}

const isDirectRun = process.argv[1]
  ? import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
  : false;

if (isDirectRun) {
  await main();
}
