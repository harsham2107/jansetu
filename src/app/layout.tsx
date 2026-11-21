import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JanSetu AI • Sovereign Welfare Discovery Engine",
  description: "Bridging the ₹3 Lakh Crore unclaimed welfare gap under IEEE 7001 algorithmic standards with multimodal document OCR and vernacular voice triage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 font-sans antialiased">{children}</body>
    </html>
  );
}
