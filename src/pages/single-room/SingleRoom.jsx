import React, { Component } from "react";
import "./SingleRoom.css";

import { Link } from "react-router-dom";

import defaultBg from "../../images/room-1.jpeg";
import { StyledHero } from "../../components/styled-component/StyledHero";

import Banner from "../../components/banner/Banner";
import { RoomContext } from "../../context";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.id,
      defaultBg,
    };
    // console.log(this.state.slug);
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log("Rooms:", room);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      breakfast,
      capacity,
      description,
      extras,
      images,
      pets,
      price,
      size,
    } = room;
    const [mainImage, ...defaultImg] = images;
    return (
      <div className="single-room">
        <StyledHero img={mainImage || defaultBg}>
          <Banner title={`${name} room`}>
            <Link to="/" className="btn-primary">
              back to room
            </Link>
          </Banner>
        </StyledHero>
        <div className="single-room__info">
          <div className="single-room__images">
            {defaultImg.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room__description">
            <div className="single-room__desc">
              <h3>details</h3>
              <p>{description}</p>
            </div>
            <div className="single-room__facility">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </div>
          </div>
        </div>
        <div className="single-room__extras">
          <h6>extras</h6>
          <ul className="single-room__extra-fa">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default SingleRoom;
