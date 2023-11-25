import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//assets
import logo from "../assets/logo.svg";
import burger from "../assets/burger.svg";
import cross from "../assets/xmark.svg";
//others
import { motion, useAnimation } from "framer-motion";
import { textVariant } from "../utils/motion";
const Header = () => {
  const controls = useAnimation();
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const staggerChildren = 0.5; // Adjust this value for the desired stagger effect

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      controls.start("hidden");
    } else {
      controls.start("visible");
    }
  };

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="header"
      animate={controls}
      /*  initial="visible"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }} */
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="logoImg"
        /*  variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }} */
      />

      <motion.div className="linkDiv desktopLinkDiv">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link>Home</Link>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Link>Amazon</Link>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.45 }}
        >
          <Link>Services</Link>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Link>Meet the team</Link>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.55 }}
        >
          <Link>Blog</Link>
        </motion.div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="desktopLinkDiv"
      >
        <Link>Contact</Link>
      </motion.div>

      {isMenuVisible && (
        <motion.div
          className="mobileDiv"
          initial="hidden"
          animate={isMenuVisible ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            initial="hidden"
            animate={isMenuVisible ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link>Home</Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isMenuVisible ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link>Amazon</Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isMenuVisible ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link>Services</Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isMenuVisible ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Link>Meet the team</Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isMenuVisible ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <Link>Blog</Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isMenuVisible ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Link>Contact</Link>
          </motion.div>
        </motion.div>
      )}
      {!isMenuVisible ? (
        <motion.img
          src={burger}
          className="burgerIcon"
          onClick={toggleMenu}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      ) : (
        <motion.img
          src={cross}
          className="burgerIcon"
          onClick={toggleMenu}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export default Header;
