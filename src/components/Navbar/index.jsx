import React from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle";
import "./index.css";

const Navbar = () => (
  <div className="n-wrapper" id="Navbar">
    {/* left */}
    <div className="n-left">
      <div className="n-name">Andrew</div>
      <Toggle />
    </div>
    {/* right */}
    <div className="n-right">
      <div className="n-list">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link activeClass="active" to="Navbar" spy smooth>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" spy smooth>
              Serivces
            </Link>
          </li>
          <li>
            <Link to="works" spy smooth>
              Experience
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy smooth>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="testimonial" spy smooth>
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link to="contact" spy smooth>
        <button className="button n-button">Contact</button>
      </Link>
    </div>
  </div>
);

export default Navbar;
