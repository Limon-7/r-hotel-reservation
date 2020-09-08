import React from "react";
import "./Title.css";

function Title({ title }) {
  return (
    <div className="title">
      <h4>{title}</h4>
      <div></div>
    </div>
  );
}

export default Title;
