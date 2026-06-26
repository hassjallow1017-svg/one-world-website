// Business hours for One World Financial Services
// The Gambia is in GMT+0 (no daylight saving time)
// close values > 24 mean next-day (e.g. 26 = 2:00 AM)

export interface BusinessHoursStatus {
  isOpen: boolean;
  nextOpenTime: string;
  currentDayHours: string;
}

const HOURS = {
  // 0=Sun, 1=Mon, ..., 6=Sat
  // close: 26 = 2:00 AM next day
  0: { open: 10, close: 26, label: "Sunday" },
  1: { open: 8,  close: 26, label: "Monday" },
  2: { open: 8,  close: 26, label: "Tuesday" },
  3: { open: 8,  close: 26, label: "Wednesday" },
  4: { open: 8,  close: 26, label: "Thursday" },
  5: { open: 8,  close: 26, label: "Friday" },
  6: { open: 8,  close: 26, label: "Saturday" },
} as const;

function toGambiaTime(date: Date): Date {
  const utcMs = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  return new Date(utcMs);
}

export function getBusinessStatus(): BusinessHoursStatus {
  const now = toGambiaTime(new Date());
  const day = now.getDay() as keyof typeof HOURS;
  const hour = now.getHours() + now.getMinutes() / 60;

  // For overnight shifts: if current hour is before open, add 24 so the
  // comparison works across midnight (e.g. 1am becomes 25, still < 26)
  const todayHours = HOURS[day];
  const effectiveHour = hour < todayHours.open ? hour + 24 : hour;
  const isOpen = effectiveHour >= todayHours.open && effectiveHour < todayHours.close;

  let nextOpenTime = "";
  if (!isOpen) {
    if (hour < todayHours.open) {
      nextOpenTime = `Opens today at ${todayHours.open === 10 ? "10:00 AM" : "8:00 AM"}`;
    } else {
      const tomorrow = ((day + 1) % 7) as keyof typeof HOURS;
      const tomorrowHours = HOURS[tomorrow];
      nextOpenTime = `Opens ${tomorrowHours.label} at ${tomorrowHours.open === 10 ? "10:00 AM" : "8:00 AM"}`;
    }
  }

  const openStr  = todayHours.open === 10 ? "10:00 AM" : "8:00 AM";
  const currentDayHours = `${todayHours.label}: ${openStr} – 2:00 AM`;

  return { isOpen, nextOpenTime, currentDayHours };
}

export const allHours = [
  "Monday – Saturday: 8:00 AM – 2:00 AM",
  "Sunday: 10:00 AM – 2:00 AM",
];
