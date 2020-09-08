import React from "react";
import "./Spinner.css";

import loadingGif from "../../images/gif/loading-arrow.gif";

function Spinner() {
  return (
    <div className="spinner">
      <h4>Loading.....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}

export default Spinner;
