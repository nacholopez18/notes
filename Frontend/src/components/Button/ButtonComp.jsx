import React from "react";
import "./ButtonComp.css";

function ButtonComp(props) {
  return (
    <>
      <button className="buttonForm">{props.texto}</button>
    </>
  );
}

export default ButtonComp;
