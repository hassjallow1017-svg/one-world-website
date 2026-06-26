"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { calculateFees, destinationCountries } from "@/lib/fees";

export default function FeeComparison() {
  const [amount, setAmount] = useState("5000");
  const [country, setCountry] = useState("United Kingdom");
  const [results, setResults] = useState<ReturnType<typeof calculateFees>>([]);
  const [searched, setSearched] = useState(false);

  const handleCompare = () => {
    const num = parseFloat(amount);
    if (!isNaN(num) && num > 0) {
      setResults(calculateFees(num));
      setSearched(true);
    }
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#141b4d]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-3">
            Transfer Fee Comparison
          </h2>
          <p className="text-gray-600 dark:text-gray-400">See which service gives your recipient the most money</p>
        </div>

        {/* Inputs */}
        <div className="bg-gray-50 dark:bg-[#1e293b] rounded-2xl p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Send Amount (GMD)</label>
              <input type="number" value={amount} min="1" onChange={e => setAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Destination Country</label>
              <select value={country} onChange={e => setCountry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B2A87] text-sm">
                {destinationCountries.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex items-end">
              <button onClick={handleCompare}
                className="w-full px-6 py-3 bg-[#1B2A87] text-white rounded-xl font-semibold hover:bg-[#162275] transition-colors text-sm">
                Compare Now
              </button>
            </div>
          </div>
        </div>

        {/* Results — mobile: cards, desktop: table */}
        {searched && results.length > 0 && (
          <>
            {/* Mobile card layout (hidden on sm+) */}
            <div className="sm:hidden space-y-3">
              {results.map((row, i) => (
                <div key={row.service}
                  className={`rounded-xl p-4 border ${i === 0 ? "border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20" : "border-gray-100 dark:border-gray-700 bg-white dark:bg-[#1e293b]"}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {i === 0 && <Trophy className="w-4 h-4 text-yellow-500" />}
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">{row.service}</span>
                    </div>
                    {i === 0 && (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">Best Value</span>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center mt-3">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Fee</div>
                      <div className="text-sm font-semibold text-red-600 dark:text-red-400">D {row.fee.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Gets</div>
                      <div className="text-sm font-bold text-[#1B2A87] dark:text-blue-400">D {row.recipientGets.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Speed</div>
                      <div className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full px-2 py-0.5 inline-block">{row.speed}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table (hidden on mobile) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Service</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Fee (GMD)</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Recipient Gets</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Speed</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, i) => (
                    <tr key={row.service}
                      className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${i === 0 ? "bg-yellow-50 dark:bg-yellow-900/20" : ""}`}>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {i === 0 && <Trophy className="w-4 h-4 text-yellow-500 shrink-0" />}
                          <span className="font-medium text-gray-900 dark:text-white text-sm">{row.service}</span>
                          {i === 0 && <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400 text-xs rounded-full font-medium">Best Value</span>}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right text-sm text-red-600 dark:text-red-400 font-medium">D {row.fee.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right text-sm font-bold text-[#1B2A87] dark:text-blue-400">D {row.recipientGets.toLocaleString()}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded-full">{row.speed}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 text-center">
              * Estimated fees for illustration. Visit us or call for exact current fees and rates.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
