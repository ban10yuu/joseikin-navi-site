import fs from 'node:fs';
import path from 'node:path';
import { patchOpenNextHtmlCacheHeader } from '../src/lib/opennext-html-cache.mjs';

const root = process.cwd();
const targets = [
  '.open-next/server-functions/default/index.mjs',
  '.open-next/server-functions/default/handler.mjs',
];

for (const relativePath of targets) {
  const absolutePath = path.join(root, relativePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`${relativePath} がありません。先にOpenNext buildを実行してください。`);
  }

  const source = fs.readFileSync(absolutePath, 'utf8');
  fs.writeFileSync(
    absolutePath,
    patchOpenNextHtmlCacheHeader(source),
    'utf8'
  );
  console.log(`HTMLキャッシュを1時間へ短縮: ${relativePath}`);
}
