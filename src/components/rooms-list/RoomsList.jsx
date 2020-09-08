import React from "react";
import "./RoomsList.css";
import Room from "../room/Room";

function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no room matched your search parameters</h3>
      </div>
    );
  }
  return (
    <div className="roomsList">
      <div className="roomsList__center">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default RoomsList;
