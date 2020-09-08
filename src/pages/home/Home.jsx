import React from "react";
import "./Home.css";

import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";
import FeaturedRooms from "../../components/featuredRooms/FeaturedRooms";

function Home() {
  return (
    <div className="home">
      <Hero>
        <Banner title="luxarious rooms" subTitle="delux rooms start at $299">
          <Link to={ROUTES.ROOMS} className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
}

export default Home;
