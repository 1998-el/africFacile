 // adapte le chemin selon ton arborescence
import { CarouselHero } from "../CarouselHero/CarouselHero";
import afri2 from "../../../assets/images/afri_2.jpg";
import afri4 from "../../../assets/images/afri_4.jpg";
import afri1 from "../../../assets/images/afri_1.jpg";
import afri5 from "../../../assets/images/afri_5.jpg";
import afri6 from "../../../assets/images/afri_6.jpg";


const slides = [
  {
    title: "Produits Authentiques & Locaux",
    description: "Découvrez des objets artisanaux, des vêtements traditionnels et bien plus.",
    image: afri6,
  },
  {
    title: "Services Fiables à Distance et à domicile",
    description: "Réservez des prestations vérifiées où que vous soyez, sans stress.",
    image: afri5,
  },
  {
    title: "Formations Certifiantes",
    description: "Apprenez en ligne ou en présentiel avec les meilleurs formateurs panafricains.",
    image: afri1,
  },
  {
    title: "Immobilier Accessible",
    description: "Trouvez terrains, maisons, studios au Cameroun et dans la région.",
    image: afri2,
  },
  {
    title: "Voyages inspirants",
    description: "Explorez le monde avec nos offres sur mesure et nos agences partenaires.",
    image: afri4,
  },
];

export const HeroBanner = () => {
  return <div className="h-[100vh] w-full">
<CarouselHero slides={slides} />
  </div>
  ;
};