import type {
  Audience,
  ContentStatus,
  GrantCategory,
  LegacyGrant,
  LegacyGrantCategory,
  NormalizedGrant,
  Purpose,
  SupportType,
  VerificationMethod,
} from './types';

const CATEGORY_MAP: Record<LegacyGrantCategory, GrantCategory> = {
  childcare: 'childcare',
  housing: 'housing',
  medical: 'medical',
  education: 'education',
  employment: 'employment',
  nursing: 'nursing',
  living: 'living',
  disaster: 'disaster',
  startup: 'employment',
  'primary-industry': 'employment',
  agriculture: 'employment',
  equipment: 'employment',
  environment: 'housing',
  community: 'living',
};

const CATEGORY_PURPOSE_MAP: Record<LegacyGrantCategory, Purpose> = {
  childcare: 'childcare',
  housing: 'housing',
  medical: 'medical',
  education: 'education',
  employment: 'employment',
  nursing: 'welfare',
  living: 'livingSupport',
  disaster: 'disaster',
  startup: 'startup',
  'primary-industry': 'businessGrowth',
  agriculture: 'businessGrowth',
  equipment: 'businessGrowth',
  environment: 'energySaving',
  community: 'regionalRevitalization',
};

function unique<T>(values: T[]): T[] {
  return [...new Set(values)];
}

function hasValidOfficialUrl(value: string | undefined): boolean {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function inferSupportType(input: LegacyGrant): SupportType {
  if (input.supportType) return input.supportType;
  const text = `${input.title} ${input.maxAmount} ${input.tags.join(' ')}`;

  if (/奨学.*貸付|貸与奨学|奨学金.*返済/.test(text)) return 'scholarshipLoan';
  if (/貸付|融資/.test(text)) return 'loan';
  if (/税額控除|税控除/.test(text)) return 'taxCredit';
  if (/減免|免除/.test(text)) return 'reduction';
  if (/保険給付/.test(text)) return 'insuranceBenefit';
  if (/利用券|助成券|商品券/.test(text)) return 'voucher';
  if (/割引|運賃助成/.test(text)) return 'discount';
  if (/手当/.test(text)) return 'allowance';
  if (/給付金|給付事業/.test(text)) return 'benefit';
  if (/補助金|補助事業/.test(text)) return 'subsidy';
  if (/助成金|助成事業|費助成/.test(text)) return 'grant';
  return 'unknown';
}

function inferAudiences(input: LegacyGrant): Audience[] {
  if (input.audiences?.length) return unique(input.audiences);
  const text = `${input.title} ${input.eligibility} ${input.tags.join(' ')}`;
  const audiences: Audience[] = [];

  if (/障害|障がい/.test(text)) audiences.push('personWithDisability');
  if (/高齢|シニア|65歳以上|70歳以上|75歳以上/.test(text)) audiences.push('senior');
  if (/学生|生徒|奨学/.test(text)) audiences.push('student');
  if (/子ども|児童|子育て|妊婦|ひとり親|世帯/.test(text)) audiences.push('family');
  if (/求職|就職|離職|失業/.test(text)) audiences.push('jobSeeker');
  if (/個人事業|フリーランス/.test(text)) audiences.push('soleProprietor');
  if (/中小企業|事業者|法人|企業|創業|農業者|漁業者/.test(text)) audiences.push('business');
  if (/NPO|非営利/.test(text)) audiences.push('nonprofit');
  if (/研究者|研究機関/.test(text)) audiences.push('researcher');
  if (/自治会|町内会|地域団体/.test(text)) audiences.push('localOrganization');

  return unique(audiences.length ? audiences : ['individual']);
}

function inferPurposes(input: LegacyGrant): Purpose[] {
  if (input.purposes?.length) return unique(input.purposes);
  const categories = [input.category, ...(input.relatedCategories ?? [])];
  const purposes = categories.map((category) => CATEGORY_PURPOSE_MAP[category]);
  const text = `${input.title} ${input.description} ${input.tags.join(' ')}`;

  if (/創業|起業/.test(text)) purposes.unshift('startup');
  if (/DX|デジタル|IT導入|AI導入/.test(text)) purposes.push('digitalTransformation');
  if (/省エネ|脱炭素|再生可能エネルギー/.test(text)) purposes.push('energySaving');
  if (/賃上げ|給与引上げ/.test(text)) purposes.push('wageIncrease');
  if (/研究|開発/.test(text)) purposes.push('research');

  return unique(purposes.length ? purposes : ['other']);
}

function inferVerificationMethod(input: LegacyGrant): VerificationMethod {
  if (input.verificationMethod) return input.verificationMethod;
  if (input.humanReviewedAt && input.verifiedAt) return 'mixed';
  if (input.humanReviewedAt) return 'human';
  if (input.verifiedAt || input.sourceUrls?.length) return 'automated';
  return 'unknown';
}

export function normalizeGrant(input: LegacyGrant): NormalizedGrant {
  const category = CATEGORY_MAP[input.category] ?? 'living';
  const relatedCategories = unique(
    (input.relatedCategories ?? [])
      .map((item) => CATEGORY_MAP[item])
      .filter((item) => item !== category)
  );
  const audiences = inferAudiences(input);
  const purposes = inferPurposes(input);
  const hasOfficialSource = hasValidOfficialUrl(input.officialUrl);
  const contentStatus: ContentStatus = input.contentStatus
    ?? (hasOfficialSource ? 'published' : 'unverified');

  return {
    ...input,
    id: input.id ?? input.slug,
    officialName: input.officialName ?? null,
    providerName: input.organization,
    providerType: input.providerType ?? input.type,
    supportType: inferSupportType(input),
    audiences,
    primaryAudience: input.primaryAudience ?? audiences[0] ?? 'other',
    purposes,
    primaryPurpose: input.primaryPurpose ?? purposes[0] ?? 'other',
    country: '日本',
    municipality: input.municipality ?? null,
    maxAmountNum: input.maxAmountNum ?? 0,
    category,
    relatedCategories,
    applicationPeriod: input.applicationPeriod ?? '',
    status: input.statusOverride ?? input.status ?? 'unknown',
    verificationMethod: inferVerificationMethod(input),
    humanReviewedAt: input.humanReviewedAt ?? null,
    sourceTitle: input.sourceName ?? null,
    sourceUrl: hasOfficialSource ? input.officialUrl : null,
    sourceCheckedAt: input.verifiedAt ?? null,
    contentUpdatedAt: input.contentUpdatedAt ?? input.publishedAt,
    contentStatus,
    indexStatus: input.indexStatus ?? (
      hasOfficialSource && contentStatus === 'published' ? 'index' : 'noindex'
    ),
    monetizationAllowed: input.monetizationAllowed ?? false,
  };
}
