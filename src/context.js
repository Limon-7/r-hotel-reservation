import React, { Component } from "react";

import Client from "./contentful";

// create context
const RoomContext = React.createContext();
// create provider
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  /* 
  
  Client.getEntries({
  content_type: "beachResort",
})
  .then((response) => console.log(response.items))
  .catch(console.error);
  */
  //   get data
  fetchData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResort",
        // order: "sys.createdAt",
        order: "fields.price",
      });

      let rooms = this.objectToArray(response.items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchData();
    // let rooms = this.objectToArray(items);
    // let featuredRooms = rooms.filter((room) => room.featured === true);
    // let maxPrice = Math.max(...rooms.map((item) => item.price));
    // let maxSize = Math.max(...rooms.map((item) => item.size));
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize,
    // });
  }
  objectToArray(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);
      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  }
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    let room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        // dynamic value changes base on name
        [name]: value,
      },
      this.fileterRooms
    );
  };
  fileterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    // all rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    // set state
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
// create consumer
const RoomConsumer = RoomContext.Consumer;
// create higher-order-componet for RoomConsumer

export function WithRoomConsumer(Component) {
  // geting the props from wrapper component
  return function ConsumerRapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} contextValue={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomContext, RoomProvider, RoomConsumer };
