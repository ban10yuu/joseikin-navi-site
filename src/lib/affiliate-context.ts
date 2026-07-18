import type { AffiliateIntent, Purpose } from './types.ts';

interface GrantAffiliateContextSource {
  title: string;
  description: string;
  tags: string[];
  purposes: Purpose[];
  affiliateIntents: AffiliateIntent[];
}

const FERTILITY_CONTEXT_PATTERN = /(不妊|妊活|生殖補助|体外受精|顕微授精)/u;
const MEDICAL_EXPENSE_TAX_PATTERN = /医療費控除/u;
const TREATMENT_COST_PATTERN = /(治療費|医療費|自己負担)/u;

export function getGrantAffiliateIntents(grant: GrantAffiliateContextSource): AffiliateIntent[] {
  const intents = new Set<AffiliateIntent>(grant.affiliateIntents);
  if (!grant.purposes.includes('medical')) return [...intents];

  const text = [grant.title, grant.description, ...grant.tags].join(' ');
  if (MEDICAL_EXPENSE_TAX_PATTERN.test(text)) {
    intents.add('medicalExpenseTax');
    return [...intents];
  }
  if (FERTILITY_CONTEXT_PATTERN.test(text)) {
    intents.add('fertilityCare');
    intents.add('treatmentCostManagement');
  } else if (TREATMENT_COST_PATTERN.test(text)) {
    intents.add('treatmentCostManagement');
  }

  return [...intents];
}
