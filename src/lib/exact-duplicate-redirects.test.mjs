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

  it('空白・こども表記・末尾の制度だけが異なる同一制度を統合する', () => {
    const redirects = buildExactDuplicateRedirects([
      {
        ...baseGrant,
        slug: 'example-child-medical',
        title: '例示市 子ども医療費助成',
        organization: '例示市',
        primaryPurpose: 'childcare',
      },
      {
        ...baseGrant,
        slug: 'example-child-medical-2026',
        title: '例示市こども医療費助成制度',
        organization: '例示市',
        primaryPurpose: 'childcare',
      },
    ], []);

    assert.deepEqual(redirects, [{
      source: '/grant/example-child-medical-2026/',
      destination: '/grant/example-child-medical/',
      statusCode: 301,
      reason: '同一制度名・同一公式URLの完全重複を「例示市 子ども医療費助成」へ統合するため',
    }]);
  });

  it('同じ公式ページでも括弧内の対象区分が異なる制度は統合しない', () => {
    const redirects = buildExactDuplicateRedirects([
      {
        ...baseGrant,
        slug: 'example-newlywed',
        title: '例示市 次世代育成住宅助成（新婚世帯枠）',
        organization: '例示市',
        primaryPurpose: 'housing',
      },
      {
        ...baseGrant,
        slug: 'example-near-parents',
        title: '例示市 次世代育成住宅助成（親元近居）',
        organization: '例示市',
        primaryPurpose: 'housing',
      },
    ], []);

    assert.deepEqual(redirects, []);
  });

  it('同じ制度名と公式ページでも主目的が異なるレコードは自動統合しない', () => {
    const redirects = buildExactDuplicateRedirects([
      {
        ...baseGrant,
        slug: 'example-housing',
        organization: '例示市',
        primaryPurpose: 'housing',
      },
      {
        ...baseGrant,
        slug: 'example-welfare',
        organization: '例示市',
        primaryPurpose: 'welfare',
      },
    ], []);

    assert.deepEqual(redirects, []);
  });

  it('制度名と矛盾する旧slugを正規URLとして選ばない', () => {
    const canonical = chooseCanonicalGrant([
      {
        ...baseGrant,
        slug: 'example-newlywed-rent',
        title: '例示市 住居確保給付金',
      },
      {
        ...baseGrant,
        slug: 'example-official-001-2026',
        title: '例示市 住居確保給付金',
      },
    ]);

    assert.equal(canonical?.slug, 'example-official-001-2026');
  });
});
