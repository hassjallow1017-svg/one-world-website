import liveRates from "@/data/live-rates.json";

export interface Rate {
  code: string;
  name: string;
  symbol: string;
  buy: number;
  sell: number;
  flag: string;
}

// Metadata stays here — only numbers come from live-rates.json
const RATE_META: Omit<Rate, "buy" | "sell">[] = [
  { code: "USD", name: "US Dollar",         symbol: "$",   flag: "🇺🇸" },
  { code: "EUR", name: "Euro",              symbol: "€",   flag: "🇪🇺" },
  { code: "GBP", name: "British Pound",     symbol: "£",   flag: "🇬🇧" },
  { code: "CHF", name: "Swiss Franc",       symbol: "₣",   flag: "🇨🇭" },
  { code: "SEK", name: "Swedish Krona",     symbol: "kr",  flag: "🇸🇪" },
  { code: "NOK", name: "Norwegian Krone",   symbol: "kr",  flag: "🇳🇴" },
  { code: "DKK", name: "Danish Krone",      symbol: "kr",  flag: "🇩🇰" },
  { code: "CAD", name: "Canadian Dollar",   symbol: "$",   flag: "🇨🇦" },
  { code: "SAR", name: "Saudi Riyal",       symbol: "﷼",   flag: "🇸🇦" },
  { code: "AED", name: "UAE Dirham",        symbol: "د.إ", flag: "🇦🇪" },
  { code: "CNY", name: "Chinese Yuan",      symbol: "¥",   flag: "🇨🇳" },
  { code: "XOF", name: "CFA Franc (BCEAO)", symbol: "Fr",  flag: "🌍" },
  { code: "NGN", name: "Nigerian Naira",    symbol: "₦",   flag: "🇳🇬" },
  { code: "GHS", name: "Ghanaian Cedi",     symbol: "₵",   flag: "🇬🇭" },
];

// Merge metadata with live numbers from admin-updated JSON
export const rates: Rate[] = RATE_META.map(meta => {
  const live = liveRates.rates.find(r => r.code === meta.code);
  return {
    ...meta,
    buy:  live?.buy  ?? 0,
    sell: live?.sell ?? 0,
  };
});

export const GMD_BASE = "GMD";
export const CALCULATOR_CURRENCIES = ["GMD", "USD", "EUR", "GBP", "CHF", "CAD", "SAR", "AED", "CNY", "XOF", "NGN", "GHS"];

export function convert(amount: number, from: string, to: string): number {
  if (from === to) return amount;
  const fromRate = rates.find(r => r.code === from);
  const toRate   = rates.find(r => r.code === to);
  if (from === GMD_BASE && toRate)  return amount / toRate.sell;
  if (to   === GMD_BASE && fromRate) return amount * fromRate.sell;
  if (fromRate && toRate) return (amount * fromRate.sell) / toRate.sell;
  return 0;
}

export function getRateHistory(currencyCode: string): { date: string; buy: number; sell: number }[] {
  const base = rates.find(r => r.code === currencyCode);
  if (!base) return [];
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (6 - i));
    const jitter = (Math.random() - 0.5) * base.sell * 0.008;
    return {
      date: d.toLocaleDateString("en-GB", { month: "short", day: "numeric" }),
      buy:  parseFloat((base.buy  + jitter + 0.3).toFixed(2)),
      sell: parseFloat((base.sell + jitter).toFixed(2)),
    };
  });
}
