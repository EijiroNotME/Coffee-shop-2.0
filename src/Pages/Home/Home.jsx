// Home.jsx
import React from "react";
import Hero from "./Section/Hero.jsx";
import Offers from "./Section/Offers.jsx";

const Home = () => {
  return (
    <div className="overflow-auto">
      <Hero />
      <Offers />
    </div>
  );
};

export default Home;
