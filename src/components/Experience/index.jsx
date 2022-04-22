import React from "react";
import Achievement from "../Achievement";
import "./index.css";

const Experience = () => (
  <div className="experience">
    <Achievement circle="8+" line1="years" line2="experience" />
    <Achievement circle="20+" line1="completed" line2="projects" />
    <Achievement circle="5+" line1="companies" line2="worked" />
  </div>
);

export default Experience;
