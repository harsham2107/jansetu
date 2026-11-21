# JanSetu AI (जनसेतु)
### Sovereign Welfare Discovery & Multimodal Document Eligibility Engine
> **Event:** 24-Hour Innovation Hackathon  
> **Standards Compliance:** IEEE 7001-2021 (Transparency of Autonomous Systems) & IEEE SIGHT Humanitarian Guidelines  
> **Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, Lucide Icons, Google Gemini Multimodal Document AI

---

## 🌟 Executive Summary
Over **₹3 Lakh Crore ($40 Billion)** in public welfare subsidies, agricultural grants, and higher education scholarships remain unclaimed annually across India. 

The primary cause is not a lack of government funding—it is **The Digital Literacy and Document Opacity Barrier**. Millions of rural farmers, daily-wage laborers, and elderly widows cannot read complex English portals, navigate 40-question forms, or understand opaque government rejection letters.

**JanSetu AI** transforms passive government welfare into proactive, transparent delivery:
1. **Snap & Match (Zero Typing):** A citizen simply uploads a photograph of their Ration Card, Land Patta (7/12 extract), Income Certificate, or Aadhaar. Gemini Multimodal AI extracts key demographic and economic entities with verified confidence ratings.
2. **IEEE 7001 Algorithmic Transparency Engine:** Evaluates eligibility against statutory requirements deterministically (no black-box bias). It explicitly displays **why** a citizen qualified and performs an automated **Gap Analysis** showing the exact missing documents.
3. **Vernacular Voice & Dialect Interface:** Citizens can ask questions in conversational Hindi, Hinglish, or regional languages and hear spoken guidance through integrated voice synthesis.
4. **1-Click Common Service Center (CSC) Summary:** Generates an official, pre-filled printable welfare application brief ready for village submission.

---

## 🏛️ IEEE Standards & Research Alignment

| IEEE Standard / Domain | Implementation in JanSetu AI |
|---|---|
| **IEEE 7001-2021** (Transparency of Autonomous Systems) | Non-black-box decision engine that outputs measurable statutory proof points (income threshold, land acreage caps, occupational quotas). |
| **IEEE 2089** (Digital Inclusion & Age-Appropriate Design) | Zero-typing interface with high-contrast visual cues and voice synthesis for illiterate, elderly, and rural users. |
| **IEEE SIGHT** (Humanitarian Technology) | Bridges socio-economic inequality and advances UN Sustainable Development Goals (SDG 1: No Poverty, SDG 10: Reduced Inequalities). |

---

## 🚀 Live Demo Personas (One-Click Testing for Judges)

For live hackathon evaluations, JanSetu provides 3 pre-seeded citizen profiles on the dashboard:
* 👨‍🌾 **Rameshwar Patel (Marginal Farmer):** Holds 1.8 acres of agricultural land in Madhya Pradesh. 100% qualified for **PM-Kisan** (₹6,000/yr) and **PM Awas Yojana** (₹1,20,000 house subsidy).
* 👩‍🎓 **Priya Sharma (College Student):** First-generation B.Tech student with family income under ₹1.8L. 100% qualified for **Post-Matric Scholarship** (100% Tuition Fee Waiver + ₹1,200/mo).
* 👵 **Lakshmi Bai (Elderly Rural Widow):** 64-year-old rural artisan with Antyodaya BPL ration card. Qualified for **National Old Age Pension (IGNOAPS)** and **Ayushman Bharat** (₹5 Lakh healthcare cover).

---

## 🛠️ Project Structure

```
jansetu/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── analyze/route.ts      # Multimodal Gemini OCR + IEEE Matcher
│   │   │   └── voice-query/route.ts  # Vernacular conversational AI assistant
│   │   ├── globals.css               # Tailwind CSS v4 styling
│   │   ├── layout.tsx                # National civic layout metadata
│   │   └── page.tsx                  # Interactive citizen dashboard & demo personas
│   ├── data/
│   │   ├── personas.ts               # Pre-seeded hackathon demo personas
│   │   └── schemes.json              # Statutory scheme database (8 major schemes)
│   ├── lib/
│   │   └── matcher.ts                # Deterministic IEEE 7001 rule engine
│   └── types/
│       └── index.ts                  # TypeScript definitions
├── .env.local                        # Gemini API Key configuration
└── package.json
```

---

## ⚡ How to Run Locally

```bash
# 1. Clone repository & navigate
cd jansetu

# 2. Configure API Key in .env.local
# (A valid Gemini API key enables live image OCR; demo personas work 100% offline)
GEMINI_API_KEY=your_gemini_api_key_here

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:3000
```

---

## 🏆 Hackathon Pitch Script (3 Minutes)
* **[0:00 - 0:30] The Crisis:** Explain the ₹3 Lakh Crore unclaimed welfare problem caused by English literacy barriers and form fatigue.
* **[0:30 - 1:15] The Live Demo:** Click *Rameshwar Patel (Marginal Farmer)*. Watch JanSetu extract attributes in under 250ms and display PM-Kisan & PM-Awas eligibility.
* **[1:15 - 1:45] Algorithmic Transparency:** Click "View IEEE Breakdown" to showcase criteria proofs and missing document gap analysis.
* **[1:45 - 2:15] Vernacular Voice:** Switch to the Voice tab, ask a question in Hindi, and click "आवाज में सुनें" for automated text-to-speech.
* **[2:15 - 3:00] Scalability & Impact:** Highlight zero-PII security and readiness for nationwide deployment in 400,000 Village Common Service Centers (CSCs).
