import React, { Component } from "react";
import "./Services.css";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "../title/Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero dolor culpa aut, architecto nulla porro obcaecati laborum provident inventore autem tempore suscipit officia? Nisi cumque harum nihil quisquam error!",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero dolor culpa aut, architecto nulla porro obcaecati laborum provident inventore autem tempore suscipit officia? Nisi cumque harum nihil quisquam error!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero dolor culpa aut, architecto nulla porro obcaecati laborum provident inventore autem tempore suscipit officia? Nisi cumque harum nihil quisquam error!",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi vero dolor culpa aut, architecto nulla porro obcaecati laborum provident inventore autem tempore suscipit officia? Nisi cumque harum nihil quisquam error!",
      },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="services" />
        <div className="services__center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services__article">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Services;
