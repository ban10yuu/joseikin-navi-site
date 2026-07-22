import type { AffiliateIntent, Audience, Purpose } from './types.ts';

interface GrantAffiliateContextSource {
  title: string;
  description: string;
  eligibility?: string;
  tags: string[];
  purposes: Purpose[];
  primaryPurpose?: Purpose;
  audiences?: Audience[];
  affiliateIntents: AffiliateIntent[];
}

interface GrantDetailAffiliateContextSource extends GrantAffiliateContextSource {
  texts?: string[];
}

const SENSITIVE_PURPOSE_SET = new Set<Purpose>(['medical', 'welfare', 'disaster', 'livingSupport']);
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
const BUSINESS_WEBSITE_PATTERN = /((自社|事業用|企業|店舗).{0,8}(ホームページ|Webサイト|ウェブサイト)|ホームページ.{0,6}(制作|作成|開設|構築|改修)|Webサイト.{0,6}(制作|作成|開設|構築|改修))/iu;
const ORGANIZATION_APPLICANT_PATTERN = /(運営(?:する)?団体|実施(?:する)?団体|対象事業者|対象法人|法人・団体|施設運営者|事業を実施する団体|取り組む団体|活動を行う団体|団体が対象|個人申請不可|個人での申請不可)/u;
const EMPLOYER_APPLICANT_PATTERN = /(企業(?:側)?が対象|事業者が対象|雇用する事業者|雇用主|求人企業|採用(?:活動|費|経費)|(?:企業|事業者|雇用主).{0,8}人材確保|人材確保.{0,8}(?:企業|事業者|雇用主)|合同企業説明会|就職フェア.{0,8}(出展|参加))/u;
const PAYROLL_PATTERN = /(賃上げ|賃金引上げ|給与計算|給与引上げ)/u;
const CAREER_PATTERN = /(求職|就職|転職|求人|離職|失業|就業支援|再就職)/u;

export function getGrantAffiliateIntents(grant: GrantAffiliateContextSource): AffiliateIntent[] {
  const intents = new Set<AffiliateIntent>(grant.affiliateIntents);
  const text = [grant.title, grant.description, grant.eligibility ?? '', ...grant.tags].join(' ');
  const primaryPurpose = grant.primaryPurpose ?? grant.purposes[0];
  const organizationApplicant = ORGANIZATION_APPLICANT_PATTERN.test(text);
  const employerApplicant = EMPLOYER_APPLICANT_PATTERN.test(text);

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
  if (primaryPurpose === 'employment' && CAREER_PATTERN.test(text) && !organizationApplicant && !employerApplicant) intents.add('careerConsultation');
  if (grant.purposes.some((purpose) => purpose === 'childcare' || purpose === 'education') && CHILD_EDUCATION_PATTERN.test(text) && !organizationApplicant) {
    intents.add('childrensEducation');
  }
  if (grant.purposes.some((purpose) => purpose === 'housing' || purpose === 'education') && FINANCIAL_PLANNING_PATTERN.test(text) && !organizationApplicant) {
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

function addUnique<T>(values: Set<T>, additions: T[]) {
  for (const value of additions) values.add(value);
}

export function getGrantDetailAffiliateMatchContext(grant: GrantDetailAffiliateContextSource): {
  intents: AffiliateIntent[];
  purposes: Purpose[];
} {
  const intents = new Set<AffiliateIntent>(getGrantAffiliateIntents(grant));
  const purposes = new Set<Purpose>(grant.purposes.filter((purpose) => !SENSITIVE_PURPOSE_SET.has(purpose)));
  const text = [grant.title, grant.description, grant.eligibility ?? '', ...grant.tags, ...(grant.texts ?? [])].join(' ');
  const businessAudience = grant.audiences?.some((audience) => ['soleProprietor', 'business', 'nonprofit', 'researcher', 'localOrganization'].includes(audience)) ?? false;
  const familyAudience = grant.audiences?.some((audience) => ['individual', 'family', 'student', 'jobSeeker'].includes(audience)) ?? false;
  const childFamilyContext = /(子育て|児童|こども|子ども|出産|妊娠|育児|扶養|家庭|ひとり親)/u.test(text)
    || grant.purposes.includes('childcare')
    || grant.audiences?.includes('family');

  if (businessAudience || grant.purposes.some((purpose) => ['startup', 'businessGrowth', 'digitalTransformation', 'regionalRevitalization', 'wageIncrease', 'research'].includes(purpose))) {
    addUnique(purposes, ['startup', 'businessGrowth', 'digitalTransformation', 'regionalRevitalization']);
    addUnique(intents, ['businessPlanning', 'accounting', 'professionalConsultation', 'ecommerce', 'cloudStorage', 'systemDevelopment', 'companyFormation']);
  }
  if (childFamilyContext) {
    addUnique(purposes, ['childcare', 'education']);
    addUnique(intents, ['childrensEducation', 'financialPlanning']);
  }
  if (grant.purposes.some((purpose) => purpose === 'education') || grant.audiences?.some((audience) => ['student', 'jobSeeker'].includes(audience))) {
    addUnique(purposes, ['education', 'employment']);
    addUnique(intents, ['childrensEducation', 'employeeTraining', 'careerConsultation', 'financialPlanning']);
  }
  if (grant.purposes.some((purpose) => purpose === 'housing' || purpose === 'energySaving')) {
    addUnique(purposes, ['housing', 'energySaving']);
    addUnique(intents, ['financialPlanning', 'homeEnergyConsultation']);
  }
  if (grant.purposes.includes('employment') || grant.audiences?.includes('jobSeeker')) {
    addUnique(purposes, ['employment', 'education']);
    addUnique(intents, ['careerConsultation', 'employeeTraining']);
  }
  if (familyAudience && intents.size === 0) {
    addUnique(purposes, ['education', 'housing', 'employment']);
    addUnique(intents, ['financialPlanning', 'careerConsultation', 'employeeTraining', 'homeEnergyConsultation']);
  }

  return { intents: [...intents], purposes: [...purposes] };
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
