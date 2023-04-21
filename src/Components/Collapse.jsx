import React, { useState } from "react";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const openCollapse = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={openCollapse} className="collapse__dropdown__title">
        <h2>{props.label}</h2>
        <div className="collapse__dropdown__arrow">
          {/* On ajoute la classe open à la flèche pour qu'elle se retourne quand la collapse est ouverte*/}
          <img
            src="Vector.png"
            alt="flèche"
            className={`dropdownArrow ${open}`}
          />
        </div>
      </button>
      {open && (
        <div className="collapse__dropdown__content">
          <>{props.children}</>
        </div>
      )}
    </>
  );
};

export default Collapse;
