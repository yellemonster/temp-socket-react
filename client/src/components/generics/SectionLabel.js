import React from "react";
import HR from "./HR";
import BR from "./BR";

export default function SectionLabel({ label, clr }) {
  return (
    <>
      <div className={`Section-Label ${clr ? clr : ""}`}>{label}</div>
      <HR />
      <BR />
    </>
  );
}
