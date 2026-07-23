import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { compactMetaDescription, grantMetaDescription } from './seo-metadata.ts';

describe('seo metadata helpers', () => {
  it('meta descriptionを文の途中で不自然に切らない', () => {
    const description = compactMetaDescription('補助金・助成金・給付金を地域と目的から探せます。申請前に公式情報で対象条件、支援額、受付状況を確認してください。長い補足説明です。', 40);

    assert.equal(description, '補助金・助成金・給付金を地域と目的から探せます。');
  });

  it('長い一文は省略記号つきで上限内に収める', () => {
    const description = compactMetaDescription('子育て、住まい、仕事、事業支援など全国の補助金・助成金・給付金を地域と目的から検索できます', 35);

    assert.equal(description.length <= 35, true);
    assert.equal(description.endsWith('…'), true);
  });

  it('詳細ページの説明文を検索結果向けに短く整える', () => {
    const description = grantMetaDescription({
      title: '与那国町 特別児童扶養手当',
      organization: '与那国町',
      eligibility: '与那国町内の児童・子育て世帯・ひとり親家庭・妊産婦等で公式要件を満たす方',
      amount: '月額52,400円',
      deadline: '支給し、児童の福祉の増進を図るための制度です',
      checked: '公式情報確認日2026-07-19',
      hasOfficialSource: true,
    });

    assert.equal(description.length <= 118, true);
    assert.match(description, /対象者、支援額、申請期間/);
    assert.match(description, /公式ページ/);
  });
});
