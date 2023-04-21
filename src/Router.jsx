import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Accomodation from "./Pages/Accomodation";
import About from "./Pages/About";
import Error from "./Pages/Error";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/projet-kasa/" element={<Home />} />
        <Route
          path="/projet-kasa/rental/:rentalId"
          element={<Accomodation />}
        />
        <Route path="/projet-kasa/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
