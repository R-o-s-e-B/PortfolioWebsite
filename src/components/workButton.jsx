import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WorkButton = () => {
  return (
    <Link to="/Work">
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="bg-black rounded-full w-48 text-wrap mt-20 mx-auto mb-10 px-8 py-3 lg:ml-24 lg:mt-44 hover:bg-secondary hover:tracking-wide justify-center"
      >
        <h1 className="text-white text-xl justify-center">
          {<span>See my work</span>}
        </h1>
      </motion.div>
    </Link>
  );
};

export default WorkButton;
