// Hero.jsx
import React from "react";
import Cup from "../../../assets/Cup-Of-Coffee.png";
import { Button } from "../../../Components/Button/Button.jsx";

const Hero = () => {
  return (
    <section className="w-screen min-h-screen bg-grad-diagonal flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container-x">
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-color-heading gap-y-4">
          <h1 className="main-header">Discover the taste of the real coffee</h1>
          <p className="paragraph">
            We are always ready to help by providing the best coffee for you. We
            believe a good place to live can make life better.
          </p>
          <Button variant="highlight" size="default">
            Reservation
          </Button>
        </div>
        <div className="hidden md:flex justify-center">
          <img
            src={Cup}
            alt="Cup of coffee"
            className="w-52 h-52 md:w-80 md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
