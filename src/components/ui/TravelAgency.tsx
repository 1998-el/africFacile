import { Link } from "react-router-dom";
import { Plane } from "lucide-react";
const destinations = [
  {
    country: "Canada",
    image: "/images/canada.jpg",
    offers: ["Études", "Immigration", "Tourisme"]
  },
];

export const TravelAgency = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2 text-blue-600">Nos Destinations Phares</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Trouvez les meilleures opportunités de voyage à l'international
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {destinations.map((dest, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg h-40">
            <img 
              src={dest.image} 
              alt={dest.country} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">{dest.country}</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {dest.offers.map((offer, i) => (
                  <span key={i} className="text-xs bg-white/30 text-white px-2 py-1 rounded">
                    {offer}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/travel"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Consulter nos offres <Plane size={18} />
      </Link>
    </div>
  );
};