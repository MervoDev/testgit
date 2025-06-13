"use client";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaHandsHelping,
  FaUserShield,
  FaRegLifeRing,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Securite() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 min-h-screen py-16 px-6 lg:px-20 text-gray-800 font-sans">
      {/* En-tête */}
      <section className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">
          Sécurité & Assurance
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Votre sérénité est notre priorité : accompagnement fiable, assistance continue et garanties pour un séjour en toute sécurité.
        </p>
      </section>

      {/* Garanties sécurité */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaShieldAlt className="text-3xl text-red-500" />,
            title: "Garantie & couverture",
            desc: "Nos excursions sont couvertes par des assurances partenaires pour faire face à tout imprévu.",
          },
          {
            icon: <FaHandsHelping className="text-3xl text-green-500" />,
            title: "Assistance continue",
            desc: "Une équipe reste disponible 24h/24 pour répondre à vos besoins et vous accompagner à tout moment.",
          },
          {
            icon: <FaUserShield className="text-3xl text-blue-600" />,
            title: "Encadrement fiable",
            desc: "Nos guides expérimentés assurent votre sécurité tout au long du parcours avec des consignes claires.",
          },
          {
            icon: <FaRegLifeRing className="text-3xl text-yellow-500" />,
            title: "Réactivité en cas d'urgence",
            desc: "En cas de problème, des solutions rapides et adaptées sont immédiatement mises en œuvre.",
          },
          {
            icon: <FaPhoneAlt className="text-3xl text-purple-500" />,
            title: "Support accessible",
            desc: "Un numéro d'urgence et un suivi client personnalisés pour vous rassurer tout au long de votre voyage.",
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
        <h2 className="text-3xl font-semibold text-red-600">
          Voyager en toute confiance
        </h2>
        <p className="text-gray-700 italic">
          Grâce à leur soutien constant et leur professionnalisme, nous nous sommes sentis accompagnés du début à la fin. Une vraie tranquillité d’esprit !
        </p>
      </section>

      {/* Appel à l'action */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Des questions sur votre sécurité ?</h3>
        <p className="text-gray-600 mb-6">
          Contactez-nous pour en savoir plus sur nos dispositifs d accompagnement et d assurance.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
        >
          Contacter notre équipe de sécurité
        </button>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-md bg-black/40 ">
             
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Formulaire de contact 
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                rows={4}
                placeholder="Expliquez votre demande ou préoccupation..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
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
