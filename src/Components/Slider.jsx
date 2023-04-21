import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Si l'on est à la dernière image et que l'on clique sur suivant, on revient à la première image, sinon on passe à l'image suivante

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Si l'on est à la première image et que l'on clique sur précédent, on revient à la dernière image, sinon on passe à l'image précédente

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Si le logement contient plusieurs photos on met en place le slider avec des flèches de navigation

  if (slides.length > 1) {
    return (
      <section className="slider">
        <img
          src="leftArrow.png"
          alt="Flèche gauche"
          className="leftArrow"
          onClick={prevSlide}
        ></img>
        <img
          src="rightArrow.png"
          alt="Flèche droite"
          className="rightArrow"
          onClick={nextSlide}
        />
        {slides.map((slides, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  key={index}
                  src={slides}
                  alt="Photo du logement"
                  className="slider__image"
                />
              )}
            </div>
          );
        })}
      </section>
    );
  }

  // Si le logement ne contient qu'une seule photo on affiche une image fixe

  return (
    <section className="slider">
      {slides.map((slides, index) => {
        return (
          <div className="slide active">
            <img
              src={slides}
              alt="Photo du logement"
              className="slider__image"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
