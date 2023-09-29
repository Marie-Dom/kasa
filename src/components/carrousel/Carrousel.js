import ArrowRight from "../../assets/arrow-left.png";
import ArrowLeft from "../../assets/arrow-right.png";
import { useState } from "react";

// Création de la fonction Slider() pour récupérer les photos en utilisant le hook useState
export default function Slider({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Fonction de mise à jour de l'index actuel : setCurrentIndex()
  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
  };

  //   Ajout du carrousel dans le Dom avec les flèches gauche et droite pour naviguer dans le slide
  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="carrousel"
    >
      {imageSlider.length > 1 && (
        <>
          <img
            className="carrousel_arrow carrousel_arrow_right"
            src={ArrowRight}
            alt="show next slider"
            onClick={nextSlide}
          />
          <img
            className="carrousel_arrow carrousel_arrow_left"
            src={ArrowLeft}
            alt="show previous slider"
            onClick={prevSlide}
          />
          <p className="slideCount">
            {currentIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
    </section>
  );
}
