// Business hours for One World Financial Services
// The Gambia is in GMT+0 (no daylight saving time)

export interface BusinessHoursStatus {
  isOpen: boolean;
  nextOpenTime: string;
  currentDayHours: string;
}

const HOURS = {
  // 0=Sun, 1=Mon, ..., 6=Sat
  0: { open: 10, close: 16, label: "Sunday" },
  1: { open: 8,  close: 18, label: "Monday" },
  2: { open: 8,  close: 18, label: "Tuesday" },
  3: { open: 8,  close: 18, label: "Wednesday" },
  4: { open: 8,  close: 18, label: "Thursday" },
  5: { open: 8,  close: 18, label: "Friday" },
  6: { open: 8,  close: 18, label: "Saturday" },
} as const;

function toGambiaTime(date: Date): Date {
  // The Gambia is UTC+0, no DST
  const utcMs = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  return new Date(utcMs);
}

export function getBusinessStatus(): BusinessHoursStatus {
  const now = toGambiaTime(new Date());
  const day = now.getDay() as keyof typeof HOURS;
  const hour = now.getHours() + now.getMinutes() / 60;

  const todayHours = HOURS[day];
  const isOpen = hour >= todayHours.open && hour < todayHours.close;

  let nextOpenTime = "";
  if (!isOpen) {
    if (hour < todayHours.open) {
      nextOpenTime = `Opens today at ${todayHours.open}:00 AM`;
    } else {
      const tomorrow = ((day + 1) % 7) as keyof typeof HOURS;
      const tomorrowHours = HOURS[tomorrow];
      nextOpenTime = `Opens ${tomorrowHours.label} at ${tomorrowHours.open === 10 ? "10:00 AM" : "8:00 AM"}`;
    }
  }

  const openStr = todayHours.open === 10 ? "10:00 AM" : "8:00 AM";
  const closeStr = todayHours.close === 16 ? "4:00 PM" : "6:00 PM";
  const currentDayHours = `${todayHours.label}: ${openStr} – ${closeStr}`;

  return { isOpen, nextOpenTime, currentDayHours };
}

export const allHours = [
  "Monday – Saturday: 8:00 AM – 6:00 PM",
  "Sunday: 10:00 AM – 4:00 PM",
];
