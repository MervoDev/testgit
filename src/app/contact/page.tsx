"use client";
import React, { useEffect, useState } from "react";

export default function ContactPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // On active l'affichage après un petit délai pour l'effet dynamique
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen py-16 px-6 lg:px-20 text-gray-800 font-sans flex flex-col items-center">
      <h1 className={`text-4xl font-extrabold mb-10 transition-opacity duration-700 ${showContent ? "opacity-100" : "opacity-0"}`}>
        Contactez-nous
      </h1>

      <div className={`w-full max-w-xl bg-yellow-50 rounded-2xl p-8 shadow-md space-y-6 transition-transform duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci pour votre message !");
            (e.target as HTMLFormElement).reset();
          }}
        >

          <div>
            <label htmlFor="name" className="block font-semibold mb-1">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-yellow-500"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-yellow-500"
              placeholder="Votre adresse email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}    // sans les guillemets, en nombre
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-yellow-500"
              placeholder="Écrivez votre message ici..."
            />

          </div>

          <button
            type="submit"
            className="bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition flex mx-auto"
          >
            Envoyer
          </button>
        </form>


      </div>
    </div>
  );
}
