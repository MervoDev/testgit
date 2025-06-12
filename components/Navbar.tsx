"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChartBar, FaBuilding, FaUmbrellaBeach, FaShoppingCart } from "react-icons/fa";

export default function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white w-full fixed top-0 left-0 shadow-md z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-14 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            {/* Logo + Links */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Image src="/logo.jpg" alt="Logo" width={50} height={20} />
              </div>

              <div className="hidden sm:ml-6 sm:flex space-x-4">
                <Link
                  href="/"
                  className="rounded-md  px-3 py-2 text-sm font-medium text-black hover:bg-gray-100"
                >
                  Accueil
                </Link>


                {/* Services with dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    type="button"
                  >
                    Services
                    <svg
                      className="ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1">
                        <Link
                          href="/services/analyse"
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setServicesOpen(false)}
                        >
                          <FaChartBar className="text-emerald-600" />
                          Analyse des affaires
                        </Link>
                        <Link
                          href="/services/btp"
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setServicesOpen(false)}
                        >
                          <FaBuilding className="text-emerald-600" />
                          BTP
                        </Link>
                        <Link
                          href="/services/tourisme"
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setServicesOpen(false)}
                        >
                          <FaUmbrellaBeach className="text-emerald-600" />
                          Tourisme
                        </Link>
                        <Link
                          href="/services/commerce"
                          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setServicesOpen(false)}
                        >
                          <FaShoppingCart className="text-emerald-600" />
                          Commerce Général
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                 <Link
                  href="/apropos"
                  className="rounded-md  px-3 py-2 text-sm font-medium text-black hover:bg-gray-100"
                >
                  A propos
                </Link>

                <a
                  href="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu (simple version, can be enhanced) */}
        {servicesOpen && (
          <div className="sm:hidden bg-white shadow-md">
            <Link
              href="/services/analyse"
              className="flex items-center gap-2 px-6 py-3 text-gray-700 border-b border-gray-200"
              onClick={() => setServicesOpen(false)}
            >
              <FaChartBar className="text-emerald-600" />
              Analyse des affaires
            </Link>
            <Link
              href="/services/btp"
              className="flex items-center gap-2 px-6 py-3 text-gray-700 border-b border-gray-200"
              onClick={() => setServicesOpen(false)}
            >
              <FaBuilding className="text-emerald-600" />
              BTP
            </Link>
            <Link
              href="/services/tourisme"
              className="flex items-center gap-2 px-6 py-3 text-gray-700 border-b border-gray-200"
              onClick={() => setServicesOpen(false)}
            >
              <FaUmbrellaBeach className="text-emerald-600" />
              Tourisme
            </Link>
            <Link
              href="/services/commerce"
              className="flex items-center gap-2 px-6 py-3 text-gray-700 border-b border-gray-200"
              onClick={() => setServicesOpen(false)}
            >
              <FaShoppingCart className="text-emerald-600" />
              Commerce Général
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
