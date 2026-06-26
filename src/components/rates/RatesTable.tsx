"use client";

import { rates } from "@/lib/rates";
import { TrendingUp, Phone } from "lucide-react";

export default function RatesTable() {
  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl overflow-hidden">
      <div className="p-4 md:p-6 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg md:text-xl font-bold font-heading text-gray-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#1B2A87]" />
            Today's Exchange Rates
          </h2>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">All rates vs GMD (Gambian Dalasi)</p>
        </div>
        <a href="tel:+2202517942"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B2A87] text-white rounded-full text-sm font-medium hover:bg-[#162275] transition-colors shrink-0">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call for Best Rate</span>
          <span className="sm:hidden">Call Us</span>
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full" style={{ minWidth: "320px" }}>
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800/50">
              <th className="text-left py-3 px-3 md:px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Currency</th>
              <th className="text-right py-3 px-3 md:px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">We Buy</th>
              <th className="text-right py-3 px-3 md:px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">We Sell</th>
              <th className="text-right py-3 px-3 md:px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">WhatsApp Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {rates.map(rate => (
              <tr key={rate.code} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="py-3 px-3 md:px-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl">{rate.flag}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{rate.code}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">{rate.name}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3 md:px-6 text-right font-medium text-gray-900 dark:text-white text-sm">
                  {rate.buy.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 })}
                </td>
                <td className="py-3 px-3 md:px-6 text-right font-medium text-[#1B2A87] dark:text-blue-400 text-sm">
                  {rate.sell.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 })}
                </td>
                <td className="py-3 px-3 md:px-6 text-right hidden sm:table-cell">
                  <a href={`https://wa.me/2202517942?text=Hi%2C+I%27d+like+to+know+today%27s+rate+for+${rate.code}+to+GMD`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-[#1B2A87] dark:text-blue-400 rounded-full hover:bg-blue-100 transition-colors font-medium">
                    Ask for {rate.code}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: WhatsApp rate button */}
      <div className="sm:hidden px-4 py-3 border-t border-gray-100 dark:border-gray-700">
        <a href="https://wa.me/2202517942?text=Hi%2C+I%27d+like+to+know+today%27s+exchange+rates"
          target="_blank" rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          Ask for any rate on WhatsApp
        </a>
      </div>

      <div className="p-3 md:p-4 bg-amber-50 dark:bg-amber-900/20 border-t border-amber-100 dark:border-amber-800/30">
        <p className="text-xs text-amber-800 dark:text-amber-300 text-center">
          ⚠ Rates are indicative and updated daily. Call or visit us to confirm before transacting.
        </p>
      </div>
    </div>
  );
}
