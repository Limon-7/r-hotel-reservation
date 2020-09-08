import React from "react";
import "./Rooms.css";

import { Link } from "react-router-dom";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import RoomsContainer from "../../components/rooms-container/RoomsContainer";

function Rooms({ children }) {
  return (
    <div className="rooms">
      <Hero hero="rooms__hero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </div>
  );
}

export default Rooms;
