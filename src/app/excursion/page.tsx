"use client";
import React, { useState } from "react";
import {
  FaHiking,
  FaLandmark,
  FaRunning,
  FaMountain,
  FaRegCompass,
} from "react-icons/fa";

export default function Excursion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-16 px-6 lg:px-20 text-gray-800 font-sans">
      {/* En-tête */}
      <section className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Excursions sur Mesure
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Créez votre propre aventure : entre balades culturelles, expériences sportives et découvertes inoubliables. Nos circuits s adaptent à vos envies.
        </p>
      </section>

      {/* Types d’activités */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaLandmark className="text-3xl text-purple-600" />,
            title: "Balades culturelles",
            desc: "Explorez les monuments emblématiques, musées locaux, et traditions artisanales avec un guide passionné.",
          },
          {
            icon: <FaHiking className="text-3xl text-green-600" />,
            title: "Aventures en pleine nature",
            desc: "Partez en randonnée à travers les sentiers secrets, forêts ou montagnes pour une bouffée d'air frais.",
          },
          {
            icon: <FaRunning className="text-3xl text-red-500" />,
            title: "Activités sportives",
            desc: "Optez pour des circuits dynamiques : kayak, vélo, course, escalade ou sports locaux selon la région.",
          },
          {
            icon: <FaMountain className="text-3xl text-yellow-600" />,
            title: "Paysages impressionnants",
            desc: "Accédez à des panoramas époustouflants, des cascades cachées et des spots photographiques inoubliables.",
          },
          {
            icon: <FaRegCompass className="text-3xl text-blue-600" />,
            title: "Circuits personnalisés",
            desc: "Choisissez votre rythme, vos étapes et vos thèmes : notre équipe s'occupe de concevoir le circuit idéal.",
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

      {/* Témoignage */}
      <section className="mt-20 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold text-blue-600">
          Une expérience inoubliable
        </h2>
        <p className="text-gray-700 italic">
          Nous avons composé notre propre circuit : entre visite de villages, kayak au lever du soleil et déjeuner chez l habitant. Une journée riche en émotions et en découvertes !
        </p>
      </section>

      {/* Appel à l'action */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Créez votre aventure sur mesure</h3>
        <p className="text-gray-600 mb-6">
          Dites-nous ce que vous aimez et nous organiserons votre excursion idéale.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Personnalisée mon aventure
        </button>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4  bg-black/40 backdrop-blur-md z-40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Demande de circuit personnalisé
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                rows={4}
                placeholder="Décrivez vos envies : lieux, activités, rythme..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
