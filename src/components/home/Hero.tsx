"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import BusinessStatus from "@/components/shared/BusinessStatus";
import QuoteModal from "@/components/shared/QuoteModal";
import OWLogo from "@/components/shared/OWLogo";
import { useLanguage } from "@/contexts/LanguageContext";

// Fixed positions to avoid hydration mismatch (no Math.random on server)
const FLOATING = [
  { sym: "$",  size: 52, left: "8%",  top: "15%" },
  { sym: "€",  size: 40, left: "20%", top: "70%" },
  { sym: "£",  size: 60, left: "35%", top: "25%" },
  { sym: "D",  size: 44, left: "55%", top: "60%" },
  { sym: "¥",  size: 48, left: "70%", top: "20%" },
  { sym: "₦",  size: 36, left: "80%", top: "75%" },
  { sym: "₵",  size: 42, left: "45%", top: "80%" },
  { sym: "﷼", size: 38, left: "15%", top: "40%" },
];

export default function Hero() {
  const { t } = useLanguage();
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section
        className="relative overflow-hidden min-h-[92vh] flex items-center"
        style={{ background: "linear-gradient(135deg, #1B2A87 0%, #2237A8 50%, #101b6a 100%)" }}
      >
        {/* Floating currency symbols — fixed positions, no Math.random */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {FLOATING.map((f, i) => (
            <motion.span
              key={i}
              className="absolute font-bold select-none"
              style={{
                fontSize: f.size,
                left: f.left,
                top: f.top,
                color: "rgba(255,255,255,0.08)",
              }}
              animate={{ y: [0, -20, 0], opacity: [0.05, 0.12, 0.05] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            >
              {f.sym}
            </motion.span>
          ))}

          {/* Decorative orange arcs — hidden on mobile to avoid overflow */}
          <div className="hidden sm:block" style={{
            position: "absolute", right: 0, top: 0, bottom: 0,
            width: "260px", opacity: 0.12, pointerEvents: "none",
          }}>
            <svg viewBox="0 0 200 600" style={{ width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
              <path d="M 60 500 Q 150 300 60 100" fill="none" stroke="#F97316" strokeWidth="32" strokeLinecap="round" />
              <path d="M 110 530 Q 220 300 110 70"  fill="none" stroke="#FB923C" strokeWidth="28" strokeLinecap="round" />
              <path d="M 160 560 Q 290 300 160 40"  fill="none" stroke="#FBBF24" strokeWidth="24" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 text-white w-full">
          <div className="max-w-3xl">
            {/* Logo + status */}
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="mb-6 flex flex-wrap items-center gap-4"
            >
              <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", borderRadius: "16px", padding: "12px 20px", border: "1px solid rgba(255,255,255,0.15)" }}>
                <OWLogo width={160} variant="reversed" />
              </div>
              <BusinessStatus />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
              style={{ color: "rgba(219,234,254,0.9)" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.subtext}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#calculator"
                style={{ background: "#F97316", color: "#fff", borderRadius: "9999px", padding: "16px 32px", fontWeight: 600, fontSize: "18px", textAlign: "center", textDecoration: "none", display: "inline-block" }}
                className="hover:opacity-90 transition-opacity">
                {t.hero.ctaCalculate}
              </a>
              <button onClick={() => setQuoteOpen(true)}
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "9999px", padding: "16px 32px", fontWeight: 600, fontSize: "18px", cursor: "pointer" }}
                className="hover:bg-white/20 transition-colors">
                Get a Quote
              </button>
              <Link href="/contact"
                style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: "9999px", padding: "16px 32px", fontWeight: 600, fontSize: "18px", textAlign: "center", textDecoration: "none", display: "inline-block" }}
                className="hover:bg-white/10 transition-colors">
                {t.hero.ctaContact}
              </Link>
            </motion.div>

            {/* Partner badges */}
            <motion.div
              className="mt-12 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            >
              <span style={{ color: "rgba(191,219,254,0.8)", fontSize: "14px" }}>Authorised agents for:</span>
              {["Western Union", "MoneyGram", "Ria", "Wave", "Orange Money"].map(p => (
                <span key={p} style={{ padding: "4px 12px", background: "rgba(255,255,255,0.1)", borderRadius: "9999px", color: "#fff", fontSize: "12px", fontWeight: 500, border: "1px solid rgba(255,255,255,0.2)" }}>
                  {p}
                </span>
              ))}
              <span style={{ color: "rgba(191,219,254,0.7)", fontSize: "12px" }}>+ 10 more</span>
            </motion.div>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }} preserveAspectRatio="none">
            <path fill="#f9fafb" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
