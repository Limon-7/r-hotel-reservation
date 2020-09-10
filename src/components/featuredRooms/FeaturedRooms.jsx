import React, { Component } from "react";
import "./FeaturedRooms.css";
import { RoomContext } from "../../context";
import Spinner from "../spinner/Spinner";
import Room from "../room/Room";
import Title from "../title/Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    // console.log(rooms);
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <div className="featuredRooms">
        <Title title="featured rooms" />
        <div className="featuredRooms__center">
          {loading ? <Spinner /> : rooms}
        </div>
      </div>
    );
  }
}
export default FeaturedRooms;
