import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
interface Product {
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
  category?: string; 
}

interface FeaturedProductsProps {
  products: Product[];
}

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {

  return (
    <>
      {products.length === 0 ? ( 
        <div className="flex justify-center py-12 text-gray-600">
          Aucun produit vedette disponible pour le moment.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> {/* Adjusted grid for potentially more columns for diverse products */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <Link
          to="/products"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
        >
          Voir tous les produits →
        </Link>
      </div>
    </>
  );
};