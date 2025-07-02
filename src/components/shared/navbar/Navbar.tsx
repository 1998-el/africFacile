/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Search,
  X,
  Menu,
  Phone,
  Mail,
  Info,
  ChevronDown,
  ChevronRight,
  Box,
  Building,
  FileText,
  Briefcase,
  Shirt,
  Utensils,
  Armchair,
  Car,
  Laptop,
  Book,
  GraduationCap,
  Code,
  MapPin,
  Home as HomeIcon,
} from "lucide-react";
import { MobileMenu } from "../../ui/MobileMenu";

export const Navbar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Nouvel état pour la visibilité de la navbar au scroll
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY; // Variable locale pour suivre la position de défilement précédente

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50); // Maintient votre logique originale pour 'isScrolled'

      // Logique pour afficher/masquer la navbar en fonction de la direction de défilement
      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Défilement vers le bas et au-delà d'un petit seuil
        setNavbarVisible(false);
      } else if (currentScrollY < prevScrollY || currentScrollY <= 50) {
        // Défilement vers le haut ou tout en haut de la page
        setNavbarVisible(true);
      }
      prevScrollY = currentScrollY; // Met à jour la position de défilement précédente
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Le tableau de dépendances vide signifie que cet effet ne s'exécute qu'une fois au montage

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Recherche:", searchQuery);
      // Ici, vous ajouteriez la logique de redirection ou d'appel d'API pour la recherche
    }
  };

  const productMegaMenuData = [
    {
      title: "Produits Physiques",
      icon: <Box size={18} className="text-green-600" />,
      description: "Vêtements, ustensiles, meubles, véhicules et plus encore.",
      column: [
        {
          heading: "Catégories Populaires",
          links: [
            { label: "Vêtements & Chaussures", to: "/products/clothing", icon: <Shirt size={16} /> },
            { label: "Ustensiles de cuisine", to: "/products/kitchen", icon: <Utensils size={16} /> },
            { label: "Meubles & Décoration", to: "/products/furniture", icon: <Armchair size={16} /> },
            { label: "Véhicules", to: "/products/vehicles", icon: <Car size={16} /> },
            { label: "Électronique & High-Tech", to: "/products/electronics", icon: <Laptop size={16} /> },
            { label: "Autres produits physiques", to: "/products/others" },
          ],
        },
      ],
    },
    {
      title: "Immobilier",
      icon: <Building size={18} className="text-green-600" />,
      description: "Terrains, maisons, emplacements et fonds de commerce.",
      column: [
        {
          heading: "Types de Biens",
          links: [
            { label: "Terrains à vendre/louer", to: "/real-estate/land", icon: <MapPin size={16} /> },
            { label: "Maisons à vendre/louer", to: "/real-estate/houses", icon: <HomeIcon size={16} /> },
            { label: "Emplacements commerciaux", to: "/real-estate/locations", icon: <MapPin size={16} /> },
            { label: "Fonds de commerce", to: "/real-estate/business", icon: <Briefcase size={16} /> },
          ],
        },
      ],
    },
    {
      title: "Produits Numériques",
      icon: <FileText size={18} className="text-green-600" />,
      description: "Documents, formations en ligne, logiciels et e-books.",
      column: [
        {
          heading: "Ressources Digitales",
          links: [
            { label: "Documents PDF (Cours, Livres, Guides)", to: "/digital/pdf", icon: <Book size={16} /> },
            { label: "Formations en ligne", to: "/digital/courses", icon: <GraduationCap size={16} /> },
            { label: "Logiciels & Applications", to: "/digital/software", icon: <Code size={16} /> },
          ],
        },
      ],
    },
  ];

  const serviceLinks = [
    { label: "Services Présentiels", to: "/services/presentiels" },
    { label: "Services à Distance", to: "/services/distances" },
    { label: "Proposer un Service", to: "/services/propose" },
  ];

  return (
    // Conteneur principal de la navbar avec position fixe et transition
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-sm`} // Ajout de bg-white et shadow-sm ici
    >
      {/* Première barre (top bar) */}
      <div className="max-w-7xl bg-[#192338] text-white text-sm py-3 px-6 mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <Link to="/" className="flex items-center group">
            <span className="hidden sm:block font-extrabold text-2xl text-[#ffffff] tracking-tight transition-colors group-hover:text-green-700">
              AfricFacil
            </span>
          </Link>
          <a
            href="tel:+237123456789"
            className="flex items-center gap-1 hover:text-green-200 transition-colors"
          >
            <Phone size={14} />
            <span>(+237) 123 456 789</span>
          </a>
          <a
            href="mailto:contact@africfacil.com"
            className="hidden md:flex items-center gap-1 hover:text-green-200 transition-colors"
          >
            <Mail size={14} />
            <span>contact@africfacil.com</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/about"
            className="flex items-center gap-1 hover:text-green-200 transition-colors"
          >
            <Info size={14} />
            <span>À propos</span>
          </Link>
          <Link to="/help" className="hover:text-green-200 transition-colors">
            Aide & FAQ
          </Link>
        </div>
      </div>

      {/* Deuxième barre (main navigation) */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between h-14">
        {/* Bouton pour ouvrir le menu mobile (toujours visible sur mobile) */}
        <div className="md:hidden flex items-center">
          <button
            className="md:hidden p-2 mr-2 text-gray-600 hover:text-green-600 transition-colors rounded-full"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>

        <nav className="hidden md:flex flex-1 justify-left items-center space-x-8">
          <Link
            to="/"
            className="relative px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#192338e2] transition-colors group"
          >
            Tout
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#192338] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("products")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 transition-colors group">
              Produits
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-200 ${
                  hoveredItem === "products" ? "rotate-180" : ""
                }`}
              />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#192338] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>

            {hoveredItem === "products" && (
              <div className="absolute left-0 -translate-x-1/2 top-full mt-0 w-[800px] bg-white rounded-lg shadow-2xl border border-gray-100 z-50 animate-fade-in-down p-6 grid grid-cols-3 gap-6">
                {productMegaMenuData.map((category) => (
                  <div key={category.title} className="flex flex-col">
                    <div className="flex items-center text-lg font-bold text-gray-900 mb-3">
                      {category.icon}
                      <span className="ml-2">{category.title}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      {category.description}
                    </p>
                    {category.column.map((col, colIdx) => (
                      <div key={colIdx} className="mb-4 last:mb-0">
                        {col.heading && (
                          <h4 className="text-xs font-semibold uppercase text-gray-400 mb-2">
                            {col.heading}
                          </h4>
                        )}
                        <ul className="space-y-2">
                          {col.links.map((link) => (
                            <li key={link.to}>
                              <Link
                                to={link.to}
                                className="flex items-center text-sm text-gray-700 hover:text-green-600 hover:bg-green-50/20 px-3 py-2 rounded-md transition-colors duration-200"
                              >
                                {link.icon && <span className="mr-2">{link.icon}</span>}
                                {link.label}
                                <ChevronRight
                                  size={14}
                                  className="ml-auto text-gray-400 group-hover:text-green-600"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("services")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 transition-colors group">
              Services
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-200 ${
                  hoveredItem === "services" ? "rotate-180" : ""
                }`}
              />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#192338] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>

            {hoveredItem === "services" && (
              <div className="absolute left-0 top-full mt-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 z-50 animate-fade-in-down p-2">
                <ul className="space-y-1">
                  {serviceLinks.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50/20 rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/training"
            className="relative px-3 py-2 text-sm font-semibold text-gray-700 transition-colors group"
          >
            Formations
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#192338] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>

          <Link
            to="/travel"
            className="relative px-3 py-2 text-sm font-semibold text-gray-700 transition-colors group"
          >
            Voyages
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#192338] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </nav>

        {/* Section des icônes à droite */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Bouton de recherche (visible sur mobile et desktop) */}
          <button
            onClick={() => setSearchExpanded(!searchExpanded)} // Toggle searchExpanded
            className="flex items-center text-gray-600 hover:text-green-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label="Toggle search"
          >
            {searchExpanded && (
              <X size={20} className="mr-1 text-red-500" /> // Icône X quand la barre est ouverte
            )}
            {!searchExpanded && (
              <Search size={20} className="mr-1" /> // Icône Search quand la barre est fermée
            )}
            <span className="text-sm font-medium hidden lg:inline">Rechercher</span>
          </button>

          <Link
            to="/cart"
            className="relative p-2 text-gray-600 hover:text-green-600 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold border-2 border-white">
              3
            </span>
          </Link>

          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-[3px] text-sm font-medium flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
          >
            <User size={18} />
            <span className="hidden sm:inline">Se connecter</span>
          </Link>
        </div>
      </div>

      {/* Barre de recherche mobile (s'affiche uniquement si searchExpanded est true et sur mobile) */}
      {searchExpanded && (
        <div className="md:hidden px-4 pb-3 pt-2 border-t border-gray-100">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher produits, services..."
              className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              autoFocus
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 transition-colors rounded-r-md" // Ajout de rounded-r-md
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      )}

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        productLinks={productMegaMenuData}
        serviceLinks={serviceLinks}
      />

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};