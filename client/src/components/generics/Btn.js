//
import React from "react";
//
function Btn({ onClick, label }) {
  return (
    <button className="Btn" onClick={onClick}>
      {label}
    </button>
  );
}
//
export default Btn;
