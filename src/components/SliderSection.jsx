import React from "react";
//others
import { motion, useAnimation } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const SliderSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Adjust as needed
  });
  return (
    <div id="sliderSection" ref={ref}>
      <motion.p
        className="sliderSectionp1"
        variants={textVariant(0)}
        animate={inView ? "show" : "hidden"}
      >
        Vendor Central Management for Amazon
      </motion.p>
      <motion.div
        class="line"
        variants={textVariant(0.2)}
        animate={inView ? "show" : "hidden"}
      >
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </motion.div>
      <motion.div
        className="lineDiv"
        variants={textVariant(0.2)}
        animate={inView ? "show" : "hidden"}
      >
        <p className="linep">SEO and Content</p>
        <p className="linep">FBA Management</p>
      </motion.div>
      <motion.div
        className="endDiv"
        variants={textVariant(0.4)}
        animate={inView ? "show" : "hidden"}
      >
        <h1>Save time and make more money</h1>
        <p>
          One phone call with us can kick-off a customised plan that manages all
          of this for you
        </p>
      </motion.div>
    </div>
  );
};

export default SliderSection;
