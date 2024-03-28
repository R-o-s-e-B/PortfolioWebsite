import React from "react";
import Navbar from "./Navbar";
import Designs from "./Designs";
import Development from "./Development";
import { SectionWrapper } from "../hoc";

const Work = () => {
  return (
    <>
      <Navbar />
      <Designs />

      <h1 className="text-2xl mx-40 lg:mb-10 mb-5 justify-center">
        Art gallery
      </h1>
      <div className="w-[80%] h-96 mt-5 justify-start mx-auto">
        <Development />
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
