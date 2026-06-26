"use client";

import { motion } from "framer-motion";
import { MapPin, HandCoins, CheckCircle } from "lucide-react";

const steps = [
  { icon: MapPin, step: "01", title: "Visit Us", desc: "Come to our office in Kololi. No appointment needed — walk in any time during business hours." },
  { icon: HandCoins, step: "02", title: "Choose Your Service", desc: "Tell us what you need — send money, exchange currency, or mobile money. We'll guide you to the best option." },
  { icon: CheckCircle, step: "03", title: "Done in Minutes", desc: "Most transfers are completed within minutes. Receive confirmation and be on your way." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-3">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400">Simple, fast, and transparent — every time</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#1B2A87] to-[#1B2A87] opacity-20" />

          {steps.map((step, i) => (
            <motion.div key={step.step}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}>
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#1B2A87] rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#f97316] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
