import React from "react";
import { useParams } from "react-router-dom";
import rentals from "../Data/logements.json";
import Slider from "../Components/Slider";
import Host from "../Components/Host";

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
    </main>
  );
};

export default Accomodation;
