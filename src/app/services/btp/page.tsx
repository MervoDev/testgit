"use client";

import {
    Hammer,
    Building2,
    Ruler,
    HardHat,
    ArrowRight,
    X,
} from "lucide-react";
import React, { ReactNode, useState } from "react";
import HeaderB from './headerbtp';

export default function BTPPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleOpenModal = (service: string) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService("");
    };

    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 md:px-20 pt-24">
            <HeaderB/>
            <section className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">Service BTP</h1>
                <p className="text-lg text-gray-600">
                    Nous offrons des solutions fiables et innovantes dans le domaine du bâtiment et des travaux publics.
                </p>
            </section>

            <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                <Card
                    icon={<Hammer className="w-10 h-10 text-blue-700" />}
                    title="Construction Générale"
                    description="Conception et réalisation de bâtiments résidentiels, commerciaux et industriels."
                    onReserve={() => handleOpenModal("Construction Générale")}
                />
                <Card
                    icon={<Building2 className="w-10 h-10 text-green-700" />}
                    title="Génie Civil"
                    description="Travaux d’infrastructure : routes, ponts, barrages et plus encore."
                    onReserve={() => handleOpenModal("Génie Civil")}
                />
                <Card
                    icon={<Ruler className="w-10 h-10 text-purple-700" />}
                    title="Études & Plans"
                    description="Plans architecturaux, calculs de structure et études de faisabilité."
                    onReserve={() => handleOpenModal("Études & Plans")}
                />
                <Card
                    icon={<HardHat className="w-10 h-10 text-orange-600" />}
                    title="Sécurité Chantier"
                    description="Mise en œuvre des normes de sécurité pour vos projets BTP."
                    onReserve={() => handleOpenModal("Sécurité Chantier")}
                />
                <Card
                    icon={<Hammer className="w-10 h-10 text-red-600" />}
                    title="Rénovation"
                    description="Remise à neuf de bâtiments anciens avec des matériaux durables."
                    onReserve={() => handleOpenModal("Rénovation")}
                />
                <Card
                    icon={<Building2 className="w-10 h-10 text-yellow-600" />}
                    title="Suivi & Gestion"
                    description="Pilotage complet des projets du début à la fin avec reporting régulier."
                    onReserve={() => handleOpenModal("Suivi & Gestion")}
                />
            </section>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4  bg-black/40 backdrop-blur-md z-40">

                    <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
                        <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-400 hover:text-red-600">
                            <X />
                        </button>
                        <h2 className="text-xl font-semibold mb-4 text-center text-blue-800">Réservation</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nom"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Prénom"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="telephone"
                                placeholder="Téléphone"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />



                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            >

                                <option value="Construction Générale">Construction Générale</option>
                                <option value="Génie Civil">Génie Civil</option>
                                <option value="Études & Plans">Études & Plans</option>
                                <option value="Sécurité Chantier">Sécurité Chantier</option>
                                <option value="Rénovation">Rénovation</option>
                                <option value="Suivi & Gestion">Suivi & Gestion</option>
                            </select>
                            <textarea
                                placeholder="Description du service"
                                rows={3} 
                                className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white text-sm py-1.5 rounded hover:bg-green-700 transition "
                            >
                                Soumettre
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

function Card({
    icon,
    title,
    description,
    onReserve,
}: {
    icon: ReactNode;
    title: string;
    description: string;
    onReserve: () => void;
}) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-300">
            <div>
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>

            {/* CTA bouton */}
            <button
                onClick={onReserve}
                className="mt-6 inline-flex items-center text-blue-600 text-sm font-medium font-sans hover:underline"
            >
                Réservez maintenant <ArrowRight className="ml-2 w-4 h-4" />
            </button>
        </div>
    );
}
