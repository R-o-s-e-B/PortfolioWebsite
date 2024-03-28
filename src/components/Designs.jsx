import React from "react";
import uni from "../assets/images/uni.png";
import { works } from "../constants/constants";
import { charcoal } from "../constants/constants";
import { digital } from "../constants/constants";
import { threeD } from "../constants/constants";
import light from "../assets/images/light.png";

const Designs = () => {
  return (
    <div className="w-[100%] bg-primary">
      <div className="flex flex-wrap mt-10 lg:gap-10 py-20 lg:w-[100%] lg:ml-6 bg-primary">
        {works.map((work, index) => (
          <a
            className="lg:w-[30%] md:w-[50%]"
            href={work.code ? "" : work.blink}
          >
            <div className="px-20 md:px-10 lg:px-0 rounded-xl lg:w-[100%] md:w-[100%] sm:[80%] hover:text-secondary hover:lg:w-[98%] hover:text-xl">
              <a href={work.link != "" ? work.link : work.blink} target="blank">
                <img
                  src={work.image}
                  className="cursor-pointer relative overflow-hidden rounded-xl z-0 hover:grayscale-0"
                />
              </a>

              <div className="fill relative inset-0 flex items-center justify-start z-20">
                <p className="text-l w-full">{work.title}</p>
                <div className="w-32 bg-black text-white text-xl rounded-full justify-end mt-4 mb-8 ml-30 hover:bg-secondary">
                  {work.code && work.gitlink != "" ? (
                    <a
                      className="justify-center p-4 mx-4 "
                      href={work.gitlink}
                      target="blank"
                    >
                      Github
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* <h1 className="text-2xl lg:ml-40 ml-10 lg:mb-10 mb-5">Miscellaneous</h1>
      <h2 className="lg:ml-40 ml-10">
        Art Gallery -{" "}
        <span>This consists of graphite, charcoal and digital portraits</span>
      </h2>

      <div className="w-full flex flex-wrap gap-5 justify-center">
        {charcoal.map((item) => (
          <img className="w-[26%] h-auto lg:h-96 lg:w-auto" src={item} />
        ))}
      </div>

      <div className="w-[80%] flex flex-wrap gap-5 justify-center mt-10 lg:mx-40 mx-10">
        {digital.map((item) => (
          <img
            className="w-auto lg:h-96 h-40 rounded-xl shadow-sm"
            src={item}
          />
        ))}
      </div>
      <p className="text-2xl lg:ml-72 mt-10 ml-10 lg:mb-10 mb-5">
        3D Modelling and sculpting - Zbrush and Blender
      </p>
      <div className="w-[80%] flex flex-wrap gap-5 justify-center mt-10 lg:mx-40 mx-10">
        {threeD.map((item) => (
          <img
            className="w-auto lg:h-96 h-40 rounded-xl shadow-sm bg-black"
            src={item}
          />
        ))}
      </div>
      <p className="text-2xl lg:ml-72 mt-10 ml-10 lg:mb-10 mb-5">
        Lighting - Marmoset
      </p>
      <div className="lg:w-[70%] content-center mx-auto mt-20">
        <p>A lighting project where we were given the model and the textures</p>
        <img className="rounded-xl justify-center" src={light} />
      </div> */}
    </div>
  );
};

export default Designs;
