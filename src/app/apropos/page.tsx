"use client";
import React from "react";
import { FaGlobeAfrica, FaRoute, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: <FaGlobeAfrica className="text-3xl text-yellow-600" />,
    title: "Services Tourisme",
    description:
      "Organisation et accompagnement de projets touristiques adaptés aux besoins des clients, avec un focus sur le développement durable et la valorisation des patrimoines locaux.",
  },
  {
    id: 2,
    icon: <FaRoute className="text-3xl text-green-600" />,
    title: "Bâtiment & Travaux Publics (BTP)",
    description:
      "Gestion et réalisation de projets de construction, rénovation et infrastructure, avec des solutions techniques innovantes et respectueuses des normes en vigueur.",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Analyses des Affaires",
    description:
      "Études approfondies pour accompagner les décisions stratégiques, optimiser la performance et anticiper les évolutions du marché.",
  },
  {
    id: 4,
    icon: <FaHandsHelping className="text-3xl text-pink-600" />,
    title: "Commerce Général",
    description:
      "Services complets en gestion commerciale, approvisionnement et distribution, pour garantir efficacité et satisfaction client.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-6 lg:px-20 text-gray-800 font-sans">
      {/* Titre principal */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600">
          À propos de notre entreprise
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Nous offrons des services professionnels dans le tourisme, le BTP, les analyses d’affaires et le commerce général, avec un engagement fort envers la qualité, la fiabilité et l’innovation.
        </p>
      </section>

      {/* Section valeurs/services */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        {services.map(({ id, icon, title, description }) => (
          <div key={id} className="bg-yellow-50 p-6 rounded-2xl shadow-md space-y-3">
            {icon}
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </section>

      {/* Histoire / Objectifs */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Notre histoire</h2>
        <p className="text-gray-700 leading-relaxed">
          Fondée sur des valeurs d’expertise et d’intégrité, notre entreprise s’est développée grâce à la confiance de nos clients et à un réseau solide de partenaires professionnels. Notre objectif est de fournir des solutions adaptées et durables dans tous les secteurs que nous couvrons.
        </p>
      </section>

      {/* Appel à action */}
      <section className="text-center mb-10">
        <h3 className="text-2xl font-bold mb-4">Envie d’en savoir plus ?</h3>
        <p className="text-gray-600 mb-6">Contactez notre équipe ou explorez nos offres personnalisées.</p>
        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
