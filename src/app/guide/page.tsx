"use client";
import React, { useState } from "react";
import { FaMapMarkedAlt, FaBookOpen, FaUserTie } from "react-icons/fa";

export default function Guides() {
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Recherche lancée !");
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-br from-white to-yellow-50 min-h-screen py-16 px-6 lg:px-20 text-gray-800 font-sans">
      {/* En-tête */}
      <section className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600">
          Découvrez nos Guides Locaux
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Voyagez autrement avec nos guides expérimentés qui partagent des anecdotes captivantes, des faits historiques rares et les traditions locales comme si vous y étiez né.
        </p>
      </section>

      {/* Présentation des avantages */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaBookOpen className="text-3xl text-yellow-600" />,
            title: "Connaissances authentiques",
            desc: "Nos guides sont natifs ou passionnés de la région, riches en histoires locales, coutumes, et secrets de quartier.",
          },
          {
            icon: <FaMapMarkedAlt className="text-3xl text-green-600" />,
            title: "Parcours immersifs",
            desc: "Ils vous emmènent hors des sentiers battus : marchés traditionnels, sites oubliés, légendes populaires…",
          },
          {
            icon: <FaUserTie className="text-3xl text-blue-600" />,
            title: "Professionnalisme & passion",
            desc: "Formés au guidage touristique, ils allient pédagogie, humour et passion pour une visite unique et vivante.",
          },
        ].map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-6 rounded-2xl space-y-3 text-center"
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* Section témoignages ou citations */}
      <section className="mt-20 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold text-yellow-600">
          Des voyageurs conquis
        </h2>
        <p className="text-gray-700 italic">
          "Grâce à notre guide, on a découvert une cascade cachée, écouté des contes transmis depuis des générations, et goûté un plat traditionnel dans une maison locale. Inoubliable !"
        </p>
      </section>

      {/* Appel à action */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Prêt à explorer autrement ?</h3>
        <p className="text-gray-600 mb-6">
          Choisissez un circuit avec l’un de nos guides locaux et partez pour une expérience enrichissante et mémorable.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition"
        >
          Trouver un guide maintenant
        </button>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 px-4">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
              Trouver un guide local
            </h2>

            <form onSubmit={handleSearch} className="space-y-4">
              <input
                type="text"
                placeholder="Entrez une ville ou région"
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              />

              <select className="w-full border border-gray-300 p-3 rounded-md" required>
                <option value="">Langue parlée</option>
                <option value="francais">Français</option>
                <option value="anglais">Anglais</option>
                <option value="espagnol">Fon</option>
                <option value="espagnol">Dendi</option>
                <option value="espagnol">Bariba</option>
              </select>

              <select className="w-full border border-gray-300 p-3 rounded-md" required>
                <option value="">Type de visite</option>
                <option value="culture">Culture</option>
                <option value="nature">Nature</option>
                <option value="gastronomie">Gastronomie</option>
              </select>

              <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-full md:w-1/2 text-center text-gray-600 hover:underline p-3 rounded-md border border-gray-300"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="w-full md:w-1/2 bg-yellow-600 text-white p-3 rounded-md hover:bg-yellow-700 transition"
                >
                  Rechercher
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
