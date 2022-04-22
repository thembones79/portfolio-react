import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { themeContext } from "../../Context";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Glassesimoji from "../../img/glassesimoji.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from "../FloatingDiv";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Andrew Thomas</span>
          <span>
            Frontend Developer with high level of experience in web design and
            development, producing the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="Github" srcset={Github} />
          <img src={LinkedIn} alt="LinkedIn" srcset={LinkedIn} />
          <img src={Instagram} alt="Instagram" srcset={Instagram} />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" srcset={Vector1} />
        <img src={Vector2} alt="Vector2" srcset={Vector2} />
        <img src={boy} alt="boy" srcset={boy} />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-12%" }}
          transition={transition}
          src={Glassesimoji}
          alt="boy"
          srcset={Glassesimoji}
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "48%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "4rem" }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
