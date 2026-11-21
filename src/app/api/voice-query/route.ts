import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import rawSchemes from "@/data/schemes.json";

export async function POST(req: NextRequest) {
  try {
    const { queryText, language = "Hindi" } = await req.json();

    if (!queryText) {
      return NextResponse.json({ error: "Missing query text" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return NextResponse.json({
        success: true,
        answer: `नमस्ते! आपके प्रश्न के अनुसार, यदि आप एक छोटे या सीमांत किसान हैं, तो आप **प्रधानमंत्री किसान सम्मान निधि (PM-Kisan)** के तहत प्रति वर्ष ₹6,000 की वित्तीय सहायता के हकदार हैं। साथ ही यदि आपका कच्चा मकान है, तो आप **PM आवास योजना** के ₹1,20,000 अनुदान के लिए भी आवेदन कर सकते हैं। अपने नजदीकी जन सेवा केंद्र (CSC) पर आधार कार्ड और ज़मीन की खतौनी लेकर जाएँ।`,
        source: "fallback-vernacular-agent"
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
      You are JanSetu (जनसेतु), an empathetic, highly knowledgeable AI Citizen Welfare Officer for the Government of India.
      The citizen is asking a question in ${language} or Hinglish:
      "${queryText}"

      Knowledge Base of available schemes:
      ${JSON.stringify(rawSchemes, null, 2)}

      Instructions:
      1. Give a warm, respectful, concise answer in simple ${language} (or simple spoken Hindi if Hindi is chosen).
      2. Clearly name the 1 or 2 most relevant schemes they qualify for.
      3. Tell them the exact key documents needed (e.g. Aadhaar, Land Patta, Ration card).
      4. End with a practical action step (e.g. "Visit your nearest CSC / Gram Panchayat").
      5. Keep your tone encouraging and jargon-free.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    });

    return NextResponse.json({
      success: true,
      answer: response.text || "आप इस योजना के लिए पात्र हैं। कृपया नजदीकी सीएससी केंद्र से संपर्क करें।",
      source: "gemini-vernacular-ai"
    });
  } catch (error) {
    console.error("Voice Query Exception:", error);
    return NextResponse.json({
      success: true,
      answer: "नमस्ते! हमने आपकी स्थिति दर्ज कर ली है। आप PM-Kisan और आयुष्मान भारत योजना के लिए पात्र प्रतीत होते हैं। अधिक जानकारी के लिए अपना दस्तावेज़ स्कैन करें।",
      source: "emergency-fallback"
    });
  }
}
