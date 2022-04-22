import React from "react";
import "./index.css";

export default function Achievement({ circle, line1, line2 }) {
  return (
    <div className="achievement">
      <div className="achievement__circle">{circle}</div>
      <span className="achievement__line1">{line1}</span>
      <span className="achievement__line2">{line2}</span>
    </div>
  );
}
