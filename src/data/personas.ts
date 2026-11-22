import { DemoPersona } from "@/types";

export const samplePersonas: DemoPersona[] = [
  {
    id: "farmer-mallesh",
    name: "Komaram Mallesh",
    title: "Marginal Farmer • 2.2 Acres, Siddipet",
    badge: "Agriculture & Rythu Bharosa",
    avatar: "👨‍🌾",
    sampleDocDescription: "Telangana Dharani Pattadar Passbook & Land Record (ROR-1B)",
    profile: {
      fullName: "Komaram Mallesh",
      age: 52,
      gender: "male",
      occupation: "farmer",
      estimatedAnnualIncome: 140000,
      landOwnedAcres: 2.2,
      socialCategory: "OBC",
      state: "Telangana",
      extractedDocumentType: "Telangana Dharani Pattadar Passbook",
      confidenceScore: 99,
      aadhaarMasked: "XXXX-XXXX-4912",
      sha256VerificationHash: "0x7E3A91FC...TG"
    }
  },
  {
    id: "student-lavanya",
    name: "Chintala Lavanya",
    title: "B.Tech 3rd Year Student • Warangal",
    badge: "Higher Education & Yuva Vikasam",
    avatar: "👩‍🎓",
    sampleDocDescription: "Telangana MeeSeva Annual Income & SC Caste Certificate",
    profile: {
      fullName: "Chintala Lavanya",
      age: 20,
      gender: "female",
      occupation: "student",
      estimatedAnnualIncome: 160000,
      landOwnedAcres: 0,
      socialCategory: "SC",
      state: "Telangana",
      extractedDocumentType: "Telangana MeeSeva Income & Caste Certificate",
      confidenceScore: 98,
      aadhaarMasked: "XXXX-XXXX-8821",
      sha256VerificationHash: "0x4B219AC7...TG"
    }
  },
  {
    id: "widow-pochamma",
    name: "Bandari Pochamma",
    title: "Beedi Worker & Senior Citizen (Age 61) • Karimnagar",
    badge: "Aasara Pension & Maha Lakshmi",
    avatar: "👵",
    sampleDocDescription: "Telangana Food Security Card (White BPL Ration Card)",
    profile: {
      fullName: "Bandari Pochamma",
      age: 61,
      gender: "female",
      occupation: "artisan",
      estimatedAnnualIncome: 42000,
      landOwnedAcres: 0,
      socialCategory: "OBC",
      state: "Telangana",
      extractedDocumentType: "Telangana Food Security Card (White BPL)",
      confidenceScore: 97,
      aadhaarMasked: "XXXX-XXXX-3342",
      sha256VerificationHash: "0x91F5B08E...TG"
    }
  }
];
