"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { rates, getRateHistory } from "@/lib/rates";

export default function RateChart() {
  const [selectedCode, setSelectedCode] = useState("USD");
  const data = getRateHistory(selectedCode);

  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white">Rate History (7 Days)</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{selectedCode}/GMD buy & sell rates</p>
        </div>
        <select value={selectedCode} onChange={e => setSelectedCode(e.target.value)}
          className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B2A87]">
          {rates.map(r => (
            <option key={r.code} value={r.code}>{r.flag} {r.code}</option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 11 }} />
          <YAxis domain={["auto", "auto"]} tick={{ fontSize: 11 }} width={55} />
          <Tooltip
            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
            formatter={(v: number) => [`${v.toFixed(3)} GMD`]}
          />
          <Legend />
          <Line type="monotone" dataKey="buy" stroke="#f97316" strokeWidth={2} dot={false} name="Buy Rate" />
          <Line type="monotone" dataKey="sell" stroke="#1B2A87" strokeWidth={2} dot={false} name="Sell Rate" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
