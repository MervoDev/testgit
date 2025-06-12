"use client";
import { useState } from "react";
import {
  FaTaxi,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaUserCircle,
} from "react-icons/fa";

export default function Transport() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    // Traitement ou envoi des données ici
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white py-16 px-6 lg:px-20 text-gray-800 font-sans">
      {/* En-tête */}
      <section className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600">
          Réservez votre Taxi Privé
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un service rapide, sécurisé et disponible 24h/24 pour tous vos déplacements urbains ou interurbains.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition"
        >
          Réserver un taxi
        </button>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaTaxi className="text-3xl text-yellow-500" />,
            title: "Confort & sécurité",
            text: "Des véhicules modernes, propres, climatisés avec chauffeurs expérimentés.",
          },
          {
            icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
            title: "Prise en charge flexible",
            text: "Nous venons vous chercher à l’adresse de votre choix à l’heure souhaitée.",
          },
          {
            icon: <FaClock className="text-3xl text-blue-500" />,
            title: "Ponctualité garantie",
            text: "Vos déplacements sont planifiés avec soin pour arriver à l’heure.",
          },
        ].map(({ icon, title, text }, i) => (
          <div key={i} className="bg-white shadow-md p-6 rounded-2xl space-y-3">
            <div>{icon}</div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </section>

      {/* Modal de réservation */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-xl">
            <h2 className="text-center text-2xl font-bold text-yellow-600 mb-6">
              Formulaire de Réservation
            </h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

              <div className="flex items-center gap-3">
                <FaUserCircle className="text-yellow-500" />
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-500" />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                <input
                  type="text"
                  placeholder="Point de départ"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-yellow-500" />
                <input
                  type="date"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-yellow-500" />
                <input
                  type="time"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  required
                />
              </div>
              <textarea
                placeholder="Détails supplémentaires (facultatif)"
                rows={3}
                className="border border-gray-300 p-3 rounded-lg md:col-span-2"
              ></textarea>
              {/* <div className="flex justify-between items-center mt-4"> */}
              <div className="md:col-span-2 mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-gray-600 hover:underline"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-yellow-600 text-white px-5 py-2 rounded-lg hover:bg-yellow-700 transition"
                >
                  Réservez maintenant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
