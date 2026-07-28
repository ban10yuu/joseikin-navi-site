import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { AFFILIATE_OFFERS } from '../config/affiliate-offers.ts';

const registry = JSON.parse(readFileSync(
  new URL('../../data/afb-partnered-programs.json', import.meta.url),
  'utf8',
));

describe('afb提携済み案件台帳', () => {
  it('管理画面で確認した617件を重複なく保持する', () => {
    assert.equal(registry.total, 617);
    assert.equal(registry.programs.length, 617);
    assert.equal(
      new Set(registry.programs.map((program) => program.externalProgramId)).size,
      617,
    );
  });

  it('公開設定したafb案件を提携済み台帳と照合する', () => {
    const afbOffers = AFFILIATE_OFFERS.filter((offer) =>
      offer.network === 'afb' && offer.enabled);

    assert.equal(afbOffers.length, 9);
    for (const offer of afbOffers) {
      const registered = registry.programs.find((program) =>
        program.externalProgramId === offer.externalProgramId);
      assert.ok(registered, `${offer.id}のafb提携記録がありません`);
      assert.equal(registered.configuredOfferId, offer.id);
      assert.equal(registered.displayStatus, 'configured');
      assert.ok(offer.audiences.length > 0);
      assert.ok(offer.intents.length > 0);
      assert.ok(offer.allowedPurposes.length > 0);
      assert.ok(offer.allowedPageTypes.length > 0);
    }
  });
});
