import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import CurrencyCalculator from "@/components/home/CurrencyCalculator";
import FeeComparison from "@/components/home/FeeComparison";
import ServicesOverview from "@/components/home/ServicesOverview";
import PartnerMarquee from "@/components/home/PartnerMarquee";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import BranchGallery from "@/components/home/BranchGallery";
import WorldMap from "@/components/home/WorldMap";
import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "One World Financial Services | Money Transfer & Bureau De Change in The Gambia",
  description: "Send money worldwide, exchange currency, and access mobile money services at One World Financial Services in Kololi, The Gambia. Western Union, MoneyGram, Ria, Wave & more.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CurrencyCalculator />
      <FeeComparison />
      <ServicesOverview />
      <PartnerMarquee />
      <HowItWorks />
      <WorldMap />
      <BranchGallery />
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1B2A87] to-[#162275] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Visit Us Today</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-green-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Kololi, The Gambia</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["+220 2517942", "+220 2635333", "+220 2660305", "+220 3704323"].map(num => (
                <a key={num} href={`tel:+220${num.replace(/\D/g, "").slice(3)}`}
                  className="flex items-center gap-1 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  {num}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="px-8 py-4 bg-white text-[#1B2A87] rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Directions
            </Link>
            <a href="https://wa.me/2202517942?text=Hello%2C+I%27d+like+to+enquire+about+your+services"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-green-400 transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
