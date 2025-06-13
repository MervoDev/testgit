import { Building2, HardHat } from "lucide-react";
import React from "react";

export  default function HeaderB() {
  return (
    <header className="relative bg-gradient-to-b from-blue-900 to-blue-300
text-white py-20 px-6 md:px-20 rounded-b-3xl overflow-hidden">
      {/* Animation effet fade-in + slide down */}
      <div
        className="max-w-6xl mx-auto text-center space-y-6 opacity-0 animate-fadeSlideIn"
        style={{ animationFillMode: "forwards", animationDuration: "1.2s", animationTimingFunction: "ease-out" }}
      >
        <div className="flex justify-center mb-4">
          <Building2 className="w-16 h-16 text-cyan-600 animate-pulse" />
          <HardHat className="w-16 h-16 text-cyan-600 ml-4 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Solutions BTP Innovantes
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium text-gray-300 leading-relaxed">
          Construisons ensemble des infrastructures durables et sécurisées adaptées à vos besoins.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="mt-8 bg-orange-400 hover:bg-orange-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          aria-label="Découvrez nos services"
        >
          Découvrez nos services
        </button>
      </div>

      {/* Arrière-plan décoratif */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-600 via-yellow-400 to-transparent opacity-20 rounded-full blur-3xl"
      />
      <style>
        {`
          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeSlideIn {
            animation-name: fadeSlideIn;
          }
        `}
      </style>
    </header>
  );
}
