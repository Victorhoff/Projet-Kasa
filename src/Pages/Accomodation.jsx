import React from "react";
import { useParams } from "react-router-dom";
import rentals from "../Data/logements.json";
import Slider from "../Components/Slider";
import Host from "../Components/Host";
import Stars from "../Components/Stars";
import Tags from "../Components/Tags";
import Collapse from "../Components/Collapse";

const Accomodation = () => {
  const { rentalId } = useParams();
  const selectedRental = rentals.find((rental) => rental.id === rentalId);

  // Si l'ID du logement sélectionné n'est pas connu, on retourne la page d'erreur

  if (!selectedRental) {
    return <Error />;
  }

  // Sinon, on retourne la page du logement correspondant à l'ID

  return (
    <main>
      {/* Slider */}

      <Slider slides={selectedRental.pictures} />

      {/* Titre du logement et infos sur l'hôte */}

      <div className="accomodation">
        <h1 className="accomodation__title">{selectedRental.title}</h1>
        <Host host={selectedRental.host} />
      </div>

      {/* Localisation et note du logement */}

      <h2 className="accomodation__location">{selectedRental.location}</h2>
      <div className="rating__tags__container">
        <Tags tags={selectedRental.tags} />
        <Stars rating={selectedRental.rating} />
      </div>

      {/* Collapses déroulantes */}

      <div className="collapse">
        <div className="collapse__dropdown">
          <Collapse label="Description">
            <p>{selectedRental.description}</p>
          </Collapse>
        </div>
        <div className="collapse__dropdown">
          <Collapse label="Equipements">
            <ul className="collapse__dropdown__content">
              {selectedRental.equipments.map((equipments, index) => {
                return (
                  <li key={index} className="collapse__dropdown__content__list">
                    {equipments}
                  </li>
                );
              })}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
};

export default Accomodation;
