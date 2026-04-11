import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Eden Plaza Nettoyage",
  description:
    "Politique de confidentialité d'Eden Plaza Nettoyage. Informations sur la collecte, l'utilisation et la protection de vos données personnelles.",
  alternates: {
    canonical: "https://www.edenplazanettoyage.ma/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main
        className="pt-28 pb-20"
        style={{ background: "var(--color-bg-light)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:text-[var(--color-primary)]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          <h1
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "var(--color-text-primary)" }}
          >
            Politique de Confidentialité
          </h1>

          <div
            className="prose prose-sm sm:prose-base max-w-none space-y-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              <strong>Dernière mise à jour :</strong> Avril 2026
            </p>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              1. Responsable du traitement
            </h2>
            <p>
              Eden Plaza Nettoyage, dont le siège est situé à Rue Attabari
              Résidence Hidden Hills 3, Casablanca, Maroc, est responsable du
              traitement de vos données personnelles.
            </p>
            <p>
              <strong>Contact :</strong> contact@edenplazanettoyage.ma |
              +212 661 074 155
            </p>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              2. Données collectées
            </h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Formulaire de devis :</strong> nom, email, téléphone,
                service souhaité, message
              </li>
              <li>
                <strong>Navigation :</strong> données anonymes via Google
                Analytics (pages visitées, durée de session, type d&apos;appareil)
              </li>
              <li>
                <strong>Cookies :</strong> cookies techniques nécessaires au
                fonctionnement du site et cookies analytiques
              </li>
            </ul>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              3. Utilisation des données
            </h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Répondre à vos demandes de devis</li>
              <li>Vous contacter concernant nos services</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              4. Partage des données
            </h2>
            <p>
              Vos données personnelles ne sont jamais vendues à des tiers. Elles
              peuvent être partagées avec :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Supabase :</strong> hébergement sécurisé de notre base
                de données
              </li>
              <li>
                <strong>Google Analytics :</strong> analyse anonyme du trafic
              </li>
              <li>
                <strong>Google AdSense :</strong> affichage de publicités
                pertinentes
              </li>
            </ul>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              5. Conservation des données
            </h2>
            <p>
              Les données issues du formulaire de contact sont conservées pendant
              une durée maximale de 3 ans à compter de votre dernière
              interaction. Les données de navigation sont conservées pendant 14
              mois.
            </p>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              6. Vos droits
            </h2>
            <p>
              Conformément à la loi n° 09-08 relative à la protection des
              personnes physiques à l&apos;égard du traitement des données à
              caractère personnel, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit de suppression</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:contact@edenplazanettoyage.ma"
                className="font-medium underline"
                style={{ color: "var(--color-primary)" }}
              >
                contact@edenplazanettoyage.ma
              </a>
              .
            </p>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              7. Cookies
            </h2>
            <p>
              Ce site utilise des cookies pour assurer son bon fonctionnement et
              mesurer son audience. Vous pouvez paramétrer votre navigateur pour
              refuser les cookies, mais certaines fonctionnalités pourraient ne
              plus être disponibles.
            </p>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              8. Sécurité
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre l&apos;accès
              non autorisé, la perte ou la destruction.
            </p>

            <h2
              className="text-xl font-bold mt-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              9. Modifications
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toute modification sera publiée sur
              cette page avec la date de mise à jour.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
