"use client";

const partnerNames = [
  "Western Union", "Ria Money Transfer", "MoneyGram", "PRIMR Money", "Soni Transfer",
  "ACE Money Transfer", "Ping Money Transfer", "Trans-Fast", "BnG Money Transfer",
  "Wave", "Orange Money", "Taybull PAY", "NAFA", "Visa", "Mastercard",
];

export default function PartnerMarquee() {
  const doubled = [...partnerNames, ...partnerNames];

  return (
    <section style={{ background: "#1B2A87", padding: "32px 0", overflow: "hidden" }}>
      <p style={{ textAlign: "center", color: "rgba(191,219,254,0.8)", fontSize: "11px", marginBottom: "12px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
        Our Authorised Partners
      </p>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: "16px", whiteSpace: "nowrap" }}>
          {doubled.map((name, i) => (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center",
              padding: "6px 16px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "9999px",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.18)",
              flexShrink: 0,
            }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
