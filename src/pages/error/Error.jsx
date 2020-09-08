import React from "react";
import "./Error.css";

import { Link } from "react-router-dom";

import "../../components/hero/Hero";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";

function Error() {
  return (
    <div className="error">
      <Hero>
        <Banner title="404" subTitle="page not found">
          <Link to="/" className="btn-primary">
            back to home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}

export default Error;
