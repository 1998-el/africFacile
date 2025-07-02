import { Home, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const properties = [
  {
    type: "Maison",
    location: "Douala, Bonanjo",
    price: "25 000 000 FCFA",
    image: "/images/property-1.jpg"
  },
  // ... autres propriétés
];

export const RealEstateSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img 
              src={property.image} 
              alt={property.type} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <Home size={18} />
                <span className="font-semibold">{property.type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <MapPin size={16} />
                <span>{property.location}</span>
              </div>
              <div className="text-lg font-bold text-blue-600">{property.price}</div>
              <Link 
                to="/real-estate" 
                className="inline-block mt-4 text-sm bg-green-50 text-green-600 px-4 py-2 rounded hover:bg-green-100 transition"
              >
                Voir détails
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/real-estate"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Explorer l'immobilier <MapPin size={18} />
        </Link>
      </div>
    </div>
  );
};