export type Language = "fr" | "en" | "ar";

export interface ServiceTranslation {
  title: string;
  description: string;
  intro: string;
  prestations: string[];
  targets: string;
  coverage: string;
  whyUs: string[];
  faqs: { question: string; answer: string }[];
}

export interface Translations {
  nav: { label: string; href: string }[];
  topBar: { tagline: string };
  hero: {
    badge: string;
    tagline: string;
    subtitle: string;
    ctaPrimary: { label: string };
    ctaSecondary: { label: string };
  };
  services: ServiceTranslation[];
  usps: { title: string; description: string }[];
  about: {
    label: string;
    title: string;
    cards: { title: string; description: string }[];
    founder: { name: string; role: string; message: string };
  };
  stats: { label: string }[];
  testimonials: { quote: string }[];
  faqs: { question: string; answer: string }[];
  contact: {
    label: string;
    title: string;
    body: string;
    phone: { label: string };
    email: { label: string };
    address: { label: string };
    hours: { label: string; value: string };
    formTitle: string;
    serviceOptions: string[];
  };
  footer: { tagline: string };
  whatsappTooltip: string;
  ui: {
    servicesLabel: string;
    servicesTitle: string;
    whyChooseUsLabel: string;
    whyChooseUsTitle: string;
    testimonialsLabel: string;
    testimonialsTitle: string;
    faqLabel: string;
    faqTitle: string;
    verifiedClient: string;
    learnMore: string;
    freeQuote: string;
    footerServicesHeading: string;
    footerLinksHeading: string;
    footerContactHeading: string;
    footerHours: string;
    heroServicesLabel: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formService: string;
    formMessage: string;
    formPlaceholderName: string;
    formPlaceholderEmail: string;
    formPlaceholderPhone: string;
    formPlaceholderService: string;
    formPlaceholderMessage: string;
    formSending: string;
    formSubmit: string;
    formSuccess: string;
    formError: string;
    openMenu: string;
    closeMenu: string;
    prevServices: string;
    nextServices: string;
    scrollDown: string;
  };
}
