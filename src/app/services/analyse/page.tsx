"use client";
import React, { useState } from "react";

export default function AnalyseDesAffaires() {
  const [modalOpen, setModalOpen] = useState(false);

  const points = [
    'Analyse des tendances du marché',
    'Évaluation des processus internes',
    'Identification des opportunités de croissance',
    'Recommandations stratégiques personnalisées',
    'Support à la prise de décision',
    'Optimisation des ressources et coûts',
  ];

  // fermer le modal quand on clique sur le fond (backdrop)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white py-25 px-6 text-center rounded-b-3xl shadow-lg ">
        <h1 className="text-5xl font-extrabold mb-2">Analyse des affaires</h1>
        <p className="text-xl max-w-xl mx-auto">
          Découvrez comment optimiser votre entreprise grâce à une analyse approfondie et stratégique.
        </p>
      </header>

      {/* Section Description */}
      <section className="max-w-5xl mx-auto px-6 py-12 flex-grow">
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-blue-600 pl-4">
          Pourquoi choisir notre analyse des affaires ?
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          Notre approche combine données, expertise et outils innovants pour vous offrir une vision claire et actionnable.  
          Que ce soit pour comprendre vos performances, identifier des opportunités ou gérer les risques, nous vous accompagnons à chaque étape.
        </p>

        {/* Points clés */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point) => (
            <li key={point} className="flex items-center space-x-3">
              {/* Checkmark SVG */}
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Bouton Contactez-nous centré en bas avec marge */}
      <div className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition"
        >
          Contactez-nous
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4  bg-black/40 backdrop-blur-md z-40"
        >
          <div className="bg-white rounded-xl max-w-lg w-full p-8 relative shadow-lg">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Fermer"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">Contactez-nous</h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Nom 
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Votre message"
                  className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white w-full py-3 rounded-md hover:bg-green-700 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
