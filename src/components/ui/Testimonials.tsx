import { Star } from "lucide-react";
const testimonials = [
  {
    name: "Jean K.",
    role: "Vendeur de meubles",
    content: "AfricFacil m'a permis de tripler mon chiffre d'affaires en 3 mois !",
    avatar: "/images/avatar1.jpg"
  },
];

export const Testimonials = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Ils nous font confiance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.content}"</p>
            <div className="flex mt-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};