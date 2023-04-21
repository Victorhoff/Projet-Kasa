import React from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import rentals from "../Data/logements.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner
        backgroundImg={"banner.png"}
        bannerTitle={"Chez vous, partout et ailleurs"}
      />
      <main className="gallery">
        {rentals.map((rental) => (
          <article key={rental.id} className="gallery__card">
            <Link to={`/kasa/rental/${rental.id}`}>
              <Cards image={rental.cover} title={rental.title} />
            </Link>
          </article>
        ))}
      </main>
    </>
  );
};

export default Home;
