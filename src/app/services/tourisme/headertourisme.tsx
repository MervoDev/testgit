"use client";

import { useEffect, useState } from "react";

export default function HeaderT() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        relative mx-4 my-6 overflow-hidden rounded-3xl 
        bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#4f46e5] 
        py-20 px-6 sm:py-28 sm:px-12 shadow-2xl 
        transition-all duration-1000 ease-out
        bg-[length:400%_400%] animate-[gradientMove_12s_ease_infinite]
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* Effet flou arrière */}
      <div className="absolute inset-0 -z-10 backdrop-blur-lg bg-opacity-40 bg-black/30" />

      {/* Contenu */}
      <div className="mx-auto max-w-7xl text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight animate-pulse">
          🌍 Prestations Touristiques
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
          Explorez les merveilles du Bénin avec nos circuits personnalisés, guides passionnés
          et accompagnement complet pour un voyage inoubliable.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-base font-semibold text-white">
          {["Open roles", "Internship program", "Our values", "Meet our leadership"].map((text) => (
            <a
              key={text}
              href="#"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
            >
              {text} →
            </a>
          ))}
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Offices worldwide", "12"],
            ["Full-time colleagues", "300+"],
            ["Hours per week", "40"],
            ["Paid time off", "Unlimited"],
          ].map(([label, number]) => (
            <div key={label} className="flex flex-col items-center">
              <dt className="text-sm text-gray-200">{label}</dt>
              <dd className="text-3xl font-bold text-white">{number}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Animation CSS personnalisée */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
