import { Clock, MapPin, User, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  provider: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  type: 'in-person' | 'remote';
  category: string;
  image?: string;
  duration?: string;
  isVerified?: boolean;
}

interface ServiceListProps {
  services: Service[];
  type?: 'in-person' | 'remote';
  limit?: number;
  variant?: 'grid' | 'list';
}

export const ServiceList = ({
  services,
  type = 'in-person',
  limit = 4,
  variant = 'grid'
}: ServiceListProps) => {
  const filteredServices = services
    .filter(service => type ? service.type === type : true)
    .slice(0, limit);

  if (filteredServices.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Aucun service disponible pour le moment</p>
        <Link 
          to="/services/add" 
          className="inline-block mt-4 text-green-600 hover:underline"
        >
          Proposer un service
        </Link>
      </div>
    );
  }

  return (
    <div className={variant === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6' : 'space-y-6'}>
      {filteredServices.map((service) => (
        <div 
          key={service.id}
          className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all ${
            variant === 'list' ? 'flex flex-col md:flex-row' : ''
          }`}
        >
          {service.image && (
            <div className={`relative ${
              variant === 'list' 
                ? 'md:w-1/3 h-48 md:h-auto' 
                : 'w-full aspect-video'
            }`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                {service.category}
              </div>
            </div>
          )}

          <div className={`p-4 ${variant === 'list' ? 'md:w-2/3' : ''}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-gray-900 line-clamp-2">
                {service.title}
              </h3>
              <span className="font-bold text-green-600 whitespace-nowrap ml-2">
                {new Intl.NumberFormat('fr-CM', {
                  style: 'currency',
                  currency: 'XAF'
                }).format(service.price).replace('FCFA', 'FCFA')}
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {service.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <User size={14} />
              <span>{service.provider}</span>
              {service.isVerified && (
                <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded">
                  Vérifié
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-3 text-sm mb-4">
              <div className="flex items-center gap-1">
                {service.type === 'in-person' ? (
                  <>
                    <MapPin size={14} className="text-gray-500" />
                    <span>{service.location}</span>
                  </>
                ) : (
                  <>
                    <Clock size={14} className="text-gray-500" />
                    <span>À distance</span>
                  </>
                )}
              </div>

              {service.duration && (
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-gray-500" />
                  <span>{service.duration}</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(service.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600">
                  ({service.reviewCount})
                </span>
              </div>

              <Link
                to={`/services/${service.id}`}
                className="text-sm bg-green-50 text-green-600 hover:bg-green-100 px-3 py-1.5 rounded transition-colors"
              >
                Voir détails
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};