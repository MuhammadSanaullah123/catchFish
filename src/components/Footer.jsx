import React from "react";
//others
import { motion, useAnimation } from "framer-motion";
import { textVariantUp, fadeIn } from "../utils/motion";
import { useInView } from "react-intersection-observer";
//assets
import jellyFish from "../assets/jellyFish.png";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Adjust as needed
  });
  return (
    <div id="footer" ref={ref}>
      <div className="firstSection">
        <motion.img
          src={jellyFish}
          alt=""
          className="jellyImg"
          variants={textVariantUp(0.6)}
          animate={inView ? "show" : "hidden"}
        />
        <motion.div
          className="headingDiv"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          animate={inView ? "show" : "hidden"}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.h1 className="heading1">Catch</motion.h1>
          <motion.h1 className="heading2">Fish</motion.h1>
        </motion.div>
      </div>
      <div className="endSection">
        <p>
          ToyFight® — Suite 4C Origin, Spring Gardens, Manchester, M2 2BQ, UK
        </p>
      </div>
    </div>
  );
};

export default Footer;
