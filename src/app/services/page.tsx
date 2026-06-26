import type { Metadata } from "next";
import { Globe, RefreshCw, Smartphone, ChevronDown } from "lucide-react";
import ServicesAccordion from "@/components/services/ServicesAccordion";

export const metadata: Metadata = {
  title: "Services | One World Financial Services",
  description: "International money transfers, bureau de change, and mobile money services in The Gambia. Step-by-step guides for Western Union, MoneyGram, Ria, Wave and Orange Money.",
};

const services = [
  {
    id: "transfer",
    icon: Globe,
    title: "International Money Transfer",
    color: "bg-blue-600",
    desc: "Send money worldwide or receive payments from abroad through our network of 13+ trusted partners. Whether your family is in Europe, America, or across Africa — we get money there fast.",
    features: [
      "Send and receive in minutes with Western Union, MoneyGram, Ria and more",
      "Competitive fees — we'll show you the best option",
      "No bank account required — cash in, cash out",
      "Bring valid ID (National ID or Passport) for all transactions",
    ],
  },
  {
    id: "exchange",
    icon: RefreshCw,
    title: "Bureau De Change",
    color: "bg-[#1B2A87]",
    desc: "Buy and sell foreign currency at competitive daily rates. Licensed by the Central Bank of The Gambia, we offer transparent pricing with no hidden charges.",
    features: [
      "USD, EUR, GBP, CHF, SAR, AED, CNY and more",
      "Best rates updated daily",
      "Licensed Bureau De Change — Central Bank of The Gambia",
      "No hidden fees — what you see is what you get",
    ],
    currencies: ["USD", "EUR", "GBP", "CHF", "SEK", "NOK", "DKK", "CAD", "SAR", "AED", "CNY"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Money Agent",
    color: "bg-orange-500",
    desc: "Authorised NAFA and Wave agent. Deposit into your mobile wallet or withdraw cash quickly and safely — no queues, no delays.",
    features: [
      "Wave mobile money deposits and withdrawals",
      "NAFA mobile money agent",
      "No charges on most deposits",
      "Instant — your phone is updated immediately",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a]">
      <div className="bg-[#1B2A87] py-16 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">Our Services</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Everything you need for financial services in The Gambia — in one place
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-10">
          {services.map((service, i) => (
            <section key={service.id} id={service.id}
              className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shrink-0`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">{service.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{service.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-[#1B2A87] mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                {"currencies" in service && service.currencies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.currencies.map(c => (
                      <span key={c} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[#1B2A87] dark:text-blue-400 rounded-full text-sm font-medium">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* How To Send Money Guides */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2">How To Send Money</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Step-by-step guides for first-time senders</p>
          <ServicesAccordion />
        </section>
      </div>
    </div>
  );
}
