import React from "react";
import "./RoomsContainer.css";

import { WithRoomConsumer } from "../../context";

import RoomsList from "../rooms-list/RoomsList";
import RoomsFilter from "../rooms-filter/RoomsFilter";
import Spinner from "../spinner/Spinner";

//
function RoomsContainer({ contextValue }) {
  // console.log("HOC pattern with context api ", contextValue);
  const { loading, rooms, sortedRooms } = contextValue;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="roomsContainer">
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default WithRoomConsumer(RoomsContainer);

/* import React from "react";
import "./RoomsContainer.css";

import { RoomConsumer } from "../../context";

import RoomsList from "../rooms-list/RoomsList";
import RoomsFilter from "../rooms-filter/RoomsFilter";
import Spinner from "../spinner/Spinner";

function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, rooms, sortedRooms } = value;
        if (loading) {
          return <Spinner />;
        }
        console.log("Rooms Container", value);
        return (
          <div className="roomsContainer">
            <h1>Rooms-container</h1>
            <RoomsList rooms={rooms} />
            <RoomsFilter rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}

export default RoomsContainer;
 */
