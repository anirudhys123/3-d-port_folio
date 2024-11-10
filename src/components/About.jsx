import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Updated font family to Poppins and adjusted sizes
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[18px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[18px]`} style={{ fontFamily: "'Poppins', sans-serif" }}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[32px] font-bold`} style={{ fontFamily: "'Poppins', sans-serif" }}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[20px] max-w-3xl leading-[32px]"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        I'm a skilled front-end web developer with expertise in JavaScript,
        TypeScript, and frameworks like React and Three.js. I focus on creating
        intuitive, responsive, and visually engaging user interfaces. I'm a
        quick learner who collaborates closely with clients to build seamless,
        user-centered experiences. Let's bring your vision to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
