import type { Metadata } from "next";
import { Shield, Zap, Heart, Users, Award, FileText } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us | One World Financial Services",
  description: "Learn about One World Financial Services & Bureau De Change Ltd. — licensed, trusted, and serving The Gambia since 2010.",
};

const values = [
  { icon: Shield, title: "Trust", desc: "We are licensed, transparent, and regulated by the Central Bank of The Gambia. Your money is safe with us." },
  { icon: Zap, title: "Speed", desc: "Most transfers are completed within minutes. We know your time is valuable." },
  { icon: Award, title: "Integrity", desc: "Honest rates, no hidden fees, and clear communication — every single time." },
  { icon: Heart, title: "Community", desc: "We're part of The Gambia community. We understand your needs because they are our needs too." },
];

const team = [
  { name: "Managing Director", initials: "MD", role: "Leadership & Operations" },
  { name: "Operations Manager", initials: "OM", role: "Day-to-Day Operations" },
  { name: "Senior Cashier", initials: "SC", role: "Transactions & Customer Service" },
  { name: "Compliance Officer", initials: "CO", role: "AML/KYC & Regulatory" },
];

const stats = [
  { value: 50000, suffix: "+", label: "Transfers Processed" },
  { value: 15, suffix: "+", label: "Transfer Partners" },
  { value: 10, suffix: "+", label: "Years Serving Gambia" },
  { value: 4, suffix: "", label: "Phone Lines" },
];

const idTypes = [
  "Gambian National ID Card",
  "Valid Passport",
  "Driver's License",
  "Resident Permit (for foreigners)",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a]">
      {/* Hero */}
      <div className="bg-[#1B2A87] py-16 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">About One World</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Licensed, trusted, and serving The Gambia since 2010
        </p>
      </div>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                One World Financial Services & Bureau De Change Ltd. was founded with a simple mission: to make financial services accessible to every Gambian family and business — regardless of where they are sending money to or receiving from.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Based in Kololi, The Gambia, we have grown to become one of the most trusted money transfer and currency exchange agents in the country. Over the years, we have built relationships with the world's leading money transfer operators, making us a one-stop shop for all your financial needs.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                From supporting families receiving remittances from loved ones abroad to helping businesses manage foreign currency — we are here to serve you with speed, integrity, and local expertise.
              </p>
            </div>
            <div className="bg-[#1B2A87] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold font-heading mb-3">Our Mission</h3>
              <p className="text-green-100 leading-relaxed italic text-lg">
                "To provide accessible, fast, and reliable financial services to every individual and business in The Gambia."
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="text-xl font-bold font-heading mb-3">Our Vision</h3>
                <p className="text-green-100 text-sm leading-relaxed">
                  To be The Gambia's most trusted financial services partner — connecting families, enabling businesses, and supporting economic growth through responsible, accessible money services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-[#1B2A87]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
          {stats.map(stat => (
            <div key={stat.label} className="p-4">
              <div className="text-4xl font-bold font-heading">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-green-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-3">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-[#eef0fb] dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-[#1B2A87]" />
                </div>
                <h3 className="font-semibold font-heading text-gray-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-3">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400">Dedicated professionals ready to serve you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.name} className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-[#1B2A87] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">{member.name}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-4 bg-white dark:bg-[#1e293b]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AML/KYC */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                <h3 className="font-bold font-heading text-gray-900 dark:text-white">AML/KYC Requirements</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                To comply with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations, all customers must present valid identification for money transfer transactions.
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Accepted ID documents:</p>
              <ul className="space-y-1.5">
                {idTypes.map(id => (
                  <li key={id} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#1B2A87]">✓</span> {id}
                  </li>
                ))}
              </ul>
            </div>

            {/* Licensing */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800/30">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#1B2A87]" />
                <h3 className="font-bold font-heading text-gray-900 dark:text-white">Licensing & Regulation</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Licensed Bureau De Change</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs">Central Bank of The Gambia</div>
                </div>
                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Authorised Money Transfer Agent</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs">Western Union, MoneyGram, Ria and more</div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                  We operate under strict regulatory oversight to protect our customers and ensure compliance with all applicable laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
