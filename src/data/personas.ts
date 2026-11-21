import { DemoPersona } from "@/types";

export const samplePersonas: DemoPersona[] = [
  {
    id: "farmer-ramesh",
    name: "Rameshwar Patel",
    title: "Marginal Farmer • 1.8 Acres",
    badge: "Agriculture & Rural",
    avatar: "👨‍🌾",
    sampleDocDescription: "State Revenue Department Land Patta / 7/12 Extract (Record of Rights)",
    profile: {
      fullName: "Rameshwar Prasad Patel",
      age: 51,
      gender: "male",
      occupation: "farmer",
      estimatedAnnualIncome: 145000,
      landOwnedAcres: 1.8,
      socialCategory: "OBC",
      state: "Madhya Pradesh",
      extractedDocumentType: "Land Record (Patta / 7-12 Extract)",
      confidenceScore: 98
    }
  },
  {
    id: "student-priya",
    name: "Priya Sharma",
    title: "B.Tech 1st Year College Student",
    badge: "Higher Education",
    avatar: "👩‍🎓",
    sampleDocDescription: "Tehsildar Certified Annual Income & Category Certificate",
    profile: {
      fullName: "Priya Kumari Sharma",
      age: 19,
      gender: "female",
      occupation: "student",
      estimatedAnnualIncome: 180000,
      landOwnedAcres: 0,
      socialCategory: "EWS",
      state: "Uttar Pradesh",
      extractedDocumentType: "Tahsil Income & Category Certificate",
      confidenceScore: 99
    }
  },
  {
    id: "widow-lakshmi",
    name: "Lakshmi Bai",
    title: "Elderly Rural Artisan (Age 64)",
    badge: "Senior Citizen & Healthcare",
    avatar: "👵",
    sampleDocDescription: "Antyodaya Anna Yojana (AAY) BPL Ration Card",
    profile: {
      fullName: "Lakshmi Bai Rathore",
      age: 64,
      gender: "female",
      occupation: "unemployed",
      estimatedAnnualIncome: 35000,
      landOwnedAcres: 0,
      socialCategory: "SC",
      state: "Rajasthan",
      extractedDocumentType: "AAY BPL Ration Card",
      confidenceScore: 96
    }
  }
];
