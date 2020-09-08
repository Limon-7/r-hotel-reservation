import React from "react";
import "./Hero.css";

function Hero({ hero, children }) {
  return <div className={hero}>{children}</div>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};
export default Hero;
