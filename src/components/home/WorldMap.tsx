"use client";

import { useState } from "react";

const destinations = [
  { name: "United Kingdom", partners: ["Western Union", "Ria", "MoneyGram", "ACE", "Trans-Fast"] },
  { name: "United States", partners: ["Western Union", "Ria", "MoneyGram", "Trans-Fast"] },
  { name: "France", partners: ["Western Union", "Ria", "MoneyGram", "PRIMR", "Soni Transfer"] },
  { name: "Germany", partners: ["Western Union", "Ria", "ACE"] },
  { name: "Italy", partners: ["Western Union", "Ria", "MoneyGram"] },
  { name: "Senegal", partners: ["Wave", "Orange Money", "Western Union"] },
  { name: "Nigeria", partners: ["Western Union", "MoneyGram", "Ria"] },
  { name: "Ghana", partners: ["Western Union", "MoneyGram", "Ria"] },
  { name: "Saudi Arabia", partners: ["Western Union", "ACE", "Ria"] },
  { name: "UAE", partners: ["Western Union", "MoneyGram", "ACE"] },
  { name: "Canada", partners: ["Western Union", "Ria", "Trans-Fast"] },
  { name: "Spain", partners: ["Western Union", "Ria", "MoneyGram"] },
];

export default function WorldMap() {
  const [hovered, setHovered] = useState<typeof destinations[0] | null>(null);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-3">Where We Send Money</h2>
          <p className="text-gray-600 dark:text-gray-400">200+ destinations worldwide through our trusted partner network</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {destinations.map(dest => (
            <div
              key={dest.name}
              onMouseEnter={() => setHovered(dest)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-white dark:bg-[#1e293b] rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-default border border-transparent hover:border-[#1B2A87]/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#1B2A87] rounded-full" />
                <span className="font-medium text-gray-900 dark:text-white text-sm">{dest.name}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {dest.partners.slice(0, 2).map(p => (
                  <span key={p} className="text-xs px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-[#1B2A87] dark:text-blue-400 rounded-full">
                    {p}
                  </span>
                ))}
                {dest.partners.length > 2 && (
                  <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                    +{dest.partners.length - 2} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
          Don't see your destination? Call us — we serve 200+ countries through our partner network.
        </p>
      </div>
    </section>
  );
}
