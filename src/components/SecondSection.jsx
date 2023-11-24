import React from "react";
//others
import { motion, useAnimation } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { useInView } from "react-intersection-observer";
//assets
import bookmark from "../assets/bookmark.svg";
//constants
import data from "../constants";
const SecondSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Adjust as needed
  });
  return (
    <div id="secondSection" ref={ref}>
      <motion.h1
        className="secondSectionh1"
        variants={textVariant(0)}
        animate={inView ? "show" : "hidden"}
      >
        YOU DON'T HAVE TO RECRUIT, HIRE, AND BUILD A TEAM OF EXPERTS FOR AMAZON
      </motion.h1>
      <motion.p
        className="secondSectionp1"
        variants={textVariant(0.2)}
        animate={inView ? "show" : "hidden"}
      >
        Our Team of Vendor & Seller Central Experts Becomes Your Team
      </motion.p>
      <motion.h1 className="secondSectionp2">Latest News</motion.h1>
      <div className="articleMainDiv">
        {data.map((article, index) => (
          <motion.div
            className="articleDiv"
            variants={fadeIn("right", "spring", 0.5 * index, 1)}
            animate={inView ? "show" : "hidden"}
          >
            <img src={article.image} alt="" className="mainImg" />
            <span className="span1">
              <span className="span2">
                <img src={bookmark} alt="" />
                <p>6 minutes to read</p>
              </span>
              <p>September 27, 2023</p>
            </span>
            <h1 className="title">{article.title}</h1>
            <p className="desc"> {article.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
