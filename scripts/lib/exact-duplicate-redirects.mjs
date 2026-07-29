function canonicalSlugScore(grant, preferredSlugs) {
  const slug = grant.slug ?? '';
  let score = 0;

  if (preferredSlugs.has(slug)) score += 10_000;
  if (!/-official-\d/u.test(slug)) score += 1_000;
  if (!/[^\x00-\x7F]/u.test(slug)) score += 800;
  if (!/-aid(?:-|$)/u.test(slug)) score += 400;
  if (!/-v\d+(?:-|$)/u.test(slug)) score += 300;
  if (!/-20\d{2}(?:-|$)/u.test(slug)) score += 100;
  if (grant.description?.trim()) score += 50;

  return score;
}

export function chooseCanonicalGrant(grants, preferredSlugs = new Set()) {
  return grants
    .map((grant, index) => ({
      grant,
      index,
      score: canonicalSlugScore(grant, preferredSlugs),
    }))
    .sort((left, right) =>
      right.score - left.score
      || left.index - right.index
      || left.grant.slug.localeCompare(right.grant.slug, 'ja')
    )[0]?.grant;
}

export function buildExactDuplicateRedirects(
  grants,
  existingRedirects,
  preferredSlugs = new Set(),
) {
  const existingSources = new Set(existingRedirects.map((redirect) => redirect.source));
  const groups = new Map();

  grants.forEach((grant) => {
    if (
      grant.indexStatus !== 'index'
      || grant.contentStatus !== 'published'
      || !grant.title?.trim()
      || !grant.officialUrl?.trim()
    ) {
      return;
    }

    const key = `${grant.title.trim()}\n${grant.officialUrl.trim()}`;
    const group = groups.get(key) ?? [];
    group.push(grant);
    groups.set(key, group);
  });

  const redirects = [];
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    const canonical = chooseCanonicalGrant(group, preferredSlugs);
    if (!canonical) continue;

    for (const grant of group) {
      if (grant.slug === canonical.slug) continue;
      const source = `/grant/${grant.slug}/`;
      if (existingSources.has(source)) continue;
      redirects.push({
        source,
        destination: `/grant/${canonical.slug}/`,
        statusCode: 301,
        reason: `同一制度名・同一公式URLの完全重複を「${canonical.title}」へ統合するため`,
      });
    }
  }

  return redirects.sort((left, right) => left.source.localeCompare(right.source, 'ja'));
}
