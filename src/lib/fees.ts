// Hardcoded fee structures per transfer service.
// Update percentages or flat fees as needed.

export interface FeeStructure {
  service: string;
  feePercent: number; // percentage of send amount
  flatFee: number;    // additional flat fee in GMD
  minFee: number;     // minimum fee in GMD
  speed: string;
  color: string;
}

export const feeStructures: FeeStructure[] = [
  { service: "Western Union",    feePercent: 2.5,  flatFee: 50,  minFee: 80,  speed: "Minutes",  color: "#f5a623" },
  { service: "Ria Money Transfer", feePercent: 2.0, flatFee: 40,  minFee: 70,  speed: "Minutes",  color: "#e31837" },
  { service: "MoneyGram",        feePercent: 2.8,  flatFee: 55,  minFee: 85,  speed: "Minutes",  color: "#eb0000" },
  { service: "PRIMR Money",      feePercent: 1.8,  flatFee: 35,  minFee: 60,  speed: "Minutes",  color: "#1B2A87" },
  { service: "ACE Money Transfer", feePercent: 1.5, flatFee: 30,  minFee: 55,  speed: "Minutes",  color: "#003087" },
  { service: "Soni Transfer",    feePercent: 2.2,  flatFee: 45,  minFee: 75,  speed: "Same Day", color: "#ff6600" },
  { service: "Ping Money Transfer", feePercent: 1.9, flatFee: 38, minFee: 65,  speed: "Minutes",  color: "#0072ce" },
  { service: "Trans-Fast",       feePercent: 2.3,  flatFee: 48,  minFee: 78,  speed: "Minutes",  color: "#cc0000" },
  { service: "BnG Money Transfer", feePercent: 1.7, flatFee: 32,  minFee: 58,  speed: "Minutes",  color: "#006400" },
  { service: "Wave",             feePercent: 1.0,  flatFee: 20,  minFee: 40,  speed: "Instant",  color: "#00b9f1" },
  { service: "Orange Money",     feePercent: 1.2,  flatFee: 25,  minFee: 45,  speed: "Instant",  color: "#ff6600" },
];

export const destinationCountries = [
  "United Kingdom", "United States", "France", "Germany", "Italy", "Spain",
  "Netherlands", "Belgium", "Sweden", "Norway", "Switzerland", "Canada",
  "Saudi Arabia", "UAE", "Senegal", "Nigeria", "Ghana", "Guinea",
  "Sierra Leone", "Ivory Coast", "Mali", "Mauritania",
];

export function calculateFees(sendAmountGMD: number) {
  return feeStructures.map(service => {
    const rawFee = (service.feePercent / 100) * sendAmountGMD + service.flatFee;
    const fee = Math.max(rawFee, service.minFee);
    const recipientGets = sendAmountGMD - fee;
    return {
      service: service.service,
      fee: parseFloat(fee.toFixed(2)),
      recipientGets: parseFloat(Math.max(0, recipientGets).toFixed(2)),
      speed: service.speed,
      color: service.color,
    };
  }).sort((a, b) => b.recipientGets - a.recipientGets);
}
