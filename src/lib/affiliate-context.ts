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
const HOME_ENERGY_PATTERN = /(太陽光|蓄電池|再エネ|省エネ|断熱|ZEH|ゼロエネルギー)/iu;
const SYSTEM_DEVELOPMENT_PATTERN = /(システム開発|物流DX|デジタル化|DX導入|業務システム|IT導入)/iu;
const ACCOUNTING_PATTERN = /(会計|税務|経理|確定申告|決算|税理士)/u;

export function getGrantAffiliateIntents(grant: GrantAffiliateContextSource): AffiliateIntent[] {
  const intents = new Set<AffiliateIntent>(grant.affiliateIntents);
  const text = [grant.title, grant.description, ...grant.tags].join(' ');

  if (grant.purposes.some((purpose) => purpose === 'housing' || purpose === 'energySaving') && HOME_ENERGY_PATTERN.test(text)) {
    intents.add('homeEnergyConsultation');
  }
  if (grant.purposes.includes('digitalTransformation') && SYSTEM_DEVELOPMENT_PATTERN.test(text)) {
    intents.add('systemDevelopment');
  }
  if (grant.purposes.some((purpose) => ['startup', 'businessGrowth', 'digitalTransformation'].includes(purpose)) && ACCOUNTING_PATTERN.test(text)) {
    intents.add('accounting');
    intents.add('professionalConsultation');
  }

  if (grant.purposes.includes('medical')) {
    if (MEDICAL_EXPENSE_TAX_PATTERN.test(text)) {
      intents.add('medicalExpenseTax');
    } else if (FERTILITY_CONTEXT_PATTERN.test(text)) {
      intents.add('fertilityCare');
      intents.add('treatmentCostManagement');
    } else if (TREATMENT_COST_PATTERN.test(text)) {
      intents.add('treatmentCostManagement');
    }
  }

  return [...intents];
}

export function shouldAllowDerivedAffiliateContext({
  purposes,
  intents,
  monetizationAllowed,
}: {
  purposes: Purpose[];
  intents: AffiliateIntent[];
  monetizationAllowed: boolean;
}): boolean {
  if (monetizationAllowed) return true;
  if (purposes.some((purpose) => ['medical', 'welfare', 'disaster', 'livingSupport'].includes(purpose))) return false;
  return intents.length > 0;
}
