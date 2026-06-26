import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { LanguageProvider } from "@/contexts/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One World Financial Services | Money Transfer & Bureau De Change in The Gambia",
  description:
    "Send and receive money worldwide, exchange currency, and access mobile money services at One World Financial Services & Bureau De Change in Kololi, The Gambia. Western Union, MoneyGram, Ria, Wave agents.",
  keywords: [
    "money transfer Gambia",
    "bureau de change Gambia",
    "Western Union Gambia",
    "MoneyGram Gambia",
    "Wave Gambia",
    "Kololi",
    "exchange rate Gambia",
    "send money to Gambia",
  ],
  openGraph: {
    title: "One World Financial Services | Money Transfer & Bureau De Change",
    description: "Your Trusted Financial Partner in The Gambia. International money transfers, bureau de change, and mobile money.",
    url: "https://www.oneworldfinacial.com",
    siteName: "One World Financial Services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  metadataBase: new URL("https://www.oneworldfinacial.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "One World Financial Services & Bureau De Change Ltd.",
  description: "Money transfer, bureau de change, and mobile money services in Kololi, The Gambia.",
  url: "https://www.oneworldfinacial.com",
  telephone: ["+2202517942", "+2202635333", "+2202660305", "+2203704323"],
  email: "oneworldkololi@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kololi",
    addressCountry: "GM",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.4549,
    longitude: -16.6986,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "16:00" },
  ],
  currenciesAccepted: "GMD, USD, EUR, GBP",
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            <LoadingScreen />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
