import React from "react";

const Banner = ({ backgroundImg, bannerTitle }) => {
  return (
    <div className="banner">
      <img src={backgroundImg} alt="" />
      <h1 className="banner__title">{bannerTitle}</h1>
    </div>
  );
};

export default Banner;
