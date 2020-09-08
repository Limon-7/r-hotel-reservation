import React from "react";
import "./Room.css";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import defaultImage from "../../images/room-1.jpeg";

function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <div className="room">
      <div className="room__image-container">
        <img src={images[0] || defaultImage} alt="featured room" />
        <div className="room__price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room__link">
          Features
        </Link>
      </div>
      <p className="room__info">{name}</p>
    </div>
  );
}

export default Room;
PropTypes.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
