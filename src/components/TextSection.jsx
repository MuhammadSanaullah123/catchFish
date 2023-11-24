import React from "react";
//others
import { motion, useAnimation } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const TextSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Adjust as needed
  });
  return (
    <div id="textSection" ref={ref}>
      <motion.h1
        className="textSectionh1"
        variants={textVariant(0)}
        animate={inView ? "show" : "hidden"}
      >
        Transform your brand with Catch Fish, Your Partner in Strategic Amazon
        Management
      </motion.h1>
      <motion.p
        className="textSectionp1"
        variants={textVariant(0.2)}
        animate={inView ? "show" : "hidden"}
      >
        Unlock the full potential of your business with Catch Fish, your
        dedicated partner in comprehensive Amazon management. We are not just
        another agency; we are the driving force behind your success on the
        world's largest online marketplace
      </motion.p>
      <motion.h1
        className="textSectionh1"
        variants={textVariant(0.4)}
        animate={inView ? "show" : "hidden"}
      >
        Why work with Catch Fish?
      </motion.h1>
      <motion.p
        className="textSectionp1"
        variants={textVariant(0.6)}
        animate={inView ? "show" : "hidden"}
      >
        Choosing to collaborate with us means tapping into our deep
        understanding of the Amazon ecosystem. We have a proven history of
        significantly boosting sales for our clients. Our approach is tailored,
        offering bespoke solutions that cater to the specific requirements of
        your business. Our communication is transparent, ensuring you're
        consistently informed, and we proactively adapt to industry changes to
        keep your strategies effective. With a dedicated commitment to your
        success, we function as a strategic partner, guiding you through the
        dynamic Amazon landscape and ensuring your business not only survives
        but thrives in the competitive online marketplace
      </motion.p>
    </div>
  );
};

export default TextSection;
