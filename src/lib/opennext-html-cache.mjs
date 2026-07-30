export const OPENNEXT_HTML_CACHE_HEADER =
  'public, max-age=0, s-maxage=31536000, must-revalidate';

export const SITE_HTML_CACHE_HEADER =
  'public, max-age=0, s-maxage=3600, must-revalidate';

const FORMATTED_RESPONSE_HEADERS_MARKER =
  '          const responseHeaders = new Headers(headers);\n';
const MINIFIED_RESPONSE_HEADERS_MARKER =
  'responseHeaders=new Headers(headers);for(let cookie of cookies)';

export function patchOpenNextHtmlCacheHeader(source) {
  const headerOccurrences =
    source.split(OPENNEXT_HTML_CACHE_HEADER).length - 1;

  if (headerOccurrences !== 1) {
    throw new Error(
      `OpenNextのHTMLキャッシュヘッダーが想定と異なります（検出: ${headerOccurrences}件）`
    );
  }

  const formattedOccurrences =
    source.split(FORMATTED_RESPONSE_HEADERS_MARKER).length - 1;
  const minifiedOccurrences =
    source.split(MINIFIED_RESPONSE_HEADERS_MARKER).length - 1;

  if (formattedOccurrences + minifiedOccurrences !== 1) {
    throw new Error(
      `OpenNextのレスポンス生成箇所が想定と異なります（検出: ${formattedOccurrences + minifiedOccurrences}件）`
    );
  }

  let patched = source.replace(
    OPENNEXT_HTML_CACHE_HEADER,
    SITE_HTML_CACHE_HEADER
  );

  if (formattedOccurrences === 1) {
    patched = patched.replace(
      FORMATTED_RESPONSE_HEADERS_MARKER,
      `${FORMATTED_RESPONSE_HEADERS_MARKER}          const isHtmlResponse = responseHeaders.get("Content-Type")?.includes("text/html") || request.headers.get("Accept")?.includes("text/html");\n          if (isHtmlResponse) {\n            responseHeaders.set("Cache-Control", "${SITE_HTML_CACHE_HEADER}");\n          }\n`
    );
  } else {
    patched = patched.replace(
      MINIFIED_RESPONSE_HEADERS_MARKER,
      `responseHeaders=new Headers(headers);(responseHeaders.get("Content-Type")?.includes("text/html")||request.headers.get("Accept")?.includes("text/html"))&&responseHeaders.set("Cache-Control","${SITE_HTML_CACHE_HEADER}");for(let cookie of cookies)`
    );
  }

  return patched;
}
