import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import SkillSphere from "./SkillSphere";
import WorkButton from "./workButton";
import Contact from "./Contact";
import { SectionWrapper } from "../hoc";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <About />
      <div className="flex flex-col sm:flex-row md:flex-row gap-11 mb-20">
        <Experience />
        <div>
          <Skills />
          <SkillSphere />
          <WorkButton />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Landing, "landing");
