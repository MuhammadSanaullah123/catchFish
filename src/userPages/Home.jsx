import React, { useEffect } from "react";
//others
import { motion, useAnimation } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";
//assets
import leftPerson from "../assets/leftPerson.png";
import rightPerson from "../assets/rightPerson.png";
//components
import TextSection from "../components/TextSection";
import SliderSection from "../components/SliderSection";
import SecondSection from "../components/SecondSection";

const Home = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsHeading = useAnimation();
  const [refLeft, inViewLeft] = useInView({ threshold: 0.5 });
  const [refRight, inViewRight] = useInView({ threshold: 0.5 });
  const [refHeading, inViewHeading] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start({ y: 0, opacity: 1 });
    } else {
      controlsLeft.start({ y: -200, opacity: 0 });
    }
  }, [controlsLeft, inViewLeft]);

  useEffect(() => {
    if (inViewRight) {
      controlsRight.start({ y: 0, opacity: 1 });
    } else {
      controlsRight.start({ y: -200, opacity: 0 });
    }
  }, [controlsRight, inViewRight]);
  useEffect(() => {
    if (inViewHeading) {
      controlsHeading.start({ opacity: 1 });
    } else {
      controlsHeading.start({ opacity: 0 });
    }
  }, [controlsHeading, inViewHeading]);
  return (
    <motion.div id="home">
      <motion.div id="firstSection">
        <div className="personDiv">
          <motion.img
            src={leftPerson}
            alt=""
            className="leftPerson"
            variants={{
              hidden: { opacity: 0, y: -200 },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsLeft}
            ref={refLeft}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={rightPerson}
            alt=""
            className="rightPerson"
            variants={{
              hidden: { opacity: 0, y: -200 },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsRight}
            ref={refRight}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="headingDiv"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            initial="hidden"
            animate={controlsHeading}
            ref={refHeading}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.h1 className="heading1">Catch</motion.h1>
            <motion.h1 className="heading2">
              FI
              <p>S</p>
              <p>H</p>
            </motion.h1>
          </motion.div>
        </div>

        <p className="p">REELING IN SUCCESS</p>
        <TextSection />
        <SliderSection />
      </motion.div>
      <SecondSection />
    </motion.div>
  );
};

export default Home;
