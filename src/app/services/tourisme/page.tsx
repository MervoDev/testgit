"use client";

import { useRouter } from "next/navigation";
import { Hotel, Car, UserCheck, Landmark, BadgeCheck, Map} from "lucide-react";
import { FaUserTie } from "react-icons/fa";
import Link from "next/link";
import HeaderT from "./headertourisme";

export default function TourismePage() {
  const router = useRouter();

  const services = [
    {
      id: 1,
      title: "Circuits Touristiques",
      icon: <Map className="text-indigo-600 w-6 h-6" />,
      description:
        "Organisation complète de circuits touristiques à la carte ou en groupe, pour découvrir le pays en toute sérénité.",
      imgSrc: "/images/img5.jpg",
      link: "/circuit",
    },
    {
      id: 2,
      title: "Réservation d’Hôtels",
      icon: <Hotel className="text-indigo-600 w-6 h-6" />,
      description:
        "Nous nous occupons de vos réservations dans des établissements de qualité pour un séjour confortable.",
      imgSrc: "/images/img11.jpg",
      link: "/reservation",
    },
    {
      id: 3,
      title: "Transport",
      icon: <Car className="text-indigo-600 w-6 h-6" />,
      description:
        "Mise à disposition de navettes, de voitures de location et d’autres moyens de transport selon vos besoins.",
      imgSrc: "/images/img10.jpg",
      link: "/transport",
    },
    {
      id: 4,
      title: "Guides Locaux",
      icon: <UserCheck className="text-indigo-600 w-6 h-6" />,
      description:
        "Des guides expérimentés pour enrichir votre voyage avec des anecdotes, faits historiques et traditions locales.",
      imgSrc: "/images/img4.jpg",
      link: "/guide",
    },
    {
      id: 5,
      title: "Excursions sur Mesure",
      icon: <Landmark className="text-indigo-600 w-6 h-6" />,
      description:
        "Activités personnalisées : balades culturelles, aventures sportives, circuits sur demande.",
      imgSrc: "/images/img6.jpg",
      link: "/excursion",
    },
    {
      id: 6,
      title: "Sécurité & Assistance",
      icon: <BadgeCheck className="text-indigo-600 w-6 h-6" />,
      description:
        "Un accompagnement fiable et une assistance continue pour garantir un séjour sécurisé et serein.",
      imgSrc: "/images/img7.jpg",
      link: "/securite",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-28 px-6 sm:px-10">
      <HeaderT />
      {/* Section des services */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        {services.map(({ id, title, icon, description, imgSrc, link }) => (
          <div
            key={id}
            onClick={() => router.push(link)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") router.push(link);
            }}
            className="cursor-pointer rounded-2xl shadow-lg p-6 bg-white hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <div className="mb-4 h-40 rounded-xl overflow-hidden">
              <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center space-x-3 mb-3">
              {icon}
              <h2 className="text-xl font-semibold text-indigo-900">{title}</h2>
            </div>
            <p className="text-indigo-800">{description}</p>
          </div>
        ))}
      </section>

      {/* Bouton Contactez-nous */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <Link 
        href="/contact" 
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
          Contactez-nous
        </Link>
      </div>
      
    </main>
  );
}
