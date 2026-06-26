"use client";

import { useState } from "react";
import { ChevronDown, User, CreditCard, Send, CheckCircle, Phone } from "lucide-react";

const guides = [
  {
    title: "How to receive Western Union money in The Gambia",
    service: "Western Union",
    color: "#f5a623",
    steps: [
      { icon: Phone, text: "Ask the sender to visit a Western Union location in their country and send to 'The Gambia'." },
      { icon: User, text: "They will receive an MTCN (Money Transfer Control Number) — share this with you." },
      { icon: CreditCard, text: "Bring your National ID or Passport and the MTCN to our office in Kololi." },
      { icon: CheckCircle, text: "Our agent will verify the transfer and pay you cash in GMD or the original currency." },
    ],
  },
  {
    title: "How to send money via MoneyGram in The Gambia",
    service: "MoneyGram",
    color: "#eb0000",
    steps: [
      { icon: User, text: "Come to One World with your National ID or Passport and the recipient's full name." },
      { icon: Send, text: "Tell us the amount you want to send and the destination country." },
      { icon: CreditCard, text: "Pay the transfer amount plus the service fee in GMD." },
      { icon: CheckCircle, text: "You'll receive a reference number — share it with your recipient so they can collect." },
    ],
  },
  {
    title: "How to send money via Ria Money Transfer",
    service: "Ria",
    color: "#e31837",
    steps: [
      { icon: User, text: "Visit our office with a valid ID and recipient details (full name, country, phone)." },
      { icon: Send, text: "Choose Ria as your transfer service and specify the amount." },
      { icon: CreditCard, text: "Pay in GMD — we'll calculate the fee and exchange rate for you." },
      { icon: CheckCircle, text: "Your recipient can collect from any Ria agent in their country using the transfer number." },
    ],
  },
  {
    title: "How to deposit or withdraw Wave money in The Gambia",
    service: "Wave",
    color: "#00b9f1",
    steps: [
      { icon: Phone, text: "Make sure your Wave account is active. If you need help setting it up, our staff will assist you." },
      { icon: Send, text: "Tell us whether you want to deposit (add money) or withdraw (get cash) and the amount." },
      { icon: CreditCard, text: "For withdrawals: show your Wave app and enter your PIN when prompted." },
      { icon: CheckCircle, text: "Your account is updated instantly. No waiting — it's real-time." },
    ],
  },
  {
    title: "How to use Orange Money in The Gambia",
    service: "Orange Money",
    color: "#ff6600",
    steps: [
      { icon: Phone, text: "Have your Orange SIM card registered and Orange Money activated." },
      { icon: Send, text: "Visit us for cash in (deposit) or cash out (withdrawal) services." },
      { icon: CreditCard, text: "Show your phone and confirm the transaction with your Orange Money PIN." },
      { icon: CheckCircle, text: "Instant update to your wallet — you'll receive an SMS confirmation from Orange." },
    ],
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {guides.map(guide => (
        <div key={guide.service} className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpen(open === guide.service ? null : guide.service)}
            aria-expanded={open === guide.service}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 rounded-full" style={{ backgroundColor: guide.color }} />
              <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{guide.title}</span>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open === guide.service ? "rotate-180" : ""}`} />
          </button>

          {open === guide.service && (
            <div className="px-6 pb-6">
              <ol className="space-y-3">
                {guide.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5"
                      style={{ backgroundColor: guide.color }}>
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
