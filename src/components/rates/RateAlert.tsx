"use client";

import { useState } from "react";
import { Bell, CheckCircle } from "lucide-react";
import { rates } from "@/lib/rates";

export default function RateAlert() {
  const [email, setEmail] = useState("");
  const [pair, setPair] = useState("USD/GMD");
  const [targetRate, setTargetRate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const alerts = JSON.parse(localStorage.getItem("ow-rate-alerts") || "[]");
    alerts.push({ email, pair, targetRate, createdAt: new Date().toISOString() });
    localStorage.setItem("ow-rate-alerts", JSON.stringify(alerts));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-[#1B2A87] mx-auto mb-3" />
        <h3 className="text-lg font-semibold font-heading text-gray-900 dark:text-white mb-2">Alert Saved!</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs mx-auto">
          We'll update this page daily. Check back or call us at{" "}
          <a href="tel:+2202517942" className="text-[#1B2A87] font-medium">+220 2517942</a> for live rates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
          <Bell className="w-5 h-5 text-[#f97316]" />
        </div>
        <div>
          <h3 className="font-bold font-heading text-gray-900 dark:text-white">Set a Rate Alert</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Notify me when the rate hits my target</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm"
            placeholder="you@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency Pair</label>
          <select value={pair} onChange={e => setPair(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm">
            {rates.map(r => <option key={r.code}>{r.code}/GMD</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Rate (GMD)</label>
          <input required type="number" step="0.001" min="0" value={targetRate} onChange={e => setTargetRate(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm"
            placeholder="e.g. 72.50" />
        </div>
        <button type="submit"
          className="w-full py-3 bg-[#f97316] text-white rounded-full font-semibold hover:bg-orange-600 transition-colors text-sm">
          Save Alert
        </button>
      </form>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center">
        No spam — this is a local reminder only. Rates are not sent via email.
      </p>
    </div>
  );
}
