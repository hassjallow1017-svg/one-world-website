"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";
import QuoteModal from "@/components/shared/QuoteModal";
import OWLogo from "@/components/shared/OWLogo";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "wo", label: "WO", flag: "🇸🇳" },
  { code: "ma", label: "MA", flag: "🇬🇲" },
];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navLinks = [
    { href: "/",         label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/partners", label: t.nav.partners },
    { href: "/rates",    label: t.nav.rates },
    { href: "/about",    label: t.nav.about },
    { href: "/contact",  label: t.nav.contact },
  ];

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 40,
        backgroundColor: isDark
          ? scrolled ? "rgba(10,15,46,0.97)" : "#0a0f2e"
          : scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.3s, box-shadow 0.3s",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <Link href="/" aria-label="One World Home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <OWLogo width={148} variant="primary" />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "24px" }} className="hidden lg:flex">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                style={{
                  fontSize: "14px", fontWeight: 500, textDecoration: "none",
                  color: pathname === link.href ? "#1B2A87" : isDark ? "#d1d5db" : "#374151",
                  borderBottom: pathname === link.href ? "2px solid #1B2A87" : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                }}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Language toggle */}
            <div className="hidden sm:flex" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {languages.map(lang => (
                <button key={lang.code} onClick={() => setLanguage(lang.code)}
                  style={{
                    padding: "4px 8px", fontSize: "12px", borderRadius: "6px", border: "none", cursor: "pointer",
                    fontWeight: 500,
                    backgroundColor: language === lang.code ? "#1B2A87" : "transparent",
                    color: language === lang.code ? "#fff" : isDark ? "#9ca3af" : "#6b7280",
                  }}>
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>

            {/* Dark mode */}
            {mounted && (
              <button onClick={() => setTheme(isDark ? "light" : "dark")}
                style={{ padding: "8px", borderRadius: "9999px", border: "none", cursor: "pointer", background: "transparent", color: isDark ? "#fbbf24" : "#4b5563" }}
                aria-label="Toggle dark mode">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Quote CTA */}
            <button onClick={() => setQuoteOpen(true)}
              className="hidden sm:block"
              style={{ padding: "8px 16px", background: "#F97316", color: "#fff", borderRadius: "9999px", fontSize: "14px", fontWeight: 600, border: "none", cursor: "pointer" }}>
              {t.nav.getQuote}
            </button>

            {/* Mobile toggle */}
            <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
              style={{ padding: "8px", background: "transparent", border: "none", cursor: "pointer", color: isDark ? "#d1d5db" : "#374151" }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden" style={{ backgroundColor: isDark ? "#0a0f2e" : "#fff", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "16px" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}
                  style={{
                    padding: "8px 0", fontSize: "14px", fontWeight: 500, textDecoration: "none",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    color: pathname === link.href ? "#1B2A87" : isDark ? "#d1d5db" : "#374151",
                  }}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
              {languages.map(lang => (
                <button key={lang.code} onClick={() => setLanguage(lang.code)}
                  style={{
                    padding: "4px 8px", fontSize: "12px", borderRadius: "6px", border: "none", cursor: "pointer",
                    fontWeight: 500,
                    backgroundColor: language === lang.code ? "#1B2A87" : "transparent",
                    color: language === lang.code ? "#fff" : "#6b7280",
                  }}>
                  {lang.flag} {lang.label}
                </button>
              ))}
              <button onClick={() => setQuoteOpen(true)}
                style={{ marginLeft: "auto", padding: "8px 16px", background: "#F97316", color: "#fff", borderRadius: "9999px", fontSize: "12px", fontWeight: 600, border: "none", cursor: "pointer" }}>
                {t.nav.getQuote}
              </button>
            </div>
          </div>
        )}
      </header>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
