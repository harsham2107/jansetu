"use client";

import React, { useState, useEffect } from "react";
import {
  Fingerprint,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  UserCheck,
  Building2,
  Lock,
  Zap,
  Eye,
  KeyRound,
  FileCheck2,
  Shield,
  Smartphone,
  Check
} from "lucide-react";
import { samplePersonas } from "@/data/personas";
import { DemoPersona } from "@/types";

interface BiometricGatewayProps {
  onAuthenticate: (persona: DemoPersona) => void;
  onSkipToDashboard: () => void;
  language: "en" | "te" | "hi";
  onLanguageChange: (lang: "en" | "te" | "hi") => void;
}

export default function BiometricGateway({
  onAuthenticate,
  onSkipToDashboard,
  language,
  onLanguageChange
}: BiometricGatewayProps) {
  const [selectedPersona, setSelectedPersona] = useState<DemoPersona>(samplePersonas[0]);
  const [authMode, setAuthMode] = useState<"fingerprint" | "iris" | "meeseva">("fingerprint");
  const [scanState, setScanState] = useState<"idle" | "scanning" | "matched">("idle");
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [district, setDistrict] = useState<string>("Siddipet");
  const [aadhaarInput, setAadhaarInput] = useState<string>("XXXX-XXXX-4912");
  const [fscInput, setFscInput] = useState<string>("TG-FSC-W-891240");
  const [operatorId, setOperatorId] = useState<string>("MEESEVA-TG-4091");

  // Play realistic hardware scanner chime via Web Audio API
  function playBiometricChime(isSuccess: boolean = true) {
    if (typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";

      if (isSuccess) {
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else {
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      }
    } catch {
      // AudioContext unavailable
    }
  }

  // Trigger Biometric Scan Sequence
  function handleInitiateScan(personaToUse?: DemoPersona) {
    const targetPersona = personaToUse || selectedPersona;
    if (scanState === "scanning") return;

    setScanState("scanning");
    setScanProgress(15);

    setTimeout(() => {
      setScanProgress(45);
    }, 400);

    setTimeout(() => {
      setScanProgress(80);
    }, 850);

    setTimeout(() => {
      setScanProgress(100);
      setScanState("matched");
      playBiometricChime(true);

      // Auto-transition into dashboard after 800ms
      setTimeout(() => {
        onAuthenticate(targetPersona);
      }, 700);
    }, 1300);
  }

  // Handle Quick Demo Persona Click
  function handleQuickPersonaSelect(persona: DemoPersona) {
    setSelectedPersona(persona);
    if (persona.profile.aadhaarMasked) {
      setAadhaarInput(persona.profile.aadhaarMasked);
    }
    handleInitiateScan(persona);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
      {/* 🏛️ Top Sovereign Navigation & Accessibility Ribbon */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            {/* Government of Telangana Emblem Representation */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center p-1 border border-amber-400/40">
                <span className="text-[10px] font-black tracking-tighter text-amber-400">TG</span>
                <span className="text-xs">🏛️</span>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center">
                  Government of Telangana
                  <span className="text-xs font-normal text-amber-400 ml-2 font-mono">
                    (తెలంగాణ ప్రభుత్వం)
                  </span>
                </h1>
                <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3 mr-1" /> UIDAI Certified RD
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center space-x-1.5">
                <span className="text-emerald-400 font-semibold">Praja Palana (ప్రజా పాలన)</span>
                <span>•</span>
                <span>Sovereign Citizen Biometric Gateway</span>
                <span>•</span>
                <span className="text-slate-500 hidden sm:inline">MeeSeva 2.0</span>
              </p>
            </div>
          </div>

          {/* Language Switcher & Direct Entry */}
          <div className="flex items-center space-x-3">
            <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/10 text-xs">
              <button
                onClick={() => onLanguageChange("te")}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  language === "te"
                    ? "bg-amber-400 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                తెలుగు
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  language === "en"
                    ? "bg-amber-400 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange("hi")}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  language === "hi"
                    ? "bg-amber-400 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                हिन्दी
              </button>
            </div>

            <button
              onClick={onSkipToDashboard}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 transition-all"
            >
              <span>Skip Biometric &amp; Enter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 🚀 Main Heading Section & Biometric Presentation Chamber */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 flex flex-col justify-center">
        {/* Banner Headline */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTICATED CITIZEN WELFARE DISCOVERY • TELANGANA STATE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            {language === "te"
              ? "తెలంగాణ ప్రజా పాలన & మీసేవ బయోమెట్రిక్ ప్రవేశ ద్వారం"
              : language === "hi"
              ? "तेलंगाना प्रजा पालना एवं मीसेवा बायोमेट्रिक प्रवेश द्वार"
              : "Telangana Praja Palana & MeeSeva Biometric Gateway"}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === "te"
              ? "ఆధార్ రిజిస్టర్డ్ వేలిముద్ర లేదా ఫ్యామిలీ ఐడీ ద్వారా సెక్యూర్ బయోమెట్రిక్ ప్రవేశం. ఐఈఈఈ 7001 మరియు డీపీడీపీ యాక్ట్ 2023 ద్వారా పూర్తి గోప్యత రక్షణ."
              : language === "hi"
              ? "आधार पंजीकृत बायोमेट्रिक अथवा राशन कार्ड से सुरक्षित लॉगिन। आईईईई 7001 और डीपी़डीपी अधिनियम 2023 के तहत शून्य-डेटा-लीक सत्यापन।"
              : "Zero-leakage biometric authentication adhering to UIDAI RD Service, DPDP Act 2023, and IEEE 7001 transparency standards. Enter citizen credentials or use instant 1-click persona logins below."}
          </p>
        </div>

        {/* 🔬 Two-Column Interactive Biometric Chamber */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Biometric Hardware Presentation (Mantra / Morpho Scanner) */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 border border-indigo-900/60 shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Device Mode Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    STQC STG Optical Sensor #TG-401
                  </span>
                </div>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-amber-300 font-mono">
                  ISO/IEC 19794-2
                </span>
              </div>

              {/* Mode Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 mt-4 bg-black/40 p-1 rounded-xl border border-white/10 text-[11px] font-bold">
                <button
                  onClick={() => setAuthMode("fingerprint")}
                  className={`py-2 rounded-lg flex items-center justify-center space-x-1 transition-all ${
                    authMode === "fingerprint"
                      ? "bg-amber-400 text-slate-950 font-black shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Fingerprint className="w-3.5 h-3.5" />
                  <span>Fingerprint</span>
                </button>
                <button
                  onClick={() => setAuthMode("iris")}
                  className={`py-2 rounded-lg flex items-center justify-center space-x-1 transition-all ${
                    authMode === "iris"
                      ? "bg-amber-400 text-slate-950 font-black shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Iris RD</span>
                </button>
                <button
                  onClick={() => setAuthMode("meeseva")}
                  className={`py-2 rounded-lg flex items-center justify-center space-x-1 transition-all ${
                    authMode === "meeseva"
                      ? "bg-amber-400 text-slate-950 font-black shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>MeeSeva ID</span>
                </button>
              </div>

              {/* 🖐️ REALISTIC TACTILE BIOMETRIC SCANNER PLATEN */}
              <div className="my-6 flex flex-col items-center">
                <div
                  onClick={() => handleInitiateScan()}
                  className={`w-48 h-56 rounded-3xl p-1 relative flex flex-col items-center justify-center cursor-pointer transition-all duration-300 select-none ${
                    scanState === "matched"
                      ? "bg-gradient-to-b from-emerald-400 via-teal-500 to-emerald-600 shadow-xl shadow-emerald-500/30 scale-105"
                      : scanState === "scanning"
                      ? "bg-gradient-to-b from-blue-400 via-indigo-500 to-amber-400 shadow-xl shadow-blue-500/30 scale-102"
                      : "bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/20"
                  }`}
                  title="Click or Touch to Scan Fingerprint"
                >
                  {/* Scanner Device Bezel Inner Glass */}
                  <div className="w-full h-full bg-slate-950 rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden border border-white/20">
                    {/* Concentric Biometric Sonar Rings */}
                    {scanState === "scanning" && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-36 h-36 border border-emerald-400/30 rounded-full animate-pulse-ring"></div>
                        <div className="w-24 h-24 border border-blue-400/40 rounded-full animate-pulse-ring [animation-delay:400ms]"></div>
                      </div>
                    )}

                    {/* Animated Laser Sweep Line */}
                    {scanState === "scanning" && (
                      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b] animate-laser pointer-events-none z-20"></div>
                    )}

                    {/* Fingerprint Glyph or Iris Glyph */}
                    <div className="relative z-10 flex flex-col items-center">
                      {authMode === "fingerprint" ? (
                        <Fingerprint
                          className={`w-24 h-24 transition-all duration-300 ${
                            scanState === "matched"
                              ? "text-emerald-400 animate-fingerprint-glow scale-110"
                              : scanState === "scanning"
                              ? "text-amber-300 animate-pulse"
                              : "text-slate-500 hover:text-slate-300"
                          }`}
                        />
                      ) : authMode === "iris" ? (
                        <Eye
                          className={`w-24 h-24 transition-all duration-300 ${
                            scanState === "matched"
                              ? "text-emerald-400 scale-110"
                              : scanState === "scanning"
                              ? "text-blue-400 animate-pulse"
                              : "text-slate-500 hover:text-slate-300"
                          }`}
                        />
                      ) : (
                        <Smartphone
                          className={`w-24 h-24 transition-all duration-300 ${
                            scanState === "matched" ? "text-emerald-400" : "text-amber-400"
                          }`}
                        />
                      )}

                      <span
                        className={`text-[10px] font-mono mt-3 font-bold tracking-wider uppercase ${
                          scanState === "matched"
                            ? "text-emerald-300"
                            : scanState === "scanning"
                            ? "text-amber-300 animate-pulse"
                            : "text-slate-400"
                        }`}
                      >
                        {scanState === "matched"
                          ? "✓ AUTH VERIFIED"
                          : scanState === "scanning"
                          ? `SCANNING (${scanProgress}%)`
                          : "TOUCH SENSOR TO SCAN"}
                      </span>
                    </div>

                    {/* Scan Line Shimmer Texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                  </div>
                </div>

                {/* Status Bar Beneath Platen */}
                <div className="text-center mt-3 space-y-1">
                  <div className="flex items-center justify-center space-x-2 text-xs font-mono">
                    <span className="text-slate-400">Status:</span>
                    <strong
                      className={
                        scanState === "matched"
                          ? "text-emerald-400"
                          : scanState === "scanning"
                          ? "text-amber-400"
                          : "text-slate-300"
                      }
                    >
                      {scanState === "matched"
                        ? "Authentication Successful (99.4% Minutiae Match)"
                        : scanState === "scanning"
                        ? "Capturing Ridge Minutiae Points..."
                        : "Ready • Optical Surface Calibrated"}
                    </strong>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    Minutiae Count: <strong className="text-white">48 Points</strong> • UIDAI Hash:{" "}
                    <strong className="text-emerald-400 font-mono text-[10px]">0x7E3A91FC...TG</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Trigger */}
            <button
              onClick={() => handleInitiateScan()}
              disabled={scanState === "scanning"}
              className={`w-full py-3 rounded-2xl font-black text-xs transition-all shadow-lg flex items-center justify-center space-x-2 ${
                scanState === "matched"
                  ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black ring-2 ring-emerald-400"
                  : scanState === "scanning"
                  ? "bg-amber-400 text-slate-950 animate-pulse cursor-wait"
                  : "bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-amber-500/20 hover:shadow-amber-500/30"
              }`}
            >
              <Fingerprint className="w-4 h-4" />
              <span>
                {scanState === "matched"
                  ? "ENTERING JANSETU DASHBOARD..."
                  : scanState === "scanning"
                  ? "VERIFYING BIOMETRICS WITH UIDAI..."
                  : "AUTHENTICATE & ENTER JANSETU (బయోమెట్రిక్ ప్రవేశం)"}
              </span>
            </button>
          </div>

          {/* Right Column: Citizen Details & 1-Click Persona Quick Logins */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-indigo-900/60 shadow-2xl flex flex-col justify-between backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <UserCheck className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                    Citizen &amp; MeeSeva Credentials Verification
                  </h3>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" /> DPDP 2023 Masked
                </span>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4 text-xs">
                {/* District Selector */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Telangana District (జిల్లా):
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-3 py-2 text-white font-medium focus:ring-1 focus:ring-amber-400 outline-hidden"
                  >
                    <option value="Siddipet">Siddipet (సిద్దిపేట)</option>
                    <option value="Warangal">Warangal (వరంగల్)</option>
                    <option value="Karimnagar">Karimnagar (కరీంనగర్)</option>
                    <option value="Hyderabad">Hyderabad (హైదరాబాద్)</option>
                    <option value="Nalgonda">Nalgonda (నల్గొండ)</option>
                    <option value="Khammam">Khammam (ఖమ్మం)</option>
                    <option value="Nizamabad">Nizamabad (నిజామాబాద్)</option>
                    <option value="Rangareddy">Rangareddy (రంగారెడ్డి)</option>
                    <option value="Medak">Medak (మెదక్)</option>
                  </select>
                </div>

                {/* Aadhaar Input */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Aadhaar UID (ఆధార్ సంఖ్య):
                  </label>
                  <input
                    type="text"
                    value={aadhaarInput}
                    onChange={(e) => setAadhaarInput(e.target.value)}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-3 py-2 text-white font-mono font-medium focus:ring-1 focus:ring-amber-400 outline-hidden"
                    placeholder="XXXX-XXXX-4912"
                  />
                </div>

                {/* Praja Palana FSC Card */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Praja Palana / FSC Ration Card:
                  </label>
                  <input
                    type="text"
                    value={fscInput}
                    onChange={(e) => setFscInput(e.target.value)}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-3 py-2 text-white font-mono font-medium focus:ring-1 focus:ring-amber-400 outline-hidden"
                    placeholder="TG-FSC-W-891240"
                  />
                </div>

                {/* MeeSeva Operator Code */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    MeeSeva Operator Kiosk Ref:
                  </label>
                  <input
                    type="text"
                    value={operatorId}
                    onChange={(e) => setOperatorId(e.target.value)}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-3 py-2 text-emerald-300 font-mono font-medium focus:ring-1 focus:ring-amber-400 outline-hidden"
                    placeholder="MEESEVA-TG-4091"
                  />
                </div>
              </div>

              {/* 🌟 1-CLICK PRE-SEEDED TELANGANA PERSONA QUICK LOGINS */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center">
                    <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                    1-Click Verified Telangana Persona Logins (తక్షణ ప్రవేశం)
                  </h4>
                  <span className="text-[10px] text-slate-400">Click card to scan &amp; login</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {samplePersonas.map((persona) => {
                    const isSelected = selectedPersona.id === persona.id;
                    return (
                      <div
                        key={persona.id}
                        onClick={() => handleQuickPersonaSelect(persona)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                          isSelected
                            ? "bg-amber-400/10 border-amber-400 shadow-md ring-1 ring-amber-400/50"
                            : "bg-slate-950/60 border-white/10 hover:border-white/30 hover:bg-slate-950/90"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-2xl">{persona.avatar}</span>
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                              {persona.badge.split("&")[0]}
                            </span>
                          </div>
                          <h5 className="font-extrabold text-white text-xs leading-snug">
                            {persona.name}
                          </h5>
                          <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                            {persona.title}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                          <span className="text-emerald-400 font-mono">
                            {persona.profile.landOwnedAcres > 0
                              ? `${persona.profile.landOwnedAcres} Ac • Dharani`
                              : "MeeSeva FSC"}
                          </span>
                          <span className="font-bold text-amber-400 group-hover:underline flex items-center">
                            Scan <ArrowRight className="w-2.5 h-2.5 ml-0.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Statutory Flagship Schemes Preview */}
              <div className="mt-5 p-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-300">
                <span className="font-bold text-amber-300 block mb-1">
                  🏛️ Key Telangana Sovereign Welfare Schemes Synchronized:
                </span>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                    🌾 Rythu Bharosa (₹15,000/acre)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 font-semibold">
                    👩 Maha Lakshmi (₹2,500/mo + ₹500 Gas)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 font-semibold">
                    💡 Gruha Jyothi (200 Units Free)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    🏥 Rajiv Aarogyasri (₹10 Lakh Cover)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
                    🏠 Indiramma Indlu (₹5 Lakh)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                    🎓 Yuva Vikasam (₹5 Lakh Card)
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2 text-slate-400 text-[11px]">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-PII local biometric verification • DPDP Act 2023 Compliant</span>
              </div>

              <button
                onClick={onSkipToDashboard}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all flex items-center space-x-1.5"
              >
                <span>🚀 Launch Welfare Discovery Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-4 text-center text-xs text-slate-400">
        <p>
          Government of Telangana • Praja Palana Sovereign Welfare Discovery Engine • MeeSeva &amp; UIDAI Biometric Portal
        </p>
      </footer>
    </div>
  );
}
