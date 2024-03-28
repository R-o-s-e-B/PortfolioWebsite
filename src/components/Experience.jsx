import React from "react";
import { SectionWrapper } from "../hoc";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { experiences } from "../constants/constants.js";
import { textVariant } from "../hoc/utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#DECEC5",
      borderBlockColor: "#DECEC5",
      boxShadow: "none",
    }}
    contentArrowStyle={{ borderRight: "none" }}
    date={experience.date}
    iconStyle={{
      scale: 0.5,
      background: "#BF6262",
      boxShadow: "none",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-10 h-10 object-contain"
        ></img>
      </div>
    }
  >
    <div className="text-black text-[24px]">
      <h3>{experience.title}</h3>
      <p className="text-black text-[16px]" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-black text-[18px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="mt-44 sm:ml-2 md:ml-20">
      <motion.div variants={textVariant()}>
        <h2 className="text-4xl ml-10 lg:ml-0">Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#BF6262" layout="1-column-left">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Experience;
