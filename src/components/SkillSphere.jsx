import React from "react";
import menu from "../assets/images/menu.png";
import wave from "../assets/images/waterhalf.png";
import Ps from "../assets/images/Ps.png";
import github from "../assets/images/github.png";
import Ai from "../assets/images/Ai.png";
import Figma from "../assets/images/figma.png";
import blender from "../assets/images/blender.png";
import Krita from "../assets/images/krita.png";
import as from "../assets/images/as.png";
import vsc from "../assets/images/vsc.png";

const SkillSphere = () => {
  const skillImages = [Ps, Ai, Figma, Krita, blender, github, as, vsc];
  return (
    <div className="flex flex-row flex-wrap gap-16 justify-center mt-10 lg:w-[80%] lg:mt-20 lg:ml-12">
      {skillImages.map((image, index) => (
        <div
          key={index}
          className="w-20 h-20 rounded-full border-4 border-secondary bg-wave bg-[length:140px_100px] bg-repeat-x animate-flow justify-center"
        >
          <div>
            <img
              className="h-8 mx-auto my-3 align-middle mt-5"
              src={image}
              alt="Skill"
            />
          </div>
        </div>
      ))}

      {/* <div className="w-20 h-20 rounded-full border-4 border-secondary bg-halfwave bg-[length:5rem_2.5rem] bg-halfwave-bottom bg-repeat-x">
        <img className="w-12 h-12 mx-auto my-3" src={menu} alt="Menu" />
      </div>*/}
      {/* <div className="w-20 h-20 rounded-full border-4 border-secondary relative z-10 overflow-hidden">
        <img
          className="rounded-full mt-6 w-15 h-15 relative z-0 overflow-hidden animate-move"
          src={wave}
        />
      </div> */}
    </div>
  );
};

export default SkillSphere;
