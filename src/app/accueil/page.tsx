"use client";

//import Image from "next/image";
import Link from "next/link";
import {
  FaChartBar,
  FaBuilding,
  FaUmbrellaBeach,
  FaShoppingCart,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage() {
  return (
    <main className=" bg-white min-h-screen mt-12 padding-top pt-24 ">
      {/* Hero Section */}
     <section className="max-w-7xl mx-auto mt-0 mb-12 px-8 py-24 bg-gradient-to-r from-gray-800 to-emerald-400 rounded-2xl shadow-xl text-white text-center flex flex-col items-center justify-center">

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          Bienvenue chez MultiServices Pro
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Votre partenaire de confiance pour le tourisme, le commerce, le BTP et l’analyse des affaires.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="bg-white text-emerald-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            Contactez-nous maintenant
          </Link>
          <Link
            href="/apropos"
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-emerald-700 transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </section>


      {/* Carousel Section */}
      <section className="w-full max-w-6xl mx-auto mt-12 px-4">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          transitionTime={700}
        >
          <div>
            <img
              src="/images/img22.jpg"
              alt="Image 22"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div>
            <img
              src="/images/img23.jpg"
              alt="Image 23"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div>
            <img
              src="/images/img9.jpg"
              alt="Image 9"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div>
            <img
              src="/images/img4.jpg"
              alt="Image 4"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div>
            <img
              src="/images/img11.jpg"
              alt="Image 11"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div>
            <img
              src="/images/img3.jpg"
              alt="Image 3"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div>
            <img
              src="/images/img25.jpg"
              alt="Image 25"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

        </Carousel>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nos Domaines d’Expertise
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <FaUmbrellaBeach className="text-emerald-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tourisme</h3>
            <p className="text-gray-600 text-sm">
              Explorez les merveilles du pays avec nos circuits personnalisés,
              balades culturelles et aventures inoubliables.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <FaShoppingCart className="text-emerald-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Commerce Général</h3>
            <p className="text-gray-600 text-sm">
              Nous facilitons les échanges commerciaux avec des produits variés
              et un réseau fiable de distribution.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <FaBuilding className="text-emerald-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">BTP</h3>
            <p className="text-gray-600 text-sm">
              Des constructions solides, des rénovations modernes et une
              gestion rigoureuse de vos projets immobiliers.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <FaChartBar className="text-emerald-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analyse des Affaires</h3>
            <p className="text-gray-600 text-sm">
              Optimisez votre performance grâce à nos services d’analyse
              stratégique, financière et de marché.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto mt-0 mb-12 p-12 bg-gradient-to-r from-gray-800 to-emerald-400 rounded-2xl shadow-xl text-white text-center px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Un projet ? Une idée ?
        </h2>
        <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">
          Nous sommes là pour vous accompagner à chaque étape. Votre
          satisfaction est notre priorité.
        </p>
        <Link
          href="/contact"
          className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          Discutons ensemble
        </Link>
      </section>
    </main>
  );
}
