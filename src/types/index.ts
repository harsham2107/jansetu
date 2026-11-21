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
}

export interface Scheme {
  id: string;
  name: string;
  nameHindi: string;
  category: "Agriculture" | "Housing" | "Education" | "Social Security" | "Women & Child" | "Healthcare" | "Micro-Finance";
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
}

export interface SchemeMatchResult extends Scheme {
  matchScore: number;
  isEligible: boolean;
  reasonsMet: string[];
  missingRequirements: string[];
  actionableSteps: string[];
  missingDocuments: string[];
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
