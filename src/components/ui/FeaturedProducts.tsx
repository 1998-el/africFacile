import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";

// Define the Product interface locally if not already defined globally or imported
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
  category?: string; // Added category as per mockProducts
}

interface FeaturedProductsProps {
  products: Product[]; // Now accepts products as a prop
}

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  // Removed isLoading state and useEffect as data is passed via props

  return (
    <>
      {/* The main heading and section wrapper are now handled by HomePage */}
      {/* The content directly starts with the grid of products */}
      {products.length === 0 ? ( // Check if products array is empty to show a message
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