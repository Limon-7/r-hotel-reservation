import React, { Component } from "react";
import "./Nav.css";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

import { FaAlignRight } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

class Nav extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleClick = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };
  render() {
    return (
      <div className="nav">
        <div className="nav__center">
          <div className="nav__header">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="nav__btn"
              onClick={this.handleToggle}
            >
              {this.state.isOpen ? (
                <FaTimes className="nav__icon" />
              ) : (
                <FaAlignRight className="nav__icon" />
              )}
            </button>
          </div>

          <ul
            className={
              this.state.isOpen ? "nav__menu nav__menu--show" : "nav__menu"
            }
          >
            <li>
              <Link to={ROUTES.HOME} onClick={this.handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.ROOMS} onClick={this.handleClick}>
                Rooms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
