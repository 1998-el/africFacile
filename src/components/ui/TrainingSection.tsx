import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Bookmark } from "lucide-react";
const trainings = [
  {
    title: "Développement Web",
    instructor: "Tech Academy",
    price: "50 000 FCFA",
    format: "En ligne"
  },
];

export const TrainingSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Formations Populaires</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {trainings.map((training, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">{training.title}</h3>
            <div className="text-sm text-gray-600 mb-3">Par {training.instructor}</div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-green-600">{training.price}</span>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                {training.format}
              </span>
            </div>
            <Link
              to={`/training/${index}`}
              className="inline-block w-full mt-4 text-center bg-green-50 text-green-600 px-4 py-2 rounded hover:bg-green-100 transition"
            >
              S'inscrire
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/trainings"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Voir toutes les formations <Bookmark size={18} />
        </Link>
      </div>
    </div>
  );
};