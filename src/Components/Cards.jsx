import React from "react";

const Cards = ({ image, title }) => {
  return (
    <>
      <img src={image} alt="" className="gallery__card__img" />
      <div className="gallery__card__overlay"></div>
      <h2>{title}</h2>
    </>
  );
};

export default Cards;
