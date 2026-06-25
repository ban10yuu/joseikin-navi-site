import fs from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import path from 'node:path';
import { URL } from 'node:url';

const root = path.join(process.cwd(), 'out');
const ownHosts = new Set(['joseikin-navi-site.vercel.app']);
const concurrency = Number(process.env.LINK_AUDIT_CONCURRENCY || 24);
const timeoutMs = Number(process.env.LINK_AUDIT_TIMEOUT_MS || 12000);

function decodeHtmlAttribute(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&#x2F;/g, '/')
    .replace(/&#47;/g, '/');
}

function walkHtmlAndXml(dir) {
  const entries = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      entries.push(...walkHtmlAndXml(absolutePath));
    } else if (/\.(html|xml)$/.test(entry.name)) {
      entries.push(absolutePath);
    }
  }

  return entries;
}

function localPathCandidates(pathname) {
  const base = pathname.endsWith('/') ? `${pathname}index.html` : pathname;
  return [
    path.join(root, base),
    path.join(root, `${base}.html`),
    path.join(root, base, 'index.html'),
  ];
}

function localExists(rawUrl) {
  let pathname;

  try {
    pathname = new URL(rawUrl, 'https://local.test').pathname;
  } catch {
    pathname = rawUrl.split('?')[0].split('#')[0];
  }

  const names = [pathname];
  try {
    const decoded = decodeURIComponent(pathname);
    if (decoded !== pathname) names.push(decoded);
  } catch {
    // Keep the original path when percent decoding fails.
  }

  return names.some((name) => localPathCandidates(name).some(fs.existsSync));
}

function request(method, rawUrl, redirects = 0) {
  return new Promise((resolve) => {
    let parsed;

    try {
      parsed = new URL(rawUrl);
    } catch {
      resolve({ ok: false, status: 0, method, error: 'bad url' });
      return;
    }

    const client = parsed.protocol === 'http:' ? http : https;
    const req = client.request(
      parsed,
      {
        method,
        timeout: timeoutMs,
        rejectUnauthorized: false,
        headers: {
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
      },
      (res) => {
        const status = res.statusCode || 0;
        if (status >= 300 && status < 400 && res.headers.location && redirects < 8) {
          res.resume();
          resolve(request(method, new URL(res.headers.location, parsed).toString(), redirects + 1));
          return;
        }

        res.resume();
        resolve({ ok: status >= 200 && status < 400, status, method });
      },
    );

    req.on('timeout', () => {
      req.destroy();
      resolve({ ok: false, status: 0, method, error: 'timeout' });
    });
    req.on('error', (error) => {
      resolve({ ok: false, status: 0, method, error: error.code || error.message });
    });
    req.end();
  });
}

async function auditExternal(rawUrl) {
  let result = await request('HEAD', rawUrl);
  let usedGet = false;

  if (!result.ok && [0, 403, 405, 406, 429, 500, 501, 502, 503].includes(result.status)) {
    result = await request('GET', rawUrl);
    usedGet = true;
  }

  return { rawUrl, ...result, usedGet };
}

async function mapLimit(items, limit, callback) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await callback(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function collectReferences() {
  if (!fs.existsSync(root)) {
    throw new Error('out/ does not exist. Run `npm run build` before `npm run audit:links`.');
  }

  const files = walkHtmlAndXml(root);
  const references = [];
  const attrPattern = /\b(?:href|src)=["']([^"']+)["']/g;

  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');

    for (const match of html.matchAll(attrPattern)) {
      const raw = decodeHtmlAttribute(match[1].trim());
      if (
        !raw ||
        raw.startsWith('#') ||
        raw.startsWith('mailto:') ||
        raw.startsWith('tel:') ||
        raw.startsWith('data:') ||
        raw.includes('fonts.gstatic.com') ||
        raw.includes('fonts.googleapis.com') ||
        raw.includes('/_next/static/chunks/')
      ) {
        continue;
      }

      references.push({ file: path.relative(root, file), raw });
    }
  }

  return { files, references };
}

async function main() {
  const { files, references } = collectReferences();
  const uniqueReferences = new Map();

  for (const reference of references) {
    if (!uniqueReferences.has(reference.raw)) {
      uniqueReferences.set(reference.raw, reference);
    }
  }

  const broken = [];
  let local = 0;
  const externals = [];

  for (const [raw, reference] of uniqueReferences) {
    let parsed = null;
    try {
      parsed = new URL(raw);
    } catch {
      // Relative URL.
    }

    const isOwnHost = parsed && ownHosts.has(parsed.hostname);
    if (raw.startsWith('/') || raw.startsWith('./') || raw.startsWith('../') || isOwnHost) {
      const localUrl = isOwnHost ? `${parsed.pathname}${parsed.search}${parsed.hash}` : raw;
      if (localExists(localUrl)) {
        local += 1;
      } else {
        broken.push({ ...reference, status: 'LOCAL_MISSING' });
      }
      continue;
    }

    if (/^https?:\/\//.test(raw)) {
      externals.push(reference);
    }
  }

  const externalResults = await mapLimit(externals, concurrency, (reference) => auditExternal(reference.raw));
  let head = 0;
  let getAfterHead = 0;

  for (let index = 0; index < externals.length; index += 1) {
    const result = externalResults[index];
    if (result.ok) {
      if (result.usedGet) getAfterHead += 1;
      else head += 1;
    } else {
      broken.push({
        file: externals[index].file,
        raw: externals[index].raw,
        status: result.status,
        error: result.error,
        method: result.method,
      });
    }
  }

  const ok = local + head + getAfterHead;
  const summary = {
    files: files.length,
    extracted: references.length,
    audited: local + externals.length,
    ok,
    broken: broken.length,
    local,
    head,
    getAfterHead,
  };

  console.log(JSON.stringify(summary, null, 2));

  if (broken.length > 0) {
    console.log(JSON.stringify(broken.slice(0, 80), null, 2));
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
