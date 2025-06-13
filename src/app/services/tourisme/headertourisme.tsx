"use client";

import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react"; // Utilise une icône Terre moderne
import Link from "next/link";
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
        bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] 
        py-20 px-6 sm:py-28 sm:px-12 shadow-2xl
        transition-all duration-1000 ease-out
        bg-[length:400%_400%] animate-[gradientMove_16s_ease-in-out_infinite]
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="absolute inset-0 -z-10 backdrop-blur-md bg-black/30" />

      <div className="mx-auto max-w-7xl text-center text-white">
        <div className="flex items-center justify-center mb-4">
          <Globe2 size={40} className="text-[#4ade80] animate-spin-slow" />
          <h1 className="ml-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Prestations Touristiques
          </h1>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Découvrez les merveilles du Bénin à travers nos circuits sur mesure, nos guides passionnés
          et un accompagnement complet pour un voyage inoubliable.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-base font-medium text-white">

         <Link
            href="/contact"
             className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition duration-300">
                Nous contacter
            </Link>
        </div>

        <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {[
            ["Circuits à découvrir", "+50"],
            ["Guides certifiés", "30"],
            ["Taux de satisfaction", "98%"],
            ["Support 24h/24", "Oui"],
          ].map(([label, number]) => (
            <div key={label} className="text-center">
              <dt className="text-sm text-gray-300">{label}</dt>
              <dd className="text-3xl font-semibold text-white">{number}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Animation personnalisée */}
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
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
