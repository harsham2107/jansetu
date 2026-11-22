export interface CitizenProfile {
  fullName: string | null;
  age: number | null;
  gender: "male" | "female" | "other" | null;
  occupation: "farmer" | "student" | "laborer" | "unemployed" | "artisan" | "other";
  estimatedAnnualIncome: number | null;
  landOwnedAcres: number;
  socialCategory: "General" | "OBC" | "SC" | "ST" | "EWS" | null;
  state?: string | null;
  extractedDocumentType: string;
  confidenceScore: number;
  aadhaarMasked?: string;
  sha256VerificationHash?: string;
}

export interface Scheme {
  id: string;
  name: string;
  nameHindi: string;
  nameTelugu?: string;
  category: 
    | "Agriculture" 
    | "Housing" 
    | "Education" 
    | "Social Security" 
    | "Women & Child" 
    | "Healthcare" 
    | "Micro-Finance"
    | "Clean Energy & Solar"
    | "Artisans & Crafts"
    | "Women Empowerment";
  benefit: string;
  max_income: number;
  max_land_acres?: number;
  min_age?: number;
  max_age?: number;
  gender_requirement?: "female" | "male";
  eligible_occupations?: string[];
  eligible_categories?: string[];
  required_documents: string[];
  description: string;
  officialPortal: string;
  isFamilyLevelScheme?: boolean;
}

export interface DocumentGapDetail {
  documentName: string;
  status: "verified" | "missing" | "alternative_accepted";
  issuingAuthority: string;
  remedyAction: string;
  annexureFormName: string;
  turnaroundDays: number;
}

export interface IEEE7001AuditItem {
  criterion: string;
  statutoryNorm: string;
  citizenValue: string;
  status: "PASSED" | "FAILED" | "IN_REVIEW";
  clauseRef: string;
}

export interface SchemeMatchResult extends Scheme {
  matchScore: number;
  isEligible: boolean;
  reasonsMet: string[];
  missingRequirements: string[];
  actionableSteps: string[];
  missingDocuments: string[];
  statutoryProof?: string;
  gapSummary?: string | null;
  selfDeclarationDraft?: string | null;
  documentGaps?: DocumentGapDetail[];
  ieee7001AuditTrail?: IEEE7001AuditItem[];
  ttsSummaryEn?: string;
  ttsSummaryHi?: string;
  ttsSummaryTe?: string;
}

export interface BiometricAuthResult {
  isAuthenticated: boolean;
  authMethod: "fingerprint" | "iris" | "meeseva_otp";
  timestamp: string;
  transactionId: string;
  minutiaeMatchScore: number;
  stqcCertifiedDevice: string;
  dpdpToken: string;
}

export interface DemoPersona {
  id: string;
  name: string;
  title: string;
  badge: string;
  avatar: string;
  profile: CitizenProfile;
  sampleDocDescription: string;
}

export interface FamilyMember {
  id: string;
  relation: "Head of Household" | "Spouse" | "Daughter" | "Son" | "Mother" | "Father" | "Other";
  fullName: string;
  age: number;
  gender: "male" | "female" | "other";
  occupation: "farmer" | "student" | "laborer" | "unemployed" | "artisan" | "other";
  annualIncome: number;
  educationLevel: string;
  aadhaarMasked: string; // e.g. "XXXX-XXXX-4912"
  eligibleSchemeCount: number;
  topSchemes: string[];
}

export interface FamilyProfile {
  familyId: string; // e.g. "PPP-MP-2026-881920" (Parivar Pehchan Patra)
  rationCardNo: string; // e.g. "NFSA-BPL-MP-90218"
  headOfHousehold: string;
  village: string;
  district: string;
  state: string;
  socialCategory: "General" | "OBC" | "SC" | "ST" | "EWS";
  totalLandAcres: number;
  totalFamilyIncome: number;
  members: FamilyMember[];
  securityHash: string; // SHA-256 cryptographic verification seal
  dpdpConsentVerified: boolean; // DPDP Act 2023 compliance
  totalEntitlementEstimate: string; // e.g. "₹6,88,000 / year"
}
