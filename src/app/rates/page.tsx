import type { Metadata } from "next";
import RatesTable from "@/components/rates/RatesTable";
import RateChart from "@/components/rates/RateChart";
import RateAlert from "@/components/rates/RateAlert";
import CurrencyCalculator from "@/components/home/CurrencyCalculator";

export const metadata: Metadata = {
  title: "Exchange Rates | One World Financial Services",
  description: "Today's buy and sell exchange rates for USD, EUR, GBP, CHF, CAD, SAR, AED, CNY and more vs GMD at One World Financial Services in The Gambia.",
};

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a]">
      {/* Header */}
      <div className="bg-[#1B2A87] py-16 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">Exchange Rates</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Today's indicative buy & sell rates. Updated daily — call us to confirm before transacting.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-10">
        <RatesTable />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RateChart />
          <RateAlert />
        </div>
      </div>

      <CurrencyCalculator />
    </div>
  );
}
