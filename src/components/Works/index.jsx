import React, { useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./index.css";
import { themeContext } from "../../Context";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/Fiverr.png";
import Amazon from "../../img/Amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  return (
    <div className="works" id="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolore tenetur iusto adipisci. Quam sed odit, ullam soluta est
          laboriosam.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, vero!
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </span>

        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">Hire Me</button>
        </Link>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="works__right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="works__mainCircle"
        >
          <div className="works__innerCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="works__innerCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="works__innerCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="works__innerCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="works__innerCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="works__backgroundCircle works__backgroundCircle--blue"></div>
        <div className="works__backgroundCircle works__backgroundCircle--yellow"></div>
      </div>
    </div>
  );
};

export default Works;
