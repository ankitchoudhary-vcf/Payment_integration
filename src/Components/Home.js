import React from "react";
import { About } from "./About";
import { CarouselComponent } from "./CarouselComponent";

export const Home = () => {
  return (
    <>
      <div className="columns is-mobile is-centered is-hidden-desktop">
        <div className="column is-6-desktop is-full-touch">
          <CarouselComponent />
        </div>
      </div>

      <div className="columns is-mobile is-centered is-hidden-touch mt-6">
        <div className="column is-6-desktop is-full-touch">
          <CarouselComponent />
        </div>
      </div>

      <About />
    </>
  );
};
