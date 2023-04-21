import "./sass/style.scss";
import Router from "./Router";
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
