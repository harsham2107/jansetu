import { FamilyProfile } from "@/types";

export const sampleFamilies: FamilyProfile[] = [
  {
    familyId: "TG-PPP-2026-981240",
    rationCardNo: "TG-FSC-W-891240",
    headOfHousehold: "Komaram Mallesh",
    village: "Gajwel Rural",
    district: "Siddipet",
    state: "Telangana",
    socialCategory: "OBC",
    totalLandAcres: 2.2,
    totalFamilyIncome: 195000,
    totalEntitlementEstimate: "₹12,45,000 / year",
    securityHash: "0x8F9B2C4E...TG31A7",
    dpdpConsentVerified: true,
    members: [
      {
        id: "mem-tg-1",
        relation: "Head of Household",
        fullName: "Komaram Mallesh",
        age: 52,
        gender: "male",
        occupation: "farmer",
        annualIncome: 140000,
        educationLevel: "10th Standard (Zilla Parishad High School)",
        aadhaarMasked: "XXXX-XXXX-4912",
        eligibleSchemeCount: 5,
        topSchemes: [
          "Rythu Bharosa (₹15,000/acre = ₹33,000/yr)",
          "Rajiv Aarogyasri (₹10 Lakh Cashless Health Cover)",
          "Gruha Jyothi (200 Units Free Power)",
          "PM Kisan Samman Nidhi (₹6,000/yr)",
          "Indiramma Indlu Housing Assistance (₹5,00,000)"
        ]
      },
      {
        id: "mem-tg-2",
        relation: "Spouse",
        fullName: "Komaram Renuka",
        age: 48,
        gender: "female",
        occupation: "artisan",
        annualIncome: 40000,
        educationLevel: "7th Standard (SERP SHG Leader)",
        aadhaarMasked: "XXXX-XXXX-7721",
        eligibleSchemeCount: 5,
        topSchemes: [
          "Maha Lakshmi (₹2,500/mo = ₹30,000/yr + ₹500 Gas)",
          "Free TSRTC Bus Travel Pass across Telangana",
          "Rajiv Aarogyasri (₹10 Lakh Family Health Cover)",
          "SERP Stree Nidhi Concessional Credit (₹1,50,000)",
          "PM Vishwakarma Artisan Toolkit (₹15,000)"
        ]
      },
      {
        id: "mem-tg-3",
        relation: "Daughter",
        fullName: "Komaram Lavanya",
        age: 20,
        gender: "female",
        occupation: "student",
        annualIncome: 0,
        educationLevel: "B.Tech Computer Science (3rd Year, JNTU Hyderabad)",
        aadhaarMasked: "XXXX-XXXX-1934",
        eligibleSchemeCount: 4,
        topSchemes: [
          "Yuva Vikasam Vidya Bharosa Card (₹5,00,000)",
          "Telangana ePASS 100% Tuition Fee Reimbursement",
          "Free TSRTC Student Travel Concession",
          "Ambedkar Overseas Vidya Nidhi Eligibility"
        ]
      },
      {
        id: "mem-tg-4",
        relation: "Mother",
        fullName: "Komaram Pochamma",
        age: 73,
        gender: "female",
        occupation: "unemployed",
        annualIncome: 15000,
        educationLevel: "Unlettered",
        aadhaarMasked: "XXXX-XXXX-8820",
        eligibleSchemeCount: 3,
        topSchemes: [
          "Cheyutha / Aasara Senior Citizen Pension (₹4,000/mo = ₹48,000/yr)",
          "Rajiv Aarogyasri Geriatric Specialized Care",
          "Telangana Vayoshri Free Assistive Mobility Device"
        ]
      }
    ]
  },
  {
    familyId: "TG-PPP-2026-339180",
    rationCardNo: "TG-FSC-W-339180",
    headOfHousehold: "Gugulothu Ravi Nayak",
    village: "Narsampet",
    district: "Warangal Rural",
    state: "Telangana",
    socialCategory: "ST",
    totalLandAcres: 0.0,
    totalFamilyIncome: 135000,
    totalEntitlementEstimate: "₹10,80,000 / year",
    securityHash: "0x12EA499D...TG90B2",
    dpdpConsentVerified: true,
    members: [
      {
        id: "mem-tg-5",
        relation: "Head of Household",
        fullName: "Gugulothu Ravi Nayak",
        age: 44,
        gender: "male",
        occupation: "laborer",
        annualIncome: 95000,
        educationLevel: "Primary School",
        aadhaarMasked: "XXXX-XXXX-9912",
        eligibleSchemeCount: 4,
        topSchemes: [
          "Indiramma Indlu (₹5,00,000 Housing Grant)",
          "Rajiv Aarogyasri (₹10 Lakh Cashless Medical Cover)",
          "Gruha Jyothi (200 Units Zero Power Bill)",
          "Telangana Girijan Co-op Livelihood Grant"
        ]
      },
      {
        id: "mem-tg-6",
        relation: "Spouse",
        fullName: "Gugulothu Kamala",
        age: 40,
        gender: "female",
        occupation: "artisan",
        annualIncome: 40000,
        educationLevel: "Literate",
        aadhaarMasked: "XXXX-XXXX-2241",
        eligibleSchemeCount: 4,
        topSchemes: [
          "Maha Lakshmi Scheme (₹2,500/mo + ₹500 Gas)",
          "TSRTC Free Travel across Telangana",
          "Kalyana Lakshmi Scheme Eligibility for Daughter",
          "Rajiv Aarogyasri Family Health Cover"
        ]
      }
    ]
  }
];
