import React from "react";
import { animate, motion } from "framer-motion";
import { skills } from "../constants/constants";
import { designSkills } from "../constants/constants";
import { textVariant } from "../hoc/utils/motion";

const Skills = () => {
  return (
    <>
      <div className="ml-10 lg:ml-24 sm:ml-10 md:ml-8 mb-20 sm:mb-10 lg:w-[80%] lg:mt-44 md:mt-44 sm:mt-20">
        <motion.div initial={{ y: 100 }} animate={{ y: 5 }}>
          <h2 className="text-4xl lg:mb-28 sm:mb-10">Skills</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl mb-5">Development</p>
          <div className="w-[100%] flex flex-wrap gap-4 mb-8">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="bg-secondary p-1 text-center text-white text-xl rounded-lg px-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.3, backgroundColor: "red" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          <p className="text-xl mb-5">Design</p>
          <div className="w-[100%] flex flex-wrap gap-4 mb-8">
            {designSkills.map((skill) => (
              <motion.div
                key={skill}
                className="bg-secondary p-1 text-center text-white text-xl rounded-lg px-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.3, backgroundColor: "red" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
