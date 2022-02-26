//
import React from "react";
//
function Datafield({ label, value }) {
  return (
    <div className="Datafield">
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}
//
export default Datafield;
