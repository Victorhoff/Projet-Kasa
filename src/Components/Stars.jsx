import React from "react";

// On récupère la note du logement depuis le fichier JSON

const Stars = ({ rating }) => {
  // On crée un tableau de 1 à 5 pour le comparer ensuite à la note du logement
  const ratingScale = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* On parcourt le tableau en comparant la note du logement à l'index actuel,
      si la note est supérieure ou égale on retourne une étoile rouge, sinon une grise */}

      {ratingScale.map((star, index) =>
        rating >= star ? (
          <img
            key={index}
            className="rating__icon"
            src={"redStar.png"}
            alt="étoile rouge"
          />
        ) : (
          <img
            key={index}
            className="rating__icon"
            src={"greyStar.png"}
            alt="étoile grise"
          />
        )
      )}
    </div>
  );
};

export default Stars;
