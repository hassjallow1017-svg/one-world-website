"use client";

import { useEffect, useState } from "react";
import { getBusinessStatus } from "@/lib/businessHours";

export default function BusinessStatus() {
  const [status, setStatus] = useState<ReturnType<typeof getBusinessStatus> | null>(null);

  useEffect(() => {
    setStatus(getBusinessStatus());
    const interval = setInterval(() => setStatus(getBusinessStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "8px",
      padding: "4px 12px", borderRadius: "9999px", fontSize: "13px", fontWeight: 500,
      backgroundColor: status.isOpen ? "rgba(220,252,231,0.9)" : "rgba(254,226,226,0.9)",
      color: status.isOpen ? "#166534" : "#991b1b",
    }}>
      <span style={{
        width: "8px", height: "8px", borderRadius: "50%",
        backgroundColor: status.isOpen ? "#22c55e" : "#ef4444",
        display: "inline-block",
      }} />
      {status.isOpen ? "Open Now" : `Closed · ${status.nextOpenTime}`}
    </span>
  );
}
