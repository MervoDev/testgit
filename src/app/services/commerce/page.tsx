"use client";
import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function CommerceService() {
  const [modalOpen, setModalOpen] = useState(false);

  //  fermer le modal 
 const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e.target === e.currentTarget) {
    
  }
};


  return (
    <div className="min-h-screen pt-20 bg-white text-gray-800 px-4 sm:px-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <ShoppingBag className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold mb-2">Commerce Général</h1>
        <p className="text-gray-600 text-lg">
          Découvrez notre expertise dans le commerce de biens variés, adaptés à tous les besoins.
        </p>
      </div>

      {/* Section principale */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto ">
        <div>
          <img
            src="/images/img3.jpg"
            alt="Image 3"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Ce que nous proposons</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Vente de produits alimentaires, vestimentaires et électroménagers</li>
            <li>Fourniture de biens en gros et détail</li>
            <li>Partenariats pour l'approvisionnement</li>
            <li>Livraison rapide et fiable</li>
            <li>Support client personnalisé</li>
          </ul>
        </div>
      </div>

      {/* Appel à l'action */}
      <div className="mt-16 text-center pb-24">
        <p className="text-gray-700 text-lg mb-4">
          Besoin d’un partenaire fiable pour vos besoins en produits ?
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition "
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
    </div>
  );
}
