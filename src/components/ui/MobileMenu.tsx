/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import {
  X, ChevronDown, ChevronRight,
  ShoppingCart, User, Phone, Mail, Info,
  Shirt,  Laptop, Book, Plane
} from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  productLinks: any[];
  serviceLinks: any[];
}

export const MobileMenu = ({ open, onClose, productLinks, serviceLinks }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="z-999">
      <div
        className={`fixed z-990 inset-0 bg-gray-900/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center bg-gradient-to-r from-green-600 to-green-500">
          <div className="flex items-center gap-3">
            <div className="bg-white text-green-600 p-2 rounded-lg">
              <span className="font-bold text-lg">AF</span>
            </div>
            <span className="font-semibold text-white text-lg">AfricFacil</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={22} className="text-white" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-72px)]">
          <nav className="p-4 space-y-1">

            <div className="mb-1">
              <button
                onClick={() => toggleSection("products")}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShoppingCart size={18} className="text-green-600" />
                  </div>
                  <span className="font-medium">Nos Produits</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform duration-200 ${
                    expandedSections.products ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedSections.products && (
                <div className="pl-4 mt-1 space-y-2 ml-6 border-l-2 border-green-100">
                  {productLinks.map((section) => (
                    <div key={section.title} className="space-y-1">
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="flex justify-between items-center w-full text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-green-50 p-1.5 rounded-md">
                            {section.icon || <Shirt size={16} className="text-green-500" />}
                          </div>
                          <span className="text-sm font-medium">{section.title}</span>
                        </div>
                        <ChevronRight
                          size={16}
                          className={`text-gray-400 transition-transform duration-200 ${
                            expandedSections[section.title] ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {expandedSections[section.title] && (
                        <div className="pl-2 space-y-1 ml-6">
                          {section.subLinks.map((item: any) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={onClose}
                              className="flex items-center gap-3 py-2 px-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            >
                              <span className="w-2 h-2 rounded-full bg-green-200 flex-shrink-0"></span>
                              <span>{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-1">
              <button
                onClick={() => toggleSection("services")}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Laptop size={18} className="text-blue-600" />
                  </div>
                  <span className="font-medium">Nos Services</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform duration-200 ${
                    expandedSections.services ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedSections.services && (
                <div className="pl-4 mt-1 space-y-2 ml-6 border-l-2 border-blue-100">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={onClose}
                      className="flex items-center gap-3 py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-200 flex-shrink-0"></span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/training"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-all"
            >
              <div className="bg-purple-100 p-2 rounded-full">
                <Book size={18} className="text-purple-600" />
              </div>
              <span>Formations</span>
            </Link>

            <Link
              to="/travel"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-all"
            >
              <div className="bg-cyan-100 p-2 rounded-full">
                <Plane size={18} className="text-cyan-600" />
              </div>
              <span>Voyages</span>
            </Link>

            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-xs text-gray-400">Compte</span>
              </div>
            </div>
            <Link
              to="/login"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-all"
            >
              <div className="bg-gray-100 p-2 rounded-full">
                <User size={18} className="text-gray-600" />
              </div>
              <span>Mon compte</span>
            </Link>

            <Link
              to="/cart"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <ShoppingCart size={18} className="text-gray-600" />
                </div>
                <span>Panier</span>
              </div>
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
            </Link>
            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-xs text-gray-400">Contact</span>
              </div>
            </div>

            <div className="px-4 py-2 space-y-4">
              <div className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all">
                <div className="bg-green-100 p-2 rounded-full mt-0.5 flex-shrink-0">
                  <Phone size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Service client</p>
                  <p className="text-sm font-medium text-gray-800">(+237) 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all">
                <div className="bg-green-100 p-2 rounded-full mt-0.5 flex-shrink-0">
                  <Mail size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-800">contact@africfacil.com</p>
                </div>
              </div>

              <Link
                to="/about"
                onClick={onClose}
                className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all"
              >
                <div className="bg-green-100 p-2 rounded-full mt-0.5 flex-shrink-0">
                  <Info size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">À propos</p>
                  <p className="text-sm font-medium text-gray-800">Notre entreprise</p>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};