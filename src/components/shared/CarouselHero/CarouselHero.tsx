import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Slide {
  title: string;
  description: string;
  image: string;
  alt?: string;
}

interface CarouselHeroProps {
  slides: Slide[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export const CarouselHero = ({
  slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}: CarouselHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval);
    return () => clearInterval(timer);
  }, [autoSlide, autoSlideInterval, slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (deltaX < -50) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }
    setTouchStartX(null);
  };

  return (
    <section
      className="relative h-full  overflow-hidden z-0"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full h-full relative">
              <div className="w-full h-full animate-kenburns absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.alt || slide.title}
                  className="w-full h-full object-cover brightness-[.6] will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-stagger">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-delayed">
          {slides[currentIndex].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
          <Link
            to="/register"
            className="bg-white text-green-700 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition"
          >
            Commencer à vendre
          </Link>
          <Link
            to="/products"
            className="border border-white hover:bg-white hover:text-green-700 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Explorer la marketplace
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className="w-20 h-[3px] rounded-full bg-white/20 overflow-hidden"
          >
            <div
              className={`h-full bg-white rounded-full ${
                i === currentIndex ? "animate-progress-bar" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};