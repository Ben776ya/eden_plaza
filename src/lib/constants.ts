import {
  HardHat,
  Home,
  Sofa,
  Building2,
  Factory,
  Building,
  Gem,
  ShieldCheck,
  Layers,
  Award,
  Zap,
  Leaf,
  MessageCircle,
  CheckCircle,
  Calendar,
  Users,
  FolderOpen,
  UserCheck,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

// ─── Navigation ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
] as const;

export const SECTION_IDS = ["accueil", "services", "apropos", "avis", "contact"] as const;

// ─── Top Bar ────────────────────────────────────────────
export const TOP_BAR = {
  tagline: "Votre expert du nettoyage – fiable, efficace, imbattable.",
  phone: "06 61 07 41 55",
  email: "info.edenplaza@gmail.com",
} as const;

// ─── Hero ───────────────────────────────────────────────
export const HERO = {
  badge: "✦ Disponible 7j/7 au Maroc",
  tagline: "Prendre soin de vos espaces, c'est prendre soin de votre image",
  subtitle: "Eden Plaza Nettoyage — Votre expert en propreté professionnelle à Casablanca. Fiable, efficace, imbattable.",
  ctaPrimary: { label: "Découvrir nos services", href: "#services" },
  ctaSecondary: { label: "Demander un Devis", href: "#contact" },
} as const;

// ─── Services ───────────────────────────────────────────
export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Nettoyage de chantier",
    description:
      "Remise en état parfaite après chantier pour une livraison impeccable de vos espaces.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    icon: HardHat,
  },
  {
    title: "Nettoyage Airbnb",
    description:
      "Service express entre locataires. Nettoyage complet, changement de linge et vérifications qualité.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    icon: Home,
  },
  {
    title: "Nettoyage Canapé & Fauteuil",
    description:
      "Nettoyage et détachage professionnel par injection/extraction et vapeur.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    icon: Sofa,
  },
  {
    title: "Nettoyage Vitres et Façades",
    description:
      "Nettoyage spécialisé pour redonner éclat et transparence à vos bâtiments.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    icon: Building2,
  },
  {
    title: "Nettoyage Industriel",
    description:
      "Entretien pour usines, ateliers et entrepôts avec équipements et normes de sécurité renforcées.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    icon: Factory,
  },
  {
    title: "Nettoyage Bureaux",
    description:
      "Services complets pour espaces professionnels, magasins et entrepôts. Hygiène & Sécurité.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    icon: Building,
  },
  {
    title: "Cristallisation Marbré & Parquet",
    description:
      "Ponçage, polissage et traitement hydrofuge pour redonner brillance à vos sols.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    icon: Gem,
  },
  {
    title: "Hygiène Traitement 4D",
    description:
      "Désinfection, Dératisation, Désinsectisation et Déréptilisation avec produits homologués.",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&q=80",
    icon: ShieldCheck,
  },
  {
    title: "Nettoyage Moquettes & Tapis",
    description:
      "Nettoyage en profondeur pour éliminer acariens, taches et impuretés.",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
    icon: Layers,
  },
];

// ─── Why Choose Us ──────────────────────────────────────
export interface USPItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const USPS: USPItem[] = [
  {
    title: "Professionnels et fiables",
    description: "Une équipe formée et rigoureuse à votre service.",
    icon: Award,
  },
  {
    title: "Interventions rapides",
    description: "Réactivité garantie partout au Maroc.",
    icon: Zap,
  },
  {
    title: "Produits écologiques",
    description:
      "Utilisation de produits sûrs et respectueux de l'environnement.",
    icon: Leaf,
  },
  {
    title: "Service client à l'écoute",
    description: "Une communication fluide et personnalisée.",
    icon: MessageCircle,
  },
  {
    title: "Travail soigné garanti",
    description: "Une attention particulière portée aux moindres détails.",
    icon: CheckCircle,
  },
  {
    title: "Disponible 7j/7",
    description:
      "Nous intervenons selon vos disponibilités, même le week-end.",
    icon: Calendar,
  },
];

// ─── About (3-card layout like Mission Nettoyage) ───────
export interface AboutCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ABOUT = {
  label: "À Propos",
  title: "Découvrez Eden Plaza Nettoyage",
  cards: [
    {
      title: "Notre Mission",
      description:
        "Offrir des services de nettoyage d'excellence qui transforment vos espaces. Nous croyons qu'un environnement propre est la base du bien-être et de la productivité.",
      icon: Award,
    },
    {
      title: "Notre Équipe",
      description:
        "Plus de 18 équipes d'experts formés aux dernières techniques de nettoyage professionnel. Chaque membre est sélectionné pour son savoir-faire et son engagement qualité.",
      icon: Users,
    },
    {
      title: "Nos Valeurs",
      description:
        "Fiabilité, excellence et respect de l'environnement guident chacune de nos interventions. Nous utilisons des produits écologiques et des méthodes éco-responsables.",
      icon: Leaf,
    },
  ] as AboutCard[],
  founder: {
    name: "Eden Plaza Nettoyage",
    role: "Fondateur & Directeur Général",
    message:
      "Nous mettons notre savoir-faire et notre passion au service de votre confort, pour un environnement impeccable et sain, jour après jour. Notre priorité est de garantir un environnement propre, sain et agréable pour chaque client.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
  },
} as const;

// ─── Stats ──────────────────────────────────────────────
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export const STATS: StatItem[] = [
  { value: 800, suffix: "+", label: "Clients satisfaits", icon: Users },
  { value: 80, suffix: "+", label: "Projets en cours", icon: FolderOpen },
  { value: 18, suffix: "+", label: "Équipes d'experts", icon: UserCheck },
  { value: 9, suffix: "", label: "Services spécialisés", icon: Briefcase },
];

// ─── Testimonials ───────────────────────────────────────
export interface TestimonialItem {
  name: string;
  initial: string;
  color: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Karim E.",
    initial: "K",
    color: "bg-emerald-500",
    quote:
      "Une équipe professionnelle, rapide et efficace. C'est agréable de rentrer chez soi et de trouver tout propre. Merci beaucoup !",
  },
  {
    name: "Fatima B.",
    initial: "F",
    color: "bg-amber-500",
    quote:
      "Service impeccable ! L'équipe est ponctuelle, professionnelle et très discrète. Ma maison n'a jamais été aussi propre.",
  },
  {
    name: "Youssef M.",
    initial: "Y",
    color: "bg-sky-500",
    quote:
      "Excellent rapport qualité-prix. Le personnel est aimable et le travail est fait avec soin. Je referai appel à leurs services sans hésiter.",
  },
  {
    name: "Nadia R.",
    initial: "N",
    color: "bg-rose-500",
    quote:
      "Très satisfaite ! Ils ont respecté mes exigences à la lettre. Résultat : un nettoyage en profondeur comme je le voulais.",
  },
];

// ─── FAQ ────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "Quels types de nettoyage proposez-vous ?",
    answer:
      "Nous proposons le nettoyage à domicile, de bureaux, locaux commerciaux, fin de chantier, vitres, canapés, tapis, traitement 4D, cristallisation marbre, et nettoyage Airbnb.",
  },
  {
    question: "Fournissez-vous les produits de nettoyage ?",
    answer:
      "Oui, nos équipes viennent avec tout le matériel et les produits nécessaires. Nous utilisons des produits professionnels et respectueux de l'environnement.",
  },
  {
    question: "Est-ce que le service est disponible le week-end ?",
    answer:
      "Oui, nous intervenons 7 jours sur 7 selon vos disponibilités.",
  },
  {
    question: "Combien de temps dure une prestation ?",
    answer:
      "Cela dépend de la taille du lieu et du type de service, mais nous vous fournissons une estimation claire à l'avance.",
  },
];

// ─── Contact ────────────────────────────────────────────
export const CONTACT = {
  label: "Contact",
  title: "Prêt à transformer vos espaces ?",
  body: "Contactez-nous pour un devis personnalisé et gratuit. Notre équipe vous répondra dans les plus brefs délais.",
  phone: { label: "Téléphone", value: "06 61 07 41 55", href: "tel:+212661074155" },
  email: {
    label: "Email",
    value: "info.edenplaza@gmail.com",
    href: "mailto:info.edenplaza@gmail.com",
  },
  address: {
    label: "Adresse",
    value: "Rue Attabari Résidence Hidden Hills 3, Casablanca",
  },
  hours: {
    label: "Horaires",
    value: "Lundi - Samedi : 08h00 - 18h00 | Interventions 7j/7",
  },
  formTitle: "Demande de Devis Gratuit",
  serviceOptions: [
    "Nettoyage de chantier",
    "Nettoyage Airbnb",
    "Nettoyage Canapé & Fauteuil",
    "Nettoyage Vitres et Façades",
    "Nettoyage Industriel",
    "Nettoyage Bureaux",
    "Cristallisation Marbré & Parquet",
    "Hygiène Traitement 4D",
    "Nettoyage Moquettes & Tapis",
  ],
} as const;

// ─── Footer ─────────────────────────────────────────────
export const FOOTER = {
  tagline:
    "Votre expert en propreté et hygiène au Maroc. Simplicité et efficacité sont au cœur de notre démarche.",
  social: {
    facebook: "https://www.facebook.com/share/19DrpEziw7/",
    instagram: "https://www.facebook.com/share/19DrpEziw7/",
  },
  copyright: `© ${new Date().getFullYear()} Eden Plaza Nettoyage. Tous droits réservés.`,
} as const;

// ─── WhatsApp ───────────────────────────────────────────
export const WHATSAPP_URL = "https://wa.me/+212661074155";
export const WHATSAPP_TOOLTIP = "Contactez-nous sur WhatsApp";
