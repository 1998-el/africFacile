import { Star, Heart, ShoppingCart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  isDigital?: boolean;
  isPromo?: boolean;
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export const ProductCard = ({ product, variant = 'default' }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CM', {
      style: 'currency',
      currency: 'XAF'
    }).format(price).replace('FCFA', 'FCFA');
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={`group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden
        ${variant === 'compact' ? 'max-w-[200px] h-[360px]' : 'h-[420px]'}
      `}
      style={{ border: '1px solid #e0e0e0' }}
      aria-label={`Voir ${product.title}`}
    >
      <div className={`relative ${variant === 'compact' ? 'h-[160px]' : 'h-[200px]'} bg-gray-50`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        <div className="absolute top-3 left-3 flex gap-2">
          {product.isDigital && (
            <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-full font-medium backdrop-blur-sm">
              Digital
            </span>
          )}
          {product.isPromo && (
            <span className="bg-red-50 text-red-700 text-xs px-2.5 py-0.5 rounded-full font-medium backdrop-blur-sm">
              Promo
            </span>
          )}
        </div>

        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/80 rounded-full shadow-sm backdrop-blur-sm hover:bg-gray-100 transition-colors duration-200"
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Heart
            size={18}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400 group-hover:text-gray-500'}
          />
        </button>
      </div>

      <div className={`p-4 flex flex-col ${variant === 'compact' ? 'h-[200px]' : 'h-[220px]'}`}>
        <h3 className={`font-semibold text-gray-800 mb-1 leading-tight ${
          variant === 'compact' ? 'text-sm line-clamp-2' : 'text-base line-clamp-2'
        }`}>
          {product.title}
        </h3>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-bold text-lg text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 font-medium">
            ({product.reviewCount} avis)
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <MapPin size={14} className="text-gray-400" />
          <span>{product.location}</span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(`Ajouté au panier : ${product.title}`);
          }}
          className={`mt-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-white bg-green-600 hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200
            ${variant === 'compact' ? 'text-sm' : ''}
          `}
        >
          <ShoppingCart size={18} />
          <span>Ajouter au panier</span>
        </button>
      </div>
    </Link>
  );
};