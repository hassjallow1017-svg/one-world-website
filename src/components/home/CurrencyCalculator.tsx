"use client";

import { useState, useEffect } from "react";
import { ArrowLeftRight, Phone } from "lucide-react";
import { CALCULATOR_CURRENCIES, rates, convert } from "@/lib/rates";

export default function CurrencyCalculator() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("GMD");
  const [amount, setAmount] = useState("100");
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    const num = parseFloat(amount);
    if (!isNaN(num) && num > 0) setResult(convert(num, from, to));
    else setResult(0);
  }, [from, to, amount]);

  const swap = () => { setFrom(to); setTo(from); };

  const fromRate = rates.find(r => r.code === from);
  const toRate   = rates.find(r => r.code === to);

  const allCurrencies = ["GMD", ...CALCULATOR_CURRENCIES.filter(c => c !== "GMD")];

  return (
    <section id="calculator" className="py-20 px-4 bg-gray-50 dark:bg-[#0a0f2e]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-3">
            Live Currency Calculator
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Calculate your transfer instantly with today's indicative rates</p>
        </div>

        <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl p-4 md:p-8">
          {/* Mobile: stacked layout. Desktop: 3-column grid */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr,auto,1fr] md:items-end">

            {/* FROM */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">You send</label>
              <div className="flex gap-2">
                <select value={from} onChange={e => setFrom(e.target.value)}
                  className="w-24 md:w-auto flex-shrink-0 px-2 md:px-3 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm font-medium">
                  {allCurrencies.map(c => (
                    <option key={c} value={c}>{rates.find(r => r.code === c)?.flag || "🇬🇲"} {c}</option>
                  ))}
                </select>
                <input
                  type="number" min="0" step="any" value={amount}
                  onChange={e => setAmount(e.target.value)}
                  className="flex-1 min-w-0 px-3 md:px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-base md:text-lg font-semibold" />
              </div>
            </div>

            {/* SWAP — horizontal on mobile */}
            <div className="flex justify-center">
              <button onClick={swap} aria-label="Swap currencies"
                className="p-3 bg-[#1B2A87] text-white rounded-full hover:bg-[#162275] transition-colors shadow-md active:scale-95">
                <ArrowLeftRight className="w-5 h-5" />
              </button>
            </div>

            {/* TO */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">You get</label>
              <div className="flex gap-2">
                <select value={to} onChange={e => setTo(e.target.value)}
                  className="w-24 md:w-auto flex-shrink-0 px-2 md:px-3 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm font-medium">
                  {allCurrencies.map(c => (
                    <option key={c} value={c}>{rates.find(r => r.code === c)?.flag || "🇬🇲"} {c}</option>
                  ))}
                </select>
                <div className="flex-1 min-w-0 px-3 md:px-4 py-3 border border-[#1B2A87] rounded-xl bg-blue-50 dark:bg-blue-900/20 text-base md:text-lg font-bold text-[#1B2A87] dark:text-blue-400 overflow-hidden">
                  {result > 0 ? result.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "—"}
                </div>
              </div>
            </div>
          </div>

          {/* Rate info + WhatsApp */}
          <div className="mt-5 p-3 md:p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {from !== "GMD" && fromRate && (
                  <span>1 {from} ≈ <strong className="text-gray-900 dark:text-white">{fromRate.sell.toLocaleString()} GMD</strong></span>
                )}
                {from === "GMD" && toRate && (
                  <span>1 {to} ≈ <strong className="text-gray-900 dark:text-white">{toRate.sell.toLocaleString()} GMD</strong></span>
                )}
              </div>
              <a href={`https://wa.me/2202517942?text=Hi%2C+I%27d+like+to+know+today%27s+rate+for+${from}+to+${to}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Get Rate on WhatsApp</span>
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 text-center">
            ⚠ Rates updated daily — call us to confirm today's exact rate before transacting
          </p>
        </div>
      </div>
    </section>
  );
}
