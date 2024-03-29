import { useState } from "react";

import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import image from "../assets/images/me.png";

const About = () => {
  const [showCircle, setShowCircle] = useState(false);
  const splitText = (text) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index}>&nbsp;</span>; // Preserve spaces
      } else {
        return (
          <motion.span
            key={index}
            whileHover={{ y: -10, scale: 1.1, color: "red" }}
            className="inline-block"
          >
            {char}
          </motion.span>
        );
      }
    });
  };

  return (
    <div className="relative -z-40 w-full flex flex-col-reverse md:flex-row lg:flex-row mt-28 gap-x-8 content-center lg:mx-24 md:mx-20 ml-20 justify-center pt-10">
      <div className="w-full flex flex-col gap-8 justify-center content-center my-4">
        {/* <motion.h1
          whileHover={{ y: 10, scale: 1.1, color: "red" }}
          className="text-black text-xl sm:text-2xl md:text-4xl lg:text-6xl justify-center"
        >
          Hi, I'm Rose
        </motion.h1> */}
        <motion.h1 className="text-black text-xl sm:text-2xl md:text-4xl lg:text-6xl justify-center cursor-pointer">
          {splitText("Hi, I'm Rose")}
        </motion.h1>
        <motion.h2 className="text-black sm:text-xl md:text-2xl lg:text-4xl">
          {splitText("UI/UX Designer and Developer")}
        </motion.h2>
        <p className="text-black mr-32">
          Bringing the best of both worlds to life by creating impeccable
          experiences with Design and Code.
        </p>
      </div>

      <div>
        <div className="lg:w-[30%] lg:h-[96%] md:w-[36%] md:h-[90%] sm:w-[62%] sm:h-[60%] xs:w-0 xs:h-0 md:-ml-2 md:-mt-1 rounded-full overflow-hidden absolute z-0 lg:-mt-3 lg:-ml-3">
          {showCircle ? (
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360, opacity: 1 }}
              transition={{
                duration: 1.0,
                type: "tween",
                repeat: Infinity,
              }}
              className="w-[20%] h-[120%] -mt-1 lg:h-[120%] justify-center mx-auto ml-32 lg:ml-32 lg:w-[30%] z-0 lg:-mt-2 bg-secondary absolute  "
            ></motion.div>
          ) : (
            <motion.div
              animate={{ rotate: 360, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1.5, type: "tween" }}
              className="w-[20%] h-[100%] -mt-1 lg:h-[120%] justify-center mx-auto ml-32 lg:ml-32 lg:w-[30%] z-0 lg:-mt-2 bg-secondary absolute "
            ></motion.div>
          )}
        </div>

        <img
          onMouseEnter={() => setShowCircle(true)}
          onMouseLeave={() => setShowCircle(false)}
          className="w-[60%] z-10 relative bg-primary rounded-full"
          src={image}
          alt="Sketch"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
