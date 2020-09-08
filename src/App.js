import React from "react";
// import "./App.css";

import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
import SingleRoom from "./pages/single-room/SingleRoom";
import Error from "./pages/error/Error";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ROOMS} component={Rooms} />
        <Route exact path={ROUTES.SINGLE_ROOM} component={SingleRoom} />
        <Route path={ROUTES.ERROR_404} component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
