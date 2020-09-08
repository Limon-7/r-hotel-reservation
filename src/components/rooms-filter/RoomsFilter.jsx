import React, { useContext } from "react";
import "./RoomsFilter.css";

import { RoomContext } from "../../context";

import Title from "../title/Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  // console.log("props", context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // types jsx
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  // get unique people
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <div className="roomsFilter">
      <Title title="search rooms" />
      <form className="rooomsFilter__form">
        {/* select type */}
        <div className="roomsFilter__form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="roomsFilter__form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guest */}
        <div className="roomsFilter__form-group">
          <label htmlFor="capacity">room capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="roomsFilter__form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guest */}
        {/* room price */}
        <div className="roomsFilter__form-group">
          <label htmlFor="price">room price {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="roomsFilter__form-control"
          />
        </div>
        {/* end room price */}
        {/* room size */}
        <div className="roomsFilter__form-group">
          <label htmlFor="size">room size</label>
          <div className="roomsFilter__size">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="roomsFilter__size--input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="roomsFilter__size--input"
            />
          </div>
        </div>
        {/* end room size */}
        {/* extras */}
        <div className="roomsFilter__form-group">
          <div className="roomsFilter__extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="roomsFilter__extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </div>
  );
}

export default RoomsFilter;
