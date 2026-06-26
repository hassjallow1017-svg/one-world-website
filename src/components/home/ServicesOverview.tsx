"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, RefreshCw, Smartphone, Shield, Zap, Users, Award } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "International Money Transfer",
    desc: "Send and receive money worldwide through 13+ trusted partners including Western Union, MoneyGram, and Ria.",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    href: "/services#transfer",
  },
  {
    icon: RefreshCw,
    title: "Bureau De Change",
    desc: "Competitive exchange rates for USD, EUR, GBP, and 10+ major currencies. Licensed by the Central Bank of The Gambia.",
    color: "bg-blue-50 dark:bg-blue-900/20 text-[#1B2A87] dark:text-blue-400",
    href: "/services#exchange",
  },
  {
    icon: Smartphone,
    title: "Mobile Money",
    desc: "NAFA and Wave authorised agent. Deposit and withdraw from your mobile wallet instantly with zero hassle.",
    color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    href: "/services#mobile",
  },
];

const whyUs = [
  { icon: Shield, title: "Trusted Partners", desc: "Authorised by globally recognised money transfer operators" },
  { icon: Award, title: "Competitive Rates", desc: "Best exchange rates updated daily" },
  { icon: Zap, title: "Fast Transfers", desc: "Most transfers completed in minutes" },
  { icon: Users, title: "Local Expertise", desc: "Serving The Gambia since 2010" },
];

export default function ServicesOverview() {
  return (
    <>
      {/* Services */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-3">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need for financial services in one convenient location in Kololi, The Gambia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title}
                className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[#1B2A87] dark:text-blue-400 font-medium text-sm hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-3">Why Choose One World?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className="w-16 h-16 bg-[#eef0fb] dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#1B2A87]" />
                </div>
                <h3 className="font-semibold font-heading text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
