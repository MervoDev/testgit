"use client";
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 text-center space-y-8">
        
        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
          </div>
        </div>

        {/* Informations de contact */}
        <div>
  <h3 className="text-xl font-semibold mb-4 text-center">Contact</h3>
  <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 text-gray-400">
    <div className="flex items-center">
      <Phone className="w-5 h-5 mr-2" />
      <span>+229 01 00 00 00 00</span>
    </div>
    <div className="flex items-center">
      <Mail className="w-5 h-5 mr-2" />
      <span>contact@btic.pro</span>
    </div>
    <div className="flex items-center">
      <MapPin className="w-5 h-5 mr-2" />
      <span>Cotonou, Bénin</span>
    </div>
  </div>
</div>


        {/* Copyright */}
        <div className="text-sm text-gray-500 pt-4 border-t border-gray-700">
          © 2025 <span className="font-semibold text-white">BTIC</span>. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
