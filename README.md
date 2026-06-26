# One World Financial Services — Website

Professional website for One World Financial Services & Bureau De Change Ltd., Kololi, The Gambia.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## How to Update Exchange Rates

Edit `src/lib/rates.ts`. Each entry looks like:

```ts
{ code: "USD", name: "US Dollar", symbol: "$", buy: 71.50, sell: 70.80, flag: "🇺🇸" },
```

- **buy** = GMD rate when you buy (customer sells to you)
- **sell** = GMD rate when you sell (customer buys from you)

Update daily. Restart dev server or redeploy after changes.

## How to Swap In the Real Logo

1. Replace `public/logo.png` with your logo (PNG, recommended 200×200px)
2. Replace `public/logo-white.png` with a white/light version for dark backgrounds
3. Replace `public/og-image.png` with a 1200×630px Open Graph image

The `OW` text placeholder in the Navbar and Footer will automatically use the image once referenced.

## How to Update Contact Info

All contact details are in two places:
- `src/components/layout/Footer.tsx` — phone numbers
- `src/app/contact/page.tsx` — phone numbers, email, map

Search for `+220` to find all phone number instances.

## How to Add/Edit Translations

Edit `src/lib/translations.ts`. The file has three language sections: `en`, `wo`, `ma`.

Add a new language:
1. Add a new key to the `Language` type: `export type Language = "en" | "wo" | "ma" | "ff";`
2. Add translations under the new key in the `translations` object
3. Add the language toggle button in `src/components/layout/Navbar.tsx`

## How to Update Transfer Partners

Edit `src/lib/partners.ts` to add, remove, or update partners.
Edit `src/lib/fees.ts` to update fee structures for the comparison tool.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — calculator, fees, services |
| `/services` | Services + how-to guides |
| `/partners` | All partner cards |
| `/rates` | Exchange rates table + chart |
| `/about` | Company story, values, compliance |
| `/contact` | Contact form, map, WhatsApp |

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Recharts** (rate history chart)
- **next-themes** (dark mode)
- **Lucide React** (icons)

## Deployment

Deploy to Vercel (recommended):

```bash
npx vercel
```

Or build for any Node.js host:

```bash
npm run build
npm start
```
