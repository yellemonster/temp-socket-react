import React from "react";
import Header from "./Header";

export default function ElementLabel({ label, details }) {
  return (
    <div className="Section-Element-Label">
      <Header label={label} />
      <span>{details}</span>
    </div>
  );
}
