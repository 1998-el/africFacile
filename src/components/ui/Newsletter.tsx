import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-green-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Restez informé</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Abonnez-vous à notre newsletter pour recevoir les dernières offres et actualités
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            className="flex-1 px-4 py-3 rounded text-gray-900"
            required
          />
          <button 
            type="submit" 
            className="bg-white text-green-600 font-bold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            S'abonner
          </button>
        </form>
      </div>
    </section>
  );
};