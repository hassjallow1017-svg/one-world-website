"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Aminata Jallow",
    location: "Kololi, The Gambia",
    rating: 5,
    time: "2 weeks ago",
    quote: "I've been using One World to receive money from my son in the UK for three years. The service is always fast, the staff are friendly, and the rates are the best in Kololi. I recommend them to everyone.",
    initial: "AJ",
    color: "#1B2A87",
  },
  {
    name: "Ousman Ceesay",
    location: "Bakau, The Gambia",
    rating: 5,
    time: "1 month ago",
    quote: "Best bureau de change in The Gambia. Honest rates, no hidden fees, and the team always explains everything clearly. I trust them completely with my money transfers.",
    initial: "OC",
    color: "#15803d",
  },
  {
    name: "Fatou Sanneh",
    location: "Banjul, The Gambia",
    rating: 5,
    time: "3 weeks ago",
    quote: "Quick and professional. I sent money to my family in Senegal through Wave and it arrived instantly. The staff helped me do everything step by step. Excellent service!",
    initial: "FS",
    color: "#b45309",
  },
  {
    name: "Lamin Touray",
    location: "Serrekunda, The Gambia",
    rating: 5,
    time: "2 months ago",
    quote: "Very competitive rates for USD and GBP. I always check here first before going anywhere else. Staff are professional and the process is smooth every time.",
    initial: "LT",
    color: "#7c3aed",
  },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-4">
            <GoogleLogo />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google Reviews</span>
            <div className="flex items-center gap-1 ml-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">5.0</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Trusted by thousands of families and businesses across The Gambia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div key={r.name}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}>
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: r.color }}>
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.time}</div>
                  </div>
                </div>
                <GoogleLogo />
              </div>
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[1,2,3,4,5].map(j => (
                  <Star key={j} className={`w-3.5 h-3.5 ${j <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              {/* Quote */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">"{r.quote}"</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://maps.google.com/?q=One+World+Financial+Services+Kololi+Gambia"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-[#1B2A87] hover:text-[#1B2A87] transition-colors">
            <GoogleLogo />
            See all reviews on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-xs text-gray-400 mt-3">Have you used our services? We'd love your review.</p>
        </div>
      </div>
    </section>
  );
}
