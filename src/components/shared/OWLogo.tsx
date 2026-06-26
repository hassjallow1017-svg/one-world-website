"use client";

interface Props {
  variant?: "primary" | "reversed" | "icon";
  className?: string;
  width?: number;
}

export default function OWLogo({ variant = "primary", className = "", width = 180 }: Props) {
  const isReversed = variant === "reversed";
  const textColor = isReversed ? "#ffffff" : "#1B2A87";
  const taglineColor = "#DC2626";
  const globeColor = isReversed ? "#2D3FAA" : "#1B2A87";
  const globeBorder = isReversed ? "#4A5CC7" : "#2D3FAA";

  if (variant === "icon") {
    return (
      <svg width={width} height={width} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="One World Financial Services">
        {/* Globe */}
        <circle cx="22" cy="22" r="20" fill={globeColor} />
        {/* Currency symbols */}
        <text x="10" y="18" fontSize="7" fill="#DC2626" fontWeight="bold">£</text>
        <text x="22" y="14" fontSize="7" fill="#DC2626" fontWeight="bold">¥</text>
        <text x="10" y="28" fontSize="7" fill="#DC2626" fontWeight="bold">$</text>
        <text x="22" y="28" fontSize="7" fill="#DC2626" fontWeight="bold">€</text>
        {/* Orange signal arcs */}
        <path d="M 38 32 Q 46 22 38 12" fill="none" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        <path d="M 43 36 Q 55 22 43 8" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
        <path d="M 48 40 Q 64 22 48 4" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  const height = width * (160 / 500);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="One World Financial Services & Bureau De Change Ltd."
      role="img"
    >
      {/* Globe */}
      <circle cx="58" cy="68" r="52" fill={globeColor} />
      <circle cx="58" cy="68" r="52" fill="none" stroke={globeBorder} strokeWidth="1" />

      {/* Currency symbols on globe */}
      <text x="24" y="58" fontSize="18" fill="#DC2626" fontWeight="900" fontFamily="Arial, sans-serif">£</text>
      <text x="56" y="48" fontSize="18" fill="#DC2626" fontWeight="900" fontFamily="Arial, sans-serif">¥</text>
      <text x="24" y="84" fontSize="18" fill="#DC2626" fontWeight="900" fontFamily="Arial, sans-serif">$</text>
      <text x="56" y="84" fontSize="18" fill="#DC2626" fontWeight="900" fontFamily="Arial, sans-serif">€</text>

      {/* "One" text */}
      <text x="115" y="74" fontSize="52" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill={textColor} letterSpacing="-1">One</text>

      {/* "World" text — extra bold */}
      <text x="112" y="132" fontSize="72" fontWeight="900" fontFamily="Poppins, Arial, sans-serif" fill={textColor} letterSpacing="-2">World</text>

      {/* Orange signal arcs */}
      {/* Arc 1 — innermost, darkest orange */}
      <path d="M 355 110 Q 378 68 355 26" fill="none" stroke="#F97316" strokeWidth="14" strokeLinecap="round" />
      {/* Arc 2 — middle */}
      <path d="M 378 120 Q 412 68 378 16" fill="none" stroke="#FB923C" strokeWidth="14" strokeLinecap="round" />
      {/* Arc 3 — outermost, lightest */}
      <path d="M 400 130 Q 446 68 400 6" fill="none" stroke="#FBBF24" strokeWidth="14" strokeLinecap="round" />

      {/* Tagline */}
      <text x="112" y="155" fontSize="13" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill={taglineColor} letterSpacing="0.5">FINANCIAL SERVICES &amp; BUREAU DE CHANGE Ltd.</text>
    </svg>
  );
}
