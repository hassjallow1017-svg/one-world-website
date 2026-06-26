// Update these daily by editing the buy/sell values below.
// All rates are GMD (Gambian Dalasi) per 1 unit of foreign currency.

export interface Rate {
  code: string;
  name: string;
  symbol: string;
  buy: number;   // GMD you pay to buy this currency
  sell: number;  // GMD you receive when selling this currency
  flag: string;
}

export const rates: Rate[] = [
  { code: "USD", name: "US Dollar",         symbol: "$",  buy: 71.50, sell: 70.80, flag: "🇺🇸" },
  { code: "EUR", name: "Euro",              symbol: "€",  buy: 77.20, sell: 76.40, flag: "🇪🇺" },
  { code: "GBP", name: "British Pound",     symbol: "£",  buy: 90.50, sell: 89.60, flag: "🇬🇧" },
  { code: "CHF", name: "Swiss Franc",       symbol: "₣",  buy: 79.30, sell: 78.50, flag: "🇨🇭" },
  { code: "SEK", name: "Swedish Krona",     symbol: "kr", buy: 6.80,  sell: 6.60,  flag: "🇸🇪" },
  { code: "NOK", name: "Norwegian Krone",   symbol: "kr", buy: 6.70,  sell: 6.50,  flag: "🇳🇴" },
  { code: "DKK", name: "Danish Krone",      symbol: "kr", buy: 10.30, sell: 10.10, flag: "🇩🇰" },
  { code: "CAD", name: "Canadian Dollar",   symbol: "$",  buy: 52.80, sell: 52.10, flag: "🇨🇦" },
  { code: "SAR", name: "Saudi Riyal",       symbol: "﷼",  buy: 19.05, sell: 18.80, flag: "🇸🇦" },
  { code: "AED", name: "UAE Dirham",        symbol: "د.إ",buy: 19.45, sell: 19.20, flag: "🇦🇪" },
  { code: "CNY", name: "Chinese Yuan",      symbol: "¥",  buy: 9.85,  sell: 9.65,  flag: "🇨🇳" },
  { code: "XOF", name: "CFA Franc (BCEAO)", symbol: "Fr", buy: 0.118, sell: 0.115, flag: "🌍" },
  { code: "NGN", name: "Nigerian Naira",    symbol: "₦",  buy: 0.045, sell: 0.043, flag: "🇳🇬" },
  { code: "GHS", name: "Ghanaian Cedi",     symbol: "₵",  buy: 4.85,  sell: 4.70,  flag: "🇬🇭" },
];

// GMD is the base
export const GMD_BASE = "GMD";

// All supported currency codes for the calculator
export const CALCULATOR_CURRENCIES = ["GMD", "USD", "EUR", "GBP", "CHF", "CAD", "SAR", "AED", "CNY", "XOF", "NGN", "GHS"];

// Convert amount from one currency to another via GMD
export function convert(amount: number, from: string, to: string): number {
  if (from === to) return amount;

  const fromRate = rates.find(r => r.code === from);
  const toRate = rates.find(r => r.code === to);

  if (from === GMD_BASE && toRate) {
    return amount / toRate.sell;
  }
  if (to === GMD_BASE && fromRate) {
    return amount * fromRate.sell;
  }
  if (fromRate && toRate) {
    const gmd = amount * fromRate.sell;
    return gmd / toRate.sell;
  }
  return 0;
}

// Realistic 7-day history for a currency pair (for chart)
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
      buy: parseFloat((base.buy + jitter + 0.3).toFixed(2)),
      sell: parseFloat((base.sell + jitter).toFixed(2)),
    };
  });
}
