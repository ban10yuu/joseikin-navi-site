import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  buildExactDuplicateRedirects,
  chooseCanonicalGrant,
} from '../../scripts/lib/exact-duplicate-redirects.mjs';

const baseGrant = {
  title: '例示市 子ども医療費助成',
  officialUrl: 'https://www.example.go.jp/child-medical',
  indexStatus: 'index',
  contentStatus: 'published',
  description: '制度の概要',
};

describe('完全重複制度の301転送生成', () => {
  it('人が読める安定slugを自動生成slugより優先する', () => {
    const canonical = chooseCanonicalGrant([
      { ...baseGrant, slug: 'example-official-001-2026' },
      { ...baseGrant, slug: 'example-child-medical' },
    ]);

    assert.equal(canonical?.slug, 'example-child-medical');
  });

  it('Search Consoleで実績があるslugを最優先する', () => {
    const canonical = chooseCanonicalGrant([
      { ...baseGrant, slug: 'example-child-medical' },
      { ...baseGrant, slug: 'example-child-medical-2026' },
    ], new Set(['example-child-medical-2026']));

    assert.equal(canonical?.slug, 'example-child-medical-2026');
  });

  it('同一制度名・同一公式URLだけを301統合する', () => {
    const redirects = buildExactDuplicateRedirects([
      { ...baseGrant, slug: 'example-child-medical' },
      { ...baseGrant, slug: 'example-child-medical-aid' },
      { ...baseGrant, slug: 'different-title', title: '例示市 児童手当' },
      { ...baseGrant, slug: 'different-url', officialUrl: 'https://www.example.go.jp/other' },
    ], []);

    assert.deepEqual(redirects, [{
      source: '/grant/example-child-medical-aid/',
      destination: '/grant/example-child-medical/',
      statusCode: 301,
      reason: '同一制度名・同一公式URLの完全重複を「例示市 子ども医療費助成」へ統合するため',
    }]);
  });

  it('既存の転送元を重複して追加しない', () => {
    const redirects = buildExactDuplicateRedirects([
      { ...baseGrant, slug: 'example-child-medical' },
      { ...baseGrant, slug: 'example-child-medical-aid' },
    ], [{
      source: '/grant/example-child-medical-aid/',
      destination: '/grant/example-child-medical/',
      statusCode: 301,
    }]);

    assert.deepEqual(redirects, []);
  });
});
