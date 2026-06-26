import type { Metadata } from "next";
import { partners } from "@/lib/partners";
import { Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Partners | One World Financial Services",
  description: "All money transfer and payment partners at One World Financial Services — Western Union, MoneyGram, Ria, Wave, Orange Money and more.",
};

type Category = "international" | "mobile" | "card";

const categories: { id: Category; label: string; desc: string }[] = [
  { id: "international", label: "International Transfers", desc: "Send and receive money across borders" },
  { id: "mobile", label: "Mobile Money", desc: "Instant mobile wallet deposits & withdrawals" },
  { id: "card", label: "Card Payments", desc: "We accept major card networks" },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a]">
      <div className="bg-[#1B2A87] py-16 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">Our Partners</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          15+ globally trusted money transfer and payment partners — all under one roof
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {categories.map(cat => {
          const items = partners.filter(p => p.category === cat.id);
          return (
            <section key={cat.id}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">{cat.label}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{cat.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map(partner => (
                  <PartnerCard key={partner.name} partner={partner} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-md hover:shadow-xl transition-shadow p-5">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
          style={{ backgroundColor: partner.color, color: partner.textColor || "#1f2937" }}
        >
          {partner.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="font-semibold font-heading text-gray-900 dark:text-white">{partner.name}</h3>
          <span className="inline-flex items-center gap-1 text-xs text-green-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
            <Clock className="w-3 h-3" /> {partner.speed}
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{partner.description}</p>
      <div className="flex items-start gap-1.5">
        <Globe className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
        <div className="flex flex-wrap gap-1">
          {partner.countries.slice(0, 4).map(c => (
            <span key={c} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{c}</span>
          ))}
          {partner.countries.length > 4 && (
            <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">+{partner.countries.length - 4} more</span>
          )}
        </div>
      </div>
    </div>
  );
}
