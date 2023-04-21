import React from "react";

const Host = ({ host }) => {
  return (
    <div className="accomodation__host">
      <h3 className="accomodation__host__name">{host.name}</h3>
      <img
        className="accomodation__host__image"
        src={host.picture}
        alt="Photo du propriétaire"
      />
    </div>
  );
};

export default Host;
