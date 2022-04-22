import React from "react";
import "./index.css";

function Card({ emoji, heading, detail }) {
  return (
    <div className="card">
      <img className="card__emoji" src={emoji} alt="" />
      <span className="card__heading">{heading}</span>
      <span className="card__detail">{detail}</span>
      <button className="card__button">LEARN MORE</button>
    </div>
  );
}

export default Card;
