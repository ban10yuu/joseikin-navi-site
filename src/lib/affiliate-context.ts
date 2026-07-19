import type { AffiliateIntent, Purpose } from './types.ts';

interface GrantAffiliateContextSource {
  title: string;
  description: string;
  tags: string[];
  purposes: Purpose[];
  primaryPurpose?: Purpose;
  affiliateIntents: AffiliateIntent[];
}

const FERTILITY_CONTEXT_PATTERN = /(不妊|妊活|生殖補助|体外受精|顕微授精)/u;
const MEDICAL_EXPENSE_TAX_PATTERN = /医療費控除/u;
const TREATMENT_COST_PATTERN = /(治療費|医療費|自己負担)/u;
const HOME_ENERGY_PATTERN = /(太陽光|蓄電池|再エネ|省エネ|断熱|ZEH|ゼロエネルギー)/iu;
const SYSTEM_DEVELOPMENT_PATTERN = /(システム開発|物流DX|デジタル化|DX導入|業務システム|IT導入)/iu;
const ACCOUNTING_PATTERN = /(会計|税務|経理|確定申告|決算|税理士)/u;
const CHILD_EDUCATION_PATTERN = /(絵本|読書|学習|学び|幼児教育|家庭教育|知育|教材)/u;
const REUSE_PATTERN = /(リユース|中古品|古物|買取|査定|循環型|再販売)/u;
const TRADE_AREA_PATTERN = /(商圏|立地|出店|空き店舗|店舗開業|店舗改修)/u;
const FINANCIAL_PLANNING_PATTERN = /(家計|住宅ローン|教育費|学費|奨学金|資金計画|保険|費用相談)/u;
const ECOMMERCE_PATTERN = /(ECサイト|ネットショップ|オンライン販売|通販|販路開拓)/iu;
const BUSINESS_WEBSITE_PATTERN = /(ホームページ|Webサイト|ウェブサイト|事業用サイト)/iu;
const PAYROLL_PATTERN = /(賃上げ|賃金引上げ|給与計算|給与引上げ)/u;
const CAREER_PATTERN = /(求職|就職|転職|求人|離職|失業|就業支援|再就職)/u;

export function getGrantAffiliateIntents(grant: GrantAffiliateContextSource): AffiliateIntent[] {
  const intents = new Set<AffiliateIntent>(grant.affiliateIntents);
  const text = [grant.title, grant.description, ...grant.tags].join(' ');

  if (grant.purposes.some((purpose) => purpose === 'housing' || purpose === 'energySaving') && HOME_ENERGY_PATTERN.test(text)) {
    intents.add('homeEnergyConsultation');
  }
  if (grant.purposes.includes('digitalTransformation') && SYSTEM_DEVELOPMENT_PATTERN.test(text)) {
    intents.add('systemDevelopment');
  }
  if (grant.purposes.some((purpose) => ['businessGrowth', 'digitalTransformation', 'regionalRevitalization'].includes(purpose)) && ECOMMERCE_PATTERN.test(text)) {
    intents.add('ecommerce');
  }
  if (grant.purposes.some((purpose) => ['startup', 'businessGrowth', 'digitalTransformation'].includes(purpose)) && BUSINESS_WEBSITE_PATTERN.test(text)) {
    intents.add('cloudStorage');
  }
  if (grant.purposes.includes('wageIncrease') && PAYROLL_PATTERN.test(text)) {
    intents.add('payroll');
  }
  if (grant.purposes.some((purpose) => ['startup', 'businessGrowth', 'digitalTransformation'].includes(purpose)) && ACCOUNTING_PATTERN.test(text)) {
    intents.add('accounting');
    intents.add('professionalConsultation');
  }

  if (grant.purposes.includes('startup')) intents.add('businessPlanning');
  if (grant.purposes.includes('startup')) intents.add('companyFormation');
  const primaryPurpose = grant.primaryPurpose ?? grant.purposes[0];
  if (primaryPurpose === 'employment' && CAREER_PATTERN.test(text)) intents.add('careerConsultation');
  if (grant.purposes.some((purpose) => purpose === 'childcare' || purpose === 'education') && CHILD_EDUCATION_PATTERN.test(text)) {
    intents.add('childrensEducation');
  }
  if (grant.purposes.some((purpose) => purpose === 'housing' || purpose === 'education') && FINANCIAL_PLANNING_PATTERN.test(text)) {
    intents.add('financialPlanning');
  }
  if (grant.purposes.some((purpose) => ['startup', 'businessGrowth', 'digitalTransformation', 'regionalRevitalization'].includes(purpose)) && REUSE_PATTERN.test(text)) {
    intents.add('reuseValuation');
  }
  if (grant.purposes.some((purpose) => ['startup', 'businessGrowth', 'regionalRevitalization'].includes(purpose)) && TRADE_AREA_PATTERN.test(text)) {
    intents.add('tradeAreaAnalysis');
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
  sensitive,
}: {
  purposes: Purpose[];
  intents: AffiliateIntent[];
  monetizationAllowed: boolean;
  sensitive?: boolean;
}): boolean {
  if (monetizationAllowed) return true;
  if (sensitive ?? purposes.some((purpose) => ['medical', 'welfare', 'disaster', 'livingSupport'].includes(purpose))) return false;
  return intents.length > 0;
}
