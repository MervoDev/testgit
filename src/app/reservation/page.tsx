'use client';

import React, { useState } from 'react';

const hotels = [
  {
    name: "Novotel",
    price: 100000,
    services: ["Petit-déjeuner", "Wi-Fi", "Piscine"],
    image: "/images/img12.jpg",
    description:
      "Un hôtel moderne avec tout le confort pour un séjour agréable. Novotel est une chaîne hôtelière française du groupe Accor, réputée pour offrir un équilibre parfait entre travail et détente. Avec plus de 550 établissements dans 65 pays, elle propose des espaces modernes, des suites, studios et services 24h/24 : restauration, salles de réunion, espace wellness et installations familiales.",
    gallery: ["/images/img12.jpg", "/images/img19.jpg", "/images/img20.jpg"],
  },
  {
    name: "Golden Tulip",
    price: 120000,
    services: ["Buffet", "Spa", "Salle de sport"],
    image: "/images/img14.jpg",
    description:
      "Luxe et détente au cœur de la ville avec des prestations haut de gamme. Golden Tulip est une marque de hôtels 4 étoiles haut de gamme, combinant élégance et confort. Ses établissements invitent à la détente dans une atmosphère raffinée, avec des chambres chaleureuses, des services complets comme restaurants, bars, salles de sport, spas, et un accueil attentif pour les voyages d’affaires ou en famille.",
    gallery: ["/images/img14.jpg", "/images/img17.jpg", "/images/img18.jpg"],
  },
  {
    name: "Sofitel Cotonou Marina Hotel",
    price: 250000,
    services: ["Parking", "Jardin", "Petit-déjeuner"],
    image: "/images/img13.jpg",
    description:
      "Le Sofitel Cotonou Marina est un hôtel 5 étoiles luxueux situé face à la mer. Particulièrement adapté aux séjours d’affaires et de détente, il offre deux piscines, un spa de 1 000 m², trois restaurants, un casino, et des infrastructures pour conférences et événements. Son design contemporain, mariant élégance française et ambiance tropicale, offre une expérience sensorielle inoubliable. Un cadre paisible au bord de la mer pour un repos total.",
    gallery: ["/images/img13.jpg", "/images/img15.jpg", "/images/img16.jpg"],
  },
];

export default function ReservationHotels() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ padding: 30 }}>
      {/* Grand titre */}
      <div className="pt-24 px-4">
        <h1 className="text-5xl font-bold text-center text-green-600 mb-10">
          Réservez un hôtel
        </h1>
      </div>

      {/* Liste des hôtels */}
      <div
        style={{
          display: "grid",
          gap: 30,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {hotels.map((hotel, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 20,
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 15,
              }}
            />
            <h2 style={{ fontSize: 22, fontWeight: "bold" }}>{hotel.name}</h2>
            <p style={{ margin: "8px 0" }}>
              <strong>Prix:</strong> {hotel.price.toLocaleString()} FCFA / nuit
            </p>
            <p>
              <strong>Services:</strong> {hotel.services.join(", ")}
            </p>
            <button
              style={{
                marginTop: 12,
                backgroundColor: "green",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedHotel(hotel);
                setShowForm(false);
              }}
            >
              En savoir plus
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedHotel && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: 25,
              borderRadius: 10,
              maxWidth: 600,
              width: "90%",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => setSelectedHotel(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 15,
                background: "none",
                border: "none",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            <h2 style={{ fontSize: 26, fontWeight: "bold", marginBottom: 10 }}>
              {selectedHotel.name}
            </h2>
            <p style={{ marginBottom: 15 }}>{selectedHotel.description}</p>

            <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
              {selectedHotel.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`img-${i}`}
                  style={{
                    width: "100px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />
              ))}
            </div>

            {showForm ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Réservation envoyée !");
                  setSelectedHotel(null);
                  setShowForm(false);
                }}
              >
                <input
                  type="text"
                  placeholder="Votre nom"
                  required
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  required
                  style={inputStyle}
                />
                <input type="date" required style={inputStyle} />
                <button type="submit" style={submitBtn}>
                  Confirmer la réservation
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowForm(true)}
                style={reserveBtn}
              >
                Réservez
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  border: "1px solid #ccc",
};

const submitBtn = {
  width: "100%",
  padding: 12,
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: 6,
  fontWeight: "bold",
  cursor: "pointer",
};

const reserveBtn = {
  padding: "10px 20px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: 5,
  fontWeight: "bold",
  cursor: "pointer",
};
