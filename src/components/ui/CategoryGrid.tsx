import { Link } from "react-router-dom";
import {
  Home,
  Laptop,
  Plane,
  BookOpen,
  Shirt,
  Utensils,
  Armchair,
  Car,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    name: "Mode & Accessoires",
    icon: <Shirt size={22} className="text-gray-700" />,
    subcategories: ["Vêtements", "Chaussures", "Bijoux", "Sacs"],
    link: "/products/fashion",
    count: 1245,
  },
  {
    name: "Maison & Cuisine",
    icon: <Utensils size={22} className="text-gray-700" />,
    subcategories: ["Ustensiles", "Décoration", "Électroménager", "Linge"],
    link: "/products/home",
    count: 876,
  },
  {
    name: "Meubles & Décoration",
    icon: <Armchair size={22} className="text-gray-700" />,
    subcategories: ["Salon", "Chambre", "Bureau", "Extérieur"],
    link: "/products/furniture",
    count: 342,
  },
  {
    name: "Produits Numériques",
    icon: <Laptop size={22} className="text-gray-700" />,
    subcategories: ["Logiciels", "E-books", "Cours en ligne", "Graphismes"],
    link: "/products/digital",
    count: 567,
  },
  {
    name: "Véhicules",
    icon: <Car size={22} className="text-gray-700" />,
    subcategories: ["Voitures", "Motos", "Pièces détachées", "Accessoires"],
    link: "/products/vehicles",
    count: 231,
  },
  {
    name: "Immobilier",
    icon: <Home size={22} className="text-gray-700" />,
    subcategories: ["Maisons", "Appartements", "Terrains", "Locations"],
    link: "/real-estate",
    count: 189,
  },
  {
    name: "Voyages & Aventures",
    icon: <Plane size={22} className="text-gray-700" />,
    subcategories: ["Billets d'avion", "Hôtels", "Circuits", "Visites"],
    link: "/travel",
    count: 112,
  },
  {
    name: "Formations & Éducation",
    icon: <BookOpen size={22} className="text-gray-700" />,
    subcategories: ["En ligne", "Présentiel", "Certifiantes", "Ateliers"],
    link: "/training",
    count: 298,
  },
];

export const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={cat.link}
          className="group relative flex flex-col justify-between h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
        >
          <div className="p-5 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 leading-snug group-hover:text-black transition-colors duration-200">
                {cat.name}
              </h3>
              <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200 flex-shrink-0">
                {cat.icon}
              </div>
            </div>

            <ul className="text-sm text-gray-500 space-y-1 mt-auto">
              {cat.subcategories.slice(0, 3).map((sub) => (
                <li key={sub} className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 flex-shrink-0"></span>
                  {sub}
                </li>
              ))}
              {cat.subcategories.length > 3 && (
                <li className="text-xs text-gray-400 mt-1">
                  +{cat.subcategories.length - 3} autres
                </li>
              )}
            </ul>
          </div>

          <div className="flex justify-between items-center px-5 py-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-600">
              {cat.count} annonces
            </span>
            <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-700 transition-colors duration-200" />
          </div>
        </Link>
      ))}
    </div>
  );
};