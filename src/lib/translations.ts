export type Language = "en" | "wo" | "ma";

export interface Translations {
  nav: {
    home: string;
    services: string;
    partners: string;
    rates: string;
    about: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    headline: string;
    subtext: string;
    ctaCalculate: string;
    ctaContact: string;
  };
  services: {
    title: string;
    transfer: string;
    exchange: string;
    mobile: string;
  };
  status: {
    open: string;
    closed: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactUs: string;
    followUs: string;
  };
  contact: {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
  common: {
    sendMoney: string;
    exchangeCurrency: string;
    contactUs: string;
    learnMore: string;
    viewRates: string;
    chatWhatsApp: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      partners: "Partners",
      rates: "Exchange Rates",
      about: "About",
      contact: "Contact",
      getQuote: "Get a Quote",
    },
    hero: {
      headline: "Send Money Worldwide. Exchange Currency. Right Here in The Gambia.",
      subtext: "Your trusted partner for international money transfers, bureau de change, and mobile money services in Kololi, The Gambia.",
      ctaCalculate: "Calculate Your Transfer",
      ctaContact: "Contact Us",
    },
    services: {
      title: "Our Services",
      transfer: "Money Transfer",
      exchange: "Bureau De Change",
      mobile: "Mobile Money",
    },
    status: {
      open: "Open Now",
      closed: "Closed",
    },
    footer: {
      tagline: "Your Trusted Financial Partner in The Gambia",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
    },
    contact: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
    common: {
      sendMoney: "Send Money",
      exchangeCurrency: "Exchange Currency",
      contactUs: "Contact Us",
      learnMore: "Learn More",
      viewRates: "View Rates",
      chatWhatsApp: "Chat on WhatsApp",
    },
  },
  wo: {
    nav: {
      home: "Keur",
      services: "Liggéey",
      partners: "Xarit",
      rates: "Njëgël Xaalis",
      about: "Yëgël",
      contact: "Xam-Xam",
      getQuote: "Dëm Xibaar",
    },
    hero: {
      headline: "Yónni Xaalis ci Aduna. Soppal Xaalis. Fi ci Gambia.",
      subtext: "Sa xarit bu am jëf ci liggéey yu xaalis ci dëkk bi, soppal xaalis, ak yeneeni liggéey yu xaalis ci Kololi, Gambia.",
      ctaCalculate: "Jëfandikoo Calculatrice",
      ctaContact: "Xam-Xam",
    },
    services: {
      title: "Liggéey yi",
      transfer: "Yónni Xaalis",
      exchange: "Soppal Xaalis",
      mobile: "Xaalis Mobile",
    },
    status: {
      open: "Ubbi Na",
      closed: "Tëj Na",
    },
    footer: {
      tagline: "Sa Xarit bu am Jëf ci Xaalis ci Gambia",
      quickLinks: "Sàmmu-sàmmu",
      contactUs: "Xam-Xam",
      followUs: "Mucc Nanu",
    },
    contact: {
      name: "Tur bi",
      phone: "Numéro Téléphone",
      email: "Adresse Email",
      subject: "Sujet bi",
      message: "Xbaar bi",
      send: "Yónn Xbaar",
    },
    common: {
      sendMoney: "Yónni Xaalis",
      exchangeCurrency: "Soppal Xaalis",
      contactUs: "Xam-Xam",
      learnMore: "Xam Ab Doonte",
      viewRates: "Xool Njëgël",
      chatWhatsApp: "Wax ci WhatsApp",
    },
  },
  ma: {
    nav: {
      home: "Bolu",
      services: "Barikolu",
      partners: "Tarikolu",
      rates: "Wari Tolu",
      about: "Aning",
      contact: "N'na Bi",
      getQuote: "Sering Wari",
    },
    hero: {
      headline: "Wuli Wari Duniyang. Danso Wari. Gambia La.",
      subtext: "I ning faa la i Gambia, Kololi, wari wulilu, danso wari, kolu mobile wari barikolu la.",
      ctaCalculate: "Calculatrice La",
      ctaContact: "N'na Bi",
    },
    services: {
      title: "Barikolu Aning",
      transfer: "Wuli Wari",
      exchange: "Danso Wari",
      mobile: "Mobile Wari",
    },
    status: {
      open: "Tele Ta",
      closed: "Soto Ta",
    },
    footer: {
      tagline: "I Wari Barikolu Tarikolu Gambia",
      quickLinks: "Siring Soto",
      contactUs: "N'na Bi",
      followUs: "Ning I",
    },
    contact: {
      name: "I Tolu",
      phone: "Telephonu Tolu",
      email: "Email Tolu",
      subject: "Sujet",
      message: "Xibaru",
      send: "Wuli Xibaru",
    },
    common: {
      sendMoney: "Wuli Wari",
      exchangeCurrency: "Danso Wari",
      contactUs: "N'na Bi",
      learnMore: "Aning Soto",
      viewRates: "Tolu Siring",
      chatWhatsApp: "WhatsApp Fo",
    },
  },
};
