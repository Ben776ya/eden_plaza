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
  slug: string;
  description: string;
  image: string;
  icon: LucideIcon;
  intro: string;
  prestations: string[];
  targets: string;
  coverage: string;
  whyUs: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Nettoyage de chantier",
    slug: "nettoyage-de-chantier",
    description:
      "Remise en état parfaite après chantier pour une livraison impeccable de vos espaces.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    icon: HardHat,
    intro:
      "Votre chantier est terminé et vous avez besoin d'une remise en état impeccable ? Eden Plaza Nettoyage intervient pour un nettoyage fin de chantier professionnel, afin de livrer des espaces propres et prêts à l'usage.",
    prestations: [
      "Dépoussiérage complet des surfaces, plafonds et murs",
      "Nettoyage des sols (carrelage, béton, parquet) après travaux",
      "Lavage des vitres, cadres et menuiseries",
      "Enlèvement des résidus de peinture, plâtre et ciment",
      "Nettoyage des sanitaires et équipements installés",
      "Évacuation des déchets de chantier",
    ],
    targets: "Promoteurs immobiliers, entreprises de construction, architectes, particuliers en rénovation",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Équipes spécialisées en nettoyage post-construction",
      "Matériel professionnel adapté aux chantiers",
      "Respect des délais de livraison",
      "Interventions planifiées ou en urgence, 7j/7",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "Quand intervenir pour un nettoyage fin de chantier ?",
        answer:
          "Nous intervenons dès la fin des travaux, avant la livraison ou la réception des locaux. Nous pouvons aussi intervenir entre les phases de chantier.",
      },
      {
        question: "Nettoyez-vous aussi les façades extérieures après chantier ?",
        answer:
          "Oui, nous proposons le nettoyage des façades, vitres extérieures et espaces communs dans le cadre de la remise en état post-chantier.",
      },
      {
        question: "Combien de temps dure un nettoyage de chantier ?",
        answer:
          "Cela dépend de la superficie et du type de travaux réalisés. Nous fournissons une estimation précise après visite des lieux.",
      },
    ],
  },
  {
    title: "Nettoyage Airbnb",
    slug: "nettoyage-airbnb",
    description:
      "Service express entre locataires. Nettoyage complet, changement de linge et vérifications qualité.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    icon: Home,
    intro:
      "Vous gérez un ou plusieurs logements Airbnb et souhaitez offrir une expérience impeccable à chaque voyageur ? Eden Plaza Nettoyage assure un service express et méticuleux entre chaque locataire.",
    prestations: [
      "Nettoyage complet de l'appartement ou de la maison",
      "Changement du linge de lit et de toilette",
      "Nettoyage de la cuisine et des électroménagers",
      "Désinfection des sanitaires",
      "Vérification qualité selon checklist personnalisée",
      "Réapprovisionnement des consommables (savon, papier, etc.)",
    ],
    targets: "Hôtes Airbnb, gestionnaires de locations saisonnières, agences de conciergerie",
    coverage:
      "Casablanca, Rabat, Marrakech, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Interventions rapides entre deux réservations",
      "Checklist qualité personnalisable selon vos standards",
      "Équipes discrètes et ponctuelles",
      "Disponibilité 7j/7, y compris les jours fériés",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "En combien de temps nettoyez-vous un Airbnb ?",
        answer:
          "En général, entre 1h30 et 3h selon la taille du logement. Nous nous adaptons à vos horaires de check-in/check-out.",
      },
      {
        question: "Fournissez-vous le linge de maison ?",
        answer:
          "Nous pouvons gérer le changement de votre linge existant. La fourniture de linge peut être organisée sur demande.",
      },
      {
        question: "Pouvez-vous intervenir le même jour ?",
        answer:
          "Oui, nous proposons des interventions express le jour même sous réserve de disponibilité.",
      },
    ],
  },
  {
    title: "Nettoyage Canapé & Fauteuil",
    slug: "nettoyage-canape-fauteuil",
    description:
      "Nettoyage et détachage professionnel par injection/extraction et vapeur.",
    image:
      "https://images.unsplash.com/photo-1705326701287-346fc37a2c86?w=600&q=80",
    icon: Sofa,
    intro:
      "Vos canapés et fauteuils ont perdu leur éclat ? Eden Plaza Nettoyage redonne vie à vos meubles rembourrés grâce à des techniques professionnelles d'injection/extraction et de nettoyage vapeur.",
    prestations: [
      "Nettoyage par injection/extraction en profondeur",
      "Nettoyage vapeur haute température",
      "Détachage de taches tenaces (café, vin, encre, graisse)",
      "Désodorisation et élimination des odeurs",
      "Traitement anti-acariens et désinfection",
      "Nettoyage de tous types de tissus et cuirs",
    ],
    targets: "Particuliers, hôtels, restaurants, salles d'attente, espaces de coworking",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniques professionnelles adaptées à chaque tissu",
      "Produits écologiques et sans danger",
      "Résultats visibles immédiatement",
      "Intervention à domicile ou sur site",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "Combien de temps faut-il pour que le canapé sèche ?",
        answer:
          "En général, le séchage prend entre 2 et 6 heures selon le tissu et la ventilation de la pièce.",
      },
      {
        question: "Nettoyez-vous les canapés en cuir ?",
        answer:
          "Oui, nous utilisons des produits spécifiques adaptés au cuir pour nettoyer, nourrir et protéger vos canapés en cuir.",
      },
      {
        question: "Les taches anciennes peuvent-elles être enlevées ?",
        answer:
          "La plupart des taches anciennes peuvent être significativement atténuées voire complètement éliminées grâce à nos techniques professionnelles.",
      },
    ],
  },
  {
    title: "Nettoyage Vitres et Façades",
    slug: "nettoyage-vitres-facades",
    description:
      "Nettoyage spécialisé pour redonner éclat et transparence à vos bâtiments.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    icon: Building2,
    intro:
      "Des vitres et façades impeccables reflètent le professionnalisme de votre entreprise. Eden Plaza Nettoyage intervient avec des techniques spécialisées pour redonner éclat et transparence à vos bâtiments.",
    prestations: [
      "Nettoyage de vitres intérieures et extérieures",
      "Nettoyage de façades vitrées et murs rideaux",
      "Lavage de baies vitrées et vérandas",
      "Nettoyage de vitrines commerciales",
      "Traitement hydrofuge anti-pluie",
      "Interventions en hauteur avec équipements sécurisés",
    ],
    targets: "Immeubles de bureaux, centres commerciaux, hôtels, résidences, commerces de détail",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens formés au travail en hauteur",
      "Équipements professionnels et sécurisés",
      "Produits écologiques sans traces",
      "Interventions planifiées ou en urgence, 7j/7",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "Intervenez-vous en hauteur pour les immeubles ?",
        answer:
          "Oui, nos équipes sont formées et équipées pour intervenir en hauteur en toute sécurité, y compris sur les façades d'immeubles.",
      },
      {
        question: "À quelle fréquence faut-il nettoyer les vitres ?",
        answer:
          "Pour un résultat optimal, nous recommandons un nettoyage mensuel ou bimensuel selon l'exposition et l'environnement.",
      },
      {
        question: "Proposez-vous des contrats d'entretien régulier ?",
        answer:
          "Oui, nous proposons des contrats d'entretien hebdomadaires, bimensuels ou mensuels adaptés à vos besoins.",
      },
    ],
  },
  {
    title: "Nettoyage Industriel",
    slug: "nettoyage-industriel",
    description:
      "Entretien pour usines, ateliers et entrepôts avec équipements et normes de sécurité renforcées.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    icon: Factory,
    intro:
      "Votre site industriel a besoin d'un nettoyage rigoureux et sécurisé ? Eden Plaza Nettoyage propose des interventions professionnelles adaptées aux environnements industriels, entrepôts, usines et zones sensibles.",
    prestations: [
      "Nettoyage de sols industriels (béton, résine, carrelage)",
      "Dégraissage d'équipements, lignes de production et machines",
      "Nettoyage de murs, plafonds, conduits et surfaces techniques",
      "Évacuation des déchets, résidus industriels et huiles usagées",
      "Assainissement des zones sensibles (agroalimentaire, pharmaceutique)",
      "Utilisation d'autolaveuses, monobrosse, vapeur et produits spécialisés",
    ],
    targets: "Usines, ateliers, laboratoires, entrepôts logistiques, hangars, plateformes industrielles",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens formés aux normes HSE et sécurité industrielle",
      "Équipements professionnels haute performance",
      "Respect des protocoles, horaires et exigences de site",
      "Interventions planifiées ou en urgence, 7j/7",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "Intervenez-vous dans les zones agroalimentaires ?",
        answer:
          "Oui, nos équipes sont formées aux protocoles d'hygiène spécifiques aux zones agroalimentaires et pharmaceutiques.",
      },
      {
        question: "Pouvez-vous intervenir en dehors des heures de production ?",
        answer:
          "Absolument, nous planifions nos interventions selon vos horaires pour minimiser l'impact sur votre activité.",
      },
      {
        question: "Quels types de déchets industriels prenez-vous en charge ?",
        answer:
          "Nous gérons l'évacuation des résidus industriels courants, huiles usagées et déchets non dangereux. Pour les déchets spéciaux, nous travaillons avec des partenaires agréés.",
      },
    ],
  },
  {
    title: "Nettoyage Bureaux",
    slug: "nettoyage-bureaux",
    description:
      "Services complets pour espaces professionnels, magasins et entrepôts. Hygiène & Sécurité.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    icon: Building,
    intro:
      "Un environnement de travail propre booste la productivité et renforce votre image professionnelle. Eden Plaza Nettoyage assure l'entretien régulier de vos bureaux, locaux commerciaux et espaces de travail.",
    prestations: [
      "Nettoyage quotidien ou périodique des bureaux",
      "Dépoussiérage du mobilier, écrans et équipements",
      "Aspiration et lavage des sols",
      "Nettoyage et désinfection des sanitaires",
      "Vidage des corbeilles et gestion des déchets",
      "Nettoyage des espaces communs (cuisine, salle de réunion, accueil)",
    ],
    targets: "Entreprises, cabinets, agences, espaces de coworking, commerces, administrations",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Personnel formé et discret",
      "Interventions en dehors des heures de bureau si souhaité",
      "Produits écologiques et professionnels",
      "Contrats d'entretien flexibles (quotidien, hebdomadaire, mensuel)",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "Pouvez-vous intervenir le soir ou le week-end ?",
        answer:
          "Oui, nous adaptons nos horaires d'intervention pour ne pas perturber votre activité. Interventions possibles le soir, tôt le matin ou le week-end.",
      },
      {
        question: "Proposez-vous des contrats mensuels ?",
        answer:
          "Oui, nous proposons des formules d'entretien régulier avec des contrats flexibles adaptés à votre budget et à vos besoins.",
      },
      {
        question: "Fournissez-vous les consommables (savon, papier) ?",
        answer:
          "Nous pouvons inclure la fourniture et le réapprovisionnement des consommables sanitaires dans nos prestations sur demande.",
      },
    ],
  },
  {
    title: "Cristallisation Marbré & Parquet",
    slug: "cristallisation-marbre-parquet",
    description:
      "Ponçage, polissage et traitement hydrofuge pour redonner brillance à vos sols.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    icon: Gem,
    intro:
      "Vos sols en marbre ou parquet ont perdu leur éclat d'origine ? Eden Plaza Nettoyage redonne brillance et protection à vos sols grâce à des techniques de cristallisation et traitement professionnels.",
    prestations: [
      "Ponçage et polissage de sols en marbre et granit",
      "Cristallisation pour une brillance durable",
      "Vitrification et traitement de parquets",
      "Traitement hydrofuge et anti-taches",
      "Rénovation de sols ternis ou rayés",
      "Entretien régulier pour maintenir l'éclat",
    ],
    targets: "Hôtels, halls d'immeubles, villas, bureaux, showrooms, espaces de luxe",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Expertise technique en traitement de sols nobles",
      "Machines professionnelles de ponçage et cristallisation",
      "Produits haut de gamme adaptés à chaque matériau",
      "Résultats visibles immédiatement",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre polissage et cristallisation ?",
        answer:
          "Le polissage redonne de la brillance en lissant la surface, tandis que la cristallisation crée une couche protectrice chimique qui renforce la dureté et l'éclat du marbre de manière durable.",
      },
      {
        question: "Combien de temps dure l'effet de la cristallisation ?",
        answer:
          "L'effet dure généralement entre 6 mois et 1 an selon le passage et l'entretien. Nous recommandons un entretien régulier pour maintenir les résultats.",
      },
      {
        question: "Traitez-vous tous les types de parquet ?",
        answer:
          "Oui, nous traitons les parquets massifs, contrecollés et stratifiés avec des produits et techniques adaptés à chaque type.",
      },
    ],
  },
  {
    title: "Hygiène Traitement 4D",
    slug: "hygiene-traitement-4d",
    description:
      "Désinfection, Dératisation, Désinsectisation et Déréptilisation avec produits homologués.",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&q=80",
    icon: ShieldCheck,
    intro:
      "Protégez vos espaces contre les nuisibles et les risques sanitaires. Eden Plaza Nettoyage propose un traitement 4D complet : Désinfection, Dératisation, Désinsectisation et Déréptilisation avec des produits homologués et sûrs.",
    prestations: [
      "Désinfection complète des locaux (virus, bactéries, moisissures)",
      "Dératisation : élimination et prévention contre les rongeurs",
      "Désinsectisation : traitement contre cafards, moustiques, punaises, fourmis",
      "Déréptilisation : protection contre les reptiles et serpents",
      "Traitement préventif et curatif",
      "Utilisation de produits homologués et respectueux de la santé",
    ],
    targets: "Restaurants, hôtels, usines agroalimentaires, entrepôts, résidences, bureaux, commerces",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens certifiés en hygiène et lutte antiparasitaire",
      "Produits homologués sans danger pour les occupants",
      "Diagnostic gratuit avant intervention",
      "Suivi post-traitement et garantie de résultats",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "Les produits utilisés sont-ils dangereux pour les enfants ou animaux ?",
        answer:
          "Non, nous utilisons des produits homologués et sûrs. Nous vous donnerons les consignes de sécurité spécifiques à chaque traitement.",
      },
      {
        question: "Faut-il quitter les lieux pendant le traitement ?",
        answer:
          "Cela dépend du type de traitement. Pour certaines désinfections, une évacuation temporaire de quelques heures peut être nécessaire.",
      },
      {
        question: "Combien de passages sont nécessaires ?",
        answer:
          "En général, un à trois passages suffisent selon le niveau d'infestation. Nous assurons un suivi pour garantir l'efficacité du traitement.",
      },
    ],
  },
  {
    title: "Nettoyage Moquettes & Tapis",
    slug: "nettoyage-moquettes-tapis",
    description:
      "Nettoyage en profondeur pour éliminer acariens, taches et impuretés.",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80",
    icon: Layers,
    intro:
      "Vos moquettes et tapis accumulent poussières, acariens et taches au fil du temps. Eden Plaza Nettoyage les nettoie en profondeur pour un résultat sain, frais et éclatant.",
    prestations: [
      "Nettoyage en profondeur par injection/extraction",
      "Nettoyage vapeur haute température",
      "Détachage de taches tenaces et anciennes",
      "Traitement anti-acariens et désodorisation",
      "Nettoyage de moquettes murales et de sol",
      "Intervention sur site ou enlèvement pour traitement en atelier",
    ],
    targets: "Particuliers, hôtels, bureaux, mosquées, salles de conférence, espaces commerciaux",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniques professionnelles adaptées à chaque fibre",
      "Produits écologiques et sans danger",
      "Résultats visibles immédiatement",
      "Intervention rapide à domicile ou sur site",
      "Devis gratuit et personnalisé",
    ],
    faqs: [
      {
        question: "Pouvez-vous nettoyer les tapis berbères et orientaux ?",
        answer:
          "Oui, nous avons l'expertise pour nettoyer tous types de tapis, y compris les tapis berbères, orientaux et de luxe, avec des produits adaptés.",
      },
      {
        question: "Le nettoyage abîme-t-il les fibres du tapis ?",
        answer:
          "Non, nos techniques professionnelles sont conçues pour nettoyer en profondeur tout en préservant la qualité et la texture des fibres.",
      },
      {
        question: "Combien de temps faut-il pour le séchage ?",
        answer:
          "Le séchage prend généralement entre 3 et 8 heures selon l'épaisseur du tapis et la ventilation de l'espace.",
      },
    ],
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
