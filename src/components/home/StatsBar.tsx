"use client";

import AnimatedCounter from "@/components/shared/AnimatedCounter";

const stats = [
  { value: 15,    suffix: "+", label: "Money Transfer Partners" },
  { value: 50000, suffix: "+", label: "Transfers Processed" },
  { value: 2010,  suffix: "",  label: "Serving Gambia Since" },
  { value: 4,     suffix: "",  label: "Phone Lines Available" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "#1B2A87", padding: "40px 16px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}
        className="lg:grid-cols-4">
        {stats.map(stat => (
          <div key={stat.label} style={{ padding: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, color: "#F97316", fontFamily: "var(--font-poppins), sans-serif" }}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div style={{ color: "rgba(191,219,254,0.85)", fontSize: "14px", marginTop: "4px" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
