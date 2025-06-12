"use client";
import { useState } from "react";

import {
    FaMapMarkedAlt,
    FaClock,
    FaHotel,
    FaBusAlt,
    FaCheckCircle,
    FaSmileBeam,
} from "react-icons/fa";

export default function Circuit() {
    const [showModal, setShowModal] = useState(false);

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = () => {
        setShowModal(false);
    };

    // Données des circuits
    const circuits = [
        {
            title: "Cotonou - Porto-Novo - Pobè",
            img: "/images/img21.jpg",
            description: "Découvrez le charme dynamique de Cotonou, la richesse culturelle de Porto-Novo, et l'authenticité de Pobè. Un circuit parfait pour explorer la diversité urbaine et naturelle du sud Bénin.",
        },
        {
            title: "Abomey - Ouidah - Grand-Popo",
            img: "/images/img22.jpg",
            description: "Plongez dans l'histoire royale à Abomey, flânez dans les ruelles mystiques d'Ouidah, et profitez des plages paisibles de Grand-Popo. Un voyage entre patrimoine et détente.",
        },
        {
            title: "Parakou - Natitingou - Tanguiéta",
            img: "/images/img23.jpg",
            description: "Admirez les paysages vallonnés du nord avec Parakou, Natitingou et Tanguiéta. Explorez les parcs naturels et découvrez la faune exceptionnelle du parc national de la Pendjari.",
        },
        {
            title: "Bohicon - Dassa-Zoumè - Glazoué",
            img: "/images/img24.jpg",
            description: "Un circuit riche en traditions et marchés colorés, à travers Bohicon, Dassa-Zoumè et Glazoué. Découvrez les arts locaux et la vie authentique du centre Bénin.",
        },
        {
            title: "Kandi - Malanville - Ségbana",
            img: "/images/img25.jpg",
            description: "Explorez le nord-est du Bénin avec ce circuit captivant. Entre paysages fluviaux, cultures traditionnelles et biodiversité, une aventure unique vous attend.",
        },
        {
            title: "Lokossa - Aplahoué - Grand-Popo",
            img: "/images/img26.jpg",
            description: "Parcourez la région du Mono avec Lokossa et Aplahoué, avant de finir en beauté sur les plages de Grand-Popo. Une combinaison parfaite entre nature et culture.",
        },
    ];

    return (
        <div className="relative bg-gradient-to-br from-white to-pink-50 py-20 px-6 lg:px-20 space-y-24 text-gray-800 font-sans">
            {/* SECTION 1 : Introduction */}
            <section className="max-w-6xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-600">
                    Explorez nos circuits touristiques
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                    Vivez une aventure organisée à travers les plus beaux sites touristiques. Un voyage complet, pratique et inoubliable.
                </p>
            </section>

            {/* SECTION 2 : Fonctionnement */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-5">
                    <h2 className="text-3xl font-bold text-emerald-600">
                        Comment fonctionne nos circuit ?
                    </h2>
                    <p className="text-gray-700">
                        Avec notre circuit touristique, partez l’esprit léger : tout est prévu pour vous permettre de découvrir plusieurs destinations incontournables, sans vous soucier de l’organisation.
                    </p>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center gap-3">
                            <FaMapMarkedAlt className="text-emerald-500 text-xl" />
                            Parcours planifié incluant plusieurs étapes.
                        </li>
                        <li className="flex items-center gap-3">
                            <FaClock className="text-emerald-500 text-xl" />
                            Timing optimisé pour profiter sans stress.
                        </li>
                        <li className="flex items-center gap-3">
                            <FaHotel className="text-emerald-500 text-xl" />
                            Hébergements et repas inclus dans le forfait.
                        </li>
                        <li className="flex items-center gap-3">
                            <FaBusAlt className="text-emerald-500 text-xl" />
                            Transport organisé entre les destinations.
                        </li>
                    </ul>
                </div>
                <img
                    src="/images/img6.jpg"
                    alt="Carte de circuit"
                    className="rounded-2xl shadow-lg w-full"
                />
            </section>

            {/* NOUVELLES SECTIONS : CIRCUITS */}
            <section className="max-w-6xl mx-auto space-y-16">
                {circuits.map(({ title, img, description }, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-lg p-6">
                        <img
                            src={img}
                            alt={title}
                            className="rounded-2xl w-full md:w-1/3 object-cover shadow-md"
                        />
                        <div className="md:w-2/3 space-y-4">
                            <h3 className="text-2xl font-bold text-emerald-600">{title}</h3>
                            <p className="text-gray-700 text-lg">
                                {description}
                            </p>
                            <p className="text-gray-900 font-medium  max-w-3xl  pl-4 border-l-4 border-emerald-300">
                                Plongez dans une expérience immersive et laissez-vous surprendre par les merveilles cachées de ces destinations !
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* SECTION 3 : Avantages */}
            <section className="bg-white p-10 rounded-3xl shadow-xl max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-emerald-600 mb-8 text-center">
                    Pourquoi choisir un circuit touristique ?
                </h2>
                <div className="grid md:grid-cols-2 gap-10 text-gray-800">
                    <div className="flex items-start gap-4">
                        <FaCheckCircle className="text-green-500 text-2xl mt-1" />
                        <div>
                            <h3 className="font-semibold text-xl">Voyage sans tracas</h3>
                            <p>Tout est planifié pour vous : transport, hébergement, activités.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaSmileBeam className="text-yellow-400 text-2xl mt-1" />
                        <div>
                            <h3 className="font-semibold text-xl">Expérience enrichissante</h3>
                            <p>Découvrez de nouveaux lieux avec un guide qui partage ses connaissances.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaClock className="text-blue-500 text-2xl mt-1" />
                        <div>
                            <h3 className="font-semibold text-xl">Gain de temps</h3>
                            <p>Visitez l’essentiel sans perdre de temps à organiser chaque étape.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaHotel className="text-purple-500 text-2xl mt-1" />
                        <div>
                            <h3 className="font-semibold text-xl">Confort garanti</h3>
                            <p>Profitez d’un hébergement de qualité et de services pratiques inclus.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOUTON RESERVATION */}
            <div className="text-center mt-12">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-emerald-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-emerald-700 transition"
                >
                    Réservez maintenant
                </button>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4  bg-black/40 backdrop-blur-md z-40">
                    <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-bold text-center text-emerald-600 mb-4 sticky top-0 bg-white z-10">
                            Réservez votre circuit
                        </h2>

                        <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Nom complet" className="border border-gray-300 rounded-lg p-3 w-full" required />
                            <input type="email" placeholder="Adresse email" className="border border-gray-300 rounded-lg p-3 w-full" required />
                            <input type="tel" placeholder="Téléphone" className="border border-gray-300 rounded-lg p-3 w-full" required />
                            <select className="border border-gray-300 rounded-lg p-3 w-full" required>
                                <option value="">Circuit choisi</option>
                                <option>Cotonou - Porto-Novo - Pobè</option>
                                <option>Abomey - Ouidah - Grand-Popo</option>
                                <option>Parakou - Natitingou - Tanguiéta</option>
                                <option>Bohicon - Dassa-Zoumè - Glazoué</option>
                                <option>Kandi - Malanville - Ségbana</option>
                                <option>Lokossa - Aplahoué - Grand-Popo</option>
                            </select>
                            <input type="date" className="border border-gray-300 rounded-lg p-3 w-full" required />
                            <textarea placeholder="Message (facultatif)" className="border border-gray-300 rounded-lg p-3 w-full md:col-span-2" rows={2}></textarea>

                            <button
                                type="submit"
                                className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition md:col-span-2"
                            >
                                Envoyer la réservation
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
