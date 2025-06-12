"use client";
import React from "react";
import { FaGlobeAfrica, FaRoute, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-6 lg:px-20 text-gray-800 font-sans">
      {/* Titre principal */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600">À propos de notre entreprise</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Nous sommes passionnés de voyages authentiques. Notre mission : créer des expériences riches, sécurisées et inoubliables à travers l'accompagnement de professionnels locaux.
        </p>
      </section>

      {/* Section valeurs/services */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        <div className="bg-yellow-50 p-6 rounded-2xl shadow-md space-y-3">
          <FaGlobeAfrica className="text-3xl text-yellow-600" />
          <h3 className="text-xl font-bold">Guides Locaux Passionnés</h3>
          <p>
            Nos guides vous ouvrent les portes de leur culture : anecdotes, traditions, lieux cachés... Vivez chaque destination de l'intérieur.
          </p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-2xl shadow-md space-y-3">
          <FaRoute className="text-3xl text-green-600" />
          <h3 className="text-xl font-bold">Excursions sur Mesure</h3>
          <p>
            Balades culturelles, circuits d’aventure, découvertes gourmandes… Tout est adapté à vos envies pour un voyage qui vous ressemble.
          </p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-2xl shadow-md space-y-3">
          <FaShieldAlt className="text-3xl text-blue-600" />
          <h3 className="text-xl font-bold">Sécurité & Confiance</h3>
          <p>
            Notre priorité ? Votre sérénité. Profitez d’une assistance continue et d’un encadrement fiable tout au long de votre séjour.
          </p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-2xl shadow-md space-y-3">
          <FaHandsHelping className="text-3xl text-pink-600" />
          <h3 className="text-xl font-bold">Accompagnement humain</h3>
          <p>
            Plus qu’un service : une équipe proche de vous, disponible avant, pendant et après votre expérience pour répondre à vos besoins.
          </p>
        </div>
      </section>

      {/* Histoire / Objectifs */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Notre histoire</h2>
        <p className="text-gray-700 leading-relaxed">
          Fondée par des passionnés de découverte et de partage, notre entreprise s’est construite sur l’idée qu’un bon voyage commence par une vraie rencontre. Grâce à un réseau solide de guides locaux et des partenariats responsables, nous offrons des séjours respectueux des cultures et enrichissants pour les voyageurs comme pour les hôtes.
        </p>
      </section>

      {/* Appel à action */}
      <section className="text-center mb-10">
        <h3 className="text-2xl font-bold mb-4">Envie d’en savoir plus ?</h3>
        <p className="text-gray-600 mb-6">Contactez notre équipe ou explorez nos offres personnalisées.</p>
          <div className="flex justify-center gap-4">

          <Link href="/contact" className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition">
             Nous contacter
          </Link>
          </div>
      </section>

     
    </div>
  );
}
