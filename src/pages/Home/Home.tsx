import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CategoryGrid } from "../../components/ui/CategoryGrid";
import { ProductCard, type Product } from "../../components/ui/ProductCard";
import { ServicesSection } from "../../components/ui/ServicesSection";
// import { RealEstateSection } from "../../components/ui/RealEstateSection";
// import { TravelAgency } from "../../components/ui/TravelAgency";
// import { TrainingSection } from "../../components/ui/TrainingSection";
// import { Testimonials } from "../../components/ui/Testimonials";
// import { Newsletter } from "../../components/ui/Newsletter";

// Données des produits
const featuredProductsData: Product[] = [
  {
    id: 'prod_001',
    title: 'Smartphone Ultra Pro 256Go - Version 2025',
    price: 650000,
    originalPrice: 720000,
    image: 'https://i.pinimg.com/736x/df/d0/55/dfd0554515f578eb1a86b90202ddc4b9.jpg',
    rating: 4.8,
    reviewCount: 152,
    location: 'Douala, Cameroun',
    isPromo: true,
  },
  {
    id: 'prod_002',
    title: 'Casque Audio Sans Fil Premium',
    price: 120000,
    originalPrice: 150000,
    image: 'https://i.pinimg.com/736x/03/a3/0a/03a30a300bdd16ac4e1cce9c2130141b.jpg',
    rating: 4.5,
    reviewCount: 88,
    location: 'Yaoundé, Cameroun',
  },
  {
    id: 'prod_003',
    title: 'Livre Numérique: Marketing Digital',
    price: 25000,
    image: 'https://i.pinimg.com/736x/eb/8f/84/eb8f84077c7daff57d2e86d4fd809bcc.jpg',
    rating: 4.9,
    reviewCount: 305,
    location: 'En ligne',
    isDigital: true,
    isPromo: true,
  },
  {
    id: 'prod_004',
    title: 'Machine à Café Espresso Automatique',
    price: 380000,
    image: 'https://i.pinimg.com/736x/87/19/0b/87190b28ca2010723eb63936890cff39.jpg',
    rating: 4.7,
    reviewCount: 95,
    location: 'Bafoussam, Cameroun',
  },
  {
    id: 'prod_005',
    title: 'Service Création Site Web',
    price: 150000,
    image: 'https://i.pinimg.com/736x/11/3a/68/113a6894db6baa52bd5e6c7eaa7b18d9.jpg',
    rating: 4.6,
    reviewCount: 65,
    location: 'Service en ligne',
    isDigital: true,
  },
  {
    id: 'prod_006',
    title: 'Drone Pliable 4K avec GPS',
    price: 290000,
    image: 'https://i.pinimg.com/736x/f5/0e/60/f50e6056e2efde1bbca54025fecefdb5.jpg',
    rating: 4.4,
    reviewCount: 42,
    location: 'Garoua, Cameroun',
  },
];

// Flèches personnalisées
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
    aria-label="Next product"
  >
    <ChevronRight size={24} className="text-gray-700" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
    aria-label="Previous product"
  >
    <ChevronLeft size={24} className="text-gray-700" />
  </button>
);

// Composant Carrousel
const ProductCarousel = ({ products }: { products: Product[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="relative px-8 py-4">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export const HomePage = () => {
  return (
    <div className="bg-[#f3f4f6] text-gray-900 flex-col">
      {/* Section Hero */}
      {/* <section className="bg-[#192338] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Bienvenue sur AfricFacil
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8">
            Votre marketplace panafricaine pour des produits et services de qualité
          </p>
          <Link
            to="/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Découvrir maintenant
          </Link>
        </div>
      </section> */}

      {/* Section Catégories */}
       <section id="categories" className="bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="absolute -top-20 -left-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-30 pointer-events-none" />
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12 mb-16 relative z-10">
            <div className="text-center lg:text-left lg:w-2/3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1f1f1f] animate-fade-in">
                Découvrez l’Univers d’AfricFacil
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl lg:max-w-none mx-auto animate-fade-in-delayed">
                Votre passerelle vers une marketplace panafricaine riche en opportunités. Explorez une sélection inégalée de produits de haute qualité et de services professionnels, des dernières innovations technologiques aux solutions du quotidien, en passant par des expériences uniques. Chaque catégorie est pensée pour vous connecter à l'excellence.
              </p>
            </div>
            <div className="rounded-2xl px-8 py-10 w-full max-w-md backdrop-blur-md animate-fade-in-stagger">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "150K+", label: "Produits en ligne" },
                  { number: "3K+", label: "Services disponibles" },
                  { number: "1K+", label: "Vendeurs vérifiés" },
                  { number: "50+", label: "Catégories actives" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-start">
                    <p className="text-3xl font-extrabold text-green-600 mb-1">{stat.number}</p>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 animate-fade-in-delayed">
            <CategoryGrid />
          </div>
        </div>
      </section>

      {/* Section Produits Phares */}
      <section id="products" className="bg-[#e3e6e6] py-16 ">
        <div className="w-full mx-auto px-2 ">
          <div className="text-center mb-12 ">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Produits Phares
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les articles les plus populaires de notre marketplace
            </p>
          </div>
          <ProductCarousel products={featuredProductsData} />
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-green-600  text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Services
          </h2>
          <ServicesSection />
        </div>
      </section>

    </div>
  );
};